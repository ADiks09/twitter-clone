import React, { FC } from 'react'
import { Skeleton } from '@material-ui/lab'
import { Button } from '@material-ui/core'

interface IProps {
  icon: React.ReactElement
  content: string
  loading: boolean
  className?: any
}

/**
 * This button for post's components with skeleton
 */
export const PostButton: FC<IProps> = ({ icon, content, loading, className }) => (
  <Button className={className} startIcon={icon}>
    {loading ? (
      <Skeleton
        animation="wave"
        variant="text"
        width={50}
        height={25}
        style={{ borderRadius: '10px' }}
      />
    ) : (
      content
    )}
  </Button>
)
