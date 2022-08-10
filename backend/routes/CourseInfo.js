const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const cors = require('cors');

router.use(cors());
router.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'classroom-management-system',
    multipleStatements: true
});

router.post("/Fetch_courseinfo", (req, res) => {
    const courseCode = req.body.courseCode;
    console.log('course Code: '+courseCode);
  
    db.query(
      "SELECT course_title, primary_teacher FROM course WHERE course_code = ?",
      [courseCode],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});


router.post("/Fetch_buildinginfo", (req, res) => {
    const courseCode = req.body.courseCode;
    console.log('course Code: '+courseCode);
  
    db.query(
      "SELECT building  FROM building WHERE course_code = ?",
      [courseCode],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});