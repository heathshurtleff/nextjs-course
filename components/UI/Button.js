import Link from 'next/link';

import styles from './Button.module.css'

const Button = (props) => {
  const { link } = props;

  return (
    <Link href={link}>
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;