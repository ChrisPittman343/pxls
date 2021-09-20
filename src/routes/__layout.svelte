<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>pxls</title>
</svelte:head>
<div class="min-h-screen">
	<Navbar />
	<slot />
</div>
<Footer />
