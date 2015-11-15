// console.log('test');
/*開啟一個簡單的web server*/
var http =  require("http"); //把http模組載入
var fs = require("fs"); //利用filesystem模組載入資料
var request = require('request');

http.createServer(function(req,res){ //建server，()為執行這個東西，
                                    //function為固定格式，一個requse物件，一個reponse
    var content = '';   //直接抓取內容
    
    //這裡要知道資料如何流，才不會造成無法看見內容
/*    fs.readFile("./demo.html", function(err,file){
        content += file;    //將檔案放進content中
        res.end(content);   //當檔案讀完之後，就會回傳資料
    });
*/
    //嵌入整個網頁
    request("http://www.csie.isu.edu.tw/upload/80203/index.html",function(err,response, body){
        content += body;    //將網頁body放進content中
        res.end(content);   //當檔案讀完之後，就會回傳(call back)資料
    });

    /*setTimeout(function() { //也就是在設中斷器
        res.end(content);
        
    }, 5000);  //讓使用者等待一下，有些人會這樣寫，作法不好
    */   
    
    //res.end("Welcome to my Server"); //顯示welcome to my server
}).listen(3000);    //聽port3000; 匿名函式