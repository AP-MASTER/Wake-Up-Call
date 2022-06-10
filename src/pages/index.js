import * as React from "react"
import {useState, useEffect} from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import Weather from "../components/weather/Main"
import Nasa from "../components/Nasa"
import { StaticImage } from "gatsby-plugin-image"
import LatestPosts from "../components/Post/LatestPosts"


const Index = () => {



  const [quotes, setQuote] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuote(data[randomNum]);
    });
  };

  useEffect(() => {
    getQuote();
  }, []);
  

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Good Morning"
          subTitle="Time for a Wake Up Call"
        />
        <BasicTextModule
          title="Everyone needs a little headstart"
          content="Presented here is a website of a demo of what Wake Up Call could be. Here's a quote to start off your day:"
          subcontent={quotes.text}
          author={quotes.author}
          link="/products"
        />

        <Weather/>
<div className = "nasa">
        <img className = "image" src="https://apod.nasa.gov/apod/image/2206/Arp286-202203-CDK24-FLIPL9000-LRGB_NicolasROLLAND_signature_LD1024.jpg" />
        <h3 className = "imageText">And Finally, Here is the NASA Astronomy Daily Photo</h3>
</div>
      </Layout>
    </>
  )
}

export default Index
