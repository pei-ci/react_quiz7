import React from 'react'
import {Avatar,Grid} from "@material-ui/core"
const Heading=()=>{
    const avatarStyle={backgroundColor:'#C1CAFF',margin:'10px'}
    return(
        <Grid align='center'>
            <Avatar style={avatarStyle} variant='rounded'></Avatar>
            <h2>Sign in</h2>     
        </Grid>
    )
}
export default Heading