'use strict';

/**
 * @ngdoc service
 * @name d3.d3Service
 * @description
 * # d3Service
 * Factory in the myPageApp.
 */
angular.module('d3',[])
    .factory('d3Service', ['$document', '$q', '$rootScope', function ($document, $q, $rootScope) {
        var d = $q.defer();

        function onScriptLoad() {
            //Load client in the browser
            $rootScope.$apply(function () {
                d.resolve(window.d3);
            });
        }

        // Create a script tag with d3 as the source
        // and call our onScriptLoad callback when it
        // has been loaded
        var scriptTag = $document[0].createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.asyc = true;
        scriptTag.src = 'bower_components/d3/d3.js';
        scriptTag.onreadystatechange = function () {
            if (this.readyState === 'complete') {
                onScriptLoad();
            }
        };
        scriptTag.onload = onScriptLoad;

        var s = $document[0].getElementsByTagName('body')[0];
        s.appendChild(scriptTag);

        // Public API here
        return {
            d3: function () {
                return d.promise;
            }
        };
    }]);
