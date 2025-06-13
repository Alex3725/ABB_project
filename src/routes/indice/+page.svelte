<script lang="ts">
	import { page } from "$app/state";
	import Blocco from "$lib/componets/blocco.svelte";
	import PopUp from "$lib/componets/popUp.svelte";
	

	


</script>

<div class="w-full h-full flex items-center justify-center gap-[5%] overflow-y-scroll   ">
	<button type="button" ></button>
	<div class="contenuto w-[70%] h-[70%] bg-blue-950 overflow-y-scroll rounded-[2vw]">
		<Blocco contenuto = {"ciao"} data = {"01/06/2025"} entrata = {19} uscita = {20} titolo = {"halo"}/>
	</div>

	<PopUp/>
	
</div>

