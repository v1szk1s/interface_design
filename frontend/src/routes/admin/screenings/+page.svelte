<script>
import { Label, Select, Input, Helper, Button } from 'flowbite-svelte';
import {getPosterUrl} from '$lib/common.js'
import { enhance } from "$app/forms";

export let data;
export let form;

$: movies = new Map(data.movies.map(x => { return [x.id, x] }));

let selectedId;
let hour;
let minute;

</script>

<div class="flex flex-col gap-3 w-3/4 mx-auto dark:text-white my-7">
    {#each data.screenings as screen}
        {#if movies.get(screen.movieId)?.poster_path}

        <div class="flex gap-3">
            <img class="h-36 rounded" src="{getPosterUrl(movies.get(screen.movieId).poster_path)}" alt="poster">
            <div class="flex flex-col">
                <p>{movies.get(screen.movieId).original_title}</p>
                <p>{screen.date}</p>
                    
                <form action="?/delete" class="mt-auto ms-auto" method="post" use:enhance>
                        <input type="hidden" name="id" value="{ screen.id }">
                        <Input class="hover:bg-red-800 bg-red-600 cursor-pointer" type="submit" value="Delete" />
                </form>

            </div>
        </div>

        {/if}
    {/each}
</div>

<form action="?/add" method="post" use:enhance>

    <div class="flex gap-3 flex-col md: w-3/4 mx-auto">
        <Label>
            Movie
            <Select class="mt-2" items={data.movies.map(x => ({value: x.id, name: x.original_title}))} bind:value={selectedId} />
            <input type="hidden" name="movieId" value={selectedId}>
            {#if form?.errors && form.errors.includes("movieId")}
                <Helper class='mt-2' color='red'>
                    <span class="font-medium">Choose a movie</span>
                </Helper>
            {/if}
        </Label>

        <Label>
            Date
            <Input  name="date" type="date" value="{new Date().toLocaleDateString('en-CA')}" />
            {#if form?.errors && form.errors.includes("date")}
                <Helper class='mt-2' color='red'>
                    <span class="font-medium">Date must be choosen</span>
                </Helper>
            {/if}
        </Label>

        <Label class="mx-auto">
            Time
            <div class="flex">
                <Select placeholder="-" class="mt-2 w-20" items={Array.from({length: 24}, (_, i) => i).map((x, i) => ({value: i.toString().padStart(2, '0'), name: i.toString().padStart(2, '0')})) } bind:value={hour} />
                <input type="hidden" name="hour" value={hour}>
                <p class="my-auto mx-2">:</p>
                <Select placeholder="-" class="mt-2 w-20" items={Array.from({length: 12}, (_, i) => i).map((x, i) => ({value: (i * 5).toString().padStart(2, '0'), name: (i * 5).toString().padStart(2, '0')})) } bind:value={minute} />
                <input type="hidden" name="minute" value={minute}>
            </div>
        </Label>
            {#if form?.errors && (form.errors.includes("hour") || form.errors.includes("minute")) }
                <Helper class='mt-2' color='red'>
                    <span class="font-medium">Choose a movie</span>
                </Helper>
            {/if}

        <Input class="hover:bg-primary-600 bg-primary-500 cursor-pointer" type="submit" value="Add" />
    </div>

</form>
