To run with docker :

locally -> 
1. yarn
2. yarn build

Then run 

`docker build -t websocket-demo .`

`docker run -p 5000:5000 -p 8080:8080 --name socket-demo-instance websocket-demo`

You will be able to see in the server logs that a client connected and in the chrome dev console you will see `something` logged out

