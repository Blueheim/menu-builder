import React from 'react';
import classNames from 'classnames';
import classes from './MenuInfo.module.css';

const MenuInfo = props => {
  return (
    <div
      className={classNames({
        [classes['MenuInfo']]: true,
        'm-padding-ty': true,
        'm-margin-ty--bottom': true,
        'm-border-xt': true,
      })}
    >
      <span className="m-size-xs">Calories: {props.calorie}</span>
      <span className="m-size-xs">Montant: {props.price.toFixed(2)} €</span>
    </div>
  );
};

export default MenuInfo;
