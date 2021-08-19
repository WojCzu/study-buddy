import styled from 'styled-components';

const StyledAverage = styled.div`
  width: ${({ size }) => {
    switch (size) {
      case 'm':
        return '40px';
      case 'l':
        return '68px';
      default:
        return '34px';
    }
  }};

  height: ${({ size }) => {
    switch (size) {
      case 'm':
        return '40px';
      case 'l':
        return '68px';
      default:
        return '34px';
    }
  }};

  display: grid;
  place-items: center;

  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'm':
        return theme.fontSize.m;
      case 'l':
        return theme.fontSize.xl;
      default:
        return theme.fontSize.s;
    }
  }};

  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  background-color: ${({ theme, value }) => {
    const { colors } = theme;
    if (value >= 4) return colors.success;
    if (value >= 3) return colors.warning;
    if (value >= 2) return colors.badGrade;
    return colors.grey;
  }};
`;
const Average = (props) => {
  const numberValue = Number.parseFloat(props.value);

  return (
    <StyledAverage {...props}>
      {isNaN(numberValue) ? props.value : numberValue.toFixed(1)}
    </StyledAverage>
  );
};
export default Average;
