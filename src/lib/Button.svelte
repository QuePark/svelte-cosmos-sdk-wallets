<script lang="ts">
    export let func = () => {};
    export let buttonClassName = '';

    function onClick() {
        func();
    }
</script>

<button class="btn btn-custom my-4 mx-auto min-w-fit w-52 {buttonClassName}" on:click={onClick}><slot /></button>

<style>
.btn-custom {
    text-transform: none;
}
</style>