scaffold
========

Seed/scaffold/skeleton for a new website using html-builder and bb-server

Clone repo.

Make sure node, npm and bower are installed.

eg: node install -g bower

Edit package.js and bower.js and enter required packages under dependencies.

Edit build/recipe.js to set asset requests and their paths.

To develop site:

	mv ./scaffold ./your-new-project-name
    cd ./your-new-project-name
    ./init 
	./bin/develop
	
To serve only:

	bin/serve-forever

Edit package.js and bower.js then

    node package.js
	
or
    
	node bower.js
	
to update package.json and bower.json respectively.

Make sure to start scripts in ./bin from the site's directory.	

The init script is made non-executable to prevent mishaps, since it removes your
.git directory and starts a new repo.
	
