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
            component: Home
        },
        {
            label: 'About',
            path: 'about',
            to: '/about',
            component: About
        },
        {
            label: 'Heroes',
            path: 'heroes',
            to: '/heroes',
            component: Heroes
        }
    ]
</script>

<h1>App.svelte</h1>

<Router {url}>
    <nav>
        {#each routers as {label, to}}
            <Link {to}>{label}</Link>
        {/each}
    </nav>
    <div>
        {#each routers as {path, component}}
            <Route {path} {component} />
        {/each}
        <Route path="/"><Home /></Route>
    </div>
</Router>