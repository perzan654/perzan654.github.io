var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope) {
$scope.galleries = [
{ 'title':'HTML',
 'when':'1991-03-14',
 'thumbnailUrl':'img/html.png'
},

{ 'title':'Css',
 'when':'1994-08-04',
 'thumbnailUrl':'img/css.png'
},

{ 'title':'JavaScript',
 'when':'1995-12-04',
 'thumbnailUrl':'img/JavaScript.png'
},

{ 'title':'Angular',
 'when':'2016-06-20',
 'thumbnailUrl':'img/angular.png'
},

{ 'title':'Python',
 'when':'1991-09-20',
 'thumbnailUrl':'img/python.png'
},

{ 'title':'Node.js',
 'when':'2009-05-27',
 'thumbnailUrl':'img/node.png'
}
];

$scope.sortList = [
{
'label':'Alfabetycznie',
'value':'title'
},
{
'label':'Chronologicznie',
'value':'when'
},
{
'label':'Od Najnowszych',
'value':'-when'
},
];

$scope.orderProp = 'when'; 


$scope.galleries.length;
$scope.galleries.sekcja = " Przykladowe obrazy";




});








