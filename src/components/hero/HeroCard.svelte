<script lang="ts">
    import { Card, Button, Image } from 'smelte';
    import type { IHero } from '../../interfaces';

    export let hero: IHero;
</script>

<style>
    .root {
        display: inline-block;
        margin-top: 24px;
    }
</style>

<div class="root">
    <Card.Card>
        <div slot="title">
            <Card.Title
                title={hero.name}
                subheader="{hero.role} | {hero.element}"
                avatar="/images/heroes/{hero.name}.png" />
        </div>

        <div slot="text" class="p-5 pb-0 pt-3 text-grey-700 body-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quidem necessitatibus odio minima corporis illum! Nulla quas maxime
            commodi, libero laborum, hic cum doloribus consequuntur, rem dolore
            dicta praesentium dolor.
        </div>

        <div slot="actions">
            <div class="p-2">
                <Button text>Add to party</Button>
                <Button text>Details &raquo;</Button>
            </div>
        </div>
    </Card.Card>
</div>
