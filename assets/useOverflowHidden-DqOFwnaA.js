import { r as m, _ as X, R as O, l as In, b9 as Sn, ba as _n, bb as Pn } from "./index-DOWuBEUh.js";
var Z = "data-focus-lock", Me = "data-focus-lock-disabled", Cn = "data-no-focus-lock", Tn = "data-autofocus-inside", An = "data-no-autofocus";
function Q(e2, n) {
  return typeof e2 == "function" ? e2(n) : e2 && (e2.current = n), e2;
}
function Mn(e2, n) {
  var r = m.useState(function() {
    return { value: e2, callback: n, facade: { get current() {
      return r.value;
    }, set current(t) {
      var u = r.value;
      u !== t && (r.value = t, r.callback(t, u));
    } } };
  })[0];
  return r.callback = n, r.facade;
}
var Nn = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Ee = /* @__PURE__ */ new WeakMap();
function kn(e2, n) {
  var r = Mn(null, function(t) {
    return e2.forEach(function(u) {
      return Q(u, t);
    });
  });
  return Nn(function() {
    var t = Ee.get(r);
    if (t) {
      var u = new Set(t), o = new Set(e2), a = r.current;
      u.forEach(function(i) {
        o.has(i) || Q(i, null);
      }), o.forEach(function(i) {
        u.has(i) || Q(i, a);
      });
    }
    Ee.set(r, e2);
  }, [e2]), r;
}
var Y = { width: "1px", height: "0px", padding: 0, overflow: "hidden", position: "fixed", top: "1px", left: "1px" }, ee = function() {
  return ee = Object.assign || function(n) {
    for (var r, t = 1, u = arguments.length; t < u; t++) {
      r = arguments[t];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
    }
    return n;
  }, ee.apply(this, arguments);
};
function Ne(e2) {
  return e2;
}
function ke(e2, n) {
  n === void 0 && (n = Ne);
  var r = [], t = false, u = { read: function() {
    if (t) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return r.length ? r[r.length - 1] : e2;
  }, useMedium: function(o) {
    var a = n(o, t);
    return r.push(a), function() {
      r = r.filter(function(i) {
        return i !== a;
      });
    };
  }, assignSyncMedium: function(o) {
    for (t = true; r.length; ) {
      var a = r;
      r = [], a.forEach(o);
    }
    r = { push: function(i) {
      return o(i);
    }, filter: function() {
      return r;
    } };
  }, assignMedium: function(o) {
    t = true;
    var a = [];
    if (r.length) {
      var i = r;
      r = [], i.forEach(o), a = r;
    }
    var f = function() {
      var l = a;
      a = [], l.forEach(o);
    }, c = function() {
      return Promise.resolve().then(f);
    };
    c(), r = { push: function(l) {
      a.push(l), c();
    }, filter: function(l) {
      return a = a.filter(l), r;
    } };
  } };
  return u;
}
function oe(e2, n) {
  return n === void 0 && (n = Ne), ke(e2, n);
}
function Wn(e2) {
  e2 === void 0 && (e2 = {});
  var n = ke(null);
  return n.options = ee({ async: true, ssr: false }, e2), n;
}
var We = oe({}, function(e2) {
  var n = e2.target, r = e2.currentTarget;
  return { target: n, currentTarget: r };
}), Re = oe(), Rn = oe(), Dn = Wn({ async: true, ssr: typeof document < "u" }), Ln = m.createContext(void 0), Un = [], ae = m.forwardRef(function(n, r) {
  var t, u = m.useState(), o = u[0], a = u[1], i = m.useRef(), f = m.useRef(false), c = m.useRef(null), l = m.useState({}), d = l[1], s = n.children, h = n.disabled, v = h === void 0 ? false : h, p = n.noFocusGuards, g = p === void 0 ? false : p, w = n.persistentFocus, b = w === void 0 ? false : w, y = n.crossFrame, x = y === void 0 ? true : y, I = n.autoFocus, T = I === void 0 ? true : I;
  n.allowTextSelection;
  var B = n.group, j = n.className, an = n.whiteList, cn = n.hasPositiveIndices, ye = n.shards, $ = ye === void 0 ? Un : ye, ge = n.as, fn = ge === void 0 ? "div" : ge, Fe = n.lockProps, sn = Fe === void 0 ? {} : Fe, dn = n.sideCar, we = n.returnFocus, G = we === void 0 ? false : we, ln = n.focusOptions, V = n.onActivation, q = n.onDeactivation, vn = m.useState({}), mn = vn[0], pn = m.useCallback(function(S) {
    var A = S.captureFocusRestore;
    if (!c.current) {
      var M, _ = (M = document) == null ? void 0 : M.activeElement;
      c.current = _, _ !== document.body && (c.current = A(_));
    }
    i.current && V && V(i.current), f.current = true, d();
  }, [V]), hn = m.useCallback(function() {
    f.current = false, q && q(i.current), d();
  }, [q]), bn = m.useCallback(function(S) {
    var A = c.current;
    if (A) {
      var M = (typeof A == "function" ? A() : A) || document.body, _ = typeof G == "function" ? G(M) : G;
      if (_) {
        var Oe = typeof _ == "object" ? _ : void 0;
        c.current = null, S ? Promise.resolve().then(function() {
          return M.focus(Oe);
        }) : M.focus(Oe);
      }
    }
  }, [G]), yn = m.useCallback(function(S) {
    f.current && We.useMedium(S);
  }, []), gn = Re.useMedium, Fn = m.useCallback(function(S) {
    i.current !== S && (i.current = S, a(S));
  }, []), wn = X((t = {}, t[Me] = v && "disabled", t[Z] = B, t), sn), xe = g !== true, xn = xe && g !== "tail", On = kn([r, Fn]), En = m.useMemo(function() {
    return { observed: i, shards: $, enabled: !v, get active() {
      return f.current;
    } };
  }, [v, f, $, i]);
  return O.createElement(m.Fragment, null, xe && [O.createElement("div", { key: "guard-first", "data-focus-guard": true, tabIndex: v ? -1 : 0, style: Y }), cn ? O.createElement("div", { key: "guard-nearest", "data-focus-guard": true, tabIndex: v ? -1 : 1, style: Y }) : null], !v && O.createElement(dn, { id: mn, sideCar: Dn, observed: o, disabled: v, persistentFocus: b, crossFrame: x, autoFocus: T, whiteList: an, shards: $, onActivation: pn, onDeactivation: hn, returnFocus: bn, focusOptions: ln, noFocusGuards: g }), O.createElement(fn, X({ ref: On }, wn, { className: j, onBlur: gn, onFocus: yn }), O.createElement(Ln.Provider, { value: En }, s)), xn && O.createElement("div", { "data-focus-guard": true, tabIndex: v ? -1 : 0, style: Y }));
});
ae.propTypes = {};
function Bn(e2, n) {
  function r(t) {
    return t.displayName || t.name || "Component";
  }
  return function(u) {
    var o = [], a;
    function i() {
      a = e2(o.map(function(c) {
        return c.props;
      })), n(a);
    }
    var f = (function(c) {
      Sn(l, c);
      function l() {
        return c.apply(this, arguments) || this;
      }
      l.peek = function() {
        return a;
      };
      var d = l.prototype;
      return d.componentDidMount = function() {
        o.push(this), i();
      }, d.componentDidUpdate = function() {
        i();
      }, d.componentWillUnmount = function() {
        var h = o.indexOf(this);
        o.splice(h, 1), i();
      }, d.render = function() {
        return O.createElement(u, this.props);
      }, l;
    })(m.PureComponent);
    return In(f, "displayName", "SideEffect(" + r(u) + ")"), f;
  };
}
var E = function(e2) {
  for (var n = Array(e2.length), r = 0; r < e2.length; ++r) n[r] = e2[r];
  return n;
}, C = function(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}, De = function(e2) {
  return Array.isArray(e2) ? e2[0] : e2;
}, Gn = function(e2) {
  if (e2.nodeType !== Node.ELEMENT_NODE) return false;
  var n = window.getComputedStyle(e2, null);
  return !n || !n.getPropertyValue ? false : n.getPropertyValue("display") === "none" || n.getPropertyValue("visibility") === "hidden";
}, Le = function(e2) {
  return e2.parentNode && e2.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e2.parentNode.host : e2.parentNode;
}, Ue = function(e2) {
  return e2 === document || e2 && e2.nodeType === Node.DOCUMENT_NODE;
}, Hn = function(e2) {
  return e2.hasAttribute("inert");
}, jn = function(e2, n) {
  return !e2 || Ue(e2) || !Gn(e2) && !Hn(e2) && n(Le(e2));
}, Be = function(e2, n) {
  var r = e2.get(n);
  if (r !== void 0) return r;
  var t = jn(n, Be.bind(void 0, e2));
  return e2.set(n, t), t;
}, $n = function(e2, n) {
  return e2 && !Ue(e2) ? Qn(e2) ? n(Le(e2)) : false : true;
}, Ge = function(e2, n) {
  var r = e2.get(n);
  if (r !== void 0) return r;
  var t = $n(n, Ge.bind(void 0, e2));
  return e2.set(n, t), t;
}, He = function(e2) {
  return e2.dataset;
}, Vn = function(e2) {
  return e2.tagName === "BUTTON";
}, je = function(e2) {
  return e2.tagName === "INPUT";
}, $e = function(e2) {
  return je(e2) && e2.type === "radio";
}, qn = function(e2) {
  return !((je(e2) || Vn(e2)) && (e2.type === "hidden" || e2.disabled));
}, Qn = function(e2) {
  var n = e2.getAttribute(An);
  return ![true, "true", ""].includes(n);
}, ie = function(e2) {
  var n;
  return !!(e2 && (!((n = He(e2)) === null || n === void 0) && n.focusGuard));
}, ne = function(e2) {
  return !ie(e2);
}, Yn = function(e2) {
  return !!e2;
}, Kn = function(e2, n) {
  var r = Math.max(0, e2.tabIndex), t = Math.max(0, n.tabIndex), u = r - t, o = e2.index - n.index;
  if (u) {
    if (!r) return 1;
    if (!t) return -1;
  }
  return u || o;
}, zn = function(e2) {
  return e2.tabIndex < 0 && !e2.hasAttribute("tabindex") ? 0 : e2.tabIndex;
}, ce = function(e2, n, r) {
  return E(e2).map(function(t, u) {
    var o = zn(t);
    return { node: t, index: u, tabIndex: r && o === -1 ? (t.dataset || {}).focusGuard ? 0 : -1 : o };
  }).filter(function(t) {
    return !n || t.tabIndex >= 0;
  }).sort(Kn);
}, Jn = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"], fe = Jn.join(","), Xn = "".concat(fe, ", [data-focus-guard]"), Ve = function(e2, n) {
  return E((e2.shadowRoot || e2).children).reduce(function(r, t) {
    return r.concat(t.matches(n ? Xn : fe) ? [t] : [], Ve(t));
  }, []);
}, Zn = function(e2, n) {
  var r;
  return e2 instanceof HTMLIFrameElement && (!((r = e2.contentDocument) === null || r === void 0) && r.body) ? W([e2.contentDocument.body], n) : [e2];
}, W = function(e2, n) {
  return e2.reduce(function(r, t) {
    var u, o = Ve(t, n), a = (u = []).concat.apply(u, o.map(function(i) {
      return Zn(i, n);
    }));
    return r.concat(a, t.parentNode ? E(t.parentNode.querySelectorAll(fe)).filter(function(i) {
      return i === t;
    }) : []);
  }, []);
}, er = function(e2) {
  var n = e2.querySelectorAll("[".concat(Tn, "]"));
  return E(n).map(function(r) {
    return W([r]);
  }).reduce(function(r, t) {
    return r.concat(t);
  }, []);
}, se = function(e2, n) {
  return E(e2).filter(function(r) {
    return Be(n, r);
  }).filter(function(r) {
    return qn(r);
  });
}, Ie = function(e2, n) {
  return n === void 0 && (n = /* @__PURE__ */ new Map()), E(e2).filter(function(r) {
    return Ge(n, r);
  });
}, de = function(e2, n, r) {
  return ce(se(W(e2, r), n), true, r);
}, D = function(e2, n) {
  return ce(se(W(e2), n), false);
}, nr = function(e2, n) {
  return se(er(e2), n);
}, P = function(e2, n) {
  return e2.shadowRoot ? P(e2.shadowRoot, n) : Object.getPrototypeOf(e2).contains !== void 0 && Object.getPrototypeOf(e2).contains.call(e2, n) ? true : E(e2.children).some(function(r) {
    var t;
    if (r instanceof HTMLIFrameElement) {
      var u = (t = r.contentDocument) === null || t === void 0 ? void 0 : t.body;
      return u ? P(u, n) : false;
    }
    return P(r, n);
  });
}, rr = function(e2) {
  for (var n = /* @__PURE__ */ new Set(), r = e2.length, t = 0; t < r; t += 1) for (var u = t + 1; u < r; u += 1) {
    var o = e2[t].compareDocumentPosition(e2[u]);
    (o & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && n.add(u), (o & Node.DOCUMENT_POSITION_CONTAINS) > 0 && n.add(t);
  }
  return e2.filter(function(a, i) {
    return !n.has(i);
  });
}, qe = function(e2) {
  return e2.parentNode ? qe(e2.parentNode) : e2;
}, le = function(e2) {
  var n = C(e2);
  return n.filter(Boolean).reduce(function(r, t) {
    var u = t.getAttribute(Z);
    return r.push.apply(r, u ? rr(E(qe(t).querySelectorAll("[".concat(Z, '="').concat(u, '"]:not([').concat(Me, '="disabled"])')))) : [t]), r;
  }, []);
}, tr = function(e2) {
  try {
    return e2();
  } catch {
    return;
  }
}, L = function(e2) {
  if (e2 === void 0 && (e2 = document), !(!e2 || !e2.activeElement)) {
    var n = e2.activeElement;
    return n.shadowRoot ? L(n.shadowRoot) : n instanceof HTMLIFrameElement && tr(function() {
      return n.contentWindow.document;
    }) ? L(n.contentWindow.document) : n;
  }
}, ur = function(e2, n) {
  return e2 === n;
}, or = function(e2, n) {
  return !!E(e2.querySelectorAll("iframe")).some(function(r) {
    return ur(r, n);
  });
}, Qe = function(e2, n) {
  return n === void 0 && (n = L(De(e2).ownerDocument)), !n || n.dataset && n.dataset.focusGuard ? false : le(e2).some(function(r) {
    return P(r, n) || or(r, n);
  });
}, ar = function(e2) {
  e2 === void 0 && (e2 = document);
  var n = L(e2);
  return n ? E(e2.querySelectorAll("[".concat(Cn, "]"))).some(function(r) {
    return P(r, n);
  }) : false;
}, ir = function(e2, n) {
  return n.filter($e).filter(function(r) {
    return r.name === e2.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e2;
}, ve = function(e2, n) {
  return $e(e2) && e2.name ? ir(e2, n) : e2;
}, cr = function(e2) {
  var n = /* @__PURE__ */ new Set();
  return e2.forEach(function(r) {
    return n.add(ve(r, e2));
  }), e2.filter(function(r) {
    return n.has(r);
  });
}, Se = function(e2) {
  return e2[0] && e2.length > 1 ? ve(e2[0], e2) : e2[0];
}, _e = function(e2, n) {
  return e2.indexOf(ve(n, e2));
}, re = "NEW_FOCUS", fr = function(e2, n, r, t, u) {
  var o = e2.length, a = e2[0], i = e2[o - 1], f = ie(t);
  if (!(t && e2.indexOf(t) >= 0)) {
    var c = t !== void 0 ? r.indexOf(t) : -1, l = u ? r.indexOf(u) : c, d = u ? e2.indexOf(u) : -1;
    if (c === -1) return d !== -1 ? d : re;
    if (d === -1) return re;
    var s = c - l, h = r.indexOf(a), v = r.indexOf(i), p = cr(r), g = t !== void 0 ? p.indexOf(t) : -1, w = u ? p.indexOf(u) : g, b = p.filter(function(j) {
      return j.tabIndex >= 0;
    }), y = t !== void 0 ? b.indexOf(t) : -1, x = u ? b.indexOf(u) : y, I = y >= 0 && x >= 0 ? x - y : w - g;
    if (!s && d >= 0 || n.length === 0) return d;
    var T = _e(e2, n[0]), B = _e(e2, n[n.length - 1]);
    if (c <= h && f && Math.abs(s) > 1) return B;
    if (c >= v && f && Math.abs(s) > 1) return T;
    if (s && Math.abs(I) > 1) return d;
    if (c <= h) return B;
    if (c > v) return T;
    if (s) return Math.abs(s) > 1 ? d : (o + d + s) % o;
  }
}, sr = function(e2) {
  return function(n) {
    var r, t = (r = He(n)) === null || r === void 0 ? void 0 : r.autofocus;
    return n.autofocus || t !== void 0 && t !== "false" || e2.indexOf(n) >= 0;
  };
}, Pe = function(e2, n, r) {
  var t = e2.map(function(o) {
    var a = o.node;
    return a;
  }), u = Ie(t.filter(sr(r)));
  return u && u.length ? Se(u) : Se(Ie(n));
}, te = function(e2, n) {
  return n === void 0 && (n = []), n.push(e2), e2.parentNode && te(e2.parentNode.host || e2.parentNode, n), n;
}, K = function(e2, n) {
  for (var r = te(e2), t = te(n), u = 0; u < r.length; u += 1) {
    var o = r[u];
    if (t.indexOf(o) >= 0) return o;
  }
  return false;
}, Ye = function(e2, n, r) {
  var t = C(e2), u = C(n), o = t[0], a = false;
  return u.filter(Boolean).forEach(function(i) {
    a = K(a || i, i) || a, r.filter(Boolean).forEach(function(f) {
      var c = K(o, f);
      c && (!a || P(c, a) ? a = c : a = K(c, a));
    });
  }), a;
}, Ce = function(e2, n) {
  return e2.reduce(function(r, t) {
    return r.concat(nr(t, n));
  }, []);
}, dr = function(e2, n) {
  var r = /* @__PURE__ */ new Map();
  return n.forEach(function(t) {
    return r.set(t.node, t);
  }), e2.map(function(t) {
    return r.get(t);
  }).filter(Yn);
}, lr = function(e2, n) {
  var r = L(C(e2).length > 0 ? document : De(e2).ownerDocument), t = le(e2).filter(ne), u = Ye(r || e2, e2, t), o = /* @__PURE__ */ new Map(), a = D(t, o), i = a.filter(function(v) {
    var p = v.node;
    return ne(p);
  });
  if (i[0]) {
    var f = D([u], o).map(function(v) {
      var p = v.node;
      return p;
    }), c = dr(f, i), l = c.map(function(v) {
      var p = v.node;
      return p;
    }), d = c.filter(function(v) {
      var p = v.tabIndex;
      return p >= 0;
    }).map(function(v) {
      var p = v.node;
      return p;
    }), s = fr(l, d, f, r, n);
    if (s === re) {
      var h = Pe(a, d, Ce(t, o)) || Pe(a, l, Ce(t, o));
      if (h) return { node: h };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return s === void 0 ? s : c[s];
  }
}, vr = function(e2) {
  var n = le(e2).filter(ne), r = Ye(e2, e2, n), t = ce(W([r], true), true, true), u = W(n, false);
  return t.map(function(o) {
    var a = o.node, i = o.index;
    return { node: a, index: i, lockItem: u.indexOf(a) >= 0, guard: ie(a) };
  });
}, me = function(e2, n) {
  e2 && ("focus" in e2 && e2.focus(n), "contentWindow" in e2 && e2.contentWindow && e2.contentWindow.focus());
}, z = 0, J = false, Ke = function(e2, n, r) {
  r === void 0 && (r = {});
  var t = lr(e2, n);
  if (!J && t) {
    if (z > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), J = true, setTimeout(function() {
        J = false;
      }, 1);
      return;
    }
    z++, me(t.node, r.focusOptions), z--;
  }
};
function R(e2) {
  if (!e2) return null;
  if (typeof WeakRef > "u") return function() {
    return e2 || null;
  };
  var n = e2 ? new WeakRef(e2) : null;
  return function() {
    return (n == null ? void 0 : n.deref()) || null;
  };
}
var mr = function(e2) {
  if (!e2) return null;
  for (var n = [], r = e2; r && r !== document.body; ) n.push({ current: R(r), parent: R(r.parentElement), left: R(r.previousElementSibling), right: R(r.nextElementSibling) }), r = r.parentElement;
  return { element: R(e2), stack: n, ownerDocument: e2.ownerDocument };
}, pr = function(e2) {
  var n, r, t, u, o;
  if (e2) for (var a = e2.stack, i = e2.ownerDocument, f = /* @__PURE__ */ new Map(), c = 0, l = a; c < l.length; c++) {
    var d = l[c], s = (n = d.parent) === null || n === void 0 ? void 0 : n.call(d);
    if (s && i.contains(s)) {
      for (var h = (r = d.left) === null || r === void 0 ? void 0 : r.call(d), v = d.current(), p = s.contains(v) ? v : void 0, g = (t = d.right) === null || t === void 0 ? void 0 : t.call(d), w = de([s], f), b = (o = (u = p ?? (h == null ? void 0 : h.nextElementSibling)) !== null && u !== void 0 ? u : g) !== null && o !== void 0 ? o : h; b; ) {
        for (var y = 0, x = w; y < x.length; y++) {
          var I = x[y];
          if (b != null && b.contains(I.node)) return I.node;
        }
        b = b.nextElementSibling;
      }
      if (w.length) return w[0].node;
    }
  }
}, ze = function(e2) {
  var n = mr(e2);
  return function() {
    return pr(n);
  };
}, hr = function(e2, n, r) {
  if (!e2 || !n) return console.error("no element or scope given"), {};
  var t = C(n);
  if (t.every(function(a) {
    return !P(a, e2);
  })) return console.error("Active element is not contained in the scope"), {};
  var u = r ? de(t, /* @__PURE__ */ new Map()) : D(t, /* @__PURE__ */ new Map()), o = u.findIndex(function(a) {
    var i = a.node;
    return i === e2;
  });
  if (o !== -1) return { prev: u[o - 1], next: u[o + 1], first: u[0], last: u[u.length - 1] };
}, br = function(e2, n) {
  var r = n ? de(C(e2), /* @__PURE__ */ new Map()) : D(C(e2), /* @__PURE__ */ new Map());
  return { first: r[0], last: r[r.length - 1] };
}, yr = function(e2) {
  return Object.assign({ scope: document.body, cycle: true, onlyTabbable: true }, e2);
}, Je = function(e2, n, r) {
  n === void 0 && (n = {});
  var t = yr(n), u = hr(e2, t.scope, t.onlyTabbable);
  if (u) {
    var o = r(u, t.cycle);
    o && me(o.node, t.focusOptions);
  }
}, gr = function(e2, n) {
  n === void 0 && (n = {}), Je(e2, n, function(r, t) {
    var u = r.next, o = r.first;
    return u || t && o;
  });
}, Fr = function(e2, n) {
  n === void 0 && (n = {}), Je(e2, n, function(r, t) {
    var u = r.prev, o = r.last;
    return u || t && o;
  });
}, Xe = function(e2, n, r) {
  var t, u = br(e2, (t = n.onlyTabbable) !== null && t !== void 0 ? t : true), o = u[r];
  o && me(o.node, n.focusOptions);
}, wr = function(e2, n) {
  n === void 0 && (n = {}), Xe(e2, n, "first");
}, xr = function(e2, n) {
  n === void 0 && (n = {}), Xe(e2, n, "last");
};
function pe(e2) {
  setTimeout(e2, 1);
}
var Or = function(n) {
  return n && "current" in n ? n.current : n;
}, Ze = function() {
  return document && document.activeElement === document.body;
}, Er = function() {
  return Ze() || ar();
}, N = null, F = null, Te = function() {
  return null;
}, k = null, U = false, he = false, Ir = function() {
  return true;
}, Sr = function(n) {
  return (N.whiteList || Ir)(n);
}, _r = function(n, r) {
  k = { observerNode: n, portaledElement: r };
}, Pr = function(n) {
  return k && k.portaledElement === n;
};
function Ae(e2, n, r, t) {
  var u = null, o = e2;
  do {
    var a = t[o];
    if (a.guard) a.node.dataset.focusAutoGuard && (u = a);
    else if (a.lockItem) {
      if (o !== e2) return;
      u = null;
    } else break;
  } while ((o += r) !== n);
  u && (u.node.tabIndex = 0);
}
var Cr = function(n) {
  return n ? !!U : U === "meanwhile";
}, Tr = function e(n, r, t) {
  return r && (r.host === n && (!r.activeElement || t.contains(r.activeElement)) || r.parentNode && e(n, r.parentNode, t));
}, Ar = function(n, r) {
  return r.some(function(t) {
    return Tr(n, t, t);
  });
}, en = function(n) {
  return D(n, /* @__PURE__ */ new Map());
}, Mr = function(n) {
  return !en([n.parentNode]).some(function(r) {
    return r.node === n;
  });
}, H = function() {
  var n = false;
  if (N) {
    var r = N, t = r.observed, u = r.persistentFocus, o = r.autoFocus, a = r.shards, i = r.crossFrame, f = r.focusOptions, c = r.noFocusGuards, l = t || k && k.portaledElement;
    if (Ze() && F && F !== document.body && (!document.body.contains(F) || Mr(F))) {
      var d = Te();
      d && d.focus();
    }
    var s = document && document.activeElement;
    if (l) {
      var h = [l].concat(a.map(Or).filter(Boolean)), v = function() {
        if (!Cr(i) || !c || !F || he) return false;
        var y = en(h), x = y.findIndex(function(I) {
          var T = I.node;
          return T === F;
        });
        return x === 0 || x === y.length - 1;
      };
      if ((!s || Sr(s)) && (u || v() || !Er() || !F && o) && (l && !(Qe(h) || s && Ar(s, h) || Pr(s)) && (document && !F && s && !o ? (s.blur && s.blur(), document.body.focus()) : (n = Ke(h, F, { focusOptions: f }), k = {})), F = document && document.activeElement, F !== document.body && (Te = ze(F)), U = false), document && s !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var p = document && document.activeElement, g = vr(h), w = g.map(function(b) {
          var y = b.node;
          return y;
        }).indexOf(p);
        w > -1 && (g.filter(function(b) {
          var y = b.guard, x = b.node;
          return y && x.dataset.focusAutoGuard;
        }).forEach(function(b) {
          var y = b.node;
          return y.removeAttribute("tabIndex");
        }), Ae(w, g.length, 1, g), Ae(w, -1, -1, g));
      }
    }
  }
  return n;
}, nn = function(n) {
  H() && n && (n.stopPropagation(), n.preventDefault());
}, be = function() {
  return pe(H);
}, Nr = function(n) {
  var r = n.target, t = n.currentTarget;
  t.contains(r) || _r(t, r);
}, kr = function() {
  return null;
}, rn = function() {
  he = true;
}, tn = function() {
  he = false, U = "just", pe(function() {
    U = "meanwhile";
  });
}, Wr = function() {
  document.addEventListener("focusin", nn), document.addEventListener("focusout", be), window.addEventListener("focus", rn), window.addEventListener("blur", tn);
}, Rr = function() {
  document.removeEventListener("focusin", nn), document.removeEventListener("focusout", be), window.removeEventListener("focus", rn), window.removeEventListener("blur", tn);
};
function Dr(e2) {
  return e2.filter(function(n) {
    var r = n.disabled;
    return !r;
  });
}
var un = { moveFocusInside: Ke, focusInside: Qe, focusNextElement: gr, focusPrevElement: Fr, focusFirstElement: wr, focusLastElement: xr, captureFocusRestore: ze };
function Lr(e2) {
  var n = e2.slice(-1)[0];
  n && !N && Wr();
  var r = N, t = r && n && n.id === r.id;
  N = n, r && !t && (r.onDeactivation(), e2.filter(function(u) {
    var o = u.id;
    return o === r.id;
  }).length || r.returnFocus(!n)), n ? (F = null, (!t || r.observed !== n.observed) && n.onActivation(un), H(), pe(H)) : (Rr(), F = null);
}
We.assignSyncMedium(Nr);
Re.assignMedium(be);
Rn.assignMedium(function(e2) {
  return e2(un);
});
const Ur = Bn(Dr, Lr)(kr);
var Br = m.forwardRef(function(n, r) {
  return O.createElement(ae, X({ sideCar: Ur, ref: r }, n));
}), on = ae.propTypes || {};
on.sideCar;
_n(on, ["sideCar"]);
Br.propTypes = {};
var Gr = /* @__PURE__ */ (function() {
  var e2 = function(n, r) {
    return e2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, u) {
      t.__proto__ = u;
    } || function(t, u) {
      for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
    }, e2(n, r);
  };
  return function(n, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e2(n, r);
    function t() {
      this.constructor = n;
    }
    n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
})(), Hr = (function(e2) {
  Gr(n, e2);
  function n() {
    var r = e2 !== null && e2.apply(this, arguments) || this;
    return r.container = null, r;
  }
  return n.prototype.componentDidMount = function() {
    var r = this;
    this.createContainer(), this.timer = setTimeout(function() {
      r.container || r.createContainer();
    });
  }, n.prototype.componentWillUnmount = function() {
    clearTimeout(this.timer);
  }, n.prototype.createContainer = function() {
    var r = this.props.getContainer;
    this.container = r == null ? void 0 : r(), this.forceUpdate();
  }, n.prototype.render = function() {
    var r = this.props.children;
    return this.container ? Pn.createPortal(r, this.container) : null;
  }, n;
})(m.Component), jr = /* @__PURE__ */ (function() {
  var e2 = function(n, r) {
    return e2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, u) {
      t.__proto__ = u;
    } || function(t, u) {
      for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
    }, e2(n, r);
  };
  return function(n, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e2(n, r);
    function t() {
      this.constructor = n;
    }
    n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
})(), ue = function() {
  return ue = Object.assign || function(e2) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (e2[u] = n[u]);
    }
    return e2;
  }, ue.apply(this, arguments);
}, Vr = (function(e2) {
  jr(n, e2);
  function n() {
    return e2 !== null && e2.apply(this, arguments) || this;
  }
  return n.prototype.componentWillUnmount = function() {
    this.instance = null;
  }, n.prototype.render = function() {
    var r = this, t = this.props, u = t.forceRender, o = t.visible;
    return u || o || this.instance ? O.createElement(Hr, ue({ ref: function(a) {
      return r.instance = a;
    } }, this.props)) : null;
  }, n.displayName = "Portal", n.defaultProps = { getContainer: function() {
    return document.body;
  } }, n;
})(m.Component);
function qr(e2, n) {
  var r = n.hidden, t = m.useRef(false), u = m.useRef({}), o = function(f) {
    return f.tagName === "BODY" ? window.innerWidth - (document.body.clientWidth || document.documentElement.clientWidth) : f.offsetWidth - f.clientWidth;
  }, a = function() {
    var f = e2();
    if (f && f.style.overflow !== "hidden") {
      var c = f.style;
      t.current = true;
      var l = o(f);
      l && (u.current.width = c.width, f.style.width = "calc(" + (f.style.width || "100%") + " - " + l + "px)"), u.current.overflow = c.overflow, f.style.overflow = "hidden";
    }
  }, i = function() {
    if (t.current && e2()) {
      var f = e2(), c = u.current;
      Object.keys(c).forEach(function(l) {
        return f.style[l] = c[l];
      });
    }
    t.current = false, u.current = {};
  };
  return m.useEffect(function() {
    return r ? a() : i(), function() {
      i();
    };
  }, [e2, r]), [i, a];
}
export { Br as F, Vr as P, qr as u };
