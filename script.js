const mainContainer = document.getElementById('mainContainer');

const products = document.createElement('div');
products.setAttribute('id', 'products');

mainContainer.appendChild(products);

var request = new XMLHttpRequest();

request.open('GET', 'http://private-32dcc-products72.apiary-mock.com/product', true);

request.onload = function () {
    
    var data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status < 400) {

        data.forEach(product => {

            const program = document.createElement('div');
            program.setAttribute('id', 'program');
    
            const programName = document.createElement('h4');
            programName.textContent = product.name;
    
            const programPrice = document.createElement('div');
            programPrice.setAttribute('id', 'programPrice');
            programPrice.textContent = `$${product.price}`;
            
            const addButton = document.createElement('button');
            addButton.setAttribute('class', 'btn btn-success btn-extra');
            addButton.setAttribute('id', 'addButton');
            addButton.addEventListener('click', (e) => {
            addToCart(product, program);
    
            })
    
            const icon = document.createElement('icon');
            icon.setAttribute('class', 'bi bi-cart2');
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg> Add to cart`;
    
            products.appendChild(program);
            program.appendChild(programName);
            program.appendChild(programPrice);
            program.appendChild(addButton);
            addButton.appendChild(icon);

        })

    } else {
        const errorMessage = document.createElement('div');
        errorMessage.setAttribute('id', 'errorMessage');
        errorMessage.textContent = `Gah, it's not working!`;
        productsContainer.appendChild(errorMessage);
    }
  }

request.send();
  
function addToCart (product, parentElement) {
    
    parentElement.remove();
  
    var cartHeader = document.getElementById('cartHeader');
    cartHeader.innerHTML = `<h3>Products in your shopping cart</h3>
    <br>
    <table>
      <thead>
          <tr>
            <th>
              <div>Product</div>
            </th>
            <th>
              <div>Quantity</div>
            </th>
            <th>
              <div>Value</div>
            </th>
          </tr>
        </thead>
      </table>
      <hr>`;

    var cart = document.getElementsByClassName('cart')[0];

      const table = document.createElement('table');
  
      const tbody = document.createElement('tbody');
  
      const cartMainContent = document.createElement('tr');
      cartMainContent.setAttribute('class', 'cartMainContent');
  
      const productElement = document.createElement('td');
      productElement.setAttribute('id', 'productElement');
  
      const productName = document.createElement('div');
      productName.setAttribute('id', 'productName');
      productName.textContent = product.name;

      const informationPopUp = document.createElement('div');
      informationPopUp.setAttribute('id', 'informationPopUp');
      informationPopUp.innerHTML = `<i class="fa fa-info-circle"></i>`;

      const descriptionPopUp = document.createElement('span');
      descriptionPopUp.setAttribute('id', 'descriptionPopUp');
      descriptionPopUp.textContent = product.description;

      const quantityElement = document.createElement('td');
      quantityElement.setAttribute('id', 'quantityElement');
  
      const productQuantity = document.createElement('div');
  
      const quantityInput = document.createElement('input');
      quantityInput.setAttribute('class', 'quantityInput');
      quantityInput.setAttribute('type', 'number');
      quantityInput.setAttribute('value', '1');
      quantityInput.setAttribute('min', '1');
      quantityInput.addEventListener('change', quantityChanged);

      const priceElement = document.createElement('td');
      priceElement.setAttribute('id', 'priceElement');
  
      const productPrice = document.createElement('div');
      productPrice.setAttribute('class', 'productPrice');
      productPrice.textContent = `$${product.price}`;
  
      const removeButton = document.createElement('button');
      removeButton.setAttribute('class', 'btn-danger');
      removeButton.setAttribute('id', 'removeButton');
      removeButton.textContent = `X`;
      removeButton.addEventListener('click', (e) => {
        removeFromCart(product, cartMainContent);
      })
  
      cart.appendChild(table);
      table.appendChild(tbody);
      tbody.appendChild(cartMainContent);
      cartMainContent.appendChild(productElement);
      productElement.appendChild(productName);
      productElement.appendChild(informationPopUp);
      informationPopUp.appendChild(descriptionPopUp);
      cartMainContent.appendChild(quantityElement);
      quantityElement.appendChild(productQuantity);
      productQuantity.appendChild(quantityInput);
      cartMainContent.appendChild(priceElement);
      priceElement.appendChild(productPrice);
      priceElement.appendChild(removeButton);
  
    updateCartTotal();
  }
  
  function removeFromCart (product, parentElement){
  
    parentElement.remove();
    
    var products = document.getElementById('products');
    
    const program = document.createElement('div');
    program.setAttribute('id', 'program');
  
    const programName = document.createElement('h4');
    programName.textContent = product.name;
  
    const programPrice = document.createElement('div');
    programPrice.setAttribute('id', 'programPrice');
    programPrice.textContent = `$${product.price}`;
        
    const addButton = document.createElement('button');
    addButton.setAttribute('class', 'btn btn-success btn-extra');
    addButton.setAttribute('id', 'addButton');
    addButton.addEventListener('click', (e) => {
        addToCart(product, program);
  
    })
  
    const icon = document.createElement('icon');
    icon.setAttribute('class', 'bi bi-cart2');
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
    </svg> Add to cart`;
  
    products.appendChild(program);
    program.appendChild(programName);
    program.appendChild(programPrice);
    program.appendChild(addButton);
    addButton.appendChild(icon);
    
    updateCartTotal();
    
    if (removeFromCart){
    
        var cart = document.getElementsByClassName('cart')[0];
    
        var cartMainContent = document.getElementsByClassName('cartMainContent');
    
        var total = 0;
      
        for ( var total = 0; total = cartMainContent.length; i++){
    
          var cartContent = cartMainContent [total];
    
          var productPrice = cartContent.getElementsByClassName('productPrice')[0];
          var quantityElement = cartContent.getElementsByClassName('quantityInput')[0];
          var price = parseFloat(productPrice.innerText.replace('$', ''));
          var quantityValue = quantityElement.value;
          total = total + (price * quantityValue);
    
        }

        total = Math.round(total * 100) / 100;
        
        var updateCartHeader = document.getElementById('cartHeader');
        updateCartHeader.innerHTML = `<h3>No products in your shopping cart</h3>`;
    
        var updateTotalCart = document.getElementById('cartTotal');
        updateTotalCart.textContent = '';
        updateTotalCart.style.border = 'none';
      
        cart.appendChild(updateCartHeader);
        cart.appendChild(updateCartHeader);
      
      }
    
    }

    var quantityInputs = document.getElementsByClassName('quantityInput');
    
    for (var i = 0; i < quantityInputs.length; i++) {
    
      var input = quantityInputs[i];
    
      input.addEventListener('change', quantityChanged);
    
    }
    
    function quantityChanged(event) {
    
      var input = event.target;
    
        if (isNaN(input.value) || input.value <= 0) {
    
            input.value = 1;
        }
    
        updateCartTotal();
    }
  
    function updateCartTotal (){
  
      if(addToCart){
    
      var cart = document.getElementsByClassName('cart')[0];
    
      var cartMainContent = document.getElementsByClassName('cartMainContent');
    
      var total = 0;
    
      for ( var i = 0; i < cartMainContent.length; i++){
    
        var cartContent = cartMainContent [i];
    
        var productPrice = cartContent.getElementsByClassName('productPrice')[0];
        var quantityElement = cartContent.getElementsByClassName('quantityInput')[0];
        var price = parseFloat(productPrice.innerText.replace('$', ''));
        var quantityValue = quantityElement.value;
        total = total + (price * quantityValue);
    
      }
        
      total = Math.round(total * 100) / 100;
    
      const cartTotal = document.getElementById('cartTotal');
      cartTotal.style.borderTop = `solid black 3px`;
      cartTotal.textContent = `Total: $` + total;
    
    
      const continueButton = document.createElement('button');
      continueButton.setAttribute('class', 'btn btn-success btn-cont');
      continueButton.setAttribute('id', 'continue');
      continueButton.textContent = `Continue` ;
    
      // const emptyTotalButton = document.createElement('button')
      // emptyTotalButton.setAttribute('class', 'btn btn-success btn-cont')
      // emptyTotalButton.textContent = `Empty`
      // cartTotal.appendChild(emptyTotalButton)
      
      cart.appendChild(cartTotal);
      cartTotal.appendChild(continueButton);
    
      }
     
    }