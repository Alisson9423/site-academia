debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};/*essa  função eu achei na net ela segura o evento por alguns segundo por toda vez que rola o scroll dispara a function 
 * sem ela cada vez que  usuario usar scroll vai disparar function assim gerando lentidão
 * */

(function(){
    var target = $('.anime-svg'), /*class alvo*/
    animationClass = 'anime-svg-start',/*class da animação*/
    offset = $(window).height() * 1/4; /*pegando 1/4 da  altura da janela*/

    function animeScroll(){
        var ducumentTop = $(document).scrollTop(); /*distancia do scroll ate  top*/

        target.each(function(){ 
           var itemTop = $(this).offset().top;/*distancia da class '.anime-svg' ate top */
           
            if(ducumentTop > itemTop- offset){

               $(this).addClass(animationClass);
           }
        });
    }

    $(document).scroll(debounce(function(){
        animeScroll();
    },100));
}());