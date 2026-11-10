import { R as d, r as p, f as k, _ as E, g as P, F as e, Z as _, G as u, a9 as $, a_ as g, J as R, O as v, V as F, aa as A } from "./index-BwwIQFuW.js";
import { f as j } from "./reportTasks-DAXmF1j7.js";
import { D as T } from "./index-CD4FIMXP.js";
function C(s, n) {
  var a = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(s);
    n && (t = t.filter(function(c) {
      return Object.getOwnPropertyDescriptor(s, c).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function O(s) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? C(Object(a), true).forEach(function(t) {
      P(s, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : C(Object(a)).forEach(function(t) {
      Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return s;
}
function B(s, n) {
  var a = p.useContext(k), t = a.prefixCls, c = t === void 0 ? "arco" : t, m = s.spin, o = s.className, l = O(O({ "aria-hidden": true, focusable: false, ref: n }, s), {}, { className: "".concat(o ? o + " " : "").concat(c, "-icon ").concat(c, "-icon-check-circle") });
  return m && (l.className = "".concat(l.className, " ").concat(c, "-icon-loading")), delete l.spin, delete l.isIcon, d.createElement("svg", E({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, l), d.createElement("path", { d: "m15 22 7 7 11.5-11.5M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z" }));
}
var y = d.forwardRef(B);
y.defaultProps = { isIcon: true };
y.displayName = "IconCheckCircle";
function N(s, n) {
  var a = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(s);
    n && (t = t.filter(function(c) {
      return Object.getOwnPropertyDescriptor(s, c).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function w(s) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? N(Object(a), true).forEach(function(t) {
      P(s, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : N(Object(a)).forEach(function(t) {
      Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return s;
}
function L(s, n) {
  var a = p.useContext(k), t = a.prefixCls, c = t === void 0 ? "arco" : t, m = s.spin, o = s.className, l = w(w({ "aria-hidden": true, focusable: false, ref: n }, s), {}, { className: "".concat(o ? o + " " : "").concat(c, "-icon ").concat(c, "-icon-email") });
  return m && (l.className = "".concat(l.className, " ").concat(c, "-icon-loading")), delete l.spin, delete l.isIcon, d.createElement("svg", E({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, l), d.createElement("rect", { width: "36", height: "32", x: "6", y: "8", rx: "1" }), d.createElement("path", { d: "m37 17-12.43 8.606a1 1 0 0 1-1.14 0L11 17" }));
}
var f = d.forwardRef(L);
f.defaultProps = { isIcon: true };
f.displayName = "IconEmail";
function W({ container: s, visible: n, messages: a, onClose: t, onSetRead: c, onMarkAllRead: m, storageWarning: o }) {
  const [l, I] = p.useState("all"), [D, h] = p.useState(null);
  p.useEffect(() => {
    n && h(null);
  }, [n]);
  const x = a.filter((r) => !r.read).length, i = a.find((r) => r.id === D), b = a.filter((r) => l === "all" || (l === "read" ? r.read : !r.read)), S = [{ value: "all", label: "全部", count: a.length }, { value: "unread", label: "未读", count: x }, { value: "read", label: "已读", count: a.length - x }];
  return e.jsx(_, { title: "系统消息", placement: "right", width: 560, visible: n, onCancel: t, footer: null, getPopupContainer: () => s, focusLock: true, autoFocus: true, className: "subsystem-message-drawer", wrapClassName: "subsystem-message-wrapper", children: e.jsxs("div", { id: "subsystem-message-drawer", className: "system-message-body", children: [i ? e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "system-message-detail-toolbar", children: [e.jsxs(u, { type: "text", onClick: () => h(null), children: [e.jsx($, {}), "返回消息列表"] }), e.jsx(u, { type: "text", onClick: () => c(i.id, !i.read), children: i.read ? "标为未读" : "标为已读" })] }), e.jsxs("article", { className: "system-message-detail", children: [e.jsx("span", { className: `system-message-avatar ${i.read ? "is-read" : ""}`, children: e.jsx(f, {}) }), e.jsx("h2", { children: i.title }), e.jsx("p", { className: "system-message-detail-description", children: g(i) }), e.jsx(T, { column: 1, labelStyle: { color: "#86909C" }, data: [{ label: "校验项", value: i.checkName }, { label: "通知时间", value: j(i.createdAt) }, { label: "阅读状态", value: e.jsx(R, { color: i.read ? "gray" : "arcoblue", children: i.read ? "已读" : "未读" }) }] })] })] }) : e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "system-message-list-toolbar", children: [e.jsx(v.Group, { type: "button", className: "system-message-filter-tabs", "aria-label": "消息筛选", value: l, onChange: I, children: S.map((r) => e.jsxs(v, { value: r.value, children: [e.jsx("span", { children: r.label }), e.jsx("span", { className: "message-tab-count", children: r.count })] }, r.value)) }), e.jsxs(u, { className: "mark-all-read", disabled: x === 0, onClick: m, children: [e.jsx(y, {}), "全部已读"] })] }), e.jsx("div", { className: "system-message-list", "aria-label": "系统消息列表", children: b.length === 0 ? e.jsx("div", { className: "system-message-empty", children: e.jsx(F, { description: l === "unread" ? "暂无未读消息" : l === "read" ? "暂无已读消息" : "暂无系统消息" }) }) : b.map((r) => e.jsxs("article", { className: `system-message-row ${r.read ? "is-read" : "is-unread"}`, children: [e.jsx("span", { className: `system-message-avatar ${r.read ? "is-read" : ""}`, children: e.jsx(f, {}) }), e.jsxs("div", { className: "system-message-row-content", children: [e.jsxs("div", { className: "system-message-row-heading", children: [e.jsxs("h3", { children: [!r.read && e.jsx("span", { className: "system-message-unread-dot", "aria-label": "未读" }), r.title] }), e.jsx("time", { dateTime: r.createdAt, children: j(r.createdAt) })] }), e.jsx("p", { children: g(r) }), e.jsx("div", { className: "system-message-row-actions", children: e.jsxs(u, { type: "text", "aria-label": `消息详情：${r.checkName} ${j(r.createdAt)}`, onClick: () => {
    h(r.id), c(r.id, true);
  }, children: ["详情", e.jsx(A, {})] }) })] })] }, r.id)) })] }), o && e.jsx("p", { className: "system-message-storage-warning", role: "status", children: "浏览器暂时无法保存阅读状态，刷新后将恢复初始消息。" })] }) });
}
export { W as default };
