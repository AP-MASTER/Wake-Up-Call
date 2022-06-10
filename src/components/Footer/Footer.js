import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"
import useAllProduct from "../../hooks/use-all-product"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

const Footer = () => {
  const allProduct = useAllProduct()
  const siteMeta = UseSiteMetadata()
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        
    
        {siteMeta.twitterUsername ||
        siteMeta.facebookUsername ||
        siteMeta.instagramUsername ||
        siteMeta.linkedinUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              Follow Aman Patchipulusu ( @ap3star )<span>.</span>
            </h5>
            <ul>
             
              {siteMeta.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/ap3star`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      
    </FooterStyles>
  )
}

export default Footer
