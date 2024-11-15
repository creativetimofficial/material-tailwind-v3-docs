export function BookingCard() {
  return (
    <div className="w-full max-w-[26rem] overflow-hidden rounded-lg border border-surface bg-background shadow-lg shadow-black/5">
      <div className="relative m-1.5 h-max w-[calc(100%-12px)] overflow-hidden rounded-[5px] p-0">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 "></div>
        <button className="!absolute right-2 top-2 inline-grid min-h-[28px] min-w-[28px] select-none place-items-center rounded-full border border-transparent bg-transparent text-center align-middle font-sans text-sm font-medium leading-none text-error transition-all duration-300 ease-in hover:border-error/10 hover:bg-error/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9999 3.94228C13.1757 2.85872 14.7069 2.25 16.3053 2.25C18.0313 2.25 19.679 2.95977 20.8854 4.21074C22.0832 5.45181 22.75 7.1248 22.75 8.86222C22.75 10.5997 22.0831 12.2728 20.8854 13.5137C20.089 14.3393 19.2938 15.1836 18.4945 16.0323C16.871 17.7562 15.2301 19.4985 13.5256 21.14L13.5216 21.1438C12.6426 21.9779 11.2505 21.9476 10.409 21.0754L3.11399 13.5136C0.62867 10.9374 0.62867 6.78707 3.11399 4.21085C5.54605 1.68984 9.46239 1.60032 11.9999 3.94228Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div className="h-max w-full rounded px-3 py-2">
        <div className="mb-2 flex items-center justify-between">
          <h6 className="font-sans text-base font-bold text-inherit antialiased md:text-lg lg:text-xl">
            Wooden House, Florida
          </h6>
          <p className="flex items-center gap-1.5 font-sans text-base text-inherit antialiased">
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
              className="h-[18px] w-[18px] text-warning"
            >
              <path
                d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            5.0
          </p>
        </div>
        <p className="font-sans text-base text-foreground antialiased">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </p>
        <div className="group mt-6 inline-flex flex-wrap items-center gap-3">
          <button className="group outline-none">
            <button className="inline-grid min-h-[46px] min-w-[46px] cursor-pointer select-none place-items-center rounded-full border border-surface bg-surface-light text-center align-middle font-sans text-base font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light hover:!opacity-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none group-hover:opacity-70">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
                className="h-5 w-5"
              >
                <path
                  d="M2 17V7C2 5.89543 2.89543 5 4 5H10H14H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H14H10H4C2.89543 19 2 18.1046 2 17Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.5 12.01L18.51 11.9989"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.5 12.01L5.51 11.9989"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </button>
          <button className="group outline-none">
            <button className="inline-grid min-h-[46px] min-w-[46px] cursor-pointer select-none place-items-center rounded-full border border-surface bg-surface-light text-center align-middle font-sans text-base font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light hover:!opacity-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none group-hover:opacity-70">
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
                  d="M12 19.51L12.01 19.4989"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2 8C8 3.5 16 3.5 22 8"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5 12C9 9 15 9 19 12"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.5 15.5C10.7504 14.1 13.2498 14.0996 15.5001 15.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </button>
          <button className="group outline-none">
            <button className="inline-grid min-h-[46px] min-w-[46px] cursor-pointer select-none place-items-center rounded-full border border-surface bg-surface-light text-center align-middle font-sans text-base font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light hover:!opacity-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none group-hover:opacity-70">
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
                  d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 17H15"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </button>
          <button className="group outline-none">
            <button className="inline-grid min-h-[46px] min-w-[46px] cursor-pointer select-none place-items-center rounded-full border border-surface bg-surface-light text-center align-middle font-sans text-base font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light hover:!opacity-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none group-hover:opacity-70">
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
                  d="M7 21L17 21"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z"
                  stroke="currentColor"
                ></path>
              </svg>
            </button>
          </button>
          <button className="group outline-none">
            <button className="inline-grid min-h-[46px] min-w-[46px] cursor-pointer select-none place-items-center rounded-full border border-surface bg-surface-light text-center align-middle font-sans text-base font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light hover:!opacity-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none group-hover:opacity-70">
              <svg
                width="1.5em"
                stroke-width="1.5"
                height="1.5em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
                className="h-5 w-5"
              >
                <path
                  d="M8 18C8 20.4148 9.79086 21 12 21C15.7587 21 17 18.5 14.5 13.5C11 18 10.5 11 11 9C9.5 12 8 14.8177 8 18Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 21C17.0495 21 20 18.0956 20 13.125C20 8.15444 12 3 12 3C12 3 4 8.15444 4 13.125C4 18.0956 6.95054 21 12 21Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </button>
          <button className="group outline-none">
            <button className="inline-grid min-h-[46px] min-w-[46px] cursor-pointer select-none place-items-center rounded-full border border-surface bg-surface-light text-center align-middle font-sans text-base font-medium leading-none text-secondary-foreground transition-all duration-300 ease-in hover:border-secondary-light hover:bg-secondary-light hover:!opacity-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none group-hover:opacity-70">
              +20
            </button>
          </button>
        </div>
      </div>
      <div className="w-full rounded px-3 pb-3 pt-3">
        <button className="inline-flex w-full select-none items-center justify-center rounded-md border border-primary bg-primary px-3.5 py-2.5 text-center align-middle font-sans text-sm font-medium leading-none text-primary-foreground transition-all duration-300 ease-in hover:border-primary-light hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
          Reserve
        </button>
      </div>
    </div>
  );
}
