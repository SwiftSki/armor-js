# armor-js
A lightweight physics engine and renderer for games

#### this is still in early stages of development
[page](https://armor-js.epicraisin.repl.co/)

# DOCS
## Body
```new Body(type, width, height, x, y, options[optional]);```
``type`` - a string indicating how the hibox should be set up and how the object should be rendered. can be ``ellipse`` or ``rect``
``width`` - the width of the object in pixels
``height`` - the height in pixel
``x`` - the distance from the left side of the canvas to the center of the object
``y`` - the distance from the top of the canvas to the center of the object
``options`` - an object specifying anything else about the object

## World
```new World(options[optional]);```
``options`` - an object specifying anything else about the world

```world.add(object[s]);```
``object[s]`` - a single-layer array of objects or a single object to be added to the world

## Render
```new Render(worldObject, canvasID, options[optional]);```
``worldObject`` - the world being rendered
``canvasID`` - the canvas being rendered to
``options`` - an object specifying anything else about the object

```render.draw();``` - draws the world. This is done automatically in ``engine.tick``

## Engine
``` new Engine(world, render, options[optional]);```
``world`` - the world being run by the engine
``render`` - the render being run by the engine. Leave this blank or set it to ``'custom'`` if you want to use your own engine
``options`` - an object specifying anything else about the object

```engine.tick(callback[optional]);```
steps the engine and render forward. This is done automatically in ``engine.start``
``callback`` - the function to be run after the tick

```engine.start(ms, callback[optional]);```
``ms`` - the number of miliseconds between frames
``callback`` - the function to be run after each tick

```engine.stop();```
pauses the engine and the render
