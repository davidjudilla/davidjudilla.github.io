var padApp = angular.module("padApp", []);
var farmingLeads = [];

padApp.controller("monsterController", function ($scope, $http) {

    var url = "https://www.padherder.com/api/monsters/"
    $http.get(url , {cache: true}).
        success(function (data) {
            console.log("success!");
            console.log(data);
            $scope.monsters = data;
        }).
        error(function (data) {
            console.log("failed to load.");
        });
    
    $scope.getMonsterImg = function(monsterId){
        return 'https://www.padherder.com' + monsterId;
    };

    $scope.pushLead = function(leader){
        farmingLeads.push(leader);
    };

});


