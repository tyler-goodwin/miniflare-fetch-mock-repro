import { env } from "cloudflare:test"
import { it, expect } from "vitest"

it("return expected result", async () => {
  const response = await env.WORKER.fetch("https://www.example.com/");
  expect(await response.text()).toBe("ok")
  expect(response.status).toBe(200)
})