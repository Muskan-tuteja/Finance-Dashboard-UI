import { useState } from "react";

const Transactions = ({ role, transactions, setTransactions }) => {
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAdd = () => {
    if (editId) {
      // UPDATE
      const updated = transactions.map((t) =>
        t.id === editId ? { ...t, amount: Number(amount), category, type } : t,
      );
      setTransactions(updated);
      setEditId(null);
    } else {
      // ADD
      const newTransaction = {
        id: transactions.length + 1,
        date: "Today",
        amount: Number(amount),
        category,
        type,
      };
      setTransactions([...transactions, newTransaction]);
    }

    setAmount("");
    setCategory("");
    setType("expense");
    setShowForm(false);
  };

  const filteredData = transactions.filter((item) => {
    return (
      item.category.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || item.type === filter)
    );
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      {role === "admin" && (
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Add Transaction
        </button>
      )}
      {showForm && (
        <div className="bg-white p-4 mb-4 rounded shadow">
          <input
            type="number"
            placeholder="Amount"
            className="border p-2 mr-2"
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            className="border p-2 mr-2"
            onChange={(e) => setCategory(e.target.value)}
          />

          <select
            className="border p-2 mr-2"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-3 py-2 rounded"
          >
            Add
          </button>
        </div>
      )}

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
        <button
          onClick={() => {
            localStorage.removeItem("transactions");
            setTransactions([]);
          }}
          className="bg-red-500 text-white px-3 py-2 rounded"
        >
          Clear Data
        </button>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Date</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Category</th>
              <th className="p-2">Type</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="text-center border-t">
                <td className="p-2">{item.date}</td>
                <td className="p-2">₹{item.amount}</td>
                <td className="p-2">{item.category}</td>
                <td
  className={`p-2 font-semibold ${
    item.type === "income" ? "text-green-600" : "text-red-600"
  }`}
>
  {item.type}
</td>

                <td className="p-2">
                  {role === "admin" && (
                    <button
                      onClick={() => {
                        setEditId(item.id);
                        setAmount(item.amount);
                        setCategory(item.category);
                        setType(item.type);
                        setShowForm(true);
                      }}
                      className="text-blue-500"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
