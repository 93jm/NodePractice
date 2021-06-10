const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
}) //첫번째 인자는 포트번호이며 node를 실행하면 인터넷 창으로 localhost:3000 접속 시 Cannot GET / 이 표시된다



app.set('views', __dirname + '/views'); //dirname은 현재 디렉토리를 의미 - 즉 views 폴더를 의미한다.
app.set('view engine', 'ejs'); //ejs라는 엔진을 사용하며 ejs는 임베디드 자바스크립트 템플릿을 의미한다. html안에서 자바스크립트 코드를 같이 쓸 수 있게끔 해준다.
app.engine('html', require('ejs').renderFile);

//아래는 router 구현
app.get('/', function(req, res){
    res.render('index.html')
})

app.get('/about', function(req, res){
    res.render('about.html')
})

//mysql 연결을 위해 db정보를 입력

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});


//getConnection으로 db 연결
app.get('/db', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('select * from Test', function (error, results, fields) {
            res.send(JSON.stringify(result));
            console.log('results',results);
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
})

