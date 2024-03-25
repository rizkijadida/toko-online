interface User {
  gender: string;
  name: { title: string; first: string; last: string };
  phone: number;
  picture: { large: string };
}

interface RandomUserResponse {
  results: User[];
}

const URLVP = "https://randomuser.me/api/?results=2";
const URLMG = "https://randomuser.me/api/?results=1";
const URLMK = "https://randomuser.me/api/?results=1";
const URLPT = "https://randomuser.me/api/?results=3";

const Teams = async () => {
  const responsevp = await fetch(URLVP, { cache: "no-store" });
  const responsemg = await fetch(URLMG, { cache: "no-store" });
  const responsemk = await fetch(URLMK, { cache: "no-store" });
  const responsept = await fetch(URLPT, { cache: "no-store" });
  const { results }: RandomUserResponse = await responsevp.json();
  const { results: resultsmg }: RandomUserResponse = await responsemg.json();
  const { results: resultsmk }: RandomUserResponse = await responsemk.json();
  const { results: resultspt }: RandomUserResponse = await responsept.json();

  return (
    <main className="container m-5 mb-10">
      <h1 className="m-10 text-center text-5xl font-bold md:text-left">Team</h1>

      <div className="flex-rows mt-10  justify-center gap-12 lg:flex">
        <div className="mb-8 lg:mb-0">
          <h1 className="mb-2 text-xl font-semibold">Founder</h1>
          {results.map((item) => {
            return (
              <div>
                <img
                  src={item.picture.large}
                  className="mr-4 h-16 w-16 rounded-full"
                />
                <p>
                  {item.name.first} - {item.phone}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-8 lg:mb-0">
          <h1 className="mb-2 text-xl font-semibold">Manager</h1>
          {resultsmg.map((itemmg) => {
            return (
              <div>
                <img
                  src={itemmg.picture.large}
                  className="mr-4 h-16 w-16 rounded-full"
                />
                <p>
                  {itemmg.name.first} - {itemmg.phone}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-8 lg:mb-0">
          <h1 className="mb-2 text-xl font-semibold">Marketing Staff</h1>
          {resultsmk.map((itemmk) => {
            return (
              <div>
                <img
                  src={itemmk.picture.large}
                  className="mr-4 h-16 w-16 rounded-full"
                />
                <p>
                  {itemmk.name.first} - {itemmk.phone}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-8 lg:mb-0">
          <h1 className="mb-2 text-xl font-semibold">Production Staff</h1>
          {resultspt.map((itempt) => {
            return (
              <div>
                <img
                  src={itempt.picture.large}
                  className="mr-4 h-16 w-16 rounded-full"
                />
                <p>
                  {itempt.name.first} - {itempt.phone}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Teams;
