<script lang="ts">
	import { goto } from "$app/navigation";
	import { saveUtente } from "$lib/store/storeUtente";


    let inpEmail = $state("")


    function hendlerLogin() {
        saveUtente("",inpEmail)
        goto("/login/passw")
    }
    

</script>

<div class="w-full  h-full bg-red-700 rounded-[2vw] flex-wrap justify-center">
    <div class="">
        <h1>Login</h1>
    </div>
    <div>
        <p>Inserire Email</p>
    </div>
    <input type="email" name="" bind:value={inpEmail}>
    <div>
        <button onclick={hendlerLogin}>ciao</button>
    </div>
</div>