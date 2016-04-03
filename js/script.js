// Em jQuery
$(document).ready(function() {
    $.getJSON('js/potions.json', function(result) {
        $.each(result.potions, function(ind, value) {
        	var elements = ind -1;
            $('.product').eq(elements).append('<img src="assets/' + value.image + ' " />');
            $('.product').eq(elements).append('<span class="product_name">' + value.name + " - " + '</span>');
            $('.product').eq(elements).append('<span class="product_price">' + '$' + value.price + '</span>');
        });
    });

    // open close menu mobile
    $('#mobile_burger').click(function(){
    	$('#mobile_menu_box').fadeIn(200);
    });

    $('#mobile_menu_close').click(function(){
    	$('#mobile_menu_box').fadeOut(200);
    });
});


// Em javaScript puro

// FadeIn e FadeOut
var elem = document.getElementsByClassName('product');

var fadeIn = function() {
var id = this.id;

// Get JSON
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'js/potions.json', true);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
			
			var lightbox = document.getElementById('lightbox_bg');
			


			var line = '';
			for (var i = 0; i < obj.potions[id].ingredients.length; i++) {
				line += '<li>' + obj.potions[id].ingredients[i] + '</li>';
			}
			    lightbox.innerHTML = '';
			    lightbox.innerHTML += '<div id="lightbox">' + 
			    						'<span id="close_lightbox" class="no_select">X</span>' + 
			    						'<img src="assets/' + obj.potions[id].image + ' " />' +
			    						'<div id="lightbox_right_side">' +
				    						'<span class="txt_tit">' + obj.potions[id].name + '</span>' +
				    						'<span class="txt_tit">Use/Effect:</span>' +
				    						'<span class="txt_desc">' + obj.potions[id].effect + '</span>' +
				    						'<span class="txt_tit">Ingredients:</span>' +
				    						'<ul>' + line + '</ul>' +
				    						'<span class="txt_tit"><b>Price</b></span>' +
				    						'<span id="txt_price">' + '$' + obj.potions[id].price + '</span>' +
				    						'<button class="default_transition">add to chart</button>'	+
				    					'</div>' +						
			    					  '</div>';
			
         }
    }

// FadeOut
var fadeOut = function(){
	document.getElementById('close_lightbox').parentNode.parentNode.style.display = "none";
}
var closeBtn = document.getElementById('close_lightbox');
	closeBtn.addEventListener('click', fadeOut, false);
// Fim FadeOut

};
xmlhttp.send(null);
// Fim Get JSON
	
	document.getElementById('lightbox_bg').style.display = 'block';    
}; //Fim FadeIn

for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', fadeIn, false);
}