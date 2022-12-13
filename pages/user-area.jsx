import Header from "../components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useQuery } from 'react-query'
import { getCurrentUser } from "../queries/Users";
import Footer from "../components/Footer";
import Image from "next/image";

const fetchData = async (query, token, { variables = {} }) => {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }

    const res = await fetch('http://localhost:8055/graphql/system', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    })

    const json = await res.json()
    console.log(json);

    if (json.errors) {
        throw new Error(json.errors)
    }

    return json.data.users_me
}

function UserArea() {
    const router = useRouter()
    const {data: session, status} = useSession({
        required: false,
        onUnauthenticated() {
            router.push('/sign-in')
        }
    }) 
    
    // console.log(session);

    const { data:user, isSuccess } = useQuery( `currentUser`, async () => await fetchData(getCurrentUser, session.user.accessToken, {}), {
        enabled: status === 'authenticated'
    })


    if(status !== 'authenticated') return null

    
    return ( 
        <div>
            <Header />
                <div className="container mx-auto flex justify-between">
                    <div className="flex bg-white py-20 px-14 rounded-xl">
                    <Image className="rounded-2xl" src='/assets/default-avatar.jpg'  width={60}  height={60} />
                    <div>
                   <div  className="flex ml-4">
                   <p className="font-medium text-2xl ml-4">Здравствуйте</p>
                    <p className="ml-2 font-medium text-2xl">{ isSuccess && user.first_name }</p>
                   </div>
                   <div className="flex ml-4">
                        <div className="bg-green-500 rounded-full h-2 w-2 container my-auto ml-2"> </div>
                        <p className="ml-2 font-normal text-lg">Подписка Активна</p>
                   </div>
                    </div>
                    </div>
                    
                    <div className="flex">
                         <div className="bg-white py-4 mr-4 rounded-xl px-14">
                                <p className="font-normal text-2xl">Стоимость подписки</p>
                                <div className="flex mt-4">
                                    <p className="font-medium text-lg p-2">1 мес</p>
                                    <p className="font-normal text-2xl ml-2 rounded-xl p-2 bg-[#F1DF6F]">4 900 ₽</p>
                                </div>
                                <div className="flex mt-2">
                                    <p className="font-medium text-lg p-2">1 год</p>
                                    <p className="font-normal text-2xl ml-2 rounded-xl p-2 bg-[#F1DF6F]">49 000 ₽</p>
                                </div>
                         </div>
                         <div className="bg-white py-4 rounded-xl px-14">
                           <div className="text-[#9CA3AF] text-2xl py-4">
                                <p>Открыто контактов:</p>
                                <p>0/50</p>
                           </div>
                           <div className="text-[#9CA3AF] text-2xl py-4">
                            <p>Посмотрено кандидатов:</p>
                            <p>0/100</p>
                           </div>
                         </div> 
                    </div>
                    
                </div>
            <Footer />
        </div>
     );
}

export default UserArea;