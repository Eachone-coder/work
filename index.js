window._zhugeSdk = function (e) {
    var t = {};

    function i(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i),
            r.l = !0,
            r.exports
    }

    return i.m = e,
        i.c = t,
        i.d = function (e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        },

        i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },

        i.t = function (e, t) {
            if (1 & t && (e = i(e)),
                8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var r in e)
                    i.d(n, r, function (t) {
                        return e[t]
                    }
                        .bind(null, r));
            return n
        },

        i.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e['default']
            }
                : function () {
                    return e
                }
                ;
            return i.d(t, "a", t),
                t
        },

        i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },

        i.p = "",

        i(i.s = 29)
}([function (e, t) {
    var i,
        n, r, o, a, s, c, u, d, p, l,
        h = window.navigator,
        f = window.document,
        g = h.userAgent,
        v = Array.prototype,
        m = Object.prototype,
        _ = m.toString,
        y = v.forEach,
        w = Array.isArray,
        k = v.slice,
        b = m.hasOwnProperty,
        S = {}, T = [],
        z = null,
        A = {
            each: function (e, t, i) {
                if (null != e)
                    if (y && e.forEach === y)
                        e.forEach(t, i);
                    else if (e.length === +e.length) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (n in e && t.call(i, e[n], n, e) === S)
                                return
                    } else
                        for (var o in e)
                            if (b.call(e, o) && t.call(i, e[o], o, e) === S)
                                return
            },
            extend: function (e) {
                return A.each(k.call(arguments, 1), (function (t) {
                    for (var i in t)
                        void 0 !== t[i] && (e[i] = t[i])
                }
                )),
                    e
            },
            isUndefined: function (e) {
                return void 0 === e
            },
            type: function (e) {
                return _.call(e)
            },
            isString: function (e) {
                return "[object String]" == _.call(e)
            },
            isArray: w || function (e) {
                return "[object Array]" === _.call(e)
            }
            ,
            isFunction: function (e) {
                return "[object Function]" === _.call(e)
            },
            isObject: function (e) {
                return "[object Object]" === _.call(e) && void 0 !== e
            },
            hasMobileSdk: function () {
                var e = function () {
                    return !!(window.zhugeTracker || window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.zhugeTracker)
                }
                    , t = /ZGSDK/.test(window.navigator.userAgent) || e()
                    , i = e()
                    , n = this;
                return i || z || (z = setInterval((function () {
                    if (e()) {
                        for (var t = 0; t < T.length; t++) {
                            var i = T[t]
                                , r = n.hasMobileSdk();
                            r[i[0]].apply(r, i[1])
                        }
                        T = [],
                            clearInterval(z)
                    }
                }
                ), 50)),
                {
                    flag: t,
                    track: function (e, n) {
                        t && (i ? window.zhugeTracker ? window.zhugeTracker.trackProperty(e, A.JSONEncode(n)) : window.webkit.messageHandlers.zhugeTracker.postMessage({
                            type: "track",
                            name: e,
                            prop: n
                        }) : T.push(["track", [e, n]]))
                    },
                    identify: function (e, n) {
                        t && (i ? window.zhugeTracker ? window.zhugeTracker.identifyProperty(e, A.JSONEncode(n)) : window.webkit.messageHandlers.zhugeTracker.postMessage({
                            type: "identify",
                            name: e,
                            prop: n
                        }) : T.push(["identify", [e, n]]))
                    },
                    autoTrack: function (e, n) {
                        t && (i ? window.zhugeTracker ? window.zhugeTracker.autoTrackProperty(e, A.JSONEncode(n)) : window.webkit.messageHandlers.zhugeTracker.postMessage({
                            type: "autoTrack",
                            name: e,
                            prop: n
                        }) : T.push(["autoTrack", [e, n]]))
                    },
                    getDid: function () {
                        if (t && window.zhugeTracker) {
                            if (A.isString(window.zhugeTracker.did))
                                return window.zhugeTracker.did;
                            if (A.isFunction(window.zhugeTracker.getDid))
                                return window.zhugeTracker.getDid();
                            if (A.isString(window.zhugeDid))
                                return window.zhugeDid
                        }
                    }
                }
            },
            includes: function (e, t) {
                return -1 !== e.indexOf(t)
            },
            encode: function (e, t) {
                var i = {};
                for (var n in e)
                    t && /^\$/.test(n) ? i[n] = e[n] : i["_" + n] = e[n];
                return i
            },
            truncate: function (e, t) {
                var i;
                return "string" == typeof e ? i = e.slice(0, t) : A.isArray(e) ? (i = [],
                    A.each(e, (function (e) {
                        i.push(A.truncate(e, t))
                    }
                    ))) : A.isObject(e) ? (i = {},
                        A.each(e, (function (e, n) {
                            i[n] = A.truncate(e, t)
                        }
                        ))) : i = e,
                    i
            },
            strip_empty_properties: function (e) {
                var t = {};
                return A.each(e, (function (e, i) {
                    A.isString(e) && e.length > 0 && (t[i] = e)
                }
                )),
                    t
            },
            trim: function (e) {
                return (e || "").replace(/\s+/g, " ").replace(/^\s+/, "").replace(/\s+$/, "")
            },
            random: function (e, t) {
                return Math.round(Math.random() * (t - e)) + e
            },
            jsonp: function (e, t, i) {
                var n = "cb" + Math.random().toString().split(".")[1]
                    , r = f.createElement("script");
                r.src = e + "?callback=" + n,
                    window[n] = function (e) {
                        t(e)
                    }
                    ,
                    r.onerror = function () {
                        i()
                    }
                    ,
                    f.head ? f.head.appendChild(r) : f.getElementsByTagName("head")[0].appendChild(r)
            },
            isEqual: function (e, t) {
                if (this.type(e) !== this.type(t))
                    return !1;
                if (this.isObject(e)) {
                    var i = !0;
                    for (var n in e)
                        e[n] !== t[n] && (i = !1);
                    return i
                }
                return this.JSONEncode(e) === this.JSONEncode(t)
            },
            JSONEncode: function (e) {
                var t = function (e) {
                    var t = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
                        , i = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        };
                    return t.lastIndex = 0,
                        t.test(e) ? '"' + e.replace(t, (function (e) {
                            var t = i[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        }
                        )) + '"' : '"' + e + '"'
                }
                    , i = function (e, n) {
                        var r = ""
                            , o = 0
                            , a = ""
                            , s = ""
                            , c = 0
                            , u = r
                            , d = []
                            , p = n[e];
                        switch (p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(e)),
                        typeof p) {
                            case "string":
                                return t(p);
                            case "number":
                                return isFinite(p) ? String(p) : "null";
                            case "boolean":
                            case "null":
                                return String(p);
                            case "object":
                                if (!p)
                                    return "null";
                                if (r += "    ",
                                    d = [],
                                    "[object Array]" === _.apply(p)) {
                                    for (c = p.length,
                                        o = 0; o < c; o += 1)
                                        d[o] = i(o, p) || "null";
                                    return s = 0 === d.length ? "[]" : r ? "[\n" + r + d.join(",\n" + r) + "\n" + u + "]" : "[" + d.join(",") + "]",
                                        r = u,
                                        s
                                }
                                for (a in p)
                                    b.call(p, a) && (s = i(a, p)) && d.push(t(a) + (r ? ": " : ":") + s);
                                return s = 0 === d.length ? "{}" : r ? "{" + d.join(",") + u + "}" : "{" + d.join(",") + "}",
                                    r = u,
                                    s
                        }
                    };
                return i("", {
                    "": e
                })
            },
            JSONDecode: (s = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            },
                c = function (e) {
                    throw {
                        name: "SyntaxError",
                        message: e,
                        at: n,
                        text: o
                    }
                }
                ,
                u = function (e) {
                    return e && e !== r && c("Expected '" + e + "' instead of '" + r + "'"),
                        r = o.charAt(n),
                        n += 1,
                        r
                }
                ,
                d = function () {
                    var e, t = "";
                    for ("-" === r && (t = "-",
                        u("-")); r >= "0" && r <= "9";)
                        t += r,
                            u();
                    if ("." === r)
                        for (t += "."; u() && r >= "0" && r <= "9";)
                            t += r;
                    if ("e" === r || "E" === r)
                        for (t += r,
                            u(),
                            "-" !== r && "+" !== r || (t += r,
                                u()); r >= "0" && r <= "9";)
                            t += r,
                                u();
                    if (e = +t,
                        isFinite(e))
                        return e;
                    c("Bad number")
                }
                ,
                p = function () {
                    var e, t, i, n = "";
                    if ('"' === r)
                        for (; u();) {
                            if ('"' === r)
                                return u(),
                                    n;
                            if ("\\" === r)
                                if (u(),
                                    "u" === r) {
                                    for (i = 0,
                                        t = 0; t < 4 && (e = parseInt(u(), 16),
                                            isFinite(e)); t += 1)
                                        i = 16 * i + e;
                                    n += String.fromCharCode(i)
                                } else {
                                    if ("string" != typeof s[r])
                                        break;
                                    n += s[r]
                                }
                            else
                                n += r
                        }
                    c("Bad string")
                }
                ,
                l = function () {
                    for (; r && r <= " ";)
                        u()
                }
                ,
                a = function () {
                    switch (l(),
                    r) {
                        case "{":
                            return function () {
                                var e, t = {};
                                if ("{" === r) {
                                    if (u("{"),
                                        l(),
                                        "}" === r)
                                        return u("}"),
                                            t;
                                    for (; r;) {
                                        if (e = p(),
                                            l(),
                                            u(":"),
                                            Object.hasOwnProperty.call(t, e) && c('Duplicate key "' + e + '"'),
                                            t[e] = a(),
                                            l(),
                                            "}" === r)
                                            return u("}"),
                                                t;
                                        u(","),
                                            l()
                                    }
                                }
                                c("Bad object")
                            }();
                        case "[":
                            return function () {
                                var e = [];
                                if ("[" === r) {
                                    if (u("["),
                                        l(),
                                        "]" === r)
                                        return u("]"),
                                            e;
                                    for (; r;) {
                                        if (e.push(a()),
                                            l(),
                                            "]" === r)
                                            return u("]"),
                                                e;
                                        u(","),
                                            l()
                                    }
                                }
                                c("Bad array")
                            }();
                        case '"':
                            return p();
                        case "-":
                            return d();
                        default:
                            return r >= "0" && r <= "9" ? d() : function () {
                                switch (r) {
                                    case "t":
                                        return u("t"),
                                            u("r"),
                                            u("u"),
                                            u("e"),
                                            !0;
                                    case "f":
                                        return u("f"),
                                            u("a"),
                                            u("l"),
                                            u("s"),
                                            u("e"),
                                            !1;
                                    case "n":
                                        return u("n"),
                                            u("u"),
                                            u("l"),
                                            u("l"),
                                            null
                                }
                                c("Unexpected '" + r + "'")
                            }()
                    }
                }
                ,
                function (e) {
                    var t;
                    return o = e,
                        n = 0,
                        r = " ",
                        t = a(),
                        l(),
                        r && c("Syntax error"),
                        t
                }
            ),
            HTTPBuildQuery: function (e, t) {
                var i, n, r = [];
                return void 0 === t && (t = "&"),
                    A.each(e, (function (e, t) {
                        i = encodeURIComponent(e.toString()),
                            n = encodeURIComponent(t),
                            r[r.length] = n + "=" + i
                    }
                    )),
                    r.join(t)
            },
            getQueryParam: function (e, t) {
                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var i = new RegExp("[\\?&#]" + t + "=([^&#]*)").exec(e);
                if (null === i || i && "string" != typeof i[1] && i[1].length)
                    return "";
                var n = i[1];
                try {
                    n = decodeURIComponent(decodeURIComponent(n)).replace(/\+/g, " ")
                } catch (e) { }
                return n
            },
            getDomain: function (e) {
                var t = e.match(/\/\/\S*?\//);
                return t && t.length ? t[0].replace(/\//g, "") : ""
            },
            register_event: function () {
                function e(t) {
                    return t && (t.preventDefault = e.preventDefault,
                        t.stopPropagation = e.stopPropagation),
                        t
                }
                return e.preventDefault = function () {
                    this.returnValue = !1
                }
                    ,
                    e.stopPropagation = function () {
                        this.cancelBubble = !0
                    }
                    ,
                    function (t, i, n, r) {
                        if (t)
                            if (t.addEventListener && !r)
                                t.addEventListener(i, n, !1);
                            else {
                                var o = "on" + i
                                    , a = t[o];
                                t[o] = function (t, i, n) {
                                    return function (r) {
                                        if (r = r || e(window.event)) {
                                            var o, a, s = !0;
                                            return A.isFunction(n) && (o = n(r)),
                                                a = i.call(t, r),
                                                !1 !== o && !1 !== a || (s = !1),
                                                s
                                        }
                                    }
                                }(t, n, a)
                            }
                        else
                            console && console.error("No valid element provided to register_event")
                    }
            }(),
            cookie: {
                get: function (e) {
                    for (var t = e + "=", i = f.cookie.split(";"), n = 0; n < i.length; n++) {
                        for (var r = i[n]; " " == r.charAt(0);)
                            r = r.substring(1, r.length);
                        if (0 == r.indexOf(t))
                            return decodeURIComponent(r.substring(t.length, r.length))
                    }
                    return null
                },
                parse: function (e) {
                    var t;
                    try {
                        t = A.JSONDecode(A.cookie.get(e)) || {}
                    } catch (e) { }
                    return t
                },
                set: function (e, t, i, n, r, o) {
                    var a = ""
                        , s = ""
                        , c = "";
                    if (n) {
                        var u = f.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i)
                            , d = u ? u[0] : "";
                        a = d ? "; domain=." + d : ""
                    }
                    if (o || this.remove(e),
                        i) {
                        var p = new Date;
                        p.setTime(p.getTime() + 24 * i * 60 * 60 * 1e3),
                            s = "; expires=" + p.toGMTString()
                    }
                    r && (c = "; secure"),
                        f.cookie = e + "=" + encodeURIComponent(t) + s + "; path=/" + a + c
                },
                remove: function (e) {
                    var t = f.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i)
                        , i = t ? t[0] : "";
                    A.cookie.set(e, "", -1, "." + i, "", !0)
                }
            },
            info: {
                campaignParams: function (e) {
                    e || (e = "{}"),
                        A.isString(e) && (e = A.JSONDecode(e));
                    var t = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ")
                        , i = ""
                        , n = {};
                    return A.each(t, (function (t) {
                        ((i = A.getQueryParam(f.URL, t)).length || e[t]) && (n["$" + t] = e[t] || i)
                    }
                    )),
                        n
                },
                searchEngine: function (e) {
                    return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)baidu.com") ? "baidu" : 0 === e.search("https?://(.*)sogou.com") ? "sogou" : 0 === e.search("https?://(.*)haosou.com") ? "haosou" : null
                },
                searchKeyword: function (e) {
                    var t = A.info.searchEngine(e);
                    return "google" == t ? A.getQueryParam(e, "q") : "baidu" == t ? A.getQueryParam(e, "wd") : "sogou" == t ? A.getQueryParam(e, "query") : "haosou" == t ? A.getQueryParam(e, "q") : null
                },
                referringDomain: function (e) {
                    var t = e.split("/");
                    return t.length >= 3 ? t[2] : ""
                },
                browser: function (e, t, i) {
                    t = t || "";
                    return i ? A.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : A.includes(e, "FBIOS") ? "Facebook Mobile" : A.includes(e, "Chrome") ? "Chrome" : A.includes(e, "CriOS") ? "Chrome iOS" : A.includes(t, "Apple") ? A.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : A.includes(e, "Android") ? "Android Mobile" : A.includes(e, "Konqueror") ? "Konqueror" : A.includes(e, "Firefox") ? "Firefox" : A.includes(e, "MSIE") || A.includes(e, "Trident/") ? "Internet Explorer" : A.includes(e, "Gecko") ? "Mozilla" : ""
                },
                os: function () {
                    var e = g;
                    return /Windows/i.test(e) ? /Phone/.test(e) ? "Windows Mobile" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : ""
                },
                device: function (e) {
                    return /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Windows Phone/i.test(e) ? "Windows Phone" : /Android/.test(e) ? "Android" : ""
                },
                resolution: function () {
                    return screen.width + "*" + screen.height
                }
            },
            UUID: (i = function () {
                for (var e = 1 * new Date, t = 0; e == 1 * new Date;)
                    t++;
                return e.toString(16) + t.toString(16)
            }
                ,
                function () {
                    var e = (screen.height * screen.width).toString(16);
                    return i() + "-" + Math.random().toString(16).replace(".", "") + "-" + function (e) {
                        var t, i, n = g, r = [], o = 0;
                        function a(e, t) {
                            var i, n = 0;
                            for (i = 0; i < t.length; i++)
                                n |= r[i] << 8 * i;
                            return e ^ n
                        }
                        for (t = 0; t < n.length; t++)
                            i = n.charCodeAt(t),
                                r.unshift(255 & i),
                                r.length >= 4 && (o = a(o, r),
                                    r = []);
                        return r.length > 0 && (o = a(o, r)),
                            o.toString(16)
                    }() + "-" + e + "-" + i()
                }
            )
        };
    e.exports = A
}
    , function (e, t, i) {
        var n = i(5)
            , r = i(0);
        e.exports = r.extend({
            getRect: function (e, t) {
                var i = e.getBoundingClientRect()
                    , n = this.css(e, "position");
                return {
                    position: "fixed" === n ? "fixed" : "absolute",
                    width: e.offsetWidth,
                    height: e.offsetHeight,
                    top: i.top + ("fixed" === n || t ? 0 : window.pageYOffset),
                    bottom: i.bottom,
                    left: i.left + ("fixed" === n || t ? 0 : window.pageXOffset),
                    right: i.right
                }
            },
            getOffset: function (e) {
                for (var t = {
                    position: "fixed" === this.css(e, "position") ? "fixed" : "absolute",
                    width: e.offsetWidth,
                    height: e.offsetHeight,
                    top: e.offsetTop,
                    left: e.offsetLeft
                }; e.offsetParent;) {
                    var i = e.offsetParent;
                    "fixed" === this.css(i, "position") && (t.position = "fixed"),
                        t.top += i.offsetTop,
                        t.left += i.offsetLeft,
                        e = i
                }
                return t
            },
            css: function (e, t) {
                if (r.isString(t))
                    return window.getComputedStyle(e)[t];
                for (var i in t)
                    e.style[i] = t[i]
            },
            addStyleRules: function (e) {
                var t, i = document.createElement("style");
                document.head ? document.head.appendChild(i) : document.getElementsByTagName("head")[0].appendChild(i),
                    t = i.sheet;
                for (var n = 0, r = e.length; n < r; n++) {
                    var o = 1
                        , a = e[n]
                        , s = e[n][0]
                        , c = "";
                    "[object Array]" === Object.prototype.toString.call(a[1][0]) && (a = a[1],
                        o = 0);
                    for (var u = a.length; o < u; o++) {
                        var d = a[o];
                        c += d[0] + ":" + d[1] + (d[2] ? " !important" : "") + ";\n"
                    }
                    t.insertRule(s + "{" + c + "}", t.cssRules.length)
                }
            },
            append: function (e, t) {
                r.isString(t) ? e.insertAdjacentHTML("beforeend", t) : e.appendChild(t)
            },
            html: function (e, t) {
                e.innerHTML = t
            },
            remove: function (e) {
                e.parentNode && e.parentNode.removeChild(e)
            },
            contains: function (e, t) {
                for (var i = !1; this.getParent(t) && "body" !== n.getTagName(t);) {
                    if (this.getParent(t) === e) {
                        i = !0;
                        break
                    }
                    t = this.getParent(t)
                }
                return i
            },
            show: function (e, t) {
                return r.isArray(e) ? e.forEach((function (e) {
                    this.css(e, {
                        display: t || "block"
                    })
                }
                ), this) : this.css(e, {
                    display: t || "block"
                }),
                    e
            },
            hide: function (e) {
                return r.isArray(e) ? e.forEach((function (e) {
                    this.css(e, {
                        display: "none"
                    })
                }
                ), this) : this.css(e, {
                    display: "none"
                }),
                    e
            },
            child: function (e) {
                for (var t = [], i = 0, n = e.childNodes.length; i < n; i++)
                    this.isTextNode(e.childNodes[i]) || t.push(e.childNodes[i]);
                return t
            },
            siblings: function (e, t) {
                var i = [];
                return this.child(this.getParent(e)).forEach((function (n) {
                    n !== e && this.is(n, t) && i.push(n)
                }
                ), this),
                    i
            },
            setContext: function (e, t) {
                e.textContent = t
            },
            delegate: function (e, t, i, n, r) {
                var o = this;
                return this.bind(e, t, (function (e) {
                    var t = e.target
                        , a = o.is(t, i);
                    if (a.flag)
                        return n.call(r, e, a.target)
                }
                ), r)
            },
            scroll: function (e) {
                n.bind(e, "mousewheel", (function (t) {
                    var i = this.getRect(e).height
                        , n = e.scrollHeight;
                    (e.scrollTop === n - i && t.deltaY > 0 || 0 === e.scrollTop && t.deltaY < 0) && t.preventDefault()
                }
                ), this)
            },
            prev: function (e) {
                var t = e.previousSibling;
                return !t || this.isTextNode(e) ? null : t
            },
            prevAll: function (e) {
                for (var t = []; this.prev(e);)
                    t.push(this.prev(e)),
                        e = this.prev(e);
                return t
            },
            fixPosition: function (e) {
                var t = this.css(e, "position");
                /absolute|fixed/.test(t) || this.css(e, {
                    position: "relative"
                })
            },
            locate: function (e, t) {
                var i = this.getRect(e, !0)
                    , n = this.getRect(t)
                    , r = {
                        top: i.top,
                        left: i.left + i.width
                    };
                r.top + n.height >= window.innerHeight && (r.top = Math.max(r.top - (r.top + n.height - window.innerHeight), 0)),
                    r.left + n.width >= window.innerWidth && (r.left = Math.max(i.left - n.width, 0)),
                    this.css(t, {
                        top: r.top + "px",
                        left: r.left + "px"
                    })
            },
            removeData: function (e, t) {
                delete (e.dataset || {})[t]
            },
            empty: function (e) {
                return e.innerHTML = "",
                    e
            },
            scrollTo: function (e) {
                var t = this.getRect(this.body)
                    , i = this.getRect(e)
                    , n = i.top - t.height / 2
                    , r = i.left - t.width / 2;
                this.body.scrollTop = n,
                    this.body.scrollLeft = r
            }
        }, n)
    }
    , , , , function (e, t, i) {
        var n = i(0)
            , r = !0;
        !function () {
            try {
                document.querySelector(":scope *")
            } catch (e) {
                r = !1
            }
        }();
        var o = {
            prefix: {
                expand: "zhuge-auto-track-",
                interface: "zhuge-interface-"
            },
            body: document.getElementsByTagName("body")[0],
            ready: function (e, t) {
                if (this.body)
                    e.call(t);
                else
                    var i = this
                        , n = setInterval((function () {
                            window.document.body && (i.body = window.document.body,
                                clearInterval(n),
                                e.call(t))
                        }
                        ), 50)
            },
            addClass: function (e, t) {
                var i = this.getAttr(e, "class") || "";
                new RegExp(t).test(i) || (i += " " + t,
                    o.setAttr(e, "class", n.trim(i)))
            },
            removeClass: function (e, t) {
                var i = this.getAttr(e, "class") || "";
                o.setAttr(e, "class", n.trim(i.replace(t, "")))
            },
            bind: function (e, t, i, r) {
                r = r || e;
                var o = function (t) {
                    if ((t.target = t.target || t.srcElement,
                        n.isFunction(i)) && !1 === i.call(r, t || window.event, e))
                        return t.preventDefault && t.preventDefault(),
                            t.stopPropagation && t.stopPropagation(),
                            t.returnValue && (t.returnValue = !1),
                            t.cancelBubble && (t.cancelBubble = !0),
                            !1
                };
                if (e.addEventListener)
                    e.addEventListener(t, o, !0);
                else if (e.attachEvent)
                    e.attachEvent("on" + t, o);
                else {
                    var a = "on" + t
                        , s = e[a];
                    e[a] = function (t) {
                        return n.isFunction(s) && s.call(e, t || window.event),
                            i.call(r, t || window.event, e)
                    }
                }
                return {
                    unbind: function () {
                        e.removeEventListener ? e.removeEventListener(t, o, !0) : e.detachEvent && e.detachEvent("on" + t, o)
                    }
                }
            },
            data: function (e, t) {
                var i = e.dataset || {};
                if (n.isString(t))
                    return i[t];
                for (var r in t)
                    i[r] = t[r]
            },
            getStylePropertyValue: function (e, t) {
                return e && t ? window.getComputedStyle ? window.getComputedStyle(e).getPropertyValue(t) : e.currentStyle ? e.currentStyle[t] : "" : ""
            },
            getTagName: function (e) {
                return e && e.tagName && e.tagName.toLowerCase ? e.tagName.toLowerCase() : ""
            },
            getAttr: function (e, t) {
                return e && e.getAttribute ? e.getAttribute(t) : ""
            },
            setAttr: function (e, t, i) {
                if (n.isObject(t))
                    for (var r in t)
                        e.setAttribute(r, t[r]);
                else
                    e.setAttribute(t, i)
            },
            isValidLink: function (e) {
                return "a" === this.getTagName(e) && this.getAttr(e, "href") && !/^javascript:/.test(this.getAttr(e, "href"))
            },
            is: function (e, t) {
                for (var i = !1, n = this.query(t), r = e; r && !i && "body" !== this.getTagName(r);) {
                    for (var o = 0, a = n.length; o < a; o++) {
                        if (n[o] === r) {
                            i = !0;
                            break
                        }
                    }
                    i || (r = this.getParent(r))
                }
                return {
                    flag: i,
                    target: r
                }
            },
            isClickAble: function (e, t, i) {
                if (!e || this.isTextNode(e))
                    return {
                        flag: !1
                    };
                var r = this.getTagName(e)
                    , o = this.getAttr(e, "type")
                    , a = this.isValidLink(e)
                    , s = {
                        flag: !1,
                        target: e,
                        isValidLink: a,
                        form: null
                    };
                switch (r) {
                    case "a":
                        if (a) {
                            s.flag = !0;
                            break
                        }
                    case "button":
                        e.disabled || (s.flag = !0);
                        break;
                    case "input":
                        /button|reset|submit/.test(o) && !e.disabled && (s.flag = !0,
                            "submit" === o && (s.form = e.form));
                        break;
                    case "body":
                        s.flag = !1;
                        break;
                    default:
                        if (this.hasBindClick(e) || n.isFunction(t) && t(e))
                            s.flag = !0;
                        else if (!i)
                            return this.isClickAble(this.getParent(e))
                }
                return s
            },
            hasBindClick: function (e) {
                return !!(e.onclick || window.jQuery && (window.jQuery._data || window.jQuery.data) && n.isFunction(window.jQuery._data || window.jQuery.data) && (window.jQuery._data || window.jQuery.data)(e, "events"))
            },
            getParent: function (e) {
                return e.parentNode
            },
            getIndexInParent: function (e) {
                for (var t = this.getParent(e), i = this.getSelector(e), n = o.query(t, i), r = 0, a = n.length; r < a; r++) {
                    if (n[r] === e)
                        return r
                }
                return 0
            },
            getSelector: function (e) {
                for (var t = this.getAttr(e, "id"), i = this.getTagName(e), r = n.trim(this.getAttr(e, "class")).split(/\s/), o = [], a = 0, s = r.length; a < s; a++)
                    new RegExp(this.prefix.interface + "|" + this.prefix.expand).test(r[a]) || o.push(r[a]);
                return o = o.join("."),
                    t ? "#" + t : i + (o = o ? "." + o : "")
            },
            getUniqueSelector: function (e, t) {
                var i = this.getSelector(e);
                return /#/.test(i) || "body" === this.getTagName(e) ? (t && (i = i + ">" + t),
                    i) : this.getParent(e) ? (i += ":eq(" + this.getIndexInParent(e) + ")",
                        t && (i = i + ">" + t),
                        this.getUniqueSelector(this.getParent(e), i)) : ""
            },
            getTextContent: function (e) {
                return e && (e.textContent || e.innerText || this.getAttr(e, "type") || e.value) || ""
            },
            query: function () {
                var e = ""
                    , t = window.document
                    , i = /:eq\(\d+\)/g;
                if (n.isString(arguments[0]) ? e = arguments[0] : (t = arguments[0] || t,
                    e = arguments[1]),
                    this.isTextNode(t))
                    return [];
                if (i.test(e)) {
                    for (var o = e.split(i), a = e.match(i), s = null, c = 0, u = o.length; c < u; c++) {
                        var d = o[c].replace(/^>/, ":scope>");
                        if (!d)
                            break;
                        if (s = this.query(s || t, d),
                            !(a.length > c))
                            return s;
                        var p = a[c].match(/\d+/)[0];
                        if (!(s && p < s.length))
                            return [];
                        s = s[p]
                    }
                    return [s]
                }
                if (n.isString(e)) {
                    var l = e.match(/^[a-z|>|:]*[#.]\d/);
                    if (l && l.length) {
                        var h = (l[0] || "").length - 1;
                        e = e.slice(0, h) + "\\00003" + e.slice(h)
                    }
                }
                var f = /:scope(?![\w-])/gi
                    , g = null;
                if (!r && t.setAttribute && e && f.test(e)) {
                    var v = "q" + Math.floor(1e6 * Math.random());
                    return e = e.replace(f, "[" + v + "]"),
                        t.setAttribute(v, ""),
                        g = t.querySelectorAll(e),
                        t.removeAttribute(v),
                        g
                }
                return t.querySelectorAll(e)
            },
            isTextNode: function (e) {
                return "#text" === e.nodeName
            },
            loadJs: function (e) {
                e = n.extend({
                    async: !0,
                    src: "",
                    onLoad: null,
                    onError: null,
                    context: null
                }, e || {});
                var t = document.createElement("script");
                this.setAttr(t, {
                    async: e.async,
                    src: e.src
                }),
                    this.bind(t, "load", e.onLoad, e.context),
                    this.bind(t, "error", e.onError, e.context),
                    document.body.appendChild(t)
            }
        };
        e.exports = o
    }
    , function (e, t, i) {
        var n = i(0)
            , r = 4;
        function o() {
            return window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
        }
        function a(e, t) {
            var i = e.responseText;
            switch (t) {
                case "json":
                    i = n.JSONDecode(i);
                    break;
                default:
                    console && console.error(arguments, this)
            }
            return i
        }
        function s(e) {
            var t = [];
            for (var i in e) {
                var r = e[i];
                t.push(encodeURIComponent(i) + "=" + encodeURIComponent(n.isString(r) ? r : n.JSONEncode(r)))
            }
            return t.join("&")
        }
        e.exports = function (e, t) {
            var i = n.extend({
                type: "post",
                data: {},
                headers: {},
                dataType: "json",
                success: null,
                error: null,
                sync: !0,
                context: this,
                jsonp: !1
            }, t);
            try {
                i.jsonp ? function (e, t) {
                    var i = function (e, i) {
                        n.isFunction(t[e]) && t[e].call(t.context, i)
                    }
                        , r = document.createElement("script")
                        , o = "callback" + Math.random().toString().split(".")[1]
                        , a = e + "?";
                    t.data.callback = o,
                        window[o] = function (e) {
                            i("success", e)
                        }
                        ,
                        r.src = a + s(t.data),
                        r.onerror = function () {
                            i("error")
                        }
                        ,
                        document.body.appendChild(r)
                }(e, i) : function (e, t) {
                    var i = o()
                        , c = function (e) {
                            n.isFunction(t[e]) && t[e].call(t.context, a(i, t.dataType))
                        };
                    switch (i.onreadystatechange = function () {
                        if (i.readyState === r)
                            if (i.status >= 200 && i.status <= 299)
                                try {
                                    c("success")
                                } catch (e) {
                                    c("error")
                                }
                            else
                                c("error")
                    }
                    ,
                    i.onerror = function () {
                        c("error"),
                            console && console.error(arguments, this)
                    }
                    ,
                    i.withCredentials = !0,
                    t.type.toLowerCase()) {
                        case "get":
                            e += "?" + s(t.data),
                                i.open(t.type, e, t.sync);
                            break;
                        case "post":
                            var u = s(t.data);
                            i.open(t.type, e, t.sync),
                                i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                            break;
                        default:
                            console && console.error(arguments, this)
                    }
                    for (var d in t.headers)
                        i.setRequestHeader(d, t.headers[d]);
                    i.send(u)
                }(e, i)
            } catch (e) { }
        }
    }
    , function (e, t) {
        e.exports = {
            MODE: {
                NORMAL: 0,
                CREATE: 1,
                CREATING_EVENT: 2,
                ADD_SAME: 3,
                ADDING_SAME_AUTO: 4,
                ADDING_SAME_CUSTOM: 5,
                ADD_PROPERTY: 6,
                ADDING_PROPERTY: 7
            },
            SESSION_KEYS: {
                IS_ANALYSIS_MODE: "isZhugeVisualizerMode",
                PARAMS: "jsVisualizerParam"
            },
            URL: {
                DATA_LIST: "https://zhugeio.com/data/datalist.jsp",
                DELETE_EVENT: "https://zhugeio.com/appvisual/delete.jsp",
                CREATE_EVENT: "https://zhugeio.com/appvisual/create.jsp",
                UPDATE_EVENT: "https://zhugeio.com/appvisual/update.jsp",
                CHECK_NAME: "https://zhugeio.com/appvisual/checkName.jsp",
                QUERY_VISUAL_LIST: "https://zhugeio.com/appvisual/queryVisualList.jsp"
            }
        }
    }
    , function (e, t) {
        function i(e, t) {
            var i = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
        }
        function n(e, t, n, r, o, a) {
            return i((s = i(i(t, e), i(r, a))) << (c = o) | s >>> 32 - c, n);
            var s, c
        }
        function r(e, t, i, r, o, a, s) {
            return n(t & i | ~t & r, e, t, o, a, s)
        }
        function o(e, t, i, r, o, a, s) {
            return n(t & r | i & ~r, e, t, o, a, s)
        }
        function a(e, t, i, r, o, a, s) {
            return n(t ^ i ^ r, e, t, o, a, s)
        }
        function s(e, t, i, r, o, a, s) {
            return n(i ^ (t | ~r), e, t, o, a, s)
        }
        function c(e, t) {
            var n, c, u, d, p;
            e[t >> 5] |= 128 << t % 32,
                e[14 + (t + 64 >>> 9 << 4)] = t;
            var l = 1732584193
                , h = -271733879
                , f = -1732584194
                , g = 271733878;
            for (n = 0; n < e.length; n += 16)
                c = l,
                    u = h,
                    d = f,
                    p = g,
                    l = r(l, h, f, g, e[n], 7, -680876936),
                    g = r(g, l, h, f, e[n + 1], 12, -389564586),
                    f = r(f, g, l, h, e[n + 2], 17, 606105819),
                    h = r(h, f, g, l, e[n + 3], 22, -1044525330),
                    l = r(l, h, f, g, e[n + 4], 7, -176418897),
                    g = r(g, l, h, f, e[n + 5], 12, 1200080426),
                    f = r(f, g, l, h, e[n + 6], 17, -1473231341),
                    h = r(h, f, g, l, e[n + 7], 22, -45705983),
                    l = r(l, h, f, g, e[n + 8], 7, 1770035416),
                    g = r(g, l, h, f, e[n + 9], 12, -1958414417),
                    f = r(f, g, l, h, e[n + 10], 17, -42063),
                    h = r(h, f, g, l, e[n + 11], 22, -1990404162),
                    l = r(l, h, f, g, e[n + 12], 7, 1804603682),
                    g = r(g, l, h, f, e[n + 13], 12, -40341101),
                    f = r(f, g, l, h, e[n + 14], 17, -1502002290),
                    l = o(l, h = r(h, f, g, l, e[n + 15], 22, 1236535329), f, g, e[n + 1], 5, -165796510),
                    g = o(g, l, h, f, e[n + 6], 9, -1069501632),
                    f = o(f, g, l, h, e[n + 11], 14, 643717713),
                    h = o(h, f, g, l, e[n], 20, -373897302),
                    l = o(l, h, f, g, e[n + 5], 5, -701558691),
                    g = o(g, l, h, f, e[n + 10], 9, 38016083),
                    f = o(f, g, l, h, e[n + 15], 14, -660478335),
                    h = o(h, f, g, l, e[n + 4], 20, -405537848),
                    l = o(l, h, f, g, e[n + 9], 5, 568446438),
                    g = o(g, l, h, f, e[n + 14], 9, -1019803690),
                    f = o(f, g, l, h, e[n + 3], 14, -187363961),
                    h = o(h, f, g, l, e[n + 8], 20, 1163531501),
                    l = o(l, h, f, g, e[n + 13], 5, -1444681467),
                    g = o(g, l, h, f, e[n + 2], 9, -51403784),
                    f = o(f, g, l, h, e[n + 7], 14, 1735328473),
                    l = a(l, h = o(h, f, g, l, e[n + 12], 20, -1926607734), f, g, e[n + 5], 4, -378558),
                    g = a(g, l, h, f, e[n + 8], 11, -2022574463),
                    f = a(f, g, l, h, e[n + 11], 16, 1839030562),
                    h = a(h, f, g, l, e[n + 14], 23, -35309556),
                    l = a(l, h, f, g, e[n + 1], 4, -1530992060),
                    g = a(g, l, h, f, e[n + 4], 11, 1272893353),
                    f = a(f, g, l, h, e[n + 7], 16, -155497632),
                    h = a(h, f, g, l, e[n + 10], 23, -1094730640),
                    l = a(l, h, f, g, e[n + 13], 4, 681279174),
                    g = a(g, l, h, f, e[n], 11, -358537222),
                    f = a(f, g, l, h, e[n + 3], 16, -722521979),
                    h = a(h, f, g, l, e[n + 6], 23, 76029189),
                    l = a(l, h, f, g, e[n + 9], 4, -640364487),
                    g = a(g, l, h, f, e[n + 12], 11, -421815835),
                    f = a(f, g, l, h, e[n + 15], 16, 530742520),
                    l = s(l, h = a(h, f, g, l, e[n + 2], 23, -995338651), f, g, e[n], 6, -198630844),
                    g = s(g, l, h, f, e[n + 7], 10, 1126891415),
                    f = s(f, g, l, h, e[n + 14], 15, -1416354905),
                    h = s(h, f, g, l, e[n + 5], 21, -57434055),
                    l = s(l, h, f, g, e[n + 12], 6, 1700485571),
                    g = s(g, l, h, f, e[n + 3], 10, -1894986606),
                    f = s(f, g, l, h, e[n + 10], 15, -1051523),
                    h = s(h, f, g, l, e[n + 1], 21, -2054922799),
                    l = s(l, h, f, g, e[n + 8], 6, 1873313359),
                    g = s(g, l, h, f, e[n + 15], 10, -30611744),
                    f = s(f, g, l, h, e[n + 6], 15, -1560198380),
                    h = s(h, f, g, l, e[n + 13], 21, 1309151649),
                    l = s(l, h, f, g, e[n + 4], 6, -145523070),
                    g = s(g, l, h, f, e[n + 11], 10, -1120210379),
                    f = s(f, g, l, h, e[n + 2], 15, 718787259),
                    h = s(h, f, g, l, e[n + 9], 21, -343485551),
                    l = i(l, c),
                    h = i(h, u),
                    f = i(f, d),
                    g = i(g, p);
            return [l, h, f, g]
        }
        function u(e) {
            var t, i = "", n = 32 * e.length;
            for (t = 0; t < n; t += 8)
                i += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return i
        }
        function d(e) {
            var t, i = [];
            for (i[(e.length >> 2) - 1] = void 0,
                t = 0; t < i.length; t += 1)
                i[t] = 0;
            var n = 8 * e.length;
            for (t = 0; t < n; t += 8)
                i[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return i
        }
        function p(e) {
            var t, i, n = "";
            for (i = 0; i < e.length; i += 1)
                t = e.charCodeAt(i),
                    n += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
            return n
        }
        function l(e) {
            return unescape(encodeURIComponent(e))
        }
        function h(e) {
            return function (e) {
                return u(c(d(e), 8 * e.length))
            }(l(e))
        }
        function f(e, t) {
            return function (e, t) {
                var i, n, r = d(e), o = [], a = [];
                for (o[15] = a[15] = void 0,
                    r.length > 16 && (r = c(r, 8 * e.length)),
                    i = 0; i < 16; i += 1)
                    o[i] = 909522486 ^ r[i],
                        a[i] = 1549556828 ^ r[i];
                return n = c(o.concat(d(t)), 512 + 8 * t.length),
                    u(c(a.concat(n), 640))
            }(l(e), l(t))
        }
        e.exports = function (e, t, i) {
            return t ? i ? f(t, e) : p(f(t, e)) : i ? h(e) : p(h(e))
        }
    }
    , function (e, t) {
        e.exports.url = {
            CHECK_LOGIN: "https://zhugeio.com/user/checkAuthorization.jsp",
            EVENT_LIST: "https://zhugeio.com/data/datalist.jsp",
            LOAD_ENV_DATA: "https://zhugeio.com/appusergroup/getEventEnvData.jsp",
            LOAD_USER_PROPS: "https://zhugeio.com/appusergroup/getUserPropMeta.jsp"
        }
    }
    , , , , , function (e, t) {
        e.exports = {
            SESSION_KEYS: {
                PARAMS: "zhugeJsHeatMapParams"
            },
            URL: {
                DATA_LIST: "https://zhugeio.com/data/datalist.jsp"
            }
        }
    }
    , , , , , , , , , , , , , , , function (e, t, i) {
        var n = i(30)
            , r = i(5);
        DEFAULT_CONFIG = {
            api_host: "https://u.zhugeapi.net/web_event/web.gif?method=web_event_srv.upload",
            api_host_bac: "https://ubak.zhugeio.com/web_event/web.gif?method=web_event_srv.upload",
            debug: !1,
            inherit_user_data: !0,
            ping: !1,
            ping_interval: 12e3,
            idle_timeout: 3e5,
            idle_threshold: 1e4,
            track_link_timeout: 300,
            cookie_expire_days: 365,
            did_cookie_expire_days: 365,
            cookie_cross_subdomain: !0,
            cookie_secure: !1,
            info_upload_interval_days: 7,
            session_interval_mins: 30,
            app_channel: "js",
            app_version: "1.0",
            superProperty: "{}",
            platform: "{}",
            autoTrack: !1,
            openLanding: !0,
            isClickAble: null,
            redirectAfterTrack: !1,
            singlePage: !1,
            visualizer: !1,
            deepShare: !1,
            onLoadDeepShare: null,
            utm: {},
            adTrack: !1,
            zgsee: !1,
            autoUploadByApp: !0,
            did: "",
            wechart: !1,
            updateUtm: !1,
            shareToUtm: {}
        };
        for (var o = window.zhuge || [], a = new n(DEFAULT_CONFIG), s = 0; s < o.length; s++)
            if ("_init" === o[s][0]) {
                var c = o.shift()
                    , u = c.shift();
                c.push((function () {
                    for (; o && o.length > 0;) {
                        var e = o.shift()
                            , t = e.shift();
                        a[t] && a[t].apply(a, e)
                    }
                }
                )),
                    a[u] && a[u].apply(a, c);
                break
            }
        if (a.config.deepShare) {
            var d = new Date
                , p = d.getFullYear().toString() + d.getMonth().toString() + d.getDate().toString();
            r.loadJs({
                src: "https://zgsdk.zhugeio.com/deepshare.min.js?v=" + p,
                onLoad: a.config.onLoadDeepShare
            })
        }
        a.env = Object({
            ZHUGE_ORIGIN: "https://zhugeio.com",
            WEBSITE_API_ORIGIN: "https://zhugeio.com",
            API_SERVER_ORIGIN: "https://api.zhugeio.com",
            LOG_API_ORIGIN: "https://u.zhugeapi.net",
            LOG_API_ORIGIN_BAC: "https://ubak.zhugeio.com",
            ANALYSIS_CODE_SRC: "https://zgsdk.zhugeio.com/analysis.min.js",
            VISUALIZER_CODE_SRC: "https://zgsdk.zhugeio.com/visualizer.min.js",
            HEATMAP_CODE_SRC: "https://zgsdk.zhugeio.com/heatMap.min.js",
            DEEPSHARE_CODE_SRC: "https://zgsdk.zhugeio.com/deepshare.min.js",
            ZGSEE_SDK_SRC: "https://sdk.zhugeio.com/zgsee.min.js",
            ZGSEE_SOCKET: "wss://zgsee-gw.zhugeio.com/",
            ZGSEE_APPKEY: "https://ubak.zhugeio.com"
        }),
            window.zhuge = a
    }
    , function (e, t, i) {
        var n = i(0)
            , r = i(6)
            , o = i(31)
            , a = i(32)
            , s = i(33)
            , c = i(5)
            , u = i(34)
            , d = []
            , p = ["identify", "track", "page"]
            , l = null
            , h = ["eid", "ct", "tz", "cuid", "cn", "sid", "url", "os", "ov", "wv", "mnet", "referrer_domain", "net", "vn", "wxeid", "uid", "share_id", "share_title", "title", "path", "share_level"]
            , f = (i(9),
                i(14))
            , g = i(7)
            , v = function (e) {
                this.config = {},
                    n.extend(this.config, e),
                    this.idle = 0,
                    this.last_activity = new Date,
                    this.is_landing = !1,
                    this.pageUtm = null
            };
        v.prototype._init = function (e, t, i) {
            if (this._key = e,
                this._jsc = function () { }
                ,
                n.isObject(t))
                for (var r in n.extend(this.config, t),
                    this.config)
                    n.isObject(this.config[r]) && (this.config[r] = n.JSONEncode(this.config[r]));
            var o = this
                , a = function (e, t) {
                    o._getQueryParam(),
                        o._initDid(e),
                        o.cookie = new u("zg_" + o._key, o.config);
                    var i = n.cookie.get("_zg");
                    i && o.config.inherit_user_data ? (o.cookie.register_once(n.JSONDecode(i), ""),
                        n.cookie.remove("_zg")) : o.cookie.register_once({
                            sid: 0,
                            updated: 0,
                            info: 0,
                            superProperty: o.config.superProperty,
                            platform: o.config.platform
                        }, ""),
                        o.cookie.register({
                            superProperty: o.config.superProperty,
                            platform: o.config.platform
                        });
                    var r = o._session(t);
                    if (o.config.autoTrack && (o.is_landing = o._checkLanding(r)),
                        o._info(),
                        o._startPing(),
                        o.config.updateUtm) {
                        var a = n.info.campaignParams();
                        o.pageUtm = a
                    }
                    o.config.wechart && (o._openShare(),
                        o.config.autoTrack || o._trackPV()),
                        o._initAutoTrack(),
                        o.is_landing && o.config.openLanding && o._initLanding(),
                        o._startZgSee()
                };
            this.config.adTrack ? (o._wrapTrackerFunction(),
                n.jsonp("https://u.zhugeapi.net/v2/zgadtrack/header", (function (e) {
                    a(e.zg_adver_did, e.zg_adver_sid),
                        i(),
                        o._doTrackerQueue()
                }
                ), (function () {
                    a(),
                        i(),
                        o._doTrackerQueue()
                }
                ))) : (a(),
                    i())
        }
            ,
            v.prototype._getQueryParam = function () {
                for (var e = {}, t = decodeURIComponent(location.search).replace("?", "").split("&"), i = 0; i < t.length; i++) {
                    var r = t[i]
                        , o = r.split("=")[0]
                        , a = r.split("=")[1];
                    e[o] = a
                }
                return this._queryParam = e,
                    sessionStorage && sessionStorage.setItem("shareData", n.JSONEncode({
                        path: location.pathname,
                        param: e
                    })),
                    e
            }
            ,
            v.prototype._checkLanding = function (e) {
                if (this.config.autoTrack) {
                    var t = !1
                        , i = n.getDomain(location.href) !== n.getDomain(document.referrer);
                    return e ? i && (t = !0,
                        this.cookie.register({
                            landHref: location.href
                        })) : i && location.href === this.cookie.props.landHref && (t = !0),
                        t
                }
            }
            ,
            v.prototype._initLanding = function () {
                var e = this
                    , t = 0
                    , i = function (i) {
                        e.config.autoTrack && (l && clearTimeout(l),
                            l = setTimeout((function () {
                                var i = Math.floor(window.innerHeight + (window.scrollY || window.pageYOffset));
                                t !== i && (t = i,
                                    e.batchTrack([{
                                        dt: "abp",
                                        eid: "scroll",
                                        param: {
                                            $page_url: window.location.href,
                                            $page_title: window.document.title,
                                            $scroll: i
                                        }
                                    }]))
                            }
                            ), 50))
                    };
                c.ready((function () {
                    c.bind(window, "scroll", i)
                }
                ), this)
            }
            ,
            v.prototype._wrapTrackerFunction = function () {
                var e = this
                    , t = {}
                    , i = ""
                    , r = 0;
                for (r = 0; r < p.length; r++)
                    t[i = p[r]] = v.prototype[i],
                        v.prototype[i] = function (i) {
                            return function () {
                                e.cookie ? n.isFunction(t[i]) && t[i].apply(e, arguments) : d.push([t[i], arguments])
                            }
                        }(i)
            }
            ,
            v.prototype._doTrackerQueue = function () {
                var e = 0
                    , t = null;
                for (e = 0; e < d.length; e++)
                    t = d[e] || [],
                        n.isFunction(t[0]) && t[0].apply(this, t[1] || []);
                d = []
            }
            ,
            v.prototype._startZgSee = function () {
                var e = this;
                e.config.zgsee && r("https://ubak.zhugeio.com/appkey/" + this.getKey(), {
                    type: "get",
                    success: function (t) {
                        if (0 === t.policy || -1 === t.policy) {
                            window.zgsee = [{
                                init: [{
                                    socketUrl: "wss://zgsee-gw.zhugeio.com/",
                                    appKey: e.getKey()
                                }, e]
                            }];
                            var i = new Date
                                , n = i.getFullYear().toString() + i.getMonth().toString() + i.getDate().toString();
                            c.loadJs({
                                src: "https://sdk.zhugeio.com/zgsee.min.js?r=" + n
                            })
                        }
                    },
                    error: function (e) {
                        console.error(e)
                    }
                })
            }
            ,
            v.prototype._initAutoTrack = function () {
                var e = !0
                    , t = new a(this, {
                        open: this.config.visualizer,
                        stopTrack: function () {
                            e = !1
                        }
                    })
                    , i = new o(this, {
                        open: this.config.autoTrack,
                        isClickAble: this.config.isClickAble,
                        singlePage: this.config.singlePage,
                        isLanding: this.is_landing
                    })
                    , n = new s(this, {
                        open: this.config.autoTrack
                    })
                    , r = this
                    , u = function (n) {
                        if (e) {
                            var o = c.isClickAble(n.target, r.config.isClickAble);
                            if (o.flag) {
                                var a = [];
                                r.config.autoTrack && a.push(i.getEvent(o)),
                                    r.config.visualizer && (a = t.getEvent(o).concat(a));
                                var s = n.target || n.srcElement || {}
                                    , u = s.clickedByZgSdk
                                    , d = c.getAttr(o.target, "target");
                                if (r.config.redirectAfterTrack && document.body.addEventListener && (!d || "_self" === d))
                                    return !0 === u || !a.length || (r.batchTrack(a, (function () {
                                        s.clickedByZgSdk = !0,
                                            s.click()
                                    }
                                    )),
                                        !1);
                                a.length && r.batchTrack(a)
                            }
                        }
                    }
                    , d = function (e) {
                        var r = e.origin
                            , o = e.data;
                        if ("https://zhugeio.com" === r)
                            switch (o.command) {
                                case "pageReload":
                                    window.sessionStorage.removeItem("zhugeAnalysisModeType"),
                                        o.href ? location.replace(o.href) : location.reload();
                                    break;
                                case "authorized":
                                    var a = window.opener || window.parent;
                                    if (a === window)
                                        return;
                                    a.postMessage({
                                        command: "hasOpenAutoTrackAnalysis"
                                    }, "https://zhugeio.com"),
                                        i._loadAnalysisCode();
                                    break;
                                case "openJsVisualizer":
                                    window.opener.postMessage({
                                        command: "getQueryParam"
                                    }, r);
                                    break;
                                case "getQueryParam":
                                    window.sessionStorage.setItem(g.SESSION_KEYS.PARAMS, JSON.stringify(o.data)),
                                        t._loadAnalysisCode();
                                    break;
                                case "openJsHeatMap":
                                    n._initQueryParam();
                                    break;
                                case "getHeatMapQueryParam":
                                    window.sessionStorage.setItem(f.SESSION_KEYS.PARAMS, JSON.stringify(o.params)),
                                        n._loadAnalysisCode();
                                    break;
                                default:
                                    console.warn("无法识别的message", o)
                            }
                    };
                c.ready((function () {
                    c.bind(c.body, "click", u),
                        c.bind(window, "message", d)
                }
                ), this)
            }
            ,
            v.prototype._session = function (e) {
                var t = !1
                    , i = this.cookie.props.updated
                    , r = this.cookie.props.sid
                    , o = 1 * new Date
                    , a = new Date;
                if (0 == r || o > i + 60 * this.config.session_interval_mins * 1e3) {
                    if (r > 0 && i > 0) {
                        var s = {
                            dt: "se",
                            pr: {}
                        };
                        s.pr.$ct = i,
                            s.pr.$tz = 6e4 * -a.getTimezoneOffset(),
                            s.pr.$dru = i - r,
                            s.pr.$sid = r,
                            s.pr.$cuid = this.cookie.props.cuid,
                            this.cookie.register({
                                zs: 0,
                                sc: 0,
                                firstScreen: a.getTime()
                            }),
                            this._batchTrack(s)
                    }
                    r = e || o,
                        r *= 1;
                    var c = {
                        dt: "ss",
                        pr: {}
                    }
                        , u = n.info.campaignParams(this.config.utm);
                    c.pr = n.extend(c.pr, u),
                        this.cookie.register({
                            utm: n.JSONEncode(u)
                        }, ""),
                        c.pr.$ct = a.getTime(),
                        c.pr.$sid = r,
                        c.pr.$cuid = this.cookie.props.cuid,
                        c.pr.$cn = this.config.app_channel,
                        c.pr.$vn = this.config.app_version,
                        c.pr.$tz = 6e4 * -a.getTimezoneOffset(),
                        c.pr.$url = location.href,
                        c.pr.$ref = document.referrer;
                    var d = n.getDomain(document.referrer);
                    c.pr.$referrer_domain = d,
                        this.cookie.register({
                            referrerDomain: d
                        }, ""),
                        this._batchTrack(c),
                        this.cookie.register({
                            sid: r
                        }, ""),
                        t = !0
                }
                return this.cookie.register({
                    updated: o
                }, ""),
                    t
            }
            ,
            v.prototype._info = function (e) {
                var t = this.cookie.props.info
                    , i = 1 * new Date;
                if (i > t + 24 * this.config.info_upload_interval_days * 60 * 60 * 1e3 || e) {
                    var r = {
                        dt: "pl",
                        pr: {
                            $rs: n.info.resolution()
                        }
                    }
                        , o = new Date;
                    r.pr.$tz = 6e4 * -o.getTimezoneOffset(),
                        r.pr.$ct = o.getTime(),
                        r.pr.$cuid = this.cookie.props.cuid,
                        r.pr = n.extend(r.pr, n.encode(n.JSONDecode(this.cookie.props.platform))),
                        1 === this.cookie.props.zs && (r.pr.$zs = 1),
                        this._batchTrack(r),
                        this.cookie.register({
                            info: i
                        }, "")
                }
            }
            ,
            v.prototype.debug = function (e) {
                this.config.debug = e
            }
            ,
            v.prototype.identify = function (e, t, i) {
                e += "";
                var r = n.isObject(t) ? t : {}
                    , o = n.isObject(t) ? i : t;
                this.cookie.register({
                    cuid: e
                }, ""),
                    this._session();
                var a = n.hasMobileSdk();
                if (this.config.autoUploadByApp && a.flag)
                    a.identify(e, r),
                        n.isFunction(o) && o();
                else {
                    var s = {
                        dt: "usr",
                        pr: {}
                    }
                        , c = new Date;
                    s.pr.$ct = c.getTime(),
                        s.pr.$tz = 6e4 * -c.getTimezoneOffset(),
                        s.pr.$cuid = e,
                        s.pr.$sid = this.cookie.props.sid,
                        s.pr.$url = location.href,
                        s.pr.$ref = document.referrer,
                        s.pr = n.extend(s.pr, n.encode(r)),
                        this._batchTrack(s, o)
                }
            }
            ,
            v.prototype.identifyCross = function (e, t) {
                var i = new Date
                    , n = {
                        dt: "musr",
                        pr: {
                            $cuid: t || this.cookie.props.cuid,
                            $cfuid: e,
                            $tz: 6e4 * -i.getTimezoneOffset(),
                            $ct: i.getTime()
                        }
                    };
                this._batchTrack(n)
            }
            ,
            v.prototype.setUserProperties = function (e, t) {
                this.identify(this.cookie.props.cuid, e, t)
            }
            ,
            v.prototype.page = function (e, t) {
                this._session();
                var i = document.location.href
                    , n = {
                        et: "pg"
                    };
                n.pid = i,
                    n.pn = void 0 === e ? i : e,
                    n.tl = document.title,
                    n.ref = document.referrer,
                    n.sid = this.cookie.props.sid,
                    this._batchTrack(n, t)
            }
            ,
            v.prototype.setWxProperties = function (e, t, i) {
                if (e && t) {
                    var r = new Date
                        , o = {
                            dt: "um",
                            pr: {
                                $push_ch: "zgwx",
                                $wx_appid: e,
                                $wx_openid: t,
                                $ct: r.getTime(),
                                $tz: 6e4 * -r.getTimezoneOffset()
                            }
                        }
                        , a = this.cookie.props.cuid;
                    a && (o.pr.$cuid = a),
                        this._batchTrack(o, i)
                } else
                    n.isFunction(i) && i()
            }
            ,
            v.prototype.setUTM = function (e) {
                e = n.info.campaignParams(e),
                    this.cookie.register({
                        utm: n.JSONEncode(e)
                    }, "")
            }
            ,
            v.prototype.track = function (e, t, i) {
                var r = n.isObject(t) ? t : {}
                    , o = n.isObject(t) ? i : t
                    , a = n.hasMobileSdk();
                this.config.autoUploadByApp && a.flag ? (a.track(e, r),
                    n.isFunction(o) && o()) : this.batchTrack([{
                        dt: "evt",
                        eid: e,
                        param: r
                    }], o)
            }
            ,
            v.prototype.batchTrack = function (e, t) {
                var i = n.hasMobileSdk();
                if (this.config.autoUploadByApp && i.flag)
                    for (var r = 0, o = e.length; r < o; r++) {
                        var a = e[r];
                        i.autoTrack(a.eid, a.param),
                            n.isFunction(t) && t()
                    }
                else {
                    this._session();
                    var s = []
                        , c = new Date
                        , u = this.cookie.props.utm ? n.JSONDecode(this.cookie.props.utm) : {};
                    this.config.updateUtm && this.pageUtm && !n.isEqual(this.pageUtm, {}) && (u = this.pageUtm,
                        this.cookie.register({
                            utm: n.JSONEncode(u)
                        }, ""));
                    for (r = 0,
                        o = e.length; r < o; r++) {
                        if ((a = e[r]) && a.dt) {
                            var d = {
                                dt: a.dt,
                                pr: {}
                            };
                            for (var p in d.pr.$ct = c.getTime(),
                                d.pr.$tz = 6e4 * -c.getTimezoneOffset(),
                                d.pr.$cuid = this.cookie.props.cuid,
                                d.pr.$sid = this.cookie.props.sid,
                                d.pr.$url = location.href,
                                d.pr.$ref = document.referrer,
                                d.pr.$referrer_domain = this.cookie.props.referrerDomain,
                                d.pr.$eid = a.eid,
                                u)
                                d.pr[p] = u[p];
                            "evt" === a.dt ? d.pr = n.extend(d.pr, n.encode(a.param)) : d.pr = n.extend(d.pr, a.param),
                                d.pr = n.extend(d.pr, n.encode(n.JSONDecode(this.cookie.props.superProperty))),
                                s.push(d)
                        }
                    }
                    s.length && this._batchTrack(s, t)
                }
            }
            ,
            v.prototype._moved = function (e) {
                this.last_activity = new Date,
                    this.idle = 0
            }
            ,
            v.prototype._startPing = function () {
                var e = this;
                n.register_event(window, "mousemove", (function () {
                    e._moved.apply(e, arguments)
                }
                )),
                    void 0 === this.pingInterval && (this.pingInterval = window.setInterval((function () {
                        e._ping()
                    }
                    ), this.config.ping_interval))
            }
            ,
            v.prototype._stopPing = function () {
                void 0 !== this.pingInterval && (window.clearInterval(this.pingInterval),
                    delete this.pingInterval)
            }
            ,
            v.prototype._ping = function () {
                if (this.config.ping && this.idle < this.config.idle_timeout) {
                    var e = {
                        type: "ping",
                        sdk: "web",
                        sdkv: "2.0"
                    };
                    e.ak = this._key,
                        e.did = this.did.props.did,
                        e.cuid = this.cookie.props.cuid,
                        this._sendTrackRequest(e)
                } else
                    this._stopPing();
                var t = new Date;
                return t - this.last_activity > this.config.idle_threshold && (this.idle = t - this.last_activity),
                    this
            }
            ,
            v.prototype.getDid = function () {
                return this.did.props.did
            }
            ,
            v.prototype.getSid = function () {
                return this.cookie.props.sid
            }
            ,
            v.prototype.setSuperProperty = function (e) {
                n.isObject(e) && this.cookie.register({
                    superProperty: n.JSONEncode(e)
                })
            }
            ,
            v.prototype.setSuperPropertyFromURL = function (e) {
                if (n.isArray(e)) {
                    var t = n.JSONDecode(this.cookie.props.superProperty || "{}");
                    n.each(e, (function (e) {
                        var i = n.getQueryParam(document.URL, e);
                        i.length && (t[e] = i)
                    }
                    )),
                        this.cookie.register({
                            superProperty: n.JSONEncode(t)
                        })
                }
            }
            ,
            v.prototype.setPlatform = function (e) {
                n.isObject(e) && (this.cookie.register({
                    platform: n.JSONEncode(e),
                    info: 0
                }),
                    this._info())
            }
            ,
            v.prototype._batchTrack = function (e, t) {
                if (!this.config.autoUploadByApp || !n.hasMobileSdk().flag) {
                    var i = {}
                        , r = new Date;
                    i.sln = "itn",
                        i.pl = "js",
                        i.sdk = "zg-js",
                        i.sdkv = "2.0",
                        i.owner = "zg",
                        i.ut = [r.getFullYear(), r.getMonth() + 1, r.getDate()].join("-") + " " + r.toTimeString().match(/\d{2}:\d{2}:\d{2}/)[0],
                        i.tz = 6e4 * -r.getTimezoneOffset(),
                        i.debug = this.config.debug ? 1 : 0,
                        i.ak = this._key,
                        i.usr = {
                            did: this.did.props.did
                        };
                    var o = [];
                    n.isArray(e) ? o = e : o.push(e),
                        i.data = o,
                        this._sendTrackRequest(i, this._prepareCallback(t, i))
                }
            }
            ,
            v.prototype._prepareCallback = function (e, t) {
                if (!n.isFunction(e))
                    return null;
                return function (i) {
                    e(i, t)
                }
            }
            ,
            v.prototype._initDid = function (e) {
                var t = n.cookie.get("_zg")
                    , i = ""
                    , r = n.hasMobileSdk();
                r.flag && (i = r.getDid()),
                    e = e || this.config.did || i || n.UUID(),
                    t && n.JSONDecode(t).uuid && (e = n.JSONDecode(t).uuid),
                    n.cookie.get("zg_did") || n.cookie.remove("zg_" + this._key);
                var o = n.extend({}, this.config);
                o.cookie_expire_days = this.config.did_cookie_expire_days,
                    this.did = new u("zg_did", o),
                    this.did.register_once({
                        did: e
                    }, "")
            }
            ,
            v.prototype._sendTrackRequest = function (e, t) {
                var i = n.truncate(e, 255)
                    , r = {
                        event: n.JSONEncode(i),
                        _: (new Date).getTime().toString()
                    }
                    , o = {
                        bac: this.config.api_host_bac + "&" + n.HTTPBuildQuery(r),
                        normal: this.config.api_host + "&" + n.HTTPBuildQuery(r)
                    };
                e.data.length && "zgsee-web" === e.data[0].dt ? t(e) : this._sendRequest(o, t)
            }
            ,
            v.prototype._sendRequest = function (e, t) {
                var i = new Image
                    , n = !1
                    , r = setTimeout((function () {
                        !n && t && (t(),
                            n = !0)
                    }
                    ), 500)
                    , o = function () {
                        !n && t && (clearTimeout(r),
                            t())
                    };
                i.onload = o,
                    i.onerror = function () {
                        var t = new Image;
                        t.onload = o,
                            t.onerror = o,
                            t.src = e.bac
                    }
                    ,
                    i.src = e.normal
            }
            ,
            v.prototype.push = function (e) {
                var t = e.shift();
                this[t] && this[t].apply(this, e)
            }
            ,
            v.prototype.getKey = function () {
                return this._key
            }
            ,
            v.prototype._trackPV = function (e) {
                if (!this._trackedPv || e) {
                    var t = {
                        $page_url: window.location.href,
                        $page_title: window.document.title
                    };
                    this.is_landing && (t.$landing_page = !0);
                    var i = this._getQueryParam();
                    if (i.zg_share_id && i.zg_uid) {
                        t.$title = t.$page_title,
                            t.$share_level = i.zg_share_level;
                        var r = {};
                        for (var o in i)
                            h.includes(o.replace("zg_", "")) || 0 !== o.indexOf("zg_") || (r[o.replace("zg_", "")] = i[o]);
                        t = n.extend(t, n.encode(r))
                    }
                    this.batchTrack([{
                        dt: "abp",
                        eid: "pv",
                        param: t
                    }]),
                        this._trackedPv = !0
                }
            }
            ,
            v.prototype.pv = function () {
                this._trackPV(!0)
            }
            ,
            v.prototype._openShare = function () {
                var e = this._queryParam;
                if (e.zg_share_id && e.zg_uid) {
                    var t = {
                        $uid: e.zg_uid,
                        $share_id: e.zg_share_id,
                        $title: window.document.title || "",
                        $path: location.pathname || "",
                        $share_level: e.zg_share_level
                    }
                        , i = {};
                    for (var r in e)
                        h.includes(r.replace("zg_", "")) || 0 !== r.indexOf("zg_") || (i[r.replace("zg_", "")] = e[r]);
                    var o = n.JSONDecode(this.config.shareToUtm);
                    if (n.isObject(o) && !n.isEqual(o, {})) {
                        var a = {};
                        for (var s in o)
                            i[s] && (a[o[s]] = i[s]);
                        n.isEqual(a, {}) || (a.utm_campaign || (a.utm_campaign = "分享打开"),
                            this.setUTM(a))
                    }
                    this.batchTrack([{
                        dt: "abp",
                        eid: "wxsopen",
                        param: n.extend(t, n.encode(i))
                    }])
                }
            }
            ,
            v.prototype.trackShare = function (e, t, i, r) {
                if (n.isFunction(t)) {
                    var o = this.getDid()
                        , a = this.cookie.props.cuid
                        , s = (new Date).getTime()
                        , c = a || o
                        , u = null;
                    if (sessionStorage) {
                        var d = sessionStorage.getItem("shareData");
                        d && (u = JSON.parse(d))
                    }
                    var p = 1;
                    !r && u && u.path === location.pathname && parseInt(u.param.zg_share_level) && (s = parseInt(u.param.zg_share_id),
                        p = parseInt(u.param.zg_share_level) + 1);
                    var l = n.extend({
                        uid: c,
                        share_id: s,
                        share_level: p,
                        shareType: i ? "朋友圈" : "朋友"
                    }, e)
                        , h = {};
                    for (var f in l)
                        h["zg_" + f] = l[f];
                    var g = this;
                    t(n.HTTPBuildQuery(h), (function () {
                        g.batchTrack([{
                            dt: "abp",
                            eid: "wxshare",
                            param: n.extend({
                                $uid: c,
                                $share_id: s,
                                $share_title: e.title,
                                $title: window.document.title || "",
                                $path: location.pathname || "",
                                $share_level: p,
                                _shareType: h.zg_shareType
                            }, n.encode(e))
                        }])
                    }
                    ))
                } else
                    console.error("param error")
            }
            ,
            v.prototype.trackRevenue = function (e) {
                var t = n.extend({
                    price: 0,
                    total: 0,
                    productID: null,
                    productQuantity: 0,
                    revenueType: null
                }, e);
                t.total = function (e, t) {
                    var i = 0;
                    try {
                        i += e.toString().split(".")[1].length
                    } catch (e) { }
                    try {
                        i += t.toString().split(".")[1].length
                    } catch (e) { }
                    return Number(e.toString().replace(".", "")) * Number(t.toString().replace(".", "")) / Math.pow(10, i)
                }(t.price, t.productQuantity);
                var i = ["productID", "revenueType"]
                    , r = ["price", "total", "productQuantity"]
                    , o = {};
                for (var a in t)
                    if (-1 !== i.indexOf(a) || -1 !== r.indexOf(a)) {
                        var s = t[a];
                        r.indexOf(a) > -1 && (s = Number(s)) != s && (s = 0),
                            o["$" + a] = s
                    }
                this.batchTrack([{
                    dt: "abp",
                    eid: "revenue",
                    param: o
                }])
            }
            ,
            e.exports = v
    }
    , function (e, t, i) {
        var n = i(0)
            , r = i(5)
            , o = i(8)
            , a = i(9)
            , s = i(6);
        function c(e, t) {
            this.tracker = e,
                this.config = n.extend({
                    open: !1,
                    isClickAble: null,
                    singlePage: !1
                }, t),
                this.loaded = !1,
                this.config.open && this._init()
        }
        c.prototype = {
            constructor: c,
            _init: function () {
                this.config.singlePage && this._initHistoryHook(),
                    this._onView();
                var e = this;
                r.ready((function () {
                    e._initEventBind(),
                        setTimeout((function () {
                            e._checkPermissions()
                        }
                        ), 1e3)
                }
                ), this)
            },
            _initHistoryHook: function () {
                var e = window.history;
                if (e && e.pushState) {
                    var t = e.pushState
                        , i = this;
                    e.pushState = function (n) {
                        var r = t.apply(e, arguments);
                        return i._onView(!0),
                            r
                    }
                }
                if (e && e.replaceState) {
                    var n = e.replaceState;
                    i = this;
                    e.replaceState = function (t) {
                        var r = n.apply(e, arguments);
                        return i._onView(!0),
                            r
                    }
                }
            },
            _initEventBind: function () {
                if (this.config.singlePage) {
                    var e = this;
                    r.bind(window, "popstate", (function () {
                        e._onView(!0)
                    }
                    ), this)
                }
            },
            _checkPermissions: function () {
                "analysis" === window.sessionStorage.getItem("zhugeAnalysisModeType") && s(a.url.CHECK_LOGIN, {
                    type: a.json ? "get" : "post",
                    context: this,
                    success: function (e) {
                        e.authorized && this._loadAnalysisCode()
                    },
                    error: function (e) {
                        console && console.error("加载分析脚本失败", e)
                    }
                })
            },
            _loadAnalysisCode: function () {
                if (!this.loaded) {
                    this.loaded = !0,
                        window.sessionStorage.setItem("zhugeAnalysisModeType", "analysis");
                    var e = "https://zgsdk.zhugeio.com/analysis.min.js".replace(/\"/g, "");
                    r.loadJs({
                        src: e + "?a=" + Math.random()
                    })
                }
            },
            _onView: function (e) {
                this.tracker._trackPV(e)
            },
            getEvent: function (e) {
                var t = r.getUniqueSelector(e.target);
                if (t) {
                    var i = e.target
                        , n = {
                            $page_url: window.location.href,
                            $page_title: window.document.title,
                            $element_id: r.getAttr(i, "id"),
                            $element_content: r.getTextContent(i),
                            $element_type: r.getTagName(i),
                            $element_style: r.getAttr(i, "class"),
                            $element_selector: o(t),
                            $element_link: e.isValidLink ? r.getAttr(i, "href") : null
                        };
                    return this.config.isLanding && (n.$landing_page = !0),
                    {
                        dt: "abp",
                        eid: "click",
                        param: n
                    }
                }
            }
        },
            e.exports = c
    }
    , function (e, t, i) {
        var n = i(0)
            , r = i(5)
            , o = i(6)
            , a = i(7);
        function s(e, t) {
            this.config = n.extend({
                open: !1,
                stopTrack: null
            }, t || {}),
                this.tracker = e,
                this.eventList = [],
                this.loaded = !1,
                this.config.open && this._init()
        }
        s.prototype = {
            constructor: s,
            _init: function () {
                r.ready((function () {
                    this._initEventBind(),
                        this._loadEventList(),
                        window.sessionStorage.getItem(a.SESSION_KEYS.IS_ANALYSIS_MODE) && this._loadAnalysisCode()
                }
                ), this)
            },
            _initEventBind: function () { },
            _loadEventList: function () {
                o("https://api.zhugeio.com/v2/visual", {
                    type: "get",
                    data: {
                        url: location.href,
                        app_key: this.tracker.getKey(),
                        platform: 3
                    },
                    context: this,
                    jsonp: !0,
                    success: function (e) {
                        10001 === e.code && (this.eventList = e.visual_events)
                    }
                })
            },
            _loadAnalysisCode: function () {
                if (!this.loaded) {
                    this.loaded = !0,
                        this.config.stopTrack(),
                        window.sessionStorage.setItem(a.SESSION_KEYS.IS_ANALYSIS_MODE, JSON.stringify({
                            flag: !0
                        }));
                    var e = "https://zgsdk.zhugeio.com/visualizer.min.js".replace(/\"/g, "");
                    r.loadJs({
                        src: e + "?a=" + Math.random()
                    })
                }
            },
            getEvent: function (e) {
                for (var t = [], i = 0, n = this.eventList.length; i < n; i++)
                    for (var o = this.eventList[i], a = 0; a < o.element.length; a++)
                        if (r.is(e.target, o.element[a]).flag) {
                            for (var s = {
                                element_content: r.getTextContent(e.target),
                                element_link: e.isValidLink ? r.getAttr(e.target, "href") : null
                            }, c = 0; c < o.attr.length; c++) {
                                var u = o.attr[c];
                                s[u.name] = r.getTextContent(r.query(u.selector)[0])
                            }
                            var d = {
                                dt: "evt",
                                eid: o.event_name,
                                param: s
                            };
                            t.push(d)
                        }
                return t
            }
        },
            e.exports = s
    }
    , function (e, t, i) {
        var n = i(0)
            , r = i(1);
        i(14);
        function o(e, t) {
            (this.config = n.extend({
                open: !1
            }, t || {}),
                this.tracker = e,
                this.loaded = !1,
                this.config.open) && (this._init(),
                    "heatMap" === (window.sessionStorage.getItem("zhugeAnalysisModeType") || "") && this._initQueryParam())
        }
        o.prototype = {
            constructor: o,
            _init: function () {
                r.ready((function () {
                    this._initEventBind()
                }
                ), this)
            },
            _initEventBind: function () { },
            _initQueryParam: function () {
                (window.opener || window.parent).postMessage({
                    command: "getHeatMapQueryParam",
                    data: {
                        rect: r.getRect(r.body)
                    }
                }, "https://zhugeio.com")
            },
            _loadAnalysisCode: function () {
                if (!this.loaded) {
                    this.loaded = !0,
                        window.sessionStorage.setItem("zhugeAnalysisModeType", "heatMap");
                    var e = "https://zgsdk.zhugeio.com/heatMap.min.js".replace(/\"/g, "");
                    r.loadJs({
                        src: e + "?a=" + Math.random()
                    })
                }
            }
        },
            e.exports = o
    }
    , function (e, t, i) {
        var n = i(0)
            , r = function (e, t) {
                this.name = e,
                    this.props = {},
                    this.config = n.extend({}, t),
                    this.load()
            };
        r.prototype.load = function () {
            var e = n.cookie.parse(this.name);
            e && (this.props = n.extend({}, e))
        }
            ,
            r.prototype.save = function () {
                n.cookie.set(this.name, n.JSONEncode(this.props), this.config.cookie_expire_days, this.config.cookie_cross_subdomain, this.config.cookie_secure)
            }
            ,
            r.prototype.register_once = function (e, t) {
                return !!n.isObject(e) && (void 0 === t && (t = "None"),
                    n.each(e, (function (e, i) {
                        this.props[i] && this.props[i] !== t || (this.props[i] = e)
                    }
                    ), this),
                    this.save(),
                    !0)
            }
            ,
            r.prototype.register = function (e) {
                return !!n.isObject(e) && (n.extend(this.props, e),
                    this.save(),
                    !0)
            }
            ,
            e.exports = r
    }
]);
