import React from 'react'
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
import { ChipTwit } from '../../components/Chip/ChipTwit'
import classes from './sideNav.module.scss'

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

export const SideNav = () => {
  return (
    <nav className={classes.sideNav}>
      <Twitter className={classes.logo} />
      <MenuButtons buttonsData={buttonsData} styles={classes.sideNavBtn} />
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
