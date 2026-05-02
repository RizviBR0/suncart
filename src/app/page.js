import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default async function Home() {
  const res = await fetch("https://suncart-pink.vercel.app/products.json");
  const p = await res.json();

  const products = p.slice(0, 3);

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <Carousel />

      <section>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl mt-6 mb-4">🔥 Popular Products</h1>

          <Link
            href="/products"
            className="text-orange-500 hover:underline text-sm font-semibold flex justify-center items-center gap-1"
          >
            View All <MdKeyboardArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>

        <SummerCareTips />
        <TopBrands />
      </section>
    </div>
  );
}
