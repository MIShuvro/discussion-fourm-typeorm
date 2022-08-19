require("dotenv").config({
    path: process.env.ENV_PATH
})
console.log('driver', process.env.DB_HOST, process.env.DB_NAME);

const ormConfig: any = {
    type: process.env.DB_DRIVER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: 'all',
}
export default ormConfig;