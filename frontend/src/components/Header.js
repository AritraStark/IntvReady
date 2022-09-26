import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'
import Link from '@mui/material/Link';
import {useDispatch, useSelector} from 'react-redux'
import Avatar from '@mui/material/Avatar';


function Header({handleLogout}) {
    const navigate = useNavigate()
    const {success,userDetails} = useSelector(state=>state.login)
    return (
        <React.Fragment>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            {(!userDetails._id)?
            <Button variant="outlined" size="small" onClick={()=>navigate('/signin')}>
            Sign In
            </Button>:
            <Button variant="outlined" size="small" onClick={handleLogout}>
            Log Out
            </Button>}
            <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
            >
                <Link underline='none' color='inherit' href='/'>
                    Discussion Forum
                </Link>
            
            </Typography>
            {(!userDetails._id)?
            <Button variant="outlined" size="small" onClick={()=>navigate('/signup')}>
            Sign up
            </Button>:
            <Avatar>{userDetails.name[0]}</Avatar>
            }
        </Toolbar>
        
        </React.Fragment>
    );
}


export default Header;