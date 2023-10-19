// Menu items array
const menu = [
    {
      name: 'Pizza', 
      price: 10
    },
    {
      name: 'Burger',
      price: 8
    },
    {
      name: 'Salad',
      price: 7
    }
  ];
  
  // Display menu items
  function displayMenu() {
    let menuDiv = document.getElementById('menu');
    menu.forEach(item => {
      let menuItem = `
        <div class="food-item">
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
          <button>Add to Order</button>
        </div>
      `;
      menuDiv.innerHTML += menuItem;
    });
  }
  
  displayMenu();
  
  // Order array
  let order = [];
  
  // Add click event to add buttons
  let addButtons = document.querySelectorAll('.food-item button');
  addButtons.forEach(button => {
    button.addEventListener('click', addToOrder);
  });
  
  // Add item to order
  function addToOrder(e) {
    // Get item details
    let name = e.target.parentElement.querySelector('h3').innerText;
    let price = e.target.parentElement.querySelector('p').innerText;
    
    // Add item to order array
    order.push({
      name: name,
      price: price
    });
    
    // Display order
    displayOrder();
  }
  
  // Display order
  function displayOrder() {
    let orderDiv = document.getElementById('order');
    orderDiv.innerHTML = '';
    let total = 0;
    order.forEach(item => {
      total += parseFloat(item.price.substring(1));
      let orderItem = `
        <p>${item.name} - ${item.price}</p>
      `;
      orderDiv.innerHTML += orderItem;
    });
    
    orderDiv.innerHTML += `<h3>Total: $${total.toFixed(2)}</h3>`;
  }