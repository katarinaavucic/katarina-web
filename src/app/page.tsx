'use client';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
import { PageContainer, PageHeader } from '@toolpad/core/PageContainer';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CustomPageToolbar from './components/CustomPageToolbar';
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    name: 'Sinker',
    imgPath: '/images/sinker.png',
    description:
      'An AI-powered web app that simulates personalized phishing attacks to assess and improve employee cybersecurity awareness.',
    githubLink: 'https://github.com/emily-su-dev/Sinker',
    hackLink: 'https://dorahacks.io/buidl/23048',
    won: 'Best Use of Google Developer Tools',
  },
  {
    name: 'tin.',
    imgPath: '/images/tin.png',
    description:
      'A simple, light weight command line tool and GUI to benchmark and analyze your project across different distros.',
    githubLink: 'https://github.com/AryanK1511/tin.',
    hackLink: 'https://dorahacks.io/buidl/20363',
    won: 'Second Place: Best Developer Tool',
  },
  {
    name: 'Hack⬅︎to the Future',
    imgPath: '/images/hacktothefuture.png',
    description:
      'An interactive browser game where users explore programming history through 3D models and hands-on coding exercises.',
    githubLink:
      'https://github.com/katarinaavucic/hack-to-the-future/tree/main',
    hackLink: 'https://dorahacks.io/buidl/21673',
  },
  {
    name: 'WorthIt',
    imgPath: '/images/worthit.png',
    description:
      'A Chrome extension that helps online shoppers make informed, sustainable purchasing decisions by analyzing reviews, ESG scores, and product quality.',
    githubLink: 'https://github.com/salvinax/worthit',
    hackLink: 'https://devpost.com/software/worthit-pixelpaw',
    won: 'Second Place Overall',
  },
  {
    name: 'protemalyze',
    imgPath: '/images/protemalyze.png',
    description:
      'An R package built to analyze and visualize the distribution of protein embeddings derived from protein Language Models (pLMs).',
    githubLink: 'https://github.com/katarinaavucic/protemalyze',
    hackLink: 'https://github.com/katarinaavucic/protemalyze',
  },
];

function CustomPageHeader() {
  return (
    <Box sx={{ width: '100%' }}>
      <PageHeader slots={{ toolbar: CustomPageToolbar }} />
    </Box>
  );
}

export default function PageContainerBasic(props: any) {
  const theme = useTheme();

  return (
    <AppProvider
      theme={theme}
      branding={{
        title: "Katarina's Web Portfolio",
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
                won={project.won}
              />
            ))}
          </Box>
        </PageContainer>
      </Paper>
    </AppProvider>
  );
}
