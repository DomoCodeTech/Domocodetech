import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import RouterIcon from '@mui/icons-material/Router';
import BuildIcon from '@mui/icons-material/Build';

interface ServiceIconProps {
  name: string;
  sx?: object;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, sx = {} }) => {
  const icons: { [key: string]: React.ReactElement } = {
    Code: <CodeIcon sx={sx} />,
    Chip: <MemoryIcon sx={sx} />,
    Smart: <HomeWorkIcon sx={sx} />,
    Robot: <PrecisionManufacturingIcon sx={sx} />,
    Network: <RouterIcon sx={sx} />,
    Support: <BuildIcon sx={sx} />,
  };

  return icons[name] || null;
}; 