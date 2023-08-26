import Logo from "./images/logo.png"

const Header = () => {
    return (
      <div className="header" style={{position: "relative", boxShadow: " 0px 0.5px 5px rgba(0, 0, 0, 0.1)", width: "100%", display: "flex", flexDirection: "inline", justifyContent: "space-between", padding: "10px, 10%"}}>
        <figure ><img style={{width: "100%", marginLeft: "100%", height: "100%"}} src={Logo} alt="Busha logo" /></figure>
        <span className="profile" style={{display: "flex", flexDirection: "inline", width: "20%"}}>
          <span style={{borderRadius: "50%", backgroundColor: "#9AA5B1", display: "flex", alignItems: "center", height: "15%", padding: "10px"}}>A</span>
          <span style={{color: "#3e4c59"}}>Ajibola Obiwole</span>
        </span>
      </div>
    )
  }


export default Header;