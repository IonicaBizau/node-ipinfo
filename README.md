# ipinfo [![Support this project][donate-now]][paypal-donations]

An http://ipinfo.io NodeJS wrapper.

## Installation

```sh
$ npm i --save ipinfo
```

## Example

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

## Documentation

### `IpInfo(type, callback)`
Makes requests to the ipinfo.io resources.

#### Params
- **String** `type`: An optional string parameter that can be:
 - An ip (e.g. `"8.8.8.8"`)
 - An ip and the a field (e.g. `"8.8.8.8/org"`)
- **Function** `callback`: The callback function.

#### Return
- ****

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`cli-sunset`](https://github.com/IonicaBizau/cli-sunset)

 - [`ipinfo-cli`](https://github.com/beatfreaker/ipinfo-cli) by Chintan Radia

 - [`sphere-ipinfo-mashup`](https://github.com/mmoelli/sphere-ipinfo-mashup) by Martin Möllmann

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md