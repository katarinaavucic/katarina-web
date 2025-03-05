import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import { PageHeaderToolbar } from '@toolpad/core/PageContainer';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <PageHeaderToolbar
      sx={{
        textAlign: 'left',
        pl: 2,
        pr: 2,
        width: '100%',
        backgroundColor: '#f0f0f0',
        flexDirection: 'column',
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          p: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            pr: 1,
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="/images/headshot_circle.png"
            sx={{ width: '50%', maxWidth: 200, height: 'auto', mr: 2 }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.75rem' },
                fontWeight: 'bold',
              }}
            >
              Katarina Vucic
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}
            >
              Computer Science and Bioinformatics Student
            </Typography>
          </Box>
        </Box>
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={1}
          alignItems="center"
        >
          <Button
            variant="outlined"
            size="small"
            color="neutral"
            href="https://drive.google.com/drive/folders/1RMs1L8V0wGy6CPrxxTSwm0Eim_erVqRi?usp=sharing"
            startIcon={<GoogleIcon fontSize="inherit" />}
          >
            Resume
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="neutral"
            href="https://github.com/katarinaavucic/"
            startIcon={<GitHubIcon fontSize="inherit" />}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="neutral"
            href="https://www.linkedin.com/in/katarina-vucic-42839a228/"
            startIcon={<LinkedInIcon fontSize="inherit" />}
          >
            LinkedIn
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          pl: 2,
          pr: 2,
          pb: 2,
          mb: 2,
        }}
      >
        <Typography sx={{ color: 'black' }}>
          Hello! My name is Katarina Vucic, and I am a fourth-year undergraduate
          student at the University of Toronto, specializing in Bioinformatics
          and Computer Science. I currently work part-time at Lotlinx, where I
          train machine learning tree and neural network models to create
          predictive models that help automotive dealerships sell cars. I also
          do research at the BHKLab within the Princess Margaret Cancer Research
          Centre, where I am building a cancer tumor image segmentation pipeline
          to improve disease progression analysis in clinical trials. I am a
          hackathon enthusiast and love collaborating with others to build
          creative projects under tight deadlines while learning new
          technologies along the way!
        </Typography>
      </Box>
    </PageHeaderToolbar>
  );
}
