var pkg = require("./package.json");

require("esbuild")
  .build({
    entryPoints: ["./src/survey-widget.tsx"],
    bundle: true,
    outdir: "dist",
    
    format: "iife",
    globalName: 'SurveyWidget',

    sourcemap: "inline",
    metafile: true,
    // minify: true,
    inject: ["./react-shim.js"],
  })
  .catch(() => process.exit(1));
