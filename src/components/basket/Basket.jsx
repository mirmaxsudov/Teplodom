import { useSelector } from "react-redux"
import ProductItem from "../products/item/ProductItem"

const Basket = () => {
    const basket = useSelector(state => state.basket.basket)

    return (
        <section className="basket-section bg-[#FAFAFA] h-full min-h-screen">
            <div className="container mx-auto">
                <h1 className="text-[20px] font-semibold sm:text-[40px] mb-6">Корзинка</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        basket.map(item => {
                            return (
                                <ProductItem
                                    isBasket={true}
                                    key={item.id}
                                    product={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Basket