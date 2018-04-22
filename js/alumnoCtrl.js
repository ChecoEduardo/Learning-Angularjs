app.controller('alumnoCtrl',['$scope', '$routeParams', function($scope,$routeParams){
    $scope.code = $routeParams.codigo;// codigo es el mismo del config
    $scope.name= $routeParams.nombre;
    $scope.talef= $routeParams.cell;
    $scope.direccion= $routeParams.adress;

}]);
