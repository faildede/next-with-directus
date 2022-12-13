import Image from "next/image";
import getData from "../../../queries/getData";
import { SingleFreelancerQuery } from "../../../queries/SingleFreelancerQueries";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useState } from 'react'
 
const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

export const getServerSideProps = async (ctx) => {

  const { slug } = ctx.query;
  const data = await getData(SingleFreelancerQuery, "freelancers", {
    freelancer_slug: slug,
  });

  return {
    props: {
      freelancer: data,
    },
  };
};

export default function page({ freelancer }) {
  console.log(freelancer);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [item, setItem] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault();
      setName("")
      setEmail("")
      setNumber("")
      setItem("")
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto ">
        <div className="flex  md:mx-auto justify-between">
          {freelancer.map((i) => {
            return (
              <div className="w-3/4">
                <div className="container mx-8 md:mx-auto bg-white rounded-xl">
                  <div className="p-6">
                    <div className="md:flex">
                      <img
                        className="rounded-full w-28 h-28"
                        src={`${assetsUrl}/${i.featured_image.id}`}
                      />
                      <div className="ml-2">
                        <p className="font-medium text-2xl">
                          {" "}
                          {i.freelancer_name}
                        </p>
                        <p className="font-normal text-lg">{i.years} год</p>
                        <p className="font-normal text-lg">
                          {i.Freelancer_specialization}
                        </p>
                        <div className="flex p-2">
                          <Image
                            src="/assets/city.svg"
                            width={15}
                            height={15}
                          />
                          <p className="ml-1 font-normal text-lg">{i.city}</p>
                        </div>
                        <p className="font-normal text-lg">
                          Рассматривался на вакансию:{" "}
                          {i.Freelancer_specialization} разработчик
                        </p>
                        <p className="font-normal text-lg">
                          {" "}
                          Зарплатные ожидания: {i.salary} тыс. тенг
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mx-8 md:mx-auto my-auto mt-8 p-4 bg-white rounded-xl">
                  <p className="font-normal text-xl">Причина поиска работы </p>
                  <p className="font-normal text-lg">
                    {i.Freelancers_description}
                  </p>
                </div>

                <div className="container mx-8 md:mx-auto my-auto mt-8 p-4 bg-white rounded-xl">
                  <p className="font-normal text-xl">
                    Общая информация, почему именно этот кандидат{" "}
                  </p>
                  <p className="font-normal text-lg">{i.work_API}</p>
                </div>
              </div>
            );
          })}

          <div className="hidden md:block">
            <div className="bg-white rounded-xl p-6 w-full">
              <div className="container my-auto">
                <p
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalFullscreen"
                  className="cursor-pointer border-2 text-lg px-2 text-center my-2 py-1 border-[#F1DF6F] rounded-full hover:bg-[#F1DF6F]  text-black"
                >
                  Просмотреть резюме
                </p>
                <p type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" className="cursor-pointer border-2 text-lg px-2 text-center my-2 py-1 border-[#F1DF6F] rounded-full hover:bg-[#F1DF6F]  text-black">
                  Обсудить сотрудничество
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl mt-4 p-6 w-full">
                <p className="text-2xl font-normal">Проверка</p>
                <p className="text-red-600 font-normal text-lg">У этого пользователя есть резюме</p>
            </div>
          </div>
        </div>


        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b  rounded-t-md">
      <p className=" container mx-20 font-normal flex text-4xl">
                        Лица{" "}
                        <Image
                          className="mx-2"
                          src="/assets/Grou.svg"
                          width={40}
                          height={40}
                        />{" "}
                        Кандидаты
                      </p>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body items-center relative p-4">
        <form className="continer mx-auto"  onSubmit={(e) => handleSubmit(e)}>
            
           <div className="flex justify-between">
           <div>
            <p className="font-normal text-lg ml-2">
                Имя <span className="text-red-600">*</span>
              </p>
                <input 
                value={name}  
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                name="name" 
                id="" 
                placeholder="Введите имя" 
                className="outline-none rounded-xl py-2 pr-6 pl-2 border border-gray-300" />
            </div>
           <div>
            <p className="font-normal text-lg ml-2">
                Email <span className="text-red-600">*</span>
              </p>
                <input 
                value={email}  
                onChange={(e) => setEmail(e.target.value)} 
                type="text" 
                name="email" 
                id="" 
                placeholder="Введите свою почту" 
                className="outline-none rounded-xl py-2 pr-6 pl-2 border border-gray-300" />
            </div>
          
           </div>
           <div>
            <p className="font-normal text-lg ml-2">
                Предложение <span className="text-red-600">*</span>
              </p>
                <textarea 
                type="" 
                value={item}
                name="item"
                onChange={(e) => setItem(e.target.value)} 
                cols="55" 
                rows="8" 
                id="" 
                placeholder="Введите свое предложение" 
                className="outline-none rounded-xl py-2 pr-6 pl-2 border border-gray-300" />
            </div>
            <div>
            <p className="font-normal text-lg ml-2">
                Сумму <span className="text-red-600">*</span>
              </p>
              <input 
              value={number} 
              onChange={(e) => setNumber(e.target.value)} 
              type="text" 
              name="money" 
              id="" 
              placeholder="Введите сумму оплаты" 
              className="outline-none rounded-xl py-2 pr-6 pl-2 border border-gray-300" />
            </div>
        </form>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-between p-4 border-t  rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xl leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Закрыть
        </button>
        <button onClick={handleSubmit} type="button"
          class="inline-block px-6 py-2.5 bg-[#F1DF6F]  font-medium text-xl leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out ml-1">
          Отпарвить 
        </button>
      </div>
    </div>
  </div>
</div>



        {freelancer.map((g) => {
          return (
            <div>
              <div
                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModalFullscreen"
                tabindex="-1"
                aria-labelledby="exampleModalFullscreenLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-fullscreen relative  w-auto pointer-events-none">
                  <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
                      <p className=" container mx-20 font-normal flex text-4xl">
                        Лица{" "}
                        <Image
                          className="mx-2"
                          src="/assets/Grou.svg"
                          width={40}
                          height={40}
                        />{" "}
                        Кандидаты
                      </p>
                    </div>
                    <div class="modal-body relative font-normal text-xl px-4">
                      {g.resum}
                    </div>
                    <div class="modal-footer flex flex-shrink-0 mt-0 flex-wrap items-center justify-center p-4 rounded-b-md">
                      <button
                        type="button"
                        class="inline-block px-6 py-2.5 justify-center bg-[#F1DF6F]  rounded-lg font-medium text-lg leading-tight uppercase  shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-dismiss="modal"
                      >
                        Я прочитал
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
