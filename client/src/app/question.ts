export class Question {
  user_id: String
  question: String
  _id: String
  option1: String
  option2: String
  option3: String
  option4: String
  options: Array<String> =[]
  vote: Number =0
  createdAt: Date
}
