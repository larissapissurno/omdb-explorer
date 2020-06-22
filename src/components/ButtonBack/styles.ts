import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const ButtonGoBack = withStyles({
  root: {
    float: 'right',
    marginTop: '-60px',
    marginRight: '20px',
    display: 'block'
  },
})(Button);
