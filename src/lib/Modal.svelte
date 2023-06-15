<script>
// @ts-nocheck
  export let message = '';
  export let showModal = true;
  export let isPromo = true;
  export let modalClassName = '';
</script>
 
{#if showModal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore missing-declaration -->
  <div class="backdrop" class:promo={isPromo} on:click|self>
    <div class="modal {showModal ? 'modal-open': ''} {modalClassName === '' ? 'h-1/6' : modalClassName} h-fit md:min-w-fit md:w-full">
        <slot />
        <button class="btn {message === '' ? 'btn-circle' : ''}" on:click={() => showModal = false}>
        {#if message === ''}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        {:else}
            {message}
        {/if}
        </button>
    </div>
  </div>
{/if}

<style>
.backdrop {
    height: 100%;
    position: fixed;
    z-index: 1300;
    inset: 0px;
    width: 100%;
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: hsla(0,0%,100%,.14);
    backdrop-filter: blur(8px);
    height: 100%;
    top: 0;
    display: flex;
}

.modal {
    padding: 2rem;
    border-radius: 10px;
    overflow-y: auto;
    min-width: 500px;
    width: auto;
    text-align: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    position: relative;
    margin: auto;
}

@media (max-width: 768px) {
    .modal {
        min-width: fit-content;
        padding: auto;
    }
}

.promo .modal {
    background: rgb(0, 0, 0);
    color: white;
}

.btn-radius {
    border-radius: 100px;
}

.btn-mh-2 {
    min-height: 2.5rem;
}
</style>
