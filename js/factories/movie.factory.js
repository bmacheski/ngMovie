"use strict";function Movie(a,b,c,d){var e,f={};return f.getPopular=function(){return e?b.when(e):a.get(c+("/movie/popular?api_key="+d)).then(function(a){return e=a.data})},f.performSearch=function(e){var f,g=c+("/search/movie?api_key="+d+"&query=");return f?b.when(f):a.get(g+e).success(function(a){return f=a.results})},f}angular.module("angularMovie").factory("Movie",Movie);