import "./StatReseau.css";

function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((sum, l) => sum + l.arrets, 0);
  const ligneMax = lignes.reduce(
    (max, l) => (l.arrets > max.arrets ? l : max),
    lignes[0],
  );

  return (
    <div className="stat-reseau">
      <div className="stat-item">
        <span className="stat-chiffre">{totalLignes}</span>
        <span className="stat-label">lignes</span>
      </div>
      <div className="stat-item">
        <span className="stat-chiffre">{totalArrets}</span>
        <span className="stat-label">arrêts au total</span>
      </div>
      <div className="stat-item">
        <span className="stat-chiffre">{ligneMax.numero}</span>
        <span className="stat-label">
          ligne la plus longue ({ligneMax.arrets} arrêts)
        </span>
      </div>
    </div>
  );
}

export default StatReseau;
