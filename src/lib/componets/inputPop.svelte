<script lang="ts">
    let {placehol = "",textContenuto=$bindable(), tipo="T"} = $props()
    switch (tipo) {
        case "T":
            tipo = "text"
            break;
        case "D":
            tipo = "date"
            break;
        case "N":
            tipo = "number"
            break;
        default:
            break;
    }
    
</script>

<div>
    <input type="{tipo}" bind:value={textContenuto} name="data" class=" rounded-2xl" placeholder="{placehol}"> <!--con bind continuera ad aggiornarsi-->
    
</div>