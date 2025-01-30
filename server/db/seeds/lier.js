export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('lier').del()

  // Inserts seed entries
  await knex('lier').insert([
    { id: 1, word1: 'banana', word2: 'apple', topic: 'fruit' },
    { id: 2, word1: 'kiwi', word2: 'dragon fruit', topic: 'fruit' },
  ])
}
