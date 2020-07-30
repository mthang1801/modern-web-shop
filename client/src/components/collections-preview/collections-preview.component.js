import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  Title,
  Items,
} from "./collections-preview.styles";
import { withRouter } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CollectionItems from "../collection-items/collection-items.component";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "95%",
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const CollectionsPreview = ({
  title,
  id,
  routeName,
  items,
  history,
  match,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const matches = useMediaQuery("(min-width:800px)");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  let groupCollections = [];
  let collectionsPerPage = [];
  console.log(items);
  items.forEach((item, idx) => {
    collectionsPerPage.push(item);
    if (collectionsPerPage.length == 4 || idx == items.length - 1) {
      groupCollections.push(collectionsPerPage);
      collectionsPerPage = [];
    }
  });
  const maxSteps = groupCollections.length;
  return (
    <CollectionPreviewContainer>
      <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title}
      </Title>
      {matches && (
        <div className={classes.root}>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {groupCollections.map((collectionItems, idx) => (
              <CollectionItems key={idx} items={collectionItems} />
            ))}
            {items.map((item, index) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </SwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
      )}

      <Items>
        {items
          .filter((_, id) => id < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Items>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionsPreview);
