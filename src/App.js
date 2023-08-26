import html2canvas from 'html2canvas';
import { useState } from "react";
import "./App.css";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [image, setImage] = useState("");

  const onChangeLinea1 = (event) => {
    setLinea1(event.target.value);
  };
  const onChangeLinea2 = (event) => {
    setLinea2(event.target.value);
  };
  const onChangeImage = (event) => {
    setImage(event.target.value);
  };

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImage}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>{" "}
      <br />
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" />{" "}
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" />{" "}
      <br />
      <button onClick={onClickExportar}>Exportar</button>
      <div className="meme" id='meme'>
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={`/img/${image}.jpg`} alt={image} />
      </div>
    </div>
  );
}

export default App;
