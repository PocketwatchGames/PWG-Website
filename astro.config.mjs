import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import svelte from "@astrojs/svelte";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	integrations: [
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
	],
	output: "server",
	adapter: vercel(),
	site: "http://www.pocketwatchgames.com/",
});
