import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import Weather from "../components/weather/Main"

const Index = () => {
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
          content="Presented here is a website of a demo of what Wake Up Call "
          link="/products"
        />
        <Weather/>
        
      </Layout>
    </>
  )
}

export default Index
