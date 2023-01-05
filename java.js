const cheese = document.querySelector("#cheese");
const saleBtn = document.querySelector("#sale");
const burger = document.querySelector(".burger");
const tomato = document.querySelector("#tomato");
const meat = document.querySelector("#meat");
const pickle = document.querySelector("#pickle");
const onion = document.querySelector("#onion");

const total = document.querySelector(".total");

let summa = 0;

total.textContent = ` total price ${summa} $`;

saleBtn.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 26 + 10);
    alert(`Sizning buyurtma raqamingiz ! ${r}`);
});

cheese.addEventListener("click", function () {
    let s = 0;
    const cheeseImg = document.createElement("img");
    cheeseImg.className = "b-img";
    cheeseImg.setAttribute("src", "./burger-layers/cheese.svg");
    cheeseImg.setAttribute("data-price", "5");

    burger.append(cheeseImg);

    let allImg = document.querySelectorAll(".b-img ");

    for (let i = 0; i < allImg.length; i++) {
        s = s + Number(allImg[i].dataset.price);
    }
    total.textContent = ` total price ${s}`;

    console.log(allImg);
});
tomato.addEventListener("click", function () {
    let s = 0;

    const tomatoImg = document.createElement("img");
    tomatoImg.className = "b-img";
    tomatoImg.setAttribute("src", "./burger-layers/tomato.svg");
    tomatoImg.setAttribute("data-price", "2");

    burger.append(tomatoImg);

    let allImg = document.querySelectorAll(".b-img ");

    for (let i = 0; i < allImg.length; i++) {
        s = s + Number(allImg[i].dataset.price);
    }
    total.textContent = ` total price ${s}`;

    console.log(allImg);
});

meat.addEventListener("click", function () {
    let s = 0;
    const meatImg = document.createElement("img");
    meatImg.className = "b-img";
    meatImg.setAttribute("src", "./burger-layers/meat.svg");
    meatImg.setAttribute("data-price", "12");

    burger.append(meatImg);

    let allImg = document.querySelectorAll(".b-img ");

    for (let i = 0; i < allImg.length; i++) {
        s = s + Number(allImg[i].dataset.price);
    }
    total.textContent = ` total price ${s}`;

    console.log(allImg);
});

pickle.addEventListener("click", function () {
    let s = 0;
    const pickleImg = document.createElement("img");
    pickleImg.className = "b-img";
    pickleImg.setAttribute("src", "./burger-layers/pickle.svg");
    pickleImg.setAttribute("data-price", "6");

    burger.append(pickleImg);

    let allImg = document.querySelectorAll(".b-img ");

    for (let i = 0; i < allImg.length; i++) {
        s = s + Number(allImg[i].dataset.price);
    }
    total.textContent = ` total price ${s}`;

    console.log(allImg);
});
onion.addEventListener("click", function () {
    let s = 0;
    const onionImg = document.createElement("img");
    onionImg.className = "b-img";
    onionImg.setAttribute("src", "./burger-layers/onion.svg");
    onionImg.setAttribute("data-price", "3");

    burger.append(onionImg);

    let allImg = document.querySelectorAll(".b-img ");

    for (let i = 0; i < allImg.length; i++) {
        s = s + Number(allImg[i].dataset.price);
    }
    total.textContent = ` total price ${s}`;

    console.log(allImg);
});

salad.addEventListener("click", function () {
    let s = 0;
    const saladImg = document.createElement("img");
    saladImg.className = "b-img";
    saladImg.setAttribute("src", "./burger-layers/salad.svg");
    saladImg.setAttribute("data-price", "7");

    burger.append(saladImg);

    let allImg = document.querySelectorAll(".b-img ");

    for (let i = 0; i < allImg.length; i++) {
        s = s + Number(allImg[i].dataset.price);
    }
    total.textContent = ` total price ${s}`;

    console.log(allImg);
});

burger.addEventListener("click", function (e) {
    burger.removeChild(e.target);

    total.textContent = ` total price ${s}`;
});
