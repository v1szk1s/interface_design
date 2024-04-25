<script>
    import { getPosterUrl } from "$lib/common";
    import { Rating, Button } from "flowbite-svelte";
    export let data;

</script>

<div class="container grid grid-cols-2 gap-5 p-2 lg:w-3/4 mx-auto ">
    <div>
        <h1 class="text-3xl py-5 dark:text-white">{ data.movie.original_title }</h1>
        <img class="w-1/2"  src="{getPosterUrl(data.movie.poster_path)}" alt="{data.movie.href}">
    </div>
    <div class="dark:text-white flex flex-col gap-4">
        {#each data.screenings as screen}
            <Button href="/book/{screen.id}" color="light">
                {screen.date}
            </Button>
        {/each}

    </div>
</div>
