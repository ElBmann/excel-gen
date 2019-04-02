import React, { Component } from 'react';
import './App.css';
import './/Components/Input.css';
import Form from './Components/Form';
import {CSVLink} from 'react-csv';


class App extends Component {
  constructor(props){
    super(props);
        this.state = {
          headers:[
            {label:'Company', key: 'company'},
            {label:'Facility', key:'facility'},
            {label:'PO Number', key:'PONumber'},
            {label:'BOL/Tracking Number', key:'bol'},
            {label:'Freight Contact', key: 'freightcontact'},
            {label:'SKU', key: 'sku'},
            {label:'QTY', key: 'qty'},
            {label:'Pallet/Carton # Notes', key: 'pallet'},
            {label:'Arrival Date', key: 'arrivaldate'},
            {label:'Total Containers', key: 'totalcontainers'},
            {label:'Total Pallets', key: 'totalpallets'},
            {label:'Total Cartons', key: 'totalcartons'},
            {label:'PO Notes', key: 'ponotes'},
            {label:'Priority Level', key:'priorityLevel'}
          ],
          POForms:[
            {
              company: '',
              facility: '',
              PONumber: '',
              bol: '',
              freightcontact: '',
              sku: '',
              qty: '',
              pallet: '',
              arrivaldate: '',
              totalcontainers: '',
              totalpallets: '',
              totalcartons: '',
              ponotes: '',
              priorityLevel: ''
            }
          ]
        };
    
  }
  companyHandleChange(event){
    this.setState({
      company: event.target.value
    });
  }
  facilityHandleChange(event){
    this.setState({
      facility: event.target.value
    });
  }
  poNumberHandleChange(event){
    this.setState({
      PONumber: event.target.value
    });
  }
  bolHandleChange(event){
    this.setState({
      bol: event.target.value
    });
  }
  freightContactHandleChange(event){
    this.setState({
      freightcontact: event.target.value
    });
  }
  skuHandleChange(event){
    this.setState({
      sku: event.target.value
    });
  }
  qtyHandleChange(event){
    this.setState({
      qty: event.target.value
    });
  }
  palletHandleChange(event){
    this.setState({
      pallet: event.target.value
    });
  }
  arrivalDateHandleChange(event){
    this.setState({
      arrivaldate: event.target.value
    });
  }
  totalContainerseHandleChange(event){
    this.setState({
      totalcontainers: event.target.value
    });
  }
  totalPalletsHandleChange(event){
    this.setState({
      totalpallets: event.target.value
    });
  }
  totalCartonsHandleChange(event){
    this.setState({
      totalcartons: event.target.value
    });
  }
  poNotesHandleChange(event){
    this.setState({
      ponotes: event.target.value
    });
  }
  priorityLevelHandleChange(event){
    this.setState({
      priorityLevel: event.target.value
    });
  }
  handleSubmit(event){
      console.log(this.state.arrivaldate);
      event.preventDefault();
  }

  render() {
    
    return (
      <div >
        <h1>Type In Your Information</h1>
       <Form
        submit = {this.handleSubmit.bind(this)}
        className = 'input4'
        company = {this.companyHandleChange.bind(this)}
        facility ={this.facilityHandleChange.bind(this)}
        PONumber ={this.poNumberHandleChange.bind(this)}
        bol ={this.bolHandleChange.bind(this)}
        freightcontact ={this.freightContactHandleChange.bind(this)}
        sku ={this.skuHandleChange.bind(this)}
        qty ={this.qtyHandleChange.bind(this)}
        pallet ={this.palletHandleChange.bind(this)}
        arrivaldate ={this.arrivalDateHandleChange.bind(this)}
        totalcontainers ={this.totalContainerseHandleChange.bind(this)}
        totalpallets ={this.totalPalletsHandleChange.bind(this)}
        totalcartons ={this.totalCartonsHandleChange.bind(this)}
        ponotes ={this.poNotesHandleChange.bind(this)}
        priorityLevel ={this.priorityLevelHandleChange.bind(this)}
         />
        <CSVLink data={this.state.POForms} headers={this.state.headers}> Balls</CSVLink>
      </div>
    );
  }
}

export default App;
