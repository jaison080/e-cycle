import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import PieChart from './PieChart';

function preventDefault(event) {
  event.preventDefault();
}

export default function ReturnPieSplitting() {
  return (
    <React.Fragment>
      <PieChart/>
    </React.Fragment>
  );
}
