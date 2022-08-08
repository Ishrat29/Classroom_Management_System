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

router.post("/userinfo", (req, res) => {
    const userName_signUp = req.body.userName_signUp;
    const userDept_signUp = req.body.userDept_signUp;
    const userMail_signUp = req.body.userMail_signUp;
    const userPass_signUp = req.body.userPass_signUp;
    console.log('User Mail: '+userMail_signUp);
  
    db.query(
        "INSERT INTO user (user_name, user_dept, user_mail, user_pass) VALUES (?,?,?,?)",
        [userName_signUp, userDept_signUp, userMail_signUp, userPass_signUp],
        (err, result) => {
          if (err) {
            console.log(err);
            res.send({err:1});
          } else {
            console.log("inserted user database: "+userMail_signUp);
            res.send({err:0});
          }
        }
      );
  });



module.exports = router