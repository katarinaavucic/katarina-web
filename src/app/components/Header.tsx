import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import WorkIcon from '@mui/icons-material/Work';
import { PageHeaderToolbar } from '@toolpad/core/PageContainer';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <PageHeaderToolbar
      sx={{
        textAlign: 'left',
        px: { xs: 2, sm: 3, md: 4 },
        py: 2,
        width: '100%',
        backgroundColor: '#f0f0f0',
        flexDirection: 'column',
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          width: '100%',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="/images/headshot.jpg"
            sx={{
              width: 80,
              height: 80,
              mr: 2,
              flexShrink: 0,
            }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.75rem' },
                fontWeight: 'bold',
              }}
            >
              Katarina Vucic
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
            >
              Computer Science and Bioinformatics Student
            </Typography>
          </Box>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
          width="100%"
        >
          <Button
            variant="outlined"
            size="small"
            color="primary"
            href="mailto:katarina.vucic03@gmail.com"
            startIcon={<GoogleIcon />}
          >
            Email
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            href="https://drive.google.com/drive/folders/1RMs1L8V0wGy6CPrxxTSwm0Eim_erVqRi?usp=sharing"
            startIcon={<WorkIcon />}
          >
            Resume
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            href="https://github.com/katarinaavucic/"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            href="https://www.linkedin.com/in/katarina-vucic-42839a228/"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </Stack>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{ color: 'black', fontSize: { xs: '0.9rem', md: '1rem' } }}
        >
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
