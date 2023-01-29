import React from "react";
import Contact from "../models/Contact";
import user from "../images/user.png";

const ContactCard = (props: { contact: Contact }) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img src={user} height={72} width={72} alt="This is contact avator" className="ui avator image" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <i className="trash alternate outline icon"
        style={{color: 'red', marginTop: '7px'}}></i>
      </div>
    </div>
  );
};

export default ContactCard;
