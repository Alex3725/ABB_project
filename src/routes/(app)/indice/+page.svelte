<script lang="ts">
	
	import { PopUp as PopUpStore, reSetData, showPopUp, showCheck } from "$lib/store/storePopUp";
	import Riga from "$lib/componets/Riga.svelte";
	import BottoneDeafoultStyle from "$lib/componets/bottoneDeafoultStyle.svelte";
	import { Award, XLg } from "svelte-bootstrap-icons";

	let lista:any = $state([])

	function creaButton() {
		showPopUp()
		
	}


	
	let InpModifica = false

	$effect(()=>{
		if ($PopUpStore.saveData) {
			console.log("HERE")
			lista.push({
				showCheck:$PopUpStore.showChe,
				status: false,
				data: $PopUpStore.data,
				entrata: $PopUpStore.entrata,
        		uscita: $PopUpStore.uscita, 
        		titolo: $PopUpStore.titolo,
				oreTotali:0,
        		textAreaContent: $PopUpStore.textAreaContent,
			})
			reSetData()
			console.log(lista);
		}
			
	});

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

let listaSave = $state()
$effect(()=>{
	lista
})
	// lista.forEach((Riga:any) => {
		
	// 	console.log(Riga.status)
	// });
</script>

<div class="w-full h-full">

<nav class="w-full h-[10%] bg-red-950 flex justify-center items-center space-x-1">
	
	<BottoneDeafoultStyle text={"seleziona"} funzione={showCheck}/>
	<BottoneDeafoultStyle text={""} funzione={listaIdDelet}><XLg/></BottoneDeafoultStyle>
	<BottoneDeafoultStyle text={"ciao"} funzione={creaButton}/>
	
	<!-- <BottoneDeafoultStyle text={"elimina"} funzione={}/> -->
</nav>

	<div class=" w-full h-[70%] flex items-center justify-center gap-[5%]    ">
		<table class="w-[80%]  h-full contenuto bg-blue-950 overflow-hidden rounded-[2vw] mt-[10%]">
			<thead class="w-full h-[15%] ">
			<tr class="w-full h-full bg-amber-300 flex justify-center">
				<th class="ml-1  opacity-0  w-[2%] flex items-center">ciao</th>
				<th class=" border-2 w-[15.35%] p-[0.5%] justify-center flex items-center">Data</th>
				<th class=" border-2 w-[20%] p-[0.5%] justify-center flex items-center">Titolo</th>
				<th class=" border-2 w-[25%] p-[0.5%] justify-center flex  items-center">Testo</th>
				<th class=" border-2 w-[10.35%] p-[0.5%] justify-center flex items-center">Entrata</th>
				<th class=" border-2 w-[10.35%] p-[0.5%] justify-center flex items-center">Uscita</th>
				<th class=" border-2 w-[10.35%] p-[0.5%] justify-center flex items-center ">Ore Totali</th>
				<th class="opacity-0  w-[4.3%] p-[0.5%]"></th>
				<th class="opacity-0  w-[4.3%] p-[0.5%]"></th>
			</tr>
		</thead>
		<tbody class="w-full h-full overflow-y-scroll">
			{#each lista as blocco, index}
				<Riga bind:titolo = {blocco.titolo} bind:data = {blocco.data} bind:entrata = {blocco.entrata} bind:uscita = {blocco.uscita} bind:contenuto = {blocco.textAreaContent} bind:stato={blocco.status} bind:oreTot={blocco.oreTotali} elimina={()=>{lista.splice(index, 1) } }/>
			{/each}
		</tbody>
		</table>
	</div>
</div>
<!-- <button onclick={()=>{
	lista.splice(1,1)
}}>
	caso
</button> -->


