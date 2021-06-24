export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60d4927cceb59f0b622ee2c0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-t1ygkbxy",
                  apiId: "5d9a1d05-8547-4293-96fa-1d14b22a85cf",
                },
                {
                  buildHookId: "60d4927b09e1880b93d0fdd4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-udbemxzn",
                  apiId: "4812c455-3b96-4af9-80a8-b7c1104e20f4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/digital-spo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-udbemxzn.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
