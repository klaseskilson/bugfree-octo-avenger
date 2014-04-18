angular.module('bugfree', [])
    .controller('Result', function ($scope) {
        $scope.entries =
            [{first_name:'Magnus', last_name:'Hult', time:{hh: 1, mm: 1, ss: 1}},
             {first_name:'Arvid', last_name:'Janson', time:{hh: 2, mm: 2, ss: 2}},
             {first_name:'Louise', last_name:'Eriksson', time:{hh: 7, mm: 3, ss: 0}},
             {first_name:'Leo', last_name:'Giertz', time:{hh: 3, mm: 7, ss: 45}},
             {first_name:'Stefan', last_name:'Granlund', time:{hh: 1, mm: 7, ss: 0}},
             {first_name:'Edvard', last_name:'Backendguru', time:{hh: 3, mm: 7, ss: 22}},
             {first_name:'Klas', last_name:'Eskilson', time:{hh: 0, mm: 7, ss: 56}},
             {first_name:'Linnéa', last_name:'Nåbo', time:{hh: 3, mm: 7, ss: 5}},
             {first_name:'Lovisa', last_name:'Dahl', time:{hh: 0, mm: 55, ss: 7}}]
        $scope.predicate = 'time';
        $scope.reverse = false;

        $scope.reset = function () {
            // emtpy fields
            $scope.first_name = '';
            $scope.last_name = '';
            $scope.time_hh = '';
            $scope.time_mm = '';
            $scope.time_ss = '';

            // reset form inputs to pristine state
            $scope.entryForm.$setPristine();
        };

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

            // reset form
            $scope.reset();
        };
    })
    .filter('prettyTime', function () {
        // not sure filter is the best way to do this
        return function (n) {
            var hh = n.hh,
                mm = n.mm,
                ss = n.ss;

            return (hh) + ':' + (parseInt(mm) > 9 ? mm : '0' + mm) + '.' + (parseInt(ss) > 9 ? ss : '0' + ss);
        };
    });
