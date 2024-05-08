import { writable, get } from "svelte/store";

export const cartItems = writable<CartItem[]>([]);

export const addToCart = (id: string) => {
    let items = get(cartItems);

    let itemPosition = items.findIndex((item: CartItem) => item.id === id);

    if (itemPosition !== -1) {
        cartItems.update(() => {
            let updatedItems = items.map((item: CartItem) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            })
            return updatedItems;
        });
    } else {
        cartItems.update(() => {
            return [...items, { id, quantity: 1 }];
        });
    }
};

export const removeFromCart = (id: string) => {
    let items = get(cartItems);
    let itemPosition = items.findIndex((item: CartItem) => item.id === id);

    if (items[itemPosition].quantity - 1 === 0) {
        items.splice(itemPosition, 1);
    }

    cartItems.update(() => {
        let updatedItems = items.map((item: CartItem) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        })
        return updatedItems;
    });
};
