(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [196],
  {
    35106: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blogs/[slug]",
        function () {
          return r(42921);
        },
      ]);
    },
    21498: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return h;
        },
      });
      var a = r(85893);
      r(67294);
      var n = r(41664),
        s = r.n(n),
        l = r(21064),
        i = r(30381),
        c = r.n(i),
        d = r(35308),
        o = r(25675),
        m = r.n(o),
        u = (e) => {
          let { post: t } = e,
            {
              date: r,
              title: n,
              description: i,
              image: o,
              cardImage: u,
              type: x,
              slug: h,
              highlight: p,
            } = t;
          return (0, a.jsx)(s(), {
            href: "/blogs/".concat(h),
            children: (0, a.jsx)(d.E.div, {
              className: "w-full h-full",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: (0, a.jsxs)(l.Zb, {
                className:
                  "bg-neutral-200 dark:bg-slate border-none text-gray-800 dark:text-white hover:border-zinc-800 min-w-full h-full flex flex-col",
                children: [
                  (0, a.jsx)(l.Ol, {
                    className: "flex flex-col p-2 gap-2",
                    children:
                      u || o
                        ? (0, a.jsx)(m(), {
                            className:
                              "rounded-md object-cover h-36 sm:h-36 md:h-48",
                            src: u || o || "",
                            alt: n,
                            width: 500,
                            height: 500,
                          })
                        : (0, a.jsx)("div", {
                            className:
                              "min-w-36 h-24 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-md",
                          }),
                  }),
                  (0, a.jsxs)(l.aY, {
                    className: "flex flex-col gap-1 flex-1 pb-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "text-primary dark:text-white font-semibold line-clamp-1",
                            children: n,
                          }),
                          (0, a.jsx)("h3", {
                            className:
                              "text-gray-800 dark:text-zinc-400 text-sm line-clamp-1",
                            children: p,
                          }),
                          (0, a.jsx)("h4", {
                            className: "text-xs line-clamp-2",
                            children: i,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex gap-2 items-center justify-between text-xs text-zinc-700 dark:text-zinc-400 mt-auto pt-2",
                        children: [
                          (0, a.jsx)("span", {
                            children: c()(r).format("MMM DD, YYYY"),
                          }),
                          (0, a.jsx)("span", {
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
        x = r(32943),
        h = (e) => {
          let { posts: t, minimized: r = !1 } = e;
          return t && 0 !== t.length
            ? r
              ? (0, a.jsx)("div", {
                  className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                  children: t.map((e) => (0, a.jsx)(u, { post: e }, e.slug)),
                })
              : (0, a.jsxs)("div", {
                  className: "mx-auto space-y-2 sm:space-y-3 md:space-y-5",
                  children: [
                    (0, a.jsx)(x.Z, { title: "Pensieve" }),
                    (0, a.jsxs)("p", {
                      className: "text-sm sm:text-md",
                      children: [
                        "A collection of thoughts, ideas, and musings. You can check more of my writings on my ",
                        (0, a.jsx)("a", {
                          href: "https://onlyoneaman.medium.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-blue-500 hover:underline",
                          children: "Medium",
                        }),
                        " profile.",
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 min-w-full gap-4 md:gap-6",
                      children: t.map((e) =>
                        e.hidden ? null : (0, a.jsx)(u, { post: e }, e.slug)
                      ),
                    }),
                  ],
                })
            : (0, a.jsx)("p", { children: "No blog posts found." });
        };
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
          return m;
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
      let m = n.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, s.cn)("flex items-center p-6 pt-0", r),
          ...n,
        });
      });
      m.displayName = "CardFooter";
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
    42921: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return w;
          },
          default: function () {
            return y;
          },
        });
      var a = r(85893);
      r(67294);
      var n = r(11163),
        s = r(41664),
        l = r.n(s),
        i = r(9008),
        c = r.n(i),
        d = r(21498),
        o = r(25675),
        m = r.n(o),
        u = r(55930),
        x = r(82417),
        h = r(54563);
      let p = {
          en: { less: "less than a minute read", default: "min read" },
          fr: {
            less: "moins d'une minute de lecture",
            default: "min de lecture",
          },
          es: { less: "menos de un minuto leyendo", default: "min de lectura" },
          cn: { less: "小于一分钟", default: "分钟" },
          ja: { less: "1分未満の読み取り", default: "最小読み取り" },
          de: {
            less: "weniger als eine Minute Lesezeit",
            default: "Min. Lesezeit",
          },
          "pt-br": {
            less: "menos de um minuto de leitura",
            default: "minutos de leitura",
          },
          tr: {
            less: "bir dakikadan az okuma s\xfcresi",
            default: "dakika okuma s\xfcresi",
          },
          ro: {
            less: "timp de citire mai puțin de un minut",
            default: "min. timp de lectură",
          },
          bn: {
            less: "এক মিনিটের কম সময়ে পড়ুন",
            default: "সর্বনিম্ন সময়ে পড়ুন",
          },
          sk: {
            less: "menej ako min\xfata č\xedtania",
            default: "min č\xedtania",
          },
          cs: { less: "m\xe9ně než minuta čten\xed", default: "min čten\xed" },
        },
        g = (e) =>
          (
            e.match(
              /[\w|\d|\s|,|.|\u00C0-\u024F|\u4E00-\u9FA5|\u3041-\u309F]+/giu
            ) ?? []
          ).flatMap((e) => e.match(/[\u4E00-\u9FA5]/gu) ?? e),
        f = (e) =>
          g(e).reduce(
            (e, t) => e + (t.trim().length ? t.trim().split(/\s+/u).length : 0),
            0
          ),
        j = (e) => e < 1 + Number.EPSILON,
        b = (e, t = "en") => p[t][e ? "less" : "default"],
        v = (e, t = 300, r = "en") => {
          let a = f(e),
            n = Math.round(a / t),
            s = j(n);
          return {
            minutes: n,
            words: a,
            text: `${s ? "" : `${n} `}${b(s, r)}`,
          };
        };
      var N = (e) => {
          var t;
          let { post: r } = e,
            n = v(r.content);
          return (0, a.jsxs)("div", {
            className: "mx-auto space-y-5",
            children: [
              (0, a.jsxs)("div", {
                className: "space-y-1",
                children: [
                  (0, a.jsx)("h1", {
                    className:
                      "text-primary dark:text-white text-3xl font-bold",
                    children: r.title,
                  }),
                  (0, a.jsx)("h2", {
                    className: "text-md dark:text-zinc-200 text-slate",
                    children: r.highlight,
                  }),
                  (0, a.jsx)("h3", {
                    className: "md:text-lg dark:text-zinc-400 text-zinc-500",
                    children: r.description,
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-x-2",
                    children: [
                      (0, a.jsx)("span", {
                        className: "text-zinc-400",
                        children: r.date,
                      }),
                      (0, a.jsx)("span", { children: "•" }),
                      (0, a.jsx)("span", {
                        className: "text-zinc-500 text-md",
                        children: n.text,
                      }),
                    ],
                  }),
                ],
              }),
              r.image &&
                (0, a.jsx)("div", {
                  children: (0, a.jsx)(m(), {
                    className: "rounded-md",
                    src: r.image,
                    alt: r.title,
                    width: 768,
                    height: 96,
                  }),
                }),
              (0, a.jsx)(u.Z, {
                className: "prose prose-invert prose-lg py-5",
                content: r.content,
              }),
              (0, a.jsx)("div", {
                children:
                  r.link &&
                  (0, a.jsx)(l(), {
                    href: r.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, a.jsx)(x.z, {
                      className: (0, h.W)("primary"),
                      children:
                        null !== (t = r.label) && void 0 !== t ? t : "Visit",
                    }),
                  }),
              }),
            ],
          });
        },
        k = r(15030),
        w = !0,
        y = (e) => {
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
                    (0, a.jsxs)(c(), {
                      children: [
                        (0, a.jsx)("meta", {
                          property: "og:type",
                          content: "article",
                        }),
                        (0, a.jsx)("meta", {
                          property: "og:url",
                          content: "https://amankumar.ai/blogs/".concat(i.slug),
                        }),
                        (0, a.jsx)("script", {
                          type: "application/ld+json",
                          dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": "BlogPosting",
                              headline: i.title,
                              description: i.description,
                              datePublished: i.date,
                              url: "https://amankumar.ai/blogs/".concat(i.slug),
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
                                "@id": "https://amankumar.ai/blogs/".concat(
                                  i.slug
                                ),
                              },
                              keywords:
                                null === (t = i.tags) || void 0 === t
                                  ? void 0
                                  : t.join(", "),
                            }),
                          },
                        }),
                      ],
                    }),
                  (0, a.jsx)(k.Z, {
                    title: (null == i ? void 0 : i.title) + " | Blogs | ",
                    description:
                      (null == i ? void 0 : i.description) ||
                      "A collection of blog posts about web development, programming, and more.",
                    keywords:
                      null == i
                        ? void 0
                        : null === (r = i.tags) || void 0 === r
                        ? void 0
                        : r.join(","),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "container px-2 md:px-4 py-5 md:py-8 max-w-2xl mx-auto",
                    children: [
                      (0, a.jsx)(l(), {
                        className:
                          "hover:tracking-wide hover:underline transition-colors mb-4 inline-block",
                        href: "/blogs",
                        children: "← All Articles",
                      }),
                      i
                        ? (0, a.jsx)(N, { post: i })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-gray-200 dark:text-zinc-400 mb-8",
                                children:
                                  "A collection of blog posts about web development, programming, and more.",
                              }),
                              (0, a.jsx)(d.Z, { posts: s, minimized: !0 }),
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
    e.O(0, [885, 308, 675, 329, 888, 774, 179], function () {
      return e((e.s = 35106));
    }),
      (_N_E = e.O());
  },
]);
