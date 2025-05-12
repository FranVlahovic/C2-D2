export default function GameOverStatsCard({ title, value }){
    return (
        <div className="stats-card-frame">
            <div className="stats-card-circle">
                <h3>{title}</h3>
                <span>{value}</span>
            </div>
        </div>
    );
}