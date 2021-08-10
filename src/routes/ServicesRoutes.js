import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch,
    Route } from 'react-router-dom';

// import { BlogScreen } from '../pages/blog';
import { BuildingScreen } from '../pages/building';

export const ServicesRoutes = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route 
                        exact 
                        path="/services/our-process" 
                        component={ BuildingScreen } 
                    />

                    <Route 
                        exact 
                        path="/services/frequent-questions" 
                        component={ BuildingScreen } 
                    />

                    <Route 
                        exact
                        path="/services/products" 
                        component={ BuildingScreen } 
                    />

                    <Route 
                        path="/services" 
                        component={ BuildingScreen } 
                    />
                    
                </Switch>
            </div>
        </Router>
    )
}