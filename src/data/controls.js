import basePainBlanc from '../assets/base-pain-blanc.svg';
import painBlanc from '../assets/pain-blanc.svg';
import painBlancCourge from '../assets/pain-blanc-courge.svg';
import painBlancSesame from '../assets/pain-blanc-sesame.svg';
import painBlancPavot from '../assets/pain-blanc-pavot.svg';

import basePainComplet from '../assets/base-pain-complet.svg';
import painComplet from '../assets/pain-complet.svg';
import painCompletCourge from '../assets/pain-complet-courge.svg';
import painCompletSesame from '../assets/pain-complet-sesame.svg';
import painCompletPavot from '../assets/pain-complet-pavot.svg';

import basePainCharbon from '../assets/base-pain-charbon.svg';
import painCharbon from '../assets/pain-charbon.svg';
import painCharbonCourge from '../assets/pain-charbon-courge.svg';
import painCharbonSesame from '../assets/pain-charbon-sesame.svg';
import painCharbonPavot from '../assets/pain-charbon-pavot.svg';

import barbecue from '../assets/barbecue.svg';
import ketchup from '../assets/ketchup.svg';
import moutarde from '../assets/moutarde.svg';

import steakSaignant from '../assets/steak-saignant.svg';
import steakBienCuit from '../assets/steak-bien-cuit.svg';
import steakAPoint from '../assets/steak-a-point.svg';
import bacon from '../assets/bacon.svg';

import salade from '../assets/salade.svg';
import oignon from '../assets/oignon.svg';
import cornichon from '../assets/cornichon.svg';
import tomate from '../assets/tomate.svg';

import emmental from '../assets/emmental.svg';
import cheddar from '../assets/cheddar.svg';

import water from '../assets/eau.svg';
import beer from '../assets/biere.svg';
import soda from '../assets/soda.svg';

import frites from '../assets/frite.svg';
import oignonFrie from '../assets/oignon-frie.svg';

const controls = {
  coupling: {
    drink: {
      type: 'choice',
      values: [
        {
          id: 'a1_v1',
          name: 'drink',
          label: 'None',
          value: '1',
          image: null,
          alt: 'None',
          price: 0,
          calorie: 0,
        },
        {
          id: 'a1_v2',
          name: 'drink',
          label: 'Mineral water',
          value: '2',
          class: 'water',
          image: water,
          alt: 'Mineral water',
          price: 1.2,
          calorie: 0,
        },
        {
          id: 'a1_v3',
          name: 'drink',
          label: 'Soda',
          value: '3',
          class: 'soda',
          image: soda,
          alt: 'Soda',
          price: 2.4,
          calorie: 140,
        },
        {
          id: 'a1_v4',
          name: 'drink',
          label: 'Beer',
          value: '4',
          class: 'beer',
          image: beer,
          alt: 'Beer',
          price: 3.3,
          calorie: 150,
        },
      ],
    },
    fries: {
      type: 'choice',
      values: [
        {
          id: 'a2_v1',
          name: 'fries',
          label: 'None',
          value: '1',
          image: null,
          alt: 'None',
          price: 0,
          calorie: 0,
        },
        {
          id: 'a2_v2',
          name: 'fries',
          label: 'French fries',
          value: '2',
          class: 'french-fries',
          image: frites,
          alt: 'French fries',
          price: 2,
          calorie: 320,
        },
        {
          id: 'a2_v3',
          name: 'fries',
          label: "Onion rings",
          value: '3',
          class: 'onion-rings',
          image: oignonFrie,
          alt: "Oignon rings",
          price: 2.2,
          calorie: 250,
        },
      ],
    },
  },
  burger: {
    bread: {
      type: 'choice',
      values: [
        {
          id: 'c1_v1',
          name: 'bread',
          label: 'White',
          value: '1',
          class: 'base-bread',
          image: basePainBlanc,
          alt: 'Base white bread',
          imageTop1: painBlanc,
          altTop1: 'White bread',
          imageTop2: painBlancSesame,
          altTop2: 'White bread with sesame seed',
          imageTop3: painBlancPavot,
          altTop3: 'White bread with poppy seed',
          imageTop4: painBlancCourge,
          altTop4: 'White bread with pumpkin seed',
          price: 0.5,
          calorie: 250,
        },
        {
          id: 'c1_v2',
          name: 'bread',
          label: 'Brown',
          value: '2',
          class: 'base-bread',
          image: basePainComplet,
          alt: 'Base brown bread',
          imageTop1: painComplet,
          altTop1: 'Brown bread',
          imageTop2: painCompletSesame,
          altTop2: 'Brown bread with sesame seed',
          imageTop3: painCompletPavot,
          altTop3: 'Brown bread with poppy seed',
          imageTop4: painCompletCourge,
          altTop4: 'Brown bread with pumpkin seed',
          price: 0.8,
          calorie: 280,
        },
        {
          id: 'c1_v3',
          name: 'bread',
          label: 'Activated charcoal',
          value: '3',
          class: 'base-bread',
          image: basePainCharbon,
          alt: 'Base activated charcoal',
          imageTop1: painCharbon,
          altTop1: 'Activated charcoal bread',
          imageTop2: painCharbonSesame,
          altTop2: 'Activated charcoal bread with sesame seed',
          imageTop3: painCharbonPavot,
          altTop3: 'Activated charcoal bread with poppy seed',
          imageTop4: painCharbonCourge,
          altTop4: 'Activated charcoal bread with pumpkin seed',
          price: 1,
          calorie: 180,
        },
      ],
    },
    topping: {
      type: 'choice',
      values: [
        {
          id: 'c1_v11',
          name: 'topping',
          label: 'None',
          value: '1',
          price: 0,
          calorie: 0,
        },
        {
          id: 'c1_v21',
          name: 'topping',
          label: 'Sesame',
          value: '2',
          price: 0.15,
          calorie: 50,
        },
        {
          id: 'c1_v31',
          name: 'topping',
          label: 'Poppy',
          value: '3',
          price: 0.25,
          calorie: 30,
        },
        {
          id: 'c1_v41',
          name: 'topping',
          label: 'Pumpkin',
          value: '4',
          price: 0.4,
          calorie: 70,
        },
      ],
    },
    sauce: {
      type: 'selection',
      values: [
        {
          id: 'c2_v1',
          name: 'sauce1',
          label: 'Ketchup',
          value: '1',
          class: 'ketchup',
          image: ketchup,
          alt: 'Ketchup sauce',
          price: 0.2,
          calorie: 100,
        },
        {
          id: 'c2_v2',
          name: 'sauce2',
          label: 'Barbecue',
          value: '2',
          class: 'barbecue',
          image: barbecue,
          alt: 'Barbecue sauce',
          price: 0.2,
          calorie: 160,
        },
        {
          id: 'c3_v3',
          name: 'sauce3',
          label: 'Mustard',
          value: '3',
          class: 'mustard',
          image: moutarde,
          alt: 'Mustard sauce',
          price: 0.2,
          calorie: 230,
        },
      ],
    },
    meat: {
      type: 'choice',
      values: [
        {
          id: 'c4_v1',
          name: 'meat',
          label: 'Rare',
          value: '1',
          class: 'steak',
          image: steakSaignant,
          alt: 'Rare steak',
          price: 3.5,
          calorie: 250,
        },
        {
          id: 'c4_v2',
          name: 'meat',
          label: 'Medium',
          value: '2',
          class: 'steak',
          image: steakAPoint,
          alt: 'Medium steak',
          price: 3.5,
          calorie: 250,
        },
        {
          id: 'c4_v3',
          name: 'meat',
          label: 'Well done',
          value: '3',
          class: 'steak',
          image: steakBienCuit,
          alt: 'Well done steak',
          price: 3.5,
          calorie: 250,
        },
        {
          id: 'c4_v4',
          name: 'meat',
          label: 'Bacon',
          value: '4',
          class: 'bacon',
          image: bacon,
          alt: 'Bacon',
          price: 1.6,
          calorie: 420,
        },
      ],
    },
    cheese: {
      type: 'choice',
      values: [
        {
          id: 'c5_v1',
          name: 'cheese',
          label: 'Emmenthal',
          value: '1',
          class: 'cheese',
          image: emmental,
          alt: 'Emmenthal',
          price: 0.15,
          calorie: 180,
        },
        {
          id: 'c5_v2',
          name: 'cheese',
          label: 'Cheddar',
          value: '2',
          class: 'cheese',
          image: cheddar,
          alt: 'Cheddar',
          price: 0.15,
          calorie: 200,
        },
      ],
    },
    vegetable: {
      type: 'choice',
      values: [
        {
          id: 'c6_v1',
          name: 'salad',
          label: 'Salad',
          value: '1',
          class: 'salad',
          image: salade,
          alt: 'Salad',
          price: 0.2,
          calorie: 70,
        },
        {
          id: 'c6_v2',
          name: 'tomato',
          label: 'Tomatoes',
          value: '2',
          class: 'tomato',
          image: tomate,
          alt: 'Tomatoes',
          price: 0.3,
          calorie: 20,
        },
        {
          id: 'c6_v3',
          name: 'onion',
          label: 'Onions',
          value: '3',
          class: 'onion',
          image: oignon,
          alt: 'Onions',
          price: 0.15,
          calorie: 30,
        },
        {
          id: 'c6_v4',
          name: 'pickle',
          label: 'Pickles',
          value: '4',
          class: 'pickle',
          image: cornichon,
          alt: 'Pickles',
          price: 0.3,
          calorie: 50,
        },
      ],
    },
  },
};

export default controls;
