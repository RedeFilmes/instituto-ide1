function Footer({ navigateTo }) {
    const handleNavigation = (e, path) => {
        e.preventDefault();
        navigateTo(path);
    };

    const socialLinks = {
        facebook: "https://facebook.com/institutoide",
        instagram: "https://instagram.com/institutoide",
        twitter: "https://twitter.com/institutoide",
        linkedin: "https://linkedin.com/company/institutoide",
        youtube: "https://youtube.com/c/institutoide"
    };

    const openSocialMedia = (url) => {
        try {
            window.open(url, '_blank', 'noopener,noreferrer');
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <footer className="bg-gray-800 text-white py-8" data-name="footer">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div data-name="contact-info">
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <p>Email: contato@institutoide.com</p>
                        <p>Telefone: (21) 97155-0633</p>
                    </div>
                    <div data-name="links">
                        <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
                        <ul>
                            <li>
                                <a href="#/sobre" 
                                   onClick={(e) => handleNavigation(e, '/sobre')}
                                   className="hover:text-gray-300">
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a href="#/politica-privacidade"
                                   onClick={(e) => handleNavigation(e, '/politica-privacidade')}
                                   className="hover:text-gray-300">
                                    Política de Privacidade
                                </a>
                            </li>
                            <li>
                                <a href="#/termos"
                                   onClick={(e) => handleNavigation(e, '/termos')}
                                   className="hover:text-gray-300">
                                    Termos de Uso
                                </a>
                            </li>
                        </ul>
                        <li>
                            00.000.000/0001-00
                        </li>
                    </div>
                    <div data-name="social-media">
                        <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button 
                                onClick={() => openSocialMedia(socialLinks.facebook)}
                                className="flex items-center hover:text-gray-300"
                                data-name="facebook-link"
                            >
                                <i className="fab fa-facebook mr-2"></i>
                                Facebook
                            </button>
                            <button 
                                onClick={() => openSocialMedia(socialLinks.instagram)}
                                className="flex items-center hover:text-gray-300"
                                data-name="instagram-link"
                            >
                                <i className="fab fa-instagram mr-2"></i>
                                Instagram
                            </button>
                          
                          
                            <button 
                                onClick={() => openSocialMedia(socialLinks.youtube)}
                                className="flex items-center hover:text-gray-300"
                                data-name="youtube-link"
                            >
                                <i className="fab fa-youtube mr-2"></i>
                                YouTube
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p>&copy; 2024 Instituto IDE. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
