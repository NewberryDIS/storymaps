<script>
    import { page } from '$app/stores'
    import { onMount } from 'svelte'
    export let data
    // console.log("data", data)
    $: ( { storymapJson } = data )
 $: storymapOptions = {
        width: 100,
        height: 100,
        // default_bg_color: {r: 17, g: 26, b: 42, t: 50},
        default_bg_color: {r: 234, g: 235, b: 231},
        storymap: storymapJson,

    }
$: storymap = null
    onMount(() => {
        // console.log(KLStoryMap)
        storymap = new KLStoryMap.StoryMap('storymap-div', storymapOptions)
        window.onresize = function(event) {
            storymap.updateDisplay(); // this isn't automatic
        }
    })
</script>

<div id="storymap-div" class="storymap-div"></div>
