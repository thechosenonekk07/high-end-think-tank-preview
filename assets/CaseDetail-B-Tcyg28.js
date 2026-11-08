var ky = Object.defineProperty;
var sg = (d) => {
  throw TypeError(d);
};
var Ry = (d, t, e) => t in d ? ky(d, t, { enumerable: true, configurable: true, writable: true, value: e }) : d[t] = e;
var R = (d, t, e) => Ry(d, typeof t != "symbol" ? t + "" : t, e), Yu = (d, t, e) => t.has(d) || sg("Cannot " + e);
var n = (d, t, e) => (Yu(d, t, "read from private field"), e ? e.call(d) : t.get(d)), g = (d, t, e) => t.has(d) ? sg("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, e), f = (d, t, e, s) => (Yu(d, t, "write to private field"), s ? s.call(d, e) : t.set(d, e), e), b = (d, t, e) => (Yu(d, t, "access private method"), e);
var Kt = (d, t, e, s) => ({ set _(i) {
  f(d, t, i, e);
}, get _() {
  return n(d, t, s);
} });
import { R as af, r as H, k as My, _ as Dy, l as Ly, g as Iy, Z as M, aa as Fy, D as Fs, a2 as Td, Q as kr, N as Ny, M as Oy, ab as ig } from "./index-DOWuBEUh.js";
import { c as ng } from "./caseSquare-Bx8x_2A7.js";
import { I as By } from "./index-CgcNigm7.js";
import { I as Hy, a as Uy, b as jy } from "./index-gnNGM7My.js";
function rg(d, t) {
  var e = Object.keys(d);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(d);
    t && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(d, i).enumerable;
    })), e.push.apply(e, s);
  }
  return e;
}
function ag(d) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rg(Object(e), true).forEach(function(s) {
      Ly(d, s, e[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(e)) : rg(Object(e)).forEach(function(s) {
      Object.defineProperty(d, s, Object.getOwnPropertyDescriptor(e, s));
    });
  }
  return d;
}
function $y(d, t) {
  var e = H.useContext(My), s = e.prefixCls, i = s === void 0 ? "arco" : s, r = d.spin, a = d.className, o = ag(ag({ "aria-hidden": true, focusable: false, ref: t }, d), {}, { className: "".concat(a ? a + " " : "").concat(i, "-icon ").concat(i, "-icon-download") });
  return r && (o.className = "".concat(o.className, " ").concat(i, "-icon-loading")), delete o.spin, delete o.isIcon, af.createElement("svg", Dy({ fill: "none", stroke: "currentColor", strokeWidth: "4", viewBox: "0 0 48 48" }, o), af.createElement("path", { d: "m33.072 22.071-9.07 9.071-9.072-9.07M24 5v26m16 4v6H8v-6" }));
}
var Ip = af.forwardRef($y);
Ip.defaultProps = { isIcon: true };
Ip.displayName = "IconDownload";
const Be = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), of = [1e-3, 0, 0, 1e-3, 0, 0], Ku = 1.35, bs = { ANY: 1, DISPLAY: 2, PRINT: 4, ANNOTATIONS_FORMS: 16, ANNOTATIONS_STORAGE: 32, ANNOTATIONS_DISABLE: 64, IS_EDITING: 128, OPLIST: 256 }, Mi = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }, wh = "pdfjs_internal_editor_", q = { DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15, POPUP: 16, SIGNATURE: 101, COMMENT: 102 }, it = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23, HIGHLIGHT_COLOR: 31, HIGHLIGHT_THICKNESS: 32, HIGHLIGHT_FREE: 33, HIGHLIGHT_SHOW_ALL: 34, DRAW_STEP: 41 }, Wg = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 }, ue = { FILL: 0, STROKE: 1, FILL_STROKE: 2, INVISIBLE: 3, FILL_STROKE_MASK: 3, ADD_TO_PATH_FLAG: 4 }, Ah = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }, zt = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26 }, to = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 }, ld = { ERRORS: 0, WARNINGS: 1, INFOS: 5 }, zl = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91, setStrokeTransparent: 92, setFillTransparent: 93, rawFillPath: 94 }, bd = { moveTo: 0, lineTo: 1, curveTo: 2, closePath: 3 }, Xg = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
let Ou = ld.WARNINGS;
function zy(d) {
  Number.isInteger(d) && (Ou = d);
}
function Gy() {
  return Ou;
}
function Bu(d) {
  Ou >= ld.INFOS && console.info(`Info: ${d}`);
}
function Y(d) {
  Ou >= ld.WARNINGS && console.warn(`Warning: ${d}`);
}
function _t(d) {
  throw new Error(d);
}
function rt(d, t) {
  d || _t(t);
}
function Vy(d) {
  switch (d == null ? void 0 : d.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
function Fp(d, t = null, e = null) {
  if (!d) return null;
  if (e && typeof d == "string") {
    if (e.addDefaultProtocol && d.startsWith("www.")) {
      const i = d.match(/\./g);
      (i == null ? void 0 : i.length) >= 2 && (d = `http://${d}`);
    }
    if (e.tryConvertEncoding) try {
      d = Ky(d);
    } catch {
    }
  }
  const s = t ? URL.parse(d, t) : URL.parse(d);
  return Vy(s) ? s : null;
}
function Np(d, t, e = false) {
  const s = URL.parse(d);
  return s ? (s.hash = t, s.href) : e && Fp(d, "http://example.com") ? d.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
function Q(d, t, e, s = false) {
  return Object.defineProperty(d, t, { value: e, enumerable: !s, configurable: true, writable: false }), e;
}
const Ka = (function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
})();
class og extends Ka {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class Ju extends Ka {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class au extends Ka {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class vh extends Ka {
  constructor(t, e, s) {
    super(t, "ResponseException"), this.status = e, this.missing = s;
  }
}
class Wy extends Ka {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Sn extends Ka {
  constructor(t) {
    super(t, "AbortException");
  }
}
function qg(d) {
  (typeof d != "object" || (d == null ? void 0 : d.length) === void 0) && _t("Invalid argument for bytesToString");
  const t = d.length, e = 8192;
  if (t < e) return String.fromCharCode.apply(null, d);
  const s = [];
  for (let i = 0; i < t; i += e) {
    const r = Math.min(i + e, t), a = d.subarray(i, r);
    s.push(String.fromCharCode.apply(null, a));
  }
  return s.join("");
}
function hd(d) {
  typeof d != "string" && _t("Invalid argument for stringToBytes");
  const t = d.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s) e[s] = d.charCodeAt(s) & 255;
  return e;
}
function Xy(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function qy() {
  const d = new Uint8Array(4);
  return d[0] = 1, new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function Yy() {
  try {
    return new Function(""), true;
  } catch {
    return false;
  }
}
class ce {
  static get isLittleEndian() {
    return Q(this, "isLittleEndian", qy());
  }
  static get isEvalSupported() {
    return Q(this, "isEvalSupported", Yy());
  }
  static get isOffscreenCanvasSupported() {
    return Q(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return Q(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    const { platform: t, userAgent: e } = navigator;
    return Q(this, "platform", { isAndroid: e.includes("Android"), isLinux: t.includes("Linux"), isMac: t.includes("Mac"), isWindows: t.includes("Win"), isFirefox: e.includes("Firefox") });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return Q(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const Qu = Array.from(Array(256).keys(), (d) => d.toString(16).padStart(2, "0"));
var vn, Pd, lf;
class $ {
  static makeHexColor(t, e, s) {
    return `#${Qu[t]}${Qu[e]}${Qu[s]}`;
  }
  static domMatrixToTransform(t) {
    return [t.a, t.b, t.c, t.d, t.e, t.f];
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static multiplyByDOMMatrix(t, e) {
    return [t[0] * e.a + t[2] * e.b, t[1] * e.a + t[3] * e.b, t[0] * e.c + t[2] * e.d, t[1] * e.c + t[3] * e.d, t[0] * e.e + t[2] * e.f + t[4], t[1] * e.e + t[3] * e.f + t[5]];
  }
  static applyTransform(t, e, s = 0) {
    const i = t[s], r = t[s + 1];
    t[s] = i * e[0] + r * e[2] + e[4], t[s + 1] = i * e[1] + r * e[3] + e[5];
  }
  static applyTransformToBezier(t, e, s = 0) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5];
    for (let c = 0; c < 6; c += 2) {
      const u = t[s + c], p = t[s + c + 1];
      t[s + c] = u * i + p * a + l, t[s + c + 1] = u * r + p * o + h;
    }
  }
  static applyInverseTransform(t, e) {
    const s = t[0], i = t[1], r = e[0] * e[3] - e[1] * e[2];
    t[0] = (s * e[3] - i * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-s * e[1] + i * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }
  static axialAlignedBoundingBox(t, e, s) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5], c = t[0], u = t[1], p = t[2], m = t[3];
    let A = i * c + l, y = A, v = i * p + l, w = v, S = o * u + h, E = S, _ = o * m + h, C = _;
    if (r !== 0 || a !== 0) {
      const x = r * c, T = r * p, P = a * u, k = a * m;
      A += P, w += P, v += k, y += k, S += x, C += x, _ += T, E += T;
    }
    s[0] = Math.min(s[0], A, v, y, w), s[1] = Math.min(s[1], S, _, E, C), s[2] = Math.max(s[2], A, v, y, w), s[3] = Math.max(s[3], S, _, E, C);
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t, e) {
    const s = t[0], i = t[1], r = t[2], a = t[3], o = s ** 2 + i ** 2, l = s * r + i * a, h = r ** 2 + a ** 2, c = (o + h) / 2, u = Math.sqrt(c ** 2 - (o * h - l ** 2));
    e[0] = Math.sqrt(c + u || 1), e[1] = Math.sqrt(c - u || 1);
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i) return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [s, r, i, a];
  }
  static pointBoundingBox(t, e, s) {
    s[0] = Math.min(s[0], t), s[1] = Math.min(s[1], e), s[2] = Math.max(s[2], t), s[3] = Math.max(s[3], e);
  }
  static rectBoundingBox(t, e, s, i, r) {
    r[0] = Math.min(r[0], t, s), r[1] = Math.min(r[1], e, i), r[2] = Math.max(r[2], t, s), r[3] = Math.max(r[3], e, i);
  }
  static bezierBoundingBox(t, e, s, i, r, a, o, l, h) {
    h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l), b(this, vn, lf).call(this, t, s, r, o, e, i, a, l, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), h), b(this, vn, lf).call(this, t, s, r, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h);
  }
}
vn = /* @__PURE__ */ new WeakSet(), Pd = function(t, e, s, i, r, a, o, l, h, c) {
  if (h <= 0 || h >= 1) return;
  const u = 1 - h, p = h * h, m = p * h, A = u * (u * (u * t + 3 * h * e) + 3 * p * s) + m * i, y = u * (u * (u * r + 3 * h * a) + 3 * p * o) + m * l;
  c[0] = Math.min(c[0], A), c[1] = Math.min(c[1], y), c[2] = Math.max(c[2], A), c[3] = Math.max(c[3], y);
}, lf = function(t, e, s, i, r, a, o, l, h, c, u, p) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(c) >= 1e-12 && b(this, vn, Pd).call(this, t, e, s, i, r, a, o, l, -u / c, p);
    return;
  }
  const m = c ** 2 - 4 * u * h;
  if (m < 0) return;
  const A = Math.sqrt(m), y = 2 * h;
  b(this, vn, Pd).call(this, t, e, s, i, r, a, o, l, (-c + A) / y, p), b(this, vn, Pd).call(this, t, e, s, i, r, a, o, l, (-c - A) / y, p);
}, g($, vn);
function Ky(d) {
  return decodeURIComponent(escape(d));
}
let Zu = null, lg = null;
function Yg(d) {
  return Zu || (Zu = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, lg = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), d.replaceAll(Zu, (t, e, s) => e ? e.normalize("NFKC") : lg.get(s));
}
function Op() {
  if (typeof crypto.randomUUID == "function") return crypto.randomUUID();
  const d = new Uint8Array(32);
  return crypto.getRandomValues(d), qg(d);
}
const Bp = "pdfjs_internal_id_";
function Jy(d, t, e) {
  if (!Array.isArray(e) || e.length < 2) return false;
  const [s, i, ...r] = e;
  if (!d(s) && !Number.isInteger(s) || !t(i)) return false;
  const a = r.length;
  let o = true;
  switch (i.name) {
    case "XYZ":
      if (a < 2 || a > 3) return false;
      break;
    case "Fit":
    case "FitB":
      return a === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (a > 1) return false;
      break;
    case "FitR":
      if (a !== 4) return false;
      o = false;
      break;
    default:
      return false;
  }
  for (const l of r) if (!(typeof l == "number" || o && l === null)) return false;
  return true;
}
function Re(d, t, e) {
  return Math.min(Math.max(d, t), e);
}
function Kg(d) {
  return Uint8Array.prototype.toBase64 ? d.toBase64() : btoa(qg(d));
}
function Qy(d) {
  return Uint8Array.fromBase64 ? Uint8Array.fromBase64(d) : hd(atob(d));
}
typeof Promise.try != "function" && (Promise.try = function(d, ...t) {
  return new Promise((e) => {
    e(d(...t));
  });
});
typeof Math.sumPrecise != "function" && (Math.sumPrecise = function(d) {
  return d.reduce((t, e) => t + e, 0);
});
class Eh {
  static textContent(t) {
    const e = [], s = { items: e, styles: /* @__PURE__ */ Object.create(null) };
    function i(r) {
      var l;
      if (!r) return;
      let a = null;
      const o = r.name;
      if (o === "#text") a = r.value;
      else if (Eh.shouldBuildText(o)) (l = r == null ? void 0 : r.attributes) != null && l.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({ str: a }), !!r.children) for (const h of r.children) i(h);
    }
    return i(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
class Hp {
  static setupStorage(t, e, s, i, r) {
    const a = i.getValue(e, { value: null });
    switch (s.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), r === "print") break;
        t.addEventListener("input", (o) => {
          i.setValue(e, { value: o.target.value });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", true) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), r === "print") break;
          t.addEventListener("change", (o) => {
            i.setValue(e, { value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff") });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), r === "print") break;
          t.addEventListener("input", (o) => {
            i.setValue(e, { value: o.target.value });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const o of s.children) o.attributes.value === a.value ? o.attributes.selected = true : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const l = o.target.options, h = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
          i.setValue(e, { value: h });
        });
        break;
    }
  }
  static setAttributes({ html: t, element: e, storage: s = null, intent: i, linkService: r }) {
    const { attributes: a } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${i}`);
    for (const [l, h] of Object.entries(a)) if (h != null) switch (l) {
      case "class":
        h.length && t.setAttribute(l, h.join(" "));
        break;
      case "dataId":
        break;
      case "id":
        t.setAttribute("data-element-id", h);
        break;
      case "style":
        Object.assign(t.style, h);
        break;
      case "textContent":
        t.textContent = h;
        break;
      default:
        (!o || l !== "href" && l !== "newWindow") && t.setAttribute(l, h);
    }
    o && r.addLinkAttributes(t, a.href, a.newWindow), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
  }
  static render(t) {
    var u, p;
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, r = t.intent || "display", a = document.createElement(i.name);
    i.attributes && this.setAttributes({ html: a, element: i, intent: r, linkService: s });
    const o = r !== "richText", l = t.div;
    if (l.append(a), t.viewport) {
      const m = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = m;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const m = document.createTextNode(i.value);
        a.append(m), o && Eh.shouldBuildText(i.name) && h.push(m);
      }
      return { textDivs: h };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [m, A, y] = c.at(-1);
      if (A + 1 === m.children.length) {
        c.pop();
        continue;
      }
      const v = m.children[++c.at(-1)[1]];
      if (v === null) continue;
      const { name: w } = v;
      if (w === "#text") {
        const E = document.createTextNode(v.value);
        h.push(E), y.append(E);
        continue;
      }
      const S = (u = v == null ? void 0 : v.attributes) != null && u.xmlns ? document.createElementNS(v.attributes.xmlns, w) : document.createElement(w);
      if (y.append(S), v.attributes && this.setAttributes({ html: S, element: v, storage: e, intent: r, linkService: s }), ((p = v.children) == null ? void 0 : p.length) > 0) c.push([v, -1, S]);
      else if (v.value) {
        const E = document.createTextNode(v.value);
        o && Eh.shouldBuildText(w) && h.push(E), S.append(E);
      }
    }
    for (const m of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) m.setAttribute("readOnly", true);
    return { textDivs: h };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = false;
  }
}
const Fi = "http://www.w3.org/2000/svg", Lr = class Lr2 {
};
R(Lr, "CSS", 96), R(Lr, "PDF", 72), R(Lr, "PDF_TO_CSS_UNITS", Lr.CSS / Lr.PDF);
let _n = Lr;
async function Wl(d, t = "text") {
  if (Ql(d, document.baseURI)) {
    const e = await fetch(d);
    if (!e.ok) throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", d, true), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        s(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class cd {
  constructor({ viewBox: t, userUnit: e, scale: s, rotation: i, offsetX: r = 0, offsetY: a = 0, dontFlip: o = false }) {
    this.viewBox = t, this.userUnit = e, this.scale = s, this.rotation = i, this.offsetX = r, this.offsetY = a, s *= e;
    const l = (t[2] + t[0]) / 2, h = (t[3] + t[1]) / 2;
    let c, u, p, m;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        c = -1, u = 0, p = 0, m = 1;
        break;
      case 90:
        c = 0, u = 1, p = 1, m = 0;
        break;
      case 270:
        c = 0, u = -1, p = -1, m = 0;
        break;
      case 0:
        c = 1, u = 0, p = 0, m = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (p = -p, m = -m);
    let A, y, v, w;
    c === 0 ? (A = Math.abs(h - t[1]) * s + r, y = Math.abs(l - t[0]) * s + a, v = (t[3] - t[1]) * s, w = (t[2] - t[0]) * s) : (A = Math.abs(l - t[0]) * s + r, y = Math.abs(h - t[1]) * s + a, v = (t[2] - t[0]) * s, w = (t[3] - t[1]) * s), this.transform = [c * s, u * s, p * s, m * s, A - c * s * l - p * s * h, y - u * s * l - m * s * h], this.width = v, this.height = w;
  }
  get rawDims() {
    const t = this.viewBox;
    return Q(this, "rawDims", { pageWidth: t[2] - t[0], pageHeight: t[3] - t[1], pageX: t[0], pageY: t[1] });
  }
  clone({ scale: t = this.scale, rotation: e = this.rotation, offsetX: s = this.offsetX, offsetY: i = this.offsetY, dontFlip: r = false } = {}) {
    return new cd({ viewBox: this.viewBox.slice(), userUnit: this.userUnit, scale: t, rotation: e, offsetX: s, offsetY: i, dontFlip: r });
  }
  convertToViewportPoint(t, e) {
    const s = [t, e];
    return $.applyTransform(s, this.transform), s;
  }
  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    $.applyTransform(e, this.transform);
    const s = [t[2], t[3]];
    return $.applyTransform(s, this.transform), [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    const s = [t, e];
    return $.applyInverseTransform(s, this.transform), s;
  }
}
class Hu extends Ka {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function dd(d) {
  const t = d.length;
  let e = 0;
  for (; e < t && d[e].trim() === ""; ) e++;
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
function Uu(d) {
  return typeof d == "string" && /\.pdf$/i.test(d);
}
function Jg(d) {
  return [d] = d.split(/[#?]/, 1), d.substring(d.lastIndexOf("/") + 1);
}
function Qg(d, t = "document.pdf") {
  if (typeof d != "string") return t;
  if (dd(d)) return Y('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const s = ((o) => {
    try {
      return new URL(o);
    } catch {
      try {
        return new URL(decodeURIComponent(o));
      } catch {
        try {
          return new URL(o, "https://foo.bar");
        } catch {
          try {
            return new URL(decodeURIComponent(o), "https://foo.bar");
          } catch {
            return null;
          }
        }
      }
    }
  })(d);
  if (!s) return t;
  const i = (o) => {
    try {
      let l = decodeURIComponent(o);
      return l.includes("/") ? (l = l.split("/").at(-1), l.test(/^\.pdf$/i) ? l : o) : l;
    } catch {
      return o;
    }
  }, r = /\.pdf$/i, a = s.pathname.split("/").at(-1);
  if (r.test(a)) return i(a);
  if (s.searchParams.size > 0) {
    const o = Array.from(s.searchParams.values()).reverse();
    for (const h of o) if (r.test(h)) return i(h);
    const l = Array.from(s.searchParams.keys()).reverse();
    for (const h of l) if (r.test(h)) return i(h);
  }
  if (s.hash) {
    const l = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(s.hash);
    if (l) return i(l[0]);
  }
  return t;
}
class hg {
  constructor() {
    R(this, "started", /* @__PURE__ */ Object.create(null));
    R(this, "times", []);
  }
  time(t) {
    t in this.started && Y(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || Y(`Timer has not been started for ${t}`), this.times.push({ name: t, start: this.started[t], end: Date.now() }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const { name: s } of this.times) e = Math.max(s.length, e);
    for (const { name: s, start: i, end: r } of this.times) t.push(`${s.padEnd(e)} ${r - i}ms
`);
    return t.join("");
  }
}
function Ql(d, t) {
  const e = t ? URL.parse(d, t) : URL.parse(d);
  return (e == null ? void 0 : e.protocol) === "http:" || (e == null ? void 0 : e.protocol) === "https:";
}
function vs(d) {
  d.preventDefault();
}
function Nt(d) {
  d.preventDefault(), d.stopPropagation();
}
function Zy(d) {
  console.log("Deprecated API usage: " + d);
}
var Ph;
class Sh {
  static toDateObject(t) {
    if (t instanceof Date) return t;
    if (!t || typeof t != "string") return null;
    n(this, Ph) || f(this, Ph, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, Ph).exec(t);
    if (!e) return null;
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const h = e[7] || "Z";
    let c = parseInt(e[8], 10);
    c = c >= 0 && c <= 23 ? c : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, h === "-" ? (a += c, o += u) : h === "+" && (a -= c, o -= u), new Date(Date.UTC(s, i, r, a, o, l));
  }
}
Ph = /* @__PURE__ */ new WeakMap(), g(Sh, Ph);
function Zg(d, { scale: t = 1, rotation: e = 0 }) {
  const { width: s, height: i } = d.attributes.style, r = [0, 0, parseInt(s), parseInt(i)];
  return new cd({ viewBox: r, userUnit: 1, scale: t, rotation: e });
}
function Xl(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return d.startsWith("rgb(") ? d.slice(4, -1).split(",").map((t) => parseInt(t)) : d.startsWith("rgba(") ? d.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (Y(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function tA(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, Xl(s));
  }
  t.remove();
}
function Ft(d) {
  const { a: t, b: e, c: s, d: i, e: r, f: a } = d.getTransform();
  return [t, e, s, i, r, a];
}
function ri(d) {
  const { a: t, b: e, c: s, d: i, e: r, f: a } = d.getTransform().invertSelf();
  return [t, e, s, i, r, a];
}
function _r(d, t, e = false, s = true) {
  if (t instanceof cd) {
    const { pageWidth: i, pageHeight: r } = t.rawDims, { style: a } = d, o = ce.isCSSRoundSupported, l = `var(--total-scale-factor) * ${i}px`, h = `var(--total-scale-factor) * ${r}px`, c = o ? `round(down, ${l}, var(--scale-round-x))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = u) : (a.width = u, a.height = c);
  }
  s && d.setAttribute("data-main-rotation", t.rotation);
}
class si {
  constructor() {
    const { pixelRatio: t } = si;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(t, e, s, i, r = -1) {
    let a = 1 / 0, o = 1 / 0, l = 1 / 0;
    s = si.capPixels(s, r), s > 0 && (a = Math.sqrt(s / (t * e))), i !== -1 && (o = i / t, l = i / e);
    const h = Math.min(a, o, l);
    return this.sx > h || this.sy > h ? (this.sx = h, this.sy = h, true) : false;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(t, e) {
    if (e >= 0) {
      const s = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
      return t > 0 ? Math.min(t, s) : s;
    }
    return t;
  }
}
const ou = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
class eA {
  static get isDarkMode() {
    var t;
    return Q(this, "isDarkMode", !!((t = window == null ? void 0 : window.matchMedia) != null && t.call(window, "(prefers-color-scheme: dark)").matches));
  }
}
class tm {
  static get commentForegroundColor() {
    const t = document.createElement("span");
    t.classList.add("comment", "sidebar");
    const { style: e } = t;
    e.width = e.height = "0", e.display = "none", e.color = "var(--comment-fg-color)", document.body.append(t);
    const { color: s } = window.getComputedStyle(t);
    return t.remove(), Q(this, "commentForegroundColor", Xl(s));
  }
}
function em(d, t, e, s) {
  s = Math.min(Math.max(s ?? 1, 0), 1);
  const i = 255 * (1 - s);
  return d = Math.round(d * s + i), t = Math.round(t * s + i), e = Math.round(e * s + i), [d, t, e];
}
function cg(d, t) {
  const e = d[0] / 255, s = d[1] / 255, i = d[2] / 255, r = Math.max(e, s, i), a = Math.min(e, s, i), o = (r + a) / 2;
  if (r === a) t[0] = t[1] = 0;
  else {
    const l = r - a;
    switch (t[1] = o < 0.5 ? l / (r + a) : l / (2 - r - a), r) {
      case e:
        t[0] = ((s - i) / l + (s < i ? 6 : 0)) * 60;
        break;
      case s:
        t[0] = ((i - e) / l + 2) * 60;
        break;
      case i:
        t[0] = ((e - s) / l + 4) * 60;
        break;
    }
  }
  t[2] = o;
}
function hf(d, t) {
  const e = d[0], s = d[1], i = d[2], r = (1 - Math.abs(2 * i - 1)) * s, a = r * (1 - Math.abs(e / 60 % 2 - 1)), o = i - r / 2;
  switch (Math.floor(e / 60)) {
    case 0:
      t[0] = r + o, t[1] = a + o, t[2] = o;
      break;
    case 1:
      t[0] = a + o, t[1] = r + o, t[2] = o;
      break;
    case 2:
      t[0] = o, t[1] = r + o, t[2] = a + o;
      break;
    case 3:
      t[0] = o, t[1] = a + o, t[2] = r + o;
      break;
    case 4:
      t[0] = a + o, t[1] = o, t[2] = r + o;
      break;
    case 5:
    case 6:
      t[0] = r + o, t[1] = o, t[2] = a + o;
      break;
  }
}
function dg(d) {
  return d <= 0.03928 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
}
function ug(d, t, e) {
  hf(d, e), e.map(dg);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  hf(t, e), e.map(dg);
  const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return s > i ? (s + 0.05) / (i + 0.05) : (i + 0.05) / (s + 0.05);
}
const fg = /* @__PURE__ */ new Map();
function sm(d, t) {
  const e = d[0] + d[1] * 256 + d[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let s = fg.get(e);
  if (s) return s;
  const i = new Float32Array(9), r = i.subarray(0, 3), a = i.subarray(3, 6);
  cg(d, a);
  const o = i.subarray(6, 9);
  cg(t, o);
  const l = o[2] < 0.5, h = l ? 12 : 4.5;
  if (a[2] = l ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), ug(a, o, r) < h) {
    let c, u;
    l ? (c = a[2], u = 1) : (c = 0, u = a[2]);
    const p = 5e-3;
    for (; u - c > p; ) {
      const m = a[2] = (c + u) / 2;
      l === ug(a, o, r) < h ? c = m : u = m;
    }
    a[2] = l ? u : c;
  }
  return hf(a, r), s = $.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), fg.set(e, s), s;
}
function Up({ html: d, dir: t, className: e }, s) {
  const i = document.createDocumentFragment();
  if (typeof d == "string") {
    const r = document.createElement("p");
    r.dir = t || "auto";
    const a = d.split(/(?:\r\n?|\n)/);
    for (let o = 0, l = a.length; o < l; ++o) {
      const h = a[o];
      r.append(document.createTextNode(h)), o < l - 1 && r.append(document.createElement("br"));
    }
    i.append(r);
  } else Hp.render({ xfaHtml: d, div: i, intent: "richText" });
  i.firstChild.classList.add("richText", e), s.append(i);
}
var Rn, Mn, _s, Cs, kh, Dn, bo, yo, Rh, yu, im, we, nm, rm, eo, Zl;
const Bi = class Bi2 {
  constructor(t) {
    g(this, we);
    g(this, Rn, null);
    g(this, Mn, null);
    g(this, _s);
    g(this, Cs, null);
    g(this, kh, null);
    g(this, Dn, null);
    g(this, bo, null);
    g(this, yo, null);
    f(this, _s, t), n(Bi2, Rh) || f(Bi2, Rh, Object.freeze({ freetext: "pdfjs-editor-remove-freetext-button", highlight: "pdfjs-editor-remove-highlight-button", ink: "pdfjs-editor-remove-ink-button", stamp: "pdfjs-editor-remove-stamp-button", signature: "pdfjs-editor-remove-signature-button" }));
  }
  render() {
    const t = f(this, Rn, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = n(this, _s)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener("contextmenu", vs, { signal: e }), t.addEventListener("pointerdown", b(Bi2, yu, im), { signal: e }));
    const s = f(this, Cs, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = n(this, _s).toolbarPosition;
    if (i) {
      const { style: r } = t, a = n(this, _s)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return n(this, Rn);
  }
  hide() {
    var t;
    n(this, Rn).classList.add("hidden"), (t = n(this, Mn)) == null || t.hideDropdown();
  }
  show() {
    var t, e;
    n(this, Rn).classList.remove("hidden"), (t = n(this, kh)) == null || t.shown(), (e = n(this, Dn)) == null || e.shown();
  }
  addDeleteButton() {
    const { editorType: t, _uiManager: e } = n(this, _s), s = document.createElement("button");
    s.classList.add("basic", "deleteButton"), s.tabIndex = 0, s.setAttribute("data-l10n-id", n(Bi2, Rh)[t]), b(this, we, eo).call(this, s) && s.addEventListener("click", (i) => {
      e.delete();
    }, { signal: e._signal }), n(this, Cs).append(s);
  }
  async addAltText(t) {
    const e = await t.render();
    b(this, we, eo).call(this, e), n(this, Cs).append(e, n(this, we, Zl)), f(this, kh, t);
  }
  addComment(t, e = null) {
    if (n(this, Dn)) return;
    const s = t.renderForToolbar();
    if (!s) return;
    b(this, we, eo).call(this, s);
    const i = f(this, bo, n(this, we, Zl));
    e ? (n(this, Cs).insertBefore(s, e), n(this, Cs).insertBefore(i, e)) : n(this, Cs).append(s, i), f(this, Dn, t), t.toolbar = this;
  }
  addColorPicker(t) {
    if (n(this, Mn)) return;
    f(this, Mn, t);
    const e = t.renderButton();
    b(this, we, eo).call(this, e), n(this, Cs).append(e, n(this, we, Zl));
  }
  async addEditSignatureButton(t) {
    const e = f(this, yo, await t.renderEditButton(n(this, _s)));
    b(this, we, eo).call(this, e), n(this, Cs).append(e, n(this, we, Zl));
  }
  removeButton(t) {
    var e, s;
    switch (t) {
      case "comment":
        (e = n(this, Dn)) == null || e.removeToolbarCommentButton(), f(this, Dn, null), (s = n(this, bo)) == null || s.remove(), f(this, bo, null);
        break;
    }
  }
  async addButton(t, e) {
    switch (t) {
      case "colorPicker":
        this.addColorPicker(e);
        break;
      case "altText":
        await this.addAltText(e);
        break;
      case "editSignature":
        await this.addEditSignatureButton(e);
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        this.addComment(e);
        break;
    }
  }
  async addButtonBefore(t, e, s) {
    const i = n(this, Cs).querySelector(s);
    i && t === "comment" && this.addComment(e, i);
  }
  updateEditSignatureButton(t) {
    n(this, yo) && (n(this, yo).title = t);
  }
  remove() {
    var t;
    n(this, Rn).remove(), (t = n(this, Mn)) == null || t.destroy(), f(this, Mn, null);
  }
};
Rn = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), _s = /* @__PURE__ */ new WeakMap(), Cs = /* @__PURE__ */ new WeakMap(), kh = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap(), Rh = /* @__PURE__ */ new WeakMap(), yu = /* @__PURE__ */ new WeakSet(), im = function(t) {
  t.stopPropagation();
}, we = /* @__PURE__ */ new WeakSet(), nm = function(t) {
  n(this, _s)._focusEventsAllowed = false, Nt(t);
}, rm = function(t) {
  n(this, _s)._focusEventsAllowed = true, Nt(t);
}, eo = function(t) {
  const e = n(this, _s)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? false : (t.addEventListener("focusin", b(this, we, nm).bind(this), { capture: true, signal: e }), t.addEventListener("focusout", b(this, we, rm).bind(this), { capture: true, signal: e }), t.addEventListener("contextmenu", vs, { signal: e }), true);
}, Zl = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, g(Bi, yu), g(Bi, Rh, null);
let cf = Bi;
var Mh, Nr, Ui, Cn, am, om, df;
class sA {
  constructor(t) {
    g(this, Cn);
    g(this, Mh, null);
    g(this, Nr, null);
    g(this, Ui);
    f(this, Ui, t);
  }
  show(t, e, s) {
    const [i, r] = b(this, Cn, om).call(this, e, s), { style: a } = n(this, Nr) || f(this, Nr, b(this, Cn, am).call(this));
    t.append(n(this, Nr)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    n(this, Nr).remove();
  }
}
Mh = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakSet(), am = function() {
  const t = f(this, Nr, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar");
  const e = n(this, Ui)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", vs, { signal: e });
  const s = f(this, Mh, document.createElement("div"));
  return s.className = "buttons", t.append(s), n(this, Ui).hasCommentManager() && b(this, Cn, df).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
    n(this, Ui).commentSelection("floating_button");
  }), b(this, Cn, df).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
    n(this, Ui).highlightSelection("floating_button");
  }), t;
}, om = function(t, e) {
  let s = 0, i = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < s) continue;
    const o = r.x + (e ? r.width : 0);
    if (a > s) {
      i = o, s = a;
      continue;
    }
    e ? o > i && (i = o) : o < i && (i = o);
  }
  return [e ? 1 - i : i, s];
}, df = function(t, e, s, i) {
  const r = document.createElement("button");
  r.classList.add("basic", t), r.tabIndex = 0, r.setAttribute("data-l10n-id", e);
  const a = document.createElement("span");
  r.append(a), a.className = "visuallyHidden", a.setAttribute("data-l10n-id", s);
  const o = n(this, Ui)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener("contextmenu", vs, { signal: o }), r.addEventListener("click", i, { signal: o })), n(this, Mh).append(r);
};
function lm(d, t, e) {
  for (const s of e) t.addEventListener(s, d[s].bind(d));
}
var Au;
class iA {
  constructor() {
    g(this, Au, 0);
  }
  get id() {
    return `${wh}${Kt(this, Au)._++}`;
  }
}
Au = /* @__PURE__ */ new WeakMap();
var Ao, Dh, _e, wo, kd;
const Jp = class Jp2 {
  constructor() {
    g(this, wo);
    g(this, Ao, Op());
    g(this, Dh, 0);
    g(this, _e, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", { willReadFrequently: true }), i = new Image();
    i.src = t;
    const r = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return Q(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const { lastModified: e, name: s, size: i, type: r } = t;
    return b(this, wo, kd).call(this, `${e}_${s}_${i}_${r}`, t);
  }
  async getFromUrl(t) {
    return b(this, wo, kd).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return b(this, wo, kd).call(this, t, s);
  }
  async getFromId(t) {
    n(this, _e) || f(this, _e, /* @__PURE__ */ new Map());
    const e = n(this, _e).get(t);
    if (!e) return null;
    if (e.bitmap) return e.refCounter += 1, e;
    if (e.file) return this.getFromFile(e.file);
    if (e.blobPromise) {
      const { blobPromise: s } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, s);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    n(this, _e) || f(this, _e, /* @__PURE__ */ new Map());
    let s = n(this, _e).get(t);
    if (s != null && s.bitmap) return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = { bitmap: i.transferToImageBitmap(), id: `image_${n(this, Ao)}_${Kt(this, Dh)._++}`, refCounter: 1, isSvg: false }, n(this, _e).set(t, s), n(this, _e).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = n(this, _e).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    n(this, _e) || f(this, _e, /* @__PURE__ */ new Map());
    const e = n(this, _e).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0)) return;
    const { bitmap: s } = e;
    if (!e.url && !e.file) {
      const r = new OffscreenCanvas(s.width, s.height);
      r.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = r.convertToBlob();
    }
    (i = s.close) == null || i.call(s), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${n(this, Ao)}_`);
  }
};
Ao = /* @__PURE__ */ new WeakMap(), Dh = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakSet(), kd = async function(t, e) {
  n(this, _e) || f(this, _e, /* @__PURE__ */ new Map());
  let s = n(this, _e).get(t);
  if (s === null) return null;
  if (s != null && s.bitmap) return s.refCounter += 1, s;
  try {
    s || (s = { bitmap: null, id: `image_${n(this, Ao)}_${Kt(this, Dh)._++}`, refCounter: 0, isSvg: false });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await Wl(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const r = Jp._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, c) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = true, h();
        }, a.onload = async () => {
          const u = s.svgUrl = a.result;
          o.src = await r ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, o.onerror = a.onerror = c;
      });
      a.readAsDataURL(i), await l;
    } else s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    Y(i), s = null;
  }
  return n(this, _e).set(t, s), s && n(this, _e).set(s.id, s), s;
};
let uf = Jp;
var Gt, Ln, Lh, It;
class nA {
  constructor(t = 128) {
    g(this, Gt, []);
    g(this, Ln, false);
    g(this, Lh);
    g(this, It, -1);
    f(this, Lh, t);
  }
  add({ cmd: t, undo: e, post: s, mustExec: i, type: r = NaN, overwriteIfSameType: a = false, keepUndo: o = false }) {
    if (i && t(), n(this, Ln)) return;
    const l = { cmd: t, undo: e, post: s, type: r };
    if (n(this, It) === -1) {
      n(this, Gt).length > 0 && (n(this, Gt).length = 0), f(this, It, 0), n(this, Gt).push(l);
      return;
    }
    if (a && n(this, Gt)[n(this, It)].type === r) {
      o && (l.undo = n(this, Gt)[n(this, It)].undo), n(this, Gt)[n(this, It)] = l;
      return;
    }
    const h = n(this, It) + 1;
    h === n(this, Lh) ? n(this, Gt).splice(0, 1) : (f(this, It, h), h < n(this, Gt).length && n(this, Gt).splice(h)), n(this, Gt).push(l);
  }
  undo() {
    if (n(this, It) === -1) return;
    f(this, Ln, true);
    const { undo: t, post: e } = n(this, Gt)[n(this, It)];
    t(), e == null || e(), f(this, Ln, false), f(this, It, n(this, It) - 1);
  }
  redo() {
    if (n(this, It) < n(this, Gt).length - 1) {
      f(this, It, n(this, It) + 1), f(this, Ln, true);
      const { cmd: t, post: e } = n(this, Gt)[n(this, It)];
      t(), e == null || e(), f(this, Ln, false);
    }
  }
  hasSomethingToUndo() {
    return n(this, It) !== -1;
  }
  hasSomethingToRedo() {
    return n(this, It) < n(this, Gt).length - 1;
  }
  cleanType(t) {
    if (n(this, It) !== -1) {
      for (let e = n(this, It); e >= 0; e--) if (n(this, Gt)[e].type !== t) {
        n(this, Gt).splice(e + 1, n(this, It) - e), f(this, It, e);
        return;
      }
      n(this, Gt).length = 0, f(this, It, -1);
    }
  }
  destroy() {
    f(this, Gt, null);
  }
}
Gt = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Lh = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap();
var wu, hm;
class ud {
  constructor(t) {
    g(this, wu);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const { isMac: e } = ce.platform;
    for (const [s, i, r = {}] of t) for (const a of s) {
      const o = a.startsWith("mac+");
      e && o ? (this.callbacks.set(a.slice(4), { callback: i, options: r }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, { callback: i, options: r }), this.allKeys.add(a.split("+").at(-1)));
    }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key)) return;
    const s = this.callbacks.get(b(this, wu, hm).call(this, e));
    if (!s) return;
    const { callback: i, options: { bubbles: r = false, args: a = [], checker: o = null } } = s;
    o && !o(t, e) || (i.bind(t, ...a, e)(), r || Nt(e));
  }
}
wu = /* @__PURE__ */ new WeakSet(), hm = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const vu = class vu2 {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return tA(t), Q(this, "_colors", t);
  }
  convert(t) {
    const e = Xl(t);
    if (!window.matchMedia("(forced-colors: active)").matches) return e;
    for (const [s, i] of this._colors) if (i.every((r, a) => r === e[a])) return vu2._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? $.makeHexColor(...e) : t;
  }
};
R(vu, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let ff = vu;
var vo, ts, Eo, Bt, Qt, So, xs, _o, Ts, Ce, In, Fn, Co, Nn, li, Ps, Or, Ih, Fh, xo, Nh, hi, On, To, Bn, ci, Eu, Hn, Po, Oh, Un, Br, ko, jn, Bh, Xt, ut, ji, $n, zn, Hh, Ro, Uh, Gn, di, $i, jh, $h, ks, I, Rd, pf, cm, dm, th, um, fm, pm, gf, gm, mf, bf, mm, Le, Ni, bm, ym, yf, Am, eh, Af;
const ho = class ho2 {
  constructor(t, e, s, i, r, a, o, l, h, c, u, p, m, A, y, v) {
    g(this, I);
    g(this, vo, new AbortController());
    g(this, ts, null);
    g(this, Eo, null);
    g(this, Bt, /* @__PURE__ */ new Map());
    g(this, Qt, /* @__PURE__ */ new Map());
    g(this, So, null);
    g(this, xs, null);
    g(this, _o, null);
    g(this, Ts, new nA());
    g(this, Ce, null);
    g(this, In, null);
    g(this, Fn, null);
    g(this, Co, 0);
    g(this, Nn, /* @__PURE__ */ new Set());
    g(this, li, null);
    g(this, Ps, null);
    g(this, Or, /* @__PURE__ */ new Set());
    R(this, "_editorUndoBar", null);
    g(this, Ih, false);
    g(this, Fh, false);
    g(this, xo, false);
    g(this, Nh, null);
    g(this, hi, null);
    g(this, On, null);
    g(this, To, null);
    g(this, Bn, false);
    g(this, ci, null);
    g(this, Eu, new iA());
    g(this, Hn, false);
    g(this, Po, false);
    g(this, Oh, false);
    g(this, Un, null);
    g(this, Br, null);
    g(this, ko, null);
    g(this, jn, null);
    g(this, Bh, null);
    g(this, Xt, q.NONE);
    g(this, ut, /* @__PURE__ */ new Set());
    g(this, ji, null);
    g(this, $n, null);
    g(this, zn, null);
    g(this, Hh, null);
    g(this, Ro, null);
    g(this, Uh, { isEditing: false, isEmpty: true, hasSomethingToUndo: false, hasSomethingToRedo: false, hasSelectedEditor: false, hasSelectedText: false });
    g(this, Gn, [0, 0]);
    g(this, di, null);
    g(this, $i, null);
    g(this, jh, null);
    g(this, $h, null);
    g(this, ks, null);
    const w = this._signal = n(this, vo).signal;
    f(this, $i, t), f(this, jh, e), f(this, $h, s), f(this, So, i), f(this, Ce, r), f(this, $n, a), f(this, Ro, l), this._eventBus = o, o._on("editingaction", this.onEditingAction.bind(this), { signal: w }), o._on("pagechanging", this.onPageChanging.bind(this), { signal: w }), o._on("scalechanging", this.onScaleChanging.bind(this), { signal: w }), o._on("rotationchanging", this.onRotationChanging.bind(this), { signal: w }), o._on("setpreference", this.onSetPreference.bind(this), { signal: w }), o._on("switchannotationeditorparams", (S) => this.updateParams(S.type, S.value), { signal: w }), window.addEventListener("pointerdown", () => {
      f(this, Po, true);
    }, { capture: true, signal: w }), window.addEventListener("pointerup", () => {
      f(this, Po, false);
    }, { capture: true, signal: w }), b(this, I, um).call(this), b(this, I, mm).call(this), b(this, I, gf).call(this), f(this, xs, l.annotationStorage), f(this, Nh, l.filterFactory), f(this, zn, h), f(this, To, c || null), f(this, Ih, u), f(this, Fh, p), f(this, xo, m), f(this, Bh, A || null), this.viewParameters = { realScale: _n.PDF_TO_CSS_UNITS, rotation: 0 }, this.isShiftKeyDown = false, this._editorUndoBar = y || null, this._supportsPinchToZoom = v !== false, r == null || r.setSidebarUiManager(this);
  }
  static get _keyboardManager() {
    const t = ho2.prototype, e = (a) => n(a, $i).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, { target: o }) => {
      if (o instanceof HTMLInputElement) {
        const { type: l } = o;
        return l !== "text" && l !== "number";
      }
      return true;
    }, i = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
    return Q(this, "_keyboardManager", new ud([[["ctrl+a", "mac+meta+a"], t.selectAll, { checker: s }], [["ctrl+z", "mac+meta+z"], t.undo, { checker: s }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, { checker: s }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, { checker: s }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, { checker: (a, { target: o }) => !(o instanceof HTMLButtonElement) && n(a, $i).contains(o) && !a.isEnterHandled }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, { checker: (a, { target: o }) => !(o instanceof HTMLButtonElement) && n(a, $i).contains(document.activeElement) }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, { args: [-i, 0], checker: e }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, { args: [-r, 0], checker: e }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, { args: [i, 0], checker: e }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, { args: [r, 0], checker: e }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, { args: [0, -i], checker: e }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, { args: [0, -r], checker: e }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, { args: [0, i], checker: e }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, { args: [0, r], checker: e }]]));
  }
  destroy() {
    var t, e, s, i, r, a, o, l, h;
    (t = n(this, ks)) == null || t.resolve(), f(this, ks, null), (e = n(this, vo)) == null || e.abort(), f(this, vo, null), this._signal = null;
    for (const c of n(this, Qt).values()) c.destroy();
    n(this, Qt).clear(), n(this, Bt).clear(), n(this, Or).clear(), (s = n(this, jn)) == null || s.clear(), f(this, ts, null), n(this, ut).clear(), n(this, Ts).destroy(), (i = n(this, So)) == null || i.destroy(), (r = n(this, Ce)) == null || r.destroy(), (a = n(this, $n)) == null || a.destroy(), (o = n(this, ci)) == null || o.hide(), f(this, ci, null), (l = n(this, ko)) == null || l.destroy(), f(this, ko, null), f(this, Eo, null), n(this, hi) && (clearTimeout(n(this, hi)), f(this, hi, null)), n(this, di) && (clearTimeout(n(this, di)), f(this, di, null)), (h = this._editorUndoBar) == null || h.destroy(), f(this, Ro, null);
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return n(this, Bh);
  }
  get useNewAltTextFlow() {
    return n(this, Fh);
  }
  get useNewAltTextWhenAddingImage() {
    return n(this, xo);
  }
  get hcmFilter() {
    return Q(this, "hcmFilter", n(this, zn) ? n(this, Nh).addHCMFilter(n(this, zn).foreground, n(this, zn).background) : "none");
  }
  get direction() {
    return Q(this, "direction", getComputedStyle(n(this, $i)).direction);
  }
  get _highlightColors() {
    return Q(this, "_highlightColors", n(this, To) ? new Map(n(this, To).split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }
  get highlightColors() {
    const { _highlightColors: t } = this;
    if (!t) return Q(this, "highlightColors", null);
    const e = /* @__PURE__ */ new Map(), s = !!n(this, zn);
    for (const [i, r] of t) {
      const a = i.endsWith("_HCM");
      if (s && a) {
        e.set(i.replace("_HCM", ""), r);
        continue;
      }
      !s && !a && e.set(i, r);
    }
    return Q(this, "highlightColors", e);
  }
  get highlightColorNames() {
    return Q(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  getNonHCMColor(t) {
    if (!this._highlightColors) return t;
    const e = this.highlightColorNames.get(t);
    return this._highlightColors.get(e) || t;
  }
  getNonHCMColorName(t) {
    return this.highlightColorNames.get(t) || t;
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(true)) : this.disableUserSelect(false), f(this, Fn, t);
  }
  setMainHighlightColorPicker(t) {
    f(this, ko, t);
  }
  editAltText(t, e = false) {
    var s;
    (s = n(this, So)) == null || s.editAltText(this, t, e);
  }
  hasCommentManager() {
    return !!n(this, Ce);
  }
  editComment(t, e, s, i) {
    var r;
    (r = n(this, Ce)) == null || r.showDialog(this, t, e, s, i);
  }
  selectComment(t, e) {
    const s = n(this, Qt).get(t), i = s == null ? void 0 : s.getEditorByUID(e);
    i == null || i.toggleComment(true, true);
  }
  updateComment(t) {
    var e;
    (e = n(this, Ce)) == null || e.updateComment(t.getData());
  }
  updatePopupColor(t) {
    var e;
    (e = n(this, Ce)) == null || e.updatePopupColor(t);
  }
  removeComment(t) {
    var e;
    (e = n(this, Ce)) == null || e.removeComments([t.uid]);
  }
  toggleComment(t, e, s = void 0) {
    var i;
    (i = n(this, Ce)) == null || i.toggleCommentPopup(t, e, s);
  }
  makeCommentColor(t, e) {
    var s;
    return t && ((s = n(this, Ce)) == null ? void 0 : s.makeCommentColor(t, e)) || null;
  }
  getCommentDialogElement() {
    var t;
    return ((t = n(this, Ce)) == null ? void 0 : t.dialogElement) || null;
  }
  async waitForEditorsRendered(t) {
    if (n(this, Qt).has(t - 1)) return;
    const { resolve: e, promise: s } = Promise.withResolvers(), i = (r) => {
      r.pageNumber === t && (this._eventBus._off("editorsrendered", i), e());
    };
    this._eventBus.on("editorsrendered", i), await s;
  }
  getSignature(t) {
    var e;
    (e = n(this, $n)) == null || e.getSignature({ uiManager: this, editor: t });
  }
  get signatureManager() {
    return n(this, $n);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, { once: true, signal: this._signal }), this._eventBus.dispatch("showannotationeditorui", { source: this, mode: t });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", { source: this, name: t, value: e });
  }
  onSetPreference({ name: t, value: e }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        f(this, xo, e);
        break;
    }
  }
  onPageChanging({ pageNumber: t }) {
    f(this, Co, t - 1);
  }
  focusMainContainer() {
    n(this, $i).focus();
  }
  findParent(t, e) {
    for (const s of n(this, Qt).values()) {
      const { x: i, y: r, width: a, height: o } = s.div.getBoundingClientRect();
      if (t >= i && t <= i + a && e >= r && e <= r + o) return s;
    }
    return null;
  }
  disableUserSelect(t = false) {
    n(this, jh).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    n(this, Or).add(t);
  }
  removeShouldRescale(t) {
    n(this, Or).delete(t);
  }
  onScaleChanging({ scale: t }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * _n.PDF_TO_CSS_UNITS;
    for (const s of n(this, Or)) s.onScaleChanging();
    (e = n(this, Fn)) == null || e.onScaleChanging();
  }
  onRotationChanging({ pagesRotation: t }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "", e = false) {
    const s = document.getSelection();
    if (!s || s.isCollapsed) return;
    const { anchorNode: i, anchorOffset: r, focusNode: a, focusOffset: o } = s, l = s.toString(), c = b(this, I, Rd).call(this, s).closest(".textLayer"), u = this.getSelectionBoxes(c);
    if (!u) return;
    s.empty();
    const p = b(this, I, pf).call(this, c), m = n(this, Xt) === q.NONE, A = () => {
      const y = p == null ? void 0 : p.createAndAddNewEditor({ x: 0, y: 0 }, false, { methodOfCreation: t, boxes: u, anchorNode: i, anchorOffset: r, focusNode: a, focusOffset: o, text: l });
      m && this.showAllEditors("highlight", true, true), e && (y == null || y.editComment());
    };
    if (m) {
      this.switchToMode(q.HIGHLIGHT, A);
      return;
    }
    A();
  }
  commentSelection(t = "") {
    this.highlightSelection(t, true);
  }
  getAndRemoveDataFromAnnotationStorage(t) {
    if (!n(this, xs)) return null;
    const e = `${wh}${t}`, s = n(this, xs).getRawValue(e);
    return s && n(this, xs).remove(e), s;
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, xs) && !n(this, xs).has(t.id) && n(this, xs).setValue(t.id, t);
  }
  a11yAlert(t, e = null) {
    const s = n(this, $h);
    s && (s.setAttribute("data-l10n-id", t), e ? s.setAttribute("data-l10n-args", JSON.stringify(e)) : s.removeAttribute("data-l10n-args"));
  }
  blur() {
    if (this.isShiftKeyDown = false, n(this, Bn) && (f(this, Bn, false), b(this, I, th).call(this, "main_toolbar")), !this.hasSelection) return;
    const { activeElement: t } = document;
    for (const e of n(this, ut)) if (e.div.contains(t)) {
      f(this, Br, [e, t]), e._focusEventsAllowed = false;
      break;
    }
  }
  focus() {
    if (!n(this, Br)) return;
    const [t, e] = n(this, Br);
    f(this, Br, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = true;
    }, { once: true, signal: this._signal }), e.focus();
  }
  addEditListeners() {
    b(this, I, gf).call(this), b(this, I, mf).call(this);
  }
  removeEditListeners() {
    b(this, I, gm).call(this), b(this, I, bf).call(this);
  }
  dragOver(t) {
    for (const { type: e } of t.dataTransfer.items) for (const s of n(this, Ps)) if (s.isHandlingMimeForPasting(e)) {
      t.dataTransfer.dropEffect = "copy", t.preventDefault();
      return;
    }
  }
  drop(t) {
    for (const e of t.dataTransfer.items) for (const s of n(this, Ps)) if (s.isHandlingMimeForPasting(e.type)) {
      s.paste(e, this.currentLayer), t.preventDefault();
      return;
    }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = n(this, ts)) == null || s.commitOrRemove(), !this.hasSelection) return;
    const e = [];
    for (const i of n(this, ut)) {
      const r = i.serialize(true);
      r && e.push(r);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const { clipboardData: e } = t;
    for (const r of e.items) for (const a of n(this, Ps)) if (a.isHandlingMimeForPasting(r.type)) {
      a.paste(r, this.currentLayer);
      return;
    }
    let s = e.getData("application/pdfjs");
    if (!s) return;
    try {
      s = JSON.parse(s);
    } catch (r) {
      Y(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(s)) return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const r = [];
      for (const l of s) {
        const h = await i.deserialize(l);
        if (!h) return;
        r.push(h);
      }
      const a = () => {
        for (const l of r) b(this, I, yf).call(this, l);
        b(this, I, Af).call(this, r);
      }, o = () => {
        for (const l of r) l.remove();
      };
      this.addCommands({ cmd: a, undo: o, mustExec: true });
    } catch (r) {
      Y(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = true), n(this, Xt) !== q.NONE && !this.isEditorHandlingKeyboard && ho2._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = false, n(this, Bn) && (f(this, Bn, false), b(this, I, th).call(this, "main_toolbar")));
  }
  onEditingAction({ name: t }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (b(this, I, fm).call(this), b(this, I, mf).call(this), b(this, I, Le).call(this, { isEditing: n(this, Xt) !== q.NONE, isEmpty: b(this, I, eh).call(this), hasSomethingToUndo: n(this, Ts).hasSomethingToUndo(), hasSomethingToRedo: n(this, Ts).hasSomethingToRedo(), hasSelectedEditor: false })) : (b(this, I, pm).call(this), b(this, I, bf).call(this), b(this, I, Le).call(this, { isEditing: false }), this.disableUserSelect(false));
  }
  registerEditorTypes(t) {
    if (!n(this, Ps)) {
      f(this, Ps, t);
      for (const e of n(this, Ps)) b(this, I, Ni).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return n(this, Eu).id;
  }
  get currentLayer() {
    return n(this, Qt).get(n(this, Co));
  }
  getLayer(t) {
    return n(this, Qt).get(t);
  }
  get currentPageIndex() {
    return n(this, Co);
  }
  addLayer(t) {
    n(this, Qt).set(t.pageIndex, t), n(this, Hn) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    n(this, Qt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = false, i = false, r = false) {
    var a, o, l, h, c, u;
    if (n(this, Xt) !== t && !(n(this, ks) && (await n(this, ks).promise, !n(this, ks)))) {
      if (f(this, ks, Promise.withResolvers()), (a = n(this, Fn)) == null || a.commitOrRemove(), n(this, Xt) === q.POPUP && ((o = n(this, Ce)) == null || o.hideSidebar()), (l = n(this, Ce)) == null || l.destroyPopup(), f(this, Xt, t), t === q.NONE) {
        this.setEditingState(false), b(this, I, ym).call(this);
        for (const p of n(this, Bt).values()) p.hideStandaloneCommentButton();
        (h = this._editorUndoBar) == null || h.hide(), this.toggleComment(null), n(this, ks).resolve();
        return;
      }
      for (const p of n(this, Bt).values()) p.addStandaloneCommentButton();
      t === q.SIGNATURE && await ((c = n(this, $n)) == null ? void 0 : c.loadSignatures()), this.setEditingState(true), await b(this, I, bm).call(this), this.unselectAll();
      for (const p of n(this, Qt).values()) p.updateMode(t);
      if (t === q.POPUP) {
        n(this, Eo) || f(this, Eo, await n(this, Ro).getAnnotationsByType(new Set(n(this, Ps).map((A) => A._editorType))));
        const p = /* @__PURE__ */ new Set(), m = [];
        for (const A of n(this, Bt).values()) {
          const { annotationElementId: y, hasComment: v, deleted: w } = A;
          y && p.add(y), v && !w && m.push(A.getData());
        }
        for (const A of n(this, Eo)) {
          const { id: y, popupRef: v, contentsObj: w } = A;
          v && (w != null && w.str) && !p.has(y) && !n(this, Nn).has(y) && m.push(A);
        }
        (u = n(this, Ce)) == null || u.showSidebar(m);
      }
      if (!e) {
        s && this.addNewEditorFromKeyboard(), n(this, ks).resolve();
        return;
      }
      for (const p of n(this, Bt).values()) p.uid === e ? (this.setSelected(p), r ? p.editComment() : i ? p.enterInEditMode() : p.focus()) : p.unselect();
      n(this, ks).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t.mode !== n(this, Xt) && this._eventBus.dispatch("switchannotationeditormode", { source: this, ...t });
  }
  updateParams(t, e) {
    if (n(this, Ps)) {
      switch (t) {
        case it.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case it.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } } }), (n(this, Hh) || f(this, Hh, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      if (this.hasSelection) for (const s of n(this, ut)) s.updateParams(t, e);
      else for (const s of n(this, Ps)) s.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = false) {
    var r;
    for (const a of n(this, Bt).values()) a.editorType === t && a.show(e);
    (((r = n(this, Hh)) == null ? void 0 : r.get(it.HIGHLIGHT_SHOW_ALL)) ?? true) !== e && b(this, I, Ni).call(this, [[it.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = false) {
    if (n(this, Oh) !== t) {
      f(this, Oh, t);
      for (const e of n(this, Qt).values()) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  *getEditors(t) {
    for (const e of n(this, Bt).values()) e.pageIndex === t && (yield e);
  }
  getEditor(t) {
    return n(this, Bt).get(t);
  }
  addEditor(t) {
    n(this, Bt).set(t.id, t);
  }
  removeEditor(t) {
    var e, s;
    t.div.contains(document.activeElement) && (n(this, hi) && clearTimeout(n(this, hi)), f(this, hi, setTimeout(() => {
      this.focusMainContainer(), f(this, hi, null);
    }, 0))), n(this, Bt).delete(t.id), t.annotationElementId && ((e = n(this, jn)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, Nn).has(t.annotationElementId)) && ((s = n(this, xs)) == null || s.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    n(this, Nn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = true;
  }
  isDeletedAnnotationElement(t) {
    return n(this, Nn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    n(this, Nn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = false;
  }
  setActiveEditor(t) {
    n(this, ts) !== t && (f(this, ts, t), t && b(this, I, Ni).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    n(this, I, Am) === t && b(this, I, Ni).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    b(this, I, Ni).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (n(this, ut).has(t)) {
      n(this, ut).delete(t), t.unselect(), b(this, I, Le).call(this, { hasSelectedEditor: this.hasSelection });
      return;
    }
    n(this, ut).add(t), t.select(), b(this, I, Ni).call(this, t.propertiesToUpdate), b(this, I, Le).call(this, { hasSelectedEditor: true });
  }
  setSelected(t) {
    var e;
    this.updateToolbar({ mode: t.mode, editId: t.id }), (e = n(this, Fn)) == null || e.commitOrRemove();
    for (const s of n(this, ut)) s !== t && s.unselect();
    n(this, ut).clear(), n(this, ut).add(t), t.select(), b(this, I, Ni).call(this, t.propertiesToUpdate), b(this, I, Le).call(this, { hasSelectedEditor: true });
  }
  isSelected(t) {
    return n(this, ut).has(t);
  }
  get firstSelectedEditor() {
    return n(this, ut).values().next().value;
  }
  unselect(t) {
    t.unselect(), n(this, ut).delete(t), b(this, I, Le).call(this, { hasSelectedEditor: this.hasSelection });
  }
  get hasSelection() {
    return n(this, ut).size !== 0;
  }
  get isEnterHandled() {
    return n(this, ut).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    n(this, Ts).undo(), b(this, I, Le).call(this, { hasSomethingToUndo: n(this, Ts).hasSomethingToUndo(), hasSomethingToRedo: true, isEmpty: b(this, I, eh).call(this) }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    n(this, Ts).redo(), b(this, I, Le).call(this, { hasSomethingToUndo: true, hasSomethingToRedo: n(this, Ts).hasSomethingToRedo(), isEmpty: b(this, I, eh).call(this) });
  }
  addCommands(t) {
    n(this, Ts).add(t), b(this, I, Le).call(this, { hasSomethingToUndo: true, hasSomethingToRedo: false, isEmpty: b(this, I, eh).call(this) });
  }
  cleanUndoStack(t) {
    n(this, Ts).cleanType(t);
  }
  delete() {
    var r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(true);
    if (!this.hasSelection && !t) return;
    const e = t ? [t] : [...n(this, ut)], s = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e) o.remove();
    }, i = () => {
      for (const a of e) b(this, I, yf).call(this, a);
    };
    this.addCommands({ cmd: s, undo: i, mustExec: true });
  }
  commitOrRemove() {
    var t;
    (t = n(this, ts)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return n(this, ts) || this.hasSelection;
  }
  selectAll() {
    for (const t of n(this, ut)) t.commit();
    b(this, I, Af).call(this, n(this, Bt).values());
  }
  unselectAll() {
    var t;
    if (!(n(this, ts) && (n(this, ts).commitOrRemove(), n(this, Xt) !== q.NONE)) && !((t = n(this, Fn)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, ut)) e.unselect();
      n(this, ut).clear(), b(this, I, Le).call(this, { hasSelectedEditor: false });
    }
  }
  translateSelectedEditors(t, e, s = false) {
    if (s || this.commitOrRemove(), !this.hasSelection) return;
    n(this, Gn)[0] += t, n(this, Gn)[1] += e;
    const [i, r] = n(this, Gn), a = [...n(this, ut)], o = 1e3;
    n(this, di) && clearTimeout(n(this, di)), f(this, di, setTimeout(() => {
      f(this, di, null), n(this, Gn)[0] = n(this, Gn)[1] = 0, this.addCommands({ cmd: () => {
        for (const l of a) n(this, Bt).has(l.id) && (l.translateInPage(i, r), l.translationDone());
      }, undo: () => {
        for (const l of a) n(this, Bt).has(l.id) && (l.translateInPage(-i, -r), l.translationDone());
      }, mustExec: false });
    }, o));
    for (const l of a) l.translateInPage(t, e), l.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(true), f(this, li, /* @__PURE__ */ new Map());
      for (const t of n(this, ut)) n(this, li).set(t, { savedX: t.x, savedY: t.y, savedPageIndex: t.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
    }
  }
  endDragSession() {
    if (!n(this, li)) return false;
    this.disableUserSelect(false);
    const t = n(this, li);
    f(this, li, null);
    let e = false;
    for (const [{ x: i, y: r, pageIndex: a }, o] of t) o.newX = i, o.newY = r, o.newPageIndex = a, e || (e = i !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e) return false;
    const s = (i, r, a, o) => {
      if (n(this, Bt).has(i.id)) {
        const l = n(this, Qt).get(o);
        l ? i._setParentAndPosition(l, r, a) : (i.pageIndex = o, i.x = r, i.y = a);
      }
    };
    return this.addCommands({ cmd: () => {
      for (const [i, { newX: r, newY: a, newPageIndex: o }] of t) s(i, r, a, o);
    }, undo: () => {
      for (const [i, { savedX: r, savedY: a, savedPageIndex: o }] of t) s(i, r, a, o);
    }, mustExec: true }), true;
  }
  dragSelectedEditors(t, e) {
    if (n(this, li)) for (const s of n(this, li).keys()) s.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || n(this, ut).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return n(this, ts) === t;
  }
  getActive() {
    return n(this, ts);
  }
  getMode() {
    return n(this, Xt);
  }
  isEditingMode() {
    return n(this, Xt) !== q.NONE;
  }
  get imageManager() {
    return Q(this, "imageManager", new uf());
  }
  getSelectionBoxes(t) {
    if (!t) return null;
    const e = document.getSelection();
    for (let h = 0, c = e.rangeCount; h < c; h++) if (!t.contains(e.getRangeAt(h).commonAncestorContainer)) return null;
    const { x: s, y: i, width: r, height: a } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (h, c, u, p) => ({ x: (c - i) / a, y: 1 - (h + u - s) / r, width: p / a, height: u / r });
        break;
      case "180":
        o = (h, c, u, p) => ({ x: 1 - (h + u - s) / r, y: 1 - (c + p - i) / a, width: u / r, height: p / a });
        break;
      case "270":
        o = (h, c, u, p) => ({ x: 1 - (c + p - i) / a, y: (h - s) / r, width: p / a, height: u / r });
        break;
      default:
        o = (h, c, u, p) => ({ x: (h - s) / r, y: (c - i) / a, width: u / r, height: p / a });
        break;
    }
    const l = [];
    for (let h = 0, c = e.rangeCount; h < c; h++) {
      const u = e.getRangeAt(h);
      if (!u.collapsed) for (const { x: p, y: m, width: A, height: y } of u.getClientRects()) A === 0 || y === 0 || l.push(o(p, m, A, y));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({ annotationElementId: t, id: e }) {
    (n(this, _o) || f(this, _o, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({ annotationElementId: t }) {
    var e;
    (e = n(this, _o)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = n(this, _o)) == null ? void 0 : i.get(t.data.id);
    if (!e) return;
    const s = n(this, xs).getRawValue(e);
    s && (n(this, Xt) === q.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, s) {
    var r;
    const i = (r = n(this, jn)) == null ? void 0 : r.get(t);
    i && (i.setCanvas(e, s), n(this, jn).delete(t));
  }
  addMissingCanvas(t, e) {
    (n(this, jn) || f(this, jn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
vo = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ new WeakMap(), xs = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), Ps = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Ih = /* @__PURE__ */ new WeakMap(), Fh = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap(), Nh = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), Eu = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Oh = /* @__PURE__ */ new WeakMap(), Un = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Bh = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), Hh = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), Uh = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap(), jh = /* @__PURE__ */ new WeakMap(), $h = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakSet(), Rd = function({ anchorNode: t }) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, pf = function(t) {
  const { currentLayer: e } = this;
  if (e.hasTextLayer(t)) return e;
  for (const s of n(this, Qt).values()) if (s.hasTextLayer(t)) return s;
  return null;
}, cm = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed) return;
  const s = b(this, I, Rd).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (n(this, ci) || f(this, ci, new sA(this)), n(this, ci).show(s, i, this.direction === "ltr"));
}, dm = function() {
  var r, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, ji) && ((r = n(this, ci)) == null || r.hide(), f(this, ji, null), b(this, I, Le).call(this, { hasSelectedText: false }));
    return;
  }
  const { anchorNode: e } = t;
  if (e === n(this, ji)) return;
  const i = b(this, I, Rd).call(this, t).closest(".textLayer");
  if (!i) {
    n(this, ji) && ((a = n(this, ci)) == null || a.hide(), f(this, ji, null), b(this, I, Le).call(this, { hasSelectedText: false }));
    return;
  }
  if ((o = n(this, ci)) == null || o.hide(), f(this, ji, e), b(this, I, Le).call(this, { hasSelectedText: true }), !(n(this, Xt) !== q.HIGHLIGHT && n(this, Xt) !== q.NONE) && (n(this, Xt) === q.HIGHLIGHT && this.showAllEditors("highlight", true, true), f(this, Bn, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, Xt) === q.HIGHLIGHT ? b(this, I, pf).call(this, i) : null;
    if (l == null || l.toggleDrawing(), n(this, Po)) {
      const h = new AbortController(), c = this.combinedSignal(h), u = (p) => {
        p.type === "pointerup" && p.button !== 0 || (h.abort(), l == null || l.toggleDrawing(true), p.type === "pointerup" && b(this, I, th).call(this, "main_toolbar"));
      };
      window.addEventListener("pointerup", u, { signal: c }), window.addEventListener("blur", u, { signal: c });
    } else l == null || l.toggleDrawing(true), b(this, I, th).call(this, "main_toolbar");
  }
}, th = function(t = "") {
  n(this, Xt) === q.HIGHLIGHT ? this.highlightSelection(t) : n(this, Ih) && b(this, I, cm).call(this);
}, um = function() {
  document.addEventListener("selectionchange", b(this, I, dm).bind(this), { signal: this._signal });
}, fm = function() {
  if (n(this, On)) return;
  f(this, On, new AbortController());
  const t = this.combinedSignal(n(this, On));
  window.addEventListener("focus", this.focus.bind(this), { signal: t }), window.addEventListener("blur", this.blur.bind(this), { signal: t });
}, pm = function() {
  var t;
  (t = n(this, On)) == null || t.abort(), f(this, On, null);
}, gf = function() {
  if (n(this, Un)) return;
  f(this, Un, new AbortController());
  const t = this.combinedSignal(n(this, Un));
  window.addEventListener("keydown", this.keydown.bind(this), { signal: t }), window.addEventListener("keyup", this.keyup.bind(this), { signal: t });
}, gm = function() {
  var t;
  (t = n(this, Un)) == null || t.abort(), f(this, Un, null);
}, mf = function() {
  if (n(this, In)) return;
  f(this, In, new AbortController());
  const t = this.combinedSignal(n(this, In));
  document.addEventListener("copy", this.copy.bind(this), { signal: t }), document.addEventListener("cut", this.cut.bind(this), { signal: t }), document.addEventListener("paste", this.paste.bind(this), { signal: t });
}, bf = function() {
  var t;
  (t = n(this, In)) == null || t.abort(), f(this, In, null);
}, mm = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), { signal: t }), document.addEventListener("drop", this.drop.bind(this), { signal: t });
}, Le = function(t) {
  Object.entries(t).some(([s, i]) => n(this, Uh)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(n(this, Uh), t) }), n(this, Xt) === q.HIGHLIGHT && t.hasSelectedEditor === false && b(this, I, Ni).call(this, [[it.HIGHLIGHT_FREE, true]]));
}, Ni = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t });
}, bm = async function() {
  if (!n(this, Hn)) {
    f(this, Hn, true);
    const t = [];
    for (const e of n(this, Qt).values()) t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Bt).values()) e.enable();
  }
}, ym = function() {
  if (this.unselectAll(), n(this, Hn)) {
    f(this, Hn, false);
    for (const t of n(this, Qt).values()) t.disable();
    for (const t of n(this, Bt).values()) t.disable();
  }
}, yf = function(t) {
  const e = n(this, Qt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Am = function() {
  let t = null;
  for (t of n(this, ut)) ;
  return t;
}, eh = function() {
  if (n(this, Bt).size === 0) return true;
  if (n(this, Bt).size === 1) for (const t of n(this, Bt).values()) return t.isEmpty();
  return false;
}, Af = function(t) {
  for (const e of n(this, ut)) e.unselect();
  n(this, ut).clear();
  for (const e of t) e.isEmpty() || (n(this, ut).add(e), e.select());
  b(this, I, Le).call(this, { hasSelectedEditor: this.hasSelection });
}, R(ho, "TRANSLATE_SMALL", 1), R(ho, "TRANSLATE_BIG", 10);
let Cr = ho;
var ie, ui, zs, Mo, fi, es, Do, pi, ze, zi, Hr, gi, Vn, ei, sh, Md;
const Ie = class Ie2 {
  constructor(t) {
    g(this, ei);
    g(this, ie, null);
    g(this, ui, false);
    g(this, zs, null);
    g(this, Mo, null);
    g(this, fi, null);
    g(this, es, null);
    g(this, Do, false);
    g(this, pi, null);
    g(this, ze, null);
    g(this, zi, null);
    g(this, Hr, null);
    g(this, gi, false);
    f(this, ze, t), f(this, gi, t._uiManager.useNewAltTextFlow), n(Ie2, Vn) || f(Ie2, Vn, Object.freeze({ added: "pdfjs-editor-new-alt-text-added-button", "added-label": "pdfjs-editor-new-alt-text-added-button-label", missing: "pdfjs-editor-new-alt-text-missing-button", "missing-label": "pdfjs-editor-new-alt-text-missing-button-label", review: "pdfjs-editor-new-alt-text-to-review-button", "review-label": "pdfjs-editor-new-alt-text-to-review-button-label" }));
  }
  static initialize(t) {
    Ie2._l10n ?? (Ie2._l10n = t);
  }
  async render() {
    const t = f(this, zs, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = f(this, Mo, document.createElement("span"));
    t.append(e), n(this, gi) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(Ie2, Vn).missing), e.setAttribute("data-l10n-id", n(Ie2, Vn)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = n(this, ze)._uiManager._signal;
    t.addEventListener("contextmenu", vs, { signal: s }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), { signal: s });
    const i = (r) => {
      r.preventDefault(), n(this, ze)._uiManager.editAltText(n(this, ze)), n(this, gi) && n(this, ze)._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_clicked", data: { label: n(this, ei, sh) } });
    };
    return t.addEventListener("click", i, { capture: true, signal: s }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (f(this, Do, true), i(r));
    }, { signal: s }), await b(this, ei, Md).call(this), t;
  }
  finish() {
    n(this, zs) && (n(this, zs).focus({ focusVisible: n(this, Do) }), f(this, Do, false));
  }
  isEmpty() {
    return n(this, gi) ? n(this, ie) === null : !n(this, ie) && !n(this, ui);
  }
  hasData() {
    return n(this, gi) ? n(this, ie) !== null || !!n(this, zi) : this.isEmpty();
  }
  get guessedText() {
    return n(this, zi);
  }
  async setGuessedText(t) {
    n(this, ie) === null && (f(this, zi, t), f(this, Hr, await Ie2._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", { generatedAltText: t })), b(this, ei, Md).call(this));
  }
  toggleAltTextBadge(t = false) {
    var e;
    if (!n(this, gi) || n(this, ie)) {
      (e = n(this, pi)) == null || e.remove(), f(this, pi, null);
      return;
    }
    if (!n(this, pi)) {
      const s = f(this, pi, document.createElement("div"));
      s.className = "noAltTextBadge", n(this, ze).div.append(s);
    }
    n(this, pi).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = n(this, ie);
    return !t && n(this, zi) === e && (e = n(this, Hr)), { altText: e, decorative: n(this, ui), guessedText: n(this, zi), textWithDisclaimer: n(this, Hr) };
  }
  get data() {
    return { altText: n(this, ie), decorative: n(this, ui) };
  }
  set data({ altText: t, decorative: e, guessedText: s, textWithDisclaimer: i, cancel: r = false }) {
    s && (f(this, zi, s), f(this, Hr, i)), !(n(this, ie) === t && n(this, ui) === e) && (r || (f(this, ie, t), f(this, ui, e)), b(this, ei, Md).call(this));
  }
  toggle(t = false) {
    n(this, zs) && (!t && n(this, es) && (clearTimeout(n(this, es)), f(this, es, null)), n(this, zs).disabled = !t);
  }
  shown() {
    n(this, ze)._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_displayed", data: { label: n(this, ei, sh) } });
  }
  destroy() {
    var t, e;
    (t = n(this, zs)) == null || t.remove(), f(this, zs, null), f(this, Mo, null), f(this, fi, null), (e = n(this, pi)) == null || e.remove(), f(this, pi, null);
  }
};
ie = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap(), es = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), zi = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakSet(), sh = function() {
  return n(this, ie) && "added" || n(this, ie) === null && this.guessedText && "review" || "missing";
}, Md = async function() {
  var i, r, a;
  const t = n(this, zs);
  if (!t) return;
  if (n(this, gi)) {
    if (t.classList.toggle("done", !!n(this, ie)), t.setAttribute("data-l10n-id", n(Ie, Vn)[n(this, ei, sh)]), (i = n(this, Mo)) == null || i.setAttribute("data-l10n-id", n(Ie, Vn)[`${n(this, ei, sh)}-label`]), !n(this, ie)) {
      (r = n(this, fi)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, ie) && !n(this, ui)) {
      t.classList.remove("done"), (a = n(this, fi)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = n(this, fi);
  if (!e) {
    f(this, fi, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${n(this, ze).id}`;
    const o = 100, l = n(this, ze)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(n(this, es)), f(this, es, null);
    }, { once: true }), t.addEventListener("mouseenter", () => {
      f(this, es, setTimeout(() => {
        f(this, es, null), n(this, fi).classList.add("show"), n(this, ze)._reportTelemetry({ action: "alt_text_tooltip" });
      }, o));
    }, { signal: l }), t.addEventListener("mouseleave", () => {
      var h;
      n(this, es) && (clearTimeout(n(this, es)), f(this, es, null)), (h = n(this, fi)) == null || h.classList.remove("show");
    }, { signal: l });
  }
  n(this, ui) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = n(this, ie)), e.parentNode || t.append(e);
  const s = n(this, ze).getElementForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, g(Ie, Vn, null), R(Ie, "_l10n", null);
let lu = Ie;
var fe, Rs, Ur, Ct, zh, jr, Gs, $r, zr, Gr, Gh, wf;
class yd {
  constructor(t) {
    g(this, Gh);
    g(this, fe, null);
    g(this, Rs, null);
    g(this, Ur, false);
    g(this, Ct, null);
    g(this, zh, null);
    g(this, jr, null);
    g(this, Gs, null);
    g(this, $r, null);
    g(this, zr, false);
    g(this, Gr, null);
    f(this, Ct, t);
  }
  renderForToolbar() {
    const t = f(this, Rs, document.createElement("button"));
    return t.className = "comment", b(this, Gh, wf).call(this, t, false);
  }
  renderForStandalone() {
    const t = f(this, fe, document.createElement("button"));
    t.className = "annotationCommentButton";
    const e = n(this, Ct).commentButtonPosition;
    if (e) {
      const { style: s } = t;
      s.insetInlineEnd = `calc(${100 * (n(this, Ct)._uiManager.direction === "ltr" ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, s.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
      const i = n(this, Ct).commentButtonColor;
      i && (s.backgroundColor = i);
    }
    return b(this, Gh, wf).call(this, t, true);
  }
  focusButton() {
    setTimeout(() => {
      var t;
      (t = n(this, fe) ?? n(this, Rs)) == null || t.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!n(this, fe)) return;
    const t = n(this, Ct).commentButtonColor;
    t && (n(this, fe).style.backgroundColor = t), n(this, Ct)._uiManager.updatePopupColor(n(this, Ct));
  }
  get commentButtonWidth() {
    var t;
    return (((t = n(this, fe)) == null ? void 0 : t.getBoundingClientRect().width) ?? 0) / n(this, Ct).parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (n(this, Gr)) return n(this, Gr);
    if (!n(this, fe)) return null;
    const { x: t, y: e, height: s } = n(this, fe).getBoundingClientRect(), { x: i, y: r, width: a, height: o } = n(this, Ct).parent.boundingClientRect;
    return [(t - i) / a, (e + s - r) / o];
  }
  set commentPopupPositionInLayer(t) {
    f(this, Gr, t);
  }
  hasDefaultPopupPosition() {
    return n(this, Gr) === null;
  }
  removeStandaloneCommentButton() {
    var t;
    (t = n(this, fe)) == null || t.remove(), f(this, fe, null);
  }
  removeToolbarCommentButton() {
    var t;
    (t = n(this, Rs)) == null || t.remove(), f(this, Rs, null);
  }
  setCommentButtonStates({ selected: t, hasPopup: e }) {
    n(this, fe) && (n(this, fe).classList.toggle("selected", t), n(this, fe).ariaExpanded = e);
  }
  edit(t) {
    const e = this.commentPopupPositionInLayer;
    let s, i;
    if (e) [s, i] = e;
    else {
      [s, i] = n(this, Ct).commentButtonPosition;
      const { width: c, height: u, x: p, y: m } = n(this, Ct);
      s = p + s * c, i = m + i * u;
    }
    const r = n(this, Ct).parent.boundingClientRect, { x: a, y: o, width: l, height: h } = r;
    n(this, Ct)._uiManager.editComment(n(this, Ct), a + s * l, o + i * h, { ...t, parentDimensions: r });
  }
  finish() {
    n(this, Rs) && (n(this, Rs).focus({ focusVisible: n(this, Ur) }), f(this, Ur, false));
  }
  isDeleted() {
    return n(this, zr) || n(this, Gs) === "";
  }
  isEmpty() {
    return n(this, Gs) === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || n(this, Gs) !== n(this, zh);
  }
  serialize() {
    return this.data;
  }
  get data() {
    return { text: n(this, Gs), richText: n(this, jr), date: n(this, $r), deleted: this.isDeleted() };
  }
  set data(t) {
    if (t !== n(this, Gs) && f(this, jr, null), t === null) {
      f(this, Gs, ""), f(this, zr, true);
      return;
    }
    f(this, Gs, t), f(this, $r, /* @__PURE__ */ new Date()), f(this, zr, false);
  }
  setInitialText(t, e = null) {
    f(this, zh, t), this.data = t, f(this, $r, null), f(this, jr, e);
  }
  shown() {
  }
  destroy() {
    var t, e;
    (t = n(this, Rs)) == null || t.remove(), f(this, Rs, null), (e = n(this, fe)) == null || e.remove(), f(this, fe, null), f(this, Gs, ""), f(this, jr, null), f(this, $r, null), f(this, Ct, null), f(this, Ur, false), f(this, zr, false);
  }
}
fe = /* @__PURE__ */ new WeakMap(), Rs = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), zh = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Gh = /* @__PURE__ */ new WeakSet(), wf = function(t, e) {
  if (!n(this, Ct)._uiManager.hasCommentManager()) return null;
  t.tabIndex = "0", t.ariaHasPopup = "dialog", e ? (t.ariaControls = "commentPopup", t.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t.ariaControlsElements = [n(this, Ct)._uiManager.getCommentDialogElement()], t.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button"));
  const s = n(this, Ct)._uiManager._signal;
  if (!(s instanceof AbortSignal) || s.aborted) return t;
  t.addEventListener("contextmenu", vs, { signal: s }), e && (t.addEventListener("focusin", (r) => {
    n(this, Ct)._focusEventsAllowed = false, Nt(r);
  }, { capture: true, signal: s }), t.addEventListener("focusout", (r) => {
    n(this, Ct)._focusEventsAllowed = true, Nt(r);
  }, { capture: true, signal: s })), t.addEventListener("pointerdown", (r) => r.stopPropagation(), { signal: s });
  const i = (r) => {
    r.preventDefault(), t === n(this, Rs) ? this.edit() : n(this, Ct).toggleComment(true);
  };
  return t.addEventListener("click", i, { capture: true, signal: s }), t.addEventListener("keydown", (r) => {
    r.target === t && r.key === "Enter" && (f(this, Ur, true), i(r));
  }, { signal: s }), t.addEventListener("pointerenter", () => {
    n(this, Ct).toggleComment(false, true);
  }, { signal: s }), t.addEventListener("pointerleave", () => {
    n(this, Ct).toggleComment(false, false);
  }, { signal: s }), t;
};
var Lo, Vr, Vh, Wh, Xh, qh, Yh, Gi, Wr, Vi, Xr, Wi, xr, wm, vm, Em;
const Qp = class Qp2 {
  constructor({ container: t, isPinchingDisabled: e = null, isPinchingStopped: s = null, onPinchStart: i = null, onPinching: r = null, onPinchEnd: a = null, signal: o }) {
    g(this, xr);
    g(this, Lo);
    g(this, Vr, false);
    g(this, Vh, null);
    g(this, Wh);
    g(this, Xh);
    g(this, qh);
    g(this, Yh);
    g(this, Gi, null);
    g(this, Wr);
    g(this, Vi, null);
    g(this, Xr);
    g(this, Wi, null);
    f(this, Lo, t), f(this, Vh, s), f(this, Wh, e), f(this, Xh, i), f(this, qh, r), f(this, Yh, a), f(this, Xr, new AbortController()), f(this, Wr, AbortSignal.any([o, n(this, Xr).signal])), t.addEventListener("touchstart", b(this, xr, wm).bind(this), { passive: false, signal: n(this, Wr) });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / si.pixelRatio;
  }
  destroy() {
    var t, e;
    (t = n(this, Xr)) == null || t.abort(), f(this, Xr, null), (e = n(this, Gi)) == null || e.abort(), f(this, Gi, null);
  }
};
Lo = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), Vh = /* @__PURE__ */ new WeakMap(), Wh = /* @__PURE__ */ new WeakMap(), Xh = /* @__PURE__ */ new WeakMap(), qh = /* @__PURE__ */ new WeakMap(), Yh = /* @__PURE__ */ new WeakMap(), Gi = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Vi = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakSet(), wm = function(t) {
  var i, r, a;
  if ((i = n(this, Wh)) != null && i.call(this)) return;
  if (t.touches.length === 1) {
    if (n(this, Gi)) return;
    const o = f(this, Gi, new AbortController()), l = AbortSignal.any([n(this, Wr), o.signal]), h = n(this, Lo), c = { capture: true, signal: l, passive: false }, u = (p) => {
      var m;
      p.pointerType === "touch" && ((m = n(this, Gi)) == null || m.abort(), f(this, Gi, null));
    };
    h.addEventListener("pointerdown", (p) => {
      p.pointerType === "touch" && (Nt(p), u(p));
    }, c), h.addEventListener("pointerup", u, c), h.addEventListener("pointercancel", u, c);
    return;
  }
  if (!n(this, Wi)) {
    f(this, Wi, new AbortController());
    const o = AbortSignal.any([n(this, Wr), n(this, Wi).signal]), l = n(this, Lo), h = { signal: o, capture: false, passive: false };
    l.addEventListener("touchmove", b(this, xr, vm).bind(this), h);
    const c = b(this, xr, Em).bind(this);
    l.addEventListener("touchend", c, h), l.addEventListener("touchcancel", c, h), h.capture = true, l.addEventListener("pointerdown", Nt, h), l.addEventListener("pointermove", Nt, h), l.addEventListener("pointercancel", Nt, h), l.addEventListener("pointerup", Nt, h), (r = n(this, Xh)) == null || r.call(this);
  }
  if (Nt(t), t.touches.length !== 2 || (a = n(this, Vh)) != null && a.call(this)) {
    f(this, Vi, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), f(this, Vi, { touch0X: e.screenX, touch0Y: e.screenY, touch1X: s.screenX, touch1Y: s.screenY });
}, vm = function(t) {
  var _;
  if (!n(this, Vi) || t.touches.length !== 2) return;
  Nt(t);
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const { screenX: i, screenY: r } = e, { screenX: a, screenY: o } = s, l = n(this, Vi), { touch0X: h, touch0Y: c, touch1X: u, touch1Y: p } = l, m = u - h, A = p - c, y = a - i, v = o - r, w = Math.hypot(y, v) || 1, S = Math.hypot(m, A) || 1;
  if (!n(this, Vr) && Math.abs(S - w) <= Qp.MIN_TOUCH_DISTANCE_TO_PINCH) return;
  if (l.touch0X = i, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, !n(this, Vr)) {
    f(this, Vr, true);
    return;
  }
  const E = [(i + a) / 2, (r + o) / 2];
  (_ = n(this, qh)) == null || _.call(this, E, S, w);
}, Em = function(t) {
  var e;
  t.touches.length >= 2 || (n(this, Wi) && (n(this, Wi).abort(), f(this, Wi, null), (e = n(this, Yh)) == null || e.call(this)), n(this, Vi) && (Nt(t), f(this, Vi, null), f(this, Vr, false)));
};
let _h = Qp;
var qr, Vs, Mt, wt, Xi, Io, Wn, Kh, pe, Yr, qi, mi, Xn, Jh, Kr, ss, Qh, Jr, Yi, bi, Fo, No, Ms, Qr, Zh, Su, W, vf, tc, Ef, Dd, Sm, _m, Sf, Ld, _f, Cm, xm, Tm, Cf, Pm, xf, km, Rm, Mm, Tf, ih;
const K = class K2 {
  constructor(t) {
    g(this, W);
    g(this, qr, null);
    g(this, Vs, null);
    g(this, Mt, null);
    g(this, wt, null);
    g(this, Xi, null);
    g(this, Io, false);
    g(this, Wn, null);
    g(this, Kh, "");
    g(this, pe, null);
    g(this, Yr, null);
    g(this, qi, null);
    g(this, mi, null);
    g(this, Xn, null);
    g(this, Jh, "");
    g(this, Kr, false);
    g(this, ss, null);
    g(this, Qh, false);
    g(this, Jr, false);
    g(this, Yi, false);
    g(this, bi, null);
    g(this, Fo, 0);
    g(this, No, 0);
    g(this, Ms, null);
    g(this, Qr, null);
    R(this, "isSelected", false);
    R(this, "_isCopy", false);
    R(this, "_editToolbar", null);
    R(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    R(this, "_initialData", null);
    R(this, "_isVisible", true);
    R(this, "_uiManager", null);
    R(this, "_focusEventsAllowed", true);
    g(this, Zh, false);
    g(this, Su, K2._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = false, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null;
    const { rotation: e, rawDims: { pageWidth: s, pageHeight: i, pageX: r, pageY: a } } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [r, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = false, this.deleted = false;
  }
  static get _resizerKeyboardManager() {
    const t = K2.prototype._resizeWithKeyboard, e = Cr.TRANSLATE_SMALL, s = Cr.TRANSLATE_BIG;
    return Q(this, "_resizerKeyboardManager", new ud([[["ArrowLeft", "mac+ArrowLeft"], t, { args: [-e, 0] }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, { args: [-s, 0] }], [["ArrowRight", "mac+ArrowRight"], t, { args: [e, 0] }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, { args: [s, 0] }], [["ArrowUp", "mac+ArrowUp"], t, { args: [0, -e] }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, { args: [0, -s] }], [["ArrowDown", "mac+ArrowDown"], t, { args: [0, e] }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, { args: [0, s] }], [["Escape", "mac+Escape"], K2.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return false;
  }
  static get _defaultLineColor() {
    return Q(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new rA({ id: t.parent.getNextId(), parent: t.parent, uiManager: t._uiManager });
    e.annotationElementId = t.annotationElementId, e.deleted = true, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (K2._l10n ?? (K2._l10n = t), K2._l10nResizer || (K2._l10nResizer = Object.freeze({ topLeft: "pdfjs-editor-resizer-top-left", topMiddle: "pdfjs-editor-resizer-top-middle", topRight: "pdfjs-editor-resizer-top-right", middleRight: "pdfjs-editor-resizer-middle-right", bottomRight: "pdfjs-editor-resizer-bottom-right", bottomMiddle: "pdfjs-editor-resizer-bottom-middle", bottomLeft: "pdfjs-editor-resizer-bottom-left", middleLeft: "pdfjs-editor-resizer-middle-left" })), K2._borderLineWidth !== -1) return;
    const s = getComputedStyle(document.documentElement);
    K2._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return false;
  }
  static paste(t, e) {
    _t("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return n(this, Zh);
  }
  set _isDraggable(t) {
    var e;
    f(this, Zh, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return true;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = n(this, Su);
  }
  setParent(t) {
    var e;
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (b(this, W, ih).call(this), (e = n(this, mi)) == null || e.remove(), f(this, mi, null)), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (n(this, Kr) ? f(this, Kr, false) : this.parent.setSelected(this));
  }
  focusout(t) {
    var s;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM) return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (s = this.parent) != null && s.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.isInEditMode() && this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, i) {
    const [r, a] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / r, this.y = (e + i) / a, this.fixAndSetPosition();
  }
  _moveAfterPaste(t, e) {
    const [s, i] = this.parentDimensions;
    this.setAt(t * s, e * i, this.width * s, this.height * i), this._onTranslated();
  }
  translate(t, e) {
    b(this, W, vf).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    n(this, ss) || f(this, ss, [this.x, this.y, this.width, this.height]), b(this, W, vf).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({ block: "nearest" });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    n(this, ss) || f(this, ss, [this.x, this.y, this.width, this.height]);
    const { div: s, parentDimensions: [i, r] } = this;
    if (this.x += t / i, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const { x: u, y: p } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, p) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let { x: a, y: o } = this;
    const [l, h] = this.getBaseTranslation();
    a += l, o += h;
    const { style: c } = s;
    c.left = `${(100 * a).toFixed(2)}%`, c.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), s.scrollIntoView({ block: "nearest" });
  }
  _onTranslating(t, e) {
  }
  _onTranslated(t, e) {
  }
  get _hasBeenMoved() {
    return !!n(this, ss) && (n(this, ss)[0] !== this.x || n(this, ss)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!n(this, ss) && (n(this, ss)[2] !== this.width || n(this, ss)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, { _borderLineWidth: s } = K2, i = s / t, r = s / e;
    switch (this.rotation) {
      case 90:
        return [-i, r];
      case 180:
        return [i, r];
      case 270:
        return [i, -r];
      default:
        return [-i, -r];
    }
  }
  get _mustFixPosition() {
    return true;
  }
  fixAndSetPosition(t = this.rotation) {
    const { div: { style: e }, pageDimensions: [s, i] } = this;
    let { x: r, y: a, width: o, height: l } = this;
    if (o *= s, l *= i, r *= s, a *= i, this._mustFixPosition) switch (t) {
      case 0:
        r = Re(r, 0, s - o), a = Re(a, 0, i - l);
        break;
      case 90:
        r = Re(r, 0, s - l), a = Re(a, o, i);
        break;
      case 180:
        r = Re(r, o, s), a = Re(a, l, i);
        break;
      case 270:
        r = Re(r, l, s), a = Re(a, 0, i - o);
        break;
    }
    this.x = r /= s, this.y = a /= i;
    const [h, c] = this.getBaseTranslation();
    r += h, a += c, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return b(s = K2, tc, Ef).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return b(s = K2, tc, Ef).call(s, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const { parentScale: t, pageDimensions: [e, s] } = this;
    return [e * t, s * t];
  }
  setDims() {
    const { div: { style: t }, width: e, height: s } = this;
    t.width = `${(100 * e).toFixed(2)}%`, t.height = `${(100 * s).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    var t;
    (t = n(this, Mt)) == null || t.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || n(this, Jr)) return this._editToolbar;
    this._editToolbar = new cf(this), this.div.append(this._editToolbar.render());
    const { toolbarButtons: t } = this;
    if (t) for (const [e, s] of t) await this._editToolbar.addButton(e, s);
    return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
  }
  addCommentButtonInToolbar() {
    var t;
    (t = this._editToolbar) == null || t.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    var t;
    (t = this._editToolbar) == null || t.removeButton("comment");
  }
  removeEditToolbar() {
    var t, e;
    (t = this._editToolbar) == null || t.remove(), this._editToolbar = null, (e = n(this, Mt)) == null || e.destroy();
  }
  addContainer(t) {
    var s;
    const e = (s = this._editToolbar) == null ? void 0 : s.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    return n(this, Mt) || (lu.initialize(K2._l10n), f(this, Mt, new lu(this)), n(this, qr) && (n(this, Mt).data = n(this, qr), f(this, qr, null))), n(this, Mt);
  }
  get altTextData() {
    var t;
    return (t = n(this, Mt)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    n(this, Mt) && (n(this, Mt).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = n(this, Mt)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = n(this, Mt)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = n(this, Mt)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!n(this, Mt) && !n(this, Mt).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = n(this, Mt)) == null ? void 0 : t.hasData()) ?? false;
  }
  focusCommentButton() {
    var t;
    (t = n(this, wt)) == null || t.focusButton();
  }
  addCommentButton() {
    return n(this, wt) || f(this, wt, new yd(this));
  }
  addStandaloneCommentButton() {
    if (n(this, Xi)) {
      this._uiManager.isEditingMode() && n(this, Xi).classList.remove("hidden");
      return;
    }
    this.hasComment && (f(this, Xi, n(this, wt).renderForStandalone()), this.div.append(n(this, Xi)));
  }
  removeStandaloneCommentButton() {
    n(this, wt).removeStandaloneCommentButton(), f(this, Xi, null);
  }
  hideStandaloneCommentButton() {
    var t;
    (t = n(this, Xi)) == null || t.classList.add("hidden");
  }
  get comment() {
    const { data: { richText: t, text: e, date: s, deleted: i } } = n(this, wt);
    return { text: e, richText: t, date: s, deleted: i, color: this.getNonHCMColor(), opacity: this.opacity ?? 1 };
  }
  set comment(t) {
    n(this, wt) || f(this, wt, new yd(this)), n(this, wt).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }
  setCommentData({ comment: t, popupRef: e, richText: s }) {
    if (!e || (n(this, wt) || f(this, wt, new yd(this)), n(this, wt).setInitialText(t, s), !this.annotationElementId)) return;
    const i = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    i && this.updateFromAnnotationLayer(i);
  }
  get hasEditedComment() {
    var t;
    return (t = n(this, wt)) == null ? void 0 : t.hasBeenEdited();
  }
  get hasDeletedComment() {
    var t;
    return (t = n(this, wt)) == null ? void 0 : t.isDeleted();
  }
  get hasComment() {
    return !!n(this, wt) && !n(this, wt).isEmpty() && !n(this, wt).isDeleted();
  }
  async editComment(t) {
    n(this, wt) || f(this, wt, new yd(this)), n(this, wt).edit(t);
  }
  toggleComment(t, e = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, e);
  }
  setSelectedCommentButton(t) {
    n(this, wt).setSelectedButton(t);
  }
  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , i] = t.rect, [r] = this.pageDimensions, [a] = this.pageTranslation, o = a + r + 1, l = i - 100, h = o + 180;
      t.popup = { contents: this.comment.text, deleted: this.comment.deleted, rect: [o, l, h, i] };
    }
  }
  updateFromAnnotationLayer({ popup: { contents: t, deleted: e } }) {
    n(this, wt).data = e ? null : t;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    var a;
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = n(this, Io) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), b(this, W, xf).call(this);
    const [e, s] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * s / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / s).toFixed(2)}%`);
    const [i, r] = this.getInitialTranslation();
    return this.translate(i, r), lm(this, t, ["keydown", "pointerdown", "dblclick"]), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, Qr) || f(this, Qr, new _h({ container: t, isPinchingDisabled: () => !this.isSelected, onPinchStart: b(this, W, Cm).bind(this), onPinching: b(this, W, xm).bind(this), onPinchEnd: b(this, W, Tm).bind(this), signal: this._uiManager._signal }))), this.addStandaloneCommentButton(), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }
  pointerdown(t) {
    const { isMac: e } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (f(this, Kr, true), this._isDraggable) {
      b(this, W, Pm).call(this, t);
      return;
    }
    b(this, W, Cf).call(this, t);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    n(this, bi) && clearTimeout(n(this, bi)), f(this, bi, setTimeout(() => {
      var t;
      f(this, bi, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [r, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, c = e / i, u = this.x * r, p = this.y * a, m = this.width * r, A = this.height * a;
    switch (s) {
      case 0:
        return [u + h + o, a - p - c - A + l, u + h + m + o, a - p - c + l];
      case 90:
        return [u + c + o, a - p + h + l, u + c + A + o, a - p + h + m + l];
      case 180:
        return [u - h - m + o, a - p + c + l, u - h + o, a - p + c + A + l];
      case 270:
        return [u - c - A + o, a - p - h - m + l, u - c + o, a - p - h + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, i, r, a] = t, o = r - s, l = a - i;
    switch (this.rotation) {
      case 0:
        return [s, e - a, o, l];
      case 90:
        return [s, e - i, l, o];
      case 180:
        return [r, e - i, o, l];
      case 270:
        return [r, e - a, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && K2._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    var t;
    (t = n(this, wt)) == null || t.onUpdatedColor();
  }
  getData() {
    const { comment: { text: t, color: e, date: s, opacity: i, deleted: r, richText: a }, uid: o, pageIndex: l, creationDate: h, modificationDate: c } = this;
    return { id: o, pageIndex: l, rect: this.getPDFRect(), richText: a, contentsObj: { str: t }, creationDate: h, modificationDate: s || c, popupRef: !r, color: e, opacity: i };
  }
  onceAdded(t) {
  }
  isEmpty() {
    return false;
  }
  enableEditMode() {
    return this.isInEditMode() ? false : (this.parent.setEditingState(false), f(this, Jr, true), true);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(true), f(this, Jr, false), true) : false;
  }
  isInEditMode() {
    return n(this, Jr);
  }
  shouldGetKeyboardEvents() {
    return n(this, Yi);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const { top: t, left: e, bottom: s, right: i } = this.getClientDimensions(), { innerHeight: r, innerWidth: a } = window;
    return e < a && i > 0 && t < r && s > 0;
  }
  rebuild() {
    b(this, W, xf).call(this);
  }
  rotate(t) {
  }
  resize() {
  }
  serializeDeleted() {
    var t;
    return { id: this.annotationElementId, deleted: true, pageIndex: this.pageIndex, popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || "" };
  }
  serialize(t = false, e = null) {
    var s;
    return { annotationType: this.mode, pageIndex: this.pageIndex, rect: this.getPDFRect(), rotation: this.rotation, structTreeParentId: this._structTreeParentId, popupRef: ((s = this._initialData) == null ? void 0 : s.popupRef) || "" };
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({ parent: e, id: e.getNextId(), uiManager: s, annotationElementId: t.annotationElementId, creationDate: t.creationDate, modificationDate: t.modificationDate });
    i.rotation = t.rotation, f(i, qr, t.accessibilityData), i._isCopy = t.isCopy || false;
    const [r, a] = i.pageDimensions, [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / r, i.y = l / a, i.width = h / r, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = n(this, Xn)) == null || t.abort(), f(this, Xn, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, bi) && (clearTimeout(n(this, bi)), f(this, bi, null)), b(this, W, ih).call(this), this.removeEditToolbar(), n(this, Ms)) {
      for (const s of n(this, Ms).values()) clearTimeout(s);
      f(this, Ms, null);
    }
    this.parent = null, (e = n(this, Qr)) == null || e.destroy(), f(this, Qr, null);
  }
  get isResizable() {
    return false;
  }
  makeResizable() {
    this.isResizable && (b(this, W, Sm).call(this), n(this, pe).classList.remove("hidden"));
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    return this._uiManager.direction === "ltr" ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage() {
    const { commentButtonPosition: [t, e] } = this, [s, i, r, a] = this.getPDFRect();
    return [K2._round(s + (r - s) * t), K2._round(i + (a - i) * (1 - e))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return n(this, wt).commentPopupPositionInLayer;
  }
  set commentPopupPosition(t) {
    n(this, wt).commentPopupPositionInLayer = t;
  }
  hasDefaultPopupPosition() {
    return n(this, wt).hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return n(this, wt).commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(t) {
    n(this, wt).setCommentButtonStates(t);
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter") return;
    this._uiManager.setSelected(this), f(this, qi, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
    const e = n(this, pe).children;
    if (!n(this, Vs)) {
      f(this, Vs, Array.from(e));
      const a = b(this, W, km).bind(this), o = b(this, W, Rm).bind(this), l = this._uiManager._signal;
      for (const h of n(this, Vs)) {
        const c = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, { signal: l }), h.addEventListener("blur", o, { signal: l }), h.addEventListener("focus", b(this, W, Mm).bind(this, c), { signal: l }), h.setAttribute("data-l10n-id", K2._l10nResizer[c]);
      }
    }
    const s = n(this, Vs)[0];
    let i = 0;
    for (const a of e) {
      if (a === s) break;
      i++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, Vs).length / 4);
    if (r !== i) {
      if (r < i) for (let o = 0; o < i - r; o++) n(this, pe).append(n(this, pe).firstChild);
      else if (r > i) for (let o = 0; o < r - i; o++) n(this, pe).firstChild.before(n(this, pe).lastChild);
      let a = 0;
      for (const o of e) {
        const h = n(this, Vs)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", K2._l10nResizer[h]);
      }
    }
    b(this, W, Tf).call(this, 0), f(this, Yi, true), n(this, pe).firstChild.focus({ focusVisible: true }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    n(this, Yi) && b(this, W, _f).call(this, n(this, Jh), { deltaX: t, deltaY: e, fromKeyboard: true });
  }
  _stopResizingWithKeyboard() {
    b(this, W, ih).call(this), this.div.focus();
  }
  select() {
    var t, e, s;
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    if (this.isSelected = true, this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var i, r;
        (i = this.div) != null && i.classList.contains("selectedEditor") && ((r = this._editToolbar) == null || r.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (s = n(this, Mt)) == null || s.toggleAltTextBadge(false);
  }
  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => {
      var t;
      return (t = this.div) == null ? void 0 : t.focus({ preventScroll: true });
    }, 0);
  }
  unselect() {
    var t, e, s, i, r;
    this.isSelected && (this.isSelected = false, (t = n(this, pe)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({ preventScroll: true }), (i = this._editToolbar) == null || i.hide(), (r = n(this, Mt)) == null || r.toggleAltTextBadge(true), this.hasComment && this._uiManager.toggleComment(this, false, false));
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  get canChangeContent() {
    return false;
  }
  enterInEditMode() {
    this.canChangeContent && (this.enableEditMode(), this.div.focus());
  }
  dblclick(t) {
    t.target.nodeName !== "BUTTON" && (this.enterInEditMode(), this.parent.updateToolbar({ mode: this.constructor._editorType, editId: this.id }));
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return n(this, Qh);
  }
  set isEditing(t) {
    f(this, Qh, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return true;
  }
  get telemetryInitialData() {
    return { action: "added" };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = false) {
    if (e) {
      n(this, Ms) || f(this, Ms, /* @__PURE__ */ new Map());
      const { action: s } = t;
      let i = n(this, Ms).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), n(this, Ms).delete(s), n(this, Ms).size === 0 && f(this, Ms, null);
      }, K2._telemetryTimeout), n(this, Ms).set(s, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: t } });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), f(this, Io, false);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), f(this, Io, true);
  }
  updateFakeAnnotationElement(t) {
    if (!n(this, mi) && !this.deleted) {
      f(this, mi, t.addFakeAnnotation(this));
      return;
    }
    if (this.deleted) {
      n(this, mi).remove(), f(this, mi, null);
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && n(this, mi).updateEdited({ rect: this.getPDFRect(), popup: this.comment });
  }
  renderAnnotationElement(t) {
    if (this.deleted) return t.hide(), null;
    let e = t.container.querySelector(".annotationContent");
    if (!e) e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const s = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const { firstChild: e } = t.container;
    (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
qr = /* @__PURE__ */ new WeakMap(), Vs = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ new WeakMap(), Io = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Kh = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), qi = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Jh = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), ss = /* @__PURE__ */ new WeakMap(), Qh = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Zh = /* @__PURE__ */ new WeakMap(), Su = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakSet(), vf = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, tc = /* @__PURE__ */ new WeakSet(), Ef = function(t, e, s) {
  switch (s) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, Dd = function(t) {
  switch (t) {
    case 90: {
      const [e, s] = this.pageDimensions;
      return [0, -e / s, s / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, s] = this.pageDimensions;
      return [0, e / s, -s / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Sm = function() {
  if (n(this, pe)) return;
  f(this, pe, document.createElement("div")), n(this, pe).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    n(this, pe).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", b(this, W, _m).bind(this, s), { signal: e }), i.addEventListener("contextmenu", vs, { signal: e }), i.tabIndex = -1;
  }
  this.div.prepend(n(this, pe));
}, _m = function(t, e) {
  var c;
  e.preventDefault();
  const { isMac: s } = ce.platform;
  if (e.button !== 0 || e.ctrlKey && s) return;
  (c = n(this, Mt)) == null || c.toggle(false);
  const i = this._isDraggable;
  this._isDraggable = false, f(this, Yr, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(false), window.addEventListener("pointermove", b(this, W, _f).bind(this, t), { passive: true, capture: true, signal: a }), window.addEventListener("touchmove", Nt, { passive: false, signal: a }), window.addEventListener("contextmenu", vs, { signal: a }), f(this, qi, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var u;
    r.abort(), this.parent.togglePointerEvents(true), (u = n(this, Mt)) == null || u.toggle(true), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, b(this, W, Ld).call(this);
  };
  window.addEventListener("pointerup", h, { signal: a }), window.addEventListener("blur", h, { signal: a });
}, Sf = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, Ld = function() {
  if (!n(this, qi)) return;
  const { savedX: t, savedY: e, savedWidth: s, savedHeight: i } = n(this, qi);
  f(this, qi, null);
  const r = this.x, a = this.y, o = this.width, l = this.height;
  r === t && a === e && o === s && l === i || this.addCommands({ cmd: b(this, W, Sf).bind(this, r, a, o, l), undo: b(this, W, Sf).bind(this, t, e, s, i), mustExec: true });
}, _f = function(t, e) {
  const [s, i] = this.parentDimensions, r = this.x, a = this.y, o = this.width, l = this.height, h = K.MIN_SIZE / s, c = K.MIN_SIZE / i, u = b(this, W, Dd).call(this, this.rotation), p = (B, N) => [u[0] * B + u[2] * N, u[1] * B + u[3] * N], m = b(this, W, Dd).call(this, 360 - this.rotation), A = (B, N) => [m[0] * B + m[2] * N, m[1] * B + m[3] * N];
  let y, v, w = false, S = false;
  switch (t) {
    case "topLeft":
      w = true, y = (B, N) => [0, 0], v = (B, N) => [B, N];
      break;
    case "topMiddle":
      y = (B, N) => [B / 2, 0], v = (B, N) => [B / 2, N];
      break;
    case "topRight":
      w = true, y = (B, N) => [B, 0], v = (B, N) => [0, N];
      break;
    case "middleRight":
      S = true, y = (B, N) => [B, N / 2], v = (B, N) => [0, N / 2];
      break;
    case "bottomRight":
      w = true, y = (B, N) => [B, N], v = (B, N) => [0, 0];
      break;
    case "bottomMiddle":
      y = (B, N) => [B / 2, N], v = (B, N) => [B / 2, 0];
      break;
    case "bottomLeft":
      w = true, y = (B, N) => [0, N], v = (B, N) => [B, 0];
      break;
    case "middleLeft":
      S = true, y = (B, N) => [0, N / 2], v = (B, N) => [B, N / 2];
      break;
  }
  const E = y(o, l), _ = v(o, l);
  let C = p(..._);
  const x = K._round(r + C[0]), T = K._round(a + C[1]);
  let P = 1, k = 1, D, L;
  if (e.fromKeyboard) ({ deltaX: D, deltaY: L } = e);
  else {
    const { screenX: B, screenY: N } = e, [et, nt] = n(this, Yr);
    [D, L] = this.screenToPageTranslation(B - et, N - nt), n(this, Yr)[0] = B, n(this, Yr)[1] = N;
  }
  if ([D, L] = A(D / s, L / i), w) {
    const B = Math.hypot(o, l);
    P = k = Math.max(Math.min(Math.hypot(_[0] - E[0] - D, _[1] - E[1] - L) / B, 1 / o, 1 / l), h / o, c / l);
  } else S ? P = Re(Math.abs(_[0] - E[0] - D), h, 1) / o : k = Re(Math.abs(_[1] - E[1] - L), c, 1) / l;
  const F = K._round(o * P), V = K._round(l * k);
  C = p(...v(F, V));
  const O = x - C[0], X = T - C[1];
  n(this, ss) || f(this, ss, [this.x, this.y, this.width, this.height]), this.width = F, this.height = V, this.x = O, this.y = X, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Cm = function() {
  var t;
  f(this, qi, { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height }), (t = n(this, Mt)) == null || t.toggle(false), this.parent.togglePointerEvents(false);
}, xm = function(t, e, s) {
  let r = 0.7 * (s / e) + 1 - 0.7;
  if (r === 1) return;
  const a = b(this, W, Dd).call(this, this.rotation), o = (x, T) => [a[0] * x + a[2] * T, a[1] * x + a[3] * T], [l, h] = this.parentDimensions, c = this.x, u = this.y, p = this.width, m = this.height, A = K.MIN_SIZE / l, y = K.MIN_SIZE / h;
  r = Math.max(Math.min(r, 1 / p, 1 / m), A / p, y / m);
  const v = K._round(p * r), w = K._round(m * r);
  if (v === p && w === m) return;
  n(this, ss) || f(this, ss, [c, u, p, m]);
  const S = o(p / 2, m / 2), E = K._round(c + S[0]), _ = K._round(u + S[1]), C = o(v / 2, w / 2);
  this.x = E - C[0], this.y = _ - C[1], this.width = v, this.height = w, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Tm = function() {
  var t;
  (t = n(this, Mt)) == null || t.toggle(true), this.parent.togglePointerEvents(true), b(this, W, Ld).call(this);
}, Cf = function(t) {
  const { isMac: e } = ce.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Pm = function(t) {
  const { isSelected: e } = this;
  this._uiManager.setUpDragSession();
  let s = false;
  const i = new AbortController(), r = this._uiManager.combinedSignal(i), a = { capture: true, passive: false, signal: r }, o = (h) => {
    i.abort(), f(this, Wn, null), f(this, Kr, false), this._uiManager.endDragSession() || b(this, W, Cf).call(this, h), s && this._onStopDragging();
  };
  e && (f(this, Fo, t.clientX), f(this, No, t.clientY), f(this, Wn, t.pointerId), f(this, Kh, t.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = true, this._uiManager.toggleComment(this, true, false), this._onStartDragging());
    const { clientX: c, clientY: u, pointerId: p } = h;
    if (p !== n(this, Wn)) {
      Nt(h);
      return;
    }
    const [m, A] = this.screenToPageTranslation(c - n(this, Fo), u - n(this, No));
    f(this, Fo, c), f(this, No, u), this._uiManager.dragSelectedEditors(m, A);
  }, a), window.addEventListener("touchmove", Nt, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === n(this, Kh) && (n(this, Qr) || h.isPrimary) && o(h), Nt(h);
  }, a));
  const l = (h) => {
    if (!n(this, Wn) || n(this, Wn) === h.pointerId) {
      o(h);
      return;
    }
    Nt(h);
  };
  window.addEventListener("pointerup", l, { signal: r }), window.addEventListener("blur", l, { signal: r });
}, xf = function() {
  if (n(this, Xn) || !this.div) return;
  f(this, Xn, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, Xn));
  this.div.addEventListener("focusin", this.focusin.bind(this), { signal: t }), this.div.addEventListener("focusout", this.focusout.bind(this), { signal: t });
}, km = function(t) {
  K._resizerKeyboardManager.exec(this, t);
}, Rm = function(t) {
  var e;
  n(this, Yi) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, pe) && b(this, W, ih).call(this);
}, Mm = function(t) {
  f(this, Jh, n(this, Yi) ? t : "");
}, Tf = function(t) {
  if (n(this, Vs)) for (const e of n(this, Vs)) e.tabIndex = t;
}, ih = function() {
  f(this, Yi, false), b(this, W, Tf).call(this, -1), b(this, W, Ld).call(this);
}, g(K, tc), R(K, "_l10n", null), R(K, "_l10nResizer", null), R(K, "_borderLineWidth", -1), R(K, "_colorManager", new ff()), R(K, "_zIndex", 1), R(K, "_telemetryTimeout", 1e3);
let xt = K;
class rA extends xt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = true;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const pg = 3285377520, Es = 4294901760, ai = 65535;
class Dm {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : pg, this.h2 = t ? t & 4294967295 : pg;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let y = 0, v = t.length; y < v; y++) {
        const w = t.charCodeAt(y);
        w <= 255 ? e[s++] = w : (e[s++] = w >>> 8, e[s++] = w & 255);
      }
    } else if (ArrayBuffer.isView(t)) e = t.slice(), s = e.byteLength;
    else throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, r = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, c = this.h2;
    const u = 3432918353, p = 461845907, m = u & ai, A = p & ai;
    for (let y = 0; y < i; y++) y & 1 ? (o = a[y], o = o * u & Es | o * m & ai, o = o << 15 | o >>> 17, o = o * p & Es | o * A & ai, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[y], l = l * u & Es | l * m & ai, l = l << 15 | l >>> 17, l = l * p & Es | l * A & ai, c ^= l, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * u & Es | o * m & ai, o = o << 15 | o >>> 17, o = o * p & Es | o * A & ai, i & 1 ? h ^= o : c ^= o;
    }
    this.h1 = h, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Es | t * 36045 & ai, e = e * 4283543511 & Es | ((e << 16 | t >>> 16) * 2950163797 & Es) >>> 16, t ^= e >>> 1, t = t * 444984403 & Es | t * 60499 & ai, e = e * 3301882366 & Es | ((e << 16 | t >>> 16) * 3120437893 & Es) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Pf = Object.freeze({ map: null, hash: "", transfer: void 0 });
var Zr, ta, Ki, ge, _u, Lm;
class jp {
  constructor() {
    g(this, _u);
    g(this, Zr, false);
    g(this, ta, null);
    g(this, Ki, null);
    g(this, ge, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = n(this, ge).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return n(this, ge).get(t);
  }
  remove(t) {
    const e = n(this, ge).get(t);
    if (e !== void 0 && (e instanceof xt && n(this, Ki).delete(e.annotationElementId), n(this, ge).delete(t), n(this, ge).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function")) {
      for (const s of n(this, ge).values()) if (s instanceof xt) return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = n(this, ge).get(t);
    let i = false;
    if (s !== void 0) for (const [r, a] of Object.entries(e)) s[r] !== a && (i = true, s[r] = a);
    else i = true, n(this, ge).set(t, e);
    i && b(this, _u, Lm).call(this), e instanceof xt && ((n(this, Ki) || f(this, Ki, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type));
  }
  has(t) {
    return n(this, ge).has(t);
  }
  get size() {
    return n(this, ge).size;
  }
  resetModified() {
    n(this, Zr) && (f(this, Zr, false), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Im(this);
  }
  get serializable() {
    if (n(this, ge).size === 0) return Pf;
    const t = /* @__PURE__ */ new Map(), e = new Dm(), s = [], i = /* @__PURE__ */ Object.create(null);
    let r = false;
    for (const [a, o] of n(this, ge)) {
      const l = o instanceof xt ? o.serialize(false, i) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
    }
    if (r) for (const a of t.values()) a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? { map: t, hash: e.hexdigest(), transfer: s } : Pf;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    let s = 0, i = 0;
    for (const r of n(this, ge).values()) {
      if (!(r instanceof xt)) {
        r.popup && (r.popup.deleted ? i += 1 : s += 1);
        continue;
      }
      r.isCommentDeleted ? i += 1 : r.hasEditedComment && (s += 1);
      const a = r.telemetryFinalData;
      if (!a) continue;
      const { type: o } = a;
      e.has(o) || e.set(o, Object.getPrototypeOf(r).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const l = t[o] || (t[o] = /* @__PURE__ */ new Map());
      for (const [h, c] of Object.entries(a)) {
        if (h === "type") continue;
        let u = l.get(h);
        u || (u = /* @__PURE__ */ new Map(), l.set(h, u));
        const p = u.get(c) ?? 0;
        u.set(c, p + 1);
      }
    }
    if ((i > 0 || s > 0) && (t || (t = /* @__PURE__ */ Object.create(null)), t.comments = { deleted: i, edited: s }), !t) return null;
    for (const [r, a] of e) t[r] = a.computeTelemetryFinalData(t[r]);
    return t;
  }
  resetModifiedIds() {
    f(this, ta, null);
  }
  updateEditor(t, e) {
    var i;
    const s = (i = n(this, Ki)) == null ? void 0 : i.get(t);
    return s ? (s.updateFromAnnotationLayer(e), true) : false;
  }
  getEditor(t) {
    var e;
    return ((e = n(this, Ki)) == null ? void 0 : e.get(t)) || null;
  }
  get modifiedIds() {
    if (n(this, ta)) return n(this, ta);
    const t = [];
    if (n(this, Ki)) for (const e of n(this, Ki).values()) e.serialize() && t.push(e.annotationElementId);
    return f(this, ta, { ids: new Set(t), hash: t.join(",") });
  }
  [Symbol.iterator]() {
    return n(this, ge).entries();
  }
}
Zr = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), _u = /* @__PURE__ */ new WeakSet(), Lm = function() {
  n(this, Zr) || (f(this, Zr, true), typeof this.onSetModified == "function" && this.onSetModified());
};
var ec;
class Im extends jp {
  constructor(e) {
    super();
    g(this, ec);
    const { map: s, hash: i, transfer: r } = e.serializable, a = structuredClone(s, r ? { transfer: r } : null);
    f(this, ec, { map: a, hash: i, transfer: r });
  }
  get print() {
    _t("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return n(this, ec);
  }
  get modifiedIds() {
    return Q(this, "modifiedIds", { ids: /* @__PURE__ */ new Set(), hash: "" });
  }
}
ec = /* @__PURE__ */ new WeakMap();
var Oo;
class aA {
  constructor({ ownerDocument: t = globalThis.document, styleElement: e = null }) {
    g(this, Oo, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), n(this, Oo).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({ systemFontInfo: t, disableFontFace: e, _inspectFont: s }) {
    if (!(!t || n(this, Oo).has(t.loadedName))) {
      if (rt(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const { loadedName: i, src: r, style: a } = t, o = new FontFace(i, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, Oo).add(i), s == null || s(t);
        } catch {
          Y(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      _t("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo) return;
    if (t.attached = true, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (i) {
          throw Y(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = true, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
      await new Promise((s) => {
        const i = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return Q(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return Q(this, "isSyncFontLoadingSupported", Be || ce.platform.isFirefox);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (rt(!i.done, "completeRequest() cannot be called twice."), i.done = true; s.length > 0 && s[0].done; ) {
        const r = s.shift();
        setTimeout(r.callback, 0);
      }
    }
    const { loadingRequests: s } = this, i = { done: false, complete: e, callback: t };
    return s.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return Q(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(_, C) {
      return _.charCodeAt(C) << 24 | _.charCodeAt(C + 1) << 16 | _.charCodeAt(C + 2) << 8 | _.charCodeAt(C + 3) & 255;
    }
    function i(_, C, x, T) {
      const P = _.substring(0, C), k = _.substring(C + x);
      return P + T + k;
    }
    let r, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function c(_, C) {
      if (++h > 30) {
        Y("Load test font never loaded."), C();
        return;
      }
      if (l.font = "30px " + _, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        C();
        return;
      }
      setTimeout(c.bind(null, _, C));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = i(p, 976, u.length, u);
    const A = 16, y = 1482184792;
    let v = s(p, A);
    for (r = 0, a = u.length - 3; r < a; r += 4) v = v - y + s(u, r) | 0;
    r < u.length && (v = v - y + s(u + "XXX", r) | 0), p = i(p, A, 4, Xy(v));
    const w = `url(data:font/opentype;base64,${btoa(p)});`, S = `@font-face {font-family:"${u}";src:${w}}`;
    this.insertRule(S);
    const E = this._document.createElement("div");
    E.style.visibility = "hidden", E.style.width = E.style.height = "10px", E.style.position = "absolute", E.style.top = E.style.left = "0px";
    for (const _ of [t.loadedName, u]) {
      const C = this._document.createElement("span");
      C.textContent = "Hi", C.style.fontFamily = _, E.append(C);
    }
    this._document.body.append(E), c(u, () => {
      E.remove(), e.complete();
    });
  }
}
Oo = /* @__PURE__ */ new WeakMap();
var pt;
class oA {
  constructor(t, e = null, s, i) {
    g(this, pt);
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null), f(this, pt, t), this._inspectFont = e, s && Object.assign(this, s), i && (this.charProcOperatorList = i);
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace) return null;
    let t;
    if (!this.cssFontInfo) t = new FontFace(this.loadedName, this.data, {});
    else {
      const s = { weight: this.cssFontInfo.fontWeight };
      this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, s);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var s;
    if (!this.data || this.disableFontFace) return null;
    const t = `url(data:${this.mimetype};base64,${Kg(this.data)});`;
    let e;
    if (!this.cssFontInfo) e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t}}`;
    }
    return (s = this._inspectFont) == null || s.call(this, this, t), e;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0) return this.compiledGlyphs[e];
    const s = this.loadedName + "_path_" + e;
    let i;
    try {
      i = t.get(s);
    } catch (a) {
      Y(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(i || "");
    return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = r;
  }
  get black() {
    return n(this, pt).black;
  }
  get bold() {
    return n(this, pt).bold;
  }
  get disableFontFace() {
    return n(this, pt).disableFontFace ?? false;
  }
  get fontExtraProperties() {
    return n(this, pt).fontExtraProperties ?? false;
  }
  get isInvalidPDFjsFont() {
    return n(this, pt).isInvalidPDFjsFont;
  }
  get isType3Font() {
    return n(this, pt).isType3Font;
  }
  get italic() {
    return n(this, pt).italic;
  }
  get missingFile() {
    return n(this, pt).missingFile;
  }
  get remeasure() {
    return n(this, pt).remeasure;
  }
  get vertical() {
    return n(this, pt).vertical;
  }
  get ascent() {
    return n(this, pt).ascent;
  }
  get defaultWidth() {
    return n(this, pt).defaultWidth;
  }
  get descent() {
    return n(this, pt).descent;
  }
  get bbox() {
    return n(this, pt).bbox;
  }
  get fontMatrix() {
    return n(this, pt).fontMatrix;
  }
  get fallbackName() {
    return n(this, pt).fallbackName;
  }
  get loadedName() {
    return n(this, pt).loadedName;
  }
  get mimetype() {
    return n(this, pt).mimetype;
  }
  get name() {
    return n(this, pt).name;
  }
  get data() {
    return n(this, pt).data;
  }
  clearData() {
    n(this, pt).clearData();
  }
  get cssFontInfo() {
    return n(this, pt).cssFontInfo;
  }
  get systemFontInfo() {
    return n(this, pt).systemFontInfo;
  }
  get defaultVMetrics() {
    return n(this, pt).defaultVMetrics;
  }
}
pt = /* @__PURE__ */ new WeakMap();
function lA(d) {
  if (d instanceof URL) return d.href;
  if (typeof d == "string") {
    if (Be) return d;
    const t = URL.parse(d, window.location);
    if (t) return t.href;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function hA(d) {
  if (Be && typeof Buffer < "u" && d instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && d.byteLength === d.buffer.byteLength) return d;
  if (typeof d == "string") return hd(d);
  if (d instanceof ArrayBuffer || ArrayBuffer.isView(d) || typeof d == "object" && !isNaN(d == null ? void 0 : d.length)) return new Uint8Array(d);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Ad(d) {
  if (typeof d != "string") return null;
  if (d.endsWith("/")) return d;
  throw new Error(`Invalid factory url: "${d}" must include trailing slash.`);
}
const kf = (d) => typeof d == "object" && Number.isInteger(d == null ? void 0 : d.num) && d.num >= 0 && Number.isInteger(d == null ? void 0 : d.gen) && d.gen >= 0, cA = (d) => typeof d == "object" && typeof (d == null ? void 0 : d.name) == "string", Fm = Jy.bind(null, kf, cA);
var Ji, Cu;
class dA {
  constructor() {
    g(this, Ji, /* @__PURE__ */ new Map());
    g(this, Cu, Promise.resolve());
  }
  postMessage(t, e) {
    const s = { data: structuredClone(t, e ? { transfer: e } : null) };
    n(this, Cu).then(() => {
      for (const [i] of n(this, Ji)) i.call(this, s);
    });
  }
  addEventListener(t, e, s = null) {
    let i = null;
    if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
      const { signal: r } = s;
      if (r.aborted) {
        Y("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = () => this.removeEventListener(t, e);
      i = () => r.removeEventListener("abort", a), r.addEventListener("abort", a);
    }
    n(this, Ji).set(e, i);
  }
  removeEventListener(t, e) {
    const s = n(this, Ji).get(e);
    s == null || s(), n(this, Ji).delete(e);
  }
  terminate() {
    for (const [, t] of n(this, Ji)) t == null || t();
    n(this, Ji).clear();
  }
}
Ji = /* @__PURE__ */ new WeakMap(), Cu = /* @__PURE__ */ new WeakMap();
const wd = { DATA: 1, ERROR: 2 }, Wt = { CANCEL: 1, CANCEL_COMPLETE: 2, CLOSE: 3, ENQUEUE: 4, ERROR: 5, PULL: 6, PULL_COMPLETE: 7, START_COMPLETE: 8 };
function gg() {
}
function je(d) {
  if (d instanceof Sn || d instanceof au || d instanceof og || d instanceof vh || d instanceof Ju) return d;
  switch (d instanceof Error || typeof d == "object" && d !== null || _t('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), d.name) {
    case "AbortException":
      return new Sn(d.message);
    case "InvalidPDFException":
      return new au(d.message);
    case "PasswordException":
      return new og(d.message, d.code);
    case "ResponseException":
      return new vh(d.message, d.status, d.missing);
    case "UnknownErrorException":
      return new Ju(d.message, d.details);
  }
  return new Ju(d.message, d.toString());
}
var Bo, Bs, Nm, Om, Bm, Id;
class nh {
  constructor(t, e, s) {
    g(this, Bs);
    g(this, Bo, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", b(this, Bs, Nm).bind(this), { signal: n(this, Bo).signal });
  }
  on(t, e) {
    const s = this.actionHandler;
    if (s[t]) throw new Error(`There is already an actionName called "${t}"`);
    s[t] = e;
  }
  send(t, e, s) {
    this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t, data: e }, s);
  }
  sendWithPromise(t, e, s) {
    const i = this.callbackId++, r = Promise.withResolvers();
    this.callbackCapabilities[i] = r;
    try {
      this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t, callbackId: i, data: e }, s);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }
  sendWithStream(t, e, s, i) {
    const r = this.streamId++, a = this.sourceName, o = this.targetName, l = this.comObj;
    return new ReadableStream({ start: (h) => {
      const c = Promise.withResolvers();
      return this.streamControllers[r] = { controller: h, startCall: c, pullCall: null, cancelCall: null, isClosed: false }, l.postMessage({ sourceName: a, targetName: o, action: t, streamId: r, data: e, desiredSize: h.desiredSize }, i), c.promise;
    }, pull: (h) => {
      const c = Promise.withResolvers();
      return this.streamControllers[r].pullCall = c, l.postMessage({ sourceName: a, targetName: o, stream: Wt.PULL, streamId: r, desiredSize: h.desiredSize }), c.promise;
    }, cancel: (h) => {
      rt(h instanceof Error, "cancel must have a valid reason");
      const c = Promise.withResolvers();
      return this.streamControllers[r].cancelCall = c, this.streamControllers[r].isClosed = true, l.postMessage({ sourceName: a, targetName: o, stream: Wt.CANCEL, streamId: r, reason: je(h) }), c.promise;
    } }, s);
  }
  destroy() {
    var t;
    (t = n(this, Bo)) == null || t.abort(), f(this, Bo, null);
  }
}
Bo = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakSet(), Nm = function({ data: t }) {
  if (t.targetName !== this.sourceName) return;
  if (t.stream) {
    b(this, Bs, Bm).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i) throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === wd.DATA) i.resolve(t.data);
    else if (t.callback === wd.ERROR) i.reject(je(t.reason));
    else throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e) throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const s = this.sourceName, i = t.sourceName, r = this.comObj;
    Promise.try(e, t.data).then(function(a) {
      r.postMessage({ sourceName: s, targetName: i, callback: wd.DATA, callbackId: t.callbackId, data: a });
    }, function(a) {
      r.postMessage({ sourceName: s, targetName: i, callback: wd.ERROR, callbackId: t.callbackId, reason: je(a) });
    });
    return;
  }
  if (t.streamId) {
    b(this, Bs, Om).call(this, t);
    return;
  }
  e(t.data);
}, Om = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], l = { enqueue(h, c = 1, u) {
    if (this.isCancelled) return;
    const p = this.desiredSize;
    this.desiredSize -= c, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({ sourceName: s, targetName: i, stream: Wt.ENQUEUE, streamId: e, chunk: h }, u);
  }, close() {
    this.isCancelled || (this.isCancelled = true, r.postMessage({ sourceName: s, targetName: i, stream: Wt.CLOSE, streamId: e }), delete a.streamSinks[e]);
  }, error(h) {
    rt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = true, r.postMessage({ sourceName: s, targetName: i, stream: Wt.ERROR, streamId: e, reason: je(h) }));
  }, sinkCapability: Promise.withResolvers(), onPull: null, onCancel: null, isCancelled: false, desiredSize: t.desiredSize, ready: null };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[e] = l, Promise.try(o, t.data, l).then(function() {
    r.postMessage({ sourceName: s, targetName: i, stream: Wt.START_COMPLETE, streamId: e, success: true });
  }, function(h) {
    r.postMessage({ sourceName: s, targetName: i, stream: Wt.START_COMPLETE, streamId: e, reason: je(h) });
  });
}, Bm = function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case Wt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(je(t.reason));
      break;
    case Wt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(je(t.reason));
      break;
    case Wt.PULL:
      if (!o) {
        r.postMessage({ sourceName: s, targetName: i, stream: Wt.PULL_COMPLETE, streamId: e, success: true });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || gg).then(function() {
        r.postMessage({ sourceName: s, targetName: i, stream: Wt.PULL_COMPLETE, streamId: e, success: true });
      }, function(h) {
        r.postMessage({ sourceName: s, targetName: i, stream: Wt.PULL_COMPLETE, streamId: e, reason: je(h) });
      });
      break;
    case Wt.ENQUEUE:
      if (rt(a, "enqueue should have stream controller"), a.isClosed) break;
      a.controller.enqueue(t.chunk);
      break;
    case Wt.CLOSE:
      if (rt(a, "close should have stream controller"), a.isClosed) break;
      a.isClosed = true, a.controller.close(), b(this, Bs, Id).call(this, a, e);
      break;
    case Wt.ERROR:
      rt(a, "error should have stream controller"), a.controller.error(je(t.reason)), b(this, Bs, Id).call(this, a, e);
      break;
    case Wt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(je(t.reason)), b(this, Bs, Id).call(this, a, e);
      break;
    case Wt.CANCEL:
      if (!o) break;
      const l = je(t.reason);
      Promise.try(o.onCancel || gg, l).then(function() {
        r.postMessage({ sourceName: s, targetName: i, stream: Wt.CANCEL_COMPLETE, streamId: e, success: true });
      }, function(h) {
        r.postMessage({ sourceName: s, targetName: i, stream: Wt.CANCEL_COMPLETE, streamId: e, reason: je(h) });
      }), o.sinkCapability.reject(l), o.isCancelled = true, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Id = async function(t, e) {
  var s, i, r;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
var sc;
class Hm {
  constructor({ enableHWA: t = false }) {
    g(this, sc, false);
    f(this, sc, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return { canvas: s, context: s.getContext("2d", { willReadFrequently: !n(this, sc) }) };
  }
  reset(t, e, s) {
    if (!t.canvas) throw new Error("Canvas is not specified");
    if (e <= 0 || s <= 0) throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = s;
  }
  destroy(t) {
    if (!t.canvas) throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    _t("Abstract method `_createCanvas` called.");
  }
}
sc = /* @__PURE__ */ new WeakMap();
class uA extends Hm {
  constructor({ ownerDocument: t = globalThis.document, enableHWA: e = false }) {
    super({ enableHWA: e }), this._document = t;
  }
  _createCanvas(t, e) {
    const s = this._document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
}
class Um {
  constructor({ baseUrl: t = null, isCompressed: e = true }) {
    this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({ name: t }) {
    if (!this.baseUrl) throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t) throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e).then((s) => ({ cMapData: s, isCompressed: this.isCompressed })).catch((s) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t) {
    _t("Abstract method `_fetch` called.");
  }
}
class mg extends Um {
  async _fetch(t) {
    const e = await Wl(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : hd(e);
  }
}
class jm {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, s, i, r) {
    return "none";
  }
  destroy(t = false) {
  }
}
var ea, Ho, Qi, Zi, xe, sa, ia, U, Se, rh, so, Fd, io, $m, Rf, no, ah, oh, Mf, lh;
class fA extends jm {
  constructor({ docId: e, ownerDocument: s = globalThis.document }) {
    super();
    g(this, U);
    g(this, ea);
    g(this, Ho);
    g(this, Qi);
    g(this, Zi);
    g(this, xe);
    g(this, sa);
    g(this, ia, 0);
    f(this, Zi, e), f(this, xe, s);
  }
  addFilter(e) {
    if (!e) return "none";
    let s = n(this, U, Se).get(e);
    if (s) return s;
    const [i, r, a] = b(this, U, Fd).call(this, e), o = e.length === 1 ? i : `${i}${r}${a}`;
    if (s = n(this, U, Se).get(o), s) return n(this, U, Se).set(e, s), s;
    const l = `g_${n(this, Zi)}_transfer_map_${Kt(this, ia)._++}`, h = b(this, U, io).call(this, l);
    n(this, U, Se).set(e, h), n(this, U, Se).set(o, h);
    const c = b(this, U, no).call(this, l);
    return b(this, U, oh).call(this, i, r, a, c), h;
  }
  addHCMFilter(e, s) {
    var A;
    const i = `${e}-${s}`, r = "base";
    let a = n(this, U, rh).get(r);
    if ((a == null ? void 0 : a.key) === i || (a ? ((A = a.filter) == null || A.remove(), a.key = i, a.url = "none", a.filter = null) : (a = { key: i, url: "none", filter: null }, n(this, U, rh).set(r, a)), !e || !s)) return a.url;
    const o = b(this, U, lh).call(this, e);
    e = $.makeHexColor(...o);
    const l = b(this, U, lh).call(this, s);
    if (s = $.makeHexColor(...l), n(this, U, so).style.color = "", e === "#000000" && s === "#ffffff" || e === s) return a.url;
    const h = new Array(256);
    for (let y = 0; y <= 255; y++) {
      const v = y / 255;
      h[y] = v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    }
    const c = h.join(","), u = `g_${n(this, Zi)}_hcm_filter`, p = a.filter = b(this, U, no).call(this, u);
    b(this, U, oh).call(this, c, c, c, p), b(this, U, Rf).call(this, p);
    const m = (y, v) => {
      const w = o[y] / 255, S = l[y] / 255, E = new Array(v + 1);
      for (let _ = 0; _ <= v; _++) E[_] = w + _ / v * (S - w);
      return E.join(",");
    };
    return b(this, U, oh).call(this, m(0, 5), m(1, 5), m(2, 5), p), a.url = b(this, U, io).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let s = n(this, U, Se).get(e);
    if (s) return s;
    const [i] = b(this, U, Fd).call(this, [e]), r = `alpha_${i}`;
    if (s = n(this, U, Se).get(r), s) return n(this, U, Se).set(e, s), s;
    const a = `g_${n(this, Zi)}_alpha_map_${Kt(this, ia)._++}`, o = b(this, U, io).call(this, a);
    n(this, U, Se).set(e, o), n(this, U, Se).set(r, o);
    const l = b(this, U, no).call(this, a);
    return b(this, U, Mf).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = n(this, U, Se).get(e || "luminosity");
    if (s) return s;
    let i, r;
    if (e ? ([i] = b(this, U, Fd).call(this, [e]), r = `luminosity_${i}`) : r = "luminosity", s = n(this, U, Se).get(r), s) return n(this, U, Se).set(e, s), s;
    const a = `g_${n(this, Zi)}_luminosity_map_${Kt(this, ia)._++}`, o = b(this, U, io).call(this, a);
    n(this, U, Se).set(e, o), n(this, U, Se).set(r, o);
    const l = b(this, U, no).call(this, a);
    return b(this, U, $m).call(this, l), e && b(this, U, Mf).call(this, i, l), o;
  }
  addHighlightHCMFilter(e, s, i, r, a) {
    var S;
    const o = `${s}-${i}-${r}-${a}`;
    let l = n(this, U, rh).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((S = l.filter) == null || S.remove(), l.key = o, l.url = "none", l.filter = null) : (l = { key: o, url: "none", filter: null }, n(this, U, rh).set(e, l)), !s || !i)) return l.url;
    const [h, c] = [s, i].map(b(this, U, lh).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [m, A] = [r, a].map(b(this, U, lh).bind(this));
    p < u && ([u, p, m, A] = [p, u, A, m]), n(this, U, so).style.color = "";
    const y = (E, _, C) => {
      const x = new Array(256), T = (p - u) / C, P = E / 255, k = (_ - E) / (255 * C);
      let D = 0;
      for (let L = 0; L <= C; L++) {
        const F = Math.round(u + L * T), V = P + L * k;
        for (let O = D; O <= F; O++) x[O] = V;
        D = F + 1;
      }
      for (let L = D; L < 256; L++) x[L] = x[D - 1];
      return x.join(",");
    }, v = `g_${n(this, Zi)}_hcm_${e}_filter`, w = l.filter = b(this, U, no).call(this, v);
    return b(this, U, Rf).call(this, w), b(this, U, oh).call(this, y(m[0], A[0], 5), y(m[1], A[1], 5), y(m[2], A[2], 5), w), l.url = b(this, U, io).call(this, v), l.url;
  }
  destroy(e = false) {
    var s, i, r, a;
    e && ((s = n(this, sa)) != null && s.size) || ((i = n(this, Qi)) == null || i.parentNode.parentNode.remove(), f(this, Qi, null), (r = n(this, Ho)) == null || r.clear(), f(this, Ho, null), (a = n(this, sa)) == null || a.clear(), f(this, sa, null), f(this, ia, 0));
  }
}
ea = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), Zi = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakSet(), Se = function() {
  return n(this, Ho) || f(this, Ho, /* @__PURE__ */ new Map());
}, rh = function() {
  return n(this, sa) || f(this, sa, /* @__PURE__ */ new Map());
}, so = function() {
  if (!n(this, Qi)) {
    const e = n(this, xe).createElement("div"), { style: s } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = n(this, xe).createElementNS(Fi, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), f(this, Qi, n(this, xe).createElementNS(Fi, "defs")), e.append(i), i.append(n(this, Qi)), n(this, xe).body.append(e);
  }
  return n(this, Qi);
}, Fd = function(e) {
  if (e.length === 1) {
    const h = e[0], c = new Array(256);
    for (let p = 0; p < 256; p++) c[p] = h[p] / 255;
    const u = c.join(",");
    return [u, u, u];
  }
  const [s, i, r] = e, a = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++) a[h] = s[h] / 255, o[h] = i[h] / 255, l[h] = r[h] / 255;
  return [a.join(","), o.join(","), l.join(",")];
}, io = function(e) {
  if (n(this, ea) === void 0) {
    f(this, ea, "");
    const s = n(this, xe).URL;
    s !== n(this, xe).baseURI && (dd(s) ? Y('#createUrl: ignore "data:"-URL for performance reasons.') : f(this, ea, Np(s, "")));
  }
  return `url(${n(this, ea)}#${e})`;
}, $m = function(e) {
  const s = n(this, xe).createElementNS(Fi, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, Rf = function(e) {
  const s = n(this, xe).createElementNS(Fi, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, no = function(e) {
  const s = n(this, xe).createElementNS(Fi, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), n(this, U, so).append(s), s;
}, ah = function(e, s, i) {
  const r = n(this, xe).createElementNS(Fi, s);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", i), e.append(r);
}, oh = function(e, s, i, r) {
  const a = n(this, xe).createElementNS(Fi, "feComponentTransfer");
  r.append(a), b(this, U, ah).call(this, a, "feFuncR", e), b(this, U, ah).call(this, a, "feFuncG", s), b(this, U, ah).call(this, a, "feFuncB", i);
}, Mf = function(e, s) {
  const i = n(this, xe).createElementNS(Fi, "feComponentTransfer");
  s.append(i), b(this, U, ah).call(this, i, "feFuncA", e);
}, lh = function(e) {
  return n(this, U, so).style.color = e, Xl(getComputedStyle(n(this, U, so)).getPropertyValue("color"));
};
class zm {
  constructor({ baseUrl: t = null }) {
    this.baseUrl = t;
  }
  async fetch({ filename: t }) {
    if (!this.baseUrl) throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t) throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    _t("Abstract method `_fetch` called.");
  }
}
class bg extends zm {
  async _fetch(t) {
    const e = await Wl(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
class Gm {
  constructor({ baseUrl: t = null }) {
    this.baseUrl = t;
  }
  async fetch({ filename: t }) {
    if (!this.baseUrl) throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
    if (!t) throw new Error("Wasm filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load wasm data at: ${e}`);
    });
  }
  async _fetch(t) {
    _t("Abstract method `_fetch` called.");
  }
}
class yg extends Gm {
  async _fetch(t) {
    const e = await Wl(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
Be && Y("Please use the `legacy` build in Node.js environments.");
async function $p(d) {
  const e = await process.getBuiltinModule("fs").promises.readFile(d);
  return new Uint8Array(e);
}
class pA extends jm {
}
class gA extends Hm {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class mA extends Um {
  async _fetch(t) {
    return $p(t);
  }
}
class bA extends zm {
  async _fetch(t) {
    return $p(t);
  }
}
class yA extends Gm {
  async _fetch(t) {
    return $p(t);
  }
}
const Za = "__forcedDependency", { floor: Ag, ceil: wg } = Math;
function vd(d, t, e, s, i, r) {
  d[t * 4 + 0] = Math.min(d[t * 4 + 0], e), d[t * 4 + 1] = Math.min(d[t * 4 + 1], s), d[t * 4 + 2] = Math.max(d[t * 4 + 2], i), d[t * 4 + 3] = Math.max(d[t * 4 + 3], r);
}
const Df = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
var Uo, qn;
class AA {
  constructor(t, e) {
    g(this, Uo);
    g(this, qn);
    f(this, Uo, t), f(this, qn, e);
  }
  get length() {
    return n(this, Uo).length;
  }
  isEmpty(t) {
    return n(this, Uo)[t] === Df;
  }
  minX(t) {
    return n(this, qn)[t * 4 + 0] / 256;
  }
  minY(t) {
    return n(this, qn)[t * 4 + 1] / 256;
  }
  maxX(t) {
    return (n(this, qn)[t * 4 + 2] + 1) / 256;
  }
  maxY(t) {
    return (n(this, qn)[t * 4 + 3] + 1) / 256;
  }
}
Uo = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap();
const Ed = (d, t) => {
  if (!d) return;
  let e = d.get(t);
  return e || (e = { dependencies: /* @__PURE__ */ new Set(), isRenderingOperation: false }, d.set(t, e)), e;
};
var Ge, Ve, na, Ws, ra, tn, ft, gt, en, We, ic, jo, aa, oa, sn, Te, yi, nc, Lf;
class wA {
  constructor(t, e, s = false) {
    g(this, nc);
    g(this, Ge, { __proto__: null });
    g(this, Ve, { __proto__: null, transform: [], moveText: [], sameLineText: [], [Za]: [] });
    g(this, na, /* @__PURE__ */ new Map());
    g(this, Ws, []);
    g(this, ra, []);
    g(this, tn, [[1, 0, 0, 1, 0, 0]]);
    g(this, ft, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    g(this, gt, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    g(this, en, -1);
    g(this, We, /* @__PURE__ */ new Set());
    g(this, ic, /* @__PURE__ */ new Map());
    g(this, jo, /* @__PURE__ */ new Map());
    g(this, aa);
    g(this, oa);
    g(this, sn);
    g(this, Te);
    g(this, yi);
    f(this, aa, t.width), f(this, oa, t.height), b(this, nc, Lf).call(this, e), s && f(this, yi, /* @__PURE__ */ new Map());
  }
  growOperationsCount(t) {
    t >= n(this, Te).length && b(this, nc, Lf).call(this, t, n(this, Te));
  }
  save(t) {
    return f(this, Ge, { __proto__: n(this, Ge) }), f(this, Ve, { __proto__: n(this, Ve), transform: { __proto__: n(this, Ve).transform }, moveText: { __proto__: n(this, Ve).moveText }, sameLineText: { __proto__: n(this, Ve).sameLineText }, [Za]: { __proto__: n(this, Ve)[Za] } }), f(this, ft, { __proto__: n(this, ft) }), n(this, Ws).push(t), this;
  }
  restore(t) {
    var i;
    const e = Object.getPrototypeOf(n(this, Ge));
    if (e === null) return this;
    f(this, Ge, e), f(this, Ve, Object.getPrototypeOf(n(this, Ve))), f(this, ft, Object.getPrototypeOf(n(this, ft)));
    const s = n(this, Ws).pop();
    return s !== void 0 && ((i = Ed(n(this, yi), t)) == null || i.dependencies.add(s), n(this, Te)[t] = n(this, Te)[s]), this;
  }
  recordOpenMarker(t) {
    return n(this, Ws).push(t), this;
  }
  getOpenMarker() {
    return n(this, Ws).length === 0 ? null : n(this, Ws).at(-1);
  }
  recordCloseMarker(t) {
    var s;
    const e = n(this, Ws).pop();
    return e !== void 0 && ((s = Ed(n(this, yi), t)) == null || s.dependencies.add(e), n(this, Te)[t] = n(this, Te)[e]), this;
  }
  beginMarkedContent(t) {
    return n(this, ra).push(t), this;
  }
  endMarkedContent(t) {
    var s;
    const e = n(this, ra).pop();
    return e !== void 0 && ((s = Ed(n(this, yi), t)) == null || s.dependencies.add(e), n(this, Te)[t] = n(this, Te)[e]), this;
  }
  pushBaseTransform(t) {
    return n(this, tn).push($.multiplyByDOMMatrix(n(this, tn).at(-1), t.getTransform())), this;
  }
  popBaseTransform() {
    return n(this, tn).length > 1 && n(this, tn).pop(), this;
  }
  recordSimpleData(t, e) {
    return n(this, Ge)[t] = e, this;
  }
  recordIncrementalData(t, e) {
    return n(this, Ve)[t].push(e), this;
  }
  resetIncrementalData(t, e) {
    return n(this, Ve)[t].length = 0, this;
  }
  recordNamedData(t, e) {
    return n(this, na).set(t, e), this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    n(this, Ge)[t] = n(this, na).get(e) ?? s;
  }
  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData(Za, e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t) e in n(this, Ge) && this.recordFutureForcedDependency(e, n(this, Ge)[e]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of n(this, We)) this.recordFutureForcedDependency(Za, t);
    return this;
  }
  resetBBox(t) {
    return n(this, en) !== t && (f(this, en, t), n(this, gt)[0] = 1 / 0, n(this, gt)[1] = 1 / 0, n(this, gt)[2] = -1 / 0, n(this, gt)[3] = -1 / 0), this;
  }
  recordClipBox(t, e, s, i, r, a) {
    const o = $.multiplyByDOMMatrix(n(this, tn).at(-1), e.getTransform()), l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    $.axialAlignedBoundingBox([s, r, i, a], o, l);
    const h = $.intersect(n(this, ft), l);
    return h ? (n(this, ft)[0] = h[0], n(this, ft)[1] = h[1], n(this, ft)[2] = h[2], n(this, ft)[3] = h[3]) : (n(this, ft)[0] = n(this, ft)[1] = 1 / 0, n(this, ft)[2] = n(this, ft)[3] = -1 / 0), this;
  }
  recordBBox(t, e, s, i, r, a) {
    const o = n(this, ft);
    if (o[0] === 1 / 0) return this;
    const l = $.multiplyByDOMMatrix(n(this, tn).at(-1), e.getTransform());
    if (o[0] === -1 / 0) return $.axialAlignedBoundingBox([s, r, i, a], l, n(this, gt)), this;
    const h = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return $.axialAlignedBoundingBox([s, r, i, a], l, h), n(this, gt)[0] = Math.min(n(this, gt)[0], Math.max(h[0], o[0])), n(this, gt)[1] = Math.min(n(this, gt)[1], Math.max(h[1], o[1])), n(this, gt)[2] = Math.max(n(this, gt)[2], Math.min(h[2], o[2])), n(this, gt)[3] = Math.max(n(this, gt)[3], Math.min(h[3], o[3])), this;
  }
  recordCharacterBBox(t, e, s, i = 1, r = 0, a = 0, o) {
    const l = s.bbox;
    let h, c;
    if (l && (h = l[2] !== l[0] && l[3] !== l[1] && n(this, jo).get(s), h !== false && (c = [0, 0, 0, 0], $.axialAlignedBoundingBox(l, s.fontMatrix, c), (i !== 1 || r !== 0 || a !== 0) && $.scaleMinMax([i, 0, 0, -i, r, a], c), h))) return this.recordBBox(t, e, c[0], c[2], c[1], c[3]);
    if (!o) return this.recordFullPageBBox(t);
    const u = o();
    return l && c && h === void 0 && (h = c[0] <= r - u.actualBoundingBoxLeft && c[2] >= r + u.actualBoundingBoxRight && c[1] <= a - u.actualBoundingBoxAscent && c[3] >= a + u.actualBoundingBoxDescent, n(this, jo).set(s, h), h) ? this.recordBBox(t, e, c[0], c[2], c[1], c[3]) : this.recordBBox(t, e, r - u.actualBoundingBoxLeft, r + u.actualBoundingBoxRight, a - u.actualBoundingBoxAscent, a + u.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t) {
    return n(this, gt)[0] = Math.max(0, n(this, ft)[0]), n(this, gt)[1] = Math.max(0, n(this, ft)[1]), n(this, gt)[2] = Math.min(n(this, aa), n(this, ft)[2]), n(this, gt)[3] = Math.min(n(this, oa), n(this, ft)[3]), this;
  }
  getSimpleIndex(t) {
    return n(this, Ge)[t];
  }
  recordDependencies(t, e) {
    const s = n(this, We), i = n(this, Ge), r = n(this, Ve);
    for (const a of e) a in n(this, Ge) ? s.add(i[a]) : a in r && r[a].forEach(s.add, s);
    return this;
  }
  recordNamedDependency(t, e) {
    return n(this, na).has(e) && n(this, We).add(n(this, na).get(e)), this;
  }
  recordOperation(t, e = false) {
    if (this.recordDependencies(t, [Za]), n(this, yi)) {
      const s = Ed(n(this, yi), t), { dependencies: i } = s;
      n(this, We).forEach(i.add, i), n(this, Ws).forEach(i.add, i), n(this, ra).forEach(i.add, i), i.delete(t), s.isRenderingOperation = true;
    }
    if (n(this, en) === t) {
      const s = Ag(n(this, gt)[0] * 256 / n(this, aa)), i = Ag(n(this, gt)[1] * 256 / n(this, oa)), r = wg(n(this, gt)[2] * 256 / n(this, aa)), a = wg(n(this, gt)[3] * 256 / n(this, oa));
      vd(n(this, sn), t, s, i, r, a);
      for (const o of n(this, We)) o !== t && vd(n(this, sn), o, s, i, r, a);
      for (const o of n(this, Ws)) o !== t && vd(n(this, sn), o, s, i, r, a);
      for (const o of n(this, ra)) o !== t && vd(n(this, sn), o, s, i, r, a);
      e || (n(this, We).clear(), f(this, en, -1));
    }
    return this;
  }
  recordShowTextOperation(t, e = false) {
    const s = Array.from(n(this, We));
    this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t);
    for (const i of s) this.recordIncrementalData("sameLineText", i);
    return this;
  }
  bboxToClipBoxDropOperation(t, e = false) {
    return n(this, en) === t && (f(this, en, -1), n(this, ft)[0] = Math.max(n(this, ft)[0], n(this, gt)[0]), n(this, ft)[1] = Math.max(n(this, ft)[1], n(this, gt)[1]), n(this, ft)[2] = Math.min(n(this, ft)[2], n(this, gt)[2]), n(this, ft)[3] = Math.min(n(this, ft)[3], n(this, gt)[3]), e || n(this, We).clear()), this;
  }
  _takePendingDependencies() {
    const t = n(this, We);
    return f(this, We, /* @__PURE__ */ new Set()), t;
  }
  _extractOperation(t) {
    const e = n(this, ic).get(t);
    return n(this, ic).delete(t), e;
  }
  _pushPendingDependencies(t) {
    for (const e of t) n(this, We).add(e);
  }
  take() {
    return n(this, jo).clear(), new AA(n(this, Te), n(this, sn));
  }
  takeDebugMetadata() {
    return n(this, yi);
  }
}
Ge = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), na = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), ic = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), nc = /* @__PURE__ */ new WeakSet(), Lf = function(t, e) {
  const s = new ArrayBuffer(t * 4);
  f(this, sn, new Uint8ClampedArray(s)), f(this, Te, new Uint32Array(s)), e && e.length > 0 ? (n(this, Te).set(e), n(this, Te).fill(Df, e.length)) : n(this, Te).fill(Df);
};
var vt, Ht, Xs, $o, zo;
const Zp = class Zp2 {
  constructor(t, e, s) {
    g(this, vt);
    g(this, Ht);
    g(this, Xs);
    g(this, $o, 0);
    g(this, zo, 0);
    if (t instanceof Zp2 && n(t, Xs) === !!s) return t;
    f(this, vt, t), f(this, Ht, e), f(this, Xs, !!s);
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(t) {
    return Kt(this, zo)._++, n(this, vt).save(n(this, Ht)), this;
  }
  restore(t) {
    return n(this, zo) > 0 && (n(this, vt).restore(n(this, Ht)), Kt(this, zo)._--), this;
  }
  recordOpenMarker(t) {
    return Kt(this, $o)._++, this;
  }
  getOpenMarker() {
    return n(this, $o) > 0 ? n(this, Ht) : n(this, vt).getOpenMarker();
  }
  recordCloseMarker(t) {
    return Kt(this, $o)._--, this;
  }
  beginMarkedContent(t) {
    return this;
  }
  endMarkedContent(t) {
    return this;
  }
  pushBaseTransform(t) {
    return n(this, vt).pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return n(this, vt).popBaseTransform(), this;
  }
  recordSimpleData(t, e) {
    return n(this, vt).recordSimpleData(t, n(this, Ht)), this;
  }
  recordIncrementalData(t, e) {
    return n(this, vt).recordIncrementalData(t, n(this, Ht)), this;
  }
  resetIncrementalData(t, e) {
    return n(this, vt).resetIncrementalData(t, n(this, Ht)), this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    return n(this, vt).recordSimpleDataFromNamed(t, e, n(this, Ht)), this;
  }
  recordFutureForcedDependency(t, e) {
    return n(this, vt).recordFutureForcedDependency(t, n(this, Ht)), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return n(this, vt).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return n(this, vt).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }
  resetBBox(t) {
    return n(this, Xs) || n(this, vt).resetBBox(n(this, Ht)), this;
  }
  recordClipBox(t, e, s, i, r, a) {
    return n(this, Xs) || n(this, vt).recordClipBox(n(this, Ht), e, s, i, r, a), this;
  }
  recordBBox(t, e, s, i, r, a) {
    return n(this, Xs) || n(this, vt).recordBBox(n(this, Ht), e, s, i, r, a), this;
  }
  recordCharacterBBox(t, e, s, i, r, a, o) {
    return n(this, Xs) || n(this, vt).recordCharacterBBox(n(this, Ht), e, s, i, r, a, o), this;
  }
  recordFullPageBBox(t) {
    return n(this, Xs) || n(this, vt).recordFullPageBBox(n(this, Ht)), this;
  }
  getSimpleIndex(t) {
    return n(this, vt).getSimpleIndex(t);
  }
  recordDependencies(t, e) {
    return n(this, vt).recordDependencies(n(this, Ht), e), this;
  }
  recordNamedDependency(t, e) {
    return n(this, vt).recordNamedDependency(n(this, Ht), e), this;
  }
  recordOperation(t) {
    return n(this, vt).recordOperation(n(this, Ht), true), this;
  }
  recordShowTextOperation(t) {
    return n(this, vt).recordShowTextOperation(n(this, Ht), true), this;
  }
  bboxToClipBoxDropOperation(t) {
    return n(this, Xs) || n(this, vt).bboxToClipBoxDropOperation(n(this, Ht), true), this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
};
vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Xs = /* @__PURE__ */ new WeakMap(), $o = /* @__PURE__ */ new WeakMap(), zo = /* @__PURE__ */ new WeakMap();
let hu = Zp;
const Ss = { stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"], fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"], imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"], rawFillPath: ["filter", "fillColor", "fillAlpha"], showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"], transform: ["transform"], transformAndFill: ["transform", "fillColor"] }, ye = { FILL: "Fill", STROKE: "Stroke", SHADING: "Shading" };
function If(d, t) {
  if (!t) return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), d.clip(i);
}
class zp {
  isModifyingCurrentTransform() {
    return false;
  }
  getPattern() {
    _t("Abstract method `getPattern` called.");
  }
}
class vA extends zp {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const s of this._colorStops) e.addColorStop(s[0], s[1]);
    return e;
  }
  getPattern(t, e, s, i) {
    let r;
    if (i === ye.STROKE || i === ye.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, Ft(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), c = h.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = $.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), If(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), r = t.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(s);
      r.setTransform(u);
    } else If(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function tf(d, t, e, s, i, r, a, o) {
  const l = t.coords, h = t.colors, c = d.data, u = d.width * 4;
  let p;
  l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p), l[s + 1] > l[i + 1] && (p = s, s = i, i = p, p = a, a = o, o = p), l[e + 1] > l[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p);
  const m = (l[e] + t.offsetX) * t.scaleX, A = (l[e + 1] + t.offsetY) * t.scaleY, y = (l[s] + t.offsetX) * t.scaleX, v = (l[s + 1] + t.offsetY) * t.scaleY, w = (l[i] + t.offsetX) * t.scaleX, S = (l[i + 1] + t.offsetY) * t.scaleY;
  if (A >= S) return;
  const E = h[r], _ = h[r + 1], C = h[r + 2], x = h[a], T = h[a + 1], P = h[a + 2], k = h[o], D = h[o + 1], L = h[o + 2], F = Math.round(A), V = Math.round(S);
  let O, X, B, N, et, nt, ee, Je;
  for (let at = F; at <= V; at++) {
    if (at < v) {
      const At = at < A ? 0 : (A - at) / (A - v);
      O = m - (m - y) * At, X = E - (E - x) * At, B = _ - (_ - T) * At, N = C - (C - P) * At;
    } else {
      let At;
      at > S ? At = 1 : v === S ? At = 0 : At = (v - at) / (v - S), O = y - (y - w) * At, X = x - (x - k) * At, B = T - (T - D) * At, N = P - (P - L) * At;
    }
    let ht;
    at < A ? ht = 0 : at > S ? ht = 1 : ht = (A - at) / (A - S), et = m - (m - w) * ht, nt = E - (E - k) * ht, ee = _ - (_ - D) * ht, Je = C - (C - L) * ht;
    const se = Math.round(Math.min(O, et)), de = Math.round(Math.max(O, et));
    let ve = u * at + se * 4;
    for (let At = se; At <= de; At++) ht = (O - At) / (O - et), ht < 0 ? ht = 0 : ht > 1 && (ht = 1), c[ve++] = X - (X - nt) * ht | 0, c[ve++] = B - (B - ee) * ht | 0, c[ve++] = N - (N - Je) * ht | 0, c[ve++] = 255;
  }
}
function EA(d, t, e) {
  const s = t.coords, i = t.colors;
  let r, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
      for (r = 0; r < l; r++) {
        let c = r * o;
        for (let u = 0; u < h; u++, c++) tf(d, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), tf(d, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (r = 0, a = s.length; r < a; r += 3) tf(d, e, s[r], s[r + 1], s[r + 2], i[r], i[r + 1], i[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class SA extends zp {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), p = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), m = h / u, A = c / p, y = { coords: this._coords, colors: this._colors, offsetX: -o, offsetY: -l, scaleX: 1 / m, scaleY: 1 / A }, v = u + 4, w = p + 4, S = s.getCanvas("mesh", v, w), E = S.context, _ = E.createImageData(u, p);
    if (e) {
      const x = _.data;
      for (let T = 0, P = x.length; T < P; T += 4) x[T] = e[0], x[T + 1] = e[1], x[T + 2] = e[2], x[T + 3] = 255;
    }
    for (const x of this._figures) EA(_, x, y);
    return E.putImageData(_, 2, 2), { canvas: S.canvas, offsetX: o - 2 * m, offsetY: l - 2 * A, scaleX: m, scaleY: A };
  }
  isModifyingCurrentTransform() {
    return true;
  }
  getPattern(t, e, s, i) {
    If(t, this._bbox);
    const r = new Float32Array(2);
    if (i === ye.SHADING) $.singularValueDecompose2dScale(Ft(t), r);
    else if (this.matrix) {
      $.singularValueDecompose2dScale(this.matrix, r);
      const [o, l] = r;
      $.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= l;
    } else $.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, i === ye.SHADING ? null : this._background, e.cachedCanvases);
    return i !== ye.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class _A extends zp {
  getPattern() {
    return "hotpink";
  }
}
function CA(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new vA(d);
    case "Mesh":
      return new SA(d);
    case "Dummy":
      return new _A();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const vg = { COLORED: 1, UNCOLORED: 2 }, xu = class xu2 {
  constructor(t, e, s, i) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = s, this.baseTransform = i;
  }
  createPatternCanvas(t, e) {
    var nt, ee;
    const { bbox: s, operatorList: i, paintType: r, tilingType: a, color: o, canvasGraphicsFactory: l } = this;
    let { xstep: h, ystep: c } = this;
    h = Math.abs(h), c = Math.abs(c), Bu("TilingType: " + a);
    const u = s[0], p = s[1], m = s[2], A = s[3], y = m - u, v = A - p, w = new Float32Array(2);
    $.singularValueDecompose2dScale(this.matrix, w);
    const [S, E] = w;
    $.singularValueDecompose2dScale(this.baseTransform, w);
    const _ = S * w[0], C = E * w[1];
    let x = y, T = v, P = false, k = false;
    const D = Math.ceil(h * _), L = Math.ceil(c * C), F = Math.ceil(y * _), V = Math.ceil(v * C);
    D >= F ? x = h : P = true, L >= V ? T = c : k = true;
    const O = this.getSizeAndScale(x, this.ctx.canvas.width, _), X = this.getSizeAndScale(T, this.ctx.canvas.height, C), B = t.cachedCanvases.getCanvas("pattern", O.size, X.size), N = B.context, et = l.createCanvasGraphics(N, e);
    if (et.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(et, r, o), N.translate(-O.scale * u, -X.scale * p), et.transform(0, O.scale, 0, 0, X.scale, 0, 0), N.save(), (nt = et.dependencyTracker) == null || nt.save(), this.clipBbox(et, u, p, m, A), et.baseTransform = Ft(et.ctx), et.executeOperatorList(i), et.endDrawing(), (ee = et.dependencyTracker) == null || ee.restore(), N.restore(), P || k) {
      const Je = B.canvas;
      P && (x = h), k && (T = c);
      const at = this.getSizeAndScale(x, this.ctx.canvas.width, _), ht = this.getSizeAndScale(T, this.ctx.canvas.height, C), se = at.size, de = ht.size, ve = t.cachedCanvases.getCanvas("pattern-workaround", se, de), At = ve.context, Hs = P ? Math.floor(y / h) : 0, ni = k ? Math.floor(v / c) : 0;
      for (let Ii = 0; Ii <= Hs; Ii++) for (let De = 0; De <= ni; De++) At.drawImage(Je, se * Ii, de * De, se, de, 0, 0, se, de);
      return { canvas: ve.canvas, scaleX: at.scale, scaleY: ht.scale, offsetX: u, offsetY: p };
    }
    return { canvas: B.canvas, scaleX: O.scale, scaleY: X.scale, offsetX: u, offsetY: p };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(xu2.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * s);
    return r >= i ? r = i : s = r / t, { scale: s, size: r };
  }
  clipBbox(t, e, s, i, r) {
    const a = i - e, o = r - s;
    t.ctx.rect(e, s, a, o), $.axialAlignedBoundingBox([e, s, i, r], Ft(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, r = t.current;
    switch (e) {
      case vg.COLORED:
        const { fillStyle: a, strokeStyle: o } = this.ctx;
        i.fillStyle = r.fillColor = a, i.strokeStyle = r.strokeColor = o;
        break;
      case vg.UNCOLORED:
        i.fillStyle = i.strokeStyle = s, r.fillColor = r.strokeColor = s;
        break;
      default:
        throw new Wy(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform() {
    return false;
  }
  getPattern(t, e, s, i, r) {
    let a = s;
    i !== ye.SHADING && (a = $.transform(a, e.baseTransform), this.matrix && (a = $.transform(a, this.matrix)));
    const o = this.createPatternCanvas(e, r);
    let l = new DOMMatrix(a);
    l = l.translate(o.offsetX, o.offsetY), l = l.scale(1 / o.scaleX, 1 / o.scaleY);
    const h = t.createPattern(o.canvas, "repeat");
    return h.setTransform(l), h;
  }
};
R(xu, "MAX_PATTERN_SIZE", 3e3);
let Ff = xu;
function xA({ src: d, srcPos: t = 0, dest: e, width: s, height: i, nonBlackColor: r = 4294967295, inverseDecode: a = false }) {
  const o = ce.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [r, o] : [o, r], c = s >> 3, u = s & 7, p = d.length;
  e = new Uint32Array(e.buffer);
  let m = 0;
  for (let A = 0; A < i; A++) {
    for (const v = t + c; t < v; t++) {
      const w = t < p ? d[t] : 255;
      e[m++] = w & 128 ? h : l, e[m++] = w & 64 ? h : l, e[m++] = w & 32 ? h : l, e[m++] = w & 16 ? h : l, e[m++] = w & 8 ? h : l, e[m++] = w & 4 ? h : l, e[m++] = w & 2 ? h : l, e[m++] = w & 1 ? h : l;
    }
    if (u === 0) continue;
    const y = t < p ? d[t++] : 255;
    for (let v = 0; v < u; v++) e[m++] = y & 1 << 7 - v ? h : l;
  }
  return { srcPos: t, destPos: m };
}
const Eg = 16, Sg = 100, TA = 15, _g = 10, Ke = 16, ef = new DOMMatrix(), ys = new Float32Array(2), lo = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function PA(d, t) {
  if (d._removeMirroring) throw new Error("Context is already forwarding operations.");
  d.__originalSave = d.save, d.__originalRestore = d.restore, d.__originalRotate = d.rotate, d.__originalScale = d.scale, d.__originalTranslate = d.translate, d.__originalTransform = d.transform, d.__originalSetTransform = d.setTransform, d.__originalResetTransform = d.resetTransform, d.__originalClip = d.clip, d.__originalMoveTo = d.moveTo, d.__originalLineTo = d.lineTo, d.__originalBezierCurveTo = d.bezierCurveTo, d.__originalRect = d.rect, d.__originalClosePath = d.closePath, d.__originalBeginPath = d.beginPath, d._removeMirroring = () => {
    d.save = d.__originalSave, d.restore = d.__originalRestore, d.rotate = d.__originalRotate, d.scale = d.__originalScale, d.translate = d.__originalTranslate, d.transform = d.__originalTransform, d.setTransform = d.__originalSetTransform, d.resetTransform = d.__originalResetTransform, d.clip = d.__originalClip, d.moveTo = d.__originalMoveTo, d.lineTo = d.__originalLineTo, d.bezierCurveTo = d.__originalBezierCurveTo, d.rect = d.__originalRect, d.closePath = d.__originalClosePath, d.beginPath = d.__originalBeginPath, delete d._removeMirroring;
  }, d.save = function() {
    t.save(), this.__originalSave();
  }, d.restore = function() {
    t.restore(), this.__originalRestore();
  }, d.translate = function(e, s) {
    t.translate(e, s), this.__originalTranslate(e, s);
  }, d.scale = function(e, s) {
    t.scale(e, s), this.__originalScale(e, s);
  }, d.transform = function(e, s, i, r, a, o) {
    t.transform(e, s, i, r, a, o), this.__originalTransform(e, s, i, r, a, o);
  }, d.setTransform = function(e, s, i, r, a, o) {
    t.setTransform(e, s, i, r, a, o), this.__originalSetTransform(e, s, i, r, a, o);
  }, d.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, d.rotate = function(e) {
    t.rotate(e), this.__originalRotate(e);
  }, d.clip = function(e) {
    t.clip(e), this.__originalClip(e);
  }, d.moveTo = function(e, s) {
    t.moveTo(e, s), this.__originalMoveTo(e, s);
  }, d.lineTo = function(e, s) {
    t.lineTo(e, s), this.__originalLineTo(e, s);
  }, d.bezierCurveTo = function(e, s, i, r, a, o) {
    t.bezierCurveTo(e, s, i, r, a, o), this.__originalBezierCurveTo(e, s, i, r, a, o);
  }, d.rect = function(e, s, i, r) {
    t.rect(e, s, i, r), this.__originalRect(e, s, i, r);
  }, d.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, d.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class kA {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, s) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, s)) : (i = this.canvasFactory.create(e, s), this.cache[t] = i), i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Sd(d, t, e, s, i, r, a, o, l, h) {
  const [c, u, p, m, A, y] = Ft(d);
  if (u === 0 && p === 0) {
    const S = a * c + A, E = Math.round(S), _ = o * m + y, C = Math.round(_), x = (a + l) * c + A, T = Math.abs(Math.round(x) - E) || 1, P = (o + h) * m + y, k = Math.abs(Math.round(P) - C) || 1;
    return d.setTransform(Math.sign(c), 0, 0, Math.sign(m), E, C), d.drawImage(t, e, s, i, r, 0, 0, T, k), d.setTransform(c, u, p, m, A, y), [T, k];
  }
  if (c === 0 && m === 0) {
    const S = o * p + A, E = Math.round(S), _ = a * u + y, C = Math.round(_), x = (o + h) * p + A, T = Math.abs(Math.round(x) - E) || 1, P = (a + l) * u + y, k = Math.abs(Math.round(P) - C) || 1;
    return d.setTransform(0, Math.sign(u), Math.sign(p), 0, E, C), d.drawImage(t, e, s, i, r, 0, 0, k, T), d.setTransform(c, u, p, m, A, y), [k, T];
  }
  d.drawImage(t, e, s, i, r, a, o, l, h);
  const v = Math.hypot(c, u), w = Math.hypot(p, m);
  return [v * l, w * h];
}
class Cg {
  constructor(t, e, s) {
    R(this, "alphaIsShape", false);
    R(this, "fontSize", 0);
    R(this, "fontSizeScale", 1);
    R(this, "textMatrix", null);
    R(this, "textMatrixScale", 1);
    R(this, "fontMatrix", of);
    R(this, "leading", 0);
    R(this, "x", 0);
    R(this, "y", 0);
    R(this, "lineX", 0);
    R(this, "lineY", 0);
    R(this, "charSpacing", 0);
    R(this, "wordSpacing", 0);
    R(this, "textHScale", 1);
    R(this, "textRenderingMode", ue.FILL);
    R(this, "textRise", 0);
    R(this, "fillColor", "#000000");
    R(this, "strokeColor", "#000000");
    R(this, "patternFill", false);
    R(this, "patternStroke", false);
    R(this, "fillAlpha", 1);
    R(this, "strokeAlpha", 1);
    R(this, "lineWidth", 1);
    R(this, "activeSMask", null);
    R(this, "transferMaps", "none");
    s == null || s(this), this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = lo.slice();
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }
  getPathBoundingBox(t = ye.FILL, e = null) {
    const s = this.minMax.slice();
    if (t === ye.STROKE) {
      e || _t("Stroke bounding box must include transform."), $.singularValueDecompose2dScale(e, ys);
      const i = ys[0] * this.lineWidth / 2, r = ys[1] * this.lineWidth / 2;
      s[0] -= i, s[1] -= r, s[2] += i, s[3] += r;
    }
    return s;
  }
  updateClipFromPath() {
    const t = $.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(lo, 0);
  }
  getClippedPathBoundingBox(t = ye.FILL, e = null) {
    return $.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function xg(d, t) {
  if (t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % Ke, r = (e - i) / Ke, a = i === 0 ? r : r + 1, o = d.createImageData(s, Ke);
  let l = 0, h;
  const c = t.data, u = o.data;
  let p, m, A, y;
  if (t.kind === Ah.GRAYSCALE_1BPP) {
    const v = c.byteLength, w = new Uint32Array(u.buffer, 0, u.byteLength >> 2), S = w.length, E = s + 7 >> 3, _ = 4294967295, C = ce.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (A = p < r ? Ke : i, h = 0, m = 0; m < A; m++) {
        const x = v - l;
        let T = 0;
        const P = x > E ? s : x * 8 - 7, k = P & -8;
        let D = 0, L = 0;
        for (; T < k; T += 8) L = c[l++], w[h++] = L & 128 ? _ : C, w[h++] = L & 64 ? _ : C, w[h++] = L & 32 ? _ : C, w[h++] = L & 16 ? _ : C, w[h++] = L & 8 ? _ : C, w[h++] = L & 4 ? _ : C, w[h++] = L & 2 ? _ : C, w[h++] = L & 1 ? _ : C;
        for (; T < P; T++) D === 0 && (L = c[l++], D = 128), w[h++] = L & D ? _ : C, D >>= 1;
      }
      for (; h < S; ) w[h++] = 0;
      d.putImageData(o, 0, p * Ke);
    }
  } else if (t.kind === Ah.RGBA_32BPP) {
    for (m = 0, y = s * Ke * 4, p = 0; p < r; p++) u.set(c.subarray(l, l + y)), l += y, d.putImageData(o, 0, m), m += Ke;
    p < a && (y = s * i * 4, u.set(c.subarray(l, l + y)), d.putImageData(o, 0, m));
  } else if (t.kind === Ah.RGB_24BPP) for (A = Ke, y = s * A, p = 0; p < a; p++) {
    for (p >= r && (A = i, y = s * A), h = 0, m = y; m--; ) u[h++] = c[l++], u[h++] = c[l++], u[h++] = c[l++], u[h++] = 255;
    d.putImageData(o, 0, p * Ke);
  }
  else throw new Error(`bad image kind: ${t.kind}`);
}
function Tg(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % Ke, r = (e - i) / Ke, a = i === 0 ? r : r + 1, o = d.createImageData(s, Ke);
  let l = 0;
  const h = t.data, c = o.data;
  for (let u = 0; u < a; u++) {
    const p = u < r ? Ke : i;
    ({ srcPos: l } = xA({ src: h, srcPos: l, dest: c, width: s, height: p, nonBlackColor: 0 })), d.putImageData(o, 0, u * Ke);
  }
}
function ql(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e) d[s] !== void 0 && (t[s] = d[s]);
  d.setLineDash !== void 0 && (t.setLineDash(d.getLineDash()), t.lineDashOffset = d.lineDashOffset);
}
function _d(d) {
  d.strokeStyle = d.fillStyle = "#000000", d.fillRule = "nonzero", d.globalAlpha = 1, d.lineWidth = 1, d.lineCap = "butt", d.lineJoin = "miter", d.miterLimit = 10, d.globalCompositeOperation = "source-over", d.font = "10px sans-serif", d.setLineDash !== void 0 && (d.setLineDash([]), d.lineDashOffset = 0);
  const { filter: t } = d;
  t !== "none" && t !== "" && (d.filter = "none");
}
function Pg(d, t) {
  if (t) return true;
  $.singularValueDecompose2dScale(d, ys);
  const e = Math.fround(si.pixelRatio * _n.PDF_TO_CSS_UNITS);
  return ys[0] <= e && ys[1] <= e;
}
const RA = ["butt", "round", "square"], MA = ["miter", "round", "bevel"], DA = {}, kg = {};
var ii, Nf, Of, Bf;
const tg = class tg2 {
  constructor(t, e, s, i, r, { optionalContentConfig: a, markedContentStack: o = null }, l, h, c) {
    g(this, ii);
    this.ctx = t, this.current = new Cg(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = false, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = true, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new kA(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = c ?? null;
  }
  getObject(t, e, s = null) {
    var i;
    return typeof e == "string" ? ((i = this.dependencyTracker) == null || i.recordNamedDependency(t, e), e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e)) : s;
  }
  beginDrawing({ transform: t, viewport: e, transparency: s = false, background: i = null }) {
    const r = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, s) {
      const l = this.cachedCanvases.getCanvas("transparent", r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...Ft(this.compositeCtx));
    }
    this.ctx.save(), _d(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Ft(this.ctx);
  }
  executeOperatorList(t, e, s, i, r) {
    var w;
    const a = t.argsArray, o = t.fnArray;
    let l = e || 0;
    const h = a.length;
    if (h === l) return l;
    const c = h - l > _g && typeof s == "function", u = c ? Date.now() + TA : 0;
    let p = 0;
    const m = this.commonObjs, A = this.objs;
    let y, v;
    for (; ; ) {
      if (i !== void 0 && l === i.nextBreakPoint) return i.breakIt(l, s), l;
      if (!r || r(l)) if (y = o[l], v = a[l] ?? null, y !== zl.dependency) v === null ? this[y](l) : this[y](l, ...v);
      else for (const S of v) {
        (w = this.dependencyTracker) == null || w.recordNamedData(S, l);
        const E = S.startsWith("g_") ? m : A;
        if (!E.has(S)) return E.get(S, s), l;
      }
      if (l++, l === h) return l;
      if (c && ++p > _g) {
        if (Date.now() > u) return s(), l;
        p = 0;
      }
    }
  }
  endDrawing() {
    b(this, ii, Nf).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values()) typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), b(this, ii, Of).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, l = i, h = "prescale1", c, u;
    for (; r > 2 && o > 1 || a > 2 && l > 1; ) {
      let p = o, m = l;
      r > 2 && o > 1 && (p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / p), a > 2 && l > 1 && (m = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / m), c = this.cachedCanvases.getCanvas(h, p, m), u = c.context, u.clearRect(0, 0, p, m), u.drawImage(t, 0, 0, o, l, 0, 0, p, m), t = c.canvas, o = p, l = m, h = h === "prescale1" ? "prescale2" : "prescale1";
    }
    return { img: t, paintWidth: o, paintHeight: l };
  }
  _createMaskCanvas(t, e) {
    var D, L;
    const s = this.ctx, { width: i, height: r } = e, a = this.current.fillColor, o = this.current.patternFill, l = Ft(s);
    let h, c, u, p;
    if ((e.bitmap || e.data) && e.count > 1) {
      const F = e.bitmap || e.data.buffer;
      c = JSON.stringify(o ? l : [l.slice(0, 4), a]), h = this._cachedBitmapsMap.get(F), h || (h = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(F, h));
      const V = h.get(c);
      if (V && !o) {
        const O = Math.round(Math.min(l[0], l[2]) + l[4]), X = Math.round(Math.min(l[1], l[3]) + l[5]);
        return (D = this.dependencyTracker) == null || D.recordDependencies(t, Ss.transformAndFill), { canvas: V, offsetX: O, offsetY: X };
      }
      u = V;
    }
    u || (p = this.cachedCanvases.getCanvas("maskCanvas", i, r), Tg(p.context, e));
    let m = $.transform(l, [1 / i, 0, 0, -1 / r, 0, 0]);
    m = $.transform(m, [1, 0, 0, 1, 0, -r]);
    const A = lo.slice();
    $.axialAlignedBoundingBox([0, 0, i, r], m, A);
    const [y, v, w, S] = A, E = Math.round(w - y) || 1, _ = Math.round(S - v) || 1, C = this.cachedCanvases.getCanvas("fillCanvas", E, _), x = C.context, T = y, P = v;
    x.translate(-T, -P), x.transform(...m), u || (u = this._scaleImage(p.canvas, ri(x)), u = u.img, h && o && h.set(c, u)), x.imageSmoothingEnabled = Pg(Ft(x), e.interpolate), Sd(x, u, 0, 0, u.width, u.height, 0, 0, i, r), x.globalCompositeOperation = "source-in";
    const k = $.transform(ri(x), [1, 0, 0, 1, -T, -P]);
    return x.fillStyle = o ? a.getPattern(s, this, k, ye.FILL, t) : a, x.fillRect(0, 0, i, r), h && !o && (this.cachedCanvases.delete("fillCanvas"), h.set(c, C.canvas)), (L = this.dependencyTracker) == null || L.recordDependencies(t, Ss.transformAndFill), { canvas: C.canvas, offsetX: Math.round(T), offsetY: Math.round(P) };
  }
  setLineWidth(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineWidth", t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }
  setLineCap(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineCap", t), this.ctx.lineCap = RA[e];
  }
  setLineJoin(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineJoin", t), this.ctx.lineJoin = MA[e];
  }
  setMiterLimit(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("miterLimit", t), this.ctx.miterLimit = e;
  }
  setDash(t, e, s) {
    var r;
    (r = this.dependencyTracker) == null || r.recordSimpleData("dash", t);
    const i = this.ctx;
    i.setLineDash !== void 0 && (i.setLineDash(e), i.lineDashOffset = s);
  }
  setRenderingIntent(t, e) {
  }
  setFlatness(t, e) {
  }
  setGState(t, e) {
    var s, i, r, a, o;
    for (const [l, h] of e) switch (l) {
      case "LW":
        this.setLineWidth(t, h);
        break;
      case "LC":
        this.setLineCap(t, h);
        break;
      case "LJ":
        this.setLineJoin(t, h);
        break;
      case "ML":
        this.setMiterLimit(t, h);
        break;
      case "D":
        this.setDash(t, h[0], h[1]);
        break;
      case "RI":
        this.setRenderingIntent(t, h);
        break;
      case "FL":
        this.setFlatness(t, h);
        break;
      case "Font":
        this.setFont(t, h[0], h[1]);
        break;
      case "CA":
        (s = this.dependencyTracker) == null || s.recordSimpleData("strokeAlpha", t), this.current.strokeAlpha = h;
        break;
      case "ca":
        (i = this.dependencyTracker) == null || i.recordSimpleData("fillAlpha", t), this.ctx.globalAlpha = this.current.fillAlpha = h;
        break;
      case "BM":
        (r = this.dependencyTracker) == null || r.recordSimpleData("globalCompositeOperation", t), this.ctx.globalCompositeOperation = h;
        break;
      case "SMask":
        (a = this.dependencyTracker) == null || a.recordSimpleData("SMask", t), this.current.activeSMask = h ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
        break;
      case "TR":
        (o = this.dependencyTracker) == null || o.recordSimpleData("filter", t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(h);
        break;
    }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode(t) {
    if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
    const e = this.ctx.canvas.width, s = this.ctx.canvas.height, i = "smaskGroupAt" + this.groupLevel, r = this.cachedCanvases.getCanvas(i, e, s);
    this.suspendedCtx = this.ctx;
    const a = this.ctx = r.context;
    a.setTransform(this.suspendedCtx.getTransform()), ql(this.suspendedCtx, a), PA(a, this.suspendedCtx), this.setGState(t, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), ql(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask) return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, s, i) {
    const r = i[0], a = i[1], o = i[2] - r, l = i[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, s, o, l, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, s, i, r, a, o, l, h, c, u) {
    let p = t.canvas, m = l - c, A = h - u;
    if (a) if (m < 0 || A < 0 || m + s > p.width || A + i > p.height) {
      const v = this.cachedCanvases.getCanvas("maskExtension", s, i), w = v.context;
      w.drawImage(p, -m, -A), w.globalCompositeOperation = "destination-atop", w.fillStyle = a, w.fillRect(0, 0, s, i), w.globalCompositeOperation = "source-over", p = v.canvas, m = A = 0;
    } else {
      t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
      const v = new Path2D();
      v.rect(m, A, s, i), t.clip(v), t.globalCompositeOperation = "destination-atop", t.fillStyle = a, t.fillRect(m, A, s, i), t.restore();
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const y = new Path2D();
    y.rect(l, h, s, i), e.clip(y), e.globalCompositeOperation = "destination-in", e.drawImage(p, m, A, s, i, l, h, s, i), e.restore();
  }
  save(t) {
    var s;
    this.inSMaskMode && ql(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), (s = this.dependencyTracker) == null || s.save(t);
  }
  restore(t) {
    var e;
    if ((e = this.dependencyTracker) == null || e.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && ql(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  transform(t, e, s, i, r, a, o) {
    var l;
    (l = this.dependencyTracker) == null || l.recordIncrementalData("transform", t), this.ctx.transform(e, s, i, r, a, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s, i) {
    let [r] = s;
    if (!i) {
      r || (r = s[0] = new Path2D()), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const a = e === zl.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, i[0] - a, i[2] + a, i[1] - a, i[3] + a).recordDependencies(t, ["transform"]);
    }
    if (!(r instanceof Path2D)) {
      const a = s[0] = new Path2D();
      for (let o = 0, l = r.length; o < l; ) switch (r[o++]) {
        case bd.moveTo:
          a.moveTo(r[o++], r[o++]);
          break;
        case bd.lineTo:
          a.lineTo(r[o++], r[o++]);
          break;
        case bd.curveTo:
          a.bezierCurveTo(r[o++], r[o++], r[o++], r[o++], r[o++], r[o++]);
          break;
        case bd.closePath:
          a.closePath();
          break;
        default:
          Y(`Unrecognized drawing path operator: ${r[o - 1]}`);
          break;
      }
      r = a;
    }
    $.axialAlignedBoundingBox(i, Ft(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
  }
  closePath(t) {
    this.ctx.closePath();
  }
  stroke(t, e, s = true) {
    var a;
    const i = this.ctx, r = this.current.strokeColor;
    if (i.globalAlpha = this.current.strokeAlpha, this.contentVisible) if (typeof r == "object" && (r != null && r.getPattern)) {
      const o = r.isModifyingCurrentTransform() ? i.getTransform() : null;
      if (i.save(), i.strokeStyle = r.getPattern(i, this, ri(i), ye.STROKE, t), o) {
        const l = new Path2D();
        l.addPath(e, i.getTransform().invertSelf().multiplySelf(o)), e = l;
      }
      this.rescaleAndStroke(e, false), i.restore();
    } else this.rescaleAndStroke(e, true);
    (a = this.dependencyTracker) == null || a.recordDependencies(t, Ss.stroke), s && this.consumePath(t, e, this.current.getClippedPathBoundingBox(ye.STROKE, Ft(this.ctx))), i.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t, e) {
    this.stroke(t, e);
  }
  fill(t, e, s = true) {
    var h, c, u;
    const i = this.ctx, r = this.current.fillColor, a = this.current.patternFill;
    let o = false;
    if (a) {
      const p = r.isModifyingCurrentTransform() ? i.getTransform() : null;
      if ((h = this.dependencyTracker) == null || h.save(t), i.save(), i.fillStyle = r.getPattern(i, this, ri(i), ye.FILL, t), p) {
        const m = new Path2D();
        m.addPath(e, i.getTransform().invertSelf().multiplySelf(p)), e = m;
      }
      o = true;
    }
    const l = this.current.getClippedPathBoundingBox();
    this.contentVisible && l !== null && (this.pendingEOFill ? (i.fill(e, "evenodd"), this.pendingEOFill = false) : i.fill(e)), (c = this.dependencyTracker) == null || c.recordDependencies(t, Ss.fill), o && (i.restore(), (u = this.dependencyTracker) == null || u.restore(t)), s && this.consumePath(t, e, l);
  }
  eoFill(t, e) {
    this.pendingEOFill = true, this.fill(t, e);
  }
  fillStroke(t, e) {
    this.fill(t, e, false), this.stroke(t, e, false), this.consumePath(t, e);
  }
  eoFillStroke(t, e) {
    this.pendingEOFill = true, this.fillStroke(t, e);
  }
  closeFillStroke(t, e) {
    this.fillStroke(t, e);
  }
  closeEOFillStroke(t, e) {
    this.pendingEOFill = true, this.fillStroke(t, e);
  }
  endPath(t, e) {
    this.consumePath(t, e);
  }
  rawFillPath(t, e) {
    var s;
    this.ctx.fill(e), (s = this.dependencyTracker) == null || s.recordDependencies(t, Ss.rawFillPath).recordOperation(t);
  }
  clip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = DA;
  }
  eoClip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = kg;
  }
  beginText(t) {
    var e;
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, (e = this.dependencyTracker) == null || e.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
  }
  endText(t) {
    const e = this.pendingTextPaths, s = this.ctx;
    if (this.dependencyTracker) {
      const { dependencyTracker: i } = this;
      e !== void 0 && i.recordFutureForcedDependency("textClip", i.getOpenMarker()).recordFutureForcedDependency("textClip", t), i.recordCloseMarker(t);
    }
    if (e !== void 0) {
      const i = new Path2D(), r = s.getTransform().invertSelf();
      for (const { transform: a, x: o, y: l, fontSize: h, path: c } of e) c && i.addPath(c, new DOMMatrix(a).preMultiplySelf(r).translate(o, l).scale(h, -h));
      s.clip(i);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("charSpacing", t), this.current.charSpacing = e;
  }
  setWordSpacing(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("wordSpacing", t), this.current.wordSpacing = e;
  }
  setHScale(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("hScale", t), this.current.textHScale = e / 100;
  }
  setLeading(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("leading", t), this.current.leading = -e;
  }
  setFont(t, e, s) {
    var u, p;
    (u = this.dependencyTracker) == null || u.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
    const i = this.commonObjs.get(e), r = this.current;
    if (!i) throw new Error(`Can't find font for ${e}`);
    if (r.fontMatrix = i.fontMatrix || of, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && Y("Invalid font matrix for font " + e), s < 0 ? (s = -s, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = i, this.current.fontSize = s, i.isType3Font) return;
    const a = i.loadedName || "sans-serif", o = ((p = i.systemFontInfo) == null ? void 0 : p.css) || `"${a}", ${i.fallbackName}`;
    let l = "normal";
    i.black ? l = "900" : i.bold && (l = "bold");
    const h = i.italic ? "italic" : "normal";
    let c = s;
    s < Eg ? c = Eg : s > Sg && (c = Sg), this.current.fontSizeScale = s / c, this.ctx.font = `${h} ${l} ${c}px ${o}`;
  }
  setTextRenderingMode(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("textRenderingMode", t), this.current.textRenderingMode = e;
  }
  setTextRise(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("textRise", t), this.current.textRise = e;
  }
  moveText(t, e, s) {
    var i;
    (i = this.dependencyTracker) == null || i.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += s;
  }
  setLeadingMoveText(t, e, s) {
    this.setLeading(t, -s), this.moveText(t, e, s);
  }
  setTextMatrix(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("textMatrix", t);
    const { current: s } = this;
    s.textMatrix = e, s.textMatrixScale = Math.hypot(e[0], e[1]), s.x = s.lineX = 0, s.y = s.lineY = 0;
  }
  nextLine(t) {
    var e;
    this.moveText(t, 0, this.current.leading), (e = this.dependencyTracker) == null || e.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
  }
  paintChar(t, e, s, i, r, a) {
    var w, S, E, _;
    const o = this.ctx, l = this.current, h = l.font, c = l.textRenderingMode, u = l.fontSize / l.fontSizeScale, p = c & ue.FILL_STROKE_MASK, m = !!(c & ue.ADD_TO_PATH_FLAG), A = l.patternFill && !h.missingFile, y = l.patternStroke && !h.missingFile;
    let v;
    if ((h.disableFontFace || m || A || y) && !h.missingFile && (v = h.getPathGenerator(this.commonObjs, e)), v && (h.disableFontFace || A || y)) {
      o.save(), o.translate(s, i), o.scale(u, -u), (w = this.dependencyTracker) == null || w.recordCharacterBBox(t, o, h);
      let C;
      if (p === ue.FILL || p === ue.FILL_STROKE) if (r) {
        C = o.getTransform(), o.setTransform(...r);
        const x = b(this, ii, Bf).call(this, v, C, r);
        o.fill(x);
      } else o.fill(v);
      if (p === ue.STROKE || p === ue.FILL_STROKE) if (a) {
        C || (C = o.getTransform()), o.setTransform(...a);
        const { a: x, b: T, c: P, d: k } = C, D = $.inverseTransform(a), L = $.transform([x, T, P, k, 0, 0], D);
        $.singularValueDecompose2dScale(L, ys), o.lineWidth *= Math.max(ys[0], ys[1]) / u, o.stroke(b(this, ii, Bf).call(this, v, C, a));
      } else o.lineWidth /= u, o.stroke(v);
      o.restore();
    } else (p === ue.FILL || p === ue.FILL_STROKE) && (o.fillText(e, s, i), (S = this.dependencyTracker) == null || S.recordCharacterBBox(t, o, h, u, s, i, () => o.measureText(e))), (p === ue.STROKE || p === ue.FILL_STROKE) && (this.dependencyTracker && ((E = this.dependencyTracker) == null || E.recordCharacterBBox(t, o, h, u, s, i, () => o.measureText(e)).recordDependencies(t, Ss.stroke)), o.strokeText(e, s, i));
    m && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({ transform: Ft(o), x: s, y: i, fontSize: u, path: v }), (_ = this.dependencyTracker) == null || _.recordCharacterBBox(t, o, h, u, s, i));
  }
  get isFontSubpixelAAEnabled() {
    const { context: t } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let s = false;
    for (let i = 3; i < e.length; i += 4) if (e[i] > 0 && e[i] < 255) {
      s = true;
      break;
    }
    return Q(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t, e) {
    var P, k, D, L;
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, Ss.showText).resetBBox(t), this.current.textRenderingMode & ue.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
    const s = this.current, i = s.font;
    if (i.isType3Font) {
      this.showType3Text(t, e), (P = this.dependencyTracker) == null || P.recordShowTextOperation(t);
      return;
    }
    const r = s.fontSize;
    if (r === 0) {
      (k = this.dependencyTracker) == null || k.recordOperation(t);
      return;
    }
    const a = this.ctx, o = s.fontSizeScale, l = s.charSpacing, h = s.wordSpacing, c = s.fontDirection, u = s.textHScale * c, p = e.length, m = i.vertical, A = m ? 1 : -1, y = i.defaultVMetrics, v = r * s.fontMatrix[0], w = s.textRenderingMode === ue.FILL && !i.disableFontFace && !s.patternFill;
    a.save(), s.textMatrix && a.transform(...s.textMatrix), a.translate(s.x, s.y + s.textRise), c > 0 ? a.scale(u, -1) : a.scale(u, 1);
    let S, E;
    if (s.patternFill) {
      a.save();
      const F = s.fillColor.getPattern(a, this, ri(a), ye.FILL, t);
      S = Ft(a), a.restore(), a.fillStyle = F;
    }
    if (s.patternStroke) {
      a.save();
      const F = s.strokeColor.getPattern(a, this, ri(a), ye.STROKE, t);
      E = Ft(a), a.restore(), a.strokeStyle = F;
    }
    let _ = s.lineWidth;
    const C = s.textMatrixScale;
    if (C === 0 || _ === 0) {
      const F = s.textRenderingMode & ue.FILL_STROKE_MASK;
      (F === ue.STROKE || F === ue.FILL_STROKE) && (_ = this.getSinglePixelWidth());
    } else _ /= C;
    if (o !== 1 && (a.scale(o, o), _ /= o), a.lineWidth = _, i.isInvalidPDFjsFont) {
      const F = [];
      let V = 0;
      for (const X of e) F.push(X.unicode), V += X.width;
      const O = F.join("");
      if (a.fillText(O, 0, 0), this.dependencyTracker !== null) {
        const X = a.measureText(O);
        this.dependencyTracker.recordBBox(t, this.ctx, -X.actualBoundingBoxLeft, X.actualBoundingBoxRight, -X.actualBoundingBoxAscent, X.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      s.x += V * v * u, a.restore(), this.compose();
      return;
    }
    let x = 0, T;
    for (T = 0; T < p; ++T) {
      const F = e[T];
      if (typeof F == "number") {
        x += A * F * r / 1e3;
        continue;
      }
      let V = false;
      const O = (F.isSpace ? h : 0) + l, X = F.fontChar, B = F.accent;
      let N, et, nt = F.width;
      if (m) {
        const at = F.vmetric || y, ht = -(F.vmetric ? at[1] : nt * 0.5) * v, se = at[2] * v;
        nt = at ? -at[0] : nt, N = ht / o, et = (x + se) / o;
      } else N = x / o, et = 0;
      let ee;
      if (i.remeasure && nt > 0) {
        ee = a.measureText(X);
        const at = ee.width * 1e3 / r * o;
        if (nt < at && this.isFontSubpixelAAEnabled) {
          const ht = nt / at;
          V = true, a.save(), a.scale(ht, 1), N /= ht;
        } else nt !== at && (N += (nt - at) / 2e3 * r / o);
      }
      if (this.contentVisible && (F.isInFont || i.missingFile)) {
        if (w && !B) a.fillText(X, N, et), (D = this.dependencyTracker) == null || D.recordCharacterBBox(t, a, ee ? { bbox: null } : i, r / o, N, et, () => ee ?? a.measureText(X));
        else if (this.paintChar(t, X, N, et, S, E), B) {
          const at = N + r * B.offset.x / o, ht = et - r * B.offset.y / o;
          this.paintChar(t, B.fontChar, at, ht, S, E);
        }
      }
      const Je = m ? nt * v - O * c : nt * v + O * c;
      x += Je, V && a.restore();
    }
    m ? s.y -= x : s.x += x * u, a.restore(), this.compose(), (L = this.dependencyTracker) == null || L.recordShowTextOperation(t);
  }
  showType3Text(t, e) {
    const s = this.ctx, i = this.current, r = i.font, a = i.fontSize, o = i.fontDirection, l = r.vertical ? 1 : -1, h = i.charSpacing, c = i.wordSpacing, u = i.textHScale * o, p = i.fontMatrix || of, m = e.length, A = i.textRenderingMode === ue.INVISIBLE;
    let y, v, w, S;
    if (A || a === 0) return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, s.save(), i.textMatrix && s.transform(...i.textMatrix), s.translate(i.x, i.y + i.textRise), s.scale(u, o);
    const E = this.dependencyTracker;
    for (this.dependencyTracker = E ? new hu(E, t) : null, y = 0; y < m; ++y) {
      if (v = e[y], typeof v == "number") {
        S = l * v * a / 1e3, this.ctx.translate(S, 0), i.x += S * u;
        continue;
      }
      const _ = (v.isSpace ? c : 0) + h, C = r.charProcOperatorList[v.operatorListId];
      C ? this.contentVisible && (this.save(), s.scale(a, a), s.transform(...p), this.executeOperatorList(C), this.restore()) : Y(`Type3 character "${v.operatorListId}" is not available.`);
      const x = [v.width, 0];
      $.applyTransform(x, p), w = x[0] * a + _, s.translate(w, 0), i.x += w * u;
    }
    s.restore(), E && (this.dependencyTracker = E);
  }
  setCharWidth(t, e, s) {
  }
  setCharWidthAndBounds(t, e, s, i, r, a, o) {
    var h;
    const l = new Path2D();
    l.rect(i, r, a - i, o - r), this.ctx.clip(l), (h = this.dependencyTracker) == null || h.recordBBox(t, this.ctx, i, a, r, o).recordClipBox(t, this.ctx, i, a, r, o), this.endPath(t);
  }
  getColorN_Pattern(t, e) {
    let s;
    if (e[0] === "TilingPattern") {
      const i = this.baseTransform || Ft(this.ctx), r = { createCanvasGraphics: (a, o) => new tg2(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }, void 0, void 0, this.dependencyTracker ? new hu(this.dependencyTracker, o, true) : null) };
      s = new Ff(e, this.ctx, r, i);
    } else s = this._getPattern(t, e[1], e[2]);
    return s;
  }
  setStrokeColorN(t, ...e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("strokeColor", t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = true;
  }
  setFillColorN(t, ...e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("fillColor", t), this.current.fillColor = this.getColorN_Pattern(t, e), this.current.patternFill = true;
  }
  setStrokeRGBColor(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = false;
  }
  setStrokeTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = false;
  }
  setFillRGBColor(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = false;
  }
  setFillTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = false;
  }
  _getPattern(t, e, s = null) {
    let i;
    return this.cachedPatterns.has(e) ? i = this.cachedPatterns.get(e) : (i = CA(this.getObject(t, e)), this.cachedPatterns.set(e, i)), s && (i.matrix = s), i;
  }
  shadingFill(t, e) {
    var a;
    if (!this.contentVisible) return;
    const s = this.ctx;
    this.save(t);
    const i = this._getPattern(t, e);
    s.fillStyle = i.getPattern(s, this, ri(s), ye.SHADING, t);
    const r = ri(s);
    if (r) {
      const { width: o, height: l } = s.canvas, h = lo.slice();
      $.axialAlignedBoundingBox([0, 0, o, l], r, h);
      const [c, u, p, m] = h;
      this.ctx.fillRect(c, u, p - c, m - u);
    } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, Ss.transform).recordDependencies(t, Ss.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
  }
  beginInlineImage() {
    _t("Should not call beginInlineImage");
  }
  beginImageData() {
    _t("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e, s) {
    var i;
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = Ft(this.ctx), s)) {
      $.axialAlignedBoundingBox(s, this.baseTransform, this.current.minMax);
      const [r, a, o, l] = s, h = new Path2D();
      h.rect(r, a, o - r, l - a), this.ctx.clip(h), (i = this.dependencyTracker) == null || i.recordClipBox(t, this.ctx, r, o, a, l), this.endPath(t);
    }
  }
  paintFormXObjectEnd(t) {
    this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t, e) {
    var E;
    if (!this.contentVisible) return;
    this.save(t), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const s = this.ctx;
    e.isolated || Bu("TODO: Support non-isolated groups."), e.knockout && Y("Knockout groups not supported.");
    const i = Ft(s);
    if (e.matrix && s.transform(...e.matrix), !e.bbox) throw new Error("Bounding box is required.");
    let r = lo.slice();
    $.axialAlignedBoundingBox(e.bbox, Ft(s), r);
    const a = [0, 0, s.canvas.width, s.canvas.height];
    r = $.intersect(r, a) || [0, 0, 0, 0];
    const o = Math.floor(r[0]), l = Math.floor(r[1]), h = Math.max(Math.ceil(r[2]) - o, 1), c = Math.max(Math.ceil(r[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, h, c]);
    let u = "groupAt" + this.groupLevel;
    e.smask && (u += "_smask_" + this.smaskCounter++ % 2);
    const p = this.cachedCanvases.getCanvas(u, h, c), m = p.context;
    m.translate(-o, -l), m.transform(...i);
    let A = new Path2D();
    const [y, v, w, S] = e.bbox;
    if (A.rect(y, v, w - y, S - v), e.matrix) {
      const _ = new Path2D();
      _.addPath(A, new DOMMatrix(e.matrix)), A = _;
    }
    m.clip(A), e.smask && this.smaskStack.push({ canvas: p.canvas, context: m, offsetX: o, offsetY: l, subtype: e.smask.subtype, backdrop: e.smask.backdrop, transferMap: e.smask.transferMap || null, startTransformInverse: null }), (!e.smask || this.dependencyTracker) && (s.setTransform(1, 0, 0, 1, 0, 0), s.translate(o, l), s.save()), ql(s, m), this.ctx = m, (E = this.dependencyTracker) == null || E.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(s), this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(s), this.groupLevel++;
  }
  endGroup(t, e) {
    var r;
    if (!this.contentVisible) return;
    this.groupLevel--;
    const s = this.ctx, i = this.groupStack.pop();
    if (this.ctx = i, this.ctx.imageSmoothingEnabled = false, (r = this.dependencyTracker) == null || r.popBaseTransform(), e.smask) this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && this.ctx.restore();
    else {
      this.ctx.restore();
      const a = Ft(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...a);
      const o = lo.slice();
      $.axialAlignedBoundingBox([0, 0, s.canvas.width, s.canvas.height], a, o), this.ctx.drawImage(s.canvas, 0, 0), this.ctx.restore(), this.compose(o);
    }
  }
  beginAnnotation(t, e, s, i, r, a) {
    if (b(this, ii, Nf).call(this), _d(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), s) {
      const o = s[2] - s[0], l = s[3] - s[1];
      if (a && this.annotationCanvasMap) {
        i = i.slice(), i[4] -= s[0], i[5] -= s[1], s = s.slice(), s[0] = s[1] = 0, s[2] = o, s[3] = l, $.singularValueDecompose2dScale(Ft(this.ctx), ys);
        const { viewportScale: h } = this, c = Math.ceil(o * this.outputScaleX * h), u = Math.ceil(l * this.outputScaleY * h);
        this.annotationCanvas = this.canvasFactory.create(c, u);
        const { canvas: p, context: m } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, p), this.annotationCanvas.savedCtx = this.ctx, this.ctx = m, this.ctx.save(), this.ctx.setTransform(ys[0], 0, 0, -ys[1], 0, l * ys[1]), _d(this.ctx);
      } else {
        _d(this.ctx), this.endPath(t);
        const h = new Path2D();
        h.rect(s[0], s[1], o, l), this.ctx.clip(h);
      }
    }
    this.current = new Cg(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...i), this.transform(t, ...r);
  }
  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), b(this, ii, Of).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t, e) {
    var o;
    if (!this.contentVisible) return;
    const s = e.count;
    e = this.getObject(t, e.data, e), e.count = s;
    const i = this.ctx, r = this._createMaskCanvas(t, e), a = r.canvas;
    i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.drawImage(a, r.offsetX, r.offsetY), (o = this.dependencyTracker) == null || o.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), i.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s, i = 0, r = 0, a, o) {
    var u, p, m;
    if (!this.contentVisible) return;
    e = this.getObject(t, e.data, e);
    const l = this.ctx;
    l.save();
    const h = Ft(l);
    l.transform(s, i, r, a, 0, 0);
    const c = this._createMaskCanvas(t, e);
    l.setTransform(1, 0, 0, 1, c.offsetX - h[4], c.offsetY - h[5]), (u = this.dependencyTracker) == null || u.resetBBox(t);
    for (let A = 0, y = o.length; A < y; A += 2) {
      const v = $.transform(h, [s, i, r, a, o[A], o[A + 1]]);
      l.drawImage(c.canvas, v[4], v[5]), (p = this.dependencyTracker) == null || p.recordBBox(t, this.ctx, v[4], v[4] + c.canvas.width, v[5], v[5] + c.canvas.height);
    }
    l.restore(), this.compose(), (m = this.dependencyTracker) == null || m.recordOperation(t);
  }
  paintImageMaskXObjectGroup(t, e) {
    var a, o, l;
    if (!this.contentVisible) return;
    const s = this.ctx, i = this.current.fillColor, r = this.current.patternFill;
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordDependencies(t, Ss.transformAndFill);
    for (const h of e) {
      const { data: c, width: u, height: p, transform: m } = h, A = this.cachedCanvases.getCanvas("maskCanvas", u, p), y = A.context;
      y.save();
      const v = this.getObject(t, c, h);
      Tg(y, v), y.globalCompositeOperation = "source-in", y.fillStyle = r ? i.getPattern(y, this, ri(s), ye.FILL, t) : i, y.fillRect(0, 0, u, p), y.restore(), s.save(), s.transform(...m), s.scale(1, -1), Sd(s, A.canvas, 0, 0, u, p, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, s, 0, u, 0, p), s.restore();
    }
    this.compose(), (l = this.dependencyTracker) == null || l.recordOperation(t);
  }
  paintImageXObject(t, e) {
    if (!this.contentVisible) return;
    const s = this.getObject(t, e);
    if (!s) {
      Y("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, s);
  }
  paintImageXObjectRepeat(t, e, s, i, r) {
    if (!this.contentVisible) return;
    const a = this.getObject(t, e);
    if (!a) {
      Y("Dependent image isn't ready yet");
      return;
    }
    const o = a.width, l = a.height, h = [];
    for (let c = 0, u = r.length; c < u; c += 2) h.push({ transform: [s, 0, 0, i, r[c], r[c + 1]], x: 0, y: 0, w: o, h: l });
    this.paintInlineImageXObjectGroup(t, a, h);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none") return t.bitmap;
    const { bitmap: e, width: s, height: i } = t, r = this.cachedCanvases.getCanvas("inlineImage", s, i), a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas;
  }
  paintInlineImageXObject(t, e) {
    var h;
    if (!this.contentVisible) return;
    const s = e.width, i = e.height, r = this.ctx;
    this.save(t);
    const { filter: a } = r;
    a !== "none" && a !== "" && (r.filter = "none"), r.scale(1 / s, -1 / i);
    let o;
    if (e.bitmap) o = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data) o = e;
    else {
      const u = this.cachedCanvases.getCanvas("inlineImage", s, i).context;
      xg(u, e), o = this.applyTransferMapsToCanvas(u);
    }
    const l = this._scaleImage(o, ri(r));
    r.imageSmoothingEnabled = Pg(Ft(r), e.interpolate), (h = this.dependencyTracker) == null || h.resetBBox(t).recordBBox(t, r, 0, s, -i, 0).recordDependencies(t, Ss.imageXObject).recordOperation(t), Sd(r, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -i, s, i), this.compose(), this.restore(t);
  }
  paintInlineImageXObjectGroup(t, e, s) {
    var a, o, l;
    if (!this.contentVisible) return;
    const i = this.ctx;
    let r;
    if (e.bitmap) r = e.bitmap;
    else {
      const h = e.width, c = e.height, p = this.cachedCanvases.getCanvas("inlineImage", h, c).context;
      xg(p, e), r = this.applyTransferMapsToCanvas(p);
    }
    (a = this.dependencyTracker) == null || a.resetBBox(t);
    for (const h of s) i.save(), i.transform(...h.transform), i.scale(1, -1), Sd(i, r, h.x, h.y, h.w, h.h, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, i, 0, 1, -1, 0), i.restore();
    (l = this.dependencyTracker) == null || l.recordOperation(t), this.compose();
  }
  paintSolidColorImageMask(t) {
    var e;
    this.contentVisible && ((e = this.dependencyTracker) == null || e.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, Ss.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t, e) {
  }
  markPointProps(t, e, s) {
  }
  beginMarkedContent(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.beginMarkedContent(t), this.markedContentStack.push({ visible: true });
  }
  beginMarkedContentProps(t, e, s) {
    var i;
    (i = this.dependencyTracker) == null || i.beginMarkedContent(t), e === "OC" ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(s) }) : this.markedContentStack.push({ visible: true }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat(t) {
  }
  endCompat(t) {
  }
  consumePath(t, e, s) {
    var a, o;
    const i = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(s);
    const r = this.ctx;
    this.pendingClip ? (i || (this.pendingClip === kg ? r.clip(e, "evenodd") : r.clip(e)), this.pendingClip = null, (a = this.dependencyTracker) == null || a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : (o = this.dependencyTracker) == null || o.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Ft(this.ctx);
      if (t[1] === 0 && t[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const { lineWidth: t } = this.current, { a: e, b: s, c: i, d: r } = this.ctx.getTransform();
      let a, o;
      if (s === 0 && i === 0) {
        const l = Math.abs(e), h = Math.abs(r);
        if (l === h) if (t === 0) a = o = 1 / l;
        else {
          const c = l * t;
          a = o = c < 1 ? 1 / c : 1;
        }
        else if (t === 0) a = 1 / l, o = 1 / h;
        else {
          const c = l * t, u = h * t;
          a = c < 1 ? 1 / c : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const l = Math.abs(e * r - s * i), h = Math.hypot(e, s), c = Math.hypot(i, r);
        if (t === 0) a = c / l, o = h / l;
        else {
          const u = t * l;
          a = c > u ? c / u : 1, o = h > u ? h / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t, e) {
    const { ctx: s, current: { lineWidth: i } } = this, [r, a] = this.getScaleForStroking();
    if (r === a) {
      s.lineWidth = (i || 1) * r, s.stroke(t);
      return;
    }
    const o = s.getLineDash();
    e && s.save(), s.scale(r, a), ef.a = 1 / r, ef.d = 1 / a;
    const l = new Path2D();
    if (l.addPath(t, ef), o.length > 0) {
      const h = Math.max(r, a);
      s.setLineDash(o.map((c) => c / h)), s.lineDashOffset /= h;
    }
    s.lineWidth = i || 1, s.stroke(l), e && s.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return false;
    return true;
  }
};
ii = /* @__PURE__ */ new WeakSet(), Nf = function() {
  for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Of = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, Bf = function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
};
let po = tg;
for (const d in zl) po.prototype[d] !== void 0 && (po.prototype[zl[d]] = po.prototype[d]);
var Go, Vo, rc, Wo, Nd;
const co = class co2 {
  constructor(t) {
    g(this, Wo);
    g(this, Go);
    g(this, Vo);
    g(this, rc);
    f(this, Go, t), f(this, Vo, new DataView(n(this, Go))), f(this, rc, new TextDecoder());
  }
  static write(t) {
    const e = new TextEncoder(), s = {};
    let i = 0;
    for (const h of co2.strings) {
      const c = e.encode(t[h]);
      s[h] = c, i += 4 + c.length;
    }
    const r = new ArrayBuffer(i), a = new Uint8Array(r), o = new DataView(r);
    let l = 0;
    for (const h of co2.strings) {
      const c = s[h], u = c.length;
      o.setUint32(l, u), a.set(c, l + 4), l += 4 + u;
    }
    return rt(l === r.byteLength, "CssFontInfo.write: Buffer overflow"), r;
  }
  get fontFamily() {
    return b(this, Wo, Nd).call(this, 0);
  }
  get fontWeight() {
    return b(this, Wo, Nd).call(this, 1);
  }
  get italicAngle() {
    return b(this, Wo, Nd).call(this, 2);
  }
};
Go = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), rc = /* @__PURE__ */ new WeakMap(), Wo = /* @__PURE__ */ new WeakSet(), Nd = function(t) {
  rt(t < co.strings.length, "Invalid string index");
  let e = 0;
  for (let i = 0; i < t; i++) e += n(this, Vo).getUint32(e) + 4;
  const s = n(this, Vo).getUint32(e);
  return n(this, rc).decode(new Uint8Array(n(this, Go), e + 4, s));
}, R(co, "strings", ["fontFamily", "fontWeight", "italicAngle"]);
let cu = co;
var Yn, Ai, la, ha, hh;
const uo = class uo2 {
  constructor(t) {
    g(this, ha);
    g(this, Yn);
    g(this, Ai);
    g(this, la);
    f(this, Yn, t), f(this, Ai, new DataView(n(this, Yn))), f(this, la, new TextDecoder());
  }
  static write(t) {
    const e = new TextEncoder(), s = {};
    let i = 0;
    for (const p of uo2.strings) {
      const m = e.encode(t[p]);
      s[p] = m, i += 4 + m.length;
    }
    i += 4;
    let r, a, o = 1 + i;
    t.style && (r = e.encode(t.style.style), a = e.encode(t.style.weight), o += 4 + r.length + 4 + a.length);
    const l = new ArrayBuffer(o), h = new Uint8Array(l), c = new DataView(l);
    let u = 0;
    c.setUint8(u++, t.guessFallback ? 1 : 0), c.setUint32(u, 0), u += 4, i = 0;
    for (const p of uo2.strings) {
      const m = s[p], A = m.length;
      i += 4 + A, c.setUint32(u, A), h.set(m, u + 4), u += 4 + A;
    }
    return c.setUint32(u - i - 4, i), t.style && (c.setUint32(u, r.length), h.set(r, u + 4), u += 4 + r.length, c.setUint32(u, a.length), h.set(a, u + 4), u += 4 + a.length), rt(u <= l.byteLength, "SubstitionInfo.write: Buffer overflow"), l.transferToFixedLength(u);
  }
  get guessFallback() {
    return n(this, Ai).getUint8(0) !== 0;
  }
  get css() {
    return b(this, ha, hh).call(this, 0);
  }
  get loadedName() {
    return b(this, ha, hh).call(this, 1);
  }
  get baseFontName() {
    return b(this, ha, hh).call(this, 2);
  }
  get src() {
    return b(this, ha, hh).call(this, 3);
  }
  get style() {
    let t = 1;
    t += 4 + n(this, Ai).getUint32(t);
    const e = n(this, Ai).getUint32(t), s = n(this, la).decode(new Uint8Array(n(this, Yn), t + 4, e));
    t += 4 + e;
    const i = n(this, Ai).getUint32(t), r = n(this, la).decode(new Uint8Array(n(this, Yn), t + 4, i));
    return { style: s, weight: r };
  }
};
Yn = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), la = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakSet(), hh = function(t) {
  rt(t < uo.strings.length, "Invalid string index");
  let e = 5;
  for (let i = 0; i < t; i++) e += n(this, Ai).getUint32(e) + 4;
  const s = n(this, Ai).getUint32(e);
  return n(this, la).decode(new Uint8Array(n(this, Yn), e + 4, s));
}, R(uo, "strings", ["css", "loadedName", "baseFontName", "src"]);
let du = uo;
var Xo, qo, Yo, Ko, is, wi, ac, mt, $t, js, Od, ch;
const J = class J2 {
  constructor({ data: t, extra: e }) {
    g(this, $t);
    g(this, wi);
    g(this, ac);
    g(this, mt);
    f(this, wi, t), f(this, ac, new TextDecoder()), f(this, mt, new DataView(n(this, wi))), e && Object.assign(this, e);
  }
  get black() {
    return b(this, $t, js).call(this, 0);
  }
  get bold() {
    return b(this, $t, js).call(this, 1);
  }
  get disableFontFace() {
    return b(this, $t, js).call(this, 2);
  }
  get fontExtraProperties() {
    return b(this, $t, js).call(this, 3);
  }
  get isInvalidPDFjsFont() {
    return b(this, $t, js).call(this, 4);
  }
  get isType3Font() {
    return b(this, $t, js).call(this, 5);
  }
  get italic() {
    return b(this, $t, js).call(this, 6);
  }
  get missingFile() {
    return b(this, $t, js).call(this, 7);
  }
  get remeasure() {
    return b(this, $t, js).call(this, 8);
  }
  get vertical() {
    return b(this, $t, js).call(this, 9);
  }
  get ascent() {
    return b(this, $t, Od).call(this, 0);
  }
  get defaultWidth() {
    return b(this, $t, Od).call(this, 1);
  }
  get descent() {
    return b(this, $t, Od).call(this, 2);
  }
  get bbox() {
    let t = n(J2, qo);
    if (n(this, mt).getUint8(t) === 0) return;
    t += 1;
    const s = [];
    for (let i = 0; i < 4; i++) s.push(n(this, mt).getInt16(t, true)), t += 2;
    return s;
  }
  get fontMatrix() {
    let t = n(J2, Yo);
    if (n(this, mt).getUint8(t) === 0) return;
    t += 1;
    const s = [];
    for (let i = 0; i < 6; i++) s.push(n(this, mt).getFloat64(t, true)), t += 8;
    return s;
  }
  get defaultVMetrics() {
    let t = n(J2, Ko);
    if (n(this, mt).getUint8(t) === 0) return;
    t += 1;
    const s = [];
    for (let i = 0; i < 3; i++) s.push(n(this, mt).getInt16(t, true)), t += 2;
    return s;
  }
  get fallbackName() {
    return b(this, $t, ch).call(this, 0);
  }
  get loadedName() {
    return b(this, $t, ch).call(this, 1);
  }
  get mimetype() {
    return b(this, $t, ch).call(this, 2);
  }
  get name() {
    return b(this, $t, ch).call(this, 3);
  }
  get data() {
    let t = n(J2, is);
    const e = n(this, mt).getUint32(t);
    t += 4 + e;
    const s = n(this, mt).getUint32(t);
    t += 4 + s;
    const i = n(this, mt).getUint32(t);
    t += 4 + i;
    const r = n(this, mt).getUint32(t);
    if (r !== 0) return new Uint8Array(n(this, wi), t + 4, r);
  }
  clearData() {
    let t = n(J2, is);
    const e = n(this, mt).getUint32(t);
    t += 4 + e;
    const s = n(this, mt).getUint32(t);
    t += 4 + s;
    const i = n(this, mt).getUint32(t);
    t += 4 + i;
    const r = n(this, mt).getUint32(t);
    new Uint8Array(n(this, wi), t + 4, r).fill(0), n(this, mt).setUint32(t, 0);
  }
  get cssFontInfo() {
    let t = n(J2, is);
    const e = n(this, mt).getUint32(t);
    t += 4 + e;
    const s = n(this, mt).getUint32(t);
    t += 4 + s;
    const i = n(this, mt).getUint32(t);
    if (i === 0) return null;
    const r = new Uint8Array(i);
    return r.set(new Uint8Array(n(this, wi), t + 4, i)), new cu(r.buffer);
  }
  get systemFontInfo() {
    let t = n(J2, is);
    const e = n(this, mt).getUint32(t);
    t += 4 + e;
    const s = n(this, mt).getUint32(t);
    if (s === 0) return null;
    const i = new Uint8Array(s);
    return i.set(new Uint8Array(n(this, wi), t + 4, s)), new du(i.buffer);
  }
  static write(t) {
    const e = t.systemFontInfo ? du.write(t.systemFontInfo) : null, s = t.cssFontInfo ? cu.write(t.cssFontInfo) : null, i = new TextEncoder(), r = {};
    let a = 0;
    for (const y of J2.strings) r[y] = i.encode(t[y]), a += 4 + r[y].length;
    const o = n(J2, is) + 4 + a + 4 + (e ? e.byteLength : 0) + 4 + (s ? s.byteLength : 0) + 4 + (t.data ? t.data.length : 0), l = new ArrayBuffer(o), h = new Uint8Array(l), c = new DataView(l);
    let u = 0;
    const p = J2.bools.length;
    let m = 0, A = 0;
    for (let y = 0; y < p; y++) {
      const v = t[J2.bools[y]];
      m |= (v === void 0 ? 0 : v ? 2 : 1) << A, A += 2, (A === 8 || y === p - 1) && (c.setUint8(u++, m), m = 0, A = 0);
    }
    rt(u === n(J2, Xo), "FontInfo.write: Boolean properties offset mismatch");
    for (const y of J2.numbers) c.setFloat64(u, t[y]), u += 8;
    if (rt(u === n(J2, qo), "FontInfo.write: Number properties offset mismatch"), t.bbox) {
      c.setUint8(u++, 4);
      for (const y of t.bbox) c.setInt16(u, y, true), u += 2;
    } else c.setUint8(u++, 0), u += 8;
    if (rt(u === n(J2, Yo), "FontInfo.write: BBox properties offset mismatch"), t.fontMatrix) {
      c.setUint8(u++, 6);
      for (const y of t.fontMatrix) c.setFloat64(u, y, true), u += 8;
    } else c.setUint8(u++, 0), u += 48;
    if (rt(u === n(J2, Ko), "FontInfo.write: FontMatrix properties offset mismatch"), t.defaultVMetrics) {
      c.setUint8(u++, 1);
      for (const y of t.defaultVMetrics) c.setInt16(u, y, true), u += 2;
    } else c.setUint8(u++, 0), u += 6;
    rt(u === n(J2, is), "FontInfo.write: DefaultVMetrics properties offset mismatch"), c.setUint32(n(J2, is), 0), u += 4;
    for (const y of J2.strings) {
      const v = r[y], w = v.length;
      c.setUint32(u, w), h.set(v, u + 4), u += 4 + w;
    }
    if (c.setUint32(n(J2, is), u - n(J2, is) - 4), !e) c.setUint32(u, 0), u += 4;
    else {
      const y = e.byteLength;
      c.setUint32(u, y), rt(u + 4 + y <= l.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo"), h.set(new Uint8Array(e), u + 4), u += 4 + y;
    }
    if (!s) c.setUint32(u, 0), u += 4;
    else {
      const y = s.byteLength;
      c.setUint32(u, y), rt(u + 4 + y <= l.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo"), h.set(new Uint8Array(s), u + 4), u += 4 + y;
    }
    return t.data === void 0 ? (c.setUint32(u, 0), u += 4) : (c.setUint32(u, t.data.length), h.set(t.data, u + 4), u += 4 + t.data.length), rt(u <= l.byteLength, "FontInfo.write: Buffer overflow"), l.transferToFixedLength(u);
  }
};
Xo = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ new WeakMap(), Yo = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), ac = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakSet(), js = function(t) {
  rt(t < J.bools.length, "Invalid boolean index");
  const e = Math.floor(t / 4), s = t * 2 % 8, i = n(this, mt).getUint8(e) >> s & 3;
  return i === 0 ? void 0 : i === 2;
}, Od = function(t) {
  return rt(t < J.numbers.length, "Invalid number index"), n(this, mt).getFloat64(n(J, Xo) + t * 8);
}, ch = function(t) {
  rt(t < J.strings.length, "Invalid string index");
  let e = n(J, is) + 4;
  for (let r = 0; r < t; r++) e += n(this, mt).getUint32(e) + 4;
  const s = n(this, mt).getUint32(e), i = new Uint8Array(s);
  return i.set(new Uint8Array(n(this, wi), e + 4, s)), n(this, ac).decode(i);
}, R(J, "bools", ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"]), R(J, "numbers", ["ascent", "defaultWidth", "descent"]), R(J, "strings", ["fallbackName", "loadedName", "mimetype", "name"]), g(J, Xo, Math.ceil(J.bools.length * 2 / 8)), g(J, qo, n(J, Xo) + J.numbers.length * 8), g(J, Yo, n(J, qo) + 1 + 8), g(J, Ko, n(J, Yo) + 1 + 48), g(J, is, n(J, Ko) + 1 + 6);
let Hf = J;
var oc, lc;
class Ns {
  static get workerPort() {
    return n(this, oc);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null) throw new Error("Invalid `workerPort` type.");
    f(this, oc, t);
  }
  static get workerSrc() {
    return n(this, lc);
  }
  static set workerSrc(t) {
    if (typeof t != "string") throw new Error("Invalid `workerSrc` type.");
    f(this, lc, t);
  }
}
oc = /* @__PURE__ */ new WeakMap(), lc = /* @__PURE__ */ new WeakMap(), g(Ns, oc, null), g(Ns, lc, "");
var Jo, hc;
class LA {
  constructor({ parsedData: t, rawData: e }) {
    g(this, Jo);
    g(this, hc);
    f(this, Jo, t), f(this, hc, e);
  }
  getRaw() {
    return n(this, hc);
  }
  get(t) {
    return n(this, Jo).get(t) ?? null;
  }
  [Symbol.iterator]() {
    return n(this, Jo).entries();
  }
}
Jo = /* @__PURE__ */ new WeakMap(), hc = /* @__PURE__ */ new WeakMap();
const ro = /* @__PURE__ */ Symbol("INTERNAL");
var cc, dc, uc, Qo;
class IA {
  constructor(t, { name: e, intent: s, usage: i, rbGroups: r }) {
    g(this, cc, false);
    g(this, dc, false);
    g(this, uc, false);
    g(this, Qo, true);
    f(this, cc, !!(t & bs.DISPLAY)), f(this, dc, !!(t & bs.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = r;
  }
  get visible() {
    if (n(this, uc)) return n(this, Qo);
    if (!n(this, Qo)) return false;
    const { print: t, view: e } = this.usage;
    return n(this, cc) ? (e == null ? void 0 : e.viewState) !== "OFF" : n(this, dc) ? (t == null ? void 0 : t.printState) !== "OFF" : true;
  }
  _setVisible(t, e, s = false) {
    t !== ro && _t("Internal method `_setVisible` called."), f(this, uc, s), f(this, Qo, e);
  }
}
cc = /* @__PURE__ */ new WeakMap(), dc = /* @__PURE__ */ new WeakMap(), uc = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap();
var Kn, bt, Zo, tl, fc, Uf;
class FA {
  constructor(t, e = bs.DISPLAY) {
    g(this, fc);
    g(this, Kn, null);
    g(this, bt, /* @__PURE__ */ new Map());
    g(this, Zo, null);
    g(this, tl, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, f(this, tl, t.order);
      for (const s of t.groups) n(this, bt).set(s.id, new IA(e, s));
      if (t.baseState === "OFF") for (const s of n(this, bt).values()) s._setVisible(ro, false);
      for (const s of t.on) n(this, bt).get(s)._setVisible(ro, true);
      for (const s of t.off) n(this, bt).get(s)._setVisible(ro, false);
      f(this, Zo, this.getHash());
    }
  }
  isVisible(t) {
    if (n(this, bt).size === 0) return true;
    if (!t) return Bu("Optional content group not defined."), true;
    if (t.type === "OCG") return n(this, bt).has(t.id) ? n(this, bt).get(t.id).visible : (Y(`Optional content group not found: ${t.id}`), true);
    if (t.type === "OCMD") {
      if (t.expression) return b(this, fc, Uf).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!n(this, bt).has(e)) return Y(`Optional content group not found: ${e}`), true;
          if (n(this, bt).get(e).visible) return true;
        }
        return false;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!n(this, bt).has(e)) return Y(`Optional content group not found: ${e}`), true;
          if (!n(this, bt).get(e).visible) return false;
        }
        return true;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!n(this, bt).has(e)) return Y(`Optional content group not found: ${e}`), true;
          if (!n(this, bt).get(e).visible) return true;
        }
        return false;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!n(this, bt).has(e)) return Y(`Optional content group not found: ${e}`), true;
          if (n(this, bt).get(e).visible) return false;
        }
        return true;
      }
      return Y(`Unknown optional content policy ${t.policy}.`), true;
    }
    return Y(`Unknown group type ${t.type}.`), true;
  }
  setVisibility(t, e = true, s = true) {
    var r;
    const i = n(this, bt).get(t);
    if (!i) {
      Y(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length) for (const a of i.rbGroups) for (const o of a) o !== t && ((r = n(this, bt).get(o)) == null || r._setVisible(ro, false, true));
    i._setVisible(ro, !!e, true), f(this, Kn, null);
  }
  setOCGState({ state: t, preserveRB: e }) {
    let s;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const r = n(this, bt).get(i);
      if (r) switch (s) {
        case "ON":
          this.setVisibility(i, true, e);
          break;
        case "OFF":
          this.setVisibility(i, false, e);
          break;
        case "Toggle":
          this.setVisibility(i, !r.visible, e);
          break;
      }
    }
    f(this, Kn, null);
  }
  get hasInitialVisibility() {
    return n(this, Zo) === null || this.getHash() === n(this, Zo);
  }
  getOrder() {
    return n(this, bt).size ? n(this, tl) ? n(this, tl).slice() : [...n(this, bt).keys()] : null;
  }
  getGroup(t) {
    return n(this, bt).get(t) || null;
  }
  getHash() {
    if (n(this, Kn) !== null) return n(this, Kn);
    const t = new Dm();
    for (const [e, s] of n(this, bt)) t.update(`${e}:${s.visible}`);
    return f(this, Kn, t.hexdigest());
  }
  [Symbol.iterator]() {
    return n(this, bt).entries();
  }
}
Kn = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), Zo = /* @__PURE__ */ new WeakMap(), tl = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakSet(), Uf = function(t) {
  const e = t.length;
  if (e < 2) return true;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const r = t[i];
    let a;
    if (Array.isArray(r)) a = b(this, fc, Uf).call(this, r);
    else if (n(this, bt).has(r)) a = n(this, bt).get(r).visible;
    else return Y(`Optional content group not found: ${r}`), true;
    switch (s) {
      case "And":
        if (!a) return false;
        break;
      case "Or":
        if (a) return true;
        break;
      case "Not":
        return !a;
      default:
        return true;
    }
  }
  return s === "And";
};
class NA {
  constructor(t, { disableRange: e = false, disableStream: s = false }) {
    rt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const { length: i, initialData: r, progressiveDone: a, contentDispositionFilename: o } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (r == null ? void 0 : r.length) > 0) {
      const l = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !s, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, h) => {
      this._onReceiveData({ begin: l, chunk: h });
    }), t.addProgressListener((l, h) => {
      this._onProgress({ loaded: l, total: h });
    }), t.addProgressiveReadListener((l) => {
      this._onReceiveData({ chunk: l });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({ begin: t, chunk: e }) {
    const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0) this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
    else {
      const i = this._rangeReaders.some(function(r) {
        return r._begin !== t ? false : (r._enqueue(s), true);
      });
      rt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, s, i, r;
    t.total === void 0 ? (s = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || s.call(e, { loaded: t.loaded }) : (r = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || r.call(i, { loaded: t.loaded, total: t.total });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = true;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    rt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new OA(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const s = new BA(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeReaders.slice(0)) s.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class OA {
  constructor(t, e, s = false, i = null) {
    this._stream = t, this._done = s || false, this._filename = Uu(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const r of this._queuedChunks) this._loaded += r.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({ value: t, done: false }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0) return { value: this._queuedChunks.shift(), done: false };
    if (this._done) return { value: void 0, done: true };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = true;
    for (const e of this._requests) e.resolve({ value: void 0, done: true });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = true);
  }
}
class BA {
  constructor(t, e, s) {
    this._stream = t, this._begin = e, this._end = s, this._queuedChunk = null, this._requests = [], this._done = false, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0) this._queuedChunk = t;
      else {
        this._requests.shift().resolve({ value: t, done: false });
        for (const s of this._requests) s.resolve({ value: void 0, done: true });
        this._requests.length = 0;
      }
      this._done = true, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, { value: e, done: false };
    }
    if (this._done) return { value: void 0, done: true };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = true;
    for (const e of this._requests) e.resolve({ value: void 0, done: true });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function HA(d) {
  let t = true, e = s("filename\\*", "i").exec(d);
  if (e) {
    e = e[1];
    let c = o(e);
    return c = unescape(c), c = l(c), c = h(c), r(c);
  }
  if (e = a(d), e) {
    const c = h(e);
    return r(c);
  }
  if (e = s("filename", "i").exec(d), e) {
    e = e[1];
    let c = o(e);
    return c = h(c), r(c);
  }
  function s(c, u) {
    return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
  }
  function i(c, u) {
    if (c) {
      if (!/^[\x00-\xFF]+$/.test(u)) return u;
      try {
        const p = new TextDecoder(c, { fatal: true }), m = hd(u);
        u = p.decode(m), t = false;
      } catch {
      }
    }
    return u;
  }
  function r(c) {
    return t && /[\x80-\xff]/.test(c) && (c = i("utf-8", c), t && (c = i("iso-8859-1", c))), c;
  }
  function a(c) {
    const u = [];
    let p;
    const m = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (p = m.exec(c)) !== null; ) {
      let [, y, v, w] = p;
      if (y = parseInt(y, 10), y in u) {
        if (y === 0) break;
        continue;
      }
      u[y] = [v, w];
    }
    const A = [];
    for (let y = 0; y < u.length && y in u; ++y) {
      let [v, w] = u[y];
      w = o(w), v && (w = unescape(w), y === 0 && (w = l(w))), A.push(w);
    }
    return A.join("");
  }
  function o(c) {
    if (c.startsWith('"')) {
      const u = c.slice(1).split('\\"');
      for (let p = 0; p < u.length; ++p) {
        const m = u[p].indexOf('"');
        m !== -1 && (u[p] = u[p].slice(0, m), u.length = p + 1), u[p] = u[p].replaceAll(/\\(.)/g, "$1");
      }
      c = u.join('"');
    }
    return c;
  }
  function l(c) {
    const u = c.indexOf("'");
    if (u === -1) return c;
    const p = c.slice(0, u), A = c.slice(u + 1).replace(/^[^']*'/, "");
    return i(p, A);
  }
  function h(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, p, m, A) {
      if (m === "q" || m === "Q") return A = A.replaceAll("_", " "), A = A.replaceAll(/=([0-9a-fA-F]{2})/g, function(y, v) {
        return String.fromCharCode(parseInt(v, 16));
      }), i(p, A);
      try {
        A = atob(A);
      } catch {
      }
      return i(p, A);
    });
  }
  return "";
}
function Vm(d, t) {
  const e = new Headers();
  if (!d || !t || typeof t != "object") return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function ju(d) {
  var t;
  return ((t = URL.parse(d)) == null ? void 0 : t.origin) ?? null;
}
function Wm({ responseHeaders: d, isHttp: t, rangeChunkSize: e, disableRange: s }) {
  const i = { allowRangeRequests: false, suggestedLength: void 0 }, r = parseInt(d.get("Content-Length"), 10);
  return !Number.isInteger(r) || (i.suggestedLength = r, r <= 2 * e) || s || !t || d.get("Accept-Ranges") !== "bytes" || (d.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = true), i;
}
function Xm(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = HA(t);
    if (e.includes("%")) try {
      e = decodeURIComponent(e);
    } catch {
    }
    if (Uu(e)) return e;
  }
  return null;
}
function fd(d, t) {
  return new vh(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d, d === 404 || d === 0 && t.startsWith("file:"));
}
function qm(d) {
  return d === 200 || d === 206;
}
function Ym(d, t, e) {
  return { method: "GET", headers: d, signal: e.signal, mode: "cors", credentials: t ? "include" : "same-origin", redirect: "follow" };
}
function Km(d) {
  return d instanceof Uint8Array ? d.buffer : d instanceof ArrayBuffer ? d : (Y(`getArrayBuffer - unexpected data format: ${d}`), new Uint8Array(d).buffer);
}
class UA {
  constructor(t) {
    R(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Vm(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return rt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new jA(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const s = new $A(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0)) s.cancel(t);
  }
}
class jA {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || false, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || false, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, Ym(s, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = ju(r.url), !qm(r.status)) throw fd(r.status, i);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers, { allowRangeRequests: o, suggestedLength: l } = Wm({ responseHeaders: a, isHttp: t.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = Xm(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Sn("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._headersCapability.promise;
    const { value: t, done: e } = await this._reader.read();
    return e ? { value: t, done: e } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, { loaded: this._loaded, total: this._contentLength }), { value: Km(t), done: false });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class $A {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || false, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, Ym(r, this._withCredentials, this._abortController)).then((o) => {
      const l = ju(o.url);
      if (l !== t._responseOrigin) throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!qm(o.status)) throw fd(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    await this._readCapability.promise;
    const { value: t, done: e } = await this._reader.read();
    return e ? { value: t, done: e } : (this._loaded += t.byteLength, (s = this.onProgress) == null || s.call(this, { loaded: this._loaded }), { value: Km(t), done: false });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const sf = 200, nf = 206;
function zA(d) {
  const t = d.response;
  return typeof t != "string" ? t : hd(t).buffer;
}
class GA {
  constructor({ url: t, httpHeaders: e, withCredentials: s }) {
    R(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Vm(this.isHttp, e), this.withCredentials = s || false, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = { xhr: e };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers) e.setRequestHeader(r, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = nf) : i.expectedStatus = sf, e.responseType = "arraybuffer", rt(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
  }
  onProgress(t, e) {
    var i;
    const s = this.pendingRequests[t];
    s && ((i = s.onProgress) == null || i.call(s, e));
  }
  onStateChange(t, e) {
    const s = this.pendingRequests[t];
    if (!s) return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests)) return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      s.onError(i.status);
      return;
    }
    const r = i.status || sf;
    if (!(r === sf && s.expectedStatus === nf) && r !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = zA(i);
    if (r === nf) {
      const l = i.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      h ? s.onDone({ begin: parseInt(h[1], 10), chunk: o }) : (Y('Missing or invalid "Content-Range" header.'), s.onError(0));
    } else o ? s.onDone({ begin: 0, chunk: o }) : s.onError(i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class VA {
  constructor(t) {
    this._source = t, this._manager = new GA(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return rt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new WA(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new XA(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0)) s.cancel(t);
  }
}
class WA {
  constructor(t, e) {
    this._manager = t, this._url = e.url, this._fullRequestId = t.request({ onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || false, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._isStreamingSupported = false, this._isRangeSupported = false, this._cachedChunks = [], this._requests = [], this._done = false, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = ju(e.responseURL);
    const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), { allowRangeRequests: r, suggestedLength: a } = Wm({ responseHeaders: i, isHttp: this._manager.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
    r && (this._isRangeSupported = true), this._contentLength = a || this._contentLength, this._filename = Xm(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({ value: t.chunk, done: false }) : this._cachedChunks.push(t.chunk)), this._done = true, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests) e.resolve({ value: void 0, done: true });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = fd(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests) e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, { loaded: t.loaded, total: t.lengthComputable ? t.total : this._contentLength });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError) throw this._storedError;
    if (this._cachedChunks.length > 0) return { value: this._cachedChunks.shift(), done: false };
    if (this._done) return { value: void 0, done: true };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = true, this._headersCapability.reject(t);
    for (const e of this._requests) e.resolve({ value: void 0, done: true });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class XA {
  constructor(t, e, s) {
    this._manager = t, this._url = t.url, this._requestId = t.request({ begin: e, end: s, onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) }), this._requests = [], this._queuedChunk = null, this._done = false, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _onHeadersReceived() {
    var e;
    const t = ju((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
    t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({ value: e, done: false }) : this._queuedChunk = e, this._done = true;
    for (const s of this._requests) s.resolve({ value: void 0, done: true });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError ?? (this._storedError = fd(t, this._url));
    for (const e of this._requests) e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, { loaded: t.loaded });
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._storedError) throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, { value: e, done: false };
    }
    if (this._done) return { value: void 0, done: true };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = true;
    for (const e of this._requests) e.resolve({ value: void 0, done: true });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const qA = /^[a-z][a-z0-9\-+.]+:/i;
function YA(d) {
  if (qA.test(d)) return new URL(d);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(d));
}
class KA {
  constructor(t) {
    this.source = t, this.url = YA(t.url), rt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return rt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new JA(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const s = new QA(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const s of this._rangeRequestReaders.slice(0)) s.cancel(t);
  }
}
class JA {
  constructor(t) {
    this._url = t.url, this._done = false, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || false, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then((i) => {
      this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = fd(0, this._url.href)), this._storedError = i, this._headersCapability.reject(i);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done) return { value: void 0, done: true };
    if (this._storedError) throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, { loaded: this._loaded, total: this._contentLength }), { value: new Uint8Array(t).buffer, done: false });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = true, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Sn("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class QA {
  constructor(t, e, s) {
    this._url = t.url, this._done = false, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const i = t.source;
    this._isStreamingSupported = !i.disableStream;
    const r = process.getBuiltinModule("fs");
    this._setReadableStream(r.createReadStream(this._url, { start: e, end: s - 1 }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var s;
    if (await this._readCapability.promise, this._done) return { value: void 0, done: true };
    if (this._storedError) throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (s = this.onProgress) == null || s.call(this, { loaded: this._loaded }), { value: new Uint8Array(t).buffer, done: false });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = true, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const Yl = /* @__PURE__ */ Symbol("INITIAL_DATA");
var ns, pc, jf;
class Jm {
  constructor() {
    g(this, pc);
    g(this, ns, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = b(this, pc, jf).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = n(this, ns)[t];
    if (!s || s.data === Yl) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = n(this, ns)[t];
    return !!e && e.data !== Yl;
  }
  delete(t) {
    const e = n(this, ns)[t];
    return !e || e.data === Yl ? false : (delete n(this, ns)[t], true);
  }
  resolve(t, e = null) {
    const s = b(this, pc, jf).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const e in n(this, ns)) {
      const { data: s } = n(this, ns)[e];
      (t = s == null ? void 0 : s.bitmap) == null || t.close();
    }
    f(this, ns, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in n(this, ns)) {
      const { data: e } = n(this, ns)[t];
      e !== Yl && (yield [t, e]);
    }
  }
}
ns = /* @__PURE__ */ new WeakMap(), pc = /* @__PURE__ */ new WeakSet(), jf = function(t) {
  var e;
  return (e = n(this, ns))[t] || (e[t] = { ...Promise.withResolvers(), data: Yl });
};
const ZA = 1e5, Rg = 30;
var Gg, Jn, Xe, gc, mc, ca, nn, bc, yc, da, el, sl, Qn, il, Ac, nl, ua, wc, vc, jt, rl, fa, Ec, Zn, al, xn, Qm, Zm, $f, ws, Bd, zf, tb, eb;
let Ch = (jt = class {
  constructor({ textContentSource: t, container: e, viewport: s }) {
    g(this, xn);
    g(this, Jn, Promise.withResolvers());
    g(this, Xe, null);
    g(this, gc, false);
    g(this, mc, !!((Gg = globalThis.FontInspector) != null && Gg.enabled));
    g(this, ca, null);
    g(this, nn, null);
    g(this, bc, 0);
    g(this, yc, 0);
    g(this, da, null);
    g(this, el, null);
    g(this, sl, 0);
    g(this, Qn, 0);
    g(this, il, /* @__PURE__ */ Object.create(null));
    g(this, Ac, []);
    g(this, nl, null);
    g(this, ua, []);
    g(this, wc, /* @__PURE__ */ new WeakMap());
    g(this, vc, null);
    var l;
    if (t instanceof ReadableStream) f(this, nl, t);
    else if (typeof t == "object") f(this, nl, new ReadableStream({ start(h) {
      h.enqueue(t), h.close();
    } }));
    else throw new Error('No "textContentSource" parameter specified.');
    f(this, Xe, f(this, el, e)), f(this, Qn, s.scale * si.pixelRatio), f(this, sl, s.rotation), f(this, nn, { div: null, properties: null, ctx: null });
    const { pageWidth: i, pageHeight: r, pageX: a, pageY: o } = s.rawDims;
    f(this, vc, [1, 0, 0, -1, -a, o + r]), f(this, yc, i), f(this, bc, r), b(l = jt, ws, tb).call(l), _r(e, s), n(this, Jn).promise.finally(() => {
      n(jt, al).delete(this), f(this, nn, null), f(this, il, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const { isWindows: t, isFirefox: e } = ce.platform;
    return Q(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      n(this, da).read().then(({ value: e, done: s }) => {
        if (s) {
          n(this, Jn).resolve();
          return;
        }
        n(this, ca) ?? f(this, ca, e.lang), Object.assign(n(this, il), e.styles), b(this, xn, Qm).call(this, e.items), t();
      }, n(this, Jn).reject);
    };
    return f(this, da, n(this, nl).getReader()), n(jt, al).add(this), t(), n(this, Jn).promise;
  }
  update({ viewport: t, onBefore: e = null }) {
    var r;
    const s = t.scale * si.pixelRatio, i = t.rotation;
    if (i !== n(this, sl) && (e == null || e(), f(this, sl, i), _r(n(this, el), { rotation: i })), s !== n(this, Qn)) {
      e == null || e(), f(this, Qn, s);
      const a = { div: null, properties: null, ctx: b(r = jt, ws, Bd).call(r, n(this, ca)) };
      for (const o of n(this, ua)) a.properties = n(this, wc).get(o), a.div = o, b(this, xn, $f).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new Sn("TextLayer task cancelled.");
    (e = n(this, da)) == null || e.cancel(t).catch(() => {
    }), f(this, da, null), n(this, Jn).reject(t);
  }
  get textDivs() {
    return n(this, ua);
  }
  get textContentItemsStr() {
    return n(this, Ac);
  }
  static cleanup() {
    if (!(n(this, al).size > 0)) {
      n(this, rl).clear();
      for (const { canvas: t } of n(this, fa).values()) t.remove();
      n(this, fa).clear();
    }
  }
}, Jn = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), gc = /* @__PURE__ */ new WeakMap(), mc = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), bc = /* @__PURE__ */ new WeakMap(), yc = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), el = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), il = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakMap(), nl = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), wc = /* @__PURE__ */ new WeakMap(), vc = /* @__PURE__ */ new WeakMap(), rl = /* @__PURE__ */ new WeakMap(), fa = /* @__PURE__ */ new WeakMap(), Ec = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), al = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakSet(), Qm = function(t) {
  var i, r;
  if (n(this, gc)) return;
  (r = n(this, nn)).ctx ?? (r.ctx = b(i = jt, ws, Bd).call(i, n(this, ca)));
  const e = n(this, ua), s = n(this, Ac);
  for (const a of t) {
    if (e.length > ZA) {
      Y("Ignoring additional textDivs for performance reasons."), f(this, gc, true);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = n(this, Xe);
        f(this, Xe, document.createElement("span")), n(this, Xe).classList.add("markedContent"), a.id && n(this, Xe).setAttribute("id", `${a.id}`), o.append(n(this, Xe));
      } else a.type === "endMarkedContent" && f(this, Xe, n(this, Xe).parentNode);
      continue;
    }
    s.push(a.str), b(this, xn, Zm).call(this, a);
  }
}, Zm = function(t) {
  var y;
  const e = document.createElement("span"), s = { angle: 0, canvasWidth: 0, hasText: t.str !== "", hasEOL: t.hasEOL, fontSize: 0 };
  n(this, ua).push(e);
  const i = $.transform(n(this, vc), t.transform);
  let r = Math.atan2(i[1], i[0]);
  const a = n(this, il)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, mc) && a.fontSubstitution || a.fontFamily;
  o = jt.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * b(y = jt, ws, eb).call(y, o, a, n(this, ca));
  let c, u;
  r === 0 ? (c = i[4], u = i[5] - h) : (c = i[4] + h * Math.sin(r), u = i[5] - h * Math.cos(r));
  const p = "calc(var(--total-scale-factor) *", m = e.style;
  n(this, Xe) === n(this, el) ? (m.left = `${(100 * c / n(this, yc)).toFixed(2)}%`, m.top = `${(100 * u / n(this, bc)).toFixed(2)}%`) : (m.left = `${p}${c.toFixed(2)}px)`, m.top = `${p}${u.toFixed(2)}px)`), m.fontSize = `${p}${(n(jt, Zn) * l).toFixed(2)}px)`, m.fontFamily = o, s.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, n(this, mc) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
  let A = false;
  if (t.str.length > 1) A = true;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const v = Math.abs(t.transform[0]), w = Math.abs(t.transform[3]);
    v !== w && Math.max(v, w) / Math.min(v, w) > 1.5 && (A = true);
  }
  if (A && (s.canvasWidth = a.vertical ? t.height : t.width), n(this, wc).set(e, s), n(this, nn).div = e, n(this, nn).properties = s, b(this, xn, $f).call(this, n(this, nn)), s.hasText && n(this, Xe).append(e), s.hasEOL) {
    const v = document.createElement("br");
    v.setAttribute("role", "presentation"), n(this, Xe).append(v);
  }
}, $f = function(t) {
  var o;
  const { div: e, properties: s, ctx: i } = t, { style: r } = e;
  let a = "";
  if (n(jt, Zn) > 1 && (a = `scale(${1 / n(jt, Zn)})`), s.canvasWidth !== 0 && s.hasText) {
    const { fontFamily: l } = r, { canvasWidth: h, fontSize: c } = s;
    b(o = jt, ws, zf).call(o, i, c * n(this, Qn), l);
    const { width: u } = i.measureText(e.textContent);
    u > 0 && (a = `scaleX(${h * n(this, Qn) / u}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, ws = /* @__PURE__ */ new WeakSet(), Bd = function(t = null) {
  let e = n(this, fa).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", { alpha: false, willReadFrequently: true }), n(this, fa).set(t, e), n(this, Ec).set(e, { size: 0, family: "" });
  }
  return e;
}, zf = function(t, e, s) {
  const i = n(this, Ec).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, tb = function() {
  if (n(this, Zn) !== null) return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), f(this, Zn, t.getBoundingClientRect().height), t.remove();
}, eb = function(t, e, s) {
  const i = n(this, rl).get(t);
  if (i) return i;
  const r = b(this, ws, Bd).call(this, s);
  r.canvas.width = r.canvas.height = Rg, b(this, ws, zf).call(this, r, Rg, t);
  const a = r.measureText(""), o = a.fontBoundingBoxAscent, l = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let h = 0.8;
  return o ? h = o / (o + l) : (ce.platform.isFirefox && Y("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? h = e.ascent : e.descent && (h = 1 + e.descent)), n(this, rl).set(t, h), h;
}, g(jt, ws), g(jt, rl, /* @__PURE__ */ new Map()), g(jt, fa, /* @__PURE__ */ new Map()), g(jt, Ec, /* @__PURE__ */ new WeakMap()), g(jt, Zn, null), g(jt, al, /* @__PURE__ */ new Set()), jt);
const tw = 100;
function Gp(d = {}) {
  typeof d == "string" || d instanceof URL ? d = { url: d } : (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) && (d = { data: d });
  const t = new Gf(), { docId: e } = t, s = d.url ? lA(d.url) : null, i = d.data ? hA(d.data) : null, r = d.httpHeaders || null, a = d.withCredentials === true, o = d.password ?? null, l = d.range instanceof Vp ? d.range : null, h = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : 2 ** 16;
  let c = d.worker instanceof Gl ? d.worker : null;
  const u = d.verbosity, p = typeof d.docBaseUrl == "string" && !dd(d.docBaseUrl) ? d.docBaseUrl : null, m = Ad(d.cMapUrl), A = d.cMapPacked !== false, y = d.CMapReaderFactory || (Be ? mA : mg), v = Ad(d.iccUrl), w = Ad(d.standardFontDataUrl), S = d.StandardFontDataFactory || (Be ? bA : bg), E = Ad(d.wasmUrl), _ = d.WasmFactory || (Be ? yA : yg), C = d.stopAtErrors !== true, x = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1, T = d.isEvalSupported !== false, P = typeof d.isOffscreenCanvasSupported == "boolean" ? d.isOffscreenCanvasSupported : !Be, k = typeof d.isImageDecoderSupported == "boolean" ? d.isImageDecoderSupported : !Be && (ce.platform.isFirefox || !globalThis.chrome), D = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1, L = typeof d.disableFontFace == "boolean" ? d.disableFontFace : Be, F = d.fontExtraProperties === true, V = d.enableXfa === true, O = d.ownerDocument || globalThis.document, X = d.disableRange === true, B = d.disableStream === true, N = d.disableAutoFetch === true, et = d.pdfBug === true, nt = d.CanvasFactory || (Be ? gA : uA), ee = d.FilterFactory || (Be ? pA : fA), Je = d.enableHWA === true, at = d.useWasm !== false, ht = l ? l.length : d.length ?? NaN, se = typeof d.useSystemFonts == "boolean" ? d.useSystemFonts : !Be && !L, de = typeof d.useWorkerFetch == "boolean" ? d.useWorkerFetch : !!(y === mg && S === bg && _ === yg && m && w && E && Ql(m, document.baseURI) && Ql(w, document.baseURI) && Ql(E, document.baseURI)), ve = null;
  zy(u);
  const At = { canvasFactory: new nt({ ownerDocument: O, enableHWA: Je }), filterFactory: new ee({ docId: e, ownerDocument: O }), cMapReaderFactory: de ? null : new y({ baseUrl: m, isCompressed: A }), standardFontDataFactory: de ? null : new S({ baseUrl: w }), wasmFactory: de ? null : new _({ baseUrl: E }) };
  c || (c = Gl.create({ verbosity: u, port: Ns.workerPort }), t._worker = c);
  const Hs = { docId: e, apiVersion: "5.4.296", data: i, password: o, disableAutoFetch: N, rangeChunkSize: h, length: ht, docBaseUrl: p, enableXfa: V, evaluatorOptions: { maxImageSize: x, disableFontFace: L, ignoreErrors: C, isEvalSupported: T, isOffscreenCanvasSupported: P, isImageDecoderSupported: k, canvasMaxAreaInBytes: D, fontExtraProperties: F, useSystemFonts: se, useWasm: at, useWorkerFetch: de, cMapUrl: m, iccUrl: v, standardFontDataUrl: w, wasmUrl: E } }, ni = { ownerDocument: O, pdfBug: et, styleElement: ve, loadingParams: { disableAutoFetch: N, enableXfa: V } };
  return c.promise.then(function() {
    if (t.destroyed) throw new Error("Loading aborted");
    if (c.destroyed) throw new Error("Worker was destroyed");
    const Ii = c.messageHandler.sendWithPromise("GetDocRequest", Hs, i ? [i.buffer] : null);
    let De;
    if (l) De = new NA(l, { disableRange: X, disableStream: B });
    else if (!i) {
      if (!s) throw new Error("getDocument - no `url` parameter provided.");
      const Tt = Ql(s) ? UA : Be ? KA : VA;
      De = new Tt({ url: s, length: ht, httpHeaders: r, withCredentials: a, rangeChunkSize: h, disableRange: X, disableStream: B });
    }
    return Ii.then((Tt) => {
      if (t.destroyed) throw new Error("Loading aborted");
      if (c.destroyed) throw new Error("Worker was destroyed");
      const kt = new nh(e, Tt, c.port), Yt = new iw(kt, t, De, ni, At, Je);
      t._transport = Yt, kt.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
var Tu;
const Pu = class Pu2 {
  constructor() {
    R(this, "_capability", Promise.withResolvers());
    R(this, "_transport", null);
    R(this, "_worker", null);
    R(this, "docId", `d${Kt(Pu2, Tu)._++}`);
    R(this, "destroyed", false);
    R(this, "onPassword", null);
    R(this, "onProgress", null);
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, s, i;
    this.destroyed = true;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = true), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (r) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, r;
    }
    this._transport = null, (i = this._worker) == null || i.destroy(), this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
};
Tu = /* @__PURE__ */ new WeakMap(), g(Pu, Tu, 0);
let Gf = Pu;
var pa, Sc, _c, Cc, xc, Vg;
let Vp = (Vg = class {
  constructor(t, e, s = false, i = null) {
    g(this, pa, Promise.withResolvers());
    g(this, Sc, []);
    g(this, _c, []);
    g(this, Cc, []);
    g(this, xc, []);
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i;
  }
  addRangeListener(t) {
    n(this, xc).push(t);
  }
  addProgressListener(t) {
    n(this, Cc).push(t);
  }
  addProgressiveReadListener(t) {
    n(this, _c).push(t);
  }
  addProgressiveDoneListener(t) {
    n(this, Sc).push(t);
  }
  onDataRange(t, e) {
    for (const s of n(this, xc)) s(t, e);
  }
  onDataProgress(t, e) {
    n(this, pa).promise.then(() => {
      for (const s of n(this, Cc)) s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    n(this, pa).promise.then(() => {
      for (const e of n(this, _c)) e(t);
    });
  }
  onDataProgressiveDone() {
    n(this, pa).promise.then(() => {
      for (const t of n(this, Sc)) t();
    });
  }
  transportReady() {
    n(this, pa).resolve();
  }
  requestDataRange(t, e) {
    _t("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}, pa = /* @__PURE__ */ new WeakMap(), Sc = /* @__PURE__ */ new WeakMap(), _c = /* @__PURE__ */ new WeakMap(), Cc = /* @__PURE__ */ new WeakMap(), xc = /* @__PURE__ */ new WeakMap(), Vg);
class ew {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return Q(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAnnotationsByType(t, e) {
    return this._transport.getAnnotationsByType(t, e);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({ intent: t = "display" } = {}) {
    const { renderingIntent: e } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = false) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var rn, ga, dh;
class sw {
  constructor(t, e, s, i = false) {
    g(this, ga);
    g(this, rn, false);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new hg() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new Jm(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = false, this.recordedBBoxes = null;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({ scale: t, rotation: e = this.rotate, offsetX: s = 0, offsetY: i = 0, dontFlip: r = false } = {}) {
    return new cd({ viewBox: this.view, userUnit: this.userUnit, scale: t, rotation: e, offsetX: s, offsetY: i, dontFlip: r });
  }
  getAnnotations({ intent: t = "display" } = {}) {
    const { renderingIntent: e } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return Q(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({ canvasContext: t, canvas: e = t.canvas, viewport: s, intent: i = "display", annotationMode: r = Mi.ENABLE, transform: a = null, background: o = null, optionalContentConfigPromise: l = null, annotationCanvasMap: h = null, pageColors: c = null, printAnnotationStorage: u = null, isEditing: p = false, recordOperations: m = false, operationsFilter: A = null }) {
    var k, D, L;
    (k = this._stats) == null || k.time("Overall");
    const y = this._transport.getRenderingIntent(i, r, u, p), { renderingIntent: v, cacheKey: w } = y;
    f(this, rn, false), l || (l = this._transport.getOptionalContentConfig(v));
    let S = this._intentStates.get(w);
    S || (S = /* @__PURE__ */ Object.create(null), this._intentStates.set(w, S)), S.streamReaderCancelTimeout && (clearTimeout(S.streamReaderCancelTimeout), S.streamReaderCancelTimeout = null);
    const E = !!(v & bs.PRINT);
    S.displayReadyCapability || (S.displayReadyCapability = Promise.withResolvers(), S.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null }, (D = this._stats) == null || D.time("Page Request"), this._pumpOperatorList(y));
    const _ = !!(this._pdfBug && ((L = globalThis.StepperManager) != null && L.enabled)), C = !this.recordedBBoxes && (m || _), x = (F) => {
      var V, O;
      if (S.renderTasks.delete(T), C) {
        const X = (V = T.gfx) == null ? void 0 : V.dependencyTracker.take();
        X && (T.stepper && T.stepper.setOperatorBBoxes(X, T.gfx.dependencyTracker.takeDebugMetadata()), m && (this.recordedBBoxes = X));
      }
      E && f(this, rn, true), b(this, ga, dh).call(this), F ? (T.capability.reject(F), this._abortOperatorList({ intentState: S, reason: F instanceof Error ? F : new Error(F) })) : T.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (O = globalThis.Stats) != null && O.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, T = new Vf({ callback: x, params: { canvas: e, canvasContext: t, dependencyTracker: C ? new wA(e, S.operatorList.length, _) : null, viewport: s, transform: a, background: o }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: h, operatorList: S.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !E, pdfBug: this._pdfBug, pageColors: c, enableHWA: this._transport.enableHWA, operationsFilter: A });
    (S.renderTasks || (S.renderTasks = /* @__PURE__ */ new Set())).add(T);
    const P = T.task;
    return Promise.all([S.displayReadyCapability.promise, l]).then(([F, V]) => {
      var O;
      if (this.destroyed) {
        x();
        return;
      }
      if ((O = this._stats) == null || O.time("Rendering"), !(V.renderingIntent & v)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      T.initializeGraphics({ transparency: F, optionalContentConfig: V }), T.operatorListChanged();
    }).catch(x), P;
  }
  getOperatorList({ intent: t = "display", annotationMode: e = Mi.ENABLE, printAnnotationStorage: s = null, isEditing: i = false } = {}) {
    var h;
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, s, i, true);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = r, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null }, (h = this._stats) == null || h.time("Page Request"), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }
  streamTextContent({ includeMarkedContent: t = false, disableNormalization: e = false } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", { pageIndex: this._pageIndex, includeMarkedContent: t === true, disableNormalization: e === true }, { highWaterMark: 100, size(i) {
      return i.items.length;
    } });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa) return this.getXfa().then((s) => Eh.textContent(s));
    const e = this.streamTextContent(t);
    return new Promise(function(s, i) {
      function r() {
        a.read().then(function({ value: l, done: h }) {
          if (h) {
            s(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), r();
        }, i);
      }
      const a = e.getReader(), o = { items: [], styles: /* @__PURE__ */ Object.create(null), lang: null };
      r();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = true;
    const t = [];
    for (const e of this._intentStates.values()) if (this._abortOperatorList({ intentState: e, reason: new Error("Page was destroyed."), force: true }), !e.opListReadCapability) for (const s of e.renderTasks) t.push(s.completed), s.cancel();
    return this.objs.clear(), f(this, rn, false), Promise.all(t);
  }
  cleanup(t = false) {
    f(this, rn, true);
    const e = b(this, ga, dh).call(this);
    return t && e && this._stats && (this._stats = new hg()), e;
  }
  _startRenderPage(t, e) {
    var i, r;
    const s = this._intentStates.get(e);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (r = s.displayReadyCapability) == null || r.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++) e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks) s.operatorListChanged();
    t.lastChunk && b(this, ga, dh).call(this);
  }
  _pumpOperatorList({ renderingIntent: t, cacheKey: e, annotationStorageSerializable: s, modifiedIds: i }) {
    const { map: r, transfer: a } = s, l = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: t, cacheKey: e, annotationStorage: r, modifiedIds: i }, a).getReader(), h = this._intentStates.get(e);
    h.streamReader = l;
    const c = () => {
      l.read().then(({ value: u, done: p }) => {
        if (p) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, h), c());
      }, (u) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = true;
            for (const p of h.renderTasks) p.operatorListChanged();
            b(this, ga, dh).call(this);
          }
          if (h.displayReadyCapability) h.displayReadyCapability.reject(u);
          else if (h.opListReadCapability) h.opListReadCapability.reject(u);
          else throw u;
        }
      });
    };
    c();
  }
  _abortOperatorList({ intentState: t, reason: e, force: s = false }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
        if (t.renderTasks.size > 0) return;
        if (e instanceof Hu) {
          let i = tw;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({ intentState: t, reason: e, force: true });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new Sn(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, r] of this._intentStates) if (r === t) {
          this._intentStates.delete(i);
          break;
        }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
rn = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakSet(), dh = function() {
  if (!n(this, rn) || this.destroyed) return false;
  for (const { renderTasks: t, operatorList: e } of this._intentStates.values()) if (t.size > 0 || !e.lastChunk) return false;
  return this._intentStates.clear(), this.objs.clear(), f(this, rn, false), true;
};
var tr, qs, an, ma, ku, ba, ya, He, Hd, sb, ib, uh, ol, Ud;
const Rt = class Rt2 {
  constructor({ name: t = null, port: e = null, verbosity: s = Gy() } = {}) {
    g(this, He);
    g(this, tr, Promise.withResolvers());
    g(this, qs, null);
    g(this, an, null);
    g(this, ma, null);
    if (this.name = t, this.destroyed = false, this.verbosity = s, e) {
      if (n(Rt2, ya).has(e)) throw new Error("Cannot use more than one PDFWorker per port.");
      n(Rt2, ya).set(e, this), b(this, He, sb).call(this, e);
    } else b(this, He, ib).call(this);
  }
  get promise() {
    return n(this, tr).promise;
  }
  get port() {
    return n(this, an);
  }
  get messageHandler() {
    return n(this, qs);
  }
  destroy() {
    var t, e;
    this.destroyed = true, (t = n(this, ma)) == null || t.terminate(), f(this, ma, null), n(Rt2, ya).delete(n(this, an)), f(this, an, null), (e = n(this, qs)) == null || e.destroy(), f(this, qs, null);
  }
  static create(t) {
    const e = n(this, ya).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy) throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new Rt2(t);
  }
  static get workerSrc() {
    if (Ns.workerSrc) return Ns.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return Q(this, "_setupFakeWorkerGlobal", (async () => n(this, ol, Ud) ? n(this, ol, Ud) : (await import(this.workerSrc)).WorkerMessageHandler)());
  }
};
tr = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap(), ya = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakSet(), Hd = function() {
  n(this, tr).resolve(), n(this, qs).send("configure", { verbosity: this.verbosity });
}, sb = function(t) {
  f(this, an, t), f(this, qs, new nh("main", "worker", t)), n(this, qs).on("ready", () => {
  }), b(this, He, Hd).call(this);
}, ib = function() {
  if (n(Rt, ba) || n(Rt, ol, Ud)) {
    b(this, He, uh).call(this);
    return;
  }
  let { workerSrc: t } = Rt;
  try {
    Rt._isSameOrigin(window.location, t) || (t = Rt._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, { type: "module" }), s = new nh("main", "worker", e), i = () => {
      r.abort(), s.destroy(), e.terminate(), this.destroyed ? n(this, tr).reject(new Error("Worker was destroyed")) : b(this, He, uh).call(this);
    }, r = new AbortController();
    e.addEventListener("error", () => {
      n(this, ma) || i();
    }, { signal: r.signal }), s.on("test", (o) => {
      if (r.abort(), this.destroyed || !o) {
        i();
        return;
      }
      f(this, qs, s), f(this, an, e), f(this, ma, e), b(this, He, Hd).call(this);
    }), s.on("ready", (o) => {
      if (r.abort(), this.destroyed) {
        i();
        return;
      }
      try {
        a();
      } catch {
        b(this, He, uh).call(this);
      }
    });
    const a = () => {
      const o = new Uint8Array();
      s.send("test", o, [o.buffer]);
    };
    a();
    return;
  } catch {
    Bu("The worker has been disabled.");
  }
  b(this, He, uh).call(this);
}, uh = function() {
  n(Rt, ba) || (Y("Setting up fake worker."), f(Rt, ba, true)), Rt._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, tr).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new dA();
    f(this, an, e);
    const s = `fake${Kt(Rt, ku)._++}`, i = new nh(s + "_worker", s, e);
    t.setup(i, e), f(this, qs, new nh(s, s + "_worker", e)), b(this, He, Hd).call(this);
  }).catch((t) => {
    n(this, tr).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, ol = /* @__PURE__ */ new WeakSet(), Ud = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, g(Rt, ol), g(Rt, ku, 0), g(Rt, ba, false), g(Rt, ya, /* @__PURE__ */ new WeakMap()), Be && (f(Rt, ba, true), Ns.workerSrc || (Ns.workerSrc = "./pdf.worker.mjs")), Rt._isSameOrigin = (t, e) => {
  const s = URL.parse(t);
  if (!(s != null && s.origin) || s.origin === "null") return false;
  const i = new URL(e, s);
  return s.origin === i.origin;
}, Rt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], { type: "text/javascript" }));
}, Rt.fromPort = (t) => {
  if (Zy("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !(t != null && t.port)) throw new Error("PDFWorker.fromPort - invalid method signature.");
  return Rt.create(t);
};
let Gl = Rt;
var on, vi, ll, hl, ln, Aa, fh;
class iw {
  constructor(t, e, s, i, r, a) {
    g(this, Aa);
    g(this, on, /* @__PURE__ */ new Map());
    g(this, vi, /* @__PURE__ */ new Map());
    g(this, ll, /* @__PURE__ */ new Map());
    g(this, hl, /* @__PURE__ */ new Map());
    g(this, ln, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new Jm(), this.fontLoader = new aA({ ownerDocument: i.ownerDocument, styleElement: i.styleElement }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = false, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = a, this.setupMessageHandler();
  }
  get annotationStorage() {
    return Q(this, "annotationStorage", new jp());
  }
  getRenderingIntent(t, e = Mi.ENABLE, s = null, i = false, r = false) {
    let a = bs.DISPLAY, o = Pf;
    switch (t) {
      case "any":
        a = bs.ANY;
        break;
      case "display":
        break;
      case "print":
        a = bs.PRINT;
        break;
      default:
        Y(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & bs.PRINT && s instanceof Im ? s : this.annotationStorage;
    switch (e) {
      case Mi.DISABLE:
        a += bs.ANNOTATIONS_DISABLE;
        break;
      case Mi.ENABLE:
        break;
      case Mi.ENABLE_FORMS:
        a += bs.ANNOTATIONS_FORMS;
        break;
      case Mi.ENABLE_STORAGE:
        a += bs.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        Y(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += bs.IS_EDITING), r && (a += bs.OPLIST);
    const { ids: h, hash: c } = l.modifiedIds, u = [a, o.hash, c];
    return { renderingIntent: a, cacheKey: u.join("_"), annotationStorageSerializable: o, modifiedIds: h };
  }
  destroy() {
    var s;
    if (this.destroyCapability) return this.destroyCapability.promise;
    this.destroyed = true, this.destroyCapability = Promise.withResolvers(), (s = n(this, ln)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of n(this, vi).values()) t.push(i._destroy());
    n(this, vi).clear(), n(this, ll).clear(), n(this, hl).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, on).clear(), this.filterFactory.destroy(), Ch.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new Sn("Worker was terminated.")), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const { messageHandler: t, loadingTask: e } = this;
    t.on("GetReader", (s, i) => {
      rt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = { loaded: r.loaded, total: r.total };
      }, i.onPull = () => {
        this._fullReader.read().then(function({ value: r, done: a }) {
          if (a) {
            i.close();
            return;
          }
          rt(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          i.error(r);
        });
      }, i.onCancel = (r) => {
        this._fullReader.cancel(r), i.ready.catch((a) => {
          if (!this.destroyed) throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      var o;
      await this._fullReader.headersReady;
      const { isStreamingSupported: i, isRangeSupported: r, contentLength: a } = this._fullReader;
      return (!i || !r) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        var h;
        (h = e.onProgress) == null || h.call(e, { loaded: l.loaded, total: l.total });
      }), { isStreamingSupported: i, isRangeSupported: r, contentLength: a };
    }), t.on("GetRangeReader", (s, i) => {
      rt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const r = this._networkStream.getRangeReader(s.begin, s.end);
      if (!r) {
        i.close();
        return;
      }
      i.onPull = () => {
        r.read().then(function({ value: a, done: o }) {
          if (o) {
            i.close();
            return;
          }
          rt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          i.error(a);
        });
      }, i.onCancel = (a) => {
        r.cancel(a), i.ready.catch((o) => {
          if (!this.destroyed) throw o;
        });
      };
    }), t.on("GetDoc", ({ pdfInfo: s }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new ew(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(je(s));
    }), t.on("PasswordRequest", (s) => {
      f(this, ln, Promise.withResolvers());
      try {
        if (!e.onPassword) throw je(s);
        const i = (r) => {
          r instanceof Error ? n(this, ln).reject(r) : n(this, ln).resolve({ password: r });
        };
        e.onPassword(i, s.code);
      } catch (i) {
        n(this, ln).reject(i);
      }
      return n(this, ln).promise;
    }), t.on("DataLoaded", (s) => {
      var i;
      (i = e.onProgress) == null || i.call(e, { loaded: s.length, total: s.length }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed) return;
      n(this, vi).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, r]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(s)) return null;
      switch (i) {
        case "Font":
          if ("error" in r) {
            const u = r.error;
            Y(`Error during font loading: ${u}`), this.commonObjs.resolve(s, u);
            break;
          }
          const o = new Hf(r), l = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (u, p) => globalThis.FontInspector.fontAdded(u, p) : null, h = new oA(o, l, r.extra, r.charProcOperatorList);
          this.fontLoader.bind(h).catch(() => t.sendWithPromise("FontFallback", { id: s })).finally(() => {
            !h.fontExtraProperties && h.data && h.clearData(), this.commonObjs.resolve(s, h);
          });
          break;
        case "CopyLocalImage":
          const { imageRef: c } = r;
          rt(c, "The imageRef must be defined.");
          for (const u of n(this, vi).values()) for (const [, p] of u.objs) if ((p == null ? void 0 : p.ref) === c) return p.dataLen ? (this.commonObjs.resolve(s, structuredClone(p)), p.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([s, i, r, a]) => {
      var l;
      if (this.destroyed) return;
      const o = n(this, vi).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (r) {
          case "Image":
          case "Pattern":
            o.objs.resolve(s, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, { loaded: s.loaded, total: s.total });
    }), t.on("FetchBinaryData", async (s) => {
      if (this.destroyed) throw new Error("Worker was destroyed.");
      const i = this[s.type];
      if (!i) throw new Error(`${s.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return i.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var s;
    this.annotationStorage.size <= 0 && Y("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const { map: t, transfer: e } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: t, filename: ((s = this._fullReader) == null ? void 0 : s.filename) ?? null }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = n(this, ll).get(e);
    if (s) return s;
    const i = this.messageHandler.sendWithPromise("GetPage", { pageIndex: e }).then((r) => {
      if (this.destroyed) throw new Error("Transport destroyed");
      r.refStr && n(this, hl).set(r.refStr, t);
      const a = new sw(e, r, this, this._params.pdfBug);
      return n(this, vi).set(e, a), a;
    });
    return n(this, ll).set(e, i), i;
  }
  getPageIndex(t) {
    return kf(t) ? this.messageHandler.sendWithPromise("GetPageIndex", { num: t.num, gen: t.gen }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: t, intent: e });
  }
  getFieldObjects() {
    return b(this, Aa, fh).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return b(this, Aa, fh).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: t });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAnnotationsByType(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", { types: t, pageIndexesToSkip: e });
  }
  getDocJSActions() {
    return b(this, Aa, fh).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: t });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: t });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return b(this, Aa, fh).call(this, "GetOptionalContentConfig").then((e) => new FA(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = n(this, on).get(t);
    if (e) return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var r, a;
      return { info: i[0], metadata: i[1] ? new LA(i[1]) : null, contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null, contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null };
    });
    return n(this, on).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = false) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of n(this, vi).values()) if (!e.cleanup()) throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, on).clear(), this.filterFactory.destroy(true), Ch.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!kf(t)) return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, hl).get(e) ?? null;
  }
}
on = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap(), ll = /* @__PURE__ */ new WeakMap(), hl = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakSet(), fh = function(t, e = null) {
  const s = n(this, on).get(t);
  if (s) return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return n(this, on).set(t, i), i;
};
var er;
class nw {
  constructor(t) {
    g(this, er, null);
    R(this, "onContinue", null);
    R(this, "onError", null);
    f(this, er, t);
  }
  get promise() {
    return n(this, er).capability.promise;
  }
  cancel(t = 0) {
    n(this, er).cancel(null, t);
  }
  get separateAnnots() {
    const { separateAnnots: t } = n(this, er).operatorList;
    if (!t) return false;
    const { annotationCanvasMap: e } = n(this, er);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
er = /* @__PURE__ */ new WeakMap();
var sr, wa;
const Ir = class Ir2 {
  constructor({ callback: t, params: e, objs: s, commonObjs: i, annotationCanvasMap: r, operatorList: a, pageIndex: o, canvasFactory: l, filterFactory: h, useRequestAnimationFrame: c = false, pdfBug: u = false, pageColors: p = null, enableHWA: m = false, operationsFilter: A = null }) {
    g(this, sr, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = p, this.running = false, this.graphicsReadyCallback = null, this.graphicsReady = false, this._useRequestAnimationFrame = c === true && typeof window < "u", this.cancelled = false, this.capability = Promise.withResolvers(), this.task = new nw(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = m, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = A;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({ transparency: t = false, optionalContentConfig: e }) {
    var l, h;
    if (this.cancelled) return;
    if (this._canvas) {
      if (n(Ir2, wa).has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      n(Ir2, wa).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const { viewport: s, transform: i, background: r, dependencyTracker: a } = this.params, o = this._canvasContext || this._canvas.getContext("2d", { alpha: false, willReadFrequently: !this._enableHWA });
    this.gfx = new po(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: e }, this.annotationCanvasMap, this.pageColors, a), this.gfx.beginDrawing({ transform: i, viewport: s, transparency: t, background: r }), this.operatorListIdx = 0, this.graphicsReady = true, (h = this.graphicsReadyCallback) == null || h.call(this);
  }
  cancel(t = null, e = 0) {
    var s, i, r;
    this.running = false, this.cancelled = true, (s = this.gfx) == null || s.endDrawing(), n(this, sr) && (window.cancelAnimationFrame(n(this, sr)), f(this, sr, null)), n(Ir2, wa).delete(this._canvas), t || (t = new Hu(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (i = this.task).onError) == null || r.call(i, t);
  }
  operatorListChanged() {
    var t, e;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.gfx.dependencyTracker) == null || t.growOperationsCount(this.operatorList.fnArray.length), (e = this.stepper) == null || e.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = true, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? f(this, sr, window.requestAnimationFrame(() => {
      f(this, sr, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = false, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(Ir2, wa).delete(this._canvas), this.callback())));
  }
};
sr = /* @__PURE__ */ new WeakMap(), wa = /* @__PURE__ */ new WeakMap(), g(Ir, wa, /* @__PURE__ */ new WeakSet());
let Vf = Ir;
const nb = "5.4.296", rb = "f56dc8601";
var rs, va, cl, Zt, Tc, dl, hn, Pc, ir, Ys, kc, yt, Wf, Xf, qf, Rr, ab, kn;
const $e = class $e2 {
  constructor({ editor: t = null, uiManager: e = null }) {
    g(this, yt);
    g(this, rs, null);
    g(this, va, null);
    g(this, cl);
    g(this, Zt, null);
    g(this, Tc, false);
    g(this, dl, false);
    g(this, hn, null);
    g(this, Pc);
    g(this, ir, null);
    g(this, Ys, null);
    var s, i;
    t ? (f(this, dl, false), f(this, hn, t)) : f(this, dl, true), f(this, Ys, (t == null ? void 0 : t._uiManager) || e), f(this, Pc, n(this, Ys)._eventBus), f(this, cl, ((s = t == null ? void 0 : t.color) == null ? void 0 : s.toUpperCase()) || ((i = n(this, Ys)) == null ? void 0 : i.highlightColors.values().next().value) || "#FFFF98"), n($e2, kc) || f($e2, kc, Object.freeze({ blue: "pdfjs-editor-colorpicker-blue", green: "pdfjs-editor-colorpicker-green", pink: "pdfjs-editor-colorpicker-pink", red: "pdfjs-editor-colorpicker-red", yellow: "pdfjs-editor-colorpicker-yellow" }));
  }
  static get _keyboardManager() {
    return Q(this, "_keyboardManager", new ud([[["Escape", "mac+Escape"], $e2.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], $e2.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], $e2.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], $e2.prototype._moveToPrevious], [["Home", "mac+Home"], $e2.prototype._moveToBeginning], [["End", "mac+End"], $e2.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = f(this, rs, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", n(this, hn) && (t.ariaControls = `${n(this, hn).id}_colorpicker_dropdown`);
    const e = n(this, Ys)._signal;
    t.addEventListener("click", b(this, yt, Rr).bind(this), { signal: e }), t.addEventListener("keydown", b(this, yt, qf).bind(this), { signal: e });
    const s = f(this, va, document.createElement("span"));
    return s.className = "swatch", s.ariaHidden = "true", s.style.backgroundColor = n(this, cl), t.append(s), t;
  }
  renderMainDropdown() {
    const t = f(this, Zt, b(this, yt, Wf).call(this));
    return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, rs)) {
      b(this, yt, Rr).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && b(this, yt, Xf).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!n(this, yt, kn)) {
      b(this, yt, Rr).call(this, t);
      return;
    }
    if (t.target === n(this, rs)) {
      (e = n(this, Zt).firstChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = n(this, Zt)) == null ? void 0 : e.firstChild) || t.target === n(this, rs)) {
      n(this, yt, kn) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, yt, kn) || b(this, yt, Rr).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!n(this, yt, kn)) {
      b(this, yt, Rr).call(this, t);
      return;
    }
    (e = n(this, Zt).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!n(this, yt, kn)) {
      b(this, yt, Rr).call(this, t);
      return;
    }
    (e = n(this, Zt).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = n(this, Zt)) == null || t.classList.add("hidden"), n(this, rs).ariaExpanded = "false", (e = n(this, ir)) == null || e.abort(), f(this, ir, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!n(this, dl)) {
      if (!n(this, yt, kn)) {
        (t = n(this, hn)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, rs).focus({ preventScroll: true, focusVisible: n(this, Tc) });
    }
  }
  updateColor(t) {
    if (n(this, va) && (n(this, va).style.backgroundColor = t), !n(this, Zt)) return;
    const e = n(this, Ys).highlightColors.values();
    for (const s of n(this, Zt).children) s.ariaSelected = e.next().value === t.toUpperCase();
  }
  destroy() {
    var t, e;
    (t = n(this, rs)) == null || t.remove(), f(this, rs, null), f(this, va, null), (e = n(this, Zt)) == null || e.remove(), f(this, Zt, null);
  }
};
rs = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakMap(), cl = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), Tc = /* @__PURE__ */ new WeakMap(), dl = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), Pc = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), kc = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakSet(), Wf = function() {
  const t = document.createElement("div"), e = n(this, Ys)._signal;
  t.addEventListener("contextmenu", vs, { signal: e }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), n(this, hn) && (t.id = `${n(this, hn).id}_colorpicker_dropdown`);
  for (const [s, i] of n(this, Ys).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", i), r.title = s, r.setAttribute("data-l10n-id", n($e, kc)[s]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = i, r.ariaSelected = i === n(this, cl), r.addEventListener("click", b(this, yt, Xf).bind(this, i), { signal: e }), t.append(r);
  }
  return t.addEventListener("keydown", b(this, yt, qf).bind(this), { signal: e }), t;
}, Xf = function(t, e) {
  e.stopPropagation(), n(this, Pc).dispatch("switchannotationeditorparams", { source: this, type: it.HIGHLIGHT_COLOR, value: t }), this.updateColor(t);
}, qf = function(t) {
  $e._keyboardManager.exec(this, t);
}, Rr = function(t) {
  if (n(this, yt, kn)) {
    this.hideDropdown();
    return;
  }
  if (f(this, Tc, t.detail === 0), n(this, ir) || (f(this, ir, new AbortController()), window.addEventListener("pointerdown", b(this, yt, ab).bind(this), { signal: n(this, Ys).combinedSignal(n(this, ir)) })), n(this, rs).ariaExpanded = "true", n(this, Zt)) {
    n(this, Zt).classList.remove("hidden");
    return;
  }
  const e = f(this, Zt, b(this, yt, Wf).call(this));
  n(this, rs).append(e);
}, ab = function(t) {
  var e;
  (e = n(this, Zt)) != null && e.contains(t.target) || this.hideDropdown();
}, kn = function() {
  return n(this, Zt) && !n(this, Zt).classList.contains("hidden");
}, g($e, kc, null);
let xh = $e;
var Ei, Rc, ul, Mc;
const Fr = class Fr2 {
  constructor(t) {
    g(this, Ei, null);
    g(this, Rc, null);
    g(this, ul, null);
    f(this, Rc, t), f(this, ul, t._uiManager), n(Fr2, Mc) || f(Fr2, Mc, Object.freeze({ freetext: "pdfjs-editor-color-picker-free-text-input", ink: "pdfjs-editor-color-picker-ink-input" }));
  }
  renderButton() {
    if (n(this, Ei)) return n(this, Ei);
    const { editorType: t, colorType: e, colorValue: s } = n(this, Rc), i = f(this, Ei, document.createElement("input"));
    return i.type = "color", i.value = s || "#000000", i.className = "basicColorPicker", i.tabIndex = 0, i.setAttribute("data-l10n-id", n(Fr2, Mc)[t]), i.addEventListener("input", () => {
      n(this, ul).updateParams(e, i.value);
    }, { signal: n(this, ul)._signal }), i;
  }
  update(t) {
    n(this, Ei) && (n(this, Ei).value = t);
  }
  destroy() {
    var t;
    (t = n(this, Ei)) == null || t.remove(), f(this, Ei, null);
  }
  hideDropdown() {
  }
};
Ei = /* @__PURE__ */ new WeakMap(), Rc = /* @__PURE__ */ new WeakMap(), ul = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap(), g(Fr, Mc, null);
let uu = Fr;
function Mg(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function Kl(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class Dg {
  static CMYK_G([t, e, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = Kl(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Mg(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Kl);
  }
  static RGB_HTML(t) {
    return `#${t.map(Mg).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, s, i]) {
    return [Kl(1 - Math.min(1, t + i)), Kl(1 - Math.min(1, s + i)), Kl(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t, r = 1 - e, a = 1 - s, o = Math.min(i, r, a);
    return ["CMYK", i, r, a, o];
  }
}
class rw {
  create(t, e, s = false) {
    if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string") throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    _t("Abstract method `_createSVG` called.");
  }
}
class Th extends rw {
  _createSVG(t) {
    return document.createElementNS(Fi, t);
  }
}
const aw = 9, qa = /* @__PURE__ */ new WeakSet(), ow = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Lg {
  static create(t) {
    switch (t.data.annotationType) {
      case zt.LINK:
        return new Wp(t);
      case zt.TEXT:
        return new hw(t);
      case zt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new cw(t);
          case "Btn":
            return t.data.radioButton ? new hb(t) : t.data.checkBox ? new uw(t) : new fw(t);
          case "Ch":
            return new pw(t);
          case "Sig":
            return new dw(t);
        }
        return new Ja(t);
      case zt.POPUP:
        return new Kf(t);
      case zt.FREETEXT:
        return new pb(t);
      case zt.LINE:
        return new mw(t);
      case zt.SQUARE:
        return new bw(t);
      case zt.CIRCLE:
        return new yw(t);
      case zt.POLYLINE:
        return new gb(t);
      case zt.CARET:
        return new ww(t);
      case zt.INK:
        return new Xp(t);
      case zt.POLYGON:
        return new Aw(t);
      case zt.HIGHLIGHT:
        return new mb(t);
      case zt.UNDERLINE:
        return new vw(t);
      case zt.SQUIGGLY:
        return new Ew(t);
      case zt.STRIKEOUT:
        return new Sw(t);
      case zt.STAMP:
        return new bb(t);
      case zt.FILEATTACHMENT:
        return new _w(t);
      default:
        return new Ot(t);
    }
  }
}
var Ea, fl, Ds, Dc, Yf;
const eg = class eg2 {
  constructor(t, { isRenderable: e = false, ignoreBorder: s = false, createQuadrilaterals: i = false } = {}) {
    g(this, Dc);
    g(this, Ea, null);
    g(this, fl, false);
    g(this, Ds, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({ contentsObj: t, richText: e }) {
    return !!(t != null && t.str || e != null && e.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return eg2._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }
  get commentData() {
    var s;
    const { data: t } = this, e = (s = this.annotationStorage) == null ? void 0 : s.getEditor(t.id);
    return e ? e.getData() : t;
  }
  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }
  get commentButtonPosition() {
    var o;
    const t = (o = this.annotationStorage) == null ? void 0 : o.getEditor(this.data.id);
    if (t) return t.commentButtonPositionInPage;
    const { quadPoints: e, inkLists: s, rect: i } = this.data;
    let r = -1 / 0, a = -1 / 0;
    if ((e == null ? void 0 : e.length) >= 8) {
      for (let l = 0; l < e.length; l += 8) e[l + 1] > a ? (a = e[l + 1], r = e[l + 2]) : e[l + 1] === a && (r = Math.max(r, e[l + 2]));
      return [r, a];
    }
    if ((s == null ? void 0 : s.length) >= 1) {
      for (const l of s) for (let h = 0, c = l.length; h < c; h += 2) l[h + 1] > a ? (a = l[h + 1], r = l[h]) : l[h + 1] === a && (r = Math.max(r, l[h]));
      if (r !== 1 / 0) return [r, a];
    }
    return i ? [i[2], i[3]] : null;
  }
  _normalizePoint(t) {
    const { page: { view: e }, viewport: { rawDims: { pageWidth: s, pageHeight: i, pageX: r, pageY: a } } } = this.parent;
    return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - r) / s, t[1] = 100 * (t[1] - a) / i, t;
  }
  get commentText() {
    var e, s, i;
    const { data: t } = this;
    return ((s = (e = this.annotationStorage.getRawValue(`${wh}${t.id}`)) == null ? void 0 : e.popup) == null ? void 0 : s.contents) || ((i = t.contentsObj) == null ? void 0 : i.str) || "";
  }
  set commentText(t) {
    const { data: e } = this, s = { deleted: !t, contents: t || "" };
    this.annotationStorage.updateEditor(e.id, { popup: s }) || this.annotationStorage.setValue(`${wh}${e.id}`, { id: e.id, annotationType: e.annotationType, pageIndex: this.parent.page._pageIndex, popup: s, popupRef: e.popupRef, modificationDate: /* @__PURE__ */ new Date() }), t || this.removePopup();
  }
  removePopup() {
    var t, e;
    (e = ((t = n(this, Ds)) == null ? void 0 : t.popup) || this.popup) == null || e.remove(), f(this, Ds, this.popup = null);
  }
  updateEdited(t) {
    var r;
    if (!this.container) return;
    t.rect && (n(this, Ea) || f(this, Ea, { rect: this.data.rect.slice(0) }));
    const { rect: e, popup: s } = t;
    e && b(this, Dc, Yf).call(this, e);
    let i = ((r = n(this, Ds)) == null ? void 0 : r.popup) || this.popup;
    !i && (s != null && s.text) && (this._createPopup(s), i = n(this, Ds).popup), i && (i.updateEdited(t), s != null && s.deleted && (i.remove(), f(this, Ds, null), this.popup = null));
  }
  resetEdited() {
    var t;
    n(this, Ea) && (b(this, Dc, Yf).call(this, n(this, Ea).rect), (t = n(this, Ds)) == null || t.popup.resetEdited(), f(this, Ea, null));
  }
  _createContainer(t) {
    const { data: e, parent: { page: s, viewport: i } } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), !(this instanceof Ja) && !(this instanceof Wp) && (r.tabIndex = 0);
    const { style: a } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof Kf) {
      const { rotation: y } = e;
      return !e.hasOwnCanvas && y !== 0 && this.setRotation(y, r), r;
    }
    const { width: o, height: l } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const y = e.borderStyle.horizontalCornerRadius, v = e.borderStyle.verticalCornerRadius;
      if (y > 0 || v > 0) {
        const S = `calc(${y}px * var(--total-scale-factor)) / calc(${v}px * var(--total-scale-factor))`;
        a.borderRadius = S;
      } else if (this instanceof hb) {
        const S = `calc(${o}px * var(--total-scale-factor)) / calc(${l}px * var(--total-scale-factor))`;
        a.borderRadius = S;
      }
      switch (e.borderStyle.style) {
        case to.SOLID:
          a.borderStyle = "solid";
          break;
        case to.DASHED:
          a.borderStyle = "dashed";
          break;
        case to.BEVELED:
          Y("Unimplemented border style: beveled");
          break;
        case to.INSET:
          Y("Unimplemented border style: inset");
          break;
        case to.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const w = e.borderColor || null;
      w ? (f(this, fl, true), a.borderColor = $.makeHexColor(w[0] | 0, w[1] | 0, w[2] | 0)) : a.borderWidth = 0;
    }
    const h = $.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), { pageWidth: c, pageHeight: u, pageX: p, pageY: m } = i.rawDims;
    a.left = `${100 * (h[0] - p) / c}%`, a.top = `${100 * (h[1] - m) / u}%`;
    const { rotation: A } = e;
    return e.hasOwnCanvas || A === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * l / u}%`) : this.setRotation(A, r), r;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect) return;
    const { pageWidth: s, pageHeight: i } = this.parent.viewport.rawDims;
    let { width: r, height: a } = this;
    t % 180 !== 0 && ([r, a] = [a, r]), e.style.width = `${100 * r / s}%`, e.style.height = `${100 * a / i}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const r = i.detail[e], a = r[0], o = r.slice(1);
      i.target.style[s] = Dg[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, { [s]: Dg[`${a}_rgb`](o) });
    };
    return Q(this, "_commonActions", { display: (e) => {
      const { display: s } = e.detail, i = s % 2 === 1;
      this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { noView: i, noPrint: s === 1 || s === 2 });
    }, print: (e) => {
      this.annotationStorage.setValue(this.data.id, { noPrint: !e.detail.print });
    }, hidden: (e) => {
      const { hidden: s } = e.detail;
      this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { noPrint: s, noView: s });
    }, focus: (e) => {
      setTimeout(() => e.target.focus({ preventScroll: false }), 0);
    }, userName: (e) => {
      e.target.title = e.detail.userName;
    }, readonly: (e) => {
      e.target.disabled = e.detail.readonly;
    }, required: (e) => {
      this._setRequired(e.target, e.detail.required);
    }, bgColor: (e) => {
      t("bgColor", "backgroundColor", e);
    }, fillColor: (e) => {
      t("fillColor", "backgroundColor", e);
    }, fgColor: (e) => {
      t("fgColor", "color", e);
    }, textColor: (e) => {
      t("textColor", "color", e);
    }, borderColor: (e) => {
      t("borderColor", "borderColor", e);
    }, strokeColor: (e) => {
      t("strokeColor", "borderColor", e);
    }, rotation: (e) => {
      const s = e.detail.rotation;
      this.setRotation(s), this.annotationStorage.setValue(this.data.id, { rotation: s });
    } });
  }
  _dispatchEventFromSandbox(t, e) {
    const s = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const r = t[i] || s[i];
      r == null || r(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting) return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e) return;
    const s = this._commonActions;
    for (const [i, r] of Object.entries(e)) {
      const a = s[i];
      if (a) {
        const o = { detail: { [i]: r }, target: t };
        a(o), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container) return;
    const { quadPoints: t } = this.data;
    if (!t) return;
    const [e, s, i, r] = this.data.rect.map((y) => Math.fround(y));
    if (t.length === 8) {
      const [y, v, w, S] = t.subarray(2, 6);
      if (i === y && r === v && e === w && s === S) return;
    }
    const { style: a } = this.container;
    let o;
    if (n(this, fl)) {
      const { borderColor: y, borderWidth: v } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${y}" stroke-width="${v}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = r - s, { svgFactory: c } = this, u = c.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0), u.role = "none";
    const p = c.createElement("defs");
    u.append(p);
    const m = c.createElement("clipPath"), A = `clippath_${this.data.id}`;
    m.setAttribute("id", A), m.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(m);
    for (let y = 2, v = t.length; y < v; y += 8) {
      const w = t[y], S = t[y + 1], E = t[y + 2], _ = t[y + 3], C = c.createElement("rect"), x = (E - e) / l, T = (r - S) / h, P = (w - E) / l, k = (S - _) / h;
      C.setAttribute("x", x), C.setAttribute("y", T), C.setAttribute("width", P), C.setAttribute("height", k), m.append(C), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${x}" y="${T}" width="${P}" height="${k}"/>`);
    }
    n(this, fl) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${A})`;
  }
  _createPopup(t = null) {
    const { data: e } = this;
    let s, i;
    t ? (s = { str: t.text }, i = t.date) : (s = e.contentsObj, i = e.modificationDate);
    const r = f(this, Ds, new Kf({ data: { color: e.color, titleObj: e.titleObj, modificationDate: i, contentsObj: s, richText: e.richText, parentRect: e.rect, borderStyle: 0, id: `popup_${e.id}`, rotation: e.rotation, noRotate: true }, linkService: this.linkService, parent: this.parent, elements: [this] }));
    this.parent._commentManager || this.parent.div.append(r.render());
  }
  get hasPopupElement() {
    return !!(n(this, Ds) || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return n(this, Ds);
  }
  render() {
    _t("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i) for (const { page: r, id: a, exportValues: o } of i) {
        if (r === -1 || a === e) continue;
        const l = typeof o == "string" ? o : null, h = document.querySelector(`[data-element-id="${a}"]`);
        if (h && !qa.has(h)) {
          Y(`_getElementsByName - element not allowed: ${a}`);
          continue;
        }
        s.push({ id: a, exportValue: l, domElement: h });
      }
      return s;
    }
    for (const i of document.getElementsByName(t)) {
      const { exportValue: r } = i, a = i.getAttribute("data-element-id");
      a !== e && qa.has(i) && s.push({ id: a, exportValue: r, domElement: i });
    }
    return s;
  }
  show() {
    var t;
    this.container && (this.container.hidden = false), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = true), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t)) for (const e of t) e.classList.add("highlightArea");
    else t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable) return;
    const { annotationEditorType: t, data: { id: e } } = this;
    this.container.addEventListener("dblclick", () => {
      var s;
      (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", { source: this, mode: t, editId: e, mustEnterInEditMode: true });
    });
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
};
Ea = /* @__PURE__ */ new WeakMap(), fl = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), Dc = /* @__PURE__ */ new WeakSet(), Yf = function(t) {
  const { container: { style: e }, data: { rect: s, rotation: i }, parent: { viewport: { rawDims: { pageWidth: r, pageHeight: a, pageX: o, pageY: l } } } } = this;
  s == null || s.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + l) / a}%`, i === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(i);
};
let Ot = eg;
class lw extends Ot {
  constructor(t) {
    super(t, { isRenderable: true, ignoreBorder: true }), this.editor = t.editor;
  }
  render() {
    return this.container.className = "editorAnnotation", this.container;
  }
  createOrUpdatePopup() {
    const { editor: t } = this;
    t.hasComment && (this._createPopup(t.comment), this.extraPopupElement.popup.renderCommentButton());
  }
  get hasCommentButton() {
    return this.enableComment && this.editor.hasComment;
  }
  get commentButtonPosition() {
    return this.editor.commentButtonPositionInPage;
  }
  get commentText() {
    return this.editor.comment.text;
  }
  set commentText(t) {
    this.editor.comment = t, t || this.removePopup();
  }
  get commentData() {
    return this.editor.getData();
  }
  remove() {
    this.container.remove(), this.container = null, this.removePopup();
  }
}
var As, Mr, ob, lb;
class Wp extends Ot {
  constructor(e, s = null) {
    super(e, { isRenderable: true, ignoreBorder: !!(s != null && s.ignoreBorder), createQuadrilaterals: true });
    g(this, As);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const { data: e, linkService: s } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let r = false;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), r = true) : e.action ? (this._bindNamedAction(i, e.action, e.overlaidText), r = true) : e.attachment ? (b(this, As, ob).call(this, i, e.attachment, e.overlaidText, e.attachmentDest), r = true) : e.setOCGState ? (b(this, As, lb).call(this, i, e.setOCGState, e.overlaidText), r = true) : e.dest ? (this._bindLink(i, e.dest, e.overlaidText), r = true) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), r = true), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), r = true) : this.isTooltipOnly && !r && (this._bindLink(i, ""), r = true)), this.container.classList.add("linkAnnotation"), r && this.container.append(i), this.container;
  }
  _bindLink(e, s, i = "") {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), false), (s || s === "") && b(this, As, Mr).call(this), i && (e.title = i);
  }
  _bindNamedAction(e, s, i = "") {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), false), i && (e.title = i), b(this, As, Mr).call(this);
  }
  _bindJSAction(e, s) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const r of Object.keys(s.actions)) {
      const a = i.get(r);
      a && (e[a] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", { source: this, detail: { id: s.id, name: r } }), false;
      });
    }
    s.overlaidText && (e.title = s.overlaidText), e.onclick || (e.onclick = () => false), b(this, As, Mr).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), b(this, As, Mr).call(this), !this._fieldObjects) {
      Y('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => false);
      return;
    }
    e.onclick = () => {
      var u;
      i == null || i();
      const { fields: r, refs: a, include: o } = s, l = [];
      if (r.length !== 0 || a.length !== 0) {
        const p = new Set(a);
        for (const m of r) {
          const A = this._fieldObjects[m] || [];
          for (const { id: y } of A) p.add(y);
        }
        for (const m of Object.values(this._fieldObjects)) for (const A of m) p.has(A.id) === o && l.push(A);
      } else for (const p of Object.values(this._fieldObjects)) l.push(...p);
      const h = this.annotationStorage, c = [];
      for (const p of l) {
        const { id: m } = p;
        switch (c.push(m), p.type) {
          case "text": {
            const y = p.defaultValue || "";
            h.setValue(m, { value: y });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const y = p.defaultValue === p.exportValues;
            h.setValue(m, { value: y });
            break;
          }
          case "combobox":
          case "listbox": {
            const y = p.defaultValue || "";
            h.setValue(m, { value: y });
            break;
          }
          default:
            continue;
        }
        const A = document.querySelector(`[data-element-id="${m}"]`);
        if (A) {
          if (!qa.has(A)) {
            Y(`_bindResetFormAction - element not allowed: ${m}`);
            continue;
          }
        } else continue;
        A.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: c, name: "ResetForm" } })), false;
    };
  }
}
As = /* @__PURE__ */ new WeakSet(), Mr = function() {
  this.container.setAttribute("data-internal-link", "");
}, ob = function(e, s, i = "", r = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description ? e.title = s.description : i && (e.title = i), e.onclick = () => {
    var a;
    return (a = this.downloadManager) == null || a.openOrDownloadData(s.content, s.filename, r), false;
  }, b(this, As, Mr).call(this);
}, lb = function(e, s, i = "") {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), false), i && (e.title = i), b(this, As, Mr).call(this);
};
class hw extends Ot {
  constructor(t) {
    super(t, { isRenderable: true });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({ type: this.data.name })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class Ja extends Ot {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = true), t.hidden = false);
  }
  _getKeyModifier(t) {
    return ce.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, i, r) {
    s.includes("mouse") ? t.addEventListener(s, (a) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: i, value: r(a), shift: a.shiftKey, modifier: this._getKeyModifier(a) } });
    }) : t.addEventListener(s, (a) => {
      var o;
      if (s === "blur") {
        if (!e.focused || !a.relatedTarget) return;
        e.focused = false;
      } else if (s === "focus") {
        if (e.focused) return;
        e.focused = true;
      }
      r && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: i, value: r(a) } }));
    });
  }
  _setEventListeners(t, e, s, i) {
    var r, a, o;
    for (const [l, h] of s) (h === "Action" || (r = this.data.actions) != null && r[h]) && ((h === "Focus" || h === "Blur") && (e || (e = { focused: false })), this._setEventListener(t, e, l, h, i), h === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : h === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : $.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], { fontColor: s } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || aw, r = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(h / (Ku * i)) || 1, u = h / c;
      a = Math.min(i, l(u / Ku));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / Ku));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = $.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", true) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class cw extends Ja {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, { isRenderable: e });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id)) a.domElement && (a.domElement[e] = s), r.setValue(a.id, { [i]: s });
  }
  render() {
    var i, r;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const a = t.getValue(e, { value: this.data.fieldValue });
      let o = a.value || "";
      const l = t.getValue(e, { charLimit: this.data.maxLen }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let h = a.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      h && this.data.comb && (h = h.replaceAll(/\s+/g, ""));
      const c = { userValue: o, formattedValue: h, lastCommittedValue: null, commitKey: 1, focused: false };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = this.data.password ? "password" : "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = true), qa.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = 0;
      const { datetimeFormat: u, datetimeType: p, timeStep: m } = this.data, A = !!p && this.enableScripting;
      u && (s.title = u), this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (v) => {
        t.setValue(e, { value: v.target.value }), this.setPropertyOnSiblings(s, "value", v.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (v) => {
        const w = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = w, c.formattedValue = null;
      });
      let y = (v) => {
        const { formattedValue: w } = c;
        w != null && (v.target.value = w), v.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (w) => {
          var E;
          if (c.focused) return;
          const { target: S } = w;
          if (A && (S.type = p, m && (S.step = m)), c.userValue) {
            const _ = c.userValue;
            if (A) if (p === "time") {
              const C = new Date(_), x = [C.getHours(), C.getMinutes(), C.getSeconds()];
              S.value = x.map((T) => T.toString().padStart(2, "0")).join(":");
            } else S.value = new Date(_ - ow).toISOString().split(p === "date" ? "T" : ".", 1)[0];
            else S.value = _;
          }
          c.lastCommittedValue = S.value, c.commitKey = 1, (E = this.data.actions) != null && E.Focus || (c.focused = true);
        }), s.addEventListener("updatefromsandbox", (w) => {
          this.showElementAndHideCanvas(w.target);
          const S = { value(E) {
            c.userValue = E.detail.value ?? "", A || t.setValue(e, { value: c.userValue.toString() }), E.target.value = c.userValue;
          }, formattedValue(E) {
            const { formattedValue: _ } = E.detail;
            c.formattedValue = _, _ != null && E.target !== document.activeElement && (E.target.value = _);
            const C = { formattedValue: _ };
            A && (C.value = _), t.setValue(e, C);
          }, selRange(E) {
            E.target.setSelectionRange(...E.detail.selRange);
          }, charLimit: (E) => {
            var T;
            const { charLimit: _ } = E.detail, { target: C } = E;
            if (_ === 0) {
              C.removeAttribute("maxLength");
              return;
            }
            C.setAttribute("maxLength", _);
            let x = c.userValue;
            !x || x.length <= _ || (x = x.slice(0, _), C.value = c.userValue = x, t.setValue(e, { value: x }), (T = this.linkService.eventBus) == null || T.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: x, willCommit: true, commitKey: 1, selStart: C.selectionStart, selEnd: C.selectionEnd } }));
          } };
          this._dispatchEventFromSandbox(S, w);
        }), s.addEventListener("keydown", (w) => {
          var _;
          c.commitKey = 1;
          let S = -1;
          if (w.key === "Escape" ? S = 0 : w.key === "Enter" && !this.data.multiLine ? S = 2 : w.key === "Tab" && (c.commitKey = 3), S === -1) return;
          const { value: E } = w.target;
          c.lastCommittedValue !== E && (c.lastCommittedValue = E, c.userValue = E, (_ = this.linkService.eventBus) == null || _.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: E, willCommit: true, commitKey: S, selStart: w.target.selectionStart, selEnd: w.target.selectionEnd } }));
        });
        const v = y;
        y = null, s.addEventListener("blur", (w) => {
          var _, C;
          if (!c.focused || !w.relatedTarget) return;
          (_ = this.data.actions) != null && _.Blur || (c.focused = false);
          const { target: S } = w;
          let { value: E } = S;
          if (A) {
            if (E && p === "time") {
              const x = E.split(":").map((T) => parseInt(T, 10));
              E = new Date(2e3, 0, 1, x[0], x[1], x[2] || 0).valueOf(), S.step = "";
            } else E.includes("T") || (E = `${E}T00:00`), E = new Date(E).valueOf();
            S.type = "text";
          }
          c.userValue = E, c.lastCommittedValue !== E && ((C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: E, willCommit: true, commitKey: c.commitKey, selStart: w.target.selectionStart, selEnd: w.target.selectionEnd } })), v(w);
        }), (r = this.data.actions) != null && r.Keystroke && s.addEventListener("beforeinput", (w) => {
          var k;
          c.lastCommittedValue = null;
          const { data: S, target: E } = w, { value: _, selectionStart: C, selectionEnd: x } = E;
          let T = C, P = x;
          switch (w.inputType) {
            case "deleteWordBackward": {
              const D = _.substring(0, C).match(/\w*[^\w]*$/);
              D && (T -= D[0].length);
              break;
            }
            case "deleteWordForward": {
              const D = _.substring(C).match(/^[^\w]*\w*/);
              D && (P += D[0].length);
              break;
            }
            case "deleteContentBackward":
              C === x && (T -= 1);
              break;
            case "deleteContentForward":
              C === x && (P += 1);
              break;
          }
          w.preventDefault(), (k = this.linkService.eventBus) == null || k.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: _, change: S || "", willCommit: false, selStart: T, selEnd: P } });
        }), this._setEventListeners(s, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (w) => w.target.value);
      }
      if (y && s.addEventListener("blur", y), this.data.comb) {
        const w = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${w}px * var(--total-scale-factor) - 1ch)`;
      }
    } else s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = true);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class dw extends Ja {
  constructor(t) {
    super(t, { isRenderable: !!t.data.hasOwnCanvas });
  }
}
class uw extends Ja {
  constructor(t) {
    super(t, { isRenderable: t.renderForms });
  }
  render() {
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, { value: e.exportValue === e.fieldValue }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(s, { value: i })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const r = document.createElement("input");
    return qa.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, i && r.setAttribute("checked", true), r.setAttribute("exportValue", e.exportValue), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const { name: o, checked: l } = a.target;
      for (const h of this._getElementsByName(o, s)) {
        const c = l && h.exportValue === e.exportValue;
        h.domElement && (h.domElement.checked = c), t.setValue(h.id, { value: c });
      }
      t.setValue(s, { value: l });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", (a) => {
      const o = { value(l) {
        l.target.checked = l.detail.value !== "Off", t.setValue(s, { value: l.target.checked });
      } };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class hb extends Ja {
  constructor(t) {
    super(t, { isRenderable: t.renderForms });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, { value: e.fieldValue === e.buttonValue }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, { value: i })), i) for (const a of this._getElementsByName(e.fieldName, s)) t.setValue(a.id, { value: false });
    const r = document.createElement("input");
    if (qa.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, i && r.setAttribute("checked", true), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const { name: o, checked: l } = a.target;
      for (const h of this._getElementsByName(o, s)) t.setValue(h.id, { value: false });
      t.setValue(s, { value: l });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener("updatefromsandbox", (o) => {
        const l = { value: (h) => {
          const c = a === h.detail.value;
          for (const u of this._getElementsByName(h.target.name)) {
            const p = c && u.id === s;
            u.domElement && (u.domElement.checked = p), t.setValue(u.id, { value: p });
          }
        } };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class fw extends Wp {
  constructor(t) {
    super(t, { ignoreBorder: t.data.hasAppearance });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), t;
  }
}
class pw extends Ja {
  constructor(t) {
    super(t, { isRenderable: t.renderForms });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, { value: this.data.fieldValue }), i = document.createElement("select");
    qa.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = true)), i.addEventListener("resetform", (c) => {
      const u = this.data.defaultFieldValue;
      for (const p of i.options) p.selected = p.value === u;
    });
    for (const c of this.data.options) {
      const u = document.createElement("option");
      u.textContent = c.displayValue, u.value = c.exportValue, s.value.includes(c.exportValue) && (u.setAttribute("selected", true), r = false), i.append(u);
    }
    let a = null;
    if (r) {
      const c = document.createElement("option");
      c.value = " ", c.setAttribute("hidden", true), c.setAttribute("selected", true), i.prepend(c), a = () => {
        c.remove(), i.removeEventListener("input", a), a = null;
      }, i.addEventListener("input", a);
    }
    const o = (c) => {
      const u = c ? "value" : "textContent", { options: p, multiple: m } = i;
      return m ? Array.prototype.filter.call(p, (A) => A.selected).map((A) => A[u]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][u];
    };
    let l = o(false);
    const h = (c) => {
      const u = c.target.options;
      return Array.prototype.map.call(u, (p) => ({ displayValue: p.textContent, exportValue: p.value }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (c) => {
      const u = { value(p) {
        a == null || a();
        const m = p.detail.value, A = new Set(Array.isArray(m) ? m : [m]);
        for (const y of i.options) y.selected = A.has(y.value);
        t.setValue(e, { value: o(true) }), l = o(false);
      }, multipleSelection(p) {
        i.multiple = true;
      }, remove(p) {
        const m = i.options, A = p.detail.remove;
        m[A].selected = false, i.remove(A), m.length > 0 && Array.prototype.findIndex.call(m, (v) => v.selected) === -1 && (m[0].selected = true), t.setValue(e, { value: o(true), items: h(p) }), l = o(false);
      }, clear(p) {
        for (; i.length !== 0; ) i.remove(0);
        t.setValue(e, { value: null, items: [] }), l = o(false);
      }, insert(p) {
        const { index: m, displayValue: A, exportValue: y } = p.detail.insert, v = i.children[m], w = document.createElement("option");
        w.textContent = A, w.value = y, v ? v.before(w) : i.append(w), t.setValue(e, { value: o(true), items: h(p) }), l = o(false);
      }, items(p) {
        const { items: m } = p.detail;
        for (; i.length !== 0; ) i.remove(0);
        for (const A of m) {
          const { displayValue: y, exportValue: v } = A, w = document.createElement("option");
          w.textContent = y, w.value = v, i.append(w);
        }
        i.options.length > 0 && (i.options[0].selected = true), t.setValue(e, { value: o(true), items: h(p) }), l = o(false);
      }, indices(p) {
        const m = new Set(p.detail.indices);
        for (const A of p.target.options) A.selected = m.has(A.index);
        t.setValue(e, { value: o(true) }), l = o(false);
      }, editable(p) {
        p.target.disabled = !p.detail.editable;
      } };
      this._dispatchEventFromSandbox(u, c);
    }), i.addEventListener("input", (c) => {
      var m;
      const u = o(true), p = o(false);
      t.setValue(e, { value: u }), c.preventDefault(), (m = this.linkService.eventBus) == null || m.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e, name: "Keystroke", value: l, change: p, changeEx: u, willCommit: false, commitKey: 1, keyDown: false } });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (c) => c.target.value)) : i.addEventListener("input", function(c) {
      t.setValue(e, { value: o(true) });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
var Lc, Jf;
class Kf extends Ot {
  constructor(e) {
    const { data: s, elements: i, parent: r } = e, a = !!r._commentManager;
    super(e, { isRenderable: !a && Ot._hasPopupData(s) });
    g(this, Lc);
    if (this.elements = i, a && Ot._hasPopupData(s)) {
      const o = this.popup = b(this, Lc, Jf).call(this);
      for (const l of i) l.popup = o;
    } else this.popup = null;
  }
  render() {
    const { container: e } = this;
    e.classList.add("popupAnnotation"), e.role = "comment";
    const s = this.popup = b(this, Lc, Jf).call(this), i = [];
    for (const r of this.elements) r.popup = s, r.container.ariaHasPopup = "dialog", i.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute("aria-controls", i.map((r) => `${Bp}${r}`).join(",")), this.container;
  }
}
Lc = /* @__PURE__ */ new WeakSet(), Jf = function() {
  return new gw({ container: this.container, color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate || this.data.creationDate, contentsObj: this.data.contentsObj, richText: this.data.richText, rect: this.data.rect, parentRect: this.data.parentRect || null, parent: this.parent, elements: this.elements, open: this.data.open, commentManager: this.parent._commentManager });
};
var as, nr, Ru, Mu, pl, gl, Ut, Si, rr, Sa, ml, bl, _i, os, cn, dn, ne, un, ar, Ic, fn, yl, _a, or, Pe, lr, tt, jd, Qf, Zf, tp, $d, ep, cb, db, ub, fb, zd, Gd, sp;
class gw {
  constructor({ container: t, color: e, elements: s, titleObj: i, modificationDate: r, contentsObj: a, richText: o, parent: l, rect: h, parentRect: c, open: u, commentManager: p = null }) {
    g(this, tt);
    g(this, as, null);
    g(this, nr, b(this, tt, ub).bind(this));
    g(this, Ru, b(this, tt, sp).bind(this));
    g(this, Mu, b(this, tt, Gd).bind(this));
    g(this, pl, b(this, tt, zd).bind(this));
    g(this, gl, null);
    g(this, Ut, null);
    g(this, Si, null);
    g(this, rr, null);
    g(this, Sa, null);
    g(this, ml, null);
    g(this, bl, null);
    g(this, _i, false);
    g(this, os, null);
    g(this, cn, null);
    g(this, dn, null);
    g(this, ne, null);
    g(this, un, null);
    g(this, ar, null);
    g(this, Ic, null);
    g(this, fn, null);
    g(this, yl, null);
    g(this, _a, null);
    g(this, or, false);
    g(this, Pe, null);
    g(this, lr, null);
    f(this, Ut, t), f(this, yl, i), f(this, Si, a), f(this, fn, o), f(this, ml, l), f(this, gl, e), f(this, Ic, h), f(this, bl, c), f(this, Sa, s), f(this, as, p), f(this, Pe, s[0]), f(this, rr, Sh.toDateObject(r)), this.trigger = s.flatMap((m) => m.getElementsToTriggerPopup()), p ? this.renderCommentButton() : (b(this, tt, jd).call(this), n(this, Ut).hidden = true, u && b(this, tt, zd).call(this));
  }
  renderCommentButton() {
    if (n(this, ne) || (n(this, un) || b(this, tt, Qf).call(this), !n(this, un))) return;
    const { signal: t } = f(this, cn, new AbortController()), e = !!n(this, Pe).extraPopupElement, s = () => {
      n(this, as).toggleCommentPopup(this, true, void 0, !e);
    }, i = () => {
      n(this, as).toggleCommentPopup(this, false, true, !e);
    }, r = () => {
      n(this, as).toggleCommentPopup(this, false, false);
    };
    if (e) {
      f(this, ne, n(this, Pe).container);
      for (const a of this.trigger) a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.addEventListener("keydown", n(this, nr), { signal: t }), a.addEventListener("click", s, { signal: t }), a.addEventListener("pointerenter", i, { signal: t }), a.addEventListener("pointerleave", r, { signal: t }), a.classList.add("popupTriggerArea");
    } else {
      const a = f(this, ne, document.createElement("button"));
      a.className = "annotationCommentButton";
      const o = n(this, Pe).container;
      a.style.zIndex = o.style.zIndex + 1, a.tabIndex = 0, a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), b(this, tt, tp).call(this), b(this, tt, Zf).call(this), a.addEventListener("keydown", n(this, nr), { signal: t }), a.addEventListener("click", s, { signal: t }), a.addEventListener("pointerenter", i, { signal: t }), a.addEventListener("pointerleave", r, { signal: t }), o.after(a);
    }
  }
  get commentButtonColor() {
    const { color: t, opacity: e } = n(this, Pe).commentData;
    return t ? n(this, ml)._commentManager.makeCommentColor(t, e) : null;
  }
  focusCommentButton() {
    setTimeout(() => {
      var t;
      (t = n(this, ne)) == null || t.focus();
    }, 0);
  }
  getData() {
    const { richText: t, color: e, opacity: s, creationDate: i, modificationDate: r } = n(this, Pe).commentData;
    return { contentsObj: { str: this.comment }, richText: t, color: e, opacity: s, creationDate: i, modificationDate: r };
  }
  get elementBeforePopup() {
    return n(this, ne);
  }
  get comment() {
    return n(this, lr) || f(this, lr, n(this, Pe).commentText), n(this, lr);
  }
  set comment(t) {
    t !== this.comment && (n(this, Pe).commentText = f(this, lr, t));
  }
  get parentBoundingClientRect() {
    return n(this, Pe).layer.getBoundingClientRect();
  }
  setCommentButtonStates({ selected: t, hasPopup: e }) {
    n(this, ne) && (n(this, ne).classList.toggle("selected", t), n(this, ne).ariaExpanded = e);
  }
  setSelectedCommentButton(t) {
    n(this, ne).classList.toggle("selected", t);
  }
  get commentPopupPosition() {
    if (n(this, ar)) return n(this, ar);
    const { x: t, y: e, height: s } = n(this, ne).getBoundingClientRect(), { x: i, y: r, width: a, height: o } = n(this, Pe).layer.getBoundingClientRect();
    return [(t - i) / a, (e + s - r) / o];
  }
  set commentPopupPosition(t) {
    f(this, ar, t);
  }
  hasDefaultPopupPosition() {
    return n(this, ar) === null;
  }
  get commentButtonPosition() {
    return n(this, un);
  }
  get commentButtonWidth() {
    return n(this, ne).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }
  editComment(t) {
    const [e, s] = n(this, ar) || this.commentButtonPosition.map((h) => h / 100), i = this.parentBoundingClientRect, { x: r, y: a, width: o, height: l } = i;
    n(this, as).showDialog(null, this, r + e * o, a + s * l, { ...t, parentDimensions: i });
  }
  render() {
    var s, i;
    if (n(this, os)) return;
    const t = f(this, os, document.createElement("div"));
    if (t.className = "popup", n(this, gl)) {
      const r = t.style.outlineColor = $.makeHexColor(...n(this, gl));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement("span");
    if (e.className = "header", (s = n(this, yl)) != null && s.str) {
      const r = document.createElement("span");
      r.className = "title", e.append(r), { dir: r.dir, str: r.textContent } = n(this, yl);
    }
    if (t.append(e), n(this, rr)) {
      const r = document.createElement("time");
      r.className = "popupDate", r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({ dateObj: n(this, rr).valueOf() })), r.dateTime = n(this, rr).toISOString(), e.append(r);
    }
    Up({ html: n(this, tt, $d) || n(this, Si).str, dir: (i = n(this, Si)) == null ? void 0 : i.dir, className: "popupContent" }, t), n(this, Ut).append(t);
  }
  updateEdited({ rect: t, popup: e, deleted: s }) {
    var i;
    if (n(this, as)) {
      s ? (this.remove(), f(this, lr, null)) : e && (e.deleted ? this.remove() : (b(this, tt, tp).call(this), f(this, lr, e.text))), t && (f(this, un, null), b(this, tt, Qf).call(this), b(this, tt, Zf).call(this));
      return;
    }
    if (s || e != null && e.deleted) {
      this.remove();
      return;
    }
    b(this, tt, jd).call(this), n(this, _a) || f(this, _a, { contentsObj: n(this, Si), richText: n(this, fn) }), t && f(this, dn, null), e && e.text && (f(this, fn, b(this, tt, db).call(this, e.text)), f(this, rr, Sh.toDateObject(e.date)), f(this, Si, null)), (i = n(this, os)) == null || i.remove(), f(this, os, null);
  }
  resetEdited() {
    var t;
    n(this, _a) && ({ contentsObj: Kt(this, Si)._, richText: Kt(this, fn)._ } = n(this, _a), f(this, _a, null), (t = n(this, os)) == null || t.remove(), f(this, os, null), f(this, dn, null));
  }
  remove() {
    var t, e, s;
    if ((t = n(this, cn)) == null || t.abort(), f(this, cn, null), (e = n(this, os)) == null || e.remove(), f(this, os, null), f(this, or, false), f(this, _i, false), (s = n(this, ne)) == null || s.remove(), f(this, ne, null), this.trigger) for (const i of this.trigger) i.classList.remove("popupTriggerArea");
  }
  forceHide() {
    f(this, or, this.isVisible), n(this, or) && (n(this, Ut).hidden = true);
  }
  maybeShow() {
    n(this, as) || (b(this, tt, jd).call(this), n(this, or) && (n(this, os) || b(this, tt, Gd).call(this), f(this, or, false), n(this, Ut).hidden = false));
  }
  get isVisible() {
    return n(this, as) ? false : n(this, Ut).hidden === false;
  }
}
as = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), Mu = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap(), gl = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), ml = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), Ic = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), Pe = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakSet(), jd = function() {
  var e;
  if (n(this, cn)) return;
  f(this, cn, new AbortController());
  const { signal: t } = n(this, cn);
  for (const s of this.trigger) s.addEventListener("click", n(this, pl), { signal: t }), s.addEventListener("pointerenter", n(this, Mu), { signal: t }), s.addEventListener("pointerleave", n(this, Ru), { signal: t }), s.classList.add("popupTriggerArea");
  for (const s of n(this, Sa)) (e = s.container) == null || e.addEventListener("keydown", n(this, nr), { signal: t });
}, Qf = function() {
  const t = n(this, Sa).find((e) => e.hasCommentButton);
  t && f(this, un, t._normalizePoint(t.commentButtonPosition));
}, Zf = function() {
  if (n(this, Pe).extraPopupElement && !n(this, Pe).editor) return;
  this.renderCommentButton();
  const [t, e] = n(this, un), { style: s } = n(this, ne);
  s.left = `calc(${t}%)`, s.top = `calc(${e}% - var(--comment-button-dim))`;
}, tp = function() {
  n(this, Pe).extraPopupElement || (this.renderCommentButton(), n(this, ne).style.backgroundColor = this.commentButtonColor || "");
}, $d = function() {
  const t = n(this, fn), e = n(this, Si);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, fn).html || null;
}, ep = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, tt, $d)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, cb = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, tt, $d)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, db = function(t) {
  const e = [], s = { str: t, html: { name: "div", attributes: { dir: "auto" }, children: [{ name: "p", children: e }] } }, i = { style: { color: n(this, tt, cb), fontSize: n(this, tt, ep) ? `calc(${n(this, tt, ep)}px * var(--total-scale-factor))` : "" } };
  for (const r of t.split(`
`)) e.push({ name: "span", value: r, attributes: i });
  return s;
}, ub = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && n(this, _i)) && b(this, tt, zd).call(this);
}, fb = function() {
  if (n(this, dn) !== null) return;
  const { page: { view: t }, viewport: { rawDims: { pageWidth: e, pageHeight: s, pageX: i, pageY: r } } } = n(this, ml);
  let a = !!n(this, bl), o = a ? n(this, bl) : n(this, Ic);
  for (const A of n(this, Sa)) if (!o || $.intersect(A.data.rect, o) !== null) {
    o = A.data.rect, a = true;
    break;
  }
  const l = $.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, u = l[0] + c, p = l[1];
  f(this, dn, [100 * (u - i) / e, 100 * (p - r) / s]);
  const { style: m } = n(this, Ut);
  m.left = `${n(this, dn)[0]}%`, m.top = `${n(this, dn)[1]}%`;
}, zd = function() {
  if (n(this, as)) {
    n(this, as).toggleCommentPopup(this, false);
    return;
  }
  f(this, _i, !n(this, _i)), n(this, _i) ? (b(this, tt, Gd).call(this), n(this, Ut).addEventListener("click", n(this, pl)), n(this, Ut).addEventListener("keydown", n(this, nr))) : (b(this, tt, sp).call(this), n(this, Ut).removeEventListener("click", n(this, pl)), n(this, Ut).removeEventListener("keydown", n(this, nr)));
}, Gd = function() {
  n(this, os) || this.render(), this.isVisible ? n(this, _i) && n(this, Ut).classList.add("focused") : (b(this, tt, fb).call(this), n(this, Ut).hidden = false, n(this, Ut).style.zIndex = parseInt(n(this, Ut).style.zIndex) + 1e3);
}, sp = function() {
  n(this, Ut).classList.remove("focused"), !(n(this, _i) || !this.isVisible) && (n(this, Ut).hidden = true, n(this, Ut).style.zIndex = parseInt(n(this, Ut).style.zIndex) - 1e3);
};
class pb extends Ot {
  constructor(t) {
    super(t, { isRenderable: true, ignoreBorder: true }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = q.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var Fc;
class mw extends Ot {
  constructor(e) {
    super(e, { isRenderable: true, ignoreBorder: true });
    g(this, Fc, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const { data: e, width: s, height: i } = this, r = this.svgFactory.create(s, i, true), a = f(this, Fc, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Fc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Fc = /* @__PURE__ */ new WeakMap();
var Nc;
class bw extends Ot {
  constructor(e) {
    super(e, { isRenderable: true, ignoreBorder: true });
    g(this, Nc, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const { data: e, width: s, height: i } = this, r = this.svgFactory.create(s, i, true), a = e.borderStyle.width, o = f(this, Nc, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Nc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Nc = /* @__PURE__ */ new WeakMap();
var Oc;
class yw extends Ot {
  constructor(e) {
    super(e, { isRenderable: true, ignoreBorder: true });
    g(this, Oc, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const { data: e, width: s, height: i } = this, r = this.svgFactory.create(s, i, true), a = e.borderStyle.width, o = f(this, Oc, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Oc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Oc = /* @__PURE__ */ new WeakMap();
var Bc;
class gb extends Ot {
  constructor(e) {
    super(e, { isRenderable: true, ignoreBorder: true });
    g(this, Bc, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const { data: { rect: e, vertices: s, borderStyle: i, popupRef: r }, width: a, height: o } = this;
    if (!s) return this.container;
    const l = this.svgFactory.create(a, o, true);
    let h = [];
    for (let u = 0, p = s.length; u < p; u += 2) {
      const m = s[u] - e[0], A = e[3] - s[u + 1];
      h.push(`${m},${A}`);
    }
    h = h.join(" ");
    const c = f(this, Bc, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", h), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), l.append(c), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Bc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Bc = /* @__PURE__ */ new WeakMap();
class Aw extends gb {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class ww extends Ot {
  constructor(t) {
    super(t, { isRenderable: true, ignoreBorder: true });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var Hc, Ca, Uc, ip;
class Xp extends Ot {
  constructor(e) {
    super(e, { isRenderable: true, ignoreBorder: true });
    g(this, Uc);
    g(this, Hc, null);
    g(this, Ca, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? q.HIGHLIGHT : q.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const { data: { rect: e, rotation: s, inkLists: i, borderStyle: r, popupRef: a } } = this, { transform: o, width: l, height: h } = b(this, Uc, ip).call(this, s, e), c = this.svgFactory.create(l, h, true), u = f(this, Hc, this.svgFactory.createElement("svg:g"));
    c.append(u), u.setAttribute("stroke-width", r.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let p = 0, m = i.length; p < m; p++) {
      const A = this.svgFactory.createElement(this.svgElementName);
      n(this, Ca).push(A), A.setAttribute("points", i[p].join(",")), u.append(A);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const { thickness: s, points: i, rect: r } = e, a = n(this, Hc);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i) for (let o = 0, l = n(this, Ca).length; o < l; o++) n(this, Ca)[o].setAttribute("points", i[o].join(","));
    if (r) {
      const { transform: o, width: l, height: h } = b(this, Uc, ip).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return n(this, Ca);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Hc = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), Uc = /* @__PURE__ */ new WeakSet(), ip = function(e, s) {
  switch (e) {
    case 90:
      return { transform: `rotate(90) translate(${-s[0]},${s[1]}) scale(1,-1)`, width: s[3] - s[1], height: s[2] - s[0] };
    case 180:
      return { transform: `rotate(180) translate(${-s[2]},${s[1]}) scale(1,-1)`, width: s[2] - s[0], height: s[3] - s[1] };
    case 270:
      return { transform: `rotate(270) translate(${-s[2]},${s[3]}) scale(1,-1)`, width: s[3] - s[1], height: s[2] - s[0] };
    default:
      return { transform: `translate(${-s[0]},${s[3]}) scale(1,-1)`, width: s[2] - s[0], height: s[3] - s[1] };
  }
};
class mb extends Ot {
  constructor(t) {
    super(t, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true }), this.annotationEditorType = q.HIGHLIGHT;
  }
  render() {
    const { data: { overlaidText: t, popupRef: e } } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t) {
      const s = document.createElement("mark");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class vw extends Ot {
  constructor(t) {
    super(t, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
  }
  render() {
    const { data: { overlaidText: t, popupRef: e } } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class Ew extends Ot {
  constructor(t) {
    super(t, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
  }
  render() {
    const { data: { overlaidText: t, popupRef: e } } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class Sw extends Ot {
  constructor(t) {
    super(t, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
  }
  render() {
    const { data: { overlaidText: t, popupRef: e } } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), t) {
      const s = document.createElement("s");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class bb extends Ot {
  constructor(t) {
    super(t, { isRenderable: true, ignoreBorder: true }), this.annotationEditorType = q.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var jc, $c, np;
class _w extends Ot {
  constructor(e) {
    var i;
    super(e, { isRenderable: true });
    g(this, $c);
    g(this, jc, null);
    const { file: s } = this.data;
    this.filename = s.filename, this.content = s.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", { source: this, ...s });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const { container: e, data: s } = this;
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", b(this, $c, np).bind(this)), f(this, jc, i);
    const { isMac: r } = ce.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && b(this, $c, np).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return n(this, jc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
jc = /* @__PURE__ */ new WeakMap(), $c = /* @__PURE__ */ new WeakSet(), np = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var Al, xa, wl, hr, zc, Ta, Tr, rp, ap, vl;
let qp = (vl = class {
  constructor({ div: t, accessibilityManager: e, annotationCanvasMap: s, annotationEditorUIManager: i, page: r, viewport: a, structTreeLayer: o, commentManager: l, linkService: h, annotationStorage: c }) {
    g(this, Tr);
    g(this, Al, null);
    g(this, xa, null);
    g(this, wl, null);
    g(this, hr, /* @__PURE__ */ new Map());
    g(this, zc, null);
    g(this, Ta, null);
    this.div = t, f(this, Al, e), f(this, xa, s), f(this, zc, o || null), f(this, Ta, h || null), f(this, wl, c || new jp()), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i, this._commentManager = l || null;
  }
  hasEditableAnnotations() {
    return n(this, hr).size > 0;
  }
  async render(t) {
    var a, o, l;
    const { annotations: e } = t, s = this.div;
    _r(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), r = { data: null, layer: s, linkService: n(this, Ta), downloadManager: t.downloadManager, imageResourcesPath: t.imageResourcesPath || "", renderForms: t.renderForms !== false, svgFactory: new Th(), annotationStorage: n(this, wl), enableComment: t.enableComment === true, enableScripting: t.enableScripting === true, hasJSActions: t.hasJSActions, fieldObjects: t.fieldObjects, parent: this, elements: null };
    for (const h of e) {
      if (h.noHTML) continue;
      const c = h.annotationType === zt.POPUP;
      if (c) {
        const m = i.get(h.id);
        if (!m) continue;
        r.elements = m;
      } else if (h.rect[2] === h.rect[0] || h.rect[3] === h.rect[1]) continue;
      r.data = h;
      const u = Lg.create(r);
      if (!u.isRenderable) continue;
      if (!c && h.popupRef) {
        const m = i.get(h.popupRef);
        m ? m.push(u) : i.set(h.popupRef, [u]);
      }
      const p = u.render();
      h.hidden && (p.style.visibility = "hidden"), await b(this, Tr, rp).call(this, p, h.id, r.elements), (o = (a = u.extraPopupElement) == null ? void 0 : a.popup) == null || o.renderCommentButton(), u._isEditable && (n(this, hr).set(u.data.id, u), (l = this._annotationEditorUIManager) == null || l.renderAnnotationElement(u));
    }
    b(this, Tr, ap).call(this);
  }
  async addLinkAnnotations(t) {
    const e = { data: null, layer: this.div, linkService: n(this, Ta), svgFactory: new Th(), parent: this };
    for (const s of t) {
      s.borderStyle || (s.borderStyle = vl._defaultBorderStyle), e.data = s;
      const i = Lg.create(e);
      if (!i.isRenderable) continue;
      const r = i.render();
      await b(this, Tr, rp).call(this, r, s.id, null);
    }
  }
  update({ viewport: t }) {
    const e = this.div;
    this.viewport = t, _r(e, { rotation: t.rotation }), b(this, Tr, ap).call(this), e.hidden = false;
  }
  getEditableAnnotations() {
    return Array.from(n(this, hr).values());
  }
  getEditableAnnotation(t) {
    return n(this, hr).get(t);
  }
  addFakeAnnotation(t) {
    var o;
    const { div: e } = this, { id: s, rotation: i } = t, r = new lw({ data: { id: s, rect: t.getPDFRect(), rotation: i }, editor: t, layer: e, parent: this, enableComment: !!this._commentManager, linkService: n(this, Ta), annotationStorage: n(this, wl) }), a = r.render();
    return e.append(a), (o = n(this, Al)) == null || o.moveElementInDOM(e, a, a, false), r.createOrUpdatePopup(), r;
  }
  static get _defaultBorderStyle() {
    return Q(this, "_defaultBorderStyle", Object.freeze({ width: 1, rawWidth: 1, style: to.SOLID, dashArray: [3], horizontalCornerRadius: 0, verticalCornerRadius: 0 }));
  }
}, Al = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ new WeakMap(), wl = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), zc = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakSet(), rp = async function(t, e, s) {
  var o, l;
  const i = t.firstChild || t, r = i.id = `${Bp}${e}`, a = await ((o = n(this, zc)) == null ? void 0 : o.getAriaAttributes(r));
  if (a) for (const [h, c] of a) i.setAttribute(h, c);
  s ? s.at(-1).container.after(t) : (this.div.append(t), (l = n(this, Al)) == null || l.moveElementInDOM(this.div, t, i, false));
}, ap = function() {
  var e;
  if (!n(this, xa)) return;
  const t = this.div;
  for (const [s, i] of n(this, xa)) {
    const r = t.querySelector(`[data-annotation-id="${s}"]`);
    if (!r) continue;
    i.className = "annotationContent";
    const { firstChild: a } = r;
    a ? a.nodeName === "CANVAS" ? a.replaceWith(i) : a.classList.contains("annotationContent") ? a.after(i) : a.before(i) : r.append(i);
    const o = n(this, hr).get(s);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(s, r.id, i), o._hasNoCanvas = false) : o.canvas = i);
  }
  n(this, xa).clear();
}, vl);
const Cd = /\r\n?|\n/g;
var ls, Gc, Pa, hs, qt, yb, Ab, wb, Vd, En, Wd, Xd, vb, lp, Eb;
const Pt = class Pt2 extends xt {
  constructor(e) {
    super({ ...e, name: "freeTextEditor" });
    g(this, qt);
    g(this, ls, "");
    g(this, Gc, `${this.id}-editor`);
    g(this, Pa, null);
    g(this, hs);
    R(this, "_colorPicker", null);
    this.color = e.color || Pt2._defaultColor || xt._defaultLineColor, f(this, hs, e.fontSize || Pt2._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
  }
  static get _keyboardManager() {
    const e = Pt2.prototype, s = (a) => a.isEmpty(), i = Cr.TRANSLATE_SMALL, r = Cr.TRANSLATE_BIG;
    return Q(this, "_keyboardManager", new ud([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, { bubbles: true }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, { args: [-i, 0], checker: s }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, { args: [-r, 0], checker: s }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, { args: [i, 0], checker: s }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, { args: [r, 0], checker: s }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, { args: [0, -i], checker: s }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, { args: [0, -r], checker: s }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, { args: [0, i], checker: s }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, { args: [0, r], checker: s }]]));
  }
  static initialize(e, s) {
    xt.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case it.FREETEXT_SIZE:
        Pt2._defaultFontSize = s;
        break;
      case it.FREETEXT_COLOR:
        Pt2._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case it.FREETEXT_SIZE:
        b(this, qt, yb).call(this, s);
        break;
      case it.FREETEXT_COLOR:
        b(this, qt, Ab).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[it.FREETEXT_SIZE, Pt2._defaultFontSize], [it.FREETEXT_COLOR, Pt2._defaultColor || xt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[it.FREETEXT_SIZE, n(this, hs)], [it.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new uu(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return it.FREETEXT_COLOR;
  }
  onUpdatedColor() {
    var e;
    this.editorDiv.style.color = this.color, (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, true);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-Pt2._internalPadding * e, -(Pt2._internalPadding + n(this, hs)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode()) return false;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = true, this._isDraggable = false, this.div.removeAttribute("aria-activedescendant"), f(this, Pa, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, Pa));
    return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), { signal: e }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), { signal: e }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), { signal: e }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), { signal: e }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), { signal: e }), true;
  }
  disableEditMode() {
    var e;
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = false, this.div.setAttribute("aria-activedescendant", n(this, Gc)), this._isDraggable = true, (e = n(this, Pa)) == null || e.abort(), f(this, Pa, null), this.div.focus({ preventScroll: true }), this.isEditing = false, this.parent.div.classList.add("freetextEditing"), true) : false;
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(e) {
    var s;
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (s = this._initialOptions) != null && s.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = false, this.parent && (this.parent.setEditingState(true), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode()) return;
    super.commit(), this.disableEditMode();
    const e = n(this, ls), s = f(this, ls, b(this, qt, wb).call(this).trimEnd());
    if (e === s) return;
    const i = (r) => {
      if (f(this, ls, r), !r) {
        this.remove();
        return;
      }
      b(this, qt, Xd).call(this), this._uiManager.rebuild(this), b(this, qt, Vd).call(this);
    };
    this.addCommands({ cmd: () => {
      i(s);
    }, undo: () => {
      i(e);
    }, mustExec: false }), b(this, qt, Vd).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    Pt2._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = true;
  }
  editorDivBlur(e) {
    this.isEditing = false;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", true);
  }
  get canChangeContent() {
    return true;
  }
  render() {
    if (this.div) return this.div;
    let e, s;
    (this._isCopy || this.annotationElementId) && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", n(this, Gc)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = true;
    const { style: i } = this.editorDiv;
    if (i.fontSize = `calc(${n(this, hs)}px * var(--total-scale-factor))`, i.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const { position: o } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [c, u] = this.pageDimensions, [p, m] = this.pageTranslation;
        let A, y;
        switch (this.rotation) {
          case 0:
            A = e + (o[0] - p) / c, y = s + this.height - (o[1] - m) / u;
            break;
          case 90:
            A = e + (o[0] - p) / c, y = s - (o[1] - m) / u, [l, h] = [h, -l];
            break;
          case 180:
            A = e - this.width + (o[0] - p) / c, y = s - (o[1] - m) / u, [l, h] = [-l, -h];
            break;
          case 270:
            A = e + (o[0] - p - this.height * u) / c, y = s + (o[1] - m - this.width * c) / u, [l, h] = [-h, l];
            break;
        }
        this.setAt(A * r, y * a, l, h);
      } else this._moveAfterPaste(e, s);
      b(this, qt, Xd).call(this), this._isDraggable = true, this.editorDiv.contentEditable = false;
    } else this._isDraggable = false, this.editorDiv.contentEditable = true;
    return this.div;
  }
  editorDivPaste(e) {
    var A, y, v;
    const s = e.clipboardData || window.clipboardData, { types: i } = s;
    if (i.length === 1 && i[0] === "text/plain") return;
    e.preventDefault();
    const r = b(A = Pt2, En, lp).call(A, s.getData("text") || "").replaceAll(Cd, `
`);
    if (!r) return;
    const a = window.getSelection();
    if (!a.rangeCount) return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const { startContainer: l, startOffset: h } = o, c = [], u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const w = l.parentElement;
      if (u.push(l.nodeValue.slice(h).replaceAll(Cd, "")), w !== this.editorDiv) {
        let S = c;
        for (const E of this.editorDiv.childNodes) {
          if (E === w) {
            S = u;
            continue;
          }
          S.push(b(y = Pt2, En, Wd).call(y, E));
        }
      }
      c.push(l.nodeValue.slice(0, h).replaceAll(Cd, ""));
    } else if (l === this.editorDiv) {
      let w = c, S = 0;
      for (const E of this.editorDiv.childNodes) S++ === h && (w = u), w.push(b(v = Pt2, En, Wd).call(v, E));
    }
    f(this, ls, `${c.join(`
`)}${r}${u.join(`
`)}`), b(this, qt, Xd).call(this);
    const p = new Range();
    let m = Math.sumPrecise(c.map((w) => w.length));
    for (const { firstChild: w } of this.editorDiv.childNodes) if (w.nodeType === Node.TEXT_NODE) {
      const S = w.nodeValue.length;
      if (m <= S) {
        p.setStart(w, m), p.setEnd(w, m);
        break;
      }
      m -= S;
    }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const e = Pt2._internalPadding * this.parentScale;
    return this.getRect(e, e);
  }
  static async deserialize(e, s, i) {
    var o;
    let r = null;
    if (e instanceof pb) {
      const { data: { defaultAppearanceData: { fontSize: l, fontColor: h }, rect: c, rotation: u, id: p, popupRef: m, richText: A, contentsObj: y, creationDate: v, modificationDate: w }, textContent: S, textPosition: E, parent: { page: { pageNumber: _ } } } = e;
      if (!S || S.length === 0) return null;
      r = e = { annotationType: q.FREETEXT, color: Array.from(h), fontSize: l, value: S.join(`
`), position: E, pageIndex: _ - 1, rect: c.slice(0), rotation: u, annotationElementId: p, id: p, deleted: false, popupRef: m, comment: (y == null ? void 0 : y.str) || null, richText: A, creationDate: v, modificationDate: w };
    }
    const a = await super.deserialize(e, s, i);
    return f(a, hs, e.fontSize), a.color = $.makeHexColor(...e.color), f(a, ls, b(o = Pt2, En, lp).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  serialize(e = false) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const s = xt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i = Object.assign(super.serialize(e), { color: s, fontSize: n(this, hs), value: b(this, qt, vb).call(this) });
    return this.addComment(i), e ? (i.isCopy = true, i) : this.annotationElementId && !b(this, qt, Eb).call(this, i) ? null : (i.id = this.annotationElementId, i);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (!s) return null;
    const { style: i } = s;
    i.fontSize = `calc(${n(this, hs)}px * var(--total-scale-factor))`, i.color = this.color, s.replaceChildren();
    for (const r of n(this, ls).split(`
`)) {
      const a = document.createElement("div");
      a.append(r ? document.createTextNode(r) : document.createElement("br")), s.append(a);
    }
    return e.updateEdited({ rect: this.getPDFRect(), popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : { text: n(this, ls) } }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
ls = /* @__PURE__ */ new WeakMap(), Gc = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), hs = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakSet(), yb = function(e) {
  const s = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, hs)) * this.parentScale), f(this, hs, r), b(this, qt, Vd).call(this);
  }, i = n(this, hs);
  this.addCommands({ cmd: s.bind(this, e), undo: s.bind(this, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: it.FREETEXT_SIZE, overwriteIfSameType: true, keepUndo: true });
}, Ab = function(e) {
  const s = (r) => {
    this.color = r, this.onUpdatedColor();
  }, i = this.color;
  this.addCommands({ cmd: s.bind(this, e), undo: s.bind(this, i), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: it.FREETEXT_COLOR, overwriteIfSameType: true, keepUndo: true });
}, wb = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const r of this.editorDiv.childNodes) (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(b(i = Pt, En, Wd).call(i, r)), s = r);
  return e.join(`
`);
}, Vd = function() {
  const [e, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM) i = this.div.getBoundingClientRect();
  else {
    const { currentLayer: r, div: a } = this, o = a.style.display, l = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", r.div.append(this.div), i = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / s) : (this.width = i.height / e, this.height = i.width / s), this.fixAndSetPosition();
}, En = /* @__PURE__ */ new WeakSet(), Wd = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Cd, "");
}, Xd = function() {
  if (this.editorDiv.replaceChildren(), !!n(this, ls)) for (const e of n(this, ls).split(`
`)) {
    const s = document.createElement("div");
    s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
  }
}, vb = function() {
  return n(this, ls).replaceAll(" ", " ");
}, lp = function(e) {
  return e.replaceAll(" ", " ");
}, Eb = function(e) {
  const { value: s, fontSize: i, color: r, pageIndex: a } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, g(Pt, En), R(Pt, "_freeTextDefaultContent", ""), R(Pt, "_internalPadding", 0), R(Pt, "_defaultColor", null), R(Pt, "_defaultFontSize", 10), R(Pt, "_type", "freetext"), R(Pt, "_editorType", q.FREETEXT);
let op = Pt;
class j {
  toSVGPath() {
    _t("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    _t("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    _t("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, s, i, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2) a[o] = e + t[o] * i, a[o + 1] = s + t[o + 1] * r;
    return a;
  }
  static _rescaleAndSwap(t, e, s, i, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2) a[o] = e + t[o + 1] * i, a[o + 1] = s + t[o] * r;
    return a;
  }
  static _translate(t, e, s, i) {
    i || (i = new Float32Array(t.length));
    for (let r = 0, a = t.length; r < a; r += 2) i[r] = e + t[r], i[r + 1] = s + t[r + 1];
    return i;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, s, i, r) {
    switch (r) {
      case 90:
        return [1 - e / s, t / i];
      case 180:
        return [1 - t / s, 1 - e / i];
      case 270:
        return [e / s, 1 - t / i];
      default:
        return [t / s, e / i];
    }
  }
  static _normalizePagePoint(t, e, s) {
    switch (s) {
      case 90:
        return [1 - e, t];
      case 180:
        return [1 - t, 1 - e];
      case 270:
        return [e, 1 - t];
      default:
        return [t, e];
    }
  }
  static createBezierPoints(t, e, s, i, r, a) {
    return [(t + 5 * s) / 6, (e + 5 * i) / 6, (5 * s + r) / 6, (5 * i + a) / 6, (s + r) / 2, (i + a) / 2];
  }
}
R(j, "PRECISION", 1e-4);
var cs, Ks, El, Sl, Ci, st, ka, Ra, Vc, Wc, _l, Cl, cr, Xc, Du, Lu, te, ph, Sb, _b, Cb, xb, Tb, Pb;
const Hi = class Hi2 {
  constructor({ x: t, y: e }, s, i, r, a, o = 0) {
    g(this, te);
    g(this, cs);
    g(this, Ks, []);
    g(this, El);
    g(this, Sl);
    g(this, Ci, []);
    g(this, st, new Float32Array(18));
    g(this, ka);
    g(this, Ra);
    g(this, Vc);
    g(this, Wc);
    g(this, _l);
    g(this, Cl);
    g(this, cr, []);
    f(this, cs, s), f(this, Cl, r * i), f(this, Sl, a), n(this, st).set([NaN, NaN, NaN, NaN, t, e], 6), f(this, El, o), f(this, Wc, n(Hi2, Xc) * i), f(this, Vc, n(Hi2, Lu) * i), f(this, _l, i), n(this, cr).push(t, e);
  }
  isEmpty() {
    return isNaN(n(this, st)[8]);
  }
  add({ x: t, y: e }) {
    var k;
    f(this, ka, t), f(this, Ra, e);
    const [s, i, r, a] = n(this, cs);
    let [o, l, h, c] = n(this, st).subarray(8, 12);
    const u = t - h, p = e - c, m = Math.hypot(u, p);
    if (m < n(this, Vc)) return false;
    const A = m - n(this, Wc), y = A / m, v = y * u, w = y * p;
    let S = o, E = l;
    o = h, l = c, h += v, c += w, (k = n(this, cr)) == null || k.push(t, e);
    const _ = -w / A, C = v / A, x = _ * n(this, Cl), T = C * n(this, Cl);
    return n(this, st).set(n(this, st).subarray(2, 8), 0), n(this, st).set([h + x, c + T], 4), n(this, st).set(n(this, st).subarray(14, 18), 12), n(this, st).set([h - x, c - T], 16), isNaN(n(this, st)[6]) ? (n(this, Ci).length === 0 && (n(this, st).set([o + x, l + T], 2), n(this, Ci).push(NaN, NaN, NaN, NaN, (o + x - s) / r, (l + T - i) / a), n(this, st).set([o - x, l - T], 14), n(this, Ks).push(NaN, NaN, NaN, NaN, (o - x - s) / r, (l - T - i) / a)), n(this, st).set([S, E, o, l, h, c], 6), !this.isEmpty()) : (n(this, st).set([S, E, o, l, h, c], 6), Math.abs(Math.atan2(E - l, S - o) - Math.atan2(w, v)) < Math.PI / 2 ? ([o, l, h, c] = n(this, st).subarray(2, 6), n(this, Ci).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [o, l, S, E] = n(this, st).subarray(14, 18), n(this, Ks).push(NaN, NaN, NaN, NaN, ((S + o) / 2 - s) / r, ((E + l) / 2 - i) / a), true) : ([S, E, o, l, h, c] = n(this, st).subarray(0, 6), n(this, Ci).push(((S + 5 * o) / 6 - s) / r, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [h, c, o, l, S, E] = n(this, st).subarray(12, 18), n(this, Ks).push(((S + 5 * o) / 6 - s) / r, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), true));
  }
  toSVGPath() {
    if (this.isEmpty()) return "";
    const t = n(this, Ci), e = n(this, Ks);
    if (isNaN(n(this, st)[6]) && !this.isEmpty()) return b(this, te, Sb).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6) isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    b(this, te, Cb).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6) isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return b(this, te, _b).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new kb(t, e, s, i, r, a);
  }
  getOutlines() {
    var u;
    const t = n(this, Ci), e = n(this, Ks), s = n(this, st), [i, r, a, o] = n(this, cs), l = new Float32Array((((u = n(this, cr)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let p = 0, m = l.length - 2; p < m; p += 2) l[p] = (n(this, cr)[p] - i) / a, l[p + 1] = (n(this, cr)[p + 1] - r) / o;
    if (l[l.length - 2] = (n(this, ka) - i) / a, l[l.length - 1] = (n(this, Ra) - r) / o, isNaN(s[6]) && !this.isEmpty()) return b(this, te, xb).call(this, l);
    const h = new Float32Array(n(this, Ci).length + 24 + n(this, Ks).length);
    let c = t.length;
    for (let p = 0; p < c; p += 2) {
      if (isNaN(t[p])) {
        h[p] = h[p + 1] = NaN;
        continue;
      }
      h[p] = t[p], h[p + 1] = t[p + 1];
    }
    c = b(this, te, Pb).call(this, h, c);
    for (let p = e.length - 6; p >= 6; p -= 6) for (let m = 0; m < 6; m += 2) {
      if (isNaN(e[p + m])) {
        h[c] = h[c + 1] = NaN, c += 2;
        continue;
      }
      h[c] = e[p + m], h[c + 1] = e[p + m + 1], c += 2;
    }
    return b(this, te, Tb).call(this, h, c), this.newFreeDrawOutline(h, l, n(this, cs), n(this, _l), n(this, El), n(this, Sl));
  }
};
cs = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), El = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), ka = /* @__PURE__ */ new WeakMap(), Ra = /* @__PURE__ */ new WeakMap(), Vc = /* @__PURE__ */ new WeakMap(), Wc = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap(), Cl = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakMap(), Du = /* @__PURE__ */ new WeakMap(), Lu = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakSet(), ph = function() {
  const t = n(this, st).subarray(4, 6), e = n(this, st).subarray(16, 18), [s, i, r, a] = n(this, cs);
  return [(n(this, ka) + (t[0] - e[0]) / 2 - s) / r, (n(this, Ra) + (t[1] - e[1]) / 2 - i) / a, (n(this, ka) + (e[0] - t[0]) / 2 - s) / r, (n(this, Ra) + (e[1] - t[1]) / 2 - i) / a];
}, Sb = function() {
  const [t, e, s, i] = n(this, cs), [r, a, o, l] = b(this, te, ph).call(this);
  return `M${(n(this, st)[2] - t) / s} ${(n(this, st)[3] - e) / i} L${(n(this, st)[4] - t) / s} ${(n(this, st)[5] - e) / i} L${r} ${a} L${o} ${l} L${(n(this, st)[16] - t) / s} ${(n(this, st)[17] - e) / i} L${(n(this, st)[14] - t) / s} ${(n(this, st)[15] - e) / i} Z`;
}, _b = function(t) {
  const e = n(this, Ks);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Cb = function(t) {
  const [e, s, i, r] = n(this, cs), a = n(this, st).subarray(4, 6), o = n(this, st).subarray(16, 18), [l, h, c, u] = b(this, te, ph).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / r} L${l} ${h} L${c} ${u} L${(o[0] - e) / i} ${(o[1] - s) / r}`);
}, xb = function(t) {
  const e = n(this, st), [s, i, r, a] = n(this, cs), [o, l, h, c] = b(this, te, ph).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - s) / r, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / r, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - s) / r, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / r, (e[15] - i) / a], 0), this.newFreeDrawOutline(u, t, n(this, cs), n(this, _l), n(this, El), n(this, Sl));
}, Tb = function(t, e) {
  const s = n(this, Ks);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, Pb = function(t, e) {
  const s = n(this, st).subarray(4, 6), i = n(this, st).subarray(16, 18), [r, a, o, l] = n(this, cs), [h, c, u, p] = b(this, te, ph).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l], e), e += 24;
}, g(Hi, Xc, 8), g(Hi, Du, 2), g(Hi, Lu, n(Hi, Xc) + n(Hi, Du));
let fu = Hi;
var xl, Ma, pn, qc, ds, Yc, Vt, Iu, Rb;
class kb extends j {
  constructor(e, s, i, r, a, o) {
    super();
    g(this, Iu);
    g(this, xl);
    g(this, Ma, new Float32Array(4));
    g(this, pn);
    g(this, qc);
    g(this, ds);
    g(this, Yc);
    g(this, Vt);
    f(this, Vt, e), f(this, ds, s), f(this, xl, i), f(this, Yc, r), f(this, pn, a), f(this, qc, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], b(this, Iu, Rb).call(this, o);
    const [l, h, c, u] = n(this, Ma);
    for (let p = 0, m = e.length; p < m; p += 2) e[p] = (e[p] - l) / c, e[p + 1] = (e[p + 1] - h) / u;
    for (let p = 0, m = s.length; p < m; p += 2) s[p] = (s[p] - l) / c, s[p + 1] = (s[p + 1] - h) / u;
  }
  toSVGPath() {
    const e = [`M${n(this, Vt)[4]} ${n(this, Vt)[5]}`];
    for (let s = 6, i = n(this, Vt).length; s < i; s += 6) {
      if (isNaN(n(this, Vt)[s])) {
        e.push(`L${n(this, Vt)[s + 4]} ${n(this, Vt)[s + 5]}`);
        continue;
      }
      e.push(`C${n(this, Vt)[s]} ${n(this, Vt)[s + 1]} ${n(this, Vt)[s + 2]} ${n(this, Vt)[s + 3]} ${n(this, Vt)[s + 4]} ${n(this, Vt)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = i - e, l = r - s;
    let h, c;
    switch (a) {
      case 0:
        h = j._rescale(n(this, Vt), e, r, o, -l), c = j._rescale(n(this, ds), e, r, o, -l);
        break;
      case 90:
        h = j._rescaleAndSwap(n(this, Vt), e, s, o, l), c = j._rescaleAndSwap(n(this, ds), e, s, o, l);
        break;
      case 180:
        h = j._rescale(n(this, Vt), i, s, -o, l), c = j._rescale(n(this, ds), i, s, -o, l);
        break;
      case 270:
        h = j._rescaleAndSwap(n(this, Vt), i, r, -o, -l), c = j._rescaleAndSwap(n(this, ds), i, r, -o, -l);
        break;
    }
    return { outline: Array.from(h), points: [Array.from(c)] };
  }
  get box() {
    return n(this, Ma);
  }
  newOutliner(e, s, i, r, a, o = 0) {
    return new fu(e, s, i, r, a, o);
  }
  getNewOutline(e, s) {
    const [i, r, a, o] = n(this, Ma), [l, h, c, u] = n(this, xl), p = a * c, m = o * u, A = i * c + l, y = r * u + h, v = this.newOutliner({ x: n(this, ds)[0] * p + A, y: n(this, ds)[1] * m + y }, n(this, xl), n(this, Yc), e, n(this, qc), s ?? n(this, pn));
    for (let w = 2; w < n(this, ds).length; w += 2) v.add({ x: n(this, ds)[w] * p + A, y: n(this, ds)[w + 1] * m + y });
    return v.getOutlines();
  }
}
xl = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap(), qc = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakMap(), Yc = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakSet(), Rb = function(e) {
  const s = n(this, Vt);
  let i = s[4], r = s[5];
  const a = [i, r, i, r];
  let o = i, l = r, h = i, c = r;
  const u = e ? Math.max : Math.min, p = new Float32Array(4);
  for (let A = 6, y = s.length; A < y; A += 6) {
    const v = s[A + 4], w = s[A + 5];
    isNaN(s[A]) ? ($.pointBoundingBox(v, w, a), l > w ? (o = v, l = w) : l === w && (o = u(o, v)), c < w ? (h = v, c = w) : c === w && (h = u(h, v))) : (p[0] = p[1] = 1 / 0, p[2] = p[3] = -1 / 0, $.bezierBoundingBox(i, r, ...s.slice(A, A + 6), p), $.rectBoundingBox(p[0], p[1], p[2], p[3], a), l > p[1] ? (o = p[0], l = p[1]) : l === p[1] && (o = u(o, p[0])), c < p[3] ? (h = p[2], c = p[3]) : c === p[3] && (h = u(h, p[2]))), i = v, r = w;
  }
  const m = n(this, Ma);
  m[0] = a[0] - n(this, pn), m[1] = a[1] - n(this, pn), m[2] = a[2] - a[0] + 2 * n(this, pn), m[3] = a[3] - a[1] + 2 * n(this, pn), this.firstPoint = [o, l], this.lastPoint = [h, c];
};
var Kc, Jc, Qc, dr, Js, Ue, Mb, qd, Db, Lb, cp;
class hp {
  constructor(t, e = 0, s = 0, i = true) {
    g(this, Ue);
    g(this, Kc);
    g(this, Jc);
    g(this, Qc);
    g(this, dr, []);
    g(this, Js, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a = 10 ** -4;
    for (const { x: y, y: v, width: w, height: S } of t) {
      const E = Math.floor((y - e) / a) * a, _ = Math.ceil((y + w + e) / a) * a, C = Math.floor((v - e) / a) * a, x = Math.ceil((v + S + e) / a) * a, T = [E, C, x, true], P = [_, C, x, false];
      n(this, dr).push(T, P), $.rectBoundingBox(E, C, _, x, r);
    }
    const o = r[2] - r[0] + 2 * s, l = r[3] - r[1] + 2 * s, h = r[0] - s, c = r[1] - s;
    let u = i ? -1 / 0 : 1 / 0, p = 1 / 0;
    const m = n(this, dr).at(i ? -1 : -2), A = [m[0], m[2]];
    for (const y of n(this, dr)) {
      const [v, w, S, E] = y;
      !E && i ? w < p ? (p = w, u = v) : w === p && (u = Math.max(u, v)) : E && !i && (w < p ? (p = w, u = v) : w === p && (u = Math.min(u, v))), y[0] = (v - h) / o, y[1] = (w - c) / l, y[2] = (S - c) / l;
    }
    f(this, Kc, new Float32Array([h, c, o, l])), f(this, Jc, [u, p]), f(this, Qc, A);
  }
  getOutlines() {
    n(this, dr).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of n(this, dr)) e[3] ? (t.push(...b(this, Ue, cp).call(this, e)), b(this, Ue, Db).call(this, e)) : (b(this, Ue, Lb).call(this, e), t.push(...b(this, Ue, cp).call(this, e)));
    return b(this, Ue, Mb).call(this, t);
  }
}
Kc = /* @__PURE__ */ new WeakMap(), Jc = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakSet(), Mb = function(t) {
  const e = [], s = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, l, h] = a;
    e.push([o, l, a], [o, h, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const l = e[a][2], h = e[a + 1][2];
    l.push(h), h.push(l), s.add(l), s.add(h);
  }
  const i = [];
  let r;
  for (; s.size > 0; ) {
    const a = s.values().next().value;
    let [o, l, h, c, u] = a;
    s.delete(a);
    let p = o, m = l;
    for (r = [o, h], i.push(r); ; ) {
      let A;
      if (s.has(c)) A = c;
      else if (s.has(u)) A = u;
      else break;
      s.delete(A), [o, l, h, c, u] = A, p !== o && (r.push(p, m, o, m === l ? l : h), p = o), m = m === l ? h : l;
    }
    r.push(p, m);
  }
  return new Cw(i, n(this, Kc), n(this, Jc), n(this, Qc));
}, qd = function(t) {
  const e = n(this, Js);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const r = s + i >> 1, a = e[r][0];
    if (a === t) return r;
    a < t ? s = r + 1 : i = r - 1;
  }
  return i + 1;
}, Db = function([, t, e]) {
  const s = b(this, Ue, qd).call(this, t);
  n(this, Js).splice(s, 0, [t, e]);
}, Lb = function([, t, e]) {
  const s = b(this, Ue, qd).call(this, t);
  for (let i = s; i < n(this, Js).length; i++) {
    const [r, a] = n(this, Js)[i];
    if (r !== t) break;
    if (r === t && a === e) {
      n(this, Js).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [r, a] = n(this, Js)[i];
    if (r !== t) break;
    if (r === t && a === e) {
      n(this, Js).splice(i, 1);
      return;
    }
  }
}, cp = function(t) {
  const [e, s, i] = t, r = [[e, s, i]], a = b(this, Ue, qd).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = n(this, Js)[o];
    for (let c = 0, u = r.length; c < u; c++) {
      const [, p, m] = r[c];
      if (!(h <= p || m <= l)) {
        if (p >= l) {
          if (m > h) r[c][1] = h;
          else {
            if (u === 1) return [];
            r.splice(c, 1), c--, u--;
          }
          continue;
        }
        r[c][2] = l, m > h && r.push([e, h, m]);
      }
    }
  }
  return r;
};
var Zc, Tl;
class Cw extends j {
  constructor(e, s, i, r) {
    super();
    g(this, Zc);
    g(this, Tl);
    f(this, Tl, e), f(this, Zc, s), this.firstPoint = i, this.lastPoint = r;
  }
  toSVGPath() {
    const e = [];
    for (const s of n(this, Tl)) {
      let [i, r] = s;
      e.push(`M${i} ${r}`);
      for (let a = 2; a < s.length; a += 2) {
        const o = s[a], l = s[a + 1];
        o === i ? (e.push(`V${l}`), r = l) : l === r && (e.push(`H${o}`), i = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = i - e, h = r - s;
    for (const c of n(this, Tl)) {
      const u = new Array(c.length);
      for (let p = 0; p < c.length; p += 2) u[p] = e + c[p] * l, u[p + 1] = r - c[p + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return n(this, Zc);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
Zc = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakMap();
class dp extends fu {
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new xw(t, e, s, i, r, a);
  }
}
class xw extends kb {
  newOutliner(t, e, s, i, r, a = 0) {
    return new dp(t, e, s, i, r, a);
  }
}
var Pl, td, gn, Da, ed, qe, sd, id, La, us, fs, me, kl, Rl, ke, Ml, Ls, nd, Z, up, Yd, Ib, Fb, Nb, fp, Dr, Os, ao, Ob, Kd, Jd, Bb, Hb, Ub, jb, $b;
const ct = class ct2 extends xt {
  constructor(e) {
    super({ ...e, name: "highlightEditor" });
    g(this, Z);
    g(this, Pl, null);
    g(this, td, 0);
    g(this, gn);
    g(this, Da, null);
    g(this, ed, null);
    g(this, qe, null);
    g(this, sd, null);
    g(this, id, 0);
    g(this, La, null);
    g(this, us, null);
    g(this, fs, null);
    g(this, me, false);
    g(this, kl, null);
    g(this, Rl, null);
    g(this, ke, null);
    g(this, Ml, "");
    g(this, Ls);
    g(this, nd, "");
    this.color = e.color || ct2._defaultColor, f(this, Ls, e.thickness || ct2._defaultThickness), this.opacity = e.opacity || ct2._defaultOpacity, f(this, gn, e.boxes || null), f(this, nd, e.methodOfCreation || ""), f(this, Ml, e.text || ""), this._isDraggable = false, this.defaultL10nId = "pdfjs-editor-highlight-editor", e.highlightId > -1 ? (f(this, me, true), b(this, Z, Yd).call(this, e), b(this, Z, Dr).call(this)) : n(this, gn) && (f(this, Pl, e.anchorNode), f(this, td, e.anchorOffset), f(this, sd, e.focusNode), f(this, id, e.focusOffset), b(this, Z, up).call(this), b(this, Z, Dr).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
  }
  static get _keyboardManager() {
    const e = ct2.prototype;
    return Q(this, "_keyboardManager", new ud([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, { args: [0] }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, { args: [1] }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, { args: [2] }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, { args: [3] }]]));
  }
  get telemetryInitialData() {
    return { action: "added", type: n(this, me) ? "free_highlight" : "highlight", color: this._uiManager.getNonHCMColorName(this.color), thickness: n(this, Ls), methodOfCreation: n(this, nd) };
  }
  get telemetryFinalData() {
    return { type: "highlight", color: this._uiManager.getNonHCMColorName(this.color) };
  }
  static computeTelemetryFinalData(e) {
    return { numberOfColors: e.get("color").size };
  }
  static initialize(e, s) {
    var i;
    xt.initialize(e, s), ct2._defaultColor || (ct2._defaultColor = ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case it.HIGHLIGHT_COLOR:
        ct2._defaultColor = s;
        break;
      case it.HIGHLIGHT_THICKNESS:
        ct2._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return n(this, Rl);
  }
  get commentButtonPosition() {
    return n(this, kl);
  }
  updateParams(e, s) {
    switch (e) {
      case it.HIGHLIGHT_COLOR:
        b(this, Z, Ib).call(this, s);
        break;
      case it.HIGHLIGHT_THICKNESS:
        b(this, Z, Fb).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[it.HIGHLIGHT_COLOR, ct2._defaultColor], [it.HIGHLIGHT_THICKNESS, ct2._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[it.HIGHLIGHT_COLOR, this.color || ct2._defaultColor], [it.HIGHLIGHT_THICKNESS, n(this, Ls) || ct2._defaultThickness], [it.HIGHLIGHT_FREE, n(this, me)]];
  }
  onUpdatedColor() {
    var e, s;
    (e = this.parent) == null || e.drawLayer.updateProperties(n(this, fs), { root: { fill: this.color, "fill-opacity": this.opacity } }), (s = n(this, ed)) == null || s.updateColor(this.color), super.onUpdatedColor();
  }
  get toolbarButtons() {
    return this._uiManager.highlightColors ? [["colorPicker", f(this, ed, new xh({ editor: this }))]] : super.toolbarButtons;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", false);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(b(this, Z, Jd).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, b(this, Z, Jd).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    b(this, Z, fp).call(this), this._reportTelemetry({ action: "deleted" }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, Z, Dr).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = false;
    this.parent && !e ? b(this, Z, fp).call(this) : e && (b(this, Z, Dr).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var r, a, o;
    const { drawLayer: s } = this.parent;
    let i;
    n(this, me) ? (e = (e - this.rotation + 360) % 360, i = b(r = ct2, Os, ao).call(r, n(this, us).box, e)) : i = b(a = ct2, Os, ao).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(n(this, fs), { bbox: i, root: { "data-main-rotation": e } }), s.updateProperties(n(this, ke), { bbox: b(o = ct2, Os, ao).call(o, n(this, qe).box, e), root: { "data-main-rotation": e } });
  }
  render() {
    if (this.div) return this.div;
    const e = super.render();
    n(this, Ml) && (e.setAttribute("aria-label", n(this, Ml)), e.setAttribute("role", "mark")), n(this, me) ? e.classList.add("free") : this.div.addEventListener("keydown", b(this, Z, Ob).bind(this), { signal: this._uiManager._signal });
    const s = f(this, La, document.createElement("div"));
    return e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = n(this, Da), this.setDims(this.width, this.height), lm(this, n(this, La), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, ke), { rootClass: { hovered: true } });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, ke), { rootClass: { hovered: false } });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        b(this, Z, Kd).call(this, true);
        break;
      case 1:
      case 3:
        b(this, Z, Kd).call(this, false);
        break;
    }
  }
  select() {
    var e;
    super.select(), n(this, ke) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, ke), { rootClass: { hovered: false, selected: true } }));
  }
  unselect() {
    var e;
    super.unselect(), n(this, ke) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, ke), { rootClass: { selected: false } }), n(this, me) || b(this, Z, Kd).call(this, false));
  }
  get _mustFixPosition() {
    return !n(this, me);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, fs), { rootClass: { hidden: !e } }), this.parent.drawLayer.updateProperties(n(this, ke), { rootClass: { hidden: !e } }));
  }
  static startHighlighting(e, s, { target: i, x: r, y: a }) {
    const { x: o, y: l, width: h, height: c } = i.getBoundingClientRect(), u = new AbortController(), p = e.combinedSignal(u), m = (A) => {
      u.abort(), b(this, Os, jb).call(this, e, A);
    };
    window.addEventListener("blur", m, { signal: p }), window.addEventListener("pointerup", m, { signal: p }), window.addEventListener("pointerdown", Nt, { capture: true, passive: false, signal: p }), window.addEventListener("contextmenu", vs, { signal: p }), i.addEventListener("pointermove", b(this, Os, Ub).bind(this, e), { signal: p }), this._freeHighlight = new dp({ x: r, y: a }, [o, l, h, c], e.scale, this._defaultThickness / 2, s, 1e-3), { id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = e.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: this._defaultColor, "fill-opacity": this._defaultOpacity }, rootClass: { highlight: true, free: true }, path: { d: this._freeHighlight.toSVGPath() } }, true, true);
  }
  static async deserialize(e, s, i) {
    var y, v, w, S;
    let r = null;
    if (e instanceof mb) {
      const { data: { quadPoints: E, rect: _, rotation: C, id: x, color: T, opacity: P, popupRef: k, richText: D, contentsObj: L, creationDate: F, modificationDate: V }, parent: { page: { pageNumber: O } } } = e;
      r = e = { annotationType: q.HIGHLIGHT, color: Array.from(T), opacity: P, quadPoints: E, boxes: null, pageIndex: O - 1, rect: _.slice(0), rotation: C, annotationElementId: x, id: x, deleted: false, popupRef: k, richText: D, comment: (L == null ? void 0 : L.str) || null, creationDate: F, modificationDate: V };
    } else if (e instanceof Xp) {
      const { data: { inkLists: E, rect: _, rotation: C, id: x, color: T, borderStyle: { rawWidth: P }, popupRef: k, richText: D, contentsObj: L, creationDate: F, modificationDate: V }, parent: { page: { pageNumber: O } } } = e;
      r = e = { annotationType: q.HIGHLIGHT, color: Array.from(T), thickness: P, inkLists: E, boxes: null, pageIndex: O - 1, rect: _.slice(0), rotation: C, annotationElementId: x, id: x, deleted: false, popupRef: k, richText: D, comment: (L == null ? void 0 : L.str) || null, creationDate: F, modificationDate: V };
    }
    const { color: a, quadPoints: o, inkLists: l, opacity: h } = e, c = await super.deserialize(e, s, i);
    c.color = $.makeHexColor(...a), c.opacity = h || 1, l && f(c, Ls, e.thickness), c._initialData = r, e.comment && c.setCommentData(e);
    const [u, p] = c.pageDimensions, [m, A] = c.pageTranslation;
    if (o) {
      const E = f(c, gn, []);
      for (let _ = 0; _ < o.length; _ += 8) E.push({ x: (o[_] - m) / u, y: 1 - (o[_ + 1] - A) / p, width: (o[_ + 2] - o[_]) / u, height: (o[_ + 1] - o[_ + 5]) / p });
      b(y = c, Z, up).call(y), b(v = c, Z, Dr).call(v), c.rotate(c.rotation);
    } else if (l) {
      f(c, me, true);
      const E = l[0], _ = { x: E[0] - m, y: p - (E[1] - A) }, C = new dp(_, [0, 0, u, p], 1, n(c, Ls) / 2, true, 1e-3);
      for (let P = 0, k = E.length; P < k; P += 2) _.x = E[P] - m, _.y = p - (E[P + 1] - A), C.add(_);
      const { id: x, clipPathId: T } = s.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: c.color, "fill-opacity": c._defaultOpacity }, rootClass: { highlight: true, free: true }, path: { d: C.toSVGPath() } }, true, true);
      b(w = c, Z, Yd).call(w, { highlightOutlines: C.getOutlines(), highlightId: x, clipPathId: T }), b(S = c, Z, Dr).call(S), c.rotate(c.parentRotation);
    }
    return c;
  }
  serialize(e = false) {
    if (this.isEmpty() || e) return null;
    if (this.deleted) return this.serializeDeleted();
    const s = xt._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), i = super.serialize(e);
    return Object.assign(i, { color: s, opacity: this.opacity, thickness: n(this, Ls), quadPoints: b(this, Z, Bb).call(this), outlines: b(this, Z, Hb).call(this, i.rect) }), this.addComment(i), this.annotationElementId && !b(this, Z, $b).call(this, i) ? null : (i.id = this.annotationElementId, i);
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({ rect: this.getPDFRect(), popup: this.comment }), null);
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
};
Pl = /* @__PURE__ */ new WeakMap(), td = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), ed = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), sd = /* @__PURE__ */ new WeakMap(), id = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap(), us = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), me = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ new WeakMap(), Rl = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), Ml = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), nd = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakSet(), up = function() {
  const e = new hp(n(this, gn), 1e-3);
  f(this, us, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, us).box;
  const s = new hp(n(this, gn), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  f(this, qe, s.getOutlines());
  const { firstPoint: i } = n(this, us);
  f(this, kl, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
  const { lastPoint: r } = n(this, qe);
  f(this, Rl, [(r[0] - this.x) / this.width, (r[1] - this.y) / this.height]);
}, Yd = function({ highlightOutlines: e, highlightId: s, clipPathId: i }) {
  var p, m;
  if (f(this, us, e), f(this, qe, e.getNewOutline(n(this, Ls) / 2 + 1.5, 25e-4)), s >= 0) f(this, fs, s), f(this, Da, i), this.parent.drawLayer.finalizeDraw(s, { bbox: e.box, path: { d: e.toSVGPath() } }), f(this, ke, this.parent.drawLayer.drawOutline({ rootClass: { highlightOutline: true, free: true }, bbox: n(this, qe).box, path: { d: n(this, qe).toSVGPath() } }, true));
  else if (this.parent) {
    const A = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, fs), { bbox: b(p = ct, Os, ao).call(p, n(this, us).box, (A - this.rotation + 360) % 360), path: { d: e.toSVGPath() } }), this.parent.drawLayer.updateProperties(n(this, ke), { bbox: b(m = ct, Os, ao).call(m, n(this, qe).box, A), path: { d: n(this, qe).toSVGPath() } });
  }
  const [a, o, l, h] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [A, y] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * y / A, this.height = h * A / y;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [A, y] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * y / A, this.height = h * A / y;
      break;
    }
  }
  const { firstPoint: c } = e;
  f(this, kl, [(c[0] - a) / l, (c[1] - o) / h]);
  const { lastPoint: u } = n(this, qe);
  f(this, Rl, [(u[0] - a) / l, (u[1] - o) / h]);
}, Ib = function(e) {
  const s = (a, o) => {
    this.color = a, this.opacity = o, this.onUpdatedColor();
  }, i = this.color, r = this.opacity;
  this.addCommands({ cmd: s.bind(this, e, ct._defaultOpacity), undo: s.bind(this, i, r), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: it.HIGHLIGHT_COLOR, overwriteIfSameType: true, keepUndo: true }), this._reportTelemetry({ action: "color_changed", color: this._uiManager.getNonHCMColorName(e) }, true);
}, Fb = function(e) {
  const s = n(this, Ls), i = (r) => {
    f(this, Ls, r), b(this, Z, Nb).call(this, r);
  };
  this.addCommands({ cmd: i.bind(this, e), undo: i.bind(this, s), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: it.INK_THICKNESS, overwriteIfSameType: true, keepUndo: true }), this._reportTelemetry({ action: "thickness_changed", thickness: e }, true);
}, Nb = function(e) {
  n(this, me) && (b(this, Z, Yd).call(this, { highlightOutlines: n(this, us).getNewOutline(e / 2) }), this.fixAndSetPosition(), this.setDims(this.width, this.height));
}, fp = function() {
  n(this, fs) === null || !this.parent || (this.parent.drawLayer.remove(n(this, fs)), f(this, fs, null), this.parent.drawLayer.remove(n(this, ke)), f(this, ke, null));
}, Dr = function(e = this.parent) {
  n(this, fs) === null && ({ id: Kt(this, fs)._, clipPathId: Kt(this, Da)._ } = e.drawLayer.draw({ bbox: n(this, us).box, root: { viewBox: "0 0 1 1", fill: this.color, "fill-opacity": this.opacity }, rootClass: { highlight: true, free: n(this, me) }, path: { d: n(this, us).toSVGPath() } }, false, true), f(this, ke, e.drawLayer.drawOutline({ rootClass: { highlightOutline: true, free: n(this, me) }, bbox: n(this, qe).box, path: { d: n(this, qe).toSVGPath() } }, n(this, me))), n(this, La) && (n(this, La).style.clipPath = n(this, Da)));
}, Os = /* @__PURE__ */ new WeakSet(), ao = function([e, s, i, r], a) {
  switch (a) {
    case 90:
      return [1 - s - r, e, r, i];
    case 180:
      return [1 - e - i, 1 - s - r, i, r];
    case 270:
      return [s, 1 - e - i, r, i];
  }
  return [e, s, i, r];
}, Ob = function(e) {
  ct._keyboardManager.exec(this, e);
}, Kd = function(e) {
  if (!n(this, Pl)) return;
  const s = window.getSelection();
  e ? s.setPosition(n(this, Pl), n(this, td)) : s.setPosition(n(this, sd), n(this, id));
}, Jd = function() {
  return n(this, me) ? this.rotation : 0;
}, Bb = function() {
  if (n(this, me)) return null;
  const [e, s] = this.pageDimensions, [i, r] = this.pageTranslation, a = n(this, gn), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const { x: h, y: c, width: u, height: p } of a) {
    const m = h * e + i, A = (1 - c) * s + r;
    o[l] = o[l + 4] = m, o[l + 1] = o[l + 3] = A, o[l + 2] = o[l + 6] = m + u * e, o[l + 5] = o[l + 7] = A - p * s, l += 8;
  }
  return o;
}, Hb = function(e) {
  return n(this, us).serialize(e, b(this, Z, Jd).call(this));
}, Ub = function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, { path: { d: this._freeHighlight.toSVGPath() } });
}, jb = function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, false, { highlightId: this._freeHighlightId, highlightOutlines: this._freeHighlight.getOutlines(), clipPathId: this._freeHighlightClipId, methodOfCreation: "main_toolbar" }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, $b = function(e) {
  const { color: s } = this._initialData;
  return this.hasEditedComment || e.color.some((i, r) => i !== s[r]);
}, g(ct, Os), R(ct, "_defaultColor", null), R(ct, "_defaultOpacity", 1), R(ct, "_defaultThickness", 12), R(ct, "_type", "highlight"), R(ct, "_editorType", q.HIGHLIGHT), R(ct, "_freeHighlightId", -1), R(ct, "_freeHighlight", null), R(ct, "_freeHighlightClipId", "");
let pu = ct;
var Ia;
class zb {
  constructor() {
    g(this, Ia, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t) for (const [e, s] of Object.entries(t)) e.startsWith("_") || this.updateProperty(e, s);
  }
  updateSVGProperty(t, e) {
    n(this, Ia)[t] = e;
  }
  toSVGProperties() {
    const t = n(this, Ia);
    return f(this, Ia, /* @__PURE__ */ Object.create(null)), { root: t };
  }
  reset() {
    f(this, Ia, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    _t("Not implemented");
  }
}
Ia = /* @__PURE__ */ new WeakMap();
var ps, Dl, re, Fa, Na, ur, fr, pr, Oa, ot, pp, gp, mp, gh, Gb, Qd, mh, oo;
const z = class z2 extends xt {
  constructor(e) {
    super(e);
    g(this, ot);
    g(this, ps, null);
    g(this, Dl);
    R(this, "_colorPicker", null);
    R(this, "_drawId", null);
    f(this, Dl, e.mustBeCommitted || false), this._addOutlines(e);
  }
  onUpdatedColor() {
    var e;
    (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }
  _addOutlines(e) {
    e.drawOutlines && (b(this, ot, pp).call(this, e), b(this, ot, gh).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const i = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(s)) i.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    _t("Not implemented");
  }
  static get typesMap() {
    _t("Not implemented");
  }
  static get isDrawer() {
    return true;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static updateDefaultParams(e, s) {
    const i = this.typesMap.get(e);
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (n(z2, re).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, s) {
    const i = this.constructor.typesMap.get(e);
    i && this._updateProperty(e, i, s);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], s = this._defaultDrawingOptions;
    for (const [i, r] of this.typesMap) e.push([i, s[r]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], { _drawingOptions: s } = this;
    for (const [i, r] of this.constructor.typesMap) e.push([i, s[r]]);
    return e;
  }
  _updateProperty(e, s, i) {
    const r = this._drawingOptions, a = r[s], o = (l) => {
      var c;
      r.updateProperty(s, l);
      const h = n(this, ps).updateProperty(s, l);
      h && b(this, ot, mh).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && this.onUpdatedColor();
    };
    this.addCommands({ cmd: o.bind(this, i), undo: o.bind(this, a), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: e, overwriteIfSameType: true, keepUndo: true });
  }
  _onResizing() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, z2._mergeSVGProperties(n(this, ps).getPathResizingSVGProperties(b(this, ot, Qd).call(this)), { bbox: b(this, ot, oo).call(this) }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, z2._mergeSVGProperties(n(this, ps).getPathResizedSVGProperties(b(this, ot, Qd).call(this)), { bbox: b(this, ot, oo).call(this) }));
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, { bbox: b(this, ot, oo).call(this) });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, z2._mergeSVGProperties(n(this, ps).getPathTranslatedSVGProperties(b(this, ot, Qd).call(this), this.parentDimensions), { bbox: b(this, ot, oo).call(this) }));
  }
  _onStartDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, { rootClass: { moving: true } });
  }
  _onStopDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, { rootClass: { moving: false } });
  }
  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", false);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return true;
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = true, n(this, Dl) && (f(this, Dl, false), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    b(this, ot, mp).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, ot, gh).call(this), b(this, ot, mh).call(this, n(this, ps).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = false;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), b(this, ot, mp).call(this)) : e && (this._uiManager.addShouldRescale(this), b(this, ot, gh).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, z2._mergeSVGProperties({ bbox: b(this, ot, oo).call(this) }, n(this, ps).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && b(this, ot, mh).call(this, n(this, ps).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div) return this.div;
    let e, s;
    this._isCopy && (e = this.x, s = this.y);
    const i = super.render();
    i.classList.add("draw");
    const r = document.createElement("div");
    return i.append(r), r.setAttribute("aria-hidden", "true"), r.className = "internal", this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(e, s), i;
  }
  static createDrawerInstance(e, s, i, r, a) {
    _t("Not implemented");
  }
  static startDrawing(e, s, i, r) {
    var v;
    const { target: a, offsetX: o, offsetY: l, pointerId: h, pointerType: c } = r;
    if (n(z2, fr) && n(z2, fr) !== c) return;
    const { viewport: { rotation: u } } = e, { width: p, height: m } = a.getBoundingClientRect(), A = f(z2, Fa, new AbortController()), y = e.combinedSignal(A);
    if (n(z2, ur) || f(z2, ur, h), n(z2, fr) ?? f(z2, fr, c), window.addEventListener("pointerup", (w) => {
      var S;
      n(z2, ur) === w.pointerId ? this._endDraw(w) : (S = n(z2, pr)) == null || S.delete(w.pointerId);
    }, { signal: y }), window.addEventListener("pointercancel", (w) => {
      var S;
      n(z2, ur) === w.pointerId ? this._currentParent.endDrawingSession() : (S = n(z2, pr)) == null || S.delete(w.pointerId);
    }, { signal: y }), window.addEventListener("pointerdown", (w) => {
      n(z2, fr) === w.pointerType && ((n(z2, pr) || f(z2, pr, /* @__PURE__ */ new Set())).add(w.pointerId), n(z2, re).isCancellable() && (n(z2, re).removeLastElement(), n(z2, re).isEmpty() ? this._currentParent.endDrawingSession(true) : this._endDraw(null)));
    }, { capture: true, passive: false, signal: y }), window.addEventListener("contextmenu", vs, { signal: y }), a.addEventListener("pointermove", this._drawMove.bind(this), { signal: y }), a.addEventListener("touchmove", (w) => {
      w.timeStamp === n(z2, Oa) && Nt(w);
    }, { signal: y }), e.toggleDrawing(), (v = s._editorUndoBar) == null || v.hide(), n(z2, re)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(z2, re).startNew(o, l, p, m, u));
      return;
    }
    s.updateUIForDefaultProperties(this), f(z2, re, this.createDrawerInstance(o, l, p, m, u)), f(z2, Na, this.getDefaultDrawingOptions()), this._currentParent = e, { id: this._currentDrawId } = e.drawLayer.draw(this._mergeSVGProperties(n(z2, Na).toSVGProperties(), n(z2, re).defaultSVGProperties), true, false);
  }
  static _drawMove(e) {
    var a;
    if (f(z2, Oa, -1), !n(z2, re)) return;
    const { offsetX: s, offsetY: i, pointerId: r } = e;
    if (n(z2, ur) === r) {
      if (((a = n(z2, pr)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(z2, re).add(s, i)), f(z2, Oa, e.timeStamp), Nt(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, f(z2, re, null), f(z2, Na, null), f(z2, fr, null), f(z2, Oa, NaN)), n(z2, Fa) && (n(z2, Fa).abort(), f(z2, Fa, null), f(z2, ur, NaN), f(z2, pr, null));
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(true), this._cleanup(false), (e == null ? void 0 : e.target) === s.div && s.drawLayer.updateProperties(this._currentDrawId, n(z2, re).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const i = n(z2, re), r = this._currentDrawId, a = i.getLastElement();
        s.addCommands({ cmd: () => {
          s.drawLayer.updateProperties(r, i.setLastElement(a));
        }, undo: () => {
          s.drawLayer.updateProperties(r, i.removeLastElement());
        }, mustExec: false, type: it.DRAW_STEP });
        return;
      }
      this.endDrawing(false);
    }
  }
  static endDrawing(e) {
    const s = this._currentParent;
    if (!s) return null;
    if (s.toggleDrawing(true), s.cleanUndoStack(it.DRAW_STEP), !n(z2, re).isEmpty()) {
      const { pageDimensions: [i, r], scale: a } = s, o = s.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, false, { drawId: this._currentDrawId, drawOutlines: n(z2, re).getOutlines(i * a, r * a, a, this._INNER_MARGIN), drawingOptions: n(z2, Na), mustBeCommitted: !e });
      return this._cleanup(true), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(true), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, i, r, a, o) {
    _t("Not implemented");
  }
  static async deserialize(e, s, i) {
    var u, p;
    const { rawDims: { pageWidth: r, pageHeight: a, pageX: o, pageY: l } } = s.viewport, h = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e), c = await super.deserialize(e, s, i);
    return c.createDrawingOptions(e), b(u = c, ot, pp).call(u, { drawOutlines: h }), b(p = c, ot, gh).call(p), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [r, a] = this.pageDimensions;
    return n(this, ps).serialize([s, i, r, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({ rect: this.getPDFRect() }), null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
};
ps = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ new WeakMap(), Na = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), Oa = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakSet(), pp = function({ drawOutlines: e, drawId: s, drawingOptions: i }) {
  f(this, ps, e), this._drawingOptions || (this._drawingOptions = i), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = b(this, ot, gp).call(this, e, this.parent), b(this, ot, mh).call(this, e.box);
}, gp = function(e, s) {
  const { id: i } = s.drawLayer.draw(z._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), false, false);
  return i;
}, mp = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, gh = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = b(this, ot, gp).call(this, n(this, ps), e);
  }
}, Gb = function([e, s, i, r]) {
  const { parentDimensions: [a, o], rotation: l } = this;
  switch (l) {
    case 90:
      return [s, 1 - e, i * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [1 - s, e, i * (o / a), r * (a / o)];
    default:
      return [e, s, i, r];
  }
}, Qd = function() {
  const { x: e, y: s, width: i, height: r, parentDimensions: [a, o], rotation: l } = this;
  switch (l) {
    case 90:
      return [1 - s, e, i * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [s, 1 - e, i * (a / o), r * (o / a)];
    default:
      return [e, s, i, r];
  }
}, mh = function(e) {
  [this.x, this.y, this.width, this.height] = b(this, ot, Gb).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, oo = function() {
  const { x: e, y: s, width: i, height: r, rotation: a, parentRotation: o, parentDimensions: [l, h] } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - s - r, e, r, i];
    case 2:
      return [1 - e - i, 1 - s - r, i, r];
    case 3:
      return [s, 1 - e - i, r, i];
    case 4:
      return [e, s - i * (l / h), r * (h / l), i * (l / h)];
    case 5:
      return [1 - s, e, i * (l / h), r * (h / l)];
    case 6:
      return [1 - e - r * (h / l), 1 - s, r * (h / l), i * (l / h)];
    case 7:
      return [s - i * (l / h), 1 - e - r * (h / l), i * (l / h), r * (h / l)];
    case 8:
      return [e - i, s - r, i, r];
    case 9:
      return [1 - s, e - i, r, i];
    case 10:
      return [1 - e, 1 - s, i, r];
    case 11:
      return [s - r, 1 - e, r, i];
    case 12:
      return [e - r * (h / l), s, r * (h / l), i * (l / h)];
    case 13:
      return [1 - s - i * (l / h), e - r * (h / l), i * (l / h), r * (h / l)];
    case 14:
      return [1 - e, 1 - s - i * (l / h), r * (h / l), i * (l / h)];
    case 15:
      return [s, 1 - e, i * (l / h), r * (h / l)];
    default:
      return [e, s, i, r];
  }
}, R(z, "_currentDrawId", -1), R(z, "_currentParent", null), g(z, re, null), g(z, Fa, null), g(z, Na, null), g(z, ur, NaN), g(z, fr, null), g(z, pr, null), g(z, Oa, NaN), R(z, "_INNER_MARGIN", 3);
let gu = z;
var xi, ae, oe, Ba, Ll, Fe, be, Is, Ha, Ua, ja, Il, Zd;
class Tw {
  constructor(t, e, s, i, r, a) {
    g(this, Il);
    g(this, xi, new Float64Array(6));
    g(this, ae);
    g(this, oe);
    g(this, Ba);
    g(this, Ll);
    g(this, Fe);
    g(this, be, "");
    g(this, Is, 0);
    g(this, Ha, new pd());
    g(this, Ua);
    g(this, ja);
    f(this, Ua, s), f(this, ja, i), f(this, Ba, r), f(this, Ll, a), [t, e] = b(this, Il, Zd).call(this, t, e);
    const o = f(this, ae, [NaN, NaN, NaN, NaN, t, e]);
    f(this, Fe, [t, e]), f(this, oe, [{ line: o, points: n(this, Fe) }]), n(this, xi).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && f(this, Ll, e);
  }
  isEmpty() {
    return !n(this, oe) || n(this, oe).length === 0;
  }
  isCancellable() {
    return n(this, Fe).length <= 10;
  }
  add(t, e) {
    [t, e] = b(this, Il, Zd).call(this, t, e);
    const [s, i, r, a] = n(this, xi).subarray(2, 6), o = t - r, l = e - a;
    return Math.hypot(n(this, Ua) * o, n(this, ja) * l) <= 2 ? null : (n(this, Fe).push(t, e), isNaN(s) ? (n(this, xi).set([r, a, t, e], 2), n(this, ae).push(NaN, NaN, NaN, NaN, t, e), { path: { d: this.toSVGPath() } }) : (isNaN(n(this, xi)[0]) && n(this, ae).splice(6, 6), n(this, xi).set([s, i, r, a, t, e], 0), n(this, ae).push(...j.createBezierPoints(s, i, r, a, t, e)), { path: { d: this.toSVGPath() } }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (n(this, Fe).length === 2 ? { path: { d: this.toSVGPath() } } : null);
  }
  startNew(t, e, s, i, r) {
    f(this, Ua, s), f(this, ja, i), f(this, Ba, r), [t, e] = b(this, Il, Zd).call(this, t, e);
    const a = f(this, ae, [NaN, NaN, NaN, NaN, t, e]);
    f(this, Fe, [t, e]);
    const o = n(this, oe).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, oe).push({ line: a, points: n(this, Fe) }), n(this, xi).set(a, 0), f(this, Is, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return n(this, oe).at(-1);
  }
  setLastElement(t) {
    return n(this, oe) ? (n(this, oe).push(t), f(this, ae, t.line), f(this, Fe, t.points), f(this, Is, 0), { path: { d: this.toSVGPath() } }) : n(this, Ha).setLastElement(t);
  }
  removeLastElement() {
    if (!n(this, oe)) return n(this, Ha).removeLastElement();
    n(this, oe).pop(), f(this, be, "");
    for (let t = 0, e = n(this, oe).length; t < e; t++) {
      const { line: s, points: i } = n(this, oe)[t];
      f(this, ae, s), f(this, Fe, i), f(this, Is, 0), this.toSVGPath();
    }
    return { path: { d: n(this, be) } };
  }
  toSVGPath() {
    const t = j.svgRound(n(this, ae)[4]), e = j.svgRound(n(this, ae)[5]);
    if (n(this, Fe).length === 2) return f(this, be, `${n(this, be)} M ${t} ${e} Z`), n(this, be);
    if (n(this, Fe).length <= 6) {
      const i = n(this, be).lastIndexOf("M");
      f(this, be, `${n(this, be).slice(0, i)} M ${t} ${e}`), f(this, Is, 6);
    }
    if (n(this, Fe).length === 4) {
      const i = j.svgRound(n(this, ae)[10]), r = j.svgRound(n(this, ae)[11]);
      return f(this, be, `${n(this, be)} L ${i} ${r}`), f(this, Is, 12), n(this, be);
    }
    const s = [];
    n(this, Is) === 0 && (s.push(`M ${t} ${e}`), f(this, Is, 6));
    for (let i = n(this, Is), r = n(this, ae).length; i < r; i += 6) {
      const [a, o, l, h, c, u] = n(this, ae).slice(i, i + 6).map(j.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
    }
    return f(this, be, n(this, be) + s.join(" ")), f(this, Is, n(this, ae).length), n(this, be);
  }
  getOutlines(t, e, s, i) {
    const r = n(this, oe).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, Ha).build(n(this, oe), t, e, s, n(this, Ba), n(this, Ll), i), f(this, xi, null), f(this, ae, null), f(this, oe, null), f(this, be, null), n(this, Ha);
  }
  get defaultSVGProperties() {
    return { root: { viewBox: "0 0 10000 10000" }, rootClass: { draw: true }, bbox: [0, 0, 1, 1] };
  }
}
xi = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap(), Ll = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), be = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ new WeakMap(), Il = /* @__PURE__ */ new WeakSet(), Zd = function(t, e) {
  return j._normalizePoint(t, e, n(this, Ua), n(this, ja), n(this, Ba));
};
var Ne, rd, ad, gs, Ti, Pi, Fl, Nl, $a, Ae, Oi, Vb, Wb, Xb;
class pd extends j {
  constructor() {
    super(...arguments);
    g(this, Ae);
    g(this, Ne);
    g(this, rd, 0);
    g(this, ad);
    g(this, gs);
    g(this, Ti);
    g(this, Pi);
    g(this, Fl);
    g(this, Nl);
    g(this, $a);
  }
  build(e, s, i, r, a, o, l) {
    f(this, Ti, s), f(this, Pi, i), f(this, Fl, r), f(this, Nl, a), f(this, $a, o), f(this, ad, l ?? 0), f(this, gs, e), b(this, Ae, Wb).call(this);
  }
  get thickness() {
    return n(this, $a);
  }
  setLastElement(e) {
    return n(this, gs).push(e), { path: { d: this.toSVGPath() } };
  }
  removeLastElement() {
    return n(this, gs).pop(), { path: { d: this.toSVGPath() } };
  }
  toSVGPath() {
    const e = [];
    for (const { line: s } of n(this, gs)) {
      if (e.push(`M${j.svgRound(s[4])} ${j.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12 && isNaN(s[6])) {
        e.push(`L${j.svgRound(s[10])} ${j.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, r = s.length; i < r; i += 6) {
        const [a, o, l, h, c, u] = s.subarray(i, i + 6).map(j.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${c} ${u}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = [], [h, c, u, p] = b(this, Ae, Vb).call(this);
    let m, A, y, v, w, S, E, _, C;
    switch (n(this, Nl)) {
      case 0:
        C = j._rescale, m = e, A = s + r, y = i, v = -r, w = e + h * i, S = s + (1 - c - p) * r, E = e + (h + u) * i, _ = s + (1 - c) * r;
        break;
      case 90:
        C = j._rescaleAndSwap, m = e, A = s, y = i, v = r, w = e + c * i, S = s + h * r, E = e + (c + p) * i, _ = s + (h + u) * r;
        break;
      case 180:
        C = j._rescale, m = e + i, A = s, y = -i, v = r, w = e + (1 - h - u) * i, S = s + c * r, E = e + (1 - h) * i, _ = s + (c + p) * r;
        break;
      case 270:
        C = j._rescaleAndSwap, m = e + i, A = s + r, y = -i, v = -r, w = e + (1 - c - p) * i, S = s + (1 - h - u) * r, E = e + (1 - c) * i, _ = s + (1 - h) * r;
        break;
    }
    for (const { line: x, points: T } of n(this, gs)) o.push(C(x, m, A, y, v, a ? new Array(x.length) : null)), l.push(C(T, m, A, y, v, a ? new Array(T.length) : null));
    return { lines: o, points: l, rect: [w, S, E, _] };
  }
  static deserialize(e, s, i, r, a, { paths: { lines: o, points: l }, rotation: h, thickness: c }) {
    const u = [];
    let p, m, A, y, v;
    switch (h) {
      case 0:
        v = j._rescale, p = -e / i, m = s / r + 1, A = 1 / i, y = -1 / r;
        break;
      case 90:
        v = j._rescaleAndSwap, p = -s / r, m = -e / i, A = 1 / r, y = 1 / i;
        break;
      case 180:
        v = j._rescale, p = e / i + 1, m = -s / r, A = -1 / i, y = 1 / r;
        break;
      case 270:
        v = j._rescaleAndSwap, p = s / r + 1, m = e / i + 1, A = -1 / r, y = -1 / i;
        break;
    }
    if (!o) {
      o = [];
      for (const S of l) {
        const E = S.length;
        if (E === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1]]));
          continue;
        }
        if (E === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1], NaN, NaN, NaN, NaN, S[2], S[3]]));
          continue;
        }
        const _ = new Float32Array(3 * (E - 2));
        o.push(_);
        let [C, x, T, P] = S.subarray(0, 4);
        _.set([NaN, NaN, NaN, NaN, C, x], 0);
        for (let k = 4; k < E; k += 2) {
          const D = S[k], L = S[k + 1];
          _.set(j.createBezierPoints(C, x, T, P, D, L), (k - 2) * 3), [C, x, T, P] = [T, P, D, L];
        }
      }
    }
    for (let S = 0, E = o.length; S < E; S++) u.push({ line: v(o[S].map((_) => _ ?? NaN), p, m, A, y), points: v(l[S].map((_) => _ ?? NaN), p, m, A, y) });
    const w = new this.prototype.constructor();
    return w.build(u, i, r, 1, h, c, a), w;
  }
  get box() {
    return n(this, Ne);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? b(this, Ae, Xb).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [r, a] = b(this, Ae, Oi).call(this);
    f(this, Ti, e), f(this, Pi, s), f(this, Fl, i);
    const [o, l] = b(this, Ae, Oi).call(this), h = o - r, c = l - a, u = n(this, Ne);
    return u[0] -= h, u[1] -= c, u[2] += 2 * h, u[3] += 2 * c, u;
  }
  updateRotation(e) {
    return f(this, rd, e), { path: { transform: this.rotationTransform } };
  }
  get viewBox() {
    return n(this, Ne).map(j.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = n(this, Ne);
    return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${j.svgRound(e)} ${j.svgRound(s)}` } };
  }
  get rotationTransform() {
    const [, , e, s] = n(this, Ne);
    let i = 0, r = 0, a = 0, o = 0, l = 0, h = 0;
    switch (n(this, rd)) {
      case 90:
        r = s / e, a = -e / s, l = e;
        break;
      case 180:
        i = -1, o = -1, l = e, h = s;
        break;
      case 270:
        r = -s / e, a = e / s, h = s;
        break;
      default:
        return "";
    }
    return `matrix(${i} ${r} ${a} ${o} ${j.svgRound(l)} ${j.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, Ae, Oi).call(this), [l, h, c, u] = n(this, Ne);
    if (Math.abs(c - a) <= j.PRECISION || Math.abs(u - o) <= j.PRECISION) {
      const v = e + i / 2 - (l + c / 2), w = s + r / 2 - (h + u / 2);
      return { path: { "transform-origin": `${j.svgRound(e)} ${j.svgRound(s)}`, transform: `${this.rotationTransform} translate(${v} ${w})` } };
    }
    const p = (i - 2 * a) / (c - 2 * a), m = (r - 2 * o) / (u - 2 * o), A = c / i, y = u / r;
    return { path: { "transform-origin": `${j.svgRound(l)} ${j.svgRound(h)}`, transform: `${this.rotationTransform} scale(${A} ${y}) translate(${j.svgRound(a)} ${j.svgRound(o)}) scale(${p} ${m}) translate(${j.svgRound(-a)} ${j.svgRound(-o)})` } };
  }
  getPathResizedSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, Ae, Oi).call(this), l = n(this, Ne), [h, c, u, p] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = r, Math.abs(u - a) <= j.PRECISION || Math.abs(p - o) <= j.PRECISION) {
      const w = e + i / 2 - (h + u / 2), S = s + r / 2 - (c + p / 2);
      for (const { line: E, points: _ } of n(this, gs)) j._translate(E, w, S, E), j._translate(_, w, S, _);
      return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${j.svgRound(e)} ${j.svgRound(s)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
    }
    const m = (i - 2 * a) / (u - 2 * a), A = (r - 2 * o) / (p - 2 * o), y = -m * (h + a) + e + a, v = -A * (c + o) + s + o;
    if (m !== 1 || A !== 1 || y !== 0 || v !== 0) for (const { line: w, points: S } of n(this, gs)) j._rescale(w, y, v, m, A, w), j._rescale(S, y, v, m, A, S);
    return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${j.svgRound(e)} ${j.svgRound(s)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [r, a] = i, o = n(this, Ne), l = e - o[0], h = s - o[1];
    if (n(this, Ti) === r && n(this, Pi) === a) for (const { line: c, points: u } of n(this, gs)) j._translate(c, l, h, c), j._translate(u, l, h, u);
    else {
      const c = n(this, Ti) / r, u = n(this, Pi) / a;
      f(this, Ti, r), f(this, Pi, a);
      for (const { line: p, points: m } of n(this, gs)) j._rescale(p, l, h, c, u, p), j._rescale(m, l, h, c, u, m);
      o[2] *= c, o[3] *= u;
    }
    return o[0] = e, o[1] = s, { root: { viewBox: this.viewBox }, path: { d: this.toSVGPath(), "transform-origin": `${j.svgRound(e)} ${j.svgRound(s)}` } };
  }
  get defaultSVGProperties() {
    const e = n(this, Ne);
    return { root: { viewBox: this.viewBox }, rootClass: { draw: true }, path: { d: this.toSVGPath(), "transform-origin": `${j.svgRound(e[0])} ${j.svgRound(e[1])}`, transform: this.rotationTransform || null }, bbox: e };
  }
}
Ne = /* @__PURE__ */ new WeakMap(), rd = /* @__PURE__ */ new WeakMap(), ad = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap(), Fl = /* @__PURE__ */ new WeakMap(), Nl = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakSet(), Oi = function(e = n(this, $a)) {
  const s = n(this, ad) + e / 2 * n(this, Fl);
  return n(this, Nl) % 180 === 0 ? [s / n(this, Ti), s / n(this, Pi)] : [s / n(this, Pi), s / n(this, Ti)];
}, Vb = function() {
  const [e, s, i, r] = n(this, Ne), [a, o] = b(this, Ae, Oi).call(this, 0);
  return [e + a, s + o, i - 2 * a, r - 2 * o];
}, Wb = function() {
  const e = f(this, Ne, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const { line: r } of n(this, gs)) {
    if (r.length <= 12) {
      for (let l = 4, h = r.length; l < h; l += 6) $.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4], o = r[5];
    for (let l = 6, h = r.length; l < h; l += 6) {
      const [c, u, p, m, A, y] = r.subarray(l, l + 6);
      $.bezierBoundingBox(a, o, c, u, p, m, A, y, e), a = A, o = y;
    }
  }
  const [s, i] = b(this, Ae, Oi).call(this);
  e[0] = Re(e[0] - s, 0, 1), e[1] = Re(e[1] - i, 0, 1), e[2] = Re(e[2] + s, 0, 1), e[3] = Re(e[3] + i, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, Xb = function(e) {
  const [s, i] = b(this, Ae, Oi).call(this);
  f(this, $a, e);
  const [r, a] = b(this, Ae, Oi).call(this), [o, l] = [r - s, a - i], h = n(this, Ne);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
class $u extends zb {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({ fill: "none", stroke: xt._defaultLineColor, "stroke-opacity": 1, "stroke-width": 1, "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": 10 });
  }
  updateSVGProperty(t, e) {
    t === "stroke-width" && (e ?? (e = this["stroke-width"]), e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
  }
  clone() {
    const t = new $u(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var Fu, qb;
const fo = class fo2 extends gu {
  constructor(e) {
    super({ ...e, name: "inkEditor" });
    g(this, Fu);
    this._willKeepAspectRatio = true, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(e, s) {
    xt.initialize(e, s), this._defaultDrawingOptions = new $u(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return true;
  }
  static get typesMap() {
    return Q(this, "typesMap", /* @__PURE__ */ new Map([[it.INK_THICKNESS, "stroke-width"], [it.INK_COLOR, "stroke"], [it.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, r, a) {
    return new Tw(e, s, i, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return pd.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    let r = null;
    if (e instanceof Xp) {
      const { data: { inkLists: o, rect: l, rotation: h, id: c, color: u, opacity: p, borderStyle: { rawWidth: m }, popupRef: A, richText: y, contentsObj: v, creationDate: w, modificationDate: S }, parent: { page: { pageNumber: E } } } = e;
      r = e = { annotationType: q.INK, color: Array.from(u), thickness: m, opacity: p, paths: { points: o }, boxes: null, pageIndex: E - 1, rect: l.slice(0), rotation: h, annotationElementId: c, id: c, deleted: false, popupRef: A, richText: y, comment: (v == null ? void 0 : v.str) || null, creationDate: w, modificationDate: S };
    }
    const a = await super.deserialize(e, s, i);
    return a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new uu(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return it.INK_COLOR;
  }
  get color() {
    return this._drawingOptions.stroke;
  }
  get opacity() {
    return this._drawingOptions["stroke-opacity"];
  }
  onScaleChanging() {
    if (!this.parent) return;
    super.onScaleChanging();
    const { _drawId: e, _drawingOptions: s, parent: i } = this;
    s.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(e, s.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({ color: e, thickness: s, opacity: i }) {
    this._drawingOptions = fo2.getDefaultDrawingOptions({ stroke: $.makeHexColor(...e), "stroke-width": s, "stroke-opacity": i });
  }
  serialize(e = false) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const { lines: s, points: i } = this.serializeDraw(e), { _drawingOptions: { stroke: r, "stroke-opacity": a, "stroke-width": o } } = this, l = Object.assign(super.serialize(e), { color: xt._colorManager.convert(r), opacity: a, thickness: o, paths: { lines: s, points: i } });
    return this.addComment(l), e ? (l.isCopy = true, l) : this.annotationElementId && !b(this, Fu, qb).call(this, l) ? null : (l.id = this.annotationElementId, l);
  }
  renderAnnotationElement(e) {
    if (this.deleted) return e.hide(), null;
    const { points: s, rect: i } = this.serializeDraw(false);
    return e.updateEdited({ rect: i, thickness: this._drawingOptions["stroke-width"], points: s, popup: this.comment }), null;
  }
};
Fu = /* @__PURE__ */ new WeakSet(), qb = function(e) {
  const { color: s, thickness: i, opacity: r, pageIndex: a } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== r || e.pageIndex !== a;
}, R(fo, "_type", "ink"), R(fo, "_editorType", q.INK), R(fo, "_defaultDrawingOptions", null);
let bp = fo;
class yp extends pd {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
}
const xd = 8, Jl = 3;
var za, dt, Ap, Qs, Yb, Kb, wp, tu, Jb, Qb, Zb, vp, Ep, ty;
class Di {
  static extractContoursFromText(t, { fontFamily: e, fontStyle: s, fontWeight: i }, r, a, o, l) {
    let h = new OffscreenCanvas(1, 1), c = h.getContext("2d", { alpha: false });
    const u = 200, p = c.font = `${s} ${i} ${u}px ${e}`, { actualBoundingBoxLeft: m, actualBoundingBoxRight: A, actualBoundingBoxAscent: y, actualBoundingBoxDescent: v, fontBoundingBoxAscent: w, fontBoundingBoxDescent: S, width: E } = c.measureText(t), _ = 1.5, C = Math.ceil(Math.max(Math.abs(m) + Math.abs(A) || 0, E) * _), x = Math.ceil(Math.max(Math.abs(y) + Math.abs(v) || u, Math.abs(w) + Math.abs(S) || u) * _);
    h = new OffscreenCanvas(C, x), c = h.getContext("2d", { alpha: true, willReadFrequently: true }), c.font = p, c.filter = "grayscale(1)", c.fillStyle = "white", c.fillRect(0, 0, C, x), c.fillStyle = "black", c.fillText(t, C * (_ - 1) / 2, x * (3 - _) / 2);
    const T = b(this, dt, vp).call(this, c.getImageData(0, 0, C, x).data), P = b(this, dt, Zb).call(this, T), k = b(this, dt, Ep).call(this, P), D = b(this, dt, wp).call(this, T, C, x, k);
    return this.processDrawnLines({ lines: { curves: D, width: C, height: x }, pageWidth: r, pageHeight: a, rotation: o, innerMargin: l, mustSmooth: true, areContours: true });
  }
  static process(t, e, s, i, r) {
    const [a, o, l] = b(this, dt, ty).call(this, t), [h, c] = b(this, dt, Qb).call(this, a, o, l, Math.hypot(o, l) * n(this, za).sigmaSFactor, n(this, za).sigmaR, n(this, za).kernelSize), u = b(this, dt, Ep).call(this, c), p = b(this, dt, wp).call(this, h, o, l, u);
    return this.processDrawnLines({ lines: { curves: p, width: o, height: l }, pageWidth: e, pageHeight: s, rotation: i, innerMargin: r, mustSmooth: true, areContours: true });
  }
  static processDrawnLines({ lines: t, pageWidth: e, pageHeight: s, rotation: i, innerMargin: r, mustSmooth: a, areContours: o }) {
    i % 180 !== 0 && ([e, s] = [s, e]);
    const { curves: l, width: h, height: c } = t, u = t.thickness ?? 0, p = [], m = Math.min(e / h, s / c), A = m / e, y = m / s, v = [];
    for (const { points: S } of l) {
      const E = a ? b(this, dt, Jb).call(this, S) : S;
      if (!E) continue;
      v.push(E);
      const _ = E.length, C = new Float32Array(_), x = new Float32Array(3 * (_ === 2 ? 2 : _ - 2));
      if (p.push({ line: x, points: C }), _ === 2) {
        C[0] = E[0] * A, C[1] = E[1] * y, x.set([NaN, NaN, NaN, NaN, C[0], C[1]], 0);
        continue;
      }
      let [T, P, k, D] = E;
      T *= A, P *= y, k *= A, D *= y, C.set([T, P, k, D], 0), x.set([NaN, NaN, NaN, NaN, T, P], 0);
      for (let L = 4; L < _; L += 2) {
        const F = C[L] = E[L] * A, V = C[L + 1] = E[L + 1] * y;
        x.set(j.createBezierPoints(T, P, k, D, F, V), (L - 2) * 3), [T, P, k, D] = [k, D, F, V];
      }
    }
    if (p.length === 0) return null;
    const w = o ? new yp() : new pd();
    return w.build(p, e, s, 1, i, o ? 0 : u, r), { outline: w, newCurves: v, areContours: o, thickness: u, width: h, height: c };
  }
  static async compressSignature({ outlines: t, areContours: e, thickness: s, width: i, height: r }) {
    let a = 1 / 0, o = -1 / 0, l = 0;
    for (const E of t) {
      l += E.length;
      for (let _ = 2, C = E.length; _ < C; _++) {
        const x = E[_] - E[_ - 2];
        a = Math.min(a, x), o = Math.max(o, x);
      }
    }
    let h;
    a >= -128 && o <= 127 ? h = Int8Array : a >= -32768 && o <= 32767 ? h = Int16Array : h = Int32Array;
    const c = t.length, u = xd + Jl * c, p = new Uint32Array(u);
    let m = 0;
    p[m++] = u * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * c) * h.BYTES_PER_ELEMENT, p[m++] = 0, p[m++] = i, p[m++] = r, p[m++] = e ? 0 : 1, p[m++] = Math.max(0, Math.floor(s ?? 0)), p[m++] = c, p[m++] = h.BYTES_PER_ELEMENT;
    for (const E of t) p[m++] = E.length - 2, p[m++] = E[0], p[m++] = E[1];
    const A = new CompressionStream("deflate-raw"), y = A.writable.getWriter();
    await y.ready, y.write(p);
    const v = h.prototype.constructor;
    for (const E of t) {
      const _ = new v(E.length - 2);
      for (let C = 2, x = E.length; C < x; C++) _[C - 2] = E[C] - E[C - 2];
      y.write(_);
    }
    y.close();
    const w = await new Response(A.readable).arrayBuffer(), S = new Uint8Array(w);
    return Kg(S);
  }
  static async decompressSignature(t) {
    try {
      const e = Qy(t), { readable: s, writable: i } = new DecompressionStream("deflate-raw"), r = i.getWriter();
      await r.ready, r.write(e).then(async () => {
        await r.ready, await r.close();
      }).catch(() => {
      });
      let a = null, o = 0;
      for await (const E of s) a || (a = new Uint8Array(new Uint32Array(E.buffer, 0, 4)[0])), a.set(E, o), o += E.length;
      const l = new Uint32Array(a.buffer, 0, a.length >> 2), h = l[1];
      if (h !== 0) throw new Error(`Invalid version: ${h}`);
      const c = l[2], u = l[3], p = l[4] === 0, m = l[5], A = l[6], y = l[7], v = [], w = (xd + Jl * A) * Uint32Array.BYTES_PER_ELEMENT;
      let S;
      switch (y) {
        case Int8Array.BYTES_PER_ELEMENT:
          S = new Int8Array(a.buffer, w);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          S = new Int16Array(a.buffer, w);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          S = new Int32Array(a.buffer, w);
          break;
      }
      o = 0;
      for (let E = 0; E < A; E++) {
        const _ = l[Jl * E + xd], C = new Float32Array(_ + 2);
        v.push(C);
        for (let x = 0; x < Jl - 1; x++) C[x] = l[Jl * E + xd + x + 1];
        for (let x = 0; x < _; x++) C[x + 2] = C[x] + S[o++];
      }
      return { areContours: p, thickness: m, outlines: v, width: c, height: u };
    } catch (e) {
      return Y(`decompressSignature: ${e}`), null;
    }
  }
}
za = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakSet(), Ap = function(t, e, s, i) {
  return s -= t, i -= e, s === 0 ? i > 0 ? 0 : 4 : s === 1 ? i + 6 : 2 - i;
}, Qs = /* @__PURE__ */ new WeakMap(), Yb = function(t, e, s, i, r, a, o) {
  const l = b(this, dt, Ap).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const c = (-h + l - o + 16) % 8, u = n(this, Qs)[2 * c], p = n(this, Qs)[2 * c + 1];
    if (t[(s + u) * e + (i + p)] !== 0) return c;
  }
  return -1;
}, Kb = function(t, e, s, i, r, a, o) {
  const l = b(this, dt, Ap).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const c = (h + l + o + 16) % 8, u = n(this, Qs)[2 * c], p = n(this, Qs)[2 * c + 1];
    if (t[(s + u) * e + (i + p)] !== 0) return c;
  }
  return -1;
}, wp = function(t, e, s, i) {
  const r = t.length, a = new Int32Array(r);
  for (let c = 0; c < r; c++) a[c] = t[c] <= i ? 1 : 0;
  for (let c = 1; c < s - 1; c++) a[c * e] = a[c * e + e - 1] = 0;
  for (let c = 0; c < e; c++) a[c] = a[e * s - 1 - c] = 0;
  let o = 1, l;
  const h = [];
  for (let c = 1; c < s - 1; c++) {
    l = 1;
    for (let u = 1; u < e - 1; u++) {
      const p = c * e + u, m = a[p];
      if (m === 0) continue;
      let A = c, y = u;
      if (m === 1 && a[p - 1] === 0) o += 1, y -= 1;
      else if (m >= 1 && a[p + 1] === 0) o += 1, y += 1, m > 1 && (l = m);
      else {
        m !== 1 && (l = Math.abs(m));
        continue;
      }
      const v = [u, c], w = y === u + 1, S = { isHole: w, points: v, id: o, parent: 0 };
      h.push(S);
      let E;
      for (const L of h) if (L.id === l) {
        E = L;
        break;
      }
      E ? E.isHole ? S.parent = w ? E.parent : l : S.parent = w ? l : E.parent : S.parent = w ? l : 0;
      const _ = b(this, dt, Yb).call(this, a, e, c, u, A, y, 0);
      if (_ === -1) {
        a[p] = -o, a[p] !== 1 && (l = Math.abs(a[p]));
        continue;
      }
      let C = n(this, Qs)[2 * _], x = n(this, Qs)[2 * _ + 1];
      const T = c + C, P = u + x;
      A = T, y = P;
      let k = c, D = u;
      for (; ; ) {
        const L = b(this, dt, Kb).call(this, a, e, k, D, A, y, 1);
        C = n(this, Qs)[2 * L], x = n(this, Qs)[2 * L + 1];
        const F = k + C, V = D + x;
        v.push(V, F);
        const O = k * e + D;
        if (a[O + 1] === 0 ? a[O] = -o : a[O] === 1 && (a[O] = o), F === c && V === u && k === T && D === P) {
          a[p] !== 1 && (l = Math.abs(a[p]));
          break;
        } else A = k, y = D, k = F, D = V;
      }
    }
  }
  return h;
}, tu = function(t, e, s, i) {
  if (s - e <= 4) {
    for (let T = e; T < s - 2; T += 2) i.push(t[T], t[T + 1]);
    return;
  }
  const r = t[e], a = t[e + 1], o = t[s - 4] - r, l = t[s - 3] - a, h = Math.hypot(o, l), c = o / h, u = l / h, p = c * a - u * r, m = l / o, A = 1 / h, y = Math.atan(m), v = Math.cos(y), w = Math.sin(y), S = A * (Math.abs(v) + Math.abs(w)), E = A * (1 - S + S ** 2), _ = Math.max(Math.atan(Math.abs(w + v) * E), Math.atan(Math.abs(w - v) * E));
  let C = 0, x = e;
  for (let T = e + 2; T < s - 2; T += 2) {
    const P = Math.abs(p - c * t[T + 1] + u * t[T]);
    P > C && (x = T, C = P);
  }
  C > (h * _) ** 2 ? (b(this, dt, tu).call(this, t, e, x + 2, i), b(this, dt, tu).call(this, t, x, s, i)) : i.push(r, a);
}, Jb = function(t) {
  const e = [], s = t.length;
  return b(this, dt, tu).call(this, t, 0, s, e), e.push(t[s - 2], t[s - 1]), e.length <= 4 ? null : e;
}, Qb = function(t, e, s, i, r, a) {
  const o = new Float32Array(a ** 2), l = -2 * i ** 2, h = a >> 1;
  for (let y = 0; y < a; y++) {
    const v = (y - h) ** 2;
    for (let w = 0; w < a; w++) o[y * a + w] = Math.exp((v + (w - h) ** 2) / l);
  }
  const c = new Float32Array(256), u = -2 * r ** 2;
  for (let y = 0; y < 256; y++) c[y] = Math.exp(y ** 2 / u);
  const p = t.length, m = new Uint8Array(p), A = new Uint32Array(256);
  for (let y = 0; y < s; y++) for (let v = 0; v < e; v++) {
    const w = y * e + v, S = t[w];
    let E = 0, _ = 0;
    for (let x = 0; x < a; x++) {
      const T = y + x - h;
      if (!(T < 0 || T >= s)) for (let P = 0; P < a; P++) {
        const k = v + P - h;
        if (k < 0 || k >= e) continue;
        const D = t[T * e + k], L = o[x * a + P] * c[Math.abs(D - S)];
        E += D * L, _ += L;
      }
    }
    const C = m[w] = Math.round(E / _);
    A[C]++;
  }
  return [m, A];
}, Zb = function(t) {
  const e = new Uint32Array(256);
  for (const s of t) e[s]++;
  return e;
}, vp = function(t) {
  const e = t.length, s = new Uint8ClampedArray(e >> 2);
  let i = -1 / 0, r = 1 / 0;
  for (let o = 0, l = s.length; o < l; o++) {
    const h = s[o] = t[o << 2];
    i = Math.max(i, h), r = Math.min(r, h);
  }
  const a = 255 / (i - r);
  for (let o = 0, l = s.length; o < l; o++) s[o] = (s[o] - r) * a;
  return s;
}, Ep = function(t) {
  let e, s = -1 / 0, i = -1 / 0;
  const r = t.findIndex((l) => l !== 0);
  let a = r, o = r;
  for (e = r; e < 256; e++) {
    const l = t[e];
    l > s && (e - a > i && (i = e - a, o = e - 1), s = l, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--) ;
  return e;
}, ty = function(t) {
  const e = t, { width: s, height: i } = t, { maxDim: r } = n(this, za);
  let a = s, o = i;
  if (s > r || i > r) {
    let p = s, m = i, A = Math.log2(Math.max(s, i) / r);
    const y = Math.floor(A);
    A = A === y ? y - 1 : y;
    for (let w = 0; w < A; w++) {
      a = Math.ceil(p / 2), o = Math.ceil(m / 2);
      const S = new OffscreenCanvas(a, o);
      S.getContext("2d").drawImage(t, 0, 0, p, m, 0, 0, a, o), p = a, m = o, t !== e && t.close(), t = S.transferToImageBitmap();
    }
    const v = Math.min(r / a, r / o);
    a = Math.round(a * v), o = Math.round(o * v);
  }
  const h = new OffscreenCanvas(a, o).getContext("2d", { willReadFrequently: true });
  h.fillStyle = "white", h.fillRect(0, 0, a, o), h.filter = "grayscale(1)", h.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const c = h.getImageData(0, 0, a, o).data;
  return [b(this, dt, vp).call(this, c), a, o];
}, g(Di, dt), g(Di, za, { maxDim: 512, sigmaSFactor: 0.02, sigmaR: 25, kernelSize: 16 }), g(Di, Qs, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class Yp extends zb {
  constructor() {
    super(), super.updateProperties({ fill: xt._defaultLineColor, "stroke-width": 0 });
  }
  clone() {
    const t = new Yp();
    return t.updateAll(this), t;
  }
}
class Kp extends $u {
  constructor(t) {
    super(t), super.updateProperties({ stroke: xt._defaultLineColor, "stroke-width": 1 });
  }
  clone() {
    const t = new Kp(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var gr, ki, mr, Ga;
const Ze = class Ze2 extends gu {
  constructor(e) {
    super({ ...e, mustBeCommitted: true, name: "signatureEditor" });
    g(this, gr, false);
    g(this, ki, null);
    g(this, mr, null);
    g(this, Ga, null);
    this._willKeepAspectRatio = true, f(this, mr, e.signatureData || null), f(this, ki, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(e, s) {
    xt.initialize(e, s), this._defaultDrawingOptions = new Yp(), this._defaultDrawnSignatureOptions = new Kp(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static get typesMap() {
    return Q(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return false;
  }
  get telemetryFinalData() {
    return { type: "signature", hasDescription: !!n(this, ki) };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasDescription");
    return { hasAltText: s.get(true) ?? 0, hasNoAltText: s.get(false) ?? 0 };
  }
  get isResizable() {
    return true;
  }
  onScaleChanging() {
    this._drawId !== null && super.onScaleChanging();
  }
  render() {
    if (this.div) return this.div;
    let e, s;
    const { _isCopy: i } = this;
    if (i && (this._isCopy = false, e = this.x, s = this.y), super.render(), this._drawId === null) if (n(this, mr)) {
      const { lines: r, mustSmooth: a, areContours: o, description: l, uuid: h, heightInPage: c } = n(this, mr), { rawDims: { pageWidth: u, pageHeight: p }, rotation: m } = this.parent.viewport, A = Di.processDrawnLines({ lines: r, pageWidth: u, pageHeight: p, rotation: m, innerMargin: Ze2._INNER_MARGIN, mustSmooth: a, areContours: o });
      this.addSignature(A, c, l, h);
    } else this.div.setAttribute("data-l10n-args", JSON.stringify({ description: "" })), this.div.hidden = true, this._uiManager.getSignature(this);
    else this.div.setAttribute("data-l10n-args", JSON.stringify({ description: n(this, ki) || "" }));
    return i && (this._isCopy = true, this._moveAfterPaste(e, s)), this.div;
  }
  setUuid(e) {
    f(this, Ga, e), this.addEditToolbar();
  }
  getUuid() {
    return n(this, Ga);
  }
  get description() {
    return n(this, ki);
  }
  set description(e) {
    f(this, ki, e), this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({ description: e })), super.addEditToolbar().then((s) => {
      s == null || s.updateEditSignatureButton(e);
    }));
  }
  getSignaturePreview() {
    const { newCurves: e, areContours: s, thickness: i, width: r, height: a } = n(this, mr), o = Math.max(r, a), l = Di.processDrawnLines({ lines: { curves: e.map((h) => ({ points: h })), thickness: i, width: r, height: a }, pageWidth: o, pageHeight: o, rotation: 0, innerMargin: 0, mustSmooth: false, areContours: s });
    return { areContours: s, outline: l.outline };
  }
  get toolbarButtons() {
    return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
  }
  addSignature(e, s, i, r) {
    const { x: a, y: o } = this, { outline: l } = f(this, mr, e);
    f(this, gr, l instanceof yp), this.description = i;
    let h;
    n(this, gr) ? h = Ze2.getDefaultDrawingOptions() : (h = Ze2._defaultDrawnSignatureOptions.clone(), h.updateProperties({ "stroke-width": l.thickness })), this._addOutlines({ drawOutlines: l, drawingOptions: h });
    const [, c] = this.pageDimensions;
    let u = s / c;
    u = u >= 1 ? 0.5 : u, this.width *= u / this.height, this.width >= 1 && (u *= 0.9 / this.width, this.width = 0.9), this.height = u, this.setDims(), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({ action: "pdfjs.signature.inserted", data: { hasBeenSaved: !!r, hasDescription: !!i } }), this.div.hidden = false;
  }
  getFromImage(e) {
    const { rawDims: { pageWidth: s, pageHeight: i }, rotation: r } = this.parent.viewport;
    return Di.process(e, s, i, r, Ze2._INNER_MARGIN);
  }
  getFromText(e, s) {
    const { rawDims: { pageWidth: i, pageHeight: r }, rotation: a } = this.parent.viewport;
    return Di.extractContoursFromText(e, s, i, r, a, Ze2._INNER_MARGIN);
  }
  getDrawnSignature(e) {
    const { rawDims: { pageWidth: s, pageHeight: i }, rotation: r } = this.parent.viewport;
    return Di.processDrawnLines({ lines: e, pageWidth: s, pageHeight: i, rotation: r, innerMargin: Ze2._INNER_MARGIN, mustSmooth: false, areContours: false });
  }
  createDrawingOptions({ areContours: e, thickness: s }) {
    e ? this._drawingOptions = Ze2.getDefaultDrawingOptions() : (this._drawingOptions = Ze2._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({ "stroke-width": s }));
  }
  serialize(e = false) {
    if (this.isEmpty()) return null;
    const { lines: s, points: i } = this.serializeDraw(e), { _drawingOptions: { "stroke-width": r } } = this, a = Object.assign(super.serialize(e), { isSignature: true, areContours: n(this, gr), color: [0, 0, 0], thickness: n(this, gr) ? 0 : r });
    return this.addComment(a), e ? (a.paths = { lines: s, points: i }, a.uuid = n(this, Ga), a.isCopy = true) : a.lines = s, n(this, ki) && (a.accessibilityData = { type: "Figure", alt: n(this, ki) }), a;
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return o.areContours ? yp.deserialize(e, s, i, r, a, o) : pd.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    var a;
    const r = await super.deserialize(e, s, i);
    return f(r, gr, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || "", f(r, Ga, e.uuid), r;
  }
};
gr = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), Ga = /* @__PURE__ */ new WeakMap(), R(Ze, "_type", "signature"), R(Ze, "_editorType", q.SIGNATURE), R(Ze, "_defaultDrawingOptions", null);
let Sp = Ze;
var Dt, le, br, mn, yr, Ol, bn, Va, Ri, ms, Bl, lt, bh, yh, eu, su, iu, Cp, nu, ey;
class _p extends xt {
  constructor(e) {
    super({ ...e, name: "stampEditor" });
    g(this, lt);
    g(this, Dt, null);
    g(this, le, null);
    g(this, br, null);
    g(this, mn, null);
    g(this, yr, null);
    g(this, Ol, "");
    g(this, bn, null);
    g(this, Va, false);
    g(this, Ri, null);
    g(this, ms, false);
    g(this, Bl, false);
    f(this, mn, e.bitmapUrl), f(this, yr, e.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(e, s) {
    xt.initialize(e, s);
  }
  static isHandlingMimeForPasting(e) {
    return ou.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor({ mode: q.STAMP }, { bitmapFile: e.getAsFile() });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = false), super.altTextFinish();
  }
  get telemetryFinalData() {
    var e;
    return { type: "stamp", hasAltText: !!((e = this.altTextData) != null && e.altText) };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasAltText");
    return { hasAltText: s.get(true) ?? 0, hasNoAltText: s.get(false) ?? 0 };
  }
  async mlGuessAltText(e = null, s = true) {
    if (this.hasAltTextData()) return null;
    const { mlManager: i } = this._uiManager;
    if (!i) throw new Error("No ML.");
    if (!await i.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
    const { data: r, width: a, height: o } = e || this.copyCanvas(null, null, true).imageData, l = await i.guess({ name: "altText", request: { data: r, width: a, height: o, channels: r.length / (a * o) } });
    if (!l) throw new Error("No response from the AI service.");
    if (l.error) throw new Error("Error from the AI service.");
    if (l.cancel) return null;
    if (!l.output) throw new Error("No valid response from the AI service.");
    const h = l.output;
    return await this.setGuessedAltText(h), s && !this.hasAltTextData() && (this.altTextData = { alt: h, decorative: false }), h;
  }
  remove() {
    var e;
    n(this, le) && (f(this, Dt, null), this._uiManager.imageManager.deleteId(n(this, le)), (e = n(this, bn)) == null || e.remove(), f(this, bn, null), n(this, Ri) && (clearTimeout(n(this, Ri)), f(this, Ri, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      n(this, le) && b(this, lt, eu).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, le) && n(this, bn) === null && b(this, lt, eu).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = true, e && this.div.focus();
  }
  isEmpty() {
    return !(n(this, br) || n(this, Dt) || n(this, mn) || n(this, yr) || n(this, le) || n(this, Va));
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return true;
  }
  render() {
    if (this.div) return this.div;
    let e, s;
    return this._isCopy && (e = this.x, s = this.y), super.render(), this.div.hidden = true, this.createAltText(), n(this, Va) || (n(this, Dt) ? b(this, lt, su).call(this) : b(this, lt, eu).call(this)), this._isCopy && this._moveAfterPaste(e, s), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(e, s) {
    const { id: i, bitmap: r } = this._uiManager.imageManager.getFromCanvas(e, s);
    s.remove(), i && this._uiManager.imageManager.isValidId(i) && (f(this, le, i), r && f(this, Dt, r), f(this, Va, false), b(this, lt, su).call(this));
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent) return;
    n(this, Ri) !== null && clearTimeout(n(this, Ri)), f(this, Ri, setTimeout(() => {
      f(this, Ri, null), b(this, lt, Cp).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = false) {
    e || (e = 224);
    const { width: r, height: a } = n(this, Dt), o = new si();
    let l = n(this, Dt), h = r, c = a, u = null;
    if (s) {
      if (r > s || a > s) {
        const T = Math.min(s / r, s / a);
        h = Math.floor(r * T), c = Math.floor(a * T);
      }
      u = document.createElement("canvas");
      const m = u.width = Math.ceil(h * o.sx), A = u.height = Math.ceil(c * o.sy);
      n(this, ms) || (l = b(this, lt, iu).call(this, m, A));
      const y = u.getContext("2d");
      y.filter = this._uiManager.hcmFilter;
      let v = "white", w = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? w = "black" : eA.isDarkMode && (v = "#8f8f9d", w = "#42414d");
      const S = 15, E = S * o.sx, _ = S * o.sy, C = new OffscreenCanvas(E * 2, _ * 2), x = C.getContext("2d");
      x.fillStyle = v, x.fillRect(0, 0, E * 2, _ * 2), x.fillStyle = w, x.fillRect(0, 0, E, _), x.fillRect(E, _, E, _), y.fillStyle = y.createPattern(C, "repeat"), y.fillRect(0, 0, m, A), y.drawImage(l, 0, 0, l.width, l.height, 0, 0, m, A);
    }
    let p = null;
    if (i) {
      let m, A;
      if (o.symmetric && l.width < e && l.height < e) m = l.width, A = l.height;
      else if (l = n(this, Dt), r > e || a > e) {
        const w = Math.min(e / r, e / a);
        m = Math.floor(r * w), A = Math.floor(a * w), n(this, ms) || (l = b(this, lt, iu).call(this, m, A));
      }
      const v = new OffscreenCanvas(m, A).getContext("2d", { willReadFrequently: true });
      v.drawImage(l, 0, 0, l.width, l.height, 0, 0, m, A), p = { width: m, height: A, data: v.getImageData(0, 0, m, A).data };
    }
    return { canvas: u, width: h, height: c, imageData: p };
  }
  static async deserialize(e, s, i) {
    var v;
    let r = null, a = false;
    if (e instanceof bb) {
      const { data: { rect: w, rotation: S, id: E, structParent: _, popupRef: C, richText: x, contentsObj: T, creationDate: P, modificationDate: k }, container: D, parent: { page: { pageNumber: L } }, canvas: F } = e;
      let V, O;
      F ? (delete e.canvas, { id: V, bitmap: O } = i.imageManager.getFromCanvas(D.id, F), F.remove()) : (a = true, e._hasNoCanvas = true);
      const X = ((v = await s._structTree.getAriaAttributes(`${Bp}${E}`)) == null ? void 0 : v.get("aria-label")) || "";
      r = e = { annotationType: q.STAMP, bitmapId: V, bitmap: O, pageIndex: L - 1, rect: w.slice(0), rotation: S, annotationElementId: E, id: E, deleted: false, accessibilityData: { decorative: false, altText: X }, isSvg: false, structParent: _, popupRef: C, richText: x, comment: (T == null ? void 0 : T.str) || null, creationDate: P, modificationDate: k };
    }
    const o = await super.deserialize(e, s, i), { rect: l, bitmap: h, bitmapUrl: c, bitmapId: u, isSvg: p, accessibilityData: m } = e;
    a ? (i.addMissingCanvas(e.id, o), f(o, Va, true)) : u && i.imageManager.isValidId(u) ? (f(o, le, u), h && f(o, Dt, h)) : f(o, mn, c), f(o, ms, p);
    const [A, y] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / A, o.height = (l[3] - l[1]) / y, m && (o.altTextData = m), o._initialData = r, e.comment && o.setCommentData(e), f(o, Bl, !!r), o;
  }
  serialize(e = false, s = null) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const i = Object.assign(super.serialize(e), { bitmapId: n(this, le), isSvg: n(this, ms) });
    if (this.addComment(i), e) return i.bitmapUrl = b(this, lt, nu).call(this, true), i.accessibilityData = this.serializeAltText(true), i.isCopy = true, i;
    const { decorative: r, altText: a } = this.serializeAltText(false);
    if (!r && a && (i.accessibilityData = { type: "Figure", alt: a }), this.annotationElementId) {
      const l = b(this, lt, ey).call(this, i);
      return l.isSame ? null : (l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1, i.id = this.annotationElementId, delete i.bitmapId, i);
    }
    if (s === null) return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = n(this, ms) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(n(this, le))) s.stamps.set(n(this, le), { area: o, serialized: i }), i.bitmap = b(this, lt, nu).call(this, false);
    else if (n(this, ms)) {
      const l = s.stamps.get(n(this, le));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = b(this, lt, nu).call(this, false));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({ rect: this.getPDFRect(), popup: this.comment }), null);
  }
}
Dt = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), Ol = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakSet(), bh = function(e, s = false) {
  if (!e) {
    this.remove();
    return;
  }
  f(this, Dt, e.bitmap), s || (f(this, le, e.id), f(this, ms, e.isSvg)), e.file && f(this, Ol, e.file.name), b(this, lt, su).call(this);
}, yh = function() {
  if (f(this, br, null), this._uiManager.enableWaiting(false), !!n(this, bn)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, Dt)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, true);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, Dt)) {
      this._reportTelemetry({ action: "pdfjs.image.image_added", data: { alt_text_modal: false, alt_text_type: "empty" } });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, eu = function() {
  if (n(this, le)) {
    this._uiManager.enableWaiting(true), this._uiManager.imageManager.getFromId(n(this, le)).then((i) => b(this, lt, bh).call(this, i, true)).finally(() => b(this, lt, yh).call(this));
    return;
  }
  if (n(this, mn)) {
    const i = n(this, mn);
    f(this, mn, null), this._uiManager.enableWaiting(true), f(this, br, this._uiManager.imageManager.getFromUrl(i).then((r) => b(this, lt, bh).call(this, r)).finally(() => b(this, lt, yh).call(this)));
    return;
  }
  if (n(this, yr)) {
    const i = n(this, yr);
    f(this, yr, null), this._uiManager.enableWaiting(true), f(this, br, this._uiManager.imageManager.getFromFile(i).then((r) => b(this, lt, bh).call(this, r)).finally(() => b(this, lt, yh).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = ou.join(",");
  const s = this._uiManager._signal;
  f(this, br, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0) this.remove();
      else {
        this._uiManager.enableWaiting(true);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({ action: "pdfjs.image.image_selected", data: { alt_text_modal: this._uiManager.useNewAltTextFlow } }), b(this, lt, bh).call(this, r);
      }
      i();
    }, { signal: s }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, { signal: s });
  }).finally(() => b(this, lt, yh).call(this))), e.click();
}, su = function() {
  var h;
  const { div: e } = this;
  let { width: s, height: i } = n(this, Dt);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width) s = this.width * r, i = this.height * a;
  else if (s > o * r || i > o * a) {
    const c = Math.min(o * r / s, o * a / i);
    s *= c, i *= c;
  }
  this._uiManager.enableWaiting(false);
  const l = f(this, bn, document.createElement("canvas"));
  l.setAttribute("role", "img"), this.addContainer(l), this.width = s / r, this.height = i / a, this.setDims(), (h = this._initialOptions) != null && h.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = false), b(this, lt, Cp).call(this), n(this, Bl) || (this.parent.addUndoableEditor(this), f(this, Bl, true)), this._reportTelemetry({ action: "inserted_image" }), n(this, Ol) && this.div.setAttribute("aria-description", n(this, Ol)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
}, iu = function(e, s) {
  const { width: i, height: r } = n(this, Dt);
  let a = i, o = r, l = n(this, Dt);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, Cp = function() {
  const [e, s] = this.parentDimensions, { width: i, height: r } = this, a = new si(), o = Math.ceil(i * e * a.sx), l = Math.ceil(r * s * a.sy), h = n(this, bn);
  if (!h || h.width === o && h.height === l) return;
  h.width = o, h.height = l;
  const c = n(this, ms) ? n(this, Dt) : b(this, lt, iu).call(this, o, l), u = h.getContext("2d");
  u.filter = this._uiManager.hcmFilter, u.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, l);
}, nu = function(e) {
  if (e) {
    if (n(this, ms)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, le));
      if (r) return r;
    }
    const s = document.createElement("canvas");
    return { width: s.width, height: s.height } = n(this, Dt), s.getContext("2d").drawImage(n(this, Dt), 0, 0), s.toDataURL();
  }
  if (n(this, ms)) {
    const [s, i] = this.pageDimensions, r = Math.round(this.width * s * _n.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * _n.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(n(this, Dt), 0, 0, n(this, Dt).width, n(this, Dt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, Dt));
}, ey = function(e) {
  var o;
  const { pageIndex: s, accessibilityData: { altText: i } } = this._initialData, r = e.pageIndex === s, a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === i;
  return { isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && a, isSameAltText: a };
}, R(_p, "_type", "stamp"), R(_p, "_editorType", q.STAMP);
var Wa, Hl, Ar, wr, yn, Ye, vr, Ul, jl, Zs, An, he, wn, Er, $l, G, Sr, St, xp, sy, oi, Tp, Pp, ru;
const $s = class $s2 {
  constructor({ uiManager: t, pageIndex: e, div: s, structTreeLayer: i, accessibilityManager: r, annotationLayer: a, drawLayer: o, textLayer: l, viewport: h, l10n: c }) {
    g(this, St);
    g(this, Wa);
    g(this, Hl, false);
    g(this, Ar, null);
    g(this, wr, null);
    g(this, yn, null);
    g(this, Ye, /* @__PURE__ */ new Map());
    g(this, vr, false);
    g(this, Ul, false);
    g(this, jl, false);
    g(this, Zs, null);
    g(this, An, null);
    g(this, he, null);
    g(this, wn, null);
    g(this, Er, null);
    g(this, $l, -1);
    g(this, G);
    const u = [...n($s2, Sr).values()];
    if (!$s2._initialized) {
      $s2._initialized = true;
      for (const p of u) p.initialize(c, t);
    }
    t.registerEditorTypes(u), f(this, G, t), this.pageIndex = e, this.div = s, f(this, Wa, r), f(this, Ar, a), this.viewport = h, f(this, he, l), this.drawLayer = o, this._structTree = i, n(this, G).addLayer(this);
  }
  get isEmpty() {
    return n(this, Ye).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && n(this, G).getMode() === q.NONE;
  }
  updateToolbar(t) {
    n(this, G).updateToolbar(t);
  }
  updateMode(t = n(this, G).getMode()) {
    switch (b(this, St, ru).call(this), t) {
      case q.NONE:
        this.div.classList.toggle("nonEditing", true), this.disableTextSelection(), this.togglePointerEvents(false), this.toggleAnnotationLayerPointerEvents(true), this.disableClick();
        return;
      case q.INK:
        this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
        break;
      case q.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(false), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(false);
    const { classList: e } = this.div;
    if (e.toggle("nonEditing", false), t === q.POPUP) e.toggle("commentEditing", true);
    else {
      e.toggle("commentEditing", false);
      for (const s of n($s2, Sr).values()) e.toggle(`${s._type}Editing`, t === s._editorType);
    }
    this.div.hidden = false;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = n(this, he)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    n(this, G).setEditingState(t);
  }
  addCommands(t) {
    n(this, G).addCommands(t);
  }
  cleanUndoStack(t) {
    n(this, G).cleanUndoStack(t);
  }
  toggleDrawing(t = false) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = false) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = false) {
    var e;
    (e = n(this, Ar)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    var s;
    f(this, jl, true), this.div.tabIndex = 0, this.togglePointerEvents(true), this.div.classList.toggle("nonEditing", false), (s = n(this, Er)) == null || s.abort(), f(this, Er, null);
    const t = /* @__PURE__ */ new Set();
    for (const i of n(this, St, xp)) i.enableEditing(), i.show(true), i.annotationElementId && (n(this, G).removeChangedExistingAnnotation(i), t.add(i.annotationElementId));
    const e = n(this, Ar);
    if (e) for (const i of e.getEditableAnnotations()) {
      if (i.hide(), n(this, G).isDeletedAnnotationElement(i.data.id) || t.has(i.data.id)) continue;
      const r = await this.deserialize(i);
      r && (this.addOrRebuild(r), r.enableEditing());
    }
    f(this, jl, false), n(this, G)._eventBus.dispatch("editorsrendered", { source: this, pageNumber: this.pageIndex + 1 });
  }
  disable() {
    var s;
    if (f(this, Ul, true), this.div.tabIndex = -1, this.togglePointerEvents(false), this.div.classList.toggle("nonEditing", true), n(this, he) && !n(this, Er)) {
      f(this, Er, new AbortController());
      const i = n(this, G).combinedSignal(n(this, Er));
      n(this, he).div.addEventListener("pointerdown", (r) => {
        const { clientX: o, clientY: l, timeStamp: h } = r, c = n(this, $l);
        if (h - c > 500) {
          f(this, $l, h);
          return;
        }
        f(this, $l, -1);
        const { classList: u } = this.div;
        u.toggle("getElements", true);
        const p = document.elementsFromPoint(o, l);
        if (u.toggle("getElements", false), !this.div.contains(p[0])) return;
        let m;
        const A = new RegExp(`^${wh}[0-9]+$`);
        for (const v of p) if (A.test(v.id)) {
          m = v.id;
          break;
        }
        if (!m) return;
        const y = n(this, Ye).get(m);
        (y == null ? void 0 : y.annotationElementId) === null && (r.stopPropagation(), r.preventDefault(), y.dblclick(r));
      }, { signal: i, capture: true });
    }
    const t = n(this, Ar);
    if (t) {
      const i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (const o of n(this, St, xp)) {
        if (o.disableEditing(), !o.annotationElementId) {
          o.updateFakeAnnotationElement(t);
          continue;
        }
        if (o.serialize() !== null) {
          i.set(o.annotationElementId, o);
          continue;
        } else r.set(o.annotationElementId, o);
        (s = this.getEditableAnnotation(o.annotationElementId)) == null || s.show(), o.remove();
      }
      const a = t.getEditableAnnotations();
      for (const o of a) {
        const { id: l } = o.data;
        if (n(this, G).isDeletedAnnotationElement(l)) {
          o.updateEdited({ deleted: true });
          continue;
        }
        let h = r.get(l);
        if (h) {
          h.resetAnnotationElement(o), h.show(false), o.show();
          continue;
        }
        h = i.get(l), h && (n(this, G).addChangedExistingAnnotation(h), h.renderAnnotationElement(o) && h.show(false)), o.show();
      }
    }
    b(this, St, ru).call(this), this.isEmpty && (this.div.hidden = true);
    const { classList: e } = this.div;
    for (const i of n($s2, Sr).values()) e.remove(`${i._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(true), f(this, Ul, false);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = n(this, Ar)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    n(this, G).getActive() !== t && n(this, G).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = n(this, he)) != null && t.div && !n(this, wn)) {
      f(this, wn, new AbortController());
      const e = n(this, G).combinedSignal(n(this, wn));
      n(this, he).div.addEventListener("pointerdown", b(this, St, sy).bind(this), { signal: e }), n(this, he).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = n(this, he)) != null && t.div && n(this, wn) && (n(this, wn).abort(), f(this, wn, null), n(this, he).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (n(this, wr)) return;
    f(this, wr, new AbortController());
    const t = n(this, G).combinedSignal(n(this, wr));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), { signal: t });
    const e = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e, { signal: t }), this.div.addEventListener("pointercancel", e, { signal: t });
  }
  disableClick() {
    var t;
    (t = n(this, wr)) == null || t.abort(), f(this, wr, null);
  }
  attach(t) {
    n(this, Ye).set(t.id, t);
    const { annotationElementId: e } = t;
    e && n(this, G).isDeletedAnnotationElement(e) && n(this, G).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    n(this, Ye).delete(t.id), (e = n(this, Wa)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, Ul) && t.annotationElementId && n(this, G).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), n(this, G).removeEditor(t), t.div.remove(), t.isAttachedToDOM = false;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, G).addDeletedAnnotationElement(t.annotationElementId), xt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, G).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = true;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, jl)), n(this, G).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM) return;
    const { activeElement: e } = document;
    t.div.contains(e) && !n(this, yn) && (t._focusEventsAllowed = false, f(this, yn, setTimeout(() => {
      f(this, yn, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = true : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = true;
      }, { once: true, signal: n(this, G)._signal }), e.focus());
    }, 0))), t._structTreeParentId = (s = n(this, Wa)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, true);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), s = () => {
      t.remove();
    };
    this.addCommands({ cmd: e, undo: s, mustExec: false });
  }
  getEditorByUID(t) {
    for (const e of n(this, Ye).values()) if (e.uid === t) return e;
    return null;
  }
  getNextId() {
    return n(this, G).getId();
  }
  combinedSignal(t) {
    return n(this, G).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = n(this, St, oi)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, G).updateMode(t.mode);
    const { offsetX: s, offsetY: i } = b(this, St, Pp).call(this), r = this.getNextId(), a = b(this, St, Tp).call(this, { parent: this, id: r, x: s, y: i, uiManager: n(this, G), isCentered: true, ...e });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = n($s2, Sr).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, G))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), r = b(this, St, Tp).call(this, { parent: this, id: i, x: t.offsetX, y: t.offsetY, uiManager: n(this, G), isCentered: e, ...s });
    return r && this.add(r), r;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(b(this, St, Pp).call(this), true, t);
  }
  setSelected(t) {
    n(this, G).setSelected(t);
  }
  toggleSelected(t) {
    n(this, G).toggleSelected(t);
  }
  unselect(t) {
    n(this, G).unselect(t);
  }
  pointerup(t) {
    var i;
    const { isMac: e } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, vr) || (f(this, vr, false), (i = n(this, St, oi)) != null && i.isDrawer && n(this, St, oi).supportMultipleDrawings)) return;
    if (!n(this, Hl)) {
      f(this, Hl, true);
      return;
    }
    const s = n(this, G).getMode();
    if (s === q.STAMP || s === q.SIGNATURE) {
      n(this, G).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, false);
  }
  pointerdown(t) {
    var i;
    if (n(this, G).getMode() === q.HIGHLIGHT && this.enableTextSelection(), n(this, vr)) {
      f(this, vr, false);
      return;
    }
    const { isMac: e } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div) return;
    if (f(this, vr, true), (i = n(this, St, oi)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = n(this, G).getActive();
    f(this, Hl, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus({ preventScroll: true }), n(this, Zs)) {
      n(this, St, oi).startDrawing(this, n(this, G), false, t);
      return;
    }
    n(this, G).setCurrentDrawingSession(this), f(this, Zs, new AbortController());
    const e = n(this, G).combinedSignal(n(this, Zs));
    this.div.addEventListener("blur", ({ relatedTarget: s }) => {
      s && !this.div.contains(s) && (f(this, An, null), this.commitOrRemove());
    }, { signal: e }), n(this, St, oi).startDrawing(this, n(this, G), false, t);
  }
  pause(t) {
    if (t) {
      const { activeElement: e } = document;
      this.div.contains(e) && f(this, An, e);
      return;
    }
    n(this, An) && setTimeout(() => {
      var e;
      (e = n(this, An)) == null || e.focus(), f(this, An, null);
    }, 0);
  }
  endDrawingSession(t = false) {
    return n(this, Zs) ? (n(this, G).setCurrentDrawingSession(null), n(this, Zs).abort(), f(this, Zs, null), f(this, An, null), n(this, St, oi).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = n(this, G).findParent(e, s);
    return i === null || i === this ? false : (i.changeParent(t), true);
  }
  commitOrRemove() {
    return n(this, Zs) ? (this.endDrawingSession(), true) : false;
  }
  onScaleChanging() {
    n(this, Zs) && n(this, St, oi).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = n(this, G).getActive()) == null ? void 0 : t.parent) === this && (n(this, G).commitOrRemove(), n(this, G).setActiveEditor(null)), n(this, yn) && (clearTimeout(n(this, yn)), f(this, yn, null));
    for (const s of n(this, Ye).values()) (e = n(this, Wa)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = false, s.div.remove();
    this.div = null, n(this, Ye).clear(), n(this, G).removeLayer(this);
  }
  render({ viewport: t }) {
    this.viewport = t, _r(this.div, t);
    for (const e of n(this, G).getEditors(this.pageIndex)) this.add(e), e.rebuild();
    this.updateMode();
  }
  update({ viewport: t }) {
    n(this, G).commitOrRemove(), b(this, St, ru).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, _r(this.div, { rotation: s }), e !== s) for (const i of n(this, Ye).values()) i.rotate(s);
  }
  get pageDimensions() {
    const { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return n(this, G).viewParameters.realScale;
  }
};
Wa = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), $l = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakSet(), xp = function() {
  return n(this, Ye).size !== 0 ? n(this, Ye).values() : n(this, G).getEditors(this.pageIndex);
}, sy = function(t) {
  n(this, G).unselectAll();
  const { target: e } = t;
  if (e === n(this, he).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && n(this, he).div.contains(e)) {
    const { isMac: s } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && s) return;
    n(this, G).showAllEditors("highlight", true, true), n(this, he).div.classList.add("free"), this.toggleDrawing(), pu.startHighlighting(this, n(this, G).direction === "ltr", { target: n(this, he).div, x: t.x, y: t.y }), n(this, he).div.addEventListener("pointerup", () => {
      n(this, he).div.classList.remove("free"), this.toggleDrawing(true);
    }, { once: true, signal: n(this, G)._signal }), t.preventDefault();
  }
}, oi = function() {
  return n($s, Sr).get(n(this, G).getMode());
}, Tp = function(t) {
  const e = n(this, St, oi);
  return e ? new e.prototype.constructor(t) : null;
}, Pp = function() {
  const { x: t, y: e, width: s, height: i } = this.boundingClientRect, r = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), l = Math.min(window.innerHeight, e + i), h = (r + o) / 2 - t, c = (a + l) / 2 - e, [u, p] = this.viewport.rotation % 180 === 0 ? [h, c] : [c, h];
  return { offsetX: u, offsetY: p };
}, ru = function() {
  for (const t of n(this, Ye).values()) t.isEmpty() && t.remove();
}, R($s, "_initialized", false), g($s, Sr, new Map([op, bp, _p, pu, Sp].map((t) => [t._editorType, t])));
let mu = $s;
var ti, Oe, Xa, od, Nu, iy, Li, kp, ny, Rp;
const Jt = class Jt2 {
  constructor({ pageIndex: t }) {
    g(this, Li);
    g(this, ti, null);
    g(this, Oe, /* @__PURE__ */ new Map());
    g(this, Xa, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!n(this, ti)) {
      f(this, ti, t);
      return;
    }
    if (n(this, ti) !== t) {
      if (n(this, Oe).size > 0) for (const e of n(this, Oe).values()) e.remove(), t.append(e);
      f(this, ti, t);
    }
  }
  static get _svgFactory() {
    return Q(this, "_svgFactory", new Th());
  }
  draw(t, e = false, s = false) {
    const i = Kt(Jt2, od)._++, r = b(this, Li, kp).call(this), a = Jt2._svgFactory.createElement("defs");
    r.append(a);
    const o = Jt2._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, Xa).set(i, o);
    const h = s ? b(this, Li, ny).call(this, a, l) : null, c = Jt2._svgFactory.createElement("use");
    return r.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(r, t), n(this, Oe).set(i, r), { id: i, clipPathId: `url(#${h})` };
  }
  drawOutline(t, e) {
    const s = Kt(Jt2, od)._++, i = b(this, Li, kp).call(this), r = Jt2._svgFactory.createElement("defs");
    i.append(r);
    const a = Jt2._svgFactory.createElement("path");
    r.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const u = Jt2._svgFactory.createElement("mask");
      r.append(u), l = `mask_p${this.pageIndex}_${s}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const p = Jt2._svgFactory.createElement("rect");
      u.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const m = Jt2._svgFactory.createElement("use");
      u.append(m), m.setAttribute("href", `#${o}`), m.setAttribute("stroke", "none"), m.setAttribute("fill", "black"), m.setAttribute("fill-rule", "nonzero"), m.classList.add("mask");
    }
    const h = Jt2._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const c = h.cloneNode();
    return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), n(this, Oe).set(s, i), s;
  }
  finalizeDraw(t, e) {
    n(this, Xa).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var l;
    if (!e) return;
    const { root: s, bbox: i, rootClass: r, path: a } = e, o = typeof t == "number" ? n(this, Oe).get(t) : t;
    if (o) {
      if (s && b(this, Li, Rp).call(this, o, s), i && b(l = Jt2, Nu, iy).call(l, o, i), r) {
        const { classList: h } = o;
        for (const [c, u] of Object.entries(r)) h.toggle(c, u);
      }
      if (a) {
        const c = o.firstChild.firstChild;
        b(this, Li, Rp).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this) return;
    const s = n(this, Oe).get(t);
    s && (n(e, ti).append(s), n(this, Oe).delete(t), n(e, Oe).set(t, s));
  }
  remove(t) {
    n(this, Xa).delete(t), n(this, ti) !== null && (n(this, Oe).get(t).remove(), n(this, Oe).delete(t));
  }
  destroy() {
    f(this, ti, null);
    for (const t of n(this, Oe).values()) t.remove();
    n(this, Oe).clear(), n(this, Xa).clear();
  }
};
ti = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), od = /* @__PURE__ */ new WeakMap(), Nu = /* @__PURE__ */ new WeakSet(), iy = function(t, [e, s, i, r]) {
  const { style: a } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * r}%`;
}, Li = /* @__PURE__ */ new WeakSet(), kp = function() {
  const t = Jt._svgFactory.create(1, 1, true);
  return n(this, ti).append(t), t.setAttribute("aria-hidden", true), t;
}, ny = function(t, e) {
  const s = Jt._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = Jt._svgFactory.createElement("use");
  return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), i;
}, Rp = function(t, e) {
  for (const [s, i] of Object.entries(e)) i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, g(Jt, Nu), g(Jt, od, 0);
let bu = Jt;
globalThis._pdfjsTestingUtils = { HighlightOutliner: hp };
globalThis.pdfjsLib = { AbortException: Sn, AnnotationEditorLayer: mu, AnnotationEditorParamsType: it, AnnotationEditorType: q, AnnotationEditorUIManager: Cr, AnnotationLayer: qp, AnnotationMode: Mi, AnnotationType: zt, applyOpacity: em, build: rb, ColorPicker: xh, createValidAbsoluteUrl: Fp, CSSConstants: tm, DOMSVGFactory: Th, DrawLayer: bu, FeatureTest: ce, fetchData: Wl, findContrastColor: sm, getDocument: Gp, getFilenameFromUrl: Jg, getPdfFilenameFromUrl: Qg, getRGB: Xl, getUuid: Op, getXfaPageViewport: Zg, GlobalWorkerOptions: Ns, ImageKind: Ah, InvalidPDFException: au, isDataScheme: dd, isPdfFile: Uu, isValidExplicitDest: Fm, MathClamp: Re, noContextMenu: vs, normalizeUnicode: Yg, OPS: zl, OutputScale: si, PasswordResponses: Xg, PDFDataRangeTransport: Vp, PDFDateString: Sh, PDFWorker: Gl, PermissionFlag: Wg, PixelsPerInch: _n, RenderingCancelledException: Hu, renderRichText: Up, ResponseException: vh, setLayerDimensions: _r, shadow: Q, SignatureExtractor: Di, stopEvent: Nt, SupportedImageMimeTypes: ou, TextLayer: Ch, TouchManager: _h, updateUrlHash: Np, Util: $, VerbosityLevel: ld, version: nb, XfaLayer: Hp };
const Pw = Object.freeze(Object.defineProperty({ __proto__: null, AbortException: Sn, AnnotationEditorLayer: mu, AnnotationEditorParamsType: it, AnnotationEditorType: q, AnnotationEditorUIManager: Cr, AnnotationLayer: qp, AnnotationMode: Mi, AnnotationType: zt, CSSConstants: tm, ColorPicker: xh, DOMSVGFactory: Th, DrawLayer: bu, FeatureTest: ce, GlobalWorkerOptions: Ns, ImageKind: Ah, InvalidPDFException: au, MathClamp: Re, OPS: zl, OutputScale: si, PDFDataRangeTransport: Vp, PDFDateString: Sh, PDFWorker: Gl, PasswordResponses: Xg, PermissionFlag: Wg, PixelsPerInch: _n, RenderingCancelledException: Hu, ResponseException: vh, SignatureExtractor: Di, SupportedImageMimeTypes: ou, TextLayer: Ch, TouchManager: _h, Util: $, VerbosityLevel: ld, XfaLayer: Hp, applyOpacity: em, build: rb, createValidAbsoluteUrl: Fp, fetchData: Wl, findContrastColor: sm, getDocument: Gp, getFilenameFromUrl: Jg, getPdfFilenameFromUrl: Qg, getRGB: Xl, getUuid: Op, getXfaPageViewport: Zg, isDataScheme: dd, isPdfFile: Uu, isValidExplicitDest: Fm, noContextMenu: vs, normalizeUnicode: Yg, renderRichText: Up, setLayerDimensions: _r, shadow: Q, stopEvent: Nt, updateUrlHash: Np, version: nb }, Symbol.toStringTag, { value: "Module" }));
function ry(d) {
  var t, e, s = "";
  if (typeof d == "string" || typeof d == "number") s += d;
  else if (typeof d == "object") if (Array.isArray(d)) {
    var i = d.length;
    for (t = 0; t < i; t++) d[t] && (e = ry(d[t])) && (s && (s += " "), s += e);
  } else for (e in d) d[e] && (s && (s += " "), s += e);
  return s;
}
function zu() {
  for (var d, t, e = 0, s = "", i = arguments.length; e < i; e++) (d = arguments[e]) && (t = ry(d)) && (s && (s += " "), s += t);
  return s;
}
var Ig = Object.prototype.hasOwnProperty;
function Fg(d, t, e) {
  for (e of d.keys()) if (go(e, t)) return e;
}
function go(d, t) {
  var e, s, i;
  if (d === t) return true;
  if (d && t && (e = d.constructor) === t.constructor) {
    if (e === Date) return d.getTime() === t.getTime();
    if (e === RegExp) return d.toString() === t.toString();
    if (e === Array) {
      if ((s = d.length) === t.length) for (; s-- && go(d[s], t[s]); ) ;
      return s === -1;
    }
    if (e === Set) {
      if (d.size !== t.size) return false;
      for (s of d) if (i = s, i && typeof i == "object" && (i = Fg(t, i), !i) || !t.has(i)) return false;
      return true;
    }
    if (e === Map) {
      if (d.size !== t.size) return false;
      for (s of d) if (i = s[0], i && typeof i == "object" && (i = Fg(t, i), !i) || !go(s[1], t.get(i))) return false;
      return true;
    }
    if (e === ArrayBuffer) d = new Uint8Array(d), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((s = d.byteLength) === t.byteLength) for (; s-- && d.getInt8(s) === t.getInt8(s); ) ;
      return s === -1;
    }
    if (ArrayBuffer.isView(d)) {
      if ((s = d.byteLength) === t.byteLength) for (; s-- && d[s] === t[s]; ) ;
      return s === -1;
    }
    if (!e || typeof d == "object") {
      s = 0;
      for (e in d) if (Ig.call(d, e) && ++s && !Ig.call(t, e) || !(e in t) || !go(d[e], t[e])) return false;
      return Object.keys(t).length === s;
    }
  }
  return d !== d && t !== t;
}
function gd(d) {
  let t = false;
  return { promise: new Promise((s, i) => {
    d.then((r) => !t && s(r)).catch((r) => !t && i(r));
  }), cancel() {
    t = true;
  } };
}
const kw = ["onCopy", "onCut", "onPaste"], Rw = ["onCompositionEnd", "onCompositionStart", "onCompositionUpdate"], Mw = ["onFocus", "onBlur"], Dw = ["onInput", "onInvalid", "onReset", "onSubmit"], Lw = ["onLoad", "onError"], Iw = ["onKeyDown", "onKeyPress", "onKeyUp"], Fw = ["onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting"], Nw = ["onClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp"], Ow = ["onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop"], Bw = ["onSelect"], Hw = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], Uw = ["onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut"], jw = ["onScroll"], $w = ["onWheel"], zw = ["onAnimationStart", "onAnimationEnd", "onAnimationIteration"], Gw = ["onTransitionEnd"], Vw = ["onToggle"], Ww = ["onChange"], Xw = [...kw, ...Rw, ...Mw, ...Dw, ...Lw, ...Iw, ...Fw, ...Nw, ...Ow, ...Bw, ...Hw, ...Uw, ...jw, ...$w, ...zw, ...Gw, ...Ww, ...Vw];
function ay(d, t) {
  const e = {};
  for (const s of Xw) {
    const i = d[s];
    i && (t ? e[s] = ((r) => i(r, t(s))) : e[s] = i);
  }
  return e;
}
var qw = "Invariant failed";
function Et(d, t) {
  if (!d) throw new Error(qw);
}
var rf, Ng;
function Yw() {
  if (Ng) return rf;
  Ng = 1;
  var d = function() {
  };
  return rf = d, rf;
}
var Kw = Yw();
const Me = Iy(Kw), oy = H.createContext(null), Jw = "noopener noreferrer nofollow";
class Qw {
  constructor() {
    this.externalLinkEnabled = true, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = false, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }
  setDocument(t) {
    this.pdfDocument = t;
  }
  setViewer(t) {
    this.pdfViewer = t;
  }
  setExternalLinkRel(t) {
    this.externalLinkRel = t;
  }
  setExternalLinkTarget(t) {
    this.externalLinkTarget = t;
  }
  setHash() {
  }
  setHistory() {
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return Et(this.pdfViewer), this.pdfViewer.currentPageNumber || 0;
  }
  set page(t) {
    Et(this.pdfViewer), this.pdfViewer.currentPageNumber = t;
  }
  get rotation() {
    return 0;
  }
  set rotation(t) {
  }
  addLinkAttributes(t, e, s) {
    t.href = e, t.rel = this.externalLinkRel || Jw, t.target = s ? "_blank" : this.externalLinkTarget || "";
  }
  goToDestination(t) {
    return new Promise((e) => {
      Et(this.pdfDocument), Et(t), typeof t == "string" ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      Et(Array.isArray(e));
      const s = e[0];
      new Promise((i) => {
        Et(this.pdfDocument), s instanceof Object ? this.pdfDocument.getPageIndex(s).then((r) => {
          i(r);
        }).catch(() => {
          Et(false);
        }) : typeof s == "number" ? i(s) : Et(false);
      }).then((i) => {
        const r = i + 1;
        Et(this.pdfViewer), Et(r >= 1 && r <= this.pagesCount), this.pdfViewer.scrollPageIntoView({ dest: e, pageIndex: i, pageNumber: r });
      });
    });
  }
  goToPage(t) {
    const e = t - 1;
    Et(this.pdfViewer), Et(t >= 1 && t <= this.pagesCount), this.pdfViewer.scrollPageIntoView({ pageIndex: e, pageNumber: t });
  }
  goToXY() {
  }
  cachePageRef() {
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  executeNamedAction() {
  }
  executeSetOCGState() {
  }
  isPageVisible() {
    return true;
  }
  isPageCached() {
    return true;
  }
  navigateTo(t) {
    this.goToDestination(t);
  }
}
function mo({ children: d, type: t }) {
  return M.jsx("div", { className: `react-pdf__message react-pdf__message--${t}`, children: d });
}
const Og = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
function Zw(d, t) {
  switch (t.type) {
    case "RESOLVE":
      return { value: t.value, error: void 0 };
    case "REJECT":
      return { value: false, error: t.error };
    case "RESET":
      return { value: void 0, error: void 0 };
    default:
      return d;
  }
}
function Vl() {
  return H.useReducer(Zw, { value: void 0, error: void 0 });
}
const Gu = typeof window < "u", ly = Gu && window.location.protocol === "file:";
function tv(d) {
  return typeof d < "u";
}
function Pr(d) {
  return tv(d) && d !== null;
}
function ev(d) {
  return typeof d == "string";
}
function sv(d) {
  return d instanceof ArrayBuffer;
}
function iv(d) {
  return Et(Gu), d instanceof Blob;
}
function Mp(d) {
  return ev(d) && /^data:/.test(d);
}
function Bg(d) {
  Et(Mp(d));
  const [t = "", e = ""] = d.split(",");
  return t.split(";").indexOf("base64") !== -1 ? atob(e) : unescape(e);
}
function nv() {
  return Gu && window.devicePixelRatio || 1;
}
const hy = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function Hg() {
  Me(!ly, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${hy}`);
}
function rv() {
  Me(!ly, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${hy}`);
}
function Ya(d) {
  d != null && d.cancel && d.cancel();
}
function Dp(d, t) {
  return Object.defineProperty(d, "width", { get() {
    return this.getViewport({ scale: t }).width;
  }, configurable: true }), Object.defineProperty(d, "height", { get() {
    return this.getViewport({ scale: t }).height;
  }, configurable: true }), Object.defineProperty(d, "originalWidth", { get() {
    return this.getViewport({ scale: 1 }).width;
  }, configurable: true }), Object.defineProperty(d, "originalHeight", { get() {
    return this.getViewport({ scale: 1 }).height;
  }, configurable: true }), d;
}
function cy(d) {
  return d.name === "AbortException" || d.name === "RenderingCancelledException";
}
function av(d) {
  return new Promise((t, e) => {
    const s = new FileReader();
    s.onload = () => {
      if (!s.result) return e(new Error("Error while reading a file."));
      t(s.result);
    }, s.onerror = (i) => {
      if (!i.target) return e(new Error("Error while reading a file."));
      const { error: r } = i.target;
      if (!r) return e(new Error("Error while reading a file."));
      switch (r.code) {
        case r.NOT_FOUND_ERR:
          return e(new Error("Error while reading a file: File not found."));
        case r.SECURITY_ERR:
          return e(new Error("Error while reading a file: Security error."));
        case r.ABORT_ERR:
          return e(new Error("Error while reading a file: Aborted."));
        default:
          return e(new Error("Error while reading a file."));
      }
    }, s.readAsArrayBuffer(d);
  });
}
const { PDFDataRangeTransport: ov } = Pw, lv = (d, t) => {
  switch (t) {
    case Og.NEED_PASSWORD: {
      const e = prompt("Enter the password to open this PDF file.");
      d(e);
      break;
    }
    case Og.INCORRECT_PASSWORD: {
      const e = prompt("Invalid password. Please try again.");
      d(e);
      break;
    }
  }
};
function Ug(d) {
  return typeof d == "object" && d !== null && ("data" in d || "range" in d || "url" in d);
}
const hv = H.forwardRef(function({ children: t, className: e, error: s = "Failed to load PDF file.", externalLinkRel: i, externalLinkTarget: r, file: a, inputRef: o, imageResourcesPath: l, loading: h = "Loading PDF…", noData: c = "No PDF file specified.", onItemClick: u, onLoadError: p, onLoadProgress: m, onLoadSuccess: A, onPassword: y = lv, onSourceError: v, onSourceSuccess: w, options: S, renderMode: E, rotate: _, scale: C, ...x }, T) {
  const [P, k] = Vl(), { value: D, error: L } = P, [F, V] = Vl(), { value: O, error: X } = F, B = H.useRef(new Qw()), N = H.useRef([]), et = H.useRef(void 0), nt = H.useRef(void 0);
  a && a !== et.current && Ug(a) && (Me(!go(a, et.current), `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`), et.current = a), S && S !== nt.current && (Me(!go(S, nt.current), `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`), nt.current = S);
  const ee = H.useRef({ scrollPageIntoView: (kt) => {
    const { dest: Yt, pageNumber: Lt, pageIndex: Ee = Lt - 1 } = kt;
    if (u) {
      u({ dest: Yt, pageIndex: Ee, pageNumber: Lt });
      return;
    }
    const Qe = N.current[Ee];
    if (Qe) {
      Qe.scrollIntoView();
      return;
    }
    Me(false, `An internal link leading to page ${Lt} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
  } });
  H.useImperativeHandle(T, () => ({ linkService: B, pages: N, viewer: ee }), []);
  function Je() {
    w && w();
  }
  function at() {
    L && (Me(false, L.toString()), v && v(L));
  }
  function ht() {
    k({ type: "RESET" });
  }
  H.useEffect(ht, [a, k]);
  const se = H.useCallback(async () => {
    if (!a) return null;
    if (typeof a == "string") return Mp(a) ? { data: Bg(a) } : (Hg(), { url: a });
    if (a instanceof ov) return { range: a };
    if (sv(a)) return { data: a };
    if (Gu && iv(a)) return { data: await av(a) };
    if (Et(typeof a == "object"), Et(Ug(a)), "url" in a && typeof a.url == "string") {
      if (Mp(a.url)) {
        const { url: kt, ...Yt } = a;
        return { data: Bg(kt), ...Yt };
      }
      Hg();
    }
    return a;
  }, [a]);
  H.useEffect(() => {
    const kt = gd(se());
    return kt.promise.then((Yt) => {
      k({ type: "RESOLVE", value: Yt });
    }).catch((Yt) => {
      k({ type: "REJECT", error: Yt });
    }), () => {
      Ya(kt);
    };
  }, [se, k]), H.useEffect(() => {
    if (!(typeof D > "u")) {
      if (D === false) {
        at();
        return;
      }
      Je();
    }
  }, [D]);
  function de() {
    O && (A && A(O), N.current = new Array(O.numPages), B.current.setDocument(O));
  }
  function ve() {
    X && (Me(false, X.toString()), p && p(X));
  }
  H.useEffect(function() {
    V({ type: "RESET" });
  }, [V, D]), H.useEffect(function() {
    if (!D) return;
    const Yt = S ? { ...D, ...S } : D, Lt = Gp(Yt);
    m && (Lt.onProgress = m), y && (Lt.onPassword = y);
    const Ee = Lt;
    return Ee.promise.then((Qe) => {
      Ee.destroyed || V({ type: "RESOLVE", value: Qe });
    }).catch((Qe) => {
      Ee.destroyed || V({ type: "REJECT", error: Qe });
    }), () => {
      Ee.destroy(), V({ type: "RESET" });
    };
  }, [S, V, D]), H.useEffect(() => {
    if (!(typeof O > "u")) {
      if (O === false) {
        ve();
        return;
      }
      de();
    }
  }, [O]), H.useEffect(function() {
    B.current.setViewer(ee.current), B.current.setExternalLinkRel(i), B.current.setExternalLinkTarget(r);
  }, [i, r]);
  const At = H.useCallback((kt, Yt) => {
    N.current[kt] = Yt;
  }, []), Hs = H.useCallback((kt) => {
    delete N.current[kt];
  }, []), ni = H.useMemo(() => ({ imageResourcesPath: l, linkService: B.current, onItemClick: u, pdf: O, registerPage: At, renderMode: E, rotate: _, scale: C, unregisterPage: Hs }), [l, u, O, At, E, _, C, Hs]), Ii = H.useMemo(() => ay(x, () => O), [x, O]);
  function De() {
    function kt(Lt) {
      return !!(Lt != null && Lt.pdf);
    }
    if (!kt(ni)) throw new Error("pdf is undefined");
    const Yt = typeof t == "function" ? t(ni) : t;
    return M.jsx(oy.Provider, { value: ni, children: Yt });
  }
  function Tt() {
    return a ? O == null ? M.jsx(mo, { type: "loading", children: typeof h == "function" ? h() : h }) : O === false ? M.jsx(mo, { type: "error", children: typeof s == "function" ? s() : s }) : De() : M.jsx(mo, { type: "no-data", children: typeof c == "function" ? c() : c });
  }
  return M.jsx("div", { className: zu("react-pdf__Document", e), ref: o, ...Ii, children: Tt() });
});
function dy() {
  return H.useContext(oy);
}
function uy() {
  for (var d = [], t = 0; t < arguments.length; t++) d[t] = arguments[t];
  var e = d.filter(Boolean);
  if (e.length <= 1) {
    var s = e[0];
    return s || null;
  }
  return function(r) {
    for (var a = 0, o = e; a < o.length; a++) {
      var l = o[a];
      typeof l == "function" ? l(r) : l && (l.current = r);
    }
  };
}
const fy = H.createContext(null);
function Vu() {
  return H.useContext(fy);
}
function cv() {
  const d = dy(), t = Vu();
  Et(t);
  const e = { ...d, ...t }, { filterAnnotations: s, imageResourcesPath: i, linkService: r, onGetAnnotationsError: a, onGetAnnotationsSuccess: o, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: h, page: c, pdf: u, renderForms: p, rotate: m, scale: A = 1 } = e;
  Et(u), Et(c), Et(r);
  const [y, v] = Vl(), { value: w, error: S } = y, E = H.useRef(null);
  Me(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
  function _() {
    w && o && o(w);
  }
  function C() {
    S && (Me(false, S.toString()), a && a(S));
  }
  H.useEffect(function() {
    v({ type: "RESET" });
  }, [v, c]), H.useEffect(function() {
    if (!c) return;
    const D = gd(c.getAnnotations()), L = D;
    return D.promise.then((F) => {
      v({ type: "RESOLVE", value: F });
    }).catch((F) => {
      v({ type: "REJECT", error: F });
    }), () => {
      Ya(L);
    };
  }, [v, c]), H.useEffect(() => {
    if (w !== void 0) {
      if (w === false) {
        C();
        return;
      }
      _();
    }
  }, [w]);
  function x() {
    h && h();
  }
  function T(k) {
    Me(false, `${k}`), l && l(k);
  }
  const P = H.useMemo(() => c.getViewport({ scale: A, rotation: m }), [c, m, A]);
  return H.useEffect(function() {
    if (!u || !c || !r || !w) return;
    const { current: D } = E;
    if (!D) return;
    const L = P.clone({ dontFlip: true }), F = { accessibilityManager: null, annotationCanvasMap: null, annotationEditorUIManager: null, annotationStorage: u.annotationStorage, commentManager: null, div: D, l10n: null, linkService: r, page: c, structTreeLayer: null, viewport: L }, V = { annotations: s ? s({ annotations: w }) : w, annotationStorage: u.annotationStorage, div: D, imageResourcesPath: i, linkService: r, page: c, renderForms: p, viewport: L };
    D.innerHTML = "";
    try {
      new qp(F).render(V), x();
    } catch (O) {
      T(O);
    }
    return () => {
    };
  }, [w, s, i, r, c, u, p, P]), M.jsx("div", { className: zu("react-pdf__Page__annotations", "annotationLayer"), ref: E });
}
const py = { Document: null, DocumentFragment: null, Part: "group", Sect: "group", Div: "group", Aside: "note", NonStruct: "none", P: null, H: "heading", Title: null, FENote: "note", Sub: "group", Lbl: null, Span: null, Em: null, Strong: null, Link: "link", Annot: "note", Form: "form", Ruby: null, RB: null, RT: null, RP: null, Warichu: null, WT: null, WP: null, L: "list", LI: "listitem", LBody: null, Table: "table", TR: "row", TH: "columnheader", TD: "cell", THead: "columnheader", TBody: null, TFoot: null, Caption: null, Figure: "figure", Formula: null, Artifact: null }, dv = /^H(\d+)$/;
function uv(d) {
  return d in py;
}
function Wu(d) {
  return "children" in d;
}
function gy(d) {
  return Wu(d) ? d.children.length === 1 && 0 in d.children && "id" in d.children[0] : false;
}
function fv(d) {
  const t = {};
  if (Wu(d)) {
    const { role: e } = d, s = e.match(dv);
    if (s) t.role = "heading", t["aria-level"] = Number(s[1]);
    else if (uv(e)) {
      const i = py[e];
      i && (t.role = i);
    }
  }
  return t;
}
function my(d) {
  const t = {};
  if (Wu(d)) {
    if (d.alt !== void 0 && (t["aria-label"] = d.alt), d.lang !== void 0 && (t.lang = d.lang), gy(d)) {
      const [e] = d.children;
      if (e) {
        const s = my(e);
        return { ...t, ...s };
      }
    }
  } else "id" in d && (t["aria-owns"] = d.id);
  return t;
}
function pv(d) {
  return d ? { ...fv(d), ...my(d) } : null;
}
function by({ className: d, node: t }) {
  const e = H.useMemo(() => pv(t), [t]), s = H.useMemo(() => !Wu(t) || gy(t) ? null : t.children.map((i, r) => M.jsx(by, { node: i }, r)), [t]);
  return M.jsx("span", { className: d, ...e, children: s });
}
function gv() {
  const d = Vu();
  Et(d);
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = d, [s, i] = Vl(), { value: r, error: a } = s, { customTextRenderer: o, page: l } = d;
  function h() {
    r && e && e(r);
  }
  function c() {
    a && (Me(false, a.toString()), t && t(a));
  }
  return H.useEffect(function() {
    i({ type: "RESET" });
  }, [i, l]), H.useEffect(function() {
    if (o || !l) return;
    const p = gd(l.getStructTree()), m = p;
    return p.promise.then((A) => {
      i({ type: "RESOLVE", value: A });
    }).catch((A) => {
      i({ type: "REJECT", error: A });
    }), () => Ya(m);
  }, [o, l, i]), H.useEffect(() => {
    if (r !== void 0) {
      if (r === false) {
        c();
        return;
      }
      h();
    }
  }, [r]), r ? M.jsx(by, { className: "react-pdf__Page__structTree structTree", node: r }) : null;
}
const jg = Mi;
function mv(d) {
  const t = Vu();
  Et(t);
  const e = { ...t, ...d }, { _className: s, canvasBackground: i, devicePixelRatio: r = nv(), onRenderError: a, onRenderSuccess: o, page: l, renderForms: h, renderTextLayer: c, pageColors: u, rotate: p, scale: m } = e, { canvasRef: A } = d;
  Et(l);
  const y = H.useRef(null);
  function v() {
    l && o && o(Dp(l, m));
  }
  function w(C) {
    cy(C) || (Me(false, C.toString()), a && a(C));
  }
  const S = H.useMemo(() => l.getViewport({ scale: m * r, rotation: p }), [r, l, p, m]), E = H.useMemo(() => l.getViewport({ scale: m, rotation: p }), [l, p, m]);
  H.useEffect(function() {
    if (!l) return;
    l.cleanup();
    const { current: x } = y;
    if (!x) return;
    x.width = S.width, x.height = S.height, x.style.width = `${Math.floor(E.width)}px`, x.style.height = `${Math.floor(E.height)}px`, x.style.visibility = "hidden";
    const T = { annotationMode: h ? jg.ENABLE_FORMS : jg.ENABLE, canvas: x, canvasContext: x.getContext("2d", { alpha: false }), pageColors: u, viewport: S };
    i && (T.background = i);
    const P = l.render(T), k = P;
    return P.promise.then(() => {
      x.style.visibility = "", v();
    }).catch(w), () => Ya(k);
  }, [i, l, u, h, S, E]);
  const _ = H.useCallback(() => {
    const { current: C } = y;
    C && (C.width = 0, C.height = 0);
  }, []);
  return H.useEffect(() => _, [_]), M.jsx("canvas", { className: `${s}__canvas`, dir: "ltr", ref: uy(A, y), style: { display: "block", userSelect: "none" }, children: c ? M.jsx(gv, {}) : null });
}
function bv(d) {
  return "str" in d;
}
const yv = /* @__PURE__ */ new Set(["base", "embed", "iframe", "link", "meta", "object", "script", "style", "template"]), Av = /* @__PURE__ */ new Set(["action", "formaction", "href", "poster", "src", "xlink:href"]);
function wv(d) {
  let t = "";
  for (const e of d) {
    const s = e.charCodeAt(0);
    s <= 32 || s === 127 || (t += e.toLowerCase());
  }
  return t.startsWith("data:") || t.startsWith("javascript:") || t.startsWith("vbscript:");
}
function vv(d) {
  return d.nodeType === Node.ELEMENT_NODE;
}
function yy(d) {
  return vv(d) && d instanceof HTMLElement;
}
function Ev(d) {
  return yy(d) && yv.has(d.tagName.toLowerCase());
}
function Sv(d) {
  const t = document.createElement(d.tagName.toLowerCase());
  return Array.from(d.attributes).forEach((e) => {
    const s = e.name.toLowerCase();
    s.startsWith("on") || s === "srcdoc" || Av.has(s) && wv(e.value) || t.setAttribute(e.name, e.value);
  }), Array.from(d.childNodes).forEach((e) => {
    t.append(Ay(e));
  }), t;
}
function Ay(d) {
  var t;
  return yy(d) && !Ev(d) ? Sv(d) : document.createTextNode((t = d.textContent) !== null && t !== void 0 ? t : "");
}
function _v(d, t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const s = document.createDocumentFragment();
  Array.from(e.content.childNodes).forEach((i) => {
    s.append(Ay(i));
  }), d.replaceChildren(s);
}
function Cv() {
  const d = Vu();
  Et(d);
  const { customTextRenderer: t, onGetTextError: e, onGetTextSuccess: s, onRenderTextLayerError: i, onRenderTextLayerSuccess: r, page: a, pageIndex: o, pageNumber: l, rotate: h, scale: c } = d;
  Et(a);
  const [u, p] = Vl(), { value: m, error: A } = u, y = H.useRef(null);
  Me(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
  function v() {
    m && s && s(m);
  }
  function w() {
    A && (Me(false, A.toString()), e && e(A));
  }
  H.useEffect(function() {
    p({ type: "RESET" });
  }, [a, p]), H.useEffect(function() {
    if (!a) return;
    const P = gd(a.getTextContent()), k = P;
    return P.promise.then((D) => {
      p({ type: "RESOLVE", value: D });
    }).catch((D) => {
      p({ type: "REJECT", error: D });
    }), () => Ya(k);
  }, [a, p]), H.useEffect(() => {
    if (m !== void 0) {
      if (m === false) {
        w();
        return;
      }
      v();
    }
  }, [m]);
  const S = H.useCallback(() => {
    r && r();
  }, [r]), E = H.useCallback((T) => {
    cy(T) || (Me(false, T.toString()), i && i(T));
  }, [i]);
  function _() {
    const T = y.current;
    T && T.classList.add("selecting");
  }
  function C() {
    const T = y.current;
    T && T.classList.remove("selecting");
  }
  const x = H.useMemo(() => a.getViewport({ scale: c, rotation: h }), [a, h, c]);
  return H.useLayoutEffect(function() {
    if (!a || !m) return;
    const { current: P } = y;
    if (!P) return;
    P.innerHTML = "";
    const k = a.streamTextContent({ includeMarkedContent: true }), D = { container: P, textContentSource: k, viewport: x }, L = new Ch(D), F = L;
    return L.render().then(() => {
      const V = document.createElement("div");
      V.className = "endOfContent", P.append(V);
      const O = P.querySelectorAll('[role="presentation"]');
      if (t) {
        let X = 0;
        m.items.forEach((B, N) => {
          if (!bv(B)) return;
          const et = O[X];
          if (!et) return;
          const nt = t({ pageIndex: o, pageNumber: l, itemIndex: N, ...B });
          _v(et, nt), X += B.str && B.hasEOL ? 2 : 1;
        });
      }
      S();
    }).catch(E), () => Ya(F);
  }, [t, E, S, a, o, l, m, x]), M.jsx("div", { className: zu("react-pdf__Page__textContent", "textLayer"), onMouseUp: C, onMouseDown: _, ref: y });
}
const $g = 1;
function xv(d) {
  const e = { ...dy(), ...d }, { _className: s = "react-pdf__Page", _enableRegisterUnregisterPage: i = true, canvasBackground: r, canvasRef: a, children: o, className: l, customRenderer: h, customTextRenderer: c, devicePixelRatio: u, error: p = "Failed to load the page.", filterAnnotations: m, height: A, inputRef: y, loading: v = "Loading page…", noData: w = "No page specified.", onGetAnnotationsError: S, onGetAnnotationsSuccess: E, onGetStructTreeError: _, onGetStructTreeSuccess: C, onGetTextError: x, onGetTextSuccess: T, onLoadError: P, onLoadSuccess: k, onRenderAnnotationLayerError: D, onRenderAnnotationLayerSuccess: L, onRenderError: F, onRenderSuccess: V, onRenderTextLayerError: O, onRenderTextLayerSuccess: X, pageColors: B, pageIndex: N, pageNumber: et, pdf: nt, registerPage: ee, renderAnnotationLayer: Je = true, renderForms: at = false, renderMode: ht = "canvas", renderTextLayer: se = true, rotate: de, scale: ve = $g, unregisterPage: At, width: Hs, ...ni } = e, [Ii, De] = Vl(), { value: Tt, error: kt } = Ii, Yt = H.useRef(null);
  Et(nt);
  const Lt = Pr(et) ? et - 1 : N ?? null, Ee = et ?? (Pr(N) ? N + 1 : null), Qe = de ?? (Tt ? Tt.rotate : null), Us = H.useMemo(() => {
    if (!Tt) return null;
    let Tn = 1;
    const Qa = ve ?? $g;
    if (Hs || A) {
      const Pn = Tt.getViewport({ scale: 1, rotation: Qe });
      Hs ? Tn = Hs / Pn.width : A && (Tn = A / Pn.height);
    }
    return Qa * Tn;
  }, [A, Tt, Qe, ve, Hs]);
  H.useEffect(function() {
    return () => {
      Pr(Lt) && i && At && At(Lt);
    };
  }, [i, nt, Lt, At]);
  function vy() {
    if (k) {
      if (!Tt || !Us) return;
      k(Dp(Tt, Us));
    }
    if (i && ee) {
      if (!Pr(Lt) || !Yt.current) return;
      ee(Lt, Yt.current);
    }
  }
  function Ey() {
    kt && (Me(false, kt.toString()), P && P(kt));
  }
  H.useEffect(function() {
    De({ type: "RESET" });
  }, [De, nt, Lt]), H.useEffect(function() {
    if (!nt || !Ee) return;
    const Qa = gd(nt.getPage(Ee)), Pn = Qa;
    return Qa.promise.then((qu) => {
      De({ type: "RESOLVE", value: qu });
    }).catch((qu) => {
      De({ type: "REJECT", error: qu });
    }), () => Ya(Pn);
  }, [De, nt, Ee]), H.useEffect(() => {
    if (Tt !== void 0) {
      if (Tt === false) {
        Ey();
        return;
      }
      vy();
    }
  }, [Tt, Us]);
  const Xu = H.useMemo(() => Pr(Lt) && Ee && Pr(Qe) && Pr(Us) ? { _className: s, canvasBackground: r, customTextRenderer: c, devicePixelRatio: u, filterAnnotations: m, onGetAnnotationsError: S, onGetAnnotationsSuccess: E, onGetStructTreeError: _, onGetStructTreeSuccess: C, onGetTextError: x, onGetTextSuccess: T, onRenderAnnotationLayerError: D, onRenderAnnotationLayerSuccess: L, onRenderError: F, onRenderSuccess: V, onRenderTextLayerError: O, onRenderTextLayerSuccess: X, page: Tt, pageColors: B, pageIndex: Lt, pageNumber: Ee, renderForms: at, renderTextLayer: se, rotate: Qe, scale: Us } : null, [s, r, c, u, m, S, E, _, C, x, T, D, L, F, V, O, X, Tt, B, Lt, Ee, at, se, Qe, Us]), Sy = H.useMemo(() => ay(ni, () => Tt && (Us ? Dp(Tt, Us) : void 0)), [ni, Tt, Us]), md = `${Lt}@${Us}/${Qe}`;
  function _y() {
    switch (ht) {
      case "custom":
        return Et(h), M.jsx(h, {}, `${md}_custom`);
      case "none":
        return null;
      case "canvas":
      default:
        return M.jsx(mv, { canvasRef: a }, `${md}_canvas`);
    }
  }
  function Cy() {
    return se ? M.jsx(Cv, {}, `${md}_text`) : null;
  }
  function xy() {
    return Je ? M.jsx(cv, {}, `${md}_annotations`) : null;
  }
  function Ty() {
    function Tn(Pn) {
      return !!(Pn != null && Pn.page);
    }
    if (!Tn(Xu)) throw new Error("page is undefined");
    const Qa = typeof o == "function" ? o(Xu) : o;
    return M.jsxs(fy.Provider, { value: Xu, children: [_y(), Cy(), xy(), Qa] });
  }
  function Py() {
    return Ee ? nt === null || Tt === void 0 || Tt === null ? M.jsx(mo, { type: "loading", children: typeof v == "function" ? v() : v }) : nt === false || Tt === false ? M.jsx(mo, { type: "error", children: typeof p == "function" ? p() : p }) : Ty() : M.jsx(mo, { type: "no-data", children: typeof w == "function" ? w() : w });
  }
  return M.jsx("div", { className: zu(s, l), "data-page-number": Ee, ref: uy(y, Yt), style: { "--scale-round-x": "1px", "--scale-round-y": "1px", "--scale-factor": "1", "--user-unit": `${Us}`, "--total-scale-factor": "calc(var(--scale-factor) * var(--user-unit))", backgroundColor: r || "white", position: "relative", minWidth: "min-content", minHeight: "min-content" }, ...Sy, children: Py() });
}
rv();
Ns.workerSrc = "pdf.worker.mjs";
Ns.workerSrc = new URL("./pdf.worker.min-qwK7q_zL.mjs", import.meta.url).toString();
const wy = "./figma/case-report-demo.pdf";
function zg(d) {
  return d.toLocaleString("zh-CN");
}
function Lp({ compact: d = false }) {
  function t() {
    const e = document.createElement("a");
    e.href = wy, e.download = "低空经济政策环境研究-演示预览.pdf", e.click(), Td.info("正在下载演示预览文件，真实报告下载服务尚未接入。");
  }
  return d ? M.jsx(kr, { content: "下载演示PDF", children: M.jsx(Fs, { type: "text", className: "pdf-toolbar-button", "aria-label": "下载演示PDF", onClick: t, children: M.jsx(Ip, {}) }) }) : M.jsx(Fs, { type: "primary", onClick: t, children: "下载报告" });
}
function Tv() {
  const d = H.useRef(null), t = H.useRef(null), [e, s] = H.useState(0), [i, r] = H.useState(1), [a, o] = H.useState(0), [l, h] = H.useState(1), [c, u] = H.useState(720), [p, m] = H.useState(false);
  H.useEffect(() => {
    const v = t.current;
    if (!v) return;
    const w = () => u(Math.max(320, Math.min(900, v.clientWidth - 64)));
    w();
    const S = new ResizeObserver(w);
    return S.observe(v), () => S.disconnect();
  }, []);
  const A = Math.round(c * l), y = `${Math.round(l * 100)}%`;
  return M.jsxs("section", { className: "pdf-reader-shell", ref: d, "aria-label": "PDF报告阅读器", children: [M.jsxs("div", { className: "pdf-reader-toolbar", children: [M.jsxs("div", { className: "pdf-toolbar-group", children: [M.jsx(kr, { content: "上一页", children: M.jsx(Fs, { type: "text", className: "pdf-toolbar-button", "aria-label": "上一页", disabled: i <= 1, onClick: () => r((v) => Math.max(1, v - 1)), children: M.jsx(Ny, {}) }) }), M.jsxs("span", { className: "pdf-page-status", children: [M.jsx("strong", { children: i }), M.jsx("span", { children: "/" }), M.jsx("span", { children: e || "-" })] }), M.jsx(kr, { content: "下一页", children: M.jsx(Fs, { type: "text", className: "pdf-toolbar-button", "aria-label": "下一页", disabled: !e || i >= e, onClick: () => r((v) => Math.min(e, v + 1)), children: M.jsx(Oy, {}) }) })] }), M.jsxs("div", { className: "pdf-toolbar-group pdf-toolbar-center", children: [M.jsx(kr, { content: "缩小", children: M.jsx(Fs, { type: "text", className: "pdf-toolbar-button", "aria-label": "缩小", disabled: l <= 0.6, onClick: () => h((v) => Math.max(0.6, Number((v - 0.1).toFixed(1)))), children: M.jsx(By, {}) }) }), M.jsx("span", { className: "pdf-zoom-status", children: y }), M.jsx(kr, { content: "放大", children: M.jsx(Fs, { type: "text", className: "pdf-toolbar-button", "aria-label": "放大", disabled: l >= 1.8, onClick: () => h((v) => Math.min(1.8, Number((v + 0.1).toFixed(1)))), children: M.jsx(Hy, {}) }) }), M.jsx(Fs, { type: "text", className: "pdf-fit-button", onClick: () => h(1), children: "适合宽度" })] }), M.jsxs("div", { className: "pdf-toolbar-group", children: [M.jsx(kr, { content: "顺时针旋转", children: M.jsx(Fs, { type: "text", className: "pdf-toolbar-button", "aria-label": "顺时针旋转", onClick: () => o((v) => (v + 90) % 360), children: M.jsx(Uy, {}) }) }), M.jsx(kr, { content: "全屏阅读", children: M.jsx(Fs, { type: "text", className: "pdf-toolbar-button", "aria-label": "全屏阅读", onClick: () => {
    var v;
    return (v = d.current) == null ? void 0 : v.requestFullscreen();
  }, children: M.jsx(jy, {}) }) }), M.jsx(Lp, { compact: true })] })] }), M.jsx("div", { className: "pdf-reader-stage", ref: t, children: p ? M.jsxs("div", { className: "pdf-reader-error", children: [M.jsx("strong", { children: "PDF预览加载失败" }), M.jsx("span", { children: "请刷新页面或下载演示文件查看。" }), M.jsx(Lp, {})] }) : M.jsx(hv, { file: wy, loading: M.jsx("div", { className: "pdf-reader-loading", children: M.jsx(ig, { tip: "正在加载PDF…" }) }), onLoadSuccess: ({ numPages: v }) => {
    s(v), r((w) => Math.min(w, v));
  }, onLoadError: () => m(true), children: M.jsx(xv, { pageNumber: i, width: A, rotate: a, renderAnnotationLayer: true, renderTextLayer: true, loading: M.jsx("div", { className: "pdf-reader-loading", children: M.jsx(ig, {}) }) }) }) })] });
}
function Iv() {
  const d = Fy(), t = H.useMemo(() => ng.find((s) => s.id === d) ?? ng[0], [d]), e = H.useMemo(() => Array.from(/* @__PURE__ */ new Set([...t.tags, "城市治理", "产业战略"])), [t.tags]);
  return M.jsxs("div", { className: "case-detail-page", children: [M.jsxs("section", { className: "case-detail-overview", "aria-labelledby": "case-detail-title", children: [M.jsxs("div", { className: "case-detail-title-group", children: [M.jsx("h1", { id: "case-detail-title", children: t.title }), M.jsxs("div", { className: "case-detail-meta", children: [M.jsxs("span", { children: ["作者：", t.author] }), M.jsx("i", {}), M.jsxs("span", { children: ["发布时间 ", t.updatedAt] }), M.jsx("i", {}), M.jsxs("span", { children: ["用户评分：", t.rating.toFixed(1), " / 5.0"] }), M.jsx("i", {}), M.jsxs("span", { children: ["浏览量：", zg(t.views)] }), M.jsx("i", {}), M.jsxs("span", { children: ["下载量 ", zg(t.downloads)] })] })] }), M.jsxs("div", { className: "case-detail-actions-row", children: [M.jsx("div", { className: "case-detail-tags", children: e.map((s) => M.jsx("span", { children: s }, s)) }), M.jsxs("div", { className: "case-detail-actions", children: [M.jsx(Fs, { type: "text", onClick: () => Td.info("模板库服务尚未接入，当前不执行入库。"), children: "加入模板库" }), M.jsx(Fs, { type: "text", onClick: () => Td.info("知识库服务尚未接入，当前不执行入库。"), children: "加入知识库" }), M.jsx(Fs, { type: "text", onClick: () => Td.info("评分与反馈服务尚未接入。"), children: "评分及反馈" }), M.jsx(Lp, {})] })] })] }), M.jsxs("section", { className: "case-detail-summary", "aria-labelledby": "case-summary-title", children: [M.jsxs("div", { className: "case-detail-summary-title", children: [M.jsx("img", { src: "./figma/case-detail-ai.svg", alt: "", "aria-hidden": "true" }), M.jsx("strong", { id: "case-summary-title", children: "报告摘要" })] }), M.jsx("p", { children: "本研究回应“城市级低空经济发展需要怎样的政策环境”这一问题：系统梳理国家与地方政策、城市试点与监管趋势，发现低空经济的竞争焦点已从单点飞行能力转向平台治理、场景运营与标准体系，物流、巡检、应急场景具备先行条件。结论是建议以城市级运行管理平台为牵引，分场景形成闭环试点，并同步建立数据采集、指标评估与成果复用机制。" })] }), M.jsx(Tv, {})] });
}
export { Iv as default };
