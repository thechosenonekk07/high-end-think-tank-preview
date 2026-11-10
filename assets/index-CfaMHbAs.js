import { R as v, r as p, f as Fe, _ as Ve, g as Te, y as Ge, l as D, C as Le, a as ke, v as Ue, o as $e, ac as ze, ab as He, a0 as Ke, c as ge, aD as Xe, aE as qe } from "./index-CNdOvyN0.js";
function he(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ye(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? he(Object(t), true).forEach(function(n) {
      Te(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : he(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function We(e, r) {
  var t = p.useContext(Fe), n = t.prefixCls, i = n === void 0 ? "arco" : n, l = e.spin, u = e.className, s = ye(ye({ "aria-hidden": true, focusable: false, ref: r }, e), {}, { className: "".concat(u ? u + " " : "").concat(i, "-icon ").concat(i, "-icon-up") });
  return l && (s.className = "".concat(s.className, " ").concat(i, "-icon-loading")), delete s.spin, delete s.isIcon, v.createElement("svg", Ve({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), v.createElement("path", { d: "M39.6 30.557 24.043 15 8.487 30.557" }));
}
var Z = v.forwardRef(We);
Z.defaultProps = { isIcon: true };
Z.displayName = "IconUp";
function Ye(e) {
  var r = e.inputElement, t = e.inputValue, n = p.useRef(null);
  return Ge(function() {
    try {
      var i = n.current;
      if (r && t && D(i)) {
        var l = Math.max(0, t.length - i);
        r.setSelectionRange(l, l);
      }
    } catch (u) {
      console.warn("Failed to reset input selection range position", u);
    }
  }, [t]), function(i) {
    var l = i.target, u = l.selectionEnd, s = l.value;
    D(u) && (n.current = s.length - u);
  };
}
var Je = function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var n = t.call(e), i, l = [], u;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; ) l.push(i.value);
  } catch (s) {
    u = { error: s };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (u) throw u.error;
    }
  }
  return l;
};
function Ne(e) {
  return !Number.isNaN(Number(e)) && String(e).includes("e");
}
function J() {
  return typeof BigInt == "function";
}
function Q(e) {
  var r = String(e);
  if (Ne(e)) {
    var t = Number(r.slice(r.indexOf("e-") + 2));
    return r.replace(/\.(\d+)/, function(n, i) {
      return t += i.length, n;
    }), t;
  }
  return r.includes(".") && be(r) ? r.length - r.indexOf(".") - 1 : 0;
}
function Se(e) {
  var r = String(e);
  if (Ne(e)) {
    if (e < Number.MIN_SAFE_INTEGER) return J() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER.toString();
    if (e > Number.MAX_SAFE_INTEGER) return J() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER.toString();
    var t = Q(r);
    r = Number(e).toFixed(Math.min(100, t));
  }
  return M(r).fullStr;
}
function be(e) {
  return typeof e == "number" ? !Number.isNaN(e) : e ? /^\s*-?\d+(\.\d+)?\s*$/.test(e) || /^\s*-?\d+\.\s*$/.test(e) || /^\s*-?\.\d+\s*$/.test(e) : false;
}
function M(e) {
  var r = e.trim(), t = false;
  r = r.replace(/^-/, function() {
    return t = true, "";
  }).replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, "").replace(/^\./, "0.");
  var n = r || "0", i = Je(n.split("."), 2), l = i[0], u = l === void 0 ? "0" : l, s = i[1], m = s === void 0 ? "0" : s;
  u === "0" && m === "0" && (t = false);
  var o = t ? "-" : "";
  return { negative: t, negativeStr: o, trimStr: n, integerStr: u, decimalStr: m, fullStr: "" + o + n };
}
var Qe = function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var n = t.call(e), i, l = [], u;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; ) l.push(i.value);
  } catch (s) {
    u = { error: s };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (u) throw u.error;
    }
  }
  return l;
}, Ze = (function() {
  function e(r) {
    if (this.origin = "", this.origin = String(r), !r && r !== 0 || !this.origin.trim()) {
      this.isEmpty = true;
      return;
    }
    if (r === "-") {
      this.isNaN = true;
      return;
    }
    var t = Se(r);
    if (be(t)) {
      var n = M(t), i = n.negative, l = n.trimStr, u = Qe(l.split("."), 2), s = u[0], m = u[1], o = m === void 0 ? "0" : m;
      this.isNegative = i, this.integer = BigInt(s), this.decimal = BigInt(o), this.decimalLen = o.length;
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
  }, e.prototype.alignDecimal = function(r) {
    return BigInt("" + this.getMark() + this.getIntegerStr() + this.getDecimalStr().padEnd(r, "0"));
  }, e.prototype.negate = function() {
    var r = this.toString();
    return new e(r.startsWith("-") ? r.slice(1) : "-" + r);
  }, e.prototype.add = function(r) {
    var t = new e(r);
    if (t.isInvalid) return this;
    if (this.isInvalid) return t;
    var n = Math.max(this.decimalLen, t.decimalLen), i = this.alignDecimal(n), l = t.alignDecimal(n), u = (i + l).toString(), s = M(u), m = s.negativeStr, o = s.trimStr, y = "" + m + o.padStart(n + 1, "0");
    return new e(y.slice(0, -n) + "." + y.slice(-n));
  }, e.prototype.equals = function(r) {
    return this.toString() === (r == null ? void 0 : r.toString());
  }, e.prototype.less = function(r) {
    return this.isInvalid || r.isInvalid ? false : this.add(r.negate().toString()).toNumber() < 0;
  }, e.prototype.toNumber = function() {
    return this.isNaN ? NaN : Number(this.toString());
  }, e.prototype.toString = function(r) {
    r === void 0 && (r = { safe: true });
    var t = r.safe, n = r.precision, i = t ? this.isInvalid ? "" : M("" + this.getMark() + this.getIntegerStr() + "." + this.getDecimalStr()).fullStr : this.origin;
    return typeof n == "number" ? ee(i, n) : i;
  }, e;
})(), er = (function() {
  function e(r) {
    this.origin = "", this.origin = String(r), this.number = Number(r), !r && r !== 0 || !this.origin.trim() ? this.isEmpty = true : this.isNaN = Number.isNaN(this.number);
  }
  return Object.defineProperty(e.prototype, "isInvalid", { get: function() {
    return this.isEmpty || this.isNaN;
  }, enumerable: false, configurable: true }), e.prototype.negate = function() {
    return new e(-this.toNumber());
  }, e.prototype.equals = function(r) {
    return this.toNumber() === (r == null ? void 0 : r.toNumber());
  }, e.prototype.less = function(r) {
    return this.isInvalid || r.isInvalid ? false : this.add(r.negate().toString()).toNumber() < 0;
  }, e.prototype.add = function(r) {
    var t = new e(r);
    if (t.isInvalid) return this;
    if (this.isInvalid) return t;
    var n = this.number + t.number;
    if (n > Number.MAX_SAFE_INTEGER) return new e(Number.MAX_SAFE_INTEGER);
    if (n < Number.MIN_SAFE_INTEGER) return new e(Number.MIN_SAFE_INTEGER);
    var i = Math.max(Q(this.number), Q(t.number));
    return new e(n.toFixed(i));
  }, e.prototype.toNumber = function() {
    return this.number;
  }, e.prototype.toString = function(r) {
    r === void 0 && (r = { safe: true });
    var t = r.safe, n = r.precision, i = t ? this.isInvalid ? "" : Se(this.number) : this.origin;
    return typeof n == "number" ? ee(i, n) : i;
  }, e;
})();
function b(e) {
  return J() ? new Ze(e) : new er(e);
}
function ee(e, r, t) {
  if (t === void 0 && (t = false), e === "") return "";
  var n = ".", i = M(e), l = i.negativeStr, u = i.integerStr, s = i.decimalStr, m = "" + n + s, o = "" + l + u;
  if (r >= 0) {
    var y = Number(s[r]);
    if (y >= 5 && !t) {
      var G = b(e).add(l + "0." + "0".repeat(r) + (10 - y));
      return ee(G.toString(), r, t);
    }
    return r === 0 ? o : "" + o + n + s.padEnd(r, "0").slice(0, r);
  }
  return "" + o + (m === ".0" ? "" : m);
}
var T = function() {
  return T = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, T.apply(this, arguments);
}, rr = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (t[n[i]] = e[n[i]]);
  return t;
}, C = function(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var n = t.call(e), i, l = [], u;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; ) l.push(i.value);
  } catch (s) {
    u = { error: s };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (u) throw u.error;
    }
  }
  return l;
}, tr = 200, nr = 1e3, ir = { max: 1 / 0, min: -1 / 0, step: 1, mode: "embed", parser: function(e) {
  return (e == null ? void 0 : e.replace(/[^\w\.-]+/g, "")) || "";
} };
function ar(e, r) {
  var t, n, i = p.useContext(Le), l = i.getPrefixCls, u = i.size, s = i.componentConfig, m = i.rtl, o = ke(e, ir, s == null ? void 0 : s.InputNumber), y = o.className, G = o.style, Ie = o.defaultValue, L = o.disabled, Ee = o.error, _ = o.readOnly, _e = o.strictMode, xe = o.placeholder, re = o.hideControl, te = o.suffix, ne = o.prefix, g = o.icons, k = o.mode, Oe = o.size, U = o.step, ie = o.precision, I = o.min, P = o.max, x = o.parser, $ = o.formatter, z = o.onBlur, H = o.onFocus, ae = o.onChange, K = o.onKeyDown, we = rr(o, ["className", "style", "defaultValue", "disabled", "error", "readOnly", "strictMode", "placeholder", "hideControl", "suffix", "prefix", "icons", "mode", "size", "step", "precision", "min", "max", "parser", "formatter", "onBlur", "onFocus", "onChange", "onKeyDown"]), h = l("input-number"), oe = Oe || u, A = (function() {
    if (D(ie)) {
      var a = ("" + U).split(".")[1], f = a && a.length || 0;
      return Math.max(f, ie);
    }
    return null;
  })(), ue = C(p.useState(function() {
    return b("value" in o ? o.value : "defaultValue" in o ? Ie : void 0);
  }), 2), se = ue[0], Ce = ue[1], le = C(p.useState(""), 2), R = le[0], fe = le[1], ce = C(p.useState(false), 2), De = ce[0], Me = ce[1], de = C(p.useState(false), 2), X = de[0], q = de[1], O = p.useRef(null), E = p.useRef(null), W = p.useRef(false), d = p.useMemo(function() {
    return "value" in o ? b(o.value) : se;
  }, [o.value, se]), pe = C(p.useMemo(function() {
    return [b(P), b(I)];
  }, [P, I]), 2), N = pe[0], S = pe[1];
  p.useImperativeHandle(r, function() {
    return E.current;
  }, []);
  var B = function(a, f) {
    if (Ce(a), !a.equals(d) && ae) {
      var c = a.toString({ safe: true, precision: A });
      ae(a.isEmpty ? void 0 : _e ? c : a.isNaN ? NaN : Number(c), f);
    }
  }, j = function() {
    O.current && clearTimeout(O.current), O.current = null;
  }, w = p.useCallback(function(a) {
    var f = a;
    return f.less(S) ? f = S : N.less(f) && (f = N), f;
  }, [S, N]);
  p.useEffect(function() {
    return function() {
      return j();
    };
  }, []), p.useEffect(function() {
    W.current = false;
  }, [o.value]), p.useEffect(function() {
    var a = d.less(S) || N.less(d);
    a && W.current && B(w(d), "outOfRange"), Me(a);
  }, [S, N, d, w]);
  var Y = function(a, f, c) {
    if (c === void 0 && (c = false), a.persist(), a.preventDefault(), q(false), !(L || _)) {
      var V = d.isInvalid ? b(I === -1 / 0 || I <= 0 && P >= 0 ? 0 : I) : d.add(f === "plus" ? U : -U);
      if (B(w(V), f === "plus" ? "increase" : "decrease"), E.current && E.current.focus(), c) {
        var je = O.current === null;
        O.current = setTimeout(function() {
          return a.target.dispatchEvent(a.nativeEvent);
        }, je ? nr : tr);
      }
    }
  }, ve = p.useMemo(function() {
    var a;
    return X ? a = x ? "" + x(R) : R : D(A) ? a = d.toString({ safe: true, precision: A }) : d.isInvalid ? a = "" : a = d.toString(), $ ? $(a, { userTyping: X, input: R }) : a;
  }, [d, R, X, A, x, $]), Pe = Ye({ inputElement: (n = E.current) === null || n === void 0 ? void 0 : n.dom, inputValue: ve }), Ae = { onChange: function(a, f) {
    q(true), a = a.trim().replace(/。/g, ".");
    var c = x ? x(a) : a;
    (D(+c) || c === "-" || !c || c === ".") && (fe(a), B(w(b(c)), "manual"), Pe(f));
  }, onKeyDown: function(a) {
    var f = a.key;
    f === Xe.key ? (a.stopPropagation(), Y(a, "minus")) : f === qe.key && (a.stopPropagation(), Y(a, "plus")), j(), K == null || K(a);
  }, onFocus: function(a) {
    var f, c;
    W.current = true, fe((c = (f = E.current) === null || f === void 0 ? void 0 : f.dom) === null || c === void 0 ? void 0 : c.value), H == null || H(a);
  }, onBlur: function(a) {
    B(w(d), "outOfRange"), q(false), z == null || z(a);
  } }, Re = function(a) {
    return _ ? {} : { onMouseDown: function(f) {
      return Y(f, a, true);
    } };
  }, me = !re && k === "button", Be = !re && !_ && k === "embed", F = function(a, f) {
    var c, V = !L && (d.isInvalid || (a === "plus" ? N.isInvalid || d.less(N) : S.isInvalid || S.less(d)));
    return v.createElement("div", T({ className: ge(h + "-step-button", (c = {}, c[h + "-step-button-disabled"] = !V, c)), onMouseLeave: j, onMouseUp: j }, V ? Re(a) : {}), f);
  };
  return v.createElement(Ue, T({ _ignorePropsFromGlobal: true, role: "spinbutton", "aria-valuemax": P, "aria-valuemin": I, "aria-valuenow": d.isEmpty ? void 0 : d.toNumber() }, $e(we, ["allowClear"]), Ae, { style: G, className: ge(h, h + "-mode-" + k, h + "-size-" + oe, (t = {}, t[h + "-rtl"] = m, t[h + "-readonly"] = _, t[h + "-illegal-value"] = !d.isEmpty && De, t), y), ref: E, size: oe, error: Ee, disabled: L, readOnly: _, value: ve, placeholder: xe, prefix: ne && v.createElement("div", { className: h + "-prefix" }, ne), suffix: v.createElement(v.Fragment, null, Be && v.createElement("div", { className: h + "-step-layer" }, F("plus", g && g.up ? g.up : v.createElement(Z, null)), F("minus", g && g.down ? g.down : v.createElement(Ke, null))), te && v.createElement("div", { className: h + "-suffix" }, te)), addBefore: me && F("minus", g && g.minus ? g.minus : v.createElement(He, null)), addAfter: me && F("plus", g && g.plus ? g.plus : v.createElement(ze, null)) }));
}
var or = v.forwardRef(ar);
or.displayName = "InputNumber";
export { or as I };
