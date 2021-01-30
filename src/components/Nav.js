//imports 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
  barStyle:{
    background: 'linear-gradient(45deg, #08DCCA 30%, #8DDAC8 90%)'
  },
  menuStyle: {
    fontSize: '30px',
    color: 'White'
  },
  titleStyle: {
    fontSize: '30px',
    fontWeight: 'bold',
    flexGrow: 1
  },
  homeStyle: {
    fontSize: '30px',
    color: 'white',
    paddingRight: '5px'
  },
  accStyle: {
    fontSize: '30px',
    color: 'white',
    paddingRight: '5px'
  }
})

const Nav = () => {
  const style = useStyle();
  return (
    <div>
      <AppBar className={style.barStyle}>
        <Toolbar>
          <IconButton>
            <MenuIcon className={style.menuStyle}/>
          </IconButton>
          <Typography className={style.titleStyle}>
            
          </Typography>
            <IconButton>
              <HomeIcon className={style.homeStyle}/>
              <AccountCircleIcon className={style.accStyle}/>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav
