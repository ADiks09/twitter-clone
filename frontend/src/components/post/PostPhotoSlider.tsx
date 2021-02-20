import React from 'react'
import classes from './post.module.scss'
import { Button, MobileStepper } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import { Alert, Skeleton } from '@material-ui/lab'
import { IMedia } from '../../interfaces/IPost'

interface IProps {
  media: IMedia[];
}

const Image = ({
  url,
  originalName,
  setLoadError,
}: {
  url: string,
  originalName: string,
  setLoadError: Function,
}) => {
  const [loading, setLoading] = React.useState<boolean>(true)

  return (
    <>
      <img
        loading="lazy"
        style={{ overflow: loading ? 'hidden' : 'visible' }}
        className={loading ? '' : classes.postMedia}
        onLoad={() => setLoading(false)}
        onError={() => setLoadError(true)}
        src={'api/post/img/minify/' + url}
        alt={originalName}
      />
      {loading && (
        <Skeleton
          animation="wave"
          variant="rect"
          height="200px"
          className={classes.postMedia}
          style={{ borderRadius: '20px' }}
        />
      )}
    </>
  )
}

/**
 * This component render image for post, if them > 1 when render Slider
 * @param media {IMedia[]} - array media data for render
 */
export const PostPhotoSlider: React.FC<IProps> = ({ media }) => {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [loadError, setLoadError] = React.useState<boolean>(false)
  const [visiblyAlert, setVisiblyAlert] = React.useState<boolean>(true)

  if (loadError) {
    return (
      <>
        {visiblyAlert && (
          <Alert onClose={() => setVisiblyAlert(false)} severity="error">
            The image of this post could not be loaded
          </Alert>
        )}
      </>
    )
  }

  const maxStep = media.length

  if (maxStep === 1) {
    return (
      <Image
        setLoadError={setLoadError}
        url={media[0].url}
        originalName={media[0].originalName}
      />
    )
  }

  const nextStep = () => {
    setActiveStep((prevState) => prevState + 1)
    if (activeStep === maxStep - 1) setActiveStep(0)
  }

  const prevStep = () => {
    setActiveStep((prevState) => prevState - 1)
    if (activeStep === 0) setActiveStep(maxStep - 1)
  }

  return (
    <>
      <Image
        setLoadError={setLoadError}
        url={media[activeStep].url}
        originalName={media[activeStep].originalName}
      />
      <MobileStepper
        style={{ marginRight: '20px', backgroundColor: 'transparent' }}
        steps={maxStep}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" color="primary" onClick={nextStep}>
            Next
            {<KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" color="primary" onClick={prevStep}>
            {<KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </>
  )
}
