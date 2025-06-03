import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3;
  const totalSlides = Math.ceil(testimonials.length / slidesToShow);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <Section className="bg-neutral-50">
      <SectionTitle
        title="Client Testimonials"
        subtitle="Discover what our clients have to say about their experience working with Space9."
        center
      />

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {testimonials
                    .slice(
                      slideIndex * slidesToShow,
                      slideIndex * slidesToShow + slidesToShow
                    )
                    .map((testimonial) => (
                      <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalSlides > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={goToPrev}
              className="p-3 border border-neutral-200 hover:border-navy-700 hover:text-navy-700 transition-colors"
              aria-label="Previous testimonials"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="p-3 border border-neutral-200 hover:border-navy-700 hover:text-navy-700 transition-colors"
              aria-label="Next testimonials"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Testimonials;