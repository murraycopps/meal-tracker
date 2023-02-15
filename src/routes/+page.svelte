<script lang="ts">
	import days from '$lib/scripts/days';
	import DayCard from './DayCard.svelte';
</script>

<section class="flex flex-col items-center justify-center gap-4">
	<h1 class="text-4xl">Days</h1>
	<ul class="flex flex-col items-center justify-center w-full gap-4">
		{#each days as day}
			<DayCard {day} />
		{/each}
	</ul>
</section>