import * as React from 'react';
import {Typography} from '@mui/material';
import Footer from './Footer';

// Importing Carousel component from material-ui
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './Navbar1';

export default function ActionAreaCard() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

//   return (
//     <div style={{ backgroundColor: 'black', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
//       <AppBar style={{ backgroundColor: 'black' }}>
//         <Toolbar>
//           <Button component={Link} to="/login" color="inherit" sx={{ ml: 'auto' }}>Login</Button>
          
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <div
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
          
//         </div>
//       </Drawer>
//       {/* Carousel for slideshow */}
//       <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={2000} stopOnHover>
//         <div>
//           <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
//           <img src="https://img.freepik.com/premium-photo/taste-magic-delicious-food-experiences-ai-generated-best-food-photo_1070043-7876.jpg" alt="Slide 1"  style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
//             <Typography variant="h4" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>RED STILLETTO RESTAURANT</Typography>
//           </div>
//         </div>
//         {/* Other carousel items */}
//       </Carousel>
//       <Footer />
//     </div>
//   );
// }



































  return (
    
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}><Navbar/>
      {/* Carousel for slideshow */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={2000} stopOnHover>
        <div>
          <img src="https://img.freepik.com/premium-photo/taste-magic-delicious-food-experiences-ai-generated-best-food-photo_1070043-7876.jpg" alt="Slide 1"/>
          <Typography variant="h4" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' ,fontFamily:"cursive"}}>RED STILLETTO RESTAURANT</Typography>
        </div>
        <div>
          <img src="https://www.tastingtable.com/img/gallery/17-celebrity-chefs-and-their-favorite-fast-food-restaurants/l-intro-1674674335.jpg"/>
          <Typography variant="h4" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white',fontFamily:"cursive" }}>RED STILLETTO RESTAURANT</Typography>
        </div>
        <div>
          <img src="https://img.pikbest.com/wp/202408/delicious-fast-food-displayed-on-a-textured-gray-table_9904161.jpg!bw700" alt="Slide 3" />
          <Typography variant="h4" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' ,fontFamily:"cursive"}}>RED STILLETTO RESTAURANT</Typography>
        </div>
        <div>
          <img src="https://img.freepik.com/premium-photo/beautiful-restaurant-food-black-background-generative-ai_73944-32277.jpg" alt="Slide 4" />
          <Typography variant="h4" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white',fontFamily:"cursive" }}>RED STILLETTO RESTAURANT</Typography>
          
        </div>
      </Carousel>
      <Footer />
    </div>
  );
  }