#setup npm
docker build -t sm-industries .
docker run -it --network="host" -v $(pwd):/app --name sm-industries sm-industries bash

#create app using next.js
npx create-next-app@latest sm-industries --typescript

#created components,pages, styles

#start app 
npm run dev
