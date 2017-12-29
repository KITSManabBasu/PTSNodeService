
angular.module('todoService', [])
	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {

		return {
			get : function() {
				return $http.get('/api/todos');
				
				//return $http.get('https://kitsagile.herokuapp.com/api/todos');
				// debugger;
				// alert('1');
				// $http.defaults.useXDomain = true;
				// alert(2);
				// $http.get('https://kitsagile.herokuapp.com/api/todos').
    //     		success(function(data) {
    //     			alert(data);
    //        			return data;
    //     		})
    //     		.error(function(data, status, header, config){
    //     			//alert(data);
    //     			return data;
    //     		});
    //     		alert(3);

			},
			create : function(todoData) {
				 return $http.post('/api/todos', todoData);
				//return $http.post('https://kitsagile.herokuapp.com/api/todos', todoData);
			},
			update : function(id,todoData) {
				 return $http.post('/api/todos/' + id, todoData);
				//return $http.post('https://kitsagile.herokuapp.com/api/todos/' + id, todoData);
			},
			delete : function(id) {
				 return $http.delete('/api/todos/' + id);
				//return $http.delete('https://kitsagile.herokuapp.com/api/todos/' + id);
			},
			getByID : function(id) {
				 //return $http.get('/api/todos/' + id);
				 // var jsonData = JSON.stringify({
    	// 			params: {
     //    					id: id,
     //    					rnd: new Date().getTime() 
    	// 					}
					// 		});
				 // return $http({
					//   method:'GET',
					//   url:'/api/todos/'+id,
					//   jsonData
					// });
				
				 return $http.get('/api/todos/' + id +'/' +new Date().getTime());
				//return $http.get('https://kitsagile.herokuapp.com/api/todos/' + id +'/' +new Date().getTime());
			}
		}
	}]);


	