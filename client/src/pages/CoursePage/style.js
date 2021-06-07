import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,0,0,1)',
    fontWeight: 'bold'
  },
  startIconButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: '2em'
  },
  root: {
    flexGrow: 1,
    borderRadius: 15,
    margin: '30px 0',
    marginBottom: '30px'
    
  },

  content:{
    margin: '30px 0',
  },

  [theme.breakpoints.down('sm')] : {
    mainContainer:{
      flexDirection: "column-reverse"
    }
  }


}));