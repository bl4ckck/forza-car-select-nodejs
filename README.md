# Alvin Naufal: MVC Express + EJS

This is the Forza Horizon 4 car selection menu made with Express

- Local JSON file for data
- Template engine with EJS
- Your purchased cars will be in /garage
- API endpoint

## Tech

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [EJS] - template engine
- [SASS] - CSS extension language
- [Twitter Bootstrap] - great UI boilerplate for modern web apps


## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm run dev
```
By default, the server will run on port 5000. You can specify your own port in .env 

## API Endpoint
| Method | Endpoint | Description |
| ------ | ------ | ------ |
| GET | /api/v1/cars | Get All Cars 
| GET | /api/v1/cars/:id | Get Cars By ID 
| GET | /api/v1/cars/garage/cars | Get All Garage Cars 
| GET | /api/v1/cars/garage/cars/:id | Get Garage Cars By ID 
| POST | /api/v1/cars | Buy Car; Request--> { id: number } 

## License

MIT

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [express]: <http://expressjs.com>
   [EJS]: <https://ejs.co>
   [SASS]: <https://sass-lang.com>