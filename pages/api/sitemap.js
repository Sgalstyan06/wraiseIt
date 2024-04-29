import { SitemapStream, streamToPromise } from "sitemap";
//constants
import { DOMAIN_NAME } from "../../constants/staticInfo";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `${DOMAIN_NAME}`,
      cacheTime: 600000,
    });

    // List of posts
    const post_slugs = ["/", "about", "careers", "services"];

    // Create each URL row
    post_slugs.forEach((post) => {
      smStream.write({
        url: `${post}`,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    res.send(JSON.stringify(e));
  }
};
