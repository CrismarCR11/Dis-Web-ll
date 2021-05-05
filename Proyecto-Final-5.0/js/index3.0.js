function btn(){
    $('.contenedor_menu').slideToggle();
    
}




var slider=document.querySelector(".slider-contenedor")
var sliderIndividual=document.querySelectorAll(".slider1")
var contador=1;
var width=sliderIndividual[0].clientWidth;
var intervalo=3000;

window.addEventListener("resize",function(){
    width=sliderIndividual[0].clientWidth;
  
    if(width>1250){

        $('.contenedor_menu').show();
        
       
    }
    else if(width<1300){
        $('.contenedor_menu').hide();
    }
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform="translate("+(-width*contador)+"px)";
    slider.style.transition="transform .3s";
    contador++;
    if(contador==sliderIndividual.length){
        setTimeout(function(){
                slider.style.transform="translate(0px)";
                slider.style.transition="transform 0s";
                contador=1;
        },1500)
    }
}
var logo= $('#logo').offset().top;


if(width>100){
    $('.img_logo').mouseenter(function() {
        $(this).css("max-width","500px"),
        $('.titulo').css("display","none")
        });

    $('.img_logo').mouseleave(function() {
        $(this).css("max-width","350px");
        $('.titulo').css("display","block")
       });
}
