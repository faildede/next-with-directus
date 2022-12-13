import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { getCsrfToken, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";


function SignIn({ csrfToken }) {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      callbackUrl: `/user-area`,
    });
    if (res?.error) {
      setError(true);
      console.log(res);
    } else {
      router.push('/user-area');
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto my-auto">
        <div className="bg-white container mx-auto p-6 rounded-3xl w-4/5">
          <div className="text-center flex justify-center">
            <p className=" font-normal flex text-4xl">
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
          <p className="font-normal text-3xl text-center my-4">Вход</p>
          <form
            className="container mx-auto my-auto grid place-content-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="items-center">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <p className="font-normal text-lg ml-2">
                Имя <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                name="name"
                className="outline-none rounded-3xl py-2 md:pr-80 pl-2 border border-gray-300"
              />
            </div>
            <div className="items-center">
              <p className="font-normal text-lg ml-2">
                Email <span className="text-red-600">*</span>
              </p>
              <input
                type="email"
                name="email"
                className="outline-none rounded-3xl py-2 md:pr-80 pl-2 border border-gray-300"
              />
            </div>
            <div className="items-center">
              <p className="font-normal text-lg ml-2">
                Пароль <span className="text-red-600">*</span>
              </p>
              <input
                type="password"
                name="password"
                className="outline-none rounded-3xl py-2 md:pr-80 pl-2 border border-gray-300"
              />
            </div>

            {error && (
             <div class="bg-red-600 mt-6 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3" id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
             <div class="bg-red-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-red-500 rounded-t-lg">
               <p class="font-bold text-lg text-white flex items-center">
                 
                 У вас возникли некоторые проблемы</p>
             </div>
             <div class="p-3 bg-red-600 rounded-b-lg break-words text-white">
               Возможно вы ввели неправильно пароль или почту
             </div>
           </div>
          )}
            <div className="grid place-content-center my-6 mt-8">
              <button type="submit" className="text-lg rounded-3xl text-center  px-12 py-2 bg-[#F1DF6F]">
                Войти
              </button>
            </div>
          </form>
        
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default SignIn;
