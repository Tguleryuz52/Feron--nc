import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import ClientProductDetail from "./ClientProductDetail";

/* ─── MAIN PAGE (Server Component) ─── */
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient();
  const resolvedParams = await params;
  const productId = Number(resolvedParams.id);

  // Fetch product
  const { data: product } = await supabase
    .from("products")
    .select(`*, category:categories(slug)`)
    .eq("id", productId)
    .single();

  if (!product) {
    notFound();
  }

  // Fetch related products
  const { data: related } = await supabase
    .from("products")
    .select(`*`)
    .eq("category_id", product.category_id)
    .neq("id", product.id)
    .limit(3);

  return (
    <ClientProductDetail 
      product={product} 
      related={related || []} 
    />
  );
}


