import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch,
    Route,
    Redirect } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { NotFoundScreen } from '../pages/404';
import { HomeScreen } from '../pages/home';
import { AboutRoutes } from './AboutRoutes';
import { ServicesRoutes } from './ServicesRoutes';
import { BlogRoutes } from './BlogRoutes';
import { BuildingScreen } from '../pages/building';

export const AppRouter = () => {
    return (
        <Router>

            <Navbar />

            <div>
                <Switch>

                    <Route 
                        exact 
                        path="/" 
                        component={ HomeScreen } 
                    />
                    <Route 
                        exact
                        path="/privacy-policies"
                        component={ BuildingScreen }
                    />
                    <Route 
                        exact
                        path="/accessibility"
                        component={ BuildingScreen }
                    />
                    <Route 
                        path="/about" 
                        component={ AboutRoutes } 
                    />
                    <Route  
                        path="/services" 
                        component={ ServicesRoutes } 
                    />
                    <Route 
                        exact
                        path="/contact"
                        component={ BuildingScreen }
                    />
                    <Route  
                        path="/blog" 
                        component={ BlogRoutes } 
                    />
                    <Route 
                        path="/404"
                        component={ NotFoundScreen }
                    />
                    <Redirect
                        to="/404"
                    />
                    
                </Switch>
            </div>
        </Router>
    )
}