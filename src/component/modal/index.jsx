import '../modal/style.css'

import {Button, Checkbox, Col, Modal, Row, message} from 'antd'
import React, { Component } from 'react';

import Price from '../price';
import { Select } from 'antd';
import data from '../../data/menu.json'

const { Option } = Select;


class ModalApp extends Component {
  state = { visible: false,visiblePay:false,menuDataveg:[],menuDatanon:[],priceveg:[],pricenon:[],total:0 };
  

  showModal = () => {
    const menuitems = [...data]
    this.setState({
      visible: true,
      visiblePay:false,
      menuDataveg:menuitems[0].items,
      menuDatanon:menuitems[1].items
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
      visiblePay:true
    })
  
  }

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  
  
  render() {
    const handleChange=(value)=> {
      
      this.setState({
        priceveg:value
      })
    }
    
    const handleChangeNon=(value)=>{
      
      this.setState({
        pricenon:value
      })
    }
    const success = () => {
      message.success('Payment Done!!');
    };
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Food Menu</Button>

        {this.state.visiblePay && <div> 
          <Price veg={this.state.priceveg} non={this.state.pricenon}/>
          <Button type="primary" onClick={success}>PayNow</Button>
        </div>}
        <Modal
          title="Menu"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                  <div style={{border:"1px solid #f0f0f0",width:"90%",padding:"3%",marginRight:"20px"}}>
                    Veg Food Menu
                      <Select  mode="multiple" placeholder="Select a food item" style={{ width: 200 }} onChange={handleChange} >
                      {this.state.menuDataveg.map((vegfood,key)=>(
                        <Option value={vegfood.price}>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}} >
                            <div>{vegfood.name}</div>
                            <div>Rs.{vegfood.price}</div>
                        </div>
                        </Option>
                      ))}
                    </Select>
                  </div>
                 
                  <div style={{border:"1px solid #f0f0f0",width:"90%",padding:"3%"}}>
                  Non-Veg Food Menu
                    <Select  mode="multiple" placeholder="Select a food item" style={{ width: 200 }} onChange={handleChangeNon} >
                    {this.state.menuDatanon.map((vegfood,key)=>(
                      <Option value={vegfood.price}>
                      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}} >
                          <div>{vegfood.name}</div>
                          <div>Rs.{vegfood.price}</div>
                      </div>
                      </Option>
                    ))}
                  </Select>
                </div>
            </div>
         
        </Modal>
      </div>
    );
  }
}

export default ModalApp;