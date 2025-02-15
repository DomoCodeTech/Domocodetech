import { useState, useEffect } from 'react';
import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiArduino,
  SiRaspberrypi,
  SiRobotframework,
  SiHomeassistant,
  SiSmartthings,
  SiAndroid,
  SiApple,
  SiFirebase,
  SiAmazon,
  SiMongodb,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type IconName = keyof typeof iconColors;

const iconColors = {
  SiReact: '#61DAFB',
  SiPython: '#3776AB',
  SiJavascript: '#F7DF1E',
  SiTypescript: '#3178C6',
  SiNodedotjs: '#339933',
  SiArduino: '#00979D',
  SiRaspberrypi: '#A22846',
  SiRobotframework: '#000000',
  SiHomeassistant: '#41BDF5',
  SiSmartthings: '#15BFFF',
  SiAndroid: '#3DDC84',
  SiApple: '#000000',
  SiFirebase: '#FFCA28',
  SiAmazon: '#FF9900',
  SiMongodb: '#47A248',
} as const;

interface IconInfo {
  Icon: IconType;
  label: string;
}

interface IconGroup {
  title: string;
  icons: IconInfo[];
}

const TechIcons = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentGroup, setCurrentGroup] = useState(0);
  
  const iconGroups: IconGroup[] = [
    {
      title: 'Web Development',
      icons: [
        { Icon: SiReact, label: 'React' },
        { Icon: SiJavascript, label: 'JavaScript' },
        { Icon: SiTypescript, label: 'TypeScript' },
        { Icon: SiNodedotjs, label: 'Node.js' },
        { Icon: SiFirebase, label: 'Firebase' },
      ]
    },
    {
      title: 'IoT & Robotics',
      icons: [
        { Icon: SiArduino, label: 'Arduino' },
        { Icon: SiRaspberrypi, label: 'Raspberry Pi' },
        { Icon: SiRobotframework, label: 'Robotics' },
        { Icon: SiHomeassistant, label: 'Home Assistant' },
        { Icon: SiSmartthings, label: 'Smart Things' },
      ]
    },
    {
      title: 'Mobile & Cloud',
      icons: [
        { Icon: SiAndroid, label: 'Android' },
        { Icon: SiApple, label: 'iOS' },
        { Icon: SiAmazon, label: 'AWS' },
        { Icon: SiMongodb, label: 'MongoDB' },
        { Icon: SiPython, label: 'Python' },
      ]
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % iconGroups.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [iconGroups.length]);

  const getIconColor = (Icon: IconType, isDarkMode: boolean) => {
    const iconName = Icon.name as IconName;
    if (iconName === 'SiApple' || iconName === 'SiRobotframework') {
      return isDarkMode ? '#FFFFFF' : '#000000';
    }
    return iconColors[iconName];
  };

  const renderCarousel = (isDesktop = false) => {
    const currentIcons = iconGroups[currentGroup].icons;
    const isDarkMode = theme.palette.mode === 'dark';

    return (
      <Box
        sx={{
          width: '100%',
          height: isDesktop ? '200px' : '150px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant={isDesktop ? "h5" : "subtitle2"}
          sx={{
            mb: isDesktop ? 4 : 2,
            color: isDarkMode ? 'white' : 'text.primary',
            fontWeight: 600,
          }}
        >
          {iconGroups[currentGroup].title}
        </Typography>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              gap: isDesktop ? '24px' : '12px',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {currentIcons.map(({ Icon, label }, index) => (
              <motion.div
                key={`${currentGroup}-${index}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <motion.div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: isDesktop ? '70px' : '45px',
                    height: isDesktop ? '70px' : '45px',
                    borderRadius: '50%',
                    background: isDarkMode
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <motion.div
                    animate={{ y: isDesktop ? [-5, 5] : [-3, 3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    <Icon style={{ 
                      fontSize: isDesktop ? '2.2rem' : '1.4rem',
                      color: getIconColor(Icon, isDarkMode),
                    }} />
                  </motion.div>
                </motion.div>
                <Box
                  sx={{
                    fontSize: isDesktop ? '0.9rem' : '0.7rem',
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    maxWidth: isDesktop ? '80px' : '60px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {label}
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Box>
    );
  };

  return (
    <Box sx={{ position: 'relative', zIndex: 1 }}>
      {renderCarousel(!isMobile)}
    </Box>
  );
};

export default TechIcons; 