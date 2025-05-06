import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: 'Nahid Hasan',
        feedback: 'EasySub made it super easy to manage all my subscriptions. Love the simplicity!',
        image: 'https://i.pravatar.cc/150?img=55',
    },
    {
        name: 'Tania Akter',
        feedback: 'Very user-friendly and smooth experience. Highly recommended!',
        image: 'https://i.pravatar.cc/150?img=49',
    },
    {
        name: 'Mehedi Rony',
        feedback: 'Best tool I’ve used to track my subscriptions. Clean and efficient!',
        image: 'https://i.pravatar.cc/150?img=61',
    },
    {
        name: 'Jamal Khan',
        feedback: 'Customer support was very helpful and quick. I’m really satisfied.',
        image: 'https://i.pravatar.cc/150?img=52',
    },
    {
        name: 'Shamim Hossain',
        feedback: 'The interface is so intuitive and smooth. Great experience overall!',
        image: 'https://i.pravatar.cc/150?img=57',
    },
    {
        name: 'Fahim Hasan',
        feedback: 'Tracking subscriptions has never been easier. Thank you EasySub!',
        image: 'https://i.pravatar.cc/150?img=60',
    },
];

const Testimonials = () => {
    return (
        <section className="bg-white px-4 md:px-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-indigo-700 mb-10">
                What Our Client Say
            </h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Autoplay, Pagination]}
            >
                {testimonials.map((t, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-gray-100 p-6 rounded-xl shadow-md h-full flex flex-col items-center text-center">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-indigo-500"
                            />
                            <p className="text-gray-700 italic text-sm mb-4">"{t.feedback}"</p>
                            <h4 className="text-indigo-600 font-semibold">{t.name}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
