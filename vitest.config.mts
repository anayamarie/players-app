import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { config } from "dotenv";

const env = config({ path: ".env" });

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./setupTest.ts"],
        coverage: {
            provider: "v8",
        },
        env: env.parsed,
    },
});
