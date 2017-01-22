const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {username: 'Rachel', first_name: 'Rachel', last_name: 'Schmurb', email: 'rachel@example.com', password: '1234', role: 'admin'},
  {username: 'Michelle Obama', first_name: 'Michelle', last_name: 'Obama', email: 'michelle@example.com', password: '1234', role: 'advocate'}
], user => db.model('users').create(user))

const seedIssues = () => db.Promise.map([
  {username: 'ChelseaManning', contact_method: 'email', email: 'chelsea@example.com', description: 'sexism and exclusion', advocate_id: 2},
  {username: 'SuperGirl', email: 'supergirl@example.com', contact_method: 'email', description: 'sexual harrasment'},
  {username: 'Lois Lane', contact_method: 'skype', skype: 'loislane', description: 'discrimination'}
], issue => db.model('issues').create(issue))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedIssues)
  .then(issues => console.log(`Seeded ${issues.length} issues OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
