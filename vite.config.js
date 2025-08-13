import { defineConfig } from "vite";

/**
 * Path to cars-sharing
 */
const carsPath = "";

/**
 * Don't change those lines below
 */
export default defineConfig({
    root: carsPath,
    server: {
        port: 3000,
        open: true,
    },
});