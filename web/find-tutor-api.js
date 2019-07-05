const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();

router.use(bodyParser.json());

var tutorList = [

]


  router.get("/api/tutorlist", (req, res) => {
    const orderedTutors = tutorList.sort((t1, t2) => t2._id - t1._id);
    res.send(orderedTutors);
  });
  
  router.post("/api/active-tutor", (req, res) => {
    const { message } = req.body;
    const newTutor = {
      _id: new Date().getTime(),
      message,
      author: "unknown"
    };
    tutorlist.push(newTutor);
    res.send({ message: "Thanks!" });
  });

  router.post("/api/inactive-tutor", (req, res) => {
    const { message } = req.body;
    const newTutor = {
      _id: new Date().getTime(),
      message,
      author: "unknown"
    };
    tutorlist.push(newTutor);
    res.send({ message: "Thanks!" });
  });
  
  module.exports = router;