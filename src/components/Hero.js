import React from "react";
import PropTypes from "prop-types";
import "../styles/Hero.css";

function Hero({ form }) {
  return (
    <section className="hero">
      <h1>{form ? view1.title : view2.title}</h1>
      <p>
        {form ? view1.subtitle : view2.subtitle}
        <span className="italic">{form && view1.italic}</span>
      </p>
    </section>
  );
}

Hero.propTypes = {
  form: PropTypes.bool,
};

const view1 = {
  title: "Easy CV creation within minutes.",
  subtitle:
    "Simply fill out the form below and click “Generate CV” to create your own personalised ",
  italic: "curriculum vitae.",
};

const view2 = {
  title: "Your personalised CV, even better.",
  subtitle:
    "Please review your personalised CV below. You can make changes to any section by clicking the edit button.",
};

export default Hero;
