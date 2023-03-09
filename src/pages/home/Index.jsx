import people from '../../assets/images/people.png'
import ai from '../../assets/images/ai.png'

import './Home.css'
import { Navbarhome } from "../../components/index"

const Home = () => {
  return (
    <section className="gradient__bg">
      <Navbarhome/>

       <div className="gpt3__header section__padding" id="home">
          <div className="gpt3__header-content">
            <h1 className="gradient__text">Let&apos;s GO Bergabung dengan Si Rw</h1>
            <p>Si Rw adalah Sistem Informasi berbasis web dimana pada sistem ini mengatur sebuah data yang relevan dan realtime secara waktu</p>
  
            <div className="gpt3__header-content__people">
              <img src={people} alt="" />
              <p>1,456 data terdaftar dalam 24 jam</p>
            </div>
          </div>

          <div className="gpt3__header-image">
            <img src={ai} alt="images"  />            
          </div>
        </div>
    </section>
   
  );
};

export default Home;
