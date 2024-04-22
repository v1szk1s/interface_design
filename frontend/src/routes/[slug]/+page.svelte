<script>
import { Button } from 'flowbite-svelte';

export let data;

</script>

<div class="container grid grid-cols-2 gap-5 p-2 lg:w-3/4 mx-auto w-full">
    <div>
        <h1 class="text-3xl py-5">{ data.movie.original_title }</h1>
        <img class="h-1/2"  src="{data.movie.img}" alt="{data.movie.href}">
    </div>
    <div class="text-center">
    </div>
</div>
