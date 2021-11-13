import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setdata] = useState("");
  const [data2, setdata2] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9999/").then((res) => setdata(res.data));
    axios
      .get("http://localhost:9999/api/test")
      .then((res) => setdata2(res.data));
  }, []);
  return (
    <div className='App'>
      <h2>shalom</h2>
      <h2>{data}</h2>
      <h2>{data2}</h2>
    </div>
  );
}

export default App;
