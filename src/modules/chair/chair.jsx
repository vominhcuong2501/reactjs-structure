import React, { useState } from "react";
import "./chair.scss";
// npm install sass

export default function Chair(props) {
  const [isSelected, setIsSelected] = useState(false);
  const populatClass = () => {
    let defaultClass = " ghe";
    if (props.item.loaiGhe === "Vip") {
      defaultClass += " gheVip";
    }
    if (isSelected) {
      defaultClass += " dangDat";
    }
    if (props.item.daDat) {
      defaultClass += " daDat";
    }
    return defaultClass;
  };
  return (
    <button
    disabled={props.item.daDat}
      onClick={() => {
        setIsSelected(!isSelected);
        props.handleSelect(props.item)
      }}
      className={populatClass()}
    >
      {props.item.tenGhe}
    </button>
  );
}
