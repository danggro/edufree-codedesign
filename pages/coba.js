import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function coba() {
  const router = useRouter();
  const { keyword } = router.query;
  useEffect(() => {
    console.log(router.query.keyword);
    console.log(keyword);
  });

  return (
    <>
      <ul>
        <li>
          <Link href="/coba/abc">Go to pages/post/12.js</Link>
        </li>
        <li>
          <Link href="/coba/abc?foo=bar">Also goes to pages/post/[pid].js</Link>
        </li>
        <li>
          <Link href="/coba/abc/a-comment">
            Go to pages/post/[pid]/[comment].js
          </Link>
        </li>
        <li>
          <Link href={{ pathname: "/coba", query: { keyword: "this way" } }}>
            path
          </Link>
        </li>
      </ul>
      <div>{keyword}</div>
    </>
  );
}

export default coba;
