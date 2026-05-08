import express from 'express';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const app = express();
const prisma = new PrismaClient({ adapter });

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ status: 'ok', service: 'api-spe' });
});

const PORT = process.env.PORT || 17000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
