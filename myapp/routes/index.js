var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is Alice Kuo Wonderland!' });
});
//可輸出成HTML或者是其他的東西

// http://domain.com:3000/users/ -> jason
router.get('/users', function(req, res, next) {
    res.json({
        //users:["Micky","Alice","Andy","Annie"]
        users: users
    });
});

//可以做login檢察
/*router.get('/user/:userid', function(req, res, next) {
    if(req.params['userid'] == "micky"){
       return res.json({
           status: "Micky login is not allow"   //不准Micky進入，其他人都可進入
       }) ;
    }
    
    return next();  //跑到下面的程式，若寫在前面就變成所有人都能進來
});*/

router.get('/user/:userid', function(req, res, next) {
    var userid = req.params["userid"];
    
    if(User[userid]){
        return next();
    }else{
        return res.json({
           status: "user is not exsited" 
        });
    }
});

router.get('/user/:userid', function(req, res, next) {
    res.json({
        user: req.params["userid"]
    });
});

router.post('/user', function(req, res, next) {
   var user = req.body;
   if ( ! user.name || user.name == "") {
       return res.json({
           status: "user create fail"
       });
   }
   
   User[user.name] = user;
   return res.json({
     user: User[user.name]    
   });
});

module.exports = router;
