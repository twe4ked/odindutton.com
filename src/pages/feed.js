import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

const posts = await getCollection("posts");

export function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: "Odin Dutton",
    // `<description>` field in output xml
    description: "Odin Dutton's blog",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => {
      const date = post.filePath?.match(/(\d{4}-\d{2}-\d{2})/);
      if (!date) {
        throw new Error("Post date not found in file path");
      }
      const pubDate = new Date(date[0]);

      return {
        title: post.data.title,
        link: `/${post.id}/`,
        pubDate,
      };
    }),
  });
}
