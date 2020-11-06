import React from 'react';
import "../CSS/ReduxBlog.css"

class ReduxBLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="reduxBlog">
            <h1> React Redux</h1>
            <h3>Description</h3>
            <p> What is redux?

            It is state management library of React which is used to transfer data from one component to another by keeping the data collection in a generalized store. The data are store in the store through this way.
            
            1st:- component: it passes data to action 
            
            2nd:- Action: here we do the required change in the data if it is needed
            
            3rd:- Reducers:- from here Data is passed to store 
            
            
            
            finally, from the store, the data is fetched using the connect method in the component.
            
            So basically the call flow goes like this.
            
            component :- action:- reducers:- store:- component
            
            
            
            #for sending data from component to action then reducers we have to use mapDispatchToProp to make sure that component data dispatches to reducers otherwise data will not enter in State.
            
            
            
            For making the store available throughout the application the app (in index.js ) must be wrapped with the provider. 
            
            Also, make sure in App.js store is initialized and exported otherwise we can create separate store class also.
            
            
            </p>
            </div>
            
        );
    }
}

export default ReduxBLog;