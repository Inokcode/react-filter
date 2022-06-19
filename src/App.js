import { useId, useState } from "react";
import "./App.css";
import { Users } from "./users";

function App() {
  // const id = useId();
  // console.log(id);
  const [query, setQuery] = useState("");
  // console.log(
  //   Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  // );
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li className="listItem" key={user.id}>
            {user.first_name}
            {user.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
