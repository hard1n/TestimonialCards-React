import "./App.css";
import Testimonial from "./components/testimonials";
import data from "./assets/data.json";

// const getData = async () => {
//   let res = await fetch("./assets/data.json");
//   let resJSON = await res.json();
//   console.log(res);
// };

function App() {
  // getData();
  // .then((res) => res.json())
  // .then((data) => console.log(data));
  const components = [];

  // const drawTestimonials = (data) => {
  // };
  data.forEach((obj) => {
    // console.log(obj);
    // console.log(obj.company.name);
    // console.log(obj.highlight);
    components.push(
      <Testimonial
        img={obj.img}
        name={obj.name}
        country={obj.country}
        company={{
          name: obj.company.name,
          job: obj.company.job,
        }}
        comment={obj.comment}
        highlight={obj.highlight}
      />
    );
  });
  return (
    <>
      <section className="testimonials-sect">
        <h1 className="testimonials-title">
          Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
        </h1>
        <div className="container">
          {data.map((obj) => (
            <Testimonial
              key={obj.id} // Unique key for each component
              img={obj.img}
              name={obj.name}
              country={obj.country}
              company={{
                name: obj.company.name,
                job: obj.company.job,
              }}
              comment={obj.comment}
              highlight={obj.highlight}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
