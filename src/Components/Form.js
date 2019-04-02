import React from 'react';
import Input from './/InputField';
import '../Components/Input.css';

const form = (props) =>{
    return(
 <div >
    <form onSubmit = {props.submit}>
      <label for="company">Company Name:</label>
      <Input Change = {props.company}/>
      <label for="facility">Pick a Facility Name:</label>
      <Input Change = {props.facility}/>
      <label for="PONumber">Add PO number:</label>
      <Input Change = {props.PONumber}/>
      <label for="bol">BOL:</label>
      <Input Change = {props.bol}/>
      <label for="freightcontact">Freight Contact:</label>
      <Input Change = {props.freightcontact}/>
      <label for="sku">SKU:</label>
      <Input Change = {props.sku}/>
      <label for="qty">Add QTY:</label>
      <Input Change = {props.qty}/>
      <label for="pallet">Pallet:</label>      
      <Input Change = {props.pallet}/>
      <label for="arrivaldate">Arrival Date:</label>
      <Input Change = {props.arrivaldate}/>
      <label for="totalcontainers">Total Containers</label>
      <Input Change = {props.totalcontainers}/>
      <label for="totalpallets">Total Pallets</label>
      <Input Change = {props.totalpallets}/>
      <label for="totalcartons">Total Cartons</label>
      <Input Change = {props.totalcartons}/>
      <label for="ponotes">Po Notes</label>
      <Input Change = {props.ponotes}/>
      <label for="priorityLevel">Priority Level</label>
      <Input Change = {props.priorityLevel}/>
      <br/>
      <Input type = 'submit' value = 'Submit'/>
    </form>
 </div>
    );
}

export default form;