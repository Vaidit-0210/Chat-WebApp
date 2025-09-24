import illustration from "../assets/my-illustration.svg";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-base-200 p-12">
      <div className="max-w-md w-full text-center">

        <div className="mb-8 flex justify-center">
          <img src={illustration} alt="Community illustration" className="w-64 h-64" />
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;