(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    96192: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/projects",
        function () {
          return r(9589);
        },
      ]);
    },
    32943: function (e, t, r) {
      "use strict";
      var n = r(85893);
      t.Z = (e) => {
        let { title: t } = e;
        return (0, n.jsx)("h1", {
          className:
            "text-3xl md:text-5xl font-medium text-primary dark:text-white",
          children: t,
        });
      };
    },
    80173: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = r(85893);
      r(67294);
      var s = r(32943),
        a = r(41664),
        l = r.n(a),
        c = r(21064),
        i = r(82417),
        d = r(35308),
        o = r(25675),
        x = r.n(o),
        m = (e) => {
          let { item: t } = e,
            {
              title: r,
              description: s,
              image: a,
              link: o,
              status: m,
              tags: u,
              slug: p,
              label: f,
              secondaryLabel: h,
              secondaryLink: j,
              highlight: g,
            } = t,
            N = j && h,
            w = {
              size: "sm",
              className:
                "text-white dark:text-white hover:text-white dark:hover:text-zinc-400 h-6",
            };
          return (0, n.jsx)(l(), {
            href: "/projects/".concat(p),
            children: (0, n.jsx)(d.E.div, {
              className: "w-full h-full",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: (0, n.jsx)(c.Zb, {
                className:
                  "bg-neutral-200 dark:bg-slate border-none text-gray-800 dark:text-white hover:border-zinc-800 w-full h-full",
                children: (0, n.jsxs)(c.Ol, {
                  className: "p-2 flex flex-col h-full justify-between gap-1",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        (0, n.jsx)(x(), {
                          className:
                            "max-h-36 w-full sm:max-h-36 md:max-h-48 object-cover rounded-md",
                          src: a,
                          alt: r,
                          width: 500,
                          height: 500,
                        }),
                        (0, n.jsx)("h2", {
                          className:
                            "text-primary dark:text-white font-semibold leading-none line-clamp-1",
                          children: r,
                        }),
                        g &&
                          (0, n.jsx)("h3", {
                            className:
                              "text-zinc-700 dark:text-zinc-200 text-xs line-clamp-1",
                            children: g,
                          }),
                        (0, n.jsx)("h4", {
                          className: "text-xs line-clamp-2",
                          children: s,
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "space-y-3",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "flex flex-row items-center justify-between gap-2",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "space-x-2",
                              children: [
                                o &&
                                  (0, n.jsx)(i.z, {
                                    ...w,
                                    onClick: (e) => {
                                      e.preventDefault(),
                                        o && window.open(o, "_blank");
                                    },
                                    children: f || "Visit",
                                  }),
                                N &&
                                  (0, n.jsx)(i.z, {
                                    ...w,
                                    onClick: (e) => {
                                      e.preventDefault(),
                                        j && window.open(j, "_blank");
                                    },
                                    children: h || "Secondary",
                                  }),
                              ],
                            }),
                            m &&
                              (0, n.jsx)("span", {
                                className:
                                  "text-xs px-2 py-0.5 rounded-full text-black ".concat(
                                    "active" === m
                                      ? "bg-green-200"
                                      : "bg-gray-300 dark:bg-gray-500"
                                  ),
                                children: m,
                              }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          children: (0, n.jsx)("div", {
                            className: "flex gap-1 overflow-hidden",
                            children:
                              null == u
                                ? void 0
                                : u.map((e, t) =>
                                    (0, n.jsx)(
                                      "span",
                                      {
                                        className:
                                          "bg-zinc-100 text-primary dark:bg-zinc-800 dark:text-white text-xs px-2 py-0.5 rounded-full line-clamp-1",
                                        children: e,
                                      },
                                      e
                                    )
                                  ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        u = (e) => {
          let { posts: t, minimized: r = !1 } = e;
          return t && 0 !== t.length
            ? r
              ? (0, n.jsx)("div", {
                  className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                  children: t.map((e) => (0, n.jsx)(m, { item: e }, e.slug)),
                })
              : (0, n.jsxs)("div", {
                  className: "mx-auto space-y-2 sm:space-y-3 md:space-y-5",
                  children: [
                    (0, n.jsx)(s.Z, { title: "Projects" }),
                    (0, n.jsx)("p", {
                      className: "text-sm",
                      children: "Playground - Small MVP to Production Apps",
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "min-w-full grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6",
                      children: t.map((e) =>
                        (0, n.jsx)(m, { item: e }, e.slug)
                      ),
                    }),
                  ],
                })
            : (0, n.jsx)("p", { children: "No projects found." });
        };
    },
    15030: function (e, t, r) {
      "use strict";
      var n = r(85893),
        s = r(9008),
        a = r.n(s);
      r(67294);
      let l = "Aman Kumar, AI Product Engineer, Problem Solver, FullStack Dev";
      t.Z = (e) => {
        let {
          title: t,
          description:
            r = "Experimenting with LLMs, AI Engineering, Problem Solving, FullStack Development",
          keywords: s,
        } = e;
        return (
          (t = t
            ? "".concat(t, " | Aman's Mind Map")
            : "Aman's Mind Map | AI Product Engineer"),
          (s = s ? "".concat(s, ", ").concat(l) : l),
          (0, n.jsxs)(a(), {
            children: [
              (0, n.jsx)("title", { children: t }),
              r && (0, n.jsx)("meta", { name: "description", content: r }),
              s && (0, n.jsx)("meta", { name: "keywords", content: s }),
              (0, n.jsx)("meta", { property: "og:title", content: t }),
              (0, n.jsx)("meta", {
                property: "og:description",
                content: r || "",
              }),
            ],
          })
        );
      };
    },
    21064: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ol: function () {
          return c;
        },
        SZ: function () {
          return d;
        },
        Zb: function () {
          return l;
        },
        aY: function () {
          return o;
        },
        eW: function () {
          return x;
        },
        ll: function () {
          return i;
        },
      });
      var n = r(85893),
        s = r(67294),
        a = r(27596);
      let l = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, n.jsx)("div", {
          ref: t,
          className: (0, a.cn)(
            "rounded-xl border bg-card text-card-foreground shadow",
            r
          ),
          ...s,
        });
      });
      l.displayName = "Card";
      let c = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, n.jsx)("div", {
          ref: t,
          className: (0, a.cn)("flex flex-col space-y-1.5 p-6", r),
          ...s,
        });
      });
      c.displayName = "CardHeader";
      let i = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, n.jsx)("h3", {
          ref: t,
          className: (0, a.cn)("font-semibold leading-none tracking-tight", r),
          ...s,
        });
      });
      i.displayName = "CardTitle";
      let d = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, n.jsx)("p", {
          ref: t,
          className: (0, a.cn)("text-sm text-muted-foreground", r),
          ...s,
        });
      });
      d.displayName = "CardDescription";
      let o = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, n.jsx)("div", {
          ref: t,
          className: (0, a.cn)("p-6 pt-0", r),
          ...s,
        });
      });
      o.displayName = "CardContent";
      let x = s.forwardRef((e, t) => {
        let { className: r, ...s } = e;
        return (0, n.jsx)("div", {
          ref: t,
          className: (0, a.cn)("flex items-center p-6 pt-0", r),
          ...s,
        });
      });
      x.displayName = "CardFooter";
    },
    9589: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return l;
          },
        });
      var n = r(85893);
      r(67294);
      var s = r(80173),
        a = r(15030),
        l = !0;
      t.default = (e) => {
        let { allPostsData: t } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(a.Z, { title: "Projects" }),
            (0, n.jsx)(s.Z, { posts: t }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [308, 675, 888, 774, 179], function () {
      return e((e.s = 96192));
    }),
      (_N_E = e.O());
  },
]);
