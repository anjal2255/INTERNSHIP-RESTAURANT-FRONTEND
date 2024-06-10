import * as React from 'react';
import { Typography } from '@mui/material';
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './Navbar';

export default function RestaurantHomePage() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
        <Typography variant="h2" style={{ fontFamily: "cursive" }}>Welcome to Red Stilletto Restaurant</Typography>&nbsp;&nbsp;
        <Typography variant="body1" style={{ marginTop: '20px', fontFamily: "sans-serif" }}>
          At Red Stiletto, we pride ourselves on delivering an unforgettable dining experience. 
          Our chefs meticulously craft each dish to tantalize your taste buds, while our friendly staff 
          ensure your comfort and satisfaction. Whether you're here for a casual meal or a special occasion,
          we guarantee an exquisite journey through flavors that will keep you coming back for more.
        </Typography>
      </div>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={2000} stopOnHover>
        <div>
          <img src="https://img.freepik.com/premium-photo/taste-magic-delicious-food-experiences-ai-generated-best-food-photo_1070043-7876.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://www.tastingtable.com/img/gallery/17-celebrity-chefs-and-their-favorite-fast-food-restaurants/l-intro-1674674335.jpg" />
        </div>
        <div>
          <img src="https://img.pikbest.com/wp/202408/delicious-fast-food-displayed-on-a-textured-gray-table_9904161.jpg!bw700" alt="Slide 3" />
        </div>
        <div>
          <img src="https://img.freepik.com/premium-photo/beautiful-restaurant-food-black-background-generative-ai_73944-32277.jpg" alt="Slide 4" />
        </div>
      </Carousel>
      <Footer />
    </div>
  );
}
