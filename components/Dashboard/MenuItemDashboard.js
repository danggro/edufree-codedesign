export default function MenuItemDashboard({ icon, children, dropdown }) {
  return (
    <li className="flex items-center justify-between mb-10 text-sm font-medium">
      <div className="flex items-center space-x-4">
        <span>{icon}</span>
        <span>{children}</span>
      </div>
      {dropdown ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            stroke="#9197B3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 12l4-4-4-4"
          ></path>
        </svg>
      ) : (
        ""
      )}
    </li>
  );
}
