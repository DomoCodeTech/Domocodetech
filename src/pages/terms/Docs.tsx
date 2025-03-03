import { Container, Typography, Paper, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Docs = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 16 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('documentation.title')}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            {t('documentation.apiSection')}
          </Typography>
          <Typography paragraph>
            {t('documentation.apiDescription')}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            {t('documentation.servicesSection')}
          </Typography>
          <Typography paragraph>
            {t('documentation.servicesDescription')}
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            {t('documentation.integrationsSection')}
          </Typography>
          <Typography paragraph>
            {t('documentation.integrationsDescription')}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Docs;
