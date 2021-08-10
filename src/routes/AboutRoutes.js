import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch,
    Route } from 'react-router-dom';

// import { AboutScreen } from '../pages/about';
import { BuildingScreen } from '../pages/building';

export const AboutRoutes = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route 
                        exact 
                        path="/about/newsletter" 
                        component={ BuildingScreen } 
                    />

                    <Route 
                        exact 
                        path="/about/reviews" 
                        component={ BuildingScreen } 
                    />

                    <Route  
                        path="/about" 
                        component={ BuildingScreen } 
                    />

                    
                </Switch>
            </div>
        </Router>
    )
}
