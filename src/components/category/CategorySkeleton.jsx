import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CategorySkeleton = ({ grid, count }) => {
    console.log(grid);
    
    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-${grid} gap-5`}>
            {
                Array(count).fill(0).map((_, i) => <SkeletonItem key={i} />)
            }
        </div>
    )
}

const SkeletonItem = () => {
    return <div className='flex flex-col gap-2 w-[100%]'>
        <Skeleton width={"200px"} height={200} />
        <Skeleton height={40} width={200} />
    </div>
}

export default CategorySkeleton