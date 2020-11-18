import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

export const CustomTextField = withStyles({
  root: {
    marginBottom: 20,
    '& label.Mui-focused': {
      color: '#0c9ade',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0c9ade',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0c9ade',
      },
      '&:hover fieldset': {
        borderColor: '#0c9ade',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0c9ade',
      },
    },
  },
})(TextField)
