
# LandInsight Test

This is my solution to the LandInsight test as described [here](https://github.com/landtechnologies/technical-challenge). I have chosen to go for a frontend only solution. 

You can view a running version of the application [here](https://build-jhpbtbsrne.now.sh/).

This is a JavaScript application initiated with `create-react-app` and it can be run with `yarn run` or `npm run` and tested with `yarn test` or `npm test`.

## Technical decisions

* Used create react app to avoid having to create my own build pipeline and testing solution. And because I thought React would be a good fit for this project. Although certainly it could have been done with no framework.
* Tried to abstract as much of the business logic as possible into pure functions in their own files in `src/lib` to help me to write them using TDD.
* All app state is held at the top level and updated with a reducer. This is probably overkill for an app as simple as this, but it lays a good foundation for the app's growth and allows state changes to be unit tested more easily.
* The price data has been indexed to make lookup in the array more performant. It has only occurred to me now, but it would have been better from a performance point of view to uses these indexes as keys in an object and where the data for each property is stored... Oh well ¯\_(ツ)_/¯

## Compromises, trade-offs, and assumptions

* Only implemented a frontend solution.
* Took 3 hours and 40 minutes to implement this solution.
* Have assumed that users are on an evergreen browser, getting into the weeds on browser compatibilty is a big ask given the time restrictions.
* Had planned to use Jest's snapshot testing on components, but decided not to after overshooting the time limit by quite a bit already.
* Processing of the raw text data is done on the front end. I have not perf tested this app, but I believe the most expensive part of this processing is sorting the data, which is necessary to obtain a percentile value for each property. Ideally this processing would be done on the back end and the results cached so the final page would render more quickly.