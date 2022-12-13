import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image';

function AbotService() {
    return ( 
        <div>
            <Header />
            <div className='container mx-auto my-5'>
                <div>
                <p className='font-medium text-3xl md:text-6xl leading-relaxed '>Найдите своего кандидата</p>
                </div>

                <div className='md:flex justify-between mt-34'>
                    <Image src="/assets/main_image.svg"  height={500} width={500} />
                    <div data-aos="fade-right" className='flex-col w-full  md:w-1/2 justify-end'>
                        <div className='justify-end text-end '>
                        <p className='font-bold text-3xl  w-96 bg-[#F1DF6F] text-end p-2 rounded-2xl'>Что умеют наши Кандидаты</p>
                        </div>
                   <div className=''>
                   <p  className='  bg-white mr-12 p-5 my-4 rounded-xl font-bold md:text-xl'>Найдите своего кандидата для разработки своего IT проекта с помощью наших удобных инструментов.
                            Мы предлагаем решения, которые помогут вам повысить качество работы ваших проектов и снизить риски, связанные с разработкой.
                            Создайте свою команду
                            Если у вас есть команда, которая может разрабатывать свои проекты, и вы хотите найти подходящего кандидата, чтобы стать частью вашей команды, вы можете воспользоваться нашими инструментами для поиска кандидатов.
                            Для этого вам необходимо создать профиль команды и загрузить список требований к кандидатам.</p>
                   </div>
                    </div>
                </div>

                <div className='mt-24 md:flex'>
                <div data-aos="fade-left" className='flex-col w-96 md:w-1/2 justify-end'>
                        <div className='justify-end text-end '>
                        <p className='font-bold text-3xl w-80 bg-[#F1DF6F] text-end p-2 rounded-2xl'>Зачем вам  Кандидат</p>
                        </div>
                   <div className=''>
                   <p  className='bg-white mr-12 p-5 my-4 rounded-xl font-bold text-xl'> это человек, который способен понять, что нужно заказчику, найти решение его проблем и предложить свое, а также способен убедить заказчика в своей правоте.
Для этого ему нужно иметь опыт разработки, знать, как она устроена, и уметь объяснить ее суть.
А также он должен обладать некоторыми навыками работы с клиентами.
В первую очередь, это умение слушать.
Чтобы понять заказчика, нужно слушать, о чем он говорит, понимать его проблемы и проблемы его компании, чтобы потом предлагать решения.</p>
                   </div>
                    </div>

                    <Image className='mr-28' src="/assets/Form.svg" alt="/"  width={500} height={500} />
                </div>

            </div>
            <Footer/>
        </div>
     );
}

export default AbotService;