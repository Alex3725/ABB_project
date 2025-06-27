<script lang="ts">
	import InputPop from "./inputPop.svelte";
    import { hiddenPopUp, PopUp as PopUpStore, reSetData, saveData } from "$lib/store/storePopUp";
	import { Check } from "svelte-bootstrap-icons";
	import BottoneDeafoultStyle from "./bottoneDeafoultStyle.svelte";
let {tipo = "CREA",placeData = "data", placeTitolo ="titolo", placeContenuto = "contenuto", placeEntrata = "entrata" , placeUscita = "uscita"  } = $props()

    let inpData:string = $state("") //cambiera con state
    let inpTitolo:string = $state("") //cambiera con state
    let inpEntrata:number = $state(0) //cambiera con state
    let inpUscita:number = $state(0) //cambiera con state
    let textAreaContenuto:string = $state("")
    let listaError = $state({})

    let errorData:boolean = $state(false)
    let errorTit:boolean = $state(false)
    let errorEntrata:boolean = $state(false)
    let errorUscita:boolean = $state(false)

    function controlloErrori() {
        Object.entries(listaError).forEach(([chiave, valore]) => {
            if (valore) {
                return true
            }
        });
        
        listaError = []
        return false
    }

    function savedAndClosed() {
        if (controlloErrori()) {
            console.log("cazzo sbagli")
        }   else{
            saveData(inpData,inpTitolo,inpEntrata, inpUscita, textAreaContenuto)
            hiddenPopUp()
            console.log(inpData);
        }
        
    }

    $effect(()=>{
        if(!$PopUpStore.show) {
            inpData = "";
            inpTitolo = "";
            inpEntrata = 0;
            inpUscita = 0;
            textAreaContenuto = "";
        }
        // listaError = {
        //     'data': errorData,
        //     'titolo': errorTit,
        //     'entrata': errorEntrata,
        //     'uscita': errorUscita
        // }
        
    })
    
</script>



<div class="popUpCrea w-[30%] h-[30%] bg-red-900 ring-2 ring-white  absolute top-[40%] left-[50%] -translate-x-[50%] flex flex-col items-center px-[2%] {$PopUpStore.show ? 'opacity-100  pointer-events-auto' : 'opacity-0  pointer-events-none'} transition-opacity">
    <h1 class="w-full h-[10%] pt-[0.5%]">{tipo}</h1>
    <div class="w-full h-[80%] testo flex space-x-[15%] ">
        <div class="titolo-data flex flex-col gap-y-2">
        <InputPop placehol = {placeData} bind:textContenuto={inpData} tipo="D" classStyle={""} w={60} h={20} />
        <InputPop placehol = {placeTitolo} bind:textContenuto={inpTitolo} classStyle={""}  w={60} h={20} />
        <InputPop placehol = {placeEntrata} bind:textContenuto={inpEntrata} tipo="N" classStyle={""}  w={60} h={20} />
        <InputPop placehol = {placeUscita} bind:textContenuto={inpUscita}  tipo="N" classStyle={""}  w={60} h={20}/>
        </div>
    
        <textarea name="" class="rounded-2xl" placeholder="{placeContenuto} " bind:value={textAreaContenuto}></textarea>
    </div>
    <div class=" w-full h-[10%]">
        <BottoneDeafoultStyle text={""} funzione={savedAndClosed}><Check/></BottoneDeafoultStyle>
    </div>
    
</div>
