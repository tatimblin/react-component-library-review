import React from 'react';
import { IProps } from '../Card';

const Card: React.FC<IProps> = ({ title, body, image, cta }) => {
  return (
    <article>
      <img src={image.src} alt={image.alt} />
      <div className="bg-card px-4 py-2">
        <h2 className="font-head text-2xl font-bold">{title}</h2>
        <hr className="my-2" />
        <p className="font-body text-md mb-3">{body}</p>
        <a className="bg-buttonPrimary text-buttonPrimary inline-block px-4 py-3" href={cta.link}>{cta.label}</a>
      </div>
    </article>
  );
}

export default Card;
