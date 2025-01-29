import Link from "next/link";

const Links = ({ link }) => {
  const { route, title } = link;
  return (
    <Link href={route} className="text-gray-700 hover:text-blue-500">
      {title}
    </Link>
  );
};

export default Links;
