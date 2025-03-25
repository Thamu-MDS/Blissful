import "./Service.css"; // Import the CSS file for styling
const Service = () => {
  return (
    <>
      <div className="home-container">
        {/* Hero Section - Large Image at the Top */}
        <div className="hero">
          <img
            src="https://media-hosting.imagekit.io//f9015d12f27d45f6/servicespage.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0bCkAR0eE4OHIVVVfzJg25mxCUVwYnVfNMiPmbPe68nnmMH8CbVpua7aBWTtAbzqPr6wk06bTDyS~FzV8WOZnjJ33X2Hp3RkRBEc-~QHk9yG2Itb-D2v-1nwLrzyQqX2zfwldnqmFTV1Pzd-cnMZH8PEzNQmwIQUEGJIiJSmb64ZxtUIZ-1LEKLyEIZuNgTye-g6fi-8r361DIl7Hqd2y3r9w7yPguGouudT1INrBSi4lXdnKYaIQEK2p3YFWHFA9LzWDgYCZ1tRCiN6DGIHniZFPpC06SvC94EZRr72FBmIjLMZXPAUpzcEXqp8pgWssg-oc9grUUadVp2jx5s49Q__"
            alt="Hero"
            className="hero-image"
          />
          <div className="hero-content">
            <div className="">
              <h1>
                <span className="black-text">Explore our</span>
                <span className="yellow-text">Services</span>
              </h1>
            </div>
            <p>crafting unforgettable experiences</p>
          </div>
        </div>
      </div>
      <section className="service-alin">
        {/* Additional sections can go here */}
        <div className="container1">
          <div className="left-img1">
            <img
              src="https://media-hosting.imagekit.io//daed08bb29534843/cam.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iOakl8krrNy3cwvKHWDLsIadLw5SmEltAzJzBAl3IiwGaYmCuDZ-Z6NdNcVhrUkE2JHC2IRibi-NwidoYk0fNiV9lhD~jFWKyTYpfGU1QTUxpJK4ebS-X9d5ziEZ96jM7E2FwrRdeimm3w3mzK~4p1hkxG-8SY4hzz66faMN3ecKB7bLrLu3ImchZLLWJw8SdPbpGwdw4GbMxwfkYDtz7MjfNBU~sYOplNNPXfoi4RMzGQmdH3RV8lTkP2-r1YLUC52XZtp3eUtjuJKfFLx7vYGv8lmnFdiVYAey3PKTFU4-d~xFmSOQmrChcL-s3puAL8htEv6Cc3yBP7NM~pb~qQ__"
              alt="Service Image" className="service-imgt"
            />
          </div>
          <div className="right-content1">
            <h1>PHOTOGRAPHY</h1>
            <p>
              Capture the Moments, Create the Memories <br />
              Our lens transforms fleeting instants into timeless treasures,
              <br />
              preserving the beauty and emotion of every scene <br />
            </p>
            <div className="buttons-container1">
              <a href="/About"><button className="know-more-btn1">KNOW MORE</button></a>
             <a href="/contact"> <button className="book-now-btn1">BOOK NOW</button></a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* Content Section */}
        <div className="container2">
          <div className="left-content2">
            <h1>VIDEOGRAPHY</h1>
            <p>
              Capture the Action, Create the Narrative – Our <br /> videography
              brings your story to life, <br /> transforming every moment into a
              cinematic <br />
              masterpiece that you will cherish forever
            </p>
            <div className="buttons-container2">
            <a href="/About"><button className="know-more-btn2">KNOW MORE</button></a>
            <a href="/contact"> <button className="book-now-btn2">BOOK NOW</button></a>
            </div>
          </div>
          <div className="right-img2">
            <img src="https://media-hosting.imagekit.io//258c658b34bf442a/boy.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1qzjEyAyXGSlp~i0~QTkz24GeYjMJLmOLKQ0EfNKPWZXmj7GaOX9wZyhJPJBkNKNPVft9-mj6s5Yzo22YbRYK0neIEBsfyOp4r8yyKuSKhFutwPW1m1RAcwYG68OCl9hAkF2-osOUxqv7R~2B0C4d0SwV0DsDZb20P5nlN3l~cl-m7zDsfB6Upt7x3E0Rx6WQP~Phg2telTFe1CHhc13AhO7rTgaGxf9gYXd94b6eWzZrx5mkC6wQHkZoJpGsp3PvfLkO4bD-50CxUhpKFT3cWTg5HutelipB8k2hqYSjrelaibRq-DYTv-UNfFjiELm86wNhtB6FOilP~tJzq9hkA__" alt="Service Image" className="service-imgt"/>
          </div>
        </div>
        <div className="divider"></div>
        {/* Additional sections can go here */}
        <div className="container3">
          <div className="left-img3">
            <img src="https://media-hosting.imagekit.io//571f65f228ed49ff/bridalpic.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VOngOPla3UMPkzOzfa5azWlahLv6X2rDYMY777O5HUAi~9hSnzLzvq0fDBuDjzzo27~f~LoxuSYlnljXLsRd626Tx~Ld6QQRQicaFKcKEfVtuch3X3hqpXoIxOWcYcGSspNdHZ7kAlKKvkvLqU3tKiX~baXVzfUKy8LLJ1s6MpdH1UW-1yLFqN9lEDuUU~PZDyqJFnW6UgTYpGMObf5RFMSnPaXPdTMCygRjR6ZRVzmVytGtWJ5mlfglyqFFN6Zra6XD-SC2a0EN4K6u4Jjl2M-pJDpjO9m2Cen47QTjuhi-OVPLeNk17e1kGfrtbOG~4aoVo474i8PEF9UwkRWBpA__" alt="Service Image"className="service-imgt" />
          </div>
          <div className="right-content3">
            <h1>BRIDAL MAKEUP</h1>
            <p>
              Radiant Beauty for Your Special Day – Our expert <br />
              bridal makeup artists ensure you look
              <br />
              breathtaking, enhancing your natural beauty with
              <br />
              a flawless touch that lasts throughout your
              <br />
              celebration
            </p>
            <div className="buttons-container3">
            <a href="/About"><button className="know-more-btn3">KNOW MORE</button></a>
            <a href="/contact"> <button className="book-now-btn3">BOOK NOW</button></a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* Content Section */}
        <div className="container4">
          <div className="left-content4">
            <h1>CORPORATE EVENTS</h1>
            <p>
              Elevate Your Corporate Gatherings – From <br />
              strategy meetings to grand celebrations, our
              <br />
              expert event planners ensure every corporate <br />
              event is seamless, sophisticated, and <br />
              impactful
            </p>
            <div className="buttons-container4">
            <a href="/About"><button className="know-more-btn4">KNOW MORE</button></a>
            <a href="/contact"> <button className="book-now-btn4">BOOK NOW</button></a>
            </div>
          </div>
          <div className="right-img4">
            <img
              src="https://media-hosting.imagekit.io//b0697153915c4765/corprationeventpic.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HMlGlq6Naw0m~bgt05FHnWPtZAJduN1M02WrKZPhWgtqQSVLXrIs~6aa38BIQhYrDc0Rv7786gIya6W2cA0FbwjRZVKLfUOPHABKKXLe6Zfbhdehh6-maqJnsv72OtEES4ZKQjqN4oNck7iXEk~RYbvAWqkZcGpP9QgXmer9hbfjtXlIR2oKhWhGbmTFd~61yFNfY9c4TVscTt3rBFKMoBXkjdBzUL9Kzt0yjqOXAdQZsror~qyppjTaIRHPA5P4OkSGFzjDU6zREGvUON~x~f9vOc574ryumwa-rR8dGEy3apZldMX7gzxoDK8P4Cd6bOpq9u8yCjDEzMeY4kjS8w__" className="service-imgt"
              alt="Service Image"
            />
          </div>
        </div>
        <div className="divider"></div>
        {/* Additional sections can go here */}
        <div className="container5">
          <div className="left-img5">
            <img src="https://media-hosting.imagekit.io//1f8a5d5a3c214bef/partyphoto.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1iF1aULfnMPHMZBlBZLzBK5jvNt8LI8L9DnbV7s9CtISahRZpbiCA7jv~i4TtejP8KKLBvVIGCfkg1D5w29enh-EJDgppo2tqtZxPU1Wsbd~lEUJDFNpVFeAXAoSpDizKKP0rJ8x0afME8uFC7CbhNWZ8V7TDW3O~caElOqS9DGNCqBWQsO8apDJuYpVQkkNAj4niTgThfndqQ7HC0ObzH735~BEV5QhXVnCHJk2fQqIm5a9ourjyQjagn8QgxuFvjG890YgkvTeHqwdtrIuxo4bwk0KweeCBmesdMT44sakjhAkN0D8LSrkVXDOkG3escWXWekdgXWD~8iAM56hcw__" alt="Service Image"  className="service-imgt"/>
          </div>
          <div className="right-content5">
            <h1>ENTERTAINMENT EVENTS</h1>
            <p>
              “Unleash the Fun”– Our entertainment events are <br />
              designed to captivate and delight, creating <br />
              unforgettable moments of joy and excitement for <br />
              every guest
            </p>
            <div className="buttons-container5">
            <a href="/About"><button className="know-more-btn5">KNOW MORE</button></a>
            <a href="/contact"> <button className="book-now-btn5">BOOK NOW</button></a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* Content Section */}
        <div className="container6">
          <div className="left-content6">
            <h1>EXHIBITIONS</h1>
            <p>
              “Showcase Your Innovation” – Our expertly <br />
              crafted exhibitions highlight your brands <br />
              brilliance, captivating audiences and creating lasting <br />
              impressions
            </p>
            <div className="buttons-container6">
            <a href="/About"><button className="know-more-btn6">KNOW MORE</button></a>
            <a href="/contact"> <button className="book-now-btn6">BOOK NOW</button></a>
            </div>
          </div>
          <div className="right-img6">
            <img src="https://media-hosting.imagekit.io//a7e6d171b8ac48aa/exhibitionpic.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Tgp9FYZJ1wT8MY46jkGPSoJAURrMB-RHziwujwkFOQAsrTm1V~ar7h~cVedYzjovRPEW5aVU45h70lz9q~xDka7J~lmZ5uULV3cZGBU406Q4RJJLNsc2k7FvLlw7N9xmm78NwFtOjBe6jVW1fHdjVbYHHekdpj6T4oC7k-pzolDbOrFze7R1W56XrRA2I7CIAcm0YxgGtEKNoTI21WknyJPFTrLEs~uglw~6prLdHmip4ZXCPAgqwqmW4X0pu~OEHwhNvjjI0n-2MkpcU9WHuMMv7ft9MXp7oawerGhdx4zybb6q4-tMcZc1aLbDJAINv4YMXwN~qXC8DJy1TlO6pg__" alt="Service Image" className="service-imgt"/>
          </div>
        </div>
        <div className="divider"></div>
        {/* Additional sections can go here */}
        <div className="container7">
          <div className="left-img7">
            <img src="https://media-hosting.imagekit.io//a868b073c98849a8/eventphotos.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KKfMmxscRoMGhFhV1GPZt3sBZaJlfIuam2mGS3UD3-DA0qyivdEmvAMQaVgVzomnK29HD6iU20oUtTyW3Zl-qDJDd2vpg7A2gGuSRXWbwRvuS8TBd3lcogxG4nPtkfpboXKlQG7TI2kOwTMXrlPyN15skpceuMgiHto7Twob0tNXMfSf7YLQCXpBX5nnaWxHwY2ljkC4-fkOSeXMsg0fBVgxwbPCNOawhUY2dLLzvPSJapq1-Gd7kg3XyT8-p7YURzFblLA4i-rUG-K6QpwZ827qikFmuOsUTyi2YOi1auI1YLavrXcSVQVcNu60SwaO-0ylYbxHzfslUM7AIMuuCg__" alt="Service Image" className="service-imgt"/>
          </div>
          <div className="right-content7">
            <h1>GOVERNMENT PROTOCOL EVENTS</h1>
            <p>
              Seamless Protocol, Distinguished Presence – <br />
              Our expertise ensures that government <br />
              protocol events are executed with precision,
              <br />
              elegance, and utmost respect for formalities
              <br />
              and traditions
            </p>
            <div className="buttons-container7">
            <a href="/About"><button className="know-more-btn7">KNOW MORE</button></a>
            <a href="/contact"> <button className="book-now-btn7">BOOK NOW</button></a>
            </div>

          </div>
        </div >
      </section>
    </>
  );
};

export default Service;