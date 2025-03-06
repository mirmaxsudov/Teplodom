import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../../features/products/productSlice';
import ProductItem from '../item/ProductItem';
import "./FavoriteProducts.css";
import Skeleton from 'react-loading-skeleton';

const FavoriteProducts = () => {
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        if (product.status === "idle")
            dispatch(fetchAllProducts());
    }, [dispatch, product]);

    return (
        <section className="favorite-products py-[100px] bg-[#FAFAFA]">
            <div className="container mx-auto">
                {product.favoriteProducts?.length === 0 && <h1 className='text-center text-5xl font-semibold tracking-wide'>
                    Избранных товаров нет
                </h1>}
            </div>
        </section>
    )
}

const ProductItemLoadingSkeleton = () => {
    return <div className='flex flex-col gap-2 w-[100%]' >
        <Skeleton width={"200px"} height={200} />
        <Skeleton height={40} width={200} />
    </div>
}

export default FavoriteProducts