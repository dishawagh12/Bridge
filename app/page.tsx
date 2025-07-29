import Card from '@/components/card';
import Header from '../components/header'; // ✅ capital H
import Homesection from '@/components/home';
import Footer from '@/components/footer';
export default function Home() {
  return (
    <div>
       <Header />
      <Homesection />
      <Card />
      <Footer />
    </div>
  );
}
