(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [445],
  {
    62013: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/projects/[slug]",
        function () {
          return r(93821);
        },
      ]);
    },
    32943: function (e, t, r) {
      "use strict";
      var a = r(85893);
      t.Z = (e) => {
        let { title: t } = e;
        return (0, a.jsx)("h1", {
          className:
            "text-3xl md:text-5xl font-medium text-primary dark:text-white",
          children: t,
        });
      };
    },
    55930: function (e, t, r) {
      "use strict";
      var a = r(85893);
      r(67294);
      var n = r(72510),
        s = r(55186),
        l = r(62549);
      t.Z = (e) => {
        let { content: t, className: r } = e;
        return (0, a.jsx)("div", {
          className: r,
          children: (0, a.jsx)(n.U, {
            remarkPlugins: [s.Z],
            rehypePlugins: [l.Z],
            components: {
              a: (e) => {
                let { node: t, ...r } = e;
                return ("string" == typeof r.href ? r.href : "").startsWith("#")
                  ? (0, a.jsx)("a", { ...r })
                  : (0, a.jsx)("a", {
                      ...r,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    });
              },
              h1: (e) => {
                let { node: t, ...r } = e,
                  n = String(r.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, a.jsx)("h1", { id: n, ...r });
              },
              h2: (e) => {
                let { node: t, ...r } = e,
                  n = String(r.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, a.jsx)("h2", { id: n, ...r });
              },
              h3: (e) => {
                let { node: t, ...r } = e,
                  n = String(r.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, a.jsx)("h3", { id: n, ...r });
              },
              h4: (e) => {
                let { node: t, ...r } = e,
                  n = String(r.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, a.jsx)("h4", { id: n, ...r });
              },
              h5: (e) => {
                let { node: t, ...r } = e,
                  n = String(r.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, a.jsx)("h5", { id: n, ...r });
              },
              h6: (e) => {
                let { node: t, ...r } = e,
                  n = String(r.children)
                    .replace(/<[^>]+>/g, "")
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                return (0, a.jsx)("h6", { id: n, ...r });
              },
              table: (e) => {
                let { node: t, ...r } = e;
                return (0, a.jsx)("div", {
                  className: "overflow-x-auto max-w-full",
                  children: (0, a.jsx)("table", {
                    className: "min-w-full",
                    ...r,
                  }),
                });
              },
              th: (e) => {
                let { node: t, ...r } = e;
                return (0, a.jsx)("th", {
                  className:
                    "break-words align-top px-2 py-2 text-xs sm:text-sm",
                  ...r,
                });
              },
              td: (e) => {
                let { node: t, ...r } = e;
                return (0, a.jsx)("td", {
                  className:
                    "break-words align-top px-2 py-2 text-xs sm:text-sm",
                  ...r,
                });
              },
            },
            children: t,
          }),
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
      var a = r(85893);
      r(67294);
      var n = r(32943),
        s = r(41664),
        l = r.n(s),
        i = r(21064),
        c = r(82417),
        d = r(35308),
        o = r(25675),
        x = r.n(o),
        m = (e) => {
          let { item: t } = e,
            {
              title: r,
              description: n,
              image: s,
              link: o,
              status: m,
              tags: u,
              slug: h,
              label: p,
              secondaryLabel: g,
              secondaryLink: f,
              highlight: j,
            } = t,
            v = f && g,
            b = {
              size: "sm",
              className:
                "text-white dark:text-white hover:text-white dark:hover:text-zinc-400 h-6",
            };
          return (0, a.jsx)(l(), {
            href: "/projects/".concat(h),
            children: (0, a.jsx)(d.E.div, {
              className: "w-full h-full",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: (0, a.jsx)(i.Zb, {
                className:
                  "bg-neutral-200 dark:bg-slate border-none text-gray-800 dark:text-white hover:border-zinc-800 w-full h-full",
                children: (0, a.jsxs)(i.Ol, {
                  className: "p-2 flex flex-col h-full justify-between gap-1",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        (0, a.jsx)(x(), {
                          className:
                            "max-h-36 w-full sm:max-h-36 md:max-h-48 object-cover rounded-md",
                          src: s,
                          alt: r,
                          width: 500,
                          height: 500,
                        }),
                        (0, a.jsx)("h2", {
                          className:
                            "text-primary dark:text-white font-semibold leading-none line-clamp-1",
                          children: r,
                        }),
                        j &&
                          (0, a.jsx)("h3", {
                            className:
                              "text-zinc-700 dark:text-zinc-200 text-xs line-clamp-1",
                            children: j,
                          }),
                        (0, a.jsx)("h4", {
                          className: "text-xs line-clamp-2",
                          children: n,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "space-y-3",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-row items-center justify-between gap-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "space-x-2",
                              children: [
                                o &&
                                  (0, a.jsx)(c.z, {
                                    ...b,
                                    onClick: (e) => {
                                      e.preventDefault(),
                                        o && window.open(o, "_blank");
                                    },
                                    children: p || "Visit",
                                  }),
                                v &&
                                  (0, a.jsx)(c.z, {
                                    ...b,
                                    onClick: (e) => {
                                      e.preventDefault(),
                                        f && window.open(f, "_blank");
                                    },
                                    children: g || "Secondary",
                                  }),
                              ],
                            }),
                            m &&
                              (0, a.jsx)("span", {
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
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)("div", {
                            className: "flex gap-1 overflow-hidden",
                            children:
                              null == u
                                ? void 0
                                : u.map((e, t) =>
                                    (0, a.jsx)(
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
              ? (0, a.jsx)("div", {
                  className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                  children: t.map((e) => (0, a.jsx)(m, { item: e }, e.slug)),
                })
              : (0, a.jsxs)("div", {
                  className: "mx-auto space-y-2 sm:space-y-3 md:space-y-5",
                  children: [
                    (0, a.jsx)(n.Z, { title: "Projects" }),
                    (0, a.jsx)("p", {
                      className: "text-sm",
                      children: "Playground - Small MVP to Production Apps",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "min-w-full grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6",
                      children: t.map((e) =>
                        (0, a.jsx)(m, { item: e }, e.slug)
                      ),
                    }),
                  ],
                })
            : (0, a.jsx)("p", { children: "No projects found." });
        };
    },
    15030: function (e, t, r) {
      "use strict";
      var a = r(85893),
        n = r(9008),
        s = r.n(n);
      r(67294);
      let l = "Aman Kumar, AI Product Engineer, Problem Solver, FullStack Dev";
      t.Z = (e) => {
        let {
          title: t,
          description:
            r = "Experimenting with LLMs, AI Engineering, Problem Solving, FullStack Development",
          keywords: n,
        } = e;
        return (
          (t = t
            ? "".concat(t, " | Aman's Mind Map")
            : "Aman's Mind Map | AI Product Engineer"),
          (n = n ? "".concat(n, ", ").concat(l) : l),
          (0, a.jsxs)(s(), {
            children: [
              (0, a.jsx)("title", { children: t }),
              r && (0, a.jsx)("meta", { name: "description", content: r }),
              n && (0, a.jsx)("meta", { name: "keywords", content: n }),
              (0, a.jsx)("meta", { property: "og:title", content: t }),
              (0, a.jsx)("meta", {
                property: "og:description",
                content: r || "",
              }),
            ],
          })
        );
      };
    },
    61027: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return i;
        },
      });
      var a = r(85893);
      r(67294);
      var n = r(45139),
        s = r(27596);
      let l = (0, n.j)(
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
      function i(e) {
        let { className: t, variant: r, ...n } = e;
        return (0, a.jsx)("div", {
          className: (0, s.cn)(l({ variant: r }), t),
          ...n,
        });
      }
    },
    21064: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ol: function () {
          return i;
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
          return c;
        },
      });
      var a = r(85893),
        n = r(67294),
        s = r(27596);
      let l = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)(
            "rounded-xl border bg-card text-card-foreground shadow",
            r
          ),
          ...n,
        });
      });
      l.displayName = "Card";
      let i = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)("flex flex-col space-y-1.5 p-6", r),
          ...n,
        });
      });
      i.displayName = "CardHeader";
      let c = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("h3", {
          ref: t,
          className: (0, s.cn)("font-semibold leading-none tracking-tight", r),
          ...n,
        });
      });
      c.displayName = "CardTitle";
      let d = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("p", {
          ref: t,
          className: (0, s.cn)("text-sm text-muted-foreground", r),
          ...n,
        });
      });
      d.displayName = "CardDescription";
      let o = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)("p-6 pt-0", r),
          ...n,
        });
      });
      o.displayName = "CardContent";
      let x = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)("flex items-center p-6 pt-0", r),
          ...n,
        });
      });
      x.displayName = "CardFooter";
    },
    54563: function (e, t, r) {
      "use strict";
      r.d(t, {
        W: function () {
          return a;
        },
      });
      let a = (e) =>
        "primary" === e
          ? "text-black bg-white dark:bg-primary dark:text-white hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          : "text-white dark:text-black bg-black dark:bg-oldsilver hover:text-black hover:bg-white dark:hover:bg-slate dark:hover:text-white";
    },
    93821: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return g;
          },
          default: function () {
            return f;
          },
        });
      var a = r(85893);
      r(67294);
      var n = r(11163),
        s = r(41664),
        l = r.n(s),
        i = r(9008),
        c = r.n(i),
        d = r(15030),
        o = r(55930),
        x = r(82417),
        m = r(54563),
        u = r(61027),
        h = (e) => {
          var t, r;
          let { post: n } = e;
          return (0, a.jsxs)("div", {
            className: "mx-auto space-y-3",
            children: [
              (0, a.jsx)("h1", {
                className: "text-primary dark:text-white text-3xl font-bold",
                children: n.title,
              }),
              (0, a.jsx)("h2", {
                className: "text-xl dark:text-zinc-200 text-slate",
                children: n.highlight,
              }),
              (0, a.jsx)("h3", {
                className: "text-lg dark:text-zinc-400 text-zinc-500",
                children: n.description,
              }),
              (0, a.jsx)("div", {
                className: "flex flex-wrap gap-1",
                children:
                  null === (t = n.techStack) || void 0 === t
                    ? void 0
                    : t.map((e, t) =>
                        (0, a.jsx)(
                          u.C,
                          {
                            className: "text-black",
                            variant: "secondary",
                            children: e,
                          },
                          e
                        )
                      ),
              }),
              n.image &&
                (0, a.jsx)("img", {
                  src: n.image,
                  alt: n.title,
                  className:
                    "min-w-full h-48 sm:h-64 md:h-96 object-cover rounded-md",
                }),
              (0, a.jsx)(o.Z, {
                className: "prose prose-invert prose-lg py-5",
                content: n.content,
              }),
              (0, a.jsx)("div", {
                className: "flex gap-1",
                children:
                  null === (r = n.tags) || void 0 === r
                    ? void 0
                    : r.map((e, t) =>
                        (0, a.jsx)(
                          "span",
                          {
                            className:
                              "text-xs bg-zinc-800 text-white px-3 py-0.5 rounded-full",
                            children: e,
                          },
                          e
                        )
                      ),
              }),
              (0, a.jsxs)("div", {
                className: "flex space-x-4",
                children: [
                  n.link &&
                    n.label &&
                    (0, a.jsx)(l(), {
                      href: n.link,
                      target: "_blank",
                      children: (0, a.jsx)(x.z, {
                        className: (0, m.W)("primary"),
                        children: n.label || "Link",
                      }),
                    }),
                  n.secondaryLink &&
                    n.secondaryLabel &&
                    (0, a.jsx)(l(), {
                      href: n.secondaryLink,
                      target: "_blank",
                      children: (0, a.jsx)(x.z, {
                        className: (0, m.W)("secondary"),
                        children: n.secondaryLabel,
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        p = r(80173),
        g = !0,
        f = (e) => {
          var t, r;
          let { posts: s, post: i } = e;
          return (0, n.useRouter)().isFallback
            ? (0, a.jsx)("div", {
                className: "text-white",
                children: "Loading...",
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  i &&
                    (0, a.jsx)(c(), {
                      children: (0, a.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                          __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CreativeWork",
                            headline: i.title,
                            description: i.description,
                            datePublished: i.date,
                            url: "https://amankumar.ai/projects/".concat(
                              i.slug
                            ),
                            image: i.image
                              ? "https://amankumar.ai".concat(i.image)
                              : void 0,
                            author: {
                              "@type": "Person",
                              name: "Aman Kumar",
                              url: "https://amankumar.ai",
                            },
                            mainEntityOfPage: {
                              "@type": "WebPage",
                              "@id": "https://amankumar.ai/projects/".concat(
                                i.slug
                              ),
                            },
                            keywords:
                              null === (t = i.tags) || void 0 === t
                                ? void 0
                                : t.join(", "),
                            programmingLanguage:
                              null === (r = i.techStack) || void 0 === r
                                ? void 0
                                : r.join(", "),
                            about: i.label,
                            sameAs: i.link,
                          }),
                        },
                      }),
                    }),
                  (0, a.jsx)(d.Z, { title: i.title }),
                  (0, a.jsxs)("div", {
                    className:
                      "container mx-auto max-w-2xl px-2 md:px-4 py-5 md:py-8",
                    children: [
                      (0, a.jsx)(l(), {
                        className:
                          "hover:tracking-wide hover:underline transition-colors mb-4 inline-block",
                        href: "/projects",
                        children: "← All Projects",
                      }),
                      i
                        ? (0, a.jsx)(h, { post: i })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-gray-200 dark:text-zinc-400 mb-8",
                                children:
                                  "Playground - Small MVP to Production Apps",
                              }),
                              (0, a.jsx)(p.Z, { minimized: !0, posts: s }),
                            ],
                          }),
                    ],
                  }),
                ],
              });
        };
    },
  },
  function (e) {
    e.O(0, [308, 675, 329, 888, 774, 179], function () {
      return e((e.s = 62013));
    }),
      (_N_E = e.O());
  },
]);
