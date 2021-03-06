import moment from 'moment';
import React from 'react';
import { List, Segment } from 'semantic-ui-react';

import {
  AlgorithmWithResults,
  CategoryWithResults,
} from '../../../../lib/types';
import { getAverage } from '../../../../lib/utils';
import { randomizedAlgorithm } from './training';

type Props = {
  currentAlgorithm?: AlgorithmWithResults | randomizedAlgorithm;
  currentCategory: CategoryWithResults;
};

const Averages = ({
  currentAlgorithm,
  currentCategory,
}: Props): JSX.Element => {
  const currentAlgorithmAvg = getAverage(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    currentAlgorithm && currentAlgorithm.results,
  );
  const currentCategoryAvg = getAverage(
    currentCategory && currentCategory.results,
  );

  const averages = ['OLL', 'PLL'].includes(currentCategory.value)
    ? [
        {
          header: 'Average for this algorithm',
          key: '0',
          description: currentAlgorithmAvg
            ? moment(currentAlgorithmAvg).format('ss:SSS')
            : 'No records',
        },
        {
          header: `Average for all ${currentCategory.value} algorithms`,
          key: '1',
          description: currentCategoryAvg
            ? moment(currentCategoryAvg).format('ss:SSS')
            : 'No records',
        },
      ]
    : [
        {
          header: `Average for all in ${currentCategory.value}`,
          key: '0',
          description: currentCategoryAvg
            ? moment(currentCategoryAvg).format('mm:ss:SSS')
            : 'No records',
        },
      ];

  return (
    <Segment className="averages">
      <List inverted items={averages} />
    </Segment>
  );
};

export default Averages;
