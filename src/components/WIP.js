import React from 'react';

function WIP() {
  return (
    <section id="wip">
      <img
        src={require('../assets/gif/working-on-it.gif')}
        alt="work in progress gif"
        style={styles.wip}
      />
    </section>
  );
}

const styles = {
  wip: {
    display: 'block',
    margin: '10% auto 0',
    width: '50%'
  }
};

export default WIP;
