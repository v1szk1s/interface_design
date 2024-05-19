<script>
import { enhance } from "$app/forms";
import { Label, Input, Helper } from "flowbite-svelte";
import { EnvelopeSolid } from "flowbite-svelte-icons";

export let form;

</script>

<div class="container lg:w-1/2 mx-auto">
    <form method="POST" action="?/login" use:enhance>
        <div class="mb-3">
            <Label for="email" class="block mb-2">Email</Label>
            <Input id="email" name="email" type="email" placeholder="name@gmail.com" color="{(form?.errors && form.errors.includes("email")) ? "red":""}" >
            <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </Input>
            <Helper class='mt-2 {(form?.errors && form.errors.includes("email")) ? "visible":"invisible"}' color='red'>
                <span class="font-medium">Email must be filled</span>
            </Helper>
        </div>

        <div class="mb-3">
            <Label for="password-input" class="block mb-2">Password</Label>
            <Input id="password-input" name="password" type="password"  placeholder="..." color="{(form?.errors && form.errors.includes("password")) ? "red":""}"/>
            <Helper class='mt-2 {(form?.errors && form.errors.includes("password")) ? "visible":"invisible"}' color='red'>
                <span class="font-medium">Password must be filled!</span>
            </Helper>
        </div>

        <Input class="hover:bg-primary-600 bg-primary-500 cursor-pointer" type="submit" value="Login" />
    </form>
{#if form?.error}
    <p class="m-4 py-2 bg-red-600 mx-auto text-center w-3/4 rounded"> { form.error } </p>
{/if}
</div>
