import React from 'react';
import { Control, Checkbox, Radio, Switch } from 'nostromo-react';

const MenuConfigControl = props => {
  let control = null;
  switch (props.control.type) {
    case 'yesno':
      control = (
        <>
          <Switch
            attributes={{ id: props.control.id, name: props.control.name, value: props.value }}
            eventHandlers={{ onChange: props.changeHandler }}
          />
        </>
      );
      break;
    case 'choice':
      control = (
        <>
          {props.control.values.map(value => {
            return (
              <Radio
                key={value.id}
                attributes={{
                  id: props.id + value.id,
                  name: value.name + props.id,
                  value: value.value,
                  checked: value.value === props.value,
                }}
                eventHandlers={{ onChange: props.changeHandler }}
              >
                {value.label}
              </Radio>
            );
          })}
        </>
      );
      break;
    case 'selection':
      control = (
        <>
          {props.control.values.map(value => {
            return (
              <Checkbox
                key={value.id}
                attributes={{
                  id: props.id + value.id,
                  name: value.name + props.id,
                  value: value.value,
                }}
                eventHandlers={{ onChange: props.changeHandler }}
              >
                {value.label}
              </Checkbox>
            );
          })}
        </>
      );
      break;
    default:
      control = <></>;
  }

  return <Control>{control}</Control>;
};

export default MenuConfigControl;
