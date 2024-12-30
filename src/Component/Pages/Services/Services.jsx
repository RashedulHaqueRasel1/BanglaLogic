
import web from './../../../assets/web.jpg'
import graphic from './../../../assets/graphic.jpg'
import branding from './../../../assets/branding.jpg'
import aboutUs from './../../../assets/about-us.jpg'

const data = [
    { title: "Branding Design", image: web, text: "Sem quis erat nibh id neque tincidunt molestie convallis ut nibh vel, lorem consequat ullamcorper." },
    { title: "Graphic Design", image: graphic, text: "Sem quis erat nibh id neque tincidunt molestie convallis ut nibh vel, lorem consequat ullamcorper." },
    { title: "Web Development", image: branding, text: "Sem quis erat nibh id neque tincidunt molestie convallis ut nibh vel, lorem consequat ullamcorper." },

]

const Services = () => {
    return (
        <div className="py-16 mx-auto container">

            <h1 className='py-10 font-semibold text-5xl lg:text-6xl p-4'>Our Services</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 p-4'>
                {
                    data.map(service => (
                        <div key={service.title}>
                            <img src={service.image} alt={service.title} className='h-[550px]' />
                            <h1 className='text-2xl lg:text-3xl font-medium pt-6 pb-3'>{service.title}</h1>
                            <p className='text-xl opacity-60 w-3/4 pt-3 pb-6'>{service.text}</p>
                        </div>
                    ))
                }
            </div>



            <div className='flex flex-col-reverse lg:flex-row items-center justify-around w-full  border  my-20'>
                <div className='w-1/2'>
                    <h1 className='text-5xl font-semibold w-3/4 leading-snug'>We help teams build the business of their dreams</h1>
                    <p className='text-xl opacity-60 leading-snug py-4 w-6/7'>Et in risus egestas nec vitae odio ac nibh vestibulum volutpat aliquet aenean erat lobortis non.
                        Nibh egestas dictumst cursus est turpis quis tincidunt pulvinar maecenas eget massa vel, ante nam blandit egestas enim id quis sit maecenas id nunc tempus auctor orci, enim imperdiet proin nibh mattis.</p>
                </div>

                <div className='w-1/2'>
                    <img src={aboutUs} alt="About Us" className=''/>
                </div>
            </div>


        </div>
    );
};

export default Services;