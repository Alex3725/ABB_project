
<script lang="ts">
	import '../../app.css';

	let { children } = $props();


	
</script>

<div class="w-screen h-screen flex flex-col justify-center items-center bg-[url(/img/sfondoLogin.jpg)] bg-cover bg-center">
	<h1 class=" text-2xl [50%] text-white ">ABB PCTO</h1>
	<div class=" w-[70%] h-[50%] "><!--  guardare classi su tailwind.css -->
		{@render children()} <!-- quella parte codice che rappresenta la pagina/pagine-->
	</div>
</div>
