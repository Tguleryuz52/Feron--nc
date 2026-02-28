import fs from 'fs';

const products = [
  {
    id: 1,
    name: "Adidas Füme Hoodie",
    price: 89,
    image: "/products/Adidas-Füme1-copy.png",
    category: "tops",
    isNew: true,
    description: "A premium heavyweight hoodie crafted from 100% organic cotton. Features a relaxed fit with ribbed cuffs and hem. The subtle Adidas branding adds a refined touch to this essential piece.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Adidas Siyah Tee",
    price: 49,
    image: "/products/Adidas-Siyah1-copy.png",
    category: "tops",
    isNew: false,
    description: "A minimalist black tee made from premium jersey cotton. Clean lines and a contemporary fit make this a wardrobe staple. Features a soft hand feel and excellent drape.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Adidas Bej Hoodie",
    price: 89,
    image: "/products/Adidas-bej1-copy.png",
    category: "tops",
    isNew: false,
    description: "Warm beige heavyweight hoodie with a luxurious brushed interior. The oversized silhouette provides effortless comfort. Perfect for layering in transitional weather.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Adidas Bordo Jogger",
    price: 79,
    image: "/products/Adidas-bordo1-copy.png",
    category: "bottoms",
    isNew: true,
    description: "Rich burgundy joggers crafted from premium French terry. Features an elasticated waist with internal drawcord, side pockets, and tapered leg. The perfect balance of sport and style.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Adidas Green Track",
    price: 79,
    image: "/products/Adidas-green1-copy.png",
    category: "bottoms",
    isNew: false,
    description: "Forest green track pants in a classic athletic silhouette. Made from a soft cotton-polyester blend with moisture-wicking properties. Features contrast side detailing and zip pockets.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Adidas Indigo Pant",
    price: 79,
    image: "/products/Adidas-İndigo1-copy.png",
    category: "bottoms",
    isNew: false,
    description: "Deep indigo sweatpants with a structured fit. Heavyweight 380gsm fleece provides warmth and durability. Clean lines and minimal branding for a refined casual look.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Polo Beyaz Classic",
    price: 129,
    image: "/products/Lacoste-Polo-Beyaz-copy.png",
    category: "tops",
    isNew: true,
    description: "Timeless white polo in ultra-fine piqué cotton. The classic two-button placket and mother-of-pearl buttons elevate this essential. A refined collar sits perfectly with or without a blazer.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Polo Bold Green",
    price: 129,
    image: "/products/Lacoste-Polo-Bold-green1-copy.png",
    category: "tops",
    isNew: false,
    description: "A bold green polo that commands attention. Crafted from premium long-staple cotton for exceptional softness and color retention. Features a ribbed collar and two-button placket.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Polo Bordo Classic",
    price: 129,
    image: "/products/Lacoste-Polo-Bordo-1-copy.png",
    category: "tops",
    isNew: false,
    description: "Rich bordeaux polo in signature piqué weave. The deep, saturated color pairs beautifully with neutral tones. Features classic mother-of-pearl buttons and a self-finished hem.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    name: "Polo White Blue",
    price: 129,
    image: "/products/Lacoste-Polo-White-Blue-1-copy.png",
    category: "tops",
    isNew: false,
    description: "A fresh white and blue polo with contrast detailing. Made from breathable cotton piqué, ideal for warmer days. The subtle color blocking adds a contemporary edge.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 11,
    name: "Polo White Green",
    price: 129,
    image: "/products/Lacoste-Polo-White-Green-1-copy.png",
    category: "tops",
    isNew: true,
    description: "Crisp white polo with vibrant green accents. Premium piqué cotton ensures breathability and comfort. A modern interpretation of a timeless classic.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    name: "Polo Indigo Classic",
    price: 129,
    image: "/products/Lacoste-Polo-İndigo-1-copy.png",
    category: "tops",
    isNew: false,
    description: "Deep indigo polo with a sophisticated feel. The rich color is achieved through a special dyeing process for lasting vibrancy. Features a structured collar and pearl buttons.",
    sizes: ["S", "M", "L", "XL"],
  }
];

let sql = `-- --------------------------------------------------------\n`;
sql += `-- Feron E-commerce Seed Data\n`;
sql += `-- Run this script in the Supabase SQL Editor AFTER schema.sql\n`;
sql += `-- --------------------------------------------------------\n\n`;

sql += `-- 1. KATEGORILERI EKLEYELIM\n`;
sql += `INSERT INTO public.categories (id, name, slug, "desc") VALUES \n`;
sql += `(1, 'Tops', 'tops', 'T-shirts, hoodies and polos'),\n`;
sql += `(2, 'Bottoms', 'bottoms', 'Joggers, pants and shorts')\n`;
sql += `ON CONFLICT (id) DO NOTHING;\n\n`;

sql += `-- 2. URUNLERI EKLEYELIM\n`;
sql += `INSERT INTO public.products (id, name, slug, "desc", price, category_id, images, sizes, stock, is_featured) VALUES \n`;

const productLines = products.map(p => {
  const catId = p.category === 'tops' ? 1 : 2;
  const rawDesc = p.description.replace(/'/g, "''");
  
  const toSlug = (text) => text.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ı/g, 'i')
    .replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g');
  
  const slug = toSlug(p.name);
  return `(${p.id}, '${p.name}', '${slug}', '${rawDesc}', ${p.price}, ${catId}, ARRAY['${p.image}'], ARRAY['${p.sizes.join("','")}'], 100, ${p.isNew})`;
});

sql += productLines.join(',\n') + `\nON CONFLICT (id) DO NOTHING;\n`;

fs.writeFileSync('C:\\Users\\guler\\OneDrive\\Masaüstü\\feron-ecommerce\\supabase\\seed.sql', sql);
console.log('Seed SQL generated automatically!');
