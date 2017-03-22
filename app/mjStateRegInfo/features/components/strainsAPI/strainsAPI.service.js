//strainsAPI front end service 

// angular
// 	.module('mjStateRegInfo.component.strainsAPI')
// 	.service('strainsAPI', StrainsAPIService);

// function StrainsAPIService($http) {
//     return {
//         // getting all the info from the router
//         getStrains: function (strainsAPI) {
//             var key ="2a24c7ce3bf9c09222b532aee7aef8ca45dc8541";

//             $http({
//                   method: 'GET',
//                   url: 'https://www.cannabisreports.com/api/v1.0/strains?page=10&sort=name',
//                    headers: {                  
//                     'X-API-Key': '2a24c7ce3bf9c09222b532aee7aef8ca45dc8541'
//                    }
//             }).then(function (response) {
//                   console.log(response);
//                   //strainsAPI.push(response)
//                     //  response.data.data.forEach(function(item) {
//                     //    strainsAPI.push(item);
                        
//                     // });
//                 });
//         },
//     };
// }