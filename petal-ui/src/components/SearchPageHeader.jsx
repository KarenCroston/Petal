import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Button, Card,InputAdornment, OutlinedInput} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const styles = {
    root: {
        width: 'auto', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: '#F6F6F6',
        borderRadius: 4,
        padding: 4,
        paddingBottom: 10,
        marginTop:7,
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

        const navigate = useNavigate();

        return (
        <>
        <Card sx={styles.Container}>

            <div>
            <Button sx={{height:0, width:0,padding:0}}
            onClick={() => navigate("/home")}>
                <ArrowBackIcon sx={{fontSize:35,color:'white', marginLeft:-43, marginTop:5}}/>
            </Button>
            </div>

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