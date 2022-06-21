import './Footer.scss'


const Footer=({info,copy,links})=>{

    const listLinks=links.map((link,indice)=>{return(<a key={indice} href="">{link}</a>)})
    
    return (
  <div className='footer'>
    <div className="contentInfo">
      <div className="info">
        <span>{info}. </span>
        <span>{copy}</span>
      </div>
      <div className="social">
          <a href="http://">Link</a>
          <a href="http://">Link2</a>
          <a href="https://www.linkedin.com/in/vanesa-b-a59b6a230/">Link3</a>
          <a href="http://">link4</a>
          <a href="https://github.com/vaneebg">link5</a>
      </div>
    </div>
    <div className="links">
     {listLinks}
     </div>
  </div>
    )
  }
  
  export default Footer