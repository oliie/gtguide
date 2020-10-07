<script>
    import 'smelte/src/tailwind.css';
    import { onMount } from 'svelte';
    import Button from 'smelte/src/components/Button';

    let ready = false;

    onMount(() => {
        ready = true;
    });
</script>

{#if ready}
    <main>
        <Button>Click here!</Button>
    </main>
{/if}
