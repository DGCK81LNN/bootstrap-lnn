const esbuild = require("esbuild")

esbuild.buildSync({
  entryPoints: ["src/bootstrap-vue-3.mjs"],
  outfile: "dist/bootstrap-vue-3.min.js",
  nodePaths: ["src/_redirects"],
  bundle: true,
  minify: true,
  sourcemap: true,
})
