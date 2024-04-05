import React from "react";
import css from "./footer.module.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const cards = useSelector((state) => state.tasks);

  return (
    <div className={css.footer}>
      <footer className={css.container}>
        <div className={css.active}>
          <p className={css.para}>
            Active tasks: <strong>{cards[0].tasks.length}</strong>
          </p>
          <p className={css.para}>
            Finished tasks: <strong>{cards[3].tasks.length}</strong>
          </p>
        </div>
        <p className={css.author}>
          Kanban board by <strong>Aleksandra Yakovchenko</strong>, 
          <strong> {new Date().getFullYear()}</strong>
        </p>
      </footer>
    </div>
  );
};
export default Footer;