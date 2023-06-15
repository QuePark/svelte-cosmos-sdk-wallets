<script lang="ts">
    export let func = () => {};
    export let buttonClassName = '';

    function onClick() {
        func();
    }
</script>

<button class="btn my-4 mx-auto min-w-min w-3/5 {buttonClassName}" on:click={onClick}><slot /></button>