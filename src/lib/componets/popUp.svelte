<script lang="ts">
	import InputPop from "./inputPop.svelte";
    let inpData:string = $state("") //cambiera con state

let {tipo = "CREA",placeData = "data", placeTitolo ="titolo", placeContenuto = "contenuto", placeEntrata = "entrata" , placeUscita = "uscita"} = $props()
    try {
        
    } catch (error) {
        
    }
    
    


</script>

<div class="popUpCrea w-[50%] h-[30%] bg-red-900 ring-2 ring-white  ">
    <h1>{tipo}</h1>
    <InputPop placehol = {placeData} bind:inpData/>
    <InputPop placehol = {placeTitolo}/>
    <InputPop placehol = {placeContenuto}/>
    <InputPop placehol = {placeEntrata}/>
    <InputPop placehol = {placeUscita}/>
    
</div>
<div>
    
</div>
