<script>
	import ProviderList from './ProviderList.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Asheville Service Directory" />
</svelte:head>

<section>
	<h1>
		Asheville Service Directory
	</h1>

	<p class="wip-warning">
		WARNING: This project is a work in progress!
	</p>

	<ProviderList />

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.wip-warning {
		background-color: orange;
		padding: 10px;
		border-radius: 5px;
	}

	h1 {
		width: 100%;
	}

</style>
