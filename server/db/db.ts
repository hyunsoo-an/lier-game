import connection from './connection.ts'
import { Lier } from '../../models/lier.ts'

export async function getAllFruits(db = connection): Promise<Lier[]> {
  return db('lier').select()
}
