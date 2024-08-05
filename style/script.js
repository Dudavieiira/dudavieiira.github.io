window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.top = "-80px";
    } else {
        document.getElementById("header").style.top = "0";
    }
}

document.getElementById("header").onmouseover = function() {
    document.getElementById("header").style.top = "0";
}

let cart = [];

function addToCart(product, price, image) {
    const existingProduct = cart.find(item => item.product === product);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ product, price, image, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    cartTableBody.innerHTML = ''; // Limpa a tabela

    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement('tr');

        const productCell = document.createElement('td');
        productCell.textContent = item.product;
        row.appendChild(productCell);

        const imageCell = document.createElement('td');
        const imgElement = document.createElement('img');
        imgElement.src = item.image;
        imgElement.alt = item.product;
        imgElement.style.width = '50px';
        imageCell.appendChild(imgElement);
        row.appendChild(imageCell);

        const quantityCell = document.createElement('td');
        const minusButton = document.createElement('button');
        minusButton.textContent = '-';
        minusButton.className = 'quantity-btn';
        minusButton.onclick = () => updateQuantity(index, 'decrease');

        const quantityText = document.createElement('span');
        quantityText.textContent = item.quantity;

        const plusButton = document.createElement('button');
        plusButton.textContent = '+';
        plusButton.className = 'quantity-btn';
        plusButton.onclick = () => updateQuantity(index, 'increase');

        quantityCell.appendChild(minusButton);
        quantityCell.appendChild(quantityText);
        quantityCell.appendChild(plusButton);
        row.appendChild(quantityCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = `R$${(item.price * item.quantity).toFixed(2)}`;
        row.appendChild(priceCell);

        cartTableBody.appendChild(row);

        total += item.price * item.quantity;
    });

    document.getElementById('total-amount').textContent = `Total: R$${total.toFixed(2)}`;
    
    const donationAmount = (total * 0.05).toFixed(2);
    document.getElementById('donation-amount').textContent = `(5% = R$${donationAmount})`;
}

function updateQuantity(index, action) {
    if (action === 'increase') {
        cart[index].quantity += 1;
    } else if (action === 'decrease') {
        cart[index].quantity -= 1;
        if (cart[index].quantity === 0) {
            cart.splice(index, 1); // Remove o item do carrinho se a quantidade for 0
        }
    }
    updateCart();
}

function showLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
}

function showRegister() {
    document.getElementById('register-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
}

// Inicialmente mostrar o formulário de login
document.addEventListener('DOMContentLoaded', function() {
    showLogin();
});


