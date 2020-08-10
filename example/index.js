const ipInfo = require("../lib");

// Current ip information
ipInfo((err, cLoc) => {
    console.log(err || cLoc);
    // { ip: "94. ... .77",
    //   hostname: "... .com",
    //   city: "...",
    //   region: "England",
    //   country: "GB",
    //   loc: "5...,3...",
    //   org: "... UK Limited",
    //   postal: "..." }
});

// Get information about a known ip
ipInfo("8.8.8.8", (err, cLoc) => {
    console.log(err || cLoc);
    // { ip: "8.8.8.8",
    //   hostname: "google-public-dns-a.google.com",
    //   city: "Mountain View",
    //   region: "California",
    //   country: "US",
    //   loc: "37.3845,-122.0881",
    //   org: "AS15169 Google Inc.",
    //   postal: "94040" }
});

// Get organization
ipInfo("8.8.8.8/org", (err, cLoc) => {
    console.log(err || cLoc);
    // AS15169 Google Inc.
});
