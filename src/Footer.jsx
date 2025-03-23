// src/components/Footer.jsx
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Row 1: Company Name & Social Media Icons */}
      <div className="footer-row">
        <div className="footer-column">
          <ul className="company-name">
            
          <li>   
          <div className="logocont">
               <div className="logoimg">
                      <img src="https://media-hosting.imagekit.io//675881fe13e54243/footerlogo.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zFlBqpsoOp~bfAiligmEX9p6RpkVSsaNhoEmxjlu2c2f-zYvMzq8digswa0hZCWiaU0rSHjFQpZlmLb~PSWQFGFjwExpg3lDmgIv8n1H57vLxZh9W~--57w5fqbGyX4xqySQyhqOb7NFr64VdKYWeIjfz~PIzaGzFrzSVgP3gNKrGr7lSAQKu2vi6h3yXL~p-W1bwuao3S3KtceyGKYk-WcwXkGv9sjn37UT3a7twnvr6JK5cDsqe24veszaiJGIo42o9mljkzJf9flj9vGi-jSO3PM371E-hGyLepZKZEtn5XsTKTAC7hz0h7-XkySu4mFXTHY-Z85NNJH~G871yg__" alt="Image description" />
                  </div>
                <div className="logohead">
               <a>Blissful Occasions</a>
                   </div>
           </div>
             
              </li> 
            </ul>
            <br />
          <div>Together, We Embrace Joyful Moments and Craft Blissful Memories</div>
          <h4><b>Follow us</b></h4>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://media-hosting.imagekit.io//576397c93e604ef7/social%203.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=f6fKcRM7uqZqK1GdsO8kp~R2wVsDBk0tV3RDWOGKAtC6e8r81H-B1S9kPIfPGgAho43~QQNkAUSRPVdWepOgONktc~RZWailVZCk8p8RR7BoMnVdCle83s-veaUlTLjO57YBzBKDEhyctYoCol-QBfjgX1U3dvR3lVl7kb671JV-OOyJsMRTv3Y-8z2vnfNbC6sGEm8a5CY8cSArXHUpjJuor0kwv7d5NJlVeflk4KOl-IxxBDsRHYJVMxZs5Ixg8aKTMVwQszDqUGHr8w1Jq8KzsisEKs4~2MUdO3mcOBZCIlzaWWhkOtBR-1vzctWhsqK3lQw0GntFsPaZEUXRCg__" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://media-hosting.imagekit.io//0af7aa29b2c74a0a/social2.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QI2vaszH3twLQrCHhzoDqnOWiRGSkdPRRDhe~orszG218CK-aradzc7dFfvo3vdPJZ5zHNJaxtYbMwWp33OBeP~f44KAuFNMdANoGQdfROKcAeR3SGC3pNZjKQssYJaHt~3JZRLOI27x2pumd9JQWZ45MbR-LfooVqVrTjKmLxfyD5Tj~CjcnPytHfC3483VgPUoWxMg3a5ICdlyVkybt~0WIsekJfBfIdGFG87VtO2HOc19wytg~Js2OlUc4Mflb3VV2bow4JCuLNxqpVffbJ5uadkZOOIfTUiUhSDvW-gCH3yZ-xdaJVAndsnvrx3vTdTLhhYtRyJVvwRZXz6ZfQ__" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://media-hosting.imagekit.io//281ee864adfe4f9a/social1.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qXeQS7sIVUhxrrhQcAYMQjuFYB8xWr5he1vD52QSc3F9QiW4iGKJOuNayuDuIlJuqxxc8yWK-BSnVKA3WOSQcBx3RH3k2GyFmRALJTqtXM2774mzZNEVlsqdqgAcVYwWzvg1dJ~abyPoaR~BufngqGhjUnMPo-XlqLWZu4PodVmf08eYEseja-2Idae8TvW5HZ03UGRHWepwkDBEy-FC29aJZA2T5j7T~bBJvnp1pAiPPUW1OC-qEqgUEg~1WBQn7CjHO5MSK8Km9OP7qEebRLo6V3TTkPOLcIBaA6bIuGUoqsTlPZWj5CmViNH9YQgP4rpR5QV92ouC1KzO9ugYZA__" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Column 2: ON OUR SITE */}
        <div className="footer-column">
          <h2>ON OUR SITE</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: RESOURCES */}
        <div className="footer-column">
          <h2>RESOURCES</h2>
          <ul>
            <li><a href="/event-planning-guides">Event Planning Guides</a></li>
            <li><a href="/upcoming-events">Upcoming Events</a></li>
            <li><a href="/media-gallery">Media Gallery</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* Column 4: CONTACT US */}
        <div className="footer-column">
          <h2>CONTACT US</h2>
          <ul>
          <li><a href="/event-planning-guides">33RD ST,GKM COLONY,CHENNAI,TAMILNADU</a></li>
            <li><a href="/upcoming-events">Upcoming Events</a></li>
            <li><a href="/media-gallery">Media Gallery</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
          <button className="contact-button">Get in Touch</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;