import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ProjectCardProps {
  name: string;
  description: string;
  imgPath: string;
  githubLink: string;
  hackLink: string;
}

export default function ProjectCard({ name, description, imgPath, githubLink, hackLink }: ProjectCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={imgPath}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={githubLink} target="_blank">GitHub</Button>
        <Button size="small" href={hackLink} target="_blank">Project</Button>
      </CardActions>
    </Card>
  );
}
