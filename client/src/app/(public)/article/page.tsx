import Card from "@/components/molecules/card";

export default function Article() {
  const data = [
    {
      title: "Title",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
      image: "/img/pexels-eneida-nieves-964547.jpg",
    },
    {
      title: "Title",
      description: "lorem ipsum dolor sit amet ",
      image: "/img/pexels-eneida-nieves-964547.jpg",
    },
    {
      title: "Title",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
      image: "/img/pexels-eneida-nieves-964547.jpg",
    },
    {
      title: "Title",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
      image: "/img/pexels-eneida-nieves-964547.jpg",
    },
    {
      title: "Title",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
      image: "/img/pexels-eneida-nieves-964547.jpg",
    },
    {
      title: "Title",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
      image: "/img/pexels-eneida-nieves-964547.jpg",
    },
  ];
  return (
    <div className="flex">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="font-bold text-4xl">Artikel</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
