import React, { Component } from 'react';
import classes from './MenuDisplay.module.css';
import classNames from 'classnames';

import positionImage from '../../../utils/positionImage';
import controls from '../../../data/controls';

import woodPlate from '../../../assets/wood-plate.svg';

/*eslint no-loop-func: "off"*/
class MenuDisplay extends Component {
  componentDidMount() {
    const plateNode = document.getElementById('plate');
    const displayMenuElement = document.getElementById('displayMenu');
    const drinkNode = document.getElementById('drink');
    const friesNode = document.getElementById('fries');

    const drinkPositionWidth = plateNode.getBoundingClientRect().width / 4.5;
    const drinkPositionHeight =
      displayMenuElement.getBoundingClientRect().height - drinkNode.getBoundingClientRect().height - 80;

    const friesPositionWidth =
      displayMenuElement.getBoundingClientRect().width - plateNode.getBoundingClientRect().width / 2.5;
    const friesPositionHeight =
      displayMenuElement.getBoundingClientRect().height - friesNode.getBoundingClientRect().height - 80;

    const platePositionWidth =
      displayMenuElement.getBoundingClientRect().width / 2 - plateNode.getBoundingClientRect().width / 2;
    const platePositionHeight = displayMenuElement.getBoundingClientRect().height - 100;

    plateNode.style.webkitTransform = `translate(${platePositionWidth}px,${platePositionHeight}px)`;
    drinkNode.style.webkitTransform = `translate(${drinkPositionWidth}px,${drinkPositionHeight}px)`;
    friesNode.style.webkitTransform = `translate(${friesPositionWidth}px,${friesPositionHeight}px)`;
  }

  async componentDidUpdate() {
    let totalOffset = 0;

    const imageNodes = document.getElementById('burger').children;

    for (var i = 0; i < imageNodes.length; i++) {
      let uri = imageNodes[i].getAttributeNS('http://www.w3.org/1999/xlink', 'href');
      let pic = new Image();
      pic.src = uri;
      totalOffset = await positionImage(pic, totalOffset, imageNodes[i], i !== 0 ? imageNodes[i - 1] : null);
    }
  }

  render() {
    const displayBurger = [...this.props.burgerConfig];
    const displayCoupling = [...this.props.couplingConfig];

    let selectedBread = null;
    let drink = null;
    let fries = null;
    let images = [];
    let imageTop = null;

    displayCoupling.sort((a, b) => {
      return a.order - b.order;
    });

    displayCoupling.forEach(coupling => {
      let control = null;

      control = controls.coupling[coupling.type].values.find(el => {
        return el.value === coupling.value;
      });

      if (coupling.type === 'drink') {
        drink = (
          <image
            data-type={coupling.type}
            data-value={coupling.value}
            key={coupling.id}
            xlinkHref={control.image}
            className={classNames({ [classes[`${control.class}`]]: true })}
          />
        );
      }

      if (coupling.type === 'fries') {
        fries = (
          <image
            data-type={coupling.type}
            data-value={coupling.value}
            key={coupling.id}
            xlinkHref={control.image}
            className={classNames({ [classes[`${control.class}`]]: true })}
          />
        );
      }
    });

    displayBurger.sort((a, b) => {
      return a.order - b.order;
    });

    displayBurger.forEach(ingredient => {
      let control = null;

      if (!Array.isArray(ingredient.value)) {
        control = controls.burger[ingredient.type].values.find(el => {
          return el.value === ingredient.value;
        });

        if (ingredient.type === 'bread') {
          selectedBread = control;
        }

        if (ingredient.type !== 'topping') {
          images.push(
            <image
              data-type={ingredient.type}
              data-value={ingredient.value}
              key={ingredient.id}
              xlinkHref={control.image}
              className={classNames({ [classes[`${control.class}`]]: true })}
            />
          );
        } else {
          imageTop = (
            <image
              data-type="top"
              key={ingredient.id}
              xlinkHref={selectedBread[`imageTop${ingredient.value}`]}
              alt={selectedBread[`altTop${ingredient.value}`]}
              className={classNames({ [classes['top-bread']]: true })}
            />
          );
        }
      } else {
        ingredient.value.forEach(value => {
          let controlValue = null;
          control = controls.burger[ingredient.type].values.find(el => {
            controlValue = el.value;
            return el.value === value;
          });

          images.push(
            <image
              key={ingredient.id + controlValue}
              data-type={ingredient.type}
              data-value={controlValue}
              xlinkHref={control.image}
              alt={control.alt}
              className={classNames({ [classes[`${control.class}`]]: true })}
            />
          );
        });
      }
    });

    images.push(imageTop);

    return (
      <div className={classes['svg-box']}>
        <svg
          id="displayMenu"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={classes['svg']}
        >
          <g id="plate" className={classes['plate']}>
            <image xlinkHref={woodPlate} alt="Plateau" />
          </g>

          <g id="drink" className={classes['drink']}>
            {drink}
          </g>

          <g id="fries" className={classes['fries']}>
            {fries}
          </g>

          <g id="menuGroup" className={classes['menu']}>
            <g id="burger" className={classes['burger']}>
              {images}
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default MenuDisplay;
