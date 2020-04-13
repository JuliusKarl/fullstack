import React from 'react';
import { connect } from 'react-redux'
import { ConnectedTaskList } from './TaskList'

export const Dashboard = ({groups}) => (
    <div>
        <h2>Dashboard</h2>
        {groups.map(group => (
            <ConnectedTaskList 
                key={group.id} 
                id={group.id} 
                name={group.name}/>
        ))}
    </div>
)

// Get state from store and use as props for this component
function mapStateToProps(state) {
    return {
        groups: state.groups
    }
} 

// Connect the state to the component
export const ConnectedDashboard = connect(mapStateToProps)(Dashboard)