import { useState } from "react";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";

function App() {
  const [role, setRole] = useState("viewer");

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar role={role} setRole={setRole} />
      <SummaryCards />
      <Charts />
      <Transactions role={role} />
    </div>
  );
}

export default App;