import { r as w, C as Fe, a as Yn, R as i, aN as ha, aj as pa, q as ga, aO as ya, c as Ce, aB as ba, h as lr, a6 as nt, aP as wa, n as se, z as Dt, aQ as Re, f as Rn, _ as Vn, g as $n, o as ur, I as Wr, aR as qr, G as Nt, u as Sa, aS as Pa, m as _t, aT as Jt, w as Xn, at as Ur, ai as Kr, aU as Ca, aV as Oa, aW as xa, aa as yr, a9 as br, aX as jn, aY as xn } from "./index-BwwIQFuW.js";
var Jn = function() {
  return Jn = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Jn.apply(this, arguments);
}, Ea = function(e, r) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
  return n;
}, ka = function(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var t = n.call(e), a, u = [], l;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = t.next()).done; ) u.push(a.value);
  } catch (o) {
    l = { error: o };
  } finally {
    try {
      a && !a.done && (n = t.return) && n.call(t);
    } finally {
      if (l) throw l.error;
    }
  }
  return u;
}, Da = { showIcon: true, type: "info" }, Na = function(e, r) {
  var n, t = w.useContext(Fe), a = t.getPrefixCls, u = t.componentConfig, l = t.rtl, o = Yn(e, Da, u == null ? void 0 : u.Alert), s = o.style, m = o.className, c = o.action, C = o.type, h = C === void 0 ? "info" : C, E = o.title, S = o.content, v = o.icon, d = o.showIcon, y = o.closable, p = o.closeable, b = o.afterClose, k = o.onClose, g = o.closeElement, T = o.banner, M = Ea(o, ["style", "className", "action", "type", "title", "content", "icon", "showIcon", "closable", "closeable", "afterClose", "onClose", "closeElement", "banner"]), x = a("alert"), N = ka(w.useState(true), 2), B = N[0], F = N[1], A = i.useMemo(function() {
    if (v) return v;
    switch (h) {
      case "info":
        return i.createElement(ya, null);
      case "success":
        return i.createElement(ga, null);
      case "warning":
        return i.createElement(pa, null);
      case "error":
        return i.createElement(ha, null);
      default:
        return null;
    }
  }, [v, h]), O = function(H) {
    F(false), k == null || k(H);
  }, Z = Ce(x, x + "-" + h, (n = {}, n[x + "-with-title"] = E, n[x + "-banner"] = T, n[x + "-rtl"] = l, n), m), _ = "closeable" in o ? p : y;
  return i.createElement(ba, { in: B, timeout: 300, classNames: "zoomInTop", unmountOnExit: true, onExited: function() {
    b == null || b();
  } }, i.createElement("div", Jn({ ref: r, style: s, className: Z, role: "alert" }, M), d && i.createElement("div", { className: x + "-icon-wrapper" }, A), i.createElement("div", { className: x + "-content-wrapper" }, E && i.createElement("div", { className: x + "-title" }, E), S && i.createElement("div", { className: x + "-content" }, S)), c && i.createElement("div", { className: x + "-action" }, c), _ && i.createElement("button", { type: "button", onClick: O, className: x + "-close-btn" }, g || i.createElement(lr, null))));
}, _a = w.forwardRef(Na);
_a.displayName = "Alert";
var Ma = wa();
const $e = nt(Ma);
var pn = { exports: {} }, Ta = pn.exports, wr;
function La() {
  return wr || (wr = 1, (function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(Ta, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, u = /\d\d/, l = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, m = function(d) {
        return (d = +d) + (d > 68 ? 1900 : 2e3);
      }, c = function(d) {
        return function(y) {
          this[d] = +y;
        };
      }, C = [/[+-]\d\d:?(\d\d)?|Z/, function(d) {
        (this.zone || (this.zone = {})).offset = (function(y) {
          if (!y || y === "Z") return 0;
          var p = y.match(/([+-]|\d\d)/g), b = 60 * p[1] + (+p[2] || 0);
          return b === 0 ? 0 : p[0] === "+" ? -b : b;
        })(d);
      }], h = function(d) {
        var y = s[d];
        return y && (y.indexOf ? y : y.s.concat(y.f));
      }, E = function(d, y) {
        var p, b = s.meridiem;
        if (b) {
          for (var k = 1; k <= 24; k += 1) if (d.indexOf(b(k, 0, y)) > -1) {
            p = k > 12;
            break;
          }
        } else p = d === (y ? "pm" : "PM");
        return p;
      }, S = { A: [o, function(d) {
        this.afternoon = E(d, false);
      }], a: [o, function(d) {
        this.afternoon = E(d, true);
      }], Q: [a, function(d) {
        this.month = 3 * (d - 1) + 1;
      }], S: [a, function(d) {
        this.milliseconds = 100 * +d;
      }], SS: [u, function(d) {
        this.milliseconds = 10 * +d;
      }], SSS: [/\d{3}/, function(d) {
        this.milliseconds = +d;
      }], s: [l, c("seconds")], ss: [l, c("seconds")], m: [l, c("minutes")], mm: [l, c("minutes")], H: [l, c("hours")], h: [l, c("hours")], HH: [l, c("hours")], hh: [l, c("hours")], D: [l, c("day")], DD: [u, c("day")], Do: [o, function(d) {
        var y = s.ordinal, p = d.match(/\d+/);
        if (this.day = p[0], y) for (var b = 1; b <= 31; b += 1) y(b).replace(/\[|\]/g, "") === d && (this.day = b);
      }], w: [l, c("week")], ww: [u, c("week")], M: [l, c("month")], MM: [u, c("month")], MMM: [o, function(d) {
        var y = h("months"), p = (h("monthsShort") || y.map((function(b) {
          return b.slice(0, 3);
        }))).indexOf(d) + 1;
        if (p < 1) throw new Error();
        this.month = p % 12 || p;
      }], MMMM: [o, function(d) {
        var y = h("months").indexOf(d) + 1;
        if (y < 1) throw new Error();
        this.month = y % 12 || y;
      }], Y: [/[+-]?\d+/, c("year")], YY: [u, function(d) {
        this.year = m(d);
      }], YYYY: [/\d{4}/, c("year")], Z: C, ZZ: C };
      function v(d) {
        var y, p;
        y = d, p = s && s.formats;
        for (var b = (d = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(B, F, A) {
          var O = A && A.toUpperCase();
          return F || p[A] || n[A] || p[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(Z, _, H) {
            return _ || H.slice(1);
          }));
        }))).match(t), k = b.length, g = 0; g < k; g += 1) {
          var T = b[g], M = S[T], x = M && M[0], N = M && M[1];
          b[g] = N ? { regex: x, parser: N } : T.replace(/^\[|\]$/g, "");
        }
        return function(B) {
          for (var F = {}, A = 0, O = 0; A < k; A += 1) {
            var Z = b[A];
            if (typeof Z == "string") O += Z.length;
            else {
              var _ = Z.regex, H = Z.parser, oe = B.slice(O), X = _.exec(oe)[0];
              H.call(F, X), B = B.replace(X, "");
            }
          }
          return (function($) {
            var R = $.afternoon;
            if (R !== void 0) {
              var Q = $.hours;
              R ? Q < 12 && ($.hours += 12) : Q === 12 && ($.hours = 0), delete $.afternoon;
            }
          })(F), F;
        };
      }
      return function(d, y, p) {
        p.p.customParseFormat = true, d && d.parseTwoDigitYear && (m = d.parseTwoDigitYear);
        var b = y.prototype, k = b.parse;
        b.parse = function(g) {
          var T = g.date, M = g.utc, x = g.args;
          this.$u = M;
          var N = x[1];
          if (typeof N == "string") {
            var B = x[2] === true, F = x[3] === true, A = B || F, O = x[2];
            F && (O = x[2]), s = this.$locale(), !B && O && (s = p.Ls[O]), this.$d = (function(oe, X, $, R) {
              try {
                if (["x", "X"].indexOf(X) > -1) return new Date((X === "X" ? 1e3 : 1) * oe);
                var Q = v(X)(oe), ue = Q.year, K = Q.month, te = Q.day, ne = Q.hours, be = Q.minutes, ve = Q.seconds, re = Q.milliseconds, U = Q.zone, ie = Q.week, q = /* @__PURE__ */ new Date(), ce = te || (ue || K ? 1 : q.getDate()), fe = ue || q.getFullYear(), V = 0;
                ue && !K || (V = K > 0 ? K - 1 : q.getMonth());
                var I, ae = ne || 0, Y = be || 0, de = ve || 0, W = re || 0;
                return U ? new Date(Date.UTC(fe, V, ce, ae, Y, de, W + 60 * U.offset * 1e3)) : $ ? new Date(Date.UTC(fe, V, ce, ae, Y, de, W)) : (I = new Date(fe, V, ce, ae, Y, de, W), ie && (I = R(I).week(ie).toDate()), I);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(T, N, M, p), this.init(), O && O !== true && (this.$L = this.locale(O).$L), A && T != this.format(N) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
          } else if (N instanceof Array) for (var Z = N.length, _ = 1; _ <= Z; _ += 1) {
            x[1] = N[_ - 1];
            var H = p.apply(this, x);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            _ === Z && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else k.call(this, g);
        };
      };
    }));
  })(pn)), pn.exports;
}
var Ia = La();
const Ya = nt(Ia);
var gn = { exports: {} }, Ra = gn.exports, Sr;
function Va() {
  return Sr || (Sr = 1, (function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(Ra, (function() {
      return function(n, t, a) {
        t.prototype.isBetween = function(u, l, o, s) {
          var m = a(u), c = a(l), C = (s = s || "()")[0] === "(", h = s[1] === ")";
          return (C ? this.isAfter(m, o) : !this.isBefore(m, o)) && (h ? this.isBefore(c, o) : !this.isAfter(c, o)) || (C ? this.isBefore(m, o) : !this.isAfter(m, o)) && (h ? this.isAfter(c, o) : !this.isBefore(c, o));
        };
      };
    }));
  })(gn)), gn.exports;
}
var $a = Va();
const ja = nt($a);
var yn = { exports: {} }, Aa = yn.exports, Pr;
function Ha() {
  return Pr || (Pr = 1, (function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(Aa, (function() {
      var n = "week", t = "year";
      return function(a, u, l) {
        var o = u.prototype;
        o.week = function(s) {
          if (s === void 0 && (s = null), s !== null) return this.add(7 * (s - this.week()), "day");
          var m = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var c = l(this).startOf(t).add(1, t).date(m), C = l(this).endOf(n);
            if (c.isBefore(C)) return 1;
          }
          var h = l(this).startOf(t).date(m).startOf(n).subtract(1, "millisecond"), E = this.diff(h, n, true);
          return E < 0 ? l(this).startOf("week").week() : Math.ceil(E);
        }, o.weeks = function(s) {
          return s === void 0 && (s = null), this.week(s);
        };
      };
    }));
  })(yn)), yn.exports;
}
var Fa = Ha();
const za = nt(Fa);
var bn = { exports: {} }, Ba = bn.exports, Cr;
function Wa() {
  return Cr || (Cr = 1, (function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(Ba, (function() {
      return function(n, t) {
        var a = t.prototype, u = a.format;
        a.format = function(l) {
          var o = this, s = this.$locale();
          if (!this.isValid()) return u.bind(this)(l);
          var m = this.$utils(), c = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(C) {
            switch (C) {
              case "Q":
                return Math.ceil((o.$M + 1) / 3);
              case "Do":
                return s.ordinal(o.$D);
              case "gggg":
                return o.weekYear();
              case "GGGG":
                return o.isoWeekYear();
              case "wo":
                return s.ordinal(o.week(), "W");
              case "w":
              case "ww":
                return m.s(o.week(), C === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return m.s(o.isoWeek(), C === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return m.s(String(o.$H === 0 ? 24 : o.$H), C === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(o.$d.getTime() / 1e3);
              case "x":
                return o.$d.getTime();
              case "z":
                return "[" + o.offsetName() + "]";
              case "zzz":
                return "[" + o.offsetName("long") + "]";
              default:
                return C;
            }
          }));
          return u.bind(this)(c);
        };
      };
    }));
  })(bn)), bn.exports;
}
var qa = Wa();
const Ua = nt(qa);
var wn = { exports: {} }, Ka = wn.exports, Or;
function Za() {
  return Or || (Or = 1, (function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(Ka, (function() {
      return function(n, t) {
        t.prototype.weekYear = function() {
          var a = this.month(), u = this.week(), l = this.year();
          return u === 1 && a === 11 ? l + 1 : a === 0 && u >= 52 ? l - 1 : l;
        };
      };
    }));
  })(wn)), wn.exports;
}
var Qa = Za();
const Ga = nt(Qa);
var Sn = { exports: {} }, Xa = Sn.exports, xr;
function Ja() {
  return xr || (xr = 1, (function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(Xa, (function() {
      var n = "month", t = "quarter";
      return function(a, u) {
        var l = u.prototype;
        l.quarter = function(m) {
          return this.$utils().u(m) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (m - 1));
        };
        var o = l.add;
        l.add = function(m, c) {
          return m = Number(m), this.$utils().p(c) === t ? this.add(3 * m, n) : o.bind(this)(m, c);
        };
        var s = l.startOf;
        l.startOf = function(m, c) {
          var C = this.$utils(), h = !!C.u(c) || c;
          if (C.p(m) === t) {
            var E = this.quarter() - 1;
            return h ? this.month(3 * E).startOf(n).startOf("day") : this.month(3 * E + 2).endOf(n).endOf("day");
          }
          return s.bind(this)(m, c);
        };
      };
    }));
  })(Sn)), Sn.exports;
}
var eo = Ja();
const to = nt(eo);
var Pn = { exports: {} }, no = Pn.exports, Er;
function ro() {
  return Er || (Er = 1, (function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(no, (function() {
      var n = "minute", t = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
      return function(u, l, o) {
        var s = l.prototype;
        o.utc = function(v) {
          var d = { date: v, utc: true, args: arguments };
          return new l(d);
        }, s.utc = function(v) {
          var d = o(this.toDate(), { locale: this.$L, utc: true });
          return v ? d.add(this.utcOffset(), n) : d;
        }, s.local = function() {
          return o(this.toDate(), { locale: this.$L, utc: false });
        };
        var m = s.parse;
        s.parse = function(v) {
          v.utc && (this.$u = true), this.$utils().u(v.$offset) || (this.$offset = v.$offset), m.call(this, v);
        };
        var c = s.init;
        s.init = function() {
          if (this.$u) {
            var v = this.$d;
            this.$y = v.getUTCFullYear(), this.$M = v.getUTCMonth(), this.$D = v.getUTCDate(), this.$W = v.getUTCDay(), this.$H = v.getUTCHours(), this.$m = v.getUTCMinutes(), this.$s = v.getUTCSeconds(), this.$ms = v.getUTCMilliseconds();
          } else c.call(this);
        };
        var C = s.utcOffset;
        s.utcOffset = function(v, d) {
          var y = this.$utils().u;
          if (y(v)) return this.$u ? 0 : y(this.$offset) ? C.call(this) : this.$offset;
          if (typeof v == "string" && (v = (function(g) {
            g === void 0 && (g = "");
            var T = g.match(t);
            if (!T) return null;
            var M = ("" + T[0]).match(a) || ["-", 0, 0], x = M[0], N = 60 * +M[1] + +M[2];
            return N === 0 ? 0 : x === "+" ? N : -N;
          })(v), v === null)) return this;
          var p = Math.abs(v) <= 16 ? 60 * v : v;
          if (p === 0) return this.utc(d);
          var b = this.clone();
          if (d) return b.$offset = p, b.$u = false, b;
          var k = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (b = this.local().add(p + k, n)).$offset = p, b.$x.$localOffset = k, b;
        };
        var h = s.format;
        s.format = function(v) {
          var d = v || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, d);
        }, s.valueOf = function() {
          var v = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * v;
        }, s.isUTC = function() {
          return !!this.$u;
        }, s.toISOString = function() {
          return this.toDate().toISOString();
        }, s.toString = function() {
          return this.toDate().toUTCString();
        };
        var E = s.toDate;
        s.toDate = function(v) {
          return v === "s" && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : E.call(this);
        };
        var S = s.diff;
        s.diff = function(v, d, y) {
          if (v && this.$u === v.$u) return S.call(this, v, d, y);
          var p = this.local(), b = o(v).local();
          return S.call(p, b, d, y);
        };
      };
    }));
  })(Pn)), Pn.exports;
}
var ao = ro();
const oo = nt(ao);
var Cn = { exports: {} }, io = Cn.exports, kr;
function lo() {
  return kr || (kr = 1, (function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(io, (function() {
      var n = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, t = {};
      return function(a, u, l) {
        var o, s = function(h, E, S) {
          S === void 0 && (S = {});
          var v = new Date(h), d = (function(y, p) {
            p === void 0 && (p = {});
            var b = p.timeZoneName || "short", k = y + "|" + b, g = t[k];
            return g || (g = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: y, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: b }), t[k] = g), g;
          })(E, S);
          return d.formatToParts(v);
        }, m = function(h, E) {
          for (var S = s(h, E), v = [], d = 0; d < S.length; d += 1) {
            var y = S[d], p = y.type, b = y.value, k = n[p];
            k >= 0 && (v[k] = parseInt(b, 10));
          }
          var g = v[3], T = g === 24 ? 0 : g, M = v[0] + "-" + v[1] + "-" + v[2] + " " + T + ":" + v[4] + ":" + v[5] + ":000", x = +h;
          return (l.utc(M).valueOf() - (x -= x % 1e3)) / 6e4;
        }, c = u.prototype;
        c.tz = function(h, E) {
          if (h === void 0 && (h = o), !this.isValid()) return this;
          var S, v = this.utcOffset(), d = this.toDate(), y = d.toLocaleString("en-US", { timeZone: h }), p = m(+d, h);
          if (!Number(p)) S = this.utcOffset(0, E);
          else if (S = l(y, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(p, true), E) {
            var b = S.utcOffset();
            S = S.add(v - b, "minute");
          }
          return S.$x.$timezone = h, S;
        }, c.offsetName = function(h) {
          var E = this.$x.$timezone || l.tz.guess(), S = s(this.valueOf(), E, { timeZoneName: h }).find((function(v) {
            return v.type.toLowerCase() === "timezonename";
          }));
          return S && S.value;
        };
        var C = c.startOf;
        c.startOf = function(h, E) {
          if (!this.$x || !this.$x.$timezone) return C.call(this, h, E);
          var S = l(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return C.call(S, h, E).tz(this.$x.$timezone, true);
        }, l.tz = function(h, E, S) {
          var v = S && E, d = S || E || o, y = m(+l(), d);
          if (typeof h != "string") return l(h).tz(d);
          var p = l.utc(h, v).valueOf();
          if (Number.isNaN(p)) {
            var b = l(NaN);
            return b.$x.$timezone = d, b;
          }
          var k = (function(x, N, B) {
            var F = x - 60 * N * 1e3, A = m(F, B);
            if (N === A) return [F, N];
            var O = m(F -= 60 * (A - N) * 1e3, B);
            return A === O ? [F, A] : [x - 60 * Math.min(A, O) * 1e3, Math.max(A, O)];
          })(p, y, d), g = k[0], T = k[1], M = l(g).utcOffset(T);
          return M.$x.$timezone = d, M;
        }, l.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, l.tz.setDefault = function(h) {
          o = h;
        };
      };
    }));
  })(Cn)), Cn.exports;
}
var uo = lo();
const so = nt(uo);
var En = function() {
  return En = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, En.apply(this, arguments);
}, co = function(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var t = n.call(e), a, u = [], l;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = t.next()).done; ) u.push(a.value);
  } catch (o) {
    l = { error: o };
  } finally {
    try {
      a && !a.done && (n = t.return) && n.call(t);
    } finally {
      if (l) throw l.error;
    }
  }
  return u;
}, fo = function(e, r, n) {
  if (n || arguments.length === 2) for (var t = 0, a = r.length, u; t < a; t++) (u || !(t in r)) && (u || (u = Array.prototype.slice.call(r, 0, t)), u[t] = r[t]);
  return e.concat(u || Array.prototype.slice.call(r));
}, pt = $e()._isAMomentObject;
pt && ($e.extend = function() {
});
var vo = function(e, r, n) {
  n = function(u, l) {
    if (Re(u)) return u.clone();
    var o = typeof l == "object" ? l : {};
    return o.date = u, o.args = arguments, new r(o);
  };
  var t = r.prototype, a = t.$utils;
  t.$utils = function() {
    var u = a();
    return u.i = Re, u;
  }, n.isDayjs = Re;
};
$e.extend(vo);
$e.extend(Ya);
$e.extend(ja);
$e.extend(za);
$e.extend(Ua);
$e.extend(Ga);
$e.extend(to);
$e.extend(oo);
$e.extend(so);
var me = $e, Dr = ["YYYY-MM-DD HH:mm:ss", "YYYY-MM-DD"];
function Nr(e, r) {
  var n = (e.day() - r + 7) % 7, t = e.clone().startOf("day").subtract(n, "day");
  return t.valueOf();
}
function mo(e, r, n) {
  return Nr(e, n) === Nr(r, n);
}
var ye = { add: function(e, r, n) {
  return pt ? e.clone().add(r, n) : e.add(r, n);
}, subtract: function(e, r, n) {
  return pt ? e.clone().subtract(r, n) : e.subtract(r, n);
}, startOf: function(e, r) {
  return pt ? e.clone().startOf(r) : e.startOf(r);
}, endOf: function(e, r) {
  return pt ? e.clone().endOf(r) : e.endOf(r);
}, set: function(e, r, n) {
  return pt ? e.clone().set(r, n) : e.set(r, n);
}, isSameWeek: function(e, r, n, t) {
  return pt ? mo(e, r, n) : e.locale(En(En({}, me.Ls[t]), { weekStart: n })).isSame(r, "week");
} }, ho = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, _r = {}, po = function(e, r) {
  var n = e + "|short", t = _r[n];
  return t || (t = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: e, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }), _r[n] = t), t;
}, go = function(e, r) {
  var n = new Date(e), t = po(r);
  return t.formatToParts(n);
}, er = function(e, r) {
  for (var n = go(e, r), t = [], a = 0; a < n.length; a += 1) {
    var u = n[a], l = u.type, o = u.value, s = ho[l];
    s >= 0 && (t[s] = parseInt(o, 10));
  }
  var m = t[3], c = m === 24 ? 0 : m, C = Date.UTC(t[0], t[1] - 1, t[2], c, t[4], t[5], 0), h = +e, E = h % 1e3;
  return h -= E, (C - h) / (60 * 1e3);
}, yo = function(e, r, n) {
  var t = e - r * 60 * 1e3, a = er(t, n);
  if (r === a) return [t, r];
  t -= (a - r) * 60 * 1e3;
  var u = er(t, n);
  return a === u ? [t, a] : [e - Math.min(a, u) * 60 * 1e3, Math.max(a, u)];
};
function Mr(e, r) {
  var n = er(e, r);
  return yo(e, n, r)[1];
}
function Se(e, r) {
  return Dt(e) && !r ? me() : Mt(me(), e, r);
}
function Mt(e, r, n, t) {
  if (!e || Dt(r) && !n) return e;
  var a = -e.toDate().getTimezoneOffset(), u = Dt(r) ? n ? Mr(e.valueOf(), n) : a : r, l = Math.abs(u) <= 16 ? u * 60 : u, o = t ? a - l : l - a, s = n ? Mr(me(e).valueOf() + o * 60 * 1e3, n) : u, m = o - (u - s), c = t || !Dt(r) ? o : m;
  return me(me(e).valueOf() + c * 60 * 1e3);
}
function Ke(e, r, n) {
  return Mt(e, r, n, true);
}
function bo(e) {
  var r = ["H", "h", "m", "s", "A", "a"], n = "";
  return r.some(function(t) {
    return e.indexOf(t) !== -1 ? (n = "" + t + e.split(" " + t)[1], true) : false;
  }), n || "HH:mm:ss";
}
function we(e, r, n, t) {
  if (e) {
    var a = function(l, o) {
      if (Re(l)) return me(l.valueOf());
      if (typeof l == "string") {
        var s = me(l, se(r) ? r[o] : r);
        if (s.isValid()) return s;
        for (var m = 0; m < Dr.length; m += 1) {
          var c = me(l, Dr[m]);
          if (c.isValid()) return c;
        }
        return s;
      }
      return me(l);
    }, u = function(l, o) {
      return n !== void 0 || t ? Mt(a(l, o), n, t) : a(l, o);
    };
    return se(e) ? e.map(function(l, o) {
      return l ? u(l, o) : void 0;
    }) : u(e, 0);
  }
}
function lt(e, r) {
  var n = e.year(), t = e.month(), a = e.date();
  if (r) {
    var u = r;
    return u = ye.set(u, "year", n), u = ye.set(u, "month", t), u = ye.set(u, "date", a), u;
  }
  return e;
}
function Zt(e, r) {
  if (!e || !e[0] || !e[1]) return e;
  var n = fo([], co(e), false);
  return n.sort(function(t, a) {
    return t.valueOf() - a.valueOf();
  }), r && e.length === 2 && (n[0] = n[0].set("hour", e[0].get("hour")).set("minute", e[0].get("minute")).set("second", e[0].get("second")), n[1] = n[1].set("hour", e[1].get("hour")).set("minute", e[1].get("minute")).set("second", e[1].get("second"))), n;
}
function wo(e, r) {
  return r === void 0 && e === void 0 ? false : r && !e || !r && e || me(r).valueOf() !== me(e).valueOf();
}
function So(e, r) {
  return r === void 0 && e === void 0 ? false : r && !e || !r && e || se(r) && se(e) && me(r[0]).valueOf() !== me(e[0]).valueOf() || me(r[1]).valueOf() !== me(e[1]).valueOf();
}
function Po(e, r, n) {
  return typeof e == "string" && me(e, r).format(se(r) ? r[n] : r) === e;
}
function He(e, r, n) {
  var t = String(e), a = t.length < r ? "" + n + t : t;
  return a.length < r ? He(a, r, n) : a;
}
function Tr(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function Lr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Tr(Object(n), true).forEach(function(t) {
      $n(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tr(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Co(e, r) {
  var n = w.useContext(Rn), t = n.prefixCls, a = t === void 0 ? "arco" : t, u = e.spin, l = e.className, o = Lr(Lr({ "aria-hidden": true, focusable: false, ref: r }, e), {}, { className: "".concat(l ? l + " " : "").concat(a, "-icon ").concat(a, "-icon-double-left") });
  return u && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", Vn({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "M36.857 9.9 22.715 24.042l14.142 14.142M25.544 9.9 11.402 24.042l14.142 14.142" }));
}
var kn = i.forwardRef(Co);
kn.defaultProps = { isIcon: true };
kn.displayName = "IconDoubleLeft";
function Ir(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function Yr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ir(Object(n), true).forEach(function(t) {
      $n(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ir(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Oo(e, r) {
  var n = w.useContext(Rn), t = n.prefixCls, a = t === void 0 ? "arco" : t, u = e.spin, l = e.className, o = Yr(Yr({ "aria-hidden": true, focusable: false, ref: r }, e), {}, { className: "".concat(l ? l + " " : "").concat(a, "-icon ").concat(a, "-icon-double-right") });
  return u && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", Vn({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "m11.143 38.1 14.142-14.142L11.143 9.816M22.456 38.1l14.142-14.142L22.456 9.816" }));
}
var Dn = i.forwardRef(Oo);
Dn.defaultProps = { isIcon: true };
Dn.displayName = "IconDoubleRight";
var Nn = function() {
  return Nn = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Nn.apply(this, arguments);
}, xo = function(e, r) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
  return n;
}, Eo = function(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var t = n.call(e), a, u = [], l;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = t.next()).done; ) u.push(a.value);
  } catch (o) {
    l = { error: o };
  } finally {
    try {
      a && !a.done && (n = t.return) && n.call(t);
    } finally {
      if (l) throw l.error;
    }
  }
  return u;
};
function ko(e, r) {
  var n, t, a = e.style, u = e.className, l = e.prefixCls, o = e.allowClear, s = e.status, m = e.error, c = e.disabled, C = e.placeholder, h = e.format, E = e.size, S = e.onClear, v = e.editable, d = e.value, y = e.inputValue, p = e.onPressEnter, b = e.suffixIcon, k = e.prefix, g = e.onChange, T = e.popupVisible, M = e.isPlaceholder, x = e.inputProps, N = xo(e, ["style", "className", "prefixCls", "allowClear", "status", "error", "disabled", "placeholder", "format", "size", "onClear", "editable", "value", "inputValue", "onPressEnter", "suffixIcon", "prefix", "onChange", "popupVisible", "isPlaceholder", "inputProps"]), B = w.useContext(Fe), F = B.getPrefixCls, A = B.size, O = B.locale, Z = B.rtl, _ = w.useRef(null), H = Eo(w.useState(false), 2), oe = H[0], X = H[1], $ = E || A, R = w.useRef(null);
  w.useImperativeHandle(r, function() {
    return { focus: function() {
      _.current && _.current.focus && _.current.focus();
    }, blur: function() {
      _.current && _.current.blur && _.current.blur();
    }, input: _.current, getRootDOMNode: function() {
      return R.current;
    } };
  });
  function Q(U) {
    var ie;
    (ie = x == null ? void 0 : x.onKeyDown) === null || ie === void 0 || ie.call(x, U);
    var q = U.keyCode || U.which;
    q === qr.code && (p == null || p());
  }
  function ue(U) {
    var ie;
    (ie = x == null ? void 0 : x.onChange) === null || ie === void 0 || ie.call(x, U), g == null || g(U);
  }
  var K = "";
  y !== void 0 ? K = y : d && !se(d) && (K = typeof h == "function" ? h(d) : d.locale(O.dayjsLocale).format(h));
  var te = v ? {} : { readOnly: true }, ne = l || F("picker"), be = s || (m ? "error" : void 0), ve = oe || T, re = Ce(ne, ne + "-size-" + $, (n = {}, n[ne + "-focused"] = ve, n[ne + "-disabled"] = c, n[ne + "-has-prefix"] = k, n[ne + "-" + be] = be, n[ne + "-rtl"] = Z, n), u);
  return i.createElement("div", Nn({ style: a, className: re, ref: R }, ur(N, ["onChange", "onPressEnter"])), k && i.createElement("div", { className: ne + "-prefix" }, k), i.createElement("div", { className: Ce(ne + "-input", (t = {}, t[ne + "-input-placeholder"] = M, t)) }, i.createElement("input", Nn({ ref: _ }, x, { disabled: c, placeholder: C, className: ne + "-start-time", value: K, onKeyDown: Q, onChange: ue }, te, { onFocus: function(U) {
    var ie;
    X(true), (ie = x == null ? void 0 : x.onFocus) === null || ie === void 0 || ie.call(x, U);
  }, onBlur: function(U) {
    var ie;
    X(false), (ie = x == null ? void 0 : x.onBlur) === null || ie === void 0 || ie.call(x, U);
  } }))), i.createElement("div", { className: ne + "-suffix" }, o && K && i.createElement(Wr, { prefix: ne, onClick: S, className: ne + "-clear-icon" }, i.createElement(lr, null)), i.createElement("span", { className: ne + "-suffix-icon" }, b)));
}
const Do = w.forwardRef(ko);
function Rr(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function Vr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Rr(Object(n), true).forEach(function(t) {
      $n(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rr(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function No(e, r) {
  var n = w.useContext(Rn), t = n.prefixCls, a = t === void 0 ? "arco" : t, u = e.spin, l = e.className, o = Vr(Vr({ "aria-hidden": true, focusable: false, ref: r }, e), {}, { className: "".concat(l ? l + " " : "").concat(a, "-icon ").concat(a, "-icon-calendar") });
  return u && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", Vn({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "M7 22h34M14 5v8m20-8v8M8 41h32a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1Z" }));
}
var An = i.forwardRef(No);
An.defaultProps = { isIcon: true };
An.displayName = "IconCalendar";
function $r(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function jr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? $r(Object(n), true).forEach(function(t) {
      $n(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function _o(e, r) {
  var n = w.useContext(Rn), t = n.prefixCls, a = t === void 0 ? "arco" : t, u = e.spin, l = e.className, o = jr(jr({ "aria-hidden": true, focusable: false, ref: r }, e), {}, { className: "".concat(l ? l + " " : "").concat(a, "-icon ").concat(a, "-icon-calendar-clock") });
  return u && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", Vn({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "M7 22h34V10a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h18M34 5v8M14 5v8" }), i.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M36 44a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1.5-9.75V29h-3v8.25H42v-3h-4.5Z", clipRule: "evenodd" }));
}
var Hn = i.forwardRef(_o);
Hn.defaultProps = { isIcon: true };
Hn.displayName = "IconCalendarClock";
function _n(e) {
  return e && se(e) ? Re(e[0]) && Re(e[1]) ? 2 : !Re(e[0]) && !Re(e[1]) ? 0 : 1 : 0;
}
function ut(e, r, n) {
  if (typeof r != "function") return false;
  var t = function(s, m, c) {
    for (var C = m; C <= c; ) {
      var h = void 0;
      switch (s) {
        case "date": {
          if (h = ye.set(e, "date", C), !r(h)) return false;
          break;
        }
        case "month": {
          if (h = ye.set(e, "month", C), !ut(h, r, "month")) return false;
          break;
        }
        case "year": {
          if (h = ye.set(e, "year", C), !ut(h, r, "year")) return false;
          break;
        }
      }
      C += 1;
    }
    return true;
  };
  switch (n) {
    case "date":
    case "week":
      return r(e);
    case "month": {
      var a = 1, u = e.endOf("month").get("date");
      return t("date", a, u);
    }
    case "quarter": {
      var l = Math.floor(e.get("month") / 3) * 3, o = l + 2;
      return t("month", l, o);
    }
    case "year":
      return t("month", 0, 11);
    default:
      return false;
  }
}
function Zr(e) {
  var r, n;
  return ((n = (r = $e.Ls) === null || r === void 0 ? void 0 : r[e]) === null || n === void 0 ? void 0 : n.weekStart) || 0;
}
function tt(e, r) {
  return e && e.locale(r);
}
function Je(e, r) {
  return se(e) ? e[r] : e;
}
function Mo(e, r) {
  var n = e.prefixCls, t = e.shortcuts, a = t === void 0 ? [] : t, u = e.onSelectNow, l = e.nowText, o = e.showNowBtn, s = e.showTime, m = e.onMouseEnterShortcut, c = e.onMouseLeaveShortcut, C = e.nowDisabled, h = e.disabledDate, E = e.mode, S = E === void 0 ? "date" : E;
  function v(g) {
    m && m(g);
  }
  function d(g) {
    c && c(g);
  }
  function y(g, T) {
    var M = e.onSelectShortcut;
    p(g) || M && M(g, T);
  }
  function p(g) {
    var T = typeof g.value == "function" && g.value();
    return Re(T) ? ut(T, h, S) : se(T) ? T.some(function(M) {
      return Re(M) && ut(M, h, S);
    }) : false;
  }
  var b = se(a) && a.length > 0, k = o && s && !b;
  return i.createElement("div", { ref: r, className: n + "-shortcuts" }, k && i.createElement(Nt, { size: "mini", disabled: C, onClick: u }, l), b && a.map(function(g, T) {
    var M = p(g);
    return i.createElement(Nt, { key: T, size: "mini", disabled: M, onMouseEnter: function() {
      return v(g);
    }, onMouseLeave: function() {
      return d(g);
    }, onClick: function(x) {
      return y(g, x);
    } }, g.text);
  }));
}
const sr = w.forwardRef(Mo);
var tr = function() {
  return tr = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, tr.apply(this, arguments);
}, To = function(e, r) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
  return n;
}, Lo = { hoverable: true };
function Io(e, r) {
  var n, t = w.useContext(Fe), a = t.getPrefixCls, u = t.componentConfig, l = t.rtl, o = Yn(e, Lo, u == null ? void 0 : u.Link), s = o.className, m = o.style, c = o.children, C = o.icon, h = o.status, E = o.disabled, S = o.hoverable, v = To(o, ["className", "style", "children", "icon", "status", "disabled", "hoverable"]), d = Sa({ onKeyDown: o.onKeyDown }), y = a("link"), p = "href" in o ? "a" : "span", b = function(k) {
    E ? (k.preventDefault(), k.stopPropagation()) : o.onClick && o.onClick(k);
  };
  return i.createElement(p, tr({ className: Ce(y, (n = {}, n[y + "-disabled"] = E, n[y + "-is-" + h] = h, n[y + "-with-icon"] = C, n[y + "-hoverless"] = !S, n[y + "-rtl"] = l, n), s), ref: r, tabIndex: E ? -1 : void 0 }, v, { style: m, onClick: b }, d({ onPressEnter: b })), C ? i.createElement("span", { className: y + "-icon" }, C === true ? i.createElement(Pa, null) : C) : null, c);
}
var Qr = w.forwardRef(Io);
Qr.displayName = "Link";
function Gr(e) {
  var r = e.showTime, n = e.prefixCls, t = e.DATEPICKER_LOCALE, a = e.disabled, u = e.onClickConfirmBtn, l = e.onClickSelectTimeBtn, o = e.isTimePanel, s = e.onSelectNow, m = e.showNowBtn, c = e.shortcuts, C = e.onMouseEnterShortcut, h = e.onMouseLeaveShortcut, E = e.onSelectShortcut, S = e.extra, v = e.mode, d = e.shortcutsPlacementLeft, y = e.disableConfirm, p = e.nowDisabled, b = e.disabledDate, k = se(c) && c.length > 0, g = m && r && !k, T = g || k && !d;
  return i.createElement("div", { className: n + "-footer" }, S && i.createElement("div", { className: n + "-footer-extra-wrapper" }, S), !r && m && v === "date" && i.createElement("div", { className: n + "-footer-now-wrapper" }, i.createElement(Qr, { disabled: p, onClick: s }, t.today)), T || r ? i.createElement("div", { className: n + "-footer-btn-wrapper" }, d ? i.createElement("div", null) : i.createElement(sr, { shortcuts: c, prefixCls: n, onSelectNow: s, nowText: t.now, showNowBtn: m, onMouseEnterShortcut: C, onMouseLeaveShortcut: h, onSelectShortcut: E, showTime: r, nowDisabled: p, disabledDate: b, mode: v }), r && i.createElement(i.Fragment, null, i.createElement(Nt, { type: "text", size: "mini", onClick: l, className: o ? n + "-btn-select-date" : n + "-btn-select-time" }, o ? t.selectDate : t.selectTime), !y && i.createElement(Nt, { className: n + "-btn-confirm", type: "primary", size: "mini", disabled: a, onClick: u }, t.ok))) : null);
}
const yt = w.createContext({});
var et = function() {
  return et = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, et.apply(this, arguments);
}, Xe = function(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var t = n.call(e), a, u = [], l;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = t.next()).done; ) u.push(a.value);
  } catch (o) {
    l = { error: o };
  } finally {
    try {
      a && !a.done && (n = t.return) && n.call(t);
    } finally {
      if (l) throw l.error;
    }
  }
  return u;
};
function Yo(e) {
  var r = e.format, n = e.picker, t = e.showTime, a, u = e.mode || n.props.pickerType;
  switch (u) {
    case "date":
      a = t ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
      break;
    case "month":
      a = "YYYY-MM";
      break;
    case "year":
      a = "YYYY";
      break;
    case "week":
      a = "gggg-wo";
      break;
    case "quarter":
      a = "YYYY-[Q]Q";
      break;
    default:
      a = "YYYY-MM-DD";
  }
  return r && (a = r), a;
}
var Ar = { allowClear: true, unmountOnExit: true, position: "bl", editable: true, showNowBtn: true }, Ro = { bottom: 4 }, Vo = function(e, r) {
  var n = w.useContext(Fe), t = n.getPrefixCls, a = n.locale, u = n.size, l = n.componentConfig, o = n.rtl;
  o && (Ar.position = "br");
  var s = Yn(e, Ar, l == null ? void 0 : l.DatePicker), m = s.allowClear, c = s.className, C = s.style, h = s.placeholder, E = s.getPopupContainer, S = s.disabled, v = s.position, d = s.error, y = s.status, p = s.unmountOnExit, b = s.editable, k = s.triggerProps, g = s.picker, T = s.shortcuts, M = s.onSelect, x = s.onVisibleChange, N = s.value, B = s.onChange, F = s.icons, A = s.disabledDate, O = s.showTime, Z = s.showNowBtn, _ = s.onSelectShortcut, H = s.extra, oe = s.shortcutsPlacementLeft, X = s.onOk, $ = s.defaultPickerValue, R = s.pickerValue, Q = s.onPickerValueChange, ue = s.triggerElement, K = s.utcOffset, te = s.timezone, ne = s.panelRender, be = s.inputProps, ve = t("picker"), re = a.DatePicker, U = Dt(s.dayStartOfWeek) ? Zr(a.dayjsLocale) : s.dayStartOfWeek, ie = s.mode || g.props.pickerType, q = w.useRef(null), ce = w.useRef(null), fe = w.useRef(null);
  w.useImperativeHandle(r, function() {
    return { focus: function() {
      q.current && q.current.focus && q.current.focus();
    }, blur: function() {
      q.current && q.current.blur && q.current.blur();
    } };
  }, []);
  var V = Yo(s), I = V;
  typeof I == "function" && (I = O ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD");
  function ae() {
    var D;
    return s.value ? D = we(s.value, I, K, te) : D = we(s.defaultValue, I, K, te), D;
  }
  var Y = Xe(w.useState(ae()), 2), de = Y[0], W = Y[1], pe = Xe(w.useState(s.popupVisible), 2), Ne = pe[0], L = pe[1], ee = Xe(w.useState(false), 2), G = ee[0], J = ee[1], he = Xe(w.useState(), 2), Oe = he[0], Ve = he[1], Te = "popupVisible" in s ? s.popupVisible : Ne, qe = w.useRef(Te), rt = "value" in s ? we(N, I, K, te) : de, Lt = rt || we($, I) || Se(), st = Xe(w.useState(), 2), tn = st[0], at = st[1], bt = Xe(w.useState(), 2), wt = bt[0], Le = bt[1], Ze = Xe(w.useState(), 2), nn = Ze[0], It = Ze[1], ot = Xe(w.useState(Lt), 2), rn = ot[0], Ue = ot[1], ct = we(R, I) || rn, je = nn || wt || rt, an = Xe(w.useState(ie), 2), St = an[0], Yt = an[1], Rt = _t(O) && we(O.defaultValue, O.format || "HH:mm:ss") || Se(K, te), ft = je || Rt, Vt = Se(K, te), dt = ut(Vt, A, "date");
  function on() {
    var D, z;
    q.current && ((z = (D = q.current).focus) === null || z === void 0 || z.call(D));
  }
  function ze() {
    q.current && q.current.blur && q.current.blur();
  }
  var Be = Jt(K), Ae = Jt(te);
  Xn(function() {
    if (de && (Be !== K || te !== Ae)) {
      var D = Ke(de, Be, Ae);
      W(Mt(D, K, te));
    }
  }, [K, Be, te, Ae]), w.useEffect(function() {
    at(void 0), Ve(void 0);
    var D = qe.current;
    qe.current = Te, Te ? (Ue(Lt), oe && (fe.current.style.maxHeight = ce.current.clientHeight + "px")) : (Le(void 0), It(void 0), setTimeout(function() {
      var z;
      J(false), Yt(ie), D && document.activeElement === ((z = q.current) === null || z === void 0 ? void 0 : z.input) && ze();
    }, 100));
  }, [Te]);
  function Pe(D) {
    D ? Ie(D, function() {
      on();
    }) : Ie(false);
  }
  function ke(D) {
    Q && Q(D.format(I), D);
  }
  function Ie(D, z) {
    L(D), x && x(D), z == null || z();
  }
  function $t(D) {
    D.stopPropagation(), W(void 0), Le(void 0), Qe(void 0), s.onClear && s.onClear();
  }
  function ln() {
    var D = tt(je, a.dayjsLocale);
    un(), X && X(D && D.format(I), D);
  }
  function un() {
    W(je), Qe(je), Ie(false);
  }
  function Pt(D) {
    var z = je || Se(K, te), ge = lt(z, D);
    W(ge), Qe(ge), Ie(false);
  }
  function jt(D, z, ge) {
    if (at(void 0), Ve(void 0), O) {
      var _e = ge ? z : lt(z, ft);
      Le(_e), Ue(_e);
      var Ye = tt(Ke(_e, K, te), a.dayjsLocale);
      M && M(Ye.format(I), Ye);
    } else {
      var Ye = tt(Ke(z, K, te).locale(a.dayjsLocale), a.dayjsLocale);
      M && M(Ye ? Ye.format(I) : void 0, Ye), W(z), Qe(z), Ie(false);
    }
  }
  function Qe(D) {
    if (wo(D, rt)) {
      var z = tt(Ke(D, K, te), a.dayjsLocale);
      B && B(z ? z.format(I) : void 0, z);
    }
  }
  function At(D, z) {
    var ge = je || Se(K, te), _e = lt(ge, z);
    Le(_e);
    var Ye = tt(Ke(_e, K, te), a.dayjsLocale);
    M && M(Ye.format(I), Ye);
  }
  function Bn(D) {
    return typeof D == "string" && me(D, I).format(I) === D && (typeof A == "function" ? !A(me(D, I)) : true);
  }
  function Ht(D) {
    var z = D.target.value;
    if (at(z), Te || Ie(true), Bn(z)) {
      var ge = we(z, I);
      Le(ge), Ue(ge), at(void 0);
    }
  }
  function sn() {
    je ? (un(), ze()) : Te && Ie(false);
  }
  function We(D, z, ge) {
    ge === void 0 && (ge = 1);
    var _e;
    D === "prev" && (_e = ye.subtract(ct, ge, z)), D === "next" && (_e = ye.add(ct, ge, z)), ke(_e), Ue(_e);
  }
  function vt(D) {
    if (D === void 0 && (D = ie), D === "date" || D === "week") return { onPrev: function() {
      return We("prev", "month");
    }, onNext: function() {
      return We("next", "month");
    }, onSuperPrev: function() {
      return We("prev", "year");
    }, onSuperNext: function() {
      return We("next", "year");
    } };
    if (D === "month" || D === "quarter") return { onSuperPrev: function() {
      return We("prev", "year");
    }, onSuperNext: function() {
      return We("next", "year");
    } };
    if (D === "year") return { onSuperPrev: function() {
      return We("prev", "year", 10);
    }, onSuperNext: function() {
      return We("next", "year", 10);
    } };
  }
  function mt() {
    if (!dt) {
      var D = tt(Vt, a.dayjsLocale);
      ke(D), jt(D.format(I), D, true);
    }
  }
  function Ft(D, z) {
    if (!z) {
      var ge = O ? lt(D, ft) : D;
      Ve(typeof V == "function" ? V(D) : ge.locale(a.dayjsLocale).format(I));
    }
  }
  function zt() {
    Ve(void 0);
  }
  function Wn(D) {
    if (typeof D.value == "function" && Re(D.value())) {
      var z = we(D.value(), I, K, te);
      Ue(z), ke(z), It(z);
    }
  }
  function qn() {
    var D = wt || rt || Se(K, te);
    It(void 0), Ue(D), ke(D);
  }
  function ht(D) {
    if (_ && _(D), typeof D.value == "function" && Re(D.value())) {
      var z = we(D.value(), I, K, te);
      if (ut(z, A, ie)) return;
      W(z), Qe(z), Ie(false);
    }
  }
  function Bt() {
    J(!G);
  }
  function Ge(D) {
    var z, ge = Ce(ve + "-container", (z = {}, z[ve + "-panel-only"] = D, z[ve + "-container-shortcuts-placement-left"] = se(T) && oe, z[ve + "-container-rtl"] = o, z), D ? c : ""), _e = { prefixCls: ve, showTime: O, shortcuts: T, onSelectNow: mt, showNowBtn: Z, onMouseEnterShortcut: Wn, onMouseLeaveShortcut: qn, onSelectShortcut: ht, nowDisabled: dt, disabledDate: A, mode: ie }, Ye = O && St === "date" || H || se(T) && T.length && !oe || !O && St === "date" && Z, fn = !!(s.timepickerProps && s.timepickerProps.disableConfirm || _t(O) && O.disableConfirm), qt = i.createElement(i.Fragment, null, i.cloneElement(g, et(et(et({}, ur(s, ["style"])), vt()), { getHeaderOperations: vt, onSelect: jt, onTimePickerSelect: At, onConfirmValue: Pt, onSelectNow: mt, popupVisible: Te, format: I, value: je, pageShowDate: ct, localeName: a.dayjsLocale, setPageShowDate: function(Ut) {
      Ue(Ut), ke(Ut);
    }, timeValue: ft, isTimePanel: G, panelMode: St, setPanelMode: Yt, onMouseEnterCell: Ft, onMouseLeaveCell: zt })), !!Ye && i.createElement(Gr, et({}, _e, { DATEPICKER_LOCALE: re, disabled: !je, onClickConfirmBtn: ln, extra: H, mode: St, nowDisabled: dt, disabledDate: A, shortcutsPlacementLeft: oe, onClickSelectTimeBtn: Bt, isTimePanel: G, disableConfirm: fn }))), dn = oe ? i.createElement(i.Fragment, null, i.createElement(sr, et({ ref: fe }, _e)), i.createElement("div", { ref: ce, className: ve + "-panel-wrapper" }, qt)) : qt, Un = typeof ne == "function" ? ne(dn) : dn;
    return i.createElement("div", { className: ge, onClick: function() {
      q.current && q.current.focus && q.current.focus();
    }, style: D ? C : {} }, Un);
  }
  var cn = s.size || u, Ct = F && F.inputSuffix === null ? null : F && F.inputSuffix || (O ? i.createElement(Hn, null) : i.createElement(An, null)), Wt = { style: C, className: c, popupVisible: Te, format: V, disabled: S, error: d, status: y, size: cn, onPressEnter: sn, onClear: $t, prefix: s.prefix, suffixIcon: Ct, editable: b && typeof V != "function", allowClear: m };
  return i.createElement(yt.Provider, { value: { utcOffset: K, timezone: te, weekStart: U } }, ue === null ? Ge(true) : i.createElement(Ur, et({ popup: Ge, trigger: "click", clickToClose: false, position: v, disabled: S, popupAlign: Ro, getPopupContainer: E, onVisibleChange: Pe, popupVisible: Te, classNames: "slideDynamicOrigin", unmountOnExit: p }, k), ue || i.createElement(Do, et({}, Kr(s), Wt, { ref: q, placeholder: h || re.placeholder[ie], popupVisible: Te, value: wt || rt, inputValue: Oe || tn, prefixCls: ve, onChange: Ht, isPlaceholder: !!Oe, inputProps: be }))));
}, $o = w.forwardRef(Vo), Qt = function() {
  return Qt = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Qt.apply(this, arguments);
}, jo = function(e, r) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
  return n;
}, Zn = function(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var t = n.call(e), a, u = [], l;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = t.next()).done; ) u.push(a.value);
  } catch (o) {
    l = { error: o };
  } finally {
    try {
      a && !a.done && (n = t.return) && n.call(t);
    } finally {
      if (l) throw l.error;
    }
  }
  return u;
}, Hr = function(e, r, n) {
  if (n || arguments.length === 2) for (var t = 0, a = r.length, u; t < a; t++) (u || !(t in r)) && (u || (u = Array.prototype.slice.call(r, 0, t)), u[t] = r[t]);
  return e.concat(u || Array.prototype.slice.call(r));
};
function Ao(e, r) {
  var n, t = e.allowClear, a = e.error, u = e.status, l = e.style, o = e.className, s = e.disabled, m = e.placeholder, c = m === void 0 ? [] : m, C = e.value, h = C === void 0 ? [] : C, E = e.popupVisible, S = e.format, v = e.size, d = e.onClear, y = e.editable, p = e.inputValue, b = e.onPressEnter, k = e.onPressTab, g = e.onChange, T = e.separator, M = e.suffixIcon, x = e.changeFocusedInputIndex, N = e.focusedInputIndex, B = e.isPlaceholder, F = e.prefix, A = e.inputProps, O = A === void 0 ? [] : A, Z = e.onBlur, _ = jo(e, ["allowClear", "error", "status", "style", "className", "disabled", "placeholder", "value", "popupVisible", "format", "size", "onClear", "editable", "inputValue", "onPressEnter", "onPressTab", "onChange", "separator", "suffixIcon", "changeFocusedInputIndex", "focusedInputIndex", "isPlaceholder", "prefix", "inputProps", "onBlur"]), H = w.useContext(Fe), oe = H.getPrefixCls, X = H.size, $ = H.locale, R = H.rtl, Q = w.useRef(null), ue = w.useRef(null), K = w.useRef(null), te = Zn(w.useState([false, false]), 2), ne = te[0], be = te[1], ve = se(s) ? s[0] : s, re = se(s) ? s[1] : s;
  w.useImperativeHandle(r, function() {
    return { focus: function(L) {
      var ee = typeof L == "number" ? L : N, G = ee === 0 ? Q : ue;
      (N === 0 && !ve || N === 1 && !re) && G.current && G.current.focus && G.current.focus();
    }, blur: function() {
      N === 0 && Q.current && Q.current.blur && Q.current.blur(), N === 1 && ue.current && ue.current.blur && ue.current.blur();
    }, getRootDOMNode: function() {
      return K.current;
    } };
  });
  function U(L, ee) {
    var G, J;
    (J = (G = O == null ? void 0 : O[ee]) === null || G === void 0 ? void 0 : G.onClick) === null || J === void 0 || J.call(G, L), N !== ee && x(ee);
  }
  function ie(L, ee) {
    var G, J, he = L.keyCode || L.which;
    (J = (G = O == null ? void 0 : O[ee]) === null || G === void 0 ? void 0 : G.onKeyDown) === null || J === void 0 || J.call(G, L), he === qr.code && (b == null || b()), he === Ca.code && k && k(L);
  }
  function q(L, ee) {
    var G, J;
    L.stopPropagation(), (J = (G = O == null ? void 0 : O[ee]) === null || G === void 0 ? void 0 : G.onChange) === null || J === void 0 || J.call(G, L), g && g(L);
  }
  function ce(L, ee) {
    var G, J;
    be(function(he) {
      return he[ee] = false, Hr([], Zn(he), false);
    }), (J = (G = O == null ? void 0 : O[ee]) === null || G === void 0 ? void 0 : G.onBlur) === null || J === void 0 || J.call(G, L), Z == null || Z(L);
  }
  function fe(L, ee) {
    var G, J;
    (ee === 0 || ee === 1) && (be(function(he) {
      return he[ee] = true, Hr([], Zn(he), false);
    }), N !== ee && x(ee, true)), (J = (G = O == null ? void 0 : O[ee]) === null || G === void 0 ? void 0 : G.onFocus) === null || J === void 0 || J.call(G, L);
  }
  var V = oe("picker"), I = v || X, ae = ne[0] || ne[1] || !!E, Y = u || (a ? "error" : void 0), de = Ce(V, V + "-range", V + "-size-" + I, (n = {}, n[V + "-focused"] = ae, n[V + "-disabled"] = ve && re, n[V + "-" + Y] = Y, n[V + "-rtl"] = R, n[V + "-has-prefix"] = F, n), o), W = function(L) {
    var ee = h[L] ? h[L].locale($.dayjsLocale).format(se(S) ? S[L] : S) : "";
    return p && L === N ? p : ee;
  }, pe = y ? {} : { readOnly: true };
  function Ne(L) {
    var ee;
    return Ce(V + "-input", (ee = {}, ee[V + "-input-active"] = N === L, ee[V + "-input-placeholder"] = B && N === L, ee));
  }
  return i.createElement("div", Qt({ style: l, ref: K, className: de }, ur(_, ["onChange", "onPressEnter"])), F && i.createElement("div", { className: V + "-prefix" }, F), i.createElement("div", { className: Ne(0) }, i.createElement("input", Qt({ ref: Q }, O[0], { disabled: ve, placeholder: c[0], value: W(0), onChange: function(L) {
    return q(L, 0);
  }, onKeyDown: function(L) {
    return ie(L, 0);
  }, onClick: function(L) {
    return U(L, 0);
  }, onBlur: function(L) {
    return ce(L, 0);
  }, onFocus: function(L) {
    return fe(L, 0);
  } }, pe))), i.createElement("span", { className: V + "-separator" }, T || "-"), i.createElement("div", { className: Ne(1) }, i.createElement("input", Qt({ ref: ue }, O[1], { disabled: re, placeholder: c[1], value: W(1), onChange: function(L) {
    return q(L, 1);
  }, onKeyDown: function(L) {
    return ie(L, 1);
  }, onClick: function(L) {
    return U(L, 1);
  }, onBlur: function(L) {
    return ce(L, 1);
  }, onFocus: function(L) {
    return fe(L, 1);
  } }, pe))), i.createElement("div", { className: V + "-suffix" }, t && h.length === 2 && i.createElement(Wr, { prefix: V, onClick: d, className: V + "-clear-icon" }, i.createElement(lr, null)), i.createElement("span", { className: V + "-suffix-icon" }, M)));
}
const Ho = w.forwardRef(Ao);
function On(e) {
  var r = ["H", "h", "m", "s", "a", "A"], n = [], t = false;
  return r.forEach(function(a) {
    e.indexOf(a) !== -1 && (n.push(a), (a === "a" || a === "A") && (t = true));
  }), { list: n, use12Hours: t };
}
var Qn = /* @__PURE__ */ new Map();
function Fr(e, r, n) {
  Qn.get(e) && cancelAnimationFrame(Qn.get(e)), n <= 0 && (e.scrollTop = r), Qn.set(e, requestAnimationFrame(function() {
    var t = new Oa({ from: { scrollTop: e.scrollTop }, to: { scrollTop: r }, duration: n, onUpdate: function(a) {
      e.scrollTop = a.scrollTop;
    }, easing: "quartInOut" });
    t.start();
  }));
}
function hn(e) {
  var r = e.prefixCls, n = e.list, t = e.value, a = e.onHandleSelect, u = e.unit, l = e.popupVisible, o = e.scrollSticky, s = w.useRef(/* @__PURE__ */ new Map()), m = w.useRef(), c = w.useRef(), C = w.useRef(0), h = Jt(l), E = w.useRef(m.current && m.current.scrollTop);
  w.useEffect(function() {
    var v = s.current.get(t);
    v && l && h && (Fr(m.current, v.offsetTop, 150), E.current = v.offsetTop);
  }, [t]), w.useEffect(function() {
    if (l && l !== h) {
      var v = s.current.get(t);
      v && (Fr(m.current, v.offsetTop, 0), E.current = v.offsetTop);
    }
  }, [l, h]), w.useEffect(function() {
    n.length <= 1 || (C.current = (c.current.clientHeight - m.current.clientHeight) / (n.length - 1));
  }, [n.length]);
  var S = w.useCallback(xa(function() {
    var v = m.current.scrollTop - E.current > 0 ? Math.ceil : Math.floor, d = v(m.current.scrollTop / C.current);
    d !== t && n[d] && !n[d].disabled && a(n[d].value, u);
  }, 100), [a]);
  return i.createElement("div", { className: Ce(r + "-list"), ref: m, onWheel: o ? S : void 0 }, i.createElement("ul", { ref: c }, n.map(function(v) {
    var d;
    return i.createElement("li", { key: v.value, className: Ce(r + "-cell", (d = {}, d[r + "-cell-disabled"] = v.disabled, d[r + "-cell-selected"] = v.selected, d)), onClick: function() {
      return !v.disabled && a(v.value, u);
    }, ref: function(y) {
      s.current.set(v.value, y);
    } }, i.createElement("div", { className: r + "-cell-inner" }, v.label));
  })));
}
const Fo = w.createContext({});
var kt = function() {
  return kt = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, kt.apply(this, arguments);
}, zo = ["am", "pm"];
function Bo(e) {
  var r;
  return (r = e.use12Hours) !== null && r !== void 0 ? r : On(e.format).use12Hours;
}
function Wo(e) {
  var r = e.format, n = r === void 0 ? "HH:mm:ss" : r, t = e.onSelect, a = e.popupVisible, u = e.step, l = u === void 0 ? {} : u, o = e.disabledHours, s = e.disabledMinutes, m = e.disabledSeconds, c = e.hideDisabledOptions, C = e.onConfirmValue, h = e.isRangePicker, E = e.confirmBtnDisabled, S = e.valueShow, v = e.setValueShow, d = e.extra, y = e.disableConfirm, p = e.hideFooter, b = e.showNowBtn, k = b === void 0 ? true : b, g = e.scrollSticky, T = w.useContext(Fe), M = T.getPrefixCls, x = T.locale, N = M("timepicker"), B = w.useContext(Fo), F = B.utcOffset, A = B.timezone, O = we(S, n), Z = O && O.hour() >= 12 ? "pm" : "am", _ = Bo(e), H = w.useCallback(function(I) {
    var ae = l.hour || 1, Y = l.minute || 1, de = l.second || 1, W = [];
    if (I === "hour") {
      for (var pe = 0; pe < (_ ? 12 : 24); pe += ae) W.push(pe);
      _ && (W[0] = 12);
    }
    if (I === "minute") for (var pe = 0; pe < 60; pe += Y) W.push(pe);
    if (I === "second") for (var pe = 0; pe < 60; pe += de) W.push(pe);
    return W;
  }, [l.hour, l.minute, l.second, _]), oe = H("hour"), X = H("minute"), $ = H("second"), R = O && O.hour();
  R = _ && R > 12 ? R - 12 : R, _ && R === 0 && Z === "am" && (R += 12);
  var Q = O && O.minute(), ue = O && O.second(), K = w.useCallback(function(I) {
    switch (I) {
      case "hour":
        return He(typeof o == "function" ? oe.find(function(ae) {
          return o().indexOf(ae) === -1;
        }) || 0 : oe[0], 2, "0");
      case "minute":
        return He(typeof s == "function" ? X.find(function(ae) {
          return s(R).indexOf(ae) === -1;
        }) || 0 : X[0], 2, "0");
      case "second":
        return He(typeof m == "function" ? $.find(function(ae) {
          return m(R, Q).indexOf(ae) === -1;
        }) || 0 : $[0], 2, "0");
      default:
        return "00";
    }
  }, [oe, X, $, o, s, m, R, Q]);
  function te(I, ae) {
    var Y, de, W, pe = On(n).list.indexOf("A") !== -1, Ne = O || me(K("hour") + ":" + K("minute") + ":" + K("second"), "HH:mm:ss"), L = Ne.hour(), ee = Ne.minute(), G = Ne.second(), J = pe ? Z.toUpperCase() : Z, he = "HH:mm:ss", Oe;
    _ && (pe ? he = he + " A" : he = he + " a"), _ && (L = L > 12 ? L - 12 : L), ae === "hour" && (typeof s == "function" && s(I).includes(ee) && (ee = (Y = X.find(function(Ve) {
      return s(I).indexOf(Ve) === -1;
    })) !== null && Y !== void 0 ? Y : 0), typeof m == "function" && m(I, ee).includes(G) && (G = (de = $.find(function(Ve) {
      return m(I, ee).indexOf(Ve) === -1;
    })) !== null && de !== void 0 ? de : 0), Oe = me(I + ":" + ee + ":" + G + " " + J, he, "en")), ae === "minute" && (typeof m == "function" && m(L, I).includes(G) && (G = (W = $.find(function(Ve) {
      return m(L, I).indexOf(Ve) === -1;
    })) !== null && W !== void 0 ? W : 0), Oe = me(L + ":" + I + ":" + G + " " + J, he, "en")), ae === "second" && (Oe = me(L + ":" + ee + ":" + I + " " + J, he, "en")), ae === "ampm" && (Oe = me(L + ":" + ee + ":" + G + " " + (pe ? I.toUpperCase() : I), he, "en")), Oe = me(Oe, he).locale(me.locale()), t && t(Ke(Oe, F, A).format(n), Ke(Oe, F, A)), h || (v && v(Oe), y && C(Oe));
  }
  function ne() {
    O && C(O);
  }
  function be() {
    var I = Se(), ae = Se(F, A);
    t && t(I.format(n), I), y ? C(ae) : v && v(ae);
  }
  var ve = { prefixCls: N, onHandleSelect: te, popupVisible: a, scrollSticky: g };
  function re() {
    var I = c && typeof o == "function" ? oe.filter(function(Y) {
      return o().indexOf(Y) === -1;
    }) : oe, ae = I.map(function(Y) {
      return { label: He("" + Y, 2, "0"), value: Y, selected: R !== void 0 && R === Y, disabled: typeof o == "function" && o().indexOf(Y) !== -1 };
    });
    return i.createElement(hn, kt({}, ve, { list: ae, value: R, unit: "hour" }));
  }
  function U() {
    var I = c && typeof s == "function" ? X.filter(function(Y) {
      return s(R).indexOf(Y) === -1;
    }) : X, ae = I.map(function(Y) {
      return { label: He("" + Y, 2, "0"), value: Y, selected: R !== void 0 && Q === Y, disabled: typeof s == "function" && s(R).indexOf(Y) !== -1 };
    });
    return i.createElement(hn, kt({}, ve, { list: ae, value: Q, unit: "minute" }));
  }
  function ie() {
    var I = c && typeof m == "function" ? $.filter(function(Y) {
      return m(R, Q).indexOf(Y) === -1;
    }) : $, ae = I.map(function(Y) {
      return { label: He("" + Y, 2, "0"), value: Y, selected: R !== void 0 && ue === Y, disabled: typeof m == "function" && m(R, Q).indexOf(Y) !== -1 };
    });
    return i.createElement(hn, kt({}, ve, { list: ae, value: ue, unit: "second" }));
  }
  function q() {
    var I = On(n).list.indexOf("A") !== -1, ae = zo.map(function(Y) {
      return { label: I ? Y.toUpperCase() : Y, value: Y, selected: Z === Y };
    });
    return i.createElement(hn, kt({}, ve, { list: ae, value: Z, unit: "ampm" }));
  }
  var ce = On(n).list, fe = Ce(N), V = p || y && h || !h && y && !k;
  return i.createElement(i.Fragment, null, i.createElement("div", { className: fe }, (ce.indexOf("H") !== -1 || ce.indexOf("h") !== -1) && re(), ce.indexOf("m") !== -1 && U(), ce.indexOf("s") !== -1 && ie(), _ && q()), d && i.createElement("div", { className: N + "-footer-extra-wrapper" }, d), !V && i.createElement("div", { className: N + "-footer-btn-wrapper" }, !h && k ? i.createElement(Nt, { size: "mini", onClick: be }, x.TimePicker.now) : i.createElement("div", null), !y && i.createElement(Nt, { type: "primary", size: "mini", onClick: ne, disabled: E || !O }, x.TimePicker.ok)));
}
function Fn(e) {
  var r = e.prefixCls, n = e.title, t = e.onPrev, a = e.onNext, u = e.onSuperPrev, l = e.onSuperNext, o = e.mode, s = e.value, m = e.onChangePanel, c = e.icons, C = c === void 0 ? {} : c, h = e.rtl, E = e.DATEPICKER_LOCALE, S = typeof t == "function", v = typeof u == "function", d = typeof a == "function", y = typeof l == "function", p = function(x) {
    var N;
    return Ce(r + "-header-icon", (N = {}, N[r + "-header-icon-hidden"] = !x, N));
  };
  function b() {
    var x = (E == null ? void 0 : E.Calendar) || {}, N = x.monthBeforeYear, B = x.monthFormat, F = x.yearFormat;
    if (n) return n;
    if (o === "date" || o === "week") {
      var A = i.createElement("span", { key: "year-node", className: r + "-header-label", onClick: function() {
        return m("year");
      } }, s.format(F || "YYYY")), O = i.createElement("span", { key: "month-node", className: r + "-header-label", onClick: function() {
        return m("month");
      } }, s.format(B || "MM"));
      return N ? [O, A] : [A, O];
    }
    if (o === "month" || o === "quarter") return i.createElement("span", { className: r + "-header-label", onClick: function() {
      return m("year");
    } }, s.format(F || "YYYY"));
  }
  var k = C.prevDouble === null, g = C.prev === null, T = C.next === null, M = C.nextDouble === null;
  return i.createElement("div", { className: r + "-header" }, !k && i.createElement("div", { className: p(v), onClick: u }, v && (k ? null : C.prevDouble || (h ? i.createElement(Dn, null) : i.createElement(kn, null)))), !g && i.createElement("div", { className: p(S), onClick: t }, S && (g ? null : C.prev || (h ? i.createElement(yr, null) : i.createElement(br, null)))), i.createElement("div", { className: r + "-header-value" }, b()), !T && i.createElement("div", { className: p(d), onClick: a }, d && (T ? null : C.next || (h ? i.createElement(br, null) : i.createElement(yr, null)))), !M && i.createElement("div", { className: p(y), onClick: l }, y && (M ? null : C.nextDouble || (h ? i.createElement(kn, null) : i.createElement(Dn, null)))));
}
function qo(e) {
  var r = e.prefixCls, n = e.weekStart, t = e.isWeek, a = e.CALENDAR_LOCALE, u = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  u = u.slice(n).concat(u.slice(0, n)), t && u.unshift("");
  var l = a.week.short;
  return i.createElement("div", { className: r + "-week-list" }, u.map(function(o) {
    return i.createElement("div", { className: r + "-week-list-item", key: o }, o && l[o]);
  }));
}
function xt(e, r) {
  if (e && se(e)) return e[r];
}
function Uo(e) {
  var r = e.prefixCls, n = e.value, t = e.rangeValues, a = e.valueShowHover, u = e.isSameTime, l = e.mode, o = e.hideNotInViewDates, s = _n(t), m = _n(a), c = s !== 2 && m === 2 ? Zt(a) : t, C = s === 2 ? Zt(a) : [];
  function h(E, S, v) {
    if (S && v) return u(E, S) || u(E, v) || E.isBetween(S, v, null);
  }
  return function(S, v, d, y) {
    var p, b = xt(c, 0), k = xt(c, 1), g = xt(C, 0), T = xt(C, 1), M = !S.isPrev && !S.isNext, x = n && u(S.time, n), N = u(S.time, Se(d, y)), B = l !== "week" ? M : true;
    l === "week" && (N = Se(d, y).isSame(S.time, "date")), l === "quarter" && (N = Se(d, y).isSame(S.time, "quarter"));
    function F(R) {
      return B && !v && R && u(S.time, R);
    }
    var A = F(b), O = F(k), Z = F(xt(t, 0)), _ = F(xt(t, 1)), H = F(g), oe = F(T), X = false;
    A ? X = g && b && g.isBefore(b) && h(b, g, T) : O && (X = T && k && T.isAfter(k) && h(k, g, T));
    var $ = false;
    return H ? $ = g && b && b.isBefore(g) && h(g, b, k) : oe && ($ = T && k && k.isAfter(T) && h(T, b, k)), Ce(r + "-cell", (p = {}, p[r + "-cell-disabled"] = v, p[r + "-cell-hidden"] = o && !M, p[r + "-cell-in-view"] = M, p[r + "-cell-today"] = N && M, p[r + "-cell-selected"] = x || Z || _, p[r + "-cell-range-start"] = A, p[r + "-cell-range-end"] = O, p[r + "-cell-in-range"] = B && !v && h(S.time, b, k), p[r + "-cell-hover-range-start"] = H, p[r + "-cell-hover-range-end"] = oe, p[r + "-cell-hover-in-range"] = B && !v && h(S.time, g, T), p[r + "-cell-range-edge-in-hover-range"] = X, p[r + "-cell-hover-range-edge-in-range"] = $, p));
  };
}
var Mn = function() {
  return Mn = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Mn.apply(this, arguments);
};
function zn(e) {
  var r = e.prefixCls, n = e.isWeek, t = e.disabledDate, a = e.onSelectDate, u = e.dateRender, l = e.onMouseEnterCell, o = e.onMouseLeaveCell, s = e.CALENDAR_LOCALE, m = e.rows, c = e.showWeekList, C = e.isSameTime, h = e.format, E = e.mode, S = w.useContext(yt), v = S.utcOffset, d = S.timezone, y = S.weekStart, p = Uo(Mn(Mn({}, e), { isSameTime: C }));
  function b(k) {
    return k.map(function(g, T) {
      if (g.time) {
        var M = ut(g.time, t, E), x = function() {
          return !M && a(g.time.format(h), g.time);
        };
        return i.createElement("div", { key: T, className: p(g, M, v, d), onMouseEnter: function() {
          return l && l(g.time, M);
        }, onMouseLeave: function() {
          return o && o(g.time, M);
        }, onClick: x }, u ? i.cloneElement(u(g.time)) : i.createElement("div", { className: r + "-date" }, i.createElement("div", { className: r + "-date-value" }, g.name)));
      }
      if ("weekOfYear" in g) return i.createElement("div", { key: T, className: Ce(r + "-cell", r + "-cell-week") }, i.createElement("div", { className: r + "-date" }, i.createElement("div", { className: r + "-date-value" }, g.weekOfYear)));
    });
  }
  return i.createElement(i.Fragment, null, c && i.createElement(qo, { prefixCls: r, weekStart: y, isWeek: n, CALENDAR_LOCALE: s }), i.createElement("div", { className: r + "-body" }, m.map(function(k, g) {
    var T;
    return i.createElement("div", { key: g, className: Ce(r + "-row", (T = {}, T[r + "-row-week"] = n, T)) }, b(k));
  })));
}
var Tn = function() {
  return Tn = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Tn.apply(this, arguments);
}, Ko = function(e, r) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
  return n;
};
function Tt(e) {
  var r = e.pageShowDate, n = e.style, t = e.onMouseEnterCell, a = e.onMouseLeaveCell, u = e.dateRender, l = e.disabledDate, o = e.value, s = e.locale, m = e.isRangePicker, c = e.onSelect, C = e.rangeValues, h = e.onSuperPrev, E = e.onSuperNext, S = e.format, v = e.icons, d = Ko(e, ["pageShowDate", "style", "onMouseEnterCell", "onMouseLeaveCell", "dateRender", "disabledDate", "value", "locale", "isRangePicker", "onSelect", "rangeValues", "onSuperPrev", "onSuperNext", "format", "icons"]), y = w.useContext(Fe), p = y.locale, b = y.getPrefixCls, k = y.rtl, g = jn(p.DatePicker, s), T = g.Calendar, M = w.useContext(yt), x = M.utcOffset, N = M.timezone, B = b("panel-year"), F = Ce(B), A = m ? { rangeValues: C } : { value: o }, O = r ? r.year() : Se(x, N).year(), Z = Math.floor(O / 10) * 10 - 1, _ = xn(3).map(function($) {
    return "";
  }), H = xn(4).map(function($) {
    return _;
  }).map(function($, R) {
    return $.map(function(Q, ue) {
      return { name: Z + R * 3 + ue, time: me("" + (Z + R * 3 + ue), "YYYY").endOf("year"), isPrev: R === 0 && ue === 0, isNext: R === 3 && ue === 2 };
    });
  });
  function oe() {
    return i.createElement(zn, Tn({}, d, A, { prefixCls: b("picker"), rows: H, onSelectDate: c, isSameTime: function($, R) {
      return $.isSame(R, "year");
    }, onMouseEnterCell: t, onMouseLeaveCell: a, dateRender: u, disabledDate: l, CALENDAR_LOCALE: T, mode: "year", format: S }));
  }
  var X = { onSuperPrev: h, onSuperNext: E };
  return i.createElement("div", { className: F, style: n }, i.createElement(Fn, Tn({ prefixCls: b("picker"), icons: v, title: H[0][1].name + " - " + H[3][2].name, rtl: k }, X)), oe());
}
var Gt = function() {
  return Gt = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Gt.apply(this, arguments);
}, Zo = function(e, r) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
  return n;
};
function Ln(e) {
  var r = e.pageShowDate, n = e.style, t = e.onMouseEnterCell, a = e.onMouseLeaveCell, u = e.dateRender, l = e.disabledDate, o = e.value, s = e.locale, m = e.isRangePicker, c = e.onSelect, C = e.rangeValues, h = e.onSuperPrev, E = e.onSuperNext, S = e.format, v = e.getHeaderOperations, d = e.setPageShowDate, y = e.icons, p = e.panelMode, b = e.setPanelMode, k = Zo(e, ["pageShowDate", "style", "onMouseEnterCell", "onMouseLeaveCell", "dateRender", "disabledDate", "value", "locale", "isRangePicker", "onSelect", "rangeValues", "onSuperPrev", "onSuperNext", "format", "getHeaderOperations", "setPageShowDate", "icons", "panelMode", "setPanelMode"]), g = w.useContext(Fe), T = g.locale, M = g.getPrefixCls, x = g.rtl, N = jn(T.DatePicker, s), B = N.Calendar, F = M("panel-month"), A = Ce(F), O = m ? { rangeValues: C } : { value: o }, Z = r.year(), _ = w.useMemo(function() {
    for (var $ = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(function(ue, K) {
      return { name: B.month.short[ue], time: me(Z + "-" + He(K + 1, 2, "0"), "YYYY-MM").endOf("month") };
    }), R = Array(4), Q = 0; Q < 4; Q++) R[Q] = $.slice(Q * 3, 3 * (Q + 1));
    return R;
  }, [Z, B]);
  function H() {
    return i.createElement(zn, Gt({}, k, O, { prefixCls: M("picker"), rows: _, onSelectDate: c, isSameTime: function($, R) {
      return $.isSame(R, "month");
    }, onMouseEnterCell: t, onMouseLeaveCell: a, dateRender: u, disabledDate: l, CALENDAR_LOCALE: B, mode: "month", format: S }));
  }
  var oe = { onSuperPrev: h, onSuperNext: E };
  function X($) {
    b($);
  }
  return p === "year" ? i.createElement(Tt, Gt({}, v(p), { pageShowDate: r, onSelect: function($, R) {
    b("month"), d(R);
  }, disabledDate: l })) : i.createElement("div", { className: A, style: n }, i.createElement(Fn, Gt({}, oe, { DATEPICKER_LOCALE: N, icons: y, prefixCls: M("picker"), value: r, mode: p, onChangePanel: X, rtl: x })), H());
}
var Me = function() {
  return Me = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Me.apply(this, arguments);
}, Qo = function(e, r) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
  return n;
}, Go = function(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var t = n.call(e), a, u = [], l;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = t.next()).done; ) u.push(a.value);
  } catch (o) {
    l = { error: o };
  } finally {
    try {
      a && !a.done && (n = t.return) && n.call(t);
    } finally {
      if (l) throw l.error;
    }
  }
  return u;
}, Xo = function(e, r, n) {
  if (n || arguments.length === 2) for (var t = 0, a = r.length, u; t < a; t++) (u || !(t in r)) && (u || (u = Array.prototype.slice.call(r, 0, t)), u[t] = r[t]);
  return e.concat(u || Array.prototype.slice.call(r));
}, zr = 42, nr = function(e) {
  return { year: e.year(), month: e.month() + 1, day: e.day(), name: e.date(), time: e };
}, Jo = function(e) {
  return Me(Me({}, nr(ye.startOf(e, "month"))), { days: e.daysInMonth() });
};
function ei(e, r) {
  var n = e.dayStartOfWeek, t = e.isWeek, a = Jo(r), u = xn(zr).map(function() {
    return {};
  }), l = a.day - n < 0 ? 7 + (a.day - n) : a.day - n;
  u[l] = Me({}, a);
  for (var o = 0; o < l; o++) u[l - o - 1] = Me(Me({}, nr(ye.subtract(a.time, o + 1, "day"))), { isPrev: true });
  for (var o = 0; o < zr - l - 1; o++) u[l + o + 1] = Me(Me({}, nr(ye.add(a.time, o + 1, "day"))), { isNext: o >= a.days - 1 });
  for (var s = xn(6).map(function() {
    return [];
  }), o = 0; o < 6; o++) if (s[o] = u.slice(o * 7, 7 * (o + 1)), t) {
    var m = s[o][0].time, c = Xo([], Go(s[o]), false);
    s[o].unshift({ weekRows: c, weekOfYear: m.week() });
  }
  return s;
}
function In(e) {
  var r = e.isWeek, n = e.popupVisible, t = e.format, a = e.pageShowDate, u = e.showTime, l = e.style, o = e.timepickerProps, s = e.onMouseEnterCell, m = e.onMouseLeaveCell, c = e.dateRender, C = e.disabledDate, h = e.disabledTime, E = e.value, S = e.rangeValues, v = e.locale, d = e.isRangePicker, y = e.onSelect, p = e.onTimePickerSelect, b = e.onPrev, k = e.onNext, g = e.onSuperPrev, T = e.onSuperNext, M = e.isSameTime, x = e.index, N = e.getHeaderOperations, B = e.setPageShowDate, F = e.timeValue, A = e.hideNotInViewDates, O = e.icons, Z = e.isTimePanel, _ = e.panelMode, H = e.setPanelMode, oe = Qo(e, ["isWeek", "popupVisible", "format", "pageShowDate", "showTime", "style", "timepickerProps", "onMouseEnterCell", "onMouseLeaveCell", "dateRender", "disabledDate", "disabledTime", "value", "rangeValues", "locale", "isRangePicker", "onSelect", "onTimePickerSelect", "onPrev", "onNext", "onSuperPrev", "onSuperNext", "isSameTime", "index", "getHeaderOperations", "setPageShowDate", "timeValue", "hideNotInViewDates", "icons", "isTimePanel", "panelMode", "setPanelMode"]), X = w.useContext(Fe), $ = X.locale, R = X.getPrefixCls, Q = X.rtl, ue = w.useContext(yt), K = ue.utcOffset, te = ue.timezone, ne = ue.weekStart, be = jn($.DatePicker, v), ve = R(r ? "panel-week" : "panel-date"), re = Ce(ve), U = d ? { rangeValues: S } : { value: E }, ie = _t(u) && u.format || bo(t), q = $.dayjsLocale, ce = w.useMemo(function() {
    return ei(Me(Me({}, e), { dayStartOfWeek: ne }), a.locale(q));
  }, [a.toString(), ne, q]), fe;
  d ? fe = typeof h == "function" ? h(S[x], x === 0 ? "start" : "end") : {} : fe = typeof h == "function" ? h(we(E, t)) : {};
  function V() {
    return i.createElement(zn, Me({}, oe, U, { showWeekList: true, isWeek: r, prefixCls: R("picker"), rows: ce, isSameTime: M || (function(de, W) {
      return de.isSame(W, "day");
    }), onSelectDate: y, onMouseEnterCell: s, onMouseLeaveCell: m, dateRender: c, disabledDate: C, CALENDAR_LOCALE: be.Calendar, mode: r ? "week" : "date", format: t, hideNotInViewDates: A }));
  }
  function I() {
    var de = _t(u) ? u : {};
    return i.createElement("div", { className: ve + "-timepicker" }, i.createElement("header", { className: ve + "-timepicker-title" }, be.selectTime), i.createElement(Wo, Me({}, o, de, fe, { hideFooter: true, format: ie, valueShow: F.format(ie), onSelect: p, onConfirmValue: e.onConfirmValue, popupVisible: n, utcOffset: K, timezone: te })));
  }
  var ae = { onPrev: b, onSuperPrev: g, onNext: k, onSuperNext: T, DATEPICKER_LOCALE: be };
  function Y(de) {
    H(de);
  }
  return _ === "year" ? i.createElement(Tt, Me({}, N(_), { pageShowDate: a, onSelect: function(de, W) {
    H("month"), B(W);
  }, disabledDate: C })) : _ === "month" ? i.createElement(Ln, Me({}, N(_), { setPageShowDate: B, pageShowDate: a, panelMode: _, getHeaderOperations: N, onSelect: function(de, W) {
    H("date"), B(W);
  }, disabledDate: C, setPanelMode: H })) : i.createElement("div", { className: re, style: l }, u && Z ? I() : i.createElement("div", { className: ve + "-inner" }, i.createElement(Fn, Me({}, ae, { icons: O, prefixCls: R("picker"), value: a, mode: _, onChangePanel: Y, rtl: Q })), V()));
}
var rr = function() {
  return rr = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, rr.apply(this, arguments);
}, ti = function(e, r) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
  return n;
};
function ar(e) {
  var r = e.value, n = e.isRangePicker, t = e.rangeValues, a = e.onPrev, u = e.onNext, l = e.onSuperPrev, o = e.onSuperNext, s = e.localeName, m = ti(e, ["value", "isRangePicker", "rangeValues", "onPrev", "onNext", "onSuperPrev", "onSuperNext", "localeName"]), c = w.useContext(yt).weekStart, C = n ? { rangeValues: t } : { value: r }, h = { onPrev: a, onNext: u, onSuperPrev: l, onSuperNext: o };
  function E(S, v) {
    return ye.isSameWeek(S, v, c, s);
  }
  return i.createElement(In, rr({}, m, C, h, { isWeek: true, isSameTime: E, isRangePicker: n }));
}
var Xt = function() {
  return Xt = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Xt.apply(this, arguments);
}, ni = function(e, r) {
  var n = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, t = Object.getOwnPropertySymbols(e); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (n[t[a]] = e[t[a]]);
  return n;
};
function or(e) {
  var r = e.pageShowDate, n = e.style, t = e.onMouseEnterCell, a = e.onMouseLeaveCell, u = e.dateRender, l = e.disabledDate, o = e.value, s = e.locale, m = e.isRangePicker, c = e.onSelect, C = e.rangeValues, h = e.onSuperPrev, E = e.onSuperNext, S = e.format, v = e.getHeaderOperations, d = e.setPageShowDate, y = e.icons, p = e.panelMode, b = e.setPanelMode, k = ni(e, ["pageShowDate", "style", "onMouseEnterCell", "onMouseLeaveCell", "dateRender", "disabledDate", "value", "locale", "isRangePicker", "onSelect", "rangeValues", "onSuperPrev", "onSuperNext", "format", "getHeaderOperations", "setPageShowDate", "icons", "panelMode", "setPanelMode"]), g = w.useContext(Fe), T = g.locale, M = g.getPrefixCls, x = g.rtl, N = jn(T.DatePicker, s), B = N.Calendar, F = M("panel-quarter"), A = Ce(F), O = m ? { rangeValues: C } : { value: o }, Z = r.year(), _ = [[1, 2, 3, 4].map(function($) {
    return { name: "Q" + $, time: me(Z + "-" + He(($ - 1) * 3 + 1, 2, "0") + "-01") };
  })];
  function H() {
    return i.createElement(zn, Xt({}, k, O, { prefixCls: M("picker"), rows: _, onSelectDate: c, isSameTime: function($, R) {
      return $.isSame(R, "month");
    }, onMouseEnterCell: t, onMouseLeaveCell: a, dateRender: u, disabledDate: l, CALENDAR_LOCALE: B, mode: "quarter", format: S }));
  }
  var oe = { onSuperPrev: h, onSuperNext: E };
  function X($) {
    b($);
  }
  return p === "year" ? i.createElement(Tt, Xt({}, v(p), { pageShowDate: r, onSelect: function($, R) {
    b("quarter"), d(R);
  }, disabledDate: l })) : i.createElement("div", { className: A, style: n }, i.createElement(Fn, Xt({}, oe, { icons: y, prefixCls: M("picker"), value: r, mode: p, onChangePanel: X, DATEPICKER_LOCALE: N, rtl: x })), i.createElement("div", { className: F + "-wrapper" }, H()));
}
var Ee = function() {
  return Ee = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ee.apply(this, arguments);
};
function Gn(e, r) {
  for (var n = [], t = e; t < r; t++) n.push(t);
  return n;
}
function ri(e) {
  var r = e.mode, n = r === void 0 ? "date" : r, t = e.showTime, a = e.disabledDate, u = e.disabledTime, l = e.format, o = e.dateRender, s = e.value, m = e.timeValues, c = e.icons, C = e.locale, h = e.pageShowDates, E = e.onMouseEnterCell, S = e.onMouseLeaveCell, v = e.onTimePickerSelect, d = e.onSelectPanel, y = e.onPrev, p = e.onSuperPrev, b = e.onNext, k = e.onSuperNext, g = e.localeName, T = e.popupVisible, M = e.timepickerProps, x = e.getHeaderOperations, N = e.setRangePageShowDates, B = e.disabledTimePickerIndex, F = e.hideNotInViewDates, A = e.isTimePanel, O = e.valueShowHover, Z = e.panelModes, _ = e.setPanelModes, H = w.useContext(Fe).getPrefixCls, oe = H("picker-range"), X = w.useContext(yt), $ = X.utcOffset, R = X.timezone, Q = h[0] || Se($, R), ue = h[1] || Se($, R), K = we(s, l), te = { isRangePicker: true, rangeValues: K, onMouseEnterCell: E, onMouseLeaveCell: S, locale: C, disabledDate: a, onSelect: d, dateRender: o, getHeaderOperations: x, icons: c, valueShowHover: O }, ne = { pageShowDate: Q, panelMode: Z[0], setPanelMode: function(q) {
    return _([q, Z[1]]);
  }, format: Je(l, 0) }, be = { pageShowDate: ue, panelMode: Z[1], setPanelMode: function(q) {
    return _([Z[0], q]);
  }, format: Je(l, 1) };
  function ve() {
    var q = { onPrev: y, onSuperPrev: p }, ce = { onNext: b, onSuperNext: k }, fe = Ee(Ee({}, te), { localeName: g, popupVisible: T, timepickerProps: M, getHeaderOperations: x, hideNotInViewDates: F, isTimePanel: A });
    if (n === "week") return i.createElement(i.Fragment, null, i.createElement(ar, Ee({ setPageShowDate: function(Y) {
      return N([Y, Y], 0);
    } }, q, fe, ne)), i.createElement(ar, Ee({ setPageShowDate: function(Y) {
      return N([ye.subtract(Y, 1, "month"), Y], 1);
    } }, ce, fe, be)));
    var V = { disabledTime: u, showTime: t }, I = {};
    if (typeof B == "number" && (I.disabledTime = function() {
      return { disabledHours: function() {
        return Gn(0, 24);
      }, disabledMinutes: function() {
        return Gn(0, 60);
      }, disabledSeconds: function() {
        return Gn(0, 60);
      } };
    }, _t(t))) {
      var ae = Ee(Ee({}, t), { defaultValue: void 0 });
      I.showTime = Ee(Ee({}, ae), { hideDisabledOptions: false });
    }
    return i.createElement(i.Fragment, null, i.createElement(In, Ee({}, q, fe, V, B === 0 ? I : {}, { onTimePickerSelect: function(Y, de) {
      v(0, Y, de);
    }, index: 0, setPageShowDate: function(Y) {
      return N([Y, Y], 0);
    }, timeValue: m[0] }, ne)), i.createElement(In, Ee({}, ce, fe, V, B === 1 ? I : {}, { onTimePickerSelect: function(Y, de) {
      v(1, Y, de);
    }, index: 1, setPageShowDate: function(Y) {
      return N([ye.subtract(Y, 1, "month"), Y], 1);
    }, timeValue: m[1] }, be)));
  }
  function re() {
    var q = { onSuperPrev: p }, ce = { onSuperNext: k }, fe = te;
    return i.createElement(i.Fragment, null, i.createElement(Ln, Ee({ setPageShowDate: function(V) {
      return N([V, V], 0);
    } }, q, fe, ne)), i.createElement(Ln, Ee({ setPageShowDate: function(V) {
      return N([ye.subtract(V, 1, "year"), V], 1);
    } }, ce, fe, be)));
  }
  function U() {
    var q = { onSuperPrev: p }, ce = { onSuperNext: k }, fe = te;
    return i.createElement(i.Fragment, null, i.createElement(Tt, Ee({}, q, fe, { pageShowDate: Q })), i.createElement(Tt, Ee({}, ce, fe, { pageShowDate: ue })));
  }
  function ie() {
    var q = { onSuperPrev: p }, ce = { onSuperNext: k }, fe = te;
    return i.createElement(i.Fragment, null, i.createElement(or, Ee({ setPageShowDate: function(V) {
      return N([V, V], 0);
    } }, q, fe, ne)), i.createElement(or, Ee({ setPageShowDate: function(V) {
      return N([ye.subtract(V, 1, "year"), V], 1);
    } }, ce, fe, be)));
  }
  return i.createElement("div", { className: oe }, i.createElement("div", { className: oe + "-wrapper" }, (n === "date" || n === "week") && ve(), n === "month" && re(), n === "year" && U(), n === "quarter" && ie()));
}
var gt = function() {
  return gt = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, gt.apply(this, arguments);
}, De = function(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var t = n.call(e), a, u = [], l;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = t.next()).done; ) u.push(a.value);
  } catch (o) {
    l = { error: o };
  } finally {
    try {
      a && !a.done && (n = t.return) && n.call(t);
    } finally {
      if (l) throw l.error;
    }
  }
  return u;
}, Et = function(e, r, n) {
  if (n || arguments.length === 2) for (var t = 0, a = r.length, u; t < a; t++) (u || !(t in r)) && (u || (u = Array.prototype.slice.call(r, 0, t)), u[t] = r[t]);
  return e.concat(u || Array.prototype.slice.call(r));
};
function ai(e) {
  var r = e.format, n = e.showTime, t = e.mode, a;
  switch (t) {
    case "date":
      a = n ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
      break;
    case "month":
      a = "YYYY-MM";
      break;
    case "year":
      a = "YYYY";
      break;
    case "week":
      a = "YYYY-wo";
      break;
    case "quarter":
      a = "YYYY-[Q]Q";
      break;
    default:
      a = "YYYY-MM-DD";
  }
  return r && (a = r), a;
}
var Br = { allowClear: true, unmountOnExit: true, position: "bl", editable: true, mode: "date" }, oi = { bottom: 4 }, ii = function(e, r) {
  var n, t, a = w.useContext(Fe), u = a.getPrefixCls, l = a.locale, o = a.size, s = a.componentConfig, m = a.rtl;
  m && (Br.position = "br");
  var c = Yn(e, Br, s == null ? void 0 : s.DatePicker), C = c.allowClear, h = c.className, E = c.style, S = c.placeholder, v = c.getPopupContainer, d = c.disabled, y = c.position, p = c.error, b = c.status, k = c.unmountOnExit, g = c.editable, T = c.triggerProps, M = c.shortcuts, x = c.onSelect, N = c.onVisibleChange, B = c.value, F = c.onChange, A = c.icons, O = c.disabledDate, Z = c.disabledTime, _ = c.mode, H = c.showTime, oe = c.onSelectShortcut, X = c.extra, $ = c.shortcutsPlacementLeft, R = c.onOk, Q = c.defaultPickerValue, ue = c.pickerValue, K = c.panelRender, te = c.onPickerValueChange, ne = c.triggerElement, be = c.clearRangeOnReselect, ve = c.separator, re = c.utcOffset, U = c.timezone, ie = c.inputProps, q = c.fixedTime, ce = u("picker-range"), fe = Dt(c.dayStartOfWeek) ? Zr(l.dayjsLocale) : c.dayStartOfWeek, V = w.useRef(null), I = w.useRef(null), ae = w.useRef(null), Y = w.useRef(null), de = w.useRef(null);
  w.useImperativeHandle(r, function() {
    return { focus: function(f) {
      V.current && V.current.focus && V.current.focus(f);
    }, blur: function() {
      V.current && V.current.blur && V.current.blur();
    } };
  }, []);
  var W = ai(c);
  function pe() {
    if (se(d)) {
      if (d[0] && !d[1]) return 1;
      if (d[1] && !d[0]) return 0;
    }
  }
  var Ne = pe(), L = typeof Ne == "number", ee = L ? 1 ^ Ne : void 0, G = De(w.useState(L ? Ne : 0), 2), J = G[0], he = G[1];
  w.useEffect(function() {
    L && he(Ne);
  }, [d]);
  var Oe = 1 ^ J, Ve = De(w.useState(), 2), Te = Ve[0], qe = Ve[1], rt = De(w.useState(), 2), Lt = rt[0], st = rt[1], tn = De(w.useState(Bn()), 2), at = tn[0], bt = tn[1], wt = De(w.useState(), 2), Le = wt[0], Ze = wt[1], nn = De(w.useState(), 2), It = nn[0], ot = nn[1], rn = De(w.useState(), 2), Ue = rn[0], ct = rn[1], je = De(w.useState(c.popupVisible), 2), an = je[0], St = je[1], Yt = De(w.useState([_, _]), 2), Rt = Yt[0], ft = Yt[1], Vt = De(w.useState(false), 2), dt = Vt[0], on = Vt[1], ze = "popupVisible" in c ? c.popupVisible : an, Be = we(B, W, re, U), Ae = "value" in c ? Be : at, Pe = Ue || Le || Ae || [], ke = _n(Le || Ae), Ie = w.useRef(true), $t = Se(), ln = Mt($t, re, U);
  function un() {
    var f = [], P = _t(H) && H.defaultValue ? we(H.defaultValue, H.format || "HH:mm:ss") : [];
    return f[0] = Pe[0] || P[0] || ln, f[1] = Pe[1] || P[1] || ln, f;
  }
  var Pt = un(), jt = L ? function(f) {
    return Ne === 0 ? f.isAfter(Pe[1], _) : f.isBefore(Pe[0], _);
  } : void 0, Qe = ne !== void 0, At = Qe || be;
  function Bn() {
    var f;
    if (c.value ? f = we(c.value, W, re, U) : f = we(c.defaultValue, W, re, U), L && (!f || f && !f[Oe])) {
      var P = [];
      return P[Oe] = Se(re, U), P;
    }
    return f;
  }
  var Ht = Ae || we(Q, W) || [$t, $t], sn = De(w.useState(Ge(Ht)), 2), We = sn[0], vt = sn[1], mt = Ge(we(ue, W, re, U)) || We, Ft = Jt(re), zt = Jt(U);
  Xn(function() {
    if (se(at) && (Ft !== re || U !== zt)) {
      var f = at.map(function(j) {
        return Ke(j, Ft, zt);
      }), P = f.map(function(j) {
        return Mt(j, re, U);
      });
      bt(P);
    }
  }, [re, Ft, U, zt]), Xn(function() {
    vt(Ge(Ht));
  }, [_]), w.useEffect(function() {
    ft([_, _]);
  }, [_]), w.useEffect(function() {
    if (st(void 0), qe(void 0), ze) {
      var f = Ge(Ht);
      on(false), ft([_, _]), vt(f), Bt(f), Ze(Ae), $ && (ae.current.style.maxHeight = I.current.clientHeight + "px");
    } else Ze(void 0), ot(void 0), ct(void 0), D();
    Ie.current = ze;
  }, [ze]);
  var Wn = (n = Be == null ? void 0 : Be[0]) === null || n === void 0 ? void 0 : n.format(Je(W, 0)), qn = (t = Be == null ? void 0 : Be[1]) === null || t === void 0 ? void 0 : t.format(Je(W, 1));
  w.useEffect(function() {
    Ze(void 0), ot(void 0);
  }, [Wn, qn]);
  function ht(f, P) {
    P === void 0 && (P = J);
    var j = Ge(f, P);
    vt(j), Bt(j);
  }
  function Bt(f) {
    cn([f[0], We[0]], _) || te && te(se(f) ? f.map(function(P, j) {
      return P && P.format(Je(W, j));
    }) : void 0, f);
  }
  function Ge(f, P) {
    P === void 0 && (P = J);
    var j = P === 0 || cn(f, _);
    if (se(f) && f.length < 2) return Ct(f[0] || Se(re, U), _, "prev");
    if (se(f) && f.length === 2) return f[P] ? Ct(f[P], _, j ? "prev" : "next") : Ct(f[P === 0 ? 1 : 0] || Se(re, U), _, j && !f[P === 0 ? 1 : 0] ? "prev" : "next");
  }
  function cn(f, P) {
    if (f && f.length === 2 && vr(f)) return (P === "date" || P === "week") && f[0].isSame(f[1], "month") || (P === "month" || P === "quarter") && f[0].isSame(f[1], "year") || P === "year" && Math.floor(f[0].year() / 10) === Math.floor(f[1].year() / 10);
  }
  function Ct(f, P, j) {
    f === void 0 && (f = Se(re, U)), P === void 0 && (P = _), j === void 0 && (j = "prev");
    var le = j === "prev";
    switch (P) {
      case "date":
      case "week":
        return le ? [f, ye.add(f, 1, "month")] : [ye.subtract(f, 1, "month"), f];
      case "month":
      case "quarter":
        return le ? [f, ye.add(f, 1, "year")] : [ye.subtract(f, 1, "year"), f];
      case "year":
        return le ? [f, ye.add(f, 10, "year")] : [ye.subtract(f, 10, "year"), f];
      default:
        return [];
    }
  }
  function Wt(f) {
    V.current && V.current.focus && V.current.focus(L ? Ne : f);
  }
  function D() {
    V.current && V.current.blur && V.current.blur();
  }
  function z(f) {
    f ? (setTimeout(function() {
      return Wt();
    }), ge(f)) : ge(false);
  }
  function ge(f) {
    N && N(f), St(f);
  }
  function _e(f) {
    f.stopPropagation();
    var P = Et([], De(Pe), false);
    L ? P[Ne] = void 0 : P = void 0, bt(P), Ze(P), Ut(P), c.onClear && c.onClear();
  }
  function Ye(f, P) {
    if (he(f), Pe && Pe.length && !P) {
      var j = Ge(Pe, f);
      vt(j), Bt(j);
    }
  }
  function fn(f) {
    var P = typeof jt == "function" ? jt(f) : false, j = typeof O == "function" ? O(f) : false;
    return j || P;
  }
  function qt(f) {
    return Po(f, W, J) && !fn(we(f, W));
  }
  function dn(f) {
    var P = Et([], De(Pe || []), false), j = f.target.value;
    qe(j), ze || ge(true), qt(j) && (P[J] = we(j, W), Ze(P), ht(P), qe(void 0));
  }
  function Un() {
    Te && qe(void 0);
  }
  function Ut(f) {
    if (So(Ae, f)) {
      var P = se(f) ? f.map(function(j) {
        return tt(Ke(j, re, U), l.dayjsLocale);
      }) : void 0;
      F && F(se(P) ? P.map(function(j, le) {
        return j && j.format(Je(W, le));
      }) : void 0, P);
    }
  }
  function Jr() {
    se(Le) && Le.length ? Te && !qt(Te) ? qe(void 0) : ke !== 2 ? vn() : ke === 2 && Ot(Le) : ze && ge(false);
  }
  function Ot(f, P) {
    var j = f || Pe;
    if (!(!j || !j[0] || !j[1])) {
      var le = Zt(j, q);
      bt(le), Ut(le), ne !== null && !P && ge(false);
    }
  }
  function ea() {
    Ot();
    var f = Pe.map(function(P) {
      return tt(P, l.dayjsLocale);
    });
    R && R(f.map(function(P, j) {
      return P && P.format(Je(W, j));
    }), f);
  }
  function cr() {
    switch (_) {
      case "date":
      case "week":
        return "date";
      case "month":
        return "month";
      case "year":
        return "year";
      default:
        return;
    }
  }
  function fr(f) {
    if (ke !== 2) return false;
    var P = Le || Ae;
    return !!(J === 0 && f.isAfter(P[1], cr()) || J === 1 && f.isBefore(P[0], cr()));
  }
  function ta(f, P) {
    var j = fr(P) && Ie.current, le = At && ke === 2 && !L ? [] : Et([], De(Pe), false), xe = Qe ? ke === 0 || ke === 2 ? 0 : 1 : J, Kt = H ? lt(P, Pt[xe]) : P;
    j ? (le[xe] = Kt, le[1 ^ xe] = void 0) : le[xe] = Kt;
    var mn = Zt(le, q);
    dr(mn), qe(void 0), st(void 0);
    var Kn = _n(le);
    At ? ke === 0 || ke === 2 && !L ? Qe ? he(1) : vn(true) : H || Ot(le) : Kn <= 1 ? vn(true) : ke === 2 && Ie.current && !L ? (Ie.current = false, vn(true), !H && !j && Ot(le, true)) : (Ie.current = false, !H && !j && Ot(le));
  }
  function na(f, P, j) {
    var le = se(Pe) ? Et([], De(Pe), false) : [], xe = lt(le[f] || Se(re, U), j);
    le[f] = xe, dr(le);
  }
  function dr(f) {
    Ze(f), ot(void 0);
    var P = Zt(f, q), j = P.map(function(le) {
      return tt(Ke(le, re, U), l.dayjsLocale);
    });
    x && x(j.map(function(le, xe) {
      return le && le.format(Je(W, xe));
    }), j, { type: J === 1 ? "end" : "start" });
  }
  function vn(f) {
    Ye(Oe, f), setTimeout(function() {
      return Wt(Oe);
    });
  }
  function ra(f, P) {
    var j = Et([], De(Pe || []), false), le = At ? ke === 1 : ke !== 0;
    if (!P && le && !fr(f) && (j[J] = lt(f, Pt[J]), ot(j), qe(void 0)), !P) {
      var xe = H ? lt(f, Pt[J]) : f;
      st(xe.locale(l.dayjsLocale).format(Je(W, J)));
    }
  }
  function aa() {
    ot(void 0), st(void 0);
  }
  function vr(f) {
    return f && se(f) && f.length === 2 && Re(f[0]) && Re(f[1]);
  }
  function mr(f) {
    var P = typeof f.value == "function" && f.value();
    return vr(P);
  }
  function hr() {
    clearTimeout(Y.current), clearTimeout(de.current), Y.current = null, de.current = null;
  }
  function oa(f) {
    hr(), Y.current = setTimeout(function() {
      if (mr(f)) {
        var P = we(f.value(), W, re, U);
        ct(P), ht(P);
      }
    }, 50);
  }
  function ia() {
    hr(), de.current = setTimeout(function() {
      ct(void 0), ht(Le || Ae || [Se(re, U), Se(re, U)]);
    }, 50);
  }
  function la(f) {
    if (oe && oe(f), mr(f)) {
      var P = we(f.value(), W, re, U);
      if (P.some(function(j) {
        return ut(j, O, _);
      })) return;
      Ot(P);
    }
  }
  function it(f, P, j) {
    j === void 0 && (j = 1);
    var le = f === "prev" ? 0 : 1, xe = Et([], De(mt), false);
    f === "prev" && (xe[le] = ye.subtract(mt[le], j, P)), f === "next" && (xe[le] = ye.add(mt[le], j, P)), xe = Ct(xe[le], _, f), ht(xe);
  }
  function pr(f) {
    if (f === void 0 && (f = _), f === "date" || f === "week") return { onPrev: function() {
      return it("prev", "month");
    }, onNext: function() {
      return it("next", "month");
    }, onSuperPrev: function() {
      return it("prev", "year");
    }, onSuperNext: function() {
      return it("next", "year");
    } };
    if (f === "month" || f === "quarter") return { onSuperPrev: function() {
      return it("prev", "year");
    }, onSuperNext: function() {
      return it("next", "year");
    } };
    if (f === "year") return { onSuperPrev: function() {
      return it("prev", "year", 10);
    }, onSuperNext: function() {
      return it("next", "year", 10);
    } };
  }
  function ua() {
    on(!dt);
  }
  function gr(f) {
    var P, j = Ce(ce + "-container", (P = {}, P[ce + "-panel-only"] = f, P[ce + "-container-shortcuts-placement-left"] = se(M) && $, P[ce + "-container-rtl"] = m, P), f ? h : ""), le = { prefixCls: u("picker"), showTime: H, shortcuts: M, onMouseEnterShortcut: oa, onMouseLeaveShortcut: ia, onSelectShortcut: la, disabledDate: O, mode: _ }, xe = H && Rt[0] === "date" && Rt[1] === "date" || X || se(M) && M.length && !$, Kt = i.createElement(i.Fragment, null, i.createElement(ri, gt({}, c, pr(), { getHeaderOperations: pr, setRangePageShowDates: ht, pageShowDates: mt, value: Pe, format: W, onSelectPanel: ta, onMouseEnterCell: ra, onMouseLeaveCell: aa, disabledDate: function(ma) {
      return fn(ma);
    }, disabledTime: Z, mode: _, localeName: l.dayjsLocale, showTime: H, timeValues: Ue || Pt, onTimePickerSelect: na, popupVisible: ze, disabledTimePickerIndex: ee, isTimePanel: dt, valueShowHover: It, panelModes: Rt, setPanelModes: ft })), !!xe && i.createElement(Gr, gt({}, le, { DATEPICKER_LOCALE: l.DatePicker, disabled: !(se(Pe) && Pe[0] && Pe[1]), onClickConfirmBtn: ea, extra: X, shortcutsPlacementLeft: $, onClickSelectTimeBtn: ua, isTimePanel: dt }))), mn = $ ? i.createElement(i.Fragment, null, i.createElement(sr, gt({ ref: ae }, le)), i.createElement("div", { ref: I, className: ce + "-panel-wrapper" }, Kt)) : Kt, Kn = typeof K == "function" ? K(mn) : mn;
    return i.createElement("div", { className: j, onClick: function() {
      return Wt();
    }, style: f ? E : {} }, Kn);
  }
  var sa = c.size || o, ca = se(S) ? S : l.DatePicker.placeholders[_], fa = A && A.inputSuffix === null ? null : A && A.inputSuffix || (H ? i.createElement(Hn, null) : i.createElement(An, null)), da = { style: E, className: h, popupVisible: ze, format: W, disabled: d, error: p, status: b, size: sa, onPressEnter: Jr, onClear: _e, suffixIcon: fa, editable: g, allowClear: C, prefix: c.prefix }, va = se(d) ? d[0] && d[1] : d;
  return i.createElement(yt.Provider, { value: { utcOffset: re, timezone: U, weekStart: fe } }, ne === null ? gr(true) : i.createElement(Ur, gt({ popup: gr, trigger: "click", clickToClose: false, position: y, disabled: va, popupAlign: oi, getPopupContainer: v, onVisibleChange: z, popupVisible: ze, classNames: "slideDynamicOrigin", unmountOnExit: k }, T), ne || i.createElement(Ho, gt({}, Kr(c), da, { inputProps: ie, ref: V, placeholder: ca, value: Le || Ae, onChange: dn, inputValue: Lt || Te, changeFocusedInputIndex: Ye, focusedInputIndex: J, isPlaceholder: !!Lt, separator: ve, onBlur: Un }))));
}, Xr = w.forwardRef(ii);
Xr.displayName = "RangePicker";
var li = /* @__PURE__ */ (function() {
  var e = function(r, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, a) {
      t.__proto__ = a;
    } || function(t, a) {
      for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (t[u] = a[u]);
    }, e(r, n);
  };
  return function(r, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(r, n);
    function t() {
      this.constructor = r;
    }
    r.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
  };
})(), ir = function() {
  return ir = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ir.apply(this, arguments);
};
function en(e, r) {
  var n;
  return n = (function(t) {
    li(a, t);
    function a(u) {
      var l = t.call(this, u) || this;
      return l.refPicker = i.createRef(), l;
    }
    return a.prototype.focus = function() {
      this.refPicker.current && this.refPicker.current.focus && this.refPicker.current.focus();
    }, a.prototype.blur = function() {
      this.refPicker.current && this.refPicker.current.blur && this.refPicker.current.blur();
    }, a.prototype.render = function() {
      return i.createElement($o, ir({}, this.props, { ref: this.refPicker, picker: e, mode: r.mode }));
    }, a;
  })(i.Component), n.displayName = r.displayName, n;
}
var ui = en(i.createElement(In, null), { displayName: "DatePicker", mode: "date" }), si = en(i.createElement(Ln, null), { displayName: "MonthPicker", mode: "month" }), ci = en(i.createElement(Tt, null), { displayName: "YearPicker", mode: "year" }), fi = en(i.createElement(ar, null), { displayName: "WeekPicker", mode: "week" }), di = en(i.createElement(or, null), { displayName: "QuarterPicker", mode: "quarter" }), vi = Xr;
const hi = Object.assign(ui, { MonthPicker: si, YearPicker: ci, WeekPicker: fi, QuarterPicker: di, RangePicker: vi });
export { _a as A, hi as D };
