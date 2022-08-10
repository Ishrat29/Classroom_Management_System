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

router.post("/Fetch_course", (req, res) => {
    const email = req.body.email;
    console.log('/teacher/info email: '+email);
  
    db.query(
      "SELECT course_code  FROM teacher WHERE e_mail = ?",
      
      [email],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});

router.post("/Fetch_room", (req, res) => {
    const email = req.body.email;
    console.log('/teacher/info email: '+email);
db.query(
    "SELECT room_no,building  FROM room WHERE course_code= ?",
    
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router

