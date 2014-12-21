// Dependencies
var JsonRequest = require("jsonrequest");

/**
 * IpInfo
 * Makes requests to the ipinfo.io resources.
 *
 * @name IpInfo
 * @function
 * @param {String} type An optional string parameter that can be:
 *
 *  - An ip (e.g. `"8.8.8.8"`)
 *  - An ip and the a field (e.g. `"8.8.8.8/org"`)
 *
 * @param {Function} callback The callback function.
 * @return {undefined}
 */
var IpInfo = module.exports = function (type, callback) {

    var url = null;

    if (typeof type === "function") {
        url = IpInfo.HOSTNAME + "json";
        callback = type;
    } else if (IpInfo.IP_REGEX.test(type)) {
        url = IpInfo.HOSTNAME + type + "/json";
    } else {
        url = IpInfo.HOSTNAME + type;
    }

    JsonRequest(url, callback);
};

// Constants
IpInfo.HOSTNAME = "http://ipinfo.io/";
IpInfo.IP_REGEX = /^\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b$/;
