import React from 'react'
import {TextField} from '@material-ui/core'
const EmailAddress=()=>{
    const textfieldStyle={margin:'5px auto'}
    return(
        <TextField 
            style={textfieldStyle} id="outlined-basic" variant="outlined" 
            label='Email Address' placeholder='Enter email address' align='center' size='small' fullWidth required
        />
    )
}
export default EmailAddress

