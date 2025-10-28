<script lang="ts">
	import { Trash3Fill, Type } from "svelte-bootstrap-icons";
    import { hiddenPopUp, PopUp as PopUpStore, reSetData, saveData } from "$lib/store/storePopUp";

let { data= $bindable(), entrata= $bindable(), uscita= $bindable(), contenuto= $bindable(), titolo= $bindable(), stato = $bindable(), elimina,oreTot=$bindable(0) } = $props() 

    console.log(typeof(uscita));
    console.log(typeof(entrata));
    
    

    oreTot = parseInt(uscita) - parseInt(entrata);


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
   let statoModifica = $state(true)
   
   

</script>

<tr class="riga w-full h-[25%] {tipo} flex items-center justify-center border-2 ">
    <td class="ml-1 w-[2%]">
        <input type="checkbox" name="" class="giorn {$PopUpStore.showChe ? "block": "hidden"} rounded-[2vw]" bind:checked={stato}>
    </td>
    <td class="w-[15.35%] p-[0.5%] flex items-center justify-center "><input type="date" name="" class="entrata  w-full h-full rounded-[2vw]" disabled={statoModifica} bind:value={data}></td>
    <td class="w-[20%] p-[0.5%] flex items-center justify-center "><input type="text" name="" class="entrata  w-full h-full   rounded-[2vw]"disabled={statoModifica} bind:value={titolo}></td>
    <td class="w-[25%] p-[0.5%] h-full  flex items-center justify-center"><textarea name="" class="entrata w-full h-full rounded-[2vw] " disabled={statoModifica} bind:value={contenuto}></textarea></td>
    <td class="w-[10.35%] p-[0.5%] flex items-center justify-center"><input type="number" name="" class="entrata w-full h-full rounded-[2vw]" disabled={statoModifica} bind:value={entrata}></td>
    <td class=" w-[10.35%] p-[0.5%] flex items-center justify-center"><input type="number" name="" class="entrata w-full h-full rounded-[2vw]" disabled={statoModifica} bind:value={uscita}></td>
    <td class=" w-[10.35%] p-[0.5%] flex items-center justify-center"><div class="entrata w-full h-full rounded-[2vw]">{statoModifica}</div></td>
    <td class="w-[2.87.3%] p-[0.5%]  flex items-center justify-center ">
        <button onclick={()=>{statoModifica = false;}}><Trash3Fill/></button>
    </td>
    <td class="w-[2.87%] p-[0.5%]  flex items-center justify-center  {!statoModifica ? 'opacity-100 pointer-events-auto' : 'opacity-0  pointer-events-none'}">
        <!-- <button onclick={}><Trash3Fill/></button>  fare salvataggio sul local storage -->
         
    </td>
    <td class="w-[2.87%] p-[0.5%]  flex items-center justify-center  ">
        <button onclick={elimina}><Trash3Fill/></button>
    </td>
</tr>




