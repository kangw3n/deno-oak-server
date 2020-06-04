import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllUsers, getUser } from '../controllers/doh.controller.ts';
import { indexView } from '../controllers/hbs.controllers.ts';

const router = new Router();

router.get('/',indexView)
router.get('/api/users', getAllUsers);
router.get('/api/users/:id', getUser);

export default router;
