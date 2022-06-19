import { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:4000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li className="listItem" key={user.id}>
            {user.first_name}
            {user.id}
          </li>
        ))}
      </ul> */}
      <Table data={data} />
    </div>
  );
}

export default App;
