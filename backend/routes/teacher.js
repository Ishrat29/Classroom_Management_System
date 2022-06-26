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
    const email = req.body.email;
    console.log('/teacher/info email: '+email);
  
    db.query(
      "SELECT * FROM teacher WHERE e_mail = ?",
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

router.post("/create", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const mobile = req.body.mobile;
    const department = req.body.department;
  
    db.query(
      "INSERT INTO teacher (e_mail, name, mobile, department) VALUES (?,?,?,?)",
      [email, name, mobile, department],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send({err:1});
        } else {
          console.log("inserted teacher database: "+email);
          res.send({err:0});
        }
      }
    );
});
  
router.put("/update", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const mobile = req.body.mobile;
    const department = req.body.department;
    db.query(
      "UPDATE teacher SET name = ?,mobile = ?,department = ? WHERE e_mail = ?",
      [name, mobile, department,email],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send({err:1});
        } else {
          console.log("updated teacher: "+email);
          res.send({err: 0});
        }
      }
    );
});

module.exports = router