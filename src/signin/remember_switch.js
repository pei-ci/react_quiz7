import React from 'react'
import {Switch, FormControlLabel, Grid} from '@material-ui/core'
const RememberSwitch=()=>{
    return(
        <Grid>
           <FormControlLabel
                control={<Switch name="switchA" color='primary' />}
                label="Remember me"
            />     
        </Grid>
        
    )
}
export default RememberSwitch