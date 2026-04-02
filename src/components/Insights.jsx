const Insights = ({ transactions }) => {

  // Highest spending category
  const expenseData = transactions.filter(t => t.type === "expense");

  const categoryTotal = {};

  expenseData.forEach((item) => {
    categoryTotal[item.category] =
      (categoryTotal[item.category] || 0) + item.amount;
  });

  let highestCategory = "";
  let maxAmount = 0;

  for (let cat in categoryTotal) {
    if (categoryTotal[cat] > maxAmount) {
      maxAmount = categoryTotal[cat];
      highestCategory = cat;
    }
  }

  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
        <h2 className="text-xl font-bold mb-2">Insights</h2>

        {highestCategory ? (
          <p>
             Highest spending category: <b>{highestCategory}</b> (₹{maxAmount})
          </p>
        ) : (
          <p>No insights available</p>
        )}
      </div>
    </div>
  );
};

export default Insights;