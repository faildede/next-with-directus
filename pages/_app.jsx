import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { SessionProvider } from 'next-auth/react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import 'tw-elements'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
        };
        use();
      }, []);
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
