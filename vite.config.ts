import {defineConfig} from "vite";
import path from "path";
const config = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: "build-ts",
            formats: ['es', 'umd','cjs'], // adding 'umd' requires globals set to every external module
            fileName: (format) => `build-ts.${format}.js`,
        },
        emptyOutDir: false, // to retain the types folder generated by tsc
    },
});


export default config
