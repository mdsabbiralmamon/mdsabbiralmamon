import "./Button.css";

interface ButtonProps {
  name: string;
  isBeam?: boolean;
  containerClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  name,
  isBeam = false,
  containerClass,
}) => {
  return (
    <button className={`btn border-none hover:bg-[#1b1b1b] ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
