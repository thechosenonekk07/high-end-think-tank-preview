import { r as v, i as V, R as o, aj as tt, c as T, m as oe, f as K, _ as X, g as Y, j as Ye, aq as en, p as we, C as fe, a as rt, o as gr, u as Ne, ar as nt, as as tn, ae as yr, I as rn, n as at, at as nn, au as an, a9 as on, aa as ln, b as Je, av as sn, aw as cn, E as un, ax as We, ay as Ze, w as fn, az as dn, aA as vn, aB as Oe, D as mn, aC as pn, h as gn, aD as yn, aE as hn, aF as bn, aG as wn, aH as On, z as hr, aI as Cn, aJ as xn, aK as He, ac as $t, G as En, l as br, aL as Pn } from "./index-CNdOvyN0.js";
import { a as _n, I as jn } from "./index-BApMjfWm.js";
var Ce = function() {
  return Ce = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, Ce.apply(this, arguments);
}, At = function(e, a) {
  if (oe(e)) {
    var r = Object.keys(e).map(function(n) {
      return e[n] + " " + n;
    }).join(","), t = a ? { backgroundSize: 1e4 / a + "%" } : {};
    return Ce({ backgroundImage: "linear-gradient(to right, " + r + ")" }, t);
  }
  return { backgroundColor: e };
}, In = { small: 3, default: 4, large: 8 };
function Nn(e) {
  var a, r, t = e.type, n = e.prefixCls, l = e.buffer, s = e.percent, i = e.color, u = e.animation, c = e.bufferColor, f = e.formatText, d = e.trailColor, g = e.showText, w = g === void 0 ? true : g, b = e.size, _ = b === void 0 ? "default" : b, O = e.status, h = O === void 0 ? "normal" : O, P = e.strokeWidth || In[_], m = n + "-" + t, C = P, y = h === "success" || h === "error" || s >= 100, x = v.useCallback(function() {
    if (V(f)) return f(s);
    switch (h) {
      case "error":
        return o.createElement("span", null, s, "% ", o.createElement(tt, null));
      default:
        return s + "%";
    }
  }, [f, s, h]);
  return o.createElement("div", { className: m + "-wrapper" }, o.createElement("div", { className: m + "-outer", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": s, style: { height: C, backgroundColor: d } }, l && !y && o.createElement("div", { className: m + "-inner-buffer", style: Ce({ width: (s > 0 ? s + 10 : 0) + "%" }, At(c)) }), o.createElement("div", { className: T(m + "-inner", (a = {}, a[m + "-inner-animate"] = u, a)), style: Ce({ width: s + "%" }, At(i, s)) })), w && o.createElement("div", { className: T(m + "-text", (r = {}, r[m + "-text-with-icon"] = h, r)) }, x()));
}
function zt(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Vt(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? zt(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Sn(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = Vt(Vt({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-exclamation") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "M23 9H25V30H23z" }), o.createElement("path", { fill: "currentColor", stroke: "none", d: "M23 9H25V30H23z" }), o.createElement("path", { d: "M23 37H25V39H23z" }), o.createElement("path", { fill: "currentColor", stroke: "none", d: "M23 37H25V39H23z" }));
}
var it = o.forwardRef(Sn);
it.defaultProps = { isIcon: true };
it.displayName = "IconExclamation";
var kn = { mini: 4, small: 3, default: 4, large: 4 }, Rn = { mini: 16, small: 48, default: 64, large: 80 }, Wt = function(e) {
  var a = e.size, r = e.percent, t = r === void 0 ? 0 : r, n = e.prefixCls, l = e.showText, s = e.status, i = e.formatText, u = oe(e.color), c = e.width || Rn[a], f = e.strokeWidth || (a === "mini" ? c / 2 : kn[a]), d = (c - f) / 2, g = Math.PI * 2 * d, w = c / 2, b = n + "-circle", _ = b + "-svg", O = v.useCallback(function(C) {
    if (V(i)) return i(t);
    switch (C) {
      case "success":
        return o.createElement(Ye, null);
      case "error":
        return o.createElement(it, null);
      default:
        return t + "%";
    }
  }, [i, t]), h = en(n + "-linear-gradient-"), P = u ? "url(#" + h + ")" : e.color, m = o.createElement("div", { className: b + "-wrapper", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": t, style: { width: c, height: c } }, o.createElement("svg", { viewBox: "0 0 " + c + " " + c, className: "" + _ }, u && o.createElement("defs", null, o.createElement("linearGradient", { id: h, x1: "0", y1: "1", x2: "0", y2: "0" }, Object.keys(e.color).sort().map(function(C) {
    return o.createElement("stop", { offset: C, key: C, stopColor: e.color[C] });
  }))), o.createElement("circle", { className: b + "-mask", fill: "none", cx: w, cy: w, r: d, strokeWidth: e.pathStrokeWidth || (a === "mini" ? f : Math.max(2, f - 2)), style: { stroke: e.pathStrokeColor } }), o.createElement("circle", { className: b + "-path", fill: "none", cx: w, cy: w, r: d, strokeWidth: f, style: { stroke: P, strokeDasharray: g, strokeDashoffset: (t > 100 ? 100 : 1 - t / 100) * g } })), l && a !== "mini" && o.createElement("div", { className: b + "-text" }, O(s)));
  return a === "mini" && s === "success" && e.type === "circle" && (m = o.createElement("div", { className: b + "-wrapper", style: { width: c, height: c } }, o.createElement(Ye, { style: { fontSize: c - 2, color: P } }))), a === "mini" && l ? o.createElement(we, { content: o.createElement("div", { className: b + "-text" }, O("normal")) }, m) : m;
}, Ln = function(e, a) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var t = r.call(e), n, l = [], s;
  try {
    for (; (a === void 0 || a-- > 0) && !(n = t.next()).done; ) l.push(n.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      n && !n.done && (r = t.return) && r.call(t);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, Dn = function(e, a, r) {
  if (r || arguments.length === 2) for (var t = 0, n = a.length, l; t < n; t++) (l || !(t in a)) && (l || (l = Array.prototype.slice.call(a, 0, t)), l[t] = a[t]);
  return e.concat(l || Array.prototype.slice.call(a));
}, Un = function(e) {
  var a, r = e.prefixCls, t = e.percent, n = e.color, l = e.type, s = e.formatText, i = e.trailColor, u = e.showText, c = u === void 0 ? true : u, f = e.size, d = f === void 0 ? "default" : f, g = e.status, w = g === void 0 ? "normal" : g, b = e.strokeWidth || (d === "small" ? 8 : 4), _ = r + "-" + l, O = b, h = v.useCallback(function() {
    if (V(s)) return s(t);
    switch (w) {
      case "error":
        return o.createElement("span", null, t, "% ", o.createElement(tt, null));
      default:
        return t + "%";
    }
  }, [s, t, w]);
  return o.createElement("div", { className: _ + "-wrapper" }, o.createElement("div", { className: _ + "-outer", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": t, style: { height: O } }, Dn([], Ln(new Array(e.steps)), false).map(function(P, m) {
    var C, y = t > 100 / e.steps * m;
    return o.createElement("div", { key: m, className: T(_ + "-item", (C = {}, C[_ + "-item-active"] = y, C)), style: { backgroundColor: y ? n : i || "" } });
  })), c && o.createElement("div", { className: T(_ + "-text", (a = {}, a[_ + "-text-with-icon"] = w, a)) }, h()));
}, ie = function() {
  return ie = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, ie.apply(this, arguments);
}, Mn = function(e, a) {
  var r = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
  return r;
}, Fn = { type: "line", showText: true, percent: 0, size: "default" };
function Tn(e, a) {
  var r, t = v.useContext(fe), n = t.getPrefixCls, l = t.componentConfig, s = t.rtl, i = rt(e, Fn, l == null ? void 0 : l.Progress), u = i.className, c = i.style, f = i.size, d = i.width, g = i.strokeWidth, w = i.steps, b = i.percent, _ = Mn(i, ["className", "style", "size", "width", "strokeWidth", "steps", "percent"]), O = w && i.type !== "circle" ? "steps" : i.type, h = n("progress"), P = "status" in i ? i.status : b >= 100 ? "success" : "normal", m = { width: d };
  return f === "mini" && O === "line" && (m.width = d || 16, m.height = d || 16), o.createElement("div", ie({ ref: a, className: T(h, h + "-" + O, h + "-" + f, (r = {}, r[h + "-is-" + P] = P !== "normal", r[h + "-rtl"] = s, r), u), style: ie(ie({}, m), c) }, gr(_, ["type", "animation", "status", "color", "trailColor", "showText", "formatText", "buffer", "bufferColor"])), O === "steps" && o.createElement(Un, ie({}, i, { type: O, status: P, prefixCls: h })), O === "circle" && o.createElement(Wt, ie({ width: i.width }, i, { pathStrokeColor: i.trailColor, status: P, prefixCls: h })), O === "line" && (f === "mini" ? o.createElement(Wt, ie({ pathStrokeColor: i.trailColor }, i, { pathStrokeWidth: g || 4, width: d || 16, strokeWidth: g || 4, prefixCls: h, status: P })) : o.createElement(Nn, ie({}, i, { status: P, prefixCls: h }))));
}
var wr = v.forwardRef(Tn);
wr.displayName = "Progress";
function Zt(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Ht(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Zt(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function $n(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = Ht(Ht({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-file") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z" }));
}
var ot = o.forwardRef($n);
ot.defaultProps = { isIcon: true };
ot.displayName = "IconFile";
var S = { init: "init", uploading: "uploading", success: "done", fail: "error" };
function Bt(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function qt(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Bt(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function An(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = qt(qt({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-play-arrow-fill") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { fill: "currentColor", stroke: "none", d: "M17.533 10.974a1 1 0 0 0-1.537.844v24.356a1 1 0 0 0 1.537.844L36.67 24.84a1 1 0 0 0 0-1.688L17.533 10.974Z" }));
}
var lt = o.forwardRef(An);
lt.defaultProps = { isIcon: true };
lt.displayName = "IconPlayArrowFill";
function Gt(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Kt(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Gt(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function zn(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = Kt(Kt({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-pause") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "M14 12H18V36H14z" }), o.createElement("path", { d: "M30 12H34V36H30z" }), o.createElement("path", { fill: "currentColor", stroke: "none", d: "M14 12H18V36H14z" }), o.createElement("path", { fill: "currentColor", stroke: "none", d: "M30 12H34V36H30z" }));
}
var st = o.forwardRef(zn);
st.defaultProps = { isIcon: true };
st.displayName = "IconPause";
var pe = function() {
  return pe = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, pe.apply(this, arguments);
}, Or = function(e) {
  var a = Ne(), r = e.file, t = e.prefixCls, n = e.progressProps, l = e.progressRender, s = v.useContext(fe).locale, i = r.status, u = r.percent, c = u === void 0 ? 0 : u, f = t + "-list", d = n && n.width ? { width: n.width } : {}, g = o.createElement(o.Fragment, null, i === S.fail && e.reuploadIcon !== null && o.createElement("span", pe({ className: t + "-list-reupload-icon", onClick: function() {
    e.onReupload && e.onReupload(r);
  }, tabIndex: 0, role: "button", "aria-label": s.Upload.reupload }, a({ onPressEnter: function() {
    e.onReupload && e.onReupload(r);
  } })), e.reuploadIcon || (e.listType === "picture-card" ? o.createElement(nt, null) : s.Upload.reupload)), i === S.success && e.successIcon !== null && o.createElement("span", { className: t + "-list-success-icon" }, e.successIcon || o.createElement(Ye, null)), i !== S.success && o.createElement("div", { className: f + "-status", style: d }, o.createElement(wr, pe({ showText: false, className: f + "-progress", type: "circle", status: i === S.fail ? "error" : i === S.success ? "success" : "normal", percent: c, size: "mini" }, n)), i === S.init && e.startIcon !== null && o.createElement("span", pe({ tabIndex: 0, role: "button", "aria-label": s.Upload.start, className: t + "-list-start-icon", onClick: function() {
    e.onUpload && e.onUpload(r);
  } }, a({ onPressEnter: function() {
    e.onUpload && e.onUpload(r);
  } })), e.startIcon || o.createElement(we, { content: s.Upload.start }, o.createElement(lt, null))), i === S.uploading && e.cancelIcon !== null && o.createElement("span", pe({ className: e.prefixCls + "-list-cancel-icon", onClick: function() {
    e.onAbort && e.onAbort(r);
  }, tabIndex: 0, "aria-label": s.Upload.cancel }, a({ onPressEnter: function() {
    e.onAbort && e.onAbort(r);
  } })), e.cancelIcon || o.createElement(we, { content: s.Upload.cancel }, o.createElement(st, null)))));
  return V(l) ? l(r, g) : g;
};
function Xt(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Yt(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Xt(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Vn(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = Yt(Yt({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-image-close") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17" }), o.createElement("path", { d: "m24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z" }), o.createElement("path", { fill: "currentColor", stroke: "none", d: "M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z" }), o.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z", clipRule: "evenodd" }), o.createElement("path", { d: "M17 15h-2v2h2v-2Z" }));
}
var ct = o.forwardRef(Vn);
ct.defaultProps = { isIcon: true };
ct.displayName = "IconImageClose";
var ge = function() {
  return ge = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, ge.apply(this, arguments);
}, Wn = function(e, a) {
  var r = e.disabled, t = e.prefixCls, n = e.file, l = e.showUploadList, s = e.locale, i = Ne(), u = t + "-list-item-picture", c = n.status, f = n.originFile, d = n.url !== void 0 ? n.url : f && V(URL.createObjectURL) && URL.createObjectURL(f), g = oe(l) ? l : {};
  return o.createElement("div", { className: u, ref: a }, c === S.uploading ? o.createElement(Or, ge({ onReupload: e.onReupload, onUpload: e.onUpload, onAbort: e.onAbort, listType: "picture-card", file: n, prefixCls: t, progressProps: e.progressProps }, g)) : o.createElement(o.Fragment, null, V(g.imageRender) ? g.imageRender(n) : o.createElement("img", { src: d, alt: n.name }), o.createElement("div", { className: u + "-mask", role: "radiogroup" }, n.status === S.fail && o.createElement("div", { className: u + "-error-tip" }, g.errorIcon !== null && o.createElement("span", { className: t + "-list-error-icon" }, g.errorIcon || o.createElement(ct, null))), o.createElement("div", { className: u + "-operation" }, n.status !== S.fail && g.previewIcon !== null && o.createElement("span", ge({ className: t + "-list-preview-icon", tabIndex: 0, role: "button", "aria-label": s.Upload.preview }, i({ onPressEnter: function() {
    e.onPreview && e.onPreview(n);
  } }), { onClick: function() {
    e.onPreview && e.onPreview(n);
  } }), g.previewIcon || o.createElement(tn, null)), n.status === S.fail && g.reuploadIcon !== null && o.createElement("span", ge({ className: e.prefixCls + "-list-reupload-icon", onClick: function() {
    e.onReupload && e.onReupload(n);
  }, tabIndex: 0, role: "button", "aria-label": s.Upload.reupload }, i({ onPressEnter: function() {
    e.onReupload && e.onReupload(n);
  } })), g.reuploadIcon || o.createElement(nt, null)), !r && g.removeIcon !== null && o.createElement("span", ge({ className: t + "-list-remove-icon", onClick: function() {
    e.onRemove && e.onRemove(n);
  }, role: "button", "aria-label": s.Upload.delete, tabIndex: 0 }, i({ onPressEnter: function() {
    e.onRemove && e.onRemove(n);
  } })), g.removeIcon || o.createElement(yr, null))))));
};
const Zn = v.forwardRef(Wn);
function Jt(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Qt(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Jt(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jt(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Hn(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = Qt(Qt({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-file-pdf") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "M11 42h26a2 2 0 0 0 2-2V13.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 31.172 6H11a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2Z" }), o.createElement("path", { d: "M22.305 21.028c.874 1.939 3.506 6.265 4.903 8.055 1.747 2.237 3.494 2.685 4.368 2.237.873-.447 1.21-4.548-7.425-2.685-7.523 1.623-7.424 3.58-6.988 4.476.728 1.193 2.522 2.627 5.678-6.266C25.699 18.79 24.489 17 23.277 17c-1.409 0-2.538.805-.972 4.028Z" }));
}
var ut = o.forwardRef(Hn);
ut.defaultProps = { isIcon: true };
ut.displayName = "IconFilePdf";
function er(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function tr(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? er(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Bn(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = tr(tr({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-file-image") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "m26 33 5-6v6h-5Zm0 0-3-4-4 4h7Zm11 9H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2ZM17 19h1v1h-1v-1Z" }));
}
var Se = o.forwardRef(Bn);
Se.defaultProps = { isIcon: true };
Se.displayName = "IconFileImage";
function rr(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function nr(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? rr(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rr(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function qn(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = nr(nr({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-file-video") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "M37 42H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z" }), o.createElement("path", { d: "M22 27.796v-6l5 3-5 3Z" }));
}
var ft = o.forwardRef(qn);
ft.defaultProps = { isIcon: true };
ft.displayName = "IconFileVideo";
function ar(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function ir(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ar(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ar(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Gn(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = ir(ir({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-file-audio") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "M37 42H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z" }), o.createElement("path", { fill: "currentColor", stroke: "none", d: "M25 30a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" }), o.createElement("path", { d: "M25 30a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0-.951-12.363a.5.5 0 0 1 .58-.532L30 18" }));
}
var dt = o.forwardRef(Gn);
dt.defaultProps = { isIcon: true };
dt.displayName = "IconFileAudio";
var be = function() {
  return be = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, be.apply(this, arguments);
}, Kn = function(e) {
  var a = "";
  if (e.originFile && e.originFile.type) a = e.originFile.type;
  else {
    var r = e.name || "", t = r.split(".").pop() || "";
    a = t, ["png", "jpg", "jpeg", "bmp", "gif"].indexOf(t) > -1 ? a = "image" : ["mp4", "m2v", "mkv"].indexOf(t) > -1 ? a = "video" : ["mp3", "wav", "wmv"].indexOf(t) > -1 && (a = "audio");
  }
  return a.indexOf("image") > -1 ? Se : a.indexOf("pdf") > -1 ? ut : a.indexOf("audio") > -1 ? dt : a.indexOf("video") > -1 ? ft : ot;
}, Xn = function(e, a) {
  var r = e.prefixCls, t = e.disabled, n = e.file, l = e.locale, s = r + "-list-item-text", i = Ne(), u = Kn(n), c = oe(e.showUploadList) ? e.showUploadList : {}, f = oe(c) ? c : {}, d = n.name || n.originFile && n.originFile.name, g = n.url !== void 0 ? n.url : n.originFile && V(URL.createObjectURL) && URL.createObjectURL(n.originFile), w = {};
  return n.status !== S.fail && (w = { popupVisible: false }), o.createElement("div", { className: r + "-list-item " + r + "-list-item-" + n.status, ref: a }, o.createElement("div", { className: s }, e.listType === "picture-list" && o.createElement("div", { className: s + "-thumbnail" }, V(c.imageRender) ? c.imageRender(n) : o.createElement("img", { src: g })), o.createElement("div", { className: s + "-content" }, o.createElement("div", { className: s + "-name" }, e.listType === "text" && f.fileIcon !== null && o.createElement("span", { className: r + "-list-file-icon" }, f.fileIcon || o.createElement(u, null)), V(c.fileName) ? o.createElement("span", { className: s + "-name-text" }, c.fileName(n)) : n.url ? o.createElement("a", { href: n.url, target: "_blank", rel: "noreferrer", className: s + "-name-link" }, d) : o.createElement("span", { className: s + "-name-text" }, d), n.status === S.fail && f.errorIcon !== null && o.createElement(we, be({ content: (typeof n.response == "object" ? v.isValidElement(n.response) && n.response : n.response) || l.Upload.error }, w, { disabled: n.status !== S.fail }), o.createElement("span", { className: e.prefixCls + "-list-error-icon" }, f.errorIcon || (e.listType === "picture-card" ? o.createElement(Se, null) : o.createElement(tt, null))))), o.createElement(Or, be({ file: n, prefixCls: r, progressProps: e.progressProps, onReupload: e.onReupload, onUpload: e.onUpload, onAbort: e.onAbort }, f)))), o.createElement("div", { className: r + "-list-item-operation" }, !t && f.removeIcon !== null && o.createElement(rn, be({ className: r + "-list-remove-icon-hover", onClick: function() {
    e.onRemove && e.onRemove(n);
  }, tabIndex: 0, "aria-label": l.Upload.delete }, i({ onPressEnter: function() {
    e.onRemove && e.onRemove(n);
  } })), o.createElement("span", { className: r + "-list-remove-icon" }, f.removeIcon || o.createElement(yr, null)))));
};
const Yn = v.forwardRef(Xn);
function or(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function lr(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? or(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : or(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Jn(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = lr(lr({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-zoom-out") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "M32.607 32.607A14.953 14.953 0 0 0 37 22c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 4.142 0 7.892-1.679 10.607-4.393Zm0 0L41.5 41.5M29 22H15" }));
}
var vt = o.forwardRef(Jn);
vt.defaultProps = { isIcon: true };
vt.displayName = "IconZoomOut";
function sr(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function cr(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? sr(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sr(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Qn(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = cr(cr({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-zoom-in") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "M32.607 32.607A14.953 14.953 0 0 0 37 22c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 4.142 0 7.892-1.679 10.607-4.393Zm0 0L41.5 41.5M29 22H15m7 7V15" }));
}
var mt = o.forwardRef(Qn);
mt.defaultProps = { isIcon: true };
mt.displayName = "IconZoomIn";
function ur(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function fr(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ur(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ur(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function ea(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = fr(fr({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-rotate-left") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "M10 22a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V22ZM23 11h11a6 6 0 0 1 6 6v6M22.5 12.893 19.587 11 22.5 9.107v3.786Z" }));
}
var pt = o.forwardRef(ea);
pt.defaultProps = { isIcon: true };
pt.displayName = "IconRotateLeft";
function dr(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function vr(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? dr(Object(r), true).forEach(function(t) {
      Y(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dr(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function ta(e, a) {
  var r = v.useContext(K), t = r.prefixCls, n = t === void 0 ? "arco" : t, l = e.spin, s = e.className, i = vr(vr({ "aria-hidden": true, focusable: false, ref: a }, e), {}, { className: "".concat(s ? s + " " : "").concat(n, "-icon ").concat(n, "-icon-original-size") });
  return l && (i.className = "".concat(i.className, " ").concat(n, "-icon-loading")), delete i.spin, delete i.isIcon, o.createElement("svg", X({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, i), o.createElement("path", { d: "m5.5 11.5 5-2.5h1v32M34 11.5 39 9h1v32" }), o.createElement("path", { fill: "currentColor", stroke: "none", d: "M24 17h1v1h-1v-1ZM24 30h1v1h-1v-1Z" }), o.createElement("path", { d: "M24 17h1v1h-1v-1ZM24 30h1v1h-1v-1Z" }));
}
var gt = o.forwardRef(ta);
gt.defaultProps = { isIcon: true };
gt.displayName = "IconOriginalSize";
var ra = function(e, a) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var t = r.call(e), n, l = [], s;
  try {
    for (; (a === void 0 || a-- > 0) && !(n = t.next()).done; ) l.push(n.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      n && !n.done && (r = t.return) && r.call(t);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
};
function na(e) {
  var a = ra(v.useState(e), 2), r = a[0], t = a[1], n = r === "beforeLoad", l = r === "loading", s = r === "error", i = r === "loaded", u = r === "lazyload";
  return { status: r, isBeforeLoad: n, isLoading: l, isError: s, isLoaded: i, isLazyLoad: u, setStatus: t };
}
var Cr = [25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500], aa = (function() {
  function e(a) {
    this.updateScale(a);
  }
  return Object.defineProperty(e.prototype, "scales", { get: function() {
    return this.scaleAttr;
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "minScale", { get: function() {
    return this.scaleAttr[0];
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "maxScale", { get: function() {
    return this.scaleAttr[this.scaleAttr.length - 1];
  }, enumerable: false, configurable: true }), e.prototype.updateScale = function(a) {
    var r = Cr;
    if (at(a) && a.filter(function(s) {
      return s > 0;
    }).length && (r = a.filter(function(s) {
      return s > 0;
    })), r = r.map(function(s) {
      return +(s / 100).toFixed(2);
    }), !r.includes(1)) {
      var t = this.findClosestIndex(1, r), n = r[t], l = n < 1 ? t + 1 : t;
      r.splice(l, 0, 1);
    }
    this.scaleAttr = r;
  }, e.prototype.findClosestIndex = function(a, r) {
    if (r === void 0 && (r = this.scaleAttr), !!r.length) {
      if (r.length === 1) return 0;
      for (var t = r.length - 1, n = 0; n < r.length; n++) {
        var l = r[n];
        if (a === l) {
          t = n;
          break;
        }
        if (a < l) {
          var s = r[n - 1];
          t = s === void 0 || Math.abs(s - a) <= Math.abs(l - a) ? n - 1 : n;
          break;
        }
      }
      return t;
    }
  }, e.prototype.getNextScale = function(a, r) {
    r === void 0 && (r = "zoomIn");
    var t = this.scaleAttr.indexOf(a);
    return t === -1 && (t = this.findClosestIndex(a)), r === "zoomIn" ? t === this.scaleAttr.length - 1 ? a : this.scaleAttr[t + 1] : t === 0 ? a : this.scaleAttr[t - 1];
  }, e;
})();
function ia(e, a, r, t, n) {
  var l = r, s = t;
  return r && (e.width > a.width ? l = 0 : (a.left > e.left && (l -= Math.abs(e.left - a.left) / n), a.right < e.right && (l += Math.abs(e.right - a.right) / n))), t && (e.height > a.height ? s = 0 : (a.top > e.top && (s -= Math.abs(e.top - a.top) / n), a.bottom < e.bottom && (s += Math.abs(e.bottom - a.bottom) / n))), [l, s];
}
var oa = function(e) {
  var a = e.style, r = e.className, t = e.prefixCls, n = e.popup, l = e.children, s = T(t + "-trigger", r);
  return o.createElement(nn, { style: a, className: s, popup: n, showArrow: true }, l);
}, Qe = function() {
  return Qe = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, Qe.apply(this, arguments);
}, la = function(e, a) {
  var r = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
  return r;
}, Be = function(e, a) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var t = r.call(e), n, l = [], s;
  try {
    for (; (a === void 0 || a-- > 0) && !(n = t.next()).done; ) l.push(n.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      n && !n.done && (r = t.return) && r.call(t);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, qe = function(e, a, r) {
  if (r || arguments.length === 2) for (var t = 0, n = a.length, l; t < n; t++) (l || !(t in a)) && (l || (l = Array.prototype.slice.call(a, 0, t)), l[t] = a[t]);
  return e.concat(l || Array.prototype.slice.call(a));
}, sa = function(e, a) {
  var r, t = e.prefixCls, n = e.previewPrefixCls, l = e.simple, s = l === void 0 ? false : l, i = e.actions, u = i === void 0 ? [] : i, c = e.actionsLayout, f = c === void 0 ? [] : c, d = e.defaultActions, g = d === void 0 ? [] : d, w = new Set(f), b = function(y) {
    return w.has(y.key);
  }, _ = qe(qe([], Be(g.filter(b)), false), Be(u.filter(b)), false), O = u.filter(function(y) {
    return !w.has(y.key);
  }), h = _.sort(function(y, x) {
    var j = f.indexOf(y.key), k = f.indexOf(x.key);
    return j > k ? 1 : -1;
  });
  if (w.has("extra")) {
    var P = f.indexOf("extra");
    h.splice.apply(h, qe([P, 0], Be(O), false));
  }
  var m = function(y, x) {
    var j;
    x === void 0 && (x = false);
    var k = y.content, $ = y.disabled, D = y.key, J = y.name, B = y.getContainer, q = y.onClick, te = la(y, ["content", "disabled", "key", "name", "getContainer", "onClick"]), W = o.createElement("div", Qe({ className: T(n + "-toolbar-action", (j = {}, j[n + "-toolbar-action-disabled"] = $, j)), key: D, onClick: function(Q) {
      !$ && q && q(Q);
    }, onMouseDown: function(Q) {
      Q.preventDefault();
    } }, te), k && o.createElement("span", { className: n + "-toolbar-action-content" }, k), x && J && o.createElement("span", { className: n + "-toolbar-action-name" }, J));
    return B ? B(W) : W;
  };
  if (!h.length) return null;
  var C = h.map(function(y) {
    var x = m(y, s);
    return !s && y.name && !y.getContainer ? o.createElement(we, { content: y.name, key: y.key }, x) : x;
  });
  return o.createElement("div", { ref: a, className: T(n + "-toolbar", (r = {}, r[n + "-toolbar-simple"] = s, r), e.className), style: e.style }, s && o.createElement(oa, { prefixCls: t, className: n + "-trigger", popup: function() {
    return o.createElement("div", null, C);
  } }, m({ key: "trigger", content: o.createElement("span", null, o.createElement(an, null)) })), !s && C);
};
const ca = v.forwardRef(sa);
var xr = v.createContext({ previewGroup: false, previewUrlMap: /* @__PURE__ */ new Map(), previewPropsMap: /* @__PURE__ */ new Map(), infinite: true, currentIndex: 0, setCurrentIndex: function() {
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
function ua(e) {
  var a, r, t = e.current, n = e.previewCount, l = e.infinite, s = l === void 0 ? false : l, i = e.onPrev, u = e.onNext, c = v.useContext(fe).getPrefixCls, f = c("image-preview"), d = T(f + "-arrow"), g = !s && t <= 0, w = !s && t >= n - 1;
  return o.createElement("div", { className: d }, o.createElement("div", { className: T(f + "-arrow-left", (a = {}, a[f + "-arrow-disabled"] = g, a)), onClick: function(b) {
    b.preventDefault(), !g && (i == null || i());
  } }, o.createElement(on, null)), o.createElement("div", { className: T(f + "-arrow-right", (r = {}, r[f + "-arrow-disabled"] = w, r)), onClick: function(b) {
    b.preventDefault(), !w && (u == null || u());
  } }, o.createElement(ln, null)));
}
var se = function() {
  return se = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, se.apply(this, arguments);
}, fa = function(e, a) {
  var r = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
  return r;
}, re = function(e, a) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var t = r.call(e), n, l = [], s;
  try {
    for (; (a === void 0 || a-- > 0) && !(n = t.next()).done; ) l.push(n.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      n && !n.done && (r = t.return) && r.call(t);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, Ge = 90, da = { maskClosable: true, closable: true, breakPoint: 316, actionsLayout: ["fullScreen", "rotateRight", "rotateLeft", "zoomIn", "zoomOut", "originalSize", "extra"], getPopupContainer: function() {
  return document.body;
}, escToExit: true, scales: Cr, resetTranslate: true };
function va(e, a) {
  var r, t = v.useContext(xr), n = t.previewGroup, l = t.previewUrlMap, s = t.currentIndex, i = t.setCurrentIndex, u = t.infinite, c = t.previewPropsMap, f = n ? c.get(s) : {}, d = rt(e, da, f), g = d.className, w = d.style, b = d.src, _ = d.defaultVisible, O = d.maskClosable, h = d.closable, P = d.breakPoint, m = d.actions, C = d.actionsLayout, y = d.getPopupContainer, x = d.onVisibleChange, j = d.scales, k = d.escToExit, $ = d.imgAttributes, D = $ === void 0 ? {} : $, J = d.imageRender, B = d.extra, q = B === void 0 ? null : B, te = d.resetTranslate, W = n ? l.get(s) : b, Q = re(v.useState(W), 2), I = Q[0], A = Q[1], L = re(Je(false, { defaultValue: _, value: d.visible }), 2), E = L[0], R = L[1], U = v.useContext(fe), G = U.getPrefixCls, z = U.locale, M = U.rtl, de = G("image"), ee = de + "-preview", jr = T(ee, (r = {}, r[ee + "-hide"] = !E, r[ee + "-rtl"] = M, r), g), xe = v.useRef(), Ir = v.useRef(), ve = v.useRef(), ht = v.useRef(), ke = v.useRef(false), ye = v.useRef({ pageX: 0, pageY: 0, originX: 0, originY: 0 }), Re = na("loading"), Nr = Re.isLoading, Sr = Re.isLoaded, Le = Re.setStatus, bt = re(v.useState(false), 2), kr = bt[0], Rr = bt[1], wt = re(v.useState({ x: 0, y: 0 }), 2), ne = wt[0], De = wt[1], Ot = re(v.useState(1), 2), F = Ot[0], Ue = Ot[1], Ct = re(v.useState(false), 2), xt = Ct[0], Et = Ct[1], Pt = re(v.useState(0), 2), Ee = Pt[0], Me = Pt[1], _t = re(v.useState(false), 2), le = _t[0], jt = _t[1], ce = v.useMemo(function() {
    return new aa(j);
  }, []), It = D.onLoad, Nt = D.onError, Fe = D.onMouseDown, Lr = D.style, Dr = D.className, Ur = fa(D, ["onLoad", "onError", "onMouseDown", "style", "className"]);
  function Te() {
    De({ x: 0, y: 0 }), Ue(1), Me(0);
  }
  v.useImperativeHandle(a, function() {
    return { reset: Te, getRootDOMNode: function() {
      return ht.current;
    } };
  });
  var St = re(v.useState(), 2), Pe = St[0], Mr = St[1], kt = v.useCallback(function() {
    return Pe;
  }, [Pe]);
  v.useEffect(function() {
    var p = y == null ? void 0 : y(), N = sn(p) || document.body;
    Mr(N);
  }, [y]), cn(kt, { hidden: E });
  var Fr = v.useMemo(function() {
    return !un && Pe === document.body;
  }, [Pe]);
  function Rt(p) {
    var N = l.size;
    u && (p %= N, p < 0 && (p = N - Math.abs(p))), p !== s && p >= 0 && p <= N - 1 && i(p);
  }
  function Lt() {
    Rt(s - 1);
  }
  function Dt() {
    Rt(s + 1);
  }
  function Tr() {
    Me(Ee === 0 ? 360 - Ge : Ee - Ge);
  }
  function $r() {
    Me((Ee + Ge) % 360);
  }
  var $e = v.useRef(null), Ar = function() {
    !xt && Et(true), $e.current && clearTimeout($e.current), $e.current = setTimeout(function() {
      Et(false);
    }, 1e3);
  }, _e = function(p) {
    F !== p && (Ue(p), Ar());
  };
  function Ae() {
    var p = ce.getNextScale(F, "zoomIn");
    _e(p);
  }
  function ze() {
    var p = ce.getNextScale(F, "zoomOut");
    _e(p);
  }
  function zr(p) {
    p.deltaY > 0 ? F >= ce.minScale && ze() : F <= ce.maxScale && Ae();
  }
  function Vr() {
    _e(1);
  }
  function Wr() {
    var p = ve.current.getBoundingClientRect(), N = xe.current.getBoundingClientRect(), Z = p.height / (N.height / F), ae = p.width / (N.width / F), me = Math.max(Z, ae);
    _e(me);
  }
  function Ut(p) {
    p.target === p.currentTarget && O && Ve();
  }
  function Zr(p) {
    p.stopPropagation(), Ve();
  }
  function Ve() {
    E && (x && x(false, E), hr(d.visible) && R(false));
  }
  function Hr(p) {
    if (p && p.length) {
      var N = p[0].contentRect, Z = N.width < P;
      Rr(Z);
    }
  }
  var Mt = function() {
    if (!(!ve.current || !xe.current)) {
      var p = ve.current.getBoundingClientRect(), N = xe.current.getBoundingClientRect(), Z = re(ia(p, N, ne.x, ne.y, F), 2), ae = Z[0], me = Z[1];
      (ae !== ne.x || me !== ne.y) && De({ x: ae, y: me });
    }
  }, Ft = function(p) {
    if (E && le) {
      p.preventDefault && p.preventDefault();
      var N = ye.current, Z = N.originX, ae = N.originY, me = N.pageX, Yr = N.pageY, Jr = Z + (p.pageX - me) / F, Qr = ae + (p.pageY - Yr) / F;
      De({ x: Jr, y: Qr });
    }
  }, Tt = function(p) {
    p.preventDefault && p.preventDefault(), jt(false);
  };
  function Br(p) {
    Le("loaded"), It && It(p);
  }
  function qr(p) {
    Le("error"), Nt && Nt(p);
  }
  var Gr = function(p) {
    var N;
    (N = p.preventDefault) === null || N === void 0 || N.call(p), jt(true);
    var Z = p.type === "touchstart" ? p.touches[0] : p;
    ye.current.pageX = Z.pageX, ye.current.pageY = Z.pageY, ye.current.originX = ne.x, ye.current.originY = ne.y, Fe == null || Fe(p);
  };
  v.useEffect(function() {
    return E && le && (We(document, "mousemove", Ft, false), We(document, "mouseup", Tt, false)), function() {
      Ze(document, "mousemove", Ft, false), Ze(document, "mouseup", Tt, false);
    };
  }, [E, le]), v.useEffect(function() {
    te && !le && Mt();
  }, [le, ne]), v.useEffect(function() {
    te && Mt();
  }, [F]), v.useEffect(function() {
    E && Te();
  }, [E]), v.useEffect(function() {
    A(W), Le(W ? "loading" : "loaded"), Te();
  }, [W]), fn(function() {
    ce.updateScale(j), Ue(1);
  }, [j]), v.useEffect(function() {
    var p = function(N) {
      if (N) switch (N.key) {
        case On.key:
          k && Ve();
          break;
        case wn.key:
          Dt();
          break;
        case bn.key:
          Lt();
          break;
        case hn.key:
          Ae();
          break;
        case yn.key:
          ze();
          break;
      }
    };
    return E && !le && !ke.current && (ke.current = true, We(document, "keydown", p)), function() {
      ke.current = false, Ze(document, "keydown", p);
    };
  }, [E, k, le, s, F]);
  var Kr = [{ key: "fullScreen", name: z.ImagePreview.fullScreen, content: o.createElement(_n, null), onClick: Wr }, { key: "rotateRight", name: z.ImagePreview.rotateRight, content: o.createElement(jn, null), onClick: $r }, { key: "rotateLeft", name: z.ImagePreview.rotateLeft, content: o.createElement(pt, null), onClick: Tr }, { key: "zoomIn", name: z.ImagePreview.zoomIn, content: o.createElement(mt, null), onClick: Ae, disabled: F === ce.maxScale }, { key: "zoomOut", name: z.ImagePreview.zoomOut, content: o.createElement(vt, null), onClick: ze, disabled: F === ce.minScale }, { key: "originalSize", name: z.ImagePreview.originalSize, content: o.createElement(gt, null), onClick: Vr }], Xr = function() {
    var p, N, Z = o.createElement("img", se({ onWheel: zr, ref: xe, className: T(Dr, ee + "-img", (p = {}, p[ee + "-img-moving"] = le, p)), style: se(se({}, Lr), { transform: "translate(" + ne.x + "px, " + ne.y + "px) rotate(" + Ee + "deg)" }), key: I, src: I }, Ur, { onLoad: Br, onError: qr, onMouseDown: function(ae) {
      ae.button === 0 && Gr(ae);
    } }));
    return (N = J == null ? void 0 : J(Z)) !== null && N !== void 0 ? N : Z;
  };
  return o.createElement(dn, { visible: E, forceRender: false, getContainer: kt }, o.createElement(vn, se({}, U, { getPopupContainer: function() {
    return ve.current;
  } }), o.createElement("div", { className: jr, style: se(se({}, w || {}), Fr ? {} : { zIndex: "inherit", position: "absolute" }), ref: ht }, o.createElement(Oe, { in: E, timeout: 400, appear: true, classNames: "fadeImage", mountOnEnter: true, unmountOnExit: false, onEnter: function(p) {
    p && (p.parentNode.style.display = "block", p.style.display = "block");
  }, onExited: function(p) {
    p && (p.parentNode.style.display = "", p.style.display = "none");
  } }, o.createElement("div", { className: ee + "-mask" })), E && o.createElement(mn, { onResize: Hr, getTargetDOMNode: function() {
    return ve.current;
  } }, o.createElement("div", { ref: ve, className: ee + "-wrapper", onClick: Ut }, o.createElement("div", { ref: Ir, className: ee + "-img-container", style: { transform: "scale(" + F + ", " + F + ")" }, onClick: Ut }, Xr(), Nr && o.createElement("div", { className: ee + "-loading" }, o.createElement(pn, null))), o.createElement(Oe, { in: xt, timeout: 400, appear: true, classNames: "fadeImage", unmountOnExit: true }, o.createElement("div", { className: ee + "-scale-value" }, (F * 100).toFixed(0), "%")), Sr && o.createElement(ca, { prefixCls: de, previewPrefixCls: ee, actions: m, actionsLayout: C, defaultActions: Kr, simple: kr }), h && o.createElement("div", { className: ee + "-close-btn", onClick: Zr }, o.createElement(gn, null)), n && o.createElement(ua, { previewCount: l.size, current: s, infinite: u, onPrev: Lt, onNext: Dt }), q)))));
}
var Er = v.forwardRef(va);
Er.displayName = "ImagePreview";
var et = function() {
  return et = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, et.apply(this, arguments);
}, ma = function(e, a) {
  var r = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
  return r;
}, he = function(e, a) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var t = r.call(e), n, l = [], s;
  try {
    for (; (a === void 0 || a-- > 0) && !(n = t.next()).done; ) l.push(n.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      n && !n.done && (r = t.return) && r.call(t);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
};
function pa(e, a) {
  var r = e.children, t = e.srcList, n = e.infinite, l = e.current, s = e.defaultCurrent, i = e.onChange, u = e.visible, c = e.defaultVisible, f = e.forceRender, d = e.onVisibleChange, g = ma(e, ["children", "srcList", "infinite", "current", "defaultCurrent", "onChange", "visible", "defaultVisible", "forceRender", "onVisibleChange"]), w = he(Je(false, { value: u, defaultValue: c }), 2), b = w[0], _ = w[1], O = v.useMemo(function() {
    return t ? new Map(t.map(function(E, R) {
      return [R, { url: E, preview: true }];
    })) : null;
  }, [t]), h = Cn(), P = function() {
    return O ? new Map(O) : /* @__PURE__ */ new Map();
  }, m = he(v.useState(P()), 2), C = m[0], y = m[1], x = v.useRef(), j = x.current || /* @__PURE__ */ new Map(), k = function(E) {
    x.current = E(x.current);
  };
  v.useEffect(function() {
    h || y(P());
  }, [O]);
  var $ = new Map(Array.from(C).filter(function(E) {
    var R = he(E, 2), U = R[1].preview;
    return U;
  }).map(function(E) {
    var R = he(E, 2), U = R[0], G = R[1].url;
    return [U, G];
  })), D = he(Je(0, { value: l, defaultValue: s }), 2), J = D[0], B = D[1];
  function q(E, R, U) {
    return O || y(function(G) {
      return new Map(G).set(E, { url: R, preview: U });
    }), function() {
      O || y(function(z) {
        var M = new Map(z), de = M.delete(E);
        return de ? M : z;
      });
    };
  }
  function te(E, R) {
    return k(function(U) {
      return new Map(U).set(E, oe(R) ? R : {});
    }), function() {
      k(function(G) {
        var z = new Map(G), M = z.delete(E);
        return M ? z : G;
      });
    };
  }
  var W = v.useRef();
  v.useImperativeHandle(a, function() {
    return { reset: function() {
      W.current && W.current.reset();
    } };
  });
  var Q = function(E, R) {
    var U = hr(R) ? b : R;
    d && d(E, U), _(E);
  }, I = function(E) {
    i && i(E), B(E);
  }, A = function(E) {
    var R = 0, U = function(G) {
      var z = o.Children.map(G, function(M) {
        if (M && M.props && M.type) {
          var de = M.type.displayName;
          if (de === "Image") return o.cloneElement(M, { _index: R++ });
        }
        return M && M.props && M.props.children ? o.cloneElement(M, { children: U(M.props.children) }) : M;
      });
      return !at(G) && o.Children.count(G) === 1 ? z[0] : z;
    };
    return U(E);
  }, L = function() {
    var E = Array.from($.values());
    return E.length > 0 ? o.createElement("div", { style: { display: "none" } }, E.map(function(R) {
      return o.createElement("img", { key: R, src: R });
    })) : null;
  };
  return o.createElement(xr.Provider, { value: { previewGroup: true, previewUrlMap: $, previewPropsMap: j, infinite: n, currentIndex: J, setCurrentIndex: I, setPreviewUrlMap: y, registerPreviewUrl: q, registerPreviewProps: te, visible: b, handleVisibleChange: Q } }, A(r), o.createElement(Er, et({ ref: W, src: "", visible: b, onVisibleChange: Q }, g)), f && L());
}
var Pr = v.forwardRef(pa);
Pr.displayName = "ImagePreviewGroup";
var je = function() {
  return je = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, je.apply(this, arguments);
}, ga = function(e, a) {
  var r = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
  return r;
}, ya = function(e, a) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var t = r.call(e), n, l = [], s;
  try {
    for (; (a === void 0 || a-- > 0) && !(n = t.next()).done; ) l.push(n.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      n && !n.done && (r = t.return) && r.call(t);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, _r = function(e) {
  var a, r = v.useContext(fe), t = r.locale, n = r.rtl, l = e.listType, s = e.fileList, i = e.renderUploadList, u = e.renderUploadItem, c = e.prefixCls, f = ga(e, ["listType", "fileList", "renderUploadList", "renderUploadItem", "prefixCls"]), d = ya(v.useState(-1), 2), g = d[0], w = d[1], b = v.useMemo(function() {
    return s.map(function(O) {
      var h = O.url;
      return O.url === void 0 && [S.init, S.success].indexOf(O.status) > -1 && (h = O.originFile && V(URL.createObjectURL) && URL.createObjectURL(O.originFile)), h;
    }).filter(Boolean);
  }, [s]);
  if (V(i)) return o.createElement("div", { className: c + "-list" }, i(s, f));
  var _ = function(O) {
    e.imagePreview && w(O);
  };
  return o.createElement(o.Fragment, null, o.createElement(xn, { className: T(c + "-list", c + "-list-type-" + l, (a = {}, a[c + "-list-rtl"] = n, a)) }, s.map(function(O, h) {
    var P = l === "picture-card" ? o.createElement("div", { className: c + "-list-item " + c + "-list-item-" + O.status }, o.createElement(Zn, je({}, e, { onPreview: function(m) {
      var C;
      _(h), (C = e.onPreview) === null || C === void 0 || C.call(e, m);
    }, file: O, locale: t }))) : o.createElement(Yn, je({}, e, { file: O, locale: t }));
    return V(u) && (P = u(P, O, s)), l === "picture-card" ? o.createElement(Oe, { key: O.uid, timeout: { enter: 200, exit: 400 }, classNames: c + "-slide-inline", onEntered: function(m) {
      m && (m.style.width = "");
    }, onExit: function(m) {
      m && (m.style.width = m.scrollWidth + "px");
    }, onExiting: function(m) {
      m && (m.style.width = 0);
    }, onExited: function(m) {
      m && (m.style.width = 0);
    } }, P) : o.createElement(Oe, { key: O.uid, timeout: { enter: 200, exit: 400 }, classNames: c + "-slide-up", onExit: function(m) {
      m && (m.style.height = m.scrollHeight + "px");
    }, onExiting: function(m) {
      m && (m.style.height = 0);
    }, onExited: function(m) {
      m && (m.style.height = 0);
    } }, P);
  })), l === "picture-card" && e.imagePreview && o.createElement(Pr, { srcList: b, visible: g !== -1, current: g, onChange: _, onVisibleChange: function(O) {
    _(O ? g : -1);
  } }));
};
_r.displayName = "FileList";
function mr(e) {
  var a = e.responseText || e.response;
  if (!a) return a;
  try {
    return JSON.parse(a);
  } catch {
    return a;
  }
}
var ha = function(e) {
  var a = e.onProgress, r = a === void 0 ? He : a, t = e.onError, n = t === void 0 ? He : t, l = e.onSuccess, s = l === void 0 ? He : l, i = e.action, u = e.method, c = e.headers, f = c === void 0 ? {} : c, d = e.name, g = e.file, w = e.data, b = w === void 0 ? {} : w, _ = e.withCredentials, O = _ === void 0 ? false : _;
  function h(j) {
    return typeof j == "function" ? j(g) : j;
  }
  var P = h(d), m = h(b), C = new XMLHttpRequest();
  r && C.upload && (C.upload.onprogress = function(j) {
    var k;
    j.total > 0 && (k = j.loaded / j.total * 100), r(parseInt(k, 10), j);
  }), C.onerror = function(k) {
    n(k);
  }, C.onload = function() {
    if (C.status < 200 || C.status >= 300) return n(mr(C));
    s(mr(C));
  };
  var y = new FormData();
  m && Object.keys(m).map(function(j) {
    return y.append(j, m[j]);
  }), y.append(P || "file", g), C.open(u, i, true), O && "withCredentials" in C && (C.withCredentials = true);
  for (var x in f) f.hasOwnProperty(x) && f[x] !== null && C.setRequestHeader(x, f[x]);
  return C.send(y), { abort: function() {
    C.abort();
  } };
}, yt = function(e, a) {
  var r = oe(a) ? a == null ? void 0 : a.type : a, t = !(oe(a) && a.strict === false);
  if (t && r && e) {
    var n = at(r) ? r : r.split(",").map(function(s) {
      return s.trim();
    }).filter(function(s) {
      return s;
    }), l = (e.name.indexOf(".") > -1 ? "." + e.name.split(".").pop() : "").toLowerCase();
    return n.some(function(s) {
      var i = s && s.toLowerCase(), u = (e.type || "").toLowerCase(), c = u.split("/")[0];
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
}, ba = function(e, a) {
  if (e) {
    var r = [].slice.call(e);
    return a && (r = r.filter(function(t) {
      return yt(t, a);
    })), r;
  }
}, wa = function(e, a, r) {
  var t = [], n = 0, l = function() {
    !n && r(t);
  }, s = function(u) {
    if (n += 1, u != null && u.isFile) {
      u.file(function(g) {
        n -= 1, yt(g, a) && (Object.defineProperty(g, "webkitRelativePath", { value: u.fullPath.replace(/^\//, "") }), t.push(g)), l();
      });
      return;
    }
    if (u != null && u.isDirectory) {
      var c = u.createReader(), f = false, d = function() {
        c.readEntries(function(g) {
          f || (n -= 1, f = true), g.length === 0 ? l() : (d(), g.forEach(s));
        });
      };
      d();
      return;
    }
    n -= 1, l();
  }, i = [].slice.call(e);
  i.forEach(function(u) {
    u.webkitGetAsEntry && s(u.webkitGetAsEntry());
  });
}, Ie = function() {
  return Ie = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, Ie.apply(this, arguments);
}, Ke = function(e, a) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var t = r.call(e), n, l = [], s;
  try {
    for (; (a === void 0 || a-- > 0) && !(n = t.next()).done; ) l.push(n.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      n && !n.done && (r = t.return) && r.call(t);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, pr = function(e, a, r) {
  if (r || arguments.length === 2) for (var t = 0, n = a.length, l; t < n; t++) (l || !(t in a)) && (l || (l = Array.prototype.slice.call(a, 0, t)), l[t] = a[t]);
  return e.concat(l || Array.prototype.slice.call(a));
}, Oa = function(e, a) {
  var r, t, n = Ne(), l = v.useContext(fe).locale, s = Ke(v.useState(false), 2), i = s[0], u = s[1], c = Ke(v.useState(0), 2), f = c[0], d = c[1], g = e.tip, w = e.children, b = e.disabled, _ = e.drag, O = e.listType, h = e.prefixCls, P = e.accept, m = e.multiple, C = { disabled: b };
  return v.useEffect(function() {
    d(0);
  }, [i]), w === null ? null : o.createElement("div", Ie({ className: h + "-trigger", onClick: b ? void 0 : e.onClick }, n({ onPressEnter: function() {
    var y;
    !b && ((y = e.onClick) === null || y === void 0 || y.call(e));
  } }), { ref: a, onDragEnter: function() {
    d(f + 1);
  }, onDragLeave: function(y) {
    var x;
    y.preventDefault(), f === 0 ? (u(false), !b && ((x = e.onDragLeave) === null || x === void 0 || x.call(e, y))) : d(f - 1);
  }, onDrop: function(y) {
    if (y.preventDefault(), !b && e.drag !== false) {
      if (u(false), e.directory) wa(y.dataTransfer.items, P, function($) {
        e.onDragFiles && e.onDragFiles($);
      });
      else {
        var x = [].slice.call(y.dataTransfer.items || []).reduce(function($, D, J) {
          if (D.webkitGetAsEntry) {
            var B = D.webkitGetAsEntry();
            return B != null && B.isDirectory ? pr(pr([], Ke($), false), [J], false) : $;
          }
        }, []), j = [].slice.call(y.dataTransfer.files || []).filter(function($, D) {
          return !x.includes(D);
        }), k = ba(j, P);
        k.length > 0 && e.onDragFiles && e.onDragFiles(m ? k : k.slice(0, 1));
      }
      e.onDrop && e.onDrop(y);
    }
  }, onDragOver: function(y) {
    var x;
    y.preventDefault(), !b && !i && (u(true), (x = e.onDragOver) === null || x === void 0 || x.call(e, y));
  } }), o.isValidElement(w) ? o.createElement("div", { className: T((r = {}, r[h + "-trigger-custom-active"] = i, r)) }, o.cloneElement(w, C)) : O === "picture-card" ? o.createElement("div", { className: h + "-trigger-picture-wrapper" }, o.createElement("div", { className: h + "-trigger-picture", tabIndex: 0, "aria-label": l.Upload.upload }, o.createElement("div", { className: h + "-trigger-picture-text" }, o.createElement($t, null)))) : _ ? o.createElement("div", { className: T(h + "-trigger-drag", (t = {}, t[h + "-trigger-drag-active"] = i, t)), tabIndex: 0, "aria-label": l.Upload.drag }, o.createElement($t, null), o.createElement("p", { className: h + "-trigger-drag-text" }, i ? l.Upload.dragHover : l.Upload.drag), g && o.createElement("div", { className: h + "-trigger-tip" }, g)) : o.createElement(En, Ie({}, C, { "aria-label": l.Upload.upload, type: "primary", className: h + "-trigger-with-icon" }), o.createElement(nt, null), l.Upload.upload));
};
const Ca = v.forwardRef(Oa);
var xa = /* @__PURE__ */ (function() {
  var e = function(a, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
      t.__proto__ = n;
    } || function(t, n) {
      for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
    }, e(a, r);
  };
  return function(a, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(a, r);
    function t() {
      this.constructor = a;
    }
    a.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
})(), H = function() {
  return H = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, H.apply(this, arguments);
}, Ea = function(e, a, r, t) {
  function n(l) {
    return l instanceof r ? l : new r(function(s) {
      s(l);
    });
  }
  return new (r || (r = Promise))(function(l, s) {
    function i(f) {
      try {
        c(t.next(f));
      } catch (d) {
        s(d);
      }
    }
    function u(f) {
      try {
        c(t.throw(f));
      } catch (d) {
        s(d);
      }
    }
    function c(f) {
      f.done ? l(f.value) : n(f.value).then(i, u);
    }
    c((t = t.apply(e, a || [])).next());
  });
}, Pa = function(e, a) {
  var r = { label: 0, sent: function() {
    if (l[0] & 1) throw l[1];
    return l[1];
  }, trys: [], ops: [] }, t, n, l, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (t) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (t = 1, n && (l = c[0] & 2 ? n.return : c[0] ? n.throw || ((l = n.return) && l.call(n), 0) : n.next) && !(l = l.call(n, c[1])).done) return l;
      switch (n = 0, l && (c = [c[0] & 2, l.value]), c[0]) {
        case 0:
        case 1:
          l = c;
          break;
        case 4:
          return r.label++, { value: c[1], done: false };
        case 5:
          r.label++, n = c[1], c = [0];
          continue;
        case 7:
          c = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (l = r.trys, !(l = l.length > 0 && l[l.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            r = 0;
            continue;
          }
          if (c[0] === 3 && (!l || c[1] > l[0] && c[1] < l[3])) {
            r.label = c[1];
            break;
          }
          if (c[0] === 6 && r.label < l[1]) {
            r.label = l[1], l = c;
            break;
          }
          if (l && r.label < l[2]) {
            r.label = l[2], r.ops.push(c);
            break;
          }
          l[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      c = a.call(e, r);
    } catch (f) {
      c = [6, f], n = 0;
    } finally {
      t = l = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: true };
  }
}, _a = (function(e) {
  xa(a, e);
  function a(r) {
    var t = e.call(this, r) || this;
    return t.upload = function(n) {
      t.doUpload(n);
    }, t.abort = function(n) {
      var l = t.state.uploadRequests[n.uid];
      l && (l.abort && l.abort(), t.updateFileStatus(H(H({}, n), { status: S.fail })), t.deleteReq(n.uid));
    }, t.reupload = function(n) {
      t.doUpload(H(H({}, n), { percent: 0, status: S.uploading }));
    }, t.deleteReq = function(n) {
      var l = H({}, t.state.uploadRequests);
      delete l[n], t.setState({ uploadRequests: l });
    }, t.delete = t.deleteReq, t.updateFileStatus = function(n, l) {
      l === void 0 && (l = t.props.fileList);
      var s = t.props.onFileStatusChange, i = "uid" in n ? "uid" : "name";
      s && s(l.map(function(u) {
        return u[i] === n[i] ? n : u;
      }), n);
    }, t.getTargetFile = function(n) {
      var l = "uid" in n ? "uid" : "name", s = t.props.fileList.find(function(i) {
        return i[l] === n[l];
      });
      return s;
    }, t.doUpload = function(n) {
      return Ea(t, void 0, void 0, function() {
        var l, s, i, u, c, f, d, g, w, b, _, O, h, P, m = this;
        return Pa(this, function(C) {
          switch (C.label) {
            case 0:
              return l = this.props, s = l.action, i = l.headers, u = l.name, c = l.data, f = l.withCredentials, d = l.customRequest, g = l.method, w = function(y, x) {
                var j = m.getTargetFile(n);
                j && (j.status = S.uploading, j.percent = y, m.props.onProgress && m.props.onProgress(j, x));
              }, b = function(y) {
                var x = m.getTargetFile(n);
                x && (x.status = S.success, x.response = y, m.updateFileStatus(x)), m.deleteReq(n.uid);
              }, _ = function(y) {
                var x = m.getTargetFile(n);
                x && (x.status = S.fail, x.response = y, m.updateFileStatus(x)), m.deleteReq(n.uid);
              }, O = { onProgress: w, onSuccess: b, onError: _, headers: i, name: u, file: n.originFile, data: c, withCredentials: f }, this.updateFileStatus(n), s ? (h = ha(H(H({}, O), { action: s, method: g })), [3, 3]) : [3, 1];
            case 1:
              return d ? [4, d(O)] : [3, 3];
            case 2:
              h = C.sent(), C.label = 3;
            case 3:
              return this.setState({ uploadRequests: H(H({}, this.state.uploadRequests), (P = {}, P[n.uid] = h, P)) }), [2];
          }
        });
      });
    }, t.handleFiles = function(n) {
      var l = t.props, s = l.limit, i = l.fileList, u = l.onExceedLimit, c = l.autoUpload;
      if (br(s) && s < i.length + n.length) return u && u(n, i);
      var f = function(d, g) {
        var w = t.props.fileList || [], b = { uid: "" + String(+/* @__PURE__ */ new Date()) + g, originFile: d, percent: 0, status: S.init, name: d.name };
        w.push(b), t.updateFileStatus(b, w), c && setTimeout(function() {
          t.doUpload(H(H({}, b), { status: S.uploading }));
        }, 0);
      };
      n.forEach(function(d, g) {
        yt(d, t.props.accept) && (V(t.props.beforeUpload) ? Promise.resolve(t.props.beforeUpload(d, n)).then(function(w) {
          if (w !== false) {
            var b = Pn(w) ? w : d;
            f(b, g);
          }
        }).catch(function(w) {
          console.error(w);
        }) : f(d, g));
      });
    }, t.state = { uploadRequests: {} }, t;
  }
  return a.prototype.render = function() {
    var r = this, t = this.props, n = t.accept, l = t.multiple, s = t.children, i = t.prefixCls, u = t.tip, c = t.disabled, f = t.drag, d = t.listType, g = t.hide, w = t.directory, b = t.onDrop, _ = t.onDragOver, O = t.onDragLeave;
    return o.createElement(o.Fragment, null, o.createElement("input", H({ key: "trigger-input", ref: function(h) {
      return r.inputRef = h;
    }, style: { display: "none" }, type: "file", accept: oe(n) ? n == null ? void 0 : n.type : n, multiple: l }, w ? { webkitdirectory: "true" } : {}, { onChange: function(h) {
      var P = h.target.files;
      P && (r.handleFiles([].slice.call(P)), r.inputRef.value = "");
    }, onClick: function(h) {
      h.stopPropagation();
    } })), o.createElement(Oe, { key: "trigger-node", in: !g, timeout: 100, unmountOnExit: true, classNames: "fadeIn" }, o.createElement(Ca, { directory: w, tip: u, multiple: l, accept: n, disabled: c, drag: f, listType: d, onDrop: b, onDragOver: _, onDragLeave: O, onDragFiles: this.handleFiles, onClick: function() {
      !c && r.inputRef && r.inputRef.click();
    }, prefixCls: i }, V(s) ? s({ fileList: this.props.fileList }) : s)), u && d !== "picture-card" && !f ? o.createElement("div", { key: "trigger-tip", className: i + "-trigger-tip" }, u) : null);
  }, a;
})(o.Component), ue = function() {
  return ue = Object.assign || function(e) {
    for (var a, r = 1, t = arguments.length; r < t; r++) {
      a = arguments[r];
      for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, ue.apply(this, arguments);
}, ja = function(e, a) {
  var r = {};
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && a.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) a.indexOf(t[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[n]) && (r[t[n]] = e[t[n]]);
  return r;
}, Ia = function(e, a) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var t = r.call(e), n, l = [], s;
  try {
    for (; (a === void 0 || a-- > 0) && !(n = t.next()).done; ) l.push(n.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      n && !n.done && (r = t.return) && r.call(t);
    } finally {
      if (s) throw s.error;
    }
  }
  return l;
}, Xe = function(e) {
  var a = [].concat(e || []).filter(Boolean);
  return a.reduce(function(r, t, n) {
    if (t.uid) {
      var l = a.findIndex(function(u) {
        return t.uid === u.uid && t !== u;
      }), s = ue({ status: S.success, percent: 100 }, t);
      l === -1 ? r.push(s) : r.splice(l, 1, s);
    } else {
      var i = "" + String(+/* @__PURE__ */ new Date()) + n;
      r.push(ue({ uid: i, status: S.success, percent: 100 }, t));
    }
    return r;
  }, []);
}, Na = { listType: "text", autoUpload: true, showUploadList: true, beforeUpload: function() {
  return true;
}, method: "post" }, Sa = function(e, a) {
  var r, t = v.useContext(fe), n = t.getPrefixCls, l = t.componentConfig, s = t.rtl, i = rt(e, Na, l == null ? void 0 : l.Upload), u = n("upload"), c = v.useRef(), f = v.useRef(), d = Ia(v.useState(function() {
    return "fileList" in i ? Xe(i.fileList) : "defaultFileList" in i ? Xe(i.defaultFileList) : [];
  }), 2), g = d[0], w = d[1], b = "fileList" in i ? Xe(i.fileList) : g, _ = function(I, A) {
    var L;
    "fileList" in i || w(I), (L = i.onChange) === null || L === void 0 || L.call(i, I, A);
  }, O = function(I) {
    I && setTimeout(function() {
      c.current && c.current.upload(I);
    }, 0);
  }, h = function(I) {
    c.current && c.current.reupload(I), i.onReupload && i.onReupload(I);
  }, P = function(I) {
    if (I) {
      var A = i.onRemove;
      Promise.resolve(V(A) ? A(I, b) : A).then(function(L) {
        L !== false && (c.current && c.current.abort(I), _(b.filter(function(E) {
          return E.uid !== I.uid;
        }), I));
      }).catch(function(L) {
        console.error(L);
      });
    }
  }, m = function(I) {
    I && c.current && c.current.abort(I);
  };
  v.useImperativeHandle(a, function() {
    return { submit: function(I) {
      var A = [];
      I ? A = [I] : A = b.filter(function(L) {
        return L.status === S.init;
      }), A.forEach(function(L) {
        O(L);
      });
    }, abort: function(I) {
      m(I);
    }, reupload: function(I) {
      h(I);
    }, getRootDOMNode: function() {
      return f.current;
    } };
  });
  var C = i.listType, y = i.className, x = i.style, j = i.renderUploadItem, k = i.showUploadList, $ = i.renderUploadList, D = i.progressProps, J = i.imagePreview, B = ja(i, ["listType", "className", "style", "renderUploadItem", "showUploadList", "renderUploadList", "progressProps", "imagePreview"]), q = br(i.limit) ? { hideOnExceedLimit: true, maxCount: i.limit } : ue({ hideOnExceedLimit: true }, i.limit), te = q.maxCount && q.maxCount <= b.length, W = "disabled" in i ? i.disabled : !q.hideOnExceedLimit && te, Q = o.createElement("div", ue({}, gr(B, ["disabled", "directory", "onReupload", "defaultFileList", "fileList", "autoUpload", "error", "action", "method", "multiple", "name", "accept", "customRequest", "children", "autoUpload", "limit", "drag", "tip", "headers", "data", "withCredentials", "onChange", "onPreview", "onRemove", "onProgress", "onExceedLimit", "beforeUpload", "onDrop", "onDragOver", "onDragLeave"]), { className: T(u, (r = {}, r[u + "-type-" + C] = C, r[u + "-drag"] = i.drag, r[u + "-disabled"] = W, r[u + "-hide"] = q.hideOnExceedLimit && te, r[u + "-rtl"] = s, r), y), style: x, ref: f }), o.createElement(_a, ue({ ref: c }, i, { limit: q.maxCount, hide: q.hideOnExceedLimit && te, disabled: W, prefixCls: u, fileList: b, onProgress: function(I, A) {
    I && ("fileList" in i || w(b.map(function(L) {
      return L.uid === I.uid ? I : L;
    })), i.onProgress && i.onProgress(I, A));
  }, onFileStatusChange: _ })));
  return o.createElement(o.Fragment, null, C !== "picture-card" && Q, k && o.createElement(_r, { imagePreview: J, progressProps: D, showUploadList: k, disabled: i.disabled, listType: C, fileList: b, renderUploadItem: j, renderUploadList: $, onUpload: O, onAbort: m, onRemove: P, onReupload: h, onPreview: i.onPreview, prefixCls: u }), C === "picture-card" && Q, i.tip && C === "picture-card" && o.createElement("div", { className: u + "-trigger-tip" }, i.tip));
}, ka = v.forwardRef(Sa);
ka.displayName = "Upload";
export { it as I, ka as U };
