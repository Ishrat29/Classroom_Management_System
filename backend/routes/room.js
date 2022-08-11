const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const cors = require('cors');
const { request } = require('express');

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
          console.log("Room found!");
        }
      }
    );
});

router.post("/create", (req, res) => {
  const room_no = req.body.room;
  const building = req.body.building;
  const floor = req.body.floor;
  const sunday8=req.body.sunday8;
  const sunday8temp=req.body.sunday8temp;
  const sunday9=req.body.sunday9;
  const sunday9temp=req.body.sunday9temp;
  const sunday10=req.body.sunday10;
  const sunday10temp=req.body.sunday10temp;
  const sunday11=req.body.sunday11;
  const sunday11temp=req.body.sunday11temp;
  const sunday12=req.body.sunday12;
  const sunday12temp=req.body.sunday12temp;
  const sunday13=req.body.sunday13;
  const sunday13temp=req.body.sunday13temp;
  const sunday14=req.body.sunday14;
  const sunday14temp=req.body.sunday14temp;
  const sunday15=req.body.sunday15;
  const sunday15temp=req.body.sunday15temp;
  const sunday16=req.body.sunday16;
  const sunday16temp=req.body.sunday16temp;
  const sunday17=req.body.sunday17;
  const sunday17temp=req.body.sunday17temp;
  const monday8=req.body.monday8;
  const monday8temp=req.body.monday8temp;
  const monday9=req.body.monday9;
  const monday9temp=req.body.monday9temp;
  const monday10=req.body.monday10;
  const monday10temp=req.body.monday10temp;
  const monday11=req.body.monday11;
  const monday11temp=req.body.monday11temp;
  const monday12=req.body.monday12;
  const monday12temp=req.body.monday12temp;
  const monday13=req.body.monday13;
  const monday13temp=req.body.monday13temp;
  const monday14=req.body.monday14;
  const monday14temp=req.body.monday14temp;
  const monday15=req.body.monday15;
  const monday15temp=req.body.monday15temp;
  const monday16=req.body.monday16;
  const monday16temp=req.body.monday16temp;
  const monday17=req.body.monday17;
  const monday17temp=req.body.monday17temp;
  const tuesday8=req.body.tuesday8;
  const tuesday8temp=req.body.tuesday8temp;
  const tuesday9=req.body.tuesday9;
  const tuesday9temp=req.body.tuesday9temp;
  const tuesday10=req.body.tuesday10;
  const tuesday10temp=req.body.tuesday10temp;
  const tuesday11=req.body.tuesday11;
  const tuesday11temp=req.body.tuesday11temp;
  const tuesday12=req.body.tuesday12;
  const tuesday12temp=req.body.tuesday12temp;
  const tuesday13=req.body.tuesday13;
  const tuesday13temp=req.body.tuesday13temp;
  const tuesday14=req.body.tuesday14;
  const tuesday14temp=req.body.tuesday14temp;
  const tuesday15=req.body.tuesday15;
  const tuesday15temp=req.body.tuesday15temp;
  const tuesday16=req.body.tuesday16;
  const tuesday16temp=req.body.tuesday16temp;
  const tuesday17=req.body.tuesday17;
  const tuesday17temp=req.body.tuesday17temp;
  const wednesday8=req.body.wednesday8;
  const wednesday8temp=req.body.wednesday8temp;
  const wednesday9=req.body.wednesday9;
  const wednesday9temp=req.body.wednesday9temp;
  const wednesday10=req.body.wednesday10;
  const wednesday10temp=req.body.wednesday10temp;
  const wednesday11=req.body.wednesday11;
  const wednesday11temp=req.body.wednesday11temp;
  const wednesday12=req.body.wednesday12;
  const wednesday12temp=req.body.wednesday12temp;
  const wednesday13=req.body.wednesday13;
  const wednesday13temp=req.body.wednesday13temp;
  const wednesday14=req.body.wednesday14;
  const wednesday14temp=req.body.wednesday14temp;
  const wednesday15=req.body.wednesday15;
  const wednesday15temp=req.body.wednesday15temp;
  const wednesday16=req.body.wednesday16;
  const wednesday16temp=req.body.wednesday16temp;
  const wednesday17=req.body.wednesday17;
  const wednesday17temp=req.body.wednesday17temp;
  const thursday8=req.body.thursday8;
  const thursday8temp=req.body.thursday8temp;
  const thursday9=req.body.thursday9;
  const thursday9temp=req.body.thursday9temp;
  const thursday10=req.body.thursday10;
  const thursday10temp=req.body.thursday10temp;
  const thursday11=req.body.thursday11;
  const thursday11temp=req.body.thursday11temp;
  const thursday12=req.body.thursday12;
  const thursday12temp=req.body.thursday12temp;
  const thursday13=req.body.thursday13;
  const thursday13temp=req.body.thursday13temp;
  const thursday14=req.body.thursday14;
  const thursday14temp=req.body.thursday14temp;
  const thursday15=req.body.thursday15;
  const thursday15temp=req.body.thursday15temp;
  const thursday16=req.body.thursday16;
  const thursday16temp=req.body.thursday16temp;
  const thursday17=req.body.thursday17;
  const thursday17temp=req.body.thursday17temp;

  db.query(
    "INSERT INTO room (room_no, building, floor"
    +", sunday_8, sunday_8_temp"
    +", sunday_9, sunday_9_temp"
    +", sunday_10, sunday_10_temp"
    +", sunday_11, sunday_11_temp"
    +", sunday_12, sunday_12_temp"
    +", sunday_13, sunday_13_temp"
    +", sunday_14, sunday_14_temp"
    +", sunday_15, sunday_15_temp"
    +", sunday_16, sunday_16_temp"
    +", sunday_17, sunday_17_temp"
    +", monday_8, monday_8_temp"
    +", monday_9, monday_9_temp"
    +", monday_10, monday_10_temp"
    +", monday_11, monday_11_temp"
    +", monday_12, monday_12_temp"
    +", monday_13, monday_13_temp"
    +", monday_14, monday_14_temp"
    +", monday_15, monday_15_temp"
    +", monday_16, monday_16_temp"
    +", monday_17, monday_17_temp"
    +", tuesday_8, tuesday_8_temp"
    +", tuesday_9, tuesday_9_temp"
    +", tuesday_10, tuesday_10_temp"
    +", tuesday_11, tuesday_11_temp"
    +", tuesday_12, tuesday_12_temp"
    +", tuesday_13, tuesday_13_temp"
    +", tuesday_14, tuesday_14_temp"
    +", tuesday_15, tuesday_15_temp"
    +", tuesday_16, tuesday_16_temp"
    +", tuesday_17, tuesday_17_temp"
    +", wednesday_8, wednesday_8_temp"
    +", wednesday_9, wednesday_9_temp"
    +", wednesday_10, wednesday_10_temp"
    +", wednesday_11, wednesday_11_temp"
    +", wednesday_12, wednesday_12_temp"
    +", wednesday_13, wednesday_13_temp"
    +", wednesday_14, wednesday_14_temp"
    +", wednesday_15, wednesday_15_temp"
    +", wednesday_16, wednesday_16_temp"
    +", wednesday_17, wednesday_17_temp"
    +", thursday_8, thursday_8_temp"
    +", thursday_9, thursday_9_temp"
    +", thursday_10, thursday_10_temp"
    +", thursday_11, thursday_11_temp"
    +", thursday_12, thursday_12_temp"
    +", thursday_13, thursday_13_temp"
    +", thursday_14, thursday_14_temp"
    +", thursday_15, thursday_15_temp"
    +", thursday_16, thursday_16_temp"
    +", thursday_17, thursday_17_temp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [room_no,building,floor,
        sunday8, sunday8temp
      , sunday9, sunday9temp
      , sunday10, sunday10temp
      , sunday11, sunday11temp
      , sunday12, sunday12temp
      , sunday13, sunday13temp
      , sunday14, sunday14temp
      , sunday15, sunday15temp
      , sunday16, sunday16temp
      , sunday17, sunday17temp
      , monday8, monday8temp
      , monday9, monday9temp
      , monday10, monday10temp
      , monday11, monday11temp
      , monday12, monday12temp
      , monday13, monday13temp
      , monday14, monday14temp
      , monday15, monday15temp
      , monday16, monday16temp
      , monday17, monday17temp
      , tuesday8, tuesday8temp
      , tuesday9, tuesday9temp
      , tuesday10, tuesday10temp
      , tuesday11, tuesday11temp
      , tuesday12, tuesday12temp
      , tuesday13, tuesday13temp
      , tuesday14, tuesday14temp
      , tuesday15, tuesday15temp
      , tuesday16, tuesday16temp
      , tuesday17, tuesday17temp
      , wednesday8, wednesday8temp
      , wednesday9, wednesday9temp
      , wednesday10, wednesday10temp
      , wednesday11, wednesday11temp
      , wednesday12, wednesday12temp
      , wednesday13, wednesday13temp
      , wednesday14, wednesday14temp
      , wednesday15, wednesday15temp
      , wednesday16, wednesday16temp
      , wednesday17, wednesday17temp
      , thursday8, thursday8temp
      , thursday9, thursday9temp
      , thursday10, thursday10temp
      , thursday11, thursday11temp
      , thursday12, thursday12temp
      , thursday13, thursday13temp
      , thursday14, thursday14temp
      , thursday15, thursday15temp
      , thursday16, thursday16temp
      , thursday17, thursday17temp],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({err:1});
      } else {
        console.log("inserted room in database: "+room_no);
        res.send({err:0});
      }
    }
  );
});

router.put("/update", (req, res) => {
  const room_no = req.body.room;
  const building = req.body.building;
  const floor = req.body.floor;
  const sunday8=req.body.sunday8;
  const sunday8temp=req.body.sunday8temp;
  const sunday9=req.body.sunday9;
  const sunday9temp=req.body.sunday9temp;
  const sunday10=req.body.sunday10;
  const sunday10temp=req.body.sunday10temp;
  const sunday11=req.body.sunday11;
  const sunday11temp=req.body.sunday11temp;
  const sunday12=req.body.sunday12;
  const sunday12temp=req.body.sunday12temp;
  const sunday13=req.body.sunday13;
  const sunday13temp=req.body.sunday13temp;
  const sunday14=req.body.sunday14;
  const sunday14temp=req.body.sunday14temp;
  const sunday15=req.body.sunday15;
  const sunday15temp=req.body.sunday15temp;
  const sunday16=req.body.sunday16;
  const sunday16temp=req.body.sunday16temp;
  const sunday17=req.body.sunday17;
  const sunday17temp=req.body.sunday17temp;
  const monday8=req.body.monday8;
  const monday8temp=req.body.monday8temp;
  const monday9=req.body.monday9;
  const monday9temp=req.body.monday9temp;
  const monday10=req.body.monday10;
  const monday10temp=req.body.monday10temp;
  const monday11=req.body.monday11;
  const monday11temp=req.body.monday11temp;
  const monday12=req.body.monday12;
  const monday12temp=req.body.monday12temp;
  const monday13=req.body.monday13;
  const monday13temp=req.body.monday13temp;
  const monday14=req.body.monday14;
  const monday14temp=req.body.monday14temp;
  const monday15=req.body.monday15;
  const monday15temp=req.body.monday15temp;
  const monday16=req.body.monday16;
  const monday16temp=req.body.monday16temp;
  const monday17=req.body.monday17;
  const monday17temp=req.body.monday17temp;
  const tuesday8=req.body.tuesday8;
  const tuesday8temp=req.body.tuesday8temp;
  const tuesday9=req.body.tuesday9;
  const tuesday9temp=req.body.tuesday9temp;
  const tuesday10=req.body.tuesday10;
  const tuesday10temp=req.body.tuesday10temp;
  const tuesday11=req.body.tuesday11;
  const tuesday11temp=req.body.tuesday11temp;
  const tuesday12=req.body.tuesday12;
  const tuesday12temp=req.body.tuesday12temp;
  const tuesday13=req.body.tuesday13;
  const tuesday13temp=req.body.tuesday13temp;
  const tuesday14=req.body.tuesday14;
  const tuesday14temp=req.body.tuesday14temp;
  const tuesday15=req.body.tuesday15;
  const tuesday15temp=req.body.tuesday15temp;
  const tuesday16=req.body.tuesday16;
  const tuesday16temp=req.body.tuesday16temp;
  const tuesday17=req.body.tuesday17;
  const tuesday17temp=req.body.tuesday17temp;
  const wednesday8=req.body.wednesday8;
  const wednesday8temp=req.body.wednesday8temp;
  const wednesday9=req.body.wednesday9;
  const wednesday9temp=req.body.wednesday9temp;
  const wednesday10=req.body.wednesday10;
  const wednesday10temp=req.body.wednesday10temp;
  const wednesday11=req.body.wednesday11;
  const wednesday11temp=req.body.wednesday11temp;
  const wednesday12=req.body.wednesday12;
  const wednesday12temp=req.body.wednesday12temp;
  const wednesday13=req.body.wednesday13;
  const wednesday13temp=req.body.wednesday13temp;
  const wednesday14=req.body.wednesday14;
  const wednesday14temp=req.body.wednesday14temp;
  const wednesday15=req.body.wednesday15;
  const wednesday15temp=req.body.wednesday15temp;
  const wednesday16=req.body.wednesday16;
  const wednesday16temp=req.body.wednesday16temp;
  const wednesday17=req.body.wednesday17;
  const wednesday17temp=req.body.wednesday17temp;
  const thursday8=req.body.thursday8;
  const thursday8temp=req.body.thursday8temp;
  const thursday9=req.body.thursday9;
  const thursday9temp=req.body.thursday9temp;
  const thursday10=req.body.thursday10;
  const thursday10temp=req.body.thursday10temp;
  const thursday11=req.body.thursday11;
  const thursday11temp=req.body.thursday11temp;
  const thursday12=req.body.thursday12;
  const thursday12temp=req.body.thursday12temp;
  const thursday13=req.body.thursday13;
  const thursday13temp=req.body.thursday13temp;
  const thursday14=req.body.thursday14;
  const thursday14temp=req.body.thursday14temp;
  const thursday15=req.body.thursday15;
  const thursday15temp=req.body.thursday15temp;
  const thursday16=req.body.thursday16;
  const thursday16temp=req.body.thursday16temp;
  const thursday17=req.body.thursday17;
  const thursday17temp=req.body.thursday17temp;
  db.query(
    "UPDATE room SET floor = ?"
    +",sunday_8= ?"
    +",sunday_8_temp= ?"
    +",sunday_9= ?"
    +",sunday_9_temp= ?"
    +",sunday_10= ?"
    +",sunday_10_temp= ?"
    +",sunday_11= ?"
    +",sunday_11_temp= ?"
    +",sunday_12= ?"
    +",sunday_12_temp= ?"
    +",sunday_13= ?"
    +",sunday_13_temp= ?"
    +",sunday_14= ?"
    +",sunday_14_temp= ?"
    +",sunday_15= ?"
    +",sunday_15_temp= ?"
    +",sunday_16= ?"
    +",sunday_16_temp= ?"
    +",sunday_17= ?"
    +",sunday_17_temp= ?"
    +",monday_8= ?"
    +",monday_8_temp= ?"
    +",monday_9= ?"
    +",monday_9_temp= ?"
    +",monday_10= ?"
    +",monday_10_temp= ?"
    +",monday_11= ?"
    +",monday_11_temp= ?"
    +",monday_12= ?"
    +",monday_12_temp= ?"
    +",monday_13= ?"
    +",monday_13_temp= ?"
    +",monday_14= ?"
    +",monday_14_temp= ?"
    +",monday_15= ?"
    +",monday_15_temp= ?"
    +",monday_16= ?"
    +",monday_16_temp= ?"
    +",monday_17= ?"
    +",monday_17_temp= ?"
    +",tuesday_8= ?"
    +",tuesday_8_temp= ?"
    +",tuesday_9= ?"
    +",tuesday_9_temp= ?"
    +",tuesday_10= ?"
    +",tuesday_10_temp= ?"
    +",tuesday_11= ?"
    +",tuesday_11_temp= ?"
    +",tuesday_12= ?"
    +",tuesday_12_temp= ?"
    +",tuesday_13= ?"
    +",tuesday_13_temp= ?"
    +",tuesday_14= ?"
    +",tuesday_14_temp= ?"
    +",tuesday_15= ?"
    +",tuesday_15_temp= ?"
    +",tuesday_16= ?"
    +",tuesday_16_temp= ?"
    +",tuesday_17= ?"
    +",tuesday_17_temp= ?"
    +",wednesday_8= ?"
    +",wednesday_8_temp= ?"
    +",wednesday_9= ?"
    +",wednesday_9_temp= ?"
    +",wednesday_10= ?"
    +",wednesday_10_temp= ?"
    +",wednesday_11= ?"
    +",wednesday_11_temp= ?"
    +",wednesday_12= ?"
    +",wednesday_12_temp= ?"
    +",wednesday_13= ?"
    +",wednesday_13_temp= ?"
    +",wednesday_14= ?"
    +",wednesday_14_temp= ?"
    +",wednesday_15= ?"
    +",wednesday_15_temp= ?"
    +",wednesday_16= ?"
    +",wednesday_16_temp= ?"
    +",wednesday_17= ?"
    +",wednesday_17_temp= ?"
    +",thursday_8= ?"
    +",thursday_8_temp= ?"
    +",thursday_9= ?"
    +",thursday_9_temp= ?"
    +",thursday_10= ?"
    +",thursday_10_temp= ?"
    +",thursday_11= ?"
    +",thursday_11_temp= ?"
    +",thursday_12= ?"
    +",thursday_12_temp= ?"
    +",thursday_13= ?"
    +",thursday_13_temp= ?"
    +",thursday_14= ?"
    +",thursday_14_temp= ?"
    +",thursday_15= ?"
    +",thursday_15_temp= ?"
    +",thursday_16= ?"
    +",thursday_16_temp= ?"
    +",thursday_17= ?"
    +",thursday_17_temp= ? WHERE room_no = ? AND building=?",
    [floor,
      sunday8, sunday8temp
    , sunday9, sunday9temp
    , sunday10, sunday10temp
    , sunday11, sunday11temp
    , sunday12, sunday12temp
    , sunday13, sunday13temp
    , sunday14, sunday14temp
    , sunday15, sunday15temp
    , sunday16, sunday16temp
    , sunday17, sunday17temp
    , monday8, monday8temp
    , monday9, monday9temp
    , monday10, monday10temp
    , monday11, monday11temp
    , monday12, monday12temp
    , monday13, monday13temp
    , monday14, monday14temp
    , monday15, monday15temp
    , monday16, monday16temp
    , monday17, monday17temp
    , tuesday8, tuesday8temp
    , tuesday9, tuesday9temp
    , tuesday10, tuesday10temp
    , tuesday11, tuesday11temp
    , tuesday12, tuesday12temp
    , tuesday13, tuesday13temp
    , tuesday14, tuesday14temp
    , tuesday15, tuesday15temp
    , tuesday16, tuesday16temp
    , tuesday17, tuesday17temp
    , wednesday8, wednesday8temp
    , wednesday9, wednesday9temp
    , wednesday10, wednesday10temp
    , wednesday11, wednesday11temp
    , wednesday12, wednesday12temp
    , wednesday13, wednesday13temp
    , wednesday14, wednesday14temp
    , wednesday15, wednesday15temp
    , wednesday16, wednesday16temp
    , wednesday17, wednesday17temp
    , thursday8, thursday8temp
    , thursday9, thursday9temp
    , thursday10, thursday10temp
    , thursday11, thursday11temp
    , thursday12, thursday12temp
    , thursday13, thursday13temp
    , thursday14, thursday14temp
    , thursday15, thursday15temp
    , thursday16, thursday16temp
    , thursday17, thursday17temp,room_no,building],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({err:1});
      } else {
        console.log("updated teacher: "+room_no);
        res.send({err: 0});
      }
    }
  );
});

router.post("/queryVacant", (req, res) => {
  const date = req.body.date;
  const dateTemp = req.body.dateTemp;
  console.log('Room Query Vacant request with: '+date+' '+dateTemp);

  db.query(
    "SELECT * FROM room WHERE "+date+" LIKE '|%' OR "+dateTemp+" LIKE '|y%';",
    [date, dateTemp],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log("Rooms Query Successful!");
      }
    }
  );
});


module.exports = router