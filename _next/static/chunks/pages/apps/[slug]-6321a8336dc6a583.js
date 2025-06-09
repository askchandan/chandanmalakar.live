(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [180],
  {
    13341: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/apps/[slug]",
        function () {
          return a(48874);
        },
      ]);
    },
    55930: function (e, t, a) {
      "use strict";
      var s = a(85893);
      a(67294);
      var i = a(72510),
        r = a(55186),
        n = a(62549);
      t.Z = (e) => {
        let { content: t, className: a } = e;
        return (0, s.jsx)("div", {
          className: a,
          children: (0, s.jsx)(i.U, {
            remarkPlugins: [r.Z],
            rehypePlugins: [n.Z],
            components: {
              a: (e) => {
                let { node: t, ...a } = e;
                return ("string" == typeof a.href ? a.href : "").startsWith("#")
                  ? (0, s.jsx)("a", { ...a })
                  : (0, s.jsx)("a", {
                      ...a,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    });
              },
              h1: (e) => {
                let { node: t, ...a } = e,
                  i = String(a.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, s.jsx)("h1", { id: i, ...a });
              },
              h2: (e) => {
                let { node: t, ...a } = e,
                  i = String(a.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, s.jsx)("h2", { id: i, ...a });
              },
              h3: (e) => {
                let { node: t, ...a } = e,
                  i = String(a.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, s.jsx)("h3", { id: i, ...a });
              },
              h4: (e) => {
                let { node: t, ...a } = e,
                  i = String(a.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, s.jsx)("h4", { id: i, ...a });
              },
              h5: (e) => {
                let { node: t, ...a } = e,
                  i = String(a.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, s.jsx)("h5", { id: i, ...a });
              },
              h6: (e) => {
                let { node: t, ...a } = e,
                  i = String(a.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, s.jsx)("h6", { id: i, ...a });
              },
              table: (e) => {
                let { node: t, ...a } = e;
                return (0, s.jsx)("div", {
                  className: "overflow-x-auto max-w-full",
                  children: (0, s.jsx)("table", {
                    className: "min-w-full",
                    ...a,
                  }),
                });
              },
              th: (e) => {
                let { node: t, ...a } = e;
                return (0, s.jsx)("th", {
                  className:
                    "break-words align-top px-2 py-2 text-xs sm:text-sm",
                  ...a,
                });
              },
              td: (e) => {
                let { node: t, ...a } = e;
                return (0, s.jsx)("td", {
                  className:
                    "break-words align-top px-2 py-2 text-xs sm:text-sm",
                  ...a,
                });
              },
            },
            children: t,
          }),
        });
      };
    },
    15030: function (e, t, a) {
      "use strict";
      var s = a(85893),
        i = a(9008),
        r = a.n(i);
      a(67294);
      let n = "Aman Kumar, AI Product Engineer, Problem Solver, FullStack Dev";
      t.Z = (e) => {
        let {
          title: t,
          description:
            a = "Experimenting with LLMs, AI Engineering, Problem Solving, FullStack Development",
          keywords: i,
        } = e;
        return (
          (t = t
            ? "".concat(t, " | Aman's Mind Map")
            : "Aman's Mind Map | AI Product Engineer"),
          (i = i ? "".concat(i, ", ").concat(n) : n),
          (0, s.jsxs)(r(), {
            children: [
              (0, s.jsx)("title", { children: t }),
              a && (0, s.jsx)("meta", { name: "description", content: a }),
              i && (0, s.jsx)("meta", { name: "keywords", content: i }),
              (0, s.jsx)("meta", { property: "og:title", content: t }),
              (0, s.jsx)("meta", {
                property: "og:description",
                content: a || "",
              }),
            ],
          })
        );
      };
    },
    48554: function (e, t, a) {
      "use strict";
      a.d(t, {
        Cd: function () {
          return d;
        },
        X: function () {
          return c;
        },
        bZ: function () {
          return o;
        },
      });
      var s = a(85893),
        i = a(67294),
        r = a(45139),
        n = a(27596);
      let l = (0, r.j)(
          "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
          {
            variants: {
              variant: {
                default: "bg-background text-foreground",
                destructive:
                  "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
              },
            },
            defaultVariants: { variant: "default" },
          }
        ),
        o = i.forwardRef((e, t) => {
          let { className: a, variant: i, ...r } = e;
          return (0, s.jsx)("div", {
            ref: t,
            role: "alert",
            className: (0, n.cn)(l({ variant: i }), a),
            ...r,
          });
        });
      o.displayName = "Alert";
      let d = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)("h5", {
          ref: t,
          className: (0, n.cn)(
            "mb-1 font-medium leading-none tracking-tight",
            a
          ),
          ...i,
        });
      });
      d.displayName = "AlertTitle";
      let c = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: (0, n.cn)("text-sm [&_p]:leading-relaxed", a),
          ...i,
        });
      });
      c.displayName = "AlertDescription";
    },
    61027: function (e, t, a) {
      "use strict";
      a.d(t, {
        C: function () {
          return l;
        },
      });
      var s = a(85893);
      a(67294);
      var i = a(45139),
        r = a(27596);
      let n = (0, i.j)(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
              destructive:
                "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
              outline: "text-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function l(e) {
        let { className: t, variant: a, ...i } = e;
        return (0, s.jsx)("div", {
          className: (0, r.cn)(n({ variant: a }), t),
          ...i,
        });
      }
    },
    21064: function (e, t, a) {
      "use strict";
      a.d(t, {
        Ol: function () {
          return l;
        },
        SZ: function () {
          return d;
        },
        Zb: function () {
          return n;
        },
        aY: function () {
          return c;
        },
        eW: function () {
          return m;
        },
        ll: function () {
          return o;
        },
      });
      var s = a(85893),
        i = a(67294),
        r = a(27596);
      let n = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: (0, r.cn)(
            "rounded-xl border bg-card text-card-foreground shadow",
            a
          ),
          ...i,
        });
      });
      n.displayName = "Card";
      let l = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: (0, r.cn)("flex flex-col space-y-1.5 p-6", a),
          ...i,
        });
      });
      l.displayName = "CardHeader";
      let o = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)("h3", {
          ref: t,
          className: (0, r.cn)("font-semibold leading-none tracking-tight", a),
          ...i,
        });
      });
      o.displayName = "CardTitle";
      let d = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)("p", {
          ref: t,
          className: (0, r.cn)("text-sm text-muted-foreground", a),
          ...i,
        });
      });
      d.displayName = "CardDescription";
      let c = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: (0, r.cn)("p-6 pt-0", a),
          ...i,
        });
      });
      c.displayName = "CardContent";
      let m = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)("div", {
          ref: t,
          className: (0, r.cn)("flex items-center p-6 pt-0", a),
          ...i,
        });
      });
      m.displayName = "CardFooter";
    },
    48501: function (e, t, a) {
      "use strict";
      a.d(t, {
        I: function () {
          return n;
        },
      });
      var s = a(85893),
        i = a(67294),
        r = a(27596);
      let n = i.forwardRef((e, t) => {
        let { className: a, type: i, ...n } = e;
        return (0, s.jsx)("input", {
          type: i,
          className: (0, r.cn)(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            a
          ),
          ref: t,
          ...n,
        });
      });
      n.displayName = "Input";
    },
    70428: function (e, t, a) {
      "use strict";
      a.d(t, {
        _: function () {
          return d;
        },
      });
      var s = a(85893),
        i = a(67294),
        r = a(49102),
        n = a(45139),
        l = a(27596);
      let o = (0, n.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        d = i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, s.jsx)(r.f, {
            ref: t,
            className: (0, l.cn)(o(), a),
            ...i,
          });
        });
      d.displayName = r.f.displayName;
    },
    42890: function (e, t, a) {
      "use strict";
      a.d(t, {
        Bw: function () {
          return u;
        },
        DI: function () {
          return d;
        },
        Ph: function () {
          return o;
        },
        Ql: function () {
          return g;
        },
        i4: function () {
          return m;
        },
        ki: function () {
          return c;
        },
        n5: function () {
          return p;
        },
      });
      var s = a(85893),
        i = a(67294),
        r = a(42561),
        n = a(27596),
        l = a(62469);
      let o = r.fC,
        d = r.ZA,
        c = r.B4,
        m = i.forwardRef((e, t) => {
          let { className: a, children: i, ...o } = e;
          return (0, s.jsxs)(r.xz, {
            ref: t,
            className: (0, n.cn)(
              "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              a
            ),
            ...o,
            children: [
              i,
              (0, s.jsx)(r.JO, {
                asChild: !0,
                children: (0, s.jsx)(l.v4q, {
                  className: "h-4 w-4 opacity-50",
                }),
              }),
            ],
          });
        });
      m.displayName = r.xz.displayName;
      let x = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(r.u_, {
          ref: t,
          className: (0, n.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...i,
          children: (0, s.jsx)(l.g8U, { className: "h-4 w-4" }),
        });
      });
      x.displayName = r.u_.displayName;
      let h = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(r.$G, {
          ref: t,
          className: (0, n.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...i,
          children: (0, s.jsx)(l.v4q, { className: "h-4 w-4" }),
        });
      });
      h.displayName = r.$G.displayName;
      let u = i.forwardRef((e, t) => {
        let { className: a, children: i, position: l = "popper", ...o } = e;
        return (0, s.jsx)(r.h_, {
          children: (0, s.jsxs)(r.VY, {
            ref: t,
            className: (0, n.cn)(
              "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
              "popper" === l &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              a
            ),
            position: l,
            ...o,
            children: [
              (0, s.jsx)(x, {}),
              (0, s.jsx)(r.l_, {
                className: (0, n.cn)(
                  "p-1",
                  "popper" === l &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: i,
              }),
              (0, s.jsx)(h, {}),
            ],
          }),
        });
      });
      u.displayName = r.VY.displayName;
      let p = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(r.__, {
          ref: t,
          className: (0, n.cn)("px-2 py-1.5 text-sm font-semibold", a),
          ...i,
        });
      });
      p.displayName = r.__.displayName;
      let g = i.forwardRef((e, t) => {
        let { className: a, children: i, ...o } = e;
        return (0, s.jsxs)(r.ck, {
          ref: t,
          className: (0, n.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            a
          ),
          ...o,
          children: [
            (0, s.jsx)("span", {
              className:
                "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, s.jsx)(r.wU, {
                children: (0, s.jsx)(l.nQG, { className: "h-4 w-4" }),
              }),
            }),
            (0, s.jsx)(r.eT, { children: i }),
          ],
        });
      });
      (g.displayName = r.ck.displayName),
        (i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, s.jsx)(r.Z0, {
            ref: t,
            className: (0, n.cn)("-mx-1 my-1 h-px bg-muted", a),
            ...i,
          });
        }).displayName = r.Z0.displayName);
    },
    14220: function (e, t, a) {
      "use strict";
      a.d(t, {
        i: function () {
          return l;
        },
      });
      var s = a(85893),
        i = a(67294),
        r = a(34941),
        n = a(27596);
      let l = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsxs)(r.fC, {
          ref: t,
          className: (0, n.cn)(
            "relative flex w-full touch-none select-none items-center",
            a
          ),
          ...i,
          children: [
            (0, s.jsx)(r.fQ, {
              className:
                "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
              children: (0, s.jsx)(r.e6, {
                className: "absolute h-full bg-primary",
              }),
            }),
            (0, s.jsx)(r.bU, {
              className:
                "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            }),
          ],
        });
      });
      l.displayName = r.fC.displayName;
    },
    55278: function (e, t, a) {
      "use strict";
      a.d(t, {
        SP: function () {
          return d;
        },
        dr: function () {
          return o;
        },
        mQ: function () {
          return l;
        },
        nU: function () {
          return c;
        },
      });
      var s = a(85893),
        i = a(67294),
        r = a(24805),
        n = a(27596);
      let l = r.fC,
        o = i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, s.jsx)(r.aV, {
            ref: t,
            className: (0, n.cn)(
              "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
              a
            ),
            ...i,
          });
        });
      o.displayName = r.aV.displayName;
      let d = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(r.xz, {
          ref: t,
          className: (0, n.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
            a
          ),
          ...i,
        });
      });
      d.displayName = r.xz.displayName;
      let c = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)(r.VY, {
          ref: t,
          className: (0, n.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            a
          ),
          ...i,
        });
      });
      c.displayName = r.VY.displayName;
    },
    48874: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSG: function () {
            return tk;
          },
          default: function () {
            return tT;
          },
        });
      var s,
        i,
        r = a(85893),
        n = a(67294),
        l = a(46840),
        o = a(41664),
        d = a.n(o),
        c = () => {
          let [e, t] = (0, n.useState)(!1);
          return ((0, n.useEffect)(() => {
            t(window.location.pathname.includes("/apps/"));
          }, []),
          e)
            ? (0, r.jsx)("div", {
                className:
                  "fixed bottom-4 right-4 z-50 flex items-center gap-3",
                children: (0, r.jsx)(d(), {
                  className:
                    "bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition",
                  href: "/apps",
                  title: "Go Home",
                  children: (0, r.jsx)(l.Z, { size: 20 }),
                }),
              })
            : null;
        },
        m = a(96390),
        x = a(10481),
        h = a(67233),
        u = a(33980),
        p = a(19710);
      let g = "https://bella.amankumar.ai";
      var f = a(82417),
        b = a(21064),
        j = a(48501),
        v = a(70428),
        N = a(42890),
        y = a(14220),
        w = a(47553),
        k = a(54119),
        T = a(17218),
        Z = a(65545),
        C = a(34088),
        P = a(87372),
        S = a(7188),
        _ = a(48554),
        A = a(55278),
        R = a(61027),
        D = a(30340),
        O = a.n(D),
        z = a(35308);
      ((s = i || (i = {})).New = "new"),
        (s.Beginner = "beginner"),
        (s.Intermediate = "intermediate"),
        (s.Advanced = "advanced"),
        (s.Expert = "expert");
      let I = [
          "from-blue-600 to-purple-600",
          "from-emerald-500 to-blue-500",
          "from-rose-500 to-indigo-600",
          "from-amber-500 to-pink-500",
          "from-teal-400 to-blue-500",
          "from-fuchsia-500 to-cyan-500",
          "from-violet-600 to-indigo-600",
          "from-green-400 to-cyan-500",
        ],
        E = { "Content-Type": "application/json" };
      var L = {
        courseApis: {
          create: async (e) => {
            let t = await fetch(
              "".concat(g, "/experiments/generate_course/v1"),
              { method: "POST", headers: E, body: JSON.stringify(e) }
            );
            if (!t.ok)
              throw Error("Error: ".concat(t.status, " ").concat(t.statusText));
            return t.json();
          },
          getAll: async () => {
            let e = await fetch("".concat(g, "/courses/v1/get_all"), {
              method: "GET",
              headers: E,
            });
            if (!e.ok)
              throw Error("Error: ".concat(e.status, " ").concat(e.statusText));
            return e.json();
          },
        },
      };
      let B = (e) => {
        switch (e) {
          case i.New:
            return "New to this subject";
          case i.Beginner:
            return "Just getting started, know some basics";
          case i.Intermediate:
            return "Comfortable with the basics, looking to improve";
          case i.Advanced:
            return "Have a good understanding, looking for deeper insights";
          case i.Expert:
            return "Highly knowledgeable, looking for advanced content";
          default:
            return "";
        }
      };
      var F = a(27596);
      function M(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          className: (0, F.cn)("animate-pulse rounded-md bg-primary/10", t),
          ...a,
        });
      }
      var U = a(55930);
      let G = () => crypto.randomUUID(),
        H = () => {
          {
            let e = localStorage.getItem("amankid");
            return (
              (!e || e.startsWith("user")) &&
                ((e = G()), localStorage.setItem("amankid", e)),
              e
            );
          }
        },
        Y = n.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)("textarea", {
            className: (0, F.cn)(
              "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              a
            ),
            ref: t,
            ...s,
          });
        });
      Y.displayName = "Textarea";
      var Q = a(29702),
        V = a(97886),
        W = a(82770),
        q = a(40595),
        K = a(3213),
        J = a(23552),
        $ = a(45197),
        X = a(54418),
        ee = a(64712);
      let et = [
        "image/png",
        "image/jpeg",
        "image/webp",
        "image/heic",
        "image/heif",
      ];
      var ea = a(72510),
        es = a(28154),
        ei = a(55295),
        er = [
          {
            value: "gemini-2.0-flash",
            label: "Gemini 2.0 Flash",
            description:
              "Next generation features, speed, and multimodal generation",
          },
          {
            value: "gemini-2.0-flash-lite",
            label: "Gemini 2.0 Flash-Lite",
            description: "Optimized for cost efficiency and low latency",
          },
          {
            value: "gemini-1.5-flash",
            label: "Gemini 1.5 Flash",
            description: "Fast and versatile performance",
          },
          {
            value: "gemini-1.5-flash-8b",
            label: "Gemini 1.5 Flash-8B",
            description: "High volume and lower intelligence tasks",
          },
          {
            value: "gemini-1.5-pro",
            label: "Gemini 1.5 Pro",
            description: "Complex reasoning tasks",
          },
          {
            value: "gemini-2.0-pro-exp-02-05",
            label: "Gemini 2.0 Pro Experimental",
            description:
              "Improved quality for world knowledge, code, and long context",
            isExperimental: !0,
          },
          {
            value: "gemini-2.0-flash-thinking-exp-01-21",
            label: "Gemini 2.0 Flash Thinking Experimental",
            description:
              "Reasoning for complex problems, features new thinking capabilities",
            isExperimental: !0,
          },
          {
            value: "learnlm-1.5-pro-experimental",
            label: "LearnLM 1.5 Pro Experimental",
            description:
              "Inputs: Audio, images, videos, and text. Output: Text",
            isExperimental: !0,
          },
        ],
        en = a(15030),
        el = a(6046),
        eo = a(3785),
        ed = a(25913),
        ec = a(63689),
        em = a(81692),
        ex = a(26848),
        eh = a(65642),
        eu = a(47963),
        ep = a(91526);
      let eg = {
          "O+": {
            canDonateTo: ["O+", "A+", "B+", "AB+"],
            canReceiveFrom: ["O+", "O-"],
            percentage: "38%",
            facts: [
              "Most common blood type",
              "Universal red cell donor for Rh+ patients",
              "Always in high demand at blood banks",
            ],
          },
          "O-": {
            canDonateTo: ["O-", "O+", "A+", "A-", "B+", "B-", "AB+", "AB-"],
            canReceiveFrom: ["O-"],
            percentage: "7%",
            facts: [
              "Universal donor (can donate to all blood types)",
              "Critical for emergency situations when patient blood type is unknown",
              "Rare and always in high demand",
            ],
          },
          "A+": {
            canDonateTo: ["A+", "AB+"],
            canReceiveFrom: ["A+", "A-", "O+", "O-"],
            percentage: "34%",
            facts: [
              "Second most common blood type",
              "Can receive from both A and O types",
              "Important for platelet donations",
            ],
          },
          "A-": {
            canDonateTo: ["A-", "A+", "AB+", "AB-"],
            canReceiveFrom: ["A-", "O-"],
            percentage: "6%",
            facts: [
              "Universal donor for other A and AB types",
              "Relatively rare",
              "Can only receive from A- and O- donors",
            ],
          },
          "B+": {
            canDonateTo: ["B+", "AB+"],
            canReceiveFrom: ["B+", "B-", "O+", "O-"],
            percentage: "9%",
            facts: [
              "More common in Asian and African populations",
              "Can receive from both B and O types",
              "Important for specialized treatments",
            ],
          },
          "B-": {
            canDonateTo: ["B-", "B+", "AB+", "AB-"],
            canReceiveFrom: ["B-", "O-"],
            percentage: "2%",
            facts: [
              "One of the rarer blood types",
              "Universal donor for other B and AB types",
              "Can only receive from B- and O- donors",
            ],
          },
          "AB+": {
            canDonateTo: ["AB+"],
            canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            percentage: "3%",
            facts: [
              "Universal recipient (can receive all blood types)",
              "Rarest of the eight main blood types",
              "Valuable plasma donor",
            ],
          },
          "AB-": {
            canDonateTo: ["AB-", "AB+"],
            canReceiveFrom: ["A-", "B-", "AB-", "O-"],
            percentage: "1%",
            facts: [
              "Rarest of all blood types",
              "Can donate to both AB+ and AB-",
              "Can only receive from negative blood types",
            ],
          },
        },
        ef = (e) => {
          let { selectedBloodType: t, onSelectBloodType: a, mode: s } = e,
            i = Object.keys(eg),
            [l, o] = (0, n.useState)(null),
            d = "donate" === s ? eg[t].canDonateTo : eg[t].canReceiveFrom,
            c = (e) =>
              e
                ? "donate" === s
                  ? "bg-green-500"
                  : "bg-blue-500"
                : "bg-gray-200",
            m = (e) => {
              let a = d.includes(e),
                i = e === t,
                r = e === l;
              return i && a
                ? "donate" === s
                  ? "bg-green-500 text-white ring-4 ring-green-200"
                  : "bg-blue-500 text-white ring-4 ring-blue-200"
                : i && !a
                ? "bg-gray-400 text-white ring-4 ring-gray-200"
                : r
                ? a
                  ? "donate" === s
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
                : a
                ? "donate" === s
                  ? "bg-green-100 text-green-800 border-green-200"
                  : "bg-blue-100 text-blue-800 border-blue-300"
                : "bg-gray-200 text-gray-800 border border-gray-200";
            };
          return (0, r.jsxs)("div", {
            className:
              "w-full max-w-md mx-auto aspect-square relative bg-gray-50 rounded-xl p-6 flex items-center justify-center",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "absolute z-20 transform -translate-x-1/2 -translate-y-1/2",
                style: { left: "".concat(50, "%"), top: "".concat(50, "%") },
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "w-16 h-16 rounded-full bg-red-600 text-white shadow-lg flex items-center justify-center text-xl font-bold border-4 border-white",
                    children: t,
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-32 text-center",
                    children: (0, r.jsx)("span", {
                      className:
                        "bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full",
                      children:
                        "donate" === s ? "Can donate to" : "Can receive from",
                    }),
                  }),
                ],
              }),
              i.map((e, t) => {
                let a = d.includes(e),
                  s = (2 * Math.PI) / i.length;
                return (0, r.jsx)(
                  "div",
                  {
                    className: "absolute z-10",
                    style: {
                      left: "".concat(50, "%"),
                      top: "".concat(50, "%"),
                    },
                    children: (0, r.jsx)("div", {
                      className:
                        "absolute h-1 origin-left transition-all ".concat(c(a)),
                      style: {
                        width: "".concat(40, "%"),
                        transform: "rotate(".concat(
                          (180 / Math.PI) * (s * t - Math.PI / 2),
                          "deg)"
                        ),
                        opacity: l === e || null === l ? 1 : 0.3,
                      },
                    }),
                  },
                  "line-".concat(e)
                );
              }),
              i.map((e, t) => {
                let s = ((2 * Math.PI) / i.length) * t - Math.PI / 2;
                return (0, r.jsx)(
                  "div",
                  {
                    className:
                      "absolute z-20 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                    style: {
                      left: "".concat(40 * Math.cos(s) + 50, "%"),
                      top: "".concat(40 * Math.sin(s) + 50, "%"),
                    },
                    onMouseEnter: () => o(e),
                    onMouseLeave: () => o(null),
                    onClick: () => a(e),
                    children: (0, r.jsx)("div", {
                      className:
                        "w-12 h-12 rounded-full shadow-md flex items-center justify-center font-bold cursor-pointer transition-all transform hover:scale-110 ".concat(
                          m(e)
                        ),
                      children: e,
                    }),
                  },
                  "node-".concat(e)
                );
              }),
              l &&
                l !== t &&
                (0, r.jsxs)("div", {
                  className:
                    "absolute bottom-2 left-2 bg-white p-2 rounded-lg shadow-md text-sm z-30 max-w-xs",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "font-bold mb-1 flex items-center",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-2 text-xs",
                          children: l,
                        }),
                        (0, r.jsx)("span", {
                          children: d.includes(l)
                            ? "donate" === s
                              ? "Can receive your blood"
                              : "Can donate to you"
                            : "donate" === s
                            ? "Cannot receive your blood"
                            : "Cannot donate to you",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "text-xs text-gray-600",
                      children: [eg[l].percentage, " of population"],
                    }),
                  ],
                }),
              i.map((e, t) => {
                let a = d.includes(e),
                  s = (2 * Math.PI) / i.length;
                return a && (l === e || null === l)
                  ? (0, r.jsx)(
                      "div",
                      {
                        className: "absolute z-10",
                        style: {
                          left: "".concat(50, "%"),
                          top: "".concat(50, "%"),
                        },
                        children: (0, r.jsx)("div", {
                          className:
                            "absolute h-1 origin-left animate-pulse ".concat(
                              c(a)
                            ),
                          style: {
                            width: "".concat(40, "%"),
                            transform: "rotate(".concat(
                              (180 / Math.PI) * (s * t - Math.PI / 2),
                              "deg)"
                            ),
                            opacity: 0.5,
                          },
                        }),
                      },
                      "pulse-".concat(e)
                    )
                  : null;
              }),
            ],
          });
        },
        eb = (e) => {
          let { mode: t } = e;
          return (0, r.jsx)("div", {
            className: "mx-auto mt-4 mb-2 flex justify-center",
            children: (0, r.jsxs)("div", {
              className:
                "flex bg-white border border-gray-200 p-3 rounded-xl shadow-md gap-5 text-xs sm:text-sm",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "w-3 h-3 rounded-full bg-red-600 inline-block mr-1",
                    }),
                    (0, r.jsx)("span", { children: "Selected Type" }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, r.jsx)("span", {
                      className: "w-3 h-3 rounded-full ".concat(
                        "donate" === t ? "bg-green-500" : "bg-blue-500",
                        " inline-block mr-1"
                      ),
                    }),
                    (0, r.jsx)("span", { children: "Compatible Types" }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "w-3 h-3 rounded-full bg-gray-200 inline-block mr-1",
                    }),
                    (0, r.jsx)("span", { children: "Incompatible Types" }),
                  ],
                }),
              ],
            }),
          });
        };
      var ej = a(57460),
        ev = a.n(ej),
        eN = a(87979);
      let ey = eN.fC,
        ew = eN.xz,
        ek = eN.h_,
        eT = n.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)(eN.aV, {
            className: (0, F.cn)(
              "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...s,
            ref: t,
          });
        });
      eT.displayName = eN.aV.displayName;
      let eZ = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsxs)(ek, {
          children: [
            (0, r.jsx)(eT, {}),
            (0, r.jsx)(eN.VY, {
              ref: t,
              className: (0, F.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...s,
            }),
          ],
        });
      });
      eZ.displayName = eN.VY.displayName;
      let eC = (e) => {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          className: (0, F.cn)(
            "flex flex-col space-y-2 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      eC.displayName = "AlertDialogHeader";
      let eP = (e) => {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          className: (0, F.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      eP.displayName = "AlertDialogFooter";
      let eS = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(eN.Dx, {
          ref: t,
          className: (0, F.cn)("text-lg font-semibold", a),
          ...s,
        });
      });
      eS.displayName = eN.Dx.displayName;
      let e_ = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(eN.dk, {
          ref: t,
          className: (0, F.cn)("text-sm text-muted-foreground", a),
          ...s,
        });
      });
      e_.displayName = eN.dk.displayName;
      let eA = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(eN.aU, {
          ref: t,
          className: (0, F.cn)((0, f.d)(), a),
          ...s,
        });
      });
      (eA.displayName = eN.aU.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)(eN.$j, {
            ref: t,
            className: (0, F.cn)(
              (0, f.d)({ variant: "outline" }),
              "mt-2 sm:mt-0",
              a
            ),
            ...s,
          });
        }).displayName = eN.$j.displayName);
      var eR = a(71952),
        eD = a(80434),
        eO = a(67752);
      let ez = (e) => {
          let { className: t } = e;
          return (0, r.jsx)("section", {
            className:
              "w-full flex justify-center items-center py-6 px-2 ".concat(
                null != t ? t : ""
              ),
            "aria-label": "Ecommerce Collaboration Invitation",
            children: (0, r.jsx)(b.Zb, {
              className:
                "w-full max-w-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",
              children: (0, r.jsxs)(b.aY, {
                className: "flex flex-col items-center gap-3 py-6",
                children: [
                  (0, r.jsx)("h2", {
                    className:
                      "text-xl font-bold text-center text-gray-800 dark:text-gray-100",
                    children: "\uD83D\uDE80 Let's Collaborate!",
                  }),
                  (0, r.jsxs)("p", {
                    className:
                      "text-center text-gray-600 dark:text-gray-300 text-base",
                    children: [
                      "With a proven track record in building and scaling Ecommerce solutions, I've delivered impactful projects that drive results. If you're looking for a collaborator experienced in ",
                      (0, r.jsx)("span", {
                        className: "font-semibold",
                        children: "Ecommerce tech, product, or data",
                      }),
                      ", let's connect!",
                    ],
                  }),
                  (0, r.jsx)(d(), {
                    href: "/contact",
                    children: (0, r.jsx)(f.z, {
                      variant: "default",
                      className: "mt-2",
                      children: "Reach Out",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        eI = () =>
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(ez, { className: "mb-3" }),
              (0, r.jsxs)("footer", {
                className:
                  "w-full mt-8 flex flex-col items-center text-xs text-muted-foreground py-2 border-t border-border bg-background/80 backdrop-blur-sm",
                "aria-label": "App information footer",
                children: [
                  (0, r.jsx)("span", {
                    className: "mb-1",
                    children: "Last updated July 2024",
                  }),
                  (0, r.jsx)("span", { children: "Contact for source data" }),
                ],
              }),
            ],
          }),
        eE = n.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)("div", {
            className: "relative w-full overflow-auto",
            children: (0, r.jsx)("table", {
              ref: t,
              className: (0, F.cn)("w-full caption-bottom text-sm", a),
              ...s,
            }),
          });
        });
      eE.displayName = "Table";
      let eL = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("thead", {
          ref: t,
          className: (0, F.cn)("[&_tr]:border-b", a),
          ...s,
        });
      });
      eL.displayName = "TableHeader";
      let eB = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("tbody", {
          ref: t,
          className: (0, F.cn)("[&_tr:last-child]:border-0", a),
          ...s,
        });
      });
      (eB.displayName = "TableBody"),
        (n.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)("tfoot", {
            ref: t,
            className: (0, F.cn)(
              "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
              a
            ),
            ...s,
          });
        }).displayName = "TableFooter");
      let eF = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("tr", {
          ref: t,
          className: (0, F.cn)(
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            a
          ),
          ...s,
        });
      });
      eF.displayName = "TableRow";
      let eM = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("th", {
          ref: t,
          className: (0, F.cn)(
            "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            a
          ),
          ...s,
        });
      });
      eM.displayName = "TableHead";
      let eU = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("td", {
          ref: t,
          className: (0, F.cn)(
            "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            a
          ),
          ...s,
        });
      });
      eU.displayName = "TableCell";
      let eG = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("caption", {
          ref: t,
          className: (0, F.cn)("mt-4 text-sm text-muted-foreground", a),
          ...s,
        });
      });
      eG.displayName = "TableCaption";
      var eH = a(2305),
        eY = a(25043),
        eQ = a(42154),
        eV = a(34283),
        eW = a(96910),
        eq = a(93133);
      function eK(e) {
        let {
          stateCountData: t,
          districtCountData: a,
          stateRtoAbsoluteData: s,
        } = e;
        return (0, r.jsxs)("div", {
          className: "space-y-6",
          children: [
            (0, r.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [
                (0, r.jsxs)(b.Zb, {
                  className: "md:col-span-1",
                  children: [
                    (0, r.jsxs)(b.Ol, {
                      children: [
                        (0, r.jsx)(b.ll, {
                          children: "Top 10 States by High-RTO PINs",
                        }),
                        (0, r.jsx)(b.SZ, {
                          children:
                            "States with the highest concentration of RTO-prone PIN codes",
                        }),
                      ],
                    }),
                    (0, r.jsx)(b.aY, {
                      children: (0, r.jsx)("div", {
                        className: "h-[350px]",
                        children: (0, r.jsx)(eH.h, {
                          width: "100%",
                          height: "100%",
                          children: (0, r.jsxs)(eY.v, {
                            data: t,
                            layout: "vertical",
                            margin: { top: 5, right: 30, left: 60, bottom: 5 },
                            children: [
                              (0, r.jsx)(eQ.K, { type: "number" }),
                              (0, r.jsx)(eV.B, {
                                type: "category",
                                dataKey: "name",
                                width: 130,
                                tick: { fontSize: 12 },
                              }),
                              (0, r.jsx)(eW.u, {
                                formatter: (e) => [
                                  "".concat(e, " PIN Codes"),
                                  "Count",
                                ],
                              }),
                              (0, r.jsx)(eq.$, {
                                dataKey: "value",
                                fill: "#2563eb",
                                radius: [0, 4, 4, 0],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)(b.Zb, {
                  className: "md:col-span-1",
                  children: [
                    (0, r.jsxs)(b.Ol, {
                      children: [
                        (0, r.jsx)(b.ll, {
                          children: "Top 10 Districts by High-RTO PINs",
                        }),
                        (0, r.jsx)(b.SZ, {
                          children:
                            "Districts with the highest number of RTO-prone PIN codes",
                        }),
                      ],
                    }),
                    (0, r.jsx)(b.aY, {
                      children: (0, r.jsx)("div", {
                        className: "h-[350px]",
                        children: (0, r.jsx)(eH.h, {
                          width: "100%",
                          height: "100%",
                          children: (0, r.jsxs)(eY.v, {
                            data: a,
                            layout: "vertical",
                            margin: { top: 5, right: 30, left: 80, bottom: 5 },
                            children: [
                              (0, r.jsx)(eQ.K, { type: "number" }),
                              (0, r.jsx)(eV.B, {
                                type: "category",
                                dataKey: "name",
                                width: 150,
                                tick: { fontSize: 11 },
                              }),
                              (0, r.jsx)(eW.u, {
                                formatter: (e) => [
                                  "".concat(e, " PIN Codes"),
                                  "Count",
                                ],
                              }),
                              (0, r.jsx)(eq.$, {
                                dataKey: "value",
                                fill: "#16a34a",
                                radius: [0, 4, 4, 0],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)(b.Zb, {
              className: "mt-6",
              children: [
                (0, r.jsxs)(b.Ol, {
                  children: [
                    (0, r.jsx)(b.ll, {
                      children: "States with Most High-RTO PINs",
                    }),
                    (0, r.jsx)(b.SZ, {
                      children: "Sorted by absolute count of high-RTO PINs",
                    }),
                  ],
                }),
                (0, r.jsx)(b.aY, {
                  children: (0, r.jsx)("div", {
                    className: "overflow-x-auto",
                    children: (0, r.jsxs)(eE, {
                      children: [
                        (0, r.jsx)(eL, {
                          children: (0, r.jsxs)(eF, {
                            children: [
                              (0, r.jsx)(eM, { children: "State" }),
                              (0, r.jsx)(eM, {
                                className: "text-right",
                                children: "High-RTO PINs",
                              }),
                              (0, r.jsx)(eM, {
                                className: "text-right",
                                children: "Total PINs",
                              }),
                              (0, r.jsx)(eM, {
                                className: "text-right",
                                children: "% High-RTO",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(eB, {
                          children: s.map((e) =>
                            (0, r.jsxs)(
                              eF,
                              {
                                children: [
                                  (0, r.jsx)(eU, { children: e.state }),
                                  (0, r.jsx)(eU, {
                                    className: "text-right",
                                    children: e.highRtoCount.toLocaleString(),
                                  }),
                                  (0, r.jsx)(eU, {
                                    className: "text-right",
                                    children: e.totalPincodes.toLocaleString(),
                                  }),
                                  (0, r.jsxs)(eU, {
                                    className: "text-right font-semibold",
                                    children: [e.rtoPercent.toFixed(2), "%"],
                                  }),
                                ],
                              },
                              e.state
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var eJ = a(80555),
        e$ = a(25791),
        eX = a(54487),
        e0 = a(33447);
      function e2(e) {
        let {
          regionCountData: t,
          pinRegionMap: a,
          colors: s,
          totalRows: i,
        } = e;
        return (0, r.jsxs)("div", {
          className: "space-y-6",
          children: [
            (0, r.jsxs)(b.Zb, {
              children: [
                (0, r.jsxs)(b.Ol, {
                  children: [
                    (0, r.jsx)(b.ll, {
                      children: "PIN Code Regional Distribution",
                    }),
                    (0, r.jsx)(b.SZ, {
                      children:
                        "Distribution of high-RTO PIN codes by region (based on first digit)",
                    }),
                  ],
                }),
                (0, r.jsx)(b.aY, {
                  children: (0, r.jsx)("div", {
                    className: "h-[400px]",
                    children: (0, r.jsx)(eH.h, {
                      width: "100%",
                      height: "100%",
                      children: (0, r.jsxs)(eJ.u, {
                        children: [
                          (0, r.jsx)(e$.b, {
                            data: t,
                            cx: "50%",
                            cy: "50%",
                            labelLine: !1,
                            outerRadius: 150,
                            fill: "#8884d8",
                            dataKey: "value",
                            nameKey: "name",
                            label: (e) => {
                              let { name: t, percent: a } = e;
                              return ""
                                .concat(t, " (")
                                .concat((100 * a).toFixed(1), "%)");
                            },
                            children: t.map((e, t) =>
                              (0, r.jsx)(
                                eX.b,
                                { fill: s[t % s.length] },
                                "cell-".concat(t)
                              )
                            ),
                          }),
                          (0, r.jsx)(eW.u, {
                            formatter: (e) => [
                              "".concat(e, " PIN Codes"),
                              "Count",
                            ],
                          }),
                          (0, r.jsx)(e0.D, {}),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [
                (0, r.jsxs)(b.Zb, {
                  children: [
                    (0, r.jsx)(b.Ol, {
                      children: (0, r.jsx)(b.ll, {
                        children: "Regional Analysis",
                      }),
                    }),
                    (0, r.jsxs)(b.aY, {
                      className: "space-y-4",
                      children: [
                        (0, r.jsx)("p", {
                          children:
                            "Indian PIN codes follow a pattern where the first digit typically indicates the region:",
                        }),
                        (0, r.jsx)("div", {
                          className: "space-y-2",
                          children: Object.entries(a).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsxs)(
                              "div",
                              {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, r.jsx)(R.C, {
                                    variant: "outline",
                                    className:
                                      "w-8 h-8 flex items-center justify-center text-lg font-bold",
                                    children: t,
                                  }),
                                  (0, r.jsx)("span", { children: a }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className: "mt-4 text-sm text-muted-foreground",
                          children:
                            "The distribution of high-RTO PIN codes across regions provides insights into geographical patterns of delivery challenges.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(b.Zb, {
                  children: [
                    (0, r.jsx)(b.Ol, {
                      children: (0, r.jsx)(b.ll, {
                        children: "Regional RTO Statistics",
                      }),
                    }),
                    (0, r.jsx)(b.aY, {
                      children: (0, r.jsxs)(eE, {
                        children: [
                          (0, r.jsx)(eL, {
                            children: (0, r.jsxs)(eF, {
                              children: [
                                (0, r.jsx)(eM, { children: "First Digit" }),
                                (0, r.jsx)(eM, { children: "Region" }),
                                (0, r.jsx)(eM, {
                                  className: "text-right",
                                  children: "Count",
                                }),
                                (0, r.jsx)(eM, {
                                  className: "text-right",
                                  children: "Percentage",
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(eB, {
                            children: t.map((e) =>
                              (0, r.jsxs)(
                                eF,
                                {
                                  children: [
                                    (0, r.jsx)(eU, {
                                      className: "font-medium",
                                      children: e.digit,
                                    }),
                                    (0, r.jsx)(eU, { children: a[e.digit] }),
                                    (0, r.jsx)(eU, {
                                      className: "text-right",
                                      children: e.value,
                                    }),
                                    (0, r.jsxs)(eU, {
                                      className: "text-right",
                                      children: [
                                        ((e.value / i) * 100).toFixed(1),
                                        "%",
                                      ],
                                    }),
                                  ],
                                },
                                e.digit
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function e1(e) {
        var t;
        let { stateCountData: a } = e;
        return (0, r.jsxs)(b.Zb, {
          children: [
            (0, r.jsx)(b.Ol, {
              children: (0, r.jsx)(b.ll, {
                children: "Key Insights About High-RTO PIN Codes",
              }),
            }),
            (0, r.jsxs)(b.aY, {
              className: "space-y-6",
              children: [
                (0, r.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, r.jsx)("h3", {
                      className: "text-lg font-semibold",
                      children: "Regional Hotspots",
                    }),
                    (0, r.jsx)("p", {
                      children:
                        "The data shows a significant concentration of high-RTO PIN codes in the following regions:",
                    }),
                    (0, r.jsxs)("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        (0, r.jsxs)("li", {
                          children: [
                            (0, r.jsx)("strong", {
                              children: "Rajasthan (3xx):",
                            }),
                            " With ",
                            (null ===
                              (t = a.find((e) => "RAJASTHAN" === e.name)) ||
                            void 0 === t
                              ? void 0
                              : t.value) || 0,
                            " high-RTO PIN codes, Rajasthan has the highest concentration, particularly in districts like Jaipur and Alwar.",
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          children: [
                            (0, r.jsx)("strong", {
                              children: "Uttar Pradesh (2xx):",
                            }),
                            " The second largest concentration with challenging delivery areas throughout the state.",
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          children: [
                            (0, r.jsx)("strong", { children: "Bihar (8xx):" }),
                            " A significant number of high-RTO PIN codes, potentially due to infrastructure challenges.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, r.jsx)("h3", {
                      className: "text-lg font-semibold",
                      children: "Delivery Implications",
                    }),
                    (0, r.jsx)("p", {
                      children:
                        "High RTO rates have several implications for e-commerce and logistics operations:",
                    }),
                    (0, r.jsxs)("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        (0, r.jsx)("li", {
                          children:
                            "Increased operational costs due to return logistics",
                        }),
                        (0, r.jsx)("li", {
                          children:
                            "Inventory management challenges from delayed returns",
                        }),
                        (0, r.jsx)("li", {
                          children:
                            "Customer experience impacts from failed deliveries",
                        }),
                        (0, r.jsx)("li", {
                          children:
                            "Cash flow disruption, especially for COD orders",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, r.jsx)("h3", {
                      className: "text-lg font-semibold",
                      children: "Recommendations",
                    }),
                    (0, r.jsx)("p", {
                      children:
                        "Based on the high-RTO PIN code analysis, consider these strategies:",
                    }),
                    (0, r.jsxs)("ul", {
                      className: "list-disc pl-6 space-y-2",
                      children: [
                        (0, r.jsx)("li", {
                          children:
                            "Implement additional address verification for orders to these PIN codes",
                        }),
                        (0, r.jsx)("li", {
                          children:
                            "Consider alternative delivery models such as pickup points",
                        }),
                        (0, r.jsx)("li", {
                          children:
                            "Adjust shipping policies or pricing for high-RTO areas",
                        }),
                        (0, r.jsx)("li", {
                          children:
                            "Partner with specialized last-mile delivery services for these regions",
                        }),
                        (0, r.jsx)("li", {
                          children:
                            "Use pre-delivery confirmation calls to reduce rejection rates",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var e5 = a(84672);
      function e3(e) {
        let {
          filter: t,
          setFilter: a,
          stateFilter: s,
          setStateFilter: i,
          uniqueStates: n,
          handleDownload: l,
          sortConfig: o,
          handleSort: d,
          filteredData: c,
        } = e;
        return (0, r.jsxs)("div", {
          className: "space-y-6",
          children: [
            (0, r.jsxs)("div", {
              className:
                "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row gap-4 items-start md:items-center w-full",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "relative w-full md:w-64",
                      children: [
                        (0, r.jsx)(e5.Z, {
                          className:
                            "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground",
                        }),
                        (0, r.jsx)(j.I, {
                          type: "search",
                          placeholder: "Search PIN codes...",
                          className: "w-full pl-8",
                          value: t,
                          onChange: (e) => a(e.target.value),
                        }),
                      ],
                    }),
                    (0, r.jsxs)(N.Ph, {
                      value: s,
                      onValueChange: i,
                      children: [
                        (0, r.jsx)(N.i4, {
                          className: "w-full md:w-56",
                          children: (0, r.jsx)(N.ki, {
                            placeholder: "Filter by state",
                          }),
                        }),
                        (0, r.jsx)(N.Bw, {
                          children: (0, r.jsxs)(N.DI, {
                            children: [
                              (0, r.jsx)(N.n5, { children: "All States" }),
                              n.map((e) =>
                                (0, r.jsx)(N.Ql, { value: e, children: e }, e)
                              ),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "flex items-center gap-2",
                  children: (0, r.jsxs)(f.z, {
                    variant: "outline",
                    size: "sm",
                    onClick: l,
                    children: [
                      (0, r.jsx)(J.Z, { className: "w-4 h-4 mr-2" }),
                      "Export CSV",
                    ],
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "overflow-x-auto",
              children: (0, r.jsxs)(eE, {
                children: [
                  (0, r.jsx)(eL, {
                    children: (0, r.jsxs)(eF, {
                      children: [
                        (0, r.jsxs)(eM, {
                          className: "cursor-pointer hover:bg-muted/50",
                          onClick: () => d("pincode"),
                          children: [
                            "PIN Code ",
                            "pincode" === o.key &&
                              (0, r.jsx)("span", {
                                children:
                                  "ascending" === o.direction ? "↑" : "↓",
                              }),
                          ],
                        }),
                        (0, r.jsxs)(eM, {
                          className: "cursor-pointer hover:bg-muted/50",
                          onClick: () => d("district"),
                          children: [
                            "District ",
                            "district" === o.key &&
                              (0, r.jsx)("span", {
                                children:
                                  "ascending" === o.direction ? "↑" : "↓",
                              }),
                          ],
                        }),
                        (0, r.jsxs)(eM, {
                          className: "cursor-pointer hover:bg-muted/50",
                          onClick: () => d("state"),
                          children: [
                            "State ",
                            "state" === o.key &&
                              (0, r.jsx)("span", {
                                children:
                                  "ascending" === o.direction ? "↑" : "↓",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(eB, {
                    children: c
                      .slice(0, 100)
                      .map((e, t) =>
                        (0, r.jsxs)(
                          eF,
                          {
                            children: [
                              (0, r.jsx)(eU, {
                                className: "font-mono",
                                children: e.pincode,
                              }),
                              (0, r.jsx)(eU, { children: e.district }),
                              (0, r.jsx)(eU, { children: e.state }),
                            ],
                          },
                          "".concat(e.pincode, "-").concat(t)
                        )
                      ),
                  }),
                  (0, r.jsx)(eG, {
                    children:
                      c.length > 100
                        ? "Showing 100 of ".concat(
                            c.length,
                            " results. Refine your search to see more specific results."
                          )
                        : "Showing ".concat(c.length, " results."),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let e4 = {
          1: "Delhi, Haryana, Punjab, HP",
          2: "UP, Uttarakhand",
          3: "Rajasthan, Gujarat",
          4: "MP, Chhattisgarh",
          5: "AP, Telangana",
          6: "Kerala, TN, Lakshadweep",
          7: "WB, Odisha, NE States",
          8: "Bihar, Jharkhand",
        },
        e6 = [
          {
            state: "andaman & nicobar islands",
            population: 403e3,
            pincodes: 102,
          },
          { state: "andhra pradesh", population: 53156e3, pincodes: 10334 },
          { state: "arunachal pradesh", population: 1562e3, pincodes: 295 },
          { state: "assam", population: 35713e3, pincodes: 4010 },
          { state: "bihar", population: 126756e3, pincodes: 9060 },
          { state: "chandigarh", population: 1231e3, pincodes: 52 },
          { state: "chhattisgarh", population: 3018e4, pincodes: 3150 },
          {
            state: "dadra & nagar haveli and daman & diu",
            population: 1263e3,
            pincodes: 59,
          },
          { state: "delhi", population: 21359e3, pincodes: 545 },
          { state: "goa", population: 1575e3, pincodes: 258 },
          { state: "gujarat", population: 71507e3, pincodes: 8937 },
          { state: "haryana", population: 30209e3, pincodes: 2688 },
          { state: "himachal pradesh", population: 7468e3, pincodes: 2781 },
          { state: "jammu & kashmir", population: 13603e3, pincodes: 1684 },
          { state: "jharkhand", population: 39466e3, pincodes: 3097 },
          { state: "karnataka", population: 67692e3, pincodes: 9682 },
          { state: "kerala", population: 35776e3, pincodes: 5058 },
          { state: "lakshadweep", population: 69e3, pincodes: 10 },
          { state: "madhya pradesh", population: 86579e3, pincodes: 8311 },
          { state: "maharashtra", population: 126385e3, pincodes: 12610 },
          { state: "manipur", population: 3223e3, pincodes: 699 },
          { state: "meghalaya", population: 3349e3, pincodes: 475 },
          { state: "mizoram", population: 1238e3, pincodes: 412 },
          { state: "nagaland", population: 2233e3, pincodes: 331 },
          { state: "odisha", population: 46276e3, pincodes: 8166 },
          { state: "puducherry", population: 1646e3, pincodes: 93 },
          { state: "punjab", population: 3073e4, pincodes: 3809 },
          { state: "rajasthan", population: 81025e3, pincodes: 10334 },
          { state: "sikkim", population: 689e3, pincodes: 211 },
          { state: "tamil nadu", population: 7686e4, pincodes: 11870 },
          { state: "telangana", population: 3809e4, pincodes: 5808 },
          { state: "tripura", population: 4147e3, pincodes: 708 },
          { state: "uttar pradesh", population: 235687e3, pincodes: 17674 },
          { state: "uttarakhand", population: 11637e3, pincodes: 2718 },
          { state: "west bengal", population: 99084e3, pincodes: 8726 },
        ],
        e8 = [
          "#2563eb",
          "#16a34a",
          "#dc2626",
          "#ca8a04",
          "#7c3aed",
          "#0891b2",
          "#e11d48",
          "#c026d3",
          "#059669",
          "#ea580c",
        ];
      var e7 = a(25875),
        e9 = a(81593),
        te = a(44954),
        tt = a(24487),
        ta = a(33098),
        ts = a(78088),
        ti = a(94829);
      let tr = [
          {
            id: "australia",
            name: "Australian Grand Prix",
            circuit: "Albert Park Grand Prix Circuit",
            location: "Melbourne, Australia",
            date: "2025-03-16T04:00:00Z",
            sessions: [
              {
                name: "Practice 1",
                time: "2025-03-14T01:30:00Z",
                endTime: "2025-03-14T02:30:00Z",
              },
              {
                name: "Practice 2",
                time: "2025-03-14T05:00:00Z",
                endTime: "2025-03-14T06:00:00Z",
              },
              {
                name: "Practice 3",
                time: "2025-03-15T01:30:00Z",
                endTime: "2025-03-15T02:30:00Z",
              },
              {
                name: "Qualifying",
                time: "2025-03-15T05:00:00Z",
                endTime: "2025-03-15T06:00:00Z",
              },
              { name: "Race", time: "2025-03-16T04:00:00Z" },
            ],
            results: [
              {
                position: 1,
                driver_id: "lando",
                team_id: "mclaren",
                points: 25,
              },
              {
                position: 2,
                driver_id: "max",
                team_id: "red_bull_racing",
                points: 18,
              },
              {
                position: 3,
                driver_id: "george",
                team_id: "mercedes",
                points: 15,
              },
            ],
          },
          {
            id: "china",
            name: "Chinese Grand Prix",
            circuit: "Shanghai International Circuit",
            location: "Shanghai, China",
            date: "2025-03-23T07:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-03-21T03:30:00Z" },
              { name: "Practice 2", time: "2025-03-21T07:00:00Z" },
              { name: "Practice 3", time: "2025-03-22T03:30:00Z" },
              { name: "Qualifying", time: "2025-03-22T07:00:00Z" },
              { name: "Race", time: "2025-03-23T07:00:00Z" },
            ],
            results: [
              {
                position: 1,
                driver_id: "oscar",
                team_id: "mclaren",
                points: 25,
              },
              {
                position: 2,
                driver_id: "lando",
                team_id: "mclaren",
                points: 18,
              },
              {
                position: 3,
                driver_id: "george",
                team_id: "mercedes",
                points: 15,
              },
            ],
          },
          {
            id: "japan",
            name: "Japanese Grand Prix",
            circuit: "Suzuka Circuit",
            location: "Suzuka, Japan",
            date: "2025-04-06T05:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-04-04T02:30:00Z" },
              { name: "Practice 2", time: "2025-04-04T06:00:00Z" },
              { name: "Practice 3", time: "2025-04-05T02:30:00Z" },
              { name: "Qualifying", time: "2025-04-05T06:00:00Z" },
              { name: "Race", time: "2025-04-06T05:00:00Z" },
            ],
            results: [
              {
                position: 1,
                driver_id: "max",
                team_id: "red_bull_racing",
                points: 25,
              },
              {
                position: 2,
                driver_id: "lando",
                team_id: "mclaren",
                points: 18,
              },
              {
                position: 3,
                driver_id: "oscar",
                team_id: "mclaren",
                points: 15,
              },
            ],
          },
          {
            id: "bahrain",
            name: "Bahrain Grand Prix",
            circuit: "Bahrain International Circuit",
            location: "Sakhir, Bahrain",
            date: "2025-04-13T15:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-04-11T11:30:00Z" },
              { name: "Practice 2", time: "2025-04-11T15:00:00Z" },
              { name: "Practice 3", time: "2025-04-12T11:30:00Z" },
              { name: "Qualifying", time: "2025-04-12T15:00:00Z" },
              { name: "Race", time: "2025-04-13T15:00:00Z" },
            ],
            results: [
              {
                position: 1,
                driver_id: "oscar",
                team_id: "mclaren",
                points: 25,
              },
              {
                position: 2,
                driver_id: "george",
                team_id: "mercedes",
                points: 18,
              },
              {
                position: 3,
                driver_id: "lando",
                team_id: "mclaren",
                points: 15,
              },
            ],
          },
          {
            id: "saudi_arabia",
            name: "Saudi Arabian Grand Prix",
            circuit: "Jeddah Corniche Circuit",
            location: "Jeddah, Saudi Arabia",
            date: "2025-04-20T17:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-04-18T13:30:00Z" },
              { name: "Practice 2", time: "2025-04-18T17:00:00Z" },
              { name: "Practice 3", time: "2025-04-19T13:30:00Z" },
              { name: "Qualifying", time: "2025-04-19T17:00:00Z" },
              { name: "Race", time: "2025-04-20T17:00:00Z" },
            ],
            results: [
              {
                position: 1,
                driver_id: "oscar",
                team_id: "mclaren",
                points: 25,
              },
              {
                position: 2,
                driver_id: "max",
                team_id: "red_bull_racing",
                points: 18,
              },
              {
                position: 3,
                driver_id: "charles",
                team_id: "ferrari",
                points: 15,
              },
            ],
          },
          {
            id: "miami",
            name: "Miami Grand Prix",
            circuit: "Miami International Autodrome",
            location: "Miami, United States",
            date: "2025-05-04T20:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-05-02T15:30:00Z" },
              { name: "Practice 2", time: "2025-05-02T19:00:00Z" },
              { name: "Practice 3", time: "2025-05-03T15:30:00Z" },
              { name: "Qualifying", time: "2025-05-03T19:00:00Z" },
              { name: "Race", time: "2025-05-04T20:00:00Z" },
            ],
            results: [
              {
                position: 1,
                driver_id: "oscar",
                team_id: "mclaren",
                points: 25,
              },
              {
                position: 2,
                driver_id: "lando",
                team_id: "mclaren",
                points: 18,
              },
              {
                position: 3,
                driver_id: "george",
                team_id: "mercedes",
                points: 15,
              },
            ],
          },
          {
            id: "emilia_romagna",
            name: "Emilia-Romagna Grand Prix",
            circuit: "Autodromo Internazionale Enzo e Dino Ferrari",
            location: "Imola, Italy",
            date: "2025-05-18T13:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-05-16T11:30:00Z" },
              { name: "Practice 2", time: "2025-05-16T15:00:00Z" },
              { name: "Practice 3", time: "2025-05-17T10:00:00Z" },
              { name: "Qualifying", time: "2025-05-17T14:00:00Z" },
              { name: "Race", time: "2025-05-18T13:00:00Z" },
            ],
            results: [
              {
                position: 1,
                driver_id: "max",
                team_id: "red_bull_racing",
                points: 25,
              },
              {
                position: 2,
                driver_id: "lando",
                team_id: "mclaren",
                points: 18,
              },
              {
                position: 3,
                driver_id: "oscar",
                team_id: "mclaren",
                points: 15,
              },
            ],
          },
          {
            id: "monaco",
            name: "Monaco Grand Prix",
            circuit: "Circuit de Monaco",
            location: "Monte Carlo, Monaco",
            date: "2025-05-25T13:00:00Z",
            sessions: [
              {
                name: "Practice 1",
                time: "2025-05-23T11:30:00Z",
                endTime: "2025-05-23T12:30:00Z",
              },
              {
                name: "Practice 2",
                time: "2025-05-23T15:00:00Z",
                endTime: "2025-05-23T16:00:00Z",
              },
              {
                name: "Practice 3",
                time: "2025-05-24T10:00:00Z",
                endTime: "2025-05-24T11:00:00Z",
              },
              {
                name: "Qualifying",
                time: "2025-05-24T14:00:00Z",
                endTime: "2025-05-24T15:00:00Z",
              },
              { name: "Race", time: "2025-05-25T13:00:00Z" },
            ],
            results: [],
          },
          {
            id: "spain",
            name: "Spanish Grand Prix",
            circuit: "Circuit de Barcelona-Catalunya",
            location: "Montmel\xf3, Spain",
            date: "2025-06-01T13:00:00Z",
            sessions: [
              {
                name: "Practice 1",
                time: "2025-05-30T11:30:00Z",
                endTime: "2025-05-30T12:30:00Z",
              },
              {
                name: "Practice 2",
                time: "2025-05-30T15:00:00Z",
                endTime: "2025-05-30T16:00:00Z",
              },
              {
                name: "Practice 3",
                time: "2025-05-31T11:30:00Z",
                endTime: "2025-05-31T12:30:00Z",
              },
              {
                name: "Qualifying",
                time: "2025-05-31T14:00:00Z",
                endTime: "2025-05-31T15:00:00Z",
              },
              { name: "Race", time: "2025-06-01T13:00:00Z" },
            ],
            results: [],
          },
          {
            id: "canada",
            name: "Canadian Grand Prix",
            circuit: "Circuit Gilles-Villeneuve",
            location: "Montr\xe9al, Canada",
            date: "2025-06-15T18:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-06-13T16:30:00Z" },
              { name: "Practice 2", time: "2025-06-13T20:00:00Z" },
              { name: "Practice 3", time: "2025-06-14T16:30:00Z" },
              { name: "Qualifying", time: "2025-06-14T20:00:00Z" },
              { name: "Race", time: "2025-06-15T18:00:00Z" },
            ],
            results: [],
          },
          {
            id: "austria",
            name: "Austrian Grand Prix",
            circuit: "Red Bull Ring",
            location: "Spielberg, Austria",
            date: "2025-06-29T13:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-06-27T11:30:00Z" },
              { name: "Practice 2", time: "2025-06-27T15:00:00Z" },
              { name: "Practice 3", time: "2025-06-28T11:30:00Z" },
              { name: "Qualifying", time: "2025-06-28T14:00:00Z" },
              { name: "Race", time: "2025-06-29T13:00:00Z" },
            ],
            results: [],
          },
          {
            id: "great_britain",
            name: "British Grand Prix",
            circuit: "Silverstone Circuit",
            location: "Silverstone, United Kingdom",
            date: "2025-07-06T13:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-07-04T11:30:00Z" },
              { name: "Practice 2", time: "2025-07-04T15:00:00Z" },
              { name: "Practice 3", time: "2025-07-05T11:30:00Z" },
              { name: "Qualifying", time: "2025-07-05T14:00:00Z" },
              { name: "Race", time: "2025-07-06T13:00:00Z" },
            ],
            results: [],
          },
          {
            id: "belgium",
            name: "Belgian Grand Prix",
            circuit: "Circuit de Spa-Francorchamps",
            location: "Stavelot, Belgium",
            date: "2025-07-27T13:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-07-25T11:30:00Z" },
              { name: "Practice 2", time: "2025-07-25T15:00:00Z" },
              { name: "Practice 3", time: "2025-07-26T11:30:00Z" },
              { name: "Qualifying", time: "2025-07-26T14:00:00Z" },
              { name: "Race", time: "2025-07-27T13:00:00Z" },
            ],
            results: [],
          },
          {
            id: "hungary",
            name: "Hungarian Grand Prix",
            circuit: "Hungaroring",
            location: "Mogyor\xf3d, Hungary",
            date: "2025-08-03T13:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-08-01T11:30:00Z" },
              { name: "Practice 2", time: "2025-08-01T15:00:00Z" },
              { name: "Practice 3", time: "2025-08-02T11:30:00Z" },
              { name: "Qualifying", time: "2025-08-02T14:00:00Z" },
              { name: "Race", time: "2025-08-03T13:00:00Z" },
            ],
            results: [],
          },
          {
            id: "netherlands",
            name: "Dutch Grand Prix",
            circuit: "Circuit Zandvoort",
            location: "Zandvoort, Netherlands",
            date: "2025-08-31T13:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-08-29T11:30:00Z" },
              { name: "Practice 2", time: "2025-08-29T15:00:00Z" },
              { name: "Practice 3", time: "2025-08-30T11:30:00Z" },
              { name: "Qualifying", time: "2025-08-30T14:00:00Z" },
              { name: "Race", time: "2025-08-31T13:00:00Z" },
            ],
            results: [],
          },
          {
            id: "italy",
            name: "Italian Grand Prix",
            circuit: "Autodromo Nazionale Monza",
            location: "Monza, Italy",
            date: "2025-09-07T13:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-09-05T11:30:00Z" },
              { name: "Practice 2", time: "2025-09-05T15:00:00Z" },
              { name: "Practice 3", time: "2025-09-06T11:30:00Z" },
              { name: "Qualifying", time: "2025-09-06T14:00:00Z" },
              { name: "Race", time: "2025-09-07T13:00:00Z" },
            ],
            results: [],
          },
          {
            id: "azerbaijan",
            name: "Azerbaijan Grand Prix",
            circuit: "Baku City Circuit",
            location: "Baku, Azerbaijan",
            date: "2025-09-21T11:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-09-19T09:30:00Z" },
              { name: "Practice 2", time: "2025-09-19T13:00:00Z" },
              { name: "Practice 3", time: "2025-09-20T09:30:00Z" },
              { name: "Qualifying", time: "2025-09-20T12:00:00Z" },
              { name: "Race", time: "2025-09-21T11:00:00Z" },
            ],
            results: [],
          },
          {
            id: "singapore",
            name: "Singapore Grand Prix",
            circuit: "Marina Bay Street Circuit",
            location: "Singapore, Singapore",
            date: "2025-10-05T12:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-10-03T10:00:00Z" },
              { name: "Practice 2", time: "2025-10-03T13:30:00Z" },
              { name: "Practice 3", time: "2025-10-04T10:00:00Z" },
              { name: "Qualifying", time: "2025-10-04T13:00:00Z" },
              { name: "Race", time: "2025-10-05T12:00:00Z" },
            ],
            results: [],
          },
          {
            id: "united_states",
            name: "United States Grand Prix",
            circuit: "Circuit of the Americas",
            location: "Austin, United States",
            date: "2025-10-19T19:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-10-17T17:00:00Z" },
              { name: "Practice 2", time: "2025-10-17T20:30:00Z" },
              { name: "Practice 3", time: "2025-10-18T17:00:00Z" },
              { name: "Qualifying", time: "2025-10-18T21:00:00Z" },
              { name: "Race", time: "2025-10-19T19:00:00Z" },
            ],
            results: [],
          },
          {
            id: "mexico",
            name: "Mexican Grand Prix",
            circuit: "Aut\xf3dromo Hermanos Rodr\xedguez",
            location: "Mexico City, Mexico",
            date: "2025-10-26T20:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-10-24T18:00:00Z" },
              { name: "Practice 2", time: "2025-10-24T21:30:00Z" },
              { name: "Practice 3", time: "2025-10-25T18:00:00Z" },
              { name: "Qualifying", time: "2025-10-25T22:00:00Z" },
              { name: "Race", time: "2025-10-26T20:00:00Z" },
            ],
            results: [],
          },
          {
            id: "brazil",
            name: "S\xe3o Paulo Grand Prix",
            circuit: "Aut\xf3dromo Jos\xe9 Carlos Pace",
            location: "S\xe3o Paulo, Brazil",
            date: "2025-11-09T18:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-11-07T15:30:00Z" },
              { name: "Practice 2", time: "2025-11-07T19:00:00Z" },
              { name: "Practice 3", time: "2025-11-08T15:30:00Z" },
              { name: "Qualifying", time: "2025-11-08T19:00:00Z" },
              { name: "Race", time: "2025-11-09T18:00:00Z" },
            ],
            results: [],
          },
          {
            id: "las_vegas",
            name: "Las Vegas Grand Prix",
            circuit: "Las Vegas Strip Circuit",
            location: "Las Vegas, United States",
            date: "2025-11-22T09:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-11-20T05:30:00Z" },
              { name: "Practice 2", time: "2025-11-20T09:00:00Z" },
              { name: "Practice 3", time: "2025-11-21T05:30:00Z" },
              { name: "Qualifying", time: "2025-11-21T09:00:00Z" },
              { name: "Race", time: "2025-11-22T09:00:00Z" },
            ],
            results: [],
          },
          {
            id: "qatar",
            name: "Qatar Grand Prix",
            circuit: "Lusail International Circuit",
            location: "Lusail, Qatar",
            date: "2025-11-30T16:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-11-28T14:00:00Z" },
              { name: "Practice 2", time: "2025-11-28T17:30:00Z" },
              { name: "Practice 3", time: "2025-11-29T14:00:00Z" },
              { name: "Qualifying", time: "2025-11-29T17:00:00Z" },
              { name: "Race", time: "2025-11-30T16:00:00Z" },
            ],
            results: [],
          },
          {
            id: "abu_dhabi",
            name: "Abu Dhabi Grand Prix",
            circuit: "Yas Marina Circuit",
            location: "Abu Dhabi, United Arab Emirates",
            date: "2025-12-07T13:00:00Z",
            sessions: [
              { name: "Practice 1", time: "2025-12-05T11:30:00Z" },
              { name: "Practice 2", time: "2025-12-05T15:00:00Z" },
              { name: "Practice 3", time: "2025-12-06T11:30:00Z" },
              { name: "Qualifying", time: "2025-12-06T14:00:00Z" },
              { name: "Race", time: "2025-12-07T13:00:00Z" },
            ],
            results: [],
          },
        ],
        tn = [
          { id: "oscar", name: "Oscar Piastri", team_id: "mclaren" },
          { id: "lando", name: "Lando Norris", team_id: "mclaren" },
          { id: "max", name: "Max Verstappen", team_id: "red_bull_racing" },
          { id: "george", name: "George Russell", team_id: "mercedes" },
          { id: "charles", name: "Charles Leclerc", team_id: "ferrari" },
          { id: "lewis", name: "Lewis Hamilton", team_id: "ferrari" },
          {
            id: "andrea",
            name: "Andrea Kimi Antonelli",
            team_id: "mercedes",
            rookie: !0,
          },
          { id: "alexander", name: "Alexander Albon", team_id: "williams" },
          { id: "esteban", name: "Esteban Ocon", team_id: "haas" },
          { id: "lance", name: "Lance Stroll", team_id: "aston_martin" },
          { id: "carlos", name: "Carlos Sainz", team_id: "williams" },
          { id: "yuki", name: "Yuki Tsunoda", team_id: "red_bull_racing" },
          { id: "pierre", name: "Pierre Gasly", team_id: "alpine" },
          {
            id: "isack",
            name: "Isack Hadjar",
            team_id: "racing_bulls",
            rookie: !0,
          },
          { id: "nico", name: "Nico H\xfclkenberg", team_id: "sauber" },
          { id: "oliver", name: "Oliver Bearman", team_id: "haas", rookie: !0 },
          { id: "fernando", name: "Fernando Alonso", team_id: "aston_martin" },
          {
            id: "liam",
            name: "Liam Lawson",
            team_id: "racing_bulls",
            rookie: !0,
          },
          { id: "jack", name: "Jack Doohan", team_id: "alpine", rookie: !0 },
          {
            id: "gabriel",
            name: "Gabriel Bortoleto",
            team_id: "sauber",
            rookie: !0,
          },
          {
            id: "franco",
            name: "Franco Colapinto",
            team_id: "alpine",
            rookie: !0,
          },
        ],
        tl = [
          { id: "mclaren", name: "McLaren" },
          { id: "mercedes", name: "Mercedes" },
          { id: "red_bull_racing", name: "Red Bull Racing" },
          { id: "ferrari", name: "Ferrari" },
          { id: "williams", name: "Williams" },
          { id: "haas", name: "Haas" },
          { id: "aston_martin", name: "Aston Martin" },
          { id: "racing_bulls", name: "Racing Bulls" },
          { id: "alpine", name: "Alpine" },
          { id: "sauber", name: "Sauber" },
        ],
        to = [
          { position: 1, driver_id: "oscar", points: 146 },
          { position: 2, driver_id: "lando", points: 133 },
          { position: 3, driver_id: "max", points: 124 },
          { position: 4, driver_id: "george", points: 99 },
          { position: 5, driver_id: "charles", points: 61 },
          { position: 6, driver_id: "lewis", points: 53 },
          { position: 7, driver_id: "andrea", points: 48 },
          { position: 8, driver_id: "alexander", points: 40 },
          { position: 9, driver_id: "esteban", points: 14 },
          { position: 10, driver_id: "lance", points: 14 },
          { position: 11, driver_id: "carlos", points: 11 },
          { position: 12, driver_id: "yuki", points: 10 },
          { position: 13, driver_id: "pierre", points: 7 },
          { position: 14, driver_id: "isack", points: 7 },
          { position: 15, driver_id: "nico", points: 6 },
          { position: 16, driver_id: "oliver", points: 6 },
          { position: 17, driver_id: "fernando", points: 0 },
          { position: 18, driver_id: "liam", points: 0 },
          { position: 19, driver_id: "jack", points: 0 },
          { position: 20, driver_id: "gabriel", points: 0 },
          { position: 21, driver_id: "franco", points: 0 },
        ].map((e) => {
          let t = tn.find((t) => t.id === e.driver_id),
            a = tl.find((e) => e.id === (null == t ? void 0 : t.team_id));
          return t && a ? { ...e, driver: t, team: a } : null;
        }),
        td = [
          { position: 1, constructor_id: "mclaren", points: 279 },
          { position: 2, constructor_id: "mercedes", points: 147 },
          { position: 3, constructor_id: "red_bull_racing", points: 131 },
          { position: 4, constructor_id: "ferrari", points: 114 },
          { position: 5, constructor_id: "williams", points: 51 },
          { position: 6, constructor_id: "haas", points: 20 },
          { position: 7, constructor_id: "aston_martin", points: 14 },
          { position: 8, constructor_id: "racing_bulls", points: 7 },
          { position: 9, constructor_id: "alpine", points: 7 },
          { position: 10, constructor_id: "sauber", points: 6 },
        ].map((e) => {
          let t = tl.find((t) => t.id === e.constructor_id);
          return t ? { ...e, team: t } : null;
        }),
        tc = {
          red_bull_racing: "bg-blue-600",
          mclaren: "bg-orange-500",
          ferrari: "bg-red-600",
          mercedes: "bg-teal-500",
          aston_martin: "bg-green-600",
          racing_bulls: "bg-blue-400",
          haas: "bg-gray-600",
          alpine: "bg-pink-600",
          williams: "bg-blue-700",
          sauber: "bg-red-300",
        };
      var tm = () =>
          (0, r.jsxs)("header", {
            className:
              "flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 bg-[#e10600] p-2 rounded-sm text-white gap-2 sm:gap-0",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto order-2 sm:order-1",
                children: [
                  (0, r.jsx)("a", {
                    href: "https://f1tv.formula1.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-semibold transition",
                    children: "F1TV",
                  }),
                  (0, r.jsx)("a", {
                    href: "https://www.fancode.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-semibold transition",
                    children: "FanCode",
                  }),
                ],
              }),
              (0, r.jsx)("h1", {
                className:
                  "text-2xl sm:text-3xl font-bold italic px-3 text-center w-full order-1 sm:order-2",
                children: "F1 Dashboard",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex items-center justify-center w-full sm:w-auto order-3",
                children: (0, r.jsx)("img", {
                  src: "https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg",
                  alt: "F1 Logo",
                  className:
                    "h-8 w-auto ml-0 sm:ml-2 hidden xs:inline-block sm:inline-block",
                  style: { filter: "invert(1)" },
                }),
              }),
            ],
          }),
        tx = a(62469);
      function th(e) {
        let { driverStandings: t } = e,
          [a, s] = (0, n.useState)(!1),
          i = t.length > 10,
          l = a ? t : t.slice(0, 10);
        return (0, r.jsx)(b.Zb, {
          children: (0, r.jsxs)(b.aY, {
            className: "p-0",
            children: [
              (0, r.jsxs)(eE, {
                children: [
                  (0, r.jsx)(eL, {
                    children: (0, r.jsxs)(eF, {
                      children: [
                        (0, r.jsx)(eM, { className: "w-16", children: "Pos" }),
                        (0, r.jsx)(eM, { children: "Driver" }),
                        (0, r.jsx)(eM, { children: "Team" }),
                        (0, r.jsx)(eM, {
                          className: "text-right",
                          children: "Points",
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(eB, {
                    children: l.map((e) => {
                      let t = e.team.name;
                      return (0, r.jsxs)(
                        eF,
                        {
                          children: [
                            (0, r.jsx)(eU, {
                              className: "font-medium",
                              children: e.position,
                            }),
                            (0, r.jsx)(eU, {
                              className: "font-medium",
                              children: e.driver.name,
                            }),
                            (0, r.jsx)(eU, {
                              children: (0, r.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  (0, r.jsx)("span", {
                                    className:
                                      "inline-block w-3 h-3 rounded-full mr-2 ".concat(
                                        tc[e.driver.team_id] || "bg-slate-400"
                                      ),
                                  }),
                                  t,
                                ],
                              }),
                            }),
                            (0, r.jsx)(eU, {
                              className: "text-right",
                              children: e.points,
                            }),
                          ],
                        },
                        e.position
                      );
                    }),
                  }),
                ],
              }),
              i &&
                (0, r.jsx)("div", {
                  className: "flex justify-center py-6",
                  children: (0, r.jsx)(f.z, {
                    type: "button",
                    variant: "secondary",
                    className:
                      "gap-2 px-6 py-2 rounded-full shadow-sm border border-border/60 hover:shadow-lg transition-all duration-200 font-semibold text-base",
                    onClick: () => s((e) => !e),
                    "aria-expanded": a,
                    children: a
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            "Show Less ",
                            (0, r.jsx)(tx.g8U, { className: "w-5 h-5" }),
                          ],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                          children: [
                            "Show More",
                            (0, r.jsx)(tx.v4q, { className: "w-5 h-5" }),
                          ],
                        }),
                  }),
                }),
            ],
          }),
        });
      }
      let tu = (e) => e.split(" ").reverse()[0] || e;
      var tp = (e) => {
        let { driverA: t, driverB: a, totalPoints: s, teamColor: i } = e,
          n = "".concat(i, " opacity-40");
        if (!t || !a) return null;
        let l =
            s > 0 ? Math.round(((null == t ? void 0 : t.points) / s) * 100) : 0,
          o = s > 0 ? 100 - l : 0;
        return (0, r.jsxs)("div", {
          className: "w-full flex flex-col gap-1",
          children: [
            (0, r.jsxs)("div", {
              className:
                "flex flex-row justify-between text-xs font-medium mb-1",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex-1 text-left",
                  children: [
                    tu(null == t ? void 0 : t.driver.name),
                    " (",
                    null == t ? void 0 : t.points,
                    ")",
                    (0, r.jsxs)("span", {
                      className: "ml-1 text-gray-500 dark:text-gray-400",
                      children: [l, "%"],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex-1 text-right",
                  children: [
                    tu(null == a ? void 0 : a.driver.name),
                    " (",
                    null == a ? void 0 : a.points,
                    ")",
                    (0, r.jsxs)("span", {
                      className: "ml-1 text-gray-500 dark:text-gray-400",
                      children: [o, "%"],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "relative w-full flex items-center",
              children: (0, r.jsxs)("div", {
                className:
                  "w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full shadow-inner flex overflow-hidden",
                children: [
                  (0, r.jsx)("div", {
                    className: (0, F.cn)(
                      "h-full rounded-l-full transition-all duration-300 flex items-center justify-end",
                      i
                    ),
                    style: { width: "".concat(l, "%") },
                    title: "".concat(t.driver.name, ": ").concat(t.points),
                    children:
                      l > 0 &&
                      o > 0 &&
                      (0, r.jsx)("div", {
                        className: "h-4 w-1 bg-white/80 dark:bg-black/40",
                      }),
                  }),
                  (0, r.jsx)("div", {
                    className: (0, F.cn)(
                      "h-full rounded-r-full transition-all duration-300 flex items-center",
                      n
                    ),
                    style: { width: "".concat(o, "%") },
                    title: "".concat(a.driver.name, ": ").concat(a.points),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      function tg(e) {
        let { constructorStandings: t, driverStandings: a } = e;
        return (0, r.jsx)(b.Zb, {
          children: (0, r.jsx)(b.aY, {
            className: "p-0",
            children: (0, r.jsxs)(eE, {
              children: [
                (0, r.jsx)(eL, {
                  children: (0, r.jsxs)(eF, {
                    children: [
                      (0, r.jsx)(eM, { className: "w-16", children: "Pos" }),
                      (0, r.jsx)(eM, { children: "Team" }),
                      (0, r.jsx)(eM, {
                        className: "text-right",
                        children: "Points",
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(eB, {
                  children: t.map((e) => {
                    let t = a
                      .filter((t) => t.team.id === e.constructor_id)
                      .sort((e, t) => t.points - e.points);
                    if (t.length < 2) return null;
                    let s = tc[e.constructor_id] || "bg-slate-400",
                      i = t[0],
                      n = t[1];
                    return (0, r.jsxs)(
                      eF,
                      {
                        children: [
                          (0, r.jsx)(eU, {
                            className: "font-medium",
                            children: e.position,
                          }),
                          (0, r.jsx)(eU, {
                            children: (0, r.jsxs)("div", {
                              className: "flex flex-col gap-1",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "flex items-center mb-1",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "inline-block w-3 h-3 rounded-full mr-2 ".concat(
                                          s
                                        ),
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "font-medium",
                                      children: e.team.name,
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "w-full",
                                  children: (0, r.jsx)(tp, {
                                    driverA: i,
                                    driverB: n,
                                    totalPoints: e.points,
                                    teamColor: s,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(eU, {
                            className: "text-right",
                            children: e.points,
                          }),
                        ],
                      },
                      e.position
                    );
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function tf(e) {
        var t, a, s, i, n, l, o, d;
        let {
            driverStandings: c,
            constructorStandings: m,
            races: x,
            now: h,
          } = e,
          u = c.slice(0, 3),
          p = [
            (null === (t = u[0]) || void 0 === t ? void 0 : t.points) -
              (null === (a = u[1]) || void 0 === a ? void 0 : a.points),
            (null === (s = u[0]) || void 0 === s ? void 0 : s.points) -
              (null === (i = u[2]) || void 0 === i ? void 0 : i.points),
          ],
          g = m.slice(0, 3),
          f = [
            (null === (n = g[0]) || void 0 === n ? void 0 : n.points) -
              (null === (l = g[1]) || void 0 === l ? void 0 : l.points),
            (null === (o = g[0]) || void 0 === o ? void 0 : o.points) -
              (null === (d = g[2]) || void 0 === d ? void 0 : d.points),
          ],
          j = c.filter((e) => e.driver.rookie).slice(0, 3),
          v = x.filter((e) => new Date(e.date) > h).length;
        return (0, r.jsxs)(b.Zb, {
          children: [
            (0, r.jsx)(b.Ol, {
              children: (0, r.jsx)(b.ll, {
                children: (0, r.jsxs)("span", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, r.jsxs)("span", {
                      children: [
                        v,
                        " races left (",
                        (0, r.jsxs)("span", {
                          className: "font-mono",
                          children: [26 * v, " points"],
                        }),
                        " left)",
                      ],
                    }),
                    (0, r.jsx)("span", { children: "Season Highlights" }),
                  ],
                }),
              }),
            }),
            (0, r.jsx)(b.aY, {
              children: (0, r.jsxs)("div", {
                className: "space-y-4",
                children: [
                  (0, r.jsxs)("div", {
                    className: "p-3 bg-slate-50 rounded-lg",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-sm text-slate-500",
                        children: "Top Drivers",
                      }),
                      (0, r.jsx)("ol", {
                        className: "text-base font-semibold space-y-1",
                        children: u.map((e, t) =>
                          (0, r.jsxs)(
                            "li",
                            {
                              className: "flex items-center gap-1",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "inline-block w-3 h-3 rounded-full ".concat(
                                      tc[e.team.id] || "bg-slate-400"
                                    ),
                                }),
                                (0, r.jsx)("span", {
                                  children: tu(e.driver.name),
                                }),
                                t > 0 &&
                                  (0, r.jsxs)("span", {
                                    className: "text-[10px] text-slate-500",
                                    children: ["(-", p[t - 1], ")"],
                                  }),
                                (0, r.jsx)("span", {
                                  className: "ml-auto font-mono",
                                  children: e.points,
                                }),
                              ],
                            },
                            e.driver_id
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "p-3 bg-slate-50 rounded-lg",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-sm text-slate-500",
                        children: "Top Constructors",
                      }),
                      (0, r.jsx)("ol", {
                        className: "text-base font-semibold space-y-1",
                        children: g.map((e, t) =>
                          (0, r.jsxs)(
                            "li",
                            {
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "inline-block w-3 h-3 rounded-full ".concat(
                                      tc[e.team.id] || "bg-slate-400"
                                    ),
                                }),
                                (0, r.jsx)("span", { children: e.team.name }),
                                t > 0 &&
                                  (0, r.jsxs)("span", {
                                    className: "text-[10px] text-slate-500",
                                    children: ["(-", f[t - 1], ")"],
                                  }),
                                (0, r.jsx)("span", {
                                  className: "ml-auto font-mono",
                                  children: e.points,
                                }),
                              ],
                            },
                            e.constructor_id
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "p-3 bg-slate-50 rounded-lg",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-sm text-slate-500",
                        children: "Top Rookies",
                      }),
                      (0, r.jsx)("ol", {
                        className: "text-base font-semibold space-y-1",
                        children:
                          0 === j.length
                            ? (0, r.jsx)("li", {
                                className: "text-slate-400",
                                children: "No rookies",
                              })
                            : j.map((e, t) =>
                                (0, r.jsxs)(
                                  "li",
                                  {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className:
                                          "inline-block w-3 h-3 rounded-full ".concat(
                                            tc[e.team.id] || "bg-slate-400"
                                          ),
                                      }),
                                      (0, r.jsx)("span", {
                                        children: tu(e.driver.name),
                                      }),
                                      t > 0 &&
                                        (0, r.jsxs)("span", {
                                          className:
                                            "text-[10px] text-slate-500",
                                          children: [
                                            "(-",
                                            j[0].points - e.points,
                                            ")",
                                          ],
                                        }),
                                      (0, r.jsx)("span", {
                                        className: "ml-auto font-mono",
                                        children: e.points,
                                      }),
                                    ],
                                  },
                                  e.driver_id
                                )
                              ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let tb = () =>
          (0, r.jsxs)("footer", {
            className:
              "py-3 text-center text-sm text-slate-500 mt-8 flex flex-col gap-1 items-center",
            children: [
              (0, r.jsxs)("p", {
                children: [
                  "Data powered by ",
                  " ",
                  (0, r.jsx)("a", {
                    href: "https://github.com/jolpica/jolpica-f1",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline hover:text-primary transition-colors",
                    children: "jolpica-f1",
                  }),
                ],
              }),
              (0, r.jsxs)("p", {
                children: [
                  "I am Aman, based in Bengaluru and powered by ",
                  (0, r.jsx)("span", {
                    className: "font-semibold text-red-600",
                    children: "Red Bull",
                  }),
                  ".",
                ],
              }),
              (0, r.jsxs)("p", {
                children: [
                  "Say hi to me on ",
                  " ",
                  (0, r.jsx)("a", {
                    href: "https://x.com/onlyoneaman",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline hover:text-primary transition-colors",
                    children: "X",
                  }),
                  ".",
                ],
              }),
              (0, r.jsxs)("p", {
                className: "text-xs text-slate-400",
                children: ["Data last updated: ", new Date().toLocaleString()],
              }),
            ],
          }),
        tj = (e) => {
          let { children: t } = e;
          return (0, r.jsx)("div", {
            className:
              "flex flex-col md:flex-row md:items-center md:justify-between mb-2",
            children: t,
          });
        },
        tv = (e) => {
          let { children: t } = e;
          return (0, r.jsx)("h2", {
            className: "text-2xl font-bold mb-2 md:mb-0",
            children: t || "Standings",
          });
        },
        tN = {
          Anonymizer: () => {
            let [e, t] = (0, n.useState)(""),
              [a, s] = (0, n.useState)(null),
              [i, l] = (0, n.useState)(!1),
              [o, d] = (0, n.useState)(""),
              [c, f] = (0, n.useState)(!0),
              [b, j] = (0, n.useState)(!1),
              v = async () => {
                if (!e.trim()) {
                  d("Please enter some text to anonymize");
                  return;
                }
                l(!0), d("");
                try {
                  let t = await fetch(g + "/experiments/anonymize_text", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ text: e }),
                    }),
                    a = await t.json();
                  t.ok
                    ? s(a.anonymized_text)
                    : d(a.error || "Failed to anonymize text");
                } catch (e) {
                  d("Network error. Please try again.");
                } finally {
                  l(!1);
                }
              };
            return (0, r.jsxs)("div", {
              className:
                "container m-9 md:p-9 max-w-4xl mx-auto p-6 bg-gray-100 rounded-xl shadow-md",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        (0, r.jsx)(m.Z, {
                          className: "text-indigo-600",
                          size: 24,
                        }),
                        (0, r.jsx)("h2", {
                          className: "text-xl font-bold text-gray-800",
                          children: "Text Anonymizer",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "text-xs text-gray-500",
                      children: "Protect sensitive information in your text",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex justify-between mb-2",
                      children: [
                        (0, r.jsx)("label", {
                          htmlFor: "input-text",
                          className: "text-sm font-medium text-gray-700",
                          children: "Input Text",
                        }),
                        (0, r.jsxs)("span", {
                          className: "text-xs text-gray-500",
                          children: [e.length, " characters"],
                        }),
                      ],
                    }),
                    (0, r.jsx)("textarea", {
                      id: "input-text",
                      className:
                        "w-full h-32 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 font-mono",
                      placeholder:
                        "Enter text to anonymize (e.g., names, locations, dates)...",
                      value: e,
                      onChange: (e) => t(e.target.value),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex space-x-2 mb-6",
                  children: [
                    (0, r.jsx)("button", {
                      className:
                        "flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",
                      onClick: v,
                      disabled: i || !e.trim(),
                      children: i
                        ? (0, r.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              (0, r.jsxs)("svg", {
                                className:
                                  "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [
                                  (0, r.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4",
                                  }),
                                  (0, r.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                  }),
                                ],
                              }),
                              "Processing...",
                            ],
                          })
                        : (0, r.jsx)(r.Fragment, { children: "Anonymize" }),
                    }),
                    (0, r.jsxs)("button", {
                      className:
                        "flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                      onClick: () => {
                        t(""), s(null), d("");
                      },
                      children: [
                        (0, r.jsx)(x.Z, { size: 16, className: "mr-1" }),
                        "Reset",
                      ],
                    }),
                  ],
                }),
                o &&
                  (0, r.jsx)("div", {
                    className:
                      "mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md",
                    children: o,
                  }),
                a &&
                  (0, r.jsxs)("div", {
                    className: "mt-6",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex justify-between items-center mb-2",
                        children: [
                          (0, r.jsx)("div", {
                            className: "font-medium text-gray-700",
                            children: "Anonymized Result",
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex space-x-2",
                            children: [
                              (0, r.jsx)("button", {
                                className:
                                  "flex items-center text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700",
                                onClick: () => f(!c),
                                title: c
                                  ? "Hide entity highlights"
                                  : "Show entity highlights",
                                children: c
                                  ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        (0, r.jsx)(h.Z, {
                                          size: 14,
                                          className: "mr-1",
                                        }),
                                        "Hide highlights",
                                      ],
                                    })
                                  : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        (0, r.jsx)(u.Z, {
                                          size: 14,
                                          className: "mr-1",
                                        }),
                                        "Show highlights",
                                      ],
                                    }),
                              }),
                              (0, r.jsxs)("button", {
                                className:
                                  "flex items-center text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700",
                                onClick: () => {
                                  a &&
                                    (navigator.clipboard.writeText(a.text),
                                    j(!0),
                                    setTimeout(() => j(!1), 2e3));
                                },
                                title: "Copy to clipboard",
                                children: [
                                  (0, r.jsx)(p.Z, {
                                    size: 14,
                                    className: "mr-1",
                                  }),
                                  b ? "Copied!" : "Copy",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "p-4 bg-gray-50 border border-gray-200 rounded-md overflow-auto max-h-64",
                        children: c
                          ? (() => {
                              let e;
                              if (!a || !a.items || !a.text)
                                return (null == a ? void 0 : a.text) || "";
                              let t = {
                                  PERSON: "bg-blue-200 text-blue-800",
                                  LOCATION: "bg-green-200 text-green-800",
                                  DATE_TIME: "bg-purple-200 text-purple-800",
                                  DEFAULT: "bg-gray-200 text-gray-800",
                                },
                                s = /<([A-Z_]+)>/g,
                                i = [],
                                n = 0,
                                l = a.text;
                              for (; null !== (e = s.exec(l)); ) {
                                e.index > n &&
                                  i.push({
                                    text: l.substring(n, e.index),
                                    style: "",
                                  });
                                let a = e[1];
                                i.push({
                                  text: e[0],
                                  style: t[a] || t.DEFAULT,
                                  entityType: a,
                                }),
                                  (n = e.index + e[0].length);
                              }
                              return (
                                n < l.length &&
                                  i.push({ text: l.substring(n), style: "" }),
                                (0, r.jsx)("div", {
                                  className: "font-mono",
                                  children: i.map((e, t) =>
                                    (0, r.jsx)(
                                      "span",
                                      {
                                        className: ""
                                          .concat(e.style, " ")
                                          .concat(
                                            e.style ? "px-1 py-0.5 rounded" : ""
                                          ),
                                        title: e.entityType
                                          ? "Entity Type: ".concat(e.entityType)
                                          : "",
                                        children: e.text,
                                      },
                                      t
                                    )
                                  ),
                                })
                              );
                            })()
                          : (0, r.jsx)("div", {
                              className: "font-mono",
                              children: a.text,
                            }),
                      }),
                      a.items &&
                        (0, r.jsxs)("div", {
                          className: "mt-4",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "Detected Entities (",
                                a.items.length,
                                ")",
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",
                              children: a.items.map((t, a) => {
                                let s = {
                                    PERSON: "bg-blue-100",
                                    LOCATION: "bg-green-100",
                                    DATE_TIME: "bg-purple-100",
                                    DEFAULT: "bg-gray-100",
                                  },
                                  i = {
                                    PERSON: "text-blue-800",
                                    LOCATION: "text-green-800",
                                    DATE_TIME: "text-purple-800",
                                    DEFAULT: "text-gray-800",
                                  };
                                return (0, r.jsxs)(
                                  "div",
                                  {
                                    className: ""
                                      .concat(
                                        s[t.entity_type] || s.DEFAULT,
                                        " "
                                      )
                                      .concat(
                                        i[t.entity_type] || i.DEFAULT,
                                        " p-2 rounded text-sm flex justify-between items-center"
                                      ),
                                    children: [
                                      (0, r.jsx)("div", {
                                        className: "font-mono truncate",
                                        title: e.substring(t.start, t.end),
                                        children: e.substring(t.start, t.end),
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "text-xs font-semibold ml-2 px-2 py-0.5 rounded bg-white",
                                        children: t.entity_type,
                                      }),
                                    ],
                                  },
                                  a
                                );
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                (0, r.jsxs)("div", {
                  className: "mt-8 text-xs text-gray-500 border-t pt-4",
                  children: [
                    (0, r.jsx)("p", {
                      children:
                        "This tool uses natural language processing to detect and anonymize sensitive information in your text, including:",
                    }),
                    (0, r.jsxs)("div", {
                      className: "mt-2 grid grid-cols-2 gap-2",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "w-3 h-3 bg-blue-200 rounded-full mr-2",
                            }),
                            (0, r.jsx)("span", {
                              children: "Personal names (PERSON)",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "w-3 h-3 bg-green-200 rounded-full mr-2",
                            }),
                            (0, r.jsx)("span", {
                              children: "Locations (LOCATION)",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "w-3 h-3 bg-purple-200 rounded-full mr-2",
                            }),
                            (0, r.jsx)("span", {
                              children: "Dates and times (DATE_TIME)",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "w-3 h-3 bg-gray-200 rounded-full mr-2",
                            }),
                            (0, r.jsx)("span", { children: "Other entities" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          CaptionGenerator: () => {
            let [e, t] = (0, n.useState)(null),
              [a, s] = (0, n.useState)(!1),
              [i, l] = (0, n.useState)(""),
              [o, d] = (0, n.useState)(null),
              [c, m] = (0, n.useState)(null),
              [x, h] = (0, n.useState)("gemini-2.0-flash-lite"),
              [u, p] = (0, n.useState)([]),
              [j, v] = (0, n.useState)(!0),
              y = [
                "https://picsum.photos/600",
                "https://picsum.photos/600/300",
                "https://picsum.photos/300/600",
                "https://picsum.photos/400",
              ],
              w = async () => {
                v(!0);
                let e = new Date().getTime();
                try {
                  let t = await Promise.all(
                    y.map(async (t, a) => {
                      let s = await fetch(
                          "".concat(t, "?t=").concat(e, "-").concat(a)
                        ),
                        i = await s.blob(),
                        r = new File([i], "suggestion-".concat(a, ".jpg"), {
                          type: "image/jpeg",
                        }),
                        n = URL.createObjectURL(r);
                      return { file: r, previewUrl: n };
                    })
                  );
                  u.forEach((e) => {
                    URL.revokeObjectURL(e.previewUrl);
                  }),
                    p(t);
                } catch (e) {
                  l("Failed to load suggestion images");
                }
                v(!1);
              };
            (0, n.useEffect)(
              () => (
                w(),
                () => {
                  u.forEach((e) => {
                    URL.revokeObjectURL(e.previewUrl);
                  });
                }
              ),
              []
            );
            let k = (e) => {
                c && URL.revokeObjectURL(c),
                  d(e.file),
                  m(e.previewUrl),
                  t(null);
              },
              T = async () => {
                if (!o) {
                  l("Please upload an image first");
                  return;
                }
                s(!0), l("");
                try {
                  let e = new FormData();
                  e.append("image", o), e.append("model", x);
                  let a = await fetch(
                      "".concat(g, "/experiments/v1/caption_image"),
                      { method: "POST", body: e, headers: {} }
                    ),
                    s = await a.json();
                  if (!a.ok)
                    throw Error(s.error || "Failed to generate caption");
                  t(s.caption);
                } catch (e) {
                  l((null == e ? void 0 : e.message) || "An error occurred");
                } finally {
                  s(!1);
                }
              };
            return (0, r.jsx)("div", {
              className:
                "min-h-screen md:p-9 bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-4 flex items-center justify-center",
              children: (0, r.jsxs)(b.Zb, {
                className: "w-full max-w-2xl mx-auto",
                children: [
                  (0, r.jsx)(b.Ol, {
                    className: "space-y-4",
                    children: (0, r.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, r.jsx)(b.ll, {
                          children: "Image Captioning with Gemini",
                        }),
                        (0, r.jsxs)(N.Ph, {
                          value: x,
                          onValueChange: (e) => {
                            h(e), t(null);
                          },
                          children: [
                            (0, r.jsx)(N.i4, {
                              className: "w-[240px]",
                              children: (0, r.jsx)(N.ki, {
                                placeholder: "Select a model",
                              }),
                            }),
                            (0, r.jsx)(N.Bw, {
                              children: er.map((e) =>
                                (0, r.jsx)(
                                  N.Ql,
                                  {
                                    value: e.value,
                                    children: (0, r.jsxs)("div", {
                                      className: "flex flex-col",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            (0, r.jsx)("span", {
                                              className: "font-medium",
                                              children: e.label,
                                            }),
                                            e.isExperimental &&
                                              (0, r.jsx)("span", {
                                                className:
                                                  "px-2 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded-full",
                                                children: "Experimental",
                                              }),
                                          ],
                                        }),
                                        (0, r.jsx)("span", {
                                          className: "text-xs text-gray-500",
                                          children: e.description,
                                        }),
                                      ],
                                    }),
                                  },
                                  e.value
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(b.aY, {
                    children: (0, r.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        c
                          ? (0, r.jsxs)("div", {
                              className: "relative group",
                              children: [
                                (0, r.jsx)("img", {
                                  src: c,
                                  alt: "Selected preview",
                                  className:
                                    "w-full h-64 object-contain rounded-lg bg-gray-50",
                                }),
                                (0, r.jsx)("div", {
                                  className: "absolute top-2 right-2",
                                  children: (0, r.jsx)(f.z, {
                                    variant: "destructive",
                                    size: "icon",
                                    onClick: () => {
                                      c && URL.revokeObjectURL(c),
                                        d(null),
                                        m(null),
                                        t(null);
                                    },
                                    className: "h-8 w-8 rounded-full",
                                    children: (0, r.jsx)(es.Z, {
                                      className: "h-4 w-4",
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : (0, r.jsxs)("div", {
                              className:
                                "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center",
                              children: [
                                (0, r.jsx)("input", {
                                  type: "file",
                                  accept: "image/*",
                                  onChange: (e) => {
                                    let a = e.target.files[0];
                                    a &&
                                      (d(a),
                                      m(URL.createObjectURL(a)),
                                      t(null));
                                  },
                                  className: "hidden",
                                  id: "image-upload",
                                }),
                                (0, r.jsx)("label", {
                                  htmlFor: "image-upload",
                                  className: "cursor-pointer",
                                  children: (0, r.jsxs)("div", {
                                    className:
                                      "flex flex-col items-center space-y-2",
                                    children: [
                                      (0, r.jsx)(W.Z, {
                                        className: "h-8 w-8 text-gray-400",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "text-sm text-gray-500",
                                        children:
                                          "Click to upload an image or drag and drop",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                        !o &&
                          (0, r.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  (0, r.jsx)("h3", {
                                    className:
                                      "text-sm font-medium text-gray-500",
                                    children: "Or try with these examples:",
                                  }),
                                  (0, r.jsxs)(f.z, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => {
                                      w();
                                    },
                                    disabled: j,
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, r.jsx)(ei.Z, {
                                        className: "h-4 w-4",
                                      }),
                                      j ? "Loading..." : "Shuffle",
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "grid grid-cols-4 gap-2",
                                children: j
                                  ? [1, 2, 3, 4].map((e) =>
                                      (0, r.jsx)(
                                        "div",
                                        {
                                          children: (0, r.jsx)(M, {
                                            className: "h-36 w-36 bg-gray-500",
                                          }),
                                        },
                                        e
                                      )
                                    )
                                  : u.map((e, t) =>
                                      (0, r.jsx)(
                                        "button",
                                        {
                                          onClick: () => k(e),
                                          className:
                                            "relative group aspect-square bg-gray-50 rounded-lg overflow-hidden hover:opacity-90 transition-opacity",
                                          children: (0, r.jsx)("img", {
                                            src: e.previewUrl,
                                            alt: "Suggestion ".concat(t + 1),
                                            className:
                                              "w-full h-full object-cover",
                                          }),
                                        },
                                        t
                                      )
                                    ),
                              }),
                            ],
                          }),
                        (0, r.jsx)(f.z, {
                          onClick: T,
                          disabled: a || !o,
                          className: "w-full",
                          children: a
                            ? "Generating Caption..."
                            : "Generate Caption",
                        }),
                        i &&
                          (0, r.jsx)("div", {
                            className: "p-4 text-red-500 bg-red-50 rounded-md",
                            children: i,
                          }),
                        e &&
                          (0, r.jsx)("div", {
                            className: "p-4 bg-gray-50 rounded-md",
                            children: (0, r.jsxs)("p", {
                              className: "text-lg",
                              children: [
                                (0, r.jsx)("strong", { children: "Caption:" }),
                                (0, r.jsx)(ea.U, { children: e }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          },
          CourseGenerator: () => {
            let [e, t] = (0, n.useState)(""),
              [a, s] = (0, n.useState)("beginner"),
              [l, o] = (0, n.useState)(""),
              [c, m] = (0, n.useState)(10),
              [x, h] = (0, n.useState)(!1),
              [u, p] = (0, n.useState)([]),
              [g, D] = (0, n.useState)(!1),
              [E, F] = (0, n.useState)(null),
              [G, Y] = (0, n.useState)(!1),
              [Q, V] = (0, n.useState)({}),
              [W, q] = (0, n.useState)("trending"),
              [K, J] = (0, n.useState)(""),
              $ = u
                .slice(-50)
                .sort(
                  (e, t) =>
                    new Date(t.created_at).getTime() -
                    new Date(e.created_at).getTime()
                ),
              X = u
                .filter((e) => e.user_id === K)
                .sort(
                  (e, t) =>
                    new Date(t.created_at).getTime() -
                    new Date(e.created_at).getTime()
                ),
              ee = u.filter((e) => {
                let t = new Date(e.created_at),
                  a = new Date();
                return (
                  t.getDate() === a.getDate() &&
                  t.getMonth() === a.getMonth() &&
                  t.getFullYear() === a.getFullYear()
                );
              });
            (0, n.useEffect)(() => {
              let e = () => {
                Y(window.innerWidth < 768);
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
              (0, n.useEffect)(() => {
                J(H()), et();
              }, []);
            let et = async () => {
                try {
                  let e = (await L.courseApis.getAll()).items || [];
                  p(e);
                  let t = {};
                  e.forEach((e, a) => {
                    t[e.id] = I[a % I.length];
                  }),
                    V(t);
                } catch (e) {
                  console.error("Error fetching courses:", e);
                } finally {
                  h(!0);
                }
              },
              ea = async () => {
                if (e.trim()) {
                  D(!0);
                  try {
                    let s = (
                      await L.courseApis.create({
                        course_name: e,
                        familiarity: a,
                        duration: "".concat(2 * c, " minutes"),
                        additional_instructions: l,
                        user_id: K,
                      })
                    ).course;
                    if (!s) throw Error("Course not found");
                    V((e) => ({ ...e, [s.id]: I[u.length % I.length] })),
                      p((e) => [s, ...e]),
                      t(""),
                      o(""),
                      F(s),
                      q("myCourses");
                  } catch (e) {
                    console.error("Error generating course:", e);
                  } finally {
                    D(!1);
                  }
                }
              },
              es = (e) =>
                e
                  ? e.length < 50
                    ? "text-4xl"
                    : e.length < 100
                    ? "text-3xl"
                    : e.length < 200
                    ? "text-2xl"
                    : e.length < 400
                    ? "text-xl"
                    : "text-base"
                  : "text-xl",
              ei = (e) => {
                let t = new Date(e).getTime(),
                  a = Math.floor((Date.now() - t) / 6e4);
                if (a < 1) return "Just now";
                if (a < 60) return "".concat(a, "m ago");
                let s = Math.floor(a / 60);
                return s < 24
                  ? "".concat(s, "h ago")
                  : "".concat(Math.floor(s / 24), "d ago");
              },
              er = (null == E ? void 0 : E.contents) || [],
              en = (E && Q[E.id]) || I[0],
              el = er.map((e, t) => ({
                content: () =>
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col w-full h-full p-6 bg-gradient-to-br ".concat(
                        en,
                        " text-white bg-opacity-90"
                      ),
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-0",
                      }),
                      (0, r.jsxs)("div", {
                        className: "relative z-10 flex flex-col h-full",
                        children: [
                          (0, r.jsx)(U.Z, {
                            className: "my-auto drop-shadow-md ".concat(es(e)),
                            content: e,
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "mt-auto text-white text-opacity-90 text-sm font-medium flex justify-end items-center",
                            children: (0, r.jsxs)("div", {
                              className:
                                "bg-white bg-opacity-20 px-3 py-1 rounded-full backdrop-blur-sm",
                              children: [t + 1, "/", er.length],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                duration: 15e3,
              }));
            return E
              ? (0, r.jsxs)("div", {
                  className: "fixed inset-0 bg-black z-50 flex flex-col",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "p-4 bg-black bg-opacity-80 backdrop-blur-md text-white flex items-center",
                      children: [
                        (0, r.jsx)(f.z, {
                          variant: "ghost",
                          size: "sm",
                          onClick: () => {
                            F(null);
                          },
                          className:
                            "text-white hover:bg-white hover:bg-opacity-10 rounded-full p-2 mr-3",
                          children: (0, r.jsx)(w.Z, { className: "h-5 w-5" }),
                        }),
                        (0, r.jsx)("h2", {
                          className: "font-medium truncate flex-1",
                          children: E.title,
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "flex-1 flex items-center justify-center bg-black",
                      children: G
                        ? (0, r.jsx)(O(), {
                            stories: el,
                            width: "100%",
                            height: "100%",
                            storyStyles: {
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                            },
                          })
                        : (0, r.jsx)(O(), {
                            stories: el,
                            width: 480,
                            height: window.innerHeight - 70,
                            storyStyles: {
                              borderRadius: "12px",
                              overflow: "hidden",
                              boxShadow:
                                "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                            },
                          }),
                    }),
                  ],
                })
              : (0, r.jsxs)("div", {
                  className:
                    "bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen",
                  children: [
                    (0, r.jsx)("div", {
                      className: "bg-gradient-to-r from-blue-600 to-purple-600",
                      children: (0, r.jsx)("div", {
                        className:
                          "container mx-auto py-12 px-4 md:px-6 lg:px-8",
                        children: (0, r.jsxs)("div", {
                          className: "grid md:grid-cols-2 gap-8 items-center",
                          children: [
                            (0, r.jsxs)(z.E.div, {
                              initial: { opacity: 0, x: -20 },
                              animate: { opacity: 1, x: 0 },
                              transition: { duration: 0.5 },
                              className: "text-white space-y-4",
                              children: [
                                (0, r.jsxs)("h1", {
                                  className:
                                    "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                                  children: [
                                    "Create Short Courses ",
                                    (0, r.jsx)("span", {
                                      className: "text-blue-200",
                                      children: "in Seconds",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("h2", {
                                  className:
                                    "text-xl md:text-2xl font-light opacity-90 max-w-md",
                                  children:
                                    "Generate personalized learning experiences powered by AI, tailored to any skill level.",
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex flex-wrap gap-3 pt-2",
                                  children: [
                                    (0, r.jsxs)(R.C, {
                                      variant: "outline",
                                      className:
                                        "bg-white bg-opacity-20 text-white border-none px-3 py-1",
                                      children: [
                                        (0, r.jsx)(k.Z, {
                                          className: "h-3.5 w-3.5 mr-1",
                                        }),
                                        "AI-Powered",
                                      ],
                                    }),
                                    (0, r.jsxs)(R.C, {
                                      variant: "outline",
                                      className:
                                        "bg-white bg-opacity-20 text-white border-none px-3 py-1",
                                      children: [
                                        (0, r.jsx)(T.Z, {
                                          className: "h-3.5 w-3.5 mr-1",
                                        }),
                                        "Quick Generation",
                                      ],
                                    }),
                                    (0, r.jsxs)(R.C, {
                                      variant: "outline",
                                      className:
                                        "bg-white bg-opacity-20 text-white border-none px-3 py-1",
                                      children: [
                                        (0, r.jsx)(Z.Z, {
                                          className: "h-3.5 w-3.5 mr-1",
                                        }),
                                        "Any Subject",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsx)(z.E.div, {
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              transition: { duration: 0.5, delay: 0.2 },
                              children: (0, r.jsxs)(b.Zb, {
                                className: "shadow-xl border-0 overflow-hidden",
                                children: [
                                  (0, r.jsxs)(b.Ol, {
                                    className:
                                      "pb-2 bg-gradient-to-r from-blue-50 to-purple-50",
                                    children: [
                                      (0, r.jsx)(b.ll, {
                                        className:
                                          "text-lg sm:text-xl font-bold text-gray-800",
                                        children: "Generate Your Course",
                                      }),
                                      (0, r.jsx)(b.SZ, {
                                        className: "text-xs sm:text-md",
                                        children:
                                          "Fill out the form below to create a tailored learning experience",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(b.aY, {
                                    className: "space-y-4 pt-4",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                          (0, r.jsx)(v._, {
                                            htmlFor: "subject",
                                            className: "text-sm font-medium",
                                            children:
                                              "What do you want to learn?",
                                          }),
                                          (0, r.jsx)(j.I, {
                                            id: "subject",
                                            placeholder:
                                              "e.g., TypeScript, React Hooks, Design Patterns",
                                            value: e,
                                            onChange: (e) => t(e.target.value),
                                            className: "h-10",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                          (0, r.jsx)(v._, {
                                            htmlFor: "familiarity",
                                            className: "text-sm font-medium",
                                            children: "Your Familiarity Level",
                                          }),
                                          (0, r.jsxs)(N.Ph, {
                                            value: a,
                                            onValueChange: s,
                                            children: [
                                              (0, r.jsx)(N.i4, {
                                                className: "h-10",
                                                children: (0, r.jsx)(N.ki, {
                                                  placeholder:
                                                    "Select your level",
                                                }),
                                              }),
                                              (0, r.jsx)(N.Bw, {
                                                children: Object.values(i).map(
                                                  (e) =>
                                                    (0, r.jsx)(
                                                      N.Ql,
                                                      {
                                                        value: e,
                                                        children: B(e),
                                                      },
                                                      e
                                                    )
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "space-y-1.5 hidden",
                                        children: [
                                          (0, r.jsxs)("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              (0, r.jsx)(v._, {
                                                htmlFor: "course-length",
                                                className:
                                                  "text-sm font-medium",
                                                children:
                                                  "How long should the course be?",
                                              }),
                                              (0, r.jsxs)("span", {
                                                className:
                                                  "text-xs font-medium bg-blue-100 px-2 py-0.5 rounded-full",
                                                children: [
                                                  "(~",
                                                  c,
                                                  " ",
                                                  c > 1 ? "mins" : "min",
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, r.jsx)(y.i, {
                                            id: "course-length",
                                            min: 1,
                                            max: 10,
                                            step: 1,
                                            value: [c],
                                            onValueChange: (e) => m(e[0]),
                                            className: "py-3",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "space-y-1.5",
                                        children: [
                                          (0, r.jsx)(v._, {
                                            htmlFor: "extra-instructions",
                                            className: "text-sm font-medium",
                                            children:
                                              "Any extra instructions? (optional)",
                                          }),
                                          (0, r.jsx)(j.I, {
                                            id: "extra-instructions",
                                            placeholder:
                                              "e.g., Focus on TypeScript with React examples",
                                            value: l,
                                            onChange: (e) => o(e.target.value),
                                            className: "h-10",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)(b.eW, {
                                    className:
                                      "bg-gradient-to-r from-blue-50 to-purple-50 pt-3",
                                    children: (0, r.jsx)(f.z, {
                                      onClick: ea,
                                      disabled: g || !e.trim(),
                                      className:
                                        "w-full h-10 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                                      children: g
                                        ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                              (0, r.jsxs)("svg", {
                                                className:
                                                  "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                  (0, r.jsx)("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4",
                                                  }),
                                                  (0, r.jsx)("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                  }),
                                                ],
                                              }),
                                              "Generating...",
                                            ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                              (0, r.jsx)(k.Z, {
                                                className: "h-4 w-4 mr-2",
                                              }),
                                              "Generate Course",
                                            ],
                                          }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "container mx-auto py-8 px-4 md:px-6 lg:px-8",
                      children: (0, r.jsxs)(A.mQ, {
                        defaultValue: "myCourses",
                        value: W,
                        onValueChange: q,
                        className: "w-full",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "flex flex-col md:flex-row gap-3 items-center justify-between mb-6",
                            children: [
                              (0, r.jsxs)(A.dr, {
                                className: "bg-white",
                                children: [
                                  (0, r.jsx)(A.SP, {
                                    value: "myCourses",
                                    className: "data-[state=active]:bg-blue-50",
                                    children: "My Courses",
                                  }),
                                  (0, r.jsx)(A.SP, {
                                    value: "trending",
                                    className: "data-[state=active]:bg-blue-50",
                                    children: "Recently Generated",
                                  }),
                                ],
                              }),
                              ee.length > 0 &&
                                (0, r.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, r.jsx)(C.Z, {
                                      className: "h-4 w-4 text-blue-500 mr-2",
                                    }),
                                    (0, r.jsxs)("span", {
                                      className:
                                        "text-sm font-medium text-gray-500",
                                      children: [
                                        ee.length,
                                        " courses generated today",
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, r.jsx)(A.nU, {
                            value: "myCourses",
                            className: "mt-0",
                            children: X.length
                              ? (0, r.jsx)(z.E.div, {
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  transition: { duration: 0.3 },
                                  className:
                                    "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                                  children: X.map((e, t) => {
                                    let a = Q[e.id] || I[t % I.length];
                                    return (0, r.jsx)(
                                      z.E.div,
                                      {
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: {
                                          duration: 0.3,
                                          delay: 0.05 * t,
                                        },
                                        className: "flex",
                                        children: (0, r.jsxs)(b.Zb, {
                                          className:
                                            "h-full w-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "h-2 w-full bg-gradient-to-r ".concat(
                                                  a
                                                ),
                                            }),
                                            (0, r.jsxs)(b.Ol, {
                                              className: "pb-2 pt-4 px-4",
                                              children: [
                                                (0, r.jsx)(b.ll, {
                                                  className:
                                                    "text-lg font-semibold truncate",
                                                  children: e.title,
                                                }),
                                                (0, r.jsxs)(b.SZ, {
                                                  className:
                                                    "flex items-center text-xs",
                                                  children: [
                                                    (0, r.jsx)("span", {
                                                      className:
                                                        "bg-gradient-to-r ".concat(
                                                          a,
                                                          " text-white text-xs font-medium px-2 py-0.5 rounded-full mr-2"
                                                        ),
                                                      children: e.familiarity,
                                                    }),
                                                    (0, r.jsxs)("span", {
                                                      children: [
                                                        e.contents.length,
                                                        " slides",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, r.jsx)(b.aY, {
                                              className: "pb-2 px-4",
                                              children: (0, r.jsx)("p", {
                                                className:
                                                  "text-xs text-gray-600 dark:text-gray-300 line-clamp-2",
                                                children: e.extra_instructions
                                                  ? "".concat(
                                                      e.extra_instructions
                                                    )
                                                  : "A "
                                                      .concat(
                                                        e.familiarity,
                                                        " level course on "
                                                      )
                                                      .concat(e.subject, "."),
                                              }),
                                            }),
                                            (0, r.jsx)(b.eW, {
                                              className:
                                                "flex justify-between pt-2 pb-4 px-4 border-t border-gray-100 dark:border-gray-700",
                                              children: (0, r.jsxs)(f.z, {
                                                size: "sm",
                                                onClick: () => F(e),
                                                className:
                                                  "bg-gradient-to-r ".concat(
                                                    a,
                                                    " hover:opacity-90 text-xs px-3 h-8"
                                                  ),
                                                children: [
                                                  (0, r.jsx)(S.Z, {
                                                    className: "h-3 w-3 mr-1",
                                                  }),
                                                  "View Course",
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      },
                                      e.id
                                    );
                                  }),
                                })
                              : (0, r.jsxs)(_.bZ, {
                                  variant: "default",
                                  className:
                                    "bg-blue-50 border border-blue-100 dark:bg-gray-800 dark:border-gray-700",
                                  children: [
                                    (0, r.jsx)(P.Z, {
                                      className: "h-4 w-4 text-blue-500",
                                    }),
                                    (0, r.jsx)(_.X, {
                                      className: "text-sm",
                                      children:
                                        "You haven't created any courses yet. Fill out the form above to get started!",
                                    }),
                                  ],
                                }),
                          }),
                          (0, r.jsx)(A.nU, {
                            value: "trending",
                            className: "mt-0",
                            children: (0, r.jsxs)(z.E.div, {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { duration: 0.3 },
                              className:
                                "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                              children: [
                                !x &&
                                  (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      (0, r.jsx)(M, {
                                        className: "w-full h-24",
                                      }),
                                      (0, r.jsx)(M, {
                                        className: "w-full h-24",
                                      }),
                                      (0, r.jsx)(M, {
                                        className: "w-full h-24",
                                      }),
                                      (0, r.jsx)(M, {
                                        className: "w-full h-24",
                                      }),
                                      (0, r.jsx)(M, {
                                        className: "w-full h-24",
                                      }),
                                    ],
                                  }),
                                $.map((e, t) => {
                                  let a = Q[e.id] || I[(t + 5) % I.length];
                                  return (0, r.jsx)(
                                    z.E.div,
                                    {
                                      initial: { opacity: 0, y: 20 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: {
                                        duration: 0.3,
                                        delay: 0.05 * t,
                                      },
                                      className: "flex",
                                      children: (0, r.jsxs)(b.Zb, {
                                        className:
                                          "h-full w-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "h-2 w-full bg-gradient-to-r ".concat(
                                                a
                                              ),
                                          }),
                                          (0, r.jsxs)(b.Ol, {
                                            className: "pb-2 pt-4 px-4",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className:
                                                  "flex justify-between items-start",
                                                children: [
                                                  (0, r.jsx)(b.ll, {
                                                    className:
                                                      "text-lg font-semibold truncate pr-2",
                                                    children: e.title,
                                                  }),
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "text-xs text-gray-500",
                                                    children: ei(e.created_at),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(b.SZ, {
                                                className:
                                                  "flex items-center text-xs",
                                                children: [
                                                  (0, r.jsx)("span", {
                                                    className:
                                                      "bg-gradient-to-r ".concat(
                                                        a,
                                                        " text-white text-xs font-medium px-2 py-0.5 rounded-full mr-2"
                                                      ),
                                                    children: e.familiarity,
                                                  }),
                                                  (0, r.jsxs)("span", {
                                                    children: [
                                                      e.contents.length,
                                                      " slides",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, r.jsx)(b.aY, {
                                            className: "pb-2 px-4",
                                            children: (0, r.jsx)("p", {
                                              className:
                                                "text-xs text-gray-600 dark:text-gray-300 line-clamp-2",
                                              children: e.extra_instructions
                                                ? "".concat(
                                                    e.extra_instructions
                                                  )
                                                : "A "
                                                    .concat(
                                                      e.familiarity,
                                                      " level course on "
                                                    )
                                                    .concat(e.subject, "."),
                                            }),
                                          }),
                                          (0, r.jsx)(b.eW, {
                                            className:
                                              "flex justify-between pt-2 pb-4 px-4 border-t border-gray-100 dark:border-gray-700",
                                            children: (0, r.jsxs)(f.z, {
                                              size: "sm",
                                              onClick: () => F(e),
                                              className:
                                                "bg-gradient-to-r ".concat(
                                                  a,
                                                  " hover:opacity-90 text-xs px-3 h-8"
                                                ),
                                              children: [
                                                (0, r.jsx)(S.Z, {
                                                  className: "h-3 w-3 mr-1",
                                                }),
                                                "View",
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                    e.id
                                  );
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex items-center justify-center gap-1 p-9 md:py-16",
                      children: [
                        (0, r.jsx)("span", { children: "Created with ❤️ by" }),
                        (0, r.jsx)(d(), {
                          className: "hover:underline font-medium",
                          href: "/",
                          children: "Aman",
                        }),
                      ],
                    }),
                  ],
                });
          },
          ImageEditor: () => {
            let [e, t] = (0, n.useState)(null),
              [a, s] = (0, n.useState)(null),
              [i, l] = (0, n.useState)(""),
              [o, d] = (0, n.useState)(!1),
              [c, m] = (0, n.useState)(""),
              [h, u] = (0, n.useState)([]),
              [p, j] = (0, n.useState)(-1),
              [v, N] = (0, n.useState)(!1),
              y = (0, n.useRef)(null),
              w = (0, n.useRef)(null);
            (0, n.useRef)(null);
            let T = (0, n.useRef)(null),
              Z = () => {
                var e;
                null === (e = T.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "smooth" });
              };
            (0, n.useEffect)(() => {
              Z();
            }, [h]);
            let C = async (e) => {
                var a;
                let i =
                  null === (a = e.target.files) || void 0 === a ? void 0 : a[0];
                if (i)
                  try {
                    if (i.size > 20971520)
                      throw Error("File size exceeds 20MB limit");
                    if (!et.includes(i.type))
                      throw Error(
                        "Unsupported file type. Please upload a PNG, JPEG, or WebP image."
                      );
                    let e = new FileReader();
                    (e.onload = () => {
                      let a = e.result;
                      t(a), s(a), u([]), j(-1), m(""), N(!1);
                    }),
                      e.readAsDataURL(i);
                  } catch (e) {
                    m(e.message);
                  }
              },
              P = async (e) => {
                if ((e.preventDefault(), a && i.trim()))
                  try {
                    d(!0), m("");
                    let e = await fetch(
                        "".concat(g, "/experiments/v1/edit_image"),
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ image: a, prompt: i.trim() }),
                        }
                      ),
                      t = await e.json();
                    if (!e.ok || !t.edited_image)
                      throw Error(t.error || "Image edit failed");
                    let r = t.edited_image,
                      n = {
                        original: a,
                        edited: r,
                        prompt: i,
                        timestamp: Date.now(),
                      },
                      o = h.slice(0, p + 1);
                    u([...o, n]),
                      j(o.length),
                      s(r),
                      l(""),
                      ee.Am.success("Image edited successfully");
                  } catch (e) {
                    m(e.message || "Something went wrong"),
                      ee.Am.error("Image edit failed");
                  } finally {
                    var t;
                    d(!1),
                      null === (t = w.current) || void 0 === t || t.focus();
                  }
              },
              S = (e) => new Date(e).toLocaleTimeString(),
              A = (e) => {
                var t;
                l(e), null === (t = w.current) || void 0 === t || t.focus();
              };
            return (0, r.jsx)("div", {
              className:
                "min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-4 flex items-center justify-center",
              children: (0, r.jsxs)(b.Zb, {
                className:
                  "w-full max-w-6xl bg-white shadow-lg rounded-3xl overflow-hidden border-0",
                children: [
                  (0, r.jsx)(b.Ol, {
                    className: "border-b bg-white p-4",
                    children: (0, r.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-2 flex items-center justify-center shadow-lg",
                              children: (0, r.jsx)(k.Z, {
                                className: "h-5 w-5 text-white",
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsx)(b.ll, {
                                  className:
                                    "text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
                                  children: "Image Editor",
                                }),
                                (0, r.jsx)("p", {
                                  className: "text-sm text-gray-500",
                                  children: "Powered by Google AI",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex gap-2",
                          children: [
                            (0, r.jsxs)(f.z, {
                              variant: "outline",
                              onClick: () => {
                                e &&
                                  (s(e),
                                  N(!1),
                                  ee.Am.success("Reset to original image"));
                              },
                              disabled: !e || a === e,
                              className:
                                "rounded-xl border-indigo-200 hover:border-indigo-500 hover:text-indigo-500",
                              children: [
                                (0, r.jsx)(x.Z, { className: "h-4 w-4 mr-2" }),
                                "Reset",
                              ],
                            }),
                            (0, r.jsxs)(f.z, {
                              variant: "outline",
                              onClick: () => {
                                N(!v);
                              },
                              disabled: !a || !e || a === e,
                              className: "rounded-xl ".concat(
                                v
                                  ? "bg-indigo-100 text-indigo-600 border-indigo-300"
                                  : "border-indigo-200 hover:border-indigo-500 hover:text-indigo-500"
                              ),
                              children: [
                                (0, r.jsx)(Q.Z, { className: "h-4 w-4 mr-2" }),
                                "Compare",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col md:flex-row h-[700px]",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex-1 p-4 flex flex-col",
                        onDragOver: (e) => {
                          e.preventDefault(), e.stopPropagation();
                        },
                        onDrop: (e) => {
                          if (
                            (e.preventDefault(),
                            e.stopPropagation(),
                            e.dataTransfer.files && e.dataTransfer.files[0])
                          ) {
                            let a = e.dataTransfer.files[0];
                            if (!et.includes(a.type)) {
                              m(
                                "Unsupported file type. Please upload a PNG, JPEG, or WebP image."
                              );
                              return;
                            }
                            let i = new FileReader();
                            (i.onload = () => {
                              let e = i.result;
                              t(e),
                                s(e),
                                u([]),
                                j(-1),
                                m(""),
                                N(!1),
                                ee.Am.success(
                                  "Image dropped (".concat(
                                    a.type.split("/")[1].toUpperCase(),
                                    ")"
                                  )
                                );
                            }),
                              i.readAsDataURL(a);
                          }
                        },
                        onPaste: (e) => {
                          let a = e.clipboardData.items;
                          for (let e = 0; e < a.length; e++)
                            if (-1 !== a[e].type.indexOf("image")) {
                              let i = a[e].getAsFile();
                              if (i) {
                                let e = new FileReader();
                                (e.onload = () => {
                                  let a = e.result;
                                  t(a),
                                    s(a),
                                    u([]),
                                    j(-1),
                                    m(""),
                                    N(!1),
                                    ee.Am.success(
                                      "Image pasted from clipboard (".concat(
                                        i.type.split("/")[1].toUpperCase(),
                                        ")"
                                      )
                                    );
                                }),
                                  e.readAsDataURL(i);
                              }
                            }
                        },
                        tabIndex: 0,
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "flex-1 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100",
                            children: a
                              ? v && e
                                ? (0, r.jsxs)("div", {
                                    className: "w-full h-full flex relative",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "w-1/2 h-full overflow-hidden border-r border-gray-300",
                                        children: [
                                          (0, r.jsx)("img", {
                                            src: e,
                                            alt: "Original",
                                            className:
                                              "w-full h-full object-contain",
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded",
                                            children: "Original",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "w-1/2 h-full overflow-hidden",
                                        children: [
                                          (0, r.jsx)("img", {
                                            src: a,
                                            alt: "Edited",
                                            className:
                                              "w-full h-full object-contain",
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded",
                                            children: "Edited",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, r.jsx)("img", {
                                    src: a,
                                    alt: "Edited",
                                    className:
                                      "max-w-full max-h-full object-contain",
                                  })
                              : (0, r.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center justify-center text-gray-400 p-8",
                                  children: [
                                    (0, r.jsx)(V.Z, {
                                      className: "h-20 w-20 mb-4",
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-center text-sm mb-2",
                                      children:
                                        "Upload an image to start editing",
                                    }),
                                    (0, r.jsx)("p", {
                                      className:
                                        "text-center text-xs text-gray-400 mb-4",
                                      children:
                                        "Drag & drop, paste from clipboard, or click upload",
                                    }),
                                    (0, r.jsxs)(f.z, {
                                      onClick: () => {
                                        var e;
                                        return null === (e = y.current) ||
                                          void 0 === e
                                          ? void 0
                                          : e.click();
                                      },
                                      className:
                                        "mt-2 bg-gradient-to-r from-indigo-500 to-purple-600",
                                      children: [
                                        (0, r.jsx)(W.Z, {
                                          className: "h-4 w-4 mr-2",
                                        }),
                                        "Upload Image",
                                      ],
                                    }),
                                  ],
                                }),
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-4 flex gap-2 justify-between",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex gap-2",
                                children: [
                                  (0, r.jsxs)(f.z, {
                                    variant: "outline",
                                    onClick: () => {
                                      var e;
                                      return null === (e = y.current) ||
                                        void 0 === e
                                        ? void 0
                                        : e.click();
                                    },
                                    className:
                                      "rounded-xl border-indigo-200 hover:border-indigo-500 hover:text-indigo-500",
                                    children: [
                                      (0, r.jsx)(W.Z, {
                                        className: "h-4 w-4 mr-2",
                                      }),
                                      "New Image",
                                    ],
                                  }),
                                  (0, r.jsx)("input", {
                                    type: "file",
                                    ref: y,
                                    onChange: C,
                                    className: "hidden",
                                    accept: et.join(","),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "flex gap-2",
                                children: [
                                  (0, r.jsxs)(f.z, {
                                    variant: "outline",
                                    onClick: () => {
                                      if (p > 0) {
                                        let e = p - 1;
                                        j(e),
                                          s(h[e].edited),
                                          N(!1),
                                          ee.Am.info(
                                            "Reverted to previous edit"
                                          );
                                      } else
                                        0 === p &&
                                          (j(-1),
                                          s(e),
                                          N(!1),
                                          ee.Am.info(
                                            "Reverted to original image"
                                          ));
                                    },
                                    disabled: p < 0 && !e,
                                    className:
                                      "rounded-xl border-indigo-200 hover:border-indigo-500 hover:text-indigo-500",
                                    children: [
                                      (0, r.jsx)(q.Z, {
                                        className: "h-4 w-4 mr-1",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "hidden sm:inline",
                                        children: "Undo",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(f.z, {
                                    variant: "outline",
                                    onClick: () => {
                                      if (p < h.length - 1) {
                                        let e = p + 1;
                                        j(e),
                                          s(h[e].edited),
                                          N(!1),
                                          ee.Am.info("Moved to next edit");
                                      }
                                    },
                                    disabled: p >= h.length - 1,
                                    className:
                                      "rounded-xl border-indigo-200 hover:border-indigo-500 hover:text-indigo-500",
                                    children: [
                                      (0, r.jsx)(K.Z, {
                                        className: "h-4 w-4 mr-1",
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "hidden sm:inline",
                                        children: "Redo",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(f.z, {
                                    variant: "outline",
                                    onClick: () => {
                                      if (!a) return;
                                      let e = document.createElement("a");
                                      (e.href = a),
                                        (e.download = "edited-image-".concat(
                                          Date.now(),
                                          ".png"
                                        )),
                                        document.body.appendChild(e),
                                        e.click(),
                                        document.body.removeChild(e),
                                        ee.Am.success("Image downloaded");
                                    },
                                    disabled: !a,
                                    className:
                                      "rounded-xl border-indigo-200 hover:border-indigo-500 hover:text-indigo-500",
                                    children: [
                                      (0, r.jsx)(J.Z, {
                                        className: "h-4 w-4 mr-2",
                                      }),
                                      "Download",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a &&
                            (0, r.jsx)("div", {
                              className: "mt-4 flex flex-wrap gap-2",
                              children: [
                                "Convert to oil painting style",
                                "Make it look like a watercolor painting",
                                "Add a sunset background",
                                "Change to black and white",
                                "Add a bokeh effect",
                                "Make it look like a vintage photo",
                                "Add a vignette effect",
                              ].map((e, t) =>
                                (0, r.jsx)(
                                  f.z,
                                  {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => A(e),
                                    className:
                                      "rounded-full text-xs bg-gray-50 border-gray-200 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600",
                                    children: e,
                                  },
                                  t
                                )
                              ),
                            }),
                          (0, r.jsxs)("form", {
                            onSubmit: P,
                            className: "mt-4",
                            children: [
                              (0, r.jsx)("div", {
                                className: "flex gap-2",
                                children: (0, r.jsx)(Y, {
                                  ref: w,
                                  value: i,
                                  onChange: (e) => l(e.target.value),
                                  onKeyDown: (e) => {
                                    (e.metaKey || e.ctrlKey) &&
                                      "Enter" === e.key &&
                                      a &&
                                      i.trim() &&
                                      !o &&
                                      (e.preventDefault(), P(e));
                                  },
                                  placeholder:
                                    "Describe how you want to edit the image (e.g., 'Add a sunset in the background', 'Convert to watercolor style')",
                                  className:
                                    "flex-1 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none h-24",
                                  disabled: !a || o,
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "flex justify-between items-center mt-2",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "text-xs text-gray-400",
                                    children: "Press Cmd/Ctrl+Enter to submit",
                                  }),
                                  (0, r.jsx)(f.z, {
                                    type: "submit",
                                    disabled: !a || !i.trim() || o,
                                    className:
                                      "rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md",
                                    children: o
                                      ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)($.Z, {
                                              className:
                                                "h-4 w-4 mr-2 animate-spin",
                                            }),
                                            "Processing...",
                                          ],
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)(X.Z, {
                                              className: "h-4 w-4 mr-2",
                                            }),
                                            "Edit Image",
                                          ],
                                        }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c &&
                            (0, r.jsx)(_.bZ, {
                              variant: "destructive",
                              className: "mt-4",
                              children: (0, r.jsx)(_.X, { children: c }),
                            }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "w-full md:w-64 lg:w-80 border-t md:border-t-0 md:border-l border-gray-100 bg-gray-50 p-4 overflow-auto",
                        children: [
                          (0, r.jsx)("h3", {
                            className: "font-medium text-gray-700 mb-4",
                            children: "Edit History",
                          }),
                          0 === h.length && e
                            ? (0, r.jsxs)("div", {
                                className: "p-3 rounded-xl border ".concat(
                                  -1 === p
                                    ? "border-indigo-300 bg-indigo-50"
                                    : "border-gray-200 bg-white",
                                  " cursor-pointer transition-all hover:border-indigo-300 mb-4"
                                ),
                                onClick: () => {
                                  j(-1), s(e), N(!1);
                                },
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "flex items-center justify-between mb-2",
                                    children: (0, r.jsx)("span", {
                                      className:
                                        "text-xs font-medium text-gray-500",
                                      children: "Original Image",
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "h-24 bg-gray-100 rounded-lg overflow-hidden",
                                    children: (0, r.jsx)("img", {
                                      src: e,
                                      alt: "Original",
                                      className: "w-full h-full object-cover",
                                    }),
                                  }),
                                ],
                              })
                            : 0 !== h.length || e
                            ? (0, r.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                  e &&
                                    (0, r.jsxs)("div", {
                                      className:
                                        "p-3 rounded-xl border ".concat(
                                          -1 === p
                                            ? "border-indigo-300 bg-indigo-50"
                                            : "border-gray-200 bg-white",
                                          " cursor-pointer transition-all hover:border-indigo-300"
                                        ),
                                      onClick: () => {
                                        j(-1), s(e), N(!1);
                                      },
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "flex items-center justify-between mb-2",
                                          children: (0, r.jsx)("span", {
                                            className:
                                              "text-xs font-medium text-gray-500",
                                            children: "Original Image",
                                          }),
                                        }),
                                        (0, r.jsx)("div", {
                                          className:
                                            "h-24 bg-gray-100 rounded-lg overflow-hidden",
                                          children: (0, r.jsx)("img", {
                                            src: e,
                                            alt: "Original",
                                            className:
                                              "w-full h-full object-cover",
                                          }),
                                        }),
                                      ],
                                    }),
                                  h.map((e, t) =>
                                    (0, r.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "p-3 rounded-xl border ".concat(
                                            t === p
                                              ? "border-indigo-300 bg-indigo-50"
                                              : "border-gray-200 bg-white",
                                            " cursor-pointer transition-all hover:border-indigo-300"
                                          ),
                                        onClick: () => {
                                          j(t), s(e.edited), N(!1);
                                        },
                                        children: [
                                          (0, r.jsxs)("div", {
                                            className:
                                              "flex items-center justify-between mb-2",
                                            children: [
                                              (0, r.jsxs)("span", {
                                                className:
                                                  "text-xs font-medium text-gray-500",
                                                children: ["Edit #", t + 1],
                                              }),
                                              (0, r.jsx)("span", {
                                                className:
                                                  "text-xs text-gray-400",
                                                children: S(e.timestamp),
                                              }),
                                            ],
                                          }),
                                          (0, r.jsx)("p", {
                                            className:
                                              "text-xs text-gray-700 line-clamp-2 mb-2",
                                            children: e.prompt,
                                          }),
                                          (0, r.jsxs)("div", {
                                            className: "flex space-x-1",
                                            children: [
                                              (0, r.jsx)("div", {
                                                className:
                                                  "w-1/2 h-20 bg-gray-100 rounded-lg overflow-hidden relative",
                                                children:
                                                  e.original &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                      (0, r.jsx)("img", {
                                                        src: e.original,
                                                        alt: "Before Edit ".concat(
                                                          t + 1
                                                        ),
                                                        className:
                                                          "w-full h-full object-cover",
                                                      }),
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs text-center py-0.5",
                                                        children: "Before",
                                                      }),
                                                    ],
                                                  }),
                                              }),
                                              (0, r.jsx)("div", {
                                                className:
                                                  "w-1/2 h-20 bg-gray-100 rounded-lg overflow-hidden relative",
                                                children:
                                                  e.edited &&
                                                  (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                      (0, r.jsx)("img", {
                                                        src: e.edited,
                                                        alt: "After Edit ".concat(
                                                          t + 1
                                                        ),
                                                        className:
                                                          "w-full h-full object-cover",
                                                      }),
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs text-center py-0.5",
                                                        children: "After",
                                                      }),
                                                    ],
                                                  }),
                                              }),
                                            ],
                                          }),
                                          (0, r.jsx)("div", {
                                            className: "mt-2 flex justify-end",
                                            children: (0, r.jsxs)(f.z, {
                                              size: "sm",
                                              variant: "ghost",
                                              className:
                                                "h-6 text-xs px-2 hover:bg-indigo-100 hover:text-indigo-600",
                                              onClick: (t) => {
                                                t.stopPropagation(),
                                                  s(e.edited),
                                                  N(!0);
                                              },
                                              children: [
                                                (0, r.jsx)(Q.Z, {
                                                  className: "h-3 w-3 mr-1",
                                                }),
                                                "Compare",
                                              ],
                                            }),
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                                  (0, r.jsx)("div", { ref: T }),
                                ],
                              })
                            : (0, r.jsx)("div", {
                                className:
                                  "text-center text-gray-500 text-sm p-4",
                                children:
                                  "No edits yet. Upload an image and submit a prompt to see your edit history.",
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
          Chatbot: () => {
            let [e, t] = (0, n.useState)([]),
              [a, s] = (0, n.useState)(""),
              [i, l] = (0, n.useState)(""),
              [o, d] = (0, n.useState)(!1),
              [c, m] = (0, n.useState)([]),
              [x, h] = (0, n.useState)(""),
              u = (0, n.useRef)(null);
            (0, n.useEffect)(() => {
              (async () => {
                try {
                  let e = await el.Z.list();
                  if (e && Array.isArray(e.models) && e.models.length > 0) {
                    let t = e.models.map((e) => ({
                      ...e,
                      modified_at:
                        "string" == typeof e.modified_at
                          ? e.modified_at
                          : String(e.modified_at),
                    }));
                    m(t);
                    let a = t.find((e) => "llama3:8b" === e.name);
                    h(a ? a.name : t[0].name);
                  }
                } catch (e) {}
              })();
            }, []);
            let p = async (i) => {
              if ((i.preventDefault(), !a.trim())) return;
              let r = { role: "user", content: a };
              t((e) => [...e, r]), s(""), l(""), d(!0);
              try {
                let a = await el.Z.chat({
                    model: x || "llama3:8b",
                    messages: [...e, r],
                    stream: !0,
                  }),
                  s = "";
                for await (let e of a) (s += e.message.content), l(s);
                t((e) => [...e, { role: "assistant", content: s }]), l("");
              } catch (e) {
                t((e) => [
                  ...e,
                  {
                    role: "assistant",
                    content: "Sorry, something went wrong.",
                  },
                ]),
                  l("");
              } finally {
                d(!1);
              }
            };
            return (
              (0, n.useEffect)(() => {
                u.current &&
                  u.current.scrollTo({
                    top: u.current.scrollHeight,
                    behavior: "smooth",
                  });
              }, [e, i]),
              (0, r.jsx)("div", {
                className:
                  "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-300 dark:from-zinc-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500",
                children: (0, r.jsxs)(b.Zb, {
                  className:
                    "w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto shadow-2xl bg-white/90 dark:bg-zinc-900/90 border-none backdrop-blur-md",
                  children: [
                    (0, r.jsx)(b.Ol, {
                      className: "pb-0",
                      children: (0, r.jsxs)("div", {
                        className:
                          "flex items-center justify-between px-4 py-2",
                        children: [
                          (0, r.jsx)(b.ll, {
                            className:
                              "text-lg font-semibold text-indigo-600 dark:text-indigo-300 tracking-tight p-0 m-0",
                            children: "Ollama Chat",
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, r.jsx)("label", {
                                htmlFor: "model-select",
                                className:
                                  "text-xs font-medium text-muted-foreground mr-2 mb-0",
                                children: "Model",
                              }),
                              (0, r.jsxs)(N.Ph, {
                                value: x,
                                onValueChange: (e) => {
                                  h(e);
                                },
                                children: [
                                  (0, r.jsx)(N.i4, {
                                    id: "model-select",
                                    className: "w-36 h-8 text-xs",
                                    children: (0, r.jsx)(N.ki, {
                                      placeholder: "Select a model",
                                    }),
                                  }),
                                  (0, r.jsx)(N.Bw, {
                                    children: (0, r.jsxs)(N.DI, {
                                      children: [
                                        (0, r.jsx)(N.n5, {
                                          children: "Available Models",
                                        }),
                                        c.map((e) =>
                                          (0, r.jsx)(
                                            N.Ql,
                                            {
                                              value: e.name,
                                              className: "text-xs",
                                              children: e.name,
                                            },
                                            e.name
                                          )
                                        ),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)(b.aY, {
                      className: "p-0",
                      children: (0, r.jsx)("div", {
                        className:
                          "h-[28rem] md:h-[32rem] lg:h-[36rem] p-4 overflow-y-auto",
                        ref: u,
                        children: (0, r.jsxs)("div", {
                          className: "space-y-4",
                          children: [
                            e.map((e, t) =>
                              (0, r.jsx)(
                                "div",
                                {
                                  className:
                                    "user" === e.role
                                      ? "flex justify-end"
                                      : "flex justify-start",
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "user" === e.role
                                        ? "inline-block bg-gradient-to-br from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-2xl shadow-md max-w-[75%] transition-all"
                                        : "inline-block bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-4 py-2 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700 max-w-[75%] transition-all",
                                    children: (0, r.jsx)(ea.U, {
                                      children: e.content,
                                    }),
                                  }),
                                },
                                t
                              )
                            ),
                            i &&
                              (0, r.jsx)("div", {
                                className: "flex justify-start",
                                children: (0, r.jsx)("span", {
                                  className:
                                    "inline-block max-w-[75%] bg-white dark:bg-zinc-800 text-zinc-400 px-4 py-2 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700 animate-pulse",
                                  children: i,
                                }),
                              }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)(b.eW, {
                      className:
                        "border-t border-zinc-200 dark:border-zinc-700 p-4 bg-white/80 dark:bg-zinc-900/80 rounded-b-xl",
                      children: (0, r.jsxs)("form", {
                        onSubmit: p,
                        className: "flex w-full gap-2 items-stretch",
                        children: [
                          (0, r.jsx)(Y, {
                            value: a,
                            onChange: (e) => {
                              s(e.target.value);
                            },
                            placeholder: "Send a message...",
                            disabled: o,
                            className:
                              "flex-1 min-h-[56px] max-h-40 resize-y focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all shadow-sm bg-white/80 dark:bg-zinc-800/80",
                            autoComplete: "off",
                            "aria-label": "Chat input",
                            rows: 2,
                          }),
                          (0, r.jsx)(f.z, {
                            type: "submit",
                            disabled: o || !a.trim(),
                            className:
                              "bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg hover:from-cyan-400 hover:to-blue-500 focus:ring-2 focus:ring-cyan-400 transition-all h-full min-h-[56px] px-6",
                            style: { alignSelf: "stretch" },
                            children: "Send",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              })
            );
          },
          BloodDonationGuide: () => {
            let [e, t] = (0, n.useState)("O+"),
              [a, s] = (0, n.useState)(!1),
              [i, l] = (0, n.useState)("donate"),
              o = Object.keys(eg),
              c =
                "https://www.google.com/search?q=blood+donation+centers+near+me";
            return (
              (0, n.useEffect)(() => {
                let e = document.createElement("style");
                return (
                  (e.type = "text/css"),
                  (e.innerText =
                    "\n@keyframes drip {\n  0% { transform: translateY(-10px); opacity: 0; }\n  50% { transform: translateY(0); opacity: 1; }\n  100% { transform: translateY(10px); opacity: 0; }\n}\n.blood-drip {\n  animation: drip 2s infinite;\n}\n"),
                  document.head.appendChild(e),
                  () => {
                    e &&
                      document.head.contains(e) &&
                      document.head.removeChild(e);
                  }
                );
              }, []),
              (0, n.useEffect)(() => {
                s(!0);
                let e = setTimeout(() => s(!1), 1e3);
                return () => clearTimeout(e);
              }, [e]),
              (0, r.jsxs)("div", {
                className: "bg-gradient-to-b from-gray-50 to-white rounded-2xl",
                children: [
                  (0, r.jsx)(ee.x7, { richColors: !0, position: "top-right" }),
                  (0, r.jsxs)("div", {
                    className:
                      "w-full h-full mx-auto max-w-4xl px-2 py-4 sm:px-6 sm:py-9 md:px-16 md:py-16",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-col sm:flex-row items-center justify-between mb-8 relative gap-y-4",
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsxs)("div", {
                                className: "relative inline-block",
                                children: [
                                  (0, r.jsx)("h1", {
                                    className:
                                      "text-2xl md:text-4xl font-bold text-gray-800 mb-1",
                                    children: "Blood Donation Guide",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute -top-2 -right-12 bg-red-600 text-white text-xs px-2 py-1 rounded-full",
                                    children: "2025",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "h-1 w-20 bg-red-600 rounded-full mb-3",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("p", {
                                className: "text-gray-600",
                                children:
                                  "Select your blood type to see donation compatibility",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "flex items-center space-x-3 mt-4 sm:mt-0",
                            children: [
                              (0, r.jsx)("button", {
                                onClick: () => {
                                  navigator.clipboard.writeText(c),
                                    ee.Am.success(
                                      "Share link copied to clipboard!",
                                      {
                                        icon: (0, r.jsx)(eo.Z, {
                                          className: "h-5 w-5",
                                        }),
                                      }
                                    );
                                },
                                className:
                                  "bg-blue-100 text-blue-700 p-3 rounded-full hover:bg-blue-200 transition-colors shadow-sm",
                                "aria-label": "Share",
                                title: "Share this page",
                                children: (0, r.jsx)(ed.Z, {
                                  className: "h-5 w-5",
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, r.jsx)(ec.Z, {
                                    className: "h-12 w-12 text-red-600 ".concat(
                                      a ? "animate-bounce" : ""
                                    ),
                                  }),
                                  (0, r.jsx)("span", {
                                    className:
                                      "absolute -top-1 -right-1 bg-red-200 text-red-700 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center",
                                    children: e.charAt(e.length - 1),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "relative mb-10 pt-4",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 -translate-y-1/2 z-0",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "flex justify-between overflow-x-auto pb-2 relative z-10 gap-x-2 sm:gap-x-0",
                            children: o.map((a) =>
                              (0, r.jsxs)(
                                "button",
                                {
                                  onClick: () => t(a),
                                  className:
                                    "flex flex-col items-center transition-all mx-1 min-w-[60px] transform ".concat(
                                      e === a ? "scale-110" : "hover:scale-105"
                                    ),
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "rounded-full w-12 h-12 flex items-center justify-center mb-1 shadow-md transition-all ".concat(
                                          e === a
                                            ? "bg-red-600 text-white ring-4 ring-red-200"
                                            : "bg-white text-gray-800 hover:bg-gray-100 border border-gray-200"
                                        ),
                                      children: a,
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "h-1 w-6 rounded-full ".concat(
                                        e === a
                                          ? "bg-red-600"
                                          : "bg-transparent"
                                      ),
                                    }),
                                  ],
                                },
                                a
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8 border-t-4 border-red-600 transform transition-all hover:shadow-xl",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "flex flex-col sm:flex-row items-center sm:items-start mb-6 gap-y-4",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "relative mb-4 sm:mb-0 sm:mr-6 flex-shrink-0",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "w-20 h-32 sm:w-24 sm:h-40 relative",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-b from-red-400 to-red-600 opacity-80 rounded-lg",
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "absolute inset-x-0 top-0 h-6 bg-gray-200 rounded-t-lg",
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "absolute inset-0 flex items-center justify-center",
                                        children: (0, r.jsx)("span", {
                                          className:
                                            "text-white font-bold text-2xl sm:text-3xl z-10",
                                          children: e,
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "absolute inset-0 bg-white opacity-10 animate-pulse",
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-100 rounded-full p-2 shadow-md",
                                        children: (0, r.jsx)(em.Z, {
                                          className: "h-6 w-6 text-red-600",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute -bottom-4 left-1/2 transform -translate-x-1/2",
                                    children: (0, r.jsx)("div", {
                                      className:
                                        "w-2 h-2 bg-red-500 rounded-full blood-drip",
                                    }),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "flex-1 w-full",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "flex items-center mb-2 gap-2",
                                    children: [
                                      (0, r.jsx)("h2", {
                                        className:
                                          "text-2xl md:text-3xl font-bold",
                                        children: e,
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "ml-0 sm:ml-3 px-2 sm:px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs sm:text-sm font-medium mt-2 sm:mt-0",
                                        children: [
                                          eg[e].percentage,
                                          " of population",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "bg-gray-50 rounded-lg p-3 sm:p-4 mt-3",
                                    children: [
                                      (0, r.jsxs)("h3", {
                                        className:
                                          "text-base sm:text-lg font-semibold mb-2 flex items-center",
                                        children: [
                                          (0, r.jsx)(ex.Z, {
                                            className:
                                              "h-5 w-5 mr-2 text-blue-600",
                                          }),
                                          "Key Facts",
                                        ],
                                      }),
                                      (0, r.jsx)("ul", {
                                        className:
                                          "space-y-2 text-gray-700 text-sm sm:text-base",
                                        children: eg[e].facts.map((e, t) =>
                                          (0, r.jsxs)(
                                            "li",
                                            {
                                              className: "flex items-start",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "inline-block bg-blue-100 text-blue-600 rounded-full p-1 mr-2 mt-1 flex-shrink-0",
                                                  children: (0, r.jsx)(eo.Z, {
                                                    size: 12,
                                                  }),
                                                }),
                                                (0, r.jsx)("span", {
                                                  children: e,
                                                }),
                                              ],
                                            },
                                            t
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "mt-8",
                            children: (0, r.jsxs)("div", {
                              className:
                                "bg-white rounded-xl overflow-hidden border border-gray-200",
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "bg-gradient-to-r from-purple-600 to-indigo-600 p-3 sm:p-4 text-white",
                                  children: [
                                    (0, r.jsxs)("h3", {
                                      className:
                                        "text-md md:text-xl font-bold flex items-center",
                                      children: [
                                        (0, r.jsx)(ed.Z, {
                                          className: "h-5 w-5 mr-2",
                                        }),
                                        "Blood Type Compatibility Network",
                                      ],
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-purple-100 text-sm",
                                      children:
                                        "Interactive visualization of blood type relationships",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "p-3 sm:p-4",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex justify-center gap-4 mb-6",
                                      children: [
                                        (0, r.jsx)("button", {
                                          onClick: () => l("donate"),
                                          className:
                                            "px-4 sm:px-6 py-2 rounded-full font-semibold transition-all shadow-sm border text-xs sm:text-base ".concat(
                                              "donate" === i
                                                ? "bg-green-600 text-white border-green-700 shadow-md"
                                                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-green-50"
                                            ),
                                          children: "I Want to Donate",
                                        }),
                                        (0, r.jsx)("button", {
                                          onClick: () => l("receive"),
                                          className:
                                            "px-4 sm:px-6 py-2 rounded-full font-semibold transition-all shadow-sm border text-xs sm:text-base ".concat(
                                              "receive" === i
                                                ? "bg-blue-600 text-white border-blue-700 shadow-md"
                                                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-50"
                                            ),
                                          children: "I Need Blood",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)(ef, {
                                      selectedBloodType: e,
                                      mode: i,
                                      onSelectBloodType: t,
                                    }),
                                    (0, r.jsx)(eb, { mode: i }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "mt-4 text-center text-gray-600 text-sm",
                                      children: (0, r.jsxs)("p", {
                                        children: [
                                          (0, r.jsx)("strong", {
                                            children: "Interactive guide:",
                                          }),
                                          " ",
                                          "donate" === i
                                            ? "Green nodes show who can receive your blood. Click any node to change your blood type."
                                            : "Blue nodes show who can donate blood to you. Click any node to change your blood type.",
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "bg-white rounded-xl shadow-lg p-4 sm:p-6 border-l-4 border-blue-600 mb-8",
                        children: [
                          (0, r.jsxs)("h3", {
                            className:
                              "text-md md:text-xl font-semibold mb-4 flex items-center",
                            children: [
                              (0, r.jsx)(ex.Z, {
                                className: "h-6 w-6 mr-2 text-blue-600",
                              }),
                              "General Blood Donation Information",
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "bg-blue-50 p-3 sm:p-4 rounded-lg flex flex-col sm:flex-row items-start",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "mr-3",
                                    children: (0, r.jsx)(T.Z, {
                                      className:
                                        "h-4 md:h-6 w-4 md:w-6 text-blue-600",
                                    }),
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("h4", {
                                        className:
                                          "font-medium text-blue-800 mb-1",
                                        children: "Donation Frequency",
                                      }),
                                      (0, r.jsx)("p", {
                                        children:
                                          "Most people can donate blood every 56 days (8 weeks)",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "bg-green-50 p-3 sm:p-4 rounded-lg flex flex-col sm:flex-row items-start",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "mr-3",
                                    children: (0, r.jsx)(eh.Z, {
                                      className:
                                        "h-4 md:h-6 w-4 md:w-6 text-green-600",
                                    }),
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("h4", {
                                        className:
                                          "font-medium text-green-800 mb-1",
                                        children: "Time Required",
                                      }),
                                      (0, r.jsx)("p", {
                                        children:
                                          "The donation process takes about 10-15 minutes, while the entire visit takes about an hour",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "bg-purple-50 p-3 sm:p-4 rounded-lg flex flex-col sm:flex-row items-start",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "mr-3",
                                    children: (0, r.jsx)(eu.Z, {
                                      className:
                                        "h-4 md:h-6 w-4 md:w-6 text-purple-600",
                                    }),
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("h4", {
                                        className:
                                          "font-medium text-purple-800 mb-1",
                                        children: "Lives Saved",
                                      }),
                                      (0, r.jsx)("p", {
                                        children:
                                          "A single donation can save up to three lives",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-6 bg-gray-50 p-3 sm:p-4 rounded-lg",
                            children: [
                              (0, r.jsxs)("h4", {
                                className: "font-medium mb-2 flex items-center",
                                children: [
                                  (0, r.jsx)(ep.Z, {
                                    className: "h-5 w-5 mr-2 text-amber-600",
                                  }),
                                  (0, r.jsx)("span", {
                                    children: "Important Facts",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("ul", {
                                className:
                                  "space-y-2 ml-6 sm:ml-8 list-disc text-gray-700 text-xs sm:text-base",
                                children: [
                                  (0, r.jsx)("li", {
                                    children:
                                      "Type O negative blood is considered the universal donor type and is often used in emergencies",
                                  }),
                                  (0, r.jsx)("li", {
                                    children:
                                      "Type AB positive is the universal recipient for red blood cells",
                                  }),
                                  (0, r.jsx)("li", {
                                    children:
                                      "Only about 38% of the population is eligible to donate blood",
                                  }),
                                  (0, r.jsx)("li", {
                                    children:
                                      "Platelets and plasma can be donated separately from whole blood",
                                  }),
                                  (0, r.jsx)("li", {
                                    children:
                                      "Your body replenishes the fluid lost from donation within 24 hours",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "bg-red-50 rounded-xl p-4 sm:p-5 mb-8 border border-red-100 relative overflow-hidden",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-red-100 to-transparent",
                          }),
                          (0, r.jsxs)("div", {
                            className: "relative z-10",
                            children: [
                              (0, r.jsx)("h3", {
                                className:
                                  "text-md md:text-xl font-semibold mb-3 text-red-800",
                                children: "Why Your Donation Matters",
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "text-red-900 mb-3 text-sm md:text-base",
                                children:
                                  "Every 2 seconds, someone needs blood. Your donation can be the difference between life and death for accident victims, surgery patients, and those battling cancer.",
                              }),
                              (0, r.jsxs)(d(), {
                                className:
                                  "bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto px-6 py-2 md:py-3 rounded-lg font-medium transition-colors shadow-md inline-flex items-center justify-center",
                                href: c,
                                target: "_blank",
                                children: [
                                  (0, r.jsx)(em.Z, {
                                    className: "h-3 md:h-5 w-3 md:w-5 mr-2",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "text-sm md:text-base",
                                    children: "Find Donation Centers",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "mt-8 text-center text-gray-500 text-xs sm:text-sm bg-gray-50 p-3 sm:p-4 rounded-lg",
                        children: [
                          (0, r.jsx)("p", {
                            children:
                              "This is an informational guide only. Always consult healthcare professionals for medical advice.",
                          }),
                          (0, r.jsxs)("p", {
                            className:
                              "flex items-center justify-center gap-1 mx-auto mt-2 w-full",
                            children: [
                              (0, r.jsx)("span", { children: "Made with" }),
                              (0, r.jsx)(em.Z, {
                                className: "inline-block text-red-400",
                                size: 12,
                              }),
                              " by",
                              (0, r.jsx)("a", {
                                href: "https://amankumar.ai",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-blue-600 hover:underline",
                                children: "Aman",
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className: "mt-1",
                            children:
                              "\xa9 2025 Blood Donation Guide. All rights reserved.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          IndiaHighRtoPins: function () {
            var e, t, a;
            let [s, i] = (0, n.useState)([]),
              [l, o] = (0, n.useState)(!0),
              [d, c] = (0, n.useState)(""),
              [m, x] = (0, n.useState)(""),
              [h, u] = (0, n.useState)("overview"),
              [p, g] = (0, n.useState)({
                key: "pincode",
                direction: "ascending",
              });
            (0, n.useEffect)(() => {
              !(async function () {
                try {
                  let e = await fetch(
                      "/content/apps/india-high-rto/highRtos.csv"
                    ).then((e) => e.text()),
                    t = ev()
                      .parse(e, {
                        header: !0,
                        dynamicTyping: !0,
                        skipEmptyLines: !0,
                      })
                      .data.map((e) => ({
                        pincode: e.PINCODE,
                        district: e.DISTRICT,
                        state: (function (e) {
                          let t = e.state,
                            a = e.district;
                          if ("PRADESH" === t && a) {
                            if (a.includes("UTTAR")) return "UTTAR PRADESH";
                            if (a.includes("MADHYA")) return "MADHYA PRADESH";
                            if (a.includes("HIMACHAL"))
                              return "HIMACHAL PRADESH";
                            if (a.includes("ANDHRA")) return "ANDHRA PRADESH";
                            if (a.includes("ARUNACHAL"))
                              return "ARUNACHAL PRADESH";
                          }
                          return t;
                        })({ ...e, state: e.STATENAME, district: e.DISTRICT }),
                      }));
                  i(t);
                } catch (e) {
                  console.error("Error loading CSV:", e);
                } finally {
                  o(!1);
                }
              })();
            }, []);
            let j = (0, n.useMemo)(() => {
                if (!s.length) return [];
                let e = [...s];
                if (d) {
                  let t = d.toLowerCase();
                  e = e.filter(
                    (e) =>
                      String(e.pincode).includes(t) ||
                      (e.district && e.district.toLowerCase().includes(t)) ||
                      (e.state && e.state.toLowerCase().includes(t))
                  );
                }
                return (
                  m && (e = e.filter((e) => e.state === m)),
                  e.sort((e, t) => {
                    let a = e[p.key],
                      s = t[p.key],
                      i =
                        "string" == typeof a && "string" == typeof s
                          ? a.localeCompare(s)
                          : Number(a) - Number(s);
                    return "ascending" === p.direction ? i : -i;
                  }),
                  e
                );
              }, [s, d, m, p]),
              v = (0, n.useMemo)(() => {
                if (!s.length) return [];
                let e = {};
                return (
                  s.forEach((t) => {
                    t.state && (e[t.state] = (e[t.state] || 0) + 1);
                  }),
                  Object.entries(e)
                    .map((e) => {
                      let [t, a] = e;
                      return { name: t, value: a };
                    })
                    .sort((e, t) => t.value - e.value)
                    .slice(0, 10)
                );
              }, [s]),
              N = (0, n.useMemo)(() => {
                if (!s.length) return [];
                let e = {};
                return (
                  s.forEach((t) => {
                    if (t.pincode) {
                      let a = String(t.pincode).charAt(0);
                      e[a] = (e[a] || 0) + 1;
                    }
                  }),
                  Object.entries(e)
                    .map((e) => {
                      let [t, a] = e;
                      return {
                        name: ""
                          .concat(t, "xx xxx - ")
                          .concat(e4[t] || "Other"),
                        value: a,
                        digit: t,
                      };
                    })
                    .sort((e, t) => t.value - e.value)
                );
              }, [s]),
              y = (0, n.useMemo)(() => {
                if (!s.length) return [];
                let e = {};
                return (
                  s.forEach((t) => {
                    t.district && (e[t.district] = (e[t.district] || 0) + 1);
                  }),
                  Object.entries(e)
                    .map((e) => {
                      let [t, a] = e;
                      return { name: t, value: a };
                    })
                    .sort((e, t) => t.value - e.value)
                    .slice(0, 10)
                );
              }, [s]),
              w = (0, n.useMemo)(() => {
                if (!s.length) return [];
                let e = new Set();
                return (
                  s.forEach((t) => {
                    t.state && e.add(t.state);
                  }),
                  Array.from(e).sort()
                );
              }, [s]);
            (0, n.useMemo)(() => {
              if (!s.length) return [];
              let e = (e) => e.trim().toLowerCase(),
                t = {};
              return (
                s.forEach((a) => {
                  let s = e(a.state);
                  t[s] = (t[s] || 0) + 1;
                }),
                e6
                  .map((a) => {
                    let { state: s, population: i, pincodes: r } = a,
                      n = t[e(s)] || 0;
                    return {
                      state: s,
                      highRtoCount: n,
                      totalPincodes: r,
                      rtoPercent: r > 0 ? (n / r) * 100 : 0,
                    };
                  })
                  .filter((e) => e.totalPincodes > 0)
                  .sort((e, t) => t.rtoPercent - e.rtoPercent)
                  .slice(0, 10)
              );
            }, [s]);
            let k = (0, n.useMemo)(() => {
                if (!s.length) return [];
                let e = (e) => e.trim().toLowerCase(),
                  t = {};
                return (
                  s.forEach((a) => {
                    let s = e(a.state);
                    t[s] = (t[s] || 0) + 1;
                  }),
                  e6
                    .map((a) => {
                      let { state: s, population: i, pincodes: r } = a,
                        n = t[e(s)] || 0;
                      return {
                        state: s,
                        highRtoCount: n,
                        totalPincodes: r,
                        rtoPercent: r > 0 ? (n / r) * 100 : 0,
                      };
                    })
                    .filter((e) => e.totalPincodes > 0 && e.highRtoCount > 0)
                    .sort((e, t) => t.highRtoCount - e.highRtoCount)
                    .slice(0, 10)
                );
              }, [s]),
              T = (0, n.useMemo)(() => {
                if (!s.length)
                  return {
                    totalPincodes: 0,
                    uniqueStates: 0,
                    uniqueDistricts: 0,
                    topDistrict: { name: "", count: 0 },
                  };
                let e = new Set(s.map((e) => e.state)).size,
                  t = new Set(s.map((e) => e.district)).size,
                  a = {};
                s.forEach((e) => {
                  e.state && (a[e.state] = (a[e.state] || 0) + 1);
                });
                let i = Object.entries(a).sort((e, t) => t[1] - e[1])[0],
                  r = i ? { name: i[0], count: i[1] } : { name: "", count: 0 },
                  n = {};
                s.forEach((e) => {
                  e.district && (n[e.district] = (n[e.district] || 0) + 1);
                });
                let l = Object.entries(n).sort((e, t) => t[1] - e[1])[0],
                  o = l ? { name: l[0], count: l[1] } : { name: "", count: 0 };
                return {
                  totalPincodes: s.length,
                  uniqueStates: e,
                  uniqueDistricts: t,
                  topState: r,
                  topDistrict: o,
                };
              }, [s]),
              Z = () => {
                let e = new Blob([ev().unparse(s)], {
                    type: "text/csv;charset=utf-8;",
                  }),
                  t = URL.createObjectURL(e),
                  a = document.createElement("a");
                (a.href = t),
                  a.setAttribute(
                    "download",
                    "high_rto_pincodes_".concat(
                      new Date().toISOString().split("T")[0],
                      ".csv"
                    )
                  ),
                  document.body.appendChild(a),
                  a.click(),
                  document.body.removeChild(a),
                  URL.revokeObjectURL(t);
              };
            return l
              ? (0, r.jsxs)("div", {
                  className: "container max-w-7xl mx-auto p-6 space-y-8",
                  children: [
                    (0, r.jsx)(M, { className: "h-12 w-64" }),
                    (0, r.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                      children: [
                        (0, r.jsx)(M, { className: "h-40" }),
                        (0, r.jsx)(M, { className: "h-40" }),
                        (0, r.jsx)(M, { className: "h-40" }),
                      ],
                    }),
                    (0, r.jsx)(M, { className: "h-64" }),
                    (0, r.jsx)(M, { className: "h-96" }),
                  ],
                })
              : (0, r.jsxs)("main", {
                  className:
                    "container max-w-6xl mx-auto p-6 md:p-12 space-y-8",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row md:items-center justify-between gap-4",
                      children: [
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("h1", {
                              className: "text-3xl font-bold tracking-tight",
                              children:
                                "\uD83D\uDEAB High-RTO PIN Code Analyzer",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-muted-foreground",
                              children:
                                "Analyze and explore PIN codes with high return-to-origin (RTO) rates across India",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, r.jsxs)(ey, {
                              children: [
                                (0, r.jsx)(ew, {
                                  asChild: !0,
                                  children: (0, r.jsxs)(f.z, {
                                    variant: "outline",
                                    size: "sm",
                                    children: [
                                      (0, r.jsx)(ex.Z, {
                                        className: "w-4 h-4 mr-2",
                                      }),
                                      "About RTO",
                                    ],
                                  }),
                                }),
                                (0, r.jsxs)(eZ, {
                                  children: [
                                    (0, r.jsxs)(eC, {
                                      children: [
                                        (0, r.jsx)(eS, {
                                          children: "About High-RTO PIN Codes",
                                        }),
                                        (0, r.jsxs)(e_, {
                                          className: "space-y-2",
                                          children: [
                                            (0, r.jsxs)("p", {
                                              children: [
                                                (0, r.jsx)("strong", {
                                                  children:
                                                    "Return-to-Origin (RTO)",
                                                }),
                                                " occurs when a shipped package cannot be delivered and is returned to the sender.",
                                              ],
                                            }),
                                            (0, r.jsx)("p", {
                                              children:
                                                "High-RTO PIN codes are locations where packages frequently fail to be delivered, causing significant operational challenges and costs for e-commerce and logistics companies.",
                                            }),
                                            (0, r.jsx)("p", {
                                              children:
                                                "Common reasons for high RTO rates include:",
                                            }),
                                            (0, r.jsxs)("ul", {
                                              className:
                                                "list-disc pl-5 space-y-1",
                                              children: [
                                                (0, r.jsx)("li", {
                                                  children:
                                                    "Address inaccuracies or difficult-to-locate addresses",
                                                }),
                                                (0, r.jsx)("li", {
                                                  children:
                                                    "Cash-on-Delivery rejections",
                                                }),
                                                (0, r.jsx)("li", {
                                                  children:
                                                    "Recipient unavailability",
                                                }),
                                                (0, r.jsx)("li", {
                                                  children:
                                                    "Areas with challenging last-mile delivery infrastructure",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)(eP, {
                                      children: (0, r.jsx)(eA, {
                                        children: "Close",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)(f.z, {
                              variant: "default",
                              onClick: Z,
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)(J.Z, { className: "w-4 h-4" }),
                                "Download Data",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                      children: [
                        (0, r.jsxs)(b.Zb, {
                          children: [
                            (0, r.jsx)(b.Ol, {
                              className: "pb-2",
                              children: (0, r.jsx)(b.ll, {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: "Total PIN Codes",
                              }),
                            }),
                            (0, r.jsxs)(b.aY, {
                              children: [
                                (0, r.jsx)("div", {
                                  className: "text-3xl font-bold",
                                  children: T.totalPincodes.toLocaleString(),
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1",
                                  children:
                                    "Unique high-RTO PIN codes across India",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)(b.Zb, {
                          children: [
                            (0, r.jsx)(b.Ol, {
                              className: "pb-2",
                              children: (0, r.jsx)(b.ll, {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: "States Affected",
                              }),
                            }),
                            (0, r.jsxs)(b.aY, {
                              children: [
                                (0, r.jsx)("div", {
                                  className: "text-3xl font-bold",
                                  children: T.uniqueStates,
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1",
                                  children:
                                    "States and union territories with high-RTO areas",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)(b.Zb, {
                          children: [
                            (0, r.jsx)(b.Ol, {
                              className: "pb-2",
                              children: (0, r.jsx)(b.ll, {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: "Top State",
                              }),
                            }),
                            (0, r.jsxs)(b.aY, {
                              children: [
                                (0, r.jsx)("div", {
                                  className: "text-3xl font-bold",
                                  children:
                                    null === (e = T.topState) || void 0 === e
                                      ? void 0
                                      : e.name,
                                }),
                                (0, r.jsxs)("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1",
                                  children: [
                                    "With ",
                                    null === (t = T.topState) || void 0 === t
                                      ? void 0
                                      : t.count,
                                    " high-RTO PIN codes (",
                                    Math.round(
                                      ((null ===
                                        (a = T.topState || { count: 0 }) ||
                                      void 0 === a
                                        ? void 0
                                        : a.count) /
                                        T.totalPincodes) *
                                        100
                                    ),
                                    "%)",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)(b.Zb, {
                          children: [
                            (0, r.jsx)(b.Ol, {
                              className: "pb-2",
                              children: (0, r.jsx)(b.ll, {
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: "Top District",
                              }),
                            }),
                            (0, r.jsxs)(b.aY, {
                              children: [
                                (0, r.jsx)("div", {
                                  className: "text-3xl font-bold",
                                  children: T.topDistrict.name,
                                }),
                                (0, r.jsxs)("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1",
                                  children: [
                                    "With ",
                                    T.topDistrict.count,
                                    " high-RTO PIN codes",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(A.mQ, {
                      defaultValue: "overview",
                      value: h,
                      onValueChange: u,
                      className: "w-full",
                      children: [
                        (0, r.jsxs)(A.dr, {
                          className: "grid grid-cols-4 md:w-auto w-full",
                          children: [
                            (0, r.jsxs)(A.SP, {
                              value: "overview",
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)(eR.Z, { className: "h-4 w-4" }),
                                (0, r.jsx)("span", {
                                  className: "hidden sm:inline",
                                  children: "Overview",
                                }),
                              ],
                            }),
                            (0, r.jsxs)(A.SP, {
                              value: "map",
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)(eD.Z, { className: "h-4 w-4" }),
                                (0, r.jsx)("span", {
                                  className: "hidden sm:inline",
                                  children: "Regional Analysis",
                                }),
                              ],
                            }),
                            (0, r.jsxs)(A.SP, {
                              value: "insights",
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)(ex.Z, { className: "h-4 w-4" }),
                                (0, r.jsx)("span", {
                                  className: "hidden sm:inline",
                                  children: "Key Insights",
                                }),
                              ],
                            }),
                            (0, r.jsxs)(A.SP, {
                              value: "table",
                              className: "flex items-center gap-2",
                              children: [
                                (0, r.jsx)(eO.Z, { className: "h-4 w-4" }),
                                (0, r.jsx)("span", {
                                  className: "hidden sm:inline",
                                  children: "PIN Code Data",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)(A.nU, {
                          value: "overview",
                          className: "space-y-6",
                          children: (0, r.jsx)(eK, {
                            stateCountData: v,
                            districtCountData: y,
                            stateRtoAbsoluteData: k,
                          }),
                        }),
                        (0, r.jsx)(A.nU, {
                          value: "map",
                          className: "space-y-6",
                          children: (0, r.jsx)(e2, {
                            regionCountData: N,
                            pinRegionMap: e4,
                            colors: e8,
                            totalRows: s.length,
                          }),
                        }),
                        (0, r.jsx)(A.nU, {
                          value: "insights",
                          className: "space-y-6",
                          children: (0, r.jsx)(e1, { stateCountData: v }),
                        }),
                        (0, r.jsx)(A.nU, {
                          value: "table",
                          className: "space-y-6",
                          children: (0, r.jsx)(e3, {
                            filter: d,
                            setFilter: c,
                            stateFilter: m,
                            setStateFilter: x,
                            uniqueStates: w,
                            handleDownload: Z,
                            sortConfig: p,
                            handleSort: (e) => {
                              g((t) =>
                                t.key === e
                                  ? {
                                      key: e,
                                      direction:
                                        "ascending" === t.direction
                                          ? "descending"
                                          : "ascending",
                                    }
                                  : { key: e, direction: "ascending" }
                              );
                            },
                            filteredData: j,
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("footer", {
                      className:
                        "border-t pt-6 text-center text-sm text-muted-foreground",
                      children: [
                        (0, r.jsxs)("p", {
                          children: [
                            "High-RTO PIN Code Analyzer \xa9 ",
                            new Date().getFullYear(),
                          ],
                        }),
                        (0, r.jsx)("p", {
                          className: "mt-1",
                          children:
                            "Data represents PIN codes with historically high Return-to-Origin rates.",
                        }),
                        (0, r.jsx)(eI, {}),
                      ],
                    }),
                  ],
                });
          },
          F1Dashboard: () => {
            let [e] = (0, n.useState)({
                races: tr,
                currentRaceIndex: "monaco",
                driverStandings: to.filter((e) => null !== e),
                constructorStandings: td.filter((e) => null !== e),
              }),
              [t] = (0, n.useState)(e.races),
              a = new Date(),
              s = t.findIndex((e) => {
                let t = new Date(e.date);
                return (
                  t.getFullYear() === a.getFullYear() &&
                  t.getMonth() === a.getMonth() &&
                  t.getDate() === a.getDate()
                );
              }),
              i = t.findIndex((e) => new Date(e.date) > a),
              l = -1 !== s ? s : -1 !== i ? i : t.length - 1,
              [o, d] = (0, n.useState)(l),
              c = t[o],
              m = c.sessions.find((e) => new Date(e.time) > a) || null,
              x = e.driverStandings,
              h = e.constructorStandings,
              u = (e) =>
                new Date(e).toLocaleString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  timeZoneName: "short",
                }),
              p = (e) => {
                let t = new Date(e).getTime() - a.getTime();
                return t < 0
                  ? "Event has passed"
                  : ""
                      .concat(Math.floor(t / 864e5), "d ")
                      .concat(Math.floor((t % 864e5) / 36e5), "h ")
                      .concat(Math.floor((t % 36e5) / 6e4), "m");
              };
            return (0, r.jsx)("div", {
              className:
                "w-full min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 dark:from-[#18181b] dark:to-[#23272f] transition-colors",
              children: (0, r.jsxs)("div", {
                className: "container mx-auto max-w-7xl px-2 sm:px-4 py-6",
                children: [
                  (0, r.jsx)(tm, {}),
                  (0, r.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10",
                    children: [
                      (0, r.jsxs)("section", {
                        className: "lg:col-span-2",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6",
                            children: [
                              (0, r.jsxs)("button", {
                                className:
                                  "flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-blue-100 dark:hover:bg-blue-900 disabled:opacity-40 transition-all",
                                onClick: () => d((e) => Math.max(0, e - 1)),
                                disabled: 0 === o,
                                "aria-label": "Previous race",
                                children: [
                                  (0, r.jsx)(e7.Z, { className: "w-5 h-5" }),
                                  " Prev",
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [
                                  (0, r.jsx)("span", {
                                    className:
                                      "text-3xl font-black text-slate-900 dark:text-white tracking-tight drop-shadow-sm",
                                    children: c.name,
                                  }),
                                  (0, r.jsx)("span", {
                                    className:
                                      "text-base text-slate-500 dark:text-slate-400 font-medium",
                                    children: c.location,
                                  }),
                                  (0, r.jsx)("span", {
                                    className:
                                      "inline-block px-3 py-1 rounded-full text-xs font-bold shadow mt-2 tracking-wide\n                  ".concat(
                                        a < new Date(c.date)
                                          ? o === i
                                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-700"
                                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-700"
                                          : a.toDateString() ===
                                            new Date(c.date).toDateString()
                                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 border border-green-200 dark:border-green-700"
                                          : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700",
                                        "\n                "
                                      ),
                                    children:
                                      a < new Date(c.date)
                                        ? o === i
                                          ? "Upcoming"
                                          : "Later"
                                        : a.toDateString() ===
                                          new Date(c.date).toDateString()
                                        ? "Today"
                                        : "Completed",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("button", {
                                className:
                                  "flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-blue-100 dark:hover:bg-blue-900 disabled:opacity-40 transition-all",
                                onClick: () =>
                                  d((e) => Math.min(t.length - 1, e + 1)),
                                disabled: o === t.length - 1,
                                "aria-label": "Next race",
                                children: [
                                  -1 !== i && o < t.length - 1
                                    ? "Next"
                                    : "Later",
                                  " ",
                                  (0, r.jsx)(e9.Z, { className: "w-5 h-5" }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-8 border border-slate-200 dark:border-slate-700",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "flex items-center gap-3",
                                    children: (0, r.jsxs)("span", {
                                      className:
                                        "inline-flex items-center px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm",
                                      children: [
                                        (0, r.jsx)(te.Z, {
                                          className: "w-4 h-4 mr-1 ".concat(
                                            a > new Date(c.date)
                                              ? "text-black dark:text-white"
                                              : "text-red-500"
                                          ),
                                        }),
                                        u(c.date),
                                      ],
                                    }),
                                  }),
                                  o === i &&
                                    a < new Date(c.date) &&
                                    (0, r.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, r.jsx)(T.Z, {
                                          className: "w-4 h-4 text-blue-500",
                                        }),
                                        (0, r.jsxs)("span", {
                                          className: "text-sm font-semibold",
                                          children: [
                                            "Next session:",
                                            (0, r.jsx)("span", {
                                              className: "ml-1",
                                              children: m
                                                ? m.name
                                                : "No more sessions",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "relative border-l-2 border-slate-200 dark:border-slate-600 pl-6 mt-4",
                                children:
                                  a > new Date(c.date)
                                    ? c.sessions
                                        .filter((e) => {
                                          let t = e.name.toLowerCase();
                                          return (
                                            t.includes("qualifying") ||
                                            "race" === t
                                          );
                                        })
                                        .map((e, t) => {
                                          let s = new Date(e.time) > a,
                                            i = "race" === e.name.toLowerCase(),
                                            n = tt.Z;
                                          return (
                                            i
                                              ? (n = te.Z)
                                              : e.name
                                                  .toLowerCase()
                                                  .includes("qualifying")
                                              ? (n = ta.Z)
                                              : e.name
                                                  .toLowerCase()
                                                  .includes("practice") &&
                                                (n = ts.Z),
                                            (0, r.jsxs)(
                                              "div",
                                              {
                                                className:
                                                  "mb-6 last:mb-0 flex items-start",
                                                children: [
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "w-4 h-4 rounded-full mt-1 mr-3 border-2 flex items-center justify-center\n                              ".concat(
                                                        i
                                                          ? a > new Date(c.date)
                                                            ? "bg-black border-black dark:bg-white dark:border-white"
                                                            : "bg-red-500 border-red-500"
                                                          : s
                                                          ? "bg-blue-400 border-blue-500"
                                                          : "bg-gray-300 border-gray-400",
                                                        "\n                            "
                                                      ),
                                                    children: (0, r.jsx)(n, {
                                                      className:
                                                        "w-3 h-3 ".concat(
                                                          i
                                                            ? a >
                                                              new Date(c.date)
                                                              ? "text-white dark:text-black"
                                                              : "text-white"
                                                            : s
                                                            ? "text-blue-50"
                                                            : "text-gray-100"
                                                        ),
                                                    }),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                    className: "flex-1",
                                                    children: [
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex items-center gap-2",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-semibold text-base ".concat(
                                                                i
                                                                  ? a >
                                                                    new Date(
                                                                      c.date
                                                                    )
                                                                    ? "text-black dark:text-white"
                                                                    : "text-red-600 dark:text-red-300"
                                                                  : s
                                                                  ? "text-blue-700 dark:text-blue-200"
                                                                  : "text-slate-700 dark:text-slate-300"
                                                              ),
                                                            children: e.name,
                                                          }),
                                                          e.endTime &&
                                                            (0, r.jsxs)(
                                                              "span",
                                                              {
                                                                className:
                                                                  "ml-2 text-xs text-slate-400",
                                                                children: [
                                                                  "(",
                                                                  u(e.endTime),
                                                                  ")",
                                                                ],
                                                              }
                                                            ),
                                                        ],
                                                      }),
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "text-sm text-slate-500 dark:text-slate-400",
                                                        children: u(e.time),
                                                      }),
                                                      s &&
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "text-xs text-blue-600 dark:text-blue-300 mt-1",
                                                          children: [
                                                            "Starts in ",
                                                            p(e.time),
                                                          ],
                                                        }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              e.name + e.time
                                            )
                                          );
                                        })
                                    : c.sessions.map((e, t) => {
                                        let s = new Date(e.time) > a,
                                          i = "race" === e.name.toLowerCase(),
                                          n = tt.Z;
                                        return (
                                          i
                                            ? (n = te.Z)
                                            : e.name
                                                .toLowerCase()
                                                .includes("qualifying")
                                            ? (n = ta.Z)
                                            : e.name
                                                .toLowerCase()
                                                .includes("practice") &&
                                              (n = ts.Z),
                                          (0, r.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "mb-6 last:mb-0 flex items-start",
                                              children: [
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "w-4 h-4 rounded-full mt-1 mr-3 border-2 flex items-center justify-center\n                            ".concat(
                                                      i
                                                        ? a > new Date(c.date)
                                                          ? "bg-black border-black dark:bg-white dark:border-white"
                                                          : "bg-red-500 border-red-500"
                                                        : s
                                                        ? "bg-blue-400 border-blue-500"
                                                        : "bg-gray-300 border-gray-400",
                                                      "\n                          "
                                                    ),
                                                  children: (0, r.jsx)(n, {
                                                    className:
                                                      "w-3 h-3 ".concat(
                                                        i
                                                          ? a > new Date(c.date)
                                                            ? "text-white dark:text-black"
                                                            : "text-white"
                                                          : s
                                                          ? "text-blue-50"
                                                          : "text-gray-100"
                                                      ),
                                                  }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                  className: "flex-1",
                                                  children: [
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "font-semibold text-base ".concat(
                                                              i
                                                                ? a >
                                                                  new Date(
                                                                    c.date
                                                                  )
                                                                  ? "text-black dark:text-white"
                                                                  : "text-red-600 dark:text-red-300"
                                                                : s
                                                                ? "text-blue-700 dark:text-blue-200"
                                                                : "text-slate-700 dark:text-slate-300"
                                                            ),
                                                          children: e.name,
                                                        }),
                                                        e.endTime &&
                                                          (0, r.jsxs)("span", {
                                                            className:
                                                              "ml-2 text-xs text-slate-400",
                                                            children: [
                                                              "(",
                                                              u(e.endTime),
                                                              ")",
                                                            ],
                                                          }),
                                                      ],
                                                    }),
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "text-sm text-slate-500 dark:text-slate-400",
                                                      children: u(e.time),
                                                    }),
                                                    s &&
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "text-xs text-blue-600 dark:text-blue-300 mt-1",
                                                        children: [
                                                          "Starts in ",
                                                          p(e.time),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            e.name + e.time
                                          )
                                        );
                                      }),
                              }),
                            ],
                          }),
                          c.results &&
                            c.results.length > 0 &&
                            (0, r.jsxs)("div", {
                              className:
                                "bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700",
                              children: [
                                (0, r.jsxs)("h3", {
                                  className:
                                    "font-bold text-xl mb-4 text-slate-900 dark:text-white flex items-center gap-2",
                                  children: [
                                    (0, r.jsx)(ti.Z, {
                                      className: "w-6 h-6 text-orange-400",
                                    }),
                                    " Results",
                                  ],
                                }),
                                (0, r.jsx)(
                                  (e) => {
                                    let { race: t } = e;
                                    return t.results && 0 !== t.results.length
                                      ? (0, r.jsx)("div", {
                                          className: "overflow-x-auto mt-4",
                                          children: (0, r.jsxs)("table", {
                                            className:
                                              "min-w-full bg-white border rounded shadow",
                                            children: [
                                              (0, r.jsx)("thead", {
                                                children: (0, r.jsxs)("tr", {
                                                  className: "bg-gray-100",
                                                  children: [
                                                    (0, r.jsx)("th", {
                                                      className:
                                                        "py-2 px-3 text-left",
                                                      children: "Pos",
                                                    }),
                                                    (0, r.jsx)("th", {
                                                      className:
                                                        "py-2 px-3 text-left",
                                                      children: "Driver",
                                                    }),
                                                    (0, r.jsx)("th", {
                                                      className:
                                                        "py-2 px-3 text-left",
                                                      children: "Team",
                                                    }),
                                                    (0, r.jsx)("th", {
                                                      className:
                                                        "py-2 px-3 text-left",
                                                      children: "Points",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, r.jsx)("tbody", {
                                                children: t.results.map(
                                                  (e, t) => {
                                                    let a = tn.find(
                                                        (t) =>
                                                          t.id === e.driver_id
                                                      ),
                                                      s = tl.find(
                                                        (t) =>
                                                          t.id === e.team_id
                                                      ),
                                                      i = "";
                                                    return (
                                                      0 === t
                                                        ? (i = "bg-yellow-100")
                                                        : 1 === t
                                                        ? (i = "bg-gray-200")
                                                        : 2 === t &&
                                                          (i = "bg-orange-100"),
                                                      (0, r.jsxs)(
                                                        "tr",
                                                        {
                                                          className: "border-t "
                                                            .concat(i, " ")
                                                            .concat(
                                                              i
                                                                ? "text-gray-900"
                                                                : ""
                                                            ),
                                                          children: [
                                                            (0, r.jsx)("td", {
                                                              className:
                                                                "py-1 px-3 font-semibold",
                                                              children:
                                                                e.position,
                                                            }),
                                                            (0, r.jsxs)("td", {
                                                              className:
                                                                "py-1 px-3",
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "inline-block w-3 h-3 rounded-full mr-2 ".concat(
                                                                        tc[
                                                                          null ==
                                                                          a
                                                                            ? void 0
                                                                            : a.team_id
                                                                        ] ||
                                                                          "bg-slate-400"
                                                                      ),
                                                                  }
                                                                ),
                                                                a
                                                                  ? a.name
                                                                  : e.driver_id,
                                                              ],
                                                            }),
                                                            (0, r.jsx)("td", {
                                                              className:
                                                                "py-1 px-3",
                                                              children: s
                                                                ? s.name
                                                                : e.team_id,
                                                            }),
                                                            (0, r.jsx)("td", {
                                                              className:
                                                                "py-1 px-3",
                                                              children:
                                                                e.points,
                                                            }),
                                                          ],
                                                        },
                                                        e.position
                                                      )
                                                    );
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                        })
                                      : (0, r.jsx)("div", {
                                          className:
                                            "text-gray-500 italic mt-2",
                                          children: "No results available yet.",
                                        });
                                  },
                                  { race: c }
                                ),
                              ],
                            }),
                        ],
                      }),
                      (0, r.jsx)(tf, {
                        driverStandings: x,
                        constructorStandings: h,
                        races: t,
                        now: a,
                      }),
                    ],
                  }),
                  (0, r.jsxs)(A.mQ, {
                    defaultValue: "drivers",
                    className: "mb-6",
                    children: [
                      (0, r.jsxs)(tj, {
                        children: [
                          (0, r.jsx)(tv, { children: "Standings" }),
                          (0, r.jsxs)(A.dr, {
                            className: "grid w-full md:w-auto grid-cols-2",
                            children: [
                              (0, r.jsxs)(A.SP, {
                                value: "drivers",
                                className: "flex items-center",
                                children: [
                                  (0, r.jsx)(eu.Z, {
                                    className: "mr-2 h-4 w-4",
                                  }),
                                  " Drivers",
                                ],
                              }),
                              (0, r.jsxs)(A.SP, {
                                value: "constructors",
                                className: "flex items-center",
                                children: [
                                  (0, r.jsx)(ti.Z, {
                                    className: "mr-2 h-4 w-4",
                                  }),
                                  " Constructors",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)(A.nU, {
                        value: "drivers",
                        className: "mt-4",
                        children: (0, r.jsx)(th, { driverStandings: x }),
                      }),
                      (0, r.jsx)(A.nU, {
                        value: "constructors",
                        className: "mt-4",
                        children: (0, r.jsx)(tg, {
                          constructorStandings: h,
                          driverStandings: x,
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(tb, {}),
                ],
              }),
            });
          },
        };
      var ty = (e) => {
        var t;
        let { post: a } = e,
          s = tN[a.componentKey];
        return s
          ? (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)(c, {}),
                (0, r.jsx)(en.Z, {
                  title: a.title + " | App ",
                  description: a.description,
                  keywords:
                    null == a
                      ? void 0
                      : null === (t = a.tags) || void 0 === t
                      ? void 0
                      : t.join(","),
                }),
                (0, r.jsx)(s, {}),
              ],
            })
          : (0, r.jsx)("div", { children: "Component not found" });
      };
      function tw(e) {
        let { post: t } = e;
        return t
          ? (0, r.jsx)(ty, { post: t })
          : (0, r.jsx)("div", {
              children: (0, r.jsx)("p", { children: "Component not found" }),
            });
      }
      tw.noLayout = !0;
      var tk = !0,
        tT = tw;
    },
  },
  function (e) {
    e.O(0, [308, 329, 996, 828, 586, 888, 774, 179], function () {
      return e((e.s = 13341));
    }),
      (_N_E = e.O());
  },
]);
