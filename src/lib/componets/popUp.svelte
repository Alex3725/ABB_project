<script lang="ts">
	import InputPop from "./inputPop.svelte";
    import { hiddenPopUp, PopUp as PopUpStore, reSetData, saveData } from "$lib/store/storePopUp";
	import { Check } from "svelte-bootstrap-icons";
let {tipo = "CREA",placeData = "data", placeTitolo ="titolo", placeContenuto = "contenuto", placeEntrata = "entrata" , placeUscita = "uscita"  } = $props()

    let inpData:string = $state("") //cambiera con state
    let inpTitolo:string = $state("") //cambiera con state
    let inpEntrata:number = $state(0) //cambiera con state
    let inpUscita:number = $state(0) //cambiera con state
    let textAreaContenuto:string = $state("")
    function savedAndClosed() {
        saveData(inpData,inpTitolo,inpEntrata, inpUscita, textAreaContenuto)
        hiddenPopUp()
        console.log(inpData);
    }

    $effect(()=>{
        if(!$PopUpStore.show) {
            inpData = "";
            inpTitolo = "";
            inpEntrata = 0;
            inpUscita = 0;
            textAreaContenuto = "";
        }
    })
    
</script>



<div class="popUpCrea w-[30%] h-[30%] bg-red-900 ring-2 ring-white  absolute top-[40%] left-[50%] -translate-x-[50%] flex flex-col items-center px-[2%] {$PopUpStore.show ? 'opacity-100  pointer-events-auto' : 'opacity-0  pointer-events-none'}">

    <h1 class=" pt-[0.5%]">{tipo}</h1>
    <div class="testo flex space-x-[15%] ">
        <div class="titolo-data flex flex-col gap-y-2">
        <InputPop placehol = {placeData} bind:textContenuto={inpData} tipo="D"/>
        <InputPop placehol = {placeTitolo} bind:textContenuto={inpTitolo}/>
        <InputPop placehol = {placeEntrata} bind:textContenuto={inpEntrata} tipo="N"/>
        <InputPop placehol = {placeUscita} bind:textContenuto={inpUscita}  tipo="N"/>
    </div>
    
    <textarea name="" class="rounded-2xl" placeholder="{placeContenuto} " bind:value={textAreaContenuto}></textarea>
    </div>
    <button type="button" onclick={savedAndClosed}><Check/></button>
    <button type="button">a</button>
</div>
