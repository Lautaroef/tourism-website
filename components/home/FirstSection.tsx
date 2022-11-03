// How do you think of
function FirstSection() {
  return (
    <section className="lg:max-w-7xl mx-auto my-12">
      <h1 className="pseudoClassesH1 lg:text-2xl text-xl">
        How do you think about your trip?
      </h1>
      <picture className="grid lg:grid-cols-4 smMd:grid-cols-2 grid-cols-1 lg:gap-x-6 w-11/12 mx-auto text-center">
        <a href="#" className="picture-0">
          <h1>Pure Adventure</h1>
        </a>
        <a href="#" className="picture-1">
          <h1>Traditional Excursions</h1>
        </a>
        <a href="#" className="picture-2">
          <h1>Unique Experiences</h1>
        </a>
        <a href="#" className="picture-3">
          <h1>Family Adventure</h1>
        </a>
      </picture>
    </section>
  );
}
// 746 x 1080

export default FirstSection;
