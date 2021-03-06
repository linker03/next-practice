const MarkerIcon = ({ className }) => {
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 2C11.196 2 14 4.618 14 7.602C14 9.84 12.942 11.09 11.341 12.983C10.263 14.257 9.038 15.705 8 17.68C6.962 15.704 5.737 14.257 4.659 12.983C3.058 11.09 2 9.84 2 7.602C2 4.618 4.804 2 8 2ZM8 0C3.802 0 0 3.403 0 7.602C0 13.845 6.377 14.505 8 24C9.623 14.505 16 13.845 16 7.602C16 3.403 12.199 0 8 0ZM8 11C6.343 11 5 9.657 5 8C5 6.343 6.343 5 8 5C9.657 5 11 6.343 11 8C11 9.657 9.657 11 8 11Z"
        fill="inherit"
      />
    </svg>
  );
};

export default MarkerIcon;
