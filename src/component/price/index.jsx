import { Button, Input, Tag } from 'antd';
import React, { useEffect, useState } from 'react';

import useSelection from 'antd/lib/table/hooks/useSelection';

const { Search } = Input;
const Price = (props) => {
    var [sum,setSum] = useState(0)
    const [showTip,setShowTip] = useState(false)
  const sumPrice=()=>{
    var sumveg =props.veg.reduce(function(a, b) { return a+b; }, 0)
    var sumnon = props.non.reduce(function(a, b) { return a+b; }, 0)

    return sumveg + sumnon;
  }


  return (
    <div style={{fontSize:"1rem",textAlign:"center"}}>
    <div  style={{marginBottom:"30px"}}>
        <Tag color="#87d068" style={{fontSize:"1rem"}}> Amount to be Paid : {sumPrice()}</Tag>
    </div> 

      <div style={{marginBottom:"30px"}}><Button type="primary" onClick={()=>setShowTip(!showTip)}>Add a tip for waiter</Button></div>
      
     {showTip && 
      (<>
        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <Search style={{width:"50%"}} placeholder="input amount to tip"  enterButton="Add" onSearch={value =>setSum(sumPrice() + (sumPrice()*value / 100)) } />
      </div>
      <div  style={{marginTop:"30px"}}>
        <Tag color="#87d068" style={{fontSize:"1rem"}}> Amount to be Paid(with tip) :{sum}</Tag>
    </div>
    </>)
   }
     
    </div>
  );
};
export default Price;