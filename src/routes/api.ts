import {Router} from "express";
import userController from '../controllers/userController'
export const API = Router();

API.put('/hola', userController.index);