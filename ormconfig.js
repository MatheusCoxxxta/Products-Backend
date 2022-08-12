module.exports = {
    type: process.env.DB_PROVIDER,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [
        process.env.NODE_ENV === 'prod' ?
        './dist/modules/**/infra/typeorm/entities/*.js' :
        './src/modules/**/infra/typeorm/entities/*.ts',
    ],
    migrations: [
        process.env.NODE_ENV === 'prod' ?
        './dist/shared/infra/typeorm/migrations/*.js' :
        './src/shared/infra/typeorm/migrations/*.ts',
    ],
    cli: {
        migrationsDir: process.env.NODE_ENV === 'prod' ?
            './dist/shared/infra/typeorm/migrations' :
            './src/shared/infra/typeorm/migrations',
    },
};