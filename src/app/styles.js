// @flow
import Radium from 'radium';

const getColorByBgColor = (bgColor: string) => (
  parseInt(bgColor.replace('#', ''), 16) > 0xfff / 2 ? '#000' : '#fff'
);

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
  },

  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    wdith: '50%'
  },

  label: {
    fontSize: '1.2rem',
    margin: '0.6rem'
  },

  input: {
    fontSize: '1rem',
    padding: '0 0.5rem',
    marginLeft: '0.3rem',
    width: '5.2rem',
    borderStyle: 'none none solid none',
    borderBottom: 'solid 1px #a6a6a6',
    transition: 'border 0.3s',
    ':focus': {
      outline: 'none',
      borderBottom: 'solid 1px #666666'
    }
  },

  errorText: (valid: boolean) => ({
    display: !valid ? 'block' : 'none',
    fontSize: '1rem',
    color: 'red',
    textAlign: 'center',
    margin: '2% 0'
  }),

  colorBoxContainer: {
    marginTop: '1rem',
  },

  colorBox: (color1: string, color2: string) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: '1.4rem',
    padding: '1rem',
    border: '1px solid black',
    borderRadius: '0.5rem',
    backgroundColor: color1,
    color: getColorByBgColor(color1),
    ':hover': {
      backgroundColor: color2,
      color: getColorByBgColor(color2),
    }
  })
};
