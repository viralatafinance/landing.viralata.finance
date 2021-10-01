
const loading = document.querySelector('#loading')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        loading.style.opacity = 0;
        loading.style.visibility = 'hidden';

    }
}





/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}

let tels = document.querySelectorAll('.telefone')

window.onload = function(){
    for (i = 0; i < tels.length; ++i) {
        tels[i].onkeyup = function(){
            mascara( this, mtel );
        }
      }
}


const floatForm = document.querySelector('#parallax01')
const bullets = document.querySelector('.bullets')

const rain01 = document.querySelector('#rain_ctnr img:nth-child(1)')
const rain02 = document.querySelector('#rain_ctnr img:nth-child(2)')
const rain03 = document.querySelector('#rain_ctnr img:nth-child(3)')
const rain04 = document.querySelector('#rain_ctnr img:nth-child(4)')
const rain05 = document.querySelector('#rain_ctnr img:nth-child(5)')

if (window.matchMedia("(min-width: 800px)").matches) {
    document.body.onscroll = function() {
        floatForm.style.transform = "translateY(" + window.pageYOffset / 1.05 + "px)";
        
        bullets.style.transform = "translateY(" + (window.pageYOffset / 10) + "px)";
        
        rain01.style.transform = "translateY(" + (window.pageYOffset / 10) + "px)";
        
        rain02.style.transform = "translateY(" + (window.pageYOffset / 5) + "px)";
        
        rain03.style.transform = "translateY(" + (window.pageYOffset/ 4) + "px)";
        
        rain04.style.transform = "translateY(" + (window.pageYOffset / 10) + "px)";
        
        rain05.style.transform = "translateY(" + (window.pageYOffset / 7) + "px)";
    }
    

}
