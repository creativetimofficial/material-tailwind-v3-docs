export function ListCustomStyles() {
  return (
    <ul className="flex min-w-[240px] flex-col gap-0.5">
      <li className="group flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-foreground transition-all duration-300 ease-in hover:bg-info hover:text-secondary focus:bg-info focus:text-secondary aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">
        <span className="me-2.5 grid shrink-0 place-items-center">
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
          >
            <path
              d="M7 9L12 12.5L17 9"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
        Inbox
        <span className="ms-auto grid shrink-0 place-items-center ps-2.5">
          <div className="relative inline-flex select-none items-center rounded-full border border-transparent bg-info/10 p-0.5 font-sans text-xs font-medium leading-none text-info transition-colors duration-300 group-hover:bg-white">
            <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
              14
            </span>
          </div>
        </span>
      </li>
      <li className="group flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-foreground transition-all duration-300 ease-in hover:bg-info hover:text-secondary focus:bg-info focus:text-secondary aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">
        <span className="me-2.5 grid shrink-0 place-items-center">
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
          >
            <path
              d="M3.03919 4.2939C3.01449 4.10866 3.0791 3.92338 3.23133 3.81499C3.9272 3.31953 6.3142 2 12 2C17.6858 2 20.0728 3.31952 20.7687 3.81499C20.9209 3.92338 20.9855 4.10866 20.9608 4.2939L19.2616 17.0378C19.0968 18.2744 18.3644 19.3632 17.2813 19.9821L16.9614 20.1649C13.8871 21.9217 10.1129 21.9217 7.03861 20.1649L6.71873 19.9821C5.6356 19.3632 4.90325 18.2744 4.73838 17.0378L3.03919 4.2939Z"
              stroke="currentColor"
            ></path>
            <path
              d="M3 5C5.57143 7.66666 18.4286 7.66662 21 5"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
        Trash
        <span className="ms-auto grid shrink-0 place-items-center ps-2.5">
          <div className="relative inline-flex select-none items-center rounded-full border border-transparent bg-info/10 p-0.5 font-sans text-xs font-medium leading-none text-info transition-colors duration-300 group-hover:bg-white">
            <span className="font-inherit mx-1.5 my-0.5 leading-none text-inherit">
              40
            </span>
          </div>
        </span>
      </li>
      <li className="group flex select-none items-center rounded-md bg-transparent px-2.5 py-1.5 align-middle font-sans text-foreground transition-all duration-300 ease-in hover:bg-info hover:text-secondary focus:bg-info focus:text-secondary aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:bg-opacity-70 dark:hover:text-white dark:focus:text-white">
        <span className="me-2.5 grid shrink-0 place-items-center">
          <svg
            width="1.5em"
            height="1.5em"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        Settings
      </li>
    </ul>
  );
}
