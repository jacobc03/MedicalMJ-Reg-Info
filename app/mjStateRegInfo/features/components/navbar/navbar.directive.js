angular
    .module('mjStateRegInfo.component.navbar')
    .directive('navbar', NavBarDirective);

function NavBarDirective() {
    return {
        restrict: 'E',
        scope: {
            navbar: '='
        },
        templateUrl: '/mjStateRegInfo/features/components/navbar/navbar.html',
        controller: NavBarCtrl,
        controllerAs: 'NavBarVM',
        bindToController: true
    }
};

function NavBarCtrl() {
    var vm = this;
}
