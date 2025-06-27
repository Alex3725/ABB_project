<script lang="ts">

      let message = '';

  async function save() {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const text = await res.text();
    alert(text);
  }

  import { onMount } from 'svelte';

  // ✅ Tipo per ogni messaggio
  type Message = {
    id: number;
    content: string;
  };

  let messages: Message[] = [];

  onMount(async () => {
    const res = await fetch('/api/guardaRegisterù');

    if (res.ok) {
      const data: Message[] = await res.json();
      messages = data;
    } else {
      console.error('Errore nel caricamento messaggi');
    }
  });
</script>

<!-- prova database -->

<input bind:value={message} placeholder="Scrivi un messaggio" />
<button onclick={save}>Salva nel DB</button>



<h2>Messaggi salvati</h2>
<ul>
  {#each messages as m}
    <li>{m.content}</li>
  {/each}
</ul>