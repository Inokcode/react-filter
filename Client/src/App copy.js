import { useId, useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./users";

function App() {
  // const id = useId();
  // console.log(id);
  const [query, setQuery] = useState("");

  // console.log(
  //   Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  // );
  // for first name
  // const search = (data) => {
  //   return data.filter((item) => item.first_name.toLowerCase().includes(query)); // for first name
  // };
  //for all
  const keys = ["first_name", "last_name", "email"];
  console.log(Users[0]["email"]);
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
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
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
