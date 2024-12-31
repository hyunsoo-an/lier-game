import connection from './connection.ts'
import { Wcup } from '../../models/wcup.ts'

export async function getAllFruits(db = connection): Promise<Wcup[]> {
  return db('wcup').select()
}
