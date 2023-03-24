const { default: ItemLink } = require("../../ItemLink");

export default function FooterItemLink() {
  return (
    <ul className="flex space-x-[34px]">
      <ItemLink variant="black" href="#home">
        HOME
      </ItemLink>
      <ItemLink variant="black" href="#about">
        TENTANG KAMI
      </ItemLink>
      <ItemLink variant="black" href="#course">
        KURSUS
      </ItemLink>
      <ItemLink variant="black" href="#faq">
        FAQ
      </ItemLink>
      <ItemLink variant="black" href="#blog">
        <div className="flex items-center space-x-1">
          <span>BLOG</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8.333 5H5a1.667 1.667 0 00-1.667 1.667V15A1.667 1.667 0 005 16.667h8.333A1.667 1.667 0 0015 15v-3.333m-3.333-8.334h5m0 0v5m0-5l-8.334 8.334"
            ></path>
          </svg>
        </div>
      </ItemLink>
    </ul>
  );
}
