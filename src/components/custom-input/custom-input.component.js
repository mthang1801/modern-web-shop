import React , {useRef, useEffect} from 'react'
import {InputGroup, Input, Label} from "./custom-input.style";
const CustomInput = ({onChange, label,value, ...otherProps}) => {     
  
  return (
    <InputGroup>          
      <Input onChange={onChange} value={value}  {...otherProps} />   
      <Label shrinkLabel={!!value}>{label}</Label>
    </InputGroup>
  )
}

export default CustomInput
