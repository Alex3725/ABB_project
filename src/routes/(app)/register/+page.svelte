<script lang="ts">


  import { goto } from '$app/navigation';  // importa la funzione per navigare
  import { saveUtente } from "$lib/store/storeUtente";
  import { registraUtente } from '$lib/api/RegisterUser';

  let inpName =$state("");
  let inpEmail = $state("");
  let inpPassw = $state("");
  let inpControlloPassw = $state("");
  // svelte-ignore non_reactive_update
    let errore = false;

  function controlloPassw(pass: string, conf: string): boolean {
    console.log(pass,  conf);
    
    return pass !== "" && conf !== "" && pass === conf;
  }

  async function handleRegister() {
    if (!controlloPassw(inpPassw, inpControlloPassw)) {
      errore = true;
      return;
    }
      await saveUtente(inpName, inpEmail);  // salva utente (assumendo async)
      try {
      await registraUtente(inpName, inpEmail, inpPassw);
      errore = false;
      goto('/sucesso');
    } catch (e) {
      console.error(e);
      errore = true;
    }
  }
</script>

<div class="w-full h-full bg-red-700 rounded-[2vw] flex justify-center">
  <table class="w-full h-full contenuto overflow-hidden rounded-[2vw] p-1">
    <thead class="w-full h-full ">
      <tr class="w-full h-[16.67%] bg-amber-300 flex justify-center">
        <th>Register</th>
      </tr>
      <tr class="w-full h-[16.67%] bg-amber-300 flex justify-center">
        <th class="ml-1 w-[25%] flex items-center justify-center">Name:</th>
        <th class="border-2 w-[75%] justify-center flex items-center">
          <input type="text" bind:value={inpName} />
        </th>
      </tr>
      <tr class="w-full h-[16.67%] bg-amber-300 flex justify-center">
        <th class="ml-1 w-[25%] flex items-center justify-center">Email:</th>
        <th class="border-2 w-[75%] justify-center flex items-center">
          <input type="email" bind:value={inpEmail} />
        </th>
      </tr>
      <tr class="w-full h-[16.67%] bg-amber-300 flex justify-center">
        <th class="ml-1 w-[25%] flex items-center justify-center">Password:</th>
        <th class="border-2 w-[75%] justify-center flex items-center">
          <input type="password" bind:value={inpPassw} />
        </th>
      </tr>
      <tr class="w-full h-[16.67%] bg-amber-300 flex justify-center">
        <th class="ml-1 w-[25%] flex items-center justify-center">Conferma Password:</th>
        <th class="border-2 w-[75%] justify-center flex items-center">
          <input type="password" bind:value={inpControlloPassw} />
        </th>
      </tr>
      <tr class="w-full h-[16.67%] bg-amber-300 flex justify-center">
        <th class="ml-1 w-[70%]"></th>
        <th class="ml-1 w-[15%] flex items-center justify-center">
          <button on:click={handleRegister}>Registrati</button>
        </th>
        <th class="w-[15%] justify-center flex items-center">Annulla</th>
      </tr>
      {#if errore}
        <tr>
          <td colspan="3" class="text-red-600 text-center">
            Le password non corrispondono
          </td>
        </tr>
      {/if}
    </thead>
  </table>
</div>
