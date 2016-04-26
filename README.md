
# ipinfo [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/ipinfo.svg)](https://www.npmjs.com/package/ipinfo) [![Downloads](https://img.shields.io/npm/dt/ipinfo.svg)](https://www.npmjs.com/package/ipinfo) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> An http://ipinfo.io NodeJS wrapper.

## :cloud: Installation

```sh
$ npm i --save ipinfo
```


## :clipboard: Example



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

## :memo: Documentation


### `IpInfo(type, callback)`
Makes requests to the ipinfo.io resources.

#### Params
- **String** `type`: An optional string parameter that can be:
 - An ip (e.g. `"8.8.8.8"`)
 - An ip and the a field (e.g. `"8.8.8.8/org"`)
- **Function** `callback`: The callback function.

#### Return
- ****



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`cli-sunset`](https://github.com/IonicaBizau/cli-sunset)—A fancy command line tool for knowing the sunset time.
 - [`ipinfo-cli`](https://github.com/beatfreaker/ipinfo-cli) (by Chintan Radia)—Get current ip information
 - [`sphere-ipinfo-mashup`](https://github.com/mmoelli/sphere-ipinfo-mashup) (by Martin Möllmann)—Create carts in SPHERE.IO with information based on your IP address.
 - [`sunset-year`](https://github.com/IonicaBizau/sunset-year#readme)—Sunset times during the year, every week.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
