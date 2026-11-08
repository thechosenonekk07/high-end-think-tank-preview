const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["assets/SystemMessagesDrawer-BthSsct7.js", "assets/reportTasks-DAXmF1j7.js", "assets/index-DikCtwkZ.js", "assets/useOverflowHidden-DqOFwnaA.js", "assets/ReportTasks-DxtsE8Mr.js", "assets/upload-dwSPQUIn.js", "assets/index-gnNGM7My.js", "assets/index-C6f6IxNt.js", "assets/index-DCvAPB0m.js", "assets/index-CgcNigm7.js", "assets/pagination-DNEzLAQJ.js", "assets/CaseSquare-CxMiWvkb.js", "assets/caseSquare-Bx8x_2A7.js", "assets/CaseDetail-B-Tcyg28.js", "assets/CaseDetail-DdwyCmCn.css", "assets/MaterialLibrary-BaddHrV5.js", "assets/MaterialDetail-5U5RICDh.js"])) => i.map((i2) => d[i2]);
(function() {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
  new MutationObserver((a) => {
    for (const u of a) if (u.type === "childList") for (const f of u.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
  }).observe(document, { childList: true, subtree: true });
  function n(a) {
    const u = {};
    return a.integrity && (u.integrity = a.integrity), a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? u.credentials = "include" : a.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u;
  }
  function r(a) {
    if (a.ep) return;
    a.ep = true;
    const u = n(a);
    fetch(a.href, u);
  }
})();
var Kl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Di(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cc = { exports: {} }, uo = {}, xc = { exports: {} }, rt = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Wm;
function aC() {
  if (Wm) return rt;
  Wm = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), u = /* @__PURE__ */ Symbol.for("react.provider"), f = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), w = Symbol.iterator;
  function C(E) {
    return E === null || typeof E != "object" ? null : (E = w && E[w] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var O = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, S = {};
  function x(E, F, G) {
    this.props = E, this.context = F, this.refs = S, this.updater = G || O;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(E, F) {
    if (typeof E != "object" && typeof E != "function" && E != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, E, F, "setState");
  }, x.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function B() {
  }
  B.prototype = x.prototype;
  function I(E, F, G) {
    this.props = E, this.context = F, this.refs = S, this.updater = G || O;
  }
  var D = I.prototype = new B();
  D.constructor = I, b(D, x.prototype), D.isPureReactComponent = true;
  var T = Array.isArray, R = Object.prototype.hasOwnProperty, P = { current: null }, M = { key: true, ref: true, __self: true, __source: true };
  function V(E, F, G) {
    var ae, ue = {}, re = null, ne = null;
    if (F != null) for (ae in F.ref !== void 0 && (ne = F.ref), F.key !== void 0 && (re = "" + F.key), F) R.call(F, ae) && !M.hasOwnProperty(ae) && (ue[ae] = F[ae]);
    var le = arguments.length - 2;
    if (le === 1) ue.children = G;
    else if (1 < le) {
      for (var ee = Array(le), se = 0; se < le; se++) ee[se] = arguments[se + 2];
      ue.children = ee;
    }
    if (E && E.defaultProps) for (ae in le = E.defaultProps, le) ue[ae] === void 0 && (ue[ae] = le[ae]);
    return { $$typeof: e, type: E, key: re, ref: ne, props: ue, _owner: P.current };
  }
  function j(E, F) {
    return { $$typeof: e, type: E.type, key: F, ref: E.ref, props: E.props, _owner: E._owner };
  }
  function z(E) {
    return typeof E == "object" && E !== null && E.$$typeof === e;
  }
  function H(E) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(G) {
      return F[G];
    });
  }
  var L = /\/+/g;
  function Q(E, F) {
    return typeof E == "object" && E !== null && E.key != null ? H("" + E.key) : F.toString(36);
  }
  function q(E, F, G, ae, ue) {
    var re = typeof E;
    (re === "undefined" || re === "boolean") && (E = null);
    var ne = false;
    if (E === null) ne = true;
    else switch (re) {
      case "string":
      case "number":
        ne = true;
        break;
      case "object":
        switch (E.$$typeof) {
          case e:
          case o:
            ne = true;
        }
    }
    if (ne) return ne = E, ue = ue(ne), E = ae === "" ? "." + Q(ne, 0) : ae, T(ue) ? (G = "", E != null && (G = E.replace(L, "$&/") + "/"), q(ue, F, G, "", function(se) {
      return se;
    })) : ue != null && (z(ue) && (ue = j(ue, G + (!ue.key || ne && ne.key === ue.key ? "" : ("" + ue.key).replace(L, "$&/") + "/") + E)), F.push(ue)), 1;
    if (ne = 0, ae = ae === "" ? "." : ae + ":", T(E)) for (var le = 0; le < E.length; le++) {
      re = E[le];
      var ee = ae + Q(re, le);
      ne += q(re, F, G, ee, ue);
    }
    else if (ee = C(E), typeof ee == "function") for (E = ee.call(E), le = 0; !(re = E.next()).done; ) re = re.value, ee = ae + Q(re, le++), ne += q(re, F, G, ee, ue);
    else if (re === "object") throw F = String(E), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return ne;
  }
  function Z(E, F, G) {
    if (E == null) return E;
    var ae = [], ue = 0;
    return q(E, ae, "", "", function(re) {
      return F.call(G, re, ue++);
    }), ae;
  }
  function A(E) {
    if (E._status === -1) {
      var F = E._result;
      F = F(), F.then(function(G) {
        (E._status === 0 || E._status === -1) && (E._status = 1, E._result = G);
      }, function(G) {
        (E._status === 0 || E._status === -1) && (E._status = 2, E._result = G);
      }), E._status === -1 && (E._status = 0, E._result = F);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var W = { current: null }, k = { transition: null }, X = { ReactCurrentDispatcher: W, ReactCurrentBatchConfig: k, ReactCurrentOwner: P };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return rt.Children = { map: Z, forEach: function(E, F, G) {
    Z(E, function() {
      F.apply(this, arguments);
    }, G);
  }, count: function(E) {
    var F = 0;
    return Z(E, function() {
      F++;
    }), F;
  }, toArray: function(E) {
    return Z(E, function(F) {
      return F;
    }) || [];
  }, only: function(E) {
    if (!z(E)) throw Error("React.Children.only expected to receive a single React element child.");
    return E;
  } }, rt.Component = x, rt.Fragment = n, rt.Profiler = a, rt.PureComponent = I, rt.StrictMode = r, rt.Suspense = m, rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, rt.act = U, rt.cloneElement = function(E, F, G) {
    if (E == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
    var ae = b({}, E.props), ue = E.key, re = E.ref, ne = E._owner;
    if (F != null) {
      if (F.ref !== void 0 && (re = F.ref, ne = P.current), F.key !== void 0 && (ue = "" + F.key), E.type && E.type.defaultProps) var le = E.type.defaultProps;
      for (ee in F) R.call(F, ee) && !M.hasOwnProperty(ee) && (ae[ee] = F[ee] === void 0 && le !== void 0 ? le[ee] : F[ee]);
    }
    var ee = arguments.length - 2;
    if (ee === 1) ae.children = G;
    else if (1 < ee) {
      le = Array(ee);
      for (var se = 0; se < ee; se++) le[se] = arguments[se + 2];
      ae.children = le;
    }
    return { $$typeof: e, type: E.type, key: ue, ref: re, props: ae, _owner: ne };
  }, rt.createContext = function(E) {
    return E = { $$typeof: f, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, E.Provider = { $$typeof: u, _context: E }, E.Consumer = E;
  }, rt.createElement = V, rt.createFactory = function(E) {
    var F = V.bind(null, E);
    return F.type = E, F;
  }, rt.createRef = function() {
    return { current: null };
  }, rt.forwardRef = function(E) {
    return { $$typeof: s, render: E };
  }, rt.isValidElement = z, rt.lazy = function(E) {
    return { $$typeof: g, _payload: { _status: -1, _result: E }, _init: A };
  }, rt.memo = function(E, F) {
    return { $$typeof: p, type: E, compare: F === void 0 ? null : F };
  }, rt.startTransition = function(E) {
    var F = k.transition;
    k.transition = {};
    try {
      E();
    } finally {
      k.transition = F;
    }
  }, rt.unstable_act = U, rt.useCallback = function(E, F) {
    return W.current.useCallback(E, F);
  }, rt.useContext = function(E) {
    return W.current.useContext(E);
  }, rt.useDebugValue = function() {
  }, rt.useDeferredValue = function(E) {
    return W.current.useDeferredValue(E);
  }, rt.useEffect = function(E, F) {
    return W.current.useEffect(E, F);
  }, rt.useId = function() {
    return W.current.useId();
  }, rt.useImperativeHandle = function(E, F, G) {
    return W.current.useImperativeHandle(E, F, G);
  }, rt.useInsertionEffect = function(E, F) {
    return W.current.useInsertionEffect(E, F);
  }, rt.useLayoutEffect = function(E, F) {
    return W.current.useLayoutEffect(E, F);
  }, rt.useMemo = function(E, F) {
    return W.current.useMemo(E, F);
  }, rt.useReducer = function(E, F, G) {
    return W.current.useReducer(E, F, G);
  }, rt.useRef = function(E) {
    return W.current.useRef(E);
  }, rt.useState = function(E) {
    return W.current.useState(E);
  }, rt.useSyncExternalStore = function(E, F, G) {
    return W.current.useSyncExternalStore(E, F, G);
  }, rt.useTransition = function() {
    return W.current.useTransition();
  }, rt.version = "18.3.1", rt;
}
var Bm;
function Ad() {
  return Bm || (Bm = 1, xc.exports = aC()), xc.exports;
}
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Um;
function oC() {
  if (Um) return uo;
  Um = 1;
  var e = Ad(), o = /* @__PURE__ */ Symbol.for("react.element"), n = /* @__PURE__ */ Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: true, ref: true, __self: true, __source: true };
  function f(s, m, p) {
    var g, w = {}, C = null, O = null;
    p !== void 0 && (C = "" + p), m.key !== void 0 && (C = "" + m.key), m.ref !== void 0 && (O = m.ref);
    for (g in m) r.call(m, g) && !u.hasOwnProperty(g) && (w[g] = m[g]);
    if (s && s.defaultProps) for (g in m = s.defaultProps, m) w[g] === void 0 && (w[g] = m[g]);
    return { $$typeof: o, type: s, key: C, ref: O, props: w, _owner: a.current };
  }
  return uo.Fragment = n, uo.jsx = f, uo.jsxs = f, uo;
}
var Km;
function lC() {
  return Km || (Km = 1, Cc.exports = oC()), Cc.exports;
}
var Y = lC(), _ = Ad();
const h = Di(_);
var ql = {}, Oc = { exports: {} }, En = {}, bc = { exports: {} }, Ec = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var qm;
function uC() {
  return qm || (qm = 1, (function(e) {
    function o(k, X) {
      var U = k.length;
      k.push(X);
      e: for (; 0 < U; ) {
        var E = U - 1 >>> 1, F = k[E];
        if (0 < a(F, X)) k[E] = X, k[U] = F, U = E;
        else break e;
      }
    }
    function n(k) {
      return k.length === 0 ? null : k[0];
    }
    function r(k) {
      if (k.length === 0) return null;
      var X = k[0], U = k.pop();
      if (U !== X) {
        k[0] = U;
        e: for (var E = 0, F = k.length, G = F >>> 1; E < G; ) {
          var ae = 2 * (E + 1) - 1, ue = k[ae], re = ae + 1, ne = k[re];
          if (0 > a(ue, U)) re < F && 0 > a(ne, ue) ? (k[E] = ne, k[re] = U, E = re) : (k[E] = ue, k[ae] = U, E = ae);
          else if (re < F && 0 > a(ne, U)) k[E] = ne, k[re] = U, E = re;
          else break e;
        }
      }
      return X;
    }
    function a(k, X) {
      var U = k.sortIndex - X.sortIndex;
      return U !== 0 ? U : k.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      e.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, s = f.now();
      e.unstable_now = function() {
        return f.now() - s;
      };
    }
    var m = [], p = [], g = 1, w = null, C = 3, O = false, b = false, S = false, x = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function D(k) {
      for (var X = n(p); X !== null; ) {
        if (X.callback === null) r(p);
        else if (X.startTime <= k) r(p), X.sortIndex = X.expirationTime, o(m, X);
        else break;
        X = n(p);
      }
    }
    function T(k) {
      if (S = false, D(k), !b) if (n(m) !== null) b = true, A(R);
      else {
        var X = n(p);
        X !== null && W(T, X.startTime - k);
      }
    }
    function R(k, X) {
      b = false, S && (S = false, B(V), V = -1), O = true;
      var U = C;
      try {
        for (D(X), w = n(m); w !== null && (!(w.expirationTime > X) || k && !H()); ) {
          var E = w.callback;
          if (typeof E == "function") {
            w.callback = null, C = w.priorityLevel;
            var F = E(w.expirationTime <= X);
            X = e.unstable_now(), typeof F == "function" ? w.callback = F : w === n(m) && r(m), D(X);
          } else r(m);
          w = n(m);
        }
        if (w !== null) var G = true;
        else {
          var ae = n(p);
          ae !== null && W(T, ae.startTime - X), G = false;
        }
        return G;
      } finally {
        w = null, C = U, O = false;
      }
    }
    var P = false, M = null, V = -1, j = 5, z = -1;
    function H() {
      return !(e.unstable_now() - z < j);
    }
    function L() {
      if (M !== null) {
        var k = e.unstable_now();
        z = k;
        var X = true;
        try {
          X = M(true, k);
        } finally {
          X ? Q() : (P = false, M = null);
        }
      } else P = false;
    }
    var Q;
    if (typeof I == "function") Q = function() {
      I(L);
    };
    else if (typeof MessageChannel < "u") {
      var q = new MessageChannel(), Z = q.port2;
      q.port1.onmessage = L, Q = function() {
        Z.postMessage(null);
      };
    } else Q = function() {
      x(L, 0);
    };
    function A(k) {
      M = k, P || (P = true, Q());
    }
    function W(k, X) {
      V = x(function() {
        k(e.unstable_now());
      }, X);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, e.unstable_continueExecution = function() {
      b || O || (b = true, A(R));
    }, e.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < k ? Math.floor(1e3 / k) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(m);
    }, e.unstable_next = function(k) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = C;
      }
      var U = C;
      C = X;
      try {
        return k();
      } finally {
        C = U;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(k, X) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var U = C;
      C = k;
      try {
        return X();
      } finally {
        C = U;
      }
    }, e.unstable_scheduleCallback = function(k, X, U) {
      var E = e.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? E + U : E) : U = E, k) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = U + F, k = { id: g++, callback: X, priorityLevel: k, startTime: U, expirationTime: F, sortIndex: -1 }, U > E ? (k.sortIndex = U, o(p, k), n(m) === null && k === n(p) && (S ? (B(V), V = -1) : S = true, W(T, U - E))) : (k.sortIndex = F, o(m, k), b || O || (b = true, A(R))), k;
    }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(k) {
      var X = C;
      return function() {
        var U = C;
        C = X;
        try {
          return k.apply(this, arguments);
        } finally {
          C = U;
        }
      };
    };
  })(Ec)), Ec;
}
var Gm;
function sC() {
  return Gm || (Gm = 1, bc.exports = uC()), bc.exports;
}
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ym;
function cC() {
  if (Ym) return En;
  Ym = 1;
  var e = Ad(), o = sC();
  function n(t) {
    for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, l = 1; l < arguments.length; l++) i += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + t + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = /* @__PURE__ */ new Set(), a = {};
  function u(t, i) {
    f(t, i), f(t + "Capture", i);
  }
  function f(t, i) {
    for (a[t] = i, t = 0; t < i.length; t++) r.add(i[t]);
  }
  var s = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, w = {};
  function C(t) {
    return m.call(w, t) ? true : m.call(g, t) ? false : p.test(t) ? w[t] = true : (g[t] = true, false);
  }
  function O(t, i, l, c) {
    if (l !== null && l.type === 0) return false;
    switch (typeof i) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return c ? false : l !== null ? !l.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
      default:
        return false;
    }
  }
  function b(t, i, l, c) {
    if (i === null || typeof i > "u" || O(t, i, l, c)) return true;
    if (c) return false;
    if (l !== null) switch (l.type) {
      case 3:
        return !i;
      case 4:
        return i === false;
      case 5:
        return isNaN(i);
      case 6:
        return isNaN(i) || 1 > i;
    }
    return false;
  }
  function S(t, i, l, c, d, v, y) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = c, this.attributeNamespace = d, this.mustUseProperty = l, this.propertyName = t, this.type = i, this.sanitizeURL = v, this.removeEmptyString = y;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    x[t] = new S(t, 0, false, t, null, false, false);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var i = t[0];
    x[i] = new S(i, 1, false, t[1], null, false, false);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    x[t] = new S(t, 2, false, t.toLowerCase(), null, false, false);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    x[t] = new S(t, 2, false, t, null, false, false);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    x[t] = new S(t, 3, false, t.toLowerCase(), null, false, false);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    x[t] = new S(t, 3, true, t, null, false, false);
  }), ["capture", "download"].forEach(function(t) {
    x[t] = new S(t, 4, false, t, null, false, false);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    x[t] = new S(t, 6, false, t, null, false, false);
  }), ["rowSpan", "start"].forEach(function(t) {
    x[t] = new S(t, 5, false, t.toLowerCase(), null, false, false);
  });
  var B = /[\-:]([a-z])/g;
  function I(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var i = t.replace(B, I);
    x[i] = new S(i, 1, false, t, null, false, false);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var i = t.replace(B, I);
    x[i] = new S(i, 1, false, t, "http://www.w3.org/1999/xlink", false, false);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var i = t.replace(B, I);
    x[i] = new S(i, 1, false, t, "http://www.w3.org/XML/1998/namespace", false, false);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    x[t] = new S(t, 1, false, t.toLowerCase(), null, false, false);
  }), x.xlinkHref = new S("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(t) {
    x[t] = new S(t, 1, false, t.toLowerCase(), null, true, true);
  });
  function D(t, i, l, c) {
    var d = x.hasOwnProperty(i) ? x[i] : null;
    (d !== null ? d.type !== 0 : c || !(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (b(i, l, d, c) && (l = null), c || d === null ? C(i) && (l === null ? t.removeAttribute(i) : t.setAttribute(i, "" + l)) : d.mustUseProperty ? t[d.propertyName] = l === null ? d.type === 3 ? false : "" : l : (i = d.attributeName, c = d.attributeNamespace, l === null ? t.removeAttribute(i) : (d = d.type, l = d === 3 || d === 4 && l === true ? "" : "" + l, c ? t.setAttributeNS(c, i, l) : t.setAttribute(i, l))));
  }
  var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = /* @__PURE__ */ Symbol.for("react.element"), P = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), j = /* @__PURE__ */ Symbol.for("react.profiler"), z = /* @__PURE__ */ Symbol.for("react.provider"), H = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.suspense_list"), Z = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.offscreen"), k = Symbol.iterator;
  function X(t) {
    return t === null || typeof t != "object" ? null : (t = k && t[k] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var U = Object.assign, E;
  function F(t) {
    if (E === void 0) try {
      throw Error();
    } catch (l) {
      var i = l.stack.trim().match(/\n( *(at )?)/);
      E = i && i[1] || "";
    }
    return `
` + E + t;
  }
  var G = false;
  function ae(t, i) {
    if (!t || G) return "";
    G = true;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (i) if (i = function() {
        throw Error();
      }, Object.defineProperty(i.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(i, []);
        } catch (ie) {
          var c = ie;
        }
        Reflect.construct(t, [], i);
      } else {
        try {
          i.call();
        } catch (ie) {
          c = ie;
        }
        t.call(i.prototype);
      }
      else {
        try {
          throw Error();
        } catch (ie) {
          c = ie;
        }
        t();
      }
    } catch (ie) {
      if (ie && c && typeof ie.stack == "string") {
        for (var d = ie.stack.split(`
`), v = c.stack.split(`
`), y = d.length - 1, N = v.length - 1; 1 <= y && 0 <= N && d[y] !== v[N]; ) N--;
        for (; 1 <= y && 0 <= N; y--, N--) if (d[y] !== v[N]) {
          if (y !== 1 || N !== 1) do
            if (y--, N--, 0 > N || d[y] !== v[N]) {
              var $ = `
` + d[y].replace(" at new ", " at ");
              return t.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", t.displayName)), $;
            }
          while (1 <= y && 0 <= N);
          break;
        }
      }
    } finally {
      G = false, Error.prepareStackTrace = l;
    }
    return (t = t ? t.displayName || t.name : "") ? F(t) : "";
  }
  function ue(t) {
    switch (t.tag) {
      case 5:
        return F(t.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = ae(t.type, false), t;
      case 11:
        return t = ae(t.type.render, false), t;
      case 1:
        return t = ae(t.type, true), t;
      default:
        return "";
    }
  }
  function re(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case M:
        return "Fragment";
      case P:
        return "Portal";
      case j:
        return "Profiler";
      case V:
        return "StrictMode";
      case Q:
        return "Suspense";
      case q:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case H:
        return (t.displayName || "Context") + ".Consumer";
      case z:
        return (t._context.displayName || "Context") + ".Provider";
      case L:
        var i = t.render;
        return t = t.displayName, t || (t = i.displayName || i.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case Z:
        return i = t.displayName || null, i !== null ? i : re(t.type) || "Memo";
      case A:
        i = t._payload, t = t._init;
        try {
          return re(t(i));
        } catch {
        }
    }
    return null;
  }
  function ne(t) {
    var i = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (i.displayName || "Context") + ".Consumer";
      case 10:
        return (i._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = i.render, t = t.displayName || t.name || "", i.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return i;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return re(i);
      case 8:
        return i === V ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof i == "function") return i.displayName || i.name || null;
        if (typeof i == "string") return i;
    }
    return null;
  }
  function le(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ee(t) {
    var i = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function se(t) {
    var i = ee(t) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(t.constructor.prototype, i), c = "" + t[i];
    if (!t.hasOwnProperty(i) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var d = l.get, v = l.set;
      return Object.defineProperty(t, i, { configurable: true, get: function() {
        return d.call(this);
      }, set: function(y) {
        c = "" + y, v.call(this, y);
      } }), Object.defineProperty(t, i, { enumerable: l.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(y) {
        c = "" + y;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[i];
      } };
    }
  }
  function ke(t) {
    t._valueTracker || (t._valueTracker = se(t));
  }
  function Pe(t) {
    if (!t) return false;
    var i = t._valueTracker;
    if (!i) return true;
    var l = i.getValue(), c = "";
    return t && (c = ee(t) ? t.checked ? "true" : "false" : t.value), t = c, t !== l ? (i.setValue(t), true) : false;
  }
  function De(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Ee(t, i) {
    var l = i.checked;
    return U({}, i, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? t._wrapperState.initialChecked });
  }
  function ce(t, i) {
    var l = i.defaultValue == null ? "" : i.defaultValue, c = i.checked != null ? i.checked : i.defaultChecked;
    l = le(i.value != null ? i.value : l), t._wrapperState = { initialChecked: c, initialValue: l, controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null };
  }
  function fe(t, i) {
    i = i.checked, i != null && D(t, "checked", i, false);
  }
  function be(t, i) {
    fe(t, i);
    var l = le(i.value), c = i.type;
    if (l != null) c === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + l) : t.value !== "" + l && (t.value = "" + l);
    else if (c === "submit" || c === "reset") {
      t.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value") ? ge(t, i.type, l) : i.hasOwnProperty("defaultValue") && ge(t, i.type, le(i.defaultValue)), i.checked == null && i.defaultChecked != null && (t.defaultChecked = !!i.defaultChecked);
  }
  function ze(t, i, l) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var c = i.type;
      if (!(c !== "submit" && c !== "reset" || i.value !== void 0 && i.value !== null)) return;
      i = "" + t._wrapperState.initialValue, l || i === t.value || (t.value = i), t.defaultValue = i;
    }
    l = t.name, l !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, l !== "" && (t.name = l);
  }
  function ge(t, i, l) {
    (i !== "number" || De(t.ownerDocument) !== t) && (l == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + l && (t.defaultValue = "" + l));
  }
  var Fe = Array.isArray;
  function Qe(t, i, l, c) {
    if (t = t.options, i) {
      i = {};
      for (var d = 0; d < l.length; d++) i["$" + l[d]] = true;
      for (l = 0; l < t.length; l++) d = i.hasOwnProperty("$" + t[l].value), t[l].selected !== d && (t[l].selected = d), d && c && (t[l].defaultSelected = true);
    } else {
      for (l = "" + le(l), i = null, d = 0; d < t.length; d++) {
        if (t[d].value === l) {
          t[d].selected = true, c && (t[d].defaultSelected = true);
          return;
        }
        i !== null || t[d].disabled || (i = t[d]);
      }
      i !== null && (i.selected = true);
    }
  }
  function et(t, i) {
    if (i.dangerouslySetInnerHTML != null) throw Error(n(91));
    return U({}, i, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function xe(t, i) {
    var l = i.value;
    if (l == null) {
      if (l = i.children, i = i.defaultValue, l != null) {
        if (i != null) throw Error(n(92));
        if (Fe(l)) {
          if (1 < l.length) throw Error(n(93));
          l = l[0];
        }
        i = l;
      }
      i == null && (i = ""), l = i;
    }
    t._wrapperState = { initialValue: le(l) };
  }
  function ye(t, i) {
    var l = le(i.value), c = le(i.defaultValue);
    l != null && (l = "" + l, l !== t.value && (t.value = l), i.defaultValue == null && t.defaultValue !== l && (t.defaultValue = l)), c != null && (t.defaultValue = "" + c);
  }
  function we(t) {
    var i = t.textContent;
    i === t._wrapperState.initialValue && i !== "" && i !== null && (t.value = i);
  }
  function Me(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ae(t, i) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Me(i) : t === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var Le, Oe = (function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(i, l, c, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return t(i, l, c, d);
      });
    } : t;
  })(function(t, i) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = i;
    else {
      for (Le = Le || document.createElement("div"), Le.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>", i = Le.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
      for (; i.firstChild; ) t.appendChild(i.firstChild);
    }
  });
  function tt(t, i) {
    if (i) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = i;
        return;
      }
    }
    t.textContent = i;
  }
  var qe = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, dt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qe).forEach(function(t) {
    dt.forEach(function(i) {
      i = i + t.charAt(0).toUpperCase() + t.substring(1), qe[i] = qe[t];
    });
  });
  function nt(t, i, l) {
    return i == null || typeof i == "boolean" || i === "" ? "" : l || typeof i != "number" || i === 0 || qe.hasOwnProperty(t) && qe[t] ? ("" + i).trim() : i + "px";
  }
  function it(t, i) {
    t = t.style;
    for (var l in i) if (i.hasOwnProperty(l)) {
      var c = l.indexOf("--") === 0, d = nt(l, i[l], c);
      l === "float" && (l = "cssFloat"), c ? t.setProperty(l, d) : t[l] = d;
    }
  }
  var $t = U({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function jt(t, i) {
    if (i) {
      if ($t[t] && (i.children != null || i.dangerouslySetInnerHTML != null)) throw Error(n(137, t));
      if (i.dangerouslySetInnerHTML != null) {
        if (i.children != null) throw Error(n(60));
        if (typeof i.dangerouslySetInnerHTML != "object" || !("__html" in i.dangerouslySetInnerHTML)) throw Error(n(61));
      }
      if (i.style != null && typeof i.style != "object") throw Error(n(62));
    }
  }
  function It(t, i) {
    if (t.indexOf("-") === -1) return typeof i.is == "string";
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var at = null;
  function Kt(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ht = null, bt = null, At = null;
  function cn(t) {
    if (t = qa(t)) {
      if (typeof Ht != "function") throw Error(n(280));
      var i = t.stateNode;
      i && (i = ll(i), Ht(t.stateNode, t.type, i));
    }
  }
  function qt(t) {
    bt ? At ? At.push(t) : At = [t] : bt = t;
  }
  function fn() {
    if (bt) {
      var t = bt, i = At;
      if (At = bt = null, cn(t), i) for (t = 0; t < i.length; t++) cn(i[t]);
    }
  }
  function Se(t, i) {
    return t(i);
  }
  function je() {
  }
  var me = false;
  function Ie(t, i, l) {
    if (me) return t(i, l);
    me = true;
    try {
      return Se(t, i, l);
    } finally {
      me = false, (bt !== null || At !== null) && (je(), fn());
    }
  }
  function Je(t, i) {
    var l = t.stateNode;
    if (l === null) return null;
    var c = ll(l);
    if (c === null) return null;
    l = c[i];
    e: switch (i) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (t = t.type, c = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !c;
        break e;
      default:
        t = false;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(n(231, i, typeof l));
    return l;
  }
  var lt = false;
  if (s) try {
    var Ke = {};
    Object.defineProperty(Ke, "passive", { get: function() {
      lt = true;
    } }), window.addEventListener("test", Ke, Ke), window.removeEventListener("test", Ke, Ke);
  } catch {
    lt = false;
  }
  function gt(t, i, l, c, d, v, y, N, $) {
    var ie = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(l, ie);
    } catch (pe) {
      this.onError(pe);
    }
  }
  var Et = false, an = null, yn = false, si = null, yt = { onError: function(t) {
    Et = true, an = t;
  } };
  function Jt(t, i, l, c, d, v, y, N, $) {
    Et = false, an = null, gt.apply(yt, arguments);
  }
  function en(t, i, l, c, d, v, y, N, $) {
    if (Jt.apply(this, arguments), Et) {
      if (Et) {
        var ie = an;
        Et = false, an = null;
      } else throw Error(n(198));
      yn || (yn = true, si = ie);
    }
  }
  function tn(t) {
    var i = t, l = t;
    if (t.alternate) for (; i.return; ) i = i.return;
    else {
      t = i;
      do
        i = t, (i.flags & 4098) !== 0 && (l = i.return), t = i.return;
      while (t);
    }
    return i.tag === 3 ? l : null;
  }
  function oe(t) {
    if (t.tag === 13) {
      var i = t.memoizedState;
      if (i === null && (t = t.alternate, t !== null && (i = t.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function Ce(t) {
    if (tn(t) !== t) throw Error(n(188));
  }
  function We(t) {
    var i = t.alternate;
    if (!i) {
      if (i = tn(t), i === null) throw Error(n(188));
      return i !== t ? null : t;
    }
    for (var l = t, c = i; ; ) {
      var d = l.return;
      if (d === null) break;
      var v = d.alternate;
      if (v === null) {
        if (c = d.return, c !== null) {
          l = c;
          continue;
        }
        break;
      }
      if (d.child === v.child) {
        for (v = d.child; v; ) {
          if (v === l) return Ce(d), t;
          if (v === c) return Ce(d), i;
          v = v.sibling;
        }
        throw Error(n(188));
      }
      if (l.return !== c.return) l = d, c = v;
      else {
        for (var y = false, N = d.child; N; ) {
          if (N === l) {
            y = true, l = d, c = v;
            break;
          }
          if (N === c) {
            y = true, c = d, l = v;
            break;
          }
          N = N.sibling;
        }
        if (!y) {
          for (N = v.child; N; ) {
            if (N === l) {
              y = true, l = v, c = d;
              break;
            }
            if (N === c) {
              y = true, c = v, l = d;
              break;
            }
            N = N.sibling;
          }
          if (!y) throw Error(n(189));
        }
      }
      if (l.alternate !== c) throw Error(n(190));
    }
    if (l.tag !== 3) throw Error(n(188));
    return l.stateNode.current === l ? t : i;
  }
  function Xe(t) {
    return t = We(t), t !== null ? ct(t) : null;
  }
  function ct(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var i = ct(t);
      if (i !== null) return i;
      t = t.sibling;
    }
    return null;
  }
  var ot = o.unstable_scheduleCallback, pt = o.unstable_cancelCallback, _n = o.unstable_shouldYield, Nn = o.unstable_requestPaint, Ze = o.unstable_now, rr = o.unstable_getCurrentPriorityLevel, zn = o.unstable_ImmediatePriority, Mr = o.unstable_UserBlockingPriority, Rr = o.unstable_NormalPriority, Fu = o.unstable_LowPriority, Dr = o.unstable_IdlePriority, Ho = null, ir = null;
  function w_(t) {
    if (ir && typeof ir.onCommitFiberRoot == "function") try {
      ir.onCommitFiberRoot(Ho, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
  }
  var Gn = Math.clz32 ? Math.clz32 : O_, C_ = Math.log, x_ = Math.LN2;
  function O_(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (C_(t) / x_ | 0) | 0;
  }
  var Wo = 64, Bo = 4194304;
  function ka(t) {
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function Uo(t, i) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var c = 0, d = t.suspendedLanes, v = t.pingedLanes, y = l & 268435455;
    if (y !== 0) {
      var N = y & ~d;
      N !== 0 ? c = ka(N) : (v &= y, v !== 0 && (c = ka(v)));
    } else y = l & ~d, y !== 0 ? c = ka(y) : v !== 0 && (c = ka(v));
    if (c === 0) return 0;
    if (i !== 0 && i !== c && (i & d) === 0 && (d = c & -c, v = i & -i, d >= v || d === 16 && (v & 4194240) !== 0)) return i;
    if ((c & 4) !== 0 && (c |= l & 16), i = t.entangledLanes, i !== 0) for (t = t.entanglements, i &= c; 0 < i; ) l = 31 - Gn(i), d = 1 << l, c |= t[l], i &= ~d;
    return c;
  }
  function b_(t, i) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return i + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function E_(t, i) {
    for (var l = t.suspendedLanes, c = t.pingedLanes, d = t.expirationTimes, v = t.pendingLanes; 0 < v; ) {
      var y = 31 - Gn(v), N = 1 << y, $ = d[y];
      $ === -1 ? ((N & l) === 0 || (N & c) !== 0) && (d[y] = b_(N, i)) : $ <= i && (t.expiredLanes |= N), v &= ~N;
    }
  }
  function Hu(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function wp() {
    var t = Wo;
    return Wo <<= 1, (Wo & 4194240) === 0 && (Wo = 64), t;
  }
  function Wu(t) {
    for (var i = [], l = 0; 31 > l; l++) i.push(t);
    return i;
  }
  function ja(t, i, l) {
    t.pendingLanes |= i, i !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, i = 31 - Gn(i), t[i] = l;
  }
  function S_(t, i) {
    var l = t.pendingLanes & ~i;
    t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= i, t.mutableReadLanes &= i, t.entangledLanes &= i, i = t.entanglements;
    var c = t.eventTimes;
    for (t = t.expirationTimes; 0 < l; ) {
      var d = 31 - Gn(l), v = 1 << d;
      i[d] = 0, c[d] = -1, t[d] = -1, l &= ~v;
    }
  }
  function Bu(t, i) {
    var l = t.entangledLanes |= i;
    for (t = t.entanglements; l; ) {
      var c = 31 - Gn(l), d = 1 << c;
      d & i | t[c] & i && (t[c] |= i), l &= ~d;
    }
  }
  var vt = 0;
  function Cp(t) {
    return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var xp, Uu, Op, bp, Ep, Ku = false, Ko = [], zr = null, Lr = null, $r = null, Ia = /* @__PURE__ */ new Map(), Ta = /* @__PURE__ */ new Map(), Ar = [], P_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sp(t, i) {
    switch (t) {
      case "focusin":
      case "focusout":
        zr = null;
        break;
      case "dragenter":
      case "dragleave":
        Lr = null;
        break;
      case "mouseover":
      case "mouseout":
        $r = null;
        break;
      case "pointerover":
      case "pointerout":
        Ia.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ta.delete(i.pointerId);
    }
  }
  function Ma(t, i, l, c, d, v) {
    return t === null || t.nativeEvent !== v ? (t = { blockedOn: i, domEventName: l, eventSystemFlags: c, nativeEvent: v, targetContainers: [d] }, i !== null && (i = qa(i), i !== null && Uu(i)), t) : (t.eventSystemFlags |= c, i = t.targetContainers, d !== null && i.indexOf(d) === -1 && i.push(d), t);
  }
  function N_(t, i, l, c, d) {
    switch (i) {
      case "focusin":
        return zr = Ma(zr, t, i, l, c, d), true;
      case "dragenter":
        return Lr = Ma(Lr, t, i, l, c, d), true;
      case "mouseover":
        return $r = Ma($r, t, i, l, c, d), true;
      case "pointerover":
        var v = d.pointerId;
        return Ia.set(v, Ma(Ia.get(v) || null, t, i, l, c, d)), true;
      case "gotpointercapture":
        return v = d.pointerId, Ta.set(v, Ma(Ta.get(v) || null, t, i, l, c, d)), true;
    }
    return false;
  }
  function Pp(t) {
    var i = ci(t.target);
    if (i !== null) {
      var l = tn(i);
      if (l !== null) {
        if (i = l.tag, i === 13) {
          if (i = oe(l), i !== null) {
            t.blockedOn = i, Ep(t.priority, function() {
              Op(l);
            });
            return;
          }
        } else if (i === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qo(t) {
    if (t.blockedOn !== null) return false;
    for (var i = t.targetContainers; 0 < i.length; ) {
      var l = Gu(t.domEventName, t.eventSystemFlags, i[0], t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var c = new l.constructor(l.type, l);
        at = c, l.target.dispatchEvent(c), at = null;
      } else return i = qa(l), i !== null && Uu(i), t.blockedOn = l, false;
      i.shift();
    }
    return true;
  }
  function Np(t, i, l) {
    qo(t) && l.delete(i);
  }
  function k_() {
    Ku = false, zr !== null && qo(zr) && (zr = null), Lr !== null && qo(Lr) && (Lr = null), $r !== null && qo($r) && ($r = null), Ia.forEach(Np), Ta.forEach(Np);
  }
  function Ra(t, i) {
    t.blockedOn === i && (t.blockedOn = null, Ku || (Ku = true, o.unstable_scheduleCallback(o.unstable_NormalPriority, k_)));
  }
  function Da(t) {
    function i(d) {
      return Ra(d, t);
    }
    if (0 < Ko.length) {
      Ra(Ko[0], t);
      for (var l = 1; l < Ko.length; l++) {
        var c = Ko[l];
        c.blockedOn === t && (c.blockedOn = null);
      }
    }
    for (zr !== null && Ra(zr, t), Lr !== null && Ra(Lr, t), $r !== null && Ra($r, t), Ia.forEach(i), Ta.forEach(i), l = 0; l < Ar.length; l++) c = Ar[l], c.blockedOn === t && (c.blockedOn = null);
    for (; 0 < Ar.length && (l = Ar[0], l.blockedOn === null); ) Pp(l), l.blockedOn === null && Ar.shift();
  }
  var $i = T.ReactCurrentBatchConfig, Go = true;
  function j_(t, i, l, c) {
    var d = vt, v = $i.transition;
    $i.transition = null;
    try {
      vt = 1, qu(t, i, l, c);
    } finally {
      vt = d, $i.transition = v;
    }
  }
  function I_(t, i, l, c) {
    var d = vt, v = $i.transition;
    $i.transition = null;
    try {
      vt = 4, qu(t, i, l, c);
    } finally {
      vt = d, $i.transition = v;
    }
  }
  function qu(t, i, l, c) {
    if (Go) {
      var d = Gu(t, i, l, c);
      if (d === null) fs(t, i, c, Yo, l), Sp(t, c);
      else if (N_(d, t, i, l, c)) c.stopPropagation();
      else if (Sp(t, c), i & 4 && -1 < P_.indexOf(t)) {
        for (; d !== null; ) {
          var v = qa(d);
          if (v !== null && xp(v), v = Gu(t, i, l, c), v === null && fs(t, i, c, Yo, l), v === d) break;
          d = v;
        }
        d !== null && c.stopPropagation();
      } else fs(t, i, c, null, l);
    }
  }
  var Yo = null;
  function Gu(t, i, l, c) {
    if (Yo = null, t = Kt(c), t = ci(t), t !== null) if (i = tn(t), i === null) t = null;
    else if (l = i.tag, l === 13) {
      if (t = oe(i), t !== null) return t;
      t = null;
    } else if (l === 3) {
      if (i.stateNode.current.memoizedState.isDehydrated) return i.tag === 3 ? i.stateNode.containerInfo : null;
      t = null;
    } else i !== t && (t = null);
    return Yo = t, null;
  }
  function kp(t) {
    switch (t) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (rr()) {
          case zn:
            return 1;
          case Mr:
            return 4;
          case Rr:
          case Fu:
            return 16;
          case Dr:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Vr = null, Yu = null, Qo = null;
  function jp() {
    if (Qo) return Qo;
    var t, i = Yu, l = i.length, c, d = "value" in Vr ? Vr.value : Vr.textContent, v = d.length;
    for (t = 0; t < l && i[t] === d[t]; t++) ;
    var y = l - t;
    for (c = 1; c <= y && i[l - c] === d[v - c]; c++) ;
    return Qo = d.slice(t, 1 < c ? 1 - c : void 0);
  }
  function Xo(t) {
    var i = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Zo() {
    return true;
  }
  function Ip() {
    return false;
  }
  function kn(t) {
    function i(l, c, d, v, y) {
      this._reactName = l, this._targetInst = d, this.type = c, this.nativeEvent = v, this.target = y, this.currentTarget = null;
      for (var N in t) t.hasOwnProperty(N) && (l = t[N], this[N] = l ? l(v) : v[N]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === false) ? Zo : Ip, this.isPropagationStopped = Ip, this;
    }
    return U(i.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = Zo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = Zo);
    }, persist: function() {
    }, isPersistent: Zo }), i;
  }
  var Ai = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qu = kn(Ai), za = U({}, Ai, { view: 0, detail: 0 }), T_ = kn(za), Xu, Zu, La, Jo = U({}, za, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: es, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== La && (La && t.type === "mousemove" ? (Xu = t.screenX - La.screenX, Zu = t.screenY - La.screenY) : Zu = Xu = 0, La = t), Xu);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Zu;
  } }), Tp = kn(Jo), M_ = U({}, Jo, { dataTransfer: 0 }), R_ = kn(M_), D_ = U({}, za, { relatedTarget: 0 }), Ju = kn(D_), z_ = U({}, Ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), L_ = kn(z_), $_ = U({}, Ai, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), A_ = kn($_), V_ = U({}, Ai, { data: 0 }), Mp = kn(V_), F_ = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, H_ = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, W_ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function B_(t) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(t) : (t = W_[t]) ? !!i[t] : false;
  }
  function es() {
    return B_;
  }
  var U_ = U({}, za, { key: function(t) {
    if (t.key) {
      var i = F_[t.key] || t.key;
      if (i !== "Unidentified") return i;
    }
    return t.type === "keypress" ? (t = Xo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? H_[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: es, charCode: function(t) {
    return t.type === "keypress" ? Xo(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Xo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), K_ = kn(U_), q_ = U({}, Jo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rp = kn(q_), G_ = U({}, za, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: es }), Y_ = kn(G_), Q_ = U({}, Ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), X_ = kn(Q_), Z_ = U({}, Jo, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), J_ = kn(Z_), ew = [9, 13, 27, 32], ts = s && "CompositionEvent" in window, $a = null;
  s && "documentMode" in document && ($a = document.documentMode);
  var tw = s && "TextEvent" in window && !$a, Dp = s && (!ts || $a && 8 < $a && 11 >= $a), zp = " ", Lp = false;
  function $p(t, i) {
    switch (t) {
      case "keyup":
        return ew.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Ap(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Vi = false;
  function nw(t, i) {
    switch (t) {
      case "compositionend":
        return Ap(i);
      case "keypress":
        return i.which !== 32 ? null : (Lp = true, zp);
      case "textInput":
        return t = i.data, t === zp && Lp ? null : t;
      default:
        return null;
    }
  }
  function rw(t, i) {
    if (Vi) return t === "compositionend" || !ts && $p(t, i) ? (t = jp(), Qo = Yu = Vr = null, Vi = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) {
          if (i.char && 1 < i.char.length) return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return Dp && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var iw = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Vp(t) {
    var i = t && t.nodeName && t.nodeName.toLowerCase();
    return i === "input" ? !!iw[t.type] : i === "textarea";
  }
  function Fp(t, i, l, c) {
    qt(c), i = il(i, "onChange"), 0 < i.length && (l = new Qu("onChange", "change", null, l, c), t.push({ event: l, listeners: i }));
  }
  var Aa = null, Va = null;
  function aw(t) {
    av(t, 0);
  }
  function el(t) {
    var i = Ui(t);
    if (Pe(i)) return t;
  }
  function ow(t, i) {
    if (t === "change") return i;
  }
  var Hp = false;
  if (s) {
    var ns;
    if (s) {
      var rs = "oninput" in document;
      if (!rs) {
        var Wp = document.createElement("div");
        Wp.setAttribute("oninput", "return;"), rs = typeof Wp.oninput == "function";
      }
      ns = rs;
    } else ns = false;
    Hp = ns && (!document.documentMode || 9 < document.documentMode);
  }
  function Bp() {
    Aa && (Aa.detachEvent("onpropertychange", Up), Va = Aa = null);
  }
  function Up(t) {
    if (t.propertyName === "value" && el(Va)) {
      var i = [];
      Fp(i, Va, t, Kt(t)), Ie(aw, i);
    }
  }
  function lw(t, i, l) {
    t === "focusin" ? (Bp(), Aa = i, Va = l, Aa.attachEvent("onpropertychange", Up)) : t === "focusout" && Bp();
  }
  function uw(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return el(Va);
  }
  function sw(t, i) {
    if (t === "click") return el(i);
  }
  function cw(t, i) {
    if (t === "input" || t === "change") return el(i);
  }
  function fw(t, i) {
    return t === i && (t !== 0 || 1 / t === 1 / i) || t !== t && i !== i;
  }
  var Yn = typeof Object.is == "function" ? Object.is : fw;
  function Fa(t, i) {
    if (Yn(t, i)) return true;
    if (typeof t != "object" || t === null || typeof i != "object" || i === null) return false;
    var l = Object.keys(t), c = Object.keys(i);
    if (l.length !== c.length) return false;
    for (c = 0; c < l.length; c++) {
      var d = l[c];
      if (!m.call(i, d) || !Yn(t[d], i[d])) return false;
    }
    return true;
  }
  function Kp(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function qp(t, i) {
    var l = Kp(t);
    t = 0;
    for (var c; l; ) {
      if (l.nodeType === 3) {
        if (c = t + l.textContent.length, t <= i && c >= i) return { node: l, offset: i - t };
        t = c;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Kp(l);
    }
  }
  function Gp(t, i) {
    return t && i ? t === i ? true : t && t.nodeType === 3 ? false : i && i.nodeType === 3 ? Gp(t, i.parentNode) : "contains" in t ? t.contains(i) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(i) & 16) : false : false;
  }
  function Yp() {
    for (var t = window, i = De(); i instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof i.contentWindow.location.href == "string";
      } catch {
        l = false;
      }
      if (l) t = i.contentWindow;
      else break;
      i = De(t.document);
    }
    return i;
  }
  function is(t) {
    var i = t && t.nodeName && t.nodeName.toLowerCase();
    return i && (i === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || i === "textarea" || t.contentEditable === "true");
  }
  function dw(t) {
    var i = Yp(), l = t.focusedElem, c = t.selectionRange;
    if (i !== l && l && l.ownerDocument && Gp(l.ownerDocument.documentElement, l)) {
      if (c !== null && is(l)) {
        if (i = c.start, t = c.end, t === void 0 && (t = i), "selectionStart" in l) l.selectionStart = i, l.selectionEnd = Math.min(t, l.value.length);
        else if (t = (i = l.ownerDocument || document) && i.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var d = l.textContent.length, v = Math.min(c.start, d);
          c = c.end === void 0 ? v : Math.min(c.end, d), !t.extend && v > c && (d = c, c = v, v = d), d = qp(l, v);
          var y = qp(l, c);
          d && y && (t.rangeCount !== 1 || t.anchorNode !== d.node || t.anchorOffset !== d.offset || t.focusNode !== y.node || t.focusOffset !== y.offset) && (i = i.createRange(), i.setStart(d.node, d.offset), t.removeAllRanges(), v > c ? (t.addRange(i), t.extend(y.node, y.offset)) : (i.setEnd(y.node, y.offset), t.addRange(i)));
        }
      }
      for (i = [], t = l; t = t.parentNode; ) t.nodeType === 1 && i.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < i.length; l++) t = i[l], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var pw = s && "documentMode" in document && 11 >= document.documentMode, Fi = null, as = null, Ha = null, os = false;
  function Qp(t, i, l) {
    var c = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    os || Fi == null || Fi !== De(c) || (c = Fi, "selectionStart" in c && is(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), Ha && Fa(Ha, c) || (Ha = c, c = il(as, "onSelect"), 0 < c.length && (i = new Qu("onSelect", "select", null, i, l), t.push({ event: i, listeners: c }), i.target = Fi)));
  }
  function tl(t, i) {
    var l = {};
    return l[t.toLowerCase()] = i.toLowerCase(), l["Webkit" + t] = "webkit" + i, l["Moz" + t] = "moz" + i, l;
  }
  var Hi = { animationend: tl("Animation", "AnimationEnd"), animationiteration: tl("Animation", "AnimationIteration"), animationstart: tl("Animation", "AnimationStart"), transitionend: tl("Transition", "TransitionEnd") }, ls = {}, Xp = {};
  s && (Xp = document.createElement("div").style, "AnimationEvent" in window || (delete Hi.animationend.animation, delete Hi.animationiteration.animation, delete Hi.animationstart.animation), "TransitionEvent" in window || delete Hi.transitionend.transition);
  function nl(t) {
    if (ls[t]) return ls[t];
    if (!Hi[t]) return t;
    var i = Hi[t], l;
    for (l in i) if (i.hasOwnProperty(l) && l in Xp) return ls[t] = i[l];
    return t;
  }
  var Zp = nl("animationend"), Jp = nl("animationiteration"), ev = nl("animationstart"), tv = nl("transitionend"), nv = /* @__PURE__ */ new Map(), rv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fr(t, i) {
    nv.set(t, i), u(i, [t]);
  }
  for (var us = 0; us < rv.length; us++) {
    var ss = rv[us], vw = ss.toLowerCase(), mw = ss[0].toUpperCase() + ss.slice(1);
    Fr(vw, "on" + mw);
  }
  Fr(Zp, "onAnimationEnd"), Fr(Jp, "onAnimationIteration"), Fr(ev, "onAnimationStart"), Fr("dblclick", "onDoubleClick"), Fr("focusin", "onFocus"), Fr("focusout", "onBlur"), Fr(tv, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));
  function iv(t, i, l) {
    var c = t.type || "unknown-event";
    t.currentTarget = l, en(c, i, void 0, t), t.currentTarget = null;
  }
  function av(t, i) {
    i = (i & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var c = t[l], d = c.event;
      c = c.listeners;
      e: {
        var v = void 0;
        if (i) for (var y = c.length - 1; 0 <= y; y--) {
          var N = c[y], $ = N.instance, ie = N.currentTarget;
          if (N = N.listener, $ !== v && d.isPropagationStopped()) break e;
          iv(d, N, ie), v = $;
        }
        else for (y = 0; y < c.length; y++) {
          if (N = c[y], $ = N.instance, ie = N.currentTarget, N = N.listener, $ !== v && d.isPropagationStopped()) break e;
          iv(d, N, ie), v = $;
        }
      }
    }
    if (yn) throw t = si, yn = false, si = null, t;
  }
  function Ct(t, i) {
    var l = i[gs];
    l === void 0 && (l = i[gs] = /* @__PURE__ */ new Set());
    var c = t + "__bubble";
    l.has(c) || (ov(i, t, 2, false), l.add(c));
  }
  function cs(t, i, l) {
    var c = 0;
    i && (c |= 4), ov(l, t, c, i);
  }
  var rl = "_reactListening" + Math.random().toString(36).slice(2);
  function Ba(t) {
    if (!t[rl]) {
      t[rl] = true, r.forEach(function(l) {
        l !== "selectionchange" && (hw.has(l) || cs(l, false, t), cs(l, true, t));
      });
      var i = t.nodeType === 9 ? t : t.ownerDocument;
      i === null || i[rl] || (i[rl] = true, cs("selectionchange", false, i));
    }
  }
  function ov(t, i, l, c) {
    switch (kp(i)) {
      case 1:
        var d = j_;
        break;
      case 4:
        d = I_;
        break;
      default:
        d = qu;
    }
    l = d.bind(null, i, l, t), d = void 0, !lt || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (d = true), c ? d !== void 0 ? t.addEventListener(i, l, { capture: true, passive: d }) : t.addEventListener(i, l, true) : d !== void 0 ? t.addEventListener(i, l, { passive: d }) : t.addEventListener(i, l, false);
  }
  function fs(t, i, l, c, d) {
    var v = c;
    if ((i & 1) === 0 && (i & 2) === 0 && c !== null) e: for (; ; ) {
      if (c === null) return;
      var y = c.tag;
      if (y === 3 || y === 4) {
        var N = c.stateNode.containerInfo;
        if (N === d || N.nodeType === 8 && N.parentNode === d) break;
        if (y === 4) for (y = c.return; y !== null; ) {
          var $ = y.tag;
          if (($ === 3 || $ === 4) && ($ = y.stateNode.containerInfo, $ === d || $.nodeType === 8 && $.parentNode === d)) return;
          y = y.return;
        }
        for (; N !== null; ) {
          if (y = ci(N), y === null) return;
          if ($ = y.tag, $ === 5 || $ === 6) {
            c = v = y;
            continue e;
          }
          N = N.parentNode;
        }
      }
      c = c.return;
    }
    Ie(function() {
      var ie = v, pe = Kt(l), ve = [];
      e: {
        var de = nv.get(t);
        if (de !== void 0) {
          var Ne = Qu, Re = t;
          switch (t) {
            case "keypress":
              if (Xo(l) === 0) break e;
            case "keydown":
            case "keyup":
              Ne = K_;
              break;
            case "focusin":
              Re = "focus", Ne = Ju;
              break;
            case "focusout":
              Re = "blur", Ne = Ju;
              break;
            case "beforeblur":
            case "afterblur":
              Ne = Ju;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ne = Tp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ne = R_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ne = Y_;
              break;
            case Zp:
            case Jp:
            case ev:
              Ne = L_;
              break;
            case tv:
              Ne = X_;
              break;
            case "scroll":
              Ne = T_;
              break;
            case "wheel":
              Ne = J_;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ne = A_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ne = Rp;
          }
          var $e = (i & 4) !== 0, zt = !$e && t === "scroll", J = $e ? de !== null ? de + "Capture" : null : de;
          $e = [];
          for (var K = ie, te; K !== null; ) {
            te = K;
            var _e = te.stateNode;
            if (te.tag === 5 && _e !== null && (te = _e, J !== null && (_e = Je(K, J), _e != null && $e.push(Ua(K, _e, te)))), zt) break;
            K = K.return;
          }
          0 < $e.length && (de = new Ne(de, Re, null, l, pe), ve.push({ event: de, listeners: $e }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (de = t === "mouseover" || t === "pointerover", Ne = t === "mouseout" || t === "pointerout", de && l !== at && (Re = l.relatedTarget || l.fromElement) && (ci(Re) || Re[vr])) break e;
          if ((Ne || de) && (de = pe.window === pe ? pe : (de = pe.ownerDocument) ? de.defaultView || de.parentWindow : window, Ne ? (Re = l.relatedTarget || l.toElement, Ne = ie, Re = Re ? ci(Re) : null, Re !== null && (zt = tn(Re), Re !== zt || Re.tag !== 5 && Re.tag !== 6) && (Re = null)) : (Ne = null, Re = ie), Ne !== Re)) {
            if ($e = Tp, _e = "onMouseLeave", J = "onMouseEnter", K = "mouse", (t === "pointerout" || t === "pointerover") && ($e = Rp, _e = "onPointerLeave", J = "onPointerEnter", K = "pointer"), zt = Ne == null ? de : Ui(Ne), te = Re == null ? de : Ui(Re), de = new $e(_e, K + "leave", Ne, l, pe), de.target = zt, de.relatedTarget = te, _e = null, ci(pe) === ie && ($e = new $e(J, K + "enter", Re, l, pe), $e.target = te, $e.relatedTarget = zt, _e = $e), zt = _e, Ne && Re) t: {
              for ($e = Ne, J = Re, K = 0, te = $e; te; te = Wi(te)) K++;
              for (te = 0, _e = J; _e; _e = Wi(_e)) te++;
              for (; 0 < K - te; ) $e = Wi($e), K--;
              for (; 0 < te - K; ) J = Wi(J), te--;
              for (; K--; ) {
                if ($e === J || J !== null && $e === J.alternate) break t;
                $e = Wi($e), J = Wi(J);
              }
              $e = null;
            }
            else $e = null;
            Ne !== null && lv(ve, de, Ne, $e, false), Re !== null && zt !== null && lv(ve, zt, Re, $e, true);
          }
        }
        e: {
          if (de = ie ? Ui(ie) : window, Ne = de.nodeName && de.nodeName.toLowerCase(), Ne === "select" || Ne === "input" && de.type === "file") var Ve = ow;
          else if (Vp(de)) if (Hp) Ve = cw;
          else {
            Ve = uw;
            var Be = lw;
          }
          else (Ne = de.nodeName) && Ne.toLowerCase() === "input" && (de.type === "checkbox" || de.type === "radio") && (Ve = sw);
          if (Ve && (Ve = Ve(t, ie))) {
            Fp(ve, Ve, l, pe);
            break e;
          }
          Be && Be(t, de, ie), t === "focusout" && (Be = de._wrapperState) && Be.controlled && de.type === "number" && ge(de, "number", de.value);
        }
        switch (Be = ie ? Ui(ie) : window, t) {
          case "focusin":
            (Vp(Be) || Be.contentEditable === "true") && (Fi = Be, as = ie, Ha = null);
            break;
          case "focusout":
            Ha = as = Fi = null;
            break;
          case "mousedown":
            os = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            os = false, Qp(ve, l, pe);
            break;
          case "selectionchange":
            if (pw) break;
          case "keydown":
          case "keyup":
            Qp(ve, l, pe);
        }
        var Ue;
        if (ts) e: {
          switch (t) {
            case "compositionstart":
              var Ge = "onCompositionStart";
              break e;
            case "compositionend":
              Ge = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ge = "onCompositionUpdate";
              break e;
          }
          Ge = void 0;
        }
        else Vi ? $p(t, l) && (Ge = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (Ge = "onCompositionStart");
        Ge && (Dp && l.locale !== "ko" && (Vi || Ge !== "onCompositionStart" ? Ge === "onCompositionEnd" && Vi && (Ue = jp()) : (Vr = pe, Yu = "value" in Vr ? Vr.value : Vr.textContent, Vi = true)), Be = il(ie, Ge), 0 < Be.length && (Ge = new Mp(Ge, t, null, l, pe), ve.push({ event: Ge, listeners: Be }), Ue ? Ge.data = Ue : (Ue = Ap(l), Ue !== null && (Ge.data = Ue)))), (Ue = tw ? nw(t, l) : rw(t, l)) && (ie = il(ie, "onBeforeInput"), 0 < ie.length && (pe = new Mp("onBeforeInput", "beforeinput", null, l, pe), ve.push({ event: pe, listeners: ie }), pe.data = Ue));
      }
      av(ve, i);
    });
  }
  function Ua(t, i, l) {
    return { instance: t, listener: i, currentTarget: l };
  }
  function il(t, i) {
    for (var l = i + "Capture", c = []; t !== null; ) {
      var d = t, v = d.stateNode;
      d.tag === 5 && v !== null && (d = v, v = Je(t, l), v != null && c.unshift(Ua(t, v, d)), v = Je(t, i), v != null && c.push(Ua(t, v, d))), t = t.return;
    }
    return c;
  }
  function Wi(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function lv(t, i, l, c, d) {
    for (var v = i._reactName, y = []; l !== null && l !== c; ) {
      var N = l, $ = N.alternate, ie = N.stateNode;
      if ($ !== null && $ === c) break;
      N.tag === 5 && ie !== null && (N = ie, d ? ($ = Je(l, v), $ != null && y.unshift(Ua(l, $, N))) : d || ($ = Je(l, v), $ != null && y.push(Ua(l, $, N)))), l = l.return;
    }
    y.length !== 0 && t.push({ event: i, listeners: y });
  }
  var gw = /\r\n?/g, yw = /\u0000|\uFFFD/g;
  function uv(t) {
    return (typeof t == "string" ? t : "" + t).replace(gw, `
`).replace(yw, "");
  }
  function al(t, i, l) {
    if (i = uv(i), uv(t) !== i && l) throw Error(n(425));
  }
  function ol() {
  }
  var ds = null, ps = null;
  function vs(t, i) {
    return t === "textarea" || t === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var ms = typeof setTimeout == "function" ? setTimeout : void 0, _w = typeof clearTimeout == "function" ? clearTimeout : void 0, sv = typeof Promise == "function" ? Promise : void 0, ww = typeof queueMicrotask == "function" ? queueMicrotask : typeof sv < "u" ? function(t) {
    return sv.resolve(null).then(t).catch(Cw);
  } : ms;
  function Cw(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function hs(t, i) {
    var l = i, c = 0;
    do {
      var d = l.nextSibling;
      if (t.removeChild(l), d && d.nodeType === 8) if (l = d.data, l === "/$") {
        if (c === 0) {
          t.removeChild(d), Da(i);
          return;
        }
        c--;
      } else l !== "$" && l !== "$?" && l !== "$!" || c++;
      l = d;
    } while (l);
    Da(i);
  }
  function Hr(t) {
    for (; t != null; t = t.nextSibling) {
      var i = t.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (i = t.data, i === "$" || i === "$!" || i === "$?") break;
        if (i === "/$") return null;
      }
    }
    return t;
  }
  function cv(t) {
    t = t.previousSibling;
    for (var i = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (i === 0) return t;
          i--;
        } else l === "/$" && i++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var Bi = Math.random().toString(36).slice(2), ar = "__reactFiber$" + Bi, Ka = "__reactProps$" + Bi, vr = "__reactContainer$" + Bi, gs = "__reactEvents$" + Bi, xw = "__reactListeners$" + Bi, Ow = "__reactHandles$" + Bi;
  function ci(t) {
    var i = t[ar];
    if (i) return i;
    for (var l = t.parentNode; l; ) {
      if (i = l[vr] || l[ar]) {
        if (l = i.alternate, i.child !== null || l !== null && l.child !== null) for (t = cv(t); t !== null; ) {
          if (l = t[ar]) return l;
          t = cv(t);
        }
        return i;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function qa(t) {
    return t = t[ar] || t[vr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function Ui(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(n(33));
  }
  function ll(t) {
    return t[Ka] || null;
  }
  var ys = [], Ki = -1;
  function Wr(t) {
    return { current: t };
  }
  function xt(t) {
    0 > Ki || (t.current = ys[Ki], ys[Ki] = null, Ki--);
  }
  function _t(t, i) {
    Ki++, ys[Ki] = t.current, t.current = i;
  }
  var Br = {}, on = Wr(Br), wn = Wr(false), fi = Br;
  function qi(t, i) {
    var l = t.type.contextTypes;
    if (!l) return Br;
    var c = t.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === i) return c.__reactInternalMemoizedMaskedChildContext;
    var d = {}, v;
    for (v in l) d[v] = i[v];
    return c && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Cn(t) {
    return t = t.childContextTypes, t != null;
  }
  function ul() {
    xt(wn), xt(on);
  }
  function fv(t, i, l) {
    if (on.current !== Br) throw Error(n(168));
    _t(on, i), _t(wn, l);
  }
  function dv(t, i, l) {
    var c = t.stateNode;
    if (i = i.childContextTypes, typeof c.getChildContext != "function") return l;
    c = c.getChildContext();
    for (var d in c) if (!(d in i)) throw Error(n(108, ne(t) || "Unknown", d));
    return U({}, l, c);
  }
  function sl(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Br, fi = on.current, _t(on, t), _t(wn, wn.current), true;
  }
  function pv(t, i, l) {
    var c = t.stateNode;
    if (!c) throw Error(n(169));
    l ? (t = dv(t, i, fi), c.__reactInternalMemoizedMergedChildContext = t, xt(wn), xt(on), _t(on, t)) : xt(wn), _t(wn, l);
  }
  var mr = null, cl = false, _s = false;
  function vv(t) {
    mr === null ? mr = [t] : mr.push(t);
  }
  function bw(t) {
    cl = true, vv(t);
  }
  function Ur() {
    if (!_s && mr !== null) {
      _s = true;
      var t = 0, i = vt;
      try {
        var l = mr;
        for (vt = 1; t < l.length; t++) {
          var c = l[t];
          do
            c = c(true);
          while (c !== null);
        }
        mr = null, cl = false;
      } catch (d) {
        throw mr !== null && (mr = mr.slice(t + 1)), ot(zn, Ur), d;
      } finally {
        vt = i, _s = false;
      }
    }
    return null;
  }
  var Gi = [], Yi = 0, fl = null, dl = 0, Ln = [], $n = 0, di = null, hr = 1, gr = "";
  function pi(t, i) {
    Gi[Yi++] = dl, Gi[Yi++] = fl, fl = t, dl = i;
  }
  function mv(t, i, l) {
    Ln[$n++] = hr, Ln[$n++] = gr, Ln[$n++] = di, di = t;
    var c = hr;
    t = gr;
    var d = 32 - Gn(c) - 1;
    c &= ~(1 << d), l += 1;
    var v = 32 - Gn(i) + d;
    if (30 < v) {
      var y = d - d % 5;
      v = (c & (1 << y) - 1).toString(32), c >>= y, d -= y, hr = 1 << 32 - Gn(i) + d | l << d | c, gr = v + t;
    } else hr = 1 << v | l << d | c, gr = t;
  }
  function ws(t) {
    t.return !== null && (pi(t, 1), mv(t, 1, 0));
  }
  function Cs(t) {
    for (; t === fl; ) fl = Gi[--Yi], Gi[Yi] = null, dl = Gi[--Yi], Gi[Yi] = null;
    for (; t === di; ) di = Ln[--$n], Ln[$n] = null, gr = Ln[--$n], Ln[$n] = null, hr = Ln[--$n], Ln[$n] = null;
  }
  var jn = null, In = null, St = false, Qn = null;
  function hv(t, i) {
    var l = Hn(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = i, l.return = t, i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l);
  }
  function gv(t, i) {
    switch (t.tag) {
      case 5:
        var l = t.type;
        return i = i.nodeType !== 1 || l.toLowerCase() !== i.nodeName.toLowerCase() ? null : i, i !== null ? (t.stateNode = i, jn = t, In = Hr(i.firstChild), true) : false;
      case 6:
        return i = t.pendingProps === "" || i.nodeType !== 3 ? null : i, i !== null ? (t.stateNode = i, jn = t, In = null, true) : false;
      case 13:
        return i = i.nodeType !== 8 ? null : i, i !== null ? (l = di !== null ? { id: hr, overflow: gr } : null, t.memoizedState = { dehydrated: i, treeContext: l, retryLane: 1073741824 }, l = Hn(18, null, null, 0), l.stateNode = i, l.return = t, t.child = l, jn = t, In = null, true) : false;
      default:
        return false;
    }
  }
  function xs(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function Os(t) {
    if (St) {
      var i = In;
      if (i) {
        var l = i;
        if (!gv(t, i)) {
          if (xs(t)) throw Error(n(418));
          i = Hr(l.nextSibling);
          var c = jn;
          i && gv(t, i) ? hv(c, l) : (t.flags = t.flags & -4097 | 2, St = false, jn = t);
        }
      } else {
        if (xs(t)) throw Error(n(418));
        t.flags = t.flags & -4097 | 2, St = false, jn = t;
      }
    }
  }
  function yv(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    jn = t;
  }
  function pl(t) {
    if (t !== jn) return false;
    if (!St) return yv(t), St = true, false;
    var i;
    if ((i = t.tag !== 3) && !(i = t.tag !== 5) && (i = t.type, i = i !== "head" && i !== "body" && !vs(t.type, t.memoizedProps)), i && (i = In)) {
      if (xs(t)) throw _v(), Error(n(418));
      for (; i; ) hv(t, i), i = Hr(i.nextSibling);
    }
    if (yv(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(n(317));
      e: {
        for (t = t.nextSibling, i = 0; t; ) {
          if (t.nodeType === 8) {
            var l = t.data;
            if (l === "/$") {
              if (i === 0) {
                In = Hr(t.nextSibling);
                break e;
              }
              i--;
            } else l !== "$" && l !== "$!" && l !== "$?" || i++;
          }
          t = t.nextSibling;
        }
        In = null;
      }
    } else In = jn ? Hr(t.stateNode.nextSibling) : null;
    return true;
  }
  function _v() {
    for (var t = In; t; ) t = Hr(t.nextSibling);
  }
  function Qi() {
    In = jn = null, St = false;
  }
  function bs(t) {
    Qn === null ? Qn = [t] : Qn.push(t);
  }
  var Ew = T.ReactCurrentBatchConfig;
  function Ga(t, i, l) {
    if (t = l.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(n(309));
          var c = l.stateNode;
        }
        if (!c) throw Error(n(147, t));
        var d = c, v = "" + t;
        return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === v ? i.ref : (i = function(y) {
          var N = d.refs;
          y === null ? delete N[v] : N[v] = y;
        }, i._stringRef = v, i);
      }
      if (typeof t != "string") throw Error(n(284));
      if (!l._owner) throw Error(n(290, t));
    }
    return t;
  }
  function vl(t, i) {
    throw t = Object.prototype.toString.call(i), Error(n(31, t === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : t));
  }
  function wv(t) {
    var i = t._init;
    return i(t._payload);
  }
  function Cv(t) {
    function i(J, K) {
      if (t) {
        var te = J.deletions;
        te === null ? (J.deletions = [K], J.flags |= 16) : te.push(K);
      }
    }
    function l(J, K) {
      if (!t) return null;
      for (; K !== null; ) i(J, K), K = K.sibling;
      return null;
    }
    function c(J, K) {
      for (J = /* @__PURE__ */ new Map(); K !== null; ) K.key !== null ? J.set(K.key, K) : J.set(K.index, K), K = K.sibling;
      return J;
    }
    function d(J, K) {
      return J = Jr(J, K), J.index = 0, J.sibling = null, J;
    }
    function v(J, K, te) {
      return J.index = te, t ? (te = J.alternate, te !== null ? (te = te.index, te < K ? (J.flags |= 2, K) : te) : (J.flags |= 2, K)) : (J.flags |= 1048576, K);
    }
    function y(J) {
      return t && J.alternate === null && (J.flags |= 2), J;
    }
    function N(J, K, te, _e) {
      return K === null || K.tag !== 6 ? (K = mc(te, J.mode, _e), K.return = J, K) : (K = d(K, te), K.return = J, K);
    }
    function $(J, K, te, _e) {
      var Ve = te.type;
      return Ve === M ? pe(J, K, te.props.children, _e, te.key) : K !== null && (K.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === A && wv(Ve) === K.type) ? (_e = d(K, te.props), _e.ref = Ga(J, K, te), _e.return = J, _e) : (_e = $l(te.type, te.key, te.props, null, J.mode, _e), _e.ref = Ga(J, K, te), _e.return = J, _e);
    }
    function ie(J, K, te, _e) {
      return K === null || K.tag !== 4 || K.stateNode.containerInfo !== te.containerInfo || K.stateNode.implementation !== te.implementation ? (K = hc(te, J.mode, _e), K.return = J, K) : (K = d(K, te.children || []), K.return = J, K);
    }
    function pe(J, K, te, _e, Ve) {
      return K === null || K.tag !== 7 ? (K = Ci(te, J.mode, _e, Ve), K.return = J, K) : (K = d(K, te), K.return = J, K);
    }
    function ve(J, K, te) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return K = mc("" + K, J.mode, te), K.return = J, K;
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case R:
            return te = $l(K.type, K.key, K.props, null, J.mode, te), te.ref = Ga(J, null, K), te.return = J, te;
          case P:
            return K = hc(K, J.mode, te), K.return = J, K;
          case A:
            var _e = K._init;
            return ve(J, _e(K._payload), te);
        }
        if (Fe(K) || X(K)) return K = Ci(K, J.mode, te, null), K.return = J, K;
        vl(J, K);
      }
      return null;
    }
    function de(J, K, te, _e) {
      var Ve = K !== null ? K.key : null;
      if (typeof te == "string" && te !== "" || typeof te == "number") return Ve !== null ? null : N(J, K, "" + te, _e);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case R:
            return te.key === Ve ? $(J, K, te, _e) : null;
          case P:
            return te.key === Ve ? ie(J, K, te, _e) : null;
          case A:
            return Ve = te._init, de(J, K, Ve(te._payload), _e);
        }
        if (Fe(te) || X(te)) return Ve !== null ? null : pe(J, K, te, _e, null);
        vl(J, te);
      }
      return null;
    }
    function Ne(J, K, te, _e, Ve) {
      if (typeof _e == "string" && _e !== "" || typeof _e == "number") return J = J.get(te) || null, N(K, J, "" + _e, Ve);
      if (typeof _e == "object" && _e !== null) {
        switch (_e.$$typeof) {
          case R:
            return J = J.get(_e.key === null ? te : _e.key) || null, $(K, J, _e, Ve);
          case P:
            return J = J.get(_e.key === null ? te : _e.key) || null, ie(K, J, _e, Ve);
          case A:
            var Be = _e._init;
            return Ne(J, K, te, Be(_e._payload), Ve);
        }
        if (Fe(_e) || X(_e)) return J = J.get(te) || null, pe(K, J, _e, Ve, null);
        vl(K, _e);
      }
      return null;
    }
    function Re(J, K, te, _e) {
      for (var Ve = null, Be = null, Ue = K, Ge = K = 0, Qt = null; Ue !== null && Ge < te.length; Ge++) {
        Ue.index > Ge ? (Qt = Ue, Ue = null) : Qt = Ue.sibling;
        var st = de(J, Ue, te[Ge], _e);
        if (st === null) {
          Ue === null && (Ue = Qt);
          break;
        }
        t && Ue && st.alternate === null && i(J, Ue), K = v(st, K, Ge), Be === null ? Ve = st : Be.sibling = st, Be = st, Ue = Qt;
      }
      if (Ge === te.length) return l(J, Ue), St && pi(J, Ge), Ve;
      if (Ue === null) {
        for (; Ge < te.length; Ge++) Ue = ve(J, te[Ge], _e), Ue !== null && (K = v(Ue, K, Ge), Be === null ? Ve = Ue : Be.sibling = Ue, Be = Ue);
        return St && pi(J, Ge), Ve;
      }
      for (Ue = c(J, Ue); Ge < te.length; Ge++) Qt = Ne(Ue, J, Ge, te[Ge], _e), Qt !== null && (t && Qt.alternate !== null && Ue.delete(Qt.key === null ? Ge : Qt.key), K = v(Qt, K, Ge), Be === null ? Ve = Qt : Be.sibling = Qt, Be = Qt);
      return t && Ue.forEach(function(ei) {
        return i(J, ei);
      }), St && pi(J, Ge), Ve;
    }
    function $e(J, K, te, _e) {
      var Ve = X(te);
      if (typeof Ve != "function") throw Error(n(150));
      if (te = Ve.call(te), te == null) throw Error(n(151));
      for (var Be = Ve = null, Ue = K, Ge = K = 0, Qt = null, st = te.next(); Ue !== null && !st.done; Ge++, st = te.next()) {
        Ue.index > Ge ? (Qt = Ue, Ue = null) : Qt = Ue.sibling;
        var ei = de(J, Ue, st.value, _e);
        if (ei === null) {
          Ue === null && (Ue = Qt);
          break;
        }
        t && Ue && ei.alternate === null && i(J, Ue), K = v(ei, K, Ge), Be === null ? Ve = ei : Be.sibling = ei, Be = ei, Ue = Qt;
      }
      if (st.done) return l(J, Ue), St && pi(J, Ge), Ve;
      if (Ue === null) {
        for (; !st.done; Ge++, st = te.next()) st = ve(J, st.value, _e), st !== null && (K = v(st, K, Ge), Be === null ? Ve = st : Be.sibling = st, Be = st);
        return St && pi(J, Ge), Ve;
      }
      for (Ue = c(J, Ue); !st.done; Ge++, st = te.next()) st = Ne(Ue, J, Ge, st.value, _e), st !== null && (t && st.alternate !== null && Ue.delete(st.key === null ? Ge : st.key), K = v(st, K, Ge), Be === null ? Ve = st : Be.sibling = st, Be = st);
      return t && Ue.forEach(function(iC) {
        return i(J, iC);
      }), St && pi(J, Ge), Ve;
    }
    function zt(J, K, te, _e) {
      if (typeof te == "object" && te !== null && te.type === M && te.key === null && (te = te.props.children), typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case R:
            e: {
              for (var Ve = te.key, Be = K; Be !== null; ) {
                if (Be.key === Ve) {
                  if (Ve = te.type, Ve === M) {
                    if (Be.tag === 7) {
                      l(J, Be.sibling), K = d(Be, te.props.children), K.return = J, J = K;
                      break e;
                    }
                  } else if (Be.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === A && wv(Ve) === Be.type) {
                    l(J, Be.sibling), K = d(Be, te.props), K.ref = Ga(J, Be, te), K.return = J, J = K;
                    break e;
                  }
                  l(J, Be);
                  break;
                } else i(J, Be);
                Be = Be.sibling;
              }
              te.type === M ? (K = Ci(te.props.children, J.mode, _e, te.key), K.return = J, J = K) : (_e = $l(te.type, te.key, te.props, null, J.mode, _e), _e.ref = Ga(J, K, te), _e.return = J, J = _e);
            }
            return y(J);
          case P:
            e: {
              for (Be = te.key; K !== null; ) {
                if (K.key === Be) if (K.tag === 4 && K.stateNode.containerInfo === te.containerInfo && K.stateNode.implementation === te.implementation) {
                  l(J, K.sibling), K = d(K, te.children || []), K.return = J, J = K;
                  break e;
                } else {
                  l(J, K);
                  break;
                }
                else i(J, K);
                K = K.sibling;
              }
              K = hc(te, J.mode, _e), K.return = J, J = K;
            }
            return y(J);
          case A:
            return Be = te._init, zt(J, K, Be(te._payload), _e);
        }
        if (Fe(te)) return Re(J, K, te, _e);
        if (X(te)) return $e(J, K, te, _e);
        vl(J, te);
      }
      return typeof te == "string" && te !== "" || typeof te == "number" ? (te = "" + te, K !== null && K.tag === 6 ? (l(J, K.sibling), K = d(K, te), K.return = J, J = K) : (l(J, K), K = mc(te, J.mode, _e), K.return = J, J = K), y(J)) : l(J, K);
    }
    return zt;
  }
  var Xi = Cv(true), xv = Cv(false), ml = Wr(null), hl = null, Zi = null, Es = null;
  function Ss() {
    Es = Zi = hl = null;
  }
  function Ps(t) {
    var i = ml.current;
    xt(ml), t._currentValue = i;
  }
  function Ns(t, i, l) {
    for (; t !== null; ) {
      var c = t.alternate;
      if ((t.childLanes & i) !== i ? (t.childLanes |= i, c !== null && (c.childLanes |= i)) : c !== null && (c.childLanes & i) !== i && (c.childLanes |= i), t === l) break;
      t = t.return;
    }
  }
  function Ji(t, i) {
    hl = t, Es = Zi = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & i) !== 0 && (xn = true), t.firstContext = null);
  }
  function An(t) {
    var i = t._currentValue;
    if (Es !== t) if (t = { context: t, memoizedValue: i, next: null }, Zi === null) {
      if (hl === null) throw Error(n(308));
      Zi = t, hl.dependencies = { lanes: 0, firstContext: t };
    } else Zi = Zi.next = t;
    return i;
  }
  var vi = null;
  function ks(t) {
    vi === null ? vi = [t] : vi.push(t);
  }
  function Ov(t, i, l, c) {
    var d = i.interleaved;
    return d === null ? (l.next = l, ks(i)) : (l.next = d.next, d.next = l), i.interleaved = l, yr(t, c);
  }
  function yr(t, i) {
    t.lanes |= i;
    var l = t.alternate;
    for (l !== null && (l.lanes |= i), l = t, t = t.return; t !== null; ) t.childLanes |= i, l = t.alternate, l !== null && (l.childLanes |= i), l = t, t = t.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Kr = false;
  function js(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bv(t, i) {
    t = t.updateQueue, i.updateQueue === t && (i.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function _r(t, i) {
    return { eventTime: t, lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function qr(t, i, l) {
    var c = t.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (ut & 2) !== 0) {
      var d = c.pending;
      return d === null ? i.next = i : (i.next = d.next, d.next = i), c.pending = i, yr(t, l);
    }
    return d = c.interleaved, d === null ? (i.next = i, ks(c)) : (i.next = d.next, d.next = i), c.interleaved = i, yr(t, l);
  }
  function gl(t, i, l) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (l & 4194240) !== 0)) {
      var c = i.lanes;
      c &= t.pendingLanes, l |= c, i.lanes = l, Bu(t, l);
    }
  }
  function Ev(t, i) {
    var l = t.updateQueue, c = t.alternate;
    if (c !== null && (c = c.updateQueue, l === c)) {
      var d = null, v = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var y = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          v === null ? d = v = y : v = v.next = y, l = l.next;
        } while (l !== null);
        v === null ? d = v = i : v = v.next = i;
      } else d = v = i;
      l = { baseState: c.baseState, firstBaseUpdate: d, lastBaseUpdate: v, shared: c.shared, effects: c.effects }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = i : t.next = i, l.lastBaseUpdate = i;
  }
  function yl(t, i, l, c) {
    var d = t.updateQueue;
    Kr = false;
    var v = d.firstBaseUpdate, y = d.lastBaseUpdate, N = d.shared.pending;
    if (N !== null) {
      d.shared.pending = null;
      var $ = N, ie = $.next;
      $.next = null, y === null ? v = ie : y.next = ie, y = $;
      var pe = t.alternate;
      pe !== null && (pe = pe.updateQueue, N = pe.lastBaseUpdate, N !== y && (N === null ? pe.firstBaseUpdate = ie : N.next = ie, pe.lastBaseUpdate = $));
    }
    if (v !== null) {
      var ve = d.baseState;
      y = 0, pe = ie = $ = null, N = v;
      do {
        var de = N.lane, Ne = N.eventTime;
        if ((c & de) === de) {
          pe !== null && (pe = pe.next = { eventTime: Ne, lane: 0, tag: N.tag, payload: N.payload, callback: N.callback, next: null });
          e: {
            var Re = t, $e = N;
            switch (de = i, Ne = l, $e.tag) {
              case 1:
                if (Re = $e.payload, typeof Re == "function") {
                  ve = Re.call(Ne, ve, de);
                  break e;
                }
                ve = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = $e.payload, de = typeof Re == "function" ? Re.call(Ne, ve, de) : Re, de == null) break e;
                ve = U({}, ve, de);
                break e;
              case 2:
                Kr = true;
            }
          }
          N.callback !== null && N.lane !== 0 && (t.flags |= 64, de = d.effects, de === null ? d.effects = [N] : de.push(N));
        } else Ne = { eventTime: Ne, lane: de, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, pe === null ? (ie = pe = Ne, $ = ve) : pe = pe.next = Ne, y |= de;
        if (N = N.next, N === null) {
          if (N = d.shared.pending, N === null) break;
          de = N, N = de.next, de.next = null, d.lastBaseUpdate = de, d.shared.pending = null;
        }
      } while (true);
      if (pe === null && ($ = ve), d.baseState = $, d.firstBaseUpdate = ie, d.lastBaseUpdate = pe, i = d.shared.interleaved, i !== null) {
        d = i;
        do
          y |= d.lane, d = d.next;
        while (d !== i);
      } else v === null && (d.shared.lanes = 0);
      gi |= y, t.lanes = y, t.memoizedState = ve;
    }
  }
  function Sv(t, i, l) {
    if (t = i.effects, i.effects = null, t !== null) for (i = 0; i < t.length; i++) {
      var c = t[i], d = c.callback;
      if (d !== null) {
        if (c.callback = null, c = l, typeof d != "function") throw Error(n(191, d));
        d.call(c);
      }
    }
  }
  var Ya = {}, or = Wr(Ya), Qa = Wr(Ya), Xa = Wr(Ya);
  function mi(t) {
    if (t === Ya) throw Error(n(174));
    return t;
  }
  function Is(t, i) {
    switch (_t(Xa, i), _t(Qa, t), _t(or, Ya), t = i.nodeType, t) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : Ae(null, "");
        break;
      default:
        t = t === 8 ? i.parentNode : i, i = t.namespaceURI || null, t = t.tagName, i = Ae(i, t);
    }
    xt(or), _t(or, i);
  }
  function ea() {
    xt(or), xt(Qa), xt(Xa);
  }
  function Pv(t) {
    mi(Xa.current);
    var i = mi(or.current), l = Ae(i, t.type);
    i !== l && (_t(Qa, t), _t(or, l));
  }
  function Ts(t) {
    Qa.current === t && (xt(or), xt(Qa));
  }
  var Pt = Wr(0);
  function _l(t) {
    for (var i = t; i !== null; ) {
      if (i.tag === 13) {
        var l = i.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var Ms = [];
  function Rs() {
    for (var t = 0; t < Ms.length; t++) Ms[t]._workInProgressVersionPrimary = null;
    Ms.length = 0;
  }
  var wl = T.ReactCurrentDispatcher, Ds = T.ReactCurrentBatchConfig, hi = 0, Nt = null, Wt = null, Gt = null, Cl = false, Za = false, Ja = 0, Sw = 0;
  function ln() {
    throw Error(n(321));
  }
  function zs(t, i) {
    if (i === null) return false;
    for (var l = 0; l < i.length && l < t.length; l++) if (!Yn(t[l], i[l])) return false;
    return true;
  }
  function Ls(t, i, l, c, d, v) {
    if (hi = v, Nt = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, wl.current = t === null || t.memoizedState === null ? jw : Iw, t = l(c, d), Za) {
      v = 0;
      do {
        if (Za = false, Ja = 0, 25 <= v) throw Error(n(301));
        v += 1, Gt = Wt = null, i.updateQueue = null, wl.current = Tw, t = l(c, d);
      } while (Za);
    }
    if (wl.current = bl, i = Wt !== null && Wt.next !== null, hi = 0, Gt = Wt = Nt = null, Cl = false, i) throw Error(n(300));
    return t;
  }
  function $s() {
    var t = Ja !== 0;
    return Ja = 0, t;
  }
  function lr() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Gt === null ? Nt.memoizedState = Gt = t : Gt = Gt.next = t, Gt;
  }
  function Vn() {
    if (Wt === null) {
      var t = Nt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Wt.next;
    var i = Gt === null ? Nt.memoizedState : Gt.next;
    if (i !== null) Gt = i, Wt = t;
    else {
      if (t === null) throw Error(n(310));
      Wt = t, t = { memoizedState: Wt.memoizedState, baseState: Wt.baseState, baseQueue: Wt.baseQueue, queue: Wt.queue, next: null }, Gt === null ? Nt.memoizedState = Gt = t : Gt = Gt.next = t;
    }
    return Gt;
  }
  function eo(t, i) {
    return typeof i == "function" ? i(t) : i;
  }
  function As(t) {
    var i = Vn(), l = i.queue;
    if (l === null) throw Error(n(311));
    l.lastRenderedReducer = t;
    var c = Wt, d = c.baseQueue, v = l.pending;
    if (v !== null) {
      if (d !== null) {
        var y = d.next;
        d.next = v.next, v.next = y;
      }
      c.baseQueue = d = v, l.pending = null;
    }
    if (d !== null) {
      v = d.next, c = c.baseState;
      var N = y = null, $ = null, ie = v;
      do {
        var pe = ie.lane;
        if ((hi & pe) === pe) $ !== null && ($ = $.next = { lane: 0, action: ie.action, hasEagerState: ie.hasEagerState, eagerState: ie.eagerState, next: null }), c = ie.hasEagerState ? ie.eagerState : t(c, ie.action);
        else {
          var ve = { lane: pe, action: ie.action, hasEagerState: ie.hasEagerState, eagerState: ie.eagerState, next: null };
          $ === null ? (N = $ = ve, y = c) : $ = $.next = ve, Nt.lanes |= pe, gi |= pe;
        }
        ie = ie.next;
      } while (ie !== null && ie !== v);
      $ === null ? y = c : $.next = N, Yn(c, i.memoizedState) || (xn = true), i.memoizedState = c, i.baseState = y, i.baseQueue = $, l.lastRenderedState = c;
    }
    if (t = l.interleaved, t !== null) {
      d = t;
      do
        v = d.lane, Nt.lanes |= v, gi |= v, d = d.next;
      while (d !== t);
    } else d === null && (l.lanes = 0);
    return [i.memoizedState, l.dispatch];
  }
  function Vs(t) {
    var i = Vn(), l = i.queue;
    if (l === null) throw Error(n(311));
    l.lastRenderedReducer = t;
    var c = l.dispatch, d = l.pending, v = i.memoizedState;
    if (d !== null) {
      l.pending = null;
      var y = d = d.next;
      do
        v = t(v, y.action), y = y.next;
      while (y !== d);
      Yn(v, i.memoizedState) || (xn = true), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), l.lastRenderedState = v;
    }
    return [v, c];
  }
  function Nv() {
  }
  function kv(t, i) {
    var l = Nt, c = Vn(), d = i(), v = !Yn(c.memoizedState, d);
    if (v && (c.memoizedState = d, xn = true), c = c.queue, Fs(Tv.bind(null, l, c, t), [t]), c.getSnapshot !== i || v || Gt !== null && Gt.memoizedState.tag & 1) {
      if (l.flags |= 2048, to(9, Iv.bind(null, l, c, d, i), void 0, null), Yt === null) throw Error(n(349));
      (hi & 30) !== 0 || jv(l, i, d);
    }
    return d;
  }
  function jv(t, i, l) {
    t.flags |= 16384, t = { getSnapshot: i, value: l }, i = Nt.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Nt.updateQueue = i, i.stores = [t]) : (l = i.stores, l === null ? i.stores = [t] : l.push(t));
  }
  function Iv(t, i, l, c) {
    i.value = l, i.getSnapshot = c, Mv(i) && Rv(t);
  }
  function Tv(t, i, l) {
    return l(function() {
      Mv(i) && Rv(t);
    });
  }
  function Mv(t) {
    var i = t.getSnapshot;
    t = t.value;
    try {
      var l = i();
      return !Yn(t, l);
    } catch {
      return true;
    }
  }
  function Rv(t) {
    var i = yr(t, 1);
    i !== null && er(i, t, 1, -1);
  }
  function Dv(t) {
    var i = lr();
    return typeof t == "function" && (t = t()), i.memoizedState = i.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: eo, lastRenderedState: t }, i.queue = t, t = t.dispatch = kw.bind(null, Nt, t), [i.memoizedState, t];
  }
  function to(t, i, l, c) {
    return t = { tag: t, create: i, destroy: l, deps: c, next: null }, i = Nt.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Nt.updateQueue = i, i.lastEffect = t.next = t) : (l = i.lastEffect, l === null ? i.lastEffect = t.next = t : (c = l.next, l.next = t, t.next = c, i.lastEffect = t)), t;
  }
  function zv() {
    return Vn().memoizedState;
  }
  function xl(t, i, l, c) {
    var d = lr();
    Nt.flags |= t, d.memoizedState = to(1 | i, l, void 0, c === void 0 ? null : c);
  }
  function Ol(t, i, l, c) {
    var d = Vn();
    c = c === void 0 ? null : c;
    var v = void 0;
    if (Wt !== null) {
      var y = Wt.memoizedState;
      if (v = y.destroy, c !== null && zs(c, y.deps)) {
        d.memoizedState = to(i, l, v, c);
        return;
      }
    }
    Nt.flags |= t, d.memoizedState = to(1 | i, l, v, c);
  }
  function Lv(t, i) {
    return xl(8390656, 8, t, i);
  }
  function Fs(t, i) {
    return Ol(2048, 8, t, i);
  }
  function $v(t, i) {
    return Ol(4, 2, t, i);
  }
  function Av(t, i) {
    return Ol(4, 4, t, i);
  }
  function Vv(t, i) {
    if (typeof i == "function") return t = t(), i(t), function() {
      i(null);
    };
    if (i != null) return t = t(), i.current = t, function() {
      i.current = null;
    };
  }
  function Fv(t, i, l) {
    return l = l != null ? l.concat([t]) : null, Ol(4, 4, Vv.bind(null, i, t), l);
  }
  function Hs() {
  }
  function Hv(t, i) {
    var l = Vn();
    i = i === void 0 ? null : i;
    var c = l.memoizedState;
    return c !== null && i !== null && zs(i, c[1]) ? c[0] : (l.memoizedState = [t, i], t);
  }
  function Wv(t, i) {
    var l = Vn();
    i = i === void 0 ? null : i;
    var c = l.memoizedState;
    return c !== null && i !== null && zs(i, c[1]) ? c[0] : (t = t(), l.memoizedState = [t, i], t);
  }
  function Bv(t, i, l) {
    return (hi & 21) === 0 ? (t.baseState && (t.baseState = false, xn = true), t.memoizedState = l) : (Yn(l, i) || (l = wp(), Nt.lanes |= l, gi |= l, t.baseState = true), i);
  }
  function Pw(t, i) {
    var l = vt;
    vt = l !== 0 && 4 > l ? l : 4, t(true);
    var c = Ds.transition;
    Ds.transition = {};
    try {
      t(false), i();
    } finally {
      vt = l, Ds.transition = c;
    }
  }
  function Uv() {
    return Vn().memoizedState;
  }
  function Nw(t, i, l) {
    var c = Xr(t);
    if (l = { lane: c, action: l, hasEagerState: false, eagerState: null, next: null }, Kv(t)) qv(i, l);
    else if (l = Ov(t, i, l, c), l !== null) {
      var d = pn();
      er(l, t, c, d), Gv(l, i, c);
    }
  }
  function kw(t, i, l) {
    var c = Xr(t), d = { lane: c, action: l, hasEagerState: false, eagerState: null, next: null };
    if (Kv(t)) qv(i, d);
    else {
      var v = t.alternate;
      if (t.lanes === 0 && (v === null || v.lanes === 0) && (v = i.lastRenderedReducer, v !== null)) try {
        var y = i.lastRenderedState, N = v(y, l);
        if (d.hasEagerState = true, d.eagerState = N, Yn(N, y)) {
          var $ = i.interleaved;
          $ === null ? (d.next = d, ks(i)) : (d.next = $.next, $.next = d), i.interleaved = d;
          return;
        }
      } catch {
      } finally {
      }
      l = Ov(t, i, d, c), l !== null && (d = pn(), er(l, t, c, d), Gv(l, i, c));
    }
  }
  function Kv(t) {
    var i = t.alternate;
    return t === Nt || i !== null && i === Nt;
  }
  function qv(t, i) {
    Za = Cl = true;
    var l = t.pending;
    l === null ? i.next = i : (i.next = l.next, l.next = i), t.pending = i;
  }
  function Gv(t, i, l) {
    if ((l & 4194240) !== 0) {
      var c = i.lanes;
      c &= t.pendingLanes, l |= c, i.lanes = l, Bu(t, l);
    }
  }
  var bl = { readContext: An, useCallback: ln, useContext: ln, useEffect: ln, useImperativeHandle: ln, useInsertionEffect: ln, useLayoutEffect: ln, useMemo: ln, useReducer: ln, useRef: ln, useState: ln, useDebugValue: ln, useDeferredValue: ln, useTransition: ln, useMutableSource: ln, useSyncExternalStore: ln, useId: ln, unstable_isNewReconciler: false }, jw = { readContext: An, useCallback: function(t, i) {
    return lr().memoizedState = [t, i === void 0 ? null : i], t;
  }, useContext: An, useEffect: Lv, useImperativeHandle: function(t, i, l) {
    return l = l != null ? l.concat([t]) : null, xl(4194308, 4, Vv.bind(null, i, t), l);
  }, useLayoutEffect: function(t, i) {
    return xl(4194308, 4, t, i);
  }, useInsertionEffect: function(t, i) {
    return xl(4, 2, t, i);
  }, useMemo: function(t, i) {
    var l = lr();
    return i = i === void 0 ? null : i, t = t(), l.memoizedState = [t, i], t;
  }, useReducer: function(t, i, l) {
    var c = lr();
    return i = l !== void 0 ? l(i) : i, c.memoizedState = c.baseState = i, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: i }, c.queue = t, t = t.dispatch = Nw.bind(null, Nt, t), [c.memoizedState, t];
  }, useRef: function(t) {
    var i = lr();
    return t = { current: t }, i.memoizedState = t;
  }, useState: Dv, useDebugValue: Hs, useDeferredValue: function(t) {
    return lr().memoizedState = t;
  }, useTransition: function() {
    var t = Dv(false), i = t[0];
    return t = Pw.bind(null, t[1]), lr().memoizedState = t, [i, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, i, l) {
    var c = Nt, d = lr();
    if (St) {
      if (l === void 0) throw Error(n(407));
      l = l();
    } else {
      if (l = i(), Yt === null) throw Error(n(349));
      (hi & 30) !== 0 || jv(c, i, l);
    }
    d.memoizedState = l;
    var v = { value: l, getSnapshot: i };
    return d.queue = v, Lv(Tv.bind(null, c, v, t), [t]), c.flags |= 2048, to(9, Iv.bind(null, c, v, l, i), void 0, null), l;
  }, useId: function() {
    var t = lr(), i = Yt.identifierPrefix;
    if (St) {
      var l = gr, c = hr;
      l = (c & ~(1 << 32 - Gn(c) - 1)).toString(32) + l, i = ":" + i + "R" + l, l = Ja++, 0 < l && (i += "H" + l.toString(32)), i += ":";
    } else l = Sw++, i = ":" + i + "r" + l.toString(32) + ":";
    return t.memoizedState = i;
  }, unstable_isNewReconciler: false }, Iw = { readContext: An, useCallback: Hv, useContext: An, useEffect: Fs, useImperativeHandle: Fv, useInsertionEffect: $v, useLayoutEffect: Av, useMemo: Wv, useReducer: As, useRef: zv, useState: function() {
    return As(eo);
  }, useDebugValue: Hs, useDeferredValue: function(t) {
    var i = Vn();
    return Bv(i, Wt.memoizedState, t);
  }, useTransition: function() {
    var t = As(eo)[0], i = Vn().memoizedState;
    return [t, i];
  }, useMutableSource: Nv, useSyncExternalStore: kv, useId: Uv, unstable_isNewReconciler: false }, Tw = { readContext: An, useCallback: Hv, useContext: An, useEffect: Fs, useImperativeHandle: Fv, useInsertionEffect: $v, useLayoutEffect: Av, useMemo: Wv, useReducer: Vs, useRef: zv, useState: function() {
    return Vs(eo);
  }, useDebugValue: Hs, useDeferredValue: function(t) {
    var i = Vn();
    return Wt === null ? i.memoizedState = t : Bv(i, Wt.memoizedState, t);
  }, useTransition: function() {
    var t = Vs(eo)[0], i = Vn().memoizedState;
    return [t, i];
  }, useMutableSource: Nv, useSyncExternalStore: kv, useId: Uv, unstable_isNewReconciler: false };
  function Xn(t, i) {
    if (t && t.defaultProps) {
      i = U({}, i), t = t.defaultProps;
      for (var l in t) i[l] === void 0 && (i[l] = t[l]);
      return i;
    }
    return i;
  }
  function Ws(t, i, l, c) {
    i = t.memoizedState, l = l(c, i), l = l == null ? i : U({}, i, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var El = { isMounted: function(t) {
    return (t = t._reactInternals) ? tn(t) === t : false;
  }, enqueueSetState: function(t, i, l) {
    t = t._reactInternals;
    var c = pn(), d = Xr(t), v = _r(c, d);
    v.payload = i, l != null && (v.callback = l), i = qr(t, v, d), i !== null && (er(i, t, d, c), gl(i, t, d));
  }, enqueueReplaceState: function(t, i, l) {
    t = t._reactInternals;
    var c = pn(), d = Xr(t), v = _r(c, d);
    v.tag = 1, v.payload = i, l != null && (v.callback = l), i = qr(t, v, d), i !== null && (er(i, t, d, c), gl(i, t, d));
  }, enqueueForceUpdate: function(t, i) {
    t = t._reactInternals;
    var l = pn(), c = Xr(t), d = _r(l, c);
    d.tag = 2, i != null && (d.callback = i), i = qr(t, d, c), i !== null && (er(i, t, c, l), gl(i, t, c));
  } };
  function Yv(t, i, l, c, d, v, y) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(c, v, y) : i.prototype && i.prototype.isPureReactComponent ? !Fa(l, c) || !Fa(d, v) : true;
  }
  function Qv(t, i, l) {
    var c = false, d = Br, v = i.contextType;
    return typeof v == "object" && v !== null ? v = An(v) : (d = Cn(i) ? fi : on.current, c = i.contextTypes, v = (c = c != null) ? qi(t, d) : Br), i = new i(l, v), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = El, t.stateNode = i, i._reactInternals = t, c && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = d, t.__reactInternalMemoizedMaskedChildContext = v), i;
  }
  function Xv(t, i, l, c) {
    t = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(l, c), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(l, c), i.state !== t && El.enqueueReplaceState(i, i.state, null);
  }
  function Bs(t, i, l, c) {
    var d = t.stateNode;
    d.props = l, d.state = t.memoizedState, d.refs = {}, js(t);
    var v = i.contextType;
    typeof v == "object" && v !== null ? d.context = An(v) : (v = Cn(i) ? fi : on.current, d.context = qi(t, v)), d.state = t.memoizedState, v = i.getDerivedStateFromProps, typeof v == "function" && (Ws(t, i, v, l), d.state = t.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (i = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), i !== d.state && El.enqueueReplaceState(d, d.state, null), yl(t, l, d, c), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function ta(t, i) {
    try {
      var l = "", c = i;
      do
        l += ue(c), c = c.return;
      while (c);
      var d = l;
    } catch (v) {
      d = `
Error generating stack: ` + v.message + `
` + v.stack;
    }
    return { value: t, source: i, stack: d, digest: null };
  }
  function Us(t, i, l) {
    return { value: t, source: null, stack: l ?? null, digest: i ?? null };
  }
  function Ks(t, i) {
    try {
      console.error(i.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Mw = typeof WeakMap == "function" ? WeakMap : Map;
  function Zv(t, i, l) {
    l = _r(-1, l), l.tag = 3, l.payload = { element: null };
    var c = i.value;
    return l.callback = function() {
      Tl || (Tl = true, lc = c), Ks(t, i);
    }, l;
  }
  function Jv(t, i, l) {
    l = _r(-1, l), l.tag = 3;
    var c = t.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var d = i.value;
      l.payload = function() {
        return c(d);
      }, l.callback = function() {
        Ks(t, i);
      };
    }
    var v = t.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
      Ks(t, i), typeof c != "function" && (Yr === null ? Yr = /* @__PURE__ */ new Set([this]) : Yr.add(this));
      var y = i.stack;
      this.componentDidCatch(i.value, { componentStack: y !== null ? y : "" });
    }), l;
  }
  function em(t, i, l) {
    var c = t.pingCache;
    if (c === null) {
      c = t.pingCache = new Mw();
      var d = /* @__PURE__ */ new Set();
      c.set(i, d);
    } else d = c.get(i), d === void 0 && (d = /* @__PURE__ */ new Set(), c.set(i, d));
    d.has(l) || (d.add(l), t = qw.bind(null, t, i, l), i.then(t, t));
  }
  function tm(t) {
    do {
      var i;
      if ((i = t.tag === 13) && (i = t.memoizedState, i = i !== null ? i.dehydrated !== null : true), i) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function nm(t, i, l, c, d) {
    return (t.mode & 1) === 0 ? (t === i ? t.flags |= 65536 : (t.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (i = _r(-1, 1), i.tag = 2, qr(l, i, 1))), l.lanes |= 1), t) : (t.flags |= 65536, t.lanes = d, t);
  }
  var Rw = T.ReactCurrentOwner, xn = false;
  function dn(t, i, l, c) {
    i.child = t === null ? xv(i, null, l, c) : Xi(i, t.child, l, c);
  }
  function rm(t, i, l, c, d) {
    l = l.render;
    var v = i.ref;
    return Ji(i, d), c = Ls(t, i, l, c, v, d), l = $s(), t !== null && !xn ? (i.updateQueue = t.updateQueue, i.flags &= -2053, t.lanes &= ~d, wr(t, i, d)) : (St && l && ws(i), i.flags |= 1, dn(t, i, c, d), i.child);
  }
  function im(t, i, l, c, d) {
    if (t === null) {
      var v = l.type;
      return typeof v == "function" && !vc(v) && v.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (i.tag = 15, i.type = v, am(t, i, v, c, d)) : (t = $l(l.type, null, c, i, i.mode, d), t.ref = i.ref, t.return = i, i.child = t);
    }
    if (v = t.child, (t.lanes & d) === 0) {
      var y = v.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Fa, l(y, c) && t.ref === i.ref) return wr(t, i, d);
    }
    return i.flags |= 1, t = Jr(v, c), t.ref = i.ref, t.return = i, i.child = t;
  }
  function am(t, i, l, c, d) {
    if (t !== null) {
      var v = t.memoizedProps;
      if (Fa(v, c) && t.ref === i.ref) if (xn = false, i.pendingProps = c = v, (t.lanes & d) !== 0) (t.flags & 131072) !== 0 && (xn = true);
      else return i.lanes = t.lanes, wr(t, i, d);
    }
    return qs(t, i, l, c, d);
  }
  function om(t, i, l) {
    var c = i.pendingProps, d = c.children, v = t !== null ? t.memoizedState : null;
    if (c.mode === "hidden") if ((i.mode & 1) === 0) i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _t(ra, Tn), Tn |= l;
    else {
      if ((l & 1073741824) === 0) return t = v !== null ? v.baseLanes | l : l, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, i.updateQueue = null, _t(ra, Tn), Tn |= t, null;
      i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = v !== null ? v.baseLanes : l, _t(ra, Tn), Tn |= c;
    }
    else v !== null ? (c = v.baseLanes | l, i.memoizedState = null) : c = l, _t(ra, Tn), Tn |= c;
    return dn(t, i, d, l), i.child;
  }
  function lm(t, i) {
    var l = i.ref;
    (t === null && l !== null || t !== null && t.ref !== l) && (i.flags |= 512, i.flags |= 2097152);
  }
  function qs(t, i, l, c, d) {
    var v = Cn(l) ? fi : on.current;
    return v = qi(i, v), Ji(i, d), l = Ls(t, i, l, c, v, d), c = $s(), t !== null && !xn ? (i.updateQueue = t.updateQueue, i.flags &= -2053, t.lanes &= ~d, wr(t, i, d)) : (St && c && ws(i), i.flags |= 1, dn(t, i, l, d), i.child);
  }
  function um(t, i, l, c, d) {
    if (Cn(l)) {
      var v = true;
      sl(i);
    } else v = false;
    if (Ji(i, d), i.stateNode === null) Pl(t, i), Qv(i, l, c), Bs(i, l, c, d), c = true;
    else if (t === null) {
      var y = i.stateNode, N = i.memoizedProps;
      y.props = N;
      var $ = y.context, ie = l.contextType;
      typeof ie == "object" && ie !== null ? ie = An(ie) : (ie = Cn(l) ? fi : on.current, ie = qi(i, ie));
      var pe = l.getDerivedStateFromProps, ve = typeof pe == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      ve || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (N !== c || $ !== ie) && Xv(i, y, c, ie), Kr = false;
      var de = i.memoizedState;
      y.state = de, yl(i, c, y, d), $ = i.memoizedState, N !== c || de !== $ || wn.current || Kr ? (typeof pe == "function" && (Ws(i, l, pe, c), $ = i.memoizedState), (N = Kr || Yv(i, l, N, c, de, $, ie)) ? (ve || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = c, i.memoizedState = $), y.props = c, y.state = $, y.context = ie, c = N) : (typeof y.componentDidMount == "function" && (i.flags |= 4194308), c = false);
    } else {
      y = i.stateNode, bv(t, i), N = i.memoizedProps, ie = i.type === i.elementType ? N : Xn(i.type, N), y.props = ie, ve = i.pendingProps, de = y.context, $ = l.contextType, typeof $ == "object" && $ !== null ? $ = An($) : ($ = Cn(l) ? fi : on.current, $ = qi(i, $));
      var Ne = l.getDerivedStateFromProps;
      (pe = typeof Ne == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (N !== ve || de !== $) && Xv(i, y, c, $), Kr = false, de = i.memoizedState, y.state = de, yl(i, c, y, d);
      var Re = i.memoizedState;
      N !== ve || de !== Re || wn.current || Kr ? (typeof Ne == "function" && (Ws(i, l, Ne, c), Re = i.memoizedState), (ie = Kr || Yv(i, l, ie, c, de, Re, $) || false) ? (pe || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(c, Re, $), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(c, Re, $)), typeof y.componentDidUpdate == "function" && (i.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || N === t.memoizedProps && de === t.memoizedState || (i.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || N === t.memoizedProps && de === t.memoizedState || (i.flags |= 1024), i.memoizedProps = c, i.memoizedState = Re), y.props = c, y.state = Re, y.context = $, c = ie) : (typeof y.componentDidUpdate != "function" || N === t.memoizedProps && de === t.memoizedState || (i.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || N === t.memoizedProps && de === t.memoizedState || (i.flags |= 1024), c = false);
    }
    return Gs(t, i, l, c, v, d);
  }
  function Gs(t, i, l, c, d, v) {
    lm(t, i);
    var y = (i.flags & 128) !== 0;
    if (!c && !y) return d && pv(i, l, false), wr(t, i, v);
    c = i.stateNode, Rw.current = i;
    var N = y && typeof l.getDerivedStateFromError != "function" ? null : c.render();
    return i.flags |= 1, t !== null && y ? (i.child = Xi(i, t.child, null, v), i.child = Xi(i, null, N, v)) : dn(t, i, N, v), i.memoizedState = c.state, d && pv(i, l, true), i.child;
  }
  function sm(t) {
    var i = t.stateNode;
    i.pendingContext ? fv(t, i.pendingContext, i.pendingContext !== i.context) : i.context && fv(t, i.context, false), Is(t, i.containerInfo);
  }
  function cm(t, i, l, c, d) {
    return Qi(), bs(d), i.flags |= 256, dn(t, i, l, c), i.child;
  }
  var Ys = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Qs(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function fm(t, i, l) {
    var c = i.pendingProps, d = Pt.current, v = false, y = (i.flags & 128) !== 0, N;
    if ((N = y) || (N = t !== null && t.memoizedState === null ? false : (d & 2) !== 0), N ? (v = true, i.flags &= -129) : (t === null || t.memoizedState !== null) && (d |= 1), _t(Pt, d & 1), t === null) return Os(i), t = i.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((i.mode & 1) === 0 ? i.lanes = 1 : t.data === "$!" ? i.lanes = 8 : i.lanes = 1073741824, null) : (y = c.children, t = c.fallback, v ? (c = i.mode, v = i.child, y = { mode: "hidden", children: y }, (c & 1) === 0 && v !== null ? (v.childLanes = 0, v.pendingProps = y) : v = Al(y, c, 0, null), t = Ci(t, c, l, null), v.return = i, t.return = i, v.sibling = t, i.child = v, i.child.memoizedState = Qs(l), i.memoizedState = Ys, t) : Xs(i, y));
    if (d = t.memoizedState, d !== null && (N = d.dehydrated, N !== null)) return Dw(t, i, y, c, N, d, l);
    if (v) {
      v = c.fallback, y = i.mode, d = t.child, N = d.sibling;
      var $ = { mode: "hidden", children: c.children };
      return (y & 1) === 0 && i.child !== d ? (c = i.child, c.childLanes = 0, c.pendingProps = $, i.deletions = null) : (c = Jr(d, $), c.subtreeFlags = d.subtreeFlags & 14680064), N !== null ? v = Jr(N, v) : (v = Ci(v, y, l, null), v.flags |= 2), v.return = i, c.return = i, c.sibling = v, i.child = c, c = v, v = i.child, y = t.child.memoizedState, y = y === null ? Qs(l) : { baseLanes: y.baseLanes | l, cachePool: null, transitions: y.transitions }, v.memoizedState = y, v.childLanes = t.childLanes & ~l, i.memoizedState = Ys, c;
    }
    return v = t.child, t = v.sibling, c = Jr(v, { mode: "visible", children: c.children }), (i.mode & 1) === 0 && (c.lanes = l), c.return = i, c.sibling = null, t !== null && (l = i.deletions, l === null ? (i.deletions = [t], i.flags |= 16) : l.push(t)), i.child = c, i.memoizedState = null, c;
  }
  function Xs(t, i) {
    return i = Al({ mode: "visible", children: i }, t.mode, 0, null), i.return = t, t.child = i;
  }
  function Sl(t, i, l, c) {
    return c !== null && bs(c), Xi(i, t.child, null, l), t = Xs(i, i.pendingProps.children), t.flags |= 2, i.memoizedState = null, t;
  }
  function Dw(t, i, l, c, d, v, y) {
    if (l) return i.flags & 256 ? (i.flags &= -257, c = Us(Error(n(422))), Sl(t, i, y, c)) : i.memoizedState !== null ? (i.child = t.child, i.flags |= 128, null) : (v = c.fallback, d = i.mode, c = Al({ mode: "visible", children: c.children }, d, 0, null), v = Ci(v, d, y, null), v.flags |= 2, c.return = i, v.return = i, c.sibling = v, i.child = c, (i.mode & 1) !== 0 && Xi(i, t.child, null, y), i.child.memoizedState = Qs(y), i.memoizedState = Ys, v);
    if ((i.mode & 1) === 0) return Sl(t, i, y, null);
    if (d.data === "$!") {
      if (c = d.nextSibling && d.nextSibling.dataset, c) var N = c.dgst;
      return c = N, v = Error(n(419)), c = Us(v, c, void 0), Sl(t, i, y, c);
    }
    if (N = (y & t.childLanes) !== 0, xn || N) {
      if (c = Yt, c !== null) {
        switch (y & -y) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = (d & (c.suspendedLanes | y)) !== 0 ? 0 : d, d !== 0 && d !== v.retryLane && (v.retryLane = d, yr(t, d), er(c, t, d, -1));
      }
      return pc(), c = Us(Error(n(421))), Sl(t, i, y, c);
    }
    return d.data === "$?" ? (i.flags |= 128, i.child = t.child, i = Gw.bind(null, t), d._reactRetry = i, null) : (t = v.treeContext, In = Hr(d.nextSibling), jn = i, St = true, Qn = null, t !== null && (Ln[$n++] = hr, Ln[$n++] = gr, Ln[$n++] = di, hr = t.id, gr = t.overflow, di = i), i = Xs(i, c.children), i.flags |= 4096, i);
  }
  function dm(t, i, l) {
    t.lanes |= i;
    var c = t.alternate;
    c !== null && (c.lanes |= i), Ns(t.return, i, l);
  }
  function Zs(t, i, l, c, d) {
    var v = t.memoizedState;
    v === null ? t.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: c, tail: l, tailMode: d } : (v.isBackwards = i, v.rendering = null, v.renderingStartTime = 0, v.last = c, v.tail = l, v.tailMode = d);
  }
  function pm(t, i, l) {
    var c = i.pendingProps, d = c.revealOrder, v = c.tail;
    if (dn(t, i, c.children, l), c = Pt.current, (c & 2) !== 0) c = c & 1 | 2, i.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) e: for (t = i.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && dm(t, l, i);
        else if (t.tag === 19) dm(t, l, i);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === i) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === i) break e;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      c &= 1;
    }
    if (_t(Pt, c), (i.mode & 1) === 0) i.memoizedState = null;
    else switch (d) {
      case "forwards":
        for (l = i.child, d = null; l !== null; ) t = l.alternate, t !== null && _l(t) === null && (d = l), l = l.sibling;
        l = d, l === null ? (d = i.child, i.child = null) : (d = l.sibling, l.sibling = null), Zs(i, false, d, l, v);
        break;
      case "backwards":
        for (l = null, d = i.child, i.child = null; d !== null; ) {
          if (t = d.alternate, t !== null && _l(t) === null) {
            i.child = d;
            break;
          }
          t = d.sibling, d.sibling = l, l = d, d = t;
        }
        Zs(i, true, l, null, v);
        break;
      case "together":
        Zs(i, false, null, null, void 0);
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function Pl(t, i) {
    (i.mode & 1) === 0 && t !== null && (t.alternate = null, i.alternate = null, i.flags |= 2);
  }
  function wr(t, i, l) {
    if (t !== null && (i.dependencies = t.dependencies), gi |= i.lanes, (l & i.childLanes) === 0) return null;
    if (t !== null && i.child !== t.child) throw Error(n(153));
    if (i.child !== null) {
      for (t = i.child, l = Jr(t, t.pendingProps), i.child = l, l.return = i; t.sibling !== null; ) t = t.sibling, l = l.sibling = Jr(t, t.pendingProps), l.return = i;
      l.sibling = null;
    }
    return i.child;
  }
  function zw(t, i, l) {
    switch (i.tag) {
      case 3:
        sm(i), Qi();
        break;
      case 5:
        Pv(i);
        break;
      case 1:
        Cn(i.type) && sl(i);
        break;
      case 4:
        Is(i, i.stateNode.containerInfo);
        break;
      case 10:
        var c = i.type._context, d = i.memoizedProps.value;
        _t(ml, c._currentValue), c._currentValue = d;
        break;
      case 13:
        if (c = i.memoizedState, c !== null) return c.dehydrated !== null ? (_t(Pt, Pt.current & 1), i.flags |= 128, null) : (l & i.child.childLanes) !== 0 ? fm(t, i, l) : (_t(Pt, Pt.current & 1), t = wr(t, i, l), t !== null ? t.sibling : null);
        _t(Pt, Pt.current & 1);
        break;
      case 19:
        if (c = (l & i.childLanes) !== 0, (t.flags & 128) !== 0) {
          if (c) return pm(t, i, l);
          i.flags |= 128;
        }
        if (d = i.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), _t(Pt, Pt.current), c) break;
        return null;
      case 22:
      case 23:
        return i.lanes = 0, om(t, i, l);
    }
    return wr(t, i, l);
  }
  var vm, Js, mm, hm;
  vm = function(t, i) {
    for (var l = i.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) t.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === i) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === i) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Js = function() {
  }, mm = function(t, i, l, c) {
    var d = t.memoizedProps;
    if (d !== c) {
      t = i.stateNode, mi(or.current);
      var v = null;
      switch (l) {
        case "input":
          d = Ee(t, d), c = Ee(t, c), v = [];
          break;
        case "select":
          d = U({}, d, { value: void 0 }), c = U({}, c, { value: void 0 }), v = [];
          break;
        case "textarea":
          d = et(t, d), c = et(t, c), v = [];
          break;
        default:
          typeof d.onClick != "function" && typeof c.onClick == "function" && (t.onclick = ol);
      }
      jt(l, c);
      var y;
      l = null;
      for (ie in d) if (!c.hasOwnProperty(ie) && d.hasOwnProperty(ie) && d[ie] != null) if (ie === "style") {
        var N = d[ie];
        for (y in N) N.hasOwnProperty(y) && (l || (l = {}), l[y] = "");
      } else ie !== "dangerouslySetInnerHTML" && ie !== "children" && ie !== "suppressContentEditableWarning" && ie !== "suppressHydrationWarning" && ie !== "autoFocus" && (a.hasOwnProperty(ie) ? v || (v = []) : (v = v || []).push(ie, null));
      for (ie in c) {
        var $ = c[ie];
        if (N = d != null ? d[ie] : void 0, c.hasOwnProperty(ie) && $ !== N && ($ != null || N != null)) if (ie === "style") if (N) {
          for (y in N) !N.hasOwnProperty(y) || $ && $.hasOwnProperty(y) || (l || (l = {}), l[y] = "");
          for (y in $) $.hasOwnProperty(y) && N[y] !== $[y] && (l || (l = {}), l[y] = $[y]);
        } else l || (v || (v = []), v.push(ie, l)), l = $;
        else ie === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, N = N ? N.__html : void 0, $ != null && N !== $ && (v = v || []).push(ie, $)) : ie === "children" ? typeof $ != "string" && typeof $ != "number" || (v = v || []).push(ie, "" + $) : ie !== "suppressContentEditableWarning" && ie !== "suppressHydrationWarning" && (a.hasOwnProperty(ie) ? ($ != null && ie === "onScroll" && Ct("scroll", t), v || N === $ || (v = [])) : (v = v || []).push(ie, $));
      }
      l && (v = v || []).push("style", l);
      var ie = v;
      (i.updateQueue = ie) && (i.flags |= 4);
    }
  }, hm = function(t, i, l, c) {
    l !== c && (i.flags |= 4);
  };
  function no(t, i) {
    if (!St) switch (t.tailMode) {
      case "hidden":
        i = t.tail;
        for (var l = null; i !== null; ) i.alternate !== null && (l = i), i = i.sibling;
        l === null ? t.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = t.tail;
        for (var c = null; l !== null; ) l.alternate !== null && (c = l), l = l.sibling;
        c === null ? i || t.tail === null ? t.tail = null : t.tail.sibling = null : c.sibling = null;
    }
  }
  function un(t) {
    var i = t.alternate !== null && t.alternate.child === t.child, l = 0, c = 0;
    if (i) for (var d = t.child; d !== null; ) l |= d.lanes | d.childLanes, c |= d.subtreeFlags & 14680064, c |= d.flags & 14680064, d.return = t, d = d.sibling;
    else for (d = t.child; d !== null; ) l |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, d.return = t, d = d.sibling;
    return t.subtreeFlags |= c, t.childLanes = l, i;
  }
  function Lw(t, i, l) {
    var c = i.pendingProps;
    switch (Cs(i), i.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return un(i), null;
      case 1:
        return Cn(i.type) && ul(), un(i), null;
      case 3:
        return c = i.stateNode, ea(), xt(wn), xt(on), Rs(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (t === null || t.child === null) && (pl(i) ? i.flags |= 4 : t === null || t.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, Qn !== null && (cc(Qn), Qn = null))), Js(t, i), un(i), null;
      case 5:
        Ts(i);
        var d = mi(Xa.current);
        if (l = i.type, t !== null && i.stateNode != null) mm(t, i, l, c, d), t.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
        else {
          if (!c) {
            if (i.stateNode === null) throw Error(n(166));
            return un(i), null;
          }
          if (t = mi(or.current), pl(i)) {
            c = i.stateNode, l = i.type;
            var v = i.memoizedProps;
            switch (c[ar] = i, c[Ka] = v, t = (i.mode & 1) !== 0, l) {
              case "dialog":
                Ct("cancel", c), Ct("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ct("load", c);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Wa.length; d++) Ct(Wa[d], c);
                break;
              case "source":
                Ct("error", c);
                break;
              case "img":
              case "image":
              case "link":
                Ct("error", c), Ct("load", c);
                break;
              case "details":
                Ct("toggle", c);
                break;
              case "input":
                ce(c, v), Ct("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!v.multiple }, Ct("invalid", c);
                break;
              case "textarea":
                xe(c, v), Ct("invalid", c);
            }
            jt(l, v), d = null;
            for (var y in v) if (v.hasOwnProperty(y)) {
              var N = v[y];
              y === "children" ? typeof N == "string" ? c.textContent !== N && (v.suppressHydrationWarning !== true && al(c.textContent, N, t), d = ["children", N]) : typeof N == "number" && c.textContent !== "" + N && (v.suppressHydrationWarning !== true && al(c.textContent, N, t), d = ["children", "" + N]) : a.hasOwnProperty(y) && N != null && y === "onScroll" && Ct("scroll", c);
            }
            switch (l) {
              case "input":
                ke(c), ze(c, v, true);
                break;
              case "textarea":
                ke(c), we(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (c.onclick = ol);
            }
            c = d, i.updateQueue = c, c !== null && (i.flags |= 4);
          } else {
            y = d.nodeType === 9 ? d : d.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Me(l)), t === "http://www.w3.org/1999/xhtml" ? l === "script" ? (t = y.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof c.is == "string" ? t = y.createElement(l, { is: c.is }) : (t = y.createElement(l), l === "select" && (y = t, c.multiple ? y.multiple = true : c.size && (y.size = c.size))) : t = y.createElementNS(t, l), t[ar] = i, t[Ka] = c, vm(t, i, false, false), i.stateNode = t;
            e: {
              switch (y = It(l, c), l) {
                case "dialog":
                  Ct("cancel", t), Ct("close", t), d = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ct("load", t), d = c;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Wa.length; d++) Ct(Wa[d], t);
                  d = c;
                  break;
                case "source":
                  Ct("error", t), d = c;
                  break;
                case "img":
                case "image":
                case "link":
                  Ct("error", t), Ct("load", t), d = c;
                  break;
                case "details":
                  Ct("toggle", t), d = c;
                  break;
                case "input":
                  ce(t, c), d = Ee(t, c), Ct("invalid", t);
                  break;
                case "option":
                  d = c;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!c.multiple }, d = U({}, c, { value: void 0 }), Ct("invalid", t);
                  break;
                case "textarea":
                  xe(t, c), d = et(t, c), Ct("invalid", t);
                  break;
                default:
                  d = c;
              }
              jt(l, d), N = d;
              for (v in N) if (N.hasOwnProperty(v)) {
                var $ = N[v];
                v === "style" ? it(t, $) : v === "dangerouslySetInnerHTML" ? ($ = $ ? $.__html : void 0, $ != null && Oe(t, $)) : v === "children" ? typeof $ == "string" ? (l !== "textarea" || $ !== "") && tt(t, $) : typeof $ == "number" && tt(t, "" + $) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (a.hasOwnProperty(v) ? $ != null && v === "onScroll" && Ct("scroll", t) : $ != null && D(t, v, $, y));
              }
              switch (l) {
                case "input":
                  ke(t), ze(t, c, false);
                  break;
                case "textarea":
                  ke(t), we(t);
                  break;
                case "option":
                  c.value != null && t.setAttribute("value", "" + le(c.value));
                  break;
                case "select":
                  t.multiple = !!c.multiple, v = c.value, v != null ? Qe(t, !!c.multiple, v, false) : c.defaultValue != null && Qe(t, !!c.multiple, c.defaultValue, true);
                  break;
                default:
                  typeof d.onClick == "function" && (t.onclick = ol);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = true;
                  break e;
                default:
                  c = false;
              }
            }
            c && (i.flags |= 4);
          }
          i.ref !== null && (i.flags |= 512, i.flags |= 2097152);
        }
        return un(i), null;
      case 6:
        if (t && i.stateNode != null) hm(t, i, t.memoizedProps, c);
        else {
          if (typeof c != "string" && i.stateNode === null) throw Error(n(166));
          if (l = mi(Xa.current), mi(or.current), pl(i)) {
            if (c = i.stateNode, l = i.memoizedProps, c[ar] = i, (v = c.nodeValue !== l) && (t = jn, t !== null)) switch (t.tag) {
              case 3:
                al(c.nodeValue, l, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== true && al(c.nodeValue, l, (t.mode & 1) !== 0);
            }
            v && (i.flags |= 4);
          } else c = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(c), c[ar] = i, i.stateNode = c;
        }
        return un(i), null;
      case 13:
        if (xt(Pt), c = i.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (St && In !== null && (i.mode & 1) !== 0 && (i.flags & 128) === 0) _v(), Qi(), i.flags |= 98560, v = false;
          else if (v = pl(i), c !== null && c.dehydrated !== null) {
            if (t === null) {
              if (!v) throw Error(n(318));
              if (v = i.memoizedState, v = v !== null ? v.dehydrated : null, !v) throw Error(n(317));
              v[ar] = i;
            } else Qi(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            un(i), v = false;
          } else Qn !== null && (cc(Qn), Qn = null), v = true;
          if (!v) return i.flags & 65536 ? i : null;
        }
        return (i.flags & 128) !== 0 ? (i.lanes = l, i) : (c = c !== null, c !== (t !== null && t.memoizedState !== null) && c && (i.child.flags |= 8192, (i.mode & 1) !== 0 && (t === null || (Pt.current & 1) !== 0 ? Bt === 0 && (Bt = 3) : pc())), i.updateQueue !== null && (i.flags |= 4), un(i), null);
      case 4:
        return ea(), Js(t, i), t === null && Ba(i.stateNode.containerInfo), un(i), null;
      case 10:
        return Ps(i.type._context), un(i), null;
      case 17:
        return Cn(i.type) && ul(), un(i), null;
      case 19:
        if (xt(Pt), v = i.memoizedState, v === null) return un(i), null;
        if (c = (i.flags & 128) !== 0, y = v.rendering, y === null) if (c) no(v, false);
        else {
          if (Bt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = i.child; t !== null; ) {
            if (y = _l(t), y !== null) {
              for (i.flags |= 128, no(v, false), c = y.updateQueue, c !== null && (i.updateQueue = c, i.flags |= 4), i.subtreeFlags = 0, c = l, l = i.child; l !== null; ) v = l, t = c, v.flags &= 14680066, y = v.alternate, y === null ? (v.childLanes = 0, v.lanes = t, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = y.childLanes, v.lanes = y.lanes, v.child = y.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = y.memoizedProps, v.memoizedState = y.memoizedState, v.updateQueue = y.updateQueue, v.type = y.type, t = y.dependencies, v.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l = l.sibling;
              return _t(Pt, Pt.current & 1 | 2), i.child;
            }
            t = t.sibling;
          }
          v.tail !== null && Ze() > ia && (i.flags |= 128, c = true, no(v, false), i.lanes = 4194304);
        }
        else {
          if (!c) if (t = _l(y), t !== null) {
            if (i.flags |= 128, c = true, l = t.updateQueue, l !== null && (i.updateQueue = l, i.flags |= 4), no(v, true), v.tail === null && v.tailMode === "hidden" && !y.alternate && !St) return un(i), null;
          } else 2 * Ze() - v.renderingStartTime > ia && l !== 1073741824 && (i.flags |= 128, c = true, no(v, false), i.lanes = 4194304);
          v.isBackwards ? (y.sibling = i.child, i.child = y) : (l = v.last, l !== null ? l.sibling = y : i.child = y, v.last = y);
        }
        return v.tail !== null ? (i = v.tail, v.rendering = i, v.tail = i.sibling, v.renderingStartTime = Ze(), i.sibling = null, l = Pt.current, _t(Pt, c ? l & 1 | 2 : l & 1), i) : (un(i), null);
      case 22:
      case 23:
        return dc(), c = i.memoizedState !== null, t !== null && t.memoizedState !== null !== c && (i.flags |= 8192), c && (i.mode & 1) !== 0 ? (Tn & 1073741824) !== 0 && (un(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : un(i), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, i.tag));
  }
  function $w(t, i) {
    switch (Cs(i), i.tag) {
      case 1:
        return Cn(i.type) && ul(), t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
      case 3:
        return ea(), xt(wn), xt(on), Rs(), t = i.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (i.flags = t & -65537 | 128, i) : null;
      case 5:
        return Ts(i), null;
      case 13:
        if (xt(Pt), t = i.memoizedState, t !== null && t.dehydrated !== null) {
          if (i.alternate === null) throw Error(n(340));
          Qi();
        }
        return t = i.flags, t & 65536 ? (i.flags = t & -65537 | 128, i) : null;
      case 19:
        return xt(Pt), null;
      case 4:
        return ea(), null;
      case 10:
        return Ps(i.type._context), null;
      case 22:
      case 23:
        return dc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Nl = false, sn = false, Aw = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function na(t, i) {
    var l = t.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (c) {
      Tt(t, i, c);
    }
    else l.current = null;
  }
  function ec(t, i, l) {
    try {
      l();
    } catch (c) {
      Tt(t, i, c);
    }
  }
  var gm = false;
  function Vw(t, i) {
    if (ds = Go, t = Yp(), is(t)) {
      if ("selectionStart" in t) var l = { start: t.selectionStart, end: t.selectionEnd };
      else e: {
        l = (l = t.ownerDocument) && l.defaultView || window;
        var c = l.getSelection && l.getSelection();
        if (c && c.rangeCount !== 0) {
          l = c.anchorNode;
          var d = c.anchorOffset, v = c.focusNode;
          c = c.focusOffset;
          try {
            l.nodeType, v.nodeType;
          } catch {
            l = null;
            break e;
          }
          var y = 0, N = -1, $ = -1, ie = 0, pe = 0, ve = t, de = null;
          t: for (; ; ) {
            for (var Ne; ve !== l || d !== 0 && ve.nodeType !== 3 || (N = y + d), ve !== v || c !== 0 && ve.nodeType !== 3 || ($ = y + c), ve.nodeType === 3 && (y += ve.nodeValue.length), (Ne = ve.firstChild) !== null; ) de = ve, ve = Ne;
            for (; ; ) {
              if (ve === t) break t;
              if (de === l && ++ie === d && (N = y), de === v && ++pe === c && ($ = y), (Ne = ve.nextSibling) !== null) break;
              ve = de, de = ve.parentNode;
            }
            ve = Ne;
          }
          l = N === -1 || $ === -1 ? null : { start: N, end: $ };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ps = { focusedElem: t, selectionRange: l }, Go = false, Te = i; Te !== null; ) if (i = Te, t = i.child, (i.subtreeFlags & 1028) !== 0 && t !== null) t.return = i, Te = t;
    else for (; Te !== null; ) {
      i = Te;
      try {
        var Re = i.alternate;
        if ((i.flags & 1024) !== 0) switch (i.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Re !== null) {
              var $e = Re.memoizedProps, zt = Re.memoizedState, J = i.stateNode, K = J.getSnapshotBeforeUpdate(i.elementType === i.type ? $e : Xn(i.type, $e), zt);
              J.__reactInternalSnapshotBeforeUpdate = K;
            }
            break;
          case 3:
            var te = i.stateNode.containerInfo;
            te.nodeType === 1 ? te.textContent = "" : te.nodeType === 9 && te.documentElement && te.removeChild(te.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(n(163));
        }
      } catch (_e) {
        Tt(i, i.return, _e);
      }
      if (t = i.sibling, t !== null) {
        t.return = i.return, Te = t;
        break;
      }
      Te = i.return;
    }
    return Re = gm, gm = false, Re;
  }
  function ro(t, i, l) {
    var c = i.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var d = c = c.next;
      do {
        if ((d.tag & t) === t) {
          var v = d.destroy;
          d.destroy = void 0, v !== void 0 && ec(i, l, v);
        }
        d = d.next;
      } while (d !== c);
    }
  }
  function kl(t, i) {
    if (i = i.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
      var l = i = i.next;
      do {
        if ((l.tag & t) === t) {
          var c = l.create;
          l.destroy = c();
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function tc(t) {
    var i = t.ref;
    if (i !== null) {
      var l = t.stateNode;
      switch (t.tag) {
        case 5:
          t = l;
          break;
        default:
          t = l;
      }
      typeof i == "function" ? i(t) : i.current = t;
    }
  }
  function ym(t) {
    var i = t.alternate;
    i !== null && (t.alternate = null, ym(i)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (i = t.stateNode, i !== null && (delete i[ar], delete i[Ka], delete i[gs], delete i[xw], delete i[Ow])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function _m(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function wm(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || _m(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function nc(t, i, l) {
    var c = t.tag;
    if (c === 5 || c === 6) t = t.stateNode, i ? l.nodeType === 8 ? l.parentNode.insertBefore(t, i) : l.insertBefore(t, i) : (l.nodeType === 8 ? (i = l.parentNode, i.insertBefore(t, l)) : (i = l, i.appendChild(t)), l = l._reactRootContainer, l != null || i.onclick !== null || (i.onclick = ol));
    else if (c !== 4 && (t = t.child, t !== null)) for (nc(t, i, l), t = t.sibling; t !== null; ) nc(t, i, l), t = t.sibling;
  }
  function rc(t, i, l) {
    var c = t.tag;
    if (c === 5 || c === 6) t = t.stateNode, i ? l.insertBefore(t, i) : l.appendChild(t);
    else if (c !== 4 && (t = t.child, t !== null)) for (rc(t, i, l), t = t.sibling; t !== null; ) rc(t, i, l), t = t.sibling;
  }
  var nn = null, Zn = false;
  function Gr(t, i, l) {
    for (l = l.child; l !== null; ) Cm(t, i, l), l = l.sibling;
  }
  function Cm(t, i, l) {
    if (ir && typeof ir.onCommitFiberUnmount == "function") try {
      ir.onCommitFiberUnmount(Ho, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        sn || na(l, i);
      case 6:
        var c = nn, d = Zn;
        nn = null, Gr(t, i, l), nn = c, Zn = d, nn !== null && (Zn ? (t = nn, l = l.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(l) : t.removeChild(l)) : nn.removeChild(l.stateNode));
        break;
      case 18:
        nn !== null && (Zn ? (t = nn, l = l.stateNode, t.nodeType === 8 ? hs(t.parentNode, l) : t.nodeType === 1 && hs(t, l), Da(t)) : hs(nn, l.stateNode));
        break;
      case 4:
        c = nn, d = Zn, nn = l.stateNode.containerInfo, Zn = true, Gr(t, i, l), nn = c, Zn = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sn && (c = l.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          d = c = c.next;
          do {
            var v = d, y = v.destroy;
            v = v.tag, y !== void 0 && ((v & 2) !== 0 || (v & 4) !== 0) && ec(l, i, y), d = d.next;
          } while (d !== c);
        }
        Gr(t, i, l);
        break;
      case 1:
        if (!sn && (na(l, i), c = l.stateNode, typeof c.componentWillUnmount == "function")) try {
          c.props = l.memoizedProps, c.state = l.memoizedState, c.componentWillUnmount();
        } catch (N) {
          Tt(l, i, N);
        }
        Gr(t, i, l);
        break;
      case 21:
        Gr(t, i, l);
        break;
      case 22:
        l.mode & 1 ? (sn = (c = sn) || l.memoizedState !== null, Gr(t, i, l), sn = c) : Gr(t, i, l);
        break;
      default:
        Gr(t, i, l);
    }
  }
  function xm(t) {
    var i = t.updateQueue;
    if (i !== null) {
      t.updateQueue = null;
      var l = t.stateNode;
      l === null && (l = t.stateNode = new Aw()), i.forEach(function(c) {
        var d = Yw.bind(null, t, c);
        l.has(c) || (l.add(c), c.then(d, d));
      });
    }
  }
  function Jn(t, i) {
    var l = i.deletions;
    if (l !== null) for (var c = 0; c < l.length; c++) {
      var d = l[c];
      try {
        var v = t, y = i, N = y;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 5:
              nn = N.stateNode, Zn = false;
              break e;
            case 3:
              nn = N.stateNode.containerInfo, Zn = true;
              break e;
            case 4:
              nn = N.stateNode.containerInfo, Zn = true;
              break e;
          }
          N = N.return;
        }
        if (nn === null) throw Error(n(160));
        Cm(v, y, d), nn = null, Zn = false;
        var $ = d.alternate;
        $ !== null && ($.return = null), d.return = null;
      } catch (ie) {
        Tt(d, i, ie);
      }
    }
    if (i.subtreeFlags & 12854) for (i = i.child; i !== null; ) Om(i, t), i = i.sibling;
  }
  function Om(t, i) {
    var l = t.alternate, c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Jn(i, t), ur(t), c & 4) {
          try {
            ro(3, t, t.return), kl(3, t);
          } catch ($e) {
            Tt(t, t.return, $e);
          }
          try {
            ro(5, t, t.return);
          } catch ($e) {
            Tt(t, t.return, $e);
          }
        }
        break;
      case 1:
        Jn(i, t), ur(t), c & 512 && l !== null && na(l, l.return);
        break;
      case 5:
        if (Jn(i, t), ur(t), c & 512 && l !== null && na(l, l.return), t.flags & 32) {
          var d = t.stateNode;
          try {
            tt(d, "");
          } catch ($e) {
            Tt(t, t.return, $e);
          }
        }
        if (c & 4 && (d = t.stateNode, d != null)) {
          var v = t.memoizedProps, y = l !== null ? l.memoizedProps : v, N = t.type, $ = t.updateQueue;
          if (t.updateQueue = null, $ !== null) try {
            N === "input" && v.type === "radio" && v.name != null && fe(d, v), It(N, y);
            var ie = It(N, v);
            for (y = 0; y < $.length; y += 2) {
              var pe = $[y], ve = $[y + 1];
              pe === "style" ? it(d, ve) : pe === "dangerouslySetInnerHTML" ? Oe(d, ve) : pe === "children" ? tt(d, ve) : D(d, pe, ve, ie);
            }
            switch (N) {
              case "input":
                be(d, v);
                break;
              case "textarea":
                ye(d, v);
                break;
              case "select":
                var de = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!v.multiple;
                var Ne = v.value;
                Ne != null ? Qe(d, !!v.multiple, Ne, false) : de !== !!v.multiple && (v.defaultValue != null ? Qe(d, !!v.multiple, v.defaultValue, true) : Qe(d, !!v.multiple, v.multiple ? [] : "", false));
            }
            d[Ka] = v;
          } catch ($e) {
            Tt(t, t.return, $e);
          }
        }
        break;
      case 6:
        if (Jn(i, t), ur(t), c & 4) {
          if (t.stateNode === null) throw Error(n(162));
          d = t.stateNode, v = t.memoizedProps;
          try {
            d.nodeValue = v;
          } catch ($e) {
            Tt(t, t.return, $e);
          }
        }
        break;
      case 3:
        if (Jn(i, t), ur(t), c & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Da(i.containerInfo);
        } catch ($e) {
          Tt(t, t.return, $e);
        }
        break;
      case 4:
        Jn(i, t), ur(t);
        break;
      case 13:
        Jn(i, t), ur(t), d = t.child, d.flags & 8192 && (v = d.memoizedState !== null, d.stateNode.isHidden = v, !v || d.alternate !== null && d.alternate.memoizedState !== null || (oc = Ze())), c & 4 && xm(t);
        break;
      case 22:
        if (pe = l !== null && l.memoizedState !== null, t.mode & 1 ? (sn = (ie = sn) || pe, Jn(i, t), sn = ie) : Jn(i, t), ur(t), c & 8192) {
          if (ie = t.memoizedState !== null, (t.stateNode.isHidden = ie) && !pe && (t.mode & 1) !== 0) for (Te = t, pe = t.child; pe !== null; ) {
            for (ve = Te = pe; Te !== null; ) {
              switch (de = Te, Ne = de.child, de.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ro(4, de, de.return);
                  break;
                case 1:
                  na(de, de.return);
                  var Re = de.stateNode;
                  if (typeof Re.componentWillUnmount == "function") {
                    c = de, l = de.return;
                    try {
                      i = c, Re.props = i.memoizedProps, Re.state = i.memoizedState, Re.componentWillUnmount();
                    } catch ($e) {
                      Tt(c, l, $e);
                    }
                  }
                  break;
                case 5:
                  na(de, de.return);
                  break;
                case 22:
                  if (de.memoizedState !== null) {
                    Sm(ve);
                    continue;
                  }
              }
              Ne !== null ? (Ne.return = de, Te = Ne) : Sm(ve);
            }
            pe = pe.sibling;
          }
          e: for (pe = null, ve = t; ; ) {
            if (ve.tag === 5) {
              if (pe === null) {
                pe = ve;
                try {
                  d = ve.stateNode, ie ? (v = d.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (N = ve.stateNode, $ = ve.memoizedProps.style, y = $ != null && $.hasOwnProperty("display") ? $.display : null, N.style.display = nt("display", y));
                } catch ($e) {
                  Tt(t, t.return, $e);
                }
              }
            } else if (ve.tag === 6) {
              if (pe === null) try {
                ve.stateNode.nodeValue = ie ? "" : ve.memoizedProps;
              } catch ($e) {
                Tt(t, t.return, $e);
              }
            } else if ((ve.tag !== 22 && ve.tag !== 23 || ve.memoizedState === null || ve === t) && ve.child !== null) {
              ve.child.return = ve, ve = ve.child;
              continue;
            }
            if (ve === t) break e;
            for (; ve.sibling === null; ) {
              if (ve.return === null || ve.return === t) break e;
              pe === ve && (pe = null), ve = ve.return;
            }
            pe === ve && (pe = null), ve.sibling.return = ve.return, ve = ve.sibling;
          }
        }
        break;
      case 19:
        Jn(i, t), ur(t), c & 4 && xm(t);
        break;
      case 21:
        break;
      default:
        Jn(i, t), ur(t);
    }
  }
  function ur(t) {
    var i = t.flags;
    if (i & 2) {
      try {
        e: {
          for (var l = t.return; l !== null; ) {
            if (_m(l)) {
              var c = l;
              break e;
            }
            l = l.return;
          }
          throw Error(n(160));
        }
        switch (c.tag) {
          case 5:
            var d = c.stateNode;
            c.flags & 32 && (tt(d, ""), c.flags &= -33);
            var v = wm(t);
            rc(t, v, d);
            break;
          case 3:
          case 4:
            var y = c.stateNode.containerInfo, N = wm(t);
            nc(t, N, y);
            break;
          default:
            throw Error(n(161));
        }
      } catch ($) {
        Tt(t, t.return, $);
      }
      t.flags &= -3;
    }
    i & 4096 && (t.flags &= -4097);
  }
  function Fw(t, i, l) {
    Te = t, bm(t);
  }
  function bm(t, i, l) {
    for (var c = (t.mode & 1) !== 0; Te !== null; ) {
      var d = Te, v = d.child;
      if (d.tag === 22 && c) {
        var y = d.memoizedState !== null || Nl;
        if (!y) {
          var N = d.alternate, $ = N !== null && N.memoizedState !== null || sn;
          N = Nl;
          var ie = sn;
          if (Nl = y, (sn = $) && !ie) for (Te = d; Te !== null; ) y = Te, $ = y.child, y.tag === 22 && y.memoizedState !== null ? Pm(d) : $ !== null ? ($.return = y, Te = $) : Pm(d);
          for (; v !== null; ) Te = v, bm(v), v = v.sibling;
          Te = d, Nl = N, sn = ie;
        }
        Em(t);
      } else (d.subtreeFlags & 8772) !== 0 && v !== null ? (v.return = d, Te = v) : Em(t);
    }
  }
  function Em(t) {
    for (; Te !== null; ) {
      var i = Te;
      if ((i.flags & 8772) !== 0) {
        var l = i.alternate;
        try {
          if ((i.flags & 8772) !== 0) switch (i.tag) {
            case 0:
            case 11:
            case 15:
              sn || kl(5, i);
              break;
            case 1:
              var c = i.stateNode;
              if (i.flags & 4 && !sn) if (l === null) c.componentDidMount();
              else {
                var d = i.elementType === i.type ? l.memoizedProps : Xn(i.type, l.memoizedProps);
                c.componentDidUpdate(d, l.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
              }
              var v = i.updateQueue;
              v !== null && Sv(i, v, c);
              break;
            case 3:
              var y = i.updateQueue;
              if (y !== null) {
                if (l = null, i.child !== null) switch (i.child.tag) {
                  case 5:
                    l = i.child.stateNode;
                    break;
                  case 1:
                    l = i.child.stateNode;
                }
                Sv(i, y, l);
              }
              break;
            case 5:
              var N = i.stateNode;
              if (l === null && i.flags & 4) {
                l = N;
                var $ = i.memoizedProps;
                switch (i.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    $.autoFocus && l.focus();
                    break;
                  case "img":
                    $.src && (l.src = $.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (i.memoizedState === null) {
                var ie = i.alternate;
                if (ie !== null) {
                  var pe = ie.memoizedState;
                  if (pe !== null) {
                    var ve = pe.dehydrated;
                    ve !== null && Da(ve);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(n(163));
          }
          sn || i.flags & 512 && tc(i);
        } catch (de) {
          Tt(i, i.return, de);
        }
      }
      if (i === t) {
        Te = null;
        break;
      }
      if (l = i.sibling, l !== null) {
        l.return = i.return, Te = l;
        break;
      }
      Te = i.return;
    }
  }
  function Sm(t) {
    for (; Te !== null; ) {
      var i = Te;
      if (i === t) {
        Te = null;
        break;
      }
      var l = i.sibling;
      if (l !== null) {
        l.return = i.return, Te = l;
        break;
      }
      Te = i.return;
    }
  }
  function Pm(t) {
    for (; Te !== null; ) {
      var i = Te;
      try {
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            var l = i.return;
            try {
              kl(4, i);
            } catch ($) {
              Tt(i, l, $);
            }
            break;
          case 1:
            var c = i.stateNode;
            if (typeof c.componentDidMount == "function") {
              var d = i.return;
              try {
                c.componentDidMount();
              } catch ($) {
                Tt(i, d, $);
              }
            }
            var v = i.return;
            try {
              tc(i);
            } catch ($) {
              Tt(i, v, $);
            }
            break;
          case 5:
            var y = i.return;
            try {
              tc(i);
            } catch ($) {
              Tt(i, y, $);
            }
        }
      } catch ($) {
        Tt(i, i.return, $);
      }
      if (i === t) {
        Te = null;
        break;
      }
      var N = i.sibling;
      if (N !== null) {
        N.return = i.return, Te = N;
        break;
      }
      Te = i.return;
    }
  }
  var Hw = Math.ceil, jl = T.ReactCurrentDispatcher, ic = T.ReactCurrentOwner, Fn = T.ReactCurrentBatchConfig, ut = 0, Yt = null, Vt = null, rn = 0, Tn = 0, ra = Wr(0), Bt = 0, io = null, gi = 0, Il = 0, ac = 0, ao = null, On = null, oc = 0, ia = 1 / 0, Cr = null, Tl = false, lc = null, Yr = null, Ml = false, Qr = null, Rl = 0, oo = 0, uc = null, Dl = -1, zl = 0;
  function pn() {
    return (ut & 6) !== 0 ? Ze() : Dl !== -1 ? Dl : Dl = Ze();
  }
  function Xr(t) {
    return (t.mode & 1) === 0 ? 1 : (ut & 2) !== 0 && rn !== 0 ? rn & -rn : Ew.transition !== null ? (zl === 0 && (zl = wp()), zl) : (t = vt, t !== 0 || (t = window.event, t = t === void 0 ? 16 : kp(t.type)), t);
  }
  function er(t, i, l, c) {
    if (50 < oo) throw oo = 0, uc = null, Error(n(185));
    ja(t, l, c), ((ut & 2) === 0 || t !== Yt) && (t === Yt && ((ut & 2) === 0 && (Il |= l), Bt === 4 && Zr(t, rn)), bn(t, c), l === 1 && ut === 0 && (i.mode & 1) === 0 && (ia = Ze() + 500, cl && Ur()));
  }
  function bn(t, i) {
    var l = t.callbackNode;
    E_(t, i);
    var c = Uo(t, t === Yt ? rn : 0);
    if (c === 0) l !== null && pt(l), t.callbackNode = null, t.callbackPriority = 0;
    else if (i = c & -c, t.callbackPriority !== i) {
      if (l != null && pt(l), i === 1) t.tag === 0 ? bw(km.bind(null, t)) : vv(km.bind(null, t)), ww(function() {
        (ut & 6) === 0 && Ur();
      }), l = null;
      else {
        switch (Cp(c)) {
          case 1:
            l = zn;
            break;
          case 4:
            l = Mr;
            break;
          case 16:
            l = Rr;
            break;
          case 536870912:
            l = Dr;
            break;
          default:
            l = Rr;
        }
        l = Lm(l, Nm.bind(null, t));
      }
      t.callbackPriority = i, t.callbackNode = l;
    }
  }
  function Nm(t, i) {
    if (Dl = -1, zl = 0, (ut & 6) !== 0) throw Error(n(327));
    var l = t.callbackNode;
    if (aa() && t.callbackNode !== l) return null;
    var c = Uo(t, t === Yt ? rn : 0);
    if (c === 0) return null;
    if ((c & 30) !== 0 || (c & t.expiredLanes) !== 0 || i) i = Ll(t, c);
    else {
      i = c;
      var d = ut;
      ut |= 2;
      var v = Im();
      (Yt !== t || rn !== i) && (Cr = null, ia = Ze() + 500, _i(t, i));
      do
        try {
          Uw();
          break;
        } catch (N) {
          jm(t, N);
        }
      while (true);
      Ss(), jl.current = v, ut = d, Vt !== null ? i = 0 : (Yt = null, rn = 0, i = Bt);
    }
    if (i !== 0) {
      if (i === 2 && (d = Hu(t), d !== 0 && (c = d, i = sc(t, d))), i === 1) throw l = io, _i(t, 0), Zr(t, c), bn(t, Ze()), l;
      if (i === 6) Zr(t, c);
      else {
        if (d = t.current.alternate, (c & 30) === 0 && !Ww(d) && (i = Ll(t, c), i === 2 && (v = Hu(t), v !== 0 && (c = v, i = sc(t, v))), i === 1)) throw l = io, _i(t, 0), Zr(t, c), bn(t, Ze()), l;
        switch (t.finishedWork = d, t.finishedLanes = c, i) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            wi(t, On, Cr);
            break;
          case 3:
            if (Zr(t, c), (c & 130023424) === c && (i = oc + 500 - Ze(), 10 < i)) {
              if (Uo(t, 0) !== 0) break;
              if (d = t.suspendedLanes, (d & c) !== c) {
                pn(), t.pingedLanes |= t.suspendedLanes & d;
                break;
              }
              t.timeoutHandle = ms(wi.bind(null, t, On, Cr), i);
              break;
            }
            wi(t, On, Cr);
            break;
          case 4:
            if (Zr(t, c), (c & 4194240) === c) break;
            for (i = t.eventTimes, d = -1; 0 < c; ) {
              var y = 31 - Gn(c);
              v = 1 << y, y = i[y], y > d && (d = y), c &= ~v;
            }
            if (c = d, c = Ze() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * Hw(c / 1960)) - c, 10 < c) {
              t.timeoutHandle = ms(wi.bind(null, t, On, Cr), c);
              break;
            }
            wi(t, On, Cr);
            break;
          case 5:
            wi(t, On, Cr);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return bn(t, Ze()), t.callbackNode === l ? Nm.bind(null, t) : null;
  }
  function sc(t, i) {
    var l = ao;
    return t.current.memoizedState.isDehydrated && (_i(t, i).flags |= 256), t = Ll(t, i), t !== 2 && (i = On, On = l, i !== null && cc(i)), t;
  }
  function cc(t) {
    On === null ? On = t : On.push.apply(On, t);
  }
  function Ww(t) {
    for (var i = t; ; ) {
      if (i.flags & 16384) {
        var l = i.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var c = 0; c < l.length; c++) {
          var d = l[c], v = d.getSnapshot;
          d = d.value;
          try {
            if (!Yn(v(), d)) return false;
          } catch {
            return false;
          }
        }
      }
      if (l = i.child, i.subtreeFlags & 16384 && l !== null) l.return = i, i = l;
      else {
        if (i === t) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t) return true;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return true;
  }
  function Zr(t, i) {
    for (i &= ~ac, i &= ~Il, t.suspendedLanes |= i, t.pingedLanes &= ~i, t = t.expirationTimes; 0 < i; ) {
      var l = 31 - Gn(i), c = 1 << l;
      t[l] = -1, i &= ~c;
    }
  }
  function km(t) {
    if ((ut & 6) !== 0) throw Error(n(327));
    aa();
    var i = Uo(t, 0);
    if ((i & 1) === 0) return bn(t, Ze()), null;
    var l = Ll(t, i);
    if (t.tag !== 0 && l === 2) {
      var c = Hu(t);
      c !== 0 && (i = c, l = sc(t, c));
    }
    if (l === 1) throw l = io, _i(t, 0), Zr(t, i), bn(t, Ze()), l;
    if (l === 6) throw Error(n(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = i, wi(t, On, Cr), bn(t, Ze()), null;
  }
  function fc(t, i) {
    var l = ut;
    ut |= 1;
    try {
      return t(i);
    } finally {
      ut = l, ut === 0 && (ia = Ze() + 500, cl && Ur());
    }
  }
  function yi(t) {
    Qr !== null && Qr.tag === 0 && (ut & 6) === 0 && aa();
    var i = ut;
    ut |= 1;
    var l = Fn.transition, c = vt;
    try {
      if (Fn.transition = null, vt = 1, t) return t();
    } finally {
      vt = c, Fn.transition = l, ut = i, (ut & 6) === 0 && Ur();
    }
  }
  function dc() {
    Tn = ra.current, xt(ra);
  }
  function _i(t, i) {
    t.finishedWork = null, t.finishedLanes = 0;
    var l = t.timeoutHandle;
    if (l !== -1 && (t.timeoutHandle = -1, _w(l)), Vt !== null) for (l = Vt.return; l !== null; ) {
      var c = l;
      switch (Cs(c), c.tag) {
        case 1:
          c = c.type.childContextTypes, c != null && ul();
          break;
        case 3:
          ea(), xt(wn), xt(on), Rs();
          break;
        case 5:
          Ts(c);
          break;
        case 4:
          ea();
          break;
        case 13:
          xt(Pt);
          break;
        case 19:
          xt(Pt);
          break;
        case 10:
          Ps(c.type._context);
          break;
        case 22:
        case 23:
          dc();
      }
      l = l.return;
    }
    if (Yt = t, Vt = t = Jr(t.current, null), rn = Tn = i, Bt = 0, io = null, ac = Il = gi = 0, On = ao = null, vi !== null) {
      for (i = 0; i < vi.length; i++) if (l = vi[i], c = l.interleaved, c !== null) {
        l.interleaved = null;
        var d = c.next, v = l.pending;
        if (v !== null) {
          var y = v.next;
          v.next = d, c.next = y;
        }
        l.pending = c;
      }
      vi = null;
    }
    return t;
  }
  function jm(t, i) {
    do {
      var l = Vt;
      try {
        if (Ss(), wl.current = bl, Cl) {
          for (var c = Nt.memoizedState; c !== null; ) {
            var d = c.queue;
            d !== null && (d.pending = null), c = c.next;
          }
          Cl = false;
        }
        if (hi = 0, Gt = Wt = Nt = null, Za = false, Ja = 0, ic.current = null, l === null || l.return === null) {
          Bt = 1, io = i, Vt = null;
          break;
        }
        e: {
          var v = t, y = l.return, N = l, $ = i;
          if (i = rn, N.flags |= 32768, $ !== null && typeof $ == "object" && typeof $.then == "function") {
            var ie = $, pe = N, ve = pe.tag;
            if ((pe.mode & 1) === 0 && (ve === 0 || ve === 11 || ve === 15)) {
              var de = pe.alternate;
              de ? (pe.updateQueue = de.updateQueue, pe.memoizedState = de.memoizedState, pe.lanes = de.lanes) : (pe.updateQueue = null, pe.memoizedState = null);
            }
            var Ne = tm(y);
            if (Ne !== null) {
              Ne.flags &= -257, nm(Ne, y, N, v, i), Ne.mode & 1 && em(v, ie, i), i = Ne, $ = ie;
              var Re = i.updateQueue;
              if (Re === null) {
                var $e = /* @__PURE__ */ new Set();
                $e.add($), i.updateQueue = $e;
              } else Re.add($);
              break e;
            } else {
              if ((i & 1) === 0) {
                em(v, ie, i), pc();
                break e;
              }
              $ = Error(n(426));
            }
          } else if (St && N.mode & 1) {
            var zt = tm(y);
            if (zt !== null) {
              (zt.flags & 65536) === 0 && (zt.flags |= 256), nm(zt, y, N, v, i), bs(ta($, N));
              break e;
            }
          }
          v = $ = ta($, N), Bt !== 4 && (Bt = 2), ao === null ? ao = [v] : ao.push(v), v = y;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, i &= -i, v.lanes |= i;
                var J = Zv(v, $, i);
                Ev(v, J);
                break e;
              case 1:
                N = $;
                var K = v.type, te = v.stateNode;
                if ((v.flags & 128) === 0 && (typeof K.getDerivedStateFromError == "function" || te !== null && typeof te.componentDidCatch == "function" && (Yr === null || !Yr.has(te)))) {
                  v.flags |= 65536, i &= -i, v.lanes |= i;
                  var _e = Jv(v, N, i);
                  Ev(v, _e);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        Mm(l);
      } catch (Ve) {
        i = Ve, Vt === l && l !== null && (Vt = l = l.return);
        continue;
      }
      break;
    } while (true);
  }
  function Im() {
    var t = jl.current;
    return jl.current = bl, t === null ? bl : t;
  }
  function pc() {
    (Bt === 0 || Bt === 3 || Bt === 2) && (Bt = 4), Yt === null || (gi & 268435455) === 0 && (Il & 268435455) === 0 || Zr(Yt, rn);
  }
  function Ll(t, i) {
    var l = ut;
    ut |= 2;
    var c = Im();
    (Yt !== t || rn !== i) && (Cr = null, _i(t, i));
    do
      try {
        Bw();
        break;
      } catch (d) {
        jm(t, d);
      }
    while (true);
    if (Ss(), ut = l, jl.current = c, Vt !== null) throw Error(n(261));
    return Yt = null, rn = 0, Bt;
  }
  function Bw() {
    for (; Vt !== null; ) Tm(Vt);
  }
  function Uw() {
    for (; Vt !== null && !_n(); ) Tm(Vt);
  }
  function Tm(t) {
    var i = zm(t.alternate, t, Tn);
    t.memoizedProps = t.pendingProps, i === null ? Mm(t) : Vt = i, ic.current = null;
  }
  function Mm(t) {
    var i = t;
    do {
      var l = i.alternate;
      if (t = i.return, (i.flags & 32768) === 0) {
        if (l = Lw(l, i, Tn), l !== null) {
          Vt = l;
          return;
        }
      } else {
        if (l = $w(l, i), l !== null) {
          l.flags &= 32767, Vt = l;
          return;
        }
        if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          Bt = 6, Vt = null;
          return;
        }
      }
      if (i = i.sibling, i !== null) {
        Vt = i;
        return;
      }
      Vt = i = t;
    } while (i !== null);
    Bt === 0 && (Bt = 5);
  }
  function wi(t, i, l) {
    var c = vt, d = Fn.transition;
    try {
      Fn.transition = null, vt = 1, Kw(t, i, l, c);
    } finally {
      Fn.transition = d, vt = c;
    }
    return null;
  }
  function Kw(t, i, l, c) {
    do
      aa();
    while (Qr !== null);
    if ((ut & 6) !== 0) throw Error(n(327));
    l = t.finishedWork;
    var d = t.finishedLanes;
    if (l === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, l === t.current) throw Error(n(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var v = l.lanes | l.childLanes;
    if (S_(t, v), t === Yt && (Vt = Yt = null, rn = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || Ml || (Ml = true, Lm(Rr, function() {
      return aa(), null;
    })), v = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || v) {
      v = Fn.transition, Fn.transition = null;
      var y = vt;
      vt = 1;
      var N = ut;
      ut |= 4, ic.current = null, Vw(t, l), Om(l, t), dw(ps), Go = !!ds, ps = ds = null, t.current = l, Fw(l), Nn(), ut = N, vt = y, Fn.transition = v;
    } else t.current = l;
    if (Ml && (Ml = false, Qr = t, Rl = d), v = t.pendingLanes, v === 0 && (Yr = null), w_(l.stateNode), bn(t, Ze()), i !== null) for (c = t.onRecoverableError, l = 0; l < i.length; l++) d = i[l], c(d.value, { componentStack: d.stack, digest: d.digest });
    if (Tl) throw Tl = false, t = lc, lc = null, t;
    return (Rl & 1) !== 0 && t.tag !== 0 && aa(), v = t.pendingLanes, (v & 1) !== 0 ? t === uc ? oo++ : (oo = 0, uc = t) : oo = 0, Ur(), null;
  }
  function aa() {
    if (Qr !== null) {
      var t = Cp(Rl), i = Fn.transition, l = vt;
      try {
        if (Fn.transition = null, vt = 16 > t ? 16 : t, Qr === null) var c = false;
        else {
          if (t = Qr, Qr = null, Rl = 0, (ut & 6) !== 0) throw Error(n(331));
          var d = ut;
          for (ut |= 4, Te = t.current; Te !== null; ) {
            var v = Te, y = v.child;
            if ((Te.flags & 16) !== 0) {
              var N = v.deletions;
              if (N !== null) {
                for (var $ = 0; $ < N.length; $++) {
                  var ie = N[$];
                  for (Te = ie; Te !== null; ) {
                    var pe = Te;
                    switch (pe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ro(8, pe, v);
                    }
                    var ve = pe.child;
                    if (ve !== null) ve.return = pe, Te = ve;
                    else for (; Te !== null; ) {
                      pe = Te;
                      var de = pe.sibling, Ne = pe.return;
                      if (ym(pe), pe === ie) {
                        Te = null;
                        break;
                      }
                      if (de !== null) {
                        de.return = Ne, Te = de;
                        break;
                      }
                      Te = Ne;
                    }
                  }
                }
                var Re = v.alternate;
                if (Re !== null) {
                  var $e = Re.child;
                  if ($e !== null) {
                    Re.child = null;
                    do {
                      var zt = $e.sibling;
                      $e.sibling = null, $e = zt;
                    } while ($e !== null);
                  }
                }
                Te = v;
              }
            }
            if ((v.subtreeFlags & 2064) !== 0 && y !== null) y.return = v, Te = y;
            else e: for (; Te !== null; ) {
              if (v = Te, (v.flags & 2048) !== 0) switch (v.tag) {
                case 0:
                case 11:
                case 15:
                  ro(9, v, v.return);
              }
              var J = v.sibling;
              if (J !== null) {
                J.return = v.return, Te = J;
                break e;
              }
              Te = v.return;
            }
          }
          var K = t.current;
          for (Te = K; Te !== null; ) {
            y = Te;
            var te = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && te !== null) te.return = y, Te = te;
            else e: for (y = K; Te !== null; ) {
              if (N = Te, (N.flags & 2048) !== 0) try {
                switch (N.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kl(9, N);
                }
              } catch (Ve) {
                Tt(N, N.return, Ve);
              }
              if (N === y) {
                Te = null;
                break e;
              }
              var _e = N.sibling;
              if (_e !== null) {
                _e.return = N.return, Te = _e;
                break e;
              }
              Te = N.return;
            }
          }
          if (ut = d, Ur(), ir && typeof ir.onPostCommitFiberRoot == "function") try {
            ir.onPostCommitFiberRoot(Ho, t);
          } catch {
          }
          c = true;
        }
        return c;
      } finally {
        vt = l, Fn.transition = i;
      }
    }
    return false;
  }
  function Rm(t, i, l) {
    i = ta(l, i), i = Zv(t, i, 1), t = qr(t, i, 1), i = pn(), t !== null && (ja(t, 1, i), bn(t, i));
  }
  function Tt(t, i, l) {
    if (t.tag === 3) Rm(t, t, l);
    else for (; i !== null; ) {
      if (i.tag === 3) {
        Rm(i, t, l);
        break;
      } else if (i.tag === 1) {
        var c = i.stateNode;
        if (typeof i.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Yr === null || !Yr.has(c))) {
          t = ta(l, t), t = Jv(i, t, 1), i = qr(i, t, 1), t = pn(), i !== null && (ja(i, 1, t), bn(i, t));
          break;
        }
      }
      i = i.return;
    }
  }
  function qw(t, i, l) {
    var c = t.pingCache;
    c !== null && c.delete(i), i = pn(), t.pingedLanes |= t.suspendedLanes & l, Yt === t && (rn & l) === l && (Bt === 4 || Bt === 3 && (rn & 130023424) === rn && 500 > Ze() - oc ? _i(t, 0) : ac |= l), bn(t, i);
  }
  function Dm(t, i) {
    i === 0 && ((t.mode & 1) === 0 ? i = 1 : (i = Bo, Bo <<= 1, (Bo & 130023424) === 0 && (Bo = 4194304)));
    var l = pn();
    t = yr(t, i), t !== null && (ja(t, i, l), bn(t, l));
  }
  function Gw(t) {
    var i = t.memoizedState, l = 0;
    i !== null && (l = i.retryLane), Dm(t, l);
  }
  function Yw(t, i) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var c = t.stateNode, d = t.memoizedState;
        d !== null && (l = d.retryLane);
        break;
      case 19:
        c = t.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    c !== null && c.delete(i), Dm(t, l);
  }
  var zm;
  zm = function(t, i, l) {
    if (t !== null) if (t.memoizedProps !== i.pendingProps || wn.current) xn = true;
    else {
      if ((t.lanes & l) === 0 && (i.flags & 128) === 0) return xn = false, zw(t, i, l);
      xn = (t.flags & 131072) !== 0;
    }
    else xn = false, St && (i.flags & 1048576) !== 0 && mv(i, dl, i.index);
    switch (i.lanes = 0, i.tag) {
      case 2:
        var c = i.type;
        Pl(t, i), t = i.pendingProps;
        var d = qi(i, on.current);
        Ji(i, l), d = Ls(null, i, c, t, d, l);
        var v = $s();
        return i.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, Cn(c) ? (v = true, sl(i)) : v = false, i.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, js(i), d.updater = El, i.stateNode = d, d._reactInternals = i, Bs(i, c, t, l), i = Gs(null, i, c, true, v, l)) : (i.tag = 0, St && v && ws(i), dn(null, i, d, l), i = i.child), i;
      case 16:
        c = i.elementType;
        e: {
          switch (Pl(t, i), t = i.pendingProps, d = c._init, c = d(c._payload), i.type = c, d = i.tag = Xw(c), t = Xn(c, t), d) {
            case 0:
              i = qs(null, i, c, t, l);
              break e;
            case 1:
              i = um(null, i, c, t, l);
              break e;
            case 11:
              i = rm(null, i, c, t, l);
              break e;
            case 14:
              i = im(null, i, c, Xn(c.type, t), l);
              break e;
          }
          throw Error(n(306, c, ""));
        }
        return i;
      case 0:
        return c = i.type, d = i.pendingProps, d = i.elementType === c ? d : Xn(c, d), qs(t, i, c, d, l);
      case 1:
        return c = i.type, d = i.pendingProps, d = i.elementType === c ? d : Xn(c, d), um(t, i, c, d, l);
      case 3:
        e: {
          if (sm(i), t === null) throw Error(n(387));
          c = i.pendingProps, v = i.memoizedState, d = v.element, bv(t, i), yl(i, c, null, l);
          var y = i.memoizedState;
          if (c = y.element, v.isDehydrated) if (v = { element: c, isDehydrated: false, cache: y.cache, pendingSuspenseBoundaries: y.pendingSuspenseBoundaries, transitions: y.transitions }, i.updateQueue.baseState = v, i.memoizedState = v, i.flags & 256) {
            d = ta(Error(n(423)), i), i = cm(t, i, c, l, d);
            break e;
          } else if (c !== d) {
            d = ta(Error(n(424)), i), i = cm(t, i, c, l, d);
            break e;
          } else for (In = Hr(i.stateNode.containerInfo.firstChild), jn = i, St = true, Qn = null, l = xv(i, null, c, l), i.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qi(), c === d) {
              i = wr(t, i, l);
              break e;
            }
            dn(t, i, c, l);
          }
          i = i.child;
        }
        return i;
      case 5:
        return Pv(i), t === null && Os(i), c = i.type, d = i.pendingProps, v = t !== null ? t.memoizedProps : null, y = d.children, vs(c, d) ? y = null : v !== null && vs(c, v) && (i.flags |= 32), lm(t, i), dn(t, i, y, l), i.child;
      case 6:
        return t === null && Os(i), null;
      case 13:
        return fm(t, i, l);
      case 4:
        return Is(i, i.stateNode.containerInfo), c = i.pendingProps, t === null ? i.child = Xi(i, null, c, l) : dn(t, i, c, l), i.child;
      case 11:
        return c = i.type, d = i.pendingProps, d = i.elementType === c ? d : Xn(c, d), rm(t, i, c, d, l);
      case 7:
        return dn(t, i, i.pendingProps, l), i.child;
      case 8:
        return dn(t, i, i.pendingProps.children, l), i.child;
      case 12:
        return dn(t, i, i.pendingProps.children, l), i.child;
      case 10:
        e: {
          if (c = i.type._context, d = i.pendingProps, v = i.memoizedProps, y = d.value, _t(ml, c._currentValue), c._currentValue = y, v !== null) if (Yn(v.value, y)) {
            if (v.children === d.children && !wn.current) {
              i = wr(t, i, l);
              break e;
            }
          } else for (v = i.child, v !== null && (v.return = i); v !== null; ) {
            var N = v.dependencies;
            if (N !== null) {
              y = v.child;
              for (var $ = N.firstContext; $ !== null; ) {
                if ($.context === c) {
                  if (v.tag === 1) {
                    $ = _r(-1, l & -l), $.tag = 2;
                    var ie = v.updateQueue;
                    if (ie !== null) {
                      ie = ie.shared;
                      var pe = ie.pending;
                      pe === null ? $.next = $ : ($.next = pe.next, pe.next = $), ie.pending = $;
                    }
                  }
                  v.lanes |= l, $ = v.alternate, $ !== null && ($.lanes |= l), Ns(v.return, l, i), N.lanes |= l;
                  break;
                }
                $ = $.next;
              }
            } else if (v.tag === 10) y = v.type === i.type ? null : v.child;
            else if (v.tag === 18) {
              if (y = v.return, y === null) throw Error(n(341));
              y.lanes |= l, N = y.alternate, N !== null && (N.lanes |= l), Ns(y, l, i), y = v.sibling;
            } else y = v.child;
            if (y !== null) y.return = v;
            else for (y = v; y !== null; ) {
              if (y === i) {
                y = null;
                break;
              }
              if (v = y.sibling, v !== null) {
                v.return = y.return, y = v;
                break;
              }
              y = y.return;
            }
            v = y;
          }
          dn(t, i, d.children, l), i = i.child;
        }
        return i;
      case 9:
        return d = i.type, c = i.pendingProps.children, Ji(i, l), d = An(d), c = c(d), i.flags |= 1, dn(t, i, c, l), i.child;
      case 14:
        return c = i.type, d = Xn(c, i.pendingProps), d = Xn(c.type, d), im(t, i, c, d, l);
      case 15:
        return am(t, i, i.type, i.pendingProps, l);
      case 17:
        return c = i.type, d = i.pendingProps, d = i.elementType === c ? d : Xn(c, d), Pl(t, i), i.tag = 1, Cn(c) ? (t = true, sl(i)) : t = false, Ji(i, l), Qv(i, c, d), Bs(i, c, d, l), Gs(null, i, c, true, t, l);
      case 19:
        return pm(t, i, l);
      case 22:
        return om(t, i, l);
    }
    throw Error(n(156, i.tag));
  };
  function Lm(t, i) {
    return ot(t, i);
  }
  function Qw(t, i, l, c) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Hn(t, i, l, c) {
    return new Qw(t, i, l, c);
  }
  function vc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Xw(t) {
    if (typeof t == "function") return vc(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === L) return 11;
      if (t === Z) return 14;
    }
    return 2;
  }
  function Jr(t, i) {
    var l = t.alternate;
    return l === null ? (l = Hn(t.tag, i, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = i, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 14680064, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, i = t.dependencies, l.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l;
  }
  function $l(t, i, l, c, d, v) {
    var y = 2;
    if (c = t, typeof t == "function") vc(t) && (y = 1);
    else if (typeof t == "string") y = 5;
    else e: switch (t) {
      case M:
        return Ci(l.children, d, v, i);
      case V:
        y = 8, d |= 8;
        break;
      case j:
        return t = Hn(12, l, i, d | 2), t.elementType = j, t.lanes = v, t;
      case Q:
        return t = Hn(13, l, i, d), t.elementType = Q, t.lanes = v, t;
      case q:
        return t = Hn(19, l, i, d), t.elementType = q, t.lanes = v, t;
      case W:
        return Al(l, d, v, i);
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case z:
            y = 10;
            break e;
          case H:
            y = 9;
            break e;
          case L:
            y = 11;
            break e;
          case Z:
            y = 14;
            break e;
          case A:
            y = 16, c = null;
            break e;
        }
        throw Error(n(130, t == null ? t : typeof t, ""));
    }
    return i = Hn(y, l, i, d), i.elementType = t, i.type = c, i.lanes = v, i;
  }
  function Ci(t, i, l, c) {
    return t = Hn(7, t, c, i), t.lanes = l, t;
  }
  function Al(t, i, l, c) {
    return t = Hn(22, t, c, i), t.elementType = W, t.lanes = l, t.stateNode = { isHidden: false }, t;
  }
  function mc(t, i, l) {
    return t = Hn(6, t, null, i), t.lanes = l, t;
  }
  function hc(t, i, l) {
    return i = Hn(4, t.children !== null ? t.children : [], t.key, i), i.lanes = l, i.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, i;
  }
  function Zw(t, i, l, c, d) {
    this.tag = i, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wu(0), this.expirationTimes = Wu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wu(0), this.identifierPrefix = c, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function gc(t, i, l, c, d, v, y, N, $) {
    return t = new Zw(t, i, l, N, $), i === 1 ? (i = 1, v === true && (i |= 8)) : i = 0, v = Hn(3, null, null, i), t.current = v, v.stateNode = t, v.memoizedState = { element: c, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, js(v), t;
  }
  function Jw(t, i, l) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: P, key: c == null ? null : "" + c, children: t, containerInfo: i, implementation: l };
  }
  function $m(t) {
    if (!t) return Br;
    t = t._reactInternals;
    e: {
      if (tn(t) !== t || t.tag !== 1) throw Error(n(170));
      var i = t;
      do {
        switch (i.tag) {
          case 3:
            i = i.stateNode.context;
            break e;
          case 1:
            if (Cn(i.type)) {
              i = i.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        i = i.return;
      } while (i !== null);
      throw Error(n(171));
    }
    if (t.tag === 1) {
      var l = t.type;
      if (Cn(l)) return dv(t, l, i);
    }
    return i;
  }
  function Am(t, i, l, c, d, v, y, N, $) {
    return t = gc(l, c, true, t, d, v, y, N, $), t.context = $m(null), l = t.current, c = pn(), d = Xr(l), v = _r(c, d), v.callback = i ?? null, qr(l, v, d), t.current.lanes = d, ja(t, d, c), bn(t, c), t;
  }
  function Vl(t, i, l, c) {
    var d = i.current, v = pn(), y = Xr(d);
    return l = $m(l), i.context === null ? i.context = l : i.pendingContext = l, i = _r(v, y), i.payload = { element: t }, c = c === void 0 ? null : c, c !== null && (i.callback = c), t = qr(d, i, y), t !== null && (er(t, d, y, v), gl(t, d, y)), y;
  }
  function Fl(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Vm(t, i) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < i ? l : i;
    }
  }
  function yc(t, i) {
    Vm(t, i), (t = t.alternate) && Vm(t, i);
  }
  function eC() {
    return null;
  }
  var Fm = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function _c(t) {
    this._internalRoot = t;
  }
  Hl.prototype.render = _c.prototype.render = function(t) {
    var i = this._internalRoot;
    if (i === null) throw Error(n(409));
    Vl(t, i, null, null);
  }, Hl.prototype.unmount = _c.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var i = t.containerInfo;
      yi(function() {
        Vl(null, t, null, null);
      }), i[vr] = null;
    }
  };
  function Hl(t) {
    this._internalRoot = t;
  }
  Hl.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var i = bp();
      t = { blockedOn: null, target: t, priority: i };
      for (var l = 0; l < Ar.length && i !== 0 && i < Ar[l].priority; l++) ;
      Ar.splice(l, 0, t), l === 0 && Pp(t);
    }
  };
  function wc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Wl(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function Hm() {
  }
  function tC(t, i, l, c, d) {
    if (d) {
      if (typeof c == "function") {
        var v = c;
        c = function() {
          var ie = Fl(y);
          v.call(ie);
        };
      }
      var y = Am(i, c, t, 0, null, false, false, "", Hm);
      return t._reactRootContainer = y, t[vr] = y.current, Ba(t.nodeType === 8 ? t.parentNode : t), yi(), y;
    }
    for (; d = t.lastChild; ) t.removeChild(d);
    if (typeof c == "function") {
      var N = c;
      c = function() {
        var ie = Fl($);
        N.call(ie);
      };
    }
    var $ = gc(t, 0, false, null, null, false, false, "", Hm);
    return t._reactRootContainer = $, t[vr] = $.current, Ba(t.nodeType === 8 ? t.parentNode : t), yi(function() {
      Vl(i, $, l, c);
    }), $;
  }
  function Bl(t, i, l, c, d) {
    var v = l._reactRootContainer;
    if (v) {
      var y = v;
      if (typeof d == "function") {
        var N = d;
        d = function() {
          var $ = Fl(y);
          N.call($);
        };
      }
      Vl(i, y, t, d);
    } else y = tC(l, i, t, d, c);
    return Fl(y);
  }
  xp = function(t) {
    switch (t.tag) {
      case 3:
        var i = t.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var l = ka(i.pendingLanes);
          l !== 0 && (Bu(i, l | 1), bn(i, Ze()), (ut & 6) === 0 && (ia = Ze() + 500, Ur()));
        }
        break;
      case 13:
        yi(function() {
          var c = yr(t, 1);
          if (c !== null) {
            var d = pn();
            er(c, t, 1, d);
          }
        }), yc(t, 1);
    }
  }, Uu = function(t) {
    if (t.tag === 13) {
      var i = yr(t, 134217728);
      if (i !== null) {
        var l = pn();
        er(i, t, 134217728, l);
      }
      yc(t, 134217728);
    }
  }, Op = function(t) {
    if (t.tag === 13) {
      var i = Xr(t), l = yr(t, i);
      if (l !== null) {
        var c = pn();
        er(l, t, i, c);
      }
      yc(t, i);
    }
  }, bp = function() {
    return vt;
  }, Ep = function(t, i) {
    var l = vt;
    try {
      return vt = t, i();
    } finally {
      vt = l;
    }
  }, Ht = function(t, i, l) {
    switch (i) {
      case "input":
        if (be(t, l), i = l.name, l.type === "radio" && i != null) {
          for (l = t; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0; i < l.length; i++) {
            var c = l[i];
            if (c !== t && c.form === t.form) {
              var d = ll(c);
              if (!d) throw Error(n(90));
              Pe(c), be(c, d);
            }
          }
        }
        break;
      case "textarea":
        ye(t, l);
        break;
      case "select":
        i = l.value, i != null && Qe(t, !!l.multiple, i, false);
    }
  }, Se = fc, je = yi;
  var nC = { usingClientEntryPoint: false, Events: [qa, Ui, ll, qt, fn, fc] }, lo = { findFiberByHostInstance: ci, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rC = { bundleType: lo.bundleType, version: lo.version, rendererPackageName: lo.rendererPackageName, rendererConfig: lo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: T.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = Xe(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: lo.findFiberByHostInstance || eC, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ul.isDisabled && Ul.supportsFiber) try {
      Ho = Ul.inject(rC), ir = Ul;
    } catch {
    }
  }
  return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nC, En.createPortal = function(t, i) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!wc(i)) throw Error(n(200));
    return Jw(t, i, null, l);
  }, En.createRoot = function(t, i) {
    if (!wc(t)) throw Error(n(299));
    var l = false, c = "", d = Fm;
    return i != null && (i.unstable_strictMode === true && (l = true), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onRecoverableError !== void 0 && (d = i.onRecoverableError)), i = gc(t, 1, false, null, null, l, false, c, d), t[vr] = i.current, Ba(t.nodeType === 8 ? t.parentNode : t), new _c(i);
  }, En.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var i = t._reactInternals;
    if (i === void 0) throw typeof t.render == "function" ? Error(n(188)) : (t = Object.keys(t).join(","), Error(n(268, t)));
    return t = Xe(i), t = t === null ? null : t.stateNode, t;
  }, En.flushSync = function(t) {
    return yi(t);
  }, En.hydrate = function(t, i, l) {
    if (!Wl(i)) throw Error(n(200));
    return Bl(null, t, i, true, l);
  }, En.hydrateRoot = function(t, i, l) {
    if (!wc(t)) throw Error(n(405));
    var c = l != null && l.hydratedSources || null, d = false, v = "", y = Fm;
    if (l != null && (l.unstable_strictMode === true && (d = true), l.identifierPrefix !== void 0 && (v = l.identifierPrefix), l.onRecoverableError !== void 0 && (y = l.onRecoverableError)), i = Am(i, null, t, 1, l ?? null, d, false, v, y), t[vr] = i.current, Ba(t), c) for (t = 0; t < c.length; t++) l = c[t], d = l._getVersion, d = d(l._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [l, d] : i.mutableSourceEagerHydrationData.push(l, d);
    return new Hl(i);
  }, En.render = function(t, i, l) {
    if (!Wl(i)) throw Error(n(200));
    return Bl(null, t, i, false, l);
  }, En.unmountComponentAtNode = function(t) {
    if (!Wl(t)) throw Error(n(40));
    return t._reactRootContainer ? (yi(function() {
      Bl(null, null, t, false, function() {
        t._reactRootContainer = null, t[vr] = null;
      });
    }), true) : false;
  }, En.unstable_batchedUpdates = fc, En.unstable_renderSubtreeIntoContainer = function(t, i, l, c) {
    if (!Wl(l)) throw Error(n(200));
    if (t == null || t._reactInternals === void 0) throw Error(n(38));
    return Bl(t, i, l, false, c);
  }, En.version = "18.3.1-next-f1338f8080-20240426", En;
}
var Qm;
function Yy() {
  if (Qm) return Oc.exports;
  Qm = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (o) {
      console.error(o);
    }
  }
  return e(), Oc.exports = cC(), Oc.exports;
}
var Xm;
function fC() {
  if (Xm) return ql;
  Xm = 1;
  var e = Yy();
  return ql.createRoot = e.createRoot, ql.hydrateRoot = e.hydrateRoot, ql;
}
var dC = fC();
const pC = Di(dC);
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var o = 1; o < arguments.length; o++) {
      var n = arguments[o];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ht.apply(null, arguments);
}
function So(e) {
  "@babel/helpers - typeof";
  return So = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, So(e);
}
function vC(e, o) {
  if (So(e) != "object" || !e) return e;
  var n;
  if (typeof Symbol < "u" && (n = e[Symbol.toPrimitive]) !== void 0) {
    var r = n.call(e, o);
    if (So(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(e);
}
function mC(e) {
  var o = vC(e, "string");
  return So(o) == "symbol" ? o : o + "";
}
function kt(e, o, n) {
  return (o = mC(o)) in e ? Object.defineProperty(e, o, { value: n, enumerable: true, configurable: true, writable: true }) : e[o] = n, e;
}
var wt = _.createContext({ prefixCls: "arco" });
function Zm(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Jm(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Zm(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zm(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function hC(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = Jm(Jm({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-check-circle-fill") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z", clipRule: "evenodd" }));
}
var Vd = h.forwardRef(hC);
Vd.defaultProps = { isIcon: true };
Vd.displayName = "IconCheckCircleFill";
function eh(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function th(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? eh(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function gC(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = th(th({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-close-circle-fill") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z", clipRule: "evenodd" }));
}
var Fd = h.forwardRef(gC);
Fd.defaultProps = { isIcon: true };
Fd.displayName = "IconCloseCircleFill";
function nh(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function rh(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? nh(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function yC(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = rh(rh({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-info-circle-fill") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z", clipRule: "evenodd" }));
}
var Hd = h.forwardRef(yC);
Hd.defaultProps = { isIcon: true };
Hd.displayName = "IconInfoCircleFill";
function ih(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ah(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? ih(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ih(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _C(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = ah(ah({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-exclamation-circle-fill") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", fillRule: "evenodd", stroke: "none", d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z", clipRule: "evenodd" }));
}
var Wd = h.forwardRef(_C);
Wd.defaultProps = { isIcon: true };
Wd.displayName = "IconExclamationCircleFill";
function oh(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lh(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? oh(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function wC(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = lh(lh({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-close") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142" }));
}
var Nr = h.forwardRef(wC);
Nr.defaultProps = { isIcon: true };
Nr.displayName = "IconClose";
var Qy = Yy();
const Kn = Di(Qy);
var Sc = { exports: {} }, ft = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var uh;
function CC() {
  if (uh) return ft;
  uh = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), u = /* @__PURE__ */ Symbol.for("react.provider"), f = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.server_context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.suspense_list"), w = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), O = /* @__PURE__ */ Symbol.for("react.offscreen"), b;
  b = /* @__PURE__ */ Symbol.for("react.module.reference");
  function S(x) {
    if (typeof x == "object" && x !== null) {
      var B = x.$$typeof;
      switch (B) {
        case e:
          switch (x = x.type, x) {
            case n:
            case a:
            case r:
            case p:
            case g:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case f:
                case m:
                case C:
                case w:
                case u:
                  return x;
                default:
                  return B;
              }
          }
        case o:
          return B;
      }
    }
  }
  return ft.ContextConsumer = f, ft.ContextProvider = u, ft.Element = e, ft.ForwardRef = m, ft.Fragment = n, ft.Lazy = C, ft.Memo = w, ft.Portal = o, ft.Profiler = a, ft.StrictMode = r, ft.Suspense = p, ft.SuspenseList = g, ft.isAsyncMode = function() {
    return false;
  }, ft.isConcurrentMode = function() {
    return false;
  }, ft.isContextConsumer = function(x) {
    return S(x) === f;
  }, ft.isContextProvider = function(x) {
    return S(x) === u;
  }, ft.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, ft.isForwardRef = function(x) {
    return S(x) === m;
  }, ft.isFragment = function(x) {
    return S(x) === n;
  }, ft.isLazy = function(x) {
    return S(x) === C;
  }, ft.isMemo = function(x) {
    return S(x) === w;
  }, ft.isPortal = function(x) {
    return S(x) === o;
  }, ft.isProfiler = function(x) {
    return S(x) === a;
  }, ft.isStrictMode = function(x) {
    return S(x) === r;
  }, ft.isSuspense = function(x) {
    return S(x) === p;
  }, ft.isSuspenseList = function(x) {
    return S(x) === g;
  }, ft.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === a || x === r || x === p || x === g || x === O || typeof x == "object" && x !== null && (x.$$typeof === C || x.$$typeof === w || x.$$typeof === u || x.$$typeof === f || x.$$typeof === m || x.$$typeof === b || x.getModuleId !== void 0);
  }, ft.typeOf = S, ft;
}
var sh;
function xC() {
  return sh || (sh = 1, Sc.exports = CC()), Sc.exports;
}
var OC = xC(), Pc, Nc, Do = Object.prototype.toString;
function Ft(e) {
  return Do.call(e) === "[object Array]";
}
function He(e) {
  return Do.call(e) === "[object Object]";
}
function Sa(e) {
  return Do.call(e) === "[object String]";
}
function Rt(e) {
  return Do.call(e) === "[object Number]" && e === e;
}
function sP(e) {
  return Do.call(e) === "[object File]";
}
function gn(e) {
  return e === void 0;
}
function cP(e) {
  return e === null;
}
function Xy(e) {
  return e == null;
}
function Mt(e) {
  return typeof e == "function";
}
function Po(e, o) {
  return e == null || e === false || typeof e == "string" && (o ? e.trim() === "" : e === "");
}
function fP(e) {
  return e || e === 0;
}
function dP(e) {
  return He(e) && ("$y" in e && "$M" in e && "$D" in e && "$d" in e && "$H" in e && "$m" in e && "$s" in e || e._isAMomentObject);
}
function pP(e) {
  return typeof e == "boolean";
}
var Zy = function(e) {
  return e && _.isValidElement(e) && typeof e.type == "function";
}, bC = function(e) {
  var o;
  return Zy(e) && !!(!((o = e.type.prototype) === null || o === void 0) && o.isReactComponent);
}, EC = function(e) {
  return _.isValidElement(e) && typeof e.type == "string";
}, Jy = Number((Pc = Kn.version) === null || Pc === void 0 ? void 0 : Pc.split(".")[0]) > 17, SC = Number((Nc = Kn.version) === null || Nc === void 0 ? void 0 : Nc.split(".")[0]) > 18, PC = function(e) {
  if (!SC) return OC.isForwardRef(e);
  var o = /* @__PURE__ */ Symbol.for("react.element"), n = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.forward_ref");
  if (typeof e == "object" && e !== null) {
    var a = e.$$typeof;
    if (a === o || a === n) {
      var u = e.type, f = u && u.$$typeof;
      return f === r;
    }
  }
  return false;
}, Bd = function(e) {
  return EC(e) || PC(e) ? true : Zy(e) ? bC(e) : false;
};
var NC = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, kC = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
};
function he() {
  for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
  for (var n = e.length, r = [], a = function(f) {
    var s = e[f];
    if (!s) return "continue";
    Sa(s) ? r.push(s) : Ft(s) ? r = r.concat(s) : He(s) && Object.keys(s).forEach(function(m) {
      s[m] && r.push(m);
    });
  }, u = 0; u < n; u++) a(u);
  return kC([], NC(new Set(r)), false).join(" ");
}
function jC(e) {
  var o = [], n = e.substr(1);
  return e.length === 3 && (n = e.replace(/(.)/g, "$1$1")), n.replace(/../g, function(r) {
    o.push(parseInt(r, 16));
  }), { r: o[0], g: o[1], b: o[2], rgb: "rgb(" + o.join(",") + ")" };
}
function IC(e) {
  var o = jC(e);
  return { r: o.r, g: o.g, b: o.b };
}
function TC(e) {
  var o = IC(e), n = MC(o.r, o.g, o.b);
  return { h: n.h, s: n.s, l: n.l };
}
function MC(e, o, n) {
  var r = e / 255, a = o / 255, u = n / 255, f = Math.max(r, a, u), s = Math.min(r, a, u), m = (f + s) / 2, p, g;
  if (f === s) p = 0, g = 0;
  else {
    var w = f - s;
    switch (g = m > 0.5 ? w / (2 - f - s) : w / (f + s), f) {
      case r:
        p = (a - u) / w + (a < u ? 6 : 0);
        break;
      case a:
        p = (u - r) / w + 2;
        break;
      case u:
        p = (r - a) / w + 4;
        break;
    }
    p /= 6;
  }
  return { h: p, s: g, l: m, hsl: "hsl(" + p * 360 + ", " + g * 100 + "%, " + m * 100 + "%)" };
}
function kc(e, o) {
  var n = TC(e), r = +n.h, a = +n.s, u = +n.l * 100 + +o, f = RC([r * 360, a * 100, u]);
  return f.join(",");
}
function RC(e) {
  var o = e[0] / 360, n = e[1] / 100, r = e[2] / 100, a, u, f;
  if (n === 0) return f = r * 255, [f, f, f];
  r < 0.5 ? a = r * (1 + n) : a = r + n - r * n;
  for (var s = 2 * r - a, m = [0, 0, 0], p = 0; p < 3; p++) u = o + 1 / 3 * -(p - 1), u < 0 && u++, u > 1 && u--, 6 * u < 1 ? f = s + (a - s) * 6 * u : 2 * u < 1 ? f = a : 3 * u < 2 ? f = s + (a - s) * (2 / 3 - u) * 6 : f = s, m[p] = f * 255;
  return m;
}
function Ud(e, o) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (o.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function td(e, o) {
  return td = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, td(e, o);
}
function Kd(e, o) {
  e.prototype = Object.create(o.prototype), e.prototype.constructor = e, td(e, o);
}
function DC(e, o) {
  return e.classList ? !!o && e.classList.contains(o) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + o + " ") !== -1;
}
function zC(e, o) {
  e.classList ? e.classList.add(o) : DC(e, o) || (typeof e.className == "string" ? e.className = e.className + " " + o : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + o));
}
function ch(e, o) {
  return e.replace(new RegExp("(^|\\s)" + o + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function LC(e, o) {
  e.classList ? e.classList.remove(o) : typeof e.className == "string" ? e.className = ch(e.className, o) : e.setAttribute("class", ch(e.className && e.className.baseVal || "", o));
}
const fh = { disabled: false }, uu = h.createContext(null);
var e0 = function(o) {
  return o.scrollTop;
}, ho = "unmounted", Ei = "exited", Si = "entering", sa = "entered", nd = "exiting", Tr = (function(e) {
  Kd(o, e);
  function o(r, a) {
    var u;
    u = e.call(this, r, a) || this;
    var f = a, s = f && !f.isMounting ? r.enter : r.appear, m;
    return u.appearStatus = null, r.in ? s ? (m = Ei, u.appearStatus = Si) : m = sa : r.unmountOnExit || r.mountOnEnter ? m = ho : m = Ei, u.state = { status: m }, u.nextCallback = null, u;
  }
  o.getDerivedStateFromProps = function(a, u) {
    var f = a.in;
    return f && u.status === ho ? { status: Ei } : null;
  };
  var n = o.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, n.componentDidUpdate = function(a) {
    var u = null;
    if (a !== this.props) {
      var f = this.state.status;
      this.props.in ? f !== Si && f !== sa && (u = Si) : (f === Si || f === sa) && (u = nd);
    }
    this.updateStatus(false, u);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var a = this.props.timeout, u, f, s;
    return u = f = s = a, a != null && typeof a != "number" && (u = a.exit, f = a.enter, s = a.appear !== void 0 ? a.appear : f), { exit: u, enter: f, appear: s };
  }, n.updateStatus = function(a, u) {
    if (a === void 0 && (a = false), u !== null) if (this.cancelNextCallback(), u === Si) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var f = this.props.nodeRef ? this.props.nodeRef.current : Kn.findDOMNode(this);
        f && e0(f);
      }
      this.performEnter(a);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === Ei && this.setState({ status: ho });
  }, n.performEnter = function(a) {
    var u = this, f = this.props.enter, s = this.context ? this.context.isMounting : a, m = this.props.nodeRef ? [s] : [Kn.findDOMNode(this), s], p = m[0], g = m[1], w = this.getTimeouts(), C = s ? w.appear : w.enter;
    if (!a && !f || fh.disabled) {
      this.safeSetState({ status: sa }, function() {
        u.props.onEntered(p);
      });
      return;
    }
    this.props.onEnter(p, g), this.safeSetState({ status: Si }, function() {
      u.props.onEntering(p, g), u.onTransitionEnd(C, function() {
        u.safeSetState({ status: sa }, function() {
          u.props.onEntered(p, g);
        });
      });
    });
  }, n.performExit = function() {
    var a = this, u = this.props.exit, f = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Kn.findDOMNode(this);
    if (!u || fh.disabled) {
      this.safeSetState({ status: Ei }, function() {
        a.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({ status: nd }, function() {
      a.props.onExiting(s), a.onTransitionEnd(f.exit, function() {
        a.safeSetState({ status: Ei }, function() {
          a.props.onExited(s);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(a, u) {
    u = this.setNextCallback(u), this.setState(a, u);
  }, n.setNextCallback = function(a) {
    var u = this, f = true;
    return this.nextCallback = function(s) {
      f && (f = false, u.nextCallback = null, a(s));
    }, this.nextCallback.cancel = function() {
      f = false;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(a, u) {
    this.setNextCallback(u);
    var f = this.props.nodeRef ? this.props.nodeRef.current : Kn.findDOMNode(this), s = a == null && !this.props.addEndListener;
    if (!f || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var m = this.props.nodeRef ? [this.nextCallback] : [f, this.nextCallback], p = m[0], g = m[1];
      this.props.addEndListener(p, g);
    }
    a != null && setTimeout(this.nextCallback, a);
  }, n.render = function() {
    var a = this.state.status;
    if (a === ho) return null;
    var u = this.props, f = u.children;
    u.in, u.mountOnEnter, u.unmountOnExit, u.appear, u.enter, u.exit, u.timeout, u.addEndListener, u.onEnter, u.onEntering, u.onEntered, u.onExit, u.onExiting, u.onExited, u.nodeRef;
    var s = Ud(u, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return h.createElement(uu.Provider, { value: null }, typeof f == "function" ? f(a, s) : h.cloneElement(h.Children.only(f), s));
  }, o;
})(h.Component);
Tr.contextType = uu;
Tr.propTypes = {};
function oa() {
}
Tr.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: oa, onEntering: oa, onEntered: oa, onExit: oa, onExiting: oa, onExited: oa };
Tr.UNMOUNTED = ho;
Tr.EXITED = Ei;
Tr.ENTERING = Si;
Tr.ENTERED = sa;
Tr.EXITING = nd;
var $C = function(o, n) {
  return o && n && n.split(" ").forEach(function(r) {
    return zC(o, r);
  });
}, jc = function(o, n) {
  return o && n && n.split(" ").forEach(function(r) {
    return LC(o, r);
  });
}, Ou = (function(e) {
  Kd(o, e);
  function o() {
    for (var r, a = arguments.length, u = new Array(a), f = 0; f < a; f++) u[f] = arguments[f];
    return r = e.call.apply(e, [this].concat(u)) || this, r.appliedClasses = { appear: {}, enter: {}, exit: {} }, r.onEnter = function(s, m) {
      var p = r.resolveArguments(s, m), g = p[0], w = p[1];
      r.removeClasses(g, "exit"), r.addClass(g, w ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(s, m);
    }, r.onEntering = function(s, m) {
      var p = r.resolveArguments(s, m), g = p[0], w = p[1], C = w ? "appear" : "enter";
      r.addClass(g, C, "active"), r.props.onEntering && r.props.onEntering(s, m);
    }, r.onEntered = function(s, m) {
      var p = r.resolveArguments(s, m), g = p[0], w = p[1], C = w ? "appear" : "enter";
      r.removeClasses(g, C), r.addClass(g, C, "done"), r.props.onEntered && r.props.onEntered(s, m);
    }, r.onExit = function(s) {
      var m = r.resolveArguments(s), p = m[0];
      r.removeClasses(p, "appear"), r.removeClasses(p, "enter"), r.addClass(p, "exit", "base"), r.props.onExit && r.props.onExit(s);
    }, r.onExiting = function(s) {
      var m = r.resolveArguments(s), p = m[0];
      r.addClass(p, "exit", "active"), r.props.onExiting && r.props.onExiting(s);
    }, r.onExited = function(s) {
      var m = r.resolveArguments(s), p = m[0];
      r.removeClasses(p, "exit"), r.addClass(p, "exit", "done"), r.props.onExited && r.props.onExited(s);
    }, r.resolveArguments = function(s, m) {
      return r.props.nodeRef ? [r.props.nodeRef.current, s] : [s, m];
    }, r.getClassNames = function(s) {
      var m = r.props.classNames, p = typeof m == "string", g = p && m ? m + "-" : "", w = p ? "" + g + s : m[s], C = p ? w + "-active" : m[s + "Active"], O = p ? w + "-done" : m[s + "Done"];
      return { baseClassName: w, activeClassName: C, doneClassName: O };
    }, r;
  }
  var n = o.prototype;
  return n.addClass = function(a, u, f) {
    var s = this.getClassNames(u)[f + "ClassName"], m = this.getClassNames("enter"), p = m.doneClassName;
    u === "appear" && f === "done" && p && (s += " " + p), f === "active" && a && e0(a), s && (this.appliedClasses[u][f] = s, $C(a, s));
  }, n.removeClasses = function(a, u) {
    var f = this.appliedClasses[u], s = f.base, m = f.active, p = f.done;
    this.appliedClasses[u] = {}, s && jc(a, s), m && jc(a, m), p && jc(a, p);
  }, n.render = function() {
    var a = this.props;
    a.classNames;
    var u = Ud(a, ["classNames"]);
    return h.createElement(Tr, ht({}, u, { onEnter: this.onEnter, onEntered: this.onEntered, onEntering: this.onEntering, onExit: this.onExit, onExiting: this.onExiting, onExited: this.onExited }));
  }, o;
})(h.Component);
Ou.defaultProps = { classNames: "" };
Ou.propTypes = {};
function AC(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qd(e, o) {
  var n = function(u) {
    return o && _.isValidElement(u) ? o(u) : u;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && _.Children.map(e, function(a) {
    return a;
  }).forEach(function(a) {
    r[a.key] = n(a);
  }), r;
}
function VC(e, o) {
  e = e || {}, o = o || {};
  function n(g) {
    return g in o ? o[g] : e[g];
  }
  var r = /* @__PURE__ */ Object.create(null), a = [];
  for (var u in e) u in o ? a.length && (r[u] = a, a = []) : a.push(u);
  var f, s = {};
  for (var m in o) {
    if (r[m]) for (f = 0; f < r[m].length; f++) {
      var p = r[m][f];
      s[r[m][f]] = n(p);
    }
    s[m] = n(m);
  }
  for (f = 0; f < a.length; f++) s[a[f]] = n(a[f]);
  return s;
}
function Ii(e, o, n) {
  return n[o] != null ? n[o] : e.props[o];
}
function FC(e, o) {
  return qd(e.children, function(n) {
    return _.cloneElement(n, { onExited: o.bind(null, n), in: true, appear: Ii(n, "appear", e), enter: Ii(n, "enter", e), exit: Ii(n, "exit", e) });
  });
}
function HC(e, o, n) {
  var r = qd(e.children), a = VC(o, r);
  return Object.keys(a).forEach(function(u) {
    var f = a[u];
    if (_.isValidElement(f)) {
      var s = u in o, m = u in r, p = o[u], g = _.isValidElement(p) && !p.props.in;
      m && (!s || g) ? a[u] = _.cloneElement(f, { onExited: n.bind(null, f), in: true, exit: Ii(f, "exit", e), enter: Ii(f, "enter", e) }) : !m && s && !g ? a[u] = _.cloneElement(f, { in: false }) : m && s && _.isValidElement(p) && (a[u] = _.cloneElement(f, { onExited: n.bind(null, f), in: p.props.in, exit: Ii(f, "exit", e), enter: Ii(f, "enter", e) }));
    }
  }), a;
}
var WC = Object.values || function(e) {
  return Object.keys(e).map(function(o) {
    return e[o];
  });
}, BC = { component: "div", childFactory: function(o) {
  return o;
} }, zo = (function(e) {
  Kd(o, e);
  function o(r, a) {
    var u;
    u = e.call(this, r, a) || this;
    var f = u.handleExited.bind(AC(u));
    return u.state = { contextValue: { isMounting: true }, handleExited: f, firstRender: true }, u;
  }
  var n = o.prototype;
  return n.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, n.componentWillUnmount = function() {
    this.mounted = false;
  }, o.getDerivedStateFromProps = function(a, u) {
    var f = u.children, s = u.handleExited, m = u.firstRender;
    return { children: m ? FC(a, s) : HC(a, f, s), firstRender: false };
  }, n.handleExited = function(a, u) {
    var f = qd(this.props.children);
    a.key in f || (a.props.onExited && a.props.onExited(u), this.mounted && this.setState(function(s) {
      var m = ht({}, s.children);
      return delete m[a.key], { children: m };
    }));
  }, n.render = function() {
    var a = this.props, u = a.component, f = a.childFactory, s = Ud(a, ["component", "childFactory"]), m = this.state.contextValue, p = WC(this.state.children).map(f);
    return delete s.appear, delete s.enter, delete s.exit, u === null ? h.createElement(uu.Provider, { value: m }, p) : h.createElement(uu.Provider, { value: m }, h.createElement(u, s, p));
  }, o;
})(h.Component);
zo.propTypes = {};
zo.defaultProps = BC;
var dh = "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", xa = Kn, ph = function(e) {
  He(xa[dh]) && (xa[dh].usingClientEntryPoint = e);
}, rd;
try {
  rd = xa.createRoot;
} catch {
}
var id, UC = function() {
  Jy && rd ? id = function(e, o) {
    ph(true);
    var n = rd(o);
    return ph(false), n.render(e), n._unmount = function() {
      setTimeout(function() {
        var r;
        (r = n == null ? void 0 : n.unmount) === null || r === void 0 || r.call(n);
      });
    }, n;
  } : id = function(e, o) {
    return xa.render(e, o), { render: function(n) {
      xa.render(n, o);
    }, _unmount: function() {
      xa.unmountComponentAtNode(o);
    } };
  };
}, ti;
function KC(e) {
  var o = e.constructor;
  if (typeof o != "function") return false;
  !ti && typeof WeakSet == "function" && (ti = /* @__PURE__ */ new WeakSet());
  var n = !!(ti != null && ti.has(o));
  return ti == null || ti.add(o), n;
}
var bu = function(e, o) {
  return e && e instanceof Element ? e : e && e.current && e.current instanceof Element ? e.current : e && Mt(e.getRootDOMNode) ? e.getRootDOMNode() : e instanceof _.Component && Kn.findDOMNode ? Kn.findDOMNode(e) : o && (Jy && KC(o), Kn.findDOMNode) ? Kn.findDOMNode(o) : null;
}, Gd = function(e, o) {
  e && e.ref && (Mt(e.ref) && (e == null || e.ref(o)), "current" in e.ref && (e.ref.current = o));
};
UC();
var t0 = function(e, o) {
  return id(e, o);
}, ad = function() {
  return ad = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, ad.apply(this, arguments);
}, qC = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, GC = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, YC = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
};
function Ri(e) {
  var o = e.children, n = qC(e, ["children"]), r = _.useRef(), a = _.useRef(), u = _.useMemo(function() {
    return e.nodeRef === void 0 && Bd(o) && _.isValidElement(o) ? (a.current = true, _.cloneElement(o, { ref: function(f) {
      r.current = bu(f), Gd(o, f);
    } })) : (a.current = false, o);
  }, [o, e.nodeRef]);
  return a.current && ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach(function(f) {
    e[f] && (n[f] = function(s) {
      for (var m = [], p = 1; p < arguments.length; p++) m[p - 1] = arguments[p];
      e[f].apply(e, YC([r.current], GC(m), false));
    });
  }), h.createElement(Ou, ad({}, n, { nodeRef: a.current ? r : void 0 }), u);
}
var QC = /* @__PURE__ */ (function() {
  var e = function(o, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (r[u] = a[u]);
    }, e(o, n);
  };
  return function(o, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(o, n);
    function r() {
      this.constructor = o;
    }
    o.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
})(), su = function() {
  return su = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, su.apply(this, arguments);
};
function XC(e) {
  return e != null && e.id ? e == null ? void 0 : e.id : "arco_notice_id_" + Math.random().toFixed(10).slice(2);
}
var n0 = (function(e) {
  QC(o, e);
  function o(n) {
    var r = e.call(this, n) || this;
    return r.add = function(a) {
      var u = XC(a), f = r.state.notices;
      return a.id && ~f.findIndex(function(s) {
        return s.id === a.id;
      }) ? r.update(a) : r.setState(function(s) {
        return { notices: s.notices.concat(su(su({}, a), { id: u })), position: a.position };
      }), u;
    }, r.update = function(a) {
      r.setState(function(u) {
        var f = u.notices.map(function(s) {
          return a.id === s.id ? a : s;
        });
        return { notices: f };
      }, function() {
        r.setState(function(u) {
          var f = u.notices.map(function(s) {
            return a.id === s.id && s.update && delete s.update, s;
          });
          return { notices: f };
        });
      });
    }, r.clear = function() {
      r.setState({ notices: [] });
    }, r.state = { notices: [], position: "topRight" }, r.remove = r.remove.bind(r), r;
  }
  return o.prototype.remove = function(n) {
    this.setState(function(r) {
      var a = r.notices.filter(function(u) {
        return u.id !== n;
      });
      return { notices: a };
    });
  }, o;
})(_.Component);
function vh(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function mh(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? vh(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ZC(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = mh(mh({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-loading") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6" }));
}
var ui = h.forwardRef(ZC);
ui.defaultProps = { isIcon: true };
ui.displayName = "IconLoading";
var od = function() {
  return od = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, od.apply(this, arguments);
}, JC = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function kr(e) {
  var o, n = e.children, r = e.className, a = e.disabled, u = e.prefix, f = e.size, s = f === void 0 ? "default" : f, m = JC(e, ["children", "className", "disabled", "prefix", "size"]), p = _.useContext(Ye).getPrefixCls, g = p("icon-hover");
  return h.createElement("span", od({ className: he(g, (o = {}, o[u + "-icon-hover"] = u, o[g + "-size-" + s] = s && s !== "default", o[g + "-disabled"] = a, o), r), onClick: e.onClick }, m), n);
}
var nu = { exports: {} }, ru = { exports: {} }, e1 = ru.exports, hh;
function t1() {
  return hh || (hh = 1, (function(e, o) {
    (function(n, r) {
      e.exports = r();
    })(e1, (function() {
      var n = 1e3, r = 6e4, a = 36e5, u = "millisecond", f = "second", s = "minute", m = "hour", p = "day", g = "week", w = "month", C = "quarter", O = "year", b = "date", S = "Invalid Date", x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, B = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, I = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(q) {
        var Z = ["th", "st", "nd", "rd"], A = q % 100;
        return "[" + q + (Z[(A - 20) % 10] || Z[A] || Z[0]) + "]";
      } }, D = function(q, Z, A) {
        var W = String(q);
        return !W || W.length >= Z ? q : "" + Array(Z + 1 - W.length).join(A) + q;
      }, T = { s: D, z: function(q) {
        var Z = -q.utcOffset(), A = Math.abs(Z), W = Math.floor(A / 60), k = A % 60;
        return (Z <= 0 ? "+" : "-") + D(W, 2, "0") + ":" + D(k, 2, "0");
      }, m: function q(Z, A) {
        if (Z.date() < A.date()) return -q(A, Z);
        var W = 12 * (A.year() - Z.year()) + (A.month() - Z.month()), k = Z.clone().add(W, w), X = A - k < 0, U = Z.clone().add(W + (X ? -1 : 1), w);
        return +(-(W + (A - k) / (X ? k - U : U - k)) || 0);
      }, a: function(q) {
        return q < 0 ? Math.ceil(q) || 0 : Math.floor(q);
      }, p: function(q) {
        return { M: w, y: O, w: g, d: p, D: b, h: m, m: s, s: f, ms: u, Q: C }[q] || String(q || "").toLowerCase().replace(/s$/, "");
      }, u: function(q) {
        return q === void 0;
      } }, R = "en", P = {};
      P[R] = I;
      var M = "$isDayjsObject", V = function(q) {
        return q instanceof L || !(!q || !q[M]);
      }, j = function q(Z, A, W) {
        var k;
        if (!Z) return R;
        if (typeof Z == "string") {
          var X = Z.toLowerCase();
          P[X] && (k = X), A && (P[X] = A, k = X);
          var U = Z.split("-");
          if (!k && U.length > 1) return q(U[0]);
        } else {
          var E = Z.name;
          P[E] = Z, k = E;
        }
        return !W && k && (R = k), k || !W && R;
      }, z = function(q, Z) {
        if (V(q)) return q.clone();
        var A = typeof Z == "object" ? Z : {};
        return A.date = q, A.args = arguments, new L(A);
      }, H = T;
      H.l = j, H.i = V, H.w = function(q, Z) {
        return z(q, { locale: Z.$L, utc: Z.$u, x: Z.$x, $offset: Z.$offset });
      };
      var L = (function() {
        function q(A) {
          this.$L = j(A.locale, null, true), this.parse(A), this.$x = this.$x || A.x || {}, this[M] = true;
        }
        var Z = q.prototype;
        return Z.parse = function(A) {
          this.$d = (function(W) {
            var k = W.date, X = W.utc;
            if (k === null) return /* @__PURE__ */ new Date(NaN);
            if (H.u(k)) return /* @__PURE__ */ new Date();
            if (k instanceof Date) return new Date(k);
            if (typeof k == "string" && !/Z$/i.test(k)) {
              var U = k.match(x);
              if (U) {
                var E = U[2] - 1 || 0, F = (U[7] || "0").substring(0, 3);
                return X ? new Date(Date.UTC(U[1], E, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, F)) : new Date(U[1], E, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, F);
              }
            }
            return new Date(k);
          })(A), this.init();
        }, Z.init = function() {
          var A = this.$d;
          this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
        }, Z.$utils = function() {
          return H;
        }, Z.isValid = function() {
          return this.$d.toString() !== S;
        }, Z.isSame = function(A, W) {
          var k = z(A);
          return this.startOf(W) <= k && k <= this.endOf(W);
        }, Z.isAfter = function(A, W) {
          return z(A) < this.startOf(W);
        }, Z.isBefore = function(A, W) {
          return this.endOf(W) < z(A);
        }, Z.$g = function(A, W, k) {
          return H.u(A) ? this[W] : this.set(k, A);
        }, Z.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, Z.valueOf = function() {
          return this.$d.getTime();
        }, Z.startOf = function(A, W) {
          var k = this, X = !!H.u(W) || W, U = H.p(A), E = function(ee, se) {
            var ke = H.w(k.$u ? Date.UTC(k.$y, se, ee) : new Date(k.$y, se, ee), k);
            return X ? ke : ke.endOf(p);
          }, F = function(ee, se) {
            return H.w(k.toDate()[ee].apply(k.toDate("s"), (X ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(se)), k);
          }, G = this.$W, ae = this.$M, ue = this.$D, re = "set" + (this.$u ? "UTC" : "");
          switch (U) {
            case O:
              return X ? E(1, 0) : E(31, 11);
            case w:
              return X ? E(1, ae) : E(0, ae + 1);
            case g:
              var ne = this.$locale().weekStart || 0, le = (G < ne ? G + 7 : G) - ne;
              return E(X ? ue - le : ue + (6 - le), ae);
            case p:
            case b:
              return F(re + "Hours", 0);
            case m:
              return F(re + "Minutes", 1);
            case s:
              return F(re + "Seconds", 2);
            case f:
              return F(re + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, Z.endOf = function(A) {
          return this.startOf(A, false);
        }, Z.$set = function(A, W) {
          var k, X = H.p(A), U = "set" + (this.$u ? "UTC" : ""), E = (k = {}, k[p] = U + "Date", k[b] = U + "Date", k[w] = U + "Month", k[O] = U + "FullYear", k[m] = U + "Hours", k[s] = U + "Minutes", k[f] = U + "Seconds", k[u] = U + "Milliseconds", k)[X], F = X === p ? this.$D + (W - this.$W) : W;
          if (X === w || X === O) {
            var G = this.clone().set(b, 1);
            G.$d[E](F), G.init(), this.$d = G.set(b, Math.min(this.$D, G.daysInMonth())).$d;
          } else E && this.$d[E](F);
          return this.init(), this;
        }, Z.set = function(A, W) {
          return this.clone().$set(A, W);
        }, Z.get = function(A) {
          return this[H.p(A)]();
        }, Z.add = function(A, W) {
          var k, X = this;
          A = Number(A);
          var U = H.p(W), E = function(ae) {
            var ue = z(X);
            return H.w(ue.date(ue.date() + Math.round(ae * A)), X);
          };
          if (U === w) return this.set(w, this.$M + A);
          if (U === O) return this.set(O, this.$y + A);
          if (U === p) return E(1);
          if (U === g) return E(7);
          var F = (k = {}, k[s] = r, k[m] = a, k[f] = n, k)[U] || 1, G = this.$d.getTime() + A * F;
          return H.w(G, this);
        }, Z.subtract = function(A, W) {
          return this.add(-1 * A, W);
        }, Z.format = function(A) {
          var W = this, k = this.$locale();
          if (!this.isValid()) return k.invalidDate || S;
          var X = A || "YYYY-MM-DDTHH:mm:ssZ", U = H.z(this), E = this.$H, F = this.$m, G = this.$M, ae = k.weekdays, ue = k.months, re = k.meridiem, ne = function(se, ke, Pe, De) {
            return se && (se[ke] || se(W, X)) || Pe[ke].slice(0, De);
          }, le = function(se) {
            return H.s(E % 12 || 12, se, "0");
          }, ee = re || function(se, ke, Pe) {
            var De = se < 12 ? "AM" : "PM";
            return Pe ? De.toLowerCase() : De;
          };
          return X.replace(B, (function(se, ke) {
            return ke || (function(Pe) {
              switch (Pe) {
                case "YY":
                  return String(W.$y).slice(-2);
                case "YYYY":
                  return H.s(W.$y, 4, "0");
                case "M":
                  return G + 1;
                case "MM":
                  return H.s(G + 1, 2, "0");
                case "MMM":
                  return ne(k.monthsShort, G, ue, 3);
                case "MMMM":
                  return ne(ue, G);
                case "D":
                  return W.$D;
                case "DD":
                  return H.s(W.$D, 2, "0");
                case "d":
                  return String(W.$W);
                case "dd":
                  return ne(k.weekdaysMin, W.$W, ae, 2);
                case "ddd":
                  return ne(k.weekdaysShort, W.$W, ae, 3);
                case "dddd":
                  return ae[W.$W];
                case "H":
                  return String(E);
                case "HH":
                  return H.s(E, 2, "0");
                case "h":
                  return le(1);
                case "hh":
                  return le(2);
                case "a":
                  return ee(E, F, true);
                case "A":
                  return ee(E, F, false);
                case "m":
                  return String(F);
                case "mm":
                  return H.s(F, 2, "0");
                case "s":
                  return String(W.$s);
                case "ss":
                  return H.s(W.$s, 2, "0");
                case "SSS":
                  return H.s(W.$ms, 3, "0");
                case "Z":
                  return U;
              }
              return null;
            })(se) || U.replace(":", "");
          }));
        }, Z.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, Z.diff = function(A, W, k) {
          var X, U = this, E = H.p(W), F = z(A), G = (F.utcOffset() - this.utcOffset()) * r, ae = this - F, ue = function() {
            return H.m(U, F);
          };
          switch (E) {
            case O:
              X = ue() / 12;
              break;
            case w:
              X = ue();
              break;
            case C:
              X = ue() / 3;
              break;
            case g:
              X = (ae - G) / 6048e5;
              break;
            case p:
              X = (ae - G) / 864e5;
              break;
            case m:
              X = ae / a;
              break;
            case s:
              X = ae / r;
              break;
            case f:
              X = ae / n;
              break;
            default:
              X = ae;
          }
          return k ? X : H.a(X);
        }, Z.daysInMonth = function() {
          return this.endOf(w).$D;
        }, Z.$locale = function() {
          return P[this.$L];
        }, Z.locale = function(A, W) {
          if (!A) return this.$L;
          var k = this.clone(), X = j(A, W, true);
          return X && (k.$L = X), k;
        }, Z.clone = function() {
          return H.w(this.$d, this);
        }, Z.toDate = function() {
          return new Date(this.valueOf());
        }, Z.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, Z.toISOString = function() {
          return this.$d.toISOString();
        }, Z.toString = function() {
          return this.$d.toUTCString();
        }, q;
      })(), Q = L.prototype;
      return z.prototype = Q, [["$ms", u], ["$s", f], ["$m", s], ["$H", m], ["$W", p], ["$M", w], ["$y", O], ["$D", b]].forEach((function(q) {
        Q[q[1]] = function(Z) {
          return this.$g(Z, q[0], q[1]);
        };
      })), z.extend = function(q, Z) {
        return q.$i || (q(Z, L, z), q.$i = true), z;
      }, z.locale = j, z.isDayjs = V, z.unix = function(q) {
        return z(1e3 * q);
      }, z.en = P[R], z.Ls = P, z.p = {}, z;
    }));
  })(ru)), ru.exports;
}
var n1 = nu.exports, gh;
function r1() {
  return gh || (gh = 1, (function(e, o) {
    (function(n, r) {
      e.exports = r(t1());
    })(n1, (function(n) {
      function r(f) {
        return f && typeof f == "object" && "default" in f ? f : { default: f };
      }
      var a = r(n), u = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(f, s) {
        return s === "W" ? f + "周" : f + "日";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(f, s) {
        var m = 100 * f + s;
        return m < 600 ? "凌晨" : m < 900 ? "早上" : m < 1100 ? "上午" : m < 1300 ? "中午" : m < 1800 ? "下午" : "晚上";
      } };
      return a.default.locale(u, null, true), u;
    }));
  })(nu)), nu.exports;
}
r1();
var yh = { formatYear: "YYYY 年", formatMonth: "YYYY 年 MM 月", monthBeforeYear: false, monthFormat: "M月", yearFormat: "YYYY年", today: "今天", view: { month: "月", year: "年", week: "周", day: "日" }, month: { long: { January: "一月", February: "二月", March: "三月", April: "四月", May: "五月", June: "六月", July: "七月", August: "八月", September: "九月", October: "十月", November: "十一月", December: "十二月" }, short: { January: "一月", February: "二月", March: "三月", April: "四月", May: "五月", June: "六月", July: "七月", August: "八月", September: "九月", October: "十月", November: "十一月", December: "十二月" } }, week: { long: { self: "周", monday: "周一", tuesday: "周二", wednesday: "周三", thursday: "周四", friday: "周五", saturday: "周六", sunday: "周日" }, short: { self: "周", monday: "一", tuesday: "二", wednesday: "三", thursday: "四", friday: "五", saturday: "六", sunday: "日" } } };
const r0 = { locale: "zh-CN", dayjsLocale: "zh-cn", Calendar: yh, DatePicker: { Calendar: yh, placeholder: { date: "请选择日期", week: "请选择周", month: "请选择月份", year: "请选择年份", quarter: "请选择季度" }, placeholders: { date: ["开始日期", "结束日期"], week: ["开始周", "结束周"], month: ["开始月份", "结束月份"], year: ["开始年份", "结束年份"], quarter: ["开始季度", "结束季度"] }, selectTime: "选择时间", selectDate: "选择日期", today: "今天", now: "此刻", ok: "确定" }, Drawer: { okText: "确定", cancelText: "取消" }, Empty: { noData: "暂无数据" }, Modal: { okText: "确定", cancelText: "取消" }, Pagination: { goto: "前往", page: "页", countPerPage: "条/页", total: "共 {0} 条", prev: "上一页", next: "下一页", currentPage: "第 {0} 页", prevSomePages: "向前 {0} 页", nextSomePages: "向后 {0} 页", pageSize: "页码" }, Popconfirm: { okText: "确定", cancelText: "取消" }, Table: { okText: "确定", resetText: "重置", sortAscend: "点击升序", sortDescend: "点击降序", cancelSort: "取消排序" }, TimePicker: { ok: "确定", placeholder: "请选择时间", placeholders: ["开始时间", "结束时间"], now: "此刻" }, Progress: { success: "完成", error: "失败" }, Upload: { start: "开始", cancel: "取消", delete: "删除", reupload: "点击重试", upload: "点击上传", preview: "预览", drag: "点击或拖拽文件到此处上传", dragHover: "释放文件并开始上传", error: "上传失败" }, Typography: { copy: "复制", copied: "已复制", edit: "编辑", fold: "折叠", unfold: "展开" }, Transfer: { resetText: "重置" }, ImagePreview: { fullScreen: "全屏", rotateRight: "向右旋转", rotateLeft: "向左旋转", zoomIn: "放大", zoomOut: "缩小", originalSize: "原始尺寸" }, Form: { validateMessages: { required: "#{field} 是必填项", type: { string: "#{field} 不是合法的文本类型", number: "#{field} 不是合法的数字类型", boolean: "#{field} 不是合法的布尔类型", array: "#{field} 不是合法的数组类型", object: "#{field} 不是合法的对象类型", url: "#{field} 不是合法的 url 地址", email: "#{field} 不是合法的邮箱地址", ip: "#{field} 不是合法的 IP 地址" }, number: { min: "`#{value}` 小于最小值 `#{min}`", max: "`#{value}` 大于最大值 `#{max}`", equal: "`#{value}` 不等于 `#{equal}`", range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内", positive: "`#{value}` 不是正数", negative: "`#{value}` 不是负数" }, array: { length: "`#{field}` 个数不等于 #{length}", minLength: "`#{field}` 个数最少为 #{minLength}", maxLength: "`#{field}` 个数最多为 #{maxLength}", includes: "#{field} 不包含 #{includes}", deepEqual: "#{field} 不等于 #{deepEqual}", empty: "`#{field}` 不是空数组" }, string: { minLength: "字符数最少为 #{minLength}", maxLength: "字符数最多为 #{maxLength}", length: "字符数必须是 #{length}", match: "`#{value}` 不符合模式 #{pattern}", uppercase: "`#{value}` 必须全大写", lowercase: "`#{value}` 必须全小写" }, object: { deepEqual: "`#{field}` 不等于期望值", hasKeys: "`#{field}` 不包含必须字段", empty: "`#{field}` 不是对象" }, boolean: { true: "期望是 `true`", false: "期望是 `false`" } } }, ColorPicker: { history: "最近使用颜色", preset: "系统预设颜色", empty: "暂无", singleColor: "单色", gradientColor: "渐变色" } };
function _h(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wh(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? _h(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _h(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function i1(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = wh(wh({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-empty") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z" }));
}
var Yd = h.forwardRef(i1);
Yd.defaultProps = { isIcon: true };
Yd.displayName = "IconEmpty";
var ld = function() {
  return ld = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, ld.apply(this, arguments);
};
function Ot(e, o) {
  var n = ld({}, e);
  return o.forEach(function(r) {
    r in n && delete n[r];
  }), n;
}
var cu = function() {
  return cu = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, cu.apply(this, arguments);
};
function Dt(e, o, n) {
  var r = e._ignorePropsFromGlobal, a = _.useMemo(function() {
    return cu(cu({}, o), r ? {} : n);
  }, [o, n, r]), u = _.useMemo(function() {
    var f = Ot(e, ["_ignorePropsFromGlobal"]);
    for (var s in a) f[s] === void 0 && (f[s] = a[s]);
    return f;
  }, [e, a]);
  return u;
}
var ud = function() {
  return ud = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, ud.apply(this, arguments);
}, a1 = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function o1(e, o) {
  var n = _.useContext(Ye), r = n.getPrefixCls, a = n.locale, u = n.componentConfig, f = Dt(e, {}, u == null ? void 0 : u.Empty), s = f.style, m = f.className, p = f.description, g = f.icon, w = f.imgSrc, C = a1(f, ["style", "className", "description", "icon", "imgSrc"]), O = r("empty"), b = he(O, m), S = a.Empty.noData, x = typeof p == "string" ? p : "empty";
  return h.createElement("div", ud({ ref: o, className: b, style: s }, C), h.createElement("div", { className: O + "-wrapper" }, h.createElement("div", { className: O + "-image" }, w ? h.createElement("img", { alt: x, src: w }) : g || h.createElement(Yd, null)), h.createElement("div", { className: O + "-description" }, p || S)));
}
var i0 = _.forwardRef(o1);
i0.displayName = "Empty";
const l1 = _.memo(i0);
var sd = function() {
  return sd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, sd.apply(this, arguments);
};
function u1(e) {
  return h.createElement(l1, null);
}
var a0 = { locale: r0, prefixCls: "arco", getPopupContainer: function() {
  return document.body;
}, size: "default", renderEmpty: u1, focusLock: { modal: { autoFocus: true }, drawer: { autoFocus: true } } }, Ye = _.createContext(sd({ getPrefixCls: function(e, o) {
  return (o || "arco") + "-" + e;
} }, a0)), s1 = /* @__PURE__ */ (function() {
  var e = function(o, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (r[u] = a[u]);
    }, e(o, n);
  };
  return function(o, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(o, n);
    function r() {
      this.constructor = o;
    }
    o.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
})(), yo = function() {
  return yo = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, yo.apply(this, arguments);
}, o0 = (function(e) {
  s1(o, e);
  function o(n) {
    var r = e.call(this, n) || this;
    return r.getRootDOMNode = function() {
      return r.rootDOMRef.current;
    }, r.startTimer = function() {
      var a = r.props, u = a.duration, f = a.onClose, s = a.id;
      u !== 0 && (r.timer = window.setTimeout(function() {
        f && f(s), r.removeTimer();
      }, u));
    }, r.removeTimer = function() {
      r.timer && (window.clearTimeout(r.timer), r.timer = null);
    }, r.onClose = function() {
      r.props.onClose && r.props.onClose(r.props.id);
    }, r.renderIcon = function() {
      var a = r.props, u = a.showIcon, f = a.icon, s = a.type, m = a.prefixCls, p = a.iconPrefix, g;
      if (f) g = f;
      else if (u) {
        switch (s) {
          case "info":
            g = h.createElement(Hd, null);
            break;
          case "success":
            g = h.createElement(Vd, null);
            break;
          case "error":
            g = h.createElement(Fd, null);
            break;
          case "warning":
            g = h.createElement(Wd, null);
            break;
          case "loading":
            g = h.createElement(ui, null);
            break;
        }
        g = h.createElement(wt.Provider, { value: p ? { prefixCls: p } : {} }, g);
      }
      return h.createElement("span", { className: m + "-icon" }, g);
    }, r.onMouseEnter = function() {
      r.removeTimer();
    }, r.onMouseLeave = function() {
      r.removeTimer(), r.startTimer();
    }, r.rootDOMRef = _.createRef(), r;
  }
  return o.prototype.componentDidMount = function() {
    this.startTimer();
  }, o.prototype.componentDidUpdate = function(n) {
    (n.duration !== this.props.duration || this.props.update) && (this.removeTimer(), this.startTimer());
  }, o.prototype.componentWillUnmount = function() {
    this.removeTimer();
  }, o.prototype.render = function() {
    var n, r = this.props, a = r.title, u = r.content, f = r.showIcon, s = r.className, m = r.style, p = r.type, g = r.btn, w = r.icon, C = r.prefixCls, O = r.closable, b = r.noticeType, S = r.iconPrefix, x = r.rtl, B = r.closeIcon, I = r.classPrefixCls, D = he(C, C + "-" + p, (n = {}, n[C + "-closable"] = O, n[C + "-rtl"] = x, n), s), T = "closable" in this.props ? O : true, R = f;
    p === "normal" && !w && (R = false);
    var P = yo({}, this.context);
    if (I && (P.prefixCls = I), b === "message") return T = O, h.createElement(jo, yo({}, P, { effectGlobalModal: false, effectGlobalNotice: false }), h.createElement("div", { style: { textAlign: "center" }, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, ref: this.rootDOMRef }, h.createElement("div", { className: D, style: m, role: "alert" }, R && this.renderIcon(), h.createElement("span", { className: C + "-content" }, u), T && (B !== void 0 ? h.createElement("span", { onClick: this.onClose, className: C + "-close-btn" }, B) : h.createElement(kr, { prefix: C, className: C + "-close-btn", onClick: this.onClose }, h.createElement(Nr, null))))));
    if (b === "notification") return h.createElement(jo, yo({}, P, { effectGlobalModal: false, effectGlobalNotice: false }), h.createElement("div", { ref: this.rootDOMRef, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }, h.createElement("div", { className: D, style: m, role: "alert" }, R && h.createElement("div", { className: C + "-left" }, this.renderIcon()), h.createElement("div", { className: C + "-right" }, a && h.createElement("div", { className: C + "-title" }, a), h.createElement("div", { className: C + "-content" }, u), g && h.createElement("div", { className: C + "-btn-wrapper" }, g)), T && (B !== void 0 ? h.createElement("span", { onClick: this.onClose, className: C + "-close-btn" }, B) : h.createElement(kr, { prefix: C, className: C + "-close-btn", onClick: this.onClose }, h.createElement(wt.Provider, { value: S ? { prefixCls: S } : {} }, h.createElement(Nr, null)))))));
  }, o.defaultProps = { type: "info", showIcon: true, noticeType: "message", duration: 3e3 }, o.contextType = Ye, o;
})(_.Component), Ch = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, xh = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
}, l0 = _.forwardRef(function(e, o) {
  var n = _.useContext(Ye), r = Ch(_.useState([]), 2), a = r[0], u = r[1];
  function f(p) {
    u(function(g) {
      return xh(xh([], Ch(g), false), [p], false);
    });
  }
  function s(p) {
    u(function(g) {
      return g.filter(function(w) {
        return p !== w;
      });
    });
  }
  function m() {
    return n;
  }
  return _.useImperativeHandle(o, function() {
    return { addInstance: f, removeInstance: s, getContextConfig: m };
  }), h.createElement(h.Fragment, null, h.Children.map(a, function(p, g) {
    return h.cloneElement(p, { key: g });
  }));
}), Pi = function() {
  return Pi = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Pi.apply(this, arguments);
};
function c1(e) {
  e === void 0 && (e = {});
  var o = e.maxCount, n = e.duration, r = n === void 0 ? 3e3 : n, a = e.prefixCls, u = _.useRef(), f = _.useMemo(function() {
    return h.createElement(l0, { ref: u });
  }, []), s = {}, m;
  function p(w) {
    var C, O;
    if (u.current) {
      var b = u.current.getContextConfig();
      O = b.rtl, C = b.prefixCls;
    }
    var S = a || C, x = Pi({ position: "top", duration: r }, w), B = x.position, I = x.transitionClassNames, D;
    if (s[B]) {
      var T = s[B].state.notices;
      if (T.length >= o) {
        var R = T[0];
        D = R.id, T.shift(), s[B].add(Pi(Pi({}, x), { id: D }));
      } else D = s[B].add(x);
    } else m = h.createElement(oi, { transitionClassNames: I, ref: function(M) {
      s[B] = M, s[B] && (D = s[B].add(x));
    }, prefixCls: S, rtl: O }), u.current.addInstance(m);
    var P = function() {
      s[B] && s[B].remove(D);
    };
    return P;
  }
  var g = {};
  return ["info", "success", "warning", "error", "normal"].forEach(function(w) {
    g[w] = function(C) {
      var O = Sa(C) ? { content: C } : C;
      return p(Pi(Pi({}, O), { type: w }));
    };
  }), [g, f];
}
var f1 = /* @__PURE__ */ (function() {
  var e = function(o, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (r[u] = a[u]);
    }, e(o, n);
  };
  return function(o, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(o, n);
    function r() {
      this.constructor = o;
    }
    o.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
})(), Pn = function() {
  return Pn = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Pn.apply(this, arguments);
}, d1 = ["info", "success", "error", "warning", "loading", "normal"], Bn = {}, u0, Oh, s0, cd, bh, Eh;
function c0(e) {
  var o = Pn({ position: "top", duration: s0 }, e), n = o.position, r = o.transitionClassNames, a = o.transitionTimeout, u, f = Bn[n] || {}, s = f.instance, m = f.pending;
  if (s || m) {
    var p = function() {
      var C = (Bn[n] || {}).instance, O = C.state.notices, b = O.find(function(x) {
        return x.id === e.id;
      }), S = Pn(Pn({}, o), { update: b });
      O.length >= u0 ? b ? C.add(Pn(Pn({}, S), { id: b.id })) : (O.shift(), C.add(S)) : u = C.add(S);
    };
    s ? p() : m != null && m.then && m.then(function() {
      p(), Bn[n].pending = null;
    });
  } else {
    var g = document.createElement("div");
    (cd || document.body).appendChild(g), Bn[n] = {}, Bn[n].pending = new Promise(function(C) {
      t0(h.createElement(oi, { transitionClassNames: r, transitionTimeout: a, ref: function(O) {
        Bn[n] || (Bn[n] = {}), Bn[n].instance = O, u = O.add(o), C(null);
      } }), g);
    });
  }
  var w = function() {
    var C, O;
    (O = (C = Bn[n]) === null || C === void 0 ? void 0 : C.instance) === null || O === void 0 || O.remove(u);
  };
  return w;
}
var oi = (function(e) {
  f1(o, e);
  function o() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.remove = function(r) {
      var a = n.state.notices.find(function(u) {
        return u.id === r;
      });
      a && n.update(Pn(Pn({}, a), { style: Pn(Pn({}, a.style), { opacity: 0 }) })), setTimeout(function() {
        e.prototype.remove.call(n, r);
      }, 100);
    }, n;
  }
  return o.prototype.render = function() {
    var n = this, r = this.props, a = r.transitionClassNames, u = r.transitionTimeout, f = r.prefixCls, s = r.rtl, m = r.closable, p = this.state, g = p.notices, w = p.position, C = f || Oh, O = gn(s) ? bh : s, b = gn(m) ? Eh : m, S = C ? C + "-message" : "arco-message", x = { enter: Rt(u == null ? void 0 : u.enter) ? u == null ? void 0 : u.enter : 100, exit: Rt(u == null ? void 0 : u.exit) ? u == null ? void 0 : u.exit : 300 }, B = he(S + "-wrapper", S + "-wrapper-" + w);
    return h.createElement("div", { className: B }, h.createElement(zo, { component: null }, g.map(function(I) {
      return h.createElement(Ri, { key: I.id, timeout: x, classNames: a || "fadeMessage", onExit: function(D) {
        D && (D.style.height = D.scrollHeight + "px");
      }, onExiting: function(D) {
        D && (D.style.height = 0);
      }, onExited: function(D) {
        D && (D.style.height = 0, I.onClose && I.onClose());
      } }, h.createElement(o0, Pn({}, I, { prefixCls: S, classPrefixCls: C, iconPrefix: C, onClose: n.remove, noticeType: "message", rtl: O }, gn(b) ? {} : { closable: b })));
    })));
  }, o.config = function(n) {
    n === void 0 && (n = {}), Rt(n.maxCount) && (u0 = n.maxCount), n.prefixCls && (Oh = n.prefixCls), Rt(n.duration) && (s0 = n.duration), typeof n.rtl == "boolean" && (bh = n.rtl), typeof n.closable == "boolean" && (Eh = n.closable), n.getContainer && n.getContainer() !== cd && (cd = n.getContainer(), Object.values(Bn).forEach(function(r) {
      var a = r.instance;
      return a == null ? void 0 : a.clear();
    }), Bn = {});
  }, o.clear = function() {
    Object.values(Bn).forEach(function(n) {
      var r = n.instance;
      r == null || r.clear();
    });
  }, o.addInstance = c0, o;
})(n0);
d1.forEach(function(e) {
  oi[e] = function(o) {
    var n = typeof o == "string" ? { content: o } : o;
    return c0(Pn(Pn({}, n), { type: e }));
  };
});
oi.useMessage = c1;
var Ni = function() {
  return Ni = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Ni.apply(this, arguments);
};
function p1(e) {
  e === void 0 && (e = {});
  var o = e.maxCount, n = e.duration, r = n === void 0 ? 3e3 : n, a = e.prefixCls, u = e.getContainer, f = _.createRef(), s = h.createElement(l0, { ref: f }), m = {}, p;
  function g(C) {
    var O, b;
    if (f.current) {
      var S = f.current.getContextConfig();
      b = S.rtl, O = S.prefixCls;
    }
    var x = a || O, B = C.position;
    gn(C.position) && (B = b ? "topLeft" : "topRight");
    var I = B, D = Ni({ duration: r }, C), T;
    if (m[I]) {
      var R = m[I].state.notices;
      if (R.length >= o) {
        var P = R[0];
        T = P.id, R.shift(), m[I].add(Ni(Ni({}, D), { id: T }));
      } else T = m[I].add(D);
    } else p = h.createElement(No, { ref: function(M) {
      m[I] = M, m[I] && (T = m[I].add(D));
    }, prefixCls: x, rtl: b, getContainer: u }), f.current.addInstance(p);
    return m[I];
  }
  var w = {};
  return ["info", "success", "warning", "error", "normal"].forEach(function(C) {
    w[C] = function(O) {
      return g(Ni(Ni({}, O), { type: C }));
    };
  }), w.remove = function(C) {
    Object.keys(m).forEach(function(O) {
      var b;
      (b = m[O]) === null || b === void 0 || b.remove(C);
    });
  }, [w, s];
}
var v1 = /* @__PURE__ */ (function() {
  var e = function(o, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (r[u] = a[u]);
    }, e(o, n);
  };
  return function(o, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(o, n);
    function r() {
      this.constructor = o;
    }
    o.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
})(), mn = function() {
  return mn = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, mn.apply(this, arguments);
}, m1 = ["info", "success", "error", "warning", "normal"], Mn = {}, Sh, Ph, Nh, Ic, Gl, No = (function(e) {
  v1(o, e);
  function o() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.remove = function(r) {
      var a = n.state.notices.find(function(u) {
        return u.id === r;
      });
      a && n.update(mn(mn({}, a), { style: mn(mn({}, a.style), { opacity: 0 }) })), setTimeout(function() {
        e.prototype.remove.call(n, r);
      }, 200);
    }, n;
  }
  return o.prototype.render = function() {
    var n, r = this, a = this.state.notices, u = this.props, f = u.prefixCls, s = u.rtl, m = u.getContainer, p = this.state.position, g = gn(s) ? Gl : s;
    gn(p) && (p = g ? "topLeft" : "topRight");
    var w = f || Ph, C = w ? w + "-notification" : "arco-notification", O;
    p === "topLeft" || p === "bottomLeft" ? O = "slideNoticeLeft" : O = "slideNoticeRight";
    var b = he(C + "-wrapper", C + "-wrapper-" + p, (n = {}, n[C + "-wrapper-rtl"] = Gl, n)), S = m == null ? void 0 : m(), x = h.createElement("div", { className: b }, h.createElement(zo, { component: null }, a.map(function(B) {
      return h.createElement(Ri, { key: B.id, timeout: { enter: 400, exit: 300 }, classNames: O, onExit: function(I) {
        I && (I.style.height = I.scrollHeight + "px");
      }, onExiting: function(I) {
        I && (I.style.height = 0);
      }, onExited: function(I) {
        I && (I.style.height = 0, B.onClose && B.onClose());
      } }, h.createElement(o0, mn({}, B, { onClose: r.remove, prefixCls: C, iconPrefix: w, classPrefixCls: w, noticeType: "notification", rtl: g })));
    })));
    return S ? Qy.createPortal(x, S) : x;
  }, o.config = function(n) {
    n === void 0 && (n = {}), Rt(n.maxCount) && (Sh = n.maxCount), n.prefixCls && (Ph = n.prefixCls), Rt(n.duration) && (Nh = n.duration), typeof n.rtl == "boolean" && (Gl = n.rtl), n.getContainer && n.getContainer() !== Ic && (Ic = n.getContainer(), Object.values(Mn).forEach(function(r) {
      var a = r.instance;
      return a == null ? void 0 : a.clear();
    }), Mn = {});
  }, o.clear = function() {
    Object.values(Mn).forEach(function(n) {
      var r = n.instance;
      r == null || r.clear();
    });
  }, o.remove = function(n) {
    Object.values(Mn).forEach(function(r) {
      var a = r.instance;
      a == null || a.remove(n);
    });
  }, o.addInstance = function(n) {
    var r = n.position;
    gn(n.position) && (r = Gl ? "topLeft" : "topRight");
    var a = mn({ duration: Nh }, n), u = Mn[r] || {}, f = u.instance, s = u.pending;
    if (f || s) {
      var m = function() {
        var g = (Mn[r] || {}).instance, w = g.state.notices, C = w.find(function(b) {
          return b.id === n.id;
        }), O = mn(mn({}, a), { update: C });
        return w.length >= Sh ? C ? g.add(mn(mn({}, O), { id: C.id })) : (w.shift(), g.add(O)) : g.add(mn({}, O)), g;
      };
      return f ? m() : s != null && s.then && s.then(function() {
        m(), Mn[r].pending = null;
      }), f;
    }
    var p = document.createElement("div");
    return (Ic || document.body).appendChild(p), Mn[r] = {}, Mn[r].pending = new Promise(function(g) {
      t0(h.createElement(o, { ref: function(w) {
        return Mn[r] || (Mn[r] = {}), Mn[r].instance = w, w.add(a), g(null), w;
      } }), p);
    }), Mn[r].instance;
  }, o;
})(n0);
m1.forEach(function(e) {
  No[e] = function(o) {
    return No.addInstance(mn(mn({}, o), { type: e }));
  };
});
No.useNotification = p1;
var ko = function() {
  return ko = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, ko.apply(this, arguments);
}, f0 = {};
function h1(e) {
  f0 = ko({}, e);
}
function vP() {
  return f0;
}
var fd = { simple: true }, mP = function(e) {
  fd = ko(ko({}, fd), e);
}, hP = function() {
  return fd;
}, gP = [], fu = function() {
  return fu = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, fu.apply(this, arguments);
}, Yl = { primaryColor: { default: "--arcoblue-6", hover: "--arcoblue-5", active: "--arcoblue-7" }, successColor: { default: "--green-6", hover: "--green-5", active: "--green-7" }, infoColor: { default: "--arcoblue-6", hover: "--arcoblue-5", active: "--arcoblue-7" }, warningColor: { default: "--orangered-6", hover: "--orangered-5", active: "--orangered-7" }, dangerColor: { default: "--red-6", hover: "--red-5", active: "--red-7" } };
function g1(e) {
  if (e && He(e)) {
    var o = document.body;
    Object.keys(Yl).forEach(function(n) {
      e[n] && (o.style.setProperty(Yl[n].default, kc(e[n], 0)), e[n + "Hover"] || o.style.setProperty(Yl[n].hover, kc(e[n], 10)), e[n + "Active"] || o.style.setProperty(Yl[n].active, kc(e[n], -10)));
    });
  }
}
var y1 = a0, _1 = {};
function jo(e) {
  var o = Dt(e, y1, _1), n = o.theme, r = o.prefixCls, a = o.children, u = o.locale, f = o.rtl, s = o.effectGlobalNotice, m = s === void 0 ? true : s, p = o.effectGlobalModal, g = p === void 0 ? true : p;
  _.useEffect(function() {
    g1(n);
  }, [n]), _.useEffect(function() {
    m && (oi.config({ prefixCls: r, rtl: f }), No.config({ prefixCls: r, rtl: f }));
  }, [r, f, m]);
  function w(b, S) {
    return (S || r) + "-" + b;
  }
  var C = fu(fu({}, Ot(o, ["children"])), { getPrefixCls: w });
  _.useEffect(function() {
    g && h1({ locale: u, prefixCls: r, rtl: f });
  }, [u, r, f, g]);
  var O = a;
  return r && r !== "arco" && (O = h.createElement(wt.Provider, { value: { prefixCls: r } }, a)), h.createElement(Ye.Provider, { value: C }, O);
}
jo.ConfigContext = Ye;
jo.displayName = "ConfigProvider";
Ye.Consumer;
var Tc, kh;
function Lo() {
  if (kh) return Tc;
  kh = 1;
  function e(o) {
    var n = typeof o;
    return o != null && (n == "object" || n == "function");
  }
  return Tc = e, Tc;
}
var Mc, jh;
function w1() {
  if (jh) return Mc;
  jh = 1;
  var e = typeof Kl == "object" && Kl && Kl.Object === Object && Kl;
  return Mc = e, Mc;
}
var Rc, Ih;
function Eu() {
  if (Ih) return Rc;
  Ih = 1;
  var e = w1(), o = typeof self == "object" && self && self.Object === Object && self, n = e || o || Function("return this")();
  return Rc = n, Rc;
}
var Dc, Th;
function C1() {
  if (Th) return Dc;
  Th = 1;
  var e = Eu(), o = function() {
    return e.Date.now();
  };
  return Dc = o, Dc;
}
var zc, Mh;
function x1() {
  if (Mh) return zc;
  Mh = 1;
  var e = /\s/;
  function o(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); ) ;
    return r;
  }
  return zc = o, zc;
}
var Lc, Rh;
function O1() {
  if (Rh) return Lc;
  Rh = 1;
  var e = x1(), o = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(o, "");
  }
  return Lc = n, Lc;
}
var $c, Dh;
function Qd() {
  if (Dh) return $c;
  Dh = 1;
  var e = Eu(), o = e.Symbol;
  return $c = o, $c;
}
var Ac, zh;
function b1() {
  if (zh) return Ac;
  zh = 1;
  var e = Qd(), o = Object.prototype, n = o.hasOwnProperty, r = o.toString, a = e ? e.toStringTag : void 0;
  function u(f) {
    var s = n.call(f, a), m = f[a];
    try {
      f[a] = void 0;
      var p = true;
    } catch {
    }
    var g = r.call(f);
    return p && (s ? f[a] = m : delete f[a]), g;
  }
  return Ac = u, Ac;
}
var Vc, Lh;
function E1() {
  if (Lh) return Vc;
  Lh = 1;
  var e = Object.prototype, o = e.toString;
  function n(r) {
    return o.call(r);
  }
  return Vc = n, Vc;
}
var Fc, $h;
function d0() {
  if ($h) return Fc;
  $h = 1;
  var e = Qd(), o = b1(), n = E1(), r = "[object Null]", a = "[object Undefined]", u = e ? e.toStringTag : void 0;
  function f(s) {
    return s == null ? s === void 0 ? a : r : u && u in Object(s) ? o(s) : n(s);
  }
  return Fc = f, Fc;
}
var Hc, Ah;
function S1() {
  if (Ah) return Hc;
  Ah = 1;
  function e(o) {
    return o != null && typeof o == "object";
  }
  return Hc = e, Hc;
}
var Wc, Vh;
function Su() {
  if (Vh) return Wc;
  Vh = 1;
  var e = d0(), o = S1(), n = "[object Symbol]";
  function r(a) {
    return typeof a == "symbol" || o(a) && e(a) == n;
  }
  return Wc = r, Wc;
}
var Bc, Fh;
function P1() {
  if (Fh) return Bc;
  Fh = 1;
  var e = O1(), o = Lo(), n = Su(), r = NaN, a = /^[-+]0x[0-9a-f]+$/i, u = /^0b[01]+$/i, f = /^0o[0-7]+$/i, s = parseInt;
  function m(p) {
    if (typeof p == "number") return p;
    if (n(p)) return r;
    if (o(p)) {
      var g = typeof p.valueOf == "function" ? p.valueOf() : p;
      p = o(g) ? g + "" : g;
    }
    if (typeof p != "string") return p === 0 ? p : +p;
    p = e(p);
    var w = u.test(p);
    return w || f.test(p) ? s(p.slice(2), w ? 2 : 8) : a.test(p) ? r : +p;
  }
  return Bc = m, Bc;
}
var Uc, Hh;
function p0() {
  if (Hh) return Uc;
  Hh = 1;
  var e = Lo(), o = C1(), n = P1(), r = "Expected a function", a = Math.max, u = Math.min;
  function f(s, m, p) {
    var g, w, C, O, b, S, x = 0, B = false, I = false, D = true;
    if (typeof s != "function") throw new TypeError(r);
    m = n(m) || 0, e(p) && (B = !!p.leading, I = "maxWait" in p, C = I ? a(n(p.maxWait) || 0, m) : C, D = "trailing" in p ? !!p.trailing : D);
    function T(Q) {
      var q = g, Z = w;
      return g = w = void 0, x = Q, O = s.apply(Z, q), O;
    }
    function R(Q) {
      return x = Q, b = setTimeout(V, m), B ? T(Q) : O;
    }
    function P(Q) {
      var q = Q - S, Z = Q - x, A = m - q;
      return I ? u(A, C - Z) : A;
    }
    function M(Q) {
      var q = Q - S, Z = Q - x;
      return S === void 0 || q >= m || q < 0 || I && Z >= C;
    }
    function V() {
      var Q = o();
      if (M(Q)) return j(Q);
      b = setTimeout(V, P(Q));
    }
    function j(Q) {
      return b = void 0, D && g ? T(Q) : (g = w = void 0, O);
    }
    function z() {
      b !== void 0 && clearTimeout(b), x = 0, g = S = w = b = void 0;
    }
    function H() {
      return b === void 0 ? O : j(o());
    }
    function L() {
      var Q = o(), q = M(Q);
      if (g = arguments, w = this, S = Q, q) {
        if (b === void 0) return R(S);
        if (I) return clearTimeout(b), b = setTimeout(V, m), T(S);
      }
      return b === void 0 && (b = setTimeout(V, m)), O;
    }
    return L.cancel = z, L.flush = H, L;
  }
  return Uc = f, Uc;
}
var Kc, Wh;
function N1() {
  if (Wh) return Kc;
  Wh = 1;
  var e = p0(), o = Lo(), n = "Expected a function";
  function r(a, u, f) {
    var s = true, m = true;
    if (typeof a != "function") throw new TypeError(n);
    return o(f) && (s = "leading" in f ? !!f.leading : s, m = "trailing" in f ? !!f.trailing : m), e(a, u, { leading: s, maxWait: u, trailing: m });
  }
  return Kc = r, Kc;
}
var k1 = N1();
const j1 = Di(k1);
function Bh(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function Uh(e, o) {
  return (!o || e !== "hidden") && e !== "visible" && e !== "clip";
}
function qc(e, o) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return Uh(n.overflowY, o) || Uh(n.overflowX, o) || (function(r) {
      var a = (function(u) {
        if (!u.ownerDocument || !u.ownerDocument.defaultView) return null;
        try {
          return u.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(r);
      return !!a && (a.clientHeight < r.scrollHeight || a.clientWidth < r.scrollWidth);
    })(e);
  }
  return false;
}
function Ql(e, o, n, r, a, u, f, s) {
  return u < e && f > o || u > e && f < o ? 0 : u <= e && s <= n || f >= o && s >= n ? u - e - r : f > o && s < n || u < e && s > n ? f - o + a : 0;
}
var Kh = function(e, o) {
  var n = window, r = o.scrollMode, a = o.block, u = o.inline, f = o.boundary, s = o.skipOverflowHiddenElements, m = typeof f == "function" ? f : function(Ee) {
    return Ee !== f;
  };
  if (!Bh(e)) throw new TypeError("Invalid target");
  for (var p, g, w = document.scrollingElement || document.documentElement, C = [], O = e; Bh(O) && m(O); ) {
    if ((O = (g = (p = O).parentElement) == null ? p.getRootNode().host || null : g) === w) {
      C.push(O);
      break;
    }
    O != null && O === document.body && qc(O) && !qc(document.documentElement) || O != null && qc(O, s) && C.push(O);
  }
  for (var b = n.visualViewport ? n.visualViewport.width : innerWidth, S = n.visualViewport ? n.visualViewport.height : innerHeight, x = window.scrollX || pageXOffset, B = window.scrollY || pageYOffset, I = e.getBoundingClientRect(), D = I.height, T = I.width, R = I.top, P = I.right, M = I.bottom, V = I.left, j = a === "start" || a === "nearest" ? R : a === "end" ? M : R + D / 2, z = u === "center" ? V + T / 2 : u === "end" ? P : V, H = [], L = 0; L < C.length; L++) {
    var Q = C[L], q = Q.getBoundingClientRect(), Z = q.height, A = q.width, W = q.top, k = q.right, X = q.bottom, U = q.left;
    if (r === "if-needed" && R >= 0 && V >= 0 && M <= S && P <= b && R >= W && M <= X && V >= U && P <= k) return H;
    var E = getComputedStyle(Q), F = parseInt(E.borderLeftWidth, 10), G = parseInt(E.borderTopWidth, 10), ae = parseInt(E.borderRightWidth, 10), ue = parseInt(E.borderBottomWidth, 10), re = 0, ne = 0, le = "offsetWidth" in Q ? Q.offsetWidth - Q.clientWidth - F - ae : 0, ee = "offsetHeight" in Q ? Q.offsetHeight - Q.clientHeight - G - ue : 0, se = "offsetWidth" in Q ? Q.offsetWidth === 0 ? 0 : A / Q.offsetWidth : 0, ke = "offsetHeight" in Q ? Q.offsetHeight === 0 ? 0 : Z / Q.offsetHeight : 0;
    if (w === Q) re = a === "start" ? j : a === "end" ? j - S : a === "nearest" ? Ql(B, B + S, S, G, ue, B + j, B + j + D, D) : j - S / 2, ne = u === "start" ? z : u === "center" ? z - b / 2 : u === "end" ? z - b : Ql(x, x + b, b, F, ae, x + z, x + z + T, T), re = Math.max(0, re + B), ne = Math.max(0, ne + x);
    else {
      re = a === "start" ? j - W - G : a === "end" ? j - X + ue + ee : a === "nearest" ? Ql(W, X, Z, G, ue + ee, j, j + D, D) : j - (W + Z / 2) + ee / 2, ne = u === "start" ? z - U - F : u === "center" ? z - (U + A / 2) + le / 2 : u === "end" ? z - k + ae + le : Ql(U, k, A, F, ae + le, z, z + T, T);
      var Pe = Q.scrollLeft, De = Q.scrollTop;
      j += De - (re = Math.max(0, Math.min(De + re / ke, Q.scrollHeight - Z / ke + ee))), z += Pe - (ne = Math.max(0, Math.min(Pe + ne / se, Q.scrollWidth - A / se + le)));
    }
    H.push({ el: Q, top: re, left: ne });
  }
  return H;
};
function v0(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function I1(e, o) {
  o === void 0 && (o = "auto");
  var n = "scrollBehavior" in document.body.style;
  e.forEach(function(r) {
    var a = r.el, u = r.top, f = r.left;
    a.scroll && n ? a.scroll({ top: u, left: f, behavior: o }) : (a.scrollTop = u, a.scrollLeft = f);
  });
}
function T1(e) {
  return e === false ? { block: "end", inline: "nearest" } : v0(e) ? e : { block: "start", inline: "nearest" };
}
function M1(e, o) {
  var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (v0(o) && typeof o.behavior == "function") return o.behavior(n ? Kh(e, o) : []);
  if (n) {
    var r = T1(o);
    return I1(Kh(e, r), r.behavior);
  }
}
function Pu(e, o) {
  var n = {};
  return o.forEach(function(r) {
    var a = r;
    r in e && (n[a] = e[a]);
  }), n;
}
function zi(e) {
  var o = {};
  return e && Object.keys(e).forEach(function(n) {
    var r = String(n);
    r.indexOf("data-") === 0 && (o[r] = e[r]), r.indexOf("aria-") === 0 && (o[r] = e[r]);
  }), o;
}
var m0 = function() {
};
function yP(e) {
  return Array.apply(null, Array(e));
}
function h0(e) {
  return Pu(e, ["onMouseEnter", "onMouseLeave", "onMouseMove", "onContextMenu", "onClick", "onFocus", "onBlur", "tabIndex"]);
}
var $o = (function() {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return true;
  }
})(), Xt = /* @__PURE__ */ (function() {
  return $o ? m0 : function(e, o, n, r) {
    e && e.addEventListener(o, n, r || false);
  };
})(), Zt = /* @__PURE__ */ (function() {
  return $o ? m0 : function(e, o, n, r) {
    e && e.removeEventListener(o, n, r || false);
  };
})(), du = function(e, o) {
  if (!e) return false;
  if (e.contains) return e.contains(o);
  for (var n = o; n; ) {
    if (n === e) return true;
    n = n.parentNode;
  }
  return false;
}, g0 = function(e) {
  var o = e === document.documentElement ? e.clientHeight : e.offsetHeight, n = e === document.documentElement ? e.clientWidth : e.offsetWidth;
  return e.scrollHeight > o || e.scrollWidth > n;
}, R1 = function(e, o) {
  o === void 0 && (o = document.documentElement);
  for (var n = [], r = e; r && r !== o; ) g0(r) && n.push(r), r = r.parentElement;
  return n;
};
function Xd() {
  var e = _.useRef(true);
  return _.useEffect(function() {
    e.current = false;
  }, []), e.current;
}
var Ti = typeof window > "u" ? global : window, D1 = ["webkit", "ms", "moz", "o"], Un = Ti.requestAnimationFrame, Dn = Ti.cancelAnimationFrame;
if ((!Un || !Dn) && (D1.some(function(e) {
  return Un = Ti[e + "RequestAnimationFrame"], Dn = Ti[e + "CancelAnimationFrame"] || Ti[e + "CancelRequestAnimationFrame"], Un && Dn;
}), !Un || !Dn)) {
  var qh = 0;
  Un = function(e) {
    var o = Date.now(), n = Math.max(0, 16 - (o - qh)), r = setTimeout(function() {
      e(), qh = o + n;
    }, n);
    return r;
  }, Dn = function(e) {
    clearTimeout(e);
  };
}
Un = Un.bind(Ti);
Dn = Dn.bind(Ti);
var z1 = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, L1 = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
};
function Gh(e) {
  var o = null, n = function() {
    for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
    o && Dn(o), o = Un(function() {
      e.apply(void 0, L1([], z1(r), false)), o = null;
    });
  };
  return n.cancel = function() {
    Dn(o), o = null;
  }, n;
}
var y0 = (function() {
  if (typeof Map < "u") return Map;
  function e(o, n) {
    var r = -1;
    return o.some(function(a, u) {
      return a[0] === n ? (r = u, true) : false;
    }), r;
  }
  return (function() {
    function o() {
      this.__entries__ = [];
    }
    return Object.defineProperty(o.prototype, "size", { get: function() {
      return this.__entries__.length;
    }, enumerable: true, configurable: true }), o.prototype.get = function(n) {
      var r = e(this.__entries__, n), a = this.__entries__[r];
      return a && a[1];
    }, o.prototype.set = function(n, r) {
      var a = e(this.__entries__, n);
      ~a ? this.__entries__[a][1] = r : this.__entries__.push([n, r]);
    }, o.prototype.delete = function(n) {
      var r = this.__entries__, a = e(r, n);
      ~a && r.splice(a, 1);
    }, o.prototype.has = function(n) {
      return !!~e(this.__entries__, n);
    }, o.prototype.clear = function() {
      this.__entries__.splice(0);
    }, o.prototype.forEach = function(n, r) {
      r === void 0 && (r = null);
      for (var a = 0, u = this.__entries__; a < u.length; a++) {
        var f = u[a];
        n.call(r, f[1], f[0]);
      }
    }, o;
  })();
})(), dd = typeof window < "u" && typeof document < "u" && window.document === document, pu = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), $1 = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(pu) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
})(), A1 = 2;
function V1(e, o) {
  var n = false, r = false, a = 0;
  function u() {
    n && (n = false, e()), r && s();
  }
  function f() {
    $1(u);
  }
  function s() {
    var m = Date.now();
    if (n) {
      if (m - a < A1) return;
      r = true;
    } else n = true, r = false, setTimeout(f, o);
    a = m;
  }
  return s;
}
var F1 = 20, H1 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], W1 = typeof MutationObserver < "u", B1 = (function() {
  function e() {
    this.connected_ = false, this.mutationEventsAdded_ = false, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = V1(this.refresh.bind(this), F1);
  }
  return e.prototype.addObserver = function(o) {
    ~this.observers_.indexOf(o) || this.observers_.push(o), this.connected_ || this.connect_();
  }, e.prototype.removeObserver = function(o) {
    var n = this.observers_, r = n.indexOf(o);
    ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
  }, e.prototype.refresh = function() {
    var o = this.updateObservers_();
    o && this.refresh();
  }, e.prototype.updateObservers_ = function() {
    var o = this.observers_.filter(function(n) {
      return n.gatherActive(), n.hasActive();
    });
    return o.forEach(function(n) {
      return n.broadcastActive();
    }), o.length > 0;
  }, e.prototype.connect_ = function() {
    !dd || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), W1 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: true, childList: true, characterData: true, subtree: true })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = true), this.connected_ = true);
  }, e.prototype.disconnect_ = function() {
    !dd || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = false, this.connected_ = false);
  }, e.prototype.onTransitionEnd_ = function(o) {
    var n = o.propertyName, r = n === void 0 ? "" : n, a = H1.some(function(u) {
      return !!~r.indexOf(u);
    });
    a && this.refresh();
  }, e.getInstance = function() {
    return this.instance_ || (this.instance_ = new e()), this.instance_;
  }, e.instance_ = null, e;
})(), _0 = (function(e, o) {
  for (var n = 0, r = Object.keys(o); n < r.length; n++) {
    var a = r[n];
    Object.defineProperty(e, a, { value: o[a], enumerable: false, writable: false, configurable: true });
  }
  return e;
}), Oa = (function(e) {
  var o = e && e.ownerDocument && e.ownerDocument.defaultView;
  return o || pu;
}), w0 = Nu(0, 0, 0, 0);
function vu(e) {
  return parseFloat(e) || 0;
}
function Yh(e) {
  for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
  return o.reduce(function(r, a) {
    var u = e["border-" + a + "-width"];
    return r + vu(u);
  }, 0);
}
function U1(e) {
  for (var o = ["top", "right", "bottom", "left"], n = {}, r = 0, a = o; r < a.length; r++) {
    var u = a[r], f = e["padding-" + u];
    n[u] = vu(f);
  }
  return n;
}
function K1(e) {
  var o = e.getBBox();
  return Nu(0, 0, o.width, o.height);
}
function q1(e) {
  var o = e.clientWidth, n = e.clientHeight;
  if (!o && !n) return w0;
  var r = Oa(e).getComputedStyle(e), a = U1(r), u = a.left + a.right, f = a.top + a.bottom, s = vu(r.width), m = vu(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + u) !== o && (s -= Yh(r, "left", "right") + u), Math.round(m + f) !== n && (m -= Yh(r, "top", "bottom") + f)), !Y1(e)) {
    var p = Math.round(s + u) - o, g = Math.round(m + f) - n;
    Math.abs(p) !== 1 && (s -= p), Math.abs(g) !== 1 && (m -= g);
  }
  return Nu(a.left, a.top, s, m);
}
var G1 = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Oa(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Oa(e).SVGElement && typeof e.getBBox == "function";
  };
})();
function Y1(e) {
  return e === Oa(e).document.documentElement;
}
function Q1(e) {
  return dd ? G1(e) ? K1(e) : q1(e) : w0;
}
function X1(e) {
  var o = e.x, n = e.y, r = e.width, a = e.height, u = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, f = Object.create(u.prototype);
  return _0(f, { x: o, y: n, width: r, height: a, top: n, right: o + r, bottom: a + n, left: o }), f;
}
function Nu(e, o, n, r) {
  return { x: e, y: o, width: n, height: r };
}
var Z1 = (function() {
  function e(o) {
    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Nu(0, 0, 0, 0), this.target = o;
  }
  return e.prototype.isActive = function() {
    var o = Q1(this.target);
    return this.contentRect_ = o, o.width !== this.broadcastWidth || o.height !== this.broadcastHeight;
  }, e.prototype.broadcastRect = function() {
    var o = this.contentRect_;
    return this.broadcastWidth = o.width, this.broadcastHeight = o.height, o;
  }, e;
})(), J1 = /* @__PURE__ */ (function() {
  function e(o, n) {
    var r = X1(n);
    _0(this, { target: o, contentRect: r });
  }
  return e;
})(), ex = (function() {
  function e(o, n, r) {
    if (this.activeObservations_ = [], this.observations_ = new y0(), typeof o != "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
    this.callback_ = o, this.controller_ = n, this.callbackCtx_ = r;
  }
  return e.prototype.observe = function(o) {
    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(o instanceof Oa(o).Element)) throw new TypeError('parameter 1 is not of type "Element".');
      var n = this.observations_;
      n.has(o) || (n.set(o, new Z1(o)), this.controller_.addObserver(this), this.controller_.refresh());
    }
  }, e.prototype.unobserve = function(o) {
    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(o instanceof Oa(o).Element)) throw new TypeError('parameter 1 is not of type "Element".');
      var n = this.observations_;
      n.has(o) && (n.delete(o), n.size || this.controller_.removeObserver(this));
    }
  }, e.prototype.disconnect = function() {
    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
  }, e.prototype.gatherActive = function() {
    var o = this;
    this.clearActive(), this.observations_.forEach(function(n) {
      n.isActive() && o.activeObservations_.push(n);
    });
  }, e.prototype.broadcastActive = function() {
    if (this.hasActive()) {
      var o = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
        return new J1(r.target, r.broadcastRect());
      });
      this.callback_.call(o, n, o), this.clearActive();
    }
  }, e.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  }, e.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  }, e;
})(), C0 = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new y0(), x0 = /* @__PURE__ */ (function() {
  function e(o) {
    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
    var n = B1.getInstance(), r = new ex(o, n, this);
    C0.set(this, r);
  }
  return e;
})();
["observe", "unobserve", "disconnect"].forEach(function(e) {
  x0.prototype[e] = function() {
    var o;
    return (o = C0.get(this))[e].apply(o, arguments);
  };
});
var O0 = (function() {
  return typeof pu.ResizeObserver < "u" ? pu.ResizeObserver : x0;
})(), tx = /* @__PURE__ */ (function() {
  var e = function(o, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (r[u] = a[u]);
    }, e(o, n);
  };
  return function(o, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(o, n);
    function r() {
      this.constructor = o;
    }
    o.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
})(), jr = (function(e) {
  tx(o, e);
  function o() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.getRootElement = function() {
      var r = n.props.getTargetDOMNode;
      return bu((r == null ? void 0 : r()) || n.rootDOMRef, n);
    }, n.getRootDOMNode = function() {
      return n.getRootElement();
    }, n.componentWillUnmount = function() {
      n.resizeFrameId && (cancelAnimationFrame(n.resizeFrameId), n.resizeFrameId = null), n.resizeObserver && n.destroyResizeObserver();
    }, n.createResizeObserver = function() {
      var r = n.props, a = r.throttle, u = a === void 0 ? true : a, f = r.delayOnResizeByRaf, s = f === void 0 ? false : f, m = function(C) {
        var O, b;
        (b = (O = n.props).onResize) === null || b === void 0 || b.call(O, C);
      }, p = u ? j1(m) : m, g = true;
      n.resizeObserver = new O0(function(C) {
        if (g && (g = false, m(C)), s) {
          n.latestEntry = C, n.resizeFrameId || (n.resizeFrameId = requestAnimationFrame(function() {
            n.resizeFrameId = null, p(n.latestEntry);
          }));
          return;
        }
        p(C);
      });
      var w = n.getRootElement();
      w && n.resizeObserver.observe(w);
    }, n.destroyResizeObserver = function() {
      n.resizeObserver && n.resizeObserver.disconnect(), n.resizeObserver = null, n.latestEntry = null;
    }, n;
  }
  return o.prototype.componentDidMount = function() {
    h.isValidElement(this.props.children) ? this.createResizeObserver() : console.warn("The children of ResizeObserver is invalid.");
  }, o.prototype.componentDidUpdate = function() {
    !this.resizeObserver && this.getRootElement() && this.createResizeObserver();
  }, o.prototype.render = function() {
    var n = this, r = this.props.children;
    return Bd(r) && _.isValidElement(r) && !this.props.getTargetDOMNode ? _.cloneElement(r, { ref: function(a) {
      n.rootDOMRef = a, Gd(r, a);
    } }) : (this.rootDOMRef = null, this.props.children);
  }, o;
})(h.Component), Zd = $o ? _.useEffect : _.useLayoutEffect, nx = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function b0(e) {
  var o = nx(_.useState({ value: e, resolve: function(a) {
  } }), 2), n = o[0], r = o[1];
  return _.useEffect(function() {
    n.resolve(n.value);
  }, [n]), [n.value, function(a) {
    return new Promise(function(u) {
      r(function(f) {
        var s = a;
        return typeof a == "function" && (s = a(f.value)), { value: s, resolve: u };
      });
    });
  }];
}
var pd = function() {
  return pd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, pd.apply(this, arguments);
}, rx = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function ix(e, o) {
  var n = e.className, r = e.style, a = e.children, u = rx(e, ["className", "style", "children"]), f = _.useContext(Ye).getPrefixCls, s = f("btn-group"), m = he(s, n);
  return h.createElement("div", pd({ ref: o, className: m, style: r }, u), a);
}
var E0 = h.forwardRef(ix);
E0.displayName = "ButtonGroup";
var _o = function() {
  return _o = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, _o.apply(this, arguments);
}, ax = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, ox = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, lx = /^[\u4e00-\u9fa5]{2}$/;
function ux(e) {
  var o = [], n = false;
  return h.Children.forEach(e, function(r) {
    var a = typeof r == "string" || typeof r == "number";
    if (a && n) {
      var u = o.length - 1, f = o[u];
      o[u] = "" + f + r;
    } else o.push(r);
    n = a;
  }), h.Children.map(o, function(r) {
    return typeof r == "string" ? h.createElement("span", null, r) : r;
  });
}
var sx = { htmlType: "button", type: "default", shape: "square" };
function cx(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.size, f = r.autoInsertSpaceInButton, s = r.componentConfig, m = r.rtl, p = Dt(e, sx, s == null ? void 0 : s.Button), g = p.style, w = p.className, C = p.children, O = p.htmlType, b = p.type, S = p.status, x = p.size, B = p.shape, I = p.href, D = p.anchorProps, T = p.disabled, R = p.loading, P = p.loadingFixedWidth, M = p.icon, V = p.iconOnly, j = p.onClick, z = p.long, H = ax(p, ["style", "className", "children", "htmlType", "type", "status", "size", "shape", "href", "anchorProps", "disabled", "loading", "loadingFixedWidth", "icon", "iconOnly", "onClick", "long"]), L = R ? h.createElement(ui, null) : M, Q = ox(_.useState(false), 2), q = Q[0], Z = Q[1], A = _.useRef(), W = o || A;
  _.useEffect(function() {
    if (f && W && W.current) {
      var ae = W.current.textContent;
      lx.test(ae) ? q || Z(true) : q && Z(false);
    }
  }, [W.current, f]);
  var k = a("btn"), X = b === "default" ? "secondary" : b, U = he(k, k + "-" + X, k + "-size-" + (x || u), k + "-shape-" + B, (n = {}, n[k + "-long"] = z, n[k + "-status-" + S] = S, n[k + "-loading-fixed-width"] = P, n[k + "-loading"] = R, n[k + "-link"] = I, n[k + "-icon-only"] = V || !C && C !== 0 && L, n[k + "-disabled"] = T, n[k + "-two-chinese-chars"] = q, n[k + "-rtl"] = m, n), w), E = function(ae) {
    if (R || T) {
      typeof (ae == null ? void 0 : ae.preventDefault) == "function" && ae.preventDefault();
      return;
    }
    j && j(ae);
  }, F = h.createElement(h.Fragment, null, L, ux(C));
  if (I) {
    var G = _o({}, D);
    return T ? delete G.href : G.href = I, h.createElement("a", _o({ ref: W }, H, G, { style: g, className: U, onClick: E }), F);
  }
  return h.createElement("button", _o({ ref: W }, H, { style: g, className: U, type: O, disabled: T, onClick: E }), F);
}
var fx = _.forwardRef(cx), mt = fx;
mt.__BYTE_BUTTON = true;
mt.Group = E0;
mt.displayName = "Button";
function Qh(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Xh(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Qh(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function dx(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = Xh(Xh({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-search") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485" }));
}
var Io = h.forwardRef(dx);
Io.defaultProps = { isIcon: true };
Io.displayName = "IconSearch";
function Jd(e) {
  var o = _.useRef();
  return _.useEffect(function() {
    o.current = e;
  }), o.current;
}
var px = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function Ut(e, o) {
  var n = o || {}, r = n.defaultValue, a = n.value, u = _.useRef(true), f = Jd(a), s = px(_.useState(gn(a) ? gn(r) ? e : r : a), 2), m = s[0], p = s[1];
  _.useEffect(function() {
    if (u.current) {
      u.current = false;
      return;
    }
    a === void 0 && f !== a && p(a);
  }, [a]);
  var g = gn(a) ? m : a;
  return [g, p, m];
}
var vd = function() {
  return vd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, vd.apply(this, arguments);
}, vx = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, mx = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, S0 = h.forwardRef(function(e, o) {
  var n, r = _.useContext(Ye).getPrefixCls, a = e.className, u = e.style, f = e.placeholder, s = e.disabled, m = e.searchButton, p = e.loading, g = e.defaultValue, w = e.addAfter, C = e.suffix, O = vx(e, ["className", "style", "placeholder", "disabled", "searchButton", "loading", "defaultValue", "addAfter", "suffix"]), b = He(e.maxLength) ? e.maxLength.length : e.maxLength, S = He(e.maxLength) && e.maxLength.errorOnly ? void 0 : b, x = mx(Ut("", { defaultValue: "defaultValue" in e ? ba(e.defaultValue, S) : void 0, value: "value" in e ? ba(e.value, S) : void 0 }), 2), B = x[0], I = x[1], D = r("input-search"), T = he(D, (n = {}, n[D + "-button"] = m, n), a), R = function() {
    !s && e.onSearch && e.onSearch(B);
  };
  return h.createElement(nr, vd({}, Ot(O, ["onSearch"]), { disabled: s, className: T, style: u, ref: o, placeholder: f, addAfter: w !== void 0 ? w : m ? h.createElement(mt, { disabled: s, size: O.size, className: D + "-btn", type: "primary", onClick: R, loading: p, loadingFixedWidth: true, icon: m === true && !p && h.createElement(Io, null) }, m !== true && m) : null, suffix: C !== void 0 ? C : !m && (p ? h.createElement(ui, null) : h.createElement(Io, { onClick: R })), onChange: function(P, M) {
    I(P), e.onChange && e.onChange(P, M);
  }, defaultValue: g, onPressEnter: function(P) {
    R(), e.onPressEnter && e.onPressEnter(P);
  } }));
});
S0.displayName = "Search";
var hx = `
  position: absolute;
  min-height: 0 !important;
  max-height: none;
  height:0;
  visibility: hidden;
  z-index: -100;
  top: 0;
  right: 0;
`, gx = ["border-width", "box-sizing", "font-family", "font-weight", "font-size", "font-variant", "letter-spacing", "line-height", "padding-top", "padding-bottom", "padding-left", "padding-right", "text-indent", "text-rendering", "text-transform", "width"], ai;
function yx(e) {
  ai || (ai = document.createElement("textarea"), document.body.appendChild(ai));
  var o = window.getComputedStyle(e), n = `
    ` + gx.map(function(f) {
    return f + ":" + o.getPropertyValue(f);
  }).join(";") + `
  `;
  ai.setAttribute("style", "" + hx + n);
  var r = parseFloat(o.getPropertyValue("padding-top")) + parseFloat(o.getPropertyValue("padding-bottom")), a = o.getPropertyValue("box-sizing"), u = parseFloat(o.getPropertyValue("border-top-width")) + parseFloat(o.getPropertyValue("border-bottom-width"));
  return { paddingSize: r, boxSizing: a, borderSize: u };
}
function _x(e, o) {
  var n = function() {
    var B, I;
    return He(e) && (B = e.minRows, I = e.maxRows), { minRows: B, maxRows: I };
  };
  if (e) {
    var r = n(), a = r.minRows, u = r.maxRows, f = o, s = yx(f), m = s.paddingSize, p = s.boxSizing, g = s.borderSize;
    ai.value = f.value || f.placeholder || "";
    var w = ai.scrollHeight + g, C = void 0, O = void 0, b = void 0;
    if (a || u) {
      ai.value = "";
      var S = ai.scrollHeight - m;
      Rt(a) && (C = S * a, p === "border-box" && (C += m, C += g), w = Math.max(w, C)), Rt(u) && (O = S * u, p === "border-box" && (O += m, O += g), b = w > O ? "auto" : "", O = Math.min(w, O));
    }
    var x = {};
    return x.height = w, C && (x.minHeight = C), O && (x.maxHeight = O), b && (x.overflowY = b), x;
  }
}
var li = { key: "Enter", code: 13 }, md = { key: "Escape", code: 27 }, P0 = { code: 8 }, Zh = { key: "Tab", code: 9 }, N0 = { key: "ArrowUp", code: 38 }, k0 = { key: "ArrowDown", code: 40 }, j0 = { key: "ArrowLeft", code: 37 }, I0 = { key: "ArrowRight", code: 39 }, wx = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function T0(e) {
  var o = e.value, n = e.maxLength, r = e.onChange, a = e.onKeyDown, u = e.onPressEnter, f = e.beforeTriggerValueChangeCallback, s = e.normalizeHandler, m = _.useRef(false), p = wx(_.useState(""), 2), g = p[0], w = p[1], C = function(O, b) {
    f && f(O), r && O !== o && (n === void 0 || O.length <= n) && r(O, b);
  };
  return { compositionValue: g, triggerValueChangeCallback: C, compositionHandler: function(O) {
    m.current = O.type !== "compositionend", m.current || (w(void 0), C(O.target.value, O));
  }, valueChangeHandler: function(O) {
    var b = O.target.value;
    m.current ? (m.current = false, w(b)) : (g && w(void 0), C(b, O));
  }, keyDownHandler: function(O) {
    var b = O.keyCode || O.which;
    if (!m.current && (a && a(O), b === li.code)) {
      u && u(O);
      var S = s == null ? void 0 : s("onPressEnter");
      S && C(S(O.target.value), O);
    }
  } };
}
var fa = function() {
  return fa = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, fa.apply(this, arguments);
}, Cx = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Gc = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, xx = function(e, o) {
  var n, r, a, u = _.useContext(Ye), f = u.getPrefixCls, s = u.rtl, m = u.componentConfig, p = Dt(e, {}, m == null ? void 0 : m["Input.TextArea"]), g = p.className, w = p.style, C = p.wrapperStyle, O = p.placeholder, b = p.disabled, S = p.error, x = p.maxLength, B = p.showWordLimit, I = p.allowClear, D = p.onChange, T = p.onClear, R = p.onKeyDown, P = p.onPressEnter, M = p.status, V = p.clearIcon, j = p.wordLimitPosition, z = j === void 0 ? "inside" : j, H = Cx(p, ["className", "style", "wrapperStyle", "placeholder", "disabled", "error", "maxLength", "showWordLimit", "allowClear", "onChange", "onClear", "onKeyDown", "onPressEnter", "status", "clearIcon", "wordLimitPosition"]), L = He(x) ? x.length : x, Q = He(x) ? x.errorOnly ? void 0 : x.length : x, q = _.useRef(), Z = Gc(_.useState({}), 2), A = Z[0], W = Z[1], k = Gc(Ut("", { defaultValue: "defaultValue" in p ? ba(p.defaultValue, Q) : void 0, value: "value" in p ? ba(p.value, Q) : void 0 }), 2), X = k[0], U = k[1], E = T0({ value: X, maxLength: Q, onChange: D, onKeyDown: R, onPressEnter: P, beforeTriggerValueChangeCallback: function(we) {
    !("value" in p) && (Q === void 0 || we.length <= Q) && U(we);
  } }), F = E.compositionValue, G = E.compositionHandler, ae = E.valueChangeHandler, ue = E.keyDownHandler, re = E.triggerValueChangeCallback, ne = F || X || "", le = f("textarea"), ee = function() {
    if (q.current && q.current.focus) {
      if (q.current.setSelectionRange) {
        var we = q.current.textContent.length;
        q.current.setSelectionRange(we, we);
      }
      q.current.focus();
    }
  }, se = function() {
    var we = _x(p.autoSize, q.current);
    we && W(we);
  }, ke = function(we) {
    we.stopPropagation(), ee(), re("", we), T == null || T();
  };
  Zd(function() {
    se();
  }, [ne, b, p.autoSize]), _.useImperativeHandle(o, function() {
    return { dom: q.current, focus: function() {
      ee();
    }, blur: function() {
      q.current && q.current.blur && q.current.blur();
    }, getRootDOMNode: function() {
      return q.current;
    } };
  }, []);
  var Pe = X ? X.length : 0, De = !!(L && B), Ee = De || I, ce = De && z === "outside", fe = Gc(s ? [L, Pe] : [Pe, L], 2), be = fe[0], ze = fe[1], ge = De ? be + "/" + ze : "", Fe = _.useMemo(function() {
    return !Q && L ? Pe > L : false;
  }, [Pe, L, Q]), Qe = M || (S || Fe ? "error" : void 0), et = he(le, (n = {}, n[le + "-" + Qe] = Qe, n[le + "-disabled"] = b, n[le + "-rtl"] = s, n), g), xe = h.createElement("textarea", fa({}, Ot(H, ["autoSize", "defaultValue"]), { maxLength: Q, ref: q, style: fa(fa(fa({}, w), A), b ? { resize: "none" } : {}), className: et, placeholder: O, disabled: b, value: ne, onChange: ae, onKeyDown: ue, onCompositionStart: G, onCompositionUpdate: G, onCompositionEnd: G }));
  if (Ee) {
    var ye = !b && I && X;
    return h.createElement("div", { className: he(le + "-wrapper", (r = {}, r[le + "-clear-wrapper"] = I, r[le + "-wrapper-word-limit-outside"] = ce, r[le + "-wrapper-rtl"] = s, r)), style: C }, xe, ye ? V !== void 0 ? h.createElement("span", { className: le + "-clear-icon", onClick: ke, onMouseDown: function(we) {
      we.preventDefault();
    } }, V) : h.createElement(kr, { className: le + "-clear-icon" }, h.createElement(Nr, { onClick: ke, onMouseDown: function(we) {
      we.preventDefault();
    } })) : null, De && h.createElement("span", { className: he(le + "-word-limit", (a = {}, a[le + "-word-limit-outside"] = ce, a[le + "-word-limit-error"] = Fe, a)) }, ge));
  }
  return xe;
}, M0 = h.forwardRef(xx);
M0.displayName = "TextArea";
function Jh(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function eg(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Jh(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ox(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = eg(eg({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-eye") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z", clipRule: "evenodd" }), h.createElement("path", { d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" }));
}
var ep = h.forwardRef(Ox);
ep.defaultProps = { isIcon: true };
ep.displayName = "IconEye";
function tg(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ng(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? tg(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tg(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function bx(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = ng(ng({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-eye-invisible") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14" }), h.createElement("path", { d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294" }));
}
var tp = h.forwardRef(bx);
tp.defaultProps = { isIcon: true };
tp.displayName = "IconEyeInvisible";
function ku(e) {
  var o = _.useCallback(function(n) {
    return { onKeyDown: function(r) {
      var a, u, f, s, m, p, g = r.keyCode || r.which;
      g === li.code && ((a = n.onPressEnter) === null || a === void 0 || a.call(n, r)), g === k0.code && ((u = n.onArrowDown) === null || u === void 0 || u.call(n, r)), g === j0.code && ((f = n.onArrowLeft) === null || f === void 0 || f.call(n, r)), g === I0.code && ((s = n.onArrowRight) === null || s === void 0 || s.call(n, r)), g === N0.code && ((m = n.onArrowUp) === null || m === void 0 || m.call(n, r)), (p = e == null ? void 0 : e.onKeyDown) === null || p === void 0 || p.call(e, r);
    } };
  }, []);
  return o;
}
var da = function() {
  return da = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, da.apply(this, arguments);
}, Ex = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Sx = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, R0 = h.forwardRef(function(e, o) {
  var n, r = Sx(Ut(false, { defaultValue: e.defaultVisibility, value: e.visibility }), 2), a = r[0], u = r[1], f = _.useContext(Ye).getPrefixCls, s = ku(), m = e.className, p = e.visibilityToggle, g = p === void 0 ? true : p, w = e.onVisibilityChange, C = Ex(e, ["className", "visibilityToggle", "onVisibilityChange"]), O = f("input-password"), b = he(O, (n = {}, n[O + "-visibility"] = g, n), m), S = function(T) {
    "visibility" in e || u(T), w && w(T);
  }, x = e.suffix, B = function() {
    S(!a);
  };
  if (g) {
    var I = da({ onClick: B, onMouseDown: function(T) {
      return T.preventDefault();
    }, onMouseUp: function(T) {
      return T.preventDefault();
    } }, s({ onPressEnter: B }));
    if (e.suffix) x = h.createElement("span", da({}, I), e.suffix);
    else {
      var D = a ? ep : tp;
      x = h.createElement(D, da({}, I, { focusable: void 0, "aria-hidden": void 0, tabIndex: 0, className: O + "-visibility-icon" }));
    }
  }
  return h.createElement(nr, da({}, Ot(C, ["visibility", "defaultVisibility"]), { type: a ? "text" : "password", className: b, ref: o, suffix: x }));
});
R0.displayName = "Password";
function To(e) {
  return typeof e == "string" ? e.replace(/(\s{2,})|(\s{1,}$)/g, function(o) {
    return " ".repeat(o.length);
  }) : e;
}
var Rn = function() {
  return Rn = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Rn.apply(this, arguments);
}, Px = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Nx = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, kx = 2, jx = function(e) {
  if (!e) return {};
  var o = window.getComputedStyle(e), n = ["font", "letterSpacing", "overflow", "tabSize", "textIndent", "textTransform", "whiteSpace", "wordBreak", "wordSpacing", "paddingLeft", "paddingRight", "borderLeft", "borderRight", "boxSizing"];
  return n.reduce(function(r, a) {
    return r[a] = o[a], r;
  }, {});
}, ju = h.forwardRef(function(e, o) {
  var n, r = e.allowClear, a = e.disabled, u = e.placeholder, f = e.className, s = e.style, m = e.height, p = e.prefixCls, g = e.hasParent, w = e.size, C = e.value, O = e.autoFitWidth, b = e.onClear, S = e.readOnly, x = e.onChange, B = e.onKeyDown, I = e.onPressEnter, D = e.maxLength, T = e.clearIcon, R = Px(e, ["allowClear", "disabled", "placeholder", "className", "style", "height", "prefixCls", "hasParent", "size", "value", "autoFitWidth", "onClear", "readOnly", "onChange", "onKeyDown", "onPressEnter", "maxLength", "clearIcon"]), P = Ot(R, ["error", "status", "showWordLimit", "className", "defaultValue", "addBefore", "addAfter", "afterStyle", "beforeStyle", "prefix", "suffix", "normalize", "normalizeTrigger", "autoWidth"]), M = Nx(_.useState(), 2), V = M[0], j = M[1], z = ku(), H = _.useRef(), L = _.useRef(), Q = _.useRef(null), q = He(D) ? D.errorOnly ? void 0 : D.length : D, Z = function(ne) {
    var le, ee = e.normalizeTrigger || ["onBlur"];
    return Array.isArray(ee) && ee.indexOf(ne) > -1 && Mt(e.normalize) && (le = e.normalize), le;
  }, A = T0({ value: C, maxLength: q, onChange: x, onKeyDown: B, onPressEnter: I, normalizeHandler: Z }), W = A.compositionValue, k = A.valueChangeHandler, X = A.compositionHandler, U = A.keyDownHandler, E = A.triggerValueChangeCallback, F = he(p, p && (n = {}, n[p + "-size-" + w] = w, n[p + "-" + e.status] = e.status, n[p + "-disabled"] = a, n[p + "-autowidth"] = O, n), g ? void 0 : f), G = Rn(Rn({ "aria-invalid": e.status === "error" || void 0 }, P), { readOnly: S, maxLength: q, disabled: a, placeholder: u, value: W || C || "", className: F, onKeyDown: U, onChange: k, onCompositionStart: function(ne) {
    var le;
    (le = R.onCompositionStart) === null || le === void 0 || le.call(R, ne), X(ne);
  }, onCompositionUpdate: function(ne) {
    var le;
    (le = R.onCompositionUpdate) === null || le === void 0 || le.call(R, ne), X(ne);
  }, onCompositionEnd: function(ne) {
    var le;
    (le = R.onCompositionEnd) === null || le === void 0 || le.call(R, ne), X(ne);
  }, onBlur: function(ne) {
    var le;
    (le = e.onBlur) === null || le === void 0 || le.call(e, ne);
    var ee = Z("onBlur");
    ee && E(ee(ne.target.value), ne);
  } });
  _.useImperativeHandle(o, function() {
    return { dom: H.current, getRootDOMNode: function() {
      return H.current;
    }, focus: function() {
      H.current && H.current.focus && H.current.focus();
    }, blur: function() {
      H.current && H.current.blur && H.current.blur();
    } };
  }, []);
  var ae = function() {
    if (L.current && H.current) {
      var ne = L.current.offsetWidth;
      H.current.style.width = ne + kx + "px";
    }
  };
  _.useEffect(function() {
    O && ((!He(O) || !O.pure) && j(jx(H == null ? void 0 : H.current)), ae());
  }, [O]);
  var ue = G.value || u, re = function(ne) {
    H.current && H.current.focus && H.current.focus(), E("", ne), b == null || b();
  };
  return h.createElement(h.Fragment, null, r ? h.createElement(h.Fragment, null, h.createElement("input", Rn({ ref: H }, G)), !S && !a && r && C ? T !== void 0 ? h.createElement("span", Rn({ tabIndex: 0, className: p + "-clear-icon" }, z({ onPressEnter: re }), { onClick: function(ne) {
    ne.stopPropagation(), re(ne);
  }, onMouseDown: function(ne) {
    ne.preventDefault();
  } }), T) : h.createElement(kr, Rn({ tabIndex: 0, className: p + "-clear-icon" }, z({ onPressEnter: re }), { onClick: function(ne) {
    ne.stopPropagation(), re(ne);
  } }), h.createElement(Nr, { onMouseDown: function(ne) {
    ne.preventDefault();
  } })) : null) : h.createElement("input", Rn({ ref: H }, G, { style: g ? {} : Rn(Rn({ minWidth: He(O) ? O.minWidth : void 0, maxWidth: He(O) ? O.maxWidth : void 0 }, s), "height" in e ? { height: m } : {}) })), O && h.createElement(jr, { getTargetDOMNode: function() {
    return L.current;
  }, onResize: function() {
    var ne = L.current.offsetWidth;
    if (typeof O == "object") {
      var le = typeof O.delay == "function" ? O.delay(ne, Q.current) : O.delay;
      le ? setTimeout(ae, le) : ae();
    } else ae();
    Q.current = ne;
  } }, h.createElement("span", { className: he(p + "-mirror"), style: g ? V : Rn(Rn(Rn({}, V), s), "height" in e ? { height: m } : {}), ref: L }, To(ue))));
});
ju.displayName = "InputComponent";
var hd = function() {
  return hd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, hd.apply(this, arguments);
}, Ix = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, D0 = h.forwardRef(function(e, o) {
  var n, r = _.useContext(Ye).getPrefixCls, a = e.className, u = e.style, f = e.children, s = e.compact, m = Ix(e, ["className", "style", "children", "compact"]), p = r("input-group"), g = he(p, (n = {}, n[p + "-compact"] = s, n), a);
  return h.createElement("div", hd({ ref: o, className: g, style: u }, m), f);
});
D0.displayName = "InputGroup";
var xr = function() {
  return xr = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, xr.apply(this, arguments);
}, Yc = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, Tx = function(e) {
  e.target.tagName !== "INPUT" && e.preventDefault();
}, Xl = function(e, o, n, r) {
  return n === void 0 && (n = {}), o ? h.createElement("span", { style: n, className: e, onClick: r }, o) : null;
};
function ba(e, o) {
  var n = e !== null && !gn(e) && !Sa(e) ? String(e) : e || "";
  return o ? n.slice(0, o) : n;
}
function Mx(e, o) {
  var n, r, a, u = _.useContext(Ye), f = u.getPrefixCls, s = u.size, m = u.componentConfig, p = u.rtl, g = Dt(e, {}, m == null ? void 0 : m.Input), w = g.className, C = g.style, O = g.addBefore, b = g.addAfter, S = g.suffix, x = g.prefix, B = g.beforeStyle, I = g.afterStyle, D = g.height, T = g.disabled, R = g.maxLength, P = g.showWordLimit, M = g.allowClear, V = g.autoWidth, j = V ? xr({ minWidth: 0, maxWidth: "100%" }, He(V) ? V : {}) : null, z = xr({ minWidth: j == null ? void 0 : j.minWidth, maxWidth: j == null ? void 0 : j.maxWidth, width: j && "auto" }, C), H = He(R) ? R.length : R, L = He(R) && R.errorOnly ? void 0 : H, Q = Yc(_.useState(false), 2), q = Q[0], Z = Q[1], A = _.useRef(), W = _.useRef(), k = _.useRef(), X = Yc(Ut("", { defaultValue: "defaultValue" in g ? ba(g.defaultValue, L) : void 0, value: "value" in g ? ba(g.value, L) : void 0 }), 2), U = X[0], E = X[1];
  _.useImperativeHandle(o, function() {
    var be, ze, ge;
    return { focus: (be = A.current) === null || be === void 0 ? void 0 : be.focus, blur: (ze = A.current) === null || ze === void 0 ? void 0 : ze.blur, dom: (ge = A.current) === null || ge === void 0 ? void 0 : ge.dom, getRootDOMNode: function() {
      var Fe;
      return W.current || ((Fe = A.current) === null || Fe === void 0 ? void 0 : Fe.dom);
    } };
  }, []);
  var F = function(be, ze) {
    "value" in g || E(be), g.onChange && g.onChange(be, ze);
  }, G = f("input"), ae = g.size || s, ue = "height" in g, re = S, ne = U ? U.length : 0, le = _.useMemo(function() {
    return !L && H ? ne > H : false;
  }, [ne, H, L]);
  if (H && P) {
    var ee = Yc(p ? [H, ne] : [ne, H], 2), se = ee[0], ke = ee[1];
    re = h.createElement("span", { className: he(G + "-word-limit", (n = {}, n[G + "-word-limit-error"] = le, n)) }, se, "/", ke);
  }
  var Pe = he(G + "-group-wrapper", G + "-group-wrapper-" + ae, (r = {}, r[G + "-custom-height"] = ue, r[G + "-has-suffix"] = re, r[G + "-group-wrapper-disabled"] = T, r[G + "-group-wrapper-rtl"] = p, r[G + "-group-wrapper-autowidth"] = j, r), w), De = g.status || (g.error || le ? "error" : void 0), Ee = O || b || re || x, ce = h.createElement(ju, xr({ ref: A }, g, { autoFitWidth: !!j, style: z, status: De, onFocus: function(be) {
    Z(true), g.onFocus && g.onFocus(be);
  }, onBlur: function(be) {
    Z(false), g.onBlur && g.onBlur(be);
  }, onChange: F, prefixCls: G, value: U, hasParent: !!Ee || M, size: ae })), fe = he(G + "-inner-wrapper", (a = {}, a[G + "-inner-wrapper-" + De] = De, a[G + "-inner-wrapper-disabled"] = T, a[G + "-inner-wrapper-focus"] = q, a[G + "-inner-wrapper-has-prefix"] = x, a[G + "-inner-wrapper-" + ae] = ae, a[G + "-clear-wrapper"] = M, a[G + "-inner-wrapper-rtl"] = p, a));
  return Ee ? h.createElement("div", { ref: W, className: Pe, style: xr(xr({}, z), ue ? { height: D } : {}) }, h.createElement("span", { className: G + "-group" }, Xl(G + "-group-addbefore", O, B), h.createElement("span", { className: fe, ref: k, onMouseDown: function(be) {
    be.target.tagName !== "INPUT" && k.current && du(k.current, be.target) && be.preventDefault();
  }, onClick: function(be) {
    k.current && du(k.current, be.target) && A.current && A.current.focus();
  } }, Xl(G + "-group-prefix", x), ce, Xl(G + "-group-suffix", re)), Xl(G + "-group-addafter", b, I))) : M ? h.createElement("span", { ref: W, className: he(w, fe), style: xr(xr({}, z), ue ? { height: D } : {}), onMouseDown: Tx, onClick: function() {
    A.current && A.current.focus();
  } }, ce) : ce;
}
var nr = h.forwardRef(Mx);
nr.displayName = "Input";
nr.Search = S0;
nr.TextArea = M0;
nr.Password = R0;
nr.Group = D0;
var Rx = function(e) {
  var o = e.getContainer, n = e.children, r = _.useRef(), a = Xd();
  return (a || r.current === null) && !$o && (r.current = o()), _.useEffect(function() {
    return function() {
      var u = r.current;
      u && u.parentNode && (u.parentNode.removeChild(u), r.current = null);
    };
  }, []), r.current ? Kn.createPortal(n, r.current) : null;
}, pa = function() {
  return pa = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, pa.apply(this, arguments);
}, va = 0, mu = function(e, o) {
  var n = o.position, r = e.getBoundingClientRect(), a = r.width, u = r.height, f = r.left, s = r.right, m = r.top, p = r.bottom, g = o.boundaryDistance || {}, w = "left" in g && g.left || va, C = "top" in g && g.top || va, O, b, S, x;
  return ["bottom", "bl", "br"].indexOf(n) > -1 ? (S = m, x = p) : (S = m - C, x = p - C), ["right", "rt", "rb"].indexOf(n) > -1 ? (O = f, b = s) : (O = f - w, b = s - w), { width: a, height: u, left: O, right: b, top: S, bottom: x };
};
function Dx(e, o, n, r) {
  if (!n || !e || $o) return { left: 0, width: 0, height: 0, top: 0 };
  var a = function(S) {
    return document.documentElement[S] || document.body[S];
  }, u = n === document.body ? a("scrollTop") : n.scrollTop, f = n === document.body ? a("scrollLeft") : n.scrollLeft, s = o.left, m = o.top, p = o.width, g = o.height, w = n === document.body ? 0 : mu(n, r).left, C = n === document.body ? 0 : mu(n, r).top, O = m + u - C, b = s + f - w;
  return { left: b, top: O, width: p, height: g };
}
var Wn = function(e, o, n) {
  return n < e ? e : n > o ? o : n;
}, zx = function(e, o) {
  var n = 0, r = 0, a = {};
  o ? a = pa({ left: 12, right: 12, top: 12, bottom: 12 }, e) : a = pa({}, e);
  for (var u in a) if (Ft(a[u])) {
    var f = 0;
    ["top", "bottom"].indexOf(u) > -1 ? (f = 1, n = a[u][0]) : r = a[u][1], a[u] = a[u][f];
  }
  return pa(pa({}, a), { horizontalOffset: n, verticalOffset: r });
}, Lx = function(e, o, n) {
  var r = n.boundaryDistance, a = n.position;
  return o ? { left: o.clientX, top: o.clientY, width: 0, height: 0, right: o.clientX, bottom: o.clientY } : mu(e, { boundaryDistance: r, position: a });
}, $x = function(e) {
  var o = e.offsetWidth, n = e.offsetHeight;
  return { width: o, height: n };
}, Ax = function(e) {
  var o, n, r = e || {}, a = "left" in r ? r.left : "right" in r ? r.right : va, u = "top" in r ? r.top : "bottom" in r ? r.bottom : va, f = (((o = document.documentElement) === null || o === void 0 ? void 0 : o.clientHeight) || window.innerHeight) - (u || va), s = (((n = document.documentElement) === null || n === void 0 ? void 0 : n.clientWidth) || window.innerWidth) - (a || va);
  return { windowHeight: f, windowWidth: s };
}, Vx = function(e, o, n) {
  var r = e.parentNode;
  return !r || r === document.body || r === document.documentElement ? { left: n, width: o } : { left: 0, width: r.clientWidth || e.clientWidth || e.scrollWidth };
};
const Fx = (function(e, o, n, r, a) {
  var u = e.autoAlignPopupWidth, f = e.autoAlignPopupMinWidth, s = e.alignPoint, m = e.style;
  if (!n || !o || !r) return {};
  var p = {}, g = !e.alignPoint && e.boundaryDistance || {}, w = Lx(n, s && a, { boundaryDistance: g, position: e.position }), C = Dx(n, w, r, { boundaryDistance: g, position: e.position }), O = C.left, b = C.top, S = C.width, x = C.height, B = zx(e.popupAlign, e.showArrow), I = B.left || 0, D = B.right || 0, T = B.top || 0, R = B.bottom || 0;
  u && (m == null ? void 0 : m.width) === void 0 && (o.style.width = n.offsetWidth + "px"), f && (o.style.minWidth = n.offsetWidth + "px");
  var P = $x(o), M = e.position, V = {}, j = function(k) {
    if (e.autoFitPosition) {
      var X = Ax(g), U = X.windowHeight, E = X.windowWidth, F = false, G = { left: O - w.left, top: b - w.top }, ae = p.top, ue = ae === void 0 ? 0 : ae, re = p.left, ne = re === void 0 ? 0 : re;
      if ((k === "top" || k === "bottom") && (G.left > ne && w.right > 12 ? (p.left = Math.max(G.left, O - P.width), p.left = Math.max(p.left, O - P.width + 24)) : ne - G.left + P.width > E && E - w.left > 12 && (p.left = Math.max(G.left, G.left + E - P.width), p.left = Math.max(p.left, O - P.width + 24))), (k === "left" || k === "right") && (G.top > ue && w.bottom > 12 ? (p.top = G.top, p.top = Math.max(p.top, b - P.height + w.height / 2)) : ue - G.top + P.height > U && U - w.top > 12 && (p.top = Math.max(G.top, G.top + U - P.height), p.top = Math.max(p.top, b - P.height + w.height / 2))), k === "top" && G.top > ue && (w.top < U - w.bottom ? (p.top = Math.min(b + x + (T || 0), G.top + U - P.height), F = true) : p.top = G.top), k === "bottom" && ue - G.top + P.height > U && (U - w.bottom < w.top ? (p.top = Math.max(b - P.height - (R || 0), G.top), F = true) : p.top = G.top + U - P.height), k === "left" && G.left > ne && (w.left < E - w.right ? (p.left = Math.min(S + O + D, G.left + E - P.width), F = true) : p.left = G.left), k === "right" && ne - G.left + P.width > E && (E - w.right < w.left ? (p.left = Math.max(O - P.width - I, G.left), F = true) : p.left = G.left + E - P.width), p.left < 0) p.left = 0;
      else {
        var le = Vx(r, E, G.left), ee = Math.max(0, le.left + le.width - P.width);
        p.left = Math.min(ee, p.left);
      }
      return F;
    }
  }, z = B.horizontalOffset || 0, H = B.verticalOffset || 0;
  switch (e.position) {
    case "top": {
      p.top = b - P.height - T, p.left = O + S / 2 - P.width / 2, j("top") && (M = "bottom"), p.left += z;
      var L = O - Number(p.left) + S / 2;
      V.left = Wn(12, P.width - 12, L);
      break;
    }
    case "tl":
      p.top = b - P.height - T, p.left = O, j("top") && (M = "bl"), p.left += z;
      var Q = O - Number(p.left) + Math.min(S / 2, 50);
      V.left = Wn(12, P.width - 12, Q);
      break;
    case "tr":
      p.top = -o.clientHeight + b - T, p.left = O + S - P.width, j("top") && (M = "br"), p.left += z, Q = O - Number(p.left) + Math.max(S / 2, S - 50), V.left = Wn(12, P.width - 12, Q);
      break;
    case "bottom": {
      p.top = x + b + R, p.left = O + S / 2 - P.width / 2, j("bottom") && (M = "top"), p.left += z;
      var q = O - Number(p.left) + S / 2;
      V.left = Wn(12, P.width - 12, q);
      break;
    }
    case "bl":
      p.top = x + b + R, p.left = O, j("bottom") && (M = "tl"), p.left += z, Q = O - Number(p.left) + Math.min(S / 2, 50), V.left = Wn(12, P.width - 12, Q);
      break;
    case "br":
      p.top = x + b + R, p.left = O + S - P.width, j("bottom") && (M = "tr"), p.left += z, Q = O - Number(p.left) + Math.max(S / 2, S - 50), V.left = Wn(12, P.width - 12, Q);
      break;
    case "left": {
      p.top = b + x / 2 - P.height / 2, p.left = O - P.width - I, j("left") && (M = "right"), p.top += H;
      var Z = b - Number(p.top) + x / 2;
      V.top = Wn(12, P.height - 12, Z);
      break;
    }
    case "lt":
      p.top = b, p.left = O - P.width - I, j("left") && (M = "rt"), p.top += H;
      var A = b - Number(p.top) + Math.min(x / 2, 50);
      V.top = Wn(12, P.height - 12, A);
      break;
    case "lb":
      p.top = b + x - P.height, p.left = O - P.width - I, j("left") && (M = "rb"), p.top += H, A = b - Number(p.top) + Math.max(x / 2, x - 50), V.top = Wn(12, P.height - 12, A);
      break;
    case "right": {
      p.top = b + x / 2 - P.height / 2, p.left = S + O + D, j("right") && (M = "left"), p.top += H;
      var W = b - Number(p.top) + x / 2;
      V.top = Wn(12, P.height - 12, W);
      break;
    }
    case "rt":
      p.top = b, p.left = S + O + D, j("right") && (M = "lt"), p.top += H, A = b - Number(p.top) + Math.min(x / 2, 50), V.top = Wn(12, P.height - 12, A);
      break;
    case "rb":
      p.top = b + x - P.height, p.left = S + O + D, j("right") && (M = "lb"), p.top += H, A = b - Number(p.top) + Math.max(x / 2, x - 50), V.top = Wn(12, P.height - 12, A);
      break;
  }
  return { style: p, arrowStyle: V, realPosition: M };
});
function Hx(e, o, n, r) {
  var a = o || {}, u = n || {}, f = e || {}, s = r ? new Set(r) : new Set(Object.keys(f).concat(Object.keys(a)).concat(Object.keys(u))), m = {};
  return s.forEach(function(p) {
    f[p] !== void 0 ? m[p] = f[p] : p in u ? m[p] = u[p] : p in a && (m[p] = a[p]);
  }), m;
}
var Wx = /* @__PURE__ */ (function() {
  var e = function(o, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (r[u] = a[u]);
    }, e(o, n);
  };
  return function(o, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(o, n);
    function r() {
      this.constructor = o;
    }
    o.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
})(), Lt = function() {
  return Lt = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Lt.apply(this, arguments);
};
function rg(e, o) {
  if (!e) return {};
  var n = mu(e, o), r = n.width, a = n.height, u = n.left, f = n.right;
  return { width: r, height: a, left: u, right: f };
}
var z0 = ["onClick", "onMouseEnter", "onMouseLeave", "onMouseMove", "onFocus", "onBlur", "onContextMenu", "onKeyDown"];
function Bx(e, o) {
  var n = {}, r = Lt({}, e);
  return o.forEach(function(a) {
    e && a in e && (n[a] = e[a], delete r[a]);
  }), { picked: n, omitted: r };
}
var Ux = { blurToHide: true, classNames: "fadeIn", trigger: "hover", position: "bottom", duration: 200, unmountOnExit: true, popupAlign: {}, popupHoverStay: true, clickOutsideToClose: true, escToClose: false, mouseLeaveToClose: true, containerScrollToClose: false, getDocument: function() {
  return window.document;
}, autoFixPosition: true, mouseEnterDelay: 100, mouseLeaveDelay: 100, autoFitPosition: true }, np = (function(e) {
  Wx(o, e);
  function o(n, r) {
    var a = e.call(this, n, r) || this;
    a.delayTimer = null, a.updatePositionTimer = null, a.popupOpen = false, a.mousedownToHide = false, a.hasPopupMouseDown = false, a.unmount = false, a.isDidMount = false, a.mouseLocation = { clientX: 0, clientY: 0 }, a.observerContainer = null, a.scrollElements = null, a.resizeObserver = new O0(function() {
      a.handleUpdatePosition();
    }), a.childrenDom = null, a.childrenDomSize = {}, a.getMergedProps = function(s) {
      var m = a.context.componentConfig, p = Hx(s && He(s) ? s : a.props, Ux, m == null ? void 0 : m.Trigger, s && Ft(s) ? s : void 0);
      return p;
    }, a.getRootElement = function() {
      var s, m;
      return a.childrenDom = bu(((m = (s = a.props).getTargetDOMNode) === null || m === void 0 ? void 0 : m.call(s)) || a.rootElementRef, a), a.childrenDom;
    }, a.getPopupElement = function() {
      var s;
      return ((s = a.triggerRef) === null || s === void 0 ? void 0 : s.current) || null;
    }, a.offScrollListeners = function() {
      (a.scrollElements || []).forEach(function(s) {
        Zt(s, "scroll", a.handleScroll);
      }), a.scrollElements = null;
    }, a.offWindowResize = function() {
      a.handleWindowResize = false, Zt(window, "resize", a.handleUpdatePosition);
    }, a.offContainerResize = function() {
      a.resizeObserver && a.observerContainer && (a.resizeObserver.unobserve(a.observerContainer), a.observerContainer = null);
    }, a.handleScroll = function() {
      var s = a.getMergedProps(["containerScrollToClose", "updateOnScroll"]);
      s.containerScrollToClose ? a.setPopupVisible(false) : s.updateOnScroll && a.handleUpdatePosition();
    }, a.onContainersScroll = function(s) {
      var m, p;
      a.scrollElements || (a.scrollElements = R1(a.childrenDom, (m = a.popupContainer) === null || m === void 0 ? void 0 : m.parentNode), s.containerScrollToClose && ((p = a.popupContainer) === null || p === void 0 ? void 0 : p.parentNode) === document.body && a.scrollElements.indexOf(document.body) === -1 && g0(document.documentElement) && a.scrollElements.push(window), a.scrollElements.forEach(function(g) {
        Xt(g, "scroll", a.handleScroll);
      }));
    }, a.onContainerResize = function() {
      var s, m = (s = a.popupContainer) === null || s === void 0 ? void 0 : s.parentNode;
      a.resizeObserver && a.observerContainer !== m && (a.offContainerResize(), m && a.resizeObserver.observe(m), a.observerContainer = m);
    }, a.handleUpdatePosition = Gh(function() {
      a.updatePopupPosition();
    }), a.isClickTrigger = function() {
      var s = a.getMergedProps(["trigger"]).trigger;
      return [].concat(s).indexOf("click") > -1;
    }, a.isFocusTrigger = function() {
      var s = a.getMergedProps(["trigger"]).trigger;
      return [].concat(s).indexOf("focus") > -1;
    }, a.isHoverTrigger = function() {
      var s = a.getMergedProps(["trigger"]).trigger;
      return [].concat(s).indexOf("hover") > -1;
    }, a.isContextMenuTrigger = function() {
      var s = a.getMergedProps(["trigger"]).trigger;
      return [].concat(s).indexOf("contextMenu") > -1;
    }, a.isMouseLeaveToClose = function() {
      return a.isHoverTrigger() && a.getMergedProps(["mouseLeaveToClose"]).mouseLeaveToClose;
    }, a.isPopupHoverHide = function() {
      return a.isHoverTrigger() && !a.getMergedProps(["popupHoverStay"]).popupHoverStay;
    }, a.isClickToHide = function() {
      if (a.isClickTrigger() || a.isContextMenuTrigger()) {
        var s = a.getMergedProps(["clickToClose"]).clickToClose, m = s === void 0 ? true : s;
        return m;
      }
      return a.isHoverTrigger() && a.props.clickToClose;
    }, a.isBlurToHide = function() {
      return a.isFocusTrigger() && a.getMergedProps(["blurToHide"]).blurToHide;
    }, a.clearTimer = function() {
      a.updatePositionTimer && (a.updatePositionTimer.cancel ? a.updatePositionTimer.cancel() : (clearTimeout(a.updatePositionTimer), a.updatePositionTimer = null)), a.delayTimer && (clearTimeout(a.delayTimer), a.delayTimer = null), a.mouseDownTimeout && (clearTimeout(a.mouseDownTimeout), a.mouseDownTimeout = null);
    }, a.offClickOutside = function() {
      if (a.handleClickOutside) {
        var s = a.getMergedProps(["clickOutsideToClose", "getDocument"]), m = s.clickOutsideToClose, p = s.getDocument, g = Mt(p) && p();
        Zt(g, "mousedown", a.onClickOutside, { capture: He(m) ? m.capture : false }), a.handleClickOutside = false;
      }
    }, a.getTransformOrigin = function(s) {
      var m, p, g = a.getPopupElement();
      if (!g) return {};
      var w = a.getMergedProps(["showArrow", "classNames"]), C = w.showArrow, O = w.classNames, b = C && ((m = a.arrowStyle) === null || m === void 0 ? void 0 : m.top) || 0, S = C && ((p = a.arrowStyle) === null || p === void 0 ? void 0 : p.left) || 0;
      b = b ? b + "px" : "", S = S ? S + "px" : "";
      var x = { top: (S || "50%") + " 100% 0", tl: (S || "15px") + " 100% 0", tr: (S || g.clientWidth - 15 + "px") + " 100% 0", bottom: (S || "50%") + " 0 0", bl: (S || "15px") + " 0 0", br: (S || g.clientWidth - 15 + "px") + " 0 0", left: "100% " + (b || "50%") + " 0", lt: "100% " + (b || "15px") + " 0", lb: "100% " + (b || g.clientHeight - 15 + "px") + " 0", right: "0 " + (b || "50%") + " 0", rt: "0 " + (b || "15px") + " 0", rb: "0 " + (b || g.clientHeight - 15 + "px") + " 0" };
      if (O && O.indexOf("zoom") > -1) return { transformOrigin: x[s] };
      if (O === "slideDynamicOrigin") {
        var B = "0% 0%";
        return ["top", "tl", "tr"].indexOf(s) > -1 && (B = "100% 100%"), { transformOrigin: B };
      }
      return {};
    }, a.getTransformTranslate = function() {
      if (a.getMergedProps(["classNames"]).classNames !== "slideDynamicOrigin") return "";
      switch (a.realPosition) {
        case "bottom":
        case "bl":
        case "br":
          return "scaleY(0.9) translateY(-4px)";
        case "top":
        case "tl":
        case "tr":
          return "scaleY(0.9) translateY(4px)";
        default:
          return "";
      }
    }, a.getPopupStyle = function() {
      if (!(a.unmount || !a.popupContainer)) {
        var s = a.popupContainer, m = a.triggerRef.current, p = a.getRootElement();
        if (!p.offsetParent && !p.getClientRects().length) return a.state.popupStyle;
        var g = a.getMergedProps(), w = Fx(g, m, p, s, a.mouseLocation), C = w.style, O = w.arrowStyle, b = w.realPosition;
        return a.realPosition = b || g.position, a.arrowStyle = O || {}, Lt(Lt({}, C), a.getTransformOrigin(a.realPosition));
      }
    }, a.showPopup = function(s) {
      s === void 0 && (s = function() {
      });
      var m = a.getPopupStyle();
      a.setState({ popupStyle: m }, s);
    }, a.update = Gh(function(s) {
      if (!(a.unmount || !a.state.popupVisible)) {
        var m = a.getPopupStyle();
        a.setState({ popupStyle: m }, function() {
          s == null || s();
        });
      }
    }), a.getRootDOMNode = function() {
      return a.getRootElement();
    }, a.updatePopupPositionSync = function() {
      if (!a.unmount) {
        var s = a.triggerRef.current, m = a.getPopupStyle();
        if (s && m) {
          var p = a.props.style || {};
          s.style.top = String(p.top || m.top + "px"), s.style.left = String(p.left || m.left + "px");
        }
      }
    }, a.updatePopupPosition = function(s, m) {
      s === void 0 && (s = 0);
      var p = a.state.popupVisible;
      if (p) {
        if (s < 4) {
          a.updatePositionTimer = a.update(m);
          return;
        }
        a.updatePositionTimer = setTimeout(function() {
          var g = a.getPopupStyle();
          a.setState({ popupStyle: g }, function() {
            m == null || m();
          });
        }, s);
      }
    }, a.setPopupVisible = function(s, m, p) {
      m === void 0 && (m = 0);
      var g = a.getMergedProps(["onVisibleChange", "popupVisible"]), w = g.onVisibleChange, C = a.state.popupVisible;
      s !== C ? a.delayToDo(m, function() {
        w && w(s), "popupVisible" in g ? p == null || p() : s ? a.setState({ popupVisible: true }, function() {
          a.showPopup(p);
        }) : a.setState({ popupVisible: false }, function() {
          p == null || p();
        });
      }) : p == null || p();
    }, a.delayToDo = function(s, m) {
      s ? (a.clearDelayTimer(), a.delayTimer = setTimeout(function() {
        m(), a.clearDelayTimer();
      }, s)) : m();
    }, a.onClickOutside = function(s) {
      var m = a.getMergedProps(["onClickOutside", "clickOutsideToClose"]), p = m.onClickOutside, g = m.clickOutsideToClose, w = a.getPopupElement(), C = a.getRootElement();
      !du(w, s.target) && !du(C, s.target) && !a.hasPopupMouseDown && (p == null || p(), g && !a.isBlurToHide() && !a.isHoverTrigger() && a.setPopupVisible(false));
    }, a.onKeyDown = function(s) {
      var m = s.keyCode || s.which;
      a.triggerPropsEvent("onKeyDown", s), m === md.code && a.onPressEsc(s);
    }, a.onPressEsc = function(s) {
      var m = a.getMergedProps(["escToClose"]).escToClose;
      m && s && s.key === md.key && a.state.popupVisible && a.setPopupVisible(false);
    }, a.onMouseEnter = function(s) {
      var m = a.getMergedProps(["mouseEnterDelay"]).mouseEnterDelay;
      a.triggerPropsEvent("onMouseEnter", s), a.clearDelayTimer(), a.setPopupVisible(true, m || 0);
    }, a.onMouseMove = function(s) {
      a.triggerPropsEvent("onMouseMove", s), a.setMouseLocation(s), a.state.popupVisible && a.update();
    }, a.onMouseLeave = function(s) {
      var m = a.getMergedProps(["mouseLeaveDelay"]).mouseLeaveDelay;
      a.clearDelayTimer(), a.triggerPropsEvent("onMouseLeave", s), a.isMouseLeaveToClose() && a.state.popupVisible && a.setPopupVisible(false, m || 0);
    }, a.onPopupMouseEnter = function() {
      a.clearDelayTimer();
    }, a.onPopupMouseLeave = function(s) {
      a.onMouseLeave(s);
    }, a.setMouseLocation = function(s) {
      a.getMergedProps(["alignPoint"]).alignPoint && (a.mouseLocation = { clientX: s.clientX, clientY: s.clientY });
    }, a.onContextMenu = function(s) {
      s.preventDefault(), a.triggerPropsEvent("onContextMenu", s), a.setMouseLocation(s), a.state.popupVisible ? a.getMergedProps(["alignPoint"]).alignPoint && a.update() : a.setPopupVisible(true, 0);
    }, a.clickToHidePopup = function(s) {
      var m = a.state.popupVisible;
      m && (a.mousedownToHide = true), a.triggerPropsEvent("onClick", s), a.isClickToHide() && m && a.setPopupVisible(!m, 0);
    }, a.onClick = function(s) {
      var m = a.state.popupVisible;
      m && (a.mousedownToHide = true), a.triggerPropsEvent("onClick", s), a.setMouseLocation(s), !(!a.isClickToHide() && m) && a.setPopupVisible(!m, 0);
    }, a.onFocus = function(s) {
      var m = a.getMergedProps(["focusDelay"]).focusDelay, p = function() {
        a.triggerPropsEvent("onFocus", s);
      };
      a.clearDelayTimer(), a.mousedownToHide || (a.state.popupVisible ? p == null || p() : a.setPopupVisible(true, m || 0, p)), a.mousedownToHide = false;
    }, a.onBlur = function(s) {
      a.setPopupVisible(false, 200, function() {
        return a.triggerPropsEvent("onBlur", s);
      });
    }, a.onResize = function() {
      a.getMergedProps(["autoFixPosition"]).autoFixPosition && a.state.popupVisible && a.updatePopupPosition();
    }, a.onPopupMouseDown = function() {
      a.hasPopupMouseDown = true, clearTimeout(a.mouseDownTimeout), a.mouseDownTimeout = setTimeout(function() {
        a.hasPopupMouseDown = false;
      }, 0);
    }, a.getChild = function() {
      var s, m = a.props.children, p = m, g = p && typeof p != "string" && p.type, w = m;
      if (["string", "number"].indexOf(typeof m) > -1 || h.Children.count(m) > 1 || Ft(m)) w = h.createElement("span", null, m);
      else if (p && g && (g.__BYTE_BUTTON === true || g.__BYTE_CHECKBOX === true || g.__BYTE_SWITCH === true || g.__BYTE_RADIO === true || g === "button") && p.props.disabled) {
        var C = Bx(p.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), O = C.picked, b = C.omitted;
        w = h.createElement("span", { className: (s = p.props) === null || s === void 0 ? void 0 : s.className, style: Lt(Lt({ display: "inline-block" }, O), { cursor: "not-allowed" }) }, h.cloneElement(p, { style: Lt(Lt({}, b), { pointerEvents: "none" }), className: void 0 }));
      }
      return w || h.createElement("span", null);
    }, a.appendToContainer = function(s) {
      if (Dn(a.rafId), a.isDidMount) {
        var m = a.context.getPopupContainer, p = a.getMergedProps(["getPopupContainer"]).getPopupContainer, g = p || m, w = a.getRootElement(), C = g(w);
        if (C) {
          C.appendChild(s);
          return;
        }
      }
      a.rafId = Un(function() {
        a.appendToContainer(s);
      });
    }, a.getContainer = function() {
      var s = document.createElement("div");
      return s.style.width = "100%", s.style.position = "absolute", s.style.top = "0", s.style.left = "0", a.popupContainer = s, a.appendToContainer(s), s;
    }, a.triggerPropsEvent = function(s, m) {
      var p = a.getChild(), g = p && p.props && p.props[s], w = a.getMergedProps([s])[s];
      Mt(g) && g(m), Mt(w) && w(m);
    }, a.triggerOriginEvent = function(s) {
      var m = a.getChild(), p = m && m.props && m.props[s], g = a.getMergedProps([s])[s];
      return Mt(g) && Mt(p) ? function(w) {
        p(w), g(w);
      } : p || g;
    };
    var u = a.getMergedProps(n), f = "popupVisible" in u ? u.popupVisible : u.defaultPopupVisible;
    return a.popupOpen = !!f, a.triggerRef = _.createRef(), a.state = { popupVisible: !!f, popupStyle: {} }, a;
  }
  return o.getDerivedStateFromProps = function(n, r) {
    return "popupVisible" in n && n.popupVisible !== r.popupVisible ? { popupVisible: n.popupVisible } : null;
  }, o.prototype.componentDidMount = function() {
    this.componentDidUpdate(this.getMergedProps()), this.isDidMount = true, this.unmount = false, this.childrenDom = this.getRootElement(), this.state.popupVisible && (this.childrenDomSize = rg(this.childrenDom, { boundaryDistance: this.props.alignPoint ? void 0 : this.props.boundaryDistance, position: this.props.position }));
  }, o.prototype.componentDidUpdate = function(n) {
    var r = this.getMergedProps(n), a = this.getMergedProps();
    !r.popupVisible && a.popupVisible && this.update();
    var u = this.state.popupVisible;
    this.popupOpen = u;
    var f = a.getDocument;
    if (!u) {
      this.offClickOutside(), this.offContainerResize(), this.offWindowResize(), this.offScrollListeners();
      return;
    }
    var s = rg(this.childrenDom, { boundaryDistance: this.props.alignPoint ? {} : this.props.boundaryDistance, position: this.props.position });
    if (JSON.stringify(s) !== JSON.stringify(this.childrenDomSize) && (this.updatePopupPosition(), this.childrenDomSize = s), this.onContainerResize(), (a.updateOnScroll || a.containerScrollToClose) && this.onContainersScroll(a), this.handleWindowResize || (Xt(window, "resize", this.handleUpdatePosition), this.handleWindowResize = true), !this.handleClickOutside) {
      var m = Mt(f) && f();
      m && (Xt(m, "mousedown", this.onClickOutside, { capture: He(a.clickOutsideToClose) ? a.clickOutsideToClose.capture : false }), this.handleClickOutside = true);
    }
  }, o.prototype.componentWillUnmount = function() {
    this.unmount = true, this.offClickOutside(), this.clearTimer(), this.offWindowResize(), this.offScrollListeners(), this.offContainerResize(), Dn(this.rafId);
  }, o.prototype.clearDelayTimer = function() {
    this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
  }, o.prototype.render = function() {
    var n, r, a, u = this, f, s = this.getMergedProps(), m = s.children, p = s.style, g = s.className, w = s.arrowProps, C = s.disabled, O = s.popup, b = s.classNames, S = s.duration, x = s.unmountOnExit, B = s.alignPoint, I = s.autoAlignPopupWidth, D = s.position, T = s.childrenPrefix, R = s.showArrow, P = s.popupStyle, M = s.__onExit, V = s.__onExited, j = m || m === 0, z = this.context, H = z.getPrefixCls, L = z.zIndex, Q = z.rtl, q = this.state, Z = q.popupVisible, A = q.popupStyle;
    if (!O) return null;
    var W = {}, k = { onMouseDown: this.onPopupMouseDown };
    this.isHoverTrigger() && !C ? (W.onMouseEnter = this.onMouseEnter, W.onMouseLeave = this.onMouseLeave, this.isClickToHide() && (W.onClick = this.clickToHidePopup), B && (W.onMouseMove = this.onMouseMove), this.isPopupHoverHide() || (k.onMouseEnter = this.onPopupMouseEnter, k.onMouseLeave = this.onPopupMouseLeave)) : (W.onMouseEnter = this.triggerOriginEvent("onMouseEnter"), W.onMouseLeave = this.triggerOriginEvent("onMouseLeave")), this.isContextMenuTrigger() && !C ? (W.onContextMenu = this.onContextMenu, W.onClick = this.clickToHidePopup) : W.onContextMenu = this.triggerOriginEvent("onContextMenu"), this.isClickTrigger() && !C ? W.onClick = this.onClick : W.onClick = W.onClick || this.triggerOriginEvent("onClick"), this.isFocusTrigger() && !C ? (W.onFocus = this.onFocus, this.isBlurToHide() && (W.onBlur = this.onBlur)) : (W.onFocus = this.triggerOriginEvent("onFocus"), W.onBlur = this.triggerOriginEvent("onBlur")), C ? W.onKeyDown = this.triggerOriginEvent("onKeyDown") : W.onKeyDown = this.onKeyDown;
    var X = this.getChild(), U = O(), E;
    h.isValidElement(U) ? E = U : Ft(U) ? E = U.find(function(ee) {
      return h.isValidElement(ee);
    }) || h.createElement("span", null) : E = h.createElement("span", null);
    var F = h.isValidElement(X) ? X.props : void 0, G = F && typeof F.className == "string" ? F.className : void 0;
    G && (W.className = G), T && Z && (W.className = W.className ? W.className + " " + T + "-open" : T + "-open"), this.isFocusTrigger() && (W.tabIndex = C ? -1 : 0);
    var ae = H("trigger"), ue = he(ae, T, ae + "-position-" + D, (n = {}, n[ae + "-rtl"] = Q, n), g), re = j && h.createElement(jr, { onResize: this.onResize, getTargetDOMNode: function() {
      return u.rootElementRef;
    } }, h.cloneElement(X, Lt(Lt({}, W), { ref: Bd(X) ? function(ee) {
      u.rootElementRef = ee, Gd(X, ee);
    } : void 0 }))), ne = h.createElement(Ou, { in: !!Z, timeout: S, classNames: b, unmountOnExit: x, appear: true, mountOnEnter: true, onEnter: function() {
      u.triggerRefDestoried = false;
      var ee = u.getPopupElement();
      ee && (ee.style.display = "initial", ee.style.pointerEvents = "none", b === "slideDynamicOrigin" && (ee.style.transform = u.getTransformTranslate()));
    }, onEntering: function() {
      var ee = u.getPopupElement();
      ee && b === "slideDynamicOrigin" && (ee.style.transform = "");
    }, onEntered: function() {
      var ee = u.getPopupElement();
      ee && (ee.style.pointerEvents = "auto", u.forceUpdate());
    }, onExit: function() {
      var ee = u.getPopupElement();
      ee && (ee.style.pointerEvents = "none", M == null || M(ee));
    }, onExited: function() {
      var ee = u.getPopupElement();
      ee && (ee.style.display = "none", x && (u.triggerRefDestoried = true), u.setState({ popupStyle: {} }), V == null || V(ee));
    }, nodeRef: this.triggerRef }, h.createElement(jr, { onResize: function() {
      u.updatePopupPositionSync(), u.onResize();
    }, getTargetDOMNode: function() {
      return u.getPopupElement();
    } }, h.createElement("span", Lt({ ref: this.triggerRef, "trigger-placement": this.realPosition, style: Lt(Lt(Lt({ width: I && (p == null ? void 0 : p.width) === void 0 ? (f = this.childrenDomSize) === null || f === void 0 ? void 0 : f.width : "" }, A), { position: "absolute", zIndex: L || "" }), p) }, k, { className: ue }, zi(this.props)), h.createElement(E.type, Lt({ ref: E.ref }, E.props, { style: Lt(Lt({}, E.props.style), P) })), (R || w) && h.createElement("div", { className: he(ae + "-arrow-container", (r = {}, r[T + "-arrow-container"] = T, r)) }, h.createElement("div", Lt({}, w, { className: he(ae + "-arrow", (a = {}, a[T + "-arrow"] = T, a), w == null ? void 0 : w.className), style: Lt(Lt({}, this.arrowStyle), w == null ? void 0 : w.style) })))))), le = Z || this.getPopupElement() && !this.triggerRefDestoried ? h.createElement(Rx, { getContainer: this.getContainer }, ne) : null;
    return j ? h.createElement(h.Fragment, null, re, le) : le;
  }, o.displayName = "Trigger", o.contextType = Ye, o;
})(_.PureComponent), gd = function() {
  return gd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, gd.apply(this, arguments);
}, Kx = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function qx(e, o) {
  var n = e.prefixCls, r = e.label, a = Kx(e, ["prefixCls", "label"]);
  return h.createElement("li", gd({ ref: o, className: n + "-group-title" }, Ot(a, ["_key", "children", "isSelectOptGroup"])), r);
}
var Gx = h.forwardRef(qx), L0 = Gx;
L0.__ARCO_SELECT_OPTGROUP__ = true;
var yd = function() {
  return yd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, yd.apply(this, arguments);
}, Qc = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, ig = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
}, Yx = { isCheckboxGroup: false, checkboxGroupValue: [], onGroupChange: function() {
}, registerValue: function() {
}, unRegisterValue: function() {
} }, $0 = _.createContext(Yx);
function A0(e) {
  var o, n = Qc(Ut([], { defaultValue: "defaultValue" in e ? e.defaultValue || [] : void 0, value: "value" in e ? e.value || [] : void 0 }), 2), r = n[0], a = n[1], u = Qc(_.useState([]), 2), f = u[0], s = u[1], m = _.useContext(Ye), p = m.getPrefixCls, g = m.rtl, w = e.disabled, C = e.options, O = e.style, b = e.className, S = e.error, x = e.children, B = e.direction, I = B === void 0 ? "horizontal" : B, D = p("checkbox"), T = he(D + "-group", (o = {}, o[D + "-group-is-error"] = S, o[D + "-group-direction-" + I] = I, o[D + "-group-rtl"] = g, o), b), R = _.useCallback(function(P, M, V) {
    var j = r.slice();
    M ? j.push(P) : j.splice(r.indexOf(P), 1), a(j), e.onChange && e.onChange(j.filter(function(z) {
      return f.indexOf(z) > -1;
    }), V);
  }, [r, e.onChange, f]);
  return h.createElement("span", yd({ className: T, style: O }, h0(e)), h.createElement($0.Provider, { value: { isCheckboxGroup: true, checkboxGroupValue: r, onGroupChange: R, disabled: w, registerValue: function(P) {
    s(function(M) {
      return Array.from(new Set(ig(ig([], Qc(M), false), [P], false)));
    });
  }, unRegisterValue: function(P) {
    s(function(M) {
      return M.filter(function(V) {
        return V !== P;
      });
    });
  } } }, Ft(C) ? C.map(function(P) {
    var M = He(P) ? P.label : P, V = He(P) ? P.value : P, j = He(P) ? P.icon : void 0;
    return h.createElement(Ao, { disabled: w || He(P) && P.disabled, key: V, value: V, icon: j }, M);
  }) : x));
}
A0.displayName = "CheckboxGroup";
var so = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, Zl = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
}, Qx = function(e, o) {
  var n = so(_.useState(Zl([], so(o || []), false)), 2), r = n[0], a = n[1], u = _.useMemo(function() {
    var b = function(x) {
      return r.indexOf(x) > -1;
    }, S = function(x, B) {
      var I = Ft(x) ? x : [x], D;
      B ? D = Zl(Zl([], so(r), false), so(I), false) : D = r.filter(function(T) {
        return I.indexOf(T) === -1;
      }), a(Array.from(new Set(D)));
    };
    return { isSelected: b, setValueSelected: S };
  }, [r]), f = u.isSelected, s = u.setValueSelected, m = _.useMemo(function() {
    var b = function() {
      a(e);
    }, S = function() {
      a([]);
    }, x = function(D) {
      D === void 0 && (D = e);
      var T = Ft(D) ? D : [D], R = Zl([], so(r), false);
      T.forEach(function(P) {
        var M = R.indexOf(P);
        M > -1 ? R.splice(M, 1) : R.push(P);
      }), a(R);
    }, B = function() {
      return e.every(function(D) {
        return f(D);
      });
    }, I = function() {
      return e.some(function(D) {
        return f(D);
      }) && !B();
    };
    return { selectAll: b, unSelectAll: S, toggle: x, isAllSelected: B, isPartialSelected: I };
  }, [r, e, f]), p = m.selectAll, g = m.unSelectAll, w = m.toggle, C = m.isAllSelected, O = m.isPartialSelected;
  return { selected: r, setSelected: a, setValueSelected: s, selectAll: p, unSelectAll: g, toggle: w, isSelected: f, isAllSelected: C, isPartialSelected: O };
};
function Xx(e) {
  var o = e.className;
  return h.createElement("svg", { className: o, "aria-hidden": true, focusable: false, viewBox: "0 0 1024 1024", width: "200", height: "200", fill: "currentColor" }, h.createElement("path", { d: "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z", "p-id": "840" }));
}
var hu = function() {
  return hu = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, hu.apply(this, arguments);
}, Zx = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Jx = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function eO(e, o) {
  var n, r = _.useRef(null), a = _.useContext(Ye), u = a.getPrefixCls, f = a.componentConfig, s = a.rtl, m = Dt(e, {}, f == null ? void 0 : f.Checkbox), p = _.useContext($0), g = u("checkbox"), w = p.onGroupChange, C = hu({}, m);
  p.isCheckboxGroup && (C.checked = p.checkboxGroupValue.indexOf(m.value) !== -1, C.disabled = "disabled" in m ? m.disabled : p.disabled);
  var O = C.disabled, b = C.children, S = C.className, x = C.value, B = C.style, I = C.indeterminate, D = C.error, T = Zx(C, ["disabled", "children", "className", "value", "style", "indeterminate", "error"]), R = Jx(Ut(false, { value: C.checked, defaultValue: C.defaultChecked }), 2), P = R[0], M = R[1], V = he(g, (n = {}, n[g + "-disabled"] = !!O, n[g + "-indeterminate"] = !!I, n[g + "-checked"] = P, n[g + "-rtl"] = s, n.error = D, n), S);
  _.useEffect(function() {
    return p.registerValue(x), function() {
      p.unRegisterValue(x);
    };
  }, [x]);
  var j = _.useCallback(function(L) {
    L.persist(), L.stopPropagation(), M(L.target.checked), p.isCheckboxGroup && w && w(m.value, L.target.checked, L), m.onChange && m.onChange(L.target.checked, L);
  }, [w, p.isCheckboxGroup, m.onChange, m.value]), z = h.useCallback(function(L) {
    Mt(m.children) && (L.preventDefault(), r.current && r.current.click()), T.onClick && T.onClick(L);
  }, [m.children, T.onClick]), H = h.createElement(Xx, { className: g + "-mask-icon" });
  return C.icon && (h.isValidElement(C.icon) ? H = h.cloneElement(C.icon, { className: g + "-mask-icon" }) : H = C.icon), h.createElement("label", hu({ ref: o, "aria-disabled": O }, Ot(T, ["onChange"]), { onClick: z, className: V, style: B }), h.createElement("input", { value: x, disabled: !!O, ref: r, checked: !!P, onChange: j, onClick: function(L) {
    return L.stopPropagation();
  }, type: "checkbox" }), Mt(b) ? b({ checked: P, indeterminate: I }) : h.createElement(h.Fragment, null, h.createElement(kr, { prefix: g, className: g + "-mask-wrapper", disabled: P || O || I }, h.createElement("div", { className: g + "-mask" }, H)), !Xy(b) && h.createElement("span", { className: g + "-text" }, b)));
}
var Ao = h.forwardRef(eO);
Ao.displayName = "Checkbox";
Ao.Group = A0;
Ao.useCheckbox = Qx;
var ma = function() {
  return ma = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, ma.apply(this, arguments);
}, tO = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function nO(e, o) {
  var n, r, a = e.style, u = e.className, f = e.wrapperClassName, s = e.disabled, m = e.prefixCls, p = e.rtl, g = e.value, w = e.children, C = e._isMultipleMode, O = e._isUserCreatedOption, b = e._isUserCreatingOption, S = e._valueActive, x = e._valueSelect, B = e._onMouseEnter, I = e._onMouseLeave, D = e._onClick, T = tO(e, ["style", "className", "wrapperClassName", "disabled", "prefixCls", "rtl", "value", "children", "_isMultipleMode", "_isUserCreatedOption", "_isUserCreatingOption", "_valueActive", "_valueSelect", "_onMouseEnter", "_onMouseLeave", "_onClick"]), R = "value" in e ? g : "" + w, P = "children" in e ? w : "" + g, M = C ? x.indexOf(R) !== -1 : x === R, V = ma({ style: a, className: he(m + "-option", (n = {}, n[m + "-option-selected"] = M, n[m + "-option-disabled"] = s, n[m + "-option-hover"] = R === S, n[m + "-option-empty"] = !P && P !== 0 || typeof P == "string" && /^\s*$/.test(P), n[m + "-option-rtl"] = p, n), u), onMouseEnter: function(z) {
    B && B(R), T.onMouseEnter && T.onMouseEnter(z);
  }, onMouseLeave: function(z) {
    I == null || I(), T.onMouseLeave && T.onMouseLeave(z);
  }, onClick: function(z) {
    D && D(R, s), T.onClick && T.onClick(z);
  } }, Ot(T, ["_key", "extra", "isSelectOption", "onClick", "onMouseEnter", "onMouseLeave"])), j = { ref: o, role: "option", "aria-selected": M };
  return O && Object.assign(j, { "data-user-created": true }), b && Object.assign(j, { "data-user-creating": true }), C ? h.createElement("li", ma({}, j, { className: he(m + "-option-wrapper", (r = {}, r[m + "-option-wrapper-selected"] = M, r[m + "-option-wrapper-disabled"] = s, r), f) }), h.createElement(Ao, { "aria-hidden": "true", className: m + "-checkbox", checked: M, disabled: s, onChange: V.onClick }), h.createElement("span", ma({}, V), P)) : h.createElement("li", ma({}, j, V), P);
}
var rO = h.forwardRef(nO), rp = rO;
rp.__ARCO_SELECT_OPTION__ = true;
var ag = function(e) {
  return JSON.stringify({ code: e.code, ctrl: !!e.ctrl, shift: !!e.shift, alt: !!e.alt, meta: !!e.meta });
};
function V0(e) {
  var o = {};
  return e.forEach(function(n, r) {
    r = typeof r == "number" ? { code: r } : r, o[ag(r)] = n;
  }), function(n) {
    var r = ag({ code: n.keyCode || n.which, ctrl: !!n.ctrlKey, shift: !!n.shiftKey, alt: !!n.altKey, meta: !!n.metaKey }), a = o[r];
    a && (n.stopPropagation(), a(n) === false && n.preventDefault());
  };
}
function og(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lg(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? og(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : og(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function iO(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = lg(lg({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-down") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M39.6 17.443 24.043 33 8.487 17.443" }));
}
var Pa = h.forwardRef(iO);
Pa.defaultProps = { isIcon: true };
Pa.displayName = "IconDown";
var wo = function() {
  return wo = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, wo.apply(this, arguments);
}, aO = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Xc = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, oO = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "blue", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], lO = { size: "default" };
function uO(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = r.rtl, s = ku(), m = Dt(e, lO, u == null ? void 0 : u.Tag), p = m.className, g = m.style, w = m.children, C = m.color, O = m.closable, b = m.checkable, S = m.defaultChecked, x = m.size, B = m.onClose, I = m.onCheck, D = m.icon, T = m.closeIcon, R = m.bordered, P = m.__closeIconProps, M = aO(m, ["className", "style", "children", "color", "closable", "checkable", "defaultChecked", "size", "onClose", "onCheck", "icon", "closeIcon", "bordered", "__closeIconProps"]), V = a("tag"), j = Xc(_.useState("visible" in m ? m.visible : true), 2), z = j[0], H = j[1], L = Xc(_.useState("checked" in m ? m.checked : S), 2), Q = L[0], q = L[1], Z = Xc(_.useState(), 2), A = Z[0], W = Z[1], k = "checked" in m ? m.checked : Q, X = "visible" in m ? m.visible : z;
  function U(ne) {
    var le = B && B(ne);
    le && le.then ? (W(true), le.then(function() {
      W(false), H(false);
    }).catch(function() {
      W(false);
    })) : H(false);
  }
  function E() {
    var ne = !k;
    "checked" in m || q(ne), I && I(ne);
  }
  var F = C && oO.indexOf(C) !== -1 ? C : "", G = b ? k : true, ae = he(V, (n = {}, n[V + "-loading"] = A, n[V + "-hide"] = !X, n[V + "-" + F] = F, n[V + "-checkable"] = b, n[V + "-checked"] = G, n[V + "-size-" + x] = x, n[V + "-bordered"] = R, n[V + "-custom-color"] = G && C && !F, n[V + "-rtl"] = f, n), p), ue = wo({}, g);
  C && !F && G && (ue.backgroundColor = C, ue.borderColor = C);
  var re = Ot(M, ["visible"]);
  return b && (re.onClick = E), h.createElement("div", wo({ ref: o, style: ue, className: ae }, re), D && h.createElement("span", { className: V + "-icon" }, D), h.createElement("span", { className: V + "-content" }, w), O && !A && T !== null && h.createElement(kr, wo({ prefix: V, className: V + "-close-btn", onClick: U, role: "button", tabIndex: 0 }, s({ onPressEnter: U }), { "aria-label": "Close" }, P), T !== void 0 ? T : h.createElement(Nr, null)), A && h.createElement("span", { className: V + "-loading-icon" }, h.createElement(ui, null)));
}
var Ea = _.forwardRef(uO);
Ea.displayName = "Tag";
var Or = function() {
  return Or = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Or.apply(this, arguments);
}, sO = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, cO = { position: "top", trigger: "hover", escToClose: false, unmountOnExit: true, blurToHide: true, popupHoverStay: true }, fO = { enter: 300, exit: 100 }, dO = { left: 12, right: 12, top: 12, bottom: 12 };
function pO(e, o) {
  var n = _.useContext(Ye), r = n.getPrefixCls, a = n.componentConfig, u = Dt(e, cO, a == null ? void 0 : a.Tooltip), f = u.style, s = u.className, m = u.children, p = u.trigger, g = u.escToClose, w = u.defaultPopupVisible, C = u.position, O = u.unmountOnExit, b = u.popupVisible, S = u.prefixCls, x = u.blurToHide, B = u.popupHoverStay, I = u.disabled, D = u.onVisibleChange, T = u.triggerProps, R = u.childrenPrefix, P = u.getPopupContainer, M = u.content, V = u.mini, j = u.color, z = sO(u, ["style", "className", "children", "trigger", "escToClose", "defaultPopupVisible", "position", "unmountOnExit", "popupVisible", "prefixCls", "blurToHide", "popupHoverStay", "disabled", "onVisibleChange", "triggerProps", "childrenPrefix", "getPopupContainer", "content", "mini", "color"]), H = _.useRef(), L = function(A, W) {
    A === void 0 && (A = 0), H.current && H.current.updatePopupPosition(A, W);
  };
  _.useImperativeHandle(o, function() {
    return { updatePopupPosition: L, getRootDOMNode: function() {
      var A, W;
      return (W = (A = H.current) === null || A === void 0 ? void 0 : A.getRootDOMNode) === null || W === void 0 ? void 0 : W.call(A);
    } };
  }, []);
  var Q = S || r("tooltip"), q = Or(Or(Or(Or({}, Pu(z, z0)), zi(z)), T), { className: he(s, T == null ? void 0 : T.className) }), Z = Mt(M) ? M() : M;
  return "popupVisible" in u ? q.popupVisible = b : Po(Z, true) && (q.popupVisible = false), (q.showArrow !== false || q.arrowProps) && (q.arrowProps = q.arrowProps || {}, j && (q.arrowProps.style = Or({ backgroundColor: j }, q.arrowProps.style))), h.createElement(np, Or({ style: Or({ maxWidth: 350 }, f), ref: H, classNames: "zoomInFadeOut", duration: fO, popup: function() {
    var A;
    return h.createElement("div", { style: { backgroundColor: j }, className: he(Q + "-content", Q + "-content-" + C, (A = {}, A[Q + "-mini"] = V, A)), role: "tooltip" }, h.createElement("div", { className: Q + "-content-inner" }, Z));
  }, position: C, disabled: I, trigger: p, escToClose: g, showArrow: true, popupAlign: dO, mouseEnterDelay: 200, mouseLeaveDelay: 200, unmountOnExit: O, popupHoverStay: B, blurToHide: x, childrenPrefix: R || Q, getPopupContainer: P, onVisibleChange: D, defaultPopupVisible: w }, q), m);
}
var Mi = _.forwardRef(pO);
Mi.displayName = "Tooltip";
var gu = function() {
  return gu = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, gu.apply(this, arguments);
}, vO = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, mO = { position: "top", trigger: "hover", unmountOnExit: true };
function hO(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = r.rtl, s = Dt(e, mO, u == null ? void 0 : u.Popover), m = s.style, p = s.className, g = s.children, w = s.position, C = s.getPopupContainer, O = s.trigger, b = s.defaultPopupVisible, S = s.popupVisible, x = s.triggerProps, B = s.unmountOnExit, I = s.onVisibleChange, D = s.content, T = s.title, R = vO(s, ["style", "className", "children", "position", "getPopupContainer", "trigger", "defaultPopupVisible", "popupVisible", "triggerProps", "unmountOnExit", "onVisibleChange", "content", "title"]), P = a("popover"), M = Mt(T) ? T() : T, V = Mt(D) ? D() : D, j = Po(M, true) && Po(V, true) ? null : h.createElement("div", { className: he(P + "-inner", (n = {}, n[P + "-inner-rtl"] = f, n)) }, M ? h.createElement("div", { className: P + "-title" }, M) : null, h.createElement("div", { className: P + "-inner-content" }, V));
  return h.createElement(Mi, gu({}, R, { ref: o, style: gu({ maxWidth: 350 }, m), className: p, prefixCls: P, getPopupContainer: C, position: w, trigger: O, content: j, popupHoverStay: true, unmountOnExit: B, triggerProps: x, defaultPopupVisible: b, onVisibleChange: I || (x ? x.onVisibleChange : void 0), childrenPrefix: P }, "popupVisible" in s ? { popupVisible: S } : {}), typeof g == "string" ? h.createElement("span", null, g) : g);
}
var Na = _.forwardRef(hO);
Na.displayName = "Popover";
var Zc = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function gO(e) {
  var o, n = e.prefixCls, r = e.style, a = e.children, u = e.direction, f = e.disabled, s = e.droppable, m = s === void 0 ? true : s, p = e.onDrop, g = e.onDragStart, w = e.onDragEnd, C = e.onDragOver, O = e.onDragLeave, b = _.useRef(null), S = _.useRef(null), x = Zc(_.useState("none"), 2), B = x[0], I = x[1], D = Zc(_.useState(false), 2), T = D[0], R = D[1], P = Zc(_.useState(null), 2), M = P[0], V = P[1];
  return _.useEffect(function() {
    return function() {
      S.current && clearTimeout(S.current);
    };
  }, []), _.useEffect(function() {
    B === "dragged" && (S.current = setTimeout(function() {
      return I("none");
    }, 1e3));
  }, [B]), h.createElement("li", { draggable: true, ref: b, style: r, className: he(n + "-item", (o = {}, o[n + "-item-" + B] = B !== "none", o[n + "-item-gap-" + M] = M, o[n + "-item-disabled"] = f, o[n + "-item-dragover"] = T, o)), onDragStart: function(j) {
    j.stopPropagation(), I("dragging");
    try {
      j.dataTransfer.setData("text/plain", "");
    } catch {
    }
    g && g(j);
  }, onDragEnd: function(j) {
    j.stopPropagation(), R(false), I("dragged"), w && w(j);
  }, onDragOver: function(j) {
    if (m) {
      j.stopPropagation(), j.preventDefault();
      var z = b.current.getBoundingClientRect();
      V(u === "vertical" ? j.pageY > window.pageYOffset + z.top + z.height / 2 ? "bottom" : "top" : j.pageX > window.pageXOffset + z.left + z.width / 2 ? "right" : "left"), R(true), C && C(j);
    }
  }, onDragLeave: function(j) {
    m && (j.stopPropagation(), R(false), O && O(j));
  }, onDrop: function(j) {
    m && (j.stopPropagation(), j.preventDefault(), R(false), V(null), I("none"), p && p(j, M));
  } }, a);
}
var yO = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function _O(e) {
  var o = _.useContext(Ye).getPrefixCls, n = o("draggable"), r = e.className, a = e.children, u = e.direction, f = u === void 0 ? "vertical" : u, s = e.onIndexChange, m = e.itemWrapperStyle, p = yO(_.useState(null), 2), g = p[0], w = p[1];
  return h.createElement("div", { className: he(n, r) }, h.Children.map(a, function(C, O) {
    return h.createElement(gO, { style: m, prefixCls: n, direction: f, onDragStart: function() {
      return w(O);
    }, onDragEnd: function() {
      return w(null);
    }, onDrop: function(b, S) {
      var x = g, B = S === "left" || S === "top" ? O : O + 1;
      s && x !== B && s(B, x);
    } }, C);
  }));
}
function ug(e) {
  var o, n = _.useContext(Ye).getPrefixCls, r = n("overflow-item"), a = _.useRef();
  _.useEffect(function() {
    return e.onResize(a.current), function() {
      e.unregister(a.current);
    };
  }, []);
  var u = e.hidden;
  return h.createElement(jr, { onResize: function(f) {
    e.onResize(f == null ? void 0 : f[0].target);
  } }, h.createElement("div", { ref: a, className: he(r, e.className, (o = {}, o[r + "-hidden"] = u, o)) }, e.children));
}
var Co = function() {
  return Co = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Co.apply(this, arguments);
}, co = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, wO = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
};
function CO(e) {
  var o = _.useContext(Ye).getPrefixCls, n = o("overflow"), r = e.items, a = e.suffixItems, u = e.ellipsisNode || (function(T) {
    var R = T.ellipsisCount;
    return "+" + R;
  }), f = co(_.useState(), 2), s = f[0], m = f[1], p = co(_.useState(), 2), g = p[0], w = p[1], C = co(_.useState({}), 2), O = C[0], b = C[1], S = co(_.useState({}), 2), x = S[0], B = S[1], I = r.length - g, D = I > 0 ? u({ ellipsisCount: I }) : null;
  return _.useLayoutEffect(function() {
    var T = Object.values(O).length, R = Object.values(x).reduce(function(V, j) {
      return V + ((j == null ? void 0 : j.width) || 0);
    }, 0), P = T;
    Object.keys(O).some(function(V, j) {
      var z = O[V];
      if (z && R + z.width > s) return P = j, true;
      R += (z == null ? void 0 : z.width) || 0;
    });
    var M = Math.max(P, 0);
    g !== M && w(M);
  }, [O, s, x, g]), h.createElement(jr, { onResize: function(T) {
    var R;
    m(((R = T == null ? void 0 : T[0]) === null || R === void 0 ? void 0 : R.target.clientWidth) || 0);
  } }, h.createElement("div", { className: he(n, e.className) }, r.map(function(T, R) {
    var P, M = (((P = T) === null || P === void 0 ? void 0 : P.key) || R) + "_overflow_item_" + R;
    return h.createElement(ug, { key: M, onResize: function(V) {
      b(function(j) {
        return j[M] = { node: V, width: V.clientWidth }, j;
      });
    }, unregister: function() {
      b(function(V) {
        return delete V[M], V;
      });
    }, hidden: g < R + 1 }, T);
  }), wO([D], co(a), false).map(function(T, R) {
    if (!T) return null;
    var P = ((T == null ? void 0 : T.key) || R) + "_overflow_suffix_item";
    return h.createElement(ug, { key: P, className: n + "-suffix-item", onResize: function(M) {
      B(function(V) {
        var j, z = M.clientWidth, H = V[P];
        return (H == null ? void 0 : H.node) === M && H.width === z ? V : Co(Co({}, V), (j = {}, j["" + P] = { node: M, width: z }, j));
      });
    }, unregister: function() {
      B(function(M) {
        return delete M[P], Co({}, M);
      });
    } }, T);
  })));
}
var Sr = function() {
  return Sr = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Sr.apply(this, arguments);
}, fo = function(e, o, n, r) {
  function a(u) {
    return u instanceof n ? u : new n(function(f) {
      f(u);
    });
  }
  return new (n || (n = Promise))(function(u, f) {
    function s(g) {
      try {
        p(r.next(g));
      } catch (w) {
        f(w);
      }
    }
    function m(g) {
      try {
        p(r.throw(g));
      } catch (w) {
        f(w);
      }
    }
    function p(g) {
      g.done ? u(g.value) : a(g.value).then(s, m);
    }
    p((r = r.apply(e, o || [])).next());
  });
}, po = function(e, o) {
  var n = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, r, a, u, f;
  return f = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
    return this;
  }), f;
  function s(p) {
    return function(g) {
      return m([p, g]);
    };
  }
  function m(p) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (r = 1, a && (u = p[0] & 2 ? a.return : p[0] ? a.throw || ((u = a.return) && u.call(a), 0) : a.next) && !(u = u.call(a, p[1])).done) return u;
      switch (a = 0, u && (p = [p[0] & 2, u.value]), p[0]) {
        case 0:
        case 1:
          u = p;
          break;
        case 4:
          return n.label++, { value: p[1], done: false };
        case 5:
          n.label++, a = p[1], p = [0];
          continue;
        case 7:
          p = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (u = n.trys, !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2)) {
            n = 0;
            continue;
          }
          if (p[0] === 3 && (!u || p[1] > u[0] && p[1] < u[3])) {
            n.label = p[1];
            break;
          }
          if (p[0] === 6 && n.label < u[1]) {
            n.label = u[1], u = p;
            break;
          }
          if (u && n.label < u[2]) {
            n.label = u[2], n.ops.push(p);
            break;
          }
          u[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      p = o.call(e, n);
    } catch (g) {
      p = [6, g], a = 0;
    } finally {
      r = u = 0;
    }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: true };
  }
}, xO = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, la = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, sg = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
}, _d = 300, OO = "responsive", bO = "__input_" + Math.random().toFixed(10).slice(2), vo = function(e) {
  return e == null;
}, Jl = function(e) {
  e.target.tagName !== "INPUT" && e.preventDefault();
}, cg = function(e) {
  return Ft(e) ? e.map(function(o) {
    return He(o) ? Sr(Sr({}, o), { label: "label" in o ? o.label : o.value, value: o.value, closable: o.closable }) : { label: o, value: o };
  }) : [];
}, EO = function(e) {
  var o = _.useRef(0), n = _.useRef(e.length);
  return _.useEffect(function() {
    o.current = e.length === 0 && n.current > 0 ? _d : 0, n.current = e.length;
  }, [e]), o;
}, fg = function(e) {
  var o = e.prefixCls, n = e.children, r = e.animation;
  return h.createElement("div", { className: o + "-inner" }, r ? h.createElement(zo, { component: null }, n) : n);
}, SO = { animation: true, validate: function(e, o) {
  return e && o.every(function(n) {
    return n.value !== e;
  });
} };
function PO(e, o) {
  var n, r, a = this, u = _.useContext(Ye), f = u.getPrefixCls, s = u.size, m = u.componentConfig, p = u.rtl, g = Dt(e, SO, m == null ? void 0 : m.InputTag), w = g.className, C = g.style, O = g.placeholder, b = g.error, S = g.disabled, x = g.readOnly, B = g.allowClear, I = g.autoFocus, D = g.labelInValue, T = g.disableInput, R = g.animation, P = g.saveOnBlur, M = g.dragToSort, V = g.icon, j = g.prefix, z = g.suffix, H = g.addBefore, L = g.addAfter, Q = g.tokenSeparators, q = g.validate, Z = g.renderTag, A = g.tagClassName, W = g.maxTagCount, k = g.onInputChange, X = g.onKeyDown, U = g.onPaste, E = g.onChange, F = g.onFocus, G = g.onBlur, ae = g.onPressEnter, ue = g.onRemove, re = g.onClear, ne = g.onClick, le = xO(g, ["className", "style", "placeholder", "error", "disabled", "readOnly", "allowClear", "autoFocus", "labelInValue", "disableInput", "animation", "saveOnBlur", "dragToSort", "icon", "prefix", "suffix", "addBefore", "addAfter", "tokenSeparators", "validate", "renderTag", "tagClassName", "maxTagCount", "onInputChange", "onKeyDown", "onPaste", "onChange", "onFocus", "onBlur", "onPressEnter", "onRemove", "onClear", "onClick"]), ee = f("input-tag"), se = "size" in g ? g.size : s, ke = typeof W == "object" ? W.count : W, Pe = _.useRef(), De = _.useRef(null), Ee = _.useRef(), ce = la(_.useState(false), 2), fe = ce[0], be = ce[1], ze = la(Ut([], { defaultValue: "defaultValue" in g ? cg(g.defaultValue) : void 0, value: "value" in g ? cg(g.value) : void 0 }), 2), ge = ze[0], Fe = ze[1], Qe = la(Ut("", { value: g.inputValue }), 2), et = Qe[0], xe = Qe[1], ye = EO(ge), we = !!(M && !x && !S);
  _.useImperativeHandle(o, function() {
    var Se, je;
    return { blur: (Se = Pe.current) === null || Se === void 0 ? void 0 : Se.blur, focus: (je = Pe.current) === null || je === void 0 ? void 0 : je.focus, getRootDOMNode: function() {
      return Ee.current;
    } };
  }, []);
  var Me = function(Se, je) {
    S || x || ("value" in g || Fe(Se), E && E(D ? Se : Se.map(function(me) {
      return me == null ? void 0 : me.value;
    }), je));
  }, Ae = function(Se, je, me) {
    S || x || (ue && ue(Se, je, me), Me(sg(sg([], la(ge.slice(0, je)), false), la(ge.slice(je + 1)), false), "remove"));
  }, Le = V0(/* @__PURE__ */ new Map([[P0.code, function(Se) {
    if (!Se.target.value && ge.length) for (var je = ge.length - 1; je >= 0; je--) {
      var me = ge[je];
      if (me.closable !== false) {
        Ae(me, je, Se);
        return;
      }
    }
  }]])), Oe = function() {
    return fo(a, void 0, void 0, function() {
      var Se, je, me;
      return po(this, function(Ie) {
        switch (Ie.label) {
          case 0:
            return Ie.trys.push([0, 4, , 5]), typeof q != "function" ? [3, 2] : [4, q(et, ge)];
          case 1:
            return je = Ie.sent(), [3, 3];
          case 2:
            je = true, Ie.label = 3;
          case 3:
            return Se = je, Se && (Me(ge.concat({ value: Se === true ? et : Se, label: et }), "add"), xe("")), [3, 5];
          case 4:
            return me = Ie.sent(), console.error(me), [3, 5];
          case 5:
            return [2];
        }
      });
    });
  }, tt = function(Se, je, me) {
    var Ie;
    me === void 0 && (me = false);
    var Je = Se.value, lt = Se.label, Ke = !x && !S && Se.closable !== false, gt = typeof Je == "object" ? je : Je, Et = function(yn) {
      Ae(Se, je, yn);
    };
    if (!me && typeof ke == "number" && je >= ke) return je === ge.length - 1 ? (lt = qe(ge.length - Number(ke)), Ke = false, { valueKey: gt, dom: lt }) : { valueKey: gt, dom: null };
    if (Z) return { valueKey: gt, dom: Z({ value: Je, label: lt, closable: Ke, onClose: Et }, je, ge) };
    var an = { closable: Ke, onClose: Et, visible: true, children: To(lt), closeIcon: V == null ? void 0 : V.removeIcon, __closeIconProps: { onMouseDown: Jl }, className: he(ee + "-tag", (Ie = {}, Ie[A] = A, Ie)), title: typeof lt == "string" ? lt : void 0 };
    return { valueKey: gt, dom: h.createElement(Ea, Sr({ key: gt + "-tag" }, an)) };
  };
  function qe(Se) {
    var je = typeof W == "object" && W.render ? W.render : function() {
      return h.createElement("span", { className: ee + "-tag-ellipsis" }, "+", Se);
    }, me = He(W) && W.popoverProps;
    return h.createElement(Na, Sr({ content: h.createElement(h.Fragment, null, ge.map(function(Ie, Je) {
      return { tagValue: Ie, tagIndex: Je };
    }).slice(-Se).map(function(Ie) {
      var Je, lt = Ie.tagValue, Ke = Ie.tagIndex;
      return (Je = tt(lt, Ke, true)) === null || Je === void 0 ? void 0 : Je.dom;
    })) }, me || {}, { children: je(Se, ge) }));
  }
  var dt = function(Se) {
    return fo(a, void 0, void 0, function() {
      var je, me, Ie = this;
      return po(this, function(Je) {
        switch (Je.label) {
          case 0:
            return De.current = null, Ft(Q) && Q.length ? (je = Se.split(new RegExp("[" + Q.join("") + "]")), je.length > 1 ? (De.current = Date.now(), me = [], [4, Promise.all(je.map(function(lt) {
              return fo(Ie, void 0, void 0, function() {
                var Ke, gt, Et;
                return po(this, function(an) {
                  switch (an.label) {
                    case 0:
                      return lt ? typeof q != "function" ? [3, 2] : [4, q(lt, ge)] : [3, 4];
                    case 1:
                      return Et = an.sent(), [3, 3];
                    case 2:
                      Et = true, an.label = 3;
                    case 3:
                      return gt = Et, [3, 5];
                    case 4:
                      gt = false, an.label = 5;
                    case 5:
                      return Ke = gt, Ke && me.push({ value: Ke === true ? lt : Ke, label: lt }), [2];
                  }
                });
              });
            }))]) : [3, 2]) : [3, 2];
          case 1:
            Je.sent(), me.length && Me(ge.concat(me), "add"), Je.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, nt = B && !S && !x && ge.length ? h.createElement(kr, { size: se, key: "clearIcon", className: ee + "-clear-icon", onClick: function(Se) {
    var je;
    Se.stopPropagation(), Me([], "clear"), fe || (je = Pe.current) === null || je === void 0 || je.focus(), re == null || re();
  } }, V && V.clearIcon || h.createElement(Nr, null)) : null, it = S || T, $t = _.useMemo(function() {
    var Se = {}, je = ge.map(function(me, Ie) {
      var Je = Se[me.value] || 0, lt = Je >= 1;
      Se[me.value] = Je + 1;
      var Ke = tt(me, Ie), gt = Ke.dom, Et = Ke.valueKey;
      return h.isValidElement(gt) ? h.createElement(Ri, { key: lt ? Et + "-" + Ie : Et, timeout: _d, classNames: "zoomIn" }, gt) : gt;
    });
    return je;
  }, [ge, S, x]), jt = [h.createElement(Ri, { key: bO, timeout: _d, classNames: "zoomIn" }, h.createElement(ju, Sr({ autoComplete: "off", size: se, disabled: it, readOnly: x, ref: Pe, autoFocus: I, placeholder: ge.length ? "" : O, prefixCls: ee + "-input" }, ge.length ? {} : { style: { order: -1 } }, { autoFitWidth: { delay: function() {
    return ye.current;
  }, pure: true }, onPressEnter: function(Se) {
    return fo(a, void 0, void 0, function() {
      return po(this, function(je) {
        switch (je.label) {
          case 0:
            return et && Se.preventDefault(), ae == null || ae(Se), [4, Oe()];
          case 1:
            return je.sent(), [2];
        }
      });
    });
  }, onFocus: function(Se) {
    !it && !x && (be(true), F == null || F(Se));
  }, onBlur: function(Se) {
    return fo(a, void 0, void 0, function() {
      return po(this, function(je) {
        switch (je.label) {
          case 0:
            return be(false), G == null || G(Se), P ? [4, Oe()] : [3, 2];
          case 1:
            je.sent(), je.label = 2;
          case 2:
            return xe(""), [2];
        }
      });
    });
  }, value: et, onChange: function(Se, je) {
    k == null || k(Se, je), je.nativeEvent.inputType !== "insertFromPaste" && dt(Se), De.current ? xe("") : xe(Se);
  }, onKeyDown: function(Se) {
    Le(Se), X == null || X(Se);
  }, onPaste: function(Se) {
    U == null || U(Se), dt(Se.clipboardData.getData("text"));
  } })))], It = !vo(j), at = !vo(z) || !vo(nt), Kt = !vo(H), Ht = !vo(L), bt = Kt || Ht, At = g.status || (b ? "error" : void 0), cn = he(ee, (n = {}, n[ee + "-size-" + se] = se, n[ee + "-disabled"] = S, n[ee + "-" + At] = At, n[ee + "-focus"] = fe, n[ee + "-readonly"] = x, n[ee + "-has-suffix"] = at, n[ee + "-has-placeholder"] = !ge.length, n[ee + "-rtl"] = p, n)), qt = { style: C, className: w }, fn = h.createElement("div", Sr({}, Ot(le, ["status", "size", "defaultValue", "value", "inputValue"]), bt ? {} : qt, { className: bt ? cn : he(cn, qt.className), onMouseDown: function(Se) {
    fe && Jl(Se);
  }, onClick: function(Se) {
    var je;
    !fe && ((je = Pe.current) === null || je === void 0 || je.focus()), ne && ne(Se);
  }, ref: bt ? void 0 : Ee }), h.createElement("div", { className: ee + "-view" }, It && h.createElement("div", { className: ee + "-prefix", onMouseDown: Jl }, j), we ? h.createElement(fg, { key: "transitionGroupWithDrag", prefixCls: ee, animation: R }, h.createElement(_O, { itemWrapperStyle: { display: "inline-block" }, direction: "horizontal", onIndexChange: function(Se, je) {
    var me = function(Ie, Je, lt) {
      Ie = Ie.slice();
      var Ke = Je > lt, gt = la(Ie.splice(Je, 1), 1), Et = gt[0];
      return Ie.splice(Ke ? lt : lt - 1, 0, Et), Ie;
    };
    je < 0 || Se < 0 || je >= ge.length || Se > ge.length || Me(me(ge, je, Se), "sort");
  } }, $t), jt) : h.createElement(fg, { prefixCls: ee, animation: R, key: "max_tag_group_" + ke }, ke === OO ? h.createElement(CO, { items: $t, suffixItems: jt, ellipsisNode: function(Se) {
    var je = Se.ellipsisCount;
    return qe(je);
  } }) : $t.concat(jt)), at && h.createElement("div", { className: ee + "-suffix", onMouseDown: Jl }, nt, z)));
  return bt ? h.createElement("div", Sr({}, qt, { className: he(ee + "-wrapper", (r = {}, r[ee + "-wrapper-rtl"] = p, r), qt.className), ref: Ee }), Kt && h.createElement("div", { className: ee + "-addbefore" }, H), fn, Ht && h.createElement("div", { className: ee + "-addafter" }, L)) : fn;
}
var F0 = h.forwardRef(PO);
F0.displayName = "InputTag";
function NO(e, o) {
  var n = {};
  return Object.keys(e).forEach(function(r) {
    o.indexOf(r) !== -1 && (n[r] = e[r]);
  }), n;
}
var kO = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function ip() {
  var e = kO(_.useReducer(function(n) {
    return n + 1;
  }, 0), 2), o = e[1];
  return o;
}
var jO = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, IO = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
};
function TO(e) {
  var o = _.useRef();
  return o.current = e, _.useCallback(function() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var a = o.current;
    return a && a.apply(void 0, IO([], jO(n), false));
  }, [o.current]);
}
var hn = function() {
  return hn = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, hn.apply(this, arguments);
}, H0 = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Jc = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, ef = "__arco_value_tag_placeholder", wd = function(e) {
  var o;
  return typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(function(n) {
    return wd(n);
  }).join("") : h.isValidElement(e) ? wd((o = e.props) === null || o === void 0 ? void 0 : o.children) : "";
}, ni = { BEFORE: 0, EDITING: 1, NONE: 2 }, MO = h.forwardRef(function(e, o) {
  var n, r, a, u = e.id, f = e.style, s = e.className, m = e.size, p = e.bordered, g = e.allowClear, w = e.allowCreate, C = e.status, O = e.loading, b = e.disabled, S = e.animation, x = e.prefixCls, B = e.suffixIcon, I = e.arrowIcon, D = e.removeIcon, T = e.clearIcon, R = e.placeholder, P = e.renderText, M = e.value, V = e.inputValue, j = e.popupVisible, z = e.maxTagCount, H = e.isMultiple, L = e.isEmptyValue, Q = e.prefix, q = e.ariaControls, Z = e.renderTag, A = e.dragToSort, W = e.rtl, k = e.htmlDataAttributes, X = e.onKeyDown, U = e.onChangeInputValue, E = e.onPaste, F = e.onClear, G = e.onFocus, ae = e.onBlur, ue = e.onRemoveCheckedItem, re = e.onSort, ne = H0(e, ["id", "style", "className", "size", "bordered", "allowClear", "allowCreate", "status", "loading", "disabled", "animation", "prefixCls", "suffixIcon", "arrowIcon", "removeIcon", "clearIcon", "placeholder", "renderText", "value", "inputValue", "popupVisible", "maxTagCount", "isMultiple", "isEmptyValue", "prefix", "ariaControls", "renderTag", "dragToSort", "rtl", "htmlDataAttributes", "onKeyDown", "onChangeInputValue", "onPaste", "onClear", "onFocus", "onBlur", "onRemoveCheckedItem", "onSort"]), le = _.useRef(null), ee = _.useRef(null), se = _.useContext(Ye), ke = se.size, Pe = se.getPrefixCls, De = Jc(_.useState(ni.NONE), 2), Ee = De[0], ce = De[1], fe = Jc(_.useState(false), 2), be = fe[0], ze = fe[1], ge = Jc(_.useState(), 2), Fe = ge[0], Qe = ge[1], et = ip(), xe = "showSearch" in e ? e.showSearch : H, ye = xe || w, we = m || ke, Me = be || j, Ae = He(xe) && xe.retainInputValue, Le = !H && M !== void 0 ? P(M) : null, Oe = (a = Le == null ? void 0 : Le.text) !== null && a !== void 0 ? a : "", tt = Le == null ? void 0 : Le.textInput, qe = tt !== void 0 ? tt : typeof Oe == "string" || typeof Oe == "number" ? String(Oe) : wd(Oe), dt = function(me) {
    me && me.preventDefault();
  }, nt = function(me) {
    var Ie = ye ? le.current : ee.current;
    Ie && (me === "focus" ? Ie.focus() : Ie.blur());
  }, it = function(me, Ie) {
    ye && Ie.target === ee.current || (me === "focus" ? (ze(true), G && G(Ie)) : (ze(false), ae && ae(Ie)));
  }, $t = function(me) {
    if (!(ye && me.currentTarget === ee.current)) {
      var Ie = me.keyCode || me.which;
      Ie === li.code && me.preventDefault(), X && X(me);
    }
  };
  _.useEffect(function() {
    nt(j ? "focus" : "blur"), ye && ce(j ? ni.BEFORE : ni.NONE);
  }, [j]), _.useImperativeHandle(o, function() {
    return { dom: ee.current, getRootDOMNode: function() {
      return ee.current;
    }, focus: nt.bind(null, "focus"), blur: nt.bind(null, "blur"), getWidth: function() {
      return ee.current && ee.current.clientWidth;
    } };
  });
  var jt = "arrowIcon" in e ? I === null ? null : h.createElement("div", { className: x + "-arrow-icon" }, I) : h.createElement("div", { className: x + "-arrow-icon" }, h.createElement(Pa, null)), It = O ? h.createElement("span", { className: x + "-loading-icon" }, h.createElement(ui, null)) : B ? h.createElement("span", { className: x + "-suffix-icon" }, B) : e.showSearch && j ? h.createElement("div", { className: x + "-search-icon" }, h.createElement(Io, null)) : jt, at = { paste: E, keyDown: $t, focus: function(me) {
    me.stopPropagation(), it("focus", me);
  }, blur: function(me) {
    me.stopPropagation(), Qe(void 0), it("blur", me);
  }, change: function(me, Ie) {
    ce(ni.EDITING), U && U(me, Ie);
  }, compositionStart: function(me) {
    ce(ni.EDITING), Qe(me.target.value);
  }, compositionUpdate: function(me) {
    ce(ni.EDITING), Qe(me.target.value);
  }, compositionEnd: function() {
    Qe(void 0);
  } }, Kt = function() {
    var me, Ie;
    switch (Ee) {
      case ni.BEFORE:
        Ie = V || (Ae ? qe : "");
        break;
      case ni.EDITING:
        Ie = V || "";
        break;
      default:
        Ie = Oe;
        break;
    }
    var Je = !!(Me && ye || L), lt = typeof Ie == "string" || typeof Ie == "number" ? String(Ie) : "", Ke = { style: { width: "100%" }, value: Je ? lt : "", placeholder: ye && (qe || Oe === 0) ? qe : R };
    return ye ? (Ke.onPaste = at.paste, Ke.onKeyDown = at.keyDown, Ke.onFocus = at.focus, Ke.onBlur = at.blur, Ke.onChange = at.change, Ke.onCompositionStart = at.compositionStart, Ke.onCompositionUpdate = at.compositionUpdate, Ke.onCompositionEnd = at.compositionEnd) : (Ke.tabIndex = -1, Ke.style.pointerEvents = "none"), h.createElement("span", { className: x + "-view-selector" }, h.createElement(ju, hn({ "aria-hidden": !Je || void 0, ref: le, disabled: b, className: he(x + "-view-input", (me = {}, me[x + "-hidden"] = !Je, me)), autoComplete: "off" }, Ke)), Je ? h.createElement("span", { className: x + "-view-value-mirror" }, To(Fe !== void 0 ? Fe : Ke.value ? lt : Ke.placeholder)) : null, h.createElement("span", { style: Je ? { display: "none" } : {}, className: x + "-view-value" }, To(L ? Ke.placeholder : Ie)));
  }, Ht = TO(P), bt = He(z) ? z.count : z, At = function(me) {
    var Ie = Ht(me);
    return { value: me, label: Ie.text, closable: !Ie.disabled };
  }, cn = _.useMemo(function() {
    if (!H) return [];
    var me = gn(M) ? [] : [].concat(M), Ie = Rt(bt), Je = (Ie ? me.slice(0, bt) : me).map(function(lt) {
      return At(lt);
    });
    return Je;
  }, [M, H, z, Ht]), qt = function() {
    var me = He(z) ? z.count : z, Ie = He(z) && z.showPopover, Je = Pe("input-tag"), lt = function(yt) {
      var Jt = He(z) && Mt(z.render) ? z.render(yt) : me === "responsive" ? h.createElement(Ea, { key: ef, className: Je + "-tag" }, "+", yt, "...") : "+" + yt + "...";
      return Jt;
    }, Ke = gn(M) ? [] : [].concat(M), gt = function() {
      for (var yt = Ke.length - 1; yt >= 0; yt--) {
        var Jt = Ke[yt], en = Ht(Jt);
        if (!en.disabled) return yt;
      }
      return -1;
    }, Et = { onPaste: at.paste, onKeyDown: at.keyDown, onFocus: at.focus, onBlur: at.blur, onInputChange: at.change, onRemove: function(yt, Jt, en) {
      var tn = en.keyCode || en.which, oe = -1;
      tn === P0.code && (oe = gt()) !== -1 && (yt = Ke[oe], Jt = oe), z && et(), ue && ue(yt, Jt, en);
    } }, an = { suffix: null, prefix: null, addBefore: null, addAfter: null, allowClear: false, labelInValue: false }, yn = (function() {
      if (Rt(me)) {
        var yt = Ke.length - me;
        if (yt > 0) {
          var Jt = { label: lt(yt), closable: false, value: ef };
          if (Ie) {
            var en = Ke.map(function(oe, Ce) {
              return { val: oe, index: Ce };
            }).slice(me).map(function(oe) {
              var Ce = At(oe.val);
              return Z ? Z(hn(hn({}, Ce), { onClose: function(We) {
                return Et.onRemove(Ce.value, oe.index, We);
              } }), oe.index, cn.concat(Jt)) : h.createElement(Ea, hn({}, Ce, { key: Ce.value, className: Je + "-tag", onClose: function(We) {
                return Et.onRemove(Ce.value, oe.index, We);
              } }), Ce.label);
            }), tn = He(Ie) ? Ie : {};
            Jt.label = h.createElement(Na, hn({}, tn, { content: !!en.length && h.createElement("div", { onClick: function(oe) {
              oe.stopPropagation();
            } }, en) }), Jt.label);
          }
          return Jt;
        }
      }
    })(), si = yn ? cn.concat(yn) : cn;
    return h.createElement(F0, hn({}, an, { className: Me ? Pe("input-tag") + "-focus" : "", ref: le, disabled: b, dragToSort: A, disableInput: !xe, animation: S, placeholder: R, value: si, inputValue: V, size: we, tagClassName: x + "-tag", renderTag: Z, icon: { removeIcon: D }, maxTagCount: me === "responsive" ? { count: me, render: lt, popoverProps: He(Ie) ? Ie : Ie ? {} : { disabled: true } } : void 0, onChange: function(yt, Jt) {
      if (re && Jt === "sort") {
        var en = yt.indexOf(ef);
        if (en > -1) {
          var tn = yt.slice(0, en), oe = yt.slice(en + 1), Ce = Ke.slice(yt.length - 1 - Ke.length);
          re(tn.concat(Ce, oe));
        } else re(yt);
      }
    } }, Et));
  }, fn = C || (e.error ? "error" : void 0), Se = !b && !L && g ? h.createElement(kr, { size: we, key: "clearIcon", className: x + "-clear-icon", onClick: F, onMouseDown: dt }, T ?? h.createElement(Nr, null)) : null, je = he(x, x + "-" + (H ? "multiple" : "single"), (n = {}, n[x + "-show-search"] = xe, n[x + "-open"] = j, n[x + "-size-" + we] = we, n[x + "-focused"] = Me, n[x + "-" + fn] = fn, n[x + "-disabled"] = b, n[x + "-no-border"] = !p, n[x + "-rtl"] = W, n), s);
  return h.createElement("div", hn({ role: "combobox", "aria-haspopup": "listbox", "aria-autocomplete": "list", "aria-expanded": j, "aria-disabled": b, "aria-controls": q }, NO(ne, ["onClick", "onMouseEnter", "onMouseLeave"]), k, { ref: ee, tabIndex: b ? -1 : 0, id: u, style: f, className: je, onKeyDown: $t, onFocus: function(me) {
    !b && !A && (ye ? le.current && le.current.focus() : it("focus", me));
  }, onBlur: function(me) {
    return it("blur", me);
  } }), h.createElement("div", { title: typeof Oe == "string" ? Oe : void 0, className: he(x + "-view", (r = {}, r[x + "-view-with-prefix"] = Q, r)), onClick: function(me) {
    return j && ye && me.stopPropagation();
  } }, Q && h.createElement("div", { "aria-hidden": "true", className: he(x + "-prefix"), onMouseDown: function(me) {
    return be && dt(me);
  } }, Q), H ? qt() : Kt(), h.createElement("div", { "aria-hidden": "true", className: x + "-suffix", onMouseDown: function(me) {
    return be && dt(me);
  } }, Se, It)));
}), RO = function(e, o) {
  var n, r = e.prefixCls, a = e.id, u = e.style, f = e.className, s = e.addBefore, m = e.rtl, p = e.renderView, g = e.autoWidth, w = H0(e, ["prefixCls", "id", "style", "className", "addBefore", "rtl", "renderView", "autoWidth"]), C = g ? hn({ minWidth: 0, maxWidth: "100%" }, He(g) ? g : {}) : null, O = _.useRef(null), b = s != null, S = false, x = b || S, B = { id: a, style: hn(hn(hn({}, C), { width: C ? "auto" : void 0 }), u), className: f }, I = zi(w);
  _.useImperativeHandle(o, function() {
    return O.current;
  });
  var D = h.createElement(MO, hn({}, e, { ref: O, id: x ? void 0 : B.id, style: x ? void 0 : B.style, className: x ? void 0 : B.className, htmlDataAttributes: x ? {} : I }));
  return typeof p == "function" && (D = p(D)), x ? h.createElement("div", hn({}, I, B, { className: he(r + "-wrapper", (n = {}, n[r + "-wrapper-rtl"] = m, n), B.className) }), b && h.createElement("div", { className: r + "-addbefore" }, s), D) : D;
}, W0 = h.forwardRef(RO);
W0.displayName = "SelectView";
function dg(e) {
  for (var o = 0, n = 0; n < e.length; n++) e.charCodeAt(n) > 127 || e.charCodeAt(n) === 94 ? o += 2 : o++;
  return o;
}
var DO = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, pg = "__rc_ghost_item__";
function B0(e, o) {
  var n = Math.floor(e * o), r = n / o, a = (e - r) / (1 / o);
  return { index: n, offsetPtg: Number.isNaN(a) ? 0 : a };
}
function vg(e, o) {
  var n = bu(e), r = 0;
  {
    var a = window.getComputedStyle(e), u = a.marginTop, f = a.marginBottom;
    r = Number(u.replace(/\D/g, "")) + Number(f.replace(/\D/g, "")), r = isNaN(r) ? 0 : r;
  }
  return n ? n.offsetHeight + r : 0;
}
function Cd(e, o) {
  return e < 0 ? 0 : e > o ? o : e;
}
function ua(e) {
  var o = e.scrollTop, n = e.scrollHeight, r = e.clientHeight, a = n - r;
  return a <= 0 ? 0 : Cd(o, a) / a;
}
function mg(e, o, n) {
  var r = B0(e, o), a = r.index, u = r.offsetPtg, f = Math.ceil(e * n), s = Math.ceil((1 - e) * n);
  return { itemIndex: a, itemOffsetPtg: u, startIndex: Math.max(0, a - f), endIndex: Math.min(o - 1, a + s) };
}
function iu(e) {
  var o = e.itemHeight, n = e.itemOffsetPtg, r = e.scrollPtg, a = e.clientHeight;
  return Math.floor(a * r - o * n);
}
function zO(e) {
  var o = e.scrollTop, n = DO(e, ["scrollTop"]);
  return o + iu(n);
}
function LO(e) {
  var o = e.locatedItemRelativeTop, n = e.locatedItemIndex, r = e.compareItemIndex, a = e.startIndex, u = e.endIndex, f = e.getItemKey, s = e.itemElementHeights, m = e.itemHeight, p = o, g = f(r);
  if (r <= n) for (var w = n; w >= a; w -= 1) {
    var C = f(w);
    if (C === g) break;
    var O = f(w - 1);
    p -= s[O] || m;
  }
  else for (var w = n; w <= u; w += 1) {
    var C = f(w);
    if (C === g) break;
    p += s[C] || m;
  }
  return p;
}
function ca(e) {
  var o, n, r, a;
  if (e == null) return 0;
  if (typeof e == "string") return dg(e);
  if (typeof e == "number") return dg(String(e));
  if (Array.isArray(e)) return e.reduce(function(f, s) {
    return f + ca(s);
  }, 0);
  if (typeof e == "object" && e !== null && "props" in e) {
    var u = e;
    if (((o = u.props) === null || o === void 0 ? void 0 : o.children) !== void 0) return ca(u.props.children);
    if (((n = u.props) === null || n === void 0 ? void 0 : n.text) !== void 0) return ca(u.props.text);
    if (((r = u.props) === null || r === void 0 ? void 0 : r.label) !== void 0) return ca(u.props.label);
    if (((a = u.props) === null || a === void 0 ? void 0 : a.title) !== void 0) return ca(u.props.title);
  }
  return 0;
}
function $O(e) {
  var o = -1, n = 0;
  return e.forEach(function(r, a) {
    var u, f = typeof r == "string" ? r : (u = r.props) === null || u === void 0 ? void 0 : u.children, s = ca(f);
    s > n && (n = s, o = a);
  }), o;
}
function AO(e, o, n, r) {
  var a = n - e, u = o - n, f = Math.min(a, u) * 2;
  if (r <= f) {
    var s = Math.floor(r / 2);
    return r % 2 ? n + s + 1 : n - s;
  }
  return a > u ? n - (r - u) : n + (r - a);
}
function VO(e, o, n) {
  var r = e.length, a = o.length, u, f;
  if (r === 0 && a === 0) return null;
  r < a ? (u = e, f = o) : (u = o, f = e);
  var s = { __EMPTY_ITEM__: true };
  function m(b, S) {
    return b !== void 0 ? n(b, S) : s;
  }
  for (var p = null, g = Math.abs(r - a) !== 1, w = 0; w < f.length; w += 1) {
    var C = m(u[w], w), O = m(f[w], w);
    if (C !== O) {
      p = w, g = g || C !== m(f[w + 1], w + 1);
      break;
    }
  }
  return p === null ? null : { index: p, multiple: g };
}
var br = function() {
  return br = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, br.apply(this, arguments);
}, hg = function(e) {
  var o = e.height, n = e.offset, r = e.children, a = e.outerStyle, u = e.innerStyle, f = {}, s = { display: "flex", flexDirection: "column", overflowAnchor: "none" };
  return n !== void 0 ? (f = br({ height: o, position: "relative", overflow: "hidden", overflowAnchor: "none", zIndex: 0 }, a), s = br(br(br({}, s), { transform: "translateY(" + n + "px)", position: "absolute", left: 0, right: 0, top: 0 }), u)) : (f = br({ overflowAnchor: "none" }, a), s = br(br({}, s), u)), _.createElement("div", { style: f }, _.createElement("div", { style: s }, r));
}, vn = function() {
  return vn = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, vn.apply(this, arguments);
}, FO = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, xd = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, HO = 32, ha = "__virtual_item_height_" + Math.random().toFixed(5).slice(2), WO = function(e) {
  var o = ip(), n = e.current;
  _.useEffect(function() {
    Object.keys(n).length && !n[ha] && (n[ha] = Object.entries(n).reduce(function(r, a, u, f) {
      var s = xd(a, 2), m = s[1], p = r + m;
      return u === f.length - 1 ? Math.round(p / f.length) : p;
    }, 0), o());
  }, [Object.keys(n).length]);
}, BO = function(e) {
  var o = _.useRef({}), n = _.useRef(e);
  return _.useEffect(function() {
    n.current = e;
  }, [e]), e !== n.current && (o.current = {}), function(r, a, u) {
    return o.current.hasOwnProperty(a) || (o.current[a] = e(r, a, u)), o.current[a];
  };
}, U0 = h.forwardRef(function(e, o) {
  var n = e.style, r = e.className, a = e.children, u = e.data, f = u === void 0 ? [] : u, s = e.itemKey, m = e.threshold, p = m === void 0 ? 100 : m, g = e.wrapper, w = g === void 0 ? "div" : g, C = e.height, O = C === void 0 ? "100%" : C, b = e.isStaticItemHeight, S = b === void 0 ? true : b, x = e.itemHeight, B = e.measureLongestItem, I = e.scrollOptions, D = e.onScroll, T = e.needFiller, R = T === void 0 ? true : T, P = e.outerStyle, M = e.innerStyle, V = e.wrapperChild, j = V === void 0 ? h.Fragment : V, z = FO(e, ["style", "className", "children", "data", "itemKey", "threshold", "wrapper", "height", "isStaticItemHeight", "itemHeight", "measureLongestItem", "scrollOptions", "onScroll", "needFiller", "outerStyle", "innerStyle", "wrapperChild"]), H = n && n.maxHeight || O, L = _.useRef({}), Q = xd(_.useState(200), 2), q = Q[0], Z = Q[1], A = BO(a);
  WO(L);
  var W = f.length, k = x || L.current[ha] || HO, X = Rt(H) ? H : q, U = Math.ceil(X / k), E = k * W, F = p !== null && W >= p && E > X, G = _.useRef(null), ae = _.useRef(null), ue = _.useRef(false), re = _.useRef(F), ne = _.useMemo(function() {
    if (G.current) {
      var xe = function(ye) {
        return +window.getComputedStyle(G.current)[ye].replace(/\D/g, "");
      };
      return { top: xe("paddingTop"), bottom: xe("paddingBottom") };
    }
    return { top: 0, bottom: 0 };
  }, [G.current]), le = xd(b0({ status: "NONE", startIndex: 0, endIndex: 0, itemIndex: 0, itemOffsetPtg: 0, startItemTop: 0, scrollTop: 0 }), 2), ee = le[0], se = le[1], ke = Jd(f) || [], Pe = Xd(), De = function(xe, ye) {
    return typeof s == "function" ? s(xe, ye) : typeof s == "string" ? xe[s] : xe.key || ye;
  }, Ee = function(xe, ye) {
    if (ye === void 0 && (ye = f), xe === ye.length) return pg;
    var we = ye[xe];
    return we !== void 0 ? De(we, xe) : null;
  }, ce = function(xe) {
    return f.findIndex(function(ye, we) {
      return De(ye, we) === xe;
    });
  }, fe = function(xe) {
    return L.current[xe] || k;
  }, be = function(xe) {
    for (var ye = xe.itemIndex, we = xe.relativeTop, Me = G.current, Ae = Me.scrollHeight, Le = Me.clientHeight, Oe = ee.scrollTop, tt = Ae - Le, qe = Number.MAX_VALUE, dt = null, nt = null, it = null, $t = null, jt = null, It = 0, at = 0; at < tt; at++) {
      var Kt = AO(0, tt, Oe, at), Ht = ua({ scrollTop: Kt, scrollHeight: Ae, clientHeight: Le }), bt = mg(Ht, W, U), At = bt.itemIndex, cn = bt.itemOffsetPtg, qt = bt.startIndex, fn = bt.endIndex;
      if (qt <= ye && ye <= fn) {
        var Se = iu({ itemHeight: fe(Ee(At)), itemOffsetPtg: cn, clientHeight: Le, scrollPtg: Ht }), je = LO({ locatedItemRelativeTop: Se, locatedItemIndex: At, compareItemIndex: ye, startIndex: qt, endIndex: fn, itemHeight: k, getItemKey: Ee, itemElementHeights: L.current }), me = Math.abs(je - we);
        me < qe ? (qe = me, dt = Kt, nt = At, it = cn, $t = qt, jt = fn, It = 0) : It += 1;
      }
      if (It > 10) break;
    }
    dt !== null && (ue.current = true, G.current.scrollTop = dt, se(vn(vn({}, ee), { status: "MEASURE_START", scrollTop: dt, itemIndex: nt, itemOffsetPtg: it, startIndex: $t, endIndex: jt }))), ae.current = Un(function() {
      ue.current = false;
    });
  }, ze = function(xe) {
    var ye = G.current, we = ye.scrollTop, Me = ye.clientHeight, Ae = ye.scrollHeight, Le = Cd(we, Ae - Me), Oe = ua({ scrollTop: Le, clientHeight: Me, scrollHeight: Ae }), tt = B0(Oe, W), qe = tt.index, dt = tt.offsetPtg;
    se(vn(vn({}, ee), { scrollTop: Le, itemIndex: qe, itemOffsetPtg: dt })), xe && (D == null || D(xe, { index: qe }));
  }, ge = function(xe, ye) {
    ye === void 0 && (ye = false);
    var we = E, Me = G.current, Ae = Me.scrollTop, Le = Me.clientHeight, Oe = Cd(Ae, we - Le);
    if (!(!ye && (Oe === ee.scrollTop || ue.current))) {
      var tt = ua({ scrollTop: Oe, clientHeight: Le, scrollHeight: we }), qe = mg(tt, W, U), dt = qe.itemIndex, nt = qe.itemOffsetPtg, it = qe.startIndex, $t = qe.endIndex;
      se(vn(vn({}, ee), { scrollTop: Oe, itemIndex: dt, itemOffsetPtg: nt, startIndex: it, endIndex: $t, status: "MEASURE_START" })), xe && (D == null || D(xe, { index: dt }));
    }
  };
  _.useEffect(function() {
    return function() {
      ae.current && Dn(ae.current);
    };
  }, []), _.useEffect(function() {
    G.current && (Pe && (G.current.scrollTop = 0), ge(null, true));
  }, [U]), _.useEffect(function() {
    if (G.current) {
      var xe = null, ye = ee.itemIndex, we = re.current !== F ? F ? "virtual" : "raw" : "";
      if (re.current = F, X && ke.length !== f.length) {
        var Me = VO(ke, f, De);
        xe = Me ? Me.index : null;
      }
      var Ae = Ee(ee.itemIndex, ke);
      if (Ae && Ae !== pg) {
        var Le = ce(Ae);
        ye = Le > -1 ? Le : Math.min(ye, W - 1);
      }
      var Oe = xe !== null, tt = we || F && Oe && xe <= ee.startIndex;
      if (tt) {
        var qe = G.current.clientHeight, dt = iu({ itemHeight: fe(Ee(ee.itemIndex, ke)), itemOffsetPtg: ee.itemOffsetPtg, scrollPtg: ua({ scrollTop: ee.scrollTop, scrollHeight: ke.length * k, clientHeight: qe }), clientHeight: qe });
        if (we === "raw") {
          for (var nt = dt, it = 0; it < ye; it++) nt -= fe(Ee(it));
          G.current.scrollTop = -nt, ue.current = true, ae.current = Un(function() {
            ue.current = false;
          });
        } else be({ itemIndex: ye, relativeTop: dt });
      } else F && Oe && ge(null, true);
    }
  }, [f, F]), Zd(function() {
    if (ee.status === "MEASURE_START" && G.current) {
      for (var xe = G.current, ye = xe.scrollTop, we = xe.scrollHeight, Me = xe.clientHeight, Ae = ua({ scrollTop: ye, scrollHeight: we, clientHeight: Me }), Le = zO({ scrollPtg: Ae, clientHeight: Me, scrollTop: ye - (ne.top + ne.bottom) * Ae, itemHeight: fe(Ee(ee.itemIndex)), itemOffsetPtg: ee.itemOffsetPtg }), Oe = ee.itemIndex - 1; Oe >= ee.startIndex; Oe--) Le -= fe(Ee(Oe));
      se(vn(vn({}, ee), { startItemTop: Le, status: "MEASURE_DONE" }));
    }
  }, [ee]), _.useImperativeHandle(o, function() {
    return { dom: G.current, getRootDOMNode: function() {
      return G.current;
    }, scrollTo: function(xe) {
      ae.current && Dn(ae.current), ae.current = Un(function() {
        var ye;
        if (G.current) {
          if (typeof xe == "number") {
            G.current.scrollTop = xe;
            return;
          }
          var we = "index" in xe ? xe.index : "key" in xe ? f.findIndex(function(Kt, Ht) {
            return De(Kt, Ht) === xe.key;
          }) : 0, Me = f[we];
          if (Me) {
            var Ae = typeof xe == "object" && (!((ye = xe.options) === null || ye === void 0) && ye.block) ? xe.options.block : (I == null ? void 0 : I.block) || "nearest", Le = G.current, Oe = Le.clientHeight, tt = Le.scrollTop;
            if (F && !S) {
              if (Ae === "nearest") {
                var qe = ee.itemIndex, dt = ee.itemOffsetPtg;
                if (Math.abs(qe - we) < U) {
                  var nt = iu({ itemHeight: fe(Ee(qe)), itemOffsetPtg: dt, clientHeight: Oe, scrollPtg: ua(G.current) });
                  if (we < qe) for (var it = we; it < qe; it++) nt -= fe(Ee(it));
                  else for (var it = qe; it < we; it++) nt += fe(Ee(it));
                  if (nt < 0 || nt > Oe) Ae = nt < 0 ? "start" : "end";
                  else return;
                } else Ae = we < qe ? "start" : "end";
              }
              se(vn(vn({}, ee), { startIndex: Math.max(0, we - U), endIndex: Math.min(W - 1, we + U) })).then(function() {
                var Kt = fe(De(Me, we));
                be({ itemIndex: we, relativeTop: Ae === "start" ? 0 : (Oe - Kt) / (Ae === "center" ? 2 : 1) });
              });
            } else {
              for (var $t = fe(Ee(we)), nt = 0, it = 0; it < we; it++) nt += fe(Ee(it));
              var jt = nt + $t, It = nt + $t / 2;
              if (It > tt && It < Oe + tt) return;
              Ae === "nearest" && (nt < tt ? Ae = "start" : jt > tt + Oe && (Ae = "end"));
              var at = Oe - $t;
              G.current.scrollTop = nt - (Ae === "start" ? 0 : at / (Ae === "center" ? 2 : 1));
            }
          }
        }
      });
    } };
  }, [f, k, ee]);
  var Fe = function(xe, ye) {
    return xe.map(function(we, Me) {
      var Ae = ye + Me, Le = A(we, Ae, { style: {}, itemIndex: Me }), Oe = De(we, Ae);
      return h.cloneElement(Le, { key: Oe, ref: function(tt) {
        var qe, dt, nt = L.current;
        tt && ee.status === "MEASURE_START" && (!S || nt[Oe] === void 0) && (S ? (nt[ha] || (nt[ha] = vg(tt)), nt[Oe] = nt[ha]) : nt[Oe] = vg(tt)), Mt((qe = Le) === null || qe === void 0 ? void 0 : qe.ref) && ((dt = Le) === null || dt === void 0 || dt.ref(tt));
      } });
    });
  }, Qe = _.useRef(null);
  _.useEffect(function() {
    Qe.current = null;
  }, [f]);
  var et = function() {
    if (B) {
      var xe = Qe.current === null ? $O(f) : Qe.current, ye = f[xe];
      return Qe.current = xe, ye ? h.createElement("div", { style: { height: 1, overflow: "hidden", opacity: 0 } }, A(ye, xe, { style: {} })) : null;
    }
    return null;
  };
  return h.createElement(jr, { onResize: function() {
    if (G.current && !Rt(H)) {
      var xe = G.current.clientHeight;
      Z(xe);
    }
  }, getTargetDOMNode: function() {
    return G.current;
  } }, h.createElement(w, vn({ ref: G, style: vn(vn({ overflowY: "auto", overflowAnchor: "none" }, n), { maxHeight: H }), className: r, onScroll: F ? ge : ze }, z), F ? h.createElement(h.Fragment, null, h.createElement(hg, { height: E, outerStyle: P, innerStyle: M, offset: ee.status === "MEASURE_DONE" ? ee.startItemTop : 0 }, h.createElement(j, null, Fe(f.slice(ee.startIndex, ee.endIndex + 1), ee.startIndex))), et()) : R ? h.createElement(hg, { height: X, outerStyle: P, innerStyle: M }, h.createElement(j, null, Fe(f, 0))) : h.createElement(j, null, Fe(f, 0))));
});
U0.displayName = "VirtualList";
var tf, gg;
function ap() {
  if (gg) return tf;
  gg = 1;
  var e = Array.isArray;
  return tf = e, tf;
}
var nf, yg;
function UO() {
  if (yg) return nf;
  yg = 1;
  var e = ap(), o = Su(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function a(u, f) {
    if (e(u)) return false;
    var s = typeof u;
    return s == "number" || s == "symbol" || s == "boolean" || u == null || o(u) ? true : r.test(u) || !n.test(u) || f != null && u in Object(f);
  }
  return nf = a, nf;
}
var rf, _g;
function KO() {
  if (_g) return rf;
  _g = 1;
  var e = d0(), o = Lo(), n = "[object AsyncFunction]", r = "[object Function]", a = "[object GeneratorFunction]", u = "[object Proxy]";
  function f(s) {
    if (!o(s)) return false;
    var m = e(s);
    return m == r || m == a || m == n || m == u;
  }
  return rf = f, rf;
}
var af, wg;
function qO() {
  if (wg) return af;
  wg = 1;
  var e = Eu(), o = e["__core-js_shared__"];
  return af = o, af;
}
var of, Cg;
function GO() {
  if (Cg) return of;
  Cg = 1;
  var e = qO(), o = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function n(r) {
    return !!o && o in r;
  }
  return of = n, of;
}
var lf, xg;
function YO() {
  if (xg) return lf;
  xg = 1;
  var e = Function.prototype, o = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return o.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return lf = n, lf;
}
var uf, Og;
function QO() {
  if (Og) return uf;
  Og = 1;
  var e = KO(), o = GO(), n = Lo(), r = YO(), a = /[\\^$.*+?()[\]{}|]/g, u = /^\[object .+?Constructor\]$/, f = Function.prototype, s = Object.prototype, m = f.toString, p = s.hasOwnProperty, g = RegExp("^" + m.call(p).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function w(C) {
    if (!n(C) || o(C)) return false;
    var O = e(C) ? g : u;
    return O.test(r(C));
  }
  return uf = w, uf;
}
var sf, bg;
function XO() {
  if (bg) return sf;
  bg = 1;
  function e(o, n) {
    return o == null ? void 0 : o[n];
  }
  return sf = e, sf;
}
var cf, Eg;
function K0() {
  if (Eg) return cf;
  Eg = 1;
  var e = QO(), o = XO();
  function n(r, a) {
    var u = o(r, a);
    return e(u) ? u : void 0;
  }
  return cf = n, cf;
}
var ff, Sg;
function Iu() {
  if (Sg) return ff;
  Sg = 1;
  var e = K0(), o = e(Object, "create");
  return ff = o, ff;
}
var df, Pg;
function ZO() {
  if (Pg) return df;
  Pg = 1;
  var e = Iu();
  function o() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return df = o, df;
}
var pf, Ng;
function JO() {
  if (Ng) return pf;
  Ng = 1;
  function e(o) {
    var n = this.has(o) && delete this.__data__[o];
    return this.size -= n ? 1 : 0, n;
  }
  return pf = e, pf;
}
var vf, kg;
function eb() {
  if (kg) return vf;
  kg = 1;
  var e = Iu(), o = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function a(u) {
    var f = this.__data__;
    if (e) {
      var s = f[u];
      return s === o ? void 0 : s;
    }
    return r.call(f, u) ? f[u] : void 0;
  }
  return vf = a, vf;
}
var mf, jg;
function tb() {
  if (jg) return mf;
  jg = 1;
  var e = Iu(), o = Object.prototype, n = o.hasOwnProperty;
  function r(a) {
    var u = this.__data__;
    return e ? u[a] !== void 0 : n.call(u, a);
  }
  return mf = r, mf;
}
var hf, Ig;
function nb() {
  if (Ig) return hf;
  Ig = 1;
  var e = Iu(), o = "__lodash_hash_undefined__";
  function n(r, a) {
    var u = this.__data__;
    return this.size += this.has(r) ? 0 : 1, u[r] = e && a === void 0 ? o : a, this;
  }
  return hf = n, hf;
}
var gf, Tg;
function rb() {
  if (Tg) return gf;
  Tg = 1;
  var e = ZO(), o = JO(), n = eb(), r = tb(), a = nb();
  function u(f) {
    var s = -1, m = f == null ? 0 : f.length;
    for (this.clear(); ++s < m; ) {
      var p = f[s];
      this.set(p[0], p[1]);
    }
  }
  return u.prototype.clear = e, u.prototype.delete = o, u.prototype.get = n, u.prototype.has = r, u.prototype.set = a, gf = u, gf;
}
var yf, Mg;
function ib() {
  if (Mg) return yf;
  Mg = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return yf = e, yf;
}
var _f, Rg;
function ab() {
  if (Rg) return _f;
  Rg = 1;
  function e(o, n) {
    return o === n || o !== o && n !== n;
  }
  return _f = e, _f;
}
var wf, Dg;
function Tu() {
  if (Dg) return wf;
  Dg = 1;
  var e = ab();
  function o(n, r) {
    for (var a = n.length; a--; ) if (e(n[a][0], r)) return a;
    return -1;
  }
  return wf = o, wf;
}
var Cf, zg;
function ob() {
  if (zg) return Cf;
  zg = 1;
  var e = Tu(), o = Array.prototype, n = o.splice;
  function r(a) {
    var u = this.__data__, f = e(u, a);
    if (f < 0) return false;
    var s = u.length - 1;
    return f == s ? u.pop() : n.call(u, f, 1), --this.size, true;
  }
  return Cf = r, Cf;
}
var xf, Lg;
function lb() {
  if (Lg) return xf;
  Lg = 1;
  var e = Tu();
  function o(n) {
    var r = this.__data__, a = e(r, n);
    return a < 0 ? void 0 : r[a][1];
  }
  return xf = o, xf;
}
var Of, $g;
function ub() {
  if ($g) return Of;
  $g = 1;
  var e = Tu();
  function o(n) {
    return e(this.__data__, n) > -1;
  }
  return Of = o, Of;
}
var bf, Ag;
function sb() {
  if (Ag) return bf;
  Ag = 1;
  var e = Tu();
  function o(n, r) {
    var a = this.__data__, u = e(a, n);
    return u < 0 ? (++this.size, a.push([n, r])) : a[u][1] = r, this;
  }
  return bf = o, bf;
}
var Ef, Vg;
function cb() {
  if (Vg) return Ef;
  Vg = 1;
  var e = ib(), o = ob(), n = lb(), r = ub(), a = sb();
  function u(f) {
    var s = -1, m = f == null ? 0 : f.length;
    for (this.clear(); ++s < m; ) {
      var p = f[s];
      this.set(p[0], p[1]);
    }
  }
  return u.prototype.clear = e, u.prototype.delete = o, u.prototype.get = n, u.prototype.has = r, u.prototype.set = a, Ef = u, Ef;
}
var Sf, Fg;
function fb() {
  if (Fg) return Sf;
  Fg = 1;
  var e = K0(), o = Eu(), n = e(o, "Map");
  return Sf = n, Sf;
}
var Pf, Hg;
function db() {
  if (Hg) return Pf;
  Hg = 1;
  var e = rb(), o = cb(), n = fb();
  function r() {
    this.size = 0, this.__data__ = { hash: new e(), map: new (n || o)(), string: new e() };
  }
  return Pf = r, Pf;
}
var Nf, Wg;
function pb() {
  if (Wg) return Nf;
  Wg = 1;
  function e(o) {
    var n = typeof o;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? o !== "__proto__" : o === null;
  }
  return Nf = e, Nf;
}
var kf, Bg;
function Mu() {
  if (Bg) return kf;
  Bg = 1;
  var e = pb();
  function o(n, r) {
    var a = n.__data__;
    return e(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
  }
  return kf = o, kf;
}
var jf, Ug;
function vb() {
  if (Ug) return jf;
  Ug = 1;
  var e = Mu();
  function o(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return jf = o, jf;
}
var If, Kg;
function mb() {
  if (Kg) return If;
  Kg = 1;
  var e = Mu();
  function o(n) {
    return e(this, n).get(n);
  }
  return If = o, If;
}
var Tf, qg;
function hb() {
  if (qg) return Tf;
  qg = 1;
  var e = Mu();
  function o(n) {
    return e(this, n).has(n);
  }
  return Tf = o, Tf;
}
var Mf, Gg;
function gb() {
  if (Gg) return Mf;
  Gg = 1;
  var e = Mu();
  function o(n, r) {
    var a = e(this, n), u = a.size;
    return a.set(n, r), this.size += a.size == u ? 0 : 1, this;
  }
  return Mf = o, Mf;
}
var Rf, Yg;
function yb() {
  if (Yg) return Rf;
  Yg = 1;
  var e = db(), o = vb(), n = mb(), r = hb(), a = gb();
  function u(f) {
    var s = -1, m = f == null ? 0 : f.length;
    for (this.clear(); ++s < m; ) {
      var p = f[s];
      this.set(p[0], p[1]);
    }
  }
  return u.prototype.clear = e, u.prototype.delete = o, u.prototype.get = n, u.prototype.has = r, u.prototype.set = a, Rf = u, Rf;
}
var Df, Qg;
function _b() {
  if (Qg) return Df;
  Qg = 1;
  var e = yb(), o = "Expected a function";
  function n(r, a) {
    if (typeof r != "function" || a != null && typeof a != "function") throw new TypeError(o);
    var u = function() {
      var f = arguments, s = a ? a.apply(this, f) : f[0], m = u.cache;
      if (m.has(s)) return m.get(s);
      var p = r.apply(this, f);
      return u.cache = m.set(s, p) || m, p;
    };
    return u.cache = new (n.Cache || e)(), u;
  }
  return n.Cache = e, Df = n, Df;
}
var zf, Xg;
function wb() {
  if (Xg) return zf;
  Xg = 1;
  var e = _b(), o = 500;
  function n(r) {
    var a = e(r, function(f) {
      return u.size === o && u.clear(), f;
    }), u = a.cache;
    return a;
  }
  return zf = n, zf;
}
var Lf, Zg;
function Cb() {
  if (Zg) return Lf;
  Zg = 1;
  var e = wb(), o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(a) {
    var u = [];
    return a.charCodeAt(0) === 46 && u.push(""), a.replace(o, function(f, s, m, p) {
      u.push(m ? p.replace(n, "$1") : s || f);
    }), u;
  });
  return Lf = r, Lf;
}
var $f, Jg;
function xb() {
  if (Jg) return $f;
  Jg = 1;
  function e(o, n) {
    for (var r = -1, a = o == null ? 0 : o.length, u = Array(a); ++r < a; ) u[r] = n(o[r], r, o);
    return u;
  }
  return $f = e, $f;
}
var Af, ey;
function Ob() {
  if (ey) return Af;
  ey = 1;
  var e = Qd(), o = xb(), n = ap(), r = Su(), a = e ? e.prototype : void 0, u = a ? a.toString : void 0;
  function f(s) {
    if (typeof s == "string") return s;
    if (n(s)) return o(s, f) + "";
    if (r(s)) return u ? u.call(s) : "";
    var m = s + "";
    return m == "0" && 1 / s == -1 / 0 ? "-0" : m;
  }
  return Af = f, Af;
}
var Vf, ty;
function q0() {
  if (ty) return Vf;
  ty = 1;
  var e = Ob();
  function o(n) {
    return n == null ? "" : e(n);
  }
  return Vf = o, Vf;
}
var Ff, ny;
function bb() {
  if (ny) return Ff;
  ny = 1;
  var e = ap(), o = UO(), n = Cb(), r = q0();
  function a(u, f) {
    return e(u) ? u : o(u, f) ? [u] : n(r(u));
  }
  return Ff = a, Ff;
}
var Hf, ry;
function Eb() {
  if (ry) return Hf;
  ry = 1;
  var e = Su();
  function o(n) {
    if (typeof n == "string" || e(n)) return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return Hf = o, Hf;
}
var Wf, iy;
function Sb() {
  if (iy) return Wf;
  iy = 1;
  var e = bb(), o = Eb();
  function n(r, a) {
    a = e(a, r);
    for (var u = 0, f = a.length; r != null && u < f; ) r = r[o(a[u++])];
    return u && u == f ? r : void 0;
  }
  return Wf = n, Wf;
}
var Bf, ay;
function Pb() {
  if (ay) return Bf;
  ay = 1;
  var e = Sb();
  function o(n, r, a) {
    var u = n == null ? void 0 : e(n, r);
    return u === void 0 ? a : u;
  }
  return Bf = o, Bf;
}
var Nb = Pb();
const qn = Di(Nb);
var Uf, oy;
function kb() {
  if (oy) return Uf;
  oy = 1;
  var e = q0(), o = /[\\^$.*+?()[\]{}|]/g, n = RegExp(o.source);
  function r(a) {
    return a = e(a), a && n.test(a) ? a.replace(o, "\\$&") : a;
  }
  return Uf = r, Uf;
}
var jb = kb();
const Ib = Di(jb);
function Tb(e) {
  var o = e.nodeList, n = e.pattern, r = e.highlightClassName;
  if (!n) return o;
  var a = function(u) {
    return u && u.props && typeof u.props.children == "string" ? _.cloneElement(u, void 0, h.createElement(Mb, { text: u.props.children, keyword: n, highlightClassName: r })) : u;
  };
  return Ft(o) ? o.map(function(u) {
    return a(u);
  }) : a(o);
}
function Mb(e) {
  var o = e.text, n = e.keyword, r = e.highlightClassName;
  if (!n) return h.createElement(h.Fragment, null, o);
  n.length > 1e3 && (n = n.slice(0, 1e3));
  var a = new RegExp("(" + Ib(n) + ")", "i"), u = o.split(a);
  return h.createElement(h.Fragment, null, u.map(function(f, s) {
    return a.test(f) ? h.createElement("span", { key: s, className: r }, f) : h.createElement("span", { key: s }, f);
  }));
}
var yu = function() {
  return yu = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, yu.apply(this, arguments);
};
function Rb(e) {
  e && e.preventDefault();
}
function au(e, o) {
  return o ? !Ft(e) || !e.length : e === void 0;
}
function ly(e, o, n) {
  return n && (o ? e = Array.isArray(e) ? e.map(function(r) {
    return He(r) && "label" in r ? r.value : r;
  }) : e : e = He(e) && "label" in e ? e.value : e), au(e, o) ? o ? Array.isArray(e) ? e : [] : void 0 : e;
}
function G0(e) {
  return qn(e, "props.isSelectOption") || qn(e, "type.__ARCO_SELECT_OPTION__");
}
function Y0(e) {
  return qn(e, "props.isSelectOptGroup") || qn(e, "type.__ARCO_SELECT_OPTGROUP__");
}
function Q0(e, o, n) {
  var r = e.children, a = e.options, u = e.filterOption, f = o.inputValue, s = f === void 0 ? "" : f, m = o.userCreatedOptions, p = o.userCreatingOption, g = o.prefixCls, w = n === void 0 ? {} : n, C = w.optionInfoMap, O = C === void 0 ? /* @__PURE__ */ new Map() : C, b = w.optionValueList, S = b === void 0 ? [] : b, x = w.customNodeCount, B = x === void 0 ? 0 : x, I = false, D = false, T = [], R = [], P = function(z) {
    var H = qn(z, "props.value"), L = qn(z, "props.children");
    return H === void 0 && L !== null && L !== void 0 ? L.toString() : H;
  }, M = function(z, H, L) {
    var Q = z.label, q = z.value;
    return !Q && !q && !H ? (B++, "custom_node_" + B) : L ? H || "group_" + Q : H || typeof q + "_" + q || Q + "_" + O.size;
  }, V = function(z, H) {
    var L = P(z), Q = qn(z, "props.children"), q = s.toLowerCase(), Z = qn(z, "props.value") !== void 0, A = true;
    if (u === true) {
      var W = L !== void 0 && String(L).toLowerCase().indexOf(q) !== -1, k = typeof Q == "string" && Q.toLowerCase().indexOf(q) !== -1;
      A = Z && (!s || W || k);
    } else typeof u == "function" && (A = !s || u(s, z));
    var X = O.get(L), U = (X == null ? void 0 : X._origin) === "userCreatedOptions" || (X == null ? void 0 : X._origin) === "userCreatingOption";
    if (!X || U) {
      "_key" in z.props || (z = h.cloneElement(z, { _key: M(z.props, z.key) }));
      var E = O.size, F = yu(yu({ child: z }, z.props), { value: L, _index: E, _origin: H, _valid: A });
      if (O.set(L, F), U) {
        var G = T.findIndex(function(ae) {
          var ue;
          return ((ue = ae == null ? void 0 : ae.props) === null || ue === void 0 ? void 0 : ue.value) === L;
        });
        G > -1 && (A ? T[G] = z : T.splice(G, 1));
      } else S.push(L), A && (T.push(z), F.disabled || R.push(E));
    }
    typeof z.props.children != "string" && (D = true);
  }, j = function(z, H) {
    H && Ft(z) && z.length && z.forEach(function(L) {
      (Sa(L) || Rt(L)) && (L = { label: L, value: L });
      var Q = h.createElement(rp, { _key: M(L), value: L.value, disabled: L.disabled === true, extra: L.extra }, To(L.label));
      V(Q, H);
    });
  };
  return p && j([p], "userCreatingOption"), r && h.Children.map(r, function(z) {
    if (Y0(z)) {
      var H = z.props, L = H.children, Q = H.options, q = Q0({ children: L, options: Q, filterOption: u }, { inputValue: s, prefixCls: g }, { optionInfoMap: O, optionValueList: S, customNodeCount: B }), Z = q.childrenList, A = q.optionIndexListForArrowKey, W = q.hasComplexLabelInOptions;
      Z.length && (T.push(h.cloneElement(z, { children: null, _key: M(z.props, z.key, true) })), T = T.concat(Z), R = R.concat(A), I = true, D = D || W);
    } else G0(z) ? V(z, "children") : He(z) && z.props && T.push(h.cloneElement(z, { _key: M(z.props, z.key) }));
  }), j(a, "options"), j(m, "userCreatedOptions"), { childrenList: Tb({ nodeList: T, pattern: s, highlightClassName: g + "-highlight" }), optionInfoMap: O, optionValueList: S, optionIndexListForArrowKey: R, hasOptGroup: I, hasComplexLabelInOptions: D };
}
var Db = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, mo = {};
function Ru(e) {
  var o = Db(_.useState(), 2), n = o[0], r = o[1];
  return _.useEffect(function() {
    mo[e] = e in mo ? mo[e] : 0, r(mo[e]), mo[e] += 1;
  }, []), typeof n == "number" ? "" + e + n : void 0;
}
var sr = function() {
  return sr = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, sr.apply(this, arguments);
}, xi = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, zb = function(e) {
  var o = typeof Symbol == "function" && Symbol.iterator, n = o && e[o], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return { next: function() {
    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
  } };
  throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Lb = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
}, ga = function(e) {
  var o;
  return typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(function(n) {
    return ga(n);
  }).join("") : h.isValidElement(e) ? ga((o = e.props) === null || o === void 0 ? void 0 : o.children) : "";
}, uy = "userCreatingOption", $b = { trigger: "click", bordered: true, filterOption: true, unmountOnExit: true, defaultActiveFirstOption: true }, Ab = { bottom: 4 };
function Vb(e, o) {
  var n = _.useContext(Ye), r = n.getPrefixCls, a = n.renderEmpty, u = n.componentConfig, f = n.rtl, s = Dt(e, $b, u == null ? void 0 : u.Select), m = s.children, p = s.renderFormat, g = s.defaultActiveFirstOption, w = s.disabled, C = s.unmountOnExit, O = s.notFoundContent, b = s.showSearch, S = s.tokenSeparators, x = s.options, B = s.filterOption, I = s.labelInValue, D = s.getPopupContainer, T = s.trigger, R = s.triggerElement, P = s.triggerProps, M = s.dropdownRender, V = s.dropdownMenuStyle, j = s.dropdownMenuClassName, z = s.virtualListProps, H = s.onChange, L = s.onSelect, Q = s.onDeselect, q = s.onClear, Z = s.onSearch, A = s.onFocus, W = s.onBlur, k = s.onPopupScroll, X = s.onVisibleChange, U = s.onInputValueChange, E = s.onPaste, F = s.onKeyDown, G = s.mode, ae = s.allowCreate;
  G === "tags" && (G = "multiple", ae = true);
  var ue = r("select"), re = G === "multiple", ne = xi(_.useState(ly(s.defaultValue, re, I)), 2), le = ne[0], ee = ne[1], se = "value" in s ? ly(s.value, re, I) : le, ke = xi(Ut("", { value: "inputValue" in s ? s.inputValue || "" : void 0 }), 3), Pe = ke[0], De = ke[1], Ee = ke[2], ce = xi(Ut(false, { defaultValue: s.defaultPopupVisible, value: "popupVisible" in s ? s.popupVisible : P && "popupVisible" in P ? P.popupVisible : void 0 }), 2), fe = ce[0], be = ce[1], ze = xi(_.useState(null), 2), ge = ze[0], Fe = ze[1], Qe = xi(_.useState([]), 2), et = Qe[0], xe = Qe[1], ye = xi(_.useState(Ft(se) ? se[0] : se), 2), we = ye[0], Me = ye[1], Ae = _.useMemo(function() {
    return Q0({ children: m, options: x, filterOption: B }, { prefixCls: ue, inputValue: Pe, userCreatedOptions: et, userCreatingOption: ge });
  }, [m, x, B, Pe, ge, et]), Le = Ae.childrenList, Oe = Ae.optionInfoMap, tt = Ae.optionValueList, qe = Ae.optionIndexListForArrowKey, dt = Ae.hasOptGroup, nt = Ae.hasComplexLabelInOptions, it = _.useRef(null), $t = _.useRef(null), jt = _.useRef(null), It = _.useRef([]), at = _.useRef(null), Kt = _.useRef(Pe), Ht = _.useRef(null), bt = _.useRef(0), At = _.useRef(false), cn = Ru(ue + "-popup-"), qt = au(se, re), fn = _.useMemo(function() {
    var oe, Ce;
    if (g) {
      var We = Ft(se) ? se[0] : se, Xe = !qt && ((oe = Oe.get(We)) === null || oe === void 0 ? void 0 : oe._valid), ct = ((Ce = Oe == null ? void 0 : Oe.get(tt[0])) === null || Ce === void 0 ? void 0 : Ce._origin) === uy;
      return Xe && !ct ? We : tt[qe[0]];
    }
  }, [se, Oe, tt, qe, g, qt]), Se = _.useCallback(function(oe, Ce) {
    var We, Xe = Oe.get(oe);
    it.current && (!((We = Xe == null ? void 0 : Xe.child) === null || We === void 0) && We.props) && it.current.scrollTo({ key: Xe.child.props._key, options: Ce });
  }, [Oe]), je = _.useCallback(function(oe, Ce) {
    return Ce === void 0 && (Ce = false), He(ae) && typeof (ae == null ? void 0 : ae.formatter) == "function" ? ae.formatter(oe, Ce) : oe;
  }, [ae]), me = function(oe, Ce) {
    (oe !== Kt.current || Ce !== Ht.current) && (De(oe), Kt.current = oe, Ht.current = Ce, U && U(oe, Ce));
  }, Ie = function(oe) {
    fe !== oe && (be(oe), X && X(oe), P && P.onVisibleChange && P.onVisibleChange(oe));
  };
  _.useEffect(function() {
    re ? Array.isArray(se) || ee(se === void 0 ? [] : [se]) : Array.isArray(se) && ee(se.length === 0 ? void 0 : se[0]);
  }, [re, se]), _.useEffect(function() {
    if (fe) {
      Me(fn);
      var oe = Ft(se) ? se[0] : se;
      !qt && Oe.has(oe) && setTimeout(function() {
        return Se(oe);
      });
    }
  }, [fe]), _.useEffect(function() {
    (at.current === "up" || at.current === "down") && (Se(we), at.current = "none");
  }, [we]), _.useEffect(function() {
    Me(fn);
  }, [JSON.stringify(Le.map(function(oe) {
    var Ce;
    return (Ce = oe == null ? void 0 : oe.props) === null || Ce === void 0 ? void 0 : Ce.value;
  }))]), _.useEffect(function() {
    It.current = It.current.filter(function(oe) {
      return re ? Ft(se) && se.indexOf(oe.value) > -1 : oe.value === se;
    });
  }, [se, re]), _.useEffect(function() {
    if (ae) {
      var oe = void 0;
      if (au(se, re)) oe = [];
      else {
        var Ce = Array.isArray(se) ? se : [se], We = Ce.filter(function(ot) {
          var pt, _n = Oe.get(ot) || ((pt = It.current.find(function(Nn) {
            return Nn.value === ot;
          })) === null || pt === void 0 ? void 0 : pt.option);
          return !_n || _n._origin === uy;
        }).map(function(ot) {
          return je(ot);
        }), Xe = et.filter(function(ot) {
          var pt = He(ot) ? ot.value : ot;
          return Ce.indexOf(pt) !== -1;
        });
        oe = Xe.concat(We);
      }
      var ct = function(ot) {
        return ot.map(function(pt) {
          return He(pt) ? pt.value : pt;
        }).toString();
      };
      ct(oe) !== ct(et) && xe(oe);
    }
  }, [se, ae, re, je]), _.useEffect(function() {
    ae && Fe(Pe && !Oe.has(Pe) ? je(Pe, true) : null);
  }, [Pe, je]), _.useEffect(function() {
    var oe = Ht.current;
    Ee === Pe && (oe === "manual" || oe === "optionListHide") && Z && Z(Pe, oe);
  }, [Pe]);
  var Je = _.useCallback(function(oe) {
    var Ce = Oe.get(oe);
    if (Ce) {
      var We = It.current.findIndex(function(ct) {
        return ct.value === oe;
      });
      return We > -1 ? It.current.splice(We, 1, { value: oe, option: Ce }) : It.current.push({ value: oe, option: Ce }), Ce;
    }
    var Xe = It.current.find(function(ct) {
      return ct.value === oe;
    });
    return Xe && Xe.option;
  }, [Oe]), lt = function(oe) {
    if (qe.length) {
      if (we === void 0 || !Oe.has(we)) return tt[qe[0]];
      var Ce = Oe.get(we), We = Ce._index, Xe = qe.indexOf(We), ct = qe.length;
      return tt[qe[((oe === "up" ? Xe - 1 : Xe + 1) + ct) % ct]];
    }
  }, Ke = function(oe, Ce) {
    Ce === void 0 && (Ce = au(oe, re));
    var We = oe, Xe = oe === void 0 ? void 0 : Array.isArray(oe) ? oe.map(Je) : Je(oe);
    if (I && !Ce) {
      var ct = function(ot, pt) {
        var _n, Nn;
        if (pt) return pt.children;
        var Ze = "value" in s ? s.value : "defaultValue" in s ? s.defaultValue : null;
        if (Array.isArray(Ze)) try {
          for (var rr = zb(Ze), zn = rr.next(); !zn.done; zn = rr.next()) {
            var Mr = zn.value;
            if (He(Mr) && Mr.value === ot) return Mr.label;
          }
        } catch (Rr) {
          _n = { error: Rr };
        } finally {
          try {
            zn && !zn.done && (Nn = rr.return) && Nn.call(rr);
          } finally {
            if (_n) throw _n.error;
          }
        }
        else if (He(Ze) && Ze.value === ot) return Ze.label;
      };
      Array.isArray(oe) ? We = oe.map(function(ot, pt) {
        return { value: ot, label: ct(ot, Xe[pt]) };
      }) : We = { value: oe, label: ct(oe, Xe) };
    }
    return { option: Xe, value: We };
  }, gt = function(oe) {
    if (ee(oe), H) {
      var Ce = Ke(oe);
      H(Ce.value, Ce.option);
    }
  }, Et = function(oe, Ce) {
    if (Ce === "remove" || Ce === "add" && Oe.get(oe)) {
      var We = Ce === "add" ? se.concat(oe) : se.filter(function(ot) {
        return ot !== oe;
      }), Xe = Ce === "add" ? L : Q;
      if (gt(We), typeof Xe == "function") {
        var ct = Ke(oe, false);
        Xe(ct.value, ct.option);
      }
    }
  }, an = function(oe, Ce) {
    Ce || (re ? (Et(oe, se.indexOf(oe) === -1 ? "add" : "remove"), (!He(b) || !b.retainInputValueWhileSelect) && me("", "optionChecked")) : (oe !== se && gt(oe), setTimeout(function() {
      Ie(false);
    })));
  }, yn = V0(/* @__PURE__ */ new Map([[md.code, function() {
    return Ie(false);
  }], [li.code, function() {
    if (fe) {
      var oe = Oe.get(we);
      oe && an(we, oe.disabled);
    } else Ie(true);
  }], [Zh.code, function() {
    return Ie(false);
  }], [N0.code, function() {
    if (fe) return at.current = "up", Me(lt("up")), false;
  }], [k0.code, function() {
    if (fe) return at.current = "down", Me(lt("down")), false;
  }]])), si = function() {
    var oe, Ce, We, Xe = (P == null ? void 0 : P.autoAlignPopupWidth) === false && (!(!((Ce = P == null ? void 0 : P.style) === null || Ce === void 0) && Ce.width) || ((We = P == null ? void 0 : P.style) === null || We === void 0 ? void 0 : We.width) === "auto"), ct = Xe && nt, ot = "notFoundContent" in s ? O : a("Select"), pt = Le.length ? h.createElement(U0, sr({ id: cn, role: "listbox", style: V, className: he(ue + "-popup-inner", j), ref: it, data: Le, height: null, isStaticItemHeight: !dt, measureLongestItem: Xe, itemKey: function(Ze) {
      return Ze.props._key;
    }, onMouseDown: Rb, onMouseMove: function() {
      at.current = null;
    }, onScroll: function(Ze) {
      return k && k(Ze.target);
    } }, z, { threshold: ct ? null : z == null ? void 0 : z.threshold }), function(Ze) {
      var rr;
      if (Y0(Ze)) return h.createElement(Ze.type, sr({}, Ze.props, { prefixCls: ue }));
      if (G0(Ze)) {
        var zn = (rr = Ze.props) === null || rr === void 0 ? void 0 : rr.value, Mr = He(ge) ? ge.value : ge, Rr = et.map(function(Dr) {
          return He(Dr) ? Dr.value : Dr;
        }), Fu = { prefixCls: ue, rtl: f, _valueActive: we, _valueSelect: se, _isMultipleMode: re, _isUserCreatingOption: ae && Mr === zn, _isUserCreatedOption: ae && Rr.indexOf(zn) > -1, _onClick: an, _onMouseEnter: function(Dr) {
          at.current === null && Me(Dr);
        }, _onMouseLeave: function() {
          at.current === null && Me(void 0);
        } };
        return Ze && h.createElement(Ze.type, sr({}, Ze.props, Fu));
      }
      return Ze;
    }) : null, _n = ae && Pe, Nn = ot && !_n ? h.createElement("div", { style: V, className: he(ue + "-popup-inner", j) }, ot) : null;
    return h.createElement("div", { className: he(ue + "-popup", (oe = {}, oe[ue + "-popup-hidden"] = pt === null && Nn === null, oe[ue + "-popup-multiple"] = re, oe)), tabIndex: -1, onKeyDown: function(Ze) {
      return yn(Ze);
    } }, typeof M == "function" ? M(pt || Nn) : pt || Nn);
  }, yt = function(oe) {
    if (bt.current = null, re && Ft(S) && S.length) {
      var Ce = oe.split(new RegExp("[" + S.join("") + "]"));
      if (Ce.length > 1) {
        bt.current = Date.now();
        var We = Ce.filter(function(ot, pt) {
          return ot && Ce.indexOf(ot) === pt;
        }), Xe = se.slice(0), ct = false;
        We.forEach(function(ot) {
          Xe.indexOf(ot) === -1 && (ae || Oe.get(ot)) && (Xe.push(ot), ct = true);
        }), ct && gt(Xe);
      }
    }
    return !!bt.current;
  }, Jt = { onFocus: A, onBlur: function(oe) {
    W == null || W(oe), !fe && !At.current && me("", "optionListHide");
  }, onKeyDown: function(oe) {
    if (oe.target.tagName === "INPUT" && oe.target.value) {
      var Ce = oe.key === Zh.key, We = oe.key === li.key;
      if (We || Ce) {
        var Xe = We ? `
` : Ce ? "	" : "";
        yt(oe.target.value + Xe) && me("", "tokenSeparator");
      }
    }
    yn(oe), F == null || F(oe);
  }, onChangeInputValue: function(oe, Ce) {
    var We = Ce.nativeEvent.inputType;
    We !== "insertFromPaste" && yt(oe), bt.current ? me("", "tokenSeparator") : me(oe, "manual"), !fe && oe && Ie(true);
  }, onPaste: function(oe) {
    yt(oe.clipboardData.getData("text")), E == null || E(oe);
  }, onRemoveCheckedItem: function(oe, Ce, We) {
    We.stopPropagation(), Et(se[Ce], "remove");
  }, onClear: function(oe) {
    if (oe.stopPropagation(), re) {
      var Ce = se.filter(function(We) {
        var Xe = Oe.get(We);
        return Xe && Xe.disabled;
      });
      gt(Ce);
    } else gt(void 0);
    me("", "manual"), q == null || q(fe);
  } };
  _.useImperativeHandle(o, function() {
    var oe, Ce;
    return { dom: (oe = jt.current) === null || oe === void 0 ? void 0 : oe.dom, focus: function() {
      jt.current && jt.current.focus();
    }, blur: function() {
      jt.current && jt.current.blur();
    }, hotkeyHandler: yn, activeOptionValue: we, getOptionInfoByValue: Je, getOptionInfoList: function() {
      return Lb([], xi(Oe.values()), false).filter(function(We) {
        return We._valid;
      });
    }, scrollIntoView: Se, getRootDOMNode: (Ce = jt.current) === null || Ce === void 0 ? void 0 : Ce.getRootDOMNode };
  }, [yn, Oe, we, Je, Se]);
  var en = function(oe) {
    var Ce, We = sr({}, P), Xe = (Ce = We.popupStyle) === null || Ce === void 0 ? void 0 : Ce.width;
    return Xe !== void 0 && (We.style = sr(sr({}, We.style), { width: Xe })), h.createElement(np, sr({ ref: function(ct) {
      return $t.current = ct;
    }, popup: si, trigger: T, disabled: w, getPopupContainer: D, classNames: "slideDynamicOrigin", autoAlignPopupWidth: true, popupAlign: Ab, popupVisible: fe, unmountOnExit: C, onVisibleChange: Ie, __onExit: function() {
      At.current = true;
    }, __onExited: function() {
      At.current = false, me("", "optionListHide");
    } }, Ot(We, ["popupVisible", "onVisibleChange"])), oe);
  }, tn = typeof R == "function" ? R(Ke(se)) : R;
  return h.createElement(jr, { onResize: function() {
    return $t.current.updatePopupPosition();
  } }, tn != null ? en(tn) : h.createElement(W0, sr({}, s, Jt, { ref: jt, value: se, inputValue: Pe, popupVisible: fe, rtl: f, prefixCls: ue, allowCreate: !!ae, ariaControls: cn, isEmptyValue: qt, isMultiple: re, onSort: gt, renderText: function(oe) {
    var Ce = Je(oe), We = oe, Xe = String(oe);
    if (Mt(p)) {
      var ct = Ke(oe, false);
      We = p(ct.option || null, ct.value), Xe = ga(We);
    } else {
      var ot = false;
      if (I) {
        var pt = s.value || s.defaultValue;
        if (Array.isArray(pt)) {
          var _n = pt.find(function(Nn) {
            return He(Nn) && Nn.value === oe;
          });
          _n && (We = _n.label, Xe = ga(_n.label), ot = true);
        } else He(pt) && (We = pt.label, Xe = ga(pt.label), ot = true);
      }
      !ot && Ce && "children" in Ce && (We = Ce.children, Xe = ga(Ce.children));
    }
    return { text: We, textInput: Xe, disabled: Ce && Ce.disabled };
  }, renderView: en })));
}
var Fb = h.forwardRef(Vb), Du = Fb;
Du.displayName = "Select";
Du.Option = rp;
Du.OptGroup = L0;
const Od = _.createContext({});
var cr = function() {
  return cr = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, cr.apply(this, arguments);
}, Hb = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Wb = { shape: "circle", autoFixFontSize: true, triggerType: "button" }, op = _.forwardRef(function(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = r.rtl, s = a("avatar"), m = _.useContext(Od), p = cr(cr(cr(cr({}, Wb), u == null ? void 0 : u.Avatar), m), e), g = p.className, w = p.shape, C = p.size, O = p.children, b = p.autoFixFontSize, S = p.triggerIcon, x = p.triggerIconStyle, B = p.triggerType, I = p.onClick, D = Hb(p, ["className", "shape", "size", "children", "autoFixFontSize", "triggerIcon", "triggerIconStyle", "triggerType", "onClick"]), T = cr(cr({}, m.style), e.style), R = _.useRef(null), P = _.useRef(null);
  _.useEffect(function() {
    b && M();
  }, [C, O]), _.useImperativeHandle(o, function() {
    return P.current;
  });
  function M() {
    if (R.current) {
      var L = R.current.clientWidth, Q = e.size || P.current.offsetWidth, q = Q / (L + 8);
      Q && q < 1 && (R.current.style.transform = "scale(" + q + ") translateX(-50%)");
    }
  }
  var V = he(s, s + "-" + w, (n = {}, n[s + "-with-trigger-icon"] = S, n[s + "-rtl"] = f, n), g), j = h.Children.toArray(O), z = j.length === 1 && h.isValidElement(j[0]) && (j[0].type === "img" || j[0].type === "picture"), H = x || {};
  return B === "button" && (!x || x && !x.color) && T && T.backgroundColor && (H.color = T.backgroundColor), h.createElement("div", cr({ ref: P, onClick: I }, D, { style: cr({ width: C, height: C, fontSize: Rt(C) ? C / 2 : "" }, T), className: V }), z ? h.createElement("span", { className: s + "-image" }, O) : null, !z && h.createElement("span", { ref: R, className: s + "-text" }, O), S && h.createElement("div", { className: s + "-trigger-icon-" + B, style: H }, S));
});
op.displayName = "Avatar";
var bd = function() {
  return bd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, bd.apply(this, arguments);
}, Bb = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Ub = { shape: "circle", autoFixFontSize: true };
function Kb(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = r.rtl, s = Dt(e, Ub, u == null ? void 0 : u["Avatar.Group"]), m = s.className, p = s.style, g = s.children, w = s.size, C = s.shape, O = s.autoFixFontSize, b = s.zIndexAscend, S = s.maxCount, x = s.maxStyle, B = s.maxPopoverTriggerProps, I = Bb(s, ["className", "style", "children", "size", "shape", "autoFixFontSize", "zIndexAscend", "maxCount", "maxStyle", "maxPopoverTriggerProps"]), D = a("avatar-group"), T = he(D, (n = {}, n[D + "-rtl"] = f, n), m), R = h.Children.toArray(g), P = R.length, M = R;
  if (Rt(S) && S >= 0 && P > S) {
    var V = R.slice(S);
    M = R.slice(0, S), M.push(h.createElement(op, { key: "_arco_avatar_group_popup", style: x, className: D + "-max-count-avatar" }, h.createElement(Na, { triggerProps: B, content: h.createElement(Od.Provider, { value: { size: w, shape: C, autoFixFontSize: O } }, h.createElement("div", { className: D + "-popover" }, V)) }, "+", V.length)));
  }
  return h.createElement("div", bd({ ref: o, style: p, className: T }, I), M.map(function(j, z) {
    var H = f ? z === M.length - 1 : z === 0, L = { zIndex: b ? z + 1 : P - z, marginLeft: w ? H ? 0 : -w / 4 : "" };
    return h.createElement(Od.Provider, { key: z, value: { size: w, shape: C, autoFixFontSize: O, style: L } }, j);
  }));
}
var X0 = _.forwardRef(Kb);
X0.displayName = "AvatarGroup";
var Z0 = op;
Z0.Group = X0;
var qb = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function Gb(e) {
  var o, n = e.prefixCls, r = e.maxCount, a = e.count, u = e.className, f = e.style, s = qb(_.useState(false), 2), m = s[0], p = s[1], g = Jd(a), w = a !== g;
  return h.createElement(Ri, { classNames: "badge-zoom", in: a > 0, timeout: 300, appear: true, mountOnEnter: true, unmountOnExit: true, onEntered: function() {
    p(true);
  } }, h.createElement("span", { className: u, style: f }, h.createElement("span", { key: a, className: he((o = {}, o[n + "-number-text"] = m && w, o)) }, r && a > r ? r + "+" : a)));
}
var fr = function() {
  return fr = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, fr.apply(this, arguments);
}, Yb = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Qb = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, Xb = ["red", "orangered", "orange", "gold", "lime", "green", "cyan", "arcoblue", "purple", "pinkpurple", "magenta", "gray"], Zb = { count: 0, maxCount: 99 };
function Jb(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = r.rtl, s = Dt(e, Zb, u == null ? void 0 : u.Badge), m = s.count, p = s.text, g = s.className, w = s.dotClassName, C = s.dot, O = s.maxCount, b = s.color, S = s.dotStyle, x = s.offset, B = s.style, I = s.status, D = s.children, T = Yb(s, ["count", "text", "className", "dotClassName", "dot", "maxCount", "color", "dotStyle", "offset", "style", "status", "children"]), R = a("badge"), P = fr({}, S || {}), M = Qb(x || [], 2), V = M[0], j = M[1];
  V && (P.marginRight = -V), j && (P.marginTop = j);
  var z = function() {
    var H, L;
    if (He(m)) return h.createElement("span", { className: he(R + "-custom-dot", w), style: P }, m);
    var Q = !b || Xb.indexOf(b) > -1 ? {} : { backgroundColor: b };
    return p && !b && !I ? h.createElement("span", { className: he(R + "-text", w), style: P }, p) : I || b && typeof m == "number" && m <= 0 ? h.createElement("span", { className: R + "-status-wrapper" }, h.createElement("span", { className: he(R + "-status-dot", (H = {}, H[R + "-status-" + I] = I, H[R + "-color-" + b] = b, H), w), style: fr(fr({}, Q), P) }), p && h.createElement("span", { className: R + "-status-text" }, p)) : (C || b) && typeof m == "number" && m > 0 ? h.createElement(Ri, { classNames: "badge-zoom", in: C || !!b, timeout: 200, appear: true, mountOnEnter: true, unmountOnExit: true }, h.createElement("span", { className: he(R + "-dot", (L = {}, L[R + "-color-" + b] = b, L), w), style: fr(fr({}, Q), P) })) : h.createElement(Gb, { prefixCls: R, className: he(R + "-number", w), style: fr(fr({}, Q), P), maxCount: O, count: m });
  };
  return h.createElement("span", fr({ className: he(R, (n = {}, n[R + "-status"] = I, n[R + "-no-children"] = !D, n[R + "-rtl"] = f, n), g), ref: o, style: B }, T), D, z());
}
var J0 = _.forwardRef(Jb);
J0.displayName = "Badge";
function sy(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function cy(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? sy(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function eE(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = cy(cy({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-more") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", stroke: "none", d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z" }), h.createElement("path", { d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z" }));
}
var zu = h.forwardRef(eE);
zu.defaultProps = { isIcon: true };
zu.displayName = "IconMore";
var ya = function() {
  return ya = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, ya.apply(this, arguments);
}, tE = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, nE = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, rE = { position: "br", trigger: "hover", type: "default", icon: h.createElement(zu, null), unmountOnExit: true };
function iE(e, o) {
  var n, r = _.useContext(Ye).componentConfig, a = Dt(e, rE, r == null ? void 0 : r["Dropdown.Button"]), u = a.className, f = a.style, s = a.children, m = a.disabled, p = a.position, g = p === void 0 ? "br" : p, w = a.type, C = w === void 0 ? "default" : w, O = a.size, b = a.icon, S = b === void 0 ? h.createElement(zu, null) : b, x = a.onClick, B = a.buttonProps, I = a.buttonsRender, D = tE(a, ["className", "style", "children", "disabled", "position", "type", "size", "icon", "onClick", "buttonProps", "buttonsRender"]), T = h.createElement(mt, ya({ disabled: m, type: C, size: O, onClick: x }, B), s), R = h.createElement(mt, { disabled: m, type: C, size: O, icon: S });
  I && (n = nE(I([T, R]), 2), T = n[0], R = n[1]);
  var P = m || !R || R.props && R.props.loading;
  return h.createElement(mt.Group, ya({ className: u, style: f, ref: o }, zi(a)), T, h.createElement(Vo, ya({ disabled: m, position: g }, D, { triggerProps: ya({ disabled: P }, D == null ? void 0 : D.triggerProps) }), R));
}
var e_ = _.forwardRef(iE);
e_.displayName = "DropdownButton";
var xo = function() {
  return xo = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, xo.apply(this, arguments);
}, aE = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, fy = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, oE = function(e) {
  var o = typeof Symbol == "function" && Symbol.iterator, n = o && e[o], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return { next: function() {
    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
  } };
  throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, lE = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
}, uE = { position: "bl", trigger: "hover", unmountOnExit: true }, sE = { left: 4, right: 4, top: 4, bottom: 4 };
function cE(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = r.rtl, s = Dt(e, uE, u == null ? void 0 : u.Dropdown), m = s.trigger, p = s.droplist, g = s.children, w = s.position, C = s.disabled, O = s.unmountOnExit, b = s.triggerProps, S = s.getPopupContainer, x = s.onVisibleChange, B = aE(s, ["trigger", "droplist", "children", "position", "disabled", "unmountOnExit", "triggerProps", "getPopupContainer", "onVisibleChange"]), I = a("dropdown"), D = _.useRef(null), T = fy(Ut(false, { defaultValue: s.defaultPopupVisible, value: s.popupVisible }), 2), R = T[0], P = T[1], M = function() {
    return h.Children.only(p || h.createElement("span", null));
  }, V = function(H) {
    P(H), x && x(H), b && b.onVisibleChange && b.onVisibleChange(H);
  }, j = function(H) {
    H !== R && V(H);
  }, z = function() {
    var H, L, Q, q = M();
    if (qn(q, "type.__ARCO_MENU__") || qn(q, "props.isMenu")) {
      var Z = true;
      try {
        for (var A = oE(h.Children.toArray(q.props.children)), W = A.next(); !W.done; W = A.next()) {
          var k = W.value;
          if (k != null) {
            Z = false;
            break;
          }
        }
      } catch (X) {
        H = { error: X };
      } finally {
        try {
          W && !W.done && (L = A.return) && L.call(A);
        } finally {
          if (H) throw H.error;
        }
      }
      return h.cloneElement(q, { prefixCls: he(I + "-menu", (Q = {}, Q[I + "-menu-hidden"] = Z, Q)), inDropdown: true, selectable: false, onClickMenuItem: function() {
        for (var X, U = [], E = 0; E < arguments.length; E++) U[E] = arguments[E];
        var F = null, G = M();
        G.props.onClickMenuItem && (F = (X = G.props).onClickMenuItem.apply(X, lE([], fy(U), false)));
        var ae = D.current && D.current.getRootElement();
        ae && ae.focus && ae.focus(), F instanceof Promise ? F.finally(function() {
          return V(false);
        }) : F !== false && V(false);
      } });
    }
    return q;
  };
  return h.createElement(np, xo({ ref: function(H) {
    return D.current = H;
  }, classNames: "slideDynamicOrigin", childrenPrefix: I, trigger: m, popup: z, mouseEnterDelay: 400, mouseLeaveDelay: 400, disabled: C, unmountOnExit: O, position: w, popupVisible: R, popupAlign: sE, getPopupContainer: S, alignPoint: m === "contextMenu" }, Pu(B, z0), zi(B), Ot(b, ["onVisibleChange"]), { onVisibleChange: j }), h.isValidElement(g) ? h.cloneElement(g, xo(xo({}, typeof C == "boolean" ? { disabled: C } : {}), { className: he((n = {}, n[I + "-popup-visible"] = R, n[[I] + "-rtl"] = f, n), g.props.className) })) : g);
}
var fE = h.forwardRef(cE), Vo = fE;
Vo.displayName = "Dropdown";
Vo.Button = e_;
var _u = function() {
  return _u = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, _u.apply(this, arguments);
}, dE = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, pE = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function lp(e) {
  var o, n, r = e.children, a = e.style, u = e.className, f = e.prefixCls, s = e.droplist, m = e.dropdownProps, p = e.href, g = e.onClick, w = e.tagName, C = w === void 0 ? "div" : w, O = dE(e, ["children", "style", "className", "prefixCls", "droplist", "dropdownProps", "href", "onClick", "tagName"]), b = pE(_.useState(false), 2), S = b[0], x = b[1], B = Sa(p) ? "a" : C, I = h.createElement(B, _u({ href: p, onClick: g, role: "listitem", style: a, className: he(f + "-item", (o = {}, o[f + "-item-with-dropdown"] = s, o), u) }, zi(O)), r, s && h.createElement("span", { "aria-hidden": true, className: he(f + "-item-dropdown-icon", (n = {}, n[f + "-item-dropdown-icon-active"] = S, n)) }, h.createElement(Pa, null)));
  return s ? h.createElement(Vo, _u({ droplist: s, onVisibleChange: function(D) {
    x(D), m && m.onVisibleChange && m.onVisibleChange(D);
  } }, Ot(m, ["onVisibleChange"])), I) : I;
}
lp.displayName = "BreadcrumbItem";
var Ir = _.createContext({}), vE = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, mE = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
};
function Lu(e) {
  var o = e.prefixCls, n = e.levelIndent, r = _.useContext(Ir).collapse, a = e.level - 1;
  return !r && a > 0 ? h.createElement("span", null, mE([], vE(new Array(a)), false).map(function(u, f) {
    return h.createElement("span", { key: f, className: o + "-indent", style: { width: n } });
  })) : null;
}
var tr = function() {
  return tr = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, tr.apply(this, arguments);
}, hE = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, gE = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
}, t_ = ["popup", "triggerProps", "selectable"], n_ = function(e) {
  var o = [];
  return h.Children.forEach(e, function(n) {
    var r, a = (r = n == null ? void 0 : n.type) === null || r === void 0 ? void 0 : r.menuType;
    a === "MenuItem" || a === "SubMenu" ? o.push(n) : a === "MenuGroup" && (o = o.concat(n_(n.props.children)));
  }), o;
}, r_ = function(e, o, n) {
  o === void 0 && (o = []), n === void 0 && (n = {});
  var r = n_(e);
  return r.forEach(function(a, u) {
    var f, s, m, p = a.key, g = a.type.menuType, w = gE([p], hE(o), false), C = { keyPath: [], prev: ((s = r[u - 1]) === null || s === void 0 ? void 0 : s.key) || null, next: ((m = r[u + 1]) === null || m === void 0 ? void 0 : m.key) || null };
    if (u === 0 || u === r.length - 1) {
      var O = w[1], b = u === 0 ? "firstChild" : "lastChild";
      O && (n[O] = tr(tr({}, n[O]), (f = {}, f[b] = p, f)));
    }
    switch (g) {
      case "SubMenu":
        C.keyPath = w, r_(a.props.children, w, n);
        break;
      case "MenuItem":
        C.keyPath = w, C.disabled = a.props.disabled;
        break;
    }
    n[p] = tr(tr({}, n[p]), C);
  }), n;
}, $u = function(e, o) {
  return h.Children.map(e, function(n, r) {
    if (!n || !n.props) return n;
    var a = typeof n.type == "string", u = n.type && n.type.menuType;
    if (!u && n.props.children) {
      var f = a ? {} : o, s = $u(n.props.children, o);
      return h.cloneElement(n, tr(tr({}, f), { _key: n.key, children: s.length === 1 ? s[0] : s }));
    }
    return a ? n : h.cloneElement(n, tr(tr(tr({}, o), n.props), { _key: n.key || "$menu-" + r }));
  });
};
function i_(e, o) {
  var n = false;
  function r(a) {
    !a || n || h.Children.forEach(a, function(u) {
      if (u && u.props && u.type && !n) {
        var f = u.type.menuType, s = u.props.selectable;
        (f === "MenuItem" || f === "SubMenu" && s) && (n = o.indexOf(u.key) !== -1), !n && u.props.children && r(u.props.children);
      }
    });
  }
  return r(e), n;
}
var _a = function() {
  return _a = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, _a.apply(this, arguments);
}, yE = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function _E(e, o) {
  var n, r = e._key, a = e.children, u = e.level, f = e.disabled, s = e.className, m = e.style, p = e.wrapper, g = p === void 0 ? "div" : p, w = e.onClick, C = e.renderItemInTooltip, O = yE(e, ["_key", "children", "level", "disabled", "className", "style", "wrapper", "onClick", "renderItemInTooltip"]), b = _.useContext(Ir), S = b.prefixCls, x = b.mode, B = b.collapse, I = b.inDropdown, D = b.levelIndent, T = b.selectedKeys, R = b.autoScrollIntoView, P = b.scrollConfig, M = b.tooltipProps, V = b.onClickMenuItem, j = _.useRef(null), z = Xd(), H = x === "vertical" && u > 1, L = B && !I && u === 1, Q = T && ~T.indexOf(r);
  _.useEffect(function() {
    var A = Q && R;
    j.current && A && setTimeout(function() {
      j.current && M1(j.current, _a({ behavior: "smooth", block: "start", scrollMode: "if-needed", boundary: document.body }, P));
    }, z ? 500 : 0);
  }, [Q, R]);
  var q = function(A) {
    f || (V(r, A), w && w(A));
  }, Z = h.createElement(g, _a({ tabIndex: f ? -1 : 0, role: "menuitem", ref: function(A) {
    o = A, j.current = o;
  }, style: m, className: he(S + "-item", (n = {}, n[S + "-disabled"] = f, n[S + "-selected"] = Q, n[S + "-item-indented"] = H && !B, n), s), onClick: q, onKeyDown: function(A) {
    var W = A.keyCode || A.which;
    W === li.code && q(A);
  } }, Ot(O, ["key", "_key"].concat(t_))), H && !B ? h.createElement(h.Fragment, null, h.createElement(Lu, { prefixCls: S, levelIndent: D, level: u }), h.createElement("span", { className: S + "-item-inner", style: { display: "block" } }, a)) : a, Q && x === "horizontal" ? h.createElement("div", { className: S + "-selected-label" }) : null);
  return L ? h.createElement(Mi, _a({ trigger: "hover", position: "right", content: typeof C == "function" ? C() : h.createElement("span", null, a), triggerProps: _a({ className: S + "-item-tooltip" }, (M == null ? void 0 : M.triggerProps) || {}) }, Ot(M, ["triggerProps"])), Z) : Z;
}
var wE = _.forwardRef(_E), up = wE;
up.displayName = "MenuItem";
up.menuType = "MenuItem";
function CE(e, o) {
  var n = e.children, r = e.title, a = e.level, u = e.className, f = e.style, s = _.useContext(Ir), m = s.prefixCls, p = s.levelIndent, g = a === 1 ? a + 1 : a, w = $u(n, { level: g });
  return h.createElement("div", { ref: o, className: he(m + "-group", u), style: f }, h.createElement("div", { className: m + "-group-title" }, h.createElement(Lu, { level: a, prefixCls: m, levelIndent: p }), h.createElement("span", null, r)), w);
}
var xE = _.forwardRef(CE), sp = xE;
sp.displayName = "MenuItemGroup";
sp.menuType = "MenuGroup";
var Oo = function() {
  return Oo = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Oo.apply(this, arguments);
}, dy = function(e, o, n, r) {
  function a(u) {
    return u instanceof n ? u : new n(function(f) {
      f(u);
    });
  }
  return new (n || (n = Promise))(function(u, f) {
    function s(g) {
      try {
        p(r.next(g));
      } catch (w) {
        f(w);
      }
    }
    function m(g) {
      try {
        p(r.throw(g));
      } catch (w) {
        f(w);
      }
    }
    function p(g) {
      g.done ? u(g.value) : a(g.value).then(s, m);
    }
    p((r = r.apply(e, o || [])).next());
  });
}, py = function(e, o) {
  var n = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, r, a, u, f;
  return f = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
    return this;
  }), f;
  function s(p) {
    return function(g) {
      return m([p, g]);
    };
  }
  function m(p) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (r = 1, a && (u = p[0] & 2 ? a.return : p[0] ? a.throw || ((u = a.return) && u.call(a), 0) : a.next) && !(u = u.call(a, p[1])).done) return u;
      switch (a = 0, u && (p = [p[0] & 2, u.value]), p[0]) {
        case 0:
        case 1:
          u = p;
          break;
        case 4:
          return n.label++, { value: p[1], done: false };
        case 5:
          n.label++, a = p[1], p = [0];
          continue;
        case 7:
          p = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (u = n.trys, !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2)) {
            n = 0;
            continue;
          }
          if (p[0] === 3 && (!u || p[1] > u[0] && p[1] < u[3])) {
            n.label = p[1];
            break;
          }
          if (p[0] === 6 && n.label < u[1]) {
            n.label = u[1], u = p;
            break;
          }
          if (u && n.label < u[2]) {
            n.label = u[2], n.ops.push(p);
            break;
          }
          u[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      p = o.call(e, n);
    } catch (g) {
      p = [6, g], a = 0;
    } finally {
      r = u = 0;
    }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: true };
  }
}, OE = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, bE = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, Kf = { height: 0, visibility: "hidden" }, EE = function(e) {
  var o, n = e._key, r = e.children, a = e.style, u = e.className, f = e.title, s = e.level, m = e.forwardedRef, p = e.selectable, g = OE(e, ["_key", "children", "style", "className", "title", "level", "forwardedRef", "selectable"]), w = _.useContext(Ir), C = w.id, O = w.prefixCls, b = w.levelIndent, S = w.openKeys, x = S === void 0 ? [] : S, B = w.selectedKeys, I = B === void 0 ? [] : B, D = w.icons, T = w.onClickSubMenu, R = w.onClickMenuItem, P = O + "-inline", M = (x == null ? void 0 : x.indexOf(n)) > -1, V = p && I.indexOf(e._key) > -1 || i_(r, I), j = bE(b0(M ? { height: "auto" } : Kf), 2), z = j[0], H = j[1], L = function(W) {
    T(n, s, "inline"), p && R(n, W);
  }, Q = Ru(C + "-submenu-inline-"), q = $u(r, Oo(Oo({}, Pu(g, t_)), { level: s + 1, selectable: p })), Z = h.createElement("div", { tabIndex: 0, "aria-expanded": M, "aria-controls": Q, className: he(P + "-header", (o = {}, o[O + "-selected"] = V, o)), onClick: L, onKeyDown: function(W) {
    var k = W.keyCode || W.which;
    k === li.code && L(W);
  } }, h.createElement(Lu, { level: s, prefixCls: O, levelIndent: b }), h.createElement("span", null, f), h.createElement("span", { className: O + "-icon-suffix " + (M ? "is-open" : "") }, D && D.horizontalArrowDown ? D.horizontalArrowDown : h.createElement(Pa, null))), A = h.createElement("div", { id: Q, className: he(P + "-content"), style: z }, q);
  return h.createElement("div", Oo({ ref: m, className: he(P, u), style: a }, Ot(g, ["key", "popup", "triggerProps"])), Z, h.createElement(Ri, { in: M, timeout: 200, classNames: P, unmountOnExit: false, onEnter: function(W) {
    return dy(void 0, void 0, void 0, function() {
      return py(this, function(k) {
        switch (k.label) {
          case 0:
            return W ? [4, H(Kf)] : [2];
          case 1:
            return k.sent(), [4, H({ height: W.scrollHeight })];
          case 2:
            return k.sent(), [2];
        }
      });
    });
  }, onEntered: function() {
    H({ height: "auto" });
  }, onExit: function(W) {
    return dy(void 0, void 0, void 0, function() {
      return py(this, function(k) {
        switch (k.label) {
          case 0:
            return W ? [4, H({ height: W.scrollHeight })] : [2];
          case 1:
            return k.sent(), [4, H(Kf)];
          case 2:
            return k.sent(), [2];
        }
      });
    });
  } }, A));
};
function vy(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function my(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? vy(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function SE(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = my(my({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-right") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "m16 39.513 15.556-15.557L16 8.4" }));
}
var Mo = h.forwardRef(SE);
Mo.defaultProps = { isIcon: true };
Mo.displayName = "IconRight";
function hy(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gy(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? hy(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function PE(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = gy(gy({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-left") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M32 8.4 16.444 23.956 32 39.513" }));
}
var Ro = h.forwardRef(PE);
Ro.defaultProps = { isIcon: true };
Ro.displayName = "IconLeft";
var wa = function() {
  return wa = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, wa.apply(this, arguments);
}, NE = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, kE = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, jE = function(e) {
  var o, n = e._key, r = e.children, a = e.style, u = e.className, f = e.title, s = e.level, m = e.selectable, p = e.forwardedRef, g = e.triggerProps, w = NE(e, ["_key", "children", "style", "className", "title", "level", "selectable", "forwardedRef", "triggerProps"]), C = _.useContext(Ir), O = C.id, b = C.prefixCls, S = C.mode, x = C.inDropdown, B = C.levelIndent, I = C.selectedKeys, D = I === void 0 ? [] : I, T = C.icons, R = C.triggerProps, P = C.onClickSubMenu, M = C.onClickMenuItem, V = _.useContext(Ye).rtl, j = wa(wa({}, R), g), z = kE(_.useState(false), 2), H = z[0], L = z[1], Q = b + "-pop", q = m && D.indexOf(e._key) > -1, Z = S === "horizontal" && !x, A = Ru(O + "-submenu-pop-"), W = function() {
    var E = T && T.popArrowRight ? T.popArrowRight : V ? h.createElement(Ro, null) : h.createElement(Mo, null), F = T && T.horizontalArrowDown ? T.horizontalArrowDown : h.createElement(Pa, null);
    return h.createElement("span", { className: b + "-icon-suffix" }, Z ? F : E);
  }, k = i_(r, D) || q, X = V ? ["br", "lt"] : ["bl", "rt"], U = function(E) {
    P(n, s, "pop"), m && M(n, E);
  };
  return h.createElement(Vo, { trigger: "hover", popupVisible: H, onVisibleChange: L, droplist: h.createElement(pr, { id: A, selectedKeys: D, onClickMenuItem: function(E, F) {
    M(E, F), L(false);
  } }, r), triggerProps: wa({ position: Z ? X[0] : X[1], showArrow: true, autoAlignPopupMinWidth: true, classNames: "fadeIn", duration: 100, mouseEnterDelay: 50, mouseLeaveDelay: 50, className: he(Q + "-trigger", j && j.className) }, Ot(j, ["className"])) }, h.createElement("div", wa({ tabIndex: 0, "aria-haspopup": true, "aria-expanded": H, "aria-controls": A, ref: p, style: a, className: he(Q, Q + "-header", (o = {}, o[b + "-selected"] = k, o), u), onClick: U, onKeyDown: function(E) {
    var F = E.keyCode || E.which;
    F === li.code ? U(E) : F === j0.code ? L(false) : F === I0.code && L(true);
  } }, Ot(w, ["key", "popup"])), h.createElement(Lu, { prefixCls: b, levelIndent: B, level: s }), f, W(), k && S === "horizontal" ? h.createElement("div", { className: b + "-selected-label" }) : null));
}, Ed = function() {
  return Ed = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Ed.apply(this, arguments);
};
function IE(e, o) {
  var n = e.children, r = e.popup, a = e.level, u = _.useContext(Ir), f = u.mode, s = u.collapse, m = u.inDropdown, p = u.collectInlineMenuKeys, g = !!(typeof r == "function" ? r(a) : r), w = g || s || m || f !== "vertical", C = w ? jE : EE;
  return _.useEffect(function() {
    return p(e._key), function() {
      p(e._key, true);
    };
  }, []), h.createElement(C, Ed({ forwardedRef: o }, e), n);
}
var TE = _.forwardRef(IE), Au = TE;
Au.displayName = "SubMenu";
Au.menuType = "SubMenu";
function yy(e, o) {
  if (!e || !o) return null;
  var n = o;
  n === "float" && (n = "cssFloat");
  try {
    if (document.defaultView) {
      var r = document.defaultView.getComputedStyle(e, "");
      return e.style[n] || r ? r[n] : "";
    }
  } catch {
    return e.style[n];
  }
}
var _y = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, wy = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
}, ME = 5, RE = 1;
function Cy(e) {
  return e && Math.ceil(+e.getBoundingClientRect().width);
}
function xy(e) {
  var o = Number(e.replace("px", ""));
  return isNaN(o) ? 0 : o;
}
var DE = function(e) {
  var o = e.children, n = e.ellipsisText, r = n === void 0 ? "···" : n, a = e.onEllipsisChange, u = _.useContext(Ir).prefixCls, f = _.useRef(null), s = _.useRef(0), m = _y(_.useState(null), 2), p = m[0], g = m[1], w = u + "-overflow-sub-menu", C = u + "-overflow-hidden-menu-item", O = u + "-overflow-sub-menu-mirror", b = function(I) {
    if (I !== p) {
      var D = h.Children.toArray(o), T = I === null;
      a == null || a({ lastVisibleIndex: T ? D.length - 1 : I, overflowNodes: T ? [] : D.slice(I + 1) }), g(I);
    }
  }, S = _.useCallback(function() {
    if (f.current) {
      var I = f.current, D = Cy(I);
      if (!(s.current && Math.abs(D - s.current) < RE)) {
        s.current = D;
        for (var T = D - ME, R = [].slice.call(I.children), P = 0, M = 0, V = 0, j = 0; j < R.length; j++) {
          var z = R[j], H = z.className.split(" "), L = H.indexOf(w) > -1, Q = H.indexOf(O) > -1;
          if (!L) {
            var q = Cy(z) + xy(yy(z, "marginLeft")) + xy(yy(z, "marginRight"));
            if (Q) {
              V = q;
              continue;
            }
            if (M += q, M > T) {
              b(P - (M - q + V <= T ? 1 : 2));
              return;
            }
            P++;
          }
        }
        b(null);
      }
    }
  }, [o, p]), x = function(I, D) {
    return D === void 0 && (D = false), h.createElement(Au, { title: h.createElement("span", null, r), key: "arco-menu-overflow-sub-menu" + (D ? "-mirror" : ""), className: D ? O : w, children: I });
  }, B = function() {
    var I = null, D = x(null, true), T = h.Children.map(o, function(R, P) {
      var M, V, j = R;
      if (p !== null && (P > p && (j = h.cloneElement(R, { className: he(C, (V = (M = R) === null || M === void 0 ? void 0 : M.props) === null || V === void 0 ? void 0 : V.className) })), P === p + 1)) {
        var z = h.Children.toArray(o).slice(p + 1).map(function(H) {
          return h.cloneElement(H, { key: H.props._key });
        });
        I = x(z);
      }
      return j;
    });
    return wy(wy([D], _y(T), false), [I], false);
  };
  return h.createElement(jr, { onResize: S, delayOnResizeByRaf: true, getTargetDOMNode: function() {
    return f.current;
  } }, h.createElement("div", { className: u + "-overflow-wrap", ref: f }, B()));
};
function Oy(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function by(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Oy(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function zE(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = by(by({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-drag-dot-vertical") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", stroke: "none", d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z" }), h.createElement("path", { d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z" }));
}
var cp = h.forwardRef(zE);
cp.defaultProps = { isIcon: true };
cp.displayName = "IconDragDotVertical";
function Ey(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sy(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Ey(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ey(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function LE(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = Sy(Sy({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-drag-dot") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", stroke: "none", d: "M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z" }), h.createElement("path", { d: "M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z" }));
}
var fp = h.forwardRef(LE);
fp.defaultProps = { isIcon: true };
fp.displayName = "IconDragDot";
function Py(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ny(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Py(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Py(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $E(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = Ny(Ny({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-caret-right") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", stroke: "none", d: "M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z" }));
}
var wu = h.forwardRef($E);
wu.defaultProps = { isIcon: true };
wu.displayName = "IconCaretRight";
function ky(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jy(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? ky(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ky(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function AE(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = jy(jy({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-caret-left") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", stroke: "none", d: "M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z" }));
}
var Cu = h.forwardRef(AE);
Cu.defaultProps = { isIcon: true };
Cu.displayName = "IconCaretLeft";
function Iy(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ty(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Iy(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Iy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function VE(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = Ty(Ty({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-caret-down") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", stroke: "none", d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z" }));
}
var dp = h.forwardRef(VE);
dp.defaultProps = { isIcon: true };
dp.displayName = "IconCaretDown";
function My(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ry(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? My(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : My(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function FE(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = Ry(Ry({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-caret-up") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { fill: "currentColor", stroke: "none", d: "M23.063 13.171a1.2 1.2 0 0 1 1.875 0l13.503 16.88c.628.785.069 1.949-.937 1.949H10.497c-1.006 0-1.565-1.164-.937-1.95l13.503-16.879Z" }));
}
var pp = h.forwardRef(FE);
pp.defaultProps = { isIcon: true };
pp.displayName = "IconCaretUp";
var ki = function() {
  return ki = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, ki.apply(this, arguments);
}, HE = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function vp(e) {
  var o, n, r = e.className, a = e.direction, u = e.icon, f = e.onMouseDown, s = e.onResize, m = e.children, p = e.collapsible, g = p === void 0 ? {} : p, w = e.resizable, C = w === void 0 ? true : w, O = e.renderChildren, b = HE(e, ["className", "direction", "icon", "onMouseDown", "onResize", "children", "collapsible", "resizable", "renderChildren"]), S = _.useContext(Ye), x = S.getPrefixCls, B = S.rtl, I = x("resizebox-trigger"), D = a === "horizontal", T = B && !D, R = he(I, I + "-" + (D ? "horizontal" : "vertical"), (o = {}, o[I + "-not-resizable"] = !C, o), (n = {}, n[I + "-rtl"] = B, n), r), P = _.useRef(), M = T ? [h.createElement(wu, { key: "prev" }), h.createElement(Cu, { key: "next" })] : [h.createElement(Cu, { key: "prev" }), h.createElement(wu, { key: "next" })], V = He(g.prev) ? ki(ki({}, g.prev), { icon: g.prev.icon || (D ? h.createElement(pp, null) : M[0]) }) : {}, j = He(g.next) ? ki(ki({}, g.next), { icon: g.next.icon || (D ? h.createElement(dp, null) : M[1]) }) : {}, z = function() {
    return V.icon && !V.collapsed || j.collapsed ? h.createElement("span", { className: he(I + "-icon", he(I + "-prev")), onClick: V.onClick }, V.icon) : h.createElement("span", { className: he(I + "-icon-empty") });
  }, H = function() {
    return j.icon && !j.collapsed || V.collapsed ? h.createElement("span", { className: he(I + "-icon", he(I + "-next")), onClick: j.onClick }, j.icon) : h.createElement("span", { className: he(I + "-icon-empty") });
  }, L = function() {
    return C ? h.createElement("span", { className: I + "-icon" }, u || (D ? h.createElement(fp, null) : h.createElement(cp, null))) : h.createElement("span", { className: he(I + "-icon-empty") });
  }, Q = z(), q = L(), Z = H(), A = function() {
    return h.createElement("div", { className: I + "-icon-wrapper" }, Q, q, Z);
  };
  return C ? h.createElement(jr, { onResize: s, getTargetDOMNode: function() {
    return P.current;
  } }, h.createElement("div", ki({ ref: P }, Ot(b, ["style"]), { className: R, onMouseDown: f }), Mt(O) ? O(Q, q, Z) : m || A())) : h.createElement("div", { className: R }, Mt(O) ? O(Q, q, Z) : m || A());
}
var qf = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, Gf = "horizontal", Dy = "vertical";
function WE(e, o) {
  var n, r = e.style, a = e.className, u = e.component, f = u === void 0 ? "div" : u, s = e.direction, m = s === void 0 ? "horizontal" : s, p = e.icon, g = e.size, w = g === void 0 ? 0.5 : g, C = e.min, O = e.max, b = e.panes, S = e.disabled, x = e.trigger, B = _.useContext(Ye), I = B.getPrefixCls, D = B.rtl, T = I("resizebox-split"), R = m.includes(Gf), P = m.includes("reverse"), M = R && D, V = !R, j = he(T, T + "-" + (R ? Gf : Dy), (n = {}, n[T + "-rtl"] = D, n), a), z = qf(b, 2), H = z[0], L = z[1], Q = typeof w == "string", q = qf(_.useState(parseFloat(w)), 2), Z = q[0], A = q[1], W = qf(_.useState(0), 2), k = W[0], X = W[1], U = _.useRef({ startX: 0, startY: 0, startWidth: 0, startHeight: 0, startOffset: 0, moving: false }), E = _.useRef(), F = _.useRef([]);
  _.useImperativeHandle(o, function() {
    return E.current;
  }, []);
  function G(Ee, ce) {
    return parseFloat(Ee) / parseFloat(ce);
  }
  function ae(Ee, ce, fe, be) {
    var ze = typeof C == "string" ? G(parseFloat(C), Ee) : C || 0, ge = typeof O == "string" ? G(parseFloat(O), Ee) : O || 1, Fe = P ? -1 : 1, Qe = M ? -1 : 1;
    Fe *= Qe;
    var et = Q ? ce + (be - fe) * Fe : G(Ee * ce + (be - fe) * Fe, Ee), xe = Q ? ze * Ee : ze, ye = Q ? ge * Ee : ge;
    return et = Math.max(et, xe), et = Math.min(et, ye), et;
  }
  function ue(Ee) {
    var ce, fe;
    e.onMovingStart && e.onMovingStart(), U.current.moving = true, U.current.startX = Ee.pageX, U.current.startY = Ee.pageY, U.current.startWidth = (ce = E.current) === null || ce === void 0 ? void 0 : ce.offsetWidth, U.current.startHeight = (fe = E.current) === null || fe === void 0 ? void 0 : fe.offsetHeight, U.current.startOffset = Z, Xt(window, "mousemove", re), Xt(window, "touchmove", re), Xt(window, "mouseup", ne), Xt(window, "touchend", ne), Xt(window, "contextmenu", ne), document.body.style.cursor = V ? "row-resize" : "col-resize";
  }
  function re(Ee) {
    if (U.current.moving) {
      var ce = R ? ae(U.current.startWidth, U.current.startOffset, U.current.startX, Ee.pageX) : ae(U.current.startHeight, U.current.startOffset, U.current.startY, Ee.pageY);
      A(ce), e.onMoving && e.onMoving(Ee, Q ? ce + "px" : ce);
    }
  }
  function ne() {
    U.current.moving = false, Zt(window, "mousemove", re), Zt(window, "touchmove", re), Zt(window, "mouseup", ne), Zt(window, "touchend", ne), Zt(window, "contextmenu", ne), document.body.style.cursor = "default", e.onMovingEnd && e.onMovingEnd();
  }
  function le(Ee) {
    var ce = Ee[0].contentRect, fe = ce[V ? "height" : "width"];
    X(fe);
  }
  function ee() {
    var Ee = Q ? "px" : "%";
    if (!Z) return "0" + Ee;
    var ce = Q ? Z : Z * 100;
    return "calc(" + ce + Ee + " - " + k / 2 + "px)";
  }
  _.useEffect(function() {
    e.onPaneResize && e.onPaneResize(F.current);
  }, [Z, k]), Zd(function() {
    var Ee = parseFloat(w);
    Z !== Ee && A(Ee);
  }, [w]);
  var se = f, ke = h.createElement("div", { className: he(T + "-pane", "first-pane"), style: { flexBasis: ee() }, ref: function(Ee) {
    F.current[0] = Ee;
  } }, H), Pe = h.createElement("div", { className: he(T + "-pane", "second-pane"), ref: function(Ee) {
    F.current[1] = Ee;
  } }, L), De = P ? [Pe, ke] : [ke, Pe];
  return h.createElement(se, { style: r, className: j, ref: E }, De[0], !S && h.createElement(vp, { className: T + "-trigger", direction: V ? Gf : Dy, icon: p, onMouseDown: ue, onResize: le }, x), De[1]);
}
var a_ = _.forwardRef(WE);
a_.displayName = "ResizeBoxSplit";
var Sd = function() {
  return Sd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Sd.apply(this, arguments);
}, BE = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Oi = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, Yf = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
}, Qf = "horizontal", zy = "vertical";
function UE(e, o) {
  var n, r, a = e.panes, u = e.style, f = e.className, s = e.component, m = s === void 0 ? "div" : s, p = e.direction, g = p === void 0 ? "horizontal" : p, w = e.icon, C = BE(e, ["panes", "style", "className", "component", "direction", "icon"]), O = _.useContext(Ye), b = O.getPrefixCls, S = O.rtl, x = 1 / a.length, B = _.useRef(), I = _.useRef(new Array(a.length).fill({ moving: false, startOffset: 0, startPosition: 0 })), D = _.useRef([]), T = _.useRef(0), R = _.useRef([]), P = Oi(_.useState(new Array(a.length).fill(x)), 2), M = P[0], V = P[1], j = Oi(_.useState(false), 2), z = j[0], H = j[1], L = Oi(_.useState(new Array(a.length).fill(0)), 2), Q = L[0], q = L[1], Z = Oi(_.useState(new Array(Math.max(a.length - 1, 0)).fill({ prev: false, next: false })), 2), A = Z[0], W = Z[1], k = b("resizebox-split-group"), X = g === Qf, U = X && S, E = !X, F = he(k, k + "-" + (X ? Qf : zy), (n = {}, n[k + "-moving"] = z, n), (r = {}, r[k + "-rtl"] = S, r), f), G = m, ae = function() {
    var ce = [];
    a.forEach(function(ge) {
      var Fe = ge.size;
      gn(Fe) ? ce.push(void 0) : ce.push(re(Fe));
    });
    var fe = ce.filter(function(ge) {
      return !ge;
    }), be = 1 - ce.reduce(function(ge, Fe) {
      var Qe = ge || 0, et = Fe || 0;
      return Qe + et;
    }, 0), ze = be / fe.length;
    return ce = ce.map(function(ge) {
      return gn(ge) ? ze : ge;
    }), ce;
  }, ue = function(ce) {
    var fe = Q[ce - 1] || 0, be = Q[ce], ze = M[ce] * 100, ge = "%";
    return "calc(" + ze + ge + " - " + (fe + be) / 2 + "px)";
  };
  function re(ce) {
    var fe, be, ze = X ? (fe = B.current) === null || fe === void 0 ? void 0 : fe.offsetWidth : (be = B.current) === null || be === void 0 ? void 0 : be.offsetHeight;
    if (!ce || Rt(ce) && ce < 0) return 0;
    if (Sa(ce)) {
      var ge = parseFloat(ce);
      return !Number.isFinite(ge) || !Number.isFinite(ze) || ze <= 0 ? 0 : Math.min(ge / ze, 1);
    }
    return Number.isFinite(ce) ? Math.min(ce, 1) : 0;
  }
  var ne = function(ce) {
    var fe = Math.min(ce + 1, a.length - 1), be = M[ce] + M[fe], ze = re(a[ce].min) || 0, ge = re(a[ce].max) || be, Fe = re(a[fe].min) || 0, Qe = re(a[fe].max) || be;
    return ze = Math.max(be - Qe, ze), ge = Math.min(be - Fe, ge), Qe = Math.min(be - ze, Qe), { currentMin: ze, currentMax: ge, nextMin: Fe, nextMax: Qe };
  }, le = function(ce, fe, be) {
    var ze = T.current, ge = ze + 1, Fe = Yf([], Oi(M), false), Qe = U ? -1 : 1, et = M[ze], xe = M[ge], ye = et + xe, we = ne(ze), Me = we.currentMin, Ae = we.currentMax, Le = ce + re((be - fe) * Qe + "px");
    return Le = Math.max(Me, Le), Le = Math.min(Ae, Le), Fe[ze] = Le, Fe[ge] = ye - Le, Fe;
  };
  function ee(ce, fe) {
    var be = ce[0].contentRect, ze = be[E ? "height" : "width"], ge = Yf([], Oi(Q), false);
    ge[fe] = ze, q(ge);
  }
  var se = function(ce) {
    var fe = a[ce].collapsible;
    He(fe) || (fe = fe ? { prev: true, next: true } : {});
    var be = fe.prev, ze = fe.next;
    if (!be && !ze) return {};
    if (!A[ce]) return {};
    var ge = !!be || !be && A[ce].next, Fe = !!ze || !ze && A[ce].prev;
    return { hasPrev: ge, hasNext: Fe };
  };
  function ke(ce, fe) {
    e.onMovingStart && e.onMovingStart(fe), T.current = fe;
    var be = I.current[fe];
    be.moving = true, be.startOffset = M[fe], be.startPosition = X ? ce.pageX : ce.pageY, H(true), Xt(window, "mousemove", Pe), Xt(window, "touchmove", Pe), Xt(window, "mouseup", De), Xt(window, "touchend", De), Xt(window, "contextmenu", De), document.body.style.cursor = E ? "row-resize" : "col-resize";
  }
  function Pe(ce) {
    var fe = T.current, be = I.current[fe], ze = X ? B.current.offsetWidth : B.current.offsetHeight;
    if (be.moving) {
      var ge = le(be.startOffset, be.startPosition, X ? ce.pageX : ce.pageY);
      V(ge), R.current = ge, e.onMoving && e.onMoving(ce, ge.map(function(Fe) {
        return Fe * ze + "px";
      }), fe);
    }
  }
  function De() {
    var ce = T.current;
    I.current[ce].moving = false, H(false), Zt(window, "mousemove", Pe), Zt(window, "touchmove", Pe), Zt(window, "mouseup", De), Zt(window, "touchend", De), Zt(window, "contextmenu", De), document.body.style.cursor = "default", e.onMovingEnd && e.onMovingEnd(ce);
  }
  function Ee(ce, fe, be, ze) {
    var ge = fe + 1, Fe = Yf([], Oi(M), false), Qe = M[fe], et = M[ge], xe = Qe + et, ye = X ? B.current.offsetWidth : B.current.offsetHeight, we = ne(fe), Me = we.currentMin, Ae = we.nextMin, Le = R.current[fe], Oe = R.current[ge], tt = A[fe][be];
    be === "prev" ? (et !== Ae || Oe === Ae) && (Le = Me, Oe = xe - Me, tt = true) : (Qe !== Me || Le === Me) && (Le = xe - Ae, Oe = Ae, tt = true), Fe[fe] = Le, Fe[ge] = Oe, e.onMoving && e.onMoving(ce, Fe.map(function(qe) {
      return qe * ye + "px";
    }), fe), e.onMovingEnd && e.onMovingEnd(fe), V(Fe), Mt(ze) && ze(ce, fe, be, tt);
  }
  return _.useEffect(function() {
    var ce = ae();
    V(ce), R.current = ce;
  }, [JSON.stringify(a.map(function(ce) {
    return ce.size;
  }))]), _.useImperativeHandle(o, function() {
    return B.current;
  }, []), _.useEffect(function() {
    var ce = [];
    M.forEach(function(fe, be) {
      var ze = { prev: false, next: false }, ge = be + 1, Fe = ne(be), Qe = Fe.currentMin, et = Fe.nextMin;
      fe === Qe ? ze.prev = true : M[ge] === et && (ze.next = true), ce.push(ze);
    }), W(ce);
  }, [M]), h.createElement(G, Sd({}, Ot(C, ["onMovingStart", "onPaneResize", "onMoving", "onMovingEnd"]), { style: u, className: F, ref: B }), a.map(function(ce, fe) {
    var be = ce.content, ze = ce.disabled, ge = ce.trigger, Fe = ce.resizable, Qe = Fe === void 0 ? true : Fe, et = ce.collapsible, xe = et === void 0 ? {} : et, ye = se(fe), we = ye.hasPrev, Me = ye.hasNext, Ae = He(xe) && He(xe.prev) ? xe.prev : {}, Le = He(xe) && He(xe.next) ? xe.next : {};
    return h.createElement(h.Fragment, { key: fe }, h.createElement("div", { className: k + "-pane", style: { flexBasis: ue(fe) }, ref: function(Oe) {
      return D.current[fe] = Oe;
    } }, be), !ze && fe !== a.length - 1 && h.createElement(vp, { className: k + "-trigger", direction: E ? Qf : zy, icon: w, onResize: function(Oe) {
      return ee(Oe, fe);
    }, onMouseDown: function(Oe) {
      return ke(Oe, fe);
    }, collapsible: { prev: we ? { onClick: function(Oe) {
      return Ee(Oe, fe, "prev", Ae.onClick);
    }, icon: Ae.icon, collapsed: A[fe].prev } : void 0, next: Me ? { onClick: function(Oe) {
      return Ee(Oe, fe, "next", Le.onClick);
    }, icon: Le.icon, collapsed: A[fe].next } : void 0 }, resizable: Qe, renderChildren: ge }));
  }));
}
var o_ = _.forwardRef(UE);
o_.displayName = "ResizeBoxSplitGroup";
var Er = function() {
  return Er = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Er.apply(this, arguments);
}, KE = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Xf = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, l_ = "left", Pd = "right", Nd = "top", kd = "bottom", qE = [l_, Pd, Nd, kd], GE = { component: "div", directions: ["right"], resizeIcons: {}, resizeTriggers: {} }, YE = function(e) {
  switch (e) {
    case "left":
      return "right";
    case "right":
      return "left";
    default:
      return e;
  }
};
function QE(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = r.rtl, s = Dt(e, GE, u == null ? void 0 : u.ResizeBox), m = s.style, p = s.className, g = s.component, w = s.directions, C = s.resizeIcons, O = s.children, b = s.resizeTriggers, S = s.width, x = s.height, B = KE(s, ["style", "className", "component", "directions", "resizeIcons", "children", "resizeTriggers", "width", "height"]), I = f ? w.map(function(re) {
    return YE(re);
  }) : w, D = a("resizebox"), T = he(D, (n = {}, n[D + "-rtl"] = f, n), p), R = Xf(_.useState({}), 2), P = R[0], M = R[1], V = Xf(Ut(void 0, { value: S }), 2), j = V[0], z = V[1], H = Xf(Ut(void 0, { value: x }), 2), L = H[0], Q = H[1], q = _.useRef({ startX: 0, startY: 0, startWidth: 0, startHeight: 0, direction: Pd, moving: false, padding: { top: 0, bottom: 0, left: 0, right: 0 } }), Z = _.useRef();
  _.useImperativeHandle(o, function() {
    return Z.current;
  }, []);
  function A(re) {
    return [Nd, kd].indexOf(re) > -1;
  }
  function W(re, ne) {
    if (re === 0) return 0;
    var le = re - ne;
    return le <= 0 ? 0 : le;
  }
  function k(re) {
    var ne = "data-arco-origin-cursor";
    if (re) document.body.setAttribute(ne, document.body.style.cursor), document.body.style.cursor = re;
    else {
      var le = document.body.getAttribute(ne);
      document.body.style.cursor = le || "", document.body.removeAttribute(ne);
    }
  }
  function X(re, ne) {
    var le, ee;
    s.onMovingStart && s.onMovingStart(), q.current.moving = true, q.current.startX = ne.pageX, q.current.startY = ne.pageY, q.current.direction = re;
    var se = q.current.padding, ke = se.top, Pe = se.left, De = se.right, Ee = se.bottom;
    q.current.startWidth = W((le = Z.current) === null || le === void 0 ? void 0 : le.clientWidth, Pe + De), q.current.startHeight = W((ee = Z.current) === null || ee === void 0 ? void 0 : ee.clientHeight, ke + Ee), Xt(window, "mousemove", U), Xt(window, "touchmove", U), Xt(window, "mouseup", E), Xt(window, "touchend", E), Xt(window, "contextmenu", E), k(A(re) ? "row-resize" : "col-resize");
  }
  function U(re) {
    if (!q.current.moving) return false;
    var ne = q.current, le = ne.startX, ee = ne.startY, se = ne.startWidth, ke = ne.startHeight, Pe = se, De = ke, Ee = re.pageX - le, ce = re.pageY - ee;
    switch (q.current.direction) {
      case l_:
        Pe = se - Ee, z(Pe);
        break;
      case Pd:
        Pe = se + Ee, z(Pe);
        break;
      case Nd:
        De = ke - ce, Q(De);
        break;
      case kd:
        De = ke + ce, Q(De);
        break;
    }
    s.onMoving && s.onMoving(re, { width: Pe, height: De });
  }
  function E() {
    q.current.moving = false, F(), k(), s.onMovingEnd && s.onMovingEnd();
  }
  function F() {
    Zt(window, "mousemove", U), Zt(window, "touchmove", U), Zt(window, "mouseup", E), Zt(window, "touchend", E), Zt(window, "contextmenu", E);
  }
  function G(re, ne) {
    var le = A(re), ee = ne[0].contentRect, se = "" + re.slice(0, 1).toUpperCase() + re.slice(1), ke = ee[le ? "height" : "width"];
    q.current.padding[re] = ke, M(function(Pe) {
      var De;
      return Er(Er({}, Pe), (De = {}, De["padding" + se] = ke, De));
    });
  }
  var ae = Er(Er(Er(Er({}, P), m || {}), Rt(j) ? { width: j } : {}), Rt(L) ? { height: L } : {}), ue = g;
  return h.createElement(ue, Er({}, Ot(B, ["onMovingStart", "onMoving", "onMovingEnd"]), { style: ae, className: T, ref: Z }), O, I.map(function(re) {
    if (qE.indexOf(re) !== -1) return h.createElement(vp, { key: re, className: D + "-direction-" + re, direction: A(re) ? "horizontal" : "vertical", icon: C[re], onMouseDown: function(ne) {
      X(re, ne);
    }, onResize: function(ne) {
      G(re, ne);
    } }, b[re]);
  }));
}
var XE = _.forwardRef(QE), Vu = XE;
Vu.Split = a_;
Vu.SplitGroup = o_;
Vu.displayName = "ResizeBox";
var xu = function() {
  return xu = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, xu.apply(this, arguments);
}, _P = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"], go = { xs: "(max-width: 575px)", sm: "(min-width: 576px)", md: "(min-width: 768px)", lg: "(min-width: 992px)", xl: "(min-width: 1200px)", xxl: "(min-width: 1600px)", xxxl: "(min-width: 2000px)" }, bi = [], ZE = -1, eu = {}, Ly = { matchHandlers: {}, dispatch: function(e, o) {
  return eu = e, bi.length < 1 ? false : (bi.forEach(function(n) {
    n.func(eu, o);
  }), true);
}, subscribe: function(e) {
  bi.length === 0 && this.register();
  var o = (++ZE).toString();
  return bi.push({ token: o, func: e }), e(eu, null), o;
}, unsubscribe: function(e) {
  bi = bi.filter(function(o) {
    return o.token !== e;
  }), bi.length === 0 && this.unregister();
}, unregister: function() {
  var e = this;
  Object.keys(go).forEach(function(o) {
    var n = go[o], r = e.matchHandlers[n];
    r && r.mql && r.listener && r.mql.removeListener(r.listener);
  });
}, register: function() {
  var e = this;
  Object.keys(go).forEach(function(o) {
    var n = go[o], r = function(u) {
      var f, s = u.matches;
      e.dispatch(xu(xu({}, eu), (f = {}, f[o] = s, f)), o);
    }, a = window.matchMedia(n);
    a.addListener(r), e.matchHandlers[n] = { mql: a, listener: r }, r(a);
  });
} }, Ca = function() {
  return Ca = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Ca.apply(this, arguments);
}, $y = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, u_ = _.createContext({ siderCollapsed: false, collapsedWidth: 64 }), JE = /* @__PURE__ */ (function() {
  var e = 0;
  return function(o) {
    return o === void 0 && (o = ""), e += 1, "" + o + e;
  };
})();
function eS(e, o) {
  var n, r, a = e.children, u = e.className, f = e.style, s = e.theme, m = s === void 0 ? "light" : s, p = e.trigger, g = e.reverseArrow, w = e.collapsedWidth, C = w === void 0 ? 48 : w, O = e.width, b = O === void 0 ? 200 : O, S = e.collapsible, x = e.resizeDirections, B = e.onSiderMount, I = e.onSiderUnmount, D = e.breakpoint, T = e.onBreakpoint, R = e.onCollapse, P = e.resizeBoxProps, M = P === void 0 ? {} : P, V = JE("arco-sider-"), j = _.useContext(Ye).getPrefixCls, z = j("layout-sider"), H = $y(Ut(false, { value: "collapsed" in e ? e.collapsed : void 0, defaultValue: e.defaultCollapsed }), 2), L = H[0], Q = H[1], q = Rt(b) ? b + "px" : String(b), Z = Rt(C) ? "" + C : String(C), A = $y(_.useState(L ? Z : q), 2), W = A[0], k = A[1], X = _.useRef(null), U = _.useRef(null);
  U.current = { breakpoint: D, collapsed: L, onCollapse: R, onBreakpoint: T }, _.useEffect(function() {
    return B && B(V), S && D in go && (X.current = Ly.subscribe(function(ue, re) {
      var ne = U.current, le = ne.breakpoint, ee = ne.collapsed, se = ne.onCollapse, ke = ne.onBreakpoint;
      if (!re || re === le) {
        var Pe = !ue[le];
        Pe !== ee && (Q(Pe), se && se(Pe, "responsive")), ke && ke(Pe);
      }
    })), function() {
      I && I(V), X.current && Ly.unsubscribe(X.current);
    };
  }, []), _.useEffect(function() {
    var ue = Rt(C) ? C + "px" : String(C);
    k(L ? ue : q);
  }, [L, q, C]);
  var E = x && Ft(x) || ((r = M.directions) === null || r === void 0 ? void 0 : r.length), F = E ? Vu : "aside", G = function() {
    var ue, re = p || (L ? g ? h.createElement(Ro, null) : h.createElement(Mo, null) : g ? h.createElement(Mo, null) : h.createElement(Ro, null));
    return S && p !== null ? h.createElement("div", { style: { width: W }, className: he(z + "-trigger", (ue = {}, ue[z + "-trigger-light"] = m === "light", ue)), onClick: function() {
      Q(!L), R && R(!L, "clickTrigger");
    } }, re) : null;
  }, ae = _.useMemo(function() {
    return E ? Ca(Ca({ component: "aside" }, M), { width: W, directions: x, onMoving: function(ue, re) {
      var ne;
      k(re.width + "px"), (ne = M == null ? void 0 : M.onMoving) === null || ne === void 0 || ne.call(M, ue, re);
    } }) : {};
  }, [E, x, W, M]);
  return h.createElement(u_.Provider, { value: { siderCollapsed: L, collapsedWidth: C } }, h.createElement(F, Ca({ ref: o, style: Ca({ width: W }, f), className: he(z, (n = {}, n[z + "-light"] = m === "light", n[z + "-has-trigger"] = p !== null && S, n[z + "-collapsed"] = L, n), u) }, ae), h.createElement("div", { className: z + "-children" }, a), G()));
}
var tS = _.forwardRef(eS), mp = tS;
mp.displayName = "LayoutSider";
mp.__ARCO_SIGN__ = "sider";
var jd = function() {
  return jd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, jd.apply(this, arguments);
}, nS = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function rS(e, o) {
  var n = _.useContext(Ye).getPrefixCls, r = e.className, a = e.children, u = nS(e, ["className", "children"]), f = n("layout-header"), s = he(f, r);
  return h.createElement("header", jd({ ref: o }, u, { className: s }), a);
}
var s_ = _.forwardRef(rS);
s_.displayName = "LayoutHeader";
var Id = function() {
  return Id = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Id.apply(this, arguments);
}, iS = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function aS(e, o) {
  var n = e.className, r = e.children, a = iS(e, ["className", "children"]), u = _.useContext(Ye).getPrefixCls, f = u("layout-footer"), s = he(f, n);
  return h.createElement("footer", Id({ ref: o }, a, { className: s }), r);
}
var c_ = _.forwardRef(aS);
c_.displayName = "LayoutFooter";
var Td = function() {
  return Td = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Td.apply(this, arguments);
}, oS = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function lS(e, o) {
  var n = e.className, r = e.children, a = oS(e, ["className", "children"]), u = _.useContext(Ye).getPrefixCls, f = u("layout-content"), s = he(f, n);
  return h.createElement("main", Td({ ref: o }, a, { className: s }), r);
}
var f_ = _.forwardRef(lS);
f_.displayName = "LayoutContent";
var Md = function() {
  return Md = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Md.apply(this, arguments);
}, uS = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, Ay = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, Vy = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
};
function sS(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = Dt(e, {}, u == null ? void 0 : u.Layout), s = f.className, m = f.hasSider, p = f.children, g = uS(f, ["className", "hasSider", "children"]), w = Ay(_.useState([]), 2), C = w[0], O = w[1], b = a("layout"), S = he(b, (n = {}, n[b + "-has-sider"] = typeof m == "boolean" ? m : C.length > 0, n), s);
  return h.createElement("section", Md({ ref: o }, g, { className: S }), h.Children.map(p, function(x) {
    var B = qn(x, "type.__ARCO_SIGN__") || qn(x, "props.sign");
    return x && B === "sider" ? h.cloneElement(x, { onSiderMount: function(I) {
      return O(Vy(Vy([], Ay(C), false), [I], false));
    }, onSiderUnmount: function(I) {
      return O(C.filter(function(D) {
        return D !== I;
      }));
    } }) : x;
  }));
}
var cS = _.forwardRef(sS), Fo = cS;
Fo.displayName = "Layout";
Fo.Sider = mp;
Fo.Header = s_;
Fo.Footer = c_;
Fo.Content = f_;
function Fy(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Hy(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Fy(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function fS(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = Hy(Hy({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-menu-fold") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M42 11H6M42 24H22M42 37H6M13.66 26.912l-4.82-3.118 4.82-3.118v6.236Z" }));
}
var hp = h.forwardRef(fS);
hp.defaultProps = { isIcon: true };
hp.displayName = "IconMenuFold";
function Wy(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function By(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Wy(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function dS(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = By(By({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-menu-unfold") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M6 11h36M22 24h20M6 37h36M8 20.882 12.819 24 8 27.118v-6.236Z" }));
}
var gp = h.forwardRef(dS);
gp.defaultProps = { isIcon: true };
gp.displayName = "IconMenuUnfold";
var bo = function() {
  return bo = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, bo.apply(this, arguments);
}, pS = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, tu = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, vS = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
}, mS = "light", hS = { mode: "vertical", selectable: true, ellipsis: true };
function gS(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = r.rtl, s = Dt(e, hS, u == null ? void 0 : u.Menu), m = s.style, p = s.children, g = s.className, w = s.prefixCls, C = s.mode, O = s.theme, b = s.icons, S = s.levelIndent, x = s.collapse, B = s.inDropdown, I = s.selectable, D = s.triggerProps, T = s.tooltipProps, R = s.ellipsis, P = s.accordion, M = s.autoOpen, V = s.autoScrollIntoView, j = s.scrollConfig, z = s.hasCollapseButton, H = s.defaultOpenKeys, L = s.defaultSelectedKeys, Q = s.openKeys, q = s.selectedKeys, Z = s.onClickSubMenu, A = s.onClickMenuItem, W = s.onCollapseChange, k = s.onEllipsisChange, X = pS(s, ["style", "children", "className", "prefixCls", "mode", "theme", "icons", "levelIndent", "collapse", "inDropdown", "selectable", "triggerProps", "tooltipProps", "ellipsis", "accordion", "autoOpen", "autoScrollIntoView", "scrollConfig", "hasCollapseButton", "defaultOpenKeys", "defaultSelectedKeys", "openKeys", "selectedKeys", "onClickSubMenu", "onClickMenuItem", "onCollapseChange", "onEllipsisChange"]), U = tu(Ut([], { defaultValue: H, value: Q }), 2), E = U[0], F = U[1], G = tu(Ut([], { defaultValue: L, value: q }), 2), ae = G[0], ue = G[1], re = tu(Ut(false, { value: x }), 2), ne = re[0], le = re[1], ee = _.useContext(Ir), se = _.useContext(u_).siderCollapsed, ke = w || a("menu"), Pe = se || ne || B || C === "popButton", De = O || ee.theme || mS, Ee = _.useRef([]), ce = _.useRef([]), fe = ip(), be = ku(), ze = _.useMemo(function() {
    return r_(p);
  }, [p]), ge = Ru(ke + "-"), Fe = X.id || ge;
  _.useEffect(function() {
    var ye = E.filter(function(Me) {
      return Ee.current.indexOf(Me) !== -1;
    });
    if (M) {
      var we = Ee.current.filter(function(Me) {
        return ce.current.indexOf(Me) === -1;
      });
      ye = E.concat(we);
    }
    F(P ? ye.slice(0, 1) : ye), ce.current = Ee.current.slice();
  }, [Ee.current.toString()]);
  var Qe = C !== "horizontal" && C !== "popButton" && !B && z, et = function() {
    var ye = $u(p, { level: 1 }), we = ne ? b && b.collapseActive || h.createElement(gp, null) : b && b.collapseDefault || h.createElement(hp, null), Me = function() {
      var Ae = !ne;
      le(Ae), W && W(Ae);
    };
    return h.createElement(h.Fragment, null, h.createElement("div", { className: ke + "-inner" }, C === "horizontal" && R !== false ? h.createElement(DE, { ellipsisText: He(R) ? R.text : "···", onEllipsisChange: k }, ye) : ye), Qe && h.createElement("div", bo({ tabIndex: 0, role: "button", "aria-controls": Fe, "aria-expanded": !ne, className: ke + "-collapse-button", onClick: Me }, be({ onPressEnter: Me })), we));
  }, xe = bo({}, m);
  return Pe && !B && delete xe.width, h.createElement("div", bo({ id: Qe ? Fe : void 0, role: "menu" }, Ot(X, ["isMenu"]), { ref: o, style: xe, className: he(ke, ke + "-" + De, ke + "-" + (C === "horizontal" ? "horizontal" : "vertical"), (n = {}, n[ke + "-collapse"] = Pe, n[ke + "-pop"] = C === "pop" || Pe, n[ke + "-pop-button"] = C === "popButton", n[ke + "-rtl"] = f, n), g) }), h.createElement(Ir.Provider, { value: { mode: C, theme: De, collapse: Pe, levelIndent: S, inDropdown: B, selectedKeys: ae, openKeys: E, icons: b, triggerProps: D, tooltipProps: T, autoScrollIntoView: V, scrollConfig: j, id: Fe, prefixCls: ke, collectInlineMenuKeys: function(ye, we) {
    we ? Ee.current = Ee.current.filter(function(Me) {
      return Me !== ye;
    }) : Ee.current.push(ye), fe();
  }, onClickMenuItem: function(ye, we) {
    var Me;
    I && ue([ye]), A && A(ye, we, (Me = ze[ye]) === null || Me === void 0 ? void 0 : Me.keyPath);
  }, onClickSubMenu: function(ye, we, Me) {
    var Ae, Le = vS([], tu(E), false);
    Me === "inline" && ((E == null ? void 0 : E.indexOf(ye)) > -1 ? P && we === 1 ? Le = [] : Le = E.filter(function(Oe) {
      return Oe !== ye;
    }) : P && we === 1 ? Le = [ye] : Le = E.concat([ye])), F(Le), Z && Z(ye, Le, (Ae = ze[ye]) === null || Ae === void 0 ? void 0 : Ae.keyPath);
  } } }, et()));
}
var yS = _.forwardRef(gS), pr = yS;
pr.displayName = "Menu";
pr.Item = up;
pr.SubMenu = Au;
pr.ItemGroup = sp;
pr.__ARCO_MENU__ = true;
function Uy(e, o) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ky(e) {
  for (var o = 1; o < arguments.length; o++) {
    var n = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Uy(Object(n), true).forEach(function(r) {
      kt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uy(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _S(e, o) {
  var n = _.useContext(wt), r = n.prefixCls, a = r === void 0 ? "arco" : r, u = e.spin, f = e.className, s = Ky(Ky({ "aria-hidden": true, focusable: false, ref: o }, e), {}, { className: "".concat(f ? f + " " : "").concat(a, "-icon ").concat(a, "-icon-oblique-line") });
  return u && (s.className = "".concat(s.className, " ").concat(a, "-icon-loading")), delete s.spin, delete s.isIcon, h.createElement("svg", ht({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, s), h.createElement("path", { d: "M29.506 6.502 18.493 41.498" }));
}
var yp = h.forwardRef(_S);
yp.defaultProps = { isIcon: true };
yp.displayName = "IconObliqueLine";
var Rd = function() {
  return Rd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Rd.apply(this, arguments);
}, wS = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, CS = function(e, o, n) {
  return o.indexOf(e) === o.length - 1 ? h.createElement("span", null, e.breadcrumbName) : h.createElement("a", { href: "#/" + n.join("/").replace(/^\//, "") }, e.breadcrumbName);
}, xS = { separator: h.createElement(yp, null) };
function OS(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = r.rtl, s = Dt(e, xS, u == null ? void 0 : u.Breadcrumb), m = s.className, p = s.children, g = s.style, w = s.routes, C = s.maxCount, O = s.separator, b = wS(s, ["className", "children", "style", "routes", "maxCount", "separator"]), S = a("breadcrumb"), x = "itemRender" in s ? s.itemRender : CS, B = h.createElement("span", { "aria-label": "ellipses of breadcrumb items", className: S + "-item-ellipses" }, "..."), I = h.createElement("span", { "aria-hidden": true, className: S + "-item-separator" }, O), D = function(P, M, V) {
    var j = h.cloneElement(I, { key: V + "_separator" });
    return M > 0 ? V === 0 ? [P, j, B] : V > M ? [j, P] : null : V === 0 ? [P] : [j, P];
  }, T = function() {
    var P = [], M = w.length - C;
    return w.map(function(V, j) {
      P.push((V.path || "").replace(/^\//, ""));
      var z = V.children ? h.createElement(pr, null, V.children.map(function(H) {
        return h.createElement(pr.Item, { key: H.path || H.breadcrumbName }, x(H, w, P));
      })) : null;
      return D(h.createElement(lp, { prefixCls: S, key: V.path || V.breadcrumbName, droplist: z }, x(V, w, P)), M, j);
    });
  }, R = function() {
    var P = [];
    h.Children.forEach(p, function(V) {
      Po(V) || P.push(V);
    });
    var M = P.length - C;
    return h.Children.map(P, function(V, j) {
      return D(h.cloneElement(V, { prefixCls: S }), M, j);
    });
  };
  return h.createElement("div", Rd({ role: "list", ref: o, style: g, className: he(S, (n = {}, n[S + "-rtl"] = f, n), m) }, Ot(b, ["itemRender"])), w && w.length ? T() : R());
}
var bS = _.forwardRef(OS), ji = bS;
ji.displayName = "Breadcrumb";
ji.Item = lp;
var Dd = function() {
  return Dd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Dd.apply(this, arguments);
}, ES = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, SS = { type: "radio" }, PS = { type: "radio", mode: "outline", direction: "horizontal" }, _p = _.createContext(SS);
function d_(e) {
  var o, n = _.useContext(Ye), r = n.getPrefixCls, a = n.size, u = n.componentConfig, f = n.rtl, s = Dt(e, PS, u == null ? void 0 : u["Radio.Group"]), m = s.style, p = s.className, g = s.name, w = s.children, C = s.direction, O = s.type, b = s.mode, S = s.options, x = s.disabled, B = ES(Ut(void 0, { defaultValue: s.defaultValue, value: s.value }), 2), I = B[0], D = B[1], T = s.size || a, R = r("radio"), P = he(R + "-group", (o = {}, o[R + "-group-type-button"] = O !== "radio", o[R + "-size-" + T] = !!T, o[R + "-mode-" + b] = !!b, o[R + "-group-disabled"] = x, o[R + "-group-direction-vertical"] = C === "vertical", o[R + "-group-rtl"] = f, o), p), M = function(j, z) {
    var H = s.onChange;
    j !== I && ("value" in s || D(j), H && H(j, z));
  }, V = { onChangeValue: M, type: O, value: I, disabled: x, group: true, name: g };
  return h.createElement(_p.Provider, { value: V }, h.createElement("div", Dd({ className: P, role: "radiogroup", style: m }, h0(s), zi(s)), S && Ft(S) ? S.map(function(j, z) {
    return He(j) ? h.createElement(Pr, { key: j.value, disabled: x || j.disabled, value: j.value }, j.label) : h.createElement(Pr, { key: z, value: j, disabled: x }, j);
  }) : w));
}
d_.displayName = "RadioGroup";
var Eo = function() {
  return Eo = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, Eo.apply(this, arguments);
}, NS = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, kS = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function Pr(e) {
  var o, n = _.useRef(null), r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = r.rtl, s = Dt(e, {}, u == null ? void 0 : u.Radio), m = _.useContext(_p), p = a("radio"), g = Eo({}, s);
  m.group && (g.checked = m.value === s.value, g.disabled = "disabled" in s ? s.disabled : m.disabled);
  var w = g.disabled, C = g.children, O = g.value, b = g.style, S = g.className, x = NS(g, ["disabled", "children", "value", "style", "className"]), B = kS(Ut(false, { value: g.checked, defaultValue: g.defaultChecked }), 2), I = B[0], D = B[1], T = he("" + p + (m.type === "button" ? "-button" : ""), (o = {}, o[p + "-checked"] = I, o[p + "-disabled"] = w, o[p + "-rtl"] = f, o), S), R = function(M) {
    var V = g.onChange, j = g.value;
    w || (m.group ? m.onChangeValue && m.onChangeValue(j, M) : !("checked" in s) && !I && D(true), !I && V && V(true, M));
  }, P = h.useCallback(function(M) {
    Mt(s.children) && (M.preventDefault(), n.current && n.current.click()), x.onClick && x.onClick(M);
  }, [s.children, x.onClick]);
  return h.createElement("label", Eo({}, Ot(x, ["checked", "onChange"]), { onClick: P, style: b, className: T }), h.createElement("input", Eo({ ref: n, disabled: w, value: O || "", type: "radio" }, m.name ? { name: m.name } : {}, { checked: I, onChange: function(M) {
    M.persist(), R(M);
  }, onClick: function(M) {
    M.stopPropagation();
  } })), Mt(C) ? C({ checked: I, disabled: w }) : m.type === "radio" ? h.createElement(h.Fragment, null, h.createElement(kr, { prefix: p, className: p + "-mask-wrapper", disabled: I || w }, h.createElement("div", { className: p + "-mask" })), !Xy(C) && h.createElement("span", { className: p + "-text" }, C)) : m.type === "button" && h.createElement("span", { className: p + "-button-inner" }, C));
}
Pr.__BYTE_RADIO = true;
Pr.displayName = "Radio";
Pr.Group = d_;
Pr.GroupContext = _p;
var jS = p0();
const IS = Di(jS);
var TS = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}, MS = function(e, o, n) {
  if (n || arguments.length === 2) for (var r = 0, a = o.length, u; r < a; r++) (u || !(r in o)) && (u || (u = Array.prototype.slice.call(o, 0, r)), u[r] = o[r]);
  return e.concat(u || Array.prototype.slice.call(o));
};
function RS(e) {
  var o = _.useContext(Ye).getPrefixCls, n = o("spin") + "-dot", r = { width: e.size, height: e.size }, a = e.size ? parseInt(String(e.size)) : 0;
  return h.createElement("div", { className: n + "-list", style: { height: e.size, width: Rt(a) && a > 0 ? a * 7 : "" } }, MS([], TS(new Array(5)), false).map(function(u, f) {
    return h.createElement("div", { key: f, className: n, style: r });
  }));
}
var zd = function() {
  return zd = Object.assign || function(e) {
    for (var o, n = 1, r = arguments.length; n < r; n++) {
      o = arguments[n];
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }
    return e;
  }, zd.apply(this, arguments);
}, DS = function(e, o) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && o.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) o.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}, zS = function(e, o) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), a, u = [], f;
  try {
    for (; (o === void 0 || o-- > 0) && !(a = r.next()).done; ) u.push(a.value);
  } catch (s) {
    f = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
};
function LS(e, o) {
  var n, r = _.useContext(Ye), a = r.getPrefixCls, u = r.componentConfig, f = Dt(e, {}, u == null ? void 0 : u.Spin), s = f.style, m = f.className, p = f.children, g = f.loading, w = f.size, C = f.icon, O = f.element, b = f.tip, S = f.dot, x = f.delay, B = f.block, I = B === void 0 ? false : B, D = DS(f, ["style", "className", "children", "loading", "size", "icon", "element", "tip", "dot", "delay", "block"]), T = zS(_.useState(x ? false : g), 2), R = T[0], P = T[1], M = _.useCallback(IS(P, x), [x]), V = x ? R : g, j = a("spin");
  _.useEffect(function() {
    return x && M(g), function() {
      M && M.cancel();
    };
  }, [g]);
  var z = h.createElement("span", { className: j + "-icon" }, C ? h.cloneElement(C, { className: he(j.replace("-spin", "-icon") + "-loading"), style: { fontSize: w } }) : O || (S ? h.createElement(RS, { size: w }) : h.createElement(ui, { style: { fontSize: w } })));
  return h.createElement("div", zd({ ref: o, className: he(j, (n = {}, n[j + "-block"] = I, n[j + "-loading"] = V, n[j + "-with-tip"] = b && !p, n), m), style: s }, D), Po(p) ? h.createElement(h.Fragment, null, z, b ? h.createElement("div", { className: j + "-tip" }, b) : null) : h.createElement(h.Fragment, null, h.createElement("div", { className: j + "-children" }, p), V && h.createElement("div", { className: j + "-loading-layer", style: { fontSize: w } }, h.createElement("span", { className: j + "-loading-layer-inner" }, z, b ? h.createElement("div", { className: j + "-tip" }, b) : null))));
}
var ii = h.forwardRef(LS);
ii.displayName = "Spin";
const $S = "modulepreload", AS = function(e) {
  return new URL("../" + e, import.meta.url).href;
}, qy = {}, Li = function(o, n, r) {
  let a = Promise.resolve();
  if (n && n.length > 0) {
    let f = function(p) {
      return Promise.all(p.map((g) => Promise.resolve(g).then((w) => ({ status: "fulfilled", value: w }), (w) => ({ status: "rejected", reason: w }))));
    };
    document.getElementsByTagName("link");
    const s = document.querySelector("meta[property=csp-nonce]"), m = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
    a = f(n.map((p) => {
      if (p = AS(p), p in qy) return;
      qy[p] = true;
      const g = p.endsWith(".css"), w = g ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${p}"]${w}`)) return;
      const C = document.createElement("link");
      if (C.rel = g ? "stylesheet" : $S, g || (C.as = "script"), C.crossOrigin = "", C.href = p, m && C.setAttribute("nonce", m), document.head.appendChild(C), g) return new Promise((O, b) => {
        C.addEventListener("load", O), C.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${p}`)));
      });
    }));
  }
  function u(f) {
    const s = new Event("vite:preloadError", { cancelable: true });
    if (s.payload = f, window.dispatchEvent(s), !s.defaultPrevented) throw f;
  }
  return a.then((f) => {
    for (const s of f || []) s.status === "rejected" && u(s.reason);
    return o().catch(u);
  });
}, Ld = [{ id: "strategy", label: "战略咨询报告", icon: "part-1-imgGroup2365.svg" }, { id: "industry", label: "产业研究报告", icon: "part-1-imgGroup2366.svg" }, { id: "technology", label: "技术研判报告", icon: "part-1-imgGroup2367.svg" }, { id: "enterprise", label: "企业诊断报告", icon: "part-1-img3.svg" }], VS = "例如：分析深圳低空经济产业链现状，识别未来三年值得重点布局的技术方向，并给出招商与企业培育建议。", ou = [{ id: "direction", title: "赛道选择与产业布局", description: "比较候选方向", preview: "business", prompt: "分析深圳低空经济产业链现状，识别未来三年值得重点布局的技术方向，并给出招商与企业培育建议。" }, { id: "chain", title: "产业链补链强链", description: "识别关键环节", preview: "chain", prompt: "梳理深圳低空经济产业链的关键环节，分析产业链短板与发展机会，提出补链强链的重点方向。" }, { id: "trend", title: "技术趋势与创新研判", description: "研判技术演进", preview: "technology", prompt: "研判低空经济关键技术的发展趋势，比较主要技术路线，识别未来三年的创新机会与应用场景。" }, { id: "policy", title: "政策研究与决策建议", description: "梳理政策与影响", preview: "business", prompt: "梳理低空经济领域的主要政策，分析政策对产业发展的影响，并提出可执行的决策建议。" }, { id: "market", title: "产业现状与发展机会", description: "分析产业与市场", preview: "chain", prompt: "分析深圳低空经济产业的发展现状、主要参与者与应用场景，识别产业发展的机会和约束。" }, { id: "company", title: "企业能力与发展诊断", description: "识别优势与短板", preview: "technology", prompt: "围绕企业的技术能力、产品布局与市场表现，梳理核心优势和能力短板，提出发展建议。" }], $d = [{ id: "business-clean", title: "简洁商务", description: "清晰层级 · 稳健表达", preview: "business" }, { id: "research-brief", title: "研究简报", description: "重点结论 · 紧凑排版", preview: "chain" }, { id: "blue-technology", title: "蓝色科技", description: "蓝色强调 · 图表导向", preview: "technology" }], FS = ["首页", "科学研究", "未来教育", "科技评价", "战略咨询", "应用管理", "集群服务"], HS = ["报告创作", "案例广场", "我的素材库", "我的报告任务"];
function Gy() {
  const e = window.location.hash.split("?")[0];
  return e === "#/hotspot-qa" ? "hotspot-qa" : e.startsWith("#/materials/") ? "material-detail" : e === "#/materials" ? "materials" : e === "#/tasks" ? "tasks" : e.startsWith("#/cases/") ? "case-detail" : e === "#/cases" ? "cases" : "creation";
}
function Sn(e) {
  window.location.hash = e === "case-detail" ? "/cases" : e === "material-detail" ? "/materials" : `/${e}`, window.scrollTo({ top: 0 });
}
function wP(e) {
  window.location.hash = `/cases/${encodeURIComponent(e)}`, window.scrollTo({ top: 0 });
}
function CP(e) {
  window.location.hash = `/materials/${encodeURIComponent(e)}`, window.scrollTo({ top: 0 });
}
function xP() {
  const e = window.location.hash.split("?")[0].match(/^#\/cases\/([^/]+)$/);
  return e ? decodeURIComponent(e[1]) : "";
}
function WS() {
  const e = window.location.hash.split("?")[0].match(/^#\/materials\/([^/]+)$/);
  return e ? decodeURIComponent(e[1]) : "";
}
const Zf = [{ id: "quality-20261014", title: "质量报告已更新", checkName: "主键非空校验", createdAt: "2026-10-14T03:36:00+08:00", read: false }, { id: "quality-20261013", title: "质量报告已更新", checkName: "外键引用一致性校验", createdAt: "2026-10-13T03:42:00+08:00", read: false }, { id: "quality-20261012", title: "质量报告已更新", checkName: "字段命名规范校验", createdAt: "2026-10-12T03:38:00+08:00", read: true }, { id: "quality-20261011", title: "质量报告已更新", checkName: "枚举值合法性校验", createdAt: "2026-10-11T03:40:00+08:00", read: true }, { id: "quality-20261010", title: "质量报告已更新", checkName: "主键非空校验", createdAt: "2026-10-10T03:35:00+08:00", read: true }, { id: "quality-20261009", title: "质量报告已更新", checkName: "外键引用一致性校验", createdAt: "2026-10-09T03:41:00+08:00", read: true }];
function OP(e) {
  return `监测到数据中【${e.checkName}】发生变化。`;
}
const p_ = "thinktank:system-messages:read-state:v1";
function v_() {
  return new URLSearchParams(window.location.search).get("qa") === "1" ? sessionStorage : localStorage;
}
function BS() {
  try {
    const e = JSON.parse(v_().getItem(p_) || "null");
    if (!e || typeof e != "object" || Array.isArray(e)) return Zf;
    const o = e;
    return Zf.map((n) => ({ ...n, read: typeof o[n.id] == "boolean" ? o[n.id] : n.read }));
  } catch {
    return Zf;
  }
}
function US() {
  const [e, o] = _.useState(BS), [n, r] = _.useState(false);
  _.useEffect(() => {
    try {
      v_().setItem(p_, JSON.stringify(Object.fromEntries(e.map((f) => [f.id, f.read])))), r(false);
    } catch {
      r(true);
    }
  }, [e]);
  function a(f, s) {
    o((m) => m.map((p) => p.id === f ? { ...p, read: s } : p));
  }
  function u() {
    o((f) => f.map((s) => ({ ...s, read: true })));
  }
  return { messages: e, unreadCount: e.filter((f) => !f.read).length, setRead: a, markAllRead: u, storageWarning: n };
}
const KS = _.lazy(() => Li(() => import("./SystemMessagesDrawer-BthSsct7.js"), __vite__mapDeps([0, 1, 2, 3])));
function dr({ name: e, size: o = 16, className: n = "" }) {
  return Y.jsx("img", { className: `asset-icon ${n}`, src: `./figma/${e}`, width: o, height: o, alt: "", "aria-hidden": "true" });
}
function Jf() {
  return Y.jsx("svg", { className: "asset-icon case-detail-back-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: Y.jsx("path", { d: "M10 3 5 8l5 5", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function ed(e) {
  oi.info(`${e}页面将在后续补充，当前可预览报告创作、案例广场与我的报告任务。`);
}
function qS({ page: e, materialDetailName: o, messagesOpen: n, unreadCount: r, onOpenMessages: a }) {
  const u = e === "case-detail", f = e === "material-detail", s = e === "hotspot-qa";
  return Y.jsxs("div", { className: "system-page-header", children: [Y.jsxs("div", { className: "system-page-heading", children: [u && Y.jsxs(mt, { type: "text", className: "case-detail-back", onClick: () => Sn("cases"), children: [Y.jsx(Jf, {}), "返回"] }), f && Y.jsxs(mt, { type: "text", className: "case-detail-back", onClick: () => Sn("materials"), children: [Y.jsx(Jf, {}), "返回"] }), s && Y.jsxs(mt, { type: "text", className: "case-detail-back hotspot-detail-back", onClick: () => window.dispatchEvent(new Event("hotspot:return-home")), children: [Y.jsx(Jf, {}), "返回"] }), Y.jsxs(ji, { className: "system-breadcrumb", children: [!f && e !== "hotspot-qa" && Y.jsx(ji.Item, { children: Y.jsx(mt, { type: "text", onClick: () => Sn("creation"), children: "智能报告创作" }) }), u && Y.jsx(ji.Item, { children: Y.jsx(mt, { type: "text", onClick: () => Sn("cases"), children: "案例广场" }) }), f && Y.jsx(ji.Item, { children: Y.jsx(mt, { type: "text", onClick: () => Sn("materials"), children: "我的素材库" }) }), Y.jsx(ji.Item, { children: e === "hotspot-qa" ? "技术热点问数" : e === "tasks" ? "我的报告任务" : e === "materials" ? "我的素材库" : f ? o ?? "知识库详情" : e === "cases" ? "案例广场" : u ? "详情" : "报告创作" })] })] }), !f && Y.jsxs(mt, { type: "text", className: "system-message-button", "aria-label": "查看报告创作系统消息", "aria-expanded": n, "aria-controls": "subsystem-message-drawer", onClick: a, children: [Y.jsx(J0, { count: r, className: "system-message-badge", children: Y.jsx(dr, { name: "part-2-imgGroup.svg", size: 16 }) }), Y.jsx("span", { children: "消息" })] })] });
}
function GS({ children: e, page: o, materialDetailName: n }) {
  const [r, a] = _.useState(true), [u, f] = _.useState(null), [s, m] = _.useState(false), [p, g] = _.useState(false), { messages: w, unreadCount: C, setRead: O, markAllRead: b, storageWarning: S } = US();
  return Y.jsxs("div", { className: "app-shell", children: [Y.jsxs("div", { className: "ambient-background", "aria-hidden": "true", children: [Y.jsx("img", { className: "ambient-left", src: "./figma/part-4-imgGroup2360.svg", alt: "" }), Y.jsx("img", { className: "ambient-right", src: "./figma/part-4-imgGroup2361.svg", alt: "" })] }), Y.jsxs("header", { className: "topbar", "data-node-id": "1834:22726", children: [Y.jsxs("a", { href: "#/creation", className: "brand", "aria-label": "深圳国际科技信息中心 · 报告创作首页", children: [Y.jsx("img", { src: "./figma/part-2-imgImage1.png", width: "28", height: "28", alt: "深圳国际科技信息中心标识" }), Y.jsx("span", { children: "深圳国际科技信息中心" })] }), Y.jsx("nav", { className: "top-navigation", "aria-label": "业务导航", children: FS.map((x) => Y.jsx(mt, { type: "text", className: `top-nav-item ${x === "战略咨询" ? "is-active" : ""}`, "aria-current": x === "战略咨询" ? "page" : void 0, onClick: () => x === "战略咨询" ? Sn("creation") : ed(x), children: x }, x)) }), Y.jsxs("div", { className: "topbar-actions", children: [[["工作台", "part-2-imgGroup2362.svg"], ["待办中心", "part-2-img.svg"], ["消息中心", "part-2-imgGroup.svg"]].map(([x, B]) => Y.jsx(Mi, { content: `${x} · 后续补充`, children: Y.jsxs(mt, { type: "text", className: "utility-button", "aria-label": x, onClick: () => ed(x), children: [Y.jsx(dr, { name: B, size: 20, className: x === "消息中心" ? "notification-icon" : "" }), Y.jsx("span", { children: x })] }) }, x)), Y.jsx(Na, { position: "br", trigger: "click", content: Y.jsxs("div", { className: "profile-note", children: [Y.jsx("strong", { children: "李科" }), Y.jsx("p", { children: "当前为本地子系统预览" })] }), children: Y.jsxs(mt, { type: "text", className: "profile-button", "aria-label": "查看用户信息", children: [Y.jsx(Z0, { size: 32, className: "user-avatar", children: "李" }), Y.jsx("span", { children: "李科" }), Y.jsx(dr, { name: "part-2-imgDirectionCaretDown.svg", size: 12 })] }) })] })] }), Y.jsxs("div", { className: "workspace", children: [Y.jsxs("aside", { className: "sidebar", "aria-label": "智能报告创作导航", "data-node-id": "1831:8140", children: [Y.jsxs(mt, { type: "text", className: "sidebar-section", "data-node-id": "1831:8147", onClick: () => a(!r), "aria-expanded": r, "aria-controls": "report-menu", children: [Y.jsx("span", { className: "sidebar-section-label", "data-node-id": "1831:8156", children: "智能报告创作" }), Y.jsx(dr, { name: "part-3-img.svg", className: r ? "section-chevron-open" : "" })] }), r && Y.jsx(pr, { id: "report-menu", selectedKeys: o === "hotspot-qa" ? [] : [o === "tasks" ? "我的报告任务" : o === "materials" || o === "material-detail" ? "我的素材库" : o === "cases" || o === "case-detail" ? "案例广场" : "报告创作"], className: "sidebar-menu", onClickMenuItem: (x) => x === "报告创作" ? Sn("creation") : x === "案例广场" ? Sn("cases") : x === "我的素材库" ? Sn("materials") : x === "我的报告任务" ? Sn("tasks") : ed(x), children: HS.map((x) => Y.jsx(pr.Item, { children: x }, x)) }), Y.jsx(mt, { type: "text", className: `sidebar-section hotspot-section-button ${o === "hotspot-qa" ? "is-active" : ""}`, "aria-current": o === "hotspot-qa" ? "page" : void 0, onClick: () => Sn("hotspot-qa"), children: Y.jsx("span", { className: "sidebar-section-label", children: "技术热点问数" }) }), Y.jsxs("nav", { className: "hotspot-mobile-primary-nav", "aria-label": "战略咨询移动端主导航", children: [Y.jsx("button", { type: "button", onClick: () => Sn("creation"), children: "智能报告创作" }), Y.jsx("button", { type: "button", className: "is-active", "aria-current": "page", onClick: () => Sn("hotspot-qa"), children: "技术热点问数" })] })] }), Y.jsxs("main", { ref: f, id: "main-content", className: `main-panel ${o === "hotspot-qa" ? "is-hotspot-panel" : ""} ${o === "tasks" ? "is-task-panel" : ""} ${o === "materials" || o === "material-detail" ? "is-materials-panel" : ""} ${o === "cases" ? "is-cases-panel" : ""} ${o === "case-detail" ? "is-case-detail-panel" : ""} ${s ? "has-system-messages" : ""}`, "data-node-id": o === "hotspot-qa" ? "1183:26292" : o === "tasks" ? "1831:14850" : o === "cases" ? "1831:16389" : o === "case-detail" ? "1831:17903" : o === "material-detail" ? "2157:14869" : "1831:6682", children: [Y.jsx(qS, { page: o, materialDetailName: n, messagesOpen: s, unreadCount: C, onOpenMessages: () => {
    g(true), m(true);
  } }), Y.jsxs("div", { className: `content-surface ${o === "hotspot-qa" ? "hotspot-surface" : ""} ${o === "tasks" ? "tasks-surface" : ""} ${o === "materials" ? "materials-surface" : ""} ${o === "material-detail" ? "material-detail-surface" : ""} ${o === "cases" ? "cases-surface" : ""} ${o === "case-detail" ? "case-detail-surface" : ""}`, "data-node-id": o === "hotspot-qa" ? "1183:26293" : o === "cases" ? "1831:16389" : o === "case-detail" ? "1831:17918" : o === "material-detail" ? "2157:14900" : o === "tasks" ? void 0 : "1831:6686", children: [o === "creation" && Y.jsxs(Y.Fragment, { children: [Y.jsx("div", { className: "hero-dots", "aria-hidden": "true" }), Y.jsx("img", { className: "hero-glow", src: "./figma/hero-glow.svg", alt: "", "aria-hidden": "true" })] }), e] }), p && u && Y.jsx(_.Suspense, { fallback: s ? Y.jsx("div", { className: "subsystem-message-loading", children: Y.jsx(ii, { tip: "正在加载系统消息…" }) }) : null, children: Y.jsx(KS, { container: u, visible: s, messages: w, onClose: () => m(false), onSetRead: O, onMarkAllRead: b, storageWarning: S }) })] })] })] });
}
const m_ = "thinktank:creation-home:draft:v1";
function h_() {
  return new URLSearchParams(window.location.search).get("qa") === "1" ? sessionStorage : localStorage;
}
const ri = { prompt: "", reportType: "strategy", templateId: "direction", styleId: "business-clean", links: [], region: "深圳", period: "未来三年", purpose: "招商与企业培育建议" };
function YS() {
  try {
    const e = JSON.parse(h_().getItem(m_) || "null");
    if (!e || typeof e != "object") return ri;
    const o = e;
    return { prompt: typeof o.prompt == "string" ? o.prompt : "", reportType: Ld.some((n) => n.id === o.reportType) ? o.reportType : ri.reportType, templateId: ou.some((n) => n.id === o.templateId) ? o.templateId : ri.templateId, styleId: $d.some((n) => n.id === o.styleId) ? o.styleId : ri.styleId, links: Array.isArray(o.links) ? o.links.filter((n) => {
      if (typeof n != "string") return false;
      try {
        return ["http:", "https:"].includes(new URL(n).protocol);
      } catch {
        return false;
      }
    }) : [], region: typeof o.region == "string" ? o.region : ri.region, period: typeof o.period == "string" ? o.period : ri.period, purpose: typeof o.purpose == "string" ? o.purpose : ri.purpose };
  } catch {
    return ri;
  }
}
function QS({ kind: e }) {
  return Y.jsxs("span", { className: `document-preview preview-${e}`, "aria-hidden": "true", children: [Y.jsx("span", { className: "preview-title" }), Y.jsx("span", { className: "preview-rule" }), Y.jsx("span", { className: "preview-line" }), Y.jsx("span", { className: "preview-line shorter" }), Y.jsxs("span", { className: "preview-blocks", children: [Y.jsx("i", {}), Y.jsx("i", {}), Y.jsx("i", {})] }), Y.jsx("span", { className: "preview-line" }), Y.jsx("span", { className: "preview-line shorter" })] });
}
function XS() {
  const [e, o] = _.useState(YS), [n, r] = _.useState("business"), [a, u] = _.useState(true), [f, s] = _.useState(false), [m, p] = _.useState(""), [g, w] = _.useState(""), [C, O] = _.useState(false), [b, S] = _.useState("editing"), [x, B] = _.useState(false), I = _.useRef(null), D = _.useRef(null);
  _.useEffect(() => {
    try {
      h_().setItem(m_, JSON.stringify(e)), B(false);
    } catch {
      B(true);
    }
  }, [e]);
  function T(L) {
    o((Q) => ({ ...Q, ...L })), S("editing");
  }
  function R() {
    let L;
    try {
      L = new URL(m.trim());
    } catch {
      w("请输入完整的 http:// 或 https:// 链接。");
      return;
    }
    if (!["http:", "https:"].includes(L.protocol)) {
      w("素材链接仅支持 http:// 或 https://。");
      return;
    }
    if (e.links.includes(L.href)) {
      w("这个链接已经添加。");
      return;
    }
    T({ links: [...e.links, L.href] }), p(""), w(""), O(false), oi.success("素材链接已加入需求。");
  }
  function P() {
    var L;
    if (!e.prompt.trim()) {
      (L = D.current) == null || L.focus();
      return;
    }
    S("review"), requestAnimationFrame(() => {
      var Q, q;
      (Q = I.current) == null || Q.scrollIntoView({ behavior: "smooth", block: "nearest" }), (q = I.current) == null || q.focus({ preventScroll: true });
    });
  }
  const M = Ld.find((L) => L.id === e.reportType), V = ou.find((L) => L.id === e.templateId), j = $d.find((L) => L.id === e.styleId), z = n === "business" ? ou : $d, H = f ? z : z.slice(0, 3);
  return Y.jsx(Y.Fragment, { children: Y.jsxs("div", { className: "creation-home", "data-node-id": "1831:8070", children: [Y.jsxs("section", { className: "creation-heading", "aria-labelledby": "creation-title", children: [Y.jsxs("h1", { id: "creation-title", "data-node-id": "1831:8074", children: ["输入决策需求，启动", Y.jsx("span", { children: "深度创作" })] }), Y.jsx("p", { "data-node-id": "1831:8078", children: "系统将先澄清研究边界，再调用权威数据与阶段性结论组织报告" })] }), Y.jsxs("section", { className: "creation-workbench", "aria-label": "报告创作", "data-node-id": "1831:22718", children: [Y.jsxs("div", { className: "composer", "data-node-id": "1831:8079", children: [Y.jsx(nr.TextArea, { ref: D, "aria-label": "决策需求", placeholder: VS, value: e.prompt, onChange: (L) => T({ prompt: L }), autoSize: { minRows: 2, maxRows: 6 }, maxLength: 4e3, className: "requirement-input", onKeyDown: (L) => {
    (L.ctrlKey || L.metaKey) && L.key === "Enter" && (L.preventDefault(), P());
  } }), e.links.length > 0 && Y.jsx("div", { className: "attached-links", "aria-label": "已添加素材链接", children: e.links.map((L) => Y.jsxs(Ea, { closable: true, onClose: () => T({ links: e.links.filter((Q) => Q !== L) }), children: [Y.jsx(dr, { name: "part-1-img1.svg", size: 12 }), Y.jsx("span", { title: L, children: new URL(L).hostname })] }, L)) }), Y.jsxs("div", { className: "composer-toolbar", children: [Y.jsx("div", { className: "report-type-group", role: "group", "aria-label": "报告类型", children: Ld.map((L) => Y.jsxs(mt, { type: "text", className: `report-type ${e.reportType === L.id ? "is-selected" : ""}`, "aria-pressed": e.reportType === L.id, onClick: () => T({ reportType: L.id }), children: [Y.jsx(dr, { name: L.icon, size: 20 }), Y.jsx("span", { children: L.label })] }, L.id)) }), Y.jsxs("div", { className: "composer-actions", children: [Y.jsx(Na, { popupVisible: C, onVisibleChange: O, trigger: "click", position: "bottom", content: Y.jsxs("div", { className: "source-popover", children: [Y.jsx("label", { htmlFor: "source-url", children: "添加素材链接" }), Y.jsx("p", { children: "引用网页、政策或研究资料" }), Y.jsx(nr, { id: "source-url", value: m, onChange: (L) => {
    p(L), w("");
  }, placeholder: "https://", status: g ? "error" : void 0, onPressEnter: R }), Y.jsx("p", { className: "field-error", role: "alert", children: g }), Y.jsx(mt, { type: "primary", onClick: R, children: "添加链接" })] }), children: Y.jsx(Mi, { content: "添加素材链接", children: Y.jsx(mt, { type: "text", className: "icon-button", "aria-label": "添加素材链接", children: Y.jsx(dr, { name: "part-1-img1.svg" }) }) }) }), Y.jsx(Mi, { content: "打开我的素材库", children: Y.jsx(mt, { type: "text", className: "icon-button", "aria-label": "打开我的素材库", onClick: () => Sn("materials"), children: Y.jsx(dr, { name: "part-1-img.svg" }) }) }), Y.jsx("span", { className: "toolbar-divider" }), Y.jsx(Mi, { content: e.prompt.trim() ? "确认研究需求 · Ctrl / ⌘ + Enter" : "请先输入决策需求", children: Y.jsx(mt, { type: "primary", shape: "circle", className: "start-button", "aria-label": "启动创作", disabled: !e.prompt.trim(), onClick: P, children: Y.jsx(dr, { name: "part-1-imgGroup2369.svg", size: 36 }) }) })] })] })] }), Y.jsxs("div", { className: `template-library ${a ? "" : "is-collapsed"}`, children: [Y.jsxs("div", { className: "library-toolbar", children: [Y.jsxs(Pr.Group, { type: "button", className: "library-tabs", value: n, onChange: (L) => {
    r(L), s(false), u(true);
  }, "aria-label": "模板分类", children: [Y.jsx(Pr, { value: "business", children: "业务模板" }), Y.jsx(Pr, { value: "style", children: "样式库" })] }), Y.jsxs(mt, { type: "text", className: "collapse-button", onClick: () => u(!a), "aria-expanded": a, "aria-controls": "template-content", children: [a ? "收起" : "展开", Y.jsx(dr, { name: "part-1-img2.svg", className: a ? "" : "rotated-chevron" })] })] }), a && Y.jsxs("div", { id: "template-content", children: [Y.jsx("div", { className: "template-grid", "data-node-id": "1834:22832", children: H.map((L) => {
    const Q = L.id === (n === "business" ? e.templateId : e.styleId);
    return Y.jsxs(mt, { className: `template-card ${Q ? "is-selected" : ""}`, "aria-pressed": Q, onClick: () => {
      if (n === "business") {
        const q = ou.find((Z) => Z.id === L.id);
        T({ templateId: L.id, ...e.prompt.trim() ? {} : { prompt: q.prompt } });
      } else T({ styleId: L.id });
    }, children: [Y.jsx(QS, { kind: L.preview }), Y.jsxs("span", { className: "template-copy", children: [Y.jsx("strong", { children: L.title }), Y.jsx("span", { children: L.description })] })] }, L.id);
  }) }), n === "business" && Y.jsx(mt, { type: "text", className: "view-all", onClick: () => s(!f), "aria-expanded": f, children: f ? "收起更多" : "查看全部" })] })] }), x && Y.jsx("p", { className: "storage-warning", role: "status", children: "浏览器无法保存草稿，请保留当前页面并复制需求内容。" })] }), b !== "editing" && Y.jsxs("section", { className: "request-review", "aria-labelledby": "review-title", ref: I, tabIndex: -1, children: [Y.jsxs("div", { className: "review-heading", children: [Y.jsx("h2", { id: "review-title", children: b === "confirmed" ? "研究需求已确认" : "确认研究边界" }), Y.jsx(Ea, { color: b === "confirmed" ? "green" : "arcoblue", children: b === "confirmed" ? "已保存在本机" : "需求预览" })] }), Y.jsx("p", { className: "review-prompt", children: e.prompt }), Y.jsxs("div", { className: "review-metadata", children: [Y.jsx("span", { children: M.label }), Y.jsx("span", { children: V.title }), Y.jsx("span", { children: j.title }), e.links.length > 0 && Y.jsxs("span", { children: [e.links.length, " 个素材链接"] })] }), b === "review" ? Y.jsxs("div", { className: "boundary-fields", children: [Y.jsxs("label", { children: ["研究区域", Y.jsx(nr, { "aria-label": "研究区域", value: e.region, onChange: (L) => o((Q) => ({ ...Q, region: L })), placeholder: "例如：深圳" })] }), Y.jsxs("div", { className: "boundary-field", children: [Y.jsx("span", { children: "时间范围" }), Y.jsx(Du, { "aria-label": "时间范围", value: e.period, onChange: (L) => o((Q) => ({ ...Q, period: L })), options: ["当前现状", "未来一年", "未来三年", "未来五年"] })] }), Y.jsxs("label", { className: "purpose-field", children: ["输出目标", Y.jsx(nr, { "aria-label": "输出目标", value: e.purpose, onChange: (L) => o((Q) => ({ ...Q, purpose: L })), placeholder: "例如：招商与企业培育建议" })] })] }) : Y.jsxs("p", { className: "confirmed-boundary", children: [e.region, " · ", e.period, " · ", e.purpose] }), Y.jsxs("div", { className: "review-footer", children: [Y.jsx("p", { children: "生成服务将在后续接入，当前先保存研究需求。" }), Y.jsxs("div", { children: [Y.jsx(mt, { onClick: () => {
    var L;
    S("editing"), (L = D.current) == null || L.focus();
  }, children: "返回修改" }), b === "review" && Y.jsx(mt, { type: "primary", disabled: !e.region.trim() || !e.purpose.trim(), onClick: () => {
    S("confirmed"), oi.success("研究需求已确认并保存在本机，可随时返回修改。");
  }, children: "确认并保存需求" })] })] })] })] }) });
}
const g_ = "thinktank:material-library:v1", ZS = [["深圳AI硬件产业研究资料包", "包含研究报告、专家观点、政策文件和企业图谱。", "2026-10-12"], ["北京智能交通系统研究资料包", "整理智能交通建设案例、关键技术及行业发展趋势。", "2026-10-10"], ["上海医疗健康科技研究资料包", "覆盖医疗器械、数字医疗和生物医药相关研究材料。", "2026-10-08"], ["广州智能制造技术研究资料包", "沉淀智能工厂、工业软件和制造业数字化转型资料。", "2026-10-06"], ["低空经济产业链研究资料包", "收录低空经济产业图谱、应用场景、企业和政策信息。", "2026-10-03"], ["具身智能前沿技术资料包", "整理具身智能技术路线、代表性产品与产业化进展。", "2026-09-28"], ["新能源储能产业研究资料包", "聚合新型储能技术、市场规模、项目案例及政策资料。", "2026-09-24"], ["人工智能政策研究资料包", "收录国内外人工智能治理、产业扶持与监管政策。", "2026-09-20"], ["生物制造产业研究资料包", "整理合成生物学、生物制造平台与产业应用资料。", "2026-09-16"], ["机器人产业发展资料包", "覆盖核心零部件、整机企业、场景应用与行业数据。", "2026-09-12"], ["量子信息技术研究资料包", "聚合量子计算、量子通信与量子测量领域资料。", "2026-09-08"], ["未来产业政策资料包", "整理未来产业培育方向、地方实践和专项政策。", "2026-09-03"], ["产业招商案例资料包", "沉淀重点城市产业招商方法、项目案例和政策工具。", "2026-08-28"], ["科技成果转化研究资料包", "收录成果评价、技术转移与产学研合作案例。", "2026-08-22"], ["数字经济监测资料包", "整理数字产业化、产业数字化与区域监测指标资料。", "2026-08-16"], ["专精特新企业研究资料包", "汇总企业画像、创新能力、融资与成长路径资料。", "2026-08-10"], ["绿色低碳技术研究资料包", "覆盖节能降碳、清洁能源与绿色制造技术资料。", "2026-08-05"], ["科技创新评价资料包", "整理创新评价指标、监测方法和国内外实践案例。", "2026-07-30"]], JS = [["2026年AI硬件产业链深度研究报告", "DOCX", "processing"], ["V2G产业政策建议报告", "DOCX", "complete"], ["量子计算产业链研究", "PDF", "failed"], ["无人机物流商业化路径", "PDF", "processing"], ["具身智能产业链研究", "DOCX", "complete"], ["低空经济政策环境研究", "XLSX", "failed"], ["低空经济政策环境研究", "DOCX", "processing"], ["低空经济政策环境研究", "XLSX", "complete"], ["低空经济政策环境研究", "DOCX", "failed"], ["低空经济政策环境研究", "DOCX", "failed"]].map(([e, o, n], r) => ({ id: `knowledge-1-file-${r + 1}`, name: e, format: o, size: "2.4 MB", uploadedAt: "2026-05-18 16:40", status: n })), lu = ZS.map(([e, o, n], r) => ({ id: `knowledge-${r + 1}`, name: e, description: o, createdAt: n, updatedAt: `${n}T09:00:00+08:00`, files: r === 0 ? JS : [] }));
function eP(e) {
  if (!Array.isArray(e)) return null;
  const o = e.filter((n) => !!(n && typeof n == "object" && typeof n.id == "string" && typeof n.name == "string" && ["DOCX", "PDF", "XLSX"].includes(n.format) && typeof n.size == "string" && typeof n.uploadedAt == "string" && ["processing", "complete", "failed"].includes(n.status)));
  return o.length === e.length ? o : null;
}
function tP(e) {
  if (!Array.isArray(e)) return null;
  const o = e.filter((n) => !!(n && typeof n == "object" && typeof n.id == "string" && typeof n.name == "string" && typeof n.description == "string" && typeof n.createdAt == "string" && typeof n.updatedAt == "string")).map((n) => {
    var u;
    const r = ((u = lu.find((f) => f.id === n.id)) == null ? void 0 : u.files) ?? [], a = n.id === "knowledge-1" && n.description === "汇集深圳AI硬件产业链、重点企业、技术路线与政策资料。" ? "包含研究报告、专家观点、政策文件和企业图谱。" : n.description;
    return { ...n, description: a, files: eP(n.files) ?? r, deleted: !!n.deleted };
  });
  return o.length === e.length ? o : null;
}
function y_() {
  return new URLSearchParams(window.location.search).get("qa") === "1" ? sessionStorage : localStorage;
}
function __() {
  try {
    const e = y_().getItem(g_);
    return e ? tP(JSON.parse(e)) ?? lu : lu;
  } catch {
    return lu;
  }
}
function bP() {
  const [e, o] = _.useState(__), [n, r] = _.useState(false);
  _.useEffect(() => {
    try {
      y_().setItem(g_, JSON.stringify(e)), r(false);
    } catch {
      r(true);
    }
  }, [e]);
  const a = _.useCallback((f) => {
    const s = /* @__PURE__ */ new Date(), m = { id: `local-${s.getTime()}`, name: f.name.trim(), description: f.description.trim(), createdAt: s.toISOString().slice(0, 10), updatedAt: s.toISOString() };
    return o((p) => [m, ...p]), m;
  }, []), u = _.useCallback((f, s) => {
    o((m) => m.map((p) => p.id === f ? { ...p, ...s, updatedAt: (/* @__PURE__ */ new Date()).toISOString() } : p));
  }, []);
  return { items: e, createItem: a, updateItem: u, storageWarning: n };
}
const nP = _.lazy(() => Li(() => import("./ReportTasks-DxtsE8Mr.js"), __vite__mapDeps([4, 5, 3, 6, 2, 7, 1, 8, 9, 10]))), rP = _.lazy(() => Li(() => import("./CaseSquare-CxMiWvkb.js"), __vite__mapDeps([11, 12, 10]))), iP = _.lazy(() => Li(() => import("./CaseDetail-B-Tcyg28.js"), __vite__mapDeps([13, 12, 9, 6, 14]))), aP = _.lazy(() => Li(() => import("./MaterialLibrary-BaddHrV5.js"), __vite__mapDeps([15, 1, 10, 5, 3, 6, 7]))), oP = _.lazy(() => Li(() => import("./MaterialDetail-5U5RICDh.js"), __vite__mapDeps([16, 5, 3, 6, 8, 9, 10]))), lP = _.lazy(() => Li(() => import("./HotspotQuestions-C7fIsxlD.js"), []));
function uP() {
  var r;
  const [e, o] = _.useState(Gy);
  _.useEffect(() => {
    const a = () => o(Gy());
    return window.addEventListener("hashchange", a), () => window.removeEventListener("hashchange", a);
  }, []);
  const n = e === "material-detail" ? (r = __().find((a) => a.id === WS())) == null ? void 0 : r.name : void 0;
  return _.useEffect(() => {
    document.title = `${e === "hotspot-qa" ? "技术热点问数" : e === "tasks" ? "我的报告任务" : e === "materials" ? "我的素材库" : e === "material-detail" ? n ?? "知识库详情" : e === "cases" ? "案例广场" : e === "case-detail" ? "案例详情" : "报告创作"} · 新型高端智库`;
  }, [e, n]), Y.jsx(GS, { page: e, materialDetailName: n, children: e === "hotspot-qa" ? Y.jsx(_.Suspense, { fallback: Y.jsx("div", { className: "tasks-loading", children: Y.jsx(ii, { tip: "正在加载技术热点问数…" }) }), children: Y.jsx(lP, {}) }) : e === "tasks" ? Y.jsx(_.Suspense, { fallback: Y.jsx("div", { className: "tasks-loading", children: Y.jsx(ii, { tip: "正在加载报告任务…" }) }), children: Y.jsx(nP, {}) }) : e === "materials" ? Y.jsx(_.Suspense, { fallback: Y.jsx("div", { className: "tasks-loading", children: Y.jsx(ii, { tip: "正在加载素材库…" }) }), children: Y.jsx(aP, {}) }) : e === "material-detail" ? Y.jsx(_.Suspense, { fallback: Y.jsx("div", { className: "tasks-loading", children: Y.jsx(ii, { tip: "正在加载知识库详情…" }) }), children: Y.jsx(oP, {}) }) : e === "cases" ? Y.jsx(_.Suspense, { fallback: Y.jsx("div", { className: "tasks-loading", children: Y.jsx(ii, { tip: "正在加载案例广场…" }) }), children: Y.jsx(rP, {}) }) : e === "case-detail" ? Y.jsx(_.Suspense, { fallback: Y.jsx("div", { className: "tasks-loading", children: Y.jsx(ii, { tip: "正在加载案例详情…" }) }), children: Y.jsx(iP, {}) }) : Y.jsx(XS, {}) });
}
document.body.classList.add("thinktank-ui");
pC.createRoot(document.getElementById("root")).render(Y.jsx(h.StrictMode, { children: Y.jsx(jo, { locale: r0, componentConfig: { Button: { size: "default", type: "outline" }, Input: { size: "default" }, Select: { size: "default" }, InputNumber: { size: "default" }, InputTag: { size: "default" }, DatePicker: { size: "default" }, Modal: { autoFocus: false } }, children: Y.jsx(uP, {}) }) }));
export { Vo as $, Ri as A, N0 as B, Ye as C, mt as D, li as E, He as F, Jd as G, np as H, Fd as I, zi as J, Zh as K, IS as L, Mo as M, Ro as N, yP as O, Sa as P, Mi as Q, h as R, Gh as S, Tr as T, Dn as U, Un as V, jr as W, Na as X, $o as Y, Y as Z, ht as _, Wd as a, Ru as a$, pr as a0, Ea as a1, oi as a2, Pr as a3, Du as a4, F0 as a5, Ao as a6, l1 as a7, dr as a8, wP as a9, pP as aA, Xy as aB, ui as aC, ip as aD, WS as aE, Sn as aF, OC as aG, pp as aH, dp as aI, cP as aJ, Pu as aK, U0 as aL, Xt as aM, Zt as aN, j1 as aO, cb as aP, KO as aQ, w1 as aR, gP as aS, t0 as aT, vP as aU, hP as aV, l0 as aW, bu as aX, du as aY, md as aZ, mP as a_, xP as aa, ii as ab, bP as ac, CP as ad, yb as ae, Qd as af, ab as ag, ap as ah, K0 as ai, Eu as aj, fb as ak, d0 as al, YO as am, S1 as an, bb as ao, Lo as ap, Eb as aq, Sb as ar, xb as as, qn as at, fP as au, m0 as av, M1 as aw, jo as ax, Ly as ay, _P as az, Vd as b, ep as b0, zu as b1, j0 as b2, I0 as b3, Xd as b4, zo as b5, sP as b6, Qy as b7, OP as b8, Kd as b9, Ud as ba, Kn as bb, Hd as c, he as d, Nr as e, t1 as f, Di as g, gn as h, Ft as i, dP as j, wt as k, kt as l, ku as m, kr as n, Ut as o, Cu as p, wu as q, _ as r, Ot as s, Mt as t, Dt as u, Zd as v, Rt as w, nr as x, Pa as y, k0 as z };
