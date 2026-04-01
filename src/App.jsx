import { useState } from "react";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";



function App() {
  const [role, setRole] = useState("viewer");

  const [transactions, setTransactions] = useState([
  { id: 1, date: "1 Apr", amount: 500, category: "Food", type: "expense" },
  { id: 2, date: "2 Apr", amount: 2000, category: "Salary", type: "income" },
]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar role={role} setRole={setRole} />
      <SummaryCards />
      <Charts />
     <Transactions
  role={role}
  transactions={transactions}
  setTransactions={setTransactions}
/>

<Insights transactions={transactions} />
    </div>
  );
}

export default App;