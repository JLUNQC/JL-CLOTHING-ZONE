for(let product_btn of document.querySelectorAll('img.add-to-cart-btn')){
    product_btn.addEventListener('click',addToCart)
}
async function addToCart(e){
    let product_div = e.currentTarget.closest('.product');
    product = {};
    product.name = product_div.querySelector('h3').textContent;
    product.image = product_div.querySelector('.product-image>img').src;
    product.price = product_div.querySelector('.product-info>p').textContent;
    console.log(product);
    renderProductRow(product)

}
async function renderProductRow(product){
    let p_div = document.createElement('div');
    p_div.classList.add('product');

    let image_div = document.createElement('div');
    let p_image = document.createElement('img');
    p_image.src = product.image;

    image_div.appendChild(p_image);
    p_div.appendChild(image_div);

    document.getElementById('cart_summary_container').appendChild(p_div);
    document.getElementById('name_p').innerHTML  = product.name;
    document.getElementById('price_v').innerHTML = product.price;

}



