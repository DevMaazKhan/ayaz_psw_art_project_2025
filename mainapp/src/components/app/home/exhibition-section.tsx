import headerImage from "@/assets/images/home-image.jpg";
import LargeExhibition from "@/components/shared/exhibition/large-exhibition";

const ExhibitionSection = () => {
  return (
    <section className="max-w-360 mx-auto px-5 opacity-0 animate-fade-in-up">
      <LargeExhibition 
        name="Richard Misrach Rewind"
        description="Selections spanning five decades, from the artist’s most recent series to his first."
        image={headerImage}
        startDate={new Date()}
        endDate={new Date()}
      />
    </section>
  );
};

export default ExhibitionSection;
