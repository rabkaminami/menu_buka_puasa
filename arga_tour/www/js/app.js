angular.module("arga_tour", ["ngCordova","ionic","ionMdInput","ionic-material","ion-datetime-picker","ionic.rating","utf8-base64","angular-md5","ionicLazyLoad","arga_tour.controllers", "arga_tour.services"])
	.run(function($ionicPlatform,$window,$interval,$timeout,$ionicHistory,$ionicPopup,$state,$rootScope){

		$rootScope.appName = "" ;
		$rootScope.appLogo = "data/images/images/drawable-hdpi-icon.png" ;
		$rootScope.appVersion = "1.0" ;

		$ionicPlatform.ready(function() {
			//required: cordova plugin add ionic-plugin-keyboard --save
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			//required: cordova plugin add cordova-plugin-statusbar --save
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			localforage.config({
				driver : [localforage.WEBSQL,localforage.INDEXEDDB,localforage.LOCALSTORAGE],
				name : "arga_tour",
				storeName : "arga_tour",
				description : "The offline datastore for Arga Tour app"
			});



		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("trustJs", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsJs(text);
		};
	}])

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})

	.filter("strDate", function(){
		return function (input) {
			return new Date(input);
		}
	})
	.filter("strHTML", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter("strEscape",function(){
		return window.encodeURIComponent;
	})
	.filter("strUnscape", ["$sce", function($sce) {
		var div = document.createElement("div");
		return function(text) {
			div.innerHTML = text;
			return $sce.trustAsHtml(div.textContent);
		};
	}])





.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,$httpProvider,$ionicConfigProvider){
	try{
		// Domain Whitelist
		$sceDelegateProvider.resourceUrlWhitelist([
			"self",
			new RegExp('^(http[s]?):\/\/(w{3}.)?bogorhangout\.com/.+$'),
			new RegExp('^(http[s]?):\/\/(w{3}.)?argatourl\.co\.id/.+$'),
		]);
	}catch(err){
		console.log("%cerror: %cdomain whitelist","color:blue;font-size:16px;","color:red;font-size:16px;");
	}
	$stateProvider
	.state("arga_tour",{
		url: "/arga_tour",
			abstract: true,
			templateUrl: "templates/arga_tour-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("arga_tour.about_us", {
		url: "/about_us",
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-about_us.html",
						controller: "about_usCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("arga_tour.artikel", {
		url: "/artikel",
		cache:false,
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-artikel.html",
						controller: "artikelCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("arga_tour.artikel_singles", {
		url: "/artikel_singles/:id",
		cache:false,
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-artikel_singles.html",
						controller: "artikel_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("arga_tour.dashboard", {
		url: "/dashboard",
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-dashboard.html",
						controller: "dashboardCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("arga_tour.paket", {
		url: "/paket",
		cache:false,
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-paket.html",
						controller: "paketCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("arga_tour.paket_singles", {
		url: "/paket_singles/:id",
		cache:false,
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-paket_singles.html",
						controller: "paket_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("arga_tour.promo", {
		url: "/promo",
		cache:false,
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-promo.html",
						controller: "promoCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("arga_tour.promo_singles", {
		url: "/promo_singles/:id",
		cache:false,
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-promo_singles.html",
						controller: "promo_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("arga_tour.slide_tab_menu", {
		url: "/slide_tab_menu",
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-slide_tab_menu.html",
						controller: "slide_tab_menuCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("arga_tour.wahana", {
		url: "/wahana",
		cache:false,
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-wahana.html",
						controller: "wahanaCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("arga_tour.wahana_singles", {
		url: "/wahana_singles/:id",
		cache:false,
		views: {
			"arga_tour-side_menus" : {
						templateUrl:"templates/arga_tour-wahana_singles.html",
						controller: "wahana_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/arga_tour/dashboard");
});
