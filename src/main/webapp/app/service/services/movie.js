(function() {

    var MovieService =  function(cinemaDal) {

        this.getMovies = function()
        {
            return cinemaDal.getMovies();
        };

        this.saveMovie = function(movie)
        {
            return cinemaDal.saveMovie(movie);
        };
    };

    angular.module('cinema').service('movieService', ['cinemaDal', MovieService]);
}());