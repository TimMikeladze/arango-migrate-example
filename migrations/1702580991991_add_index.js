/**
 * @typedef { import("arango-migrate").Migration } Migration
 */

/**
 * @type { Migration }
 */
const migration = {
  collections() {
    return ['todo']
  },
  async beforeUp (db) {
    await db.collection('todo').ensureIndex({
      name: 'index_todo_completed',
      type: 'persistent',
      fields: ['completed'],
      inBackground: false
    })
  },
  async afterDown (db) {
    await db.collection('todo').dropIndex('index_todo_completed')
  }
}

export default migration
