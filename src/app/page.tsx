"use client"

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
import {
  PageContainer,
  PageHeader,
  PageHeaderToolbar,
} from '@toolpad/core/PageContainer';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    name: 'Sinker.',
    imgPath: '/images/sinker.png',
    description: 'An AI-powered web app that simulates personalized phishing attacks to assess and improve employee cybersecurity awareness.',
    githubLink: 'https://github.com/emily-su-dev/Sinker',
    hackLink: 'https://dorahacks.io/buidl/23048'
  },
  {
    name: 'tin.',
    imgPath: '/images/tin.png',
    description: 'A simple, light weight command line tool and GUI to benchmark and analyze your project across different distros.',
    githubLink: 'https://github.com/AryanK1511/tin.',
    hackLink: 'https://dorahacks.io/buidl/20363'
  },
];

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function CustomPageToolbar() {
  return (
    <PageHeaderToolbar>
      <Stack direction="row" spacing={1} alignItems="center">
        <Button
          variant="outlined"
          size="small"
          color="neutral"
          startIcon={<DownloadIcon fontSize="inherit" />}
        >
          Resume
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="neutral"
          startIcon={<PrintIcon fontSize="inherit" />}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="neutral"
          startIcon={<PrintIcon fontSize="inherit" />}
        >
          LinkedIn
        </Button>
      </Stack>
    </PageHeaderToolbar>
  );
}

function CustomPageHeader() {
  return <PageHeader slots={{ toolbar: CustomPageToolbar }} />;
}

export default function PageContainerBasic(props: any) {
  const theme = useTheme();

  return (
    <AppProvider
      theme={theme}
      branding={{
        title: 'ACME Inc.',
      }}
    >
      <Paper sx={{ p: 2, width: '100%' }}>
        <PageContainer
          slots={{
            header: CustomPageHeader,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                imgPath={project.imgPath}
                githubLink={project.githubLink}
                hackLink={project.hackLink}
              />
            ))}
          </Box>
        </PageContainer>
      </Paper>
    </AppProvider>
  );
}
