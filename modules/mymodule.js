'use strict';
var mysql = require('mysql');

var pool = mysql.createPool({
    host     : '',
    user     : '',
    password : ''
});

function MyUsers() {
}

MyUsers.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM users_bill;';
    this.query(req,queryStr,done);

};

MyUsers.prototype.editUser=function(req,done){
    console.log("111111111");
    console.log(req.body);
    var id=this.addQuotes(req.body.id)
    var firstname = this.addQuotes(req.body.fName);
    var lastname = this.addQuotes(req.body.lName);
    var age = this.addQuotes(req.body.age);
    var sex = this.addQuotes(req.body.sex)
    var queryStr = "UPDATE `test`.`users_bill` SET fName="+firstname+" ,lName="+lastname+" ,age="+age+",sex="+sex+"  WHERE id="+id;
    console.log(queryStr);
    this.query(req,queryStr,done);
};

MyUsers.prototype.addUser=function(req,done){
        console.log(req.body);
        var firstname = this.addQuotes(req.body.fName);
        var lastname = this.addQuotes(req.body.lName);
        var age = this.addQuotes(req.body.age);
        var sex = this.addQuotes(req.body.sex)
        var queryStr = "INSERT INTO `test`.`users_bill` (`fName`, `lName`, `age`, `sex`) VALUES ( "+firstname+", "+lastname+", "+age+", "+sex+");";
        console.log(queryStr);
        this.query(req,queryStr,done);


};

MyUsers.prototype.deletefunc=function(req,done){
    if(req.body.id){
        var personid = this.addQuotes(req.body.id);
        var queryStr = "DELETE FROM `myusers`.`users` WHERE `id`="+req.body.id+";";
        console.log(queryStr);
        this.query(req,queryStr,done);
    }

};

MyUsers.prototype.query = function (req,queryString,done) {
    pool.getConnection(function(err, connection) {
        // Use the connection
        if (err) {
            done({"msg": "DB connection error"});
        }
        else{
            connection.query('use test');
            connection.query( queryString, function(err, rows) {
                // And done with the connection.
                console.log(err);
                if (err) {
                    done({"msg": "DB error. Please check DB log."});
                }
                else{
                    console.log('The solution is: ', rows);//我这里rows[0].return_code 是undefined
                    done(rows);
                }
                connection.release();//connection.end()是完全关闭
                // Don't use the connection here, it has been returned to the pool.
            });
        }

    });
};


MyUsers.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};
module.exports = new MyUsers();