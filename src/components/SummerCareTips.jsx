import {
    FaTint,
    FaSun,
    FaHatCowboy,
    FaPumpSoap,
} from "react-icons/fa";

const tips = [
    {
        id: 1,
        title: "Stay Hydrated",
        description:
            "Drink plenty of water throughout the day to stay refreshed and energized.",
        icon: <FaTint className="text-sky-500" size={26} />,
        bg: "bg-sky-50",
    },
    {
        id: 2,
        title: "Use Sunscreen",
        description:
            "Apply SPF 30 or higher sunscreen before going outside and reapply when needed.",
        icon: <FaSun className="text-yellow-500" size={26} />,
        bg: "bg-yellow-50",
    },
    {
        id: 3,
        title: "Wear Protection",
        description:
            "Use hats, sunglasses, and lightweight clothing to protect your skin from UV rays.",
        icon: <FaHatCowboy className="text-orange-500" size={26} />,
        bg: "bg-orange-50",
    },
    {
        id: 4,
        title: "Moisturize Daily",
        description:
            "Keep your skin soft and healthy by using a gentle moisturizer every day.",
        icon: <FaPumpSoap className="text-cyan-500" size={26} />,
        bg: "bg-cyan-50",
    },
];

const SummerCareTips = () => {
    return (
        <section className="mx-auto w-full py-12">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Summer Care Tips
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className={`rounded-2xl border border-gray-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${tip.bg}`}
                    >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                            {tip.icon}
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900">
                            {tip.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            {tip.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SummerCareTips;