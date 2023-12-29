import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.group(error);
      });
  });
  return (
    <>
      <h1>starting something </h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>;
      })}
    </>
  );
}

export default App;
