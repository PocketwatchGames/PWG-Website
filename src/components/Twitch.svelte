<script>
	import { onMount } from "svelte";

	const parent = import.meta.env.DEV ? "localhost" : "pocketwatchgames.com";
	const src = `//player.twitch.tv/?channel=pocketwatch&parent=${parent}`;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<iframe
		{src}
		{parent}
		height="720"
		width="1280"
		frameborder="0"
		scrolling="no"
		title="Twitch Embed"
		allowfullscreen="true"
		loading="lazy"
	/>
{/if}

<style>
	iframe {
		aspect-ratio: 16 / 9;
		border: 1px solid var(--color-white);
		border-radius: 8px;
		height: 100%;
		overflow: hidden;
		width: 100%;
	}
</style>
