import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
        maxWidth: 345,
        position: 'relative',
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#f0f0f0',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia component="img" alt={name} height="140" image={imgPath} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Button size="small" href={githubLink} target="_blank">
            GitHub
          </Button>
          <Button size="small" href={hackLink} target="_blank">
            Project
          </Button>
        </Box>
        {won && (
          <Tooltip title={won}>
            <EmojiEventsIcon sx={{ color: 'gold', ml: 1 }} />
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
}
