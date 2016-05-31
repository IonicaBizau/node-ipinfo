const ipInfo = require("../lib");

// Current ip information
ipInfo((err, cLoc) => {
    console.log(err || cLoc);

    // Get information about a known ip
    ipInfo("8.8.8.8", (err, cLoc) => {
        console.log(err || cLoc);

        // Get organization
        ipInfo("8.8.8.8/org", (err, cLoc) => {
            console.log(err || cLoc);
        });
    });
});
