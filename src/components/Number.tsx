import * as React from 'react';

interface INumberBlockProps {
  no: number;
}

const NumberBlock: React.SFC<INumberBlockProps> = ({ no }) => {
  return (
    <div style={{ display: 'inline-block', marginRight: 5, width: 35 }}>
      {no}
    </div>
  );
};

NumberBlock.defaultProps = {
  no: 0
};

export default NumberBlock;
