"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [308],
  {
    35308: function (t, e, i) {
      let s;
      i.d(e, {
        E: function () {
          return rl;
        },
      });
      var n,
        r = i(85893),
        o = i(67294);
      let a = (0, o.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        l = (0, o.createContext)({}),
        h = (0, o.createContext)(null),
        u = "undefined" != typeof document,
        d = u ? o.useLayoutEffect : o.useEffect,
        c = (0, o.createContext)({ strict: !1 }),
        p = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        m = "data-" + p("framerAppearId"),
        f = { skipAnimations: !1, useManualTiming: !1 };
      class v {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let g = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function y(t, e) {
        let i = !1,
          s = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          r = () => (i = !0),
          o = g.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new v(),
                  i = new v(),
                  s = 0,
                  n = !1,
                  r = !1,
                  o = new WeakSet(),
                  a = {
                    schedule: (t, r = !1, a = !1) => {
                      let l = a && n,
                        h = l ? e : i;
                      return (
                        r && o.add(t),
                        h.add(t) && l && n && (s = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      i.remove(t), o.delete(t);
                    },
                    process: (l) => {
                      if (n) {
                        r = !0;
                        return;
                      }
                      if (
                        ((n = !0),
                        ([e, i] = [i, e]),
                        i.clear(),
                        (s = e.order.length))
                      )
                        for (let i = 0; i < s; i++) {
                          let s = e.order[i];
                          o.has(s) && (a.schedule(s), t()), s(l);
                        }
                      (n = !1), r && ((r = !1), a.process(l));
                    },
                  };
                return a;
              })(r)),
              t
            ),
            {}
          ),
          {
            read: a,
            resolveKeyframes: l,
            update: h,
            preRender: u,
            render: d,
            postRender: c,
          } = o,
          p = () => {
            let r = f.useManualTiming ? n.timestamp : performance.now();
            (i = !1),
              (n.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - n.timestamp, 40), 1)),
              (n.timestamp = r),
              (n.isProcessing = !0),
              a.process(n),
              l.process(n),
              h.process(n),
              u.process(n),
              d.process(n),
              c.process(n),
              (n.isProcessing = !1),
              i && e && ((s = !1), t(p));
          },
          m = () => {
            (i = !0), (s = !0), n.isProcessing || t(p);
          };
        return {
          schedule: g.reduce((t, e) => {
            let s = o[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || m(), s.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < g.length; e++) o[g[e]].cancel(t);
          },
          state: n,
          steps: o,
        };
      }
      let { schedule: x, cancel: P } = y(queueMicrotask, !1);
      function w(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let T = (0, o.createContext)({}),
        b = !1;
      function S() {
        window.HandoffComplete = !0;
      }
      function A(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function V(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let C = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        E = ["initial", ...C];
      function M(t) {
        return V(t.animate) || E.some((e) => A(t[e]));
      }
      function R(t) {
        return !!(M(t) || t.variants);
      }
      function k(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let D = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        L = {};
      for (let t in D) L[t] = { isEnabled: (e) => D[t].some((t) => !!e[t]) };
      let F = (0, o.createContext)({}),
        j = Symbol.for("motionComponentSymbol"),
        B = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function O(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (B.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let U = {},
        I = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        $ = new Set(I);
      function N(t, { layout: e, layoutId: i }) {
        return (
          $.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!U[t] || "opacity" === t))
        );
      }
      let W = (t) => !!(t && t.getVelocity),
        z = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        H = I.length,
        Y = (t) => (e) => "string" == typeof e && e.startsWith(t),
        K = Y("--"),
        X = Y("var(--"),
        G = (t) => !!X(t) && q.test(t.split("/*")[0].trim()),
        q =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        _ = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        Z = (t, e, i) => (i > e ? e : i < t ? t : i),
        J = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        Q = { ...J, transform: (t) => Z(0, 1, t) },
        tt = { ...J, default: 1 },
        te = (t) => Math.round(1e5 * t) / 1e5,
        ti = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        ts =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tn =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function tr(t) {
        return "string" == typeof t;
      }
      let to = (t) => ({
          test: (e) => tr(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        ta = to("deg"),
        tl = to("%"),
        th = to("px"),
        tu = to("vh"),
        td = to("vw"),
        tc = {
          ...tl,
          parse: (t) => tl.parse(t) / 100,
          transform: (t) => tl.transform(100 * t),
        },
        tp = { ...J, transform: Math.round },
        tm = {
          borderWidth: th,
          borderTopWidth: th,
          borderRightWidth: th,
          borderBottomWidth: th,
          borderLeftWidth: th,
          borderRadius: th,
          radius: th,
          borderTopLeftRadius: th,
          borderTopRightRadius: th,
          borderBottomRightRadius: th,
          borderBottomLeftRadius: th,
          width: th,
          maxWidth: th,
          height: th,
          maxHeight: th,
          size: th,
          top: th,
          right: th,
          bottom: th,
          left: th,
          padding: th,
          paddingTop: th,
          paddingRight: th,
          paddingBottom: th,
          paddingLeft: th,
          margin: th,
          marginTop: th,
          marginRight: th,
          marginBottom: th,
          marginLeft: th,
          rotate: ta,
          rotateX: ta,
          rotateY: ta,
          rotateZ: ta,
          scale: tt,
          scaleX: tt,
          scaleY: tt,
          scaleZ: tt,
          skew: ta,
          skewX: ta,
          skewY: ta,
          distance: th,
          translateX: th,
          translateY: th,
          translateZ: th,
          x: th,
          y: th,
          z: th,
          perspective: th,
          transformPerspective: th,
          opacity: Q,
          originX: tc,
          originY: tc,
          originZ: th,
          zIndex: tp,
          backgroundPositionX: th,
          backgroundPositionY: th,
          fillOpacity: Q,
          strokeOpacity: Q,
          numOctaves: tp,
        };
      function tf(t, e, i) {
        let { style: s, vars: n, transform: r, transformOrigin: o } = t,
          a = !1,
          l = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if (K(t)) {
            n[t] = i;
            continue;
          }
          let u = tm[t],
            d = _(i, u);
          if ($.has(t)) {
            if (((a = !0), (r[t] = d), !h)) continue;
            i !== (u.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((l = !0), (o[t] = d)) : (s[t] = d);
        }
        if (
          (!e.transform &&
            (a || i
              ? (s.transform = (function (t, e, i) {
                  let s = "";
                  for (let e = 0; e < H; e++) {
                    let i = I[e];
                    if (void 0 !== t[i]) {
                      let e = z[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    (s = s.trim()),
                    i ? (s = i(t, e ? "" : s)) : e && (s = "none"),
                    s
                  );
                })(t.transform, h, i))
              : s.transform && (s.transform = "none")),
          l)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = o;
          s.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let tv = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tg(t, e, i) {
        for (let s in e) W(e[s]) || N(s, i) || (t[s] = e[s]);
      }
      let ty = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function tx(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          ty.has(t)
        );
      }
      let tP = (t) => !tx(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (tP = (t) => (t.startsWith("on") ? !tx(t) : n(t)));
      } catch (t) {}
      function tw(t, e, i) {
        return "string" == typeof t ? t : th.transform(e + i * t);
      }
      let tT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tb = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tS(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: s,
          originX: n,
          originY: r,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...h
        },
        u,
        d
      ) {
        if ((tf(t, h, d), u)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== n || void 0 !== r || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let s = tw(e, t.x, t.width),
                n = tw(i, t.y, t.height);
              return `${s} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== s && (c.scale = s),
          void 0 !== o &&
            (function (t, e, i = 1, s = 0, n = !0) {
              t.pathLength = 1;
              let r = n ? tT : tb;
              t[r.offset] = th.transform(-s);
              let o = th.transform(e),
                a = th.transform(i);
              t[r.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let tA = () => ({ ...tv(), attrs: {} }),
        tV = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tC(t, { style: e, vars: i }, s, n) {
        for (let r in (Object.assign(t.style, e, n && n.getProjectionStyles(s)),
        i))
          t.style.setProperty(r, i[r]);
      }
      let tE = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tM(t, e, i, s) {
        for (let i in (tC(t, e, void 0, s), e.attrs))
          t.setAttribute(tE.has(i) ? i : p(i), e.attrs[i]);
      }
      function tR(t, e, i) {
        var s;
        let { style: n } = t,
          r = {};
        for (let o in n)
          (W(n[o]) ||
            (e.style && W(e.style[o])) ||
            N(o, t) ||
            (null === (s = null == i ? void 0 : i.getValue(o)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (r[o] = n[o]);
        return (
          i && n && "string" == typeof n.willChange && (i.applyWillChange = !1),
          r
        );
      }
      function tk(t, e, i) {
        let s = tR(t, e, i);
        for (let i in t)
          (W(t[i]) || W(e[i])) &&
            (s[
              -1 !== I.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return s;
      }
      function tD(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function tL(t, e, i, s) {
        if ("function" == typeof e) {
          let [n, r] = tD(s);
          e = e(void 0 !== i ? i : t.custom, n, r);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [n, r] = tD(s);
          e = e(void 0 !== i ? i : t.custom, n, r);
        }
        return e;
      }
      let tF = (t) => Array.isArray(t),
        tj = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tB = (t) => (tF(t) ? t[t.length - 1] || 0 : t);
      function tO(t) {
        let e = W(t) ? t.get() : t;
        return tj(e) ? e.toValue() : e;
      }
      let tU = new Set(["opacity", "clipPath", "filter", "transform"]);
      function tI(t) {
        return $.has(t) ? "transform" : tU.has(t) ? p(t) : void 0;
      }
      function t$(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function tN(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      let tW = (t) => (e, i) => {
        let s = (0, o.useContext)(l),
          n = (0, o.useContext)(h),
          r = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: s,
              },
              n,
              r,
              o,
              a
            ) {
              let l = {
                latestValues: (function (t, e, i, s, n) {
                  var r;
                  let o = {},
                    a = [],
                    l =
                      s &&
                      (null === (r = t.style) || void 0 === r
                        ? void 0
                        : r.willChange) === void 0,
                    h = n(t, {});
                  for (let t in h) o[t] = tO(h[t]);
                  let { initial: u, animate: d } = t,
                    c = M(t),
                    p = R(t);
                  e &&
                    p &&
                    !c &&
                    !1 !== t.inherit &&
                    (void 0 === u && (u = e.initial),
                    void 0 === d && (d = e.animate));
                  let m = !!i && !1 === i.initial,
                    f = (m = m || !1 === u) ? d : u;
                  return (
                    f &&
                      "boolean" != typeof f &&
                      !V(f) &&
                      tz(t, f, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = m ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (o[e] = i);
                        }
                        for (let t in e) o[t] = e[t];
                      }),
                    l &&
                      (d &&
                        !1 !== u &&
                        !V(d) &&
                        tz(t, d, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = tI(e);
                              i && t$(t, i);
                            })(a, e);
                        }),
                      a.length && (o.willChange = a.join(","))),
                    o
                  );
                })(n, r, o, !a && t, e),
                renderState: i(),
              };
              return s && (l.mount = (t) => s(n, t, l)), l;
            })(t, e, s, n, i);
        return i
          ? r()
          : (function (t) {
              let e = (0, o.useRef)(null);
              return null === e.current && (e.current = t()), e.current;
            })(r);
      };
      function tz(t, e, i) {
        let s = Array.isArray(e) ? e : [e];
        for (let e = 0; e < s.length; e++) {
          let n = tL(t, s[e]);
          if (n) {
            let { transitionEnd: t, transition: e, ...s } = n;
            i(s, t);
          }
        }
      }
      let tH = (t) => t,
        {
          schedule: tY,
          cancel: tK,
          state: tX,
          steps: tG,
        } = y(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : tH,
          !0
        ),
        tq = {
          useVisualState: tW({
            scrapeMotionValuesFromProps: tk,
            createRenderState: tA,
            onMount: (t, e, { renderState: i, latestValues: s }) => {
              tY.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tY.render(() => {
                  tS(i, s, tV(e.tagName), t.transformTemplate), tM(e, i);
                });
            },
          }),
        },
        t_ = {
          useVisualState: tW({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: tR,
            createRenderState: tv,
          }),
        };
      function tZ(t, e, i, s = { passive: !0 }) {
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
      }
      let tJ = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tQ(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let t0 = (t) => (e) => tJ(e) && t(e, tQ(e));
      function t1(t, e, i, s) {
        return tZ(t, e, t0(i), s);
      }
      let t5 = (t, e) => (i) => e(t(i)),
        t2 = (...t) => t.reduce(t5);
      function t3(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let t9 = t3("dragHorizontal"),
        t4 = t3("dragVertical");
      function t6(t) {
        let e = !1;
        if ("y" === t) e = t4();
        else if ("x" === t) e = t9();
        else {
          let t = t9(),
            i = t4();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function t8() {
        let t = t6(!0);
        return !t || (t(), !1);
      }
      class t7 {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function et(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return t1(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (s, n) => {
            if ("touch" === s.pointerType || t8()) return;
            let r = t.getProps();
            t.animationState &&
              r.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = r[i];
            o && tY.postRender(() => o(s, n));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class ee extends t7 {
        mount() {
          this.unmount = t2(et(this.node, !0), et(this.node, !1));
        }
        unmount() {}
      }
      class ei extends t7 {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = t2(
            tZ(this.node.current, "focus", () => this.onFocus()),
            tZ(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let es = (t, e) => !!e && (t === e || es(t, e.parentElement));
      function en(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tQ(i));
      }
      class er extends t7 {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tH),
            (this.removeEndListeners = tH),
            (this.removeAccessibleListeners = tH),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                s = t1(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: s,
                        globalTapTarget: n,
                      } = this.node.getProps(),
                      r = n || es(this.node.current, t.target) ? i : s;
                    r && tY.update(() => r(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                n = t1(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = t2(s, n)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tZ(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tZ(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          en("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && tY.postRender(() => i(t, e));
                          });
                      }
                    )),
                    en("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tZ(this.node.current, "blur", () => {
                  this.isPressing &&
                    en("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = t2(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: s } = this.node.getProps();
          s &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && tY.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !t8()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && tY.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = t1(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = tZ(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = t2(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let eo = new WeakMap(),
        ea = new WeakMap(),
        el = (t) => {
          let e = eo.get(t.target);
          e && e(t);
        },
        eh = (t) => {
          t.forEach(el);
        },
        eu = { some: 0, all: 1 };
      class ed extends t7 {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: s = "some", once: n } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof s ? s : eu[s],
            };
          return (function (t, e, i) {
            let s = (function ({ root: t, ...e }) {
              let i = t || document;
              ea.has(i) || ea.set(i, {});
              let s = ea.get(i),
                n = JSON.stringify(e);
              return (
                s[n] ||
                  (s[n] = new IntersectionObserver(eh, { root: t, ...e })),
                s[n]
              );
            })(e);
            return (
              eo.set(t, i),
              s.observe(t),
              () => {
                eo.delete(t), s.unobserve(t);
              }
            );
          })(this.node.current, r, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: s } =
                this.node.getProps(),
              r = e ? i : s;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function ec(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      function ep(t, e, i) {
        let s = t.getProps();
        return tL(s, e, void 0 !== i ? i : s.custom, t);
      }
      let em = (t) => 1e3 * t,
        ef = (t) => t / 1e3,
        ev = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        eg = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ey = { type: "keyframes", duration: 0.8 },
        ex = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        eP = (t, { keyframes: e }) =>
          e.length > 2
            ? ey
            : $.has(t)
            ? t.startsWith("scale")
              ? eg(e[1])
              : ev
            : ex;
      function ew(t, e) {
        return t[e] || t.default || t;
      }
      let eT = { current: !1 },
        eb = (t) => null !== t;
      function eS(t, { repeat: e, repeatType: i = "loop" }, s) {
        let n = t.filter(eb),
          r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return r && void 0 !== s ? s : n[r];
      }
      function eA() {
        s = void 0;
      }
      let eV = {
          now: () => (
            void 0 === s &&
              eV.set(
                tX.isProcessing || f.useManualTiming
                  ? tX.timestamp
                  : performance.now()
              ),
            s
          ),
          set: (t) => {
            (s = t), queueMicrotask(eA);
          },
        },
        eC = (t) => /^0[^.\s]+$/u.test(t),
        eE = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        eM = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        eR = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        ek = (t) => t === J || t === th,
        eD = (t, e) => parseFloat(t.split(", ")[e]),
        eL =
          (t, e) =>
          (i, { transform: s }) => {
            if ("none" === s || !s) return 0;
            let n = s.match(/^matrix3d\((.+)\)$/u);
            if (n) return eD(n[1], e);
            {
              let e = s.match(/^matrix\((.+)\)$/u);
              return e ? eD(e[1], t) : 0;
            }
          },
        eF = new Set(["x", "y", "z"]),
        ej = I.filter((t) => !eF.has(t)),
        eB = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: eL(4, 13),
          y: eL(5, 14),
        };
      (eB.translateX = eB.x), (eB.translateY = eB.y);
      let eO = (t) => (e) => e.test(t),
        eU = [
          J,
          th,
          tl,
          ta,
          td,
          tu,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eI = (t) => eU.find(eO(t)),
        e$ = new Set(),
        eN = !1,
        eW = !1;
      function ez() {
        if (eW) {
          let t = Array.from(e$).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                ej.forEach((i) => {
                  let s = t.getValue(i);
                  void 0 !== s &&
                    (e.push([i, s.get()]),
                    s.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var s;
                  null === (s = t.getValue(e)) || void 0 === s || s.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (eW = !1), (eN = !1), e$.forEach((t) => t.complete()), e$.clear();
      }
      function eH() {
        e$.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (eW = !0);
        });
      }
      class eY {
        constructor(t, e, i, s, n, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = n),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (e$.add(this),
                eN || ((eN = !0), tY.read(eH), tY.resolveKeyframes(ez)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == s ? void 0 : s.get(),
                  r = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let s = i.readValue(e, r);
                  null != s && (t[0] = s);
                }
                void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            e$.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), e$.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let eK = (t, e) => (i) =>
          !!(
            (tr(i) && tn.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eX = (t, e, i) => (s) => {
          if (!tr(s)) return s;
          let [n, r, o, a] = s.match(ti);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eG = (t) => Z(0, 255, t),
        eq = { ...J, transform: (t) => Math.round(eG(t)) },
        e_ = {
          test: eK("rgb", "red"),
          parse: eX("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            "rgba(" +
            eq.transform(t) +
            ", " +
            eq.transform(e) +
            ", " +
            eq.transform(i) +
            ", " +
            te(Q.transform(s)) +
            ")",
        },
        eZ = {
          test: eK("#"),
          parse: function (t) {
            let e = "",
              i = "",
              s = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (s = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (s = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (s += s),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: e_.transform,
        },
        eJ = {
          test: eK("hsl", "hue"),
          parse: eX("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tl.transform(te(e)) +
            ", " +
            tl.transform(te(i)) +
            ", " +
            te(Q.transform(s)) +
            ")",
        },
        eQ = {
          test: (t) => e_.test(t) || eZ.test(t) || eJ.test(t),
          parse: (t) =>
            e_.test(t) ? e_.parse(t) : eJ.test(t) ? eJ.parse(t) : eZ.parse(t),
          transform: (t) =>
            tr(t)
              ? t
              : t.hasOwnProperty("red")
              ? e_.transform(t)
              : eJ.transform(t),
        },
        e0 = "number",
        e1 = "color",
        e5 =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function e2(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          n = [],
          r = 0,
          o = e
            .replace(
              e5,
              (t) => (
                eQ.test(t)
                  ? (s.color.push(r), n.push(e1), i.push(eQ.parse(t)))
                  : t.startsWith("var(")
                  ? (s.var.push(r), n.push("var"), i.push(t))
                  : (s.number.push(r), n.push(e0), i.push(parseFloat(t))),
                ++r,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: s, types: n };
      }
      function e3(t) {
        return e2(t).values;
      }
      function e9(t) {
        let { split: e, types: i } = e2(t),
          s = e.length;
        return (t) => {
          let n = "";
          for (let r = 0; r < s; r++)
            if (((n += e[r]), void 0 !== t[r])) {
              let e = i[r];
              e === e0
                ? (n += te(t[r]))
                : e === e1
                ? (n += eQ.transform(t[r]))
                : (n += t[r]);
            }
          return n;
        };
      }
      let e4 = (t) => ("number" == typeof t ? 0 : t),
        e6 = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              tr(t) &&
              ((null === (e = t.match(ti)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(ts)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: e3,
          createTransformer: e9,
          getAnimatableNone: function (t) {
            let e = e3(t);
            return e9(t)(e.map(e4));
          },
        },
        e8 = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function e7(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(ti) || [];
        if (!s) return t;
        let n = i.replace(s, ""),
          r = e8.has(e) ? 1 : 0;
        return s !== i && (r *= 100), e + "(" + r + n + ")";
      }
      let it = /\b([a-z-]*)\(.*?\)/gu,
        ie = {
          ...e6,
          getAnimatableNone: (t) => {
            let e = t.match(it);
            return e ? e.map(e7).join(" ") : t;
          },
        },
        ii = {
          ...tm,
          color: eQ,
          backgroundColor: eQ,
          outlineColor: eQ,
          fill: eQ,
          stroke: eQ,
          borderColor: eQ,
          borderTopColor: eQ,
          borderRightColor: eQ,
          borderBottomColor: eQ,
          borderLeftColor: eQ,
          filter: ie,
          WebkitFilter: ie,
        },
        is = (t) => ii[t];
      function ir(t, e) {
        let i = is(t);
        return (
          i !== ie && (i = e6),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let io = new Set(["auto", "none", "0"]);
      class ia extends eY {
        constructor(t, e, i, s) {
          super(t, e, i, s, null == s ? void 0 : s.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ("string" == typeof s && G((s = s.trim()))) {
              let n = (function t(e, i, s = 1) {
                tH(
                  s <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, r] = (function (t) {
                  let e = eM.exec(t);
                  if (!e) return [,];
                  let [, i, s, n] = e;
                  return [`--${null != i ? i : s}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return eE(t) ? parseFloat(t) : t;
                }
                return G(r) ? t(r, i, s + 1) : r;
              })(s, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = s);
            }
          }
          if ((this.resolveNoneKeyframes(), !eR.has(i) || 2 !== t.length))
            return;
          let [s, n] = t,
            r = eI(s),
            o = eI(n);
          if (r !== o) {
            if (ek(r) && ek(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var s;
            ("number" == typeof (s = t[e])
              ? 0 === s
              : null === s || "none" === s || "0" === s || eC(s)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                n = 0;
              for (; n < t.length && !s; ) {
                let e = t[n];
                "string" == typeof e &&
                  !io.has(e) &&
                  e2(e).values.length &&
                  (s = t[n]),
                  n++;
              }
              if (s && i) for (let n of e) t[n] = ir(i, s);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eB[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && t.getValue(i, s).jump(s, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: s } = this;
          if (!e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let r = s.length - 1,
            o = s[r];
          (s[r] = eB[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function il(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let ih = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (e6.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class iu {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: s = 0,
          repeatDelay: n = 0,
          repeatType: r = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: s,
              repeatDelay: n,
              repeatType: r,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (eH(), ez()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          this.hasAttemptedResolve = !0;
          let {
            name: i,
            type: s,
            velocity: n,
            delay: r,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, s) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let r = t[t.length - 1],
                o = ih(n, e),
                a = ih(r, e);
              return (
                tH(
                  o === a,
                  `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && s))
              );
            })(t, i, s, n)
          ) {
            if (eT.current || !r) {
              null == a || a(eS(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let h = this.initPlayback(t, e);
          !1 !== h &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...h }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      function id(t, e, i) {
        var s, n;
        let r = Math.max(e - 5, 0);
        return (s = i - t(r)), (n = e - r) ? (1e3 / n) * s : 0;
      }
      function ic(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let ip = ["duration", "bounce"],
        im = ["stiffness", "damping", "mass"];
      function iv(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ig({ keyframes: t, restDelta: e, restSpeed: i, ...s }) {
        let n;
        let r = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: r },
          {
            stiffness: l,
            damping: h,
            mass: u,
            duration: d,
            velocity: c,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!iv(t, im) && iv(t, ip)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: s = 1,
              }) {
                let n, r;
                tH(t <= em(10), "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                (o = Z(0.05, 1, o)),
                  (t = Z(0.01, 10, ef(t))),
                  o < 1
                    ? ((n = (e) => {
                        let s = e * o,
                          n = s * t;
                        return 0.001 - ((s - i) / ic(e, o)) * Math.exp(-n);
                      }),
                      (r = (e) => {
                        let s = e * o * t,
                          r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = ic(Math.pow(e, 2), o);
                        return (
                          ((s * i + i - r) *
                            Math.exp(-s) *
                            (-n(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((n = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (r = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let s = i;
                  for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                  return s;
                })(n, r, 5 / t);
                if (((t = em(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * s;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(s * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...s, velocity: -ef(s.velocity || 0) }),
          m = c || 0,
          f = h / (2 * Math.sqrt(l * u)),
          v = o - r,
          g = ef(Math.sqrt(l / u)),
          y = 5 > Math.abs(v);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), f < 1)) {
          let t = ic(g, f);
          n = (e) =>
            o -
            Math.exp(-f * g * e) *
              (((m + f * g * v) / t) * Math.sin(t * e) + v * Math.cos(t * e));
        } else if (1 === f)
          n = (t) => o - Math.exp(-g * t) * (v + (m + g * v) * t);
        else {
          let t = g * Math.sqrt(f * f - 1);
          n = (e) => {
            let i = Math.exp(-f * g * e),
              s = Math.min(t * e, 300);
            return (
              o -
              (i * ((m + f * g * v) * Math.sinh(s) + t * v * Math.cosh(s))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let s = n(t);
            if (p) a.done = t >= d;
            else {
              let r = m;
              0 !== t && (r = f < 1 ? id(n, t, s) : 0);
              let l = Math.abs(r) <= i,
                h = Math.abs(o - s) <= e;
              a.done = l && h;
            }
            return (a.value = a.done ? o : s), a;
          },
        };
      }
      function iy({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: n = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / s),
          w = (t) => x + P(t),
          T = (t) => {
            let e = P(t),
              i = w(t);
            (m.done = Math.abs(e) <= h), (m.value = m.done ? x : i);
          },
          b = (t) => {
            f(m.value) &&
              ((d = t),
              (c = ig({
                keyframes: [m.value, v(m.value)],
                velocity: id(w, t, m.value),
                damping: n,
                stiffness: r,
                restDelta: h,
                restSpeed: u,
              })));
          };
        return (
          b(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), T(t), b(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || T(t), m);
            },
          }
        );
      }
      let ix = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function iP(t, e, i, s) {
        if (t === e && i === s) return tH;
        let n = (e) =>
          (function (t, e, i, s, n) {
            let r, o;
            let a = 0;
            do
              (r = ix((o = e + (i - e) / 2), s, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(r) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ix(n(t), e, s));
      }
      let iw = iP(0.42, 0, 1, 1),
        iT = iP(0, 0, 0.58, 1),
        ib = iP(0.42, 0, 0.58, 1),
        iS = (t) => Array.isArray(t) && "number" != typeof t[0],
        iA = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        iV = (t) => (e) => 1 - t(1 - e),
        iC = (t) => 1 - Math.sin(Math.acos(t)),
        iE = iV(iC),
        iM = iA(iC),
        iR = iP(0.33, 1.53, 0.69, 0.99),
        ik = iV(iR),
        iD = iA(ik),
        iL = {
          linear: tH,
          easeIn: iw,
          easeInOut: ib,
          easeOut: iT,
          circIn: iC,
          circInOut: iM,
          circOut: iE,
          backIn: ik,
          backInOut: iD,
          backOut: iR,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * ik(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        iF = (t) => {
          if (Array.isArray(t)) {
            tH(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, s, n] = t;
            return iP(e, i, s, n);
          }
          return "string" == typeof t
            ? (tH(void 0 !== iL[t], `Invalid easing type '${t}'`), iL[t])
            : t;
        },
        ij = (t, e, i) => {
          let s = e - t;
          return 0 === s ? 1 : (i - t) / s;
        },
        iB = (t, e, i) => t + (e - t) * i;
      function iO(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function iU(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let iI = (t, e, i) => {
          let s = t * t,
            n = i * (e * e - s) + s;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        i$ = [eZ, e_, eJ],
        iN = (t) => i$.find((e) => e.test(t));
      function iW(t) {
        let e = iN(t);
        if (
          (tH(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === eJ &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let n = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - s;
                (n = iO(a, s, t + 1 / 3)),
                  (r = iO(a, s, t)),
                  (o = iO(a, s, t - 1 / 3));
              } else n = r = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let iz = (t, e) => {
          let i = iW(t),
            s = iW(e);
          if (!i || !s) return iU(t, e);
          let n = { ...i };
          return (t) => (
            (n.red = iI(i.red, s.red, t)),
            (n.green = iI(i.green, s.green, t)),
            (n.blue = iI(i.blue, s.blue, t)),
            (n.alpha = iB(i.alpha, s.alpha, t)),
            e_.transform(n)
          );
        },
        iH = new Set(["none", "hidden"]);
      function iY(t, e) {
        return (i) => iB(t, e, i);
      }
      function iK(t) {
        return "number" == typeof t
          ? iY
          : "string" == typeof t
          ? G(t)
            ? iU
            : eQ.test(t)
            ? iz
            : iq
          : Array.isArray(t)
          ? iX
          : "object" == typeof t
          ? eQ.test(t)
            ? iz
            : iG
          : iU;
      }
      function iX(t, e) {
        let i = [...t],
          s = i.length,
          n = t.map((t, i) => iK(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = n[e](t);
          return i;
        };
      }
      function iG(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (s[n] = iK(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let iq = (t, e) => {
        let i = e6.createTransformer(e),
          s = e2(t),
          n = e2(e);
        return s.indexes.var.length === n.indexes.var.length &&
          s.indexes.color.length === n.indexes.color.length &&
          s.indexes.number.length >= n.indexes.number.length
          ? (iH.has(t) && !n.values.length) || (iH.has(e) && !s.values.length)
            ? iH.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : t2(
                iX(
                  (function (t, e) {
                    var i;
                    let s = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let r = 0; r < e.values.length; r++) {
                      let o = e.types[r],
                        a = t.indexes[o][n[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (s[r] = l), n[o]++;
                    }
                    return s;
                  })(s, n),
                  n.values
                ),
                i
              )
          : (tH(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            iU(t, e));
      };
      function i_(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? iB(t, e, i)
          : iK(t)(t, e);
      }
      function iZ({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: s = "easeInOut",
      }) {
        let n = iS(s) ? s.map(iF) : iF(s),
          r = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
            let r = t.length;
            if (
              (tH(
                r === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === r)
            )
              return () => e[0];
            if (2 === r && t[0] === t[1]) return () => e[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let s = [],
                  n = i || i_,
                  r = t.length - 1;
                for (let i = 0; i < r; i++) {
                  let r = n(t[i], t[i + 1]);
                  e && (r = t2(Array.isArray(e) ? e[i] || tH : e, r)),
                    s.push(r);
                }
                return s;
              })(e, s, n),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let s = ij(t[i], t[i + 1], e);
                return o[i](s);
              };
            return i ? (e) => l(Z(t[0], t[r - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let s = 1; s <= e; s++) {
                        let n = ij(0, e, s);
                        t.push(iB(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(n)
                ? n
                : e.map(() => n || ib).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((r.value = o(e)), (r.done = e >= t), r),
        };
      }
      let iJ = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => tY.update(e, !0),
            stop: () => tK(e),
            now: () => (tX.isProcessing ? tX.timestamp : eV.now()),
          };
        },
        iQ = { decay: iy, inertia: iy, tween: iZ, keyframes: iZ, spring: ig },
        i0 = (t) => t / 100;
      class i1 extends iu {
        constructor({ KeyframeResolver: t = eY, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let { name: i, motionValue: s, keyframes: n } = this.options,
            r = (t, e) => this.onKeyframesResolved(t, e);
          i && s && s.owner
            ? (this.resolver = s.owner.resolveKeyframes(n, r, i, s))
            : (this.resolver = new t(n, r, i, s)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: s = "keyframes",
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = iQ[s] || iZ;
          l !== iZ &&
            "number" != typeof t[0] &&
            ((e = t2(i0, i_(t[0], t[1]))), (t = [0, 100]));
          let h = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(h));
          let { calculatedDuration: u } = h,
            d = u + r;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: u,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - r,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: s,
            generator: n,
            mirroredGenerator: r,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: h,
            resolvedDuration: u,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > h;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let y = this.currentTime,
            x = n;
          if (c) {
            let t = Math.min(this.currentTime, h) / u,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / u))
                  : "mirror" === p && (x = r)),
              (y = Z(0, 1, i) * u);
          }
          let P = g ? { done: !1, value: a[0] } : x.next(y);
          o && (P.value = o(P.value));
          let { done: w } = P;
          g ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let T =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            T && void 0 !== s && (P.value = eS(a, this.options, s)),
            f && f(P.value),
            T && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? ef(t.calculatedDuration) : 0;
        }
        get time() {
          return ef(this.currentTime);
        }
        set time(t) {
          (t = em(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = ef(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = iJ, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let i5 = (t) => Array.isArray(t) && "number" == typeof t[0],
        i2 = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        i3 = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: i2([0, 0.65, 0.55, 1]),
          circOut: i2([0.55, 0, 1, 0.45]),
          backIn: i2([0.31, 0.01, 0.66, -0.59]),
          backOut: i2([0.33, 1.53, 0.69, 0.99]),
        };
      function i9(t) {
        return i4(t) || i3.easeOut;
      }
      function i4(t) {
        if (t) return i5(t) ? i2(t) : Array.isArray(t) ? t.map(i9) : i3[t];
      }
      let i6 = il(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate")
      );
      class i8 extends iu {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: s } = this.options;
          (this.resolver = new ia(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, s;
          let {
            duration: n = 300,
            times: r,
            ease: o,
            type: a,
            motionValue: l,
            name: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (s = this.options).type ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in i3) ||
                i5(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(s.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: s,
                ...l
              } = this.options,
              h = (function (t, e) {
                let i = new i1({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  s = { done: !1, value: t[0] },
                  n = [],
                  r = 0;
                for (; !s.done && r < 2e4; )
                  n.push((s = i.sample(r)).value), (r += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: r - 10,
                  ease: "linear",
                };
              })(t, l);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (r = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let u = (function (
            t,
            e,
            i,
            {
              delay: s = 0,
              duration: n = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let u = i4(a);
            return (
              Array.isArray(u) && (h.easing = u),
              t.animate(h, {
                delay: s,
                duration: n,
                easing: Array.isArray(u) ? "linear" : u,
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, h, t, {
            ...this.options,
            duration: n,
            times: r,
            ease: o,
          });
          return (
            (u.startTime = eV.now()),
            this.pendingTimeline
              ? ((u.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (u.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(eS(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: u,
              duration: n,
              times: r,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return ef(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return ef(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = em(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return tH;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return tH;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: s,
            type: n,
            ease: r,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                ...l
              } = this.options,
              h = new i1({
                ...l,
                keyframes: i,
                duration: s,
                type: n,
                ease: r,
                times: o,
                isGenerator: !0,
              }),
              u = em(this.time);
            t.setWithVelocity(h.sample(u - 10).value, h.sample(u).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: s,
            repeatType: n,
            damping: r,
            type: o,
          } = t;
          return (
            i6() &&
            i &&
            tU.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !s &&
            "mirror" !== n &&
            0 !== r &&
            "inertia" !== o
          );
        }
      }
      let i7 = il(() => void 0 !== window.ScrollTimeline);
      class st {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!i7() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let s = () => {
                    let { currentTime: s } = e,
                      n = (null === s ? 0 : s.value) / 100;
                    i !== n && t(n), (i = n);
                  };
                  return tY.update(s, !0), () => tK(s);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let se =
        (t, e, i, s = {}, n, r, o) =>
        (a) => {
          let l = ew(s, t) || {},
            h = l.delay || s.delay || 0,
            { elapsed: u = 0 } = s;
          u -= em(h);
          let d = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...l,
            delay: -u,
            onUpdate: (t) => {
              e.set(t), l.onUpdate && l.onUpdate(t);
            },
            onComplete: () => {
              a(), l.onComplete && l.onComplete(), o && o();
            },
            onStop: o,
            name: t,
            motionValue: e,
            element: r ? void 0 : n,
          };
          !(function ({
            when: t,
            delay: e,
            delayChildren: i,
            staggerChildren: s,
            staggerDirection: n,
            repeat: r,
            repeatType: o,
            repeatDelay: a,
            from: l,
            elapsed: h,
            ...u
          }) {
            return !!Object.keys(u).length;
          })(l) && (d = { ...d, ...eP(t, d) }),
            d.duration && (d.duration = em(d.duration)),
            d.repeatDelay && (d.repeatDelay = em(d.repeatDelay)),
            void 0 !== d.from && (d.keyframes[0] = d.from);
          let c = !1;
          if (
            ((!1 !== d.type && (0 !== d.duration || d.repeatDelay)) ||
              ((d.duration = 0), 0 !== d.delay || (c = !0)),
            (eT.current || f.skipAnimations) &&
              ((c = !0), (d.duration = 0), (d.delay = 0)),
            c && !r && void 0 !== e.get())
          ) {
            let t = eS(d.keyframes, l);
            if (void 0 !== t)
              return (
                tY.update(() => {
                  d.onUpdate(t), d.onComplete();
                }),
                new st([])
              );
          }
          return !r && i8.supports(d) ? new i8(d) : new i1(d);
        };
      class si {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return t$(this.subscriptions, t), () => tN(this.subscriptions, t);
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < s; n++) {
                let s = this.subscriptions[n];
                s && s(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let ss = (t) => !isNaN(parseFloat(t)),
        sn = { current: void 0 };
      class sr {
        constructor(t, e = {}) {
          (this.version = "11.3.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = eV.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = eV.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = ss(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new si());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  tY.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return sn.current && sn.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = eV.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function so(t, e) {
        return new sr(t, e);
      }
      function sa(t) {
        return t.getProps()[m];
      }
      class sl extends sr {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = tI(t);
          if (!e) return;
          let i = this.counts.get(e) || 0;
          this.counts.set(e, i + 1),
            0 === i && (this.output.push(e), this.update());
          let s = !1;
          return () => {
            if (s) return;
            s = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t),
              0 === t && (tN(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(", ") : "auto");
        }
      }
      function sh(t, e) {
        var i, s;
        if (!t.applyWillChange) return;
        let n = t.getValue("willChange");
        if (
          (n ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((n = new sl("auto")), t.addValue("willChange", n)),
          W((s = n)) && s.add)
        )
          return n.add(e);
      }
      function su(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
        var r;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        s && (o = s);
        let h = [],
          u = n && t.animationState && t.animationState.getState()[n];
        for (let e in l) {
          let s = t.getValue(
              e,
              null !== (r = t.latestValues[e]) && void 0 !== r ? r : null
            ),
            n = l[e];
          if (
            void 0 === n ||
            (u &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
              })(u, e))
          )
            continue;
          let a = { delay: i, elapsed: 0, ...ew(o || {}, e) },
            d = !1;
          if (window.HandoffAppearAnimations) {
            let i = sa(t);
            if (i) {
              let t = window.HandoffAppearAnimations(i, e, s, tY);
              null !== t && ((a.elapsed = t), (d = !0));
            }
          }
          s.start(
            se(
              e,
              s,
              n,
              t.shouldReduceMotion && $.has(e) ? { type: !1 } : a,
              t,
              d,
              sh(t, e)
            )
          );
          let c = s.animation;
          c && h.push(c);
        }
        return (
          a &&
            Promise.all(h).then(() => {
              tY.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: s = {},
                      ...n
                    } = ep(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = tB(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, so(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function sd(t, e, i = {}) {
        var s;
        let n = ep(
            t,
            e,
            "exit" === i.type
              ? null === (s = t.presenceContext) || void 0 === s
                ? void 0
                : s.custom
              : void 0
          ),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let o = n ? () => Promise.all(su(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (s = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, s = 0, n = 1, r) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * s,
                      l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                    return (
                      Array.from(t.variantChildren)
                        .sort(sc)
                        .forEach((t, s) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              sd(t, e, { ...r, delay: i + l(s) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + s, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function sc(t, e) {
        return t.sortNodePosition(e);
      }
      let sp = [...C].reverse(),
        sm = C.length;
      function sf(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function sv() {
        return {
          animate: sf(!0),
          whileInView: sf(),
          whileHover: sf(),
          whileTap: sf(),
          whileDrag: sf(),
          whileFocus: sf(),
          exit: sf(),
        };
      }
      class sg extends t7 {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let s;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            s = Promise.all(e.map((e) => sd(t, e, i)));
                          else if ("string" == typeof e) s = sd(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? ep(t, e, i.custom) : e;
                            s = Promise.all(su(t, n, i));
                          }
                          return s.then(() => {
                            tY.postRender(() => {
                              t.notify("AnimationComplete", e);
                            });
                          });
                        })(t, e, i)
                      )
                    ),
                  i = sv(),
                  s = !0,
                  n = (e) => (i, s) => {
                    var n;
                    let r = ep(
                      t,
                      s,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...s } = r;
                      i = { ...i, ...s, ...e };
                    }
                    return i;
                  };
                function r(r) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    h = new Set(),
                    u = {},
                    d = 1 / 0;
                  for (let e = 0; e < sm; e++) {
                    var c;
                    let p = sp[e],
                      m = i[p],
                      f = void 0 !== o[p] ? o[p] : a[p],
                      v = A(f),
                      g = p === r ? m.isActive : null;
                    !1 === g && (d = e);
                    let y = f === a[p] && f !== o[p] && v;
                    if (
                      (y && s && t.manuallyAnimateOnMount && (y = !1),
                      (m.protectedKeys = { ...u }),
                      (!m.isActive && null === g) ||
                        (!f && !m.prevProp) ||
                        V(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let x =
                        ((c = m.prevProp),
                        ("string" == typeof f
                          ? f !== c
                          : !!Array.isArray(f) && !ec(f, c)) ||
                          (p === r && m.isActive && !y && v) ||
                          (e > d && v)),
                      P = !1,
                      w = Array.isArray(f) ? f : [f],
                      T = w.reduce(n(p), {});
                    !1 === g && (T = {});
                    let { prevResolvedValues: b = {} } = m,
                      S = { ...b, ...T },
                      C = (e) => {
                        (x = !0),
                          h.has(e) && ((P = !0), h.delete(e)),
                          (m.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in S) {
                      let e = T[t],
                        i = b[t];
                      if (!u.hasOwnProperty(t))
                        (tF(e) && tF(i) ? ec(e, i) : e === i)
                          ? void 0 !== e && h.has(t)
                            ? C(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                          ? C(t)
                          : h.add(t);
                    }
                    (m.prevProp = f),
                      (m.prevResolvedValues = T),
                      m.isActive && (u = { ...u, ...T }),
                      s && t.blockInitialAnimation && (x = !1),
                      x &&
                        (!y || P) &&
                        l.push(
                          ...w.map((t) => ({
                            animation: t,
                            options: { type: p },
                          }))
                        );
                  }
                  if (h.size) {
                    let e = {};
                    h.forEach((i) => {
                      let s = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != s ? s : null);
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    s &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (s = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: r,
                  setActive: function (e, s) {
                    var n;
                    if (i[e].isActive === s) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, s);
                      }),
                      (i[e].isActive = s);
                    let o = r(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = sv()), (s = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          V(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let sy = 0;
      class sx extends t7 {
        constructor() {
          super(...arguments), (this.id = sy++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive("exit", !t);
          e && !t && s.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let sP = (t, e) => Math.abs(t - e);
      class sw {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = sS(this.lastMoveEventInfo, this.history),
                s = null !== this.startEvent,
                n =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(sP(t.x, e.x) ** 2 + sP(t.y, e.y) ** 2) >= 3);
              if (!s && !n) return;
              let { point: r } = i,
                { timestamp: o } = tX;
              this.history.push({ ...r, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              s ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = sT(e, this.transformPagePoint)),
                tY.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = sS(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : sT(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !tJ(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = sT(tQ(t), this.transformPagePoint),
            { point: o } = r,
            { timestamp: a } = tX;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, sS(r, this.history)),
            (this.removeListeners = t2(
              t1(this.contextWindow, "pointermove", this.handlePointerMove),
              t1(this.contextWindow, "pointerup", this.handlePointerUp),
              t1(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), tK(this.updatePoint);
        }
      }
      function sT(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function sb(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function sS({ point: t }, e) {
        return {
          point: t,
          delta: sb(t, sA(e)),
          offset: sb(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              n = sA(t);
            for (
              ;
              i >= 0 && ((s = t[i]), !(n.timestamp - s.timestamp > em(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = ef(n.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function sA(t) {
        return t[t.length - 1];
      }
      function sV(t) {
        return t.max - t.min;
      }
      function sC(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function sE(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = iB(e.min, e.max, t.origin)),
          (t.scale = sV(i) / sV(e)),
          (sC(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = iB(i.min, i.max, t.origin) - t.originPoint),
          (sC(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function sM(t, e, i, s) {
        sE(t.x, e.x, i.x, s ? s.originX : void 0),
          sE(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function sR(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + sV(e));
      }
      function sk(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + sV(e));
      }
      function sD(t, e, i) {
        sk(t.x, e.x, i.x), sk(t.y, e.y, i.y);
      }
      function sL(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function sF(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function sj(t, e, i) {
        return { min: sB(t, e), max: sB(t, i) };
      }
      function sB(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let sO = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        sU = () => ({ x: sO(), y: sO() }),
        sI = () => ({ min: 0, max: 0 }),
        s$ = () => ({ x: sI(), y: sI() });
      function sN(t) {
        return [t("x"), t("y")];
      }
      function sW({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      function sz(t) {
        return void 0 === t || 1 === t;
      }
      function sH({ scale: t, scaleX: e, scaleY: i }) {
        return !sz(t) || !sz(e) || !sz(i);
      }
      function sY(t) {
        return (
          sH(t) ||
          sK(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function sK(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function sX(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
      }
      function sG(t, e = 0, i = 1, s, n) {
        (t.min = sX(t.min, e, i, s, n)), (t.max = sX(t.max, e, i, s, n));
      }
      function sq(t, { x: e, y: i }) {
        sG(t.x, e.translate, e.scale, e.originPoint),
          sG(t.y, i.translate, i.scale, i.originPoint);
      }
      function s_(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function sZ(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function sJ(t, e, [i, s, n]) {
        let r = void 0 !== e[n] ? e[n] : 0.5,
          o = iB(t.min, t.max, r);
        sG(t, e[i], e[s], o, e.scale);
      }
      let sQ = ["x", "scaleX", "originX"],
        s0 = ["y", "scaleY", "originY"];
      function s1(t, e) {
        sJ(t.x, e, sQ), sJ(t.y, e, s0);
      }
      function s5(t, e) {
        return sW(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let s2 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        s3 = new WeakMap();
      class s9 {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = s$()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new sw(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tQ(t, "page").point);
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: s,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  s &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = t6(s)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  sN((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tl.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        if (s) {
                          let t = sV(s);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && tY.postRender(() => r(t, e)),
                  null === (i = this.removeWillChange) ||
                    void 0 === i ||
                    i.call(this),
                  (this.removeWillChange = sh(this.visualElement, "transform"));
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: n,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                sN((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: s2(this.visualElement),
            }
          );
        }
        stop(t, e) {
          var i;
          null === (i = this.removeWillChange) || void 0 === i || i.call(this);
          let s = this.isDragging;
          if ((this.cancel(), !s)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && tY.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !s4(t, s, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? iB(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? iB(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            n.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            n = this.constraints;
          e && w(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: s, right: n }
              ) {
                return { x: sL(t.x, i, n), y: sL(t.y, e, s) };
              })(s.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: sj(t, "left", "right"), y: sj(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              sN((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !w(e)) return !1;
          let s = e.current;
          tH(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let r = (function (t, e, i) {
              let s = s5(t, i),
                { scroll: n } = e;
              return n && (sZ(s.x, n.offset.x), sZ(s.y, n.offset.y)), s;
            })(s, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: sF((t = n.layout.layoutBox).x, r.x), y: sF(t.y, r.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = sW(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: n,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            sN((o) => {
              if (!s4(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(
            se(t, i, 0, e, this.visualElement, !1, sh(this.visualElement, t))
          );
        }
        stopAnimation() {
          sN((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          sN((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          sN((e) => {
            let { drag: i } = this.getProps();
            if (!s4(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              n.set(t[e] - iB(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!w(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          sN((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = sV(t),
                  n = sV(e);
                return (
                  n > s
                    ? (i = ij(e.min, e.max - s, t.min))
                    : s > n && (i = ij(t.min, t.max - n, e.min)),
                  Z(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            sN((e) => {
              if (!s4(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: r } = this.constraints[e];
              i.set(iB(n, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          s3.set(this.visualElement, this);
          let t = t1(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              w(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            tY.read(e);
          let n = tZ(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (sN((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), s(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: n = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: n,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function s4(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class s6 extends t7 {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tH),
            (this.removeListeners = tH),
            (this.controls = new s9(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tH);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let s8 = (t) => (e, i) => {
        t && tY.postRender(() => t(e, i));
      };
      class s7 extends t7 {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tH);
        }
        onPointerDown(t) {
          this.session = new sw(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: s2(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: s8(t),
            onStart: s8(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && tY.postRender(() => s(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = t1(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let nt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ne(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ni = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!th.test(t)) return t;
            t = parseFloat(t);
          }
          let i = ne(t, e.target.x),
            s = ne(t, e.target.y);
          return `${i}% ${s}%`;
        },
      };
      class ns extends o.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: n } = t;
          Object.assign(U, nr),
            n &&
              (e.group && e.group.add(n),
              i && i.register && s && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nt.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: n,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = n),
              s || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? r.promote()
                  : r.relegate() ||
                    tY.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            x.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nn(t) {
        let [e, i] = (function () {
            let t = (0, o.useContext)(h);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              n = (0, o.useId)();
            return (
              (0, o.useEffect)(() => s(n), []),
              !e && i ? [!1, () => i && i(n)] : [!0]
            );
          })(),
          s = (0, o.useContext)(F);
        return (0, r.jsx)(ns, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, o.useContext)(T),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let nr = {
          borderRadius: {
            ...ni,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: ni,
          borderTopRightRadius: ni,
          borderBottomLeftRadius: ni,
          borderBottomRightRadius: ni,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let s = e6.parse(t);
              if (s.length > 5) return t;
              let n = e6.createTransformer(t),
                r = "number" != typeof s[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (s[0 + r] /= o), (s[1 + r] /= a);
              let l = iB(o, a, 0.5);
              return (
                "number" == typeof s[2 + r] && (s[2 + r] /= l),
                "number" == typeof s[3 + r] && (s[3 + r] /= l),
                n(s)
              );
            },
          },
        },
        no = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        na = no.length,
        nl = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nh = (t) => "number" == typeof t || th.test(t);
      function nu(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nd = np(0, 0.5, iE),
        nc = np(0.5, 0.95, tH);
      function np(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i(ij(t, e, s)));
      }
      function nm(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nf(t, e) {
        nm(t.x, e.x), nm(t.y, e.y);
      }
      function nv(t, e, i, s, n) {
        return (
          (t -= e),
          (t = s + (1 / i) * (t - s)),
          void 0 !== n && (t = s + (1 / n) * (t - s)),
          t
        );
      }
      function ng(t, e, [i, s, n], r, o) {
        !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
          if (
            (tl.test(e) &&
              ((e = parseFloat(e)), (e = iB(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = iB(r.min, r.max, s);
          t === r && (a -= e),
            (t.min = nv(t.min, e, i, a, n)),
            (t.max = nv(t.max, e, i, a, n));
        })(t, e[i], e[s], e[n], e.scale, r, o);
      }
      let ny = ["x", "scaleX", "originX"],
        nx = ["y", "scaleY", "originY"];
      function nP(t, e, i, s) {
        ng(t.x, e, ny, i ? i.x : void 0, s ? s.x : void 0),
          ng(t.y, e, nx, i ? i.y : void 0, s ? s.y : void 0);
      }
      function nw(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nT(t) {
        return nw(t.x) && nw(t.y);
      }
      function nb(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function nS(t) {
        return sV(t.x) / sV(t.y);
      }
      class nA {
        constructor() {
          this.members = [];
        }
        add(t) {
          t$(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (tN(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nV(t, e, i) {
        let s = "",
          n = t.x.translate / e.x,
          r = t.y.translate / e.y,
          o = (null == i ? void 0 : i.z) || 0;
        if (
          ((n || r || o) && (s = `translate3d(${n}px, ${r}px, ${o}px) `),
          (1 !== e.x || 1 !== e.y) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let {
            transformPerspective: t,
            rotate: e,
            rotateX: n,
            rotateY: r,
            skewX: o,
            skewY: a,
          } = i;
          t && (s = `perspective(${t}px) ${s}`),
            e && (s += `rotate(${e}deg) `),
            n && (s += `rotateX(${n}deg) `),
            r && (s += `rotateY(${r}deg) `),
            o && (s += `skewX(${o}deg) `),
            a && (s += `skewY(${a}deg) `);
        }
        let a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none";
      }
      let nC = (t, e) => t.depth - e.depth;
      class nE {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          t$(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          tN(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nC),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let nM = ["", "X", "Y", "Z"],
        nR = { visibility: "hidden" },
        nk = 0,
        nD = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nL(t, e, i, s) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function nF({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nk++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (nD.totalNodes =
                    nD.resolvedTargetDeltas =
                    nD.recalculatedProjection =
                      0),
                  this.nodes.forEach(nO),
                  this.nodes.forEach(nH),
                  this.nodes.forEach(nY),
                  this.nodes.forEach(nU),
                  window.MotionDebug && window.MotionDebug.record(nD);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nE());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new si()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: s, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = eV.now(),
                      s = ({ timestamp: e }) => {
                        let n = e - i;
                        n >= 250 && (tK(s), t(n - 250));
                      };
                    return tY.read(s, !0), () => tK(s);
                  })(s, 0)),
                  nt.hasAnimatedSinceResize &&
                    ((nt.hasAnimatedSinceResize = !1), this.nodes.forEach(nz));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        nZ,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l = !this.targetLayout || !nb(this.targetLayout, s) || i,
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h);
                      let e = { ...ew(n, "layout"), onPlay: o, onComplete: a };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || nz(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              tK(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nK),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.HandoffCancelAllAnimations &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return !1;
                  let { visualElement: i } = e.options;
                  return (
                    !!i &&
                    (!!sa(i) ||
                      (!!e.parent &&
                        !e.parent.hasCheckedOptimisedAppear &&
                        t(e.parent)))
                  );
                })(this) &&
                window.HandoffCancelAllAnimations(),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(n$);
              return;
            }
            this.isUpdating || this.nodes.forEach(nN),
              (this.isUpdating = !1),
              this.nodes.forEach(nW),
              this.nodes.forEach(nj),
              this.nodes.forEach(nB),
              this.clearAllSnapshots();
            let t = eV.now();
            (tX.delta = Z(0, 1e3 / 60, t - tX.timestamp)),
              (tX.timestamp = t),
              (tX.isProcessing = !0),
              tG.update.process(tX),
              tG.preRender.process(tX),
              tG.render.process(tX),
              (tX.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), x.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nI), this.sharedNodes.forEach(nX);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tY.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tY.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = s$()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: s(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nT(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              (e || sY(this.latestValues) || r) &&
              (n(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              n0((e = s).x),
              n0(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return s$();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (sZ(e.x, i.offset.x), sZ(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = s$();
            nf(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let s = this.path[i],
                { scroll: n, options: r } = s;
              if (s !== this.root && n && r.layoutScroll) {
                if (n.isRoot) {
                  nf(e, t);
                  let { scroll: i } = this.root;
                  i && (sZ(e.x, -i.offset.x), sZ(e.y, -i.offset.y));
                }
                sZ(e.x, n.offset.x), sZ(e.y, n.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = s$();
            nf(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                s1(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                sY(s.latestValues) && s1(i, s.latestValues);
            }
            return sY(this.latestValues) && s1(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = s$();
            nf(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !sY(i.latestValues)) continue;
              sH(i.latestValues) && i.updateSnapshot();
              let s = s$();
              nf(s, i.measurePageBox()),
                nP(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s
                );
            }
            return sY(this.latestValues) && nP(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tX.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, n;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tX.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = s$()),
                    (this.relativeTargetOrigin = s$()),
                    sD(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nf(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = s$()), (this.targetWithTransforms = s$())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (n = this.relativeParent.target),
                      sR(i.x, s.x, n.x),
                      sR(i.y, s.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nf(this.target, this.layout.layoutBox),
                      sq(this.target, this.targetDelta))
                    : nf(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = s$()),
                      (this.relativeTargetOrigin = s$()),
                      sD(this.relativeTargetOrigin, this.target, t.target),
                      nf(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nD.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              sH(this.parent.latestValues) ||
              sK(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === tX.timestamp && (s = !1),
              s)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            nf(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, s = !1) {
              let n, r;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (n = i[a]).projectionDelta;
                  let o = n.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      s1(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), sq(t, r)),
                    s && sY(n.latestValues) && s1(t, n.latestValues));
                }
                (e.x = s_(e.x)), (e.y = s_(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = s$()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = sU()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = sU()),
              (this.projectionDeltaWithTransform = sU()));
            let h = this.projectionTransform;
            sM(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = nV(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== h ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nD.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              n = s ? s.latestValues : {},
              r = { ...this.latestValues },
              o = sU();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = s$(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              d = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(n_)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (nG(o.x, t.x, s),
                  nG(o.y, t.y, s),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, c, p, m;
                  sD(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    nq(p.x, m.x, a.x, s),
                    nq(p.y, m.y, a.y, s),
                    i &&
                      ((h = this.relativeTarget),
                      (c = i),
                      h.x.min === c.x.min &&
                        h.x.max === c.x.max &&
                        h.y.min === c.y.min &&
                        h.y.max === c.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = s$()),
                    nf(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, n, r) {
                    n
                      ? ((t.opacity = iB(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          nd(s)
                        )),
                        (t.opacityExit = iB(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nc(s)
                        )))
                      : r &&
                        (t.opacity = iB(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let n = 0; n < na; n++) {
                      let r = `border${no[n]}Radius`,
                        o = nu(e, r),
                        a = nu(i, r);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || nh(o) === nh(a)
                          ? ((t[r] = Math.max(iB(nl(o), nl(a), s), 0)),
                            (tl.test(a) || tl.test(o)) && (t[r] += "%"))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = iB(e.rotate || 0, i.rotate || 0, s));
                  })(r, n, this.latestValues, s, d, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (tK(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tY.update(() => {
                (nt.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = W(0) ? 0 : so(0);
                    return s.start(se("", s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: n,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                n1(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || s$();
                let e = sV(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = sV(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              nf(e, i),
                s1(e, n),
                sM(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nA()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && nL("z", t, s, this.animationValues);
            for (let e = 0; e < nM.length; e++)
              nL(`rotate${nM[e]}`, t, s, this.animationValues),
                nL(`skew${nM[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nR;
            let s = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  tO(null == t ? void 0 : t.pointerEvents) || ""),
                (s.transform = n ? n(this.latestValues, "") : "none"),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tO(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !sY(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = nV(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              n && (s.transform = n(o, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            U)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = U[t],
                n = "none" === s.transform ? o[t] : e(o[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = n;
              } else s[t] = n;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this
                    ? tO(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(n$),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nj(t) {
        t.updateLayout();
      }
      function nB(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: n } = t.options,
            r = i.source !== t.layout.source;
          "size" === n
            ? sN((t) => {
                let s = r ? i.measuredBox[t] : i.layoutBox[t],
                  n = sV(s);
                (s.min = e[t].min), (s.max = s.min + n);
              })
            : n1(n, i.layoutBox, e) &&
              sN((s) => {
                let n = r ? i.measuredBox[s] : i.layoutBox[s],
                  o = sV(e[s]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
              });
          let o = sU();
          sM(o, e, i.layoutBox);
          let a = sU();
          r
            ? sM(a, t.applyTransform(s, !0), i.measuredBox)
            : sM(a, e, i.layoutBox);
          let l = !nT(o),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: n, layout: r } = s;
              if (n && r) {
                let o = s$();
                sD(o, i.layoutBox, n.layoutBox);
                let a = s$();
                sD(a, e, r.layoutBox),
                  nb(o, a) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nO(t) {
        nD.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nU(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nI(t) {
        t.clearSnapshot();
      }
      function n$(t) {
        t.clearMeasurements();
      }
      function nN(t) {
        t.isLayoutDirty = !1;
      }
      function nW(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nz(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nH(t) {
        t.resolveTargetDelta();
      }
      function nY(t) {
        t.calcProjection();
      }
      function nK(t) {
        t.resetSkewAndRotation();
      }
      function nX(t) {
        t.removeLeadSnapshot();
      }
      function nG(t, e, i) {
        (t.translate = iB(e.translate, 0, i)),
          (t.scale = iB(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nq(t, e, i, s) {
        (t.min = iB(e.min, i.min, s)), (t.max = iB(e.max, i.max, s));
      }
      function n_(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nZ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nJ = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nQ = nJ("applewebkit/") && !nJ("chrome/") ? Math.round : tH;
      function n0(t) {
        (t.min = nQ(t.min)), (t.max = nQ(t.max));
      }
      function n1(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !sC(nS(e), nS(i), 0.2))
        );
      }
      let n5 = nF({
          attachResizeListener: (t, e) => tZ(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        n2 = { current: void 0 },
        n3 = nF({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!n2.current) {
              let t = new n5({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (n2.current = t);
            }
            return n2.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        n9 = { current: null },
        n4 = { current: !1 },
        n6 = new WeakMap(),
        n8 = [...eU, eQ, e6],
        n7 = (t) => n8.find(eO(t)),
        rt = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        re = E.length;
      class ri {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: n,
            visualState: r,
          },
          o = {}
        ) {
          (this.applyWillChange = !1),
            (this.resolveKeyframes = (t, e, i, s) =>
              new this.KeyframeResolver(t, e, i, s, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eY),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tY.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = M(e)),
            (this.isVariantNode = R(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...u } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in u) {
            let e = u[t];
            void 0 !== a[t] && W(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            n6.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            n4.current ||
              (function () {
                if (((n4.current = !0), u)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (n9.current = t.matches);
                    t.addListener(e), e();
                  } else n9.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || n9.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (n6.delete(this.current),
          this.projection && this.projection.unmount(),
          tK(this.notifyUpdate),
          tK(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = $.has(t),
            s = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tY.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            s(), n(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in L) {
            let e = L[t];
            if (!e) continue;
            let { isEnabled: i, Feature: s } = e;
            if (
              (!this.features[t] &&
                s &&
                i(this.props) &&
                (this.features[t] = new s(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : s$();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < rt.length; e++) {
            let i = rt[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let s in e) {
              let n = e[s],
                r = i[s];
              if (W(n)) t.addValue(s, n);
              else if (W(r)) t.addValue(s, so(n, { owner: t }));
              else if (r !== n) {
                if (t.hasValue(s)) {
                  let e = t.getValue(s);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(s);
                  t.addValue(s, so(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < re; t++) {
            let i = E[t],
              s = this.props[i];
            (A(s) || !1 === s) && (e[i] = s);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = so(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let s =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != s &&
              ("string" == typeof s && (eE(s) || eC(s))
                ? (s = parseFloat(s))
                : !n7(s) && e6.test(e) && (s = ir(t, e)),
              this.setBaseTarget(t, W(s) ? s.get() : s)),
            W(s) ? s.get() : s
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: s } = this.props;
          if ("string" == typeof s || "object" == typeof s) {
            let n = tL(
              this.props,
              s,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            n && (i = n[t]);
          }
          if (s && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || W(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new si()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class rs extends ri {
        constructor() {
          super(...arguments), (this.KeyframeResolver = ia);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class rn extends rs {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0);
        }
        readValueFromInstance(t, e) {
          if ($.has(e)) {
            let t = is(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              s = (K(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return s5(t, e);
        }
        build(t, e, i) {
          tf(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tR(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          W(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, s) {
          tC(t, e, i, s);
        }
      }
      class rr extends rs {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if ($.has(e)) {
            let t = is(e);
            return (t && t.default) || 0;
          }
          return (e = tE.has(e) ? e : p(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return s$();
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tk(t, e, i);
        }
        build(t, e, i) {
          tS(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, s) {
          tM(t, e, i, s);
        }
        mount(t) {
          (this.isSVGTag = tV(t.tagName)), super.mount(t);
        }
      }
      let ro = (t, e) =>
          O(t) ? new rr(e) : new rn(e, { allowProjection: t !== o.Fragment }),
        ra = {
          animation: { Feature: sg },
          exit: { Feature: sx },
          inView: { Feature: ed },
          tap: { Feature: er },
          focus: { Feature: ei },
          hover: { Feature: ee },
          pan: { Feature: s7 },
          drag: { Feature: s6, ProjectionNode: n3, MeasureLayout: nn },
          layout: { ProjectionNode: n3, MeasureLayout: nn },
        },
        rl = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: s,
              Component: n,
            }) {
              t &&
                (function (t) {
                  for (let e in t) L[e] = { ...L[e], ...t[e] };
                })(t);
              let p = (0, o.forwardRef)(function (t, p) {
                var f;
                let v;
                let g = {
                    ...(0, o.useContext)(a),
                    ...t,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, o.useContext)(F).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(t),
                  },
                  { isStatic: y } = g,
                  P = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (M(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || A(e) ? e : void 0,
                          animate: A(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, o.useContext)(l));
                    return (0, o.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [k(e), k(i)]
                    );
                  })(t),
                  V = s(t, y);
                if (!y && u) {
                  (0, o.useContext)(c).strict;
                  let t = (function (t) {
                    let { drag: e, layout: i } = L;
                    if (!e && !i) return {};
                    let s = { ...e, ...i };
                    return {
                      MeasureLayout:
                        (null == e ? void 0 : e.isEnabled(t)) ||
                        (null == i ? void 0 : i.isEnabled(t))
                          ? s.MeasureLayout
                          : void 0,
                      ProjectionNode: s.ProjectionNode,
                    };
                  })(g);
                  (v = t.MeasureLayout),
                    (P.visualElement = (function (t, e, i, s, n) {
                      let { visualElement: r } = (0, o.useContext)(l),
                        u = (0, o.useContext)(c),
                        p = (0, o.useContext)(h),
                        f = (0, o.useContext)(a).reducedMotion,
                        v = (0, o.useRef)();
                      (s = s || u.renderer),
                        !v.current &&
                          s &&
                          (v.current = s(t, {
                            visualState: e,
                            parent: r,
                            props: i,
                            presenceContext: p,
                            blockInitialAnimation: !!p && !1 === p.initial,
                            reducedMotionConfig: f,
                          }));
                      let g = v.current,
                        y = (0, o.useContext)(T);
                      g &&
                        !g.projection &&
                        n &&
                        ("html" === g.type || "svg" === g.type) &&
                        (function (t, e, i, s) {
                          let {
                            layoutId: n,
                            layout: r,
                            drag: o,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: h,
                          } = e;
                          (t.projection = new i(
                            t.latestValues,
                            e["data-framer-portal-id"]
                              ? void 0
                              : (function t(e) {
                                  if (e)
                                    return !1 !== e.options.allowProjection
                                      ? e.projection
                                      : t(e.parent);
                                })(t.parent)
                          )),
                            t.projection.setOptions({
                              layoutId: n,
                              layout: r,
                              alwaysMeasureLayout: !!o || (a && w(a)),
                              visualElement: t,
                              scheduleRender: () => t.scheduleRender(),
                              animationType: "string" == typeof r ? r : "both",
                              initialPromotionConfig: s,
                              layoutScroll: l,
                              layoutRoot: h,
                            });
                        })(v.current, i, n, y),
                        (0, o.useInsertionEffect)(() => {
                          g && g.update(i, p);
                        });
                      let P = (0, o.useRef)(
                        !!(i[m] && !window.HandoffComplete)
                      );
                      return (
                        d(() => {
                          g &&
                            (g.updateFeatures(),
                            x.render(g.render),
                            P.current &&
                              g.animationState &&
                              g.animationState.animateChanges());
                        }),
                        (0, o.useEffect)(() => {
                          g &&
                            (!P.current &&
                              g.animationState &&
                              g.animationState.animateChanges(),
                            P.current &&
                              ((P.current = !1),
                              b || ((b = !0), queueMicrotask(S))));
                        }),
                        g
                      );
                    })(n, V, g, e, t.ProjectionNode));
                }
                return (0, r.jsxs)(l.Provider, {
                  value: P,
                  children: [
                    v && P.visualElement
                      ? (0, r.jsx)(v, { visualElement: P.visualElement, ...g })
                      : null,
                    i(
                      n,
                      t,
                      ((f = P.visualElement),
                      (0, o.useCallback)(
                        (t) => {
                          t && V.mount && V.mount(t),
                            f && (t ? f.mount(t) : f.unmount()),
                            p &&
                              ("function" == typeof p
                                ? p(t)
                                : w(p) && (p.current = t));
                        },
                        [f]
                      )),
                      V,
                      y,
                      P.visualElement
                    ),
                  ],
                });
              });
              return (p[j] = n), p;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, s) => (i.has(s) || i.set(s, e(s)), i.get(s)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, s) {
            return {
              ...(O(t) ? tq : t_),
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, s, { latestValues: n }, r) => {
                  let a = (
                      O(e)
                        ? function (t, e, i, s) {
                            let n = (0, o.useMemo)(() => {
                              let i = tA();
                              return (
                                tS(i, e, tV(s), t.transformTemplate),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              tg(e, t.style, t),
                                (n.style = { ...e, ...n.style });
                            }
                            return n;
                          }
                        : function (t, e) {
                            let i = {},
                              s = (function (t, e) {
                                let i = t.style || {},
                                  s = {};
                                return (
                                  tg(s, i, t),
                                  Object.assign(
                                    s,
                                    (function ({ transformTemplate: t }, e) {
                                      return (0, o.useMemo)(() => {
                                        let i = tv();
                                        return (
                                          tf(i, e, t),
                                          Object.assign({}, i.vars, i.style)
                                        );
                                      }, [e]);
                                    })(t, e)
                                  ),
                                  s
                                );
                              })(t, e);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((i.draggable = !1),
                                (s.userSelect =
                                  s.WebkitUserSelect =
                                  s.WebkitTouchCallout =
                                    "none"),
                                (s.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (i.tabIndex = 0),
                              (i.style = s),
                              i
                            );
                          }
                    )(i, n, r, e),
                    l = (function (t, e, i) {
                      let s = {};
                      for (let n in t)
                        ("values" !== n || "object" != typeof t.values) &&
                          (tP(n) ||
                            (!0 === i && tx(n)) ||
                            (!e && !tx(n)) ||
                            (t.draggable && n.startsWith("onDrag"))) &&
                          (s[n] = t[n]);
                      return s;
                    })(i, "string" == typeof e, t),
                    h = e !== o.Fragment ? { ...l, ...a, ref: s } : {},
                    { children: u } = i,
                    d = (0, o.useMemo)(() => (W(u) ? u.get() : u), [u]);
                  return (0, o.createElement)(e, { ...h, children: d });
                };
              })(e),
              createVisualElement: s,
              Component: t,
            };
          })(t, e, ra, ro)
        );
    },
  },
]);
