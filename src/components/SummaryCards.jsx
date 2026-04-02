const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      
      <div className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
        <h2>Total Balance</h2>
        <p className="text-xl font-bold">₹50,000</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
        <h2>Income</h2>
        <p className="text-xl font-bold">₹70,000</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
        <h2>Expenses</h2>
        <p className="text-xl font-bold">₹20,000</p>
      </div>

    </div>
  );
};

export default SummaryCards;