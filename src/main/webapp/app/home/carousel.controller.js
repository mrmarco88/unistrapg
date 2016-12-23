(function() {
	'use strict',

	angular
		.module('unistrapgApp')
		.controller('CarouselController', CarouselController);

	CarouselController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];
	
	function CarouselController ($scope, Principal, LoginService, $state) {		
		var vm = this;
		
		
		vm.myInterval = 5000;
		var slides = vm.slides = [];
		vm.addSlide = function() {
			var newWidth = 600 + slides.length + 1;
			slides.push({
				image: 'http://placekitten.com/' + newWidth + '/300',
				text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
				['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
			});
		};
		for (var i=0; i<4; i++) {
			vm.addSlide();
		}
	}
	
})();