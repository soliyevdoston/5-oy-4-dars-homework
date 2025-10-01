const elCerdTemp = document.getElementById("cardTemp");
const elParent = document.getElementById("parent");




fetch("https://json-api.uz/api/project/fn43/cars")
.then((res)=>{
    return res.json();
})
.then((res)=>{
    ui(res.data);
    })
    .catch(()=>{})
    .finally(()=>{});

    function ui(cars){
        cars.forEach(car => {
            const elCard = elCerdTemp.content.cloneNode(true);
            elCard.querySelector(".card-title").textContent = car.name;
            elCard.querySelector("p").textContent = car.description;
            elParent.appendChild(elCard);
        })};