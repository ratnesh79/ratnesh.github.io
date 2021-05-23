const getProducts=async()=>{
    try{
       const results=await fetch("/data/product.json");
       const data = await results.json();
       const products = data.products;
       return products;
    }catch(err){
        console.log(err)
    }
};

 window.addEventListener("DOMContentLoaded",async()=>{
     const products=await getProducts();
    displayProductsItems(products);
 })

const categoryCenter = document.querySelector(".category__center");

 const displayProductsItems=items=>{
     let displayProduct = items.map(product=>
        ` <div class="product category__product">
        <div class="product_header">
            <img src="${product.image}" alt="">
        </div>
        <div class="product_footer">
            <h3>${product.title}</h3>
            <div class="rating">
                <img src="https://img.icons8.com/fluent/30/000000/star.png"/>
                <img src="https://img.icons8.com/fluent/30/000000/star.png"/>
                <img src="https://img.icons8.com/fluent/30/000000/star.png"/>
                <img src="https://img.icons8.com/fluent/30/000000/star.png"/>
                <img src="https://img.icons8.com/fluent/30/000000/star.png"/>
         </div>
         <div class="product_price">
            
             <a href="${product.link}"><button type="button" class="product_btn">
                 DETAIL
             </button></a>
         </div>
         <ul>
             
                 <a href="#" >
                     <img src="https://img.icons8.com/metro/26/000000/visible.png"/>
                 </a>
                 <a href="#" >
                     <img src="https://img.icons8.com/fluent/26/000000/like.png"/>
                 </a>
                 <a href="#" >
                     <img src="https://img.icons8.com/ios/26/000000/repeat.png"/>
                 </a>
             
         </ul>
         </div>
    </div>`);
    displayProduct=displayProduct.join('')
    if(categoryCenter){
  categoryCenter.innerHTML= displayProduct;
    }
 };

 const filterBtn = document.querySelectorAll('.filter-btn');
 const categoryContainer=document.getElementById('category');

 if(categoryContainer){
     categoryContainer.addEventListener("click", async e => {
         const target =e.target.closest(".section__title");
        if(!target)return;
        const id= target.dataset.id;
        const products = await getProducts();

        if(id){
            Array.from(filterBtn).forEach(btn=>{
                btn.classList.remove("active");
            });
            target.classList.add("active");
            
            let menuCategory=products.filter(product=>{
                if(product.category == id){
                    return product;
                }
            });
                if(id=='All Products'){
                    displayProductsItems(products);
                }else{
                    displayProductsItems(menuCategory);
                }

        }
     })
 }