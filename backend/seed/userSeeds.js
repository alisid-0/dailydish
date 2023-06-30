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
      selected_plan: []
    })
    await user1.save()

    const user2 = new User({
      username: 'Ali',
      email: 'alisid9835@gmail.com',
      password: 'safais34',
      role: 'user',
      address: '789 Butwhy St.',
      strip_id: '',
      selected_plan: []
    })
    await user2.save()

    const user3 = new User({
      username: 'Ra',
      email: 'ratest@gmail.com',
      password: 'ra123123',
      role: 'user',
      address: '789 Butwhy St.',
      strip_id: '',
      selected_plan: []
    })
    await user3.save()

    
}

const run = async() => {
    await main()
    db.close()
}
run()