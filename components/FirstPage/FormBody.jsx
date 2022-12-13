import Image from "next/image";
import { useState } from "react";


const FormBody = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");



const handleSubmit = (e) => {
  e.preventDefault();
  console.log('fff');
  setName("");
  setEmail("");
  setNumber("")

}

  return (
    <>
    <div className="container mx-auto md:mt-32 md:flex justify-between items-center relative">
    {open ? <Thanks /> : null}
      <div className=" w-full md:w-8/12 container my-auto">
        <Image src="/assets/Form.svg" alt="/"  width={500} height={500}/>
      </div>
      
  
      <div className="container mx-auto md:">
        <div className="bg-white  md:px-10 py-8 rounded-t-lg w-full">{/*Form  */}
          <div className="container mx-auto text-center">{/*Text  */}
            <p className="font-normal text-2xl md:text-4xl">
              Подписаться на обновления базы
            </p>
            <p className="font-normal container mx-auto  text-xl md:w-5/6">
              Мы будет присылать вам информацию каждую неделю, по каким сферам у
              нас появились кандидаты.
            </p>
          </div>
          <form className="container mx-auto mt-8" onSubmit={(e) => handleSubmit(e)}>{/*Input  */}
            <input
              className="block my-4 container mx-auto w-5/6 py-2 border border-[#D1D5DB] rounded-3xl px-4 outline-none"
              type="text"
              name="name"
              value={name}
              id=""
              placeholder="Ваше имя"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="block my-4 container mx-auto w-5/6 py-2 border border-[#D1D5DB] rounded-3xl px-4 outline-none"
              type="email"
              name="email"
              value={email}
              id=""
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="block my-4 container mx-auto w-5/6 py-2 border border-[#D1D5DB] rounded-3xl px-4 outline-none"
              type="tel"
              name="number"
              value={number}
              id=""
              placeholder="Номер телефона"
              onChange={(e) => setNumber(e.target.value)}
            />
          </form>
          <div className="mt-8" onClick={handleSubmit} >
            {/*Button  */}
            <p type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className=" container mx-auto w-5/6 text-center cursor-pointer rounded-3xl py-2 my-4 font-normal text-lg bg-[#F1DF6F]"  >
              Подписаться
            </p>
   

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4  rounded-t-md">
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
      <div class="modal-body relative font-normal text-3xl text-center p-4">
      Спасибо! Вы подписались на еженедельные обновления базы проверенных кандидатов.
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4  rounded-b-md">
        <button type="button" class="px-6
          py-2.5
          bg-[#F1DF6F]
          font-medium
          text-lg
          leading-tight
          uppercase
          rounded-lg
          shadow-md
          hover:bg-[#F1DF6F] hover:shadow-lg
          focus:bg-[#F1DF6F] focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-[#F1DF6F] active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Закрыть</button>
      </div>
    </div>
  </div>
</div>
          </div>
         
        </div>
        <div className="bg-[#F9FAFB] mt-1  rounded-b-2xl">{/*Form footer  */}
          <p className="font-normal text-sm px-4 py-4  text-[#6B7280]">
            Отправка данной формы означает согласие с <span className="text-[#111827] font-bold "> Пользовательским
            соглашением</span> и <span className="text-[#111827] font-bold "    >Политикой конфиденциальности</span>
          </p>
        </div>
       
      </div>
    
    </div>
    
     </>
  );
};

export default FormBody;
