export function ActivitiesTimeline() {
  return (
    <div className="flex w-full max-w-md flex-col items-start space-y-6">
      <div className="flex w-full gap-x-6 aria-disabled:pointer-events-none aria-disabled:select-none">
        <div className="flex w-full items-center gap-3 overflow-hidden rounded-lg border border-surface bg-background px-3 py-2 shadow-lg shadow-black/5">
          <div className="relative">
            <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
              <svg
                width="1.5em"
                height="1.5em"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
                className="h-4 w-4"
              >
                <path
                  d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div className="text-foreground">
            <p className="font-sans text-base font-bold text-black antialiased dark:text-white">
              $2400, Design changes
            </p>
            <small className="mt-2 font-sans text-sm text-foreground antialiased">
              22 DEC 7:20 PM
            </small>
          </div>
        </div>
      </div>
      <div className="group flex w-full gap-x-6 aria-disabled:pointer-events-none aria-disabled:select-none">
        <div className="flex w-full items-center gap-3 overflow-hidden rounded-lg border border-surface bg-background px-3 py-2 shadow-lg shadow-black/5">
          <div className="relative">
            <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
                className="h-4 w-4"
              >
                <path
                  d="M22 9V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V9ZM22 9H6"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div className="text-foreground">
            <p className="font-sans text-base font-bold text-black antialiased dark:text-white">
              New order #1832412
            </p>
            <small className="mt-2 font-sans text-sm text-foreground antialiased">
              21 DEC 11 PM
            </small>
          </div>
        </div>
      </div>
      <div className="group flex w-full gap-x-6 aria-disabled:pointer-events-none aria-disabled:select-none">
        <div className="flex w-full items-center gap-3 overflow-hidden rounded-lg border border-surface bg-background px-3 py-2 shadow-lg shadow-black/5">
          <div className="relative">
            <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
              <svg
                width="1.5em"
                height="1.5em"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
                className="h-4 w-4"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div className="text-foreground">
            <p className="font-sans text-base font-bold text-black antialiased dark:text-white">
              Payment completed for order #4395133
            </p>
            <small className="mt-2 font-sans text-sm text-foreground antialiased">
              20 DEC 2:20 AM
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
