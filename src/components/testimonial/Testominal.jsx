import React from "react";
import img1 from "../../assets/p3.png";
import img2 from "../../assets/p2.png";
import img3 from "../../assets/p1.png";
import "./Testominal.css";

const Data = [
  {
    id: 1,
    image: img1,
    title: "Shahbaz | FullStack Developer - UAE",
    description: "Laiba's expertise in web development is unmatched. Her attention to detail and dedication to delivering high-quality work make her a valuable asset to any team.",
  },
  {
    id: 2,
    image: img2,
    title: "M. Ali | lecturer CUI - ATD",
    description:
      "Working with Laiba was a pleasure. She not only met but exceeded our expectations with her exceptional web development skills.",
  },
  {
    id: 3,
    image: img3,
    title: "Arfah Ali | Web developer - CUI",
    description:
      "Her proactive approach to problem-solving make her an invaluable member of our team. I would not hesitate to recommend her to others seeking top-notch web development services",
  },
];

const Testimonial = ({ image, title, description }) => (
  <div className="testimonial-item">
    <img src={image} alt={title} className="testimonial-image" />
    <h3 className="testimonial-title">{title}</h3>
    <p className="testimonial-description">{description}</p>
  </div>
);

const TestimonialList = () => (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2 className="section__title">Testimonials</h2>
        <h3 className="section__subtitle"  style={{ color: 'grey' }}>See what our clients say</h3>
      </div>
      <div className="testimonial-container">
        {Data.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            image={testimonial.image}
            title={testimonial.title}
            description={testimonial.description}
          />
        ))}
      </div>
    </section>
  );
  

export default TestimonialList;
