import React from "react";
class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({
        type: event.target.dataset.type,
      }),
      () => this.props.searchMovies(this.state.search, this.state.type)
    );
  };
  render() {
    const { search } = this.state;
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <a
            onClick={() => this.props.searchMovies(this.state.search)}
            className="teal lighten-2 btn search-btn"
          >
            Search
          </a>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              checked={this.state.type === "all"}
              onChange={this.handleFilter}
            />
            <span className="paddingTextRadio">All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              checked={this.state.type === "movie"}
              onChange={this.handleFilter}
            />
            <span className="paddingTextRadio">Movies Only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              checked={this.state.type === "series"}
              onChange={this.handleFilter}
            />
            <span className="paddingTextRadio">Series Only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="game"
              checked={this.state.type === "game"}
              onChange={this.handleFilter}
            />
            <span className="paddingTextRadio">Game Only</span>
          </label>
        </div>
      </div>
    );
  }
}
export { Search };
