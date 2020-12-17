import React from "react";

function Table(props) {
    return <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Employee:</th>
                    <td className="img"><img alt={props.last} src={props.image}></img></td>
                    <td>{props.first}</td>
                    <td>{props.last}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
            </tr>
        </tbody>
    </table>
}

export default Table;