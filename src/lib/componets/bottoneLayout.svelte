<script lang="ts">
let {testo, percorsoPag, classStyle=" caret-zinc-50 bg-blue-900", w=100, h=100} = $props();



</script>


<a href="{percorsoPag}" class="w-[{w}%] h-[{h}%] p-[2%] rounded-[2vw] flex justify-center items-center  {classStyle}">{testo}</a>