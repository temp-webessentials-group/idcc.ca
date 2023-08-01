// Function to validate the contact form
function validateForm() {
    var nameInput = document.getElementById(`name`);
    var emailInput = document.getElementById(`email`);
    var messageInput = document.getElementById(`message`);
    
    if (nameInput.value.trim() === `` || emailInput.value.trim() === `` || messageInput.value.trim() === ``) {
      alert(`Please fill in all required fields.`);
      return false; // Prevent form submission
    }
    
    return true; // Allow form submission
  }

//Shopping cart
let cart = {};

function addToCart(componentName, componentPrice){
    if (componentName in cart){
        //if component is already in cart check if out of stock
        if (cart[componentName].stockStatus === "Out of Stock"){
            alert(`${componentName} is out of stock and cannot be added to the cart`)
            return;
        }
    }
    
    const quantity = parseInt(prompt(`Enter the quantity of ${componentName} you want to add to the cart:`));
    if(quantity && quantity > 0) {
        if(cart[componentName]) {
            cart[componentName].quantity += quantity;
        } else {
            cart[componentName] = {
                price: componentPrice,
                quantity: quantity,
                stockStatus: "In Stock",
            };
        }
        updateCartDisplay();
        alert(`${quantity} ${componentName}(s) added to the cart.`);
    } else {
        alert('Invalid quantity. Please enter a valid quantity.');
    }
}

function updateCartDisplay(){
    const cartList = document.getElementById('cartList');
    const totalPriceDisplay = document.getElementById('totalPrice');
    let totalPrice = 0;
    cartList.innerHTML = '';
    
    for(const [componentName, componentData] of Object.entries(cart)){
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `${componentName} x ${componentData.quantity} - $${componentData.price * componentData.quantity}`;
        cartList.appendChild(listItem);
        totalPrice += componentData.price * componentData.quantity;
    }
    
    totalPriceDisplay.innerText = `$${totalPrice}`;
    
    //to disable "add to cart" buttons for `out-of-stock` items-center
    const tableRows = document.getElementsByTagName('tr');
    for (let i = 0; i < tableRows.length; i++){
        const row = tableRows[i];
        const componentName = row.cells[0].querySelector('a').innerText;
        const componentPrice = parseInt(row.cells[1].innerText.replace('$', ""));
        if (cart[componentName] && cart[componentName].stockStatus === "Out of Stock"){
            row.querySelector('button').disabled = true;
        } else {
            row.querySelector('button').disabled = false;
        row.querySelector('button').setAttribute('onclick', `addToCart('${componentName}', {$componentPrice})`);
        }
    }
}

function checkout(){
    if(Object.keys(cart).length === 0){
        alert('Your cart is empty. Please add items to your cart before checking out');
    } else {
        let cartContent = '';
        let totalPrice = 0;
        
        for(const [componentName, componentData] of Object.entries(cart)){
            cartContent += `${componentName} x ${componentData.quantity} - $${componentData.price * componentData.quantity}\n`;
            totalPrice += componentData.price * componentData.quantity;
        }
        
        alert('checkout successful. thank you for your purchase!');
        cart = {};
        updateCartDisplay();
    }
}