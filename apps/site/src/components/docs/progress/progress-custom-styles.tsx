import { Progress } from "@material-tailwind/react";

export function ProgressCustomStyles() {
  return (
    <Progress
      value={50}
      className="border border-gray-900/10 bg-gray-900/5 p-1 dark:border-gray-800 dark:bg-gray-900"
    >
      <Progress.Bar className="rounded-full" />
    </Progress>
  );
}
