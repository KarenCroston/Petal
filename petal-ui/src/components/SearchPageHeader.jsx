import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Button, Card,InputAdornment, OutlinedInput} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
const styles = {
    root: {
        width: 'auto', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 4,
        padding: 4,
        paddingBottom: 10,
        marginTop:10,
        marginRight: 1,
        marginLeft: 1,
    
    },

    searchBar: {
        backgroundColor: 'white',
        borderRadius: 2,
    },

    Container: {
        width: '400px', 
        padding: 0, 
        height: '250px',
        borderRadius: 0,
        boxShadow: '0px 0px 0px',
        backgroundColor: '#518273',

    },
}

    function SearchPageHeader() {
        const [search, setSearch] = useState();

        const handleSetSearch = (event) => {
            setSearch(event.target.value);
        }

        return (
        <>
        <Card sx={styles.Container}>
        <ArrowBackIcon sx={{position:'absolute', margin:2, fontSize:35, marginLeft:-23,color:'white'}}/>

        <Card sx={styles.root}>
            <OutlinedInput
                onChange={handleSetSearch}
                placeholder='Find your perfect plant'
                sx={styles.searchBar}
                id="outlined-adornment-weight"
                endAdornment={(
                    <Button component={Link} to={{pathname: "/searchresults", search: search}} sx={{height:0, width:0,padding:0, minWidth:30}}> 
                    <InputAdornment position="end" >
                        <SearchIcon/>
                    </InputAdornment>
                    </Button>
                )}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                }}
            />
        </Card>
        </Card>
        </>
    );
}

export default SearchPageHeader