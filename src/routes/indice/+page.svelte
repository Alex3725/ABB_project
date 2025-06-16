<script lang="ts">
	
	import Blocco from "$lib/componets/Riga.svelte";
	import { page } from "$app/state";
	import { PopUp as PopUpStore, reSetData, showPopUp } from "$lib/store/store";
	import Riga from "$lib/componets/Riga.svelte";
	
	var statoClick = false

	let lista:any = $state([])

	function creaButton() {
		showPopUp()
	}
	$effect(()=>{
		if ($PopUpStore.saveData) {
			lista.push({
				status: false,
				data: $PopUpStore.data,
				entrata: $PopUpStore.entrata,
        		uscita: $PopUpStore.uscita, 
        		titolo: $PopUpStore.titolo, 
        		tesxAreaContent: $PopUpStore.tesxAreaContent,
			})
			reSetData()
		}
	})
	// lista.forEach((Riga:any) => {
		
	// 	console.log(Riga.status)
	// });
</script>

<div class="w-full h-full flex items-center justify-center gap-[5%] overflow-y-scroll   ">
	
	<div class="contenuto w-[70%] h-[70%] bg-blue-950 overflow-y-scroll rounded-[2vw]">
		{#each lista as blocco}
			<Riga titolo = {blocco.titolo} data = {blocco.data} entrata = {blocco.entrata} uscita = {blocco.uscita} contenuto = {blocco.contenuto} stato={blocco.stato}/>
		{/each}
		
	</div>

	<button type="button" class="" onclick={creaButton}>Crea</button>
	
	
</div>

