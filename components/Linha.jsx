import Subdivisao from "./Subdivisao";
import styles from "../src/styles/Linha.module.css";
export default function Linha(props) {
  return (
    <div className={styles.linha}>
      {props.impar ? (
        <>
          <Subdivisao />
          <Subdivisao preto />
          <Subdivisao />
          <Subdivisao preto />
          <Subdivisao />
          <Subdivisao preto />
          <Subdivisao />
          <Subdivisao preto />
        </>
      ) : (
        <>
          <Subdivisao preto/>
          <Subdivisao  />
          <Subdivisao preto/>
          <Subdivisao />
          <Subdivisao preto/>
          <Subdivisao />
          <Subdivisao preto/>
          <Subdivisao />
        </>
      )}
    </div>
  );
}
