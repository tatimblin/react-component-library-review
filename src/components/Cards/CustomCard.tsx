import React from 'react';
import { IProps } from '../Card';

const Card: React.FC<IProps> = ({ title, body, image, cta }) => {
  return (
    <article>
      <img src={image.src} alt={image.alt} />
      <div>
        <h2>{title}</h2>
        <hr />
        <p>{body}</p>
        <a href={cta.link}>{cta.label}</a>
      </div>
    </article>
  );
}

export default Card;
