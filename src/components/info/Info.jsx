import React from "react";
import InfoImage from "../../assets/images/info/info-img.png";

const Info = () => {
  return (
    <section className="info-section py-20">
      <div className="container mx-auto px-[30px] lg:px-[150px]">
        <h1 className="font-semibold text-[20px] sm:text-[30px] my-5">
          Интернет магазин Теплодом
        </h1>
        <div className="grid grid-rows-1 2xl:grid-cols-2 items-center gap-[30px] sm:gap-[57px]">
          <p className="text-[16px] sm:text-[18px] text-center md:text-start">
            Компания <b className="font-bold">Teplodom</b> является лидером
            строительных материалов на локальном рынке и предлагает широкий
            ассортимент строительных, отделочных материалов и товаров для дома
            всем клиентам Узбекистана.
            <div className="hidden md:inline-block">
              <br />
              В каталоге на сайте Teplodom представлена продукция самых
              известных брендов от крупнейших мировых производителей, а также
              популярные отечественные торговые марки. Благодаря удобной
              навигации, легко найти необходимый товар и отложить его в корзину
              для оформления онлайн заказа.
              <br />
              <br />
              Высокое качество, экспертные знания, качественные ресурсы и
              улучшение производства с каждым днем является обязательным
              требованием для нашего бренда!
            </div>
          </p>
          <img src={InfoImage} alt="Info Image" />
        </div>
      </div>
    </section>
  );
};

export default Info;
