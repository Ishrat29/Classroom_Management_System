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

router.post("/info", (req, res) => {
    const building = req.body.building;
    const roomNo = req.body.roomNo;
    console.log('Room info request with: '+building+' '+roomNo);
  
    db.query(
      "SELECT * FROM room WHERE building = ? AND room_no = ?",
      [building, roomNo],
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