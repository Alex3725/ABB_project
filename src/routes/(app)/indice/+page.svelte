<script lang="ts">
	
	import { PopUp as PopUpStore, reSetData, showPopUp, showCheck } from "$lib/store/storePopUp";
	import Riga from "$lib/componets/Riga.svelte";
	import BottoneDeafoultStyle from "$lib/componets/bottoneDeafoultStyle.svelte";
	import { XLg } from "svelte-bootstrap-icons";
	
	var statoClick = false

	let lista:any = $state([])

	function creaButton() {
		showPopUp()
	}
	$effect(()=>{
		if ($PopUpStore.saveData) {
			console.log("HERE")
			console.log($PopUpStore)
			lista.push({
				showCheck:$PopUpStore.showChe,
				status: false,
				data: $PopUpStore.data,
				entrata: $PopUpStore.entrata,
        		uscita: $PopUpStore.uscita, 
        		titolo: $PopUpStore.titolo, 
        		textAreaContent: $PopUpStore.textAreaContent,
			})
			reSetData()
			console.log($PopUpStore.data+ "aaaaaaaaaaaaa");
		}
	})

	function listaIdDelet() {
		let listaId:any = []
		let count = 0
		lista.forEach((element:any) => {
			if (element.status){
				listaId.push(count)
			}
			count ++
		});
		
		listaId.forEach((element:any) => {
			lista.splice(element,1)
		});
	}

	// lista.forEach((Riga:any) => {
		
	// 	console.log(Riga.status)
	// });
</script>

<div class="w-full h-full">

<nav class="w-full h-[10%] bg-red-950 flex justify-center">
	<button onclick={showCheck}><XLg/></button>
	<BottoneDeafoultStyle text={"ciao"} funzione={creaButton}/>
	<!-- <BottoneDeafoultStyle text={"elimina"} funzione={}/> -->
</nav>

	<div class=" w-[100%] h-[70%] flex items-center justify-center gap-[5%]    ">
		
		<div class="w-[70%]  h-full contenuto bg-blue-950 overflow-hidden rounded-[2vw] mt-[10%]">
			<div class="w-full h-full overflow-y-scroll">
				<div class="nav w-full h-[10%] bg-amber-300 flex justify-center ">
					<div class="ml-1  opacity-0  w-[2%]">ciao</div>
					<div class=" border-2 w-[13%] p-[0.5%] pl-[2%] text-center">Data</div>
					<div class=" border-2 w-[23%] p-[0.5%]  pl-[2%] text-center">Titolo</div>
					<div class=" border-2 w-[23%] p-[0.5%]  pl-[2%] text-center">Testo</div>
					<div class=" border-2 w-[13%] p-[0.5%]  pl-[2%] text-center">Entrata</div>
					<div class=" border-2 w-[13%] p-[0.5%]  pl-[2%] text-center">Uscita</div>
					<div class=" border-2 w-[13%] p-[0.5%] pl-[2%] text-center">Ore Totali</div>
				</div>
				{#each lista as blocco}
					<Riga titolo = {blocco.titolo} data = {blocco.data} entrata = {blocco.entrata} uscita = {blocco.uscita} contenuto = {blocco.textAreaContent} bind:stato={lista.status} />
				{/each}
			</div>
		</div>
	</div>
</div>
<!-- <button onclick={()=>{
	lista.splice(1,1)
}}>
	caso
</button> -->


