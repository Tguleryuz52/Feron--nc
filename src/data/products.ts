/* ─── SHARED PRODUCT DATA ─── */
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "tops" | "bottoms";
  isNew: boolean;
  description: string;
  sizes: string[];
  sizeAndFit: string;
  returns: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Adidas Füme Hoodie",
    price: 89,
    image: "/products/Adidas-Füme1-copy.png",
    category: "tops",
    isNew: true,
    description: "A premium heavyweight hoodie crafted from 100% organic cotton. Features a relaxed fit with ribbed cuffs and hem. The subtle Adidas branding adds a refined touch to this essential piece.",
    sizes: ["S", "M", "L", "XL"],
    sizeAndFit: "Relaxed fit. Model wears size M and is 185cm / 6'1\". Chest: S 104cm, M 110cm, L 116cm, XL 122cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Regular fit. Model wears size M and is 183cm / 6'0\". Chest: S 100cm, M 106cm, L 112cm, XL 118cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Oversized fit. Model wears size M and is 185cm / 6'1\". Chest: S 108cm, M 114cm, L 120cm, XL 126cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Regular tapered fit. Model wears size M and is 185cm / 6'1\". Waist: S 74cm, M 80cm, L 86cm, XL 92cm. Inseam: 72cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Regular fit. Model wears size M and is 183cm / 6'0\". Waist: S 74cm, M 80cm, L 86cm, XL 92cm. Inseam: 74cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Relaxed tapered fit. Model wears size M and is 185cm / 6'1\". Waist: S 76cm, M 82cm, L 88cm, XL 94cm. Inseam: 73cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Slim fit. Model wears size M and is 183cm / 6'0\". Chest: S 96cm, M 102cm, L 108cm, XL 114cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Slim fit. Model wears size M and is 183cm / 6'0\". Chest: S 96cm, M 102cm, L 108cm, XL 114cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Slim fit. Model wears size M and is 183cm / 6'0\". Chest: S 96cm, M 102cm, L 108cm, XL 114cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Regular fit. Model wears size M and is 183cm / 6'0\". Chest: S 98cm, M 104cm, L 110cm, XL 116cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Regular fit. Model wears size M and is 183cm / 6'0\". Chest: S 98cm, M 104cm, L 110cm, XL 116cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
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
    sizeAndFit: "Slim fit. Model wears size M and is 183cm / 6'0\". Chest: S 96cm, M 102cm, L 108cm, XL 114cm.",
    returns: "Free returns within 30 days. Items must be unworn with original tags attached. Refunds processed within 5-7 business days.",
  },
];

export function getProduct(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, count = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, count);
}
