# Interview Application Instructions

This project is a barebones version of our production application. It is a basic web page that calls a mock API and displays images from said request. At a minimum, we will be reviewing this code during your technical interview. We recommend interested applicants fork this repository and improve it in any way they see fit. You can find a list of recommended tasks below that closely mimic current Kuva projects. We understand that people are busy and have their own work to prioritize, so it is not necessary that you complete all the tasks. That being said, finishing at least one of them will give you a feel for the work we do! 

Have fun with it! If you find a bug, dislike the UX, or are frustrated by the file structure, change it! This should be a fun way of working on whatever part of frontend development that you enjoy the best. 

## Run the Project 

### `npm start`

Concurrently runs the app on port 3000 & a jsonserver on port 7071.\
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

More information about available scripts can be found at [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). 

## Json Server 

This project mimics our production application APIs using the jsonserver package. \
More information is available at [JsonServer documentation](https://www.npmjs.com/package/json-server).

The JsonServer runs on port 7071. The json files contain a list of organizations (clients), a list of available cameras, and a list of gas events (this includes our scanresults", an array of images and their associated metadata). You can read and write to the json files using standard HTTP Methods (GET, POST, PUT, DELETE). The project currently uses Axios to handle HTTP requests. 

## Recommended Tasks

### Right & Left Arrow Buttons 

There is currently no way of moving from one image in the list to the next! 

##### Filter images with detections 

Once you're able to scroll through available, it may be useful to filter out images that have no gas detections. Each image should have a detectionList field in its metadata. A simple toggle should do the trick!  

### Switch Selected Cameras

The jsonserver has a list of available cameras. It would be helpful to get that list in the frontend, and allow the user to select which camera they would like to see. 

### Add Detection Boxes

### Add Redux/Context Providers 


