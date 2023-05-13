import styles from "./button.module.css";

interface Props {
  text: string;
  href: string;
  className?: string;
}

function Button({ text, className, href }: Props) {
  return (
    <a
      target="_blank"
      href={href}
      className={`${styles.button}  ${className && styles[className]}`}
    >
      {text}
    </a>
  );
}

export default Button;
