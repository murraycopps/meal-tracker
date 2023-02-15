<script lang="ts">
	import type { Meal } from "$lib/scripts/types";


    export let meal: Meal
</script>

<li>
    <h3>{meal.name}</h3>
    <p>{meal.calories} calories</p>
    <p>{meal.notes}</p>
</li>