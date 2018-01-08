(function() {

    var GetMovieController =  function(movieService)
    {
        var vm = this;

        function init() {
            movieService.getMovies().then(function (results) {
                console.log("In movie controller get movie " + results);
                vm.movies  = results;
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        }

        init();
    };
    angular.module('cinema').controller('GetMovieController', ['movieService', GetMovieController]);
}());