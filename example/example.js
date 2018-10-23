/* yarn example/ */
import packetise from '../src'

(async () => {
  const res = await packetise({
    text: 'example',
  })
  console.log(res)
})()