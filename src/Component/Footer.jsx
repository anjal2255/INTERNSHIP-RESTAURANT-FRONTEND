import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Box, Container, Typography, styled } from '@mui/material';


const Footer  = () => {
    const CustomContainer = styled(Container)(({theme})=>({
        marginTop:"0px",
        display:"flex",
        justifyContent:"space-around",
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            textAlign:"right",
        },
    }));

    const IconBox = styled(Box)(({theme})=>({
        display:"flex",
        alignItems:"center",
        gap:"1rem",
        [theme.breakpoints.down("sm")]:{
            justifyContent:"center",
        },
    }));
      

    const FooterLink = styled("span")(({theme})=>({
      fontSize:"6px",
      color:"#000066",
      fontWeight:"100",
      cursor:"pointer",
      "&:hover":{
        color:"#6682FF",
      },
    }));
    
  return (
    <Box sx={{py:1, backgroundColor:"pink"}}>
        <CustomContainer>

            {/* <Box>
                <Typography
                      sx={{
                        fontSize:"20px",
                        color:"#1C1C1D",
                        fontWeight:"700",
                        mb:1,
                      }}
                    >
                        featured  
                </Typography>
                <FooterLink>Guides</FooterLink>
                <br />
                <FooterLink>Services</FooterLink>
                <br />
                <FooterLink>Delivery</FooterLink>
            </Box>

            <Box>
                <Typography
                      sx={{
                        fontSize:"20px",
                        color:"#1C1C1D",
                        fontWeight:"700",
                        mb:2,
                      }}
                    >
                        OverView 
                </Typography>
                <FooterLink>Location</FooterLink>
                <br />
                <FooterLink>Partnerships</FooterLink>
                <br />
                <FooterLink>Terms of use & privacy Policies</FooterLink>
            </Box> */}

            <Box>
                <Typography
                      sx={{
                        fontSize:"20px",
                        color:"#1C1C1D",
                        fontWeight:"700",
                        mb:2,
                      }}
                    >
                    contact us
                </Typography>
                
                <Typography
                      sx={{
                        fontSize:"15px",
                        color:"#1C1C1D",
                        fontWeight:"700",
                        mb:2,
                      }}
                    >
                        +91 7532860000    <br />
                        redstiletto@gmail.com
                        {/* Keep in touch with our social media pages. */}
                </Typography>

                <IconBox>
                    {/* <img src={fbIcon} alt="fbIcon" styled={{curcor:"pointer"}}/>
                    <img 
                       src={twitterIcon}
                       alt="twitterIcon"
                       style={{curcor:"pointer"}}
                    />
                    <img 
                       src={linkedinIcon}
                       alt="linkedinIcon"
                       style={{curcor:"pointer"}}
                    /> */}
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                    <WhatsAppIcon/>
                </IconBox>
            </Box>
        </CustomContainer>
    </Box>
  )
}

export default Footer