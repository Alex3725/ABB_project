<script lang="ts">
	import { Type } from "svelte-bootstrap-icons";
	import PopUp from "./popUp.svelte";
	import { showCheck } from "$lib/store/storePopUp";
    import { hiddenPopUp, PopUp as PopUpStore, reSetData, saveData } from "$lib/store/storePopUp";

    let { data, entrata, uscita, contenuto, titolo, stato = $bindable() } = $props() 

    console.log(typeof(uscita));
    console.log(typeof(entrata));
    
    

    let oreTot = parseInt(uscita) - parseInt(entrata);


    let tipo = "";

    const VERDE = "bg-green-600"
    const GIALLO = "bg-amber-400"
    const ROSSO = "bg-red-600"


   if (oreTot >= 8) {
    tipo = VERDE
     
   } 
   else if (oreTot >= 6) {
    tipo = GIALLO

    
   }else {
    tipo = ROSSO
   }
   
   $effect(()=>{

   })

</script>

<div class="riga w-[100%] h-[10%] {tipo} flex items-center justify-center border-2">
    <div class="ml-1 w-[2%]">
        <input type="checkbox" name="" class="giorn {$PopUpStore.showChe ? "block": "hidden"}" bind:checked={stato}>
    </div>
    

    <div class="giorn w-[13%]  text-center p-[0.5%] pl-[2%]">{data}</div>
    <div class="titolo w-[23%]  text-center p-[0.5%] pl-[2%]">{titolo}</div>
    <div class="contenuto w-[23%] p-[0.5%] pl-[2%] ">{contenuto}</div>
    <div class="entrata w-[13%]  text-center p-[0.5%] pl-[2%]">{entrata}</div>
    <div class="uscita w-[13%]  text-center p-[0.5%] pl-[2%]">{uscita}</div>
    <div class="oreTot w-[13%]  text-center p-[0.5%] pl-[2%]">{oreTot}</div>
    
    
</div>

