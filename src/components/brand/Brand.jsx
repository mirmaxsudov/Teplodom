import "./Brand.css";

import KBT from "../../assets/images/brand/kbt.png";
import Total from "../../assets/images/brand/total.png";
import UzKabel from "../../assets/images/brand/uzkabel.png";
import Viko from "../../assets/images/brand/viko.png";
import Yato from "../../assets/images/brand/yato.png";

const Brand = () => {
  const brands = [KBT, Total, UzKabel, Viko, Yato];

  return (
    <>
      <section>
        <div className="container mx-auto px-[30px] sm:px-[30px] lg:px-[150px]">
          <div className="top flex justify-between items-center">
            <h3 className="font-semibold text-[30px] my-5">Бренды</h3>
            <div className="flex items-center gap-[16px]">
              <button className="p-[11px] bg-[#fff] rounded-full">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M12.0903 14L19.617 7.10072C20.3606 6.41911 20.3606 5.24682 19.617 4.56521C18.9594 3.96252 17.9503 3.96251 17.2928 4.56521L8.6084 12.5257C7.74364 13.3183 7.74364 14.6817 8.6084 15.4743L17.2928 23.4348C17.9503 24.0375 18.9594 24.0375 19.617 23.4348C20.3606 22.7532 20.3606 21.5809 19.617 20.8993L12.0903 14Z"
                      fill="black"
                      fillOpacity="0.4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_90">
                      <rect
                        width="28"
                        height="28"
                        fill="white"
                        transform="matrix(-1 0 0 1 28 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="p-[11px] bg-[#fff] rounded-full">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M15.9097 14L8.38305 7.10072C7.63945 6.41911 7.63945 5.24682 8.38305 4.56521C9.04055 3.96252 10.0497 3.96251 10.7072 4.56521L19.3916 12.5257C20.2564 13.3183 20.2564 14.6817 19.3916 15.4743L10.7072 23.4348C10.0497 24.0375 9.04055 24.0375 8.38305 23.4348C7.63945 22.7532 7.63945 21.5809 8.38305 20.8993L15.9097 14Z"
                      fill="black"
                      fill-opacity="0.4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_87">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <div className="brands-wrapper lg:justify-around flex flex-nowrap overflow-x-auto items-center gap-[10px] justify-start">
            {brands.map((brand) => (
              <div
                className="brand-item flex items-center justify-center flex-shrink-0 w-[128px] h-[128px] sm:w-[193px] sm:h-[181px] bg-[#fff] rounded-[12px]"
                key={brand}
              >
                <img
                  className="w-[106px] h-[px] sm:size-[160px]"
                  src={brand}
                  alt="brand"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
