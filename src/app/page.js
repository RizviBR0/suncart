import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const res = await fetch("https://suncart-pink.vercel.app/products.json");
  const products = await res.json();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Carousel />

      <section>
        <h1>Popular Products</h1>
        <div className="grid grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
