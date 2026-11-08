import { ae as Za, af as Ot, ag as za, ah as De, ai as Ze, aj as ze, ak as Xa, al as ei, am as ri, an as Et, g as xe, ao as Xe, ap as da, aq as qt, ar as ti, as as ni, F as k, i as Q, at as ue, R as w, t as se, au as Ut, r as _, av as N, C as Ae, u as We, aw as ai, ax as ii, s as jt, d as ee, w as oi, ay as Qe, az as Ye, P as mt, aA as si, aB as li, a as ui, b as fi, I as ci, aC as di, k as vi, _ as gi, l as hi, Q as pi, h as je, A as yi, aD as mi } from "./index-DOWuBEUh.js";
import { r as bi, b as _i, c as Si, d as Fi, e as wi, f as va, g as ga, h as Ci, i as ha, j as pa, k as ya, l as xi, n as Ge, o as At, p as Oi, q as ma, s as Ei, t as ba, v as _a, w as qi, x as ji, y as Ai, z as Ii, A as Ti, B as Vi, m as Pi } from "./upload-dwSPQUIn.js";
var sr, kt;
function Ri() {
  if (kt) return sr;
  kt = 1;
  var n = "__lodash_hash_undefined__";
  function e(t) {
    return this.__data__.set(t, n), this;
  }
  return sr = e, sr;
}
var lr, Bt;
function Mi() {
  if (Bt) return lr;
  Bt = 1;
  function n(e) {
    return this.__data__.has(e);
  }
  return lr = n, lr;
}
var ur, Ht;
function Li() {
  if (Ht) return ur;
  Ht = 1;
  var n = Za(), e = Ri(), t = Mi();
  function a(r) {
    var i = -1, o = r == null ? 0 : r.length;
    for (this.__data__ = new n(); ++i < o; ) this.add(r[i]);
  }
  return a.prototype.add = a.prototype.push = e, a.prototype.has = t, ur = a, ur;
}
var fr, Qt;
function Ni() {
  if (Qt) return fr;
  Qt = 1;
  function n(e, t) {
    for (var a = -1, r = e == null ? 0 : e.length; ++a < r; ) if (t(e[a], a, e)) return true;
    return false;
  }
  return fr = n, fr;
}
var cr, Yt;
function Di() {
  if (Yt) return cr;
  Yt = 1;
  function n(e, t) {
    return e.has(t);
  }
  return cr = n, cr;
}
var dr, Jt;
function Sa() {
  if (Jt) return dr;
  Jt = 1;
  var n = Li(), e = Ni(), t = Di(), a = 1, r = 2;
  function i(o, s, f, u, l, c) {
    var v = f & a, g = o.length, h = s.length;
    if (g != h && !(v && h > g)) return false;
    var m = c.get(o), y = c.get(s);
    if (m && y) return m == s && y == o;
    var d = -1, p = true, S = f & r ? new n() : void 0;
    for (c.set(o, s), c.set(s, o); ++d < g; ) {
      var b = o[d], x = s[d];
      if (u) var F = v ? u(x, b, d, s, o, c) : u(b, x, d, o, s, c);
      if (F !== void 0) {
        if (F) continue;
        p = false;
        break;
      }
      if (S) {
        if (!e(s, function(C, A) {
          if (!t(S, A) && (b === C || l(b, C, f, u, c))) return S.push(A);
        })) {
          p = false;
          break;
        }
      } else if (!(b === x || l(b, x, f, u, c))) {
        p = false;
        break;
      }
    }
    return c.delete(o), c.delete(s), p;
  }
  return dr = i, dr;
}
var vr, Zt;
function Wi() {
  if (Zt) return vr;
  Zt = 1;
  function n(e) {
    var t = -1, a = Array(e.size);
    return e.forEach(function(r, i) {
      a[++t] = [i, r];
    }), a;
  }
  return vr = n, vr;
}
var gr, zt;
function Gi() {
  if (zt) return gr;
  zt = 1;
  function n(e) {
    var t = -1, a = Array(e.size);
    return e.forEach(function(r) {
      a[++t] = r;
    }), a;
  }
  return gr = n, gr;
}
var hr, Xt;
function $i() {
  if (Xt) return hr;
  Xt = 1;
  var n = Ot(), e = bi(), t = za(), a = Sa(), r = Wi(), i = Gi(), o = 1, s = 2, f = "[object Boolean]", u = "[object Date]", l = "[object Error]", c = "[object Map]", v = "[object Number]", g = "[object RegExp]", h = "[object Set]", m = "[object String]", y = "[object Symbol]", d = "[object ArrayBuffer]", p = "[object DataView]", S = n ? n.prototype : void 0, b = S ? S.valueOf : void 0;
  function x(F, C, A, O, V, M, j) {
    switch (A) {
      case p:
        if (F.byteLength != C.byteLength || F.byteOffset != C.byteOffset) return false;
        F = F.buffer, C = C.buffer;
      case d:
        return !(F.byteLength != C.byteLength || !M(new e(F), new e(C)));
      case f:
      case u:
      case v:
        return t(+F, +C);
      case l:
        return F.name == C.name && F.message == C.message;
      case g:
      case m:
        return F == C + "";
      case c:
        var E = r;
      case h:
        var L = O & o;
        if (E || (E = i), F.size != C.size && !L) return false;
        var q = j.get(F);
        if (q) return q == C;
        O |= s, j.set(F, C);
        var R = a(E(F), E(C), O, V, M, j);
        return j.delete(F), R;
      case y:
        if (b) return b.call(F) == b.call(C);
    }
    return false;
  }
  return hr = x, hr;
}
var pr, en;
function It() {
  if (en) return pr;
  en = 1;
  function n(e, t) {
    for (var a = -1, r = t.length, i = e.length; ++a < r; ) e[i + a] = t[a];
    return e;
  }
  return pr = n, pr;
}
var yr, rn;
function Fa() {
  if (rn) return yr;
  rn = 1;
  var n = It(), e = De();
  function t(a, r, i) {
    var o = r(a);
    return e(a) ? o : n(o, i(a));
  }
  return yr = t, yr;
}
var mr, tn;
function Ki() {
  if (tn) return mr;
  tn = 1;
  function n(e, t) {
    for (var a = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++a < r; ) {
      var s = e[a];
      t(s, a, e) && (o[i++] = s);
    }
    return o;
  }
  return mr = n, mr;
}
var br, nn;
function wa() {
  if (nn) return br;
  nn = 1;
  function n() {
    return [];
  }
  return br = n, br;
}
var _r, an;
function Tt() {
  if (an) return _r;
  an = 1;
  var n = Ki(), e = wa(), t = Object.prototype, a = t.propertyIsEnumerable, r = Object.getOwnPropertySymbols, i = r ? function(o) {
    return o == null ? [] : (o = Object(o), n(r(o), function(s) {
      return a.call(o, s);
    }));
  } : e;
  return _r = i, _r;
}
var Sr, on;
function Ui() {
  if (on) return Sr;
  on = 1;
  var n = _i(), e = n(Object.keys, Object);
  return Sr = e, Sr;
}
var Fr, sn;
function ki() {
  if (sn) return Fr;
  sn = 1;
  var n = Si(), e = Ui(), t = Object.prototype, a = t.hasOwnProperty;
  function r(i) {
    if (!n(i)) return e(i);
    var o = [];
    for (var s in Object(i)) a.call(i, s) && s != "constructor" && o.push(s);
    return o;
  }
  return Fr = r, Fr;
}
var wr, ln;
function Vt() {
  if (ln) return wr;
  ln = 1;
  var n = Fi(), e = ki(), t = wi();
  function a(r) {
    return t(r) ? n(r) : e(r);
  }
  return wr = a, wr;
}
var Cr, un;
function Ca() {
  if (un) return Cr;
  un = 1;
  var n = Fa(), e = Tt(), t = Vt();
  function a(r) {
    return n(r, t, e);
  }
  return Cr = a, Cr;
}
var xr, fn;
function Bi() {
  if (fn) return xr;
  fn = 1;
  var n = Ca(), e = 1, t = Object.prototype, a = t.hasOwnProperty;
  function r(i, o, s, f, u, l) {
    var c = s & e, v = n(i), g = v.length, h = n(o), m = h.length;
    if (g != m && !c) return false;
    for (var y = g; y--; ) {
      var d = v[y];
      if (!(c ? d in o : a.call(o, d))) return false;
    }
    var p = l.get(i), S = l.get(o);
    if (p && S) return p == o && S == i;
    var b = true;
    l.set(i, o), l.set(o, i);
    for (var x = c; ++y < g; ) {
      d = v[y];
      var F = i[d], C = o[d];
      if (f) var A = c ? f(C, F, d, o, i, l) : f(F, C, d, i, o, l);
      if (!(A === void 0 ? F === C || u(F, C, s, f, l) : A)) {
        b = false;
        break;
      }
      x || (x = d == "constructor");
    }
    if (b && !x) {
      var O = i.constructor, V = o.constructor;
      O != V && "constructor" in i && "constructor" in o && !(typeof O == "function" && O instanceof O && typeof V == "function" && V instanceof V) && (b = false);
    }
    return l.delete(i), l.delete(o), b;
  }
  return xr = r, xr;
}
var Or, cn;
function Hi() {
  if (cn) return Or;
  cn = 1;
  var n = Ze(), e = ze(), t = n(e, "DataView");
  return Or = t, Or;
}
var Er, dn;
function Qi() {
  if (dn) return Er;
  dn = 1;
  var n = Ze(), e = ze(), t = n(e, "Promise");
  return Er = t, Er;
}
var qr, vn;
function Yi() {
  if (vn) return qr;
  vn = 1;
  var n = Ze(), e = ze(), t = n(e, "Set");
  return qr = t, qr;
}
var jr, gn;
function Ji() {
  if (gn) return jr;
  gn = 1;
  var n = Ze(), e = ze(), t = n(e, "WeakMap");
  return jr = t, jr;
}
var Ar, hn;
function er() {
  if (hn) return Ar;
  hn = 1;
  var n = Hi(), e = Xa(), t = Qi(), a = Yi(), r = Ji(), i = ei(), o = ri(), s = "[object Map]", f = "[object Object]", u = "[object Promise]", l = "[object Set]", c = "[object WeakMap]", v = "[object DataView]", g = o(n), h = o(e), m = o(t), y = o(a), d = o(r), p = i;
  return (n && p(new n(new ArrayBuffer(1))) != v || e && p(new e()) != s || t && p(t.resolve()) != u || a && p(new a()) != l || r && p(new r()) != c) && (p = function(S) {
    var b = i(S), x = b == f ? S.constructor : void 0, F = x ? o(x) : "";
    if (F) switch (F) {
      case g:
        return v;
      case h:
        return s;
      case m:
        return u;
      case y:
        return l;
      case d:
        return c;
    }
    return b;
  }), Ar = p, Ar;
}
var Ir, pn;
function Zi() {
  if (pn) return Ir;
  pn = 1;
  var n = va(), e = Sa(), t = $i(), a = Bi(), r = er(), i = De(), o = ga(), s = Ci(), f = 1, u = "[object Arguments]", l = "[object Array]", c = "[object Object]", v = Object.prototype, g = v.hasOwnProperty;
  function h(m, y, d, p, S, b) {
    var x = i(m), F = i(y), C = x ? l : r(m), A = F ? l : r(y);
    C = C == u ? c : C, A = A == u ? c : A;
    var O = C == c, V = A == c, M = C == A;
    if (M && o(m)) {
      if (!o(y)) return false;
      x = true, O = false;
    }
    if (M && !O) return b || (b = new n()), x || s(m) ? e(m, y, d, p, S, b) : t(m, y, C, d, p, S, b);
    if (!(d & f)) {
      var j = O && g.call(m, "__wrapped__"), E = V && g.call(y, "__wrapped__");
      if (j || E) {
        var L = j ? m.value() : m, q = E ? y.value() : y;
        return b || (b = new n()), S(L, q, d, p, b);
      }
    }
    return M ? (b || (b = new n()), a(m, y, d, p, S, b)) : false;
  }
  return Ir = h, Ir;
}
var Tr, yn;
function zi() {
  if (yn) return Tr;
  yn = 1;
  var n = Zi(), e = Et();
  function t(a, r, i, o, s) {
    return a === r ? true : a == null || r == null || !e(a) && !e(r) ? a !== a && r !== r : n(a, r, i, o, t, s);
  }
  return Tr = t, Tr;
}
var Vr, mn;
function Xi() {
  if (mn) return Vr;
  mn = 1;
  var n = zi();
  function e(t, a, r) {
    r = typeof r == "function" ? r : void 0;
    var i = r ? r(t, a) : void 0;
    return i === void 0 ? n(t, a, void 0, r) : !!i;
  }
  return Vr = e, Vr;
}
var eo = Xi();
const bt = xe(eo);
var Pr, bn;
function xa() {
  if (bn) return Pr;
  bn = 1;
  var n = ha(), e = Xe(), t = pa(), a = da(), r = qt();
  function i(o, s, f, u) {
    if (!a(o)) return o;
    s = e(s, o);
    for (var l = -1, c = s.length, v = c - 1, g = o; g != null && ++l < c; ) {
      var h = r(s[l]), m = f;
      if (h === "__proto__" || h === "constructor" || h === "prototype") return o;
      if (l != v) {
        var y = g[h];
        m = u ? u(y, h, g) : void 0, m === void 0 && (m = a(y) ? y : t(s[l + 1]) ? [] : {});
      }
      n(g, h, m), g = g[h];
    }
    return o;
  }
  return Pr = i, Pr;
}
var Rr, _n;
function ro() {
  if (_n) return Rr;
  _n = 1;
  var n = xa();
  function e(t, a, r, i) {
    return i = typeof i == "function" ? i : void 0, t == null ? t : n(t, a, r, i);
  }
  return Rr = e, Rr;
}
var to = ro();
const Oa = xe(to);
var Mr, Sn;
function no() {
  if (Sn) return Mr;
  Sn = 1;
  var n = Object.prototype, e = n.hasOwnProperty;
  function t(a, r) {
    return a != null && e.call(a, r);
  }
  return Mr = t, Mr;
}
var Lr, Fn;
function ao() {
  if (Fn) return Lr;
  Fn = 1;
  var n = Xe(), e = ya(), t = De(), a = pa(), r = xi(), i = qt();
  function o(s, f, u) {
    f = n(f, s);
    for (var l = -1, c = f.length, v = false; ++l < c; ) {
      var g = i(f[l]);
      if (!(v = s != null && u(s, g))) break;
      s = s[g];
    }
    return v || ++l != c ? v : (c = s == null ? 0 : s.length, !!c && r(c) && a(g, c) && (t(s) || e(s)));
  }
  return Lr = o, Lr;
}
var Nr, wn;
function io() {
  if (wn) return Nr;
  wn = 1;
  var n = no(), e = ao();
  function t(a, r) {
    return a != null && e(a, r, n);
  }
  return Nr = t, Nr;
}
var oo = io();
const Ea = xe(oo);
var Dr, Cn;
function so() {
  if (Cn) return Dr;
  Cn = 1;
  function n(e, t) {
    for (var a = -1, r = e == null ? 0 : e.length; ++a < r && t(e[a], a, e) !== false; ) ;
    return e;
  }
  return Dr = n, Dr;
}
var Wr, xn;
function lo() {
  if (xn) return Wr;
  xn = 1;
  var n = Ge(), e = Vt();
  function t(a, r) {
    return a && n(r, e(r), a);
  }
  return Wr = t, Wr;
}
var Gr, On;
function uo() {
  if (On) return Gr;
  On = 1;
  var n = Ge(), e = At();
  function t(a, r) {
    return a && n(r, e(r), a);
  }
  return Gr = t, Gr;
}
var $r, En;
function fo() {
  if (En) return $r;
  En = 1;
  var n = Ge(), e = Tt();
  function t(a, r) {
    return n(a, e(a), r);
  }
  return $r = t, $r;
}
var Kr, qn;
function qa() {
  if (qn) return Kr;
  qn = 1;
  var n = It(), e = Oi(), t = Tt(), a = wa(), r = Object.getOwnPropertySymbols, i = r ? function(o) {
    for (var s = []; o; ) n(s, t(o)), o = e(o);
    return s;
  } : a;
  return Kr = i, Kr;
}
var Ur, jn;
function co() {
  if (jn) return Ur;
  jn = 1;
  var n = Ge(), e = qa();
  function t(a, r) {
    return n(a, e(a), r);
  }
  return Ur = t, Ur;
}
var kr, An;
function ja() {
  if (An) return kr;
  An = 1;
  var n = Fa(), e = qa(), t = At();
  function a(r) {
    return n(r, t, e);
  }
  return kr = a, kr;
}
var Br, In;
function vo() {
  if (In) return Br;
  In = 1;
  var n = Object.prototype, e = n.hasOwnProperty;
  function t(a) {
    var r = a.length, i = new a.constructor(r);
    return r && typeof a[0] == "string" && e.call(a, "index") && (i.index = a.index, i.input = a.input), i;
  }
  return Br = t, Br;
}
var Hr, Tn;
function go() {
  if (Tn) return Hr;
  Tn = 1;
  var n = ma();
  function e(t, a) {
    var r = a ? n(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.byteLength);
  }
  return Hr = e, Hr;
}
var Qr, Vn;
function ho() {
  if (Vn) return Qr;
  Vn = 1;
  var n = /\w*$/;
  function e(t) {
    var a = new t.constructor(t.source, n.exec(t));
    return a.lastIndex = t.lastIndex, a;
  }
  return Qr = e, Qr;
}
var Yr, Pn;
function po() {
  if (Pn) return Yr;
  Pn = 1;
  var n = Ot(), e = n ? n.prototype : void 0, t = e ? e.valueOf : void 0;
  function a(r) {
    return t ? Object(t.call(r)) : {};
  }
  return Yr = a, Yr;
}
var Jr, Rn;
function yo() {
  if (Rn) return Jr;
  Rn = 1;
  var n = ma(), e = go(), t = ho(), a = po(), r = Ei(), i = "[object Boolean]", o = "[object Date]", s = "[object Map]", f = "[object Number]", u = "[object RegExp]", l = "[object Set]", c = "[object String]", v = "[object Symbol]", g = "[object ArrayBuffer]", h = "[object DataView]", m = "[object Float32Array]", y = "[object Float64Array]", d = "[object Int8Array]", p = "[object Int16Array]", S = "[object Int32Array]", b = "[object Uint8Array]", x = "[object Uint8ClampedArray]", F = "[object Uint16Array]", C = "[object Uint32Array]";
  function A(O, V, M) {
    var j = O.constructor;
    switch (V) {
      case g:
        return n(O);
      case i:
      case o:
        return new j(+O);
      case h:
        return e(O, M);
      case m:
      case y:
      case d:
      case p:
      case S:
      case b:
      case x:
      case F:
      case C:
        return r(O, M);
      case s:
        return new j();
      case f:
      case c:
        return new j(O);
      case u:
        return t(O);
      case l:
        return new j();
      case v:
        return a(O);
    }
  }
  return Jr = A, Jr;
}
var Zr, Mn;
function mo() {
  if (Mn) return Zr;
  Mn = 1;
  var n = er(), e = Et(), t = "[object Map]";
  function a(r) {
    return e(r) && n(r) == t;
  }
  return Zr = a, Zr;
}
var zr, Ln;
function bo() {
  if (Ln) return zr;
  Ln = 1;
  var n = mo(), e = ba(), t = _a(), a = t && t.isMap, r = a ? e(a) : n;
  return zr = r, zr;
}
var Xr, Nn;
function _o() {
  if (Nn) return Xr;
  Nn = 1;
  var n = er(), e = Et(), t = "[object Set]";
  function a(r) {
    return e(r) && n(r) == t;
  }
  return Xr = a, Xr;
}
var et, Dn;
function So() {
  if (Dn) return et;
  Dn = 1;
  var n = _o(), e = ba(), t = _a(), a = t && t.isSet, r = a ? e(a) : n;
  return et = r, et;
}
var rt, Wn;
function Aa() {
  if (Wn) return rt;
  Wn = 1;
  var n = va(), e = so(), t = ha(), a = lo(), r = uo(), i = qi(), o = ji(), s = fo(), f = co(), u = Ca(), l = ja(), c = er(), v = vo(), g = yo(), h = Ai(), m = De(), y = ga(), d = bo(), p = da(), S = So(), b = Vt(), x = At(), F = 1, C = 2, A = 4, O = "[object Arguments]", V = "[object Array]", M = "[object Boolean]", j = "[object Date]", E = "[object Error]", L = "[object Function]", q = "[object GeneratorFunction]", R = "[object Map]", T = "[object Number]", D = "[object Object]", Y = "[object RegExp]", W = "[object Set]", K = "[object String]", ye = "[object Symbol]", re = "[object WeakMap]", G = "[object ArrayBuffer]", ar = "[object DataView]", Te = "[object Float32Array]", Z = "[object Float64Array]", te = "[object Int8Array]", ne = "[object Int16Array]", $ = "[object Int32Array]", z = "[object Uint8Array]", me = "[object Uint8ClampedArray]", X = "[object Uint16Array]", ir = "[object Uint32Array]", P = {};
  P[O] = P[V] = P[G] = P[ar] = P[M] = P[j] = P[Te] = P[Z] = P[te] = P[ne] = P[$] = P[R] = P[T] = P[D] = P[Y] = P[W] = P[K] = P[ye] = P[z] = P[me] = P[X] = P[ir] = true, P[E] = P[L] = P[re] = false;
  function U(I, le, de, or, Ke, ve) {
    var B, Ue = le & F, ke = le & C, Ya = le & A;
    if (de && (B = Ke ? de(I, or, Ke, ve) : de(I)), B !== void 0) return B;
    if (!p(I)) return I;
    var Wt = m(I);
    if (Wt) {
      if (B = v(I), !Ue) return o(I, B);
    } else {
      var Oe = c(I), Gt = Oe == L || Oe == q;
      if (y(I)) return i(I, Ue);
      if (Oe == D || Oe == O || Gt && !Ke) {
        if (B = ke || Gt ? {} : h(I), !Ue) return ke ? f(I, r(B, I)) : s(I, a(B, I));
      } else {
        if (!P[Oe]) return Ke ? I : {};
        B = g(I, Oe, Ue);
      }
    }
    ve || (ve = new n());
    var $t = ve.get(I);
    if ($t) return $t;
    ve.set(I, B), S(I) ? I.forEach(function(ge) {
      B.add(U(ge, le, de, ge, I, ve));
    }) : d(I) && I.forEach(function(ge, be) {
      B.set(be, U(ge, le, de, be, I, ve));
    });
    var Ja = Ya ? ke ? l : u : ke ? x : b, Kt = Wt ? void 0 : Ja(I);
    return e(Kt || I, function(ge, be) {
      Kt && (be = ge, ge = I[be]), t(B, be, U(ge, le, de, be, I, ve));
    }), B;
  }
  return rt = U, rt;
}
var tt, Gn;
function Fo() {
  if (Gn) return tt;
  Gn = 1;
  function n(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0;
  }
  return tt = n, tt;
}
var nt, $n;
function wo() {
  if ($n) return nt;
  $n = 1;
  function n(e, t, a) {
    var r = -1, i = e.length;
    t < 0 && (t = -t > i ? 0 : i + t), a = a > i ? i : a, a < 0 && (a += i), i = t > a ? 0 : a - t >>> 0, t >>>= 0;
    for (var o = Array(i); ++r < i; ) o[r] = e[r + t];
    return o;
  }
  return nt = n, nt;
}
var at, Kn;
function Co() {
  if (Kn) return at;
  Kn = 1;
  var n = ti(), e = wo();
  function t(a, r) {
    return r.length < 2 ? a : n(a, e(r, 0, -1));
  }
  return at = t, at;
}
var it, Un;
function xo() {
  if (Un) return it;
  Un = 1;
  var n = Xe(), e = Fo(), t = Co(), a = qt(), r = Object.prototype, i = r.hasOwnProperty;
  function o(s, f) {
    f = n(f, s);
    var u = -1, l = f.length;
    if (!l) return true;
    for (; ++u < l; ) {
      var c = a(f[u]);
      if (c === "__proto__" && !i.call(s, "__proto__") || (c === "constructor" || c === "prototype") && u < l - 1) return false;
    }
    var v = t(s, f);
    return v == null || delete v[a(e(f))];
  }
  return it = o, it;
}
var ot, kn;
function Oo() {
  if (kn) return ot;
  kn = 1;
  var n = Ii();
  function e(t) {
    return n(t) ? void 0 : t;
  }
  return ot = e, ot;
}
var st, Bn;
function Eo() {
  if (Bn) return st;
  Bn = 1;
  var n = Ot(), e = ya(), t = De(), a = n ? n.isConcatSpreadable : void 0;
  function r(i) {
    return t(i) || e(i) || !!(a && i && i[a]);
  }
  return st = r, st;
}
var lt, Hn;
function qo() {
  if (Hn) return lt;
  Hn = 1;
  var n = It(), e = Eo();
  function t(a, r, i, o, s) {
    var f = -1, u = a.length;
    for (i || (i = e), s || (s = []); ++f < u; ) {
      var l = a[f];
      r > 0 && i(l) ? r > 1 ? t(l, r - 1, i, o, s) : n(s, l) : o || (s[s.length] = l);
    }
    return s;
  }
  return lt = t, lt;
}
var ut, Qn;
function Ia() {
  if (Qn) return ut;
  Qn = 1;
  var n = qo();
  function e(t) {
    var a = t == null ? 0 : t.length;
    return a ? n(t, 1) : [];
  }
  return ut = e, ut;
}
var ft, Yn;
function jo() {
  if (Yn) return ft;
  Yn = 1;
  var n = Ia(), e = Ti(), t = Vi();
  function a(r) {
    return t(e(r, void 0, n), r + "");
  }
  return ft = a, ft;
}
var ct, Jn;
function Ao() {
  if (Jn) return ct;
  Jn = 1;
  var n = ni(), e = Aa(), t = xo(), a = Xe(), r = Ge(), i = Oo(), o = jo(), s = ja(), f = 1, u = 2, l = 4, c = o(function(v, g) {
    var h = {};
    if (v == null) return h;
    var m = false;
    g = n(g, function(d) {
      return d = a(d, v), m || (m = d.length > 1), d;
    }), r(v, s(v), h), m && (h = e(h, f | u | l, i));
    for (var y = g.length; y--; ) t(h, g[y]);
    return h;
  });
  return ct = c, ct;
}
var Io = Ao();
const To = xe(Io);
var dt, Zn;
function Vo() {
  if (Zn) return dt;
  Zn = 1;
  var n = Aa(), e = 1, t = 4;
  function a(r, i) {
    return i = typeof i == "function" ? i : void 0, n(r, e | t, i);
  }
  return dt = a, dt;
}
var Po = Vo();
const Ta = xe(Po);
var vt, zn;
function Ro() {
  if (zn) return vt;
  zn = 1;
  var n = xa();
  function e(t, a, r) {
    return t == null ? t : n(t, a, r);
  }
  return vt = e, vt;
}
var Mo = Ro();
const Va = xe(Mo);
var Lo = Ia();
const No = xe(Lo);
var Ie = Object.prototype.toString;
function rr(n) {
  return Ie.call(n) === "[object Array]";
}
function fe(n) {
  return Ie.call(n) === "[object Object]";
}
function _t(n) {
  return Ie.call(n) === "[object String]";
}
function Do(n) {
  return Ie.call(n) === "[object Number]" && n === n;
}
function Wo(n) {
  return Ie.call(n) === "[object Boolean]";
}
function St(n) {
  return Ie.call(n) === "[object Function]";
}
function Go(n) {
  return fe(n) && Object.keys(n).length === 0;
}
function Fe(n) {
  return n == null || n === "";
}
function Pa(n) {
  return rr(n) && !n.length;
}
var Pt = function(n, e) {
  if (typeof n != "object" || typeof e != "object") return n === e;
  if (St(n) && St(e)) return n === e || n.toString() === e.toString();
  if (Object.keys(n).length !== Object.keys(e).length) return false;
  for (var t in n) {
    var a = Pt(n[t], e[t]);
    if (!a) return false;
  }
  return true;
}, Rt = function(n, e) {
  var t = Object.assign({}, n);
  return Object.keys(e || {}).forEach(function(a) {
    var r = t[a], i = e == null ? void 0 : e[a];
    t[a] = fe(r) ? Object.assign(Object.assign({}, r), i) : i || r;
  }), t;
}, $o = function(n, e) {
  for (var t = e.split("."), a = n, r = 0; r < t.length; r++) if (a = a && a[t[r]], a === void 0) return a;
  return a;
}, he = "#{field} is not a #{type} type", Ko = { required: "#{field} is required", type: { ip: he, email: he, url: he, string: he, number: he, array: he, object: he, boolean: he }, number: { min: "`#{value}` is not greater than `#{min}`", max: "`#{value}` is not less than `#{max}`", equal: "`#{value}` is not equal to `#{equal}`", range: "`#{value}` is not in range `#{min} ~ #{max}`", positive: "`#{value}` is not a positive number", negative: "`#{value}` is not a negative number" }, string: { maxLength: "#{field} cannot be longer than #{maxLength} characters", minLength: "#{field} must be at least #{minLength} characters", length: "#{field} must be exactly #{length} characters", match: "`#{value}` does not match pattern #{pattern}", uppercase: "`#{value}` must be all uppercase", lowercase: "`#{value}` must be all lowercased" }, array: { length: "#{field} must be exactly #{length} in length", minLength: "#{field} cannot be less than #{minLength} in length", maxLength: "#{field} cannot be greater than #{maxLength} in length", includes: "#{field} is not includes #{includes}", deepEqual: "#{field} is not deep equal with #{deepEqual}", empty: "#{field} is not an empty array" }, object: { deepEqual: "#{field} is not deep equal to expected value", hasKeys: "#{field} does not contain required fields", empty: "#{field} is not an empty object" }, boolean: { true: "Expect true but got `#{value}`", false: "Expect false but got `#{value}`" } }, ie = function(e, t) {
  var a = this;
  this.getValidateMsg = function(r, i) {
    i === void 0 && (i = {});
    var o = Object.assign(Object.assign({}, i), { value: a.obj, field: a.field, type: a.type }), s = $o(a.validateMessages, r);
    return St(s) ? s(o) : _t(s) ? s.replace(/\#\{.+?\}/g, function(f) {
      var u = f.slice(2, -1);
      if (u in o) {
        if (fe(o[u]) || rr(o[u])) try {
          return JSON.stringify(o[u]);
        } catch {
          return o[u];
        }
        return String(o[u]);
      }
      return f;
    }) : s;
  }, fe(t) && _t(e) && t.trim ? this.obj = e.trim() : fe(t) && t.ignoreEmptyString && e === "" ? this.obj = void 0 : this.obj = e, this.message = t.message, this.type = t.type, this.error = null, this.field = t.field || t.type, this.validateMessages = Rt(Ko, t.validateMessages);
}, tr = { not: { configurable: true }, isRequired: { configurable: true }, end: { configurable: true } };
tr.not.get = function() {
  return this._not = !this._not, this;
};
tr.isRequired.get = function() {
  if (Fe(this.obj) || Pa(this.obj)) {
    var n = this.getValidateMsg("required");
    this.error = { value: this.obj, type: this.type, requiredError: true, message: this.message || (fe(n) ? n : (this._not ? "[NOT MODE]:" : "") + n) };
  }
  return this;
};
tr.end.get = function() {
  return this.error;
};
ie.prototype.addError = function(e) {
  !this.error && e && (this.error = { value: this.obj, type: this.type, message: this.message || (fe(e) ? e : (this._not ? "[NOT MODE]:" : "") + e) });
};
ie.prototype.validate = function(e, t) {
  var a = this._not ? e : !e;
  return a && this.addError(t), this;
};
ie.prototype.collect = function(e) {
  e && e(this.error);
};
Object.defineProperties(ie.prototype, tr);
var Uo = (function(n) {
  function e(a, r) {
    n.call(this, a, Object.assign(Object.assign({}, r), { type: "string" })), this.validate(r && r.strict ? _t(this.obj) : true, this.getValidateMsg("type.string"));
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { uppercase: { configurable: true }, lowercase: { configurable: true } };
  return e.prototype.maxLength = function(r) {
    return this.obj ? this.validate(this.obj.length <= r, this.getValidateMsg("string.maxLength", { maxLength: r })) : this;
  }, e.prototype.minLength = function(r) {
    return this.obj ? this.validate(this.obj.length >= r, this.getValidateMsg("string.minLength", { minLength: r })) : this;
  }, e.prototype.length = function(r) {
    return this.obj ? this.validate(this.obj.length === r, this.getValidateMsg("string.length", { length: r })) : this;
  }, e.prototype.match = function(r) {
    var i = r instanceof RegExp;
    return i && (r.lastIndex = 0), this.validate(this.obj === void 0 || i && r.test(this.obj), this.getValidateMsg("string.match", { pattern: r }));
  }, t.uppercase.get = function() {
    return this.obj ? this.validate(this.obj.toUpperCase() === this.obj, this.getValidateMsg("string.uppercase")) : this;
  }, t.lowercase.get = function() {
    return this.obj ? this.validate(this.obj.toLowerCase() === this.obj, this.getValidateMsg("string.lowercase")) : this;
  }, Object.defineProperties(e.prototype, t), e;
})(ie), ko = (function(n) {
  function e(a, r) {
    n.call(this, a, Object.assign(Object.assign({}, r), { type: "number" })), this.validate(r && r.strict ? Do(this.obj) : true, this.getValidateMsg("type.number"));
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { positive: { configurable: true }, negative: { configurable: true } };
  return e.prototype.min = function(r) {
    return Fe(this.obj) ? this : this.validate(this.obj >= r, this.getValidateMsg("number.min", { min: r }));
  }, e.prototype.max = function(r) {
    return Fe(this.obj) ? this : this.validate(this.obj <= r, this.getValidateMsg("number.max", { max: r }));
  }, e.prototype.equal = function(r) {
    return Fe(this.obj) ? this : this.validate(this.obj === r, this.getValidateMsg("number.equal", { equal: r }));
  }, e.prototype.range = function(r, i) {
    return Fe(this.obj) ? this : this.validate(this.obj >= r && this.obj <= i, this.getValidateMsg("number.range", { min: r, max: i }));
  }, t.positive.get = function() {
    return Fe(this.obj) ? this : this.validate(this.obj > 0, this.getValidateMsg("number.positive"));
  }, t.negative.get = function() {
    return Fe(this.obj) ? this : this.validate(this.obj < 0, this.getValidateMsg("number.negative"));
  }, Object.defineProperties(e.prototype, t), e;
})(ie), Bo = (function(n) {
  function e(a, r) {
    n.call(this, a, Object.assign(Object.assign({}, r), { type: "array" })), this.validate(r && r.strict ? rr(this.obj) : true, this.getValidateMsg("type.array", { value: this.obj, type: this.type }));
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { empty: { configurable: true } };
  return e.prototype.length = function(r) {
    return this.obj ? this.validate(this.obj.length === r, this.getValidateMsg("array.length", { value: this.obj, length: r })) : this;
  }, e.prototype.minLength = function(r) {
    return this.obj ? this.validate(this.obj.length >= r, this.getValidateMsg("array.minLength", { value: this.obj, minLength: r })) : this;
  }, e.prototype.maxLength = function(r) {
    return this.obj ? this.validate(this.obj.length <= r, this.getValidateMsg("array.maxLength", { value: this.obj, maxLength: r })) : this;
  }, e.prototype.includes = function(r) {
    var i = this;
    return this.obj ? this.validate(r.every(function(o) {
      return i.obj.indexOf(o) !== -1;
    }), this.getValidateMsg("array.includes", { value: this.obj, includes: r })) : this;
  }, e.prototype.deepEqual = function(r) {
    return this.obj ? this.validate(Pt(this.obj, r), this.getValidateMsg("array.deepEqual", { value: this.obj, deepEqual: r })) : this;
  }, t.empty.get = function() {
    return this.validate(Pa(this.obj), this.getValidateMsg("array.empty", { value: this.obj }));
  }, Object.defineProperties(e.prototype, t), e;
})(ie), Ho = (function(n) {
  function e(a, r) {
    n.call(this, a, Object.assign(Object.assign({}, r), { type: "object" })), this.validate(r && r.strict ? fe(this.obj) : true, this.getValidateMsg("type.object"));
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { empty: { configurable: true } };
  return e.prototype.deepEqual = function(r) {
    return this.obj ? this.validate(Pt(this.obj, r), this.getValidateMsg("object.deepEqual", { deepEqual: r })) : this;
  }, e.prototype.hasKeys = function(r) {
    var i = this;
    return this.obj ? this.validate(r.every(function(o) {
      return i.obj[o];
    }), this.getValidateMsg("object.hasKeys", { keys: r })) : this;
  }, t.empty.get = function() {
    return this.validate(Go(this.obj), this.getValidateMsg("object.empty"));
  }, Object.defineProperties(e.prototype, t), e;
})(ie), Qo = (function(n) {
  function e(a, r) {
    n.call(this, a, Object.assign(Object.assign({}, r), { type: "boolean" })), this.validate(r && r.strict ? Wo(this.obj) : true, this.getValidateMsg("type.boolean"));
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { true: { configurable: true }, false: { configurable: true } };
  return t.true.get = function() {
    return this.validate(this.obj === true, this.getValidateMsg("boolean.true"));
  }, t.false.get = function() {
    return this.validate(this.obj === false, this.getValidateMsg("boolean.false"));
  }, Object.defineProperties(e.prototype, t), e;
})(ie), Yo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Jo = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"), Zo = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/, zo = (function(n) {
  function e(a, r) {
    n.call(this, a, Object.assign(Object.assign({}, r), { type: "type" }));
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { email: { configurable: true }, url: { configurable: true }, ip: { configurable: true } };
  return t.email.get = function() {
    return this.type = "email", this.validate(this.obj === void 0 || Yo.test(this.obj), this.getValidateMsg("type.email"));
  }, t.url.get = function() {
    return this.type = "url", this.validate(this.obj === void 0 || Jo.test(this.obj), this.getValidateMsg("type.url"));
  }, t.ip.get = function() {
    return this.type = "ip", this.validate(this.obj === void 0 || Zo.test(this.obj), this.getValidateMsg("type.ip"));
  }, Object.defineProperties(e.prototype, t), e;
})(ie), Xo = (function(n) {
  function e(a, r) {
    n.call(this, a, Object.assign(Object.assign({}, r), { type: "custom" }));
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { validate: { configurable: true } };
  return t.validate.get = function() {
    var a = this;
    return function(r, i) {
      var o;
      if (r) return o = r(a.obj, a.addError.bind(a)), o && o.then ? (i && o.then(function() {
        i && i(a.error);
      }, function(s) {
        console.error(s);
      }), [o, a]) : (i && i(a.error), a.error);
    };
  }, Object.defineProperties(e.prototype, t), e;
})(ie), Je = function(n, e) {
  return new Ra(n, Object.assign({ field: "value" }, e));
};
Je.globalConfig = {};
Je.setGlobalConfig = function(n) {
  Je.globalConfig = n || {};
};
var Ra = function(e, t) {
  var a = Je.globalConfig, r = Object.assign(Object.assign(Object.assign({}, a), t), { validateMessages: Rt(a.validateMessages, t.validateMessages) });
  this.string = new Uo(e, r), this.number = new ko(e, r), this.array = new Bo(e, r), this.object = new Ho(e, r), this.boolean = new Qo(e, r), this.type = new zo(e, r), this.custom = new Xo(e, r);
}, Mt = function(e, t) {
  t === void 0 && (t = {}), this.schema = e, this.options = t;
};
Mt.prototype.messages = function(e) {
  this.options = Object.assign(Object.assign({}, this.options), { validateMessages: Rt(this.options.validateMessages, e) });
};
Mt.prototype.validate = function(e, t) {
  var a = this;
  if (!fe(e)) return;
  var r = [], i = null;
  function o(s, f) {
    i || (i = {}), (!i[s] || f.requiredError) && (i[s] = f);
  }
  this.schema && Object.keys(this.schema).forEach(function(s) {
    if (rr(a.schema[s])) for (var f = function(c) {
      var v = a.schema[s][c], g = v.type, h = v.message;
      if (!g && !v.validator) throw "You must specify a type to field " + s + "!";
      var m = Object.assign(Object.assign({}, a.options), { message: h, field: s });
      "ignoreEmptyString" in v && (m.ignoreEmptyString = v.ignoreEmptyString), "strict" in v && (m.strict = v.strict);
      var y = new Ra(e[s], m), d = y.type[g] || null;
      if (!d) if (v.validator) {
        d = y.custom.validate(v.validator), Object.prototype.toString.call(d) === "[object Array]" && d[0].then ? r.push({ function: d[0], _this: d[1], key: s }) : d && o(s, d);
        return;
      } else d = y[g];
      if (Object.keys(v).forEach(function(p) {
        v.required && (d = d.isRequired), p !== "message" && d[p] && v[p] && typeof d[p] == "object" && (d = d[p]), d[p] && v[p] !== void 0 && typeof d[p] == "function" && (d = d[p](v[p]));
      }), d.collect(function(p) {
        p && o(s, p);
      }), i) return "break";
    }, u = 0; u < a.schema[s].length; u++) {
      var l = f(u);
      if (l === "break") break;
    }
  }), r.length > 0 ? Promise.all(r.map(function(s) {
    return s.function;
  })).then(function() {
    r.forEach(function(s) {
      s._this.error && o(s.key, s._this.error);
    }), t && t(i);
  }) : t && t(i);
};
var Ft = function() {
  return Ft = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ft.apply(this, arguments);
}, gt = function(n, e, t, a) {
  function r(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function s(l) {
      try {
        u(a.next(l));
      } catch (c) {
        o(c);
      }
    }
    function f(l) {
      try {
        u(a.throw(l));
      } catch (c) {
        o(c);
      }
    }
    function u(l) {
      l.done ? i(l.value) : r(l.value).then(s, f);
    }
    u((a = a.apply(n, e || [])).next());
  });
}, ht = function(n, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, a, r, i, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(l) {
      return f([u, l]);
    };
  }
  function f(u) {
    if (a) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (a = 1, r && (i = u[0] & 2 ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
      switch (r = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
        case 0:
        case 1:
          i = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: false };
        case 5:
          t.label++, r = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = u;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(u);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = e.call(n, t);
    } catch (l) {
      u = [6, l], r = 0;
    } finally {
      a = i = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: true };
  }
}, es = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}, rs = function(n, e, t) {
  if (t || arguments.length === 2) for (var a = 0, r = e.length, i; a < r; a++) (i || !(a in e)) && (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
  return n.concat(i || Array.prototype.slice.call(e));
};
function ae(n) {
  return Ta(n, function(e) {
    if (!k(e) && !Q(e)) return e;
  });
}
var ts = function(n, e) {
  return Ta(n, function(t) {
    if (se(t)) return function(a) {
      return t(a, e);
    };
  });
};
function J(n, e, t) {
  var a = typeof e == "string" && /^\[[^'"`]/.test(e), r = a ? [e] : e;
  return Va(n, r, ae(t)), n;
}
function _e(n, e, t) {
  var a = typeof e == "string" && /^\[[^'"`]/.test(e), r = a ? [e] : e;
  return ue(n, r, t);
}
function Xn(n, e) {
  e === void 0 && (e = "");
  var t = /* @__PURE__ */ new Set(), a = function(r, i) {
    return i === void 0 && (i = ""), r ? t.has(r) ? [] : (t.add(r), No(Object.keys(r).map(function(o) {
      return (k(r[o]) || Q(r[o])) && Object.keys(r[o]).length && !w.isValidElement(r[o]) ? a(r[o], i + o + ".") : i + o;
    }))) : [];
  };
  return a(n, e);
}
function Ma(n) {
  var e;
  return ((e = n == null ? void 0 : n.constructor) === null || e === void 0 ? void 0 : e.name) === "SyntheticEvent" || (n == null ? void 0 : n.nativeEvent) instanceof Event;
}
function ea(n, e, t, a) {
  return gt(this, void 0, void 0, function() {
    var r, i, o = this;
    return ht(this, function(s) {
      return r = rs([], es(t || []), false), i = 0, [2, new Promise(function(f) {
        return gt(o, void 0, void 0, function() {
          var u, l, c = this;
          return ht(this, function(v) {
            return u = [], l = function(g) {
              return gt(c, void 0, void 0, function() {
                var h, m, y, d, p, S, b;
                return ht(this, function(x) {
                  return h = function() {
                    return i < r.length - 1 ? (i++, l(r[i])) : f({ error: null, warning: u });
                  }, g ? (m = Ft({}, g), !m.type && !m.validator && (y = typeof e == "number", d = m.min !== void 0 || m.max !== void 0 || m.equal !== void 0 || m.positive === true || m.negative === true, m.type = y || d ? "number" : "string"), p = new Mt((S = {}, S[n] = [m], S), { ignoreEmptyString: true, validateMessages: a }), p.validate((b = {}, b[n] = e, b), function(F) {
                    if (F) if (g.validateLevel === "warning") u.push(F[n].message);
                    else return f({ error: F, warning: u });
                    return h();
                  }), [2]) : [2, h()];
                });
              });
            }, l(r[i]), [2];
          });
        });
      })];
    });
  });
}
function He(n, e) {
  var t = Oa({}, n, void 0, Object);
  return e.some(function(a) {
    return Ea(t, a);
  });
}
var Lt = "_input", pt = { error: "error", warning: "warning" }, oe;
(function(n) {
  n.init = "init", n.error = "error", n.success = "success", n.submitting = "submitting";
})(oe || (oe = {}));
var ns = /* @__PURE__ */ (function() {
  var n = function(e, t) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, r) {
      a.__proto__ = r;
    } || function(a, r) {
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (a[i] = r[i]);
    }, n(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    n(e, t);
    function a() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (a.prototype = t.prototype, new a());
  };
})(), as = (function(n) {
  ns(e, n);
  function e(t) {
    var a = n.call(this, "form validate error, get errors by error.errors") || this;
    return a.errors = {}, a.errors = t, a;
  }
  return e;
})(Error);
function is(n) {
  return Object.defineProperty(function() {
    for (var e = this, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
    if (typeof t[t.length - 1] == "function") n.apply(this, t);
    else return new Promise(function(r, i) {
      t[t.length] = function(o, s) {
        if (o) return i(new as(o));
        r(s);
      }, t.length++, n.apply(e, t);
    });
  }, "name", { value: n.name });
}
var pe = function() {
  return pe = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, pe.apply(this, arguments);
}, os = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}, ss = function(n, e, t) {
  if (t || arguments.length === 2) for (var a = 0, r = e.length, i; a < r; a++) (i || !(a in e)) && (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
  return n.concat(i || Array.prototype.slice.call(e));
}, ls = (function() {
  function n() {
    var e = this;
    this.submitStatus = oe.init, this.registerFields = [], this.registerWatchers = [], this.registerStateWatchers = [], this.registerFormWatchers = [], this.touchedFields = {}, this.store = {}, this.initialValues = {}, this.callbacks = {}, this.innerCollectFormState = function() {
      e.notifyStateWatchers();
    }, this.innerSetCallbacks = function(t) {
      e.callbacks = t;
    }, this.registerFormWatcher = function(t) {
      return e.registerFormWatchers.push(t), function() {
        e.registerFormWatchers = e.registerFormWatchers.filter(function(a) {
          return a !== t;
        });
      };
    }, this.registerStateWatcher = function(t) {
      return e.registerStateWatchers.push(t), function() {
        e.registerStateWatchers = e.registerStateWatchers.filter(function(a) {
          return a !== t;
        });
      };
    }, this.registerWatcher = function(t) {
      return e.registerWatchers.push(t), function() {
        e.registerWatchers = e.registerWatchers.filter(function(a) {
          return a !== t;
        });
      };
    }, this.registerField = function(t) {
      return e.registerFields.push(t), e.notifyWatchers(), function() {
        e.registerFields = e.registerFields.filter(function(a) {
          return a !== t;
        }), e.notifyWatchers();
      };
    }, this.getRegisteredFields = function(t, a) {
      return t ? e.registerFields.filter(function(r) {
        var i;
        return r.hasFieldProps() && ((a == null ? void 0 : a.containFormList) || !(!((i = r.props) === null || i === void 0) && i.isFormList));
      }) : e.registerFields;
    }, this.getRegisteredField = function(t) {
      return e.registerFields.filter(function(a) {
        return a.props.field === t;
      })[0];
    }, this.notify = function(t, a) {
      (t === "setFieldValue" || t === "innerSetValue" && !a.ignore) && e._pushTouchField(a.changeValues ? Xn(a.changeValues) : e._getIterativelyKeysByField(a.field)), e.registerFields.forEach(function(r) {
        r.onStoreChange && r.onStoreChange(t, pe(pe({}, a), { current: e.store }));
      });
    }, this.innerSetInitialValues = function(t) {
      t && (e.initialValues = ae(t), Object.keys(t).forEach(function(a) {
        J(e.store, a, t[a]);
      }));
    }, this.innerSetInitialValue = function(t, a) {
      t && (e.initialValues[t] = a, e._inTouchFields(t) || J(e.store, t, _e(e.initialValues, t)));
    }, this.innerSetFieldValue = function(t, a, r) {
      var i, o, s;
      if (t) {
        var f = ae(e.store);
        J(e.store, t, a), e.triggerValuesChange((i = {}, i[t] = a, i)), e.triggerTouchChange((o = {}, o[t] = a, o)), e.notify("innerSetValue", pe(pe({ prev: f, field: t }, r), { changeValues: (s = {}, s[t] = a, s) }));
      }
    }, this.innerGetStore = function() {
      return e.store;
    }, this.innerGetStoreStatus = function() {
      return { submitStatus: e.submitStatus };
    }, this.innerGetFieldValue = function(t) {
      return _e(e.store, t);
    }, this.getTouchedFields = function() {
      return e.getRegisteredFields(true).filter(function(t) {
        return t.isTouched();
      }).map(function(t) {
        return t.props.field;
      });
    }, this.setFieldValue = function(t, a) {
      var r;
      t && e.setFields((r = {}, r[t] = { value: a }, r));
    }, this.setFieldsValue = function(t) {
      if (k(t)) {
        var a = Object.keys(t), r = {};
        a.forEach(function(i) {
          r[i] = { value: t[i] };
        }), e.setFields(r);
      }
    }, this.setFields = function(t) {
      var a = Object.keys(t), r = {};
      a.forEach(function(i) {
        var o, s = t[i], f = ae(e.store);
        if (s) {
          var u = {};
          "error" in s && (u.errors = s.error), "warning" in s && (u.warnings = s.warning), "touched" in s && (u.touched = s.touched), "value" in s && (J(e.store, i, s.value), r[i] = s.value), e.notify("setFieldValue", { data: u, prev: f, field: i, changeValues: (o = {}, o[i] = s.value, o) });
        }
      }), e.triggerValuesChange(r);
    }, this.getFieldValue = function(t) {
      return ae(_e(e.store, t));
    }, this.getFieldError = function(t) {
      var a = e.getRegisteredField(t);
      return a ? a.getErrors() : null;
    }, this.getFieldsError = function(t) {
      var a = {};
      return Q(t) ? t.map(function(r) {
        var i = e.getFieldError(r);
        i && (a[r] = i);
      }) : e.getRegisteredFields(true, { containFormList: true }).forEach(function(r) {
        r.getErrors() && (a[r.props.field] = r.getErrors());
      }), a;
    }, this.getFields = function() {
      return ae(e.store);
    }, this.getFieldsValue = function(t) {
      var a = {};
      return Q(t) ? (t.forEach(function(r) {
        J(a, r, e.getFieldValue(r));
      }), a) : (e.getRegisteredFields(true).forEach(function(r) {
        var i = r.props.field, o = _e(e.store, i);
        J(a, i, o);
      }), a);
    }, this.resetFields = function(t) {
      var a = ae(e.store), r = Ut(t) && !Q(t) ? [t] : t;
      if (r && Q(r)) {
        var i = {};
        r.forEach(function(f) {
          J(e.store, f, e.initialValues[f]), i[f] = _e(e.store, f);
        }), e.triggerValuesChange(i), e.notify("reset", { prev: a, field: r }), e._popTouchField(r);
      } else {
        var o = {}, s = ae(e.store);
        Object.keys(e.initialValues).forEach(function(f) {
          J(o, f, e.initialValues[f]);
        }), e.store = o, e.getRegisteredFields(true).forEach(function(f) {
          var u = f.props.field;
          J(s, u, _e(e.store, u));
        }), e.triggerValuesChange(s), e._popTouchField(), e.notify("reset", { prev: a, field: Object.keys(s) });
      }
    }, this.validate = is(function(t, a, r) {
      var i = e.getRegisteredFields(true, { containFormList: true }), o = Q(t) && t.length ? i.filter(function(c) {
        return t.indexOf(c.props.field) > -1;
      }) : i, s = k(t) ? t : k(a) ? a : {}, f = se(t) ? t : se(a) ? a : r || (function() {
      }), u = o.map(function(c) {
        return s != null && s.validateOnly ? c.validateFieldOnly() : c.validateField();
      }), l = function(c) {
        if (!(s != null && s.validateOnly)) {
          var v = e.callbacks.onValidateFail;
          v && v(c, s);
        }
      };
      Promise.all(u).then(function(c) {
        var v = {}, g = {};
        c.map(function(h) {
          var m;
          h.error && (v = pe(pe({}, v), h.error));
          var y = e.getRegisteredField(h.field);
          !((m = y == null ? void 0 : y.props) === null || m === void 0) && m.isFormList || J(g, h.field, h.value);
        }), Object.keys(v).length ? (l(v), f && f(v, ae(g))) : f && f(null, ae(g));
      });
    }), this.toggleSubmitStatus = function(t) {
      e.submitStatus = t, e.innerCollectFormState(), e.notifyFormWatcher();
    }, this.submit = function() {
      e.toggleSubmitStatus(oe.submitting), e.validate(function(t, a) {
        var r, i = e.callbacks, o = i.onSubmit, s = i.onSubmitFailed;
        !t && o && (r = o(a)), t && s && (r = s(t)), r && r.then ? r.then(function(f) {
          return e.toggleSubmitStatus(oe.success), f;
        }).catch(function(f) {
          return e.toggleSubmitStatus(oe.error), Promise.reject(f);
        }) : e.toggleSubmitStatus(t ? oe.error : oe.success);
      });
    }, this.getFieldsState = function(t) {
      var a = {}, r = function(i) {
        if (!i) return null;
        var o = i.getErrors();
        return { errors: o ? [o] : [], warnings: i.getWarnings(), validateStatus: i.getValidateStatus(), isSubmitting: e.submitStatus === oe.submitting, isTouched: i.isTouched(), value: e.getFieldValue(i.props.field) };
      };
      return Q(t) ? (t.forEach(function(i) {
        a[i] = r(e.getRegisteredField(i));
      }), a) : (e.getRegisteredFields(true).forEach(function(i) {
        a[i.props.field] = r(i);
      }), a);
    }, this.clearFields = function(t) {
      var a = ae(e.store), r = Ut(t) && !Q(t) ? [t] : t;
      if (r && Q(r)) {
        var i = {};
        r.forEach(function(s) {
          J(e.store, s, void 0), i[s] = _e(e.store, s);
        }), e.triggerValuesChange(i), e.notify("setFieldValue", { prev: a, field: r, data: { errors: null, warnings: null } });
      } else {
        var o = {};
        e.store = {}, e.getRegisteredFields(true).forEach(function(s) {
          var f = s.props.field;
          J(o, f, void 0);
        }), e.triggerValuesChange(o), e.notify("setFieldValue", { prev: a, field: Object.keys(o), data: { errors: null, warnings: null } });
      }
    };
  }
  return n.prototype.notifyWatchers = function() {
    this.registerWatchers.forEach(function(e) {
      e();
    });
  }, n.prototype.notifyFormWatcher = function() {
    this.registerFormWatchers.forEach(function(e) {
      e();
    });
  }, n.prototype.notifyStateWatchers = function() {
    this.registerStateWatchers.forEach(function(e) {
      e();
    });
  }, n.prototype.triggerValuesChange = function(e) {
    if (e && Object.keys(e).length) {
      var t = this.callbacks.onValuesChange;
      t && t(e, this.getFields());
    }
    this.notifyWatchers();
  }, n.prototype.triggerTouchChange = function(e) {
    if (e && Object.keys(e).length) {
      var t = this.callbacks.onChange;
      t && t(e, this.getFields());
    }
  }, n.prototype._getIterativelyKeysByField = function(e) {
    if (!e) return [];
    var t = [].concat(e), a = t.map(function(r) {
      return Xn(J({}, r, void 0));
    }).reduce(function(r, i) {
      return r.concat(i);
    }, []);
    return ss([e], os(a), false);
  }, n.prototype._inTouchFields = function(e) {
    var t = this, a = this._getIterativelyKeysByField(e);
    return a.some(function(r) {
      return Ea(t.touchedFields, r);
    });
  }, n.prototype._popTouchField = function(e) {
    e === void 0 && (this.touchedFields = {});
    var t = this._getIterativelyKeysByField(e);
    this.touchedFields = To(this.touchedFields, t);
  }, n.prototype._pushTouchField = function(e) {
    var t = this;
    [].concat(e).forEach(function(a) {
      Oa(t.touchedFields, a, void 0, Object);
    });
  }, n;
})();
function us() {
  var n = new ls();
  return { getFieldsValue: n.getFieldsValue, getFieldValue: n.getFieldValue, getFieldError: n.getFieldError, getFieldsError: n.getFieldsError, getTouchedFields: n.getTouchedFields, getFields: n.getFields, setFieldValue: n.setFieldValue, setFieldsValue: n.setFieldsValue, setFields: n.setFields, resetFields: n.resetFields, clearFields: n.clearFields, submit: n.submit, validate: n.validate, scrollToField: function() {
  }, getFieldsState: n.getFieldsState, getInnerMethods: function(e) {
    var t = {};
    return e && ["registerField", "registerWatcher", "registerStateWatcher", "registerFormWatcher", "innerSetInitialValues", "innerSetInitialValue", "innerSetCallbacks", "innerSetFieldValue", "innerGetStore", "innerGetStoreStatus", "innerGetFieldValue", "innerCollectFormState"].map(function(a) {
      t[a] = n[a];
    }), t;
  } };
}
function La(n) {
  var e = _.useRef(n);
  return e.current || (n ? e.current = n : e.current = us()), [e.current];
}
var Ce = _.createContext({ layout: "horizontal", labelCol: { span: 5, offset: 0 }, labelAlign: "right", wrapperCol: { span: 19, offset: 0 }, requiredSymbol: true, getFormElementId: function() {
  return "arco-";
}, store: { clearFields: N, getFieldsValue: N, getFieldValue: N, getFieldError: N, getFieldsError: N, getTouchedFields: N, getFields: N, setFieldValue: N, setFieldsValue: N, setFields: N, resetFields: N, submit: N, validate: N, getFieldsState: N, scrollToField: N, getInnerMethods: function() {
  return { registerField: N, innerGetStore: N, registerStateWatcher: N, registerWatcher: N, innerGetStoreStatus: N };
} } }), wt = _.createContext({}), Na = _.createContext({}), Da = _.createContext({});
function fs(n) {
  var e = _.useRef(false);
  e.current === false && (n(), e.current = true);
}
var Re = function() {
  return Re = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Re.apply(this, arguments);
}, cs = function(n, e) {
  var t = {};
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && e.indexOf(a) < 0 && (t[a] = n[a]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, a = Object.getOwnPropertySymbols(n); r < a.length; r++) e.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[r]) && (t[a[r]] = n[a[r]]);
  return t;
}, ds = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
};
function ra(n, e) {
  var t = e.replace(/[\[\.]/g, "_").replace(/\]/g, "");
  return n ? n + "-" + t : "" + t;
}
function ta(n, e) {
  var t = document.getElementById(e);
  if (t && n.contains(t)) return t;
}
var vs = { layout: "horizontal", labelCol: { span: 5, offset: 0 }, labelAlign: "right", wrapperCol: { span: 19, offset: 0 }, requiredSymbol: true, wrapper: "form", validateTrigger: "onChange" }, gs = function(n, e) {
  var t, a, r, i = _.useContext(Ae), o = _.useContext(Na), s = _.useRef(null), f = ds(La(n.form), 1), u = f[0], l = We(n, vs, (a = i.componentConfig) === null || a === void 0 ? void 0 : a.Form), c = l.layout, v = l.labelCol, g = l.wrapperCol, h = l.wrapper, m = l.id, y = l.requiredSymbol, d = l.labelAlign, p = l.disabled, S = l.colon, b = l.className, x = l.validateTrigger, F = l.prefixCls, C = l.validateMessages, A = cs(l, ["layout", "labelCol", "wrapperCol", "wrapper", "id", "requiredSymbol", "labelAlign", "disabled", "colon", "className", "validateTrigger", "prefixCls", "validateMessages"]), O = F || i.getPrefixCls("form"), V = i.rtl, M = "size" in l ? l.size : i.size, j = u.getInnerMethods(true);
  fs(function() {
    j.innerSetInitialValues(l.initialValues);
  }), _.useEffect(function() {
    var q;
    return o.register && (q = o.register(l.id, u)), q;
  }, [l.id, u]), _.useImperativeHandle(e, function() {
    return u;
  }), u.scrollToField = function(q, R) {
    var T = s.current, D = l.id;
    if (T) {
      var Y = ra(D, q), W = ta(T, Y);
      W || (W = ta(T, "" + Y + Lt)), W && ai(W, Re({ behavior: "smooth", block: "nearest", scrollMode: "if-needed" }, R));
    }
  }, j.innerSetCallbacks({ onValuesChange: function(q, R) {
    l.onValuesChange && l.onValuesChange(q, R), o.onFormValuesChange && o.onFormValuesChange(l.id, q);
  }, onChange: l.onChange, onValidateFail: function(q, R) {
    if (!(R != null && R.noScrollToFirstError) && l.scrollToFirstError) {
      var T = k(l.scrollToFirstError) ? l.scrollToFirstError : {};
      u.scrollToField(Object.keys(q)[0], T);
    }
  }, onSubmitFailed: l.onSubmitFailed, onSubmit: function(q) {
    var R = l.onSubmit && l.onSubmit(q);
    return o.onFormSubmit && o.onFormSubmit(l.id, q), R;
  } });
  var E = { requiredSymbol: y, labelAlign: d, disabled: p, colon: S, labelCol: v, wrapperCol: g, layout: c, store: u, prefixCls: O, validateTrigger: x, validateMessages: Pi({}, (r = i.locale.Form) === null || r === void 0 ? void 0 : r.validateMessages, C), getFormElementId: function(q) {
    return ra(m, q);
  } }, L = Ce;
  return w.createElement(ii, Re({}, i, { size: M }), w.createElement(L.Provider, { value: E }, w.createElement(h, Re({ ref: s }, jt(A, ["form", "size", "initialValues", "onValuesChange", "onChange", "wrapperProps", "scrollToFirstError", "onSubmit", "onSubmitFailed"]), l.wrapperProps, { className: ee(O, O + "-" + c, O + "-size-" + M, (t = {}, t[O + "-rtl"] = V, t), b), style: l.style, onSubmit: function(q) {
    q.preventDefault(), q.stopPropagation(), u.submit();
  }, id: m }), l.children)));
}, Wa = _.forwardRef(gs);
Wa.displayName = "Form";
var Ga = _.createContext({}), $a = _.createContext({}), Ka = _.createContext({}), Ee = function() {
  return Ee = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ee.apply(this, arguments);
}, hs = function(n, e) {
  var t = {};
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && e.indexOf(a) < 0 && (t[a] = n[a]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, a = Object.getOwnPropertySymbols(n); r < a.length; r++) e.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[r]) && (t[a[r]] = n[a[r]]);
  return t;
}, ps = { span: 24 };
function na(n) {
  return typeof n == "string" && /\d+[px|%|em|rem|]{1}/.test(n) ? "0 0 " + n : n;
}
function ys(n, e) {
  var t, a = _.useContext(Ae), r = a.getPrefixCls, i = a.componentConfig, o = a.rtl, s = We(n, ps, i == null ? void 0 : i["Grid.Col"]), f = _.useContext(Ga), u = f.gutter, l = f.div, c = s.className, v = s.style, g = s.children, h = s.span, m = s.offset, y = s.order, d = s.pull, p = s.push, S = s.xs, b = s.sm, x = s.md, F = s.lg, C = s.xl, A = s.xxl, O = s.xxxl, V = s.flex, M = hs(s, ["className", "style", "children", "span", "offset", "order", "pull", "push", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl", "flex"]);
  function j(W, K) {
    var ye = { xs: S, sm: b, md: x, lg: F, xl: C, xxl: A, xxxl: O };
    return Object.keys(ye).forEach(function(re) {
      var G = ye[re];
      oi(G) ? G >= 0 && (K[W + "-" + re + "-" + G] = true) : k(G) && (K[W + "-" + re + "-" + G.span] = G.span, K[W + "-" + re + "-offset-" + G.offset] = G.offset, K[W + "-" + re + "-order-" + G.order] = G.order, K[W + "-" + re + "-pull-" + G.pull] = G.pull, K[W + "-" + re + "-push-" + G.push] = G.push);
    }), K;
  }
  var E = r("col"), L = (t = {}, t["" + E] = !l, t[E + "-order-" + y] = y, t[E + "-" + h] = !l && !S && !b && !x && !F && !C && !A && !O, t[E + "-offset-" + m] = m, t[E + "-pull-" + d] = d, t[E + "-push-" + p] = p, t[E + "-rtl"] = o, t);
  L = j(E, L);
  var q = ee(V ? E : L, c), R = {};
  if (Array.isArray(u) && !l) {
    var T = u[0] && u[0] / 2 || 0, D = u[1] && u[1] / 2 || 0;
    T && (R.paddingLeft = T, R.paddingRight = T), D && (R.paddingTop = D, R.paddingBottom = D);
  }
  var Y = _.useMemo(function() {
    return na(V) ? { flex: na(V) } : {};
  }, [V]);
  return w.createElement("div", Ee({ ref: e }, M, { style: Ee(Ee(Ee({}, v), R), Y), className: q }), g);
}
var Ua = _.forwardRef(ys);
Ua.displayName = "Col";
var Me = function() {
  return Me = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Me.apply(this, arguments);
}, ms = function(n, e) {
  var t = {};
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && e.indexOf(a) < 0 && (t[a] = n[a]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, a = Object.getOwnPropertySymbols(n); r < a.length; r++) e.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[r]) && (t[a[r]] = n[a[r]]);
  return t;
}, bs = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}, _s = { gutter: 0, align: "start", justify: "start" };
function Ss(n, e) {
  var t, a = _.useContext(Ae), r = a.getPrefixCls, i = a.componentConfig, o = a.rtl, s = We(n, _s, i == null ? void 0 : i["Grid.Row"]), f = s.className, u = s.style, l = s.children, c = s.div, v = s.align, g = s.justify, h = s.gutter, m = ms(s, ["className", "style", "children", "div", "align", "justify", "gutter"]), y = bs(_.useState({ xs: true, sm: true, md: true, lg: true, xl: true, xxl: true, xxxl: true }), 2), d = y[0], p = y[1], S = _.useRef();
  _.useEffect(function() {
    return S.current = Qe.subscribe(function(j) {
      (!Array.isArray(h) && typeof h == "object" || Array.isArray(h) && (typeof h[0] == "object" || typeof h[1] == "object")) && p(j);
    }), function() {
      Qe.unsubscribe(S.current);
    };
  }, []);
  function b(j) {
    var E = 0;
    if (typeof j == "object") for (var L = 0; L < Ye.length; L++) {
      var q = Ye[L];
      if (d[q] && j[q] !== void 0) {
        E = j[q];
        break;
      }
    }
    else E = j;
    return E;
  }
  var x = r("row"), F = ee((t = {}, t["" + x] = !c, t[x + "-align-" + v] = v, t[x + "-justify-" + g] = g, t[x + "-rtl"] = o, t), f), C = {}, A = b(Array.isArray(h) ? h[0] : h), O = b(Array.isArray(h) ? h[1] : 0);
  if ((A || O) && !c) {
    var V = -A / 2, M = -O / 2;
    V && (C.marginLeft = V, C.marginRight = V), M && (C.marginTop = M, C.marginBottom = M);
  }
  return w.createElement("div", Me({ ref: e }, jt(m, ["gutter"]), { style: Me(Me({}, u), C), className: F }), w.createElement(Ga.Provider, { value: { gutter: [A, O], div: c } }, l));
}
var ka = _.forwardRef(Ss);
ka.displayName = "Row";
var Fs = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
};
function aa(n) {
  return k(n);
}
var Le = function(n, e, t) {
  t === void 0 && (t = false);
  var a = _.useRef(), r = Fs(_.useState({ xs: true, sm: true, md: true, lg: true, xl: true, xxl: true, xxxl: true }), 2), i = r[0], o = r[1];
  _.useEffect(function() {
    return a.current = Qe.subscribe(function(f) {
      aa(n) && o(f);
    }), function() {
      Qe.unsubscribe(a.current);
    };
  }, []);
  var s = _.useMemo(function() {
    var f = e;
    if (aa(n)) for (var u = 0; u < Ye.length; u++) {
      var l = Ye[u];
      if ((i[l] || l === "xs" && t) && n[l] !== void 0) {
        f = n[l];
        break;
      }
    }
    else f = n;
    return f;
  }, [i, n, e, t]);
  return s;
};
function ws(n, e) {
  var t = e.span, a = e.offset, r = e.suffix, i = t ?? 1, o = a ?? 0, s = Math.min(o, n), f = Math.min(s > 0 ? i + o : i, n);
  return { span: f, offset: s, suffix: r };
}
function Cs(n) {
  var e = n.cols, t = n.collapsed, a = n.collapsedRows, r = n.itemDataList, i = false, o = [];
  function s(v) {
    return Math.ceil(v / e) > a;
  }
  if (t) {
    for (var f = 0, u = 0; u < r.length; u++) r[u].suffix && (f += r[u].span, o.push(u));
    if (!s(f)) for (var l = 0; l < r.length; ) {
      var c = r[l];
      if (!c.suffix) {
        if (f += c.span, s(f)) break;
        o.push(l);
      }
      l++;
    }
    i = r.some(function(v, g) {
      return !v.suffix && !o.includes(g);
    });
  } else o = r.map(function(v, g) {
    return g;
  });
  return { overflow: i, displayIndexList: o };
}
var Ne = function() {
  return Ne = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ne.apply(this, arguments);
}, Be = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}, xs = function(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], a = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return { next: function() {
    return n && a >= n.length && (n = void 0), { value: n && n[a++], done: !n };
  } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ia = function(n, e, t) {
  if (t || arguments.length === 2) for (var a = 0, r = e.length, i; a < r; a++) (i || !(a in e)) && (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
  return n.concat(i || Array.prototype.slice.call(e));
}, Os = { collapsed: false, collapsedRows: 1, cols: 24, colGap: 0, rowGap: 0 };
function Es(n, e) {
  var t, a = Be(_.useState(/* @__PURE__ */ new Map()), 2), r = a[0], i = a[1], o = _.useContext(Ae), s = o.getPrefixCls, f = o.componentConfig, u = o.rtl, l = We(n, Os, f == null ? void 0 : f.Grid), c = l.children, v = l.className, g = l.style, h = l.cols, m = l.colGap, y = l.rowGap, d = l.collapsed, p = l.collapsedRows, S = Le(h, 24), b = Le(m, 0), x = Le(y, 0), F = { gap: x + "px " + b + "px", gridTemplateColumns: "repeat(" + S + ", minmax(0px, 1fr))" }, C = s("grid"), A = (t = {}, t["" + C] = true, t[C + "-rtl"] = u, t), O = ee(A, v), V = function() {
    var E, L, q = [];
    try {
      for (var R = xs(r.entries()), T = R.next(); !T.done; T = R.next()) {
        var D = Be(T.value, 2), Y = D[0], W = D[1];
        q[Y] = W;
      }
    } catch (K) {
      E = { error: K };
    } finally {
      try {
        T && !T.done && (L = R.return) && L.call(R);
      } finally {
        if (E) throw E.error;
      }
    }
    return q;
  }, M = V(), j = Cs({ cols: S, collapsed: d, collapsedRows: p, itemDataList: M });
  return w.createElement("div", { ref: e, className: O, style: Ne(Ne({}, F), g) }, w.createElement(Ka.Provider, { value: { collectItemData: function(E, L) {
    r.set(E, L), i(new Map(ia([], Be(r), false)));
  }, removeItemData: function(E) {
    r.delete(E), i(new Map(ia([], Be(r), false)));
  } } }, w.createElement($a.Provider, { value: { cols: S, colGap: b, collapsed: d, overflow: j.overflow, displayIndexList: j.displayIndexList } }, w.Children.map(c, function(E, L) {
    if (E) {
      var q = Ne({ __index__: L }, E.props);
      return w.cloneElement(E, q);
    }
    return null;
  }).filter(function(E) {
    return ue(E, "type.__ARCO_GRID_ITEM__");
  }))));
}
var Ba = _.forwardRef(Es);
Ba.displayName = "Grid";
var we = function() {
  return we = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, we.apply(this, arguments);
}, qs = { suffix: false, offset: 0, span: 1 };
function js(n, e) {
  var t, a = _.useContext(Ae), r = a.getPrefixCls, i = a.componentConfig, o = a.rtl, s = We(n, qs, i == null ? void 0 : i["Grid.GridItem"]), f = s.children, u = s.className, l = s.style, c = s.offset, v = s.span, g = s.__index__, h = _.useContext($a), m = _.useContext(Ka), y = m.collectItemData, d = m.removeItemData, p = h.colGap, S = h.cols, b = h.displayIndexList, x = h.overflow, F = Le(c, 0), C = Le(v, 1), A = r("grid-item"), O = b == null ? void 0 : b.includes(g), V = (t = {}, t["" + A] = true, t[A + "-rtl"] = o, t), M = ee(V, u), j = _.useMemo(function() {
    return ws(h.cols, { suffix: !!s.suffix, span: C, offset: F });
  }, [h.cols, s.suffix, C, F]);
  _.useEffect(function() {
    return y(g, j), function() {
      d(g);
    };
  }, [g, j]);
  var E = _.useMemo(function() {
    var T = j.offset, D = j.span;
    if (T > 0) {
      var Y = "(100% - " + p * (D - 1) + "px) / " + D;
      return { marginLeft: "calc((" + Y + " * " + T + ") + " + p * T + "px)" };
    }
    return {};
  }, [j, p]), L = _.useMemo(function() {
    var T = j.suffix, D = j.span;
    return T ? "" + (S - D + 1) : "span " + D;
  }, [j, S]), q = !O || C === 0 ? { display: "none" } : {}, R = we(we({ gridColumn: L + " / span " + C }, E), q);
  return w.createElement("div", { ref: e, className: M, style: we(we({}, R), l) }, se(f) ? f({ overflow: x }) : w.Children.map(f, function(T) {
    return T && h.collapsed && w.isValidElement(T) && !mt(T.type) ? w.cloneElement(T, we({ overflow: x }, T.props)) : T;
  }));
}
var As = _.forwardRef(js), Nt = As;
Nt.displayName = "GridItem";
Nt.__ARCO_GRID_ITEM__ = true;
var $e = Ba;
$e.Col = Ua;
$e.Row = ka;
$e.GridItem = Nt;
var Is = /* @__PURE__ */ (function() {
  var n = function(e, t) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, r) {
      a.__proto__ = r;
    } || function(a, r) {
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (a[i] = r[i]);
    }, n(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    n(e, t);
    function a() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (a.prototype = t.prototype, new a());
  };
})(), qe = function() {
  return qe = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, qe.apply(this, arguments);
}, oa = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}, sa = function(n, e, t) {
  if (t || arguments.length === 2) for (var a = 0, r = e.length, i; a < r; a++) (i || !(a in e)) && (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
  return n.concat(i || Array.prototype.slice.call(e));
}, Pe = (function(n) {
  Is(e, n);
  function e(t, a) {
    var r = n.call(this, t) || this;
    if (r.errors = null, r.warnings = null, r.isDestroyed = false, r.childrenElement = null, r.triggerStateCollect = function() {
      var o = r.context.store.getInnerMethods(true).innerCollectFormState;
      o();
    }, r.toggleValidateStatus = function(o) {
      r.validateStatus = o, r.triggerStateCollect();
    }, r.toggleTouched = function(o) {
      r.touched = si(o) ? o : !r.touched, r.triggerStateCollect();
    }, r.setWarnings = function(o) {
      r.warnings = o, r.triggerStateCollect();
    }, r.setErrors = function(o) {
      r.errors = o, r.triggerStateCollect();
    }, r.getErrors = function() {
      return r.errors;
    }, r.getWarnings = function() {
      return r.warnings || [];
    }, r.isTouched = function() {
      return r.touched;
    }, r.getValidateStatus = function() {
      return r.props.validateStatus ? r.props.validateStatus : r.validateStatus;
    }, r.hasFieldProps = function() {
      return !!r.props.field;
    }, r.clearFormItemError = function(o) {
      o === void 0 && (o = r.props.field);
      var s = r.context.updateFormItem;
      s && s(o, { errors: null, warnings: null });
    }, r.updateFormItem = function() {
      if (!r.isDestroyed) {
        r.forceUpdate();
        var o = r.context.updateFormItem;
        o && o(r.props.field, { errors: r.errors, warnings: r.warnings });
      }
    }, r.getFieldValue = function() {
      var o = r.props.field, s = r.context.store;
      return o ? s.getInnerMethods(true).innerGetFieldValue(o) : void 0;
    }, r.onStoreChange = function(o, s) {
      var f = Q(s.field) ? s.field : [s.field], u = r.props, l = u.field, c = u.shouldUpdate, v = u.dependencies, g = function(h) {
        if (v) Q(v) && v.some(function(y) {
          return He(y, f);
        }) && r.isTouched() && r.validateField();
        else if (c) {
          var m = false;
          se(c) ? m = c(s.prev, s.current, qe({ field: s.field }, h)) : m = !bt(s.prev, s.current), m && r.updateFormItem();
        }
      };
      switch (o) {
        case "reset":
          r.toggleTouched(false), r.toggleValidateStatus(void 0), r.setErrors(null), r.setWarnings(null), v || c ? g() : r.updateFormItem();
          break;
        case "innerSetValue":
          if (He(l, f)) {
            r.toggleTouched(true), r.updateFormItem();
            return;
          }
          g({ isInner: true, isFormList: s.isFormList });
          break;
        case "setFieldValue":
          if (He(l, f)) {
            r.toggleTouched(true), s.data && "touched" in s.data && r.toggleTouched(s.data.touched), s.data && "warnings" in s.data && r.setWarnings(li(s.data.warnings) ? [] : [].concat(s.data.warnings)), s.data && "errors" in s.data ? r.setErrors(s.data.errors) : bt(ue(s.prev, l), ue(s.current, l)) || r.setErrors(null), r.updateFormItem();
            return;
          }
          g();
          break;
      }
    }, r.innerSetFieldValue = function(o, s) {
      if (o) {
        var f = r.context.store, u = f.getInnerMethods(true);
        u.innerSetFieldValue(o, s);
        var l = {};
        Va(l, o, s), r.props.onValuesChange && r.props.onValuesChange(l, qe({}, f.getFieldsValue()));
      }
    }, r.validateFieldOnly = function() {
      var o = r.context.validateMessages, s = r.props, f = s.field, u = s.rules, l = r.getFieldValue();
      return ea(f, l, u, o).then(function(c) {
        var v = c.error, g = c.warning;
        return Promise.resolve({ error: v, value: l, warning: g, field: f });
      });
    }, r.validateField = function(o) {
      var s = r.context, f = s.validateTrigger, u = s.validateMessages, l = r.props, c = l.field, v = l.rules, g = l.validateTrigger, h = r.getFieldValue(), m = function() {
        var d, p = r.errors || ((d = r.warnings) === null || d === void 0 ? void 0 : d.length);
        r.toggleValidateStatus("validating"), r.setErrors(null), r.setWarnings(null), p && r.updateFormItem();
      }, y = o ? (v || []).filter(function(d) {
        var p = [].concat(d.validateTrigger || g || f);
        return p.indexOf(o) > -1;
      }) : v;
      return y && y.length && c ? (m(), ea(c, h, y, u).then(function(d) {
        var p, S = d.error, b = d.warning;
        return r.setErrors(S ? S[c] : null), r.setWarnings(b || null), r.toggleValidateStatus(r.errors ? "error" : !((p = r.warnings) === null || p === void 0) && p.length ? "warning" : "success"), r.updateFormItem(), Promise.resolve({ error: S, value: h, field: c });
      })) : Promise.resolve({ error: null, value: h, field: c });
    }, r.handleTrigger = function(o) {
      for (var s, f = [], u = 1; u < arguments.length; u++) f[u - 1] = arguments[u];
      var l = r.childrenElement || r.props.children, c = r.context.store, v = r.props, g = v.field, h = v.trigger, m = v.normalize, y = v.getValueFromEvent, d = se(y) ? y.apply(void 0, sa([o], oa(f), false)) : o, p = d;
      if (Ma(d)) {
        d.stopPropagation();
        return;
      }
      typeof m == "function" && (p = m(d, c.getFieldValue(g), qe({}, c.getFieldsValue()))), r.toggleTouched(true), r.innerSetFieldValue(g, p), r.validateField(h), _.isValidElement(l) && l.props && l.props[h] && (r.props.isFormList || (s = l.props)[h].apply(s, sa([p], oa(f), false)));
    }, r.getChild = function() {
      var o = r.props.children, s = r.context.store, f = o;
      return se(o) && (f = o(s.getFields(), qe({}, s), r.props.isFormList && { value: r.getFieldValue(), onChange: r.handleTrigger })), r.childrenElement = f, f;
    }, "initialValue" in t && r.hasFieldProps()) {
      var i = a.store.getInnerMethods(true);
      i.innerSetInitialValue(t.field, t.initialValue);
    }
    return r;
  }
  return e.prototype.componentDidMount = function() {
    var t = this.context.store;
    if (t) {
      var a = t.getInnerMethods(true);
      this.removeRegisterField = a.registerField(this);
    }
    this.isDestroyed = false;
  }, e.prototype.componentDidUpdate = function(t) {
    t.field !== this.props.field && this.props._key && t._key === this.props._key && (this.updateFormItem(), this.clearFormItemError(t.field));
  }, e.prototype.componentWillUnmount = function() {
    this.removeRegisterField && this.removeRegisterField(), this.removeRegisterField = null, this.clearFormItemError(), this.isDestroyed = true;
  }, e.prototype.getValidateTrigger = function() {
    var t = this.props.validateTrigger || this.context.validateTrigger || "onChange", a = this.props.rules || [], r = [];
    return a.map(function(i) {
      r = r.concat(i.validateTrigger || t);
    }), Array.from(new Set(r));
  }, e.prototype.renderControl = function(t, a) {
    var r, i = this, o, s = this.props, f = s.field, u = s.trigger, l = u === void 0 ? "onChange" : u, c = s.triggerPropName, v = c === void 0 ? "value" : c, g = s.validateStatus, h = s.formatter, m = this.context, y = m.store, d = m.disabled, p = "disabled" in this.props ? this.props.disabled : d, S = w.Children.only(t), b = { id: ee(((o = S.props) === null || o === void 0 ? void 0 : o.id) || (r = {}, r["" + a + Lt] = a, r)) };
    this.getValidateTrigger().forEach(function(F) {
      b[F] = function(C) {
        var A, O;
        i.validateField(F), !((A = S.props) === null || A === void 0) && A[F] && ((O = S.props) === null || O === void 0 || O[F](C));
      };
    }), b[l] = this.handleTrigger, p !== void 0 && !("disabled" in S.props) && (b.disabled = p);
    var x = ue(y.getInnerMethods(true).innerGetStore(), f);
    return se(h) && (x = h(x)), b[v] = x, !g && this.errors && (b.error = true), w.cloneElement(S, b);
  }, e.prototype.render = function() {
    var t = this.props, a = t.noStyle, r = t.field, i = t.isFormList, o = t.hasFeedback, s = this.getValidateStatus(), f = this.context, u = f.prefixCls, l = f.getFormElementId, c = this.getChild(), v = this.hasFieldProps() ? l(r) : void 0;
    return this.hasFieldProps() && !i && w.Children.count(c) === 1 && (c = this.renderControl(c, v)), a ? c : w.createElement("div", { className: u + "-item-control-wrapper" }, w.createElement("div", { className: u + "-item-control", id: v }, w.createElement("div", { className: u + "-item-control-children" }, c, s && o && w.createElement("div", { className: u + "-item-feedback " + u + "-item-feedback-" + s }, s === "warning" && w.createElement(ui, null), s === "success" && w.createElement(fi, null), s === "error" && w.createElement(ci, null), s === "validating" && w.createElement(di, null)))));
  }, e.defaultProps = { trigger: "onChange", triggerPropName: "value" }, e.isFormControl = true, e.contextType = wt, e;
})(_.Component);
function la(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function ua(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? la(Object(t), true).forEach(function(a) {
      hi(n, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : la(Object(t)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return n;
}
function Ts(n, e) {
  var t = _.useContext(vi), a = t.prefixCls, r = a === void 0 ? "arco" : a, i = n.spin, o = n.className, s = ua(ua({ "aria-hidden": true, focusable: false, ref: e }, n), {}, { className: "".concat(o ? o + " " : "").concat(r, "-icon ").concat(r, "-icon-question-circle") });
  return i && (s.className = "".concat(s.className, " ").concat(r, "-icon-loading")), delete s.spin, delete s.isIcon, w.createElement("svg", gi({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), w.createElement("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z" }), w.createElement("path", { d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465" }));
}
var Dt = w.forwardRef(Ts);
Dt.defaultProps = { isIcon: true };
Dt.displayName = "IconQuestionCircle";
var Ct = function() {
  return Ct = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Ct.apply(this, arguments);
}, Vs = function(n, e) {
  var t = {};
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && e.indexOf(a) < 0 && (t[a] = n[a]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, a = Object.getOwnPropertySymbols(n); r < a.length; r++) e.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[r]) && (t[a[r]] = n[a[r]]);
  return t;
}, Ps = function(n) {
  var e = n.htmlFor, t = n.showColon, a = n.label, r = n.requiredSymbol, i = n.required, o = n.rules, s = n.prefix, f = n.tooltip, u = Q(o) && o.some(function(g) {
    return g && g.required;
  }), l = k(r) ? r.position : "start", c = (i || u) && !!r && w.createElement("strong", { className: s + "-form-item-symbol" }, w.createElement("svg", { fill: "currentColor", viewBox: "0 0 1024 1024", width: "1em", height: "1em" }, w.createElement("path", { d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z" }))), v = function() {
    if (!f) return null;
    var g = s + "-form-item-tooltip", h = {}, m = w.createElement(Dt, { className: g });
    if (!k(f) || _.isValidElement(f)) h = { content: f };
    else {
      var y = f, d = y.icon, p = Vs(y, ["icon"]);
      h = p, d && (m = _.isValidElement(d) ? w.cloneElement(d, { className: ee(g, d.props.className) }) : d);
    }
    return w.createElement(pi, Ct({}, h), m);
  };
  return a ? w.createElement("label", { htmlFor: e && "" + e + Lt }, l !== "end" && c, " ", a, v(), l === "end" && w.createElement(w.Fragment, null, " ", c), t ? t === true ? ":" : t : "") : null;
}, H = function() {
  return H = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, H.apply(this, arguments);
}, Rs = function(n, e) {
  var t = {};
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && e.indexOf(a) < 0 && (t[a] = n[a]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, a = Object.getOwnPropertySymbols(n); r < a.length; r++) e.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[r]) && (t[a[r]] = n[a[r]]);
  return t;
}, yt = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}, Ms = function(n, e, t) {
  if (t || arguments.length === 2) for (var a = 0, r = e.length, i; a < r; a++) (i || !(a in e)) && (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
  return n.concat(i || Array.prototype.slice.call(e));
}, Ls = $e.Row, fa = $e.Col, Ns = function(n) {
  var e, t = n.prefixCls, a = n.help, r = n.errors, i = n.warnings, o = r.map(function(l, c) {
    if (l) return w.createElement("div", { key: c, role: "alert" }, l.message);
  }), s = [];
  i.map(function(l, c) {
    s.push(w.createElement("div", { key: c, role: "alert", className: t + "-message-help-warning" }, l));
  });
  var f = !je(a) || !!s.length, u = f || !!o.length;
  return u && w.createElement(yi, { in: u, appear: true, classNames: "formblink", timeout: 300, unmountOnExit: true }, w.createElement("div", { className: ee(t + "-message", (e = {}, e[t + "-message-help"] = f, e)) }, je(a) ? w.createElement(w.Fragment, null, o.length > 0 && o, s.length > 0 && s) : a));
}, Ds = function(n, e) {
  var t, a, r, i, o, s, f = _.useContext(Ae), u = f.getPrefixCls, l = f.prefixCls, c = _.useContext(wt), v = _.useContext(Da), g = yt(_.useState(null), 2), h = g[0], m = g[1], y = yt(_.useState(null), 2), d = y[0], p = y[1], S = _.useContext(Ce), b = S.prefixCls || u("form"), x = n.layout || S.layout, F = n.labelAlign || S.labelAlign, C = _.useRef(false), A = function(Z, te) {
    if (te === void 0 && (te = {}), !C.current) {
      var ne = te || {}, $ = ne.errors, z = ne.warnings;
      m(function(me) {
        var X = H({}, me || {});
        return $ ? X[Z] = $ : delete X[Z], X;
      }), p(function(me) {
        var X = H({}, me || {});
        return z && z.length ? X[Z] = z : delete X[Z], X;
      });
    }
  }, O = k(n.noStyle) && n.noStyle.showErrorTip && c.updateFormItem ? c.updateFormItem : A;
  _.useEffect(function() {
    return C.current = false, function() {
      C.current = true, m(null), p(null);
    };
  }, []);
  var V = H(H({}, S), { validateMessages: S.validateMessages && ts(S.validateMessages, { label: n.label }), prefixCls: b, updateFormItem: O, disabled: "disabled" in n ? n.disabled : S.disabled }), M = n.label, j = n.extra, E = n.className, L = n.style, q = n.validateStatus, R = n.hidden, T = Rs(n, ["label", "extra", "className", "style", "validateStatus", "hidden"]), D = ee(b + "-label-item", (t = {}, t[b + "-label-item-left"] = F === "left", t)), Y = h ? Object.values(h) : [], W = d ? Object.values(d).reduce(function(Z, te) {
    return Z.concat(te);
  }, []) : [], K = _.useMemo(function() {
    if (q) return q;
    if (Y.length) return pt.error;
    if (W.length) return pt.warning;
  }, [h, d, q]), ye = _.useMemo(function() {
    return !je(n.help) || W.length > 0;
  }, [n.help, d]), re = ee(b + "-item", (a = {}, a[b + "-item-error"] = ye || !q && K === pt.error, a[b + "-item-status-" + K] = K, a[b + "-item-has-help"] = ye, a[b + "-item-hidden"] = R, a[b + "-item-has-feedback"] = K && n.hasFeedback, a), b + "-layout-" + x, E), G = function() {
    var Z, te, ne = n.field, $ = n.children, z = "disabled" in n ? n.disabled : S.disabled;
    if (se($)) return w.createElement(Pe, H({ disabled: z }, n, ne ? { key: ne, _key: ne } : {}), function() {
      for (var U = [], I = 0; I < arguments.length; I++) U[I] = arguments[I];
      return $.apply(void 0, Ms([], yt(U), false));
    });
    if (Q($)) {
      var me = w.Children.map($, function(U, I) {
        var le = k(U) && U.key || I, de = k(U) && "disabled" in U.props, or = !je(z) && !de ? { key: le, disabled: z } : { key: le };
        return k(U) ? _.cloneElement(U, or) : U;
      });
      return w.createElement(Pe, H({}, n, { field: void 0 }), me);
    }
    if (w.Children.count($) === 1) {
      if (ne) {
        var X = ((Z = v == null ? void 0 : v.getItemKey) === null || Z === void 0 ? void 0 : Z.call(v, ne)) || ne;
        return w.createElement(Pe, H({ disabled: z }, n, { key: X, _key: X }), $);
      }
      if (k($)) {
        if (!((te = $.type) === null || te === void 0) && te.isFormControl) return $;
        var ir = "disabled" in $.props, P = !ir && !je(z) ? { disabled: z } : null;
        return w.createElement(Pe, H({}, n, { field: void 0 }), P ? _.cloneElement($, P) : $);
      }
    }
    return $;
  }, ar = wt, Te = H({}, S);
  return n.noStyle || (Te.wrapperCol = void 0, Te.labelCol = void 0), w.createElement(Ce.Provider, { value: Te }, w.createElement(ar.Provider, { value: V }, n.noStyle ? G() : w.createElement(Ls, H({ ref: e }, jt(T, ["tooltip", "children", "prefixCls", "store", "initialValue", "field", "labelCol", "wrapperCol", "colon", "disabled", "rules", "trigger", "triggerPropName", "validateTrigger", "noStyle", "required", "hasFeedback", "help", "normalize", "formatter", "getValueFromEvent", "shouldUpdate", "field", "isInner", "labelAlign", "layout", "requiredSymbol", "isFormList"]), { className: re, div: x !== "horizontal", style: L }), M ? w.createElement(fa, H({}, n.labelCol || S.labelCol, { className: ee(D, (o = n.labelCol) === null || o === void 0 ? void 0 : o.className, (s = S.labelCol) === null || s === void 0 ? void 0 : s.className, (r = {}, r[b + "-label-item-flex"] = !n.labelCol && !S.labelCol, r)) }), w.createElement(Ps, { tooltip: n.tooltip, htmlFor: n.field && S.getFormElementId(n.field), label: M, prefix: l, requiredSymbol: "requiredSymbol" in n ? n.requiredSymbol : S.requiredSymbol, required: n.required, rules: n.rules, showColon: "colon" in n ? n.colon : S.colon })) : null, w.createElement(fa, H({ className: ee(b + "-item-wrapper", (i = {}, i[b + "-item-wrapper-flex"] = !n.wrapperCol && !S.wrapperCol, i)) }, n.wrapperCol || S.wrapperCol), G(), w.createElement(Ns, { prefixCls: b, help: n.help, errors: Y, warnings: W }), j && w.createElement("div", { className: b + "-extra" }, j)))));
}, nr = _.forwardRef(Ds);
nr.defaultProps = { trigger: "onChange", triggerPropName: "value" };
nr.displayName = "FormItem";
var xt = function() {
  return xt = Object.assign || function(n) {
    for (var e, t = 1, a = arguments.length; t < a; t++) {
      e = arguments[t];
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, xt.apply(this, arguments);
}, Ve = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}, Se = function(n, e, t) {
  if (t || arguments.length === 2) for (var a = 0, r = e.length, i; a < r; a++) (i || !(a in e)) && (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
  return n.concat(i || Array.prototype.slice.call(e));
}, ca = function(n, e) {
  return !je(n) && n >= 0 && n < e.length;
}, Ha = function(n) {
  var e = n.field, t = n.children, a = n.initialValue, r = _.useRef({ id: 0, keys: [] }), i = "initialValue" in n ? { initialValue: a } : {}, o = r.current.keys;
  return w.createElement(Da.Provider, { value: { getItemKey: function(s) {
    var f = s == null ? void 0 : s.replace(/\[|\]/g, ".").split("."), u = f.indexOf(e), l = f[u + 1];
    return e + "_" + o.indexOf(l) + "_" + f.slice(u + 2).join("_");
  } } }, w.createElement(nr, xt({ field: e }, i, { isFormList: true, rules: n.rules, wrapperCol: { span: 24 }, noStyle: "noStyle" in n ? n.noStyle : !n.rules, shouldUpdate: function(s, f, u) {
    var l, c;
    return !!(u && !u.isInner && He(u.field, [e]) && ((l = ue(s, e)) === null || l === void 0 ? void 0 : l.length) !== ((c = ue(f, e)) === null || c === void 0 ? void 0 : c.length));
  } }), function(s, f, u) {
    var l = u.value, c = u.onChange, v = l || [], g = function(y, d) {
      var p;
      if (!Ma(y)) {
        var S = ((p = f.getInnerMethods(true)) === null || p === void 0 ? void 0 : p.innerGetFieldValue(e)) || [], b = r.current.id;
        r.current.id += 1;
        var x = S || [], F = x;
        d !== void 0 && d >= 0 && d <= x.length ? (o.splice(d, 0, b), F = Se(Se(Se([], Ve(x.slice(0, d)), false), [y], false), Ve(x.slice(d)), false)) : (o.push(b), F = Se(Se([], Ve(x), false), [y], false)), c(F, { isFormList: true, ignore: y === void 0 });
      }
    }, h = function(y) {
      var d, p = ((d = f.getInnerMethods(true)) === null || d === void 0 ? void 0 : d.innerGetFieldValue(e)) || [], S = p.filter(function(b, x) {
        return x !== y;
      });
      o.splice(y, 1), c(Se([], Ve(S), false), { isFormList: true });
    }, m = function(y, d) {
      var p, S = ((p = f.getInnerMethods(true)) === null || p === void 0 ? void 0 : p.innerGetFieldValue(e)) || [];
      if (!(y === d || !ca(y, S) || !ca(d, S))) {
        var b = o[y];
        o.splice(y, 1), o.splice(d, 0, b);
        var x = S[y], F = Se([], Ve(S), false);
        F.splice(y, 1), F.splice(d, 0, x), c(F, { isFormList: true });
      }
    };
    return se(t) && t(v.map(function(y, d) {
      var p = o[d];
      return p === void 0 && (p = r.current.id, o.push(p), r.current.id += 1), { field: e + "[" + d + "]", key: p };
    }), { add: g, remove: h, move: m });
  }));
};
Ha.displayName = "FormList";
var Ws = function(n, e) {
  var t = _.useRef({}), a = _.useCallback(function(o, s) {
    return o && (t.current[o] = s), function() {
      delete t.current[o];
    };
  }, []), r = _.useCallback(function(o, s) {
    n.onFormSubmit && n.onFormSubmit(o, s, { forms: t.current });
  }, [n.onFormSubmit]), i = _.useCallback(function(o, s) {
    n.onFormValuesChange && n.onFormValuesChange(o, s, { forms: t.current });
  }, [n.onFormValuesChange]);
  return w.createElement(Na.Provider, { value: { onFormValuesChange: i, onFormSubmit: r, register: a } }, n.children);
}, Qa = _.forwardRef(Ws);
Qa.displayName = "FormProvider";
var Gs = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}, $s = function(n, e) {
  var t = _.useContext(Ce), a = e || t.store, r = Gs(_.useState(function() {
    var u = a == null ? void 0 : a.getFieldsValue([].concat(n));
    return mt(n) ? ue(u, n) : u;
  }), 2), i = r[0], o = r[1], s = _.useRef(n);
  s.current = n;
  var f = _.useRef(JSON.stringify(i));
  return _.useEffect(function() {
    if (a) {
      var u = (a == null ? void 0 : a.getInnerMethods(true)).registerWatcher, l = function() {
        var v = s.current, g = a.getFieldsValue([].concat(v)), h = g;
        mt(v) && (h = ue(g, v));
        var m = JSON.stringify(h);
        f.current !== m && (o(h), f.current = m);
      };
      l();
      var c = u && u(l);
      return function() {
        c == null || c();
      };
    }
  }, []), i;
}, Ks = function() {
  var n = _.useContext(Ce), e = n.store, t = _.useRef(false), a = mi(), r = _.useCallback(function() {
    var i, o, s = (((o = (i = e == null ? void 0 : e.getInnerMethods(true)) === null || i === void 0 ? void 0 : i.innerGetStoreStatus) === null || o === void 0 ? void 0 : o.call(i)) || {}).submitStatus, f = s === oe.submitting;
    f !== t.current && (t.current = f, a());
  }, []);
  return _.useEffect(function() {
    if (e) {
      var i = (e == null ? void 0 : e.getInnerMethods(true)).registerFormWatcher, o = function() {
        return r();
      };
      o();
      var s = i && i(o);
      return function() {
        s == null || s();
      };
    }
  }, []), { form: e, disabled: n.disabled, isSubmitting: t.current };
}, Us = function(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var a = t.call(n), r, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = a.next()).done; ) i.push(r.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      r && !r.done && (t = a.return) && t.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}, ks = function(n, e) {
  var t = _.useContext(Ce), a = e || t.store, r = _.useRef(n);
  r.current = n;
  var i = _.useCallback(function() {
    var l = r.current, c = a.getFieldsState([l]);
    return c == null ? void 0 : c[l];
  }, []), o = Us(_.useState(i), 2), s = o[0], f = o[1], u = _.useRef(s);
  return _.useEffect(function() {
    if (a) {
      var l = (a == null ? void 0 : a.getInnerMethods(true)).registerStateWatcher, c = function() {
        var g = i();
        bt(u.current, g) || (f(g), u.current = g);
      };
      c();
      var v = l && l(c);
      return function() {
        v == null || v();
      };
    }
  }, []), s;
}, ce = Wa;
ce.Provider = Qa;
ce.Item = nr;
ce.List = Ha;
ce.Control = Pe;
ce.useForm = La;
ce.useFormContext = Ks;
ce.useWatch = $s;
ce.useFormState = ks;
ce.FormContext = Ce;
export { ce as F };
