# Game Template

This is a template project for creating games using the [Excalibur](https://excaliburjs.com) game engine.
  
## Getting Started

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
