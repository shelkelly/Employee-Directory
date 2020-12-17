import React from "react";
import "./style.css";
import Table from '../Table';
import Container from "../Container";
import Header from "../Header";
import Search from "../Search";
import Searchbar from "../Searchbar";
import Wrapper from "../Wrapper";

class Search extends React.Component {
    state = {
        employees: [],
        sortedEmployees: []
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

    quickSort = (items) => {
        sortedEmployees.sort();
        return items;
    }

    render() {
        return (
            this.state.sortedEmployees.map((item, index) => (
                <Table
                    image={item.picture.thumbnail}
                    first={item.name.first}
                    last={item.name.last}
                    phone={item.cell}
                    email={item.email}
                    />

            ))
        )
    }
}

export default Search;