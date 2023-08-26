const AddWalletModal = ({closeModal, isModalOpen}) => {

    return (
        <section className={`${isModalOpen ? "addWallet-modal" : "addWallet-modal hide"}`} style={{position: "fixed", backgroundColor: "white", padding: "20px", zIndex: "10", height: "100vh", width: "30%", top: "0px", right: "0px", boxShadow: "1px 1px 2px 1px gray"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h2>Add New Wallet</h2>
                <button onClick={() => closeModal()} className="closeModal-btn" style={{border: "none"}}>X</button>
            </div>
            <p>The crypto wallet will be created instantly ad be available in your list of wallets.</p>
            <label htmlFor="wallet-type">Select wallet</label>
            <label>
            <select name="wallet" id="">
                <option value="Bitcoin">Bitcoin</option>
                <option value="Litecoin">Litecoin</option>
                <option value="Etherium">Etherium</option>
                <option value="Pi Coin">Pi Coin</option>
                <option value="DogeCoin">DogeCoin</option>
            </select>
            </label>
            <button>Create wallet</button>
        </section>  
    )
}

export default AddWalletModal;