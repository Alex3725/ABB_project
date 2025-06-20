<script lang="ts">
    let { text, funzione} = $props()
</script>

<button onclick={funzione} class=" w-[10%] h-1/2 bg-amber-300 rounded-[2vw] hover:bg-violet-600 flex justify-center items-center">
    {#if text != ""}
        {text}
    {:else}
        <slot></slot>
    {/if}
</button>