import Posts from "./posts/page";

export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
        <Posts />
      </div>
    </>
  );
}
