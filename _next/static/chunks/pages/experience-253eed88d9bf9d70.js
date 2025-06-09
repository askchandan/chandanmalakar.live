(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [538],
  {
    19306: function (e, a, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/experience",
        function () {
          return r(44117);
        },
      ]);
    },
    32943: function (e, a, r) {
      "use strict";
      var t = r(85893);
      a.Z = (e) => {
        let { title: a } = e;
        return (0, t.jsx)("h1", {
          className:
            "text-3xl md:text-5xl font-medium text-primary dark:text-white",
          children: a,
        });
      };
    },
    61027: function (e, a, r) {
      "use strict";
      r.d(a, {
        C: function () {
          return o;
        },
      });
      var t = r(85893);
      r(67294);
      var n = r(45139),
        s = r(27596);
      let i = (0, n.j)(
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
      function o(e) {
        let { className: a, variant: r, ...n } = e;
        return (0, t.jsx)("div", {
          className: (0, s.cn)(i({ variant: r }), a),
          ...n,
        });
      }
    },
    21064: function (e, a, r) {
      "use strict";
      r.d(a, {
        Ol: function () {
          return o;
        },
        SZ: function () {
          return l;
        },
        Zb: function () {
          return i;
        },
        aY: function () {
          return c;
        },
        eW: function () {
          return m;
        },
        ll: function () {
          return d;
        },
      });
      var t = r(85893),
        n = r(67294),
        s = r(27596);
      let i = n.forwardRef((e, a) => {
        let { className: r, ...n } = e;
        return (0, t.jsx)("div", {
          ref: a,
          className: (0, s.cn)(
            "rounded-xl border bg-card text-card-foreground shadow",
            r
          ),
          ...n,
        });
      });
      i.displayName = "Card";
      let o = n.forwardRef((e, a) => {
        let { className: r, ...n } = e;
        return (0, t.jsx)("div", {
          ref: a,
          className: (0, s.cn)("flex flex-col space-y-1.5 p-6", r),
          ...n,
        });
      });
      o.displayName = "CardHeader";
      let d = n.forwardRef((e, a) => {
        let { className: r, ...n } = e;
        return (0, t.jsx)("h3", {
          ref: a,
          className: (0, s.cn)("font-semibold leading-none tracking-tight", r),
          ...n,
        });
      });
      d.displayName = "CardTitle";
      let l = n.forwardRef((e, a) => {
        let { className: r, ...n } = e;
        return (0, t.jsx)("p", {
          ref: a,
          className: (0, s.cn)("text-sm text-muted-foreground", r),
          ...n,
        });
      });
      l.displayName = "CardDescription";
      let c = n.forwardRef((e, a) => {
        let { className: r, ...n } = e;
        return (0, t.jsx)("div", {
          ref: a,
          className: (0, s.cn)("p-6 pt-0", r),
          ...n,
        });
      });
      c.displayName = "CardContent";
      let m = n.forwardRef((e, a) => {
        let { className: r, ...n } = e;
        return (0, t.jsx)("div", {
          ref: a,
          className: (0, s.cn)("flex items-center p-6 pt-0", r),
          ...n,
        });
      });
      m.displayName = "CardFooter";
    },
    44117: function (e, a, r) {
      "use strict";
      r.r(a),
        r.d(a, {
          default: function () {
            return c;
          },
          metadata: function () {
            return l;
          },
        });
      var t = r(85893);
      r(67294);
      var n = [
          {
            date: "Mar 2024 - Current",
            title: "Founding Product Engineer at KAY.AI",
            role: "Founding Product Engineer",
            companyName: "kay.ai",
            description:
              "Building Operator for Insurance Industry, leading Frontend and UX.",
            website: "https://kay.ai",
            fullLogo: "/images/companies/kay.png",
            techStack: [
              "ReactJs",
              "Typescript",
              "TailwindCSS",
              "AWS",
              "ShadCN",
              "Python",
              "Playwright",
              "LLM",
            ],
            points: [
              "Leading UI/UX for Copilot to automate insurance workflows",
              "Built the Kay Admin App, Client App, and Demo Instance for seamless AI-driven automation.",
              "Experimenting with emerging AI models, techniques and UX paradigms to enhance usability and system design.",
            ],
          },
          {
            date: "Feb - Nov 2023",
            title: "Co-Founder / CTO at DreamboatAI",
            role: "Co-Founder / CTO",
            companyName: "DreamboatAI",
            description:
              "Designed and developed LLMOps Platform, built multiple LLM apps.",
            website: "https://dreamboat.ai",
            fullLogo: "/images/companies/dreamboatai.png",
            techStack: [
              "ReactJs",
              "Typescript",
              "Rails",
              "Node",
              "AWS",
              "Cloudflare",
              "TimescaleDB",
              "Redis",
              "PostgreSQL",
            ],
            points: [
              "Led the team for design and development of LLMOps Platform to help monitor, manage, and debug LLM apps following Agile Principles.",
              "Built a high-performance proxy middleware using Cloudflare Workers, achieving sub-20ms response times.",
              "Created multiple LLM-Powered Apps: Divedash - Chrome extension suggesting prompt templates for ChatGPT. Almada - Linkedin Icebreaker generator from profile URLs.",
            ],
          },
          {
            date: "Aug 2021 - Nov 2022",
            title: "Co-Founder / CTO at EngageBud",
            role: "Co-Founder / CTO",
            companyName: "EngageBud",
            description:
              "Developed Influencerbit and Engagebud, handled 11M+ users, raised $100K funding.",
            website: "https://engagebud.com",
            fullLogo: "/images/companies/engagebud.png",
            techStack: [
              "ReactJs",
              "Typescript",
              "Rails",
              "PostgreSQL",
              "Javascript",
            ],
            points: [
              "Led the team to develop Influencerbit - Customer Led Influencer Marketing Platform for E-Commerce Brands.",
              "Built Engagebud - Gamification Platform for Ecommerce.",
              "Scaled backend to handle 13M+ users and generated 6M+ discount codes",
              "Raised $100K funding from Upekkha, a SaaS accelerator.",
              "Developed highly customizable software, balancing performance and adaptability.",
            ],
          },
          {
            date: "May 2020 - Jun 2021",
            title: "Product Engineer at ProfileBud",
            role: "Product Engineer",
            companyName: "ProfileBud",
            description:
              "Led frontend development, created payment and admin portals, developed GoLang server.",
            website: "https://profilebud.com",
            fullLogo: "/images/companies/profilebud.png",
            techStack: ["ReactJs", "Rails", "GoLang", "Gatsby", "Javascript"],
            points: [
              "Led the frontend development for the company as one of the founding members.",
              "Learned and made responsive websites, blogs via Gatsby, payment and admin portals following Agile principles.",
              "Developed a GoLang server to handle 20M+ users data with 1K+ req/s.",
            ],
          },
        ],
        s = r(32943),
        i = r(21064),
        o = r(61027),
        d = (e) => {
          let { item: a } = e,
            {
              date: r,
              title: n,
              description: s,
              website: d,
              points: l,
              fullLogo: c,
              role: m,
              companyName: u,
              techStack: p,
            } = a;
          return (0, t.jsxs)(i.Zb, {
            className: "overflow-hidden border border-gray-700",
            children: [
              (0, t.jsx)(i.Ol, {
                className: "bg-gray-200 dark:bg-gray-800 py-4",
                children: (0, t.jsxs)("div", {
                  className: "flex flex-row items-center justify-between gap-2",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "text-lg font-semibold text-gray-900 dark:text-white",
                          children: [
                            (0, t.jsxs)("span", { children: [m, " at", " "] }),
                            (0, t.jsx)("a", {
                              className:
                                "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline",
                              href: d ? d + "?utm_source=amankumar.ai" : "#",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: u,
                            }),
                          ],
                        }),
                        (0, t.jsx)("h5", {
                          className: "text-gray-700 dark:text-gray-400",
                          children: r,
                        }),
                      ],
                    }),
                    c &&
                      (0, t.jsx)("img", {
                        src: c,
                        alt: u || n,
                        className: "w-24 md:w-32 object-cover",
                      }),
                  ],
                }),
              }),
              (0, t.jsx)(i.aY, {
                className: "bg-white dark:bg-gray-900 pt-4",
                children: (0, t.jsxs)("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    s &&
                      (0, t.jsx)("div", {
                        className: "text-gray-700 dark:text-gray-300",
                        children: s,
                      }),
                    l &&
                      l.length > 0 &&
                      (0, t.jsx)("ul", {
                        className: "text-gray-700 dark:text-gray-300 space-y-2",
                        children: l.map((e, a) =>
                          (0, t.jsxs)(
                            "li",
                            {
                              className: "flex items-start",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "text-gray-400 mr-2",
                                  children: "•",
                                }),
                                e,
                              ],
                            },
                            a
                          )
                        ),
                      }),
                    p &&
                      p.length > 0 &&
                      (0, t.jsxs)("div", {
                        className: "mt-2",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "text-gray-600 dark:text-gray-400 font-medium mb-2",
                            children: "Tech Stack",
                          }),
                          (0, t.jsx)("div", {
                            className: "flex flex-wrap gap-2",
                            children: p.map((e, a) =>
                              (0, t.jsx)(
                                o.C,
                                {
                                  variant: "outline",
                                  className:
                                    "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700",
                                  children: e,
                                },
                                a
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
        };
      let l = {
        title: "Aman's Journey | AI Engineer & Full Stack Developer",
        description: "A timeline of my professional experiences.",
      };
      var c = () =>
        (0, t.jsxs)("div", {
          className: "mx-auto space-y-3 md:space-y-6",
          children: [
            (0, t.jsx)(s.Z, { title: "Aman's Journey" }),
            (0, t.jsx)("p", {
              children: "A timeline of my professional experiences.",
            }),
            (0, t.jsx)("div", {
              className: "flex min-w-full flex-col gap-6 md:gap-9 py-5",
              children: n.map((e, a) => (0, t.jsx)(d, { item: e }, a)),
            }),
          ],
        });
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 19306));
    }),
      (_N_E = e.O());
  },
]);
