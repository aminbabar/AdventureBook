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
        this.update = this.update.bind(this);
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
                <Link to={`/users/${user.id}`} onClick={() => this.setState({query: "", searchResults: {}})}>
                    <img src={user.profilePhoto}/>
                    {`${user.first_name} ${user.last_name}`}
                </Link>
            </div>
        );
    }

    searchResults() {
        if (Object.keys(this.state.searchResults).length > 0) {
            return Object.values(this.state.searchResults).map((user, idx) => {
                return this.searchItem(user, idx);
            });
        };
    }

    render() {

        const searchClassName = this.props.searchClickedOn ? "search focused" : "search";
        return(
            <div className={searchClassName}>
                {!this.props.searchClickedOn && <FaSearch className="search-logo"/>}
                <input type="text"  
                    onChange={this.update} 
                    placeholder="Search Algobook"
                    value={this.state.query}
                    onFocus={() => this.props.focusSearch()}
                    onBlur={() => this.props.unFocusSearch()}
                />
                {this.searchResults()}
            </div>
        );
    }
}

export default Search;