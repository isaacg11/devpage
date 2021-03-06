(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).
		state('Resources',{
			url:'/resources',
			templateUrl: 'views/resources.html'
		}).
		state('Articles',{
			url:'/articles',
			templateUrl: 'views/articles.html'
		}).
		state('Portfolio',{
			url:'/portfolio',
			templateUrl: 'views/portfolio.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
