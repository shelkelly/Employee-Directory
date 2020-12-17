import React from "react";
import axios from "axios";
import "./style.css";
import Table from './Table';
import Container from "./Container";
import Header from "./Header";
import Search from "./Search";
import Searchbar from "./Searchbar";
import Wrapper from "./Wrapper";


function App() {

    state = {
        employees: []
    }

    componentDidMount = () => {
        axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
          .then(res => {
            this.setState({ employees: res.data.results });
          });
    }

    render = () => {
    return (
        <div>
        <Container />
            <Wrapper>
                <Header />
                <Searchbar />
                <Search />
                <Table employees={this.state.employees}/>
            </Wrapper>
        </div>
    )}
}

export default App;

