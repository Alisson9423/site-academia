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
    var target = $('.target'), /*class alvo*/
        /*class da animação*/
    offset = $(window).height() * 2/4; /*pegando 1/4 da  altura da janela*/

    function animeScroll(){
        var ducumentTop = $(document).scrollTop(); /*distancia do scroll ate  top*/
        
        var itemTop = $(target).offset().top;/*distancia da class '.anime-svg' ate top */
           
            if(ducumentTop > itemTop- offset){
                $('.coracao').addClass('anime-svg-coracao');
                    setTimeout(function(){
                        $('.musculo').addClass('anime-svg-musculo');
                      }, 2000);
                    setTimeout(function(){
                        $('.boxe').addClass('anime-svg-boxe');
                      }, 3000);
                    setTimeout(function(){
                        $('.cintura').addClass('anime-svg-cintura');
                      }, 4000);
           }
        
    }

    $(document).scroll(debounce(function(){
        animeScroll();
    },100));
}());


