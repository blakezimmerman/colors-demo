// @flow
const getColorByBgColor = (bgColor: string) => (
  parseInt(bgColor.replace('#', ''), 16) > 0x0ff / 2 ? '#000' : '#fff'
);

export const boxStyles = {
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
