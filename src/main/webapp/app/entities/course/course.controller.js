(function() {
    'use strict';

    angular
        .module('unistrapgApp')
        .controller('CourseController', CourseController);

    CourseController.$inject = ['$scope', '$state', 'Course', 'CourseSearch'];

    function CourseController ($scope, $state, Course, CourseSearch) {
        var vm = this;

        vm.courses = [];
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Course.query(function(result) {
                vm.courses = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            CourseSearch.query({query: vm.searchQuery}, function(result) {
                vm.courses = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
