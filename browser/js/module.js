'use strict';

var juke = angular.module('juke', ['ui.router'])
	.config(function ($stateProvider) {
	  $stateProvider.state('albumList', {
	    url: '/albums',
	    templateUrl: '/albums.html' 
	  })
	  .state('album', {
	    url: '/albums/:albumId',
	    templateUrl: '/album.html',
	    parent: 'albumList'
	  })
	  .state('artistList',{
	  	url: '/artists',
	  	templateUrl: 'artists.html'
	  })
	  .state('artistList.artist', {
	  	url: '/artist/:artistId',
	  	templateUrl: '/artist.html',
	  	parent: 'artistList'
	  })
	  .state('artistList.artist.songs', {
	  	url: '/artist/:artistId/songs',
	  	templateUrl: '/artist.songs.html',
	  	parent: 'artistList.artist'
	  })
	  .state('artistList.artist.albums', {
	  	url: '/artist/:artistId/albums',
	  	templateUrl: '/artist.albums.html',
	  	parent: 'artistList.artist'
	  });
	});

