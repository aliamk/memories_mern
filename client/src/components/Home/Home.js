import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'       // For dispatching actions
import { Container, Grow, Grid } from '@material-ui/core'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { getPosts } from '../../actions/posts'

import useStyles from '../../styles'
const Home = () => {

    const [currentId, setCurrentId] = useState(null) // Initial state should be null till a user clicks on edit
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7} >
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
