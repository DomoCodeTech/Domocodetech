import { Container, Typography, Paper, Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const Help = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 16 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('help.title')}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{t('help.faq.general')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{t('help.faq.generalContent')}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{t('help.faq.services')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{t('help.faq.servicesContent')}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{t('help.faq.support')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{t('help.faq.supportContent')}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Paper>
    </Container>
  );
};

export default Help;
