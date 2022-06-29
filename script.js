fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data =>  {
  data
    .filter((product) => product.rating["count"] > 200)
    .map((product) =>
      createCard(
        document.body,
        product.image,
        product.title,
        product.price,
        product.rating["count"]
      )
    ) }
    )
    



const newEl = (el) => document.createElement(el);

const createNav = (parent) => {
  const elNav = newEl("nav");
  const elUserName = newEl("h2");
  const elNumNav = newEl("p")

  elNav.className = "navbar";
  elUserName.className = "logo";
  elNumNav.className = "number";

  elUserName.textContent = userName;
  // elNumNav.textContent = ;
  elNav.append(elUserName);
  parent.appendChild(elNav);
};






const createFooter = (parent) => {
  const elFooter = newEl("footer");
  const elUserName2 = newEl("h2");
  
  elFooter.className = "footer";
  elUserName2.className = "logo";
  
  elUserName2.textContent = userName;
  
  elFooter.appendChild(elUserName2);
  parent.appendChild(elFooter);
};


const userName = prompt("Inserisci nome utente");
const body = document.querySelector("body");
localStorage.setItem("username", userName);

createNav(body);

const elContainer= newEl("section");
elContainer.className = "products-section";
document.body.appendChild(elContainer);


const createCard = (parent, imgLink, title, price, quantity) => {
  const elWrapper = newEl("div");
  const elTitle = newEl("h3");
  const elPrice = newEl("p");
  const elImg = newEl("img");
  const elQuantity = newEl("p")
  
  elWrapper.className = "wrapper";
  elTitle.className = "title";
  elPrice.className = "price";
  elImg.className = "img";
  elQuantity.className = "quantity"
  
  elImg.setAttribute("alt", title);
  elImg.setAttribute("src", imgLink);
  
  elTitle.textContent = title;
  elPrice.textContent = price;
  elQuantity.textContent = "Quantità:" + quantity;
  
  elWrapper.append(elImg, elTitle, elPrice, elQuantity);
  elContainer.append(elWrapper)
};

createFooter(body);

// const list = data
// .filter((product) => product.rating["count"] > 200)
// .map((product) =>
//       createCard(
//         document.body,
//         product.image,
//         product.title,
//         product.price,
//         product.rating["count"]
//       )
//     );


// try {
//   if (localStorage.getItem("username")) {
//     createNav(body);
//     createFooter(body);
//   } else throw Error("Lo username non è stato memorizzato in Local Storage");
// } catch (error) {
//   console.error(error);

//   localStorage.setItem("username", userName);
// }
