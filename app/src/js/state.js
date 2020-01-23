let state = sessionStorage.getItem('state');

let fruitsAndVegs = [
  {
    name: 'Äpfel (Stück)',
    img: 'https://img.rewe-static.de/1907545/21289326_digital-image.png',
    price: 0.5
  },
  {
    name: 'Bananen Gelb (Stück)',
    img:
      'http://www.dole.de/var/storage/images/produkte/bio-produkte/bio-bananen/374-39-ger-DE/Bio-Bananen_productdetailstageimage.png',
    price: 0.15
  },
  {
    name: 'Clementinen 1kg',
    price: 1.69,
    img:
      'https://img.rewe-static.de/8380889/30248452_digital-image.png?output-quality=75&fit=inside|600:600'
  },
  {
    name: 'Erdbeeren 500g',
    price: 2.5,
    img:
      'http://marktvertrieb.de/fileadmin/_processed_/csm_image_erdbeeren_fa134cc846.png'
  },
  {
    name: 'Himbeeren 125g',
    img:
      'http://marktvertrieb.de/fileadmin/_processed_/csm_image_himbeeren_d5b4471b13.png',
    price: 1.11
  },
  {
    name: 'Kartoffeln 2,5kg',
    img:
      'https://img.rewe-static.de/2026616/21506395_digital-image.png?output-quality=75&fit=inside|600:600',
    price: 2.49
  },
  {
    name: 'Knoblauch 100g',
    img:
      'https://www.konsum-leipzig.de/media/image/e9/9c/bc/DV019_P999991484215177468_DETb2XH0qB8qdq2T.png',
    price: 0.59
  },
  {
    name: 'Kopfsalat, Stück',
    img: 'https://img.rewe-static.de/0482684/11339830_digital-image.png',
    price: 1.49
  },
  {
    name: 'Paprika 500g',
    img:
      'http://proplanet-label.com/images/produkte/produktuebersicht/food/paprika.png',
    price: 1.69
  },
  {
    name: 'Rotkohl, Stück',
    img:
      'https://img.rewe-static.de/2430479/24569670_digital-image.png?output-quality=75&fit=inside|600:600',
    price: 0.79
  },
  {
    name: 'Weißkohl, Stück',
    img: 'https://img.rewe-static.de/0570290/24569669_digital-image.png',
    price: 0.59
  },
  {
    name: 'Zwiebeln 500g',
    price: 0.69,
    img: 'http://fresh.bplaced.net/image/gem/zwiebel2.png'
  }
];

let milkproducts = [
  {
    name: 'Weihenstephan Haltbare Milch  %3,5 Fett 1 L',
    img: 'https://www.molkerei-weihenstephan.de/fileadmin/media/produkte/milch/frische_milch/fmilch_1l_35.png',
    price: 1.3
  },
  {
    name: 'Weihenstephan Haltbare Milch %0,1 Fett 1 L',
    img: 'https://www.molkerei-weihenstephan.de/fileadmin/media/produkte/milch/haltbare_milch/hmilch_1l_01.png',
    price: 1.3
  },
  {
    name: 'Weihenstephan Frischer Kakao 1 L',
    img: 'https://www.molkerei-weihenstephan.de/fileadmin/media/produkte/kakao/kakao_1l.png',
    price: 1.19
  },
  {
    name: 'Weihenstephan Butter 250g',
    img: 'https://www.abholen.de/media/image/e6/fa/a1/Weihenstephan_butter5a7d12ed9dfcd.png',
    price: 3
  },
  {
    name: 'Weihenstephan Rahmjoghurt 150g',
    img: 'https://www.molkerei-weihenstephan.de/fileadmin/media/produkte/naturjoghurt/rajo_500g_natur_10fett.png',
    price: 0.89
  },
  {
    name: 'Weihenstephan Rahm-Romadur Käse 100g',
    img: 'https://www.molkerei-weihenstephan.de/fileadmin/media/produkte/kaese/kaese_rahm_romadur.png',
    price: 1.19
  },
  {
    name: 'Weihenstephan Rahm-Camembert 125g',
    img: 'https://www.molkerei-weihenstephan.de/fileadmin/media/produkte/kaese/kaese_camembert_rahm_cremigster.png',
    price: 1.59
  },
  {
    name: 'Weihenstephan Sahne zum Kochen 250g',
    img: 'https://www.molkerei-weihenstephan.de/fileadmin/media/produkte/sahne/sahne_250g_zum_kochen.png',
    price: 1.17
  },
  {
    name: 'Weihenstephan Buttermilch 500g',
    img: 'https://www.molkerei-weihenstephan.de/fileadmin/media/unternehmen/Weg_der_Milch/wegbuttermilch.png',
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

let drinksProducts = [
  {
    name: 'Apfelsaft 1L',
    img:
      'https://www.konsum-leipzig.de/media/image/26/93/d7/DV019_4311596461868_PERIXhfciiUbqWDJ.png',
    price: 0.79
  },
  {
    name: 'Karottensaft 1L',
    img:
      'https://www.konsum-leipzig.de/media/image/5c/7c/6d/DV019_4311596455188_VOR4xs9r6Hx07z1D.png',
    price: 0.74
  },
  {
    name: 'Multivitaminsaft 1L',
    img:
      'https://www.konsum-leipzig.de/media/image/0f/61/eb/DV019_4311596456246_PERMWKKSuBgjYVgq.png',
    price: 0.89
  },
  {
    name: 'Orangensaft 1L',
    img:
      'https://www.konsum-leipzig.de/media/image/79/11/d1/DV019_4311596442218_PER5hW7OXWhEf7TI.png',
    price: 0.85
  },
  {
    name: 'Tomatensaft 1L',
    img:
      'https://www.konsum-leipzig.de/media/image/61/1b/fa/DV019_4311596455126_PER7HXBBkUuLfsew.png',
    price: 0.99
  },
  {
    name: 'Mineralwasser Classic 1,5L',
    img:
      'https://www.konsum-leipzig.de/media/image/24/90/d1/DV019_4311596435944_PERiDRZzCDrsZu1U.png',
    price: 0.19
  },
  {
    name: '12er Kasten Mineralwasser Sprudel 1L',
    img:
      'https://www.konsum-leipzig.de/media/image/6e/8f/58/DV019_4001513098467_PERQnZ0qlffRpmHL.png',
    price: 6.99
  },
  {
    name: 'Mineralwasser Medium 1,5L',
    img:
      'https://www.konsum-leipzig.de/media/image/ef/c9/d6/DV019_4311596435968_PERLsby3DWBBJpYy.png',
    price: 0.19
  },
  {
    name: '12er Kasten Mineralwasser Medium 1L',
    img:
      'https://www.konsum-leipzig.de/media/image/5f/7e/9b/DV019_4001513098474_PERJw6cPlzjyWNYF.png',
    price: 6.99
  },
  {
    name: 'Mineralwasser Still 1,5L',
    img:
      'https://www.konsum-leipzig.de/media/image/59/9b/37/DV019_4311596435982_PER2OmMD0cYnr5ME.png',
    price: 0.19
  },
  {
    name: '6er Kasten Mineralwasser Still 1,5L',
    img:
      'https://www.konsum-leipzig.de/media/image/c9/b8/ab/DV019_4001513100269_PERjBcqUddlujJ0G.png',
    price: 5.49
  },
  {
    name: '11ver Kasten Jever',
    img: 'https://www.konsum-leipzig.de/media/image/cb/a6/14/909.jpg',
    price: 7.79
  },
  {
    name: '20ger Kasten Radeberger',
    img:
      'https://www.konsum-leipzig.de/media/image/fa/f7/a1/DV019_4014388002026_PERdCydKVwxcETr4.png',
    price: 14.79
  },
  {
    name: '20ger Kasten Hasseröder',
    img:
      'https://www.konsum-leipzig.de/media/image/44/dc/8b/DV019_4014558126835_PERYfZGypKU0F6Ga.png',
    price: 13.99
  },
  {
    name: 'Weißwein 0,75L',
    img:
      'https://www.konsum-leipzig.de/media/image/f8/f4/b7/DV019_4014741380112_VORABMHRbkJK8tWU.png',
    price: 3.99
  },
  {
    name: 'Rotwein 0.75L',
    img:
      'https://www.konsum-leipzig.de/media/image/b2/93/48/DV019_3263280119023_VORU0npAOOiqPfDL.png',
    price: 2.99
  },
  {
    name: 'Sekt 0.75L',
    img:
      'https://www.konsum-leipzig.de/media/image/e5/a6/82/DV019_4400066903530_VORHCW8xvQURCGZ5.png',
    price: 3.99
  },
  {
    name: 'Vodka 0,7L',
    img:
      'https://www.konsum-leipzig.de/media/image/76/49/ce/DV019_7312040017683_VORBgtJOyFcjUX8v.png',
    price: 14.99
  },
  {
    name: 'Rum 0,7L',
    img:
      'https://www.konsum-leipzig.de/media/image/53/6f/cf/DV019_5000299223017_VOR9dIAEDC8sivch.png',
    price: 11.99
  },
  {
    name: 'Pfefferminzlikör 0,7L',
    img:
      'https://www.konsum-leipzig.de/media/image/99/f1/0e/DV019_4400065403109_VORAyaBtFhc4A8Du.png',
    price: 3.69
  },
  {
    name: 'Tequila 0,7L',
    img:
      'https://www.konsum-leipzig.de/media/image/7a/b6/6f/DV019_4062400115483_VORJKXzQjhcu6xpf.png',
    price: 14.99
  },
  {
    name: 'Whiskey 0,7L',
    img:
      'https://www.konsum-leipzig.de/media/image/7a/c1/d2/DV019_5010106113127_VORiMyAqvks5jUPc.png',
    price: 14.99
  }
];

let meatFishProducts = [
  {
    name: 'Alaska-Seelachsfilet 200g',
    img:
      'https://www.konsum-leipzig.de/media/image/64/06/83/DV019_4311501669051_PERJWh9KaUirHeAf.png',
    price: 2.49
  },
  {
    name: 'Fleischklösschen',
    img:
      'https://www.konsum-leipzig.de/media/image/81/91/2d/DV019_4311501659724_PER3rrrL0VHeQf0N_600x600.png',
    price: 1.99
  },
  {
    name: 'Frische Bratwurst',
    img:
      'https://www.konsum-leipzig.de/media/image/a3/ea/63/GUG_BRATWURSTGROB_VOR.png',
    price: 1.49
  },
  {
    name: 'Gemischtes Hackfleisch 500g',
    img:
      'https://www.aldi-nord.de/content/dam/aldi/germany/angebote/2019/kw30/artikelbilder/8680_30-2019_Hackfleisch_gemischt_0000_ON.png/_jcr_content/renditions/opt.1250w.png.res/1562071518309/opt.1250w.png',
    price: 2.49
  },
  {
    name: 'Hähnchenschnitzel 300g',
    img:
      'https://www.konsum-leipzig.de/media/image/0a/85/a1/DV019_4311501629130_PER8sKTwqfX37wxQ.png',
    price: 2.29
  },
  {
    name: 'Hähnchenfilet 500g',
    img:
      'https://www.konsum-leipzig.de/media/image/51/1f/fa/8830134528_1_print_600x600.png',
    price: 2.99
  },
  {
    name: 'Hähnchenkeulen 1,1kg',
    img:
      'https://www.konsum-leipzig.de/media/image/c3/66/90/GUG_HAEHNCHENKEULEN_VOR.png',
    price: 2.99
  },
  {
    name: 'Hühnerfrikasse',
    img:
      'https://www.konsum-leipzig.de/media/image/db/13/d3/DV019_4311596419050_PERD4twUiX3HmqPK_600x600.png',
    price: 1.99
  },
  {
    name: 'Kabeljaufilet 300g',
    img:
      'https://www.konsum-leipzig.de/media/image/aa/f5/86/DV019_4311501671351_PERsmK6V4S85T9Sl.png',
    price: 3.99
  },
  {
    name: 'Lachsfilet 300g',
    img:
      'https://www.konsum-leipzig.de/media/image/10/42/0b/DV019_4311501668993_PERBzkgLBJrHubzG.png',
    price: 4.79
  },
  {
    name: 'Puten Steak 500g',
    img:
      'https://www.konsum-leipzig.de/media/image/bb/c6/9d/GUG_PUTENSCHNITZEL_VOR.png',
    price: 3.59
  },
  {
    name: 'Seelachsfilet ohne Haut 300g',
    img:
      'https://www.konsum-leipzig.de/media/image/bd/88/fe/DV019_4311501669082_PERbTYP6QAxJldzL.png',
    price: 2.99
  },
  {
    name: 'Schinken Gulasch 500g',
    img: 'https://www.konsum-leipzig.de/media/image/ab/66/d9/5551427276.png',
    price: 3.49
  },
  {
    name: 'Schinken Schnitzel 500g',
    img:
      'https://www.konsum-leipzig.de/media/image/3a/15/f1/5551475824_1_print.png',
    price: 3.29
  },
  {
    name: 'Schweine Minutensteaks 400g',
    img: 'https://www.konsum-leipzig.de/media/image/ec/a4/06/5551475817.png',
    price: 2.99
  },
  {
    name: 'Schweine Schnitzel 300g',
    img:
      'https://www.konsum-leipzig.de/media/image/00/c8/76/DV019_4311501443101_PERl6M8jwBhcQNIz.png',
    price: 2.29
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
  let itemIsPresent = false;
  if (state.selectedItems.length <= 0) {
    state.selectedItems.push({ name, value, price, img });
  } else {
    for (const item of state.selectedItems) {
      if (item.name == name) {
        item.value = Number.parseInt(item.value) + Number.parseInt(value);
        itemIsPresent = true;
        break;
      }
    }
    if (!itemIsPresent) {
      state.selectedItems.push({ name, value, price, img });
    }
  }
  sessionStorage.setItem('state', JSON.stringify(state));
  alert(`${value}` + ' Produkte wurden in den Warenkorb hinzugefügt!');
};

let removeItems = (name, selectedItemsNumber) => {
  let input = document.getElementById(`input_${name}`);
  let index;
  itemsToRemove = Number.parseFloat(input.value);
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
  remainingItems = selectedItemsNumber - itemsToRemove;
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
  alert('Alle Artikel wurden vom Warenkorb entfernt!');
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
    case 'drinksProducts':
      productsCategory = drinksProducts;
      break;
    case 'meatFishProducts':
      productsCategory = meatFishProducts;
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
    ).toFixed(2)} €
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
      <td>${(Math.round(item.price * 100) / 100).toFixed(2)} €</td>
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
    )} €</h3><br><button type="button" class="btn btn-success btn-lg" onclick="toOrderPage()">Bestellen</button></td></tr>`;
  } else {
    alert('Keine Artikel sind gewählt!');
    cartContainer.innerHTML += `<h3>Es befinden sich keine Artikel im Warenkorb</h3><button type="button" class="btn btn-danger btn-lg" onclick="toHomepage()">Weiter einkaufen</button>`;
  }
};

let toHomepage = () => {
  window.location.href = '../homepage/homepage.html';
};

let toOrderPage = () => {
  window.location.href = '../orderPage/order.html';
};
