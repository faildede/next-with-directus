
import Link from 'next/link'
import Image from 'next/image'

export default function FirstBody() {

    return(
        <div className='flex container mx-auto justify-between '>{/*general */}
             <div> {/*with text */}
                <p className='font-normal text-6xl leading-relaxed '>Нанимайте проверенных <br /><span className='bg-[#F1DF6F] rounded-3xl  px-6'>кандидатов</span></p>
                <p className='mt-4 text-[#626262] text-lg font-normal w-96'>Мы уже со всеми провели собеседования и подтверждаем их профессионализм</p>
              
                <div className=' mt-4 flex-col justify-center items-center md:hidden'>
                    <p className='cursor-pointer ml-8 w-3/5 border-2 text-lg px-6 py-1 border-[#F1DF6F] rounded-full hover:bg-[#F1DF6F]  text-black'> <Link href='/Candidate'>Выбрать кандидата</Link> </p>
                    <p className='cursor-pointer ml-8 w-3/5 mt-2 border-2 text-lg px-6 py-1 border-[#F1DF6F] rounded-full hover:bg-[#F1DF6F] text-black'><Link href='/Getbaza'> Попасть в базу</Link> </p>
                </div>
               
                <div className='invisible sm:visible mt-12  md:flex  '> {/*btn */}
                    <p className='cursor-pointer border-2 text-lg px-6 py-1 border-[#F1DF6F] rounded-full hover:bg-[#F1DF6F]  text-black'> <Link href='/Candidate'>Выбрать кандидата</Link> </p>
                    <p className='cursor-pointer  md:ml-10 border-2 text-lg px-6 py-1 border-[#F1DF6F] rounded-full hover:bg-[#F1DF6F] text-black'><Link href='/Getbaza'> Попасть в базу</Link> </p>
                </div>
               
            </div>
            <div >{/*img */}
                <Image className='hidden md:block' src="/assets/main_image.svg" height={500} width={500} />
            </div>
        </div>
    )
}