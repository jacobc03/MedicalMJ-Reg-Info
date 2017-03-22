// angular
// 	.module('mjStateRegInfo.component.politiciansAPI')
// 	.service('politiciansAPI', PoliticiansAPIService);

// function PoliticiansAPIService($http) {
//     return {
//         // getting all the info from the router
//         getPoliticians: function (politiciansAPI) {
           

//             $http({
//                   method: 'GET',
//                   url: 'https://api.propublica.org/congress/v1/',
//                    headers: {                  
//                     'X-API-Key': '2PvUNGIQHTaDhSCa3E5WD1klEX67ajkM5eLGkgkO'
//                    }
//             }).then(function (response) {
//                     response.data.forEach(function(item) {
//                         politiciansAPI.push(item);
                        
//                     });
//                 });
//         },
//     };
// }