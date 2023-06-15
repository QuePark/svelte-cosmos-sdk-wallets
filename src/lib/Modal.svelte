<script>
// @ts-nocheck
  export let message = 'close';
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
        {#if message !== ''}
        <button class="sveltio-button sveltio-button--primary sveltio-button--small mt-8" on:click={() => showModal = false}>{message}</button>
        {/if}
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

.sveltio-button {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 700;
        border: 0;
        border-radius: 5000px;
        cursor: pointer;
        display: inline-block;
        line-height: 1;
    }
    .sveltio-button--primary {
        color: #1b116e;
        background-color: #6bedb5;
    }
    .sveltio-button--small {
        font-size: 12px;
        padding: 10px 16px;
    }
    .sveltio-button--primary:hover {
        color: #1b116e;
        background-color: #55bd90;
    }
    .sveltio-button--primary:active {
        background-color: #55bd90;
        border: solid 1px #55bd90;
    }
    
    .sveltio-button--primary:disabled {
        color: #1b116e;
        opacity: 0.5;
        background-color: #6bedb5;
    }
</style>
