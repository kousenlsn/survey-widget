var pkg = require("./package.json");

require("esbuild")
  .build({
    entryPoints: ["./src/survey"],
    bundle: true,
    outdir: "dist/es",
    
    format: "esm",

    sourcemap: "external",
    metafile: true,
    minify: true,
    inject: ["./react-shim.js"],
  })
  .catch(() => process.exit(1));
