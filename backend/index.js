const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'classroom-management-system',
    multipleStatements: true
});

app.listen(3001, ()=>{
    console.log("backend server Running on port 3001");
});

app.post("/studentinfo", (req, res) => {
    const registration = req.body.registration;
    console.log(registration);
  
    db.query(
      "SELECT * FROM student WHERE registration_no = ?",
      [registration],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });


  app.post("/courseinfo", (req, res) => {
    const courseCode = req.body.courseCode;
    console.log(courseCode);
  
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


app.post("/deptinfo", (req, res) => {
  const departmentcode = req.body.departmentcode;
  console.log("{ department code: "+departmentcode+" }");
  
  db.query(
    "SELECT * FROM department WHERE department_code = ?",
    [departmentcode],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/createdept", (req, res) => {
  const deptcode = req.body.deptcode;
  const deptname = req.body.deptname;
  const deptbuilding = req.body.deptbuilding;

  db.query(
    "INSERT INTO department (department_code, name, building) VALUES (?,?,?)",
    [deptcode, deptname, deptbuilding],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({err:1});
      } else {
        console.log("updated department database");
        res.send({err:0});
      }
    }
  );
});

app.post("/createstu", (req, res) => {
  const reg = req.body.reg;
  const name = req.body.name;
  const session = req.body.session;
  const department = req.body.department;

  db.query(
    "INSERT INTO student (registration_no, name, session, department) VALUES (?,?,?,?)",
    [reg, name, session, department],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({err:1});
      } else {
        console.log("inserted student database");
        res.send({err:0});
      }
    }
  );
});

app.put("/updatestu", (req, res) => {
  const reg = req.body.reg;
  const name = req.body.name;
  const session = req.body.session;
  const department = req.body.department;
  db.query(
    "UPDATE student SET name = ?,session = ?,department = ? WHERE registration_no = ?",
    [name, session, department,reg],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({err:1});
      } else {
        console.log("updated Student");
        res.send({err: 0});
      }
    }
  );
});



//router to teacher.js
const teacherRouter = require('./routes/teacher');
app.use('/teacher', teacherRouter);

//router to teacher.js
const courseRouter = require('./routes/Course');
app.use('/Course', courseRouter);