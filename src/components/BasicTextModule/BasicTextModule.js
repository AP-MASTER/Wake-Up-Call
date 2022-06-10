import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = ({ title, content, link, linkText }) => {
  return (
    <BasicTextModuleStyles className="section">
      <div className="container container__tight">
        <div>
          {title && <h2>{title}</h2>}
          {content && <p style={{ marginBottom: "60px", fontSize: "2rem"}}>{content} <i><b>could</b></i> be</p>}
        </div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
