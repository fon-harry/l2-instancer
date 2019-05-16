module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: "3306",
      user: "l2_instancer",
      password: "l2_instancer",
      database: "l2_instancer"
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + "/db/migrations"
    }
    // debug: true
  }
};
