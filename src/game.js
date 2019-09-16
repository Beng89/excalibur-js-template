import { Engine, Loader } from "excalibur";

export class Game {
    constructor() {
        const options = this.createEngineOptions();

        this._loader = new Loader();
        this._engine = new Engine(options);
    }

    /**
     * Creates the initial engine options.
     * @returns {ex.EngineOptions}
     */
    createEngineOptions() {
        return {};
    }

    /**
     * This method is used to initialize all game objects.
     * @param {ex.Engine} engine
     * @returns {void}
     */
    async initialize(engine) { }

    /**
     * This method is used to load any game resources that need to be loaded.
     * @param {ex.Engine} engine 
     * @param {ex.Loader} loader 
     * @returns {void}
     */
    async load(engine, loader) { }

    /**
     * Starts the game.
     * @returns {void}
     */
    async start() {
        console.debug("Starting game...");

        // First, initialize game objects...
        console.debug("|-> Initializing game...")
        await this.initialize(this._engine);
        console.debug("|-> Initialized game.")

        // Second, load resources...
        console.debug("|-> Loading game...");
        await this.load(this._engine, this._loader);
        console.debug("|-> Loaded game.");

        await this._engine.start(this._loader);
        console.debug("Started game.");
    }
}
