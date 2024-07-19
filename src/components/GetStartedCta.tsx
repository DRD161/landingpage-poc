interface GetStartedProps {
  text: string;
}

const GetStartedCta = ({ text }: GetStartedProps) => {
  return (
    <a href="#" className="start-cta">
      {text}
    </a>
  );
};
export default GetStartedCta;
