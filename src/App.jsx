import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <SummaryCards />
         <Charts />
    </div>
  );
}

export default App;