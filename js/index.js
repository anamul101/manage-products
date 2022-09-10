const inputValue = (id) =>{
    const inputFild = document.getElementById(id);
    const valueInput = inputFild.value;
    inputFild.value = '';
    return valueInput;
}

const addProduct = () =>{
    const inputProductName =inputValue('product-name');
    const inputQuantity = inputValue('product-quantity');
    const number = Number(inputQuantity);

    if(!isNaN(inputProductName) || !Number.isInteger(number)){
        alert('invalide your input');
        return;
    }

    setProductInLocalStorage(inputProductName,inputQuantity);

    disply();
}

const getLocalStorageData = () =>{
    const product = localStorage.getItem('All-Products');
    const parsProduct = JSON.parse(product);
    return parsProduct;
}

const setProductInLocalStorage = (name,quantity) =>{
    // console.log(name,quantity);
    let products = getLocalStorageData();
    if(!products){
        products = {};
    }
    
    if(products[name]){
        products[name] = parseInt(products[name]) + parseInt(quantity);
        
    }else{
        products[name] = quantity;
        
    }
    
    localStorage.setItem('All-Products', JSON.stringify(products));

}

const disply = () =>{

    const products = getLocalStorageData();
    // console.table(products);
    const section = document.getElementById('all-products');
    section.textContent = '';

    for(const product in products){
       const  name = product;
       const quantity = products[product];
    // console.table(name,quantity);
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="shadow-sm p-3 mb-2 bg-body rounded">
        <span class="fs-1">${name}</span>
        Quantity:<small class="fw-bold">
            ${quantity}
        </small>
        </div> 
        `;
        section.appendChild(div);
    }
}
disply();
