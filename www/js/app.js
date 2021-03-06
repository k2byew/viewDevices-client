var app = angular.module('ionicApp', ['ionic','angularMoment','ngCordova']);

moment.locale('prefixed', {
    relativeTime : {
        future : 'in %s',
        past : 'Updated %s ago',
        s : 'a few seconds',
        m : 'a minute',
        mm : '%d minutes',
        h : 'an hour',
        hh : '%d hours',
        d : 'a day',
        dd : '%d days',
        M : 'a month',
        MM : '%d months',
        y : 'a year',
        yy : '%d years'
    }
});
