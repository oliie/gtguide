<script>
    import 'smelte/src/tailwind.css';
    import { onMount } from 'svelte';
    import Button from 'smelte/src/components/Button';

    export let date;

    onMount(async () => {
        const res = await fetch('/api/date');
        const newDate = await res.text();
        date = newDate;
    });
</script>

<main>
    <Button>Click here!</Button>
</main>
