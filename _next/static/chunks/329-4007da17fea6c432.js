(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [329],
  {
    94470: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = function (e) {
          return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === n.call(e);
        },
        s = function (e) {
          if (!e || "[object Object]" !== n.call(e)) return !1;
          var r,
            i = t.call(e, "constructor"),
            a =
              e.constructor &&
              e.constructor.prototype &&
              t.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !i && !a) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r);
        },
        o = function (e, t) {
          r && "__proto__" === t.name
            ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        l = function (e, n) {
          if ("__proto__" === n) {
            if (!t.call(e, n)) return;
            if (i) return i(e, n).value;
          }
          return e[n];
        };
      e.exports = function e() {
        var t,
          n,
          r,
          i,
          c,
          u,
          h = arguments[0],
          d = 1,
          p = arguments.length,
          f = !1;
        for (
          "boolean" == typeof h && ((f = h), (h = arguments[1] || {}), (d = 2)),
            (null == h || ("object" != typeof h && "function" != typeof h)) &&
              (h = {});
          d < p;
          ++d
        )
          if (((t = arguments[d]), null != t))
            for (n in t)
              (r = l(h, n)),
                h !== (i = l(t, n)) &&
                  (f && i && (s(i) || (c = a(i)))
                    ? (c
                        ? ((c = !1), (u = r && a(r) ? r : []))
                        : (u = r && s(r) ? r : {}),
                      o(h, { name: n, newValue: e(f, u, i) }))
                    : void 0 !== i && o(h, { name: n, newValue: i }));
        return h;
      };
    },
    18139: function (e) {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        a = /^:\s*/,
        s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        o = /^[;\s]*/,
        l = /^\s+|\s+$/g;
      function c(e) {
        return e ? e.replace(l, "") : "";
      }
      e.exports = function (e, l) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        l = l || {};
        var u = 1,
          h = 1;
        function d(e) {
          var t = e.match(n);
          t && (u += t.length);
          var r = e.lastIndexOf("\n");
          h = ~r ? e.length - r : h + e.length;
        }
        function p() {
          var e = { line: u, column: h };
          return function (t) {
            return (t.position = new f(e)), T(r), t;
          };
        }
        function f(e) {
          (this.start = e),
            (this.end = { line: u, column: h }),
            (this.source = l.source);
        }
        f.prototype.content = e;
        var E = [];
        function m(t) {
          var n = Error(l.source + ":" + u + ":" + h + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = l.source),
            (n.line = u),
            (n.column = h),
            (n.source = e),
            l.silent)
          )
            E.push(n);
          else throw n;
        }
        function T(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return d(r), (e = e.slice(r.length)), n;
          }
        }
        function A(e) {
          var t;
          for (e = e || []; (t = _()); ) !1 !== t && e.push(t);
          return e;
        }
        function _() {
          var t = p();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return m("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (h += 2),
              d(r),
              (e = e.slice(n)),
              (h += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        return (
          T(r),
          (function () {
            var e,
              n = [];
            for (
              A(n);
              (e = (function () {
                var e = p(),
                  n = T(i);
                if (n) {
                  if ((_(), !T(a))) return m("property missing ':'");
                  var r = T(s),
                    l = e({
                      type: "declaration",
                      property: c(n[0].replace(t, "")),
                      value: r ? c(r[0].replace(t, "")) : "",
                    });
                  return T(o), l;
                }
              })());

            )
              !1 !== e && (n.push(e), A(n));
            return n;
          })()
        );
      };
    },
    5174: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(18139));
      t.default = function (e, t) {
        var n = null;
        if (!e || "string" != typeof e) return n;
        var r = (0, i.default)(e),
          a = "function" == typeof t;
        return (
          r.forEach(function (e) {
            if ("declaration" === e.type) {
              var r = e.property,
                i = e.value;
              a ? t(r, i, e) : i && ((n = n || {})[r] = i);
            }
          }),
          n
        );
      };
    },
    52835: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return d;
        },
      });
      let r = "object" == typeof self ? self : globalThis,
        i = (e, t) => {
          let n = (t, n) => (e.set(n, t), t),
            i = (a) => {
              if (e.has(a)) return e.get(a);
              let [s, o] = t[a];
              switch (s) {
                case 0:
                case -1:
                  return n(o, a);
                case 1: {
                  let e = n([], a);
                  for (let t of o) e.push(i(t));
                  return e;
                }
                case 2: {
                  let e = n({}, a);
                  for (let [t, n] of o) e[i(t)] = i(n);
                  return e;
                }
                case 3:
                  return n(new Date(o), a);
                case 4: {
                  let { source: e, flags: t } = o;
                  return n(new RegExp(e, t), a);
                }
                case 5: {
                  let e = n(new Map(), a);
                  for (let [t, n] of o) e.set(i(t), i(n));
                  return e;
                }
                case 6: {
                  let e = n(new Set(), a);
                  for (let t of o) e.add(i(t));
                  return e;
                }
                case 7: {
                  let { name: e, message: t } = o;
                  return n(new r[e](t), a);
                }
                case 8:
                  return n(BigInt(o), a);
                case "BigInt":
                  return n(Object(BigInt(o)), a);
              }
              return n(new r[s](o), a);
            };
          return i;
        },
        a = (e) => i(new Map(), e)(0),
        { toString: s } = {},
        { keys: o } = Object,
        l = (e) => {
          let t = typeof e;
          if ("object" !== t || !e) return [0, t];
          let n = s.call(e).slice(8, -1);
          switch (n) {
            case "Array":
              return [1, ""];
            case "Object":
              return [2, ""];
            case "Date":
              return [3, ""];
            case "RegExp":
              return [4, ""];
            case "Map":
              return [5, ""];
            case "Set":
              return [6, ""];
          }
          return n.includes("Array")
            ? [1, n]
            : n.includes("Error")
            ? [7, n]
            : [2, n];
        },
        c = ([e, t]) => 0 === e && ("function" === t || "symbol" === t),
        u = (e, t, n, r) => {
          let i = (e, t) => {
              let i = r.push(e) - 1;
              return n.set(t, i), i;
            },
            a = (r) => {
              if (n.has(r)) return n.get(r);
              let [s, u] = l(r);
              switch (s) {
                case 0: {
                  let t = r;
                  switch (u) {
                    case "bigint":
                      (s = 8), (t = r.toString());
                      break;
                    case "function":
                    case "symbol":
                      if (e) throw TypeError("unable to serialize " + u);
                      t = null;
                      break;
                    case "undefined":
                      return i([-1], r);
                  }
                  return i([s, t], r);
                }
                case 1: {
                  if (u) return i([u, [...r]], r);
                  let e = [],
                    t = i([s, e], r);
                  for (let t of r) e.push(a(t));
                  return t;
                }
                case 2: {
                  if (u)
                    switch (u) {
                      case "BigInt":
                        return i([u, r.toString()], r);
                      case "Boolean":
                      case "Number":
                      case "String":
                        return i([u, r.valueOf()], r);
                    }
                  if (t && "toJSON" in r) return a(r.toJSON());
                  let n = [],
                    h = i([s, n], r);
                  for (let t of o(r))
                    (e || !c(l(r[t]))) && n.push([a(t), a(r[t])]);
                  return h;
                }
                case 3:
                  return i([s, r.toISOString()], r);
                case 4: {
                  let { source: e, flags: t } = r;
                  return i([s, { source: e, flags: t }], r);
                }
                case 5: {
                  let t = [],
                    n = i([s, t], r);
                  for (let [n, i] of r)
                    (e || !(c(l(n)) || c(l(i)))) && t.push([a(n), a(i)]);
                  return n;
                }
                case 6: {
                  let t = [],
                    n = i([s, t], r);
                  for (let n of r) (e || !c(l(n))) && t.push(a(n));
                  return n;
                }
              }
              let { message: h } = r;
              return i([s, { name: u, message: h }], r);
            };
          return a;
        },
        h = (e, { json: t, lossy: n } = {}) => {
          let r = [];
          return u(!(t || n), !!t, new Map(), r)(e), r;
        };
      var d =
        "function" == typeof structuredClone
          ? (e, t) =>
              t && ("json" in t || "lossy" in t)
                ? a(h(e, t))
                : structuredClone(e)
          : (e, t) => a(h(e, t));
    },
    25668: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = [],
          n = String(e || ""),
          r = n.indexOf(","),
          i = 0,
          a = !1;
        for (; !a; ) {
          -1 === r && ((r = n.length), (a = !0));
          let e = n.slice(i, r).trim();
          (e || !a) && t.push(e), (i = r + 1), (r = n.indexOf(",", i));
        }
        return t;
      }
      function i(e, t) {
        let n = t || {};
        return ("" === e[e.length - 1] ? [...e, ""] : e)
          .join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " "))
          .trim();
      }
      n.d(t, {
        P: function () {
          return i;
        },
        Q: function () {
          return r;
        },
      });
    },
    24345: function (e, t, n) {
      "use strict";
      function r() {}
      function i() {}
      n.d(t, {
        ok: function () {
          return r;
        },
        t1: function () {
          return i;
        },
      });
    },
    27962: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return i;
        },
      });
      let r = {};
      function i(e, t) {
        let n = t || r;
        return a(
          e,
          "boolean" != typeof n.includeImageAlt || n.includeImageAlt,
          "boolean" != typeof n.includeHtml || n.includeHtml
        );
      }
      function a(e, t, n) {
        if (e && "object" == typeof e) {
          if ("value" in e) return "html" !== e.type || n ? e.value : "";
          if (t && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return s(e.children, t, n);
        }
        return Array.isArray(e) ? s(e, t, n) : "";
      }
      function s(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) r[i] = a(e[i], t, n);
        return r.join("");
      }
    },
    23402: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return a;
        },
      });
      var r = n(42761),
        i = n(15459);
      let a = {
        tokenize: function (e, t, n) {
          return function (t) {
            return (0, i.xz)(t) ? (0, r.f)(e, a, "linePrefix")(t) : a(t);
          };
          function a(e) {
            return null === e || (0, i.Ch)(e) ? t(e) : n(e);
          }
        },
        partial: !0,
      };
    },
    42761: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return i;
        },
      });
      var r = n(15459);
      function i(e, t, n, i) {
        let a = i ? i - 1 : Number.POSITIVE_INFINITY,
          s = 0;
        return function (i) {
          return (0, r.xz)(i)
            ? (e.enter(n),
              (function i(o) {
                return (0, r.xz)(o) && s++ < a
                  ? (e.consume(o), i)
                  : (e.exit(n), t(o));
              })(i))
            : t(i);
        };
      }
    },
    15459: function (e, t, n) {
      "use strict";
      n.d(t, {
        AF: function () {
          return l;
        },
        Av: function () {
          return s;
        },
        B8: function () {
          return f;
        },
        Ch: function () {
          return u;
        },
        H$: function () {
          return i;
        },
        Xh: function () {
          return p;
        },
        jv: function () {
          return r;
        },
        n9: function () {
          return a;
        },
        pY: function () {
          return o;
        },
        sR: function () {
          return c;
        },
        xz: function () {
          return d;
        },
        z3: function () {
          return h;
        },
      });
      let r = E(/[A-Za-z]/),
        i = E(/[\dA-Za-z]/),
        a = E(/[#-'*+\--9=?A-Z^-~]/);
      function s(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let o = E(/\d/),
        l = E(/[\dA-Fa-f]/),
        c = E(/[!-/:-@[-`{-~]/);
      function u(e) {
        return null !== e && e < -2;
      }
      function h(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function d(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      let p = E(/\p{P}|\p{S}/u),
        f = E(/\s/);
      function E(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
    },
    21905: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        let i;
        let a = e.length,
          s = 0;
        if (
          ((t = t < 0 ? (-t > a ? 0 : a + t) : t > a ? a : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          (i = Array.from(r)).unshift(t, n), e.splice(...i);
        else
          for (n && e.splice(t, n); s < r.length; )
            (i = r.slice(s, s + 1e4)).unshift(t, 0),
              e.splice(...i),
              (s += 1e4),
              (t += 1e4);
      }
      function i(e, t) {
        return e.length > 0 ? (r(e, e.length, 0, t), e) : t;
      }
      n.d(t, {
        V: function () {
          return i;
        },
        d: function () {
          return r;
        },
      });
    },
    62987: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return i;
        },
      });
      var r = n(15459);
      function i(e) {
        return null === e || (0, r.z3)(e) || (0, r.B8)(e)
          ? 1
          : (0, r.Xh)(e)
          ? 2
          : void 0;
      }
    },
    4663: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return a;
        },
      });
      var r = n(21905);
      let i = {}.hasOwnProperty;
      function a(e) {
        let t = {},
          n = -1;
        for (; ++n < e.length; )
          !(function (e, t) {
            let n;
            for (n in t) {
              let a;
              let s = (i.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                o = t[n];
              if (o)
                for (a in o) {
                  i.call(s, a) || (s[a] = []);
                  let e = o[a];
                  !(function (e, t) {
                    let n = -1,
                      i = [];
                    for (; ++n < t.length; )
                      ("after" === t[n].add ? e : i).push(t[n]);
                    (0, r.d)(e, 0, 0, i);
                  })(s[a], Array.isArray(e) ? e : e ? [e] : []);
                }
            }
          })(t, e[n]);
        return t;
      }
    },
    11098: function (e, t, n) {
      "use strict";
      function r(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      n.d(t, {
        d: function () {
          return r;
        },
      });
    },
    63233: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) {
          let a = e[i].resolveAll;
          a && !r.includes(a) && ((t = a(t, n)), r.push(a));
        }
        return t;
      }
      n.d(t, {
        C: function () {
          return r;
        },
      });
    },
    91634: function (e, t, n) {
      "use strict";
      n.d(t, {
        dy: function () {
          return A;
        },
        YP: function () {
          return _;
        },
      });
      class r {
        constructor(e, t, n) {
          (this.property = e), (this.normal = t), n && (this.space = n);
        }
      }
      function i(e, t) {
        let n = {},
          i = {},
          a = -1;
        for (; ++a < e.length; )
          Object.assign(n, e[a].property), Object.assign(i, e[a].normal);
        return new r(n, i, t);
      }
      (r.prototype.property = {}),
        (r.prototype.normal = {}),
        (r.prototype.space = null);
      var a = n(93859),
        s = n(75729);
      let o = {}.hasOwnProperty;
      function l(e) {
        let t;
        let n = {},
          i = {};
        for (t in e.properties)
          if (o.call(e.properties, t)) {
            let r = e.properties[t],
              o = new s.I(t, e.transform(e.attributes || {}, t), r, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(t) &&
              (o.mustUseProperty = !0),
              (n[t] = o),
              (i[(0, a.F)(t)] = t),
              (i[(0, a.F)(o.attribute)] = t);
          }
        return new r(n, i, e.space);
      }
      let c = l({
          space: "xlink",
          transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        u = l({
          space: "xml",
          transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function h(e, t) {
        return t in e ? e[t] : t;
      }
      function d(e, t) {
        return h(e, t.toLowerCase());
      }
      let p = l({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: d,
        properties: { xmlns: null, xmlnsXLink: null },
      });
      var f = n(47312);
      let E = l({
          transform: (e, t) =>
            "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: f.booleanish,
            ariaAutoComplete: null,
            ariaBusy: f.booleanish,
            ariaChecked: f.booleanish,
            ariaColCount: f.number,
            ariaColIndex: f.number,
            ariaColSpan: f.number,
            ariaControls: f.spaceSeparated,
            ariaCurrent: null,
            ariaDescribedBy: f.spaceSeparated,
            ariaDetails: null,
            ariaDisabled: f.booleanish,
            ariaDropEffect: f.spaceSeparated,
            ariaErrorMessage: null,
            ariaExpanded: f.booleanish,
            ariaFlowTo: f.spaceSeparated,
            ariaGrabbed: f.booleanish,
            ariaHasPopup: null,
            ariaHidden: f.booleanish,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: f.spaceSeparated,
            ariaLevel: f.number,
            ariaLive: null,
            ariaModal: f.booleanish,
            ariaMultiLine: f.booleanish,
            ariaMultiSelectable: f.booleanish,
            ariaOrientation: null,
            ariaOwns: f.spaceSeparated,
            ariaPlaceholder: null,
            ariaPosInSet: f.number,
            ariaPressed: f.booleanish,
            ariaReadOnly: f.booleanish,
            ariaRelevant: null,
            ariaRequired: f.booleanish,
            ariaRoleDescription: f.spaceSeparated,
            ariaRowCount: f.number,
            ariaRowIndex: f.number,
            ariaRowSpan: f.number,
            ariaSelected: f.booleanish,
            ariaSetSize: f.number,
            ariaSort: null,
            ariaValueMax: f.number,
            ariaValueMin: f.number,
            ariaValueNow: f.number,
            ariaValueText: null,
            role: null,
          },
        }),
        m = l({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: d,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: f.commaSeparated,
            acceptCharset: f.spaceSeparated,
            accessKey: f.spaceSeparated,
            action: null,
            allow: null,
            allowFullScreen: f.boolean,
            allowPaymentRequest: f.boolean,
            allowUserMedia: f.boolean,
            alt: null,
            as: null,
            async: f.boolean,
            autoCapitalize: null,
            autoComplete: f.spaceSeparated,
            autoFocus: f.boolean,
            autoPlay: f.boolean,
            blocking: f.spaceSeparated,
            capture: null,
            charSet: null,
            checked: f.boolean,
            cite: null,
            className: f.spaceSeparated,
            cols: f.number,
            colSpan: null,
            content: null,
            contentEditable: f.booleanish,
            controls: f.boolean,
            controlsList: f.spaceSeparated,
            coords: f.number | f.commaSeparated,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: f.boolean,
            defer: f.boolean,
            dir: null,
            dirName: null,
            disabled: f.boolean,
            download: f.overloadedBoolean,
            draggable: f.booleanish,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: f.boolean,
            formTarget: null,
            headers: f.spaceSeparated,
            height: f.number,
            hidden: f.boolean,
            high: f.number,
            href: null,
            hrefLang: null,
            htmlFor: f.spaceSeparated,
            httpEquiv: f.spaceSeparated,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: f.boolean,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: f.boolean,
            itemId: null,
            itemProp: f.spaceSeparated,
            itemRef: f.spaceSeparated,
            itemScope: f.boolean,
            itemType: f.spaceSeparated,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: f.boolean,
            low: f.number,
            manifest: null,
            max: null,
            maxLength: f.number,
            media: null,
            method: null,
            min: null,
            minLength: f.number,
            multiple: f.boolean,
            muted: f.boolean,
            name: null,
            nonce: null,
            noModule: f.boolean,
            noValidate: f.boolean,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: f.boolean,
            optimum: f.number,
            pattern: null,
            ping: f.spaceSeparated,
            placeholder: null,
            playsInline: f.boolean,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: f.boolean,
            referrerPolicy: null,
            rel: f.spaceSeparated,
            required: f.boolean,
            reversed: f.boolean,
            rows: f.number,
            rowSpan: f.number,
            sandbox: f.spaceSeparated,
            scope: null,
            scoped: f.boolean,
            seamless: f.boolean,
            selected: f.boolean,
            shadowRootClonable: f.boolean,
            shadowRootDelegatesFocus: f.boolean,
            shadowRootMode: null,
            shape: null,
            size: f.number,
            sizes: null,
            slot: null,
            span: f.number,
            spellCheck: f.booleanish,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: f.number,
            step: null,
            style: null,
            tabIndex: f.number,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: f.boolean,
            useMap: null,
            value: f.booleanish,
            width: f.number,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: f.spaceSeparated,
            axis: null,
            background: null,
            bgColor: null,
            border: f.number,
            borderColor: null,
            bottomMargin: f.number,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: f.boolean,
            declare: f.boolean,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: f.number,
            leftMargin: f.number,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: f.number,
            marginWidth: f.number,
            noResize: f.boolean,
            noHref: f.boolean,
            noShade: f.boolean,
            noWrap: f.boolean,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: f.number,
            rules: null,
            scheme: null,
            scrolling: f.booleanish,
            standby: null,
            summary: null,
            text: null,
            topMargin: f.number,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: f.number,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: f.boolean,
            disableRemotePlayback: f.boolean,
            prefix: null,
            property: null,
            results: f.number,
            security: null,
            unselectable: null,
          },
        }),
        T = l({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: h,
          properties: {
            about: f.commaOrSpaceSeparated,
            accentHeight: f.number,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: f.number,
            amplitude: f.number,
            arabicForm: null,
            ascent: f.number,
            attributeName: null,
            attributeType: null,
            azimuth: f.number,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: f.number,
            by: null,
            calcMode: null,
            capHeight: f.number,
            className: f.spaceSeparated,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: f.number,
            diffuseConstant: f.number,
            direction: null,
            display: null,
            dur: null,
            divisor: f.number,
            dominantBaseline: null,
            download: f.boolean,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: f.number,
            enableBackground: null,
            end: null,
            event: null,
            exponent: f.number,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: f.number,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: f.commaSeparated,
            g2: f.commaSeparated,
            glyphName: f.commaSeparated,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: f.number,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: f.number,
            horizOriginX: f.number,
            horizOriginY: f.number,
            id: null,
            ideographic: f.number,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: f.number,
            k: f.number,
            k1: f.number,
            k2: f.number,
            k3: f.number,
            k4: f.number,
            kernelMatrix: f.commaOrSpaceSeparated,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: f.number,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: f.number,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: f.number,
            overlineThickness: f.number,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: f.number,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: f.spaceSeparated,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: f.number,
            pointsAtY: f.number,
            pointsAtZ: f.number,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: f.commaOrSpaceSeparated,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: f.commaOrSpaceSeparated,
            rev: f.commaOrSpaceSeparated,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: f.commaOrSpaceSeparated,
            requiredFeatures: f.commaOrSpaceSeparated,
            requiredFonts: f.commaOrSpaceSeparated,
            requiredFormats: f.commaOrSpaceSeparated,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: f.number,
            specularExponent: f.number,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: f.number,
            strikethroughThickness: f.number,
            string: null,
            stroke: null,
            strokeDashArray: f.commaOrSpaceSeparated,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: f.number,
            strokeOpacity: f.number,
            strokeWidth: null,
            style: null,
            surfaceScale: f.number,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: f.commaOrSpaceSeparated,
            tabIndex: f.number,
            tableValues: null,
            target: null,
            targetX: f.number,
            targetY: f.number,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: f.commaOrSpaceSeparated,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: f.number,
            underlineThickness: f.number,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: f.number,
            values: null,
            vAlphabetic: f.number,
            vMathematical: f.number,
            vectorEffect: null,
            vHanging: f.number,
            vIdeographic: f.number,
            version: null,
            vertAdvY: f.number,
            vertOriginX: f.number,
            vertOriginY: f.number,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: f.number,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        A = i([u, c, p, E, m], "html"),
        _ = i([u, c, p, E, T], "svg");
    },
    26103: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return c;
        },
      });
      var r = n(93859),
        i = n(75729),
        a = n(49255);
      let s = /^data[-\w.:]+$/i,
        o = /-[a-z]/g,
        l = /[A-Z]/g;
      function c(e, t) {
        let n = (0, r.F)(t),
          c = t,
          d = a.k;
        if (n in e.normal) return e.property[e.normal[n]];
        if (n.length > 4 && "data" === n.slice(0, 4) && s.test(t)) {
          if ("-" === t.charAt(4)) {
            let e = t.slice(5).replace(o, h);
            c = "data" + e.charAt(0).toUpperCase() + e.slice(1);
          } else {
            let e = t.slice(4);
            if (!o.test(e)) {
              let n = e.replace(l, u);
              "-" !== n.charAt(0) && (n = "-" + n), (t = "data" + n);
            }
          }
          d = i.I;
        }
        return new d(c, t);
      }
      function u(e) {
        return "-" + e.toLowerCase();
      }
      function h(e) {
        return e.charAt(1).toUpperCase();
      }
    },
    93859: function (e, t, n) {
      "use strict";
      function r(e) {
        return e.toLowerCase();
      }
      n.d(t, {
        F: function () {
          return r;
        },
      });
    },
    75729: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return s;
        },
      });
      var r = n(49255),
        i = n(47312);
      let a = Object.keys(i);
      class s extends r.k {
        constructor(e, t, n, r) {
          var s, o;
          let l = -1;
          if ((super(e, t), r && (this.space = r), "number" == typeof n))
            for (; ++l < a.length; ) {
              let e = a[l];
              (s = a[l]), (o = (n & i[e]) === i[e]) && (this[s] = o);
            }
        }
      }
      s.prototype.defined = !0;
    },
    49255: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return r;
        },
      });
      class r {
        constructor(e, t) {
          (this.property = e), (this.attribute = t);
        }
      }
      (r.prototype.space = null),
        (r.prototype.boolean = !1),
        (r.prototype.booleanish = !1),
        (r.prototype.overloadedBoolean = !1),
        (r.prototype.number = !1),
        (r.prototype.commaSeparated = !1),
        (r.prototype.spaceSeparated = !1),
        (r.prototype.commaOrSpaceSeparated = !1),
        (r.prototype.mustUseProperty = !1),
        (r.prototype.defined = !1);
    },
    47312: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          boolean: function () {
            return i;
          },
          booleanish: function () {
            return a;
          },
          commaOrSpaceSeparated: function () {
            return u;
          },
          commaSeparated: function () {
            return c;
          },
          number: function () {
            return o;
          },
          overloadedBoolean: function () {
            return s;
          },
          spaceSeparated: function () {
            return l;
          },
        });
      let r = 0,
        i = h(),
        a = h(),
        s = h(),
        o = h(),
        l = h(),
        c = h(),
        u = h();
      function h() {
        return 2 ** ++r;
      }
    },
    72510: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return tw;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          attentionMarkers: function () {
            return eK;
          },
          contentInitial: function () {
            return eq;
          },
          disable: function () {
            return eJ;
          },
          document: function () {
            return ez;
          },
          flow: function () {
            return ej;
          },
          flowInitial: function () {
            return eV;
          },
          insideSpan: function () {
            return eX;
          },
          string: function () {
            return eQ;
          },
          text: function () {
            return eW;
          },
        });
      var i = n(24345),
        a = n(25668);
      let s = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        o = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        l = {};
      function c(e, t) {
        return ((t || l).jsx ? o : s).test(e);
      }
      let u = /[ \t\n\f\r]/g;
      function h(e) {
        return "" === e.replace(u, "");
      }
      var d = n(91634),
        p = n(26103);
      let f = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var E = n(50342),
        m = n(5174),
        T = m.default || m,
        A = n(3980);
      function _(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? C(e.position)
            : "start" in e || "end" in e
            ? C(e)
            : "line" in e || "column" in e
            ? g(e)
            : ""
          : "";
      }
      function g(e) {
        return I(e && e.line) + ":" + I(e && e.column);
      }
      function C(e) {
        return g(e && e.start) + "-" + g(e && e.end);
      }
      function I(e) {
        return e && "number" == typeof e ? e : 1;
      }
      class N extends Error {
        constructor(e, t, n) {
          super(), "string" == typeof t && ((n = t), (t = void 0));
          let r = "",
            i = {},
            a = !1;
          if (
            (t &&
              (i =
                "line" in t && "column" in t
                  ? { place: t }
                  : "start" in t && "end" in t
                  ? { place: t }
                  : "type" in t
                  ? { ancestors: [t], place: t.position }
                  : { ...t }),
            "string" == typeof e
              ? (r = e)
              : !i.cause && e && ((a = !0), (r = e.message), (i.cause = e)),
            !i.ruleId && !i.source && "string" == typeof n)
          ) {
            let e = n.indexOf(":");
            -1 === e
              ? (i.ruleId = n)
              : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
          }
          if (!i.place && i.ancestors && i.ancestors) {
            let e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position);
          }
          let s = i.place && "start" in i.place ? i.place.start : i.place;
          (this.ancestors = i.ancestors || void 0),
            (this.cause = i.cause || void 0),
            (this.column = s ? s.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = r),
            (this.line = s ? s.line : void 0),
            (this.name = _(i.place) || "1:1"),
            (this.place = i.place || void 0),
            (this.reason = this.message),
            (this.ruleId = i.ruleId || void 0),
            (this.source = i.source || void 0),
            (this.stack =
              a && i.cause && "string" == typeof i.cause.stack
                ? i.cause.stack
                : ""),
            this.actual,
            this.expected,
            this.note,
            this.url;
        }
      }
      (N.prototype.file = ""),
        (N.prototype.name = ""),
        (N.prototype.reason = ""),
        (N.prototype.message = ""),
        (N.prototype.stack = ""),
        (N.prototype.column = void 0),
        (N.prototype.line = void 0),
        (N.prototype.ancestors = void 0),
        (N.prototype.cause = void 0),
        (N.prototype.fatal = void 0),
        (N.prototype.place = void 0),
        (N.prototype.ruleId = void 0),
        (N.prototype.source = void 0);
      let S = {}.hasOwnProperty,
        k = new Map(),
        D = /[A-Z]/g,
        R = /-([a-z])/g,
        b = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
        O = new Set(["td", "th"]),
        L = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
      function y(e, t, n) {
        return "element" === t.type
          ? (function (e, t, n) {
              let r = e.schema,
                i = r;
              "svg" === t.tagName.toLowerCase() &&
                "html" === r.space &&
                ((i = d.YP), (e.schema = i)),
                e.ancestors.push(t);
              let s = v(e, t.tagName, !1),
                o = (function (e, t) {
                  let n, r;
                  let i = {};
                  for (r in t.properties)
                    if ("children" !== r && S.call(t.properties, r)) {
                      let s = (function (e, t, n) {
                        let r = (0, p.s)(e.schema, t);
                        if (
                          !(
                            null == n ||
                            ("number" == typeof n && Number.isNaN(n))
                          )
                        ) {
                          if (
                            (Array.isArray(n) &&
                              (n = r.commaSeparated
                                ? (0, a.P)(n)
                                : (0, E.P)(n)),
                            "style" === r.property)
                          ) {
                            let t =
                              "object" == typeof n
                                ? n
                                : (function (e, t) {
                                    let n = {};
                                    try {
                                      T(t, function (e, t) {
                                        let r = e;
                                        "--" !== r.slice(0, 2) &&
                                          ("-ms-" === r.slice(0, 4) &&
                                            (r = "ms-" + r.slice(4)),
                                          (r = r.replace(R, B))),
                                          (n[r] = t);
                                      });
                                    } catch (t) {
                                      if (!e.ignoreInvalidStyle) {
                                        let n = new N(
                                          "Cannot parse `style` attribute",
                                          {
                                            ancestors: e.ancestors,
                                            cause: t,
                                            ruleId: "style",
                                            source: "hast-util-to-jsx-runtime",
                                          }
                                        );
                                        throw (
                                          ((n.file = e.filePath || void 0),
                                          (n.url =
                                            L +
                                            "#cannot-parse-style-attribute"),
                                          n)
                                        );
                                      }
                                    }
                                    return n;
                                  })(e, String(n));
                            return (
                              "css" === e.stylePropertyNameCase &&
                                (t = (function (e) {
                                  let t;
                                  let n = {};
                                  for (t in e)
                                    S.call(e, t) &&
                                      (n[
                                        (function (e) {
                                          let t = e.replace(D, H);
                                          return (
                                            "ms-" === t.slice(0, 3) &&
                                              (t = "-" + t),
                                            t
                                          );
                                        })(t)
                                      ] = e[t]);
                                  return n;
                                })(t)),
                              ["style", t]
                            );
                          }
                          return [
                            "react" === e.elementAttributeNameCase && r.space
                              ? f[r.property] || r.property
                              : r.attribute,
                            n,
                          ];
                        }
                      })(e, r, t.properties[r]);
                      if (s) {
                        let [r, a] = s;
                        e.tableCellAlignToStyle &&
                        "align" === r &&
                        "string" == typeof a &&
                        O.has(t.tagName)
                          ? (n = a)
                          : (i[r] = a);
                      }
                    }
                  return (
                    n &&
                      ((i.style || (i.style = {}))[
                        "css" === e.stylePropertyNameCase
                          ? "text-align"
                          : "textAlign"
                      ] = n),
                    i
                  );
                })(e, t),
                l = x(e, t);
              return (
                b.has(t.tagName) &&
                  (l = l.filter(function (e) {
                    return (
                      "string" != typeof e ||
                      !("object" == typeof e
                        ? "text" === e.type && h(e.value)
                        : h(e))
                    );
                  })),
                P(e, o, s, t),
                M(o, l),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, s, o, n)
              );
            })(e, t, n)
          : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater) {
                let n = t.data.estree.body[0];
                return (
                  (0, i.ok)("ExpressionStatement" === n.type),
                  e.evaluater.evaluateExpression(n.expression)
                );
              }
              F(e, t.position);
            })(e, t)
          : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
          ? (function (e, t, n) {
              let r = e.schema,
                a = r;
              "svg" === t.name &&
                "html" === r.space &&
                ((a = d.YP), (e.schema = a)),
                e.ancestors.push(t);
              let s = null === t.name ? e.Fragment : v(e, t.name, !0),
                o = (function (e, t) {
                  let n = {};
                  for (let r of t.attributes)
                    if ("mdxJsxExpressionAttribute" === r.type) {
                      if (r.data && r.data.estree && e.evaluater) {
                        let t = r.data.estree.body[0];
                        (0, i.ok)("ExpressionStatement" === t.type);
                        let a = t.expression;
                        (0, i.ok)("ObjectExpression" === a.type);
                        let s = a.properties[0];
                        (0, i.ok)("SpreadElement" === s.type),
                          Object.assign(
                            n,
                            e.evaluater.evaluateExpression(s.argument)
                          );
                      } else F(e, t.position);
                    } else {
                      let a;
                      let s = r.name;
                      if (r.value && "object" == typeof r.value) {
                        if (
                          r.value.data &&
                          r.value.data.estree &&
                          e.evaluater
                        ) {
                          let t = r.value.data.estree.body[0];
                          (0, i.ok)("ExpressionStatement" === t.type),
                            (a = e.evaluater.evaluateExpression(t.expression));
                        } else F(e, t.position);
                      } else a = null === r.value || r.value;
                      n[s] = a;
                    }
                  return n;
                })(e, t),
                l = x(e, t);
              return (
                P(e, o, s, t),
                M(o, l),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, s, o, n)
              );
            })(e, t, n)
          : "mdxjsEsm" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater)
                return e.evaluater.evaluateProgram(t.data.estree);
              F(e, t.position);
            })(e, t)
          : "root" === t.type
          ? (function (e, t, n) {
              let r = {};
              return M(r, x(e, t)), e.create(t, e.Fragment, r, n);
            })(e, t, n)
          : "text" === t.type
          ? t.value
          : void 0;
      }
      function P(e, t, n, r) {
        "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
      }
      function M(e, t) {
        if (t.length > 0) {
          let n = t.length > 1 ? t : t[0];
          n && (e.children = n);
        }
      }
      function x(e, t) {
        let n = [],
          r = -1,
          i = e.passKeys ? new Map() : k;
        for (; ++r < t.children.length; ) {
          let a;
          let s = t.children[r];
          if (e.passKeys) {
            let e =
              "element" === s.type
                ? s.tagName
                : "mdxJsxFlowElement" === s.type ||
                  "mdxJsxTextElement" === s.type
                ? s.name
                : void 0;
            if (e) {
              let t = i.get(e) || 0;
              (a = e + "-" + t), i.set(e, t + 1);
            }
          }
          let o = y(e, s, a);
          void 0 !== o && n.push(o);
        }
        return n;
      }
      function v(e, t, n) {
        let r;
        if (n) {
          if (t.includes(".")) {
            let e;
            let n = t.split("."),
              a = -1;
            for (; ++a < n.length; ) {
              let t = c(n[a])
                ? { type: "Identifier", name: n[a] }
                : { type: "Literal", value: n[a] };
              e = e
                ? {
                    type: "MemberExpression",
                    object: e,
                    property: t,
                    computed: !!(a && "Literal" === t.type),
                    optional: !1,
                  }
                : t;
            }
            (0, i.ok)(e, "always a result"), (r = e);
          } else
            r =
              c(t) && !/^[a-z]/.test(t)
                ? { type: "Identifier", name: t }
                : { type: "Literal", value: t };
        } else r = { type: "Literal", value: t };
        if ("Literal" === r.type) {
          let t = r.value;
          return S.call(e.components, t) ? e.components[t] : t;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(r);
        F(e);
      }
      function F(e, t) {
        let n = new N("Cannot handle MDX estrees without `createEvaluater`", {
          ancestors: e.ancestors,
          place: t,
          ruleId: "mdx-estree",
          source: "hast-util-to-jsx-runtime",
        });
        throw (
          ((n.file = e.filePath || void 0),
          (n.url = L + "#cannot-handle-mdx-estrees-without-createevaluater"),
          n)
        );
      }
      function B(e, t) {
        return t.toUpperCase();
      }
      function H(e) {
        return "-" + e.toLowerCase();
      }
      let w = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: [
          "audio",
          "embed",
          "iframe",
          "img",
          "input",
          "script",
          "source",
          "track",
          "video",
        ],
      };
      var U = n(85893),
        G = n(27962),
        Y = n(21905);
      class z {
        constructor(e) {
          (this.left = e ? [...e] : []), (this.right = []);
        }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError(
              "Cannot access index `" +
                e +
                "` in a splice buffer of size `" +
                (this.left.length + this.right.length) +
                "`"
            );
          return e < this.left.length
            ? this.left[e]
            : this.right[this.right.length - e + this.left.length - 1];
        }
        get length() {
          return this.left.length + this.right.length;
        }
        shift() {
          return this.setCursor(0), this.right.pop();
        }
        slice(e, t) {
          let n = null == t ? Number.POSITIVE_INFINITY : t;
          return n < this.left.length
            ? this.left.slice(e, n)
            : e > this.left.length
            ? this.right
                .slice(
                  this.right.length - n + this.left.length,
                  this.right.length - e + this.left.length
                )
                .reverse()
            : this.left
                .slice(e)
                .concat(
                  this.right
                    .slice(this.right.length - n + this.left.length)
                    .reverse()
                );
        }
        splice(e, t, n) {
          this.setCursor(Math.trunc(e));
          let r = this.right.splice(
            this.right.length - (t || 0),
            Number.POSITIVE_INFINITY
          );
          return n && q(this.left, n), r.reverse();
        }
        pop() {
          return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
        }
        push(e) {
          this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
        }
        pushMany(e) {
          this.setCursor(Number.POSITIVE_INFINITY), q(this.left, e);
        }
        unshift(e) {
          this.setCursor(0), this.right.push(e);
        }
        unshiftMany(e) {
          this.setCursor(0), q(this.right, e.reverse());
        }
        setCursor(e) {
          if (
            e !== this.left.length &&
            (!(e > this.left.length) || 0 !== this.right.length) &&
            (!(e < 0) || 0 !== this.left.length)
          ) {
            if (e < this.left.length) {
              let t = this.left.splice(e, Number.POSITIVE_INFINITY);
              q(this.right, t.reverse());
            } else {
              let t = this.right.splice(
                this.left.length + this.right.length - e,
                Number.POSITIVE_INFINITY
              );
              q(this.left, t.reverse());
            }
          }
        }
      }
      function q(e, t) {
        let n = 0;
        if (t.length < 1e4) e.push(...t);
        else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
      }
      function V(e) {
        let t, n, r, i, a, s, o;
        let l = {},
          c = -1,
          u = new z(e);
        for (; ++c < u.length; ) {
          for (; c in l; ) c = l[c];
          if (
            ((t = u.get(c)),
            c &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === u.get(c - 1)[1].type &&
              ((r = 0) < (s = t[1]._tokenizer.events).length &&
                "lineEndingBlank" === s[r][1].type &&
                (r += 2),
              r < s.length && "content" === s[r][1].type))
          )
            for (; ++r < s.length && "content" !== s[r][1].type; )
              "chunkText" === s[r][1].type &&
                ((s[r][1]._isInFirstContentOfListItem = !0), r++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(
                l,
                (function (e, t) {
                  let n, r;
                  let i = e.get(t)[1],
                    a = e.get(t)[2],
                    s = t - 1,
                    o = [],
                    l = i._tokenizer || a.parser[i.contentType](i.start),
                    c = l.events,
                    u = [],
                    h = {},
                    d = -1,
                    p = i,
                    f = 0,
                    E = 0,
                    m = [0];
                  for (; p; ) {
                    for (; e.get(++s)[1] !== p; );
                    o.push(s),
                      !p._tokenizer &&
                        ((n = a.sliceStream(p)),
                        p.next || n.push(null),
                        r && l.defineSkip(p.start),
                        p._isInFirstContentOfListItem &&
                          (l._gfmTasklistFirstContentOfListItem = !0),
                        l.write(n),
                        p._isInFirstContentOfListItem &&
                          (l._gfmTasklistFirstContentOfListItem = void 0)),
                      (r = p),
                      (p = p.next);
                  }
                  for (p = i; ++d < c.length; )
                    "exit" === c[d][0] &&
                      "enter" === c[d - 1][0] &&
                      c[d][1].type === c[d - 1][1].type &&
                      c[d][1].start.line !== c[d][1].end.line &&
                      ((E = d + 1),
                      m.push(E),
                      (p._tokenizer = void 0),
                      (p.previous = void 0),
                      (p = p.next));
                  for (
                    l.events = [],
                      p
                        ? ((p._tokenizer = void 0), (p.previous = void 0))
                        : m.pop(),
                      d = m.length;
                    d--;

                  ) {
                    let t = c.slice(m[d], m[d + 1]),
                      n = o.pop();
                    u.push([n, n + t.length - 1]), e.splice(n, 2, t);
                  }
                  for (u.reverse(), d = -1; ++d < u.length; )
                    (h[f + u[d][0]] = f + u[d][1]),
                      (f += u[d][1] - u[d][0] - 1);
                  return h;
                })(u, c)
              ),
              (c = l[c]),
              (o = !0));
          else if (t[1]._container) {
            for (r = c, n = void 0; r--; )
              if (
                "lineEnding" === (i = u.get(r))[1].type ||
                "lineEndingBlank" === i[1].type
              )
                "enter" === i[0] &&
                  (n && (u.get(n)[1].type = "lineEndingBlank"),
                  (i[1].type = "lineEnding"),
                  (n = r));
              else break;
            n &&
              ((t[1].end = Object.assign({}, u.get(n)[1].start)),
              (a = u.slice(n, c)).unshift(t),
              u.splice(n, c - n + 1, a));
          }
        }
        return (0, Y.d)(e, 0, Number.POSITIVE_INFINITY, u.slice(0)), !o;
      }
      var j = n(4663),
        Q = n(42761),
        W = n(15459);
      let X = {
          tokenize: function (e) {
            let t;
            let n = e.attempt(
              this.parser.constructs.contentInitial,
              function (t) {
                if (null === t) {
                  e.consume(t);
                  return;
                }
                return (
                  e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  (0, Q.f)(e, n, "linePrefix")
                );
              },
              function (n) {
                return (
                  e.enter("paragraph"),
                  (function n(r) {
                    let i = e.enter("chunkText", {
                      contentType: "text",
                      previous: t,
                    });
                    return (
                      t && (t.next = i),
                      (t = i),
                      (function t(r) {
                        if (null === r) {
                          e.exit("chunkText"),
                            e.exit("paragraph"),
                            e.consume(r);
                          return;
                        }
                        return (0, W.Ch)(r)
                          ? (e.consume(r), e.exit("chunkText"), n)
                          : (e.consume(r), t);
                      })(r)
                    );
                  })(n)
                );
              }
            );
            return n;
          },
        },
        K = {
          tokenize: function (e) {
            let t, n, r;
            let i = this,
              a = [],
              s = 0;
            return o;
            function o(t) {
              if (s < a.length) {
                let n = a[s];
                return (
                  (i.containerState = n[1]),
                  e.attempt(n[0].continuation, l, c)(t)
                );
              }
              return c(t);
            }
            function l(e) {
              if ((s++, i.containerState._closeFlow)) {
                let n;
                (i.containerState._closeFlow = void 0), t && T();
                let r = i.events.length,
                  a = r;
                for (; a--; )
                  if (
                    "exit" === i.events[a][0] &&
                    "chunkFlow" === i.events[a][1].type
                  ) {
                    n = i.events[a][1].end;
                    break;
                  }
                m(s);
                let o = r;
                for (; o < i.events.length; )
                  (i.events[o][1].end = Object.assign({}, n)), o++;
                return (
                  (0, Y.d)(i.events, a + 1, 0, i.events.slice(r)),
                  (i.events.length = o),
                  c(e)
                );
              }
              return o(e);
            }
            function c(n) {
              if (s === a.length) {
                if (!t) return d(n);
                if (t.currentConstruct && t.currentConstruct.concrete)
                  return f(n);
                i.interrupt = !!(
                  t.currentConstruct && !t._gfmTableDynamicInterruptHack
                );
              }
              return (i.containerState = {}), e.check(J, u, h)(n);
            }
            function u(e) {
              return t && T(), m(s), d(e);
            }
            function h(e) {
              return (
                (i.parser.lazy[i.now().line] = s !== a.length),
                (r = i.now().offset),
                f(e)
              );
            }
            function d(t) {
              return (i.containerState = {}), e.attempt(J, p, f)(t);
            }
            function p(e) {
              return s++, a.push([i.currentConstruct, i.containerState]), d(e);
            }
            function f(r) {
              if (null === r) {
                t && T(), m(0), e.consume(r);
                return;
              }
              return (
                (t = t || i.parser.flow(i.now())),
                e.enter("chunkFlow", {
                  contentType: "flow",
                  previous: n,
                  _tokenizer: t,
                }),
                (function t(n) {
                  if (null === n) {
                    E(e.exit("chunkFlow"), !0), m(0), e.consume(n);
                    return;
                  }
                  return (0, W.Ch)(n)
                    ? (e.consume(n),
                      E(e.exit("chunkFlow")),
                      (s = 0),
                      (i.interrupt = void 0),
                      o)
                    : (e.consume(n), t);
                })(r)
              );
            }
            function E(e, a) {
              let o = i.sliceStream(e);
              if (
                (a && o.push(null),
                (e.previous = n),
                n && (n.next = e),
                (n = e),
                t.defineSkip(e.start),
                t.write(o),
                i.parser.lazy[e.start.line])
              ) {
                let e,
                  n,
                  a = t.events.length;
                for (; a--; )
                  if (
                    t.events[a][1].start.offset < r &&
                    (!t.events[a][1].end || t.events[a][1].end.offset > r)
                  )
                    return;
                let o = i.events.length,
                  l = o;
                for (; l--; )
                  if (
                    "exit" === i.events[l][0] &&
                    "chunkFlow" === i.events[l][1].type
                  ) {
                    if (e) {
                      n = i.events[l][1].end;
                      break;
                    }
                    e = !0;
                  }
                for (m(s), a = o; a < i.events.length; )
                  (i.events[a][1].end = Object.assign({}, n)), a++;
                (0, Y.d)(i.events, l + 1, 0, i.events.slice(o)),
                  (i.events.length = a);
              }
            }
            function m(t) {
              let n = a.length;
              for (; n-- > t; ) {
                let t = a[n];
                (i.containerState = t[1]), t[0].exit.call(i, e);
              }
              a.length = t;
            }
            function T() {
              t.write([null]),
                (n = void 0),
                (t = void 0),
                (i.containerState._closeFlow = void 0);
            }
          },
        },
        J = {
          tokenize: function (e, t, n) {
            return (0, Q.f)(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        };
      var Z = n(23402);
      let $ = {
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter("content"),
                (n = e.enter("chunkContent", { contentType: "content" })),
                r(t)
              );
            };
            function r(t) {
              return null === t
                ? i(t)
                : (0, W.Ch)(t)
                ? e.check(ee, a, i)(t)
                : (e.consume(t), r);
            }
            function i(n) {
              return e.exit("chunkContent"), e.exit("content"), t(n);
            }
            function a(t) {
              return (
                e.consume(t),
                e.exit("chunkContent"),
                (n.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: n,
                })),
                (n = n.next),
                r
              );
            }
          },
          resolve: function (e) {
            return V(e), e;
          },
        },
        ee = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                (0, Q.f)(e, i, "linePrefix")
              );
            };
            function i(i) {
              if (null === i || (0, W.Ch)(i)) return n(i);
              let a = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                a &&
                "linePrefix" === a[1].type &&
                a[2].sliceSerialize(a[1], !0).length >= 4
                ? t(i)
                : e.interrupt(r.parser.constructs.flow, n, t)(i);
            }
          },
          partial: !0,
        },
        et = {
          tokenize: function (e) {
            let t = this,
              n = e.attempt(
                Z.w,
                function (r) {
                  if (null === r) {
                    e.consume(r);
                    return;
                  }
                  return (
                    e.enter("lineEndingBlank"),
                    e.consume(r),
                    e.exit("lineEndingBlank"),
                    (t.currentConstruct = void 0),
                    n
                  );
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  r,
                  (0, Q.f)(
                    e,
                    e.attempt(this.parser.constructs.flow, r, e.attempt($, r)),
                    "linePrefix"
                  )
                )
              );
            return n;
            function r(r) {
              if (null === r) {
                e.consume(r);
                return;
              }
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (t.currentConstruct = void 0),
                n
              );
            }
          },
        },
        en = { resolveAll: es() },
        er = ea("string"),
        ei = ea("text");
      function ea(e) {
        return {
          tokenize: function (t) {
            let n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, a, s);
            return a;
            function a(e) {
              return l(e) ? i(e) : s(e);
            }
            function s(e) {
              if (null === e) {
                t.consume(e);
                return;
              }
              return t.enter("data"), t.consume(e), o;
            }
            function o(e) {
              return l(e) ? (t.exit("data"), i(e)) : (t.consume(e), o);
            }
            function l(e) {
              if (null === e) return !0;
              let t = r[e],
                i = -1;
              if (t)
                for (; ++i < t.length; ) {
                  let e = t[i];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: es("text" === e ? eo : void 0),
        };
      }
      function es(e) {
        return function (t, n) {
          let r,
            i = -1;
          for (; ++i <= t.length; )
            void 0 === r
              ? t[i] && "data" === t[i][1].type && ((r = i), i++)
              : (t[i] && "data" === t[i][1].type) ||
                (i !== r + 2 &&
                  ((t[r][1].end = t[i - 1][1].end),
                  t.splice(r + 2, i - r - 2),
                  (i = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function eo(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
          ) {
            let r;
            let i = e[n - 1][1],
              a = t.sliceStream(i),
              s = a.length,
              o = -1,
              l = 0;
            for (; s--; ) {
              let e = a[s];
              if ("string" == typeof e) {
                for (o = e.length; 32 === e.charCodeAt(o - 1); ) l++, o--;
                if (o) break;
                o = -1;
              } else if (-2 === e) (r = !0), l++;
              else if (-1 === e);
              else {
                s++;
                break;
              }
            }
            if (l) {
              let a = {
                type:
                  n === e.length || r || l < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  line: i.end.line,
                  column: i.end.column - l,
                  offset: i.end.offset - l,
                  _index: i.start._index + s,
                  _bufferIndex: s ? o : i.start._bufferIndex + o,
                },
                end: Object.assign({}, i.end),
              };
              (i.end = Object.assign({}, a.start)),
                i.start.offset === i.end.offset
                  ? Object.assign(i, a)
                  : (e.splice(n, 0, ["enter", a, t], ["exit", a, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      var el = n(63233);
      let ec = {
          name: "thematicBreak",
          tokenize: function (e, t, n) {
            let r,
              i = 0;
            return function (a) {
              return (
                e.enter("thematicBreak"),
                (r = a),
                (function a(s) {
                  return s === r
                    ? (e.enter("thematicBreakSequence"),
                      (function t(n) {
                        return n === r
                          ? (e.consume(n), i++, t)
                          : (e.exit("thematicBreakSequence"),
                            (0, W.xz)(n)
                              ? (0, Q.f)(e, a, "whitespace")(n)
                              : a(n));
                      })(s))
                    : i >= 3 && (null === s || (0, W.Ch)(s))
                    ? (e.exit("thematicBreak"), t(s))
                    : n(s);
                })(a)
              );
            };
          },
        },
        eu = {
          name: "list",
          tokenize: function (e, t, n) {
            let r = this,
              i = r.events[r.events.length - 1],
              a =
                i && "linePrefix" === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0,
              s = 0;
            return function (t) {
              let i =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === i
                  ? !r.containerState.marker || t === r.containerState.marker
                  : (0, W.pY)(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = i),
                    e.enter(i, { _container: !0 })),
                  "listUnordered" === i)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === t || 45 === t ? e.check(ec, n, o)(t) : o(t)
                  );
                if (!r.interrupt || 49 === t)
                  return (
                    e.enter("listItemPrefix"),
                    e.enter("listItemValue"),
                    (function t(i) {
                      return (0, W.pY)(i) && ++s < 10
                        ? (e.consume(i), t)
                        : (!r.interrupt || s < 2) &&
                          (r.containerState.marker
                            ? i === r.containerState.marker
                            : 41 === i || 46 === i)
                        ? (e.exit("listItemValue"), o(i))
                        : n(i);
                    })(t)
                  );
              }
              return n(t);
            };
            function o(t) {
              return (
                e.enter("listItemMarker"),
                e.consume(t),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(Z.w, r.interrupt ? n : l, e.attempt(eh, u, c))
              );
            }
            function l(e) {
              return (r.containerState.initialBlankLine = !0), a++, u(e);
            }
            function c(t) {
              return (0, W.xz)(t)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(t),
                  e.exit("listItemPrefixWhitespace"),
                  u)
                : n(t);
            }
            function u(n) {
              return (
                (r.containerState.size =
                  a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                t(n)
              );
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  Z.w,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      (0, Q.f)(
                        e,
                        t,
                        "listItemIndent",
                        r.containerState.size + 1
                      )(n)
                    );
                  },
                  function (n) {
                    return r.containerState.furtherBlankLines || !(0, W.xz)(n)
                      ? ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        i(n))
                      : ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        e.attempt(ed, t, i)(n));
                  }
                )
              );
              function i(i) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  (0, Q.f)(
                    e,
                    e.attempt(eu, t, n),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(i)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        eh = {
          tokenize: function (e, t, n) {
            let r = this;
            return (0, Q.f)(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return !(0, W.xz)(e) &&
                  i &&
                  "listItemPrefixWhitespace" === i[1].type
                  ? t(e)
                  : n(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
          partial: !0,
        },
        ed = {
          tokenize: function (e, t, n) {
            let r = this;
            return (0, Q.f)(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return i &&
                  "listItemIndent" === i[1].type &&
                  i[2].sliceSerialize(i[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              "listItemIndent",
              r.containerState.size + 1
            );
          },
          partial: !0,
        },
        ep = {
          name: "blockQuote",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              if (62 === t) {
                let n = r.containerState;
                return (
                  n.open ||
                    (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
                  e.enter("blockQuotePrefix"),
                  e.enter("blockQuoteMarker"),
                  e.consume(t),
                  e.exit("blockQuoteMarker"),
                  i
                );
              }
              return n(t);
            };
            function i(n) {
              return (0, W.xz)(n)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(n),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  t)
                : (e.exit("blockQuotePrefix"), t(n));
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return (0, W.xz)(t)
                  ? (0, Q.f)(
                      e,
                      i,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )(t)
                  : i(t);
              };
              function i(r) {
                return e.attempt(ep, t, n)(r);
              }
            },
          },
          exit: function (e) {
            e.exit("blockQuote");
          },
        };
      function ef(e, t, n, r, i, a, s, o, l) {
        let c = l || Number.POSITIVE_INFINITY,
          u = 0;
        return function (t) {
          return 60 === t
            ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), h)
            : null === t || 32 === t || 41 === t || (0, W.Av)(t)
            ? n(t)
            : (e.enter(r),
              e.enter(s),
              e.enter(o),
              e.enter("chunkString", { contentType: "string" }),
              f(t));
        };
        function h(n) {
          return 62 === n
            ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t)
            : (e.enter(o),
              e.enter("chunkString", { contentType: "string" }),
              d(n));
        }
        function d(t) {
          return 62 === t
            ? (e.exit("chunkString"), e.exit(o), h(t))
            : null === t || 60 === t || (0, W.Ch)(t)
            ? n(t)
            : (e.consume(t), 92 === t ? p : d);
        }
        function p(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), d) : d(t);
        }
        function f(i) {
          return !u && (null === i || 41 === i || (0, W.z3)(i))
            ? (e.exit("chunkString"), e.exit(o), e.exit(s), e.exit(r), t(i))
            : u < c && 40 === i
            ? (e.consume(i), u++, f)
            : 41 === i
            ? (e.consume(i), u--, f)
            : null === i || 32 === i || 40 === i || (0, W.Av)(i)
            ? n(i)
            : (e.consume(i), 92 === i ? E : f);
        }
        function E(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), f) : f(t);
        }
      }
      function eE(e, t, n, r, i, a) {
        let s;
        let o = this,
          l = 0;
        return function (t) {
          return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), c;
        };
        function c(h) {
          return l > 999 ||
            null === h ||
            91 === h ||
            (93 === h && !s) ||
            (94 === h && !l && "_hiddenFootnoteSupport" in o.parser.constructs)
            ? n(h)
            : 93 === h
            ? (e.exit(a), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t)
            : (0, W.Ch)(h)
            ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), c)
            : (e.enter("chunkString", { contentType: "string" }), u(h));
        }
        function u(t) {
          return null === t || 91 === t || 93 === t || (0, W.Ch)(t) || l++ > 999
            ? (e.exit("chunkString"), c(t))
            : (e.consume(t), s || (s = !(0, W.xz)(t)), 92 === t ? h : u);
        }
        function h(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), l++, u)
            : u(t);
        }
      }
      function em(e, t, n, r, i, a) {
        let s;
        return function (t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(r),
              e.enter(i),
              e.consume(t),
              e.exit(i),
              (s = 40 === t ? 41 : t),
              o)
            : n(t);
        };
        function o(n) {
          return n === s
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(a), l(n));
        }
        function l(t) {
          return t === s
            ? (e.exit(a), o(s))
            : null === t
            ? n(t)
            : (0, W.Ch)(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              (0, Q.f)(e, l, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), c(t));
        }
        function c(t) {
          return t === s || null === t || (0, W.Ch)(t)
            ? (e.exit("chunkString"), l(t))
            : (e.consume(t), 92 === t ? u : c);
        }
        function u(t) {
          return t === s || 92 === t ? (e.consume(t), c) : c(t);
        }
      }
      function eT(e, t) {
        let n;
        return function r(i) {
          return (0, W.Ch)(i)
            ? (e.enter("lineEnding"),
              e.consume(i),
              e.exit("lineEnding"),
              (n = !0),
              r)
            : (0, W.xz)(i)
            ? (0, Q.f)(e, r, n ? "linePrefix" : "lineSuffix")(i)
            : t(i);
        };
      }
      var eA = n(11098);
      let e_ = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (0, W.z3)(t) ? eT(e, r)(t) : n(t);
            };
            function r(t) {
              return em(
                e,
                i,
                n,
                "definitionTitle",
                "definitionTitleMarker",
                "definitionTitleString"
              )(t);
            }
            function i(t) {
              return (0, W.xz)(t) ? (0, Q.f)(e, a, "whitespace")(t) : a(t);
            }
            function a(e) {
              return null === e || (0, W.Ch)(e) ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        eg = {
          name: "codeIndented",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("codeIndented"), (0, Q.f)(e, i, "linePrefix", 5)(t)
              );
            };
            function i(t) {
              let i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? (function t(n) {
                    return null === n
                      ? a(n)
                      : (0, W.Ch)(n)
                      ? e.attempt(eC, t, a)(n)
                      : (e.enter("codeFlowValue"),
                        (function n(r) {
                          return null === r || (0, W.Ch)(r)
                            ? (e.exit("codeFlowValue"), t(r))
                            : (e.consume(r), n);
                        })(n));
                  })(t)
                : n(t);
            }
            function a(n) {
              return e.exit("codeIndented"), t(n);
            }
          },
        },
        eC = {
          tokenize: function (e, t, n) {
            let r = this;
            return i;
            function i(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : (0, W.Ch)(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                : (0, Q.f)(e, a, "linePrefix", 5)(t);
            }
            function a(e) {
              let a = r.events[r.events.length - 1];
              return a &&
                "linePrefix" === a[1].type &&
                a[2].sliceSerialize(a[1], !0).length >= 4
                ? t(e)
                : (0, W.Ch)(e)
                ? i(e)
                : n(e);
            }
          },
          partial: !0,
        },
        eI = {
          name: "setextUnderline",
          tokenize: function (e, t, n) {
            let r;
            let i = this;
            return function (t) {
              let s,
                o = i.events.length;
              for (; o--; )
                if (
                  "lineEnding" !== i.events[o][1].type &&
                  "linePrefix" !== i.events[o][1].type &&
                  "content" !== i.events[o][1].type
                ) {
                  s = "paragraph" === i.events[o][1].type;
                  break;
                }
              return !i.parser.lazy[i.now().line] && (i.interrupt || s)
                ? (e.enter("setextHeadingLine"),
                  (r = t),
                  e.enter("setextHeadingLineSequence"),
                  (function t(n) {
                    return n === r
                      ? (e.consume(n), t)
                      : (e.exit("setextHeadingLineSequence"),
                        (0, W.xz)(n) ? (0, Q.f)(e, a, "lineSuffix")(n) : a(n));
                  })(t))
                : n(t);
            };
            function a(r) {
              return null === r || (0, W.Ch)(r)
                ? (e.exit("setextHeadingLine"), t(r))
                : n(r);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              a = e.length;
            for (; a--; )
              if ("enter" === e[a][0]) {
                if ("content" === e[a][1].type) {
                  n = a;
                  break;
                }
                "paragraph" === e[a][1].type && (r = a);
              } else
                "content" === e[a][1].type && e.splice(a, 1),
                  i || "definition" !== e[a][1].type || (i = a);
            let s = {
              type: "setextHeading",
              start: Object.assign({}, e[r][1].start),
              end: Object.assign({}, e[e.length - 1][1].end),
            };
            return (
              (e[r][1].type = "setextHeadingText"),
              i
                ? (e.splice(r, 0, ["enter", s, t]),
                  e.splice(i + 1, 0, ["exit", e[n][1], t]),
                  (e[n][1].end = Object.assign({}, e[i][1].end)))
                : (e[n][1] = s),
              e.push(["exit", s, t]),
              e
            );
          },
        },
        eN = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        eS = ["pre", "script", "style", "textarea"],
        ek = {
          tokenize: function (e, t, n) {
            return function (r) {
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                e.attempt(Z.w, t, n)
              );
            };
          },
          partial: !0,
        },
        eD = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (0, W.Ch)(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                : n(t);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        eR = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return null === t
                ? n(t)
                : (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  i);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        eb = {
          name: "codeFenced",
          tokenize: function (e, t, n) {
            let r;
            let i = this,
              a = {
                tokenize: function (e, t, n) {
                  let a = 0;
                  return function (t) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      s
                    );
                  };
                  function s(t) {
                    return (
                      e.enter("codeFencedFence"),
                      (0, W.xz)(t)
                        ? (0, Q.f)(
                            e,
                            l,
                            "linePrefix",
                            i.parser.constructs.disable.null.includes(
                              "codeIndented"
                            )
                              ? void 0
                              : 4
                          )(t)
                        : l(t)
                    );
                  }
                  function l(t) {
                    return t === r
                      ? (e.enter("codeFencedFenceSequence"),
                        (function t(i) {
                          return i === r
                            ? (a++, e.consume(i), t)
                            : a >= o
                            ? (e.exit("codeFencedFenceSequence"),
                              (0, W.xz)(i)
                                ? (0, Q.f)(e, c, "whitespace")(i)
                                : c(i))
                            : n(i);
                        })(t))
                      : n(t);
                  }
                  function c(r) {
                    return null === r || (0, W.Ch)(r)
                      ? (e.exit("codeFencedFence"), t(r))
                      : n(r);
                  }
                },
                partial: !0,
              },
              s = 0,
              o = 0;
            return function (t) {
              return (function (t) {
                let a = i.events[i.events.length - 1];
                return (
                  (s =
                    a && "linePrefix" === a[1].type
                      ? a[2].sliceSerialize(a[1], !0).length
                      : 0),
                  (r = t),
                  e.enter("codeFenced"),
                  e.enter("codeFencedFence"),
                  e.enter("codeFencedFenceSequence"),
                  (function t(i) {
                    return i === r
                      ? (o++, e.consume(i), t)
                      : o < 3
                      ? n(i)
                      : (e.exit("codeFencedFenceSequence"),
                        (0, W.xz)(i) ? (0, Q.f)(e, l, "whitespace")(i) : l(i));
                  })(t)
                );
              })(t);
            };
            function l(a) {
              return null === a || (0, W.Ch)(a)
                ? (e.exit("codeFencedFence"),
                  i.interrupt ? t(a) : e.check(eR, u, f)(a))
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(i) {
                    return null === i || (0, W.Ch)(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        l(i))
                      : (0, W.xz)(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        (0, Q.f)(e, c, "whitespace")(i))
                      : 96 === i && i === r
                      ? n(i)
                      : (e.consume(i), t);
                  })(a));
            }
            function c(t) {
              return null === t || (0, W.Ch)(t)
                ? l(t)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(i) {
                    return null === i || (0, W.Ch)(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceMeta"),
                        l(i))
                      : 96 === i && i === r
                      ? n(i)
                      : (e.consume(i), t);
                  })(t));
            }
            function u(t) {
              return e.attempt(a, f, h)(t);
            }
            function h(t) {
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), d
              );
            }
            function d(t) {
              return s > 0 && (0, W.xz)(t)
                ? (0, Q.f)(e, p, "linePrefix", s + 1)(t)
                : p(t);
            }
            function p(t) {
              return null === t || (0, W.Ch)(t)
                ? e.check(eR, u, f)(t)
                : (e.enter("codeFlowValue"),
                  (function t(n) {
                    return null === n || (0, W.Ch)(n)
                      ? (e.exit("codeFlowValue"), p(n))
                      : (e.consume(n), t);
                  })(t));
            }
            function f(n) {
              return e.exit("codeFenced"), t(n);
            }
          },
          concrete: !0,
        },
        eO = document.createElement("i");
      function eL(e) {
        let t = "&" + e + ";";
        eO.innerHTML = t;
        let n = eO.textContent;
        return (
          (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
        );
      }
      let ey = {
          name: "characterReference",
          tokenize: function (e, t, n) {
            let r, i;
            let a = this,
              s = 0;
            return function (t) {
              return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(t),
                e.exit("characterReferenceMarker"),
                o
              );
            };
            function o(t) {
              return 35 === t
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerNumeric"),
                  l)
                : (e.enter("characterReferenceValue"),
                  (r = 31),
                  (i = W.H$),
                  c(t));
            }
            function l(t) {
              return 88 === t || 120 === t
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (r = 6),
                  (i = W.AF),
                  c)
                : (e.enter("characterReferenceValue"),
                  (r = 7),
                  (i = W.pY),
                  c(t));
            }
            function c(o) {
              if (59 === o && s) {
                let r = e.exit("characterReferenceValue");
                return i !== W.H$ || eL(a.sliceSerialize(r))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(o),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    t)
                  : n(o);
              }
              return i(o) && s++ < r ? (e.consume(o), c) : n(o);
            }
          },
        },
        eP = {
          name: "characterEscape",
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(t),
                e.exit("escapeMarker"),
                r
              );
            };
            function r(r) {
              return (0, W.sR)(r)
                ? (e.enter("characterEscapeValue"),
                  e.consume(r),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  t)
                : n(r);
            }
          },
        },
        eM = {
          name: "lineEnding",
          tokenize: function (e, t) {
            return function (n) {
              return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                (0, Q.f)(e, t, "linePrefix")
              );
            };
          },
        },
        ex = {
          name: "labelEnd",
          tokenize: function (e, t, n) {
            let r, i;
            let a = this,
              s = a.events.length;
            for (; s--; )
              if (
                ("labelImage" === a.events[s][1].type ||
                  "labelLink" === a.events[s][1].type) &&
                !a.events[s][1]._balanced
              ) {
                r = a.events[s][1];
                break;
              }
            return function (t) {
              return r
                ? r._inactive
                  ? u(t)
                  : ((i = a.parser.defined.includes(
                      (0, eA.d)(
                        a.sliceSerialize({ start: r.end, end: a.now() })
                      )
                    )),
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    o)
                : n(t);
            };
            function o(t) {
              return 40 === t
                ? e.attempt(ev, c, i ? c : u)(t)
                : 91 === t
                ? e.attempt(eF, c, i ? l : u)(t)
                : i
                ? c(t)
                : u(t);
            }
            function l(t) {
              return e.attempt(eB, c, u)(t);
            }
            function c(e) {
              return t(e);
            }
            function u(e) {
              return (r._balanced = !0), n(e);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              a,
              s = e.length,
              o = 0;
            for (; s--; )
              if (((n = e[s][1]), r)) {
                if (
                  "link" === n.type ||
                  ("labelLink" === n.type && n._inactive)
                )
                  break;
                "enter" === e[s][0] &&
                  "labelLink" === n.type &&
                  (n._inactive = !0);
              } else if (i) {
                if (
                  "enter" === e[s][0] &&
                  ("labelImage" === n.type || "labelLink" === n.type) &&
                  !n._balanced &&
                  ((r = s), "labelLink" !== n.type)
                ) {
                  o = 2;
                  break;
                }
              } else "labelEnd" === n.type && (i = s);
            let l = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              c = {
                type: "label",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[i][1].end),
              },
              u = {
                type: "labelText",
                start: Object.assign({}, e[r + o + 2][1].end),
                end: Object.assign({}, e[i - 2][1].start),
              };
            return (
              (a = [
                ["enter", l, t],
                ["enter", c, t],
              ]),
              (a = (0, Y.V)(a, e.slice(r + 1, r + o + 3))),
              (a = (0, Y.V)(a, [["enter", u, t]])),
              (a = (0, Y.V)(
                a,
                (0, el.C)(
                  t.parser.constructs.insideSpan.null,
                  e.slice(r + o + 4, i - 3),
                  t
                )
              )),
              (a = (0, Y.V)(a, [
                ["exit", u, t],
                e[i - 2],
                e[i - 1],
                ["exit", c, t],
              ])),
              (a = (0, Y.V)(a, e.slice(i + 1))),
              (a = (0, Y.V)(a, [["exit", l, t]])),
              (0, Y.d)(e, r, e.length, a),
              e
            );
          },
          resolveAll: function (e) {
            let t = -1;
            for (; ++t < e.length; ) {
              let n = e[t][1];
              ("labelImage" === n.type ||
                "labelLink" === n.type ||
                "labelEnd" === n.type) &&
                (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                (n.type = "data"),
                t++);
            }
            return e;
          },
        },
        ev = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(t),
                e.exit("resourceMarker"),
                r
              );
            };
            function r(t) {
              return (0, W.z3)(t) ? eT(e, i)(t) : i(t);
            }
            function i(t) {
              return 41 === t
                ? c(t)
                : ef(
                    e,
                    a,
                    s,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32
                  )(t);
            }
            function a(t) {
              return (0, W.z3)(t) ? eT(e, o)(t) : c(t);
            }
            function s(e) {
              return n(e);
            }
            function o(t) {
              return 34 === t || 39 === t || 40 === t
                ? em(
                    e,
                    l,
                    n,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(t)
                : c(t);
            }
            function l(t) {
              return (0, W.z3)(t) ? eT(e, c)(t) : c(t);
            }
            function c(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  t)
                : n(r);
            }
          },
        },
        eF = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return eE.call(
                r,
                e,
                i,
                a,
                "reference",
                "referenceMarker",
                "referenceString"
              )(t);
            };
            function i(e) {
              return r.parser.defined.includes(
                (0, eA.d)(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? t(e)
                : n(e);
            }
            function a(e) {
              return n(e);
            }
          },
        },
        eB = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(t),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  t)
                : n(r);
            }
          },
        },
        eH = {
          name: "labelStartImage",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelImage"),
                e.enter("labelImageMarker"),
                e.consume(t),
                e.exit("labelImageMarker"),
                i
              );
            };
            function i(t) {
              return 91 === t
                ? (e.enter("labelMarker"),
                  e.consume(t),
                  e.exit("labelMarker"),
                  e.exit("labelImage"),
                  a)
                : n(t);
            }
            function a(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
          resolveAll: ex.resolveAll,
        };
      var ew = n(62987);
      let eU = {
        name: "attention",
        tokenize: function (e, t) {
          let n;
          let r = this.parser.constructs.attentionMarkers.null,
            i = this.previous,
            a = (0, ew.r)(i);
          return function (s) {
            return (
              (n = s),
              e.enter("attentionSequence"),
              (function s(o) {
                if (o === n) return e.consume(o), s;
                let l = e.exit("attentionSequence"),
                  c = (0, ew.r)(o),
                  u = !c || (2 === c && a) || r.includes(o),
                  h = !a || (2 === a && c) || r.includes(i);
                return (
                  (l._open = !!(42 === n ? u : u && (a || !h))),
                  (l._close = !!(42 === n ? h : h && (c || !u))),
                  t(o)
                );
              })(s)
            );
          };
        },
        resolveAll: function (e, t) {
          let n,
            r,
            i,
            a,
            s,
            o,
            l,
            c,
            u = -1;
          for (; ++u < e.length; )
            if (
              "enter" === e[u][0] &&
              "attentionSequence" === e[u][1].type &&
              e[u][1]._close
            ) {
              for (n = u; n--; )
                if (
                  "exit" === e[n][0] &&
                  "attentionSequence" === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[u][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[u][1]._open) &&
                    (e[u][1].end.offset - e[u][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[u][1].end.offset -
                        e[u][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  o =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[u][1].end.offset - e[u][1].start.offset > 1
                      ? 2
                      : 1;
                  let h = Object.assign({}, e[n][1].end),
                    d = Object.assign({}, e[u][1].start);
                  eG(h, -o),
                    eG(d, o),
                    (a = {
                      type: o > 1 ? "strongSequence" : "emphasisSequence",
                      start: h,
                      end: Object.assign({}, e[n][1].end),
                    }),
                    (s = {
                      type: o > 1 ? "strongSequence" : "emphasisSequence",
                      start: Object.assign({}, e[u][1].start),
                      end: d,
                    }),
                    (i = {
                      type: o > 1 ? "strongText" : "emphasisText",
                      start: Object.assign({}, e[n][1].end),
                      end: Object.assign({}, e[u][1].start),
                    }),
                    (r = {
                      type: o > 1 ? "strong" : "emphasis",
                      start: Object.assign({}, a.start),
                      end: Object.assign({}, s.end),
                    }),
                    (e[n][1].end = Object.assign({}, a.start)),
                    (e[u][1].start = Object.assign({}, s.end)),
                    (l = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (l = (0, Y.V)(l, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t],
                      ])),
                    (l = (0, Y.V)(l, [
                      ["enter", r, t],
                      ["enter", a, t],
                      ["exit", a, t],
                      ["enter", i, t],
                    ])),
                    (l = (0, Y.V)(
                      l,
                      (0, el.C)(
                        t.parser.constructs.insideSpan.null,
                        e.slice(n + 1, u),
                        t
                      )
                    )),
                    (l = (0, Y.V)(l, [
                      ["exit", i, t],
                      ["enter", s, t],
                      ["exit", s, t],
                      ["exit", r, t],
                    ])),
                    e[u][1].end.offset - e[u][1].start.offset
                      ? ((c = 2),
                        (l = (0, Y.V)(l, [
                          ["enter", e[u][1], t],
                          ["exit", e[u][1], t],
                        ])))
                      : (c = 0),
                    (0, Y.d)(e, n - 1, u - n + 3, l),
                    (u = n + l.length - c - 2);
                  break;
                }
            }
          for (u = -1; ++u < e.length; )
            "attentionSequence" === e[u][1].type && (e[u][1].type = "data");
          return e;
        },
      };
      function eG(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      let eY = {
          name: "labelStartLink",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelLink"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelLink"),
                i
              );
            };
            function i(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
          resolveAll: ex.resolveAll,
        },
        ez = {
          42: eu,
          43: eu,
          45: eu,
          48: eu,
          49: eu,
          50: eu,
          51: eu,
          52: eu,
          53: eu,
          54: eu,
          55: eu,
          56: eu,
          57: eu,
          62: ep,
        },
        eq = {
          91: {
            name: "definition",
            tokenize: function (e, t, n) {
              let r;
              let i = this;
              return function (t) {
                return (
                  e.enter("definition"),
                  eE.call(
                    i,
                    e,
                    a,
                    n,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString"
                  )(t)
                );
              };
              function a(t) {
                return ((r = (0, eA.d)(
                  i
                    .sliceSerialize(i.events[i.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === t)
                  ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    s)
                  : n(t);
              }
              function s(t) {
                return (0, W.z3)(t) ? eT(e, o)(t) : o(t);
              }
              function o(t) {
                return ef(
                  e,
                  l,
                  n,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString"
                )(t);
              }
              function l(t) {
                return e.attempt(e_, c, c)(t);
              }
              function c(t) {
                return (0, W.xz)(t) ? (0, Q.f)(e, u, "whitespace")(t) : u(t);
              }
              function u(a) {
                return null === a || (0, W.Ch)(a)
                  ? (e.exit("definition"), i.parser.defined.push(r), t(a))
                  : n(a);
              }
            },
          },
        },
        eV = { [-2]: eg, [-1]: eg, 32: eg },
        ej = {
          35: {
            name: "headingAtx",
            tokenize: function (e, t, n) {
              let r = 0;
              return function (i) {
                return (
                  e.enter("atxHeading"),
                  e.enter("atxHeadingSequence"),
                  (function i(a) {
                    return 35 === a && r++ < 6
                      ? (e.consume(a), i)
                      : null === a || (0, W.z3)(a)
                      ? (e.exit("atxHeadingSequence"),
                        (function n(r) {
                          return 35 === r
                            ? (e.enter("atxHeadingSequence"),
                              (function t(r) {
                                return 35 === r
                                  ? (e.consume(r), t)
                                  : (e.exit("atxHeadingSequence"), n(r));
                              })(r))
                            : null === r || (0, W.Ch)(r)
                            ? (e.exit("atxHeading"), t(r))
                            : (0, W.xz)(r)
                            ? (0, Q.f)(e, n, "whitespace")(r)
                            : (e.enter("atxHeadingText"),
                              (function t(r) {
                                return null === r || 35 === r || (0, W.z3)(r)
                                  ? (e.exit("atxHeadingText"), n(r))
                                  : (e.consume(r), t);
                              })(r));
                        })(a))
                      : n(a);
                  })(i)
                );
              };
            },
            resolve: function (e, t) {
              let n,
                r,
                i = e.length - 2,
                a = 3;
              return (
                "whitespace" === e[3][1].type && (a += 2),
                i - 2 > a && "whitespace" === e[i][1].type && (i -= 2),
                "atxHeadingSequence" === e[i][1].type &&
                  (a === i - 1 ||
                    (i - 4 > a && "whitespace" === e[i - 2][1].type)) &&
                  (i -= a + 1 === i ? 2 : 4),
                i > a &&
                  ((n = {
                    type: "atxHeadingText",
                    start: e[a][1].start,
                    end: e[i][1].end,
                  }),
                  (r = {
                    type: "chunkText",
                    start: e[a][1].start,
                    end: e[i][1].end,
                    contentType: "text",
                  }),
                  (0, Y.d)(e, a, i - a + 1, [
                    ["enter", n, t],
                    ["enter", r, t],
                    ["exit", r, t],
                    ["exit", n, t],
                  ])),
                e
              );
            },
          },
          42: ec,
          45: [eI, ec],
          60: {
            name: "htmlFlow",
            tokenize: function (e, t, n) {
              let r, i, a, s, o;
              let l = this;
              return function (t) {
                return (
                  e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), c
                );
              };
              function c(s) {
                return 33 === s
                  ? (e.consume(s), u)
                  : 47 === s
                  ? (e.consume(s), (i = !0), p)
                  : 63 === s
                  ? (e.consume(s), (r = 3), l.interrupt ? t : P)
                  : (0, W.jv)(s)
                  ? (e.consume(s), (a = String.fromCharCode(s)), f)
                  : n(s);
              }
              function u(i) {
                return 45 === i
                  ? (e.consume(i), (r = 2), h)
                  : 91 === i
                  ? (e.consume(i), (r = 5), (s = 0), d)
                  : (0, W.jv)(i)
                  ? (e.consume(i), (r = 4), l.interrupt ? t : P)
                  : n(i);
              }
              function h(r) {
                return 45 === r ? (e.consume(r), l.interrupt ? t : P) : n(r);
              }
              function d(r) {
                let i = "CDATA[";
                return r === i.charCodeAt(s++)
                  ? (e.consume(r), s === i.length)
                    ? l.interrupt
                      ? t
                      : S
                    : d
                  : n(r);
              }
              function p(t) {
                return (0, W.jv)(t)
                  ? (e.consume(t), (a = String.fromCharCode(t)), f)
                  : n(t);
              }
              function f(s) {
                if (null === s || 47 === s || 62 === s || (0, W.z3)(s)) {
                  let o = 47 === s,
                    c = a.toLowerCase();
                  return !o && !i && eS.includes(c)
                    ? ((r = 1), l.interrupt ? t(s) : S(s))
                    : eN.includes(a.toLowerCase())
                    ? ((r = 6), o)
                      ? (e.consume(s), E)
                      : l.interrupt
                      ? t(s)
                      : S(s)
                    : ((r = 7),
                      l.interrupt && !l.parser.lazy[l.now().line]
                        ? n(s)
                        : i
                        ? (function t(n) {
                            return (0, W.xz)(n) ? (e.consume(n), t) : I(n);
                          })(s)
                        : m(s));
                }
                return 45 === s || (0, W.H$)(s)
                  ? (e.consume(s), (a += String.fromCharCode(s)), f)
                  : n(s);
              }
              function E(r) {
                return 62 === r ? (e.consume(r), l.interrupt ? t : S) : n(r);
              }
              function m(t) {
                return 47 === t
                  ? (e.consume(t), I)
                  : 58 === t || 95 === t || (0, W.jv)(t)
                  ? (e.consume(t), T)
                  : (0, W.xz)(t)
                  ? (e.consume(t), m)
                  : I(t);
              }
              function T(t) {
                return 45 === t ||
                  46 === t ||
                  58 === t ||
                  95 === t ||
                  (0, W.H$)(t)
                  ? (e.consume(t), T)
                  : A(t);
              }
              function A(t) {
                return 61 === t
                  ? (e.consume(t), _)
                  : (0, W.xz)(t)
                  ? (e.consume(t), A)
                  : m(t);
              }
              function _(t) {
                return null === t ||
                  60 === t ||
                  61 === t ||
                  62 === t ||
                  96 === t
                  ? n(t)
                  : 34 === t || 39 === t
                  ? (e.consume(t), (o = t), g)
                  : (0, W.xz)(t)
                  ? (e.consume(t), _)
                  : (function t(n) {
                      return null === n ||
                        34 === n ||
                        39 === n ||
                        47 === n ||
                        60 === n ||
                        61 === n ||
                        62 === n ||
                        96 === n ||
                        (0, W.z3)(n)
                        ? A(n)
                        : (e.consume(n), t);
                    })(t);
              }
              function g(t) {
                return t === o
                  ? (e.consume(t), (o = null), C)
                  : null === t || (0, W.Ch)(t)
                  ? n(t)
                  : (e.consume(t), g);
              }
              function C(e) {
                return 47 === e || 62 === e || (0, W.xz)(e) ? m(e) : n(e);
              }
              function I(t) {
                return 62 === t ? (e.consume(t), N) : n(t);
              }
              function N(t) {
                return null === t || (0, W.Ch)(t)
                  ? S(t)
                  : (0, W.xz)(t)
                  ? (e.consume(t), N)
                  : n(t);
              }
              function S(t) {
                return 45 === t && 2 === r
                  ? (e.consume(t), b)
                  : 60 === t && 1 === r
                  ? (e.consume(t), O)
                  : 62 === t && 4 === r
                  ? (e.consume(t), M)
                  : 63 === t && 3 === r
                  ? (e.consume(t), P)
                  : 93 === t && 5 === r
                  ? (e.consume(t), y)
                  : (0, W.Ch)(t) && (6 === r || 7 === r)
                  ? (e.exit("htmlFlowData"), e.check(ek, x, k)(t))
                  : null === t || (0, W.Ch)(t)
                  ? (e.exit("htmlFlowData"), k(t))
                  : (e.consume(t), S);
              }
              function k(t) {
                return e.check(eD, D, x)(t);
              }
              function D(t) {
                return (
                  e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), R
                );
              }
              function R(t) {
                return null === t || (0, W.Ch)(t)
                  ? k(t)
                  : (e.enter("htmlFlowData"), S(t));
              }
              function b(t) {
                return 45 === t ? (e.consume(t), P) : S(t);
              }
              function O(t) {
                return 47 === t ? (e.consume(t), (a = ""), L) : S(t);
              }
              function L(t) {
                if (62 === t) {
                  let n = a.toLowerCase();
                  return eS.includes(n) ? (e.consume(t), M) : S(t);
                }
                return (0, W.jv)(t) && a.length < 8
                  ? (e.consume(t), (a += String.fromCharCode(t)), L)
                  : S(t);
              }
              function y(t) {
                return 93 === t ? (e.consume(t), P) : S(t);
              }
              function P(t) {
                return 62 === t
                  ? (e.consume(t), M)
                  : 45 === t && 2 === r
                  ? (e.consume(t), P)
                  : S(t);
              }
              function M(t) {
                return null === t || (0, W.Ch)(t)
                  ? (e.exit("htmlFlowData"), x(t))
                  : (e.consume(t), M);
              }
              function x(n) {
                return e.exit("htmlFlow"), t(n);
              }
            },
            resolveTo: function (e) {
              let t = e.length;
              for (
                ;
                t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

              );
              return (
                t > 1 &&
                  "linePrefix" === e[t - 2][1].type &&
                  ((e[t][1].start = e[t - 2][1].start),
                  (e[t + 1][1].start = e[t - 2][1].start),
                  e.splice(t - 2, 2)),
                e
              );
            },
            concrete: !0,
          },
          61: eI,
          95: ec,
          96: eb,
          126: eb,
        },
        eQ = { 38: ey, 92: eP },
        eW = {
          [-5]: eM,
          [-4]: eM,
          [-3]: eM,
          33: eH,
          38: ey,
          42: eU,
          60: [
            {
              name: "autolink",
              tokenize: function (e, t, n) {
                let r = 0;
                return function (t) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    i
                  );
                };
                function i(t) {
                  return (0, W.jv)(t)
                    ? (e.consume(t), a)
                    : 64 === t
                    ? n(t)
                    : o(t);
                }
                function a(t) {
                  return 43 === t || 45 === t || 46 === t || (0, W.H$)(t)
                    ? ((r = 1),
                      (function t(n) {
                        return 58 === n
                          ? (e.consume(n), (r = 0), s)
                          : (43 === n ||
                              45 === n ||
                              46 === n ||
                              (0, W.H$)(n)) &&
                            r++ < 32
                          ? (e.consume(n), t)
                          : ((r = 0), o(n));
                      })(t))
                    : o(t);
                }
                function s(r) {
                  return 62 === r
                    ? (e.exit("autolinkProtocol"),
                      e.enter("autolinkMarker"),
                      e.consume(r),
                      e.exit("autolinkMarker"),
                      e.exit("autolink"),
                      t)
                    : null === r || 32 === r || 60 === r || (0, W.Av)(r)
                    ? n(r)
                    : (e.consume(r), s);
                }
                function o(t) {
                  return 64 === t
                    ? (e.consume(t), l)
                    : (0, W.n9)(t)
                    ? (e.consume(t), o)
                    : n(t);
                }
                function l(i) {
                  return (0, W.H$)(i)
                    ? (function i(a) {
                        return 46 === a
                          ? (e.consume(a), (r = 0), l)
                          : 62 === a
                          ? ((e.exit("autolinkProtocol").type =
                              "autolinkEmail"),
                            e.enter("autolinkMarker"),
                            e.consume(a),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            t)
                          : (function t(a) {
                              if ((45 === a || (0, W.H$)(a)) && r++ < 63) {
                                let n = 45 === a ? t : i;
                                return e.consume(a), n;
                              }
                              return n(a);
                            })(a);
                      })(i)
                    : n(i);
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, t, n) {
                let r, i, a;
                let s = this;
                return function (t) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(t),
                    o
                  );
                };
                function o(t) {
                  return 33 === t
                    ? (e.consume(t), l)
                    : 47 === t
                    ? (e.consume(t), g)
                    : 63 === t
                    ? (e.consume(t), A)
                    : (0, W.jv)(t)
                    ? (e.consume(t), I)
                    : n(t);
                }
                function l(t) {
                  return 45 === t
                    ? (e.consume(t), c)
                    : 91 === t
                    ? (e.consume(t), (i = 0), p)
                    : (0, W.jv)(t)
                    ? (e.consume(t), T)
                    : n(t);
                }
                function c(t) {
                  return 45 === t ? (e.consume(t), d) : n(t);
                }
                function u(t) {
                  return null === t
                    ? n(t)
                    : 45 === t
                    ? (e.consume(t), h)
                    : (0, W.Ch)(t)
                    ? ((a = u), L(t))
                    : (e.consume(t), u);
                }
                function h(t) {
                  return 45 === t ? (e.consume(t), d) : u(t);
                }
                function d(e) {
                  return 62 === e ? O(e) : 45 === e ? h(e) : u(e);
                }
                function p(t) {
                  let r = "CDATA[";
                  return t === r.charCodeAt(i++)
                    ? (e.consume(t), i === r.length ? f : p)
                    : n(t);
                }
                function f(t) {
                  return null === t
                    ? n(t)
                    : 93 === t
                    ? (e.consume(t), E)
                    : (0, W.Ch)(t)
                    ? ((a = f), L(t))
                    : (e.consume(t), f);
                }
                function E(t) {
                  return 93 === t ? (e.consume(t), m) : f(t);
                }
                function m(t) {
                  return 62 === t ? O(t) : 93 === t ? (e.consume(t), m) : f(t);
                }
                function T(t) {
                  return null === t || 62 === t
                    ? O(t)
                    : (0, W.Ch)(t)
                    ? ((a = T), L(t))
                    : (e.consume(t), T);
                }
                function A(t) {
                  return null === t
                    ? n(t)
                    : 63 === t
                    ? (e.consume(t), _)
                    : (0, W.Ch)(t)
                    ? ((a = A), L(t))
                    : (e.consume(t), A);
                }
                function _(e) {
                  return 62 === e ? O(e) : A(e);
                }
                function g(t) {
                  return (0, W.jv)(t) ? (e.consume(t), C) : n(t);
                }
                function C(t) {
                  return 45 === t || (0, W.H$)(t)
                    ? (e.consume(t), C)
                    : (function t(n) {
                        return (0, W.Ch)(n)
                          ? ((a = t), L(n))
                          : (0, W.xz)(n)
                          ? (e.consume(n), t)
                          : O(n);
                      })(t);
                }
                function I(t) {
                  return 45 === t || (0, W.H$)(t)
                    ? (e.consume(t), I)
                    : 47 === t || 62 === t || (0, W.z3)(t)
                    ? N(t)
                    : n(t);
                }
                function N(t) {
                  return 47 === t
                    ? (e.consume(t), O)
                    : 58 === t || 95 === t || (0, W.jv)(t)
                    ? (e.consume(t), S)
                    : (0, W.Ch)(t)
                    ? ((a = N), L(t))
                    : (0, W.xz)(t)
                    ? (e.consume(t), N)
                    : O(t);
                }
                function S(t) {
                  return 45 === t ||
                    46 === t ||
                    58 === t ||
                    95 === t ||
                    (0, W.H$)(t)
                    ? (e.consume(t), S)
                    : (function t(n) {
                        return 61 === n
                          ? (e.consume(n), k)
                          : (0, W.Ch)(n)
                          ? ((a = t), L(n))
                          : (0, W.xz)(n)
                          ? (e.consume(n), t)
                          : N(n);
                      })(t);
                }
                function k(t) {
                  return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                    ? (e.consume(t), (r = t), D)
                    : (0, W.Ch)(t)
                    ? ((a = k), L(t))
                    : (0, W.xz)(t)
                    ? (e.consume(t), k)
                    : (e.consume(t), R);
                }
                function D(t) {
                  return t === r
                    ? (e.consume(t), (r = void 0), b)
                    : null === t
                    ? n(t)
                    : (0, W.Ch)(t)
                    ? ((a = D), L(t))
                    : (e.consume(t), D);
                }
                function R(t) {
                  return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    96 === t
                    ? n(t)
                    : 47 === t || 62 === t || (0, W.z3)(t)
                    ? N(t)
                    : (e.consume(t), R);
                }
                function b(e) {
                  return 47 === e || 62 === e || (0, W.z3)(e) ? N(e) : n(e);
                }
                function O(r) {
                  return 62 === r
                    ? (e.consume(r),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      t)
                    : n(r);
                }
                function L(t) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    y
                  );
                }
                function y(t) {
                  return (0, W.xz)(t)
                    ? (0, Q.f)(
                        e,
                        P,
                        "linePrefix",
                        s.parser.constructs.disable.null.includes(
                          "codeIndented"
                        )
                          ? void 0
                          : 4
                      )(t)
                    : P(t);
                }
                function P(t) {
                  return e.enter("htmlTextData"), a(t);
                }
              },
            },
          ],
          91: eY,
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, t, n) {
                return function (t) {
                  return e.enter("hardBreakEscape"), e.consume(t), r;
                };
                function r(r) {
                  return (0, W.Ch)(r)
                    ? (e.exit("hardBreakEscape"), t(r))
                    : n(r);
                }
              },
            },
            eP,
          ],
          93: ex,
          95: eU,
          96: {
            name: "codeText",
            tokenize: function (e, t, n) {
              let r,
                i,
                a = 0;
              return function (t) {
                return (
                  e.enter("codeText"),
                  e.enter("codeTextSequence"),
                  (function t(n) {
                    return 96 === n
                      ? (e.consume(n), a++, t)
                      : (e.exit("codeTextSequence"), s(n));
                  })(t)
                );
              };
              function s(l) {
                return null === l
                  ? n(l)
                  : 32 === l
                  ? (e.enter("space"), e.consume(l), e.exit("space"), s)
                  : 96 === l
                  ? ((i = e.enter("codeTextSequence")),
                    (r = 0),
                    (function n(s) {
                      return 96 === s
                        ? (e.consume(s), r++, n)
                        : r === a
                        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(s))
                        : ((i.type = "codeTextData"), o(s));
                    })(l))
                  : (0, W.Ch)(l)
                  ? (e.enter("lineEnding"),
                    e.consume(l),
                    e.exit("lineEnding"),
                    s)
                  : (e.enter("codeTextData"), o(l));
              }
              function o(t) {
                return null === t || 32 === t || 96 === t || (0, W.Ch)(t)
                  ? (e.exit("codeTextData"), s(t))
                  : (e.consume(t), o);
              }
            },
            resolve: function (e) {
              let t,
                n,
                r = e.length - 4,
                i = 3;
              if (
                ("lineEnding" === e[3][1].type || "space" === e[i][1].type) &&
                ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
              ) {
                for (t = i; ++t < r; )
                  if ("codeTextData" === e[t][1].type) {
                    (e[i][1].type = "codeTextPadding"),
                      (e[r][1].type = "codeTextPadding"),
                      (i += 2),
                      (r -= 2);
                    break;
                  }
              }
              for (t = i - 1, r++; ++t <= r; )
                void 0 === n
                  ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                  : (t === r || "lineEnding" === e[t][1].type) &&
                    ((e[n][1].type = "codeTextData"),
                    t !== n + 2 &&
                      ((e[n][1].end = e[t - 1][1].end),
                      e.splice(n + 2, t - n - 2),
                      (r -= t - n - 2),
                      (t = n + 2)),
                    (n = void 0));
              return e;
            },
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
          },
        },
        eX = { null: [eU, en] },
        eK = { null: [42, 95] },
        eJ = { null: [] },
        eZ = /[\0\t\n\r]/g;
      function e$(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (65535 & n) == 65535 ||
          (65535 & n) == 65534 ||
          n > 1114111
          ? "�"
          : String.fromCodePoint(n);
      }
      let e0 =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function e1(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          let e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return e$(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return eL(n) || e;
      }
      let e3 = {}.hasOwnProperty;
      function e2(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function e5(e, t) {
        if (e)
          throw Error(
            "Cannot close `" +
              e.type +
              "` (" +
              _({ start: e.start, end: e.end }) +
              "): a different token (`" +
              t.type +
              "`, " +
              _({ start: t.start, end: t.end }) +
              ") is open"
          );
        throw Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            _({ start: t.start, end: t.end }) +
            ") is still open"
        );
      }
      function e4(e) {
        let t = this;
        t.parser = function (n) {
          var i, a;
          let s, o, l, c;
          return (
            "string" !=
              typeof (i = {
                ...t.data("settings"),
                ...e,
                extensions: t.data("micromarkExtensions") || [],
                mdastExtensions: t.data("fromMarkdownExtensions") || [],
              }) && ((a = i), (i = void 0)),
            (function (e) {
              let t = {
                transforms: [],
                canContainEols: [
                  "emphasis",
                  "fragment",
                  "heading",
                  "paragraph",
                  "strong",
                ],
                enter: {
                  autolink: r(T),
                  autolinkProtocol: c,
                  autolinkEmail: c,
                  atxHeading: r(f),
                  blockQuote: r(function () {
                    return { type: "blockquote", children: [] };
                  }),
                  characterEscape: c,
                  characterReference: c,
                  codeFenced: r(p),
                  codeFencedFenceInfo: i,
                  codeFencedFenceMeta: i,
                  codeIndented: r(p, i),
                  codeText: r(function () {
                    return { type: "inlineCode", value: "" };
                  }, i),
                  codeTextData: c,
                  data: c,
                  codeFlowValue: c,
                  definition: r(function () {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: "",
                    };
                  }),
                  definitionDestinationString: i,
                  definitionLabelString: i,
                  definitionTitleString: i,
                  emphasis: r(function () {
                    return { type: "emphasis", children: [] };
                  }),
                  hardBreakEscape: r(E),
                  hardBreakTrailing: r(E),
                  htmlFlow: r(m, i),
                  htmlFlowData: c,
                  htmlText: r(m, i),
                  htmlTextData: c,
                  image: r(function () {
                    return { type: "image", title: null, url: "", alt: null };
                  }),
                  label: i,
                  link: r(T),
                  listItem: r(function (e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: [],
                    };
                  }),
                  listItemValue: function (e) {
                    this.data.expectingFirstListItemValue &&
                      ((this.stack[this.stack.length - 2].start =
                        Number.parseInt(this.sliceSerialize(e), 10)),
                      (this.data.expectingFirstListItemValue = void 0));
                  },
                  listOrdered: r(A, function () {
                    this.data.expectingFirstListItemValue = !0;
                  }),
                  listUnordered: r(A),
                  paragraph: r(function () {
                    return { type: "paragraph", children: [] };
                  }),
                  reference: function () {
                    this.data.referenceType = "collapsed";
                  },
                  referenceString: i,
                  resourceDestinationString: i,
                  resourceTitleString: i,
                  setextHeading: r(f),
                  strong: r(function () {
                    return { type: "strong", children: [] };
                  }),
                  thematicBreak: r(function () {
                    return { type: "thematicBreak" };
                  }),
                },
                exit: {
                  atxHeading: s(),
                  atxHeadingSequence: function (e) {
                    let t = this.stack[this.stack.length - 1];
                    if (!t.depth) {
                      let n = this.sliceSerialize(e).length;
                      t.depth = n;
                    }
                  },
                  autolink: s(),
                  autolinkEmail: function (e) {
                    u.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        "mailto:" + this.sliceSerialize(e));
                  },
                  autolinkProtocol: function (e) {
                    u.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        this.sliceSerialize(e));
                  },
                  blockQuote: s(),
                  characterEscapeValue: u,
                  characterReferenceMarkerHexadecimal: d,
                  characterReferenceMarkerNumeric: d,
                  characterReferenceValue: function (e) {
                    let t;
                    let n = this.sliceSerialize(e),
                      r = this.data.characterReferenceType;
                    r
                      ? ((t = e$(
                          n,
                          "characterReferenceMarkerNumeric" === r ? 10 : 16
                        )),
                        (this.data.characterReferenceType = void 0))
                      : (t = eL(n));
                    let i = this.stack[this.stack.length - 1];
                    i.value += t;
                  },
                  characterReference: function (e) {
                    this.stack.pop().position.end = e2(e.end);
                  },
                  codeFenced: s(function () {
                    let e = this.resume();
                    (this.stack[this.stack.length - 1].value = e.replace(
                      /^(\r?\n|\r)|(\r?\n|\r)$/g,
                      ""
                    )),
                      (this.data.flowCodeInside = void 0);
                  }),
                  codeFencedFence: function () {
                    this.data.flowCodeInside ||
                      (this.buffer(), (this.data.flowCodeInside = !0));
                  },
                  codeFencedFenceInfo: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                  },
                  codeFlowValue: u,
                  codeIndented: s(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(
                      /(\r?\n|\r)$/g,
                      ""
                    );
                  }),
                  codeText: s(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  codeTextData: u,
                  data: u,
                  definition: s(),
                  definitionDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  definitionLabelString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = (0, eA.d)(
                        this.sliceSerialize(e)
                      ).toLowerCase());
                  },
                  definitionTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  emphasis: s(),
                  hardBreakEscape: s(h),
                  hardBreakTrailing: s(h),
                  htmlFlow: s(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlFlowData: u,
                  htmlText: s(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlTextData: u,
                  image: s(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  label: function () {
                    let e = this.stack[this.stack.length - 1],
                      t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    if (((this.data.inReference = !0), "link" === n.type)) {
                      let t = e.children;
                      n.children = t;
                    } else n.alt = t;
                  },
                  labelText: function (e) {
                    let t = this.sliceSerialize(e),
                      n = this.stack[this.stack.length - 2];
                    (n.label = t.replace(e0, e1)),
                      (n.identifier = (0, eA.d)(t).toLowerCase());
                  },
                  lineEnding: function (e) {
                    let n = this.stack[this.stack.length - 1];
                    if (this.data.atHardBreak) {
                      (n.children[n.children.length - 1].position.end = e2(
                        e.end
                      )),
                        (this.data.atHardBreak = void 0);
                      return;
                    }
                    !this.data.setextHeadingSlurpLineEnding &&
                      t.canContainEols.includes(n.type) &&
                      (c.call(this, e), u.call(this, e));
                  },
                  link: s(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  listItem: s(),
                  listOrdered: s(),
                  listUnordered: s(),
                  paragraph: s(),
                  referenceString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = (0, eA.d)(
                        this.sliceSerialize(e)
                      ).toLowerCase()),
                      (this.data.referenceType = "full");
                  },
                  resourceDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  resourceTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  resource: function () {
                    this.data.inReference = void 0;
                  },
                  setextHeading: s(function () {
                    this.data.setextHeadingSlurpLineEnding = void 0;
                  }),
                  setextHeadingLineSequence: function (e) {
                    this.stack[this.stack.length - 1].depth =
                      61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    this.data.setextHeadingSlurpLineEnding = !0;
                  },
                  strong: s(),
                  thematicBreak: s(),
                },
              };
              (function e(t, n) {
                let r = -1;
                for (; ++r < n.length; ) {
                  let i = n[r];
                  Array.isArray(i)
                    ? e(t, i)
                    : (function (e, t) {
                        let n;
                        for (n in t)
                          if (e3.call(t, n))
                            switch (n) {
                              case "canContainEols": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "transforms": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "enter":
                              case "exit": {
                                let r = t[n];
                                r && Object.assign(e[n], r);
                              }
                            }
                      })(t, i);
                }
              })(t, (e || {}).mdastExtensions || []);
              let n = {};
              return function (e) {
                let r = { type: "root", children: [] },
                  s = {
                    stack: [r],
                    tokenStack: [],
                    config: t,
                    enter: a,
                    exit: o,
                    buffer: i,
                    resume: l,
                    data: n,
                  },
                  c = [],
                  u = -1;
                for (; ++u < e.length; )
                  ("listOrdered" === e[u][1].type ||
                    "listUnordered" === e[u][1].type) &&
                    ("enter" === e[u][0]
                      ? c.push(u)
                      : (u = (function (e, t, n) {
                          let r,
                            i,
                            a,
                            s,
                            o = t - 1,
                            l = -1,
                            c = !1;
                          for (; ++o <= n; ) {
                            let t = e[o];
                            switch (t[1].type) {
                              case "listUnordered":
                              case "listOrdered":
                              case "blockQuote":
                                "enter" === t[0] ? l++ : l--, (s = void 0);
                                break;
                              case "lineEndingBlank":
                                "enter" === t[0] &&
                                  (!r || s || l || a || (a = o), (s = void 0));
                                break;
                              case "linePrefix":
                              case "listItemValue":
                              case "listItemMarker":
                              case "listItemPrefix":
                              case "listItemPrefixWhitespace":
                                break;
                              default:
                                s = void 0;
                            }
                            if (
                              (!l &&
                                "enter" === t[0] &&
                                "listItemPrefix" === t[1].type) ||
                              (-1 === l &&
                                "exit" === t[0] &&
                                ("listUnordered" === t[1].type ||
                                  "listOrdered" === t[1].type))
                            ) {
                              if (r) {
                                let s = o;
                                for (i = void 0; s--; ) {
                                  let t = e[s];
                                  if (
                                    "lineEnding" === t[1].type ||
                                    "lineEndingBlank" === t[1].type
                                  ) {
                                    if ("exit" === t[0]) continue;
                                    i &&
                                      ((e[i][1].type = "lineEndingBlank"),
                                      (c = !0)),
                                      (t[1].type = "lineEnding"),
                                      (i = s);
                                  } else if (
                                    "linePrefix" === t[1].type ||
                                    "blockQuotePrefix" === t[1].type ||
                                    "blockQuotePrefixWhitespace" ===
                                      t[1].type ||
                                    "blockQuoteMarker" === t[1].type ||
                                    "listItemIndent" === t[1].type
                                  );
                                  else break;
                                }
                                a && (!i || a < i) && (r._spread = !0),
                                  (r.end = Object.assign(
                                    {},
                                    i ? e[i][1].start : t[1].end
                                  )),
                                  e.splice(i || o, 0, ["exit", r, t[2]]),
                                  o++,
                                  n++;
                              }
                              if ("listItemPrefix" === t[1].type) {
                                let i = {
                                  type: "listItem",
                                  _spread: !1,
                                  start: Object.assign({}, t[1].start),
                                  end: void 0,
                                };
                                (r = i),
                                  e.splice(o, 0, ["enter", i, t[2]]),
                                  o++,
                                  n++,
                                  (a = void 0),
                                  (s = !0);
                              }
                            }
                          }
                          return (e[t][1]._spread = c), n;
                        })(e, c.pop(), u)));
                for (u = -1; ++u < e.length; ) {
                  let n = t[e[u][0]];
                  e3.call(n, e[u][1].type) &&
                    n[e[u][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[u][2].sliceSerialize },
                        s
                      ),
                      e[u][1]
                    );
                }
                if (s.tokenStack.length > 0) {
                  let e = s.tokenStack[s.tokenStack.length - 1];
                  (e[1] || e5).call(s, void 0, e[0]);
                }
                for (
                  r.position = {
                    start: e2(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 }
                    ),
                    end: e2(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 }
                    ),
                  },
                    u = -1;
                  ++u < t.transforms.length;

                )
                  r = t.transforms[u](r) || r;
                return r;
              };
              function r(e, t) {
                return function (n) {
                  a.call(this, e(n), n), t && t.call(this, n);
                };
              }
              function i() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function a(e, t, n) {
                this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([t, n]),
                  (e.position = { start: e2(t.start), end: void 0 });
              }
              function s(e) {
                return function (t) {
                  e && e.call(this, t), o.call(this, t);
                };
              }
              function o(e, t) {
                let n = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (r)
                  r[0].type !== e.type &&
                    (t
                      ? t.call(this, e, r[0])
                      : (r[1] || e5).call(this, e, r[0]));
                else
                  throw Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      _({ start: e.start, end: e.end }) +
                      "): it’s not open"
                  );
                n.position.end = e2(e.end);
              }
              function l() {
                return (0, G.B)(this.stack.pop());
              }
              function c(e) {
                let t = this.stack[this.stack.length - 1].children,
                  n = t[t.length - 1];
                (n && "text" === n.type) ||
                  (((n = { type: "text", value: "" }).position = {
                    start: e2(e.start),
                    end: void 0,
                  }),
                  t.push(n)),
                  this.stack.push(n);
              }
              function u(e) {
                let t = this.stack.pop();
                (t.value += this.sliceSerialize(e)),
                  (t.position.end = e2(e.end));
              }
              function h() {
                this.data.atHardBreak = !0;
              }
              function d(e) {
                this.data.characterReferenceType = e.type;
              }
              function p() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function f() {
                return { type: "heading", depth: 0, children: [] };
              }
              function E() {
                return { type: "break" };
              }
              function m() {
                return { type: "html", value: "" };
              }
              function T() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function A(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(a)(
              (function (e) {
                for (; !V(e); );
                return e;
              })(
                (function (e) {
                  let t = {
                    defined: [],
                    lazy: {},
                    constructs: (0, j.W)([r, ...((e || {}).extensions || [])]),
                    content: n(X),
                    document: n(K),
                    flow: n(et),
                    string: n(er),
                    text: n(ei),
                  };
                  return t;
                  function n(e) {
                    return function (n) {
                      return (function (e, t, n) {
                        let r = Object.assign(
                            n
                              ? Object.assign({}, n)
                              : { line: 1, column: 1, offset: 0 },
                            { _index: 0, _bufferIndex: -1 }
                          ),
                          i = {},
                          a = [],
                          s = [],
                          o = [],
                          l = {
                            consume: function (e) {
                              (0, W.Ch)(e)
                                ? (r.line++,
                                  (r.column = 1),
                                  (r.offset += -3 === e ? 2 : 1),
                                  m())
                                : -1 !== e && (r.column++, r.offset++),
                                r._bufferIndex < 0
                                  ? r._index++
                                  : (r._bufferIndex++,
                                    r._bufferIndex === s[r._index].length &&
                                      ((r._bufferIndex = -1), r._index++)),
                                (c.previous = e);
                            },
                            enter: function (e, t) {
                              let n = t || {};
                              return (
                                (n.type = e),
                                (n.start = d()),
                                c.events.push(["enter", n, c]),
                                o.push(n),
                                n
                              );
                            },
                            exit: function (e) {
                              let t = o.pop();
                              return (
                                (t.end = d()), c.events.push(["exit", t, c]), t
                              );
                            },
                            attempt: f(function (e, t) {
                              E(e, t.from);
                            }),
                            check: f(p),
                            interrupt: f(p, { interrupt: !0 }),
                          },
                          c = {
                            previous: null,
                            code: null,
                            containerState: {},
                            events: [],
                            parser: e,
                            sliceStream: h,
                            sliceSerialize: function (e, t) {
                              return (function (e, t) {
                                let n,
                                  r = -1,
                                  i = [];
                                for (; ++r < e.length; ) {
                                  let a;
                                  let s = e[r];
                                  if ("string" == typeof s) a = s;
                                  else
                                    switch (s) {
                                      case -5:
                                        a = "\r";
                                        break;
                                      case -4:
                                        a = "\n";
                                        break;
                                      case -3:
                                        a = "\r\n";
                                        break;
                                      case -2:
                                        a = t ? " " : "	";
                                        break;
                                      case -1:
                                        if (!t && n) continue;
                                        a = " ";
                                        break;
                                      default:
                                        a = String.fromCharCode(s);
                                    }
                                  (n = -2 === s), i.push(a);
                                }
                                return i.join("");
                              })(h(e), t);
                            },
                            now: d,
                            defineSkip: function (e) {
                              (i[e.line] = e.column), m();
                            },
                            write: function (e) {
                              return ((s = (0, Y.V)(s, e)),
                              (function () {
                                let e;
                                for (; r._index < s.length; ) {
                                  let n = s[r._index];
                                  if ("string" == typeof n)
                                    for (
                                      e = r._index,
                                        r._bufferIndex < 0 &&
                                          (r._bufferIndex = 0);
                                      r._index === e &&
                                      r._bufferIndex < n.length;

                                    ) {
                                      var t;
                                      (t = n.charCodeAt(r._bufferIndex)),
                                        (u = u(t));
                                    }
                                  else u = u(n);
                                }
                              })(),
                              null !== s[s.length - 1])
                                ? []
                                : (E(t, 0),
                                  (c.events = (0, el.C)(a, c.events, c)),
                                  c.events);
                            },
                          },
                          u = t.tokenize.call(c, l);
                        return t.resolveAll && a.push(t), c;
                        function h(e) {
                          return (function (e, t) {
                            let n;
                            let r = t.start._index,
                              i = t.start._bufferIndex,
                              a = t.end._index,
                              s = t.end._bufferIndex;
                            if (r === a) n = [e[r].slice(i, s)];
                            else {
                              if (((n = e.slice(r, a)), i > -1)) {
                                let e = n[0];
                                "string" == typeof e
                                  ? (n[0] = e.slice(i))
                                  : n.shift();
                              }
                              s > 0 && n.push(e[a].slice(0, s));
                            }
                            return n;
                          })(s, e);
                        }
                        function d() {
                          let {
                            line: e,
                            column: t,
                            offset: n,
                            _index: i,
                            _bufferIndex: a,
                          } = r;
                          return {
                            line: e,
                            column: t,
                            offset: n,
                            _index: i,
                            _bufferIndex: a,
                          };
                        }
                        function p(e, t) {
                          t.restore();
                        }
                        function f(e, t) {
                          return function (n, i, a) {
                            let s, u, h, p;
                            return Array.isArray(n)
                              ? f(n)
                              : "tokenize" in n
                              ? f([n])
                              : function (e) {
                                  let t = null !== e && n[e],
                                    r = null !== e && n.null;
                                  return f([
                                    ...(Array.isArray(t) ? t : t ? [t] : []),
                                    ...(Array.isArray(r) ? r : r ? [r] : []),
                                  ])(e);
                                };
                            function f(e) {
                              return ((s = e), (u = 0), 0 === e.length)
                                ? a
                                : E(e[u]);
                            }
                            function E(e) {
                              return function (n) {
                                return ((p = (function () {
                                  let e = d(),
                                    t = c.previous,
                                    n = c.currentConstruct,
                                    i = c.events.length,
                                    a = Array.from(o);
                                  return {
                                    restore: function () {
                                      (r = e),
                                        (c.previous = t),
                                        (c.currentConstruct = n),
                                        (c.events.length = i),
                                        (o = a),
                                        m();
                                    },
                                    from: i,
                                  };
                                })()),
                                (h = e),
                                e.partial || (c.currentConstruct = e),
                                e.name &&
                                  c.parser.constructs.disable.null.includes(
                                    e.name
                                  ))
                                  ? A(n)
                                  : e.tokenize.call(
                                      t
                                        ? Object.assign(Object.create(c), t)
                                        : c,
                                      l,
                                      T,
                                      A
                                    )(n);
                              };
                            }
                            function T(t) {
                              return e(h, p), i;
                            }
                            function A(e) {
                              return (p.restore(), ++u < s.length)
                                ? E(s[u])
                                : a;
                            }
                          };
                        }
                        function E(e, t) {
                          e.resolveAll && !a.includes(e) && a.push(e),
                            e.resolve &&
                              (0, Y.d)(
                                c.events,
                                t,
                                c.events.length - t,
                                e.resolve(c.events.slice(t), c)
                              ),
                            e.resolveTo &&
                              (c.events = e.resolveTo(c.events, c));
                        }
                        function m() {
                          r.line in i &&
                            r.column < 2 &&
                            ((r.column = i[r.line]),
                            (r.offset += i[r.line] - 1));
                        }
                      })(t, e, n);
                    };
                  }
                })(a)
                  .document()
                  .write(
                    ((o = 1),
                    (l = ""),
                    (c = !0),
                    function (e, t, n) {
                      let r, i, a, u, h;
                      let d = [];
                      for (
                        e =
                          l +
                          ("string" == typeof e
                            ? e.toString()
                            : new TextDecoder(t || void 0).decode(e)),
                          a = 0,
                          l = "",
                          c && (65279 === e.charCodeAt(0) && a++, (c = void 0));
                        a < e.length;

                      ) {
                        if (
                          ((eZ.lastIndex = a),
                          (u =
                            (r = eZ.exec(e)) && void 0 !== r.index
                              ? r.index
                              : e.length),
                          (h = e.charCodeAt(u)),
                          !r)
                        ) {
                          l = e.slice(a);
                          break;
                        }
                        if (10 === h && a === u && s) d.push(-3), (s = void 0);
                        else
                          switch (
                            (s && (d.push(-5), (s = void 0)),
                            a < u && (d.push(e.slice(a, u)), (o += u - a)),
                            h)
                          ) {
                            case 0:
                              d.push(65533), o++;
                              break;
                            case 9:
                              for (
                                i = 4 * Math.ceil(o / 4), d.push(-2);
                                o++ < i;

                              )
                                d.push(-1);
                              break;
                            case 10:
                              d.push(-4), (o = 1);
                              break;
                            default:
                              (s = !0), (o = 1);
                          }
                        a = u + 1;
                      }
                      return (
                        n && (s && d.push(-5), l && d.push(l), d.push(null)), d
                      );
                    })(n, i, !0)
                  )
              )
            )
          );
        };
      }
      var e8 = n(52835);
      function e9(e) {
        let t = [],
          n = -1,
          r = 0,
          i = 0;
        for (; ++n < e.length; ) {
          let a = e.charCodeAt(n),
            s = "";
          if (
            37 === a &&
            (0, W.H$)(e.charCodeAt(n + 1)) &&
            (0, W.H$)(e.charCodeAt(n + 2))
          )
            i = 2;
          else if (a < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) ||
              (s = String.fromCharCode(a));
          else if (a > 55295 && a < 57344) {
            let t = e.charCodeAt(n + 1);
            a < 56320 && t > 56319 && t < 57344
              ? ((s = String.fromCharCode(a, t)), (i = 1))
              : (s = "�");
          } else s = String.fromCharCode(a);
          s &&
            (t.push(e.slice(r, n), encodeURIComponent(s)),
            (r = n + i + 1),
            (s = "")),
            i && ((n += i), (i = 0));
        }
        return t.join("") + e.slice(r);
      }
      function e6(e, t) {
        let n = [{ type: "text", value: "↩" }];
        return (
          t > 1 &&
            n.push({
              type: "element",
              tagName: "sup",
              properties: {},
              children: [{ type: "text", value: String(t) }],
            }),
          n
        );
      }
      function e7(e, t) {
        return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
      }
      var te = n(21623);
      function tt(e, t) {
        let n = t.referenceType,
          r = "]";
        if (
          ("collapsed" === n
            ? (r += "[]")
            : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
          "imageReference" === t.type)
        )
          return [{ type: "text", value: "![" + t.alt + r }];
        let i = e.all(t),
          a = i[0];
        a && "text" === a.type
          ? (a.value = "[" + a.value)
          : i.unshift({ type: "text", value: "[" });
        let s = i[i.length - 1];
        return (
          s && "text" === s.type
            ? (s.value += r)
            : i.push({ type: "text", value: r }),
          i
        );
      }
      function tn(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      function tr(e, t, n) {
        let r = 0,
          i = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
        }
        if (n) {
          let t = e.codePointAt(i - 1);
          for (; 9 === t || 32 === t; ) i--, (t = e.codePointAt(i - 1));
        }
        return i > r ? e.slice(r, i) : "";
      }
      let ti = {
        blockquote: function (e, t) {
          let n = {
            type: "element",
            tagName: "blockquote",
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        break: function (e, t) {
          let n = {
            type: "element",
            tagName: "br",
            properties: {},
            children: [],
          };
          return (
            e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }]
          );
        },
        code: function (e, t) {
          let n = t.value ? t.value + "\n" : "",
            r = {};
          t.lang && (r.className = ["language-" + t.lang]);
          let i = {
            type: "element",
            tagName: "code",
            properties: r,
            children: [{ type: "text", value: n }],
          };
          return (
            t.meta && (i.data = { meta: t.meta }),
            e.patch(t, i),
            (i = {
              type: "element",
              tagName: "pre",
              properties: {},
              children: [(i = e.applyData(t, i))],
            }),
            e.patch(t, i),
            i
          );
        },
        delete: function (e, t) {
          let n = {
            type: "element",
            tagName: "del",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        emphasis: function (e, t) {
          let n = {
            type: "element",
            tagName: "em",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        footnoteReference: function (e, t) {
          let n;
          let r =
              "string" == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : "user-content-",
            i = String(t.identifier).toUpperCase(),
            a = e9(i.toLowerCase()),
            s = e.footnoteOrder.indexOf(i),
            o = e.footnoteCounts.get(i);
          void 0 === o
            ? ((o = 0), e.footnoteOrder.push(i), (n = e.footnoteOrder.length))
            : (n = s + 1),
            (o += 1),
            e.footnoteCounts.set(i, o);
          let l = {
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + r + "fn-" + a,
              id: r + "fnref-" + a + (o > 1 ? "-" + o : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: ["footnote-label"],
            },
            children: [{ type: "text", value: String(n) }],
          };
          e.patch(t, l);
          let c = {
            type: "element",
            tagName: "sup",
            properties: {},
            children: [l],
          };
          return e.patch(t, c), e.applyData(t, c);
        },
        heading: function (e, t) {
          let n = {
            type: "element",
            tagName: "h" + t.depth,
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        html: function (e, t) {
          if (e.options.allowDangerousHtml) {
            let n = { type: "raw", value: t.value };
            return e.patch(t, n), e.applyData(t, n);
          }
        },
        imageReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return tt(e, t);
          let i = { src: e9(r.url || ""), alt: t.alt };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let a = {
            type: "element",
            tagName: "img",
            properties: i,
            children: [],
          };
          return e.patch(t, a), e.applyData(t, a);
        },
        image: function (e, t) {
          let n = { src: e9(t.url) };
          null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "img",
            properties: n,
            children: [],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        inlineCode: function (e, t) {
          let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
          e.patch(t, n);
          let r = {
            type: "element",
            tagName: "code",
            properties: {},
            children: [n],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        linkReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return tt(e, t);
          let i = { href: e9(r.url || "") };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let a = {
            type: "element",
            tagName: "a",
            properties: i,
            children: e.all(t),
          };
          return e.patch(t, a), e.applyData(t, a);
        },
        link: function (e, t) {
          let n = { href: e9(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "a",
            properties: n,
            children: e.all(t),
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        listItem: function (e, t, n) {
          let r = e.all(t),
            i = n
              ? (function (e) {
                  let t = !1;
                  if ("list" === e.type) {
                    t = e.spread || !1;
                    let n = e.children,
                      r = -1;
                    for (; !t && ++r < n.length; ) t = tn(n[r]);
                  }
                  return t;
                })(n)
              : tn(t),
            a = {},
            s = [];
          if ("boolean" == typeof t.checked) {
            let e;
            let n = r[0];
            n && "element" === n.type && "p" === n.tagName
              ? (e = n)
              : ((e = {
                  type: "element",
                  tagName: "p",
                  properties: {},
                  children: [],
                }),
                r.unshift(e)),
              e.children.length > 0 &&
                e.children.unshift({ type: "text", value: " " }),
              e.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                  type: "checkbox",
                  checked: t.checked,
                  disabled: !0,
                },
                children: [],
              }),
              (a.className = ["task-list-item"]);
          }
          let o = -1;
          for (; ++o < r.length; ) {
            let e = r[o];
            (i || 0 !== o || "element" !== e.type || "p" !== e.tagName) &&
              s.push({ type: "text", value: "\n" }),
              "element" !== e.type || "p" !== e.tagName || i
                ? s.push(e)
                : s.push(...e.children);
          }
          let l = r[r.length - 1];
          l &&
            (i || "element" !== l.type || "p" !== l.tagName) &&
            s.push({ type: "text", value: "\n" });
          let c = {
            type: "element",
            tagName: "li",
            properties: a,
            children: s,
          };
          return e.patch(t, c), e.applyData(t, c);
        },
        list: function (e, t) {
          let n = {},
            r = e.all(t),
            i = -1;
          for (
            "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++i < r.length;

          ) {
            let e = r[i];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              n.className = ["contains-task-list"];
              break;
            }
          }
          let a = {
            type: "element",
            tagName: t.ordered ? "ol" : "ul",
            properties: n,
            children: e.wrap(r, !0),
          };
          return e.patch(t, a), e.applyData(t, a);
        },
        paragraph: function (e, t) {
          let n = {
            type: "element",
            tagName: "p",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        root: function (e, t) {
          let n = { type: "root", children: e.wrap(e.all(t)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        strong: function (e, t) {
          let n = {
            type: "element",
            tagName: "strong",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        table: function (e, t) {
          let n = e.all(t),
            r = n.shift(),
            i = [];
          if (r) {
            let n = {
              type: "element",
              tagName: "thead",
              properties: {},
              children: e.wrap([r], !0),
            };
            e.patch(t.children[0], n), i.push(n);
          }
          if (n.length > 0) {
            let r = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0),
              },
              a = (0, A.Pk)(t.children[1]),
              s = (0, A.rb)(t.children[t.children.length - 1]);
            a && s && (r.position = { start: a, end: s }), i.push(r);
          }
          let a = {
            type: "element",
            tagName: "table",
            properties: {},
            children: e.wrap(i, !0),
          };
          return e.patch(t, a), e.applyData(t, a);
        },
        tableCell: function (e, t) {
          let n = {
            type: "element",
            tagName: "td",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        tableRow: function (e, t, n) {
          let r = n ? n.children : void 0,
            i = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
            a = n && "table" === n.type ? n.align : void 0,
            s = a ? a.length : t.children.length,
            o = -1,
            l = [];
          for (; ++o < s; ) {
            let n = t.children[o],
              r = {},
              s = a ? a[o] : void 0;
            s && (r.align = s);
            let c = {
              type: "element",
              tagName: i,
              properties: r,
              children: [],
            };
            n &&
              ((c.children = e.all(n)), e.patch(n, c), (c = e.applyData(n, c))),
              l.push(c);
          }
          let c = {
            type: "element",
            tagName: "tr",
            properties: {},
            children: e.wrap(l, !0),
          };
          return e.patch(t, c), e.applyData(t, c);
        },
        text: function (e, t) {
          let n = {
            type: "text",
            value: (function (e) {
              let t = String(e),
                n = /\r?\n|\r/g,
                r = n.exec(t),
                i = 0,
                a = [];
              for (; r; )
                a.push(tr(t.slice(i, r.index), i > 0, !0), r[0]),
                  (i = r.index + r[0].length),
                  (r = n.exec(t));
              return a.push(tr(t.slice(i), i > 0, !1)), a.join("");
            })(String(t.value)),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        thematicBreak: function (e, t) {
          let n = {
            type: "element",
            tagName: "hr",
            properties: {},
            children: [],
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        toml: ta,
        yaml: ta,
        definition: ta,
        footnoteDefinition: ta,
      };
      function ta() {}
      let ts = {}.hasOwnProperty,
        to = {};
      function tl(e, t) {
        e.position && (t.position = (0, A.FK)(e));
      }
      function tc(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName,
            r = e.data.hChildren,
            i = e.data.hProperties;
          "string" == typeof t &&
            ("element" === n.type
              ? (n.tagName = t)
              : (n = {
                  type: "element",
                  tagName: t,
                  properties: {},
                  children: "children" in n ? n.children : [n],
                })),
            "element" === n.type &&
              i &&
              Object.assign(n.properties, (0, e8.ZP)(i)),
            "children" in n && n.children && null != r && (n.children = r);
        }
        return n;
      }
      function tu(e, t) {
        let n = [],
          r = -1;
        for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
          r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
        return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
      }
      function th(e) {
        let t = 0,
          n = e.charCodeAt(t);
        for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
        return e.slice(t);
      }
      function td(e, t) {
        let n = (function (e, t) {
            let n = t || to,
              r = new Map(),
              i = new Map(),
              a = {
                all: function (e) {
                  let t = [];
                  if ("children" in e) {
                    let n = e.children,
                      r = -1;
                    for (; ++r < n.length; ) {
                      let i = a.one(n[r], e);
                      if (i) {
                        if (
                          r &&
                          "break" === n[r - 1].type &&
                          (Array.isArray(i) ||
                            "text" !== i.type ||
                            (i.value = th(i.value)),
                          !Array.isArray(i) && "element" === i.type)
                        ) {
                          let e = i.children[0];
                          e && "text" === e.type && (e.value = th(e.value));
                        }
                        Array.isArray(i) ? t.push(...i) : t.push(i);
                      }
                    }
                  }
                  return t;
                },
                applyData: tc,
                definitionById: r,
                footnoteById: i,
                footnoteCounts: new Map(),
                footnoteOrder: [],
                handlers: { ...ti, ...n.handlers },
                one: function (e, t) {
                  let n = e.type,
                    r = a.handlers[n];
                  if (ts.call(a.handlers, n) && r) return r(a, e, t);
                  if (
                    a.options.passThrough &&
                    a.options.passThrough.includes(n)
                  ) {
                    if ("children" in e) {
                      let { children: t, ...n } = e,
                        r = (0, e8.ZP)(n);
                      return (r.children = a.all(e)), r;
                    }
                    return (0, e8.ZP)(e);
                  }
                  return (
                    a.options.unknownHandler ||
                    function (e, t) {
                      let n = t.data || {},
                        r =
                          "value" in t &&
                          !(
                            ts.call(n, "hProperties") || ts.call(n, "hChildren")
                          )
                            ? { type: "text", value: t.value }
                            : {
                                type: "element",
                                tagName: "div",
                                properties: {},
                                children: e.all(t),
                              };
                      return e.patch(t, r), e.applyData(t, r);
                    }
                  )(a, e, t);
                },
                options: n,
                patch: tl,
                wrap: tu,
              };
            return (
              (0, te.Vn)(e, function (e) {
                if (
                  "definition" === e.type ||
                  "footnoteDefinition" === e.type
                ) {
                  let t = "definition" === e.type ? r : i,
                    n = String(e.identifier).toUpperCase();
                  t.has(n) || t.set(n, e);
                }
              }),
              a
            );
          })(e, t),
          r = n.one(e, void 0),
          a = (function (e) {
            let t =
                "string" == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : "user-content-",
              n = e.options.footnoteBackContent || e6,
              r = e.options.footnoteBackLabel || e7,
              i = e.options.footnoteLabel || "Footnotes",
              a = e.options.footnoteLabelTagName || "h2",
              s = e.options.footnoteLabelProperties || {
                className: ["sr-only"],
              },
              o = [],
              l = -1;
            for (; ++l < e.footnoteOrder.length; ) {
              let i = e.footnoteById.get(e.footnoteOrder[l]);
              if (!i) continue;
              let a = e.all(i),
                s = String(i.identifier).toUpperCase(),
                c = e9(s.toLowerCase()),
                u = 0,
                h = [],
                d = e.footnoteCounts.get(s);
              for (; void 0 !== d && ++u <= d; ) {
                h.length > 0 && h.push({ type: "text", value: " " });
                let e = "string" == typeof n ? n : n(l, u);
                "string" == typeof e && (e = { type: "text", value: e }),
                  h.push({
                    type: "element",
                    tagName: "a",
                    properties: {
                      href: "#" + t + "fnref-" + c + (u > 1 ? "-" + u : ""),
                      dataFootnoteBackref: "",
                      ariaLabel: "string" == typeof r ? r : r(l, u),
                      className: ["data-footnote-backref"],
                    },
                    children: Array.isArray(e) ? e : [e],
                  });
              }
              let p = a[a.length - 1];
              if (p && "element" === p.type && "p" === p.tagName) {
                let e = p.children[p.children.length - 1];
                e && "text" === e.type
                  ? (e.value += " ")
                  : p.children.push({ type: "text", value: " " }),
                  p.children.push(...h);
              } else a.push(...h);
              let f = {
                type: "element",
                tagName: "li",
                properties: { id: t + "fn-" + c },
                children: e.wrap(a, !0),
              };
              e.patch(i, f), o.push(f);
            }
            if (0 !== o.length)
              return {
                type: "element",
                tagName: "section",
                properties: { dataFootnotes: !0, className: ["footnotes"] },
                children: [
                  {
                    type: "element",
                    tagName: a,
                    properties: { ...(0, e8.ZP)(s), id: "footnote-label" },
                    children: [{ type: "text", value: i }],
                  },
                  { type: "text", value: "\n" },
                  {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(o, !0),
                  },
                  { type: "text", value: "\n" },
                ],
              };
          })(n),
          s = Array.isArray(r)
            ? { type: "root", children: r }
            : r || { type: "root", children: [] };
        return (
          a &&
            ((0, i.ok)("children" in s),
            s.children.push({ type: "text", value: "\n" }, a)),
          s
        );
      }
      function tp(e, t) {
        return e && "run" in e
          ? async function (n, r) {
              let i = td(n, { file: r, ...t });
              await e.run(i, r);
            }
          : function (n, r) {
              return td(n, { file: r, ...(t || e) });
            };
      }
      function tf(e) {
        if (e) throw e;
      }
      var tE = n(94470);
      function tm(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      let tT = {
        basename: function (e, t) {
          let n;
          if (void 0 !== t && "string" != typeof t)
            throw TypeError('"ext" argument must be a string');
          tA(e);
          let r = 0,
            i = -1,
            a = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; a--; )
              if (47 === e.codePointAt(a)) {
                if (n) {
                  r = a + 1;
                  break;
                }
              } else i < 0 && ((n = !0), (i = a + 1));
            return i < 0 ? "" : e.slice(r, i);
          }
          if (t === e) return "";
          let s = -1,
            o = t.length - 1;
          for (; a--; )
            if (47 === e.codePointAt(a)) {
              if (n) {
                r = a + 1;
                break;
              }
            } else
              s < 0 && ((n = !0), (s = a + 1)),
                o > -1 &&
                  (e.codePointAt(a) === t.codePointAt(o--)
                    ? o < 0 && (i = a)
                    : ((o = -1), (i = s)));
          return r === i ? (i = s) : i < 0 && (i = e.length), e.slice(r, i);
        },
        dirname: function (e) {
          let t;
          if ((tA(e), 0 === e.length)) return ".";
          let n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.codePointAt(0)
              ? "/"
              : "."
            : 1 === n && 47 === e.codePointAt(0)
            ? "//"
            : e.slice(0, n);
        },
        extname: function (e) {
          let t;
          tA(e);
          let n = e.length,
            r = -1,
            i = 0,
            a = -1,
            s = 0;
          for (; n--; ) {
            let o = e.codePointAt(n);
            if (47 === o) {
              if (t) {
                i = n + 1;
                break;
              }
              continue;
            }
            r < 0 && ((t = !0), (r = n + 1)),
              46 === o
                ? a < 0
                  ? (a = n)
                  : 1 !== s && (s = 1)
                : a > -1 && (s = -1);
          }
          return a < 0 ||
            r < 0 ||
            0 === s ||
            (1 === s && a === r - 1 && a === i + 1)
            ? ""
            : e.slice(a, r);
        },
        join: function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; )
            tA(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
          return void 0 === t
            ? "."
            : (function (e) {
                tA(e);
                let t = 47 === e.codePointAt(0),
                  n = (function (e, t) {
                    let n,
                      r,
                      i = "",
                      a = 0,
                      s = -1,
                      o = 0,
                      l = -1;
                    for (; ++l <= e.length; ) {
                      if (l < e.length) n = e.codePointAt(l);
                      else if (47 === n) break;
                      else n = 47;
                      if (47 === n) {
                        if (s === l - 1 || 1 === o);
                        else if (s !== l - 1 && 2 === o) {
                          if (
                            i.length < 2 ||
                            2 !== a ||
                            46 !== i.codePointAt(i.length - 1) ||
                            46 !== i.codePointAt(i.length - 2)
                          ) {
                            if (i.length > 2) {
                              if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                r < 0
                                  ? ((i = ""), (a = 0))
                                  : (a =
                                      (i = i.slice(0, r)).length -
                                      1 -
                                      i.lastIndexOf("/")),
                                  (s = l),
                                  (o = 0);
                                continue;
                              }
                            } else if (i.length > 0) {
                              (i = ""), (a = 0), (s = l), (o = 0);
                              continue;
                            }
                          }
                          t && ((i = i.length > 0 ? i + "/.." : ".."), (a = 2));
                        } else
                          i.length > 0
                            ? (i += "/" + e.slice(s + 1, l))
                            : (i = e.slice(s + 1, l)),
                            (a = l - s - 1);
                        (s = l), (o = 0);
                      } else 46 === n && o > -1 ? o++ : (o = -1);
                    }
                    return i;
                  })(e, !t);
                return (
                  0 !== n.length || t || (n = "."),
                  n.length > 0 &&
                    47 === e.codePointAt(e.length - 1) &&
                    (n += "/"),
                  t ? "/" + n : n
                );
              })(t);
        },
        sep: "/",
      };
      function tA(e) {
        if ("string" != typeof e)
          throw TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      function t_(e) {
        return !!(
          null !== e &&
          "object" == typeof e &&
          "href" in e &&
          e.href &&
          "protocol" in e &&
          e.protocol &&
          void 0 === e.auth
        );
      }
      let tg = ["history", "path", "basename", "stem", "extname", "dirname"];
      class tC {
        constructor(e) {
          let t, n;
          (t = e
            ? t_(e)
              ? { path: e }
              : "string" == typeof e ||
                (e &&
                  "object" == typeof e &&
                  "byteLength" in e &&
                  "byteOffset" in e)
              ? { value: e }
              : e
            : {}),
            (this.cwd = "/"),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
          let r = -1;
          for (; ++r < tg.length; ) {
            let e = tg[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = "history" === e ? [...t[e]] : t[e]);
          }
          for (n in t) tg.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return "string" == typeof this.path ? tT.basename(this.path) : void 0;
        }
        set basename(e) {
          tN(e, "basename"),
            tI(e, "basename"),
            (this.path = tT.join(this.dirname || "", e));
        }
        get dirname() {
          return "string" == typeof this.path ? tT.dirname(this.path) : void 0;
        }
        set dirname(e) {
          tS(this.basename, "dirname"),
            (this.path = tT.join(e || "", this.basename));
        }
        get extname() {
          return "string" == typeof this.path ? tT.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((tI(e, "extname"), tS(this.dirname, "extname"), e)) {
            if (46 !== e.codePointAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots");
          }
          this.path = tT.join(this.dirname, this.stem + (e || ""));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          t_(e) &&
            (e = (function (e) {
              if ("string" == typeof e) e = new URL(e);
              else if (!t_(e)) {
                let t = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    "`"
                );
                throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
              }
              if ("file:" !== e.protocol) {
                let e = TypeError("The URL must be of scheme file");
                throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
              }
              return (function (e) {
                if ("" !== e.hostname) {
                  let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin'
                  );
                  throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
                }
                let t = e.pathname,
                  n = -1;
                for (; ++n < t.length; )
                  if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                    let e = t.codePointAt(n + 2);
                    if (70 === e || 102 === e) {
                      let e = TypeError(
                        "File URL path must not include encoded / characters"
                      );
                      throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                    }
                  }
                return decodeURIComponent(t);
              })(e);
            })(e)),
            tN(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get stem() {
          return "string" == typeof this.path
            ? tT.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          tN(e, "stem"),
            tI(e, "stem"),
            (this.path = tT.join(this.dirname || "", e + (this.extname || "")));
        }
        fail(e, t, n) {
          let r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          let r = this.message(e, t, n);
          return (r.fatal = void 0), r;
        }
        message(e, t, n) {
          let r = new N(e, t, n);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          return void 0 === this.value
            ? ""
            : "string" == typeof this.value
            ? this.value
            : new TextDecoder(e || void 0).decode(this.value);
        }
      }
      function tI(e, t) {
        if (e && e.includes(tT.sep))
          throw Error(
            "`" + t + "` cannot be a path: did not expect `" + tT.sep + "`"
          );
      }
      function tN(e, t) {
        if (!e) throw Error("`" + t + "` cannot be empty");
      }
      function tS(e, t) {
        if (!e)
          throw Error("Setting `" + t + "` requires `path` to be set too");
      }
      let tk = function (e) {
          let t = this.constructor.prototype,
            n = t[e],
            r = function () {
              return n.apply(r, arguments);
            };
          return Object.setPrototypeOf(r, t), r;
        },
        tD = {}.hasOwnProperty;
      class tR extends tk {
        constructor() {
          super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (function () {
              let e = [],
                t = {
                  run: function (...t) {
                    let n = -1,
                      r = t.pop();
                    if ("function" != typeof r)
                      throw TypeError(
                        "Expected function as last argument, not " + r
                      );
                    (function i(a, ...s) {
                      let o = e[++n],
                        l = -1;
                      if (a) {
                        r(a);
                        return;
                      }
                      for (; ++l < t.length; )
                        (null === s[l] || void 0 === s[l]) && (s[l] = t[l]);
                      (t = s),
                        o
                          ? (function (e, t) {
                              let n;
                              return function (...t) {
                                let a;
                                let s = e.length > t.length;
                                s && t.push(r);
                                try {
                                  a = e.apply(this, t);
                                } catch (e) {
                                  if (s && n) throw e;
                                  return r(e);
                                }
                                s ||
                                  (a && a.then && "function" == typeof a.then
                                    ? a.then(i, r)
                                    : a instanceof Error
                                    ? r(a)
                                    : i(a));
                              };
                              function r(e, ...i) {
                                n || ((n = !0), t(e, ...i));
                              }
                              function i(e) {
                                r(null, e);
                              }
                            })(
                              o,
                              i
                            )(...s)
                          : r(null, ...s);
                    })(null, ...t);
                  },
                  use: function (n) {
                    if ("function" != typeof n)
                      throw TypeError(
                        "Expected `middelware` to be a function, not " + n
                      );
                    return e.push(n), t;
                  },
                };
              return t;
            })());
        }
        copy() {
          let e = new tR(),
            t = -1;
          for (; ++t < this.attachers.length; ) {
            let n = this.attachers[t];
            e.use(...n);
          }
          return e.data(tE(!0, {}, this.namespace)), e;
        }
        data(e, t) {
          return "string" == typeof e
            ? 2 == arguments.length
              ? (ty("data", this.frozen), (this.namespace[e] = t), this)
              : (tD.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
            ? (ty("data", this.frozen), (this.namespace = e), this)
            : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0]) continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            "function" == typeof n && this.transformers.use(n);
          }
          return (
            (this.frozen = !0),
            (this.freezeIndex = Number.POSITIVE_INFINITY),
            this
          );
        }
        parse(e) {
          this.freeze();
          let t = tx(e),
            n = this.parser || this.Parser;
          return tO("parse", n), n(String(t), t);
        }
        process(e, t) {
          let n = this;
          return (
            this.freeze(),
            tO("process", this.parser || this.Parser),
            tL("process", this.compiler || this.Compiler),
            t ? r(void 0, t) : new Promise(r)
          );
          function r(r, a) {
            let s = tx(e),
              o = n.parse(s);
            function l(e, n) {
              e || !n
                ? a(e)
                : r
                ? r(n)
                : ((0, i.ok)(t, "`done` is defined if `resolve` is not"),
                  t(void 0, n));
            }
            n.run(o, s, function (e, t, r) {
              if (e || !t || !r) return l(e);
              let i = n.stringify(t, r);
              "string" == typeof i ||
              (i &&
                "object" == typeof i &&
                "byteLength" in i &&
                "byteOffset" in i)
                ? (r.value = i)
                : (r.result = i),
                l(e, r);
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            tO("processSync", this.parser || this.Parser),
            tL("processSync", this.compiler || this.Compiler),
            this.process(e, function (e, r) {
              (n = !0), tf(e), (t = r);
            }),
            tM("processSync", "process", n),
            (0, i.ok)(t, "we either bailed on an error or have a tree"),
            t
          );
        }
        run(e, t, n) {
          tP(e), this.freeze();
          let r = this.transformers;
          return (
            n || "function" != typeof t || ((n = t), (t = void 0)),
            n ? a(void 0, n) : new Promise(a)
          );
          function a(a, s) {
            (0, i.ok)(
              "function" != typeof t,
              "`file` can’t be a `done` anymore, we checked"
            );
            let o = tx(t);
            r.run(e, o, function (t, r, o) {
              let l = r || e;
              t
                ? s(t)
                : a
                ? a(l)
                : ((0, i.ok)(n, "`done` is defined if `resolve` is not"),
                  n(void 0, l, o));
            });
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, function (e, t) {
              tf(e), (n = t), (r = !0);
            }),
            tM("runSync", "run", r),
            (0, i.ok)(n, "we either bailed on an error or have a tree"),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          let n = tx(t),
            r = this.compiler || this.Compiler;
          return tL("stringify", r), tP(e), r(e, n);
        }
        use(e, ...t) {
          let n = this.attachers,
            r = this.namespace;
          if ((ty("use", this.frozen), null == e));
          else if ("function" == typeof e) s(e, t);
          else if ("object" == typeof e) Array.isArray(e) ? a(e) : i(e);
          else throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function i(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
              );
            a(e.plugins),
              e.settings && (r.settings = tE(!0, r.settings, e.settings));
          }
          function a(e) {
            let t = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++t < e.length; )
                !(function (e) {
                  if ("function" == typeof e) s(e, []);
                  else if ("object" == typeof e) {
                    if (Array.isArray(e)) {
                      let [t, ...n] = e;
                      s(t, n);
                    } else i(e);
                  } else
                    throw TypeError("Expected usable value, not `" + e + "`");
                })(e[t]);
            else throw TypeError("Expected a list of plugins, not `" + e + "`");
          }
          function s(e, t) {
            let r = -1,
              i = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                i = r;
                break;
              }
            if (-1 === i) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...a] = t,
                s = n[i][1];
              tm(s) && tm(r) && (r = tE(!0, s, r)), (n[i] = [e, r, ...a]);
            }
          }
        }
      }
      let tb = new tR().freeze();
      function tO(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `parser`");
      }
      function tL(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `compiler`");
      }
      function ty(e, t) {
        if (t)
          throw Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function tP(e) {
        if (!tm(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`");
      }
      function tM(e, t, n) {
        if (!n)
          throw Error("`" + e + "` finished async. Use `" + t + "` instead");
      }
      function tx(e) {
        return e && "object" == typeof e && "message" in e && "messages" in e
          ? e
          : new tC(e);
      }
      let tv = [],
        tF = { allowDangerousHtml: !0 },
        tB = /^(https?|ircs?|mailto|xmpp)$/i,
        tH = [
          { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
          {
            from: "allowDangerousHtml",
            id: "remove-buggy-html-in-markdown-parser",
          },
          {
            from: "allowNode",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowElement",
          },
          {
            from: "allowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowedElements",
          },
          {
            from: "disallowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "disallowedElements",
          },
          { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
          { from: "includeElementIndex", id: "#remove-includeelementindex" },
          {
            from: "includeNodeIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
          { from: "linkTarget", id: "remove-linktarget" },
          {
            from: "plugins",
            id: "change-plugins-to-remarkplugins",
            to: "remarkPlugins",
          },
          { from: "rawSourcePos", id: "#remove-rawsourcepos" },
          {
            from: "renderers",
            id: "change-renderers-to-components",
            to: "components",
          },
          { from: "source", id: "change-source-to-children", to: "children" },
          { from: "sourcePos", id: "#remove-sourcepos" },
          {
            from: "transformImageUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
          {
            from: "transformLinkUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
        ];
      function tw(e) {
        let t = e.allowedElements,
          n = e.allowElement,
          r = e.children || "",
          a = e.className,
          s = e.components,
          o = e.disallowedElements,
          l = e.rehypePlugins || tv,
          c = e.remarkPlugins || tv,
          u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...tF } : tF,
          h = e.skipHtml,
          p = e.unwrapDisallowed,
          f = e.urlTransform || tU,
          E = tb().use(e4).use(c).use(tp, u).use(l),
          m = new tC();
        for (let n of ("string" == typeof r
          ? (m.value = r)
          : (0, i.t1)(
              "Unexpected value `" +
                r +
                "` for `children` prop, expected `string`"
            ),
        t &&
          o &&
          (0, i.t1)(
            "Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other"
          ),
        tH))
          Object.hasOwn(e, n.from) &&
            (0, i.t1)(
              "Unexpected `" +
                n.from +
                "` prop, " +
                (n.to ? "use `" + n.to + "` instead" : "remove it") +
                " (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#" +
                n.id +
                "> for more info)"
            );
        let T = E.parse(m),
          _ = E.runSync(T, m);
        return (
          a &&
            (_ = {
              type: "element",
              tagName: "div",
              properties: { className: a },
              children: "root" === _.type ? _.children : [_],
            }),
          (0, te.Vn)(_, function (e, r, i) {
            if ("raw" === e.type && i && "number" == typeof r)
              return (
                h
                  ? i.children.splice(r, 1)
                  : (i.children[r] = { type: "text", value: e.value }),
                r
              );
            if ("element" === e.type) {
              let t;
              for (t in w)
                if (Object.hasOwn(w, t) && Object.hasOwn(e.properties, t)) {
                  let n = e.properties[t],
                    r = w[t];
                  (null === r || r.includes(e.tagName)) &&
                    (e.properties[t] = f(String(n || ""), t, e));
                }
            }
            if ("element" === e.type) {
              let a = t ? !t.includes(e.tagName) : !!o && o.includes(e.tagName);
              if (
                (!a && n && "number" == typeof r && (a = !n(e, r, i)),
                a && i && "number" == typeof r)
              )
                return (
                  p && e.children
                    ? i.children.splice(r, 1, ...e.children)
                    : i.children.splice(r, 1),
                  r
                );
            }
          }),
          (function (e, t) {
            var n, r, i;
            let a;
            if (!t || void 0 === t.Fragment)
              throw TypeError("Expected `Fragment` in options");
            let s = t.filePath || void 0;
            if (t.development) {
              if ("function" != typeof t.jsxDEV)
                throw TypeError(
                  "Expected `jsxDEV` in options when `development: true`"
                );
              (n = t.jsxDEV),
                (a = function (e, t, r, i) {
                  let a = Array.isArray(r.children),
                    o = (0, A.Pk)(e);
                  return n(
                    t,
                    r,
                    i,
                    a,
                    {
                      columnNumber: o ? o.column - 1 : void 0,
                      fileName: s,
                      lineNumber: o ? o.line : void 0,
                    },
                    void 0
                  );
                });
            } else {
              if ("function" != typeof t.jsx)
                throw TypeError("Expected `jsx` in production options");
              if ("function" != typeof t.jsxs)
                throw TypeError("Expected `jsxs` in production options");
              (r = t.jsx),
                (i = t.jsxs),
                (a = function (e, t, n, a) {
                  let s = Array.isArray(n.children) ? i : r;
                  return a ? s(t, n, a) : s(t, n);
                });
            }
            let o = {
                Fragment: t.Fragment,
                ancestors: [],
                components: t.components || {},
                create: a,
                elementAttributeNameCase: t.elementAttributeNameCase || "react",
                evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                filePath: s,
                ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                passKeys: !1 !== t.passKeys,
                passNode: t.passNode || !1,
                schema: "svg" === t.space ? d.YP : d.dy,
                stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
              },
              l = y(o, e, void 0);
            return l && "string" != typeof l
              ? l
              : o.create(e, o.Fragment, { children: l || void 0 }, void 0);
          })(_, {
            Fragment: U.Fragment,
            components: s,
            ignoreInvalidStyle: !0,
            jsx: U.jsx,
            jsxs: U.jsxs,
            passKeys: !0,
            passNode: !0,
          })
        );
      }
      function tU(e) {
        let t = e.indexOf(":"),
          n = e.indexOf("?"),
          r = e.indexOf("#"),
          i = e.indexOf("/");
        return t < 0 ||
          (i > -1 && t > i) ||
          (n > -1 && t > n) ||
          (r > -1 && t > r) ||
          tB.test(e.slice(0, t))
          ? e
          : "";
      }
    },
    62549: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return ns;
        },
      });
      var r,
        i,
        a,
        s,
        o,
        l,
        c,
        u,
        h,
        d,
        p,
        f,
        E,
        m,
        T,
        A,
        _,
        g,
        C,
        I,
        N,
        S,
        k,
        D,
        R,
        b,
        O,
        L,
        y,
        P,
        M,
        x = n(52835),
        v = n(24345),
        F = n(91634),
        B = n(25668);
      let H = /[#.]/g;
      var w = n(26103),
        U = n(93859),
        G = n(50342);
      let Y = new Set(["button", "menu", "reset", "submit"]),
        z = {}.hasOwnProperty;
      function q(e, t, n) {
        let r =
          n &&
          (function (e) {
            let t = {},
              n = -1;
            for (; ++n < e.length; ) t[e[n].toLowerCase()] = e[n];
            return t;
          })(n);
        return function (n, i, ...a) {
          let s,
            o = -1;
          if (null == n) (s = { type: "root", children: [] }), a.unshift(i);
          else {
            var l;
            if (
              (((s = (function (e, t) {
                let n, r;
                let i = e || "",
                  a = {},
                  s = 0;
                for (; s < i.length; ) {
                  H.lastIndex = s;
                  let e = H.exec(i),
                    t = i.slice(s, e ? e.index : i.length);
                  t &&
                    (n
                      ? "#" === n
                        ? (a.id = t)
                        : Array.isArray(a.className)
                        ? a.className.push(t)
                        : (a.className = [t])
                      : (r = t),
                    (s += t.length)),
                    e && ((n = e[0]), s++);
                }
                return {
                  type: "element",
                  tagName: r || t || "div",
                  properties: a,
                  children: [],
                };
              })(n, t)).tagName = s.tagName.toLowerCase()),
              r && z.call(r, s.tagName) && (s.tagName = r[s.tagName]),
              (l = s.tagName),
              !(null == i || "object" != typeof i || Array.isArray(i)) &&
                ("input" === l ||
                  !i.type ||
                  "string" != typeof i.type ||
                  (!("children" in i && Array.isArray(i.children)) &&
                    ("button" === l
                      ? Y.has(i.type.toLowerCase())
                      : !("value" in i)))))
            ) {
              let t;
              for (t in i)
                z.call(i, t) &&
                  (function (e, t, n, r) {
                    let i;
                    let a = (0, w.s)(e, n),
                      s = -1;
                    if (null != r) {
                      if ("number" == typeof r) {
                        if (Number.isNaN(r)) return;
                        i = r;
                      } else
                        i =
                          "boolean" == typeof r
                            ? r
                            : "string" == typeof r
                            ? a.spaceSeparated
                              ? (0, G.Q)(r)
                              : a.commaSeparated
                              ? (0, B.Q)(r)
                              : a.commaOrSpaceSeparated
                              ? (0, G.Q)((0, B.Q)(r).join(" "))
                              : V(a, a.property, r)
                            : Array.isArray(r)
                            ? r.concat()
                            : "style" === a.property
                            ? (function (e) {
                                let t;
                                let n = [];
                                for (t in e)
                                  z.call(e, t) && n.push([t, e[t]].join(": "));
                                return n.join("; ");
                              })(r)
                            : String(r);
                      if (Array.isArray(i)) {
                        let e = [];
                        for (; ++s < i.length; ) {
                          let t = V(a, a.property, i[s]);
                          e[s] = t;
                        }
                        i = e;
                      }
                      if (
                        "className" === a.property &&
                        Array.isArray(t.className)
                      ) {
                        let e = i;
                        i = t.className.concat(e);
                      }
                      t[a.property] = i;
                    }
                  })(e, s.properties, t, i[t]);
            } else a.unshift(i);
          }
          for (; ++o < a.length; )
            !(function e(t, n) {
              let r = -1;
              if (null == n);
              else if ("string" == typeof n || "number" == typeof n)
                t.push({ type: "text", value: String(n) });
              else if (Array.isArray(n)) for (; ++r < n.length; ) e(t, n[r]);
              else if ("object" == typeof n && "type" in n)
                "root" === n.type ? e(t, n.children) : t.push(n);
              else
                throw Error("Expected node, nodes, or string, got `" + n + "`");
            })(s.children, a[o]);
          return (
            "element" === s.type &&
              "template" === s.tagName &&
              ((s.content = { type: "root", children: s.children }),
              (s.children = [])),
            s
          );
        };
      }
      function V(e, t, n) {
        if ("string" == typeof n) {
          if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
          if (
            (e.boolean || e.overloadedBoolean) &&
            ("" === n || (0, U.F)(n) === (0, U.F)(t))
          )
            return !0;
        }
        return n;
      }
      let j = q(F.dy, "div"),
        Q = q(F.YP, "g", [
          "altGlyph",
          "altGlyphDef",
          "altGlyphItem",
          "animateColor",
          "animateMotion",
          "animateTransform",
          "clipPath",
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "foreignObject",
          "glyphRef",
          "linearGradient",
          "radialGradient",
          "solidColor",
          "textArea",
          "textPath",
        ]),
        W = /\r?\n|\r/g,
        X = {
          html: "http://www.w3.org/1999/xhtml",
          mathml: "http://www.w3.org/1998/Math/MathML",
          svg: "http://www.w3.org/2000/svg",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        K = {}.hasOwnProperty,
        J = Object.prototype;
      function Z(e, t) {
        let n;
        switch (t.nodeName) {
          case "#comment":
            return (n = { type: "comment", value: t.data }), ee(e, t, n), n;
          case "#document":
          case "#document-fragment": {
            let r =
              "mode" in t &&
              ("quirks" === t.mode || "limited-quirks" === t.mode);
            if (
              ((n = {
                type: "root",
                children: $(e, t.childNodes),
                data: { quirksMode: r },
              }),
              e.file && e.location)
            ) {
              let t = String(e.file),
                r = (function (e) {
                  let t = String(e),
                    n = [];
                  for (W.lastIndex = 0; W.test(t); ) n.push(W.lastIndex);
                  return (
                    n.push(t.length + 1),
                    {
                      toPoint: function (e) {
                        let t = -1;
                        if (
                          "number" == typeof e &&
                          e > -1 &&
                          e < n[n.length - 1]
                        ) {
                          for (; ++t < n.length; )
                            if (n[t] > e)
                              return {
                                line: t + 1,
                                column: e - (t > 0 ? n[t - 1] : 0) + 1,
                                offset: e,
                              };
                        }
                      },
                      toOffset: function (e) {
                        let t = e && e.line,
                          r = e && e.column;
                        if (
                          "number" == typeof t &&
                          "number" == typeof r &&
                          !Number.isNaN(t) &&
                          !Number.isNaN(r) &&
                          t - 1 in n
                        ) {
                          let e = (n[t - 2] || 0) + r - 1 || 0;
                          if (e > -1 && e < n[n.length - 1]) return e;
                        }
                      },
                    }
                  );
                })(t),
                i = r.toPoint(0),
                a = r.toPoint(t.length);
              (0, v.ok)(i, "expected `start`"),
                (0, v.ok)(a, "expected `end`"),
                (n.position = { start: i, end: a });
            }
            return n;
          }
          case "#documentType":
            return ee(e, t, (n = { type: "doctype" })), n;
          case "#text":
            return (n = { type: "text", value: t.value }), ee(e, t, n), n;
          default:
            return (function (e, t) {
              let n = e.schema;
              e.schema = t.namespaceURI === X.svg ? F.YP : F.dy;
              let r = -1,
                i = {};
              for (; ++r < t.attrs.length; ) {
                let e = t.attrs[r],
                  n = (e.prefix ? e.prefix + ":" : "") + e.name;
                K.call(J, n) || (i[n] = e.value);
              }
              let a = ("svg" === e.schema.space ? Q : j)(
                t.tagName,
                i,
                $(e, t.childNodes)
              );
              if ((ee(e, t, a), "template" === a.tagName)) {
                let n = t.sourceCodeLocation,
                  r = n && n.startTag && et(n.startTag),
                  i = n && n.endTag && et(n.endTag),
                  s = Z(e, t.content);
                r &&
                  i &&
                  e.file &&
                  (s.position = { start: r.end, end: i.start }),
                  (a.content = s);
              }
              return (e.schema = n), a;
            })(e, t);
        }
      }
      function $(e, t) {
        let n = -1,
          r = [];
        for (; ++n < t.length; ) {
          let i = Z(e, t[n]);
          r.push(i);
        }
        return r;
      }
      function ee(e, t, n) {
        if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
          let r = (function (e, t, n) {
            let r = et(n);
            if ("element" === t.type) {
              let i = t.children[t.children.length - 1];
              if (
                (r &&
                  !n.endTag &&
                  i &&
                  i.position &&
                  i.position.end &&
                  (r.end = Object.assign({}, i.position.end)),
                e.verbose)
              ) {
                let r;
                let i = {};
                if (n.attrs)
                  for (r in n.attrs)
                    K.call(n.attrs, r) &&
                      (i[(0, w.s)(e.schema, r).property] = et(n.attrs[r]));
                (0, v.ok)(n.startTag, "a start tag should exist");
                let a = et(n.startTag),
                  s = n.endTag ? et(n.endTag) : void 0,
                  o = { opening: a };
                s && (o.closing = s),
                  (o.properties = i),
                  (t.data = { position: o });
              }
            }
            return r;
          })(e, n, t.sourceCodeLocation);
          r && ((e.location = !0), (n.position = r));
        }
      }
      function et(e) {
        let t = en({
            line: e.startLine,
            column: e.startCol,
            offset: e.startOffset,
          }),
          n = en({ line: e.endLine, column: e.endCol, offset: e.endOffset });
        return t || n ? { start: t, end: n } : void 0;
      }
      function en(e) {
        return e.line && e.column ? e : void 0;
      }
      let er = {}.hasOwnProperty;
      function ei(e, t) {
        let n = t || {};
        function r(t, ...n) {
          let i = r.invalid,
            a = r.handlers;
          if (t && er.call(t, e)) {
            let n = String(t[e]);
            i = er.call(a, n) ? a[n] : r.unknown;
          }
          if (i) return i.call(this, t, ...n);
        }
        return (
          (r.handlers = n.handlers || {}),
          (r.invalid = n.invalid),
          (r.unknown = n.unknown),
          r
        );
      }
      let ea = {}.hasOwnProperty,
        es = ei("type", {
          handlers: {
            root: function (e, t) {
              let n = {
                nodeName: "#document",
                mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
                childNodes: [],
              };
              return (n.childNodes = eo(e.children, n, t)), el(e, n), n;
            },
            element: function (e, t) {
              let n;
              let r = t;
              "element" === e.type &&
                "svg" === e.tagName.toLowerCase() &&
                "html" === t.space &&
                (r = F.YP);
              let i = [];
              if (e.properties) {
                for (n in e.properties)
                  if ("children" !== n && ea.call(e.properties, n)) {
                    let t = (function (e, t, n) {
                      let r = (0, w.s)(e, t);
                      if (
                        !1 === n ||
                        null == n ||
                        ("number" == typeof n && Number.isNaN(n)) ||
                        (!n && r.boolean)
                      )
                        return;
                      Array.isArray(n) &&
                        (n = r.commaSeparated ? (0, B.P)(n) : (0, G.P)(n));
                      let i = {
                        name: r.attribute,
                        value: !0 === n ? "" : String(n),
                      };
                      if (r.space && "html" !== r.space && "svg" !== r.space) {
                        let e = i.name.indexOf(":");
                        e < 0
                          ? (i.prefix = "")
                          : ((i.name = i.name.slice(e + 1)),
                            (i.prefix = r.attribute.slice(0, e))),
                          (i.namespace = X[r.space]);
                      }
                      return i;
                    })(r, n, e.properties[n]);
                    t && i.push(t);
                  }
              }
              let a = r.space;
              (0, v.ok)(a);
              let s = {
                nodeName: e.tagName,
                tagName: e.tagName,
                attrs: i,
                namespaceURI: X[a],
                childNodes: [],
                parentNode: null,
              };
              return (
                (s.childNodes = eo(e.children, s, r)),
                el(e, s),
                "template" === e.tagName &&
                  e.content &&
                  (s.content = (function (e, t) {
                    let n = { nodeName: "#document-fragment", childNodes: [] };
                    return (n.childNodes = eo(e.children, n, t)), el(e, n), n;
                  })(e.content, r)),
                s
              );
            },
            text: function (e) {
              let t = { nodeName: "#text", value: e.value, parentNode: null };
              return el(e, t), t;
            },
            comment: function (e) {
              let t = { nodeName: "#comment", data: e.value, parentNode: null };
              return el(e, t), t;
            },
            doctype: function (e) {
              let t = {
                nodeName: "#documentType",
                name: "html",
                publicId: "",
                systemId: "",
                parentNode: null,
              };
              return el(e, t), t;
            },
          },
        });
      function eo(e, t, n) {
        let r = -1,
          i = [];
        if (e)
          for (; ++r < e.length; ) {
            let a = es(e[r], n);
            (a.parentNode = t), i.push(a);
          }
        return i;
      }
      function el(e, t) {
        let n = e.position;
        n &&
          n.start &&
          n.end &&
          ((0, v.ok)("number" == typeof n.start.offset),
          (0, v.ok)("number" == typeof n.end.offset),
          (t.sourceCodeLocation = {
            startLine: n.start.line,
            startCol: n.start.column,
            startOffset: n.start.offset,
            endLine: n.end.line,
            endCol: n.end.column,
            endOffset: n.end.offset,
          }));
      }
      let ec = [
          "area",
          "base",
          "basefont",
          "bgsound",
          "br",
          "col",
          "command",
          "embed",
          "frame",
          "hr",
          "image",
          "img",
          "input",
          "keygen",
          "link",
          "meta",
          "param",
          "source",
          "track",
          "wbr",
        ],
        eu = new Set([
          65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
          327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822,
          589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966,
          851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110,
          1114111,
        ]);
      ((r = A = A || (A = {}))[(r.EOF = -1)] = "EOF"),
        (r[(r.NULL = 0)] = "NULL"),
        (r[(r.TABULATION = 9)] = "TABULATION"),
        (r[(r.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
        (r[(r.LINE_FEED = 10)] = "LINE_FEED"),
        (r[(r.FORM_FEED = 12)] = "FORM_FEED"),
        (r[(r.SPACE = 32)] = "SPACE"),
        (r[(r.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK"),
        (r[(r.QUOTATION_MARK = 34)] = "QUOTATION_MARK"),
        (r[(r.NUMBER_SIGN = 35)] = "NUMBER_SIGN"),
        (r[(r.AMPERSAND = 38)] = "AMPERSAND"),
        (r[(r.APOSTROPHE = 39)] = "APOSTROPHE"),
        (r[(r.HYPHEN_MINUS = 45)] = "HYPHEN_MINUS"),
        (r[(r.SOLIDUS = 47)] = "SOLIDUS"),
        (r[(r.DIGIT_0 = 48)] = "DIGIT_0"),
        (r[(r.DIGIT_9 = 57)] = "DIGIT_9"),
        (r[(r.SEMICOLON = 59)] = "SEMICOLON"),
        (r[(r.LESS_THAN_SIGN = 60)] = "LESS_THAN_SIGN"),
        (r[(r.EQUALS_SIGN = 61)] = "EQUALS_SIGN"),
        (r[(r.GREATER_THAN_SIGN = 62)] = "GREATER_THAN_SIGN"),
        (r[(r.QUESTION_MARK = 63)] = "QUESTION_MARK"),
        (r[(r.LATIN_CAPITAL_A = 65)] = "LATIN_CAPITAL_A"),
        (r[(r.LATIN_CAPITAL_F = 70)] = "LATIN_CAPITAL_F"),
        (r[(r.LATIN_CAPITAL_X = 88)] = "LATIN_CAPITAL_X"),
        (r[(r.LATIN_CAPITAL_Z = 90)] = "LATIN_CAPITAL_Z"),
        (r[(r.RIGHT_SQUARE_BRACKET = 93)] = "RIGHT_SQUARE_BRACKET"),
        (r[(r.GRAVE_ACCENT = 96)] = "GRAVE_ACCENT"),
        (r[(r.LATIN_SMALL_A = 97)] = "LATIN_SMALL_A"),
        (r[(r.LATIN_SMALL_F = 102)] = "LATIN_SMALL_F"),
        (r[(r.LATIN_SMALL_X = 120)] = "LATIN_SMALL_X"),
        (r[(r.LATIN_SMALL_Z = 122)] = "LATIN_SMALL_Z"),
        (r[(r.REPLACEMENT_CHARACTER = 65533)] = "REPLACEMENT_CHARACTER");
      let eh = {
        DASH_DASH: "--",
        CDATA_START: "[CDATA[",
        DOCTYPE: "doctype",
        SCRIPT: "script",
        PUBLIC: "public",
        SYSTEM: "system",
      };
      function ed(e) {
        return e >= 55296 && e <= 57343;
      }
      function ep(e) {
        return (
          (32 !== e &&
            10 !== e &&
            13 !== e &&
            9 !== e &&
            12 !== e &&
            e >= 1 &&
            e <= 31) ||
          (e >= 127 && e <= 159)
        );
      }
      function ef(e) {
        return (e >= 64976 && e <= 65007) || eu.has(e);
      }
      ((i = _ = _ || (_ = {})).controlCharacterInInputStream =
        "control-character-in-input-stream"),
        (i.noncharacterInInputStream = "noncharacter-in-input-stream"),
        (i.surrogateInInputStream = "surrogate-in-input-stream"),
        (i.nonVoidHtmlElementStartTagWithTrailingSolidus =
          "non-void-html-element-start-tag-with-trailing-solidus"),
        (i.endTagWithAttributes = "end-tag-with-attributes"),
        (i.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus"),
        (i.unexpectedSolidusInTag = "unexpected-solidus-in-tag"),
        (i.unexpectedNullCharacter = "unexpected-null-character"),
        (i.unexpectedQuestionMarkInsteadOfTagName =
          "unexpected-question-mark-instead-of-tag-name"),
        (i.invalidFirstCharacterOfTagName =
          "invalid-first-character-of-tag-name"),
        (i.unexpectedEqualsSignBeforeAttributeName =
          "unexpected-equals-sign-before-attribute-name"),
        (i.missingEndTagName = "missing-end-tag-name"),
        (i.unexpectedCharacterInAttributeName =
          "unexpected-character-in-attribute-name"),
        (i.unknownNamedCharacterReference =
          "unknown-named-character-reference"),
        (i.missingSemicolonAfterCharacterReference =
          "missing-semicolon-after-character-reference"),
        (i.unexpectedCharacterAfterDoctypeSystemIdentifier =
          "unexpected-character-after-doctype-system-identifier"),
        (i.unexpectedCharacterInUnquotedAttributeValue =
          "unexpected-character-in-unquoted-attribute-value"),
        (i.eofBeforeTagName = "eof-before-tag-name"),
        (i.eofInTag = "eof-in-tag"),
        (i.missingAttributeValue = "missing-attribute-value"),
        (i.missingWhitespaceBetweenAttributes =
          "missing-whitespace-between-attributes"),
        (i.missingWhitespaceAfterDoctypePublicKeyword =
          "missing-whitespace-after-doctype-public-keyword"),
        (i.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
          "missing-whitespace-between-doctype-public-and-system-identifiers"),
        (i.missingWhitespaceAfterDoctypeSystemKeyword =
          "missing-whitespace-after-doctype-system-keyword"),
        (i.missingQuoteBeforeDoctypePublicIdentifier =
          "missing-quote-before-doctype-public-identifier"),
        (i.missingQuoteBeforeDoctypeSystemIdentifier =
          "missing-quote-before-doctype-system-identifier"),
        (i.missingDoctypePublicIdentifier =
          "missing-doctype-public-identifier"),
        (i.missingDoctypeSystemIdentifier =
          "missing-doctype-system-identifier"),
        (i.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier"),
        (i.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier"),
        (i.cdataInHtmlContent = "cdata-in-html-content"),
        (i.incorrectlyOpenedComment = "incorrectly-opened-comment"),
        (i.eofInScriptHtmlCommentLikeText =
          "eof-in-script-html-comment-like-text"),
        (i.eofInDoctype = "eof-in-doctype"),
        (i.nestedComment = "nested-comment"),
        (i.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment"),
        (i.eofInComment = "eof-in-comment"),
        (i.incorrectlyClosedComment = "incorrectly-closed-comment"),
        (i.eofInCdata = "eof-in-cdata"),
        (i.absenceOfDigitsInNumericCharacterReference =
          "absence-of-digits-in-numeric-character-reference"),
        (i.nullCharacterReference = "null-character-reference"),
        (i.surrogateCharacterReference = "surrogate-character-reference"),
        (i.characterReferenceOutsideUnicodeRange =
          "character-reference-outside-unicode-range"),
        (i.controlCharacterReference = "control-character-reference"),
        (i.noncharacterCharacterReference = "noncharacter-character-reference"),
        (i.missingWhitespaceBeforeDoctypeName =
          "missing-whitespace-before-doctype-name"),
        (i.missingDoctypeName = "missing-doctype-name"),
        (i.invalidCharacterSequenceAfterDoctypeName =
          "invalid-character-sequence-after-doctype-name"),
        (i.duplicateAttribute = "duplicate-attribute"),
        (i.nonConformingDoctype = "non-conforming-doctype"),
        (i.missingDoctype = "missing-doctype"),
        (i.misplacedDoctype = "misplaced-doctype"),
        (i.endTagWithoutMatchingOpenElement =
          "end-tag-without-matching-open-element"),
        (i.closingOfElementWithOpenChildElements =
          "closing-of-element-with-open-child-elements"),
        (i.disallowedContentInNoscriptInHead =
          "disallowed-content-in-noscript-in-head"),
        (i.openElementsLeftAfterEof = "open-elements-left-after-eof"),
        (i.abandonedHeadElementChild = "abandoned-head-element-child"),
        (i.misplacedStartTagForHeadElement =
          "misplaced-start-tag-for-head-element"),
        (i.nestedNoscriptInHead = "nested-noscript-in-head"),
        (i.eofInElementThatCanContainOnlyText =
          "eof-in-element-that-can-contain-only-text");
      class eE {
        constructor(e) {
          (this.handler = e),
            (this.html = ""),
            (this.pos = -1),
            (this.lastGapPos = -2),
            (this.gapStack = []),
            (this.skipNextNewLine = !1),
            (this.lastChunkWritten = !1),
            (this.endOfChunkHit = !1),
            (this.bufferWaterline = 65536),
            (this.isEol = !1),
            (this.lineStartPos = 0),
            (this.droppedBufferSize = 0),
            (this.line = 1),
            (this.lastErrOffset = -1);
        }
        get col() {
          return (
            this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos)
          );
        }
        get offset() {
          return this.droppedBufferSize + this.pos;
        }
        getError(e) {
          let { line: t, col: n, offset: r } = this;
          return {
            code: e,
            startLine: t,
            endLine: t,
            startCol: n,
            endCol: n,
            startOffset: r,
            endOffset: r,
          };
        }
        _err(e) {
          this.handler.onParseError &&
            this.lastErrOffset !== this.offset &&
            ((this.lastErrOffset = this.offset),
            this.handler.onParseError(this.getError(e)));
        }
        _addGap() {
          this.gapStack.push(this.lastGapPos), (this.lastGapPos = this.pos);
        }
        _processSurrogate(e) {
          if (this.pos !== this.html.length - 1) {
            let t = this.html.charCodeAt(this.pos + 1);
            if (t >= 56320 && t <= 57343)
              return this.pos++, this._addGap(), (e - 55296) * 1024 + 9216 + t;
          } else if (!this.lastChunkWritten)
            return (this.endOfChunkHit = !0), A.EOF;
          return this._err(_.surrogateInInputStream), e;
        }
        willDropParsedChunk() {
          return this.pos > this.bufferWaterline;
        }
        dropParsedChunk() {
          this.willDropParsedChunk() &&
            ((this.html = this.html.substring(this.pos)),
            (this.lineStartPos -= this.pos),
            (this.droppedBufferSize += this.pos),
            (this.pos = 0),
            (this.lastGapPos = -2),
            (this.gapStack.length = 0));
        }
        write(e, t) {
          this.html.length > 0 ? (this.html += e) : (this.html = e),
            (this.endOfChunkHit = !1),
            (this.lastChunkWritten = t);
        }
        insertHtmlAtCurrentPos(e) {
          (this.html =
            this.html.substring(0, this.pos + 1) +
            e +
            this.html.substring(this.pos + 1)),
            (this.endOfChunkHit = !1);
        }
        startsWith(e, t) {
          if (this.pos + e.length > this.html.length)
            return (this.endOfChunkHit = !this.lastChunkWritten), !1;
          if (t) return this.html.startsWith(e, this.pos);
          for (let t = 0; t < e.length; t++)
            if ((32 | this.html.charCodeAt(this.pos + t)) !== e.charCodeAt(t))
              return !1;
          return !0;
        }
        peek(e) {
          let t = this.pos + e;
          if (t >= this.html.length)
            return (this.endOfChunkHit = !this.lastChunkWritten), A.EOF;
          let n = this.html.charCodeAt(t);
          return n === A.CARRIAGE_RETURN ? A.LINE_FEED : n;
        }
        advance() {
          if (
            (this.pos++,
            this.isEol &&
              ((this.isEol = !1), this.line++, (this.lineStartPos = this.pos)),
            this.pos >= this.html.length)
          )
            return (this.endOfChunkHit = !this.lastChunkWritten), A.EOF;
          let e = this.html.charCodeAt(this.pos);
          return e === A.CARRIAGE_RETURN
            ? ((this.isEol = !0), (this.skipNextNewLine = !0), A.LINE_FEED)
            : e === A.LINE_FEED && ((this.isEol = !0), this.skipNextNewLine)
            ? (this.line--,
              (this.skipNextNewLine = !1),
              this._addGap(),
              this.advance())
            : ((this.skipNextNewLine = !1),
              ed(e) && (e = this._processSurrogate(e)),
              null === this.handler.onParseError ||
                (e > 31 && e < 127) ||
                e === A.LINE_FEED ||
                e === A.CARRIAGE_RETURN ||
                (e > 159 && e < 64976) ||
                this._checkForProblematicCharacters(e),
              e);
        }
        _checkForProblematicCharacters(e) {
          ep(e)
            ? this._err(_.controlCharacterInInputStream)
            : ef(e) && this._err(_.noncharacterInInputStream);
        }
        retreat(e) {
          for (this.pos -= e; this.pos < this.lastGapPos; )
            (this.lastGapPos = this.gapStack.pop()), this.pos--;
          this.isEol = !1;
        }
      }
      function em(e, t) {
        for (let n = e.attrs.length - 1; n >= 0; n--)
          if (e.attrs[n].name === t) return e.attrs[n].value;
        return null;
      }
      ((a = g = g || (g = {}))[(a.CHARACTER = 0)] = "CHARACTER"),
        (a[(a.NULL_CHARACTER = 1)] = "NULL_CHARACTER"),
        (a[(a.WHITESPACE_CHARACTER = 2)] = "WHITESPACE_CHARACTER"),
        (a[(a.START_TAG = 3)] = "START_TAG"),
        (a[(a.END_TAG = 4)] = "END_TAG"),
        (a[(a.COMMENT = 5)] = "COMMENT"),
        (a[(a.DOCTYPE = 6)] = "DOCTYPE"),
        (a[(a.EOF = 7)] = "EOF"),
        (a[(a.HIBERNATION = 8)] = "HIBERNATION");
      var eT = new Uint16Array(
          'ᵁ<\xd5ıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig耻\xc6䃆P耻&䀦cute耻\xc1䃁reve;䄂Āiyx}rc耻\xc2䃂;䐐r;쀀\ud835\udd04rave耻\xc0䃀pha;䎑acr;䄀d;橓Āgp\x9d\xa1on;䄄f;쀀\ud835\udd38plyFunction;恡ing耻\xc5䃅Ācs\xbe\xc3r;쀀\ud835\udc9cign;扔ilde耻\xc3䃃ml耻\xc4䃄Ѐaceforsu\xe5\xfb\xfeėĜĢħĪĀcr\xea\xf2kslash;或Ŷ\xf6\xf8;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀\ud835\udd05pf;쀀\ud835\udd39eve;䋘c\xf2ēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻\xa9䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻\xc7䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷\xf2ſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀\ud835\udc9epĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀\ud835\udd07Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀\ud835\udd3bƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegra\xecȹoɴ͹\0\0ͻ\xbb͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔e\xe5ˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀\ud835\udc9frok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻\xd0䃐cute耻\xc9䃉ƀaiyӒӗӜron;䄚rc耻\xca䃊;䐭ot;䄖r;쀀\ud835\udd08rave耻\xc8䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀\ud835\udd3csilon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻\xcb䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀\ud835\udd09lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀\ud835\udd3dAll;戀riertrf;愱c\xf2׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀\ud835\udd0a;拙pf;쀀\ud835\udd3eeater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀\ud835\udca2;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅ\xf2کrok;䄦mpńېۘownHum\xf0įqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻\xcd䃍Āiyܓܘrc耻\xce䃎;䐘ot;䄰r;愑rave耻\xcc䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lie\xf3ϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀\ud835\udd40a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻\xcf䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀\ud835\udd0dpf;쀀\ud835\udd41ǣ߇\0ߌr;쀀\ud835\udca5rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀\ud835\udd0epf;쀀\ud835\udd42cr;쀀\ud835\udca6րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ight\xe1Μs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀\ud835\udd0fĀ;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊight\xe1οight\xe1ϊf;쀀\ud835\udd43erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂ\xf2ࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀\ud835\udd10nusPlus;戓pf;쀀\ud835\udd44c\xf2੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘\xeb૙eryThi\xee૙tedĀGL૸ଆreaterGreate\xf2ٳessLes\xf3ੈLine;䀊r;쀀\ud835\udd11ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀\ud835\udca9ilde耻\xd1䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻\xd3䃓Āiy෎ීrc耻\xd4䃔;䐞blac;䅐r;쀀\ud835\udd12rave耻\xd2䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀\ud835\udd46enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀\ud835\udcaaash耻\xd8䃘iŬื฼de耻\xd5䃕es;樷ml耻\xd6䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀\ud835\udd13i;䎦;䎠usMinus;䂱Āipຢອncareplan\xe5ڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀\ud835\udcab;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀\ud835\udd14pf;愚cr;쀀\ud835\udcac؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻\xae䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r\xbbཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀\ud835\udd16ortȀDLRUᄪᄴᄾᅉownArrow\xbbОeftArrow\xbb࢚ightArrow\xbb࿝pArrow;憑gma;䎣allCircle;战pf;쀀\ud835\udd4aɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀\ud835\udcaear;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Th\xe1ྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et\xbbሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻\xde䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀\ud835\udd17Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀\ud835\udd4bipleDot;惛Āctዖዛr;쀀\ud835\udcafrok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻\xda䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻\xdb䃛;䐣blac;䅰r;쀀\ud835\udd18rave耻\xd9䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀\ud835\udd4cЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥own\xe1ϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀\ud835\udcb0ilde;䅨ml耻\xdc䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀\ud835\udd19pf;쀀\ud835\udd4dcr;쀀\ud835\udcb1dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀\ud835\udd1apf;쀀\ud835\udd4ecr;쀀\ud835\udcb2Ȁfiosᓋᓐᓒᓘr;쀀\ud835\udd1b;䎞pf;쀀\ud835\udd4fcr;쀀\ud835\udcb3ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻\xdd䃝Āiyᔉᔍrc;䅶;䐫r;쀀\ud835\udd1cpf;쀀\ud835\udd50cr;쀀\ud835\udcb4ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidt\xe8૙a;䎖r;愨pf;愤cr;쀀\ud835\udcb5௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻\xe1䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻\xe2䃢te肻\xb4̆;䐰lig耻\xe6䃦Ā;r\xb2ᖺ;쀀\ud835\udd1erave耻\xe0䃠ĀepᗊᗖĀfpᗏᗔsym;愵\xe8ᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e\xbbᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢\xbb\xb9arr;捼Āgpᙣᙧon;䄅f;쀀\ud835\udd52΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒ\xf1ᚃing耻\xe5䃥ƀctyᚡᚦᚨr;쀀\ud835\udcb6;䀪mpĀ;e዁ᚯ\xf1ʈilde耻\xe3䃣ml耻\xe4䃤Āciᛂᛈonin\xf4ɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e\xbbᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰s\xe9ᜌno\xf5ēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀\ud835\udd1fg΀costuvwឍឝឳេ៕៛៞ƀaiuបពរ\xf0ݠrc;旯p\xbb፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄e\xe5ᑄ\xe5ᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀\ud835\udd53Ā;tᏋᡣom\xbbᏌtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻\xa6䂦Ȁceioᥑᥖᥚᥠr;쀀\ud835\udcb7mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t\xbb᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁\xeeړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻\xe7䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻\xb8ƭptyv;榲t脀\xa2;eᨭᨮ䂢r\xe4Ʋr;쀀\ud835\udd20ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark\xbbᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟\xbbཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it\xbb᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;q\xc7\xc6ɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁\xeeᅠeĀmx᫱᫶ent\xbb᫩e\xf3ɍǧ᫾\0ᬇĀ;dኻᬂot;橭n\xf4Ɇƀfryᬐᬔᬗ;쀀\ud835\udd54o\xe4ɔ脀\xa9;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀\ud835\udcb8Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒre\xe3᭳u\xe3᭵ee;拎edge;拏en耻\xa4䂤earrowĀlrᯮ᯳eft\xbbᮀight\xbbᮽe\xe4ᯝĀciᰁᰇonin\xf4Ƿnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍r\xf2΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸\xf2ᄳhĀ;vᱚᱛ怐\xbbऊūᱡᱧarow;椏a\xe3̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻\xb0䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀\ud835\udd21arĀlrᲳᲵ\xbbࣜ\xbbသʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀\xf7;o᳧ᳰntimes;拇n\xf8᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀\ud835\udd55ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedg\xe5\xfanƀadhᄮᵝᵧownarrow\xf3ᲃarpoonĀlrᵲᵶef\xf4Ჴigh\xf4ᲶŢᵿᶅkaro\xf7གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀\ud835\udcb9;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃r\xf2Щa\xf2ྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴo\xf4ᲉĀcsḎḔute耻\xe9䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻\xea䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀\ud835\udd22ƀ;rsṐṑṗ檚ave耻\xe8䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et\xbbẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀\ud835\udd56ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on\xbbớ;䏵ȀcsuvỪỳἋἣĀioữḱrc\xbbḮɩỹ\0\0ỻ\xedՈantĀglἂἆtr\xbbṝess\xbbṺƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯o\xf4͒ĀahὉὋ;䎷耻\xf0䃰Āmrὓὗl耻\xeb䃫o;悬ƀcipὡὤὧl;䀡s\xf4ծĀeoὬὴctatio\xeeՙnential\xe5չৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotse\xf1Ṅy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀\ud835\udd23lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀\ud835\udd57ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻\xbd䂽;慓耻\xbc䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻\xbe䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀\ud835\udcbbࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lan\xf4٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀\ud835\udd24Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox\xbbℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀\ud835\udd58Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎pro\xf8₞r;楸qĀlqؿ↖les\xf3₈i\xed٫Āen↣↭rtneqq;쀀≩︀\xc5↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽r\xf2ΠȀilmr⇐⇔⇗⇛rs\xf0ᒄf\xbb․il\xf4کĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it\xbb∊lip;怦con;抹r;쀀\ud835\udd25sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀\ud835\udd59bar;怕ƀclt≯≴≸r;쀀\ud835\udcbdas\xe8⇴rok;䄧Ābp⊂⊇ull;恃hen\xbbᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻\xed䃭ƀ;iyݱ⊰⊵rc耻\xee䃮;䐸Ācx⊼⊿y;䐵cl耻\xa1䂡ĀfrΟ⋉;쀀\ud835\udd26rave耻\xec䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓in\xe5ގar\xf4ܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝do\xf4⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙er\xf3ᕣ\xe3⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀\ud835\udd5aa;䎹uest耻\xbf䂿Āci⎊⎏r;쀀\ud835\udcbenʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻\xef䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀\ud835\udd27ath;䈷pf;쀀\ud835\udd5bǣ⏬\0⏱r;쀀\ud835\udcbfrcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀\ud835\udd28reen;䄸cy;䑅cy;䑜pf;쀀\ud835\udd5ccr;쀀\ud835\udcc0஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼r\xf2৆\xf2Εail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴ra\xeeࡌbda;䎻gƀ;dlࢎⓁⓃ;榑\xe5ࢎ;檅uo耻\xab䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝\xeb≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼\xecࢰ\xe2┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□a\xe9⓶arpoonĀdu▯▴own\xbbњp\xbb०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoon\xf3྘quigarro\xf7⇰hreetimes;拋ƀ;qs▋ও◺lan\xf4বʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋ppro\xf8Ⓠot;拖qĀgq♃♅\xf4উgt\xf2⒌\xf4ছi\xedলƀilr♕࣡♚sht;楼;쀀\ud835\udd29Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖r\xf2◁orne\xf2ᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che\xbb⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox\xbb⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽r\xebࣁgƀlmr⛿✍✔eftĀar০✇ight\xe1৲apsto;柼ight\xe1৽parrowĀlr✥✩ef\xf4⓭ight;憬ƀafl✶✹✽r;榅;쀀\ud835\udd5dus;樭imes;樴š❋❏st;戗\xe1ፎƀ;ef❗❘᠀旊nge\xbb❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇r\xf2ࢨorne\xf2ᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀\ud835\udcc1mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹re\xe5◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀\xc5⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻\xaf䂯Āet⡗⡙;時Ā;e⡞⡟朠se\xbb⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻ow\xeeҌef\xf4ए\xf0Ꮡker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle\xbbᘦr;쀀\ud835\udd2ao;愧ƀcdn⢯⢴⣉ro耻\xb5䂵Ȁ;acdᑤ⢽⣀⣄s\xf4ᚧir;櫰ot肻\xb7Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛\xf2−\xf0ઁĀdp⣩⣮els;抧f;쀀\ud835\udd5eĀct⣸⣽r;쀀\ud835\udcc2pos\xbbᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la\xbb˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉ro\xf8඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xa0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸ui\xf6ୣĀei⩊⩎ar;椨\xed஘istĀ;s஠டr;쀀\ud835\udd2bȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lan\xf4௢i\xed௪Ā;rஶ⪁\xbbஷƀAap⪊⪍⪑r\xf2⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹r\xf2⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro\xf7⫁ightarro\xf7⪐ƀ;qs఻⪺⫪lan\xf4ౕĀ;sౕ⫴\xbbశi\xedౝĀ;rవ⫾iĀ;eచథi\xe4ඐĀpt⬌⬑f;쀀\ud835\udd5f膀\xac;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lle\xec୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳u\xe5ಥĀ;cಘ⭸Ā;eಒ⭽\xf1ಘȀAait⮈⮋⮝⮧r\xf2⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow\xbb⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉u\xe5൅;쀀\ud835\udcc3ortɭ⬅\0\0⯖ar\xe1⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭\xe5೸\xe5ഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗ\xf1സȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇ\xecௗlde耻\xf1䃱\xe7ృiangleĀlrⱒⱜeftĀ;eచⱚ\xf1దightĀ;eೋⱥ\xf1೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻\xf3䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻\xf4䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀\ud835\udd2cͯ⵹\0\0⵼\0ⶂn;䋛ave耻\xf2䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨr\xf2᪀Āir⶝ⶠr;榾oss;榻n\xe5๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀\ud835\udd60ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨r\xf2᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f\xbbⷿ耻\xaa䂪耻\xba䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧\xf2⸁ash耻\xf8䃸l;折iŬⸯ⸴de耻\xf5䃵esĀ;aǛ⸺s;樶ml耻\xf6䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀\xb6;l⹭⹮䂶le\xecЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀\ud835\udd2dƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕ma\xf4੶ne;明ƀ;tv⺿⻀⻈䏀chfork\xbb´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎\xf6⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻\xb1ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀\ud835\udd61nd耻\xa3䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷u\xe5໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾ppro\xf8⽃urlye\xf1໙\xf1໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨i\xedໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺\xf0⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴\xef໻rel;抰Āci⿀⿅r;쀀\ud835\udcc5;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀\ud835\udd2epf;쀀\ud835\udd62rime;恗cr;쀀\ud835\udcc6ƀaeo⿸〉〓tĀei⿾々rnion\xf3ڰnt;樖stĀ;e【】䀿\xf1Ἑ\xf4༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがr\xf2Ⴓ\xf2ϝail;検ar\xf2ᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕i\xe3ᅮmptyv;榳gȀ;del࿑らるろ;榒;榥\xe5࿑uo耻\xbb䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞\xeb≝\xf0✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶al\xf3༞ƀabrョリヮr\xf2៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗\xec࿲\xe2ヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜn\xe5Ⴛar\xf4ྩt;断ƀilrㅩဣㅮsht;楽;쀀\ud835\udd2fĀaoㅷㆆrĀduㅽㅿ\xbbѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭa\xe9トarpoonĀduㆻㆿow\xeeㅾp\xbb႒eftĀah㇊㇐rrow\xf3࿪arpoon\xf3Ցightarrows;應quigarro\xf7ニhreetimes;拌g;䋚ingdotse\xf1ἲƀahm㈍㈐㈓r\xf2࿪a\xf2Ց;怏oustĀ;a㈞㈟掱che\xbb㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾r\xebဃƀafl㉇㉊㉎r;榆;쀀\ud835\udd63us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒ar\xf2㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀\ud835\udcc7Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠re\xe5ㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛qu\xef➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡u\xe5ᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓i\xedሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒\xeb∨Ā;oਸ਼਴t耻\xa7䂧i;䀻war;椩mĀin㍩\xf0nu\xf3\xf1t;朶rĀ;o㍶⁕쀀\ud835\udd30Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜i\xe4ᑤara\xec⹯耻\xad䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲ar\xf2ᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetm\xe9㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀\ud835\udd64aĀdr㑍ЂesĀ;u㑔㑕晠it\xbb㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍\xf1ᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝\xf1ᆮƀ;afᅻ㒦ְrť㒫ֱ\xbbᅼar\xf2ᅈȀcemt㒹㒾㓂㓅r;쀀\ud835\udcc8tm\xee\xf1i\xec㐕ar\xe6ᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psilo\xeeỠh\xe9⺯s\xbb⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦ppro\xf8㋺urlye\xf1ᇾ\xf1ᇳƀaes㖂㖈㌛ppro\xf8㌚q\xf1㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻\xb9䂹耻\xb2䂲耻\xb3䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨\xeb∮Ā;oਫ਩war;椪lig耻\xdf䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄r\xeb๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀\ud835\udd31Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮ppro\xf8዁im\xbbኬs\xf0ኞĀas㚺㚮\xf0዁rn耻\xfe䃾Ǭ̟㛆⋧es膀\xd7;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀\xe1⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀\ud835\udd65rk;櫚\xe1㍢rime;怴ƀaip㜏㜒㝤d\xe5ቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own\xbbᶻeftĀ;e⠀㜾\xf1म;扜ightĀ;e㊪㝋\xf1ၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀\ud835\udcc9;䑆cy;䑛rok;䅧Āio㞋㞎x\xf4᝷headĀlr㞗㞠eftarro\xf7ࡏightarrow\xbbཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶r\xf2ϭar;楣Ācr㟜㟢ute耻\xfa䃺\xf2ᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻\xfb䃻;䑃ƀabh㠃㠆㠋r\xf2Ꭽlac;䅱a\xf2ᏃĀir㠓㠘sht;楾;쀀\ud835\udd32rave耻\xf9䃹š㠧㠱rĀlr㠬㠮\xbbॗ\xbbႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r\xbb㡆op;挏ri;旸Āal㡖㡚cr;䅫肻\xa8͉Āgp㡢㡦on;䅳f;쀀\ud835\udd66̀adhlsuᅋ㡸㡽፲㢑㢠own\xe1ᎳarpoonĀlr㢈㢌ef\xf4㠭igh\xf4㠯iƀ;hl㢙㢚㢜䏅\xbbᏺon\xbb㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r\xbb㢽op;挎ng;䅯ri;旹cr;쀀\ud835\udccaƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨\xbb᠓Āam㣯㣲r\xf2㢨l耻\xfc䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠r\xf2ϷarĀ;v㤦㤧櫨;櫩as\xe8ϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖app\xe1␕othin\xe7ẖƀhir㓫⻈㥙op\xf4⾵Ā;hᎷ㥢\xefㆍĀiu㥩㥭gm\xe1㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟et\xe1㚜iangleĀlr㦪㦯eft\xbbथight\xbbၑy;䐲ash\xbbံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨa\xf2ᑩr;쀀\ud835\udd33tr\xe9㦮suĀbp㧯㧱\xbbജ\xbb൙pf;쀀\ud835\udd67ro\xf0໻tr\xe9㦴Ācu㨆㨋r;쀀\ud835\udccbĀbp㨐㨘nĀEe㦀㨖\xbb㥾nĀEe㦒㨞\xbb㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀\ud835\udd34pf;쀀\ud835\udd68Ā;eᑹ㩦at\xe8ᑹcr;쀀\ud835\udcccૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tr\xe9៑r;쀀\ud835\udd35ĀAa㪔㪗r\xf2σr\xf2৶;䎾ĀAa㪡㪤r\xf2θr\xf2৫a\xf0✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀\ud835\udd69im\xe5ឲĀAa㫇㫊r\xf2ώr\xf2ਁĀcq㫒ីr;쀀\ud835\udccdĀpt៖㫜r\xe9។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻\xfd䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻\xa5䂥r;쀀\ud835\udd36cy;䑗pf;쀀\ud835\udd6acr;쀀\ud835\udcceĀcm㬦㬩y;䑎l耻\xff䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡tr\xe6ᕟa;䎶r;쀀\ud835\udd37cy;䐶grarr;懝pf;쀀\ud835\udd6bcr;쀀\ud835\udccfĀjn㮅㮇;怍j;怌'
            .split("")
            .map((e) => e.charCodeAt(0))
        ),
        eA = new Uint16Array(
          "Ȁaglq	\x15\x18\x1bɭ\x0f\0\0\x12p;䀦os;䀧t;䀾t;䀼uot;䀢"
            .split("")
            .map((e) => e.charCodeAt(0))
        );
      let e_ = new Map([
          [0, 65533],
          [128, 8364],
          [130, 8218],
          [131, 402],
          [132, 8222],
          [133, 8230],
          [134, 8224],
          [135, 8225],
          [136, 710],
          [137, 8240],
          [138, 352],
          [139, 8249],
          [140, 338],
          [142, 381],
          [145, 8216],
          [146, 8217],
          [147, 8220],
          [148, 8221],
          [149, 8226],
          [150, 8211],
          [151, 8212],
          [152, 732],
          [153, 8482],
          [154, 353],
          [155, 8250],
          [156, 339],
          [158, 382],
          [159, 376],
        ]),
        eg =
          null !== (C = String.fromCodePoint) && void 0 !== C
            ? C
            : function (e) {
                let t = "";
                return (
                  e > 65535 &&
                    ((e -= 65536),
                    (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += String.fromCharCode(e))
                );
              };
      function eC(e) {
        return e >= I.ZERO && e <= I.NINE;
      }
      ((s = I || (I = {}))[(s.NUM = 35)] = "NUM"),
        (s[(s.SEMI = 59)] = "SEMI"),
        (s[(s.EQUALS = 61)] = "EQUALS"),
        (s[(s.ZERO = 48)] = "ZERO"),
        (s[(s.NINE = 57)] = "NINE"),
        (s[(s.LOWER_A = 97)] = "LOWER_A"),
        (s[(s.LOWER_F = 102)] = "LOWER_F"),
        (s[(s.LOWER_X = 120)] = "LOWER_X"),
        (s[(s.LOWER_Z = 122)] = "LOWER_Z"),
        (s[(s.UPPER_A = 65)] = "UPPER_A"),
        (s[(s.UPPER_F = 70)] = "UPPER_F"),
        (s[(s.UPPER_Z = 90)] = "UPPER_Z"),
        ((o = N || (N = {}))[(o.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
        (o[(o.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
        (o[(o.JUMP_TABLE = 127)] = "JUMP_TABLE"),
        ((l = S || (S = {}))[(l.EntityStart = 0)] = "EntityStart"),
        (l[(l.NumericStart = 1)] = "NumericStart"),
        (l[(l.NumericDecimal = 2)] = "NumericDecimal"),
        (l[(l.NumericHex = 3)] = "NumericHex"),
        (l[(l.NamedEntity = 4)] = "NamedEntity"),
        ((c = k || (k = {}))[(c.Legacy = 0)] = "Legacy"),
        (c[(c.Strict = 1)] = "Strict"),
        (c[(c.Attribute = 2)] = "Attribute");
      class eI {
        constructor(e, t, n) {
          (this.decodeTree = e),
            (this.emitCodePoint = t),
            (this.errors = n),
            (this.state = S.EntityStart),
            (this.consumed = 1),
            (this.result = 0),
            (this.treeIndex = 0),
            (this.excess = 1),
            (this.decodeMode = k.Strict);
        }
        startEntity(e) {
          (this.decodeMode = e),
            (this.state = S.EntityStart),
            (this.result = 0),
            (this.treeIndex = 0),
            (this.excess = 1),
            (this.consumed = 1);
        }
        write(e, t) {
          switch (this.state) {
            case S.EntityStart:
              if (e.charCodeAt(t) === I.NUM)
                return (
                  (this.state = S.NumericStart),
                  (this.consumed += 1),
                  this.stateNumericStart(e, t + 1)
                );
              return (this.state = S.NamedEntity), this.stateNamedEntity(e, t);
            case S.NumericStart:
              return this.stateNumericStart(e, t);
            case S.NumericDecimal:
              return this.stateNumericDecimal(e, t);
            case S.NumericHex:
              return this.stateNumericHex(e, t);
            case S.NamedEntity:
              return this.stateNamedEntity(e, t);
          }
        }
        stateNumericStart(e, t) {
          return t >= e.length
            ? -1
            : (32 | e.charCodeAt(t)) === I.LOWER_X
            ? ((this.state = S.NumericHex),
              (this.consumed += 1),
              this.stateNumericHex(e, t + 1))
            : ((this.state = S.NumericDecimal), this.stateNumericDecimal(e, t));
        }
        addToNumericResult(e, t, n, r) {
          if (t !== n) {
            let i = n - t;
            (this.result =
              this.result * Math.pow(r, i) + parseInt(e.substr(t, i), r)),
              (this.consumed += i);
          }
        }
        stateNumericHex(e, t) {
          let n = t;
          for (; t < e.length; ) {
            var r;
            let i = e.charCodeAt(t);
            if (
              !eC(i) &&
              (!((r = i) >= I.UPPER_A) || !(r <= I.UPPER_F)) &&
              (!(r >= I.LOWER_A) || !(r <= I.LOWER_F))
            )
              return (
                this.addToNumericResult(e, n, t, 16),
                this.emitNumericEntity(i, 3)
              );
            t += 1;
          }
          return this.addToNumericResult(e, n, t, 16), -1;
        }
        stateNumericDecimal(e, t) {
          let n = t;
          for (; t < e.length; ) {
            let r = e.charCodeAt(t);
            if (!eC(r))
              return (
                this.addToNumericResult(e, n, t, 10),
                this.emitNumericEntity(r, 2)
              );
            t += 1;
          }
          return this.addToNumericResult(e, n, t, 10), -1;
        }
        emitNumericEntity(e, t) {
          var n, r, i;
          if (this.consumed <= t)
            return (
              null === (n = this.errors) ||
                void 0 === n ||
                n.absenceOfDigitsInNumericCharacterReference(this.consumed),
              0
            );
          if (e === I.SEMI) this.consumed += 1;
          else if (this.decodeMode === k.Strict) return 0;
          return (
            this.emitCodePoint(
              ((r = this.result) >= 55296 && r <= 57343) || r > 1114111
                ? 65533
                : null !== (i = e_.get(r)) && void 0 !== i
                ? i
                : r,
              this.consumed
            ),
            this.errors &&
              (e !== I.SEMI &&
                this.errors.missingSemicolonAfterCharacterReference(),
              this.errors.validateNumericCharacterReference(this.result)),
            this.consumed
          );
        }
        stateNamedEntity(e, t) {
          let { decodeTree: n } = this,
            r = n[this.treeIndex],
            i = (r & N.VALUE_LENGTH) >> 14;
          for (; t < e.length; t++, this.excess++) {
            let a = e.charCodeAt(t);
            if (
              ((this.treeIndex = eS(n, r, this.treeIndex + Math.max(1, i), a)),
              this.treeIndex < 0)
            )
              return 0 === this.result ||
                (this.decodeMode === k.Attribute &&
                  (0 === i ||
                    (function (e) {
                      var t;
                      return (
                        e === I.EQUALS ||
                        ((t = e) >= I.UPPER_A && t <= I.UPPER_Z) ||
                        (t >= I.LOWER_A && t <= I.LOWER_Z) ||
                        eC(t)
                      );
                    })(a)))
                ? 0
                : this.emitNotTerminatedNamedEntity();
            if (0 != (i = ((r = n[this.treeIndex]) & N.VALUE_LENGTH) >> 14)) {
              if (a === I.SEMI)
                return this.emitNamedEntityData(
                  this.treeIndex,
                  i,
                  this.consumed + this.excess
                );
              this.decodeMode !== k.Strict &&
                ((this.result = this.treeIndex),
                (this.consumed += this.excess),
                (this.excess = 0));
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var e;
          let { result: t, decodeTree: n } = this,
            r = (n[t] & N.VALUE_LENGTH) >> 14;
          return (
            this.emitNamedEntityData(t, r, this.consumed),
            null === (e = this.errors) ||
              void 0 === e ||
              e.missingSemicolonAfterCharacterReference(),
            this.consumed
          );
        }
        emitNamedEntityData(e, t, n) {
          let { decodeTree: r } = this;
          return (
            this.emitCodePoint(1 === t ? r[e] & ~N.VALUE_LENGTH : r[e + 1], n),
            3 === t && this.emitCodePoint(r[e + 2], n),
            n
          );
        }
        end() {
          var e;
          switch (this.state) {
            case S.NamedEntity:
              return 0 !== this.result &&
                (this.decodeMode !== k.Attribute ||
                  this.result === this.treeIndex)
                ? this.emitNotTerminatedNamedEntity()
                : 0;
            case S.NumericDecimal:
              return this.emitNumericEntity(0, 2);
            case S.NumericHex:
              return this.emitNumericEntity(0, 3);
            case S.NumericStart:
              return (
                null === (e = this.errors) ||
                  void 0 === e ||
                  e.absenceOfDigitsInNumericCharacterReference(this.consumed),
                0
              );
            case S.EntityStart:
              return 0;
          }
        }
      }
      function eN(e) {
        let t = "",
          n = new eI(e, (e) => (t += eg(e)));
        return function (e, r) {
          let i = 0,
            a = 0;
          for (; (a = e.indexOf("&", a)) >= 0; ) {
            (t += e.slice(i, a)), n.startEntity(r);
            let s = n.write(e, a + 1);
            if (s < 0) {
              i = a + n.end();
              break;
            }
            (i = a + s), (a = 0 === s ? i + 1 : i);
          }
          let s = t + e.slice(i);
          return (t = ""), s;
        };
      }
      function eS(e, t, n, r) {
        let i = (t & N.BRANCH_LENGTH) >> 7,
          a = t & N.JUMP_TABLE;
        if (0 === i) return 0 !== a && r === a ? n : -1;
        if (a) {
          let t = r - a;
          return t < 0 || t >= i ? -1 : e[n + t] - 1;
        }
        let s = n,
          o = s + i - 1;
        for (; s <= o; ) {
          let t = (s + o) >>> 1,
            n = e[t];
          if (n < r) s = t + 1;
          else {
            if (!(n > r)) return e[t + i];
            o = t - 1;
          }
        }
        return -1;
      }
      eN(eT),
        eN(eA),
        ((u = D = D || (D = {})).HTML = "http://www.w3.org/1999/xhtml"),
        (u.MATHML = "http://www.w3.org/1998/Math/MathML"),
        (u.SVG = "http://www.w3.org/2000/svg"),
        (u.XLINK = "http://www.w3.org/1999/xlink"),
        (u.XML = "http://www.w3.org/XML/1998/namespace"),
        (u.XMLNS = "http://www.w3.org/2000/xmlns/"),
        ((h = R = R || (R = {})).TYPE = "type"),
        (h.ACTION = "action"),
        (h.ENCODING = "encoding"),
        (h.PROMPT = "prompt"),
        (h.NAME = "name"),
        (h.COLOR = "color"),
        (h.FACE = "face"),
        (h.SIZE = "size"),
        ((d = b = b || (b = {})).NO_QUIRKS = "no-quirks"),
        (d.QUIRKS = "quirks"),
        (d.LIMITED_QUIRKS = "limited-quirks"),
        ((p = O = O || (O = {})).A = "a"),
        (p.ADDRESS = "address"),
        (p.ANNOTATION_XML = "annotation-xml"),
        (p.APPLET = "applet"),
        (p.AREA = "area"),
        (p.ARTICLE = "article"),
        (p.ASIDE = "aside"),
        (p.B = "b"),
        (p.BASE = "base"),
        (p.BASEFONT = "basefont"),
        (p.BGSOUND = "bgsound"),
        (p.BIG = "big"),
        (p.BLOCKQUOTE = "blockquote"),
        (p.BODY = "body"),
        (p.BR = "br"),
        (p.BUTTON = "button"),
        (p.CAPTION = "caption"),
        (p.CENTER = "center"),
        (p.CODE = "code"),
        (p.COL = "col"),
        (p.COLGROUP = "colgroup"),
        (p.DD = "dd"),
        (p.DESC = "desc"),
        (p.DETAILS = "details"),
        (p.DIALOG = "dialog"),
        (p.DIR = "dir"),
        (p.DIV = "div"),
        (p.DL = "dl"),
        (p.DT = "dt"),
        (p.EM = "em"),
        (p.EMBED = "embed"),
        (p.FIELDSET = "fieldset"),
        (p.FIGCAPTION = "figcaption"),
        (p.FIGURE = "figure"),
        (p.FONT = "font"),
        (p.FOOTER = "footer"),
        (p.FOREIGN_OBJECT = "foreignObject"),
        (p.FORM = "form"),
        (p.FRAME = "frame"),
        (p.FRAMESET = "frameset"),
        (p.H1 = "h1"),
        (p.H2 = "h2"),
        (p.H3 = "h3"),
        (p.H4 = "h4"),
        (p.H5 = "h5"),
        (p.H6 = "h6"),
        (p.HEAD = "head"),
        (p.HEADER = "header"),
        (p.HGROUP = "hgroup"),
        (p.HR = "hr"),
        (p.HTML = "html"),
        (p.I = "i"),
        (p.IMG = "img"),
        (p.IMAGE = "image"),
        (p.INPUT = "input"),
        (p.IFRAME = "iframe"),
        (p.KEYGEN = "keygen"),
        (p.LABEL = "label"),
        (p.LI = "li"),
        (p.LINK = "link"),
        (p.LISTING = "listing"),
        (p.MAIN = "main"),
        (p.MALIGNMARK = "malignmark"),
        (p.MARQUEE = "marquee"),
        (p.MATH = "math"),
        (p.MENU = "menu"),
        (p.META = "meta"),
        (p.MGLYPH = "mglyph"),
        (p.MI = "mi"),
        (p.MO = "mo"),
        (p.MN = "mn"),
        (p.MS = "ms"),
        (p.MTEXT = "mtext"),
        (p.NAV = "nav"),
        (p.NOBR = "nobr"),
        (p.NOFRAMES = "noframes"),
        (p.NOEMBED = "noembed"),
        (p.NOSCRIPT = "noscript"),
        (p.OBJECT = "object"),
        (p.OL = "ol"),
        (p.OPTGROUP = "optgroup"),
        (p.OPTION = "option"),
        (p.P = "p"),
        (p.PARAM = "param"),
        (p.PLAINTEXT = "plaintext"),
        (p.PRE = "pre"),
        (p.RB = "rb"),
        (p.RP = "rp"),
        (p.RT = "rt"),
        (p.RTC = "rtc"),
        (p.RUBY = "ruby"),
        (p.S = "s"),
        (p.SCRIPT = "script"),
        (p.SECTION = "section"),
        (p.SELECT = "select"),
        (p.SOURCE = "source"),
        (p.SMALL = "small"),
        (p.SPAN = "span"),
        (p.STRIKE = "strike"),
        (p.STRONG = "strong"),
        (p.STYLE = "style"),
        (p.SUB = "sub"),
        (p.SUMMARY = "summary"),
        (p.SUP = "sup"),
        (p.TABLE = "table"),
        (p.TBODY = "tbody"),
        (p.TEMPLATE = "template"),
        (p.TEXTAREA = "textarea"),
        (p.TFOOT = "tfoot"),
        (p.TD = "td"),
        (p.TH = "th"),
        (p.THEAD = "thead"),
        (p.TITLE = "title"),
        (p.TR = "tr"),
        (p.TRACK = "track"),
        (p.TT = "tt"),
        (p.U = "u"),
        (p.UL = "ul"),
        (p.SVG = "svg"),
        (p.VAR = "var"),
        (p.WBR = "wbr"),
        (p.XMP = "xmp"),
        ((f = L = L || (L = {}))[(f.UNKNOWN = 0)] = "UNKNOWN"),
        (f[(f.A = 1)] = "A"),
        (f[(f.ADDRESS = 2)] = "ADDRESS"),
        (f[(f.ANNOTATION_XML = 3)] = "ANNOTATION_XML"),
        (f[(f.APPLET = 4)] = "APPLET"),
        (f[(f.AREA = 5)] = "AREA"),
        (f[(f.ARTICLE = 6)] = "ARTICLE"),
        (f[(f.ASIDE = 7)] = "ASIDE"),
        (f[(f.B = 8)] = "B"),
        (f[(f.BASE = 9)] = "BASE"),
        (f[(f.BASEFONT = 10)] = "BASEFONT"),
        (f[(f.BGSOUND = 11)] = "BGSOUND"),
        (f[(f.BIG = 12)] = "BIG"),
        (f[(f.BLOCKQUOTE = 13)] = "BLOCKQUOTE"),
        (f[(f.BODY = 14)] = "BODY"),
        (f[(f.BR = 15)] = "BR"),
        (f[(f.BUTTON = 16)] = "BUTTON"),
        (f[(f.CAPTION = 17)] = "CAPTION"),
        (f[(f.CENTER = 18)] = "CENTER"),
        (f[(f.CODE = 19)] = "CODE"),
        (f[(f.COL = 20)] = "COL"),
        (f[(f.COLGROUP = 21)] = "COLGROUP"),
        (f[(f.DD = 22)] = "DD"),
        (f[(f.DESC = 23)] = "DESC"),
        (f[(f.DETAILS = 24)] = "DETAILS"),
        (f[(f.DIALOG = 25)] = "DIALOG"),
        (f[(f.DIR = 26)] = "DIR"),
        (f[(f.DIV = 27)] = "DIV"),
        (f[(f.DL = 28)] = "DL"),
        (f[(f.DT = 29)] = "DT"),
        (f[(f.EM = 30)] = "EM"),
        (f[(f.EMBED = 31)] = "EMBED"),
        (f[(f.FIELDSET = 32)] = "FIELDSET"),
        (f[(f.FIGCAPTION = 33)] = "FIGCAPTION"),
        (f[(f.FIGURE = 34)] = "FIGURE"),
        (f[(f.FONT = 35)] = "FONT"),
        (f[(f.FOOTER = 36)] = "FOOTER"),
        (f[(f.FOREIGN_OBJECT = 37)] = "FOREIGN_OBJECT"),
        (f[(f.FORM = 38)] = "FORM"),
        (f[(f.FRAME = 39)] = "FRAME"),
        (f[(f.FRAMESET = 40)] = "FRAMESET"),
        (f[(f.H1 = 41)] = "H1"),
        (f[(f.H2 = 42)] = "H2"),
        (f[(f.H3 = 43)] = "H3"),
        (f[(f.H4 = 44)] = "H4"),
        (f[(f.H5 = 45)] = "H5"),
        (f[(f.H6 = 46)] = "H6"),
        (f[(f.HEAD = 47)] = "HEAD"),
        (f[(f.HEADER = 48)] = "HEADER"),
        (f[(f.HGROUP = 49)] = "HGROUP"),
        (f[(f.HR = 50)] = "HR"),
        (f[(f.HTML = 51)] = "HTML"),
        (f[(f.I = 52)] = "I"),
        (f[(f.IMG = 53)] = "IMG"),
        (f[(f.IMAGE = 54)] = "IMAGE"),
        (f[(f.INPUT = 55)] = "INPUT"),
        (f[(f.IFRAME = 56)] = "IFRAME"),
        (f[(f.KEYGEN = 57)] = "KEYGEN"),
        (f[(f.LABEL = 58)] = "LABEL"),
        (f[(f.LI = 59)] = "LI"),
        (f[(f.LINK = 60)] = "LINK"),
        (f[(f.LISTING = 61)] = "LISTING"),
        (f[(f.MAIN = 62)] = "MAIN"),
        (f[(f.MALIGNMARK = 63)] = "MALIGNMARK"),
        (f[(f.MARQUEE = 64)] = "MARQUEE"),
        (f[(f.MATH = 65)] = "MATH"),
        (f[(f.MENU = 66)] = "MENU"),
        (f[(f.META = 67)] = "META"),
        (f[(f.MGLYPH = 68)] = "MGLYPH"),
        (f[(f.MI = 69)] = "MI"),
        (f[(f.MO = 70)] = "MO"),
        (f[(f.MN = 71)] = "MN"),
        (f[(f.MS = 72)] = "MS"),
        (f[(f.MTEXT = 73)] = "MTEXT"),
        (f[(f.NAV = 74)] = "NAV"),
        (f[(f.NOBR = 75)] = "NOBR"),
        (f[(f.NOFRAMES = 76)] = "NOFRAMES"),
        (f[(f.NOEMBED = 77)] = "NOEMBED"),
        (f[(f.NOSCRIPT = 78)] = "NOSCRIPT"),
        (f[(f.OBJECT = 79)] = "OBJECT"),
        (f[(f.OL = 80)] = "OL"),
        (f[(f.OPTGROUP = 81)] = "OPTGROUP"),
        (f[(f.OPTION = 82)] = "OPTION"),
        (f[(f.P = 83)] = "P"),
        (f[(f.PARAM = 84)] = "PARAM"),
        (f[(f.PLAINTEXT = 85)] = "PLAINTEXT"),
        (f[(f.PRE = 86)] = "PRE"),
        (f[(f.RB = 87)] = "RB"),
        (f[(f.RP = 88)] = "RP"),
        (f[(f.RT = 89)] = "RT"),
        (f[(f.RTC = 90)] = "RTC"),
        (f[(f.RUBY = 91)] = "RUBY"),
        (f[(f.S = 92)] = "S"),
        (f[(f.SCRIPT = 93)] = "SCRIPT"),
        (f[(f.SECTION = 94)] = "SECTION"),
        (f[(f.SELECT = 95)] = "SELECT"),
        (f[(f.SOURCE = 96)] = "SOURCE"),
        (f[(f.SMALL = 97)] = "SMALL"),
        (f[(f.SPAN = 98)] = "SPAN"),
        (f[(f.STRIKE = 99)] = "STRIKE"),
        (f[(f.STRONG = 100)] = "STRONG"),
        (f[(f.STYLE = 101)] = "STYLE"),
        (f[(f.SUB = 102)] = "SUB"),
        (f[(f.SUMMARY = 103)] = "SUMMARY"),
        (f[(f.SUP = 104)] = "SUP"),
        (f[(f.TABLE = 105)] = "TABLE"),
        (f[(f.TBODY = 106)] = "TBODY"),
        (f[(f.TEMPLATE = 107)] = "TEMPLATE"),
        (f[(f.TEXTAREA = 108)] = "TEXTAREA"),
        (f[(f.TFOOT = 109)] = "TFOOT"),
        (f[(f.TD = 110)] = "TD"),
        (f[(f.TH = 111)] = "TH"),
        (f[(f.THEAD = 112)] = "THEAD"),
        (f[(f.TITLE = 113)] = "TITLE"),
        (f[(f.TR = 114)] = "TR"),
        (f[(f.TRACK = 115)] = "TRACK"),
        (f[(f.TT = 116)] = "TT"),
        (f[(f.U = 117)] = "U"),
        (f[(f.UL = 118)] = "UL"),
        (f[(f.SVG = 119)] = "SVG"),
        (f[(f.VAR = 120)] = "VAR"),
        (f[(f.WBR = 121)] = "WBR"),
        (f[(f.XMP = 122)] = "XMP");
      let ek = new Map([
        [O.A, L.A],
        [O.ADDRESS, L.ADDRESS],
        [O.ANNOTATION_XML, L.ANNOTATION_XML],
        [O.APPLET, L.APPLET],
        [O.AREA, L.AREA],
        [O.ARTICLE, L.ARTICLE],
        [O.ASIDE, L.ASIDE],
        [O.B, L.B],
        [O.BASE, L.BASE],
        [O.BASEFONT, L.BASEFONT],
        [O.BGSOUND, L.BGSOUND],
        [O.BIG, L.BIG],
        [O.BLOCKQUOTE, L.BLOCKQUOTE],
        [O.BODY, L.BODY],
        [O.BR, L.BR],
        [O.BUTTON, L.BUTTON],
        [O.CAPTION, L.CAPTION],
        [O.CENTER, L.CENTER],
        [O.CODE, L.CODE],
        [O.COL, L.COL],
        [O.COLGROUP, L.COLGROUP],
        [O.DD, L.DD],
        [O.DESC, L.DESC],
        [O.DETAILS, L.DETAILS],
        [O.DIALOG, L.DIALOG],
        [O.DIR, L.DIR],
        [O.DIV, L.DIV],
        [O.DL, L.DL],
        [O.DT, L.DT],
        [O.EM, L.EM],
        [O.EMBED, L.EMBED],
        [O.FIELDSET, L.FIELDSET],
        [O.FIGCAPTION, L.FIGCAPTION],
        [O.FIGURE, L.FIGURE],
        [O.FONT, L.FONT],
        [O.FOOTER, L.FOOTER],
        [O.FOREIGN_OBJECT, L.FOREIGN_OBJECT],
        [O.FORM, L.FORM],
        [O.FRAME, L.FRAME],
        [O.FRAMESET, L.FRAMESET],
        [O.H1, L.H1],
        [O.H2, L.H2],
        [O.H3, L.H3],
        [O.H4, L.H4],
        [O.H5, L.H5],
        [O.H6, L.H6],
        [O.HEAD, L.HEAD],
        [O.HEADER, L.HEADER],
        [O.HGROUP, L.HGROUP],
        [O.HR, L.HR],
        [O.HTML, L.HTML],
        [O.I, L.I],
        [O.IMG, L.IMG],
        [O.IMAGE, L.IMAGE],
        [O.INPUT, L.INPUT],
        [O.IFRAME, L.IFRAME],
        [O.KEYGEN, L.KEYGEN],
        [O.LABEL, L.LABEL],
        [O.LI, L.LI],
        [O.LINK, L.LINK],
        [O.LISTING, L.LISTING],
        [O.MAIN, L.MAIN],
        [O.MALIGNMARK, L.MALIGNMARK],
        [O.MARQUEE, L.MARQUEE],
        [O.MATH, L.MATH],
        [O.MENU, L.MENU],
        [O.META, L.META],
        [O.MGLYPH, L.MGLYPH],
        [O.MI, L.MI],
        [O.MO, L.MO],
        [O.MN, L.MN],
        [O.MS, L.MS],
        [O.MTEXT, L.MTEXT],
        [O.NAV, L.NAV],
        [O.NOBR, L.NOBR],
        [O.NOFRAMES, L.NOFRAMES],
        [O.NOEMBED, L.NOEMBED],
        [O.NOSCRIPT, L.NOSCRIPT],
        [O.OBJECT, L.OBJECT],
        [O.OL, L.OL],
        [O.OPTGROUP, L.OPTGROUP],
        [O.OPTION, L.OPTION],
        [O.P, L.P],
        [O.PARAM, L.PARAM],
        [O.PLAINTEXT, L.PLAINTEXT],
        [O.PRE, L.PRE],
        [O.RB, L.RB],
        [O.RP, L.RP],
        [O.RT, L.RT],
        [O.RTC, L.RTC],
        [O.RUBY, L.RUBY],
        [O.S, L.S],
        [O.SCRIPT, L.SCRIPT],
        [O.SECTION, L.SECTION],
        [O.SELECT, L.SELECT],
        [O.SOURCE, L.SOURCE],
        [O.SMALL, L.SMALL],
        [O.SPAN, L.SPAN],
        [O.STRIKE, L.STRIKE],
        [O.STRONG, L.STRONG],
        [O.STYLE, L.STYLE],
        [O.SUB, L.SUB],
        [O.SUMMARY, L.SUMMARY],
        [O.SUP, L.SUP],
        [O.TABLE, L.TABLE],
        [O.TBODY, L.TBODY],
        [O.TEMPLATE, L.TEMPLATE],
        [O.TEXTAREA, L.TEXTAREA],
        [O.TFOOT, L.TFOOT],
        [O.TD, L.TD],
        [O.TH, L.TH],
        [O.THEAD, L.THEAD],
        [O.TITLE, L.TITLE],
        [O.TR, L.TR],
        [O.TRACK, L.TRACK],
        [O.TT, L.TT],
        [O.U, L.U],
        [O.UL, L.UL],
        [O.SVG, L.SVG],
        [O.VAR, L.VAR],
        [O.WBR, L.WBR],
        [O.XMP, L.XMP],
      ]);
      function eD(e) {
        var t;
        return null !== (t = ek.get(e)) && void 0 !== t ? t : L.UNKNOWN;
      }
      let eR = L,
        eb = {
          [D.HTML]: new Set([
            eR.ADDRESS,
            eR.APPLET,
            eR.AREA,
            eR.ARTICLE,
            eR.ASIDE,
            eR.BASE,
            eR.BASEFONT,
            eR.BGSOUND,
            eR.BLOCKQUOTE,
            eR.BODY,
            eR.BR,
            eR.BUTTON,
            eR.CAPTION,
            eR.CENTER,
            eR.COL,
            eR.COLGROUP,
            eR.DD,
            eR.DETAILS,
            eR.DIR,
            eR.DIV,
            eR.DL,
            eR.DT,
            eR.EMBED,
            eR.FIELDSET,
            eR.FIGCAPTION,
            eR.FIGURE,
            eR.FOOTER,
            eR.FORM,
            eR.FRAME,
            eR.FRAMESET,
            eR.H1,
            eR.H2,
            eR.H3,
            eR.H4,
            eR.H5,
            eR.H6,
            eR.HEAD,
            eR.HEADER,
            eR.HGROUP,
            eR.HR,
            eR.HTML,
            eR.IFRAME,
            eR.IMG,
            eR.INPUT,
            eR.LI,
            eR.LINK,
            eR.LISTING,
            eR.MAIN,
            eR.MARQUEE,
            eR.MENU,
            eR.META,
            eR.NAV,
            eR.NOEMBED,
            eR.NOFRAMES,
            eR.NOSCRIPT,
            eR.OBJECT,
            eR.OL,
            eR.P,
            eR.PARAM,
            eR.PLAINTEXT,
            eR.PRE,
            eR.SCRIPT,
            eR.SECTION,
            eR.SELECT,
            eR.SOURCE,
            eR.STYLE,
            eR.SUMMARY,
            eR.TABLE,
            eR.TBODY,
            eR.TD,
            eR.TEMPLATE,
            eR.TEXTAREA,
            eR.TFOOT,
            eR.TH,
            eR.THEAD,
            eR.TITLE,
            eR.TR,
            eR.TRACK,
            eR.UL,
            eR.WBR,
            eR.XMP,
          ]),
          [D.MATHML]: new Set([
            eR.MI,
            eR.MO,
            eR.MN,
            eR.MS,
            eR.MTEXT,
            eR.ANNOTATION_XML,
          ]),
          [D.SVG]: new Set([eR.TITLE, eR.FOREIGN_OBJECT, eR.DESC]),
          [D.XLINK]: new Set(),
          [D.XML]: new Set(),
          [D.XMLNS]: new Set(),
        };
      function eO(e) {
        return (
          e === eR.H1 ||
          e === eR.H2 ||
          e === eR.H3 ||
          e === eR.H4 ||
          e === eR.H5 ||
          e === eR.H6
        );
      }
      O.STYLE, O.SCRIPT, O.XMP, O.IFRAME, O.NOEMBED, O.NOFRAMES, O.PLAINTEXT;
      let eL = new Map([
        [128, 8364],
        [130, 8218],
        [131, 402],
        [132, 8222],
        [133, 8230],
        [134, 8224],
        [135, 8225],
        [136, 710],
        [137, 8240],
        [138, 352],
        [139, 8249],
        [140, 338],
        [142, 381],
        [145, 8216],
        [146, 8217],
        [147, 8220],
        [148, 8221],
        [149, 8226],
        [150, 8211],
        [151, 8212],
        [152, 732],
        [153, 8482],
        [154, 353],
        [155, 8250],
        [156, 339],
        [158, 382],
        [159, 376],
      ]);
      ((E = y || (y = {}))[(E.DATA = 0)] = "DATA"),
        (E[(E.RCDATA = 1)] = "RCDATA"),
        (E[(E.RAWTEXT = 2)] = "RAWTEXT"),
        (E[(E.SCRIPT_DATA = 3)] = "SCRIPT_DATA"),
        (E[(E.PLAINTEXT = 4)] = "PLAINTEXT"),
        (E[(E.TAG_OPEN = 5)] = "TAG_OPEN"),
        (E[(E.END_TAG_OPEN = 6)] = "END_TAG_OPEN"),
        (E[(E.TAG_NAME = 7)] = "TAG_NAME"),
        (E[(E.RCDATA_LESS_THAN_SIGN = 8)] = "RCDATA_LESS_THAN_SIGN"),
        (E[(E.RCDATA_END_TAG_OPEN = 9)] = "RCDATA_END_TAG_OPEN"),
        (E[(E.RCDATA_END_TAG_NAME = 10)] = "RCDATA_END_TAG_NAME"),
        (E[(E.RAWTEXT_LESS_THAN_SIGN = 11)] = "RAWTEXT_LESS_THAN_SIGN"),
        (E[(E.RAWTEXT_END_TAG_OPEN = 12)] = "RAWTEXT_END_TAG_OPEN"),
        (E[(E.RAWTEXT_END_TAG_NAME = 13)] = "RAWTEXT_END_TAG_NAME"),
        (E[(E.SCRIPT_DATA_LESS_THAN_SIGN = 14)] = "SCRIPT_DATA_LESS_THAN_SIGN"),
        (E[(E.SCRIPT_DATA_END_TAG_OPEN = 15)] = "SCRIPT_DATA_END_TAG_OPEN"),
        (E[(E.SCRIPT_DATA_END_TAG_NAME = 16)] = "SCRIPT_DATA_END_TAG_NAME"),
        (E[(E.SCRIPT_DATA_ESCAPE_START = 17)] = "SCRIPT_DATA_ESCAPE_START"),
        (E[(E.SCRIPT_DATA_ESCAPE_START_DASH = 18)] =
          "SCRIPT_DATA_ESCAPE_START_DASH"),
        (E[(E.SCRIPT_DATA_ESCAPED = 19)] = "SCRIPT_DATA_ESCAPED"),
        (E[(E.SCRIPT_DATA_ESCAPED_DASH = 20)] = "SCRIPT_DATA_ESCAPED_DASH"),
        (E[(E.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] =
          "SCRIPT_DATA_ESCAPED_DASH_DASH"),
        (E[(E.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] =
          "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"),
        (E[(E.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] =
          "SCRIPT_DATA_ESCAPED_END_TAG_OPEN"),
        (E[(E.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] =
          "SCRIPT_DATA_ESCAPED_END_TAG_NAME"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] =
          "SCRIPT_DATA_DOUBLE_ESCAPE_START"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] = "SCRIPT_DATA_DOUBLE_ESCAPED"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_DASH"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"),
        (E[(E.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] =
          "SCRIPT_DATA_DOUBLE_ESCAPE_END"),
        (E[(E.BEFORE_ATTRIBUTE_NAME = 31)] = "BEFORE_ATTRIBUTE_NAME"),
        (E[(E.ATTRIBUTE_NAME = 32)] = "ATTRIBUTE_NAME"),
        (E[(E.AFTER_ATTRIBUTE_NAME = 33)] = "AFTER_ATTRIBUTE_NAME"),
        (E[(E.BEFORE_ATTRIBUTE_VALUE = 34)] = "BEFORE_ATTRIBUTE_VALUE"),
        (E[(E.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] =
          "ATTRIBUTE_VALUE_DOUBLE_QUOTED"),
        (E[(E.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] =
          "ATTRIBUTE_VALUE_SINGLE_QUOTED"),
        (E[(E.ATTRIBUTE_VALUE_UNQUOTED = 37)] = "ATTRIBUTE_VALUE_UNQUOTED"),
        (E[(E.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] =
          "AFTER_ATTRIBUTE_VALUE_QUOTED"),
        (E[(E.SELF_CLOSING_START_TAG = 39)] = "SELF_CLOSING_START_TAG"),
        (E[(E.BOGUS_COMMENT = 40)] = "BOGUS_COMMENT"),
        (E[(E.MARKUP_DECLARATION_OPEN = 41)] = "MARKUP_DECLARATION_OPEN"),
        (E[(E.COMMENT_START = 42)] = "COMMENT_START"),
        (E[(E.COMMENT_START_DASH = 43)] = "COMMENT_START_DASH"),
        (E[(E.COMMENT = 44)] = "COMMENT"),
        (E[(E.COMMENT_LESS_THAN_SIGN = 45)] = "COMMENT_LESS_THAN_SIGN"),
        (E[(E.COMMENT_LESS_THAN_SIGN_BANG = 46)] =
          "COMMENT_LESS_THAN_SIGN_BANG"),
        (E[(E.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] =
          "COMMENT_LESS_THAN_SIGN_BANG_DASH"),
        (E[(E.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] =
          "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"),
        (E[(E.COMMENT_END_DASH = 49)] = "COMMENT_END_DASH"),
        (E[(E.COMMENT_END = 50)] = "COMMENT_END"),
        (E[(E.COMMENT_END_BANG = 51)] = "COMMENT_END_BANG"),
        (E[(E.DOCTYPE = 52)] = "DOCTYPE"),
        (E[(E.BEFORE_DOCTYPE_NAME = 53)] = "BEFORE_DOCTYPE_NAME"),
        (E[(E.DOCTYPE_NAME = 54)] = "DOCTYPE_NAME"),
        (E[(E.AFTER_DOCTYPE_NAME = 55)] = "AFTER_DOCTYPE_NAME"),
        (E[(E.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] =
          "AFTER_DOCTYPE_PUBLIC_KEYWORD"),
        (E[(E.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] =
          "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"),
        (E[(E.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
          "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"),
        (E[(E.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
          "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"),
        (E[(E.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] =
          "AFTER_DOCTYPE_PUBLIC_IDENTIFIER"),
        (E[(E.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
          "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"),
        (E[(E.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] =
          "AFTER_DOCTYPE_SYSTEM_KEYWORD"),
        (E[(E.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] =
          "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"),
        (E[(E.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
          "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"),
        (E[(E.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
          "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"),
        (E[(E.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] =
          "AFTER_DOCTYPE_SYSTEM_IDENTIFIER"),
        (E[(E.BOGUS_DOCTYPE = 67)] = "BOGUS_DOCTYPE"),
        (E[(E.CDATA_SECTION = 68)] = "CDATA_SECTION"),
        (E[(E.CDATA_SECTION_BRACKET = 69)] = "CDATA_SECTION_BRACKET"),
        (E[(E.CDATA_SECTION_END = 70)] = "CDATA_SECTION_END"),
        (E[(E.CHARACTER_REFERENCE = 71)] = "CHARACTER_REFERENCE"),
        (E[(E.NAMED_CHARACTER_REFERENCE = 72)] = "NAMED_CHARACTER_REFERENCE"),
        (E[(E.AMBIGUOUS_AMPERSAND = 73)] = "AMBIGUOUS_AMPERSAND"),
        (E[(E.NUMERIC_CHARACTER_REFERENCE = 74)] =
          "NUMERIC_CHARACTER_REFERENCE"),
        (E[(E.HEXADEMICAL_CHARACTER_REFERENCE_START = 75)] =
          "HEXADEMICAL_CHARACTER_REFERENCE_START"),
        (E[(E.HEXADEMICAL_CHARACTER_REFERENCE = 76)] =
          "HEXADEMICAL_CHARACTER_REFERENCE"),
        (E[(E.DECIMAL_CHARACTER_REFERENCE = 77)] =
          "DECIMAL_CHARACTER_REFERENCE"),
        (E[(E.NUMERIC_CHARACTER_REFERENCE_END = 78)] =
          "NUMERIC_CHARACTER_REFERENCE_END");
      let ey = {
        DATA: y.DATA,
        RCDATA: y.RCDATA,
        RAWTEXT: y.RAWTEXT,
        SCRIPT_DATA: y.SCRIPT_DATA,
        PLAINTEXT: y.PLAINTEXT,
        CDATA_SECTION: y.CDATA_SECTION,
      };
      function eP(e) {
        return e >= A.DIGIT_0 && e <= A.DIGIT_9;
      }
      function eM(e) {
        return e >= A.LATIN_CAPITAL_A && e <= A.LATIN_CAPITAL_Z;
      }
      function ex(e) {
        return (e >= A.LATIN_SMALL_A && e <= A.LATIN_SMALL_Z) || eM(e);
      }
      function ev(e) {
        return ex(e) || eP(e);
      }
      function eF(e) {
        return e >= A.LATIN_CAPITAL_A && e <= A.LATIN_CAPITAL_F;
      }
      function eB(e) {
        return e >= A.LATIN_SMALL_A && e <= A.LATIN_SMALL_F;
      }
      function eH(e) {
        return (
          e === A.SPACE ||
          e === A.LINE_FEED ||
          e === A.TABULATION ||
          e === A.FORM_FEED
        );
      }
      function ew(e) {
        return eH(e) || e === A.SOLIDUS || e === A.GREATER_THAN_SIGN;
      }
      class eU {
        constructor(e, t) {
          (this.options = e),
            (this.handler = t),
            (this.paused = !1),
            (this.inLoop = !1),
            (this.inForeignNode = !1),
            (this.lastStartTagName = ""),
            (this.active = !1),
            (this.state = y.DATA),
            (this.returnState = y.DATA),
            (this.charRefCode = -1),
            (this.consumedAfterSnapshot = -1),
            (this.currentCharacterToken = null),
            (this.currentToken = null),
            (this.currentAttr = { name: "", value: "" }),
            (this.preprocessor = new eE(t)),
            (this.currentLocation = this.getCurrentLocation(-1));
        }
        _err(e) {
          var t, n;
          null === (n = (t = this.handler).onParseError) ||
            void 0 === n ||
            n.call(t, this.preprocessor.getError(e));
        }
        getCurrentLocation(e) {
          return this.options.sourceCodeLocationInfo
            ? {
                startLine: this.preprocessor.line,
                startCol: this.preprocessor.col - e,
                startOffset: this.preprocessor.offset - e,
                endLine: -1,
                endCol: -1,
                endOffset: -1,
              }
            : null;
        }
        _runParsingLoop() {
          if (!this.inLoop) {
            for (this.inLoop = !0; this.active && !this.paused; ) {
              this.consumedAfterSnapshot = 0;
              let e = this._consume();
              this._ensureHibernation() || this._callState(e);
            }
            this.inLoop = !1;
          }
        }
        pause() {
          this.paused = !0;
        }
        resume(e) {
          if (!this.paused) throw Error("Parser was already resumed");
          (this.paused = !1),
            this.inLoop ||
              (this._runParsingLoop(), this.paused || null == e || e());
        }
        write(e, t, n) {
          (this.active = !0),
            this.preprocessor.write(e, t),
            this._runParsingLoop(),
            this.paused || null == n || n();
        }
        insertHtmlAtCurrentPos(e) {
          (this.active = !0),
            this.preprocessor.insertHtmlAtCurrentPos(e),
            this._runParsingLoop();
        }
        _ensureHibernation() {
          return (
            !!this.preprocessor.endOfChunkHit &&
            (this._unconsume(this.consumedAfterSnapshot),
            (this.active = !1),
            !0)
          );
        }
        _consume() {
          return this.consumedAfterSnapshot++, this.preprocessor.advance();
        }
        _unconsume(e) {
          (this.consumedAfterSnapshot -= e), this.preprocessor.retreat(e);
        }
        _reconsumeInState(e, t) {
          (this.state = e), this._callState(t);
        }
        _advanceBy(e) {
          this.consumedAfterSnapshot += e;
          for (let t = 0; t < e; t++) this.preprocessor.advance();
        }
        _consumeSequenceIfMatch(e, t) {
          return (
            !!this.preprocessor.startsWith(e, t) &&
            (this._advanceBy(e.length - 1), !0)
          );
        }
        _createStartTagToken() {
          this.currentToken = {
            type: g.START_TAG,
            tagName: "",
            tagID: L.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(1),
          };
        }
        _createEndTagToken() {
          this.currentToken = {
            type: g.END_TAG,
            tagName: "",
            tagID: L.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(2),
          };
        }
        _createCommentToken(e) {
          this.currentToken = {
            type: g.COMMENT,
            data: "",
            location: this.getCurrentLocation(e),
          };
        }
        _createDoctypeToken(e) {
          this.currentToken = {
            type: g.DOCTYPE,
            name: e,
            forceQuirks: !1,
            publicId: null,
            systemId: null,
            location: this.currentLocation,
          };
        }
        _createCharacterToken(e, t) {
          this.currentCharacterToken = {
            type: e,
            chars: t,
            location: this.currentLocation,
          };
        }
        _createAttr(e) {
          (this.currentAttr = { name: e, value: "" }),
            (this.currentLocation = this.getCurrentLocation(0));
        }
        _leaveAttrName() {
          var e, t;
          let n = this.currentToken;
          null === em(n, this.currentAttr.name)
            ? (n.attrs.push(this.currentAttr),
              n.location &&
                this.currentLocation &&
                (((null !== (e = (t = n.location).attrs) && void 0 !== e
                  ? e
                  : (t.attrs = Object.create(null)))[this.currentAttr.name] =
                  this.currentLocation),
                this._leaveAttrValue()))
            : this._err(_.duplicateAttribute);
        }
        _leaveAttrValue() {
          this.currentLocation &&
            ((this.currentLocation.endLine = this.preprocessor.line),
            (this.currentLocation.endCol = this.preprocessor.col),
            (this.currentLocation.endOffset = this.preprocessor.offset));
        }
        prepareToken(e) {
          this._emitCurrentCharacterToken(e.location),
            (this.currentToken = null),
            e.location &&
              ((e.location.endLine = this.preprocessor.line),
              (e.location.endCol = this.preprocessor.col + 1),
              (e.location.endOffset = this.preprocessor.offset + 1)),
            (this.currentLocation = this.getCurrentLocation(-1));
        }
        emitCurrentTagToken() {
          let e = this.currentToken;
          this.prepareToken(e),
            (e.tagID = eD(e.tagName)),
            e.type === g.START_TAG
              ? ((this.lastStartTagName = e.tagName),
                this.handler.onStartTag(e))
              : (e.attrs.length > 0 && this._err(_.endTagWithAttributes),
                e.selfClosing && this._err(_.endTagWithTrailingSolidus),
                this.handler.onEndTag(e)),
            this.preprocessor.dropParsedChunk();
        }
        emitCurrentComment(e) {
          this.prepareToken(e),
            this.handler.onComment(e),
            this.preprocessor.dropParsedChunk();
        }
        emitCurrentDoctype(e) {
          this.prepareToken(e),
            this.handler.onDoctype(e),
            this.preprocessor.dropParsedChunk();
        }
        _emitCurrentCharacterToken(e) {
          if (this.currentCharacterToken) {
            switch (
              (e &&
                this.currentCharacterToken.location &&
                ((this.currentCharacterToken.location.endLine = e.startLine),
                (this.currentCharacterToken.location.endCol = e.startCol),
                (this.currentCharacterToken.location.endOffset =
                  e.startOffset)),
              this.currentCharacterToken.type)
            ) {
              case g.CHARACTER:
                this.handler.onCharacter(this.currentCharacterToken);
                break;
              case g.NULL_CHARACTER:
                this.handler.onNullCharacter(this.currentCharacterToken);
                break;
              case g.WHITESPACE_CHARACTER:
                this.handler.onWhitespaceCharacter(this.currentCharacterToken);
            }
            this.currentCharacterToken = null;
          }
        }
        _emitEOFToken() {
          let e = this.getCurrentLocation(0);
          e &&
            ((e.endLine = e.startLine),
            (e.endCol = e.startCol),
            (e.endOffset = e.startOffset)),
            this._emitCurrentCharacterToken(e),
            this.handler.onEof({ type: g.EOF, location: e }),
            (this.active = !1);
        }
        _appendCharToCurrentCharacterToken(e, t) {
          if (this.currentCharacterToken) {
            if (this.currentCharacterToken.type !== e)
              (this.currentLocation = this.getCurrentLocation(0)),
                this._emitCurrentCharacterToken(this.currentLocation),
                this.preprocessor.dropParsedChunk();
            else {
              this.currentCharacterToken.chars += t;
              return;
            }
          }
          this._createCharacterToken(e, t);
        }
        _emitCodePoint(e) {
          let t = eH(e)
            ? g.WHITESPACE_CHARACTER
            : e === A.NULL
            ? g.NULL_CHARACTER
            : g.CHARACTER;
          this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
        }
        _emitChars(e) {
          this._appendCharToCurrentCharacterToken(g.CHARACTER, e);
        }
        _matchNamedCharacterReference(e) {
          let t = null,
            n = 0,
            r = !1;
          for (
            let a = 0, s = eT[0];
            a >= 0 && !((a = eS(eT, s, a + 1, e)) < 0);
            e = this._consume()
          ) {
            n += 1;
            let o = (s = eT[a]) & N.VALUE_LENGTH;
            if (o) {
              var i;
              let s = (o >> 14) - 1;
              if (
                (e !== A.SEMICOLON &&
                this._isCharacterReferenceInAttribute() &&
                ((i = this.preprocessor.peek(1)) === A.EQUALS_SIGN || ev(i))
                  ? ((t = [A.AMPERSAND]), (a += s))
                  : ((t =
                      0 === s
                        ? [eT[a] & ~N.VALUE_LENGTH]
                        : 1 === s
                        ? [eT[++a]]
                        : [eT[++a], eT[++a]]),
                    (n = 0),
                    (r = e !== A.SEMICOLON)),
                0 === s)
              ) {
                this._consume();
                break;
              }
            }
          }
          return (
            this._unconsume(n),
            r &&
              !this.preprocessor.endOfChunkHit &&
              this._err(_.missingSemicolonAfterCharacterReference),
            this._unconsume(1),
            t
          );
        }
        _isCharacterReferenceInAttribute() {
          return (
            this.returnState === y.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
            this.returnState === y.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
            this.returnState === y.ATTRIBUTE_VALUE_UNQUOTED
          );
        }
        _flushCodePointConsumedAsCharacterReference(e) {
          this._isCharacterReferenceInAttribute()
            ? (this.currentAttr.value += String.fromCodePoint(e))
            : this._emitCodePoint(e);
        }
        _callState(e) {
          switch (this.state) {
            case y.DATA:
              this._stateData(e);
              break;
            case y.RCDATA:
              this._stateRcdata(e);
              break;
            case y.RAWTEXT:
              this._stateRawtext(e);
              break;
            case y.SCRIPT_DATA:
              this._stateScriptData(e);
              break;
            case y.PLAINTEXT:
              this._statePlaintext(e);
              break;
            case y.TAG_OPEN:
              this._stateTagOpen(e);
              break;
            case y.END_TAG_OPEN:
              this._stateEndTagOpen(e);
              break;
            case y.TAG_NAME:
              this._stateTagName(e);
              break;
            case y.RCDATA_LESS_THAN_SIGN:
              this._stateRcdataLessThanSign(e);
              break;
            case y.RCDATA_END_TAG_OPEN:
              this._stateRcdataEndTagOpen(e);
              break;
            case y.RCDATA_END_TAG_NAME:
              this._stateRcdataEndTagName(e);
              break;
            case y.RAWTEXT_LESS_THAN_SIGN:
              this._stateRawtextLessThanSign(e);
              break;
            case y.RAWTEXT_END_TAG_OPEN:
              this._stateRawtextEndTagOpen(e);
              break;
            case y.RAWTEXT_END_TAG_NAME:
              this._stateRawtextEndTagName(e);
              break;
            case y.SCRIPT_DATA_LESS_THAN_SIGN:
              this._stateScriptDataLessThanSign(e);
              break;
            case y.SCRIPT_DATA_END_TAG_OPEN:
              this._stateScriptDataEndTagOpen(e);
              break;
            case y.SCRIPT_DATA_END_TAG_NAME:
              this._stateScriptDataEndTagName(e);
              break;
            case y.SCRIPT_DATA_ESCAPE_START:
              this._stateScriptDataEscapeStart(e);
              break;
            case y.SCRIPT_DATA_ESCAPE_START_DASH:
              this._stateScriptDataEscapeStartDash(e);
              break;
            case y.SCRIPT_DATA_ESCAPED:
              this._stateScriptDataEscaped(e);
              break;
            case y.SCRIPT_DATA_ESCAPED_DASH:
              this._stateScriptDataEscapedDash(e);
              break;
            case y.SCRIPT_DATA_ESCAPED_DASH_DASH:
              this._stateScriptDataEscapedDashDash(e);
              break;
            case y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
              this._stateScriptDataEscapedLessThanSign(e);
              break;
            case y.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
              this._stateScriptDataEscapedEndTagOpen(e);
              break;
            case y.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
              this._stateScriptDataEscapedEndTagName(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPE_START:
              this._stateScriptDataDoubleEscapeStart(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPED:
              this._stateScriptDataDoubleEscaped(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
              this._stateScriptDataDoubleEscapedDash(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
              this._stateScriptDataDoubleEscapedDashDash(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
              this._stateScriptDataDoubleEscapedLessThanSign(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPE_END:
              this._stateScriptDataDoubleEscapeEnd(e);
              break;
            case y.BEFORE_ATTRIBUTE_NAME:
              this._stateBeforeAttributeName(e);
              break;
            case y.ATTRIBUTE_NAME:
              this._stateAttributeName(e);
              break;
            case y.AFTER_ATTRIBUTE_NAME:
              this._stateAfterAttributeName(e);
              break;
            case y.BEFORE_ATTRIBUTE_VALUE:
              this._stateBeforeAttributeValue(e);
              break;
            case y.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
              this._stateAttributeValueDoubleQuoted(e);
              break;
            case y.ATTRIBUTE_VALUE_SINGLE_QUOTED:
              this._stateAttributeValueSingleQuoted(e);
              break;
            case y.ATTRIBUTE_VALUE_UNQUOTED:
              this._stateAttributeValueUnquoted(e);
              break;
            case y.AFTER_ATTRIBUTE_VALUE_QUOTED:
              this._stateAfterAttributeValueQuoted(e);
              break;
            case y.SELF_CLOSING_START_TAG:
              this._stateSelfClosingStartTag(e);
              break;
            case y.BOGUS_COMMENT:
              this._stateBogusComment(e);
              break;
            case y.MARKUP_DECLARATION_OPEN:
              this._stateMarkupDeclarationOpen(e);
              break;
            case y.COMMENT_START:
              this._stateCommentStart(e);
              break;
            case y.COMMENT_START_DASH:
              this._stateCommentStartDash(e);
              break;
            case y.COMMENT:
              this._stateComment(e);
              break;
            case y.COMMENT_LESS_THAN_SIGN:
              this._stateCommentLessThanSign(e);
              break;
            case y.COMMENT_LESS_THAN_SIGN_BANG:
              this._stateCommentLessThanSignBang(e);
              break;
            case y.COMMENT_LESS_THAN_SIGN_BANG_DASH:
              this._stateCommentLessThanSignBangDash(e);
              break;
            case y.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
              this._stateCommentLessThanSignBangDashDash(e);
              break;
            case y.COMMENT_END_DASH:
              this._stateCommentEndDash(e);
              break;
            case y.COMMENT_END:
              this._stateCommentEnd(e);
              break;
            case y.COMMENT_END_BANG:
              this._stateCommentEndBang(e);
              break;
            case y.DOCTYPE:
              this._stateDoctype(e);
              break;
            case y.BEFORE_DOCTYPE_NAME:
              this._stateBeforeDoctypeName(e);
              break;
            case y.DOCTYPE_NAME:
              this._stateDoctypeName(e);
              break;
            case y.AFTER_DOCTYPE_NAME:
              this._stateAfterDoctypeName(e);
              break;
            case y.AFTER_DOCTYPE_PUBLIC_KEYWORD:
              this._stateAfterDoctypePublicKeyword(e);
              break;
            case y.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
              this._stateBeforeDoctypePublicIdentifier(e);
              break;
            case y.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
              this._stateDoctypePublicIdentifierDoubleQuoted(e);
              break;
            case y.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
              this._stateDoctypePublicIdentifierSingleQuoted(e);
              break;
            case y.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
              this._stateAfterDoctypePublicIdentifier(e);
              break;
            case y.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
              this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
              break;
            case y.AFTER_DOCTYPE_SYSTEM_KEYWORD:
              this._stateAfterDoctypeSystemKeyword(e);
              break;
            case y.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
              this._stateBeforeDoctypeSystemIdentifier(e);
              break;
            case y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
              this._stateDoctypeSystemIdentifierDoubleQuoted(e);
              break;
            case y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
              this._stateDoctypeSystemIdentifierSingleQuoted(e);
              break;
            case y.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
              this._stateAfterDoctypeSystemIdentifier(e);
              break;
            case y.BOGUS_DOCTYPE:
              this._stateBogusDoctype(e);
              break;
            case y.CDATA_SECTION:
              this._stateCdataSection(e);
              break;
            case y.CDATA_SECTION_BRACKET:
              this._stateCdataSectionBracket(e);
              break;
            case y.CDATA_SECTION_END:
              this._stateCdataSectionEnd(e);
              break;
            case y.CHARACTER_REFERENCE:
              this._stateCharacterReference(e);
              break;
            case y.NAMED_CHARACTER_REFERENCE:
              this._stateNamedCharacterReference(e);
              break;
            case y.AMBIGUOUS_AMPERSAND:
              this._stateAmbiguousAmpersand(e);
              break;
            case y.NUMERIC_CHARACTER_REFERENCE:
              this._stateNumericCharacterReference(e);
              break;
            case y.HEXADEMICAL_CHARACTER_REFERENCE_START:
              this._stateHexademicalCharacterReferenceStart(e);
              break;
            case y.HEXADEMICAL_CHARACTER_REFERENCE:
              this._stateHexademicalCharacterReference(e);
              break;
            case y.DECIMAL_CHARACTER_REFERENCE:
              this._stateDecimalCharacterReference(e);
              break;
            case y.NUMERIC_CHARACTER_REFERENCE_END:
              this._stateNumericCharacterReferenceEnd(e);
              break;
            default:
              throw Error("Unknown state");
          }
        }
        _stateData(e) {
          switch (e) {
            case A.LESS_THAN_SIGN:
              this.state = y.TAG_OPEN;
              break;
            case A.AMPERSAND:
              (this.returnState = y.DATA), (this.state = y.CHARACTER_REFERENCE);
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), this._emitCodePoint(e);
              break;
            case A.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateRcdata(e) {
          switch (e) {
            case A.AMPERSAND:
              (this.returnState = y.RCDATA),
                (this.state = y.CHARACTER_REFERENCE);
              break;
            case A.LESS_THAN_SIGN:
              this.state = y.RCDATA_LESS_THAN_SIGN;
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateRawtext(e) {
          switch (e) {
            case A.LESS_THAN_SIGN:
              this.state = y.RAWTEXT_LESS_THAN_SIGN;
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptData(e) {
          switch (e) {
            case A.LESS_THAN_SIGN:
              this.state = y.SCRIPT_DATA_LESS_THAN_SIGN;
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _statePlaintext(e) {
          switch (e) {
            case A.NULL:
              this._err(_.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateTagOpen(e) {
          if (ex(e))
            this._createStartTagToken(),
              (this.state = y.TAG_NAME),
              this._stateTagName(e);
          else
            switch (e) {
              case A.EXCLAMATION_MARK:
                this.state = y.MARKUP_DECLARATION_OPEN;
                break;
              case A.SOLIDUS:
                this.state = y.END_TAG_OPEN;
                break;
              case A.QUESTION_MARK:
                this._err(_.unexpectedQuestionMarkInsteadOfTagName),
                  this._createCommentToken(1),
                  (this.state = y.BOGUS_COMMENT),
                  this._stateBogusComment(e);
                break;
              case A.EOF:
                this._err(_.eofBeforeTagName),
                  this._emitChars("<"),
                  this._emitEOFToken();
                break;
              default:
                this._err(_.invalidFirstCharacterOfTagName),
                  this._emitChars("<"),
                  (this.state = y.DATA),
                  this._stateData(e);
            }
        }
        _stateEndTagOpen(e) {
          if (ex(e))
            this._createEndTagToken(),
              (this.state = y.TAG_NAME),
              this._stateTagName(e);
          else
            switch (e) {
              case A.GREATER_THAN_SIGN:
                this._err(_.missingEndTagName), (this.state = y.DATA);
                break;
              case A.EOF:
                this._err(_.eofBeforeTagName),
                  this._emitChars("</"),
                  this._emitEOFToken();
                break;
              default:
                this._err(_.invalidFirstCharacterOfTagName),
                  this._createCommentToken(2),
                  (this.state = y.BOGUS_COMMENT),
                  this._stateBogusComment(e);
            }
        }
        _stateTagName(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = y.BEFORE_ATTRIBUTE_NAME;
              break;
            case A.SOLIDUS:
              this.state = y.SELF_CLOSING_START_TAG;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentTagToken();
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), (t.tagName += "�");
              break;
            case A.EOF:
              this._err(_.eofInTag), this._emitEOFToken();
              break;
            default:
              t.tagName += String.fromCodePoint(eM(e) ? e + 32 : e);
          }
        }
        _stateRcdataLessThanSign(e) {
          e === A.SOLIDUS
            ? (this.state = y.RCDATA_END_TAG_OPEN)
            : (this._emitChars("<"),
              (this.state = y.RCDATA),
              this._stateRcdata(e));
        }
        _stateRcdataEndTagOpen(e) {
          ex(e)
            ? ((this.state = y.RCDATA_END_TAG_NAME),
              this._stateRcdataEndTagName(e))
            : (this._emitChars("</"),
              (this.state = y.RCDATA),
              this._stateRcdata(e));
        }
        handleSpecialEndTag(e) {
          if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
            return !this._ensureHibernation();
          switch (
            (this._createEndTagToken(),
            (this.currentToken.tagName = this.lastStartTagName),
            this.preprocessor.peek(this.lastStartTagName.length))
          ) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              return (
                this._advanceBy(this.lastStartTagName.length),
                (this.state = y.BEFORE_ATTRIBUTE_NAME),
                !1
              );
            case A.SOLIDUS:
              return (
                this._advanceBy(this.lastStartTagName.length),
                (this.state = y.SELF_CLOSING_START_TAG),
                !1
              );
            case A.GREATER_THAN_SIGN:
              return (
                this._advanceBy(this.lastStartTagName.length),
                this.emitCurrentTagToken(),
                (this.state = y.DATA),
                !1
              );
            default:
              return !this._ensureHibernation();
          }
        }
        _stateRcdataEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = y.RCDATA),
            this._stateRcdata(e));
        }
        _stateRawtextLessThanSign(e) {
          e === A.SOLIDUS
            ? (this.state = y.RAWTEXT_END_TAG_OPEN)
            : (this._emitChars("<"),
              (this.state = y.RAWTEXT),
              this._stateRawtext(e));
        }
        _stateRawtextEndTagOpen(e) {
          ex(e)
            ? ((this.state = y.RAWTEXT_END_TAG_NAME),
              this._stateRawtextEndTagName(e))
            : (this._emitChars("</"),
              (this.state = y.RAWTEXT),
              this._stateRawtext(e));
        }
        _stateRawtextEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = y.RAWTEXT),
            this._stateRawtext(e));
        }
        _stateScriptDataLessThanSign(e) {
          switch (e) {
            case A.SOLIDUS:
              this.state = y.SCRIPT_DATA_END_TAG_OPEN;
              break;
            case A.EXCLAMATION_MARK:
              (this.state = y.SCRIPT_DATA_ESCAPE_START), this._emitChars("<!");
              break;
            default:
              this._emitChars("<"),
                (this.state = y.SCRIPT_DATA),
                this._stateScriptData(e);
          }
        }
        _stateScriptDataEndTagOpen(e) {
          ex(e)
            ? ((this.state = y.SCRIPT_DATA_END_TAG_NAME),
              this._stateScriptDataEndTagName(e))
            : (this._emitChars("</"),
              (this.state = y.SCRIPT_DATA),
              this._stateScriptData(e));
        }
        _stateScriptDataEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = y.SCRIPT_DATA),
            this._stateScriptData(e));
        }
        _stateScriptDataEscapeStart(e) {
          e === A.HYPHEN_MINUS
            ? ((this.state = y.SCRIPT_DATA_ESCAPE_START_DASH),
              this._emitChars("-"))
            : ((this.state = y.SCRIPT_DATA), this._stateScriptData(e));
        }
        _stateScriptDataEscapeStartDash(e) {
          e === A.HYPHEN_MINUS
            ? ((this.state = y.SCRIPT_DATA_ESCAPED_DASH_DASH),
              this._emitChars("-"))
            : ((this.state = y.SCRIPT_DATA), this._stateScriptData(e));
        }
        _stateScriptDataEscaped(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              (this.state = y.SCRIPT_DATA_ESCAPED_DASH), this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              this.state = y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._err(_.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedDash(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              (this.state = y.SCRIPT_DATA_ESCAPED_DASH_DASH),
                this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              this.state = y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter),
                (this.state = y.SCRIPT_DATA_ESCAPED),
                this._emitChars("�");
              break;
            case A.EOF:
              this._err(_.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = y.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedDashDash(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              this.state = y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = y.SCRIPT_DATA), this._emitChars(">");
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter),
                (this.state = y.SCRIPT_DATA_ESCAPED),
                this._emitChars("�");
              break;
            case A.EOF:
              this._err(_.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = y.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedLessThanSign(e) {
          e === A.SOLIDUS
            ? (this.state = y.SCRIPT_DATA_ESCAPED_END_TAG_OPEN)
            : ex(e)
            ? (this._emitChars("<"),
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPE_START),
              this._stateScriptDataDoubleEscapeStart(e))
            : (this._emitChars("<"),
              (this.state = y.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataEscapedEndTagOpen(e) {
          ex(e)
            ? ((this.state = y.SCRIPT_DATA_ESCAPED_END_TAG_NAME),
              this._stateScriptDataEscapedEndTagName(e))
            : (this._emitChars("</"),
              (this.state = y.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataEscapedEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = y.SCRIPT_DATA_ESCAPED),
            this._stateScriptDataEscaped(e));
        }
        _stateScriptDataDoubleEscapeStart(e) {
          if (
            this.preprocessor.startsWith(eh.SCRIPT, !1) &&
            ew(this.preprocessor.peek(eh.SCRIPT.length))
          ) {
            this._emitCodePoint(e);
            for (let e = 0; e < eh.SCRIPT.length; e++)
              this._emitCodePoint(this._consume());
            this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED;
          } else
            this._ensureHibernation() ||
              ((this.state = y.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataDoubleEscaped(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH),
                this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), this._emitChars("�");
              break;
            case A.EOF:
              this._err(_.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedDash(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH),
                this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter),
                (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitChars("�");
              break;
            case A.EOF:
              this._err(_.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedDashDash(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              this._emitChars("-");
              break;
            case A.LESS_THAN_SIGN:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = y.SCRIPT_DATA), this._emitChars(">");
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter),
                (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitChars("�");
              break;
            case A.EOF:
              this._err(_.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedLessThanSign(e) {
          e === A.SOLIDUS
            ? ((this.state = y.SCRIPT_DATA_DOUBLE_ESCAPE_END),
              this._emitChars("/"))
            : ((this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._stateScriptDataDoubleEscaped(e));
        }
        _stateScriptDataDoubleEscapeEnd(e) {
          if (
            this.preprocessor.startsWith(eh.SCRIPT, !1) &&
            ew(this.preprocessor.peek(eh.SCRIPT.length))
          ) {
            this._emitCodePoint(e);
            for (let e = 0; e < eh.SCRIPT.length; e++)
              this._emitCodePoint(this._consume());
            this.state = y.SCRIPT_DATA_ESCAPED;
          } else
            this._ensureHibernation() ||
              ((this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._stateScriptDataDoubleEscaped(e));
        }
        _stateBeforeAttributeName(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.SOLIDUS:
            case A.GREATER_THAN_SIGN:
            case A.EOF:
              (this.state = y.AFTER_ATTRIBUTE_NAME),
                this._stateAfterAttributeName(e);
              break;
            case A.EQUALS_SIGN:
              this._err(_.unexpectedEqualsSignBeforeAttributeName),
                this._createAttr("="),
                (this.state = y.ATTRIBUTE_NAME);
              break;
            default:
              this._createAttr(""),
                (this.state = y.ATTRIBUTE_NAME),
                this._stateAttributeName(e);
          }
        }
        _stateAttributeName(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
            case A.SOLIDUS:
            case A.GREATER_THAN_SIGN:
            case A.EOF:
              this._leaveAttrName(),
                (this.state = y.AFTER_ATTRIBUTE_NAME),
                this._stateAfterAttributeName(e);
              break;
            case A.EQUALS_SIGN:
              this._leaveAttrName(), (this.state = y.BEFORE_ATTRIBUTE_VALUE);
              break;
            case A.QUOTATION_MARK:
            case A.APOSTROPHE:
            case A.LESS_THAN_SIGN:
              this._err(_.unexpectedCharacterInAttributeName),
                (this.currentAttr.name += String.fromCodePoint(e));
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter),
                (this.currentAttr.name += "�");
              break;
            default:
              this.currentAttr.name += String.fromCodePoint(eM(e) ? e + 32 : e);
          }
        }
        _stateAfterAttributeName(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.SOLIDUS:
              this.state = y.SELF_CLOSING_START_TAG;
              break;
            case A.EQUALS_SIGN:
              this.state = y.BEFORE_ATTRIBUTE_VALUE;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentTagToken();
              break;
            case A.EOF:
              this._err(_.eofInTag), this._emitEOFToken();
              break;
            default:
              this._createAttr(""),
                (this.state = y.ATTRIBUTE_NAME),
                this._stateAttributeName(e);
          }
        }
        _stateBeforeAttributeValue(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.QUOTATION_MARK:
              this.state = y.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
              break;
            case A.APOSTROPHE:
              this.state = y.ATTRIBUTE_VALUE_SINGLE_QUOTED;
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.missingAttributeValue),
                (this.state = y.DATA),
                this.emitCurrentTagToken();
              break;
            default:
              (this.state = y.ATTRIBUTE_VALUE_UNQUOTED),
                this._stateAttributeValueUnquoted(e);
          }
        }
        _stateAttributeValueDoubleQuoted(e) {
          switch (e) {
            case A.QUOTATION_MARK:
              this.state = y.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            case A.AMPERSAND:
              (this.returnState = y.ATTRIBUTE_VALUE_DOUBLE_QUOTED),
                (this.state = y.CHARACTER_REFERENCE);
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case A.EOF:
              this._err(_.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAttributeValueSingleQuoted(e) {
          switch (e) {
            case A.APOSTROPHE:
              this.state = y.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            case A.AMPERSAND:
              (this.returnState = y.ATTRIBUTE_VALUE_SINGLE_QUOTED),
                (this.state = y.CHARACTER_REFERENCE);
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case A.EOF:
              this._err(_.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAttributeValueUnquoted(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this._leaveAttrValue(), (this.state = y.BEFORE_ATTRIBUTE_NAME);
              break;
            case A.AMPERSAND:
              (this.returnState = y.ATTRIBUTE_VALUE_UNQUOTED),
                (this.state = y.CHARACTER_REFERENCE);
              break;
            case A.GREATER_THAN_SIGN:
              this._leaveAttrValue(),
                (this.state = y.DATA),
                this.emitCurrentTagToken();
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case A.QUOTATION_MARK:
            case A.APOSTROPHE:
            case A.LESS_THAN_SIGN:
            case A.EQUALS_SIGN:
            case A.GRAVE_ACCENT:
              this._err(_.unexpectedCharacterInUnquotedAttributeValue),
                (this.currentAttr.value += String.fromCodePoint(e));
              break;
            case A.EOF:
              this._err(_.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAfterAttributeValueQuoted(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this._leaveAttrValue(), (this.state = y.BEFORE_ATTRIBUTE_NAME);
              break;
            case A.SOLIDUS:
              this._leaveAttrValue(), (this.state = y.SELF_CLOSING_START_TAG);
              break;
            case A.GREATER_THAN_SIGN:
              this._leaveAttrValue(),
                (this.state = y.DATA),
                this.emitCurrentTagToken();
              break;
            case A.EOF:
              this._err(_.eofInTag), this._emitEOFToken();
              break;
            default:
              this._err(_.missingWhitespaceBetweenAttributes),
                (this.state = y.BEFORE_ATTRIBUTE_NAME),
                this._stateBeforeAttributeName(e);
          }
        }
        _stateSelfClosingStartTag(e) {
          switch (e) {
            case A.GREATER_THAN_SIGN:
              (this.currentToken.selfClosing = !0),
                (this.state = y.DATA),
                this.emitCurrentTagToken();
              break;
            case A.EOF:
              this._err(_.eofInTag), this._emitEOFToken();
              break;
            default:
              this._err(_.unexpectedSolidusInTag),
                (this.state = y.BEFORE_ATTRIBUTE_NAME),
                this._stateBeforeAttributeName(e);
          }
        }
        _stateBogusComment(e) {
          let t = this.currentToken;
          switch (e) {
            case A.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentComment(t);
              break;
            case A.EOF:
              this.emitCurrentComment(t), this._emitEOFToken();
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), (t.data += "�");
              break;
            default:
              t.data += String.fromCodePoint(e);
          }
        }
        _stateMarkupDeclarationOpen(e) {
          this._consumeSequenceIfMatch(eh.DASH_DASH, !0)
            ? (this._createCommentToken(eh.DASH_DASH.length + 1),
              (this.state = y.COMMENT_START))
            : this._consumeSequenceIfMatch(eh.DOCTYPE, !1)
            ? ((this.currentLocation = this.getCurrentLocation(
                eh.DOCTYPE.length + 1
              )),
              (this.state = y.DOCTYPE))
            : this._consumeSequenceIfMatch(eh.CDATA_START, !0)
            ? this.inForeignNode
              ? (this.state = y.CDATA_SECTION)
              : (this._err(_.cdataInHtmlContent),
                this._createCommentToken(eh.CDATA_START.length + 1),
                (this.currentToken.data = "[CDATA["),
                (this.state = y.BOGUS_COMMENT))
            : this._ensureHibernation() ||
              (this._err(_.incorrectlyOpenedComment),
              this._createCommentToken(2),
              (this.state = y.BOGUS_COMMENT),
              this._stateBogusComment(e));
        }
        _stateCommentStart(e) {
          switch (e) {
            case A.HYPHEN_MINUS:
              this.state = y.COMMENT_START_DASH;
              break;
            case A.GREATER_THAN_SIGN: {
              this._err(_.abruptClosingOfEmptyComment), (this.state = y.DATA);
              let e = this.currentToken;
              this.emitCurrentComment(e);
              break;
            }
            default:
              (this.state = y.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentStartDash(e) {
          let t = this.currentToken;
          switch (e) {
            case A.HYPHEN_MINUS:
              this.state = y.COMMENT_END;
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.abruptClosingOfEmptyComment),
                (this.state = y.DATA),
                this.emitCurrentComment(t);
              break;
            case A.EOF:
              this._err(_.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "-"), (this.state = y.COMMENT), this._stateComment(e);
          }
        }
        _stateComment(e) {
          let t = this.currentToken;
          switch (e) {
            case A.HYPHEN_MINUS:
              this.state = y.COMMENT_END_DASH;
              break;
            case A.LESS_THAN_SIGN:
              (t.data += "<"), (this.state = y.COMMENT_LESS_THAN_SIGN);
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), (t.data += "�");
              break;
            case A.EOF:
              this._err(_.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              t.data += String.fromCodePoint(e);
          }
        }
        _stateCommentLessThanSign(e) {
          let t = this.currentToken;
          switch (e) {
            case A.EXCLAMATION_MARK:
              (t.data += "!"), (this.state = y.COMMENT_LESS_THAN_SIGN_BANG);
              break;
            case A.LESS_THAN_SIGN:
              t.data += "<";
              break;
            default:
              (this.state = y.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentLessThanSignBang(e) {
          e === A.HYPHEN_MINUS
            ? (this.state = y.COMMENT_LESS_THAN_SIGN_BANG_DASH)
            : ((this.state = y.COMMENT), this._stateComment(e));
        }
        _stateCommentLessThanSignBangDash(e) {
          e === A.HYPHEN_MINUS
            ? (this.state = y.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH)
            : ((this.state = y.COMMENT_END_DASH), this._stateCommentEndDash(e));
        }
        _stateCommentLessThanSignBangDashDash(e) {
          e !== A.GREATER_THAN_SIGN &&
            e !== A.EOF &&
            this._err(_.nestedComment),
            (this.state = y.COMMENT_END),
            this._stateCommentEnd(e);
        }
        _stateCommentEndDash(e) {
          let t = this.currentToken;
          switch (e) {
            case A.HYPHEN_MINUS:
              this.state = y.COMMENT_END;
              break;
            case A.EOF:
              this._err(_.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "-"), (this.state = y.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentEnd(e) {
          let t = this.currentToken;
          switch (e) {
            case A.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentComment(t);
              break;
            case A.EXCLAMATION_MARK:
              this.state = y.COMMENT_END_BANG;
              break;
            case A.HYPHEN_MINUS:
              t.data += "-";
              break;
            case A.EOF:
              this._err(_.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "--"), (this.state = y.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentEndBang(e) {
          let t = this.currentToken;
          switch (e) {
            case A.HYPHEN_MINUS:
              (t.data += "--!"), (this.state = y.COMMENT_END_DASH);
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.incorrectlyClosedComment),
                (this.state = y.DATA),
                this.emitCurrentComment(t);
              break;
            case A.EOF:
              this._err(_.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "--!"),
                (this.state = y.COMMENT),
                this._stateComment(e);
          }
        }
        _stateDoctype(e) {
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = y.BEFORE_DOCTYPE_NAME;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = y.BEFORE_DOCTYPE_NAME),
                this._stateBeforeDoctypeName(e);
              break;
            case A.EOF: {
              this._err(_.eofInDoctype), this._createDoctypeToken(null);
              let e = this.currentToken;
              (e.forceQuirks = !0),
                this.emitCurrentDoctype(e),
                this._emitEOFToken();
              break;
            }
            default:
              this._err(_.missingWhitespaceBeforeDoctypeName),
                (this.state = y.BEFORE_DOCTYPE_NAME),
                this._stateBeforeDoctypeName(e);
          }
        }
        _stateBeforeDoctypeName(e) {
          if (eM(e))
            this._createDoctypeToken(String.fromCharCode(e + 32)),
              (this.state = y.DOCTYPE_NAME);
          else
            switch (e) {
              case A.SPACE:
              case A.LINE_FEED:
              case A.TABULATION:
              case A.FORM_FEED:
                break;
              case A.NULL:
                this._err(_.unexpectedNullCharacter),
                  this._createDoctypeToken("�"),
                  (this.state = y.DOCTYPE_NAME);
                break;
              case A.GREATER_THAN_SIGN: {
                this._err(_.missingDoctypeName), this._createDoctypeToken(null);
                let e = this.currentToken;
                (e.forceQuirks = !0),
                  this.emitCurrentDoctype(e),
                  (this.state = y.DATA);
                break;
              }
              case A.EOF: {
                this._err(_.eofInDoctype), this._createDoctypeToken(null);
                let e = this.currentToken;
                (e.forceQuirks = !0),
                  this.emitCurrentDoctype(e),
                  this._emitEOFToken();
                break;
              }
              default:
                this._createDoctypeToken(String.fromCodePoint(e)),
                  (this.state = y.DOCTYPE_NAME);
            }
        }
        _stateDoctypeName(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = y.AFTER_DOCTYPE_NAME;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentDoctype(t);
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), (t.name += "�");
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.name += String.fromCodePoint(eM(e) ? e + 32 : e);
          }
        }
        _stateAfterDoctypeName(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentDoctype(t);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._consumeSequenceIfMatch(eh.PUBLIC, !1)
                ? (this.state = y.AFTER_DOCTYPE_PUBLIC_KEYWORD)
                : this._consumeSequenceIfMatch(eh.SYSTEM, !1)
                ? (this.state = y.AFTER_DOCTYPE_SYSTEM_KEYWORD)
                : this._ensureHibernation() ||
                  (this._err(_.invalidCharacterSequenceAfterDoctypeName),
                  (t.forceQuirks = !0),
                  (this.state = y.BOGUS_DOCTYPE),
                  this._stateBogusDoctype(e));
          }
        }
        _stateAfterDoctypePublicKeyword(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = y.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case A.QUOTATION_MARK:
              this._err(_.missingWhitespaceAfterDoctypePublicKeyword),
                (t.publicId = ""),
                (this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              this._err(_.missingWhitespaceAfterDoctypePublicKeyword),
                (t.publicId = ""),
                (this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.missingDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.DATA),
                this.emitCurrentDoctype(t);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(_.missingQuoteBeforeDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBeforeDoctypePublicIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.QUOTATION_MARK:
              (t.publicId = ""),
                (this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              (t.publicId = ""),
                (this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.missingDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.DATA),
                this.emitCurrentDoctype(t);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(_.missingQuoteBeforeDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateDoctypePublicIdentifierDoubleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case A.QUOTATION_MARK:
              this.state = y.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), (t.publicId += "�");
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.abruptDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = y.DATA);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.publicId += String.fromCodePoint(e);
          }
        }
        _stateDoctypePublicIdentifierSingleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case A.APOSTROPHE:
              this.state = y.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), (t.publicId += "�");
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.abruptDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = y.DATA);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.publicId += String.fromCodePoint(e);
          }
        }
        _stateAfterDoctypePublicIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = y.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
              break;
            case A.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentDoctype(t);
              break;
            case A.QUOTATION_MARK:
              this._err(
                _.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers
              ),
                (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              this._err(
                _.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers
              ),
                (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(_.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = y.DATA);
              break;
            case A.QUOTATION_MARK:
              (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(_.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateAfterDoctypeSystemKeyword(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              this.state = y.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case A.QUOTATION_MARK:
              this._err(_.missingWhitespaceAfterDoctypeSystemKeyword),
                (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              this._err(_.missingWhitespaceAfterDoctypeSystemKeyword),
                (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.missingDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.DATA),
                this.emitCurrentDoctype(t);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(_.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBeforeDoctypeSystemIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.QUOTATION_MARK:
              (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case A.APOSTROPHE:
              (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.missingDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.DATA),
                this.emitCurrentDoctype(t);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(_.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateDoctypeSystemIdentifierDoubleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case A.QUOTATION_MARK:
              this.state = y.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), (t.systemId += "�");
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.abruptDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = y.DATA);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.systemId += String.fromCodePoint(e);
          }
        }
        _stateDoctypeSystemIdentifierSingleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case A.APOSTROPHE:
              this.state = y.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter), (t.systemId += "�");
              break;
            case A.GREATER_THAN_SIGN:
              this._err(_.abruptDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = y.DATA);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.systemId += String.fromCodePoint(e);
          }
        }
        _stateAfterDoctypeSystemIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case A.SPACE:
            case A.LINE_FEED:
            case A.TABULATION:
            case A.FORM_FEED:
              break;
            case A.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = y.DATA);
              break;
            case A.EOF:
              this._err(_.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(_.unexpectedCharacterAfterDoctypeSystemIdentifier),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBogusDoctype(e) {
          let t = this.currentToken;
          switch (e) {
            case A.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = y.DATA);
              break;
            case A.NULL:
              this._err(_.unexpectedNullCharacter);
              break;
            case A.EOF:
              this.emitCurrentDoctype(t), this._emitEOFToken();
          }
        }
        _stateCdataSection(e) {
          switch (e) {
            case A.RIGHT_SQUARE_BRACKET:
              this.state = y.CDATA_SECTION_BRACKET;
              break;
            case A.EOF:
              this._err(_.eofInCdata), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateCdataSectionBracket(e) {
          e === A.RIGHT_SQUARE_BRACKET
            ? (this.state = y.CDATA_SECTION_END)
            : (this._emitChars("]"),
              (this.state = y.CDATA_SECTION),
              this._stateCdataSection(e));
        }
        _stateCdataSectionEnd(e) {
          switch (e) {
            case A.GREATER_THAN_SIGN:
              this.state = y.DATA;
              break;
            case A.RIGHT_SQUARE_BRACKET:
              this._emitChars("]");
              break;
            default:
              this._emitChars("]]"),
                (this.state = y.CDATA_SECTION),
                this._stateCdataSection(e);
          }
        }
        _stateCharacterReference(e) {
          e === A.NUMBER_SIGN
            ? (this.state = y.NUMERIC_CHARACTER_REFERENCE)
            : ev(e)
            ? ((this.state = y.NAMED_CHARACTER_REFERENCE),
              this._stateNamedCharacterReference(e))
            : (this._flushCodePointConsumedAsCharacterReference(A.AMPERSAND),
              this._reconsumeInState(this.returnState, e));
        }
        _stateNamedCharacterReference(e) {
          let t = this._matchNamedCharacterReference(e);
          if (this._ensureHibernation());
          else if (t) {
            for (let e = 0; e < t.length; e++)
              this._flushCodePointConsumedAsCharacterReference(t[e]);
            this.state = this.returnState;
          } else
            this._flushCodePointConsumedAsCharacterReference(A.AMPERSAND),
              (this.state = y.AMBIGUOUS_AMPERSAND);
        }
        _stateAmbiguousAmpersand(e) {
          ev(e)
            ? this._flushCodePointConsumedAsCharacterReference(e)
            : (e === A.SEMICOLON && this._err(_.unknownNamedCharacterReference),
              this._reconsumeInState(this.returnState, e));
        }
        _stateNumericCharacterReference(e) {
          (this.charRefCode = 0),
            e === A.LATIN_SMALL_X || e === A.LATIN_CAPITAL_X
              ? (this.state = y.HEXADEMICAL_CHARACTER_REFERENCE_START)
              : eP(e)
              ? ((this.state = y.DECIMAL_CHARACTER_REFERENCE),
                this._stateDecimalCharacterReference(e))
              : (this._err(_.absenceOfDigitsInNumericCharacterReference),
                this._flushCodePointConsumedAsCharacterReference(A.AMPERSAND),
                this._flushCodePointConsumedAsCharacterReference(A.NUMBER_SIGN),
                this._reconsumeInState(this.returnState, e));
        }
        _stateHexademicalCharacterReferenceStart(e) {
          eP(e) || eF(e) || eB(e)
            ? ((this.state = y.HEXADEMICAL_CHARACTER_REFERENCE),
              this._stateHexademicalCharacterReference(e))
            : (this._err(_.absenceOfDigitsInNumericCharacterReference),
              this._flushCodePointConsumedAsCharacterReference(A.AMPERSAND),
              this._flushCodePointConsumedAsCharacterReference(A.NUMBER_SIGN),
              this._unconsume(2),
              (this.state = this.returnState));
        }
        _stateHexademicalCharacterReference(e) {
          eF(e)
            ? (this.charRefCode = 16 * this.charRefCode + e - 55)
            : eB(e)
            ? (this.charRefCode = 16 * this.charRefCode + e - 87)
            : eP(e)
            ? (this.charRefCode = 16 * this.charRefCode + e - 48)
            : e === A.SEMICOLON
            ? (this.state = y.NUMERIC_CHARACTER_REFERENCE_END)
            : (this._err(_.missingSemicolonAfterCharacterReference),
              (this.state = y.NUMERIC_CHARACTER_REFERENCE_END),
              this._stateNumericCharacterReferenceEnd(e));
        }
        _stateDecimalCharacterReference(e) {
          eP(e)
            ? (this.charRefCode = 10 * this.charRefCode + e - 48)
            : e === A.SEMICOLON
            ? (this.state = y.NUMERIC_CHARACTER_REFERENCE_END)
            : (this._err(_.missingSemicolonAfterCharacterReference),
              (this.state = y.NUMERIC_CHARACTER_REFERENCE_END),
              this._stateNumericCharacterReferenceEnd(e));
        }
        _stateNumericCharacterReferenceEnd(e) {
          if (this.charRefCode === A.NULL)
            this._err(_.nullCharacterReference),
              (this.charRefCode = A.REPLACEMENT_CHARACTER);
          else if (this.charRefCode > 1114111)
            this._err(_.characterReferenceOutsideUnicodeRange),
              (this.charRefCode = A.REPLACEMENT_CHARACTER);
          else if (ed(this.charRefCode))
            this._err(_.surrogateCharacterReference),
              (this.charRefCode = A.REPLACEMENT_CHARACTER);
          else if (ef(this.charRefCode))
            this._err(_.noncharacterCharacterReference);
          else if (
            ep(this.charRefCode) ||
            this.charRefCode === A.CARRIAGE_RETURN
          ) {
            this._err(_.controlCharacterReference);
            let e = eL.get(this.charRefCode);
            void 0 !== e && (this.charRefCode = e);
          }
          this._flushCodePointConsumedAsCharacterReference(this.charRefCode),
            this._reconsumeInState(this.returnState, e);
        }
      }
      let eG = new Set([
          L.DD,
          L.DT,
          L.LI,
          L.OPTGROUP,
          L.OPTION,
          L.P,
          L.RB,
          L.RP,
          L.RT,
          L.RTC,
        ]),
        eY = new Set([
          ...eG,
          L.CAPTION,
          L.COLGROUP,
          L.TBODY,
          L.TD,
          L.TFOOT,
          L.TH,
          L.THEAD,
          L.TR,
        ]),
        ez = new Map([
          [L.APPLET, D.HTML],
          [L.CAPTION, D.HTML],
          [L.HTML, D.HTML],
          [L.MARQUEE, D.HTML],
          [L.OBJECT, D.HTML],
          [L.TABLE, D.HTML],
          [L.TD, D.HTML],
          [L.TEMPLATE, D.HTML],
          [L.TH, D.HTML],
          [L.ANNOTATION_XML, D.MATHML],
          [L.MI, D.MATHML],
          [L.MN, D.MATHML],
          [L.MO, D.MATHML],
          [L.MS, D.MATHML],
          [L.MTEXT, D.MATHML],
          [L.DESC, D.SVG],
          [L.FOREIGN_OBJECT, D.SVG],
          [L.TITLE, D.SVG],
        ]),
        eq = [L.H1, L.H2, L.H3, L.H4, L.H5, L.H6],
        eV = [L.TR, L.TEMPLATE, L.HTML],
        ej = [L.TBODY, L.TFOOT, L.THEAD, L.TEMPLATE, L.HTML],
        eQ = [L.TABLE, L.TEMPLATE, L.HTML],
        eW = [L.TD, L.TH];
      class eX {
        get currentTmplContentOrNode() {
          return this._isInTemplate()
            ? this.treeAdapter.getTemplateContent(this.current)
            : this.current;
        }
        constructor(e, t, n) {
          (this.treeAdapter = t),
            (this.handler = n),
            (this.items = []),
            (this.tagIDs = []),
            (this.stackTop = -1),
            (this.tmplCount = 0),
            (this.currentTagId = L.UNKNOWN),
            (this.current = e);
        }
        _indexOf(e) {
          return this.items.lastIndexOf(e, this.stackTop);
        }
        _isInTemplate() {
          return (
            this.currentTagId === L.TEMPLATE &&
            this.treeAdapter.getNamespaceURI(this.current) === D.HTML
          );
        }
        _updateCurrentElement() {
          (this.current = this.items[this.stackTop]),
            (this.currentTagId = this.tagIDs[this.stackTop]);
        }
        push(e, t) {
          this.stackTop++,
            (this.items[this.stackTop] = e),
            (this.current = e),
            (this.tagIDs[this.stackTop] = t),
            (this.currentTagId = t),
            this._isInTemplate() && this.tmplCount++,
            this.handler.onItemPush(e, t, !0);
        }
        pop() {
          let e = this.current;
          this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--,
            this.stackTop--,
            this._updateCurrentElement(),
            this.handler.onItemPop(e, !0);
        }
        replace(e, t) {
          let n = this._indexOf(e);
          (this.items[n] = t), n === this.stackTop && (this.current = t);
        }
        insertAfter(e, t, n) {
          let r = this._indexOf(e) + 1;
          this.items.splice(r, 0, t),
            this.tagIDs.splice(r, 0, n),
            this.stackTop++,
            r === this.stackTop && this._updateCurrentElement(),
            this.handler.onItemPush(
              this.current,
              this.currentTagId,
              r === this.stackTop
            );
        }
        popUntilTagNamePopped(e) {
          let t = this.stackTop + 1;
          do t = this.tagIDs.lastIndexOf(e, t - 1);
          while (
            t > 0 &&
            this.treeAdapter.getNamespaceURI(this.items[t]) !== D.HTML
          );
          this.shortenToLength(t < 0 ? 0 : t);
        }
        shortenToLength(e) {
          for (; this.stackTop >= e; ) {
            let t = this.current;
            this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1),
              this.stackTop--,
              this._updateCurrentElement(),
              this.handler.onItemPop(t, this.stackTop < e);
          }
        }
        popUntilElementPopped(e) {
          let t = this._indexOf(e);
          this.shortenToLength(t < 0 ? 0 : t);
        }
        popUntilPopped(e, t) {
          let n = this._indexOfTagNames(e, t);
          this.shortenToLength(n < 0 ? 0 : n);
        }
        popUntilNumberedHeaderPopped() {
          this.popUntilPopped(eq, D.HTML);
        }
        popUntilTableCellPopped() {
          this.popUntilPopped(eW, D.HTML);
        }
        popAllUpToHtmlElement() {
          (this.tmplCount = 0), this.shortenToLength(1);
        }
        _indexOfTagNames(e, t) {
          for (let n = this.stackTop; n >= 0; n--)
            if (
              e.includes(this.tagIDs[n]) &&
              this.treeAdapter.getNamespaceURI(this.items[n]) === t
            )
              return n;
          return -1;
        }
        clearBackTo(e, t) {
          let n = this._indexOfTagNames(e, t);
          this.shortenToLength(n + 1);
        }
        clearBackToTableContext() {
          this.clearBackTo(eQ, D.HTML);
        }
        clearBackToTableBodyContext() {
          this.clearBackTo(ej, D.HTML);
        }
        clearBackToTableRowContext() {
          this.clearBackTo(eV, D.HTML);
        }
        remove(e) {
          let t = this._indexOf(e);
          t >= 0 &&
            (t === this.stackTop
              ? this.pop()
              : (this.items.splice(t, 1),
                this.tagIDs.splice(t, 1),
                this.stackTop--,
                this._updateCurrentElement(),
                this.handler.onItemPop(e, !1)));
        }
        tryPeekProperlyNestedBodyElement() {
          return this.stackTop >= 1 && this.tagIDs[1] === L.BODY
            ? this.items[1]
            : null;
        }
        contains(e) {
          return this._indexOf(e) > -1;
        }
        getCommonAncestor(e) {
          let t = this._indexOf(e) - 1;
          return t >= 0 ? this.items[t] : null;
        }
        isRootHtmlElementCurrent() {
          return 0 === this.stackTop && this.tagIDs[0] === L.HTML;
        }
        hasInScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (n === e && r === D.HTML) break;
            if (ez.get(n) === r) return !1;
          }
          return !0;
        }
        hasNumberedHeaderInScope() {
          for (let e = this.stackTop; e >= 0; e--) {
            let t = this.tagIDs[e],
              n = this.treeAdapter.getNamespaceURI(this.items[e]);
            if (eO(t) && n === D.HTML) break;
            if (ez.get(t) === n) return !1;
          }
          return !0;
        }
        hasInListItemScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (n === e && r === D.HTML) break;
            if (((n === L.UL || n === L.OL) && r === D.HTML) || ez.get(n) === r)
              return !1;
          }
          return !0;
        }
        hasInButtonScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let n = this.tagIDs[t],
              r = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (n === e && r === D.HTML) break;
            if ((n === L.BUTTON && r === D.HTML) || ez.get(n) === r) return !1;
          }
          return !0;
        }
        hasInTableScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let n = this.tagIDs[t];
            if (this.treeAdapter.getNamespaceURI(this.items[t]) === D.HTML) {
              if (n === e) break;
              if (n === L.TABLE || n === L.TEMPLATE || n === L.HTML) return !1;
            }
          }
          return !0;
        }
        hasTableBodyContextInTableScope() {
          for (let e = this.stackTop; e >= 0; e--) {
            let t = this.tagIDs[e];
            if (this.treeAdapter.getNamespaceURI(this.items[e]) === D.HTML) {
              if (t === L.TBODY || t === L.THEAD || t === L.TFOOT) break;
              if (t === L.TABLE || t === L.HTML) return !1;
            }
          }
          return !0;
        }
        hasInSelectScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let n = this.tagIDs[t];
            if (this.treeAdapter.getNamespaceURI(this.items[t]) === D.HTML) {
              if (n === e) break;
              if (n !== L.OPTION && n !== L.OPTGROUP) return !1;
            }
          }
          return !0;
        }
        generateImpliedEndTags() {
          for (; eG.has(this.currentTagId); ) this.pop();
        }
        generateImpliedEndTagsThoroughly() {
          for (; eY.has(this.currentTagId); ) this.pop();
        }
        generateImpliedEndTagsWithExclusion(e) {
          for (; this.currentTagId !== e && eY.has(this.currentTagId); )
            this.pop();
        }
      }
      ((m = P = P || (P = {}))[(m.Marker = 0)] = "Marker"),
        (m[(m.Element = 1)] = "Element");
      let eK = { type: P.Marker };
      class eJ {
        constructor(e) {
          (this.treeAdapter = e), (this.entries = []), (this.bookmark = null);
        }
        _getNoahArkConditionCandidates(e, t) {
          let n = [],
            r = t.length,
            i = this.treeAdapter.getTagName(e),
            a = this.treeAdapter.getNamespaceURI(e);
          for (let e = 0; e < this.entries.length; e++) {
            let t = this.entries[e];
            if (t.type === P.Marker) break;
            let { element: s } = t;
            if (
              this.treeAdapter.getTagName(s) === i &&
              this.treeAdapter.getNamespaceURI(s) === a
            ) {
              let t = this.treeAdapter.getAttrList(s);
              t.length === r && n.push({ idx: e, attrs: t });
            }
          }
          return n;
        }
        _ensureNoahArkCondition(e) {
          if (this.entries.length < 3) return;
          let t = this.treeAdapter.getAttrList(e),
            n = this._getNoahArkConditionCandidates(e, t);
          if (n.length < 3) return;
          let r = new Map(t.map((e) => [e.name, e.value])),
            i = 0;
          for (let e = 0; e < n.length; e++) {
            let t = n[e];
            t.attrs.every((e) => r.get(e.name) === e.value) &&
              (i += 1) >= 3 &&
              this.entries.splice(t.idx, 1);
          }
        }
        insertMarker() {
          this.entries.unshift(eK);
        }
        pushElement(e, t) {
          this._ensureNoahArkCondition(e),
            this.entries.unshift({ type: P.Element, element: e, token: t });
        }
        insertElementAfterBookmark(e, t) {
          let n = this.entries.indexOf(this.bookmark);
          this.entries.splice(n, 0, { type: P.Element, element: e, token: t });
        }
        removeEntry(e) {
          let t = this.entries.indexOf(e);
          t >= 0 && this.entries.splice(t, 1);
        }
        clearToLastMarker() {
          let e = this.entries.indexOf(eK);
          e >= 0 ? this.entries.splice(0, e + 1) : (this.entries.length = 0);
        }
        getElementEntryInScopeWithTagName(e) {
          let t = this.entries.find(
            (t) =>
              t.type === P.Marker ||
              this.treeAdapter.getTagName(t.element) === e
          );
          return t && t.type === P.Element ? t : null;
        }
        getElementEntry(e) {
          return this.entries.find(
            (t) => t.type === P.Element && t.element === e
          );
        }
      }
      function eZ(e) {
        return { nodeName: "#text", value: e, parentNode: null };
      }
      let e$ = {
          createDocument: () => ({
            nodeName: "#document",
            mode: b.NO_QUIRKS,
            childNodes: [],
          }),
          createDocumentFragment: () => ({
            nodeName: "#document-fragment",
            childNodes: [],
          }),
          createElement: (e, t, n) => ({
            nodeName: e,
            tagName: e,
            attrs: n,
            namespaceURI: t,
            childNodes: [],
            parentNode: null,
          }),
          createCommentNode: (e) => ({
            nodeName: "#comment",
            data: e,
            parentNode: null,
          }),
          appendChild(e, t) {
            e.childNodes.push(t), (t.parentNode = e);
          },
          insertBefore(e, t, n) {
            let r = e.childNodes.indexOf(n);
            e.childNodes.splice(r, 0, t), (t.parentNode = e);
          },
          setTemplateContent(e, t) {
            e.content = t;
          },
          getTemplateContent: (e) => e.content,
          setDocumentType(e, t, n, r) {
            let i = e.childNodes.find((e) => "#documentType" === e.nodeName);
            i
              ? ((i.name = t), (i.publicId = n), (i.systemId = r))
              : e$.appendChild(e, {
                  nodeName: "#documentType",
                  name: t,
                  publicId: n,
                  systemId: r,
                  parentNode: null,
                });
          },
          setDocumentMode(e, t) {
            e.mode = t;
          },
          getDocumentMode: (e) => e.mode,
          detachNode(e) {
            if (e.parentNode) {
              let t = e.parentNode.childNodes.indexOf(e);
              e.parentNode.childNodes.splice(t, 1), (e.parentNode = null);
            }
          },
          insertText(e, t) {
            if (e.childNodes.length > 0) {
              let n = e.childNodes[e.childNodes.length - 1];
              if (e$.isTextNode(n)) {
                n.value += t;
                return;
              }
            }
            e$.appendChild(e, eZ(t));
          },
          insertTextBefore(e, t, n) {
            let r = e.childNodes[e.childNodes.indexOf(n) - 1];
            r && e$.isTextNode(r)
              ? (r.value += t)
              : e$.insertBefore(e, eZ(t), n);
          },
          adoptAttributes(e, t) {
            let n = new Set(e.attrs.map((e) => e.name));
            for (let r = 0; r < t.length; r++)
              n.has(t[r].name) || e.attrs.push(t[r]);
          },
          getFirstChild: (e) => e.childNodes[0],
          getChildNodes: (e) => e.childNodes,
          getParentNode: (e) => e.parentNode,
          getAttrList: (e) => e.attrs,
          getTagName: (e) => e.tagName,
          getNamespaceURI: (e) => e.namespaceURI,
          getTextNodeContent: (e) => e.value,
          getCommentNodeContent: (e) => e.data,
          getDocumentTypeNodeName: (e) => e.name,
          getDocumentTypeNodePublicId: (e) => e.publicId,
          getDocumentTypeNodeSystemId: (e) => e.systemId,
          isTextNode: (e) => "#text" === e.nodeName,
          isCommentNode: (e) => "#comment" === e.nodeName,
          isDocumentTypeNode: (e) => "#documentType" === e.nodeName,
          isElementNode: (e) =>
            Object.prototype.hasOwnProperty.call(e, "tagName"),
          setNodeSourceCodeLocation(e, t) {
            e.sourceCodeLocation = t;
          },
          getNodeSourceCodeLocation: (e) => e.sourceCodeLocation,
          updateNodeSourceCodeLocation(e, t) {
            e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
          },
        },
        e0 = "html",
        e1 = [
          "+//silmaril//dtd html pro v0r11 19970101//",
          "-//as//dtd html 3.0 aswedit + extensions//",
          "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
          "-//ietf//dtd html 2.0 level 1//",
          "-//ietf//dtd html 2.0 level 2//",
          "-//ietf//dtd html 2.0 strict level 1//",
          "-//ietf//dtd html 2.0 strict level 2//",
          "-//ietf//dtd html 2.0 strict//",
          "-//ietf//dtd html 2.0//",
          "-//ietf//dtd html 2.1e//",
          "-//ietf//dtd html 3.0//",
          "-//ietf//dtd html 3.2 final//",
          "-//ietf//dtd html 3.2//",
          "-//ietf//dtd html 3//",
          "-//ietf//dtd html level 0//",
          "-//ietf//dtd html level 1//",
          "-//ietf//dtd html level 2//",
          "-//ietf//dtd html level 3//",
          "-//ietf//dtd html strict level 0//",
          "-//ietf//dtd html strict level 1//",
          "-//ietf//dtd html strict level 2//",
          "-//ietf//dtd html strict level 3//",
          "-//ietf//dtd html strict//",
          "-//ietf//dtd html//",
          "-//metrius//dtd metrius presentational//",
          "-//microsoft//dtd internet explorer 2.0 html strict//",
          "-//microsoft//dtd internet explorer 2.0 html//",
          "-//microsoft//dtd internet explorer 2.0 tables//",
          "-//microsoft//dtd internet explorer 3.0 html strict//",
          "-//microsoft//dtd internet explorer 3.0 html//",
          "-//microsoft//dtd internet explorer 3.0 tables//",
          "-//netscape comm. corp.//dtd html//",
          "-//netscape comm. corp.//dtd strict html//",
          "-//o'reilly and associates//dtd html 2.0//",
          "-//o'reilly and associates//dtd html extended 1.0//",
          "-//o'reilly and associates//dtd html extended relaxed 1.0//",
          "-//sq//dtd html 2.0 hotmetal + extensions//",
          "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
          "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
          "-//spyglass//dtd html 2.0 extended//",
          "-//sun microsystems corp.//dtd hotjava html//",
          "-//sun microsystems corp.//dtd hotjava strict html//",
          "-//w3c//dtd html 3 1995-03-24//",
          "-//w3c//dtd html 3.2 draft//",
          "-//w3c//dtd html 3.2 final//",
          "-//w3c//dtd html 3.2//",
          "-//w3c//dtd html 3.2s draft//",
          "-//w3c//dtd html 4.0 frameset//",
          "-//w3c//dtd html 4.0 transitional//",
          "-//w3c//dtd html experimental 19960712//",
          "-//w3c//dtd html experimental 970421//",
          "-//w3c//dtd w3 html//",
          "-//w3o//dtd w3 html 3.0//",
          "-//webtechs//dtd mozilla html 2.0//",
          "-//webtechs//dtd mozilla html//",
        ],
        e3 = [
          ...e1,
          "-//w3c//dtd html 4.01 frameset//",
          "-//w3c//dtd html 4.01 transitional//",
        ],
        e2 = new Set([
          "-//w3o//dtd w3 html strict 3.0//en//",
          "-/w3c/dtd html 4.0 transitional/en",
          "html",
        ]),
        e5 = [
          "-//w3c//dtd xhtml 1.0 frameset//",
          "-//w3c//dtd xhtml 1.0 transitional//",
        ],
        e4 = [
          ...e5,
          "-//w3c//dtd html 4.01 frameset//",
          "-//w3c//dtd html 4.01 transitional//",
        ];
      function e8(e, t) {
        return t.some((t) => e.startsWith(t));
      }
      let e9 = {
          TEXT_HTML: "text/html",
          APPLICATION_XML: "application/xhtml+xml",
        },
        e6 = new Map(
          [
            "attributeName",
            "attributeType",
            "baseFrequency",
            "baseProfile",
            "calcMode",
            "clipPathUnits",
            "diffuseConstant",
            "edgeMode",
            "filterUnits",
            "glyphRef",
            "gradientTransform",
            "gradientUnits",
            "kernelMatrix",
            "kernelUnitLength",
            "keyPoints",
            "keySplines",
            "keyTimes",
            "lengthAdjust",
            "limitingConeAngle",
            "markerHeight",
            "markerUnits",
            "markerWidth",
            "maskContentUnits",
            "maskUnits",
            "numOctaves",
            "pathLength",
            "patternContentUnits",
            "patternTransform",
            "patternUnits",
            "pointsAtX",
            "pointsAtY",
            "pointsAtZ",
            "preserveAlpha",
            "preserveAspectRatio",
            "primitiveUnits",
            "refX",
            "refY",
            "repeatCount",
            "repeatDur",
            "requiredExtensions",
            "requiredFeatures",
            "specularConstant",
            "specularExponent",
            "spreadMethod",
            "startOffset",
            "stdDeviation",
            "stitchTiles",
            "surfaceScale",
            "systemLanguage",
            "tableValues",
            "targetX",
            "targetY",
            "textLength",
            "viewBox",
            "viewTarget",
            "xChannelSelector",
            "yChannelSelector",
            "zoomAndPan",
          ].map((e) => [e.toLowerCase(), e])
        ),
        e7 = new Map([
          [
            "xlink:actuate",
            { prefix: "xlink", name: "actuate", namespace: D.XLINK },
          ],
          [
            "xlink:arcrole",
            { prefix: "xlink", name: "arcrole", namespace: D.XLINK },
          ],
          ["xlink:href", { prefix: "xlink", name: "href", namespace: D.XLINK }],
          ["xlink:role", { prefix: "xlink", name: "role", namespace: D.XLINK }],
          ["xlink:show", { prefix: "xlink", name: "show", namespace: D.XLINK }],
          [
            "xlink:title",
            { prefix: "xlink", name: "title", namespace: D.XLINK },
          ],
          ["xlink:type", { prefix: "xlink", name: "type", namespace: D.XLINK }],
          ["xml:base", { prefix: "xml", name: "base", namespace: D.XML }],
          ["xml:lang", { prefix: "xml", name: "lang", namespace: D.XML }],
          ["xml:space", { prefix: "xml", name: "space", namespace: D.XML }],
          ["xmlns", { prefix: "", name: "xmlns", namespace: D.XMLNS }],
          [
            "xmlns:xlink",
            { prefix: "xmlns", name: "xlink", namespace: D.XMLNS },
          ],
        ]),
        te = new Map(
          [
            "altGlyph",
            "altGlyphDef",
            "altGlyphItem",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "clipPath",
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "foreignObject",
            "glyphRef",
            "linearGradient",
            "radialGradient",
            "textPath",
          ].map((e) => [e.toLowerCase(), e])
        ),
        tt = new Set([
          L.B,
          L.BIG,
          L.BLOCKQUOTE,
          L.BODY,
          L.BR,
          L.CENTER,
          L.CODE,
          L.DD,
          L.DIV,
          L.DL,
          L.DT,
          L.EM,
          L.EMBED,
          L.H1,
          L.H2,
          L.H3,
          L.H4,
          L.H5,
          L.H6,
          L.HEAD,
          L.HR,
          L.I,
          L.IMG,
          L.LI,
          L.LISTING,
          L.MENU,
          L.META,
          L.NOBR,
          L.OL,
          L.P,
          L.PRE,
          L.RUBY,
          L.S,
          L.SMALL,
          L.SPAN,
          L.STRONG,
          L.STRIKE,
          L.SUB,
          L.SUP,
          L.TABLE,
          L.TT,
          L.U,
          L.UL,
          L.VAR,
        ]);
      function tn(e) {
        for (let t = 0; t < e.attrs.length; t++)
          if ("definitionurl" === e.attrs[t].name) {
            e.attrs[t].name = "definitionURL";
            break;
          }
      }
      function tr(e) {
        for (let t = 0; t < e.attrs.length; t++) {
          let n = e6.get(e.attrs[t].name);
          null != n && (e.attrs[t].name = n);
        }
      }
      function ti(e) {
        for (let t = 0; t < e.attrs.length; t++) {
          let n = e7.get(e.attrs[t].name);
          n &&
            ((e.attrs[t].prefix = n.prefix),
            (e.attrs[t].name = n.name),
            (e.attrs[t].namespace = n.namespace));
        }
      }
      ((T = M || (M = {}))[(T.INITIAL = 0)] = "INITIAL"),
        (T[(T.BEFORE_HTML = 1)] = "BEFORE_HTML"),
        (T[(T.BEFORE_HEAD = 2)] = "BEFORE_HEAD"),
        (T[(T.IN_HEAD = 3)] = "IN_HEAD"),
        (T[(T.IN_HEAD_NO_SCRIPT = 4)] = "IN_HEAD_NO_SCRIPT"),
        (T[(T.AFTER_HEAD = 5)] = "AFTER_HEAD"),
        (T[(T.IN_BODY = 6)] = "IN_BODY"),
        (T[(T.TEXT = 7)] = "TEXT"),
        (T[(T.IN_TABLE = 8)] = "IN_TABLE"),
        (T[(T.IN_TABLE_TEXT = 9)] = "IN_TABLE_TEXT"),
        (T[(T.IN_CAPTION = 10)] = "IN_CAPTION"),
        (T[(T.IN_COLUMN_GROUP = 11)] = "IN_COLUMN_GROUP"),
        (T[(T.IN_TABLE_BODY = 12)] = "IN_TABLE_BODY"),
        (T[(T.IN_ROW = 13)] = "IN_ROW"),
        (T[(T.IN_CELL = 14)] = "IN_CELL"),
        (T[(T.IN_SELECT = 15)] = "IN_SELECT"),
        (T[(T.IN_SELECT_IN_TABLE = 16)] = "IN_SELECT_IN_TABLE"),
        (T[(T.IN_TEMPLATE = 17)] = "IN_TEMPLATE"),
        (T[(T.AFTER_BODY = 18)] = "AFTER_BODY"),
        (T[(T.IN_FRAMESET = 19)] = "IN_FRAMESET"),
        (T[(T.AFTER_FRAMESET = 20)] = "AFTER_FRAMESET"),
        (T[(T.AFTER_AFTER_BODY = 21)] = "AFTER_AFTER_BODY"),
        (T[(T.AFTER_AFTER_FRAMESET = 22)] = "AFTER_AFTER_FRAMESET");
      let ta = {
          startLine: -1,
          startCol: -1,
          startOffset: -1,
          endLine: -1,
          endCol: -1,
          endOffset: -1,
        },
        ts = new Set([L.TABLE, L.TBODY, L.TFOOT, L.THEAD, L.TR]),
        to = {
          scriptingEnabled: !0,
          sourceCodeLocationInfo: !1,
          treeAdapter: e$,
          onParseError: null,
        };
      class tl {
        constructor(e, t, n = null, r = null) {
          (this.fragmentContext = n),
            (this.scriptHandler = r),
            (this.currentToken = null),
            (this.stopped = !1),
            (this.insertionMode = M.INITIAL),
            (this.originalInsertionMode = M.INITIAL),
            (this.headElement = null),
            (this.formElement = null),
            (this.currentNotInHTML = !1),
            (this.tmplInsertionModeStack = []),
            (this.pendingCharacterTokens = []),
            (this.hasNonWhitespacePendingCharacterToken = !1),
            (this.framesetOk = !0),
            (this.skipNextNewLine = !1),
            (this.fosterParentingEnabled = !1),
            (this.options = { ...to, ...e }),
            (this.treeAdapter = this.options.treeAdapter),
            (this.onParseError = this.options.onParseError),
            this.onParseError && (this.options.sourceCodeLocationInfo = !0),
            (this.document = null != t ? t : this.treeAdapter.createDocument()),
            (this.tokenizer = new eU(this.options, this)),
            (this.activeFormattingElements = new eJ(this.treeAdapter)),
            (this.fragmentContextID = n
              ? eD(this.treeAdapter.getTagName(n))
              : L.UNKNOWN),
            this._setContextModes(
              null != n ? n : this.document,
              this.fragmentContextID
            ),
            (this.openElements = new eX(this.document, this.treeAdapter, this));
        }
        static parse(e, t) {
          let n = new this(t);
          return n.tokenizer.write(e, !0), n.document;
        }
        static getFragmentParser(e, t) {
          let n = { ...to, ...t };
          null != e ||
            (e = n.treeAdapter.createElement(O.TEMPLATE, D.HTML, []));
          let r = n.treeAdapter.createElement("documentmock", D.HTML, []),
            i = new this(n, r, e);
          return (
            i.fragmentContextID === L.TEMPLATE &&
              i.tmplInsertionModeStack.unshift(M.IN_TEMPLATE),
            i._initTokenizerForFragmentParsing(),
            i._insertFakeRootElement(),
            i._resetInsertionMode(),
            i._findFormInFragmentContext(),
            i
          );
        }
        getFragment() {
          let e = this.treeAdapter.getFirstChild(this.document),
            t = this.treeAdapter.createDocumentFragment();
          return this._adoptNodes(e, t), t;
        }
        _err(e, t, n) {
          var r;
          if (!this.onParseError) return;
          let i = null !== (r = e.location) && void 0 !== r ? r : ta,
            a = {
              code: t,
              startLine: i.startLine,
              startCol: i.startCol,
              startOffset: i.startOffset,
              endLine: n ? i.startLine : i.endLine,
              endCol: n ? i.startCol : i.endCol,
              endOffset: n ? i.startOffset : i.endOffset,
            };
          this.onParseError(a);
        }
        onItemPush(e, t, n) {
          var r, i;
          null === (i = (r = this.treeAdapter).onItemPush) ||
            void 0 === i ||
            i.call(r, e),
            n && this.openElements.stackTop > 0 && this._setContextModes(e, t);
        }
        onItemPop(e, t) {
          var n, r;
          if (
            (this.options.sourceCodeLocationInfo &&
              this._setEndLocation(e, this.currentToken),
            null === (r = (n = this.treeAdapter).onItemPop) ||
              void 0 === r ||
              r.call(n, e, this.openElements.current),
            t)
          ) {
            let e, t;
            0 === this.openElements.stackTop && this.fragmentContext
              ? ((e = this.fragmentContext), (t = this.fragmentContextID))
              : ({ current: e, currentTagId: t } = this.openElements),
              this._setContextModes(e, t);
          }
        }
        _setContextModes(e, t) {
          let n =
            e === this.document ||
            this.treeAdapter.getNamespaceURI(e) === D.HTML;
          (this.currentNotInHTML = !n),
            (this.tokenizer.inForeignNode =
              !n && !this._isIntegrationPoint(t, e));
        }
        _switchToTextParsing(e, t) {
          this._insertElement(e, D.HTML),
            (this.tokenizer.state = t),
            (this.originalInsertionMode = this.insertionMode),
            (this.insertionMode = M.TEXT);
        }
        switchToPlaintextParsing() {
          (this.insertionMode = M.TEXT),
            (this.originalInsertionMode = M.IN_BODY),
            (this.tokenizer.state = ey.PLAINTEXT);
        }
        _getAdjustedCurrentElement() {
          return 0 === this.openElements.stackTop && this.fragmentContext
            ? this.fragmentContext
            : this.openElements.current;
        }
        _findFormInFragmentContext() {
          let e = this.fragmentContext;
          for (; e; ) {
            if (this.treeAdapter.getTagName(e) === O.FORM) {
              this.formElement = e;
              break;
            }
            e = this.treeAdapter.getParentNode(e);
          }
        }
        _initTokenizerForFragmentParsing() {
          if (
            this.fragmentContext &&
            this.treeAdapter.getNamespaceURI(this.fragmentContext) === D.HTML
          )
            switch (this.fragmentContextID) {
              case L.TITLE:
              case L.TEXTAREA:
                this.tokenizer.state = ey.RCDATA;
                break;
              case L.STYLE:
              case L.XMP:
              case L.IFRAME:
              case L.NOEMBED:
              case L.NOFRAMES:
              case L.NOSCRIPT:
                this.tokenizer.state = ey.RAWTEXT;
                break;
              case L.SCRIPT:
                this.tokenizer.state = ey.SCRIPT_DATA;
                break;
              case L.PLAINTEXT:
                this.tokenizer.state = ey.PLAINTEXT;
            }
        }
        _setDocumentType(e) {
          let t = e.name || "",
            n = e.publicId || "",
            r = e.systemId || "";
          if (
            (this.treeAdapter.setDocumentType(this.document, t, n, r),
            e.location)
          ) {
            let t = this.treeAdapter
              .getChildNodes(this.document)
              .find((e) => this.treeAdapter.isDocumentTypeNode(e));
            t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
          }
        }
        _attachElementToTree(e, t) {
          if (this.options.sourceCodeLocationInfo) {
            let n = t && { ...t, startTag: t };
            this.treeAdapter.setNodeSourceCodeLocation(e, n);
          }
          if (this._shouldFosterParentOnInsertion())
            this._fosterParentElement(e);
          else {
            let t = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(t, e);
          }
        }
        _appendElement(e, t) {
          let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
          this._attachElementToTree(n, e.location);
        }
        _insertElement(e, t) {
          let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
          this._attachElementToTree(n, e.location),
            this.openElements.push(n, e.tagID);
        }
        _insertFakeElement(e, t) {
          let n = this.treeAdapter.createElement(e, D.HTML, []);
          this._attachElementToTree(n, null), this.openElements.push(n, t);
        }
        _insertTemplate(e) {
          let t = this.treeAdapter.createElement(e.tagName, D.HTML, e.attrs),
            n = this.treeAdapter.createDocumentFragment();
          this.treeAdapter.setTemplateContent(t, n),
            this._attachElementToTree(t, e.location),
            this.openElements.push(t, e.tagID),
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(n, null);
        }
        _insertFakeRootElement() {
          let e = this.treeAdapter.createElement(O.HTML, D.HTML, []);
          this.options.sourceCodeLocationInfo &&
            this.treeAdapter.setNodeSourceCodeLocation(e, null),
            this.treeAdapter.appendChild(this.openElements.current, e),
            this.openElements.push(e, L.HTML);
        }
        _appendCommentNode(e, t) {
          let n = this.treeAdapter.createCommentNode(e.data);
          this.treeAdapter.appendChild(t, n),
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
        }
        _insertCharacters(e) {
          let t, n;
          if (
            (this._shouldFosterParentOnInsertion()
              ? (({ parent: t, beforeElement: n } =
                  this._findFosterParentingLocation()),
                n
                  ? this.treeAdapter.insertTextBefore(t, e.chars, n)
                  : this.treeAdapter.insertText(t, e.chars))
              : ((t = this.openElements.currentTmplContentOrNode),
                this.treeAdapter.insertText(t, e.chars)),
            !e.location)
          )
            return;
          let r = this.treeAdapter.getChildNodes(t),
            i = n ? r.lastIndexOf(n) : r.length,
            a = r[i - 1];
          if (this.treeAdapter.getNodeSourceCodeLocation(a)) {
            let { endLine: t, endCol: n, endOffset: r } = e.location;
            this.treeAdapter.updateNodeSourceCodeLocation(a, {
              endLine: t,
              endCol: n,
              endOffset: r,
            });
          } else
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(a, e.location);
        }
        _adoptNodes(e, t) {
          for (
            let n = this.treeAdapter.getFirstChild(e);
            n;
            n = this.treeAdapter.getFirstChild(e)
          )
            this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n);
        }
        _setEndLocation(e, t) {
          if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
            let n = t.location,
              r = this.treeAdapter.getTagName(e),
              i =
                t.type === g.END_TAG && r === t.tagName
                  ? {
                      endTag: { ...n },
                      endLine: n.endLine,
                      endCol: n.endCol,
                      endOffset: n.endOffset,
                    }
                  : {
                      endLine: n.startLine,
                      endCol: n.startCol,
                      endOffset: n.startOffset,
                    };
            this.treeAdapter.updateNodeSourceCodeLocation(e, i);
          }
        }
        shouldProcessStartTagTokenInForeignContent(e) {
          let t, n;
          return (
            !!this.currentNotInHTML &&
            (0 === this.openElements.stackTop && this.fragmentContext
              ? ((t = this.fragmentContext), (n = this.fragmentContextID))
              : ({ current: t, currentTagId: n } = this.openElements),
            (e.tagID !== L.SVG ||
              this.treeAdapter.getTagName(t) !== O.ANNOTATION_XML ||
              this.treeAdapter.getNamespaceURI(t) !== D.MATHML) &&
              (this.tokenizer.inForeignNode ||
                ((e.tagID === L.MGLYPH || e.tagID === L.MALIGNMARK) &&
                  !this._isIntegrationPoint(n, t, D.HTML))))
          );
        }
        _processToken(e) {
          switch (e.type) {
            case g.CHARACTER:
              this.onCharacter(e);
              break;
            case g.NULL_CHARACTER:
              this.onNullCharacter(e);
              break;
            case g.COMMENT:
              this.onComment(e);
              break;
            case g.DOCTYPE:
              this.onDoctype(e);
              break;
            case g.START_TAG:
              this._processStartTag(e);
              break;
            case g.END_TAG:
              this.onEndTag(e);
              break;
            case g.EOF:
              this.onEof(e);
              break;
            case g.WHITESPACE_CHARACTER:
              this.onWhitespaceCharacter(e);
          }
        }
        _isIntegrationPoint(e, t, n) {
          let r = this.treeAdapter.getNamespaceURI(t),
            i = this.treeAdapter.getAttrList(t);
          return (
            ((!n || n === D.HTML) &&
              (function (e, t, n) {
                if (t === D.MATHML && e === L.ANNOTATION_XML) {
                  for (let e = 0; e < n.length; e++)
                    if (n[e].name === R.ENCODING) {
                      let t = n[e].value.toLowerCase();
                      return t === e9.TEXT_HTML || t === e9.APPLICATION_XML;
                    }
                }
                return (
                  t === D.SVG &&
                  (e === L.FOREIGN_OBJECT || e === L.DESC || e === L.TITLE)
                );
              })(e, r, i)) ||
            ((!n || n === D.MATHML) &&
              r === D.MATHML &&
              (e === L.MI ||
                e === L.MO ||
                e === L.MN ||
                e === L.MS ||
                e === L.MTEXT))
          );
        }
        _reconstructActiveFormattingElements() {
          let e = this.activeFormattingElements.entries.length;
          if (e) {
            let t = this.activeFormattingElements.entries.findIndex(
                (e) =>
                  e.type === P.Marker || this.openElements.contains(e.element)
              ),
              n = t < 0 ? e - 1 : t - 1;
            for (let e = n; e >= 0; e--) {
              let t = this.activeFormattingElements.entries[e];
              this._insertElement(
                t.token,
                this.treeAdapter.getNamespaceURI(t.element)
              ),
                (t.element = this.openElements.current);
            }
          }
        }
        _closeTableCell() {
          this.openElements.generateImpliedEndTags(),
            this.openElements.popUntilTableCellPopped(),
            this.activeFormattingElements.clearToLastMarker(),
            (this.insertionMode = M.IN_ROW);
        }
        _closePElement() {
          this.openElements.generateImpliedEndTagsWithExclusion(L.P),
            this.openElements.popUntilTagNamePopped(L.P);
        }
        _resetInsertionMode() {
          for (let e = this.openElements.stackTop; e >= 0; e--)
            switch (
              0 === e && this.fragmentContext
                ? this.fragmentContextID
                : this.openElements.tagIDs[e]
            ) {
              case L.TR:
                this.insertionMode = M.IN_ROW;
                return;
              case L.TBODY:
              case L.THEAD:
              case L.TFOOT:
                this.insertionMode = M.IN_TABLE_BODY;
                return;
              case L.CAPTION:
                this.insertionMode = M.IN_CAPTION;
                return;
              case L.COLGROUP:
                this.insertionMode = M.IN_COLUMN_GROUP;
                return;
              case L.TABLE:
                this.insertionMode = M.IN_TABLE;
                return;
              case L.BODY:
                this.insertionMode = M.IN_BODY;
                return;
              case L.FRAMESET:
                this.insertionMode = M.IN_FRAMESET;
                return;
              case L.SELECT:
                this._resetInsertionModeForSelect(e);
                return;
              case L.TEMPLATE:
                this.insertionMode = this.tmplInsertionModeStack[0];
                return;
              case L.HTML:
                this.insertionMode = this.headElement
                  ? M.AFTER_HEAD
                  : M.BEFORE_HEAD;
                return;
              case L.TD:
              case L.TH:
                if (e > 0) {
                  this.insertionMode = M.IN_CELL;
                  return;
                }
                break;
              case L.HEAD:
                if (e > 0) {
                  this.insertionMode = M.IN_HEAD;
                  return;
                }
            }
          this.insertionMode = M.IN_BODY;
        }
        _resetInsertionModeForSelect(e) {
          if (e > 0)
            for (let t = e - 1; t > 0; t--) {
              let e = this.openElements.tagIDs[t];
              if (e === L.TEMPLATE) break;
              if (e === L.TABLE) {
                this.insertionMode = M.IN_SELECT_IN_TABLE;
                return;
              }
            }
          this.insertionMode = M.IN_SELECT;
        }
        _isElementCausesFosterParenting(e) {
          return ts.has(e);
        }
        _shouldFosterParentOnInsertion() {
          return (
            this.fosterParentingEnabled &&
            this._isElementCausesFosterParenting(this.openElements.currentTagId)
          );
        }
        _findFosterParentingLocation() {
          for (let e = this.openElements.stackTop; e >= 0; e--) {
            let t = this.openElements.items[e];
            switch (this.openElements.tagIDs[e]) {
              case L.TEMPLATE:
                if (this.treeAdapter.getNamespaceURI(t) === D.HTML)
                  return {
                    parent: this.treeAdapter.getTemplateContent(t),
                    beforeElement: null,
                  };
                break;
              case L.TABLE: {
                let n = this.treeAdapter.getParentNode(t);
                if (n) return { parent: n, beforeElement: t };
                return {
                  parent: this.openElements.items[e - 1],
                  beforeElement: null,
                };
              }
            }
          }
          return { parent: this.openElements.items[0], beforeElement: null };
        }
        _fosterParentElement(e) {
          let t = this._findFosterParentingLocation();
          t.beforeElement
            ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement)
            : this.treeAdapter.appendChild(t.parent, e);
        }
        _isSpecialElement(e, t) {
          return eb[this.treeAdapter.getNamespaceURI(e)].has(t);
        }
        onCharacter(e) {
          if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
            this._insertCharacters(e), (this.framesetOk = !1);
            return;
          }
          switch (this.insertionMode) {
            case M.INITIAL:
              td(this, e);
              break;
            case M.BEFORE_HTML:
              tp(this, e);
              break;
            case M.BEFORE_HEAD:
              tf(this, e);
              break;
            case M.IN_HEAD:
              tT(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              tA(this, e);
              break;
            case M.AFTER_HEAD:
              t_(this, e);
              break;
            case M.IN_BODY:
            case M.IN_CAPTION:
            case M.IN_CELL:
            case M.IN_TEMPLATE:
              tI(this, e);
              break;
            case M.TEXT:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
              this._insertCharacters(e);
              break;
            case M.IN_TABLE:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
              ty(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tF(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              tU(this, e);
              break;
            case M.AFTER_BODY:
              tX(this, e);
              break;
            case M.AFTER_AFTER_BODY:
              tK(this, e);
          }
        }
        onNullCharacter(e) {
          if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
            (e.chars = "�"), this._insertCharacters(e);
            return;
          }
          switch (this.insertionMode) {
            case M.INITIAL:
              td(this, e);
              break;
            case M.BEFORE_HTML:
              tp(this, e);
              break;
            case M.BEFORE_HEAD:
              tf(this, e);
              break;
            case M.IN_HEAD:
              tT(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              tA(this, e);
              break;
            case M.AFTER_HEAD:
              t_(this, e);
              break;
            case M.TEXT:
              this._insertCharacters(e);
              break;
            case M.IN_TABLE:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
              ty(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              tU(this, e);
              break;
            case M.AFTER_BODY:
              tX(this, e);
              break;
            case M.AFTER_AFTER_BODY:
              tK(this, e);
          }
        }
        onComment(e) {
          if (((this.skipNextNewLine = !1), this.currentNotInHTML)) {
            tu(this, e);
            return;
          }
          switch (this.insertionMode) {
            case M.INITIAL:
            case M.BEFORE_HTML:
            case M.BEFORE_HEAD:
            case M.IN_HEAD:
            case M.IN_HEAD_NO_SCRIPT:
            case M.AFTER_HEAD:
            case M.IN_BODY:
            case M.IN_TABLE:
            case M.IN_CAPTION:
            case M.IN_COLUMN_GROUP:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
            case M.IN_CELL:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
            case M.IN_TEMPLATE:
            case M.IN_FRAMESET:
            case M.AFTER_FRAMESET:
              tu(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tB(this, e);
              break;
            case M.AFTER_BODY:
              !(function (e, t) {
                e._appendCommentNode(t, e.openElements.items[0]);
              })(this, e);
              break;
            case M.AFTER_AFTER_BODY:
            case M.AFTER_AFTER_FRAMESET:
              !(function (e, t) {
                e._appendCommentNode(t, e.document);
              })(this, e);
          }
        }
        onDoctype(e) {
          switch (((this.skipNextNewLine = !1), this.insertionMode)) {
            case M.INITIAL:
              !(function (e, t) {
                e._setDocumentType(t);
                let n = t.forceQuirks
                  ? b.QUIRKS
                  : (function (e) {
                      if (e.name !== e0) return b.QUIRKS;
                      let { systemId: t } = e;
                      if (
                        t &&
                        "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" ===
                          t.toLowerCase()
                      )
                        return b.QUIRKS;
                      let { publicId: n } = e;
                      if (null !== n) {
                        if (((n = n.toLowerCase()), e2.has(n))) return b.QUIRKS;
                        let e = null === t ? e3 : e1;
                        if (e8(n, e)) return b.QUIRKS;
                        if (e8(n, (e = null === t ? e5 : e4)))
                          return b.LIMITED_QUIRKS;
                      }
                      return b.NO_QUIRKS;
                    })(t);
                (t.name === e0 &&
                  null === t.publicId &&
                  (null === t.systemId ||
                    "about:legacy-compat" === t.systemId)) ||
                  e._err(t, _.nonConformingDoctype),
                  e.treeAdapter.setDocumentMode(e.document, n),
                  (e.insertionMode = M.BEFORE_HTML);
              })(this, e);
              break;
            case M.BEFORE_HEAD:
            case M.IN_HEAD:
            case M.IN_HEAD_NO_SCRIPT:
            case M.AFTER_HEAD:
              this._err(e, _.misplacedDoctype);
              break;
            case M.IN_TABLE_TEXT:
              tB(this, e);
          }
        }
        onStartTag(e) {
          (this.skipNextNewLine = !1),
            (this.currentToken = e),
            this._processStartTag(e),
            e.selfClosing &&
              !e.ackSelfClosing &&
              this._err(e, _.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
        _processStartTag(e) {
          this.shouldProcessStartTagTokenInForeignContent(e)
            ? (function (e, t) {
                if (
                  (function (e) {
                    let t = e.tagID;
                    return (
                      (t === L.FONT &&
                        e.attrs.some(
                          ({ name: e }) =>
                            e === R.COLOR || e === R.SIZE || e === R.FACE
                        )) ||
                      tt.has(t)
                    );
                  })(t)
                )
                  tJ(e), e._startTagOutsideForeignContent(t);
                else {
                  let n = e._getAdjustedCurrentElement(),
                    r = e.treeAdapter.getNamespaceURI(n);
                  r === D.MATHML
                    ? tn(t)
                    : r === D.SVG &&
                      ((function (e) {
                        let t = te.get(e.tagName);
                        null != t &&
                          ((e.tagName = t), (e.tagID = eD(e.tagName)));
                      })(t),
                      tr(t)),
                    ti(t),
                    t.selfClosing
                      ? e._appendElement(t, r)
                      : e._insertElement(t, r),
                    (t.ackSelfClosing = !0);
                }
              })(this, e)
            : this._startTagOutsideForeignContent(e);
        }
        _startTagOutsideForeignContent(e) {
          switch (this.insertionMode) {
            case M.INITIAL:
              td(this, e);
              break;
            case M.BEFORE_HTML:
              e.tagID === L.HTML
                ? (this._insertElement(e, D.HTML),
                  (this.insertionMode = M.BEFORE_HEAD))
                : tp(this, e);
              break;
            case M.BEFORE_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.HTML:
                    tR(e, t);
                    break;
                  case L.HEAD:
                    e._insertElement(t, D.HTML),
                      (e.headElement = e.openElements.current),
                      (e.insertionMode = M.IN_HEAD);
                    break;
                  default:
                    tf(e, t);
                }
              })(this, e);
              break;
            case M.IN_HEAD:
              tE(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.HTML:
                    tR(e, t);
                    break;
                  case L.BASEFONT:
                  case L.BGSOUND:
                  case L.HEAD:
                  case L.LINK:
                  case L.META:
                  case L.NOFRAMES:
                  case L.STYLE:
                    tE(e, t);
                    break;
                  case L.NOSCRIPT:
                    e._err(t, _.nestedNoscriptInHead);
                    break;
                  default:
                    tA(e, t);
                }
              })(this, e);
              break;
            case M.AFTER_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.HTML:
                    tR(e, t);
                    break;
                  case L.BODY:
                    e._insertElement(t, D.HTML),
                      (e.framesetOk = !1),
                      (e.insertionMode = M.IN_BODY);
                    break;
                  case L.FRAMESET:
                    e._insertElement(t, D.HTML),
                      (e.insertionMode = M.IN_FRAMESET);
                    break;
                  case L.BASE:
                  case L.BASEFONT:
                  case L.BGSOUND:
                  case L.LINK:
                  case L.META:
                  case L.NOFRAMES:
                  case L.SCRIPT:
                  case L.STYLE:
                  case L.TEMPLATE:
                  case L.TITLE:
                    e._err(t, _.abandonedHeadElementChild),
                      e.openElements.push(e.headElement, L.HEAD),
                      tE(e, t),
                      e.openElements.remove(e.headElement);
                    break;
                  case L.HEAD:
                    e._err(t, _.misplacedStartTagForHeadElement);
                    break;
                  default:
                    t_(e, t);
                }
              })(this, e);
              break;
            case M.IN_BODY:
              tR(this, e);
              break;
            case M.IN_TABLE:
              tP(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tB(this, e);
              break;
            case M.IN_CAPTION:
              !(function (e, t) {
                let n = t.tagID;
                tH.has(n)
                  ? e.openElements.hasInTableScope(L.CAPTION) &&
                    (e.openElements.generateImpliedEndTags(),
                    e.openElements.popUntilTagNamePopped(L.CAPTION),
                    e.activeFormattingElements.clearToLastMarker(),
                    (e.insertionMode = M.IN_TABLE),
                    tP(e, t))
                  : tR(e, t);
              })(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              tw(this, e);
              break;
            case M.IN_TABLE_BODY:
              tG(this, e);
              break;
            case M.IN_ROW:
              tz(this, e);
              break;
            case M.IN_CELL:
              !(function (e, t) {
                let n = t.tagID;
                tH.has(n)
                  ? (e.openElements.hasInTableScope(L.TD) ||
                      e.openElements.hasInTableScope(L.TH)) &&
                    (e._closeTableCell(), tz(e, t))
                  : tR(e, t);
              })(this, e);
              break;
            case M.IN_SELECT:
              tV(this, e);
              break;
            case M.IN_SELECT_IN_TABLE:
              !(function (e, t) {
                let n = t.tagID;
                n === L.CAPTION ||
                n === L.TABLE ||
                n === L.TBODY ||
                n === L.TFOOT ||
                n === L.THEAD ||
                n === L.TR ||
                n === L.TD ||
                n === L.TH
                  ? (e.openElements.popUntilTagNamePopped(L.SELECT),
                    e._resetInsertionMode(),
                    e._processStartTag(t))
                  : tV(e, t);
              })(this, e);
              break;
            case M.IN_TEMPLATE:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.BASE:
                  case L.BASEFONT:
                  case L.BGSOUND:
                  case L.LINK:
                  case L.META:
                  case L.NOFRAMES:
                  case L.SCRIPT:
                  case L.STYLE:
                  case L.TEMPLATE:
                  case L.TITLE:
                    tE(e, t);
                    break;
                  case L.CAPTION:
                  case L.COLGROUP:
                  case L.TBODY:
                  case L.TFOOT:
                  case L.THEAD:
                    (e.tmplInsertionModeStack[0] = M.IN_TABLE),
                      (e.insertionMode = M.IN_TABLE),
                      tP(e, t);
                    break;
                  case L.COL:
                    (e.tmplInsertionModeStack[0] = M.IN_COLUMN_GROUP),
                      (e.insertionMode = M.IN_COLUMN_GROUP),
                      tw(e, t);
                    break;
                  case L.TR:
                    (e.tmplInsertionModeStack[0] = M.IN_TABLE_BODY),
                      (e.insertionMode = M.IN_TABLE_BODY),
                      tG(e, t);
                    break;
                  case L.TD:
                  case L.TH:
                    (e.tmplInsertionModeStack[0] = M.IN_ROW),
                      (e.insertionMode = M.IN_ROW),
                      tz(e, t);
                    break;
                  default:
                    (e.tmplInsertionModeStack[0] = M.IN_BODY),
                      (e.insertionMode = M.IN_BODY),
                      tR(e, t);
                }
              })(this, e);
              break;
            case M.AFTER_BODY:
              e.tagID === L.HTML ? tR(this, e) : tX(this, e);
              break;
            case M.IN_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.HTML:
                    tR(e, t);
                    break;
                  case L.FRAMESET:
                    e._insertElement(t, D.HTML);
                    break;
                  case L.FRAME:
                    e._appendElement(t, D.HTML), (t.ackSelfClosing = !0);
                    break;
                  case L.NOFRAMES:
                    tE(e, t);
                }
              })(this, e);
              break;
            case M.AFTER_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.HTML:
                    tR(e, t);
                    break;
                  case L.NOFRAMES:
                    tE(e, t);
                }
              })(this, e);
              break;
            case M.AFTER_AFTER_BODY:
              e.tagID === L.HTML ? tR(this, e) : tK(this, e);
              break;
            case M.AFTER_AFTER_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.HTML:
                    tR(e, t);
                    break;
                  case L.NOFRAMES:
                    tE(e, t);
                }
              })(this, e);
          }
        }
        onEndTag(e) {
          (this.skipNextNewLine = !1),
            (this.currentToken = e),
            this.currentNotInHTML
              ? (function (e, t) {
                  if (t.tagID === L.P || t.tagID === L.BR) {
                    tJ(e), e._endTagOutsideForeignContent(t);
                    return;
                  }
                  for (let n = e.openElements.stackTop; n > 0; n--) {
                    let r = e.openElements.items[n];
                    if (e.treeAdapter.getNamespaceURI(r) === D.HTML) {
                      e._endTagOutsideForeignContent(t);
                      break;
                    }
                    let i = e.treeAdapter.getTagName(r);
                    if (i.toLowerCase() === t.tagName) {
                      (t.tagName = i), e.openElements.shortenToLength(n);
                      break;
                    }
                  }
                })(this, e)
              : this._endTagOutsideForeignContent(e);
        }
        _endTagOutsideForeignContent(e) {
          var t;
          switch (this.insertionMode) {
            case M.INITIAL:
              td(this, e);
              break;
            case M.BEFORE_HTML:
              !(function (e, t) {
                let n = t.tagID;
                (n === L.HTML || n === L.HEAD || n === L.BODY || n === L.BR) &&
                  tp(e, t);
              })(this, e);
              break;
            case M.BEFORE_HEAD:
              !(function (e, t) {
                let n = t.tagID;
                n === L.HEAD || n === L.BODY || n === L.HTML || n === L.BR
                  ? tf(e, t)
                  : e._err(t, _.endTagWithoutMatchingOpenElement);
              })(this, e);
              break;
            case M.IN_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.HEAD:
                    e.openElements.pop(), (e.insertionMode = M.AFTER_HEAD);
                    break;
                  case L.BODY:
                  case L.BR:
                  case L.HTML:
                    tT(e, t);
                    break;
                  case L.TEMPLATE:
                    tm(e, t);
                    break;
                  default:
                    e._err(t, _.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.NOSCRIPT:
                    e.openElements.pop(), (e.insertionMode = M.IN_HEAD);
                    break;
                  case L.BR:
                    tA(e, t);
                    break;
                  default:
                    e._err(t, _.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case M.AFTER_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.BODY:
                  case L.HTML:
                  case L.BR:
                    t_(e, t);
                    break;
                  case L.TEMPLATE:
                    tm(e, t);
                    break;
                  default:
                    e._err(t, _.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case M.IN_BODY:
              tO(this, e);
              break;
            case M.TEXT:
              e.tagID === L.SCRIPT &&
                (null === (t = this.scriptHandler) ||
                  void 0 === t ||
                  t.call(this, this.openElements.current)),
                this.openElements.pop(),
                (this.insertionMode = this.originalInsertionMode);
              break;
            case M.IN_TABLE:
              tM(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tB(this, e);
              break;
            case M.IN_CAPTION:
              !(function (e, t) {
                let n = t.tagID;
                switch (n) {
                  case L.CAPTION:
                  case L.TABLE:
                    e.openElements.hasInTableScope(L.CAPTION) &&
                      (e.openElements.generateImpliedEndTags(),
                      e.openElements.popUntilTagNamePopped(L.CAPTION),
                      e.activeFormattingElements.clearToLastMarker(),
                      (e.insertionMode = M.IN_TABLE),
                      n === L.TABLE && tM(e, t));
                    break;
                  case L.BODY:
                  case L.COL:
                  case L.COLGROUP:
                  case L.HTML:
                  case L.TBODY:
                  case L.TD:
                  case L.TFOOT:
                  case L.TH:
                  case L.THEAD:
                  case L.TR:
                    break;
                  default:
                    tO(e, t);
                }
              })(this, e);
              break;
            case M.IN_COLUMN_GROUP:
              !(function (e, t) {
                switch (t.tagID) {
                  case L.COLGROUP:
                    e.openElements.currentTagId === L.COLGROUP &&
                      (e.openElements.pop(), (e.insertionMode = M.IN_TABLE));
                    break;
                  case L.TEMPLATE:
                    tm(e, t);
                    break;
                  case L.COL:
                    break;
                  default:
                    tU(e, t);
                }
              })(this, e);
              break;
            case M.IN_TABLE_BODY:
              tY(this, e);
              break;
            case M.IN_ROW:
              tq(this, e);
              break;
            case M.IN_CELL:
              !(function (e, t) {
                let n = t.tagID;
                switch (n) {
                  case L.TD:
                  case L.TH:
                    e.openElements.hasInTableScope(n) &&
                      (e.openElements.generateImpliedEndTags(),
                      e.openElements.popUntilTagNamePopped(n),
                      e.activeFormattingElements.clearToLastMarker(),
                      (e.insertionMode = M.IN_ROW));
                    break;
                  case L.TABLE:
                  case L.TBODY:
                  case L.TFOOT:
                  case L.THEAD:
                  case L.TR:
                    e.openElements.hasInTableScope(n) &&
                      (e._closeTableCell(), tq(e, t));
                    break;
                  case L.BODY:
                  case L.CAPTION:
                  case L.COL:
                  case L.COLGROUP:
                  case L.HTML:
                    break;
                  default:
                    tO(e, t);
                }
              })(this, e);
              break;
            case M.IN_SELECT:
              tj(this, e);
              break;
            case M.IN_SELECT_IN_TABLE:
              !(function (e, t) {
                let n = t.tagID;
                n === L.CAPTION ||
                n === L.TABLE ||
                n === L.TBODY ||
                n === L.TFOOT ||
                n === L.THEAD ||
                n === L.TR ||
                n === L.TD ||
                n === L.TH
                  ? e.openElements.hasInTableScope(n) &&
                    (e.openElements.popUntilTagNamePopped(L.SELECT),
                    e._resetInsertionMode(),
                    e.onEndTag(t))
                  : tj(e, t);
              })(this, e);
              break;
            case M.IN_TEMPLATE:
              e.tagID === L.TEMPLATE && tm(this, e);
              break;
            case M.AFTER_BODY:
              tW(this, e);
              break;
            case M.IN_FRAMESET:
              e.tagID !== L.FRAMESET ||
                this.openElements.isRootHtmlElementCurrent() ||
                (this.openElements.pop(),
                this.fragmentContext ||
                  this.openElements.currentTagId === L.FRAMESET ||
                  (this.insertionMode = M.AFTER_FRAMESET));
              break;
            case M.AFTER_FRAMESET:
              e.tagID === L.HTML &&
                (this.insertionMode = M.AFTER_AFTER_FRAMESET);
              break;
            case M.AFTER_AFTER_BODY:
              tK(this, e);
          }
        }
        onEof(e) {
          switch (this.insertionMode) {
            case M.INITIAL:
              td(this, e);
              break;
            case M.BEFORE_HTML:
              tp(this, e);
              break;
            case M.BEFORE_HEAD:
              tf(this, e);
              break;
            case M.IN_HEAD:
              tT(this, e);
              break;
            case M.IN_HEAD_NO_SCRIPT:
              tA(this, e);
              break;
            case M.AFTER_HEAD:
              t_(this, e);
              break;
            case M.IN_BODY:
            case M.IN_TABLE:
            case M.IN_CAPTION:
            case M.IN_COLUMN_GROUP:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
            case M.IN_CELL:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
              tL(this, e);
              break;
            case M.TEXT:
              this._err(e, _.eofInElementThatCanContainOnlyText),
                this.openElements.pop(),
                (this.insertionMode = this.originalInsertionMode),
                this.onEof(e);
              break;
            case M.IN_TABLE_TEXT:
              tB(this, e);
              break;
            case M.IN_TEMPLATE:
              tQ(this, e);
              break;
            case M.AFTER_BODY:
            case M.IN_FRAMESET:
            case M.AFTER_FRAMESET:
            case M.AFTER_AFTER_BODY:
            case M.AFTER_AFTER_FRAMESET:
              th(this, e);
          }
        }
        onWhitespaceCharacter(e) {
          if (
            this.skipNextNewLine &&
            ((this.skipNextNewLine = !1), e.chars.charCodeAt(0) === A.LINE_FEED)
          ) {
            if (1 === e.chars.length) return;
            e.chars = e.chars.substr(1);
          }
          if (this.tokenizer.inForeignNode) {
            this._insertCharacters(e);
            return;
          }
          switch (this.insertionMode) {
            case M.IN_HEAD:
            case M.IN_HEAD_NO_SCRIPT:
            case M.AFTER_HEAD:
            case M.TEXT:
            case M.IN_COLUMN_GROUP:
            case M.IN_SELECT:
            case M.IN_SELECT_IN_TABLE:
            case M.IN_FRAMESET:
            case M.AFTER_FRAMESET:
              this._insertCharacters(e);
              break;
            case M.IN_BODY:
            case M.IN_CAPTION:
            case M.IN_CELL:
            case M.IN_TEMPLATE:
            case M.AFTER_BODY:
            case M.AFTER_AFTER_BODY:
            case M.AFTER_AFTER_FRAMESET:
              tC(this, e);
              break;
            case M.IN_TABLE:
            case M.IN_TABLE_BODY:
            case M.IN_ROW:
              ty(this, e);
              break;
            case M.IN_TABLE_TEXT:
              tv(this, e);
          }
        }
      }
      function tc(e, t) {
        for (let n = 0; n < 8; n++) {
          let n = (function (e, t) {
            let n =
              e.activeFormattingElements.getElementEntryInScopeWithTagName(
                t.tagName
              );
            return (
              n
                ? e.openElements.contains(n.element)
                  ? e.openElements.hasInScope(t.tagID) || (n = null)
                  : (e.activeFormattingElements.removeEntry(n), (n = null))
                : tb(e, t),
              n
            );
          })(e, t);
          if (!n) break;
          let r = (function (e, t) {
            let n = null,
              r = e.openElements.stackTop;
            for (; r >= 0; r--) {
              let i = e.openElements.items[r];
              if (i === t.element) break;
              e._isSpecialElement(i, e.openElements.tagIDs[r]) && (n = i);
            }
            return (
              n ||
                (e.openElements.shortenToLength(r < 0 ? 0 : r),
                e.activeFormattingElements.removeEntry(t)),
              n
            );
          })(e, n);
          if (!r) break;
          e.activeFormattingElements.bookmark = n;
          let i = (function (e, t, n) {
              let r = t,
                i = e.openElements.getCommonAncestor(t);
              for (let a = 0, s = i; s !== n; a++, s = i) {
                i = e.openElements.getCommonAncestor(s);
                let n = e.activeFormattingElements.getElementEntry(s),
                  o = n && a >= 3;
                !n || o
                  ? (o && e.activeFormattingElements.removeEntry(n),
                    e.openElements.remove(s))
                  : ((s = (function (e, t) {
                      let n = e.treeAdapter.getNamespaceURI(t.element),
                        r = e.treeAdapter.createElement(
                          t.token.tagName,
                          n,
                          t.token.attrs
                        );
                      return (
                        e.openElements.replace(t.element, r), (t.element = r), r
                      );
                    })(e, n)),
                    r === t && (e.activeFormattingElements.bookmark = n),
                    e.treeAdapter.detachNode(r),
                    e.treeAdapter.appendChild(s, r),
                    (r = s));
              }
              return r;
            })(e, r, n.element),
            a = e.openElements.getCommonAncestor(n.element);
          e.treeAdapter.detachNode(i),
            a &&
              (function (e, t, n) {
                let r = eD(e.treeAdapter.getTagName(t));
                if (e._isElementCausesFosterParenting(r))
                  e._fosterParentElement(n);
                else {
                  let i = e.treeAdapter.getNamespaceURI(t);
                  r === L.TEMPLATE &&
                    i === D.HTML &&
                    (t = e.treeAdapter.getTemplateContent(t)),
                    e.treeAdapter.appendChild(t, n);
                }
              })(e, a, i),
            (function (e, t, n) {
              let r = e.treeAdapter.getNamespaceURI(n.element),
                { token: i } = n,
                a = e.treeAdapter.createElement(i.tagName, r, i.attrs);
              e._adoptNodes(t, a),
                e.treeAdapter.appendChild(t, a),
                e.activeFormattingElements.insertElementAfterBookmark(a, i),
                e.activeFormattingElements.removeEntry(n),
                e.openElements.remove(n.element),
                e.openElements.insertAfter(t, a, i.tagID);
            })(e, r, n);
        }
      }
      function tu(e, t) {
        e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
      }
      function th(e, t) {
        if (((e.stopped = !0), t.location)) {
          let n = e.fragmentContext ? 0 : 2;
          for (let r = e.openElements.stackTop; r >= n; r--)
            e._setEndLocation(e.openElements.items[r], t);
          if (!e.fragmentContext && e.openElements.stackTop >= 0) {
            let n = e.openElements.items[0],
              r = e.treeAdapter.getNodeSourceCodeLocation(n);
            if (
              r &&
              !r.endTag &&
              (e._setEndLocation(n, t), e.openElements.stackTop >= 1)
            ) {
              let n = e.openElements.items[1],
                r = e.treeAdapter.getNodeSourceCodeLocation(n);
              r && !r.endTag && e._setEndLocation(n, t);
            }
          }
        }
      }
      function td(e, t) {
        e._err(t, _.missingDoctype, !0),
          e.treeAdapter.setDocumentMode(e.document, b.QUIRKS),
          (e.insertionMode = M.BEFORE_HTML),
          e._processToken(t);
      }
      function tp(e, t) {
        e._insertFakeRootElement(),
          (e.insertionMode = M.BEFORE_HEAD),
          e._processToken(t);
      }
      function tf(e, t) {
        e._insertFakeElement(O.HEAD, L.HEAD),
          (e.headElement = e.openElements.current),
          (e.insertionMode = M.IN_HEAD),
          e._processToken(t);
      }
      function tE(e, t) {
        switch (t.tagID) {
          case L.HTML:
            tR(e, t);
            break;
          case L.BASE:
          case L.BASEFONT:
          case L.BGSOUND:
          case L.LINK:
          case L.META:
            e._appendElement(t, D.HTML), (t.ackSelfClosing = !0);
            break;
          case L.TITLE:
            e._switchToTextParsing(t, ey.RCDATA);
            break;
          case L.NOSCRIPT:
            e.options.scriptingEnabled
              ? e._switchToTextParsing(t, ey.RAWTEXT)
              : (e._insertElement(t, D.HTML),
                (e.insertionMode = M.IN_HEAD_NO_SCRIPT));
            break;
          case L.NOFRAMES:
          case L.STYLE:
            e._switchToTextParsing(t, ey.RAWTEXT);
            break;
          case L.SCRIPT:
            e._switchToTextParsing(t, ey.SCRIPT_DATA);
            break;
          case L.TEMPLATE:
            e._insertTemplate(t),
              e.activeFormattingElements.insertMarker(),
              (e.framesetOk = !1),
              (e.insertionMode = M.IN_TEMPLATE),
              e.tmplInsertionModeStack.unshift(M.IN_TEMPLATE);
            break;
          case L.HEAD:
            e._err(t, _.misplacedStartTagForHeadElement);
            break;
          default:
            tT(e, t);
        }
      }
      function tm(e, t) {
        e.openElements.tmplCount > 0
          ? (e.openElements.generateImpliedEndTagsThoroughly(),
            e.openElements.currentTagId !== L.TEMPLATE &&
              e._err(t, _.closingOfElementWithOpenChildElements),
            e.openElements.popUntilTagNamePopped(L.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode())
          : e._err(t, _.endTagWithoutMatchingOpenElement);
      }
      function tT(e, t) {
        e.openElements.pop(),
          (e.insertionMode = M.AFTER_HEAD),
          e._processToken(t);
      }
      function tA(e, t) {
        let n =
          t.type === g.EOF
            ? _.openElementsLeftAfterEof
            : _.disallowedContentInNoscriptInHead;
        e._err(t, n),
          e.openElements.pop(),
          (e.insertionMode = M.IN_HEAD),
          e._processToken(t);
      }
      function t_(e, t) {
        e._insertFakeElement(O.BODY, L.BODY),
          (e.insertionMode = M.IN_BODY),
          tg(e, t);
      }
      function tg(e, t) {
        switch (t.type) {
          case g.CHARACTER:
            tI(e, t);
            break;
          case g.WHITESPACE_CHARACTER:
            tC(e, t);
            break;
          case g.COMMENT:
            tu(e, t);
            break;
          case g.START_TAG:
            tR(e, t);
            break;
          case g.END_TAG:
            tO(e, t);
            break;
          case g.EOF:
            tL(e, t);
        }
      }
      function tC(e, t) {
        e._reconstructActiveFormattingElements(), e._insertCharacters(t);
      }
      function tI(e, t) {
        e._reconstructActiveFormattingElements(),
          e._insertCharacters(t),
          (e.framesetOk = !1);
      }
      function tN(e, t) {
        e._reconstructActiveFormattingElements(),
          e._appendElement(t, D.HTML),
          (e.framesetOk = !1),
          (t.ackSelfClosing = !0);
      }
      function tS(e) {
        let t = em(e, R.TYPE);
        return null != t && "hidden" === t.toLowerCase();
      }
      function tk(e, t) {
        e._switchToTextParsing(t, ey.RAWTEXT);
      }
      function tD(e, t) {
        e._reconstructActiveFormattingElements(), e._insertElement(t, D.HTML);
      }
      function tR(e, t) {
        switch (t.tagID) {
          case L.I:
          case L.S:
          case L.B:
          case L.U:
          case L.EM:
          case L.TT:
          case L.BIG:
          case L.CODE:
          case L.FONT:
          case L.SMALL:
          case L.STRIKE:
          case L.STRONG:
            e._reconstructActiveFormattingElements(),
              e._insertElement(t, D.HTML),
              e.activeFormattingElements.pushElement(e.openElements.current, t);
            break;
          case L.A:
            !(function (e, t) {
              let n =
                e.activeFormattingElements.getElementEntryInScopeWithTagName(
                  O.A
                );
              n &&
                (tc(e, t),
                e.openElements.remove(n.element),
                e.activeFormattingElements.removeEntry(n)),
                e._reconstructActiveFormattingElements(),
                e._insertElement(t, D.HTML),
                e.activeFormattingElements.pushElement(
                  e.openElements.current,
                  t
                );
            })(e, t);
            break;
          case L.H1:
          case L.H2:
          case L.H3:
          case L.H4:
          case L.H5:
          case L.H6:
            e.openElements.hasInButtonScope(L.P) && e._closePElement(),
              eO(e.openElements.currentTagId) && e.openElements.pop(),
              e._insertElement(t, D.HTML);
            break;
          case L.P:
          case L.DL:
          case L.OL:
          case L.UL:
          case L.DIV:
          case L.DIR:
          case L.NAV:
          case L.MAIN:
          case L.MENU:
          case L.ASIDE:
          case L.CENTER:
          case L.FIGURE:
          case L.FOOTER:
          case L.HEADER:
          case L.HGROUP:
          case L.DIALOG:
          case L.DETAILS:
          case L.ADDRESS:
          case L.ARTICLE:
          case L.SECTION:
          case L.SUMMARY:
          case L.FIELDSET:
          case L.BLOCKQUOTE:
          case L.FIGCAPTION:
            e.openElements.hasInButtonScope(L.P) && e._closePElement(),
              e._insertElement(t, D.HTML);
            break;
          case L.LI:
          case L.DD:
          case L.DT:
            !(function (e, t) {
              e.framesetOk = !1;
              let n = t.tagID;
              for (let t = e.openElements.stackTop; t >= 0; t--) {
                let r = e.openElements.tagIDs[t];
                if (
                  (n === L.LI && r === L.LI) ||
                  ((n === L.DD || n === L.DT) && (r === L.DD || r === L.DT))
                ) {
                  e.openElements.generateImpliedEndTagsWithExclusion(r),
                    e.openElements.popUntilTagNamePopped(r);
                  break;
                }
                if (
                  r !== L.ADDRESS &&
                  r !== L.DIV &&
                  r !== L.P &&
                  e._isSpecialElement(e.openElements.items[t], r)
                )
                  break;
              }
              e.openElements.hasInButtonScope(L.P) && e._closePElement(),
                e._insertElement(t, D.HTML);
            })(e, t);
            break;
          case L.BR:
          case L.IMG:
          case L.WBR:
          case L.AREA:
          case L.EMBED:
          case L.KEYGEN:
            tN(e, t);
            break;
          case L.HR:
            e.openElements.hasInButtonScope(L.P) && e._closePElement(),
              e._appendElement(t, D.HTML),
              (e.framesetOk = !1),
              (t.ackSelfClosing = !0);
            break;
          case L.RB:
          case L.RTC:
            e.openElements.hasInScope(L.RUBY) &&
              e.openElements.generateImpliedEndTags(),
              e._insertElement(t, D.HTML);
            break;
          case L.RT:
          case L.RP:
            e.openElements.hasInScope(L.RUBY) &&
              e.openElements.generateImpliedEndTagsWithExclusion(L.RTC),
              e._insertElement(t, D.HTML);
            break;
          case L.PRE:
          case L.LISTING:
            e.openElements.hasInButtonScope(L.P) && e._closePElement(),
              e._insertElement(t, D.HTML),
              (e.skipNextNewLine = !0),
              (e.framesetOk = !1);
            break;
          case L.XMP:
            e.openElements.hasInButtonScope(L.P) && e._closePElement(),
              e._reconstructActiveFormattingElements(),
              (e.framesetOk = !1),
              e._switchToTextParsing(t, ey.RAWTEXT);
            break;
          case L.SVG:
            e._reconstructActiveFormattingElements(),
              tr(t),
              ti(t),
              t.selfClosing
                ? e._appendElement(t, D.SVG)
                : e._insertElement(t, D.SVG),
              (t.ackSelfClosing = !0);
            break;
          case L.HTML:
            0 === e.openElements.tmplCount &&
              e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
            break;
          case L.BASE:
          case L.LINK:
          case L.META:
          case L.STYLE:
          case L.TITLE:
          case L.SCRIPT:
          case L.BGSOUND:
          case L.BASEFONT:
          case L.TEMPLATE:
            tE(e, t);
            break;
          case L.BODY:
            !(function (e, t) {
              let n = e.openElements.tryPeekProperlyNestedBodyElement();
              n &&
                0 === e.openElements.tmplCount &&
                ((e.framesetOk = !1),
                e.treeAdapter.adoptAttributes(n, t.attrs));
            })(e, t);
            break;
          case L.FORM:
            !(function (e, t) {
              let n = e.openElements.tmplCount > 0;
              (e.formElement && !n) ||
                (e.openElements.hasInButtonScope(L.P) && e._closePElement(),
                e._insertElement(t, D.HTML),
                n || (e.formElement = e.openElements.current));
            })(e, t);
            break;
          case L.NOBR:
            e._reconstructActiveFormattingElements(),
              e.openElements.hasInScope(L.NOBR) &&
                (tc(e, t), e._reconstructActiveFormattingElements()),
              e._insertElement(t, D.HTML),
              e.activeFormattingElements.pushElement(e.openElements.current, t);
            break;
          case L.MATH:
            e._reconstructActiveFormattingElements(),
              tn(t),
              ti(t),
              t.selfClosing
                ? e._appendElement(t, D.MATHML)
                : e._insertElement(t, D.MATHML),
              (t.ackSelfClosing = !0);
            break;
          case L.TABLE:
            e.treeAdapter.getDocumentMode(e.document) !== b.QUIRKS &&
              e.openElements.hasInButtonScope(L.P) &&
              e._closePElement(),
              e._insertElement(t, D.HTML),
              (e.framesetOk = !1),
              (e.insertionMode = M.IN_TABLE);
            break;
          case L.INPUT:
            e._reconstructActiveFormattingElements(),
              e._appendElement(t, D.HTML),
              tS(t) || (e.framesetOk = !1),
              (t.ackSelfClosing = !0);
            break;
          case L.PARAM:
          case L.TRACK:
          case L.SOURCE:
            e._appendElement(t, D.HTML), (t.ackSelfClosing = !0);
            break;
          case L.IMAGE:
            (t.tagName = O.IMG), (t.tagID = L.IMG), tN(e, t);
            break;
          case L.BUTTON:
            e.openElements.hasInScope(L.BUTTON) &&
              (e.openElements.generateImpliedEndTags(),
              e.openElements.popUntilTagNamePopped(L.BUTTON)),
              e._reconstructActiveFormattingElements(),
              e._insertElement(t, D.HTML),
              (e.framesetOk = !1);
            break;
          case L.APPLET:
          case L.OBJECT:
          case L.MARQUEE:
            e._reconstructActiveFormattingElements(),
              e._insertElement(t, D.HTML),
              e.activeFormattingElements.insertMarker(),
              (e.framesetOk = !1);
            break;
          case L.IFRAME:
            (e.framesetOk = !1), e._switchToTextParsing(t, ey.RAWTEXT);
            break;
          case L.SELECT:
            e._reconstructActiveFormattingElements(),
              e._insertElement(t, D.HTML),
              (e.framesetOk = !1),
              (e.insertionMode =
                e.insertionMode === M.IN_TABLE ||
                e.insertionMode === M.IN_CAPTION ||
                e.insertionMode === M.IN_TABLE_BODY ||
                e.insertionMode === M.IN_ROW ||
                e.insertionMode === M.IN_CELL
                  ? M.IN_SELECT_IN_TABLE
                  : M.IN_SELECT);
            break;
          case L.OPTION:
          case L.OPTGROUP:
            e.openElements.currentTagId === L.OPTION && e.openElements.pop(),
              e._reconstructActiveFormattingElements(),
              e._insertElement(t, D.HTML);
            break;
          case L.NOEMBED:
            tk(e, t);
            break;
          case L.FRAMESET:
            !(function (e, t) {
              let n = e.openElements.tryPeekProperlyNestedBodyElement();
              e.framesetOk &&
                n &&
                (e.treeAdapter.detachNode(n),
                e.openElements.popAllUpToHtmlElement(),
                e._insertElement(t, D.HTML),
                (e.insertionMode = M.IN_FRAMESET));
            })(e, t);
            break;
          case L.TEXTAREA:
            e._insertElement(t, D.HTML),
              (e.skipNextNewLine = !0),
              (e.tokenizer.state = ey.RCDATA),
              (e.originalInsertionMode = e.insertionMode),
              (e.framesetOk = !1),
              (e.insertionMode = M.TEXT);
            break;
          case L.NOSCRIPT:
            e.options.scriptingEnabled ? tk(e, t) : tD(e, t);
            break;
          case L.PLAINTEXT:
            e.openElements.hasInButtonScope(L.P) && e._closePElement(),
              e._insertElement(t, D.HTML),
              (e.tokenizer.state = ey.PLAINTEXT);
            break;
          case L.COL:
          case L.TH:
          case L.TD:
          case L.TR:
          case L.HEAD:
          case L.FRAME:
          case L.TBODY:
          case L.TFOOT:
          case L.THEAD:
          case L.CAPTION:
          case L.COLGROUP:
            break;
          default:
            tD(e, t);
        }
      }
      function tb(e, t) {
        let n = t.tagName,
          r = t.tagID;
        for (let t = e.openElements.stackTop; t > 0; t--) {
          let i = e.openElements.items[t],
            a = e.openElements.tagIDs[t];
          if (
            r === a &&
            (r !== L.UNKNOWN || e.treeAdapter.getTagName(i) === n)
          ) {
            e.openElements.generateImpliedEndTagsWithExclusion(r),
              e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
            break;
          }
          if (e._isSpecialElement(i, a)) break;
        }
      }
      function tO(e, t) {
        switch (t.tagID) {
          case L.A:
          case L.B:
          case L.I:
          case L.S:
          case L.U:
          case L.EM:
          case L.TT:
          case L.BIG:
          case L.CODE:
          case L.FONT:
          case L.NOBR:
          case L.SMALL:
          case L.STRIKE:
          case L.STRONG:
            tc(e, t);
            break;
          case L.P:
            e.openElements.hasInButtonScope(L.P) ||
              e._insertFakeElement(O.P, L.P),
              e._closePElement();
            break;
          case L.DL:
          case L.UL:
          case L.OL:
          case L.DIR:
          case L.DIV:
          case L.NAV:
          case L.PRE:
          case L.MAIN:
          case L.MENU:
          case L.ASIDE:
          case L.BUTTON:
          case L.CENTER:
          case L.FIGURE:
          case L.FOOTER:
          case L.HEADER:
          case L.HGROUP:
          case L.DIALOG:
          case L.ADDRESS:
          case L.ARTICLE:
          case L.DETAILS:
          case L.SECTION:
          case L.SUMMARY:
          case L.LISTING:
          case L.FIELDSET:
          case L.BLOCKQUOTE:
          case L.FIGCAPTION:
            !(function (e, t) {
              let n = t.tagID;
              e.openElements.hasInScope(n) &&
                (e.openElements.generateImpliedEndTags(),
                e.openElements.popUntilTagNamePopped(n));
            })(e, t);
            break;
          case L.LI:
            e.openElements.hasInListItemScope(L.LI) &&
              (e.openElements.generateImpliedEndTagsWithExclusion(L.LI),
              e.openElements.popUntilTagNamePopped(L.LI));
            break;
          case L.DD:
          case L.DT:
            !(function (e, t) {
              let n = t.tagID;
              e.openElements.hasInScope(n) &&
                (e.openElements.generateImpliedEndTagsWithExclusion(n),
                e.openElements.popUntilTagNamePopped(n));
            })(e, t);
            break;
          case L.H1:
          case L.H2:
          case L.H3:
          case L.H4:
          case L.H5:
          case L.H6:
            e.openElements.hasNumberedHeaderInScope() &&
              (e.openElements.generateImpliedEndTags(),
              e.openElements.popUntilNumberedHeaderPopped());
            break;
          case L.BR:
            e._reconstructActiveFormattingElements(),
              e._insertFakeElement(O.BR, L.BR),
              e.openElements.pop(),
              (e.framesetOk = !1);
            break;
          case L.BODY:
            !(function (e, t) {
              if (
                e.openElements.hasInScope(L.BODY) &&
                ((e.insertionMode = M.AFTER_BODY),
                e.options.sourceCodeLocationInfo)
              ) {
                let n = e.openElements.tryPeekProperlyNestedBodyElement();
                n && e._setEndLocation(n, t);
              }
            })(e, t);
            break;
          case L.HTML:
            e.openElements.hasInScope(L.BODY) &&
              ((e.insertionMode = M.AFTER_BODY), tW(e, t));
            break;
          case L.FORM:
            !(function (e) {
              let t = e.openElements.tmplCount > 0,
                { formElement: n } = e;
              t || (e.formElement = null),
                (n || t) &&
                  e.openElements.hasInScope(L.FORM) &&
                  (e.openElements.generateImpliedEndTags(),
                  t
                    ? e.openElements.popUntilTagNamePopped(L.FORM)
                    : n && e.openElements.remove(n));
            })(e);
            break;
          case L.APPLET:
          case L.OBJECT:
          case L.MARQUEE:
            !(function (e, t) {
              let n = t.tagID;
              e.openElements.hasInScope(n) &&
                (e.openElements.generateImpliedEndTags(),
                e.openElements.popUntilTagNamePopped(n),
                e.activeFormattingElements.clearToLastMarker());
            })(e, t);
            break;
          case L.TEMPLATE:
            tm(e, t);
            break;
          default:
            tb(e, t);
        }
      }
      function tL(e, t) {
        e.tmplInsertionModeStack.length > 0 ? tQ(e, t) : th(e, t);
      }
      function ty(e, t) {
        if (ts.has(e.openElements.currentTagId))
          switch (
            ((e.pendingCharacterTokens.length = 0),
            (e.hasNonWhitespacePendingCharacterToken = !1),
            (e.originalInsertionMode = e.insertionMode),
            (e.insertionMode = M.IN_TABLE_TEXT),
            t.type)
          ) {
            case g.CHARACTER:
              tF(e, t);
              break;
            case g.WHITESPACE_CHARACTER:
              tv(e, t);
          }
        else tx(e, t);
      }
      function tP(e, t) {
        switch (t.tagID) {
          case L.TD:
          case L.TH:
          case L.TR:
            e.openElements.clearBackToTableContext(),
              e._insertFakeElement(O.TBODY, L.TBODY),
              (e.insertionMode = M.IN_TABLE_BODY),
              tG(e, t);
            break;
          case L.STYLE:
          case L.SCRIPT:
          case L.TEMPLATE:
            tE(e, t);
            break;
          case L.COL:
            e.openElements.clearBackToTableContext(),
              e._insertFakeElement(O.COLGROUP, L.COLGROUP),
              (e.insertionMode = M.IN_COLUMN_GROUP),
              tw(e, t);
            break;
          case L.FORM:
            e.formElement ||
              0 !== e.openElements.tmplCount ||
              (e._insertElement(t, D.HTML),
              (e.formElement = e.openElements.current),
              e.openElements.pop());
            break;
          case L.TABLE:
            e.openElements.hasInTableScope(L.TABLE) &&
              (e.openElements.popUntilTagNamePopped(L.TABLE),
              e._resetInsertionMode(),
              e._processStartTag(t));
            break;
          case L.TBODY:
          case L.TFOOT:
          case L.THEAD:
            e.openElements.clearBackToTableContext(),
              e._insertElement(t, D.HTML),
              (e.insertionMode = M.IN_TABLE_BODY);
            break;
          case L.INPUT:
            tS(t) ? e._appendElement(t, D.HTML) : tx(e, t),
              (t.ackSelfClosing = !0);
            break;
          case L.CAPTION:
            e.openElements.clearBackToTableContext(),
              e.activeFormattingElements.insertMarker(),
              e._insertElement(t, D.HTML),
              (e.insertionMode = M.IN_CAPTION);
            break;
          case L.COLGROUP:
            e.openElements.clearBackToTableContext(),
              e._insertElement(t, D.HTML),
              (e.insertionMode = M.IN_COLUMN_GROUP);
            break;
          default:
            tx(e, t);
        }
      }
      function tM(e, t) {
        switch (t.tagID) {
          case L.TABLE:
            e.openElements.hasInTableScope(L.TABLE) &&
              (e.openElements.popUntilTagNamePopped(L.TABLE),
              e._resetInsertionMode());
            break;
          case L.TEMPLATE:
            tm(e, t);
            break;
          case L.BODY:
          case L.CAPTION:
          case L.COL:
          case L.COLGROUP:
          case L.HTML:
          case L.TBODY:
          case L.TD:
          case L.TFOOT:
          case L.TH:
          case L.THEAD:
          case L.TR:
            break;
          default:
            tx(e, t);
        }
      }
      function tx(e, t) {
        let n = e.fosterParentingEnabled;
        (e.fosterParentingEnabled = !0),
          tg(e, t),
          (e.fosterParentingEnabled = n);
      }
      function tv(e, t) {
        e.pendingCharacterTokens.push(t);
      }
      function tF(e, t) {
        e.pendingCharacterTokens.push(t),
          (e.hasNonWhitespacePendingCharacterToken = !0);
      }
      function tB(e, t) {
        let n = 0;
        if (e.hasNonWhitespacePendingCharacterToken)
          for (; n < e.pendingCharacterTokens.length; n++)
            tx(e, e.pendingCharacterTokens[n]);
        else
          for (; n < e.pendingCharacterTokens.length; n++)
            e._insertCharacters(e.pendingCharacterTokens[n]);
        (e.insertionMode = e.originalInsertionMode), e._processToken(t);
      }
      let tH = new Set([
        L.CAPTION,
        L.COL,
        L.COLGROUP,
        L.TBODY,
        L.TD,
        L.TFOOT,
        L.TH,
        L.THEAD,
        L.TR,
      ]);
      function tw(e, t) {
        switch (t.tagID) {
          case L.HTML:
            tR(e, t);
            break;
          case L.COL:
            e._appendElement(t, D.HTML), (t.ackSelfClosing = !0);
            break;
          case L.TEMPLATE:
            tE(e, t);
            break;
          default:
            tU(e, t);
        }
      }
      function tU(e, t) {
        e.openElements.currentTagId === L.COLGROUP &&
          (e.openElements.pop(),
          (e.insertionMode = M.IN_TABLE),
          e._processToken(t));
      }
      function tG(e, t) {
        switch (t.tagID) {
          case L.TR:
            e.openElements.clearBackToTableBodyContext(),
              e._insertElement(t, D.HTML),
              (e.insertionMode = M.IN_ROW);
            break;
          case L.TH:
          case L.TD:
            e.openElements.clearBackToTableBodyContext(),
              e._insertFakeElement(O.TR, L.TR),
              (e.insertionMode = M.IN_ROW),
              tz(e, t);
            break;
          case L.CAPTION:
          case L.COL:
          case L.COLGROUP:
          case L.TBODY:
          case L.TFOOT:
          case L.THEAD:
            e.openElements.hasTableBodyContextInTableScope() &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE),
              tP(e, t));
            break;
          default:
            tP(e, t);
        }
      }
      function tY(e, t) {
        let n = t.tagID;
        switch (t.tagID) {
          case L.TBODY:
          case L.TFOOT:
          case L.THEAD:
            e.openElements.hasInTableScope(n) &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE));
            break;
          case L.TABLE:
            e.openElements.hasTableBodyContextInTableScope() &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE),
              tM(e, t));
            break;
          case L.BODY:
          case L.CAPTION:
          case L.COL:
          case L.COLGROUP:
          case L.HTML:
          case L.TD:
          case L.TH:
          case L.TR:
            break;
          default:
            tM(e, t);
        }
      }
      function tz(e, t) {
        switch (t.tagID) {
          case L.TH:
          case L.TD:
            e.openElements.clearBackToTableRowContext(),
              e._insertElement(t, D.HTML),
              (e.insertionMode = M.IN_CELL),
              e.activeFormattingElements.insertMarker();
            break;
          case L.CAPTION:
          case L.COL:
          case L.COLGROUP:
          case L.TBODY:
          case L.TFOOT:
          case L.THEAD:
          case L.TR:
            e.openElements.hasInTableScope(L.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY),
              tG(e, t));
            break;
          default:
            tP(e, t);
        }
      }
      function tq(e, t) {
        switch (t.tagID) {
          case L.TR:
            e.openElements.hasInTableScope(L.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY));
            break;
          case L.TABLE:
            e.openElements.hasInTableScope(L.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY),
              tY(e, t));
            break;
          case L.TBODY:
          case L.TFOOT:
          case L.THEAD:
            (e.openElements.hasInTableScope(t.tagID) ||
              e.openElements.hasInTableScope(L.TR)) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = M.IN_TABLE_BODY),
              tY(e, t));
            break;
          case L.BODY:
          case L.CAPTION:
          case L.COL:
          case L.COLGROUP:
          case L.HTML:
          case L.TD:
          case L.TH:
            break;
          default:
            tM(e, t);
        }
      }
      function tV(e, t) {
        switch (t.tagID) {
          case L.HTML:
            tR(e, t);
            break;
          case L.OPTION:
            e.openElements.currentTagId === L.OPTION && e.openElements.pop(),
              e._insertElement(t, D.HTML);
            break;
          case L.OPTGROUP:
            e.openElements.currentTagId === L.OPTION && e.openElements.pop(),
              e.openElements.currentTagId === L.OPTGROUP &&
                e.openElements.pop(),
              e._insertElement(t, D.HTML);
            break;
          case L.INPUT:
          case L.KEYGEN:
          case L.TEXTAREA:
          case L.SELECT:
            e.openElements.hasInSelectScope(L.SELECT) &&
              (e.openElements.popUntilTagNamePopped(L.SELECT),
              e._resetInsertionMode(),
              t.tagID !== L.SELECT && e._processStartTag(t));
            break;
          case L.SCRIPT:
          case L.TEMPLATE:
            tE(e, t);
        }
      }
      function tj(e, t) {
        switch (t.tagID) {
          case L.OPTGROUP:
            e.openElements.stackTop > 0 &&
              e.openElements.currentTagId === L.OPTION &&
              e.openElements.tagIDs[e.openElements.stackTop - 1] ===
                L.OPTGROUP &&
              e.openElements.pop(),
              e.openElements.currentTagId === L.OPTGROUP &&
                e.openElements.pop();
            break;
          case L.OPTION:
            e.openElements.currentTagId === L.OPTION && e.openElements.pop();
            break;
          case L.SELECT:
            e.openElements.hasInSelectScope(L.SELECT) &&
              (e.openElements.popUntilTagNamePopped(L.SELECT),
              e._resetInsertionMode());
            break;
          case L.TEMPLATE:
            tm(e, t);
        }
      }
      function tQ(e, t) {
        e.openElements.tmplCount > 0
          ? (e.openElements.popUntilTagNamePopped(L.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode(),
            e.onEof(t))
          : th(e, t);
      }
      function tW(e, t) {
        var n;
        if (t.tagID === L.HTML) {
          if (
            (e.fragmentContext || (e.insertionMode = M.AFTER_AFTER_BODY),
            e.options.sourceCodeLocationInfo &&
              e.openElements.tagIDs[0] === L.HTML)
          ) {
            e._setEndLocation(e.openElements.items[0], t);
            let r = e.openElements.items[1];
            !r ||
              (null === (n = e.treeAdapter.getNodeSourceCodeLocation(r)) ||
              void 0 === n
                ? void 0
                : n.endTag) ||
              e._setEndLocation(r, t);
          }
        } else tX(e, t);
      }
      function tX(e, t) {
        (e.insertionMode = M.IN_BODY), tg(e, t);
      }
      function tK(e, t) {
        (e.insertionMode = M.IN_BODY), tg(e, t);
      }
      function tJ(e) {
        for (
          ;
          e.treeAdapter.getNamespaceURI(e.openElements.current) !== D.HTML &&
          !e._isIntegrationPoint(
            e.openElements.currentTagId,
            e.openElements.current
          );

        )
          e.openElements.pop();
      }
      let tZ = new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [39, "&apos;"],
        [60, "&lt;"],
        [62, "&gt;"],
      ]);
      function t$(e, t) {
        return function (n) {
          let r;
          let i = 0,
            a = "";
          for (; (r = e.exec(n)); )
            i !== r.index && (a += n.substring(i, r.index)),
              (a += t.get(r[0].charCodeAt(0))),
              (i = r.index + 1);
          return a + n.substring(i);
        };
      }
      null != String.prototype.codePointAt ||
        ((e, t) =>
          (64512 & e.charCodeAt(t)) == 55296
            ? (e.charCodeAt(t) - 55296) * 1024 +
              e.charCodeAt(t + 1) -
              56320 +
              65536
            : e.charCodeAt(t)),
        t$(/[&<>'"]/g, tZ),
        t$(
          /["&\u00A0]/g,
          new Map([
            [34, "&quot;"],
            [38, "&amp;"],
            [160, "&nbsp;"],
          ])
        ),
        t$(
          /[&<>\u00A0]/g,
          new Map([
            [38, "&amp;"],
            [60, "&lt;"],
            [62, "&gt;"],
            [160, "&nbsp;"],
          ])
        ),
        O.AREA,
        O.BASE,
        O.BASEFONT,
        O.BGSOUND,
        O.BR,
        O.COL,
        O.EMBED,
        O.FRAME,
        O.HR,
        O.IMG,
        O.INPUT,
        O.KEYGEN,
        O.LINK,
        O.META,
        O.PARAM,
        O.SOURCE,
        O.TRACK,
        O.WBR;
      var t0 = n(3980),
        t1 = n(21623);
      let t3 = new Set([
          "mdxFlowExpression",
          "mdxJsxFlowElement",
          "mdxJsxTextElement",
          "mdxTextExpression",
          "mdxjsEsm",
        ]),
        t2 = { sourceCodeLocationInfo: !0, scriptingEnabled: !1 };
      function t5(e, t) {
        let n = (function (e) {
            let t = "root" === e.type ? e.children[0] : e;
            return !!(
              t &&
              ("doctype" === t.type ||
                ("element" === t.type && "html" === t.tagName.toLowerCase()))
            );
          })(e),
          r = ei("type", {
            handlers: {
              root: t8,
              element: t9,
              text: t6,
              comment: ne,
              doctype: t7,
              raw: nt,
            },
            unknown: nn,
          }),
          i = {
            parser: n ? new tl(t2) : tl.getFragmentParser(void 0, t2),
            handle(e) {
              r(e, i);
            },
            stitches: !1,
            options: t || {},
          };
        r(e, i), nr(i, (0, t0.Pk)());
        let a = (function (e, t) {
          let n = t || {};
          return Z(
            {
              file: n.file || void 0,
              location: !1,
              schema: "svg" === n.space ? F.YP : F.dy,
              verbose: n.verbose || !1,
            },
            e
          );
        })(n ? i.parser.document : i.parser.getFragment(), {
          file: i.options.file,
        });
        return (i.stitches &&
          (0, t1.Vn)(a, "comment", function (e, t, n) {
            if (e.value.stitch && n && void 0 !== t)
              return (n.children[t] = e.value.stitch), t;
          }),
        "root" === a.type &&
          1 === a.children.length &&
          a.children[0].type === e.type)
          ? a.children[0]
          : a;
      }
      function t4(e, t) {
        let n = -1;
        if (e) for (; ++n < e.length; ) t.handle(e[n]);
      }
      function t8(e, t) {
        t4(e.children, t);
      }
      function t9(e, t) {
        (function (e, t) {
          let n = e.tagName.toLowerCase();
          if (t.parser.tokenizer.state === ey.PLAINTEXT) return;
          nr(t, (0, t0.Pk)(e));
          let r = t.parser.openElements.current,
            i = "namespaceURI" in r ? r.namespaceURI : X.html;
          i === X.html && "svg" === n && (i = X.svg);
          let a = es(
              { ...e, children: [] },
              "svg" === { space: i === X.svg ? "svg" : "html" }.space
                ? F.YP
                : F.dy
            ),
            s = {
              type: g.START_TAG,
              tagName: n,
              tagID: eD(n),
              selfClosing: !1,
              ackSelfClosing: !1,
              attrs: "attrs" in a ? a.attrs : [],
              location: na(e),
            };
          (t.parser.currentToken = s),
            t.parser._processToken(t.parser.currentToken),
            (t.parser.tokenizer.lastStartTagName = n);
        })(e, t),
          t4(e.children, t),
          (function (e, t) {
            let n = e.tagName.toLowerCase();
            if (
              (!t.parser.tokenizer.inForeignNode && ec.includes(n)) ||
              t.parser.tokenizer.state === ey.PLAINTEXT
            )
              return;
            nr(t, (0, t0.rb)(e));
            let r = {
              type: g.END_TAG,
              tagName: n,
              tagID: eD(n),
              selfClosing: !1,
              ackSelfClosing: !1,
              attrs: [],
              location: na(e),
            };
            (t.parser.currentToken = r),
              t.parser._processToken(t.parser.currentToken),
              n === t.parser.tokenizer.lastStartTagName &&
                (t.parser.tokenizer.state === ey.RCDATA ||
                  t.parser.tokenizer.state === ey.RAWTEXT ||
                  t.parser.tokenizer.state === ey.SCRIPT_DATA) &&
                (t.parser.tokenizer.state = ey.DATA);
          })(e, t);
      }
      function t6(e, t) {
        t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
        let n = { type: g.CHARACTER, chars: e.value, location: na(e) };
        nr(t, (0, t0.Pk)(e)),
          (t.parser.currentToken = n),
          t.parser._processToken(t.parser.currentToken);
      }
      function t7(e, t) {
        let n = {
          type: g.DOCTYPE,
          name: "html",
          forceQuirks: !1,
          publicId: "",
          systemId: "",
          location: na(e),
        };
        nr(t, (0, t0.Pk)(e)),
          (t.parser.currentToken = n),
          t.parser._processToken(t.parser.currentToken);
      }
      function ne(e, t) {
        let n = e.value,
          r = { type: g.COMMENT, data: n, location: na(e) };
        nr(t, (0, t0.Pk)(e)),
          (t.parser.currentToken = r),
          t.parser._processToken(t.parser.currentToken);
      }
      function nt(e, t) {
        if (
          ((t.parser.tokenizer.preprocessor.html = ""),
          (t.parser.tokenizer.preprocessor.pos = -1),
          (t.parser.tokenizer.preprocessor.lastGapPos = -2),
          (t.parser.tokenizer.preprocessor.gapStack = []),
          (t.parser.tokenizer.preprocessor.skipNextNewLine = !1),
          (t.parser.tokenizer.preprocessor.lastChunkWritten = !1),
          (t.parser.tokenizer.preprocessor.endOfChunkHit = !1),
          (t.parser.tokenizer.preprocessor.isEol = !1),
          ni(t, (0, t0.Pk)(e)),
          t.parser.tokenizer.write(e.value, !1),
          t.parser.tokenizer._runParsingLoop(),
          72 === t.parser.tokenizer.state || 78 === t.parser.tokenizer.state)
        ) {
          t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
          let e = t.parser.tokenizer._consume();
          t.parser.tokenizer._callState(e);
        }
      }
      function nn(e, t) {
        if (t.options.passThrough && t.options.passThrough.includes(e.type))
          !(function (e, t) {
            t.stitches = !0;
            let n =
              "children" in e
                ? (0, x.ZP)({ ...e, children: [] })
                : (0, x.ZP)(e);
            if ("children" in e && "children" in n) {
              let r = t5({ type: "root", children: e.children }, t.options);
              n.children = r.children;
            }
            ne({ type: "comment", value: { stitch: n } }, t);
          })(e, t);
        else {
          let t = "";
          throw (
            (t3.has(e.type) &&
              (t =
                ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),
            Error("Cannot compile `" + e.type + "` node" + t))
          );
        }
      }
      function nr(e, t) {
        ni(e, t);
        let n = e.parser.tokenizer.currentCharacterToken;
        n &&
          n.location &&
          ((n.location.endLine = e.parser.tokenizer.preprocessor.line),
          (n.location.endCol = e.parser.tokenizer.preprocessor.col + 1),
          (n.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1),
          (e.parser.currentToken = n),
          e.parser._processToken(e.parser.currentToken)),
          (e.parser.tokenizer.paused = !1),
          (e.parser.tokenizer.inLoop = !1),
          (e.parser.tokenizer.active = !1),
          (e.parser.tokenizer.returnState = ey.DATA),
          (e.parser.tokenizer.charRefCode = -1),
          (e.parser.tokenizer.consumedAfterSnapshot = -1),
          (e.parser.tokenizer.currentLocation = null),
          (e.parser.tokenizer.currentCharacterToken = null),
          (e.parser.tokenizer.currentToken = null),
          (e.parser.tokenizer.currentAttr = { name: "", value: "" });
      }
      function ni(e, t) {
        if (t && void 0 !== t.offset) {
          let n = {
            startLine: t.line,
            startCol: t.column,
            startOffset: t.offset,
            endLine: -1,
            endCol: -1,
            endOffset: -1,
          };
          (e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1),
            (e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset),
            (e.parser.tokenizer.preprocessor.line = t.line),
            (e.parser.tokenizer.currentLocation = n);
        }
      }
      function na(e) {
        let t = (0, t0.Pk)(e) || {
            line: void 0,
            column: void 0,
            offset: void 0,
          },
          n = (0, t0.rb)(e) || { line: void 0, column: void 0, offset: void 0 };
        return {
          startLine: t.line,
          startCol: t.column,
          startOffset: t.offset,
          endLine: n.line,
          endCol: n.column,
          endOffset: n.offset,
        };
      }
      function ns(e) {
        return function (t, n) {
          return t5(t, { ...e, file: n });
        };
      }
    },
    55186: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let n = String(e);
        if ("string" != typeof t) throw TypeError("Expected character");
        let r = 0,
          i = n.indexOf(t);
        for (; -1 !== i; ) r++, (i = n.indexOf(t, i + t.length));
        return r;
      }
      n.d(t, {
        Z: function () {
          return ex;
        },
      });
      var i = n(24345),
        a = n(15459),
        s = n(88718),
        o = n(96093);
      let l = "phrasing",
        c = ["autolink", "link", "image", "label"];
      function u(e) {
        this.enter({ type: "link", title: null, url: "", children: [] }, e);
      }
      function h(e) {
        this.config.enter.autolinkProtocol.call(this, e);
      }
      function d(e) {
        this.config.exit.autolinkProtocol.call(this, e);
      }
      function p(e) {
        this.config.exit.data.call(this, e);
        let t = this.stack[this.stack.length - 1];
        (0, i.ok)("link" === t.type),
          (t.url = "http://" + this.sliceSerialize(e));
      }
      function f(e) {
        this.config.exit.autolinkEmail.call(this, e);
      }
      function E(e) {
        this.exit(e);
      }
      function m(e) {
        !(function (e, t, n) {
          let r = (0, o.O)((n || {}).ignore || []),
            i = (function (e) {
              let t = [];
              if (!Array.isArray(e))
                throw TypeError(
                  "Expected find and replace tuple or list of tuples"
                );
              let n = !e[0] || Array.isArray(e[0]) ? e : [e],
                r = -1;
              for (; ++r < n.length; ) {
                var i;
                let e = n[r];
                t.push([
                  "string" == typeof (i = e[0])
                    ? RegExp(
                        (function (e) {
                          if ("string" != typeof e)
                            throw TypeError("Expected a string");
                          return e
                            .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                            .replace(/-/g, "\\x2d");
                        })(i),
                        "g"
                      )
                    : i,
                  (function (e) {
                    return "function" == typeof e
                      ? e
                      : function () {
                          return e;
                        };
                  })(e[1]),
                ]);
              }
              return t;
            })(t),
            a = -1;
          for (; ++a < i.length; ) (0, s.S4)(e, "text", l);
          function l(e, t) {
            let n,
              s = -1;
            for (; ++s < t.length; ) {
              let e = t[s],
                i = n ? n.children : void 0;
              if (r(e, i ? i.indexOf(e) : void 0, n)) return;
              n = e;
            }
            if (n)
              return (function (e, t) {
                let n = t[t.length - 1],
                  r = i[a][0],
                  s = i[a][1],
                  o = 0,
                  l = n.children.indexOf(e),
                  c = !1,
                  u = [];
                r.lastIndex = 0;
                let h = r.exec(e.value);
                for (; h; ) {
                  let n = h.index,
                    i = { index: h.index, input: h.input, stack: [...t, e] },
                    a = s(...h, i);
                  if (
                    ("string" == typeof a &&
                      (a = a.length > 0 ? { type: "text", value: a } : void 0),
                    !1 === a
                      ? (r.lastIndex = n + 1)
                      : (o !== n &&
                          u.push({ type: "text", value: e.value.slice(o, n) }),
                        Array.isArray(a) ? u.push(...a) : a && u.push(a),
                        (o = n + h[0].length),
                        (c = !0)),
                    !r.global)
                  )
                    break;
                  h = r.exec(e.value);
                }
                return (
                  c
                    ? (o < e.value.length &&
                        u.push({ type: "text", value: e.value.slice(o) }),
                      n.children.splice(l, 1, ...u))
                    : (u = [e]),
                  l + u.length
                );
              })(e, t);
          }
        })(
          e,
          [
            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, T],
            [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, A],
          ],
          { ignore: ["link", "linkReference"] }
        );
      }
      function T(e, t, n, i, a) {
        let s = "";
        if (
          !_(a) ||
          (/^w/i.test(t) && ((n = t + n), (t = ""), (s = "http://")),
          !(function (e) {
            let t = e.split(".");
            return !(
              t.length < 2 ||
              (t[t.length - 1] &&
                (/_/.test(t[t.length - 1]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
              (t[t.length - 2] &&
                (/_/.test(t[t.length - 2]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 2])))
            );
          })(n))
        )
          return !1;
        let o = (function (e) {
          let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (!t) return [e, void 0];
          e = e.slice(0, t.index);
          let n = t[0],
            i = n.indexOf(")"),
            a = r(e, "("),
            s = r(e, ")");
          for (; -1 !== i && a > s; )
            (e += n.slice(0, i + 1)),
              (i = (n = n.slice(i + 1)).indexOf(")")),
              s++;
          return [e, n];
        })(n + i);
        if (!o[0]) return !1;
        let l = {
          type: "link",
          title: null,
          url: s + t + o[0],
          children: [{ type: "text", value: t + o[0] }],
        };
        return o[1] ? [l, { type: "text", value: o[1] }] : l;
      }
      function A(e, t, n, r) {
        return (
          !(!_(r, !0) || /[-\d_]$/.test(n)) && {
            type: "link",
            title: null,
            url: "mailto:" + t + "@" + n,
            children: [{ type: "text", value: t + "@" + n }],
          }
        );
      }
      function _(e, t) {
        let n = e.input.charCodeAt(e.index - 1);
        return (
          (0 === e.index || (0, a.B8)(n) || (0, a.Xh)(n)) && (!t || 47 !== n)
        );
      }
      var g = n(11098);
      function C(e) {
        this.enter(
          {
            type: "footnoteDefinition",
            identifier: "",
            label: "",
            children: [],
          },
          e
        );
      }
      function I() {
        this.buffer();
      }
      function N(e) {
        let t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, i.ok)("footnoteDefinition" === n.type),
          (n.label = t),
          (n.identifier = (0, g.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function S(e) {
        this.exit(e);
      }
      function k(e) {
        this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
      }
      function D() {
        this.buffer();
      }
      function R(e) {
        let t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, i.ok)("footnoteReference" === n.type),
          (n.label = t),
          (n.identifier = (0, g.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function b(e) {
        this.exit(e);
      }
      function O(e, t, n, r) {
        let i = n.createTracker(r),
          a = i.move("[^"),
          s = n.enter("footnoteReference"),
          o = n.enter("reference");
        return (
          (a += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: a,
              after: "]",
            })
          )),
          o(),
          s(),
          (a += i.move("]"))
        );
      }
      function L(e, t, n, r) {
        let i = n.createTracker(r),
          a = i.move("[^"),
          s = n.enter("footnoteDefinition"),
          o = n.enter("label");
        return (
          (a += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: a,
              after: "]",
            })
          )),
          o(),
          (a += i.move(
            "]:" + (e.children && e.children.length > 0 ? " " : "")
          )),
          i.shift(4),
          (a += i.move(n.indentLines(n.containerFlow(e, i.current()), y))),
          s(),
          a
        );
      }
      function y(e, t, n) {
        return 0 === t ? e : (n ? "" : "    ") + e;
      }
      O.peek = function () {
        return "[";
      };
      let P = [
        "autolink",
        "destinationLiteral",
        "destinationRaw",
        "reference",
        "titleQuote",
        "titleApostrophe",
      ];
      function M(e) {
        this.enter({ type: "delete", children: [] }, e);
      }
      function x(e) {
        this.exit(e);
      }
      function v(e, t, n, r) {
        let i = n.createTracker(r),
          a = n.enter("strikethrough"),
          s = i.move("~~");
        return (
          (s +=
            n.containerPhrasing(e, { ...i.current(), before: s, after: "~" }) +
            i.move("~~")),
          a(),
          s
        );
      }
      function F(e) {
        return e.length;
      }
      function B(e) {
        let t = "string" == typeof e ? e.codePointAt(0) : 0;
        return 67 === t || 99 === t
          ? 99
          : 76 === t || 108 === t
          ? 108
          : 82 === t || 114 === t
          ? 114
          : 0;
      }
      v.peek = function () {
        return "~";
      };
      n(21623);
      var H = n(27962);
      function w(e, t, n) {
        let r = e.value || "",
          i = "`",
          a = -1;
        for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
        for (
          /[^ \r\n]/.test(r) &&
          ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
          (r = " " + r + " ");
          ++a < n.unsafe.length;

        ) {
          let e;
          let t = n.unsafe[a],
            i = n.compilePattern(t);
          if (t.atBreak)
            for (; (e = i.exec(r)); ) {
              let t = e.index;
              10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--,
                (r = r.slice(0, t) + " " + r.slice(e.index + 1));
            }
        }
        return i + r + i;
      }
      (w.peek = function () {
        return "`";
      }),
        (0, o.O)([
          "break",
          "delete",
          "emphasis",
          "footnote",
          "footnoteReference",
          "image",
          "imageReference",
          "inlineCode",
          "inlineMath",
          "link",
          "linkReference",
          "mdxJsxTextElement",
          "mdxTextExpression",
          "strong",
          "text",
          "textDirective",
        ]);
      let U = function (e, t, n, r) {
        let i = (function (e) {
            let t = e.options.listItemIndent || "one";
            if ("tab" !== t && "one" !== t && "mixed" !== t)
              throw Error(
                "Cannot serialize items with `" +
                  t +
                  "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
              );
            return t;
          })(n),
          a =
            n.bulletCurrent ||
            (function (e) {
              let t = e.options.bullet || "*";
              if ("*" !== t && "+" !== t && "-" !== t)
                throw Error(
                  "Cannot serialize items with `" +
                    t +
                    "` for `options.bullet`, expected `*`, `+`, or `-`"
                );
              return t;
            })(n);
        t &&
          "list" === t.type &&
          t.ordered &&
          (a =
            ("number" == typeof t.start && t.start > -1 ? t.start : 1) +
            (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) +
            a);
        let s = a.length + 1;
        ("tab" === i ||
          ("mixed" === i &&
            ((t && "list" === t.type && t.spread) || e.spread))) &&
          (s = 4 * Math.ceil(s / 4));
        let o = n.createTracker(r);
        o.move(a + " ".repeat(s - a.length)), o.shift(s);
        let l = n.enter("listItem"),
          c = n.indentLines(
            n.containerFlow(e, o.current()),
            function (e, t, n) {
              return t
                ? (n ? "" : " ".repeat(s)) + e
                : (n ? a : a + " ".repeat(s - a.length)) + e;
            }
          );
        return l(), c;
      };
      function G(e) {
        let t = e._align;
        (0, i.ok)(t, "expected `_align` on table"),
          this.enter(
            {
              type: "table",
              align: t.map(function (e) {
                return "none" === e ? null : e;
              }),
              children: [],
            },
            e
          ),
          (this.data.inTable = !0);
      }
      function Y(e) {
        this.exit(e), (this.data.inTable = void 0);
      }
      function z(e) {
        this.enter({ type: "tableRow", children: [] }, e);
      }
      function q(e) {
        this.exit(e);
      }
      function V(e) {
        this.enter({ type: "tableCell", children: [] }, e);
      }
      function j(e) {
        let t = this.resume();
        this.data.inTable && (t = t.replace(/\\([\\|])/g, Q));
        let n = this.stack[this.stack.length - 1];
        (0, i.ok)("inlineCode" === n.type), (n.value = t), this.exit(e);
      }
      function Q(e, t) {
        return "|" === t ? t : e;
      }
      function W(e) {
        let t = this.stack[this.stack.length - 2];
        (0, i.ok)("listItem" === t.type),
          (t.checked = "taskListCheckValueChecked" === e.type);
      }
      function X(e) {
        let t = this.stack[this.stack.length - 2];
        if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
          let e = this.stack[this.stack.length - 1];
          (0, i.ok)("paragraph" === e.type);
          let n = e.children[0];
          if (n && "text" === n.type) {
            let r;
            let i = t.children,
              a = -1;
            for (; ++a < i.length; ) {
              let e = i[a];
              if ("paragraph" === e.type) {
                r = e;
                break;
              }
            }
            r === e &&
              ((n.value = n.value.slice(1)),
              0 === n.value.length
                ? e.children.shift()
                : e.position &&
                  n.position &&
                  "number" == typeof n.position.start.offset &&
                  (n.position.start.column++,
                  n.position.start.offset++,
                  (e.position.start = Object.assign({}, n.position.start))));
          }
        }
        this.exit(e);
      }
      function K(e, t, n, r) {
        let i = e.children[0],
          a = "boolean" == typeof e.checked && i && "paragraph" === i.type,
          s = "[" + (e.checked ? "x" : " ") + "] ",
          o = n.createTracker(r);
        a && o.move(s);
        let l = U(e, t, n, { ...r, ...o.current() });
        return (
          a &&
            (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
              return e + s;
            })),
          l
        );
      }
      var J = n(4663);
      let Z = {
          tokenize: function (e, t, n) {
            let r = 0;
            return function t(a) {
              return (87 === a || 119 === a) && r < 3
                ? (r++, e.consume(a), t)
                : 46 === a && 3 === r
                ? (e.consume(a), i)
                : n(a);
            };
            function i(e) {
              return null === e ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        $ = {
          tokenize: function (e, t, n) {
            let r, i, s;
            return o;
            function o(t) {
              return 46 === t || 95 === t
                ? e.check(et, c, l)(t)
                : null === t ||
                  (0, a.z3)(t) ||
                  (0, a.B8)(t) ||
                  (45 !== t && (0, a.Xh)(t))
                ? c(t)
                : ((s = !0), e.consume(t), o);
            }
            function l(t) {
              return (
                95 === t ? (r = !0) : ((i = r), (r = void 0)), e.consume(t), o
              );
            }
            function c(e) {
              return i || r || !s ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        ee = {
          tokenize: function (e, t) {
            let n = 0,
              r = 0;
            return i;
            function i(o) {
              return 40 === o
                ? (n++, e.consume(o), i)
                : 41 === o && r < n
                ? s(o)
                : 33 === o ||
                  34 === o ||
                  38 === o ||
                  39 === o ||
                  41 === o ||
                  42 === o ||
                  44 === o ||
                  46 === o ||
                  58 === o ||
                  59 === o ||
                  60 === o ||
                  63 === o ||
                  93 === o ||
                  95 === o ||
                  126 === o
                ? e.check(et, t, s)(o)
                : null === o || (0, a.z3)(o) || (0, a.B8)(o)
                ? t(o)
                : (e.consume(o), i);
            }
            function s(t) {
              return 41 === t && r++, e.consume(t), i;
            }
          },
          partial: !0,
        },
        et = {
          tokenize: function (e, t, n) {
            return r;
            function r(o) {
              return 33 === o ||
                34 === o ||
                39 === o ||
                41 === o ||
                42 === o ||
                44 === o ||
                46 === o ||
                58 === o ||
                59 === o ||
                63 === o ||
                95 === o ||
                126 === o
                ? (e.consume(o), r)
                : 38 === o
                ? (e.consume(o), s)
                : 93 === o
                ? (e.consume(o), i)
                : 60 === o || null === o || (0, a.z3)(o) || (0, a.B8)(o)
                ? t(o)
                : n(o);
            }
            function i(e) {
              return null === e ||
                40 === e ||
                91 === e ||
                (0, a.z3)(e) ||
                (0, a.B8)(e)
                ? t(e)
                : r(e);
            }
            function s(t) {
              return (0, a.jv)(t)
                ? (function t(i) {
                    return 59 === i
                      ? (e.consume(i), r)
                      : (0, a.jv)(i)
                      ? (e.consume(i), t)
                      : n(i);
                  })(t)
                : n(t);
            }
          },
          partial: !0,
        },
        en = {
          tokenize: function (e, t, n) {
            return function (t) {
              return e.consume(t), r;
            };
            function r(e) {
              return (0, a.H$)(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        er = {
          name: "wwwAutolink",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (87 !== t && 119 !== t) ||
                !el.call(r, r.previous) ||
                ed(r.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkWww"),
                  e.check(Z, e.attempt($, e.attempt(ee, i), n), n)(t));
            };
            function i(n) {
              return (
                e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: el,
        },
        ei = {
          name: "protocolAutolink",
          tokenize: function (e, t, n) {
            let r = this,
              i = "",
              s = !1;
            return function (t) {
              return (72 === t || 104 === t) &&
                ec.call(r, r.previous) &&
                !ed(r.events)
                ? (e.enter("literalAutolink"),
                  e.enter("literalAutolinkHttp"),
                  (i += String.fromCodePoint(t)),
                  e.consume(t),
                  o)
                : n(t);
            };
            function o(t) {
              if ((0, a.jv)(t) && i.length < 5)
                return (i += String.fromCodePoint(t)), e.consume(t), o;
              if (58 === t) {
                let n = i.toLowerCase();
                if ("http" === n || "https" === n) return e.consume(t), l;
              }
              return n(t);
            }
            function l(t) {
              return 47 === t ? ((e.consume(t), s) ? c : ((s = !0), l)) : n(t);
            }
            function c(t) {
              return null === t ||
                (0, a.Av)(t) ||
                (0, a.z3)(t) ||
                (0, a.B8)(t) ||
                (0, a.Xh)(t)
                ? n(t)
                : e.attempt($, e.attempt(ee, u), n)(t);
            }
            function u(n) {
              return (
                e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: ec,
        },
        ea = {
          name: "emailAutolink",
          tokenize: function (e, t, n) {
            let r, i;
            let s = this;
            return function (t) {
              return !eh(t) || !eu.call(s, s.previous) || ed(s.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkEmail"),
                  (function t(r) {
                    return eh(r)
                      ? (e.consume(r), t)
                      : 64 === r
                      ? (e.consume(r), o)
                      : n(r);
                  })(t));
            };
            function o(t) {
              return 46 === t
                ? e.check(en, c, l)(t)
                : 45 === t || 95 === t || (0, a.H$)(t)
                ? ((i = !0), e.consume(t), o)
                : c(t);
            }
            function l(t) {
              return e.consume(t), (r = !0), o;
            }
            function c(o) {
              return i && r && (0, a.jv)(s.previous)
                ? (e.exit("literalAutolinkEmail"),
                  e.exit("literalAutolink"),
                  t(o))
                : n(o);
            }
          },
          previous: eu,
        },
        es = {},
        eo = 48;
      for (; eo < 123; )
        (es[eo] = ea), 58 == ++eo ? (eo = 65) : 91 === eo && (eo = 97);
      function el(e) {
        return (
          null === e ||
          40 === e ||
          42 === e ||
          95 === e ||
          91 === e ||
          93 === e ||
          126 === e ||
          (0, a.z3)(e)
        );
      }
      function ec(e) {
        return !(0, a.jv)(e);
      }
      function eu(e) {
        return !(47 === e || eh(e));
      }
      function eh(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || (0, a.H$)(e);
      }
      function ed(e) {
        let t = e.length,
          n = !1;
        for (; t--; ) {
          let r = e[t][1];
          if (
            ("labelLink" === r.type || "labelImage" === r.type) &&
            !r._balanced
          ) {
            n = !0;
            break;
          }
          if (r._gfmAutolinkLiteralWalkedInto) {
            n = !1;
            break;
          }
        }
        return (
          e.length > 0 &&
            !n &&
            (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
          n
        );
      }
      (es[43] = ea),
        (es[45] = ea),
        (es[46] = ea),
        (es[95] = ea),
        (es[72] = [ea, ei]),
        (es[104] = [ea, ei]),
        (es[87] = [ea, er]),
        (es[119] = [ea, er]);
      var ep = n(23402),
        ef = n(42761);
      let eE = {
        tokenize: function (e, t, n) {
          let r = this;
          return (0, ef.f)(
            e,
            function (e) {
              let i = r.events[r.events.length - 1];
              return i &&
                "gfmFootnoteDefinitionIndent" === i[1].type &&
                4 === i[2].sliceSerialize(i[1], !0).length
                ? t(e)
                : n(e);
            },
            "gfmFootnoteDefinitionIndent",
            5
          );
        },
        partial: !0,
      };
      function em(e, t, n) {
        let r;
        let i = this,
          a = i.events.length,
          s = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
        for (; a--; ) {
          let e = i.events[a][1];
          if ("labelImage" === e.type) {
            r = e;
            break;
          }
          if (
            "gfmFootnoteCall" === e.type ||
            "labelLink" === e.type ||
            "label" === e.type ||
            "image" === e.type ||
            "link" === e.type
          )
            break;
        }
        return function (a) {
          if (!r || !r._balanced) return n(a);
          let o = (0, g.d)(i.sliceSerialize({ start: r.end, end: i.now() }));
          return 94 === o.codePointAt(0) && s.includes(o.slice(1))
            ? (e.enter("gfmFootnoteCallLabelMarker"),
              e.consume(a),
              e.exit("gfmFootnoteCallLabelMarker"),
              t(a))
            : n(a);
        };
      }
      function eT(e, t) {
        let n = e.length;
        for (; n--; )
          if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
            e[n][1];
            break;
          }
        (e[n + 1][1].type = "data"),
          (e[n + 3][1].type = "gfmFootnoteCallLabelMarker");
        let r = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, e[n + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          },
          i = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, e[n + 3][1].end),
            end: Object.assign({}, e[n + 3][1].end),
          };
        i.end.column++, i.end.offset++, i.end._bufferIndex++;
        let a = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, i.end),
            end: Object.assign({}, e[e.length - 1][1].start),
          },
          s = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, a.start),
            end: Object.assign({}, a.end),
          },
          o = [
            e[n + 1],
            e[n + 2],
            ["enter", r, t],
            e[n + 3],
            e[n + 4],
            ["enter", i, t],
            ["exit", i, t],
            ["enter", a, t],
            ["enter", s, t],
            ["exit", s, t],
            ["exit", a, t],
            e[e.length - 2],
            e[e.length - 1],
            ["exit", r, t],
          ];
        return e.splice(n, e.length - n + 1, ...o), e;
      }
      function eA(e, t, n) {
        let r;
        let i = this,
          s = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []),
          o = 0;
        return function (t) {
          return (
            e.enter("gfmFootnoteCall"),
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteCallLabelMarker"),
            l
          );
        };
        function l(t) {
          return 94 !== t
            ? n(t)
            : (e.enter("gfmFootnoteCallMarker"),
              e.consume(t),
              e.exit("gfmFootnoteCallMarker"),
              e.enter("gfmFootnoteCallString"),
              (e.enter("chunkString").contentType = "string"),
              c);
        }
        function c(l) {
          if (
            o > 999 ||
            (93 === l && !r) ||
            null === l ||
            91 === l ||
            (0, a.z3)(l)
          )
            return n(l);
          if (93 === l) {
            e.exit("chunkString");
            let r = e.exit("gfmFootnoteCallString");
            return s.includes((0, g.d)(i.sliceSerialize(r)))
              ? (e.enter("gfmFootnoteCallLabelMarker"),
                e.consume(l),
                e.exit("gfmFootnoteCallLabelMarker"),
                e.exit("gfmFootnoteCall"),
                t)
              : n(l);
          }
          return (0, a.z3)(l) || (r = !0), o++, e.consume(l), 92 === l ? u : c;
        }
        function u(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), o++, c)
            : c(t);
        }
      }
      function e_(e, t, n) {
        let r, i;
        let s = this,
          o = s.parser.gfmFootnotes || (s.parser.gfmFootnotes = []),
          l = 0;
        return function (t) {
          return (
            (e.enter("gfmFootnoteDefinition")._container = !0),
            e.enter("gfmFootnoteDefinitionLabel"),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            c
          );
        };
        function c(t) {
          return 94 === t
            ? (e.enter("gfmFootnoteDefinitionMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionMarker"),
              e.enter("gfmFootnoteDefinitionLabelString"),
              (e.enter("chunkString").contentType = "string"),
              u)
            : n(t);
        }
        function u(t) {
          if (
            l > 999 ||
            (93 === t && !i) ||
            null === t ||
            91 === t ||
            (0, a.z3)(t)
          )
            return n(t);
          if (93 === t) {
            e.exit("chunkString");
            let n = e.exit("gfmFootnoteDefinitionLabelString");
            return (
              (r = (0, g.d)(s.sliceSerialize(n))),
              e.enter("gfmFootnoteDefinitionLabelMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionLabelMarker"),
              e.exit("gfmFootnoteDefinitionLabel"),
              d
            );
          }
          return (0, a.z3)(t) || (i = !0), l++, e.consume(t), 92 === t ? h : u;
        }
        function h(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), l++, u)
            : u(t);
        }
        function d(t) {
          return 58 === t
            ? (e.enter("definitionMarker"),
              e.consume(t),
              e.exit("definitionMarker"),
              o.includes(r) || o.push(r),
              (0, ef.f)(e, p, "gfmFootnoteDefinitionWhitespace"))
            : n(t);
        }
        function p(e) {
          return t(e);
        }
      }
      function eg(e, t, n) {
        return e.check(ep.w, t, e.attempt(eE, t, n));
      }
      function eC(e) {
        e.exit("gfmFootnoteDefinition");
      }
      var eI = n(21905),
        eN = n(62987),
        eS = n(63233);
      class ek {
        constructor() {
          this.map = [];
        }
        add(e, t, n) {
          !(function (e, t, n, r) {
            let i = 0;
            if (0 !== n || 0 !== r.length) {
              for (; i < e.map.length; ) {
                if (e.map[i][0] === t) {
                  (e.map[i][1] += n), e.map[i][2].push(...r);
                  return;
                }
                i += 1;
              }
              e.map.push([t, n, r]);
            }
          })(this, e, t, n);
        }
        consume(e) {
          if (
            (this.map.sort(function (e, t) {
              return e[0] - t[0];
            }),
            0 === this.map.length)
          )
            return;
          let t = this.map.length,
            n = [];
          for (; t > 0; )
            (t -= 1),
              n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
              (e.length = this.map[t][0]);
          n.push([...e]), (e.length = 0);
          let r = n.pop();
          for (; r; ) e.push(...r), (r = n.pop());
          this.map.length = 0;
        }
      }
      function eD(e, t, n) {
        let r;
        let i = this,
          s = 0,
          o = 0;
        return function (e) {
          let t = i.events.length - 1;
          for (; t > -1; ) {
            let e = i.events[t][1].type;
            if ("lineEnding" === e || "linePrefix" === e) t--;
            else break;
          }
          let r = t > -1 ? i.events[t][1].type : null,
            a = "tableHead" === r || "tableRow" === r ? _ : l;
          return a === _ && i.parser.lazy[i.now().line] ? n(e) : a(e);
        };
        function l(t) {
          return (
            e.enter("tableHead"),
            e.enter("tableRow"),
            124 === t || ((r = !0), (o += 1)),
            c(t)
          );
        }
        function c(t) {
          return null === t
            ? n(t)
            : (0, a.Ch)(t)
            ? o > 1
              ? ((o = 0),
                (i.interrupt = !0),
                e.exit("tableRow"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                d)
              : n(t)
            : (0, a.xz)(t)
            ? (0, ef.f)(e, c, "whitespace")(t)
            : ((o += 1), r && ((r = !1), (s += 1)), 124 === t)
            ? (e.enter("tableCellDivider"),
              e.consume(t),
              e.exit("tableCellDivider"),
              (r = !0),
              c)
            : (e.enter("data"), u(t));
        }
        function u(t) {
          return null === t || 124 === t || (0, a.z3)(t)
            ? (e.exit("data"), c(t))
            : (e.consume(t), 92 === t ? h : u);
        }
        function h(t) {
          return 92 === t || 124 === t ? (e.consume(t), u) : u(t);
        }
        function d(t) {
          return ((i.interrupt = !1), i.parser.lazy[i.now().line])
            ? n(t)
            : (e.enter("tableDelimiterRow"), (r = !1), (0, a.xz)(t))
            ? (0, ef.f)(
                e,
                p,
                "linePrefix",
                i.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )(t)
            : p(t);
        }
        function p(t) {
          return 45 === t || 58 === t
            ? E(t)
            : 124 === t
            ? ((r = !0),
              e.enter("tableCellDivider"),
              e.consume(t),
              e.exit("tableCellDivider"),
              f)
            : n(t);
        }
        function f(t) {
          return (0, a.xz)(t) ? (0, ef.f)(e, E, "whitespace")(t) : E(t);
        }
        function E(t) {
          return 58 === t
            ? ((o += 1),
              (r = !0),
              e.enter("tableDelimiterMarker"),
              e.consume(t),
              e.exit("tableDelimiterMarker"),
              m)
            : 45 === t
            ? ((o += 1), m(t))
            : null === t || (0, a.Ch)(t)
            ? A(t)
            : n(t);
        }
        function m(t) {
          return 45 === t
            ? (e.enter("tableDelimiterFiller"),
              (function t(n) {
                return 45 === n
                  ? (e.consume(n), t)
                  : 58 === n
                  ? ((r = !0),
                    e.exit("tableDelimiterFiller"),
                    e.enter("tableDelimiterMarker"),
                    e.consume(n),
                    e.exit("tableDelimiterMarker"),
                    T)
                  : (e.exit("tableDelimiterFiller"), T(n));
              })(t))
            : n(t);
        }
        function T(t) {
          return (0, a.xz)(t) ? (0, ef.f)(e, A, "whitespace")(t) : A(t);
        }
        function A(i) {
          return 124 === i
            ? p(i)
            : null === i || (0, a.Ch)(i)
            ? r && s === o
              ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i))
              : n(i)
            : n(i);
        }
        function _(t) {
          return e.enter("tableRow"), g(t);
        }
        function g(n) {
          return 124 === n
            ? (e.enter("tableCellDivider"),
              e.consume(n),
              e.exit("tableCellDivider"),
              g)
            : null === n || (0, a.Ch)(n)
            ? (e.exit("tableRow"), t(n))
            : (0, a.xz)(n)
            ? (0, ef.f)(e, g, "whitespace")(n)
            : (e.enter("data"), C(n));
        }
        function C(t) {
          return null === t || 124 === t || (0, a.z3)(t)
            ? (e.exit("data"), g(t))
            : (e.consume(t), 92 === t ? I : C);
        }
        function I(t) {
          return 92 === t || 124 === t ? (e.consume(t), C) : C(t);
        }
      }
      function eR(e, t) {
        let n,
          r,
          i,
          a = -1,
          s = !0,
          o = 0,
          l = [0, 0, 0, 0],
          c = [0, 0, 0, 0],
          u = !1,
          h = 0,
          d = new ek();
        for (; ++a < e.length; ) {
          let p = e[a],
            f = p[1];
          "enter" === p[0]
            ? "tableHead" === f.type
              ? ((u = !1),
                0 !== h && (eO(d, t, h, n, r), (r = void 0), (h = 0)),
                (n = {
                  type: "table",
                  start: Object.assign({}, f.start),
                  end: Object.assign({}, f.end),
                }),
                d.add(a, 0, [["enter", n, t]]))
              : "tableRow" === f.type || "tableDelimiterRow" === f.type
              ? ((s = !0),
                (i = void 0),
                (l = [0, 0, 0, 0]),
                (c = [0, a + 1, 0, 0]),
                u &&
                  ((u = !1),
                  (r = {
                    type: "tableBody",
                    start: Object.assign({}, f.start),
                    end: Object.assign({}, f.end),
                  }),
                  d.add(a, 0, [["enter", r, t]])),
                (o = "tableDelimiterRow" === f.type ? 2 : r ? 3 : 1))
              : o &&
                ("data" === f.type ||
                  "tableDelimiterMarker" === f.type ||
                  "tableDelimiterFiller" === f.type)
              ? ((s = !1),
                0 === c[2] &&
                  (0 !== l[1] &&
                    ((c[0] = c[1]),
                    (i = eb(d, t, l, o, void 0, i)),
                    (l = [0, 0, 0, 0])),
                  (c[2] = a)))
              : "tableCellDivider" === f.type &&
                (s
                  ? (s = !1)
                  : (0 !== l[1] &&
                      ((c[0] = c[1]), (i = eb(d, t, l, o, void 0, i))),
                    (c = [(l = c)[1], a, 0, 0])))
            : "tableHead" === f.type
            ? ((u = !0), (h = a))
            : "tableRow" === f.type || "tableDelimiterRow" === f.type
            ? ((h = a),
              0 !== l[1]
                ? ((c[0] = c[1]), (i = eb(d, t, l, o, a, i)))
                : 0 !== c[1] && (i = eb(d, t, c, o, a, i)),
              (o = 0))
            : o &&
              ("data" === f.type ||
                "tableDelimiterMarker" === f.type ||
                "tableDelimiterFiller" === f.type) &&
              (c[3] = a);
        }
        for (
          0 !== h && eO(d, t, h, n, r), d.consume(t.events), a = -1;
          ++a < t.events.length;

        ) {
          let e = t.events[a];
          "enter" === e[0] &&
            "table" === e[1].type &&
            (e[1]._align = (function (e, t) {
              let n = !1,
                r = [];
              for (; t < e.length; ) {
                let i = e[t];
                if (n) {
                  if ("enter" === i[0])
                    "tableContent" === i[1].type &&
                      r.push(
                        "tableDelimiterMarker" === e[t + 1][1].type
                          ? "left"
                          : "none"
                      );
                  else if ("tableContent" === i[1].type) {
                    if ("tableDelimiterMarker" === e[t - 1][1].type) {
                      let e = r.length - 1;
                      r[e] = "left" === r[e] ? "center" : "right";
                    }
                  } else if ("tableDelimiterRow" === i[1].type) break;
                } else
                  "enter" === i[0] &&
                    "tableDelimiterRow" === i[1].type &&
                    (n = !0);
                t += 1;
              }
              return r;
            })(t.events, a));
        }
        return e;
      }
      function eb(e, t, n, r, i, a) {
        0 !== n[0] &&
          ((a.end = Object.assign({}, eL(t.events, n[0]))),
          e.add(n[0], 0, [["exit", a, t]]));
        let s = eL(t.events, n[1]);
        if (
          ((a = {
            type:
              1 === r
                ? "tableHeader"
                : 2 === r
                ? "tableDelimiter"
                : "tableData",
            start: Object.assign({}, s),
            end: Object.assign({}, s),
          }),
          e.add(n[1], 0, [["enter", a, t]]),
          0 !== n[2])
        ) {
          let i = eL(t.events, n[2]),
            a = eL(t.events, n[3]),
            s = {
              type: "tableContent",
              start: Object.assign({}, i),
              end: Object.assign({}, a),
            };
          if ((e.add(n[2], 0, [["enter", s, t]]), 2 !== r)) {
            let r = t.events[n[2]],
              i = t.events[n[3]];
            if (
              ((r[1].end = Object.assign({}, i[1].end)),
              (r[1].type = "chunkText"),
              (r[1].contentType = "text"),
              n[3] > n[2] + 1)
            ) {
              let t = n[2] + 1,
                r = n[3] - n[2] - 1;
              e.add(t, r, []);
            }
          }
          e.add(n[3] + 1, 0, [["exit", s, t]]);
        }
        return (
          void 0 !== i &&
            ((a.end = Object.assign({}, eL(t.events, i))),
            e.add(i, 0, [["exit", a, t]]),
            (a = void 0)),
          a
        );
      }
      function eO(e, t, n, r, i) {
        let a = [],
          s = eL(t.events, n);
        i && ((i.end = Object.assign({}, s)), a.push(["exit", i, t])),
          (r.end = Object.assign({}, s)),
          a.push(["exit", r, t]),
          e.add(n + 1, 0, a);
      }
      function eL(e, t) {
        let n = e[t],
          r = "enter" === n[0] ? "start" : "end";
        return n[1][r];
      }
      let ey = {
        name: "tasklistCheck",
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return null === r.previous && r._gfmTasklistFirstContentOfListItem
              ? (e.enter("taskListCheck"),
                e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                i)
              : n(t);
          };
          function i(t) {
            return (0, a.z3)(t)
              ? (e.enter("taskListCheckValueUnchecked"),
                e.consume(t),
                e.exit("taskListCheckValueUnchecked"),
                s)
              : 88 === t || 120 === t
              ? (e.enter("taskListCheckValueChecked"),
                e.consume(t),
                e.exit("taskListCheckValueChecked"),
                s)
              : n(t);
          }
          function s(t) {
            return 93 === t
              ? (e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                e.exit("taskListCheck"),
                o)
              : n(t);
          }
          function o(r) {
            return (0, a.Ch)(r)
              ? t(r)
              : (0, a.xz)(r)
              ? e.check({ tokenize: eP }, t, n)(r)
              : n(r);
          }
        },
      };
      function eP(e, t, n) {
        return (0, ef.f)(
          e,
          function (e) {
            return null === e ? n(e) : t(e);
          },
          "whitespace"
        );
      }
      let eM = {};
      function ex(e) {
        let t = e || eM,
          n = this.data(),
          r = n.micromarkExtensions || (n.micromarkExtensions = []),
          i = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []),
          a = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
        r.push(
          (0, J.W)([
            { text: es },
            {
              document: {
                91: {
                  name: "gfmFootnoteDefinition",
                  tokenize: e_,
                  continuation: { tokenize: eg },
                  exit: eC,
                },
              },
              text: {
                91: { name: "gfmFootnoteCall", tokenize: eA },
                93: {
                  name: "gfmPotentialFootnoteCall",
                  add: "after",
                  tokenize: em,
                  resolveTo: eT,
                },
              },
            },
            (function (e) {
              let t = (e || {}).singleTilde,
                n = {
                  name: "strikethrough",
                  tokenize: function (e, n, r) {
                    let i = this.previous,
                      a = this.events,
                      s = 0;
                    return function (o) {
                      return 126 === i &&
                        "characterEscape" !== a[a.length - 1][1].type
                        ? r(o)
                        : (e.enter("strikethroughSequenceTemporary"),
                          (function a(o) {
                            let l = (0, eN.r)(i);
                            if (126 === o)
                              return s > 1 ? r(o) : (e.consume(o), s++, a);
                            if (s < 2 && !t) return r(o);
                            let c = e.exit("strikethroughSequenceTemporary"),
                              u = (0, eN.r)(o);
                            return (
                              (c._open = !u || (2 === u && !!l)),
                              (c._close = !l || (2 === l && !!u)),
                              n(o)
                            );
                          })(o));
                    };
                  },
                  resolveAll: function (e, t) {
                    let n = -1;
                    for (; ++n < e.length; )
                      if (
                        "enter" === e[n][0] &&
                        "strikethroughSequenceTemporary" === e[n][1].type &&
                        e[n][1]._close
                      ) {
                        let r = n;
                        for (; r--; )
                          if (
                            "exit" === e[r][0] &&
                            "strikethroughSequenceTemporary" === e[r][1].type &&
                            e[r][1]._open &&
                            e[n][1].end.offset - e[n][1].start.offset ==
                              e[r][1].end.offset - e[r][1].start.offset
                          ) {
                            (e[n][1].type = "strikethroughSequence"),
                              (e[r][1].type = "strikethroughSequence");
                            let i = {
                                type: "strikethrough",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[n][1].end),
                              },
                              a = {
                                type: "strikethroughText",
                                start: Object.assign({}, e[r][1].end),
                                end: Object.assign({}, e[n][1].start),
                              },
                              s = [
                                ["enter", i, t],
                                ["enter", e[r][1], t],
                                ["exit", e[r][1], t],
                                ["enter", a, t],
                              ],
                              o = t.parser.constructs.insideSpan.null;
                            o &&
                              (0, eI.d)(
                                s,
                                s.length,
                                0,
                                (0, eS.C)(o, e.slice(r + 1, n), t)
                              ),
                              (0, eI.d)(s, s.length, 0, [
                                ["exit", a, t],
                                ["enter", e[n][1], t],
                                ["exit", e[n][1], t],
                                ["exit", i, t],
                              ]),
                              (0, eI.d)(e, r - 1, n - r + 3, s),
                              (n = r + s.length - 2);
                            break;
                          }
                      }
                    for (n = -1; ++n < e.length; )
                      "strikethroughSequenceTemporary" === e[n][1].type &&
                        (e[n][1].type = "data");
                    return e;
                  },
                };
              return (
                null == t && (t = !0),
                {
                  text: { 126: n },
                  insideSpan: { null: [n] },
                  attentionMarkers: { null: [126] },
                }
              );
            })(t),
            { flow: { null: { name: "table", tokenize: eD, resolveAll: eR } } },
            { text: { 91: ey } },
          ])
        ),
          i.push([
            {
              transforms: [m],
              enter: {
                literalAutolink: u,
                literalAutolinkEmail: h,
                literalAutolinkHttp: h,
                literalAutolinkWww: h,
              },
              exit: {
                literalAutolink: E,
                literalAutolinkEmail: f,
                literalAutolinkHttp: d,
                literalAutolinkWww: p,
              },
            },
            {
              enter: {
                gfmFootnoteDefinition: C,
                gfmFootnoteDefinitionLabelString: I,
                gfmFootnoteCall: k,
                gfmFootnoteCallString: D,
              },
              exit: {
                gfmFootnoteDefinition: S,
                gfmFootnoteDefinitionLabelString: N,
                gfmFootnoteCall: b,
                gfmFootnoteCallString: R,
              },
            },
            {
              canContainEols: ["delete"],
              enter: { strikethrough: M },
              exit: { strikethrough: x },
            },
            {
              enter: { table: G, tableData: V, tableHeader: V, tableRow: z },
              exit: {
                codeText: j,
                table: Y,
                tableData: q,
                tableHeader: q,
                tableRow: q,
              },
            },
            {
              exit: {
                taskListCheckValueChecked: W,
                taskListCheckValueUnchecked: W,
                paragraph: X,
              },
            },
          ]),
          a.push({
            extensions: [
              {
                unsafe: [
                  {
                    character: "@",
                    before: "[+\\-.\\w]",
                    after: "[\\-.\\w]",
                    inConstruct: l,
                    notInConstruct: c,
                  },
                  {
                    character: ".",
                    before: "[Ww]",
                    after: "[\\-.\\w]",
                    inConstruct: l,
                    notInConstruct: c,
                  },
                  {
                    character: ":",
                    before: "[ps]",
                    after: "\\/",
                    inConstruct: l,
                    notInConstruct: c,
                  },
                ],
              },
              {
                unsafe: [
                  {
                    character: "[",
                    inConstruct: ["phrasing", "label", "reference"],
                  },
                ],
                handlers: { footnoteDefinition: L, footnoteReference: O },
              },
              {
                unsafe: [
                  {
                    character: "~",
                    inConstruct: "phrasing",
                    notInConstruct: P,
                  },
                ],
                handlers: { delete: v },
              },
              (function (e) {
                let t = e || {},
                  n = t.tableCellPadding,
                  r = t.tablePipeAlign,
                  i = t.stringLength,
                  a = n ? " " : "|";
                return {
                  unsafe: [
                    { character: "\r", inConstruct: "tableCell" },
                    { character: "\n", inConstruct: "tableCell" },
                    { atBreak: !0, character: "|", after: "[	 :-]" },
                    { character: "|", inConstruct: "tableCell" },
                    { atBreak: !0, character: ":", after: "-" },
                    { atBreak: !0, character: "-", after: "[:|-]" },
                  ],
                  handlers: {
                    inlineCode: function (e, t, n) {
                      let r = w(e, t, n);
                      return (
                        n.stack.includes("tableCell") &&
                          (r = r.replace(/\|/g, "\\$&")),
                        r
                      );
                    },
                    table: function (e, t, n, r) {
                      return o(
                        (function (e, t, n) {
                          let r = e.children,
                            i = -1,
                            a = [],
                            s = t.enter("table");
                          for (; ++i < r.length; ) a[i] = l(r[i], t, n);
                          return s(), a;
                        })(e, n, r),
                        e.align
                      );
                    },
                    tableCell: s,
                    tableRow: function (e, t, n, r) {
                      let i = o([l(e, n, r)]);
                      return i.slice(0, i.indexOf("\n"));
                    },
                  },
                };
                function s(e, t, n, r) {
                  let i = n.enter("tableCell"),
                    s = n.enter("phrasing"),
                    o = n.containerPhrasing(e, { ...r, before: a, after: a });
                  return s(), i(), o;
                }
                function o(e, t) {
                  return (function (e, t = {}) {
                    let n = (t.align || []).concat(),
                      r = t.stringLength || F,
                      i = [],
                      a = [],
                      s = [],
                      o = [],
                      l = 0,
                      c = -1;
                    for (; ++c < e.length; ) {
                      let n = [],
                        i = [],
                        h = -1;
                      for (
                        e[c].length > l && (l = e[c].length);
                        ++h < e[c].length;

                      ) {
                        var u;
                        let a = null == (u = e[c][h]) ? "" : String(u);
                        if (!1 !== t.alignDelimiters) {
                          let e = r(a);
                          (i[h] = e),
                            (void 0 === o[h] || e > o[h]) && (o[h] = e);
                        }
                        n.push(a);
                      }
                      (a[c] = n), (s[c] = i);
                    }
                    let h = -1;
                    if ("object" == typeof n && "length" in n)
                      for (; ++h < l; ) i[h] = B(n[h]);
                    else {
                      let e = B(n);
                      for (; ++h < l; ) i[h] = e;
                    }
                    h = -1;
                    let d = [],
                      p = [];
                    for (; ++h < l; ) {
                      let e = i[h],
                        n = "",
                        r = "";
                      99 === e
                        ? ((n = ":"), (r = ":"))
                        : 108 === e
                        ? (n = ":")
                        : 114 === e && (r = ":");
                      let a =
                          !1 === t.alignDelimiters
                            ? 1
                            : Math.max(1, o[h] - n.length - r.length),
                        s = n + "-".repeat(a) + r;
                      !1 !== t.alignDelimiters &&
                        ((a = n.length + a + r.length) > o[h] && (o[h] = a),
                        (p[h] = a)),
                        (d[h] = s);
                    }
                    a.splice(1, 0, d), s.splice(1, 0, p), (c = -1);
                    let f = [];
                    for (; ++c < a.length; ) {
                      let e = a[c],
                        n = s[c];
                      h = -1;
                      let r = [];
                      for (; ++h < l; ) {
                        let a = e[h] || "",
                          s = "",
                          c = "";
                        if (!1 !== t.alignDelimiters) {
                          let e = o[h] - (n[h] || 0),
                            t = i[h];
                          114 === t
                            ? (s = " ".repeat(e))
                            : 99 === t
                            ? e % 2
                              ? ((s = " ".repeat(e / 2 + 0.5)),
                                (c = " ".repeat(e / 2 - 0.5)))
                              : (c = s = " ".repeat(e / 2))
                            : (c = " ".repeat(e));
                        }
                        !1 === t.delimiterStart || h || r.push("|"),
                          !1 !== t.padding &&
                            !(!1 === t.alignDelimiters && "" === a) &&
                            (!1 !== t.delimiterStart || h) &&
                            r.push(" "),
                          !1 !== t.alignDelimiters && r.push(s),
                          r.push(a),
                          !1 !== t.alignDelimiters && r.push(c),
                          !1 !== t.padding && r.push(" "),
                          (!1 !== t.delimiterEnd || h !== l - 1) && r.push("|");
                      }
                      f.push(
                        !1 === t.delimiterEnd
                          ? r.join("").replace(/ +$/, "")
                          : r.join("")
                      );
                    }
                    return f.join("\n");
                  })(e, {
                    align: t,
                    alignDelimiters: r,
                    padding: n,
                    stringLength: i,
                  });
                }
                function l(e, t, n) {
                  let r = e.children,
                    i = -1,
                    a = [],
                    o = t.enter("tableRow");
                  for (; ++i < r.length; ) a[i] = s(r[i], e, t, n);
                  return o(), a;
                }
              })(t),
              {
                unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
                handlers: { listItem: K },
              },
            ],
          });
      }
    },
    50342: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = String(e || "").trim();
        return t ? t.split(/[ \t\n\r\f]+/g) : [];
      }
      function i(e) {
        return e.join(" ").trim();
      }
      n.d(t, {
        P: function () {
          return i;
        },
        Q: function () {
          return r;
        },
      });
    },
    96093: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return r;
        },
      });
      let r = function (e) {
        if (null == e) return a;
        if ("function" == typeof e) return i(e);
        if ("object" == typeof e)
          return Array.isArray(e)
            ? (function (e) {
                let t = [],
                  n = -1;
                for (; ++n < e.length; ) t[n] = r(e[n]);
                return i(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                });
              })(e)
            : i(function (t) {
                let n;
                for (n in e) if (t[n] !== e[n]) return !1;
                return !0;
              });
        if ("string" == typeof e)
          return i(function (t) {
            return t && t.type === e;
          });
        throw Error("Expected function, string, or object as test");
      };
      function i(e) {
        return function (t, n, r) {
          var i;
          return !!(
            null !== (i = t) &&
            "object" == typeof i &&
            "type" in i &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function a() {
        return !0;
      }
    },
    3980: function (e, t, n) {
      "use strict";
      n.d(t, {
        FK: function () {
          return s;
        },
        Pk: function () {
          return i;
        },
        rb: function () {
          return r;
        },
      });
      let r = a("end"),
        i = a("start");
      function a(e) {
        return function (t) {
          let n = (t && t.position && t.position[e]) || {};
          if (
            "number" == typeof n.line &&
            n.line > 0 &&
            "number" == typeof n.column &&
            n.column > 0
          )
            return {
              line: n.line,
              column: n.column,
              offset:
                "number" == typeof n.offset && n.offset > -1
                  ? n.offset
                  : void 0,
            };
        };
      }
      function s(e) {
        let t = i(e),
          n = r(e);
        if (t && n) return { start: t, end: n };
      }
    },
    88718: function (e, t, n) {
      "use strict";
      n.d(t, {
        BK: function () {
          return a;
        },
        S4: function () {
          return s;
        },
      });
      var r = n(96093);
      let i = [],
        a = !1;
      function s(e, t, n, s) {
        let o;
        "function" == typeof t && "function" != typeof n
          ? ((s = n), (n = t))
          : (o = t);
        let l = (0, r.O)(o),
          c = s ? -1 : 1;
        (function e(r, o, u) {
          let h = r && "object" == typeof r ? r : {};
          if ("string" == typeof h.type) {
            let e =
              "string" == typeof h.tagName
                ? h.tagName
                : "string" == typeof h.name
                ? h.name
                : void 0;
            Object.defineProperty(d, "name", {
              value: "node (" + r.type + (e ? "<" + e + ">" : "") + ")",
            });
          }
          return d;
          function d() {
            var h;
            let d,
              p,
              f,
              E = i;
            if (
              (!t || l(r, o, u[u.length - 1] || void 0)) &&
              (E = Array.isArray((h = n(r, u)))
                ? h
                : "number" == typeof h
                ? [!0, h]
                : null == h
                ? i
                : [h])[0] === a
            )
              return E;
            if ("children" in r && r.children && r.children && "skip" !== E[0])
              for (
                p = (s ? r.children.length : -1) + c, f = u.concat(r);
                p > -1 && p < r.children.length;

              ) {
                if ((d = e(r.children[p], p, f)())[0] === a) return d;
                p = "number" == typeof d[1] ? d[1] : p + c;
              }
            return E;
          }
        })(e, void 0, [])();
      }
    },
    21623: function (e, t, n) {
      "use strict";
      n.d(t, {
        Vn: function () {
          return i;
        },
      });
      var r = n(88718);
      function i(e, t, n, i) {
        let a, s, o;
        "function" == typeof t && "function" != typeof n
          ? ((s = void 0), (o = t), (a = n))
          : ((s = t), (o = n), (a = i)),
          (0, r.S4)(
            e,
            s,
            function (e, t) {
              let n = t[t.length - 1],
                r = n ? n.children.indexOf(e) : void 0;
              return o(e, r, n);
            },
            a
          );
      }
    },
  },
]);
