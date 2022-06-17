import React from "react";
import { search } from "../../utils/user_api_util";
import { Link } from "react-router-dom";


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
                <Link to={`/users/${user.id}`}>
                    <img src={user.profilePhoto}/>
                    {`${user.fname} ${user.lname}`}
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
        return(
            <>
                <input type="text"  
                    onChange={this.update} 
                    placeholder="Search Algobook"
                    value={this.state.query}
                />
                {this.searchResults()}
            </>
        );
    }
}

export default Search;