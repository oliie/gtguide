<script>
    import 'smelte/src/tailwind.css';
    import { onMount } from 'svelte';
    import Button from 'smelte/src/components/Button';
    import Flex from 'svelte-flex';
    import { Heroes } from './db';

    let ready = false;

    console.log(Heroes);

    onMount(async () => {
        ready = true;
    });
</script>

{#if ready}
    <main>
        <Button>Click here!</Button>
    </main>
{/if}
