import { useState } from "react";

const Transactions = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const data = [
    { id: 1, date: "1 Apr", amount: 500, category: "Food", type: "expense" },
    { id: 2, date: "2 Apr", amount: 2000, category: "Salary", type: "income" },
    { id: 3, date: "3 Apr", amount: 1000, category: "Shopping", type: "expense" },
  ];

  const filteredData = data.filter((item) => {
    return (
      item.category.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || item.type === filter)
    );
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by category"
          className="border p-2 rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Date</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Category</th>
              <th className="p-2">Type</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="text-center border-t">
                  <td className="p-2">{item.date}</td>
                  <td className="p-2">₹{item.amount}</td>
                  <td className="p-2">{item.category}</td>
                  <td
                    className={`p-2 ${
                      item.type === "income" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.type}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;