(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [289],
  {
    88110: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/tools",
        function () {
          return i(12280);
        },
      ]);
    },
    32943: function (t, e, i) {
      "use strict";
      var n = i(85893);
      e.Z = (t) => {
        let { title: e } = t;
        return (0, n.jsx)("h1", {
          className:
            "text-3xl md:text-5xl font-medium text-primary dark:text-white",
          children: e,
        });
      };
    },
    15030: function (t, e, i) {
      "use strict";
      var n = i(85893),
        r = i(9008),
        s = i.n(r);
      i(67294);
      let a = "Aman Kumar, AI Product Engineer, Problem Solver, FullStack Dev";
      e.Z = (t) => {
        let {
          title: e,
          description:
            i = "Experimenting with LLMs, AI Engineering, Problem Solving, FullStack Development",
          keywords: r,
        } = t;
        return (
          (e = e
            ? "".concat(e, " | Aman's Mind Map")
            : "Aman's Mind Map | AI Product Engineer"),
          (r = r ? "".concat(r, ", ").concat(a) : a),
          (0, n.jsxs)(s(), {
            children: [
              (0, n.jsx)("title", { children: e }),
              i && (0, n.jsx)("meta", { name: "description", content: i }),
              r && (0, n.jsx)("meta", { name: "keywords", content: r }),
              (0, n.jsx)("meta", { property: "og:title", content: e }),
              (0, n.jsx)("meta", {
                property: "og:description",
                content: i || "",
              }),
            ],
          })
        );
      };
    },
    12280: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return c;
          },
        });
      var n = i(85893),
        r = i(32943),
        s = (t) => {
          let { tool: e } = t,
            i = () => {
              window.open(e.link, "_blank");
            };
          return (0, n.jsxs)("div", {
            className:
              "flex cursor-pointer flex-row items-center justify-start space-y-2 p-2 sm:p-3 rounded-md gap-3 border border-gray-300 hover:border-oldsilver hover:bg-gray-100 dark:border-oldsilver dark:hover:border-white dark:hover:bg-charleston ",
            onClick: () => i(),
            children: [
              (0, n.jsx)("img", {
                className: "w-8 h-8 sm:w-12 sm:h-12 rounded-md object-cover",
                src: "/images/tools/" + e.image,
                alt: e.title,
              }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h1", {
                    className:
                      "text-md text-primary dark:text-white sm:text-lg",
                    children: e.title,
                  }),
                  (0, n.jsx)("p", {
                    className: "text-xs sm:text-sm",
                    children: e.tag,
                  }),
                ],
              }),
            ],
          });
        },
        a = [
          {
            title: "Windsurf",
            tag: "IDE",
            image: "windsurf.png",
            link: "https://windsurf.com/",
          },
          {
            title: "ChatGPT",
            tag: "Productivity",
            image: "chatgpt.png",
            link: "https://chat.openai.com/",
          },
          {
            title: "Claude",
            tag: "Productivity",
            image: "claude.png",
            link: "https://claude.ai/",
          },
          {
            title: "Notion",
            tag: "Productivity",
            image: "notion.png",
            link: "https://www.notion.so/",
          },
          {
            title: "Webstorm",
            tag: "IDE",
            image: "webstorm.png",
            link: "https://www.jetbrains.com/webstorm/",
          },
          {
            title: "Pycharm",
            tag: "IDE",
            image: "pycharm.png",
            link: "https://www.jetbrains.com/pycharm/",
          },
          {
            title: "Readwise Reader",
            tag: "Reading",
            image: "reader.png",
            link: "https://readwise.io/",
          },
          {
            title: "Slack",
            tag: "Communication",
            image: "slack.png",
            link: "https://slack.com/",
          },
          {
            title: "Medium",
            tag: "Writing",
            image: "medium.png",
            link: "https://medium.com/",
          },
        ],
        o = () =>
          (0, n.jsxs)("div", {
            className: "mx-auto max-w-4xl space-y-3 md:space-y-5",
            children: [
              (0, n.jsx)(r.Z, { title: "Shovels" }),
              (0, n.jsx)("h3", {
                className: "text-sm",
                children: "Tools I frequently use to make life easier",
              }),
              (0, n.jsx)("div", {
                className: "text-sm grid grid-cols-2 gap-2 md:gap-4",
                children: a.map((t) => (0, n.jsx)(s, { tool: t }, t.title)),
              }),
            ],
          }),
        l = i(15030),
        c = () =>
          (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(l.Z, { title: "Tools" }), (0, n.jsx)(o, {})],
          });
    },
  },
  function (t) {
    t.O(0, [888, 774, 179], function () {
      return t((t.s = 88110));
    }),
      (_N_E = t.O());
  },
]);
