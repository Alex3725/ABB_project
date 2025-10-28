<script lang="ts">
  export let data;
  const users = data.users;
</script>

<ul class=" text-amber-600">
  {#each users as user}
    <li>{user.name} ({user.email})</li>
  {/each}
</ul>
