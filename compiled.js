"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// How to generate your own UUID:
// [Windows] Press "Win + R", input cmd and run:  Powershell -NoExit -Command "[guid]::NewGuid()"
var userID = "86c50e3a-5b87-49dd-bd20-03c7f2735e40";
var proxyIPs = ["ts.hpc.tw"];
var cn_hostnames = [''];
var CDNIP = "www.visa.com.sg";
// http_ip
var IP1 = "www.visa.com";
var IP2 = "cis.visa.com";
var IP3 = "africa.visa.com";
var IP4 = "www.visa.com.sg";
var IP5 = "www.visaeurope.at";
var IP6 = "www.visa.com.mt";
var IP7 = "qa.visamiddleeast.com";

// https_ip
var IP8 = "usa.visa.com";
var IP9 = "myanmar.visa.com";
var IP10 = "www.visa.com.tw";
var IP11 = "www.visaeurope.ch";
var IP12 = "www.visa.com.br";
var IP13 = "www.visasoutheasteurope.com";

// http_port
var PT1 = '80';
var PT2 = '8080';
var PT3 = '8880';
var PT4 = '2052';
var PT5 = '2082';
var PT6 = '2086';
var PT7 = '2095';

// https_port
var PT8 = '443';
var PT9 = '8443';
var PT10 = '2053';
var PT11 = '2083';
var PT12 = '2087';
var PT13 = '2096';
var proxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
var proxyPort = proxyIP.match(/:(\d+)$/) ? proxyIP.match(/:(\d+)$/)[1] : '443';
var dohURL = "https://cloudflare-dns.com/dns-query";
if (!isValidUUID(userID)) {
  throw new Error("uuid is not valid");
}
var _default = exports["default"] = {
  /**
   * @param {any} request
   * @param {{uuid: string, proxyip: string, cdnip: string, ip1: string, ip2: string, ip3: string, ip4: string, ip5: string, ip6: string, ip7: string, ip8: string, ip9: string, ip10: string, ip11: string, ip12: string, ip13: string, pt1: string, pt2: string, pt3: string, pt4: string, pt5: string, pt6: string, pt7: string, pt8: string, pt9: string, pt10: string, pt11: string, pt12: string, pt13: string}} env
   * @param {any} ctx
   * @returns {Promise<Response>}
   */
  fetch: function (_fetch) {
    function fetch(_x, _x2, _x3) {
      return _fetch.apply(this, arguments);
    }
    fetch.toString = function () {
      return _fetch.toString();
    };
    return fetch;
  }(function (request, env, ctx) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var proxyip, lastColonIndex, _proxyip$split, _proxyip$split2, _proxyip$split2$, _lastColonIndex, match, _proxyPort, upgradeHeader, url, _url, vlessConfig, tyConfig, clConfig, sbConfig, ptyConfig, pclConfig, psbConfig, randomHostname, newHeaders, proxyUrl, modifiedRequest, proxyResponse, tmp_ip, _lastColonIndex2, _proxyIP$split, _proxyIP$split2, _proxyIP$split2$, e, _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.p = 0;
            proxyip = env.proxyip;
            userID = env.uuid || userID;
            if (proxyip) {
              if (proxyip.includes(']:')) {
                lastColonIndex = proxyip.lastIndexOf(':');
                proxyPort = proxyip.slice(lastColonIndex + 1);
                proxyIP = proxyip.slice(0, lastColonIndex);
              } else if (!proxyip.includes(']:') && !proxyip.includes(']')) {
                _proxyip$split = proxyip.split(':');
                _proxyip$split2 = _slicedToArray(_proxyip$split, 2);
                proxyIP = _proxyip$split2[0];
                _proxyip$split2$ = _proxyip$split2[1];
                proxyPort = _proxyip$split2$ === void 0 ? '443' : _proxyip$split2$;
              } else {
                proxyPort = '443';
                proxyIP = proxyip;
              }
            } else {
              if (proxyIP.includes(']:')) {
                _lastColonIndex = proxyIP.lastIndexOf(':');
                proxyPort = proxyIP.slice(_lastColonIndex + 1);
                proxyIP = proxyIP.slice(0, _lastColonIndex);
              } else {
                match = proxyIP.match(/^(.*?)(?::(\d+))?$/);
                proxyIP = match[1];
                _proxyPort = match[2] || '443';
                console.log("IP:", proxyIP, "Port:", _proxyPort);
              }
            }
            console.log('ProxyIP:', proxyIP);
            console.log('ProxyPort:', proxyPort);
            CDNIP = env.cdnip || CDNIP;
            IP1 = env.ip1 || IP1;
            IP2 = env.ip2 || IP2;
            IP3 = env.ip3 || IP3;
            IP4 = env.ip4 || IP4;
            IP5 = env.ip5 || IP5;
            IP6 = env.ip6 || IP6;
            IP7 = env.ip7 || IP7;
            IP8 = env.ip8 || IP8;
            IP9 = env.ip9 || IP9;
            IP10 = env.ip10 || IP10;
            IP11 = env.ip11 || IP11;
            IP12 = env.ip12 || IP12;
            IP13 = env.ip13 || IP13;
            PT1 = env.pt1 || PT1;
            PT2 = env.pt2 || PT2;
            PT3 = env.pt3 || PT3;
            PT4 = env.pt4 || PT4;
            PT5 = env.pt5 || PT5;
            PT6 = env.pt6 || PT6;
            PT7 = env.pt7 || PT7;
            PT8 = env.pt8 || PT8;
            PT9 = env.pt9 || PT9;
            PT10 = env.pt10 || PT10;
            PT11 = env.pt11 || PT11;
            PT12 = env.pt12 || PT12;
            PT13 = env.pt13 || PT13;
            upgradeHeader = request.headers.get("Upgrade");
            url = new URL(request.url);
            if (!(!upgradeHeader || upgradeHeader !== "websocket")) {
              _context.n = 13;
              break;
            }
            _url = new URL(request.url);
            _t = _url.pathname;
            _context.n = _t === "/".concat(userID) ? 1 : _t === "/".concat(userID, "/ty") ? 2 : _t === "/".concat(userID, "/cl") ? 3 : _t === "/".concat(userID, "/sb") ? 4 : _t === "/".concat(userID, "/pty") ? 5 : _t === "/".concat(userID, "/pcl") ? 6 : _t === "/".concat(userID, "/psb") ? 7 : 8;
            break;
          case 1:
            vlessConfig = getvlessConfig(userID, request.headers.get("Host"));
            return _context.a(2, new Response("".concat(vlessConfig), {
              status: 200,
              headers: {
                "Content-Type": "text/html;charset=utf-8"
              }
            }));
          case 2:
            tyConfig = gettyConfig(userID, request.headers.get('Host'));
            return _context.a(2, new Response("".concat(tyConfig), {
              status: 200,
              headers: {
                "Content-Type": "text/plain;charset=utf-8"
              }
            }));
          case 3:
            clConfig = getclConfig(userID, request.headers.get('Host'));
            return _context.a(2, new Response("".concat(clConfig), {
              status: 200,
              headers: {
                "Content-Type": "text/plain;charset=utf-8"
              }
            }));
          case 4:
            sbConfig = getsbConfig(userID, request.headers.get('Host'));
            return _context.a(2, new Response("".concat(sbConfig), {
              status: 200,
              headers: {
                "Content-Type": "application/json;charset=utf-8"
              }
            }));
          case 5:
            ptyConfig = getptyConfig(userID, request.headers.get('Host'));
            return _context.a(2, new Response("".concat(ptyConfig), {
              status: 200,
              headers: {
                "Content-Type": "text/plain;charset=utf-8"
              }
            }));
          case 6:
            pclConfig = getpclConfig(userID, request.headers.get('Host'));
            return _context.a(2, new Response("".concat(pclConfig), {
              status: 200,
              headers: {
                "Content-Type": "text/plain;charset=utf-8"
              }
            }));
          case 7:
            psbConfig = getpsbConfig(userID, request.headers.get('Host'));
            return _context.a(2, new Response("".concat(psbConfig), {
              status: 200,
              headers: {
                "Content-Type": "application/json;charset=utf-8"
              }
            }));
          case 8:
            if (!cn_hostnames.includes('')) {
              _context.n = 9;
              break;
            }
            return _context.a(2, new Response(JSON.stringify(request.cf, null, 4), {
              status: 200,
              headers: {
                "Content-Type": "application/json;charset=utf-8"
              }
            }));
          case 9:
            randomHostname = cn_hostnames[Math.floor(Math.random() * cn_hostnames.length)];
            newHeaders = new Headers(request.headers);
            newHeaders.set("cf-connecting-ip", "1.2.3.4");
            newHeaders.set("x-forwarded-for", "1.2.3.4");
            newHeaders.set("x-real-ip", "1.2.3.4");
            newHeaders.set("referer", "https://www.google.com/search?q=edtunnel");
            // Use fetch to proxy the request to 15 different domains
            proxyUrl = "https://" + randomHostname + _url.pathname + _url.search;
            modifiedRequest = new Request(proxyUrl, {
              method: request.method,
              headers: newHeaders,
              body: request.body,
              redirect: "manual"
            });
            _context.n = 10;
            return fetch(modifiedRequest, {
              redirect: "manual"
            });
          case 10:
            proxyResponse = _context.v;
            if (![301, 302].includes(proxyResponse.status)) {
              _context.n = 11;
              break;
            }
            return _context.a(2, new Response("Redirects to ".concat(randomHostname, " are not allowed."), {
              status: 403,
              statusText: "Forbidden"
            }));
          case 11:
            return _context.a(2, proxyResponse);
          case 12:
            _context.n = 15;
            break;
          case 13:
            if (url.pathname.includes('/pyip=')) {
              tmp_ip = url.pathname.split("=")[1];
              if (isValidIP(tmp_ip)) {
                proxyIP = tmp_ip;
                if (proxyIP.includes(']:')) {
                  _lastColonIndex2 = proxyIP.lastIndexOf(':');
                  proxyPort = proxyIP.slice(_lastColonIndex2 + 1);
                  proxyIP = proxyIP.slice(0, _lastColonIndex2);
                } else if (!proxyIP.includes(']:') && !proxyIP.includes(']')) {
                  _proxyIP$split = proxyIP.split(':');
                  _proxyIP$split2 = _slicedToArray(_proxyIP$split, 2);
                  proxyIP = _proxyIP$split2[0];
                  _proxyIP$split2$ = _proxyIP$split2[1];
                  proxyPort = _proxyIP$split2$ === void 0 ? '443' : _proxyIP$split2$;
                } else {
                  proxyPort = '443';
                }
              }
            }
            _context.n = 14;
            return vlessOverWSHandler(request);
          case 14:
            return _context.a(2, _context.v);
          case 15:
            _context.n = 17;
            break;
          case 16:
            _context.p = 16;
            _t2 = _context.v;
            /** @type {Error} */
            e = _t2;
            return _context.a(2, new Response(e.toString()));
          case 17:
            return _context.a(2);
        }
      }, _callee, null, [[0, 16]]);
    }))();
  })
};
function isValidIP(ip) {
  var reg = /^[\s\S]*$/;
  return reg.test(ip);
}

/**
 *
 * @param {any} request
 */
function vlessOverWSHandler(_x4) {
  return _vlessOverWSHandler.apply(this, arguments);
}
/**
 * Checks if a given UUID is present in the API response.
 * @param {string} targetUuid The UUID to search for.
 * @returns {Promise<boolean>} A Promise that resolves to true if the UUID is present in the API response, false otherwise.
 */
function _vlessOverWSHandler() {
  _vlessOverWSHandler = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(request) {
    var webSocketPair, _Object$values, _Object$values2, client, webSocket, address, portWithRandomLog, log, earlyDataHeader, readableWebSocketStream, remoteSocketWapper, udpStreamWrite, isDns;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          /** @type {any} */
          // @ts-ignore
          webSocketPair = new WebSocketPair();
          _Object$values = Object.values(webSocketPair), _Object$values2 = _slicedToArray(_Object$values, 2), client = _Object$values2[0], webSocket = _Object$values2[1];
          webSocket.accept();
          address = "";
          portWithRandomLog = "";
          log = function log(/** @type {string} */info, /** @type {string | undefined} */event) {
            console.log("[".concat(address, ":").concat(portWithRandomLog, "] ").concat(info), event || "");
          };
          earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
          readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
          /** @type {{ value: any | null }} */
          remoteSocketWapper = {
            value: null
          };
          udpStreamWrite = null;
          isDns = false; // ws --> remote
          readableWebSocketStream.pipeTo(new WritableStream({
            write: function write(chunk, controller) {
              return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
                var writer, _yield$processcloudfl, hasError, message, _yield$processcloudfl2, portRemote, _yield$processcloudfl3, addressRemote, rawDataIndex, _yield$processcloudfl4, cloudflareVersion, isUDP, cloudflareResponseHeader, rawClientData, _yield$handleUDPOutBo, write;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      if (!(isDns && udpStreamWrite)) {
                        _context2.n = 1;
                        break;
                      }
                      return _context2.a(2, udpStreamWrite(chunk));
                    case 1:
                      if (!remoteSocketWapper.value) {
                        _context2.n = 3;
                        break;
                      }
                      writer = remoteSocketWapper.value.writable.getWriter();
                      _context2.n = 2;
                      return writer.write(chunk);
                    case 2:
                      writer.releaseLock();
                      return _context2.a(2);
                    case 3:
                      _context2.n = 4;
                      return processcloudflareHeader(chunk, userID);
                    case 4:
                      _yield$processcloudfl = _context2.v;
                      hasError = _yield$processcloudfl.hasError;
                      message = _yield$processcloudfl.message;
                      _yield$processcloudfl2 = _yield$processcloudfl.portRemote;
                      portRemote = _yield$processcloudfl2 === void 0 ? 443 : _yield$processcloudfl2;
                      _yield$processcloudfl3 = _yield$processcloudfl.addressRemote;
                      addressRemote = _yield$processcloudfl3 === void 0 ? "" : _yield$processcloudfl3;
                      rawDataIndex = _yield$processcloudfl.rawDataIndex;
                      _yield$processcloudfl4 = _yield$processcloudfl.cloudflareVersion;
                      cloudflareVersion = _yield$processcloudfl4 === void 0 ? new Uint8Array([0, 0]) : _yield$processcloudfl4;
                      isUDP = _yield$processcloudfl.isUDP;
                      address = addressRemote;
                      portWithRandomLog = "".concat(portRemote, "--").concat(Math.random(), " ").concat(isUDP ? "udp " : "tcp ", " ");
                      if (!hasError) {
                        _context2.n = 5;
                        break;
                      }
                      throw new Error(message);
                    case 5:
                      if (!isUDP) {
                        _context2.n = 7;
                        break;
                      }
                      if (!(portRemote === 53)) {
                        _context2.n = 6;
                        break;
                      }
                      isDns = true;
                      _context2.n = 7;
                      break;
                    case 6:
                      throw new Error("UDP proxy only enable for DNS which is port 53");
                    case 7:
                      // ["version", "附加信息长度 N"]
                      cloudflareResponseHeader = new Uint8Array([cloudflareVersion[0], 0]);
                      rawClientData = chunk.slice(rawDataIndex); // TODO: support udp here when cf runtime has udp support
                      if (!isDns) {
                        _context2.n = 9;
                        break;
                      }
                      _context2.n = 8;
                      return handleUDPOutBound(webSocket, cloudflareResponseHeader, log);
                    case 8:
                      _yield$handleUDPOutBo = _context2.v;
                      write = _yield$handleUDPOutBo.write;
                      udpStreamWrite = write;
                      udpStreamWrite(rawClientData);
                      return _context2.a(2);
                    case 9:
                      handleTCPOutBound(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, cloudflareResponseHeader, log);
                    case 10:
                      return _context2.a(2);
                  }
                }, _callee2);
              }))();
            },
            close: function close() {
              log("readableWebSocketStream is close");
            },
            abort: function abort(reason) {
              log("readableWebSocketStream is abort", JSON.stringify(reason));
            }
          }))["catch"](function (err) {
            log("readableWebSocketStream pipeTo error", err);
          });
          return _context3.a(2, new Response(null, {
            status: 101,
            // @ts-ignore
            webSocket: client
          }));
      }
    }, _callee3);
  }));
  return _vlessOverWSHandler.apply(this, arguments);
}
function checkUuidInApiResponse(_x5) {
  return _checkUuidInApiResponse.apply(this, arguments);
}
function _checkUuidInApiResponse() {
  _checkUuidInApiResponse = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(targetUuid) {
    var apiResponse, isUuidInResponse, _t3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return getApiResponse();
        case 1:
          apiResponse = _context4.v;
          if (apiResponse) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, false);
        case 2:
          isUuidInResponse = apiResponse.users.some(function (user) {
            return user.uuid === targetUuid;
          });
          return _context4.a(2, isUuidInResponse);
        case 3:
          _context4.p = 3;
          _t3 = _context4.v;
          console.error("Error:", _t3);
          return _context4.a(2, false);
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return _checkUuidInApiResponse.apply(this, arguments);
}
function getApiResponse() {
  return _getApiResponse.apply(this, arguments);
}
/**
 * Handles outbound TCP connections.
 *
 * @param {any} remoteSocket
 * @param {string} addressRemote The remote address to connect to.
 * @param {number} portRemote The remote port to connect to.
 * @param {Uint8Array} rawClientData The raw client data to write.
 * @param {any} webSocket The WebSocket to pass the remote socket to.
 * @param {Uint8Array} cloudflareResponseHeader The cloudflare response header.
 * @param {function} log The logging function.
 * @returns {Promise<void>} The remote socket.
 */
function _getApiResponse() {
  _getApiResponse = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          return _context5.a(2, {
            users: []
          });
      }
    }, _callee5);
  }));
  return _getApiResponse.apply(this, arguments);
}
function handleTCPOutBound(_x6, _x7, _x8, _x9, _x0, _x1, _x10) {
  return _handleTCPOutBound.apply(this, arguments);
}
/**
 *
 * @param {any} webSocketServer
 * @param {string} earlyDataHeader for ws 0rtt
 * @param {(info: string)=> void} log for ws 0rtt
 */
function _handleTCPOutBound() {
  _handleTCPOutBound = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, cloudflareResponseHeader, log) {
    var connectAndWrite, _connectAndWrite, retry, _retry, tcpSocket;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          _retry = function _retry3() {
            _retry = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
              var tcpSocket;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    _context7.n = 1;
                    return connectAndWrite(proxyIP || addressRemote, proxyPort || portRemote);
                  case 1:
                    tcpSocket = _context7.v;
                    // no matter retry success or not, close websocket
                    tcpSocket.closed["catch"](function (error) {
                      console.log("retry tcpSocket closed error", error);
                    })["finally"](function () {
                      safeCloseWebSocket(webSocket);
                    });
                    remoteSocketToWS(tcpSocket, webSocket, cloudflareResponseHeader, null, log);
                  case 2:
                    return _context7.a(2);
                }
              }, _callee7);
            }));
            return _retry.apply(this, arguments);
          };
          retry = function _retry2() {
            return _retry.apply(this, arguments);
          };
          _connectAndWrite = function _connectAndWrite3() {
            _connectAndWrite = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(address, port) {
              var tcpSocket, writer;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(address)) address = "".concat(atob('d3d3Lg==')).concat(address).concat(atob('LnNzbGlwLmlv'));
                    /** @type {any} */
                    tcpSocket = connect({
                      hostname: address,
                      port: port
                    });
                    remoteSocket.value = tcpSocket;
                    log("connected to ".concat(address, ":").concat(port));
                    writer = tcpSocket.writable.getWriter();
                    _context6.n = 1;
                    return writer.write(rawClientData);
                  case 1:
                    // first write, nomal is tls client hello
                    writer.releaseLock();
                    return _context6.a(2, tcpSocket);
                }
              }, _callee6);
            }));
            return _connectAndWrite.apply(this, arguments);
          };
          connectAndWrite = function _connectAndWrite2(_x21, _x22) {
            return _connectAndWrite.apply(this, arguments);
          }; // if the cf connect tcp socket have no incoming data, we retry to redirect ip
          _context8.n = 1;
          return connectAndWrite(addressRemote, portRemote);
        case 1:
          tcpSocket = _context8.v;
          // when remoteSocket is ready, pass to websocket
          // remote--> ws
          remoteSocketToWS(tcpSocket, webSocket, cloudflareResponseHeader, retry, log);
        case 2:
          return _context8.a(2);
      }
    }, _callee8);
  }));
  return _handleTCPOutBound.apply(this, arguments);
}
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
  var readableStreamCancel = false;
  var stream = new ReadableStream({
    start: function start(controller) {
      webSocketServer.addEventListener("message", function (event) {
        if (readableStreamCancel) {
          return;
        }
        var message = event.data;
        controller.enqueue(message);
      });

      // The event means that the client closed the client -> server stream.
      // However, the server -> client stream is still open until you call close() on the server side.
      // The WebSocket protocol says that a separate close message must be sent in each direction to fully close the socket.
      webSocketServer.addEventListener("close", function () {
        // client send close, need close server
        // if stream is cancel, skip controller.close
        safeCloseWebSocket(webSocketServer);
        if (readableStreamCancel) {
          return;
        }
        controller.close();
      });
      webSocketServer.addEventListener("error", function (err) {
        log("webSocketServer has error");
        controller.error(err);
      });
      // for ws 0rtt
      var _base64ToArrayBuffer = base64ToArrayBuffer(earlyDataHeader),
        earlyData = _base64ToArrayBuffer.earlyData,
        error = _base64ToArrayBuffer.error;
      if (error) {
        controller.error(error);
      } else if (earlyData) {
        controller.enqueue(earlyData);
      }
    },
    pull: function pull(controller) {
      // if ws can stop read if stream is full, we can implement backpressure
      // https://streams.spec.whatwg.org/#example-rs-push-backpressure
    },
    cancel: function cancel(reason) {
      // 1. pipe WritableStream has error, this cancel will called, so ws handle server close into here
      // 2. if readableStream is cancel, all controller.close/enqueue need skip,
      // 3. but from testing controller.error still work even if readableStream is cancel
      if (readableStreamCancel) {
        return;
      }
      log("ReadableStream was canceled, due to ".concat(reason));
      readableStreamCancel = true;
      safeCloseWebSocket(webSocketServer);
    }
  });
  return stream;
}

// https://xtls.github.io/development/protocols/cloudflare.html
// https://github.com/zizifn/excalidraw-backup/blob/main/v2ray-protocol.excalidraw

/**
 *
 * @param { ArrayBuffer} cloudflareBuffer
 * @param {string} userID
 * @returns
 */
function processcloudflareHeader(_x11, _x12) {
  return _processcloudflareHeader.apply(this, arguments);
}
/**
 *
 * @param {any} remoteSocket
 * @param {any} webSocket
 * @param {ArrayBuffer} cloudflareResponseHeader
 * @param {(() => Promise<void>) | null} retry
 * @param {*} log
 */
function _processcloudflareHeader() {
  _processcloudflareHeader = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(cloudflareBuffer, userID) {
    var version, isValidUser, isUDP, slicedBuffer, slicedBufferString, uuids, checkUuidInApi, optLength, command, portIndex, portBuffer, portRemote, addressIndex, addressBuffer, addressType, addressLength, addressValueIndex, addressValue, dataView, ipv6, _i, _t4, _t5, _t6, _t7, _t8;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          if (!(cloudflareBuffer.byteLength < 24)) {
            _context9.n = 1;
            break;
          }
          return _context9.a(2, {
            hasError: true,
            message: "invalid data"
          });
        case 1:
          version = new Uint8Array(cloudflareBuffer.slice(0, 1));
          isValidUser = false;
          isUDP = false;
          slicedBuffer = new Uint8Array(cloudflareBuffer.slice(1, 17));
          slicedBufferString = stringify(slicedBuffer);
          uuids = userID.includes(",") ? userID.split(",") : [userID];
          _context9.n = 2;
          return checkUuidInApiResponse(slicedBufferString);
        case 2:
          checkUuidInApi = _context9.v;
          isValidUser = uuids.some(function (userUuid) {
            return checkUuidInApi || slicedBufferString === userUuid.trim();
          });
          _t4 = console;
          _t5 = "checkUuidInApi: ";
          _context9.n = 3;
          return checkUuidInApiResponse(slicedBufferString);
        case 3:
          _t6 = _context9.v;
          _t7 = _t5.concat.call(_t5, _t6, ", userID: ").concat(slicedBufferString);
          _t4.log.call(_t4, _t7);
          if (isValidUser) {
            _context9.n = 4;
            break;
          }
          return _context9.a(2, {
            hasError: true,
            message: "invalid user"
          });
        case 4:
          optLength = new Uint8Array(cloudflareBuffer.slice(17, 18))[0]; //skip opt for now
          command = new Uint8Array(cloudflareBuffer.slice(18 + optLength, 18 + optLength + 1))[0]; // 0x01 TCP
          // 0x02 UDP
          // 0x03 MUX
          if (!(command === 1)) {
            _context9.n = 5;
            break;
          }
          _context9.n = 7;
          break;
        case 5:
          if (!(command === 2)) {
            _context9.n = 6;
            break;
          }
          isUDP = true;
          _context9.n = 7;
          break;
        case 6:
          return _context9.a(2, {
            hasError: true,
            message: "command ".concat(command, " is not support, command 01-tcp,02-udp,03-mux")
          });
        case 7:
          portIndex = 18 + optLength + 1;
          portBuffer = cloudflareBuffer.slice(portIndex, portIndex + 2); // port is big-Endian in raw data etc 80 == 0x005d
          portRemote = new DataView(portBuffer).getUint16(0);
          addressIndex = portIndex + 2;
          addressBuffer = new Uint8Array(cloudflareBuffer.slice(addressIndex, addressIndex + 1)); // 1--> ipv4  addressLength =4
          // 2--> domain name addressLength=addressBuffer[1]
          // 3--> ipv6  addressLength =16
          addressType = addressBuffer[0];
          addressLength = 0;
          addressValueIndex = addressIndex + 1;
          addressValue = "";
          _t8 = addressType;
          _context9.n = _t8 === 1 ? 8 : _t8 === 2 ? 9 : _t8 === 3 ? 10 : 11;
          break;
        case 8:
          addressLength = 4;
          addressValue = new Uint8Array(cloudflareBuffer.slice(addressValueIndex, addressValueIndex + addressLength)).join(".");
          return _context9.a(3, 12);
        case 9:
          addressLength = new Uint8Array(cloudflareBuffer.slice(addressValueIndex, addressValueIndex + 1))[0];
          addressValueIndex += 1;
          addressValue = new TextDecoder().decode(cloudflareBuffer.slice(addressValueIndex, addressValueIndex + addressLength));
          return _context9.a(3, 12);
        case 10:
          addressLength = 16;
          dataView = new DataView(cloudflareBuffer.slice(addressValueIndex, addressValueIndex + addressLength)); // 2001:0db8:85a3:0000:0000:8a2e:0370:7334
          ipv6 = [];
          for (_i = 0; _i < 8; _i++) {
            ipv6.push(dataView.getUint16(_i * 2).toString(16));
          }
          addressValue = ipv6.join(":");
          // seems no need add [] for ipv6
          return _context9.a(3, 12);
        case 11:
          return _context9.a(2, {
            hasError: true,
            message: "invild  addressType is ".concat(addressType)
          });
        case 12:
          if (addressValue) {
            _context9.n = 13;
            break;
          }
          return _context9.a(2, {
            hasError: true,
            message: "addressValue is empty, addressType is ".concat(addressType)
          });
        case 13:
          return _context9.a(2, {
            hasError: false,
            addressRemote: addressValue,
            addressType: addressType,
            portRemote: portRemote,
            rawDataIndex: addressValueIndex + addressLength,
            cloudflareVersion: version,
            isUDP: isUDP
          });
      }
    }, _callee9);
  }));
  return _processcloudflareHeader.apply(this, arguments);
}
function remoteSocketToWS(_x13, _x14, _x15, _x16, _x17) {
  return _remoteSocketToWS.apply(this, arguments);
}
/**
 *
 * @param {string} base64Str
 * @returns
 */
function _remoteSocketToWS() {
  _remoteSocketToWS = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(remoteSocket, webSocket, cloudflareResponseHeader, retry, log) {
    var remoteChunkCount, chunks, cloudflareHeader, hasIncomingData;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          // remote--> ws
          remoteChunkCount = 0;
          chunks = [];
          /** @type {ArrayBuffer | null} */
          cloudflareHeader = cloudflareResponseHeader;
          hasIncomingData = false; // check if remoteSocket has incoming data
          _context1.n = 1;
          return remoteSocket.readable.pipeTo(new WritableStream({
            start: function start() {},
            /**
             *
             * @param {Uint8Array} chunk
             * @param {*} controller
             */
            write: function write(chunk, controller) {
              return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
                var _t9, _t0;
                return _regenerator().w(function (_context0) {
                  while (1) switch (_context0.n) {
                    case 0:
                      hasIncomingData = true;
                      // remoteChunkCount++;
                      if (webSocket.readyState !== WS_READY_STATE_OPEN) {
                        controller.error("webSocket.readyState is not open, maybe close");
                      }
                      if (!cloudflareHeader) {
                        _context0.n = 2;
                        break;
                      }
                      _t9 = webSocket;
                      _context0.n = 1;
                      return new Blob([cloudflareHeader, chunk]).arrayBuffer();
                    case 1:
                      _t0 = _context0.v;
                      _t9.send.call(_t9, _t0);
                      cloudflareHeader = null;
                      _context0.n = 3;
                      break;
                    case 2:
                      // seems no need rate limit this, CF seems fix this??..
                      // if (remoteChunkCount > 20000) {
                      // 	// cf one package is 4096 byte(4kb),  4096 * 20000 = 80M
                      // 	await delay(1);
                      // }
                      webSocket.send(chunk);
                    case 3:
                      return _context0.a(2);
                  }
                }, _callee0);
              }))();
            },
            close: function close() {
              log("remoteConnection!.readable is close with hasIncomingData is ".concat(hasIncomingData));
              // safeCloseWebSocket(webSocket); // no need server close websocket frist for some case will casue HTTP ERR_CONTENT_LENGTH_MISMATCH issue, client will send close event anyway.
            },
            abort: function abort(reason) {
              console.error("remoteConnection!.readable abort", reason);
            }
          }))["catch"](function (error) {
            console.error("remoteSocketToWS has exception ", error.stack || error);
            safeCloseWebSocket(webSocket);
          });
        case 1:
          // seems is cf connect socket have error,
          // 1. Socket.closed will have error
          // 2. Socket.readable will be close without any data coming
          if (hasIncomingData === false && retry) {
            log("retry");
            retry();
          }
        case 2:
          return _context1.a(2);
      }
    }, _callee1);
  }));
  return _remoteSocketToWS.apply(this, arguments);
}
function base64ToArrayBuffer(base64Str) {
  if (!base64Str) {
    return {
      error: null
    };
  }
  try {
    // go use modified Base64 for URL rfc4648 which js atob not support
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
    var decode = atob(base64Str);
    var arryBuffer = Uint8Array.from(decode, function (c) {
      return c.charCodeAt(0);
    });
    return {
      earlyData: arryBuffer.buffer,
      error: null
    };
  } catch (error) {
    return {
      error: error
    };
  }
}

/**
 * This is not real UUID validation
 * @param {string} uuid
 */
function isValidUUID(uuid) {
  var uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}
var WS_READY_STATE_OPEN = 1;
var WS_READY_STATE_CLOSING = 2;
/**
 * Normally, WebSocket will not has exceptions when close.
 * @param {any} socket
 */
function safeCloseWebSocket(socket) {
  try {
    if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
      socket.close();
    }
  } catch (error) {
    console.error("safeCloseWebSocket error", error);
  }
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var uuid = unsafeStringify(arr, offset);
  if (!isValidUUID(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}

/**
 *
 * @param {any} webSocket
 * @param {ArrayBuffer} cloudflareResponseHeader
 * @param {(string)=> void} log
 */
function handleUDPOutBound(_x18, _x19, _x20) {
  return _handleUDPOutBound.apply(this, arguments);
}
/**
 *
 * @param {string} userID
 * @param {string | null} hostName
 * @returns {string}
 */
function _handleUDPOutBound() {
  _handleUDPOutBound = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(webSocket, cloudflareResponseHeader, log) {
    var iscloudflareHeaderSent, transformStream, writer;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          iscloudflareHeaderSent = false;
          transformStream = new TransformStream({
            start: function start(controller) {},
            transform: function transform(chunk, controller) {
              // udp message 2 byte is the the length of udp data
              // TODO: this should have bug, beacsue maybe udp chunk can be in two websocket message
              for (var index = 0; index < chunk.byteLength;) {
                var lengthBuffer = chunk.slice(index, index + 2);
                var udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
                var udpData = new Uint8Array(chunk.slice(index + 2, index + 2 + udpPakcetLength));
                index = index + 2 + udpPakcetLength;
                controller.enqueue(udpData);
              }
            },
            flush: function flush(controller) {}
          }); // only handle dns udp for now
          transformStream.readable.pipeTo(new WritableStream({
            write: function write(chunk) {
              return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
                var resp, dnsQueryResult, udpSize, udpSizeBuffer, _t1, _t10, _t11, _t12;
                return _regenerator().w(function (_context10) {
                  while (1) switch (_context10.n) {
                    case 0:
                      _context10.n = 1;
                      return fetch(dohURL,
                      // dns server url
                      {
                        method: "POST",
                        headers: {
                          "content-type": "application/dns-message"
                        },
                        body: chunk
                      });
                    case 1:
                      resp = _context10.v;
                      _context10.n = 2;
                      return resp.arrayBuffer();
                    case 2:
                      dnsQueryResult = _context10.v;
                      udpSize = dnsQueryResult.byteLength; // console.log([...new Uint8Array(dnsQueryResult)].map((x) => x.toString(16)));
                      udpSizeBuffer = new Uint8Array([udpSize >> 8 & 0xff, udpSize & 0xff]);
                      if (!(webSocket.readyState === WS_READY_STATE_OPEN)) {
                        _context10.n = 6;
                        break;
                      }
                      log("doh success and dns message length is ".concat(udpSize));
                      if (!iscloudflareHeaderSent) {
                        _context10.n = 4;
                        break;
                      }
                      _t1 = webSocket;
                      _context10.n = 3;
                      return new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer();
                    case 3:
                      _t10 = _context10.v;
                      _t1.send.call(_t1, _t10);
                      _context10.n = 6;
                      break;
                    case 4:
                      _t11 = webSocket;
                      _context10.n = 5;
                      return new Blob([cloudflareResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer();
                    case 5:
                      _t12 = _context10.v;
                      _t11.send.call(_t11, _t12);
                      iscloudflareHeaderSent = true;
                    case 6:
                      return _context10.a(2);
                  }
                }, _callee10);
              }))();
            }
          }))["catch"](function (error) {
            log("dns udp has error" + error);
          });
          writer = transformStream.writable.getWriter();
          return _context11.a(2, {
            /**
             *
             * @param {Uint8Array} chunk
             */
            write: function write(chunk) {
              writer.write(chunk);
            }
          });
      }
    }, _callee11);
  }));
  return _handleUDPOutBound.apply(this, arguments);
}
function getvlessConfig(userID, hostName) {
  var wvlessws = "vless://".concat(userID, "@").concat(CDNIP, ":8880?encryption=none&security=none&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#").concat(hostName);
  var pvlesswstls = "vless://".concat(userID, "@").concat(CDNIP, ":8443?encryption=none&security=tls&type=ws&host=").concat(hostName, "&sni=").concat(hostName, "&fp=random&path=%2F%3Fed%3D2560#").concat(hostName);
  var note = "\u752C\u54E5\u535A\u5BA2\u5730\u5740\uFF1Ahttps://ygkkk.blogspot.com\n\u752C\u54E5YouTube\u9891\u9053\uFF1Ahttps://www.youtube.com/@ygkkk\n\u752C\u54E5TG\u7535\u62A5\u7FA4\u7EC4\uFF1Ahttps://t.me/ygkkktg\n\u752C\u54E5TG\u7535\u62A5\u9891\u9053\uFF1Ahttps://t.me/ygkkktgpd\n\nProxyIP\u5168\u5C40\u8FD0\u884C\u4E2D\uFF1A".concat(proxyIP, ":").concat(proxyPort);
  var ty = "https://".concat(hostName, "/").concat(userID, "/ty");
  var cl = "https://".concat(hostName, "/").concat(userID, "/cl");
  var sb = "https://".concat(hostName, "/").concat(userID, "/sb");
  var pty = "https://".concat(hostName, "/").concat(userID, "/pty");
  var pcl = "https://".concat(hostName, "/").concat(userID, "/pcl");
  var psb = "https://".concat(hostName, "/").concat(userID, "/psb");
  var wkvlessshare = btoa("vless://".concat(userID, "@").concat(IP1, ":").concat(PT1, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V1_").concat(IP1, "_").concat(PT1, "\nvless://").concat(userID, "@").concat(IP2, ":").concat(PT2, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V2_").concat(IP2, "_").concat(PT2, "\nvless://").concat(userID, "@").concat(IP3, ":").concat(PT3, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V3_").concat(IP3, "_").concat(PT3, "\nvless://").concat(userID, "@").concat(IP4, ":").concat(PT4, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V4_").concat(IP4, "_").concat(PT4, "\nvless://").concat(userID, "@").concat(IP5, ":").concat(PT5, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V5_").concat(IP5, "_").concat(PT5, "\nvless://").concat(userID, "@").concat(IP6, ":").concat(PT6, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V6_").concat(IP6, "_").concat(PT6, "\nvless://").concat(userID, "@").concat(IP7, ":").concat(PT7, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V7_").concat(IP7, "_").concat(PT7, "\nvless://").concat(userID, "@").concat(IP8, ":").concat(PT8, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V8_").concat(IP8, "_").concat(PT8, "\nvless://").concat(userID, "@").concat(IP9, ":").concat(PT9, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V9_").concat(IP9, "_").concat(PT9, "\nvless://").concat(userID, "@").concat(IP10, ":").concat(PT10, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V10_").concat(IP10, "_").concat(PT10, "\nvless://").concat(userID, "@").concat(IP11, ":").concat(PT11, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V11_").concat(IP11, "_").concat(PT11, "\nvless://").concat(userID, "@").concat(IP12, ":").concat(PT12, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V12_").concat(IP12, "_").concat(PT12, "\nvless://").concat(userID, "@").concat(IP13, ":").concat(PT13, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V13_").concat(IP13, "_").concat(PT13));
  var pgvlessshare = btoa("vless://".concat(userID, "@").concat(IP8, ":").concat(PT8, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V8_").concat(IP8, "_").concat(PT8, "\nvless://").concat(userID, "@").concat(IP9, ":").concat(PT9, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V9_").concat(IP9, "_").concat(PT9, "\nvless://").concat(userID, "@").concat(IP10, ":").concat(PT10, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V10_").concat(IP10, "_").concat(PT10, "\nvless://").concat(userID, "@").concat(IP11, ":").concat(PT11, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V11_").concat(IP11, "_").concat(PT11, "\nvless://").concat(userID, "@").concat(IP12, ":").concat(PT12, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V12_").concat(IP12, "_").concat(PT12, "\nvless://").concat(userID, "@").concat(IP13, ":").concat(PT13, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V13_").concat(IP13, "_").concat(PT13));
  var noteshow = note.replace(/\n/g, '<br>');
  var displayHtml = "\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz\" crossorigin=\"anonymous\"></script>\n<style>\n.limited-width {\n    max-width: 200px;\n    overflow: auto;\n    word-wrap: break-word;\n}\n</style>\n</head>\n<script>\nfunction copyToClipboard(text) {\n  const input = document.createElement('textarea');\n  input.style.position = 'fixed';\n  input.style.opacity = 0;\n  input.value = text;\n  document.body.appendChild(input);\n  input.select();\n  document.execCommand('Copy');\n  document.body.removeChild(input);\n  alert('\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');\n}\n</script>\n";
  if (hostName.includes("workers.dev")) {
    return "\n<br>\n<br>\n".concat(displayHtml, "\n<body>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Cloudflare-workers/pages-vless\u4EE3\u7406\u811A\u672C V25.5.4</h1>\n\t    <hr>\n            <p>").concat(noteshow, "</p>\n            <hr>\n\t    <hr>\n\t    <hr>\n            <br>\n            <br>\n            <h3>1\uFF1ACF-workers-vless+ws\u8282\u70B9</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\u8282\u70B9\u7279\u8272\uFF1A</th>\n\t\t\t\t\t\t<th>\u5355\u8282\u70B9\u94FE\u63A5\u5982\u4E0B\uFF1A</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">\u5173\u95ED\u4E86TLS\u52A0\u5BC6\uFF0C\u65E0\u89C6\u57DF\u540D\u963B\u65AD</td>\n\t\t\t\t\t\t<td class=\"limited-width\">").concat(wvlessws, "</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(wvlessws, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>\u5BA2\u6237\u7AEF\u53C2\u6570\u5982\u4E0B\uFF1A</h5>\n            <ul>\n                <li>\u5BA2\u6237\u7AEF\u5730\u5740(address)\uFF1A\u81EA\u5B9A\u4E49\u7684\u57DF\u540D \u6216\u8005 \u4F18\u9009\u57DF\u540D \u6216\u8005 \u4F18\u9009IP \u6216\u8005 \u53CD\u4EE3IP</li>\n                <li>\u7AEF\u53E3(port)\uFF1A7\u4E2Ahttp\u7AEF\u53E3\u53EF\u4EFB\u610F\u9009\u62E9(80\u30018080\u30018880\u30012052\u30012082\u30012086\u30012095)\uFF0C\u6216\u53CD\u4EE3IP\u5BF9\u5E94\u7AEF\u53E3</li>\n                <li>\u7528\u6237ID(uuid)\uFF1A").concat(userID, "</li>\n                <li>\u4F20\u8F93\u534F\u8BAE(network)\uFF1Aws \u6216\u8005 websocket</li>\n                <li>\u4F2A\u88C5\u57DF\u540D(host)\uFF1A").concat(hostName, "</li>\n                <li>\u8DEF\u5F84(path)\uFF1A/?ed=2560</li>\n\t\t<li>\u4F20\u8F93\u5B89\u5168(TLS)\uFF1A\u5173\u95ED</li>\n            </ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>2\uFF1ACF-workers-vless+ws+tls\u8282\u70B9</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\u8282\u70B9\u7279\u8272\uFF1A</th>\n\t\t\t\t\t\t<th>\u5355\u8282\u70B9\u94FE\u63A5\u5982\u4E0B\uFF1A</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">\u542F\u7528\u4E86TLS\u52A0\u5BC6\uFF0C<br>\u5982\u679C\u5BA2\u6237\u7AEF\u652F\u6301\u5206\u7247(Fragment)\u529F\u80FD\uFF0C\u5EFA\u8BAE\u5F00\u542F\uFF0C\u9632\u6B62\u57DF\u540D\u963B\u65AD</td>\n\t\t\t\t\t\t<td class=\"limited-width\">").concat(pvlesswstls, "</td>\t\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(pvlesswstls, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>\u5BA2\u6237\u7AEF\u53C2\u6570\u5982\u4E0B\uFF1A</h5>\n            <ul>\n                <li>\u5BA2\u6237\u7AEF\u5730\u5740(address)\uFF1A\u81EA\u5B9A\u4E49\u7684\u57DF\u540D \u6216\u8005 \u4F18\u9009\u57DF\u540D \u6216\u8005 \u4F18\u9009IP \u6216\u8005 \u53CD\u4EE3IP</li>\n                <li>\u7AEF\u53E3(port)\uFF1A6\u4E2Ahttps\u7AEF\u53E3\u53EF\u4EFB\u610F\u9009\u62E9(443\u30018443\u30012053\u30012083\u30012087\u30012096)\uFF0C\u6216\u53CD\u4EE3IP\u5BF9\u5E94\u7AEF\u53E3</li>\n                <li>\u7528\u6237ID(uuid)\uFF1A").concat(userID, "</li>\n                <li>\u4F20\u8F93\u534F\u8BAE(network)\uFF1Aws \u6216\u8005 websocket</li>\n                <li>\u4F2A\u88C5\u57DF\u540D(host)\uFF1A").concat(hostName, "</li>\n                <li>\u8DEF\u5F84(path)\uFF1A/?ed=2560</li>\n                <li>\u4F20\u8F93\u5B89\u5168(TLS)\uFF1A\u5F00\u542F</li>\n                <li>\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1(allowlnsecure)\uFF1Afalse</li>\n\t\t\t</ul>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<hr>\n\t\t\t<br>\t\n\t\t\t<br>\n\t\t\t<h3>3\uFF1A\u805A\u5408\u901A\u7528\u3001Clash-meta\u3001Sing-box\u8BA2\u9605\u94FE\u63A5\u5982\u4E0B\uFF1A</h3>\n\t\t\t<hr>\n\t\t\t<p>\u6CE8\u610F\uFF1A<br>1\u3001\u9ED8\u8BA4\u6BCF\u4E2A\u8BA2\u9605\u94FE\u63A5\u5305\u542BTLS+\u975ETLS\u517113\u4E2A\u7AEF\u53E3\u8282\u70B9<br>2\u3001\u5F53\u524Dworkers\u57DF\u540D\u4F5C\u4E3A\u8BA2\u9605\u94FE\u63A5\uFF0C\u9700\u901A\u8FC7\u4EE3\u7406\u8FDB\u884C\u8BA2\u9605\u66F4\u65B0<br>3\u3001\u5982\u4F7F\u7528\u7684\u5BA2\u6237\u7AEF\u4E0D\u652F\u6301\u5206\u7247\u529F\u80FD\uFF0C\u5219TLS\u8282\u70B9\u4E0D\u53EF\u7528</p>\n\t\t\t<hr>\n\n\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>\u805A\u5408\u901A\u7528\u5206\u4EAB\u94FE\u63A5 (\u53EF\u76F4\u63A5\u5BFC\u5165\u5BA2\u6237\u7AEF)\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(wkvlessshare, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\n\n   \n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>\u805A\u5408\u901A\u7528\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">").concat(ty, "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(ty, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"limited-width\">").concat(cl, "</td>\t\n\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(cl, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">").concat(sb, "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(sb, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n");
  } else {
    return "\n<br>\n<br>\n".concat(displayHtml, "\n<body>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h1>Cloudflare-workers/pages-vless\u4EE3\u7406\u811A\u672C V25.5.4</h1>\n\t\t\t<hr>\n            <p>").concat(noteshow, "</p>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n            <h3>1\uFF1ACF-pages/workers/\u81EA\u5B9A\u4E49\u57DF-vless+ws+tls\u8282\u70B9</h3>\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\u8282\u70B9\u7279\u8272\uFF1A</th>\n\t\t\t\t\t\t<th>\u5355\u8282\u70B9\u94FE\u63A5\u5982\u4E0B\uFF1A</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"limited-width\">\u542F\u7528\u4E86TLS\u52A0\u5BC6\uFF0C<br>\u5982\u679C\u5BA2\u6237\u7AEF\u652F\u6301\u5206\u7247(Fragment)\u529F\u80FD\uFF0C\u53EF\u5F00\u542F\uFF0C\u9632\u6B62\u57DF\u540D\u963B\u65AD</td>\n\t\t\t\t\t\t<td class=\"limited-width\">").concat(pvlesswstls, "</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(pvlesswstls, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n            <h5>\u5BA2\u6237\u7AEF\u53C2\u6570\u5982\u4E0B\uFF1A</h5>\n            <ul>\n                <li>\u5BA2\u6237\u7AEF\u5730\u5740(address)\uFF1A\u81EA\u5B9A\u4E49\u7684\u57DF\u540D \u6216\u8005 \u4F18\u9009\u57DF\u540D \u6216\u8005 \u4F18\u9009IP \u6216\u8005 \u53CD\u4EE3IP</li>\n                <li>\u7AEF\u53E3(port)\uFF1A6\u4E2Ahttps\u7AEF\u53E3\u53EF\u4EFB\u610F\u9009\u62E9(443\u30018443\u30012053\u30012083\u30012087\u30012096)\uFF0C\u6216\u53CD\u4EE3IP\u5BF9\u5E94\u7AEF\u53E3</li>\n                <li>\u7528\u6237ID(uuid)\uFF1A").concat(userID, "</li>\n                <li>\u4F20\u8F93\u534F\u8BAE(network)\uFF1Aws \u6216\u8005 websocket</li>\n                <li>\u4F2A\u88C5\u57DF\u540D(host)\uFF1A").concat(hostName, "</li>\n                <li>\u8DEF\u5F84(path)\uFF1A/?ed=2560</li>\n                <li>\u4F20\u8F93\u5B89\u5168(TLS)\uFF1A\u5F00\u542F</li>\n                <li>\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1(allowlnsecure)\uFF1Afalse</li>\n\t\t\t</ul>\n            <hr>\n\t\t\t<hr>\n\t\t\t<hr>\n            <br>\n            <br>\n\t\t\t<h3>2\uFF1A\u805A\u5408\u901A\u7528\u3001Clash-meta\u3001Sing-box\u8BA2\u9605\u94FE\u63A5\u5982\u4E0B\uFF1A</h3>\n\t\t\t<hr>\n\t\t\t<p>\u6CE8\u610F\uFF1A\u4EE5\u4E0B\u8BA2\u9605\u94FE\u63A5\u4EC56\u4E2ATLS\u7AEF\u53E3\u8282\u70B9</p>\n\t\t\t<hr>\n\n\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>\u805A\u5408\u901A\u7528\u5206\u4EAB\u94FE\u63A5 (\u53EF\u76F4\u63A5\u5BFC\u5165\u5BA2\u6237\u7AEF)\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(pgvlessshare, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\n\n\n\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>\u805A\u5408\u901A\u7528\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">").concat(pty, "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(pty, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\n\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Clash-meta\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"limited-width\">").concat(pcl, "</td>\t\n\t\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(pcl, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Sing-box\u8BA2\u9605\u94FE\u63A5\uFF1A</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"limited-width\">").concat(psb, "</td>\t\n\t\t\t\t\t\t\t<td><button class=\"btn btn-primary\" onclick=\"copyToClipboard('").concat(psb, "')\">\u70B9\u51FB\u590D\u5236\u94FE\u63A5</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<br>\n\t\t\t\t<br>\n        </div>\n    </div>\n</div>\n</body>\n");
  }
}
function gettyConfig(userID, hostName) {
  var vlessshare = btoa("vless://".concat(userID, "@").concat(IP1, ":").concat(PT1, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V1_").concat(IP1, "_").concat(PT1, "\nvless://").concat(userID, "@").concat(IP2, ":").concat(PT2, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V2_").concat(IP2, "_").concat(PT2, "\nvless://").concat(userID, "@").concat(IP3, ":").concat(PT3, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V3_").concat(IP3, "_").concat(PT3, "\nvless://").concat(userID, "@").concat(IP4, ":").concat(PT4, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V4_").concat(IP4, "_").concat(PT4, "\nvless://").concat(userID, "@").concat(IP5, ":").concat(PT5, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V5_").concat(IP5, "_").concat(PT5, "\nvless://").concat(userID, "@").concat(IP6, ":").concat(PT6, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V6_").concat(IP6, "_").concat(PT6, "\nvless://").concat(userID, "@").concat(IP7, ":").concat(PT7, "?encryption=none&security=none&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V7_").concat(IP7, "_").concat(PT7, "\nvless://").concat(userID, "@").concat(IP8, ":").concat(PT8, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V8_").concat(IP8, "_").concat(PT8, "\nvless://").concat(userID, "@").concat(IP9, ":").concat(PT9, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V9_").concat(IP9, "_").concat(PT9, "\nvless://").concat(userID, "@").concat(IP10, ":").concat(PT10, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V10_").concat(IP10, "_").concat(PT10, "\nvless://").concat(userID, "@").concat(IP11, ":").concat(PT11, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V11_").concat(IP11, "_").concat(PT11, "\nvless://").concat(userID, "@").concat(IP12, ":").concat(PT12, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V12_").concat(IP12, "_").concat(PT12, "\nvless://").concat(userID, "@").concat(IP13, ":").concat(PT13, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V13_").concat(IP13, "_").concat(PT13));
  return "".concat(vlessshare);
}
function getclConfig(userID, hostName) {
  return "\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: false\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V1_".concat(IP1, "_").concat(PT1, "\n  type: vless\n  server: ").concat(IP1.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT1, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V2_").concat(IP2, "_").concat(PT2, "\n  type: vless\n  server: ").concat(IP2.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT2, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V3_").concat(IP3, "_").concat(PT3, "\n  type: vless\n  server: ").concat(IP3.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT3, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V4_").concat(IP4, "_").concat(PT4, "\n  type: vless\n  server: ").concat(IP4.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT4, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V5_").concat(IP5, "_").concat(PT5, "\n  type: vless\n  server: ").concat(IP5.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT5, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V6_").concat(IP6, "_").concat(PT6, "\n  type: vless\n  server: ").concat(IP6.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT6, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: false\n  network: ws\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V7_").concat(IP7, "_").concat(PT7, "\n  type: vless\n  server: ").concat(IP7.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT7, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: false\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V8_").concat(IP8, "_").concat(PT8, "\n  type: vless\n  server: ").concat(IP8.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT8, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V9_").concat(IP9, "_").concat(PT9, "\n  type: vless\n  server: ").concat(IP9.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT9, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V10_").concat(IP10, "_").concat(PT10, "\n  type: vless\n  server: ").concat(IP10.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT10, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V11_").concat(IP11, "_").concat(PT11, "\n  type: vless\n  server: ").concat(IP11.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT11, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V12_").concat(IP12, "_").concat(PT12, "\n  type: vless\n  server: ").concat(IP12.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT12, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V13_").concat(IP13, "_").concat(PT13, "\n  type: vless\n  server: ").concat(IP13.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT13, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\nproxy-groups:\n- name: \u8D1F\u8F7D\u5747\u8861\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V1_").concat(IP1, "_").concat(PT1, "\n    - CF_V2_").concat(IP2, "_").concat(PT2, "\n    - CF_V3_").concat(IP3, "_").concat(PT3, "\n    - CF_V4_").concat(IP4, "_").concat(PT4, "\n    - CF_V5_").concat(IP5, "_").concat(PT5, "\n    - CF_V6_").concat(IP6, "_").concat(PT6, "\n    - CF_V7_").concat(IP7, "_").concat(PT7, "\n    - CF_V8_").concat(IP8, "_").concat(PT8, "\n    - CF_V9_").concat(IP9, "_").concat(PT9, "\n    - CF_V10_").concat(IP10, "_").concat(PT10, "\n    - CF_V11_").concat(IP11, "_").concat(PT11, "\n    - CF_V12_").concat(IP12, "_").concat(PT12, "\n    - CF_V13_").concat(IP13, "_").concat(PT13, "\n\n- name: \u81EA\u52A8\u9009\u62E9\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V1_").concat(IP1, "_").concat(PT1, "\n    - CF_V2_").concat(IP2, "_").concat(PT2, "\n    - CF_V3_").concat(IP3, "_").concat(PT3, "\n    - CF_V4_").concat(IP4, "_").concat(PT4, "\n    - CF_V5_").concat(IP5, "_").concat(PT5, "\n    - CF_V6_").concat(IP6, "_").concat(PT6, "\n    - CF_V7_").concat(IP7, "_").concat(PT7, "\n    - CF_V8_").concat(IP8, "_").concat(PT8, "\n    - CF_V9_").concat(IP9, "_").concat(PT9, "\n    - CF_V10_").concat(IP10, "_").concat(PT10, "\n    - CF_V11_").concat(IP11, "_").concat(PT11, "\n    - CF_V12_").concat(IP12, "_").concat(PT12, "\n    - CF_V13_").concat(IP13, "_").concat(PT13, "\n\n- name: \uD83C\uDF0D\u9009\u62E9\u4EE3\u7406\n  type: select\n  proxies:\n    - \u8D1F\u8F7D\u5747\u8861\n    - \u81EA\u52A8\u9009\u62E9\n    - DIRECT\n    - CF_V1_").concat(IP1, "_").concat(PT1, "\n    - CF_V2_").concat(IP2, "_").concat(PT2, "\n    - CF_V3_").concat(IP3, "_").concat(PT3, "\n    - CF_V4_").concat(IP4, "_").concat(PT4, "\n    - CF_V5_").concat(IP5, "_").concat(PT5, "\n    - CF_V6_").concat(IP6, "_").concat(PT6, "\n    - CF_V7_").concat(IP7, "_").concat(PT7, "\n    - CF_V8_").concat(IP8, "_").concat(PT8, "\n    - CF_V9_").concat(IP9, "_").concat(PT9, "\n    - CF_V10_").concat(IP10, "_").concat(PT10, "\n    - CF_V11_").concat(IP11, "_").concat(PT11, "\n    - CF_V12_").concat(IP12, "_").concat(PT12, "\n    - CF_V13_").concat(IP13, "_").concat(PT13, "\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,\uD83C\uDF0D\u9009\u62E9\u4EE3\u7406");
}
function getsbConfig(userID, hostName) {
  return "{\n\t  \"log\": {\n\t\t\"disabled\": false,\n\t\t\"level\": \"info\",\n\t\t\"timestamp\": true\n\t  },\n\t  \"experimental\": {\n\t\t\"clash_api\": {\n\t\t  \"external_controller\": \"127.0.0.1:9090\",\n\t\t  \"external_ui\": \"ui\",\n\t\t  \"external_ui_download_url\": \"\",\n\t\t  \"external_ui_download_detour\": \"\",\n\t\t  \"secret\": \"\",\n\t\t  \"default_mode\": \"Rule\"\n\t\t},\n\t\t\"cache_file\": {\n\t\t  \"enabled\": true,\n\t\t  \"path\": \"cache.db\",\n\t\t  \"store_fakeip\": true\n\t\t}\n\t  },\n\t  \"dns\": {\n\t\t\"servers\": [\n\t\t  {\n\t\t\t\"tag\": \"proxydns\",\n\t\t\t\"address\": \"tls://8.8.8.8/dns-query\",\n\t\t\t\"detour\": \"select\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"localdns\",\n\t\t\t\"address\": \"h3://223.5.5.5/dns-query\",\n\t\t\t\"detour\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"dns_fakeip\",\n\t\t\t\"address\": \"fakeip\"\n\t\t  }\n\t\t],\n\t\t\"rules\": [\n\t\t  {\n\t\t\t\"outbound\": \"any\",\n\t\t\t\"server\": \"localdns\",\n\t\t\t\"disable_cache\": true\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\"server\": \"proxydns\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\"server\": \"localdns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\"server\": \"localdns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"server\": \"proxydns\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"query_type\": [\n\t\t\t  \"A\",\n\t\t\t  \"AAAA\"\n\t\t\t],\n\t\t\t\"server\": \"dns_fakeip\"\n\t\t  }\n\t\t],\n\t\t\"fakeip\": {\n\t\t  \"enabled\": true,\n\t\t  \"inet4_range\": \"198.18.0.0/15\",\n\t\t  \"inet6_range\": \"fc00::/18\"\n\t\t},\n\t\t\"independent_cache\": true,\n\t\t\"final\": \"proxydns\"\n\t  },\n\t  \"inbounds\": [\n\t\t{\n\t\t  \"type\": \"tun\",\n                  \"tag\": \"tun-in\",\n\t\t  \"address\": [\n                    \"172.19.0.1/30\",\n\t\t    \"fd00::1/126\"\n      ],\n\t\t  \"auto_route\": true,\n\t\t  \"strict_route\": true,\n\t\t  \"sniff\": true,\n\t\t  \"sniff_override_destination\": true,\n\t\t  \"domain_strategy\": \"prefer_ipv4\"\n\t\t}\n\t  ],\n\t  \"outbounds\": [\n\t\t{\n\t\t  \"tag\": \"select\",\n\t\t  \"type\": \"selector\",\n\t\t  \"default\": \"auto\",\n\t\t  \"outbounds\": [\n\t\t\t\"auto\",\n\t\t\t\"CF_V1_".concat(IP1, "_").concat(PT1, "\",\n\t\t\t\"CF_V2_").concat(IP2, "_").concat(PT2, "\",\n\t\t\t\"CF_V3_").concat(IP3, "_").concat(PT3, "\",\n\t\t\t\"CF_V4_").concat(IP4, "_").concat(PT4, "\",\n\t\t\t\"CF_V5_").concat(IP5, "_").concat(PT5, "\",\n\t\t\t\"CF_V6_").concat(IP6, "_").concat(PT6, "\",\n\t\t\t\"CF_V7_").concat(IP7, "_").concat(PT7, "\",\n\t\t\t\"CF_V8_").concat(IP8, "_").concat(PT8, "\",\n\t\t\t\"CF_V9_").concat(IP9, "_").concat(PT9, "\",\n\t\t\t\"CF_V10_").concat(IP10, "_").concat(PT10, "\",\n\t\t\t\"CF_V11_").concat(IP11, "_").concat(PT11, "\",\n\t\t\t\"CF_V12_").concat(IP12, "_").concat(PT12, "\",\n\t\t\t\"CF_V13_").concat(IP13, "_").concat(PT13, "\"\n\t\t  ]\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP1, "\",\n\t\t  \"server_port\": ").concat(PT1, ",\n\t\t  \"tag\": \"CF_V1_").concat(IP1, "_").concat(PT1, "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP2, "\",\n\t\t  \"server_port\": ").concat(PT2, ",\n\t\t  \"tag\": \"CF_V2_").concat(IP2, "_").concat(PT2, "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP3, "\",\n\t\t  \"server_port\": ").concat(PT3, ",\n\t\t  \"tag\": \"CF_V3_").concat(IP3, "_").concat(PT3, "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP4, "\",\n\t\t  \"server_port\": ").concat(PT4, ",\n\t\t  \"tag\": \"CF_V4_").concat(IP4, "_").concat(PT4, "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP5, "\",\n\t\t  \"server_port\": ").concat(PT5, ",\n\t\t  \"tag\": \"CF_V5_").concat(IP5, "_").concat(PT5, "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP6, "\",\n\t\t  \"server_port\": ").concat(PT6, ",\n\t\t  \"tag\": \"CF_V6_").concat(IP6, "_").concat(PT6, "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP7, "\",\n\t\t  \"server_port\": ").concat(PT7, ",\n\t\t  \"tag\": \"CF_V7_").concat(IP7, "_").concat(PT7, "\",\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{     \n\t\t  \"server\": \"").concat(IP8, "\",\n\t\t  \"server_port\": ").concat(PT8, ",\n\t\t  \"tag\": \"CF_V8_").concat(IP8, "_").concat(PT8, "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP9, "\",\n\t\t  \"server_port\": ").concat(PT9, ",\n\t\t  \"tag\": \"CF_V9_").concat(IP9, "_").concat(PT9, "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP10, "\",\n\t\t  \"server_port\": ").concat(PT10, ",\n\t\t  \"tag\": \"CF_V10_").concat(IP10, "_").concat(PT10, "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP11, "\",\n\t\t  \"server_port\": ").concat(PT11, ",\n\t\t  \"tag\": \"CF_V11_").concat(IP11, "_").concat(PT11, "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP12, "\",\n\t\t  \"server_port\": ").concat(PT12, ",\n\t\t  \"tag\": \"CF_V12_").concat(IP12, "_").concat(PT12, "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"server\": \"").concat(IP13, "\",\n\t\t  \"server_port\": ").concat(PT13, ",\n\t\t  \"tag\": \"CF_V13_").concat(IP13, "_").concat(PT13, "\",\n\t\t  \"tls\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\"insecure\": false,\n\t\t\t\"utls\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t}\n\t\t  },\n\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t  \"transport\": {\n\t\t\t\"headers\": {\n\t\t\t  \"Host\": [\n\t\t\t\t\"").concat(hostName, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\"type\": \"ws\"\n\t\t  },\n\t\t  \"type\": \"vless\",\n\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"direct\",\n\t\t  \"type\": \"direct\"\n\t\t},\n\t\t{\n\t\t  \"tag\": \"auto\",\n\t\t  \"type\": \"urltest\",\n\t\t  \"outbounds\": [\n\t\t\t\"CF_V1_").concat(IP1, "_").concat(PT1, "\",\n\t\t\t\"CF_V2_").concat(IP2, "_").concat(PT2, "\",\n\t\t\t\"CF_V3_").concat(IP3, "_").concat(PT3, "\",\n\t\t\t\"CF_V4_").concat(IP4, "_").concat(PT4, "\",\n\t\t\t\"CF_V5_").concat(IP5, "_").concat(PT5, "\",\n\t\t\t\"CF_V6_").concat(IP6, "_").concat(PT6, "\",\n\t\t\t\"CF_V7_").concat(IP7, "_").concat(PT7, "\",\n\t\t\t\"CF_V8_").concat(IP8, "_").concat(PT8, "\",\n\t\t\t\"CF_V9_").concat(IP9, "_").concat(PT9, "\",\n\t\t\t\"CF_V10_").concat(IP10, "_").concat(PT10, "\",\n\t\t\t\"CF_V11_").concat(IP11, "_").concat(PT11, "\",\n\t\t\t\"CF_V12_").concat(IP12, "_").concat(PT12, "\",\n\t\t\t\"CF_V13_").concat(IP13, "_").concat(PT13, "\"\n\t\t  ],\n\t\t  \"url\": \"https://www.gstatic.com/generate_204\",\n\t\t  \"interval\": \"1m\",\n\t\t  \"tolerance\": 50,\n\t\t  \"interrupt_exist_connections\": false\n\t\t}\n\t  ],\n\t  \"route\": {\n\t\t\"rule_set\": [\n\t\t  {\n\t\t\t\"tag\": \"geosite-geolocation-!cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"geosite-cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  },\n\t\t  {\n\t\t\t\"tag\": \"geoip-cn\",\n\t\t\t\"type\": \"remote\",\n\t\t\t\"format\": \"binary\",\n\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs\",\n\t\t\t\"download_detour\": \"select\",\n\t\t\t\"update_interval\": \"1d\"\n\t\t  }\n\t\t],\n\t\t\"auto_detect_interface\": true,\n\t\t\"final\": \"select\",\n\t\t\"rules\": [\n                         {\n                        \"inbound\": \"tun-in\",\n                        \"action\": \"sniff\"\n                         },\n                          {\n                        \"protocol\": \"dns\",\n                           \"action\": \"hijack-dns\"\n                         },\n                        {\n                        \"port\": 443,\n                        \"network\": \"udp\",\n                        \"action\": \"reject\"\n                         },\n\t\t  {\n\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\"outbound\": \"select\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geoip-cn\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"ip_is_private\": true,\n\t\t\t\"outbound\": \"direct\"\n\t\t  },\n\t\t  {\n\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\"outbound\": \"select\"\n\t\t  }\n\t\t]\n\t  },\n\t  \"ntp\": {\n\t\t\"enabled\": true,\n\t\t\"server\": \"time.apple.com\",\n\t\t\"server_port\": 123,\n\t\t\"interval\": \"30m\",\n\t\t\"detour\": \"direct\"\n\t  }\n\t}");
}
function getptyConfig(userID, hostName) {
  var vlessshare = btoa("vless://".concat(userID, "@").concat(IP8, ":").concat(PT8, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V8_").concat(IP8, "_").concat(PT8, "\nvless://").concat(userID, "@").concat(IP9, ":").concat(PT9, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V9_").concat(IP9, "_").concat(PT9, "\nvless://").concat(userID, "@").concat(IP10, ":").concat(PT10, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V10_").concat(IP10, "_").concat(PT10, "\nvless://").concat(userID, "@").concat(IP11, ":").concat(PT11, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V11_").concat(IP11, "_").concat(PT11, "\nvless://").concat(userID, "@").concat(IP12, ":").concat(PT12, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V12_").concat(IP12, "_").concat(PT12, "\nvless://").concat(userID, "@").concat(IP13, ":").concat(PT13, "?encryption=none&security=tls&sni=").concat(hostName, "&fp=randomized&type=ws&host=").concat(hostName, "&path=%2F%3Fed%3D2560#CF_V13_").concat(IP13, "_").concat(PT13));
  return "".concat(vlessshare);
}
function getpclConfig(userID, hostName) {
  return "\nport: 7890\nallow-lan: true\nmode: rule\nlog-level: info\nunified-delay: true\nglobal-client-fingerprint: chrome\ndns:\n  enable: false\n  listen: :53\n  ipv6: true\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  default-nameserver: \n    - 223.5.5.5\n    - 114.114.114.114\n    - 8.8.8.8\n  nameserver:\n    - https://dns.alidns.com/dns-query\n    - https://doh.pub/dns-query\n  fallback:\n    - https://1.0.0.1/dns-query\n    - tls://dns.google\n  fallback-filter:\n    geoip: true\n    geoip-code: CN\n    ipcidr:\n      - 240.0.0.0/4\n\nproxies:\n- name: CF_V8_".concat(IP8, "_").concat(PT8, "\n  type: vless\n  server: ").concat(IP8.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT8, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V9_").concat(IP9, "_").concat(PT9, "\n  type: vless\n  server: ").concat(IP9.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT9, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V10_").concat(IP10, "_").concat(PT10, "\n  type: vless\n  server: ").concat(IP10.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT10, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V11_").concat(IP11, "_").concat(PT11, "\n  type: vless\n  server: ").concat(IP11.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT11, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V12_").concat(IP12, "_").concat(PT12, "\n  type: vless\n  server: ").concat(IP12.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT12, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\n- name: CF_V13_").concat(IP13, "_").concat(PT13, "\n  type: vless\n  server: ").concat(IP13.replace(/[\[\]]/g, ''), "\n  port: ").concat(PT13, "\n  uuid: ").concat(userID, "\n  udp: false\n  tls: true\n  network: ws\n  servername: ").concat(hostName, "\n  ws-opts:\n    path: \"/?ed=2560\"\n    headers:\n      Host: ").concat(hostName, "\n\nproxy-groups:\n- name: \u8D1F\u8F7D\u5747\u8861\n  type: load-balance\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  proxies:\n    - CF_V8_").concat(IP8, "_").concat(PT8, "\n    - CF_V9_").concat(IP9, "_").concat(PT9, "\n    - CF_V10_").concat(IP10, "_").concat(PT10, "\n    - CF_V11_").concat(IP11, "_").concat(PT11, "\n    - CF_V12_").concat(IP12, "_").concat(PT12, "\n    - CF_V13_").concat(IP13, "_").concat(PT13, "\n\n- name: \u81EA\u52A8\u9009\u62E9\n  type: url-test\n  url: http://www.gstatic.com/generate_204\n  interval: 300\n  tolerance: 50\n  proxies:\n    - CF_V8_").concat(IP8, "_").concat(PT8, "\n    - CF_V9_").concat(IP9, "_").concat(PT9, "\n    - CF_V10_").concat(IP10, "_").concat(PT10, "\n    - CF_V11_").concat(IP11, "_").concat(PT11, "\n    - CF_V12_").concat(IP12, "_").concat(PT12, "\n    - CF_V13_").concat(IP13, "_").concat(PT13, "\n\n- name: \uD83C\uDF0D\u9009\u62E9\u4EE3\u7406\n  type: select\n  proxies:\n    - \u8D1F\u8F7D\u5747\u8861\n    - \u81EA\u52A8\u9009\u62E9\n    - DIRECT\n    - CF_V8_").concat(IP8, "_").concat(PT8, "\n    - CF_V9_").concat(IP9, "_").concat(PT9, "\n    - CF_V10_").concat(IP10, "_").concat(PT10, "\n    - CF_V11_").concat(IP11, "_").concat(PT11, "\n    - CF_V12_").concat(IP12, "_").concat(PT12, "\n    - CF_V13_").concat(IP13, "_").concat(PT13, "\n\nrules:\n  - GEOIP,LAN,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,\uD83C\uDF0D\u9009\u62E9\u4EE3\u7406");
}
function getpsbConfig(userID, hostName) {
  return "{\n\t\t  \"log\": {\n\t\t\t\"disabled\": false,\n\t\t\t\"level\": \"info\",\n\t\t\t\"timestamp\": true\n\t\t  },\n\t\t  \"experimental\": {\n\t\t\t\"clash_api\": {\n\t\t\t  \"external_controller\": \"127.0.0.1:9090\",\n\t\t\t  \"external_ui\": \"ui\",\n\t\t\t  \"external_ui_download_url\": \"\",\n\t\t\t  \"external_ui_download_detour\": \"\",\n\t\t\t  \"secret\": \"\",\n\t\t\t  \"default_mode\": \"Rule\"\n\t\t\t},\n\t\t\t\"cache_file\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"path\": \"cache.db\",\n\t\t\t  \"store_fakeip\": true\n\t\t\t}\n\t\t  },\n\t\t  \"dns\": {\n\t\t\t\"servers\": [\n\t\t\t  {\n\t\t\t\t\"tag\": \"proxydns\",\n\t\t\t\t\"address\": \"tls://8.8.8.8/dns-query\",\n\t\t\t\t\"detour\": \"select\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"localdns\",\n\t\t\t\t\"address\": \"h3://223.5.5.5/dns-query\",\n\t\t\t\t\"detour\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"dns_fakeip\",\n\t\t\t\t\"address\": \"fakeip\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"rules\": [\n\t\t\t  {\n\t\t\t\t\"outbound\": \"any\",\n\t\t\t\t\"server\": \"localdns\",\n\t\t\t\t\"disable_cache\": true\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\t\"server\": \"proxydns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\t\"server\": \"localdns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\t\"server\": \"localdns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"server\": \"proxydns\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"query_type\": [\n\t\t\t\t  \"A\",\n\t\t\t\t  \"AAAA\"\n\t\t\t\t],\n\t\t\t\t\"server\": \"dns_fakeip\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"fakeip\": {\n\t\t\t  \"enabled\": true,\n\t\t\t  \"inet4_range\": \"198.18.0.0/15\",\n\t\t\t  \"inet6_range\": \"fc00::/18\"\n\t\t\t},\n\t\t\t\"independent_cache\": true,\n\t\t\t\"final\": \"proxydns\"\n\t\t  },\n\t\t  \"inbounds\": [\n\t\t\t{\n\t\t\t  \"type\": \"tun\",\n                        \"tag\": \"tun-in\",\n\t\t  \"address\": [\n                    \"172.19.0.1/30\",\n\t\t    \"fd00::1/126\"\n      ],\n\t\t\t  \"auto_route\": true,\n\t\t\t  \"strict_route\": true,\n\t\t\t  \"sniff\": true,\n\t\t\t  \"sniff_override_destination\": true,\n\t\t\t  \"domain_strategy\": \"prefer_ipv4\"\n\t\t\t}\n\t\t  ],\n\t\t  \"outbounds\": [\n\t\t\t{\n\t\t\t  \"tag\": \"select\",\n\t\t\t  \"type\": \"selector\",\n\t\t\t  \"default\": \"auto\",\n\t\t\t  \"outbounds\": [\n\t\t\t\t\"auto\",\n\t\t\t\t\"CF_V8_".concat(IP8, "_").concat(PT8, "\",\n\t\t\t\t\"CF_V9_").concat(IP9, "_").concat(PT9, "\",\n\t\t\t\t\"CF_V10_").concat(IP10, "_").concat(PT10, "\",\n\t\t\t\t\"CF_V11_").concat(IP11, "_").concat(PT11, "\",\n\t\t\t\t\"CF_V12_").concat(IP12, "_").concat(PT12, "\",\n\t\t\t\t\"CF_V13_").concat(IP13, "_").concat(PT13, "\"\n\t\t\t  ]\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"").concat(IP8, "\",\n\t\t\t  \"server_port\": ").concat(PT8, ",\n\t\t\t  \"tag\": \"CF_V8_").concat(IP8, "_").concat(PT8, "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"").concat(hostName, "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"").concat(IP9, "\",\n\t\t\t  \"server_port\": ").concat(PT9, ",\n\t\t\t  \"tag\": \"CF_V9_").concat(IP9, "_").concat(PT9, "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"").concat(hostName, "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"").concat(IP10, "\",\n\t\t\t  \"server_port\": ").concat(PT10, ",\n\t\t\t  \"tag\": \"CF_V10_").concat(IP10, "_").concat(PT10, "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"").concat(hostName, "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"").concat(IP11, "\",\n\t\t\t  \"server_port\": ").concat(PT11, ",\n\t\t\t  \"tag\": \"CF_V11_").concat(IP11, "_").concat(PT11, "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"").concat(hostName, "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"").concat(IP12, "\",\n\t\t\t  \"server_port\": ").concat(PT12, ",\n\t\t\t  \"tag\": \"CF_V12_").concat(IP12, "_").concat(PT12, "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"").concat(hostName, "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"server\": \"").concat(IP13, "\",\n\t\t\t  \"server_port\": ").concat(PT13, ",\n\t\t\t  \"tag\": \"CF_V13_").concat(IP13, "_").concat(PT13, "\",\n\t\t\t  \"tls\": {\n\t\t\t\t\"enabled\": true,\n\t\t\t\t\"server_name\": \"").concat(hostName, "\",\n\t\t\t\t\"insecure\": false,\n\t\t\t\t\"utls\": {\n\t\t\t\t  \"enabled\": true,\n\t\t\t\t  \"fingerprint\": \"chrome\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"packet_encoding\": \"packetaddr\",\n\t\t\t  \"transport\": {\n\t\t\t\t\"headers\": {\n\t\t\t\t  \"Host\": [\n\t\t\t\t\t\"").concat(hostName, "\"\n\t\t\t\t  ]\n\t\t\t\t},\n\t\t\t\t\"path\": \"/?ed=2560\",\n\t\t\t\t\"type\": \"ws\"\n\t\t\t  },\n\t\t\t  \"type\": \"vless\",\n\t\t\t  \"uuid\": \"").concat(userID, "\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"direct\",\n\t\t\t  \"type\": \"direct\"\n\t\t\t},\n\t\t\t{\n\t\t\t  \"tag\": \"auto\",\n\t\t\t  \"type\": \"urltest\",\n\t\t\t  \"outbounds\": [\n\t\t\t\t\"CF_V8_").concat(IP8, "_").concat(PT8, "\",\n\t\t\t\t\"CF_V9_").concat(IP9, "_").concat(PT9, "\",\n\t\t\t\t\"CF_V10_").concat(IP10, "_").concat(PT10, "\",\n\t\t\t\t\"CF_V11_").concat(IP11, "_").concat(PT11, "\",\n\t\t\t\t\"CF_V12_").concat(IP12, "_").concat(PT12, "\",\n\t\t\t\t\"CF_V13_").concat(IP13, "_").concat(PT13, "\"\n\t\t\t  ],\n\t\t\t  \"url\": \"https://www.gstatic.com/generate_204\",\n\t\t\t  \"interval\": \"1m\",\n\t\t\t  \"tolerance\": 50,\n\t\t\t  \"interrupt_exist_connections\": false\n\t\t\t}\n\t\t  ],\n\t\t  \"route\": {\n\t\t\t\"rule_set\": [\n\t\t\t  {\n\t\t\t\t\"tag\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"geosite-cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"tag\": \"geoip-cn\",\n\t\t\t\t\"type\": \"remote\",\n\t\t\t\t\"format\": \"binary\",\n\t\t\t\t\"url\": \"https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs\",\n\t\t\t\t\"download_detour\": \"select\",\n\t\t\t\t\"update_interval\": \"1d\"\n\t\t\t  }\n\t\t\t],\n\t\t\t\"auto_detect_interface\": true,\n\t\t\t\"final\": \"select\",\n\t\t\t\"rules\": [\n                          {\n                         \"inbound\": \"tun-in\",\n                          \"action\": \"sniff\"\n                          },\n                          {\n                          \"protocol\": \"dns\",\n                          \"action\": \"hijack-dns\"\n                           },\n                          {\n                           \"port\": 443,\n                          \"network\": \"udp\",\n                          \"action\": \"reject\"\n                          },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Direct\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"clash_mode\": \"Global\",\n\t\t\t\t\"outbound\": \"select\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geoip-cn\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-cn\",\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"ip_is_private\": true,\n\t\t\t\t\"outbound\": \"direct\"\n\t\t\t  },\n\t\t\t  {\n\t\t\t\t\"rule_set\": \"geosite-geolocation-!cn\",\n\t\t\t\t\"outbound\": \"select\"\n\t\t\t  }\n\t\t\t]\n\t\t  },\n\t\t  \"ntp\": {\n\t\t\t\"enabled\": true,\n\t\t\t\"server\": \"time.apple.com\",\n\t\t\t\"server_port\": 123,\n\t\t\t\"interval\": \"30m\",\n\t\t\t\"detour\": \"direct\"\n\t\t  }\n\t\t}");
}
