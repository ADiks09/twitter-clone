import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import {
  BookmarkRounded,
  ExpandLessRounded,
  ExpandMoreRounded,
  HomeRounded,
  ListAltRounded,
  MessageRounded,
  NotificationsRounded,
  PersonOutline,
  SearchRounded,
  SettingsApplications,
  Twitter,
} from '@material-ui/icons'
import { MenuButtons } from './MenuButtons'
import { ChipTwit } from '../../components/ChipTwit'

const buttonsData = [
  { text: 'Home', icon: <HomeRounded /> },
  { text: 'Search', icon: <SearchRounded /> },
  { text: 'Notifications', icon: <NotificationsRounded /> },
  { text: 'Message', icon: <MessageRounded /> },
  { text: 'Bookmark', icon: <BookmarkRounded /> },
  { text: 'List', icon: <ListAltRounded /> },
  { text: 'Profile', icon: <PersonOutline /> },
  { text: 'Setting', icon: <SettingsApplications /> },
]

const useStyles = makeStyles({
  sideNav: {
    borderRight: '1px solid gray',
    maxWidth: '280px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  logo: {
    fontSize: '40px',
    color: 'white',
    width: '40px',
    margin: '15px 0',
  },
  chip: {
    marginTop: '175px',
    marginBottom: '10px',
  },
  btn: {
    textTransform: 'none',
    fontWeight: '700',
    padding: '8px',
    color: 'white',
    borderRadius: '30px',
    maxWidth: '250px',
    width: '100%',
  },
})

export const SideNav = () => {
  const classes = useStyles()
  return (
    <nav className={classes.sideNav}>
      <Twitter className={classes.logo} />
      <MenuButtons buttonsData={buttonsData} />
      <Button className={classes.btn} variant={'contained'} color={'primary'}>
        Tweet
      </Button>
      <ChipTwit
        classname={classes.chip}
        name="John"
        tag="@John0434"
        btn={<ExpandMoreRounded />}
        btnActive={<ExpandLessRounded />}
        img="https://openvisualfx.com/wp-content/uploads/2019/10/pnglot.com-twitter-bird-logo-png-139932.png"
      />
    </nav>
  )
}
