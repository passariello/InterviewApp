import "./App.css";
import { useEffect, useState } from "react";
import NavigationBar from "./pages/NavigationBar";

function App() {
  const axios = require("axios");
  const baseURL = "http://localhost:7071";
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //TODO: API functions (more to be added) should be in their own file!
  const getEvents = () => {
    axios
      .get(`${baseURL}/events`)
      .then(function (response) {
        setImages(response.data.scanResults);
        console.log(response);
      })
      .catch(function (error) {
        //TODO: this should display an error in the UI!
        console.log(error);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    //TODO: This code should be factored out into multiple files
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <NavigationBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "85%",
          height: "100%",
        }}
      >
        {/* TODO: This button does nothing!  */}
        <button type="button">Previous Image</button>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div> {images.length} total images </div>
            <div> Index: {currentImageIndex} </div>
          </div>
          {images.length > 0 && <img src={images[currentImageIndex].jpg} />}
          {images[currentImageIndex]?.createdOn && (
            <div> Scan Timestamp: {images[currentImageIndex].createdOn} </div>
          )}
          {/* TODO: Finish adding image metadata!  */}
          <div> Image Metadata: INCOMPLETE </div>
          <div> Number of Detections: INCOMPLETE </div>
        </div>
        {/* TODO: This button also does nothing  */}
        <button type="button">Next Image</button>
      </div>
    </div>
  );
}

export default App;
