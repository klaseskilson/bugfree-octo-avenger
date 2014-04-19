angular.module('bugfree', [])
    .controller('Result', function ($scope) {
        // add dummy data
        $scope.entries =
            [{first_name:'Granny',  last_name:'Smith',  time:{hh: 1, mm: 1, ss: 1}},
             {first_name:'Rubi',    last_name:'Nola',   time:{hh: 2, mm: 2, ss: 2}},
             {first_name:'Jona',    last_name:'Gold',   time:{hh: 7, mm: 3, ss: 0}},
             {first_name:'Mac',     last_name:'Intosh', time:{hh: 3, mm: 7, ss: 45}}]
        // default sorting!
        $scope.predicate = 'time';
        $scope.reverse = false;

        $scope.reset = function () {
            // emtpy fields
            $scope.first_name = '';
            $scope.last_name  = '';
            $scope.time_hh    = '';
            $scope.time_mm    = '';
            $scope.time_ss    = '';

            // reset form to pristine state
            $scope.entryForm.$setPristine();
        };

        /**
         * add new entry to the entries array
         */
        $scope.addEntry = function () {
            // create new entry, get form inputs from ng-model
            var entry = {
                first_name: $scope.first_name,
                last_name:  $scope.last_name,
                time: {
                    hh: $scope.time_hh,
                    mm: $scope.time_mm,
                    ss: $scope.time_ss
                }
            };

            // push to entries
            $scope.entries.push(entry);

            // reset form
            $scope.reset();
        };
    })
    /**
     * display time in a neat way, apply on the time object
     * @return {string} the nice time
     */
    .filter('prettyTime', function () {
        // not sure filter is the best way to do this, but it does the job!
        return function (time) {
            var hh = time.hh,
                mm = time.mm,
                ss = time.ss;

            return (hh) + ':' + (parseInt(mm) > 9 ? mm : '0' + mm) + '.' + (parseInt(ss) > 9 ? ss : '0' + ss);
        };
    });
