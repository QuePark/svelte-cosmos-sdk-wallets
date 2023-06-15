<script>
    import { createEventDispatcher, onMount } from 'svelte';
	import Modal from './Modal.svelte';
	import Button from './Button.svelte';
    import Cosmostation from './Cosmostation.svelte';
  
    export let label = '';
    export let buttonClassName = '';
    export let modalClassName = '';
    export let innerButtonClassName = '';
    let showModal = false;
  
    const dispatch = createEventDispatcher();
     /**
     * Button click handler
     */
     function onClick() {
        showModal = !showModal;
      dispatch('click', { showModal });
    }
  </script>
  
<button type="button" class="btn-radius btn-mh-2 {buttonClassName === '' ? 'btn btn-neutral' : buttonClassName}" on:click={onClick}>
    {#if showModal}
    <span class="loading loading-spinner"></span>loading
    {:else}
    {label}
    {/if}
</button>
  <Modal message="close" modalClassName={modalClassName} bind:showModal={showModal} on:click={onClick}>
    <span>Connect a wallet</span>
    <ul class="flex justify-center flex-col w-full">
        <Button buttonClassName="{innerButtonClassName} btn-neutral" func={() => console.log("Keplr")}>
            <span class="flex flex-row gap-2 items-center justify-start w-full">
                <img class="w-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUwSURBVHgBdZdLaF5VEIBnzr3/nzQPTVCLL0x+CoqCGiyCLkTo0k0RRBQsguCjKxsiCBbqH9FScJGICFJEEEzd2oXgxr7UbLQQFyJKtT9R09KFNs3jf9zH6ZyZ87q36SWTmXP+e883M2fOuecixNfp7jQofQg07gfQ06A1dWpAkoqNJdtBi63R2Rq0srbSKyyZnocnWx2HQg8923uTxlgEDwEBWaCHsuwEtm0CVhzA+Hdow+Ot+QA+3X+XBmgLy0I0BGAdjjcDO1jdAQh2CbPwRGsROb0lXrQBhqicrUOk/jcaGB3QOVCL0KXat02IEg0NqVupGkBb+3zrkH8d5mFHbRuI9h9CFJl5nlxTrk+gxnWj6e9QCjk+GiY6GlzX2rgDGKs2WCcEKFnjNtqQ3M2o96eYw0xI880jRIxtrEARa/ASogzUbBllOlX9KiXAtLcPTDdgahS5b2l1AKvbRXCGZKKJcHDPiE/TajeHr9a6VbBNs7tSzKCS5npqjRy4L4Wndifcv3w5h3/XCw81+tjMGLw4NSTQ7RKeXf4P0rw2NzW4KS576Wo6bdRSKME5VQAkeXDs/b2jHnot0/Dc2auw1i0pIgzOOWBUlRHY9WuoFKpplxGYoAllSdGPb82MwOv3D3vo89+tw6X1EhoWKrUQA0Mh0RyHcHzlxvDq1DA4JWfn9u6CuUeGff9rpzbg9ysFNF3hReLGDhXJ4ChiC5QHNSiX/ihik+YX9jRh7rEAffvMFpz/O2coj+EjlsFUtHm4aY/A2t4sO5SxlWtHET88mcCRpwP06LltOPnrABrK3Y9WR2JDjqaYaqAfFVUFqiVq82AUcQz9ZLkHS+f7FKm5X6JUCoLTUIUj+oUMadIPW5QHxdBaxPF16WoBjYHAEgvzDtQjh2ieOeIB+Cjd8lEM1Tyg4jdKIJ/6LYN9DzZkbveNwF9rBfxJRZVYkPLaOgFBRwGDSgYlqAGBTcpJJySmrbKg44iXfujDiR+lMMaHEY6/NA4P3ZZCg5ZYI0Nokm6yFhm6QRQMkygDNEvKOCDQMsCtXV1OGha+3oJvfpYNYIzgH788Bg/cnjDUwR2oSZCm1UMs0q9URhGTYCYgjj4TYJpJBrCynDTL0ROb8O1PAb7wyhjcM0YQWm5N2i6NA0aGchup14pFGRgyUBwQ0ZHWtS3TOETFQfAPv9yEXy7k3D9K8GOvjsLdBOeoc4FxtLlE6nVmwXHUEq1A2c6pPyous10mWYB/cHwDLv5T8G+7JxW89wbBb5H0OgdiuEu3QjNwFsQMqnJxJHERR5cqtU+32cV6GxqOLGxAx8LvmEQ4fHAX3HkrwQsLtvAGwRu2ja1nLmu3vPwysLtQatYnnZ0mxhVMUApNu9vT0CMxb58G3ZQo0SkquIsKLCFt7H4PYdAFbiveNpG1vLDofjrvdqhvWjYNu9iV3YHseW7rWgH9zZLBKe0U4hAfJCElSUpkB/+/YhxyAuxAQhCzxhPG2T1c4wqlOj8JJt2UOpYiaLWTmBRbOym1vJ9N+o2uCDnIQkvM2kZzqksClzpf5OIpLNRIGdmFLCfuMyALY11aKGuw7UjovtRkg4CcldK0+WU3rzpn6LOigFkeWMv26CBiQwA6B7TYyvajc0JL+r0D1o4domfn259ixxxE4cL399KnSzkPdlCBuTm2Dlmbz+mRc7wXR/cpB2fBYAt09vBnSZtXh1smf5ybalMOW3Ts/oKAK9zpPhT8F4Z0SmVaic7f0ReLFBK3sUPAjzKNrXc+TxYd7zpHMBLp37MnTQAAAABJRU5ErkJggg==" alt="" />
                <span>Kelpr</span>
            </span>
        </Button>
        <Button buttonClassName="{innerButtonClassName} btn-neutral justify-start w-full" func={() => console.log("Cosmostation")}>
            <span class="flex flex-row gap-2 items-center">
                <Cosmostation w="1.75rem" h="1.75rem"/>
                <span>Cosmostation</span>
            </span>
        </Button>
        <span class="my-4">wallet connector powered by RIZON</span>
    </ul>
  </Modal>

  <style>
    .btn-radius {
        border-radius: 100px;
    }
    .btn-mh-2 {
        min-height: 2.5rem;
    }
  </style>