// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL:'https://api.openweathermap.org/data/2.5/onecall?lat=20.276266&lon=73.008308&exclude=hoursly,minutely,current&appid=',
  API_KEY:'5100c809e501aa9a0ede4cccb13455a5',
  IMAGE_URL:'https://openweathermap.org/img/wn/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
