import React, { Component } from "react";
import "./style.css";

class Search extends Component {
    state = {
        alphabetical: true,
        sortedEmployees: [],
        employees: []
    }

    componentDidMount() {
        if (this.state.sortedEmployees.length < 1) {
            this.setState({
                sortedEmployees: this.props.employeeList
            })
        }
    }
    //prevProps are the props before re-rendering/search.
    componentDidUpdate(prevProps) {
        if (this.props.employeeList !== prevProps.employeeList) {
            this.setState({
                sortedEmployees: this.props.employeeList
            })
        }
    }

    sortName() {
        let sortEmployees = [];
        if (this.state.alphabetical) {
            sortEmployees = this.props.employeeList.sort((a, b) => {
                var name1 = a.name.last.toLowerCase(), name2 = b.name.last.toLowerCase();
                if (name1 < name2)
                    return -1
                if (name1 > name2)
                    return 1
                return 0
            })
        } else {
            sortEmployees = this.props.employeeList.sort((a, b) => {
                var name1 = a.name.last.toLowerCase(), name2 = b.name.last.toLowerCase();
                if (name1 > name2)
                    return -1
                if (name1 < name2)
                    return 1
                return 0
            })
        }
        this.setState({
            alphabetical: !this.state.alphabetical,
            sortedEmployees: sortEmployees
        })
    }

    render() {
        return (
            <div>
                <div className="sort"><p onClick={this.sortName} className="sortName">Click here to sort employees alphabetically.</p></div>
                
            </div>
        )
    }
}

export default Search;