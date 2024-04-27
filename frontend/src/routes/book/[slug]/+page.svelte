<script>
import { enhance } from '$app/forms';
import { getPosterUrl, ChairState } from '$lib/common.js'
import { Card, Label, Input, Button, Alert, Helper } from "flowbite-svelte";
import { EnvelopeSolid } from 'flowbite-svelte-icons';
import Chair from "./Chair.svelte";

export let form;
export let data;
let screen = data.screen;
let movie = data.movie; 
const SEAT_SIZE = 60;
let hideAlert = false;

$: chairs = Array(SEAT_SIZE).fill(ChairState.FREE);

function toggle(index) {
    let state = chairs[index];
    if(state === ChairState.RESERVED) return;
    chairs[index] = state == ChairState.IN_PROGRESS? ChairState.FREE:ChairState.IN_PROGRESS;
}

</script>

{#if  form?.success }
    <Alert class="text-center my-7" color="green">
        <span class="font-medium">Success alert!</span>
        Change a few things up and try submitting again.
    </Alert>
    <div class="flex justify-center">
        <Button href="/" class="mx-auto">
            Go back to home Page
        </Button>
    </div>
{:else}

<div class="lg:h-44 h-24 flex md:mx-10 mx-1 lg:mt-4 gap-1 mb-3 dark:text-white">
    <img class="h-full object-cover" src="{getPosterUrl(movie.poster_path)}" alt="poster">
    <div class="ps-5 my-auto">
        <h1 class="md:text-2xl text-md">Booking ticket for:</h1>
        <div class="md:text-3xl text-lg">{ data.movie.original_title }</div>
    </div>
    <h1 class="text-xl mx-auto my-auto justify-self-center">Time: <strong>{ data.screen.date.getHours() }:{ data.screen.date.getMinutes() == 0 ? "00":data.screen.date.getMinutes() }</strong></h1>
</div>

<div class="flex flex-wrap container lg:w-5/6 w-full md:px-10 px-2 mx-auto">
    <div>
        <div class="h-8 w-5/6 bg-black mx-auto text-center py-auto rounded-md"><p class="text-white uppercase py-1">screen</p></div>
       <div class="w-full mx-auto my-10 grid grid-cols-10 md:gap-6 gap-1">
            {#each chairs as state, i}
                <Chair title={i+1} {state} onClick={() => toggle(i)} />
                {#if i + 1 == SEAT_SIZE/2}
                    <div class="col-span-10 py-6"></div>
                {/if}
            {/each}
        </div>
    </div>
    <div class="mx-auto">
        <form method="POST" action="?/reserve" use:enhance>
            <div class="mb-3">
                <Label for="name-input" class="block mb-2">Name</Label>
                <Input id="name-input" name="fullName" placeholder="Name" color="{(form?.errors && form.errors.includes("fullName")) ? "red":""}" value="{form?.fullName ?? '' }" />
                 <Helper class='mt-2 {(form?.errors && form.errors.includes("fullName")) ? "visible":"invisible"}' color='red'>
                        <span class="font-medium">Name must be filled!</span>
                 </Helper>
            </div>
            <div class="mb-3">
                <Label for="email" class="block mb-2">Email</Label>
                <Input id="email" name="email" type="email" placeholder="name@gmail.com" color="{(form?.errors && form.errors.includes("email")) ? "red":""}" >
                <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </Input>
                 <Helper class='mt-2 {(form?.errors && form.errors.includes("email")) ? "visible":"invisible"}' color='red'>
                        <span class="font-medium">Email must be filled</span>
                 </Helper>
            </div>
            <div class="mb-6">
                <Label for="phone-input" class="block mb-2">Phone</Label>
                <Input id="phone-input" name="phone" type="text" placeholder="Phone number" color="{(form?.errors && form.errors.includes("phone")) ? "red":""}"/>
                 <Helper class='mt-2 {(form?.errors && form.errors.includes("phone")) ? "visible":"invisible"}' color='red'>
                        <span class="font-medium">Email must be filled</span>
                 </Helper>
            </div>
            <input type="hidden" name="seats" value="{
                    chairs.map((x, i) => (x == ChairState.IN_PROGRESS ? i.toString():null)).filter(x => x !== null)
                    }">

            <Input class="hover:bg-primary-600 bg-primary-500 cursor-pointer" type="submit" value="Submit" />
        </form>
         <p class='mt-2 {(form?.errors && form.errors.includes("seats")) ? "":"invisible"} text-red-700'>
                At least one seat must be selected!
         </p>
        <p class="dark:text-white text-lg mt-3">
            Chosen seats: 
            {#each chairs.map(( x, i ) => (x ? i+1:null)).filter(x => x !== null) as j, i}
                {i == 0 ? "":", "}{j}
            {/each}
        </p>
    </div>

</div>

{/if}
