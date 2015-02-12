var main = angular.module("mainApp", [
  'ngRoute', 
  'ngSanitize',
  'ui.bootstrap', 
  'ui.utils'
 ]);

main.run(function($rootScope, $route){

  $rootScope.breadcrumb = $("div#breadcrumb > ul");

	$rootScope.$on("$routeChangeStart", function(){
        $rootScope.startLoading();
    });

    // esta function é invocada após o 'resolve' das rotas estar completo
    $rootScope.$on("$routeChangeSuccess", function(){
        // desabilito todas as tabs
        $('#breadcrumb > ul > li > a').removeClass('active');
        // carrego o nome e o id lá do 'resolve' das rotas
        var elem_nome = $route.current.locals.alias.getNome();
        var elem_id = $route.current.locals.alias.getId()
        // crio novo elemento 'a' e atribuo as propriedades
        var a = $('<a>',{
          id: elem_id,
          class: 'active',
          text: elem_nome
        });
        // crio novo elemento 'li' e adiciono o 'a' criado
        var li = $('<li>').append(a);
        // verifico se o 'a' com o id já está no DOM
        // se estiver torno ela ativa, senão adiciono o 'li' criando nova tab
        if ( $('#'+elem_id).length > 0 ) {
          $('#'+elem_id).addClass('active');
        } else {
          $rootScope.breadcrumb.append(li);
        }

        console.log($route);
        console.log($route.current.locals.alias.getNome());

        $rootScope.stopLoading();
    });

    $rootScope.startLoading = function() {
        $rootScope.loading = true;
    }    

    $rootScope.stopLoading = function() {
        $rootScope.loading = false;
    }

});
