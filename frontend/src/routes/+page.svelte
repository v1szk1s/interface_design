<script>

import { Card, Button } from 'flowbite-svelte';
import { getPosterUrl } from '$lib/common';

export let data;

</script>

<div class="container md:w-3/4 w-100 px-2 mx-auto">
    <h1 class="text-3xl text-center my-2 dark:text-white">Now Available</h1>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {#each data.movies as movie}
            <Card padding="none" href="{movie.id}" img="{movie.img}" class="mx-auto">
                <img src="{getPosterUrl(movie.poster_path)}" alt="">
                    <Button href="/book/movie/{movie.id}" color="light">
                        Get Ticket
                    </Button>
            </Card>
        {/each}
    </div>
</div>
