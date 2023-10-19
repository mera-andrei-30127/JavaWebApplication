import clsx from "clsx";

type IconProps = { open?: boolean; className?: string };

const Folder = ({ open, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-9 h-9 mt-1"
    >
      <path
        fill="white"
        d="M216 72h-84.69L104 44.69A15.88 15.88 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.41 15.41 0 0 0 39.39 216h177.5A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16ZM40 56h52.69l16 16H40Z"
      />
    </svg>
  );
};

export default Folder;
