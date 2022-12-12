import Image from "next/image";
import { useState } from "react";
import Thanks from "../SecondPage/Thanks";

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
    <div className="container mx-auto mt-32 flex justify-between items-center relative">
    {open ? <Thanks /> : null}
      <div className="invisible md:visible w-8/12 container my-auto">
        <Image src="/assets/Form.svg" alt="/"  width={500} height={500}/>
      </div>
      
  
      <div>
        <div className="bg-white px-10 py-8 rounded-t-lg w-full">{/*Form  */}
          <div className="container mx-auto text-center">{/*Text  */}
            <p className="font-normal text-4xl">
              Подписаться на обновления базы
            </p>
            <p className="font-normal container mx-auto  text-xl w-5/6">
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
            <p className=" container mx-auto w-5/6 text-center cursor-pointer rounded-3xl py-2 my-4 font-normal text-lg bg-[#F1DF6F]"  >
              Подписаться
            </p>
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
