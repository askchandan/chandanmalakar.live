(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    39212: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return a(82788);
        },
      ]);
    },
    32943: function (e, t, a) {
      "use strict";
      var n = a(85893);
      t.Z = (e) => {
        let { title: t } = e;
        return (0, n.jsx)("h1", {
          className:
            "text-3xl md:text-5xl font-medium text-primary dark:text-white",
          children: t,
        });
      };
    },
    9491: function (e, t, a) {
      "use strict";
      var n = a(85893),
        r = a(67294),
        s = a(82417),
        i = a(92594);
      t.Z = () => {
        let [e, t] = (0, r.useState)(!1),
          a = async () => {
            await navigator.clipboard.writeText("chandanmalakar7549@gmail.com"),
              t(!0);
          };
        return (
          (0, r.useEffect)(() => {
            if (e) {
              let e = setTimeout(() => {
                t(!1);
              }, 3e3);
              return () => clearTimeout(e);
            }
          }, [e]),
          (0, n.jsxs)(s.z, {
            className: e
              ? "text-white hover:text-green border-green-500 border-2"
              : "text-white hover:text-oldsilver",
            onClick: a,
            children: [
              (0, n.jsx)("span", {
                className: "text-sm pr-2",
                children: (0, n.jsx)(i.C3L, { className: "m-0", size: 12 }),
              }),
              (0, n.jsx)("span", {
                className: e ? "text-green" : "",
                style: { transition: "all 0.3s ease" },
                children: e ? "Copied!" : "E-Mail",
              }),
            ],
          })
        );
      };
    },
    15030: function (e, t, a) {
      "use strict";
      var n = a(85893),
        r = a(9008),
        s = a.n(r);
      a(67294);
      let i = "Chandan Malakar, Data Scientist, Problem Solver, FullStack Dev";
      t.Z = (e) => {
        let {
          title: t,
          description:
            a = "Experimenting with LLMs, AI Engineering, Problem Solving, FullStack Development",
          keywords: r,
        } = e;
        return (
          (t = t
            ? "".concat(t, " | Chandan's Mind Map")
            : "Chandan's Mind Map | Data Scientist"),
          (r = r ? "".concat(r, ", ").concat(i) : i),
          (0, n.jsxs)(s(), {
            children: [
              (0, n.jsx)("title", { children: t }),
              a && (0, n.jsx)("meta", { name: "description", content: a }),
              r && (0, n.jsx)("meta", { name: "keywords", content: r }),
              (0, n.jsx)("meta", { property: "og:title", content: t }),
              (0, n.jsx)("meta", {
                property: "og:description",
                content: a || "",
              }),
            ],
          })
        );
      };
    },
    54563: function (e, t, a) {
      "use strict";
      a.d(t, {
        W: function () {
          return n;
        },
      });
      let n = (e) =>
        "primary" === e
          ? "text-black bg-white dark:bg-primary dark:text-white hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          : "text-white dark:text-black bg-black dark:bg-oldsilver hover:text-black hover:bg-white dark:hover:bg-slate dark:hover:text-white";
    },
    82788: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return g;
          },
        });
      var n = a(85893),
        r = a(32943),
        s = a(9491),
        i = a(82417),
        o = a(41664),
        l = a.n(o),
        c = a(54563),
        d = (e) => {
          let { variant: t = "secondary" } = e;
          return (0, n.jsx)(l(), {
            className: "text-white hover:text-oldsilver",
            href: "/contact",
            children: (0, n.jsx)(i.z, {
              className: (0, c.W)(t),
              children: "Get in Touch",
            }),
          });
        },
        h = a(25675),
        m = a.n(h),
        u = () =>
          (0, n.jsx)("div", {
            className: "max-w-4xl mx-auto",
            children: (0, n.jsxs)("div", {
              className: "space-y-5",
              children: [
                (0, n.jsx)(r.Z, { title: "Chandan Malakar" }),
                (0, n.jsx)("h3", {
                  className: "text-sm text-gray-500",
                  children:
                  "Data Scientist | AI Engineer | Software | AI | LLMs | Travel | Music | F1",
                }),
                (0, n.jsx)(m(), {
                  src: "/images/about-image.png",
                  alt: "about",
                  className: "h-auto",
                  width: 1536,
                  height: 1024,
                }),
                (0, n.jsxs)("div", {
                  className: "text-sm sm:text-md space-y-2",
                  children: [
                    (0, n.jsx)("p", {
                      children:
                        "Hello! I am Aman, based out of Bengaluru and I enjoy creating things that make life easier for people. I have been playing around with code since 2018. I often write about AI, LLMs, Frontend Dev, React, Backend, Rails and DBs.",
                    }),
                    (0, n.jsxs)("p", {
                      className: "space-x-1",
                      children: [
                        (0, n.jsx)("span", {
                          children:
                            "Currently I am working as a Data Analyst Intern at",
                        }),
                        (0, n.jsx)("a", {
                          className: "underline",
                          href: "https://www.linkedin.com/company/unidif-consulting/",
                          target: "_blank",
                          children: "UNIDIF Consulting",
                        }),
                        (0, n.jsx)("span", {
                          children:
                            "for JACO Manufacturing Industry.",
                        }),
                        (0, n.jsx)("br", {}),
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "Earlier, I have built multiple products leading development and design for some of them.",
                        (0, n.jsx)("br", {}),
                        "Co-Founded Dreamboat.ai, Engagebud, Influencerbit.",
                      ],
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "I am amazed by LLMs / AI, With LLMs, a lot of boring tasks will be automated and workflows are going to completely revolutionize from what we see today. I want to be at the forefront of this change.",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "I love music (Techno, House), am deep into F1 and love GoKarting, & chess.",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex items-center space-x-3",
                  children: [(0, n.jsx)(d, {}), (0, n.jsx)(s.Z, {})],
                }),
              ],
            }),
          }),
        x = a(15030),
        g = () =>
          (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(x.Z, { title: "About" }), (0, n.jsx)(u, {})],
          });
    },
  },
  function (e) {
    e.O(0, [675, 888, 774, 179], function () {
      return e((e.s = 39212));
    }),
      (_N_E = e.O());
  },
]);
