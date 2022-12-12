import Link from 'next/link'


function Result() {
    return ( 
        <div className="absolute right-20 z-40 top-16  ">
            <div className="bg-white py-4 px-6 w-full container mx-auto my-auto   flex justify-between rounded-3xl">
            <Link href="/SignUp" className='cursor-pointer border-2 mr-2 text-base px-6 py-1  rounded-full hover:bg-[#F1DF6F]  text-black'>Зарегистрироваться</Link>
            <Link href="/sign-in" className='cursor-pointer border-2 ml-2 text-base px-6 py-1  rounded-full hover:bg-[#F1DF6F]  text-black'>Войти</Link>
        </div>
        </div>
     );
}

export default Result;