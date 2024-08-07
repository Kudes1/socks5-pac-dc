// PAC файл для прокси Германии
// 07.08.2024

var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/ipinfo\.io/.test(host)) return "+Ger_Proxy";
        if (/^test\.com$/.test(host)) return "+Ger_Proxy";
        return "DIRECT";
    },
    "+Ger_Proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 10.10.250.130:9082; SOCKS 10.10.250.130:9082";
    }
});
