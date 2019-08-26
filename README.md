# react-kit

Boilerplate code with react-router, webpack and babel <br />
If something doesn’t work, please file an issue.<br />
If you have questions or need help, email me at mughalheree@gmail.com.<br />

<h2><b>Quick Overview</b></h2>
<pre>
git clone https://github.com/mughalhere/react-starter-kit
cd react-kit
npm i
npm start
</pre>
The open http://localhost:8080/ to see your app<br />
<img style="-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;user-select: none;-moz-user-drag: none;-khtml-user-drag: none;-webkit-user-drag: none user-drag: none;" src="https://github.com/mughalhere/react-kit/blob/master/src/images/Home.jpg" />
When you’re ready to deploy to production, create a minified bundle with <code>npm run build</code>
<h2><b>Get Started Immediately</b></h2>
You don’t need to install or configure tools like Webpack or Babel.
They are preconfigured and hidden so that you can focus on the code.
Just clone the repo, and you’re good to go.
<h2><b>Creating an App</b></h2>
You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine
(but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to easily switch Node 
versions between different projects.
It will create a directory called my-app inside the current folder. <br />
Inside that directory, it will generate the initial project structure and install the transitive dependencies: <br />
<pre>
<code>
react-kit
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── index.html
├── server.js
├── webpack.config.js
├── .babelrc
├── src
    ├── components
            └── Home.js
    ├── containers
            └── Container.js
    ├── layout
            └── Header.js
    ├── routes
            └── index.js
    ├── styles
            └── App.css
    ├── images
            ├── logo.png
            └── Home.jpg
    ├── App.js
    ├── index.js
    └── index.html
     
</code>
</pre>
No configuration or complicated folder structures, just the files you need to build your app. <br />
Once the installation is done, you can open your project folder: <br />
<pre>cd react-kit</pre>
Runs the app in development mode. <br />
Open http://localhost:8080 to view it in the browser. <br />
The page will automatically reload if you make changes to the code. <br />
You will see the build errors and lint warnings in the console. <br />

<pre>npm run build</pre>

Builds the app for production to the <code>build</code> folder.
It correctly bundles React in production mode and optimizes the build for the best performance. <br />
The build is minified and the filenames include the hashes. <br />
Your app is ready to be deployed. <br />
To deploy your app simply run the command <code> npm run production</code>
