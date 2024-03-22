import { useState } from 'react';
import './twFollowCard.css';

export function TwitterFollowCard({ format, username, name }) {
  /*Podemos Inicializar las props de use state y pasarlas como 
   inicialización del estado recomendable usar initial... en las props del componente
   TwitterFollowCard({ format, username, name, initialFollowingCard })
  */
  const imgSrc = `https://unavatar.io/twitter/${username}`;
  const [isfollowing, setIsFollowing] = useState(false);
  const followText = isfollowing ? 'Siguiendo' : 'seguir';
  const buttonClassName = isfollowing ? 'tw-ufw-btn is-following' : 'tw-fw-btn';
  const handleClick = () => {
    setIsFollowing(!isfollowing);
  };
  return (
    <article className="tw-fw-card">
      <header className="tw-fw-header">
        <img className="tw-fw-avatar" alt="Avatar de Erwin" src={imgSrc} />
        <div className="tw-name-userName">
          <div className="text-fw-card">
            <strong>{name}</strong>
            <i className="bx bxs-badge-check bx-sm"></i>
          </div>
          <span>{format(username)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="span-fw">{followText}</span>
          <span className="span-ufw">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
