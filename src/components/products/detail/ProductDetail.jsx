import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../features/products/productSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    if (id)
      dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <section className="detail-product bg-[#FAFAFA] h-full min-h-screen">
      <div className='container mx-auto py-[50px]'>
        {
          product && <div className="grid grid-cols-3 bg-[#fff] px-[25px] py-[30px] pr-[60px] gap-[50px]">
            <div className="left col-span-1 w-[100%] h-[100%] flex items-center justify-center">
              <img className='w-full object-contain border' src={product.image} alt={product.title} />
            </div>
            <div className="right col-span-2">
              <h1 className='font-semibold text-[48px] mb-[30px]'>
                {product.title}
              </h1>
              <p className='text-[18px] font-medium'>
                {product.desc}
              </p>
              <p className='flex items-center gap-3 font-normal my-[33px]'>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.59961 12.1502C3.59961 10.8374 4.12113 9.57832 5.04943 8.65002C5.97774 7.72171 7.23679 7.2002 8.54961 7.2002H27.4496C28.7624 7.2002 30.0215 7.72171 30.9498 8.65002C31.8781 9.57832 32.3996 10.8374 32.3996 12.1502V23.8502C32.3996 25.163 31.8781 26.4221 30.9498 27.3504C30.0215 28.2787 28.7624 28.8002 27.4496 28.8002H8.54961C7.23679 28.8002 5.97774 28.2787 5.04943 27.3504C4.12113 26.4221 3.59961 25.163 3.59961 23.8502V12.1502ZM8.54961 9.0002C7.71418 9.0002 6.91296 9.33207 6.32222 9.92281C5.73148 10.5135 5.39961 11.3148 5.39961 12.1502V23.8502C5.39961 25.589 6.81081 27.0002 8.54961 27.0002H27.4496C28.285 27.0002 29.0863 26.6683 29.677 26.0776C30.2677 25.4868 30.5996 24.6856 30.5996 23.8502V12.1502C30.5996 11.3148 30.2677 10.5135 29.677 9.92281C29.0863 9.33207 28.285 9.0002 27.4496 9.0002H8.54961ZM19.7996 11.7002C19.7996 11.4615 19.8944 11.2326 20.0632 11.0638C20.232 10.895 20.4609 10.8002 20.6996 10.8002H24.2996C24.5383 10.8002 24.7672 10.895 24.936 11.0638C25.1048 11.2326 25.1996 11.4615 25.1996 11.7002V15.3002C25.1996 15.5389 25.1048 15.7678 24.936 15.9366C24.7672 16.1054 24.5383 16.2002 24.2996 16.2002C24.0609 16.2002 23.832 16.1054 23.6632 15.9366C23.4944 15.7678 23.3996 15.5389 23.3996 15.3002V13.8728L20.4368 16.8374C20.2678 17.0064 20.0386 17.1013 19.7996 17.1013C19.5606 17.1013 19.3314 17.0064 19.1624 16.8374C18.9934 16.6684 18.8985 16.4392 18.8985 16.2002C18.8985 15.9612 18.9934 15.732 19.1624 15.563L22.127 12.6002H20.6996C20.4609 12.6002 20.232 12.5054 20.0632 12.3366C19.8944 12.1678 19.7996 11.9389 19.7996 11.7002ZM15.5624 19.163C15.7314 18.994 15.9606 18.8991 16.1996 18.8991C16.4386 18.8991 16.6678 18.994 16.8368 19.163C17.0058 19.332 17.1007 19.5612 17.1007 19.8002C17.1007 20.0392 17.0058 20.2684 16.8368 20.4374L13.8722 23.4002H15.2996C15.5383 23.4002 15.7672 23.495 15.936 23.6638C16.1048 23.8326 16.1996 24.0615 16.1996 24.3002C16.1996 24.5389 16.1048 24.7678 15.936 24.9366C15.7672 25.1054 15.5383 25.2002 15.2996 25.2002H11.6996C11.4609 25.2002 11.232 25.1054 11.0632 24.9366C10.8944 24.7678 10.7996 24.5389 10.7996 24.3002V20.7002C10.7996 20.4615 10.8944 20.2326 11.0632 20.0638C11.232 19.895 11.4609 19.8002 11.6996 19.8002C11.9383 19.8002 12.1672 19.895 12.336 20.0638C12.5048 20.2326 12.5996 20.4615 12.5996 20.7002V22.1276L15.5624 19.163Z" fill="black" />
                </svg>
                (1.185*0.585)(20мм)
              </p>
              <p className='text-[40px] font-medium mb-10'>
                {product.price} сум
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[20px]">
                  {/* Button 1 */}
                  <button className="group p-[14px] rounded-[8px] border border-black text-black hover:bg-[#FFB12A] transition-all duration-300 hover:text-white">
                    <svg
                      className="fill-current"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.006 15.3668C20.8634 15.3658 20.7262 15.4213 20.6244 15.5211C20.5225 15.621 20.4643 15.757 20.4624 15.8996V19.8812C20.4643 20.0241 20.5228 20.1604 20.625 20.2603C20.7272 20.3602 20.8649 20.4154 21.0078 20.414H33.0012C33.1441 20.4154 33.2818 20.3602 33.384 20.2603C33.4862 20.1604 33.5447 20.0241 33.5466 19.8812V15.8996C33.5447 15.7567 33.4862 15.6204 33.384 15.5205C33.2818 15.4206 33.1441 15.3654 33.0012 15.3668H21.0078H21.006ZM28.3608 2.702C30.0204 2.7812 31.2138 3.1088 31.9698 3.8036C32.7168 4.4912 33.1002 5.4866 33.1758 6.80419V10.5788C33.172 10.9002 33.0408 11.2071 32.8109 11.4318C32.5811 11.6566 32.2715 11.781 31.95 11.7776C31.7907 11.7795 31.6325 11.75 31.4846 11.6908C31.3367 11.6316 31.2019 11.5438 31.0879 11.4325C30.9739 11.3211 30.8829 11.1885 30.8202 11.042C30.7575 10.8955 30.7243 10.7381 30.7224 10.5788L30.7242 6.8726C30.6846 6.1886 30.5208 5.7638 30.2868 5.5478C30.06 5.339 29.3688 5.1518 28.3014 5.0978H4.7646C3.798 5.1338 3.1698 5.3174 2.8656 5.5784C2.6316 5.7782 2.4552 6.329 2.4534 7.2812L2.448 28.4672C2.538 29.3924 2.7414 30.0098 3.0024 30.3176C3.2004 30.5516 3.8142 30.7856 4.7178 30.9008H28.3266C29.4318 30.9224 30.0834 30.7568 30.303 30.5354C30.546 30.2888 30.7224 29.6408 30.7224 28.5806V24.8996C30.7224 24.239 31.2714 23.7008 31.95 23.7008C32.6268 23.7008 33.1758 24.239 33.1758 24.8996V28.5806C33.1758 30.2006 32.8446 31.412 32.0688 32.1986C31.2696 33.0086 29.9988 33.3326 28.3014 33.2966L4.572 33.2912C2.9574 33.104 1.8 32.6612 1.1106 31.8458C0.486 31.1078 0.1386 30.0548 0 28.5824V7.2794C0.0036 5.7026 0.3816 4.5164 1.2492 3.7748C2.0448 3.0908 3.1932 2.7578 4.7178 2.7002H28.3608V2.702ZM33.0012 12.9692C34.6572 12.9692 36 14.2814 36 15.8996V19.8812C36 21.4994 34.6572 22.8116 33.0012 22.8116H21.0078C19.3518 22.8116 18.009 21.4976 18.009 19.8812V15.8996C18.009 14.2814 19.3518 12.9692 21.0078 12.9692H33.0012ZM24.0066 16.4612C23.1786 16.4612 22.5072 17.1092 22.5072 17.9066C22.5072 18.7058 23.1786 19.352 24.0066 19.352C24.8346 19.352 25.506 18.704 25.506 17.9066C25.506 17.1074 24.8346 16.4594 24.0066 16.4594V16.4612Z" />
                    </svg>
                  </button>
                  {/* Button 2 */}
                  <button className="group p-[14px] rounded-[8px] border border-black text-black hover:bg-[#FFB12A] transition-all duration-300 hover:text-white">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.5 9.375C31.5 8.08207 30.9864 6.84209 30.0721 5.92785C29.1579 5.01361 27.9179 4.5 26.625 4.5H9.375C8.08207 4.5 6.84209 5.01361 5.92785 5.92785C5.01361 6.84209 4.5 8.08207 4.5 9.375V26.625C4.5 27.9179 5.01361 29.1579 5.92785 30.0721C6.84209 30.9864 8.08207 31.5 9.375 31.5H18.033C17.5834 30.7987 17.226 30.0425 16.9695 29.25H9.375C8.67881 29.25 8.01113 28.9734 7.51884 28.4812C7.02656 27.9889 6.75 27.3212 6.75 26.625V12.75H29.25V16.9695C30.0425 17.226 30.7987 17.5834 31.5 18.033V9.375ZM9.375 6.75H26.625C28.074 6.75 29.25 7.926 29.25 9.375V10.5H6.75V9.375C6.75 7.926 7.926 6.75 9.375 6.75Z"
                        fill="currentColor"
                      />
                      <path
                        d="M25.875 18C21.5273 18 18 21.5273 18 25.875C18 30.2227 21.5273 33.75 25.875 33.75C30.2227 33.75 33.75 30.2227 33.75 25.875C33.75 21.5273 30.2227 18 25.875 18Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M25.875 20.625V26.5312H29.8125"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {/* Button 3 */}
                  <button className="group p-[14px] rounded-[8px] border border-black text-black hover:bg-[#FFB12A] transition-all duration-300 hover:text-white">
                    <svg
                      className="fill-current"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.3448 2.66371C19.2491 3.11234 17.5635 4.81356 17.1311 6.91658C17.0617 7.25441 17.0356 7.7274 17.0356 8.64975V9.91826L14.6097 9.9185C12.2955 9.91868 12.1749 9.92422 11.9875 10.0385C11.8794 10.1044 11.7372 10.2467 11.6713 10.3548C11.5557 10.5445 11.5515 10.6647 11.5513 13.8518L11.5511 17.1524L7.37749 17.1526C3.31917 17.1528 3.19845 17.1561 3.00746 17.2726C2.8994 17.3385 2.75717 17.4808 2.69129 17.5889C2.57365 17.7818 2.57148 17.9061 2.5713 24.4565C2.57106 30.8217 2.57624 31.1443 2.6846 31.4925C2.841 31.9951 3.04489 32.3219 3.4285 32.6849C3.79174 33.0284 4.06922 33.1877 4.55583 33.3321C4.85241 33.42 6.11528 33.4291 17.9958 33.4284C32.0485 33.4276 31.3678 33.4421 31.9778 33.1302C32.3198 32.9553 32.8546 32.4496 33.0497 32.1166C33.1332 31.974 33.2527 31.6932 33.3151 31.4925C33.4244 31.141 33.4287 30.7474 33.4284 20.8394C33.4282 10.6798 33.4267 10.5488 33.3084 10.3548C33.2426 10.2467 33.1003 10.1044 32.9923 10.0385C32.8049 9.92422 32.6843 9.91868 30.3792 9.9185L27.9626 9.91826L27.9235 9.24006C27.9021 8.86708 27.8844 8.29625 27.8842 7.97156C27.883 5.40562 26.0599 3.18034 23.532 2.65931C22.9541 2.54018 21.912 2.54229 21.3448 2.66371ZM23.4305 4.52932C24.3403 4.79674 25.1914 5.47898 25.6036 6.27106C25.9891 7.01201 26.029 7.21806 26.0607 8.63721L26.0893 9.91826H22.503H18.9166L18.8729 8.9859C18.8095 7.63197 18.8998 7.06584 19.3012 6.3012C19.8084 5.3352 20.7792 4.6294 21.8666 4.436C22.2783 4.36282 23.0133 4.40665 23.4305 4.52932ZM17.0961 12.3146C17.0963 12.7947 17.1182 12.9383 17.2161 13.0988C17.571 13.6811 18.4287 13.6811 18.7837 13.0988C18.8815 12.9383 18.9035 12.7947 18.9037 12.3146L18.9039 11.7268H22.52H26.1361L26.1364 12.3146C26.1366 12.7947 26.1585 12.9383 26.2564 13.0988C26.6113 13.6811 27.469 13.6811 27.824 13.0988C27.9218 12.9383 27.9438 12.7947 27.944 12.3146L27.9442 11.7268H29.7831H31.622L31.6063 21.3679C31.5905 30.9991 31.5903 31.0091 31.4662 31.1754C31.3978 31.267 31.2671 31.3978 31.1756 31.4661C31.0128 31.5877 30.9353 31.5908 27.6309 31.6075L24.2527 31.6245L24.3041 31.4869C24.3324 31.4112 24.363 28.2974 24.3723 24.5673C24.3888 17.8797 24.3874 17.7826 24.2687 17.5889C24.2025 17.4808 24.06 17.3385 23.9519 17.2726C23.76 17.1555 23.638 17.1528 18.5573 17.1526L13.3592 17.1524V14.4396V11.7268H15.2275H17.0958L17.0961 12.3146ZM22.5664 24.9849C22.5503 30.9625 22.5492 31.0102 22.4259 31.1754C22.3575 31.267 22.2267 31.3978 22.1352 31.4661C21.9689 31.5903 21.9596 31.5905 13.4797 31.5905C4.99983 31.5905 4.99048 31.5903 4.8242 31.4661C4.73265 31.3978 4.60187 31.267 4.53353 31.1754C4.41022 31.0102 4.40913 30.9625 4.39304 24.9849L4.37683 18.9609H13.4797H22.5826L22.5664 24.9849ZM8.49192 20.8897C8.10963 21.1228 8.05599 21.2955 8.05575 22.2941C8.05551 23.2886 8.14567 23.8545 8.4155 24.5514C8.93785 25.9005 10.158 27.121 11.5068 27.6435C12.7522 28.1259 14.2072 28.1259 15.4526 27.6435C16.8014 27.121 18.0216 25.9005 18.5439 24.5514C18.8137 23.8545 18.9039 23.2886 18.9037 22.2941C18.9035 21.5107 18.8889 21.3785 18.7837 21.2059C18.4327 20.6301 17.5706 20.6234 17.2238 21.1937C17.1324 21.3441 17.1059 21.5464 17.0796 22.2944C17.0583 22.9027 17.0131 23.3225 16.9453 23.5425C16.5681 24.7669 15.6405 25.686 14.4139 26.0506C13.9283 26.1949 13.0311 26.1949 12.5455 26.0506C11.3189 25.686 10.3913 24.7669 10.0141 23.5425C9.94632 23.3225 9.90112 22.9027 9.87979 22.2944C9.85351 21.5464 9.82705 21.3441 9.73563 21.1937C9.57567 20.9306 9.28132 20.7698 8.95954 20.7698C8.79501 20.7698 8.61107 20.817 8.49192 20.8897Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  {/* Button 4 */}
                  <button className="group p-[14px] rounded-[8px] border border-black text-black hover:bg-[#FFB12A] transition-all duration-300 hover:text-white">
                    <svg
                      className="fill-current"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.8604 5.55546C31.0242 4.71934 30.0315 4.05617 28.939 3.60387C27.8465 3.15157 26.6755 2.91899 25.493 2.91943C24.3106 2.91988 23.1398 3.15333 22.0476 3.60646C20.9554 4.05958 19.9632 4.72349 19.1277 5.56024L18.0371 6.66415L16.9555 5.56263L16.9485 5.5556C16.1128 4.71987 15.1206 4.05693 14.0287 3.60463C12.9367 3.15233 11.7664 2.91954 10.5845 2.91954C9.4026 2.91954 8.23227 3.15233 7.14034 3.60463C6.0484 4.05693 5.05625 4.71987 4.22052 5.5556L3.73466 6.04146C2.04684 7.72929 1.09863 10.0185 1.09863 12.4054C1.09863 14.7924 2.04684 17.0815 3.73466 18.7694L16.5578 31.5923L18.0058 33.1095L18.0404 33.0749L18.0778 33.1124L19.4346 31.6809L32.3462 18.7692C34.0315 17.08 34.978 14.7913 34.978 12.4052C34.978 10.0191 34.0315 7.73042 32.3462 6.04125L31.8604 5.55546ZM30.7549 17.1782L18.0404 29.893L5.32555 17.1782C4.05969 15.9123 3.34854 14.1954 3.34854 12.4052C3.34854 10.615 4.05969 8.89815 5.32555 7.63228L5.81148 7.14642C7.07673 5.88118 8.79257 5.17008 10.5819 5.16941C12.3712 5.16874 14.0876 5.87855 15.3538 7.14284L18.0322 9.87005L20.7234 7.14642C21.3502 6.51962 22.0943 6.02242 22.9132 5.68319C23.7322 5.34397 24.6099 5.16938 25.4963 5.16938C26.3828 5.16938 27.2605 5.34397 28.0795 5.68319C28.8984 6.02242 29.6425 6.51962 30.2693 7.14642L30.7552 7.63221C32.0191 8.89912 32.729 10.6157 32.7289 12.4053C32.7288 14.1949 32.0189 15.9114 30.7549 17.1782Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className="btn-group flex items-center border-[2px] border-[#b6b6b6] rounded-lg">
                  <button className='p-3 size-[60px] flex items-center justify-center'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 18H6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <button className='p-3 size-[60px] flex items-center justify-center border-x-[2px] border-[#b6b6b6] text-[36px] font-medium'>
                    2
                  </button>
                  <button className='p-3 size-[60px] flex items-center justify-center'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 30V18M18 18V6M18 18H30M18 18H6" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  )
}

export default ProductDetail