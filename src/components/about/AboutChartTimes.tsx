// Import necessary components from Recharts
import { useMediaQuery } from "react-responsive";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample data
const studyHoursData = [
  { week: "Week 1", studyHours: 30, projectHours: 12 },
  { week: "Week 2", studyHours: 32, projectHours: 15 },
  { week: "Week 3", studyHours: 35, projectHours: 20 },
  { week: "Week 4", studyHours: 40, projectHours: 25 },
];

const AboutChartTimes = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={studyHoursData} margin={{ top: 10, right: 40, left: isMobile ? 0 : 20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="studyHours" fill="#8884d8" />
        <Bar dataKey="projectHours" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AboutChartTimes;
