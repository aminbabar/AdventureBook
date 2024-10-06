import React from "react";
import { search } from "../../utils/user_api_util";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            searchResults: {}
        };
        this.inputRef = React.createRef();
        this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    update(e) {
        this.setState({query: e.currentTarget.value}, () => {
            if (this.state.query.length > 0) {
                search(this.state.query)
                    .then((users) => {
                        this.setState({searchResults: users.users || {}})
                    });
            } else {
                this.setState({searchResults: {}});
            }
        });
    }

    searchItem(user, idx) {
        return (
            <div key={user.id.toString() + idx.toString()}>
                <Link className="search-item" to={`/users/${user.id}`} onClick={this.handleClick}>
                    <div className="image-container">
                        <img src={user.profilePhoto}/>
                    </div>

                    <div className="search-user-info">
                        {`${user.first_name} ${user.last_name}`}
                    </div>
                </Link>
            </div>
        );
    }

    searchResults() {
        if (Object.keys(this.state.searchResults).length > 0) {
            return Object.values(this.state.searchResults).map((user, idx) => {
                return this.searchItem(user, idx);
            });
        } else {
            return (
                <div className="no-results">
                    No results found
                </div>
            )
        }
    }

    preventDefaultBehavior(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    handleClick() {
        this.setState({ query: "", searchResults: {} })
        this.props.unFocusSearch();
        this.inputRef.current.blur();
    }
                
    render() {

        const searchClassName = this.props.searchClickedOn ? "search focused" : "search";
        return(
            <>
                <div className={searchClassName}>
                    {!this.props.searchClickedOn && <FaSearch className="search-logo"/>}
                    <input type="text"  
                        onChange={this.update} 
                        placeholder="Search AdventureBook"
                        value={this.state.query}
                        onFocus={() => this.props.focusSearch()}
                        onBlur={() => this.props.unFocusSearch()}
                        ref={this.inputRef}
                    />
                </div>
                {this.props.searchClickedOn && <div className="search-results" onMouseDown={this.preventDefaultBehavior}>
                    {this.searchResults()}
                </div>}
            </>
        );
    }
}

export default Search;