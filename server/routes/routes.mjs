import {app} from '../server.mjs';
import * as userController from '../controller/usersController.mjs';
import cors from "cors";

"use strict";

const ALLOWED_URI = [
  'http://localhost:5173',
];

const corsOptionsDelegate = function (req, callback) {
  let corsOptions = {};
  if (ALLOWED_URI.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

export default function routes() {
    // GET ALL USERS
    app.get('/users', cors(corsOptionsDelegate), async (req, res, next) => {
        const response = await userController.getUserNames();
        return res.json(response);
        return res.send('Success with: /users')
    });

    // GET USERS COUNT
    app.get('/users/count', cors(corsOptionsDelegate), async (req, res, next) => {
        // const count = await userController.getUserCount();
        // return res.send(count);
      return res.send('Success with: /users/count')
    });
}