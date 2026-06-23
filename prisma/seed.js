const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "Wireless Headphones",
        category: "Electronics",
        description: "High-quality sound with 20-hour battery life.",
        price: 45.0,
        image: "/images/product1.jpg",
      },
      {
        name: "Cotton Summer Dress",
        category: "Clothing",
        description: "Lightweight and breathable fabric, perfect for warm climates.",
        price: 28.0,
        image: "/images/product2.jpg",
      },
      {
        name: "Ethiopian Organic Coffee",
        category: "Food & Beverage",
        description: "Premium single-origin coffee from the highlands of Ethiopia.",
        price: 12.0,
        image: "/images/product3.jpg",
      },
      {
        name: "Handmade Ceramic Vase",
        category: "Home & Living",
        description: "Traditional handcrafted ceramic art piece.",
        price: 18.0,
        image: "/images/product4.jpg",
      },
    ],
  });

  console.log("✓ Products seeded");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
