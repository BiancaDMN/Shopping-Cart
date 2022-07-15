const productsContainer = document.getElementById('productsContainer');

const container = document.createElement('div');
container.setAttribute('class', 'container');

productsContainer.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'http://private-32dcc-products72.apiary-mock.com/product', true);

request.onload = function () {
    
    var data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status < 400) {

        data.forEach(product => {

            const program = document.createElement('div');
            program.setAttribute('id', 'program');
    
            const programName = document.createElement('h4');
            programName.setAttribute('id', 'programName');
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
    
            container.appendChild(program);
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
  
    var cartTitle = document.getElementById('cartTitle');
    cartTitle.innerHTML = `<h3>Products in your shopping cart</h3>
    <br>
    <table>
      <thead>
            <tr id = 'cartColumn'>
                <th id="productColumn">
                    <div>Product</div>
                </th>
                <th id="QuantityValueColumn">
                    <div>Quantity</div>
                    <div>Value</div>
                </th>
            </tr>
        </thead>
      </table>
      <hr>`;

    var cartContainer = document.getElementsByClassName('cartContainer')[0];
  
      const tbody = document.createElement('tbody');
  
      const cartRow = document.createElement('tr');
      cartRow.setAttribute('class', 'cartRow');
  
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
  
      const quantity = document.createElement('td');
      quantity.setAttribute('id', 'quantity');
  
      const productQuantity = document.createElement('div');
      productQuantity.setAttribute('id', 'productQuantity');
  
      const quantityInput = document.createElement('input');
      quantityInput.setAttribute('class', 'quantityInput');
      quantityInput.setAttribute('type', 'number');
      quantityInput.setAttribute('value', '1');
      quantityInput.setAttribute('min', '1');
      quantityInput.addEventListener('change', quantityChanged);
  
      const productPrice = document.createElement('div');
      productPrice.setAttribute('class', 'productPrice');
      productPrice.textContent = `$${product.price}`;
  
      const removeButton = document.createElement('button');
      removeButton.setAttribute('class', 'btn-danger');
      removeButton.setAttribute('id', 'removeButton');
      removeButton.textContent = `X`;
      removeButton.addEventListener('click', (e) => {
        removeFromCart(product, cartRow);
      })
  
      cartContainer.appendChild(tbody);
      tbody.appendChild(cartRow);
      cartRow.appendChild(productElement);
      productElement.appendChild(productName);
      productElement.appendChild(informationPopUp);
      informationPopUp.appendChild(descriptionPopUp);
      cartRow.appendChild(quantity);
      quantity.appendChild(productQuantity);
      productQuantity.appendChild(quantityInput);
      productQuantity.appendChild(productPrice);
      productPrice.appendChild(removeButton);
  
    updateCartTotal();
  }
  
  function removeFromCart (product, parentElement){
  
    parentElement.remove();
    
    var container = document.getElementsByClassName('container')[0];
    
    const program = document.createElement('div');
    program.setAttribute('id', 'program');
  
    const programName = document.createElement('h4');
    programName.setAttribute('id', 'programName');
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
  
    container.appendChild(program);
    program.appendChild(programName);
    program.appendChild(programPrice);
    program.appendChild(addButton);
    addButton.appendChild(icon);
    
    updateCartTotal();
    
    if (removeFromCart){
    
        var cartContainer = document.getElementsByClassName('cartContainer') [0];
    
        var cartRow = document.getElementsByClassName('cartRow');
    
        var total = 0;
      
        for ( var total = 0; total = cartRow.length; i++){
    
          var cartRows = cartRow [total];
    
          var priceElement = cartRows.getElementsByClassName('productPrice')[0];
          var quantityElement = cartRows.getElementsByClassName('quantityInput')[0];
          var price = parseFloat(priceElement.innerText.replace('$', ''));
          var quantityValue = quantityElement.value;
          total = total + (price * quantityValue);
    
        }

        total = Math.round(total * 100) / 100;
        
        var updateCartTitle = document.getElementById('cartTitle');
        updateCartTitle.innerHTML = `<h3>No products in your shopping cart</h3>`;
    
        var updateTotalCart = document.getElementById('totalCart');
        updateTotalCart.textContent = '';
        updateTotalCart.style.border = 'none';
      
        cartContainer.appendChild(updateCartTitle);
        cartContainer.appendChild(updateTotalCart);
      
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
    
      var cartContainer = document.getElementsByClassName('cartContainer')[0];
    
      var cartRow = document.getElementsByClassName('cartRow');
    
      var total = 0;
    
      for ( var i = 0; i < cartRow.length; i++){
    
        var cartRows = cartRow [i];
    
        var priceElement = cartRows.getElementsByClassName('productPrice')[0];
        var quantityElement = cartRows.getElementsByClassName('quantityInput')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantityValue = quantityElement.value;
        total = total + (price * quantityValue);
    
      }
        
      total = Math.round(total * 100) / 100;
    
      const totalCart = document.getElementById('totalCart');
      totalCart.style.borderTop = `solid black 3px`;
      totalCart.textContent = `Total: $` + total;
    
    
      const continueButton = document.createElement('button');
      continueButton.setAttribute('class', 'btn btn-success btn-cont');
      continueButton.setAttribute('id', 'continue');
      continueButton.textContent = `Continue` ;
    
      //const emptyTotalButton = document.createElement('button')
      //emptyTotalButton.setAttribute('class', 'btn btn-success btn-cont')
      //emptyTotalButton.textContent = `Empty`
      //totalShoppingCart.appendChild(emptyTotalButton)
      
      cartContainer.appendChild(totalCart);
      totalCart.appendChild(continueButton);
    
      }
     
    }