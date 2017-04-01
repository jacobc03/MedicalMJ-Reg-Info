angular
    .module('mjStateRegInfo.component.periodicTable')
    .directive('periodicTable', PeriodicTableDirective);

function PeriodicTableDirective() {
    return {
        restrict: 'E',
        scope: {
            navbar: '='
        },
        templateUrl: '/mjStateRegInfo/features/components/periodicTable/periodicTable.html',
        controller: PeriodicTableCtrl,
        controllerAs: 'PeriodicTableVM',
        bindToController: true
    }
};

function PeriodicTableCtrl() {
    var vm = this;
}