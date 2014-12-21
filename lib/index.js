// Dependencies
var JsonRequest = require("jsonrequest");

var IpInfo = module.exports = function (type, callback) {

    var url = null;

    if (typeof options === "function") {
        url = IpInfo.HOSTNAME + "json";
    } else if (IpInfo.IP_REGEX.test(type)) {
        url = IpInfo.HOSTNAME + type + "/json";
    } else {
        url = IpInfo.HOSTNAME + type;
    }

    JsonRequest(url, callback);
};

IpInfo.HOSTNAME = "http://ipinfo.io/";
IpInfo.IP_REGEX = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
