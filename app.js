// api loaded
function loaded(productSearch, isShowing){
    fetch(`https://openapi.programming-hero.com/api/phones?search=${productSearch}`)
    .then(res=>res.json())
    .then(data=>ProductShow(data.data, isShowing))
}

// product show
const ProductShow = (data, isShowing)=>{
    const productLoad = document.getElementById('product-container');
    const showAllBtn = document.getElementById('show-all');
    productLoad.textContent = '';
    // product slice show
    if(data.length > 6 && !isShowing){
        showAllBtn.classList.remove('hidden');
    }else {
        showAllBtn.classList.add('hidden');
    }
    if(!isShowing){
        data = data.slice(0,6);
    }
    
    data.forEach(product => {
        let phoneCard = document.createElement('div');
        phoneCard.innerHTML = `
        <div class="card border rounded-lg">
            <figure class="p-10 bg-[#0D6EFD0D]">
                <img src=${product.image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">S${product.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        `;
        productLoad.append(phoneCard);
    });
    loaderSpinner(false)
}

// product search
const searchProduct = (isShowing)=>{
    const search = document.getElementById('product-search').value;
    loaded(search, isShowing);
    loaderSpinner(true);
    console.log('show all', isShowing);
}

// after product show loader add
const loaderSpinner = (isLoading)=>{
    const loader = document.getElementById('loader');
    if(isLoading){
        loader.classList.remove('hidden');
    }else {
        loader.classList.add('hidden');
    }
}

// show all product
const showProduct = ()=>{
    searchProduct(true);
}