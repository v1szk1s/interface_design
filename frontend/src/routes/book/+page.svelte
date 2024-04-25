<script>
//import { page } from '$app/stores'
//const email = $page.url.searchParams.get('email')
import { Tabs, TabItem, Card, Button } from 'flowbite-svelte';
import  { getPosterUrl, sameDay } from '$lib/common'
import { page } from '$app/stores';

export let data;

let date = new Date();
function getDay(date) {
    let day = date.getDay()
    date.setDate(date.getDate() + 1);
    return ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][day <= 0 ? day+6:day-1]
}

let movies = data.movies;
let screenings = data.screenings;

let activeClass = "text-teal-700";

</script>
{#if screenings.length > 0}
     <!-- content here -->

<Tabs class="flex justify-around">
    {#each Array(6) as _, i}
        <TabItem {activeClass} open={i == 0} class="" title="{i == 0 ? 'Today':getDay(date)}">
            <div class="lg:w-3/4 w-full mx-auto grid grid-cols-2 gap-3">
                {#each new Set(screenings[i].map(x => x.movieId)) as movieId }
                    <div class="grid grid-cols-2 gap-3">
                        <Card padding="none" href="{movies.get(movieId).id}" img="{movies.get(movieId).img}" class="mx-auto">
                            <img src="{getPosterUrl(movies.get(movieId).poster_path)}" alt="poster">
                            <Button href="/book/movie/{movies.get(movieId).id}" color="light">
                                    Check other times
                            </Button>
                        </Card>
                        <div class="flex flex-col gap-3">
                            {#each movies.get(movieId).screenings.filter(x => sameDay(x.date, screenings[i][0].date)) as screening }
                                <Button href="/book/{screening.id}">
                                 {screening.date.getHours() + ":" + ((screening.date.getMinutes() == 0) ? "00":screening.date.getMinutes())}
                                </Button>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </TabItem>
    {/each}
</Tabs>

{/if}
