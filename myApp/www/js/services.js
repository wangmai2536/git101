angular.module('app.services', ['ngResource'])

.factory('BlankFactory', [function(){

}])

.service('userService', function($http){

  var user = [];
  return{
    getUsers: function(){
      return $http.get("http://10.2.19.111:8088/cmru-web/app/api/getUsers")
      .then(function(response){
        alert(JSON.stringify(response));
        user = response;
        return user;
      });
    }
  }
});

//.service('userService', function($http))
