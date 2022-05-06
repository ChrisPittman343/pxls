<script>
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Notifications from '$lib/components/popup/notifications/Notifications.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>pxls - Palette Generator</title>
	<meta name="description" content="A palette generator for pixel art." />
</svelte:head>
<div class="m-auto flex flex-col items-center">
	<Navbar />
	<main class="p-4 w-full max-w-7xl flex flex-col items-center bg-cover bg-no-repeat bg-center">
		<slot />
	</main>
</div>
<Footer />
<Notifications />
