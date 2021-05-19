import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import Heading from './heading'
import EmailAddress from './email_address'
import Password from './password'
import RememberSwitch from './remember_switch'
import SumitButton from './sumit_button'
const SignIn=({setStatus})=>{
    const paperStyle={padding :20, height:'70vh', width:280, margin:'20px auto'}
    return(
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Heading/>
                <EmailAddress/>
                <Password/>
                <RememberSwitch/>
                <SumitButton setStatus={setStatus}/>
            </Paper>
        </Grid>
    )
}
export default SignIn;