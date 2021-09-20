<script lang="ts">
	const onMouseEnter = (e) => e.target.setAttribute('src', '/logo_down.svg');
	const onMouseLeave = (e) => e.target.setAttribute('src', '/logo.svg');
</script>

<nav class="py-2 bg-gray-900 flex justify-center gap-20">
	<a href="/">
		<img
			src="/logo.svg"
			alt="PXLS"
			class="w-20 h-auto"
			on:mouseenter={onMouseEnter}
			on:mouseleave={onMouseLeave}
		/>
	</a>
</nav>
