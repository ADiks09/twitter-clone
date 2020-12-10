import React, { FC } from 'react'
import { Button, IconButton, Tooltip, useMediaQuery } from '@material-ui/core'
import {
  AddAlert,
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
  Create as CreateIcon,
  Twitter as TwitterIcon,
} from '@material-ui/icons'
import { MenuButtons } from './MenuButtons'
import { ChipTwit } from '../../components/chip/ChipTwit'
import classes from './sideNav.module.scss'
import { screenTablet } from '../../services/material/mediaQuery'

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

interface IProps {
  firstName: string;
  tag: string;
}

export const SideNav: FC<IProps> = ({ firstName, tag }) => {
  const matches = useMediaQuery(screenTablet())

  return (
    <nav className={classes.sideNav}>
      <TwitterIcon className={classes.logo} />
      <MenuButtons buttonsData={buttonsData} styles={classes.sideNavBtn} />
      {matches ? (
        <Button className={classes.btn} variant={'contained'} color={'primary'}>
          Tweet
        </Button>
      ) : (
        <Tooltip title="Add new Tweet">
          <IconButton color={'primary'} style={{ marginBottom: '115px' }}>
            <CreateIcon />
          </IconButton>
        </Tooltip>
      )}

      <ChipTwit
        classname={classes.chip}
        name={firstName}
        tag={tag}
        btn={<ExpandMoreRounded />}
        btnActive={<ExpandLessRounded />}
        img="https://openvisualfx.com/wp-content/uploads/2019/10/pnglot.com-twitter-bird-logo-png-139932.png"
      />
    </nav>
  )
}
