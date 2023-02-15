<script lang="ts">
	import type { Day } from '$lib/scripts/types';
	import MealCard from './MealCard.svelte';

	export let day: Day;
</script>

<li class="grid grid-cols-2 gap-4 p-4 text-center text-white bg-gray-600 rounded-3xl">
	<div class="flex flex-col items-center justify-center gap-4">
		<h2 class="text-2xl">{
            new Date(day.date).toDateString()
            }</h2>
		<div class="grid grid-cols-3 gap-4 text-lg">
			<div>
				<p class="text-xs">Distance</p>
				<p>{day.distance} MI</p>
			</div>
			<div>
				<p class="text-xs">Intensity</p>
				<p>{day.intensity}/10</p>
			</div>
			<div>
				<p class="text-xs">Felt</p>
				<p>{day.feel}/10</p>
			</div>
		</div>
		<p>Notes: {day.notes}</p>
	</div>
	<ul class="flex flex-col gap-4 justify-evenly">
		{#if day.meals}
			<!-- <h3>Meals</h3> -->
			{#each day.meals as meal}
				<MealCard {meal} />
			{/each}
		{/if}
	</ul>
</li>

<style>
	li {
		width: clamp(500px, 50%, 800px);
	}
</style>
