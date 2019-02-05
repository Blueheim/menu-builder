export default function positionImage(image, totalOffset, node, lastNode = null) {
  const type = node.dataset.type;
  const value = node.dataset.value;

  const lastType = lastNode ? lastNode.dataset.type : null;
  const lastValue = lastNode ? lastNode.dataset.value : null;

  const yLast = lastNode ? +lastNode.getAttribute('y') : null;
  const heightLast = lastNode ? +lastNode.getAttribute('height') : null;

  return new Promise(resolve => {
    image.addEventListener('load', function() {
      switch (type) {
        case 'bread':
          node.setAttribute('y', 0);
          node.setAttribute('height', image.naturalHeight);

          break;
        case 'sauce':
          if (lastType === 'bread' || lastType === 'sauce') {
            if (value === '1') {
              // ketchup

              node.setAttribute('y', -image.naturalHeight / 2);
              node.setAttribute('height', image.naturalHeight);
            }

            if (value === '2') {
              if (lastType === 'sauce') {
                node.setAttribute('y', +yLast + image.naturalHeight / 2 / 3);
                node.setAttribute('height', image.naturalHeight);
              } else {
                node.setAttribute('y', -image.naturalHeight / 2);
                node.setAttribute('height', image.naturalHeight);
              }

              //totalOffset += offset / 2;
            }

            if (value === '3') {
              if (lastType === 'sauce') {
                node.setAttribute('y', +yLast + image.naturalHeight / 2 / 2);
                node.setAttribute('height', image.naturalHeight);
              } else {
                node.setAttribute('y', +yLast - image.naturalHeight / 2);
                node.setAttribute('height', image.naturalHeight);
              }
            }
          } else {
            node.setAttribute('y', yLast - image.naturalHeight / 2);
            node.setAttribute('height', image.naturalHeight);

            if (lastType === 'meat' && lastValue === '4') {
              node.setAttribute('y', yLast);
            }

            if (lastType === 'vegetable' && (lastValue === '2' || lastValue === '3' || lastValue === '4')) {
              node.setAttribute('y', yLast - 10);
            }
          }

          break;
        case 'meat':
          if (lastType === 'sauce') {
            node.setAttribute('y', yLast - image.naturalHeight + heightLast / 2);
          } else if (lastType === 'cheese') {
            node.setAttribute('y', yLast - image.naturalHeight + 8);
          } else {
            node.setAttribute('y', yLast - image.naturalHeight);
          }

          if (value === '4') {
            // Bacon
            node.setAttribute('y', yLast - image.naturalHeight / 2);
          }

          if (lastType === 'vegetable' && (lastValue === '2' || lastValue === '3' || lastValue === '4')) {
            node.setAttribute('y', yLast - image.naturalHeight / 2);
          }

          node.setAttribute('height', image.naturalHeight);

          break;
        case 'cheese':
          if (lastType === 'sauce') {
            if (lastValue === '1') {
              node.setAttribute('y', yLast + heightLast / 3);
            }
            if (lastValue === '3') {
              node.setAttribute('y', yLast + heightLast / 4);
            }
          } else {
            if (lastType === 'vegetable' && (lastValue === '2' || lastValue === '3' || lastValue === '4')) {
              node.setAttribute('y', yLast + 10);
            } else {
              if (lastType === 'meat' && lastValue === '4') {
                node.setAttribute('y', yLast + heightLast / 3);
              } else {
                node.setAttribute('y', yLast - 8);
              }
            }
          }

          break;

        case 'vegetable':
          if (value === '1') {
            node.setAttribute('x', -20);
            node.setAttribute('width', image.naturalWidth + 20 * 2);
            node.setAttribute('y', yLast);

            if (lastType === 'meat' && lastValue === '4') {
              node.setAttribute('y', yLast + image.naturalHeight / 2);
            }
          }

          if (value === '2') {
            node.setAttribute('x', -10);
            node.setAttribute('width', image.naturalWidth + 10 * 2);
            node.setAttribute('y', yLast - image.naturalHeight / 2);
          }

          if (value === '3') {
            node.setAttribute('x', -10);
            node.setAttribute('width', image.naturalWidth + 10 * 2);
            node.setAttribute('y', yLast - image.naturalHeight / 2);
          }

          if (value === '4') {
            node.setAttribute('x', -10);
            node.setAttribute('width', image.naturalWidth + 10 * 2);
            node.setAttribute('y', yLast - image.naturalHeight / 2);
          }

          break;

        case 'top':
          // totalOffset += offset;

          node.setAttribute('height', image.naturalHeight);

          if (lastType === 'sauce') {
            node.setAttribute('y', yLast - image.naturalHeight + heightLast / 2);
          } else if (lastType === 'cheese') {
            node.setAttribute('y', yLast - image.naturalHeight + 10);
          } else if (lastType === 'vegetable') {
            if (lastValue === '1') {
              node.setAttribute('y', yLast - image.naturalHeight + 3);
            }
          } else if (lastType === 'meat' && lastValue === '4') {
            node.setAttribute('y', yLast - image.naturalHeight + heightLast / 2);
          } else {
            node.setAttribute('y', yLast - image.naturalHeight);
          }

          break;
        default:
      }

      const displayMenuElement = document.getElementById('displayMenu');
      const menuGroupElement = document.getElementById('menuGroup');

      const positionWidth =
        displayMenuElement.getBoundingClientRect().width / 2 - menuGroupElement.getBoundingClientRect().width / 2;
      const positionHeight = displayMenuElement.getBoundingClientRect().height - 120;

      menuGroupElement.style.webkitTransform = `translate(${positionWidth}px,${positionHeight}px)`;

      resolve(totalOffset);
    });
  });
}
