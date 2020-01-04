let state = sessionStorage.getItem('state');
let items = [
  {
    name: 'banana',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SL1500_.jpg'
  },
  {
    name: 'apples',
    img: 'https://www.kroger.com/product/images/xlarge/front/0000000004129'
  }
];
if (!state) {
  sessionStorage.setItem('state', JSON.stringify({ selectedItems: [] }));
}

let selectItems = name => {
  let input = document.getElementById(`input_${name}`);
  let value = input.value;
  let state = sessionStorage.getItem('state');
  state = JSON.parse(state);
  state.selectedItems.push({ name, value });
  sessionStorage.setItem('state', JSON.stringify(state));
};
let displayItems = () => {
  let container = document.getElementById('items');
  items.forEach(item => {
    container.innerHTML += `<div class="col-md-4"><img src="${item.img}" style="width: 100%; height: 50px;"><p>${item.name}</p>
    <input id="input_${item.name}" placeholder="quantity" type="number">
    <button onclick="selectItems('${item.name}')" class="btn btn-success">Add to shopping cart</button></div>`;
  });
};
let displaySelectedItems = () => {
  let container = document.getElementById('cart-container');
  let state = sessionStorage.getItem('state');
  state = JSON.parse(state);
  state.selectedItems.forEach(item => {
    container.innerHTML += `<p>${item.name}</p>
    <br>
    <p>${item.value}</p>`;
  });
};
