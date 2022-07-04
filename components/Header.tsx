import * as React from 'react';
// next
import Link from 'next/link';
import Image from 'next/image';
// mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Stack } from '@mui/material';
// styles
import styles from './Header.module.scss';

export default function ButtonAppBar() {
  const menuItems = ['خانه', 'قیمت لحظه ای', 'کارمزدها', 'پورتفوی'];
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '64px',
        marginBottom: '20px',
      }}
    >
      <AppBar
        position="static"
        component={'header'}
        className={styles.customAppbar}
      >
        <Toolbar sx={{ padding: '0px !important' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.toolbar}>
            <Stack spacing={2} className={styles.navBar} direction="row">
              {menuItems.map((item) => (
                <Button sx={{ opacity: 0.85 }} color="inherit" key={item}>
                  {item}
                </Button>
              ))}
            </Stack>
            <div className={styles.endSection}>
              <Button color="primary" variant="contained">
                ورود / ثبت نام
              </Button>
              <Divider
                sx={{ mx: 1 }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <Link href="/">
                <Image
                  src={
                    'https://bitbarg.com/_next/static/media/header-logo.18e678a4.svg'
                  }
                  width="119px"
                  height="48px"
                />
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
