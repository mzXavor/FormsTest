import React from 'react';
import logo from './GuitarCenter.jpeg';
import './App.scss';
import FormButton from './Subcomponents/FormButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


export default class App extends React.Component<any, {}> {

  public state = {

  }

  render() {
    console.log(process.env)
    return (
      <div className="App">
        <div className="Container">
          
          <div className="Header">
            <img src={logo} className="Logo"></img>
            <span className="HeaderText">Sweepstakes eForm</span>
          </div>

          <div className="Divider"></div>
          
          {this.renderForm()}

          {this.renderTopText()}
          
          <div className="Button">
            <FormButton></FormButton>
          </div>
          
          {this.renderBottomText()}

        </div>
      </div>
    );
  }

  renderForm = () => {
    return (
      <div className="Form">
        <div className="FormRow">
          <div className="Title"><b>Store No:</b></div>
          <div className="Input">
            <Select style={{width:"90%", margin: "0 auto"}}>
            </Select>
          </div>
        </div>
        <div className="FormRow">
          <div className="Title"><b>Store Associate:</b></div>
          <div className="Input">
            <TextField style={{width:"90%", margin: "0 auto"}} size="small" label="Employee ID"/>
          </div>
        </div>
        <div className="FormRow">
          <div className="Title"><b>First Name:</b></div>
          <div className="Input">
            <Select style={{width:"90%", margin: "0 auto"}}>
            </Select>
          </div>
        </div>
        <div className="FormRow">
          <div className="Title"><b>Last Name:</b></div>
          <div className="Input">
            <Select style={{width:"90%", margin: "0 auto"}}>
            </Select>
          </div>
        </div>
        <div className="FormRow">
          <div className="Title"><b>Consumer Email:</b></div>
          <div className="Input">
            <Select style={{width:"90%", margin: "0 auto"}}>
            </Select>
          </div>
        </div>
        <div className="FormRow">
          <div className="Title"><b>Sweepstakes List:</b></div>
          <div className="Input">
            <Select style={{width:"90%", margin: "0 auto"}}>
            </Select>
          </div>
        </div>
      </div>
    );
  }

  renderTopText = () => {
    return (
      <div className="TextSeciton">
        By submitting my entry, I acknowledge that I have read and agreed to abide by the Official Rules.
        I also agree to receive emails about events, deals and promotions from Guitar Center.
        View the Guitar Center Privacy Policy.
      </div>
    );
  }

  renderBottomText = () => {
    return (
      <div className="TextSeciton">
        NO PURCHASE NECESSARY. Void where prohibited.
        Open to legal residents, age 18 and older, of the contiguous 48 U.S. states and the District of Columbia.
        Odds depend on number of entries received. See guitarcenter.com for Official Rules and how to play for free.
        Sponsor: Guitar Center Stores, Inc., 5795 Lindero Canyon Road, Westlake Village, CA 91362.
      </div>
    );
  }
}