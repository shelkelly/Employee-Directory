import React, { Component } from "react";
import "./style.css";
import Table from '../Table';

class Search extends Component {
    state = {
        alphabetical: true,
        ascending: true,
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
                <div classname="sort"><p onClick={this.sortName} className="sortName">Click here to sort employees alphabetically.</p></div>

                {
                    this.state.sortedEmployees.length > 0 &&
                    this.state.sortedEmployees.map((item, index) => (
                        <Table
                            image={item.picture.thumbnail}
                            first={item.name.first}
                            last={item.name.last}
                            phone={item.cell}
                            email={item.email}
                        />
                    ))
                }
                
            </div>
        )
    }
}

export default Search;