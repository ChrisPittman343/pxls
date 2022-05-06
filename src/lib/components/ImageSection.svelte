<script lang="ts">
	import {
		canvasElement,
		imgHoverLocation,
		imgSrc,
		screenHoverLocation
	} from '$lib/stores/imageStore';
	import { Icon } from 'svelte-awesome';
	import upload from 'svelte-awesome/icons/arrow-up';
	import clipboard from 'svelte-awesome/icons/clipboard';
	import PrimaryButton from './buttons/PrimaryButton.svelte';
	import SecondaryButton from './buttons/SecondaryButton.svelte';
	import ColorPicker from './ColorPicker.svelte';

	let fileInput: HTMLInputElement;
	let displayedImg: HTMLImageElement;

	const uploadButtonClick = () => fileInput.click();

	const fromClipboardClick = async () => imgSrc.set(await navigator.clipboard.readText());

	const onClearClick = () => imgSrc.set(null);

	const onFileUpload = (e: any) => {
		const tgt = e.target || window.event,
			files = tgt.files;

		if (FileReader && files && files.length) {
			const fr = new FileReader();
			fr.onload = () => imgSrc.set(fr.result as string);
			fr.readAsDataURL(files[0]);
		}
	};
</script>

<section id="image-input" class="flex flex-col items-center gap-y-4 mx-4 p-2 w-4/5 max-h-[90%]">
	{#if !$imgSrc}
		<div
			class="flex flex-col justify-center items-center border-dashed 
                gap-y-4 rounded border-4 bg-slate-300 w-full h-96 bg-transparent"
		>
			<PrimaryButton on:click={fromClipboardClick}>
				Upload URL from Clipboard
				<Icon data={clipboard} />
			</PrimaryButton>

			<span class="opacity-50 text-xl">or</span>

			<PrimaryButton on:click={uploadButtonClick}>
				Upload file
				<Icon data={upload} />
				<input
					type="file"
					name=""
					id=""
					bind:this={fileInput}
					class="sr-only"
					on:change={onFileUpload}
				/>
			</PrimaryButton>
		</div>
	{:else}
		<div class="w-full">
			<img
				bind:this={displayedImg}
				src={$imgSrc}
				alt="Chosen art"
				class="h-auto w-full aspect-auto m-auto cursor-crosshair"
				style="image-rendering: pixelated; image-rendering: crisp-edges;"
				on:mouseleave={() => {
					screenHoverLocation.set(null);
					imgHoverLocation.set(null);
				}}
				on:mousemove={(e) => {
					screenHoverLocation.set([e.screenX, e.screenY]);
					imgHoverLocation.set([
						Math.round(e.offsetX * ($canvasElement.width / displayedImg.width)),
						Math.round(e.offsetY * ($canvasElement.height / displayedImg.height))
					]);
				}}
			/>
		</div>

		<div class="flex gap-x-8">
			<SecondaryButton on:click={onClearClick}>Select New Image</SecondaryButton>
		</div>

		<ColorPicker />
	{/if}
</section>
