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

router.post("/courseinfo", (req, res) => {
    const courseCode = req.body.courseCode;
    console.log('course Code: '+courseCode);
  
    db.query(
      "SELECT * FROM course WHERE course_code = ?",
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


router.post("/createcourse", (req, res) => {
    const courseCode = req.body.courseCode;
    const courseTitle = req.body.courseTitle;
    const department = req.body.department;
    const PrimaryTeacher = req.body.PrimaryTeacher;
    const SecondaryTeacher = req.body.SecondaryTeacher;
    const CRreg = req.body.CRreg;
    const CRreg2 = req.body.CRreg2;
  
    db.query(
      "INSERT INTO teacher (course_code, course_title, department, primary_teacher, secondary_teacher, class_representative1, class_representative2 ) VALUES (?,?,?,?)",
      [courseCode, courseTitle, department, PrimaryTeacher, SecondaryTeacher, CRreg, CRreg2],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send({err:1});
        } else {
          console.log("inserted course database: "+courseCode);
          res.send({err:0});
        }
      }
    );
});

router.put("/updatecourse", (req, res) => {
    const courseCode = req.body.courseCode;
    const courseTitle = req.body.courseTitle;
    const department = req.body.department;
    const PrimaryTeacher = req.body.PrimaryTeacher;
    const SecondaryTeacher = req.body.SecondaryTeacher;
    const CRreg = req.body.CRreg;
    const CRreg2 = req.body.CRreg2;
    db.query(
      "UPDATE teacher SET course_title = ?, department = ?, primary_teacher = ?, secondary_teacher = ?, class_representative1 = ?, class_representative2 = ? WHERE course_code = ?",
      [courseTitle, department, PrimaryTeacher, SecondaryTeacher, CRreg, CRreg2, courseCode],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send({err:1});
        } else {
          console.log("updated course: "+courseCode);
          res.send({err: 0});
        }
      }
    );
});
 
module.exports = router