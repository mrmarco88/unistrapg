(function() {
    'use strict';

    angular
        .module('unistrapgApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('carousel', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'carousel@': {
                	templateUrl: 'app/home/carousel.html',
                    controller: 'CarouselController',
                    controllerAs: 'vm'
                }
            }/*,
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('carousel');
                    return $translate.refresh();
                }]
            }*/
        });
    }
})();
