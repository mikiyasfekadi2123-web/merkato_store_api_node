# Merkato Store API

Express + Prisma + PostgreSQL REST API for the Merkato Store project.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy .env.example to .env and fill in your values
cp .env.example .env

# 3. Create the database in pgAdmin: merkato_store

# 4. Run migrations (creates all tables)
npx prisma migrate dev --name init

# 5. Seed the products
npm run seed

# 6. Start the dev server
npm run dev
```

## Folder Structure

```
merkato_store_api_node/
├── server.js          ← entry point (add routers here)
├── prisma/
│   ├── schema.prisma  ← database models (Product, User, CartItem)
│   └── seed.js        ← populates products table
└── src/
    ├── prisma.js      ← PrismaClient singleton
    ├── routes/        ← (you will create these)
    ├── controllers/   ← (you will create these)
    └── middleware/    ← (you will create these)
```
