import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Form, Media } from 'reactstrap';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '20vw',
        height: '25vh',
        marginLeft: '70vw',
        marginTop: '20vh'
    },
    background: {
        height: '80vh',
        overflow: 'hidden',
        width: '100vw',
        // backgroundImage: `url(${"/static/img/frontpage1.jpg"})`
        background: 'linear-gradient(15deg, #256F5B 0%, #8C2F5E 100%)',
        color: '#ffffff',
    },
    mainPage: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
    },
    container: {
        marginTop: '5vh'
    },
    mainText: {
        fontSize: '50px',
        marginTop: '20vh',
        float: 'right'
    },
    mainInfo: {
        fontSize: '20px',
        marginTop: '20vh',
        float: 'right'
    },
    headImage: {
        height: '10vh',
        width: 'auto',
    }
}));

const Index = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainPage}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.background} >
                    <Container className={classes.container}>
                        <div className="row">

                            <div className="col-lg">
                                <img className={classes.headImg} src="../static/img/shopping.png" alt="Generic placeholder image" />
                            </div>
                            <div className="col-lg">
                                <div>
                                    <h1 className={classes.mainText}>Ecommerce Collaboration Made Simple.</h1>
                                    <p className={classes.mainInfo}>Meet other ecommerce entrepreneurs and share products across sites with the click of a button</p>
                                </div>
                            </div>
                        </div>



                    </Container>

                    <Paper className={classes.paper}>
                        <h2>Signup for Our Newsletter!</h2>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <h2>Cross Promote Products</h2>
                        <img className={classes.headImage} src="/static/img/handshake.png" alt="Generic placeholder image" />
                        <p>
                            Use your platform's search and messaging to find similar Ecommerce sites to partner with on social media.
                </p>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <h2>Share Products</h2>
                        <img className={classes.headImage} src="../static/img/shopping.png" alt="Generic placeholder image" />
                        <p>
                            Easily find an Ecommerce site to cross post products with in order to increase product visibility and expand your stores content.
                </p>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >
                        <h3>Network with other Ecommerce founders and ecommerce professionals</h3>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >
                        <h3>Network with other Ecommerce founders and ecommerce professionals</h3>
                    </Paper>
                </Grid>

            </Grid >
        </div >
    );
};

export default Index;