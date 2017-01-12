import styles from '../data/styleVariables';

export default key => props =>
  styles.colors[props.slug][key];
