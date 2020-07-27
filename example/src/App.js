
import React, { useState, useEffect } from 'react'
import {
    HashRouter,
    Switch,
    Route,

    NavLink
} from "react-router-dom";
import 'react-reserver/dist/index.css'
import GettingStarted from './Pages/GettingStarted'
import Basic from './Pages/Basic'
import ColumnTitle from './Pages/ColumnTitle'
import Full from './Pages/Full'

const FancyLink = React.forwardRef((props, ref) => {
    console.log(props);
    //
    return <li className={`${props.className} mt-4 `}>
        <a href={props.href} ref={ref} className={`flex  `}>
            <span className="ml-2 capitalize font-medium text-black dark:text-gray-300">
                {props.children}
            </span>
        </a>
    </li>
})

const MenuTitle = (props)=>{ return <li className="mt-8">{props.children}</li> }

const aClassName = "bg-white dark:bg-gray-200 rounded-lg";
const App = () => {
    console.log(process.env.PUBLIC_URL)
    return (
        <HashRouter >
            <div className="h-screen w-full flex overflow-hidden">
                <nav className="flex flex-col bg-orange-200 w-64 px-8 pt-4 pb-6">
                    <div className="flex flex-row border-b items-center justify-between pb-2">
                        <span className="text-lg font-semibold capitalize dark:text-gray-300">
                            React Reserver Docs
                        </span>
                    </div>
                    <ul className="mt-2 text-gray-600">
                        <MenuTitle>Examples</MenuTitle>
                        <NavLink exact={true} to="/" activeClassName={aClassName} component={FancyLink}>Get Started</NavLink>
                        <NavLink to="/basic" activeClassName={aClassName} component={FancyLink}>Basic</NavLink>
                        <NavLink to="/column-title" activeClassName={aClassName} component={FancyLink}>Column Title</NavLink>
                        <NavLink to="/full" activeClassName={aClassName} component={FancyLink}>Full</NavLink>
                        <MenuTitle>Docs</MenuTitle>
                      
                    </ul>
                </nav>
                <main
                    className="flex-1 flex flex-col bg-white transition
                duration-500 ease-in-out overflow-y-auto">
                    <Switch>
                        <Route path={'/full'}>
                            <Full />
                        </Route>
                        <Route path={'/column-title'}>
                            <ColumnTitle />
                        </Route>
                        <Route path={'/basic'}>
                            <Basic />
                        </Route>
                        <Route path={'/'}>
                            <GettingStarted />
                        </Route>
                    </Switch>
                </main>

            </div>
        </HashRouter>)
}

export default App