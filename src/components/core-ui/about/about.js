import { Container } from '@mui/material';
import React, { useContext } from 'react';
import codings from '../../../assets/lottie/coding.json';
import { ThemeContext } from '../../../contexts/theme-context';
import { aboutData } from '../../../data/aboutData';
import AnimationLottie from '../../helper/animation-lottie';
import './about.css';
import { Card } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
function About() {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        about : {
            backgroundColor:theme.quaternary,
        },
    }));

    const classes = useStyles();
    //const { theme } = useContext(ThemeContext);
    return (
        <div  className={`About-card ${classes.About}`} style={{ backgroundColor: theme.secondary }}>
            <Container className="about" id="about">
                <div className="line-styling">
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                </div>
                <card className="about-body">
                    <div className="about-description">
                        <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                        <p style={{ color: theme.tertiary }}>{aboutData.description1}<br /><br />{aboutData.description2}</p>
                    </div>
                    
                    <div className="about-animation">
                        <AnimationLottie animationPath={codings} />
                    </div>
                    
                </card>

            </Container>
        </div>
    )
}

export default About;
