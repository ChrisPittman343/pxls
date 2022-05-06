<script lang="ts">
	import { onMount } from 'svelte';
	import PrimaryButton from './buttons/PrimaryButton.svelte';
	import ScreenFade from './popup/ScreenFade.svelte';

	let shown = false;

	// Show the hero the first time the user visits
	onMount(() => {
		// If visited before, don't show
		if (document.cookie.length > 0) return;

		// Add a long lasting cookie to mark visitation, and display hero
		document.cookie = 'showHero=0;max-age=31536000';
		shown = true;
	});

	const exit = () => {
		shown = false;
	};
</script>

<ScreenFade {shown} {exit}>
	<div
		class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow rounded bg-white max-w-2xl"
	>
		<div
			class="w-full h-40 xl:h-60 bg-no-repeat bg-cover bg-bottom rounded-t hidden lg:block"
			style="background-image: url('/hero_banner.png'); image-rendering: pixelated; image-rendering: crisp-edges;"
		/>
		<div class="p-8 flex flex-col gap-y-6">
			<h1 class="font-semibold text-xl">Welcome to PXLS! A palette generator for pixel artists.</h1>
			<p class="leading-relaxed">
				Simply copy your desired image's URL, or upload the image directly from your machine. Then,
				its palette will appear below. Depending on the image's quality, duplicate colors may
				appear, though we try to remove them for your convenience.
				<br />
				<br />
				You can copy an individual color in any format you like (<b>hex, rgb, hsv, hsl</b>) using
				the swatches, or by clicking within the image itself using the color picker.
				<br />
				<br />
				We also support multiple output options, including <b> png, css, csv, </b> and more!
			</p>
		</div>
		<div class="p-8 pt-0 flex justify-end">
			<PrimaryButton on:click={exit}>Continue</PrimaryButton>
		</div>
	</div>
</ScreenFade>

<style lang="postcss">
	b {
		@apply font-semibold;
	}
</style>
