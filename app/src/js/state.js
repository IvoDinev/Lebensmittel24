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
    img: 'milch.png',
    price: 1.3
  },
  {
    name: 'Weihenstephan Haltbare Milch %0,1 Fett 1 L',
    img: 'milch2.png',
    price: 1.3
  },
  {
    name: 'Weihenstephan Frischer Kakao 1 L',
    img: 'kakao.png',
    price: 1.19
  },
  {
    name: 'Weihenstephan Butter 250g',
    img: 'butter.png',
    price: 3
  },
  {
    name: 'Weihenstephan Rahmjoghurt 150g',
    img: 'Joghurt.png',
    price: 0.89
  },
  {
    name: 'Weihenstephan Rahm-Romadur Käse 100g',
    img: 'kaese.png',
    price: 1.19
  },
  {
    name: 'Weihenstephan Rahm-Camembert 125g',
    img: 'Kaese2.png',
    price: 1.59
  },
  {
    name: 'Weihenstephan Sahne zum Kochen 250g',
    img: 'sahne.png',
    price: 1.17
  },
  {
    name: 'Weihenstephan Buttermilch 500g',
    img: 'buttermilch.png',
    price: 0.89
  }
];

let babyProducts = [
  {
    name: 'Aptamil 1 800g',
    img: 'https://www.edekanord-shop.de/product-images/761961/0/image496x496',
    price: 14.99
  },
  {
    name: 'Aptamil 2 800g',
    img: 'https://www.edekanord-shop.de/product-images/761204/0/image496x496',
    price: 14.89
  },
  {
    name: 'Aptamil Kindermilch 1+ 600g',
    img: 'https://www.edekanord-shop.de/product-images/321372/0/image496x496',
    price: 9.99
  },
  {
    name: 'Bio Hipp Couscous-Gemüse-Pfanne 190g',
    img: 'https://www.edekanord-shop.de/product-images/359419/0/image496x496',
    price: 1
  },
  {
    name: 'Bio Hipp Eintopf Kartoffel-Rindfleisch-Eintopf 250g',
    img: 'https://www.edekanord-shop.de/product-images/359376/0/image496x496',
    price: 1.25
  },
  {
    name: 'Bio Hipp Erdbeeren in Apfelgrieß 190g',
    img: 'https://www.edekanord-shop.de/product-images/565884/0/image496x496',
    price: 0.9
  }
];

let tobaccoProducts = [
  {
    name: 'Statt Zigaretten',
    img:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNHibJ6Weu3L4EmjMwvpP-UxL9SpyZRpRx2z57X9fU8HPcBoMpt1u1HfA-z5cVekM9L5u5KMLDqClzdWW2M9nx63SkxrrFJoAaU5t4U-l22gVxjjFqxbBZag&usqp=CAc',
    price: 9.79
  },
  {
    name: 'IQOS HEETS Bronze Selection',
    img:
      'https://ch.iqos.com/on/demandware.static/-/Sites-CH_Master_Catalog/default/dw6663d7e3/images/Heets-Packs-Sept/bronze_pack_desktop.png',
    price: 5
  },
  {
    name: 'IQOS HEETS Purple Label',
    img: 'https://gigarettes.com/97-large_default/heets-purple.jpg',
    price: 5
  }
];

let nonFoodProducts = [
  {
    name: 'Zewa Ultra Soft Toilettenpapier 4-lagig 8x150 Blatt',
    img:
      'https://cdn02.dm-static.com/images/mediacatalog/h7322540739442-1822061/productimage_1120x1720/1574219861000/7322540739442-1822061_org.png',
    price: 3
  },
  {
    name: 'fit Spülmittel Original Geschirrspülmittel 100 ml Flasche',
    img:
      'https://cdn.idealo.com/folder/Product/924/7/924733/s1_produktbild_gross/original-spuelmittel-0-5-l.jpg',
    price: 0.69
  }
];

let totalPrice = 0;
let totalItemsCount = 0;

if (!state) {
  sessionStorage.setItem('state', JSON.stringify({ selectedItems: [] }));
}

let selectItems = (name, price, img) => {
  let input = document.getElementById(`input_${name}`);
  value = Number.parseFloat(input.value);
  if (input.value > 100) {
    alert('Maximal 100 Produkte können auf einmal gewählt werden');
    return;
  }
  if (input.value <= 0) {
    alert('Anzahl muss eine positive Zahl sein!');
    return;
  }
  if (!Number.isInteger(value)) {
    alert('Anzahl muss eine ganze Zahl sein!');
    return;
  }
  state = sessionStorage.getItem('state');
  state = JSON.parse(state);
  let itemPresents = false;
  if (state.selectedItems.length <= 0) {
    state.selectedItems.push({ name, value, price, img });
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
      state.selectedItems.push({ name, value, price, img });
    }
  }
  sessionStorage.setItem('state', JSON.stringify(state));
  alert(`${value}` + ' item(s) added to shopping cart!');
};

let removeItems = (name, selectedItemsNumber) => {
  let input = document.getElementById(`input_${name}`);
  let index;
  itemsToRemove = Number.parseFloat(input.value);
  remainingItems = selectedItemsNumber - itemsToRemove;
  if (itemsToRemove > selectedItemsNumber) {
    alert(
      'Anzahl von Produkte zum Entfernen muss kleiner oder gleich der Anzahl der gewählte Produkte sein!'
    );
    return;
  }
  if (itemsToRemove === 0) {
    alert('Keine Produkte entfernt!');
    return;
  }
  state = sessionStorage.getItem('state');
  state = JSON.parse(state);
  for (const item of state.selectedItems) {
    if (item.name === name) {
      item.value = remainingItems;
      if (item.value === 0) {
        index = state.selectedItems.indexOf(item);
        state.selectedItems.splice(index, 1);
      }
      break;
    }
  }

  alert('Produkt(e) entfernt!');
  sessionStorage.setItem('state', JSON.stringify(state));
  location.reload();
};

let emptyShoppingCart = () => {
  state = sessionStorage.getItem('state');
  state = JSON.parse(state);
  state.selectedItems = [];
  alert('All items removed');
  sessionStorage.setItem('state', JSON.stringify(state));
  location.reload();
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
    case 'babyProducts':
      productsCategory = babyProducts;
      break;
    case 'tobaccoProducts':
      productsCategory = tobaccoProducts;
      break;
    case 'nonFoodProducts':
      productsCategory = nonFoodProducts;
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
      <button  onclick="selectItems('${item.name}', '${item.price}', '${
      item.img
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
  let cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML += `<div class="row" id="headingWrapper"></div>`;
  let state = sessionStorage.getItem('state');
  state = JSON.parse(state);
  totalItemsCount = state.selectedItems.length;
  if (state.selectedItems.length > 0) {
    document.getElementById(
      'headingWrapper'
    ).innerHTML += `<h3>Ihr Warenkorb enthält ${totalItemsCount} Artikel</h3><button type="button" class="btn btn-danger" onclick="emptyShoppingCart()">Warenkorb leeren</button>
      `;
    cartContainer.innerHTML += `<table class="table"><thead>
  <tr>
    <th scope="col"></th>
    <th scope="col">Artikel</th>
    <th scope="col">Menge</th>
    <th scope="col">Stückpreis</th>
    <th scope="col">Preis</th>
    <th scope="col">Produkt(e) entfernen</th>
  </tr>
  </thead>
  <tbody id="tbody">`;
    let tableContent = document.getElementById('tbody');

    state.selectedItems.forEach(item => {
      tableContent.innerHTML += `<tr><td><img src="${
        item.img
      }" height="150" width="150"></td>
      <td>${item.name}</td>
      <td>${item.value}</td>
      <td>${item.price} €</td>
      <td>${(Math.round(item.price * item.value * 100) / 100).toFixed(2)} €</td>
      <td><input id="input_${
        item.name
      }" type="number" min="1" step="1" max="100"><button onclick="removeItems('${
        item.name
      }', '${
        item.value
      }')" style="size: 10px"><img style="width: 10px; heigth: 10px;" src="../common-pictures/removeProducts.jpg"></button></td>
      </tr>`;
      totalPrice += item.value * item.price;
    });

    tableContent.innerHTML += `<tr><td></td><td></td><td></td><td></td><td></td><td style="width: 20%;"><h3>Gesamtpreis: ${(
      Math.round(totalPrice * 100) / 100
    ).toFixed(
      2
    )} €</h3><br><button type="button" class="btn btn-success btn-lg" onclick="">Bestellen</button></td></tr>`;
  } else {
    alert('Keine Artikel sind gewählt!');
    cartContainer.innerHTML += `<h3>Es befinden sich keine Artikel im Warenkorb</h3><button type="button" class="btn btn-danger btn-lg" onclick="toHomepage()">Weiter einkaufen</button>`;
  }
};

let toHomepage = () => {
  window.location.href = '../homepage/homepage.html';
};
