import React from "react";
import { PieChart, Pie, Cell } from "recharts";

// داده‌های مهارت‌ها
interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
}

export const skillsData: Skill[] = [
  {
    name: "HTML",
    level: 95,
    category: "Web Development",
    description: "Markup language for creating web pages",
  },
  {
    name: "CSS",
    level: 90,
    category: "Web Development",
    description: "Style sheet language for designing web pages",
  },
  {
    name: "Sass",
    level: 80,
    category: "Web Development",
    description: "CSS preprocessor for writing cleaner and faster CSS",
  },
  {
    name: "Tailwind",
    level: 95,
    category: "Web Development",
    description: "Utility-first CSS framework",
  },
  {
    name: "Bootstrap",
    level: 80,
    category: "Web Development",
    description: "CSS framework for building responsive websites",
  },
  {
    name: "JavaScript",
    level: 85,
    category: "Programming",
    description: "Programming language for the web",
  },
  {
    name: "Git",
    level: 65,
    category: "Version Control",
    description: "Version control system for tracking code changes",
  },
  {
    name: "React",
    level: 75,
    category: "Web Development",
    description: "JavaScript library for building user interfaces",
  },
  {
    name: "TypeScript",
    level: 75,
    category: "Programming",
    description: "Typed superset of JavaScript",
  },
  {
    name: "Next.js",
    level: 50,
    category: "Web Development",
    description: "React framework for server-side rendering",
  },
];

// رنگ‌ها برای نمودار دایره‌ای
const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE"];

// کامپوننت نمودار مهارت
const SkillPieChart: React.FC = () => {
  return (
    <div className="flex justify-around items-center flex-wrap mt-11 gap-8 px-8">
      {skillsData.map((skill, index) => {
        const data = [
          { name: skill.name, value: skill.level,someColor: null }, // سطح مهارت
          { name: "Remaining", value: 100 - skill.level,someColor: null }, // درصد باقی‌مانده
        ];

        return (
          <div key={index} className="flex flex-col justify-center items-center">
            <div
              style={{ width: 60, height: 60, position: "relative" }}
              className="flex justify-center mx-auto z-20 cursor-pointer"
            >
              <PieChart width={60} height={60}>
                <Pie
                  data={data}
                  innerRadius={25}
                  outerRadius={30}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.someColor || COLORS[index % COLORS.length]} 
                      stroke="none"
                    />
                  ))}
                </Pie>
              </PieChart>

              {/* متن در مرکز نمودار */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  flexDirection: "column",
                  fontSize: "12px",
                }}
                className="text-[#333333]"
              >
                <span className="border-b-2 border-[#e5e5e5] pb-[1px]">
                  {skill.level}%
                </span>
              </div>
            </div>
            <p className="mt-2 text-center">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillPieChart;
