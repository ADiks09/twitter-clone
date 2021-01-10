import React from 'react'
import classes from './post.module.scss'
import { Button, MobileStepper } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import { IMedia } from '../../store/ducks/post/actions/IPost'

interface IProps {
  media: IMedia[];
}

const Image = ({
  url,
  originalName,
}: {
  url: string,
  originalName: string,
}) => (
  <img
    className={classes.postMedia}
    src={'api/post/img/minify/' + url}
    alt={originalName}
  />
)

/**
 * This component render image for post, if them > 1 when render Slider
 * @param media {IMedia[]} - array media data for render
 */
export const PostPhotoSlider: React.FC<IProps> = ({ media }) => {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const maxStep = media.length

  if (maxStep === 1) {
    return <Image url={media[0].url} originalName={media[0].originalName} />
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
