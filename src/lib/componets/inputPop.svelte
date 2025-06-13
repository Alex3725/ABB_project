<script lang="ts">
    let {placehol = "",inpData=$bindable(), tipo="D"} = $props()
    switch (tipo) {
        case "T":
            tipo = "text"
            break;
        case "D":
            tipo = "date"
            break;
        default:
            break;
    }
    
</script>

<div>
    <input type="{tipo}" bind:value={inpData} name="data" class=" rou" placeholder="{placehol}"> <!--con bind continuera ad aggiornarsi-->
    
    
</div>