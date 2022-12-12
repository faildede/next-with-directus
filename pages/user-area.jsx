import Header from "../components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useQuery } from 'react-query'
import { getCurrentUser } from "../queries/Users";

const fetchData = async (query, token, {variables = {}}) => {
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

    if (json.errors) {
        throw new Error(json.errors)
    }

    return json.data.users_me
}

function UserArea() {
    const router = useRouter()
    const {data: session, status} = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/sign-in')
        }
    }) 
    
    console.log(session);

    const { data:user, isSuccess } = useQuery( `currentUser`, async () => await fetchData(getCurrentUser, session.user.accessToken, {}), {
        enabled: status === 'authenticated'
    })

    if(status !== 'authenticated') return null

    return ( 
        <div>
            <Header />
            <p>Hello <span>{isSuccess && user.email}</span> </p>
        </div>
     );
}

export default UserArea;