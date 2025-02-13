import React from 'react'
import P1 from "../../../../public/images/products/p1.png"
import "./ProductItem.css"
import { FcLike } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { toggleProductLike } from '../../../features/products/productSlice'
import { Link, useNavigate } from 'react-router-dom'

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLikeBtn = (event) => {
        dispatch(toggleProductLike({ productId: product.id, isLiked: product.isLiked }))
        event.stopPropagation();
    };

    const handleDetailPage = () => {
        navigate(`/product/${product.id}`)
    }


    return (
        <div onClick={() => { handleDetailPage() }} to={`/product/${product.id}`} className="product-item w-[255px] bg-[#fff] rounded-[15px] cursor-pointer hover:transform hover:scale-105 transition-all duration-300 shadow-sm">
            <div className="img-wrapper h-[202px]">
                <img src={product.image} alt="Image" className='w-[100%] h-[100%] m-auto px-[53px] py-[27px] object-contain' />
            </div>
            <div className='px-[15px] py-[28px]'>
                <p className='text-[#000] mb-[28px]'>
                    {
                        product.title
                    }
                </p>
                <p className='price font-bold text-[19px]'>
                    {product.price} cум
                </p>
                <div className="product-item-bottom grid grid-cols-4 gap-[10px] mt-[20px]">
                    <button className="bg-[#FFB12A] col-span-3 py-[7px] px-[20px] rounded-[8px] flex items-center justify-center">
                        <div className='flex items-center gap-[5px] text-[#fff]'>
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.16699 25.6668C7.52533 25.6668 6.97621 25.4386 6.51966 24.982C6.06233 24.5247 5.83366 23.9752 5.83366 23.3335C5.83366 22.6918 6.06233 22.1423 6.51966 21.685C6.97621 21.2284 7.52533 21.0002 8.16699 21.0002C8.80866 21.0002 9.35777 21.2284 9.81433 21.685C10.2717 22.1423 10.5003 22.6918 10.5003 23.3335C10.5003 23.9752 10.2717 24.5247 9.81433 24.982C9.35777 25.4386 8.80866 25.6668 8.16699 25.6668ZM19.8337 25.6668C19.192 25.6668 18.6429 25.4386 18.1863 24.982C17.729 24.5247 17.5003 23.9752 17.5003 23.3335C17.5003 22.6918 17.729 22.1423 18.1863 21.685C18.6429 21.2284 19.192 21.0002 19.8337 21.0002C20.4753 21.0002 21.0248 21.2284 21.4822 21.685C21.9387 22.1423 22.167 22.6918 22.167 23.3335C22.167 23.9752 21.9387 24.5247 21.4822 24.982C21.0248 25.4386 20.4753 25.6668 19.8337 25.6668ZM7.17533 7.00016L9.97533 12.8335H18.142L21.3503 7.00016H7.17533ZM8.16699 19.8335C7.29199 19.8335 6.63088 19.4493 6.18366 18.6808C5.73644 17.9132 5.71699 17.1502 6.12533 16.3918L7.70033 13.5335L3.50033 4.66683H2.30449C1.97394 4.66683 1.70171 4.55483 1.48783 4.33083C1.27394 4.10761 1.16699 3.83072 1.16699 3.50016C1.16699 3.16961 1.27899 2.89233 1.50299 2.66833C1.72621 2.44511 2.0031 2.3335 2.33366 2.3335H4.22949C4.44338 2.3335 4.64755 2.39183 4.84199 2.5085C5.03644 2.62516 5.18227 2.79044 5.27949 3.00433L6.06699 4.66683H23.2753C23.8003 4.66683 24.16 4.86127 24.3545 5.25016C24.5489 5.63905 24.5392 6.04739 24.3253 6.47516L20.1837 13.9418C19.9698 14.3307 19.6878 14.6321 19.3378 14.846C18.9878 15.0599 18.5892 15.1668 18.142 15.1668H9.45033L8.16699 17.5002H21.0295C21.36 17.5002 21.6323 17.6118 21.8462 17.835C22.06 18.059 22.167 18.3363 22.167 18.6668C22.167 18.9974 22.055 19.2743 21.831 19.4975C21.6078 19.7215 21.3309 19.8335 21.0003 19.8335H8.16699ZM9.97533 12.8335H18.142H9.97533Z"
                                    fill="white"
                                />
                            </svg>
                            В корзину
                        </div>
                    </button>
                    <>
                        <button onClick={handleLikeBtn} className="like-btn bg-[#FFB12A] col-span-1 flex items-center justify-center py-[7px] rounded-[8px] ml-auto w-[50px] h-[50px] transition-all duration-300">
                            {
                                product.isLiked ? <FcLike className={"w-[28px] h-[28px]"} /> : <svg
                                    className='like-icon'
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_1_2126)">
                                        <path
                                            d="M14.0008 5.28381C16.7413 2.82331 20.9763 2.90498 23.6165 5.54981C26.2555 8.19581 26.3465 12.4098 23.8918 15.1585L13.9985 25.0658L4.10751 15.1585C1.65285 12.4098 1.74502 8.18881 4.38285 5.54981C7.02535 2.90848 11.2522 2.81981 14.0008 5.28381ZM21.9645 7.19831C20.2145 5.44598 17.3912 5.37481 15.5595 7.01981L14.002 8.41748L12.4433 7.02098C10.6058 5.37364 7.78835 5.44598 6.03368 7.20064C4.29535 8.93898 4.20785 11.7215 5.80968 13.5601L13.9997 21.763L22.1897 13.5613C23.7927 11.7215 23.7052 8.94248 21.9645 7.19831Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_2126">
                                            <rect width="28" height="28" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            }
                        </button>
                    </>
                </div>
            </div>
        </div>
    )
}

export default ProductItem