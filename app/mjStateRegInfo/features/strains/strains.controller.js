angular
	.module('mjStateRegInfo.strains')
	.controller('StrainsCtrl', StrainsCtrl)


	function StrainsCtrl($http) {
		var vm = this;
		
		vm.strainResult = {
			strain:''
		}
		

		vm.searchStrain = function(){
		
		$http.post('/searchStrains', { strain: vm.strainResult.strain })
		.then(function(data){
			console.log(data)
			vm.strains = data.data.data
	
    console.log("Name "+data.data.data[0].name);
    // console.log("URL "+data.data[0].url);
    // console.log("image "+data.data[0].image);
    // console.log("Seed Company Name "+data.data[0].seedCompany.name);
    // console.log("Review Count "+data.data[0].reviews.count);
    // console.log("Review Link "+data.data[0].reviews.link);

		})


			//console.log(vm.strainResult.strain);
			
			// $http.get('', something)
			// .then(function(res){
			// 	console.log('Successful: '+ res
			// })

		}

	}