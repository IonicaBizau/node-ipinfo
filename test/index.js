// Dependencies
var IpInfo = require("../lib");

// Current ip information
IpInfo(function (err, cLoc) {
    console.log(err || cLoc);

    // Get information about a known ip
    IpInfo("8.8.8.8", function (err, cLoc) {
        console.log(err || cLoc);

        // Get organization
        IpInfo("8.8.8.8/org", function (err, cLoc) {
            console.log(err || cLoc);
        });
    });
});
