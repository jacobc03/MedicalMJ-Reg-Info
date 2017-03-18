//StateInfo front end service 

angular
	.module('mjStateRegInfo.component.stateInfo')
	.service('stateInfo', StateInfoService);

function StateInfoService($http) {
    return {
        // getting all the info from the router
        getStateInfo: function (stateInfo) {
            $http.get('/api')
                .then(function (response) {
                    response.data.forEach(function(item) {
                        stateInfo.push(item);
                        
                    });
                });
        },
    };
}