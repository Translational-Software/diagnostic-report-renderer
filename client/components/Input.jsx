import React from 'react';


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({data: event.target.value});
  }

  handleSubmit(event) {
    this.props.updateData(this.state.data);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.data} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

export default Input;