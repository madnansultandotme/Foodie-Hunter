import { foodItem } from "./fooditem.js";
console.log(foodItem);
document.getElementById("food-item").classList.toggle("food-item");
function displayItems() {
  var biryani = document.getElementById("biryani");
  var chicken = document.getElementById("chicken");
  var paneer = document.getElementById("paneer");
  var Vegetable = document.getElementById("Vegetable");
  var chinese = document.getElementById("chinese");
  var south_pakistan = document.getElementById("south-pakistan");

  const biryaniData = foodItem.filter((item) => item.category == "biryani");
  console.log(biryaniData);
  const chickenData = foodItem.filter((item) => item.category == "chicken");
  console.log(chickenData);
  const paneerData = foodItem.filter((item) => item.category == "paneer");
  console.log(paneerData);
  const VegetableData = foodItem.filter((item) => item.category == "Vegetable");
  console.log(VegetableData);
  const chineseData = foodItem.filter((item) => item.category == "chinese");
  console.log(chineseData);
  const south_pakistanData = foodItem.filter(
    (item) => item.category == "south-pakistan"
  );
  console.log(south_pakistanData);

  biryaniData.map((item) => {
    var itemcard = document.createElement("div");
    // itemcard.setAttribute("id", "item-card");
    itemcard.setAttribute("class", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    //star
    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;
    // heart
    var heart = document.createElement("i");
    heart.setAttribute("class", "fa-regular fa-heart add-to-cart");
    heart.setAttribute("id", "heart-del");
    // console.log(heart);
    // heart.setAttribute("id", item.id);
    // heart.innerText = " " + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);
    //img
    var img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "100px";
    img.classList.add("img");
    img.src = item.img;
    //name
    var Item_name = document.createElement("p");
    Item_name.setAttribute("id", "item-name");
    Item_name.innerText = item.name;
    //price
    var Item_price = document.createElement("p");
    Item_price.setAttribute("id", "item-price");
    Item_price.innerText = "Price : $" + item.price;

    itemcard.appendChild(cardTop);
    itemcard.appendChild(img);
    itemcard.appendChild(Item_name);
    itemcard.appendChild(Item_price);

    biryani.appendChild(itemcard);
  });
  chickenData.map((item) => {
    var itemcard = document.createElement("div");
    // itemcard.setAttribute("id", "item-card");
    itemcard.setAttribute("class", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    //star
    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;
    // heart
    var heart = document.createElement("i");
    heart.setAttribute("class", "fa-regular fa-heart add-to-cart");
    // heart.setAttribute("id", item.id);
    // heart.innerText = " " + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);
    //img
    var img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "100px";
    img.classList.add("img");
    img.src = item.img;
    //name
    var Item_name = document.createElement("p");
    Item_name.setAttribute("id", "item-name");
    Item_name.innerText = item.name;
    //price
    var Item_price = document.createElement("p");
    Item_price.setAttribute("id", "item-price");
    Item_price.innerText = "Price : $" + item.price;

    itemcard.appendChild(cardTop);
    itemcard.appendChild(img);
    itemcard.appendChild(Item_name);
    itemcard.appendChild(Item_price);

    chicken.appendChild(itemcard);
  });
  paneerData.map((item) => {
    var itemcard = document.createElement("div");
    // itemcard.setAttribute("id", "item-card");
    itemcard.setAttribute("class", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    //star
    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;
    // heart
    var heart = document.createElement("i");
    heart.setAttribute("class", "fa-regular fa-heart add-to-cart");
    // heart.setAttribute("id", item.id);
    // heart.innerText = " " + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);
    //img
    var img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "100px";
    img.classList.add("img");
    img.src = item.img;
    //name
    var Item_name = document.createElement("p");
    Item_name.setAttribute("id", "item-name");
    Item_name.innerText = item.name;
    //price
    var Item_price = document.createElement("p");
    Item_price.setAttribute("id", "item-price");
    Item_price.innerText = "Price : $" + item.price;

    itemcard.appendChild(cardTop);
    itemcard.appendChild(img);
    itemcard.appendChild(Item_name);
    itemcard.appendChild(Item_price);

    paneer.appendChild(itemcard);
  });
  VegetableData.map((item) => {
    var itemcard = document.createElement("div");
    // itemcard.setAttribute("id", "item-card");
    itemcard.setAttribute("class", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    //star
    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;
    // heart
    var heart = document.createElement("i");
    heart.setAttribute("class", "fa-regular fa-heart add-to-cart");
    // heart.setAttribute("id", item.id);
    // heart.innerText = " " + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);
    //img
    var img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "100px";
    img.classList.add("img");
    img.src = item.img;
    //name
    var Item_name = document.createElement("p");
    Item_name.setAttribute("id", "item-name");
    Item_name.innerText = item.name;
    //price
    var Item_price = document.createElement("p");
    Item_price.setAttribute("id", "item-price");
    Item_price.innerText = "Price : $" + item.price;

    itemcard.appendChild(cardTop);
    itemcard.appendChild(img);
    itemcard.appendChild(Item_name);
    itemcard.appendChild(Item_price);

    Vegetable.appendChild(itemcard);
  });
  chineseData.map((item) => {
    var itemcard = document.createElement("div");
    // itemcard.setAttribute("id", "item-card");
    itemcard.setAttribute("class", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    //star
    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;
    // heart
    var heart = document.createElement("i");
    heart.setAttribute("class", "fa-regular fa-heart add-to-cart");
    // heart.setAttribute("id", item.id);
    // heart.innerText = " " + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);
    //img
    var img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "100px";
    img.classList.add("img");
    img.src = item.img;
    //name
    var Item_name = document.createElement("p");
    Item_name.setAttribute("id", "item-name");
    Item_name.innerText = item.name;
    //price
    var Item_price = document.createElement("p");
    Item_price.setAttribute("id", "item-price");
    Item_price.innerText = "Price : $" + item.price;

    itemcard.appendChild(cardTop);
    itemcard.appendChild(img);
    itemcard.appendChild(Item_name);
    itemcard.appendChild(Item_price);

    chinese.appendChild(itemcard);
  });
  south_pakistanData.map((item) => {
    var itemcard = document.createElement("div");
    // itemcard.setAttribute("id", "item-card");
    itemcard.setAttribute("class", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    //star
    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;
    // heart
    var heart = document.createElement("i");
    heart.setAttribute("class", "fa-regular fa-heart");
    // heart.setAttribute("id", item.id);
    // heart.innerText = " " + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);
    //img
    var img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "100px";
    img.classList.add("img");
    img.src = item.img;
    //name
    var Item_name = document.createElement("p");
    Item_name.setAttribute("id", "item-name");
    Item_name.innerText = item.name;
    //price
    var Item_price = document.createElement("p");
    Item_price.setAttribute("id", "item-price");
    Item_price.innerText = "Price : $" + item.price;

    itemcard.appendChild(cardTop);
    itemcard.appendChild(img);
    itemcard.appendChild(Item_name);
    itemcard.appendChild(Item_price);

    south_pakistan.appendChild(itemcard);
  });
}
displayItems();

const categoryListData = [
  ...new Map(foodItem.map((item) => [item["category"], item])).values(),
];
console.log(categoryListData);

function categoryLists() {
  var categoryList = document.getElementById("category-list");
  categoryListData.map((item) => {
    var listCard = document.createElement("div");
    listCard.setAttribute("class", "list-Card");
    listCard.style.paddingBottom = "30px";
    var listimg = document.createElement("img");
    listimg.style.width = "50px";
    listimg.style.height = "50px";
    listimg.style.borderRadius = "50%";
    // listimg.style.display='inline';
    listimg.classList.add("img");
    // listimg.setAttribute('class','list-card')
    listimg.src = item.img;
    var listname = document.createElement("a");
    listname.setAttribute("class", "list-name");
    // listname.style.paddingBottom='300px';

    listname.innerText = item.category;
    listname.setAttribute("href", "#" + item.category);
    listCard.appendChild(listimg);
    listCard.appendChild(listname);

    var cloneListCard = listCard.cloneNode(true);
    categoryList.appendChild(listCard);
  });
}
categoryLists();

document.querySelectorAll(".add-to-cart").forEach((item) => {
  item.addEventListener("click", addToCart);
});

var cartData = [];
function addToCart() {
  const parnetodebyme = this.parentNode;
  // console.log(parnetodebyme);
  const secondChild = parnetodebyme.childNodes[1];
  // console.log(secondChild);

  var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
  console.log(itemToAdd);
  var itemObj = foodItem.find((Element) => Element.name == itemToAdd);

  console.log(itemObj);

  var index = cartData.indexOf(itemObj);
  console.log(index, itemObj.id);
  if (index == -1) {
    console.log("Item ID:", itemObj.id);
    // const element =
    // document.querySelector(".fa-heart");
    // document.getElementById(itemObj.id);
    // console.log("Element:", element);
    // if (element) {
    //   element.classList.add("toggle-heart");
    // }
    const obj = secondChild.classList.add("toggle-heart");
    // console.log(obj);
    // = document
    //   .getElementById(itemObj.id)
    //   .classList.add(".toggle-heart");
    // console.log(obj);
    // ?.classList?.toggle('toggle-heart');
    cartData = [...cartData, itemObj];
    console.log(cartData);
  } else if (index > -1) {
    alert("Added to cart");
  }
  document.getElementById("cart-plus").innerText =
    " " + cartData.length + " Items";
  // document.getElementById('m-cart-plus').innerText=' ' +cartData.length+ ' Items';

  totalAmount();
  cartItems();
}

function cartItems() {
  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  cartData.map((item) => {
    var tableRow = document.createElement("tr");

    var rowData1 = document.createElement("td");
    var img = document.createElement("img");
    img.src = item.img;
    rowData1.appendChild(img);

    var rowData2 = document.createElement("td");
    rowData2.innerText = item.name;

    var rowData3 = document.createElement("td");
    var btn1 = document.createElement("button");
    btn1.setAttribute("class", "decrease-item");
    btn1.innerText = "-";
    var span = document.createElement("span");
    span.innerText = item.quantity;
    var btn2 = document.createElement("button");
    btn2.setAttribute("class", "increase-item");
    btn2.innerText = "+";

    rowData3.appendChild(btn1);
    rowData3.appendChild(span);
    rowData3.appendChild(btn2);

    var rowData4 = document.createElement("td");
    rowData4.innerText = item.price;

    tableRow.appendChild(rowData1);
    tableRow.appendChild(rowData2);
    tableRow.appendChild(rowData3);
    tableRow.appendChild(rowData4);

    tableBody.appendChild(tableRow);
  });
  document.querySelectorAll(".increase-item").forEach((item) => {
    item.addEventListener("click", incrementItem);
  });

  document.querySelectorAll(".decrease-item").forEach((item) => {
    item.addEventListener("click", decrementItem);
  });
}
var currPrice = 0;

// function incrementItem() {
//   let itemToInc = this.parentNode.previousSibling.innerText;
//   var incObj = cartData.find((Element) => Element.name == itemToInc);
//   incObj.quantity += 1;
//   currPrice =
//     (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
//     (incObj.quantity - 1);
//   incObj.price = currPrice * incObj.quantity;
//   totalAmount();
//   cartItems();
// }
function incrementItem() {
  let itemToInc = this.parentNode.previousSibling.innerText;
  console.log(itemToInc);
  var incObj = cartData.find((element) => element.name == itemToInc);
  incObj.quantity += 1;

  currPrice =
    (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
    (incObj.quantity - 1);
  incObj.price = currPrice * incObj.quantity;
  totalAmount();
  cartItems();
}
var flag = false;
//function decrementItem() {
//   let itemToDec = this.parentNode.previousSibling.innerText;

//   console.log("itemto  ", itemToDec);
//   let decObj = cartData.find((Element) => Element.name == itemToDec);
//   let ind = cartData.indexOf(decObj);
//   console.log(decObj);

//   console.log(close);
//   // console.log(ind);
//   // const parnetodeme = document.querySelector(".fa-heart");
//   // console.log(parnetodeme);
//   // const secondChildme = parnetodeme.childNodes[1];
//   // console.log(secondChildme);
//   if (decObj.quantity > 1) {
//     currPrice =
//       (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) /
//       decObj.quantity;

//     decObj.quantity -= 1;
//     decObj.price = currPrice * decObj.quantity;
//   } else {
//     document.getElementById(decObj).classList.remove("toggle-heart");
//     // console.log(decObj.id);
//     // const parnetodeme = document.querySelector(".fa-heart");
//     // console.log(parnetodeme);
//     // parnetodeme.classList.toggle("toggle-heart");
//     cartData.splice(ind, 1);
//     document.getElementById("cart-plus").innerText =
//       " " + cartData.length + " Items";
//     // document.getElementById("cart-plus").innerText=' '+ cartData.length;

//     if (cartData.length < 1 && flag) {
//       document.getElementById("food-item").classList.toggle("food-item");
//       document.getElementById("category-list").classList.toggle("food-item");
//       //  document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle') ;
//       document.getElementById("cart-page").classList.toggle("cart-toggle");
//       // document.getElementById('category-header').classList.toggle('toggle-category')  ;
//       document.getElementById("checkout").classList.toggle("cart-toggle");
//       flag = false;
//       alert("currently no item in cart");
//     }
//   }
//   totalAmount();
//   cartItems();
// }
currPrice = 0;
function decrementItem() {
  console.log("--------------------------");
  let itemToInc = this.parentNode.previousSibling.innerText;
  console.log("Name", itemToInc);
  let decObj = cartData.find((element) => element.name == itemToInc);
  console.log(document.querySelectorAll(".card-top"));
  let ind = cartData.indexOf(decObj);
  console.log("ind", ind);
  if (decObj.quantity > 1) {
    currPrice =
      (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) /
      decObj.quantity;
    decObj.quantity -= 1;
    decObj.price = currPrice * decObj.quantity;
  } else {
    const heartElements = document.querySelectorAll(".fa-heart");
    for (const heartElement of heartElements) {
      if (decObj.name === itemToInc) {
        heartElement.classList.remove("toggle-heart");
      } else {
        console.log("cat");
      }
    }

    // //console.log(heartDel.target.cloeset(".card-top"));
    // // const finddel=heartDel.find(item =>item.id===decObj.id)
    // // console.log(finddel);
    // console.log(heartDel);
    // document
    //   //.querySelectorAll(".heart-del")
    //   .getElementById(decObj.id)
    //   ?.classList.remove("toggle-heart");
    // console.log(decObj.heart.values);
    // // const attri = document.getAttribute(decObj.);
    // //  console.log(attri);
    // cartData.splice(ind, 1);
    // document.getElementById("cart-plus").innerText =
    //   " " + cartData.length + " Items";
    // const heartDel = this.parentNode.parentNode.querySelector(".fa-heart");
    // console.log(heartDel);
    // console.log(this.parentNode.parentNode);

    // document
    //   .getElementById("heart-del")
    //   .find(decObj.id)
    //   .classList.toggle("toggle-heart");
    cartData.splice(ind, 1);
    document.getElementById("cart-plus").innerText =
      " " + cartData.length + " Items";
    // document.getElementById('m-cart-plus').innerText= ' ' + cartData.length;
    if (cartData.length < 1 && flag) {
      document.getElementById("food-item").classList.toggle("food-item");
      document.getElementById("category-list").classList.toggle("food-item");
      // document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
      document.getElementById("cart-page").classList.toggle("cart-toggle");
      // document.getElementById('category-header').classList.toggle('toggle-category');
      document.getElementById("checkout").classList.toggle("cart-toggle");
      flag = false;
      alert("Currently no item in cart!");
      console.log(flag);
    }
  }
  totalAmount();
  cartItems();
}

function totalAmount() {
  var sum = 0;
  cartData.map((item) => {
    sum += item.price;
  });
  document.getElementById("total-item").innerText =
    "Total Item : " + cartData.length;
  document.getElementById("total-price").innerText = "Total Price : $ " + sum;
  // document.getElementById('m-total-amount').innerText= 'Total Price : $ ' + sum;
}

document.getElementById("cart-plus").addEventListener("click", cartToggle);
//document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

flag = false;
function cartToggle() {
  if (cartData.length > 0) {
    document.getElementById("food-item").classList.toggle("food-item");
    document.getElementById("category-list").classList.toggle("food-item");
    //document.getElementById('category-header').classList.toggle('toggle-category');
    //document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
    document.getElementById("cart-page").classList.toggle("cart-toggle");
    document.getElementById("checkout").classList.toggle("cart-toggle");
    flag = true;
    console.log(flag);
  } else {
    alert("Currently no item in cart!");
  }
}

// document.getElementById("add-address").addEventListener("click", addAddress);
// //document.getElementById("m-add-address").addEventListener("click", addAddress);
// function addAddress() {
//   var address = prompt("Enter your Address");
//   if (address) {
//     document.getElementById("add-address").innerText = " " + address;
//   } else {
//     document.getElementById("add-address").innerText = " Your Address ";

//     alert("Address not added");
//   }
// }

window.onresize = window.onload = function () {
  var size = window.screen.width;

  if (size < 800) {
    var cloneFoodItems = document.getElementById("food-item").cloneNode(true);
    var cloneCartPage = document.getElementById("cart-page").cloneNode(true);
    document.getElementById("food-item").remove();
    document.getElementById("cart-page").remove();
    document.getElementById("category-header").after(cloneFoodItems);
    document.getElementById("food-item").after(cloneCartPage);
    addEvents();
  }
  if (size > 800) {
    var cloneFoodItems = document.getElementById("food-item").cloneNode(true);
    document.getElementById("food-item").remove();
    document.getElementById("header").after(cloneFoodItems);

    var cloneCartPage = document.getElementById("cart-page").cloneNode(true);
    document.getElementById("cart-page").remove();
    document.getElementById("food-item").after(cloneCartPage);
    addEvents();
  }
};

function addEvents() {
  document.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCart);
  });
  document.querySelectorAll(".increase-item").forEach((item) => {
    item.addEventListener("click", incrementItem);
  });

  document.querySelectorAll(".decrease-item").forEach((item) => {
    item.addEventListener("click", decrementItem);
  });
}

document.getElementById("add-address").addEventListener("click", addAddress);

//document.getElementById("m-add-address").addEventListener("click", addAddress);

function addAddress() {
  var address = prompt("Enter your address", "");
  if (address) {
    document.getElementById("add-address").innerText = " " + address;
  } else {
    alert("Address not added");
  }
}
