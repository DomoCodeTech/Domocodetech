import { Container, Typography, Paper, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 16 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('terms.title')}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            {t('terms.acceptance')}
          </Typography>
          <Typography paragraph>
            {t('terms.acceptanceContent')}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            {t('terms.services')}
          </Typography>
          <Typography paragraph>
            {t('terms.servicesContent')}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            {t('terms.intellectual')}
          </Typography>
          <Typography paragraph>
            {t('terms.intellectualContent')}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            {t('terms.liability')}
          </Typography>
          <Typography paragraph>
            {t('terms.liabilityContent')}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Terms;
