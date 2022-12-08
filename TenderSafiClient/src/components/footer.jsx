import React from "react";
  

export default function Footer() {
    return (
        <section className="footer">
              <div className="footer_items">
                      <div className="social_icons">
                  
                          <a href="" ><i className="fab fa-facebook"></i> </a>
                          <a href="" ><i className="fab fa-twitter"></i></a>
                          <a href=""><i className="fab fa-instagram"></i></a>
                          
                  </div>

                 
        
                  <div className="footer_about footer_col">
                        <h1>About Us</h1>
        
                        <ul>
                            <li><a href="">Our Company</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Press</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        
                  </div>
        
                  <div className="footer_community footer_col">
                        <h1>Our Community</h1>
        
                        <ul>
                            <li><a href="">Discord</a></li>
                            <li><a href="">Telegram</a></li>
                            <li><a href="">Twitter</a></li>
                        </ul>
                  </div>
        
        
                  <div className="footer_contact footer_col">
                        <h1>Contact Us</h1>
        
                        <ul>
                            <li><a href="">Product</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">Template</a></li>
                            <li><a href="">Find Job</a></li>
                        </ul>
                        
                  </div>

              </div>
          

          <div className="policy">

            <h4> Test</h4>

              <li><a href="">Private Policy</a></li>
              <li><a href="">|Website Terms</a></li>
          
          </div>
        </section>
      );
    

}

 
/* 
    <Box>
          <h1>
            GeeksforGeeks: A Computer Science Portal for Geeks
          </h1>
          <Container>
            <Row>

           

              <Column>
                <Heading>About Us</Heading>
                <FooterLink href="#">Our Company</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#">Press Center</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </Column>
              <Column>
                <Heading>Community</Heading>
                <FooterLink href="#">Discord</FooterLink>
                <FooterLink href="#">Telegram</FooterLink>
                <FooterLink href="#">Twitter</FooterLink>
              </Column>
              <Column>
                <Heading>Contact Us</Heading>
                <FooterLink href="#">Product</FooterLink>
                <FooterLink href="#">Pricing</FooterLink>
                <FooterLink href="#">Template</FooterLink>
                <FooterLink href="#">Find a Job</FooterLink>
              </Column>
              
            </Row>
          </Container>
        </Box>


*/