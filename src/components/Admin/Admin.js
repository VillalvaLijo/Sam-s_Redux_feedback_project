//Get all feedback inputs from the database and display then in a table, also
//add a delete button so that each individual input can be deleted.

//import dependencies onto page
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class Admin extends Component{


    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flagged</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                </table>
            </div>

        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps)(Admin);