"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [828],
  {
    87372: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(1462).Z)("CircleAlert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]);
    },
    17218: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(1462).Z)("Clock", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
      ]);
    },
    26848: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(1462).Z)("Info", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 16v-4", key: "1dtifu" }],
        ["path", { d: "M12 8h.01", key: "e9boi3" }],
      ]);
    },
    10562: function (e, t, n) {
      let r;
      n.d(t, {
        x8: function () {
          return eN;
        },
        VY: function () {
          return eR;
        },
        dk: function () {
          return eS;
        },
        aV: function () {
          return ex;
        },
        h_: function () {
          return ew;
        },
        fC: function () {
          return eb;
        },
        Dx: function () {
          return eD;
        },
        xz: function () {
          return eE;
        },
        jm: function () {
          return ev;
        },
        p8: function () {
          return z;
        },
      });
      var o,
        i = n(67294),
        u = n.t(i, 2);
      function l(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var a = n(28771),
        s = n(85893),
        c = globalThis?.document ? i.useLayoutEffect : () => {},
        d = u[" useId ".trim().toString()] || (() => void 0),
        f = 0;
      function p(e) {
        let [t, n] = i.useState(d());
        return (
          c(() => {
            e || n((e) => e ?? String(f++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      var m = u[" useInsertionEffect ".trim().toString()] || c;
      Symbol("RADIX:SYNC_STATE");
      var v = n(73935),
        y = n(88426),
        g = [
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
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (0, y.Z8)(`Primitive.${t}`),
            r = i.forwardRef((e, r) => {
              let { asChild: o, ...i } = e,
                u = o ? n : t;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, s.jsx)(u, { ...i, ref: r })
              );
            });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {});
      function h(e) {
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
      var b = "dismissableLayer.update",
        E = i.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        w = i.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: n = !1,
              onEscapeKeyDown: r,
              onPointerDownOutside: u,
              onFocusOutside: c,
              onInteractOutside: d,
              onDismiss: f,
              ...p
            } = e,
            m = i.useContext(E),
            [v, y] = i.useState(null),
            w = v?.ownerDocument ?? globalThis?.document,
            [, D] = i.useState({}),
            S = (0, a.e)(t, (e) => y(e)),
            N = Array.from(m.layers),
            [C] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
            P = N.indexOf(C),
            j = v ? N.indexOf(v) : -1,
            M = m.layersWithOutsidePointerEventsDisabled.size > 0,
            O = j >= P,
            _ = (function (e, t = globalThis?.document) {
              let n = h(e),
                r = i.useRef(!1),
                o = i.useRef(() => {});
              return (
                i.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = function () {
                            R("dismissableLayer.pointerDownOutside", n, i, {
                              discrete: !0,
                            });
                          },
                          i = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = r),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : r();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...m.branches].some((e) => e.contains(t));
              !O || n || (u?.(e), d?.(e), e.defaultPrevented || f?.());
            }, w),
            I = (function (e, t = globalThis?.document) {
              let n = h(e),
                r = i.useRef(!1);
              return (
                i.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      R(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...m.branches].some((e) => e.contains(t)) ||
                (c?.(e), d?.(e), e.defaultPrevented || f?.());
            }, w);
          return (
            !(function (e, t = globalThis?.document) {
              let n = h(e);
              i.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              j !== m.layers.size - 1 ||
                (r?.(e), !e.defaultPrevented && f && (e.preventDefault(), f()));
            }, w),
            i.useEffect(() => {
              if (v)
                return (
                  n &&
                    (0 === m.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = w.body.style.pointerEvents),
                      (w.body.style.pointerEvents = "none")),
                    m.layersWithOutsidePointerEventsDisabled.add(v)),
                  m.layers.add(v),
                  x(),
                  () => {
                    n &&
                      1 === m.layersWithOutsidePointerEventsDisabled.size &&
                      (w.body.style.pointerEvents = o);
                  }
                );
            }, [v, w, n, m]),
            i.useEffect(
              () => () => {
                v &&
                  (m.layers.delete(v),
                  m.layersWithOutsidePointerEventsDisabled.delete(v),
                  x());
              },
              [v, m]
            ),
            i.useEffect(() => {
              let e = () => D({});
              return (
                document.addEventListener(b, e),
                () => document.removeEventListener(b, e)
              );
            }, []),
            (0, s.jsx)(g.div, {
              ...p,
              ref: S,
              style: {
                pointerEvents: M ? (O ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: l(e.onFocusCapture, I.onFocusCapture),
              onBlurCapture: l(e.onBlurCapture, I.onBlurCapture),
              onPointerDownCapture: l(
                e.onPointerDownCapture,
                _.onPointerDownCapture
              ),
            })
          );
        });
      function x() {
        let e = new CustomEvent(b);
        document.dispatchEvent(e);
      }
      function R(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && o.addEventListener(e, t, { once: !0 }), r)
          ? o && v.flushSync(() => o.dispatchEvent(i))
          : o.dispatchEvent(i);
      }
      (w.displayName = "DismissableLayer"),
        (i.forwardRef((e, t) => {
          let n = i.useContext(E),
            r = i.useRef(null),
            o = (0, a.e)(t, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, s.jsx)(g.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
      var D = "focusScope.autoFocusOnMount",
        S = "focusScope.autoFocusOnUnmount",
        N = { bubbles: !1, cancelable: !0 },
        C = i.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: u,
              ...l
            } = e,
            [c, d] = i.useState(null),
            f = h(o),
            p = h(u),
            m = i.useRef(null),
            v = (0, a.e)(t, (e) => d(e)),
            y = i.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          i.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (y.paused || !c) return;
                  let t = e.target;
                  c.contains(t)
                    ? (m.current = t)
                    : M(m.current, { select: !0 });
                },
                t = function (e) {
                  if (y.paused || !c) return;
                  let t = e.relatedTarget;
                  null === t || c.contains(t) || M(m.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && M(c);
              });
              return (
                c && n.observe(c, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, c, y.paused]),
            i.useEffect(() => {
              if (c) {
                O.add(y);
                let e = document.activeElement;
                if (!c.contains(e)) {
                  let t = new CustomEvent(D, N);
                  c.addEventListener(D, f),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (M(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        P(c).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && M(c));
                }
                return () => {
                  c.removeEventListener(D, f),
                    setTimeout(() => {
                      let t = new CustomEvent(S, N);
                      c.addEventListener(S, p),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          M(e ?? document.body, { select: !0 }),
                        c.removeEventListener(S, p),
                        O.remove(y);
                    }, 0);
                };
              }
            }, [c, f, p, y]);
          let b = i.useCallback(
            (e) => {
              if ((!n && !r) || y.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = P(e);
                    return [j(t, e), j(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && M(i, { select: !0 }))
                    : (e.preventDefault(), n && M(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, y.paused]
          );
          return (0, s.jsx)(g.div, {
            tabIndex: -1,
            ...l,
            ref: v,
            onKeyDown: b,
          });
        });
      function P(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function j(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function M(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      C.displayName = "FocusScope";
      var O =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && t?.pause(), (r = _(r, e)).unshift(e);
          },
          remove(e) {
            (r = _(r, e)), r[0]?.resume();
          },
        });
      function _(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var I = i.forwardRef((e, t) => {
        let { container: n, ...r } = e,
          [o, u] = i.useState(!1);
        c(() => u(!0), []);
        let l = n || (o && globalThis?.document?.body);
        return l
          ? v.createPortal((0, s.jsx)(g.div, { ...r, ref: t }), l)
          : null;
      });
      I.displayName = "Portal";
      var A = (e) => {
        let t, n;
        let { present: r, children: o } = e,
          u = (function (e) {
            var t, n;
            let [r, o] = i.useState(),
              u = i.useRef(null),
              l = i.useRef(e),
              a = i.useRef("none"),
              [s, d] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
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
                i.useReducer((e, t) => n[e][t] ?? e, t));
            return (
              i.useEffect(() => {
                let e = T(u.current);
                a.current = "mounted" === s ? e : "none";
              }, [s]),
              c(() => {
                let t = u.current,
                  n = l.current;
                if (n !== e) {
                  let r = a.current,
                    o = T(t);
                  e
                    ? d("MOUNT")
                    : "none" === o || t?.display === "none"
                    ? d("UNMOUNT")
                    : n && r !== o
                    ? d("ANIMATION_OUT")
                    : d("UNMOUNT"),
                    (l.current = e);
                }
              }, [e, d]),
              c(() => {
                if (r) {
                  let e;
                  let t = r.ownerDocument.defaultView ?? window,
                    n = (n) => {
                      let o = T(u.current).includes(n.animationName);
                      if (
                        n.target === r &&
                        o &&
                        (d("ANIMATION_END"), !l.current)
                      ) {
                        let n = r.style.animationFillMode;
                        (r.style.animationFillMode = "forwards"),
                          (e = t.setTimeout(() => {
                            "forwards" === r.style.animationFillMode &&
                              (r.style.animationFillMode = n);
                          }));
                      }
                    },
                    o = (e) => {
                      e.target === r && (a.current = T(u.current));
                    };
                  return (
                    r.addEventListener("animationstart", o),
                    r.addEventListener("animationcancel", n),
                    r.addEventListener("animationend", n),
                    () => {
                      t.clearTimeout(e),
                        r.removeEventListener("animationstart", o),
                        r.removeEventListener("animationcancel", n),
                        r.removeEventListener("animationend", n);
                    }
                  );
                }
                d("ANIMATION_END");
              }, [r, d]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: i.useCallback((e) => {
                  (u.current = e ? getComputedStyle(e) : null), o(e);
                }, []),
              }
            );
          })(r),
          l =
            "function" == typeof o
              ? o({ present: u.isPresent })
              : i.Children.only(o),
          s = (0, a.e)(
            u.ref,
            (t = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) &&
              "isReactWarning" in t &&
              t.isReactWarning
              ? l.ref
              : (t = Object.getOwnPropertyDescriptor(l, "ref")?.get) &&
                "isReactWarning" in t &&
                t.isReactWarning
              ? l.props.ref
              : l.props.ref || l.ref
          );
        return "function" == typeof o || u.isPresent
          ? i.cloneElement(l, { ref: s })
          : null;
      };
      function T(e) {
        return e?.animationName || "none";
      }
      A.displayName = "Presence";
      var L = 0;
      function k() {
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
      var F = n(6223),
        $ = n(23541),
        W = "Dialog",
        [U, z] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => i.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return i.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = i.createContext(r),
                  u = n.length;
                n = [...n, r];
                let l = (t) => {
                  let { scope: n, children: r, ...l } = t,
                    a = n?.[e]?.[u] || o,
                    c = i.useMemo(() => l, Object.values(l));
                  return (0, s.jsx)(a.Provider, { value: c, children: r });
                };
                return (
                  (l.displayName = t + "Provider"),
                  [
                    l,
                    function (n, l) {
                      let a = l?.[e]?.[u] || o,
                        s = i.useContext(a);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return i.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t),
            ]
          );
        })(W),
        [K, B] = U(W),
        H = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: u,
              modal: l = !0,
            } = e,
            a = i.useRef(null),
            c = i.useRef(null),
            [d, f] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
              caller: r,
            }) {
              let [o, u, l] = (function ({ defaultProp: e, onChange: t }) {
                  let [n, r] = i.useState(e),
                    o = i.useRef(n),
                    u = i.useRef(t);
                  return (
                    m(() => {
                      u.current = t;
                    }, [t]),
                    i.useEffect(() => {
                      o.current !== n && (u.current?.(n), (o.current = n));
                    }, [n, o]),
                    [n, r, u]
                  );
                })({ defaultProp: t, onChange: n }),
                a = void 0 !== e,
                s = a ? e : o;
              {
                let t = i.useRef(void 0 !== e);
                i.useEffect(() => {
                  let e = t.current;
                  if (e !== a) {
                    let t = a ? "controlled" : "uncontrolled";
                    console.warn(
                      `${r} is changing from ${
                        e ? "controlled" : "uncontrolled"
                      } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                    );
                  }
                  t.current = a;
                }, [a, r]);
              }
              return [
                s,
                i.useCallback(
                  (t) => {
                    if (a) {
                      let n = "function" == typeof t ? t(e) : t;
                      n !== e && l.current?.(n);
                    } else u(t);
                  },
                  [a, e, u, l]
                ),
              ];
            })({ prop: r, defaultProp: o ?? !1, onChange: u, caller: W });
          return (0, s.jsx)(K, {
            scope: t,
            triggerRef: a,
            contentRef: c,
            contentId: p(),
            titleId: p(),
            descriptionId: p(),
            open: d,
            onOpenChange: f,
            onOpenToggle: i.useCallback(() => f((e) => !e), [f]),
            modal: l,
            children: n,
          });
        };
      H.displayName = W;
      var V = "DialogTrigger",
        Z = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = B(V, n),
            i = (0, a.e)(t, o.triggerRef);
          return (0, s.jsx)(g.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": ep(o.open),
            ...r,
            ref: i,
            onClick: l(e.onClick, o.onOpenToggle),
          });
        });
      Z.displayName = V;
      var q = "DialogPortal",
        [Y, X] = U(q, { forceMount: void 0 }),
        Q = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            u = B(q, t);
          return (0, s.jsx)(Y, {
            scope: t,
            forceMount: n,
            children: i.Children.map(r, (e) =>
              (0, s.jsx)(A, {
                present: n || u.open,
                children: (0, s.jsx)(I, {
                  asChild: !0,
                  container: o,
                  children: e,
                }),
              })
            ),
          });
        };
      Q.displayName = q;
      var G = "DialogOverlay",
        J = i.forwardRef((e, t) => {
          let n = X(G, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = B(G, e.__scopeDialog);
          return i.modal
            ? (0, s.jsx)(A, {
                present: r || i.open,
                children: (0, s.jsx)(et, { ...o, ref: t }),
              })
            : null;
        });
      J.displayName = G;
      var ee = (0, y.Z8)("DialogOverlay.RemoveScroll"),
        et = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = B(G, n);
          return (0, s.jsx)(F.Z, {
            as: ee,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, s.jsx)(g.div, {
              "data-state": ep(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        en = "DialogContent",
        er = i.forwardRef((e, t) => {
          let n = X(en, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = B(en, e.__scopeDialog);
          return (0, s.jsx)(A, {
            present: r || i.open,
            children: i.modal
              ? (0, s.jsx)(eo, { ...o, ref: t })
              : (0, s.jsx)(ei, { ...o, ref: t }),
          });
        });
      er.displayName = en;
      var eo = i.forwardRef((e, t) => {
          let n = B(en, e.__scopeDialog),
            r = i.useRef(null),
            o = (0, a.e)(t, n.contentRef, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e) return (0, $.Ry)(e);
            }, []),
            (0, s.jsx)(eu, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: l(e.onCloseAutoFocus, (e) => {
                e.preventDefault(), n.triggerRef.current?.focus();
              }),
              onPointerDownOutside: l(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: l(e.onFocusOutside, (e) => e.preventDefault()),
            })
          );
        }),
        ei = i.forwardRef((e, t) => {
          let n = B(en, e.__scopeDialog),
            r = i.useRef(!1),
            o = i.useRef(!1);
          return (0, s.jsx)(eu, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (r.current || n.triggerRef.current?.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (o.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (o.current = !0));
              let i = t.target;
              n.triggerRef.current?.contains(i) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  o.current &&
                  t.preventDefault();
            },
          });
        }),
        eu = i.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: u,
              ...l
            } = e,
            c = B(en, n),
            d = i.useRef(null),
            f = (0, a.e)(t, d);
          return (
            i.useEffect(() => {
              let e = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement("afterbegin", e[0] ?? k()),
                document.body.insertAdjacentElement("beforeend", e[1] ?? k()),
                L++,
                () => {
                  1 === L &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    L--;
                }
              );
            }, []),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(C, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: o,
                  onUnmountAutoFocus: u,
                  children: (0, s.jsx)(w, {
                    role: "dialog",
                    id: c.contentId,
                    "aria-describedby": c.descriptionId,
                    "aria-labelledby": c.titleId,
                    "data-state": ep(c.open),
                    ...l,
                    ref: f,
                    onDismiss: () => c.onOpenChange(!1),
                  }),
                }),
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(eg, { titleId: c.titleId }),
                    (0, s.jsx)(eh, {
                      contentRef: d,
                      descriptionId: c.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        el = "DialogTitle",
        ea = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = B(el, n);
          return (0, s.jsx)(g.h2, { id: o.titleId, ...r, ref: t });
        });
      ea.displayName = el;
      var es = "DialogDescription",
        ec = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = B(es, n);
          return (0, s.jsx)(g.p, { id: o.descriptionId, ...r, ref: t });
        });
      ec.displayName = es;
      var ed = "DialogClose",
        ef = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = B(ed, n);
          return (0, s.jsx)(g.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: l(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      function ep(e) {
        return e ? "open" : "closed";
      }
      ef.displayName = ed;
      var em = "DialogTitleWarning",
        [ev, ey] = (function (e, t) {
          let n = i.createContext(t),
            r = (e) => {
              let { children: t, ...r } = e,
                o = i.useMemo(() => r, Object.values(r));
              return (0, s.jsx)(n.Provider, { value: o, children: t });
            };
          return (
            (r.displayName = e + "Provider"),
            [
              r,
              function (r) {
                let o = i.useContext(n);
                if (o) return o;
                if (void 0 !== t) return t;
                throw Error(`\`${r}\` must be used within \`${e}\``);
              },
            ]
          );
        })(em, { contentName: en, titleName: el, docsSlug: "dialog" }),
        eg = ({ titleId: e }) => {
          let t = ey(em),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return (
            i.useEffect(() => {
              e && !document.getElementById(e) && console.error(n);
            }, [n, e]),
            null
          );
        },
        eh = ({ contentRef: e, descriptionId: t }) => {
          let n = ey("DialogDescriptionWarning"),
            r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
          return (
            i.useEffect(() => {
              let n = e.current?.getAttribute("aria-describedby");
              t && n && !document.getElementById(t) && console.warn(r);
            }, [r, e, t]),
            null
          );
        },
        eb = H,
        eE = Z,
        ew = Q,
        ex = J,
        eR = er,
        eD = ea,
        eS = ec,
        eN = ef;
    },
    49102: function (e, t, n) {
      n.d(t, {
        f: function () {
          return l;
        },
      });
      var r = n(67294),
        o = n(85614),
        i = n(85893),
        u = r.forwardRef((e, t) =>
          (0, i.jsx)(o.WV.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              t.target.closest("button, input, select, textarea") ||
                (e.onMouseDown?.(t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          })
        );
      u.displayName = "Label";
      var l = u;
    },
    34941: function (e, t, n) {
      n.d(t, {
        e6: function () {
          return V;
        },
        fC: function () {
          return B;
        },
        bU: function () {
          return Z;
        },
        fQ: function () {
          return H;
        },
      });
      var r = n(67294),
        o = n(42614);
      function i(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var u = n(28771),
        l = n(85893);
      function a(e, t = []) {
        let n = [],
          o = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let i = r.createContext(o),
                u = n.length;
              n = [...n, o];
              let a = (t) => {
                let { scope: n, children: o, ...a } = t,
                  s = n?.[e]?.[u] || i,
                  c = r.useMemo(() => a, Object.values(a));
                return (0, l.jsx)(s.Provider, { value: c, children: o });
              };
              return (
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (n, l) {
                    let a = l?.[e]?.[u] || i,
                      s = r.useContext(a);
                    if (s) return s;
                    if (void 0 !== o) return o;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(o, ...t),
          ]
        );
      }
      function s(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var c = r.createContext(void 0),
        d = n(57898),
        f = globalThis?.document ? r.useLayoutEffect : () => {};
      function p(e) {
        let t = (function (e) {
            let t = r.forwardRef((e, t) => {
              let { children: n, ...o } = e;
              if (r.isValidElement(n)) {
                let e, i;
                let l =
                    (e = Object.getOwnPropertyDescriptor(
                      n.props,
                      "ref"
                    )?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning
                      ? n.ref
                      : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning
                      ? n.props.ref
                      : n.props.ref || n.ref,
                  a = (function (e, t) {
                    let n = { ...t };
                    for (let r in t) {
                      let o = e[r],
                        i = t[r];
                      /^on[A-Z]/.test(r)
                        ? o && i
                          ? (n[r] = (...e) => {
                              i(...e), o(...e);
                            })
                          : o && (n[r] = o)
                        : "style" === r
                        ? (n[r] = { ...o, ...i })
                        : "className" === r &&
                          (n[r] = [o, i].filter(Boolean).join(" "));
                    }
                    return { ...e, ...n };
                  })(o, n.props);
                return (
                  n.type !== r.Fragment && (a.ref = t ? (0, u.F)(t, l) : l),
                  r.cloneElement(n, a)
                );
              }
              return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            return (t.displayName = `${e}.SlotClone`), t;
          })(e),
          n = r.forwardRef((e, n) => {
            let { children: o, ...i } = e,
              u = r.Children.toArray(o),
              a = u.find(v);
            if (a) {
              let e = a.props.children,
                o = u.map((t) =>
                  t !== a
                    ? t
                    : r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                    ? e.props.children
                    : null
                );
              return (0, l.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e)
                  ? r.cloneElement(e, void 0, o)
                  : null,
              });
            }
            return (0, l.jsx)(t, { ...i, ref: n, children: o });
          });
        return (n.displayName = `${e}.Slot`), n;
      }
      n(73935);
      var m = Symbol("radix.slottable");
      function v(e) {
        return (
          r.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === m
        );
      }
      var y = [
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
          let n = p(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              let { asChild: o, ...i } = e,
                u = o ? n : t;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, l.jsx)(u, { ...i, ref: r })
              );
            });
          return (o.displayName = `Primitive.${t}`), { ...e, [t]: o };
        }, {}),
        g = ["PageUp", "PageDown"],
        h = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        b = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
        },
        E = "Slider",
        [w, x, R] = (function (e) {
          let t = e + "CollectionProvider",
            [n, o] = a(t),
            [i, s] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            c = (e) => {
              let { scope: t, children: n } = e,
                o = r.useRef(null),
                u = r.useRef(new Map()).current;
              return (0, l.jsx)(i, {
                scope: t,
                itemMap: u,
                collectionRef: o,
                children: n,
              });
            };
          c.displayName = t;
          let d = e + "CollectionSlot",
            f = p(d),
            m = r.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                o = s(d, n),
                i = (0, u.e)(t, o.collectionRef);
              return (0, l.jsx)(f, { ref: i, children: r });
            });
          m.displayName = d;
          let v = e + "CollectionItemSlot",
            y = "data-radix-collection-item",
            g = p(v),
            h = r.forwardRef((e, t) => {
              let { scope: n, children: o, ...i } = e,
                a = r.useRef(null),
                c = (0, u.e)(t, a),
                d = s(v, n);
              return (
                r.useEffect(
                  () => (
                    d.itemMap.set(a, { ref: a, ...i }),
                    () => void d.itemMap.delete(a)
                  )
                ),
                (0, l.jsx)(g, { [y]: "", ref: c, children: o })
              );
            });
          return (
            (h.displayName = v),
            [
              { Provider: c, Slot: m, ItemSlot: h },
              function (t) {
                let n = s(e + "CollectionConsumer", t);
                return r.useCallback(() => {
                  let e = n.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll(`[${y}]`));
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) =>
                      t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  );
                }, [n.collectionRef, n.itemMap]);
              },
              o,
            ]
          );
        })(E),
        [D, S] = a(E, [R]),
        [N, C] = D(E),
        P = r.forwardRef((e, t) => {
          let {
              name: n,
              min: u = 0,
              max: a = 100,
              step: c = 1,
              orientation: d = "horizontal",
              disabled: f = !1,
              minStepsBetweenThumbs: p = 0,
              defaultValue: m = [u],
              value: v,
              onValueChange: y = () => {},
              onValueCommit: b = () => {},
              inverted: E = !1,
              form: x,
              ...R
            } = e,
            D = r.useRef(new Set()),
            S = r.useRef(0),
            C = "horizontal" === d ? O : _,
            [P = [], j] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
            }) {
              let [o, i] = (function ({ defaultProp: e, onChange: t }) {
                  let n = r.useState(e),
                    [o] = n,
                    i = r.useRef(o),
                    u = s(t);
                  return (
                    r.useEffect(() => {
                      i.current !== o && (u(o), (i.current = o));
                    }, [o, i, u]),
                    n
                  );
                })({ defaultProp: t, onChange: n }),
                u = void 0 !== e,
                l = u ? e : o,
                a = s(n);
              return [
                l,
                r.useCallback(
                  (t) => {
                    if (u) {
                      let n = "function" == typeof t ? t(e) : t;
                      n !== e && a(n);
                    } else i(t);
                  },
                  [u, e, i, a]
                ),
              ];
            })({
              prop: v,
              defaultProp: m,
              onChange: (e) => {
                let t = [...D.current];
                t[S.current]?.focus(), y(e);
              },
            }),
            M = r.useRef(P);
          function I(e, t, { commit: n } = { commit: !1 }) {
            let r = (String(c).split(".")[1] || "").length,
              i = (function (e, t) {
                let n = Math.pow(10, t);
                return Math.round(e * n) / n;
              })(Math.round((e - u) / c) * c + u, r),
              l = (0, o.u)(i, [u, a]);
            j((e = []) => {
              var r, o;
              let i = (function (e = [], t, n) {
                let r = [...e];
                return (r[n] = t), r.sort((e, t) => e - t);
              })(e, l, t);
              if (
                ((r = i),
                !(
                  !((o = p * c) > 0) ||
                  Math.min(...r.slice(0, -1).map((e, t) => r[t + 1] - e)) >= o
                ))
              )
                return e;
              {
                S.current = i.indexOf(l);
                let t = String(i) !== String(e);
                return t && n && b(i), t ? i : e;
              }
            });
          }
          return (0, l.jsx)(N, {
            scope: e.__scopeSlider,
            name: n,
            disabled: f,
            min: u,
            max: a,
            valueIndexToChangeRef: S,
            thumbs: D.current,
            values: P,
            orientation: d,
            form: x,
            children: (0, l.jsx)(w.Provider, {
              scope: e.__scopeSlider,
              children: (0, l.jsx)(w.Slot, {
                scope: e.__scopeSlider,
                children: (0, l.jsx)(C, {
                  "aria-disabled": f,
                  "data-disabled": f ? "" : void 0,
                  ...R,
                  ref: t,
                  onPointerDown: i(R.onPointerDown, () => {
                    f || (M.current = P);
                  }),
                  min: u,
                  max: a,
                  inverted: E,
                  onSlideStart: f
                    ? void 0
                    : function (e) {
                        let t = (function (e, t) {
                          if (1 === e.length) return 0;
                          let n = e.map((e) => Math.abs(e - t));
                          return n.indexOf(Math.min(...n));
                        })(P, e);
                        I(e, t);
                      },
                  onSlideMove: f
                    ? void 0
                    : function (e) {
                        I(e, S.current);
                      },
                  onSlideEnd: f
                    ? void 0
                    : function () {
                        let e = M.current[S.current];
                        P[S.current] !== e && b(P);
                      },
                  onHomeKeyDown: () => !f && I(u, 0, { commit: !0 }),
                  onEndKeyDown: () => !f && I(a, P.length - 1, { commit: !0 }),
                  onStepKeyDown: ({ event: e, direction: t }) => {
                    if (!f) {
                      let n =
                          g.includes(e.key) ||
                          (e.shiftKey && h.includes(e.key)),
                        r = S.current;
                      I(P[r] + c * (n ? 10 : 1) * t, r, { commit: !0 });
                    }
                  },
                }),
              }),
            }),
          });
        });
      P.displayName = E;
      var [j, M] = D(E, {
          startEdge: "left",
          endEdge: "right",
          size: "width",
          direction: 1,
        }),
        O = r.forwardRef((e, t) => {
          let {
              min: n,
              max: o,
              dir: i,
              inverted: a,
              onSlideStart: s,
              onSlideMove: d,
              onSlideEnd: f,
              onStepKeyDown: p,
              ...m
            } = e,
            [v, y] = r.useState(null),
            g = (0, u.e)(t, (e) => y(e)),
            h = r.useRef(void 0),
            E = (function (e) {
              let t = r.useContext(c);
              return e || t || "ltr";
            })(i),
            w = "ltr" === E,
            x = (w && !a) || (!w && a);
          function R(e) {
            let t = h.current || v.getBoundingClientRect(),
              r = K([0, t.width], x ? [n, o] : [o, n]);
            return (h.current = t), r(e - t.left);
          }
          return (0, l.jsx)(j, {
            scope: e.__scopeSlider,
            startEdge: x ? "left" : "right",
            endEdge: x ? "right" : "left",
            direction: x ? 1 : -1,
            size: "width",
            children: (0, l.jsx)(I, {
              dir: E,
              "data-orientation": "horizontal",
              ...m,
              ref: g,
              style: {
                ...m.style,
                "--radix-slider-thumb-transform": "translateX(-50%)",
              },
              onSlideStart: (e) => {
                let t = R(e.clientX);
                s?.(t);
              },
              onSlideMove: (e) => {
                let t = R(e.clientX);
                d?.(t);
              },
              onSlideEnd: () => {
                (h.current = void 0), f?.();
              },
              onStepKeyDown: (e) => {
                let t = b[x ? "from-left" : "from-right"].includes(e.key);
                p?.({ event: e, direction: t ? -1 : 1 });
              },
            }),
          });
        }),
        _ = r.forwardRef((e, t) => {
          let {
              min: n,
              max: o,
              inverted: i,
              onSlideStart: a,
              onSlideMove: s,
              onSlideEnd: c,
              onStepKeyDown: d,
              ...f
            } = e,
            p = r.useRef(null),
            m = (0, u.e)(t, p),
            v = r.useRef(void 0),
            y = !i;
          function g(e) {
            let t = v.current || p.current.getBoundingClientRect(),
              r = K([0, t.height], y ? [o, n] : [n, o]);
            return (v.current = t), r(e - t.top);
          }
          return (0, l.jsx)(j, {
            scope: e.__scopeSlider,
            startEdge: y ? "bottom" : "top",
            endEdge: y ? "top" : "bottom",
            size: "height",
            direction: y ? 1 : -1,
            children: (0, l.jsx)(I, {
              "data-orientation": "vertical",
              ...f,
              ref: m,
              style: {
                ...f.style,
                "--radix-slider-thumb-transform": "translateY(50%)",
              },
              onSlideStart: (e) => {
                let t = g(e.clientY);
                a?.(t);
              },
              onSlideMove: (e) => {
                let t = g(e.clientY);
                s?.(t);
              },
              onSlideEnd: () => {
                (v.current = void 0), c?.();
              },
              onStepKeyDown: (e) => {
                let t = b[y ? "from-bottom" : "from-top"].includes(e.key);
                d?.({ event: e, direction: t ? -1 : 1 });
              },
            }),
          });
        }),
        I = r.forwardRef((e, t) => {
          let {
              __scopeSlider: n,
              onSlideStart: r,
              onSlideMove: o,
              onSlideEnd: u,
              onHomeKeyDown: a,
              onEndKeyDown: s,
              onStepKeyDown: c,
              ...d
            } = e,
            f = C(E, n);
          return (0, l.jsx)(y.span, {
            ...d,
            ref: t,
            onKeyDown: i(e.onKeyDown, (e) => {
              "Home" === e.key
                ? (a(e), e.preventDefault())
                : "End" === e.key
                ? (s(e), e.preventDefault())
                : g.concat(h).includes(e.key) && (c(e), e.preventDefault());
            }),
            onPointerDown: i(e.onPointerDown, (e) => {
              let t = e.target;
              t.setPointerCapture(e.pointerId),
                e.preventDefault(),
                f.thumbs.has(t) ? t.focus() : r(e);
            }),
            onPointerMove: i(e.onPointerMove, (e) => {
              e.target.hasPointerCapture(e.pointerId) && o(e);
            }),
            onPointerUp: i(e.onPointerUp, (e) => {
              let t = e.target;
              t.hasPointerCapture(e.pointerId) &&
                (t.releasePointerCapture(e.pointerId), u(e));
            }),
          });
        }),
        A = "SliderTrack",
        T = r.forwardRef((e, t) => {
          let { __scopeSlider: n, ...r } = e,
            o = C(A, n);
          return (0, l.jsx)(y.span, {
            "data-disabled": o.disabled ? "" : void 0,
            "data-orientation": o.orientation,
            ...r,
            ref: t,
          });
        });
      T.displayName = A;
      var L = "SliderRange",
        k = r.forwardRef((e, t) => {
          let { __scopeSlider: n, ...o } = e,
            i = C(L, n),
            a = M(L, n),
            s = r.useRef(null),
            c = (0, u.e)(t, s),
            d = i.values.length,
            f = i.values.map((e) => z(e, i.min, i.max));
          return (0, l.jsx)(y.span, {
            "data-orientation": i.orientation,
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: c,
            style: {
              ...e.style,
              [a.startEdge]: (d > 1 ? Math.min(...f) : 0) + "%",
              [a.endEdge]: 100 - Math.max(...f) + "%",
            },
          });
        });
      k.displayName = L;
      var F = "SliderThumb",
        $ = r.forwardRef((e, t) => {
          let n = x(e.__scopeSlider),
            [o, i] = r.useState(null),
            a = (0, u.e)(t, (e) => i(e)),
            s = r.useMemo(
              () => (o ? n().findIndex((e) => e.ref.current === o) : -1),
              [n, o]
            );
          return (0, l.jsx)(W, { ...e, ref: a, index: s });
        }),
        W = r.forwardRef((e, t) => {
          var n;
          let { __scopeSlider: o, index: a, name: s, ...c } = e,
            d = C(F, o),
            p = M(F, o),
            [m, v] = r.useState(null),
            g = (0, u.e)(t, (e) => v(e)),
            h = !m || d.form || !!m.closest("form"),
            b = (function (e) {
              let [t, n] = r.useState(void 0);
              return (
                f(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(m),
            E = d.values[a],
            x = void 0 === E ? 0 : z(E, d.min, d.max),
            R =
              (n = d.values.length) > 2
                ? `Value ${a + 1} of ${n}`
                : 2 === n
                ? ["Minimum", "Maximum"][a]
                : void 0,
            D = b?.[p.size],
            S = D
              ? (function (e, t, n) {
                  let r = e / 2,
                    o = K([0, 50], [0, r]);
                  return (r - o(t) * n) * n;
                })(D, x, p.direction)
              : 0;
          return (
            r.useEffect(() => {
              if (m)
                return (
                  d.thumbs.add(m),
                  () => {
                    d.thumbs.delete(m);
                  }
                );
            }, [m, d.thumbs]),
            (0, l.jsxs)("span", {
              style: {
                transform: "var(--radix-slider-thumb-transform)",
                position: "absolute",
                [p.startEdge]: `calc(${x}% + ${S}px)`,
              },
              children: [
                (0, l.jsx)(w.ItemSlot, {
                  scope: e.__scopeSlider,
                  children: (0, l.jsx)(y.span, {
                    role: "slider",
                    "aria-label": e["aria-label"] || R,
                    "aria-valuemin": d.min,
                    "aria-valuenow": E,
                    "aria-valuemax": d.max,
                    "aria-orientation": d.orientation,
                    "data-orientation": d.orientation,
                    "data-disabled": d.disabled ? "" : void 0,
                    tabIndex: d.disabled ? void 0 : 0,
                    ...c,
                    ref: g,
                    style: void 0 === E ? { display: "none" } : e.style,
                    onFocus: i(e.onFocus, () => {
                      d.valueIndexToChangeRef.current = a;
                    }),
                  }),
                }),
                h &&
                  (0, l.jsx)(
                    U,
                    {
                      name:
                        s ??
                        (d.name
                          ? d.name + (d.values.length > 1 ? "[]" : "")
                          : void 0),
                      form: d.form,
                      value: E,
                    },
                    a
                  ),
              ],
            })
          );
        });
      $.displayName = F;
      var U = (e) => {
        let { value: t, ...n } = e,
          o = r.useRef(null),
          i = (0, d.D)(t);
        return (
          r.useEffect(() => {
            let e = o.current,
              n = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "value"
              ).set;
            if (i !== t && n) {
              let r = new Event("input", { bubbles: !0 });
              n.call(e, t), e.dispatchEvent(r);
            }
          }, [i, t]),
          (0, l.jsx)("input", {
            style: { display: "none" },
            ...n,
            ref: o,
            defaultValue: t,
          })
        );
      };
      function z(e, t, n) {
        return (0, o.u)((100 / (n - t)) * (e - t), [0, 100]);
      }
      function K(e, t) {
        return (n) => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          let r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0]);
        };
      }
      var B = P,
        H = T,
        V = k,
        Z = $;
    },
  },
]);
