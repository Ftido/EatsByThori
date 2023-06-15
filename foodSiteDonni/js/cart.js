//modal
document.getElementById("cartIcon").addEventListener('click', openModal);


// Add event listener to the order button inside the cart modal
document.getElementById("orderButton").addEventListener("click", submitOrder);

// Function to submit the order
function submitOrder() {
  // Retrieve necessary information from the cart modal
  var productName = document.getElementById("product-name").innerText;
  var quantity = document.getElementById("quantity-input").value;
  var totalPrice = document.getElementById("total-price").innerText;

  console.log("Order submitted:", productName, quantity, totalPrice);

  // Close the cart modal
  closeModal();
}

// Store the cart items
let cartItems = [];

// Get the "Add to Cart" buttons
let addToCartButtons = document.querySelectorAll('.btn');

// Add click event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to handle adding items to the cart
function addToCart(event) {
  // Get the clicked button's parent element
  let button = event.target;
  let item = button.closest('.box');

  // Extract necessary item information
  let itemName = item.querySelector('h3').textContent;
  let itemPrice = parseFloat(item.querySelector('.price').textContent.replace('R', ''));

  // Create a new cart item object
  let cartItem = {
    name: itemName,
    price: itemPrice
  };

  // Add the item to the cart
  cartItems.push(cartItem);

  // Update the modal with the new cart items
  updateCartModal();

  // Prevent the form from submitting
  event.preventDefault();
}

// Function to update the cart modal with the current cart items
function updateCartModal() {
  let cartItemsContainer = document.querySelector('.cart-items');

  // Clear the existing cart items
  cartItemsContainer.innerHTML = '';

  cartItems.forEach(item => {
    let cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price.toFixed(2)}</span>
    `;
    cartItemsContainer.appendChild(cartItemElement);
  });

  // Update the total price in the modal
  let totalPriceElement = document.querySelector('#totalPrice');
  let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  totalPriceElement.textContent = 'R' + totalPrice.toFixed(2);

  openModal();
}

function openModal() {
  let modal = document.getElementById('cartModal');
  modal.style.display = 'block';

  var cartIcon = document.getElementById("cartIcon");
  var cartItemCount = cartItems.length;
  cartIcon.setAttribute('data-count', cartItemCount);

  var orderButton = document.getElementById("orderButton");
  orderButton.addEventListener('click', function() {
    // Display success message
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    closeModal();
  });
}

// Function to close the modal
function closeModal() {
  let modal = document.getElementById('cartModal');
  modal.style.display = 'none';
}

// Get the close button and add click event listener
let closeModalButton = document.getElementById('closeModal');
closeModalButton.addEventListener('click', closeModal);