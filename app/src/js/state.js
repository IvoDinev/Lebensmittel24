let state = sessionStorage.getItem('state');

let fruitsAndVegs = [
  {
    name: 'banana',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SL1500_.jpg',
    price: 1
  },
  {
    name: 'apples',
    img: 'https://www.kroger.com/product/images/xlarge/front/0000000004129',
    price: 1.5
  }
];

let milkproducts = [
  {
    name: 'Weihenstephan Haltbare Milch  %3,5 Fett 1 L',
    img: './milch.png',
    price: 1.3
  },
  {
    name: 'Weihenstephan Haltbare Milch %0,1 Fett 1 L',
    img: './milch2.png',
    price: 1.3
  },
  {
    name: 'Weihenstephan Frischer Kakao 1 L',
    img: './kakao.png',
    price: 1.19
  },
  {
    name: 'Weihenstephan Butter 250g',
    img: './butter.png',
    price: 3
  },
  {
    name: 'Weihenstephan Rahmjoghurt 150g',
    img: './Joghurt.png',
    price: 0.89
  },
  {
    name: 'Weihenstephan Rahm-Romadur Käse 100g',
    img: './kaese.png',
    price: 1.19
  },
  {
    name: 'Weihenstephan Rahm-Camembert 125g',
    img: './Kaese2.png',
    price: 1.59
  },
  {
    name: 'Weihenstephan Sahne zum Kochen 250g',
    img: './sahne.png',
    price: 1.17
  },
  {
    name: 'Weihenstephan Buttermilch 500g',
    img: './buttermilch.png',
    price: 0.89
  }
];

let otherProducts = [
  {
    name: 'Zigaretten',
    img:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNHibJ6Weu3L4EmjMwvpP-UxL9SpyZRpRx2z57X9fU8HPcBoMpt1u1HfA-z5cVekM9L5u5KMLDqClzdWW2M9nx63SkxrrFJoAaU5t4U-l22gVxjjFqxbBZag&usqp=CAc',
    price: 9.79
  }
];

let totalPrice = 0;

if (!state) {
  sessionStorage.setItem('state', JSON.stringify({ selectedItems: [] }));
}

let selectItems = (name, price) => {
  let input = document.getElementById(`input_${name}`);
  if (input.value > 100) {
    alert('Maximal 100 Produkte können auf einmal gewählt werden');
    return;
  }
  if (input.value <= 0) {
    alert('Anzahl muss eine positive Zahl sein!');
    return;
  }
  if (!Number.isInteger(input.value)) {
    alert('Anzahl muss eine ganze Zahl sein!');
    return;
  }
  value = input.value;
  state = sessionStorage.getItem('state');
  state = JSON.parse(state);
  let itemPresents = false;
  if (state.selectedItems.length <= 0) {
    state.selectedItems.push({ name, value, price });
  } else {
    for (const item of state.selectedItems) {
      if (item.name == name) {
        let newValue = Number.parseInt(item.value) + Number.parseInt(value);
        item.value = newValue;
        itemPresents = true;
        break;
      }
    }
    if (!itemPresents) {
      state.selectedItems.push({ name, value, price });
    }
  }
  sessionStorage.setItem('state', JSON.stringify(state));
  alert(`${value}` + ' item(s) added to shopping cart!');
};

let displayProducts = (productsPage, products) => {
  let container = document.getElementById(productsPage);
  let productsCategory = [];

  switch (products) {
    case 'milkproducts':
      productsCategory = milkproducts;
      break;
    case 'fruitsAndVegs':
      productsCategory = fruitsAndVegs;
      break;
    case 'otherProducts':
      productsCategory = otherProducts;
      break;
  }
  productsCategory.forEach(item => {
    container.innerHTML += `<div class="items">
    <div class="mprodukt">
      <div class="images">        
        <img src="${item.img}" height="250" width="200">
      </div>           
      <p>${item.name}</p>
      <label>Anzahl        
        <input id="input_${item.name}" type="number" min="1" step="1" max="100">
      </label>      
      <button  onclick="selectItems('${item.name}', '${
      item.price
    }')" class="w3-button w3-xlarge w3-black" data-toggle="tooltip"
      title="Zum Warenkorb hinzufügen!"> <img src="../../common-pictures/addToShoppingCart.png"> </button>
      <br>      
      <label style="position: absolute; left: 110px">Einzelpreis:
      </label>
      <p id="price_${item.name}" style="position: absolute; left: 195px">${(
      Math.round(item.price * 100) / 100
    ).toFixed(2)}€
      </p>
    </div>
  </div>`;
  });
};

let displaySelectedItems = () => {
  let container = document.getElementById('cart-container');
  let state = sessionStorage.getItem('state');
  state = JSON.parse(state);
  if (state.selectedItems.length > 0) {
    state.selectedItems.forEach(item => {
      container.innerHTML += `<p>${item.name}</p>
    <p>Anzahl: ${item.value}</p>
    <p>Gesamtpreis: ${(Math.round(item.price * item.value * 100) / 100).toFixed(
      2
    )}</p>`;
      totalPrice += item.value * item.price;
      console.log(totalPrice);
    });
    container.innerHTML += `<p>Warenkorb Gesamtpreis: ${(
      Math.round(totalPrice * 100) / 100
    ).toFixed(2)}</p>`;
  } else {
    alert('No selected items');
  }
};
