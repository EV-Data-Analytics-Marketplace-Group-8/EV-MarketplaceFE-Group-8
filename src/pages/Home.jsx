import HeroSection from "../components/HeroSection";
import "../styles/Home.css";

export default function Home() {
    return (
        <div className="home">
            <HeroSection />

            <section className="section light">
                <h2>New and Exciting</h2>
                <p>The latest events, big announcements, and high-priority news on Kaggle.</p>
                <div className="cards-grid">
                    <div className="card">
                        <img src="https://www.kaggle.com/static/images/homepage/ai-agents.svg" alt="" />
                        <h4>Join the 5-Day AI Agents Intensive</h4>
                        <p>A no-cost course designed to help you build and deploy AI agents.</p>
                    </div>
                    <div className="card">
                        <img src="https://www.kaggle.com/static/images/homepage/openai-challenge.svg" alt="" />
                        <h4>OpenAI to Z Challenge Finalists</h4>
                        <p>Watch finalists discuss their winning projects.</p>
                    </div>
                    <div className="card">
                        <img src="https://www.kaggle.com/static/images/homepage/chess-benchmark.svg" alt="" />
                        <h4>Adding Chess Openings to Game Benchmarks</h4>
                        <p>Evaluate reasoning beyond memorization.</p>
                    </div>
                </div>
            </section>

            <section className="section white datasets">
                <div className="text-block">
                    <h2>Tackle your next project with Kaggle</h2>
                    <p>
                        On Kaggle you'll find all the resources and knowledge needed for
                        your next real-world ML project.
                    </p>
                    <div className="stats">
                        <div><strong>552K</strong><span>DATASETS</span></div>
                        <div><strong>1.5M</strong><span>NOTEBOOKS</span></div>
                        <div><strong>31,400</strong><span>MODELS</span></div>
                    </div>
                </div>
                <img
                    src="https://www.kaggle.com/static/images/homepage/datasets-illustration.svg"
                    alt=""
                    className="datasets-img"
                />
            </section>

            <section className="section light models">
                <h2>Models</h2>
                <div className="cards-grid">
                    <div className="card"><h4>Gemma</h4><p>Google’s open lightweight models.</p></div>
                    <div className="card"><h4>Keras Gemma</h4><p>Implementation of the Gemma model.</p></div>
                    <div className="card"><h4>DeepSeek R1</h4><p>Our first-generation reasoning models.</p></div>
                    <div className="card"><h4>Llama 2</h4><p>Meta’s fine-tuned generative text model.</p></div>
                </div>
            </section>

            <section className="section white competitions">
                <h2>Competitions</h2>
                <div className="cards-grid">
                    <div className="card"><h4>ARC Prize 2025</h4><p>$1,000,000 - Create an AI capable of reasoning.</p></div>
                    <div className="card"><h4>Hull Tactical - Market Prediction</h4><p>$100,000 - Predict market patterns.</p></div>
                    <div className="card"><h4>Recod.ai/LUC Challenge</h4><p>$55,000 - Develop scientific ML methods.</p></div>
                </div>
            </section>

            <section className="section light courses">
                <h2>Courses</h2>
                <div className="cards-grid">
                    <div className="card"><h4>Intro to Programming</h4><p>5 hours to complete — Python basics.</p></div>
                    <div className="card"><h4>Python</h4><p>Learn the most important language for ML.</p></div>
                    <div className="card"><h4>Intro to Machine Learning</h4><p>3 hours to complete — your first models.</p></div>
                    <div className="card"><h4>Pandas</h4><p>Learn to manipulate and analyze data.</p></div>
                </div>
            </section>

            <section className="section white community">
                <h2>Build your ML skills in a supportive and helpful community</h2>
                <p>
                    Kaggle’s community is a diverse group of 27 million data scientists,
                    ML engineers, and enthusiasts from around the world.
                </p>
                <img
                    src="https://www.kaggle.com/static/images/homepage/community-illustration.svg"
                    alt=""
                    className="community-img"
                />
            </section>

        </div>
    );
}
