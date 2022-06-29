import './Footer.scss'
import { TwitterOutlined, GithubOutlined, LinkedinOutlined, SkypeOutlined } from "@ant-design/icons";



const Footer = ({ info, copy, links }) => {

  const listLinks = links.map((link, indice) => { return (<a key={indice} href="">{link}</a>) })

  return (
    <div className='footer'>
      <div className="contentInfo">
        <div className="info">
          <span>{info}. </span>
          <span>{copy}</span>
        </div>
        <div className="social">
          <a href="http://"><TwitterOutlined className='svg' /></a>
          <a href="http://"><SkypeOutlined className='svg' /></a>
          <a href="https://www.linkedin.com/in/vanesa-b-a59b6a230/"><LinkedinOutlined className='svg' /></a>
          <a href="https://github.com/vaneebg"><GithubOutlined className='svg' /></a>
        </div>
      </div>
      <div className="links">
        {listLinks}
      </div>
    </div>
  )
}

export default Footer