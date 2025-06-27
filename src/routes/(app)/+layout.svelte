
<script lang="ts">
	import BottoneLayout from '$lib/componets/bottoneLayout.svelte';
	import PopUp from "$lib/componets/popUp.svelte";
	import { onMount } from 'svelte';
	import '../../app.css';

	let { children } = $props();

	onMount(async()=>{
		let result = await fetch("/api/lista")
		let data = await result.json()
		console.log(data)
	})
	
</script>

<div class="w-screen h-screen">
	<nav class="flex justify-between bg-blue-200 w-full h-[10%] px-[2%] text-fuchsia-600 items-center">
		
		<a href="/"><img src="/icons8-home-logo-100.png" alt="home icon" class="w-10 h-10 object-cover"/></a>

		<div class="testo w-[40%] h-[30%] flex items-center justify-center gap-[5%]">
			<BottoneLayout testo = {"ciao"} percorsoPag = {"/indice"}/>
			<BottoneLayout testo = {"ciao"} percorsoPag = {"/indice"}/>
			<BottoneLayout testo = {"ciao"} percorsoPag = {"/indice"}/>
		</div>
		
	</nav>
	<div class="bg-red-300 w-full h-[90%]"><!--  guardare classi su tailwind.css -->
		{@render children()} <!-- quella parte codice che rappresenta la pagina/pagine-->
	</div>
	<PopUp/>
</div>
<!-- src/routes/+layout.svelte -->
