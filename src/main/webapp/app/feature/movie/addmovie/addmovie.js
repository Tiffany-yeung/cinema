(function() {

    var AddMovieController =  function($state, movieService)
    {
        var vm = this;

        vm.submit = function()
        {
            vm.movie = {title:vm.title,genre:vm.genre,ageRating:vm.rating };
            movieService.saveMovie(vm.movie).then(function (results) {
                vm.movies  = results;
                console.log("success");
                $state.go('getmovie');
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        };


    };
    angular.module('cinema').controller('AddMovieController', ['$state','movieService', AddMovieController]);
}());