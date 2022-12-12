import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { useMutation } from 'react-query'
import setData from '../queries/setData'
import { createNewUser } from '../queries/Users'
import { useRouter } from 'next/router'

function SignUp() {
    const router = useRouter();
    const signUpMutation = useMutation((newUser) => {
        setData(createNewUser, {data: newUser}, '/system').then((response) => {
            console.log(response);
        });
        if (signUpMutation?.error) {
            setError(true);
            console.log(res);
          } else {
            router.push("/user-area");
          }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

       console.log( e.target.email.value);

        signUpMutation.mutate({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role:'fd2b8e91-b7b6-4e3a-9e49-964517fd0594',
            status:'active',
            provider:''
        })
    }

    return ( 
        <div>
            <Header/>
                <div className='container mx-auto my-auto'>
                   <div className='bg-white container mx-auto p-6 rounded-3xl w-4/5'>
                   <div className='text-center flex justify-center'>
                            <p className=" font-normal flex text-4xl">Лица <Image className="mx-2" src="/assets/Grou.svg" width={40} height={40}/> Кандидаты</p>
                    </div>
                    <p className='font-normal text-3xl text-center my-4'>Регистрация</p>
                    <form className='container mx-auto my-auto grid place-content-center' noValidate onSubmit={(e) => handleSubmit(e)}>
                        <div className='items-center'>
                            <p className='font-normal text-lg ml-2'>Имя <span className='text-red-600'>*</span></p>
                            <input type="text" name='name' className='outline-none rounded-3xl py-2 pr-80 pl-2 border border-gray-300' />
                        </div>
                        <div className='items-center'>
                            <p className='font-normal text-lg ml-2'>Email <span className='text-red-600'>*</span></p>
                            <input type="email" name='email' className='outline-none rounded-3xl py-2 pr-80 pl-2 border border-gray-300' />
                        </div>
                        <div className='items-center'>
                            <p className='font-normal text-lg ml-2'>Пароль <span className='text-red-600'>*</span></p>
                            <input type="password" name='password' className='outline-none rounded-3xl py-2 pr-80 pl-2 border border-gray-300' />
                        </div>
                        <div className='items-center'>
                            <p className='font-normal text-lg ml-2'>Повторите пароль <span className='text-red-600'>*</span></p>
                            <input type="password" className='outline-none rounded-3xl py-2 pr-80 pl-2 border border-gray-300' />
                        </div>
                        <div className='grid place-content-center my-6 mt-6'>
                            <button className="text-lg rounded-3xl text-center  px-12 py-2 bg-[#F1DF6F]" >Зарегистрироваться</button>
                        </div>
                    </form>

                   </div>
                </div>
            <Footer/>
        </div>
     );
}

export default SignUp;