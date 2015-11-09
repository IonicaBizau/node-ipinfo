# ipinfo [![Support this project][donate-now]][paypal-donations]

An http://ipinfo.io NodeJS wrapper.

## Installation

```sh
$ npm i -g ipinfo
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

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md