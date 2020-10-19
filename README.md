# armor-js
A lightweight physics engine and renderer for games

#### this is still in early stages of development
[page](https://armor-js.epicraisin.repl.co/)

# DOCS
## Body
```new Body(type, width, height, x, y, options[optional]);```<br>
``type`` - a string indicating how the hibox should be set up and how the object should be rendered. can be ``ellipse`` or ``rect``<br>
``width`` - the width of the object in pixels<br>
``height`` - the height in pixel<br>
``x`` - the distance from the left side of the canvas to the center of the object<br>
``y`` - the distance from the top of the canvas to the center of the object<br>
``options`` - an object specifying anything else about the object<br>

## World
```new World(options[optional]);```<br>
``options`` - an object specifying anything else about the world<br>

```world.add(object[s]);```<br>
``object[s]`` - a single-layer array of objects or a single object to be added to the world<br>

## Render
```new Render(worldObject, canvasID, options[optional]);```<br>
``worldObject`` - the world being rendered<br>
``canvasID`` - the canvas being rendered to<br>
``options`` - an object specifying anything else about the object<br>

```render.draw();``` - draws the world. This is done automatically in ``engine.tick``<br>

## Engine
``` new Engine(world, render, options[optional]);```<br>
``world`` - the world being run by the engine<br>
``render`` - the render being run by the engine. Leave this blank or set it to ``'custom'`` if you want to use your own engine<br>
``options`` - an object specifying anything else about the object<br>

```engine.tick(callback[optional]);```<br>
steps the engine and render forward. This is done automatically in ``engine.start``<br>
``callback`` - the function to be run after the tick<br>

```engine.start(ms, callback[optional]);```<br>
``ms`` - the number of miliseconds between frames<br>
``callback`` - the function to be run after each tick<br>

```engine.stop();```<br>
pauses the engine and the render<br>
