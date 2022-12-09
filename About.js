import React from 'react'

function About() {
    return (
        <div>
         
         <section className="wellcome_area clearfix" id="home">
       <div className="container h-100">
           <div className="row h-100 align-items-center">
               <div className="col-12 col-md">
                   <div className="wellcome-heading">
                       <h2>Website, Android and IOS Development</h2>
                       <h3>Triple K</h3>
                       <p>Everything You Need. To Start Selling Online Beautifully</p>
                   </div>
                   <div className="get-start-area">
                       <form action="#" method="post" className="form-inline">
                       <input type="email" className="form-control email" placeholder="Enter your email"/>
                           <input type="submit" className="submit" value="Get Started" />
                       </form>
                   </div>
               </div>
           </div></div>
           <div class="welcome-thumb wow fadeInDown loadimg" data-wow-delay="0.5s" ><img src={require('./assets/img/bg-img/welcome-img.png')}/>
       </div>
       </section>

    <section className="footer-contact-area section_padding_100 clearfix" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                 
                    <div className="section-heading">
                        <h2>Website, Android and IOS Development Company in Dindigul</h2>
                        <div className="line-shape"></div>
                    </div>
                    <div className="address-text">
                        <p>“Triple K Tech” is the leading Web Development Company in Dindigul, which can enhance your business’s online presence by introducing necessary technical elements to your business.</p>
                        <p>Nowadays, the usage of internet is growing greatly, having a strong online presence of business is very important. This is not enough having just a website; it should be user friendly and responsively.</p>
                        <p>“Triple K Tech” is the leading Web Development Company in Dindigul, which can enhance your business’s online presence by introducing necessary technical elements to your business.</p>
						<p>Nowadays, the usage of internet is growing greatly, having a strong online presence of business is very important. This is not enough having just a website; it should be user friendly and responsively.</p>
						<p>As “Triple K Tech” is the Best Web Development Company in Dindigul, caters best web development service to every client, keeping mind to fulfil the requirement and demands at the right time.</p>
						
						<ul>
						<li>Content Management systems (WordPress, Joomla, Drupal)</li>
						<li>Ecommerce Portals</li>
						<li>Customer Made ERPs</li>
						</ul>
						
						<p>And experts in languages of,</p>
						
							<ul>
						<li>PHP & PHP Frameworks</li>
						<li>HTML, CSS, javaScript, jQuery</li>
						<li>Angular JS</li>
						<li>Android</li>
						<li>IOS</li>
						<li>.NET & .NET Frameworks</li>
						</ul>
						
                    </div>
                   					
			
					<div className="single-feature1">
					<h5>What we offer:</h5>
					</div>
					<div className="address-text">
					
					
					<ul>
					<li>Value based application that opt for our business</li>
					<li>Greatly customized services that connect with your audience</li>
					<li>Improved your productivity</li>
					<li>Reduced the cost of IT Support.</li>
					</ul>

                    <p>Contact @ <a href="tel:7845798565">7845798565</a>, <a href="tes:7845798565">9445050834</a>, <a href="tel:8610568908">8610568908</a> for web application design, development, maintenance and support services at your affordable price.</p>
                    </div>
                   
					
				
                </div>
                
            </div>
        </div>
    </section>
 

	
	 


  
    <section className="our-monthly-membership section_padding_50 clearfix">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <div className="membership-description">
                        <h2>Looking for New Ideas to Grow Your Business?</h2>
                        <p>Get in touch for a free consultation!</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="get-started-button wow bounceInDown" data-wow-delay="0.5s">
                        <a href="contact-us.html">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default About