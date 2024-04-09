import React, { useRef, useEffect } from "react";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to Drone World</h1>
      <p>Your premier destination for all things drone-related.</p>
      <div className="home-content">
        <div className="video-container">
          <video className="home-video" ref={videoRef} autoPlay loop muted>
            <source src="/Video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="home-text">
          <h2>Do you like drones? We do too!</h2>
          <p>
            Welcome to Drone World, where passion meets technology, and the
            skies are the canvas for our adventures. Founded by a computer
            engineering and philosophy major at Georgia Southern University,
            Drone World is a platform dedicated to showcasing the mesmerizing
            world of drones and the limitless possibilities they offer. Whether
            you're an enthusiast, a curious newcomer, or simply intrigued by the
            fusion of innovation and philosophy, you've come to the right place.
          </p>
          <p>
            Drone World is the brainchild of a visionary mind deeply rooted in
            the realms of computer engineering and philosophy. As a student at
            Georgia Southern University, our founder recognized the
            transformative potential of drones – not just as tools of aerial
            exploration but also as catalysts for philosophical contemplation
            and reflection. Driven by a profound curiosity and a relentless
            pursuit of knowledge, Drone World aims to transcend the boundaries
            of conventional hobbies. We believe that drones are more than mere
            gadgets; they are gateways to understanding the intersection of
            technology, humanity, and the natural world. Through captivating
            visuals, insightful articles, and thought-provoking discussions,
            Drone World invites you to embark on a journey beyond the horizon.
            Join us as we explore the wonders of flight, push the limits of
            innovation, and ponder the profound questions that arise when man
            and machine take to the skies. At Drone World, the sky is not the
            limit – it's just the beginning. Welcome aboard, and let's soar to
            new heights together!
          </p>
          <Gallery layout="grid" />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
