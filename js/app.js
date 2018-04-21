var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
//CONTROLADOR GENERAL
  $scope.menuSuperior = "parciales/menu.html";

  $scope.setActive=function(OpcionMenu){

    $scope.mInicio ="";
    $scope.mProfesores ="";
    $scope.mAlumnos ="";

    $scope[OpcionMenu]="active";

  }



}]);
