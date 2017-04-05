angular
    .module('mjStateRegInfo.strains')
    .controller('StrainsCtrl', StrainsCtrl)

function StrainsCtrl($http) {
    var vm = this;

    vm.strainResult = {
            strain: ''
        }
        //A function that makes an api call to cannabis reports
    vm.searchStrain = function() {
        $http.post('/searchStrains', { strain: vm.strainResult.strain })
            .then(function(data) {
                console.log(data)
                vm.strains = data.data.data
            })
    }
}
