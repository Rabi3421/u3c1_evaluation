//store the products array in localstorage as "products"
let arr = JSON.parse(localStorage.getItem("products")) || [];

    
function storeProduct(){
    console.log("hi")
    event.preventDefault();
    let form = document.getElementById("products");
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p = new products(type, desc, price, image);
    arr.push(p);
    localStorage.setItem("products", JSON.stringify(arr));
    document.getElementById("type").value = null;
    document.getElementById("desc").value = null
    document.getElementById("price").value = null
    document.getElementById("image").value = null
}


function products(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

function redirect(){
    window.location.href = 'inventory.html'
}
