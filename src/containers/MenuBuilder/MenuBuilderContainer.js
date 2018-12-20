import React, { Component } from 'react';
import { BarLayout, MainLayout } from 'nostromo-react';
import MenuConfig from '../../components/Menu/Config/MenuConfig';
// import MenuDisplayContainer from '../../containers/MenuDisplay/MenuDisplayContainer';
import MenuDisplay from '../../components/Menu/Display/MenuDisplay';
import MenuInfos from '../../components/Menu/Info/MenuInfo';

import controls from '../../data/controls';

class BurgerBuilderContainer extends Component {
  state = {
    currentId: 3,
    currentOrder: 3,
    ingredients: [],
    totalPrice: 0,
    totalCalorie: 0,
    menuConfig: {
      coupling: [
        {
          id: 1,
          type: 'drink',
          value: '1',
          disabled: true,
          order: 1,
        },
        {
          id: 2,
          type: 'fries',
          value: '1',
          disabled: true,
          order: 2,
        },
      ],
      burger: [
        {
          id: 1,
          type: 'bread',
          value: '1',
          disabled: true,
          order: 1,
        },
        {
          id: 2,
          type: 'topping',
          value: '1',
          disabled: true,
          order: 2,
        },
      ],
    },
  };

  componentDidMount() {
    const totalPriceAndCalorie = this.updatePriceAndCalorie(this.state.menuConfig);
    this.setState({ totalPrice: totalPriceAndCalorie.totalPrice, totalCalorie: totalPriceAndCalorie.totalCalorie });
  }

  handleConfigChangeType = (id, typeValue, type) => {
    const updatedMenuConfig = JSON.parse(JSON.stringify(this.state.menuConfig));

    for (let ingredient of updatedMenuConfig[type]) {
      if (ingredient.id === id) {
        ingredient.type = typeValue;
        ingredient.value = typeValue === 'sauce' ? [] : '1';
        break;
      }
    }

    const totalPriceAndCalorie = this.updatePriceAndCalorie(updatedMenuConfig);

    this.setState({
      totalPrice: totalPriceAndCalorie.totalPrice,
      totalCalorie: totalPriceAndCalorie.totalCalorie,
      menuConfig: updatedMenuConfig,
    });
  };

  handleConfigChangeValue = (id, targetElement, type) => {
    const updatedMenuConfig = JSON.parse(JSON.stringify(this.state.menuConfig));

    for (let ingredient of updatedMenuConfig[type]) {
      if (ingredient.id === id) {
        if (targetElement.type === 'checkbox') {
          if (!Array.isArray(ingredient.value)) {
            ingredient.value = [];
          }

          if (targetElement.checked) {
            ingredient.value.push(targetElement.value);
          } else {
            ingredient.value = ingredient.value.filter(item => item !== targetElement.value);
          }

          ingredient.value.sort((a, b) => {
            return a.localeCompare(b);
          });
        } else {
          ingredient.value = targetElement.value;
        }
        break;
      }
    }

    const totalPriceAndCalorie = this.updatePriceAndCalorie(updatedMenuConfig);

    this.setState({
      totalPrice: totalPriceAndCalorie.totalPrice,
      totalCalorie: totalPriceAndCalorie.totalCalorie,
      menuConfig: updatedMenuConfig,
    });
  };

  handleAddIngredient = () => {
    const updatedMenuConfig = JSON.parse(JSON.stringify(this.state.menuConfig));

    updatedMenuConfig.burger.push({
      id: this.state.currentId,
      type: 'sauce',
      value: [],
      disabled: false,
      order: this.state.currentOrder,
    });

    const totalPriceAndCalorie = this.updatePriceAndCalorie(updatedMenuConfig);

    this.setState((state, props) => ({
      menuConfig: updatedMenuConfig,
      currentId: this.state.currentId + 1,
      currentOrder: this.state.currentOrder + 1,
      totalPrice: totalPriceAndCalorie.totalPrice,
      totalCalorie: totalPriceAndCalorie.totalCalorie,
    }));
  };

  handleRemoveIngredient = (id, order) => {
    const updatedMenuConfig = JSON.parse(JSON.stringify(this.state.menuConfig));

    const updatedBurgerConfig = updatedMenuConfig.burger.filter(ingredient => id !== ingredient.id);

    updatedMenuConfig.burger = updatedBurgerConfig;

    updatedMenuConfig.burger.forEach(ingredient => {
      if (ingredient.order > order) {
        ingredient.order -= 1;
      }
    });

    this.setState({ menuConfig: updatedMenuConfig, currentOrder: updatedMenuConfig.burger.length + 1 });
  };

  updatePriceAndCalorie(config) {
    let totalPrice = 0;
    let totalCalorie = 0;
    config.coupling.forEach(coupling => {
      totalPrice += controls.coupling[coupling.type].values.find(value => value.value === coupling.value).price;
      totalCalorie += controls.coupling[coupling.type].values.find(value => value.value === coupling.value).calorie;
    });

    config.burger.forEach(ingredient => {
      if (ingredient.type !== 'sauce') {
        totalPrice += controls.burger[ingredient.type].values.find(value => value.value === ingredient.value).price;
        totalCalorie += controls.burger[ingredient.type].values.find(value => value.value === ingredient.value).calorie;
      }
    });

    return { totalPrice, totalCalorie };
  }

  render() {
    //const ingredients = this.state.ingredients.map(ingredient => <div>{ingredient.name}</div>);

    return (
      <>
        <BarLayout className="App-toolbar m-grey-3 m-padding-ty">
          <h1 className="m-size-md u-tc">Configuration de votre menu</h1>
          <MenuInfos price={this.state.totalPrice} calorie={this.state.totalCalorie} />
          <MenuConfig
            couplingConfig={this.state.menuConfig.coupling}
            burgerConfig={this.state.menuConfig.burger}
            addIngredientHandler={this.handleAddIngredient}
            removeIngredientHandler={this.handleRemoveIngredient}
            changeValueConfigHandler={this.handleConfigChangeValue}
            changeTypeConfigHandler={this.handleConfigChangeType}
          />
        </BarLayout>

        <MainLayout className="App-main">
          <MenuDisplay couplingConfig={this.state.menuConfig.coupling} burgerConfig={this.state.menuConfig.burger} />
        </MainLayout>
      </>
    );
  }
}

export default BurgerBuilderContainer;
