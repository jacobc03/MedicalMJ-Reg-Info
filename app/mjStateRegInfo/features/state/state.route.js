angular
    .module('mjStateRegInfo.state')
    .config(stateConfig);

function stateConfig($stateProvider) {
    $stateProvider.state({
        name: 'state',
        url: '/state',
        templateUrl: '/mjStateRegInfo/features/state/state.html',
        //Where controller name is defined
        controller: 'StateCtrl',
        // Defines name of the module used in the view
        controllerAs: 'StateVM'
    })
}
