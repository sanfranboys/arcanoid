import { Response } from 'express'
import Feedback from '../models/feedback'
import { CustomRequest } from '../../types'

class Controller {
  list = (_req: CustomRequest, res: Response) => {
    Feedback.find({}, (err, docs) => {
      if (err) {
        res.send(err)
      }
      res.json(docs)
    })
  }

  create = (req: CustomRequest, res: Response) => {
    const data = req.body
    const feedback = new Feedback({
      text: data.text,
      author: data.author,
    })

    feedback.save().then(() => {
      res.send({ status: 'OK' })
    })
  }
}

const ControllerFeedback = new Controller()
export default ControllerFeedback
