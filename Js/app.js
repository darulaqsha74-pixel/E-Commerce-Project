console.log(`Hello`);

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(data=>{
            
        let divItem = document.getElementById("productDetails");   
        let body="";
        
        for(let i=0; i<data.length; i++){
            body +=`
            <div class="col">
                        <div class="card shadow-sm"> 
                            <img src="${data[i].image}" >
                            
                            <h5 class="card-text">${data[i].title}</h5>
                            <h3 class="card-text">${data[i].price}</h3>

                            <div class="card-body">
                                <p class="card-text">
                                ${data[i].description}
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group"> <button type="button"
                                            class="btn btn-sm btn-outline-secondary">View</button> <button type="button"
                                            class="btn btn-sm btn-outline-secondary">Edit</button> </div> <small
                                        class="text-body-secondary">${data[i].category}</small>
                                </div>
                            </div>
                        </div>
                    </div>
            `
            productDetails.innerHTML=body;
        }
           
           
 });

















