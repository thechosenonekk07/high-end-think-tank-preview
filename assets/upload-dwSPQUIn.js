import { aP as Bt, ak as Ji, ae as eo, ai as ro, ag as zt, aj as Ht, ap as ir, al as Wt, an as or, aQ as ii, aR as to, ah as oi, g as no, r as v, R as s, k as Y, _ as Q, l as J, aS as ke, a as rr, I as ao, b as io, c as oo, ax as Zt, aT as lo, aU as so, aV as co, aW as uo, C as Ce, u as _r, o as hr, aX as li, aY as fo, F as pe, n as si, e as ci, d as z, A as Se, s as Gt, t as K, D as Ft, aZ as ui, Y as fi, a_ as vo, a$ as po, Q as tr, m as xr, b0 as mo, i as Kt, H as go, b1 as yo, N as bo, M as ho, aM as Sr, aN as Rr, W as Oo, aC as wo, z as Co, B as _o, b2 as xo, b3 as Eo, h as di, b4 as Po, b5 as jo, av as Tr, w as vi, b6 as Io } from "./index-DOWuBEUh.js";
import { u as pi, F as ko, P as mi } from "./useOverflowHidden-DqOFwnaA.js";
import { b as No, a as So, I as hn } from "./index-gnNGM7My.js";
var Lr, On;
function Ro() {
  if (On) return Lr;
  On = 1;
  var e = Bt();
  function n() {
    this.__data__ = new e(), this.size = 0;
  }
  return Lr = n, Lr;
}
var Ar, wn;
function To() {
  if (wn) return Ar;
  wn = 1;
  function e(n) {
    var t = this.__data__, r = t.delete(n);
    return this.size = t.size, r;
  }
  return Ar = e, Ar;
}
var Mr, Cn;
function Lo() {
  if (Cn) return Mr;
  Cn = 1;
  function e(n) {
    return this.__data__.get(n);
  }
  return Mr = e, Mr;
}
var qr, _n;
function Ao() {
  if (_n) return qr;
  _n = 1;
  function e(n) {
    return this.__data__.has(n);
  }
  return qr = e, qr;
}
var Dr, xn;
function Mo() {
  if (xn) return Dr;
  xn = 1;
  var e = Bt(), n = Ji(), t = eo(), r = 200;
  function a(l, o) {
    var i = this.__data__;
    if (i instanceof e) {
      var u = i.__data__;
      if (!n || u.length < r - 1) return u.push([l, o]), this.size = ++i.size, this;
      i = this.__data__ = new t(u);
    }
    return i.set(l, o), this.size = i.size, this;
  }
  return Dr = a, Dr;
}
var Fr, En;
function qo() {
  if (En) return Fr;
  En = 1;
  var e = Bt(), n = Ro(), t = To(), r = Lo(), a = Ao(), l = Mo();
  function o(i) {
    var u = this.__data__ = new e(i);
    this.size = u.size;
  }
  return o.prototype.clear = n, o.prototype.delete = t, o.prototype.get = r, o.prototype.has = a, o.prototype.set = l, Fr = o, Fr;
}
var Ur, Pn;
function gi() {
  if (Pn) return Ur;
  Pn = 1;
  var e = ro(), n = (function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  })();
  return Ur = n, Ur;
}
var $r, jn;
function Xt() {
  if (jn) return $r;
  jn = 1;
  var e = gi();
  function n(t, r, a) {
    r == "__proto__" && e ? e(t, r, { configurable: true, enumerable: true, value: a, writable: true }) : t[r] = a;
  }
  return $r = n, $r;
}
var Vr, In;
function yi() {
  if (In) return Vr;
  In = 1;
  var e = Xt(), n = zt();
  function t(r, a, l) {
    (l !== void 0 && !n(r[a], l) || l === void 0 && !(a in r)) && e(r, a, l);
  }
  return Vr = t, Vr;
}
var Br, kn;
function Do() {
  if (kn) return Br;
  kn = 1;
  function e(n) {
    return function(t, r, a) {
      for (var l = -1, o = Object(t), i = a(t), u = i.length; u--; ) {
        var c = i[n ? u : ++l];
        if (r(o[c], c, o) === false) break;
      }
      return t;
    };
  }
  return Br = e, Br;
}
var zr, Nn;
function Fo() {
  if (Nn) return zr;
  Nn = 1;
  var e = Do(), n = e();
  return zr = n, zr;
}
var Ye = { exports: {} };
Ye.exports;
var Sn;
function Uo() {
  return Sn || (Sn = 1, (function(e, n) {
    var t = Ht(), r = n && !n.nodeType && n, a = r && true && e && !e.nodeType && e, l = a && a.exports === r, o = l ? t.Buffer : void 0, i = o ? o.allocUnsafe : void 0;
    function u(c, f) {
      if (f) return c.slice();
      var d = c.length, p = i ? i(d) : new c.constructor(d);
      return c.copy(p), p;
    }
    e.exports = u;
  })(Ye, Ye.exports)), Ye.exports;
}
var Hr, Rn;
function $o() {
  if (Rn) return Hr;
  Rn = 1;
  var e = Ht(), n = e.Uint8Array;
  return Hr = n, Hr;
}
var Wr, Tn;
function Vo() {
  if (Tn) return Wr;
  Tn = 1;
  var e = $o();
  function n(t) {
    var r = new t.constructor(t.byteLength);
    return new e(r).set(new e(t)), r;
  }
  return Wr = n, Wr;
}
var Zr, Ln;
function Bo() {
  if (Ln) return Zr;
  Ln = 1;
  var e = Vo();
  function n(t, r) {
    var a = r ? e(t.buffer) : t.buffer;
    return new t.constructor(a, t.byteOffset, t.length);
  }
  return Zr = n, Zr;
}
var Gr, An;
function zo() {
  if (An) return Gr;
  An = 1;
  function e(n, t) {
    var r = -1, a = n.length;
    for (t || (t = Array(a)); ++r < a; ) t[r] = n[r];
    return t;
  }
  return Gr = e, Gr;
}
var Kr, Mn;
function Ho() {
  if (Mn) return Kr;
  Mn = 1;
  var e = ir(), n = Object.create, t = /* @__PURE__ */ (function() {
    function r() {
    }
    return function(a) {
      if (!e(a)) return {};
      if (n) return n(a);
      r.prototype = a;
      var l = new r();
      return r.prototype = void 0, l;
    };
  })();
  return Kr = t, Kr;
}
var Xr, qn;
function Wo() {
  if (qn) return Xr;
  qn = 1;
  function e(n, t) {
    return function(r) {
      return n(t(r));
    };
  }
  return Xr = e, Xr;
}
var Yr, Dn;
function bi() {
  if (Dn) return Yr;
  Dn = 1;
  var e = Wo(), n = e(Object.getPrototypeOf, Object);
  return Yr = n, Yr;
}
var Qr, Fn;
function hi() {
  if (Fn) return Qr;
  Fn = 1;
  var e = Object.prototype;
  function n(t) {
    var r = t && t.constructor, a = typeof r == "function" && r.prototype || e;
    return t === a;
  }
  return Qr = n, Qr;
}
var Jr, Un;
function Zo() {
  if (Un) return Jr;
  Un = 1;
  var e = Ho(), n = bi(), t = hi();
  function r(a) {
    return typeof a.constructor == "function" && !t(a) ? e(n(a)) : {};
  }
  return Jr = r, Jr;
}
var et, $n;
function Go() {
  if ($n) return et;
  $n = 1;
  var e = Wt(), n = or(), t = "[object Arguments]";
  function r(a) {
    return n(a) && e(a) == t;
  }
  return et = r, et;
}
var rt, Vn;
function Oi() {
  if (Vn) return rt;
  Vn = 1;
  var e = Go(), n = or(), t = Object.prototype, r = t.hasOwnProperty, a = t.propertyIsEnumerable, l = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return n(o) && r.call(o, "callee") && !a.call(o, "callee");
  };
  return rt = l, rt;
}
var tt, Bn;
function wi() {
  if (Bn) return tt;
  Bn = 1;
  var e = 9007199254740991;
  function n(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return tt = n, tt;
}
var nt, zn;
function Yt() {
  if (zn) return nt;
  zn = 1;
  var e = ii(), n = wi();
  function t(r) {
    return r != null && n(r.length) && !e(r);
  }
  return nt = t, nt;
}
var at, Hn;
function Ko() {
  if (Hn) return at;
  Hn = 1;
  var e = Yt(), n = or();
  function t(r) {
    return n(r) && e(r);
  }
  return at = t, at;
}
var Qe = { exports: {} }, it, Wn;
function Xo() {
  if (Wn) return it;
  Wn = 1;
  function e() {
    return false;
  }
  return it = e, it;
}
Qe.exports;
var Zn;
function Ci() {
  return Zn || (Zn = 1, (function(e, n) {
    var t = Ht(), r = Xo(), a = n && !n.nodeType && n, l = a && true && e && !e.nodeType && e, o = l && l.exports === a, i = o ? t.Buffer : void 0, u = i ? i.isBuffer : void 0, c = u || r;
    e.exports = c;
  })(Qe, Qe.exports)), Qe.exports;
}
var ot, Gn;
function Yo() {
  if (Gn) return ot;
  Gn = 1;
  var e = Wt(), n = bi(), t = or(), r = "[object Object]", a = Function.prototype, l = Object.prototype, o = a.toString, i = l.hasOwnProperty, u = o.call(Object);
  function c(f) {
    if (!t(f) || e(f) != r) return false;
    var d = n(f);
    if (d === null) return true;
    var p = i.call(d, "constructor") && d.constructor;
    return typeof p == "function" && p instanceof p && o.call(p) == u;
  }
  return ot = c, ot;
}
var lt, Kn;
function Qo() {
  if (Kn) return lt;
  Kn = 1;
  var e = Wt(), n = wi(), t = or(), r = "[object Arguments]", a = "[object Array]", l = "[object Boolean]", o = "[object Date]", i = "[object Error]", u = "[object Function]", c = "[object Map]", f = "[object Number]", d = "[object Object]", p = "[object RegExp]", g = "[object Set]", m = "[object String]", E = "[object WeakMap]", O = "[object ArrayBuffer]", b = "[object DataView]", C = "[object Float32Array]", y = "[object Float64Array]", _ = "[object Int8Array]", h = "[object Int16Array]", x = "[object Int32Array]", P = "[object Uint8Array]", k = "[object Uint8ClampedArray]", q = "[object Uint16Array]", R = "[object Uint32Array]", j = {};
  j[C] = j[y] = j[_] = j[h] = j[x] = j[P] = j[k] = j[q] = j[R] = true, j[r] = j[a] = j[O] = j[l] = j[b] = j[o] = j[i] = j[u] = j[c] = j[f] = j[d] = j[p] = j[g] = j[m] = j[E] = false;
  function U(L) {
    return t(L) && n(L.length) && !!j[e(L)];
  }
  return lt = U, lt;
}
var st, Xn;
function Jo() {
  if (Xn) return st;
  Xn = 1;
  function e(n) {
    return function(t) {
      return n(t);
    };
  }
  return st = e, st;
}
var Je = { exports: {} };
Je.exports;
var Yn;
function el() {
  return Yn || (Yn = 1, (function(e, n) {
    var t = to(), r = n && !n.nodeType && n, a = r && true && e && !e.nodeType && e, l = a && a.exports === r, o = l && t.process, i = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = i;
  })(Je, Je.exports)), Je.exports;
}
var ct, Qn;
function _i() {
  if (Qn) return ct;
  Qn = 1;
  var e = Qo(), n = Jo(), t = el(), r = t && t.isTypedArray, a = r ? n(r) : e;
  return ct = a, ct;
}
var ut, Jn;
function xi() {
  if (Jn) return ut;
  Jn = 1;
  function e(n, t) {
    if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__") return n[t];
  }
  return ut = e, ut;
}
var ft, ea;
function rl() {
  if (ea) return ft;
  ea = 1;
  var e = Xt(), n = zt(), t = Object.prototype, r = t.hasOwnProperty;
  function a(l, o, i) {
    var u = l[o];
    (!(r.call(l, o) && n(u, i)) || i === void 0 && !(o in l)) && e(l, o, i);
  }
  return ft = a, ft;
}
var dt, ra;
function tl() {
  if (ra) return dt;
  ra = 1;
  var e = rl(), n = Xt();
  function t(r, a, l, o) {
    var i = !l;
    l || (l = {});
    for (var u = -1, c = a.length; ++u < c; ) {
      var f = a[u], d = o ? o(l[f], r[f], f, l, r) : void 0;
      d === void 0 && (d = r[f]), i ? n(l, f, d) : e(l, f, d);
    }
    return l;
  }
  return dt = t, dt;
}
var vt, ta;
function nl() {
  if (ta) return vt;
  ta = 1;
  function e(n, t) {
    for (var r = -1, a = Array(n); ++r < n; ) a[r] = t(r);
    return a;
  }
  return vt = e, vt;
}
var pt, na;
function Ei() {
  if (na) return pt;
  na = 1;
  var e = 9007199254740991, n = /^(?:0|[1-9]\d*)$/;
  function t(r, a) {
    var l = typeof r;
    return a = a ?? e, !!a && (l == "number" || l != "symbol" && n.test(r)) && r > -1 && r % 1 == 0 && r < a;
  }
  return pt = t, pt;
}
var mt, aa;
function al() {
  if (aa) return mt;
  aa = 1;
  var e = nl(), n = Oi(), t = oi(), r = Ci(), a = Ei(), l = _i(), o = Object.prototype, i = o.hasOwnProperty;
  function u(c, f) {
    var d = t(c), p = !d && n(c), g = !d && !p && r(c), m = !d && !p && !g && l(c), E = d || p || g || m, O = E ? e(c.length, String) : [], b = O.length;
    for (var C in c) (f || i.call(c, C)) && !(E && (C == "length" || g && (C == "offset" || C == "parent") || m && (C == "buffer" || C == "byteLength" || C == "byteOffset") || a(C, b))) && O.push(C);
    return O;
  }
  return mt = u, mt;
}
var gt, ia;
function il() {
  if (ia) return gt;
  ia = 1;
  function e(n) {
    var t = [];
    if (n != null) for (var r in Object(n)) t.push(r);
    return t;
  }
  return gt = e, gt;
}
var yt, oa;
function ol() {
  if (oa) return yt;
  oa = 1;
  var e = ir(), n = hi(), t = il(), r = Object.prototype, a = r.hasOwnProperty;
  function l(o) {
    if (!e(o)) return t(o);
    var i = n(o), u = [];
    for (var c in o) c == "constructor" && (i || !a.call(o, c)) || u.push(c);
    return u;
  }
  return yt = l, yt;
}
var bt, la;
function Pi() {
  if (la) return bt;
  la = 1;
  var e = al(), n = ol(), t = Yt();
  function r(a) {
    return t(a) ? e(a, true) : n(a);
  }
  return bt = r, bt;
}
var ht, sa;
function ll() {
  if (sa) return ht;
  sa = 1;
  var e = tl(), n = Pi();
  function t(r) {
    return e(r, n(r));
  }
  return ht = t, ht;
}
var Ot, ca;
function sl() {
  if (ca) return Ot;
  ca = 1;
  var e = yi(), n = Uo(), t = Bo(), r = zo(), a = Zo(), l = Oi(), o = oi(), i = Ko(), u = Ci(), c = ii(), f = ir(), d = Yo(), p = _i(), g = xi(), m = ll();
  function E(O, b, C, y, _, h, x) {
    var P = g(O, C), k = g(b, C), q = x.get(k);
    if (q) {
      e(O, C, q);
      return;
    }
    var R = h ? h(P, k, C + "", O, b, x) : void 0, j = R === void 0;
    if (j) {
      var U = o(k), L = !U && u(k), ee = !U && !L && p(k);
      R = k, U || L || ee ? o(P) ? R = P : i(P) ? R = r(P) : L ? (j = false, R = n(k, true)) : ee ? (j = false, R = t(k, true)) : R = [] : d(k) || l(k) ? (R = P, l(P) ? R = m(P) : (!f(P) || c(P)) && (R = a(k))) : j = false;
    }
    j && (x.set(k, R), _(R, k, y, h, x), x.delete(k)), e(O, C, R);
  }
  return Ot = E, Ot;
}
var wt, ua;
function cl() {
  if (ua) return wt;
  ua = 1;
  var e = qo(), n = yi(), t = Fo(), r = sl(), a = ir(), l = Pi(), o = xi();
  function i(u, c, f, d, p) {
    u !== c && t(c, function(g, m) {
      if (p || (p = new e()), a(g)) r(u, c, m, f, i, d, p);
      else {
        var E = d ? d(o(u, m), g, m + "", u, c, p) : void 0;
        E === void 0 && (E = g), n(u, m, E);
      }
    }, l);
  }
  return wt = i, wt;
}
var Ct, fa;
function ji() {
  if (fa) return Ct;
  fa = 1;
  function e(n) {
    return n;
  }
  return Ct = e, Ct;
}
var _t, da;
function ul() {
  if (da) return _t;
  da = 1;
  function e(n, t, r) {
    switch (r.length) {
      case 0:
        return n.call(t);
      case 1:
        return n.call(t, r[0]);
      case 2:
        return n.call(t, r[0], r[1]);
      case 3:
        return n.call(t, r[0], r[1], r[2]);
    }
    return n.apply(t, r);
  }
  return _t = e, _t;
}
var xt, va;
function fl() {
  if (va) return xt;
  va = 1;
  var e = ul(), n = Math.max;
  function t(r, a, l) {
    return a = n(a === void 0 ? r.length - 1 : a, 0), function() {
      for (var o = arguments, i = -1, u = n(o.length - a, 0), c = Array(u); ++i < u; ) c[i] = o[a + i];
      i = -1;
      for (var f = Array(a + 1); ++i < a; ) f[i] = o[i];
      return f[a] = l(c), e(r, this, f);
    };
  }
  return xt = t, xt;
}
var Et, pa;
function dl() {
  if (pa) return Et;
  pa = 1;
  function e(n) {
    return function() {
      return n;
    };
  }
  return Et = e, Et;
}
var Pt, ma;
function vl() {
  if (ma) return Pt;
  ma = 1;
  var e = dl(), n = gi(), t = ji(), r = n ? function(a, l) {
    return n(a, "toString", { configurable: true, enumerable: false, value: e(l), writable: true });
  } : t;
  return Pt = r, Pt;
}
var jt, ga;
function pl() {
  if (ga) return jt;
  ga = 1;
  var e = 800, n = 16, t = Date.now;
  function r(a) {
    var l = 0, o = 0;
    return function() {
      var i = t(), u = n - (i - o);
      if (o = i, u > 0) {
        if (++l >= e) return arguments[0];
      } else l = 0;
      return a.apply(void 0, arguments);
    };
  }
  return jt = r, jt;
}
var It, ya;
function ml() {
  if (ya) return It;
  ya = 1;
  var e = vl(), n = pl(), t = n(e);
  return It = t, It;
}
var kt, ba;
function gl() {
  if (ba) return kt;
  ba = 1;
  var e = ji(), n = fl(), t = ml();
  function r(a, l) {
    return t(n(a, l, e), a + "");
  }
  return kt = r, kt;
}
var Nt, ha;
function yl() {
  if (ha) return Nt;
  ha = 1;
  var e = zt(), n = Yt(), t = Ei(), r = ir();
  function a(l, o, i) {
    if (!r(i)) return false;
    var u = typeof o;
    return (u == "number" ? n(i) && t(o, i.length) : u == "string" && o in i) ? e(i[o], l) : false;
  }
  return Nt = a, Nt;
}
var St, Oa;
function bl() {
  if (Oa) return St;
  Oa = 1;
  var e = gl(), n = yl();
  function t(r) {
    return e(function(a, l) {
      var o = -1, i = l.length, u = i > 1 ? l[i - 1] : void 0, c = i > 2 ? l[2] : void 0;
      for (u = r.length > 3 && typeof u == "function" ? (i--, u) : void 0, c && n(l[0], l[1], c) && (u = i < 3 ? void 0 : u, i = 1), a = Object(a); ++o < i; ) {
        var f = l[o];
        f && r(a, f, o, u);
      }
      return a;
    });
  }
  return St = t, St;
}
var Rt, wa;
function hl() {
  if (wa) return Rt;
  wa = 1;
  var e = cl(), n = bl(), t = n(function(r, a, l) {
    e(r, a, l);
  });
  return Rt = t, Rt;
}
var Ol = hl();
const Us = no(Ol);
function wl(e, n) {
  n === void 0 && (n = []);
  var t = v.useRef(false);
  v.useEffect(function() {
    t.current ? e() : t.current = true;
  }, n);
}
function Ca(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function _a(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ca(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ca(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Cl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = _a(_a({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-check") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M41.678 11.05 19.05 33.678 6.322 20.95" }));
}
var nr = s.forwardRef(Cl);
nr.defaultProps = { isIcon: true };
nr.displayName = "IconCheck";
var ve = function() {
  return ve = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ve.apply(this, arguments);
};
function _l(e) {
  var n = co(), t = n.prefixCls, r = n.simple;
  return s.createElement(_e, ve({ prefixCls: t, simple: r }, e), e.content);
}
var Or = function(e) {
  var n = e.icon;
  if (!n && n !== null && (n = s.createElement(rr, null), e.isNotice)) switch (e.noticeType) {
    case "info":
      n = s.createElement(oo, null);
      break;
    case "success":
      n = s.createElement(io, null);
      break;
    case "warning":
      n = s.createElement(rr, null);
      break;
    case "error":
      n = s.createElement(ao, null);
      break;
  }
  return e.isNotice && (e.hideCancel = true), e.title = n === null && e.title === null ? null : s.createElement("span", null, n, e.title), e;
};
function Ii(e, n) {
  var t, r = document.createElement("div");
  document.body.appendChild(r);
  var a = so();
  function l(g) {
    var m = s.createElement(Zt, ve({}, a), s.createElement(_l, ve({}, g, { onCancel: f })));
    t ? t.render(m) : t = lo(m, r);
  }
  var o = l, i = ve(ve({}, e), { visible: false }), u = function() {
    var g, m = e.onOk || e.onConfirm;
    m && (g = m()), g && g.then && (i.confirmLoading = true, o(i), g.then(function() {
      f(true);
    }, function(E) {
      console.error(E), i.confirmLoading = false, o(i);
    })), g || f(true);
  };
  i.onOk = u, i = Or(i), i.visible = true, o(i);
  function c() {
    t = t == null ? void 0 : t._unmount(), r.parentNode && r.parentNode.removeChild(r);
    for (var g = 0; g < ke.length; g++) {
      var m = ke[g];
      if (m === p) {
        ke.splice(g, 1);
        break;
      }
    }
  }
  function f(g) {
    !g && e.onCancel && e.onCancel(), i.visible = false, i.afterClose = function() {
      e.afterClose && e.afterClose(), c();
    }, o(i);
  }
  function d(g) {
    i = ve(ve(ve({}, i), { title: e.title }), g), i = Or(i), o(i);
  }
  function p() {
    i.visible = false, i.afterClose = function() {
      e.afterClose && e.afterClose(), c();
    }, o(i);
  }
  return ke.push(p), { close: p, update: d };
}
var Ie = function() {
  return Ie = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ie.apply(this, arguments);
}, xa = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], o;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
};
function xl(e, n) {
  var t = xa(v.useState(true), 2), r = t[0], a = t[1], l = xa(v.useState(e), 2), o = l[0], i = l[1];
  v.useImperativeHandle(n, function() {
    return { update: function(f) {
      i(f);
    }, close: function() {
      a(false);
    } };
  });
  function u() {
    var f = o.onOk && o.onOk();
    f && f.then && (i(function(d) {
      return Ie(Ie({}, d), { confirmLoading: true });
    }), f.then(function() {
      a(false);
    }, function(d) {
      console.error(d), i(function(p) {
        return Ie(Ie({}, p), { confirmLoading: false });
      });
    })), f || a(false);
  }
  function c() {
    o.onCancel && o.onCancel(), a(false);
  }
  return s.createElement(_e, Ie({ unmountOnExit: true, simple: true }, o, { visible: r, onOk: u, onCancel: c }), o.content);
}
const El = v.forwardRef(xl);
var se = function() {
  return se = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, se.apply(this, arguments);
};
function Pl() {
  var e = v.useRef(), n = s.createElement(uo, { ref: e }), t = 0;
  function r(l) {
    var o;
    t += 1;
    var i = v.createRef(), u = se({}, l);
    function c() {
      l.afterClose && l.afterClose(), d();
    }
    var f = s.createElement(El, se({ key: t, ref: i }, Or(se({}, l)), { afterClose: c }));
    (o = e.current) === null || o === void 0 || o.addInstance(f);
    function d() {
      var m;
      (m = e.current) === null || m === void 0 || m.removeInstance(f);
    }
    function p() {
      var m;
      (m = i.current) === null || m === void 0 || m.close();
    }
    function g(m) {
      var E;
      u = se(se({}, u), m), (E = i.current) === null || E === void 0 || E.update(Or(se({}, u)));
    }
    return ke.push(p), { close: p, update: g };
  }
  var a = { confirm: function(l) {
    return r(se({}, l));
  } };
  return ["info", "success", "warning", "error"].forEach(function(l) {
    a[l] = function(o) {
      return r(se(se({}, o), { isNotice: true, noticeType: l }));
    };
  }), [a, n];
}
var ce = function() {
  return ce = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ce.apply(this, arguments);
}, jl = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Tt = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], o;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
}, Ut = null, Il = 0;
fi || document.documentElement.addEventListener("click", function(e) {
  Ut = { left: e.clientX, top: e.clientY }, setTimeout(function() {
    Ut = null;
  }, 100);
}, true);
var kl = { mask: true, maskClosable: true, mountOnEnter: true, escToExit: true, getPopupContainer: function() {
  return document.body;
}, alignCenter: true };
function Nl(e, n) {
  var t, r, a, l = v.useContext(Ce), o = _r(e, kl, (a = l.componentConfig) === null || a === void 0 ? void 0 : a.Modal), i = o.className, u = o.style, c = o.visible, f = o.simple, d = o.title, p = o.children, g = o.cancelText, m = o.okText, E = o.okButtonProps, O = o.cancelButtonProps, b = o.getPopupContainer, C = b === void 0 ? function() {
    return document.body;
  } : b, y = o.footer, _ = o.afterClose, h = o.confirmLoading, x = o.mountOnEnter, P = o.unmountOnExit, k = o.afterOpen, q = o.hideCancel, R = o.autoFocus, j = o.focusLock, U = o.maskClosable, L = o.mask, ee = o.alignCenter, G = o.getChildrenPopupContainer, te = o.wrapClassName, S = o.escToExit, H = o.modalRender, $ = o.maskStyle, N = o.wrapStyle, M = o.closeIcon, V = jl(o, ["className", "style", "visible", "simple", "title", "children", "cancelText", "okText", "okButtonProps", "cancelButtonProps", "getPopupContainer", "footer", "afterClose", "confirmLoading", "mountOnEnter", "unmountOnExit", "afterOpen", "hideCancel", "autoFocus", "focusLock", "maskClosable", "mask", "alignCenter", "getChildrenPopupContainer", "wrapClassName", "escToExit", "modalRender", "maskStyle", "wrapStyle", "closeIcon"]), B = v.useRef(null), W = v.useRef(null), D = v.useRef(null), me = Tt(v.useState(), 2), re = me[0], sr = me[1], xe = Tt(v.useState(), 2), cr = xe[0], he = xe[1], Ee = v.useRef(null), Re = v.useRef(false), ie = v.useRef(false), Pe = v.useRef(true);
  c && Pe.current && (Pe.current = false);
  var Te = v.useRef();
  Te.current || (Te.current = Il++);
  var ur = Tt(hr(false, { defaultValue: false, value: h }), 2), ze = ur[0], Le = ur[1], X = l.getPrefixCls("modal", o.prefixCls), He = l.locale, We = l.rtl, oe = !f, Ze = "closable" in o ? o.closable : oe, fr = v.useCallback(function() {
    return li(C());
  }, [C]);
  pi(fr, { hidden: c && L });
  var F = function() {
    o.onCancel && o.onCancel();
  }, Ae = function(I) {
    S && c && I.key === ui.key && (I.stopPropagation(), F());
  }, Me = v.useRef(false), dr = function(I) {
    ie.current && (ie.current = false, !Me.current && U && L && I.target === I.currentTarget && setTimeout(function() {
      F();
    }, 100));
  }, vr = function(I) {
    var Z = o.onConfirm, ge = o.onOk, fe = ge || Z, Oe;
    fe && (Oe = fe(I)), Oe && Oe.then && (Le(true), Oe.then(function() {
      Le(false);
    }, function(Ue) {
      Le(false), console.error(Ue);
    }));
  };
  v.useEffect(function() {
    var I = null;
    return S && (I = setTimeout(function() {
      var Z;
      fo(document.body, B.current) && ((Z = B.current) === null || Z === void 0 || Z.focus());
    })), function() {
      I && clearTimeout(I);
    };
  }, [c, S]);
  var pr = function() {
    var I;
    if (c && cr === void 0 && B.current) {
      var Z = +((I = window.getComputedStyle(B.current, null)) === null || I === void 0 ? void 0 : I.zIndex);
      isNaN(Z) || he(Z + 1);
    }
  }, qe = function() {
    if (y !== null) {
      var I = s.createElement(Ft, ce({ onClick: F }, O), g || He.Modal.cancelText), Z = s.createElement(Ft, ce({ loading: ze, onClick: vr, type: "primary" }, E), m || He.Modal.okText), ge = K(y) ? y(I, Z) : y || s.createElement(s.Fragment, null, !q && I, Z);
      return s.createElement("div", { className: X + "-footer" }, ge);
    }
  }, je = l.focusLock.modal, mr = !!je, ue = pe(je) && je.autoFocus, De = j !== void 0 ? j : mr, le = R !== void 0 ? R : ue, Ge = s.createElement(Zt, ce({}, l, { effectGlobalModal: false, effectGlobalNotice: false, prefixCls: o.prefixCls || l.prefixCls, locale: He, zIndex: cr || 1050, getPopupContainer: function(I) {
    return typeof G == "function" ? G(I) : W.current;
  } }), d && s.createElement("div", { className: X + "-header" }, s.createElement("div", { className: X + "-title", id: "arco-dialog-" + Te.current }, d)), s.createElement("div", { ref: W, className: X + "-content" }, p), qe(), Ze && (M !== void 0 ? s.createElement("span", { onClick: F, className: X + "-close-icon" }, M) : s.createElement(si, { tabIndex: -1, onClick: F, className: X + "-close-icon", role: "button", "aria-label": "Close" }, s.createElement(ci, null)))), gr = d ? { "aria-labelledby": "arco-dialog-" + Te.current } : {}, Fe = s.createElement("div", ce({ role: "dialog", "aria-modal": "true" }, gr, { className: z(X, (t = {}, t[X + "-simple"] = f, t[X + "-rtl"] = We, t), i), style: u, ref: D }), De ? s.createElement(ko, { crossFrame: false, disabled: !c, autoFocus: le, lockProps: { tabIndex: -1, onKeyDown: Ae } }, Ge) : s.createElement(s.Fragment, null, Ge)), Ke = function(I) {
    if (!Re.current) {
      var Z = "";
      if (Ee.current) {
        var ge = I.getBoundingClientRect(), fe = Ee.current, Oe = fe.left, Ue = fe.top;
        Z = Oe - ge.left + "px " + (Ue - ge.top) + "px";
      }
      I.style.transformOrigin = Z;
    }
  }, yr = Pe.current ? !x : !!D.current;
  return c || yr ? s.createElement(mi, { visible: c, forceRender: yr, getContainer: C }, s.createElement("div", { ref: n }, L ? s.createElement(Se, { in: c, timeout: 400, appear: true, mountOnEnter: x, classNames: "fadeModal", unmountOnExit: P, onEnter: function(I) {
    I && (I.style.display = "block");
  }, onExited: function(I) {
    I && (I.style.display = "none");
  } }, s.createElement("div", { "aria-hidden": true, className: X + "-mask", style: $ })) : null, s.createElement("div", ce({}, Gt(V, ["content", "icon", "showIcon", "isNotice", "noticeType", "onCancel", "onOk", "onConfirm", "closable", "prefixCls"]), { tabIndex: !De || !le ? -1 : null, ref: function(I) {
    B.current = I, pr();
  }, className: z(X + "-wrapper", (r = {}, r[X + "-wrapper-no-mask"] = !L, r[X + "-wrapper-align-center"] = ee, r[X + "-wrapper-rtl"] = We, r), te), style: ce(ce({}, N || {}), { display: c || re ? "block" : "none", overflow: !c && re ? "hidden" : "" }), onKeyDown: !De || !le ? Ae : null, onMouseDown: function(I) {
    ie.current = I.target === I.currentTarget;
  }, onClick: dr }), s.createElement(Se, { in: c, timeout: 400, appear: true, classNames: "zoomModal", unmountOnExit: P, mountOnEnter: x, onEnter: function(I) {
    I && (sr(true), Ee.current = Ut, Re.current = !!I.style.transformOrigin, Ke(I), D.current = I);
  }, onEntered: function(I) {
    I && (Ke(I), Ee.current = null, k == null || k());
  }, onExit: function() {
    Me.current = true;
  }, onExited: function(I) {
    I && (sr(false), Ke(I), _ == null || _(), Me.current = false, P && (D.current = null));
  } }, s.cloneElement(K(H) ? H(Fe) : Fe, { onMouseDown: function() {
    ie.current = false;
  }, onMouseUp: function() {
    ie.current = false;
  } }))))) : null;
}
var _e = v.forwardRef(Nl);
_e.displayName = "Modal";
_e.config = vo;
_e.confirm = function(e) {
  return Ii(e);
};
_e.useModal = Pl;
["info", "success", "warning", "error"].forEach(function(e) {
  _e[e] = function(n) {
    return Ii(ce(ce({}, n), { isNotice: true, noticeType: e }));
  };
});
_e.destroyAll = function() {
  for (; ke.length; ) {
    var e = ke.pop();
    e && e();
  }
};
var ar = function() {
  return ar = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ar.apply(this, arguments);
}, Ea = function(e, n) {
  if (pe(e)) {
    var t = Object.keys(e).map(function(a) {
      return e[a] + " " + a;
    }).join(","), r = n ? { backgroundSize: 1e4 / n + "%" } : {};
    return ar({ backgroundImage: "linear-gradient(to right, " + t + ")" }, r);
  }
  return { backgroundColor: e };
}, Sl = { small: 3, default: 4, large: 8 };
function Rl(e) {
  var n, t, r = e.type, a = e.prefixCls, l = e.buffer, o = e.percent, i = e.color, u = e.animation, c = e.bufferColor, f = e.formatText, d = e.trailColor, p = e.showText, g = p === void 0 ? true : p, m = e.size, E = m === void 0 ? "default" : m, O = e.status, b = O === void 0 ? "normal" : O, C = e.strokeWidth || Sl[E], y = a + "-" + r, _ = C, h = b === "success" || b === "error" || o >= 100, x = v.useCallback(function() {
    if (K(f)) return f(o);
    switch (b) {
      case "error":
        return s.createElement("span", null, o, "% ", s.createElement(rr, null));
      default:
        return o + "%";
    }
  }, [f, o, b]);
  return s.createElement("div", { className: y + "-wrapper" }, s.createElement("div", { className: y + "-outer", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": o, style: { height: _, backgroundColor: d } }, l && !h && s.createElement("div", { className: y + "-inner-buffer", style: ar({ width: (o > 0 ? o + 10 : 0) + "%" }, Ea(c)) }), s.createElement("div", { className: z(y + "-inner", (n = {}, n[y + "-inner-animate"] = u, n)), style: ar({ width: o + "%" }, Ea(i, o)) })), g && s.createElement("div", { className: z(y + "-text", (t = {}, t[y + "-text-with-icon"] = b, t)) }, x()));
}
function Pa(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ja(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Pa(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Pa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Tl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = ja(ja({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-exclamation") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M23 9H25V30H23z" }), s.createElement("path", { fill: "currentColor", stroke: "none", d: "M23 9H25V30H23z" }), s.createElement("path", { d: "M23 37H25V39H23z" }), s.createElement("path", { fill: "currentColor", stroke: "none", d: "M23 37H25V39H23z" }));
}
var Qt = s.forwardRef(Tl);
Qt.defaultProps = { isIcon: true };
Qt.displayName = "IconExclamation";
var Ll = { mini: 4, small: 3, default: 4, large: 4 }, Al = { mini: 16, small: 48, default: 64, large: 80 }, Ia = function(e) {
  var n = e.size, t = e.percent, r = t === void 0 ? 0 : t, a = e.prefixCls, l = e.showText, o = e.status, i = e.formatText, u = pe(e.color), c = e.width || Al[n], f = e.strokeWidth || (n === "mini" ? c / 2 : Ll[n]), d = (c - f) / 2, p = Math.PI * 2 * d, g = c / 2, m = a + "-circle", E = m + "-svg", O = v.useCallback(function(_) {
    if (K(i)) return i(r);
    switch (_) {
      case "success":
        return s.createElement(nr, null);
      case "error":
        return s.createElement(Qt, null);
      default:
        return r + "%";
    }
  }, [i, r]), b = po(a + "-linear-gradient-"), C = u ? "url(#" + b + ")" : e.color, y = s.createElement("div", { className: m + "-wrapper", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": r, style: { width: c, height: c } }, s.createElement("svg", { viewBox: "0 0 " + c + " " + c, className: "" + E }, u && s.createElement("defs", null, s.createElement("linearGradient", { id: b, x1: "0", y1: "1", x2: "0", y2: "0" }, Object.keys(e.color).sort().map(function(_) {
    return s.createElement("stop", { offset: _, key: _, stopColor: e.color[_] });
  }))), s.createElement("circle", { className: m + "-mask", fill: "none", cx: g, cy: g, r: d, strokeWidth: e.pathStrokeWidth || (n === "mini" ? f : Math.max(2, f - 2)), style: { stroke: e.pathStrokeColor } }), s.createElement("circle", { className: m + "-path", fill: "none", cx: g, cy: g, r: d, strokeWidth: f, style: { stroke: C, strokeDasharray: p, strokeDashoffset: (r > 100 ? 100 : 1 - r / 100) * p } })), l && n !== "mini" && s.createElement("div", { className: m + "-text" }, O(o)));
  return n === "mini" && o === "success" && e.type === "circle" && (y = s.createElement("div", { className: m + "-wrapper", style: { width: c, height: c } }, s.createElement(nr, { style: { fontSize: c - 2, color: C } }))), n === "mini" && l ? s.createElement(tr, { content: s.createElement("div", { className: m + "-text" }, O("normal")) }, y) : y;
}, Ml = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], o;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
}, ql = function(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, a = n.length, l; r < a; r++) (l || !(r in n)) && (l || (l = Array.prototype.slice.call(n, 0, r)), l[r] = n[r]);
  return e.concat(l || Array.prototype.slice.call(n));
}, Dl = function(e) {
  var n, t = e.prefixCls, r = e.percent, a = e.color, l = e.type, o = e.formatText, i = e.trailColor, u = e.showText, c = u === void 0 ? true : u, f = e.size, d = f === void 0 ? "default" : f, p = e.status, g = p === void 0 ? "normal" : p, m = e.strokeWidth || (d === "small" ? 8 : 4), E = t + "-" + l, O = m, b = v.useCallback(function() {
    if (K(o)) return o(r);
    switch (g) {
      case "error":
        return s.createElement("span", null, r, "% ", s.createElement(rr, null));
      default:
        return r + "%";
    }
  }, [o, r, g]);
  return s.createElement("div", { className: E + "-wrapper" }, s.createElement("div", { className: E + "-outer", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": r, style: { height: O } }, ql([], Ml(new Array(e.steps)), false).map(function(C, y) {
    var _, h = r > 100 / e.steps * y;
    return s.createElement("div", { key: y, className: z(E + "-item", (_ = {}, _[E + "-item-active"] = h, _)), style: { backgroundColor: h ? a : i || "" } });
  })), c && s.createElement("div", { className: z(E + "-text", (n = {}, n[E + "-text-with-icon"] = g, n)) }, b()));
}, be = function() {
  return be = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, be.apply(this, arguments);
}, Fl = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Ul = { type: "line", showText: true, percent: 0, size: "default" };
function $l(e, n) {
  var t, r = v.useContext(Ce), a = r.getPrefixCls, l = r.componentConfig, o = r.rtl, i = _r(e, Ul, l == null ? void 0 : l.Progress), u = i.className, c = i.style, f = i.size, d = i.width, p = i.strokeWidth, g = i.steps, m = i.percent, E = Fl(i, ["className", "style", "size", "width", "strokeWidth", "steps", "percent"]), O = g && i.type !== "circle" ? "steps" : i.type, b = a("progress"), C = "status" in i ? i.status : m >= 100 ? "success" : "normal", y = { width: d };
  return f === "mini" && O === "line" && (y.width = d || 16, y.height = d || 16), s.createElement("div", be({ ref: n, className: z(b, b + "-" + O, b + "-" + f, (t = {}, t[b + "-is-" + C] = C !== "normal", t[b + "-rtl"] = o, t), u), style: be(be({}, y), c) }, Gt(E, ["type", "animation", "status", "color", "trailColor", "showText", "formatText", "buffer", "bufferColor"])), O === "steps" && s.createElement(Dl, be({}, i, { type: O, status: C, prefixCls: b })), O === "circle" && s.createElement(Ia, be({ width: i.width }, i, { pathStrokeColor: i.trailColor, status: C, prefixCls: b })), O === "line" && (f === "mini" ? s.createElement(Ia, be({ pathStrokeColor: i.trailColor }, i, { pathStrokeWidth: p || 4, width: d || 16, strokeWidth: p || 4, prefixCls: b, status: C })) : s.createElement(Rl, be({}, i, { status: C, prefixCls: b }))));
}
var ki = v.forwardRef($l);
ki.displayName = "Progress";
function ka(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Na(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ka(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ka(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Vl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = Na(Na({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-delete") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M5 11h5.5m0 0v29a1 1 0 0 0 1 1h25a1 1 0 0 0 1-1V11m-27 0H16m21.5 0H43m-5.5 0H32m-16 0V7h16v4m-16 0h16M20 18v15m8-15v15" }));
}
var Er = s.forwardRef(Vl);
Er.defaultProps = { isIcon: true };
Er.displayName = "IconDelete";
function Sa(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ra(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Sa(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Bl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = Ra(Ra({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-file") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z" }));
}
var Jt = s.forwardRef(Bl);
Jt.defaultProps = { isIcon: true };
Jt.displayName = "IconFile";
var A = { init: "init", uploading: "uploading", success: "done", fail: "error" };
function Ta(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function La(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ta(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ta(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function zl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = La(La({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-upload") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M14.93 17.071 24.001 8l9.071 9.071m-9.07 16.071v-25M40 35v6H8v-6" }));
}
var lr = s.forwardRef(zl);
lr.defaultProps = { isIcon: true };
lr.displayName = "IconUpload";
function Aa(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ma(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Aa(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Aa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Hl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = Ma(Ma({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-play-arrow-fill") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { fill: "currentColor", stroke: "none", d: "M17.533 10.974a1 1 0 0 0-1.537.844v24.356a1 1 0 0 0 1.537.844L36.67 24.84a1 1 0 0 0 0-1.688L17.533 10.974Z" }));
}
var en = s.forwardRef(Hl);
en.defaultProps = { isIcon: true };
en.displayName = "IconPlayArrowFill";
function qa(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Da(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? qa(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Wl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = Da(Da({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-pause") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M14 12H18V36H14z" }), s.createElement("path", { d: "M30 12H34V36H30z" }), s.createElement("path", { fill: "currentColor", stroke: "none", d: "M14 12H18V36H14z" }), s.createElement("path", { fill: "currentColor", stroke: "none", d: "M30 12H34V36H30z" }));
}
var rn = s.forwardRef(Wl);
rn.defaultProps = { isIcon: true };
rn.displayName = "IconPause";
var Ve = function() {
  return Ve = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ve.apply(this, arguments);
}, Ni = function(e) {
  var n = xr(), t = e.file, r = e.prefixCls, a = e.progressProps, l = e.progressRender, o = v.useContext(Ce).locale, i = t.status, u = t.percent, c = u === void 0 ? 0 : u, f = r + "-list", d = a && a.width ? { width: a.width } : {}, p = s.createElement(s.Fragment, null, i === A.fail && e.reuploadIcon !== null && s.createElement("span", Ve({ className: r + "-list-reupload-icon", onClick: function() {
    e.onReupload && e.onReupload(t);
  }, tabIndex: 0, role: "button", "aria-label": o.Upload.reupload }, n({ onPressEnter: function() {
    e.onReupload && e.onReupload(t);
  } })), e.reuploadIcon || (e.listType === "picture-card" ? s.createElement(lr, null) : o.Upload.reupload)), i === A.success && e.successIcon !== null && s.createElement("span", { className: r + "-list-success-icon" }, e.successIcon || s.createElement(nr, null)), i !== A.success && s.createElement("div", { className: f + "-status", style: d }, s.createElement(ki, Ve({ showText: false, className: f + "-progress", type: "circle", status: i === A.fail ? "error" : i === A.success ? "success" : "normal", percent: c, size: "mini" }, a)), i === A.init && e.startIcon !== null && s.createElement("span", Ve({ tabIndex: 0, role: "button", "aria-label": o.Upload.start, className: r + "-list-start-icon", onClick: function() {
    e.onUpload && e.onUpload(t);
  } }, n({ onPressEnter: function() {
    e.onUpload && e.onUpload(t);
  } })), e.startIcon || s.createElement(tr, { content: o.Upload.start }, s.createElement(en, null))), i === A.uploading && e.cancelIcon !== null && s.createElement("span", Ve({ className: e.prefixCls + "-list-cancel-icon", onClick: function() {
    e.onAbort && e.onAbort(t);
  }, tabIndex: 0, "aria-label": o.Upload.cancel }, n({ onPressEnter: function() {
    e.onAbort && e.onAbort(t);
  } })), e.cancelIcon || s.createElement(tr, { content: o.Upload.cancel }, s.createElement(rn, null)))));
  return K(l) ? l(t, p) : p;
};
function Fa(e, n) {
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
    n % 2 ? Fa(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Fa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Zl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = Ua(Ua({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-image-close") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17" }), s.createElement("path", { d: "m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z" }), s.createElement("path", { fill: "currentColor", stroke: "none", d: "M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z" }), s.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z", clipRule: "evenodd" }), s.createElement("path", { d: "M17 15h-2v2h2v-2Z" }));
}
var tn = s.forwardRef(Zl);
tn.defaultProps = { isIcon: true };
tn.displayName = "IconImageClose";
var Be = function() {
  return Be = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Be.apply(this, arguments);
}, Gl = function(e, n) {
  var t = e.disabled, r = e.prefixCls, a = e.file, l = e.showUploadList, o = e.locale, i = xr(), u = r + "-list-item-picture", c = a.status, f = a.originFile, d = a.url !== void 0 ? a.url : f && K(URL.createObjectURL) && URL.createObjectURL(f), p = pe(l) ? l : {};
  return s.createElement("div", { className: u, ref: n }, c === A.uploading ? s.createElement(Ni, Be({ onReupload: e.onReupload, onUpload: e.onUpload, onAbort: e.onAbort, listType: "picture-card", file: a, prefixCls: r, progressProps: e.progressProps }, p)) : s.createElement(s.Fragment, null, K(p.imageRender) ? p.imageRender(a) : s.createElement("img", { src: d, alt: a.name }), s.createElement("div", { className: u + "-mask", role: "radiogroup" }, a.status === A.fail && s.createElement("div", { className: u + "-error-tip" }, p.errorIcon !== null && s.createElement("span", { className: r + "-list-error-icon" }, p.errorIcon || s.createElement(tn, null))), s.createElement("div", { className: u + "-operation" }, a.status !== A.fail && p.previewIcon !== null && s.createElement("span", Be({ className: r + "-list-preview-icon", tabIndex: 0, role: "button", "aria-label": o.Upload.preview }, i({ onPressEnter: function() {
    e.onPreview && e.onPreview(a);
  } }), { onClick: function() {
    e.onPreview && e.onPreview(a);
  } }), p.previewIcon || s.createElement(mo, null)), a.status === A.fail && p.reuploadIcon !== null && s.createElement("span", Be({ className: e.prefixCls + "-list-reupload-icon", onClick: function() {
    e.onReupload && e.onReupload(a);
  }, tabIndex: 0, role: "button", "aria-label": o.Upload.reupload }, i({ onPressEnter: function() {
    e.onReupload && e.onReupload(a);
  } })), p.reuploadIcon || s.createElement(lr, null)), !t && p.removeIcon !== null && s.createElement("span", Be({ className: r + "-list-remove-icon", onClick: function() {
    e.onRemove && e.onRemove(a);
  }, role: "button", "aria-label": o.Upload.delete, tabIndex: 0 }, i({ onPressEnter: function() {
    e.onRemove && e.onRemove(a);
  } })), p.removeIcon || s.createElement(Er, null))))));
};
const Kl = v.forwardRef(Gl);
function $a(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Va(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? $a(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $a(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Xl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = Va(Va({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-file-pdf") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M11 42h26a2 2 0 0 0 2-2V13.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 31.172 6H11a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2Z" }), s.createElement("path", { d: "M22.305 21.028c.874 1.939 3.506 6.265 4.903 8.055 1.747 2.237 3.494 2.685 4.368 2.237.873-.447 1.21-4.548-7.425-2.685-7.523 1.623-7.424 3.58-6.988 4.476.728 1.193 2.522 2.627 5.678-6.266C25.699 18.79 24.489 17 23.277 17c-1.409 0-2.538.805-.972 4.028Z" }));
}
var nn = s.forwardRef(Xl);
nn.defaultProps = { isIcon: true };
nn.displayName = "IconFilePdf";
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
function za(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ba(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ba(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Yl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = za(za({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-file-image") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "m26 33 5-6v6h-5Zm0 0-3-4-4 4h7Zm11 9H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2ZM17 19h1v1h-1v-1Z" }));
}
var Pr = s.forwardRef(Yl);
Pr.defaultProps = { isIcon: true };
Pr.displayName = "IconFileImage";
function Ha(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Wa(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ha(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ha(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Ql(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = Wa(Wa({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-file-video") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M37 42H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z" }), s.createElement("path", { d: "M22 27.796v-6l5 3-5 3Z" }));
}
var an = s.forwardRef(Ql);
an.defaultProps = { isIcon: true };
an.displayName = "IconFileVideo";
function Za(e, n) {
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
    n % 2 ? Za(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Za(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Jl(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = Ga(Ga({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-file-audio") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M37 42H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z" }), s.createElement("path", { fill: "currentColor", stroke: "none", d: "M25 30a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" }), s.createElement("path", { d: "M25 30a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0-.951-12.363a.5.5 0 0 1 .58-.532L30 18" }));
}
var on = s.forwardRef(Jl);
on.defaultProps = { isIcon: true };
on.displayName = "IconFileAudio";
var er = function() {
  return er = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, er.apply(this, arguments);
}, es = function(e) {
  var n = "";
  if (e.originFile && e.originFile.type) n = e.originFile.type;
  else {
    var t = e.name || "", r = t.split(".").pop() || "";
    n = r, ["png", "jpg", "jpeg", "bmp", "gif"].indexOf(r) > -1 ? n = "image" : ["mp4", "m2v", "mkv"].indexOf(r) > -1 ? n = "video" : ["mp3", "wav", "wmv"].indexOf(r) > -1 && (n = "audio");
  }
  return n.indexOf("image") > -1 ? Pr : n.indexOf("pdf") > -1 ? nn : n.indexOf("audio") > -1 ? on : n.indexOf("video") > -1 ? an : Jt;
}, rs = function(e, n) {
  var t = e.prefixCls, r = e.disabled, a = e.file, l = e.locale, o = t + "-list-item-text", i = xr(), u = es(a), c = pe(e.showUploadList) ? e.showUploadList : {}, f = pe(c) ? c : {}, d = a.name || a.originFile && a.originFile.name, p = a.url !== void 0 ? a.url : a.originFile && K(URL.createObjectURL) && URL.createObjectURL(a.originFile), g = {};
  return a.status !== A.fail && (g = { popupVisible: false }), s.createElement("div", { className: t + "-list-item " + t + "-list-item-" + a.status, ref: n }, s.createElement("div", { className: o }, e.listType === "picture-list" && s.createElement("div", { className: o + "-thumbnail" }, K(c.imageRender) ? c.imageRender(a) : s.createElement("img", { src: p })), s.createElement("div", { className: o + "-content" }, s.createElement("div", { className: o + "-name" }, e.listType === "text" && f.fileIcon !== null && s.createElement("span", { className: t + "-list-file-icon" }, f.fileIcon || s.createElement(u, null)), K(c.fileName) ? s.createElement("span", { className: o + "-name-text" }, c.fileName(a)) : a.url ? s.createElement("a", { href: a.url, target: "_blank", rel: "noreferrer", className: o + "-name-link" }, d) : s.createElement("span", { className: o + "-name-text" }, d), a.status === A.fail && f.errorIcon !== null && s.createElement(tr, er({ content: (typeof a.response == "object" ? v.isValidElement(a.response) && a.response : a.response) || l.Upload.error }, g, { disabled: a.status !== A.fail }), s.createElement("span", { className: e.prefixCls + "-list-error-icon" }, f.errorIcon || (e.listType === "picture-card" ? s.createElement(Pr, null) : s.createElement(rr, null))))), s.createElement(Ni, er({ file: a, prefixCls: t, progressProps: e.progressProps, onReupload: e.onReupload, onUpload: e.onUpload, onAbort: e.onAbort }, f)))), s.createElement("div", { className: t + "-list-item-operation" }, !r && f.removeIcon !== null && s.createElement(si, er({ className: t + "-list-remove-icon-hover", onClick: function() {
    e.onRemove && e.onRemove(a);
  }, tabIndex: 0, "aria-label": l.Upload.delete }, i({ onPressEnter: function() {
    e.onRemove && e.onRemove(a);
  } })), s.createElement("span", { className: t + "-list-remove-icon" }, f.removeIcon || s.createElement(Er, null)))));
};
const ts = v.forwardRef(rs);
function Ka(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Xa(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ka(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ka(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ns(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = Xa(Xa({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-zoom-out") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M32.607 32.607A14.953 14.953 0 0 0 37 22c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 4.142 0 7.892-1.679 10.607-4.393Zm0 0L41.5 41.5M29 22H15" }));
}
var ln = s.forwardRef(ns);
ln.defaultProps = { isIcon: true };
ln.displayName = "IconZoomOut";
function Ya(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Qa(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ya(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ya(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function as(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = Qa(Qa({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-zoom-in") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M32.607 32.607A14.953 14.953 0 0 0 37 22c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 4.142 0 7.892-1.679 10.607-4.393Zm0 0L41.5 41.5M29 22H15m7 7V15" }));
}
var sn = s.forwardRef(as);
sn.defaultProps = { isIcon: true };
sn.displayName = "IconZoomIn";
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
function ei(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ja(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ja(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function is(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = ei(ei({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-rotate-left") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "M10 22a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V22ZM23 11h11a6 6 0 0 1 6 6v6M22.5 12.893 19.587 11 22.5 9.107v3.786Z" }));
}
var cn = s.forwardRef(is);
cn.defaultProps = { isIcon: true };
cn.displayName = "IconRotateLeft";
function ri(e, n) {
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
    n % 2 ? ri(Object(t), true).forEach(function(r) {
      J(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ri(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function os(e, n) {
  var t = v.useContext(Y), r = t.prefixCls, a = r === void 0 ? "arco" : r, l = e.spin, o = e.className, i = ti(ti({ "aria-hidden": true, focusable: false, ref: n }, e), {}, { className: "".concat(o ? o + " " : "").concat(a, "-icon ").concat(a, "-icon-original-size") });
  return l && (i.className = "".concat(i.className, " ").concat(a, "-icon-loading")), delete i.spin, delete i.isIcon, s.createElement("svg", Q({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), s.createElement("path", { d: "m5.5 11.5 5-2.5h1v32M34 11.5 39 9h1v32" }), s.createElement("path", { fill: "currentColor", stroke: "none", d: "M24 17h1v1h-1v-1ZM24 30h1v1h-1v-1Z" }), s.createElement("path", { d: "M24 17h1v1h-1v-1ZM24 30h1v1h-1v-1Z" }));
}
var un = s.forwardRef(os);
un.defaultProps = { isIcon: true };
un.displayName = "IconOriginalSize";
var ls = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], o;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
};
function ss(e) {
  var n = ls(v.useState(e), 2), t = n[0], r = n[1], a = t === "beforeLoad", l = t === "loading", o = t === "error", i = t === "loaded", u = t === "lazyload";
  return { status: t, isBeforeLoad: a, isLoading: l, isError: o, isLoaded: i, isLazyLoad: u, setStatus: r };
}
var Si = [25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500], cs = (function() {
  function e(n) {
    this.updateScale(n);
  }
  return Object.defineProperty(e.prototype, "scales", { get: function() {
    return this.scaleAttr;
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "minScale", { get: function() {
    return this.scaleAttr[0];
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "maxScale", { get: function() {
    return this.scaleAttr[this.scaleAttr.length - 1];
  }, enumerable: false, configurable: true }), e.prototype.updateScale = function(n) {
    var t = Si;
    if (Kt(n) && n.filter(function(o) {
      return o > 0;
    }).length && (t = n.filter(function(o) {
      return o > 0;
    })), t = t.map(function(o) {
      return +(o / 100).toFixed(2);
    }), !t.includes(1)) {
      var r = this.findClosestIndex(1, t), a = t[r], l = a < 1 ? r + 1 : r;
      t.splice(l, 0, 1);
    }
    this.scaleAttr = t;
  }, e.prototype.findClosestIndex = function(n, t) {
    if (t === void 0 && (t = this.scaleAttr), !!t.length) {
      if (t.length === 1) return 0;
      for (var r = t.length - 1, a = 0; a < t.length; a++) {
        var l = t[a];
        if (n === l) {
          r = a;
          break;
        }
        if (n < l) {
          var o = t[a - 1];
          r = o === void 0 || Math.abs(o - n) <= Math.abs(l - n) ? a - 1 : a;
          break;
        }
      }
      return r;
    }
  }, e.prototype.getNextScale = function(n, t) {
    t === void 0 && (t = "zoomIn");
    var r = this.scaleAttr.indexOf(n);
    return r === -1 && (r = this.findClosestIndex(n)), t === "zoomIn" ? r === this.scaleAttr.length - 1 ? n : this.scaleAttr[r + 1] : r === 0 ? n : this.scaleAttr[r - 1];
  }, e;
})();
function us(e, n, t, r, a) {
  var l = t, o = r;
  return t && (e.width > n.width ? l = 0 : (n.left > e.left && (l -= Math.abs(e.left - n.left) / a), n.right < e.right && (l += Math.abs(e.right - n.right) / a))), r && (e.height > n.height ? o = 0 : (n.top > e.top && (o -= Math.abs(e.top - n.top) / a), n.bottom < e.bottom && (o += Math.abs(e.bottom - n.bottom) / a))), [l, o];
}
var fs = function(e) {
  var n = e.style, t = e.className, r = e.prefixCls, a = e.popup, l = e.children, o = z(r + "-trigger", t);
  return s.createElement(go, { style: n, className: o, popup: a, showArrow: true }, l);
}, $t = function() {
  return $t = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, $t.apply(this, arguments);
}, ds = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Lt = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], o;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
}, At = function(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, a = n.length, l; r < a; r++) (l || !(r in n)) && (l || (l = Array.prototype.slice.call(n, 0, r)), l[r] = n[r]);
  return e.concat(l || Array.prototype.slice.call(n));
}, vs = function(e, n) {
  var t, r = e.prefixCls, a = e.previewPrefixCls, l = e.simple, o = l === void 0 ? false : l, i = e.actions, u = i === void 0 ? [] : i, c = e.actionsLayout, f = c === void 0 ? [] : c, d = e.defaultActions, p = d === void 0 ? [] : d, g = new Set(f), m = function(h) {
    return g.has(h.key);
  }, E = At(At([], Lt(p.filter(m)), false), Lt(u.filter(m)), false), O = u.filter(function(h) {
    return !g.has(h.key);
  }), b = E.sort(function(h, x) {
    var P = f.indexOf(h.key), k = f.indexOf(x.key);
    return P > k ? 1 : -1;
  });
  if (g.has("extra")) {
    var C = f.indexOf("extra");
    b.splice.apply(b, At([C, 0], Lt(O), false));
  }
  var y = function(h, x) {
    var P;
    x === void 0 && (x = false);
    var k = h.content, q = h.disabled, R = h.key, j = h.name, U = h.getContainer, L = h.onClick, ee = ds(h, ["content", "disabled", "key", "name", "getContainer", "onClick"]), G = s.createElement("div", $t({ className: z(a + "-toolbar-action", (P = {}, P[a + "-toolbar-action-disabled"] = q, P)), key: R, onClick: function(te) {
      !q && L && L(te);
    }, onMouseDown: function(te) {
      te.preventDefault();
    } }, ee), k && s.createElement("span", { className: a + "-toolbar-action-content" }, k), x && j && s.createElement("span", { className: a + "-toolbar-action-name" }, j));
    return U ? U(G) : G;
  };
  if (!b.length) return null;
  var _ = b.map(function(h) {
    var x = y(h, o);
    return !o && h.name && !h.getContainer ? s.createElement(tr, { content: h.name, key: h.key }, x) : x;
  });
  return s.createElement("div", { ref: n, className: z(a + "-toolbar", (t = {}, t[a + "-toolbar-simple"] = o, t), e.className), style: e.style }, o && s.createElement(fs, { prefixCls: r, className: a + "-trigger", popup: function() {
    return s.createElement("div", null, _);
  } }, y({ key: "trigger", content: s.createElement("span", null, s.createElement(yo, null)) })), !o && _);
};
const ps = v.forwardRef(vs);
var Ri = v.createContext({ previewGroup: false, previewUrlMap: /* @__PURE__ */ new Map(), previewPropsMap: /* @__PURE__ */ new Map(), infinite: true, currentIndex: 0, setCurrentIndex: function() {
  return null;
}, setPreviewUrlMap: function() {
  return null;
}, registerPreviewUrl: function() {
  return null;
}, registerPreviewProps: function() {
  return null;
}, visible: false, handleVisibleChange: function() {
  return null;
} });
function ms(e) {
  var n, t, r = e.current, a = e.previewCount, l = e.infinite, o = l === void 0 ? false : l, i = e.onPrev, u = e.onNext, c = v.useContext(Ce).getPrefixCls, f = c("image-preview"), d = z(f + "-arrow"), p = !o && r <= 0, g = !o && r >= a - 1;
  return s.createElement("div", { className: d }, s.createElement("div", { className: z(f + "-arrow-left", (n = {}, n[f + "-arrow-disabled"] = p, n)), onClick: function(m) {
    m.preventDefault(), !p && (i == null || i());
  } }, s.createElement(bo, null)), s.createElement("div", { className: z(f + "-arrow-right", (t = {}, t[f + "-arrow-disabled"] = g, t)), onClick: function(m) {
    m.preventDefault(), !g && (u == null || u());
  } }, s.createElement(ho, null)));
}
var we = function() {
  return we = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, we.apply(this, arguments);
}, gs = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, de = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], o;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
}, Mt = 90, ys = { maskClosable: true, closable: true, breakPoint: 316, actionsLayout: ["fullScreen", "rotateRight", "rotateLeft", "zoomIn", "zoomOut", "originalSize", "extra"], getPopupContainer: function() {
  return document.body;
}, escToExit: true, scales: Si, resetTranslate: true };
function bs(e, n) {
  var t, r = v.useContext(Ri), a = r.previewGroup, l = r.previewUrlMap, o = r.currentIndex, i = r.setCurrentIndex, u = r.infinite, c = r.previewPropsMap, f = a ? c.get(o) : {}, d = _r(e, ys, f), p = d.className, g = d.style, m = d.src, E = d.defaultVisible, O = d.maskClosable, b = d.closable, C = d.breakPoint, y = d.actions, _ = d.actionsLayout, h = d.getPopupContainer, x = d.onVisibleChange, P = d.scales, k = d.escToExit, q = d.imgAttributes, R = q === void 0 ? {} : q, j = d.imageRender, U = d.extra, L = U === void 0 ? null : U, ee = d.resetTranslate, G = a ? l.get(o) : m, te = de(v.useState(G), 2), S = te[0], H = te[1], $ = de(hr(false, { defaultValue: E, value: d.visible }), 2), N = $[0], M = $[1], V = v.useContext(Ce), B = V.getPrefixCls, W = V.locale, D = V.rtl, me = B("image"), re = me + "-preview", sr = z(re, (t = {}, t[re + "-hide"] = !N, t[re + "-rtl"] = D, t), p), xe = v.useRef(), cr = v.useRef(), he = v.useRef(), Ee = v.useRef(), Re = v.useRef(false), ie = v.useRef({ pageX: 0, pageY: 0, originX: 0, originY: 0 }), Pe = ss("loading"), Te = Pe.isLoading, ur = Pe.isLoaded, ze = Pe.setStatus, Le = de(v.useState(false), 2), X = Le[0], He = Le[1], We = de(v.useState({ x: 0, y: 0 }), 2), oe = We[0], Ze = We[1], fr = de(v.useState(1), 2), F = fr[0], Ae = fr[1], Me = de(v.useState(false), 2), dr = Me[0], vr = Me[1], pr = de(v.useState(0), 2), qe = pr[0], je = pr[1], mr = de(v.useState(false), 2), ue = mr[0], De = mr[1], le = v.useMemo(function() {
    return new cs(P);
  }, []), Ge = R.onLoad, gr = R.onError, Fe = R.onMouseDown, Ke = R.style, yr = R.className, I = gs(R, ["onLoad", "onError", "onMouseDown", "style", "className"]);
  function Z() {
    Ze({ x: 0, y: 0 }), Ae(1), je(0);
  }
  v.useImperativeHandle(n, function() {
    return { reset: Z, getRootDOMNode: function() {
      return Ee.current;
    } };
  });
  var ge = de(v.useState(), 2), fe = ge[0], Oe = ge[1], Ue = v.useCallback(function() {
    return fe;
  }, [fe]);
  v.useEffect(function() {
    var w = h == null ? void 0 : h(), T = li(w) || document.body;
    Oe(T);
  }, [h]), pi(Ue, { hidden: N });
  var Mi = v.useMemo(function() {
    return !fi && fe === document.body;
  }, [fe]);
  function dn(w) {
    var T = l.size;
    u && (w %= T, w < 0 && (w = T - Math.abs(w))), w !== o && w >= 0 && w <= T - 1 && i(w);
  }
  function vn() {
    dn(o - 1);
  }
  function pn() {
    dn(o + 1);
  }
  function qi() {
    je(qe === 0 ? 360 - Mt : qe - Mt);
  }
  function Di() {
    je((qe + Mt) % 360);
  }
  var jr = v.useRef(null), Fi = function() {
    !dr && vr(true), jr.current && clearTimeout(jr.current), jr.current = setTimeout(function() {
      vr(false);
    }, 1e3);
  }, br = function(w) {
    F !== w && (Ae(w), Fi());
  };
  function Ir() {
    var w = le.getNextScale(F, "zoomIn");
    br(w);
  }
  function kr() {
    var w = le.getNextScale(F, "zoomOut");
    br(w);
  }
  function Ui(w) {
    w.deltaY > 0 ? F >= le.minScale && kr() : F <= le.maxScale && Ir();
  }
  function $i() {
    br(1);
  }
  function Vi() {
    var w = he.current.getBoundingClientRect(), T = xe.current.getBoundingClientRect(), ne = w.height / (T.height / F), ye = w.width / (T.width / F), $e = Math.max(ne, ye);
    br($e);
  }
  function mn(w) {
    w.target === w.currentTarget && O && Nr();
  }
  function Bi(w) {
    w.stopPropagation(), Nr();
  }
  function Nr() {
    N && (x && x(false, N), di(d.visible) && M(false));
  }
  function zi(w) {
    if (w && w.length) {
      var T = w[0].contentRect, ne = T.width < C;
      He(ne);
    }
  }
  var gn = function() {
    if (!(!he.current || !xe.current)) {
      var w = he.current.getBoundingClientRect(), T = xe.current.getBoundingClientRect(), ne = de(us(w, T, oe.x, oe.y, F), 2), ye = ne[0], $e = ne[1];
      (ye !== oe.x || $e !== oe.y) && Ze({ x: ye, y: $e });
    }
  }, yn = function(w) {
    if (N && ue) {
      w.preventDefault && w.preventDefault();
      var T = ie.current, ne = T.originX, ye = T.originY, $e = T.pageX, Xi = T.pageY, Yi = ne + (w.pageX - $e) / F, Qi = ye + (w.pageY - Xi) / F;
      Ze({ x: Yi, y: Qi });
    }
  }, bn = function(w) {
    w.preventDefault && w.preventDefault(), De(false);
  };
  function Hi(w) {
    ze("loaded"), Ge && Ge(w);
  }
  function Wi(w) {
    ze("error"), gr && gr(w);
  }
  var Zi = function(w) {
    var T;
    (T = w.preventDefault) === null || T === void 0 || T.call(w), De(true);
    var ne = w.type === "touchstart" ? w.touches[0] : w;
    ie.current.pageX = ne.pageX, ie.current.pageY = ne.pageY, ie.current.originX = oe.x, ie.current.originY = oe.y, Fe == null || Fe(w);
  };
  v.useEffect(function() {
    return N && ue && (Sr(document, "mousemove", yn, false), Sr(document, "mouseup", bn, false)), function() {
      Rr(document, "mousemove", yn, false), Rr(document, "mouseup", bn, false);
    };
  }, [N, ue]), v.useEffect(function() {
    ee && !ue && gn();
  }, [ue, oe]), v.useEffect(function() {
    ee && gn();
  }, [F]), v.useEffect(function() {
    N && Z();
  }, [N]), v.useEffect(function() {
    H(G), ze(G ? "loading" : "loaded"), Z();
  }, [G]), wl(function() {
    le.updateScale(P), Ae(1);
  }, [P]), v.useEffect(function() {
    var w = function(T) {
      if (T) switch (T.key) {
        case ui.key:
          k && Nr();
          break;
        case Eo.key:
          pn();
          break;
        case xo.key:
          vn();
          break;
        case _o.key:
          Ir();
          break;
        case Co.key:
          kr();
          break;
      }
    };
    return N && !ue && !Re.current && (Re.current = true, Sr(document, "keydown", w)), function() {
      Re.current = false, Rr(document, "keydown", w);
    };
  }, [N, k, ue, o, F]);
  var Gi = [{ key: "fullScreen", name: W.ImagePreview.fullScreen, content: s.createElement(No, null), onClick: Vi }, { key: "rotateRight", name: W.ImagePreview.rotateRight, content: s.createElement(So, null), onClick: Di }, { key: "rotateLeft", name: W.ImagePreview.rotateLeft, content: s.createElement(cn, null), onClick: qi }, { key: "zoomIn", name: W.ImagePreview.zoomIn, content: s.createElement(sn, null), onClick: Ir, disabled: F === le.maxScale }, { key: "zoomOut", name: W.ImagePreview.zoomOut, content: s.createElement(ln, null), onClick: kr, disabled: F === le.minScale }, { key: "originalSize", name: W.ImagePreview.originalSize, content: s.createElement(un, null), onClick: $i }], Ki = function() {
    var w, T, ne = s.createElement("img", we({ onWheel: Ui, ref: xe, className: z(yr, re + "-img", (w = {}, w[re + "-img-moving"] = ue, w)), style: we(we({}, Ke), { transform: "translate(" + oe.x + "px, " + oe.y + "px) rotate(" + qe + "deg)" }), key: S, src: S }, I, { onLoad: Hi, onError: Wi, onMouseDown: function(ye) {
      ye.button === 0 && Zi(ye);
    } }));
    return (T = j == null ? void 0 : j(ne)) !== null && T !== void 0 ? T : ne;
  };
  return s.createElement(mi, { visible: N, forceRender: false, getContainer: Ue }, s.createElement(Zt, we({}, V, { getPopupContainer: function() {
    return he.current;
  } }), s.createElement("div", { className: sr, style: we(we({}, g || {}), Mi ? {} : { zIndex: "inherit", position: "absolute" }), ref: Ee }, s.createElement(Se, { in: N, timeout: 400, appear: true, classNames: "fadeImage", mountOnEnter: true, unmountOnExit: false, onEnter: function(w) {
    w && (w.parentNode.style.display = "block", w.style.display = "block");
  }, onExited: function(w) {
    w && (w.parentNode.style.display = "", w.style.display = "none");
  } }, s.createElement("div", { className: re + "-mask" })), N && s.createElement(Oo, { onResize: zi, getTargetDOMNode: function() {
    return he.current;
  } }, s.createElement("div", { ref: he, className: re + "-wrapper", onClick: mn }, s.createElement("div", { ref: cr, className: re + "-img-container", style: { transform: "scale(" + F + ", " + F + ")" }, onClick: mn }, Ki(), Te && s.createElement("div", { className: re + "-loading" }, s.createElement(wo, null))), s.createElement(Se, { in: dr, timeout: 400, appear: true, classNames: "fadeImage", unmountOnExit: true }, s.createElement("div", { className: re + "-scale-value" }, (F * 100).toFixed(0), "%")), ur && s.createElement(ps, { prefixCls: me, previewPrefixCls: re, actions: y, actionsLayout: _, defaultActions: Gi, simple: X }), b && s.createElement("div", { className: re + "-close-btn", onClick: Bi }, s.createElement(ci, null)), a && s.createElement(ms, { previewCount: l.size, current: o, infinite: u, onPrev: vn, onNext: pn }), L)))));
}
var Ti = v.forwardRef(bs);
Ti.displayName = "ImagePreview";
var Vt = function() {
  return Vt = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Vt.apply(this, arguments);
}, hs = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Xe = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], o;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
};
function Os(e, n) {
  var t = e.children, r = e.srcList, a = e.infinite, l = e.current, o = e.defaultCurrent, i = e.onChange, u = e.visible, c = e.defaultVisible, f = e.forceRender, d = e.onVisibleChange, p = hs(e, ["children", "srcList", "infinite", "current", "defaultCurrent", "onChange", "visible", "defaultVisible", "forceRender", "onVisibleChange"]), g = Xe(hr(false, { value: u, defaultValue: c }), 2), m = g[0], E = g[1], O = v.useMemo(function() {
    return r ? new Map(r.map(function(N, M) {
      return [M, { url: N, preview: true }];
    })) : null;
  }, [r]), b = Po(), C = function() {
    return O ? new Map(O) : /* @__PURE__ */ new Map();
  }, y = Xe(v.useState(C()), 2), _ = y[0], h = y[1], x = v.useRef(), P = x.current || /* @__PURE__ */ new Map(), k = function(N) {
    x.current = N(x.current);
  };
  v.useEffect(function() {
    b || h(C());
  }, [O]);
  var q = new Map(Array.from(_).filter(function(N) {
    var M = Xe(N, 2), V = M[1].preview;
    return V;
  }).map(function(N) {
    var M = Xe(N, 2), V = M[0], B = M[1].url;
    return [V, B];
  })), R = Xe(hr(0, { value: l, defaultValue: o }), 2), j = R[0], U = R[1];
  function L(N, M, V) {
    return O || h(function(B) {
      return new Map(B).set(N, { url: M, preview: V });
    }), function() {
      O || h(function(W) {
        var D = new Map(W), me = D.delete(N);
        return me ? D : W;
      });
    };
  }
  function ee(N, M) {
    return k(function(V) {
      return new Map(V).set(N, pe(M) ? M : {});
    }), function() {
      k(function(B) {
        var W = new Map(B), D = W.delete(N);
        return D ? W : B;
      });
    };
  }
  var G = v.useRef();
  v.useImperativeHandle(n, function() {
    return { reset: function() {
      G.current && G.current.reset();
    } };
  });
  var te = function(N, M) {
    var V = di(M) ? m : M;
    d && d(N, V), E(N);
  }, S = function(N) {
    i && i(N), U(N);
  }, H = function(N) {
    var M = 0, V = function(B) {
      var W = s.Children.map(B, function(D) {
        if (D && D.props && D.type) {
          var me = D.type.displayName;
          if (me === "Image") return s.cloneElement(D, { _index: M++ });
        }
        return D && D.props && D.props.children ? s.cloneElement(D, { children: V(D.props.children) }) : D;
      });
      return !Kt(B) && s.Children.count(B) === 1 ? W[0] : W;
    };
    return V(N);
  }, $ = function() {
    var N = Array.from(q.values());
    return N.length > 0 ? s.createElement("div", { style: { display: "none" } }, N.map(function(M) {
      return s.createElement("img", { key: M, src: M });
    })) : null;
  };
  return s.createElement(Ri.Provider, { value: { previewGroup: true, previewUrlMap: q, previewPropsMap: P, infinite: a, currentIndex: j, setCurrentIndex: S, setPreviewUrlMap: h, registerPreviewUrl: L, registerPreviewProps: ee, visible: m, handleVisibleChange: te } }, H(t), s.createElement(Ti, Vt({ ref: G, src: "", visible: m, onVisibleChange: te }, p)), f && $());
}
var Li = v.forwardRef(Os);
Li.displayName = "ImagePreviewGroup";
var wr = function() {
  return wr = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, wr.apply(this, arguments);
}, ws = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Cs = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], o;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
}, Ai = function(e) {
  var n, t = v.useContext(Ce), r = t.locale, a = t.rtl, l = e.listType, o = e.fileList, i = e.renderUploadList, u = e.renderUploadItem, c = e.prefixCls, f = ws(e, ["listType", "fileList", "renderUploadList", "renderUploadItem", "prefixCls"]), d = Cs(v.useState(-1), 2), p = d[0], g = d[1], m = v.useMemo(function() {
    return o.map(function(O) {
      var b = O.url;
      return O.url === void 0 && [A.init, A.success].indexOf(O.status) > -1 && (b = O.originFile && K(URL.createObjectURL) && URL.createObjectURL(O.originFile)), b;
    }).filter(Boolean);
  }, [o]);
  if (K(i)) return s.createElement("div", { className: c + "-list" }, i(o, f));
  var E = function(O) {
    e.imagePreview && g(O);
  };
  return s.createElement(s.Fragment, null, s.createElement(jo, { className: z(c + "-list", c + "-list-type-" + l, (n = {}, n[c + "-list-rtl"] = a, n)) }, o.map(function(O, b) {
    var C = l === "picture-card" ? s.createElement("div", { className: c + "-list-item " + c + "-list-item-" + O.status }, s.createElement(Kl, wr({}, e, { onPreview: function(y) {
      var _;
      E(b), (_ = e.onPreview) === null || _ === void 0 || _.call(e, y);
    }, file: O, locale: r }))) : s.createElement(ts, wr({}, e, { file: O, locale: r }));
    return K(u) && (C = u(C, O, o)), l === "picture-card" ? s.createElement(Se, { key: O.uid, timeout: { enter: 200, exit: 400 }, classNames: c + "-slide-inline", onEntered: function(y) {
      y && (y.style.width = "");
    }, onExit: function(y) {
      y && (y.style.width = y.scrollWidth + "px");
    }, onExiting: function(y) {
      y && (y.style.width = 0);
    }, onExited: function(y) {
      y && (y.style.width = 0);
    } }, C) : s.createElement(Se, { key: O.uid, timeout: { enter: 200, exit: 400 }, classNames: c + "-slide-up", onExit: function(y) {
      y && (y.style.height = y.scrollHeight + "px");
    }, onExiting: function(y) {
      y && (y.style.height = 0);
    }, onExited: function(y) {
      y && (y.style.height = 0);
    } }, C);
  })), l === "picture-card" && e.imagePreview && s.createElement(Li, { srcList: m, visible: p !== -1, current: p, onChange: E, onVisibleChange: function(O) {
    E(O ? p : -1);
  } }));
};
Ai.displayName = "FileList";
function ni(e) {
  var n = e.responseText || e.response;
  if (!n) return n;
  try {
    return JSON.parse(n);
  } catch {
    return n;
  }
}
var _s = function(e) {
  var n = e.onProgress, t = n === void 0 ? Tr : n, r = e.onError, a = r === void 0 ? Tr : r, l = e.onSuccess, o = l === void 0 ? Tr : l, i = e.action, u = e.method, c = e.headers, f = c === void 0 ? {} : c, d = e.name, p = e.file, g = e.data, m = g === void 0 ? {} : g, E = e.withCredentials, O = E === void 0 ? false : E;
  function b(P) {
    return typeof P == "function" ? P(p) : P;
  }
  var C = b(d), y = b(m), _ = new XMLHttpRequest();
  t && _.upload && (_.upload.onprogress = function(P) {
    var k;
    P.total > 0 && (k = P.loaded / P.total * 100), t(parseInt(k, 10), P);
  }), _.onerror = function(k) {
    a(k);
  }, _.onload = function() {
    if (_.status < 200 || _.status >= 300) return a(ni(_));
    o(ni(_));
  };
  var h = new FormData();
  y && Object.keys(y).map(function(P) {
    return h.append(P, y[P]);
  }), h.append(C || "file", p), _.open(u, i, true), O && "withCredentials" in _ && (_.withCredentials = true);
  for (var x in f) f.hasOwnProperty(x) && f[x] !== null && _.setRequestHeader(x, f[x]);
  return _.send(h), { abort: function() {
    _.abort();
  } };
}, fn = function(e, n) {
  var t = pe(n) ? n == null ? void 0 : n.type : n, r = !(pe(n) && n.strict === false);
  if (r && t && e) {
    var a = Kt(t) ? t : t.split(",").map(function(o) {
      return o.trim();
    }).filter(function(o) {
      return o;
    }), l = (e.name.indexOf(".") > -1 ? "." + e.name.split(".").pop() : "").toLowerCase();
    return a.some(function(o) {
      var i = o && o.toLowerCase(), u = (e.type || "").toLowerCase(), c = u.split("/")[0];
      if (i === u || "" + c + l.replace(".", "/") === i || /^\*(\/\*)?$/.test(i)) return true;
      if (/\/\*/.test(i)) return u.replace(/\/.*$/, "") === i.replace(/\/.*$/, "");
      if (/\..*/.test(i)) {
        var f = [i];
        return (i === ".jpg" || i === ".jpeg") && (f = [".jpg", ".jpeg"]), f.indexOf(l) > -1;
      }
      return false;
    });
  }
  return !!e;
}, xs = function(e, n) {
  if (e) {
    var t = [].slice.call(e);
    return n && (t = t.filter(function(r) {
      return fn(r, n);
    })), t;
  }
}, Es = function(e, n, t) {
  var r = [], a = 0, l = function() {
    !a && t(r);
  }, o = function(u) {
    if (a += 1, u != null && u.isFile) {
      u.file(function(p) {
        a -= 1, fn(p, n) && (Object.defineProperty(p, "webkitRelativePath", { value: u.fullPath.replace(/^\//, "") }), r.push(p)), l();
      });
      return;
    }
    if (u != null && u.isDirectory) {
      var c = u.createReader(), f = false, d = function() {
        c.readEntries(function(p) {
          f || (a -= 1, f = true), p.length === 0 ? l() : (d(), p.forEach(o));
        });
      };
      d();
      return;
    }
    a -= 1, l();
  }, i = [].slice.call(e);
  i.forEach(function(u) {
    u.webkitGetAsEntry && o(u.webkitGetAsEntry());
  });
}, Cr = function() {
  return Cr = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Cr.apply(this, arguments);
}, qt = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], o;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
}, ai = function(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, a = n.length, l; r < a; r++) (l || !(r in n)) && (l || (l = Array.prototype.slice.call(n, 0, r)), l[r] = n[r]);
  return e.concat(l || Array.prototype.slice.call(n));
}, Ps = function(e, n) {
  var t, r, a = xr(), l = v.useContext(Ce).locale, o = qt(v.useState(false), 2), i = o[0], u = o[1], c = qt(v.useState(0), 2), f = c[0], d = c[1], p = e.tip, g = e.children, m = e.disabled, E = e.drag, O = e.listType, b = e.prefixCls, C = e.accept, y = e.multiple, _ = { disabled: m };
  return v.useEffect(function() {
    d(0);
  }, [i]), g === null ? null : s.createElement("div", Cr({ className: b + "-trigger", onClick: m ? void 0 : e.onClick }, a({ onPressEnter: function() {
    var h;
    !m && ((h = e.onClick) === null || h === void 0 || h.call(e));
  } }), { ref: n, onDragEnter: function() {
    d(f + 1);
  }, onDragLeave: function(h) {
    var x;
    h.preventDefault(), f === 0 ? (u(false), !m && ((x = e.onDragLeave) === null || x === void 0 || x.call(e, h))) : d(f - 1);
  }, onDrop: function(h) {
    if (h.preventDefault(), !m && e.drag !== false) {
      if (u(false), e.directory) Es(h.dataTransfer.items, C, function(q) {
        e.onDragFiles && e.onDragFiles(q);
      });
      else {
        var x = [].slice.call(h.dataTransfer.items || []).reduce(function(q, R, j) {
          if (R.webkitGetAsEntry) {
            var U = R.webkitGetAsEntry();
            return U != null && U.isDirectory ? ai(ai([], qt(q), false), [j], false) : q;
          }
        }, []), P = [].slice.call(h.dataTransfer.files || []).filter(function(q, R) {
          return !x.includes(R);
        }), k = xs(P, C);
        k.length > 0 && e.onDragFiles && e.onDragFiles(y ? k : k.slice(0, 1));
      }
      e.onDrop && e.onDrop(h);
    }
  }, onDragOver: function(h) {
    var x;
    h.preventDefault(), !m && !i && (u(true), (x = e.onDragOver) === null || x === void 0 || x.call(e, h));
  } }), s.isValidElement(g) ? s.createElement("div", { className: z((t = {}, t[b + "-trigger-custom-active"] = i, t)) }, s.cloneElement(g, _)) : O === "picture-card" ? s.createElement("div", { className: b + "-trigger-picture-wrapper" }, s.createElement("div", { className: b + "-trigger-picture", tabIndex: 0, "aria-label": l.Upload.upload }, s.createElement("div", { className: b + "-trigger-picture-text" }, s.createElement(hn, null)))) : E ? s.createElement("div", { className: z(b + "-trigger-drag", (r = {}, r[b + "-trigger-drag-active"] = i, r)), tabIndex: 0, "aria-label": l.Upload.drag }, s.createElement(hn, null), s.createElement("p", { className: b + "-trigger-drag-text" }, i ? l.Upload.dragHover : l.Upload.drag), p && s.createElement("div", { className: b + "-trigger-tip" }, p)) : s.createElement(Ft, Cr({}, _, { "aria-label": l.Upload.upload, type: "primary", className: b + "-trigger-with-icon" }), s.createElement(lr, null), l.Upload.upload));
};
const js = v.forwardRef(Ps);
var Is = /* @__PURE__ */ (function() {
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
})(), ae = function() {
  return ae = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ae.apply(this, arguments);
}, ks = function(e, n, t, r) {
  function a(l) {
    return l instanceof t ? l : new t(function(o) {
      o(l);
    });
  }
  return new (t || (t = Promise))(function(l, o) {
    function i(f) {
      try {
        c(r.next(f));
      } catch (d) {
        o(d);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (d) {
        o(d);
      }
    }
    function c(f) {
      f.done ? l(f.value) : a(f.value).then(i, u);
    }
    c((r = r.apply(e, n || [])).next());
  });
}, Ns = function(e, n) {
  var t = { label: 0, sent: function() {
    if (l[0] & 1) throw l[1];
    return l[1];
  }, trys: [], ops: [] }, r, a, l, o;
  return o = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function i(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (r = 1, a && (l = c[0] & 2 ? a.return : c[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, c[1])).done) return l;
      switch (a = 0, l && (c = [c[0] & 2, l.value]), c[0]) {
        case 0:
        case 1:
          l = c;
          break;
        case 4:
          return t.label++, { value: c[1], done: false };
        case 5:
          t.label++, a = c[1], c = [0];
          continue;
        case 7:
          c = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (l = t.trys, !(l = l.length > 0 && l[l.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            t = 0;
            continue;
          }
          if (c[0] === 3 && (!l || c[1] > l[0] && c[1] < l[3])) {
            t.label = c[1];
            break;
          }
          if (c[0] === 6 && t.label < l[1]) {
            t.label = l[1], l = c;
            break;
          }
          if (l && t.label < l[2]) {
            t.label = l[2], t.ops.push(c);
            break;
          }
          l[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      c = n.call(e, t);
    } catch (f) {
      c = [6, f], a = 0;
    } finally {
      r = l = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: true };
  }
}, Ss = (function(e) {
  Is(n, e);
  function n(t) {
    var r = e.call(this, t) || this;
    return r.upload = function(a) {
      r.doUpload(a);
    }, r.abort = function(a) {
      var l = r.state.uploadRequests[a.uid];
      l && (l.abort && l.abort(), r.updateFileStatus(ae(ae({}, a), { status: A.fail })), r.deleteReq(a.uid));
    }, r.reupload = function(a) {
      r.doUpload(ae(ae({}, a), { percent: 0, status: A.uploading }));
    }, r.deleteReq = function(a) {
      var l = ae({}, r.state.uploadRequests);
      delete l[a], r.setState({ uploadRequests: l });
    }, r.delete = r.deleteReq, r.updateFileStatus = function(a, l) {
      l === void 0 && (l = r.props.fileList);
      var o = r.props.onFileStatusChange, i = "uid" in a ? "uid" : "name";
      o && o(l.map(function(u) {
        return u[i] === a[i] ? a : u;
      }), a);
    }, r.getTargetFile = function(a) {
      var l = "uid" in a ? "uid" : "name", o = r.props.fileList.find(function(i) {
        return i[l] === a[l];
      });
      return o;
    }, r.doUpload = function(a) {
      return ks(r, void 0, void 0, function() {
        var l, o, i, u, c, f, d, p, g, m, E, O, b, C, y = this;
        return Ns(this, function(_) {
          switch (_.label) {
            case 0:
              return l = this.props, o = l.action, i = l.headers, u = l.name, c = l.data, f = l.withCredentials, d = l.customRequest, p = l.method, g = function(h, x) {
                var P = y.getTargetFile(a);
                P && (P.status = A.uploading, P.percent = h, y.props.onProgress && y.props.onProgress(P, x));
              }, m = function(h) {
                var x = y.getTargetFile(a);
                x && (x.status = A.success, x.response = h, y.updateFileStatus(x)), y.deleteReq(a.uid);
              }, E = function(h) {
                var x = y.getTargetFile(a);
                x && (x.status = A.fail, x.response = h, y.updateFileStatus(x)), y.deleteReq(a.uid);
              }, O = { onProgress: g, onSuccess: m, onError: E, headers: i, name: u, file: a.originFile, data: c, withCredentials: f }, this.updateFileStatus(a), o ? (b = _s(ae(ae({}, O), { action: o, method: p })), [3, 3]) : [3, 1];
            case 1:
              return d ? [4, d(O)] : [3, 3];
            case 2:
              b = _.sent(), _.label = 3;
            case 3:
              return this.setState({ uploadRequests: ae(ae({}, this.state.uploadRequests), (C = {}, C[a.uid] = b, C)) }), [2];
          }
        });
      });
    }, r.handleFiles = function(a) {
      var l = r.props, o = l.limit, i = l.fileList, u = l.onExceedLimit, c = l.autoUpload;
      if (vi(o) && o < i.length + a.length) return u && u(a, i);
      var f = function(d, p) {
        var g = r.props.fileList || [], m = { uid: "" + String(+/* @__PURE__ */ new Date()) + p, originFile: d, percent: 0, status: A.init, name: d.name };
        g.push(m), r.updateFileStatus(m, g), c && setTimeout(function() {
          r.doUpload(ae(ae({}, m), { status: A.uploading }));
        }, 0);
      };
      a.forEach(function(d, p) {
        fn(d, r.props.accept) && (K(r.props.beforeUpload) ? Promise.resolve(r.props.beforeUpload(d, a)).then(function(g) {
          if (g !== false) {
            var m = Io(g) ? g : d;
            f(m, p);
          }
        }).catch(function(g) {
          console.error(g);
        }) : f(d, p));
      });
    }, r.state = { uploadRequests: {} }, r;
  }
  return n.prototype.render = function() {
    var t = this, r = this.props, a = r.accept, l = r.multiple, o = r.children, i = r.prefixCls, u = r.tip, c = r.disabled, f = r.drag, d = r.listType, p = r.hide, g = r.directory, m = r.onDrop, E = r.onDragOver, O = r.onDragLeave;
    return s.createElement(s.Fragment, null, s.createElement("input", ae({ key: "trigger-input", ref: function(b) {
      return t.inputRef = b;
    }, style: { display: "none" }, type: "file", accept: pe(a) ? a == null ? void 0 : a.type : a, multiple: l }, g ? { webkitdirectory: "true" } : {}, { onChange: function(b) {
      var C = b.target.files;
      C && (t.handleFiles([].slice.call(C)), t.inputRef.value = "");
    }, onClick: function(b) {
      b.stopPropagation();
    } })), s.createElement(Se, { key: "trigger-node", in: !p, timeout: 100, unmountOnExit: true, classNames: "fadeIn" }, s.createElement(js, { directory: g, tip: u, multiple: l, accept: a, disabled: c, drag: f, listType: d, onDrop: m, onDragOver: E, onDragLeave: O, onDragFiles: this.handleFiles, onClick: function() {
      !c && t.inputRef && t.inputRef.click();
    }, prefixCls: i }, K(o) ? o({ fileList: this.props.fileList }) : o)), u && d !== "picture-card" && !f ? s.createElement("div", { key: "trigger-tip", className: i + "-trigger-tip" }, u) : null);
  }, n;
})(s.Component), Ne = function() {
  return Ne = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ne.apply(this, arguments);
}, Rs = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (t[r[a]] = e[r[a]]);
  return t;
}, Ts = function(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), a, l = [], o;
  try {
    for (; (n === void 0 || n-- > 0) && !(a = r.next()).done; ) l.push(a.value);
  } catch (i) {
    o = { error: i };
  } finally {
    try {
      a && !a.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return l;
}, Dt = function(e) {
  var n = [].concat(e || []).filter(Boolean);
  return n.reduce(function(t, r, a) {
    if (r.uid) {
      var l = n.findIndex(function(u) {
        return r.uid === u.uid && r !== u;
      }), o = Ne({ status: A.success, percent: 100 }, r);
      l === -1 ? t.push(o) : t.splice(l, 1, o);
    } else {
      var i = "" + String(+/* @__PURE__ */ new Date()) + a;
      t.push(Ne({ uid: i, status: A.success, percent: 100 }, r));
    }
    return t;
  }, []);
}, Ls = { listType: "text", autoUpload: true, showUploadList: true, beforeUpload: function() {
  return true;
}, method: "post" }, As = function(e, n) {
  var t, r = v.useContext(Ce), a = r.getPrefixCls, l = r.componentConfig, o = r.rtl, i = _r(e, Ls, l == null ? void 0 : l.Upload), u = a("upload"), c = v.useRef(), f = v.useRef(), d = Ts(v.useState(function() {
    return "fileList" in i ? Dt(i.fileList) : "defaultFileList" in i ? Dt(i.defaultFileList) : [];
  }), 2), p = d[0], g = d[1], m = "fileList" in i ? Dt(i.fileList) : p, E = function(S, H) {
    var $;
    "fileList" in i || g(S), ($ = i.onChange) === null || $ === void 0 || $.call(i, S, H);
  }, O = function(S) {
    S && setTimeout(function() {
      c.current && c.current.upload(S);
    }, 0);
  }, b = function(S) {
    c.current && c.current.reupload(S), i.onReupload && i.onReupload(S);
  }, C = function(S) {
    if (S) {
      var H = i.onRemove;
      Promise.resolve(K(H) ? H(S, m) : H).then(function($) {
        $ !== false && (c.current && c.current.abort(S), E(m.filter(function(N) {
          return N.uid !== S.uid;
        }), S));
      }).catch(function($) {
        console.error($);
      });
    }
  }, y = function(S) {
    S && c.current && c.current.abort(S);
  };
  v.useImperativeHandle(n, function() {
    return { submit: function(S) {
      var H = [];
      S ? H = [S] : H = m.filter(function($) {
        return $.status === A.init;
      }), H.forEach(function($) {
        O($);
      });
    }, abort: function(S) {
      y(S);
    }, reupload: function(S) {
      b(S);
    }, getRootDOMNode: function() {
      return f.current;
    } };
  });
  var _ = i.listType, h = i.className, x = i.style, P = i.renderUploadItem, k = i.showUploadList, q = i.renderUploadList, R = i.progressProps, j = i.imagePreview, U = Rs(i, ["listType", "className", "style", "renderUploadItem", "showUploadList", "renderUploadList", "progressProps", "imagePreview"]), L = vi(i.limit) ? { hideOnExceedLimit: true, maxCount: i.limit } : Ne({ hideOnExceedLimit: true }, i.limit), ee = L.maxCount && L.maxCount <= m.length, G = "disabled" in i ? i.disabled : !L.hideOnExceedLimit && ee, te = s.createElement("div", Ne({}, Gt(U, ["disabled", "directory", "onReupload", "defaultFileList", "fileList", "autoUpload", "error", "action", "method", "multiple", "name", "accept", "customRequest", "children", "autoUpload", "limit", "drag", "tip", "headers", "data", "withCredentials", "onChange", "onPreview", "onRemove", "onProgress", "onExceedLimit", "beforeUpload", "onDrop", "onDragOver", "onDragLeave"]), { className: z(u, (t = {}, t[u + "-type-" + _] = _, t[u + "-drag"] = i.drag, t[u + "-disabled"] = G, t[u + "-hide"] = L.hideOnExceedLimit && ee, t[u + "-rtl"] = o, t), h), style: x, ref: f }), s.createElement(Ss, Ne({ ref: c }, i, { limit: L.maxCount, hide: L.hideOnExceedLimit && ee, disabled: G, prefixCls: u, fileList: m, onProgress: function(S, H) {
    S && ("fileList" in i || g(m.map(function($) {
      return $.uid === S.uid ? S : $;
    })), i.onProgress && i.onProgress(S, H));
  }, onFileStatusChange: E })));
  return s.createElement(s.Fragment, null, _ !== "picture-card" && te, k && s.createElement(Ai, { imagePreview: j, progressProps: R, showUploadList: k, disabled: i.disabled, listType: _, fileList: m, renderUploadItem: P, renderUploadList: q, onUpload: O, onAbort: y, onRemove: C, onReupload: b, onPreview: i.onPreview, prefixCls: u }), _ === "picture-card" && te, i.tip && _ === "picture-card" && s.createElement("div", { className: u + "-trigger-tip" }, i.tip));
}, Ms = v.forwardRef(As);
Ms.displayName = "Upload";
export { fl as A, ml as B, _e as E, Qt as I, Ms as U, nr as a, Wo as b, hi as c, al as d, Yt as e, qo as f, Ci as g, _i as h, rl as i, Ei as j, Oi as k, wi as l, Us as m, tl as n, Pi as o, bi as p, Vo as q, $o as r, Bo as s, Jo as t, wl as u, el as v, Uo as w, zo as x, Zo as y, Yo as z };
