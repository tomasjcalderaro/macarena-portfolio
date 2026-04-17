import macarenaImg from "../../assets/macarena.jpg"
//import feed2Img from "../../assets/feed2.jpg"
//import feed3Img from "../../assets/feed3.jpg"

const categories = [
    {
    title: "Producción",
    items: [
        { id: 1, image: macarenaImg },
        { id: 2, image: macarenaImg },
        { id: 3, image: macarenaImg },
        { id: 4, image: macarenaImg },
        { id: 5, image: macarenaImg },
        { id: 6, image: macarenaImg },
        { id: 7, image: macarenaImg },
        { id: 8, image: macarenaImg },
        { id: 9, image: macarenaImg }
        
    ],
    },
]

const PortfolioFull = () => {
    return (
    <section className="bg-beige py-20 px-8">

        <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-brown text-center mb-12">
            Portfolio completo
        </h2>

        {categories.map((category, index) => (
            <div key={index} className="mb-16">

            <h3 className="text-2xl font-semibold text-brown mb-6">
                {category.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {category.items.map((item) => (
                <div
                    key={item.id}
                    className="overflow-hidden rounded-xl group"
                >
                    <img
                    src={item.image}
                    alt="portfolio"
                    className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-500"
                    />
                </div>
                ))}

            </div>

            </div>
        ))}

        </div>

    </section>
    )
}

export default PortfolioFull