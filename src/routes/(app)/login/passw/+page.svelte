<script lang="ts">
	import { goto } from "$app/navigation";
	import { loginUtente } from "$lib/api/LoginUtente";
	import { Utente } from "$lib/store/storeUtente";


    let inpPassw = $state("")
    let emailString = ""
    
    const email = $derived({
    stores: Utente,
    derive: (u: any) => u.email
  });



    console.log(emailString);
    
    function hendlerLogin() {
        loginUtente(emailString,inpPassw)
        goto("/sito/indice")
    }

    

</script>

<div class="w-full  h-full bg-red-700 rounded-[2vw] flex-wrap justify-center">
    <div class="">
        <h1>Login</h1>
    </div>
    <div>
        <p>Inserire passw</p>
    </div>
    <input type="email" name="" bind:value={inpPassw}>
    <div>
        <button onclick={hendlerLogin}>ciao</button>
    </div>
</div>