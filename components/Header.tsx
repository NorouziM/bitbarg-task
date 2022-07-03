import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.scss';
import { Container } from '@mui/system';
import { Divider } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function ButtonAppBar() {
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
        <Toolbar>
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
            <div className={styles.navBar}>
              <Button color="inherit">خانه</Button>
              <Button color="inherit">قیمت لحظه ای</Button>
              <Button color="inherit">کارمزد ها</Button>
            </div>
            <div className={styles.endSection}>
              <Button color="primary" variant="contained">
                ورود / ثبت نام
              </Button>
              <Divider sx={{ mx: 2 }} orientation="vertical" />
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
