import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Button, Card, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const styles = {
    root: {
        width: '100%',
        height: 200,
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: '#518273',
        borderRadius: 4,
        padding: 0,
        gap: 1.5
    },
    welcome: {
        fontSize: 24,
        color: 'white',
        opacity: 0.7,
        fontWeight: 'bold',
        lineHeight: 1,
        marginTop:4,
        marginLeft:'20px',
        display: 'flex',

    },
    name: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 1.2,
        display:'flex',
        margin: '0px 0px 10px 20px',
        
    },

    searchBar: {
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 2,
        marginLeft:'20px',
        marginTop:2,
    }

}

 function DashHeader() {
    const navigate = useNavigate();
    const buttonClick = () => { navigate("/searchresults");
 };
    return (
        
        <Card sx={styles.root}>

            <div styles={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
            <Typography sx={styles.welcome}> Welcome Back</Typography>
            <Typography sx={styles.name}> Samantha</Typography>

            <OutlinedInput
                placeholder='Find your perfect plant'
                sx={styles.searchBar}
                id="outlined-adornment-weight"
                endAdornment={(
                    <Button onClick={buttonClick} sx={{height:0, width:0,padding:0, minWidth:30}}>
                    
                    <InputAdornment position="end">
                    <SearchIcon/>
                    </InputAdornment>
                    </Button>
                )}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                }}
            />
            </div>
        </Card>
    );
}

export default DashHeader