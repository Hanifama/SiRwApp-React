import people from '../../assets/images/people.png';
import ai from '../../assets/images/ai.png';
import './Home.css'
import { Navbarhome } from "../../components/index";

const Home = () => {
  return (
    <section className="gradient__bg">
      <Navbarhome/>

       <div className="gpt3__header section__padding" id="home">
          <div className="gpt3__header-content">
            <h1 className="gradient__text">Let&apos;s Build Something amazing with Rw</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
  
            <div className="gpt3__header-content__people">
              <img src={people} alt='photo' />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>

          <div className="gpt3__header-image">
            <img src={ai}  />
          </div>
        </div>
    </section>
   
  );
};

export default Home;
