var AngularInterface = angular.module("app", []);

AngularInterface.controller("window", ['$scope', '$element', '$window', '$rootScope', function ($s, $e, $w, $root) {
    let navbarHeight = $e[0].querySelector('#header-banner').offsetHeight;
    $s.scrollToElement = function(id) {
        $('html, body').animate({
            scrollTop: $(id).offset().top - (navbarHeight + 40)
        }, 100);
    }
}]);

AngularInterface.controller("portfolio", ['$scope', '$element', '$window', '$rootScope', function ($s, $e, $w, $root) {
    $s.projects = [{   
        name: 'Posession',
        image_url: 'images/posession-screenshot.png',
        description: 'Posession is an eery RPG where you play as a young female protagonist in strange circumstances.',
        download_url: null
    }];

    $s.download = function ($event, project) {
        if(project.download_url === null) {

        }
    }


}]);

