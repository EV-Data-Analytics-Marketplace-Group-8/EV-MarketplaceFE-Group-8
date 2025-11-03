import DashboardSidebar from "../components/Sidebar";
import DashboardHeader from "../components/Header";
import "../styles/Sidebar.css";
import "../styles/Discussions.css";

const forums = [
    {
        name: "General",
        desc: "Announcements, resources, and interesting discussions",
        lastPost: "last post 5 hours ago by Abhishek Jaiswal",
        recent: "Recent topics by Abhishek Jaiswal, Max, Risab Ridhiraj Sarangi",
        color: "#3BAFDA",
        icon: "https://cdn-icons-png.flaticon.com/512/1006/1006540.png",
        avatars: [
            "https://i.pravatar.cc/30?img=1",
            "https://i.pravatar.cc/30?img=2",
            "https://i.pravatar.cc/30?img=3",
        ],
    },
    {
        name: "Getting Started",
        desc: "The first stop for new Kagglers",
        lastPost: "last post 14 hours ago by Starry Shen",
        recent: "Recent topics by Starry Shen, Gokul S, Nisha P",
        color: "#FFD93D",
        icon: "https://cdn-icons-png.flaticon.com/512/545/545682.png",
        avatars: [
            "https://i.pravatar.cc/30?img=4",
            "https://i.pravatar.cc/30?img=5",
            "https://i.pravatar.cc/30?img=6",
        ],
    },
    {
        name: "Product Feedback",
        desc: "Tell us what you love, hate, and wish for",
        lastPost: "last post 10 hours ago by Optimistix",
        recent: "Recent topics by Optimistix, Haozhe Xu, Innat",
        color: "#FFD93D",
        icon: "https://cdn-icons-png.flaticon.com/512/1159/1159633.png",
        avatars: [
            "https://i.pravatar.cc/30?img=7",
            "https://i.pravatar.cc/30?img=8",
            "https://i.pravatar.cc/30?img=9",
        ],
    },
    {
        name: "Product Announcements",
        desc: "New product features & updates from the Kaggle Team",
        lastPost: "last post 2 months ago by Tiffany Xiang",
        recent:
            "Recent topics by Tiffany Xiang, Camille McMorrow, Myles O’Neill",
        color: "#3BAFDA",
        icon: "https://cdn-icons-png.flaticon.com/512/1041/1041885.png",
        avatars: [
            "https://i.pravatar.cc/30?img=10",
            "https://i.pravatar.cc/30?img=11",
            "https://i.pravatar.cc/30?img=12",
        ],
    },
    {
        name: "Questions & Answers",
        desc: "Technical advice from other data scientists",
        lastPost: "last post 6 hours ago by Ayush Kumar",
        recent:
            "Recent topics by Ayush Kumar, Mubeen Shehzadi, Gerard Massey",
        color: "#3BAFDA",
        icon: "https://cdn-icons-png.flaticon.com/512/1380/1380338.png",
        avatars: [
            "https://i.pravatar.cc/30?img=13",
            "https://i.pravatar.cc/30?img=14",
            "https://i.pravatar.cc/30?img=15",
        ],
    },
    {
        name: "Competition Hosting",
        desc: "Advice and support on running your own competitions",
        lastPost: "last post 11 hours ago by Mayali Late",
        recent:
            "Recent topics by Mayali Late, mignonfrances, Bexultan Sagyndyk",
        color: "#FFD93D",
        icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
        avatars: [
            "https://i.pravatar.cc/30?img=16",
            "https://i.pravatar.cc/30?img=17",
            "https://i.pravatar.cc/30?img=18",
        ],
    },
];

export default function Discussions() {
    return (
        <div className="discussions-page">
            <DashboardSidebar />

            {/* Header */}
            <DashboardHeader />

            {/* Hero */}
            <section className="discussions-hero">
                <div className="hero-left">
                    <h1>Discussions</h1>
                    <p>
                        Discuss the Kaggle platform & machine learning topics – this includes
                        sharing feedback, asking questions, and more.
                    </p>
                    <button className="white-btn">Your Discussions</button>
                </div>
                <img
                    src="https://storage.googleapis.com/kaggle-media/discussions/illustration.png"
                    alt="illustration"
                    className="discussions-hero-img"
                />
            </section>

            {/* Forums */}
            <section className="forums-section">
                <h2>💬 Forums</h2>
                <div className="forums-list">
                    {forums.map((f, i) => (
                        <div className="forum-item" key={i}>
                            <div className="forum-left">
                                <div
                                    className="forum-icon"
                                    style={{ backgroundColor: f.color }}
                                >
                                    <img src={f.icon} alt={f.name} />
                                </div>
                                <div className="forum-text">
                                    <h3>{f.name}</h3>
                                    <p className="forum-desc">{f.desc}</p>
                                    <p className="forum-last">{f.lastPost}</p>
                                </div>
                            </div>
                            <div className="forum-right">
                                <p className="forum-recent">{f.recent}</p>
                                <div className="forum-avatars">
                                    {f.avatars.map((a, j) => (
                                        <img key={j} src={a} alt="user" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
