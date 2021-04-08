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
                    "606e685f7aa7b31f651c89e9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-e2o7gc14",
                  apiId: "b13c849e-6a41-4a29-8fbb-9a5ecc9eb9f2",
                },
                {
                  buildHookId: "606e685f8de0d21512025f9c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7ssn5sfq",
                  apiId: "2fff85d0-765e-4b5a-8eac-68d4b9bbccbe",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/justinrassier/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7ssn5sfq.netlify.app",
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
