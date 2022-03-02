import React from 'react';
import { IProps } from '../Card';
import '../../themes/daisy.css';

const Card: React.FC<IProps> = ({ title, body, image, cta }) => {
  return (
    <article className="card">
      <img src={image.src} alt={image.alt} />
      <div>
        <h2 className="heading heading--head">{title}</h2>
        <hr className="my-2" />
        <p className="body mb-2">{body}</p>
        <a className="btn btn--primary" href={cta.link}>{cta.label}</a>
      </div>
    </article>
  );
}

export default Card;
