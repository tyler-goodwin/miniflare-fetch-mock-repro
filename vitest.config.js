import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";
import { MockAgent } from "undici";

const mockFetch = new MockAgent()

export default defineWorkersConfig({
  test: {
    poolOptions: {
      workers: {
        singleWorker: true,
        miniflare: {
          compatibilityDate: "2024-01-01",
          compatibilityFlags: ["nodejs_compat"],
          serviceBindings: {
            WORKER: "test-worker",
          },
          workers: [
            {
              name: "test-worker",
              modules: true,
              compatibilityDate: "2022-11-30",
              compatibilityFlags: ["nodejs_compat"],
              scriptPath: "./worker.js",
              fetchMock: mockFetch,
            }
          ]
        }
      },
    },
  },
});