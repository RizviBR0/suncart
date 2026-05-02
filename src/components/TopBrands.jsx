import Image from 'next/image';
import adidas from '../assets/adidas.svg'
import hugo from '../assets/hugo.svg'
import nivea from '../assets/nivea.svg'
import puma from '../assets/puma.svg'

const brands = [
    {
        id: 1,
        name: "SunShade",
        image: adidas,
        subtitle: "Premium sunglasses",
    },
    {
        id: 2,
        name: "GlowCare",
        image: hugo,
        subtitle: "Summer skincare",
    },
    {
        id: 3,
        name: "CoolWear",
        image: nivea,
        subtitle: "Lightweight outfits",
    },
    {
        id: 4,
        name: "BeachStep",
        image: puma,
        subtitle: "Comfort beachwear",
    },
];

const TopBrands = () => {
    return (
        <section className="mx-auto w-full">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Top Brands
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {brands.map((brand) => (
                    <div
                        key={brand.id}
                        className="group rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
                    >
                        <div className="flex min-h-27.5 flex-col items-center justify-center">
                            <Image width={100} height={100} src={brand.image} alt={brand.name} className='aspect-square object-contain' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopBrands;