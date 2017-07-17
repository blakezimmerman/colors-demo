// @flow
export const inputStyles = {
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
  })
};
