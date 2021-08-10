import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch,
    Route } from 'react-router-dom';

// import { BlogScreen } from '../pages/blog';
import { BuildingScreen } from '../pages/building';

export const BlogRoutes = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route 
                        exact 
                        path="/blog" 
                        component={ BuildingScreen } 
                    />

                </Switch>
            </div>
        </Router>
    )
}
