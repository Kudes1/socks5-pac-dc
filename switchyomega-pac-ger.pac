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
        if (/hetzner\.com/.test(host)) return "+Ger_Proxy";
        if (/cisco\.com/.test(host)) return "+Ger_Proxy";
        if (/cdn\.oaistatic\.com/.test(host)) return "+Ger_Proxy";
        if (/medium\.com/.test(host)) return "+Ger_Proxy";
        if (/claude\.ai/.test(host)) return "+Ger_Proxy";
        if (/anthropic\.com/.test(host)) return "+Ger_Proxy";
        if (/oaiusercontent\.com/.test(host)) return "+Ger_Proxy";
        if (/openai\.com/.test(host)) return "+Ger_Proxy";
        if (/hdrezka/.test(host)) return "+Ger_Proxy";
        if (/intel\.com/.test(host)) return "+Ger_Proxy";
        if (/meta\.com/.test(host)) return "+Ger_Proxy";
        if (/news\.google\.com/.test(host)) return "+Ger_Proxy";
        if (/ntc\.party/.test(host)) return "+Ger_Proxy";
        if (/rutracker\.org/.test(host)) return "+Ger_Proxy";
        if (/terraform\.io/.test(host)) return "+Ger_Proxy";
        if (/youtube\.com/.test(host)) return "+Ger_Proxy";
        if (/googleusercontent\.com/.test(host)) return "+Ger_Proxy";
        if (/googlevideo\.com/.test(host)) return "+Ger_Proxy";
        if (/youtu\.be/.test(host)) return "+Ger_Proxy";
        if (/yt3\.ggpth\.com/.test(host)) return "+Ger_Proxy";
        if (/ytimg\.com/.test(host)) return "+Ger_Proxy";
        if (/nhacmp3youtube\.com/.test(host)) return "+Ger_Proxy";
        if (/chatgpt\.com/.test(host)) return "+Ger_Proxy";
        if (/instagram\.com/.test(host)) return "+Ger_Proxy";
        if (/facebook\.com/.test(host)) return "+Ger_Proxy";
        return "DIRECT";
    },
    "+Ger_Proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 10.10.250.130:9082; SOCKS 10.10.250.130:9082";
    }
});
