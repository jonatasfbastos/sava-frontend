import {Link} from 'react-router-dom';

export default function MenuItem({clazz, content, ...rest}) {

  return (
    <Link className={`nav__link ${clazz}`} {...rest}>
      <img src={content.image} alt="" height="40px"/>
      <span class="nav__name">{content.name}</span>
    </Link>
  );
}