 

const getItem=async()=>{
    try{
       const results=await fetch("/data/samsung.json");
       const data = await results.json();
    //    console.log(data.samsung)
       const samsung = data.samsung;
    //    console.log(samsung)
       return samsung;
    }catch(err){
        console.log(err)
    }
};
getItem();

 

 window.addEventListener("DOMContentLoaded",async()=>{
     const samsung=await getItem();
    displayProductsItems(samsung);
    console.log(samsung)
 })

 const card = document.querySelector(".products");

 const displayProductsItems=items=>{
    let displayitem = items.map(pro=>
        ` <div class="card">  
        <div class="product_header">
        <img src="${pro.image}" alt="">
    </div>
    <div class="product_footer">
        <h3>${pro.title}</h3>
        <h5>${pro.price}</h5>
        <div class="product_price">
         <a href="#"><button type="button" class="btn">
         Add To Cart
         </button></a>
       </div>
    </div>
    </div>`
    ) 
    displayitem=displayitem.join('')
    if(card){
           card.innerHTML=displayitem;
        }
    //     if(categoryCenter){
        //   categoryCenter.innerHTML= displayitem;
        //     }
    };
   
        

 