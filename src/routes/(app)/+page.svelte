<script lang="ts">
	import BottoneDeafoultStyle from "$lib/componets/bottoneDeafoultStyle.svelte";
	import BottoneLayout from "$lib/componets/bottoneLayout.svelte";



</script>

<div class="w-full h-full text-white flex  justify-center items-center">
    <div class=" w-[30%] h-full flex justify-center items-center gap-7 bg-blue-900 rounded-[2vw]">
        <BottoneLayout w={30} h={20} percorsoPag={"./register/"} testo={"registrati"} classStyle={" bg-blue-950 hover:bg-blue-700 p-[0.5%]"}/>
        <BottoneLayout w={30} h={20} percorsoPag={"./login/"} testo={"accedi"} classStyle={" bg-blue-950 hover:bg-blue-700 p-[0.5%]"}/>
    </div>
</div>