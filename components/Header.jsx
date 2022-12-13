import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from 'next-auth/react'
import Result from "./Result";
import {useState} from 'react'




const Header = () => {
  const [open, setOpen] = useState(false) 
  const { status } = useSession()
  const [op, setOp] = useState(false)


  return (
    <div>
      <div className="container flex mx-auto  justify-between font-normal text-base  border-b p-6 border-[#D1D5DB]">
        {" "}
        {/*//general   */}
        <div className="flex justify-between">
          <Link className="container my-auto w-16 sm:w-80" href="/">
            <Image
              className="hidden sm:block container my-auto"
              src="/assets/Logo_candidates.svg"
              width={64}
              height={0}
            />
            <Image
              className=" sm:container my-auto sm:hidden"
              src="/assets/Grou.svg"
              width={64}
              height={0}
            />
          </Link>

          <div className="hidden sm:block container m-auto px-8">
            <ul className="flex justify-between text-bold ">
              <li className="text-lg font-medium ">
                <Link href="/Candidate">Найти кандидата</Link>
              </li>
              <li className="text-lg font-medium">
                {" "}
                <Link href="/Getbaza">Попасть в базу</Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/AboutService">О сервисе</Link>
              </li >
            </ul>
          </div>
        </div>
        <div className=" flex justify-between ">       
          <div className="">
            {" "}
            {/* btn */}
            { status === 'authenticated' ? (
              <div className="container my-auto relative text-lg rounded-3xl px-8 bg-[#F1DF6F]">
              <button className="px-8 py-1" onClick={() => signOut({ callbackUrl: '/'})}>Выйти</button>
            </div>
            ) : (
                 <div className="invisible sm:visible sm:container my-auto relative sm:text-lg md:rounded-3xl md:px-8 md:bg-[#F1DF6F]"  onClick={() => setOpen(!open)}>
                 <button className="px-8 py-1" >Войти</button>
               </div>
            )}
            <div> {/*If person log in */}</div>
          </div>
          <div className=" md:hidden">
          {op ? <Image src='/assets/X.svg' width={64}
           height={0} onClick={() => setOp(!op)} /> : 
           <Image src='/assets/Menubutton.svg'  width={64}
           height={0} onClick={() => setOp(!op)} />} 
          </div>
        </div>
      </div>
      <div className="hidden md:container md:mx-auto md:py-4 md:flex md:justify-between">
        <ul className="flex ">
          <li className="px-2 ">
            Маркетологи
          </li>
          <li className="px-2 ">
            Backend-разработчики
          </li>
          <li className="px-2 ">
            Дизайнеры
          </li>
          <li className="px-2 ">
           Менеджеры по продажам
          </li>
        </ul>
        {open ? <Result /> : null}
      </div>
      {
          op ? <div className="bg-white absolute w-full py-4 pb-8 z-50 md:hidden">
              <ul className="container mx-auto border border-y">
              <li className="my-2 px-2 font-normal text-xl">
                <Link href="/Candidate">Найти кандидата</Link>
              </li>
              <li className="my-2 px-2 font-normal text-xl">
                {" "}
                <Link href="/Getbaza">Попасть в базу</Link>
              </li>
              <li className="my-2 px-2 font-normal text-xl">
                <Link href="/AboutService">О сервисе</Link>
              </li>
            </ul>
            <ul className=" ">
          <li className="px-2 my-2 font-normal text-xl">
            Маркетологи
          </li>
          <li className="px-2 my-2 font-normal text-xl">
            Backend-разработчики
          </li>
          <li className="px-2 my-2 font-normal text-xl">
            Дизайнеры
          </li>
          <li className="px-2 my-2 font-normal text-xl">
           Менеджеры по продажам
          </li>
        </ul>

       
                 <button className="container my-auto text-lg mt-4 text-center rounded-2xl  bg-[#F1DF6F]"><Link className="  py-1" href="/sign-in" >Войти</Link></button>
              
          </div> : null
        }
    </div>
  );
};
export default Header;
