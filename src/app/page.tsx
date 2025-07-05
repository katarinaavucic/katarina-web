'use client';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import Box from '@mui/material/Box';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    name: 'InkSight',
    imgPath: '/images/inksight.png',
    description:
      'A hardware-software system that digitizes handwritten notes and turns them into intelligent, searchable chatbots using OCR and generative AI.',
    githubLink: 'https://github.com/AryanK1511/InkSight',
    hackLink: 'https://devpost.com/software/inksight',
    won: 'Best Hardware Hack',
  },
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
    name: 'Hack⬅︎to the Future',
    imgPath: '/images/hacktothefuture.png',
    description:
      'An interactive browser game where users explore programming history through 3D models and hands-on coding exercises.',
    githubLink:
      'https://github.com/katarinaavucic/hack-to-the-future/tree/main',
    hackLink: 'https://dorahacks.io/buidl/21673',
  },
  {
    name: 'protemalyze',
    imgPath: '/images/protemalyze.png',
    description:
      'An R package built to analyze and visualize the distribution of protein embeddings derived from protein Language Models (pLMs).',
    githubLink: 'https://github.com/katarinaavucic/protemalyze',
    hackLink: 'https://github.com/katarinaavucic/protemalyze',
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
    name: 'WorthIt',
    imgPath: '/images/worthit.png',
    description:
      'A Chrome extension that helps online shoppers make informed, sustainable purchasing decisions by analyzing reviews, ESG scores, and product quality.',
    githubLink: 'https://github.com/salvinax/worthit',
    hackLink: 'https://devpost.com/software/worthit-pixelpaw',
    won: 'Second Place Overall',
  },
];

export default function PageContainerBasic() {
  const theme = useTheme();

  return (
    <AppProvider
      theme={theme}
      branding={{
        title: "Katarina's Web Portfolio",
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          position: 'relative',
        }}
      >
        {/* sidebar/header */}
        <Box
          sx={{
            width: { xs: '100%', md: '30vw' },
            height: { xs: '160px', md: '100vh' },
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
            overflowY: { xs: 'auto', md: 'auto' },
            backgroundColor: 'white',
            borderRight: { xs: 'none', md: '1px solid #e0e0e0' },
            borderBottom: { xs: '1px solid #e0e0e0', md: 'none' },
            boxShadow: { xs: 1, md: 2 },
          }}
        >
          <Header />
        </Box>

        {/* project cards */}
        <Box
          sx={{
            marginLeft: { xs: 0, md: '30vw' },
            paddingTop: { xs: '180px', md: 0 },
            flex: 1,
            padding: { xs: '180px 16px 16px 16px', md: 4 },
            minHeight: '100vh',
            width: { xs: '100%', md: 'calc(100% - 30vw)' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 4,
              maxWidth: '1200px',
              margin: '0 auto',
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
        </Box>
      </Box>
    </AppProvider>
  );
}
