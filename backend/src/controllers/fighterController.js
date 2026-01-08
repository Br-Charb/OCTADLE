import * as fighterService from "../services/fighterService.js";

export const getAllFighters = (req, res) => {
    const fighters = fighterService.getAllFighters();
    res.json(fighters);
}

export const getDailyFighter = (req, res) => {
    const fighter = fighterService.getDailyFighter();
    res.json(fighter);
}
