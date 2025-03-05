import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../../features/products/productSlice';
import ProductItem from '../item/ProductItem';
import ProductItemLoadingSkeleton from '../loading/ProductItemLoadingSkeleton';

const DiscountProducts = () => {
    const { isLoading, discountProducts, status } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchAllProducts());
        }
    }, [status, dispatch]);

    console.log(discountProducts);

    return (
        <section className="discount-section py-[50px]">
            <div className="container mx-auto">
                <h1 className='font-semibold text-[30px] mb-4'>
                    Товары по акции
                </h1>
                {
                    isLoading && <ProductItemLoadingSkeleton />
                }
                {
                    !isLoading && discountProducts.length === 0 && <div className='text-[40px] text-center my-4'>Товары по акции отсутствуют</div>
                }
                {!isLoading && discountProducts.length > 0 && <div className='grid grid-cols-4 gap-5'>
                    {
                        discountProducts.map(product => <ProductItem isDiscount={true} product={product} key={product.id}></ProductItem>)
                    }
                </div>
                }
            </div>
        </section >
    )
}

export default DiscountProducts