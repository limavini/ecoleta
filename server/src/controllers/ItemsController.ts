import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map(({ title, image, id }) => ({
      id,
      title,
      // @TODO: Handle dynamic ip from Expo
      image_url: `http://192.168.1.104:3333/uploads/${image}`,
    }));

    return response.json(serializedItems);
  }
}

export default ItemsController;
