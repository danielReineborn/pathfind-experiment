import React, { useState } from 'react';
import './App.css';
import Grid from "./Component/Grid";

function App() {

  const [vertex, setVertex] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  function handleVertex(e) {
    console.log(e.target.className);
    if (vertex) {
      console.log(e.target.id);
      let startVertex = e.target.id;
      setVertex(null);
      setStart(startVertex);
    } else if (vertex === false) {
      let endVertex = e.target.id;
      console.log(e.target.id);

      setVertex(null);
      setEnd(endVertex);
    }

    console.log(start, end);

  }


  return (
    <div>
      <button onClick={() => setVertex(true)} className="start">Set start-vertex</button>
      <button onClick={() => setVertex(false)} className="end">Set end-vertex</button>

      <Grid handleVertex={handleVertex} start={start} end={end} x={32} y={24} />
    </div>
  );
}

export default App;
