// App
import { Actor, Vector } from "excalibur"
import { Resources } from "./resources";
import { Game } from "./game";
import "./index.css";

class Main extends Game {
    /**
     * Creates the initial engine options.
     * @returns {ex.EngineOptions}
     */
    createEngineOptions() {
        return {
            ...super.createEngineOptions(),

            suppressPlayButton: true,
            width: 800,
            height: 600
        }
    }

    /**
     * This method is used to initialize all game objects.
     * @param {ex.Engine} engine
     * @returns {void}
     */
    async initialize(engine) {
        const player = new Actor({
            pos: new Vector(25, 25)
        });
        player.addDrawing(Resources.images.sword);

        engine.add(player);
    }

    /**
     * This method is used to load any game resources that need to be loaded.
     * @param {ex.Engine} engine 
     * @param {ex.Loader} loader 
     * @returns {void}
     */
    async load(engine, loader) {
        Object.keys(Resources)
            .map(name => Resources[name])
            .forEach(group =>
                Object.keys(group)
                    .map(name => group[name])
                    .forEach(resource => loader.addResource(resource))
            );
    }
}

const game = new Main()
    .start();
