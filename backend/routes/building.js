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

router.get("/get", (req, res) => {
    console.log("Request for all existing Building info");
    db.query("SELECT * FROM building", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

module.exports = router