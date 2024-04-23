<script>
//import { page } from '$app/stores'
//const email = $page.url.searchParams.get('email')
import  { getDay } from '$lib/common.js'
export let data;
let movies = data.movies;
let screenings = data.screenings;


import { Tabs, TabItem } from 'flowbite-svelte';

</script>

<Tabs class="flex justify-around">
    {#each Array(6) as _, i}
        <TabItem open={i == 0} class="" title="{i == 0 ? 'Today':getDay(screenings[i][0].times[0])}">
            {#each screenings[i] as screening }
                <p>
                    {movies.get(screening.movieId).original_title}
                </p>
            {/each}
        </TabItem>
    {/each}
</Tabs>
