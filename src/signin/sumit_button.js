import React from 'react'
import {Button} from '@material-ui/core'
const SumitButton=({setStatus})=>{
    //style
    const buttonStyle={backgroundColor:'#C1CAFF'}
    //function
    const submitHandler = () =>{
        setStatus(true);
    };
    return(
        <Button onClick={submitHandler} type="submit" style={buttonStyle} variant='contained' fullWidth>Sign in</Button>
    )
}
export default SumitButton