<script lang="ts">
	import PopUp from "./popUp.svelte";

    let { data, entrata, uscita, contenuto, titolo } = $props() 

    let oreTot = uscita - entrata;


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

</script>

<div class="riga w-[100%] h-[10%] {tipo} flex items-center justify-center gap-[5%] ">
    <div class="giorn">{data}</div>
    <div class="titolo">{titolo}</div>
    <div class="contenuto ">{contenuto}</div>
    <div class="entrata">{entrata}</div>
    <div class="uscita">{uscita}</div>
    <div class="oreTot">{oreTot}</div>

    
</div>

