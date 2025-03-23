import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Ensure to create a CSS file for styles

const ImageSlider = () => {
  const images = [
    'https://media-hosting.imagekit.io//b269f430e12b44a9/weddingpic5.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=v6JF2ymRg7LNEDRApJCAH9qClhA2FD-4vs0jrtGvrOoV0W0OnbBsKH3E1rWtdlIlYKVGe~42VrJblMUdemBtKd7LeAiHs2IbjwXEp8fS5tDFSOjV0Ga9RVgb~y2n36f4WoPT65~WZVSwk1EfzcUqvQWPklZWdIL1sbmPB593Vwh8Bj11bS8Ip1ho~3OZMtXt3cpHpF9k-BS4kYyaaoiZ-rXS5H8xE9~lsJm7gaNbeUmLogRpRlYVIJbPiyEqSmaZ81fVAsv4TjkmaMq-zZ6FaG1x1YeMtTFHcCSnyPV6U13RzIwdw93auH6Rs~anvocEpbI-vP-D2wnmu-IdLhsPRw__',
    'https://media-hosting.imagekit.io//2d8ec575d8e24f8c/weddingpic4.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xzJmOJZcJDTlieOCf-E6oCjxoGmLVS8oUVH15pTRikqMmxfH72PGAlm1iUWQiuBcokRNcbeZ8JfqZjHma9PfIkqeyUSZAG-hlW6Plb8S-en1X8kUp~yVMuWFyhsvYOfY0yK2ZM-6EICLbaNneshztjNNnL2Q3-iApw45xFU9ZMXSqRnGDMMSwsxd-1RwXRqh8iRbgBdNpbb5jrzVkbK~CTLotA30GAFeM4Ey-mQ1yIZ9oIv79fcnxOMSj8uKb8APYKKw1Eo0ok2v8Uo8WROrU4DheZLsqOc0mUApN2Q1acZbbs1v5S83gLnG0-q2PgW8H4zGanWS4R36WWLLi8Wm~w__',
    'https://media-hosting.imagekit.io//bcbc2299f3834325/weddingpic3.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DSoKJSMEw4VoNKnqMDe1nIh2lrY~M71Hnz1rwS73nuzRwTWun3nQcBo4UfQncFJCsSQpBrEZTahmSG7486bO9f4cMiIBTmxOHvUIwWalgapO~DtC5Yccra73STtQ-kR~dv-9XLUgqNU5Esj~8VuHm00lf2C9txF3shnEBwcJqFRMO2~UR9a-1G09eWsmX0rJfXacxTEs04chhY5gCwcB34BLzjeIarpBYRgVhJ8wuBRdiE2BS5bElwyVFudVPX7HcLKwOt6~xSaR-bJp5q73g6HR95wRIVX7xFzHaCTQAyA0NFSP1oRruOuvA6EDBq6fk46Ug~PPTGuj3kZF8HNNKA__',
    'https://media-hosting.imagekit.io//9be2bb1a1c104340/weddingpic2.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ovZM5c7d7P4mZD33JAQW4xxL2CHWoeNWPmz8B~bcBAaNbhzNQ-Ib9ex1-UrNugazZbv1Tg6phOzpKFQvAsMzvZNc~JC9JpCSbZGQt63y2coTBkqhKpxJrgW14i0lYiQaMnU-xfA9DeKz4YtkO7ejUe2F-c31AIfUAjQ5TughbGUJ8LS0rVyKzyz5pnWLCYOZ9CplMhQ6zjYEmDFUaTR7ANY8kpxPht0WEXPFwton7s00QW8avUNaayeR2rccq38fWHtGURNepLbjyCB24duArfZWMoUeB~~MhC4FbhIOR9VMOfgWEb8YCo~XN--cBbjGHoDMsaJddoStsZ0rCdQdKg__',
    'https://media-hosting.imagekit.io//5693d5f57b1f4cf5/weddingpic1.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BfBKNsyfR9Yaz0XaCLf2tHPwKNUPjUwfP4oQfowKo3DfviDDUKMqohAG1EDX~5R4Xg1X3tLB5prJxnNLPQC-G3KiA9znBnSgWQyDfMQz0ifCunCsw24xNFhhMu6a~GOraNHjTYadK8uQxGGMHW5Lrcm-WG4VFaiNiUJ1797pZe~k3qujyRpCQcBwZYeBlPTbaX8Dqi3KuCQp2NNT52f-bIdEe~TtY5lVSWK~Ysm~727jY2~CZRKn5a08JHL-I-KCFtHigV33vOlexSKF~y9wR7X~l1LahyRQgjGKQYG4JVonx~J1GdWzk5TD4wvKNBA8nPjmTea-OeYTl-JmlD8rFg__',
  ];

  // Initialize the current index state to start each slider with different images
  const [currentIndex, setCurrentIndex] = useState([0, 1, 2, 3, 4]);

  // Auto slide every 3 seconds for each slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex.map((index) => (index + 1) % images.length)
      );
    }, 1500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to go to the next image for a specific slider
  const nextSlide = (sliderIndex) => {
    setCurrentIndex((prevIndex) => {
      const updatedIndex = [...prevIndex];
      updatedIndex[sliderIndex] = (updatedIndex[sliderIndex] + 1) % images.length;
      return updatedIndex;
    });
  };

  // Function to go to the previous image for a specific slider
  const prevSlide = (sliderIndex) => {
    setCurrentIndex((prevIndex) => {
      const updatedIndex = [...prevIndex];
      updatedIndex[sliderIndex] = (updatedIndex[sliderIndex] - 1 + images.length) % images.length;
      return updatedIndex;
    });
  };

  return (
    <div className="gridimg">
      {/* Slider 1 */}
      <div className="slider">
        <img src={images[currentIndex[0]]} alt={`Slide ${currentIndex[0] + 1}`} />
      </div>

      {/* Slider 2 */}
      <div className="slider1">
        <img src={images[currentIndex[1]]} alt={`Slide ${currentIndex[1] + 1}`} />
      </div>

      {/* Slider 3 */}
      <div className="slider2">
        <img src={images[currentIndex[2]]} alt={`Slide ${currentIndex[2] + 1}`} />
      </div>

      {/* Slider 4 */}
      <div className="slider3">
        <img src={images[currentIndex[3]]} alt={`Slide ${currentIndex[3] + 1}`} />
      </div>

      {/* Slider 5 */}
      <div className="slider4">
        <img src={images[currentIndex[4]]} alt={`Slide ${currentIndex[4] + 1}`} />
      </div>
    </div>
  );
};

export default ImageSlider;
