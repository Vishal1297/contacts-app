import React from "react";
import Contact from "../models/Contact";
import user from "../images/user.png";

const ContactCard = (props: { contact: Contact; clickHandler: any }) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        src={user}
        alt="This is contact avator"
        className="ui tiny circular image"
      />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
