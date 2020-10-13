<script lang="ts">
    import { Heroes } from '../../db';
    import HeroCard from './HeroCard.svelte';
</script>

{#each Heroes as hero}
    <HeroCard {hero} />
{/each}
