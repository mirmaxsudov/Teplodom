import React from "react";

const Contacts = () => {
    const data = [
        {
            id: 1,
            icon: (
                <svg
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_1_5617)">
                        <path
                            d="M46.9629 8.07422H21.037C20.0547 8.07422 19.1126 8.46443 18.418 9.15901C17.7235 9.85359 17.3333 10.7956 17.3333 11.7779V56.2224C17.3333 57.2046 17.7235 58.1467 18.418 58.8413C19.1126 59.5359 20.0547 59.9261 21.037 59.9261H46.9629C47.9452 59.9261 48.8872 59.5359 49.5818 58.8413C50.2764 58.1467 50.6666 57.2046 50.6666 56.2224V11.7779C50.6666 10.7956 50.2764 9.85359 49.5818 9.15901C48.8872 8.46443 47.9452 8.07422 46.9629 8.07422ZM21.037 11.7779H46.9629V45.1113H21.037V11.7779ZM21.037 56.2224V48.815H46.9629V56.2224H21.037Z"
                            fill="black"
                        />
                        <path
                            d="M32.1481 50.667H35.8518V54.3707H32.1481V50.667Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_5617">
                            <rect
                                width="66.6667"
                                height="66.6667"
                                fill="white"
                                transform="translate(0.666626 0.666992)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Телефон",
            phone: "+998 (97) 761 62 51",
        },

        {
            id: 2,
            icon: (
                <svg
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M33.7296 17.2803C32.0815 17.2803 30.4703 17.769 29.0999 18.6847C27.7295 19.6004 26.6614 20.9019 26.0306 22.4246C25.3999 23.9473 25.2349 25.6229 25.5564 27.2394C25.878 28.8559 26.6716 30.3407 27.8371 31.5062C29.0025 32.6716 30.4874 33.4653 32.1039 33.7868C33.7204 34.1084 35.396 33.9433 36.9187 33.3126C38.4414 32.6819 39.7429 31.6138 40.6586 30.2434C41.5742 28.8729 42.063 27.2618 42.063 25.6136C42.0605 23.4042 41.1817 21.2861 39.6194 19.7238C38.0572 18.1616 35.939 17.2828 33.7296 17.2803ZM33.7296 29.7803C32.9055 29.7803 32.1 29.5359 31.4148 29.0781C30.7296 28.6202 30.1955 27.9695 29.8801 27.2081C29.5648 26.4468 29.4823 25.609 29.643 24.8007C29.8038 23.9925 30.2006 23.25 30.7834 22.6673C31.3661 22.0846 32.1085 21.6878 32.9168 21.527C33.725 21.3662 34.5628 21.4487 35.3242 21.7641C36.0855 22.0795 36.7363 22.6135 37.1941 23.2987C37.6519 23.9839 37.8963 24.7895 37.8963 25.6136C37.895 26.7183 37.4556 27.7774 36.6745 28.5585C35.8934 29.3396 34.8343 29.779 33.7296 29.7803Z"
                        fill="black"
                    />
                    <path
                        d="M49.7429 9.58791C45.7836 5.62963 40.4985 3.27825 34.9074 2.98759C29.3164 2.69693 23.8159 4.4876 19.4675 8.01399C15.1192 11.5404 12.2311 16.5525 11.3609 22.083C10.4906 27.6135 11.6999 33.2704 14.7551 37.9617L30.4982 62.1301C30.8486 62.6679 31.3276 63.1097 31.8919 63.4156C32.4562 63.7215 33.0879 63.8816 33.7297 63.8816C34.3715 63.8816 35.0032 63.7215 35.5675 63.4156C36.1318 63.1097 36.6108 62.6679 36.9611 62.1301L52.7048 37.9617C55.5397 33.6098 56.7926 28.4156 56.2533 23.2498C55.7141 18.084 53.4155 13.2605 49.7429 9.58791ZM49.2136 35.6874L33.7298 59.4569L18.2458 35.6874C13.5062 28.4115 14.5227 18.6745 20.6628 12.5341C22.3788 10.8181 24.4159 9.45692 26.658 8.52822C28.9 7.59952 31.303 7.12153 33.7298 7.12153C36.1565 7.12153 38.5595 7.59952 40.8015 8.52822C43.0436 9.45692 45.0807 10.8181 46.7967 12.5341C52.9368 18.6745 53.9532 28.4115 49.2136 35.6874Z"
                        fill="black"
                    />
                </svg>
            ),
            title: "Локация",
            phone: ` ул. Уста Ширин, рынок Джамий,
дом 134, магазин 131`,
        },
        {
            id: 3,
            icon: (
                <svg
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.95837 16.2915H60.0417V55.8748H7.95837V16.2915Z"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.0417 18.375L34 39.2083L57.9584 18.375"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Е-майл",
            phone: "Sardorraimov@gmail.com",
        },
        {
            id: 4,
            icon: (
                <svg
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_1_5617)">
                        <path
                            d="M46.9629 8.07422H21.037C20.0547 8.07422 19.1126 8.46443 18.418 9.15901C17.7235 9.85359 17.3333 10.7956 17.3333 11.7779V56.2224C17.3333 57.2046 17.7235 58.1467 18.418 58.8413C19.1126 59.5359 20.0547 59.9261 21.037 59.9261H46.9629C47.9452 59.9261 48.8872 59.5359 49.5818 58.8413C50.2764 58.1467 50.6666 57.2046 50.6666 56.2224V11.7779C50.6666 10.7956 50.2764 9.85359 49.5818 9.15901C48.8872 8.46443 47.9452 8.07422 46.9629 8.07422ZM21.037 11.7779H46.9629V45.1113H21.037V11.7779ZM21.037 56.2224V48.815H46.9629V56.2224H21.037Z"
                            fill="black"
                        />
                        <path
                            d="M32.1481 50.667H35.8518V54.3707H32.1481V50.667Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_5617">
                            <rect
                                width="66.6667"
                                height="66.6667"
                                fill="white"
                                transform="translate(0.666626 0.666992)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Телефон",
            phone: "+998 (93)  556 91 31",
        },
        {
            id: 5,
            icon: (
                <svg
                    width="66"
                    height="66"
                    viewBox="0 0 66 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.75 55H16.5C13.5826 55 10.7847 53.8411 8.72183 51.7782C6.65893 49.7153 5.5 46.9174 5.5 44V19.25C5.5 16.3326 6.65893 13.5347 8.72183 11.4718C10.7847 9.40892 13.5826 8.25 16.5 8.25H46.75C49.6674 8.25 52.4653 9.40892 54.5282 11.4718C56.5911 13.5347 57.75 16.3326 57.75 19.25V27.5M22 5.5V11M41.25 5.5V11M5.5 22H57.75M50.875 43.0182L46.75 47.1432"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M46.75 60.5C54.3439 60.5 60.5 54.3439 60.5 46.75C60.5 39.1561 54.3439 33 46.75 33C39.1561 33 33 39.1561 33 46.75C33 54.3439 39.1561 60.5 46.75 60.5Z"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Расписание",
            phone: "Мы в вашем распоряжении 7 дней в неделю!",
        },
        {
            id: 6,
            icon: (
                <svg
                    width="66"
                    height="66"
                    viewBox="0 0 66 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M33 61.875C27.2891 61.875 21.7064 60.1815 16.9579 57.0087C12.2095 53.8359 8.50847 49.3262 6.32299 44.05C4.13751 38.7738 3.56569 32.968 4.67984 27.3668C5.79399 21.7656 8.54406 16.6205 12.5823 12.5823C16.6205 8.54406 21.7656 5.79399 27.3668 4.67984C32.968 3.56569 38.7738 4.13751 44.05 6.32299C49.3262 8.50847 53.8359 12.2095 57.0087 16.9579C60.1815 21.7064 61.875 27.2891 61.875 33C61.875 40.6581 58.8328 48.0026 53.4177 53.4177C48.0026 58.8328 40.6581 61.875 33 61.875ZM33 8.25001C28.1049 8.25001 23.3198 9.70157 19.2497 12.4211C15.1795 15.1407 12.0073 19.0061 10.134 23.5286C8.26073 28.0511 7.77059 33.0275 8.72558 37.8285C9.68056 42.6295 12.0378 47.0396 15.4991 50.5009C18.9605 53.9623 23.3705 56.3195 28.1715 57.2744C32.9726 58.2294 37.949 57.7393 42.4714 55.866C46.9939 53.9928 50.8593 50.8205 53.5789 46.7504C56.2984 42.6803 57.75 37.8951 57.75 33C57.75 26.4359 55.1424 20.1406 50.5009 15.4991C45.8594 10.8576 39.5641 8.25001 33 8.25001Z"
                        fill="black"
                    />
                    <path
                        d="M43.9217 43.9202C43.1182 44.7237 41.8155 44.7237 41.0121 43.9202L31.8162 34.7243C31.2536 34.1617 30.9375 33.3986 30.9375 32.603V16.5C30.9375 15.3609 31.8609 14.4375 33 14.4375C34.1391 14.4375 35.0625 15.3609 35.0625 16.5V31.3065C35.0625 31.8362 35.2727 32.3443 35.6469 32.7193L43.9231 41.0121C44.7252 41.8158 44.7246 43.1173 43.9217 43.9202Z"
                        fill="black"
                    />
                </svg>
            ),
            title: "Время",
            phone: "Каждый день с 8:00 – 18:00",
        },
    ];

    return (
        <section className="contact-section py-[100px] bg-[#FAFAFA]">
            <div className="container mx-auto">
                <h1 className="text-[30px] font-semibold mb-10">Контакты</h1>
                <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-10">
                    {data.map((item) => (
                        <div key={item.id} className="flex flex-col gap-[20px] text-center">
                            <div className="text-[50px] border-[#FFB12A] mx-auto border-1 size-[100px] flex items-center justify-center rounded-full border-[5px] p-4">
                                {item.icon}
                            </div>
                            <div className="flex items-center gap-[20px] mx-auto">
                                <div>
                                    <h3 className="font-semibold text-[24px] mb-[20px]">
                                        {item.title}
                                    </h3>
                                    <p className="text-center whitespace-pre">{item.phone}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-[10px] md:py-[100px]">
                    <h1 className="text-[30px] font-semibold mb-10">
                        Заказать обратный звонок
                    </h1>
                    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-[54px]">
                        <div className="flex flex-col justify-between ">
                            <form>
                                <div className="flex flex-col">
                                    <label className="text-[14px] mb-[10px]">
                                        Введите имя
                                    </label>
                                    <input type="text" className="transition-all bg-[#fafafa] duration-300 py-3 px-2 rounded-lg outline-2 outline-slate-500 border-[#ccc] border-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[14px] my-[10px]">
                                        Введите номер телефона
                                    </label>
                                    <input type="text" className="transition-all bg-[#fafafa] duration-300 py-3 px-2 rounded-lg outline-2 outline-slate-500 border-[#ccc] border-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[14px] my-[10px]">
                                        Комментарии
                                    </label>
                                    <textarea className="resize-none bg-[#fafafa] h-[150px] transition-all duration-300 py-3 px-2 rounded-lg outline-2 outline-slate-500 border-[#ccc] border-[2px]"></textarea>
                                </div>
                            </form>
                            <div>
                                <button className="transition-all px-[20px] text-white duration-300 self-auto py-3 rounded-lg outline-2 border-0 bg-[#FFB12A] mt-auto hover:bg-[#ef8100]">
                                    Отправить
                                </button>
                            </div>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.612775020324!2d69.22591597530084!3d41.32653217130763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb7a0ebbae3%3A0xf9e01b5d45fc68cd!2sPDP%20Academy!5e1!3m2!1sru!2s!4v1739607469856!5m2!1sru!2s"
                                width="100%"
                                height="450"
                                className="rounded-[20px]"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
