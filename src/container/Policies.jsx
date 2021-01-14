import React, { Component } from 'react';
import './Policies.css';
import PolicyTabs from '../components/PolicyTabs';
import { Route, Switch, Redirect } from 'react-router-dom';

class Policies extends Component {

  constructor(props) {
    super(props);
    console.log("In Constructor", this.props.policyData);
    this.state = {
      policyData: this.props.policyData, 
    };
    
  }

  componentDidMount() {
    // this.setState({ policyData: this.props.policyData});
    //  fetchPolicyData();
  }

  render() {

    console.log("In state", this.state.policyData);

    const policyData = this.props.policyData;

    if (policyData.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="Policies">
          <div>
            <header className="Main-header">
              <h5>Policies</h5>
              <h3>Behavior Analytics</h3>
            </header>
            <p>
              Netscope's Behavior Analytics Policies support multiple types of user activation detection,
              including Rule-Based, Behavior-Based detection engines
            </p>
          </div>
          <Switch>
            <Redirect exact from='/' to='/Policies/BehaviorBasedTab' />
            <Route exact path='/Policies/:page?' render={props => <PolicyTabs {...props} policyData={policyData} />} />
          </Switch>
        </div>
      );
    }
  }
}

export default Policies;
