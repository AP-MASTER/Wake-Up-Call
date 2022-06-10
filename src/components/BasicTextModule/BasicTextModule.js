import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = ({ title, content, link, linkText, subcontent, author }) => {
  return (
    <BasicTextModuleStyles className="section">
      <div className="container container__tight">
        <div>
          {title && <h2>{title}</h2>}
          {content && <p style={{ marginBottom: "60px", fontSize: "2rem"}}>{content} </p>}
          {subcontent && <p style={{ marginBottom: "60px", fontSize: "4rem"}}>"{subcontent}" </p>}
          {author && <p style={{ leftMargin: "20wh",fontStyle: "italic", marginBottom: "60px", fontSize: "3rem"}}>- {author} </p>}
        </div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
