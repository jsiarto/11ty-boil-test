// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("name", function(name, twitterusername) {
    return `<div class="user">
<div class="username">${name}</div>
<div class="twitter">@${twitterusername}</div>
</div>`;
  });
};