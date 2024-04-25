<script>
//import { Button } from "flowbite-svelte";
import { ChairState } from '$lib/common';
export let state;
export let onClick;
export let title = "";
$: color = (state == ChairState.FREE ? "bg-primary-700": (state == ChairState.RESERVED ? "bg-primary-700":"bg-amber-300"));

</script>

<button class="relative md:w-14 md:h-14 min-w-7 min-h-8 rounded {color}" on:click={onClick}>
<p class="absolute top-1 left-2 text-sm text-white">{title}</p>
<img class="max-w-12 md:w-12 md:visible invisible m-1 p-1" src="/svg/chair.svg" alt="chair">
</button>
