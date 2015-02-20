'use strict';
var express = require('express');
var myUsers = require('../modules/mymodule.js');
//var Salespersonlist = require('../models/model_salespersonlist.js');
var router = express.Router();

var users={};
    /*
    = [
    {id:1, fName:'Hege',  lName:"Pege", age:20 , sex:"Female" },
    {id:2, fName:'Kim',   lName:"Pim", age:24 , sex:"Male"},
    {id:3, fName:'Sal',   lName:"Smith", age:33 , sex:"Female" },
    {id:4, fName:'Jack',  lName:"Jones", age:47 , sex:"Female" },
    {id:5, fName:'John',  lName:"Doe",age:50 , sex:"Male" },
    {id:6, fName:'Nsee',  lName:"Kics", age:21 , sex:"Female" },
    {id:7, fName:'Jusc',   lName:"Uism", age:64 , sex:"Male"},
    {id:8, fName:'Qusn',   lName:"Bjic", age:19 , sex:"Female" },
    {id:9, fName:'Vack',  lName:"Yones", age:27 , sex:"Female" },
    {id:10, fName:'Aohn',  lName:"Boe",age:59 , sex:"Male" },
    {id:11, fName:'Lege',  lName:"Bege", age:40 , sex:"Female" },
    {id:12, fName:'Oim',   lName:"Oim", age:14 , sex:"Male"},
    {id:13, fName:'Ial',   lName:"Imith", age:63 , sex:"Female" },
    {id:14, fName:'Qack',  lName:"Jones", age:77 , sex:"Female" },
    {id:15, fName:'Cohn',  lName:"Doe",age:58 , sex:"Male" },
    {id:16, fName:'Bege',  lName:"Mege", age:24 , sex:"Female" },
    {id:17, fName:'Icssim', lName:"Pahsim", age:26 , sex:"Male"},
    {id:18, fName:'Sal',   lName:"Smith", age:32 , sex:"Female" },
    {id:19, fName:'Jassdk',  lName:"Cones", age:48 , sex:"Female" },
    {id:20, fName:'Csohn',  lName:"Asdoe",age:59 , sex:"Male" },
    {id:21, fName:'Zsdege',  lName:"Xsege", age:32 , sex:"Female" },
    {id:22, fName:'Kisd',   lName:"Pasim", age:44 , sex:"Male"},
    {id:23, fName:'Lsdal',   lName:"Csmith", age:23 , sex:"Female" },
    {id:24, fName:'Ysdack',  lName:"Tsdones", age:67 , sex:"Female" },
    {id:25, fName:'Rsdd',  lName:"Sdoe",age:15 , sex:"Male" },
    {id:26, fName:'Wsdeter', lName:"Msan", age:11 , sex:"Male" },
    {id:27, fName:'Jassdk',  lName:"Cones", age:48 , sex:"Female" }
];
*/
router.use(function(req,res,next){
    console.log('something is happening');
    next();
});

router.post('/display',function(req,res){
    //console.log(req);
    myUsers.display(req,function(result){
        console.log(result);
        res.send(result);
   });

});

router.post('/editUser', function(req, res) {
    myUsers.editUser(req, function(result) {
        res.send(result);
    });
});

router.post('/addUser',function(req,res){
    myUsers.addUser(req, function(result) {
        res.send(result);
    });
});

router.post('/deleteUser',function(req,res){
    //console.log(req);
    myUsers.deletefunc(req, function(result) {
        res.send(result);
    });
});



module.exports = router;