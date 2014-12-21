ipinfo
======
An http://ipinfo.io NodeJS wrapper.

# Installation
```sh
$ npm install ipinfo
```

# Example
```js
// Dependencies
var IpInfo = require("ipinfo");

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
```

# Documentation
## `IpInfo(type, callback)`
Makes requests to the ipinfo.io resources.

### Params
- **String** `type`: An optional string parameter that can be:
 - An ip (e.g. `"8.8.8.8"`)
 - An ip and the a field (e.g. `"8.8.8.8/org"`)

- **Function** `callback`: The callback function.

# How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

# License
See the [LICENSE](./LICENSE) file.
