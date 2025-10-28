<script lang="ts">
	import BottoneDeafoultStyle from "$lib/componets/bottoneDeafoultStyle.svelte";
	import BottoneLayout from "$lib/componets/bottoneLayout.svelte";



</script>

<div class="w-full h-full text-white">
    <ul class="flex justify-center items-center space-x-[30%]">
        <li><a href="./home/login/" class=" bg-blue-950 hover:bg-blue-700 p-[20%]">accedi</a></li>
        <li><a href="./home/register/">registarti</a></li>
        <BottoneLayout percorsoPag={"./home/register/"} testo={"accedi"} classStyle={" bg-blue-950 hover:bg-blue-700 p-[0.5%]"}/>
    </ul>
</div>