import { r as v, C as Ae, u as gt, R as i, I as hl, a as gl, b as Ci, c as yl, d as me, A as xl, e as jr, g as yt, f as bl, i as Ee, h as ht, j as Ue, k as xt, _ as bt, l as Et, m as ta, n as ra, T as El, o as na, p as Cl, q as wi, s as rr, t as wl, v as Zr, w as zt, x as Xe, y as Sl, z as Ol, B as Pl, E as Si, D as he, F as _e, G as Or, H as Oi, J as aa, K as Nl, L as jl, M as Sa, N as Oa, O as an, P as Pi, Q as Pt, S as Ni, U as Pa, V as Na, W as Vn, X as kl, Y as Il, Z as c, $ as Ll, a0 as ja, a1 as ji, a2 as Ge, a3 as ia, a4 as $t, a5 as Al, a6 as ft, a7 as Xr, a8 as Ur } from "./index-DOWuBEUh.js";
import { u as Pr, m as bn, I as Dl, a as ki, U as Ml, E as Ft } from "./upload-dwSPQUIn.js";
import { D as ka, a as Tl } from "./index-DikCtwkZ.js";
import { F as xe } from "./index-C6f6IxNt.js";
import { i as Ii, f as Jt, e as Ln, t as An, a as Rl } from "./reportTasks-DAXmF1j7.js";
import { T as Vl, a as zl } from "./index-DCvAPB0m.js";
import { I as Hl } from "./index-gnNGM7My.js";
import { I as Fl } from "./index-CgcNigm7.js";
import { P as _l } from "./pagination-DNEzLAQJ.js";
import "./useOverflowHidden-DqOFwnaA.js";
var zn = function() {
  return zn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, zn.apply(this, arguments);
}, Wl = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Yl = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, Bl = { showIcon: true, type: "info" }, Zl = function(e, n) {
  var t, r = v.useContext(Ae), a = r.getPrefixCls, l = r.componentConfig, s = r.rtl, o = gt(e, Bl, l == null ? void 0 : l.Alert), u = o.style, f = o.className, d = o.action, w = o.type, h = w === void 0 ? "info" : w, N = o.title, S = o.content, p = o.icon, g = o.showIcon, E = o.closable, m = o.closeable, b = o.afterClose, j = o.onClose, x = o.closeElement, L = o.banner, D = Wl(o, ["style", "className", "action", "type", "title", "content", "icon", "showIcon", "closable", "closeable", "afterClose", "onClose", "closeElement", "banner"]), P = a("alert"), O = Yl(v.useState(true), 2), T = O[0], V = O[1], R = i.useMemo(function() {
    if (p) return p;
    switch (h) {
      case "info":
        return i.createElement(yl, null);
      case "success":
        return i.createElement(Ci, null);
      case "warning":
        return i.createElement(gl, null);
      case "error":
        return i.createElement(hl, null);
      default:
        return null;
    }
  }, [p, h]), y = function(F) {
    V(false), j == null || j(F);
  }, Z = me(P, P + "-" + h, (t = {}, t[P + "-with-title"] = N, t[P + "-banner"] = L, t[P + "-rtl"] = s, t), f), I = "closeable" in o ? m : E;
  return i.createElement(xl, { in: T, timeout: 300, classNames: "zoomInTop", unmountOnExit: true, onExited: function() {
    b == null || b();
  } }, i.createElement("div", zn({ ref: n, style: u, className: Z, role: "alert" }, D), g && i.createElement("div", { className: P + "-icon-wrapper" }, R), i.createElement("div", { className: P + "-content-wrapper" }, N && i.createElement("div", { className: P + "-title" }, N), S && i.createElement("div", { className: P + "-content" }, S)), d && i.createElement("div", { className: P + "-action" }, d), I && i.createElement("button", { type: "button", onClick: y, className: P + "-close-btn" }, x || i.createElement(jr, null))));
}, Li = v.forwardRef(Zl);
Li.displayName = "Alert";
var Xl = bl();
const Je = yt(Xl);
var Kr = { exports: {} }, Ul = Kr.exports, Ia;
function Kl() {
  return Ia || (Ia = 1, (function(e, n) {
    (function(t, r) {
      e.exports = r();
    })(Ul, (function() {
      var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, l = /\d\d/, s = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, u = {}, f = function(g) {
        return (g = +g) + (g > 68 ? 1900 : 2e3);
      }, d = function(g) {
        return function(E) {
          this[g] = +E;
        };
      }, w = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
        (this.zone || (this.zone = {})).offset = (function(E) {
          if (!E || E === "Z") return 0;
          var m = E.match(/([+-]|\d\d)/g), b = 60 * m[1] + (+m[2] || 0);
          return b === 0 ? 0 : m[0] === "+" ? -b : b;
        })(g);
      }], h = function(g) {
        var E = u[g];
        return E && (E.indexOf ? E : E.s.concat(E.f));
      }, N = function(g, E) {
        var m, b = u.meridiem;
        if (b) {
          for (var j = 1; j <= 24; j += 1) if (g.indexOf(b(j, 0, E)) > -1) {
            m = j > 12;
            break;
          }
        } else m = g === (E ? "pm" : "PM");
        return m;
      }, S = { A: [o, function(g) {
        this.afternoon = N(g, false);
      }], a: [o, function(g) {
        this.afternoon = N(g, true);
      }], Q: [a, function(g) {
        this.month = 3 * (g - 1) + 1;
      }], S: [a, function(g) {
        this.milliseconds = 100 * +g;
      }], SS: [l, function(g) {
        this.milliseconds = 10 * +g;
      }], SSS: [/\d{3}/, function(g) {
        this.milliseconds = +g;
      }], s: [s, d("seconds")], ss: [s, d("seconds")], m: [s, d("minutes")], mm: [s, d("minutes")], H: [s, d("hours")], h: [s, d("hours")], HH: [s, d("hours")], hh: [s, d("hours")], D: [s, d("day")], DD: [l, d("day")], Do: [o, function(g) {
        var E = u.ordinal, m = g.match(/\d+/);
        if (this.day = m[0], E) for (var b = 1; b <= 31; b += 1) E(b).replace(/\[|\]/g, "") === g && (this.day = b);
      }], w: [s, d("week")], ww: [l, d("week")], M: [s, d("month")], MM: [l, d("month")], MMM: [o, function(g) {
        var E = h("months"), m = (h("monthsShort") || E.map((function(b) {
          return b.slice(0, 3);
        }))).indexOf(g) + 1;
        if (m < 1) throw new Error();
        this.month = m % 12 || m;
      }], MMMM: [o, function(g) {
        var E = h("months").indexOf(g) + 1;
        if (E < 1) throw new Error();
        this.month = E % 12 || E;
      }], Y: [/[+-]?\d+/, d("year")], YY: [l, function(g) {
        this.year = f(g);
      }], YYYY: [/\d{4}/, d("year")], Z: w, ZZ: w };
      function p(g) {
        var E, m;
        E = g, m = u && u.formats;
        for (var b = (g = E.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(T, V, R) {
          var y = R && R.toUpperCase();
          return V || m[R] || t[R] || m[y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(Z, I, F) {
            return I || F.slice(1);
          }));
        }))).match(r), j = b.length, x = 0; x < j; x += 1) {
          var L = b[x], D = S[L], P = D && D[0], O = D && D[1];
          b[x] = O ? { regex: P, parser: O } : L.replace(/^\[|\]$/g, "");
        }
        return function(T) {
          for (var V = {}, R = 0, y = 0; R < j; R += 1) {
            var Z = b[R];
            if (typeof Z == "string") y += Z.length;
            else {
              var I = Z.regex, F = Z.parser, ne = T.slice(y), k = I.exec(ne)[0];
              F.call(V, k), T = T.replace(k, "");
            }
          }
          return (function(A) {
            var M = A.afternoon;
            if (M !== void 0) {
              var G = A.hours;
              M ? G < 12 && (A.hours += 12) : G === 12 && (A.hours = 0), delete A.afternoon;
            }
          })(V), V;
        };
      }
      return function(g, E, m) {
        m.p.customParseFormat = true, g && g.parseTwoDigitYear && (f = g.parseTwoDigitYear);
        var b = E.prototype, j = b.parse;
        b.parse = function(x) {
          var L = x.date, D = x.utc, P = x.args;
          this.$u = D;
          var O = P[1];
          if (typeof O == "string") {
            var T = P[2] === true, V = P[3] === true, R = T || V, y = P[2];
            V && (y = P[2]), u = this.$locale(), !T && y && (u = m.Ls[y]), this.$d = (function(ne, k, A, M) {
              try {
                if (["x", "X"].indexOf(k) > -1) return new Date((k === "X" ? 1e3 : 1) * ne);
                var G = p(k)(ne), fe = G.year, Q = G.month, se = G.day, le = G.hours, pe = G.minutes, ae = G.seconds, U = G.milliseconds, K = G.zone, ee = G.week, X = /* @__PURE__ */ new Date(), $ = se || (fe || Q ? 1 : X.getDate()), te = fe || X.getFullYear(), W = 0;
                fe && !Q || (W = Q > 0 ? Q - 1 : X.getMonth());
                var _, oe = le || 0, z = pe || 0, ve = ae || 0, q = U || 0;
                return K ? new Date(Date.UTC(te, W, $, oe, z, ve, q + 60 * K.offset * 1e3)) : A ? new Date(Date.UTC(te, W, $, oe, z, ve, q)) : (_ = new Date(te, W, $, oe, z, ve, q), ee && (_ = M(_).week(ee).toDate()), _);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(L, O, D, m), this.init(), y && y !== true && (this.$L = this.locale(y).$L), R && L != this.format(O) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
          } else if (O instanceof Array) for (var Z = O.length, I = 1; I <= Z; I += 1) {
            P[1] = O[I - 1];
            var F = m.apply(this, P);
            if (F.isValid()) {
              this.$d = F.$d, this.$L = F.$L, this.init();
              break;
            }
            I === Z && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else j.call(this, x);
        };
      };
    }));
  })(Kr)), Kr.exports;
}
var ql = Kl();
const Ql = yt(ql);
var qr = { exports: {} }, Gl = qr.exports, La;
function Jl() {
  return La || (La = 1, (function(e, n) {
    (function(t, r) {
      e.exports = r();
    })(Gl, (function() {
      return function(t, r, a) {
        r.prototype.isBetween = function(l, s, o, u) {
          var f = a(l), d = a(s), w = (u = u || "()")[0] === "(", h = u[1] === ")";
          return (w ? this.isAfter(f, o) : !this.isBefore(f, o)) && (h ? this.isBefore(d, o) : !this.isAfter(d, o)) || (w ? this.isBefore(f, o) : !this.isAfter(f, o)) && (h ? this.isAfter(d, o) : !this.isBefore(d, o));
        };
      };
    }));
  })(qr)), qr.exports;
}
var $l = Jl();
const eo = yt($l);
var Qr = { exports: {} }, to = Qr.exports, Aa;
function ro() {
  return Aa || (Aa = 1, (function(e, n) {
    (function(t, r) {
      e.exports = r();
    })(to, (function() {
      var t = "week", r = "year";
      return function(a, l, s) {
        var o = l.prototype;
        o.week = function(u) {
          if (u === void 0 && (u = null), u !== null) return this.add(7 * (u - this.week()), "day");
          var f = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var d = s(this).startOf(r).add(1, r).date(f), w = s(this).endOf(t);
            if (d.isBefore(w)) return 1;
          }
          var h = s(this).startOf(r).date(f).startOf(t).subtract(1, "millisecond"), N = this.diff(h, t, true);
          return N < 0 ? s(this).startOf("week").week() : Math.ceil(N);
        }, o.weeks = function(u) {
          return u === void 0 && (u = null), this.week(u);
        };
      };
    }));
  })(Qr)), Qr.exports;
}
var no = ro();
const ao = yt(no);
var Gr = { exports: {} }, io = Gr.exports, Da;
function lo() {
  return Da || (Da = 1, (function(e, n) {
    (function(t, r) {
      e.exports = r();
    })(io, (function() {
      return function(t, r) {
        var a = r.prototype, l = a.format;
        a.format = function(s) {
          var o = this, u = this.$locale();
          if (!this.isValid()) return l.bind(this)(s);
          var f = this.$utils(), d = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(w) {
            switch (w) {
              case "Q":
                return Math.ceil((o.$M + 1) / 3);
              case "Do":
                return u.ordinal(o.$D);
              case "gggg":
                return o.weekYear();
              case "GGGG":
                return o.isoWeekYear();
              case "wo":
                return u.ordinal(o.week(), "W");
              case "w":
              case "ww":
                return f.s(o.week(), w === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return f.s(o.isoWeek(), w === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return f.s(String(o.$H === 0 ? 24 : o.$H), w === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(o.$d.getTime() / 1e3);
              case "x":
                return o.$d.getTime();
              case "z":
                return "[" + o.offsetName() + "]";
              case "zzz":
                return "[" + o.offsetName("long") + "]";
              default:
                return w;
            }
          }));
          return l.bind(this)(d);
        };
      };
    }));
  })(Gr)), Gr.exports;
}
var oo = lo();
const so = yt(oo);
var Jr = { exports: {} }, co = Jr.exports, Ma;
function uo() {
  return Ma || (Ma = 1, (function(e, n) {
    (function(t, r) {
      e.exports = r();
    })(co, (function() {
      return function(t, r) {
        r.prototype.weekYear = function() {
          var a = this.month(), l = this.week(), s = this.year();
          return l === 1 && a === 11 ? s + 1 : a === 0 && l >= 52 ? s - 1 : s;
        };
      };
    }));
  })(Jr)), Jr.exports;
}
var fo = uo();
const mo = yt(fo);
var $r = { exports: {} }, po = $r.exports, Ta;
function vo() {
  return Ta || (Ta = 1, (function(e, n) {
    (function(t, r) {
      e.exports = r();
    })(po, (function() {
      var t = "month", r = "quarter";
      return function(a, l) {
        var s = l.prototype;
        s.quarter = function(f) {
          return this.$utils().u(f) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (f - 1));
        };
        var o = s.add;
        s.add = function(f, d) {
          return f = Number(f), this.$utils().p(d) === r ? this.add(3 * f, t) : o.bind(this)(f, d);
        };
        var u = s.startOf;
        s.startOf = function(f, d) {
          var w = this.$utils(), h = !!w.u(d) || d;
          if (w.p(f) === r) {
            var N = this.quarter() - 1;
            return h ? this.month(3 * N).startOf(t).startOf("day") : this.month(3 * N + 2).endOf(t).endOf("day");
          }
          return u.bind(this)(f, d);
        };
      };
    }));
  })($r)), $r.exports;
}
var ho = vo();
const go = yt(ho);
var en = { exports: {} }, yo = en.exports, Ra;
function xo() {
  return Ra || (Ra = 1, (function(e, n) {
    (function(t, r) {
      e.exports = r();
    })(yo, (function() {
      var t = "minute", r = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
      return function(l, s, o) {
        var u = s.prototype;
        o.utc = function(p) {
          var g = { date: p, utc: true, args: arguments };
          return new s(g);
        }, u.utc = function(p) {
          var g = o(this.toDate(), { locale: this.$L, utc: true });
          return p ? g.add(this.utcOffset(), t) : g;
        }, u.local = function() {
          return o(this.toDate(), { locale: this.$L, utc: false });
        };
        var f = u.parse;
        u.parse = function(p) {
          p.utc && (this.$u = true), this.$utils().u(p.$offset) || (this.$offset = p.$offset), f.call(this, p);
        };
        var d = u.init;
        u.init = function() {
          if (this.$u) {
            var p = this.$d;
            this.$y = p.getUTCFullYear(), this.$M = p.getUTCMonth(), this.$D = p.getUTCDate(), this.$W = p.getUTCDay(), this.$H = p.getUTCHours(), this.$m = p.getUTCMinutes(), this.$s = p.getUTCSeconds(), this.$ms = p.getUTCMilliseconds();
          } else d.call(this);
        };
        var w = u.utcOffset;
        u.utcOffset = function(p, g) {
          var E = this.$utils().u;
          if (E(p)) return this.$u ? 0 : E(this.$offset) ? w.call(this) : this.$offset;
          if (typeof p == "string" && (p = (function(x) {
            x === void 0 && (x = "");
            var L = x.match(r);
            if (!L) return null;
            var D = ("" + L[0]).match(a) || ["-", 0, 0], P = D[0], O = 60 * +D[1] + +D[2];
            return O === 0 ? 0 : P === "+" ? O : -O;
          })(p), p === null)) return this;
          var m = Math.abs(p) <= 16 ? 60 * p : p;
          if (m === 0) return this.utc(g);
          var b = this.clone();
          if (g) return b.$offset = m, b.$u = false, b;
          var j = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (b = this.local().add(m + j, t)).$offset = m, b.$x.$localOffset = j, b;
        };
        var h = u.format;
        u.format = function(p) {
          var g = p || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, g);
        }, u.valueOf = function() {
          var p = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * p;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var N = u.toDate;
        u.toDate = function(p) {
          return p === "s" && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : N.call(this);
        };
        var S = u.diff;
        u.diff = function(p, g, E) {
          if (p && this.$u === p.$u) return S.call(this, p, g, E);
          var m = this.local(), b = o(p).local();
          return S.call(m, b, g, E);
        };
      };
    }));
  })(en)), en.exports;
}
var bo = xo();
const Eo = yt(bo);
var tn = { exports: {} }, Co = tn.exports, Va;
function wo() {
  return Va || (Va = 1, (function(e, n) {
    (function(t, r) {
      e.exports = r();
    })(Co, (function() {
      var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, r = {};
      return function(a, l, s) {
        var o, u = function(h, N, S) {
          S === void 0 && (S = {});
          var p = new Date(h), g = (function(E, m) {
            m === void 0 && (m = {});
            var b = m.timeZoneName || "short", j = E + "|" + b, x = r[j];
            return x || (x = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: E, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: b }), r[j] = x), x;
          })(N, S);
          return g.formatToParts(p);
        }, f = function(h, N) {
          for (var S = u(h, N), p = [], g = 0; g < S.length; g += 1) {
            var E = S[g], m = E.type, b = E.value, j = t[m];
            j >= 0 && (p[j] = parseInt(b, 10));
          }
          var x = p[3], L = x === 24 ? 0 : x, D = p[0] + "-" + p[1] + "-" + p[2] + " " + L + ":" + p[4] + ":" + p[5] + ":000", P = +h;
          return (s.utc(D).valueOf() - (P -= P % 1e3)) / 6e4;
        }, d = l.prototype;
        d.tz = function(h, N) {
          if (h === void 0 && (h = o), !this.isValid()) return this;
          var S, p = this.utcOffset(), g = this.toDate(), E = g.toLocaleString("en-US", { timeZone: h }), m = f(+g, h);
          if (!Number(m)) S = this.utcOffset(0, N);
          else if (S = s(E, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(m, true), N) {
            var b = S.utcOffset();
            S = S.add(p - b, "minute");
          }
          return S.$x.$timezone = h, S;
        }, d.offsetName = function(h) {
          var N = this.$x.$timezone || s.tz.guess(), S = u(this.valueOf(), N, { timeZoneName: h }).find((function(p) {
            return p.type.toLowerCase() === "timezonename";
          }));
          return S && S.value;
        };
        var w = d.startOf;
        d.startOf = function(h, N) {
          if (!this.$x || !this.$x.$timezone) return w.call(this, h, N);
          var S = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return w.call(S, h, N).tz(this.$x.$timezone, true);
        }, s.tz = function(h, N, S) {
          var p = S && N, g = S || N || o, E = f(+s(), g);
          if (typeof h != "string") return s(h).tz(g);
          var m = s.utc(h, p).valueOf();
          if (Number.isNaN(m)) {
            var b = s(NaN);
            return b.$x.$timezone = g, b;
          }
          var j = (function(P, O, T) {
            var V = P - 60 * O * 1e3, R = f(V, T);
            if (O === R) return [V, O];
            var y = f(V -= 60 * (R - O) * 1e3, T);
            return R === y ? [V, R] : [P - 60 * Math.min(R, y) * 1e3, Math.max(R, y)];
          })(m, E, g), x = j[0], L = j[1], D = s(x).utcOffset(L);
          return D.$x.$timezone = g, D;
        }, s.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, s.tz.setDefault = function(h) {
          o = h;
        };
      };
    }));
  })(tn)), tn.exports;
}
var So = wo();
const Oo = yt(So);
var ln = function() {
  return ln = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ln.apply(this, arguments);
}, Po = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, No = function(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, a = n.length, l; r < a; r++) (l || !(r in n)) && (l || (l = Array.prototype.slice.call(n, 0, r)), l[r] = n[r]);
  return e.concat(l || Array.prototype.slice.call(n));
}, Mt = Je()._isAMomentObject;
Mt && (Je.extend = function() {
});
var jo = function(e, n, t) {
  t = function(l, s) {
    if (Ue(l)) return l.clone();
    var o = typeof s == "object" ? s : {};
    return o.date = l, o.args = arguments, new n(o);
  };
  var r = n.prototype, a = r.$utils;
  r.$utils = function() {
    var l = a();
    return l.i = Ue, l;
  }, t.isDayjs = Ue;
};
Je.extend(jo);
Je.extend(Ql);
Je.extend(eo);
Je.extend(ao);
Je.extend(so);
Je.extend(mo);
Je.extend(go);
Je.extend(Eo);
Je.extend(Oo);
var Ce = Je, za = ["YYYY-MM-DD HH:mm:ss", "YYYY-MM-DD"];
function Ha(e, n) {
  var t = (e.day() - n + 7) % 7, r = e.clone().startOf("day").subtract(t, "day");
  return r.valueOf();
}
function ko(e, n, t) {
  return Ha(e, t) === Ha(n, t);
}
var Ne = { add: function(e, n, t) {
  return Mt ? e.clone().add(n, t) : e.add(n, t);
}, subtract: function(e, n, t) {
  return Mt ? e.clone().subtract(n, t) : e.subtract(n, t);
}, startOf: function(e, n) {
  return Mt ? e.clone().startOf(n) : e.startOf(n);
}, endOf: function(e, n) {
  return Mt ? e.clone().endOf(n) : e.endOf(n);
}, set: function(e, n, t) {
  return Mt ? e.clone().set(n, t) : e.set(n, t);
}, isSameWeek: function(e, n, t, r) {
  return Mt ? ko(e, n, t) : e.locale(ln(ln({}, Ce.Ls[r]), { weekStart: t })).isSame(n, "week");
} }, Io = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, Fa = {}, Lo = function(e, n) {
  var t = e + "|short", r = Fa[t];
  return r || (r = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: e, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }), Fa[t] = r), r;
}, Ao = function(e, n) {
  var t = new Date(e), r = Lo(n);
  return r.formatToParts(t);
}, Hn = function(e, n) {
  for (var t = Ao(e, n), r = [], a = 0; a < t.length; a += 1) {
    var l = t[a], s = l.type, o = l.value, u = Io[s];
    u >= 0 && (r[u] = parseInt(o, 10));
  }
  var f = r[3], d = f === 24 ? 0 : f, w = Date.UTC(r[0], r[1] - 1, r[2], d, r[4], r[5], 0), h = +e, N = h % 1e3;
  return h -= N, (w - h) / (60 * 1e3);
}, Do = function(e, n, t) {
  var r = e - n * 60 * 1e3, a = Hn(r, t);
  if (n === a) return [r, n];
  r -= (a - n) * 60 * 1e3;
  var l = Hn(r, t);
  return a === l ? [r, a] : [e - Math.min(a, l) * 60 * 1e3, Math.max(a, l)];
};
function _a(e, n) {
  var t = Hn(e, n);
  return Do(e, t, n)[1];
}
function Ie(e, n) {
  return ht(e) && !n ? Ce() : er(Ce(), e, n);
}
function er(e, n, t, r) {
  if (!e || ht(n) && !t) return e;
  var a = -e.toDate().getTimezoneOffset(), l = ht(n) ? t ? _a(e.valueOf(), t) : a : n, s = Math.abs(l) <= 16 ? l * 60 : l, o = r ? a - s : s - a, u = t ? _a(Ce(e).valueOf() + o * 60 * 1e3, t) : l, f = o - (l - u), d = r || !ht(n) ? o : f;
  return Ce(Ce(e).valueOf() + d * 60 * 1e3);
}
function ot(e, n, t) {
  return er(e, n, t, true);
}
function Mo(e) {
  var n = ["H", "h", "m", "s", "A", "a"], t = "";
  return n.some(function(r) {
    return e.indexOf(r) !== -1 ? (t = "" + r + e.split(" " + r)[1], true) : false;
  }), t || "HH:mm:ss";
}
function ke(e, n, t, r) {
  if (e) {
    var a = function(s, o) {
      if (Ue(s)) return Ce(s.valueOf());
      if (typeof s == "string") {
        var u = Ce(s, Ee(n) ? n[o] : n);
        if (u.isValid()) return u;
        for (var f = 0; f < za.length; f += 1) {
          var d = Ce(s, za[f]);
          if (d.isValid()) return d;
        }
        return u;
      }
      return Ce(s);
    }, l = function(s, o) {
      return t !== void 0 || r ? er(a(s, o), t, r) : a(s, o);
    };
    return Ee(e) ? e.map(function(s, o) {
      return s ? l(s, o) : void 0;
    }) : l(e, 0);
  }
}
function Ot(e, n) {
  var t = e.year(), r = e.month(), a = e.date();
  if (n) {
    var l = n;
    return l = Ne.set(l, "year", t), l = Ne.set(l, "month", r), l = Ne.set(l, "date", a), l;
  }
  return e;
}
function br(e, n) {
  if (!e || !e[0] || !e[1]) return e;
  var t = No([], Po(e), false);
  return t.sort(function(r, a) {
    return r.valueOf() - a.valueOf();
  }), n && e.length === 2 && (t[0] = t[0].set("hour", e[0].get("hour")).set("minute", e[0].get("minute")).set("second", e[0].get("second")), t[1] = t[1].set("hour", e[1].get("hour")).set("minute", e[1].get("minute")).set("second", e[1].get("second"))), t;
}
function To(e, n) {
  return n === void 0 && e === void 0 ? false : n && !e || !n && e || Ce(n).valueOf() !== Ce(e).valueOf();
}
function Ro(e, n) {
  return n === void 0 && e === void 0 ? false : n && !e || !n && e || Ee(n) && Ee(e) && Ce(n[0]).valueOf() !== Ce(e[0]).valueOf() || Ce(n[1]).valueOf() !== Ce(e[1]).valueOf();
}
function Vo(e, n, t) {
  return typeof e == "string" && Ce(e, n).format(Ee(n) ? n[t] : n) === e;
}
function rt(e, n, t) {
  var r = String(e), a = r.length < n ? "" + t + r : r;
  return a.length < n ? rt(a, n, t) : a;
}
function Wa(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ya(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Wa(Object(t), true).forEach(function(r) {
      Et(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function zo(e, n) {
  var t = v.useContext(xt), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, s = e.className, o = Ya(Ya({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-double-left") });
  return l && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", bt({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "M36.857 9.9 22.715 24.042l14.142 14.142M25.544 9.9 11.402 24.042l14.142 14.142" }));
}
var on = i.forwardRef(zo);
on.defaultProps = { isIcon: true };
on.displayName = "IconDoubleLeft";
function Ba(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Za(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ba(Object(t), true).forEach(function(r) {
      Et(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ba(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Ho(e, n) {
  var t = v.useContext(xt), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, s = e.className, o = Za(Za({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-double-right") });
  return l && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", bt({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "m11.143 38.1 14.142-14.142L11.143 9.816M22.456 38.1l14.142-14.142L22.456 9.816" }));
}
var sn = i.forwardRef(Ho);
sn.defaultProps = { isIcon: true };
sn.displayName = "IconDoubleRight";
function Xa(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ua(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Xa(Object(t), true).forEach(function(r) {
      Et(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Fo(e, n) {
  var t = v.useContext(xt), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, s = e.className, o = Ua(Ua({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-up") });
  return l && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", bt({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "M39.6 30.557 24.043 15 8.487 30.557" }));
}
var la = i.forwardRef(Fo);
la.defaultProps = { isIcon: true };
la.displayName = "IconUp";
var cn = function() {
  return cn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, cn.apply(this, arguments);
}, _o = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
};
function Wo(e, n) {
  var t, r, a, l, s, o, u = v.useContext(Ae).getPrefixCls, f = v.useRef(), d = v.useContext(Di), w = ta(), h = e.children, N = e.name, S = e.header, p = e.className, g = e.style, E = e.contentStyle, m = e.extra, b = e.disabled, j = e.destroyOnHide, x = e.expandIcon, L = e.showExpandIcon, D = L === void 0 ? true : L, P = _o(e, ["children", "name", "header", "className", "style", "contentStyle", "extra", "disabled", "destroyOnHide", "expandIcon", "showExpandIcon"]), O = u("collapse-item"), T = ((o = d.activeKeys) === null || o === void 0 ? void 0 : o.indexOf(N)) > -1, V = D ? "expandIcon" in e ? x : d.expandIcon : null, R = function(y, Z) {
    if (!b) {
      var I = d.triggerRegion, F = I === "icon" ? 0 : I === "header" ? 1 : 2;
      (Z === F || I === "header" && [0, 1].includes(Z)) && d.onToggle(N, y);
    }
  };
  return i.createElement("div", cn({ ref: n }, P, { className: me(O, (t = {}, t[O + "-active"] = T, t[O + "-no-icon"] = !V, t[O + "-disabled"] = b, t), p), style: g }), i.createElement("div", cn({ role: "button", "aria-disabled": b, "aria-expanded": T, "data-active-region": d.triggerRegion, tabIndex: b ? -1 : 0, className: me(O + "-header", O + "-header-" + d.expandIconPosition, (r = {}, r[O + "-header-disabled"] = b, r)), onClick: function(y) {
    return R(y, 2);
  } }, w({ onPressEnter: function(y) {
    !b && d.onToggle(N, y);
  } })), V && i.createElement(ra, { prefix: O, disabled: b, className: me((a = {}, a[O + "-icon-hover-right"] = d.expandIconPosition === "right", a[O + "-header-icon-right"] = d.expandIconPosition === "right", a)), onClick: function(y) {
    return R(y, 0);
  } }, i.createElement("span", { className: me(O + "-header-icon", (l = {}, l[O + "-header-icon-down"] = T, l)) }, V)), i.createElement("div", { className: O + "-header-title", onClick: function(y) {
    return R(y, 1);
  } }, S), m && i.createElement("div", { className: O + "-header-extra", onClick: function(y) {
    y.stopPropagation();
  } }, m)), i.createElement(El, { nodeRef: f, in: T, addEndListener: function(y) {
    var Z;
    (Z = f.current) === null || Z === void 0 || Z.addEventListener("transitionend", y, false);
  }, mountOnEnter: "destroyOnHide" in e ? j : d.destroyOnHide || d.lazyload, unmountOnExit: "destroyOnHide" in e ? j : d.destroyOnHide, onEnter: function() {
    var y = f.current;
    y && (y.style.height = "0", y.style.display = "block");
  }, onEntering: function() {
    var y = f.current;
    y && (y.style.height = y.scrollHeight + "px");
  }, onEntered: function() {
    var y = f.current;
    y && (y.style.height = "auto");
  }, onExit: function() {
    var y = f.current;
    y && (y.style.display = "block", y.style.height = y.offsetHeight + "px", y.offsetHeight);
  }, onExiting: function() {
    var y = f.current;
    y && (y.style.height = "0");
  }, onExited: function() {
    var y = f.current;
    y && (y.style.display = "none", y.style.height = "auto");
  } }, i.createElement("div", { role: "region", className: me(O + "-content", (s = {}, s[O + "-content-expanded"] = T, s)), ref: f }, i.createElement("div", { style: E, className: O + "-content-box" }, h))));
}
var Ai = i.forwardRef(Wo);
Ai.displayName = "CollapseItem";
var Fn = function() {
  return Fn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Fn.apply(this, arguments);
}, Yo = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Ka = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, Bo = function(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, a = n.length, l; r < a; r++) (l || !(r in n)) && (l || (l = Array.prototype.slice.call(n, 0, r)), l[r] = n[r]);
  return e.concat(l || Array.prototype.slice.call(n));
}, qa = function(e, n) {
  var t = [].concat(e);
  return n ? t.slice(0, 1) : t;
}, Zo = { bordered: true, lazyload: true, expandIconPosition: "left" }, Di = v.createContext({ expandIconPosition: "left", expandIcon: i.createElement(wi, null), activeKeys: [], onToggle: function() {
} });
function Xo(e, n) {
  var t, r = v.useContext(Ae), a = r.getPrefixCls, l = r.componentConfig, s = r.rtl, o = gt(e, Zo, l == null ? void 0 : l.Collapse), u = Ka(na([], { defaultValue: "defaultActiveKey" in o ? qa(o.defaultActiveKey, o.accordion) : void 0, value: "activeKey" in o ? qa(o.activeKey, o.accordion) : void 0 }), 2), f = u[0], d = u[1], w = o.children, h = o.className, N = o.style, S = o.bordered, p = o.lazyload, g = o.expandIcon, E = o.expandIconPosition, m = o.destroyOnHide, b = o.accordion, j = o.triggerRegion, x = o.onChange, L = Yo(o, ["children", "className", "style", "bordered", "lazyload", "expandIcon", "expandIconPosition", "destroyOnHide", "accordion", "triggerRegion", "onChange"]), D = a("collapse"), P = function(O, T) {
    var V = Bo([], Ka(f || []), false), R = f == null ? void 0 : f.indexOf(O);
    R > -1 ? V.splice(R, 1) : b ? V = [O] : V.push(O), "activeKey" in o || d(V), wl(x) && x(O, V, T);
  };
  return i.createElement(Di.Provider, { value: { activeKeys: f, triggerRegion: j, lazyload: p, destroyOnHide: m, expandIconPosition: E, onToggle: P, expandIcon: "expandIcon" in o ? g : E === "right" ? i.createElement(Cl, null) : i.createElement(wi, null) } }, i.createElement("div", Fn({ ref: n }, rr(L, ["activeKey", "defaultActiveKey"]), { className: me(D, D + "-" + (S ? "border" : "borderless"), (t = {}, t[D + "-rtl"] = s, t), h), style: N }), w));
}
var Uo = i.forwardRef(Xo), un = Uo;
un.displayName = "Collapse";
un.Item = Ai;
function Ko(e) {
  var n = e.inputElement, t = e.inputValue, r = v.useRef(null);
  return Zr(function() {
    try {
      var a = r.current;
      if (n && t && zt(a)) {
        var l = Math.max(0, t.length - a);
        n.setSelectionRange(l, l);
      }
    } catch (s) {
      console.warn("Failed to reset input selection range position", s);
    }
  }, [t]), function(a) {
    var l = a.target, s = l.selectionEnd, o = l.value;
    zt(s) && (r.current = o.length - s);
  };
}
var qo = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
};
function Mi(e) {
  return !Number.isNaN(Number(e)) && String(e).includes("e");
}
function _n() {
  return typeof BigInt == "function";
}
function Wn(e) {
  var n = String(e);
  if (Mi(e)) {
    var t = Number(n.slice(n.indexOf("e-") + 2));
    return n.replace(/\.(\d+)/, function(r, a) {
      return t += a.length, r;
    }), t;
  }
  return n.includes(".") && Ri(n) ? n.length - n.indexOf(".") - 1 : 0;
}
function Ti(e) {
  var n = String(e);
  if (Mi(e)) {
    if (e < Number.MIN_SAFE_INTEGER) return _n() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER.toString();
    if (e > Number.MAX_SAFE_INTEGER) return _n() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER.toString();
    var t = Wn(n);
    n = Number(e).toFixed(Math.min(100, t));
  }
  return Er(n).fullStr;
}
function Ri(e) {
  return typeof e == "number" ? !Number.isNaN(e) : e ? /^\s*-?\d+(\.\d+)?\s*$/.test(e) || /^\s*-?\d+\.\s*$/.test(e) || /^\s*-?\.\d+\s*$/.test(e) : false;
}
function Er(e) {
  var n = e.trim(), t = false;
  n = n.replace(/^-/, function() {
    return t = true, "";
  }).replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, "").replace(/^\./, "0.");
  var r = n || "0", a = qo(r.split("."), 2), l = a[0], s = l === void 0 ? "0" : l, o = a[1], u = o === void 0 ? "0" : o;
  s === "0" && u === "0" && (t = false);
  var f = t ? "-" : "";
  return { negative: t, negativeStr: f, trimStr: r, integerStr: s, decimalStr: u, fullStr: "" + f + r };
}
var Qo = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, Go = (function() {
  function e(n) {
    if (this.origin = "", this.origin = String(n), !n && n !== 0 || !this.origin.trim()) {
      this.isEmpty = true;
      return;
    }
    if (n === "-") {
      this.isNaN = true;
      return;
    }
    var t = Ti(n);
    if (Ri(t)) {
      var r = Er(t), a = r.negative, l = r.trimStr, s = Qo(l.split("."), 2), o = s[0], u = s[1], f = u === void 0 ? "0" : u;
      this.isNegative = a, this.integer = BigInt(o), this.decimal = BigInt(f), this.decimalLen = f.length;
    } else this.isNaN = true;
  }
  return Object.defineProperty(e.prototype, "isInvalid", { get: function() {
    return this.isEmpty || this.isNaN;
  }, enumerable: false, configurable: true }), e.prototype.getMark = function() {
    return this.isNegative ? "-" : "";
  }, e.prototype.getIntegerStr = function() {
    return this.integer.toString();
  }, e.prototype.getDecimalStr = function() {
    return this.decimal.toString().padStart(this.decimalLen, "0");
  }, e.prototype.alignDecimal = function(n) {
    return BigInt("" + this.getMark() + this.getIntegerStr() + this.getDecimalStr().padEnd(n, "0"));
  }, e.prototype.negate = function() {
    var n = this.toString();
    return new e(n.startsWith("-") ? n.slice(1) : "-" + n);
  }, e.prototype.add = function(n) {
    var t = new e(n);
    if (t.isInvalid) return this;
    if (this.isInvalid) return t;
    var r = Math.max(this.decimalLen, t.decimalLen), a = this.alignDecimal(r), l = t.alignDecimal(r), s = (a + l).toString(), o = Er(s), u = o.negativeStr, f = o.trimStr, d = "" + u + f.padStart(r + 1, "0");
    return new e(d.slice(0, -r) + "." + d.slice(-r));
  }, e.prototype.equals = function(n) {
    return this.toString() === (n == null ? void 0 : n.toString());
  }, e.prototype.less = function(n) {
    return this.isInvalid || n.isInvalid ? false : this.add(n.negate().toString()).toNumber() < 0;
  }, e.prototype.toNumber = function() {
    return this.isNaN ? NaN : Number(this.toString());
  }, e.prototype.toString = function(n) {
    n === void 0 && (n = { safe: true });
    var t = n.safe, r = n.precision, a = t ? this.isInvalid ? "" : Er("" + this.getMark() + this.getIntegerStr() + "." + this.getDecimalStr()).fullStr : this.origin;
    return typeof r == "number" ? oa(a, r) : a;
  }, e;
})(), Jo = (function() {
  function e(n) {
    this.origin = "", this.origin = String(n), this.number = Number(n), !n && n !== 0 || !this.origin.trim() ? this.isEmpty = true : this.isNaN = Number.isNaN(this.number);
  }
  return Object.defineProperty(e.prototype, "isInvalid", { get: function() {
    return this.isEmpty || this.isNaN;
  }, enumerable: false, configurable: true }), e.prototype.negate = function() {
    return new e(-this.toNumber());
  }, e.prototype.equals = function(n) {
    return this.toNumber() === (n == null ? void 0 : n.toNumber());
  }, e.prototype.less = function(n) {
    return this.isInvalid || n.isInvalid ? false : this.add(n.negate().toString()).toNumber() < 0;
  }, e.prototype.add = function(n) {
    var t = new e(n);
    if (t.isInvalid) return this;
    if (this.isInvalid) return t;
    var r = this.number + t.number;
    if (r > Number.MAX_SAFE_INTEGER) return new e(Number.MAX_SAFE_INTEGER);
    if (r < Number.MIN_SAFE_INTEGER) return new e(Number.MIN_SAFE_INTEGER);
    var a = Math.max(Wn(this.number), Wn(t.number));
    return new e(r.toFixed(a));
  }, e.prototype.toNumber = function() {
    return this.number;
  }, e.prototype.toString = function(n) {
    n === void 0 && (n = { safe: true });
    var t = n.safe, r = n.precision, a = t ? this.isInvalid ? "" : Ti(this.number) : this.origin;
    return typeof r == "number" ? oa(a, r) : a;
  }, e;
})();
function Tt(e) {
  return _n() ? new Go(e) : new Jo(e);
}
function oa(e, n, t) {
  if (t === void 0 && (t = false), e === "") return "";
  var r = ".", a = Er(e), l = a.negativeStr, s = a.integerStr, o = a.decimalStr, u = "" + r + o, f = "" + l + s;
  if (n >= 0) {
    var d = Number(o[n]);
    if (d >= 5 && !t) {
      var w = Tt(e).add(l + "0." + "0".repeat(n) + (10 - d));
      return oa(w.toString(), n, t);
    }
    return n === 0 ? f : "" + f + r + o.padEnd(n, "0").slice(0, n);
  }
  return "" + f + (u === ".0" ? "" : u);
}
var fn = function() {
  return fn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fn.apply(this, arguments);
}, $o = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, yr = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, es = 200, ts = 1e3, rs = { max: 1 / 0, min: -1 / 0, step: 1, mode: "embed", parser: function(e) {
  return (e == null ? void 0 : e.replace(/[^\w\.-]+/g, "")) || "";
} };
function ns(e, n) {
  var t, r, a = v.useContext(Ae), l = a.getPrefixCls, s = a.size, o = a.componentConfig, u = a.rtl, f = gt(e, rs, o == null ? void 0 : o.InputNumber), d = f.className, w = f.style, h = f.defaultValue, N = f.disabled, S = f.error, p = f.readOnly, g = f.strictMode, E = f.placeholder, m = f.hideControl, b = f.suffix, j = f.prefix, x = f.icons, L = f.mode, D = f.size, P = f.step, O = f.precision, T = f.min, V = f.max, R = f.parser, y = f.formatter, Z = f.onBlur, I = f.onFocus, F = f.onChange, ne = f.onKeyDown, k = $o(f, ["className", "style", "defaultValue", "disabled", "error", "readOnly", "strictMode", "placeholder", "hideControl", "suffix", "prefix", "icons", "mode", "size", "step", "precision", "min", "max", "parser", "formatter", "onBlur", "onFocus", "onChange", "onKeyDown"]), A = l("input-number"), M = D || s, G = (function() {
    if (zt(O)) {
      var re = ("" + P).split(".")[1], be = re && re.length || 0;
      return Math.max(be, O);
    }
    return null;
  })(), fe = yr(v.useState(function() {
    return Tt("value" in f ? f.value : "defaultValue" in f ? h : void 0);
  }), 2), Q = fe[0], se = fe[1], le = yr(v.useState(""), 2), pe = le[0], ae = le[1], U = yr(v.useState(false), 2), K = U[0], ee = U[1], X = yr(v.useState(false), 2), $ = X[0], te = X[1], W = v.useRef(null), _ = v.useRef(null), oe = v.useRef(false), z = v.useMemo(function() {
    return "value" in f ? Tt(f.value) : Q;
  }, [f.value, Q]), ve = yr(v.useMemo(function() {
    return [Tt(V), Tt(T)];
  }, [V, T]), 2), q = ve[0], ge = ve[1];
  v.useImperativeHandle(n, function() {
    return _.current;
  }, []);
  var Se = function(re, be) {
    if (se(re), !re.equals(z) && F) {
      var Oe = re.toString({ safe: true, precision: G });
      F(re.isEmpty ? void 0 : g ? Oe : re.isNaN ? NaN : Number(Oe), be);
    }
  }, Y = function() {
    W.current && clearTimeout(W.current), W.current = null;
  }, ue = v.useCallback(function(re) {
    var be = re;
    return be.less(ge) ? be = ge : q.less(be) && (be = q), be;
  }, [ge, q]);
  v.useEffect(function() {
    return function() {
      return Y();
    };
  }, []), v.useEffect(function() {
    oe.current = false;
  }, [f.value]), v.useEffect(function() {
    var re = z.less(ge) || q.less(z);
    re && oe.current && Se(ue(z), "outOfRange"), ee(re);
  }, [ge, q, z, ue]);
  var ce = function(re, be, Oe) {
    if (Oe === void 0 && (Oe = false), re.persist(), re.preventDefault(), te(false), !(N || p)) {
      var qe = z.isInvalid ? Tt(T === -1 / 0 || T <= 0 && V >= 0 ? 0 : T) : z.add(be === "plus" ? P : -P);
      if (Se(ue(qe), be === "plus" ? "increase" : "decrease"), _.current && _.current.focus(), Oe) {
        var Ct = W.current === null;
        W.current = setTimeout(function() {
          return re.target.dispatchEvent(re.nativeEvent);
        }, Ct ? ts : es);
      }
    }
  }, de = v.useMemo(function() {
    var re;
    return $ ? re = R ? "" + R(pe) : pe : zt(G) ? re = z.toString({ safe: true, precision: G }) : z.isInvalid ? re = "" : re = z.toString(), y ? y(re, { userTyping: $, input: pe }) : re;
  }, [z, pe, $, G, R, y]), we = Ko({ inputElement: (r = _.current) === null || r === void 0 ? void 0 : r.dom, inputValue: de }), De = { onChange: function(re, be) {
    te(true), re = re.trim().replace(/。/g, ".");
    var Oe = R ? R(re) : re;
    (zt(+Oe) || Oe === "-" || !Oe || Oe === ".") && (ae(re), Se(ue(Tt(Oe)), "manual"), we(be));
  }, onKeyDown: function(re) {
    var be = re.key;
    be === Ol.key ? (re.stopPropagation(), ce(re, "minus")) : be === Pl.key && (re.stopPropagation(), ce(re, "plus")), Y(), ne == null || ne(re);
  }, onFocus: function(re) {
    var be, Oe;
    oe.current = true, ae((Oe = (be = _.current) === null || be === void 0 ? void 0 : be.dom) === null || Oe === void 0 ? void 0 : Oe.value), I == null || I(re);
  }, onBlur: function(re) {
    Se(ue(z), "outOfRange"), te(false), Z == null || Z(re);
  } }, We = function(re) {
    return p ? {} : { onMouseDown: function(be) {
      return ce(be, re, true);
    } };
  }, Me = !m && L === "button", $e = !m && !p && L === "embed", Ke = function(re, be) {
    var Oe, qe = !N && (z.isInvalid || (re === "plus" ? q.isInvalid || z.less(q) : ge.isInvalid || ge.less(z)));
    return i.createElement("div", fn({ className: me(A + "-step-button", (Oe = {}, Oe[A + "-step-button-disabled"] = !qe, Oe)), onMouseLeave: Y, onMouseUp: Y }, qe ? We(re) : {}), be);
  };
  return i.createElement(Xe, fn({ _ignorePropsFromGlobal: true, role: "spinbutton", "aria-valuemax": V, "aria-valuemin": T, "aria-valuenow": z.isEmpty ? void 0 : z.toNumber() }, rr(k, ["allowClear"]), De, { style: w, className: me(A, A + "-mode-" + L, A + "-size-" + M, (t = {}, t[A + "-rtl"] = u, t[A + "-readonly"] = p, t[A + "-illegal-value"] = !z.isEmpty && K, t), d), ref: _, size: M, error: S, disabled: N, readOnly: p, value: de, placeholder: E, prefix: j && i.createElement("div", { className: A + "-prefix" }, j), suffix: i.createElement(i.Fragment, null, $e && i.createElement("div", { className: A + "-step-layer" }, Ke("plus", x && x.up ? x.up : i.createElement(la, null)), Ke("minus", x && x.down ? x.down : i.createElement(Sl, null))), b && i.createElement("div", { className: A + "-suffix" }, b)), addBefore: Me && Ke("minus", x && x.minus ? x.minus : i.createElement(Fl, null)), addAfter: Me && Ke("plus", x && x.plus ? x.plus : i.createElement(Hl, null)) }));
}
var rn = i.forwardRef(ns);
rn.displayName = "InputNumber";
var dn = function() {
  return dn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, dn.apply(this, arguments);
}, as = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, is = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
};
function ls(e, n) {
  var t, r, a = e.style, l = e.className, s = e.prefixCls, o = e.allowClear, u = e.status, f = e.error, d = e.disabled, w = e.placeholder, h = e.format, N = e.size, S = e.onClear, p = e.editable, g = e.value, E = e.inputValue, m = e.onPressEnter, b = e.suffixIcon, j = e.prefix, x = e.onChange, L = e.popupVisible, D = e.isPlaceholder, P = e.inputProps, O = as(e, ["style", "className", "prefixCls", "allowClear", "status", "error", "disabled", "placeholder", "format", "size", "onClear", "editable", "value", "inputValue", "onPressEnter", "suffixIcon", "prefix", "onChange", "popupVisible", "isPlaceholder", "inputProps"]), T = v.useContext(Ae), V = T.getPrefixCls, R = T.size, y = T.locale, Z = T.rtl, I = v.useRef(null), F = is(v.useState(false), 2), ne = F[0], k = F[1], A = N || R, M = v.useRef(null);
  v.useImperativeHandle(n, function() {
    return { focus: function() {
      I.current && I.current.focus && I.current.focus();
    }, blur: function() {
      I.current && I.current.blur && I.current.blur();
    }, input: I.current, getRootDOMNode: function() {
      return M.current;
    } };
  });
  function G(K) {
    var ee;
    (ee = P == null ? void 0 : P.onKeyDown) === null || ee === void 0 || ee.call(P, K);
    var X = K.keyCode || K.which;
    X === Si.code && (m == null || m());
  }
  function fe(K) {
    var ee;
    (ee = P == null ? void 0 : P.onChange) === null || ee === void 0 || ee.call(P, K), x == null || x(K);
  }
  var Q = "";
  E !== void 0 ? Q = E : g && !Ee(g) && (Q = typeof h == "function" ? h(g) : g.locale(y.dayjsLocale).format(h));
  var se = p ? {} : { readOnly: true }, le = s || V("picker"), pe = u || (f ? "error" : void 0), ae = ne || L, U = me(le, le + "-size-" + A, (t = {}, t[le + "-focused"] = ae, t[le + "-disabled"] = d, t[le + "-has-prefix"] = j, t[le + "-" + pe] = pe, t[le + "-rtl"] = Z, t), l);
  return i.createElement("div", dn({ style: a, className: U, ref: M }, rr(O, ["onChange", "onPressEnter"])), j && i.createElement("div", { className: le + "-prefix" }, j), i.createElement("div", { className: me(le + "-input", (r = {}, r[le + "-input-placeholder"] = D, r)) }, i.createElement("input", dn({ ref: I }, P, { disabled: d, placeholder: w, className: le + "-start-time", value: Q, onKeyDown: G, onChange: fe }, se, { onFocus: function(K) {
    var ee;
    k(true), (ee = P == null ? void 0 : P.onFocus) === null || ee === void 0 || ee.call(P, K);
  }, onBlur: function(K) {
    var ee;
    k(false), (ee = P == null ? void 0 : P.onBlur) === null || ee === void 0 || ee.call(P, K);
  } }))), i.createElement("div", { className: le + "-suffix" }, o && Q && i.createElement(ra, { prefix: le, onClick: S, className: le + "-clear-icon" }, i.createElement(jr, null)), i.createElement("span", { className: le + "-suffix-icon" }, b)));
}
const os = v.forwardRef(ls);
function Qa(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ga(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Qa(Object(t), true).forEach(function(r) {
      Et(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ss(e, n) {
  var t = v.useContext(xt), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, s = e.className, o = Ga(Ga({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-calendar") });
  return l && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", bt({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "M7 22h34M14 5v8m20-8v8M8 41h32a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1Z" }));
}
var En = i.forwardRef(ss);
En.defaultProps = { isIcon: true };
En.displayName = "IconCalendar";
function Ja(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function $a(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ja(Object(t), true).forEach(function(r) {
      Et(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ja(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function cs(e, n) {
  var t = v.useContext(xt), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, s = e.className, o = $a($a({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-calendar-clock") });
  return l && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", bt({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "M7 22h34V10a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h18M34 5v8M14 5v8" }), i.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M36 44a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1.5-9.75V29h-3v8.25H42v-3h-4.5Z", clipRule: "evenodd" }));
}
var Cn = i.forwardRef(cs);
Cn.defaultProps = { isIcon: true };
Cn.displayName = "IconCalendarClock";
function mn(e) {
  return e && Ee(e) ? Ue(e[0]) && Ue(e[1]) ? 2 : !Ue(e[0]) && !Ue(e[1]) ? 0 : 1 : 0;
}
function Nt(e, n, t) {
  if (typeof n != "function") return false;
  var r = function(u, f, d) {
    for (var w = f; w <= d; ) {
      var h = void 0;
      switch (u) {
        case "date": {
          if (h = Ne.set(e, "date", w), !n(h)) return false;
          break;
        }
        case "month": {
          if (h = Ne.set(e, "month", w), !Nt(h, n, "month")) return false;
          break;
        }
        case "year": {
          if (h = Ne.set(e, "year", w), !Nt(h, n, "year")) return false;
          break;
        }
      }
      w += 1;
    }
    return true;
  };
  switch (t) {
    case "date":
    case "week":
      return n(e);
    case "month": {
      var a = 1, l = e.endOf("month").get("date");
      return r("date", a, l);
    }
    case "quarter": {
      var s = Math.floor(e.get("month") / 3) * 3, o = s + 2;
      return r("month", s, o);
    }
    case "year":
      return r("month", 0, 11);
    default:
      return false;
  }
}
function Vi(e) {
  var n, t;
  return ((t = (n = Je.Ls) === null || n === void 0 ? void 0 : n[e]) === null || t === void 0 ? void 0 : t.weekStart) || 0;
}
function vt(e, n) {
  return e && e.locale(n);
}
function mt(e, n) {
  return Ee(e) ? e[n] : e;
}
function us(e, n) {
  var t = e.prefixCls, r = e.shortcuts, a = r === void 0 ? [] : r, l = e.onSelectNow, s = e.nowText, o = e.showNowBtn, u = e.showTime, f = e.onMouseEnterShortcut, d = e.onMouseLeaveShortcut, w = e.nowDisabled, h = e.disabledDate, N = e.mode, S = N === void 0 ? "date" : N;
  function p(x) {
    f && f(x);
  }
  function g(x) {
    d && d(x);
  }
  function E(x, L) {
    var D = e.onSelectShortcut;
    m(x) || D && D(x, L);
  }
  function m(x) {
    var L = typeof x.value == "function" && x.value();
    return Ue(L) ? Nt(L, h, S) : Ee(L) ? L.some(function(D) {
      return Ue(D) && Nt(D, h, S);
    }) : false;
  }
  var b = Ee(a) && a.length > 0, j = o && u && !b;
  return i.createElement("div", { ref: n, className: t + "-shortcuts" }, j && i.createElement(he, { size: "mini", disabled: w, onClick: l }, s), b && a.map(function(x, L) {
    var D = m(x);
    return i.createElement(he, { key: L, size: "mini", disabled: D, onMouseEnter: function() {
      return p(x);
    }, onMouseLeave: function() {
      return g(x);
    }, onClick: function(P) {
      return E(x, P);
    } }, x.text);
  }));
}
const sa = v.forwardRef(us);
function ei(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ti(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ei(Object(t), true).forEach(function(r) {
      Et(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ei(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function fs(e, n) {
  var t = v.useContext(xt), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, s = e.className, o = ti(ti({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-link") });
  return l && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", bt({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485" }));
}
var ca = i.forwardRef(fs);
ca.defaultProps = { isIcon: true };
ca.displayName = "IconLink";
var Yn = function() {
  return Yn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Yn.apply(this, arguments);
}, ds = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, ms = { hoverable: true };
function ps(e, n) {
  var t, r = v.useContext(Ae), a = r.getPrefixCls, l = r.componentConfig, s = r.rtl, o = gt(e, ms, l == null ? void 0 : l.Link), u = o.className, f = o.style, d = o.children, w = o.icon, h = o.status, N = o.disabled, S = o.hoverable, p = ds(o, ["className", "style", "children", "icon", "status", "disabled", "hoverable"]), g = ta({ onKeyDown: o.onKeyDown }), E = a("link"), m = "href" in o ? "a" : "span", b = function(j) {
    N ? (j.preventDefault(), j.stopPropagation()) : o.onClick && o.onClick(j);
  };
  return i.createElement(m, Yn({ className: me(E, (t = {}, t[E + "-disabled"] = N, t[E + "-is-" + h] = h, t[E + "-with-icon"] = w, t[E + "-hoverless"] = !S, t[E + "-rtl"] = s, t), u), ref: n, tabIndex: N ? -1 : void 0 }, p, { style: f, onClick: b }, g({ onPressEnter: b })), w ? i.createElement("span", { className: E + "-icon" }, w === true ? i.createElement(ca, null) : w) : null, d);
}
var zi = v.forwardRef(ps);
zi.displayName = "Link";
function Hi(e) {
  var n = e.showTime, t = e.prefixCls, r = e.DATEPICKER_LOCALE, a = e.disabled, l = e.onClickConfirmBtn, s = e.onClickSelectTimeBtn, o = e.isTimePanel, u = e.onSelectNow, f = e.showNowBtn, d = e.shortcuts, w = e.onMouseEnterShortcut, h = e.onMouseLeaveShortcut, N = e.onSelectShortcut, S = e.extra, p = e.mode, g = e.shortcutsPlacementLeft, E = e.disableConfirm, m = e.nowDisabled, b = e.disabledDate, j = Ee(d) && d.length > 0, x = f && n && !j, L = x || j && !g;
  return i.createElement("div", { className: t + "-footer" }, S && i.createElement("div", { className: t + "-footer-extra-wrapper" }, S), !n && f && p === "date" && i.createElement("div", { className: t + "-footer-now-wrapper" }, i.createElement(zi, { disabled: m, onClick: u }, r.today)), L || n ? i.createElement("div", { className: t + "-footer-btn-wrapper" }, g ? i.createElement("div", null) : i.createElement(sa, { shortcuts: d, prefixCls: t, onSelectNow: u, nowText: r.now, showNowBtn: f, onMouseEnterShortcut: w, onMouseLeaveShortcut: h, onSelectShortcut: N, showTime: n, nowDisabled: m, disabledDate: b, mode: p }), n && i.createElement(i.Fragment, null, i.createElement(he, { type: "text", size: "mini", onClick: s, className: o ? t + "-btn-select-date" : t + "-btn-select-time" }, o ? r.selectDate : r.selectTime), !E && i.createElement(he, { className: t + "-btn-confirm", type: "primary", size: "mini", disabled: a, onClick: l }, r.ok))) : null);
}
const _t = v.createContext({});
var pt = function() {
  return pt = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, pt.apply(this, arguments);
}, dt = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
};
function vs(e) {
  var n = e.format, t = e.picker, r = e.showTime, a, l = e.mode || t.props.pickerType;
  switch (l) {
    case "date":
      a = r ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
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
  return n && (a = n), a;
}
var ri = { allowClear: true, unmountOnExit: true, position: "bl", editable: true, showNowBtn: true }, hs = { bottom: 4 }, gs = function(e, n) {
  var t = v.useContext(Ae), r = t.getPrefixCls, a = t.locale, l = t.size, s = t.componentConfig, o = t.rtl;
  o && (ri.position = "br");
  var u = gt(e, ri, s == null ? void 0 : s.DatePicker), f = u.allowClear, d = u.className, w = u.style, h = u.placeholder, N = u.getPopupContainer, S = u.disabled, p = u.position, g = u.error, E = u.status, m = u.unmountOnExit, b = u.editable, j = u.triggerProps, x = u.picker, L = u.shortcuts, D = u.onSelect, P = u.onVisibleChange, O = u.value, T = u.onChange, V = u.icons, R = u.disabledDate, y = u.showTime, Z = u.showNowBtn, I = u.onSelectShortcut, F = u.extra, ne = u.shortcutsPlacementLeft, k = u.onOk, A = u.defaultPickerValue, M = u.pickerValue, G = u.onPickerValueChange, fe = u.triggerElement, Q = u.utcOffset, se = u.timezone, le = u.panelRender, pe = u.inputProps, ae = r("picker"), U = a.DatePicker, K = ht(u.dayStartOfWeek) ? Vi(a.dayjsLocale) : u.dayStartOfWeek, ee = u.mode || x.props.pickerType, X = v.useRef(null), $ = v.useRef(null), te = v.useRef(null);
  v.useImperativeHandle(n, function() {
    return { focus: function() {
      X.current && X.current.focus && X.current.focus();
    }, blur: function() {
      X.current && X.current.blur && X.current.blur();
    } };
  }, []);
  var W = vs(u), _ = W;
  typeof _ == "function" && (_ = y ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD");
  function oe() {
    var B;
    return u.value ? B = ke(u.value, _, Q, se) : B = ke(u.defaultValue, _, Q, se), B;
  }
  var z = dt(v.useState(oe()), 2), ve = z[0], q = z[1], ge = dt(v.useState(u.popupVisible), 2), Se = ge[0], Y = ge[1], ue = dt(v.useState(false), 2), ce = ue[0], de = ue[1], we = dt(v.useState(), 2), De = we[0], We = we[1], Me = "popupVisible" in u ? u.popupVisible : Se, $e = v.useRef(Me), Ke = "value" in u ? ke(O, _, Q, se) : ve, re = Ke || ke(A, _) || Ie(), be = dt(v.useState(), 2), Oe = be[0], qe = be[1], Ct = dt(v.useState(), 2), Wt = Ct[0], Ye = Ct[1], st = dt(v.useState(), 2), Ir = st[0], nr = st[1], wt = dt(v.useState(re), 2), Lr = wt[0], lt = wt[1], jt = ke(M, _) || Lr, et = Ir || Wt || Ke, Ar = dt(v.useState(ee), 2), Yt = Ar[0], ar = Ar[1], ir = _e(y) && ke(y.defaultValue, y.format || "HH:mm:ss") || Ie(Q, se), kt = et || ir, lr = Ie(Q, se), It = Nt(lr, R, "date");
  function Dr() {
    var B, ie;
    X.current && ((ie = (B = X.current).focus) === null || ie === void 0 || ie.call(B));
  }
  function nt() {
    X.current && X.current.blur && X.current.blur();
  }
  var at = Or(Q), tt = Or(se);
  Pr(function() {
    if (ve && (at !== Q || se !== tt)) {
      var B = ot(ve, at, tt);
      q(er(B, Q, se));
    }
  }, [Q, at, se, tt]), v.useEffect(function() {
    qe(void 0), We(void 0);
    var B = $e.current;
    $e.current = Me, Me ? (lt(re), ne && (te.current.style.maxHeight = $.current.clientHeight + "px")) : (Ye(void 0), nr(void 0), setTimeout(function() {
      var ie;
      de(false), ar(ee), B && document.activeElement === ((ie = X.current) === null || ie === void 0 ? void 0 : ie.input) && nt();
    }, 100));
  }, [Me]);
  function Le(B) {
    B ? Be(B, function() {
      Dr();
    }) : Be(false);
  }
  function Ve(B) {
    G && G(B.format(_), B);
  }
  function Be(B, ie) {
    Y(B), P && P(B), ie == null || ie();
  }
  function or(B) {
    B.stopPropagation(), q(void 0), Ye(void 0), ct(void 0), u.onClear && u.onClear();
  }
  function Mr() {
    var B = vt(et, a.dayjsLocale);
    Tr(), k && k(B && B.format(_), B);
  }
  function Tr() {
    q(et), ct(et), Be(false);
  }
  function Bt(B) {
    var ie = et || Ie(Q, se), Pe = Ot(ie, B);
    q(Pe), ct(Pe), Be(false);
  }
  function sr(B, ie, Pe) {
    if (qe(void 0), We(void 0), y) {
      var He = Pe ? ie : Ot(ie, kt);
      Ye(He), lt(He);
      var Ze = vt(ot(He, Q, se), a.dayjsLocale);
      D && D(Ze.format(_), Ze);
    } else {
      var Ze = vt(ot(ie, Q, se).locale(a.dayjsLocale), a.dayjsLocale);
      D && D(Ze ? Ze.format(_) : void 0, Ze), q(ie), ct(ie), Be(false);
    }
  }
  function ct(B) {
    if (To(B, Ke)) {
      var ie = vt(ot(B, Q, se), a.dayjsLocale);
      T && T(ie ? ie.format(_) : void 0, ie);
    }
  }
  function cr(B, ie) {
    var Pe = et || Ie(Q, se), He = Ot(Pe, ie);
    Ye(He);
    var Ze = vt(ot(He, Q, se), a.dayjsLocale);
    D && D(Ze.format(_), Ze);
  }
  function Pn(B) {
    return typeof B == "string" && Ce(B, _).format(_) === B && (typeof R == "function" ? !R(Ce(B, _)) : true);
  }
  function ur(B) {
    var ie = B.target.value;
    if (qe(ie), Me || Be(true), Pn(ie)) {
      var Pe = ke(ie, _);
      Ye(Pe), lt(Pe), qe(void 0);
    }
  }
  function Rr() {
    et ? (Tr(), nt()) : Me && Be(false);
  }
  function it(B, ie, Pe) {
    Pe === void 0 && (Pe = 1);
    var He;
    B === "prev" && (He = Ne.subtract(jt, Pe, ie)), B === "next" && (He = Ne.add(jt, Pe, ie)), Ve(He), lt(He);
  }
  function Lt(B) {
    if (B === void 0 && (B = ee), B === "date" || B === "week") return { onPrev: function() {
      return it("prev", "month");
    }, onNext: function() {
      return it("next", "month");
    }, onSuperPrev: function() {
      return it("prev", "year");
    }, onSuperNext: function() {
      return it("next", "year");
    } };
    if (B === "month" || B === "quarter") return { onSuperPrev: function() {
      return it("prev", "year");
    }, onSuperNext: function() {
      return it("next", "year");
    } };
    if (B === "year") return { onSuperPrev: function() {
      return it("prev", "year", 10);
    }, onSuperNext: function() {
      return it("next", "year", 10);
    } };
  }
  function At() {
    if (!It) {
      var B = vt(lr, a.dayjsLocale);
      Ve(B), sr(B.format(_), B, true);
    }
  }
  function fr(B, ie) {
    if (!ie) {
      var Pe = y ? Ot(B, kt) : B;
      We(typeof W == "function" ? W(B) : Pe.locale(a.dayjsLocale).format(_));
    }
  }
  function dr() {
    We(void 0);
  }
  function Nn(B) {
    if (typeof B.value == "function" && Ue(B.value())) {
      var ie = ke(B.value(), _, Q, se);
      lt(ie), Ve(ie), nr(ie);
    }
  }
  function jn() {
    var B = Wt || Ke || Ie(Q, se);
    nr(void 0), lt(B), Ve(B);
  }
  function Dt(B) {
    if (I && I(B), typeof B.value == "function" && Ue(B.value())) {
      var ie = ke(B.value(), _, Q, se);
      if (Nt(ie, R, ee)) return;
      q(ie), ct(ie), Be(false);
    }
  }
  function mr() {
    de(!ce);
  }
  function ut(B) {
    var ie, Pe = me(ae + "-container", (ie = {}, ie[ae + "-panel-only"] = B, ie[ae + "-container-shortcuts-placement-left"] = Ee(L) && ne, ie[ae + "-container-rtl"] = o, ie), B ? d : ""), He = { prefixCls: ae, showTime: y, shortcuts: L, onSelectNow: At, showNowBtn: Z, onMouseEnterShortcut: Nn, onMouseLeaveShortcut: jn, onSelectShortcut: Dt, nowDisabled: It, disabledDate: R, mode: ee }, Ze = y && Yt === "date" || F || Ee(L) && L.length && !ne || !y && Yt === "date" && Z, zr = !!(u.timepickerProps && u.timepickerProps.disableConfirm || _e(y) && y.disableConfirm), vr = i.createElement(i.Fragment, null, i.cloneElement(x, pt(pt(pt({}, rr(u, ["style"])), Lt()), { getHeaderOperations: Lt, onSelect: sr, onTimePickerSelect: cr, onConfirmValue: Bt, onSelectNow: At, popupVisible: Me, format: _, value: et, pageShowDate: jt, localeName: a.dayjsLocale, setPageShowDate: function(hr) {
      lt(hr), Ve(hr);
    }, timeValue: kt, isTimePanel: ce, panelMode: Yt, setPanelMode: ar, onMouseEnterCell: fr, onMouseLeaveCell: dr })), !!Ze && i.createElement(Hi, pt({}, He, { DATEPICKER_LOCALE: U, disabled: !et, onClickConfirmBtn: Mr, extra: F, mode: Yt, nowDisabled: It, disabledDate: R, shortcutsPlacementLeft: ne, onClickSelectTimeBtn: mr, isTimePanel: ce, disableConfirm: zr }))), Hr = ne ? i.createElement(i.Fragment, null, i.createElement(sa, pt({ ref: te }, He)), i.createElement("div", { ref: $, className: ae + "-panel-wrapper" }, vr)) : vr, kn = typeof le == "function" ? le(Hr) : Hr;
    return i.createElement("div", { className: Pe, onClick: function() {
      X.current && X.current.focus && X.current.focus();
    }, style: B ? w : {} }, kn);
  }
  var Vr = u.size || l, Zt = V && V.inputSuffix === null ? null : V && V.inputSuffix || (y ? i.createElement(Cn, null) : i.createElement(En, null)), pr = { style: w, className: d, popupVisible: Me, format: W, disabled: S, error: g, status: E, size: Vr, onPressEnter: Rr, onClear: or, prefix: u.prefix, suffixIcon: Zt, editable: b && typeof W != "function", allowClear: f };
  return i.createElement(_t.Provider, { value: { utcOffset: Q, timezone: se, weekStart: K } }, fe === null ? ut(true) : i.createElement(Oi, pt({ popup: ut, trigger: "click", clickToClose: false, position: p, disabled: S, popupAlign: hs, getPopupContainer: N, onVisibleChange: Le, popupVisible: Me, classNames: "slideDynamicOrigin", unmountOnExit: m }, j), fe || i.createElement(os, pt({}, aa(u), pr, { ref: X, placeholder: h || U.placeholder[ee], popupVisible: Me, value: Wt || Ke, inputValue: De || Oe, prefixCls: ae, onChange: ur, isPlaceholder: !!De, inputProps: pe }))));
}, ys = v.forwardRef(gs), Cr = function() {
  return Cr = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Cr.apply(this, arguments);
}, xs = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Dn = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, ni = function(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, a = n.length, l; r < a; r++) (l || !(r in n)) && (l || (l = Array.prototype.slice.call(n, 0, r)), l[r] = n[r]);
  return e.concat(l || Array.prototype.slice.call(n));
};
function bs(e, n) {
  var t, r = e.allowClear, a = e.error, l = e.status, s = e.style, o = e.className, u = e.disabled, f = e.placeholder, d = f === void 0 ? [] : f, w = e.value, h = w === void 0 ? [] : w, N = e.popupVisible, S = e.format, p = e.size, g = e.onClear, E = e.editable, m = e.inputValue, b = e.onPressEnter, j = e.onPressTab, x = e.onChange, L = e.separator, D = e.suffixIcon, P = e.changeFocusedInputIndex, O = e.focusedInputIndex, T = e.isPlaceholder, V = e.prefix, R = e.inputProps, y = R === void 0 ? [] : R, Z = e.onBlur, I = xs(e, ["allowClear", "error", "status", "style", "className", "disabled", "placeholder", "value", "popupVisible", "format", "size", "onClear", "editable", "inputValue", "onPressEnter", "onPressTab", "onChange", "separator", "suffixIcon", "changeFocusedInputIndex", "focusedInputIndex", "isPlaceholder", "prefix", "inputProps", "onBlur"]), F = v.useContext(Ae), ne = F.getPrefixCls, k = F.size, A = F.locale, M = F.rtl, G = v.useRef(null), fe = v.useRef(null), Q = v.useRef(null), se = Dn(v.useState([false, false]), 2), le = se[0], pe = se[1], ae = Ee(u) ? u[0] : u, U = Ee(u) ? u[1] : u;
  v.useImperativeHandle(n, function() {
    return { focus: function(Y) {
      var ue = typeof Y == "number" ? Y : O, ce = ue === 0 ? G : fe;
      (O === 0 && !ae || O === 1 && !U) && ce.current && ce.current.focus && ce.current.focus();
    }, blur: function() {
      O === 0 && G.current && G.current.blur && G.current.blur(), O === 1 && fe.current && fe.current.blur && fe.current.blur();
    }, getRootDOMNode: function() {
      return Q.current;
    } };
  });
  function K(Y, ue) {
    var ce, de;
    (de = (ce = y == null ? void 0 : y[ue]) === null || ce === void 0 ? void 0 : ce.onClick) === null || de === void 0 || de.call(ce, Y), O !== ue && P(ue);
  }
  function ee(Y, ue) {
    var ce, de, we = Y.keyCode || Y.which;
    (de = (ce = y == null ? void 0 : y[ue]) === null || ce === void 0 ? void 0 : ce.onKeyDown) === null || de === void 0 || de.call(ce, Y), we === Si.code && (b == null || b()), we === Nl.code && j && j(Y);
  }
  function X(Y, ue) {
    var ce, de;
    Y.stopPropagation(), (de = (ce = y == null ? void 0 : y[ue]) === null || ce === void 0 ? void 0 : ce.onChange) === null || de === void 0 || de.call(ce, Y), x && x(Y);
  }
  function $(Y, ue) {
    var ce, de;
    pe(function(we) {
      return we[ue] = false, ni([], Dn(we), false);
    }), (de = (ce = y == null ? void 0 : y[ue]) === null || ce === void 0 ? void 0 : ce.onBlur) === null || de === void 0 || de.call(ce, Y), Z == null || Z(Y);
  }
  function te(Y, ue) {
    var ce, de;
    (ue === 0 || ue === 1) && (pe(function(we) {
      return we[ue] = true, ni([], Dn(we), false);
    }), O !== ue && P(ue, true)), (de = (ce = y == null ? void 0 : y[ue]) === null || ce === void 0 ? void 0 : ce.onFocus) === null || de === void 0 || de.call(ce, Y);
  }
  var W = ne("picker"), _ = p || k, oe = le[0] || le[1] || !!N, z = l || (a ? "error" : void 0), ve = me(W, W + "-range", W + "-size-" + _, (t = {}, t[W + "-focused"] = oe, t[W + "-disabled"] = ae && U, t[W + "-" + z] = z, t[W + "-rtl"] = M, t[W + "-has-prefix"] = V, t), o), q = function(Y) {
    var ue = h[Y] ? h[Y].locale(A.dayjsLocale).format(Ee(S) ? S[Y] : S) : "";
    return m && Y === O ? m : ue;
  }, ge = E ? {} : { readOnly: true };
  function Se(Y) {
    var ue;
    return me(W + "-input", (ue = {}, ue[W + "-input-active"] = O === Y, ue[W + "-input-placeholder"] = T && O === Y, ue));
  }
  return i.createElement("div", Cr({ style: s, ref: Q, className: ve }, rr(I, ["onChange", "onPressEnter"])), V && i.createElement("div", { className: W + "-prefix" }, V), i.createElement("div", { className: Se(0) }, i.createElement("input", Cr({ ref: G }, y[0], { disabled: ae, placeholder: d[0], value: q(0), onChange: function(Y) {
    return X(Y, 0);
  }, onKeyDown: function(Y) {
    return ee(Y, 0);
  }, onClick: function(Y) {
    return K(Y, 0);
  }, onBlur: function(Y) {
    return $(Y, 0);
  }, onFocus: function(Y) {
    return te(Y, 0);
  } }, ge))), i.createElement("span", { className: W + "-separator" }, L || "-"), i.createElement("div", { className: Se(1) }, i.createElement("input", Cr({ ref: fe }, y[1], { disabled: U, placeholder: d[1], value: q(1), onChange: function(Y) {
    return X(Y, 1);
  }, onKeyDown: function(Y) {
    return ee(Y, 1);
  }, onClick: function(Y) {
    return K(Y, 1);
  }, onBlur: function(Y) {
    return $(Y, 1);
  }, onFocus: function(Y) {
    return te(Y, 1);
  } }, ge))), i.createElement("div", { className: W + "-suffix" }, r && h.length === 2 && i.createElement(ra, { prefix: W, onClick: g, className: W + "-clear-icon" }, i.createElement(jr, null)), i.createElement("span", { className: W + "-suffix-icon" }, D)));
}
const Es = v.forwardRef(bs);
function nn(e) {
  var n = ["H", "h", "m", "s", "a", "A"], t = [], r = false;
  return n.forEach(function(a) {
    e.indexOf(a) !== -1 && (t.push(a), (a === "a" || a === "A") && (r = true));
  }), { list: t, use12Hours: r };
}
var Mn = /* @__PURE__ */ new Map();
function ai(e, n, t) {
  Mn.get(e) && cancelAnimationFrame(Mn.get(e)), t <= 0 && (e.scrollTop = n), Mn.set(e, requestAnimationFrame(function() {
    var r = new Vl({ from: { scrollTop: e.scrollTop }, to: { scrollTop: n }, duration: t, onUpdate: function(a) {
      e.scrollTop = a.scrollTop;
    }, easing: "quartInOut" });
    r.start();
  }));
}
function Wr(e) {
  var n = e.prefixCls, t = e.list, r = e.value, a = e.onHandleSelect, l = e.unit, s = e.popupVisible, o = e.scrollSticky, u = v.useRef(/* @__PURE__ */ new Map()), f = v.useRef(), d = v.useRef(), w = v.useRef(0), h = Or(s), N = v.useRef(f.current && f.current.scrollTop);
  v.useEffect(function() {
    var p = u.current.get(r);
    p && s && h && (ai(f.current, p.offsetTop, 150), N.current = p.offsetTop);
  }, [r]), v.useEffect(function() {
    if (s && s !== h) {
      var p = u.current.get(r);
      p && (ai(f.current, p.offsetTop, 0), N.current = p.offsetTop);
    }
  }, [s, h]), v.useEffect(function() {
    t.length <= 1 || (w.current = (d.current.clientHeight - f.current.clientHeight) / (t.length - 1));
  }, [t.length]);
  var S = v.useCallback(jl(function() {
    var p = f.current.scrollTop - N.current > 0 ? Math.ceil : Math.floor, g = p(f.current.scrollTop / w.current);
    g !== r && t[g] && !t[g].disabled && a(t[g].value, l);
  }, 100), [a]);
  return i.createElement("div", { className: me(n + "-list"), ref: f, onWheel: o ? S : void 0 }, i.createElement("ul", { ref: d }, t.map(function(p) {
    var g;
    return i.createElement("li", { key: p.value, className: me(n + "-cell", (g = {}, g[n + "-cell-disabled"] = p.disabled, g[n + "-cell-selected"] = p.selected, g)), onClick: function() {
      return !p.disabled && a(p.value, l);
    }, ref: function(E) {
      u.current.set(p.value, E);
    } }, i.createElement("div", { className: n + "-cell-inner" }, p.label));
  })));
}
const Cs = v.createContext({});
var qt = function() {
  return qt = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, qt.apply(this, arguments);
}, ws = ["am", "pm"];
function Ss(e) {
  var n;
  return (n = e.use12Hours) !== null && n !== void 0 ? n : nn(e.format).use12Hours;
}
function Os(e) {
  var n = e.format, t = n === void 0 ? "HH:mm:ss" : n, r = e.onSelect, a = e.popupVisible, l = e.step, s = l === void 0 ? {} : l, o = e.disabledHours, u = e.disabledMinutes, f = e.disabledSeconds, d = e.hideDisabledOptions, w = e.onConfirmValue, h = e.isRangePicker, N = e.confirmBtnDisabled, S = e.valueShow, p = e.setValueShow, g = e.extra, E = e.disableConfirm, m = e.hideFooter, b = e.showNowBtn, j = b === void 0 ? true : b, x = e.scrollSticky, L = v.useContext(Ae), D = L.getPrefixCls, P = L.locale, O = D("timepicker"), T = v.useContext(Cs), V = T.utcOffset, R = T.timezone, y = ke(S, t), Z = y && y.hour() >= 12 ? "pm" : "am", I = Ss(e), F = v.useCallback(function(_) {
    var oe = s.hour || 1, z = s.minute || 1, ve = s.second || 1, q = [];
    if (_ === "hour") {
      for (var ge = 0; ge < (I ? 12 : 24); ge += oe) q.push(ge);
      I && (q[0] = 12);
    }
    if (_ === "minute") for (var ge = 0; ge < 60; ge += z) q.push(ge);
    if (_ === "second") for (var ge = 0; ge < 60; ge += ve) q.push(ge);
    return q;
  }, [s.hour, s.minute, s.second, I]), ne = F("hour"), k = F("minute"), A = F("second"), M = y && y.hour();
  M = I && M > 12 ? M - 12 : M, I && M === 0 && Z === "am" && (M += 12);
  var G = y && y.minute(), fe = y && y.second(), Q = v.useCallback(function(_) {
    switch (_) {
      case "hour":
        return rt(typeof o == "function" ? ne.find(function(oe) {
          return o().indexOf(oe) === -1;
        }) || 0 : ne[0], 2, "0");
      case "minute":
        return rt(typeof u == "function" ? k.find(function(oe) {
          return u(M).indexOf(oe) === -1;
        }) || 0 : k[0], 2, "0");
      case "second":
        return rt(typeof f == "function" ? A.find(function(oe) {
          return f(M, G).indexOf(oe) === -1;
        }) || 0 : A[0], 2, "0");
      default:
        return "00";
    }
  }, [ne, k, A, o, u, f, M, G]);
  function se(_, oe) {
    var z, ve, q, ge = nn(t).list.indexOf("A") !== -1, Se = y || Ce(Q("hour") + ":" + Q("minute") + ":" + Q("second"), "HH:mm:ss"), Y = Se.hour(), ue = Se.minute(), ce = Se.second(), de = ge ? Z.toUpperCase() : Z, we = "HH:mm:ss", De;
    I && (ge ? we = we + " A" : we = we + " a"), I && (Y = Y > 12 ? Y - 12 : Y), oe === "hour" && (typeof u == "function" && u(_).includes(ue) && (ue = (z = k.find(function(We) {
      return u(_).indexOf(We) === -1;
    })) !== null && z !== void 0 ? z : 0), typeof f == "function" && f(_, ue).includes(ce) && (ce = (ve = A.find(function(We) {
      return f(_, ue).indexOf(We) === -1;
    })) !== null && ve !== void 0 ? ve : 0), De = Ce(_ + ":" + ue + ":" + ce + " " + de, we, "en")), oe === "minute" && (typeof f == "function" && f(Y, _).includes(ce) && (ce = (q = A.find(function(We) {
      return f(Y, _).indexOf(We) === -1;
    })) !== null && q !== void 0 ? q : 0), De = Ce(Y + ":" + _ + ":" + ce + " " + de, we, "en")), oe === "second" && (De = Ce(Y + ":" + ue + ":" + _ + " " + de, we, "en")), oe === "ampm" && (De = Ce(Y + ":" + ue + ":" + ce + " " + (ge ? _.toUpperCase() : _), we, "en")), De = Ce(De, we).locale(Ce.locale()), r && r(ot(De, V, R).format(t), ot(De, V, R)), h || (p && p(De), E && w(De));
  }
  function le() {
    y && w(y);
  }
  function pe() {
    var _ = Ie(), oe = Ie(V, R);
    r && r(_.format(t), _), E ? w(oe) : p && p(oe);
  }
  var ae = { prefixCls: O, onHandleSelect: se, popupVisible: a, scrollSticky: x };
  function U() {
    var _ = d && typeof o == "function" ? ne.filter(function(z) {
      return o().indexOf(z) === -1;
    }) : ne, oe = _.map(function(z) {
      return { label: rt("" + z, 2, "0"), value: z, selected: M !== void 0 && M === z, disabled: typeof o == "function" && o().indexOf(z) !== -1 };
    });
    return i.createElement(Wr, qt({}, ae, { list: oe, value: M, unit: "hour" }));
  }
  function K() {
    var _ = d && typeof u == "function" ? k.filter(function(z) {
      return u(M).indexOf(z) === -1;
    }) : k, oe = _.map(function(z) {
      return { label: rt("" + z, 2, "0"), value: z, selected: M !== void 0 && G === z, disabled: typeof u == "function" && u(M).indexOf(z) !== -1 };
    });
    return i.createElement(Wr, qt({}, ae, { list: oe, value: G, unit: "minute" }));
  }
  function ee() {
    var _ = d && typeof f == "function" ? A.filter(function(z) {
      return f(M, G).indexOf(z) === -1;
    }) : A, oe = _.map(function(z) {
      return { label: rt("" + z, 2, "0"), value: z, selected: M !== void 0 && fe === z, disabled: typeof f == "function" && f(M, G).indexOf(z) !== -1 };
    });
    return i.createElement(Wr, qt({}, ae, { list: oe, value: fe, unit: "second" }));
  }
  function X() {
    var _ = nn(t).list.indexOf("A") !== -1, oe = ws.map(function(z) {
      return { label: _ ? z.toUpperCase() : z, value: z, selected: Z === z };
    });
    return i.createElement(Wr, qt({}, ae, { list: oe, value: Z, unit: "ampm" }));
  }
  var $ = nn(t).list, te = me(O), W = m || E && h || !h && E && !j;
  return i.createElement(i.Fragment, null, i.createElement("div", { className: te }, ($.indexOf("H") !== -1 || $.indexOf("h") !== -1) && U(), $.indexOf("m") !== -1 && K(), $.indexOf("s") !== -1 && ee(), I && X()), g && i.createElement("div", { className: O + "-footer-extra-wrapper" }, g), !W && i.createElement("div", { className: O + "-footer-btn-wrapper" }, !h && j ? i.createElement(he, { size: "mini", onClick: pe }, P.TimePicker.now) : i.createElement("div", null), !E && i.createElement(he, { type: "primary", size: "mini", onClick: le, disabled: N || !y }, P.TimePicker.ok)));
}
function wn(e) {
  var n = e.prefixCls, t = e.title, r = e.onPrev, a = e.onNext, l = e.onSuperPrev, s = e.onSuperNext, o = e.mode, u = e.value, f = e.onChangePanel, d = e.icons, w = d === void 0 ? {} : d, h = e.rtl, N = e.DATEPICKER_LOCALE, S = typeof r == "function", p = typeof l == "function", g = typeof a == "function", E = typeof s == "function", m = function(P) {
    var O;
    return me(n + "-header-icon", (O = {}, O[n + "-header-icon-hidden"] = !P, O));
  };
  function b() {
    var P = (N == null ? void 0 : N.Calendar) || {}, O = P.monthBeforeYear, T = P.monthFormat, V = P.yearFormat;
    if (t) return t;
    if (o === "date" || o === "week") {
      var R = i.createElement("span", { key: "year-node", className: n + "-header-label", onClick: function() {
        return f("year");
      } }, u.format(V || "YYYY")), y = i.createElement("span", { key: "month-node", className: n + "-header-label", onClick: function() {
        return f("month");
      } }, u.format(T || "MM"));
      return O ? [y, R] : [R, y];
    }
    if (o === "month" || o === "quarter") return i.createElement("span", { className: n + "-header-label", onClick: function() {
      return f("year");
    } }, u.format(V || "YYYY"));
  }
  var j = w.prevDouble === null, x = w.prev === null, L = w.next === null, D = w.nextDouble === null;
  return i.createElement("div", { className: n + "-header" }, !j && i.createElement("div", { className: m(p), onClick: l }, p && (j ? null : w.prevDouble || (h ? i.createElement(sn, null) : i.createElement(on, null)))), !x && i.createElement("div", { className: m(S), onClick: r }, S && (x ? null : w.prev || (h ? i.createElement(Sa, null) : i.createElement(Oa, null)))), i.createElement("div", { className: n + "-header-value" }, b()), !L && i.createElement("div", { className: m(g), onClick: a }, g && (L ? null : w.next || (h ? i.createElement(Oa, null) : i.createElement(Sa, null)))), !D && i.createElement("div", { className: m(E), onClick: s }, E && (D ? null : w.nextDouble || (h ? i.createElement(on, null) : i.createElement(sn, null)))));
}
function Ps(e) {
  var n = e.prefixCls, t = e.weekStart, r = e.isWeek, a = e.CALENDAR_LOCALE, l = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  l = l.slice(t).concat(l.slice(0, t)), r && l.unshift("");
  var s = a.week.short;
  return i.createElement("div", { className: n + "-week-list" }, l.map(function(o) {
    return i.createElement("div", { className: n + "-week-list-item", key: o }, o && s[o]);
  }));
}
function Ut(e, n) {
  if (e && Ee(e)) return e[n];
}
function Ns(e) {
  var n = e.prefixCls, t = e.value, r = e.rangeValues, a = e.valueShowHover, l = e.isSameTime, s = e.mode, o = e.hideNotInViewDates, u = mn(r), f = mn(a), d = u !== 2 && f === 2 ? br(a) : r, w = u === 2 ? br(a) : [];
  function h(N, S, p) {
    if (S && p) return l(N, S) || l(N, p) || N.isBetween(S, p, null);
  }
  return function(S, p, g, E) {
    var m, b = Ut(d, 0), j = Ut(d, 1), x = Ut(w, 0), L = Ut(w, 1), D = !S.isPrev && !S.isNext, P = t && l(S.time, t), O = l(S.time, Ie(g, E)), T = s !== "week" ? D : true;
    s === "week" && (O = Ie(g, E).isSame(S.time, "date")), s === "quarter" && (O = Ie(g, E).isSame(S.time, "quarter"));
    function V(M) {
      return T && !p && M && l(S.time, M);
    }
    var R = V(b), y = V(j), Z = V(Ut(r, 0)), I = V(Ut(r, 1)), F = V(x), ne = V(L), k = false;
    R ? k = x && b && x.isBefore(b) && h(b, x, L) : y && (k = L && j && L.isAfter(j) && h(j, x, L));
    var A = false;
    return F ? A = x && b && b.isBefore(x) && h(x, b, j) : ne && (A = L && j && j.isAfter(L) && h(L, b, j)), me(n + "-cell", (m = {}, m[n + "-cell-disabled"] = p, m[n + "-cell-hidden"] = o && !D, m[n + "-cell-in-view"] = D, m[n + "-cell-today"] = O && D, m[n + "-cell-selected"] = P || Z || I, m[n + "-cell-range-start"] = R, m[n + "-cell-range-end"] = y, m[n + "-cell-in-range"] = T && !p && h(S.time, b, j), m[n + "-cell-hover-range-start"] = F, m[n + "-cell-hover-range-end"] = ne, m[n + "-cell-hover-in-range"] = T && !p && h(S.time, x, L), m[n + "-cell-range-edge-in-hover-range"] = k, m[n + "-cell-hover-range-edge-in-range"] = A, m));
  };
}
var pn = function() {
  return pn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, pn.apply(this, arguments);
};
function Sn(e) {
  var n = e.prefixCls, t = e.isWeek, r = e.disabledDate, a = e.onSelectDate, l = e.dateRender, s = e.onMouseEnterCell, o = e.onMouseLeaveCell, u = e.CALENDAR_LOCALE, f = e.rows, d = e.showWeekList, w = e.isSameTime, h = e.format, N = e.mode, S = v.useContext(_t), p = S.utcOffset, g = S.timezone, E = S.weekStart, m = Ns(pn(pn({}, e), { isSameTime: w }));
  function b(j) {
    return j.map(function(x, L) {
      if (x.time) {
        var D = Nt(x.time, r, N), P = function() {
          return !D && a(x.time.format(h), x.time);
        };
        return i.createElement("div", { key: L, className: m(x, D, p, g), onMouseEnter: function() {
          return s && s(x.time, D);
        }, onMouseLeave: function() {
          return o && o(x.time, D);
        }, onClick: P }, l ? i.cloneElement(l(x.time)) : i.createElement("div", { className: n + "-date" }, i.createElement("div", { className: n + "-date-value" }, x.name)));
      }
      if ("weekOfYear" in x) return i.createElement("div", { key: L, className: me(n + "-cell", n + "-cell-week") }, i.createElement("div", { className: n + "-date" }, i.createElement("div", { className: n + "-date-value" }, x.weekOfYear)));
    });
  }
  return i.createElement(i.Fragment, null, d && i.createElement(Ps, { prefixCls: n, weekStart: E, isWeek: t, CALENDAR_LOCALE: u }), i.createElement("div", { className: n + "-body" }, f.map(function(j, x) {
    var L;
    return i.createElement("div", { key: x, className: me(n + "-row", (L = {}, L[n + "-row-week"] = t, L)) }, b(j));
  })));
}
var vn = function() {
  return vn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, vn.apply(this, arguments);
}, js = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
};
function tr(e) {
  var n = e.pageShowDate, t = e.style, r = e.onMouseEnterCell, a = e.onMouseLeaveCell, l = e.dateRender, s = e.disabledDate, o = e.value, u = e.locale, f = e.isRangePicker, d = e.onSelect, w = e.rangeValues, h = e.onSuperPrev, N = e.onSuperNext, S = e.format, p = e.icons, g = js(e, ["pageShowDate", "style", "onMouseEnterCell", "onMouseLeaveCell", "dateRender", "disabledDate", "value", "locale", "isRangePicker", "onSelect", "rangeValues", "onSuperPrev", "onSuperNext", "format", "icons"]), E = v.useContext(Ae), m = E.locale, b = E.getPrefixCls, j = E.rtl, x = bn(m.DatePicker, u), L = x.Calendar, D = v.useContext(_t), P = D.utcOffset, O = D.timezone, T = b("panel-year"), V = me(T), R = f ? { rangeValues: w } : { value: o }, y = n ? n.year() : Ie(P, O).year(), Z = Math.floor(y / 10) * 10 - 1, I = an(3).map(function(A) {
    return "";
  }), F = an(4).map(function(A) {
    return I;
  }).map(function(A, M) {
    return A.map(function(G, fe) {
      return { name: Z + M * 3 + fe, time: Ce("" + (Z + M * 3 + fe), "YYYY").endOf("year"), isPrev: M === 0 && fe === 0, isNext: M === 3 && fe === 2 };
    });
  });
  function ne() {
    return i.createElement(Sn, vn({}, g, R, { prefixCls: b("picker"), rows: F, onSelectDate: d, isSameTime: function(A, M) {
      return A.isSame(M, "year");
    }, onMouseEnterCell: r, onMouseLeaveCell: a, dateRender: l, disabledDate: s, CALENDAR_LOCALE: L, mode: "year", format: S }));
  }
  var k = { onSuperPrev: h, onSuperNext: N };
  return i.createElement("div", { className: V, style: t }, i.createElement(wn, vn({ prefixCls: b("picker"), icons: p, title: F[0][1].name + " - " + F[3][2].name, rtl: j }, k)), ne());
}
var wr = function() {
  return wr = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, wr.apply(this, arguments);
}, ks = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
};
function hn(e) {
  var n = e.pageShowDate, t = e.style, r = e.onMouseEnterCell, a = e.onMouseLeaveCell, l = e.dateRender, s = e.disabledDate, o = e.value, u = e.locale, f = e.isRangePicker, d = e.onSelect, w = e.rangeValues, h = e.onSuperPrev, N = e.onSuperNext, S = e.format, p = e.getHeaderOperations, g = e.setPageShowDate, E = e.icons, m = e.panelMode, b = e.setPanelMode, j = ks(e, ["pageShowDate", "style", "onMouseEnterCell", "onMouseLeaveCell", "dateRender", "disabledDate", "value", "locale", "isRangePicker", "onSelect", "rangeValues", "onSuperPrev", "onSuperNext", "format", "getHeaderOperations", "setPageShowDate", "icons", "panelMode", "setPanelMode"]), x = v.useContext(Ae), L = x.locale, D = x.getPrefixCls, P = x.rtl, O = bn(L.DatePicker, u), T = O.Calendar, V = D("panel-month"), R = me(V), y = f ? { rangeValues: w } : { value: o }, Z = n.year(), I = v.useMemo(function() {
    for (var A = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(function(fe, Q) {
      return { name: T.month.short[fe], time: Ce(Z + "-" + rt(Q + 1, 2, "0"), "YYYY-MM").endOf("month") };
    }), M = Array(4), G = 0; G < 4; G++) M[G] = A.slice(G * 3, 3 * (G + 1));
    return M;
  }, [Z, T]);
  function F() {
    return i.createElement(Sn, wr({}, j, y, { prefixCls: D("picker"), rows: I, onSelectDate: d, isSameTime: function(A, M) {
      return A.isSame(M, "month");
    }, onMouseEnterCell: r, onMouseLeaveCell: a, dateRender: l, disabledDate: s, CALENDAR_LOCALE: T, mode: "month", format: S }));
  }
  var ne = { onSuperPrev: h, onSuperNext: N };
  function k(A) {
    b(A);
  }
  return m === "year" ? i.createElement(tr, wr({}, p(m), { pageShowDate: n, onSelect: function(A, M) {
    b("month"), g(M);
  }, disabledDate: s })) : i.createElement("div", { className: R, style: t }, i.createElement(wn, wr({}, ne, { DATEPICKER_LOCALE: O, icons: E, prefixCls: D("picker"), value: n, mode: m, onChangePanel: k, rtl: P })), F());
}
var Fe = function() {
  return Fe = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Fe.apply(this, arguments);
}, Is = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Ls = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, As = function(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, a = n.length, l; r < a; r++) (l || !(r in n)) && (l || (l = Array.prototype.slice.call(n, 0, r)), l[r] = n[r]);
  return e.concat(l || Array.prototype.slice.call(n));
}, ii = 42, Bn = function(e) {
  return { year: e.year(), month: e.month() + 1, day: e.day(), name: e.date(), time: e };
}, Ds = function(e) {
  return Fe(Fe({}, Bn(Ne.startOf(e, "month"))), { days: e.daysInMonth() });
};
function Ms(e, n) {
  var t = e.dayStartOfWeek, r = e.isWeek, a = Ds(n), l = an(ii).map(function() {
    return {};
  }), s = a.day - t < 0 ? 7 + (a.day - t) : a.day - t;
  l[s] = Fe({}, a);
  for (var o = 0; o < s; o++) l[s - o - 1] = Fe(Fe({}, Bn(Ne.subtract(a.time, o + 1, "day"))), { isPrev: true });
  for (var o = 0; o < ii - s - 1; o++) l[s + o + 1] = Fe(Fe({}, Bn(Ne.add(a.time, o + 1, "day"))), { isNext: o >= a.days - 1 });
  for (var u = an(6).map(function() {
    return [];
  }), o = 0; o < 6; o++) if (u[o] = l.slice(o * 7, 7 * (o + 1)), r) {
    var f = u[o][0].time, d = As([], Ls(u[o]), false);
    u[o].unshift({ weekRows: d, weekOfYear: f.week() });
  }
  return u;
}
function gn(e) {
  var n = e.isWeek, t = e.popupVisible, r = e.format, a = e.pageShowDate, l = e.showTime, s = e.style, o = e.timepickerProps, u = e.onMouseEnterCell, f = e.onMouseLeaveCell, d = e.dateRender, w = e.disabledDate, h = e.disabledTime, N = e.value, S = e.rangeValues, p = e.locale, g = e.isRangePicker, E = e.onSelect, m = e.onTimePickerSelect, b = e.onPrev, j = e.onNext, x = e.onSuperPrev, L = e.onSuperNext, D = e.isSameTime, P = e.index, O = e.getHeaderOperations, T = e.setPageShowDate, V = e.timeValue, R = e.hideNotInViewDates, y = e.icons, Z = e.isTimePanel, I = e.panelMode, F = e.setPanelMode, ne = Is(e, ["isWeek", "popupVisible", "format", "pageShowDate", "showTime", "style", "timepickerProps", "onMouseEnterCell", "onMouseLeaveCell", "dateRender", "disabledDate", "disabledTime", "value", "rangeValues", "locale", "isRangePicker", "onSelect", "onTimePickerSelect", "onPrev", "onNext", "onSuperPrev", "onSuperNext", "isSameTime", "index", "getHeaderOperations", "setPageShowDate", "timeValue", "hideNotInViewDates", "icons", "isTimePanel", "panelMode", "setPanelMode"]), k = v.useContext(Ae), A = k.locale, M = k.getPrefixCls, G = k.rtl, fe = v.useContext(_t), Q = fe.utcOffset, se = fe.timezone, le = fe.weekStart, pe = bn(A.DatePicker, p), ae = M(n ? "panel-week" : "panel-date"), U = me(ae), K = g ? { rangeValues: S } : { value: N }, ee = _e(l) && l.format || Mo(r), X = A.dayjsLocale, $ = v.useMemo(function() {
    return Ms(Fe(Fe({}, e), { dayStartOfWeek: le }), a.locale(X));
  }, [a.toString(), le, X]), te;
  g ? te = typeof h == "function" ? h(S[P], P === 0 ? "start" : "end") : {} : te = typeof h == "function" ? h(ke(N, r)) : {};
  function W() {
    return i.createElement(Sn, Fe({}, ne, K, { showWeekList: true, isWeek: n, prefixCls: M("picker"), rows: $, isSameTime: D || (function(ve, q) {
      return ve.isSame(q, "day");
    }), onSelectDate: E, onMouseEnterCell: u, onMouseLeaveCell: f, dateRender: d, disabledDate: w, CALENDAR_LOCALE: pe.Calendar, mode: n ? "week" : "date", format: r, hideNotInViewDates: R }));
  }
  function _() {
    var ve = _e(l) ? l : {};
    return i.createElement("div", { className: ae + "-timepicker" }, i.createElement("header", { className: ae + "-timepicker-title" }, pe.selectTime), i.createElement(Os, Fe({}, o, ve, te, { hideFooter: true, format: ee, valueShow: V.format(ee), onSelect: m, onConfirmValue: e.onConfirmValue, popupVisible: t, utcOffset: Q, timezone: se })));
  }
  var oe = { onPrev: b, onSuperPrev: x, onNext: j, onSuperNext: L, DATEPICKER_LOCALE: pe };
  function z(ve) {
    F(ve);
  }
  return I === "year" ? i.createElement(tr, Fe({}, O(I), { pageShowDate: a, onSelect: function(ve, q) {
    F("month"), T(q);
  }, disabledDate: w })) : I === "month" ? i.createElement(hn, Fe({}, O(I), { setPageShowDate: T, pageShowDate: a, panelMode: I, getHeaderOperations: O, onSelect: function(ve, q) {
    F("date"), T(q);
  }, disabledDate: w, setPanelMode: F })) : i.createElement("div", { className: U, style: s }, l && Z ? _() : i.createElement("div", { className: ae + "-inner" }, i.createElement(wn, Fe({}, oe, { icons: y, prefixCls: M("picker"), value: a, mode: I, onChangePanel: z, rtl: G })), W()));
}
var Zn = function() {
  return Zn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Zn.apply(this, arguments);
}, Ts = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
};
function Xn(e) {
  var n = e.value, t = e.isRangePicker, r = e.rangeValues, a = e.onPrev, l = e.onNext, s = e.onSuperPrev, o = e.onSuperNext, u = e.localeName, f = Ts(e, ["value", "isRangePicker", "rangeValues", "onPrev", "onNext", "onSuperPrev", "onSuperNext", "localeName"]), d = v.useContext(_t).weekStart, w = t ? { rangeValues: r } : { value: n }, h = { onPrev: a, onNext: l, onSuperPrev: s, onSuperNext: o };
  function N(S, p) {
    return Ne.isSameWeek(S, p, d, u);
  }
  return i.createElement(gn, Zn({}, f, w, h, { isWeek: true, isSameTime: N, isRangePicker: t }));
}
var Sr = function() {
  return Sr = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Sr.apply(this, arguments);
}, Rs = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
};
function Un(e) {
  var n = e.pageShowDate, t = e.style, r = e.onMouseEnterCell, a = e.onMouseLeaveCell, l = e.dateRender, s = e.disabledDate, o = e.value, u = e.locale, f = e.isRangePicker, d = e.onSelect, w = e.rangeValues, h = e.onSuperPrev, N = e.onSuperNext, S = e.format, p = e.getHeaderOperations, g = e.setPageShowDate, E = e.icons, m = e.panelMode, b = e.setPanelMode, j = Rs(e, ["pageShowDate", "style", "onMouseEnterCell", "onMouseLeaveCell", "dateRender", "disabledDate", "value", "locale", "isRangePicker", "onSelect", "rangeValues", "onSuperPrev", "onSuperNext", "format", "getHeaderOperations", "setPageShowDate", "icons", "panelMode", "setPanelMode"]), x = v.useContext(Ae), L = x.locale, D = x.getPrefixCls, P = x.rtl, O = bn(L.DatePicker, u), T = O.Calendar, V = D("panel-quarter"), R = me(V), y = f ? { rangeValues: w } : { value: o }, Z = n.year(), I = [[1, 2, 3, 4].map(function(A) {
    return { name: "Q" + A, time: Ce(Z + "-" + rt((A - 1) * 3 + 1, 2, "0") + "-01") };
  })];
  function F() {
    return i.createElement(Sn, Sr({}, j, y, { prefixCls: D("picker"), rows: I, onSelectDate: d, isSameTime: function(A, M) {
      return A.isSame(M, "month");
    }, onMouseEnterCell: r, onMouseLeaveCell: a, dateRender: l, disabledDate: s, CALENDAR_LOCALE: T, mode: "quarter", format: S }));
  }
  var ne = { onSuperPrev: h, onSuperNext: N };
  function k(A) {
    b(A);
  }
  return m === "year" ? i.createElement(tr, Sr({}, p(m), { pageShowDate: n, onSelect: function(A, M) {
    b("quarter"), g(M);
  }, disabledDate: s })) : i.createElement("div", { className: R, style: t }, i.createElement(wn, Sr({}, ne, { icons: E, prefixCls: D("picker"), value: n, mode: m, onChangePanel: k, DATEPICKER_LOCALE: O, rtl: P })), i.createElement("div", { className: V + "-wrapper" }, F()));
}
var Re = function() {
  return Re = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Re.apply(this, arguments);
};
function Tn(e, n) {
  for (var t = [], r = e; r < n; r++) t.push(r);
  return t;
}
function Vs(e) {
  var n = e.mode, t = n === void 0 ? "date" : n, r = e.showTime, a = e.disabledDate, l = e.disabledTime, s = e.format, o = e.dateRender, u = e.value, f = e.timeValues, d = e.icons, w = e.locale, h = e.pageShowDates, N = e.onMouseEnterCell, S = e.onMouseLeaveCell, p = e.onTimePickerSelect, g = e.onSelectPanel, E = e.onPrev, m = e.onSuperPrev, b = e.onNext, j = e.onSuperNext, x = e.localeName, L = e.popupVisible, D = e.timepickerProps, P = e.getHeaderOperations, O = e.setRangePageShowDates, T = e.disabledTimePickerIndex, V = e.hideNotInViewDates, R = e.isTimePanel, y = e.valueShowHover, Z = e.panelModes, I = e.setPanelModes, F = v.useContext(Ae).getPrefixCls, ne = F("picker-range"), k = v.useContext(_t), A = k.utcOffset, M = k.timezone, G = h[0] || Ie(A, M), fe = h[1] || Ie(A, M), Q = ke(u, s), se = { isRangePicker: true, rangeValues: Q, onMouseEnterCell: N, onMouseLeaveCell: S, locale: w, disabledDate: a, onSelect: g, dateRender: o, getHeaderOperations: P, icons: d, valueShowHover: y }, le = { pageShowDate: G, panelMode: Z[0], setPanelMode: function(X) {
    return I([X, Z[1]]);
  }, format: mt(s, 0) }, pe = { pageShowDate: fe, panelMode: Z[1], setPanelMode: function(X) {
    return I([Z[0], X]);
  }, format: mt(s, 1) };
  function ae() {
    var X = { onPrev: E, onSuperPrev: m }, $ = { onNext: b, onSuperNext: j }, te = Re(Re({}, se), { localeName: x, popupVisible: L, timepickerProps: D, getHeaderOperations: P, hideNotInViewDates: V, isTimePanel: R });
    if (t === "week") return i.createElement(i.Fragment, null, i.createElement(Xn, Re({ setPageShowDate: function(z) {
      return O([z, z], 0);
    } }, X, te, le)), i.createElement(Xn, Re({ setPageShowDate: function(z) {
      return O([Ne.subtract(z, 1, "month"), z], 1);
    } }, $, te, pe)));
    var W = { disabledTime: l, showTime: r }, _ = {};
    if (typeof T == "number" && (_.disabledTime = function() {
      return { disabledHours: function() {
        return Tn(0, 24);
      }, disabledMinutes: function() {
        return Tn(0, 60);
      }, disabledSeconds: function() {
        return Tn(0, 60);
      } };
    }, _e(r))) {
      var oe = Re(Re({}, r), { defaultValue: void 0 });
      _.showTime = Re(Re({}, oe), { hideDisabledOptions: false });
    }
    return i.createElement(i.Fragment, null, i.createElement(gn, Re({}, X, te, W, T === 0 ? _ : {}, { onTimePickerSelect: function(z, ve) {
      p(0, z, ve);
    }, index: 0, setPageShowDate: function(z) {
      return O([z, z], 0);
    }, timeValue: f[0] }, le)), i.createElement(gn, Re({}, $, te, W, T === 1 ? _ : {}, { onTimePickerSelect: function(z, ve) {
      p(1, z, ve);
    }, index: 1, setPageShowDate: function(z) {
      return O([Ne.subtract(z, 1, "month"), z], 1);
    }, timeValue: f[1] }, pe)));
  }
  function U() {
    var X = { onSuperPrev: m }, $ = { onSuperNext: j }, te = se;
    return i.createElement(i.Fragment, null, i.createElement(hn, Re({ setPageShowDate: function(W) {
      return O([W, W], 0);
    } }, X, te, le)), i.createElement(hn, Re({ setPageShowDate: function(W) {
      return O([Ne.subtract(W, 1, "year"), W], 1);
    } }, $, te, pe)));
  }
  function K() {
    var X = { onSuperPrev: m }, $ = { onSuperNext: j }, te = se;
    return i.createElement(i.Fragment, null, i.createElement(tr, Re({}, X, te, { pageShowDate: G })), i.createElement(tr, Re({}, $, te, { pageShowDate: fe })));
  }
  function ee() {
    var X = { onSuperPrev: m }, $ = { onSuperNext: j }, te = se;
    return i.createElement(i.Fragment, null, i.createElement(Un, Re({ setPageShowDate: function(W) {
      return O([W, W], 0);
    } }, X, te, le)), i.createElement(Un, Re({ setPageShowDate: function(W) {
      return O([Ne.subtract(W, 1, "year"), W], 1);
    } }, $, te, pe)));
  }
  return i.createElement("div", { className: ne }, i.createElement("div", { className: ne + "-wrapper" }, (t === "date" || t === "week") && ae(), t === "month" && U(), t === "year" && K(), t === "quarter" && ee()));
}
var Rt = function() {
  return Rt = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Rt.apply(this, arguments);
}, ze = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, Kt = function(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, a = n.length, l; r < a; r++) (l || !(r in n)) && (l || (l = Array.prototype.slice.call(n, 0, r)), l[r] = n[r]);
  return e.concat(l || Array.prototype.slice.call(n));
};
function zs(e) {
  var n = e.format, t = e.showTime, r = e.mode, a;
  switch (r) {
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
      a = "YYYY-wo";
      break;
    case "quarter":
      a = "YYYY-[Q]Q";
      break;
    default:
      a = "YYYY-MM-DD";
  }
  return n && (a = n), a;
}
var li = { allowClear: true, unmountOnExit: true, position: "bl", editable: true, mode: "date" }, Hs = { bottom: 4 }, Fs = function(e, n) {
  var t, r, a = v.useContext(Ae), l = a.getPrefixCls, s = a.locale, o = a.size, u = a.componentConfig, f = a.rtl;
  f && (li.position = "br");
  var d = gt(e, li, u == null ? void 0 : u.DatePicker), w = d.allowClear, h = d.className, N = d.style, S = d.placeholder, p = d.getPopupContainer, g = d.disabled, E = d.position, m = d.error, b = d.status, j = d.unmountOnExit, x = d.editable, L = d.triggerProps, D = d.shortcuts, P = d.onSelect, O = d.onVisibleChange, T = d.value, V = d.onChange, R = d.icons, y = d.disabledDate, Z = d.disabledTime, I = d.mode, F = d.showTime, ne = d.onSelectShortcut, k = d.extra, A = d.shortcutsPlacementLeft, M = d.onOk, G = d.defaultPickerValue, fe = d.pickerValue, Q = d.panelRender, se = d.onPickerValueChange, le = d.triggerElement, pe = d.clearRangeOnReselect, ae = d.separator, U = d.utcOffset, K = d.timezone, ee = d.inputProps, X = d.fixedTime, $ = l("picker-range"), te = ht(d.dayStartOfWeek) ? Vi(s.dayjsLocale) : d.dayStartOfWeek, W = v.useRef(null), _ = v.useRef(null), oe = v.useRef(null), z = v.useRef(null), ve = v.useRef(null);
  v.useImperativeHandle(n, function() {
    return { focus: function(C) {
      W.current && W.current.focus && W.current.focus(C);
    }, blur: function() {
      W.current && W.current.blur && W.current.blur();
    } };
  }, []);
  var q = zs(d);
  function ge() {
    if (Ee(g)) {
      if (g[0] && !g[1]) return 1;
      if (g[1] && !g[0]) return 0;
    }
  }
  var Se = ge(), Y = typeof Se == "number", ue = Y ? 1 ^ Se : void 0, ce = ze(v.useState(Y ? Se : 0), 2), de = ce[0], we = ce[1];
  v.useEffect(function() {
    Y && we(Se);
  }, [g]);
  var De = 1 ^ de, We = ze(v.useState(), 2), Me = We[0], $e = We[1], Ke = ze(v.useState(), 2), re = Ke[0], be = Ke[1], Oe = ze(v.useState(Pn()), 2), qe = Oe[0], Ct = Oe[1], Wt = ze(v.useState(), 2), Ye = Wt[0], st = Wt[1], Ir = ze(v.useState(), 2), nr = Ir[0], wt = Ir[1], Lr = ze(v.useState(), 2), lt = Lr[0], jt = Lr[1], et = ze(v.useState(d.popupVisible), 2), Ar = et[0], Yt = et[1], ar = ze(v.useState([I, I]), 2), ir = ar[0], kt = ar[1], lr = ze(v.useState(false), 2), It = lr[0], Dr = lr[1], nt = "popupVisible" in d ? d.popupVisible : Ar, at = ke(T, q, U, K), tt = "value" in d ? at : qe, Le = lt || Ye || tt || [], Ve = mn(Ye || tt), Be = v.useRef(true), or = Ie(), Mr = er(or, U, K);
  function Tr() {
    var C = [], H = _e(F) && F.defaultValue ? ke(F.defaultValue, F.format || "HH:mm:ss") : [];
    return C[0] = Le[0] || H[0] || Mr, C[1] = Le[1] || H[1] || Mr, C;
  }
  var Bt = Tr(), sr = Y ? function(C) {
    return Se === 0 ? C.isAfter(Le[1], I) : C.isBefore(Le[0], I);
  } : void 0, ct = le !== void 0, cr = ct || pe;
  function Pn() {
    var C;
    if (d.value ? C = ke(d.value, q, U, K) : C = ke(d.defaultValue, q, U, K), Y && (!C || C && !C[De])) {
      var H = [];
      return H[De] = Ie(U, K), H;
    }
    return C;
  }
  var ur = tt || ke(G, q) || [or, or], Rr = ze(v.useState(ut(ur)), 2), it = Rr[0], Lt = Rr[1], At = ut(ke(fe, q, U, K)) || it, fr = Or(U), dr = Or(K);
  Pr(function() {
    if (Ee(qe) && (fr !== U || K !== dr)) {
      var C = qe.map(function(J) {
        return ot(J, fr, dr);
      }), H = C.map(function(J) {
        return er(J, U, K);
      });
      Ct(H);
    }
  }, [U, fr, K, dr]), Pr(function() {
    Lt(ut(ur));
  }, [I]), v.useEffect(function() {
    kt([I, I]);
  }, [I]), v.useEffect(function() {
    if (be(void 0), $e(void 0), nt) {
      var C = ut(ur);
      Dr(false), kt([I, I]), Lt(C), mr(C), st(tt), A && (oe.current.style.maxHeight = _.current.clientHeight + "px");
    } else st(void 0), wt(void 0), jt(void 0), B();
    Be.current = nt;
  }, [nt]);
  var Nn = (t = at == null ? void 0 : at[0]) === null || t === void 0 ? void 0 : t.format(mt(q, 0)), jn = (r = at == null ? void 0 : at[1]) === null || r === void 0 ? void 0 : r.format(mt(q, 1));
  v.useEffect(function() {
    st(void 0), wt(void 0);
  }, [Nn, jn]);
  function Dt(C, H) {
    H === void 0 && (H = de);
    var J = ut(C, H);
    Lt(J), mr(J);
  }
  function mr(C) {
    Vr([C[0], it[0]], I) || se && se(Ee(C) ? C.map(function(H, J) {
      return H && H.format(mt(q, J));
    }) : void 0, C);
  }
  function ut(C, H) {
    H === void 0 && (H = de);
    var J = H === 0 || Vr(C, I);
    if (Ee(C) && C.length < 2) return Zt(C[0] || Ie(U, K), I, "prev");
    if (Ee(C) && C.length === 2) return C[H] ? Zt(C[H], I, J ? "prev" : "next") : Zt(C[H === 0 ? 1 : 0] || Ie(U, K), I, J && !C[H === 0 ? 1 : 0] ? "prev" : "next");
  }
  function Vr(C, H) {
    if (C && C.length === 2 && xa(C)) return (H === "date" || H === "week") && C[0].isSame(C[1], "month") || (H === "month" || H === "quarter") && C[0].isSame(C[1], "year") || H === "year" && Math.floor(C[0].year() / 10) === Math.floor(C[1].year() / 10);
  }
  function Zt(C, H, J) {
    C === void 0 && (C = Ie(U, K)), H === void 0 && (H = I), J === void 0 && (J = "prev");
    var ye = J === "prev";
    switch (H) {
      case "date":
      case "week":
        return ye ? [C, Ne.add(C, 1, "month")] : [Ne.subtract(C, 1, "month"), C];
      case "month":
      case "quarter":
        return ye ? [C, Ne.add(C, 1, "year")] : [Ne.subtract(C, 1, "year"), C];
      case "year":
        return ye ? [C, Ne.add(C, 10, "year")] : [Ne.subtract(C, 10, "year"), C];
      default:
        return [];
    }
  }
  function pr(C) {
    W.current && W.current.focus && W.current.focus(Y ? Se : C);
  }
  function B() {
    W.current && W.current.blur && W.current.blur();
  }
  function ie(C) {
    C ? (setTimeout(function() {
      return pr();
    }), Pe(C)) : Pe(false);
  }
  function Pe(C) {
    O && O(C), Yt(C);
  }
  function He(C) {
    C.stopPropagation();
    var H = Kt([], ze(Le), false);
    Y ? H[Se] = void 0 : H = void 0, Ct(H), st(H), hr(H), d.onClear && d.onClear();
  }
  function Ze(C, H) {
    if (we(C), Le && Le.length && !H) {
      var J = ut(Le, C);
      Lt(J), mr(J);
    }
  }
  function zr(C) {
    var H = typeof sr == "function" ? sr(C) : false, J = typeof y == "function" ? y(C) : false;
    return J || H;
  }
  function vr(C) {
    return Vo(C, q, de) && !zr(ke(C, q));
  }
  function Hr(C) {
    var H = Kt([], ze(Le || []), false), J = C.target.value;
    $e(J), nt || Pe(true), vr(J) && (H[de] = ke(J, q), st(H), Dt(H), $e(void 0));
  }
  function kn() {
    Me && $e(void 0);
  }
  function hr(C) {
    if (Ro(tt, C)) {
      var H = Ee(C) ? C.map(function(J) {
        return vt(ot(J, U, K), s.dayjsLocale);
      }) : void 0;
      V && V(Ee(H) ? H.map(function(J, ye) {
        return J && J.format(mt(q, ye));
      }) : void 0, H);
    }
  }
  function el() {
    Ee(Ye) && Ye.length ? Me && !vr(Me) ? $e(void 0) : Ve !== 2 ? Fr() : Ve === 2 && Xt(Ye) : nt && Pe(false);
  }
  function Xt(C, H) {
    var J = C || Le;
    if (!(!J || !J[0] || !J[1])) {
      var ye = br(J, X);
      Ct(ye), hr(ye), le !== null && !H && Pe(false);
    }
  }
  function tl() {
    Xt();
    var C = Le.map(function(H) {
      return vt(H, s.dayjsLocale);
    });
    M && M(C.map(function(H, J) {
      return H && H.format(mt(q, J));
    }), C);
  }
  function ha() {
    switch (I) {
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
  function ga(C) {
    if (Ve !== 2) return false;
    var H = Ye || tt;
    return !!(de === 0 && C.isAfter(H[1], ha()) || de === 1 && C.isBefore(H[0], ha()));
  }
  function rl(C, H) {
    var J = ga(H) && Be.current, ye = cr && Ve === 2 && !Y ? [] : Kt([], ze(Le), false), Te = ct ? Ve === 0 || Ve === 2 ? 0 : 1 : de, gr = F ? Ot(H, Bt[Te]) : H;
    J ? (ye[Te] = gr, ye[1 ^ Te] = void 0) : ye[Te] = gr;
    var _r = br(ye, X);
    ya(_r), $e(void 0), be(void 0);
    var In = mn(ye);
    cr ? Ve === 0 || Ve === 2 && !Y ? ct ? we(1) : Fr(true) : F || Xt(ye) : In <= 1 ? Fr(true) : Ve === 2 && Be.current && !Y ? (Be.current = false, Fr(true), !F && !J && Xt(ye, true)) : (Be.current = false, !F && !J && Xt(ye));
  }
  function nl(C, H, J) {
    var ye = Ee(Le) ? Kt([], ze(Le), false) : [], Te = Ot(ye[C] || Ie(U, K), J);
    ye[C] = Te, ya(ye);
  }
  function ya(C) {
    st(C), wt(void 0);
    var H = br(C, X), J = H.map(function(ye) {
      return vt(ot(ye, U, K), s.dayjsLocale);
    });
    P && P(J.map(function(ye, Te) {
      return ye && ye.format(mt(q, Te));
    }), J, { type: de === 1 ? "end" : "start" });
  }
  function Fr(C) {
    Ze(De, C), setTimeout(function() {
      return pr(De);
    });
  }
  function al(C, H) {
    var J = Kt([], ze(Le || []), false), ye = cr ? Ve === 1 : Ve !== 0;
    if (!H && ye && !ga(C) && (J[de] = Ot(C, Bt[de]), wt(J), $e(void 0)), !H) {
      var Te = F ? Ot(C, Bt[de]) : C;
      be(Te.locale(s.dayjsLocale).format(mt(q, de)));
    }
  }
  function il() {
    wt(void 0), be(void 0);
  }
  function xa(C) {
    return C && Ee(C) && C.length === 2 && Ue(C[0]) && Ue(C[1]);
  }
  function ba(C) {
    var H = typeof C.value == "function" && C.value();
    return xa(H);
  }
  function Ea() {
    clearTimeout(z.current), clearTimeout(ve.current), z.current = null, ve.current = null;
  }
  function ll(C) {
    Ea(), z.current = setTimeout(function() {
      if (ba(C)) {
        var H = ke(C.value(), q, U, K);
        jt(H), Dt(H);
      }
    }, 50);
  }
  function ol() {
    Ea(), ve.current = setTimeout(function() {
      jt(void 0), Dt(Ye || tt || [Ie(U, K), Ie(U, K)]);
    }, 50);
  }
  function sl(C) {
    if (ne && ne(C), ba(C)) {
      var H = ke(C.value(), q, U, K);
      if (H.some(function(J) {
        return Nt(J, y, I);
      })) return;
      Xt(H);
    }
  }
  function St(C, H, J) {
    J === void 0 && (J = 1);
    var ye = C === "prev" ? 0 : 1, Te = Kt([], ze(At), false);
    C === "prev" && (Te[ye] = Ne.subtract(At[ye], J, H)), C === "next" && (Te[ye] = Ne.add(At[ye], J, H)), Te = Zt(Te[ye], I, C), Dt(Te);
  }
  function Ca(C) {
    if (C === void 0 && (C = I), C === "date" || C === "week") return { onPrev: function() {
      return St("prev", "month");
    }, onNext: function() {
      return St("next", "month");
    }, onSuperPrev: function() {
      return St("prev", "year");
    }, onSuperNext: function() {
      return St("next", "year");
    } };
    if (C === "month" || C === "quarter") return { onSuperPrev: function() {
      return St("prev", "year");
    }, onSuperNext: function() {
      return St("next", "year");
    } };
    if (C === "year") return { onSuperPrev: function() {
      return St("prev", "year", 10);
    }, onSuperNext: function() {
      return St("next", "year", 10);
    } };
  }
  function cl() {
    Dr(!It);
  }
  function wa(C) {
    var H, J = me($ + "-container", (H = {}, H[$ + "-panel-only"] = C, H[$ + "-container-shortcuts-placement-left"] = Ee(D) && A, H[$ + "-container-rtl"] = f, H), C ? h : ""), ye = { prefixCls: l("picker"), showTime: F, shortcuts: D, onMouseEnterShortcut: ll, onMouseLeaveShortcut: ol, onSelectShortcut: sl, disabledDate: y, mode: I }, Te = F && ir[0] === "date" && ir[1] === "date" || k || Ee(D) && D.length && !A, gr = i.createElement(i.Fragment, null, i.createElement(Vs, Rt({}, d, Ca(), { getHeaderOperations: Ca, setRangePageShowDates: Dt, pageShowDates: At, value: Le, format: q, onSelectPanel: rl, onMouseEnterCell: al, onMouseLeaveCell: il, disabledDate: function(vl) {
      return zr(vl);
    }, disabledTime: Z, mode: I, localeName: s.dayjsLocale, showTime: F, timeValues: lt || Bt, onTimePickerSelect: nl, popupVisible: nt, disabledTimePickerIndex: ue, isTimePanel: It, valueShowHover: nr, panelModes: ir, setPanelModes: kt })), !!Te && i.createElement(Hi, Rt({}, ye, { DATEPICKER_LOCALE: s.DatePicker, disabled: !(Ee(Le) && Le[0] && Le[1]), onClickConfirmBtn: tl, extra: k, shortcutsPlacementLeft: A, onClickSelectTimeBtn: cl, isTimePanel: It }))), _r = A ? i.createElement(i.Fragment, null, i.createElement(sa, Rt({ ref: oe }, ye)), i.createElement("div", { ref: _, className: $ + "-panel-wrapper" }, gr)) : gr, In = typeof Q == "function" ? Q(_r) : _r;
    return i.createElement("div", { className: J, onClick: function() {
      return pr();
    }, style: C ? N : {} }, In);
  }
  var ul = d.size || o, fl = Ee(S) ? S : s.DatePicker.placeholders[I], dl = R && R.inputSuffix === null ? null : R && R.inputSuffix || (F ? i.createElement(Cn, null) : i.createElement(En, null)), ml = { style: N, className: h, popupVisible: nt, format: q, disabled: g, error: m, status: b, size: ul, onPressEnter: el, onClear: He, suffixIcon: dl, editable: x, allowClear: w, prefix: d.prefix }, pl = Ee(g) ? g[0] && g[1] : g;
  return i.createElement(_t.Provider, { value: { utcOffset: U, timezone: K, weekStart: te } }, le === null ? wa(true) : i.createElement(Oi, Rt({ popup: wa, trigger: "click", clickToClose: false, position: E, disabled: pl, popupAlign: Hs, getPopupContainer: p, onVisibleChange: ie, popupVisible: nt, classNames: "slideDynamicOrigin", unmountOnExit: j }, L), le || i.createElement(Es, Rt({}, aa(d), ml, { inputProps: ee, ref: W, placeholder: fl, value: Ye || tt, onChange: Hr, inputValue: re || Me, changeFocusedInputIndex: Ze, focusedInputIndex: de, isPlaceholder: !!re, separator: ae, onBlur: kn }))));
}, Fi = v.forwardRef(Fs);
Fi.displayName = "RangePicker";
var _s = /* @__PURE__ */ (function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (r[l] = a[l]);
    }, e(n, t);
  };
  return function(n, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(n, t);
    function r() {
      this.constructor = n;
    }
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
})(), Kn = function() {
  return Kn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Kn.apply(this, arguments);
};
function kr(e, n) {
  var t;
  return t = (function(r) {
    _s(a, r);
    function a(l) {
      var s = r.call(this, l) || this;
      return s.refPicker = i.createRef(), s;
    }
    return a.prototype.focus = function() {
      this.refPicker.current && this.refPicker.current.focus && this.refPicker.current.focus();
    }, a.prototype.blur = function() {
      this.refPicker.current && this.refPicker.current.blur && this.refPicker.current.blur();
    }, a.prototype.render = function() {
      return i.createElement(ys, Kn({}, this.props, { ref: this.refPicker, picker: e, mode: n.mode }));
    }, a;
  })(i.Component), t.displayName = n.displayName, t;
}
var Ws = kr(i.createElement(gn, null), { displayName: "DatePicker", mode: "date" }), Ys = kr(i.createElement(hn, null), { displayName: "MonthPicker", mode: "month" }), Bs = kr(i.createElement(tr, null), { displayName: "YearPicker", mode: "year" }), Zs = kr(i.createElement(Xn, null), { displayName: "WeekPicker", mode: "week" }), Xs = kr(i.createElement(Un, null), { displayName: "QuarterPicker", mode: "quarter" }), Us = Fi;
const oi = Object.assign(Ws, { MonthPicker: Ys, YearPicker: Bs, WeekPicker: Zs, QuarterPicker: Xs, RangePicker: Us });
function si(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ci(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? si(Object(t), true).forEach(function(r) {
      Et(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : si(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Ks(e, n) {
  var t = v.useContext(xt), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, s = e.className, o = ci(ci({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-info") });
  return l && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", bt({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "M25 39H27V60H25z", transform: "rotate(180 25 39)" }), i.createElement("path", { fill: "currentColor", stroke: "none", d: "M25 39H27V60H25z", transform: "rotate(180 25 39)" }), i.createElement("path", { d: "M25 11H27V13H25z", transform: "rotate(180 25 11)" }), i.createElement("path", { fill: "currentColor", stroke: "none", d: "M25 11H27V13H25z", transform: "rotate(180 25 11)" }));
}
var ua = i.forwardRef(Ks);
ua.defaultProps = { isIcon: true };
ua.displayName = "IconInfo";
function qs() {
  return i.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 213 213", style: { fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 } }, i.createElement("g", { transform: "matrix(1,0,0,1,-1241.95,-445.62)" }, i.createElement("g", null, i.createElement("g", { transform: "matrix(1,0,0,1,295.2,-87.3801)" }, i.createElement("circle", { cx: "1053.23", cy: "639.477", r: "106.477", style: { fill: "rgb(235, 238, 246)" } })), i.createElement("g", { transform: "matrix(0.38223,0,0,0.38223,1126.12,238.549)" }, i.createElement("g", { transform: "matrix(0.566536,0.327089,-1.28774,0.74348,763.4,317.171)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fillOpacity: 0.1 } })), i.createElement("g", { transform: "matrix(0.29595,0.170867,-0.91077,0.525833,873.797,588.624)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fillOpacity: 0.1 } })), i.createElement("g", { transform: "matrix(1,0,0,1,275,-15)" }, i.createElement("path", { d: "M262.077,959.012L276.923,959.012L273.388,1004.01C273.388,1004.59 273.009,1005.16 272.25,1005.6C270.732,1006.48 268.268,1006.48 266.75,1005.6C265.991,1005.16 265.612,1004.59 265.612,1004.01L262.077,959.012Z", style: { fill: "rgb(196, 173, 142)" } }), i.createElement("g", { transform: "matrix(0.866025,-0.5,1,0.57735,0,-45)" }, i.createElement("ellipse", { cx: "-848.416", cy: "1004.25", rx: "6.062", ry: "5.25", style: { fill: "rgb(255, 125, 0)" } }))), i.createElement("g", { transform: "matrix(1,0,0,1,183.952,-67.5665)" }, i.createElement("path", { d: "M262.077,959.012L276.923,959.012L273.388,1004.01C273.388,1004.59 273.009,1005.16 272.25,1005.6C270.732,1006.48 268.268,1006.48 266.75,1005.6C265.991,1005.16 265.612,1004.59 265.612,1004.01L262.077,959.012Z", style: { fill: "rgb(196, 173, 142)" } }), i.createElement("g", { transform: "matrix(0.866025,-0.5,1,0.57735,0,-45)" }, i.createElement("ellipse", { cx: "-848.416", cy: "1004.25", rx: "6.062", ry: "5.25", style: { fill: "rgb(255, 125, 0)" } }))), i.createElement("g", { transform: "matrix(1,0,0,1,414,-95.2517)" }, i.createElement("path", { d: "M262.077,959.012L276.923,959.012L273.388,1004.01C273.388,1004.59 273.009,1005.16 272.25,1005.6C270.732,1006.48 268.268,1006.48 266.75,1005.6C265.991,1005.16 265.612,1004.59 265.612,1004.01L262.077,959.012Z", style: { fill: "rgb(196, 173, 142)" } }), i.createElement("g", { transform: "matrix(0.866025,-0.5,1,0.57735,0,-45)" }, i.createElement("ellipse", { cx: "-848.416", cy: "1004.25", rx: "6.062", ry: "5.25", style: { fill: "rgb(255, 125, 0)" } }))), i.createElement("g", { transform: "matrix(1,0,0,1,322.952,-147.818)" }, i.createElement("path", { d: "M262.077,959.012L276.923,959.012L273.388,1004.01C273.388,1004.59 273.009,1005.16 272.25,1005.6C270.732,1006.48 268.268,1006.48 266.75,1005.6C265.991,1005.16 265.612,1004.59 265.612,1004.01L262.077,959.012Z", style: { fill: "rgb(196, 173, 142)" } }), i.createElement("g", { transform: "matrix(0.866025,-0.5,1,0.57735,0,-45)" }, i.createElement("ellipse", { cx: "-848.416", cy: "1004.25", rx: "6.062", ry: "5.25", style: { fill: "rgb(255, 125, 0)" } }))), i.createElement("g", null, i.createElement("g", { transform: "matrix(1.42334,-0.821763,1.11271,0.642426,-1439.64,459.621)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), i.createElement("g", { transform: "matrix(1.40786,-0.812831,6.60237e-16,1.99081,-2052.17,-84.7286)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(1.26159,-0.728382,5.91642e-16,1.78397,-1774.67,11.2303)" }, i.createElement("path", { d: "M1950.29,1194.38C1950.29,1193.37 1949.41,1192.54 1948.34,1192.54L1846.01,1192.54C1844.93,1192.54 1844.06,1193.37 1844.06,1194.38L1844.06,1282.7C1844.06,1283.72 1844.93,1284.54 1846.01,1284.54L1948.34,1284.54C1949.41,1284.54 1950.29,1283.72 1950.29,1282.7L1950.29,1194.38Z", style: { fill: "rgb(132, 97, 51)" } })), i.createElement("g", { transform: "matrix(1.2198,-0.704254,5.72043e-16,1.72488,-1697.6,37.2103)" }, i.createElement("path", { d: "M1950.29,1194.38C1950.29,1193.37 1949.41,1192.54 1948.34,1192.54L1846.01,1192.54C1844.93,1192.54 1844.06,1193.37 1844.06,1194.38L1844.06,1282.7C1844.06,1283.72 1844.93,1284.54 1846.01,1284.54L1948.34,1284.54C1949.41,1284.54 1950.29,1283.72 1950.29,1282.7L1950.29,1194.38Z", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(0.707187,0.408295,9.06119e-17,1.54833,-733.949,683.612)" }, i.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(1.64553,-0.950049,1.17482,0.678285,-1632.45,473.879)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), i.createElement("g", { transform: "matrix(0.74666,0.431085,2.3583e-17,0.135259,-816.63,57.1397)" }, i.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(1.64553,-0.950049,1.17482,0.678285,-1632.45,473.879)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), i.createElement("g", { transform: "matrix(0.750082,0,0,0.750082,163.491,354.191)" }, i.createElement("g", { transform: "matrix(1.75943,-1.01581,1.75879e-16,0.632893,-2721.54,1876.43)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(0.290956,-0.167984,2.90849e-17,0.104661,69.4195,919.311)" }, i.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1944.73,1192.54 1937.88,1192.54L1856.47,1192.54C1849.62,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1849.62,1284.54 1856.47,1284.54L1937.88,1284.54C1944.73,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(132, 97, 51)" } })), i.createElement("g", { transform: "matrix(0.262716,-0.151679,8.27418e-18,0.0364999,121.496,970.53)" }, i.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1948.14,1192.54 1945.5,1192.54L1848.85,1192.54C1846.2,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1846.2,1284.54 1848.85,1284.54L1945.5,1284.54C1948.14,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(246, 220, 185)" } })), i.createElement("g", { transform: "matrix(1.77877,-1.02697,0.0581765,0.0335882,-425.293,1228.27)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(0.0369741,0.021347,4.72735e-17,0.492225,456.143,919.985)" }, i.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } }))), i.createElement("g", { transform: "matrix(0.750082,0,0,0.750082,163.491,309.191)" }, i.createElement("g", { transform: "matrix(1.75943,-1.01581,1.75879e-16,0.632893,-2721.54,1876.43)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(0.290956,-0.167984,2.90849e-17,0.104661,69.4195,919.311)" }, i.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1944.73,1192.54 1937.88,1192.54L1856.47,1192.54C1849.62,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1849.62,1284.54 1856.47,1284.54L1937.88,1284.54C1944.73,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(132, 97, 51)" } })), i.createElement("g", { transform: "matrix(0.262716,-0.151679,8.27418e-18,0.0364999,121.496,970.53)" }, i.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1948.14,1192.54 1945.5,1192.54L1848.85,1192.54C1846.2,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1846.2,1284.54 1848.85,1284.54L1945.5,1284.54C1948.14,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(246, 220, 185)" } })), i.createElement("g", { transform: "matrix(1.77877,-1.02697,0.0581765,0.0335882,-425.293,1228.27)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(0.0369741,0.021347,4.72735e-17,0.492225,456.143,919.985)" }, i.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } }))), i.createElement("g", { transform: "matrix(0.750082,0,0,0.750082,163.491,263.931)" }, i.createElement("g", { transform: "matrix(1.75943,-1.01581,1.75879e-16,0.632893,-2721.54,1876.43)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(0.290956,-0.167984,2.90849e-17,0.104661,69.4195,919.311)" }, i.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1944.73,1192.54 1937.88,1192.54L1856.47,1192.54C1849.62,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1849.62,1284.54 1856.47,1284.54L1937.88,1284.54C1944.73,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(132, 97, 51)" } })), i.createElement("g", { transform: "matrix(0.262716,-0.151679,8.27418e-18,0.0364999,121.496,970.53)" }, i.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1948.14,1192.54 1945.5,1192.54L1848.85,1192.54C1846.2,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1846.2,1284.54 1848.85,1284.54L1945.5,1284.54C1948.14,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(246, 220, 185)" } })), i.createElement("g", { transform: "matrix(1.77877,-1.02697,0.0581765,0.0335882,-425.293,1228.27)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(0.0369741,0.021347,4.72735e-17,0.492225,456.143,919.985)" }, i.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } }))), i.createElement("path", { d: "M555.753,832.474L555.753,921.408L630.693,878.141L630.693,789.207L555.753,832.474Z", style: { fillOpacity: 0.1 } }), i.createElement("g", { transform: "matrix(0.750082,0,0,0.750082,236.431,272.852)" }, i.createElement("g", { transform: "matrix(1.64553,-0.950049,1.14552,0.661368,-1606.78,467.933)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), i.createElement("g", { transform: "matrix(1.54477,-0.891873,1.05847,0.611108,-1456.84,490.734)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(132, 97, 51)" } })), i.createElement("g", { transform: "matrix(1.27607,-0.736739,0.751435,0.433841,-970.952,617.519)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(1.62765,-0.939723,1.42156e-16,0.5,-2476.81,1893.62)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(1.62765,-0.939723,1.42156e-16,0.5,-2476.81,1893.62)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(0.728038,0.420333,3.52595e-17,0.377589,-790.978,151.274)" }, i.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(1.75943,-1.01581,1.75879e-16,0.632893,-2726.83,1873.38)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", null, i.createElement("g", { transform: "matrix(1.75943,-1.01581,1.75879e-16,0.632893,-2721.54,1876.43)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(0.290956,-0.167984,2.90849e-17,0.104661,69.4195,919.311)" }, i.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1944.73,1192.54 1937.88,1192.54L1856.47,1192.54C1849.62,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1849.62,1284.54 1856.47,1284.54L1937.88,1284.54C1944.73,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(132, 97, 51)" } })), i.createElement("g", { transform: "matrix(0.262716,-0.151679,8.27418e-18,0.0364999,121.496,970.53)" }, i.createElement("path", { d: "M1950.29,1238.54C1950.29,1213.15 1948.14,1192.54 1945.5,1192.54L1848.85,1192.54C1846.2,1192.54 1844.06,1213.15 1844.06,1238.54C1844.06,1263.93 1846.2,1284.54 1848.85,1284.54L1945.5,1284.54C1948.14,1284.54 1950.29,1263.93 1950.29,1238.54Z", style: { fill: "rgb(246, 220, 185)" } })), i.createElement("g", { transform: "matrix(1.77877,-1.02697,0.0581765,0.0335882,-425.293,1228.27)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(0.0369741,0.021347,4.72735e-17,0.492225,456.143,919.985)" }, i.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })))), i.createElement("g", { transform: "matrix(1.62765,-0.939723,4.80984e-17,0.173913,-2468.81,2307.87)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } }))), i.createElement("g", null, i.createElement("g", { transform: "matrix(0.479077,0.276595,-0.564376,0.325843,598.357,-129.986)" }, i.createElement("path", { d: "M1776.14,1326C1776.14,1321.19 1772.15,1317.28 1767.24,1317.28L1684.37,1317.28C1679.46,1317.28 1675.47,1321.19 1675.47,1326L1675.47,1395.75C1675.47,1400.56 1679.46,1404.46 1684.37,1404.46L1767.24,1404.46C1772.15,1404.46 1776.14,1400.56 1776.14,1395.75L1776.14,1326Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(2.61622,0,0,2.61622,-2305.73,162.161)" }, i.createElement("g", { transform: "matrix(1.09915,-0.634597,1.26919,0.73277,-299.167,-62.4615)" }, i.createElement("ellipse", { cx: "412.719", cy: "770.575", rx: "6.303", ry: "5.459", style: { fill: "rgb(255, 125, 0)" } })), i.createElement("g", { transform: "matrix(0.238212,-0.137532,0.178659,0.103149,875.064,207.93)" }, i.createElement("text", { x: "413.474px", y: "892.067px", style: { fontFamily: "NunitoSans-Bold, Nunito Sans", fontWeight: 700, fontSize: 41.569, fill: "white" } }, "?"))))))));
}
function Qs() {
  return i.createElement("svg", { viewBox: "0 0 213 213", height: "100%", width: "100%", style: { fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 } }, i.createElement("g", { transform: "matrix(1,0,0,1,-871.485,-445.62)" }, i.createElement("g", null, i.createElement("g", { transform: "matrix(1,0,0,1,-75.2684,-87.3801)" }, i.createElement("circle", { cx: "1053.23", cy: "639.477", r: "106.477", style: { fill: "rgb(235, 238, 246)" } })), i.createElement("g", { transform: "matrix(1,0,0,1,246.523,295.575)" }, i.createElement("g", { transform: "matrix(0.316667,0,0,0.316667,277.545,71.0298)" }, i.createElement("g", { transform: "matrix(0.989011,-0.571006,1.14201,0.659341,-335.171,81.4498)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), i.createElement("g", { transform: "matrix(0.164835,-0.0951676,1.14201,0.659341,116.224,-179.163)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(202, 174, 136)" } })), i.createElement("g", { transform: "matrix(0.978261,-0.564799,1.26804e-16,1.30435,-337.046,42.0327)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(0.267591,-0.154493,3.46856e-17,0.356787,992.686,475.823)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(102, 102, 102)" } })), i.createElement("g", { transform: "matrix(1.28257,-0.740494,1.23317e-16,1.7101,1501.14,624.071)" }, i.createElement("g", { transform: "matrix(1,0,0,1,-6,-6)" }, i.createElement("path", { d: "M2.25,10.5C2.25,10.5 1.5,10.5 1.5,9.75C1.5,9 2.25,6.75 6,6.75C9.75,6.75 10.5,9 10.5,9.75C10.5,10.5 9.75,10.5 9.75,10.5L2.25,10.5ZM6,6C7.234,6 8.25,4.984 8.25,3.75C8.25,2.516 7.234,1.5 6,1.5C4.766,1.5 3.75,2.516 3.75,3.75C3.75,4.984 4.766,6 6,6Z", style: { fill: "white" } }))), i.createElement("g", { transform: "matrix(0.725806,0.419045,1.75755e-17,1.01444,155.314,212.138)" }, i.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(1.58977,-0.917857,1.15976e-16,2.2425,-1270.46,-614.379)" }, i.createElement("rect", { x: "1748.87", y: "1226.67", width: "10.895", height: "13.378", style: { fill: "rgb(132, 97, 0)" } }))), i.createElement("g", { transform: "matrix(0.182997,0.105653,-0.494902,0.285732,814.161,66.3087)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fillOpacity: 0.1 } })), i.createElement("g", { transform: "matrix(0.316667,0,0,0.316667,237.301,94.2647)" }, i.createElement("g", { transform: "matrix(0.989011,-0.571006,1.14201,0.659341,-335.171,81.4498)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), i.createElement("g", { transform: "matrix(0.164835,-0.0951676,1.14201,0.659341,116.224,-179.163)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(202, 174, 136)" } })), i.createElement("g", { transform: "matrix(0.978261,-0.564799,1.26804e-16,1.30435,-337.046,42.0327)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(0.267591,-0.154493,3.46856e-17,0.356787,992.686,475.823)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(102, 102, 102)" } })), i.createElement("g", { transform: "matrix(1.28257,-0.740494,1.23317e-16,1.7101,1501.14,624.071)" }, i.createElement("g", { transform: "matrix(1,0,0,1,-6,-6)" }, i.createElement("path", { d: "M2.25,10.5C2.25,10.5 1.5,10.5 1.5,9.75C1.5,9 2.25,6.75 6,6.75C9.75,6.75 10.5,9 10.5,9.75C10.5,10.5 9.75,10.5 9.75,10.5L2.25,10.5ZM6,6C7.234,6 8.25,4.984 8.25,3.75C8.25,2.516 7.234,1.5 6,1.5C4.766,1.5 3.75,2.516 3.75,3.75C3.75,4.984 4.766,6 6,6Z", style: { fill: "white" } }))), i.createElement("g", { transform: "matrix(0.725806,0.419045,1.75755e-17,1.01444,155.314,212.138)" }, i.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(1.58977,-0.917857,1.15976e-16,2.2425,-1270.46,-614.379)" }, i.createElement("rect", { x: "1748.87", y: "1226.67", width: "10.895", height: "13.378", style: { fill: "rgb(132, 97, 0)" } }))), i.createElement("g", { transform: "matrix(0.474953,0,0,0.474953,538.938,8.95289)" }, i.createElement("g", { transform: "matrix(0.180615,0.104278,-0.973879,0.562269,790.347,286.159)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fillOpacity: 0.1 } })), i.createElement("g", { transform: "matrix(0.473356,0,0,0.473356,294.481,129.741)" }, i.createElement("g", null, i.createElement("g", { transform: "matrix(0.1761,-0.101671,1.73518e-16,1.22207,442.564,7.31508)" }, i.createElement("rect", { x: "202.62", y: "575.419", width: "124.002", height: "259.402", style: { fill: "rgb(235, 235, 235)" } })), i.createElement("g", { transform: "matrix(0.0922781,0.0532768,2.03964e-16,2.20569,405.236,-248.842)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(34, 34, 34)" } })), i.createElement("g", { transform: "matrix(0.147541,-0.0851831,1.52371e-16,1.23446,454.294,-3.8127)" }, i.createElement("rect", { x: "202.62", y: "575.419", width: "124.002", height: "259.402", style: { fill: "rgb(51, 51, 51)" } })), i.createElement("g", { transform: "matrix(0.0921286,0.0531905,-0.126106,0.0728076,474.688,603.724)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(102, 102, 102)" } })))), i.createElement("g", { transform: "matrix(0.473356,0,0,0.473356,192.621,188.549)" }, i.createElement("g", null, i.createElement("g", { transform: "matrix(0.1761,-0.101671,1.73518e-16,1.22207,442.564,7.31508)" }, i.createElement("rect", { x: "202.62", y: "575.419", width: "124.002", height: "259.402", style: { fill: "rgb(235, 235, 235)" } })), i.createElement("g", { transform: "matrix(0.0922781,0.0532768,2.03964e-16,2.20569,405.236,-248.842)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(34, 34, 34)" } })), i.createElement("g", { transform: "matrix(0.147541,-0.0851831,1.52371e-16,1.23446,454.294,-3.8127)" }, i.createElement("rect", { x: "202.62", y: "575.419", width: "124.002", height: "259.402", style: { fill: "rgb(51, 51, 51)" } })), i.createElement("g", { transform: "matrix(0.0921286,0.0531905,-0.126106,0.0728076,474.688,603.724)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(102, 102, 102)" } })))), i.createElement("g", { transform: "matrix(0.668111,0,0,0.668111,-123.979,-49.2109)" }, i.createElement("g", { transform: "matrix(0.0349225,0.0201625,1.81598e-17,0.220789,974.758,729.412)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(235, 235, 235)" } })), i.createElement("g", { transform: "matrix(1.1164,-0.644557,0,0.220789,42.5091,1294.14)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(235, 235, 235)" } })), i.createElement("g", { transform: "matrix(0.0349225,0.0201625,-1.52814,0.882275,1593.11,461.746)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(102, 102, 102)" } })), i.createElement("g", { transform: "matrix(1.1164,-0.644557,0,0.220789,49.4442,1298.14)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(51, 51, 51)" } })), i.createElement("g", { transform: "matrix(0.0349225,0.0201625,1.81598e-17,0.220789,753.056,857.412)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(34, 34, 34)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,898.874,529.479)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,930.12,511.44)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,961.365,493.4)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,992.61,475.361)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1023.86,457.321)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1056.25,438.617)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1085.74,421.589)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } }))), i.createElement("g", { transform: "matrix(0.668111,0,0,0.668111,-123.979,-91.97)" }, i.createElement("g", { transform: "matrix(0.0349225,0.0201625,1.81598e-17,0.220789,974.758,729.412)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(235, 235, 235)" } })), i.createElement("g", { transform: "matrix(1.1164,-0.644557,0,0.220789,42.5091,1294.14)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(235, 235, 235)" } })), i.createElement("g", { transform: "matrix(0.0349225,0.0201625,-1.52814,0.882275,1593.11,461.746)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(102, 102, 102)" } })), i.createElement("g", { transform: "matrix(1.1164,-0.644557,0,0.220789,49.4442,1298.14)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(51, 51, 51)" } })), i.createElement("g", { transform: "matrix(0.0349225,0.0201625,1.81598e-17,0.220789,753.056,857.412)" }, i.createElement("rect", { x: "657.012", y: "404.643", width: "198.586", height: "145.08", style: { fill: "rgb(34, 34, 34)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,898.874,529.479)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,930.12,511.44)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,961.365,493.4)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,992.61,475.361)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1023.86,457.321)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(248, 248, 248)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1056.25,438.617)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } })), i.createElement("g", { transform: "matrix(0.142968,-0.0825428,-0.207261,0.478709,1085.74,421.589)" }, i.createElement("rect", { x: "831", y: "1023.79", width: "89.214", height: "89.214", style: { fill: "rgb(255, 125, 0)" } }))), i.createElement("g", { transform: "matrix(0.701585,5.16096e-35,-5.16096e-35,0.701585,-546.219,-21.3487)" }, i.createElement("g", { transform: "matrix(0.558202,-0.322278,0,0.882275,1033.27,615.815)" }, i.createElement("path", { d: "M855.598,410.446C855.598,407.244 852.515,404.643 848.718,404.643L663.891,404.643C660.094,404.643 657.012,407.244 657.012,410.446L657.012,543.92C657.012,547.123 660.094,549.723 663.891,549.723L848.718,549.723C852.515,549.723 855.598,547.123 855.598,543.92L855.598,410.446Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.558202,-0.322278,0,0.882275,1035.25,616.977)" }, i.createElement("path", { d: "M855.598,410.446C855.598,407.244 852.515,404.643 848.718,404.643L663.891,404.643C660.094,404.643 657.012,407.244 657.012,410.446L657.012,543.92C657.012,547.123 660.094,549.723 663.891,549.723L848.718,549.723C852.515,549.723 855.598,547.123 855.598,543.92L855.598,410.446Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(1,0,0,1,418.673,507.243)" }, i.createElement("path", { d: "M1088.34,192.063C1089.79,191.209 1090.78,191.821 1090.78,191.821L1092.71,192.944C1092.71,192.944 1092.29,192.721 1091.7,192.763C1090.99,192.813 1090.34,193.215 1090.34,193.215C1090.34,193.215 1088.85,192.362 1088.34,192.063Z", style: { fill: "rgb(248, 248, 248)" } })), i.createElement("g", { transform: "matrix(1,0,0,1,235.984,-39.1315)" }, i.createElement("path", { d: "M1164.02,805.247C1164.05,802.517 1165.64,799.379 1167.67,798.118L1169.67,799.272C1167.58,800.648 1166.09,803.702 1166.02,806.402L1164.02,805.247Z", style: { fill: "url(#_Linear1)" } })), i.createElement("g", { transform: "matrix(0.396683,0,0,0.396683,1000.22,516.921)" }, i.createElement("path", { d: "M1011.2,933.14C1009.31,932.075 1008.05,929.696 1007.83,926.324L1012.87,929.235C1012.87,929.235 1012.96,930.191 1013.04,930.698C1013.16,931.427 1013.42,932.344 1013.62,932.845C1013.79,933.255 1014.59,935.155 1016.22,936.046C1015.83,935.781 1011.19,933.139 1011.19,933.139L1011.2,933.14Z", style: { fill: "rgb(238, 238, 238)" } })), i.createElement("g", { transform: "matrix(0.253614,-0.146424,4.87691e-17,0.338152,1209.98,830.02)" }, i.createElement("circle", { cx: "975.681", cy: "316.681", r: "113.681", style: { fill: "rgb(245, 63, 63)" } }), i.createElement("g", { transform: "matrix(1.08844,0,0,0.61677,-99.9184,125.436)" }, i.createElement("path", { d: "M1062,297.556C1062,296.697 1061.61,296 1061.12,296L915.882,296C915.395,296 915,296.697 915,297.556L915,333.356C915,334.215 915.395,334.912 915.882,334.912L1061.12,334.912C1061.61,334.912 1062,334.215 1062,333.356L1062,297.556Z", style: { fill: "white" } }))), i.createElement("g", { transform: "matrix(5.57947,-3.22131,0.306277,0.176829,-6260.71,4938.32)" }, i.createElement("rect", { x: "1335.54", y: "694.688", width: "18.525", height: "6.511", style: { fill: "rgb(248, 248, 248)" } })), i.createElement("g", { transform: "matrix(0.10726,0.0619268,-1.83335e-14,18.1609,1256.76,-11932.8)" }, i.createElement("rect", { x: "1335.54", y: "694.688", width: "18.525", height: "6.511", style: { fill: "rgb(238, 238, 238)" } })))), i.createElement("g", { transform: "matrix(0.316667,0,0,0.316667,269.139,37.8829)" }, i.createElement("g", { transform: "matrix(0.989011,-0.571006,1.14201,0.659341,-335.171,81.4498)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(253, 243, 228)" } })), i.createElement("g", { transform: "matrix(0.164835,-0.0951676,1.14201,0.659341,116.224,-179.163)" }, i.createElement("rect", { x: "495.52", y: "1057.87", width: "105.078", height: "91", style: { fill: "rgb(202, 174, 136)" } })), i.createElement("g", { transform: "matrix(0.978261,-0.564799,1.26804e-16,1.30435,-337.046,42.0327)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(196, 173, 142)" } })), i.createElement("g", { transform: "matrix(0.267591,-0.154493,3.46856e-17,0.356787,992.686,475.823)" }, i.createElement("rect", { x: "1844.06", y: "1192.54", width: "106.232", height: "92", style: { fill: "rgb(102, 102, 102)" } })), i.createElement("g", { transform: "matrix(1.28257,-0.740494,1.23317e-16,1.7101,1501.14,624.071)" }, i.createElement("g", { transform: "matrix(1,0,0,1,-6,-6)" }, i.createElement("path", { d: "M2.25,10.5C2.25,10.5 1.5,10.5 1.5,9.75C1.5,9 2.25,6.75 6,6.75C9.75,6.75 10.5,9 10.5,9.75C10.5,10.5 9.75,10.5 9.75,10.5L2.25,10.5ZM6,6C7.234,6 8.25,4.984 8.25,3.75C8.25,2.516 7.234,1.5 6,1.5C4.766,1.5 3.75,2.516 3.75,3.75C3.75,4.984 4.766,6 6,6Z", style: { fill: "white" } }))), i.createElement("g", { transform: "matrix(0.725806,0.419045,1.75755e-17,1.01444,155.314,212.138)" }, i.createElement("rect", { x: "1663.92", y: "-407.511", width: "143.183", height: "118.292", style: { fill: "rgb(240, 218, 183)" } })), i.createElement("g", { transform: "matrix(1.58977,-0.917857,1.15976e-16,2.2425,-1270.46,-614.379)" }, i.createElement("rect", { x: "1748.87", y: "1226.67", width: "10.895", height: "13.378", style: { fill: "rgb(132, 97, 0)" } })))))), i.createElement("defs", null, i.createElement("linearGradient", { id: "_Linear1", x1: "0", y1: "0", x2: "1", y2: "0", gradientUnits: "userSpaceOnUse", gradientTransform: "matrix(-2.64571,4.04098,-4.04098,-2.64571,1167.67,799.269)" }, i.createElement("stop", { offset: "0", style: { stopColor: "rgb(248, 248, 248)", stopOpacity: 1 } }), i.createElement("stop", { offset: "1", style: { stopColor: "rgb(248, 248, 248)", stopOpacity: 1 } }))));
}
function Gs() {
  return i.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 213 213", style: { fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 } }, i.createElement("g", { transform: "matrix(1,0,0,1,-483.054,-445.448)" }, i.createElement("g", null, i.createElement("g", { transform: "matrix(1,0,0,1,-463.699,-87.5516)" }, i.createElement("circle", { cx: "1053.23", cy: "639.477", r: "106.477", style: { fill: "rgb(235, 238, 246)" } })), i.createElement("g", { transform: "matrix(0.384532,-0.222009,0.444019,0.256354,-0.569781,260.021)" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fillOpacity: 0.1 } })), i.createElement("g", { transform: "matrix(0.384532,-0.222009,0.444019,0.256354,-0.569781,218.845)" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.361496,-0.20871,0.41742,0.240997,34.7805,238.807)" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(0, 85, 255)" } })), i.createElement("g", { transform: "matrix(0.341853,-0.197369,0.394738,0.227902,64.9247,257.804)" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(29, 105, 255)" } })), i.createElement("g", { transform: "matrix(0.428916,0,0,0.428916,19.0588,329.956)" }, i.createElement("clipPath", { id: "_clip1" }, i.createElement("path", { d: "M1461.07,528.445C1461.07,530.876 1459.6,533.196 1456.6,534.928L1342.04,601.072C1335.41,604.896 1323.83,604.415 1316.18,600L1205.33,536C1201.14,533.585 1199,530.489 1199,527.555L1199,559.555C1199,562.489 1201.14,565.585 1205.33,568L1316.18,632C1323.83,636.415 1335.41,636.896 1342.04,633.072L1456.6,566.928C1459.6,565.196 1461.07,562.876 1461.07,560.445L1461.07,528.445Z" })), i.createElement("g", { clipPath: "url(#_clip1)" }, i.createElement("g", { transform: "matrix(2.33146,-0,-0,2.33146,1081.79,269.266)" }, i.createElement("use", { href: "#_Image2", x: "50.54", y: "112.301", width: "112.406px", height: "46.365px", transform: "matrix(0.99474,0,0,0.98649,0,0)" })))), i.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,265.448)" }, i.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,268.45)" }, i.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,271.452)" }, i.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.360289,-0.208013,-4.39887e-18,0.576941,37.5847,124.262)" }, i.createElement("rect", { x: "1621.2", y: "1370.57", width: "57.735", height: "5.947", style: { fill: "rgb(106, 161, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,307.505,420.796)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,310.507,419.062)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,313.509,417.329)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,316.512,415.595)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,319.514,413.862)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.384532,-0.222009,0.444019,0.256354,-0.569781,196.542)" }, i.createElement("clipPath", { id: "_clip3" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z" })), i.createElement("g", { clipPath: "url(#_clip3)" }, i.createElement("g", { transform: "matrix(1.30028,1.12608,-2.25216,1.95042,68.2716,1030.07)" }, i.createElement("use", { href: "#_Image4", x: "50.54", y: "56.312", width: "112.406px", height: "64.897px", transform: "matrix(0.99474,0,0,0.998422,0,0)" })))), i.createElement("g", { transform: "matrix(0.361496,-0.20871,0.41742,0.240997,34.7805,216.764)" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(0, 85, 255)" } })), i.createElement("g", { transform: "matrix(0.341853,-0.197369,0.394738,0.227902,64.9247,235.762)" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(29, 105, 255)" } })), i.createElement("g", { transform: "matrix(0.428916,0,0,0.428916,19.0588,307.652)" }, i.createElement("clipPath", { id: "_clip5" }, i.createElement("path", { d: "M1461.07,528.445C1461.07,530.876 1459.6,533.196 1456.6,534.928L1342.04,601.072C1335.41,604.896 1323.83,604.415 1316.18,600L1205.33,536C1201.14,533.585 1199,530.489 1199,527.555L1199,559.555C1199,562.489 1201.14,565.585 1205.33,568L1316.18,632C1323.83,636.415 1335.41,636.896 1342.04,633.072L1456.6,566.928C1459.6,565.196 1461.07,562.876 1461.07,560.445L1461.07,528.445Z" })), i.createElement("g", { clipPath: "url(#_clip5)" }, i.createElement("g", { transform: "matrix(2.33146,-0,-0,2.33146,1081.79,321.266)" }, i.createElement("use", { href: "#_Image2", x: "50.54", y: "89.692", width: "112.406px", height: "46.365px", transform: "matrix(0.99474,0,0,0.98649,0,0)" })))), i.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,243.144)" }, i.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,246.146)" }, i.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,249.149)" }, i.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.360289,-0.208013,-4.39887e-18,0.576941,37.5847,101.958)" }, i.createElement("rect", { x: "1621.2", y: "1370.57", width: "57.735", height: "5.947", style: { fill: "rgb(106, 161, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,307.505,398.492)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,310.507,396.759)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,313.509,395.025)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,316.512,393.292)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,319.514,391.558)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.384532,-0.222009,0.444019,0.256354,-0.569781,171.832)" }, i.createElement("clipPath", { id: "_clip6" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z" })), i.createElement("g", { clipPath: "url(#_clip6)" }, i.createElement("g", { transform: "matrix(1.30028,1.12608,-2.25216,1.95042,12.6215,1078.27)" }, i.createElement("use", { href: "#_Image7", x: "50.54", y: "31.563", width: "112.406px", height: "64.897px", transform: "matrix(0.99474,0,0,0.998422,0,0)" })))), i.createElement("g", { transform: "matrix(0.361496,-0.20871,0.41742,0.240997,34.7805,192.055)" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(0, 85, 255)" } })), i.createElement("g", { transform: "matrix(0.341853,-0.197369,0.394738,0.227902,64.9247,211.052)" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "rgb(29, 105, 255)" } })), i.createElement("g", { transform: "matrix(0.428916,0,0,0.428916,19.0588,282.943)" }, i.createElement("clipPath", { id: "_clip8" }, i.createElement("path", { d: "M1461.07,528.445C1461.07,530.876 1459.6,533.196 1456.6,534.928L1342.04,601.072C1335.41,604.896 1323.83,604.415 1316.18,600L1205.33,536C1201.14,533.585 1199,530.489 1199,527.555L1199,559.555C1199,562.489 1201.14,565.585 1205.33,568L1316.18,632C1323.83,636.415 1335.41,636.896 1342.04,633.072L1456.6,566.928C1459.6,565.196 1461.07,562.876 1461.07,560.445L1461.07,528.445Z" })), i.createElement("g", { clipPath: "url(#_clip8)" }, i.createElement("g", { transform: "matrix(2.33146,-0,-0,2.33146,1081.79,378.876)" }, i.createElement("use", { href: "#_Image2", x: "50.54", y: "64.644", width: "112.406px", height: "46.365px", transform: "matrix(0.99474,0,0,0.98649,0,0)" })))), i.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,218.434)" }, i.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,221.437)" }, i.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.347769,0.200785,3.44852e-18,0.545466,52.0929,224.439)" }, i.createElement("path", { d: "M1480.33,34.813C1480.33,34.162 1479.7,33.634 1478.94,33.634L1396.27,33.634C1395.5,33.634 1394.88,34.162 1394.88,34.813C1394.88,35.464 1395.5,35.993 1396.27,35.993L1478.94,35.993C1479.7,35.993 1480.33,35.464 1480.33,34.813Z", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.360289,-0.208013,-4.39887e-18,0.576941,37.5847,77.2484)" }, i.createElement("rect", { x: "1621.2", y: "1370.57", width: "57.735", height: "5.947", style: { fill: "rgb(106, 161, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,307.505,373.782)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "white" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,310.507,372.049)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,313.509,370.316)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,316.512,368.582)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.185726,-0.107229,-1.84168e-18,0.247635,319.514,366.849)" }, i.createElement("ellipse", { cx: "1566.31", cy: "1372.3", rx: "4", ry: "3.464", style: { fill: "rgb(64, 128, 255)" } })), i.createElement("g", { transform: "matrix(0.365442,-0.210988,0.421976,0.243628,28.7259,185.45)" }, i.createElement("clipPath", { id: "_clip9" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z" })), i.createElement("g", { clipPath: "url(#_clip9)" }, i.createElement("g", { transform: "matrix(1.36821,1.1849,-2.36981,2.05231,5.46929,1071.93)" }, i.createElement("use", { href: "#_Image10", x: "53.151", y: "30.14", width: "106.825px", height: "61.676px", transform: "matrix(0.998367,0,0,0.994768,0,0)" })))), i.createElement("g", { transform: "matrix(0.365442,-0.210988,0.421976,0.243628,28.7259,183.729)" }, i.createElement("path", { d: "M84.299,1269.38C84.299,1261.99 78.301,1256 70.913,1256L-56.874,1256C-64.261,1256 -70.259,1261.99 -70.259,1269.38L-70.259,1376.46C-70.259,1383.85 -64.261,1389.85 -56.874,1389.85L70.913,1389.85C78.301,1389.85 84.299,1383.85 84.299,1376.46L84.299,1269.38Z", style: { fill: "url(#_Linear11)" } })), i.createElement("g", { transform: "matrix(0.407622,0,0,0.407622,47.38,278)" }, i.createElement("clipPath", { id: "_clip12" }, i.createElement("path", { d: "M1461.07,554.317C1461.07,556.747 1459.6,559.067 1456.6,560.8L1342.04,626.943C1335.41,630.767 1323.83,630.287 1316.18,625.871L1205.33,561.871C1201.14,559.456 1199,556.361 1199,553.426L1199,559.555C1199,562.489 1201.14,565.585 1205.33,568L1316.18,632C1323.83,636.415 1335.41,636.896 1342.04,633.072L1456.6,566.928C1459.6,565.196 1461.07,562.876 1461.07,560.445L1461.07,554.317Z" })), i.createElement("g", { clipPath: "url(#_clip12)" }, i.createElement("g", { transform: "matrix(2.45325,-0,-0,2.45325,1068.82,410.793)" }, i.createElement("use", { href: "#_Image13", x: "53.151", y: "58.978", width: "106.825px", height: "33.517px", transform: "matrix(0.998367,0,0,0.985808,0,0)" })))), i.createElement("g", { transform: "matrix(0.371452,-0.214458,2.38096e-17,0.495269,-19.3677,248.256)" }, i.createElement("clipPath", { id: "_clip14" }, i.createElement("path", { d: "M1776.14,1326C1776.14,1321.19 1772.23,1317.28 1767.42,1317.28L1684.19,1317.28C1679.38,1317.28 1675.47,1321.19 1675.47,1326L1675.47,1395.75C1675.47,1400.56 1679.38,1404.46 1684.19,1404.46L1767.42,1404.46C1772.23,1404.46 1776.14,1400.56 1776.14,1395.75L1776.14,1326Z" })), i.createElement("g", { clipPath: "url(#_clip14)" }, i.createElement("g", { transform: "matrix(2.69214,1.16573,-1.29422e-16,2.0191,1352.59,983.841)" }, i.createElement("use", { href: "#_Image15", x: "121.882", y: "76.034", width: "37.393px", height: "61.803px", transform: "matrix(0.984021,0,0,0.996825,0,0)" })))), i.createElement("g", { transform: "matrix(0.371452,-0.214458,2.38096e-17,0.495269,-15.0786,249.972)" }, i.createElement("path", { d: "M1776.14,1326C1776.14,1321.19 1772.23,1317.28 1767.42,1317.28L1684.19,1317.28C1679.38,1317.28 1675.47,1321.19 1675.47,1326L1675.47,1395.75C1675.47,1400.56 1679.38,1404.46 1684.19,1404.46L1767.42,1404.46C1772.23,1404.46 1776.14,1400.56 1776.14,1395.75L1776.14,1326Z", style: { fill: "white", stopOpacity: 0.9 } })), i.createElement("g", { transform: "matrix(0.220199,-0.127132,1.41145e-17,0.293599,339.708,327.53)" }, i.createElement("path", { d: "M1306.5,1286.73C1307.09,1285.72 1308.6,1285.48 1310.36,1286.12C1312.13,1286.76 1313.84,1288.16 1314.73,1289.7C1326.44,1309.98 1355.4,1360.15 1363.73,1374.57C1364.33,1375.61 1364.49,1376.61 1364.18,1377.35C1363.87,1378.09 1363.11,1378.5 1362.07,1378.5C1346.41,1378.5 1288.17,1378.5 1264.07,1378.5C1262.42,1378.5 1260.37,1377.48 1258.9,1375.94C1257.44,1374.41 1256.88,1372.67 1257.5,1371.6C1268.1,1353.25 1296.8,1303.53 1306.5,1286.73Z", style: { fill: "rgb(245, 63, 63) ;fill-opacity:0.9" } })), i.createElement("g", { transform: "matrix(0.254264,-0.1468,1.22235e-17,0.254264,329.57,364.144)" }, i.createElement("text", { x: "1170.88px", y: "1451.42px", style: { fontFamily: "NunitoSans-Bold, Nunito Sans", fontWeight: 700, fontSize: 41.569, fill: "white", fillOpacity: 0.9 } }, "!")))), i.createElement("defs", null, i.createElement("image", { id: "_Image2", width: "113px", height: "47px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAvCAYAAADU+iVXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABVUlEQVR4nO2aQRKCMAxFxUN4O+9/DNw4CoiTliZN8vPfQlm00ykvP3aQ5fFc11sjy/L+/nx8r3ffm7Fn845jz+aJa23XOJvfs9Zh7NBawv3YrSGtdbj+x10egkFzpRrNt+SSxMgbqkiZJCJDiQDoSmSfdYFJ3JD18GMmcXhDTHUzNZIIXhA1JIJDib0MptqiKbhKzHqQiAaT6IlSFVIiAJQIACUGpLfLhpfIw49Ml8T2v4/JTPySyIJQI3w7JTIYEp2fong3FXWJ3huqCEYSNUlYhZRoyaSCoEQAKHESlqF0kZj9NBgNJhEASgSAEgNx9WfCTmLxpygzYRIBmCORsTIlXxJZED/kk0h+KC1x9E2FKG86qEkMsh8/HG9A6SSGYqAIKDEinUIpUSDDYXiqxAw3JCNMIgDXJTIWYdBJIvukK2ynARit4XASUZ6izCScRFWKCH0BfLM84oTw1Z8AAAAASUVORK5CYII=" }), i.createElement("image", { id: "_Image4", width: "113px", height: "65px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABBCAYAAADmBEt9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAASeElEQVR4nN2d6ZbcNpKFL5cs9UN1W5bntWxr6XmsWTzLQ7mSJDA/gh/iApWyLalUy+AcnypVJkEAsd24EaQn/T8Yb9+XKknrOuk4pOM4tCyLpkkqpWpZJu170TzPKqVoWWZJUq3Sbx+m6VkX/wjjVW/gH7/sdZ5nTacc5lkqJT6rtWqaJtVaVUrRNE26XGbd3+9alkW1Vi3LrFKq/uvj/KrP4dUu/t3HWkupmuepWVspIcjrddc8z1qWWcdRTusLwc3z3Cz1OA5dLouOo+o4Dv3vv15e5Xm8ukX//eetTtOkdV20bWFVkrQsk+ZZOo74Xq3SNMVPqXextYal1lq1rrNqlfb90LrGXP/5/nW52Fez2B8/1FpPiSxLLLsUaV2lfZdKiZiHkHCtuFWPj/73cvpfLDQseNJxvB43++IX+cOvR5WkZQkBbdsh4uCySNtWWkxEuLVKx1HOuLecFjdp3/NnWiYKUbSuAXiOIwR8HIf+55/riz+jF73Anz7VWkq4RSkEI+m0Fun+ftflsra/r+usfY/fATVY3DzP2ratCe3Nm7UhWawv3KzO69PtllJetDBf5MJ++hRHWWu4QCkOm1h4HH2agJuVpHme2ufHUXS5zLpeQ1B8Ns9zu2ZdU3gAJdwxFh3zxjUv0cW+qAX9+KFWhMV/Urg6kCUWcxzpRvlsmno3ehwBVhDKcWRMZQ6uQ4D7HsgI1MrcDIT/koT5IhaC28T17fuudV0bWAmhTJ0QpN56ti1cq4MXSR1wiWv6+ChJ12ukGpJaunG5rJpnad9rm+NyWVRKgqiXQhQ8+yI87pEicDQIRApAg3US60gvPPYhbBceqYTH17DEo8VLSVqWTFGmKdKOZVm0LDKlqIaEQ+GeO798tpu/fV/qPE+nCwwLiwNVi1FhCaUJIFxbury7uxAiwrled0k6Dz6F78J2FgcBk2qs66J9T/QrpRt2MoH7RX6ZXuO/Py3Pcp5PftMffj0qdBeHF4AlXJwU4ETSGavUMSsAD1AlqYDHvut1P61y6QRPMg/g2bbSudnJvCNCgmsFQKEE8Z2p+1x6Hi72SW/47mPk6/u+txwNa4vfpw4hYi3Lok7AHBiHCfjArTr6ZE4Sfr+W+aVAqQgVpUCJJBQq1kas7FFxAqTLZdK//fx0wnySG/3LP2sl1uEKU4uX9r1Siu7uliYwhHwctR0y1zmz4gwO80gp3OM4dHe3NqIAy3R36kjX4yvVj31P4OR0HYJluPVOk/Qfv35/YX7XG/z4IVSVQ8d11lp1ucydsNxlLsukbQth4zLnWQ8sA85zWZYm7LCiiFEp7J6O477rOul6TU5VUpdHjgJmL4QDKiGxzmSP3OqJ8d+Tj/0uE//w61EBI57jSWldUk+hxWc9OR1Wk+4WYWNNaD2jlNKsxdMOEnZJ7dC3bTcFmZpQSimNzXHl81ok7tndvAOlW8KXvl9u+eiTAlyoIozuB4DhrAt/w6qkdL3kb1Jymli0xzSH/Vi153QcLqmJX0t6c70erTqyrusfKhPEggOjmGvqANAIxNZ10r//8rhW+WiTkTI4iCDuOGAZ+U8osXWddH+/twMn5iEIeFEswasRkroir49l4cDVhM/Bcshc44LwCkcKZD6tfW75JHN6jRJlQnld+NzzOB4vJfnmSd59rHWMTwEkFh3HeDBxDVaIwB1JjlxofhZCj0pG7bQ9508rIH+bJq6JU/eaYsybaczd3dJVRXCZpajVLhEMua2j5VueIeZxAqNXnlrrNwvzqy/+6VP1s+6Sdnpd/LAYxJ1lWbTv+2mpc8ekeOz5XJINkPEknbSABN/dIfFrniddr9uZm65tPudsGS4gLyqzX9ZTSgIq9iipoWfQKyGm1qyDxn2+DcV+1YU/faqVxbEZL8Iy3AURV0Z2Bgjv8aPW2iyJgbDcejk4YiCQnwEH6gpGuuHxknV5GAApe+rhjBIM0Zs362dJAwTM2uNzNWAnPQRtX1Py+qILEJ4kXS6Tfv89ER6D2ITLjEPpSWjiCL8DXvhezrO0eIhuJILNQ6IqUUqS2lJAfikQKWi01tq5enJBXKQn/SiK57LO3XrvDvdxZgfSAC+xbXvjat3K2a+fyZe42L/0RfI94sO+H11S7ptzwDFCbQcKHuTTitVZhR+g/x13u+/HGaPWJtBucwZOGNQXmddjl9cYr9fjjIlzQ6EolO9vjIHM4Yo65o6+L1CuK76j2b+SlvzhF959rBWEySY9r/IWBxeapJsxgs9gP9y6cHlj99q+9zwow8tRzIFr4l4jqHJkPOaAzOFzOnjy3z3ZZw73HJwRQM/PZZzLz5bwdH+/6e7ucirDnxeiP/shqPN63U1rMo5J6nI/YgiaD9IbUahX19mwI1dHp+6SRvDgBzIWbaHvIu7VB4dIHCwly09es8TF46JZH6AJl4i18H2KyMuS83tbpSvXuk4nKs70ybGBnwWe4XPx8sEf//7zVtd17YAKNJgjPrSNSjqCy5bBjBmx+FyUC5IxghyPM1w75nMIxF0v6yVmjqzQmJT7YaKYYdUJtCQ1ZaKjwNMPZ4ig+dwlxv6mdi2CJm0ZvYafnYcg1jNWSto/3r4v9ZZms/HRlTjKQ0ggMQcCXhPctiwZObr0+7iC8D0npEHCgBuGu0f+/ebN2oTh1ZFQjhAUwvBiMMriB+kpTwi1z1P9++wF0OSAB4HggpkDz+WKFF6uV2z3fljm5IgTM0ZjRqQ2ukKPDSzO3aa7orHhyGONI8FsR8wD8Prfus5dh/donX4PDjYtZ+q8ixecHUl6l/jIf8LYcOC33Dnu2lOQEEAqsKPymPchNnDBj/2yDnwmmnK9h2WEzLhWhifcnvDimm5B5xH0eFwZEah/lw2wMdryuX6sMKTVBnrl87E7oFZ1uagDHPZIDuzC2/eoF+57368z5pPUTDGMUaHhjdnPSNXhacbvO4BrBoNWQEthUQ7NXSNCcHHQYSnxtzjgZFxG7eU+6S5n0856WmJfaOXacKHTef/ZWJ4ERB4BYv0xN4IJ96fu4CC5Y/299W7b3pRx33cdx9GUwKszpFnpVQL8ZQpTT4XILvTLJWuRtVZdLuvpcY4GchAg3wnsQdf7fLJiZ7nucoleTvpViEfRbLurlKJ9P0R9zjcQ2l5PTcxDpIgaLjc/QFvRqlLKqWW90gSY6asBbNoJ5/QYcd3lMneQnYNIIAQhjkLoTAVK21+eQWrF5bI2yO9rZB8BpNxT8GwITExt3kuKpmcPJft+nCEj8QHnOU2TLpelU7JQdhR60gzHSWCPw4kvRNse6Cpb58NNhN/3+MXNp4lmpfk8uIxzjiyzWiCt63JuPONcBPjpVCSaoJhrOQ+otPgUrj3dZ+ynnGWp0lkTQMsbo6KaklYFmYBFuXsOoKS2/rT+uSl74Ae8SQhynjPnDYusZwpVTmFmTJXCC4T7zHXFd0u754zv9aQ6hJDawE1i0nrGtNHNzp3Gx3dDMwJKT6ebqJ2WpSstLb5SPkLYcbhrs66Ma7W7p1sdG5+mqeV2d3f5eFsp0UcKp5nxWuf9lnbYXjCutbbQwz7dK3C4t/7tqBdwlLhj7lgkUheUi/RlXRMLtNDkQuDQ2EwejE6Txh0Gyrpe9xYj0MrrdWtaFDeSKcbcDrBPvp2P7BXBlQPrgtlY16nrYNu2ox22K1Ek7rV5m5hD5uZAxulmM16lN7hcLlpXd9mJavEarBe37fGbGOasUn/mx2mpkPJHM6DoWCgNaHEPSZoxSQIrpr8sKcTQjocVgiAFKPMEyPnb3y7NbXiciU7qkTlJITT/PmM5STaQNzn4Oo6qbStdyoOg2XgSErWzOD+MzHOnM/bXbn2wOl4uC1DUK7S7PI/5/MTL8W/iIvdGwblH/7SXt3hSgMjcc/7twzQFsKhnHOu7zxws3mIWvM/kONRATghy7jbM4XBAaDNaz+/ExQQ2vav0DjMs7+5ubRZfStWbN+tpFRmTwhVu56GGJUfYANpHQTs9TD1jYW3MET2trCNqolCEEXe3bX8Q23wsy3KS9tNZ2chqTICsuB8MkbNEefY6UfCUjA09oeR+TjPBRDhMJj/yZHesQLjvHvnDyHcOcz+525HKg3DgQBB23BNSvafFXPHCivdWe/T0BCKBkEDO5wfrMZ690k7iBLfv2+/Nnih3ZZqVzV6eQ2ca1VOfyAVlpYPuAXf6w69HRTDOSUJ1OUODK4VJyUCftUQqERRnnTz3p47CctON4Ipo9/BnIjzPQ3mc2+WQ6d9hH5DiHJz37XDIsf5UNhTTFQY35uuE4QqFedgoxVhX6f4+FS7z2KPjSsdaLGSF9Afc6Tho+B0tKm6Q7A6jTzN6rXRqzVGVL9gZDRTBm4wkDe0cbm09COO7zsZwyM6lIhj3QOMenT1yxiisI1MtUD50JHO612B/sz04RGbg/UCu3G6lnytJfVaIDIhxKUtPvmkHFH6QuLVbLfmOEhGCF0bd/2MJY/u+Wyqbj8/yIFAsn+9WYXp0b27NiQbVXR/INSx726L+xx5w3azLH/Rx78Y8biBO03nnwB/VFP9UiFI+N4/b+1wNzA8AV0Tux8K8y8sJdCeV4T1HlwPmwn07F+oCxI17DB3LQAyvdXa51/A01Gjld3fe/9P3lUaumUqO1/E+G+ZBuM6fEo+lv9Zw/JeEyHj7vtSE6KW5tlhYDwhwB+5SvGDsKYs3XAVK7J+7cMDi7i0P0d9Tk4/Lcf3Y+uCIGqGS81FZGEEE8SnnDJxwf7+1RN2TeI+3faGgXzfM0RiyvqRb/IuEyPAne/0gvGbn8XAM0qNFjMjSEaWDFag7Ns3fYo5wYR5fODzosh6mZ58se0iXP3VKABd8qyls7FCgQoM38aIwrvXubhXPjYT1hiAvl+WrWhe/SoiMdx9r3ba9FYcdsPATq0MLSV04SEeCoE93yxyAIzxHjMsy6XpNAQaAWdr3cYNYqb/ACEXyZzWSe+1flcKAfPBWjFt9SCPwGoGUdyIg/K99Q8c3CVFK4DPmiuNz8xRzqbGND7k4MMFyvJHJEWBel+4JZcLaoarI/WLusWUkrdJDgIMdVybAjyNp0iLQqgvM+2K5npqkM1ff+qDNNwuRwZNQkiO51OQR+IyFUM+r+mfk+2Ymb5kYXVm3MQMitxDo+HQVa/Jiredmjh79+35fqvUoknce4GkgSEopj/as/6MJkfH2faluhYAF75qT+ke66TDzxByXOLpD4qbnpWPq4vkWvUDjsxOOHhGw9w8FNTbdtGLefeO4AKtjnW6hxHvW+tiPhD+6EBkgWafi0NxMqLMxV1JzO/nSvRDMSGUx3NW5sBwZ8293Y2Mvq6PbsbKQCHlurNDIEI05rOefTliU8n3eTPXdhCipPXQDqPEOs/FgsB7i3mGMgLfCe46aaDIZfY9rntLwaJv0UHnGFAIheC+QP3rnDE78VKsNEoOdTqz1+76Q4bsKkfHjh3z8jYP2eIF78u4zb8N482bV/X0++CllY7ET0t7z6k1bWA6oOL4TPz2mpkt/yBG7O7/VsXeLbXqqF/w9iRAZvCk4qyL9YUk9HUZMcsAwHhYgyHNCrMU5Tql3dQjM06Jb77FhjZ97xM4JArzIND3tO1OfVIgM3tntVsWIikc0JXkJa3y2A+33vM+tydkbKd359Rrm+rlccryPs0kjIxPr7b2HpCd/KdGzCFGKlCRLTA9fTuSVhs/1nYIo/ZAdaY6v9fL6IDVLYh41O3JcrIoOB2I3aQgx1K99ited3BrPJkSGv0k/QU1SXaBIJwPGOOYpRyLTqfs+sdObgD1l8WqL1yoldUwQXgHhS8//xsVnFyLjxw+13mJn/O1Okk5O9eGrouuNup2/+MgRqZeaHAzxXQTtL2tAOUh7njru/dG40QHyPOO3D9ME6EGAPUUWLvH337cmJBJorwyEi0xrTlaIZuVDNCtfr4fot6EXKB9Xyw6+7FxLxXopApRekCX6ePexVtzc+MZhSc1KnEgAzUpZb/SHVp3IdvLZLXPsOhgrM4/Bc36P8eIW5IP/9wWW5+S354hSz6z4+25IJ2BzmCuuiZ+AFn9x4EiKv5QX1N4aL3ZhPqDwvN/H63vENqe6kgbrCXAHObcq+k504w1eovX5eNGL8/GPX4KJBpXi4oh/lLrGd7tRdIUsx7L89SjEv/EFuS9deIxXsUgf8LF9p3a+o3TsO3UOk1eQSLQY5iulqXpIz58yfOl4VYv14awPeZ0XpEnE+Y7Hwuw4ry33k16f8BivctE+/H8/5IBkfLmfv2Wf3NIF/ZKBy5+NV7twH2OVRPJH1fp3vsG0IMTnevn6Y47/AxX1K5XSf237AAAAAElFTkSuQmCC" }), i.createElement("image", { id: "_Image7", width: "113px", height: "65px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABBCAYAAADmBEt9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAMrklEQVR4nOVdW2LbNhAcUD5Xkl4scXqxpr0XiX7AQwwGu7Rj2RLV7o8lknjtc3YBygX/Afr2XOu2bQCAZVkAALVWlFJQClAr9mvLUrBt7R4A/Hp++fDA9NAL+PpjqwBQSkF9kVQkOBIFx2vLUlDr4wvyYSf/7blJghanglFLc9q2DZfLgnXddqvl9X/+vDwkPx5u0l9/bFWtTf+q8Hidwt22DaWUXYCtj3H5bPNolvkwk2Xc05hHcjep1yk8Fy4tksSmfH5ZCv768RjCPP0k3W3ysxKFtSwLaq0vAGYZXC2vtefHmKn9Lkv7TKt+BKs89QT/+FnrtnVECYwghuRukfcpOL1N4fgzrZ/umgHsbvfsVnnKiX35vlYFHUpMJQAMwMQtqpSCdV3x9HTBujbXSUUAZmVQa876A84ZL081oS/f1+qAQwGLusx+vz/rSNUtbk5FZvccpSuOdmut+PvnchrenWIidJvAKJRIaPpZY6B+Z/6nAlBrisjjp4KezKWfRZB3n8QfP2tlKuBWAHS0SMZqOFSAwu+R1QA9sVdhupA5riNapUjY946Xdxv823OtHnfIFGp+lv+pZSiaZH/e1gVIlmseCXRBk1SBFO26i6fA7xUvbz4oS2UABoaua699ZjFK25CJ/NzajukBgMmNerzUNuyD1Rw2U6XR/ihAzhu4D/C56YDM+QAMDMqScrUiYMzjiDjVmjT2aTLvlhtZLeOvI9RufWWyRCUt9906Xt5kIFpf5uaUKarlR0jUy2p+X2Nh62+2bi3faaxz1JoBInf1nr/WWm9Sj/3UAb7+2KrHo6hC4gJ0kAOMwMSf0RwwSgu8isNrDpSU1KIVBY9zX+Rz9xAaP3n/My3zUzrWOqdbhLpGPqMuFMhjkGu8pxZRKuE5H0ljYFaC0z60b8ZNutllAbatC1PdcxurPftZgvzwTnWDFuhJdSlzHFOozudGsHBsxeMYc5xiHxm6jdyx11mVojHVkt2zaJ/6+aOF+WGdffm+7hu0zrB9sCC2ULiRNUUF6fa5l9H0GjCX4nRsF9BRPsj2kVC8fyofx88KC5/lYq/uhPt7zni6FFoetZaCjQU2okPgWBBqtXrfXbczmP2qmz7a5oqAVwR6Mkv1Zz3eXpuWvLux7jBwog7bIyKTNaboEjQ+7ZMUl+RQnvdVYTKE6S48AiD6LOepwMmVTfs6Qsw+P1/XNVb5roaa7wFjzIqAgloHidaoRyUiVOruz9MOIE4ZpoVapcfben9ODpAyC9M+dc1UWmCuDGnb9wjztxqo65wXNqcNUVDXeBmdc4kWqsKLQBL78zIcx6U71aMZfa6xW86uOeKOarU6R3fZ6n2y3Bj4vcrPmx789lyrx7QsH9OFXC4F6xqnGBHo0aqJCihzpa+hV33OEWpk/ZGFkJWeh0YVI953ZSU+UIGyzeVSQDDvHgF4m2UePsAiNRmoNUXX9NcOIDkTyJhs0R782/PxZzLAtZ3XNYXxeKhMzRivfbW1XlKX/1oakn3XsVyxXtslSW+q61QNjayv1oqnp+VlMnGVxRnnwEKFQAaocFQx9BkHPWSIV1OyfUUfb2KQeRnPL13wJHWrkedyZY3auSfKrHK6mIEW7YyTd2txbVbw0vuL9/1GxvXPtG510W3xs6X4wtXyiJo9Trml6jo1vqqCaHvOVcd1AWdgz/FFBu6cTx4v9y9R3BsZO2uPCkM1Xl1vhvwi16j967PKKP0cxTMFFC4k9umxl8r2lvlmTPa4TXIBet+RG414wvbqrVhcL9xZ10Hcuo6OO0QD8/MoiNnqdIKZ4pB8AY4ql4VKNQ0zzU3XGrlgjdk6F80ds3VxHd6vto3G8fyTc4x2ftimlLYRXfx9Bg/+RxoRAYMIYUX3IxfdJz6fOHPGt+8Yis9jSjDHnAzRcj56cDg686NziEALKQNdLhQKg89oKVHvR25+2BPVCXECOvkuVGWyl7fmZF7jUCljfNB2nem8P277aIzhuG0BdJ0ag0bm6PEKlQX7dNR6uSwTCGLb7gEU0I0xMFJQzoHt13Xb16BEdE8Z1NpPOyiPW1/kbVOUJy6+MaUMGuaW1jvE3hlJNYptIhfZJ6CId0aL/XhEmdqy7yjuRrlnmz+ZU3amKVCJ5sO+lZlRESFCvbyuSuHgiXzkGN3tLnt7kuIN9zBPFIpqfktkL4NAI4TlVRXVDk6ScYBMIXEBbMt9RUd8ruVdaGXoT4Wsa1ENZ36nCkjk7IwZ4/Wcv+l1pVHZ66R4kZtuAtKxxudU4I7qSylYdHK8p9pNBvRFjh3rgtpkutvRwTtYKnJPraYrQ3OF82I5R3V1zlB3b02Rln1MjtUtYi4ucA0zSi7Wd//chD4K0EOClyL7sx2YqWA7Nhnz4a7kbdyFDSh9jxMx7MYuMHdZFAQnNrYru4A4MQBD+SqD8XroieMrc3Ujms9qfFXLJwP6urcpduv8KVi9766xucMYuLkSjC61DoqrMX/Mr0fF7Ir24k5ZBxy1I/bxbn1uGRHkBub9ui60Lnx+VjfJ/hXWKyR3N6fITZmpcZ9/+wszfc9ThcM41ePQnMwreFJBUYk0DXIBdtc5sGxYp7r+plTtu26PLb+eS9Fis1pes6hZc2gFZEhHq8s+GLWTWtMtaazAaL9kJEmhvgZ7R6M9PleJf8uLhVe48ilq1O+cqwqBHqqHmrIrjzJdleNy6crl6+acPZy4B+S6xnl2DzEAOH7gyywKWrzyoaiwI7h8OyY6/qBWM2rtnJvRerLjGGOs7Qm0H0T2Z9RiIytRiqzHrU7bRWiXbfnXT+dpH17A8KOd6g32io1PmoVvAFjX1VxbXAgYAUpvq2hQ6WhfLXc5M9DxcSOXFjGabfW6CjUqcGTz8XU3IY3u1wERkKc4vn72rWN6IXxWvRfSQngWrFWjfTG+aPZ2lFtFWsrJ6zjqLbQUxTFG1DimGmq97hK1LRALVj2HMz1atyuok3o8XU+0qZ5tFKdCJOm7EzqZyGqUGdGiIgaxjbpMzS3VYltfnEd3tRq7FOFqnOHzylivZWZzzcKB3su8hc5TQ4saQOQu3WCOdvpfFSLQD0VlKCsThPrvvtjxJRqPmd6nMydihraL4mAkkGynnVbrrjD6q3OLGD8x+6AvnyObv+W1uTcJkcSd/sjslZFR3Iqq+srQ6Liiotr2fY4vc/yMT75pm+hsaCk9pXDhZ3E5U+bIUx3FPi+8v2U3X+m3hEji9pW6uKOJRxpHxmg88A1gXfDR+ZouiDnuaLw8iu0TY4LrPjb78L5UOTxsRHxQPr3nDOq7hEjyHwaKDjpFsTJzJZGL3Cdaeo7Fw1fRM1FKQWUBxkIC73Hu0Y8zeExrfcRbVUcuNVN4Heu9h4ivEiLQUawDhkAOALRgsEzxTZ9xrScz94kbkFGA47sb6g5Lab+q0Sw9Pi7ZxxjzP68kqTVyHvxOPmTHULgPClz/YurVQiTpu/fDAAkQcMa6Fkcbq15XVQFGxwd53wGIx0udBxAXFzxdorJkz+kcVMBt7e3vR73r/2FCJPm7GRkgIJGpwJhAq9D8tJ3qicdHLbpHqNaF6CAt3hQe88kIWPn61KXrXwAf/uLphwuR5O/mAzEIUe1u17XwO8Y1t1rdQPb+dQwlzw0jhJmVHCNAlYGkTMCf8U7/pwkRGH+XDRhztAhgROhTBaUC8SqNWjzHygBTlgY4ZejV+1aX6aiT1x7uTWGn6PW3iMmkjBEeWzLk6y7TyWObu9YobrZ2CEt3fN7jfa23+TWNmwiRpL9dE0HwaOdbGeIC6e44P2LpVSG3IHePfiSQlBUAVNDX5nvvpZsKkURhZpYF5AXpKN3gcx6TFDkeKU0Elvg3eukGiBWOz9/6t2zuIkRgfFknQoJRhUaL4wo6nDKAEVWAvBzom9aRq492VIDrXhS9hu4mRJL+LKaDE1IE+9vz84azu9hIgBHAigCOWqgKj6+j8dr/9rfdnHzLi+Qul9eAectHD3rpfbf43maOi442gX5kg5vcFOZZfmUx/mXYO5AyRC3MXWP0mbLUE3BKUWrCds1ix+OPHLe3WXC5XNL53ptOMxElLaz7ybUsufadBY9/fu4mugZgf7vZx6SQz/hvF043ISX/Mdsoz9QYmCX8fMYL0hEqzXLWM1me02knpuRbXsC8tdM+x7vmWmrrQh/P7mgMVGU4A3B5jU49OaXX/i8Gy3N+iizKEbPKkVvsma1P6SEmqeRVH2U8CwGa/wHjXqG++KPWrHniGePeET3UZJX05VhgLouR/H526uxWdc7PoIectBJ/a8B3872yoxvHwHxu51EFCPwHhAjMv/gBzNUYIP5duEeJe0f0L+D749HrhKeLAAAAAElFTkSuQmCC" }), i.createElement("image", { id: "_Image10", width: "107px", height: "62px", href: "data:image/png;base64,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" }), i.createElement("linearGradient", { id: "_Linear11", x1: "0", y1: "0", x2: "1", y2: "0", gradientUnits: "userSpaceOnUse", gradientTransform: "matrix(-118.47,-106.79,210.785,-180.125,69.2121,1372.7)" }, i.createElement("stop", { offset: "0", style: { stopColor: "rgb(64, 128, 255)", stopOpacity: 1 } }), i.createElement("stop", { offset: "1", style: { stopColor: "rgb(64, 128, 255)", stopOpacity: 1 } })), i.createElement("image", { id: "_Image13", width: "107px", height: "34px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAiCAYAAABY6CeoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABFElEQVRoge2aQRKDMAhFmx6it/P+x7Ab64xOmaAG8vnwFnWhiOGFOG3TPsu6vpS0djpuH61zXoz5F3s6r4rRxipiftddeUbp3t18QozEu3/JfdSzgCy5VWpTWcVYSlaPqcvDEUpZQPUdCqUsSAbMoJIViJIVCBNZrO+MHtbjrs4KRMkKBJUs9uXXTxZ7JR2g6ix27sly6BIxReIOHdpZWevoNe68y2DAmTVXFmDBAB9pJ29nBYRCln5jgkVyv1QUsrIAJyvtvg1F7iGykF/KlniPG66zKDCyWLI2IqwOJSsQz2URbqZEpTorEDCypn6xnciVYT+SlbS+08Zt01lJfv7xBmYZLPpgy6p/pA9gyxIArKMLXxexLNiBCThLAAAAAElFTkSuQmCC" }), i.createElement("image", { id: "_Image15", width: "38px", height: "62px", href: "data:image/png;base64,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" })));
}
var qn = function() {
  return qn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, qn.apply(this, arguments);
}, Js = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, $s = { success: i.createElement(ki, null), info: i.createElement(ua, null), warning: i.createElement(Dl, null), error: i.createElement(jr, null), 404: i.createElement(qs, null), 403: i.createElement(Qs, null), 500: i.createElement(Gs, null) }, ec = { status: "info" };
function tc(e, n) {
  var t, r, a = v.useContext(Ae), l = a.getPrefixCls, s = a.componentConfig, o = a.rtl, u = gt(e, ec, s == null ? void 0 : s.Result), f = u.className, d = u.style, w = u.status, h = u.title, N = u.subTitle, S = u.extra, p = u.children, g = u.icon, E = Js(u, ["className", "style", "status", "title", "subTitle", "extra", "children", "icon"]), m = l("result"), b = "icon" in u ? g : $s[w];
  return i.createElement("div", qn({ ref: n, className: me(m, (t = {}, t[m + "-is-" + w] = w, t[m + "-rtl"] = o, t), f), style: d }, E), b && i.createElement("div", { className: m + "-icon" }, i.createElement("span", { className: me(m + "-icon-tip", (r = {}, r[m + "-icon-" + w] = w, r[m + "-icon-custom"] = w === null, r)) }, b)), h && i.createElement("div", { className: m + "-title" }, h), N && i.createElement("div", { className: m + "-subtitle" }, N), S && i.createElement("div", { className: m + "-extra" }, S), p && i.createElement("div", { className: m + "-content" }, p));
}
var _i = v.forwardRef(tc);
_i.displayName = "Result";
function rc(e, n) {
  var t, r = e.style, a = e.className, l = e.prefixCls, s = e.index, o = s === void 0 ? 1 : s, u = e.current, f = u === void 0 ? 1 : u, d = e.status, w = e.title, h = e.description, N = e.icon, S = e.nextStepError, p = e.type, g = e.customDot, E = e.labelPlacement, m = e.disabled, b = e.onClick, j = e.onChange, x = e.direction, L = e.id, D = e.lineless;
  function P(I) {
    if (p === "dot") return null;
    var F = o;
    return N ? F = N : I === "finish" ? F = i.createElement(ki, null) : I === "error" && (F = i.createElement(jr, null)), i.createElement("div", { className: l + "-icon" }, F);
  }
  function O(I) {
    m || (j && f !== o && j(o, L), b && b(o, L, I));
  }
  var T;
  d ? T = d : (f < o && (T = "wait"), f === o && (T = "process"), f > o && (T = "finish"));
  var V = me(l + "-item", l + "-item-" + T, (t = {}, t[l + "-item-custom"] = !!N, t[l + "-item-next-error"] = S, t[l + "-item-disabled"] = m, t[l + "-item-active"] = o === f, t), a), R = P(T), y = i.createElement("div", { className: l + "-item-icon" }, R), Z = g ? g(y, { index: o, status: T, title: w, description: h }) : y;
  return i.createElement("div", { ref: n, className: V, style: r, onClick: O }, !D && (E === "vertical" || x === "vertical") && i.createElement("div", { className: l + "-item-tail" }), p !== "arrow" && Z, i.createElement("div", { className: l + "-item-content" }, i.createElement("div", { className: l + "-item-title" }, w), h && i.createElement("div", { className: l + "-item-description" }, h)));
}
var Wi = v.forwardRef(rc);
Wi.displayName = "Step";
var yn = function() {
  return yn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, yn.apply(this, arguments);
}, nc = { current: 1, type: "default", size: "default", direction: "horizontal", labelPlacement: "horizontal" };
function ac(e, n) {
  var t, r = v.useContext(Ae), a = r.getPrefixCls, l = r.componentConfig, s = r.rtl, o = gt(e, nc, l == null ? void 0 : l.Steps), u = o.className, f = o.style, d = o.children, w = o.current, h = w === void 0 ? 1 : w, N = o.status, S = o.onChange, p = o.type, g = o.size, E = o.direction, m = o.labelPlacement, b = o.customDot, j = o.lineless, x = a("steps"), L = m;
  p === "dot" && (L = E === "vertical" ? "horizontal" : "vertical"), p === "navigation" && (L = "horizontal");
  var D = E;
  (p === "navigation" || p === "arrow") && (D = "horizontal");
  var P = me(x, x + "-" + D, x + "-label-" + L, x + "-size-" + g, (t = {}, t[x + "-change-onclick"] = typeof S == "function", t[x + "-mode-" + p] = p !== "default", t[x + "-lineless"] = j, t[x + "-rtl"] = s, t), u);
  return i.createElement("div", yn({ ref: n, style: f, className: P }, aa(o)), i.Children.toArray(d).filter(function(O) {
    return O && O.type && O.type.displayName === "Step";
  }).map(function(O, T) {
    if (T += 1, O) {
      var V = yn({ prefixCls: x, type: p, index: T, current: h, status: h === T ? N : void 0, customDot: b, labelPlacement: L, direction: D, onChange: S, lineless: j }, O.props);
      return N === "error" && h === T + 1 && (V.nextStepError = true), i.cloneElement(O, V);
    }
    return null;
  }));
}
var ic = v.forwardRef(ac), Qt = ic;
Qt.displayName = "Steps";
Qt.Step = Wi;
function lc(e, n) {
  var t = v.useContext(Ae).getPrefixCls, r = t("typography"), a = e.className, l = e.style, s = e.children, o = me(r, a);
  return i.createElement("article", { ref: n, style: l, className: o }, s);
}
var Yi = v.forwardRef(lc);
Yi.displayName = "Typography";
var oc = function(e, n, t, r) {
  function a(l) {
    return l instanceof t ? l : new t(function(s) {
      s(l);
    });
  }
  return new (t || (t = Promise))(function(l, s) {
    function o(d) {
      try {
        f(r.next(d));
      } catch (w) {
        s(w);
      }
    }
    function u(d) {
      try {
        f(r.throw(d));
      } catch (w) {
        s(w);
      }
    }
    function f(d) {
      d.done ? l(d.value) : a(d.value).then(o, u);
    }
    f((r = r.apply(e, n || [])).next());
  });
}, sc = function(e, n) {
  var t = { label: 0, sent: function() {
    if (l[0] & 1) throw l[1];
    return l[1];
  }, trys: [], ops: [] }, r, a, l, s;
  return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(f) {
    return function(d) {
      return u([f, d]);
    };
  }
  function u(f) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (r = 1, a && (l = f[0] & 2 ? a.return : f[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, f[1])).done) return l;
      switch (a = 0, l && (f = [f[0] & 2, l.value]), f[0]) {
        case 0:
        case 1:
          l = f;
          break;
        case 4:
          return t.label++, { value: f[1], done: false };
        case 5:
          t.label++, a = f[1], f = [0];
          continue;
        case 7:
          f = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (l = t.trys, !(l = l.length > 0 && l[l.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            t = 0;
            continue;
          }
          if (f[0] === 3 && (!l || f[1] > l[0] && f[1] < l[3])) {
            t.label = f[1];
            break;
          }
          if (f[0] === 6 && t.label < l[1]) {
            t.label = l[1], l = f;
            break;
          }
          if (l && t.label < l[2]) {
            t.label = l[2], t.ops.push(f);
            break;
          }
          l[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      f = n.call(e, t);
    } catch (d) {
      f = [6, d], a = 0;
    } finally {
      r = l = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: true };
  }
};
function cc(e) {
  return oc(this, void 0, void 0, function() {
    var n, t, r, a, l;
    return sc(this, function(s) {
      switch (s.label) {
        case 0:
          if (!(navigator.clipboard && navigator.clipboard.writeText)) return [3, 4];
          s.label = 1;
        case 1:
          return s.trys.push([1, 3, , 4]), [4, navigator.clipboard.writeText(e)];
        case 2:
          return s.sent(), [2];
        case 3:
          return n = s.sent(), console.error(n ?? new DOMException("The request is not allowed", "NotAllowedError")), [3, 4];
        case 4:
          t = document.createElement("span"), t.textContent = e, t.style.whiteSpace = "pre", document.body.appendChild(t), r = window.getSelection(), a = window.document.createRange(), r.removeAllRanges(), a.selectNode(t), r.addRange(a), l = false;
          try {
            l = window.document.execCommand("copy");
          } catch (o) {
            console.log("error", o);
          }
          return r.removeAllRanges(), window.document.body.removeChild(t), [2, l ? Promise.resolve() : Promise.reject(new DOMException("The request is not allowed", "NotAllowedError"))];
      }
    });
  });
}
function ui(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function fi(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ui(Object(t), true).forEach(function(r) {
      Et(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ui(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function uc(e, n) {
  var t = v.useContext(xt), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, s = e.className, o = fi(fi({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-copy") });
  return l && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", bt({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z" }));
}
var fa = i.forwardRef(uc);
fa.defaultProps = { isIcon: true };
fa.displayName = "IconCopy";
function di(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function mi(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? di(Object(t), true).forEach(function(r) {
      Et(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : di(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function fc(e, n) {
  var t = v.useContext(xt), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, s = e.className, o = mi(mi({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(s ? s + " " : "").concat(a, "-icon ").concat(a, "-icon-edit") });
  return l && (o.className = "".concat(o.className, " ").concat(a, "-icon-loading")), delete o.spin, delete o.isIcon, i.createElement("svg", bt({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), i.createElement("path", { d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36" }));
}
var da = i.forwardRef(fc);
da.defaultProps = { isIcon: true };
da.displayName = "IconEdit";
var pi = function(e) {
  return Pi(e) || zt(e);
};
function Nr(e) {
  var n = [""];
  return i.Children.forEach(e, function(t) {
    var r = n.length - 1, a = n[r];
    pi(t) && pi(a) ? n[r] = "" + a + t : t && t.props && t.props.children && n.push(Nr(t.props.children));
  }), n.join("");
}
var Vt = function() {
  return Vt = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Vt.apply(this, arguments);
}, dc = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
};
function mc(e) {
  var n = e.children, t = e.copyable, r = e.editable, a = e.ellipsis, l = e.expanding, s = e.setEditing, o = e.onClickExpand, u = e.forceShowExpand, f = e.isEllipsis, d = e.currentContext, w = d === void 0 ? {} : d, h = ta(), N = w.getPrefixCls, S = w.locale, p = N("typography"), g = dc(v.useState(false), 2), E = g[0], m = g[1], b = v.useRef(null), j = _e(t) ? t : {}, x = _e(a) ? a : {}, L = _e(r) ? r : {}, D = Ee(x.expandNodes) ? x.expandNodes : [S.Typography.fold, S.Typography.unfold];
  v.useEffect(function() {
    return function() {
      clearTimeout(b.current), b.current = null;
    };
  }, []);
  function P(Z) {
    if (!E) {
      var I = j.text !== void 0 ? j.text : Nr(n);
      cc(I), m(true), j.onCopy && j.onCopy(I, Z), b.current = setTimeout(function() {
        m(false);
      }, 3e3);
    }
  }
  var O = function(Z) {
    L.onStart && L.onStart(Nr(n), Z), s(true);
  }, T = j.tooltips || [S.Typography.copy, S.Typography.copied], V = t && i.createElement(Pt, Vt({ content: E ? T[1] : T[0] }, j.tooltipProps), i.createElement("span", Vt({ className: E ? p + "-operation-copied" : p + "-operation-copy", onClick: P, role: "button", "aria-label": T[0], tabIndex: 0 }, h({ onPressEnter: P })), E ? i.createElement(Ci, null) : j.icon || i.createElement(fa, null))), R = r && i.createElement(Pt, Vt({ content: S.Typography.edit }, L.tooltipProps), i.createElement("span", Vt({ tabIndex: 0, "aria-label": S.Typography.edit, role: "button", className: p + "-operation-edit", onClick: O }, h({ onPressEnter: O })), i.createElement(da, null))), y = u || x.expandable && f ? i.createElement("a", Vt({ className: p + "-operation-expand", onClick: o, role: "button", tabIndex: 0, "aria-label": S.Typography.unfold }, h({ onPressEnter: o })), l ? D[0] : D[1]) : null;
  return i.createElement(i.Fragment, null, y, R, V);
}
function pc(e, n) {
  var t = e.prefixCls, r = e.children, a = e.setEditing, l = e.editableConfig, s = e.style, o = me(t + "-typography", t + "-edit-content", e.className), u = Nr(r), f = v.useRef(null);
  v.useEffect(function() {
    if (f.current && f.current.focus && f.current.focus(), f.current && f.current.dom) {
      var N = f.current.dom.value.length;
      f.current.dom.setSelectionRange(N, N);
    }
  }, []);
  function d() {
    a(false), l.onEnd && l.onEnd(u);
  }
  function w(N) {
    l.onChange && l.onChange(N);
  }
  function h() {
    d();
  }
  return i.createElement("div", { className: o, style: s, ref: n }, i.createElement(Xe.TextArea, { className: t + "-edit-content-textarea", onBlur: h, ref: f, value: u, autoSize: true, onChange: w, onPressEnter: d }));
}
const vc = v.forwardRef(pc);
var Gt = function() {
  return Gt = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Gt.apply(this, arguments);
}, xr = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, hc = "hxj", je;
(function(e) {
  e[e.INIT = 0] = "INIT", e[e.BEFORE_MEASURE = 1] = "BEFORE_MEASURE", e[e.MEASURING = 2] = "MEASURING", e[e.MEASURE_END = 3] = "MEASURE_END", e[e.NO_NEED_ELLIPSIS = 4] = "NO_NEED_ELLIPSIS";
})(je || (je = {}));
function gc(e) {
  var n = e.children, t = e.rows, r = t === void 0 ? 1 : t, a = e.width, l = e.expanding, s = e.renderMeasureContent, o = e.simpleEllipsis, u = e.onEllipsis, f = e.suffix, d = e.expandNodes, w = e.expandable, h = e.ellipsisStr, N = v.useRef(), S = v.useRef(), p = xr(v.useState([0, 0, 0]), 2), g = p[0], E = p[1], m = xr(v.useState(0), 2), b = m[0], j = m[1], x = xr(v.useState(je.NO_NEED_ELLIPSIS), 2), L = x[0], D = x[1], P = xr(g, 3), O = P[0], T = P[1], V = P[2], R = xr(v.useState(false), 2), y = R[0], Z = R[1], I = v.useMemo(function() {
    return i.Children.toArray(n);
  }, [n]), F = v.useRef(0);
  Pr(function() {
    u && u(y);
  }, [y]);
  var ne = function(U) {
    return Pi(U) || zt(U);
  }, k = function(U) {
    var K = 0;
    return U.forEach(function(ee) {
      ne(ee) ? K += String(ee).length : K += 1;
    }), K;
  }, A = v.useMemo(function() {
    return k(I);
  }, [I]), M = Ni(function(U) {
    return E(U);
  }), G = function(U) {
    var K = [], ee = 0;
    if (U >= A) return I;
    for (var X in I) {
      var $ = I[X];
      if (ee >= U) return K;
      var te = ne($) ? String($).length : 1;
      if (te > U - ee) return K.push(String($).slice(0, U - ee)), ee = U, K;
      ee += te, K.push($);
    }
    return K;
  }, fe = function() {
    var U, K;
    if (b) {
      if (L === je.INIT) {
        var ee = r * b, X = (U = S.current) === null || U === void 0 ? void 0 : U.offsetHeight, $ = X > ee;
        !$ || o || l ? (D(je.MEASURE_END), Z($), E([0, A, A])) : (Z(true), D(je.BEFORE_MEASURE));
      } else if (L === je.BEFORE_MEASURE) {
        var te = N == null ? void 0 : N.current.offsetWidth, W = r * a;
        if (te > r * a) {
          var _ = Math.max(W / te - 0.1, 0), oe = Math.min(W / te + 0.1, 1), z = Math.floor(_ * A), ve = Math.ceil(oe * A), q = Math.floor((z + ve) / 2);
          F.current = q;
        }
        D(je.MEASURING);
      } else if (L === je.MEASURING) if (O !== V - 1) {
        var X = (K = S.current) === null || K === void 0 ? void 0 : K.offsetHeight, ee = r * b, ge = O, Se = V;
        X <= ee ? ge = T : Se = T;
        var Y = Math.floor((Se + ge) / 2);
        M([ge, Y, Se]);
      } else M([O, O, O]), D(je.MEASURE_END);
    }
  };
  Zr(function() {
    e.rows && a ? (E([0, Math.floor(A / 2), A]), D(je.INIT)) : D(je.NO_NEED_ELLIPSIS);
  }, [A, o, l, a, f, d, w, h, e.rows]), Zr(function() {
    if (N.current && L === je.INIT) {
      var U = N.current.offsetHeight;
      j(U);
    }
  }, [L]), Zr(function() {
    fe();
  }, [L, T, O, V, b]);
  var Q = { zIndex: -999, position: "fixed", opacity: 0, padding: 0, margin: 0 }, se = Gt({ whiteSpace: "nowrap" }, Q), le = o ? Gt({ textOverflow: "clip" }, Q) : Q, pe;
  if (L === je.INIT || L === je.BEFORE_MEASURE) pe = i.createElement("div", null, i.createElement("div", { ref: N, style: se }, L === je.INIT ? hc : s(n, false)), i.createElement("div", { ref: S, style: Gt({ width: a }, le) }, s(n, y))), pe = pe.props.children;
  else if (L === je.MEASURING) {
    var ae = { height: b * r, overflow: "hidden" };
    pe = i.createElement("div", null, i.createElement("div", { ref: S, style: Gt({ width: a }, le) }, s(G(T), y)), i.createElement("div", { style: ae }, G(F.current))), pe = pe.props.children;
  } else L === je.MEASURE_END ? pe = s(G(T), y) : L === je.NO_NEED_ELLIPSIS && (pe = s(n, false));
  return { ellipsisNode: pe, isEllipsis: y, measureStatus: L };
}
var yc = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, xc = function(e, n) {
  if (typeof window < "u" && window.CSS && window.CSS.supports) return ht(n) ? window.CSS.supports(e) : window.CSS.supports(e, n);
  if (typeof document < "u" && document.createElement) {
    var t = document.createElement("div");
    return t.setAttribute("style", e + ":" + n + ";"), typeof t.style[e] < "u";
  }
  return false;
}, bc = { display: " -webkit-box", "-webkit-line-clamp": 2 }, Ec = function() {
  return Object.entries(bc).every(function(e) {
    var n = yc(e, 2), t = n[0], r = n[1];
    return xc(t, r);
  });
};
function Cc(e) {
  var n = e.cssEllipsis, t = e.ellipsisStr, r = t === void 0 ? "..." : t, a = e.suffix, l = e.rows, s = v.useMemo(function() {
    return !n || l > 1 && !Ec() ? false : r === "..." && !a;
  }, [r, n, l, a]), o = { textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }, u = { textOverflow: "ellipsis", whiteSpace: "normal", overflow: "hidden", WebkitLineClamp: "" + e.rows, WebkitBoxOrient: "vertical", display: "-webkit-box" };
  return { simpleEllipsis: s, ellipsisStyle: s ? e.rows > 1 ? u : o : {} };
}
var vi = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, hi = function(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, a = n.length, l; r < a; r++) (l || !(r in n)) && (l || (l = Array.prototype.slice.call(n, 0, r)), l[r] = n[r]);
  return e.concat(l || Array.prototype.slice.call(n));
};
function wc(e) {
  var n = null, t = function() {
    for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
    n || (e.apply(void 0, hi([], vi(r), false)), n = Na(function() {
    })), n && Pa(n), n = Na(function() {
      e.apply(void 0, hi([], vi(r), false)), n = null;
    });
  };
  return t.cancel = function() {
    Pa(n), n = null;
  }, t;
}
var Qe = function() {
  return Qe = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Qe.apply(this, arguments);
}, Sc = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Rn = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
};
function Oc(e, n) {
  var t = e.type, r = e.bold, a = e.disabled, l = e.mark, s = e.underline, o = e.delete, u = e.code, f = [], d = [];
  return t && d.push(n + "-" + t), a && d.push(n + "-disabled"), r && f.push("b"), s && f.push("u"), o && f.push("del"), u && f.push("code"), l && f.push("mark"), { component: f, className: d };
}
function Pc(e, n) {
  var t, r = e.componentType, a = e.style, l = e.className, s = e.children, o = e.editable, u = e.ellipsis, f = e.heading, d = e.blockquote, w = Sc(e, ["componentType", "style", "className", "children", "editable", "ellipsis", "heading", "blockquote"]), h = v.useContext(Ae), N = h.getPrefixCls, S = h.rtl, p = N("typography"), g = v.useRef(), E = Oc(e, p), m = E.component, b = E.className, j = Rn(v.useState(false), 2), x = j[0], L = j[1], D = Rn(v.useState(0), 2), P = D[0], O = D[1], T = _e(o) ? o : {}, V = "editing" in T ? T.editing : x, R = u ? Qe({ rows: 1, ellipsisStr: "...", cssEllipsis: false }, _e(u) ? u : {}) : {}, y = R.wrapper || i.Fragment, Z = Rn(na(false, { defaultValue: R.defaultExpanded, value: R.expanded }), 2), I = Z[0], F = Z[1], ne = Cc(R), k = ne.simpleEllipsis, A = ne.ellipsisStyle, M = function(X, $) {
    var te = ht(R.ellipsisStr) ? "..." : R.ellipsisStr, W = !ht(R.suffix) && R.suffix;
    return i.createElement(y, null, X, $ && !I && !k ? te : "", W, pe($));
  }, G = gc(Qe(Qe({}, R), { children: s, expanding: I, width: P, renderMeasureContent: M, simpleEllipsis: k || I })), fe = G.ellipsisNode, Q = G.isEllipsis, se = G.measureStatus, le = wc(function(X) {
    var $ = (X == null ? void 0 : X[0]).contentRect;
    if ($) {
      var te = m.includes("code") ? $.width - 18 : $.width, W = [je.NO_NEED_ELLIPSIS, je.MEASURE_END];
      W.includes(se) && O(te);
    }
  });
  function pe(X) {
    return i.createElement(i.Fragment, null, i.createElement(mc, Qe({}, e, { setEditing: L, onClickExpand: ae, expanding: I, isEllipsis: X, currentContext: h })));
  }
  function ae(X) {
    F(!I), e.onClickExpand && e.onClickExpand(X), R.onExpand && R.onExpand(!I, X);
  }
  Pr(function() {
    R.onEllipsis && R.onEllipsis(Q);
  }, [Q]), v.useImperativeHandle(n, function() {
    return g.current;
  });
  function U(X, $, te, W) {
    W === void 0 && (W = {});
    var _ = X;
    return $.forEach(function(oe, z) {
      var ve = z === 0 ? W : {}, q = _e(te.mark) && te.mark.color ? Qe({ style: { backgroundColor: te.mark.color } }, ve) : Qe({}, ve);
      _ = i.createElement(oe, Qe({}, q), _);
    }), _;
  }
  var K;
  r === "Paragraph" ? K = d ? "blockquote" : "div" : r === "Title" ? K = "h" + f : r === "Text" && (K = u ? "div" : "span");
  function ee() {
    var X, $ = Nr(i.Children.toArray(s)), te = R.showTooltip, W = _e(R.showTooltip) && R.showTooltip.type === "popover" ? "popover" : "tooltip", _ = _e(R.showTooltip) ? R.showTooltip.props || {} : {}, oe = W === "popover" ? kl : Pt, z = Q && !te && !I ? { title: $ } : {}, ve = Qe({ style: a }, z), q = Q && te && !I, ge = i.createElement(Vn, { onResize: le, getTargetDOMNode: function() {
      return g.current;
    } }, i.createElement(K, Qe({ ref: g, className: me(p, b, (X = {}, X[p + "-rtl"] = S, X), l) }, ve, rr(w, ["spacing", "type", "close", "bold", "disabled", "mark", "underline", "delete", "code", "copyable", "isEllipsis", "expanding", "onClickExpand", "setEditing", "forceShowExpand"])), k && se !== je.INIT && !I && Q ? U(M(i.createElement("span", { style: A }, s), Q), m.length ? m : ["span"], e, { className: p + "-simple-ellipsis" }) : U(fe, m, e)));
    return q ? i.createElement(oe, Qe({ content: $ }, _), i.createElement("span", null, ge)) : ge;
  }
  return V ? i.createElement(vc, Qe({ ref: n }, e, { className: me(p, b, (t = {}, t[p + "-rtl"] = S, t), p + "-" + K, l), prefixCls: p, setEditing: L, editableConfig: T })) : ee();
}
const ma = v.forwardRef(Pc);
var Qn = function() {
  return Qn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Qn.apply(this, arguments);
}, Nc = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
};
function jc(e, n) {
  var t = e.heading, r = t === void 0 ? 1 : t, a = Nc(e, ["heading"]);
  return i.createElement(ma, Qn({ heading: r }, a, { componentType: "Title", ref: n }));
}
var Bi = v.forwardRef(jc);
Bi.displayName = "Title";
var Gn = function() {
  return Gn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Gn.apply(this, arguments);
};
function kc(e, n) {
  return i.createElement(ma, Gn({}, e, { componentType: "Text", ref: n }));
}
var Zi = v.forwardRef(kc);
Zi.displayName = "Text";
var Jn = function() {
  return Jn = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Jn.apply(this, arguments);
};
function Ic(e, n) {
  var t = e.spacing, r = t === void 0 ? "default" : t, a = e.className, l = v.useContext(Ae).getPrefixCls, s = l("typography"), o = r === "close" ? me(s + "-spacing-close", a) : a;
  return i.createElement(ma, Jn({}, e, { ref: n, componentType: "Paragraph", className: o }));
}
var Xi = v.forwardRef(Ic);
Xi.displayName = "Paragraph";
var $n = function() {
  return $n = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, $n.apply(this, arguments);
}, Yr = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], s;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, Lc = { rows: 1, expandable: true, defaultExpanded: false }, Ac = function(e, n) {
  var t, r, a = v.useContext(Ae), l = gt(e, Lc, (t = a.componentConfig) === null || t === void 0 ? void 0 : t["Typography.Ellipsis"]), s = l.className, o = l.style, u = l.rows, f = l.disabled, d = l.showTooltip, w = l.children, h = l.expandable, N = l.expandRender, S = l.onExpand, p = l.onEllipsis, g = a.locale, E = Il ? false : /^((?!chrome|android).)*safari/i.test((r = navigator == null ? void 0 : navigator.userAgent) !== null && r !== void 0 ? r : ""), m = v.useRef(null), b = v.useRef(null), j = Yr(v.useState(""), 2), x = j[0], L = j[1], D = Yr(v.useState(false), 2), P = D[0], O = D[1], T = v.useRef(null), V = v.useRef(null), R = Yr(na(false, { defaultValue: l.defaultExpanded, value: l.expanded }), 2), y = R[0], Z = R[1], I = Yr(v.useState(false), 2), F = I[0], ne = I[1], k = v.useMemo(function() {
    return _e(h) ? !h.single && u === 1 : u === 1;
  }, [u, h]), A = v.useMemo(function() {
    return _e(d) ? { tooltip: true, tooltipProps: d } : { tooltip: !!d, tooltipProps: d };
  }, [d]);
  v.useEffect(function() {
    if (b.current) {
      var ae = b.current.textContent;
      ae && L(ae);
    }
  }, [w, b]);
  var M = a.getPrefixCls("ellipsis"), G = function() {
    return N ? N(y) : i.createElement("span", { className: M + "-action-text" }, y ? g.Typography.fold : g.Typography.unfold);
  }, fe = function() {
    var ae;
    return h && F ? i.createElement("div", { className: me(M + "-action", (ae = {}, ae[M + "-action-collapsed"] = !y, ae)), onClick: function(U) {
      y ? (Z(false), S == null || S(false, U)) : (Z(true), O(false), S == null || S(true, U));
    } }, G()) : null;
  }, Q = v.useCallback(Ni(function() {
    if (V.current && T.current) {
      var ae = k ? V.current.offsetWidth > T.current.offsetWidth : V.current.offsetHeight > T.current.offsetHeight;
      ae ? F === false && (ne(true), p == null || p(true)) : F === true && (ne(false), p == null || p(false));
    }
  }), [F, k]), se = function() {
    return f ? null : i.createElement(Vn, { onResize: Q }, i.createElement("div", { className: k ? me(M + "-content-mirror", M + "-single") : me(M + "-content-mirror", M + "-multiple", M + "-collapsed"), style: { WebkitBoxOrient: "vertical", MozBoxOrient: "vertical", WebkitLineClamp: u }, ref: T }, i.createElement(Vn, { onResize: Q }, i.createElement("span", { ref: V, className: M + "-text" }, w))));
  }, le = function() {
    var ae, U;
    return k ? i.createElement("div", { className: me(M + "-content", M + "-single") }, i.createElement("span", { ref: b, className: M + "-text" }, w)) : E ? i.createElement("div", { className: me(M + "-content", M + "-multiple"), title: !A.tooltip && F && !y ? x : void 0 }, !y && fe(), i.createElement("span", { ref: b, className: me(M + "-text", (ae = {}, ae[M + "-collapsed"] = !y, ae)), style: { WebkitBoxOrient: "vertical", MozBoxOrient: "vertical", WebkitLineClamp: u } }, w), y && fe()) : i.createElement("div", { className: me(M + "-content", M + "-multiple", (U = {}, U[M + "-collapsed"] = !y, U)), style: { WebkitBoxOrient: "vertical", MozBoxOrient: "vertical", WebkitLineClamp: u }, title: !A.tooltip && F && !y ? x : void 0 }, !y && fe(), i.createElement("span", { ref: b, className: M + "-text" }, w), y && fe());
  }, pe = function() {
    return f ? i.createElement("div", { className: M + "-content" }, i.createElement("span", { ref: b, className: M + "-text" }, w)) : A.tooltip ? i.createElement(Pt, $n({ content: x, popupVisible: P, disabled: !F || y, triggerProps: { mouseEnterDelay: 100 }, onVisibleChange: function(ae) {
      ae ? F && !y && O(true) : O(false);
    } }, A.tooltipProps), le()) : le();
  };
  return i.createElement("div", { ref: m, className: me(M, s), style: o }, se(), pe());
}, Dc = v.forwardRef(Ac), Ht = Yi;
Ht.Title = Bi;
Ht.Text = Zi;
Ht.Paragraph = Xi;
Ht.Ellipsis = Dc;
function Mc(e) {
  const n = [{ key: "detail", label: "详情" }];
  return e.auditStatus !== "not_applied" ? n.push({ key: "application", label: "查看申请" }) : e.status === "completed" && n.push({ key: "apply", label: "申请发布" }), e.status === "completed" && n.push({ key: "knowledge", label: "加入知识库" }, { key: "template", label: "加入模板库" }), n.push({ key: "delete", label: "删除", danger: true }), n;
}
function Tc(e) {
  return e.length >= 5 ? { visible: e.slice(0, 2), more: e.slice(2) } : { visible: e, more: [] };
}
function Rc({ task: e, onAction: n }) {
  const [t, r] = v.useState(false), { visible: a, more: l } = Tc(Mc(e));
  return c.jsxs("div", { className: "task-row-actions", onKeyDown: (s) => {
    s.key === "Escape" && r(false);
  }, children: [a.map((s) => c.jsx(he, { type: "text", status: s.danger ? "danger" : void 0, "aria-label": `${s.label}：${e.name}`, onClick: () => n(s.key, e), children: s.label }, s.key)), l.length > 0 && c.jsx(Ll, { trigger: "click", position: "br", popupVisible: t, onVisibleChange: r, droplist: c.jsx(ja, { selectable: false, className: "task-actions-menu", onClickMenuItem: (s) => {
    r(false);
    const o = l.find((u) => u.key === s);
    o && n(o.key, e);
  }, children: l.map((s) => c.jsx(ja.Item, { className: s.danger ? "task-action-danger" : void 0, children: s.label }, s.key)) }), children: c.jsx(he, { type: "text", "aria-label": `更多操作：${e.name}`, "aria-haspopup": "menu", "aria-expanded": t, children: "更多" }) })] });
}
function gi({ task: e, expanded: n = false }) {
  const t = n ? e.tags : e.tags.slice(0, 2), r = n ? [] : e.tags.slice(2), a = r.length + (e.additionalTagCount ?? 0);
  return c.jsxs("div", { className: "task-tags", children: [t.map((l, s) => c.jsx(ji, { className: "task-topic-tag", children: l }, `${l}-${s}`)), a > 0 && c.jsx(Pt, { content: c.jsxs("div", { children: [r.map((l, s) => c.jsx("div", { children: l }, `${l}-${s}`)), !!e.additionalTagCount && c.jsxs("div", { children: ["另有 ", e.additionalTagCount, " 个标签，标签信息暂不可用"] })] }), children: c.jsxs("button", { type: "button", className: "task-topic-overflow", "aria-label": `查看其余 ${a} 个标签`, children: ["+", a] }) })] });
}
const Vc = [{ id: "ai", name: "AI硬件产业资料", description: "研究报告 12 篇 · 企业图谱 · 投融资数据" }, { id: "energy", name: "新能源材料数据包", description: "指标表格 · 专家观点 · 区域案例" }, { id: "consumer", name: "消费市场趋势数据库", description: "消费指标 · 人群洞察 · 市场月报" }, { id: "low-altitude", name: "低空经济政策包", description: "政策文件 42 份 · 城市试点 18 条 · 容量 50/50 已满", full: true }], zc = ["先进制造", "人工智能", "新能源", "低空经济", "产业政策", "金融", "消费", "城市治理", "综合"], Hc = ["研究分析", "趋势洞察", "投资决策", "政策制定", "招商落地", "转型规划", "周期跟踪"], Ui = { 研究报告: "研究报告", 洞察报告: "洞察报告", 战略咨询报告: "战略咨询成果" };
function ea(e) {
  return { title: e.name, industries: [e.industry], tags: [...e.tags], signature: "", summary: "", scope: "all", allowDownload: false, allowKnowledge: false, allowTemplate: false, desNumbers: true, desKeyword: false, keywords: "", confirmed: false, projectMode: "none", projectName: "", projectClient: "", projectDoneDate: "", scoreDate: "", evidence: [], projectPublic: false };
}
function Ki() {
  return new URLSearchParams(window.location.search).get("qa") === "1" ? sessionStorage : localStorage;
}
function pa(e, n, t) {
  try {
    const r = JSON.parse(Ki().getItem(e) || "null");
    return r === null ? n : t(r);
  } catch {
    return n;
  }
}
function xn(e, n) {
  try {
    return Ki().setItem(e, JSON.stringify(n)), true;
  } catch {
    return false;
  }
}
const On = (e) => e && typeof e == "object" && !Array.isArray(e) ? e : {}, yi = (e) => Array.isArray(e) ? e.filter((n) => typeof n == "string") : [], qi = (e) => Array.isArray(e) ? e.flatMap((n) => {
  const t = On(n);
  return typeof t.name == "string" && typeof t.size == "number" && t.size >= 0 ? [{ name: t.name, size: t.size }] : [];
}) : [];
function Qi(e, n) {
  const t = On(e), r = { ...n };
  for (const a of ["title", "signature", "summary", "keywords", "projectName", "projectClient", "projectDoneDate", "scoreDate"]) typeof t[a] == "string" && (r[a] = t[a]);
  for (const a of ["allowDownload", "allowKnowledge", "allowTemplate", "desNumbers", "desKeyword", "confirmed", "projectPublic"]) typeof t[a] == "boolean" && (r[a] = t[a]);
  for (const a of ["investment", "income", "satisfaction"]) typeof t[a] == "number" && Number.isFinite(t[a]) && (r[a] = t[a]);
  return Array.isArray(t.industries) && (r.industries = yi(t.industries)), Array.isArray(t.tags) && (r.tags = yi(t.tags)), (t.scope === "all" || t.scope === "org") && (r.scope = t.scope), (t.projectMode === "none" || t.projectMode === "manual") && (r.projectMode = t.projectMode), r.evidence = qi(t.evidence), r;
}
function Fc(e, n) {
  const t = On(e), r = { ...n };
  for (const a of ["title", "type", "industry", "scene", "requirement"]) typeof t[a] == "string" && (r[a] = t[a]);
  return r.files = qi(t.files), r;
}
function _c(e) {
  return Array.isArray(e) ? e.flatMap((n) => {
    const t = On(n);
    return typeof t.id == "string" && typeof t.name == "string" && typeof t.description == "string" ? [{ id: t.id, name: t.name, description: t.description }] : [];
  }) : [];
}
function va({ files: e, onChange: n, accept: t, limit: r = 10, drag: a = false }) {
  return c.jsxs("div", { className: "task-local-files", children: [c.jsx(Ml, { accept: t, autoUpload: false, multiple: r > 1, drag: a, showUploadList: false, fileList: e.map((l, s) => ({ uid: String(s), name: l.name, status: "init" })), beforeUpload: (l) => l.size > 50 * 1024 * 1024 ? (Ge.error(`文件“${l.name}”超过 50MB，请重新选择。`), false) : true, onChange: (l) => n(l.map((s) => {
    var o, u;
    return { name: s.name ?? "", size: ((o = s.originFile) == null ? void 0 : o.size) ?? ((u = e[Number(s.uid)]) == null ? void 0 : u.size) ?? 0 };
  })), onExceedLimit: () => Ge.warning(`最多选择 ${r} 个文件，请移除已有文件后重试。`), limit: { maxCount: r, hideOnExceedLimit: false }, tip: `最多 ${r} 个文件，每个不超过 50MB；仅本地选择，尚未上传。`, children: !a && c.jsx(he, { size: "default", children: "选择文件" }) }), e.length > 0 && c.jsx("ul", { children: e.map((l, s) => c.jsxs("li", { children: [c.jsxs("span", { children: [l.name, " ", c.jsxs("small", { children: [(l.size / 1024).toFixed(1), " KB"] })] }), c.jsx(he, { type: "text", status: "danger", onClick: () => n(e.filter((o, u) => u !== s)), "aria-label": `移除文件：${l.name}`, children: "移除" })] }, `${l.name}-${s}`)) })] });
}
function Br({ value: e, label: n }) {
  return c.jsx(Xe, { "aria-label": n, value: e, readOnly: true, tabIndex: -1, size: "default", className: "task-readonly-input" });
}
function Gi({ draft: e, task: n, masked: t = false }) {
  const r = (l) => {
    let s = l.replace(new RegExp("(?<!\\d)1[3-9]\\d{9}(?!\\d)", "g"), "***********");
    if (e.desKeyword) for (const o of e.keywords.split(/[,，\n]/).map((u) => u.trim()).filter(Boolean)) s = s.split(o).join("***");
    return e.desNumbers && (s = s.split(/(\d{4}[-/年]\d{1,2}(?:[-/月]\d{1,2}日?)?|\d{1,2}:\d{2}(?::\d{2})?)/g).map((o, u) => u % 2 ? o : o.replace(/\d+(?:\.\d+)?/g, "***")).join("")), s;
  }, a = t ? r(e.title) : e.title;
  return c.jsxs("div", { className: "task-publish-details", children: [c.jsx(Ht.Title, { heading: 5, children: a }), c.jsx(ka, { column: 1, size: "small", data: [{ label: "报告版本", value: "当前版本" }, { label: "报告类型 / 栏目", value: `${n.reportType} / ${Ui[n.reportType] ?? n.reportType}` }, { label: "行业分类", value: e.industries.join("、") || "—" }, { label: "内容标签", value: c.jsx("div", { className: "task-dialog-tags", children: e.tags.map((l, s) => c.jsx(ji, { children: t ? r(l) : l }, `${l}-${s}`)) }) }, { label: "公开署名", value: t ? r(e.signature) : e.signature || "—" }, { label: "公开权限", value: `${e.scope === "all" ? "全平台公开" : "机构用户可见"}；${[e.allowDownload && "允许下载", e.allowKnowledge && "允许加入知识库", e.allowTemplate && "允许提取结构加入模板库"].filter(Boolean).join("、") || "未开放下载与复用"}` }, { label: "脱敏要求", value: ["手机号", e.desNumbers && "数字（除了时间）", e.desKeyword && `关键词：${e.keywords}`].filter(Boolean).join("、") }] }), c.jsx(Ht.Title, { heading: 6, children: "报告摘要" }), c.jsx("p", { className: "task-dialog-summary", children: (t ? r(e.summary) : e.summary) || "尚未填写摘要" }), e.projectMode === "manual" && c.jsxs(c.Fragment, { children: [c.jsx(Ht.Title, { heading: 6, children: "关联项目及成果数据" }), c.jsx(ka, { column: 2, size: "small", data: [{ label: "项目名称", value: e.projectName }, { label: "委托机构", value: e.projectClient || "—" }, { label: "实际完成日期", value: e.projectDoneDate || "—" }, { label: "实际投资额（万元）", value: e.investment ?? "—" }, { label: "实际净收益（万元）", value: e.income ?? "—" }, { label: "ROI", value: e.investment ? `${((e.income ?? 0) / e.investment * 100).toFixed(2)}%` : "—" }, { label: "客户满意度", value: e.satisfaction ?? "—" }, { label: "评价日期", value: e.scoreDate || "—" }] })] })] });
}
const xi = "thinktank:personal-collections:v1";
function Wc({ task: e, onClose: n, onConfirm: t }) {
  var D;
  const [r, a] = v.useState(() => pa(xi, [], _c)), [l, s] = v.useState(((D = e.knowledgeDraft) == null ? void 0 : D.collectionId) ?? ""), [o, u] = v.useState(false), [f, d] = v.useState(""), [w, h] = v.useState(""), [N, S] = v.useState([]), [p, g] = v.useState(""), [E, m] = v.useState(false), b = [...Vc, ...r], j = b.find((P) => P.id === l);
  function x() {
    if (!f.trim()) {
      g("请填写知识库名称");
      return;
    }
    if (b.some((T) => T.name === f.trim())) {
      g("已有同名合集，请使用其他名称");
      return;
    }
    const P = { id: `local-${Date.now()}`, name: f.trim(), description: w.trim() || "新建个人合集" }, O = [...r, P];
    if (!xn(xi, O)) {
      Ge.error("浏览器无法保存合集，请重试。");
      return;
    }
    a(O), s(P.id), u(false), g(""), Ge.success("已创建本机合集信息，已选文件尚未上传。");
  }
  function L() {
    if (!j || j.full) {
      g("请选择一个容量可用的个人合集");
      return;
    }
    t({ collectionId: l, requestedAt: (/* @__PURE__ */ new Date()).toISOString() }), m(true);
  }
  return c.jsx(Ft, { title: o ? "新建知识库" : "加入知识库", visible: true, onCancel: n, maskClosable: false, autoFocus: false, className: "task-form-modal task-standard-modal task-knowledge-modal", style: { width: 560 }, footer: E ? c.jsxs("div", { className: "task-modal-footer", children: [c.jsx(he, { size: "default", onClick: () => {
    t(void 0), m(false);
  }, children: "撤销本地确认" }), c.jsx(he, { size: "default", type: "primary", onClick: n, children: "关闭" })] }) : o ? c.jsxs("div", { className: "task-modal-footer", children: [c.jsx(he, { size: "default", onClick: () => {
    u(false), g("");
  }, children: "返回选择" }), c.jsx(he, { size: "default", type: "primary", onClick: x, children: "创建并选择合集" })] }) : c.jsxs("div", { className: "task-modal-footer", children: [c.jsx(he, { size: "default", onClick: n, children: "取消" }), c.jsx(he, { size: "default", type: "primary", onClick: L, children: "确认加入" })] }), children: E ? c.jsx(_i, { status: "success", title: "加入信息已在本机确认", subTitle: `目标合集：${j == null ? void 0 : j.name}。导入任务尚未发送，报告文件及来源版本将在服务接入后处理。` }) : o ? c.jsxs(c.Fragment, { children: [c.jsx("p", { className: "task-dialog-description", children: "创建合集并选择研究资料，供报告创作时引用；也可以先创建空合集。" }), c.jsxs(xe, { layout: "vertical", className: "task-dialog-form", size: "default", children: [c.jsx(xe.Item, { label: "知识库名称", required: true, validateStatus: p ? "error" : void 0, help: p, children: c.jsx(Xe, { "aria-label": "知识库名称", value: f, onChange: (P) => {
    d(P), g("");
  }, maxLength: 80, placeholder: "输入个人合集名称" }) }), c.jsx(xe.Item, { label: "内容简述", children: c.jsx(Xe.TextArea, { "aria-label": "内容简述", value: w, onChange: h, rows: 3, maxLength: 500, showWordLimit: true, placeholder: "说明合集主题、内容范围与用途" }) }), c.jsxs(xe.Item, { label: "来源", extra: "支持同时从多个来源添加；最多 10 个文档，每个不超过 50MB。", children: [c.jsx("div", { className: "task-collection-sources", children: c.jsx(ia.Group, { type: "button", value: "local", options: [{ label: "本地上传", value: "local" }, { label: "我的报告任务", value: "tasks", disabled: true }, { label: "案例广场", value: "cases", disabled: true }] }) }), c.jsx(va, { files: N, onChange: S, accept: ".pdf,.doc,.docx,.xls,.xlsx", drag: true }), c.jsx("p", { className: "task-dialog-help", children: "报告文件和案例素材服务尚未接入。选中文件仅供本次预览，创建时保存合集名称与简述。" })] })] })] }) : c.jsxs(c.Fragment, { children: [c.jsx("p", { className: "task-dialog-description", children: "选择一个个人合集导入当前公开版本，保留来源及版本信息。" }), c.jsx("div", { className: "task-collection-heading", children: "选择个人合集（单选）" }), c.jsx("div", { className: "task-collection-list", role: "radiogroup", "aria-label": "选择个人合集", children: b.map((P) => c.jsxs("div", { role: "radio", "aria-checked": l === P.id, "aria-disabled": P.full, tabIndex: P.full ? -1 : 0, className: `task-collection-row ${l === P.id ? "is-selected" : ""} ${P.full ? "is-full" : ""}`, onClick: () => {
    P.full || (s(P.id), g(""));
  }, onKeyDown: (O) => {
    !P.full && (O.key === "Enter" || O.key === " ") && (O.preventDefault(), s(P.id), g(""));
  }, children: [c.jsxs("span", { className: "task-collection-copy", children: [c.jsx("strong", { children: P.name }), c.jsx("span", { children: P.description })] }), c.jsx(he, { type: l === P.id ? "primary" : "outline", disabled: P.full, tabIndex: -1, children: P.full ? "已满" : l === P.id ? "已选择" : "选择" })] }, P.id)) }), p && c.jsx("p", { className: "task-collection-error", role: "alert", children: p }), c.jsx(he, { className: "task-new-collection-entry", size: "default", onClick: () => {
    u(true), g("");
  }, children: "没有合适的合集？新建个人合集" })] }) });
}
function Yc({ task: e, onClose: n }) {
  const t = `thinktank:template-draft:${e.id}:v1`, r = { title: `${e.name}—参考模板`, type: e.reportType, industry: "综合", scene: "研究分析", requirement: "", files: [] }, [a, l] = v.useState(() => pa(t, r, (h) => Fc(h, r))), [s, o] = v.useState({}), [u, f] = v.useState(false);
  function d(h, N) {
    l((S) => ({ ...S, [h]: N })), o((S) => ({ ...S, [h]: "" })), f(false);
  }
  function w() {
    const h = {};
    a.title.trim() || (h.title = "请填写模板标题"), a.requirement.trim() || (h.requirement = "请填写写作要求"), o(h), !Object.keys(h).length && (xn(t, a) ? (f(true), Ge.success("模板配置草稿已保存到本机，可重新打开继续编辑。")) : Ge.error("浏览器无法保存草稿，请重试。"));
  }
  return c.jsxs(Ft, { title: "自定义写作模板", visible: true, onCancel: n, maskClosable: false, autoFocus: false, className: "task-form-modal task-standard-modal task-template-modal", style: { width: 560 }, footer: c.jsxs("div", { className: "task-modal-footer", children: [c.jsx(he, { size: "default", onClick: n, children: "取消" }), c.jsx(he, { size: "default", type: "primary", onClick: w, children: u ? "草稿已保存" : "保存模板草稿" })] }), children: [c.jsx("p", { className: "task-dialog-description", children: "先用自然语言描述模板用途，系统生成模板后可继续编辑章节、适用行业场景和模板简述。" }), c.jsxs(xe, { layout: "vertical", className: "task-dialog-form task-standard-form", size: "default", children: [c.jsx(xe.Item, { label: "模板标题", required: true, validateStatus: s.title ? "error" : void 0, help: s.title, children: c.jsx(Xe, { "aria-label": "模板标题", value: a.title, onChange: (h) => d("title", h), maxLength: 120, showWordLimit: true }) }), c.jsx(xe.Item, { label: "模板类型", required: true, children: c.jsx(ia.Group, { type: "button", "aria-label": "模板类型", value: a.type, onChange: (h) => d("type", h), options: ["研究报告", "洞察报告", "战略咨询报告", "其他"] }) }), c.jsxs("div", { className: "task-dialog-two-columns", children: [c.jsx(xe.Item, { label: "行业分类", required: true, children: c.jsx($t, { "aria-label": "模板行业分类", value: a.industry, onChange: (h) => d("industry", h), options: zc }) }), c.jsx(xe.Item, { label: "场景分类", required: true, children: c.jsx($t, { "aria-label": "场景分类", value: a.scene, onChange: (h) => d("scene", h), options: Hc }) })] }), c.jsx(xe.Item, { label: "写作要求", required: true, validateStatus: s.requirement ? "error" : void 0, help: s.requirement, children: c.jsx(Xe.TextArea, { "aria-label": "写作要求", value: a.requirement, onChange: (h) => d("requirement", h), rows: 5, maxLength: 2e3, showWordLimit: true, placeholder: "描述模板适用的行业、场景、分析重点和结构要求，例如：围绕产业基础、竞争格局、机会判断和实施路径形成结构化报告。" }) }), c.jsx(xe.Item, { label: "上传参考文档（选填）", extra: "参考文档仅辅助本次模板生成，不自动保存到知识库；未上传文件也可以配置模板。", children: c.jsx(va, { files: a.files, onChange: (h) => d("files", h), accept: ".doc,.docx,.txt", limit: 1, drag: true }) }), c.jsx(he, { size: "default", disabled: true, children: "生成模板" }), c.jsx("p", { className: "task-dialog-help", children: "结构提取与模板生成将在服务接入后提供。草稿保存文件名称与大小，文件内容不会持久化。" })] })] });
}
function Bc({ task: e, onClose: n, onSubmit: t }) {
  const r = `thinktank:publish-draft:${e.id}:v1`, [a, l] = v.useState(() => pa(r, ea(e), (m) => Qi(m, ea(e)))), [s, o] = v.useState({}), [u, f] = v.useState(false), [d, w] = v.useState(false);
  function h(m, b) {
    l((j) => ({ ...j, [m]: b })), o((j) => ({ ...j, [m]: "" }));
  }
  function N() {
    xn(r, a) ? (w(true), Ge.success("申请草稿已保存到本机，可继续修改。")) : Ge.error("浏览器无法保存草稿，请保留当前弹窗后重试。");
  }
  function S() {
    const m = {};
    if (a.title.trim() || (m.title = "请填写公开展示的报告标题"), a.industries.length || (m.industries = "请至少选择一个行业分类"), a.signature.trim() || (m.signature = "请填写公开署名"), a.summary.trim() || (m.summary = "请填写报告摘要"), a.desKeyword && !a.keywords.trim() && (m.keywords = "请填写需要脱敏的关键词"), a.confirmed || (m.confirmed = "提交前请确认拟公开版本、脱敏和授权设置"), a.projectMode === "manual" && (a.projectName.trim() || (m.projectName = "请填写真实项目名称"), a.projectClient.trim() || (m.projectClient = "请填写委托机构"), a.projectDoneDate || (m.projectDoneDate = "请选择实际完成日期"), (a.investment !== void 0 || a.income !== void 0) && ((a.investment === void 0 || a.investment <= 0) && (m.investment = "请填写大于 0 的实际投资额"), a.income === void 0 && (m.income = "请填写评价期内实际净收益")), a.satisfaction !== void 0 && !a.scoreDate && (m.scoreDate = "请选择评价日期"), a.projectPublic || (m.projectPublic = "请确认所填成果数据允许公开")), o(m), Object.keys(m).length) {
      Ge.warning("请补全标红字段后提交。");
      return;
    }
    const b = { ...a, title: a.title.trim(), signature: a.signature.trim(), summary: a.summary.trim() };
    xn(r, b), t(b);
  }
  const p = (m) => ({ validateStatus: s[m] ? "error" : void 0, help: s[m] }), g = [.../* @__PURE__ */ new Set([...Ii.filter((m) => m !== "全部"), e.industry])], E = a.investment && a.income !== void 0 ? `${(a.income / a.investment * 100).toFixed(2)}%` : "—";
  return c.jsxs(c.Fragment, { children: [c.jsx(Ft, { title: "申请发布到案例广场", visible: true, onCancel: n, maskClosable: false, autoFocus: false, className: "task-form-modal task-standard-modal task-publish-modal", style: { width: 560 }, footer: c.jsxs("div", { className: "task-modal-footer", children: [c.jsx(he, { size: "default", onClick: N, children: d ? "草稿已保存" : "保存草稿" }), c.jsx(he, { size: "default", onClick: () => f(true), children: "预览公开版本" }), c.jsx(he, { size: "default", type: "primary", onClick: S, children: "提交审核" })] }), children: c.jsxs(xe, { layout: "vertical", className: "task-dialog-form task-standard-form", size: "default", children: [c.jsx(xe.Item, { label: "报告版本", children: c.jsx(Br, { label: "报告版本", value: `V1.2 · ${Jt(e.updatedAt)}` }) }), c.jsx(xe.Item, { label: "报告标题", required: true, ...p("title"), children: c.jsx(Xe, { "aria-label": "报告标题", value: a.title, onChange: (m) => h("title", m), placeholder: "公开展示的报告标题", maxLength: 120, showWordLimit: true }) }), c.jsx(xe.Item, { label: "报告类型 / 案例广场栏目", children: c.jsx(Br, { label: "报告类型 / 案例广场栏目", value: `${e.reportType} → 案例广场栏目：${Ui[e.reportType] ?? e.reportType}` }) }), c.jsx(xe.Item, { label: c.jsxs("span", { children: ["行业分类 ", c.jsx("em", { className: "task-label-hint", children: "（至少一项，可关联多个分类）" })] }), required: true, ...p("industries"), children: c.jsx($t, { mode: "multiple", "aria-label": "发布行业分类", value: a.industries, onChange: (m) => h("industries", m), options: g, allowClear: true, placeholder: "选择行业分类" }) }), c.jsx(xe.Item, { label: "内容标签", children: c.jsx(Al, { "aria-label": "内容标签", value: a.tags, onChange: (m) => h("tags", m), allowClear: true, placeholder: "输入标签，按 Enter 添加" }) }), c.jsxs(xe.Item, { label: "公开署名", required: true, ...p("signature"), children: [c.jsx(Xe, { "aria-label": "公开署名", value: a.signature, onChange: (m) => h("signature", m), placeholder: "拟展示的作者姓名", maxLength: 40 }), c.jsxs("div", { className: "task-dialog-extra-row", children: [c.jsx(Pt, { content: "当前未接入账号认证信息，无法选用有效认证。", children: c.jsx("span", { children: c.jsx(ft, { disabled: true, children: "展示平台认证身份" }) }) }), c.jsx("span", { children: "仅可选用平台已有有效认证，不可自行填写" })] })] }), c.jsxs(xe.Item, { label: "报告摘要", required: true, ...p("summary"), children: [c.jsx(Xe.TextArea, { "aria-label": "报告摘要", value: a.summary, onChange: (m) => h("summary", m), placeholder: "填写当前版本的研究范围、结构与主要发现", rows: 3, maxLength: 1e3, showWordLimit: true }), c.jsx("div", { className: "task-dialog-extra-row", children: c.jsx(Pt, { content: "报告正文及摘要生成服务尚未接入，请手动填写摘要。", children: c.jsx("span", { children: c.jsx(he, { type: "text", disabled: true, children: "按当前版本成稿重新生成" }) }) }) })] }), c.jsxs(xe.Item, { label: "公开权限", required: true, children: [c.jsx(ia.Group, { type: "button", "aria-label": "公开权限", value: a.scope, onChange: (m) => h("scope", m), options: [{ label: "全平台公开", value: "all" }, { label: "机构用户可见", value: "org" }] }), c.jsxs("div", { className: "task-dialog-checks", children: [c.jsx(ft, { checked: a.allowDownload, onChange: (m) => h("allowDownload", m), children: "允许下载" }), c.jsx(ft, { checked: a.allowKnowledge, onChange: (m) => h("allowKnowledge", m), children: "允许加入知识库" }), c.jsx(ft, { checked: a.allowTemplate, onChange: (m) => h("allowTemplate", m), children: "允许提取结构加入模板库" })] })] }), c.jsxs(xe.Item, { label: "脱敏要求", ...p("keywords"), children: [c.jsxs("div", { className: "task-dialog-checks task-dialog-checks-first", children: [c.jsx(ft, { checked: a.desNumbers, onChange: (m) => h("desNumbers", m), children: "数字（除了时间）" }), c.jsx(ft, { checked: true, disabled: true, children: "手机号" }), c.jsx(ft, { checked: a.desKeyword, onChange: (m) => h("desKeyword", m), children: "关键词" })] }), c.jsx(Xe.TextArea, { "aria-label": "自定义脱敏关键词", value: a.keywords, onChange: (m) => h("keywords", m), disabled: !a.desKeyword, rows: 2, placeholder: "自定义脱敏关键词，多个用逗号分隔，例如：客户A，项目代号" }), c.jsx("p", { className: "task-dialog-help", children: "可在“预览公开版本”中查看对应遮盖效果。" })] }), e.reportType === "战略咨询报告" && c.jsx(un, { className: "task-project-collapse", bordered: true, children: c.jsxs(un.Item, { header: "关联项目及成果数据（选填 · 仅战略咨询报告）", name: "project", children: [c.jsx("p", { className: "task-dialog-help", children: "没有真实项目或暂无可核验成效时，可不填并正常提交。请勿以预计投资额、目标值或生成的数字代替实际成果。" }), c.jsx(xe.Item, { label: "关联项目", children: c.jsx($t, { "aria-label": "关联项目", value: a.projectMode, onChange: (m) => h("projectMode", m), options: [{ value: "none", label: "暂不关联项目" }, { value: "linked", label: "关联已录入项目（暂无可用项目）", disabled: true }, { value: "manual", label: "补录新项目信息" }] }) }), a.projectMode === "manual" && c.jsxs(c.Fragment, { children: [c.jsxs("div", { className: "task-dialog-two-columns", children: [c.jsx(xe.Item, { label: "项目名称（补录）", required: true, ...p("projectName"), children: c.jsx(Xe, { "aria-label": "项目名称", value: a.projectName, onChange: (m) => h("projectName", m), placeholder: "补录真实项目名称" }) }), c.jsx(xe.Item, { label: "委托机构", required: true, ...p("projectClient"), children: c.jsx(Xe, { "aria-label": "委托机构", value: a.projectClient, onChange: (m) => h("projectClient", m) }) })] }), c.jsx(xe.Item, { label: "实际完成日期", required: true, ...p("projectDoneDate"), children: c.jsx(oi, { "aria-label": "实际完成日期", value: a.projectDoneDate || void 0, onChange: (m) => h("projectDoneDate", m) }) })] }), c.jsxs("div", { className: "task-dialog-two-columns", children: [c.jsx(xe.Item, { label: "实际投资额（万元）", ...p("investment"), children: c.jsx(rn, { "aria-label": "实际投资额", min: 0, value: a.investment, disabled: a.projectMode === "none", onChange: (m) => h("investment", m), placeholder: "实际发生的投资额" }) }), c.jsx(xe.Item, { label: "ROI 评价期", children: c.jsx(Br, { label: "ROI 评价期", value: "自实际完成日起连续 12 个月" }) }), c.jsx(xe.Item, { label: "评价期内实际净收益（万元）", ...p("income"), children: c.jsx(rn, { "aria-label": "实际净收益", value: a.income, disabled: a.projectMode === "none", onChange: (m) => h("income", m) }) }), c.jsx(xe.Item, { label: "ROI（净收益 ÷ 实际投资额）", children: c.jsx(Br, { label: "ROI", value: E }) }), c.jsx(xe.Item, { label: "客户满意度（百分制）", children: c.jsx(rn, { "aria-label": "客户满意度", min: 0, max: 100, value: a.satisfaction, disabled: a.projectMode === "none", onChange: (m) => h("satisfaction", m) }) }), c.jsx(xe.Item, { label: "评价日期", ...p("scoreDate"), children: c.jsx(oi, { "aria-label": "评价日期", value: a.scoreDate || void 0, disabled: a.projectMode === "none", onChange: (m) => h("scoreDate", m) }) })] }), c.jsx(xe.Item, { label: "核验材料", extra: "合同、验收报告、收益凭证等；仅管理及审核人员查看，不随报告公开。", children: c.jsx(va, { files: a.evidence, onChange: (m) => h("evidence", m), accept: ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" }) }), c.jsx(xe.Item, { ...p("projectPublic"), children: c.jsx(ft, { checked: a.projectPublic, disabled: a.projectMode === "none", onChange: (m) => h("projectPublic", m), children: "我确认以上所填成果指标数据允许随本次申请公开。" }) })] }) }), c.jsx(xe.Item, { ...p("confirmed"), className: "task-publish-confirm", children: c.jsx(ft, { checked: a.confirmed, onChange: (m) => h("confirmed", m), children: "我已检查拟公开版本、脱敏效果及授权设置，确认提交报告审核。" }) })] }) }), c.jsxs(Ft, { title: "公开版本预览", visible: u, onCancel: () => f(false), className: "task-form-modal", style: { width: 680 }, footer: c.jsx(he, { size: "default", onClick: () => f(false), children: "返回修改" }), children: [c.jsx(Li, { type: "info", content: "此处仅预览已填写的公开信息和遮盖示例，暂无报告正文；核验材料不会展示。" }), c.jsx(Gi, { draft: a, task: e, masked: true })] })] });
}
const Zc = { reviewing: { current: "审批中", final: "等待结果" }, approved: { current: "审批完成", final: "已通过" }, not_applied: { current: "尚未提交", final: "等待提交" } };
function Xc({ task: e, onClose: n, onWithdraw: t }) {
  const [r, a] = v.useState(false), l = Zc[e.auditStatus], s = e.applicationDate || e.updatedAt, o = e.auditStatus === "approved" ? 3 : e.auditStatus === "reviewing" ? 2 : 1;
  return c.jsx(Ft, { title: r ? "已提交内容" : "申请进度", visible: true, onCancel: n, maskClosable: false, autoFocus: false, className: "task-standard-modal application-progress-modal", style: { width: 620 }, footer: r ? c.jsxs("div", { className: "task-modal-footer", children: [c.jsx(he, { onClick: () => a(false), children: "返回进度" }), c.jsx(he, { type: "primary", onClick: n, children: "关闭" })] }) : c.jsxs("div", { className: "task-modal-footer application-progress-footer", children: [e.auditStatus === "reviewing" && c.jsx(he, { type: "text", status: "danger", className: "application-cancel-button", onClick: t, children: "取消申请" }), c.jsxs("div", { children: [c.jsx(he, { onClick: () => a(true), children: "查看已提交内容" }), c.jsx(he, { type: "primary", onClick: n, children: "关闭" })] })] }), children: r ? e.applicationForm ? c.jsx(Gi, { draft: e.applicationForm, task: e }) : c.jsxs("div", { className: "application-submitted-empty", children: [c.jsx(Xr, { description: "该示例申请没有保存完整提交表单" }), c.jsx("p", { children: e.applicationNote || "暂无已提交内容。" })] }) : c.jsxs("div", { className: "application-progress-content", children: [c.jsx("p", { className: "application-progress-tip", children: e.auditStatus === "reviewing" ? "申请正在审核，请耐心等待" : e.auditStatus === "approved" ? "申请已完成审核" : "尚未进入审核流程" }), c.jsxs(Qt, { current: o, size: "small", className: "application-arco-steps", children: [c.jsx(Qt.Step, { title: "提交申请", description: Jt(s) }), c.jsx(Qt.Step, { title: l.current, description: e.auditStatus === "not_applied" ? "--" : Jt(s) }), c.jsx(Qt.Step, { title: l.final, description: e.auditStatus === "approved" ? Jt(e.updatedAt) : "--" })] })] }) });
}
const Ji = "thinktank:report-tasks:examples:v1";
function $i() {
  return new URLSearchParams(window.location.search).get("qa") === "1" ? sessionStorage : localStorage;
}
function Uc() {
  try {
    const e = JSON.parse($i().getItem(Ji) || "null");
    return Array.isArray(e) ? Ln.map((n) => {
      const t = e.find((a) => a && typeof a == "object" && a.id === n.id);
      if (!t) return n;
      const r = { ...n };
      return ["not_applied", "reviewing", "approved"].includes(t.auditStatus) && (r.auditStatus = t.auditStatus), typeof t.updatedAt == "string" && Number.isFinite(Date.parse(t.updatedAt)) && (r.updatedAt = t.updatedAt), typeof t.applicationDate == "string" && Number.isFinite(Date.parse(t.applicationDate)) && (r.applicationDate = t.applicationDate), typeof t.applicationNote == "string" && (r.applicationNote = t.applicationNote), t.applicationForm && typeof t.applicationForm == "object" && (r.applicationForm = Qi(t.applicationForm, ea(n))), t.knowledgeDraft && typeof t.knowledgeDraft.collectionId == "string" && typeof t.knowledgeDraft.requestedAt == "string" && (r.knowledgeDraft = { collectionId: t.knowledgeDraft.collectionId, requestedAt: t.knowledgeDraft.requestedAt }), r.deleted = t.deleted === true, r;
    }) : Ln;
  } catch {
    return Ln;
  }
}
function Kc() {
  const [e, n] = v.useState(Uc), [t, r] = v.useState(false);
  v.useEffect(() => {
    try {
      $i().setItem(Ji, JSON.stringify(e)), r(false);
    } catch {
      r(true);
    }
  }, [e]);
  function a(l, s) {
    n((o) => o.map((u) => u.id === l ? { ...u, ...s } : u));
  }
  return { tasks: e, updateTask: a, storageWarning: t };
}
const qc = { all: 1 / 0, year: 365, quarter: 90, month: 30, week: 7 }, bi = { status: "all", period: "all", query: "" };
function Ei({ task: e }) {
  const n = e.auditStatus === "reviewing" ? "imgEllipse14306" : e.auditStatus === "approved" ? "imgEllipse14307" : "imgEllipse14308";
  return c.jsxs("span", { className: "task-status task-audit-status", children: [c.jsx("span", { className: "task-status-dot", children: c.jsx(Ur, { name: `tasks-${n}.svg`, size: 10 }) }), Rl[e.auditStatus]] });
}
function lu() {
  const { tasks: e, updateTask: n, storageWarning: t } = Kc(), [r, a] = v.useState("全部"), [l, s] = v.useState("all"), [o, u] = v.useState("all"), [f, d] = v.useState(""), [w, h] = v.useState(bi), [N, S] = v.useState(1), [p, g] = v.useState(10), [E, m] = v.useState(null), [b, j] = v.useState(null), [x, L] = v.useState(null), [D, P] = v.useState(false), O = v.useMemo(() => {
    const k = Date.now() - (qc[w.period] ?? 1 / 0) * 864e5, A = w.query.trim().toLocaleLowerCase();
    return e.filter((M) => !M.deleted && (r === "全部" || M.industry === r) && (w.status === "all" || M.status === w.status) && Date.parse(M.updatedAt) >= k && (!A || `${M.name} ${M.industry} ${M.reportType} ${M.tags.join(" ")}`.toLocaleLowerCase().includes(A)));
  }, [e, r, w]);
  v.useEffect(() => {
    S(1);
  }, [r, w, p]), v.useEffect(() => {
    S((k) => Math.min(k, Math.max(1, Math.ceil(O.length / p))));
  }, [O.length, p]);
  function T() {
    a("全部"), s("all"), u("all"), d(""), h(bi), S(1);
  }
  function V(k) {
    n(k.id, { deleted: true }), (E == null ? void 0 : E.id) === k.id && m(null);
    const A = Ge.success({ duration: 8e3, content: c.jsxs("span", { className: "task-undo-message", children: ["任务已移除", c.jsx(he, { type: "text", onClick: () => {
      n(k.id, { deleted: false }), A();
    }, children: "撤销" })] }) });
  }
  function R(k, A) {
    switch (k) {
      case "detail":
        m({ id: A.id, view: "detail" });
        break;
      case "application":
        m({ id: A.id, view: "application" });
        break;
      case "apply":
        A.status === "completed" && A.auditStatus === "not_applied" && j(A.id);
        break;
      case "knowledge":
      case "template":
        A.status === "completed" && L({ id: A.id, type: k });
        break;
      case "delete":
        Ft.confirm({ title: "确认删除", simple: false, icon: null, closable: true, className: "task-delete-modal", style: { width: 520 }, content: c.jsxs("div", { className: "task-delete-content", children: [c.jsxs("p", { children: ["确定要删除报告“", A.name, "”吗？"] }), c.jsx("p", { children: "删除后可通过提示中的“撤销”或“已移除”列表恢复。" })] }), okText: "删除", cancelText: "取消", okButtonProps: { status: "danger", size: "large" }, cancelButtonProps: { size: "large" }, onOk: () => V(A) });
        break;
    }
  }
  const y = e.find((k) => k.id === (E == null ? void 0 : E.id) && !k.deleted), Z = e.find((k) => k.id === b && !k.deleted && k.status === "completed" && k.auditStatus === "not_applied"), I = e.find((k) => k.id === (x == null ? void 0 : x.id) && !k.deleted && k.status === "completed"), F = e.filter((k) => k.deleted), ne = [{ title: "报告名称", dataIndex: "name", width: 271, render: (k) => c.jsx(Pt, { content: k, children: c.jsx("span", { className: "task-report-name", children: k }) }) }, { title: "行业", dataIndex: "industry", width: 101 }, { title: "标签", dataIndex: "tags", width: 236, render: (k, A) => c.jsx(gi, { task: A }) }, { title: "报告类型", dataIndex: "reportType", width: 129 }, { title: "任务状态", dataIndex: "status", width: 113, render: (k) => c.jsxs("span", { className: "task-status", children: [c.jsx("span", { className: "task-status-dot", children: c.jsx(Ur, { name: `tasks-${k === "generating" ? "imgEllipse14306" : k === "completed" ? "imgEllipse14307" : "imgEllipse14308"}.svg`, size: 10 }) }), An[k]] }) }, { title: "更新时间", dataIndex: "updatedAt", width: 200, render: (k) => c.jsx("span", { className: "task-updated-time", children: Jt(k) }) }, { title: "发布审核", dataIndex: "auditStatus", width: 110, render: (k, A) => c.jsx(Ei, { task: A }) }, { title: "操作", width: 220, fixed: "right", render: (k, A) => c.jsx(Rc, { task: A, onAction: R }) }];
  return c.jsxs("div", { className: "report-tasks-page", children: [c.jsx("h1", { className: "sr-only", children: "我的报告任务" }), c.jsxs("section", { className: "tasks-card", "aria-label": "报告任务列表", "data-node-id": "1831:14907", children: [c.jsxs("div", { className: "task-industry-filter", "data-node-id": "1831:14908", children: [c.jsx("p", { className: "industry-filter-label", children: "热门行业筛选" }), c.jsx("div", { className: "industry-options", role: "group", "aria-label": "热门行业筛选", children: Ii.map((k) => c.jsx(he, { type: "text", className: `industry-chip ${r === k ? "is-selected" : ""}`, "aria-pressed": r === k, onClick: () => a(k), children: k }, k)) })] }), c.jsxs("form", { className: "task-filter-row", "data-node-id": "1831:14933", onSubmit: (k) => {
    k.preventDefault(), h({ status: l, period: o, query: f }), S(1);
  }, children: [c.jsx($t, { className: "task-filter-select", "aria-label": "任务状态筛选", placeholder: "任务状态", value: l === "all" ? void 0 : l, onChange: (k) => s(k ?? "all"), allowClear: true, options: [{ value: "all", label: "全部" }, ...Object.entries(An).map(([k, A]) => ({ value: k, label: A }))], suffixIcon: c.jsx(Ur, { name: "tasks-img.svg" }) }), c.jsx($t, { className: "task-filter-select", "aria-label": "更新时间筛选", placeholder: "更新时间", value: o === "all" ? void 0 : o, onChange: (k) => u(k ?? "all"), allowClear: true, options: [{ value: "all", label: "全部时间" }, { value: "year", label: "近一年" }, { value: "quarter", label: "近三个月" }, { value: "month", label: "近一个月" }, { value: "week", label: "近一周" }], suffixIcon: c.jsx(Ur, { name: "tasks-img.svg" }) }), c.jsx(Xe, { className: "shared-search-input task-keyword-search", "aria-label": "搜索报告任务", placeholder: "搜索报告标题、全文关键词", value: f, onChange: d, allowClear: true }), c.jsxs("div", { className: "task-filter-actions", children: [c.jsx(he, { className: "task-query-button", type: "primary", htmlType: "submit", children: "查询" }), c.jsx(he, { className: "task-reset-button", type: "outline", onClick: T, children: "重置" })] })] }), c.jsx("div", { className: "task-table-scroll", children: c.jsx(zl, { className: "task-table", data: O.slice((N - 1) * p, N * p), columns: ne, rowKey: "id", pagination: false, border: false, scroll: { x: 1380 }, noDataElement: c.jsxs("div", { className: "task-empty", children: [c.jsx(Xr, { description: "没有符合条件的报告任务" }), c.jsx(he, { type: "text", onClick: T, children: "清空筛选" })] }) }) }), c.jsxs("div", { className: "tasks-pagination", children: [F.length > 0 && c.jsxs(he, { type: "text", className: "removed-tasks-entry", onClick: () => P(true), children: ["已移除 ", F.length, " 条"] }), c.jsx(_l, { current: N, pageSize: p, total: O.length, size: "small", showTotal: (k) => `共计 ${k} 条`, sizeCanChange: true, sizeOptions: [5, 10, 20], onChange: (k, A) => {
    S(k), g(A);
  }, onPageSizeChange: g })] }), t && c.jsx("p", { className: "storage-warning", role: "status", children: "浏览器无法保存任务操作，刷新后将恢复设计稿中的示例记录。" })] }), c.jsx(Tl, { width: 560, title: "报告任务详情", visible: !!(y && (E == null ? void 0 : E.view) === "detail"), onCancel: () => m(null), footer: c.jsx(he, { onClick: () => m(null), children: "关闭" }), children: y && (E == null ? void 0 : E.view) === "detail" && c.jsxs("div", { className: "task-detail", children: [c.jsx("h2", { children: y.name }), c.jsxs("dl", { children: [c.jsxs("div", { children: [c.jsx("dt", { children: "行业" }), c.jsx("dd", { children: y.industry })] }), c.jsxs("div", { children: [c.jsx("dt", { children: "标签" }), c.jsx("dd", { children: c.jsx(gi, { task: y, expanded: true }) })] }), c.jsxs("div", { children: [c.jsx("dt", { children: "报告类型" }), c.jsx("dd", { children: y.reportType })] }), c.jsxs("div", { children: [c.jsx("dt", { children: "任务状态" }), c.jsx("dd", { children: An[y.status] })] }), c.jsxs("div", { children: [c.jsx("dt", { children: "更新时间" }), c.jsx("dd", { children: Jt(y.updatedAt) })] }), c.jsxs("div", { children: [c.jsx("dt", { children: "发布审核" }), c.jsx("dd", { children: c.jsx(Ei, { task: y }) })] })] }), c.jsxs("div", { className: "task-report-content", children: [c.jsx(Xr, { description: "暂无报告正文" }), c.jsx("p", { className: "task-note", children: "当前展示设计稿中的示例任务，报告正文将在生成服务接入后提供。" })] })] }) }), y && (E == null ? void 0 : E.view) === "application" && c.jsx(Xc, { task: y, onClose: () => m(null), onWithdraw: () => {
    n(y.id, { auditStatus: "not_applied", applicationNote: void 0, applicationDate: void 0, applicationForm: void 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }), m(null), Ge.success("申请已取消。");
  } }), c.jsx(Ft, { title: "已移除的任务", visible: D, onCancel: () => P(false), footer: c.jsx(he, { onClick: () => P(false), children: "关闭" }), children: F.length === 0 ? c.jsx(Xr, { description: "没有已移除的任务" }) : c.jsx("ul", { className: "removed-task-list", children: F.map((k) => c.jsxs("li", { children: [c.jsxs("div", { children: [c.jsx("strong", { children: k.name }), c.jsxs("span", { children: [k.reportType, " · ", k.industry] })] }), c.jsx(he, { type: "text", onClick: () => {
    n(k.id, { deleted: false }), Ge.success("任务已恢复。");
  }, children: "恢复" })] }, k.id)) }) }), Z && c.jsx(Bc, { task: Z, onClose: () => j(null), onSubmit: (k) => {
    const A = (/* @__PURE__ */ new Date()).toISOString();
    n(Z.id, { auditStatus: "reviewing", applicationDate: A, updatedAt: A, applicationNote: k.summary, applicationForm: k }), j(null), Ge.success("示例任务已进入审核中，可在申请详情中撤回。");
  } }, Z.id), I && (x == null ? void 0 : x.type) === "knowledge" && c.jsx(Wc, { task: I, onClose: () => L(null), onConfirm: (k) => n(I.id, { knowledgeDraft: k }) }, I.id), I && (x == null ? void 0 : x.type) === "template" && c.jsx(Yc, { task: I, onClose: () => L(null) }, I.id)] });
}
export { lu as default };
