var productNameInput = document.getElementById("productNameInput")
var productPriceInput = document.getElementById("productPriceInput")
var productCategoryInput = document.getElementById("productCategoryInput")
var productDescInput = document.getElementById("productDescInput")
var searchInput = document .getElementById("searchInput")
var addBtn = document.getElementById("addBtn")
var updateBtn = document .getElementById("updateBtn")
var indexUpdate = 0 ;
var messageName =document.getElementById("messageName")


var productList = [];




function addProduct(){
    if(validation()==true){
        var product = {
            name : productNameInput.value,
            price : productPriceInput.value,
            category : productCategoryInput.value,
            desc : productDescInput.value
        }
        productList .push(product);
        displayData();
        clearForm();
        console.log(productList);
        productNameInput.classList.remove("is-valid")
    }
    }
    
function clearForm(){
    productNameInput.value =""; 
    productPriceInput.value ="";
    productCategoryInput.value="";
    productDescInput.value="";

}
function displayData(){
    var cartona ="" ;
    for (let i = 0; i < productList .length; i++) {
        cartona += `        <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <td>
        <button onclick=" setData(${i})" class="btn btn-sm btn-warning">update</button>
        <button onclick =" deleteItem(${i}) " class="btn btn-sm btn-danger">Delete</button>
        </td>

        </tr>`
        
    }
    document .getElementById("tableBody") .innerHTML = cartona ;
    console .log(cartona);
}
function deleteItem(index){
    productList.splice(index , 1);
    displayData();
}
function search(){
    var term =searchInput.value;
    //console.log(term);
    var cartona ="" ;
    for (let i = 0; i < productList .length; i++) {
        if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
            cartona += `        <tr>
            <td>${i}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].desc}</td>
            <td>
            <button class="btn btn-sm btn-warning">update</button>
            <button onclick =" deleteItem(${i}) " class="btn btn-sm btn-danger">Delete</button>
            </td>
    
            </tr>`
        }

        
    }
    document .getElementById("tableBody") .innerHTML = cartona ;
    console .log(cartona);
}
function setData(index){
    indexUpdate =index
    var currentProduct = productList[index]
    productNameInput .value = currentProduct .name ;
    productPriceInput.value = currentProduct .price ;
    productCategoryInput .value = currentProduct .category ;
    productDescInput .value = currentProduct .desc ;
    updateBtn.classList.remove("d-none");
    addBtn.classList.add("d-none");
    console.log(currentProduct)
}
function updateProduct (){
    var product = {
        name : productNameInput.value,
        price : productPriceInput.value,
        category : productCategoryInput.value,
        desc : productDescInput.value
    }

    productList.splice(indexUpdate , 1 , product)
    updateBtn.classList.add("d-none")
    addBtn.classList.remove("d-none")
    displayData();
}
function validation(){
    var text = productNameInput.value;
    var regexName = /^[A-Z][a-z]{3,8}$/
    if (regexName.test(text)) {
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
        messageName.classList.add("d-none")
        return true ;

        
    } else {
        productNameInput.classList.remove("is-valid");
        productNameInput.classList.add("is-invalid");
        messageName.classList.remove("d-none")
        return false ;
    }
}