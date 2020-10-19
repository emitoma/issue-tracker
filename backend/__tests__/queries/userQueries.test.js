const dbService = require('../../src/services/dbService');
const userQueries = require('../../src/queries/userQueries');

let db;
beforeAll(() => {
  db = dbService.getDBPool();
});

describe('User query test', () => {
  test('user exists', async () => {
    await userQueries.createUser({
      emailAddress: 'testemail@test.com',
      passwordHash: '$10$8Lela8UFALWw/e41Fdc5auYdoCHhEyywf7Vfz2m8EwwdX1e2FZ.k.',
    });

    console.log(db, 'db in test');
    const [
      user,
    ] = await db.query('SELECT * FROM `user` WHERE email_address = ?', [
      'testemail@test.com',
    ]);
    expect(user).toHaveLength(1);
  });
});