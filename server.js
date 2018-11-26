'use strict'

var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var port =  4000

app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.listen(port) 
app.get('/', function (req, res, next) {
  res.sendfile('./public/index.html')
})