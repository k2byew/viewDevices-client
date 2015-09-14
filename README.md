This project uses Ionic to build an Android app which can use the json file served by viewClient-server.

To begin:
`ionic start APP-NAME blank`

Then:

`ionic platform add android`

`bower install ngCordova`

`cordova plugin add org.apache.cordova.vibration`

`cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git`

Then update the www directory.

Remember:
To use `ionic run --livereload` or `ionic serve --lab`, manually update the path to the API as defined in `js/services/*` to match proxy settings in `ionic.project`
