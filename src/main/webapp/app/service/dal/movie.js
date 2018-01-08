"use strict";

(function () {

    angular.module("cinema").service("cinemaDal", ["dal", CinemaDal]);

    function CinemaDal (dal) {

        this.getMovies = function () {
            return dal.http.GET("rest/cinema/json");
        };

        this.saveMovie = function (movieToSave) {
            return dal.http.POST("rest/cinema/json", movieToSave);
        };



    }
}());
