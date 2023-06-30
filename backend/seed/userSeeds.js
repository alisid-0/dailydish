const db = require('../db')
const { User } = require("../models")

const main = async () => {
    const user1 = new User({
      username: 'Bryan',
      email: 'b.velez205@gmail.com',
      password: 'ilikecookies',
      role: 'user',
      address: '789 Butwhy St.',
      strip_id: '',
      subscription_id: ''
    })
    await user1.save()

    const user2 = new User({
      username: 'Ali',
      email: '',
      password: '',
      role: 'user',
      address: '789 Butwhy St.',
      strip_id: '',
      subscription_id: ''
    })
    await user2.save()

    const user3 = new User({
      username: 'Ra',
      email: '',
      password: '',
      role: 'user',
      address: '',
      strip_id: '',
      subscription_id: ''
    })
    await user2.save()

    
}

const run = async() => {
    await main()
    db.close()
}
run()