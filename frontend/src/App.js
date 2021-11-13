import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setdata] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9999/").then((res) => setdata(res.data));
  }, []);
  return (
    <div className='App'>
      <h2>shalom</h2>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
