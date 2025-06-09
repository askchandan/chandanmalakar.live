"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [996],
  {
    42614: function (e, t, r) {
      r.d(t, {
        u: function () {
          return n;
        },
      });
      function n(e, [t, r]) {
        return Math.min(r, Math.max(t, e));
      }
    },
    42561: function (e, t, r) {
      let n;
      r.d(t, {
        VY: function () {
          return tc;
        },
        ZA: function () {
          return tf;
        },
        JO: function () {
          return tu;
        },
        ck: function () {
          return tm;
        },
        wU: function () {
          return th;
        },
        eT: function () {
          return tv;
        },
        __: function () {
          return tp;
        },
        h_: function () {
          return ts;
        },
        fC: function () {
          return ti;
        },
        $G: function () {
          return tg;
        },
        u_: function () {
          return ty;
        },
        Z0: function () {
          return tw;
        },
        xz: function () {
          return tl;
        },
        B4: function () {
          return ta;
        },
        l_: function () {
          return td;
        },
      });
      var o,
        i = r(67294),
        l = r.t(i, 2),
        a = r(73935),
        u = r(42614);
      function s(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
        };
      }
      var c = r(85893);
      function d(e, t = []) {
        let r = [],
          n = () => {
            let t = r.map((e) => i.createContext(e));
            return function (r) {
              let n = r?.[e] || t;
              return i.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: n } }),
                [r, n]
              );
            };
          };
        return (
          (n.scopeName = e),
          [
            function (t, n) {
              let o = i.createContext(n),
                l = r.length;
              r = [...r, n];
              let a = (t) => {
                let { scope: r, children: n, ...a } = t,
                  u = r?.[e]?.[l] || o,
                  s = i.useMemo(() => a, Object.values(a));
                return (0, c.jsx)(u.Provider, { value: s, children: n });
              };
              return (
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (r, a) {
                    let u = a?.[e]?.[l] || o,
                      s = i.useContext(u);
                    if (s) return s;
                    if (void 0 !== n) return n;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let n = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return i.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: n }),
                    [n]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(n, ...t),
          ]
        );
      }
      var f = r(28771);
      function p(e) {
        let t = (function (e) {
            let t = i.forwardRef((e, t) => {
              let { children: r, ...n } = e;
              if (i.isValidElement(r)) {
                let e, o;
                let l =
                    (e = Object.getOwnPropertyDescriptor(
                      r.props,
                      "ref"
                    )?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning
                      ? r.ref
                      : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning
                      ? r.props.ref
                      : r.props.ref || r.ref,
                  a = (function (e, t) {
                    let r = { ...t };
                    for (let n in t) {
                      let o = e[n],
                        i = t[n];
                      /^on[A-Z]/.test(n)
                        ? o && i
                          ? (r[n] = (...e) => {
                              i(...e), o(...e);
                            })
                          : o && (r[n] = o)
                        : "style" === n
                        ? (r[n] = { ...o, ...i })
                        : "className" === n &&
                          (r[n] = [o, i].filter(Boolean).join(" "));
                    }
                    return { ...e, ...r };
                  })(n, r.props);
                return (
                  r.type !== i.Fragment && (a.ref = t ? (0, f.F)(t, l) : l),
                  i.cloneElement(r, a)
                );
              }
              return i.Children.count(r) > 1 ? i.Children.only(null) : null;
            });
            return (t.displayName = `${e}.SlotClone`), t;
          })(e),
          r = i.forwardRef((e, r) => {
            let { children: n, ...o } = e,
              l = i.Children.toArray(n),
              a = l.find(v);
            if (a) {
              let e = a.props.children,
                n = l.map((t) =>
                  t !== a
                    ? t
                    : i.Children.count(e) > 1
                    ? i.Children.only(null)
                    : i.isValidElement(e)
                    ? e.props.children
                    : null
                );
              return (0, c.jsx)(t, {
                ...o,
                ref: r,
                children: i.isValidElement(e)
                  ? i.cloneElement(e, void 0, n)
                  : null,
              });
            }
            return (0, c.jsx)(t, { ...o, ref: r, children: n });
          });
        return (r.displayName = `${e}.Slot`), r;
      }
      var m = Symbol("radix.slottable");
      function v(e) {
        return (
          i.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === m
        );
      }
      var h = i.createContext(void 0),
        y = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = p(`Primitive.${t}`),
            n = i.forwardRef((e, n) => {
              let { asChild: o, ...i } = e,
                l = o ? r : t;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, c.jsx)(l, { ...i, ref: n })
              );
            });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function g(e) {
        let t = i.useRef(e);
        return (
          i.useEffect(() => {
            t.current = e;
          }),
          i.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var w = "dismissableLayer.update",
        x = i.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        b = i.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: r = !1,
              onEscapeKeyDown: n,
              onPointerDownOutside: l,
              onFocusOutside: a,
              onInteractOutside: u,
              onDismiss: d,
              ...p
            } = e,
            m = i.useContext(x),
            [v, h] = i.useState(null),
            b = v?.ownerDocument ?? globalThis?.document,
            [, S] = i.useState({}),
            R = (0, f.e)(t, (e) => h(e)),
            N = Array.from(m.layers),
            [j] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
            P = N.indexOf(j),
            T = v ? N.indexOf(v) : -1,
            I = m.layersWithOutsidePointerEventsDisabled.size > 0,
            A = T >= P,
            D = (function (e, t = globalThis?.document) {
              let r = g(e),
                n = i.useRef(!1),
                o = i.useRef(() => {});
              return (
                i.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !n.current) {
                        let n = function () {
                            C("dismissableLayer.pointerDownOutside", r, i, {
                              discrete: !0,
                            });
                          },
                          i = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = n),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : n();
                      } else t.removeEventListener("click", o.current);
                      n.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, r]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((e) => {
              let t = e.target,
                r = [...m.branches].some((e) => e.contains(t));
              !A || r || (l?.(e), u?.(e), e.defaultPrevented || d?.());
            }, b),
            M = (function (e, t = globalThis?.document) {
              let r = g(e),
                n = i.useRef(!1);
              return (
                i.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !n.current &&
                      C(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, r]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...m.branches].some((e) => e.contains(t)) ||
                (a?.(e), u?.(e), e.defaultPrevented || d?.());
            }, b);
          return (
            !(function (e, t = globalThis?.document) {
              let r = g(e);
              i.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && r(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [r, t]);
            })((e) => {
              T !== m.layers.size - 1 ||
                (n?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()));
            }, b),
            i.useEffect(() => {
              if (v)
                return (
                  r &&
                    (0 === m.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = b.body.style.pointerEvents),
                      (b.body.style.pointerEvents = "none")),
                    m.layersWithOutsidePointerEventsDisabled.add(v)),
                  m.layers.add(v),
                  E(),
                  () => {
                    r &&
                      1 === m.layersWithOutsidePointerEventsDisabled.size &&
                      (b.body.style.pointerEvents = o);
                  }
                );
            }, [v, b, r, m]),
            i.useEffect(
              () => () => {
                v &&
                  (m.layers.delete(v),
                  m.layersWithOutsidePointerEventsDisabled.delete(v),
                  E());
              },
              [v, m]
            ),
            i.useEffect(() => {
              let e = () => S({});
              return (
                document.addEventListener(w, e),
                () => document.removeEventListener(w, e)
              );
            }, []),
            (0, c.jsx)(y.div, {
              ...p,
              ref: R,
              style: {
                pointerEvents: I ? (A ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: s(e.onFocusCapture, M.onFocusCapture),
              onBlurCapture: s(e.onBlurCapture, M.onBlurCapture),
              onPointerDownCapture: s(
                e.onPointerDownCapture,
                D.onPointerDownCapture
              ),
            })
          );
        });
      function E() {
        let e = new CustomEvent(w);
        document.dispatchEvent(e);
      }
      function C(e, t, r, { discrete: n }) {
        let o = r.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
        (t && o.addEventListener(e, t, { once: !0 }), n)
          ? o && a.flushSync(() => o.dispatchEvent(i))
          : o.dispatchEvent(i);
      }
      (b.displayName = "DismissableLayer"),
        (i.forwardRef((e, t) => {
          let r = i.useContext(x),
            n = i.useRef(null),
            o = (0, f.e)(t, n);
          return (
            i.useEffect(() => {
              let e = n.current;
              if (e)
                return (
                  r.branches.add(e),
                  () => {
                    r.branches.delete(e);
                  }
                );
            }, [r.branches]),
            (0, c.jsx)(y.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
      var S = 0;
      function R() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var N = "focusScope.autoFocusOnMount",
        j = "focusScope.autoFocusOnUnmount",
        P = { bubbles: !1, cancelable: !0 },
        T = i.forwardRef((e, t) => {
          let {
              loop: r = !1,
              trapped: n = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: l,
              ...a
            } = e,
            [u, s] = i.useState(null),
            d = g(o),
            p = g(l),
            m = i.useRef(null),
            v = (0, f.e)(t, (e) => s(e)),
            h = i.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          i.useEffect(() => {
            if (n) {
              let e = function (e) {
                  if (h.paused || !u) return;
                  let t = e.target;
                  u.contains(t)
                    ? (m.current = t)
                    : D(m.current, { select: !0 });
                },
                t = function (e) {
                  if (h.paused || !u) return;
                  let t = e.relatedTarget;
                  null === t || u.contains(t) || D(m.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let r = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && D(u);
              });
              return (
                u && r.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    r.disconnect();
                }
              );
            }
          }, [n, u, h.paused]),
            i.useEffect(() => {
              if (u) {
                M.add(h);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(N, P);
                  u.addEventListener(N, d),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let r = document.activeElement;
                        for (let n of e)
                          if (
                            (D(n, { select: t }), document.activeElement !== r)
                          )
                            return;
                      })(
                        I(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && D(u));
                }
                return () => {
                  u.removeEventListener(N, d),
                    setTimeout(() => {
                      let t = new CustomEvent(j, P);
                      u.addEventListener(j, p),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          D(e ?? document.body, { select: !0 }),
                        u.removeEventListener(j, p),
                        M.remove(h);
                    }, 0);
                };
              }
            }, [u, d, p, h]);
          let w = i.useCallback(
            (e) => {
              if ((!r && !n) || h.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [n, i] = (function (e) {
                    let t = I(e);
                    return [A(t, e), A(t.reverse(), e)];
                  })(t);
                n && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === n &&
                      (e.preventDefault(), r && D(i, { select: !0 }))
                    : (e.preventDefault(), r && D(n, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [r, n, h.paused]
          );
          return (0, c.jsx)(y.div, {
            tabIndex: -1,
            ...a,
            ref: v,
            onKeyDown: w,
          });
        });
      function I(e) {
        let t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; r.nextNode(); ) t.push(r.currentNode);
        return t;
      }
      function A(e, t) {
        for (let r of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(r, { upTo: t })
          )
            return r;
      }
      function D(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var r;
          let n = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== n &&
              (r = e) instanceof HTMLInputElement &&
              "select" in r &&
              t &&
              e.select();
        }
      }
      T.displayName = "FocusScope";
      var M =
        ((n = []),
        {
          add(e) {
            let t = n[0];
            e !== t && t?.pause(), (n = L(n, e)).unshift(e);
          },
          remove(e) {
            (n = L(n, e)), n[0]?.resume();
          },
        });
      function L(e, t) {
        let r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r;
      }
      var O = globalThis?.document ? i.useLayoutEffect : () => {},
        k = l[" useId ".trim().toString()] || (() => void 0),
        _ = 0;
      function F(e) {
        let [t, r] = i.useState(k());
        return (
          O(() => {
            e || r((e) => e ?? String(_++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      var $ = r(1371),
        W = r(18573),
        V = i.forwardRef((e, t) => {
          let { children: r, width: n = 10, height: o = 5, ...i } = e;
          return (0, c.jsx)(y.svg, {
            ...i,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? r
              : (0, c.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      V.displayName = "Arrow";
      var B = "Popper",
        [H, K] = d(B),
        [U, z] = H(B),
        Y = (e) => {
          let { __scopePopper: t, children: r } = e,
            [n, o] = i.useState(null);
          return (0, c.jsx)(U, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r,
          });
        };
      Y.displayName = B;
      var q = "PopperAnchor",
        G = i.forwardRef((e, t) => {
          let { __scopePopper: r, virtualRef: n, ...o } = e,
            l = z(q, r),
            a = i.useRef(null),
            u = (0, f.e)(t, a);
          return (
            i.useEffect(() => {
              l.onAnchorChange(n?.current || a.current);
            }),
            n ? null : (0, c.jsx)(y.div, { ...o, ref: u })
          );
        });
      G.displayName = q;
      var Z = "PopperContent",
        [X, J] = H(Z),
        Q = i.forwardRef((e, t) => {
          let {
              __scopePopper: r,
              side: n = "bottom",
              sideOffset: o = 0,
              align: l = "center",
              alignOffset: a = 0,
              arrowPadding: u = 0,
              avoidCollisions: s = !0,
              collisionBoundary: d = [],
              collisionPadding: p = 0,
              sticky: m = "partial",
              hideWhenDetached: v = !1,
              updatePositionStrategy: h = "optimized",
              onPlaced: w,
              ...x
            } = e,
            b = z(Z, r),
            [E, C] = i.useState(null),
            S = (0, f.e)(t, (e) => C(e)),
            [R, N] = i.useState(null),
            j = (function (e) {
              let [t, r] = i.useState(void 0);
              return (
                O(() => {
                  if (e) {
                    r({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let n, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (n = t.inlineSize), (o = t.blockSize);
                      } else (n = e.offsetWidth), (o = e.offsetHeight);
                      r({ width: n, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  r(void 0);
                }, [e]),
                t
              );
            })(R),
            P = j?.width ?? 0,
            T = j?.height ?? 0,
            I =
              "number" == typeof p
                ? p
                : { top: 0, right: 0, bottom: 0, left: 0, ...p },
            A = Array.isArray(d) ? d : [d],
            D = A.length > 0,
            M = { padding: I, boundary: A.filter(en), altBoundary: D },
            {
              refs: L,
              floatingStyles: k,
              placement: _,
              isPositioned: F,
              middlewareData: V,
            } = (0, $.YF)({
              strategy: "fixed",
              placement: n + ("center" !== l ? "-" + l : ""),
              whileElementsMounted: (...e) =>
                (0, W.Me)(...e, { animationFrame: "always" === h }),
              elements: { reference: b.anchor },
              middleware: [
                (0, $.cv)({ mainAxis: o + T, alignmentAxis: a }),
                s &&
                  (0, $.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === m ? (0, $.dr)() : void 0,
                    ...M,
                  }),
                s && (0, $.RR)({ ...M }),
                (0, $.dp)({
                  ...M,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: r,
                    availableHeight: n,
                  }) => {
                    let { width: o, height: i } = t.reference,
                      l = e.floating.style;
                    l.setProperty("--radix-popper-available-width", `${r}px`),
                      l.setProperty(
                        "--radix-popper-available-height",
                        `${n}px`
                      ),
                      l.setProperty("--radix-popper-anchor-width", `${o}px`),
                      l.setProperty("--radix-popper-anchor-height", `${i}px`);
                  },
                }),
                R && (0, $.x7)({ element: R, padding: u }),
                eo({ arrowWidth: P, arrowHeight: T }),
                v && (0, $.Cp)({ strategy: "referenceHidden", ...M }),
              ],
            }),
            [B, H] = ei(_),
            K = g(w);
          O(() => {
            F && K?.();
          }, [F, K]);
          let U = V.arrow?.x,
            Y = V.arrow?.y,
            q = V.arrow?.centerOffset !== 0,
            [G, J] = i.useState();
          return (
            O(() => {
              E && J(window.getComputedStyle(E).zIndex);
            }, [E]),
            (0, c.jsx)("div", {
              ref: L.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...k,
                transform: F ? k.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: G,
                "--radix-popper-transform-origin": [
                  V.transformOrigin?.x,
                  V.transformOrigin?.y,
                ].join(" "),
                ...(V.hide?.referenceHidden && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, c.jsx)(X, {
                scope: r,
                placedSide: B,
                onArrowChange: N,
                arrowX: U,
                arrowY: Y,
                shouldHideArrow: q,
                children: (0, c.jsx)(y.div, {
                  "data-side": B,
                  "data-align": H,
                  ...x,
                  ref: S,
                  style: { ...x.style, animation: F ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      Q.displayName = Z;
      var ee = "PopperArrow",
        et = { top: "bottom", right: "left", bottom: "top", left: "right" },
        er = i.forwardRef(function (e, t) {
          let { __scopePopper: r, ...n } = e,
            o = J(ee, r),
            i = et[o.placedSide];
          return (0,
          c.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, c.jsx)(V, { ...n, ref: t, style: { ...n.style, display: "block" } }) });
        });
      function en(e) {
        return null !== e;
      }
      er.displayName = ee;
      var eo = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          let { placement: r, rects: n, middlewareData: o } = t,
            i = o.arrow?.centerOffset !== 0,
            l = i ? 0 : e.arrowWidth,
            a = i ? 0 : e.arrowHeight,
            [u, s] = ei(r),
            c = { start: "0%", center: "50%", end: "100%" }[s],
            d = (o.arrow?.x ?? 0) + l / 2,
            f = (o.arrow?.y ?? 0) + a / 2,
            p = "",
            m = "";
          return (
            "bottom" === u
              ? ((p = i ? c : `${d}px`), (m = `${-a}px`))
              : "top" === u
              ? ((p = i ? c : `${d}px`), (m = `${n.floating.height + a}px`))
              : "right" === u
              ? ((p = `${-a}px`), (m = i ? c : `${f}px`))
              : "left" === u &&
                ((p = `${n.floating.width + a}px`), (m = i ? c : `${f}px`)),
            { data: { x: p, y: m } }
          );
        },
      });
      function ei(e) {
        let [t, r = "center"] = e.split("-");
        return [t, r];
      }
      var el = i.forwardRef((e, t) => {
        let { container: r, ...n } = e,
          [o, l] = i.useState(!1);
        O(() => l(!0), []);
        let u = r || (o && globalThis?.document?.body);
        return u
          ? a.createPortal((0, c.jsx)(y.div, { ...n, ref: t }), u)
          : null;
      });
      function ea({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [n, o] = (function ({ defaultProp: e, onChange: t }) {
            let r = i.useState(e),
              [n] = r,
              o = i.useRef(n),
              l = g(t);
            return (
              i.useEffect(() => {
                o.current !== n && (l(n), (o.current = n));
              }, [n, o, l]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          l = void 0 !== e,
          a = l ? e : n,
          u = g(r);
        return [
          a,
          i.useCallback(
            (t) => {
              if (l) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && u(r);
              } else o(t);
            },
            [l, e, o, u]
          ),
        ];
      }
      el.displayName = "Portal";
      var eu = r(57898),
        es = r(70369),
        ec = r(23541),
        ed = r(6223),
        ef = [" ", "Enter", "ArrowUp", "ArrowDown"],
        ep = [" ", "Enter"],
        em = "Select",
        [ev, eh, ey] = (function (e) {
          let t = e + "CollectionProvider",
            [r, n] = d(t),
            [o, l] = r(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            a = (e) => {
              let { scope: t, children: r } = e,
                n = i.useRef(null),
                l = i.useRef(new Map()).current;
              return (0, c.jsx)(o, {
                scope: t,
                itemMap: l,
                collectionRef: n,
                children: r,
              });
            };
          a.displayName = t;
          let u = e + "CollectionSlot",
            s = p(u),
            m = i.forwardRef((e, t) => {
              let { scope: r, children: n } = e,
                o = l(u, r),
                i = (0, f.e)(t, o.collectionRef);
              return (0, c.jsx)(s, { ref: i, children: n });
            });
          m.displayName = u;
          let v = e + "CollectionItemSlot",
            h = "data-radix-collection-item",
            y = p(v),
            g = i.forwardRef((e, t) => {
              let { scope: r, children: n, ...o } = e,
                a = i.useRef(null),
                u = (0, f.e)(t, a),
                s = l(v, r);
              return (
                i.useEffect(
                  () => (
                    s.itemMap.set(a, { ref: a, ...o }),
                    () => void s.itemMap.delete(a)
                  )
                ),
                (0, c.jsx)(y, { [h]: "", ref: u, children: n })
              );
            });
          return (
            (g.displayName = v),
            [
              { Provider: a, Slot: m, ItemSlot: g },
              function (t) {
                let r = l(e + "CollectionConsumer", t);
                return i.useCallback(() => {
                  let e = r.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll(`[${h}]`));
                  return Array.from(r.itemMap.values()).sort(
                    (e, r) =>
                      t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                  );
                }, [r.collectionRef, r.itemMap]);
              },
              n,
            ]
          );
        })(em),
        [eg, ew] = d(em, [ey, K]),
        ex = K(),
        [eb, eE] = eg(em),
        [eC, eS] = eg(em),
        eR = (e) => {
          let {
              __scopeSelect: t,
              children: r,
              open: n,
              defaultOpen: o,
              onOpenChange: l,
              value: a,
              defaultValue: u,
              onValueChange: s,
              dir: d,
              name: f,
              autoComplete: p,
              disabled: m,
              required: v,
              form: y,
            } = e,
            g = ex(t),
            [w, x] = i.useState(null),
            [b, E] = i.useState(null),
            [C, S] = i.useState(!1),
            R = (function (e) {
              let t = i.useContext(h);
              return e || t || "ltr";
            })(d),
            [N = !1, j] = ea({ prop: n, defaultProp: o, onChange: l }),
            [P, T] = ea({ prop: a, defaultProp: u, onChange: s }),
            I = i.useRef(null),
            A = !w || y || !!w.closest("form"),
            [D, M] = i.useState(new Set()),
            L = Array.from(D)
              .map((e) => e.props.value)
              .join(";");
          return (0, c.jsx)(Y, {
            ...g,
            children: (0, c.jsxs)(eb, {
              required: v,
              scope: t,
              trigger: w,
              onTriggerChange: x,
              valueNode: b,
              onValueNodeChange: E,
              valueNodeHasChildren: C,
              onValueNodeHasChildrenChange: S,
              contentId: F(),
              value: P,
              onValueChange: T,
              open: N,
              onOpenChange: j,
              dir: R,
              triggerPointerDownPosRef: I,
              disabled: m,
              children: [
                (0, c.jsx)(ev.Provider, {
                  scope: t,
                  children: (0, c.jsx)(eC, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: i.useCallback((e) => {
                      M((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: i.useCallback((e) => {
                      M((t) => {
                        let r = new Set(t);
                        return r.delete(e), r;
                      });
                    }, []),
                    children: r,
                  }),
                }),
                A
                  ? (0, c.jsxs)(
                      tr,
                      {
                        "aria-hidden": !0,
                        required: v,
                        tabIndex: -1,
                        name: f,
                        autoComplete: p,
                        value: P,
                        onChange: (e) => T(e.target.value),
                        disabled: m,
                        form: y,
                        children: [
                          void 0 === P
                            ? (0, c.jsx)("option", { value: "" })
                            : null,
                          Array.from(D),
                        ],
                      },
                      L
                    )
                  : null,
              ],
            }),
          });
        };
      eR.displayName = em;
      var eN = "SelectTrigger",
        ej = i.forwardRef((e, t) => {
          let { __scopeSelect: r, disabled: n = !1, ...o } = e,
            l = ex(r),
            a = eE(eN, r),
            u = a.disabled || n,
            d = (0, f.e)(t, a.onTriggerChange),
            p = eh(r),
            m = i.useRef("touch"),
            [v, h, g] = tn((e) => {
              let t = p().filter((e) => !e.disabled),
                r = t.find((e) => e.value === a.value),
                n = to(t, e, r);
              void 0 !== n && a.onValueChange(n.value);
            }),
            w = (e) => {
              u || (a.onOpenChange(!0), g()),
                e &&
                  (a.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, c.jsx)(G, {
            asChild: !0,
            ...l,
            children: (0, c.jsx)(y.button, {
              type: "button",
              role: "combobox",
              "aria-controls": a.contentId,
              "aria-expanded": a.open,
              "aria-required": a.required,
              "aria-autocomplete": "none",
              dir: a.dir,
              "data-state": a.open ? "open" : "closed",
              disabled: u,
              "data-disabled": u ? "" : void 0,
              "data-placeholder": tt(a.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: s(o.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== m.current && w(e);
              }),
              onPointerDown: s(o.onPointerDown, (e) => {
                m.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (w(e), e.preventDefault());
              }),
              onKeyDown: s(o.onKeyDown, (e) => {
                let t = "" !== v.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  h(e.key),
                  (!t || " " !== e.key) &&
                    ef.includes(e.key) &&
                    (w(), e.preventDefault());
              }),
            }),
          });
        });
      ej.displayName = eN;
      var eP = "SelectValue",
        eT = i.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              className: n,
              style: o,
              children: i,
              placeholder: l = "",
              ...a
            } = e,
            u = eE(eP, r),
            { onValueNodeHasChildrenChange: s } = u,
            d = void 0 !== i,
            p = (0, f.e)(t, u.onValueNodeChange);
          return (
            O(() => {
              s(d);
            }, [s, d]),
            (0, c.jsx)(y.span, {
              ...a,
              ref: p,
              style: { pointerEvents: "none" },
              children: tt(u.value)
                ? (0, c.jsx)(c.Fragment, { children: l })
                : i,
            })
          );
        });
      eT.displayName = eP;
      var eI = i.forwardRef((e, t) => {
        let { __scopeSelect: r, children: n, ...o } = e;
        return (0, c.jsx)(y.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼",
        });
      });
      eI.displayName = "SelectIcon";
      var eA = (e) => (0, c.jsx)(el, { asChild: !0, ...e });
      eA.displayName = "SelectPortal";
      var eD = "SelectContent",
        eM = i.forwardRef((e, t) => {
          let r = eE(eD, e.__scopeSelect),
            [n, o] = i.useState();
          return (O(() => {
            o(new DocumentFragment());
          }, []),
          r.open)
            ? (0, c.jsx)(e_, { ...e, ref: t })
            : n
            ? a.createPortal(
                (0, c.jsx)(eL, {
                  scope: e.__scopeSelect,
                  children: (0, c.jsx)(ev.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, c.jsx)("div", { children: e.children }),
                  }),
                }),
                n
              )
            : null;
        });
      eM.displayName = eD;
      var [eL, eO] = eg(eD),
        ek = p("SelectContent.RemoveScroll"),
        e_ = i.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              position: n = "item-aligned",
              onCloseAutoFocus: o,
              onEscapeKeyDown: l,
              onPointerDownOutside: a,
              side: u,
              sideOffset: d,
              align: p,
              alignOffset: m,
              arrowPadding: v,
              collisionBoundary: h,
              collisionPadding: y,
              sticky: g,
              hideWhenDetached: w,
              avoidCollisions: x,
              ...E
            } = e,
            C = eE(eD, r),
            [N, j] = i.useState(null),
            [P, I] = i.useState(null),
            A = (0, f.e)(t, (e) => j(e)),
            [D, M] = i.useState(null),
            [L, O] = i.useState(null),
            k = eh(r),
            [_, F] = i.useState(!1),
            $ = i.useRef(!1);
          i.useEffect(() => {
            if (N) return (0, ec.Ry)(N);
          }, [N]),
            i.useEffect(() => {
              let e = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement("afterbegin", e[0] ?? R()),
                document.body.insertAdjacentElement("beforeend", e[1] ?? R()),
                S++,
                () => {
                  1 === S &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    S--;
                }
              );
            }, []);
          let W = i.useCallback(
              (e) => {
                let [t, ...r] = k().map((e) => e.ref.current),
                  [n] = r.slice(-1),
                  o = document.activeElement;
                for (let r of e)
                  if (
                    r === o ||
                    (r?.scrollIntoView({ block: "nearest" }),
                    r === t && P && (P.scrollTop = 0),
                    r === n && P && (P.scrollTop = P.scrollHeight),
                    r?.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [k, P]
            ),
            V = i.useCallback(() => W([D, N]), [W, D, N]);
          i.useEffect(() => {
            _ && V();
          }, [_, V]);
          let { onOpenChange: B, triggerPointerDownPosRef: H } = C;
          i.useEffect(() => {
            if (N) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (H.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (H.current?.y ?? 0)),
                  };
                },
                r = (r) => {
                  e.x <= 10 && e.y <= 10
                    ? r.preventDefault()
                    : N.contains(r.target) || B(!1),
                    document.removeEventListener("pointermove", t),
                    (H.current = null);
                };
              return (
                null !== H.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", r, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", r, {
                      capture: !0,
                    });
                }
              );
            }
          }, [N, B, H]),
            i.useEffect(() => {
              let e = () => B(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [B]);
          let [K, U] = tn((e) => {
              let t = k().filter((e) => !e.disabled),
                r = t.find((e) => e.ref.current === document.activeElement),
                n = to(t, e, r);
              n && setTimeout(() => n.ref.current.focus());
            }),
            z = i.useCallback(
              (e, t, r) => {
                let n = !$.current && !r;
                ((void 0 !== C.value && C.value === t) || n) &&
                  (M(e), n && ($.current = !0));
              },
              [C.value]
            ),
            Y = i.useCallback(() => N?.focus(), [N]),
            q = i.useCallback(
              (e, t, r) => {
                let n = !$.current && !r;
                ((void 0 !== C.value && C.value === t) || n) && O(e);
              },
              [C.value]
            ),
            G = "popper" === n ? e$ : eF,
            Z =
              G === e$
                ? {
                    side: u,
                    sideOffset: d,
                    align: p,
                    alignOffset: m,
                    arrowPadding: v,
                    collisionBoundary: h,
                    collisionPadding: y,
                    sticky: g,
                    hideWhenDetached: w,
                    avoidCollisions: x,
                  }
                : {};
          return (0, c.jsx)(eL, {
            scope: r,
            content: N,
            viewport: P,
            onViewportChange: I,
            itemRefCallback: z,
            selectedItem: D,
            onItemLeave: Y,
            itemTextRefCallback: q,
            focusSelectedItem: V,
            selectedItemText: L,
            position: n,
            isPositioned: _,
            searchRef: K,
            children: (0, c.jsx)(ed.Z, {
              as: ek,
              allowPinchZoom: !0,
              children: (0, c.jsx)(T, {
                asChild: !0,
                trapped: C.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: s(o, (e) => {
                  C.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
                }),
                children: (0, c.jsx)(b, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: l,
                  onPointerDownOutside: a,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => C.onOpenChange(!1),
                  children: (0, c.jsx)(G, {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...E,
                    ...Z,
                    onPlaced: () => F(!0),
                    ref: A,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...E.style,
                    },
                    onKeyDown: s(E.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || U(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = k()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let r = e.target,
                            n = t.indexOf(r);
                          t = t.slice(n + 1);
                        }
                        setTimeout(() => W(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      e_.displayName = "SelectContentImpl";
      var eF = i.forwardRef((e, t) => {
        let { __scopeSelect: r, onPlaced: n, ...o } = e,
          l = eE(eD, r),
          a = eO(eD, r),
          [s, d] = i.useState(null),
          [p, m] = i.useState(null),
          v = (0, f.e)(t, (e) => m(e)),
          h = eh(r),
          g = i.useRef(!1),
          w = i.useRef(!0),
          {
            viewport: x,
            selectedItem: b,
            selectedItemText: E,
            focusSelectedItem: C,
          } = a,
          S = i.useCallback(() => {
            if (l.trigger && l.valueNode && s && p && x && b && E) {
              let e = l.trigger.getBoundingClientRect(),
                t = p.getBoundingClientRect(),
                r = l.valueNode.getBoundingClientRect(),
                o = E.getBoundingClientRect();
              if ("rtl" !== l.dir) {
                let n = o.left - t.left,
                  i = r.left - n,
                  l = e.left - i,
                  a = e.width + l,
                  c = Math.max(a, t.width),
                  d = window.innerWidth - 10,
                  f = (0, u.u)(i, [10, Math.max(10, d - c)]);
                (s.style.minWidth = a + "px"), (s.style.left = f + "px");
              } else {
                let n = t.right - o.right,
                  i = window.innerWidth - r.right - n,
                  l = window.innerWidth - e.right - i,
                  a = e.width + l,
                  c = Math.max(a, t.width),
                  d = window.innerWidth - 10,
                  f = (0, u.u)(i, [10, Math.max(10, d - c)]);
                (s.style.minWidth = a + "px"), (s.style.right = f + "px");
              }
              let i = h(),
                a = window.innerHeight - 20,
                c = x.scrollHeight,
                d = window.getComputedStyle(p),
                f = parseInt(d.borderTopWidth, 10),
                m = parseInt(d.paddingTop, 10),
                v = parseInt(d.borderBottomWidth, 10),
                y = f + m + c + parseInt(d.paddingBottom, 10) + v,
                w = Math.min(5 * b.offsetHeight, y),
                C = window.getComputedStyle(x),
                S = parseInt(C.paddingTop, 10),
                R = parseInt(C.paddingBottom, 10),
                N = e.top + e.height / 2 - 10,
                j = b.offsetHeight / 2,
                P = f + m + (b.offsetTop + j);
              if (P <= N) {
                let e = i.length > 0 && b === i[i.length - 1].ref.current;
                s.style.bottom = "0px";
                let t = p.clientHeight - x.offsetTop - x.offsetHeight;
                s.style.height =
                  P + Math.max(a - N, j + (e ? R : 0) + t + v) + "px";
              } else {
                let e = i.length > 0 && b === i[0].ref.current;
                s.style.top = "0px";
                let t = Math.max(N, f + x.offsetTop + (e ? S : 0) + j);
                (s.style.height = t + (y - P) + "px"),
                  (x.scrollTop = P - N + x.offsetTop);
              }
              (s.style.margin = "10px 0"),
                (s.style.minHeight = w + "px"),
                (s.style.maxHeight = a + "px"),
                n?.(),
                requestAnimationFrame(() => (g.current = !0));
            }
          }, [h, l.trigger, l.valueNode, s, p, x, b, E, l.dir, n]);
        O(() => S(), [S]);
        let [R, N] = i.useState();
        O(() => {
          p && N(window.getComputedStyle(p).zIndex);
        }, [p]);
        let j = i.useCallback(
          (e) => {
            e && !0 === w.current && (S(), C?.(), (w.current = !1));
          },
          [S, C]
        );
        return (0, c.jsx)(eW, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: j,
          children: (0, c.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: R,
            },
            children: (0, c.jsx)(y.div, {
              ...o,
              ref: v,
              style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
            }),
          }),
        });
      });
      eF.displayName = "SelectItemAlignedPosition";
      var e$ = i.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            align: n = "start",
            collisionPadding: o = 10,
            ...i
          } = e,
          l = ex(r);
        return (0, c.jsx)(Q, {
          ...l,
          ...i,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      e$.displayName = "SelectPopperPosition";
      var [eW, eV] = eg(eD, {}),
        eB = "SelectViewport",
        eH = i.forwardRef((e, t) => {
          let { __scopeSelect: r, nonce: n, ...o } = e,
            l = eO(eB, r),
            a = eV(eB, r),
            u = (0, f.e)(t, l.onViewportChange),
            d = i.useRef(0);
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: n,
              }),
              (0, c.jsx)(ev.Slot, {
                scope: r,
                children: (0, c.jsx)(y.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...o,
                  ref: u,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style,
                  },
                  onScroll: s(o.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: r, shouldExpandOnScrollRef: n } = a;
                    if (n?.current && r) {
                      let e = Math.abs(d.current - t.scrollTop);
                      if (e > 0) {
                        let n = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(r.style.minHeight),
                            parseFloat(r.style.height)
                          );
                        if (o < n) {
                          let i = o + e,
                            l = Math.min(n, i),
                            a = i - l;
                          (r.style.height = l + "px"),
                            "0px" === r.style.bottom &&
                              ((t.scrollTop = a > 0 ? a : 0),
                              (r.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    d.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      eH.displayName = eB;
      var eK = "SelectGroup",
        [eU, ez] = eg(eK),
        eY = i.forwardRef((e, t) => {
          let { __scopeSelect: r, ...n } = e,
            o = F();
          return (0, c.jsx)(eU, {
            scope: r,
            id: o,
            children: (0, c.jsx)(y.div, {
              role: "group",
              "aria-labelledby": o,
              ...n,
              ref: t,
            }),
          });
        });
      eY.displayName = eK;
      var eq = "SelectLabel",
        eG = i.forwardRef((e, t) => {
          let { __scopeSelect: r, ...n } = e,
            o = ez(eq, r);
          return (0, c.jsx)(y.div, { id: o.id, ...n, ref: t });
        });
      eG.displayName = eq;
      var eZ = "SelectItem",
        [eX, eJ] = eg(eZ),
        eQ = i.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              value: n,
              disabled: o = !1,
              textValue: l,
              ...a
            } = e,
            u = eE(eZ, r),
            d = eO(eZ, r),
            p = u.value === n,
            [m, v] = i.useState(l ?? ""),
            [h, g] = i.useState(!1),
            w = (0, f.e)(t, (e) => d.itemRefCallback?.(e, n, o)),
            x = F(),
            b = i.useRef("touch"),
            E = () => {
              o || (u.onValueChange(n), u.onOpenChange(!1));
            };
          if ("" === n)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, c.jsx)(eX, {
            scope: r,
            value: n,
            disabled: o,
            textId: x,
            isSelected: p,
            onItemTextChange: i.useCallback((e) => {
              v((t) => t || (e?.textContent ?? "").trim());
            }, []),
            children: (0, c.jsx)(ev.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: m,
              children: (0, c.jsx)(y.div, {
                role: "option",
                "aria-labelledby": x,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": p && h,
                "data-state": p ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: w,
                onFocus: s(a.onFocus, () => g(!0)),
                onBlur: s(a.onBlur, () => g(!1)),
                onClick: s(a.onClick, () => {
                  "mouse" !== b.current && E();
                }),
                onPointerUp: s(a.onPointerUp, () => {
                  "mouse" === b.current && E();
                }),
                onPointerDown: s(a.onPointerDown, (e) => {
                  b.current = e.pointerType;
                }),
                onPointerMove: s(a.onPointerMove, (e) => {
                  (b.current = e.pointerType),
                    o
                      ? d.onItemLeave?.()
                      : "mouse" === b.current &&
                        e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: s(a.onPointerLeave, (e) => {
                  e.currentTarget === document.activeElement &&
                    d.onItemLeave?.();
                }),
                onKeyDown: s(a.onKeyDown, (e) => {
                  (d.searchRef?.current !== "" && " " === e.key) ||
                    (ep.includes(e.key) && E(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      eQ.displayName = eZ;
      var e0 = "SelectItemText",
        e1 = i.forwardRef((e, t) => {
          let { __scopeSelect: r, className: n, style: o, ...l } = e,
            u = eE(e0, r),
            s = eO(e0, r),
            d = eJ(e0, r),
            p = eS(e0, r),
            [m, v] = i.useState(null),
            h = (0, f.e)(
              t,
              (e) => v(e),
              d.onItemTextChange,
              (e) => s.itemTextRefCallback?.(e, d.value, d.disabled)
            ),
            g = m?.textContent,
            w = i.useMemo(
              () =>
                (0, c.jsx)(
                  "option",
                  { value: d.value, disabled: d.disabled, children: g },
                  d.value
                ),
              [d.disabled, d.value, g]
            ),
            { onNativeOptionAdd: x, onNativeOptionRemove: b } = p;
          return (
            O(() => (x(w), () => b(w)), [x, b, w]),
            (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)(y.span, { id: d.textId, ...l, ref: h }),
                d.isSelected && u.valueNode && !u.valueNodeHasChildren
                  ? a.createPortal(l.children, u.valueNode)
                  : null,
              ],
            })
          );
        });
      e1.displayName = e0;
      var e2 = "SelectItemIndicator",
        e5 = i.forwardRef((e, t) => {
          let { __scopeSelect: r, ...n } = e;
          return eJ(e2, r).isSelected
            ? (0, c.jsx)(y.span, { "aria-hidden": !0, ...n, ref: t })
            : null;
        });
      e5.displayName = e2;
      var e3 = "SelectScrollUpButton",
        e7 = i.forwardRef((e, t) => {
          let r = eO(e3, e.__scopeSelect),
            n = eV(e3, e.__scopeSelect),
            [o, l] = i.useState(!1),
            a = (0, f.e)(t, n.onScrollButtonChange);
          return (
            O(() => {
              if (r.viewport && r.isPositioned) {
                let e = function () {
                    l(t.scrollTop > 0);
                  },
                  t = r.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [r.viewport, r.isPositioned]),
            o
              ? (0, c.jsx)(e4, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = r;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      e7.displayName = e3;
      var e9 = "SelectScrollDownButton",
        e8 = i.forwardRef((e, t) => {
          let r = eO(e9, e.__scopeSelect),
            n = eV(e9, e.__scopeSelect),
            [o, l] = i.useState(!1),
            a = (0, f.e)(t, n.onScrollButtonChange);
          return (
            O(() => {
              if (r.viewport && r.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    l(Math.ceil(t.scrollTop) < e);
                  },
                  t = r.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [r.viewport, r.isPositioned]),
            o
              ? (0, c.jsx)(e4, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = r;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      e8.displayName = e9;
      var e4 = i.forwardRef((e, t) => {
          let { __scopeSelect: r, onAutoScroll: n, ...o } = e,
            l = eO("SelectScrollButton", r),
            a = i.useRef(null),
            u = eh(r),
            d = i.useCallback(() => {
              null !== a.current &&
                (window.clearInterval(a.current), (a.current = null));
            }, []);
          return (
            i.useEffect(() => () => d(), [d]),
            O(() => {
              let e = u().find((e) => e.ref.current === document.activeElement);
              e?.ref.current?.scrollIntoView({ block: "nearest" });
            }, [u]),
            (0, c.jsx)(y.div, {
              "aria-hidden": !0,
              ...o,
              ref: t,
              style: { flexShrink: 0, ...o.style },
              onPointerDown: s(o.onPointerDown, () => {
                null === a.current && (a.current = window.setInterval(n, 50));
              }),
              onPointerMove: s(o.onPointerMove, () => {
                l.onItemLeave?.(),
                  null === a.current && (a.current = window.setInterval(n, 50));
              }),
              onPointerLeave: s(o.onPointerLeave, () => {
                d();
              }),
            })
          );
        }),
        e6 = i.forwardRef((e, t) => {
          let { __scopeSelect: r, ...n } = e;
          return (0, c.jsx)(y.div, { "aria-hidden": !0, ...n, ref: t });
        });
      e6.displayName = "SelectSeparator";
      var te = "SelectArrow";
      function tt(e) {
        return "" === e || void 0 === e;
      }
      i.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e,
          o = ex(r),
          i = eE(te, r),
          l = eO(te, r);
        return i.open && "popper" === l.position
          ? (0, c.jsx)(er, { ...o, ...n, ref: t })
          : null;
      }).displayName = te;
      var tr = i.forwardRef((e, t) => {
        let { value: r, ...n } = e,
          o = i.useRef(null),
          l = (0, f.e)(t, o),
          a = (0, eu.D)(r);
        return (
          i.useEffect(() => {
            let e = o.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (a !== r && t) {
              let n = new Event("change", { bubbles: !0 });
              t.call(e, r), e.dispatchEvent(n);
            }
          }, [a, r]),
          (0, c.jsx)(es.T, {
            asChild: !0,
            children: (0, c.jsx)("select", { ...n, ref: l, defaultValue: r }),
          })
        );
      });
      function tn(e) {
        let t = g(e),
          r = i.useRef(""),
          n = i.useRef(0),
          o = i.useCallback(
            (e) => {
              let o = r.current + e;
              t(o),
                (function e(t) {
                  (r.current = t),
                    window.clearTimeout(n.current),
                    "" !== t &&
                      (n.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          l = i.useCallback(() => {
            (r.current = ""), window.clearTimeout(n.current);
          }, []);
        return (
          i.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, l]
        );
      }
      function to(e, t, r) {
        var n;
        let o =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          i =
            ((n = Math.max(r ? e.indexOf(r) : -1, 0)),
            e.map((t, r) => e[(n + r) % e.length]));
        1 === o.length && (i = i.filter((e) => e !== r));
        let l = i.find((e) =>
          e.textValue.toLowerCase().startsWith(o.toLowerCase())
        );
        return l !== r ? l : void 0;
      }
      tr.displayName = "BubbleSelect";
      var ti = eR,
        tl = ej,
        ta = eT,
        tu = eI,
        ts = eA,
        tc = eM,
        td = eH,
        tf = eY,
        tp = eG,
        tm = eQ,
        tv = e1,
        th = e5,
        ty = e7,
        tg = e8,
        tw = e6;
    },
    24805: function (e, t, r) {
      r.d(t, {
        VY: function () {
          return en;
        },
        aV: function () {
          return et;
        },
        fC: function () {
          return ee;
        },
        xz: function () {
          return er;
        },
      });
      var n = r(67294),
        o = r.t(n, 2);
      function i(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
        };
      }
      var l = r(85893);
      function a(e, t = []) {
        let r = [],
          o = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let o = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let i = n.createContext(o),
                a = r.length;
              r = [...r, o];
              let u = (t) => {
                let { scope: r, children: o, ...u } = t,
                  s = r?.[e]?.[a] || i,
                  c = n.useMemo(() => u, Object.values(u));
                return (0, l.jsx)(s.Provider, { value: c, children: o });
              };
              return (
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (r, l) {
                    let u = l?.[e]?.[a] || i,
                      s = n.useContext(u);
                    if (s) return s;
                    if (void 0 !== o) return o;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return n.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(o, ...t),
          ]
        );
      }
      var u = r(28771);
      function s(e) {
        let t = (function (e) {
            let t = n.forwardRef((e, t) => {
              let { children: r, ...o } = e;
              if (n.isValidElement(r)) {
                let e, i;
                let l =
                    (e = Object.getOwnPropertyDescriptor(
                      r.props,
                      "ref"
                    )?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning
                      ? r.ref
                      : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning
                      ? r.props.ref
                      : r.props.ref || r.ref,
                  a = (function (e, t) {
                    let r = { ...t };
                    for (let n in t) {
                      let o = e[n],
                        i = t[n];
                      /^on[A-Z]/.test(n)
                        ? o && i
                          ? (r[n] = (...e) => {
                              i(...e), o(...e);
                            })
                          : o && (r[n] = o)
                        : "style" === n
                        ? (r[n] = { ...o, ...i })
                        : "className" === n &&
                          (r[n] = [o, i].filter(Boolean).join(" "));
                    }
                    return { ...e, ...r };
                  })(o, r.props);
                return (
                  r.type !== n.Fragment && (a.ref = t ? (0, u.F)(t, l) : l),
                  n.cloneElement(r, a)
                );
              }
              return n.Children.count(r) > 1 ? n.Children.only(null) : null;
            });
            return (t.displayName = `${e}.SlotClone`), t;
          })(e),
          r = n.forwardRef((e, r) => {
            let { children: o, ...i } = e,
              a = n.Children.toArray(o),
              u = a.find(d);
            if (u) {
              let e = u.props.children,
                o = a.map((t) =>
                  t !== u
                    ? t
                    : n.Children.count(e) > 1
                    ? n.Children.only(null)
                    : n.isValidElement(e)
                    ? e.props.children
                    : null
                );
              return (0, l.jsx)(t, {
                ...i,
                ref: r,
                children: n.isValidElement(e)
                  ? n.cloneElement(e, void 0, o)
                  : null,
              });
            }
            return (0, l.jsx)(t, { ...i, ref: r, children: o });
          });
        return (r.displayName = `${e}.Slot`), r;
      }
      var c = Symbol("radix.slottable");
      function d(e) {
        return (
          n.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === c
        );
      }
      var f = globalThis?.document ? n.useLayoutEffect : () => {},
        p = o[" useId ".trim().toString()] || (() => void 0),
        m = 0;
      function v(e) {
        let [t, r] = n.useState(p());
        return (
          f(() => {
            e || r((e) => e ?? String(m++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      r(73935);
      var h = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let r = s(`Primitive.${t}`),
          o = n.forwardRef((e, n) => {
            let { asChild: o, ...i } = e,
              a = o ? r : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(a, { ...i, ref: n })
            );
          });
        return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
      }, {});
      function y(e) {
        let t = n.useRef(e);
        return (
          n.useEffect(() => {
            t.current = e;
          }),
          n.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      function g({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [o, i] = (function ({ defaultProp: e, onChange: t }) {
            let r = n.useState(e),
              [o] = r,
              i = n.useRef(o),
              l = y(t);
            return (
              n.useEffect(() => {
                i.current !== o && (l(o), (i.current = o));
              }, [o, i, l]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          l = void 0 !== e,
          a = l ? e : o,
          u = y(r);
        return [
          a,
          n.useCallback(
            (t) => {
              if (l) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && u(r);
              } else i(t);
            },
            [l, e, i, u]
          ),
        ];
      }
      var w = n.createContext(void 0);
      function x(e) {
        let t = n.useContext(w);
        return e || t || "ltr";
      }
      var b = "rovingFocusGroup.onEntryFocus",
        E = { bubbles: !1, cancelable: !0 },
        C = "RovingFocusGroup",
        [S, R, N] = (function (e) {
          let t = e + "CollectionProvider",
            [r, o] = a(t),
            [i, c] = r(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            d = (e) => {
              let { scope: t, children: r } = e,
                o = n.useRef(null),
                a = n.useRef(new Map()).current;
              return (0, l.jsx)(i, {
                scope: t,
                itemMap: a,
                collectionRef: o,
                children: r,
              });
            };
          d.displayName = t;
          let f = e + "CollectionSlot",
            p = s(f),
            m = n.forwardRef((e, t) => {
              let { scope: r, children: n } = e,
                o = c(f, r),
                i = (0, u.e)(t, o.collectionRef);
              return (0, l.jsx)(p, { ref: i, children: n });
            });
          m.displayName = f;
          let v = e + "CollectionItemSlot",
            h = "data-radix-collection-item",
            y = s(v),
            g = n.forwardRef((e, t) => {
              let { scope: r, children: o, ...i } = e,
                a = n.useRef(null),
                s = (0, u.e)(t, a),
                d = c(v, r);
              return (
                n.useEffect(
                  () => (
                    d.itemMap.set(a, { ref: a, ...i }),
                    () => void d.itemMap.delete(a)
                  )
                ),
                (0, l.jsx)(y, { [h]: "", ref: s, children: o })
              );
            });
          return (
            (g.displayName = v),
            [
              { Provider: d, Slot: m, ItemSlot: g },
              function (t) {
                let r = c(e + "CollectionConsumer", t);
                return n.useCallback(() => {
                  let e = r.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll(`[${h}]`));
                  return Array.from(r.itemMap.values()).sort(
                    (e, r) =>
                      t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                  );
                }, [r.collectionRef, r.itemMap]);
              },
              o,
            ]
          );
        })(C),
        [j, P] = a(C, [N]),
        [T, I] = j(C),
        A = n.forwardRef((e, t) =>
          (0, l.jsx)(S.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, l.jsx)(S.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, l.jsx)(D, { ...e, ref: t }),
            }),
          })
        );
      A.displayName = C;
      var D = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: o,
              loop: a = !1,
              dir: s,
              currentTabStopId: c,
              defaultCurrentTabStopId: d,
              onCurrentTabStopIdChange: f,
              onEntryFocus: p,
              preventScrollOnEntryFocus: m = !1,
              ...v
            } = e,
            w = n.useRef(null),
            C = (0, u.e)(t, w),
            S = x(s),
            [N = null, j] = g({ prop: c, defaultProp: d, onChange: f }),
            [P, I] = n.useState(!1),
            A = y(p),
            D = R(r),
            M = n.useRef(!1),
            [L, O] = n.useState(0);
          return (
            n.useEffect(() => {
              let e = w.current;
              if (e)
                return (
                  e.addEventListener(b, A), () => e.removeEventListener(b, A)
                );
            }, [A]),
            (0, l.jsx)(T, {
              scope: r,
              orientation: o,
              dir: S,
              loop: a,
              currentTabStopId: N,
              onItemFocus: n.useCallback((e) => j(e), [j]),
              onItemShiftTab: n.useCallback(() => I(!0), []),
              onFocusableItemAdd: n.useCallback(() => O((e) => e + 1), []),
              onFocusableItemRemove: n.useCallback(() => O((e) => e - 1), []),
              children: (0, l.jsx)(h.div, {
                tabIndex: P || 0 === L ? -1 : 0,
                "data-orientation": o,
                ...v,
                ref: C,
                style: { outline: "none", ...e.style },
                onMouseDown: i(e.onMouseDown, () => {
                  M.current = !0;
                }),
                onFocus: i(e.onFocus, (e) => {
                  let t = !M.current;
                  if (e.target === e.currentTarget && t && !P) {
                    let t = new CustomEvent(b, E);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = D().filter((e) => e.focusable);
                      k(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === N),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        m
                      );
                    }
                  }
                  M.current = !1;
                }),
                onBlur: i(e.onBlur, () => I(!1)),
              }),
            })
          );
        }),
        M = "RovingFocusGroupItem",
        L = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: o = !0,
              active: a = !1,
              tabStopId: u,
              ...s
            } = e,
            c = v(),
            d = u || c,
            f = I(M, r),
            p = f.currentTabStopId === d,
            m = R(r),
            { onFocusableItemAdd: y, onFocusableItemRemove: g } = f;
          return (
            n.useEffect(() => {
              if (o) return y(), () => g();
            }, [o, y, g]),
            (0, l.jsx)(S.ItemSlot, {
              scope: r,
              id: d,
              focusable: o,
              active: a,
              children: (0, l.jsx)(h.span, {
                tabIndex: p ? 0 : -1,
                "data-orientation": f.orientation,
                ...s,
                ref: t,
                onMouseDown: i(e.onMouseDown, (e) => {
                  o ? f.onItemFocus(d) : e.preventDefault();
                }),
                onFocus: i(e.onFocus, () => f.onItemFocus(d)),
                onKeyDown: i(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) {
                    f.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, r) {
                    var n;
                    let o =
                      ((n = e.key),
                      "rtl" !== r
                        ? n
                        : "ArrowLeft" === n
                        ? "ArrowRight"
                        : "ArrowRight" === n
                        ? "ArrowLeft"
                        : n);
                    if (
                      !(
                        "vertical" === t &&
                        ["ArrowLeft", "ArrowRight"].includes(o)
                      ) &&
                      !(
                        "horizontal" === t &&
                        ["ArrowUp", "ArrowDown"].includes(o)
                      )
                    )
                      return O[o];
                  })(e, f.orientation, f.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let o = m()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === t) o.reverse();
                    else if ("prev" === t || "next" === t) {
                      var r, n;
                      "prev" === t && o.reverse();
                      let i = o.indexOf(e.currentTarget);
                      o = f.loop
                        ? ((r = o),
                          (n = i + 1),
                          r.map((e, t) => r[(n + t) % r.length]))
                        : o.slice(i + 1);
                    }
                    setTimeout(() => k(o));
                  }
                }),
              }),
            })
          );
        });
      L.displayName = M;
      var O = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function k(e, t = !1) {
        let r = document.activeElement;
        for (let n of e)
          if (
            n === r ||
            (n.focus({ preventScroll: t }), document.activeElement !== r)
          )
            return;
      }
      var _ = (e) => {
        let t, r;
        let { present: o, children: i } = e,
          l = (function (e) {
            var t, r;
            let [o, i] = n.useState(),
              l = n.useRef({}),
              a = n.useRef(e),
              u = n.useRef("none"),
              [s, c] =
                ((t = e ? "mounted" : "unmounted"),
                (r = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                n.useReducer((e, t) => r[e][t] ?? e, t));
            return (
              n.useEffect(() => {
                let e = F(l.current);
                u.current = "mounted" === s ? e : "none";
              }, [s]),
              f(() => {
                let t = l.current,
                  r = a.current;
                if (r !== e) {
                  let n = u.current,
                    o = F(t);
                  e
                    ? c("MOUNT")
                    : "none" === o || t?.display === "none"
                    ? c("UNMOUNT")
                    : r && n !== o
                    ? c("ANIMATION_OUT")
                    : c("UNMOUNT"),
                    (a.current = e);
                }
              }, [e, c]),
              f(() => {
                if (o) {
                  let e;
                  let t = o.ownerDocument.defaultView ?? window,
                    r = (r) => {
                      let n = F(l.current).includes(r.animationName);
                      if (
                        r.target === o &&
                        n &&
                        (c("ANIMATION_END"), !a.current)
                      ) {
                        let r = o.style.animationFillMode;
                        (o.style.animationFillMode = "forwards"),
                          (e = t.setTimeout(() => {
                            "forwards" === o.style.animationFillMode &&
                              (o.style.animationFillMode = r);
                          }));
                      }
                    },
                    n = (e) => {
                      e.target === o && (u.current = F(l.current));
                    };
                  return (
                    o.addEventListener("animationstart", n),
                    o.addEventListener("animationcancel", r),
                    o.addEventListener("animationend", r),
                    () => {
                      t.clearTimeout(e),
                        o.removeEventListener("animationstart", n),
                        o.removeEventListener("animationcancel", r),
                        o.removeEventListener("animationend", r);
                    }
                  );
                }
                c("ANIMATION_END");
              }, [o, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: n.useCallback((e) => {
                  e && (l.current = getComputedStyle(e)), i(e);
                }, []),
              }
            );
          })(o),
          a =
            "function" == typeof i
              ? i({ present: l.isPresent })
              : n.Children.only(i),
          s = (0, u.e)(
            l.ref,
            (t = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) &&
              "isReactWarning" in t &&
              t.isReactWarning
              ? a.ref
              : (t = Object.getOwnPropertyDescriptor(a, "ref")?.get) &&
                "isReactWarning" in t &&
                t.isReactWarning
              ? a.props.ref
              : a.props.ref || a.ref
          );
        return "function" == typeof i || l.isPresent
          ? n.cloneElement(a, { ref: s })
          : null;
      };
      function F(e) {
        return e?.animationName || "none";
      }
      _.displayName = "Presence";
      var $ = "Tabs",
        [W, V] = a($, [P]),
        B = P(),
        [H, K] = W($),
        U = n.forwardRef((e, t) => {
          let {
              __scopeTabs: r,
              value: n,
              onValueChange: o,
              defaultValue: i,
              orientation: a = "horizontal",
              dir: u,
              activationMode: s = "automatic",
              ...c
            } = e,
            d = x(u),
            [f, p] = g({ prop: n, onChange: o, defaultProp: i });
          return (0, l.jsx)(H, {
            scope: r,
            baseId: v(),
            value: f,
            onValueChange: p,
            orientation: a,
            dir: d,
            activationMode: s,
            children: (0, l.jsx)(h.div, {
              dir: d,
              "data-orientation": a,
              ...c,
              ref: t,
            }),
          });
        });
      U.displayName = $;
      var z = "TabsList",
        Y = n.forwardRef((e, t) => {
          let { __scopeTabs: r, loop: n = !0, ...o } = e,
            i = K(z, r),
            a = B(r);
          return (0, l.jsx)(A, {
            asChild: !0,
            ...a,
            orientation: i.orientation,
            dir: i.dir,
            loop: n,
            children: (0, l.jsx)(h.div, {
              role: "tablist",
              "aria-orientation": i.orientation,
              ...o,
              ref: t,
            }),
          });
        });
      Y.displayName = z;
      var q = "TabsTrigger",
        G = n.forwardRef((e, t) => {
          let { __scopeTabs: r, value: n, disabled: o = !1, ...a } = e,
            u = K(q, r),
            s = B(r),
            c = J(u.baseId, n),
            d = Q(u.baseId, n),
            f = n === u.value;
          return (0, l.jsx)(L, {
            asChild: !0,
            ...s,
            focusable: !o,
            active: f,
            children: (0, l.jsx)(h.button, {
              type: "button",
              role: "tab",
              "aria-selected": f,
              "aria-controls": d,
              "data-state": f ? "active" : "inactive",
              "data-disabled": o ? "" : void 0,
              disabled: o,
              id: c,
              ...a,
              ref: t,
              onMouseDown: i(e.onMouseDown, (e) => {
                o || 0 !== e.button || !1 !== e.ctrlKey
                  ? e.preventDefault()
                  : u.onValueChange(n);
              }),
              onKeyDown: i(e.onKeyDown, (e) => {
                [" ", "Enter"].includes(e.key) && u.onValueChange(n);
              }),
              onFocus: i(e.onFocus, () => {
                let e = "manual" !== u.activationMode;
                f || o || !e || u.onValueChange(n);
              }),
            }),
          });
        });
      G.displayName = q;
      var Z = "TabsContent",
        X = n.forwardRef((e, t) => {
          let {
              __scopeTabs: r,
              value: o,
              forceMount: i,
              children: a,
              ...u
            } = e,
            s = K(Z, r),
            c = J(s.baseId, o),
            d = Q(s.baseId, o),
            f = o === s.value,
            p = n.useRef(f);
          return (
            n.useEffect(() => {
              let e = requestAnimationFrame(() => (p.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, l.jsx)(_, {
              present: i || f,
              children: ({ present: r }) =>
                (0, l.jsx)(h.div, {
                  "data-state": f ? "active" : "inactive",
                  "data-orientation": s.orientation,
                  role: "tabpanel",
                  "aria-labelledby": c,
                  hidden: !r,
                  id: d,
                  tabIndex: 0,
                  ...u,
                  ref: t,
                  style: {
                    ...e.style,
                    animationDuration: p.current ? "0s" : void 0,
                  },
                  children: r && a,
                }),
            })
          );
        });
      function J(e, t) {
        return `${e}-trigger-${t}`;
      }
      function Q(e, t) {
        return `${e}-content-${t}`;
      }
      X.displayName = Z;
      var ee = U,
        et = Y,
        er = G,
        en = X;
    },
    57898: function (e, t, r) {
      r.d(t, {
        D: function () {
          return o;
        },
      });
      var n = r(67294);
      function o(e) {
        let t = n.useRef({ value: e, previous: e });
        return n.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    70369: function (e, t, r) {
      r.d(t, {
        f: function () {
          return c;
        },
        T: function () {
          return s;
        },
      });
      var n = r(67294);
      r(73935);
      var o = r(28771),
        i = r(85893),
        l = Symbol("radix.slottable");
      function a(e) {
        return (
          n.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === l
        );
      }
      var u = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = (function (e) {
              let t = (function (e) {
                  let t = n.forwardRef((e, t) => {
                    let { children: r, ...i } = e;
                    if (n.isValidElement(r)) {
                      let e, l;
                      let a =
                          (e = Object.getOwnPropertyDescriptor(
                            r.props,
                            "ref"
                          )?.get) &&
                          "isReactWarning" in e &&
                          e.isReactWarning
                            ? r.ref
                            : (e = Object.getOwnPropertyDescriptor(
                                r,
                                "ref"
                              )?.get) &&
                              "isReactWarning" in e &&
                              e.isReactWarning
                            ? r.props.ref
                            : r.props.ref || r.ref,
                        u = (function (e, t) {
                          let r = { ...t };
                          for (let n in t) {
                            let o = e[n],
                              i = t[n];
                            /^on[A-Z]/.test(n)
                              ? o && i
                                ? (r[n] = (...e) => {
                                    i(...e), o(...e);
                                  })
                                : o && (r[n] = o)
                              : "style" === n
                              ? (r[n] = { ...o, ...i })
                              : "className" === n &&
                                (r[n] = [o, i].filter(Boolean).join(" "));
                          }
                          return { ...e, ...r };
                        })(i, r.props);
                      return (
                        r.type !== n.Fragment &&
                          (u.ref = t ? (0, o.F)(t, a) : a),
                        n.cloneElement(r, u)
                      );
                    }
                    return n.Children.count(r) > 1
                      ? n.Children.only(null)
                      : null;
                  });
                  return (t.displayName = `${e}.SlotClone`), t;
                })(e),
                r = n.forwardRef((e, r) => {
                  let { children: o, ...l } = e,
                    u = n.Children.toArray(o),
                    s = u.find(a);
                  if (s) {
                    let e = s.props.children,
                      o = u.map((t) =>
                        t !== s
                          ? t
                          : n.Children.count(e) > 1
                          ? n.Children.only(null)
                          : n.isValidElement(e)
                          ? e.props.children
                          : null
                      );
                    return (0, i.jsx)(t, {
                      ...l,
                      ref: r,
                      children: n.isValidElement(e)
                        ? n.cloneElement(e, void 0, o)
                        : null,
                    });
                  }
                  return (0, i.jsx)(t, { ...l, ref: r, children: o });
                });
              return (r.displayName = `${e}.Slot`), r;
            })(`Primitive.${t}`),
            l = n.forwardRef((e, n) => {
              let { asChild: o, ...l } = e,
                a = o ? r : t;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, i.jsx)(a, { ...l, ref: n })
              );
            });
          return (l.displayName = `Primitive.${t}`), { ...e, [t]: l };
        }, {}),
        s = n.forwardRef((e, t) =>
          (0, i.jsx)(u.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        );
      s.displayName = "VisuallyHidden";
      var c = s;
    },
  },
]);
