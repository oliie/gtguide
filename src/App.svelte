<script>
    import 'smelte/src/tailwind.css';
    import { Router, Route, Link } from 'svelte-routing';

    import About from './views/About.svelte';
    import Heroes from './views/Heroes.svelte';
    import Home from './views/Home.svelte';

    export let url = '';

    const routers = [
        {
            label: 'Home',
            path: 'home',
            to: '/',
            component: Home,
        },
        {
            label: 'About',
            path: 'about',
            to: '/about',
            component: About,
        },
        {
            label: 'Heroes',
            path: 'heroes',
            to: '/heroes',
            component: Heroes,
        },
    ];
</script>

<style>
    .root {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .content {
        max-width: 960px;
    }
</style>

<div class="root">
    <div class="content">
        <h1>Guardian Tales Heroes</h1>

        <Router {url}>
            <nav>
                {#each routers as { label, to }}
                    <Link {to}>{label}</Link>
                {/each}
            </nav>
            {#each routers as { path, component }}
                <Route {path} {component} />
            {/each}
            <Route path="/">
                <Home />
            </Route>
        </Router>
    </div>
</div>
