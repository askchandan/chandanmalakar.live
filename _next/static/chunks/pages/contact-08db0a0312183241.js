(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    81382: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return n(11185);
        },
      ]);
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
        i = n.n(s);
      n(67294);
      let a = "Chandan Malakar, Data Scientist, Problem Solver, FullStack Dev";
      t.Z = (e) => {
        let {
          title: t,
          description:
            n = "Experimenting with LLMs, AI Engineering, Problem Solving, FullStack Development",
          keywords: s,
        } = e;
        return (
          (t = t
            ? "".concat(t, " | Chandan's Mind Map")
            : "Chandan's Mind Map | Data Scientist"),
          (s = s ? "".concat(s, ", ").concat(a) : a),
          (0, r.jsxs)(i(), {
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
    48501: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return a;
        },
      });
      var r = n(85893),
        s = n(67294),
        i = n(27596);
      let a = s.forwardRef((e, t) => {
        let { className: n, type: s, ...a } = e;
        return (0, r.jsx)("input", {
          type: s,
          className: (0, i.cn)(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            n
          ),
          ref: t,
          ...a,
        });
      });
      a.displayName = "Input";
    },
    11185: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r = n(85893),
        s = n(32943),
        i = n(15030),
        a = n(82417),
        o = n(48501),
        c = n(67294),
        l = () => {
          let [e, t] = (0, c.useState)(!1),
            n = async (e) => {
              e.preventDefault();
              let n = e.target,
                r = Object.fromEntries(new FormData(n));
              (
                await fetch(n.action, {
                  method: n.method,
                  body: JSON.stringify(r),
                  headers: { Accept: "application/json" },
                })
              ).ok && (n.reset(), t(!0));
            };
          return (0, r.jsxs)("div", {
            className: "p-3 border-[#393939] border rounded-md space-y-3",
            children: [
              (0, r.jsxs)("div", {
                className: "space-y-1",
                children: [
                  (0, r.jsx)("h3", {
                    className: "text-md font-bold text-primary dark:text-white",
                    children: "Stay up to date",
                  }),
                  (0, r.jsx)("p", {
                    className: "text-sm",
                    children: "Keep me updated with the latest that pops up.",
                  }),
                ],
              }),
              e
                ? (0, r.jsx)("div", {
                    children: (0, r.jsx)("span", {
                      className: "text-white",
                      children: "Thank you for subscribing!",
                    }),
                  })
                : (0, r.jsxs)("form", {
                    action: "https://formspree.io/f/xeojoqnd",
                    className: "flex gap-2",
                    method: "post",
                    onSubmit: n,
                    children: [
                      (0, r.jsx)(o.I, {
                        name: "email",
                        type: "email",
                        placeholder: "Your email",
                        required: !0,
                      }),
                      (0, r.jsx)(a.z, {
                        type: "submit",
                        children: "Subscribe",
                      }),
                    ],
                  }),
            ],
          });
        },
        d = n(41664),
        u = n.n(d),
        m = () =>
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(i.Z, { title: "Contact" }),
              (0, r.jsxs)("div", {
                className: "space-y-3 md:space-y-6 max-w-4xl mx-auto",
                children: [
                  (0, r.jsx)(s.Z, { title: "Contact" }),
                  (0, r.jsx)("h2", {
                    className: "mb-6",
                    children:
                      "If you're building in / excited about AI or just wanna chat, say hi on X!",
                  }),
                  (0, r.jsx)("div", {
                    className: "flex items-center space-x-4",
                    children: (0, r.jsx)(u(), {
                      href: "https://x.com/chandan6209",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, r.jsx)(a.z, {
                        children: "Say Hi on X (Twitter)",
                      }),
                    }),
                  }),
                  (0, r.jsx)(l, {}),
                ],
              }),
            ],
          });
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 81382));
    }),
      (_N_E = e.O());
  },
]);
