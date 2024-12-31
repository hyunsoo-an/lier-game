import { Router } from 'express'

import * as db from '../db/wcup.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const fruits = await db.getAllWcups()

    res.json({ fruits: fruits.map((wcup) => wcup.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
