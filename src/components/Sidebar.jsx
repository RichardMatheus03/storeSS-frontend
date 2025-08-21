import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import { Link } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import tailwindConfig from '../../tailwind.config.js';

const primaryColor = tailwindConfig.theme.extend.colors.primary[500]; // Obtém a cor primária definida no Tailwind

console.log(tailwindConfig)

const drawerWidth = 240;

// Estilo para o estado aberto do Drawer
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

// Estilo para o estado fechado (minimizado) do Drawer
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Componente de cabeçalho para o Drawer, usado para posicionar o botão de fechar
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessário para o conteúdo ficar abaixo da app bar
  ...theme.mixins.toolbar,
}));

// O componente Drawer customizado com os estilos de aberto/fechado
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Função para alternar o estado do drawer ao clicar nos ícones
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Ícones e textos de exemplo para a lista
  const menuItems = [
    { text: 'Início', icon: <HomeIcon />, link: '/' },
    { text: 'Caixa de Entrada', icon: <InboxIcon /> },
    { text: 'Feed', icon: <PeopleIcon />, link: 'feed' },
    { text: 'E-mails', icon: <MailIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex' }} onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <ListItemText primary="Menu" sx={{
            opacity: open ? 1 : 0,
            pl: open ? 2.5 : 0,
          }} />
          <IconButton onClick={handleDrawerToggle}>
            <AccountCircleIcon fontSize={'large'} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }} component={ item.link ? Link : 'div'} to={ item.link ? item.link : '#'  }>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}