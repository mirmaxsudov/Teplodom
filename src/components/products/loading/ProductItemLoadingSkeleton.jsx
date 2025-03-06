import React from 'react'
import Skeleton from 'react-loading-skeleton'
import "./ProductItemLoadingSkeleton.css"

const ProductItemLoadingSkeleton = ({ gridCount = 4, count = 8 }) => {
    return (
        <div className={`grid grid-cols-${gridCount} gap-5`}>
            {
                Array(count).fill(0).map((_, i) => <SkeletonItem key={i} />)
            }
        </div>
    )
}

const SkeletonItem = () => {
    return (
        <div className='skeleton-wrapper p-2 bg-stone-100'>
            <div className='image-loader'>
                <Skeleton height={200} />
            </div>
            <div className='body-loader'>
                <Skeleton height={40} />
                <Skeleton height={20} width={100} />
                <Skeleton height={20} width={120} />
            </div>
            <div className='footer flex items-center gap-4'>
                <Skeleton height={40} width={220} />
                <Skeleton height={40} width={50} />
            </div>
        </div>
    )
}

export default ProductItemLoadingSkeleton