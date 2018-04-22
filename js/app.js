var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
//CONTROLADOR GENERAL
  $scope.menuSuperior = "parciales/menu.html";


//Activar la pestaña
  $scope.setActive=function(OpcionMenu){
    $scope.mInicio ="";
    $scope.mProfesores ="";
    $scope.mAlumnos ="";
    $scope[OpcionMenu]="active";
  }


}]);


//CREANDO UN FLTRO

app.filter('telefonos',function(){
     return function(numero){
       return numero.substring(0,4)+"-"+numero.substring(4);
     }

});
