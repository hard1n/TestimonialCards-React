import "./App.css";
import Testimonial from "./components/testimonials";

function App() {
  return (
    <>
      <section className="testimonials-sect">
        <h1 className="testimonials-title">
          Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
        </h1>
        <div className="container"></div>
        <Testimonial
          img="Shawn-bf42c7b909dae3111d18a21870ee6ca5"
          name="Shawn Wang"
          country="Singapour"
          company={{
            name: "Amazon",
            job: "Ingeniero de software",
          }}
          comment={`Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.`}
          highlight="freeCodeCamp cambió mi vida."
        />
        <Testimonial
          img="Sarah-45de0e53b7b2520ebbac35c454b9748a"
          name="Sarah Chima "
          country="Nigeria"
          company={{
            name: "ChatDesk",
            job: "Ingeniera de Software",
          }}
          comment="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
          highlight="freeCodeCamp fue la puerta de entrada a mi carrera"
        />
        <Testimonial
          img="Sarah-45de0e53b7b2520ebbac35c454b9748a"
          name="Emma Bostian "
          country="Suecia"
          company={{
            name: "Spotify",
            job: "Ingeniera de Software",
          }}
          comment="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
          highlight="freeCodeCamp me dio las habilidades"
        />
      </section>
    </>
  );
}

export default App;
