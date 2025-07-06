import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface ProjectCardProps {
  name: string;
  description: string;
  imgPath: string;
  githubLink: string;
  hackLink: string;
  won: string | undefined;
}

export default function ProjectCard({
  name,
  description,
  imgPath,
  githubLink,
  hackLink,
  won,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        maxWidth: '500px',
        maxHeight: '400px',
        minWidth: '400px',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        flexGrow: 1,
        justifyContent: 'space-between',
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#f0f0f0',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      {/* image */}
      <CardMedia
        component="img"
        alt={name}
        image={imgPath}
        sx={{
          height: '200px',
          objectFit: 'cover',
        }}
      />

      {/* text */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>

      {/* buttons */}
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Stack spacing={1} direction="row">
          <Button
            variant="outlined"
            size="small"
            color="primary"
            href={githubLink}
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            href={hackLink}
            target="_blank"
          >
            Project
          </Button>
        </Stack>
        {won && (
          <Tooltip title={won}>
            <EmojiEventsIcon sx={{ color: 'gold', ml: 1 }} />
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
}
