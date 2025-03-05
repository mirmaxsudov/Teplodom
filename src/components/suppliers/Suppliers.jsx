import React, { useEffect, useState } from 'react'
const text = `
    Компания Teplodomshop всегда готова рассматривать новые предложения о сотрудничестве.
Нашей целью является развитие взаимовыгодных партнерских отношений с поставщиками и производителями для того, чтобы вместе предлагать нашим покупателям лучшее товарное предложение по низким ценам при стабильном качестве и гарантированном наличии.

<br/>
<br/>

Особое внимание мы уделяем локальным поставщикам и, в особенности, производителям в каждом регионе и стремимся обеспечить максимальное расширение такого сотрудничества. Эта поддержка дает региональным производителям отличную возможность для развития их бизнеса и многократного увеличения продаж.

<br/>
<br/>

Если Вы хотите стать поставщиком нашей компании, рекомендуем заполнить анкету.

<br/>
<br/>

Добро пожаловать, уважаемые будущие Партнеры!
Мы будем всегда рады увидеть Ваши сообщения с вопросами или предложениями, присланные на специальный почтовый ящик, указанный в разделе «Контакты».
`;

const Suppliers = () => {
    const [isFullText, setIsFullText] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (windowWidth >= 1024) {
            setIsFullText(true);
        } else {
            setIsFullText(false);
        }
    }, [windowWidth]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="return-order-section bg-[#FAFAFA]">
            <div className="container mx-auto">
                <div className="py-[30px] sm:py-[60px]">
                    <h1 className="text-[20px] sm:text-[40px] font-semibold mb-[40px]">
                        Поставщикам
                    </h1>
                    <div className="text-[16px] sm:text-[18px]">
                        <p
                            className="tracking-wide"
                            dangerouslySetInnerHTML={{
                                __html: isFullText ? text : `${text.slice(0, 300)}...`
                            }}
                        />
                        {!isFullText && (
                            <button
                                onClick={() => setIsFullText(true)}
                                className="mt-2 text-blue-500 underline"
                            >
                                Читать далее
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Suppliers