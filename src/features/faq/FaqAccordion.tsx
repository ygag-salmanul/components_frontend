
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import styles from './FaqAccordion.module.scss'
import AddIcon from '@mui/icons-material/Add';
const FaqAccordion = () => {
  return (
    <div className={`${styles["content"]} wrapper`}>
      <div className="">
        <p className={styles["content-p"]}>We know you are curious!</p>
        <h3 className={styles["content-main"]}>Frequently Asked Questions</h3>
      </div>
      <div className={`styles["accordion-wrapper"] landing-accordion`}>
        <Accordion className={styles["accordion"]}>
          <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
            <Typography fontSize={20} height={32}>
              Where can I use my Nakheel Mall Gift Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={16}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles["accordion"]}>
          <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
            <Typography fontSize={20}>
              How can I purchase a Nakheel Mall Gift Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={16} lineHeight={1.5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded className={styles["accordion"]}>
          <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
            <Typography fontSize={20}>
              How do I activate my Nakheel Mall Gift Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={16} lineHeight={1.5}>
              To activate your Nakheel Mall Gift Card, follow these simple
              steps:
              <ul>
                <li>
                  Visit our website and register for our cardholder portal, if
                  you haven't already.
                </li>
                <li>
                  Log in to your cardholder portal account and navigate to the
                  activation section.
                </li>
                <li>
                  Enter the necessary details, including the unique code found
                  on the card.
                </li>
                <li>
                  Once the activation is complete, your gift card is ready to
                  use for a delightful shopping and dining experience at Nakheel
                  Mall
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles["accordion"]}>
          <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
            <Typography fontSize={20}>
              How can I check the balance on my Gift Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={16}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles["accordion"]}>
          <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
            <Typography fontSize={20}>
              How can I check the balance on my Gift Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={16}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles["accordion"]}>
          <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
            <Typography fontSize={20}>
              How can I check the balance on my Gift Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={16}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles["accordion"]}>
          <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
            <Typography fontSize={20}>
              How can I check the balance on my Gift Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={16}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles["accordion"]}>
          <AccordionSummary expandIcon={<AddIcon fontSize="large" />}>
            <Typography fontSize={20}>
              How can I check the balance on my Gift Card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={16}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default FaqAccordion;
