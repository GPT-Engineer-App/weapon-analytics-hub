import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const router = express.Router();

router.get('/weapons', async (req, res) => {
  try {
    const { search } = req.query;
    let query = 'SELECT * FROM weapondata';
    let values = [];

    if (search) {
      query += ' WHERE name ILIKE $1';
      values.push(`%${search}%`);
    }

    query += ' LIMIT 100'; // Limit the results to prevent overwhelming the client

    const { rows } = await pool.query(query, values);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching weapons' });
  }
});

export default router;
