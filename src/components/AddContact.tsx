import React from "react";

class AddContact extends React.Component<{}, {}> {
  
  props: any;

  state = {
    name: "",
    email: "",
  };

  add = (e: any) => {
    e.preventDefault();
    if (this.state.name.trim() === "" || this.state.email.trim() === "") {
      alert("All fields are mandatory");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: '', email: '' });
    
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
