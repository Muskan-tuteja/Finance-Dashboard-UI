import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

const data = [
  { month: "Jan", balance: 20000 },
  { month: "Feb", balance: 30000 },
  { month: "Mar", balance: 25000 },
  { month: "Apr", balance: 40000 },
];

const pieData = [
  { name: "Food", value: 4000 },
  { name: "Rent", value: 8000 },
  { name: "Shopping", value: 3000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Charts = () => {
  return (
    <div className="p-4 grid md:grid-cols-2 gap-6">
      
      {/* Line Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="mb-2 font-bold">Balance Trend</h2>
        <LineChart width={300} height={200} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="mb-2 font-bold">Spending Breakdown</h2>
        <PieChart width={300} height={200}>
          <Pie data={pieData} dataKey="value" outerRadius={80}>
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

    </div>
  );
};

export default Charts;