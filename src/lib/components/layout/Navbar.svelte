<script lang="ts">
	import logo from '/logo.svg';
	import logo_down from '/logo_down.svg';

	let src = logo;
	const onMouseEnter = (e) => (src = logo_down);
	const onMouseLeave = (e) => (src = logo);
</script>

<nav class="p-2 mb-5 bg-black flex justify-center w-full">
	<a href="/">
		<img
			{src}
			alt="PXLS"
			class="w-20 h-auto"
			on:mouseenter={onMouseEnter}
			on:mouseleave={onMouseLeave}
		/>
	</a>
</nav>
