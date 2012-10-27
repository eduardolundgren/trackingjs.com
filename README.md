# trackingjs.com

This repository contains the source code of the website [trackingjs.com](http://trackingjs.com/). If you're looking for the source code of the library, check the official [tracking.js repository](https://github.com/eduardolundgren/tracking.js).

## how it works?

We use [DocPad](https://github.com/bevry/docpad), a static generator in NodeJS.

## getting started

1. [Install NodeJS](https://github.com/bevry/community/wiki/Installing-Node), if you don't have it yet.

2. Install DocPad globally:

		sudo npm install -fg docpad@6.8

3. Once NodeJS is installed, you just need to clone the project:

		git clone git@github.com:eduardolundgren/trackingjs.com.git

4. Then go to the project's folder:

		cd trackingjs.com

5. Install dependencies:

		docpad install

6. And finally run:

		docpad run

Now you can see the website running in `http://localhost:9778/` :D