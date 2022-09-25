import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {useNavigate} from 'react-router-dom'

function Header(props) {
    const { title } = props;
    const navigate = useNavigate()
    return (
        <React.Fragment>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Button variant="outlined" size="small" onClick={()=>navigate('/signin')}>
            Sign In
            </Button>
            <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
            >
            {title}
            </Typography>
            
            <Button variant="outlined" size="small" onClick={()=>navigate('/signup')}>
            Sign up
            </Button>
        </Toolbar>
        
        </React.Fragment>
    );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;