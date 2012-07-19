
/*
 * GET home page.
 */

var led1 = '/sys/devices/platform/leds-gpio/leds/dvi::usr1/brightness'

var fs = require('fs');

exports.index = function(req, res){
  fs.readFile(led1, 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.render('index', { title: 'test', led1: data.indexOf('1') === 0 ? true : false })
  });
};

exports.setleds = function(req, res) {
  console.log(req.body.led1);
  var on = req.body.led1 === 'on' ? true : false;
  fs.writeFile(led1, on ? '1' : '0', function (err) {
    if (err) throw err;
    console.log('saved!');
    res.redirect('/');
  });
};