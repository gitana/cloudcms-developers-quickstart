# Cloud CMS Quick Start App

This GitHub repository contains the Cloud CMS QuickStart Application source code.

## Getting Started

1. Perform a Git Clone to pull down a copy of this Git repo locally.

2. Make any adjustments needed to `html/custom.js` to insert your API keys.


## How to Run

1. Install the Cloud CMS command line client

    npm install -g cloudcms-cli

2. Connect to Cloud CMS

    cloudcms init

3. Pull down your gitana.json file

    cloudcms application download-api-keys --application <%=application%>
    
    This file should be saved alongside index.html


3. Start the Cloud CMS local server

The Cloud CMS command line tool comes with a handy web server that you can run to serve your Sample App locally.
From the command line, go to the directory where this GitHub repository lives on your local computer, and then:

````
cloudcms server start
````

4. Open it up in a browser

Point your favorite browser to `http://localhost:2999`.

