// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here

    const price = parseFloat(product.querySelector('.price span').innerText);
    const quantity = parseFloat(product.querySelector('.quantity input').value);
     console.log(price)

    const total = price * quantity;
    const subTotal = product.querySelector('.subtotal span');
    subTotal.innerHTML = total;

    return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelectorAll('.product');
  const products = [...singleProduct];

  let total =0;

  products.forEach ((product) => {
    const price = updateSubtotal(product);
    total += price;
  });

   const totalText = document.querySelector('#total-value span');
   totalText.innerHTML = total;
   // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}
function updateSubtotal(product) {
  // ...
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});