import "../styles/Home.css";

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Level up with the largest AI & ML community</h1>
                <p>
                    Join over 27M+ machine learners to share, stress test, and stay
                    up-to-date on all the latest ML techniques and technologies.
                    Discover a huge repository of community-published models, data &
                    code for your next project.
                </p>
                <div className="hero-buttons">
                    <button className="google-btn">
                        <img
                            src="https://www.kaggle.com/static/images/icons/google-icon.svg"
                            alt=""
                        />
                        Register with Google
                    </button>
                    <button className="email-btn">Register with Email</button>
                </div>
            </div>

            <div className="hero-image">
                <img
                    src="https://www.kaggle.com/static/images/homepage/hero-illustration.svg"
                    alt="Kaggle illustration"
                />
            </div>
        </section>
    );
}
