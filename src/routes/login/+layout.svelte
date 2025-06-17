
<script lang="ts">
	import '../../app.css';

	let { children } = $props();


	
</script>


<div class="bg-red-300 w-full h-[90%]"><!--  guardare classi su tailwind.css -->
		{@render children()} <!-- quella parte codice che rappresenta la pagina/pagine-->
</div>