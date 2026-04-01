const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Finance Dashboard</h1>
      <select className="text-black p-1 rounded">
        <option>Viewer</option>
        <option>Admin</option>
      </select>
    </div>
  );
};

export default Navbar;