(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(18181);
        },
      ]);
    },
    32943: function (e, r, t) {
      "use strict";
      var s = t(85893);
      r.Z = (e) => {
        let { title: r } = e;
        return (0, s.jsx)("h1", {
          className:
            "text-3xl md:text-5xl font-medium text-primary dark:text-white",
          children: r,
        });
      };
    },
    9491: function (e, r, t) {
      "use strict";
      var s = t(85893),
        a = t(67294),
        n = t(82417),
        i = t(92594);
      r.Z = () => {
        let [e, r] = (0, a.useState)(!1),
          t = async () => {
            await navigator.clipboard.writeText("chandanmalakar7549@gmail.com"),
              r(!0);
          };
        return (
          (0, a.useEffect)(() => {
            if (e) {
              let e = setTimeout(() => {
                r(!1);
              }, 3e3);
              return () => clearTimeout(e);
            }
          }, [e]),
          (0, s.jsxs)(n.z, {
            className: e
              ? "text-white hover:text-green border-green-500 border-2"
              : "text-white hover:text-oldsilver",
            onClick: t,
            children: [
              (0, s.jsx)("span", {
                className: "text-sm pr-2",
                children: (0, s.jsx)(i.C3L, { className: "m-0", size: 12 }),
              }),
              (0, s.jsx)("span", {
                className: e ? "text-green" : "",
                style: { transition: "all 0.3s ease" },
                children: e ? "Copied!" : "E-Mail",
              }),
            ],
          })
        );
      };
    },
    54563: function (e, r, t) {
      "use strict";
      t.d(r, {
        W: function () {
          return s;
        },
      });
      let s = (e) =>
        "primary" === e
          ? "text-black bg-white dark:bg-primary dark:text-white hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          : "text-white dark:text-black bg-black dark:bg-oldsilver hover:text-black hover:bg-white dark:hover:bg-slate dark:hover:text-white";
    },
    18181: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return h;
          },
        });
      var s = t(85893),
        a = t(82417),
        n = t(41664),
        i = t.n(n),
        l = t(54563),
        c = (e) => {
          let { variant: r = "primary" } = e;
          return (0, s.jsx)(i(), {
            href: "/contact",
            children: (0, s.jsx)(a.z, {
              className: (0, l.W)(r),
              children: "Contact",
            }),
          });
        },
        d = t(9491),
        o = t(32943),
        x = () => {
          let e =
            "text-primary dark:text-white underline hover:bg-gray-200 hover:text-gray-900 dark:hover:text-primary p-1 rounded-lg";
          return (0, s.jsxs)("div", {
            className: "sm:p-0 max-w-[80%] overflow-x-auto mx-auto space-y-8",
            children: [
              (0, s.jsxs)("div", {
                className: "space-y-3",
                children: [
                  (0, s.jsx)(o.Z, { title: "Hey, I'm Chandan" }),
                  (0, s.jsx)("h2", {
                    className:
                      "text-2xl md:text-4xl font-medium text-primary dark:text-white",
                    children: (0, s.jsx)("span", {
                      className: "text-gray-500",
                      children: "Data Scientist and Machine Learning Engineer",
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "my-4",
                children: (0, s.jsx)(i(), {
                  href: "/blogs/25",
                  passHref: !0,
                  legacyBehavior: !0,
                  children: (0, s.jsx)("a", {
                    className: "block",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-4 rounded-xl border border-primary bg-gradient-to-br from-primary/10 to-white dark:from-primary/20 dark:to-zinc-900 shadow-md hover:shadow-lg transition-shadow group w-full",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex-1",
                          children: [
                            (0, s.jsx)("h3", {
                              className:
                                "text-lg sm:text-xl font-bold text-primary dark:text-white group-hover:underline",
                              children: "21 — A Quick Reflection",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-sm text-gray-700 dark:text-zinc-300 mt-1",
                              children:
                                "A quick reflection on my journey from 18 to 21.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "flex items-center mt-2 sm:mt-0",
                          children: (0, s.jsx)("span", {
                            className:
                              "inline-flex items-center px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold",
                            children: "Read",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "text-md tracking-wider font-light space-y-3 md:space-y-5",
                children: [
                  (0, s.jsx)("p", {
                    className: "space-x-1",
                    children: (0, s.jsxs)("span", {
                      className: "text-lg",
                      children: [
                        "I turn fuzzy ideas into live AI Products ",
                        (0, s.jsx)("em", { children: "(within 2 weeks)" }),
                        "-Data-Gathering, Data-Analysis, Data-Preprocessing, and Model-Building.",
                      ],
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "space-x-1",
                    children: [
                      (0, s.jsx)("span", {
                        children:
                          "Currently I am working as an Data Analyst Intern at",
                      }),
                      (0, s.jsx)("a", {
                        className: e,
                        href: "https://www.linkedin.com/company/unidif-consulting/",
                        target: "_blank",
                        children: "UNIDIF Consulting",
                      }),
                      (0, s.jsx)("span", {
                        children: "for JACO Manufacturing Industry.",
                      }),
                      (0, s.jsx)("br", {}),
                      (0, s.jsx)("span", {
                        children:
                          "I have built multiple projects in past 3 years.",
                      }),
                      (0, s.jsxs)("p", {
                        children: [
                          "for hands on experience in real world problems.",
                          (0, s.jsx)("a", {
                            className: e,
                            href: "https://dreamboat.ai/",
                            target: "_blank",
                            children: "Dreamboat.ai,",
                          }),
                          "built",
                          (0, s.jsx)("a", {
                            className: e,
                            href: "https://engagebud1.webflow.io/",
                            target: "_blank",
                            children: "Engagebud,",
                          }),
                          (0, s.jsx)("a", {
                            className: e,
                            href: "https://influencerbit.com/",
                            target: "_blank",
                            children: "Influencerbit.",
                          }),
                        ],
                      }),
                      (0, s.jsx)("br", {}),
                      (0, s.jsxs)("p", {
                        children: [
                          "My Go-to stack is ",
                          (0, s.jsx)("strong", { children: "Tensorflow" }),
                          ", ",
                          (0, s.jsx)("strong", { children: "PowerBI" }),
                          ", ",
                          (0, s.jsx)("strong", { children: "OpenCV" }),
                          ", ",
                          (0, s.jsx)("strong", { children: "Pandas" }),
                          ", ",
                          (0, s.jsx)("strong", { children: "Numpy" }),
                          ", ",
                          (0, s.jsx)("strong", { children: "Matplotlib" }),
                          ", ",
                          (0, s.jsx)("strong", { children: "Seaborn" }),
                          ", and ",
                          (0, s.jsx)("strong", { children: "Scikit-learn" }),
                          ".",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("p", {
                    className: "space-x-1",
                    children: [
                      (0, s.jsx)("span", {
                        children: "You can talk to me about",
                      }),
                      (0, s.jsx)("span", {
                        className:
                          "text-primary font-medium dark:font-normal dark:text-white",
                        children: "AI, new ideas, life, or anything else.",
                      }),
                      (0, s.jsx)("br", {}),
                      (0, s.jsxs)("span", {
                        className: "space-x-1",
                        children: [
                          "Say a Hi on",
                          " ",
                          (0, s.jsx)(i(), {
                            className: "underline font-bold",
                            href: "https://x.com/chandan6209",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "X",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, s.jsx)(c, { variant: "secondary" }),
                  (0, s.jsx)(d.Z, {}),
                ],
              }),
            ],
          });
        };
      function h() {
        return (0, s.jsx)("div", { children: (0, s.jsx)(x, {}) });
      }
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
