<script>
import {getPosterUrl} from '$lib/common.js'
import { Rating, AdvancedRating, ScoreRating, Button } from 'flowbite-svelte';

export let data;
</script>

<div class="container grid grid-cols-2 gap-5 p-2 lg:w-3/4 mx-auto ">
    <div>
        <h1 class="text-3xl py-5 dark:text-white">{ data.movie.original_title }</h1>
        <img class="w-1/2"  src="{getPosterUrl(data.movie.poster_path)}" alt="{data.movie.href}">
        <Rating id="data.movie.id" total={5} size={50} rating={data.movie.vote_average/2} />
        <p>({data.movie.vote_count} vote)</p>
    </div>
    <div class="dark:text-white flex flex-col gap-4">
        <h1 class="my-5 text-3xl">Overview</h1>
        <p class="">{data.movie.overview}</p>
        <p>
            <span class="text-2xl">Genres: </span>
            {#each data.movie.genres.map(x => x.name) as genre}
                {#if genre !== data.movie.genres[0].name}
                    , {genre}
                {:else}
                    {genre}
                {/if}
            {/each}
        </p>
            <div class="my-auto ms-auto">
                <Button href="/book/{data.movie.id}" color="dark">
                    Book Ticket
                </Button>
            </div>
    </div>
</div>


