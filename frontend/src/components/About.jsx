import { Container, Button} from "react-bootstrap"

function About(){

    return(
            <Container style={{display:`flex`, flexDirection: `column`, alignItems: `center`}}>
                <div className='py-5' style={{textAlign:`left`}}>
                    <h1 className='py-5' style={{textAlign:`center`}} >Welcome to <span className="highlight">DailyDish.</span></h1>
                    <h3 className='py-3 px-5'>Your ultimate destination for delicious and convenient meal solutions!</h3>
                    <h5 className='py-3 px-5'>At DailyDish, we understand the challenges of planning and preparing meals amidst busy schedules and demanding lifestyles. That's why we've created a service that takes the hassle out of cooking while delivering incredible flavors and wholesome ingredients right to your doorstep.</h5>
                    <h5 className='py-3 px-5'>With DailyDish, you'll have access to a diverse and ever-growing menu of chef-curated meals designed to tantalize your taste buds. Our team of culinary experts carefully crafts each recipe to ensure a perfect balance of flavors, textures, and nutritional value. No matter what your budget, dietary needs or family size. Our flexible meal kits come complete with everything you need to quickly cook your meal. Whether you're a busy professional, a health-conscious individual, or a family looking to enjoy quality time over a delicious meal, we have you covered. Choose from a variety of dietary options, including vegetarian, vegan, gluten-free, kosher, and more. We believe that everyone deserves a meal that suits their unique preferences and requirements. Not only do we prioritize convenience and flavor, but we also value your health and well-being. Our commitment to using high-quality, locally sourced ingredients ensures that every bite you take is a step towards a healthier lifestyle. You can trust DailyDish to provide you with nourishing meals that support your overall well-being.</h5>
                    <h5 className='py-3 px-5'>Join us today and experience the joy of effortless cooking and extraordinary flavors. Get ready to explore a world of culinary delights, elevate your dining experience, and create lasting memories around the dinner table. We're here to make your life easier, tastier, and more enjoyable.</h5>
                </div>
                    <Button 
                        className="py-2 my-0 fs-2"
                        style={{backgroundColor:`#7B9E87`, color:`#E5C1BD`, width:`50%`}}
                        href='/services'> Get started in these easy steps</Button>
            </Container>
    )
}

export default About