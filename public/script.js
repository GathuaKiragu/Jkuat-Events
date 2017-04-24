	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the food page
			.when('/free_food', {
				templateUrl : 'pages/food.html',
				controller  : 'foodController'
			})

			// route for the arts page
			.when('/arts', {
				templateUrl : 'pages/arts.html',
				controller  : 'artsController'
			})

			// route for the login page
			.when('/login', {
				templateUrl : 'pages/login.html',
				controller  : 'loginController'
			})
			.when('/map', {
				templateUrl : 'pages/map.html',
				controller  : 'mapController'
			})
			// route for the week page
			.when('/week', {
				templateUrl : 'pages/week.html',
				controller  : 'weekController'
			})

			// route for the student page
			.when('/student', {
				templateUrl : 'pages/student.html',
				controller  : 'studentController'
			})
			// route for the student page
			.when('/organization', {
				templateUrl : 'pages/organization.html',
				controller  : 'organizationController'
			})
			// route for the event page
			.when('/event', {
				templateUrl : 'pages/event.html',
				controller  : 'eventController'
			})
			.when('/eventsMap', {
				templateUrl : 'pages/eventsMap.html',
				controller  : 'eventsMapController'
			})
			.when('/profile', {
				templateUrl : 'pages/profile.html',
				controller  : 'profileController'
			});
	})
	.directive('mapCanvas', function() {
    return {
        restrict: 'E',
        link: function(scope, element) {
        	alert("s");
            var mapOptions = {
                zoom: 8,
                center: new google.maps.LatLng(-34.397, 150.644)
            };
            new google.maps.Map(element[0], mapOptions);
        }
    };
});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope, $rootScope, $window) {
		// create a message to display in our view
		$scope.message = 'All the awesome events!';
		$scope.cat = '';
		$scope.thisWeek = false;
		$rootScope.orgUser = '';
		$rootScope.currEvent = '';
		$rootScope.newEvent = {
			id: 15,
	        title: "",
	        description: "",
	        peopleFav: 0,
	        people : 0,
	        location: "",
	        category: "",
	        host: "",
	        date: "",
	        time: "",
	        favorite: false,
	        pic: 'images/event.png',
	        recommended: false
		}
		$rootScope.events = [
	        {
	          id: 1,
	          title: 'Food And Nutrition CookOut',
	          description: 'Come join us and enjoy free healthy meals',
	          peopleFav: 195,
	          people: 64,
	          location: 'Assembly Hall',
	          category: 'free_food',
	          host: 'HKSA',
	          date: '04/24/2017',
	          time: '19:00',
	          favorite: false,
	          pic: 'http://www.clicked.co.ke/upload/news/image_1485100839_38533181.jpg',
	          recommended: true
	        }, {
	          id: 2,
	          title: 'Nissin Food Launch',
	          description: 'Jkuat Partners with Nissin to foster food security',
	          peopleFav: 15,
	          people: 24,
	          location: 'JKUAT GRADUATION SQUARE',
	          category: 'free_food',
	          host: 'Mr Koki Ando',
	          date: '01/25/2017',
	          time: '13:00',
	          favorite: false,
	          pic: 'http://www.jkuat.ac.ke/wp-content/uploads/2014/01/44443.jpg',
	          recommended: true
	        }, {
	          id: 3,
	          title: 'PLAY Performance',
	          description: 'Actors from Wasanii Arts are presenting a skitt',
	          peopleFav: 12,
	          people: 43,
	          location: 'CLB',
	          category: 'performing_arts',
	          host: 'PL2Y',
	          date: '12/11/2016',
	          time: '20:00',
	          favorite: false,
	          pic: 'https://pbs.twimg.com/media/COP4szeWgAEaoJm.jpg',
	          recommended: false
	        },{
	          id: 4,
	          title: 'Student Union Council',
	          description: 'Student Union is looking for new members',
	          peopleFav: 45,
	          people : 22,
	          location: 'NSC',
	          category: 'other',
	          host: 'JKUAT Student Union',
	          date: '02/11/2017',
	          time: '19:00',
	          favorite: false,
	          pic: 'http://www.jkuat.ac.ke/wp-content/uploads/2013/10/Outgoing-JKUSO-Secretary-General-Edwin-Jalango-left-cast-his-vote-in-the-Tuesday-polls.jpg',
	          recommended: false
	        },{
	          id: 5,
	          title: 'BBIT Projects Pitch',
	          description: 'BBIT Project pitch, free pizza and drinks!',
	          peopleFav: 27,
	          people: 16,
	          location: 'Assembly Hall',
	          category: 'other',
	          host: 'Mr. Loki',
	          date: '06/22/2017',
	          time: '19:00',
	          favorite: false,
	          pic: 'https://i.ytimg.com/vi/C_hFtt_NPBw/hqdefault.jpg',
	          recommended: true
	        },{
	          id: 6,
	          title: 'KUBAMBA!!',
	          description: 'KUBAMBA Team  from citizen will be visiting us on Sunday 31st',
	          peopleFav: 69,
	          people : 41,
	          location: 'Assembly Hall',
	          category: 'performing_arts',
	          host: 'Njugush And Joyce',
	          date: '02/11/2017',
	          time: '20:00',
	          favorite: false,
	          pic: 'http://www.kubamba.com/uploads/5/5/2/6/55266079/8542146_orig.jpg',
	          recommended: true
	        },{
	          id: 7,
	          title: 'Music Audition',
	          description: 'Music video audition: Elani',
	          peopleFav: 42,
	          people : 23,
	          location: 'CLB',
	          category: 'performing_arts',
	          host: 'Elani',
	          date: '10/05/2017',
	          time: '17:00',
	          favorite: false,
	          pic: 'http://www.musicnotes.com/blog/wp-content/uploads/Auditions-750x450.jpg',
	          recommended: true
	        },{
	          id: 8,
	          title: 'Class of 2005 Alumni Reunion',
	          description: 'Come join class of 2005 and have a bite of pizza',
	          peopleFav: 52,
	          people : 41,
	          location: 'Kempinski',
	          category: 'other',
	          host: 'Student Leader',
	          date: '12/15/2017',
	          time: '16:00',
	          favorite: false,
	          pic: 'http://www.jkuat.ac.ke/userfiles/image/news/babaroa-dec-2011-001.jpg',
	          recommended: true
	        },{
	          id: 9,
	          title: 'Theatre',
	          description: 'Show: Murder Mystery Party',
	          peopleFav: 45,
	          people : 34,
	          location: 'Edison Theatre',
	          category: 'performing_arts',
	          host: 'Wasanii Arts',
	          date: '12/9/2016',
	          time: '19:00',
	          favorite: false,
	          pic: 'https://3.bp.blogspot.com/-7c5nWc82Zro/WBG6_mZoEZI/AAAAAAADXIc/XWNb0Tuh76UB94zxRboQBI8Kdgfr34iigCLcB/s640/31.JPG',
	          recommended: false
	        },{
	          id: 10,
	          title: 'Christian Union Afternoon Tea',
	          description: 'Tuesday afternoon tea with desserts',
	          peopleFav: 56,
	          people : 39,
	          location: 'CLB',
	          host: 'CU ChairPerson',
	          category: 'performing_arts',
	          date: '04/27/2017',
	          time: '14:00',
	          favorite: false,
						pic: 'http://discover.jkuat.ac.ke/wp-content/uploads/2016/05/IMG_2545-800x445.jpg',
	          recommended: true
	        },{
	          id: 11,
	          title: 'Computer Science Reading Session',
	          description: 'Reading week is coming, come prepare for your finals',
	          peopleFav: 102,
	          people : 98,
	          location: 'Graduation Square',
	          category: 'other',
	          host: 'SU',
	          date: '12/9/2016',
	          time: '17:30',
	          favorite: false,
	          pic: 'http://discover.jkuat.ac.ke/wp-content/uploads/2016/05/IMG_2545-800x445.jpg',
	          recommended: true
	        }
        ];

        $rootScope.savedEvents = [
            {
	          id: 12,
	          title: 'Saved event one',
	          description: 'This is saved by student user.',
	          location: 'UNKNOWN',
	          category: 'student_user',
	          date: '09/11/2015',
	          time: '15:00',
	          host: 'SU',
	          people : 98,
	          favorite: false
	        },{
	          id: 13,
	          title: 'Saved event two',
	          description: 'This is saved by student user.',
	          location: 'UNKNOWN',
	          category: 'student_user_favor',
	          date: '09/15/2015',
	          time: '16:00',
	          host: 'SU',
	          people : 98,
	          favorite: false
	        }
        ];
        $scope.importFB = function(){
        	$rootScope.events.push({
	          id: 14,
	          title: 'SU Election',
	          description: 'SU Election 2016 (added from Facebook)',
	          peopleFav: 34,
	          people : 73,
	          location: 'Olin 1st floor',
	          category: 'internal',
	          host: 'SU',
	          date: '12/31/2016',
	          time: '13:00',
	          pic: 'images/election.png',
	          recommended: false
	        },
	        {
	          id: 15,
	          title: 'SU Hackathon',
	          description: 'Come join the first hackthon hosted by SU! (added from Facebook)',
	          peopleFav: 50,
	          people : 33,
	          location: 'DUC 240',
	          category: 'other',
	          host: 'SU',
	          date: '12/12/2016',
	          time: '18:00',
	          pic: 'images/hackathon.jpg',
	          recommended: false
	        },
	        {
	          id: 16,
	          title: 'Group Meeting',
	          description: 'SU FL16 12th meeting (added from Facebook)',
	          peopleFav: 22,
	          people : 30,
	          location: 'Simon Hall 109',
	          host: 'SU',
	          category: 'internal',
	          date: '12/10/2016',
	          time: '14:00',
	          pic: 'images/event.png',
	          recommended: false
	        },
	        {
	          id: 17,
	          title: 'Career Fair',
	          description: 'On-campus Career Fair with 199 employers! (added from Facebook)',
	          peopleFav: 45,
	          people : 52,
	          location: 'South 40',
	          category: 'job',
	          host: 'SU',
	          date: '12/13/2016',
	          time: '15:30',
	          pic: 'images/careerfair.jpg',
	          recommended: false
	        });

        }
	    $rootScope.orderByDate = function(item) {
		    var parts = item.date.split('/');
		    var number = parseInt(parts[2] + parts[0] + parts[1]);
		    return -number;
		};


		$rootScope.addEvent = function() {
			$rootScope.events.push($rootScope.newEvent);
		}

		$rootScope.setCurr = function(e) {
			$rootScope.currEvent = e;
		}

		$rootScope.edit = function(e) {
			$rootScope.newEvent = e;
			var index = $rootScope.events.indexOf(e);
  			$rootScope.events.splice(index, 1);
		}

		$rootScope.getDataSource = function(host, events) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if (host == events[i].host) {
					result.push(events[i]);
				}
			}
			return result;
		}

		$rootScope.getFavoriteEvents = function(events) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if (events[i].favorite == true) {
					result.push(events[i]);
				}
			}
			return result;
		}

		$rootScope.getRecommendedEvents = function(events) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if (events[i].recommended == true) {
					result.push(events[i]);
				}
			}
			return result;
		}

		$rootScope.getSavedEvents = function(events, savedEvents) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if (true == events[i].favorite) {
					result.push(events[i]);
				}
			}
			for (var i = 0; i < savedEvents.length; i++) {
				if (true == savedEvents[i].favorite) {
					result.push(savedEvents[i]);
				}
			}
			return result;
		}

		$rootScope.getDataByUser = function(events) {
			var result = [];
			for (var i = 0; i < events.length; i++) {
				if ($rootScope.orgUser == events[i].host) {
					result.push(events[i]);
				}
			}
			return result;
		}


		$rootScope.init = function (user) {
			$rootScope.orgUser = user;
		}


		$rootScope.addToFavorite = function(event) {
            var index = $rootScope.events.indexOf(event);
  			$rootScope.events[index].favorite = true;
  			$rootScope.events[index].recommended = false;
		}

		$rootScope.removeFromFavorite = function(event) {
            var index = $rootScope.events.indexOf(event);
          	$rootScope.events[index].favorite = false;

		}

		$rootScope.removeFromRecommendations = function(event) {
            var index = $rootScope.events.indexOf(event);
            $rootScope.events[index].recommended = false;
		}

		$rootScope.remove = function(item) {
  			var index = $rootScope.events.indexOf(item);
  			$rootScope.events.splice(index, 1);
		}

	});

	scotchApp.controller('foodController', function($scope, $rootScope) {
		$scope.message = 'All about food.';

	});

	scotchApp.controller('artsController', function($scope, $rootScope) {
		$scope.message = 'All about arts.';

	});

	scotchApp.controller('loginController', function($scope, $rootScope) {
		$scope.message = 'Login page.';
	});
	scotchApp.controller('eventsMapController', function($scope, $rootScope) {
		$scope.message = 'Login page.';
	});
	scotchApp.controller('mapController', function($scope) {
		 $scope.message = 'Detail page.';
		 $scope.$on('$viewContentLoaded', function(){
		 initMap();
  });
	});
	scotchApp.controller('weekController', function($scope, $rootScope) {
		$scope.message = 'Events this week.';

	});
	scotchApp.controller('studentController', function($scope, $rootScope) {
		$scope.message = 'Student page.';
		$scope.favorite = false;
		$scope.notInterested = false;
	});
	scotchApp.controller('organizationController', function($scope, $rootScope) {
		$scope.message = 'Organization page.';
	});
    scotchApp.controller('eventController', function($scope, $rootScope) {
		$scope.message = 'Event page.';
	});
	scotchApp.controller('profileController', function($scope, $rootScope) {
		$scope.message = 'Profile page.';
	});

	scotchApp.filter('thisWeekFilter', function() {
	    return function(items, thisWeek) {
	    	if (thisWeek) {
		    	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	            var ret = [];

		    	for (var i = 0; i < items.length; i++) {
		    		var item = items[i];
		    		var dateString = item.date;
		    	    var dateArray = dateString.split('/');
		    	    var date = new Date(dateArray[2], dateArray[0]-1, dateArray[1]);
		    	    var currentDate = new Date();
		    	    var diffDays = Math.round(Math.abs((date.getTime() - currentDate.getTime())/(oneDay)));
		    	    if (diffDays >= 0 && diffDays <= 7) {
		    	    	ret.push(item);
		    	    }


				}

		        return ret;
	        } else {
	        	return items;
	        }
	    };
	});

 // pull test here
