// import { useQuery } from 'react-query'
// import { getHomepageFreelancers } from '../queries/queries'
import FreelancersCard from '../components/FreelancersCard';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer'
import FirstBody from '../components/FirstPage/FirstBody';
import SecondBody from '../components/FirstPage/SecondBody';
import FormBody from '../components/FirstPage/FormBody';

export default function Home() {
  // const {  data: freelancers,  isSuccess } = useQuery("freelancers", async () => await getHomepageFreelancers());
  
  // console.log(freelancers);

  return (
    <div>
  
        <Header />
   
      <FirstBody />
      <SecondBody />
        {/* {isSuccess && freelancers.map(i => <FreelancersCard freelancer_name={i.freelancer_name} body={i.body} key={i.id} image={i.featured_image.id} category={i.freelancer_categories[0].category_name}/>)} */}
      <FormBody />
        <footer>
        <Footer />
        </footer>
    </div>
  )

}
