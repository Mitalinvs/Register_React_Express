CLIENT:
1. npm init vite	//to create react app
2. npm install bootstrap(designing) axios(http reques and response) react-router-dom(routing)
3. npm run dev	//run react app server

SERVER:
1. npm init -y	//to initialise and create package.json file inside server(initialize a new Node.js project with default values, without prompting the user for any configuration details. The -y flag stands for "yes" and automatically accepts all the default settings, creating a package.json file with default values.)
2. npm install express(Nodejs framework) mongoose(to connect mongodb to react) cors(max our backend side in frontend, middleware-security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page) nodemon(refreash server when make changes)
3. "start": "nodemon index.js" (inside package.json inside script)	//to start whenever make changes
4. npm start