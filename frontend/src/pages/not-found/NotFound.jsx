import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import { Twitter as TwitterIcon } from '@material-ui/icons'
import classes from './not-found.module.scss'

export const NotFound = () => {
	const history = useHistory();

	return (
		<Grid
            container
            direction="column"
            justify="center"
			alignItems="center"
          >
			<TwitterIcon className={classes.logo} />
			<Grid
				direction="column"
				justify="space-between"
				alignItems="flex-start"
				style={{display: "flex", flexDirection: "column", alignItems: "center"}}
			>
				<h1 className={classes.title}>
					<span>404</span>
					<span>Not page found :(</span>
				</h1>
				<Button color="inherit" onClick={() => history.goBack()}>To back</Button>
			</Grid>
          </Grid>
	)
}