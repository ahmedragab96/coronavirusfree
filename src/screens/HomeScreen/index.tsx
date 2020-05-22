import * as React from 'react';
import classes from './styles.module.scss';
import {
  inject, observer,
} from 'mobx-react';

const HomeScreen: React.FC = observer((() => {
  return (
    <div className={classes.test}>
      Hello
    </div>
  );
}))
export default HomeScreen;