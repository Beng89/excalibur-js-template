# Game Template
### Follow these instructions to create a game using [Excalibur](https://excaliburjs.com)!

## Getting Started

**Install Dependencies**
```shell
npm i
```
  
**Start Dev Server**
```shell
npm run server
```
  
**View in Browser**  
Visit http://localhost:3000 and start hacking away!

___
## Game

The Game class provides an abstraction for getting started with excalibur games. It provides three methods that should be overridden.

**createEngineOptions()**  
This method should return the initial options for the game engine.

**initialize(engine)**  
This method should be used to initialize any game objects.  
*initialize can be async.*

**load(engine, loader)**  
This method should be used to load any resources the game needs.  
*load can be async.*

## Useful Links:
* [Excalibur Documentation](https://excaliburjs.com/docs)
