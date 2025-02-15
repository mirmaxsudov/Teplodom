import { Link } from "react-router-dom";
import SortItem from "./item/SortItem";
import { v4 as uuid } from "uuid";
import Logo from "../../assets/logo.png";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./Sort.css";

const Sort = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const sortItems = [
    {
      title: "Товары по акции",
      link: "/category/discount",
    },
    {
      title: "Новинки",
      link: "/category/new",
    },
    {
      title: "Поставщикам",
      link: "/supplier",
    },
    {
      title: "Контакты",
      link: "/contacts",
    },
    {
      title: "Возврат товара",
      link: "/return",
    },
  ];

  return (
    <section className="sort-section py-[30px] bg-[#FAFAFA]">
      <div className="container mx-auto">
        {/* For Mobile & Sidebar */}
        <AnimatePresence>
          {isOpenSidebar && (
            <motion.div
              key="sidebar"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed w-[100%] top-0 left-0 p-5 bg-[#fff] h-[100vh] z-[500]"
            >
              <div
                className={`md:hidden transition-all duration-500 fixed w-[100%] top-0 left-0 p-5 bg-[#fff] h-[100vh]`}
              >
                <Link to={"/"}>
                  <div className="logo-wrapper flex gap-[14px] items-center justify-between">
                    <div className="flex items-center gap-[14px] my-10">
                      <img
                        className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px]"
                        src={Logo}
                        alt="logo"
                      />
                      <div>
                        <h1 className="text-[18px] sm:text-[26px] logo-title font-semibold">
                          TEPLODOM
                        </h1>
                        <p className="text-[9px] sm:text-[13px] font-medium">
                          Интернет магазин <br />
                          строй материалов
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpenSidebar(!isOpenSidebar);
                        }}
                        className="bg-[#F7F7F7] p-2 rounded-full transition-all duration-1000
                                 hover:bg-[#fff] hover:transform hover:rotate-180"
                      >
                        <IoCloseSharp className="w-[28px] h-[28px]" />
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="categories flex flex-col gap-[10px]">
                  {/* Desktop tags */}
                  {sortItems.map((item) => {
                    return (
                      <Link to={item.link} key={uuid()}>
                        <div className="md:text-[14px] item transition-all font-semibold duration-300 p-[10px] px-[25px] rounded-[10px] bg-[transparent] cursor-pointer hover:bg-gradient-to-b hover:from-[#ffb12a] hover:to-[#ef8100] hover:text-white">
                          {item.title}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile tags */}
        <div className="flex gap-5 md:hidden">
          <button onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.375 9.625L7 7L4.375 4.375M10.5 7H23.625H10.5ZM4.375 14H23.625H4.375ZM4.375 21H23.625H4.375Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex items-center w-[100%] gap-[14px] rounded-[15px] bg-[#FFFFFF] p-[10px]">
            <IoSearch className="w-[28px] h-[28px] text-[#B3B3B3]" />
            <input
              className="outline-none w-[100%]"
              type="text"
              placeholder="Поиск..."
            />
          </div>
          <button>
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.2576 0.0731237C14.3996 0.288038 13.6091 0.950006 13.2039 1.79292C13.0833 2.0439 12.9846 2.29063 12.9846 2.34119C12.9846 2.43074 12.8213 2.43347 6.76314 2.44606C0.960753 2.45806 0.531648 2.46465 0.393065 2.54361C0.161688 2.67542 0.0335561 2.90063 0.0126538 3.21217C-0.00876392 3.53141 0.106011 3.75404 0.377787 3.9203C0.540318 4.01971 0.592949 4.02073 6.74317 4.04493L12.9447 4.06933L13.0735 4.41396C13.4311 5.37112 14.2921 6.16382 15.2372 6.40606C15.634 6.50776 16.3745 6.50869 16.7478 6.40796C17.7945 6.12556 18.6498 5.29045 18.9806 4.22793L19.0376 4.04493H21.2033C23.3568 4.04493 23.3701 4.0443 23.5754 3.93514C23.8808 3.77258 23.9747 3.6112 23.9747 3.24838C23.9747 3.01092 23.9515 2.91312 23.8655 2.78761C23.6357 2.45206 23.6999 2.46046 21.2504 2.44494L19.0416 2.43093L18.9437 2.15131C18.5768 1.10358 17.6195 0.246021 16.5899 0.0426726C16.2467 -0.0251103 15.5898 -0.0100799 15.2576 0.0731237ZM16.3838 1.63179C17.109 1.82845 17.5806 2.4546 17.583 3.22373C17.5854 4.01673 17.1404 4.6361 16.4085 4.85828C16.0963 4.95305 15.6529 4.92084 15.3501 4.78137C15.0528 4.64449 14.6559 4.23623 14.525 3.93279C14.3724 3.57919 14.3678 2.9061 14.5155 2.57235C14.7177 2.11588 15.1771 1.72373 15.6441 1.60914C15.9108 1.54366 16.0778 1.54878 16.3838 1.63179ZM7.4695 6.7825C6.40297 6.96794 5.40533 7.85092 5.05482 8.91974L4.95716 9.21771H2.74461H0.532116L0.373991 9.32868C-0.124664 9.67857 -0.124664 10.3184 0.373991 10.6683L0.532116 10.7793H2.74461H4.95716L5.05482 11.0773C5.54298 12.5659 7.10465 13.5053 8.58135 13.1987C9.68495 12.9695 10.5731 12.183 10.949 11.102L11.0527 10.8037L17.2876 10.7793C23.5225 10.7549 23.5226 10.7549 23.6549 10.6528C24.115 10.2978 24.115 9.69921 23.6549 9.3442C23.5226 9.24211 23.5225 9.24211 17.2876 9.21771L11.0527 9.19331L10.949 8.89504C10.4343 7.415 8.96453 6.5226 7.4695 6.7825ZM8.67714 8.476C9.00403 8.6408 9.24905 8.88621 9.42606 9.2262C9.57706 9.51617 9.58681 9.56301 9.58681 9.9985C9.58681 10.434 9.57706 10.4808 9.42606 10.7708C9.13371 11.3322 8.7024 11.615 8.08902 11.6473C7.61722 11.6721 7.27997 11.5529 6.95112 11.2451C6.22872 10.5688 6.22877 9.42818 6.95126 8.75177C7.28569 8.43872 7.57462 8.33531 8.06432 8.35346C8.35831 8.3644 8.51967 8.39665 8.67714 8.476ZM15.1871 13.6037C14.2535 13.8662 13.425 14.642 13.0735 15.583L12.9447 15.9277L6.71608 15.9521L0.4875 15.9765L0.315361 16.1132C0.0723142 16.3063 -0.0119508 16.4991 0.0125132 16.8063C0.0357119 17.0976 0.170311 17.3265 0.393065 17.4534C0.531648 17.5324 0.960753 17.5389 6.76314 17.5509C12.8213 17.5635 12.9846 17.5663 12.9846 17.6558C12.9846 17.7064 13.0833 17.9531 13.2039 18.2041C13.6143 19.0578 14.4051 19.7137 15.281 19.9269C15.6256 20.0107 16.233 20.0248 16.5767 19.9569C17.6068 19.7535 18.5222 18.9502 18.9166 17.9036L19.0438 17.5661L21.2515 17.5521C23.2426 17.5394 23.4737 17.5298 23.6078 17.4534C23.8305 17.3265 23.9651 17.0976 23.9883 16.8063C24.0128 16.4991 23.9285 16.3063 23.6855 16.1132L23.5134 15.9765L21.275 15.9629L19.0367 15.9493L18.9802 15.7677C18.6499 14.7067 17.7939 13.8713 16.7478 13.589C16.3612 13.4848 15.5841 13.492 15.1871 13.6037ZM16.4324 15.1452C17.1425 15.3648 17.5854 15.9914 17.583 16.7733C17.5819 17.1498 17.495 17.4289 17.2808 17.745C16.9818 18.1859 16.3323 18.4852 15.8194 18.4185C15.2809 18.3484 14.7431 17.9385 14.5155 17.4247C14.3684 17.0924 14.3716 16.4154 14.5219 16.0741C14.6393 15.8075 14.931 15.4691 15.185 15.3047C15.5269 15.0834 16.0263 15.0196 16.4324 15.1452Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        {/* For Desktop */}
        <div className="hidden md:flex justify-between items-center">
          {sortItems.map((item) => (
            <SortItem tem item={item} key={uuid()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sort;
