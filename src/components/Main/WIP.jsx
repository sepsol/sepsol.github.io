import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';

function WIP() {
  const desktopScreen = useMediaQuery('(min-width: 720px)');
  const tabletScreen = useMediaQuery('(min-width: 480px)');

  return (
    <section id="wip">
      <img
        src={require('../assets/gif/working-on-it.gif')}
        alt="work in progress gif"
        style={
          desktopScreen
            ? styles.desktop
            : tabletScreen
            ? styles.tablet
            : styles.mobile
        }
      />
    </section>
  );
}

const styles = {
  desktop: {
    display: 'block',
    margin: '0 auto',
    width: '30%',
  },
  tablet: {
    display: 'block',
    margin: '0 auto',
    width: '50%',
  },
  mobile: {
    display: 'block',
    margin: '0 auto',
    width: '70%',
  },
};

export default WIP;
