import "./Home.css"; // Import the CSS file for styling
import React, { useState } from "react";
import "./Faq.css";
import ImageSlider from "./ImageSlider";

const Home = () => {
  const items = [
    {
      title: "What types of events do you organize ?",
      content: "At Blissful Occasions, we specialize in organizing a wide range of events, including weddings, corporate events, birthday parties, anniversaries, and more. Whether it's an intimate gathering or a large-scale celebration",
    },
    {
      title: "Can you handle destination events ?",
      content: "Yes, we specialize in handling destination events, offering seamless and unforgettable experiences no matter where your celebration takes you. From stunning venues to local cultural touches",
    },
    {
      title: "How do you ensure the quality of your services?",
      content: "We guarantee top-notch service by blending creativity, precision, and trusted partnerships. Our team is dedicated to delivering flawless experiences, constantly refining our approach to exceed every expectation.",
    },
    {
      title:
        " How can I get started with planning my event with Blissful Occasions?",
      content: "Getting started with Blissful Occasions is easy! Simply reach out to us through our website or contact us directly to schedule an initial consultation.",
    },
    {
      title: "What is your pricing structure ?",
      content: "Our pricing is customized based on your event’s needs and scope. We’ll provide a detailed cost breakdown during the consultation to ensure it fits your budget while delivering top-quality service.",
    },
  ];

  // State to toggle content visibility
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle content visibility
  const toggleContent = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the content if clicked again
    } else {
      setActiveIndex(index); // Open the content
    }
  };

  return (
    <div className="home-Full">
      {/* Hero Section - Large Image at the Top */}

      <div className="homehero">
        <a href="/Footer" className="hero-button">
        </a>
      </div>

      {/* Content Section */}
      <div className="home-container">
        {/* Grid Container */}
        <div className="headbl1">
          {/* Left Section: Heading, Paragraph, and Button */}
          <div className="left-section">
            <h2 className="grid-heading">
              WHY SHOULD YOU CHOOSE <b> US</b> ?
            </h2>
            <p className="grid-paragraph">
              Choosing <b> Blissful Occasions</b> ensures an exceptional event
              Management experience. Our team brings unmatched expertise and
              creativity, turning your vision into reality with meticulous
              attention to detail. We offer personalized planning tailored to
              your unique needs and preferences, ensuring every event is a true
              reflection of your style. Our budget-friendly packages provide
              outstanding value without compromising on quality, allowing you to
              host memorable occasions within your budget
            </p>
            <a href="/about">
              <button className="view-button">VIEW MORE</button>
            </a>
          </div>

          {/* Right Section: Image Boxes and Center Circle */}
          <div className="right-section">
            <div className="headlbimgs">
              <img src="https://media-hosting.imagekit.io//59a1e0d9c4f74df1/gridimg.png?Expires=1837316590&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UsXVvBDGSkRYKqBchh96h9NnHQkkBxrlh5KLK1Xcsw4vmn7ws03rPF9AWaM9wtOdc3v5uxqSN9Sfd0JioUXikGldPQz5CgVsx8rQqJdHCye7xHaBhqKbNbKjykrZdADotN9zQAYNBsH94fcsbDN8JEGs8lOuyN5oMuRDbcV-6PG8ashsxdUIERpG6M6HlQtBviLCQSsB2Uv6RJPlZUYWOVJfqznjgbevWnu0G8-J6nzkCE0v2uYsZyEaq4Ho41ScgWrVe-SebJn4e8UseJhPO81MDyAnENYRwSS29Olw-taumEEWAmjrZ9cfk3m~XDR~yARQJiAEF4VbxHQULwUw3A__" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Additional sections can go here */}
      <div className="hprojs">
        <h2 className="headingproj">SUCCESSFULLY COMPLETED 1000+ PROJECTS</h2>
        <div className="headingprojb">
          <div className="headingprojb1">
            <img
              src="https://media-hosting.imagekit.io//b525641d16d4473e/png1.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ttb4147paqpqiV7Fty2bhWyxowYj~k~-iyLJdURTS2Ob4FXrUuzCb5MX0ln1C2EPj1DdV~1wzcRsHDunnQIJgkzJ7KQOS1r7zkegcoTw4q3nRwtYRGD9wxr8aJuASPK3YKBAMymVIamGSlVm0VxACMuPQ4bJj5YdOZtyeuriKWmrQDfOWb4wAgBW55hveGrVoCS15YCQPoQTceH6tOooi8U22tGWqqgEbEaB-nLJSU9t2jUllwJ2pAcbV0iRkquRGl6MCWSYfyHCIE56aE5MQOQ-7n-hO~OpqtwnJIQhbzgOUMpfgvF9qeyoWw~b28Vn-hbykTPJP1igmivqxHkxsQ__"
              alt="Image 1"
              className="headingprojb1img"
            />
            <p className="grid-item-name">
              <br />
              Corporate Events
            </p>
          </div>
          <div className="headingprojb1">
            <img
              src="https://media-hosting.imagekit.io//4b1dc287904a4eb6/png2.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=njzFiH6mzqpRoV5QSDbVwBStX0uU0MClzNXSpjMU89Y8TCuqdaWN-cMAaSpoE35wEhiZ-CnUBJskf9o-Vxyapbc39Ck~AAXC9drki8cGg7ELof464JCsb2~7igTdlQ1DlDwg00akczxX9uTsUunLHLsihR4BQIjyPWm2RG3gKygY1tVVYjH47ddLHrqtQojM5EWZsLp1h2eZPF3FC-NDd~5BDe6HvKhTOIZHJ1FIPdQtUHukn9Aeu9sG4hR3-q4zWukovuGU5xsyvoA2uga-ZnvY9dR40BSMHNT5YXMXVfPFbJH0Zid8AKO2KLEQ1norQkXbAeUbxg0D7eUJpV-NEg__"
              alt="Image 2"
              className="headingprojb1img"
            />
            <p className="grid-item-name">Wedding Events</p>
          </div>
          <div className="headingprojb1">
            <img
              src="https://media-hosting.imagekit.io//90d349dd23d049be/png3.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rasM6F9DyC1e0WRuTJloLIpQtqCj840W-twp2ogK5lrq~1Wp3T1wx98qD-avOmLfvEEKvNNxBpTnQtqCe3DB0XSGR0vwZodt8gYK7zzH73jmKYNQuZbJhiD7Gh7XSJpWq35TCLfYm1wd1YfH9EBOjW7wchS1Zm4-cRklMBAtmn7-qupFvgHg72AxOZEDub2pnhPuEzPcvZsy5GGa7WG3Z7WPFXndzm1hKjYxHFYmvLDxKylxuNtDDpA2Qf7Drvk5m-WF7~TANNKlBywjN7vtKi~LRwLIpQkd4pdUYdZE5-spaSZVtwuT8xvHYUSEOtmDKpR-HomZcYy0QJlv3-vaFw__"
              alt="Image 3"
              className="headingprojb1img"
            />
            <p className="grid-item-name">Outdoor Events</p>
          </div>
          <div className="headingprojb1">
            <img
              src="https://media-hosting.imagekit.io//58714d777ce44105/png4.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W1ymkA-pUhdjyLV-R1AJcQIlwoJT-i5c5SBjSXYCZ1e4W1ifkcsfyr68UjXVL5F1N~FNEFtwYJvET3WixyLHWV0Gu0DgZKLh6PeUjIE~NXs6wji-uQAeJ-R6DoNlIM1lKi1NOhBVcstTMcSO4Vgv0n4SQYDEiECOa0co5hvLzoo3NeHcQxXySiuLjU9s-U-sMakNFi5fR1m5HStoAnWIQ2jMqjOuDSfjHu70prFVS4sYMHZDCUpTXTLK9n4zgzTDoO08S7oCyUnaM132bEbzTy63WktvgLTbnB0WQOC4ApbVgSEI1ipoTPPoafPxNkaASONH38L0VOiK7g23woBqhg__"
              alt="Image 4"
              className="headingprojb1img"
            />
            <p className="grid-item-name">
              <br />
              Collaboration
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="custom-grid-section">
        <div className="heading-container">
          <h2 className="section-heading">Explore our Services</h2>
          <br />
          <br />
          <br />
          <a href="/services">
            <button className="header-button">More Services</button>
          </a>
        </div>
        <div className="cards-container">
          <div className="product-card1" >
            <div className="card-content">
              <h2 className="card-title">PHOTOGRAPHY</h2>
              <div className="card-description">
                <p>A powerful magic—the ability to capture and preserve memories</p>
              </div>
              <div className="card-actions">
               <a href="/Contact"> <button className="book-now">BOOK NOW </button></a>
               <a href="/Services"> <button className="view-more">More Like This → </button></a>
              </div>
            </div>
          </div>
          <div className="product-card2" >
            <div className="card-content">
              <h2 className="card-title">VIDEOGRAPHY</h2>
              <div className="card-description">
                <p>we specialize in capturing the essence of Captivating Videos </p>
              </div>
              <div className="card-actions">
              <a href="/Contact"> <button className="book-now">BOOK NOW </button></a>
              <a href="/Services"> <button className="view-more">More Like This → </button></a>
              </div>
            </div>
          </div>
          <div className="product-card3" >
            <div className="card-content">
              <h2 className="card-title">DECORATION</h2>
              <div className="card-description">
                <p>Transforming spaces
                with elegance and creativity</p>
              </div>
              <div className="card-actions">
              <a href="/Contact"> <button className="book-now">BOOK NOW </button></a>
              <a href="/Services"> <button className="view-more">More Like This → </button></a>
              </div>
            </div>
          </div>
        </div>







      </div>
      <hr />
      <h1 className="headin-m">Our Past Work</h1>
      <div>
        <ImageSlider />
      </div>

      <hr />
      <h1 className="heading">Let our clients Speak for us</h1>
      <div className="page-container">
        {/* Heading at the top */}


        {/* Main content container */}
        <div className="main-container">
          {/* Left side (image) */}
          <div className="left-side">
            <img
              src="https://media-hosting.imagekit.io//56295751e85b4bbb/young-attractive-handsome-guy-feels-delighted-gladden-amazed-min_ccexpress%201.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PRMHBJSkkZjnGQThMFfJ5j83YjaVfJsErAmAGePTC72jF68xxg-UK7wpfzN~JRq6t8DB-DD5lCG~p3vmN5~buzXccTJ0n0MBk6eDqXDcZeW3AO6DztCQ-lZns~1I4XeV7RK7Nd5SyJS-b0SepoMCizePPVrcuqVGfFPCRoQpSE5hg2DuOyIJex67QOYm5ZHAqfTPd5Fc0WCx~IpRnP37HkgMqqzEubvHgBJlhSRY96y-Czb0PBe3O0ppN8N7it6K~UKD1Iv2yYmjS6dPLoMXAW3xTOu2uyuv2pKqHUCEEP9sCrwAgYXHhB8tFyvgmUu~vwNdcfyHswlYF0fr8AIxlQ__"
              alt="Placeholder"
              className="image"
            />
          </div>

          {/* Right side (content) */}
          <div className="right-side">
            <p>
              We entrusted Blissful Occasions with our companys annual gala, and
              they exceeded our expectations in every way. From the initial
              planning stages to the final execution, their team was
              professional, attentive, and incredibly creative. The event was
              flawlessly organized, with stunning decor and seamless
              coordination. Our guests were thoroughly impressed, and we could
              not have asked for a better experience. Thank you, Blissful
              Occasions, for making our event truly memorable!
            </p>
            <br />
            <b>VICKY</b>
            <p>HOTEL MANAGEMENT</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="grid-containerp">
        {/* Left Box (Content) */}
        <div className="left-boxp">
          <p className="contentp">
            <h2>
              <b>Secure Your Unforgettable Event Now !</b>
            </h2>
            Take the first step towards creating an unforgettable experience
            with us. <br />
            Whether its a corporate event, wedding, or a social gathering,{" "}
            <br />
            our expert team is ready to bring your vision to life
          </p>
        </div>

        {/* Right Box (Button) */}
        <div className="right-boxp">
        <a href="/contact">  <button className="buttonp">Click Me</button></a>
        </div>
      </div>
      <hr />
      <h1 className="faqh">Frequently Asked Questions</h1>
      <div className="grid-containerf">
        <div className="grid-boxf">
          {items.map((item, index) => (
            <div className="grid-itemf" key={index}>
              <div className="heading-sectionf">
                <h2>{item.title}</h2>
                <button
                  className="toggle-buttonf"
                  onClick={() => toggleContent(index)}
                >
                  +
                </button>
              </div>
              {activeIndex === index && (
                <p className="contentf">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
