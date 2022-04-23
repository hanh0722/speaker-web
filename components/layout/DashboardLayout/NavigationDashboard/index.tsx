import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { classList } from '../../../../utils/string';
import { Button } from '../../../core';
import { IconSearch } from '../../../core/Icons';
import styles from './styles.module.scss';

const NavigationDashboard = () => {
  const [isActive, setIsActive] = useState(false);
  const [frameId, setFrameId] = useState<number | null>(null);
  const user = useSelector<RootState>(state => state.user.user);

  const onCallbackScroll = () => {
    setIsActive(window.scrollY > 50);
  };
  const onHandleScroll = useCallback(() => {
    const frame = requestAnimationFrame(onCallbackScroll);
    setFrameId(frame);
  }, []); 
  useEffect(() => {
    window.addEventListener('scroll', onHandleScroll);
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        setFrameId(null);
        window.removeEventListener('scroll', onHandleScroll);
      }
    }
  }, [onHandleScroll, frameId]);
  return (
    <nav className={classList('d-flex align-center', styles.navigation, isActive && styles.active)}>
      <Button className={styles.search} prefix='normal' color='inherit' variant='text'>
        <IconSearch/>
      </Button>
    </nav>
  )
};

export default NavigationDashboard;