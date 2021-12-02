
// IIFE -- Immediately Invoked Function Expression
(function(){
    
    function Start() {
        console.log("app started .. . ");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/business-list');
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();
  

let addToCart = document.querySelectorAll('.add-to-card');
let cartCounter = document.querySelector('#cart-counter');


const updateCart = (product) => {
	axios.post('/update-cart', product)
			 .then(res => {
                cartCounter.innerText = res.data.totalQty;
            
         })
        
};

addToCart.forEach((btn) => {
	btn.addEventListener('click', (e) => {
	
        let product = JSON.parse(btn.dataset.product);
		updateCart(product)
        alert('added to the cart');
	});
});
  