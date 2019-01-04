import React from 'react';
import { Select, Button } from 'nostromo-react';
import classes from './MenuConfig.module.scss';
import classNames from 'classnames';
import MenuConfigControl from '../Config/Control/MenuConfigControl';
import icons from '../../../assets/icons.svg';
import controls from '../../../data/controls';

const MenuConfig = props => {
  return (
    <div className={classNames({ [classes['Config']]: true })}>
      <div className={classes['CouplingConfig']}>
        <p>Couplings</p>
        {props.couplingConfig.map(coupling => (
          <div
            className={classNames({
              [classes['Coupling']]: true,
              'm-padding-ty': true,
              'm-margin-ty--bottom': true,
              'm-border-xt': true,
            })}
            key={coupling.id}
          >
            {coupling.type === 'drink' && (
              <>
                <svg className={classNames({ [classes['Icon']]: true, icon: true, 'm-margin-ty--right': true })}>
                  <use xlinkHref={`${icons}#icon-drink`} />
                </svg>
                <span className={classes.CouplingType}>Drink</span>
              </>
            )}

            {coupling.type === 'fries' && (
              <>
                <svg className={classNames({ [classes['Icon']]: true, icon: true, 'm-margin-ty--right': true })}>
                  <use xlinkHref={`${icons}#icon-air`} />
                </svg>
                <span className={classes.CouplingType}>Fries</span>
              </>
            )}
            <MenuConfigControl
              control={controls.coupling[coupling.type]}
              id={coupling.id}
              value={coupling.value}
              changeHandler={event => props.changeValueConfigHandler(coupling.id, event.target, 'coupling')}
            />
          </div>
        ))}
      </div>
      <div className={classes['BurgerConfig']}>
        <p>Burger settings</p>

        {props.burgerConfig.map(ingredient => (
          <div
            className={classNames({
              [classes['Ingredient']]: true,
              'm-margin-ty--bottom': true,
              'm-padding-ty': true,
              'm-border-xt': true,
            })}
            key={ingredient.id}
          >
            <div
              className={classNames({
                [classes['IngredientOrder']]: true,
                'm-text-grey-dark-3': true,
                'm-rounded-xx': true,
              })}
            >
              {ingredient.order}
            </div>
            {ingredient.type === 'bread' && (
              <span className={classNames({ [classes['IngredientType']]: true })}>Bread:</span>
            )}
            {ingredient.type === 'topping' && (
              <span className={classNames({ [classes['IngredientType']]: true })}>Topping:</span>
            )}

            {ingredient.type !== 'bread' && ingredient.type !== 'topping' && (
              <Select
                className={classNames({ [classes['IngredientType']]: true })}
                border-xt
                attributes={{ value: ingredient.type, disabled: ingredient.disabled }}
                eventHandlers={{
                  onChange: event => props.changeTypeConfigHandler(ingredient.id, event.target.value, 'burger'),
                }}
              >
                <option value="bread" disabled={ingredient.id !== 1 && ingredient.id !== 2}>
                  Bread
                </option>
                <option value="topping" disabled={ingredient.id !== 1 && ingredient.id !== 2}>
                  Topping
                </option>
                <option value="sauce">Sauce</option>
                <option value="meat">Meat</option>
                <option value="cheese">Cheese</option>
                <option value="vegetable">Vegetables</option>
              </Select>
            )}
            <MenuConfigControl
              control={controls.burger[ingredient.type]}
              id={ingredient.id}
              value={ingredient.value}
              changeHandler={event => props.changeValueConfigHandler(ingredient.id, event.target, 'burger')}
            />
            {ingredient.type !== 'bread' && ingredient.type !== 'topping' && (
              <Button
                eventHandlers={{ onClick: event => props.removeIngredientHandler(ingredient.id, ingredient.order) }}
              >
                <svg className={classNames({ [classes['Icon']]: true, icon: true, 'm-invalid': true })}>
                  <use xlinkHref={`${icons}#icon-circle-with-minus`} />
                </svg>
              </Button>
            )}
          </div>
        ))}
        {/* <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>
        Commander
      </button> */}
      </div>
      <Button
        className={classNames({ [classes['AddIngredient']]: true, 'm-primary--reverse': true })}
        padding-xt
        border-xt
        rounded-xt
        eventHandlers={{ onClick: props.addIngredientHandler }}
      >
        <svg className={classNames({ [classes['Icon']]: true, icon: true })}>
          <use xlinkHref={`${icons}#icon-circle-with-plus`} />
        </svg>
        <span className="btn__text">Ajouter un ingrédient</span>
      </Button>
    </div>
  );
};

export default MenuConfig;
