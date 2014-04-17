function Ctrl($scope) {
    $scope.entries =
        [{first_name:'John', last_name:'Klasson', time:'03:21'},
         {first_name:'Mary', last_name:'Klassson', time:'02:21'},
         {first_name:'Mike', last_name:'Klfasson', time:'56:21'},
         {first_name:'Adam', last_name:'Klassöon', time:'19:21'},
         {first_name:'Julie', last_name:'Öl', time:'3:29:21'}]
    $scope.predicate = 'time';
    $scope.reverse = false;

    $scope.addEntry = function(){
    	// create new entry
    	var obj = {first_name: $scope.first_name, last_name: $scope.last_name, time: $scope.time};
    	// push to entries
    	$scope.entries.push(obj);
    	// emtpy fields
    	$scope.first_name = '';
    	$scope.last_name = '';
    	$scope.time = '';
    };
}
