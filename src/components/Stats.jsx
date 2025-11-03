import "../styles/Stats.css";

export default function DashboardStats() {
    const stats = [
        { title: "Datasets", desc: "total created" },
        { title: "Notebooks", desc: "total created" },
        { title: "Competitions", desc: "total joined" },
        { title: "Discussions", desc: "total posted" },
        { title: "Courses", desc: "total completed" },
    ];

    return (
        <div className="stats">
            {stats.map((s) => (
                <div className="stat-box" key={s.title}>
                    <span className="stat-title">{s.title}</span>
                    <span className="stat-value">0</span>
                    <p className="stat-desc">{s.desc}</p>
                </div>
            ))}
        </div>
    );
}
