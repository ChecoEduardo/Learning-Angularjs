app.controller('alumnosCtrl',['$scope', function($scope){
$scope.setActive("mAlumnos");

$scope.posicion=5;

$scope.ListadoAlumnos={
      alumnos:[{
        nombre: "Sergio",id:1,telefono: "12345678"
      },{
        nombre: "Eduardo",id:2,telefono: "78945612"
      },
      {
        nombre: "Erick",id:3,telefono: "78945612"
      },
      {
        nombre: "Emiliano",id:4,telefono: "78945612"
      },
      {
        nombre: "Claudia",id:5,telefono: "78945612"
      },
      {
        nombre: "Cinthya",id:6,telefono: "78945612"
      },
      {
        nombre: "Berenice",id:7,telefono: "78945612"
      },
      {
        nombre: "Rocio",id:8,telefono: "78945612"
      },
      {
        nombre: "Judith",id:9,telefono: "78945612"
      },
      {
        nombre: "Ernersto",id:10,telefono: "78945612"
      }]}

$scope.siguientes= function (){

    if ($scope.ListadoAlumnos.alumnos.length > $scope.posicion){
      $scope.posicion +=5;};
}
$scope.Restar= function (){

    if ( $scope.posicion> 5){
      $scope.posicion -=5;};
}














}]);
