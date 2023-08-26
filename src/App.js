import React, { useCallback, useContext, useState } from "react"
import "./App.css"
import Header from "./header";
import NavBar from "./navbar";
import Data from "./wallet-data";
import AddWalletModal from "./modal";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
      setIsModalOpen(false)
      console.log(isModalOpen);
  };
  const openModal = () => {
      setIsModalOpen(true)
      console.log(isModalOpen);
  };

  const Wallets = () => {


    return (
      <section style={{postion: "relative", width: "100%", margin:"auto", paddingLeft: "5%"}}>
        <div style={{display: "flex", margin: "auto", alignItems: "center", justifyContent: "space-between"}}>
          <h1>Wallets</h1>
          <button onClick={openModal} style={{postion: "relative", padding:"5px", border: "none", backgroundColor: "white"}}><a className= "add-wallet" style={{height:"100%", width:"100%", padding: "15px", borderRadius: "10px"}}>+ Add new wallet</a></button>
        </div>
        <div><hr style={{color: "#d3d5d8"}}/></div>

        <div className="Wallets-section" style={{display: "flex", flexWrap: "wrap", flexDirection: "inline", margin: "auto"}}>
          {Data.map((wallet) => {
            const {id, name, icon, link, balance} = wallet
            return (
              <article key={id} style={{backgroundImage: "", backgroundColor: "#292929", borderRadius: "10px", margin: "20px", width: "200px", padding: "10px"}}>
                <div style={{color: "#9aa5b1", display: "flex", alignItems: "center", margin: "10px 0px"}}><img src={icon} style={{marginRight: "10px"}}></img>{name}</div>
                <div style={{color: "white", margin: "10px 0px"}}>{balance}</div>
                <div style={{position: "relative", display: "flex", flexDirection: "row-reverse", margin: "10px 0px"}}>
                  <button style={{backgroundColor: "#303030", border: "none", borderRadius: "50%", color: "white", width:"30px", padding: "5px"}}>{`>`}</button>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <div>
      <Header />
      <div style={{display: "flex", width: "80%", margin: "auto", marginTop: "5%"}}>
        <NavBar />
        <Wallets />
      </div>
      <AddWalletModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </div>
  );
}

export default App;