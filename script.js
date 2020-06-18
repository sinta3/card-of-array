let fruit = [
    {
        img: "./assets/semangka.jpg",
        nama: "Semangka",
        latin: "Citrullus lanatus",
        biji: "Angiospermae",
    },
    {
        img: "./assets/melon.jpg",
        nama: "Melon",
        latin: "Cucumis Melo L.",
        biji: "Angiospermae",
    },
    {
        img: "./assets/strawberry.jpg",
        nama: "Strawberry",
        latin: "Fragaria × ananassa",
        biji: "Angiospermae",
    },
    {
        img: "./assets/mangga.jpg",
        nama: "Mangga",
        latin: "M. indica",
        biji: "Angiospermae",
    },
    {
        img: "./assets/jeruk.jpg",
        nama: "Jeruk",
        latin: "Citrus",
        biji: "Angiospermae",
    },
    {
        img: "./assets/anggur.jpg",
        nama: "Anggur",
        latin: "Vitis vinifera",
        biji: "Angiospermae",
    },
    {
        img: "./assets/klengkeng.jpg",
        nama: "Lengkeng",
        latin: "D. longan",
        biji: "Angiospermae",
    },
    {
        img: "./assets/pepaya.jpg",
        nama: "Pepaya",
        latin: "Carica papaya",
        biji: "Angiospermae",
    },
    {
        img: "./assets/manggis.jpg",
        nama: "Manggis",
        latin: "Garcinia mangostana",
        biji: "Angiospermae",
    },
    {
        img: "./assets/jambu.jpg",
        nama: "Jambu Biji",
        latin: "Psidium guajava",
        biji: "Angiospermae",
    },
    {
        img: "./assets/mete.jpg",
        nama: "Jambu Mete",
        latin: "Anacardium occidentale",
        biji: "Angiospermae",
    },
    {
        img: "./assets/mlinjo.jpg",
        nama: "Melinjo",
        latin: "Gnetum gnemon",
        biji: "Gymnospermae",
    },
];

let container = document.getElementById("container");

let button = document.getElementById("button");
button.addEventListener("click", () => {
    fruit.forEach((element) => {
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let divBody = document.createElement("div");
        divBody.setAttribute("class", "card-body");

        let p = document.createElement("p");
        p.setAttribute("class", "card-text");
        p.innerHTML = `${element.nama} </br> ${element.latin} </br> ${element.biji}`;

        let img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        img.setAttribute("src", `${element.img}`);

        div.appendChild(img);
        div.appendChild(divBody);
        divBody.appendChild(p);
        container.appendChild(div);

        button.style.display = "none";
        console.log(div);
    });
});
