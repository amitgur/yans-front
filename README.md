#### YANS - Yet Another Node Starter
YANS Is a starting point for webApps projects based on: Vue3, Quasar 2+, Node, Express and MongoDB.
Yans is a REST api architecture split into two repositories.

"yans-front" is the client project using axios for REST calls and Quasar for front UI.

"yans-back" is the server project using node and mongodb as server and database and passportJS for basic username+password authentication.

#### Multi language
Yans supports multi language websites with yans-translator project.
If you don't need a multi lanuage support, remove the Language module from vuex store. 

#### Installation

1. Clone it to yourProject
2. cd yourProject 
3. rm -rf .git // to disconnect from the github project
4. git init // to create your own repository
5. cp bash/.env ./.env and change to your prefered setup
6. yarn // install all packages
7. npm start
