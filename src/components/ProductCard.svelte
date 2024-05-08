<script lang="ts">
    import { cartItems, addToCart, removeFromCart } from "../store/cart";
    let cart = $cartItems;
    let cartItemIndex = cart.findIndex((item) => item.id === product.id);
    let cartProduct = cart[cartItemIndex];
    
    cartItems.subscribe((value) => {
        cart = value;
        cartItemIndex = cart.findIndex((item) => item.id === product.id);
        cartProduct = cart[cartItemIndex];
    });

    export let product: Product;
</script>

<div class="card">
    <header class="card-header">
        <h2>{product.name}</h2>
    </header>

    {#if cartProduct !== undefined}
        <div class="card-body px-4">
            Quantity: <strong>{cartProduct.quantity}</strong>
        </div>
    {/if}

    <div class="card-body px-4">
        Price: ${product.price}
    </div>

    <footer class="card-footer">
        <button class="p-2 rounded variant-glass-primary" on:click={() => addToCart(product.id)}>Add</button>
        <button class="p-2 rounded variant-glass-error" on:click={() => removeFromCart(product.id)}>Remove</button>
    </footer>
</div>