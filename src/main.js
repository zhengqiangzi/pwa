window.app=angular.module('app',[]);
var $=require('jquery');
var _=require('lodash');


window.app.provider('network',function () {
	
	var getData=function(){

		return $.get({url:"./data.json",dataType:"json"}).promise();


	}
	this.$get = function() {
		

		return {

			getData:getData
		};
	};
})
window.app.controller('mainCtrl',function ($scope,network) {

	$scope.currentData=[];
	$scope.groupData={}	

	var origin_data=[]
	network.getData().then(function(data){

		origin_data=data;
		$scope.groupData=_.groupBy(data,"type.typeId")

		$scope.currentData=data;

		$scope.$apply();

	})

	$scope.changeTypeHandler=function(arg){

		var find=false;
		for(var prop in $scope.groupData){


			if($scope.groupData[prop][0].type.typeId==arg){
				find=true;
				$scope.currentData=$scope.groupData[prop];

			}

		}

		if(!find){
				$scope.currentData=origin_data

		}

	}

})

