// @flow
import Radium from 'radium';

const rainbow = Radium.keyframes({
  '0%': { backgroundPosition: '0% 82%' },
  '50%': { backgroundPosition: '100% 18%' },
  '100%': { backgroundPosition: '0% 82%' }
});

export const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  header: {
    fontSize: '2.2rem',
    fontWeight: '300',
    width: '100%',
    padding: '1.5rem',
    margin: '0 0 1.8rem 0',
    textAlign: 'center',
    color: 'black',
    backgroundImage: 'linear-gradient(124deg, #ff2400, #e8b71d, #e3e81d, #1de840, #3d91ff, #f351ff)',
    backgroundSize: '1500% 1500%',
    animation: 'x 10s infinite',
    animationName: rainbow,
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
  }
};
