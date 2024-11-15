import { Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export function TableWithStripedColumn() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-surface">
      <table className="w-full">
        <thead className="border-b border-surface bg-surface-light text-sm font-medium text-foreground dark:bg-surface-dark">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="px-2.5 py-2 text-start font-medium">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="group text-sm text-black dark:text-white">
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-3" : "p-3 border-b border-surface";

            return (
              <tr key={index}>
                <td className={classes}>{name}</td>
                <td
                  className={`${classes} bg-surface-light dark:bg-surface-dark`}
                >
                  {job}
                </td>
                <td className={classes}>{date}</td>
                <td
                  className={`${classes} bg-surface-light dark:bg-surface-dark`}
                >
                  <Typography
                    as="a"
                    href="#"
                    type="small"
                    className="font-medium hover:text-primary"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
