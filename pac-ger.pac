// PAC файл для прокси Германии
// 07.08.2024

function FindProxyForURL(url, host) {
  var SOCKS_GER = "SOCKS 10.10.250.130:9080";

  if (shExpMatch(host, "*ipinfo.io*")) {
    return SOCKS_GER;
  }

  return "DIRECT"
}
