import {renderCart ,cartQuantity,deleteQuantity,renderPaymentSummary,clearCart, updateOrderButton} from './data/utils.js';

import { hamburgerMenu } from './data/data.js';

hamburgerMenu();
cartQuantity();
renderPaymentSummary();
renderCart();
deleteQuantity();
renderPaymentSummary();

document.getElementById("place-order-btn").addEventListener("click", function() {
    updateOrderButton();

    setTimeout(function() {
        clearCart();
        cartQuantity();

        location.reload();
    }, 1000);
    localStorage.clear();
});


