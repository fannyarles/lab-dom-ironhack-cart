// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subtotalPrice = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotalPrice;
  
  return subtotalPrice;
      
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');

  let totalSum = 0;


  for ( let i = 0 ; i < allProducts.length ; i++ ) {

    totalSum += updateSubtotal(allProducts[i]);
    
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalSum;

  return totalSum;

}

// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  console.log(target.parentNode.parentNode)

  target.parentNode.parentNode.remove();
  calculateAll();  

}

// ITERATION 5

function createProduct() {

  const newProduct = document.querySelector('tfoot');
  const newProductName = newProduct.querySelector('input[type=text]').value;
  const newProductPrice = newProduct.querySelector('input[type=number]').value;

  const allProductsSection = document.querySelector('tbody');
  const newProductLine = document.createElement('tr');
  newProductLine.className = 'product';
  newProductLine.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${newProductName}</span>
      </td>
      <td class="price">$<span>${newProductPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;


  newProductLine.querySelector('button').addEventListener('click', removeProduct);
  allProductsSection.appendChild(newProductLine);

  newProduct.querySelector('input[type=text]').value = '';
  newProduct.querySelector('input[type=number]').value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // const allProducts = document.getElementsByClassName('product');
  // for ( let i = 0 ; i < allProducts.length ; i++ ) {
  //   allProducts[i].querySelector('button').addEventListener('click', removeProduct);
  // }

  const removeProductBtns = document.getElementsByClassName('btn-remove');
  for ( let i = 0 ; i < removeProductBtns.length ; i++ ) {
    removeProductBtns[i].addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});
