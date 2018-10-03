const { buildSrc, buildDest } = require("./paths");

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary("njk", require("nunjucks").configure(""));
  eleventyConfig.addPassthroughCopy("src/assets/images");
  return {
    templateFormats: ["html", "njk"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: buildSrc,
      output: buildDest,
      includes: "_includes"
    }
  };
};
