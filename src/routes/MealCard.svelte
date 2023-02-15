<script lang="ts">
	import type { Meal } from "$lib/scripts/types";


    export let meal: Meal
</script>

<li class="grid grid-cols-2 gap-4">
    <h3>{meal.name}</h3>
    <p>{meal.notes}</p>
</li>