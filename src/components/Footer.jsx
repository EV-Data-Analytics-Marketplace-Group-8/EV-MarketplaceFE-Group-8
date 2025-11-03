import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src="https://www.kaggle.com/static/images/site-logo.svg" alt="Kaggle logo" />
            </div>

            <div className="footer-cols">
                <div>
                    <h4>Product</h4>
                    <p>Competitions</p>
                    <p>Datasets</p>
                    <p>Models</p>
                    <p>Notebooks</p>
                    <p>Learn</p>
                    <p>Discussions</p>
                </div>
                <div>
                    <h4>Documentation</h4>
                    <p>Competitions</p>
                    <p>Datasets</p>
                    <p>Models</p>
                    <p>Public API</p>
                </div>
                <div>
                    <h4>Company</h4>
                    <p>Our Team</p>
                    <p>Contact Us</p>
                    <p>Host a Competition</p>
                    <p>Terms · Privacy Policy</p>
                </div>
            </div>

            <div className="footer-social">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Facebook" />
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="LinkedIn" />
                <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="X" />
            </div>
        </footer>
    );
}
