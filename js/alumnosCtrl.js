app.controller('alumnosCtrl',['$scope', function($scope){
$scope.setActive("mAlumnos");

$scope.posicion=5;

$scope.ListadoAlumnos={
      alumnos:[{
        nombre: "Sergio",id:1,telefono: "12345678",Direccion: "Privada de la huerta 1"
      },{
        nombre: "Eduardo",id:2,telefono: "78945612",Direccion: "Privada de la huerta 2"
      },
      {
        nombre: "Erick",id:3,telefono: "78945612",Direccion: "Privada de la huerta 3"
      },
      {
        nombre: "Emiliano",id:4,telefono: "78945612",Direccion: "Privada de la huerta 4"
      },
      {
        nombre: "Claudia",id:5,telefono: "78945612",Direccion: "Privada de la huerta 5"
      },
      {
        nombre: "Cinthya",id:6,telefono: "78945612",Direccion: "Privada de la huerta 6"
      },
      {
        nombre: "Berenice",id:7,telefono: "78945612",Direccion: "Privada de la huerta 7"
      },
      {
        nombre: "Rocio",id:8,telefono: "78945612",Direccion: "Privada de la huerta 8"
      },
      {
        nombre: "Judith",id:9,telefono: "78945612",Direccion: "Privada de la huerta 9"
      },
      {
        nombre: "Ernersto",id:10,telefono: "78945612",Direccion: "Privada de la huerta 10"
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
