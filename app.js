// api loaded
function loaded(productSearch){
    fetch(`https://openapi.programming-hero.com/api/phones?search=${productSearch}`)
    .then(res=>res.json())
    .then(data=>ProductShow(data.data))
}

// product show
const ProductShow = (data)=>{
    const productLoad = document.getElementById('product-container');
    const showAllBtn = document.getElementById('show-all');
    productLoad.textContent = '';
    // product slice show
    data = data.slice(0,6);
    if(data.length > 6){
        showAllBtn.classList.remove('hidden');
    }
    data.forEach(product => {
        console.log(product);
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
const searchProduct = ()=>{
    const search = document.getElementById('product-search').value;
    loaded(search);
    loaderSpinner(true);
}


const loaderSpinner = (isLoading)=>{
    const loader = document.getElementById('loader');
    if(isLoading){
        loader.classList.remove('hidden');
    }else {
        loader.classList.add('hidden');
    }
}
