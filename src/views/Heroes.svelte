<script>
    import { onMount } from 'svelte';
    import Button from 'smelte/src/components/Button';
    import Flex from 'svelte-flex';
    import { Heroes } from '../db';

    let ready = false;

    console.log(Heroes);

    onMount(async () => {
        ready = true;
    });
</script>

{#if ready}
    <ul>
        {#each Heroes as { name }}
            <li><img src="images/heroes/{name}.png" alt={name}>{name}</li>
        {/each}
    </ul>
{/if}
