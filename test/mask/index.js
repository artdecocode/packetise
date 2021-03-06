import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import packetise from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await packetise({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts