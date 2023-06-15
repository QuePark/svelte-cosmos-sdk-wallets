<style>
.btn-custom {
	text-transform: none;
}
</style>

<script lang="ts">
export let func = () => {};
export let buttonClassName = '';

function onClick() {
	func();
}
</script>

<button class="btn-custom btn mx-auto my-4 w-52 min-w-fit {buttonClassName}" on:click="{onClick}"
	><slot /></button
>
