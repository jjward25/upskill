"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from './typography';
import content from '../employees.json';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

 const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function EmployeeCards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <main className='grid grid-cols-[20%_80%] min-h-screen w-full max-w-full'>
      <div className='flex flex-col min-h-screen bg-white rounded-r-xl p-5'>
        <h3 className='h-min font-bold mb-5'>My Team</h3>
        <h3 className='h-min font-bold mb-5'>Search Keywords:</h3>
        <p>{`Visualizing employee data this way helps with staffing projects and management 1:1s, gives HRs a view of internal candidates for openings, and can be used to steer professional development towards company future state goals.`}</p>
        </div> 
      <div className='flex flex-wrap h-min p-5 min-w-fit'>

      <div className='flex flew-wrap h-min font-bold mb-5'>{content.accountExecutives &&
        content.accountExecutives.map((item, i) => (
            <Card sx={{ Width: 345, Height:420 }} key={i} className='rounded-2xl mx-5 my-5 w-345'>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.firstLast}
                subheader= {item.role}
              />
              <CardMedia
                component="img"
                height="194"
                image={item.imgLink}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Company Start Date: {item.companyStartDate}
                  <br/>Role Start Date: {item.roleStartDate}
                  <br/>Role Tenure Rank: {item.roleTenureRank}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph className='font-bold text-lg'>Current Role:</Typography>
                  <Typography paragraph className='font-bold'>Key Metrics:</Typography>
                  <Typography paragraph>
                    Customer Satisfaction: {item.roleDevelopment.rolePerformance.customerSatisfaction}
                    <br/>Signed Deals: {item.roleDevelopment.rolePerformance.signedDeals}
                    <br/>Gross Renewal Rate: {item.roleDevelopment.rolePerformance.grossRenewalARR}
                    <br/>Net Renewal Rate: {item.roleDevelopment.rolePerformance.netRenewalARR}
                    <br/>Avg Lifetime Value: {item.roleDevelopment.rolePerformance.avgCustomerLifetimeValue}
                  </Typography>
                  <Typography paragraph className='font-bold'>Certifications + Enablement:</Typography>
                  <Typography paragraph>
                     {item.roleDevelopment.certificationsEnablement}
                  </Typography>
                  <Typography paragraph className='font-bold'>Workflow Analytics:</Typography>
                  <Typography paragraph>
                     Average Book Size L12 Mos: {item.roleDevelopment.workflowAnalytics.avgBookSize}
                     <br/>Avg Monthly Client Time: {item.roleDevelopment.workflowAnalytics.avgClientTime}Hrs
                  </Typography>
                  <Typography paragraph className='font-bold'>Other:</Typography>
                  <Typography paragraph>
                    Note: {item.roleDevelopment.Other.Note}
                  </Typography>

                  <Typography paragraph className='font-bold text-lg'>Career:</Typography>
                  <Typography paragraph className='font-bold'>Common Next Roles:</Typography>
                  <Typography paragraph>
                    {item.careerDevelopment.commonNextRoles}
                  </Typography>
                  <Typography paragraph className='font-bold'>Related Certfications + Enablement:</Typography>
                  <Typography paragraph>
                    {item.careerDevelopment.relatedCertificationsEnablement}
                  </Typography>
                  <Typography paragraph className='font-bold'>Prior Experience:</Typography>
                  <Typography paragraph>
                    SkillX: {item.careerDevelopment.priorExperience.Skill}
                  </Typography>
                  
                </CardContent>
              </Collapse>
            </Card>
        ))
      }
     </div>

     </div>
    </main>
);
}
