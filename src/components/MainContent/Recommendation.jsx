const Recommendation = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          className="btn btn-outline-info"
          data-toggle="collapse"
          href="#recommendation"
          role="button"
          aria-expanded="false"
          aria-controls="recommendation"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          🌟 Recommendations
        </a>
      </p>
      <div className="collapse" id="recommendation">
        <div className="card card-body list-group">
          <p>
            Here are some of our favorite places to visit in Brussels and
            must-try spots close to our place!
          </p>
          <ul className="recommendation-lists">
            <h4>🥐🍪 Bakery & Pastry shops</h4>
            <li>★ Renard Bakery</li>
            <li>★ Goods</li>
            <li>★ La boite à Cookies</li>
            <li>★ Charli</li>
          </ul>
          <ul className="recommendation-lists">
            <h4>☕ Cafes</h4>
            <li>★ Belga & Co.</li>
            <li>★ Fika</li>
            <li>★ Ondo</li>
            <li>★ United Tastes</li>
            <li>★ BOUCHE</li>
            <li>★ Kafei</li>
            <li>★ Woodpecker</li>
          </ul>
          <ul className="recommendation-lists">
            <h4>🍴 Restaurants</h4>
            <p>
              <small style={{ color: "#636363" }}>🥬 Vegetarian-friendly</small>
            </p>
            <li>
              🇧🇪 Chez Léon <small>(Belgian comic books décor)</small>
            </li>
            <li>
              🇧🇪🥬 Bouillon Bruxelles{" "}
              <small>(classic décor & reasonable prices)</small>
            </li>
            <li>
              🇧🇪 Brasserie Ommegang{" "}
              <small>(Best Carbonnade of Brussels 2024)</small>
            </li>
            <li>🍕🥬 L'Artigiano della Farina (takeaway)</li>
            <li>🍕🥬 Basils</li>
            <li>🇯🇵🥬 Koku Ramen</li>
            <li>🇯🇵 Yamayu Santatsu</li>
            <li>🍱 Yi Chan</li>
            <li>🇻🇳🥬🥬 Pho Diem Xuan</li>
            <li>🇮🇳🥬 Mission Masala's Bombay BBQ</li>
            <li>🇹🇼🥬🥬 Liu Lin</li>
            <li>🇮🇷🥬 Chicon Farsi</li>
            <li>🇸🇳 Thieyp</li>
          </ul>
          <ul className="recommendation-lists">
            <h4>🍺 Bars</h4>
            <li>★ The BeerLab Rooftop</li>
            <li>★ Rooftop 58</li>
            <li>★ BBP (Brussels Beer Project)</li>
            <li>★ Goupil Le Fol</li>
            <li>★ L'Athénée</li>
            <li>★ Vinomania</li>
          </ul>
          <ul className="recommendation-lists">
            <h4>🌳🌺 Parks & Walks</h4>
            <li>
              💚🚶 Flagey - Étangs d'Ixelles - Abbaye de la Cambre - Bois de la
              Cambre - Forêt de Soignes
            </li>
            <li>❧ Royal Park</li>
            <li>❧ Parc du Cinquantenaire</li>
            <li>❧ Parc Josaphat</li>
          </ul>
          <p>
            <small>Ask us for more!</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
