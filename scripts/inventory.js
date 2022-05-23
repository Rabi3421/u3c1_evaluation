
let product = JSON.parse(localStorage.getItem("products")) || [];
let mainbox = document.querySelector("#all_products");

product.map(function(elem,index){
    let box = document.createElement("div");

    let image = document.createElement("img");
    image.src = elem.image;

    let type = document.createElement("p");
    type.innerText = elem.type;

    let description = document.createElement("p");
    description.innerText = elem.desc;

    let price = document.createElement("p");
    price.innerText = elem.price;

    let remove = document.createElement("button");
    remove.setAttribute("id","remove_product");
    remove.textContent ="Remove";
    remove.addEventListener("click",function(){
        removeproduct(elem,index);
    })

    box.append(image,type,description,price,remove);
    box.style.border = "1px solid red";
    box.style.textAlign = "center";
    mainbox.append(box);

})

function redirect(){
    window.location.href = 'index.html'
}

function removeproduct(elem,index){
    product.splice(index,1);
    localStorage.setItem("products",JSON.stringify(product));
    window.location.reload();
}
