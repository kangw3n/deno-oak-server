
import { User } from '../types/user.types.ts';
import { users } from '../models/db.ts';

export async function getAllUsers({response}: {response: any}) {
  const all_users:User[] = await users.find(); 
  response.body = {
    state: true,
    data: all_users
  };
}

export async function getUser({response, params}: {params: {id: string}, response: any, request: any}) {
  try {
    const user: User  = await users.findOne({ _id: { "$oid": params.id } });
    if (user) {
      response.status = 200;
      response.body = {
        state: true,
        data: user
      }
    } else {
      response.status = 404;
      response.body = {
        state: false,
        message: 'User Not Found'
      }
    }
    
  } catch (error) {
    
  }


}