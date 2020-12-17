import React, {Component} from "react";
import axios from "axios";
import "./App.css";
import Table from './components/Table';
import Container from "./components/Container";
import Header from "./components/Header";
import Search from "./components/Search";
import Searchbar from "./components/Searchbar";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";


class App extends Component {

    state = {
        employees: []
    }

    componentDidMount() {
        this.faker()
    }

    faker() {
        API.search()
        .then (res => this.setState({ employees: res.data.results }))
    }

    render(){
    return <div>
        <div>
        <Container />
            <Wrapper>
                <Header />
                <Searchbar />
                <Search />
                <Table employees={this.state.employees}/>
            </Wrapper>
        </div>
        </div>
    }
}

export default App;

