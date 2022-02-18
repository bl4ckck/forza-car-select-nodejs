# Alvin Naufal: Assignment Authentication & Authorization
- Login with cookies and logout (destroy cookies)
- Register as Student (if role undefined)
- Middleware for error handling and auth
- Admin can delete User in web page and can do CRUD operation via API
- Deployed to Heroku
- Sass styling
- ORM Sequelize
- 2 Tables (Peoples, Users)
- Seeder and Migration


## Installation

Required [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```
By default, the server will run on port 5000. You can specify your own port in .env


## API Endpoint
Visit [API Documentation](https://documenter.getpostman.com/view/1979077/UVkjvHMh)
OR
Import School-Alvin Naufal.postman_collection.json in Postman

## License

MIT
