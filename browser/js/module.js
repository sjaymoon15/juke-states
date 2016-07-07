'use strict';

var juke = angular.module('juke', ['ui.router'])
	.config(function ($stateProvider) {
	  $stateProvider.state('albumList', {
	    url: '/albums',
	    templateUrl: '/albums.html' 
	  })
	  .state('artistList',{
	  	url: '/artists',
	  	templateUrl: '/artists.html'
	  });
	});

