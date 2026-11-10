import { r as k, u as _r, b as ts, C as es, i as he, R as rt, at as vr, k as gr, l as pi, c as Ze, ax as Ee, ay as Ie, m as vi, aM as yr, z as xr, n as En, a as wr, w as br, o as Pr, f as Zn, _ as Bn, g as Rn, F as l, V as ze, O as Lr, G as At, a6 as Cr, ad as Hi, J as qe, S as Di, U as Tr, a8 as kr, L as Mr, K as Cn } from "./index-BwwIQFuW.js";
import { m as In, t as Dn, p as gi, d as is, i as Sr, c as Fi, e as xe, f as Er, g as $i, b as Ir, h as ge, j as ui, k as ci, l as Tn } from "./inlineTagLayout-AXIysUUt.js";
import { I as Do } from "./index-DistsoRr.js";
import { A as Wi, D as Fo } from "./index-Dm7b4RvN.js";
import { D as Vo } from "./index-CD4FIMXP.js";
var On = function() {
  return On = Object.assign || function(s) {
    for (var u, a = 1, h = arguments.length; a < h; a++) {
      u = arguments[a];
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }
    return s;
  }, On.apply(this, arguments);
}, Ho = function(s, u) {
  var a = typeof Symbol == "function" && s[Symbol.iterator];
  if (!a) return s;
  var h = a.call(s), c, _ = [], v;
  try {
    for (; (u === void 0 || u-- > 0) && !(c = h.next()).done; ) _.push(c.value);
  } catch (w) {
    v = { error: w };
  } finally {
    try {
      c && !c.done && (a = h.return) && a.call(h);
    } finally {
      if (v) throw v.error;
    }
  }
  return _;
}, Or = { maxWidth: 350 }, Nr = { enter: 300, exit: 100 }, jr = { left: 12, right: 12, top: 12, bottom: 12 }, zr = function(s) {
  var u, a = s.style, h = s.disabled, c = s.prefixCls, _ = s.value, v = s.vertical, w = s.tooltipVisible, f = s.tooltipPosition, A = s.formatTooltip, j = s.getTooltipContainer, g = s.onMoving, C = s.onMoveEnd, y = s.onMoveBegin, I = _r(), E = Ho(k.useState(false), 2), P = E[0], z = E[1], R = Ho(ts(false, { value: w }), 2), F = R[0], $ = R[1], G = k.useContext(es).getPrefixCls, b = k.useMemo(function() {
    return f || (v ? "right" : "top");
  }, [f, v]), T = k.useRef(null), M = k.useRef(false), Y = k.useRef(false), N = k.useRef(null);
  function V(Q) {
    Q.stopPropagation(), !h && (ft(Q), z(true), Ee(window, "mousemove", xt), Ee(window, "touchmove", xt), Ee(window, "mouseup", at), Ee(window, "touchend", at), Ee(window, "contextmenu", at));
  }
  function H() {
    M.current = true, Z(), F || (T.current = setTimeout(function() {
      Zt(true);
    }, 50));
  }
  function ut() {
    M.current = false, Y.current || (Z(), T.current = setTimeout(function() {
      Zt(false);
    }, 200));
  }
  function ft(Q) {
    Q.preventDefault();
    var O = document.activeElement;
    O && O.blur && O.blur(), he(y) && y();
  }
  function xt(Q) {
    Y.current = true, Q.type === "touchstart" && (Q.clientY = Q.touches[0].clientY, Q.clientX = Q.touches[0].clientX), he(g) && g(Q.clientX, Q.clientY);
  }
  function at() {
    Y.current = false, z(false), St(), Zt(M.current), he(C) && C();
  }
  function St() {
    Z(), Ie(window, "mousemove", xt), Ie(window, "touchmove", xt), Ie(window, "mouseup", at), Ie(window, "touchend", at), Ie(window, "contextmenu", at);
  }
  function Z() {
    T.current && (clearTimeout(T.current), T.current = null);
  }
  function Zt(Q) {
    if (!Y.current) {
      var O = "tooltipVisible" in s ? w : Q;
      $(O);
    }
  }
  function K() {
    M.current = true, Z();
  }
  var lt = k.useMemo(function() {
    return he(A) ? A(_) : _;
  }, [A, _]);
  function _t(Q) {
    var O = G("tooltip");
    return rt.createElement("div", { className: Ze(O + "-content", O + "-content-" + Q), onMouseLeave: ut, onMouseEnter: K, onClick: function(tt) {
      tt.stopPropagation();
    } }, rt.createElement("div", { className: O + "-content-inner" }, lt));
  }
  return k.useEffect(function() {
    N && N.current && N.current.updatePopupPosition();
  }, [_]), rt.createElement(vr, { style: Or, classNames: "zoomInFadeOut", duration: Nr, showArrow: true, popupAlign: jr, ref: N, popup: function() {
    return _t(b);
  }, popupVisible: F, disabled: w === false, getPopupContainer: j, position: b, childrenPrefix: G("tooltip") }, rt.createElement("div", On({ className: Ze(c + "-button", (u = {}, u[c + "-button-active"] = P, u)), onMouseDown: V, onMouseEnter: H, onMouseLeave: ut, style: a, role: "slider", "aria-valuemax": s.maxValue, "aria-valuemin": s.minValue, "aria-valuenow": _, "aria-disabled": !!h, tabIndex: h ? -1 : 0, "aria-valuetext": gr(lt) || pi(lt) ? String(lt) : void 0 }, I({ onArrowRight: function(Q) {
    var O;
    Q.preventDefault(), (O = s.onArrowEvent) === null || O === void 0 || O.call(s, "addition");
  }, onArrowUp: function(Q) {
    var O;
    Q.preventDefault(), (O = s.onArrowEvent) === null || O === void 0 || O.call(s, "addition");
  }, onArrowLeft: function(Q) {
    var O;
    Q.preventDefault(), (O = s.onArrowEvent) === null || O === void 0 || O.call(s, "subtraction");
  }, onArrowDown: function(Q) {
    var O;
    Q.preventDefault(), (O = s.onArrowEvent) === null || O === void 0 || O.call(s, "subtraction");
  } }))));
};
const Ar = k.memo(zr);
var Zr = function(s, u) {
  var a = typeof Symbol == "function" && s[Symbol.iterator];
  if (!a) return s;
  var h = a.call(s), c, _ = [], v;
  try {
    for (; (u === void 0 || u-- > 0) && !(c = h.next()).done; ) _.push(c.value);
  } catch (w) {
    v = { error: w };
  } finally {
    try {
      c && !c.done && (a = h.return) && a.call(h);
    } finally {
      if (v) throw v.error;
    }
  }
  return _;
};
function Br(s) {
  var u = ("" + s).split(".")[1];
  return u && u.length || 0;
}
function je(s) {
  return s * 100 + "%";
}
function Rr(s, u) {
  var a = Number(s);
  if (u && !isNaN(a)) {
    var h = Zr(u, 2), c = h[0], _ = h[1];
    return is(In(a, c), In(_, c));
  }
  return 0;
}
function ns(s, u) {
  var a = Number(s);
  return u.sort(function(h, c) {
    return h - c;
  }), a >= u[0] && a <= u[1];
}
function kn(s) {
  return s || s === 0;
}
function Dr(s) {
  var u = parseFloat(s), a = u > 1 ? (u / 100).toFixed(2) : u, h = parseFloat(a);
  if (!isNaN(h) && h >= 0 && h <= 1) return h;
}
function Ye(s, u) {
  var a = u.find(function(j) {
    return s >= j.begin && s <= j.end;
  });
  if (a) {
    var h = a.beginOffset, c = a.begin, _ = a.end, v = a.endOffset, w = Rr(s, [c, _]), f = In(v, h), A = Dn(w, f);
    return gi(h, A);
  }
}
function Nn(s) {
  var u = s.slice(0);
  return u.sort(function(a, h) {
    return a - h;
  }), u;
}
function Fr(s) {
  return s.some(function(u, a) {
    return u > s[a + 1];
  });
}
function Vr(s, u) {
  var a = u.indexOf(s);
  if (a === -1) {
    var h = Nn(u.concat(s));
    return a = h.indexOf(s), [Math.max(a - 1, 0), Math.min(a, u.length - 1)];
  }
  return [a, a + 1];
}
var Hr = function(s) {
  var u = s.data, a = u === void 0 ? [] : u, h = s.vertical, c = s.prefixCls, _ = s.reverse, v = s.intervalConfigs;
  return a.length ? rt.createElement("div", { className: c + "-marks" }, a.map(function(w) {
    var f, A, j = w.key, g = w.content, C = je(Ye(+j, v)), y = null;
    return vi(g) && kn(g.text) ? y = g.text : kn(g) && (y = g), kn(y) && rt.createElement("div", { className: c + "-marks-text", "aria-hidden": true, key: j, style: h ? (f = {}, f[_ ? "top" : "bottom"] = C, f) : (A = {}, A[_ ? "right" : "left"] = C, A), onMouseDown: function(I) {
      I.stopPropagation(), he(s.onMouseDown) && s.onMouseDown(parseFloat(j));
    } }, y);
  })) : null;
};
const Wr = k.memo(Hr);
var jn = function() {
  return jn = Object.assign || function(s) {
    for (var u, a = 1, h = arguments.length; a < h; a++) {
      u = arguments[a];
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }
    return s;
  }, jn.apply(this, arguments);
}, $r = function(s) {
  var u = s.data, a = u === void 0 ? [] : u, h = s.valueRange, c = h === void 0 ? [] : h, _ = s.vertical, v = s.prefixCls, w = s.reverse, f = s.intervalConfigs;
  return a.length ? rt.createElement("div", { className: v + "-dots" }, a.map(function(A) {
    var j, g, C, y = A.key, I = A.content, E = je(Ye(+y, f));
    return rt.createElement("div", { className: v + "-dot-wrapper", key: y, style: jn({}, _ ? (j = {}, j[w ? "top" : "bottom"] = E, j) : (g = {}, g[w ? "right" : "left"] = E, g)), onMouseDown: function(P) {
      P.stopPropagation(), he(s.onMouseDown) && s.onMouseDown(parseFloat(y));
    } }, vi(I) && I.dot ? I.dot : rt.createElement("div", { className: Ze(v + "-dot", (C = {}, C[v + "-dot-active"] = ns(y, c), C)) }));
  })) : null;
};
const Ur = k.memo($r);
var ye = function() {
  return ye = Object.assign || function(s) {
    for (var u, a = 1, h = arguments.length; a < h; a++) {
      u = arguments[a];
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }
    return s;
  }, ye.apply(this, arguments);
}, Wo = function(s, u) {
  var a = typeof Symbol == "function" && s[Symbol.iterator];
  if (!a) return s;
  var h = a.call(s), c, _ = [], v;
  try {
    for (; (u === void 0 || u-- > 0) && !(c = h.next()).done; ) _.push(c.value);
  } catch (w) {
    v = { error: w };
  } finally {
    try {
      c && !c.done && (a = h.return) && a.call(h);
    } finally {
      if (v) throw v.error;
    }
  }
  return _;
}, Gr = function(s, u, a) {
  if (a || arguments.length === 2) for (var h = 0, c = u.length, _; h < c; h++) (_ || !(h in u)) && (_ || (_ = Array.prototype.slice.call(u, 0, h)), _[h] = u[h]);
  return s.concat(_ || Array.prototype.slice.call(u));
}, qr = function(s) {
  var u, a = s.value, h = s.range, c = s.min, _ = s.max, v = s.step, w = s.disabled, f = s.prefixCls, A = s.onChange, j = s.extra, g = j === void 0 ? [] : j, C = { min: c, max: _, step: v, disabled: w }, y = Wo(k.useState(a), 2), I = y[0], E = y[1], P = g[0], z = h ? g[1] : g[0];
  k.useEffect(function() {
    E(a);
  }, [a]);
  var R = function($) {
    A == null || A($);
  }, F = function() {
    E(Gr([], Wo(a), false).sort(function($, G) {
      return $ - G;
    }));
  };
  return rt.createElement("div", { className: Ze(f + "-input", (u = {}, u[f + "-input-group"] = h, u)), onBlur: F }, h && [rt.createElement(Do, ye({}, ye(ye({ hideControl: true }, P), C), { value: I[0], key: 0, onChange: function($, G) {
    isNaN($) && $ !== $ || (R([$, I[1]]), P != null && P.onChange && (P == null || P.onChange($, G)));
  } })), rt.createElement("div", { key: 1, className: f + "-input-range" }, rt.createElement("span", { className: f + "-input-range-content" }))], rt.createElement(Do, ye({}, ye(ye({ hideControl: true }, z), C), { key: 2, value: I[1], onChange: function($, G) {
    isNaN($) && $ !== $ || (R([I[0], $]), z != null && z.onChange && (z == null || z.onChange($, G)));
  } })));
};
const Yr = k.memo(qr), Kr = k.memo(function(u) {
  var a = u.min, h = u.max, c = u.valueRange, _ = u.prefixCls, v = u.vertical, w = u.reverse, f = u.intervalConfigs, A = /* @__PURE__ */ new Map(), j = function(C) {
    for (var y = C.step, I = C.begin, E = C.end, P = Math.floor((E - I) / y), z = 0; z <= P; z++) {
      var R = gi(z * y, I);
      if (!(R <= a || R >= h)) {
        var F = je(Ye(R, f));
        A.set(F, { offset: F, isActive: ns(R, c) });
      }
    }
  }, g = k.useMemo(function() {
    return A.clear(), f.forEach(function(C) {
      return j(C);
    }), Array.from(A.values());
  }, [f]);
  return rt.createElement("div", { className: _ + "-ticks" }, g.map(function(C, y) {
    var I, E, P;
    return rt.createElement("div", { key: y, className: Ze(_ + "-tick", (I = {}, I[_ + "-tick-active"] = C.isActive, I)), style: v ? (E = {}, E[w ? "top" : "bottom"] = C.offset, E) : (P = {}, P[w ? "right" : "left"] = C.offset, P) });
  }));
});
var Jr = function(s, u) {
  var a = typeof Symbol == "function" && s[Symbol.iterator];
  if (!a) return s;
  var h = a.call(s), c, _ = [], v;
  try {
    for (; (u === void 0 || u-- > 0) && !(c = h.next()).done; ) _.push(c.value);
  } catch (w) {
    v = { error: w };
  } finally {
    try {
      c && !c.done && (a = h.return) && a.call(h);
    } finally {
      if (v) throw v.error;
    }
  }
  return _;
};
function Xr(s) {
  var u = s.isRange, a = s.min, h = s.max, c = s.onlyMarkValue, _ = s.intervalConfigs, v = s.marks, w = k.useCallback(function(y) {
    var I = _.find(function(G) {
      return y >= G.begin && y <= G.end;
    });
    if (I) {
      var E = I.begin, P = I.step, z = y - E, R = Math.round(z / P), F = Br(P), $ = parseFloat(Dn(P, R).toFixed(F));
      return gi(E, $);
    }
    return y;
  }, [_]), f = k.useCallback(function(y) {
    if (!vi(v) || yr(v)) return console.warn("marks must be an object when onlyMarkValue is true"), a;
    if (v[y]) return y;
    var I = Object.keys(v), E = I.map(function(z) {
      return Math.abs(y - parseFloat(z));
    }), P = E.indexOf(Math.min.apply(null, E));
    return parseFloat(I[P]);
  }, [v, a]), A = k.useCallback(function(y) {
    return xr(y) || y <= a ? a : y >= h ? h : c ? f(y) : w(y);
  }, [f, w, h, a, c]), j = k.useCallback(function(y) {
    return A(y) === y;
  }, [A]), g = k.useCallback(function(y) {
    var I = Jr([a, a], 2), E = I[0], P = I[1];
    if (u) {
      if (En(y)) return E = A(y[0]), y.map(function(z) {
        return A(z);
      });
      console.error("value must be an array when range is true");
    } else pi(y) ? P = A(y) : console.error("value must be a number when range is false");
    return [E, P];
  }, [A, u, a]), C = k.useCallback(function(y, I) {
    var E = I === "subtraction" ? -1 : 1, P = gi(y, E * s.step);
    if (s.onlyMarkValue) {
      var z = Object.keys(s.marks), R = z.findIndex(function(F) {
        return Number(F) === y;
      });
      P = z[R + E] !== void 0 ? Number(z[R + E]) : y;
    }
    return P;
  }, [s.marks, s.onlyMarkValue, s.step]);
  return { getLegalRangeValue: g, getLegalValue: A, isLegalValue: j, getNextMarkValue: C };
}
var Mn = function(s, u) {
  var a = typeof Symbol == "function" && s[Symbol.iterator];
  if (!a) return s;
  var h = a.call(s), c, _ = [], v;
  try {
    for (; (u === void 0 || u-- > 0) && !(c = h.next()).done; ) _.push(c.value);
  } catch (w) {
    v = { error: w };
  } finally {
    try {
      c && !c.done && (a = h.return) && a.call(h);
    } finally {
      if (v) throw v.error;
    }
  }
  return _;
};
function Qr(s) {
  if (s.length < 2) return [];
  for (var u = [], a = 1; a < s.length; a++) {
    var h = s[a - 1], c = s[a];
    u.push([h, c]);
  }
  return u;
}
function ta(s) {
  var u = s.marks, a = u === void 0 ? {} : u, h = s.getIntervalConfig, c = s.max, _ = s.min, v = k.useMemo(function() {
    var j = Object.keys(a).filter(function(I) {
      return pi(+I) && +I >= _ && +I <= c;
    }).sort(function(I, E) {
      return +I > +E ? 1 : -1;
    }), g = j.map(function(I) {
      return { key: I, content: a[I] };
    }), C = j.map(function(I) {
      return +I;
    });
    C.length === 0 ? C = [_, c] : (C[0] > _ && (C.unshift(_), g.unshift({ key: "" + _, content: "" })), C.slice(-1)[0] < c && (C.push(c), g.push({ key: "" + c, content: "" })));
    var y = Qr(C);
    return { markIntervals: y, markList: g };
  }, [a, _, c]), w = v.markIntervals, f = v.markList, A = k.useMemo(function() {
    if (!he(h)) return [{ begin: _, end: c, step: s.step, beginOffset: 0, endOffset: 1, width: 1 }];
    var j = function(P, z) {
      var R = Mn(P, 2), F = R[0], $ = R[1], G = { step: s.step, width: 0 }, b = h([F, $], z) || {}, T = b.step, M = Dr(b.width);
      return pi(T) && T && (G.step = T), pi(M) && M && (G.width = M), G;
    }, g = 1, C = c - _, y = w.map(function(P, z) {
      var R = Mn(P, 2), F = R[0], $ = R[1], G = j([F, $], z), b = G.width;
      if (b) {
        b = Math.min(g, b);
        var T = $ - F;
        C -= T, g -= b;
      }
      return { width: b, step: G.step };
    });
    if (y.every(function(P) {
      var z = P.width;
      return z;
    }) && g) {
      var I = y[w.length - 1];
      I.width += g;
    }
    var E = [];
    return w.forEach(function(P, z) {
      var R = Mn(P, 2), F = R[0], $ = R[1], G = y[z], b = G.step, T = G.width, M = { begin: F, end: $, step: b, beginOffset: 0, endOffset: 0, width: T };
      M.width || (M.width = g * (($ - F) / C));
      var Y = E.length - 1;
      E[Y] && (M.beginOffset = E[Y].endOffset), M.endOffset = Math.min(1, M.beginOffset + M.width), E.push(M);
    }), E;
  }, [h, w, c, _, s.step]);
  return { intervalConfigs: A, markList: f };
}
var Oe = function() {
  return Oe = Object.assign || function(s) {
    for (var u, a = 1, h = arguments.length; a < h; a++) {
      u = arguments[a];
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }
    return s;
  }, Oe.apply(this, arguments);
}, ea = function(s, u) {
  var a = {};
  for (var h in s) Object.prototype.hasOwnProperty.call(s, h) && u.indexOf(h) < 0 && (a[h] = s[h]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var c = 0, h = Object.getOwnPropertySymbols(s); c < h.length; c++) u.indexOf(h[c]) < 0 && Object.prototype.propertyIsEnumerable.call(s, h[c]) && (a[h[c]] = s[h[c]]);
  return a;
}, Se = function(s, u) {
  var a = typeof Symbol == "function" && s[Symbol.iterator];
  if (!a) return s;
  var h = a.call(s), c, _ = [], v;
  try {
    for (; (u === void 0 || u-- > 0) && !(c = h.next()).done; ) _.push(c.value);
  } catch (w) {
    v = { error: w };
  } finally {
    try {
      c && !c.done && (a = h.return) && a.call(h);
    } finally {
      if (v) throw v.error;
    }
  }
  return _;
}, ia = function(s, u, a) {
  if (a || arguments.length === 2) for (var h = 0, c = u.length, _; h < c; h++) (_ || !(h in u)) && (_ || (_ = Array.prototype.slice.call(u, 0, h)), _[h] = u[h]);
  return s.concat(_ || Array.prototype.slice.call(u));
};
Sr.enableBoundaryChecking(false);
var na = { max: 100, min: 0, step: 1 };
function oa(s, u) {
  var a, h, c = k.useContext(es), _ = c.getPrefixCls, v = c.componentConfig, w = c.rtl, f = wr(s, na, v == null ? void 0 : v.Slider), A = f.className, j = f.style, g = f.tooltipVisible, C = f.tooltipPosition, y = f.disabled, I = f.min, E = f.max, P = f.range, z = f.step, R = f.showTicks, F = f.marks, $ = f.onlyMarkValue, G = f.vertical, b = f.showInput, T = f.reverse, M = f.getIntervalConfig, Y = ea(f, ["className", "style", "tooltipVisible", "tooltipPosition", "disabled", "min", "max", "range", "step", "showTicks", "marks", "onlyMarkValue", "vertical", "showInput", "reverse", "getIntervalConfig"]), N = !!P, V = vi(P) ? Oe({}, P) : { draggableBar: false }, H = w ? !T : T, ut = ta({ min: I, max: E, step: z, marks: F, getIntervalConfig: M }), ft = ut.intervalConfigs, xt = ut.markList, at = Xr({ isRange: N, min: I, max: E, onlyMarkValue: $, step: z, intervalConfigs: ft, marks: F }), St = at.getLegalValue, Z = at.getLegalRangeValue, Zt = at.isLegalValue, K = at.getNextMarkValue, lt = Se(ts(N ? [I, I] : I, { defaultValue: f.defaultValue, value: f.value }), 2), _t = lt[0], Q = lt[1], O = Z(_t), tt = k.useRef(O), W = k.useRef(Fr(O));
  br(function() {
    tt.current = Z(_t);
  }, [_t, Z]), W.current && (O = Nn(O));
  var Tt = O[O.length - 1], Et = O[0], Qt = b && !$ && (!N || O.length < 3), ue = k.useMemo(function() {
    return Qt && (En(b) || vi(b)) ? En(b) ? ia([], Se(b), false) : [Oe({}, b), Oe({}, b)] : [];
  }, [Qt, b]), gt = _("slider"), It = k.useRef(null), te = k.useRef({ left: 0, height: 0, top: 0, width: 0 }), ce = k.useRef(false), Ht = k.useRef(0);
  function qt(J) {
    var U = Nn(J);
    return N ? U : U[U.length - 1];
  }
  function ee(J) {
    var U = J.map(function(ot) {
      return St(ot);
    });
    return tt.current = U, U;
  }
  function kt(J, U) {
    var ot = ee(J), ct = qt(ot);
    Q(ct), U === "inputValueChange" ? W.current = ot.some(function(yt, jt) {
      return yt > ot[jt];
    }) : W.current = false, he(f.onChange) && f.onChange(ct);
  }
  function de() {
    if (he(f.onAfterChange)) {
      var J = qt(tt.current);
      f.onAfterChange(J);
    }
  }
  function fe(J) {
    var U, ot = Se([O[0], O[O.length - 1]], 2), ct = ot[0], yt = ot[1];
    return ct > yt && (U = Se([yt, ct], 2), ct = U[0], yt = U[1]), N ? J >= ct && J <= yt : J <= yt;
  }
  function ie(J, U) {
    var ot = te.current, ct = ot.left, yt = ot.top, jt = ot.width, Rt = ot.height, Ot = jt, pe = H ? ct + jt - J : J - ct;
    if (G && (Ot = Rt, pe = H ? U - yt : yt + Rt - U), Ot <= 0) return 0;
    var be = Math.max(is(pe, Ot), 0);
    be = Math.min(1, be);
    var Pe = ft.find(function(zt) {
      return be >= zt.beginOffset && be <= zt.endOffset;
    }), yi = Pe.begin, xi = Pe.beginOffset, wi = Pe.step, Gi = Pe.endOffset, Je = Pe.end, qi = be - xi, Yi = Gi - xi, Ki = qi / Yi * (Je - yi), Ji = Math.round(Ki / wi);
    return gi(yi, Dn(Ji, wi));
  }
  function Be(J) {
    var U, ot, ct, yt = Se(J, 2), jt = yt[0], Rt = yt[1];
    jt > Rt && (U = Se([Rt, jt], 2), jt = U[0], Rt = U[1]);
    var Ot = je(jt), pe = je(1 - Rt);
    return G ? (ot = {}, ot[H ? "top" : "bottom"] = Ot, ot[H ? "bottom" : "top"] = pe, ot) : (ct = {}, ct[H ? "right" : "left"] = Ot, ct[H ? "left" : "right"] = pe, ct);
  }
  function me(J) {
    var U, ot;
    return G ? (U = {}, U[H ? "top" : "bottom"] = je(J), U) : (ot = {}, ot[H ? "right" : "left"] = je(J), ot);
  }
  function ne() {
    var J = { getTooltipContainer: f.getTooltipContainer, formatTooltip: f.formatTooltip };
    return "tooltipPosition" in f && (J.tooltipPosition = C), "tooltipVisible" in f && (J.tooltipVisible = g), J;
  }
  function Yt() {
    te.current = It.current.getBoundingClientRect();
  }
  function Bt(J) {
    Yt();
    var U = ie(J.clientX, J.clientY);
    V.draggableBar && fe(U) ? (Ht.current = St(U), Ee(window, "mousemove", et), Ee(window, "mouseup", mt)) : oe(U);
  }
  function oe(J) {
    if (!y) {
      var U = St(J), ot = Se(Vr(U, O), 2), ct = ot[0], yt = ot[1], jt = O[ct], Rt = O[yt], Ot = O.slice(0);
      N && Rt - U > U - jt ? (Ot[ct] = U, kt(Ot, "jumpToClick")) : (Ot[yt] = U, kt(Ot, "jumpToClick")), de();
    }
  }
  function we(J) {
    kt(J, "inputValueChange"), de();
  }
  function Ke(J, U, ot) {
    ce.current = true;
    var ct = O.slice(0);
    ct[ot] = ie(J, U), kt(ct, "mousemove");
  }
  function m() {
    ce.current = false, de();
  }
  function B(J, U) {
    if (!y) {
      var ot = O.slice(0);
      ot[U] = K(O[U], J), kt(ot);
    }
  }
  function et(J) {
    var U = St(ie(J.clientX, J.clientY)), ot = U - Ht.current, ct = O.map(function(yt) {
      return yt + ot;
    });
    ct.every(function(yt) {
      return Zt(yt);
    }) && kt(ct, "mousemove");
  }
  function mt() {
    Ie(window, "mousemove", et), Ie(window, "mouseup", mt), de();
  }
  return rt.createElement("div", Oe({}, Pr(Y, ["defaultValue", "value", "onChange", "getTooltipContainer", "formatTooltip", "onAfterChange"]), { className: Ze(gt, (a = {}, a[gt + "-vertical"] = G, a[gt + "-with-marks"] = F, a[gt + "-reverse"] = H, a[gt + "-rtl"] = w, a), A), style: j, ref: u }), rt.createElement("div", { className: gt + "-wrapper" }, rt.createElement("div", { ref: It, className: Ze(gt + "-road", (h = {}, h[gt + "-road-disabled"] = y, h[gt + "-road-vertical"] = G, h)), onMouseDown: Bt }, rt.createElement("div", { className: gt + "-bar", style: Be([Ye(Et, ft), Ye(Tt, ft)]) }), R && rt.createElement(Kr, { intervalConfigs: ft, min: I, max: E, valueRange: [Et, Tt], prefixCls: gt, vertical: G, reverse: H }), rt.createElement(Ur, { data: xt, intervalConfigs: ft, valueRange: [Et, Tt], vertical: G, prefixCls: gt, reverse: H, onMouseDown: oe }), rt.createElement(Wr, { data: xt, intervalConfigs: ft, vertical: G, prefixCls: gt, reverse: H, onMouseDown: oe }), O.map(function(J, U) {
    return !N && U !== O.length - 1 ? null : rt.createElement(Ar, Oe({ key: U, style: me(Ye(J, ft)), disabled: y, prefixCls: gt, value: J, maxValue: E, minValue: I, vertical: G }, ne(), { onMoveBegin: Yt, onMoving: function(ot, ct) {
      return Ke(ot, ct, U);
    }, onMoveEnd: m, onArrowEvent: function(ot) {
      return B(ot, U);
    } }));
  })), Qt && rt.createElement(Yr, { min: I, max: E, step: z, value: O, range: N, disabled: y, prefixCls: gt, onChange: we, extra: ue })));
}
var os = k.forwardRef(oa);
os.displayName = "Slider";
const sa = k.memo(os);
function $o(s, u) {
  var a = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(s);
    u && (h = h.filter(function(c) {
      return Object.getOwnPropertyDescriptor(s, c).enumerable;
    })), a.push.apply(a, h);
  }
  return a;
}
function Uo(s) {
  for (var u = 1; u < arguments.length; u++) {
    var a = arguments[u] != null ? arguments[u] : {};
    u % 2 ? $o(Object(a), true).forEach(function(h) {
      Rn(s, h, a[h]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : $o(Object(a)).forEach(function(h) {
      Object.defineProperty(s, h, Object.getOwnPropertyDescriptor(a, h));
    });
  }
  return s;
}
function ra(s, u) {
  var a = k.useContext(Zn), h = a.prefixCls, c = h === void 0 ? "arco" : h, _ = s.spin, v = s.className, w = Uo(Uo({ "aria-hidden": true, focusable: false, ref: u }, s), {}, { className: "".concat(v ? v + " " : "").concat(c, "-icon ").concat(c, "-icon-arrow-right") });
  return _ && (w.className = "".concat(w.className, " ").concat(c, "-icon-loading")), delete w.spin, delete w.isIcon, rt.createElement("svg", Bn({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, w), rt.createElement("path", { d: "m27.728 11.27 12.728 12.728-12.728 12.728M5 24h34.295" }));
}
var Ne = rt.forwardRef(ra);
Ne.defaultProps = { isIcon: true };
Ne.displayName = "IconArrowRight";
function Go(s, u) {
  var a = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(s);
    u && (h = h.filter(function(c) {
      return Object.getOwnPropertyDescriptor(s, c).enumerable;
    })), a.push.apply(a, h);
  }
  return a;
}
function qo(s) {
  for (var u = 1; u < arguments.length; u++) {
    var a = arguments[u] != null ? arguments[u] : {};
    u % 2 ? Go(Object(a), true).forEach(function(h) {
      Rn(s, h, a[h]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : Go(Object(a)).forEach(function(h) {
      Object.defineProperty(s, h, Object.getOwnPropertyDescriptor(a, h));
    });
  }
  return s;
}
function aa(s, u) {
  var a = k.useContext(Zn), h = a.prefixCls, c = h === void 0 ? "arco" : h, _ = s.spin, v = s.className, w = qo(qo({ "aria-hidden": true, focusable: false, ref: u }, s), {}, { className: "".concat(v ? v + " " : "").concat(c, "-icon ").concat(c, "-icon-swap") });
  return _ && (w.className = "".concat(w.className, " ").concat(c, "-icon-loading")), delete w.spin, delete w.isIcon, rt.createElement("svg", Bn({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, w), rt.createElement("path", { d: "M5 17h35.586c.89 0 1.337-1.077.707-1.707L33 7M43 31H7.414c-.89 0-1.337 1.077-.707 1.707L15 41" }));
}
var Fn = rt.forwardRef(aa);
Fn.defaultProps = { isIcon: true };
Fn.displayName = "IconSwap";
function Yo(s, u) {
  var a = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(s);
    u && (h = h.filter(function(c) {
      return Object.getOwnPropertyDescriptor(s, c).enumerable;
    })), a.push.apply(a, h);
  }
  return a;
}
function Ko(s) {
  for (var u = 1; u < arguments.length; u++) {
    var a = arguments[u] != null ? arguments[u] : {};
    u % 2 ? Yo(Object(a), true).forEach(function(h) {
      Rn(s, h, a[h]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : Yo(Object(a)).forEach(function(h) {
      Object.defineProperty(s, h, Object.getOwnPropertyDescriptor(a, h));
    });
  }
  return s;
}
function la(s, u) {
  var a = k.useContext(Zn), h = a.prefixCls, c = h === void 0 ? "arco" : h, _ = s.spin, v = s.className, w = Ko(Ko({ "aria-hidden": true, focusable: false, ref: u }, s), {}, { className: "".concat(v ? v + " " : "").concat(c, "-icon ").concat(c, "-icon-refresh") });
  return _ && (w.className = "".concat(w.className, " ").concat(c, "-icon-loading")), delete w.spin, delete w.isIcon, rt.createElement("svg", Bn({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, w), rt.createElement("path", { d: "M38.837 18C36.463 12.136 30.715 8 24 8 15.163 8 8 15.163 8 24s7.163 16 16 16c7.455 0 13.72-5.1 15.496-12M40 8v10H30" }));
}
var Vn = rt.forwardRef(la);
Vn.defaultProps = { isIcon: true };
Vn.displayName = "IconRefresh";
const _i = (s) => s.slice(0, 4);
function ha(s, u) {
  var a, h;
  if ((s.key === "Enter" || s.key === " ") && (s.preventDefault(), u()), s.key === "ArrowRight" || s.key === "ArrowLeft") {
    s.preventDefault();
    const c = Array.from(((a = s.currentTarget.ownerSVGElement) == null ? void 0 : a.querySelectorAll('[tabindex="0"]')) ?? []);
    (h = c[(c.indexOf(s.currentTarget) + (s.key === "ArrowRight" ? 1 : c.length - 1)) % c.length]) == null || h.focus();
  }
}
function zn({ series: s }) {
  return l.jsx("div", { className: "ha-legend", children: s.map((u, a) => l.jsxs("span", { children: [l.jsx("i", { style: { background: xe(a) } }), u.name] }, u.id)) });
}
function fi({ series: s, unit: u = "分", onPoint: a, onSeriesClick: h, max: c, embedded: _ = false }) {
  return [...new Set(s.flatMap((w) => w.points.map((f) => f.time)))].sort().length ? l.jsxs("div", { className: "ha-chart-block", children: [l.jsxs("div", { className: "ha-chart-unit", children: ["单位：", u] }), l.jsx(Er, { series: s, unit: u, max: c, onPoint: a, onSeriesClick: h, embedded: _ })] }) : l.jsx(ze, { description: "当前周期暂无趋势数据" });
}
function ua({ bubbles: s, onPoint: u }) {
  const a = [...new Set(s.map((c) => c.time))].sort(), h = [...new Map(s.map((c) => [c.hotspotId, c.hotspotName])).entries()];
  return h.length ? l.jsxs("div", { className: "ha-heatmap", children: [l.jsx("div", { className: "ha-chart-unit", children: "数值为热度指数，单位：分；颜色越深，热度越高" }), l.jsx("div", { className: "ha-table-wrap", children: l.jsxs("table", { children: [l.jsx("thead", { children: l.jsxs("tr", { children: [l.jsx("th", { children: "热点主题" }), a.map((c) => l.jsx("th", { children: _i(c) }, c))] }) }), l.jsx("tbody", { children: h.map(([c, _], v) => l.jsxs("tr", { children: [l.jsx("th", { children: _ }), a.map((w) => {
    var A;
    const f = (A = s.find((j) => j.hotspotId === c && j.time === w)) == null ? void 0 : A.heatValue;
    return l.jsx("td", { children: f != null ? l.jsx("button", { style: { background: $i(v, 0.08 + f / 100 * 0.85), color: "#000" }, onClick: () => u(c), "aria-label": `${_}，${_i(w)}年，热度${f}分，查看详情`, children: f.toFixed(1) }) : "—" }, w);
  })] }, c)) })] }) })] }) : l.jsx(ze, { description: "当前条件暂无热点数据" });
}
function ca({ bubbles: s, onPoint: u }) {
  if (!s.length) return l.jsx(ze, { description: "当前周期暂无气泡数据" });
  const a = [...new Set(s.map((g) => g.time))].sort(), h = 960, c = 330, _ = 60, v = 45, w = 32, f = 40, A = Math.max(1, ...s.map((g) => g.patentCount)), j = [...new Set(s.map((g) => g.hotspotId))];
  return l.jsxs("div", { className: "ha-chart-block", children: [l.jsx("div", { className: "ha-chart-unit", children: "横轴：年份 · 纵轴：热度指数（分）· 气泡面积：年度专利数（件）" }), l.jsxs("svg", { className: "ha-bubble-chart", viewBox: `0 0 ${h} ${c}`, role: "img", "aria-label": "年度热点气泡图，气泡面积表示专利数量，点击查看热点详情", children: [[0, 25, 50, 75, 100].map((g) => l.jsxs("g", { children: [l.jsx("line", { x1: _, x2: h - v, y1: w + (1 - g / 100) * (c - w - f), y2: w + (1 - g / 100) * (c - w - f), className: "ha-grid-line" }), l.jsx("text", { x: _ - 12, y: w + (1 - g / 100) * (c - w - f) + 4, textAnchor: "end", children: g })] }, g)), a.map((g, C) => l.jsx("text", { x: _ + C / Math.max(1, a.length - 1) * (h - _ - v), y: c - 12, textAnchor: "middle", children: _i(g) }, g)), s.map((g) => l.jsxs("g", { tabIndex: 0, role: "button", className: "ha-chart-point", "aria-label": `${g.hotspotName}，${_i(g.time)}年，热度${g.heatValue}分，专利${g.patentCount}件`, onClick: () => u(g.hotspotId), onKeyDown: (C) => ha(C, () => u(g.hotspotId)), children: [l.jsxs("title", { children: [g.hotspotName, " · ", _i(g.time), "年 · ", g.heatValue, "分 · ", g.patentCount, "件专利"] }), l.jsx("circle", { cx: _ + a.indexOf(g.time) / Math.max(1, a.length - 1) * (h - _ - v) + (j.indexOf(g.hotspotId) - (j.length - 1) / 2) * 6, cy: w + (1 - g.heatValue / 100) * (c - w - f), r: 4 + Math.sqrt(g.patentCount / A) * 17, fill: xe(j.indexOf(g.hotspotId)), fillOpacity: ".4", stroke: xe(j.indexOf(g.hotspotId)) })] }, g.hotspotId + g.time))] })] });
}
function Jo({ domains: s, compact: u = false }) {
  if (!s.length) return l.jsx(ze, { description: "暂无领域分布" });
  const a = 2 * Math.PI * 68, h = s.reduce((_, v) => _ + v.count, 0);
  let c = 0;
  return l.jsxs("div", { className: `ha-donut-layout ${u ? "ha-donut-compact" : ""}`, children: [l.jsxs("svg", { viewBox: "0 0 190 190", role: "img", "aria-label": `技术领域热点分布，共${h}个热点`, children: [s.map((_, v) => {
    const w = _.count / h * a, f = c;
    return c += w, l.jsx("circle", { cx: "95", cy: "95", r: "68", fill: "none", stroke: Fi[v % Fi.length], strokeWidth: "18", strokeDasharray: `${Math.max(0, w - 2)} ${a - Math.max(0, w - 2)}`, strokeDashoffset: -f, transform: "rotate(-90 95 95)", children: l.jsxs("title", { children: [_.domainName, "：", _.count, "个 · ", _.share, "%"] }) }, _.domainId);
  }), l.jsx("text", { x: "95", y: "94", textAnchor: "middle", className: "ha-donut-value", children: h }), l.jsx("text", { x: "95", y: "117", textAnchor: "middle", children: "技术热点" })] }), l.jsx("div", { className: "ha-domain-legend", children: s.map((_, v) => l.jsxs("div", { children: [l.jsx("i", { style: { background: Fi[v % Fi.length] } }), l.jsx("span", { title: _.domainName, children: _.domainName }), l.jsxs("b", { children: [_.share, "%"] })] }, _.domainId)) })] });
}
function da({ topics: s }) {
  const u = [{ key: "heatIndex", name: "热度指数" }, { key: "paperCount", name: "论文数量" }, { key: "patentCount", name: "专利数量" }, { key: "investmentEventCount", name: "投资事件" }], a = u.map((f) => Math.max(1, ...s.map((A) => A[f.key]))), h = 270, c = 155, _ = 112, v = (f, A) => [h + Math.cos(-Math.PI / 2 + f * Math.PI / 2) * _ * A, c + Math.sin(-Math.PI / 2 + f * Math.PI / 2) * _ * A], w = (f) => u.map((A, j) => v(j, f).join(",")).join(" ");
  return l.jsxs("div", { children: [l.jsxs("svg", { className: "ha-radar-chart", viewBox: "0 0 540 320", role: "img", "aria-label": "热度、论文、专利、投资事件四维雷达对比，各轴按所选主题最大值归一化", children: [[0.25, 0.5, 0.75, 1].map((f) => l.jsx("polygon", { points: w(f), fill: "none", stroke: "#E5E6EB" }, f)), u.map((f, A) => {
    const [j, g] = v(A, 1), [C, y] = v(A, 1.27);
    return l.jsxs("g", { children: [l.jsx("line", { x1: h, y1: c, x2: j, y2: g, stroke: "#E5E6EB" }), l.jsx("text", { x: C, y: y + 4, textAnchor: "middle", children: f.name })] }, f.key);
  }), s.map((f, A) => l.jsxs("g", { children: [l.jsx("polygon", { points: u.map((j, g) => v(g, f[j.key] / a[g]).join(",")).join(" "), stroke: xe(A), strokeWidth: "2", fill: xe(A), fillOpacity: ".1" }), u.map((j, g) => {
    const [C, y] = v(g, f[j.key] / a[g]);
    return l.jsx("circle", { cx: C, cy: y, r: "3", fill: xe(A), children: l.jsxs("title", { children: [f.topicName, " · ", j.name, "：", f[j.key]] }) }, j.key);
  })] }, f.topicId))] }), l.jsx("p", { className: "ha-note", children: "各轴按所选主题中的最大值归一化，仅作相对对比。" })] });
}
const Ae = {};
(() => {
  const s = [{ id: "topic_001", hotspotId: "hs_001", name: "生成式人工智能", industry: "industry_ai", domain: "生成式人工智能", heat: 92.6, keywords: ["大模型", "智能体", "多模态", "推理优化", "知识增强"], technologies: ["多模态大模型", "智能体协同"], institutions: ["海岚人工智能研究院（示例）", "澄川智能科技（示例）"], summary: "从基础模型能力提升，逐步走向多模态理解与行业任务协同。", patent: "面向多模态任务的模型协同处理方法", paper: "知识增强与智能体协同的应用研究", analysis: "围绕模型推理与知识检索的协同展开，体现了从通用能力向具体场景落地的技术路径。", opinion: "应结合具体业务场景评估模型效果，持续关注多模态交互与智能体协同的应用进展。" }, { id: "topic_002", hotspotId: "hs_002", name: "具身智能", industry: "industry_ai", domain: "智能机器人", heat: 87.8, keywords: ["机器人", "具身智能", "感知", "运动控制", "人机协作"], technologies: ["视觉感知", "机器人运动控制"], institutions: ["远舟机器人研究中心（示例）", "星原智能实验室（示例）"], summary: "感知、决策与运动控制逐步结合，推动机器人进入更复杂的应用环境。", patent: "面向复杂环境的机器人感知控制方法", paper: "具身智能的感知与动作协同研究", analysis: "聚焦环境感知和动作规划之间的联系，反映了机器人从单一任务向环境适应能力演进的方向。", opinion: "关注感知与控制协同的稳定性，结合真实场景任务验证技术适用范围。" }, { id: "topic_003", hotspotId: "hs_003", name: "固态电池", industry: "industry_energy", domain: "先进储能", heat: 84.5, keywords: ["固态电池", "电解质", "储能", "界面稳定", "材料体系"], technologies: ["固态电解质", "电池界面工程"], institutions: ["青屿储能研究院（示例）", "致远能源科技（示例）"], summary: "围绕电解质材料与界面稳定性展开研究，逐步推进工艺验证。", patent: "固态电池电解质界面处理方法", paper: "固态储能材料与界面性能研究", analysis: "着重分析材料与界面的协同关系，反映了从材料探索向工艺验证的发展方向。", opinion: "材料性能与制造工艺需要同步验证，应持续观察工程化应用的进展。" }, { id: "topic_004", hotspotId: "hs_004", name: "氢能储运", industry: "industry_energy", domain: "氢能技术", heat: 78.4, keywords: ["氢能", "储运", "催化材料", "产业应用", "安全性"], technologies: ["储氢材料", "氢气运输"], institutions: ["启航氢能实验室（示例）", "清源能源研究中心（示例）"], summary: "储氢材料和运输工艺持续演进，研究逐步覆盖产业应用场景。", patent: "一种储氢材料的制备与应用方法", paper: "氢能储存及运输技术研究", analysis: "围绕储存效率与运输过程的适配性展开，体现了从单一材料研究向应用系统衔接的方向。", opinion: "应结合不同应用场景观察储运路线的适配性，关注材料与工艺协同。" }, { id: "topic_005", hotspotId: "hs_005", name: "合成生物学", industry: "industry_bio", domain: "生物制造", heat: 80.3, keywords: ["合成生物", "细胞工厂", "生物制造", "代谢调控", "工艺优化"], technologies: ["细胞工厂", "代谢工程"], institutions: ["森禾生物研究院（示例）", "百川生物科技（示例）"], summary: "通过代谢调控和工艺优化，推动生物制造从实验探索走向场景验证。", patent: "细胞工厂代谢通路调控方法", paper: "面向生物制造的代谢工程研究", analysis: "关注细胞代谢路径和生产工艺的联系，呈现从机制研究向制造过程优化的演进。", opinion: "应综合考虑技术路线与应用条件，持续关注工艺放大环节的验证进展。" }, { id: "topic_006", hotspotId: "hs_006", name: "细胞与基因治疗", industry: "industry_bio", domain: "细胞与基因技术", heat: 75.6, keywords: ["细胞治疗", "基因递送", "载体", "工艺研究", "转化研究"], technologies: ["细胞工程", "基因递送"], institutions: ["云杉生命科学中心（示例）", "源启生物实验室（示例）"], summary: "围绕递送系统与细胞工艺开展研究，持续探索技术转化路径。", patent: "细胞工程中的基因递送方法", paper: "细胞工艺与基因载体的协同研究", analysis: "侧重递送系统与细胞工艺的关联，体现研究路线从单点方法走向协同验证。", opinion: "应依据具体研究场景理解技术边界，关注递送方法和细胞工艺的协同发展。" }], u = [{ id: "industry_ai", name: "人工智能" }, { id: "industry_energy", name: "新能源" }, { id: "industry_bio", name: "生物医药" }], a = [{ id: "region_bj", name: "北京", x: 0.19, y: 0.32 }, { id: "region_sh", name: "上海", x: 0.54, y: 0.25 }, { id: "region_sz", name: "深圳", x: 0.79, y: 0.6 }, { id: "region_hz", name: "杭州", x: 0.4, y: 0.7 }, { id: "region_sz2", name: "苏州", x: 0.69, y: 0.19 }, { id: "region_gz", name: "广州", x: 0.17, y: 0.78 }], h = [2021, 2022, 2023, 2024, 2025, 2026].map((g) => `${g}-06-30`), c = [];
  s.forEach((g) => {
    g.technologyIds = g.technologies.map((C) => {
      let y = c.find((I) => I.name === C);
      return y || (y = { id: "tech_" + String(c.length + 1).padStart(2, "0"), name: C }, c.push(y)), y.id;
    });
  });
  const _ = [{ value: "high", label: "高" }, { value: "medium", label: "中" }, { value: "low", label: "低" }], v = [["low", "medium", "medium", "high", "high", "high"], ["low", "low", "medium", "high", "high", "high"], ["low", "low", "low", "medium", "medium", "medium"], ["low", "low", "medium", "low", "low", "low"], ["low", "low", "medium", "medium", "medium", "medium"], ["low", "low", "low", "low", "medium", "medium"]], w = [], f = [], A = [];
  s.forEach((g, C) => {
    h.forEach((y, I) => {
      const E = 3.1 * Math.sin(I * 0.85 + C * 0.71) + 1.4 * Math.cos(I * 1.3 + C * 1.7), P = 3.1 * Math.sin(5 * 0.85 + C * 0.71) + 1.4 * Math.cos(5 * 1.3 + C * 1.7), z = Math.round((g.heat - 23 * (1 - I / (h.length - 1)) + E - P) * 10) / 10, R = Object.fromEntries(g.keywords.map((F, $) => [F, Math.max(1, 22 - C * 2 - $ * 3 + (I + C + $) % 7)]));
      A.push({ topicId: g.id, hotspotId: g.hotspotId, hotspotName: g.name, industryId: g.industry, time: y, heatValue: z, heatLevel: v[C][I], keywordCounts: R });
    });
    for (let y = 0; y < 15; y++) {
      if ((C * 3 + y) % 5 === 0) continue;
      const I = h[[0, 1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 2][(y * 5 + C) % 12]], E = a[(C + y) % a.length], P = ["远望创投", "启程资本", "沐川投资"][y % 3] + "（示例）", z = ["数千万元", "近亿元", "数亿元"][y % 3], R = ["完成新一轮战略融资", "获得本轮增资", "宣布完成最新一轮股权融资"][(y * 2 + C) % 3], F = { eventId: `event_${C + 1}_${y + 1}`, eventName: `${g.name}方向企业完成新一轮融资（示例${y + 1}）`, topicId: g.id, industryId: g.industry, regionId: E.id, regionName: E.name, eventDate: I, investors: [P], amountRange: z, technologyDirection: g.technologies[0], amount: 0.3 + (C + 1) * 0.2 + y * 0.05, content: `${E.name}${g.name}方向企业于${I.slice(0, 4)}年${R}，由${P}领投，金额区间为${z}。募集资金将重点投向${g.technologies[0]}的研发迭代与产业化落地，同步扩充核心团队，并与${E.name}本地产业链上下游深化协同。行业观察认为，该事件反映出资本市场对${g.name}方向的持续关注，也为${E.name}在${g.domain}领域的产业布局再添支撑（模拟事件内容，仅用于功能演示）。` };
      f.push(F), w.push({ kind: "funding", topicId: g.id, time: I, title: F.eventName });
    }
    ["academic", "patent", "news"].forEach((y, I) => {
      const E = y === "academic" ? 8 + C * 3 : y === "patent" ? 9 + (5 - C) * 3 : 8;
      for (let P = 0; P < E; P++) w.push({ id: y + "_" + g.id + "_" + P, kind: y, topicId: g.id, time: h[Math.min(h.length - 1, Math.floor((P + 0.35 + C * 0.07) * (h.length - 1) / E))], title: (y === "academic" ? g.paper : y === "patent" ? g.patent : g.name + "技术与产业动态") + "（模拟记录" + (P + 1) + "）" });
    });
  });
  const j = [];
  s.forEach((g) => {
    let C = j.find((y) => y.name === g.domain);
    C || (C = { id: "domain_" + String(j.length + 1).padStart(2, "0"), name: g.domain }, j.push(C)), g.domainId = C.id;
  }), Ae.HotspotData = { themes: s, industries: u, technologies: c, heatLevels: _, regions: a, domains: j, dates: h, sources: w, events: f, series: A };
})();
(() => {
  const s = new TextEncoder(), u = (v) => String(v ?? "").replace(/[<>&"']/g, (w) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[w]), a = Array.from({ length: 256 }, (v, w) => {
    for (let f = 0; f < 8; f++) w = w & 1 ? 3988292384 ^ w >>> 1 : w >>> 1;
    return w >>> 0;
  }), h = (v) => {
    let w = 4294967295;
    for (const f of v) w = a[(w ^ f) & 255] ^ w >>> 8;
    return (w ^ 4294967295) >>> 0;
  };
  function c(v) {
    let w = 0;
    const f = [], A = [];
    for (const [y, I] of v) {
      const E = s.encode(y), P = s.encode(I), z = h(P), R = new Uint8Array(30 + E.length), F = new DataView(R.buffer);
      F.setUint32(0, 67324752, true), F.setUint16(4, 20, true), F.setUint16(6, 2048, true), F.setUint32(14, z, true), F.setUint32(18, P.length, true), F.setUint32(22, P.length, true), F.setUint16(26, E.length, true), R.set(E, 30), f.push(R, P);
      const $ = new Uint8Array(46 + E.length), G = new DataView($.buffer);
      G.setUint32(0, 33639248, true), G.setUint16(4, 20, true), G.setUint16(6, 20, true), G.setUint16(8, 2048, true), G.setUint32(16, z, true), G.setUint32(20, P.length, true), G.setUint32(24, P.length, true), G.setUint16(28, E.length, true), G.setUint32(42, w, true), $.set(E, 46), A.push($), w += R.length + P.length;
    }
    const j = A.reduce((y, I) => y + I.length, 0), g = new Uint8Array(22), C = new DataView(g.buffer);
    return C.setUint32(0, 101010256, true), C.setUint16(8, v.length, true), C.setUint16(10, v.length, true), C.setUint32(12, j, true), C.setUint32(16, w, true), new Blob([...f, ...A, g], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }
  function _(v) {
    const w = [["主题名称", "主题热度", "年份", "趋势热度", "论文数量（篇）", "专利数量（件）", "投融资事件数量（起）"]];
    for (const j of v) {
      const g = [j.paperCount, j.patentCount, j.investmentEventCount];
      j.trend.length || w.push([j.topicName, j.heatIndex, "", "", ...g]);
      for (const C of j.trend) w.push([j.topicName, j.heatIndex, C.time.slice(0, 4), C.value, ...g]);
    }
    const f = w.map((j, g) => `<row r="${g + 1}">${j.map((C, y) => `<c r="${String.fromCharCode(65 + y)}${g + 1}"${typeof C == "number" ? "" : ' t="inlineStr"'}>${typeof C == "number" ? `<v>${C}</v>` : `<is><t>${u(C)}</t></is>`}</c>`).join("")}</row>`).join(""), A = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
    return c([["[Content_Types].xml", A + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>'], ["_rels/.rels", A + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'], ["xl/workbook.xml", A + '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="热点主题对比" sheetId="1" r:id="rId1"/></sheets></workbook>'], ["xl/_rels/workbook.xml.rels", A + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>'], ["xl/worksheets/sheet1.xml", A + '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cols><col min="1" max="1" width="28" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="18" customWidth="1"/><col min="4" max="4" width="14" customWidth="1"/><col min="5" max="6" width="20" customWidth="1"/><col min="7" max="7" width="26" customWidth="1"/></cols><sheetData>' + f + "</sheetData></worksheet>"]]);
  }
  Ae.HotspotXLSX = { makeWorkbook: _ };
})();
(() => {
  const s = Ae.HotspotData, u = [], a = [{ metricCode: "technology_hotspot_count", metricName: "技术领域热点数", unit: "个" }, { metricCode: "new_funding_events", metricName: "新增投融资事件", unit: "起" }, { metricCode: "high_frequency_keywords", metricName: "高频关键词", unit: "" }, { metricCode: "hotspot_intensity", metricName: "热点强度指数", unit: "分" }], h = (b) => /^\d{4}-\d{2}-\d{2}$/.test(b) && !Number.isNaN(Date.parse(b)) && new Date(b).toISOString().slice(0, 10) === b;
  function c(b) {
    for (const T of ["startDate", "endDate"]) if (b[T] && !h(b[T])) throw Error("请选择有效日期");
    if (b.startDate && b.endDate && b.startDate > b.endDate) throw Error("开始日期不能晚于结束日期");
    if (b.industryId && !s.industries.some((T) => T.id === b.industryId)) throw Error("行业不存在");
    if (b.technologyId && !s.technologies.some((T) => T.id === b.technologyId)) throw Error("技术方向不存在");
    if (b.heatLevel && !s.heatLevels.some((T) => T.value === b.heatLevel)) throw Error("热度等级不存在");
  }
  const _ = (b, T) => b >= (T.startDate || s.dates[0]) && b <= (T.endDate || s.dates.at(-1)), v = (b, T) => s.series.filter((M) => M.topicId === b.id && _(M.time, T));
  function w(b) {
    return [...new Map(s.themes.map((T) => [T.id, T])).values()].filter((T) => (!b.industryId || T.industry === b.industryId) && (!b.technologyId || T.technologyIds.includes(b.technologyId))).map((T) => ({ t: T, pts: v(T, b) })).filter((T) => T.pts.length && (!b.heatLevel || T.pts.at(-1).heatLevel === b.heatLevel));
  }
  const f = (b) => Math.round(b * 10) / 10, A = (b) => b.length ? f(b.reduce((T, M) => T + M, 0) / b.length) : null;
  function j(b) {
    const T = /* @__PURE__ */ new Map();
    for (const { pts: M } of b) for (const Y of M) for (const [N, V] of Object.entries(Y.keywordCounts)) T.set(N, (T.get(N) || 0) + V);
    return [...T].sort((M, Y) => Y[1] - M[1] || M[0].localeCompare(Y[0])).map(([M]) => M);
  }
  function g(b) {
    const T = w(b), M = new Set(T.map((N) => N.t.id)), Y = [M.size, s.events.filter((N) => M.has(N.topicId) && _(N.eventDate, b)).length, j(T), A(T.map((N) => N.pts.at(-1).heatValue))];
    return { metrics: a.map((N, V) => ({ ...N, value: Y[V], ...V === 0 ? { topics: F(b).map((H) => ({ topicId: H.topicId, topicName: H.topicName })) } : {}, period: `${b.startDate || s.dates[0]}至${b.endDate || s.dates.at(-1)}` })) };
  }
  function C(b) {
    const T = w(b), M = /* @__PURE__ */ new Map(), Y = s.dates.filter((N) => _(N, b));
    for (const N of T) {
      const V = N.t.domainId;
      M.has(V) || M.set(V, []), M.get(V).push(N);
    }
    return { items: [...M].map(([N, V]) => ({ domainId: N, domainName: V[0].t.domain, count: V.length, share: f(100 * V.length / T.length), trend: Y.map((H) => ({ time: H, value: V.filter((ut) => ut.pts.some((ft) => ft.time === H)).length })) })) };
  }
  function y(b, T) {
    return { paperCount: new Set(s.sources.filter((M) => M.topicId === b.id && M.kind === "academic" && _(M.time, T)).map((M) => M.id)).size, patentCount: new Set(s.sources.filter((M) => M.topicId === b.id && M.kind === "patent" && _(M.time, T)).map((M) => M.id)).size, investmentEventCount: new Set(s.events.filter((M) => M.topicId === b.id && _(M.eventDate, T)).map((M) => M.eventId)).size };
  }
  function I(b, T, M) {
    const Y = T.slice(0, 4), N = Y + "-01-01", V = Y + "-12-31", H = (ut) => ut.time >= N && ut.time <= V && _(ut.time, M);
    return new Set(s.sources.filter((ut) => ut.topicId === b.id && ut.kind === "patent" && H(ut)).map((ut) => ut.id)).size;
  }
  function E(b) {
    const T = w(b);
    return { points: T.flatMap(({ t: M, pts: Y }) => Y.map((N) => ({ hotspotId: M.hotspotId, hotspotName: M.name, time: N.time, heatValue: N.heatValue }))), bubbles: T.flatMap(({ t: M, pts: Y }) => Y.map((N) => ({ topicId: M.id, hotspotId: M.hotspotId, hotspotName: M.name, industryId: M.industry, industryName: s.industries.find((V) => V.id === M.industry).name, time: N.time, heatValue: N.heatValue, patentCount: I(M, N.time, b) }))) };
  }
  function P(b) {
    const T = a.find((H) => H.metricCode === b.metricCode && H.metricCode !== "technology_hotspot_count");
    if (!T) throw Error("指标编码不存在");
    if (b.metricCode === "high_frequency_keywords" && (typeof b.keyword != "string" || !b.keyword.trim())) throw Error("请传入待查询的关键词");
    const M = w(b), Y = new Set(M.map((H) => H.t.id)), N = s.dates.filter((H) => _(H, b)), V = M.length ? N.map((H) => {
      const ut = M.flatMap((xt) => xt.pts.filter((at) => at.time === H));
      let ft;
      return b.metricCode === "new_funding_events" ? ft = s.events.filter((xt) => Y.has(xt.topicId) && xt.eventDate === H).length : b.metricCode === "high_frequency_keywords" ? ft = ut.reduce((xt, at) => xt + (at.keywordCounts[b.keyword] || 0), 0) : ft = A(ut.map((xt) => xt.heatValue)), { time: H, value: ft };
    }) : [];
    return { ...T, unit: b.metricCode === "high_frequency_keywords" ? "次" : T.unit, ...b.metricCode === "high_frequency_keywords" ? { keyword: b.keyword } : {}, points: V };
  }
  const z = (b) => {
    const T = s.themes.find((M) => M.id === b || M.hotspotId === b);
    if (!T) throw Error("主题不存在");
    return T;
  }, R = (b) => ({ eventId: b.eventId, eventName: b.eventName, investors: b.investors, amountRange: b.amountRange, technologyDirection: b.technologyDirection });
  function F(b) {
    return w(b).map(({ t: T, pts: M }) => ({ topicId: T.id, topicName: T.name, heatIndex: M.at(-1).heatValue, keywords: T.keywords, technologies: T.technologies, institutions: T.institutions })).sort((T, M) => M.heatIndex - T.heatIndex);
  }
  function $(b) {
    if (!Array.isArray(b.topicIds) || b.topicIds.some((T) => typeof T != "string") || new Set(b.topicIds).size < 2) throw Error("请至少选择两个不同的热点主题");
    return { topics: [...new Set(b.topicIds)].map((T) => {
      var N;
      const M = z(T), Y = v(M, b);
      return { topicId: M.id, topicName: M.name, heatIndex: ((N = Y.at(-1)) == null ? void 0 : N.heatValue) ?? null, trend: Y.map((V) => ({ time: V.time, value: V.heatValue })), ...y(M, b) };
    }) };
  }
  async function G(b, T, M = {}) {
    u.push({ method: b, path: T, params: { ...M } }), u.length > 500 && u.shift();
    try {
      c(M);
      let Y;
      if (b === "GET" && T === "/options") Y = { industries: s.industries, technologies: s.technologies, heatLevels: s.heatLevels };
      else if (b === "GET" && T === "/overview") Y = g(M);
      else if (b === "GET" && T === "/overview/trend") Y = P(M);
      else if (b === "GET" && T === "/domains/distribution") Y = C(M);
      else if (b === "GET" && T === "/trends") Y = E(M);
      else if (b === "GET" && /^\/hotspots\/[^/]+$/.test(T)) {
        const N = z(T.split("/").at(-1));
        Y = { hotspotId: N.hotspotId, hotspotName: N.name, institutions: N.institutions, technologies: N.technologies, investmentEvents: s.events.filter((V) => V.topicId === N.id).slice(-3).map((V) => ({ eventName: V.eventName })), mediaReports: [{ title: N.name + "技术与产业进展观察（示例）", source: "科技观察（模拟来源）" }, { title: N.name + "应用场景动态（示例）", source: "产业参考（模拟来源）" }] };
      } else if (b === "GET" && T === "/topics") Y = { items: F(M) };
      else if (b === "GET" && /^\/topics\/[^/]+$/.test(T)) {
        const N = z(T.split("/").at(-1)), V = {};
        s.events.filter((H) => H.topicId === N.id).forEach((H) => {
          const ut = H.eventDate.slice(0, 4);
          V[ut] = (V[ut] || 0) + H.amount;
        }), Y = { topicId: N.id, topicName: N.name, developmentHistory: [{ time: "2021", content: N.summary }, { time: "2023", content: "相关研究与专利成果持续积累，主要机构围绕代表技术开展探索。" }, { time: "2026", content: "产业应用与资本活动形成持续关注，主题呈现新的发展态势。" }], coreEvents: [{ time: "2022-05-20", title: N.technologies[0] + "相关研究成果发布（示例）" }, { time: "2024-08-20", title: N.domain + "专利成果公开（示例）" }, { time: "2026-03-12", title: N.name + "方向投融资事件披露（示例）" }], patents: [{ title: N.patent + "（模拟专利）", analysisSummary: N.analysis }], papers: [{ title: N.paper + "（模拟论文）", analysisSummary: "该研究讨论" + N.technologies.join("与") + "的技术联系。" + N.summary }], capitalTrend: { unit: "亿元人民币（模拟金额）", points: Object.entries(V).sort().map(([H, ut]) => ({ time: H, value: +ut.toFixed(2) })) }, expertOpinions: [{ content: "示例观点：" + N.opinion }] };
      } else if (b === "GET" && T === "/investments/distribution") Y = { items: s.regions.map((N) => ({ regionId: N.id, regionName: N.name, x: N.x, y: N.y, eventCount: s.events.filter((V) => V.regionId === N.id && _(V.eventDate, M)).length })) };
      else if (b === "GET" && /^\/investments\/regions\/[^/]+\/events$/.test(T)) {
        const N = s.regions.find((V) => V.id === T.split("/")[3]);
        if (!N) throw Error("地区不存在");
        Y = { regionId: N.id, regionName: N.name, events: s.events.filter((V) => V.regionId === N.id && _(V.eventDate, M)).map(R) };
      } else if (b === "GET" && /^\/investments\/events\/[^/]+$/.test(T)) {
        const N = s.events.find((V) => V.eventId === T.split("/").at(-1));
        if (!N) throw Error("投资事件不存在");
        Y = { ...R(N), regionName: N.regionName, content: N.content };
      } else if (b === "POST" && T === "/topics/compare") Y = $(M);
      else {
        if (b === "POST" && T === "/topics/compare/export") return Ae.HotspotXLSX.makeWorkbook($(M).topics);
        throw Error("接口不存在");
      }
      return { code: 0, message: "success", data: JSON.parse(JSON.stringify(Y)) };
    } catch (Y) {
      return { code: 40001, message: Y.message, data: null };
    }
  }
  Ae.HotspotAPI = { request: G, calls: u };
})();
const ss = Ae.HotspotAPI, Sn = Ae.HotspotData;
function fa({ data: s, type: u, period: a, visiblePeriod: h, onPeriodChange: c, onTypeChange: _, onHotspotClick: v }) {
  const w = [...new Map(((s == null ? void 0 : s.points) ?? []).map((y) => [y.hotspotId, y.hotspotName])).entries()].map(([y, I]) => ({ id: y, name: I, points: ((s == null ? void 0 : s.points) ?? []).filter((E) => E.hotspotId === y).map((E) => ({ time: E.time, value: E.heatValue })) })), f = Array.from({ length: a[1] - a[0] + 1 }, (y, I) => a[0] + I), A = (y) => Number(y.slice(0, 4)) >= h[0] && Number(y.slice(0, 4)) <= h[1], j = w.map((y) => ({ ...y, points: y.points.filter((I) => A(I.time)) })), g = ((s == null ? void 0 : s.bubbles) ?? []).filter((y) => A(y.time)), C = h[0] === a[0] && h[1] === a[1];
  return l.jsxs("section", { id: "ha-trends", className: "ha-panel ha-trend-panel", children: [l.jsxs("header", { className: "ha-panel-heading", children: [l.jsxs("div", { children: [l.jsx("h2", { children: "热点趋势分析" }), l.jsx("p", { children: "观察时间走势与所选周期的多维数据分布" })] }), l.jsx(Lr.Group, { className: "ha-chart-switch", "aria-label": "趋势图表类型", type: "button", value: u, onChange: _, options: [{ label: "折线图", value: "line" }, { label: "热力图", value: "heatmap" }, { label: "气泡图", value: "bubble" }] })] }), l.jsxs("div", { className: "ha-trend-widget", children: [l.jsxs("div", { className: "ha-trend-plot", children: [l.jsx(zn, { series: w }), u === "line" ? l.jsx(fi, { series: j, max: 100, onSeriesClick: v, embedded: true }) : u === "heatmap" ? l.jsx(ua, { bubbles: g, onPoint: v }) : l.jsx(ca, { bubbles: g, onPoint: v })] }), l.jsxs("div", { className: "ha-time-axis", role: "group", "aria-label": "图表时间拖动轴", children: [l.jsxs("div", { className: "ha-time-axis-heading", children: [l.jsxs("span", { children: ["图表时间范围", l.jsxs("strong", { children: [h[0], " — ", h[1], "年"] })] }), l.jsx(At, { type: "text", size: "small", disabled: C, onClick: () => c([...a]), children: "全周期" })] }), l.jsx(sa, { range: { draggableBar: true }, min: 0, max: Math.max(1, f.length - 1), step: 1, showTicks: true, marks: Object.fromEntries(f.map((y, I) => [I, String(y)])), value: h.map((y) => Math.max(0, f.indexOf(y))), disabled: f.length < 2 || !s, formatTooltip: (y) => `${f[Math.round(y)] ?? f[0]}年`, onChange: (y) => {
    Array.isArray(y) && y.length === 2 && c([f[Math.round(y[0])], f[Math.round(y[1])]]);
  } })] })] })] });
}
const ma = 1;
function pa(s) {
  return Object.freeze({ __version: ma, map: s });
}
function _a(s, u) {
  return Object.freeze({ ...s, ...u });
}
const rs = k.createContext(null), as = rs.Provider;
function Hn() {
  const s = k.useContext(rs);
  if (s == null) throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return s;
}
function va(s) {
  function u(a, h) {
    const { instance: c, context: _ } = s(a).current;
    return k.useImperativeHandle(h, () => c), a.children == null ? null : rt.createElement(as, { value: _ }, a.children);
  }
  return k.forwardRef(u);
}
function ga(s) {
  function u(a, h) {
    const { instance: c } = s(a).current;
    return k.useImperativeHandle(h, () => c), null;
  }
  return k.forwardRef(u);
}
function ya(s) {
  return function(a) {
    const h = Hn(), c = s(a, h), { instance: _ } = c.current, v = k.useRef(a.position), { position: w } = a;
    return k.useEffect(function() {
      return _.addTo(h.map), function() {
        _.remove();
      };
    }, [h.map, _]), k.useEffect(function() {
      w != null && w !== v.current && (_.setPosition(w), v.current = w);
    }, [_, w]), c;
  };
}
function xa(s, u) {
  const a = k.useRef();
  k.useEffect(function() {
    return u != null && s.instance.on(u), a.current = u, function() {
      a.current != null && s.instance.off(a.current), a.current = null;
    };
  }, [s, u]);
}
function wa(s, u) {
  const a = s.pane ?? u.pane;
  return a ? { ...s, pane: a } : s;
}
var mi = { exports: {} };
/* @preserve
* Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
* (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
*/
var ba = mi.exports, Xo;
function Pa() {
  return Xo || (Xo = 1, (function(s, u) {
    (function(a, h) {
      h(u);
    })(ba, (function(a) {
      var h = "1.9.4";
      function c(t) {
        var e, i, n, o;
        for (i = 1, n = arguments.length; i < n; i++) {
          o = arguments[i];
          for (e in o) t[e] = o[e];
        }
        return t;
      }
      var _ = Object.create || /* @__PURE__ */ (function() {
        function t() {
        }
        return function(e) {
          return t.prototype = e, new t();
        };
      })();
      function v(t, e) {
        var i = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
          return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
        };
      }
      var w = 0;
      function f(t) {
        return "_leaflet_id" in t || (t._leaflet_id = ++w), t._leaflet_id;
      }
      function A(t, e, i) {
        var n, o, r, d;
        return d = function() {
          n = false, o && (r.apply(i, o), o = false);
        }, r = function() {
          n ? o = arguments : (t.apply(i, arguments), setTimeout(d, e), n = true);
        }, r;
      }
      function j(t, e, i) {
        var n = e[1], o = e[0], r = n - o;
        return t === n && i ? t : ((t - o) % r + r) % r + o;
      }
      function g() {
        return false;
      }
      function C(t, e) {
        if (e === false) return t;
        var i = Math.pow(10, e === void 0 ? 6 : e);
        return Math.round(t * i) / i;
      }
      function y(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function I(t) {
        return y(t).split(/\s+/);
      }
      function E(t, e) {
        Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? _(t.options) : {});
        for (var i in e) t.options[i] = e[i];
        return t.options;
      }
      function P(t, e, i) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
      }
      var z = /\{ *([\w_ -]+) *\}/g;
      function R(t, e) {
        return t.replace(z, function(i, n) {
          var o = e[n];
          if (o === void 0) throw new Error("No value provided for variable " + i);
          return typeof o == "function" && (o = o(e)), o;
        });
      }
      var F = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
      function $(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
        return -1;
      }
      var G = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function b(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }
      var T = 0;
      function M(t) {
        var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - T));
        return T = e + i, window.setTimeout(t, i);
      }
      var Y = window.requestAnimationFrame || b("RequestAnimationFrame") || M, N = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t);
      };
      function V(t, e, i) {
        if (i && Y === M) t.call(e);
        else return Y.call(window, v(t, e));
      }
      function H(t) {
        t && N.call(window, t);
      }
      var ut = { __proto__: null, extend: c, create: _, bind: v, get lastId() {
        return w;
      }, stamp: f, throttle: A, wrapNum: j, falseFn: g, formatNum: C, trim: y, splitWords: I, setOptions: E, getParamString: P, template: R, isArray: F, indexOf: $, emptyImageUrl: G, requestFn: Y, cancelFn: N, requestAnimFrame: V, cancelAnimFrame: H };
      function ft() {
      }
      ft.extend = function(t) {
        var e = function() {
          E(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, i = e.__super__ = this.prototype, n = _(i);
        n.constructor = e, e.prototype = n;
        for (var o in this) Object.prototype.hasOwnProperty.call(this, o) && o !== "prototype" && o !== "__super__" && (e[o] = this[o]);
        return t.statics && c(e, t.statics), t.includes && (xt(t.includes), c.apply(null, [n].concat(t.includes))), c(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? _(i.options) : {}, c(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
          if (!this._initHooksCalled) {
            i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = true;
            for (var r = 0, d = n._initHooks.length; r < d; r++) n._initHooks[r].call(this);
          }
        }, e;
      }, ft.include = function(t) {
        var e = this.prototype.options;
        return c(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
      }, ft.mergeOptions = function(t) {
        return c(this.prototype.options, t), this;
      }, ft.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
          this[t].apply(this, e);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
      };
      function xt(t) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          t = F(t) ? t : [t];
          for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var at = { on: function(t, e, i) {
        if (typeof t == "object") for (var n in t) this._on(n, t[n], e);
        else {
          t = I(t);
          for (var o = 0, r = t.length; o < r; o++) this._on(t[o], e, i);
        }
        return this;
      }, off: function(t, e, i) {
        if (!arguments.length) delete this._events;
        else if (typeof t == "object") for (var n in t) this._off(n, t[n], e);
        else {
          t = I(t);
          for (var o = arguments.length === 1, r = 0, d = t.length; r < d; r++) o ? this._off(t[r]) : this._off(t[r], e, i);
        }
        return this;
      }, _on: function(t, e, i, n) {
        if (typeof e != "function") {
          console.warn("wrong listener type: " + typeof e);
          return;
        }
        if (this._listens(t, e, i) === false) {
          i === this && (i = void 0);
          var o = { fn: e, ctx: i };
          n && (o.once = true), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(o);
        }
      }, _off: function(t, e, i) {
        var n, o, r;
        if (this._events && (n = this._events[t], !!n)) {
          if (arguments.length === 1) {
            if (this._firingCount) for (o = 0, r = n.length; o < r; o++) n[o].fn = g;
            delete this._events[t];
            return;
          }
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          var d = this._listens(t, e, i);
          if (d !== false) {
            var p = n[d];
            this._firingCount && (p.fn = g, this._events[t] = n = n.slice()), n.splice(d, 1);
          }
        }
      }, fire: function(t, e, i) {
        if (!this.listens(t, i)) return this;
        var n = c({}, e, { type: t, target: this, sourceTarget: e && e.sourceTarget || this });
        if (this._events) {
          var o = this._events[t];
          if (o) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var r = 0, d = o.length; r < d; r++) {
              var p = o[r], x = p.fn;
              p.once && this.off(t, x, p.ctx), x.call(p.ctx || this, n);
            }
            this._firingCount--;
          }
        }
        return i && this._propagateEvent(n), this;
      }, listens: function(t, e, i, n) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var o = e;
        typeof e != "function" && (n = !!e, o = void 0, i = void 0);
        var r = this._events && this._events[t];
        if (r && r.length && this._listens(t, o, i) !== false) return true;
        if (n) {
          for (var d in this._eventParents) if (this._eventParents[d].listens(t, e, i, n)) return true;
        }
        return false;
      }, _listens: function(t, e, i) {
        if (!this._events) return false;
        var n = this._events[t] || [];
        if (!e) return !!n.length;
        i === this && (i = void 0);
        for (var o = 0, r = n.length; o < r; o++) if (n[o].fn === e && n[o].ctx === i) return o;
        return false;
      }, once: function(t, e, i) {
        if (typeof t == "object") for (var n in t) this._on(n, t[n], e, true);
        else {
          t = I(t);
          for (var o = 0, r = t.length; o < r; o++) this._on(t[o], e, i, true);
        }
        return this;
      }, addEventParent: function(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[f(t)] = t, this;
      }, removeEventParent: function(t) {
        return this._eventParents && delete this._eventParents[f(t)], this;
      }, _propagateEvent: function(t) {
        for (var e in this._eventParents) this._eventParents[e].fire(t.type, c({ layer: t.target, propagatedFrom: t.target }, t), true);
      } };
      at.addEventListener = at.on, at.removeEventListener = at.clearAllEventListeners = at.off, at.addOneTimeEventListener = at.once, at.fireEvent = at.fire, at.hasEventListeners = at.listens;
      var St = ft.extend(at);
      function Z(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
      }
      var Zt = Math.trunc || function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
      Z.prototype = { clone: function() {
        return new Z(this.x, this.y);
      }, add: function(t) {
        return this.clone()._add(K(t));
      }, _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      }, subtract: function(t) {
        return this.clone()._subtract(K(t));
      }, _subtract: function(t) {
        return this.x -= t.x, this.y -= t.y, this;
      }, divideBy: function(t) {
        return this.clone()._divideBy(t);
      }, _divideBy: function(t) {
        return this.x /= t, this.y /= t, this;
      }, multiplyBy: function(t) {
        return this.clone()._multiplyBy(t);
      }, _multiplyBy: function(t) {
        return this.x *= t, this.y *= t, this;
      }, scaleBy: function(t) {
        return new Z(this.x * t.x, this.y * t.y);
      }, unscaleBy: function(t) {
        return new Z(this.x / t.x, this.y / t.y);
      }, round: function() {
        return this.clone()._round();
      }, _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      }, floor: function() {
        return this.clone()._floor();
      }, _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      }, ceil: function() {
        return this.clone()._ceil();
      }, _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      }, trunc: function() {
        return this.clone()._trunc();
      }, _trunc: function() {
        return this.x = Zt(this.x), this.y = Zt(this.y), this;
      }, distanceTo: function(t) {
        t = K(t);
        var e = t.x - this.x, i = t.y - this.y;
        return Math.sqrt(e * e + i * i);
      }, equals: function(t) {
        return t = K(t), t.x === this.x && t.y === this.y;
      }, contains: function(t) {
        return t = K(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      }, toString: function() {
        return "Point(" + C(this.x) + ", " + C(this.y) + ")";
      } };
      function K(t, e, i) {
        return t instanceof Z ? t : F(t) ? new Z(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new Z(t.x, t.y) : new Z(t, e, i);
      }
      function lt(t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
      }
      lt.prototype = { extend: function(t) {
        var e, i;
        if (!t) return this;
        if (t instanceof Z || typeof t[0] == "number" || "x" in t) e = i = K(t);
        else if (t = _t(t), e = t.min, i = t.max, !e || !i) return this;
        return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
      }, getCenter: function(t) {
        return K((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
      }, getBottomLeft: function() {
        return K(this.min.x, this.max.y);
      }, getTopRight: function() {
        return K(this.max.x, this.min.y);
      }, getTopLeft: function() {
        return this.min;
      }, getBottomRight: function() {
        return this.max;
      }, getSize: function() {
        return this.max.subtract(this.min);
      }, contains: function(t) {
        var e, i;
        return typeof t[0] == "number" || t instanceof Z ? t = K(t) : t = _t(t), t instanceof lt ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
      }, intersects: function(t) {
        t = _t(t);
        var e = this.min, i = this.max, n = t.min, o = t.max, r = o.x >= e.x && n.x <= i.x, d = o.y >= e.y && n.y <= i.y;
        return r && d;
      }, overlaps: function(t) {
        t = _t(t);
        var e = this.min, i = this.max, n = t.min, o = t.max, r = o.x > e.x && n.x < i.x, d = o.y > e.y && n.y < i.y;
        return r && d;
      }, isValid: function() {
        return !!(this.min && this.max);
      }, pad: function(t) {
        var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * t, o = Math.abs(e.y - i.y) * t;
        return _t(K(e.x - n, e.y - o), K(i.x + n, i.y + o));
      }, equals: function(t) {
        return t ? (t = _t(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : false;
      } };
      function _t(t, e) {
        return !t || t instanceof lt ? t : new lt(t, e);
      }
      function Q(t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
      }
      Q.prototype = { extend: function(t) {
        var e = this._southWest, i = this._northEast, n, o;
        if (t instanceof tt) n = t, o = t;
        else if (t instanceof Q) {
          if (n = t._southWest, o = t._northEast, !n || !o) return this;
        } else return t ? this.extend(W(t) || O(t)) : this;
        return !e && !i ? (this._southWest = new tt(n.lat, n.lng), this._northEast = new tt(o.lat, o.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(o.lat, i.lat), i.lng = Math.max(o.lng, i.lng)), this;
      }, pad: function(t) {
        var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, o = Math.abs(e.lng - i.lng) * t;
        return new Q(new tt(e.lat - n, e.lng - o), new tt(i.lat + n, i.lng + o));
      }, getCenter: function() {
        return new tt((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
      }, getSouthWest: function() {
        return this._southWest;
      }, getNorthEast: function() {
        return this._northEast;
      }, getNorthWest: function() {
        return new tt(this.getNorth(), this.getWest());
      }, getSouthEast: function() {
        return new tt(this.getSouth(), this.getEast());
      }, getWest: function() {
        return this._southWest.lng;
      }, getSouth: function() {
        return this._southWest.lat;
      }, getEast: function() {
        return this._northEast.lng;
      }, getNorth: function() {
        return this._northEast.lat;
      }, contains: function(t) {
        typeof t[0] == "number" || t instanceof tt || "lat" in t ? t = W(t) : t = O(t);
        var e = this._southWest, i = this._northEast, n, o;
        return t instanceof Q ? (n = t.getSouthWest(), o = t.getNorthEast()) : n = o = t, n.lat >= e.lat && o.lat <= i.lat && n.lng >= e.lng && o.lng <= i.lng;
      }, intersects: function(t) {
        t = O(t);
        var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), r = o.lat >= e.lat && n.lat <= i.lat, d = o.lng >= e.lng && n.lng <= i.lng;
        return r && d;
      }, overlaps: function(t) {
        t = O(t);
        var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), r = o.lat > e.lat && n.lat < i.lat, d = o.lng > e.lng && n.lng < i.lng;
        return r && d;
      }, toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      }, equals: function(t, e) {
        return t ? (t = O(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : false;
      }, isValid: function() {
        return !!(this._southWest && this._northEast);
      } };
      function O(t, e) {
        return t instanceof Q ? t : new Q(t, e);
      }
      function tt(t, e, i) {
        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
      }
      tt.prototype = { equals: function(t, e) {
        if (!t) return false;
        t = W(t);
        var i = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
        return i <= (e === void 0 ? 1e-9 : e);
      }, toString: function(t) {
        return "LatLng(" + C(this.lat, t) + ", " + C(this.lng, t) + ")";
      }, distanceTo: function(t) {
        return Et.distance(this, W(t));
      }, wrap: function() {
        return Et.wrapLatLng(this);
      }, toBounds: function(t) {
        var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
        return O([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
      }, clone: function() {
        return new tt(this.lat, this.lng, this.alt);
      } };
      function W(t, e, i) {
        return t instanceof tt ? t : F(t) && typeof t[0] != "object" ? t.length === 3 ? new tt(t[0], t[1], t[2]) : t.length === 2 ? new tt(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new tt(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new tt(t, e, i);
      }
      var Tt = { latLngToPoint: function(t, e) {
        var i = this.projection.project(t), n = this.scale(e);
        return this.transformation._transform(i, n);
      }, pointToLatLng: function(t, e) {
        var i = this.scale(e), n = this.transformation.untransform(t, i);
        return this.projection.unproject(n);
      }, project: function(t) {
        return this.projection.project(t);
      }, unproject: function(t) {
        return this.projection.unproject(t);
      }, scale: function(t) {
        return 256 * Math.pow(2, t);
      }, zoom: function(t) {
        return Math.log(t / 256) / Math.LN2;
      }, getProjectedBounds: function(t) {
        if (this.infinite) return null;
        var e = this.projection.bounds, i = this.scale(t), n = this.transformation.transform(e.min, i), o = this.transformation.transform(e.max, i);
        return new lt(n, o);
      }, infinite: false, wrapLatLng: function(t) {
        var e = this.wrapLng ? j(t.lng, this.wrapLng, true) : t.lng, i = this.wrapLat ? j(t.lat, this.wrapLat, true) : t.lat, n = t.alt;
        return new tt(i, e, n);
      }, wrapLatLngBounds: function(t) {
        var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, o = e.lng - i.lng;
        if (n === 0 && o === 0) return t;
        var r = t.getSouthWest(), d = t.getNorthEast(), p = new tt(r.lat - n, r.lng - o), x = new tt(d.lat - n, d.lng - o);
        return new Q(p, x);
      } }, Et = c({}, Tt, { wrapLng: [-180, 180], R: 6371e3, distance: function(t, e) {
        var i = Math.PI / 180, n = t.lat * i, o = e.lat * i, r = Math.sin((e.lat - t.lat) * i / 2), d = Math.sin((e.lng - t.lng) * i / 2), p = r * r + Math.cos(n) * Math.cos(o) * d * d, x = 2 * Math.atan2(Math.sqrt(p), Math.sqrt(1 - p));
        return this.R * x;
      } }), Qt = 6378137, ue = { R: Qt, MAX_LATITUDE: 85.0511287798, project: function(t) {
        var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), o = Math.sin(n * e);
        return new Z(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2);
      }, unproject: function(t) {
        var e = 180 / Math.PI;
        return new tt((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R);
      }, bounds: (function() {
        var t = Qt * Math.PI;
        return new lt([-t, -t], [t, t]);
      })() };
      function gt(t, e, i, n) {
        if (F(t)) {
          this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
          return;
        }
        this._a = t, this._b = e, this._c = i, this._d = n;
      }
      gt.prototype = { transform: function(t, e) {
        return this._transform(t.clone(), e);
      }, _transform: function(t, e) {
        return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
      }, untransform: function(t, e) {
        return e = e || 1, new Z((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
      } };
      function It(t, e, i, n) {
        return new gt(t, e, i, n);
      }
      var te = c({}, Et, { code: "EPSG:3857", projection: ue, transformation: (function() {
        var t = 0.5 / (Math.PI * ue.R);
        return It(t, 0.5, -t, 0.5);
      })() }), ce = c({}, te, { code: "EPSG:900913" });
      function Ht(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function qt(t, e) {
        var i = "", n, o, r, d, p, x;
        for (n = 0, r = t.length; n < r; n++) {
          for (p = t[n], o = 0, d = p.length; o < d; o++) x = p[o], i += (o ? "L" : "M") + x.x + " " + x.y;
          i += e ? q.svg ? "z" : "x" : "";
        }
        return i || "M0 0";
      }
      var ee = document.documentElement.style, kt = "ActiveXObject" in window, de = kt && !document.addEventListener, fe = "msLaunchUri" in navigator && !("documentMode" in document), ie = zt("webkit"), Be = zt("android"), me = zt("android 2") || zt("android 3"), ne = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Yt = Be && zt("Google") && ne < 537 && !("AudioNode" in window), Bt = !!window.opera, oe = !fe && zt("chrome"), we = zt("gecko") && !ie && !Bt && !kt, Ke = !oe && zt("safari"), m = zt("phantom"), B = "OTransition" in ee, et = navigator.platform.indexOf("Win") === 0, mt = kt && "transition" in ee, J = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !me, U = "MozPerspective" in ee, ot = !window.L_DISABLE_3D && (mt || J || U) && !B && !m, ct = typeof orientation < "u" || zt("mobile"), yt = ct && ie, jt = ct && J, Rt = !window.PointerEvent && window.MSPointerEvent, Ot = !!(window.PointerEvent || Rt), pe = "ontouchstart" in window || !!window.TouchEvent, be = !window.L_NO_TOUCH && (pe || Ot), Pe = ct && Bt, yi = ct && we, xi = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, wi = (function() {
        var t = false;
        try {
          var e = Object.defineProperty({}, "passive", { get: function() {
            t = true;
          } });
          window.addEventListener("testPassiveEventSupport", g, e), window.removeEventListener("testPassiveEventSupport", g, e);
        } catch {
        }
        return t;
      })(), Gi = (function() {
        return !!document.createElement("canvas").getContext;
      })(), Je = !!(document.createElementNS && Ht("svg").createSVGRect), qi = !!Je && (function() {
        var t = document.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), Yi = !Je && (function() {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var e = t.firstChild;
          return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
        } catch {
          return false;
        }
      })(), Ki = navigator.platform.indexOf("Mac") === 0, Ji = navigator.platform.indexOf("Linux") === 0;
      function zt(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
      }
      var q = { ie: kt, ielt9: de, edge: fe, webkit: ie, android: Be, android23: me, androidStock: Yt, opera: Bt, chrome: oe, gecko: we, safari: Ke, phantom: m, opera12: B, win: et, ie3d: mt, webkit3d: J, gecko3d: U, any3d: ot, mobile: ct, mobileWebkit: yt, mobileWebkit3d: jt, msPointer: Rt, pointer: Ot, touch: be, touchNative: pe, mobileOpera: Pe, mobileGecko: yi, retina: xi, passiveEvents: wi, canvas: Gi, svg: Je, vml: Yi, inlineSvg: qi, mac: Ki, linux: Ji }, Wn = q.msPointer ? "MSPointerDown" : "pointerdown", $n = q.msPointer ? "MSPointerMove" : "pointermove", Un = q.msPointer ? "MSPointerUp" : "pointerup", Gn = q.msPointer ? "MSPointerCancel" : "pointercancel", Xi = { touchstart: Wn, touchmove: $n, touchend: Un, touchcancel: Gn }, qn = { touchstart: _s, touchmove: bi, touchend: bi, touchcancel: bi }, Re = {}, Yn = false;
      function cs(t, e, i) {
        return e === "touchstart" && ps(), qn[e] ? (i = qn[e].bind(this, i), t.addEventListener(Xi[e], i, false), i) : (console.warn("wrong event specified:", e), g);
      }
      function ds(t, e, i) {
        if (!Xi[e]) {
          console.warn("wrong event specified:", e);
          return;
        }
        t.removeEventListener(Xi[e], i, false);
      }
      function fs(t) {
        Re[t.pointerId] = t;
      }
      function ms(t) {
        Re[t.pointerId] && (Re[t.pointerId] = t);
      }
      function Kn(t) {
        delete Re[t.pointerId];
      }
      function ps() {
        Yn || (document.addEventListener(Wn, fs, true), document.addEventListener($n, ms, true), document.addEventListener(Un, Kn, true), document.addEventListener(Gn, Kn, true), Yn = true);
      }
      function bi(t, e) {
        if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
          e.touches = [];
          for (var i in Re) e.touches.push(Re[i]);
          e.changedTouches = [e], t(e);
        }
      }
      function _s(t, e) {
        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Ct(e), bi(t, e);
      }
      function vs(t) {
        var e = {}, i, n;
        for (n in t) i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
        return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = false, e._simulated = true, e;
      }
      var gs = 200;
      function ys(t, e) {
        t.addEventListener("dblclick", e);
        var i = 0, n;
        function o(r) {
          if (r.detail !== 1) {
            n = r.detail;
            return;
          }
          if (!(r.pointerType === "mouse" || r.sourceCapabilities && !r.sourceCapabilities.firesTouchEvents)) {
            var d = eo(r);
            if (!(d.some(function(x) {
              return x instanceof HTMLLabelElement && x.attributes.for;
            }) && !d.some(function(x) {
              return x instanceof HTMLInputElement || x instanceof HTMLSelectElement;
            }))) {
              var p = Date.now();
              p - i <= gs ? (n++, n === 2 && e(vs(r))) : n = 1, i = p;
            }
          }
        }
        return t.addEventListener("click", o), { dblclick: e, simDblclick: o };
      }
      function xs(t, e) {
        t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
      }
      var Qi = Ci(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), Xe = Ci(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), Jn = Xe === "webkitTransition" || Xe === "OTransition" ? Xe + "End" : "transitionend";
      function Xn(t) {
        return typeof t == "string" ? document.getElementById(t) : t;
      }
      function Qe(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || i === "auto") && document.defaultView) {
          var n = document.defaultView.getComputedStyle(t, null);
          i = n ? n[e] : null;
        }
        return i === "auto" ? null : i;
      }
      function dt(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "", i && i.appendChild(n), n;
      }
      function vt(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function Pi(t) {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
      }
      function De(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
      }
      function Fe(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
      }
      function tn(t, e) {
        if (t.classList !== void 0) return t.classList.contains(e);
        var i = Li(t);
        return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
      }
      function nt(t, e) {
        if (t.classList !== void 0) for (var i = I(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
        else if (!tn(t, e)) {
          var r = Li(t);
          en(t, (r ? r + " " : "") + e);
        }
      }
      function wt(t, e) {
        t.classList !== void 0 ? t.classList.remove(e) : en(t, y((" " + Li(t) + " ").replace(" " + e + " ", " ")));
      }
      function en(t, e) {
        t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
      }
      function Li(t) {
        return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
      }
      function Dt(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && ws(t, e);
      }
      function ws(t, e) {
        var i = false, n = "DXImageTransform.Microsoft.Alpha";
        try {
          i = t.filters.item(n);
        } catch {
          if (e === 1) return;
        }
        e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
      }
      function Ci(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
        return false;
      }
      function Le(t, e, i) {
        var n = e || new Z(0, 0);
        t.style[Qi] = (q.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
      }
      function bt(t, e) {
        t._leaflet_pos = e, q.any3d ? Le(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
      }
      function Ce(t) {
        return t._leaflet_pos || new Z(0, 0);
      }
      var ti, ei, nn;
      if ("onselectstart" in document) ti = function() {
        it(window, "selectstart", Ct);
      }, ei = function() {
        pt(window, "selectstart", Ct);
      };
      else {
        var ii = Ci(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        ti = function() {
          if (ii) {
            var t = document.documentElement.style;
            nn = t[ii], t[ii] = "none";
          }
        }, ei = function() {
          ii && (document.documentElement.style[ii] = nn, nn = void 0);
        };
      }
      function on() {
        it(window, "dragstart", Ct);
      }
      function sn() {
        pt(window, "dragstart", Ct);
      }
      var Ti, rn;
      function an(t) {
        for (; t.tabIndex === -1; ) t = t.parentNode;
        t.style && (ki(), Ti = t, rn = t.style.outlineStyle, t.style.outlineStyle = "none", it(window, "keydown", ki));
      }
      function ki() {
        Ti && (Ti.style.outlineStyle = rn, Ti = void 0, rn = void 0, pt(window, "keydown", ki));
      }
      function Qn(t) {
        do
          t = t.parentNode;
        while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
        return t;
      }
      function ln(t) {
        var e = t.getBoundingClientRect();
        return { x: e.width / t.offsetWidth || 1, y: e.height / t.offsetHeight || 1, boundingClientRect: e };
      }
      var bs = { __proto__: null, TRANSFORM: Qi, TRANSITION: Xe, TRANSITION_END: Jn, get: Xn, getStyle: Qe, create: dt, remove: vt, empty: Pi, toFront: De, toBack: Fe, hasClass: tn, addClass: nt, removeClass: wt, setClass: en, getClass: Li, setOpacity: Dt, testProp: Ci, setTransform: Le, setPosition: bt, getPosition: Ce, get disableTextSelection() {
        return ti;
      }, get enableTextSelection() {
        return ei;
      }, disableImageDrag: on, enableImageDrag: sn, preventOutline: an, restoreOutline: ki, getSizedParentNode: Qn, getScale: ln };
      function it(t, e, i, n) {
        if (e && typeof e == "object") for (var o in e) un(t, o, e[o], i);
        else {
          e = I(e);
          for (var r = 0, d = e.length; r < d; r++) un(t, e[r], i, n);
        }
        return this;
      }
      var Kt = "_leaflet_events";
      function pt(t, e, i, n) {
        if (arguments.length === 1) to(t), delete t[Kt];
        else if (e && typeof e == "object") for (var o in e) cn(t, o, e[o], i);
        else if (e = I(e), arguments.length === 2) to(t, function(p) {
          return $(e, p) !== -1;
        });
        else for (var r = 0, d = e.length; r < d; r++) cn(t, e[r], i, n);
        return this;
      }
      function to(t, e) {
        for (var i in t[Kt]) {
          var n = i.split(/\d/)[0];
          (!e || e(n)) && cn(t, n, null, null, i);
        }
      }
      var hn = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
      function un(t, e, i, n) {
        var o = e + f(i) + (n ? "_" + f(n) : "");
        if (t[Kt] && t[Kt][o]) return this;
        var r = function(p) {
          return i.call(n || t, p || window.event);
        }, d = r;
        !q.touchNative && q.pointer && e.indexOf("touch") === 0 ? r = cs(t, e, r) : q.touch && e === "dblclick" ? r = ys(t, r) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(hn[e] || e, r, q.passiveEvents ? { passive: false } : false) : e === "mouseenter" || e === "mouseleave" ? (r = function(p) {
          p = p || window.event, fn(t, p) && d(p);
        }, t.addEventListener(hn[e], r, false)) : t.addEventListener(e, d, false) : t.attachEvent("on" + e, r), t[Kt] = t[Kt] || {}, t[Kt][o] = r;
      }
      function cn(t, e, i, n, o) {
        o = o || e + f(i) + (n ? "_" + f(n) : "");
        var r = t[Kt] && t[Kt][o];
        if (!r) return this;
        !q.touchNative && q.pointer && e.indexOf("touch") === 0 ? ds(t, e, r) : q.touch && e === "dblclick" ? xs(t, r) : "removeEventListener" in t ? t.removeEventListener(hn[e] || e, r, false) : t.detachEvent("on" + e, r), t[Kt][o] = null;
      }
      function Te(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = true : t.cancelBubble = true, this;
      }
      function dn(t) {
        return un(t, "wheel", Te), this;
      }
      function ni(t) {
        return it(t, "mousedown touchstart dblclick contextmenu", Te), t._leaflet_disable_click = true, this;
      }
      function Ct(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = false, this;
      }
      function ke(t) {
        return Ct(t), Te(t), this;
      }
      function eo(t) {
        if (t.composedPath) return t.composedPath();
        for (var e = [], i = t.target; i; ) e.push(i), i = i.parentNode;
        return e;
      }
      function io(t, e) {
        if (!e) return new Z(t.clientX, t.clientY);
        var i = ln(e), n = i.boundingClientRect;
        return new Z((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop);
      }
      var Ps = q.linux && q.chrome ? window.devicePixelRatio : q.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function no(t) {
        return q.edge ? t.wheelDeltaY / 2 : t.deltaY && t.deltaMode === 0 ? -t.deltaY / Ps : t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : t.detail ? t.detail / -32765 * 60 : 0;
      }
      function fn(t, e) {
        var i = e.relatedTarget;
        if (!i) return true;
        try {
          for (; i && i !== t; ) i = i.parentNode;
        } catch {
          return false;
        }
        return i !== t;
      }
      var Ls = { __proto__: null, on: it, off: pt, stopPropagation: Te, disableScrollPropagation: dn, disableClickPropagation: ni, preventDefault: Ct, stop: ke, getPropagationPath: eo, getMousePosition: io, getWheelDelta: no, isExternalTarget: fn, addListener: it, removeListener: pt }, oo = St.extend({ run: function(t, e, i, n) {
        this.stop(), this._el = t, this._inProgress = true, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = Ce(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      }, stop: function() {
        this._inProgress && (this._step(true), this._complete());
      }, _animate: function() {
        this._animId = V(this._animate, this), this._step();
      }, _step: function(t) {
        var e = +/* @__PURE__ */ new Date() - this._startTime, i = this._duration * 1e3;
        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
      }, _runFrame: function(t, e) {
        var i = this._startPos.add(this._offset.multiplyBy(t));
        e && i._round(), bt(this._el, i), this.fire("step");
      }, _complete: function() {
        H(this._animId), this._inProgress = false, this.fire("end");
      }, _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      } }), ht = St.extend({ options: { crs: te, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: true, zoomAnimationThreshold: 4, fadeAnimation: true, markerZoomAnimation: true, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: true }, initialize: function(t, e) {
        e = E(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = true, this._initContainer(t), this._initLayout(), this._onResize = v(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(W(e.center), e.zoom, { reset: true }), this.callInitHooks(), this._zoomAnimated = Xe && q.any3d && !q.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), it(this._proxy, Jn, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      }, setView: function(t, e, i) {
        if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(W(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== true) {
          i.animate !== void 0 && (i.zoom = c({ animate: i.animate }, i.zoom), i.pan = c({ animate: i.animate, duration: i.duration }, i.pan));
          var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
          if (n) return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
      }, setZoom: function(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
      }, zoomIn: function(t, e) {
        return t = t || (q.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      }, zoomOut: function(t, e) {
        return t = t || (q.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      }, setZoomAround: function(t, e, i) {
        var n = this.getZoomScale(e), o = this.getSize().divideBy(2), r = t instanceof Z ? t : this.latLngToContainerPoint(t), d = r.subtract(o).multiplyBy(1 - 1 / n), p = this.containerPointToLatLng(o.add(d));
        return this.setView(p, e, { zoom: i });
      }, _getBoundsCenterZoom: function(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : O(t);
        var i = K(e.paddingTopLeft || e.padding || [0, 0]), n = K(e.paddingBottomRight || e.padding || [0, 0]), o = this.getBoundsZoom(t, false, i.add(n));
        if (o = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, o) : o, o === 1 / 0) return { center: t.getCenter(), zoom: o };
        var r = n.subtract(i).divideBy(2), d = this.project(t.getSouthWest(), o), p = this.project(t.getNorthEast(), o), x = this.unproject(d.add(p).divideBy(2).add(r), o);
        return { center: x, zoom: o };
      }, fitBounds: function(t, e) {
        if (t = O(t), !t.isValid()) throw new Error("Bounds are not valid.");
        var i = this._getBoundsCenterZoom(t, e);
        return this.setView(i.center, i.zoom, e);
      }, fitWorld: function(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      }, panTo: function(t, e) {
        return this.setView(t, this._zoom, { pan: e });
      }, panBy: function(t, e) {
        if (t = K(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
        if (e.animate !== true && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new oo(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== false) {
          nt(this._mapPane, "leaflet-pan-anim");
          var i = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
        } else this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      }, flyTo: function(t, e, i) {
        if (i = i || {}, i.animate === false || !q.any3d) return this.setView(t, e, i);
        this._stop();
        var n = this.project(this.getCenter()), o = this.project(t), r = this.getSize(), d = this._zoom;
        t = W(t), e = e === void 0 ? d : e;
        var p = Math.max(r.x, r.y), x = p * this.getZoomScale(d, e), S = o.distanceTo(n) || 1, D = 1.42, X = D * D;
        function st(Pt) {
          var Ri = Pt ? -1 : 1, dr = Pt ? x : p, fr = x * x - p * p + Ri * X * X * S * S, mr = 2 * dr * X * S, Ln = fr / mr, Ro = Math.sqrt(Ln * Ln + 1) - Ln, pr = Ro < 1e-9 ? -18 : Math.log(Ro);
          return pr;
        }
        function Mt(Pt) {
          return (Math.exp(Pt) - Math.exp(-Pt)) / 2;
        }
        function Lt(Pt) {
          return (Math.exp(Pt) + Math.exp(-Pt)) / 2;
        }
        function Vt(Pt) {
          return Mt(Pt) / Lt(Pt);
        }
        var Nt = st(0);
        function Ge(Pt) {
          return p * (Lt(Nt) / Lt(Nt + D * Pt));
        }
        function lr(Pt) {
          return p * (Lt(Nt) * Vt(Nt + D * Pt) - Mt(Nt)) / X;
        }
        function hr(Pt) {
          return 1 - Math.pow(1 - Pt, 1.5);
        }
        var ur = Date.now(), Zo = (st(1) - Nt) / D, cr = i.duration ? 1e3 * i.duration : 1e3 * Zo * 0.8;
        function Bo() {
          var Pt = (Date.now() - ur) / cr, Ri = hr(Pt) * Zo;
          Pt <= 1 ? (this._flyToFrame = V(Bo, this), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(lr(Ri) / S)), d), this.getScaleZoom(p / Ge(Ri), d), { flyTo: true })) : this._move(t, e)._moveEnd(true);
        }
        return this._moveStart(true, i.noMoveStart), Bo.call(this), this;
      }, flyToBounds: function(t, e) {
        var i = this._getBoundsCenterZoom(t, e);
        return this.flyTo(i.center, i.zoom, e);
      }, setMaxBounds: function(t) {
        return t = O(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      }, setMinZoom: function(t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      }, setMaxZoom: function(t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      }, panInsideBounds: function(t, e) {
        this._enforcingBounds = true;
        var i = this.getCenter(), n = this._limitCenter(i, this._zoom, O(t));
        return i.equals(n) || this.panTo(n, e), this._enforcingBounds = false, this;
      }, panInside: function(t, e) {
        e = e || {};
        var i = K(e.paddingTopLeft || e.padding || [0, 0]), n = K(e.paddingBottomRight || e.padding || [0, 0]), o = this.project(this.getCenter()), r = this.project(t), d = this.getPixelBounds(), p = _t([d.min.add(i), d.max.subtract(n)]), x = p.getSize();
        if (!p.contains(r)) {
          this._enforcingBounds = true;
          var S = r.subtract(p.getCenter()), D = p.extend(r).getSize().subtract(x);
          o.x += S.x < 0 ? -D.x : D.x, o.y += S.y < 0 ? -D.y : D.y, this.panTo(this.unproject(o), e), this._enforcingBounds = false;
        }
        return this;
      }, invalidateSize: function(t) {
        if (!this._loaded) return this;
        t = c({ animate: false, pan: true }, t === true ? { animate: true } : t);
        var e = this.getSize();
        this._sizeChanged = true, this._lastCenter = null;
        var i = this.getSize(), n = e.divideBy(2).round(), o = i.divideBy(2).round(), r = n.subtract(o);
        return !r.x && !r.y ? this : (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(v(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: e, newSize: i }));
      }, stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      }, locate: function(t) {
        if (t = this._locateOptions = c({ timeout: 1e4, watch: false }, t), !("geolocation" in navigator)) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
        var e = v(this._handleGeolocationResponse, this), i = v(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
      }, stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = false), this;
      }, _handleGeolocationError: function(t) {
        if (this._container._leaflet_id) {
          var e = t.code, i = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: e, message: "Geolocation error: " + i + "." });
        }
      }, _handleGeolocationResponse: function(t) {
        if (this._container._leaflet_id) {
          var e = t.coords.latitude, i = t.coords.longitude, n = new tt(e, i), o = n.toBounds(t.coords.accuracy * 2), r = this._locateOptions;
          if (r.setView) {
            var d = this.getBoundsZoom(o);
            this.setView(n, r.maxZoom ? Math.min(d, r.maxZoom) : d);
          }
          var p = { latlng: n, bounds: o, timestamp: t.timestamp };
          for (var x in t.coords) typeof t.coords[x] == "number" && (p[x] = t.coords[x]);
          this.fire("locationfound", p);
        }
      }, addHandler: function(t, e) {
        if (!e) return this;
        var i = this[t] = new e(this);
        return this._handlers.push(i), this.options[t] && i.enable(), this;
      }, remove: function() {
        if (this._initEvents(true), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), vt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (H(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var t;
        for (t in this._layers) this._layers[t].remove();
        for (t in this._panes) vt(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      }, createPane: function(t, e) {
        var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = dt("div", i, e || this._mapPane);
        return t && (this._panes[t] = n), n;
      }, getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      }, getZoom: function() {
        return this._zoom;
      }, getBounds: function() {
        var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
        return new Q(e, i);
      }, getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      }, getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      }, getBoundsZoom: function(t, e, i) {
        t = O(t), i = K(i || [0, 0]);
        var n = this.getZoom() || 0, o = this.getMinZoom(), r = this.getMaxZoom(), d = t.getNorthWest(), p = t.getSouthEast(), x = this.getSize().subtract(i), S = _t(this.project(p, n), this.project(d, n)).getSize(), D = q.any3d ? this.options.zoomSnap : 1, X = x.x / S.x, st = x.y / S.y, Mt = e ? Math.max(X, st) : Math.min(X, st);
        return n = this.getScaleZoom(Mt, n), D && (n = Math.round(n / (D / 100)) * (D / 100), n = e ? Math.ceil(n / D) * D : Math.floor(n / D) * D), Math.max(o, Math.min(r, n));
      }, getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new Z(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = false), this._size.clone();
      }, getPixelBounds: function(t, e) {
        var i = this._getTopLeftPoint(t, e);
        return new lt(i, i.add(this.getSize()));
      }, getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      }, getPixelWorldBounds: function(t) {
        return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
      }, getPane: function(t) {
        return typeof t == "string" ? this._panes[t] : t;
      }, getPanes: function() {
        return this._panes;
      }, getContainer: function() {
        return this._container;
      }, getZoomScale: function(t, e) {
        var i = this.options.crs;
        return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e);
      }, getScaleZoom: function(t, e) {
        var i = this.options.crs;
        e = e === void 0 ? this._zoom : e;
        var n = i.zoom(t * i.scale(e));
        return isNaN(n) ? 1 / 0 : n;
      }, project: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(W(t), e);
      }, unproject: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(K(t), e);
      }, layerPointToLatLng: function(t) {
        var e = K(t).add(this.getPixelOrigin());
        return this.unproject(e);
      }, latLngToLayerPoint: function(t) {
        var e = this.project(W(t))._round();
        return e._subtract(this.getPixelOrigin());
      }, wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(W(t));
      }, wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(O(t));
      }, distance: function(t, e) {
        return this.options.crs.distance(W(t), W(e));
      }, containerPointToLayerPoint: function(t) {
        return K(t).subtract(this._getMapPanePos());
      }, layerPointToContainerPoint: function(t) {
        return K(t).add(this._getMapPanePos());
      }, containerPointToLatLng: function(t) {
        var e = this.containerPointToLayerPoint(K(t));
        return this.layerPointToLatLng(e);
      }, latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)));
      }, mouseEventToContainerPoint: function(t) {
        return io(t, this._container);
      }, mouseEventToLayerPoint: function(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      }, mouseEventToLatLng: function(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      }, _initContainer: function(t) {
        var e = this._container = Xn(t);
        if (e) {
          if (e._leaflet_id) throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        it(e, "scroll", this._onScroll, this), this._containerId = f(e);
      }, _initLayout: function() {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && q.any3d, nt(t, "leaflet-container" + (q.touch ? " leaflet-touch" : "") + (q.retina ? " leaflet-retina" : "") + (q.ielt9 ? " leaflet-oldie" : "") + (q.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var e = Qe(t, "position");
        e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      }, _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), bt(this._mapPane, new Z(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (nt(t.markerPane, "leaflet-zoom-hide"), nt(t.shadowPane, "leaflet-zoom-hide"));
      }, _resetView: function(t, e, i) {
        bt(this._mapPane, new Z(0, 0));
        var n = !this._loaded;
        this._loaded = true, e = this._limitZoom(e), this.fire("viewprereset");
        var o = this._zoom !== e;
        this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
      }, _moveStart: function(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      }, _move: function(t, e, i, n) {
        e === void 0 && (e = this._zoom);
        var o = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
      }, _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      }, _stop: function() {
        return H(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      }, _rawPanBy: function(t) {
        bt(this._mapPane, this._getMapPanePos().subtract(t));
      }, _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      }, _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      }, _checkIfLoaded: function() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      }, _initEvents: function(t) {
        this._targets = {}, this._targets[f(this._container)] = this;
        var e = t ? pt : it;
        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), q.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      }, _onResize: function() {
        H(this._resizeRequest), this._resizeRequest = V(function() {
          this.invalidateSize({ debounceMoveend: true });
        }, this);
      }, _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      }, _onMoveEnd: function() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      }, _findEventTargets: function(t, e) {
        for (var i = [], n, o = e === "mouseout" || e === "mouseover", r = t.target || t.srcElement, d = false; r; ) {
          if (n = this._targets[f(r)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
            d = true;
            break;
          }
          if (n && n.listens(e, true) && (o && !fn(r, t) || (i.push(n), o)) || r === this._container) break;
          r = r.parentNode;
        }
        return !i.length && !d && !o && this.listens(e, true) && (i = [this]), i;
      }, _isClickDisabled: function(t) {
        for (; t && t !== this._container; ) {
          if (t._leaflet_disable_click) return true;
          t = t.parentNode;
        }
      }, _handleDOMEvent: function(t) {
        var e = t.target || t.srcElement;
        if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
          var i = t.type;
          i === "mousedown" && an(e), this._fireDOMEvent(t, i);
        }
      }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(t, e, i) {
        if (t.type === "click") {
          var n = c({}, t);
          n.type = "preclick", this._fireDOMEvent(n, n.type, i);
        }
        var o = this._findEventTargets(t, e);
        if (i) {
          for (var r = [], d = 0; d < i.length; d++) i[d].listens(e, true) && r.push(i[d]);
          o = r.concat(o);
        }
        if (o.length) {
          e === "contextmenu" && Ct(t);
          var p = o[0], x = { originalEvent: t };
          if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
            var S = p.getLatLng && (!p._radius || p._radius <= 10);
            x.containerPoint = S ? this.latLngToContainerPoint(p.getLatLng()) : this.mouseEventToContainerPoint(t), x.layerPoint = this.containerPointToLayerPoint(x.containerPoint), x.latlng = S ? p.getLatLng() : this.layerPointToLatLng(x.layerPoint);
          }
          for (d = 0; d < o.length; d++) if (o[d].fire(e, x, true), x.originalEvent._stopped || o[d].options.bubblingMouseEvents === false && $(this._mouseEvents, e) !== -1) return;
        }
      }, _draggableMoved: function(t) {
        return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      }, _clearHandlers: function() {
        for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
      }, whenReady: function(t, e) {
        return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
      }, _getMapPanePos: function() {
        return Ce(this._mapPane) || new Z(0, 0);
      }, _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      }, _getTopLeftPoint: function(t, e) {
        var i = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
        return i.subtract(this._getMapPanePos());
      }, _getNewPixelOrigin: function(t, e) {
        var i = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
      }, _latLngToNewLayerPoint: function(t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return this.project(t, e)._subtract(n);
      }, _latLngBoundsToNewLayerBounds: function(t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return _t([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)]);
      }, _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      }, _getCenterOffset: function(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      }, _limitCenter: function(t, e, i) {
        if (!i) return t;
        var n = this.project(t, e), o = this.getSize().divideBy(2), r = new lt(n.subtract(o), n.add(o)), d = this._getBoundsOffset(r, i, e);
        return Math.abs(d.x) <= 1 && Math.abs(d.y) <= 1 ? t : this.unproject(n.add(d), e);
      }, _limitOffset: function(t, e) {
        if (!e) return t;
        var i = this.getPixelBounds(), n = new lt(i.min.add(t), i.max.add(t));
        return t.add(this._getBoundsOffset(n, e));
      }, _getBoundsOffset: function(t, e, i) {
        var n = _t(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)), o = n.min.subtract(t.min), r = n.max.subtract(t.max), d = this._rebound(o.x, -r.x), p = this._rebound(o.y, -r.y);
        return new Z(d, p);
      }, _rebound: function(t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      }, _limitZoom: function(t) {
        var e = this.getMinZoom(), i = this.getMaxZoom(), n = q.any3d ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
      }, _onPanTransitionStep: function() {
        this.fire("move");
      }, _onPanTransitionEnd: function() {
        wt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      }, _tryAnimatedPan: function(t, e) {
        var i = this._getCenterOffset(t)._trunc();
        return (e && e.animate) !== true && !this.getSize().contains(i) ? false : (this.panBy(i, e), true);
      }, _createAnimProxy: function() {
        var t = this._proxy = dt("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
          var i = Qi, n = this._proxy.style[i];
          Le(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      }, _destroyAnimProxy: function() {
        vt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      }, _animMoveEnd: function() {
        var t = this.getCenter(), e = this.getZoom();
        Le(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      }, _catchTransitionEnd: function(t) {
        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      }, _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      }, _tryAnimatedZoom: function(t, e, i) {
        if (this._animatingZoom) return true;
        if (i = i || {}, !this._zoomAnimated || i.animate === false || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return false;
        var n = this.getZoomScale(e), o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return i.animate !== true && !this.getSize().contains(o) ? false : (V(function() {
          this._moveStart(true, i.noMoveStart || false)._animateZoom(t, e, true);
        }, this), true);
      }, _animateZoom: function(t, e, i, n) {
        this._mapPane && (i && (this._animatingZoom = true, this._animateToCenter = t, this._animateToZoom = e, nt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: t, zoom: e, noUpdate: n }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, true), setTimeout(v(this._onZoomTransitionEnd, this), 250));
      }, _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && wt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = false, this._move(this._animateToCenter, this._animateToZoom, void 0, true), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(true));
      } });
      function Cs(t, e) {
        return new ht(t, e);
      }
      var Wt = ft.extend({ options: { position: "topright" }, initialize: function(t) {
        E(this, t);
      }, getPosition: function() {
        return this.options.position;
      }, setPosition: function(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      }, getContainer: function() {
        return this._container;
      }, addTo: function(t) {
        this.remove(), this._map = t;
        var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
        return nt(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
      }, remove: function() {
        return this._map ? (vt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      }, _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      } }), oi = function(t) {
        return new Wt(t);
      };
      ht.include({ addControl: function(t) {
        return t.addTo(this), this;
      }, removeControl: function(t) {
        return t.remove(), this;
      }, _initControlPos: function() {
        var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = dt("div", e + "control-container", this._container);
        function n(o, r) {
          var d = e + o + " " + e + r;
          t[o + r] = dt("div", d, i);
        }
        n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
      }, _clearControlPos: function() {
        for (var t in this._controlCorners) vt(this._controlCorners[t]);
        vt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      } });
      var so = Wt.extend({ options: { collapsed: true, position: "topright", autoZIndex: true, hideSingleBase: false, sortLayers: false, sortFunction: function(t, e, i, n) {
        return i < n ? -1 : n < i ? 1 : 0;
      } }, initialize: function(t, e, i) {
        E(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = false, this._preventClick = false;
        for (var n in t) this._addLayer(t[n], n);
        for (n in e) this._addLayer(e[n], n, true);
      }, onAdd: function(t) {
        this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      }, addTo: function(t) {
        return Wt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      }, onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this);
      }, addBaseLayer: function(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      }, addOverlay: function(t, e) {
        return this._addLayer(t, e, true), this._map ? this._update() : this;
      }, removeLayer: function(t) {
        t.off("add remove", this._onLayerChange, this);
        var e = this._getLayer(f(t));
        return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
      }, expand: function() {
        nt(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (nt(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : wt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      }, collapse: function() {
        return wt(this._container, "leaflet-control-layers-expanded"), this;
      }, _initLayout: function() {
        var t = "leaflet-control-layers", e = this._container = dt("div", t), i = this.options.collapsed;
        e.setAttribute("aria-haspopup", true), ni(e), dn(e);
        var n = this._section = dt("section", t + "-list");
        i && (this._map.on("click", this.collapse, this), it(e, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this));
        var o = this._layersLink = dt("a", t + "-toggle", e);
        o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), it(o, { keydown: function(r) {
          r.keyCode === 13 && this._expandSafely();
        }, click: function(r) {
          Ct(r), this._expandSafely();
        } }, this), i || this.expand(), this._baseLayersList = dt("div", t + "-base", n), this._separator = dt("div", t + "-separator", n), this._overlaysList = dt("div", t + "-overlays", n), e.appendChild(n);
      }, _getLayer: function(t) {
        for (var e = 0; e < this._layers.length; e++) if (this._layers[e] && f(this._layers[e].layer) === t) return this._layers[e];
      }, _addLayer: function(t, e, i) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({ layer: t, name: e, overlay: i }), this.options.sortLayers && this._layers.sort(v(function(n, o) {
          return this.options.sortFunction(n.layer, o.layer, n.name, o.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      }, _update: function() {
        if (!this._container) return this;
        Pi(this._baseLayersList), Pi(this._overlaysList), this._layerControlInputs = [];
        var t, e, i, n, o = 0;
        for (i = 0; i < this._layers.length; i++) n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
        return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
      }, _onLayerChange: function(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(f(t.target)), i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
        i && this._map.fire(i, e);
      }, _createRadioElement: function(t, e) {
        var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
        return n.innerHTML = i, n.firstChild;
      }, _addItem: function(t) {
        var e = document.createElement("label"), i = this._map.hasLayer(t.layer), n;
        t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + f(this), i), this._layerControlInputs.push(n), n.layerId = f(t.layer), it(n, "click", this._onInputClick, this);
        var o = document.createElement("span");
        o.innerHTML = " " + t.name;
        var r = document.createElement("span");
        e.appendChild(r), r.appendChild(n), r.appendChild(o);
        var d = t.overlay ? this._overlaysList : this._baseLayersList;
        return d.appendChild(e), this._checkDisabledLayers(), e;
      }, _onInputClick: function() {
        if (!this._preventClick) {
          var t = this._layerControlInputs, e, i, n = [], o = [];
          this._handlingClick = true;
          for (var r = t.length - 1; r >= 0; r--) e = t[r], i = this._getLayer(e.layerId).layer, e.checked ? n.push(i) : e.checked || o.push(i);
          for (r = 0; r < o.length; r++) this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
          for (r = 0; r < n.length; r++) this._map.hasLayer(n[r]) || this._map.addLayer(n[r]);
          this._handlingClick = false, this._refocusOnMap();
        }
      }, _checkDisabledLayers: function() {
        for (var t = this._layerControlInputs, e, i, n = this._map.getZoom(), o = t.length - 1; o >= 0; o--) e = t[o], i = this._getLayer(e.layerId).layer, e.disabled = i.options.minZoom !== void 0 && n < i.options.minZoom || i.options.maxZoom !== void 0 && n > i.options.maxZoom;
      }, _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      }, _expandSafely: function() {
        var t = this._section;
        this._preventClick = true, it(t, "click", Ct), this.expand();
        var e = this;
        setTimeout(function() {
          pt(t, "click", Ct), e._preventClick = false;
        });
      } }), Ts = function(t, e, i) {
        return new so(t, e, i);
      }, mn = Wt.extend({ options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" }, onAdd: function(t) {
        var e = "leaflet-control-zoom", i = dt("div", e + " leaflet-bar"), n = this.options;
        return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
      }, onRemove: function(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      }, disable: function() {
        return this._disabled = true, this._updateDisabled(), this;
      }, enable: function() {
        return this._disabled = false, this._updateDisabled(), this;
      }, _zoomIn: function(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      }, _zoomOut: function(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      }, _createButton: function(t, e, i, n, o) {
        var r = dt("a", i, n);
        return r.innerHTML = t, r.href = "#", r.title = e, r.setAttribute("role", "button"), r.setAttribute("aria-label", e), ni(r), it(r, "click", ke), it(r, "click", o, this), it(r, "click", this._refocusOnMap, this), r;
      }, _updateDisabled: function() {
        var t = this._map, e = "leaflet-disabled";
        wt(this._zoomInButton, e), wt(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (nt(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (nt(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      } });
      ht.mergeOptions({ zoomControl: true }), ht.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new mn(), this.addControl(this.zoomControl));
      });
      var ks = function(t) {
        return new mn(t);
      }, ro = Wt.extend({ options: { position: "bottomleft", maxWidth: 100, metric: true, imperial: true }, onAdd: function(t) {
        var e = "leaflet-control-scale", i = dt("div", e), n = this.options;
        return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
      }, onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      }, _addScales: function(t, e, i) {
        t.metric && (this._mScale = dt("div", e, i)), t.imperial && (this._iScale = dt("div", e, i));
      }, _update: function() {
        var t = this._map, e = t.getSize().y / 2, i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
        this._updateScales(i);
      }, _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      }, _updateMetric: function(t) {
        var e = this._getRoundNum(t), i = e < 1e3 ? e + " m" : e / 1e3 + " km";
        this._updateScale(this._mScale, i, e / t);
      }, _updateImperial: function(t) {
        var e = t * 3.2808399, i, n, o;
        e > 5280 ? (i = e / 5280, n = this._getRoundNum(i), this._updateScale(this._iScale, n + " mi", n / i)) : (o = this._getRoundNum(e), this._updateScale(this._iScale, o + " ft", o / e));
      }, _updateScale: function(t, e, i) {
        t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
      }, _getRoundNum: function(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
        return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
      } }), Ms = function(t) {
        return new ro(t);
      }, Ss = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', pn = Wt.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (q.inlineSvg ? Ss + " " : "") + "Leaflet</a>" }, initialize: function(t) {
        E(this, t), this._attributions = {};
      }, onAdd: function(t) {
        t.attributionControl = this, this._container = dt("div", "leaflet-control-attribution"), ni(this._container);
        for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      }, onRemove: function(t) {
        t.off("layeradd", this._addAttribution, this);
      }, _addAttribution: function(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      }, setPrefix: function(t) {
        return this.options.prefix = t, this._update(), this;
      }, addAttribution: function(t) {
        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
      }, removeAttribution: function(t) {
        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
      }, _update: function() {
        if (this._map) {
          var t = [];
          for (var e in this._attributions) this._attributions[e] && t.push(e);
          var i = [];
          this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
        }
      } });
      ht.mergeOptions({ attributionControl: true }), ht.addInitHook(function() {
        this.options.attributionControl && new pn().addTo(this);
      });
      var Es = function(t) {
        return new pn(t);
      };
      Wt.Layers = so, Wt.Zoom = mn, Wt.Scale = ro, Wt.Attribution = pn, oi.layers = Ts, oi.zoom = ks, oi.scale = Ms, oi.attribution = Es;
      var Jt = ft.extend({ initialize: function(t) {
        this._map = t;
      }, enable: function() {
        return this._enabled ? this : (this._enabled = true, this.addHooks(), this);
      }, disable: function() {
        return this._enabled ? (this._enabled = false, this.removeHooks(), this) : this;
      }, enabled: function() {
        return !!this._enabled;
      } });
      Jt.addTo = function(t, e) {
        return t.addHandler(e, this), this;
      };
      var Is = { Events: at }, ao = q.touch ? "touchstart mousedown" : "mousedown", _e = St.extend({ options: { clickTolerance: 3 }, initialize: function(t, e, i, n) {
        E(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
      }, enable: function() {
        this._enabled || (it(this._dragStartTarget, ao, this._onDown, this), this._enabled = true);
      }, disable: function() {
        this._enabled && (_e._dragging === this && this.finishDrag(true), pt(this._dragStartTarget, ao, this._onDown, this), this._enabled = false, this._moved = false);
      }, _onDown: function(t) {
        if (this._enabled && (this._moved = false, !tn(this._element, "leaflet-zoom-anim"))) {
          if (t.touches && t.touches.length !== 1) {
            _e._dragging === this && this.finishDrag();
            return;
          }
          if (!(_e._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (_e._dragging = this, this._preventOutline && an(this._element), on(), ti(), !this._moving)) {
            this.fire("down");
            var e = t.touches ? t.touches[0] : t, i = Qn(this._element);
            this._startPoint = new Z(e.clientX, e.clientY), this._startPos = Ce(this._element), this._parentScale = ln(i);
            var n = t.type === "mousedown";
            it(document, n ? "mousemove" : "touchmove", this._onMove, this), it(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      }, _onMove: function(t) {
        if (this._enabled) {
          if (t.touches && t.touches.length > 1) {
            this._moved = true;
            return;
          }
          var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new Z(e.clientX, e.clientY)._subtract(this._startPoint);
          !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, Ct(t), this._moved || (this.fire("dragstart"), this._moved = true, nt(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), nt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = true, this._lastEvent = t, this._updatePosition());
        }
      }, _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), bt(this._element, this._newPos), this.fire("drag", t);
      }, _onUp: function() {
        this._enabled && this.finishDrag();
      }, finishDrag: function(t) {
        wt(document.body, "leaflet-dragging"), this._lastTarget && (wt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), pt(document, "mousemove touchmove", this._onMove, this), pt(document, "mouseup touchend touchcancel", this._onUp, this), sn(), ei();
        var e = this._moved && this._moving;
        this._moving = false, _e._dragging = false, e && this.fire("dragend", { noInertia: t, distance: this._newPos.distanceTo(this._startPos) });
      } });
      function lo(t, e, i) {
        var n, o = [1, 4, 2, 8], r, d, p, x, S, D, X, st;
        for (r = 0, D = t.length; r < D; r++) t[r]._code = Me(t[r], e);
        for (p = 0; p < 4; p++) {
          for (X = o[p], n = [], r = 0, D = t.length, d = D - 1; r < D; d = r++) x = t[r], S = t[d], x._code & X ? S._code & X || (st = Mi(S, x, X, e, i), st._code = Me(st, e), n.push(st)) : (S._code & X && (st = Mi(S, x, X, e, i), st._code = Me(st, e), n.push(st)), n.push(x));
          t = n;
        }
        return t;
      }
      function ho(t, e) {
        var i, n, o, r, d, p, x, S, D;
        if (!t || t.length === 0) throw new Error("latlngs not passed");
        Ft(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var X = W([0, 0]), st = O(t), Mt = st.getNorthWest().distanceTo(st.getSouthWest()) * st.getNorthEast().distanceTo(st.getNorthWest());
        Mt < 1700 && (X = _n(t));
        var Lt = t.length, Vt = [];
        for (i = 0; i < Lt; i++) {
          var Nt = W(t[i]);
          Vt.push(e.project(W([Nt.lat - X.lat, Nt.lng - X.lng])));
        }
        for (p = x = S = 0, i = 0, n = Lt - 1; i < Lt; n = i++) o = Vt[i], r = Vt[n], d = o.y * r.x - r.y * o.x, x += (o.x + r.x) * d, S += (o.y + r.y) * d, p += d * 3;
        p === 0 ? D = Vt[0] : D = [x / p, S / p];
        var Ge = e.unproject(K(D));
        return W([Ge.lat + X.lat, Ge.lng + X.lng]);
      }
      function _n(t) {
        for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
          var r = W(t[o]);
          e += r.lat, i += r.lng, n++;
        }
        return W([e / n, i / n]);
      }
      var Os = { __proto__: null, clipPolygon: lo, polygonCenter: ho, centroid: _n };
      function uo(t, e) {
        if (!e || !t.length) return t.slice();
        var i = e * e;
        return t = zs(t, i), t = js(t, i), t;
      }
      function co(t, e, i) {
        return Math.sqrt(si(t, e, i, true));
      }
      function Ns(t, e, i) {
        return si(t, e, i);
      }
      function js(t, e) {
        var i = t.length, n = typeof Uint8Array < "u" ? Uint8Array : Array, o = new n(i);
        o[0] = o[i - 1] = 1, vn(t, o, e, 0, i - 1);
        var r, d = [];
        for (r = 0; r < i; r++) o[r] && d.push(t[r]);
        return d;
      }
      function vn(t, e, i, n, o) {
        var r = 0, d, p, x;
        for (p = n + 1; p <= o - 1; p++) x = si(t[p], t[n], t[o], true), x > r && (d = p, r = x);
        r > i && (e[d] = 1, vn(t, e, i, n, d), vn(t, e, i, d, o));
      }
      function zs(t, e) {
        for (var i = [t[0]], n = 1, o = 0, r = t.length; n < r; n++) As(t[n], t[o]) > e && (i.push(t[n]), o = n);
        return o < r - 1 && i.push(t[r - 1]), i;
      }
      var fo;
      function mo(t, e, i, n, o) {
        var r = n ? fo : Me(t, i), d = Me(e, i), p, x, S;
        for (fo = d; ; ) {
          if (!(r | d)) return [t, e];
          if (r & d) return false;
          p = r || d, x = Mi(t, e, p, i, o), S = Me(x, i), p === r ? (t = x, r = S) : (e = x, d = S);
        }
      }
      function Mi(t, e, i, n, o) {
        var r = e.x - t.x, d = e.y - t.y, p = n.min, x = n.max, S, D;
        return i & 8 ? (S = t.x + r * (x.y - t.y) / d, D = x.y) : i & 4 ? (S = t.x + r * (p.y - t.y) / d, D = p.y) : i & 2 ? (S = x.x, D = t.y + d * (x.x - t.x) / r) : i & 1 && (S = p.x, D = t.y + d * (p.x - t.x) / r), new Z(S, D, o);
      }
      function Me(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
      }
      function As(t, e) {
        var i = e.x - t.x, n = e.y - t.y;
        return i * i + n * n;
      }
      function si(t, e, i, n) {
        var o = e.x, r = e.y, d = i.x - o, p = i.y - r, x = d * d + p * p, S;
        return x > 0 && (S = ((t.x - o) * d + (t.y - r) * p) / x, S > 1 ? (o = i.x, r = i.y) : S > 0 && (o += d * S, r += p * S)), d = t.x - o, p = t.y - r, n ? d * d + p * p : new Z(o, r);
      }
      function Ft(t) {
        return !F(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
      }
      function po(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Ft(t);
      }
      function _o(t, e) {
        var i, n, o, r, d, p, x, S;
        if (!t || t.length === 0) throw new Error("latlngs not passed");
        Ft(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var D = W([0, 0]), X = O(t), st = X.getNorthWest().distanceTo(X.getSouthWest()) * X.getNorthEast().distanceTo(X.getNorthWest());
        st < 1700 && (D = _n(t));
        var Mt = t.length, Lt = [];
        for (i = 0; i < Mt; i++) {
          var Vt = W(t[i]);
          Lt.push(e.project(W([Vt.lat - D.lat, Vt.lng - D.lng])));
        }
        for (i = 0, n = 0; i < Mt - 1; i++) n += Lt[i].distanceTo(Lt[i + 1]) / 2;
        if (n === 0) S = Lt[0];
        else for (i = 0, r = 0; i < Mt - 1; i++) if (d = Lt[i], p = Lt[i + 1], o = d.distanceTo(p), r += o, r > n) {
          x = (r - n) / o, S = [p.x - x * (p.x - d.x), p.y - x * (p.y - d.y)];
          break;
        }
        var Nt = e.unproject(K(S));
        return W([Nt.lat + D.lat, Nt.lng + D.lng]);
      }
      var Zs = { __proto__: null, simplify: uo, pointToSegmentDistance: co, closestPointOnSegment: Ns, clipSegment: mo, _getEdgeIntersection: Mi, _getBitCode: Me, _sqClosestPointOnSegment: si, isFlat: Ft, _flat: po, polylineCenter: _o }, gn = { project: function(t) {
        return new Z(t.lng, t.lat);
      }, unproject: function(t) {
        return new tt(t.y, t.x);
      }, bounds: new lt([-180, -90], [180, 90]) }, yn = { R: 6378137, R_MINOR: 6356752314245179e-9, bounds: new lt([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project: function(t) {
        var e = Math.PI / 180, i = this.R, n = t.lat * e, o = this.R_MINOR / i, r = Math.sqrt(1 - o * o), d = r * Math.sin(n), p = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - d) / (1 + d), r / 2);
        return n = -i * Math.log(Math.max(p, 1e-10)), new Z(t.lng * e * i, n);
      }, unproject: function(t) {
        for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, o = Math.sqrt(1 - n * n), r = Math.exp(-t.y / i), d = Math.PI / 2 - 2 * Math.atan(r), p = 0, x = 0.1, S; p < 15 && Math.abs(x) > 1e-7; p++) S = o * Math.sin(d), S = Math.pow((1 - S) / (1 + S), o / 2), x = Math.PI / 2 - 2 * Math.atan(r * S) - d, d += x;
        return new tt(d * e, t.x * e / i);
      } }, Bs = { __proto__: null, LonLat: gn, Mercator: yn, SphericalMercator: ue }, Rs = c({}, Et, { code: "EPSG:3395", projection: yn, transformation: (function() {
        var t = 0.5 / (Math.PI * yn.R);
        return It(t, 0.5, -t, 0.5);
      })() }), vo = c({}, Et, { code: "EPSG:4326", projection: gn, transformation: It(1 / 180, 1, -1 / 180, 0.5) }), Ds = c({}, Tt, { projection: gn, transformation: It(1, 0, -1, 0), scale: function(t) {
        return Math.pow(2, t);
      }, zoom: function(t) {
        return Math.log(t) / Math.LN2;
      }, distance: function(t, e) {
        var i = e.lng - t.lng, n = e.lat - t.lat;
        return Math.sqrt(i * i + n * n);
      }, infinite: true });
      Tt.Earth = Et, Tt.EPSG3395 = Rs, Tt.EPSG3857 = te, Tt.EPSG900913 = ce, Tt.EPSG4326 = vo, Tt.Simple = Ds;
      var $t = St.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: true }, addTo: function(t) {
        return t.addLayer(this), this;
      }, remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      }, removeFrom: function(t) {
        return t && t.removeLayer(this), this;
      }, getPane: function(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      }, addInteractiveTarget: function(t) {
        return this._map._targets[f(t)] = this, this;
      }, removeInteractiveTarget: function(t) {
        return delete this._map._targets[f(t)], this;
      }, getAttribution: function() {
        return this.options.attribution;
      }, _layerAdd: function(t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
            var i = this.getEvents();
            e.on(i, this), this.once("remove", function() {
              e.off(i, this);
            }, this);
          }
          this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      } });
      ht.include({ addLayer: function(t) {
        if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
        var e = f(t);
        return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
      }, removeLayer: function(t) {
        var e = f(t);
        return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
      }, hasLayer: function(t) {
        return f(t) in this._layers;
      }, eachLayer: function(t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      }, _addLayers: function(t) {
        t = t ? F(t) ? t : [t] : [];
        for (var e = 0, i = t.length; e < i; e++) this.addLayer(t[e]);
      }, _addZoomLimit: function(t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[f(t)] = t, this._updateZoomLevels());
      }, _removeZoomLimit: function(t) {
        var e = f(t);
        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      }, _updateZoomLevels: function() {
        var t = 1 / 0, e = -1 / 0, i = this._getZoomSpan();
        for (var n in this._zoomBoundLayers) {
          var o = this._zoomBoundLayers[n].options;
          t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom), e = o.maxZoom === void 0 ? e : Math.max(e, o.maxZoom);
        }
        this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      } });
      var Ve = $t.extend({ initialize: function(t, e) {
        E(this, e), this._layers = {};
        var i, n;
        if (t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
      }, addLayer: function(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      }, removeLayer: function(t) {
        var e = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
      }, hasLayer: function(t) {
        var e = typeof t == "number" ? t : this.getLayerId(t);
        return e in this._layers;
      }, clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      }, invoke: function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i, n;
        for (i in this._layers) n = this._layers[i], n[t] && n[t].apply(n, e);
        return this;
      }, onAdd: function(t) {
        this.eachLayer(t.addLayer, t);
      }, onRemove: function(t) {
        this.eachLayer(t.removeLayer, t);
      }, eachLayer: function(t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      }, getLayer: function(t) {
        return this._layers[t];
      }, getLayers: function() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      }, setZIndex: function(t) {
        return this.invoke("setZIndex", t);
      }, getLayerId: function(t) {
        return f(t);
      } }), Fs = function(t, e) {
        return new Ve(t, e);
      }, se = Ve.extend({ addLayer: function(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), Ve.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
      }, removeLayer: function(t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ve.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
      }, setStyle: function(t) {
        return this.invoke("setStyle", t);
      }, bringToFront: function() {
        return this.invoke("bringToFront");
      }, bringToBack: function() {
        return this.invoke("bringToBack");
      }, getBounds: function() {
        var t = new Q();
        for (var e in this._layers) {
          var i = this._layers[e];
          t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
        }
        return t;
      } }), Vs = function(t, e) {
        return new se(t, e);
      }, He = ft.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: false }, initialize: function(t) {
        E(this, t);
      }, createIcon: function(t) {
        return this._createIcon("icon", t);
      }, createShadow: function(t) {
        return this._createIcon("shadow", t);
      }, _createIcon: function(t, e) {
        var i = this._getIconUrl(t);
        if (!i) {
          if (t === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
        return this._setIconStyles(n, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), n;
      }, _setIconStyles: function(t, e) {
        var i = this.options, n = i[e + "Size"];
        typeof n == "number" && (n = [n, n]);
        var o = K(n), r = K(e === "shadow" && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, true));
        t.className = "leaflet-marker-" + e + " " + (i.className || ""), r && (t.style.marginLeft = -r.x + "px", t.style.marginTop = -r.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
      }, _createImg: function(t, e) {
        return e = e || document.createElement("img"), e.src = t, e;
      }, _getIconUrl: function(t) {
        return q.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      } });
      function Hs(t) {
        return new He(t);
      }
      var ri = He.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(t) {
        return typeof ri.imagePath != "string" && (ri.imagePath = this._detectIconPath()), (this.options.imagePath || ri.imagePath) + He.prototype._getIconUrl.call(this, t);
      }, _stripUrl: function(t) {
        var e = function(i, n, o) {
          var r = n.exec(i);
          return r && r[o];
        };
        return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
      }, _detectIconPath: function() {
        var t = dt("div", "leaflet-default-icon-path", document.body), e = Qe(t, "background-image") || Qe(t, "backgroundImage");
        if (document.body.removeChild(t), e = this._stripUrl(e), e) return e;
        var i = document.querySelector('link[href$="leaflet.css"]');
        return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
      } }), go = Jt.extend({ initialize: function(t) {
        this._marker = t;
      }, addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new _e(t, t, true)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), nt(t, "leaflet-marker-draggable");
      }, removeHooks: function() {
        this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && wt(this._marker._icon, "leaflet-marker-draggable");
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, _adjustPan: function(t) {
        var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, o = this._marker.options.autoPanPadding, r = Ce(e._icon), d = i.getPixelBounds(), p = i.getPixelOrigin(), x = _t(d.min._subtract(p).add(o), d.max._subtract(p).subtract(o));
        if (!x.contains(r)) {
          var S = K((Math.max(x.max.x, r.x) - x.max.x) / (d.max.x - x.max.x) - (Math.min(x.min.x, r.x) - x.min.x) / (d.min.x - x.min.x), (Math.max(x.max.y, r.y) - x.max.y) / (d.max.y - x.max.y) - (Math.min(x.min.y, r.y) - x.min.y) / (d.min.y - x.min.y)).multiplyBy(n);
          i.panBy(S, { animate: false }), this._draggable._newPos._add(S), this._draggable._startPos._add(S), bt(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = V(this._adjustPan.bind(this, t));
        }
      }, _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      }, _onPreDrag: function(t) {
        this._marker.options.autoPan && (H(this._panRequest), this._panRequest = V(this._adjustPan.bind(this, t)));
      }, _onDrag: function(t) {
        var e = this._marker, i = e._shadow, n = Ce(e._icon), o = e._map.layerPointToLatLng(n);
        i && bt(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      }, _onDragEnd: function(t) {
        H(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      } }), Si = $t.extend({ options: { icon: new ri(), interactive: true, keyboard: true, title: "", alt: "Marker", zIndexOffset: 0, opacity: 1, riseOnHover: false, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: false, autoPanOnFocus: true, draggable: false, autoPan: false, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(t, e) {
        E(this, e), this._latlng = W(t);
      }, onAdd: function(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      }, onRemove: function(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = true, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      }, getEvents: function() {
        return { zoom: this.update, viewreset: this.update };
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = W(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      }, setZIndexOffset: function(t) {
        return this.options.zIndexOffset = t, this.update();
      }, getIcon: function() {
        return this.options.icon;
      }, setIcon: function(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      }, getElement: function() {
        return this._icon;
      }, update: function() {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      }, _initIcon: function() {
        var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i = t.icon.createIcon(this._icon), n = false;
        i !== this._icon && (this._icon && this._removeIcon(), n = true, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), nt(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && it(i, "focus", this._panOnFocus, this);
        var o = t.icon.createShadow(this._shadow), r = false;
        o !== this._shadow && (this._removeShadow(), r = true), o && (nt(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && r && this.getPane(t.shadowPane).appendChild(this._shadow);
      }, _removeIcon: function() {
        this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && pt(this._icon, "focus", this._panOnFocus, this), vt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      }, _removeShadow: function() {
        this._shadow && vt(this._shadow), this._shadow = null;
      }, _setPos: function(t) {
        this._icon && bt(this._icon, t), this._shadow && bt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      }, _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      }, _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e);
      }, _initInteraction: function() {
        if (this.options.interactive && (nt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), go)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new go(this), t && this.dragging.enable();
        }
      }, setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      }, _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && Dt(this._icon, t), this._shadow && Dt(this._shadow, t);
      }, _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      }, _resetZIndex: function() {
        this._updateZIndex(0);
      }, _panOnFocus: function() {
        var t = this._map;
        if (t) {
          var e = this.options.icon.options, i = e.iconSize ? K(e.iconSize) : K(0, 0), n = e.iconAnchor ? K(e.iconAnchor) : K(0, 0);
          t.panInside(this._latlng, { paddingTopLeft: n, paddingBottomRight: i.subtract(n) });
        }
      }, _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      }, _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      } });
      function Ws(t, e) {
        return new Si(t, e);
      }
      var ve = $t.extend({ options: { stroke: true, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: false, fillColor: null, fillOpacity: 0.2, fillRule: "evenodd", interactive: true, bubblingMouseEvents: true }, beforeAdd: function(t) {
        this._renderer = t.getRenderer(this);
      }, onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      }, onRemove: function() {
        this._renderer._removePath(this);
      }, redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      }, setStyle: function(t) {
        return E(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      }, bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      }, bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      }, getElement: function() {
        return this._path;
      }, _reset: function() {
        this._project(), this._update();
      }, _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      } }), Ei = ve.extend({ options: { fill: true, radius: 10 }, initialize: function(t, e) {
        E(this, e), this._latlng = W(t), this._radius = this.options.radius;
      }, setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = W(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      }, getLatLng: function() {
        return this._latlng;
      }, setRadius: function(t) {
        return this.options.radius = this._radius = t, this.redraw();
      }, getRadius: function() {
        return this._radius;
      }, setStyle: function(t) {
        var e = t && t.radius || this._radius;
        return ve.prototype.setStyle.call(this, t), this.setRadius(e), this;
      }, _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      }, _updateBounds: function() {
        var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
        this._pxBounds = new lt(this._point.subtract(n), this._point.add(n));
      }, _update: function() {
        this._map && this._updatePath();
      }, _updatePath: function() {
        this._renderer._updateCircle(this);
      }, _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      }, _containsPoint: function(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      } });
      function $s(t, e) {
        return new Ei(t, e);
      }
      var xn = Ei.extend({ initialize: function(t, e, i) {
        if (typeof e == "number" && (e = c({}, i, { radius: e })), E(this, e), this._latlng = W(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      }, setRadius: function(t) {
        return this._mRadius = t, this.redraw();
      }, getRadius: function() {
        return this._mRadius;
      }, getBounds: function() {
        var t = [this._radius, this._radiusY || this._radius];
        return new Q(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
      }, setStyle: ve.prototype.setStyle, _project: function() {
        var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
        if (n.distance === Et.distance) {
          var o = Math.PI / 180, r = this._mRadius / Et.R / o, d = i.project([e + r, t]), p = i.project([e - r, t]), x = d.add(p).divideBy(2), S = i.unproject(x).lat, D = Math.acos((Math.cos(r * o) - Math.sin(e * o) * Math.sin(S * o)) / (Math.cos(e * o) * Math.cos(S * o))) / o;
          (isNaN(D) || D === 0) && (D = r / Math.cos(Math.PI / 180 * e)), this._point = x.subtract(i.getPixelOrigin()), this._radius = isNaN(D) ? 0 : x.x - i.project([S, t - D]).x, this._radiusY = x.y - d.y;
        } else {
          var X = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(X).x;
        }
        this._updateBounds();
      } });
      function Us(t, e, i) {
        return new xn(t, e, i);
      }
      var re = ve.extend({ options: { smoothFactor: 1, noClip: false }, initialize: function(t, e) {
        E(this, e), this._setLatLngs(t);
      }, getLatLngs: function() {
        return this._latlngs;
      }, setLatLngs: function(t) {
        return this._setLatLngs(t), this.redraw();
      }, isEmpty: function() {
        return !this._latlngs.length;
      }, closestLayerPoint: function(t) {
        for (var e = 1 / 0, i = null, n = si, o, r, d = 0, p = this._parts.length; d < p; d++) for (var x = this._parts[d], S = 1, D = x.length; S < D; S++) {
          o = x[S - 1], r = x[S];
          var X = n(t, o, r, true);
          X < e && (e = X, i = n(t, o, r));
        }
        return i && (i.distance = Math.sqrt(e)), i;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return _o(this._defaultShape(), this._map.options.crs);
      }, getBounds: function() {
        return this._bounds;
      }, addLatLng: function(t, e) {
        return e = e || this._defaultShape(), t = W(t), e.push(t), this._bounds.extend(t), this.redraw();
      }, _setLatLngs: function(t) {
        this._bounds = new Q(), this._latlngs = this._convertLatLngs(t);
      }, _defaultShape: function() {
        return Ft(this._latlngs) ? this._latlngs : this._latlngs[0];
      }, _convertLatLngs: function(t) {
        for (var e = [], i = Ft(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = W(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
        return e;
      }, _project: function() {
        var t = new lt();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      }, _updateBounds: function() {
        var t = this._clickTolerance(), e = new Z(t, t);
        this._rawPxBounds && (this._pxBounds = new lt([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)]));
      }, _projectLatlngs: function(t, e, i) {
        var n = t[0] instanceof tt, o = t.length, r, d;
        if (n) {
          for (d = [], r = 0; r < o; r++) d[r] = this._map.latLngToLayerPoint(t[r]), i.extend(d[r]);
          e.push(d);
        } else for (r = 0; r < o; r++) this._projectLatlngs(t[r], e, i);
      }, _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts, i, n, o, r, d, p, x;
          for (i = 0, o = 0, r = this._rings.length; i < r; i++) for (x = this._rings[i], n = 0, d = x.length; n < d - 1; n++) p = mo(x[n], x[n + 1], t, n, true), p && (e[o] = e[o] || [], e[o].push(p[0]), (p[1] !== x[n + 1] || n === d - 2) && (e[o].push(p[1]), o++));
        }
      }, _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = uo(t[i], e);
      }, _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      }, _updatePath: function() {
        this._renderer._updatePoly(this);
      }, _containsPoint: function(t, e) {
        var i, n, o, r, d, p, x = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t)) return false;
        for (i = 0, r = this._parts.length; i < r; i++) for (p = this._parts[i], n = 0, d = p.length, o = d - 1; n < d; o = n++) if (!(!e && n === 0) && co(t, p[o], p[n]) <= x) return true;
        return false;
      } });
      function Gs(t, e) {
        return new re(t, e);
      }
      re._flat = po;
      var We = re.extend({ options: { fill: true }, isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return ho(this._defaultShape(), this._map.options.crs);
      }, _convertLatLngs: function(t) {
        var e = re.prototype._convertLatLngs.call(this, t), i = e.length;
        return i >= 2 && e[0] instanceof tt && e[0].equals(e[i - 1]) && e.pop(), e;
      }, _setLatLngs: function(t) {
        re.prototype._setLatLngs.call(this, t), Ft(this._latlngs) && (this._latlngs = [this._latlngs]);
      }, _defaultShape: function() {
        return Ft(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      }, _clipPoints: function() {
        var t = this._renderer._bounds, e = this.options.weight, i = new Z(e, e);
        if (t = new lt(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var n = 0, o = this._rings.length, r; n < o; n++) r = lo(this._rings[n], t, true), r.length && this._parts.push(r);
        }
      }, _updatePath: function() {
        this._renderer._updatePoly(this, true);
      }, _containsPoint: function(t) {
        var e = false, i, n, o, r, d, p, x, S;
        if (!this._pxBounds || !this._pxBounds.contains(t)) return false;
        for (r = 0, x = this._parts.length; r < x; r++) for (i = this._parts[r], d = 0, S = i.length, p = S - 1; d < S; p = d++) n = i[d], o = i[p], n.y > t.y != o.y > t.y && t.x < (o.x - n.x) * (t.y - n.y) / (o.y - n.y) + n.x && (e = !e);
        return e || re.prototype._containsPoint.call(this, t, true);
      } });
      function qs(t, e) {
        return new We(t, e);
      }
      var ae = se.extend({ initialize: function(t, e) {
        E(this, e), this._layers = {}, t && this.addData(t);
      }, addData: function(t) {
        var e = F(t) ? t : t.features, i, n, o;
        if (e) {
          for (i = 0, n = e.length; i < n; i++) o = e[i], (o.geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
          return this;
        }
        var r = this.options;
        if (r.filter && !r.filter(t)) return this;
        var d = Ii(t, r);
        return d ? (d.feature = ji(t), d.defaultOptions = d.options, this.resetStyle(d), r.onEachFeature && r.onEachFeature(t, d), this.addLayer(d)) : this;
      }, resetStyle: function(t) {
        return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = c({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
      }, setStyle: function(t) {
        return this.eachLayer(function(e) {
          this._setLayerStyle(e, t);
        }, this);
      }, _setLayerStyle: function(t, e) {
        t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
      } });
      function Ii(t, e) {
        var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, o = [], r = e && e.pointToLayer, d = e && e.coordsToLatLng || wn, p, x, S, D;
        if (!n && !i) return null;
        switch (i.type) {
          case "Point":
            return p = d(n), yo(r, t, p, e);
          case "MultiPoint":
            for (S = 0, D = n.length; S < D; S++) p = d(n[S]), o.push(yo(r, t, p, e));
            return new se(o);
          case "LineString":
          case "MultiLineString":
            return x = Oi(n, i.type === "LineString" ? 0 : 1, d), new re(x, e);
          case "Polygon":
          case "MultiPolygon":
            return x = Oi(n, i.type === "Polygon" ? 1 : 2, d), new We(x, e);
          case "GeometryCollection":
            for (S = 0, D = i.geometries.length; S < D; S++) {
              var X = Ii({ geometry: i.geometries[S], type: "Feature", properties: t.properties }, e);
              X && o.push(X);
            }
            return new se(o);
          case "FeatureCollection":
            for (S = 0, D = i.features.length; S < D; S++) {
              var st = Ii(i.features[S], e);
              st && o.push(st);
            }
            return new se(o);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function yo(t, e, i, n) {
        return t ? t(e, i) : new Si(i, n && n.markersInheritOptions && n);
      }
      function wn(t) {
        return new tt(t[1], t[0], t[2]);
      }
      function Oi(t, e, i) {
        for (var n = [], o = 0, r = t.length, d; o < r; o++) d = e ? Oi(t[o], e - 1, i) : (i || wn)(t[o]), n.push(d);
        return n;
      }
      function bn(t, e) {
        return t = W(t), t.alt !== void 0 ? [C(t.lng, e), C(t.lat, e), C(t.alt, e)] : [C(t.lng, e), C(t.lat, e)];
      }
      function Ni(t, e, i, n) {
        for (var o = [], r = 0, d = t.length; r < d; r++) o.push(e ? Ni(t[r], Ft(t[r]) ? 0 : e - 1, i, n) : bn(t[r], n));
        return !e && i && o.length > 0 && o.push(o[0].slice()), o;
      }
      function $e(t, e) {
        return t.feature ? c({}, t.feature, { geometry: e }) : ji(e);
      }
      function ji(t) {
        return t.type === "Feature" || t.type === "FeatureCollection" ? t : { type: "Feature", properties: {}, geometry: t };
      }
      var Pn = { toGeoJSON: function(t) {
        return $e(this, { type: "Point", coordinates: bn(this.getLatLng(), t) });
      } };
      Si.include(Pn), xn.include(Pn), Ei.include(Pn), re.include({ toGeoJSON: function(t) {
        var e = !Ft(this._latlngs), i = Ni(this._latlngs, e ? 1 : 0, false, t);
        return $e(this, { type: (e ? "Multi" : "") + "LineString", coordinates: i });
      } }), We.include({ toGeoJSON: function(t) {
        var e = !Ft(this._latlngs), i = e && !Ft(this._latlngs[0]), n = Ni(this._latlngs, i ? 2 : e ? 1 : 0, true, t);
        return e || (n = [n]), $e(this, { type: (i ? "Multi" : "") + "Polygon", coordinates: n });
      } }), Ve.include({ toMultiPoint: function(t) {
        var e = [];
        return this.eachLayer(function(i) {
          e.push(i.toGeoJSON(t).geometry.coordinates);
        }), $e(this, { type: "MultiPoint", coordinates: e });
      }, toGeoJSON: function(t) {
        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (e === "MultiPoint") return this.toMultiPoint(t);
        var i = e === "GeometryCollection", n = [];
        return this.eachLayer(function(o) {
          if (o.toGeoJSON) {
            var r = o.toGeoJSON(t);
            if (i) n.push(r.geometry);
            else {
              var d = ji(r);
              d.type === "FeatureCollection" ? n.push.apply(n, d.features) : n.push(d);
            }
          }
        }), i ? $e(this, { geometries: n, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n };
      } });
      function xo(t, e) {
        return new ae(t, e);
      }
      var Ys = xo, zi = $t.extend({ options: { opacity: 1, alt: "", interactive: false, crossOrigin: false, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(t, e, i) {
        this._url = t, this._bounds = O(e), E(this, i);
      }, onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (nt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      }, onRemove: function() {
        vt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      }, setOpacity: function(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      }, setStyle: function(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      }, bringToFront: function() {
        return this._map && De(this._image), this;
      }, bringToBack: function() {
        return this._map && Fe(this._image), this;
      }, setUrl: function(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      }, setBounds: function(t) {
        return this._bounds = O(t), this._map && this._reset(), this;
      }, getEvents: function() {
        var t = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      }, setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      }, getBounds: function() {
        return this._bounds;
      }, getElement: function() {
        return this._image;
      }, _initImage: function() {
        var t = this._url.tagName === "IMG", e = this._image = t ? this._url : dt("img");
        if (nt(e, "leaflet-image-layer"), this._zoomAnimated && nt(e, "leaflet-zoom-animated"), this.options.className && nt(e, this.options.className), e.onselectstart = g, e.onmousemove = g, e.onload = v(this.fire, this, "load"), e.onerror = v(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
          this._url = e.src;
          return;
        }
        e.src = this._url, e.alt = this.options.alt;
      }, _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        Le(this._image, i, e);
      }, _reset: function() {
        var t = this._image, e = new lt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), i = e.getSize();
        bt(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
      }, _updateOpacity: function() {
        Dt(this._image, this.options.opacity);
      }, _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      }, _overlayOnError: function() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      }, getCenter: function() {
        return this._bounds.getCenter();
      } }), Ks = function(t, e, i) {
        return new zi(t, e, i);
      }, wo = zi.extend({ options: { autoplay: true, loop: true, keepAspectRatio: true, muted: false, playsInline: true }, _initImage: function() {
        var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : dt("video");
        if (nt(e, "leaflet-image-layer"), this._zoomAnimated && nt(e, "leaflet-zoom-animated"), this.options.className && nt(e, this.options.className), e.onselectstart = g, e.onmousemove = g, e.onloadeddata = v(this.fire, this, "load"), t) {
          for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++) n.push(i[o].src);
          this._url = i.length > 0 ? n : [e.src];
          return;
        }
        F(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
        for (var r = 0; r < this._url.length; r++) {
          var d = dt("source");
          d.src = this._url[r], e.appendChild(d);
        }
      } });
      function Js(t, e, i) {
        return new wo(t, e, i);
      }
      var bo = zi.extend({ _initImage: function() {
        var t = this._image = this._url;
        nt(t, "leaflet-image-layer"), this._zoomAnimated && nt(t, "leaflet-zoom-animated"), this.options.className && nt(t, this.options.className), t.onselectstart = g, t.onmousemove = g;
      } });
      function Xs(t, e, i) {
        return new bo(t, e, i);
      }
      var Xt = $t.extend({ options: { interactive: false, offset: [0, 0], className: "", pane: void 0, content: "" }, initialize: function(t, e) {
        t && (t instanceof tt || F(t)) ? (this._latlng = W(t), E(this, e)) : (E(this, t), this._source = e), this.options.content && (this._content = this.options.content);
      }, openOn: function(t) {
        return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
      }, close: function() {
        return this._map && this._map.removeLayer(this), this;
      }, toggle: function(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      }, onAdd: function(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && Dt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && Dt(this._container, 1), this.bringToFront(), this.options.interactive && (nt(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      }, onRemove: function(t) {
        t._fadeAnimated ? (Dt(this._container, 0), this._removeTimeout = setTimeout(v(vt, void 0, this._container), 200)) : vt(this._container), this.options.interactive && (wt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(t) {
        return this._latlng = W(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      }, getContent: function() {
        return this._content;
      }, setContent: function(t) {
        return this._content = t, this.update(), this;
      }, getElement: function() {
        return this._container;
      }, update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      }, getEvents: function() {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      }, isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      }, bringToFront: function() {
        return this._map && De(this._container), this;
      }, bringToBack: function() {
        return this._map && Fe(this._container), this;
      }, _prepareOpen: function(t) {
        var e = this._source;
        if (!e._map) return false;
        if (e instanceof se) {
          e = null;
          var i = this._source._layers;
          for (var n in i) if (i[n]._map) {
            e = i[n];
            break;
          }
          if (!e) return false;
          this._source = e;
        }
        if (!t) if (e.getCenter) t = e.getCenter();
        else if (e.getLatLng) t = e.getLatLng();
        else if (e.getBounds) t = e.getBounds().getCenter();
        else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(t), this._map && this.update(), true;
      }, _updateContent: function() {
        if (this._content) {
          var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof e == "string") t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      }, _updatePosition: function() {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng), e = K(this.options.offset), i = this._getAnchor();
          this._zoomAnimated ? bt(this._container, t.add(i)) : e = e.add(t).add(i);
          var n = this._containerBottom = -e.y, o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
          this._container.style.bottom = n + "px", this._container.style.left = o + "px";
        }
      }, _getAnchor: function() {
        return [0, 0];
      } });
      ht.include({ _initOverlay: function(t, e, i, n) {
        var o = e;
        return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
      } }), $t.include({ _initOverlay: function(t, e, i, n) {
        var o = i;
        return o instanceof t ? (E(o, n), o._source = this) : (o = e && !n ? e : new t(n, this), o.setContent(i)), o;
      } });
      var Ai = Xt.extend({ options: { pane: "popupPane", offset: [0, 7], maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: true, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: false, closeButton: true, autoClose: true, closeOnEscapeKey: true, className: "" }, openOn: function(t) {
        return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, Xt.prototype.openOn.call(this, t);
      }, onAdd: function(t) {
        Xt.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, true), this._source instanceof ve || this._source.on("preclick", Te));
      }, onRemove: function(t) {
        Xt.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, true), this._source instanceof ve || this._source.off("preclick", Te));
      }, getEvents: function() {
        var t = Xt.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      }, _initLayout: function() {
        var t = "leaflet-popup", e = this._container = dt("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"), i = this._wrapper = dt("div", t + "-content-wrapper", e);
        if (this._contentNode = dt("div", t + "-content", i), ni(e), dn(this._contentNode), it(e, "contextmenu", Te), this._tipContainer = dt("div", t + "-tip-container", e), this._tip = dt("div", t + "-tip", this._tipContainer), this.options.closeButton) {
          var n = this._closeButton = dt("a", t + "-close-button", e);
          n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', it(n, "click", function(o) {
            Ct(o), this.close();
          }, this);
        }
      }, _updateLayout: function() {
        var t = this._contentNode, e = t.style;
        e.width = "", e.whiteSpace = "nowrap";
        var i = t.offsetWidth;
        i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
        var n = t.offsetHeight, o = this.options.maxHeight, r = "leaflet-popup-scrolled";
        o && n > o ? (e.height = o + "px", nt(t, r)) : wt(t, r), this._containerWidth = this._container.offsetWidth;
      }, _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
        bt(this._container, e.add(i));
      }, _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = false;
            return;
          }
          var t = this._map, e = parseInt(Qe(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, o = new Z(this._containerLeft, -i - this._containerBottom);
          o._add(Ce(this._container));
          var r = t.layerPointToContainerPoint(o), d = K(this.options.autoPanPadding), p = K(this.options.autoPanPaddingTopLeft || d), x = K(this.options.autoPanPaddingBottomRight || d), S = t.getSize(), D = 0, X = 0;
          r.x + n + x.x > S.x && (D = r.x + n - S.x + x.x), r.x - D - p.x < 0 && (D = r.x - p.x), r.y + i + x.y > S.y && (X = r.y + i - S.y + x.y), r.y - X - p.y < 0 && (X = r.y - p.y), (D || X) && (this.options.keepInView && (this._autopanning = true), t.fire("autopanstart").panBy([D, X]));
        }
      }, _getAnchor: function() {
        return K(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      } }), Qs = function(t, e) {
        return new Ai(t, e);
      };
      ht.mergeOptions({ closePopupOnClick: true }), ht.include({ openPopup: function(t, e, i) {
        return this._initOverlay(Ai, t, e, i).openOn(this), this;
      }, closePopup: function(t) {
        return t = arguments.length ? t : this._popup, t && t.close(), this;
      } }), $t.include({ bindPopup: function(t, e) {
        return this._popup = this._initOverlay(Ai, this._popup, t, e), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = true), this;
      }, unbindPopup: function() {
        return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = false, this._popup = null), this;
      }, openPopup: function(t) {
        return this._popup && (this instanceof se || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      }, closePopup: function() {
        return this._popup && this._popup.close(), this;
      }, togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      }, isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : false;
      }, setPopupContent: function(t) {
        return this._popup && this._popup.setContent(t), this;
      }, getPopup: function() {
        return this._popup;
      }, _openPopup: function(t) {
        if (!(!this._popup || !this._map)) {
          ke(t);
          var e = t.layer || t.target;
          if (this._popup._source === e && !(e instanceof ve)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
            return;
          }
          this._popup._source = e, this.openPopup(t.latlng);
        }
      }, _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      }, _onKeyPress: function(t) {
        t.originalEvent.keyCode === 13 && this._openPopup(t);
      } });
      var Zi = Xt.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: false, sticky: false, opacity: 0.9 }, onAdd: function(t) {
        Xt.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, true));
      }, onRemove: function(t) {
        Xt.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, true));
      }, getEvents: function() {
        var t = Xt.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      }, _initLayout: function() {
        var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = dt("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
      }, _updateLayout: function() {
      }, _adjustPan: function() {
      }, _setPosition: function(t) {
        var e, i, n = this._map, o = this._container, r = n.latLngToContainerPoint(n.getCenter()), d = n.layerPointToContainerPoint(t), p = this.options.direction, x = o.offsetWidth, S = o.offsetHeight, D = K(this.options.offset), X = this._getAnchor();
        p === "top" ? (e = x / 2, i = S) : p === "bottom" ? (e = x / 2, i = 0) : p === "center" ? (e = x / 2, i = S / 2) : p === "right" ? (e = 0, i = S / 2) : p === "left" ? (e = x, i = S / 2) : d.x < r.x ? (p = "right", e = 0, i = S / 2) : (p = "left", e = x + (D.x + X.x) * 2, i = S / 2), t = t.subtract(K(e, i, true)).add(D).add(X), wt(o, "leaflet-tooltip-right"), wt(o, "leaflet-tooltip-left"), wt(o, "leaflet-tooltip-top"), wt(o, "leaflet-tooltip-bottom"), nt(o, "leaflet-tooltip-" + p), bt(o, t);
      }, _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      }, setOpacity: function(t) {
        this.options.opacity = t, this._container && Dt(this._container, t);
      }, _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(e);
      }, _getAnchor: function() {
        return K(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      } }), tr = function(t, e) {
        return new Zi(t, e);
      };
      ht.include({ openTooltip: function(t, e, i) {
        return this._initOverlay(Zi, t, e, i).openOn(this), this;
      }, closeTooltip: function(t) {
        return t.close(), this;
      } }), $t.include({ bindTooltip: function(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Zi, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      }, unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(true), this.closeTooltip(), this._tooltip = null), this;
      }, _initTooltipInteractions: function(t) {
        if (!(!t && this._tooltipHandlersAdded)) {
          var e = t ? "off" : "on", i = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t;
        }
      }, openTooltip: function(t) {
        return this._tooltip && (this instanceof se || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      }, closeTooltip: function() {
        if (this._tooltip) return this._tooltip.close();
      }, toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      }, isTooltipOpen: function() {
        return this._tooltip.isOpen();
      }, setTooltipContent: function(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      }, getTooltip: function() {
        return this._tooltip;
      }, _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      }, _addFocusListenersOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && (it(e, "focus", function() {
          this._tooltip._source = t, this.openTooltip();
        }, this), it(e, "blur", this.closeTooltip, this));
      }, _setAriaDescribedByOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && e.setAttribute("aria-describedby", this._tooltip._container.id);
      }, _openTooltip: function(t) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = true;
            var e = this;
            this._map.once("moveend", function() {
              e._openOnceFlag = false, e._openTooltip(t);
            });
            return;
          }
          this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
        }
      }, _moveTooltip: function(t) {
        var e = t.latlng, i, n;
        this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(i), e = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(e);
      } });
      var Po = He.extend({ options: { iconSize: [12, 12], html: false, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(t) {
        var e = t && t.tagName === "DIV" ? t : document.createElement("div"), i = this.options;
        if (i.html instanceof Element ? (Pi(e), e.appendChild(i.html)) : e.innerHTML = i.html !== false ? i.html : "", i.bgPos) {
          var n = K(i.bgPos);
          e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      }, createShadow: function() {
        return null;
      } });
      function er(t) {
        return new Po(t);
      }
      He.Default = ri;
      var ai = $t.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: q.mobile, updateWhenZooming: true, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: false, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(t) {
        E(this, t);
      }, onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      }, beforeAdd: function(t) {
        t._addZoomLimit(this);
      }, onRemove: function(t) {
        this._removeAllTiles(), vt(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      }, bringToFront: function() {
        return this._map && (De(this._container), this._setAutoZIndex(Math.max)), this;
      }, bringToBack: function() {
        return this._map && (Fe(this._container), this._setAutoZIndex(Math.min)), this;
      }, getContainer: function() {
        return this._container;
      }, setOpacity: function(t) {
        return this.options.opacity = t, this._updateOpacity(), this;
      }, setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      }, isLoading: function() {
        return this._loading;
      }, redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
        }
        return this;
      }, getEvents: function() {
        var t = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = A(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      }, createTile: function() {
        return document.createElement("div");
      }, getTileSize: function() {
        var t = this.options.tileSize;
        return t instanceof Z ? t : new Z(t, t);
      }, _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      }, _setAutoZIndex: function(t) {
        for (var e = this.getPane().children, i = -t(-1 / 0, 1 / 0), n = 0, o = e.length, r; n < o; n++) r = e[n].style.zIndex, e[n] !== this._container && r && (i = t(i, +r));
        isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex());
      }, _updateOpacity: function() {
        if (this._map && !q.ielt9) {
          Dt(this._container, this.options.opacity);
          var t = +/* @__PURE__ */ new Date(), e = false, i = false;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (!(!o.current || !o.loaded)) {
              var r = Math.min(1, (t - o.loaded) / 200);
              Dt(o.el, r), r < 1 ? e = true : (o.active ? i = true : this._onOpaqueTile(o), o.active = true);
            }
          }
          i && !this._noPrune && this._pruneTiles(), e && (H(this._fadeFrame), this._fadeFrame = V(this._updateOpacity, this));
        }
      }, _onOpaqueTile: g, _initContainer: function() {
        this._container || (this._container = dt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      }, _updateLevels: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        if (t !== void 0) {
          for (var i in this._levels) i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (vt(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
          var n = this._levels[t], o = this._map;
          return n || (n = this._levels[t] = {}, n.el = dt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), g(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
        }
      }, _onUpdateLevel: g, _onRemoveLevel: g, _onCreateLevel: g, _pruneTiles: function() {
        if (this._map) {
          var t, e, i = this._map.getZoom();
          if (i > this.options.maxZoom || i < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles) e = this._tiles[t], e.retain = e.current;
          for (t in this._tiles) if (e = this._tiles[t], e.current && !e.active) {
            var n = e.coords;
            this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
          }
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      }, _removeTilesAtZoom: function(t) {
        for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
      }, _removeAllTiles: function() {
        for (var t in this._tiles) this._removeTile(t);
      }, _invalidateAll: function() {
        for (var t in this._levels) vt(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      }, _retainParent: function(t, e, i, n) {
        var o = Math.floor(t / 2), r = Math.floor(e / 2), d = i - 1, p = new Z(+o, +r);
        p.z = +d;
        var x = this._tileCoordsToKey(p), S = this._tiles[x];
        return S && S.active ? (S.retain = true, true) : (S && S.loaded && (S.retain = true), d > n ? this._retainParent(o, r, d, n) : false);
      }, _retainChildren: function(t, e, i, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++) for (var r = 2 * e; r < 2 * e + 2; r++) {
          var d = new Z(o, r);
          d.z = i + 1;
          var p = this._tileCoordsToKey(d), x = this._tiles[p];
          if (x && x.active) {
            x.retain = true;
            continue;
          } else x && x.loaded && (x.retain = true);
          i + 1 < n && this._retainChildren(o, r, i + 1, n);
        }
      }, _resetView: function(t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      }, _animateZoom: function(t) {
        this._setView(t.center, t.zoom, true, t.noUpdate);
      }, _clampZoom: function(t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
      }, _setView: function(t, e, i, n) {
        var o = Math.round(e);
        this.options.maxZoom !== void 0 && o > this.options.maxZoom || this.options.minZoom !== void 0 && o < this.options.minZoom ? o = void 0 : o = this._clampZoom(o);
        var r = this.options.updateWhenZooming && o !== this._tileZoom;
        (!n || r) && (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), o !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
      }, _setZoomTransforms: function(t, e) {
        for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
      }, _setZoomTransform: function(t, e, i) {
        var n = this._map.getZoomScale(i, t.zoom), o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
        q.any3d ? Le(t.el, o, n) : bt(t.el, o);
      }, _resetGrid: function() {
        var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)];
      }, _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      }, _getTiledPixelBounds: function(t) {
        var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), n = e.getZoomScale(i, this._tileZoom), o = e.project(t, this._tileZoom).floor(), r = e.getSize().divideBy(n * 2);
        return new lt(o.subtract(r), o.add(r));
      }, _update: function(t) {
        var e = this._map;
        if (e) {
          var i = this._clampZoom(e.getZoom());
          if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
            var n = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(n), r = o.getCenter(), d = [], p = this.options.keepBuffer, x = new lt(o.getBottomLeft().subtract([p, -p]), o.getTopRight().add([p, -p]));
            if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for (var S in this._tiles) {
              var D = this._tiles[S].coords;
              (D.z !== this._tileZoom || !x.contains(new Z(D.x, D.y))) && (this._tiles[S].current = false);
            }
            if (Math.abs(i - this._tileZoom) > 1) {
              this._setView(t, i);
              return;
            }
            for (var X = o.min.y; X <= o.max.y; X++) for (var st = o.min.x; st <= o.max.x; st++) {
              var Mt = new Z(st, X);
              if (Mt.z = this._tileZoom, !!this._isValidTile(Mt)) {
                var Lt = this._tiles[this._tileCoordsToKey(Mt)];
                Lt ? Lt.current = true : d.push(Mt);
              }
            }
            if (d.sort(function(Nt, Ge) {
              return Nt.distanceTo(r) - Ge.distanceTo(r);
            }), d.length !== 0) {
              this._loading || (this._loading = true, this.fire("loading"));
              var Vt = document.createDocumentFragment();
              for (st = 0; st < d.length; st++) this._addTile(d[st], Vt);
              this._level.el.appendChild(Vt);
            }
          }
        }
      }, _isValidTile: function(t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var i = this._globalTileRange;
          if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return false;
        }
        if (!this.options.bounds) return true;
        var n = this._tileCoordsToBounds(t);
        return O(this.options.bounds).overlaps(n);
      }, _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      }, _tileCoordsToNwSe: function(t) {
        var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), o = n.add(i), r = e.unproject(n, t.z), d = e.unproject(o, t.z);
        return [r, d];
      }, _tileCoordsToBounds: function(t) {
        var e = this._tileCoordsToNwSe(t), i = new Q(e[0], e[1]);
        return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
      }, _tileCoordsToKey: function(t) {
        return t.x + ":" + t.y + ":" + t.z;
      }, _keyToTileCoords: function(t) {
        var e = t.split(":"), i = new Z(+e[0], +e[1]);
        return i.z = +e[2], i;
      }, _removeTile: function(t) {
        var e = this._tiles[t];
        e && (vt(e.el), delete this._tiles[t], this.fire("tileunload", { tile: e.el, coords: this._keyToTileCoords(t) }));
      }, _initTile: function(t) {
        nt(t, "leaflet-tile");
        var e = this.getTileSize();
        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = g, t.onmousemove = g, q.ielt9 && this.options.opacity < 1 && Dt(t, this.options.opacity);
      }, _addTile: function(t, e) {
        var i = this._getTilePos(t), n = this._tileCoordsToKey(t), o = this.createTile(this._wrapCoords(t), v(this._tileReady, this, t));
        this._initTile(o), this.createTile.length < 2 && V(v(this._tileReady, this, t, null, o)), bt(o, i), this._tiles[n] = { el: o, coords: t, current: true }, e.appendChild(o), this.fire("tileloadstart", { tile: o, coords: t });
      }, _tileReady: function(t, e, i) {
        e && this.fire("tileerror", { error: e, tile: i, coords: t });
        var n = this._tileCoordsToKey(t);
        i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Dt(i.el, 0), H(this._fadeFrame), this._fadeFrame = V(this._updateOpacity, this)) : (i.active = true, this._pruneTiles()), e || (nt(i.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: i.el, coords: t })), this._noTilesToLoad() && (this._loading = false, this.fire("load"), q.ielt9 || !this._map._fadeAnimated ? V(this._pruneTiles, this) : setTimeout(v(this._pruneTiles, this), 250)));
      }, _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      }, _wrapCoords: function(t) {
        var e = new Z(this._wrapX ? j(t.x, this._wrapX) : t.x, this._wrapY ? j(t.y, this._wrapY) : t.y);
        return e.z = t.z, e;
      }, _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new lt(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
      }, _noTilesToLoad: function() {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return false;
        return true;
      } });
      function ir(t) {
        return new ai(t);
      }
      var Ue = ai.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: false, zoomReverse: false, detectRetina: false, crossOrigin: false, referrerPolicy: false }, initialize: function(t, e) {
        this._url = t, e = E(this, e), e.detectRetina && q.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      }, setUrl: function(t, e) {
        return this._url === t && e === void 0 && (e = true), this._url = t, e || this.redraw(), this;
      }, createTile: function(t, e) {
        var i = document.createElement("img");
        return it(i, "load", v(this._tileOnLoad, this, e, i)), it(i, "error", v(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
      }, getTileUrl: function(t) {
        var e = { r: q.retina ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() };
        if (this._map && !this._map.options.crs.infinite) {
          var i = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = i), e["-y"] = i;
        }
        return R(this._url, c(e, this.options));
      }, _tileOnLoad: function(t, e) {
        q.ielt9 ? setTimeout(v(t, this, null, e), 0) : t(null, e);
      }, _tileOnError: function(t, e, i) {
        var n = this.options.errorTileUrl;
        n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
      }, _onTileRemove: function(t) {
        t.tile.onload = null;
      }, _getZoomForUrl: function() {
        var t = this._tileZoom, e = this.options.maxZoom, i = this.options.zoomReverse, n = this.options.zoomOffset;
        return i && (t = e - t), t + n;
      }, _getSubdomain: function(t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      }, _abortLoading: function() {
        var t, e;
        for (t in this._tiles) if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = g, e.onerror = g, !e.complete)) {
          e.src = G;
          var i = this._tiles[t].coords;
          vt(e), delete this._tiles[t], this.fire("tileabort", { tile: e, coords: i });
        }
      }, _removeTile: function(t) {
        var e = this._tiles[t];
        if (e) return e.el.setAttribute("src", G), ai.prototype._removeTile.call(this, t);
      }, _tileReady: function(t, e, i) {
        if (!(!this._map || i && i.getAttribute("src") === G)) return ai.prototype._tileReady.call(this, t, e, i);
      } });
      function Lo(t, e) {
        return new Ue(t, e);
      }
      var Co = Ue.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: false, version: "1.1.1" }, options: { crs: null, uppercase: false }, initialize: function(t, e) {
        this._url = t;
        var i = c({}, this.defaultWmsParams);
        for (var n in e) n in this.options || (i[n] = e[n]);
        e = E(this, e);
        var o = e.detectRetina && q.retina ? 2 : 1, r = this.getTileSize();
        i.width = r.x * o, i.height = r.y * o, this.wmsParams = i;
      }, onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, Ue.prototype.onAdd.call(this, t);
      }, getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t), i = this._crs, n = _t(i.project(e[0]), i.project(e[1])), o = n.min, r = n.max, d = (this._wmsVersion >= 1.3 && this._crs === vo ? [o.y, o.x, r.y, r.x] : [o.x, o.y, r.x, r.y]).join(","), p = Ue.prototype.getTileUrl.call(this, t);
        return p + P(this.wmsParams, p, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + d;
      }, setParams: function(t, e) {
        return c(this.wmsParams, t), e || this.redraw(), this;
      } });
      function nr(t, e) {
        return new Co(t, e);
      }
      Ue.WMS = Co, Lo.wms = nr;
      var le = $t.extend({ options: { padding: 0.1 }, initialize: function(t) {
        E(this, t), f(this), this._layers = this._layers || {};
      }, onAdd: function() {
        this._container || (this._initContainer(), nt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      }, onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      }, getEvents: function() {
        var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      }, _onAnimZoom: function(t) {
        this._updateTransform(t.center, t.zoom);
      }, _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      }, _updateTransform: function(t, e) {
        var i = this._map.getZoomScale(e, this._zoom), n = this._map.getSize().multiplyBy(0.5 + this.options.padding), o = this._map.project(this._center, e), r = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
        q.any3d ? Le(this._container, r, i) : bt(this._container, r);
      }, _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers) this._layers[t]._reset();
      }, _onZoomEnd: function() {
        for (var t in this._layers) this._layers[t]._project();
      }, _updatePaths: function() {
        for (var t in this._layers) this._layers[t]._update();
      }, _update: function() {
        var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new lt(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      } }), To = le.extend({ options: { tolerance: 0 }, getEvents: function() {
        var t = le.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      }, _onViewPreReset: function() {
        this._postponeUpdatePaths = true;
      }, onAdd: function() {
        le.prototype.onAdd.call(this), this._draw();
      }, _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        it(t, "mousemove", this._onMouseMove, this), it(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), it(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = true, this._ctx = t.getContext("2d");
      }, _destroyContainer: function() {
        H(this._redrawRequest), delete this._ctx, vt(this._container), pt(this._container), delete this._container;
      }, _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var t;
          this._redrawBounds = null;
          for (var e in this._layers) t = this._layers[e], t._update();
          this._redraw();
        }
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          le.prototype._update.call(this);
          var t = this._bounds, e = this._container, i = t.getSize(), n = q.retina ? 2 : 1;
          bt(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", q.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
        }
      }, _reset: function() {
        le.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = false, this._updatePaths());
      }, _initPath: function(t) {
        this._updateDashArray(t), this._layers[f(t)] = t;
        var e = t._order = { layer: t, prev: this._drawLast, next: null };
        this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
      }, _addPath: function(t) {
        this._requestRedraw(t);
      }, _removePath: function(t) {
        var e = t._order, i = e.next, n = e.prev;
        i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[f(t)], this._requestRedraw(t);
      }, _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      }, _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      }, _updateDashArray: function(t) {
        if (typeof t.options.dashArray == "string") {
          var e = t.options.dashArray.split(/[, ]+/), i = [], n, o;
          for (o = 0; o < e.length; o++) {
            if (n = Number(e[o]), isNaN(n)) return;
            i.push(n);
          }
          t.options._dashArray = i;
        } else t.options._dashArray = t.options.dashArray;
      }, _requestRedraw: function(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || V(this._redraw, this));
      }, _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new lt(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
        }
      }, _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      }, _clear: function() {
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
        } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      }, _draw: function() {
        var t, e = this._redrawBounds;
        if (this._ctx.save(), e) {
          var i = e.getSize();
          this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
        }
        this._drawing = true;
        for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
        this._drawing = false, this._ctx.restore();
      }, _updatePoly: function(t, e) {
        if (this._drawing) {
          var i, n, o, r, d = t._parts, p = d.length, x = this._ctx;
          if (p) {
            for (x.beginPath(), i = 0; i < p; i++) {
              for (n = 0, o = d[i].length; n < o; n++) r = d[i][n], x[n ? "lineTo" : "moveTo"](r.x, r.y);
              e && x.closePath();
            }
            this._fillStroke(x, t);
          }
        }
      }, _updateCircle: function(t) {
        if (!(!this._drawing || t._empty())) {
          var e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
          o !== 1 && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, Math.PI * 2, false), o !== 1 && i.restore(), this._fillStroke(i, t);
        }
      }, _fillStroke: function(t, e) {
        var i = e.options;
        i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
      }, _onClick: function(t) {
        for (var e = this._map.mouseEventToLayerPoint(t), i, n, o = this._drawFirst; o; o = o.next) i = o.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (n = i);
        this._fireEvent(n ? [n] : false, t);
      }, _onMouseMove: function(t) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      }, _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e && (wt(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = false);
      }, _handleMouseHover: function(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var i, n, o = this._drawFirst; o; o = o.next) i = o.layer, i.options.interactive && i._containsPoint(e) && (n = i);
          n !== this._hoveredLayer && (this._handleMouseOut(t), n && (nt(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : false, t), this._mouseHoverThrottled = true, setTimeout(v(function() {
            this._mouseHoverThrottled = false;
          }, this), 32);
        }
      }, _fireEvent: function(t, e, i) {
        this._map._fireDOMEvent(e, i || e.type, t);
      }, _bringToFront: function(t) {
        var e = t._order;
        if (e) {
          var i = e.next, n = e.prev;
          if (i) i.prev = n;
          else return;
          n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
        }
      }, _bringToBack: function(t) {
        var e = t._order;
        if (e) {
          var i = e.next, n = e.prev;
          if (n) n.next = i;
          else return;
          i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
        }
      } });
      function ko(t) {
        return q.canvas ? new To(t) : null;
      }
      var li = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch {
        }
        return function(t) {
          return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), or = { _initContainer: function() {
        this._container = dt("div", "leaflet-vml-container");
      }, _update: function() {
        this._map._animatingZoom || (le.prototype._update.call(this), this.fire("update"));
      }, _initPath: function(t) {
        var e = t._container = li("shape");
        nt(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = li("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[f(t)] = t;
      }, _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      }, _removePath: function(t) {
        var e = t._container;
        vt(e), t.removeInteractiveTarget(e), delete this._layers[f(t)];
      }, _updateStyle: function(t) {
        var e = t._stroke, i = t._fill, n = t.options, o = t._container;
        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = li("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = F(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = li("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null);
      }, _updateCircle: function(t) {
        var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
      }, _setPath: function(t, e) {
        t._path.v = e;
      }, _bringToFront: function(t) {
        De(t._container);
      }, _bringToBack: function(t) {
        Fe(t._container);
      } }, Bi = q.vml ? li : Ht, hi = le.extend({ _initContainer: function() {
        this._container = Bi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Bi("g"), this._container.appendChild(this._rootGroup);
      }, _destroyContainer: function() {
        vt(this._container), pt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          le.prototype._update.call(this);
          var t = this._bounds, e = t.getSize(), i = this._container;
          (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), bt(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
        }
      }, _initPath: function(t) {
        var e = t._path = Bi("path");
        t.options.className && nt(e, t.options.className), t.options.interactive && nt(e, "leaflet-interactive"), this._updateStyle(t), this._layers[f(t)] = t;
      }, _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      }, _removePath: function(t) {
        vt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[f(t)];
      }, _updatePath: function(t) {
        t._project(), t._update();
      }, _updateStyle: function(t) {
        var e = t._path, i = t.options;
        e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      }, _updatePoly: function(t, e) {
        this._setPath(t, qt(t._parts, e));
      }, _updateCircle: function(t) {
        var e = t._point, i = Math.max(Math.round(t._radius), 1), n = Math.max(Math.round(t._radiusY), 1) || i, o = "a" + i + "," + n + " 0 1,0 ", r = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + i * 2 + ",0 " + o + -i * 2 + ",0 ";
        this._setPath(t, r);
      }, _setPath: function(t, e) {
        t._path.setAttribute("d", e);
      }, _bringToFront: function(t) {
        De(t._path);
      }, _bringToBack: function(t) {
        Fe(t._path);
      } });
      q.vml && hi.include(or);
      function Mo(t) {
        return q.svg || q.vml ? new hi(t) : null;
      }
      ht.include({ getRenderer: function(t) {
        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
        return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
      }, _getPaneRenderer: function(t) {
        if (t === "overlayPane" || t === void 0) return false;
        var e = this._paneRenderers[t];
        return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
      }, _createRenderer: function(t) {
        return this.options.preferCanvas && ko(t) || Mo(t);
      } });
      var So = We.extend({ initialize: function(t, e) {
        We.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      }, setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      }, _boundsToLatLngs: function(t) {
        return t = O(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
      } });
      function sr(t, e) {
        return new So(t, e);
      }
      hi.create = Bi, hi.pointsToPath = qt, ae.geometryToLayer = Ii, ae.coordsToLatLng = wn, ae.coordsToLatLngs = Oi, ae.latLngToCoords = bn, ae.latLngsToCoords = Ni, ae.getFeature = $e, ae.asFeature = ji, ht.mergeOptions({ boxZoom: true });
      var Eo = Jt.extend({ initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      }, addHooks: function() {
        it(this._container, "mousedown", this._onMouseDown, this);
      }, removeHooks: function() {
        pt(this._container, "mousedown", this._onMouseDown, this);
      }, moved: function() {
        return this._moved;
      }, _destroy: function() {
        vt(this._pane), delete this._pane;
      }, _resetState: function() {
        this._resetStateTimeout = 0, this._moved = false;
      }, _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      }, _onMouseDown: function(t) {
        if (!t.shiftKey || t.which !== 1 && t.button !== 1) return false;
        this._clearDeferredResetState(), this._resetState(), ti(), on(), this._startPoint = this._map.mouseEventToContainerPoint(t), it(document, { contextmenu: ke, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseMove: function(t) {
        this._moved || (this._moved = true, this._box = dt("div", "leaflet-zoom-box", this._container), nt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var e = new lt(this._point, this._startPoint), i = e.getSize();
        bt(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
      }, _finish: function() {
        this._moved && (vt(this._box), wt(this._container, "leaflet-crosshair")), ei(), sn(), pt(document, { contextmenu: ke, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseUp: function(t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(v(this._resetState, this), 0);
          var e = new Q(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
          this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
        }
      }, _onKeyDown: function(t) {
        t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      } });
      ht.addInitHook("addHandler", "boxZoom", Eo), ht.mergeOptions({ doubleClickZoom: true });
      var Io = Jt.extend({ addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      }, removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      }, _onDoubleClick: function(t) {
        var e = this._map, i = e.getZoom(), n = e.options.zoomDelta, o = t.originalEvent.shiftKey ? i - n : i + n;
        e.options.doubleClickZoom === "center" ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
      } });
      ht.addInitHook("addHandler", "doubleClickZoom", Io), ht.mergeOptions({ dragging: true, inertia: true, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: false, maxBoundsViscosity: 0 });
      var Oo = Jt.extend({ addHooks: function() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new _e(t._mapPane, t._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
        }
        nt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      }, removeHooks: function() {
        wt(this._map._container, "leaflet-grab"), wt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, moving: function() {
        return this._draggable && this._draggable._moving;
      }, _onDragStart: function() {
        var t = this._map;
        if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var e = O(this._map.options.maxBounds);
          this._offsetLimit = _t(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else this._offsetLimit = null;
        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
      }, _onDrag: function(t) {
        if (this._map.options.inertia) {
          var e = this._lastTime = +/* @__PURE__ */ new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(i), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire("move", t).fire("drag", t);
      }, _prunePositions: function(t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; ) this._positions.shift(), this._times.shift();
      }, _onZoomEnd: function() {
        var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      }, _viscousLimit: function(t, e) {
        return t - (t - e) * this._viscosity;
      }, _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
        }
      }, _onPreDragWrap: function() {
        var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - e + i) % t + e - i, r = (n + e + i) % t - e - i, d = Math.abs(o + i) < Math.abs(r + i) ? o : r;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = d;
      }, _onDragEnd: function(t) {
        var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
        if (e.fire("dragend", t), n) e.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var o = this._lastPos.subtract(this._positions[0]), r = (this._lastTime - this._times[0]) / 1e3, d = i.easeLinearity, p = o.multiplyBy(d / r), x = p.distanceTo([0, 0]), S = Math.min(i.inertiaMaxSpeed, x), D = p.multiplyBy(S / x), X = S / (i.inertiaDeceleration * d), st = D.multiplyBy(-X / 2).round();
          !st.x && !st.y ? e.fire("moveend") : (st = e._limitOffset(st, e.options.maxBounds), V(function() {
            e.panBy(st, { duration: X, easeLinearity: d, noMoveStart: true, animate: true });
          }));
        }
      } });
      ht.addInitHook("addHandler", "dragging", Oo), ht.mergeOptions({ keyboard: true, keyboardPanDelta: 80 });
      var No = Jt.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      }, addHooks: function() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), it(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, removeHooks: function() {
        this._removeHooks(), pt(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, _onMouseDown: function() {
        if (!this._focused) {
          var t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(n, i);
        }
      }, _onFocus: function() {
        this._focused = true, this._map.fire("focus");
      }, _onBlur: function() {
        this._focused = false, this._map.fire("blur");
      }, _setPanDelta: function(t) {
        var e = this._panKeys = {}, i = this.keyCodes, n, o;
        for (n = 0, o = i.left.length; n < o; n++) e[i.left[n]] = [-1 * t, 0];
        for (n = 0, o = i.right.length; n < o; n++) e[i.right[n]] = [t, 0];
        for (n = 0, o = i.down.length; n < o; n++) e[i.down[n]] = [0, t];
        for (n = 0, o = i.up.length; n < o; n++) e[i.up[n]] = [0, -1 * t];
      }, _setZoomDelta: function(t) {
        var e = this._zoomKeys = {}, i = this.keyCodes, n, o;
        for (n = 0, o = i.zoomIn.length; n < o; n++) e[i.zoomIn[n]] = t;
        for (n = 0, o = i.zoomOut.length; n < o; n++) e[i.zoomOut[n]] = -t;
      }, _addHooks: function() {
        it(document, "keydown", this._onKeyDown, this);
      }, _removeHooks: function() {
        pt(document, "keydown", this._onKeyDown, this);
      }, _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode, i = this._map, n;
          if (e in this._panKeys) {
            if (!i._panAnim || !i._panAnim._inProgress) if (n = this._panKeys[e], t.shiftKey && (n = K(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(K(n), i.options.maxBounds)), i.options.worldCopyJump) {
              var o = i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));
              i.panTo(o);
            } else i.panBy(n);
          } else if (e in this._zoomKeys) i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey) i.closePopup();
          else return;
          ke(t);
        }
      } });
      ht.addInitHook("addHandler", "keyboard", No), ht.mergeOptions({ scrollWheelZoom: true, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
      var jo = Jt.extend({ addHooks: function() {
        it(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      }, removeHooks: function() {
        pt(this._map._container, "wheel", this._onWheelScroll, this);
      }, _onWheelScroll: function(t) {
        var e = no(t), i = this._map.options.wheelDebounceTime;
        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(v(this._performZoom, this), n), ke(t);
      }, _performZoom: function() {
        var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
        t._stop();
        var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, r = i ? Math.ceil(o / i) * i : o, d = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
        this._delta = 0, this._startTime = null, d && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + d) : t.setZoomAround(this._lastMousePos, e + d));
      } });
      ht.addInitHook("addHandler", "scrollWheelZoom", jo);
      var rr = 600;
      ht.mergeOptions({ tapHold: q.touchNative && q.safari && q.mobile, tapTolerance: 15 });
      var zo = Jt.extend({ addHooks: function() {
        it(this._map._container, "touchstart", this._onDown, this);
      }, removeHooks: function() {
        pt(this._map._container, "touchstart", this._onDown, this);
      }, _onDown: function(t) {
        if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
          var e = t.touches[0];
          this._startPos = this._newPos = new Z(e.clientX, e.clientY), this._holdTimeout = setTimeout(v(function() {
            this._cancel(), this._isTapValid() && (it(document, "touchend", Ct), it(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
          }, this), rr), it(document, "touchend touchcancel contextmenu", this._cancel, this), it(document, "touchmove", this._onMove, this);
        }
      }, _cancelClickPrevent: function t() {
        pt(document, "touchend", Ct), pt(document, "touchend touchcancel", t);
      }, _cancel: function() {
        clearTimeout(this._holdTimeout), pt(document, "touchend touchcancel contextmenu", this._cancel, this), pt(document, "touchmove", this._onMove, this);
      }, _onMove: function(t) {
        var e = t.touches[0];
        this._newPos = new Z(e.clientX, e.clientY);
      }, _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      }, _simulateEvent: function(t, e) {
        var i = new MouseEvent(t, { bubbles: true, cancelable: true, view: window, screenX: e.screenX, screenY: e.screenY, clientX: e.clientX, clientY: e.clientY });
        i._simulated = true, e.target.dispatchEvent(i);
      } });
      ht.addInitHook("addHandler", "tapHold", zo), ht.mergeOptions({ touchZoom: q.touch, bounceAtZoomLimits: true });
      var Ao = Jt.extend({ addHooks: function() {
        nt(this._map._container, "leaflet-touch-zoom"), it(this._map._container, "touchstart", this._onTouchStart, this);
      }, removeHooks: function() {
        wt(this._map._container, "leaflet-touch-zoom"), pt(this._map._container, "touchstart", this._onTouchStart, this);
      }, _onTouchStart: function(t) {
        var e = this._map;
        if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
          var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
          this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = false, this._zooming = true, e._stop(), it(document, "touchmove", this._onTouchMove, this), it(document, "touchend touchcancel", this._onTouchEnd, this), Ct(t);
        }
      }, _onTouchMove: function(t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), o = i.distanceTo(n) / this._startDist;
          if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && o > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
            if (this._center = this._startLatLng, o === 1) return;
          } else {
            var r = i._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (o === 1 && r.x === 0 && r.y === 0) return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom);
          }
          this._moved || (e._moveStart(true, false), this._moved = true), H(this._animRequest);
          var d = v(e._move, e, this._center, this._zoom, { pinch: true, round: false }, void 0);
          this._animRequest = V(d, this, true), Ct(t);
        }
      }, _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = false;
          return;
        }
        this._zooming = false, H(this._animRequest), pt(document, "touchmove", this._onTouchMove, this), pt(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      } });
      ht.addInitHook("addHandler", "touchZoom", Ao), ht.BoxZoom = Eo, ht.DoubleClickZoom = Io, ht.Drag = Oo, ht.Keyboard = No, ht.ScrollWheelZoom = jo, ht.TapHold = zo, ht.TouchZoom = Ao, a.Bounds = lt, a.Browser = q, a.CRS = Tt, a.Canvas = To, a.Circle = xn, a.CircleMarker = Ei, a.Class = ft, a.Control = Wt, a.DivIcon = Po, a.DivOverlay = Xt, a.DomEvent = Ls, a.DomUtil = bs, a.Draggable = _e, a.Evented = St, a.FeatureGroup = se, a.GeoJSON = ae, a.GridLayer = ai, a.Handler = Jt, a.Icon = He, a.ImageOverlay = zi, a.LatLng = tt, a.LatLngBounds = Q, a.Layer = $t, a.LayerGroup = Ve, a.LineUtil = Zs, a.Map = ht, a.Marker = Si, a.Mixin = Is, a.Path = ve, a.Point = Z, a.PolyUtil = Os, a.Polygon = We, a.Polyline = re, a.Popup = Ai, a.PosAnimation = oo, a.Projection = Bs, a.Rectangle = So, a.Renderer = le, a.SVG = hi, a.SVGOverlay = bo, a.TileLayer = Ue, a.Tooltip = Zi, a.Transformation = gt, a.Util = ut, a.VideoOverlay = wo, a.bind = v, a.bounds = _t, a.canvas = ko, a.circle = Us, a.circleMarker = $s, a.control = oi, a.divIcon = er, a.extend = c, a.featureGroup = Vs, a.geoJSON = xo, a.geoJson = Ys, a.gridLayer = ir, a.icon = Hs, a.imageOverlay = Ks, a.latLng = W, a.latLngBounds = O, a.layerGroup = Fs, a.map = Cs, a.marker = Ws, a.point = K, a.polygon = qs, a.polyline = Gs, a.popup = Qs, a.rectangle = sr, a.setOptions = E, a.stamp = f, a.svg = Mo, a.svgOverlay = Xs, a.tileLayer = Lo, a.tooltip = tr, a.transformation = It, a.version = h, a.videoOverlay = Js;
      var ar = window.L;
      a.noConflict = function() {
        return window.L = ar, this;
      }, window.L = a;
    }));
  })(mi, mi.exports)), mi.exports;
}
var Ui = Pa();
const Qo = Cr(Ui);
function ls(s, u, a) {
  return Object.freeze({ instance: s, context: u, container: a });
}
function hs(s, u) {
  return u == null ? function(h, c) {
    const _ = k.useRef();
    return _.current || (_.current = s(h, c)), _;
  } : function(h, c) {
    const _ = k.useRef();
    _.current || (_.current = s(h, c));
    const v = k.useRef(h), { instance: w } = _.current;
    return k.useEffect(function() {
      v.current !== h && (u(w, h, v.current), v.current = h);
    }, [w, h, c]), _;
  };
}
function La(s, u) {
  k.useEffect(function() {
    return (u.layerContainer ?? u.map).addLayer(s.instance), function() {
      var _;
      (_ = u.layerContainer) == null || _.removeLayer(s.instance), u.map.removeLayer(s.instance);
    };
  }, [u, s]);
}
function Ca(s, u) {
  const a = k.useRef();
  k.useEffect(function() {
    if (u.pathOptions !== a.current) {
      const c = u.pathOptions ?? {};
      s.instance.setStyle(c), a.current = c;
    }
  }, [s, u]);
}
function Ta(s) {
  return function(a) {
    const h = Hn(), c = s(wa(a, h), h);
    return xa(c.current, a.eventHandlers), La(c.current, h), Ca(c.current, a), c;
  };
}
function ka(s) {
  function u(c, _) {
    return ls(s(c), _);
  }
  const a = hs(u), h = ya(a);
  return ga(h);
}
function Ma(s, u) {
  const a = hs(s, u), h = Ta(a);
  return va(h);
}
function Sa() {
  return Hn().map;
}
const Ea = Ma(function({ data: u, ...a }, h) {
  const c = new Ui.GeoJSON(u, a);
  return ls(c, _a(h, { overlayContainer: c }));
}, function(u, a, h) {
  a.style !== h.style && (a.style == null ? u.resetStyle() : u.setStyle(a.style));
});
function An() {
  return An = Object.assign || function(s) {
    for (var u = 1; u < arguments.length; u++) {
      var a = arguments[u];
      for (var h in a) Object.prototype.hasOwnProperty.call(a, h) && (s[h] = a[h]);
    }
    return s;
  }, An.apply(this, arguments);
}
function Ia({ bounds: s, boundsOptions: u, center: a, children: h, className: c, id: _, placeholder: v, style: w, whenReady: f, zoom: A, ...j }, g) {
  const [C] = k.useState({ className: c, id: _, style: w }), [y, I] = k.useState(null);
  k.useImperativeHandle(g, () => (y == null ? void 0 : y.map) ?? null, [y]);
  const E = k.useCallback((z) => {
    if (z !== null && y === null) {
      const R = new Ui.Map(z, j);
      a != null && A != null ? R.setView(a, A) : s != null && R.fitBounds(s, u), f != null && R.whenReady(f), I(pa(R));
    }
  }, []);
  k.useEffect(() => () => {
    y == null || y.map.remove();
  }, [y]);
  const P = y ? rt.createElement(as, { value: y }, h) : v ?? null;
  return rt.createElement("div", An({}, C, { ref: E }), P);
}
const Oa = k.forwardRef(Ia), Na = ka(function(u) {
  return new Ui.Control.Zoom(u);
}), ja = { 北京市: ["region_bj"], 上海市: ["region_sh"], 广东省: ["region_sz", "region_gz"], 浙江省: ["region_hz"], 江苏省: ["region_sz2"] }, za = (s) => s.replace(/[&<>]/g, (u) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[u]), Vi = (s) => s.replace(/维吾尔自治区|壮族自治区|回族自治区|自治区|特别行政区|省|市/g, ""), Aa = /* @__PURE__ */ new Set(["天津市", "宁夏回族自治区", "重庆市", "香港特别行政区", "澳门特别行政区"]), Za = { 北京市: { direction: "right", offset: [90, -8] }, 江苏省: { direction: "right", offset: [42, -20] }, 上海市: { direction: "right", offset: [32, -4] }, 浙江省: { direction: "right", offset: [36, 18] }, 广东省: { direction: "bottom", offset: [8, 20] } }, Ba = { 北京市: { direction: "top", offset: [0, -20] }, 江苏省: { direction: "left", offset: [-16, -6] }, 上海市: { direction: "top", offset: [14, -10] }, 浙江省: { direction: "bottom", offset: [12, 18] }, 广东省: { direction: "left", offset: [-12, 14] } }, us = ["#F2F3F5", $i(0, 0.3), $i(0, 0.65), xe(0)], Ra = (s) => us[s >= 24 ? 3 : s >= 13 ? 2 : s > 0 ? 1 : 0];
function Da({ bounds: s }) {
  const u = Sa();
  return k.useEffect(() => {
    const a = () => u.getContainer().classList.toggle("ha-map-detail-labels", u.getZoom() >= 5);
    u.on("zoomend", a), a();
    const h = new ResizeObserver(() => {
      u.invalidateSize({ animate: false }), u.fitBounds(s, { padding: [26, 26], animate: false });
    });
    return h.observe(u.getContainer()), () => {
      h.disconnect(), u.off("zoomend", a);
    };
  }, [u, s]), null;
}
function Fa({ regions: s, onProvince: u }) {
  const a = k.useRef(null), [h, c] = k.useState(null), [_, v] = k.useState(""), [w, f] = k.useState(0), [A, j] = k.useState("");
  k.useEffect(() => {
    const P = new AbortController();
    return v(""), fetch("./maps/china-provinces.json", { signal: P.signal }).then((z) => {
      if (!z.ok) throw Error("省级地图加载失败");
      return z.json();
    }).then((z) => {
      P.signal.aborted || c(z);
    }).catch((z) => {
      P.signal.aborted || v(z.message);
    }), () => P.abort();
  }, [w]);
  const g = k.useMemo(() => ((h == null ? void 0 : h.features) ?? []).filter((P) => {
    var z;
    return ((z = P.properties) == null ? void 0 : z.name) && P.properties.name !== "南海诸岛";
  }).map((P) => {
    var F;
    const z = String(((F = P.properties) == null ? void 0 : F.name) ?? ""), R = ja[z] ?? [];
    return { name: z, regionIds: R, eventCount: s.filter(($) => R.includes($.regionId)).reduce(($, G) => $ + G.eventCount, 0) };
  }), [h, s]), C = k.useMemo(() => {
    if (!h) return null;
    const P = Qo.geoJSON(h).getBounds();
    return Qo.latLngBounds([18, P.getWest()], [P.getNorth(), P.getEast()]);
  }, [h]), y = (P) => {
    const z = g.find((R) => {
      var F;
      return R.name === ((F = P == null ? void 0 : P.properties) == null ? void 0 : F.name);
    });
    return { color: "#B2C4DC", weight: 1, fillColor: (z == null ? void 0 : z.name) === A ? $i(0, 0.8) : Ra((z == null ? void 0 : z.eventCount) ?? 0), fillOpacity: 1 };
  }, I = (P, z) => {
    const R = g.find(($) => {
      var G;
      return $.name === ((G = P.properties) == null ? void 0 : G.name);
    });
    if (!R) return;
    const F = (window.matchMedia("(max-width:767px)").matches ? Ba : Za)[R.name];
    z.bindTooltip(`<span>${za(Vi(R.name))}</span>${R.eventCount ? `<b>${R.eventCount} 起</b>` : ""}`, { permanent: true, direction: (F == null ? void 0 : F.direction) ?? "center", offset: (F == null ? void 0 : F.offset) ?? [0, 0], className: `ha-province-label${R.eventCount ? " has-data" : ""}${Aa.has(R.name) ? " is-small" : ""}`, opacity: 1 }), z.on({ click: () => u(R), mouseover: () => j(R.name), mouseout: () => j("") }), z.on("add", () => {
      const $ = z.getElement();
      $ && ($.setAttribute("data-province", R.name), $.setAttribute("role", "button"), $.setAttribute("aria-label", `查看${Vi(R.name)}${R.eventCount}起投资事件`), $.setAttribute("tabindex", "0"), $.addEventListener("keydown", (G) => {
        const b = G.key;
        (b === "Enter" || b === " ") && (G.preventDefault(), u(R));
      }));
    });
  }, E = g.filter((P) => P.eventCount > 0).sort((P, z) => z.eventCount - P.eventCount);
  return l.jsxs("div", { className: "ha-investment-layout", children: [l.jsxs("div", { className: "ha-map-region", children: [_ ? l.jsx(Wi, { type: "error", content: _, action: l.jsx(At, { onClick: () => f((P) => P + 1), children: "重试" }) }) : h && C ? l.jsxs(l.Fragment, { children: [l.jsxs(Oa, { ref: a, className: "ha-geo-map", bounds: C, boundsOptions: { padding: [26, 26] }, minZoom: 2, maxZoom: 10, zoomSnap: 0.25, zoomControl: false, attributionControl: false, scrollWheelZoom: true, style: { height: "100%", width: "100%" }, children: [l.jsx(Ea, { data: h, style: y, onEachFeature: I }, s.map((P) => P.eventCount).join("-")), l.jsx(Na, { position: "topright" }), l.jsx(Da, { bounds: C })] }), l.jsx(At, { className: "ha-map-reset", type: "outline", icon: l.jsx(Vn, {}), "aria-label": "复位地图", onClick: () => {
    var P;
    return (P = a.current) == null ? void 0 : P.fitBounds(C, { padding: [26, 26] });
  } })] }) : l.jsx("div", { className: "ha-map-loading", children: l.jsx(Hi, { tip: "正在加载省级地图…" }) }), l.jsxs("div", { className: "ha-map-legend", children: [l.jsx("span", { children: "事件数量" }), us.map((P) => l.jsx("i", { style: { background: P } }, P)), l.jsx("span", { children: "由少到多" })] })] }), l.jsxs("div", { className: "ha-region-stats", children: [l.jsxs("div", { className: "ha-region-heading", children: [l.jsx("span", { children: "省份分布统计" }), l.jsx("span", { children: "投资事件" })] }), E.map((P) => l.jsxs("button", { className: A === P.name ? "is-active" : "", onClick: () => u(P), onMouseEnter: () => j(P.name), onMouseLeave: () => j(""), onFocus: () => j(P.name), onBlur: () => j(""), "aria-label": `查看${Vi(P.name)}${P.eventCount}起投资事件`, children: [l.jsx("span", { children: Vi(P.name) }), l.jsxs("strong", { children: [P.eventCount, l.jsx("small", { children: " 起" })] })] }, P.name)), l.jsxs("div", { className: "ha-province-total", children: [l.jsx("span", { children: "合计" }), l.jsxs("strong", { children: [E.reduce((P, z) => P + z.eventCount, 0), " 起"] })] })] })] });
}
function Va({ words: s, topicName: u }) {
  const a = Math.max(0, s.indexOf(u)), h = s.filter((_, v) => v !== a), c = ["is-north-west", "is-north-east", "is-south-west", "is-south-east"];
  return l.jsx("div", { className: "ha-topic-word-cloud", "aria-label": `${u}关键词词云`, children: s.length ? l.jsxs(l.Fragment, { children: [l.jsx("span", { className: "is-primary", children: s[a] }), h.map((_, v) => l.jsx("span", { className: c[v], children: _ }, _))] }) : l.jsx("span", { className: "ha-word-cloud-empty", children: "暂无关键词" }) });
}
function Ha({ tags: s }) {
  const u = k.useRef(null), a = k.useRef(null), [h, c] = k.useState(s.length);
  k.useLayoutEffect(() => {
    var g, C;
    let v = true, w = 0;
    const f = () => {
      if (!v || !u.current || !a.current) return;
      const y = Array.from(a.current.querySelectorAll("[data-tag-width]")).map((P) => P.getBoundingClientRect().width), I = [];
      a.current.querySelectorAll("[data-counter]").forEach((P) => {
        I[Number(P.dataset.counter)] = P.getBoundingClientRect().width;
      });
      const E = parseFloat(getComputedStyle(u.current).columnGap) || 0;
      c(Ir(y, u.current.clientWidth, I, E));
    }, A = () => {
      cancelAnimationFrame(w), w = requestAnimationFrame(f);
    };
    f();
    const j = new ResizeObserver(A);
    return j.observe(u.current), (g = document.fonts) == null || g.addEventListener("loadingdone", A), (C = document.fonts) == null || C.ready.then(() => {
      v && A();
    }), () => {
      var y;
      v = false, cancelAnimationFrame(w), j.disconnect(), (y = document.fonts) == null || y.removeEventListener("loadingdone", A);
    };
  }, [s]);
  const _ = s.slice(h);
  return l.jsxs("div", { ref: u, className: "ha-topic-card-tags", children: [s.slice(0, h).map((v) => l.jsx(qe, { children: v }, v)), _.length > 0 && l.jsxs(qe, { className: "ha-topic-tag-more", title: _.join("、"), "aria-label": `另外${_.length}个标签：${_.join("、")}`, children: ["+", _.length] }), l.jsxs("div", { ref: a, className: "ha-topic-tag-measure", "aria-hidden": "true", children: [s.map((v) => l.jsx(qe, { "data-tag-width": true, children: v }, v)), s.map((v, w) => l.jsxs(qe, { className: "ha-topic-tag-more", "data-counter": w + 1, children: ["+", w + 1] }, `count-${w}`))] })] });
}
async function Ut(s, u = {}, a = "GET") {
  const h = await ss.request(a, s, u);
  if (h instanceof Blob) throw Error("返回了意外的文件数据");
  if (h.code !== 0) throw Error(h.message);
  return h.data;
}
const di = (s) => `${s[0]} — ${s[1]}年`;
function Gt({ id: s, title: u, description: a, actions: h, children: c }) {
  return l.jsxs("section", { id: s ? `ha-${s}` : void 0, className: "ha-panel", children: [l.jsxs("header", { className: "ha-panel-heading", children: [l.jsxs("div", { children: [l.jsx("h2", { children: u }), a && l.jsx("p", { children: a })] }), h && l.jsx("div", { className: "ha-panel-actions", children: h })] }), c] });
}
function Ya() {
  const [s, u] = k.useState(ge), [a, h] = k.useState(ge), [c, _] = k.useState(ge.period), [v, w] = k.useState(ge.period), [f, A] = k.useState(null), [j, g] = k.useState(null), [C, y] = k.useState([]), [I, E] = k.useState(true), [P, z] = k.useState(""), [R, F] = k.useState(0), [$, G] = k.useState("line"), [b, T] = k.useState("desc"), [M, Y] = k.useState(false), [N, V] = k.useState([]), [H, ut] = k.useState(null), [ft, xt] = k.useState(false), [at, St] = k.useState(() => window.location.hash), [Z, Zt] = k.useState(null), [K, lt] = k.useState(false), [_t, Q] = k.useState(""), [O, tt] = k.useState(null), [W, Tt] = k.useState(null), [Et, Qt] = k.useState(false), [ue, gt] = k.useState(""), It = k.useRef(null), te = k.useRef(0), ce = k.useRef(""), Ht = at.split("?")[0] === ui(), qt = at.split("?")[0] === ui("domains");
  ce.current = JSON.stringify({ filters: s, selected: N }), k.useEffect(() => {
    const m = () => St(window.location.hash);
    return window.addEventListener("hashchange", m), () => window.removeEventListener("hashchange", m);
  }, []), k.useEffect(() => {
    let m = false;
    return E(true), z(""), Promise.all([Ut("/overview", ci(s)), Ut("/domains/distribution", ci(s)), Ut("/topics", ci(s))]).then(([B, et, mt]) => {
      m || A({ metrics: B.metrics, domains: et.items, topics: mt.items });
    }).catch((B) => {
      m || z(B.message);
    }).finally(() => {
      m || E(false);
    }), () => {
      m = true;
    };
  }, [s, R]), k.useEffect(() => {
    let m = false;
    return Ut("/trends", ci(s)).then((B) => {
      m || g(B);
    }).catch((B) => {
      m || z(B.message);
    }), () => {
      m = true;
    };
  }, [s, R]), k.useEffect(() => {
    let m = false;
    return Ut("/investments/distribution", Tn(c)).then((B) => {
      m || y(B.items);
    }).catch((B) => {
      m || z(B.message);
    }), () => {
      m = true;
    };
  }, [c, R]), k.useEffect(() => {
    var J;
    const m = (J = It.current) == null ? void 0 : J.closest(".content-surface");
    if (Ht) {
      requestAnimationFrame(() => m == null ? void 0 : m.scrollTo({ top: te.current })), Zt(null), Q("");
      return;
    }
    if (m == null || m.scrollTo({ top: 0 }), qt) return;
    const B = at.match(/^#\/hotspot-analysis\/(topic|event)\/([^/?]+)$/);
    if (!B) {
      Q("未找到这个页面，请返回热点分析。");
      return;
    }
    let et = false;
    return lt(true), Q(""), Zt(null), (B[1] === "topic" ? Ut(`/topics/${B[2]}`).then((U) => ({ kind: "topic", data: U })) : Ut(`/investments/events/${B[2]}`).then((U) => ({ kind: "event", data: U }))).then((U) => {
      et || Zt(U);
    }).catch((U) => {
      et || Q(U.message);
    }).finally(() => {
      et || lt(false);
    }), () => {
      et = true;
    };
  }, [at, Ht, qt, R]), k.useEffect(() => {
    if (!O) return;
    let m = false;
    return Qt(true), Tt(null), gt(""), (O.kind === "metric" ? Ut("/overview/trend", { ...ci(s), metricCode: O.code, ...O.keyword ? { keyword: O.keyword } : {} }).then((et) => ({ kind: "metric", unit: et.unit, points: [{ id: "topic_001", name: O.name, points: et.points }] })) : O.kind === "hotspot" ? Ut(`/hotspots/${O.id}`).then((et) => ({ kind: "hotspot", data: et })) : Promise.all((O.kind === "province" ? O.regionIds : [O.region.regionId]).map((et) => Ut(`/investments/regions/${et}/events`, Tn(c)))).then((et) => ({ kind: "region", events: [...new Map(et.flatMap((mt) => mt.events).map((mt) => [mt.eventId, mt])).values()] }))).then((et) => {
      m || Tt(et);
    }).catch((et) => {
      m || gt(et.message);
    }).finally(() => {
      m || Qt(false);
    }), () => {
      m = true;
    };
  }, [O, s, c]);
  function ee(m) {
    h(m), m.period.join() !== s.period.join() && (_(m.period), w(m.period)), JSON.stringify(m) !== JSON.stringify(s) && (u(m), V([]), ut(null), tt(null));
  }
  function kt(m, B) {
    var et, mt;
    Ht && (te.current = ((mt = (et = It.current) == null ? void 0 : et.closest(".content-surface")) == null ? void 0 : mt.scrollTop) ?? 0), tt(null), window.location.hash = ui(m, B);
  }
  function de(m) {
    var J, U;
    const B = (J = It.current) == null ? void 0 : J.closest(".content-surface"), et = document.getElementById(`ha-${m}`), mt = (U = It.current) == null ? void 0 : U.querySelector(".ha-sticky");
    B && et && B.scrollTo({ top: B.scrollTop + et.getBoundingClientRect().top - B.getBoundingClientRect().top - ((mt == null ? void 0 : mt.offsetHeight) ?? 0) - 16, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  function fe(m, B) {
    tt({ kind: "metric", code: m.metricCode, name: B ? `${B}出现次数` : m.metricName, keyword: B });
  }
  async function ie() {
    const m = ce.current, B = { topicIds: N, ...Tn(s.period) };
    xt(true);
    try {
      const et = await Ut("/topics/compare", B, "POST");
      if (m !== ce.current) return;
      ut({ topics: et.topics, params: B }), requestAnimationFrame(() => de("comparison"));
    } catch (et) {
      Cn.error(et.message);
    } finally {
      xt(false);
    }
  }
  async function Be() {
    if (!H) return;
    const m = H;
    try {
      const B = await ss.request("POST", "/topics/compare/export", m.params);
      if (!(B instanceof Blob)) throw Error(B.message);
      const et = URL.createObjectURL(B), mt = document.createElement("a");
      mt.href = et, mt.download = `热点主题对比_${m.params.startDate}_${m.params.endDate}.xlsx`, mt.click(), setTimeout(() => URL.revokeObjectURL(et), 1e3), Cn.success("Excel 已生成，请查看浏览器下载。");
    } catch (B) {
      Cn.error(B.message);
    }
  }
  const me = f == null ? void 0 : f.metrics.find((m) => m.metricCode === "technology_hotspot_count"), ne = f == null ? void 0 : f.metrics.find((m) => m.metricCode === "new_funding_events"), Yt = f == null ? void 0 : f.metrics.find((m) => m.metricCode === "hotspot_intensity"), Bt = f == null ? void 0 : f.metrics.find((m) => m.metricCode === "high_frequency_keywords"), oe = Array.isArray(Bt == null ? void 0 : Bt.value) ? Bt.value : [], we = [...(f == null ? void 0 : f.topics) ?? []].sort((m, B) => (b === "desc" ? B.heatIndex - m.heatIndex : m.heatIndex - B.heatIndex) || m.topicId.localeCompare(B.topicId)), Ke = (O == null ? void 0 : O.kind) === "metric" ? `${O.name}趋势` : (O == null ? void 0 : O.kind) === "province" ? `${O.name} · 投资事件` : (O == null ? void 0 : O.kind) === "region" ? `${O.region.regionName} · 投资事件` : (W == null ? void 0 : W.kind) === "hotspot" ? W.data.hotspotName : "热点详细分析";
  return l.jsxs("div", { ref: It, className: "ha-page", children: [Ht && l.jsxs(l.Fragment, { children: [l.jsx("div", { className: "ha-page-heading", children: l.jsxs("div", { children: [l.jsx("h1", { children: "热点分析" }), l.jsx("p", { children: "洞察产业、技术与资本的热点演变" })] }) }), l.jsx("div", { className: "ha-sticky", children: l.jsxs("form", { className: "ha-filters ha-query-toolbar", "aria-label": "热点分析筛选", onSubmit: (m) => {
    m.preventDefault(), ee(a);
  }, children: [l.jsx(Di, { className: "ha-industry-filter", "aria-label": "行业类别", placeholder: "行业类别", value: a.industryId || void 0, allowClear: true, onChange: (m) => h((B) => ({ ...B, industryId: m ?? "" })), options: [{ label: "全部行业", value: "" }, ...Sn.industries.map((m) => ({ label: m.name, value: m.id }))] }), l.jsx(Di, { "aria-label": "技术方向", placeholder: "技术方向", value: a.technologyId || void 0, allowClear: true, onChange: (m) => h((B) => ({ ...B, technologyId: m ?? "" })), options: [{ label: "全部技术", value: "" }, ...Sn.technologies.map((m) => ({ label: m.name, value: m.id }))] }), l.jsx(Di, { className: "ha-heat-filter", "aria-label": "热度等级", placeholder: "热度等级", value: a.heatLevel || void 0, allowClear: true, onChange: (m) => h((B) => ({ ...B, heatLevel: m ?? "" })), options: [{ label: "全部等级", value: "" }, ...Sn.heatLevels] }), l.jsx(Fo.RangePicker, { "aria-label": "统计周期", mode: "year", format: "YYYY", value: a.period.map(String), allowClear: false, placeholder: ["开始年份", "结束年份"], disabledDate: (m) => Number(m.format("YYYY")) < 2021 || Number(m.format("YYYY")) > 2026, onChange: (m) => {
    m.length === 2 && h((B) => ({ ...B, period: [Number(m[0]), Number(m[1])] }));
  } }), l.jsx(At, { type: "primary", htmlType: "submit", children: "查询" }), l.jsx(At, { type: "outline", "aria-label": "重置全部筛选", onClick: () => {
    ee(ge), _(ge.period), w(ge.period), T("desc");
  }, children: "重置" })] }) }), P && l.jsx(Wi, { type: "error", content: P, action: l.jsx(At, { size: "small", onClick: () => F((m) => m + 1), children: "重新加载" }) }), l.jsxs(Hi, { loading: I, style: { display: "block" }, children: [l.jsxs("section", { id: "ha-overview", className: "ha-overview", "aria-label": "热点概览仪表盘", children: [l.jsxs("div", { className: "ha-overview-heading", children: [l.jsx("h2", { children: "热点概览" }), l.jsxs("span", { children: ["统计周期 ", di(s.period)] })] }), l.jsxs("div", { className: "ha-metrics", children: [l.jsxs("article", { className: "ha-metric ha-domain-metric", children: [l.jsxs("div", { className: "ha-metric-heading", children: [l.jsx("span", { children: "技术领域热点数" }), l.jsxs(At, { type: "text", className: "ha-metric-link", onClick: () => kt("domains"), children: ["查看领域分布", l.jsx(Ne, {})] })] }), l.jsxs("div", { className: "ha-metric-value", children: [(me == null ? void 0 : me.value) ?? "—", l.jsx("small", { children: "个" })] }), l.jsx(Jo, { domains: (f == null ? void 0 : f.domains) ?? [], compact: true })] }), l.jsxs("button", { className: "ha-metric ha-number-metric", onClick: () => ne && fe(ne), children: [l.jsxs("span", { className: "ha-metric-heading", children: [l.jsx("span", { children: "新增投融资事件" }), l.jsxs("span", { className: "ha-metric-link", children: ["查看年度趋势", l.jsx(Ne, {})] })] }), l.jsxs("span", { className: "ha-metric-value", children: [(ne == null ? void 0 : ne.value) ?? "—", l.jsx("small", { children: "起" })] })] }), l.jsxs("button", { className: "ha-metric ha-number-metric", onClick: () => Yt && fe(Yt), children: [l.jsxs("span", { className: "ha-metric-heading", children: [l.jsx("span", { children: "热点强度指数" }), l.jsxs("span", { className: "ha-metric-link", children: ["查看年度趋势", l.jsx(Ne, {})] })] }), l.jsxs("span", { className: "ha-metric-value", children: [(Yt == null ? void 0 : Yt.value) ?? "—", l.jsx("small", { children: "分" })] })] }), l.jsxs("article", { className: "ha-metric ha-keywords-metric", children: [l.jsxs("div", { className: "ha-metric-heading", children: ["高频关键词", l.jsx("span", { className: "ha-note", children: "点击查看变化" })] }), oe.length ? l.jsx("div", { className: "ha-keyword-cloud", children: oe.map((m, B) => l.jsx("button", { style: { fontSize: `${B < 3 ? 23 : B < 9 ? 18 : 14}px` }, onClick: () => Bt && fe(Bt, m), children: m }, m)) }) : l.jsx(ze, { description: "当前条件暂无关键词" }), l.jsx("p", { className: "ha-note", children: "按所选周期内的出现频次排序" })] })] })] }), l.jsx(fa, { data: j, type: $, period: s.period, visiblePeriod: v, onPeriodChange: w, onTypeChange: G, onHotspotClick: (m) => tt({ kind: "hotspot", id: m }) }), l.jsx(Gt, { id: "investments", title: "投融资热点分布", description: "观察本区周期内的省份投融资分布", actions: l.jsxs(l.Fragment, { children: [l.jsx("span", { className: "ha-field-label", children: "本区分析周期" }), l.jsx(Fo.RangePicker, { className: "ha-investment-period", "aria-label": "投融资本区分析周期", mode: "year", format: "YYYY", value: c.map(String), allowClear: false, disabledDate: (m) => Number(m.format("YYYY")) < s.period[0] || Number(m.format("YYYY")) > s.period[1], onChange: (m) => {
    m.length === 2 && _([Number(m[0]), Number(m[1])]);
  } })] }), children: l.jsx(Fa, { regions: C, onProvince: (m) => tt({ kind: "province", name: m.name, regionIds: m.regionIds }) }) }), l.jsxs(Gt, { id: "topics", title: "热点主题聚合", description: "聚合产业与技术热点，追踪主题演进", actions: l.jsxs(l.Fragment, { children: [l.jsxs("div", { className: "ha-topic-sort", children: [l.jsx("span", { className: "ha-field-label", children: "按热度排序" }), l.jsx(Di, { size: "small", "aria-label": "按热度排序", value: b, onChange: T, options: [{ label: "从高到低", value: "desc" }, { label: "从低到高", value: "asc" }] })] }), l.jsx(At, { icon: l.jsx(Fn, {}), type: M ? "primary" : "secondary", onClick: () => {
    Y((m) => !m), V([]), ut(null);
  }, "aria-pressed": M, children: M ? "退出对比" : "对比分析" })] }), children: [M && l.jsxs("div", { className: "ha-compare-toolbar", children: [l.jsxs("span", { children: ["已选择 ", l.jsx("b", { children: N.length }), " 个主题", l.jsx("span", { className: "ha-note", children: " · 至少选择两个主题" })] }), l.jsx(At, { type: "primary", disabled: N.length < 2, loading: ft, onClick: ie, children: "生成对比" })] }), we.length ? l.jsx("div", { className: "ha-topic-grid", children: we.map((m) => l.jsxs("article", { className: `ha-topic-card${N.includes(m.topicId) ? " is-selected" : ""}`, children: [l.jsxs("a", { className: "ha-topic-card-main", href: ui("topic", m.topicId), "aria-label": `查看${m.topicName}主题详情`, onClick: (B) => {
    B.preventDefault(), kt("topic", m.topicId);
  }, children: [l.jsxs("div", { className: "ha-topic-card-heading", children: [l.jsx("h3", { children: m.topicName }), l.jsxs("strong", { children: [l.jsx("small", { children: "热度指数" }), l.jsx("span", { children: m.heatIndex.toFixed(1) })] })] }), l.jsx(Ha, { tags: m.keywords }), l.jsxs("div", { className: "ha-topic-card-body", children: [l.jsxs("dl", { children: [l.jsx("dt", { children: "技术方向" }), l.jsx("dd", { children: m.technologies.join("、") }), l.jsx("dt", { children: "参与机构" }), l.jsx("dd", { children: m.institutions.join("、") })] }), l.jsx(Va, { words: m.keywords, topicName: m.topicName })] }), l.jsxs("span", { className: "ha-topic-card-link", children: ["查看详情", l.jsx(Ne, {})] })] }), M && l.jsx("div", { className: "ha-topic-card-select", children: l.jsx(Tr, { checked: N.includes(m.topicId), onChange: (B) => {
    V((et) => B ? [...et, m.topicId] : et.filter((mt) => mt !== m.topicId)), ut(null);
  }, children: "加入对比" }) })] }, m.topicId)) }) : l.jsxs("div", { className: "ha-empty", children: [l.jsx(ze, { description: "没有匹配的热点主题" }), l.jsx(At, { onClick: () => ee(ge), children: "清空筛选" })] })] }), H && l.jsxs(Gt, { id: "comparison", title: "综合对比视图", description: `${di(s.period)} · 所选主题同周期对比`, actions: l.jsx(At, { type: "primary", icon: l.jsx(kr, {}), onClick: Be, children: "导出 Excel" }), children: [l.jsx(zn, { series: H.topics.map((m) => ({ id: m.topicId, name: m.topicName })) }), l.jsx("h3", { className: "ha-subheading", children: "主题热度趋势" }), l.jsx(fi, { series: H.topics.map((m) => ({ id: m.topicId, name: m.topicName, points: m.trend })), max: 100 }), l.jsx("div", { className: "ha-comparison-bars", children: [{ field: "paperCount", label: "论文数量", unit: "篇" }, { field: "patentCount", label: "专利数量", unit: "件" }, { field: "investmentEventCount", label: "投融资事件", unit: "起" }].map((m) => l.jsxs("div", { children: [l.jsxs("h3", { children: [m.label, l.jsxs("small", { children: ["单位：", m.unit] })] }), H.topics.map((B, et) => l.jsxs("div", { className: "ha-bar-row", children: [l.jsx("span", { children: B.topicName }), l.jsx("div", { children: l.jsx("i", { style: { width: `${B[m.field] / Math.max(1, ...H.topics.map((mt) => mt[m.field])) * 100}%`, background: xe(et) } }) }), l.jsx("strong", { children: B[m.field] })] }, B.topicId))] }, m.field)) }), l.jsx("h3", { className: "ha-subheading", children: "多维雷达对比" }), l.jsx(da, { topics: H.topics }), l.jsx("p", { className: "ha-note", children: "数量在当前对比周期内去重统计；导出与本视图使用同一组主题和日期。" })] })] })] }), qt && l.jsxs(l.Fragment, { children: [l.jsx("div", { className: "ha-page-heading", children: l.jsxs("div", { children: [l.jsx("h1", { children: "技术领域热点分布" }), l.jsxs("p", { children: ["当前全局条件 · ", di(s.period)] })] }) }), l.jsxs("div", { className: "ha-detail-grid ha-domain-detail-grid", children: [l.jsx(Gt, { title: "领域分布占比", description: "同批去重主题的数量与占比", children: l.jsx(Jo, { domains: (f == null ? void 0 : f.domains) ?? [] }) }), l.jsxs(Gt, { title: "领域增长趋势", description: "同批主题在各年度切片中的去重数量", children: [l.jsx(zn, { series: ((f == null ? void 0 : f.domains) ?? []).map((m) => ({ id: m.domainId, name: m.domainName })) }), l.jsx(fi, { series: ((f == null ? void 0 : f.domains) ?? []).map((m) => ({ id: m.domainId, name: m.domainName, points: m.trend })), unit: "个主题" })] })] })] }), !Ht && !qt && l.jsx(Hi, { loading: K, style: { display: "block" }, children: _t ? l.jsx(Wi, { type: "error", content: _t, action: l.jsx(At, { onClick: () => F((m) => m + 1), children: "重试" }) }) : (Z == null ? void 0 : Z.kind) === "topic" ? l.jsxs(l.Fragment, { children: [l.jsx("div", { className: "ha-page-heading", children: l.jsxs("div", { children: [l.jsx("h1", { children: Z.data.topicName }), l.jsx("p", { children: "沿发展脉络，查看核心事件、研究成果与资本投入" })] }) }), l.jsxs("div", { className: "ha-detail-grid", children: [l.jsx(Gt, { title: "发展历程", children: l.jsx("ul", { className: "ha-history", children: Z.data.developmentHistory.map((m) => l.jsxs("li", { children: [l.jsx("time", { children: m.time }), l.jsx("p", { children: m.content })] }, m.time)) }) }), l.jsx(Gt, { title: "核心事件时间线", children: l.jsx("ul", { className: "ha-history", children: Z.data.coreEvents.map((m) => l.jsxs("li", { children: [l.jsx("time", { children: m.time }), l.jsx("p", { children: m.title })] }, m.time)) }) })] }), l.jsx(Gt, { title: "关键专利与论文分析", description: "以文字摘要呈现代表性研究与技术路线", children: l.jsx("div", { className: "ha-detail-grid", children: [{ label: "关键专利", items: Z.data.patents }, { label: "关键论文", items: Z.data.papers }].map((m) => l.jsxs("div", { children: [l.jsx("h3", { className: "ha-subheading", children: m.label }), m.items.map((B) => l.jsxs("article", { className: "ha-research-summary", children: [l.jsx("strong", { children: B.title }), l.jsx("p", { children: B.analysisSummary })] }, B.title))] }, m.label)) }) }), l.jsx(Gt, { title: "资本投入走势", description: "主题相关的全部模拟资本投入，按年度汇总", children: l.jsx(fi, { series: [{ id: Z.data.topicId, name: "资本投入", points: Z.data.capitalTrend.points }], unit: Z.data.capitalTrend.unit }) }), l.jsx(Gt, { title: "专家观点摘要", description: "模拟观点，仅用于展示主题详情内容", children: Z.data.expertOpinions.map((m) => l.jsx("p", { className: "ha-opinion", children: m.content }, m.content)) })] }) : (Z == null ? void 0 : Z.kind) === "event" ? l.jsxs(l.Fragment, { children: [l.jsx("div", { className: "ha-page-heading", children: l.jsxs("div", { children: [l.jsx("h1", { children: Z.data.eventName }), l.jsx("p", { children: "具体投资事件详情" })] }) }), l.jsxs(Gt, { title: "事件信息", children: [l.jsx("p", { className: "ha-event-content", children: Z.data.content }), l.jsx(Vo, { column: 2, data: [{ label: "所属地区", value: Z.data.regionName }, { label: "金额区间", value: Z.data.amountRange }, { label: "投资机构", value: Z.data.investors.join("、") }, { label: "相关技术方向", value: Z.data.technologyDirection }] })] })] }) : null }), l.jsx("footer", { className: "ha-footer", children: "全部数据为附件中的模拟数据，仅用于功能演示。" }), l.jsx(Mr, { title: Ke, visible: !!O, onCancel: () => tt(null), footer: l.jsx(At, { onClick: () => tt(null), children: "关闭" }), className: "ha-modal", style: { width: "min(800px, calc(100vw - 32px))" }, unmountOnExit: true, autoFocus: true, focusLock: true, children: l.jsx(Hi, { loading: Et, style: { display: "block", minHeight: 80 }, children: ue ? l.jsx(Wi, { type: "error", content: ue }) : (W == null ? void 0 : W.kind) === "metric" ? l.jsxs(l.Fragment, { children: [l.jsxs("p", { className: "ha-note", children: ["统计周期：", di(s.period)] }), l.jsx(fi, { series: W.points, unit: W.unit })] }) : (W == null ? void 0 : W.kind) === "hotspot" ? l.jsxs("div", { className: "ha-hotspot-detail", children: [l.jsx("h3", { children: "涉及机构" }), l.jsx("div", { className: "ha-info-tags", children: W.data.institutions.map((m) => l.jsx(qe, { children: m }, m)) }), l.jsx("h3", { children: "代表技术" }), l.jsx("div", { className: "ha-info-tags", children: W.data.technologies.map((m) => l.jsx(qe, { children: m }, m)) }), l.jsx("h3", { children: "相关投融资事件" }), l.jsx("ul", { children: W.data.investmentEvents.map((m) => l.jsx("li", { children: m.eventName }, m.eventName)) }), l.jsx("h3", { children: "主要媒体报道" }), l.jsx("ul", { children: W.data.mediaReports.map((m) => l.jsxs("li", { children: [m.title, l.jsxs("span", { className: "ha-note", children: [" · ", m.source] })] }, m.title)) })] }) : (W == null ? void 0 : W.kind) === "region" ? l.jsxs(l.Fragment, { children: [l.jsxs("p", { className: "ha-note", children: ["统计周期：", di(c)] }), W.events.length ? l.jsx("div", { className: "ha-event-list", children: W.events.map((m) => l.jsxs("article", { children: [l.jsxs("a", { href: ui("event", m.eventId), onClick: (B) => {
    B.preventDefault(), kt("event", m.eventId);
  }, children: [m.eventName, l.jsx(Ne, {})] }), l.jsx(Vo, { column: 1, data: [{ label: "投资机构", value: m.investors.join("、") }, { label: "金额区间", value: m.amountRange }, { label: "技术方向", value: m.technologyDirection }] })] }, m.eventId)) }) : l.jsx(ze, { description: "本周期暂无投资事件" })] }) : null }) })] });
}
export { Ya as default };
