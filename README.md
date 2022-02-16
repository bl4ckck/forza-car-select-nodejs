# Alvin Naufal: CRUD (Raw Query)
- 2 Tables (Cars, Manufactures)
- Seeder and Migration
- One to Many (Join Query)
- Raw query CRRUD
- Middleware for error handling
- Env variable as in assignment instruction
- Packages : express , pg, dotenv
- .gitignore > node_modules, .env

## Installation

Required [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm run migrate
npm run seed
npm run dev
```
By default, the server will run on port 5000. You can specify your own port in .env


## API Endpoint
Import Alvin Naufal.postman_collection.json in Postman
#### Cars Endpoint
| Method | Endpoint | Description |
| ------ | ------ | ------ |
| POST | /api/v1/cars | Insert Car; Request--> { manufacture_id:number, name:string, image:string, year:string }
| GET | /api/v1/cars | Get All Cars 
| GET | /api/v1/cars/:id | Get Cars By ID
| GET | /api/v1/cars/rel/manufactures | Get All Manufacture Cars (Join)
| GET | /api/v1/cars/rel/manufactures/:id | Get Manufacture Cars By ID (Join)
| PUT | /api/v1/cars/:id | Update Car; Request--> { manufacture_id:number, name:string, image:string, year:string }
| DELETE | /api/v1/cars/:id | Delete Car
#### Manufactures Endpoint
| Method | Endpoint | Description |
| ------ | ------ | ------ |
| POST | /api/v1/manufactures | Insert Manufacture; Request--> { manufacture:string }
| GET | /api/v1/manufactures | Get All Manufactures 
| GET | /api/v1/manufactures/:id | Get Manufactures By ID
| PUT | /api/v1/manufactures/:id | Update Manufacture; Request--> { manufacture:string }
| DELETE | /api/v1/manufactures/:id | Delete Manufacture


## License

MIT