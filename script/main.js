var app = angular.module('bugfree', [])

.controller('Result', function ($scope) {
    $scope.entries =
        [{first_name:'John', last_name:'Klasson', time:{hh: 1, mm: 1, ss: 1}},
         {first_name:'Mary', last_name:'Klassson', time:{hh: 2, mm: 2, ss: 2}},
         {first_name:'Mike', last_name:'Klfasson', time:{hh: 7, mm: 3, ss: 0}},
         {first_name:'Adam', last_name:'Klassöon', time:{hh: 3, mm: 7, ss: 0}},
         {first_name:'Julie', last_name:'Öl', time:{hh: 0, mm: 55, ss: 7}}]
    $scope.predicate = 'time';
    $scope.reverse = false;

    $scope.addEntry = function () {
    	// create new entry
    	var obj = {
    		first_name: $scope.first_name,
    		last_name: $scope.last_name,
    		time: {
    			hh: $scope.time_hh,
    			mm: $scope.time_mm,
    			ss: $scope.time_ss
    		}
    	};
    	// push to entries
    	$scope.entries.push(obj);
    	// emtpy fields
    	$scope.first_name = '';
    	$scope.last_name = '';
    	$scope.time_hh = '';
    	$scope.time_mm = '';
    	$scope.time_ss = '';
    };
})
.filter('prettyTime', function () {
	// not sure filter is the best way to do this
	return function (n) {
		var hh = n.hh,
			mm = n.mm,
			ss = n.ss;

		return (hh) + ':' + (parseInt(mm, 10) > 9 ? mm : '0' + mm) + ':' + (parseInt(ss, 10) > 9 ? ss : '0' + ss);
	};
});;
