import React, { HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.css";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  text: string;
  type?: HTMLInputTypeAttribute;
  config?: UseFormRegisterReturn;
}

export const Input: React.FC<Props> = ({ text, type = "text", config }) => {
  return (
    <input
      type={type}
      placeholder={text}
      className={styles.input}
      {...config}
    />
  );
};
