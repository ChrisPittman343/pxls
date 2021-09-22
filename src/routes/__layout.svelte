<script>
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Notifications from '$lib/components/notifications/Notifications.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>pxls</title>
</svelte:head>
<div class="m-auto min-h-screen flex flex-col items-center">
	<Navbar />
	<div class="p-4">
		<slot />
	</div>
</div>
<Footer />
<Notifications />
