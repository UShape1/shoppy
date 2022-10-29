# shoppy 

Shoppy is a web app that aims to connect small and medium businesses to consumers by providing online presence that is otherwise hard to attain
## Requirements

Make sure the following packages are installed:
* git
* node 
* npm 

For Ubuntu, run the commands below to install all requirements:

```bash
$ sudo apt install git
$ sudo apt install nodejs
$ curl -L https://npmjs.org/install.sh | sudo sh 
```

## Setting up

Clone the repository and navigate to the root of the directory:

```bash
$ git clone https://github.com/UShape1/shoppy.git
$ cd shoppy
```

Create your own Google Maps API key following the instructions on the [official page](https://developers.google.com/maps/documentation/javascript/get-api-key).

Place your own API key in the root of the project, in a ``.env.local`` file, with the following contents:

```
REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

## Running
After having everything setup, you can run the application using:

```bash
$ npm start
```

This will start the application that is now accesible via any browser at the URL:

```
http://localhost:3000
```

On some browsers, running the aplication requires an extension for allowing ``CORS``, such as [this](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/) for Firefox or [this](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) for Chrome.

## About this demo

This app currently uses the Google Maps API to fetch businesses around the location of the user. This would eventually be replaced by businesses who request to join our database.

## Next steps

Getting businesses interested in joining the platform and generating a big enough user base would allow us to store our own database of businesses that will be provided as suggestions, instead of fetching nearby shops from Google Maps.

It is also important for users to be interested in using the application, so adding a reward system with products and offers that the user can spend their accumulted points on is another key feature that will be added.
