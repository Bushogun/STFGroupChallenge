import { TikTokFilled, InstagramOutlined } from '@ant-design/icons';
import Layout from '../../components/Layout';
import useIsMobile from "../../hooks/useIsMobile";
import Carousel from '../../components/Carousel';
import ContainerCards from '../../components/ConatinerCardsArrivals';
import AlbumSession from '../../components/AlbumSession';
import DynamicCarousel from '../../components/DynamicCarousel';
import slider from "../../data/slider-web.json";
import arrivals from "../../data/cards-arrivals.json";
import moments from "../../data/cards-moments.json";
import albumSession from "../../data/album-session.json";
import dynamicSlides from "../../data/dynamic-slider-web.json";
import ContainerMomentsCards from '../../components/ContainerCardsMoments';
import './home.css'

function Home() {
  const isMobile = useIsMobile();
  const images = slider.slides.map(s => s.image);
  const titles = slider.slides.map(s => s.title);
  const dynamicImages = dynamicSlides.dynamicSlides.map(s => s.image);
  const dynamicTitles = dynamicSlides.dynamicSlides.map(s => s.title);
  const dynamicDescriptions = dynamicSlides.dynamicSlides.map(s => s.description);
  const albumImages = albumSession.images;
  const products = arrivals.products;
  const productsMoments = moments.products;

  return (
    <Layout>
      <section>
      <Carousel images={images} titles={titles} isMobile={isMobile}/>
      </section>
      <section className='title'>
        NEW ARRIVALS
      </section>
      <ContainerCards items={products} isMobile={isMobile}/>
      <section>
      <DynamicCarousel images={dynamicImages} titles={dynamicTitles} description={dynamicDescriptions} isMobile={isMobile}/>
      </section>
      <section className='title'>
        MOMENTS
      </section>
      <ContainerMomentsCards items={productsMoments} isMobile={isMobile}/>
      <section className='title'>
        SESSION PHOTOS
      </section>
      <AlbumSession images={albumImages} />
      <section className='title' style={{ marginBottom: '40px', display: 'flex', gap: '20px' }}>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <TikTokFilled style={{ color: '#000', fontSize: 32, cursor: "pointer" }} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined style={{ color: '#000', fontSize: 32, cursor: "pointer" }} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/facebook-new.png"
            alt="facebook-new"
            style={{ cursor: "pointer" }}
          />
        </a>
      </section>
    </Layout>
  )
}

export default Home