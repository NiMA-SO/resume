import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useMediaQuery } from "react-responsive";

// تعریف نوع داده‌های مهارت‌ها
interface Skill {
  name: string;
  level: number;
  category: string;  // دسته‌بندی
  description: string; // توضیحات کوتاه
}

export const skillsData: Skill[] = [
  { name: "HTML", level: 95, category: "Web Development", description: "Markup language for creating web pages" },
  { name: "CSS", level: 90, category: "Web Development", description: "Style sheet language for designing web pages" },
  { name: "Sass", level: 80, category: "Web Development", description: "CSS preprocessor for writing cleaner and faster CSS" },
  { name: "Tailwind", level: 95, category: "Web Development", description: "Utility-first CSS framework" },
  { name: "Bootstrap", level: 80, category: "Web Development", description: "CSS framework for building responsive websites" },
  { name: "JavaScript", level: 85, category: "Programming", description: "Programming language for the web" },
  { name: "Git", level: 65, category: "Version Control", description: "Version control system for tracking code changes" },
  { name: "React", level: 75, category: "Web Development", description: "JavaScript library for building user interfaces" },
  { name: "TypeScript", level: 75, category: "Programming", description: "Typed superset of JavaScript" },
  { name: "Next.js", level: 50, category: "Web Development", description: "React framework for server-side rendering" },
];

// رنگ‌ها
const colors = [
  "#8884d8",
  "#83a6ed",
  "#8dd1e1",
  "#82ca9d",
  "#a4de6c",
  "#d0ed57",
  "#f44336",
];

// تابعی برای تعیین رنگ هر مهارت بر اساس سطح
const getColorForSkill = (level: number): string => {
  if (level > 90) return colors[3];
  if (level > 80) return colors[4];
  if (level > 70) return colors[5];
  if (level > 60) return colors[2];
  if (level > 40) return colors[1];
  if (level > 20) return colors[0];
  return colors[6];
};

// رندر سفارشی برای Tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { name, description, level } = payload[0].payload;
    return (
      <div className="bg-white p-2 rounded shadow-md text-gray-800">
        <p className="font-bold">{name}</p>
        <p className="text-sm">{description}</p>
        <p className="text-xs">Level: {level}%</p>
      </div>
    );
  }
  return null;
};

const SkillBarChart: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="w-full lg:w-2/3">
      <ResponsiveContainer width="100%" height={isMobile ? 400 : 400}>
        <BarChart
          data={skillsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout={isMobile ? "vertical" : "horizontal"}
          barCategoryGap={isMobile ? 10 : 30} // فاصله بین ستون‌ها
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          {isMobile ? (
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#4b5563", fontSize: 12 }}
            />
          ) : (
            <XAxis dataKey="name" tick={{ fill: "#4b5563", fontSize: 14 }} />
          )}
          {isMobile ? (
            <XAxis type="number" tick={{ fill: "#4b5563", fontSize: 12 }} />
          ) : (
            <YAxis tick={{ fill: "#4b5563", fontSize: 14 }} />
          )}
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="level"
            radius={[0, 10, 0, 0]}
            barSize={isMobile ? 30 : 50}
          >
            {skillsData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getColorForSkill(entry.level)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillBarChart;
