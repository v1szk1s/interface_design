<script>
import { enhance } from '$app/forms';
import { getPosterUrl, ChairState } from '$lib/common.js'
import { Card, Label, Input, Button } from "flowbite-svelte";
import { EnvelopeSolid } from 'flowbite-svelte-icons';
import Chair from "./Chair.svelte";

export let data;
let screen = data.screen;
let movie = data.movie; 
const SEAT_SIZE = 60;

$: chairs = Array(SEAT_SIZE).fill(ChairState.FREE);

function toggle(index) {
    let state = chairs[index];
    if(state === ChairState.RESERVED) return;
    chairs[index] = state == ChairState.IN_PROGRESS? ChairState.FREE:ChairState.IN_PROGRESS;
}

</script>

<div class="lg:h-44 h-24 flex md:mx-10 mx-1 lg:mt-4 gap-1 mb-3 dark:text-white">
    <img class="h-full object-cover" src="{getPosterUrl(movie.poster_path)}" alt="poster">
    <div class="ps-5 my-auto">
        <h1 class="md:text-2xl text-md">Booking ticket for:</h1>
        <div class="md:text-3xl text-lg">{ data.movie.original_title }</div>
    </div>
    <h1 class="text-xl mx-auto my-auto justify-self-center">Time: <strong>{ data.screen.date.getHours() }:{ data.screen.date.getMinutes() }</strong></h1>
</div>

<div class="flex flex-wrap container lg:w-5/6 w-full md:px-10 px-2 mx-auto overflow-scroll">
    <div>
        <div class="h-8 w-5/6 bg-black mx-auto text-center py-auto"><p class="text-white uppercase py-1">screen</p></div>
        <div class="lg:w-3/4 w-full mx-auto my-10 grid grid-cols-10 md:gap-6 gap-1">
            {#each chairs as state, i}
                <Chair title={i+1} {state} onClick={() => toggle(i)} />
                {#if i + 1 == SEAT_SIZE/2}
                    <div class="col-span-10 py-6"></div>
                {/if}
            {/each}
        </div>
        <p class="dark:text-white text-lg">
            Chosen seats:
            {#each chairs.map(( x, i ) => (x? i+1:-1)).filter(x => x !== -1) as j, i}
                {#if i != 0}
                    ,
                {/if}
                {j}
            {/each}
        </p>
    </div>
    <div>
        <form method="POST" action="?/reserve" use:enhance>
            <div class="mb-3">
                <Label for="name-input" class="block mb-2">Name</Label>
                <Input id="name-input" name="fullName" placeholder="Name" />
            </div>
            <div class="mb-3">
                <Label for="email" class="block mb-2">Email</Label>
                <Input id="email" name="email" type="email" placeholder="name@gmail.com">
                <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Input>
            </div>
            <div class="mb-3">
                <Label for="name-input" class="block mb-2">Phone</Label>
                <Input id="name-input" name="phone" type="phone" placeholder="Phone number" />
            </div>
            <Input class="hover:bg-primary-500" type="submit" value="Submit" />
        </form>
    </div>

</div>
