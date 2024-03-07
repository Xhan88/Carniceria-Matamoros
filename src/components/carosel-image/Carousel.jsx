import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/eiliv-aceron-AQ_BdsvLgqA-unsplash.jpg?alt=media&token=2f3d4cd1-9aac-499c-b6f8-abf1084e2856',
  },
  {
    label: 'Bird',
    imgPath:
      'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/charlie-solorzano-utTJUcvNXXo-unsplash.jpg?alt=media&token=61bbc301-8e99-418a-8e9e-78e983c410b3',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/kyle-mackie-QH8SHBARVVk-unsplash.jpg?alt=media&token=c00820d6-2170-4364-adce-84792c101e66',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://firebasestorage.googleapis.com/v0/b/carniceria-matamoros.appspot.com/o/madie-hamilton-GXehL5_crJ4-unsplash.jpg?alt=media&token=55fa3d3b-01b4-42c7-b25a-1b02a8b6eb0f',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1500, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 100,
          pl: 1,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 900,
                  display: 'block',
                  maxWidth: 1500,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;