import React from "react";
import Table from "../Table";

class Searchbar extends React.Component {
    state = {
        searchInput: "",
        filter: []
    }

    componentDidMount() {
        if (this.state.filter.length < 1) {
            this.setState({
                filter: this.props.employees
            })
        }
    }

    handleInputChange = event => {
        this.setState({
            searchInput: event.target.value
        });
        let input = event.target.value;
        const list = this.props.employees.filter((item) => {
            let values = item.name.first + item.name.last + item.cell + item.email;
            return values.indexOf(input) !== -1;
        });

        this.setState({
            filter: list
        })
    }

    render() {
        return <div>
            <div>
                <form className="form">
                    <input
                        value={this.state.searchInput}
                        name="searchInput"
                        onChange={event => this.handleInputChange(event)}
                        type="text"
                        placeholder="Search for an employee by name"
                    />
                </form>

            </div>
        </div>

    }
}

export default Searchbar;