import Header from '../components/Header';
import Footer from '../components/Footer'
import FirstBody from '../components/FirstPage/FirstBody';
import SecondBody from '../components/FirstPage/SecondBody';
import FormBody from '../components/FirstPage/FormBody';


export default function Home() {

  return (
    <div>
        <Header />
        <FirstBody />
        <SecondBody />
        <FormBody />
        <footer>
        <Footer />
        </footer>
    </div>
  )

}
