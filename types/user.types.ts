export interface User {
  _id: string,
  final_state: boolean,
  name: string,
  gender: Gender,
  year_of_birth: string,
  address: string,
  phone: string,
  choice_1: number,
  choice_2: number,
  choice_3: number,
  choice_4: number,
  score: number
}

enum Gender {
  Male = 'M',
  Female = 'F'
}

