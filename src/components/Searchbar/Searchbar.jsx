import React from 'react';

class Searchbar extends React.Component {
  state = {
    value: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.setQ(this.state.value);
    await this.props.onSubmit();
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
