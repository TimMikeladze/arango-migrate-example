import 'dotenv/config'

export default {
  dbConfig: {
    databaseName: process.env.ARANGO_NAME,
    url: process.env.ARANGO_URL,
    auth: {
      username: process.env.ARANGO_USERNAME,
      password: process.env.ARANGO_PASSWORD || ''
    }
  },
  migrationsPath: 'migrations'
}
