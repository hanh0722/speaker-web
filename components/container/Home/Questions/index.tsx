import React from "react";
import { Accordion } from "../../../core";
import Heading from "../Heading";
import styles from "./styles.module.scss";

const DUMMY_QUESTION = [
  {
    title: "How did my package ship?",
    content:
      "Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.",
  },
  {
    title:
      "Why does my USPS tracking number state 1-Day, 2-Day, 3-Day Delivery?",
    content:
      "Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.",
  },
  {
    title: "How long will my package take to arrive?",
    content:
      "Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.",
  },
  {
    title: "What are business days?",
    content:
      "Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.",
  },
];

const Question = () => {
  return (
    <div className={`d-flex justify-between ${styles.container}`}>
      <Heading
        className={`text-start ${styles.heading}`}
        title="Frequently asked questions"
        subtitle="A PREMIUM SOUND."
      />
      <div className={styles.accordion}>
        <Accordion>
          {DUMMY_QUESTION.map((item, index) => {
            return (
              <Accordion.Element title={item.title} key={index} id={index}>
                {item.content}
              </Accordion.Element>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default Question;
