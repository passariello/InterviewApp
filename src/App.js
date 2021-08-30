import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const axios = require("axios");
  const baseURL = "http://localhost:7071";
  const [images, setImages] = useState([]);

  const getEvents = () => {
    axios
      .get(`${baseURL}/events`)
      .then(function (response) {
        setImages(response.data.scanResults);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div
      className="App"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div> button left </div>
      {images.length > 1 && <img src={images[1].jpg} />}
      <div> button right</div>
    </div>
  );
}

export default App;
