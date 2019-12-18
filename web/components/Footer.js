import Link from 'next/link'
import { Container, Grid, Typography, makeStyles } from '@material-ui/core'
// grid-style, 2-3 columns, copyright at bottom
//add to _app.js?

const useStyles = makeStyles(theme => ({

    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
        flexShrink: 0
    },
}));

const footers = [
    {
        title: 'Company',
        description: ['About', 'Contact us'],
    },
    {
        title: 'Features',
        description: ['Product Sharing', 'Collaboration', 'Website Platform Integration', 'Share Tips about Website Development'],
    },
    {
        title: 'Resources',
        description: ['Shopify Integration', 'Magento Integration', 'WooCommerce Integration', 'Non-Platform Site'],
    },
    {
        title: 'Legal',
        description: [],
    },
];

const Footer = () =>
    {
        const classes = useStyles();
        return(
        <div className={classes.footer}>
            <Container>
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map(footer => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map(item => (
                                    <li key={item}>
                                        <Link href="#" >
                                            <a>{item}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
        )
    };

export default Footer