import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { SessionProvider } from 'next-auth/react'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session} >
        <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </>
    )
}

export default MyApp
