import './footer.css'
const Footer = () => {
    return (
        <footer className="footer col-4">
            <div>
                <img className='social-networks' src="/imagens/fb.png" alt="Facebook"/>
                <img className='social-networks' src="/imagens/tw.png" alt="Twitter"/>
                <img className='social-networks' src="/imagens/ig.png" alt="Instagram"/>
            </div>
            <img className='pokeball' src="/imagens/pokeball.jpg" alt="pokeball"/>
        </footer>
    )
}

export default Footer;