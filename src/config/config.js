module.exports = {
  development: {
    port: 3333,
    host: 'localhost',
    database: {
      host: 'localhost',
      port: 5432,
      name: 'curral-api',
      dialect: 'postgres',
      user: 'postgres',
      password: 'dev123456',
      define: { timestamps: true }
    },
    secret: '67327JHSSA87DDNDAJHDAD8DAGDADGV'
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
    },
    secret: process.env.JWT_SECRET
  }
};
