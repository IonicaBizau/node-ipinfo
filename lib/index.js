const request = require("jsonrequest");

/**
 * ipInfo
 * Makes requests to the ipinfo.io resources.
 *
 * @name ipInfo
 * @function
 * @param {String} type An optional string parameter that can be:
 *
 *  - An ip (e.g. `"8.8.8.8"`)
 *  - An ip and the a field (e.g. `"8.8.8.8/org"`)
 *
 * @param {String} token The token used if you have to make an authorized request.
 * @param {Function} callback The callback function.
 */
const ipInfo = module.exports = function (type, token, callback) {
    let url = null;

    if (typeof token === "function") {
        callback = token;
        token = undefined;
    }

    if (typeof type === "function") {
        callback = type;
        type = "";
    }

    if(typeof token === "string") {
        if (!type) {
            url = ipInfo.HOSTNAME_SSL  + "/json" + ipInfo.TOKEN_PREFIX + token;
        } else if (ipInfo.IP_REGEX.test(type)) {
            url = ipInfo.HOSTNAME_SSL  + type + "/json" + ipInfo.TOKEN_PREFIX + token;
        } else {
            url = ipInfo.HOSTNAME_SSL  + type + ipInfo.TOKEN_PREFIX + token;
        }
    } else {
        if (!type) {
            url = ipInfo.HOSTNAME + "json";
        } else if (ipInfo.IP_REGEX.test(type)) {
            url = ipInfo.HOSTNAME + type + "/json";
        } else {
            url = ipInfo.HOSTNAME + type;
        }
    }

    request(url, (err, body) => {
        if (err && err.message && err.message.startsWith("Unexpected token")) {
            err = null;
        }
        if (err) {
            return callback(err);
        }
        callback(null, body);
    });
};

ipInfo.HOSTNAME = "http://ipinfo.io/";
ipInfo.HOSTNAME_SSL = "https://ipinfo.io/";
ipInfo.TOKEN_PREFIX = "?token=";
ipInfo.IP_REGEX = /^\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b$/;
