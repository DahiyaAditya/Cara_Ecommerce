const bar = document.getElementById('bar');
const nav= document.getElementById('navbar');
const close= document.getElementById('close');
if(bar!=0){
    bar.addEventListener('click', ()=>{
       nav.classList.add('active'); 
       console.log("response");
    })
}
if(close!=0){
    close.addEventListener('click', ()=>{
       nav.classList.remove('active'); 
    })
}

// script for change image in single product section

let to_open_product = document.getElementsByClassName('product');
let main_img = document.getElementById('main_big_img');
let small_img= document.getElementsByClassName('small_pic');

// for 1st product.
to_open_product[0].onclick =()=>{
   window.location.href='product.html'
 }
 small_img[0].onclick = ()=>{
    main_img.src = small_img[0].src;
}
small_img[1].onclick = ()=>{
    main_img.src = small_img[1].src
}

small_img[2].onclick = ()=>{
  main_img.src = small_img[2].src
}
small_img[3].onclick = ()=>{
  main_img.src = small_img[3].src
}