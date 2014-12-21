// Dependencies
var IpInfo = require("../lib");

IpInfo(function (err, cLoc) {
    console.log(err || cLoc);
});
