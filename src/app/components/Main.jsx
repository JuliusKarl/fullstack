import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from '../components/Dashboard'
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history'
import { ConnectedNavigation } from '../components/Navigation';
import { ConnectedTaskDetail } from '../components/TaskDetail';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation />
                <Route 
                    exact 
                    path='/dashboard' 
                    render={() => (<ConnectedDashboard />)}>
                </Route>
                <Route 
                    exact 
                    path='/task/:id' 
                    render={({match}) => (<ConnectedTaskDetail match={match}/>)}>
                </Route>
            </div>
        </Provider>
    </Router>
)