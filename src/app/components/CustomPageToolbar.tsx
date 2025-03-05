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

export default function CustomPageToolbar() {
  return (
    <PageHeaderToolbar
      sx={{
        textAlign: 'left',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          py: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="/images/headshot_circle.png"
            sx={{ width: 100, height: 100, mr: 2 }}
          />
          <Box>
            <Typography variant="h6">Katarina Vucic</Typography>
            <Typography variant="body2" color="textSecondary">
              Computer Science and Bioinformatics Student
            </Typography>
          </Box>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
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
    </PageHeaderToolbar>
  );
}
