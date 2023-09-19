<script>
    import { base } from '$app/paths'
    import { mapUrls } from '$lib'
    const paths = Object.keys( mapUrls ).map(country => {

        return       [ `en/${country}` , `es/${country}`, `gallery/en/${country}`, `gallery/es/${country}`]
    }).flat()
</script>
{#each paths as path}
    <p><a href="{base}/{path}">{path}</a></p>
{/each}
