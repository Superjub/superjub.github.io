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
        name: "Posession",
        image_url: 'images/projects/posession/posession-screenshot.png',
        description: 'Posession is an eerie RPG where you play as a young female protagonist in strange circumstances.',
        download_url: null
    },
    {
        name: "Clown Calamity",
        image_url: '',
        description: 'Clown Calamity is a vehicle-based game where you dodge wacky obstacles while surviving as long as possible.',
        download_url: null
    },
    {
        name: "Bradley's Blackjack",
        image_url: "images/projects/blackjack/blackjack_image_2.png",
        description: "A terminal-based pure text game created using C++ featuring standard Blackjack rules as well as a points system to track score.",
        download_url: "https://github.com/Superjub/blackjack_vs_console_2.0/archive/master.zip"
    }];

    $s.download = function (url) {
        if (url === null) {
            return;
        }
        console.log(url);
        $w.open(url);
    }

}]);

AngularInterface.controller("project", ['$scope', '$element', '$window', '$rootScope', function ($s, $e, $w, $root) {

}]);

