# Cloud CMS Quick Start App

This GitHub repository contains the Cloud CMS QuickStart Application source code.

## Getting Started

1. Perform a Git Clone to pull down a copy of this Git repo locally.

2. Make any adjustments needed to `html/public/index.html` to insert your API keys.


## How to Run

1. Install the Cloud CMS command line client

````
npm install -g cloudcms-cli
````

2. Connect to Cloud CMS

````
cloudcms init
```` 

Walk through the prompts to connect to your Cloud CMS installation.

3. Start the Cloud CMS local server

The Cloud CMS command line tool comes with a handy web server that you can run to serve your Sample App locally.
From the command line, go to the directory where this GitHub repository lives on your local computer, and then:

````
cd html
cloudcms server
````

4. Open it up in a browser

Point your favorite browser to `http://localhost:2999`.

