-- --------------------------------------------------------
-- Feron E-commerce Seed Data
-- Run this script in the Supabase SQL Editor AFTER schema.sql
-- --------------------------------------------------------

-- 1. KATEGORILERI EKLEYELIM
INSERT INTO public.categories (id, name, slug, "desc") VALUES 
(1, 'Tops', 'tops', 'T-shirts, hoodies and polos'),
(2, 'Bottoms', 'bottoms', 'Joggers, pants and shorts')
ON CONFLICT (id) DO NOTHING;

-- 2. URUNLERI EKLEYELIM
INSERT INTO public.products (id, name, slug, "desc", price, category_id, images, sizes, stock, is_featured) VALUES 
(1, 'Adidas Füme Hoodie', 'adidas-fume-hoodie', 'A premium heavyweight hoodie crafted from 100% organic cotton. Features a relaxed fit with ribbed cuffs and hem. The subtle Adidas branding adds a refined touch to this essential piece.', 89, 1, ARRAY['/products/Adidas-Füme1-copy.png'], ARRAY['S','M','L','XL'], 100, true),
(2, 'Adidas Siyah Tee', 'adidas-siyah-tee', 'A minimalist black tee made from premium jersey cotton. Clean lines and a contemporary fit make this a wardrobe staple. Features a soft hand feel and excellent drape.', 49, 1, ARRAY['/products/Adidas-Siyah1-copy.png'], ARRAY['S','M','L','XL'], 100, false),
(3, 'Adidas Bej Hoodie', 'adidas-bej-hoodie', 'Warm beige heavyweight hoodie with a luxurious brushed interior. The oversized silhouette provides effortless comfort. Perfect for layering in transitional weather.', 89, 1, ARRAY['/products/Adidas-bej1-copy.png'], ARRAY['S','M','L','XL'], 100, false),
(4, 'Adidas Bordo Jogger', 'adidas-bordo-jogger', 'Rich burgundy joggers crafted from premium French terry. Features an elasticated waist with internal drawcord, side pockets, and tapered leg. The perfect balance of sport and style.', 79, 2, ARRAY['/products/Adidas-bordo1-copy.png'], ARRAY['S','M','L','XL'], 100, true),
(5, 'Adidas Green Track', 'adidas-green-track', 'Forest green track pants in a classic athletic silhouette. Made from a soft cotton-polyester blend with moisture-wicking properties. Features contrast side detailing and zip pockets.', 79, 2, ARRAY['/products/Adidas-green1-copy.png'], ARRAY['S','M','L','XL'], 100, false),
(6, 'Adidas Indigo Pant', 'adidas-indigo-pant', 'Deep indigo sweatpants with a structured fit. Heavyweight 380gsm fleece provides warmth and durability. Clean lines and minimal branding for a refined casual look.', 79, 2, ARRAY['/products/Adidas-İndigo1-copy.png'], ARRAY['S','M','L','XL'], 100, false),
(7, 'Polo Beyaz Classic', 'polo-beyaz-classic', 'Timeless white polo in ultra-fine piqué cotton. The classic two-button placket and mother-of-pearl buttons elevate this essential. A refined collar sits perfectly with or without a blazer.', 129, 1, ARRAY['/products/Lacoste-Polo-Beyaz-copy.png'], ARRAY['S','M','L','XL'], 100, true),
(8, 'Polo Bold Green', 'polo-bold-green', 'A bold green polo that commands attention. Crafted from premium long-staple cotton for exceptional softness and color retention. Features a ribbed collar and two-button placket.', 129, 1, ARRAY['/products/Lacoste-Polo-Bold-green1-copy.png'], ARRAY['S','M','L','XL'], 100, false),
(9, 'Polo Bordo Classic', 'polo-bordo-classic', 'Rich bordeaux polo in signature piqué weave. The deep, saturated color pairs beautifully with neutral tones. Features classic mother-of-pearl buttons and a self-finished hem.', 129, 1, ARRAY['/products/Lacoste-Polo-Bordo-1-copy.png'], ARRAY['S','M','L','XL'], 100, false),
(10, 'Polo White Blue', 'polo-white-blue', 'A fresh white and blue polo with contrast detailing. Made from breathable cotton piqué, ideal for warmer days. The subtle color blocking adds a contemporary edge.', 129, 1, ARRAY['/products/Lacoste-Polo-White-Blue-1-copy.png'], ARRAY['S','M','L','XL'], 100, false),
(11, 'Polo White Green', 'polo-white-green', 'Crisp white polo with vibrant green accents. Premium piqué cotton ensures breathability and comfort. A modern interpretation of a timeless classic.', 129, 1, ARRAY['/products/Lacoste-Polo-White-Green-1-copy.png'], ARRAY['S','M','L','XL'], 100, true),
(12, 'Polo Indigo Classic', 'polo-indigo-classic', 'Deep indigo polo with a sophisticated feel. The rich color is achieved through a special dyeing process for lasting vibrancy. Features a structured collar and pearl buttons.', 129, 1, ARRAY['/products/Lacoste-Polo-İndigo-1-copy.png'], ARRAY['S','M','L','XL'], 100, false)
ON CONFLICT (id) DO NOTHING;
