import Image from "next/image";
import Link from "next/link";

export default function SecondBody() {
  const name = [
    {
      id: 1,
      name: "Маркетинг",
      img: require("../../public/assets/Marketing.svg"),
    },
    {
      id: 2,
      name: "Разработка",
      img: require("../../public/assets/Ic.svg"),
    },
    {
      id: 3,
      name: "Аналитика",
      img: require("../../public/assets/I.svg"),
    },
    {
      id: 4,
      name: "Комьюнити",
      img: require("../../public/assets/n.svg"),
    },
    {
      id: 5,
      name: "Дизайн",
      img: require("../../public/assets/co.svg"),
    },
    {
      id: 6,
      name: "Продажи",
      img: require("../../public/assets/Icn.svg"),
    },
    {
      id: 7,
      name: "Контент",
      img: require("../../public/assets/Mess.svg"),
    },
    {
      id: 8,
      name: "Топ-менеджмент",
      img: require("../../public/assets/star.svg"),
    },
  ];

  return (
    <div className="md:mt-32 container mx-auto">
      <div className="hidden md:block md:visible md:z-10 md:container md:mx-auto ">
        {/* Direction */}
        <p className="text-center text-4xl">Выберите направление работы</p>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {name.map((i) => (
              <div
                className="flex mt-8 bg-white py-6 px-12 rounded-xl"
                key={i.id}
              >
                <Image
                  className="w-16 h-12 bg-[#F1DF6F] rounded-xl mr-4 p-2"
                  src={i.img.default}
                  height={500}
                  width={500}
                />
                <p className="font-normal text-lg container my-auto">
                  {i.name}
                </p>
              </div>

          ))}
        </div>
      </div>

      <div>
        {/* General for 2 div */}
        <div className="md:mt-32 flex justify-between">
          <div data-aos="fade-up-right" className="bg-white px-4 mx-2 py-12 md:py-14 md:px-14 md:pr-24 rounded-2xl md:justify-start">{/* General for 1st div */}
            <p className="font-normal text-xl md:text-3xl md:w-96">Почему работодатели выбирают ЛИЦА?</p>
            <div>
              {" "}
              {/* 1st text */}
              <div className="flex">
                <Image className="w-4 md:w-7" src='/assets/tick.svg' width={500} height={500} /> <p className="leading-8 font-normal md:text-3xl  md:py-4">Проверка компетенций</p>
              </div>
              <p className="w-80 md:w-96 text-lg">
                Всех кандидатов с нашей стороны собеседуют не рекрутера, а
                эксперты в своих областях. По результаты мы составляем справку о
                кандидате, чтобы вы могли узнать его лучше.
              </p>
            </div>
            <div>
              {/* 2nd text */}
              <div className="flex">
                <Image className="w-4 md:w-7" src='/assets/tick.svg' width={500} height={500} />{" "}
                <p className="leading-8 font-normal md:text-3xl  md:py-4">Сотни кандидатов по подписке</p>
              </div>
              <p className="w-80 md:w-96 text-lg">
                Вы сможете самостоятельно связываться с кандидатами – все они
                дали согласие на это.
              </p>
            </div>

              <div> {/* 3rd text */}
              <div className="flex">
                <Image className="w-4 md:w-7" src='/assets/tick.svg' width={500} height={500} />{" "}
                <p className="leading-8 font-normal md:text-3xl  md:py-4">Еженедельное обновление базы</p>
              </div>
              <p className="w-80 md:w-96 text-lg">
              В рамках сервиса ЛИЦА.Работа мы проводим
              по несколько десятков собеседований еженедельно, и пополняем базу новыми справками по лучшим кандидатам.
              </p>  
              </div>

          </div>

            <div data-aos="fade-up-left" className="hidden md:block bg-[#F1DF6F] relative rounded-xl">{/* General for 2nd div */}
              <div className="py-10 px-14 ">
                <p className="font-normal text-4xl py-2">Кандидаты по подписке</p>
                <p className="font-normal text-4xl py-2"  >4900 ₽ в месяц</p>
                <p className="text-[#F50F22] w-2/3 py-2 text-xl">В 10-100 раз ниже стоимости любого подбора</p>
                <Link href='/Candidate' className="cursor-pointer mt-20 bg-white rounded-2xl px-8 py-2 ">Выбрать кандидата</Link>
              </div>
              <Image className="absolute bottom-1 right-0" src='/assets/Mask group.svg' width={500} height={500} />
            </div>

        </div>
        <div></div>
      </div>
    </div>
  );
}
