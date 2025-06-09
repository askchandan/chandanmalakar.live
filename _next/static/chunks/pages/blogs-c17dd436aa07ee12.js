(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [55],
  {
    89151: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blogs",
        function () {
          return n(83939);
        },
      ]);
    },
    21498: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(85893);
      n(67294);
      var s = n(41664),
        l = n.n(s),
        a = n(21064),
        i = n(30381),
        c = n.n(i),
        d = n(35308),
        o = n(25675),
        m = n.n(o),
        u = (e) => {
          let { post: t } = e,
            {
              date: n,
              title: s,
              description: i,
              image: o,
              cardImage: u,
              type: x,
              slug: f,
              highlight: p,
            } = t;
          return (0, r.jsx)(l(), {
            href: "/blogs/".concat(f),
            children: (0, r.jsx)(d.E.div, {
              className: "w-full h-full",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: (0, r.jsxs)(a.Zb, {
                className:
                  "bg-neutral-200 dark:bg-slate border-none text-gray-800 dark:text-white hover:border-zinc-800 min-w-full h-full flex flex-col",
                children: [
                  (0, r.jsx)(a.Ol, {
                    className: "flex flex-col p-2 gap-2",
                    children:
                      u || o
                        ? (0, r.jsx)(m(), {
                            className:
                              "rounded-md object-cover h-36 sm:h-36 md:h-48",
                            src: u || o || "",
                            alt: s,
                            width: 500,
                            height: 500,
                          })
                        : (0, r.jsx)("div", {
                            className:
                              "min-w-36 h-24 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-md",
                          }),
                  }),
                  (0, r.jsxs)(a.aY, {
                    className: "flex flex-col gap-1 flex-1 pb-4",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, r.jsx)("h2", {
                            className:
                              "text-primary dark:text-white font-semibold line-clamp-1",
                            children: s,
                          }),
                          (0, r.jsx)("h3", {
                            className:
                              "text-gray-800 dark:text-zinc-400 text-sm line-clamp-1",
                            children: p,
                          }),
                          (0, r.jsx)("h4", {
                            className: "text-xs line-clamp-2",
                            children: i,
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex gap-2 items-center justify-between text-xs text-zinc-700 dark:text-zinc-400 mt-auto pt-2",
                        children: [
                          (0, r.jsx)("span", {
                            children: c()(n).format("MMM DD, YYYY"),
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "bg-zinc-800 text-white rounded-md px-2 py-1",
                            children: x,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        x = n(32943),
        f = (e) => {
          let { posts: t, minimized: n = !1 } = e;
          return t && 0 !== t.length
            ? n
              ? (0, r.jsx)("div", {
                  className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                  children: t.map((e) => (0, r.jsx)(u, { post: e }, e.slug)),
                })
              : (0, r.jsxs)("div", {
                  className: "mx-auto space-y-2 sm:space-y-3 md:space-y-5",
                  children: [
                    (0, r.jsx)(x.Z, { title: "Pensieve" }),
                    (0, r.jsxs)("p", {
                      className: "text-sm sm:text-md",
                      children: [
                        "A collection of thoughts, ideas, and musings. You can check more of my writings on my ",
                        (0, r.jsx)("a", {
                          href: "https://onlyoneaman.medium.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-blue-500 hover:underline",
                          children: "Medium",
                        }),
                        " profile.",
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 min-w-full gap-4 md:gap-6",
                      children: t.map((e) =>
                        e.hidden ? null : (0, r.jsx)(u, { post: e }, e.slug)
                      ),
                    }),
                  ],
                })
            : (0, r.jsx)("p", { children: "No blog posts found." });
        };
    },
    32943: function (e, t, n) {
      "use strict";
      var r = n(85893);
      t.Z = (e) => {
        let { title: t } = e;
        return (0, r.jsx)("h1", {
          className:
            "text-3xl md:text-5xl font-medium text-primary dark:text-white",
          children: t,
        });
      };
    },
    15030: function (e, t, n) {
      "use strict";
      var r = n(85893),
        s = n(9008),
        l = n.n(s);
      n(67294);
      let a = "Aman Kumar, AI Product Engineer, Problem Solver, FullStack Dev";
      t.Z = (e) => {
        let {
          title: t,
          description:
            n = "Experimenting with LLMs, AI Engineering, Problem Solving, FullStack Development",
          keywords: s,
        } = e;
        return (
          (t = t
            ? "".concat(t, " | Aman's Mind Map")
            : "Aman's Mind Map | AI Product Engineer"),
          (s = s ? "".concat(s, ", ").concat(a) : a),
          (0, r.jsxs)(l(), {
            children: [
              (0, r.jsx)("title", { children: t }),
              n && (0, r.jsx)("meta", { name: "description", content: n }),
              s && (0, r.jsx)("meta", { name: "keywords", content: s }),
              (0, r.jsx)("meta", { property: "og:title", content: t }),
              (0, r.jsx)("meta", {
                property: "og:description",
                content: n || "",
              }),
            ],
          })
        );
      };
    },
    21064: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ol: function () {
          return i;
        },
        SZ: function () {
          return d;
        },
        Zb: function () {
          return a;
        },
        aY: function () {
          return o;
        },
        eW: function () {
          return m;
        },
        ll: function () {
          return c;
        },
      });
      var r = n(85893),
        s = n(67294),
        l = n(27596);
      let a = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)(
            "rounded-xl border bg-card text-card-foreground shadow",
            n
          ),
          ...s,
        });
      });
      a.displayName = "Card";
      let i = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)("flex flex-col space-y-1.5 p-6", n),
          ...s,
        });
      });
      i.displayName = "CardHeader";
      let c = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, r.jsx)("h3", {
          ref: t,
          className: (0, l.cn)("font-semibold leading-none tracking-tight", n),
          ...s,
        });
      });
      c.displayName = "CardTitle";
      let d = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, r.jsx)("p", {
          ref: t,
          className: (0, l.cn)("text-sm text-muted-foreground", n),
          ...s,
        });
      });
      d.displayName = "CardDescription";
      let o = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)("p-6 pt-0", n),
          ...s,
        });
      });
      o.displayName = "CardContent";
      let m = s.forwardRef((e, t) => {
        let { className: n, ...s } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, l.cn)("flex items-center p-6 pt-0", n),
          ...s,
        });
      });
      m.displayName = "CardFooter";
    },
    83939: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return a;
          },
        });
      var r = n(85893);
      n(67294);
      var s = n(21498),
        l = n(15030),
        a = !0;
      t.default = (e) => {
        let { allPostsData: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.Z, { title: "Blogs" }),
            (0, r.jsx)(s.Z, { posts: t }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [885, 308, 675, 888, 774, 179], function () {
      return e((e.s = 89151));
    }),
      (_N_E = e.O());
  },
]);
