import React from 'react'
import {TextField} from '@material-ui/core'
const Password=()=>{
    const textfieldStyle={margin:'5px auto'}
    return(
        <TextField 
            style={textfieldStyle} id="outlined-basic" variant="outlined" 
            label='Password' placeholder='Enter password' align='center' size='small' type='password' fullWidth required
        />
    )
}
export default Password

