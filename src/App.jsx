import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <SummaryCards />
         <Charts />
          <Transactions />
    </div>
  );
}

export default App;