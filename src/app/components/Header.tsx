import * as React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: '100%' },
        padding: { xs: 2, md: 3 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'column' },
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      {/* profile */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column' },
          alignItems: 'center',
          textAlign: { xs: 'left', md: 'center' },
          mb: 2,
          width: '100%',
          gap: { xs: 2, md: 0 },
        }}
      >
        <Avatar
          alt="Profile Picture"
          src="/images/headshot.jpg"
          sx={{
            width: { xs: 80, md: '75%' },
            height: { xs: 80, md: 'auto' },
            mb: { xs: 0, md: 2 },
            border: '3px solid #e0e0e0',
            flexShrink: 0,
          }}
        />
        <Box sx={{ flex: { xs: 1, md: 'none' } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              color: '#333',
              fontSize: { xs: '1.5rem', md: '1.75rem' },
            }}
          >
            Katarina Vucic
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.4,
            }}
          >
            Computer Science and Bioinformatics Graduate
          </Typography>
        </Box>
      </Box>

      {/* buttons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: { xs: 0.5, md: 1 },
          width: '100%',
          mb: 2,
          justifyContent: 'center',
        }}
      >
        <Button
          variant="outlined"
          size="small"
          color="primary"
          href="mailto:katarina.vucic03@gmail.com"
          startIcon={<GoogleIcon />}
          sx={{
            justifyContent: 'center',
            textTransform: 'none',
            py: { xs: 0.5, md: 1 },
            px: { xs: 1, md: 1.5 },
            minWidth: 'auto',
            flex: '1 1 0',
            fontSize: { xs: '0.7rem', md: '0.75rem' },
            '& .MuiButton-startIcon': {
              marginRight: { xs: 0.5, md: 1 },
            },
          }}
        >
          Email
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          href="https://drive.google.com/drive/folders/1RMs1L8V0wGy6CPrxxTSwm0Eim_erVqRi?usp=sharing"
          startIcon={<WorkIcon />}
          sx={{
            justifyContent: 'center',
            textTransform: 'none',
            py: { xs: 0.5, md: 1 },
            px: { xs: 1, md: 1.5 },
            minWidth: 'auto',
            flex: '1 1 0',
            fontSize: { xs: '0.7rem', md: '0.75rem' },
            '& .MuiButton-startIcon': {
              marginRight: { xs: 0.5, md: 1 },
            },
          }}
        >
          Resume
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          href="https://github.com/katarinaavucic/"
          startIcon={<GitHubIcon />}
          sx={{
            justifyContent: 'center',
            textTransform: 'none',
            py: { xs: 0.5, md: 1 },
            px: { xs: 1, md: 1.5 },
            minWidth: 'auto',
            flex: '1 1 0',
            fontSize: { xs: '0.7rem', md: '0.75rem' },
            '& .MuiButton-startIcon': {
              marginRight: { xs: 0.5, md: 1 },
            },
          }}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          href="https://www.linkedin.com/in/katarina-vucic-42839a228/"
          startIcon={<LinkedInIcon />}
          sx={{
            justifyContent: 'center',
            textTransform: 'none',
            py: { xs: 0.5, md: 1 },
            px: { xs: 1, md: 1.5 },
            minWidth: 'auto',
            flex: '1 1 0',
            fontSize: { xs: '0.7rem', md: '0.75rem' },
            '& .MuiButton-startIcon': {
              marginRight: { xs: 0.5, md: 1 },
            },
          }}
        >
          LinkedIn
        </Button>
      </Box>

      {/* bio */}
      <Box
        sx={{
          flex: 1,
          width: '100%',
          overflowY: 'auto',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#555',
            lineHeight: 1.6,
            fontSize: '0.95rem',
            textAlign: 'left',
          }}
        >
          Hi! I&apos;m Katarina Vucic, a recent Computer Science and
          Bioinformatics graduate from the University of Toronto. I have
          experience training and applying machine learning models in both
          industry and research settings, and enjoy building tools that make
          data more accessible. Most recently, I worked at Lotlinx, where I
          developed predictive models to support automotive dealerships, and at
          the Princess Margaret Cancer Centre, where I built a medical image
          segmentation pipeline to aid in clinical trial analysis. I&apos;m a
          hackathon enthusiast, and love collaborating on fast-paced, creative
          projects that explore new technologies and ideas!
        </Typography>
      </Box>
    </Box>
  );
}
