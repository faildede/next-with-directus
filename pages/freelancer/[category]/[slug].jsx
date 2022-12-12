import Image from 'next/image'
import getData from '../../../queries/getData'
import { SingleFreelancerQuery } from "../../../queries/SingleFreelancerQueries";
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

export const getServerSideProps = async(ctx) => {
    const {slug} = ctx.query
    const data = await getData(SingleFreelancerQuery, 'freelancers', {freelancer_slug: slug})

    return {
        props: {
            freelancer: data
        },
    }
}


export default function page({freelancer}) {
    console.log(freelancer);    

    return (
      <div>
        <Header />
        <div className='container mx-auto '>
            <div className='flex justify-between'>
            {
                freelancer.map(i => {
                    return(
                       <div className='w-3/4'>
                         <div className='bg-white rounded-xl'>
                        <div className='p-6'>
                            <div className='flex'>
                                  <img className='rounded-full w-28 h-28' src={`${assetsUrl}/${i.featured_image.id}`} />
                                    <div className='ml-2'>
                                    <p className='font-normal text-xl'> {i.freelancer_name}</p>
                                    <p className='font-normal text-lg'>{i.years} год</p>
                                    <p className='font-normal text-lg'>{i.Freelancer_specialization}</p>
                                    <div className='flex p-2'>
                                    <Image src='/assets/city.svg' width={15} height={15} />
                                    <p className='ml-1 font-normal text-lg'>{i.city}</p>
                                    </div>
                                    <p className='font-normal text-lg'>Рассматривался на вакансию: {i.Freelancer_specialization} разработчик</p>
                                    <p className='font-normal text-lg'> Зарплатные ожидания: {i.salary} тыс. тенг</p>
                                    </div>
                                  </div>
                                  
                            </div>
                        </div>

                            <div className='container mx-auto my-auto mt-8 p-4 bg-white rounded-xl'>
                                <p className='font-normal text-xl'>Причина поиска работы </p>
                                <p className='font-normal text-lg'>{i.Freelancers_description}</p>
                            </div>

                            <div className='container mx-auto my-auto mt-8 p-4 bg-white rounded-xl'>
                                <p className='font-normal text-xl'>Общая информация, почему именно этот кандидат </p>
                                <p className='font-normal text-lg'>{i.work_API}</p>
                            </div>
                       </div>
                    )
                })
            }


            <div>
                <div className='bg-white rounded-xl p-6 w-full'>
                    <div className='container my-auto'>
                        <p className='cursor-pointer border-2 text-lg px-2 text-center my-2 py-1 border-[#F1DF6F] rounded-full hover:bg-[#F1DF6F]  text-black'>Просмотреть резюме</p>
                        <p className='cursor-pointer border-2 text-lg px-2 text-center my-2 py-1 border-[#F1DF6F] rounded-full hover:bg-[#F1DF6F]  text-black'>Обсудить сотрудничество</p>
                    </div>
                </div>
            </div>
            </div>
            <div>

            </div>
        </div>
       <Footer />
      </div>
    )
}


