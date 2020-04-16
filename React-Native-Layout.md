# React Native Layout

## Articles

- https://reactnative.dev/docs/flexbox
- https://reactnative.dev/docs/layout-props
- https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c

## Description

React-Native uses Flexbox by default. Furthermore, its styling is similar to CSS, but not exactly the same. With respect to Flexbox, it allows for you to position elements in a grid like layout on the screen, relative to each other (above, below, beside, etc). You can set up styles by doing them inline, or also by using the `StyleSheet` class. By default, a container will only take up as much space as the content that it holds (unless specified otherwise).

## Definitions

- **flexDirection** - Controls which direction children of a container are oriented (the main axis). For example, row goes from left to right, column goes from top to bottom. You can also reverse the direction.
- **justifyContent** - Aligns children along the main axis. If the children are aligned in a column, then it will adjust how the children are aligned vertically.
- **alignItems** - Aligns children along the cross axis (opposite of the main axis). If the children are aligned in a column, then it will adjust how children are aligned horizontally.
- **width** - Determines the width of the container. Can be a number or string (pixels or percent).
- **height** -  Determines the height of the container. Can be a number or string.
- **padding** - Sets the padding area on all four sides of a container (shorthand for using the top, bottom, left, right variants). The space between the content of a container and its borders.
- **margin** - Sets the margin on all four sides of a container. Creates extra space around a container, as opposed to within (like with padding).
- **flex** - Sizes an element relative to other components. For example, having two elements with `flex: 1` set will make it so each takes up 50% of the available space. Higher numbers mean a greater percentage of space is taken up.