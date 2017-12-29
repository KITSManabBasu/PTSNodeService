angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		// $http.defaults.useXDomain = true;
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				
				$scope.todos = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			// if ($scope.formData.text != undefined) {
			// 	$scope.loading = true;

			if ($scope.formData.application != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// Update ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.updateTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			

			if ($scope.formData.application != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				
				Todos.update($scope.formData.id,$scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};


		// getByID
		$scope.getByID = function(id) {
			$scope.loading = false;

			Todos.getByID(id)
				// if successful , call our get function to get all the new todos
				.success(function(data) {
					//$scope.todos = data;
					$scope.loading = false;
					$scope.formData.application=data[0].application;
					$scope.formData.userid=data[0].userid;
					$scope.formData.password=data[0].password;
					$scope.formData.id=data[0]._id;


				});
		};


	}]);