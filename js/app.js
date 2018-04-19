

(function(){
  var app= angular.module('UniversodadApp',[]);

  app.controller('listadoCtrl',['$scope',function($scope){
    //objeto que tiene un arreglo de objetos
    $scope.listadoProfesores={
              profesores: [
                {
                nombre:"Fernando Herrera",
                edad:34,
                clase:"PEE"
              },{
                nombre:"Carlos Herrera",
                edad:48,
                clase:"ICE"
              },{
                nombre:"Gonzalo Herrera",
                edad:78,
                clase:"POO"
              }
            ]

    }

  }]);

})();
