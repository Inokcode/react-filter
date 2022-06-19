import express from "express";
import cors from "cors";
import { Users } from "./users.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;
  console.log(q);
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };
  //   res.json("GBU");
  //   res.json({ msg: "Welcome to the app" });
  // res.json(Users.splice(0, 10));
  res.json(search(Users).splice(0, 10));
});

app.listen(4000, () => {
  console.log("Listeneing on Port 4000");
});
