import { useMediaQuery } from "react-responsive";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";


// Sample data
const skillProgressData = [
    { year: "2020", HTML: 50, CSS: 40, JavaScript: 30 },
    { year: "2021", HTML: 70, CSS: 60, JavaScript: 50 },
    { year: "2022", HTML: 85, CSS: 80, JavaScript: 75 },
    { year: "2023", HTML: 95, CSS: 90, JavaScript: 85 },
  ];


const AboutChartSkills = () => {
  
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={skillProgressData}
        margin={{ top: 10, right: 40, left: isMobile ? 0 : 20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="HTML" stroke="#8884d8" />
        <Line type="monotone" dataKey="CSS" stroke="#82ca9d" />
        <Line type="monotone" dataKey="JavaScript" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AboutChartSkills;
