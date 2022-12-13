import Link from "next/link"

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

export default function FreelancersCard({image, freelancer_name,salary, exp, category, slug, time, time1}) {
  return (
       <div className="">
         <div className="flex container mx-auto my-auto">
            <div  className='mx-8 bg-white rounded-lg py-7 px-14 container md:mx-2 mt-2 '>
            <div className='container mx-auto '>
             <div className='container mx-auto flex justify-between'>
             <p className='text-[#92400E] bg-[#FEF3C7] font-weight text-base px-2 rounded-full'>{time}</p>
              <p className='text-[#5B21B6] bg-purple-100 font-weight text-base px-2 rounded-full'>{time1}</p>
             </div>
              <div className='text-center'>
                <img className='rounded-full w-24 py-2 container mx-auto' src={`${assetsUrl}/${image}`} alt="" />
                <p className='font-normal text-xl leading-6 pt-2'>{freelancer_name}</p>
                <p className='text-[#979797] font-normal text-lg'>{}</p>

                <div className='font-normal text-lg py-4'>
                  <p>Опыт: более {exp} лет</p>
                  <p>Зарплата: {salary} тыс.₸</p>
                </div>
              </div>
            <Link href={`/freelancer/${category.slug}/${slug}`}>
            <div className='bg-[#F1DF6F] cursor-pointer rounded-full py-2 px-4'>
                <p className='text-center text-base'>Посмотреть справку</p>
            </div>
            </Link>
          
            </div>
        </div>
        </div>
       </div>
    )
}