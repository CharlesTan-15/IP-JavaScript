const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials =[
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text:
        "I've worked with literally hundreds of HTML/CSS Developers and i have to say the top spot goes to this guy. This guy",
    },
    {
        name: 'June cha',
        position: 'Software Engineer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text:
        "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him",
    },
    {
        name: 'Iida Niskenen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text: 
        "this guys is a hard worker, communications was also ver good wit him and he was very responsive all the time",
    },
    {
        name: 'Renee Sims',
        position: 'Receptionist',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        text:
        "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and ill hire him again",
    },
    {
        name: 'Jonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portaits/men/43.jpg',
        text: 
        "i had my concerns that due to a tight dadline this project cant be done. but this guy proved me wrong not only he delivered but overdid it",
    },
    {
        name: 'Sasha Ho',
        position: 'Accountant',
        photo: 'https://images.pexels.com/photos/4158329/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        text: 
        "This guy is a top notch designer and front end developer. He Communicates well, works fast and produces quality wor. we have been lucky",

    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/protraits/men/97.jpg',
        text: 'this guy is a young and talented IT professional, proactive and responsible, with a strong work ethic.',
    },
]

let idx = 1

function updateTestimonial(){
    const {name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML =  name
    role.innerHTML = position

    idx++

    if (idx > testimonials.length -1){
        idx =0
    }

}

setInterval(updateTestimonial, 10000)