import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

function App() {
  // Setting up my fetch starts here
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(2);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Loading Condition
  console.log();
  if (loading) {
    return (
      <section>
        <h1>loading.....</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <>
      <section>
        <header className="flex justify-center my-10">
          <h2 className="pb-3 text-3xl font-bold relative">
            Experience
            <span className="absolute bottom-0 left-5 right-5 h-[3px] bg-[#3ac3b4]"></span>
          </h2>
        </header>

        <div className="flex justify-center gap-20">
          <div>
            {jobs.map((item, index) => {
              return (
                <button
                  className={`${
                    index === value &&
                    "border-l-[3px] border-[#3ac3b4]  text-[#3ac3b4]"
                  } flex  mb-5 text-sm pl-10`}
                  key={index}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <article className="space-y-3">
            <h3 className=" text-3xl">{title}</h3>
            <button className="bg-[#cbd5e1] text-md px-2  py-1 rounded ">
              {company}
            </button>
            <p className="text-[#6d7f99] text-sm">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div
                  key={index}
                  className=" flex items-center gap-10 w-full max-w-[800px]"
                >
                  <FaAngleDoubleRight size={18} className="text-[#3ac3b4]" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
