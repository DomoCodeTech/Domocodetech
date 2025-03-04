import { Container, Typography, Paper, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 16 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('privacy.title')}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            {t('privacy.dataCollection')}
          </Typography>
          <Typography paragraph>
            {t('privacy.dataCollectionContent')}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            {t('privacy.dataSecurity')}
          </Typography>
          <Typography paragraph>
            {t('privacy.dataSecurityContent')}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            {t('privacy.cookies')}
          </Typography>
          <Typography paragraph>
            {t('privacy.cookiesContent')}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            {t('privacy.rights')}
          </Typography>
          <Typography paragraph>
            {t('privacy.rightsContent')}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Privacy;
