import './style.scss';

function Card({ title, name, img, desc, link }) {
  return (
    <article className="repo">
      <a target="_blank" href={link}>
        <img src={img} alt="avatar" />
          <div className="repo-info">
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
      </a>
    </article>
  );
}

export default Card;
