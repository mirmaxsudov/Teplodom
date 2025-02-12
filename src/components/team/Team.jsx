import "./Team.css";
import I1 from "../../assets/images/team/i1.png";
import I2 from "../../assets/images/team/i2.png";
import I3 from "../../assets/images/team/i3.png";
import I4 from "../../assets/images/team/i4.png";

const Team = () => {
  const teams = [
    {
      id: 1,
      firstName: "Ӯткуров Сардор",
      work: "Директор фирмы",
      image: I1
    },
    {
      id: 2,
      firstName: "Рахматуллаев Хаб",
      work: "Менеджерпо продажам",
      image: I2
    },
    {
      id: 3,
      firstName: "Усмонов Нодир",
      work: "Менеджерпо продажам",
      image: I3
    },
    {
      id: 4,
      firstName: "Йолдошев Донийор",
      work: "Менеджерпо продажам",
      image: I4
    }
  ];

  return (
    <>
      <section className="md:py-[50px] py-[30px]">
        <div className="container mx-auto">
          <div className="top flex justify-between items-center mb-[30px]">
            <h3 className="font-semibold text-[30px] my-5">Наши команда</h3>
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
                      fillOpacity="0.4"
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
          <div className="team-wrapper lg:justify-between flex flex-nowrap overflow-x-auto items-stretch gap-[10px] justify-start">
            {teams.map((team) => (
              <div
                className="team-item flex flex-col items-center justify-center flex-shrink-0  w-[280px] bg-[#fff] rounded-[12px] px-[50px] pt-[30px]"
                key={team.id}
              >
                <div className="top-image rounded-full">
                  <img src={team.image} alt="Image" className="object-cover" />
                </div>
                <div className="team-item-body text-center pb-[30px]">
                  <p className="text-[18px] font-medium mt-[30px] mb-[10px]">{team.firstName}</p>
                  <p className="text-[#878787]">{team.work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;