(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [705],
  {
    81776: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/apps",
        function () {
          return n(95177);
        },
      ]);
    },
    32943: function (e, t, n) {
      "use strict";
      var i = n(85893);
      t.Z = (e) => {
        let { title: t } = e;
        return (0, i.jsx)("h1", {
          className:
            "text-3xl md:text-5xl font-medium text-primary dark:text-white",
          children: t,
        });
      };
    },
    15030: function (e, t, n) {
      "use strict";
      var i = n(85893),
        o = n(9008),
        a = n.n(o);
      n(67294);
      let s = "Aman Kumar, AI Product Engineer, Problem Solver, FullStack Dev";
      t.Z = (e) => {
        let {
          title: t,
          description:
            n = "Experimenting with LLMs, AI Engineering, Problem Solving, FullStack Development",
          keywords: o,
        } = e;
        return (
          (t = t
            ? "".concat(t, " | Aman's Mind Map")
            : "Aman's Mind Map | AI Product Engineer"),
          (o = o ? "".concat(o, ", ").concat(s) : s),
          (0, i.jsxs)(a(), {
            children: [
              (0, i.jsx)("title", { children: t }),
              n && (0, i.jsx)("meta", { name: "description", content: n }),
              o && (0, i.jsx)("meta", { name: "keywords", content: o }),
              (0, i.jsx)("meta", { property: "og:title", content: t }),
              (0, i.jsx)("meta", {
                property: "og:description",
                content: n || "",
              }),
            ],
          })
        );
      };
    },
    95177: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var i = n(85893);
      n(67294);
      var o = n(15030),
        a = n(32943),
        s = n(41664),
        r = n.n(s),
        c = (e) => {
          let { item: t } = e;
          return (0, i.jsx)(r(), {
            href: ["apps", t.slug].join("/"),
            className: "w-full",
            children: (0, i.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-md hover:shadow-sm",
              children: [
                (0, i.jsx)("img", {
                  src: t.image,
                  alt: t.title,
                  className: "max-h-52 md:w-full mb-4",
                }),
                (0, i.jsx)("h2", {
                  className: "text-lg md:text-xl font-bold",
                  children: t.title,
                }),
                (0, i.jsx)("p", {
                  className: "mt-2 text-gray-600 text-sm",
                  children: t.description,
                }),
              ],
            }),
          });
        },
        l = [
          {
            title: "Blood Donation Guide",
            description: "Get information about blood donation",
            image: "/content/apps/blood-donation.png",
            slug: "blood-donation",
            tags: ["blood", "donation", "guide"],
            componentKey: "BloodDonationGuide",
          },
          {
            title: "Anonymizer",
            description: "Anonymize your data",
            image: "/content/apps/anonmizer.png",
            slug: "anonymizer",
            tags: ["anonymizer", "data"],
            componentKey: "Anonymizer",
          },
          {
            title: "Course Generator",
            description: "Generate courses with AI",
            image: "/content/apps/course-generator.png",
            slug: "course-generator",
            tags: ["course", "generator"],
            componentKey: "CourseGenerator",
          },
          {
            title: "Image Editor",
            description: "Edit images with AI",
            image: "/content/apps/image-editor.png",
            slug: "image-editor",
            tags: ["image", "editor"],
            componentKey: "ImageEditor",
          },
          {
            title: "Caption Generator",
            description: "Generate captions with AI",
            image: "/content/apps/caption-generator.png",
            slug: "caption-generator",
            tags: ["caption", "generator"],
            componentKey: "CaptionGenerator",
          },
          {
            title: "Chatbot",
            description: "chat",
            slug: "simple-chatbot",
            image: "/content/apps/chatbot.png",
            tags: ["chatbot"],
            componentKey: "Chatbot",
          },
          {
            title: "F1",
            description: "F1 Analytics Dashboard",
            slug: "f1",
            image: "/content/apps/f1/image.png",
            tags: ["f1", "dashboard"],
            componentKey: "F1Dashboard",
          },
          {
            title: "Indian High RTOS Pincodes",
            description: "Pincodes & Analytics for Indian High RTOs pincodes",
            slug: "indian-high-rtos-to-pincodes",
            image: "/content/apps/india-high-rto/image.png",
            tags: [
              "indian",
              "high",
              "rtos",
              "pincodes",
              "analytics",
              "ecommerce",
            ],
            componentKey: "IndiaHighRtoPins",
          },
        ],
        d = (e) => {
          let { minimized: t = !1 } = e;
          return l && 0 !== l.length
            ? t
              ? (0, i.jsx)("div", {
                  className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                  children: l.map((e) => (0, i.jsx)(c, { item: e }, e.slug)),
                })
              : (0, i.jsxs)("div", {
                  className: "mx-auto space-y-2 sm:space-y-3 md:space-y-5",
                  children: [
                    (0, i.jsx)(a.Z, { title: "Apps" }),
                    (0, i.jsx)("p", {
                      className: "",
                      children: "Apps - Tools and Services that come in handy",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "min-w-full grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6",
                      children: l.map((e) =>
                        (0, i.jsx)(c, { item: e }, e.slug)
                      ),
                    }),
                  ],
                })
            : (0, i.jsx)("p", { children: "No apps found." });
        },
        p = () =>
          (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Z, { title: "Apps" }), (0, i.jsx)(d, {})],
          });
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 81776));
    }),
      (_N_E = e.O());
  },
]);
